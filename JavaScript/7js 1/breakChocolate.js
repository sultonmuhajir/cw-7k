/*
|--------------------------------------------------------------------------
| Breaking chocolate problem
|--------------------------------------------------------------------------
|
*/


function breakChocolate(n, m) {
   return Math.max(n * m - 1, 0);
}


function breakChocolate(n, m) {
   return ((n * m) || 1) - 1;
}


function breakChocolate(n, m) {
   return n * m ? (n * m) - 1 : 0;
}


function breakChocolate(n, m) {
   return (n || 1) * (m || 1) - 1;
}


console.log(breakChocolate(5, 5), 24);
console.log(breakChocolate(7, 4), 27);
console.log(breakChocolate(1, 1), 0);