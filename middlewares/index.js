const getAllTalkers = require('./getAllTalkers');
const getTalkerById = require('./getTalkerById');
const login = require('./login');
const createTalker = require('./createTalker');
const validateToken = require('./validateToken');

module.exports = { 
  getAllTalkers,
  getTalkerById,
  login,
  createTalker,
  validateToken,
};