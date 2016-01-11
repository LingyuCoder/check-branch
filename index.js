'use strict';

const execSync = require('child_process').execSync;
const co = require('co');

module.exports = co.wrap(function*(branch, cwd) {
  cwd = cwd || process.cwd();
  if (typeof branch !== 'string') return Promise.reject(new TypeError('Expected branch to be a string'));
  if (typeof cwd !== 'string') return Promise.reject(new TypeError('Expected cwd to be a string'));
  let cmdRst = '';
  try {
    cmdRst = execSync('git status', {
      cwd: cwd,
      stdio: 'pipe'
    }).toString();
  } catch (e) {
    if (e.message.indexOf('Not a git repository') !== -1)
      return Promise.reject(new Error(`No git repository was found in ${cwd}`));
    return Promise.reject(e);
  }
  return {
    success: cmdRst.trim().indexOf(`On branch ${branch}`) === 0
  };
});
