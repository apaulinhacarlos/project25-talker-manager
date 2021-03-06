const fs = require('fs/promises');
const { validateName, validateAge, validateTalk } = require('../services/validateTalker');

const getDataTalker = async (req, res) => {
  const { id } = req.params;
  
  const data = {
    id: Number(id),
    name: validateName(req, res),
    age: validateAge(req, res),
    talk: validateTalk(req, res),
  };

  return data;
};

const editTalker = async (req, res, next) => {
  try {
    const { id } = req.params;
    const readFile = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));
    const dataTalker = await getDataTalker(req, res);
    const newTalker = readFile.map((item) => {
      if (item.id !== Number(id)) return item;
      return dataTalker;
    });
    await fs.writeFile('./talker.json', JSON.stringify(newTalker));
    res.status(200).json(dataTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = editTalker;