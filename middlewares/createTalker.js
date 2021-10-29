const fs = require('fs/promises');
const { validateName, validateAge, validateTalk } = require('../services/validateTalker');

const getDataTalker = async (req, res) => {
  const readFile = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));
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
    const readFile = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));
    const dataTalker = await getDataTalker(req, res);
    await fs.writeFile('./talker.json', JSON.stringify([...readFile, dataTalker]));
    res.status(201).json(dataTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = createTalker;