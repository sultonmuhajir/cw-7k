/*
|--------------------------------------------------------------------------
| Determine if the poker hand is flush
|--------------------------------------------------------------------------
|
*/

function isFlush(cards) {
   let x = []
   cards.forEach(i => {
      x.push(i.slice(-1));
   });
   return [...new Set(x)].length == 1
}


function isFlush(cards) {
   return cards.every(a => cards[0].slice(-1) === a.slice(-1))
}


function isFlush(c) {
   return !!c.join ``.match(/([HSDC])(.+\1){4}/);
}


function isFlush(c) {
   return new Set(cards.map(i => i.slice(-1))).size === 1;
}


console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]), true);
console.log(isFlush(["AD", "4S", "7H", "KC", "5S"]), false);
console.log(isFlush(["AD", "4S", "10H", "KC", "5S"]), false);
console.log(isFlush(["QD", "4D", "10D", "KD", "5D"]), true);
console.log(isFlush(["10D", "4D", "QD", "KD", "5D"]), true);