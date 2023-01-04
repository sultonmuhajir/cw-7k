/*
|--------------------------------------------------------------------------
| Thinkful - List Drills: Longest word
|--------------------------------------------------------------------------
|
*/

function longest(words) {
   return Math.max(...words.map(i => i.length));
}


function longest(words) {
   return words.reduce((a, b) => Math.max(a, b.length), 0);
}


function longest(words) {
   return words.sort(function (a, b) {
      return b.length - a.length
   })[0].length;
}


console.log(longest(['simple', 'is', 'better', 'than', 'complex']), 7);
console.log(longest(['explicit', 'is', 'better', 'than', 'implicit']), 8);
console.log(longest(['beautiful', 'is', 'better', 'than', 'ugly']), 9);