/*
|--------------------------------------------------------------------------
| Uglify Word
|--------------------------------------------------------------------------
|
*/

function uglifyWord(s) {
   return s.replace(/[a-z]+/gi, (x) =>
      x
         .split("")
         .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
         .join("")
   );
}


function uglifyWord(s) {
   return [...s]
      .reduce((a, c, i) => a.concat(/[A-Z]/.test(a[i - 1]) ? c.toLowerCase() : c.toUpperCase()), [])
      .join("");
}


function uglifyWord(s) {
   return s.replace(/[A-Z]+/gi, (val) =>
      [...val].reduce((pre, char, idx) => pre + char[`to${idx & 1 ? `Low` : `Upp`}erCase`](), ``)
   );
}


console.log(uglifyWord("AAA"), "AaA");
console.log(uglifyWord("AaA"), "AaA");
console.log(uglifyWord("BbB"), "BbB");
console.log(uglifyWord("aaa-bbb-ccc"), "AaA-BbB-CcC");
console.log(uglifyWord("AaA-BbB-CcC"), "AaA-BbB-CcC");
console.log(uglifyWord("eeee-ffff-gggg"), "EeEe-FfFf-GgGg");
console.log(uglifyWord("EeEe-FfFf-GgGg"), "EeEe-FfFf-GgGg");
console.log(uglifyWord("qwe123asdf456zxc"), "QwE123AsDf456ZxC");
console.log(uglifyWord("Hello World"), "HeLlO WoRlD");