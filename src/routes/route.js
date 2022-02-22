let obj = require('../logger/logger1');
let help = require('../util/helper');

const express = require('express');
const { chunk } = require('lodash');
const { tail } = require('lodash');
const { union } = require('lodash');
const { fromPairs } = require('lodash');
const lodash = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage('thorium')
    console.log(obj.url)
    res.send('Welcome to FunctionUp. I am Srikant Kr. Mahato and a part of Thorium')
});

router.get('/hi', function (req, res) {
    help.currentDate('Thorium')
    console.log(help)
    res.send('Welcome to FunctionUp. I am Srikant Kr. Mahato and a part of Thorium')
});

router.get('/hello', function (req, res) {
    let month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    console.log(lodash.chunk(month,4))
    res.send('Welcome to FunctionUp. I am Srikant Kr. Mahato and a part of Thorium')
});

router.get('/hello1', function (req, res) {
    let oddNumber =[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddNumber))

    res.send('Welcome to FunctionUp. I am Srikant Kr. Mahato and a part of Thorium')
});

router.get('/hello2', function (req, res) {
    let aar1 =[1,2,3]
    let aar2 =[3,4,5]
    let aar3 =[5,6,7]
    let aar4 =[7,8,9]
    let aar5 =[9,10,11]
    console.log(lodash.union(oddNumber))

    res.send('Welcome to FunctionUp. I am Srikant Kr. Mahato and a part of Thorium')
});

router.get('/hello3', function (req, res) {
 const movie =  [ ['horror' ,'The Shining'],['drama','Titanic'],['thriller','Shutter Islnd'],['fantasy','Pans Labyrinth']]

    console.log(lodash.fromPairs(movie))

    res.send('Welcome to FunctionUp. I am Srikant Kr. Mahato and a part of Thorium')
});



module.exports = router;