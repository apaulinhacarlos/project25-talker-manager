const crypto = require('crypto');

const generateToken = () => {
  // codigo baseado em um dos grupos dos exercicios/Code Review do dia 25.5
  const token = crypto.randomBytes(8).toString('hex');
  return token;
};

module.exports = generateToken;