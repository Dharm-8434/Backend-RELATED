const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name: String, 
    author_id: Number, 
    price:Number,
    rating:Number,
    isdeleted:Boolean
}, { timestamps: true });


module.exports = mongoose.model('Newbook', bookSchema) //users
