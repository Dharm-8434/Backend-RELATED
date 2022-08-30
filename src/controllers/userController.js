const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (abcd, xyz) {
 try{
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
 }
 catch(err){
  res.status(500).send({msg:err,data:"this is error data"})
 }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
  } 
  catch (err){
    res.send({msg:err})
  }
};

const getUserData = async function (req, res) {
  try{

  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];


  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);

 
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  }
  catch(err){
    res.send({msg:err})
  }
};

const updateUser = async function (req, res) {
try{  

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
}
catch(err){
res.send({msg:err})
}
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
