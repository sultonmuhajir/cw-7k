/*
|--------------------------------------------------------------------------
| Reverse words
|--------------------------------------------------------------------------
|
*/

function reverseWords(str) {
   let res = [];
   const arr = str.split(" ");
   for (let i = 0; i < arr.length; i++) {
      res.push(arr[i].split("").reverse().join(""));
   }
   return res.join(" ");
}


const reverseWords = s => s.replace(/\S+/g, v => [...v].reverse().join ``);


function reverseWords(str) {
   return str.split(' ').map(str => str.split('').reverse().join('')).join(' ');
}


function reverseWords(str) {
   return str.split("").reverse().join("").split(" ").reverse().join(" ");
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), '|| ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), '|| elppa');
console.log(reverseWords('a b c d'), '|| a b c d');
console.log(reverseWords('double  spaced  words'), '|| elbuod  decaps  sdrow');