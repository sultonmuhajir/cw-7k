/*
|--------------------------------------------------------------------------
| Driving School Series #2
|--------------------------------------------------------------------------
|
*/

function cost(mins) {
   const x = Math.floor((mins - 60) / 30) * 10
   const y = mins % 30 > 5 ? 10 : 0;
   return mins - 60 < 0 ? 30 : x + y + 30;
}


function cost(mins) {
   return 30 + (mins > 65 ? Math.ceil((mins - 65) / 30) : 0) * 10
}


function cost(mins) {
   let sum = 30
   mins -= 60
   while (mins > 5) {
      sum += 10
      mins -= 30
   }
   return (sum);
}


function cost(mins) {
   return Math.ceil(Math.max(0, mins - 65) / 30 + 3) * 10;
}


function cost(mins) {
   return mins <= 60 ? 30 : 30 + 10 * (Math.ceil((mins - 60 - 5) / 30))
}


console.log(cost(45), 30);
console.log(cost(63), 30);
console.log(cost(84), 40);
console.log(cost(102), 50);
console.log(cost(273), 100);