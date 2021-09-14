/*
|--------------------------------------------------------------------------
| Ones and Zeros
|--------------------------------------------------------------------------
|
*/

const binaryArrayToNumber = arr => {
   return parseInt(arr.join(''), 2);
}


let binaryArrayToNumber = a => +('0b' + a.join ``)


function binaryArrayToNumber(arr) {
   return arr.reduce((a, b) => a << 1 | b);
}


const binaryArrayToNumber = arr => {
   return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}


const binaryArrayToNumber = arr => {
   return parseInt(arr.reduce((x, y) => x + y, ''), 2);
}


console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);