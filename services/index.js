const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateLogin = require('./validateLogin');
const generateToken = require('./generateToken');

module.exports = { 
  validateEmail,
  validatePassword,
  validateLogin,
  generateToken,
};