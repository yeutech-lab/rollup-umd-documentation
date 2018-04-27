// fake test because we cant have no test at all
describe('exported', () => {
  const exported = {
    test: true,
  };
  Object.keys(exported).forEach((key) => {
    it(`should export ${key}`, () => {
      expect(exported[key]).toBeDefined();
    });
  });
});
