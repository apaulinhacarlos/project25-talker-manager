const fs = require('fs/promises');

const deleteTalker = async (req, res, next) => {
  try {
    const { id } = req.params;
    const readFile = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));
    const deletedTalker = readFile.filter((item) => item.id !== Number(id));
    await fs.writeFile('./talker.json', JSON.stringify(deletedTalker));
    res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteTalker;
