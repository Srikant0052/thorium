const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createNewBook", UserController.createNewBook  )

router.get("/getBookData", UserController.getBookData)

module.exports = router;