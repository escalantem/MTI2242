import * as _ from 'lodash';

const nums = _.range(1, 9);
console.log({ nums }); // => [1, 2, 3, 4, 5, 6, 7, 8, 9]

const chunks = _.chunk(nums, 3);
console.log({ chunks }); // => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const right = _.takeRight(nums, 2);
console.log({ right }); // => [7, 8, 9]