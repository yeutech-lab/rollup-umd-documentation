let reactIntl;
try {
  reactIntl = require('redux'); // eslint-disable-line global-require
} catch (e) {
  reactIntl = null;
}

module.exports = reactIntl;
