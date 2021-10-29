const fs = require('fs/promises');

const getTalkerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const readFile = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));
    const talkerById = readFile.find((talker) => talker.id === Number(id));
    if (!talkerById) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(talkerById);
  } catch (err) {
    next(err);
  }
};

module.exports = getTalkerById;