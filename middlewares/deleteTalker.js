const fs = require('fs');

const deleteTalker = async (req, res, next) => {
  try {
    const { id } = req.params;
    const readFile = await JSON.parse(fs.readFileSync('./talker.json', 'utf-8'));
    const deletedTalker = readFile.filter((item) => item.id !== Number(id));
    await fs.writeFileSync('./talker.json', JSON.stringify(deletedTalker));
    res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteTalker;
