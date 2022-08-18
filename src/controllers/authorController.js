const authorModel= require("../models/authorModel")
const BookModel= require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getAuthorData= async function (req, res) {
    let newprice= await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let updaateprice =newprice.price
    console.log(updaateprice);
    let updateAuthor=await authorModel.find({author_id:{$eq:newprice.author_id}}).select({author_name:1,_id:0});
 res.send({updaateprice,updateAuthor})
}

const bookRange =async function(req,res){
    const range =await bookModel.find({price:{$gte:50,$lte:100}});
    const b= range.map(x=>x.author_id);
    const newRange= await authorModel.find({author_id:b}).select({author_name:1,_id:0});
    res.send (newRange);
}



module.exports.createAuthor= createAuthor
module.exports.getAuthorData= getAuthorData