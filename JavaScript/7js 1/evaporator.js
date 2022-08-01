/*
|--------------------------------------------------------------------------
| Deodorant Evaporator
|--------------------------------------------------------------------------
|
*/

function evaporator(content, evap_per_day, threshold) {
   let res = 0;
   let x = 100;
   while (x >= threshold) {
      x -= (x * evap_per_day) / 100;
      res++;
   }
   return res;
}


function evaporator(content, evap_per_day, threshold) {
   return Math.ceil(Math.log(threshold / 100) / Math.log((100 - evap_per_day) / 100));
}


function evaporator(content, evap_per_day, threshold) {
   function recurse(pctLeft = 100, counter = 0) {
      return pctLeft <= threshold
         ? counter
         : recurse(pctLeft * (1 - evap_per_day / 100), ++counter);
   }
   return recurse();
}


console.log(evaporator(10, 10, 10), 22);