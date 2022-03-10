const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middleWare.authenticate, userController.getUserData)
router.post("/users/:userId/posts", middleWare.authenticate, middleWare.authorise, userController.postMessage)

router.put("/users/:userId", middleWare.authenticate, middleWare.authorise, userController.updateUser)
router.delete("/users/:userId", middleWare.authenticate, middleWare.authorise,  userController.deleteUser)

module.exports = router;