/*
|--------------------------------------------------------------------------
| Simple Fun #10: Range Bit Counting
|--------------------------------------------------------------------------
|
*/

function rangeBitCount(a, b) {
   let res = "";
   for (let i = a; i <= b; i++) res += i.toString(2);
   return res.split("").filter((i) => i == 1).length;
}


function rangeBitCount(a, b) {
   return Array(b - a + 1)
      .fill(0)
      .map((_, i) => (i + a).toString(2).replace(/0/g, "").length)
      .reduce((s, n) => s + n, 0);
}


function rangeBitCount(a, b) {
   let sum = 0;
   for (let i = a; i <= b; i++) sum += i.toString(2).split("1").length - 1;
   return sum;
}


console.log(rangeBitCount(2, 7), 11);
console.log(rangeBitCount(0, 1), 1);
console.log(rangeBitCount(4, 4), 1);