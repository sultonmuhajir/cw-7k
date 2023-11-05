/*
|--------------------------------------------------------------------------
| Simple Fun #8: Kill K-th Bit
|--------------------------------------------------------------------------
|
*/

function killKthBit(n, k) {
   let bin = n.toString(2).split("");
   bin[bin.length - k] = "0";
   return parseInt(bin.join(""), 2);
}


function killKthBit(n, k) {
   return n & ~(1 << (k - 1));
}


function killKthBit(n, k) {
   return parseInt(
      [...n.toString(2)].map((el, idx, arr) => (idx == arr.length - k ? (el = 0) : el)).join(""),
      2
   );
}


console.log(killKthBit(37, 3), 33);
console.log(killKthBit(37, 4), 37);
console.log(killKthBit(2147483647, 16), 2147450879);