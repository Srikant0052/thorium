const { count } = require("console")
const BookModel = require("../models/bookModel.js")
//part-1
const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}


//part-2
const bookList = async function (req, res) {

    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0, year: 0, prices: 0, totalPages: 0, stockAvaible: 0, tags: 0 })
    res.send({ msg: allBooks })

}
//part-3
const getBooksInYear = async function (req, res) {
    const data = req.body
    let allBooks = await BookModel.find(data)
    res.send({ msg: allBooks })
}
//part-4
const getParticularBooks = async function (req, res) {

    const data = req.body
    let allBooks = await BookModel.findOne(data)
    res.send({ msg: allBooks })
}

//part-5
const getINRBooks = async function (req, res) {


    let allBooks = await BookModel.find({
        'prices.indianPrice': { $in: ["INR500", "INR200", "INR100"] }
    })
    res.send({ msg: allBooks })
}
//part-6
const getRandomBooks = async function (req, res) {
    let allBooks = await BookModel.find({ $or: [{ stockAvaible: true }, { totalPages: { $gt: 500 } }] })

    res.send({ msg: allBooks })
}




module.exports = { createBook, bookList, getBooksInYear, getParticularBooks, getINRBooks, getRandomBooks }
