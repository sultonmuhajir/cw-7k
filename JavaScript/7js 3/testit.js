/*
|--------------------------------------------------------------------------
| Thinking & Testing: A and B?
|--------------------------------------------------------------------------
|
*/

function testit(a, b) {
   return a | b;
}


const testit = (a, b) => a | b;


function testit(a, b) {
   return ~(~a & ~b);
}


console.log(testit(0, 1), 1);
console.log(testit(1, 2), 3);
console.log(testit(10, 20), 30);
console.log(testit(1, 1), 1);
console.log(testit(1, 3), 3);