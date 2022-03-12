/*
|--------------------------------------------------------------------------
| Numbers in strings
|--------------------------------------------------------------------------
|
*/

function solve(s) {
   return Math.max(...s.match(/\d+/g).map(i => Number(i)))
}


function solve(s) {
   return Math.max(...str.split(/\D/));
}


function solve(s) {
   return Math.max(...s.replace(/(\D+)/g, ',').split(','))
}


console.log(solve('gh12cdy695m1'), 695);
console.log(solve('2ti9iei7qhr5'), 9);
console.log(solve('vih61w8oohj5'), 61);
console.log(solve('f7g42g16hcu5'), 42);
console.log(solve('lu1j8qbbb85'), 85);