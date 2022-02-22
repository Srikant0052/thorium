let obj = require('./logger');
// let help = require('../util/helper');

const express = require('express');
// const { chunk } = require('lodash');
// const { tail } = require('lodash');
// const { union } = require('lodash');
// const { fromPairs } = require('lodash');
// const lodash = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage('thorium')
    console.log(obj.url)
    res.send('Welcome to FunctionUp. I am Srikant Kr. Mahato and a part of Thorium')
});

router.get('/movies', function (req, res) {
    let movieList = ['Krish', 'Dhadkan', 'Dhoom', 'Pushpa']
    console.log(movieList)
    res.send(movieList)
});

router.get('/movies/:movieId', function (req, res) {
     movieList = ['Krish', 'Dhadkan', 'Dhoom', 'Pushpa']
     let value = req.params.movieId;

         if(value>movieList.length -1){
             res.send(" Type a valid index")
         }else{
             res.send(movieList[value])
         }
   
});

router.get('/movies1', function (req, res) {
    const movie1 =[ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Demo'
       }]
       
    res.send(movie1)
});

router.get('/films/:filmId', function (req, res) {
    const movie1 =[ {  id: 1,name: 'The Shining'}, { id: 2,name: 'Incendies'}, {id: 3,name: 'Rang de Basanti'}, { id: 4, name: 'Finding Demo'}]
    let value = req.params.filmId;
    let found = false;
    for(let i=0; i<movie1.length; i++){
        if(movie1[i].id == value){
            found = true
            res.send(movie1[i])
            break
        }
    }
    if(found == false){
        res.send('No movie exists with this id')
    }
    // res.send()
});


module.exports = router;