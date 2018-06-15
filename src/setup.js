const bs = require('bootstrap-styled');

const { webkitURL: deprecated, webkitStorageInfo: deprecated2, ...rest } = global; // eslint-disable-line
global = { ...rest, ...bs }; // eslint-disable-line no-global-assign
