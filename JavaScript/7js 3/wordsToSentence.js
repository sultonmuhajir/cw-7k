/*
|--------------------------------------------------------------------------
| Words to sentence
|--------------------------------------------------------------------------
|
*/

function wordsToSentence(words) {
   return words.join(' ');
}


const wordsToSentence = require('lodash/fp/join')(' ');


function wordsToSentence(words) {
   var x = "";
   for (let i = 0; i < words.length; i++) {
      x = x + words[i] + " ";
   }
   return x.trim();
}


function wordsToSentence(words) {
   return words.reduce(function (prev, curr) {
      return prev + ' ' + curr
   });
}


console.log(wordsToSentence(["hello", "world"]), "hello world");