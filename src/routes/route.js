const express = require('express');
const lodash = require('lodash');
const abc = require('../introduction/intro')
const wel3 = require('../logeer/loger.js')
const abcd = require('../util/helper');
const router = express.Router();
const abcd2 = require('../util/helper')


// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     console.log(wel3.stu,abcd.dat);
//     //console.log(resul);
//     wel3.welcome_massage()
//     abc.printName()
//     abcd.re()
//     abcd.batch()


//     res.send('My second ever api!')
// });


// router.get('/test-you', function(req, res){
//     res.send('This is the second routes implementation')
// })

// router.get('/missing-number',function(req, res){
//  let arr = [1,2,3,4,6,7]
//  let sum = 0;
//  for(let i=0;i<arr.length;i++){
//  sum += arr[i];
//  }
//  let N = arr.pop()
//  let missing_num = (N *(N+1)/2)- sum;
//  console.log(missing_num);
//  res.send( { data: missing_num  });

// })

// router.get('/missing-num',function(req, res){
//     let arr = [33,34,35,37,38]
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//     sum += arr[i];
//     }
//     let L = arr.length + 1;
//     let N = arr.pop()
//     let M = arr.shift();
    
   
//     let missing_num = (L*(N+M)/2)- sum;
//     console.log(missing_num);
//     res.send( { data: missing_num  });
   
//    })






module.exports = router;

// adding this comment for no reason