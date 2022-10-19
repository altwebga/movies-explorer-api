const Reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const validateURL = (value) => {
  if (value !== value.match(Reg).join('')) {
    throw new Error('Неправильный формат ссылки');
  }
  return value;
};

module.exports = {
  validateURL,
  Reg,
};

