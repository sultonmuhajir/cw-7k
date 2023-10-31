/*
|--------------------------------------------------------------------------
| Genetic Algorithm Series - #3 Crossover
|--------------------------------------------------------------------------
|
*/

function crossover(c1, c2, i) {
   return [c1.slice(0, i) + c2.slice(i), c2.slice(0, i) + c1.slice(i)];
}


const crossover = (a, b, i) => [a.slice(0, i) + b.slice(i), b.slice(0, i) + a.slice(i)];


function crossover(chromosome1, chromosome2, index) {
   return [
      chromosome1.substring(0, index) + chromosome2.substring(index),
      chromosome2.substring(0, index) + chromosome1.substring(index),
   ];
}


console.log(crossover("111000", "000110", 3), ["111110", "000000"]);