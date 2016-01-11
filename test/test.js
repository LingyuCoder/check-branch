'use strict';

require('should');
const checker = require('../index');
const os = require('os');
const execSync = require('child_process').execSync;

describe('check-branch', () => {
  const currentBranch = execSync('git status').toString().match(/^On\sbranch\s(.*)\s/)[1];
  before(() => execSync('git checkout -b testbranch', {
    stdio: 'pipe'
  }));
  after(() => {
    execSync(`git checkout ${currentBranch}`, {
      stdio: 'pipe'
    });
    execSync('git branch -D testbranch', {
      stdio: 'pipe'
    });
  });
  describe('success', () => {
    it('should resolve object with success true if in right branch', () => {
      return checker('master').should.be.fulfilledWith({
        success: true,
        detail: 'master'
      });
    });
  });
  describe('fail', () => {
    beforeEach(() => execSync('git checkout -b sometestbranch', {
      stdio: 'pipe'
    }));
    afterEach(() => {
      execSync('git checkout master', {
        stdio: 'pipe'
      });
      execSync('git branch -D sometestbranch', {
        stdio: 'pipe'
      });
    });
    it('should resolve object with success false if not in right branch', () => {
      return checker('master').should.be.fulfilledWith({
        success: false,
        detail: 'sometestbranch'
      });
    });
  });
  describe('error', () => {
    it('should reject with an error when branch is not a string', () => {
      return checker({}).should.be.rejectedWith(TypeError, {
        message: 'Expected branch to be a string'
      });
    });
    it('should reject with an error when cwd is not a string', () => {
      return checker('master', {}).should.be.rejectedWith(TypeError, {
        message: 'Expected cwd to be a string'
      });
    });
    it('should reject with an error when no git repository found', () => {
      let dir = os.tmpdir();
      return checker('master', dir).should.be.rejectedWith(Error, {
        message: `No git repository was found in ${dir}`
      });
    });
  });
});
