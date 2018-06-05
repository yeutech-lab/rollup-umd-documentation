let redux;
try {
  redux = require('redux'); // eslint-disable-line global-require
} catch (e) {
  redux = null;
}

module.exports = redux;
