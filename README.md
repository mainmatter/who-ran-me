## who-ran-me

This is a tiny utility function that is designed to tell you how the current node script has been run. For example if you have a test file that looks like this:

```javascript
const whoRanMe = require('who-ran-me');

describe('who-ran-me utility', function () {
  it('should always just log who ran me!', function () {
    console.log(`Run with ${whoRanMe()}`);
  });
});
```

And the following `scripts` entries in your `package.json`:

```JSON
{
  "scripts": {
    "test": "mocha"
  }
}
```

you would have multiple ways to actually execute this test and it will print out the method:

```bash
npm test
# Run with npm
```

```bash
yarn test
# Run with yarn
```

```bash
# mocha is installed globally
mocha
# Run with mocha
```

```bash
# mocha does not need to be installed globally
npx mocha
# Run with npx
```
