module.exports = function (wallaby) {
  process.env.NODE_ENV = 'test';
  return {
    files: [
      { pattern: 'src/**/*.js?(x)', load: false },
      'src/**/*.json',
      { pattern: 'test/fakeContexts.js', load: false }
    ],
    tests: [
      'test/**/*.test.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel()
    },
    testFramework: 'jest',
    debug: true
  };
};
