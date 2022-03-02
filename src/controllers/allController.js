const BookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
// const bookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
     let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })
}

const allBooks = async function (req, res) {
    const authorDetails = await authorModel.find({ authorName: "Chetan Bhagat" });
    const Id = await authorDetails[0].author_id
    const booksName = await authorModel.find({author_id : Id}).select({bookName : 1});
    res.send({msg: booksName});

}

const updatedBookPrice =async function (req, res){

    const bookdetails = await BookModel.find({bookName : "Two State"})
    const id = bookdetails[0].author_id;
    const aName = await authorModel.find({author_id:id}).select({authorName:1, _id:0})
    const bkName = bookdetails[0].bookName
    const updatedPrice = await BookModel.findOneAndUpdate({name:bkName}, {price:100},{new:true}).select({price:1, _id:0})
    res.send({msg:aName, updatedPrice})
}

const authorsName = async function (req,res) {
    const bkName1 = await BookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = bkName1.map(ele => ele.author_id)
 
    let temp =[]
    for(let i=0; i<id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }

   const authorName = temp.flat()

  res.send({msg:authorName})
}


module.exports = {createBook, createAuthor, allBooks,updatedBookPrice, authorsName};