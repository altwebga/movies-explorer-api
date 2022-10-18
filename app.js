const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const { mongodbURL, PORT } = require('./utils/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect(mongodbURL, { useNewUrlParser: true });

app.use(errors());

app.listen(PORT, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('Ошибка при запуске', ...err);
  }
  // eslint-disable-next-line no-console
  console.log(`Сервер запущен на порту ${PORT}`);
});
