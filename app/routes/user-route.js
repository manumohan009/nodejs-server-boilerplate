const express = require('express');
const user = express.Router();
const userController = require("./../../app/controllers/user-controller");
const auth = require('./../middlewares/auth');

// route middleware that will happen on every request
user.use(function(req, res, next) {
    // log each request to the console
// console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next(); 
});

user.get('/view/all', auth.isAuthorized, userController.getAllUser);

user.get('/:userId/details', auth.isAuthorized, userController.getSingleUser);

user.post('/signup', userController.signUpFunction);

user.post('/login', userController.loginFunction);

user.put('/:userId/edit', auth.isAuthorized, userController.editUser);

user.post('/:userId/delete', auth.isAuthorized, userController.deleteUser);

user.post('/logout', auth.isAuthorized, userController.logout);

module.exports = user;



// --------------------------------------------------------------------------------

// route middleware that will happen on every request
// router.use(function(req, res, next) {
//     // log each request to the console
//     console.log(req.method, req.url);
//     // continue doing what we were doing and go to the route
//     next(); 
// });
// --------------------------------------------------------------------------------
// route middleware to validate :name
// router.param('name', function(req, res, next, name) {
//     // do validation on name here
//     // blah blah validation
//     // log something so we know its working
//     console.log('doing name validations on ' + name);

//     // once validation is done save the new item in the req
//     req.name = name;
//     // go to the next thing
//     next(); 
// });

// --------------------------------------------------------------------------------
