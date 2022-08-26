const productModel = require("../models/ProductModel")
const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")

const order = async function(req , res){
    let data = req.body
   let freeAppuser = req.header.isfreeappuser
   let findUser = await userModel.findById({_id:data.userId})
   if(!findUser) return res.send({status:false,msg:"userId is invalild"})

   let findproduct = await productModel.findById({_id:data.productId})
   if(!findproduct) return res.send({status:false,msg:"productId is invalid"})

   if(freeAppuser == "false"){
    if(findUser.balance >= data.amount){
        data.isFreeAppUser = freeAppuser
        let ordercreater = await orderModel.create(data)
        let update = await userModel.updateOne({_id:findUser},{$inc:{balance:- data.amount}})
        let update1 = await userModel.updateOne({_id:findUser},{$set:{isfreeappuser:freeAppuser}})
        return res.send({msg:ordercreater})
    } else if(findUser.balance <=data.amount){
        return res.send({status:false,msg:"the doesn't have enough balance"})

    }else if(freeAppuser == "true"){
        data.isFreeAppUser = freeAppuser
        let ordercreater = await orderModel.create(data)
        let update1 = await userModel.updateOne({_id:findUser},{$set:{isfreeappuser:freeAppuser}})
        return res.send({msg:ordercreater})


    }
   }
}







module.exports.order=order