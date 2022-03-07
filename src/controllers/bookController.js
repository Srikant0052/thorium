const { count } = require("console")
const publisherModel = require("../models/publisherModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const { Z_ASCII } = require("zlib")

const createBook= async function (req, res) {
    let book = req.body
    let input = req.body.authorId
    let input1 = req.body.publisherId
   
     if(!input) return res.send('This field is required.')

     let author = await authorModel.findById(input)
     if(!author) return res.send('The author is not present with the given author id')
 
     if(!input1) return res.send('This field is required.') 
 
     let publisher = await publisherModel.findById(input1)
     if(!publisher) return res.send('The publisher is not present with the given publisher id')
 
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let allBooks = await bookModel.find().populate('authorId').populate('publisherId')
                                    
    res.send({data: allBooks})
}


const updateBooks= async function (req, res) {
    
    // let hardCoverPublishers = await publisherModel.find({
    // name: { $in : ["Penguin", "HarperCollins"]},
    // })
    // let publisherIds = hardCoverPublishers.map((ele) => ele._id)
    const publisherIds = await publisherModel.find({name :{$in :["HarperCollins","Penguin" ]}}).select({_id:1})
    
     
    await bookModel.updateMany(
        {publisherId : {$in : [publisherIds[0]["_id"], publisherIds[1]["_id"]]}},
        {isHardCover : true}
        
    )
    //  let changedPrice = await authorModel.find({rating:{$gt:3.5}})
    //  let authorIds = changedPrice.map((ele) => ele._id)

    //  await bookModel.updateMany({authorId : { $in: authorIds}},
    //     {$inc:{price: 10}});
        
       let updatedBooks = await bookModel.find()//.populate('authorId  publisherId' );                             
    res.send({UpdatedData: updatedBooks});
    // res.send(publisherIds);
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails