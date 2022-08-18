const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
   author_id:Number,
    author_Name: String,
    age: Number,
   address:String
}, { timestamps: true });

module.exports = mongoose.model('Authors', authorSchema) //users



// String, Number
// Boolean, Object/json, array