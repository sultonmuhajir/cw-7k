/*
|--------------------------------------------------------------------------
| Dropcaps
|--------------------------------------------------------------------------
|
*/

function dropCap(n) {
   let arr = n.split(" ");
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 2) {
         arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase();
      }
   }
   return arr.join(" ");
}


function dropCap(n) {
   return n.replace(/\b(\w)(\w{2,})/g, (_, $1, $2) => $1.toUpperCase() + $2.toLowerCase());
}


function dropCap(str) {
   return str
      .split(" ")
      .map(function (w) {
         return w.length > 2 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w;
      })
      .join(" ");
}


console.log(dropCap("Apple Banana"), "Apple Banana");
console.log(dropCap("Apple"), "Apple");
console.log(dropCap(""), "");
console.log(dropCap("of"), "of");
console.log(dropCap("  leading spaces"), "  Leading Spaces");
console.log(dropCap("trailing spaces   "), "Trailing Spaces   ");
console.log(dropCap("ALL CAPS CRAZINESS"), "All Caps Craziness");
console.log(dropCap("rAnDoM CaPs CrAzInEsS"), "Random Caps Craziness");