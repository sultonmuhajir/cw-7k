/*
|--------------------------------------------------------------------------
| Four/Seven
|--------------------------------------------------------------------------
|
*/

function fourSeven(n) {
   return { 7: 4, 4: 7 }[n] || 0;
}


const fourSeven = (n) => ~~{ 7: 4, 4: 7 }[n];


function fourSeven(n) {
   while (n == 4) return 7;
   while (n == 7) return 4;
   return 0;
}


console.log(fourSeven(4), 7);
console.log(fourSeven(7), 4);