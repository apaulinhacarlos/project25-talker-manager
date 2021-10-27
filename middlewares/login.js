const { validateLogin, generateToken } = require('../services');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let response;
    let statusCode;
    const errorMessage = validateLogin(email, password);
    if (!errorMessage) {
      response = { token: generateToken() };
      statusCode = 200;
    } else {
      response = { message: errorMessage };
      statusCode = 400;
    }
    res.status(statusCode).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = login;