/*
|--------------------------------------------------------------------------
| sPoNgEbOb MeMe
|--------------------------------------------------------------------------
|
*/

function spongeMeme(sentence) {
   let res = "";
   for (let i = 0; i < sentence.length; i++) {
      res += i % 2 == 0 ? sentence[i].toUpperCase() : sentence[i].toLowerCase();
   }
   return res;
}


const spongeMeme = ($) => $.replace(/./gi, (x, i) => (i % 2 ? x.toLowerCase() : x.toUpperCase()));


function spongeMeme(sentence) {
   return sentence
      .split("")
      .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
      .join("");
}


console.log(spongeMeme("stop Making spongebob Memes!"), "StOp mAkInG SpOnGeBoB MeMeS!");