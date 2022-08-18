//const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel")


const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let author= await authorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
let id =author[0].author_id
//console.log(id);
let books = await BookModel.find({author_id:{$eq:id}})
    res.send({msg:books})
}

const bookRange =async function(req,res){
    const range =await BookModel.find({price:{$gte:50,$lte:100}});
    const b= range.map(x=>x.author_id);
    const newRange= await authorModel.find({author_id:b}).select({author_name:1,_id:0});
    res.send (newRange);
}

// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.bookRange=bookRange
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
