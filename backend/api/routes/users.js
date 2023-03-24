var express = require('express');
var userModel=require('../models/user')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  const userDetails = new userModel({
    name: 'sanoj',
    email: 'sanoj@gmail.com',
    password: 'sanoj@123',
    
  });

  userDetails.save()
  .then(userDetails =>{
    res.render('index',{title:'user inserted'})
  })
  .catch(err=>{
     res.send('err:'+err)
  });
})

 


module.exports = router;
