const { count } = require("console")
const publisherModel = require("../models/publisherModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

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

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails