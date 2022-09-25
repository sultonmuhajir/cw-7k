/*
|--------------------------------------------------------------------------
| Jumping Number (Special Numbers Series #4)
|--------------------------------------------------------------------------
|
*/

function jumpingNumber(n) {
   let arr = n.toString().split("");
   for (i = 0; i < arr.length - 1; i++) {
      if (Math.abs(arr[i] - arr[i + 1]) != 1) {
         return "Not!!";
      }
   }
   return "Jumping!!";
}


function jumpingNumber(n) {
   return [...(n + "")].every((x, i, a) => !i || x == +a[i - 1] + 1 || x == a[i - 1] - 1)
      ? "Jumping!!"
      : "Not!!";
}


function jumpingNumber(n) {
   return n
      .toString()
      .split("")
      .filter((a, b, c) => Math.abs(a - c[b + 1]) != 1).length > 1
      ? "Not!!"
      : "Jumping!!";
}


console.log(jumpingNumber(32), "Jumping!!");
console.log(jumpingNumber(79), "Not!!");
console.log(jumpingNumber(98), "Jumping!!");
console.log(jumpingNumber(98789876), "Jumping!!");