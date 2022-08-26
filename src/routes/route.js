const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const ProductController= require("../controllers/ProductController")
//const commonMW = require ("../middlewares/commonMiddlewares")
const ordercon = require("../controllers/onderController")
const md = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {

    res.send("My first ever api!")
})


router.post("/createUser", md.mid1,UserController.createUser)

router.post("/createproduct",md.mid1, ProductController.createproduct  )

router.post("/order",ordercon.order)



module.exports = router;