const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const createOrder = async function (req, res) {
    let userId = req.body.user;
    let userDetails = await userModel.findById(userId)
    if (!userDetails) return res.send("userId is invalid")

    let productId = req.body.product;
    let productDetails = await productModel.findById(productId)
    if (!productDetails) return res.send("productId is invalid")
    let header = req.headers.isfreeappuser
    if (header != 'true') {
        const productPrice = productDetails.price
        const usreBalance = userDetails.balance

        if (usreBalance < productPrice) {
            res.send("The user doesn't have sufficient balance")
        } else {
            let data = req.body
           const udatedUser = await userModel.updateOne({_id: userId},
            {$set:{balance: 250}})
            let savedData = await orderModel.create(udatedUser)

            res.send({ msg: savedData })
        }

    }else{
        let data = req.body
        let savedData = await orderModel.create(data)
        res.send({ msg: savedData })

    }

}

module.exports.createOrder = createOrder