/*
|--------------------------------------------------------------------------
| By 3, or not by 3? That is the question . . .
|--------------------------------------------------------------------------
|
*/

function divisibleByThree(str) {
   return str.split('').map(i => Number(i)).reduce((a, b) => a + b) % 3 == 0;
}


function divisibleByThree(str) {
   return [...str].reduce((s, d) => +d + s, 0) % 3 == 0;
}


function divisibleByThree(str) {
   let s = 0;
   for (let c of str)
      s += parseInt(c);
   return s % 3 == 0;
}


console.log(divisibleByThree('123'), true);
console.log(divisibleByThree('19254'), true);
console.log(divisibleByThree('88'), false);
console.log(divisibleByThree('33333333'), true);