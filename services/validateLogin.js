const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');

const validateLogin = (email, password) => {
  if (!email) {
    return 'O campo "email" é obrigatório';
  }
  
  if (!password) {
    return 'O campo "password" é obrigatório';
  }

  if (!validateEmail(email)) {
    return 'O "email" deve ter o formato "email@email.com"';
  }

  if (!validatePassword(password)) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }

  return null;
};

module.exports = validateLogin;