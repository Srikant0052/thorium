const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    author_id : {
        type:Number,
        required: true
    },
    price: Number,
    rating: String 
   
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
