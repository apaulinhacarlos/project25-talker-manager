const validateName = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  return name;
};

const validateAge = (req, res) => {
  const { age } = req.body;
  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  return age;
};

const validateWatchedAt = (req, res) => {
  const { talk } = req.body;
  const { watchedAt } = talk;
  const watchedAtRegex = /([0-9]{2})+\/+([0-9]{2})+\/+([0-9]{4})/;
  if (!watchedAt) {
    return res
      .status(400)
      .json(
        { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
      );
  }

  if (!watchedAtRegex.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  return watchedAt;
};

const validateRate = (req, res) => {
  const { talk } = req.body;
  const { rate } = talk;
  if (!rate) {
    return res
      .status(400)
      .json(
        { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
      );
  }

  if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  return rate;
};

const validateTalk = (req, res) => {
  const { talk } = req.body;
  if (!talk) {
    return res
      .status(400)
      .json(
        { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
      );
  }
  const result = {
    watchedAt: validateWatchedAt(req, res),
    rate: validateRate(req, res),
  };
  return result;
};

module.exports = { 
  validateName,
  validateAge,
  validateTalk,
};