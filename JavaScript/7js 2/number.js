/*
|--------------------------------------------------------------------------
| Number of People in the Bus
|--------------------------------------------------------------------------
|
*/

function number(busStops) {
   let x = 0;
   let y = 0
   for (let i = 0; i < busStops.length; i++) {
      x += busStops[i][0];
      y += busStops[i][1];
   }
   return x - y;
}


const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)


const number = function (busStops) {
   return busStops.map(x => x[0] - x[1]).reduce((x, y) => x + y);
}


const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);


const number = function (busStops) {
   let peopleInBus = 0;
   busStops.forEach(([enter, left]) => {
      peopleInBus += enter - left;
   })
   return peopleInBus
}


console.log(number([
   [10, 0],
   [3, 5],
   [5, 8]
]), 5);
console.log(number([
   [3, 0],
   [9, 1],
   [4, 10],
   [12, 2],
   [6, 1],
   [7, 10]
]), 17);
console.log(number([
   [3, 0],
   [9, 1],
   [4, 8],
   [12, 2],
   [6, 1],
   [7, 8]
]), 21);