const _ = require('lodash');
const arr = [1,[2,[3,[34,45,23]]],[434]];
console.log(_.flattenDeep(arr));