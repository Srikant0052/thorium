let obj = require('./logger');
// let help = require('../util/helper');

const express = require('express');

const router = express.Router();

let player = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ],
        "bookings": [
            {
                'bookingId': 1,
                'sportId': 5,
                'centerId': 65,
                'type': 'private',
                'slot': 16286598000000,
                'bookedOn': '31/08/2021',
                'bookedFor': '01/09/2021'
            }

        ]
    },

    {
        "name": "rahul",
        "dob": "1/10/1995",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "cricket"
        ],
        "bookings": [

        ]
    },

    {
        "name": "virat",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "cricket"
        ],
        "bookings": [
        ]
    }


]




router.post("/player", function (req, res) {
    // let arr= [ 12, "functionup"]
    let input = req.body.element;
    for (let i = 0; i < player.length; i++) {
        if (player[i].name == input.name) {
            res.send("player already exists")

        } else {

            player.push(input)
            res.send({ msg: player, status: true })
        }
    }

    console.log(player)
})



router.post("/players/:playerName/bookings/:bookingId", function (req, res) {
    // let arr= [ 12, "functionup"]
    const playerName = req.params.playerName
    const bookingId = req.params.bookingId
    let input = req.body.element;
    for (let i = 0; i < player.length; i++) {
        if (player[i].name === playerName) {
            if (player[i].bookings.bookingId != bookingId) {
                player[i].bookings.push(input)
                res.send({ msg: player, status: true })
            } else {

                res.send("duplicat booking")

            }
        } 
    }
    res.send("player doesnot exists")

    // console.log(player)
})

module.exports = router;