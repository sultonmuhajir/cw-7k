/*
|--------------------------------------------------------------------------
| Find the calculation type
|--------------------------------------------------------------------------
|
*/

function calcType(a, b, res) {
   if (a + b == res) {
      return 'addition'
   } else if (a - b == res) {
      return 'subtraction'
   } else if (a * b == res) {
      return 'multiplication'
   } else {
      return 'division'
   }
}


const calcType = (Q, S, R) => Q + S - R ? Q - S - R ? Q * S - R ? 'division' : 'multiplication' : 'subtraction' : 'addition'


const calcType = (a, b, res) =>
   a + b === res ? 'addition' :
   a - b === res ? 'subtraction' :
   a * b === res ? 'multiplication' :
   a / b === res ? 'division' :
   null;


const calcType = (a, b, res) => ({
   [a + b]: `addition`,
   [a - b]: `subtraction`,
   [a * b]: `multiplication`,
   [a / b]: `division`
})[res];


function calcType(a, b, res) {
   if (a < res && b < res) {
      return a + b == res ? 'addition' : 'multiplication'
   } else {
      return a - b == res ? 'subtraction' : 'division'
   }
}


console.log(calcType(1, 2, 3), 'addition');
console.log(calcType(10, 4, 40), 'multiplication');
console.log(calcType(10, 5, 5), 'subtraction');
console.log(calcType(9, 5, 1.8), 'division');