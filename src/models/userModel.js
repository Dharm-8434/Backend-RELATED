const mongoose = require('mongoose');



// const bookSchema = new mongoose.Schema({
//     book :String,
//     autherName : String,
//     catogary: String,
//     year : String,
// },{timestamps:true});


const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    year:Number,
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    stock: Boolean,
    total_page : Number
}, { timestamps: true });


module.exports = mongoose.model('Books', bookSchema) //users


//module.exports=mongoose.model('Dharm', bookSchema)
