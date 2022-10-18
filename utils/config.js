require('dotenv').config();

const {
  mongodbURL = 'mongodb://localhost:27017/bitfilmsdb',
  PORT = 3001,
  NODE_ENV,
  JWT_SECRET,
} = process.env;

module.exports = {
  mongodbURL, PORT, NODE_ENV, JWT_SECRET,
};
