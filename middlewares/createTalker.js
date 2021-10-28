const fs = require('fs');
const { validateName, validateAge, validateTalk } = require('../services/validateTalker');

const getDataTalker = async (req, res) => {
  const readFile = await JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
  const newId = readFile.length + 1;

  const data = {
    id: newId,
    name: validateName(req, res),
    age: validateAge(req, res),
    talk: validateTalk(req, res),
  };

  return data;
};

const createTalker = async (req, res, next) => {
  try {
    const readFile = await JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
    const content = await getDataTalker(req, res);
    await fs.writeFileSync('./talker.json', JSON.stringify([...readFile, content]));
    res.status(201).json(content);
  } catch (err) {
    next(err);
  }
};

module.exports = createTalker;