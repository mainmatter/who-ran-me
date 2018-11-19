const { basename } = require('path');

module.exports = function whoRanMe() {
  if (process.env.npm_execpath) {
    const execPath = basename(process.env.npm_execpath);

    if (execPath.match('npm-cli.js')) {
      return 'npm';
    }

    if (execPath.match('yarn.js')) {
      return 'yarn';
    }
  } else if (process.env._) {
    return basename(process.env._);
  }

  console.log(process.env);

  return 'unknown';
};
