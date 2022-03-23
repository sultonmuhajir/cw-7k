/*
|--------------------------------------------------------------------------
| Small enough? - Beginner
|--------------------------------------------------------------------------
|
*/

function smallEnough(a, limit) {
   return a.filter(i => i <= limit).length == a.length;
}


function smallEnough(a, limit) {
   return Math.max(...a) <= limit
}


function smallEnough(a, limit) {
   return a.every(x => x <= limit);
}


console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);