const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const bookModel= require("../models/bookModel.js")
const authorModel= require("../models/authorModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const allController= require("../controllers/allController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createAuthor", allController.createAuthor)

router.post("/createBook", allController.createBook  )

router.get("/allBooks", allController.allBooks)

router.get("/updatedBookPrice", allController.updatedBookPrice)
router.get("/authorsName", allController.authorsName)



module.exports = router;