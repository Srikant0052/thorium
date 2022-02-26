const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: {
        type: String,
        enum: ["myth", "romance", "novel", "fiction", "biography", "firyTale",
         "drama", "history", "poems", "nonFiction","wetern" ]
    },
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('User', bookSchema) //users

// Create a bookSchema with bookName, authorName, category and year . 
// Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books. 


// String, Number
// Boolean, Object/json, array