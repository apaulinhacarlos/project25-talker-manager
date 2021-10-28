const fs = require('fs');

const getAllTalkers = async (req, res, next) => {
  try {
    const readFile = await JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
    res.status(200).json(readFile);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllTalkers;