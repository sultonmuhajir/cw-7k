/*
|--------------------------------------------------------------------------
| Numbers to Letters
|--------------------------------------------------------------------------
|
*/

function switcher(x) {
   let letter = " ?!abcdefghijklmnopqrstuvwxyz_".split("").reverse();
   let str = "";
   for (let i = 0; i < x.length; i++) {
      str += letter[x[i]];
   }
   return str;
}


function switcher(x) {
   const letter = " zyxwvutsrqponmlkjihgfedcba!? ";
   return x.map((item) => letter[item]).join("");
}


function switcher(x) {
   return x.reduce((a, b) => a + " ?!abcdefghijklmnopqrstuvwxyz"[29 - b], "");
}


console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"]), "codewars");
console.log(
   switcher(["25", "7", "8", "4", "14", "23", "8", "25", "23", "29", "16", "16", "4"]),
   "btswmdsbd kkw"
);
console.log(switcher(["4", "24"]), "wc");