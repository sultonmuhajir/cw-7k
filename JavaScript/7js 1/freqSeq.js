/*
|--------------------------------------------------------------------------
| Frequency sequence
|--------------------------------------------------------------------------
|
*/

function freqSeq(str, sep) {
   let res = "";
   for (let i = 0; i < str.length; i++) {
      res += str.split(str[i]).length - 1;
   }
   return res.split("").join(sep);
}


function freqSeq(str, sep) {
   return str
      .split("")
      .map((i) => s.split(i).length - 1)
      .join(sep);
}


function freqSeq(str, sep) {
   const count = [...str].reduce((acc, el) => (acc[el] = ++acc[el] || 1) && acc, {});
   return [...str.replace(/./g, (x) => count[x])].join(sep);
}


console.log(freqSeq("hello world", "-"), "1-1-3-3-2-1-1-2-1-3-1");
console.log(freqSeq("19999999", ":"), "1:7:7:7:7:7:7:7");
console.log(freqSeq("^^^**$", "x"), "3x3x3x2x2x1");