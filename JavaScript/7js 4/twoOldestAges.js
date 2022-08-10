/*
|--------------------------------------------------------------------------
| Two Oldest Ages
|--------------------------------------------------------------------------
|
*/

function twoOldestAges(ages) {
   return [ages.sort((a, b) => b - a)[1], ages.sort((a, b) => b - a)[0]];
}


function twoOldestAges(ages) {
   return ages.sort(function (a, b) {
      return a - b;
   }).slice(-2);
}


function twoOldestAges(ages) {
   let oldest = -Infinity;
   let second = -Infinity;
   for (let i = 0; i < ages.length; ++i) {
      if (ages[i] > oldest) {
         second = oldest;
         oldest = ages[i];
      } else if (ages[i] > second) {
         second = ages[i];
      }
   }
   return [second, oldest];
}


function twoOldestAges(ages) {
   let findOldest = Math.max(...ages);
   let oldest = ages.splice(ages.indexOf(findOldest), 1)
   let findSecondOldest = Math.max(...ages);
   let secondOldest = ages.splice(ages.indexOf(findSecondOldest), 1);
   return [...secondOldest, ...oldest]
}


console.log(twoOldestAges([1, 5, 87, 45, 8, 8]), [45, 87]);
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]), [18, 83]);