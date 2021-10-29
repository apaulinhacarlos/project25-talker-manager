const fs = require('fs/promises');

const searchTalker = async (req, res, next) => {
  try {
    const { name } = req.query;
    const readFile = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));
    const getTalker = readFile.filter((item) => item.name.toLowerCase().includes(name));
    if (!name) return res.status(200).json(readFile);
    res.status(200).json(getTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = searchTalker;