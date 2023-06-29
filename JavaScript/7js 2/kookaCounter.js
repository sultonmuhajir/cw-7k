/*
|--------------------------------------------------------------------------
| Kooka-Counter
|--------------------------------------------------------------------------
|
*/

function kookaCounter(laughing) {
   return (laughing.match(/(.a)\1+/g) || []).length;
}


function kookaCounter(laughing) {
   let arr = laughing.split("a");
   let res = 0;
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] != arr[i - 1]) res++;
   }
   return res;
}


function kookaCounter(laughing) {
   return (laughing.match(/(ha|Ha)\1+/g) || []).length;
}


console.log(kookaCounter(""), 0);
console.log(kookaCounter("hahahahaha"), 1);
console.log(kookaCounter("hahahahahaHaHaHa"), 2);
console.log(kookaCounter("HaHaHahahaHaHa"), 3);