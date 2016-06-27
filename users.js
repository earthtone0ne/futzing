var express = require('express');
var router = express.Router();
// var db = require('./database');
// var Sequelize = require('sequelize');
var data = require('./models');
var Users = data.Users;
var Messages = data.Messages;


router.get('/a/a/a', function (req, res, next) {
   //swig isn't plugging in vars
   res.render('userview',{locals: {userName: 'Bob', messages: ['abc','123']}});
});

router.get('/:name/',function(req,res,next){
   if(!req.params.name){next();}
   Users.findOne({where: {name: req.params.name},include: [Messages]})
   .then(function(users){
      res.render('userview',{locals: {users}});  //swig isn't plugging in vars
      return users;
   })
   .catch(function (error) {
      console.log(error);
   });
});

router.post('/:name/:message',function (req,res,next) {
   var userName = req.params.name;
   var msg = req.params.message;
   var welcome='<h1> Welcome back, ';
   Users.findOrCreate({where: {name: userName}})
      .spread(function(user, created){
         if (created) {welcome = '<h1> Welcome, new user ';}
         return user;
      })
      .then(function (user) {
         var message = Messages.create({message: msg, authorId: user.get('id')})
         res.send(welcome + userName + '!</h1><p>Thanks for your message that '
            + msg + '.</p>')
         return message;
      })
      .catch(function (error) {
         console.log(error);
   })

})


module.exports=router;
