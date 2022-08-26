const { count } = require("console")
const productModel = require("../models/ProductModel")

const createproduct= async function (req, res) {
    let data= req.body

    let savedData= await productModel.create(data)
    res.send({msg: savedData})
}














// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createproduct = createproduct
