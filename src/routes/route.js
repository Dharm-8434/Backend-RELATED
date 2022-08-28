const express = require('express');
const router = express.Router();
const userco= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userCo.createUser  )

router.post("/login", userCo.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userCo.getUserData)

router.put("/users/:userId", userCo.updateUser)

module.exports = router;