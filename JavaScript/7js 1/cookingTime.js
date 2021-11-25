/*
|--------------------------------------------------------------------------
| Boiled Eggs
|--------------------------------------------------------------------------
|
*/

function cookingTime(eggs) {
   return Math.ceil(eggs / 8) * 5;
}


const cookingTime = e => ~~((e + 7) / 8) * 5;


function cookingTime(eggs) {
   let min = 0;
   for (let i = 0; i < eggs; i += 8)
      min += 5;
   return min;
}


function cookingTime(eggs) {
   let minutes = 0;
   let counter = 0;
   while (counter < eggs) {
      counter += 8;
      minutes += 5
   }
   return minutes
}


console.log(cookingTime(0), 0);
console.log(cookingTime(5), 5);
console.log(cookingTime(10), 10);