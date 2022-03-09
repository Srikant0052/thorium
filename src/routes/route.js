const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare = require("../middleWare/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",  middleWare.mid1 , userController.getUserData)

router.put("/users/:userId",  middleWare.mid1, userController.updateUser)
router.delete("/users/:userId",  middleWare.mid1, userController.deleteUser)

module.exports = router;