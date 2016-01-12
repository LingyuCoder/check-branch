# check-branch

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/check-branch.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/check-branch?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/check-branch.png)](https://travis-ci.org/LingyuCoder/check-branch)
[![Dependency Status](https://david-dm.org/LingyuCoder/check-branch.svg)](https://david-dm.org/LingyuCoder/check-branch)
[![devDependency Status](https://david-dm.org/LingyuCoder/check-branch/dev-status.svg)](https://david-dm.org/LingyuCoder/check-branch#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/check-branch.svg?style=flat-square)](http://npmjs.org/package/check-branch)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/check-branch.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/check-branch.svg?style=flat-square)](https://npmjs.org/package/check-branch)

> Check that you are in the right branch

## Installation

```bash
$ npm install --save check-branch
```

## Usage

Promise check(branch[, cwd])

```javascript
const checker = require('check-branch');
checker('master', '/Users/xxx/project_dir') // default process.cwd()
  .then(result => {
    /*
    result = {
      // check result
      success: true|false,
      // current branch
      detail: String
    }
    */
    if(result.success)
      console.log('Passed');
    else
      console.log(`Expected to be in branch master but current in ${result.detail}`);
  })
  .catch(e => console.error(e.message));
```

## Test

```bash
$ npm run test
$ npm run test-cov
$ npm run test-travis
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
