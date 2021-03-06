const assert = require('assert');
const include = require('../../../src/compile/adapter/include');
const defaults = require('../../../src/compile/defaults');
const path = require('path');


module.exports = {
    before: () => {
        console.log('#compile/adapter/escape');
    },
    'include': {
        'read file': () => {
            const root = path.resolve(__dirname, '..', '..', 'res');;
            const base = path.resolve(root, 'index.html');
            const data = {};

            assert.deepEqual('hello world', include('./file.html', data, null, defaults.$extend({
                filename: base,
                root: '/'
            })));

            assert.deepEqual('hello world', include('./file.html', data, null, defaults.$extend({
                filename: base,
                root
            })));

            assert.deepEqual('hello world', include('file.html', data, null, defaults.$extend({
                filename: base,
                root: '/'
            })));

            assert.deepEqual('hello world', include('file.html', data, null, defaults.$extend({
                filename: base,
                root
            })));
        }
    }
};