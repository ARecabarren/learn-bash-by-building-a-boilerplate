const assert = require('assert');
const { getLastCommand, getCwd, getDirectoryContents } = require('./utils');

describe('tests', () => {
  let cwd, lastCommand, websiteDirectory;
  before(async () => {
    websiteDirectory = await getDirectoryContents('../website');
    lastCommand = await getLastCommand();
    cwd = await getCwd();
  });

  it('should pass', async () => {
    assert(websiteDirectory.indexOf('background.jpg') >= 0 && lastCommand[0] === 'touch' && /background\.jpg$/.test(lastCommand[1]) && cwd === '/home/strove/project/website');
  });
});

// solution
