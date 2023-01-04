/*
|--------------------------------------------------------------------------
| Folding your way to the moon
|--------------------------------------------------------------------------
|
*/

function foldTo(distance) {
   let m = 0.0001,
      res = 0;
   while (m < distance) (m *= 2), res++;
   return distance >= 0 ? res : null;
}


function foldTo(distance) {
   return distance < 0 ? null : Math.max(Math.ceil(Math.log2(distance / 0.0001)), 0);
}


function foldTo(distance) {
   return distance < 0
      ? null
      : Array.from({ length: 127 }, (_, i, arr) => 2 ** i * 0.0001).findIndex((e) => e >= $);
}


console.log(foldTo(384000000), 42);