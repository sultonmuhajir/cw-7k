function shiritori(words) {
   let hsl = [];
   for (let i in words) {
      let nextWord = words[Number(i) - 1];
      if (words[i] != "") {
         if (i == 0) {
            hsl.push(words[i]);
         } else if (words[i].charAt(0) == nextWord.charAt(nextWord.length - 1)) {
            hsl.push(words[i]);
         } else {
            break;
         }
      }
   }
   return hsl;
}


function shiritori(words) {
   let res = [];
   for (let w of words) {
      if (!w.length || res.length && w[0] !== res[res.length - 1].slice(-1)) break;
      res.push(w);
   }
   return res;
}


function shiritori(words) {

   if (!words.length || words[0] === '')
      return [];

   for (let i = 1; i < words.length; i++)
      if (words[i - 1].slice(-1) !== words[i][0])
         return words.slice(0, i);

   return words;

}


console.log(shiritori(["dog", "goose", "elephant", "tiger", "rhino", "orc", "cat"]), ["dog", "goose", "elephant", "tiger", "rhino", "orc", "cat"]);
console.log(shiritori(["dog", "goose", "tiger", "cat", "elephant", "rhino", "orc"]), ["dog", "goose"]);
console.log(shiritori([]), []);
console.log(shiritori(["", "", "", "", "", ""]), []);
console.log(shiritori(["ab", "bc", "", "de", "", "", ""]), ["ab", "bc"]);