const express = require('express');
const bodyParser = require('body-parser');

const {
  getAllTalkers,
  getTalkerById,
  login,
  createTalker,
  validateToken,
  editTalker,
  deleteTalker,
  searchTalker,
} = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getAllTalkers);

app.get('/talker/search', validateToken, searchTalker);

app.get('/talker/:id', getTalkerById);

app.post('/login', login);

app.post('/talker', validateToken, createTalker);

app.put('/talker/:id', validateToken, editTalker);

app.delete('/talker/:id', validateToken, deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
