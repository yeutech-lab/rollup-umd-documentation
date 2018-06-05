let provider;
try {
  provider = require('react-redux/lib/components/Provider'); // eslint-disable-line global-require
} catch (e) {
  provider = null;
}

module.exports = provider;
