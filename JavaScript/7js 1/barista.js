/*
|--------------------------------------------------------------------------
| Barista problem
|--------------------------------------------------------------------------
|
*/

function barista(coffees) {
   return coffees
      .sort((a, b) => a - b)
      .reduce((acc, el, i) => acc + el * (coffees.length - i) + 2 * i, 0);
}


function barista(coffees) {
   coffees = coffees.sort((a, b) => a - b);
   let totalTime = 0;
   let sum = 0;
   for (let i = 0; i < coffees.length; i++) {
      sum += i === 0 ? coffees[i] : coffees[i] + 2;
      totalTime += i === 0 ? coffees[0] : sum;
   }
   return totalTime;
}


function barista(coffees) {
   let cleanTime = 2;
   let line = coffees.sort((a, b) => a - b);
   let time = 0;
   while (line.length) {
      time += line[0] * line.length;
      line.shift();
      time += cleanTime * line.length;
   }
   return time;
}


console.log(barista([2, 10, 5, 3, 9]), 85);
console.log(barista([4, 3, 2]), 22);
console.log(barista([20, 5]), 32);
console.log(barista([20, 5, 4, 3, 1, 5, 7, 8]), 211);
console.log(barista([5, 4, 3, 2, 1]), 55);