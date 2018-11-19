const { expect } = require('chai');

const whoRanMe = require('../index');

describe('who-ran-me utility', function () {
  it('should report the runner correctly', function () {
    const expected = process.env.EXPECTED_RUNNER;

    if (!expected) {
      throw new Error(`You must run this test with expected outcome

e.g. EXPECTED_RUNNER=yarn yarn test`);
    }

    const actual = whoRanMe();

    expect(expected).to.equal(actual);
  });
});
