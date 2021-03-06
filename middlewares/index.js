const getAllTalkers = require('./getAllTalkers');
const getTalkerById = require('./getTalkerById');
const login = require('./login');
const createTalker = require('./createTalker');
const validateToken = require('./validateToken');
const editTalker = require('./editTalker');
const deleteTalker = require('./deleteTalker');
const searchTalker = require('./searchTalker');

module.exports = { 
  getAllTalkers,
  getTalkerById,
  login,
  createTalker,
  validateToken,
  editTalker,
  deleteTalker,
  searchTalker,
};