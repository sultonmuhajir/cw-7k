/*
|--------------------------------------------------------------------------
| Going to the cinema
|--------------------------------------------------------------------------
|
*/

function movie(card, ticket, perc) {
   let res = 0;
   while (ticket * res <= Math.ceil(card)) {
      res += 1;
      card += ticket * perc ** res;
   }
   return res;
}


function movie(card, ticket, perc) {
   for (
      let s = perc, n = 1;
      Math.ceil(card + s * ticket) >= ticket * n;
      s += Math.pow(perc, ++n)
   ) {}
   return n;
}


function movie(card, ticket, perc, n = 0) {
   do {
      card += ticket * Math.pow(perc, ++n);
   } while (Math.ceil(card) >= ticket * n);
   return n;
}


console.log(movie(500, 15, 0.9), 43);
console.log(movie(100, 10, 0.95), 24);