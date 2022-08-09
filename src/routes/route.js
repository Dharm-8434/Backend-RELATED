const express = require('express');
const lodash = require('lodash');
const abc = require('../introduction/intro')
const wel3 = require('../logeer/loger.js')
const abcd = require('../util/helper');
const router = express.Router();
const abcd2 = require('../util/helper')


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    console.log(wel3.stu,abcd.dat);
    console.log(resul);
    wel3.welcome_massage()
    abc.printName()
    abcd.re()
    abcd.batch()
    abcd2.resu

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;

// adding this comment for no reason