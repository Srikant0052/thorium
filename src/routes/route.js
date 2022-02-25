const express = require('express');
const router = express.Router();





let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    },
    {
        name: "SM",
        age: 19,
        votingStatus: false
    }
]

router.post("/voting-age", function (req, res) {
    let input = req.query.input;
    let person1 = [];
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age > input) {
            person1.push(persons[i])
            // console.log(person1)     


        }
    }
    for (let j = 0; j < person1.length; j++)
        person1[j].votingStatus = true
    res.send({ result: person1, status: true })
    // console.log(persons)     

})


// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

//  take this as sample for array of persons:






module.exports = router;