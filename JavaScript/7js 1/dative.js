/*
|--------------------------------------------------------------------------
| Hungarian Vowel Harmony (easy)
|--------------------------------------------------------------------------
|
*/

function dative(word) {
   let nek = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"];
   let nak = ["a", "á", "o", "ó", "u", "ú"];
   let x = [...word].filter((i) => [...nek, ...nak].includes(i)).reverse()[0];
   return nek.includes(x) ? `${word}nek` : `${word}nak`;
}


function dative(word) {
   return word + (/[aáoóuú][^aáoóuú]*$/.test(word) ? "nak" : "nek");
}


function dative(word) {
   return (
      word + ("aáoóuú".includes(word.replace(/[^aáoóuúeéiíöőüű]/g, "").slice(-1)) ? "nak" : "nek")
   );
}


console.log(dative("ablak"), "ablaknak");
console.log(dative("szék"), "széknek");
console.log(dative("otthon"), "otthonnak");
console.log(dative("tükör"), "tükörnek");