const fs = require('fs');

const readFileMiddleware = async (req, res, next) => {
  try {
    const file = await JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
    res.status(200).json(file);
  } catch (err) {
    next(err);
  }
};

module.exports = readFileMiddleware;