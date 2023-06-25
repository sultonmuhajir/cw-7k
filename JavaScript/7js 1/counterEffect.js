/*
|--------------------------------------------------------------------------
| Hit Count
|--------------------------------------------------------------------------
|
*/

function counterEffect(hitCount) {
   let res = [];
   for (let i = 0; i < hitCount.length; i++) {
      let temp = [];
      for (let j = 0; j <= hitCount[i]; j++) {
         temp.push(j);
      }
      res.push(temp);
   }
   return res;
}


const counterEffect = (hitCount) => [...hitCount].map((val) => [...Array(++val).keys()]);


function counterEffect(hitCount) {
   return [...hitCount].map((d) => Array.from({ length: +d + 1 }, (_, i) => i));
}


console.log(counterEffect("1250"), [[0, 1], [0, 1, 2], [0, 1, 2, 3, 4, 5], [0]]);
console.log(counterEffect("0050"), [[0], [0], [0, 1, 2, 3, 4, 5], [0]]);
console.log(counterEffect("0000"), [[0], [0], [0], [0]]);