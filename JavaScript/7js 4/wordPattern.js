/*
|--------------------------------------------------------------------------
| Cryptanalysis Word Patterns
|--------------------------------------------------------------------------
|
*/

function wordPattern(word) {
   word = word.toLowerCase()
   res = []
   for (let i = 0; i < word.length; i++) {
      res.push([...new Set(word)].indexOf(word[i]));
   }
   return res.join('.')
}


function wordPattern(word) {
   return [...word].map(v => [...new Set(word.toLowerCase())].join('').indexOf(v.toLowerCase())).join('.')
}


function wordPattern(word) {
   word = word.toLowerCase()
   const set = [...new Set(word)]
   return word.split('').map(e => set.indexOf(e)).join('.')
}


console.log(wordPattern("hello"), "0.1.2.2.3");
console.log(wordPattern("heLlo"), "0.1.2.2.3");
console.log(wordPattern("helLo"), "0.1.2.2.3");
console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"), "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13");