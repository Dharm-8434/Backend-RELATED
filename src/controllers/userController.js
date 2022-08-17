const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    //let year = req.year;
    let allUsers= await UserModel.find().select({bookName:1, authorName:1})
    res.send({msg:allUsers})
}
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData