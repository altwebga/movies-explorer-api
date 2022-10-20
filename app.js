const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const unknownError = require('./middlewares/unknownError');
const { mongodbURL, PORT } = require('./utils/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(helmet());
app.use(cors());
app.use(require('./routes/index'));

mongoose.connect(mongodbURL, { useNewUrlParser: true });
app.use(errorLogger);
app.use(errors());
app.use(unknownError);

app.listen(PORT, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('Ошибка при запуске', ...err);
  }
  // eslint-disable-next-line no-console
  console.log(`Сервер запущен на порту ${PORT}`);
});
