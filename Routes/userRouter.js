const express = require('express');

const Router = express.Router();

const userService = require('../Services/userService');

Router.post('/login',userService.userLogin);

module.exports = Router