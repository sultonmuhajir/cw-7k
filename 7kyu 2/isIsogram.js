/*
|--------------------------------------------------------------------------
| Isograms
|--------------------------------------------------------------------------
|
*/

function isIsogram(str) {
   const lower = str.toLowerCase();
   let letter = "";
   for (let i = 0; i < lower.length; i++) {
      if (letter.includes(lower[i]) === false) {
         letter += lower[i];
      } else {
         return false;
      }
   }
   return true;
}


function isIsogram(str) {
   return !/(\w).*\1/i.test(str)
}


function isIsogram(str) {
   const lower = str.toLowerCase()
   for (var i = 0; i < lower.length; i++) {
      if (lower.indexOf(lower.charAt(i), i + 1) >= 0) {
         return false
      }
   }
   return true
}


function isIsogram(str) {
   return new Set(str.toUpperCase()).size == str.length;
}


console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");