const rollupDocumentation = require('../index');

describe('api exports', () => {
  it('should have all exports defined', () => {
    Object.keys(rollupDocumentation).forEach((exported) => { expect(exported).toBeDefined(); });
  });
});

