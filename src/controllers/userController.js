const { request } = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);

      res.status(201).send({ msg: savedData });
    }
    else { return res.status(400).send({ status: false, message: "User cann't be created" }) }
  } catch (error) {
    // console.log("this is error")
    res.status(500).send({ message: "error" })
  }

}

const loginUser = async function (req, res) {
  try {
    if (req.body && req.body.emailId && req.body.password) {
      let user = await userModel.findOne({ emailId: userName, password: password });
      if (user) {

        let token = jwt.sign(
          {
            userId: user._id.toString(),
            batch: "thorium",
            organisation: "FUnctionUp",
          },
          "functionup-thorium"
        );
        res.setHeader("x-auth-token", token);
        res.status(200).send({ status: true, data: token });
      } else {
        return res.status(401).send({
          status: false,
          msg: "username or the password is not corerct",
        });

      }
    } else {
      res.status(400).send({ status: false, msg: "Request body must contain userId and Password" })
    }
  } catch (error) {
    req.status(500).send({ status: false, msg: error.message })
  }
}
const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      return res.status(404).send({ status: false, msg: "No such user exists" });

    } else {
      return res.status(200).send({ status: true, data: userDetails });
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }

}

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(404).send("No such user exists");
    } else {
      let userData = req.body;
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
      res.status(200).send({ status: true, data: updatedUser });
    }


  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    } else {
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } });
      res.status(200).send({ status: true, data: updatedUser });
    }

  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}


const postMessage = async function (req, res) {
  try {
    let message = req.body.message
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases

    let user = await userModel.findById(req.params.userId)
    if (!user) {
      return res.status(404).send({ status: false, msg: 'No such user exists' })
    } else {
      let updatedPosts = user.posts
      //add the message to user's posts
      updatedPosts.push(message)
      let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

      //return the updated user document
      return res.status(200).send({ status: true, data: updatedUser })
    }

  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;
// catch(error){
//   return res.status(500).send({msg:"server error",error})
// }


// else{
//   return res.status(400).send({msg:"kuch bhi nahi he "})
// }