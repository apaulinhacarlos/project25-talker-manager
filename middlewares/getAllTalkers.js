const fs = require('fs/promises');

const getAllTalkers = async (req, res, next) => {
  try {
    const readFile = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));
    res.status(200).json(readFile);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllTalkers;