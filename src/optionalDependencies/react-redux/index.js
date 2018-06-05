let reactRedux;
try {
  reactRedux = require('react-redux'); // eslint-disable-line global-require
} catch (e) {
  reactRedux = null;
}

module.exports = reactRedux;
