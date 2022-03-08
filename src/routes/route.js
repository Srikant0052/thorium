const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const middleware = require("../middleware/middleware")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", middleware.mid1, UserController.createUser  )

router.post("/createProduct", productController.createProduct)
router.post("/createOrder", middleware.mid1, orderController.createOrder)




module.exports = router;