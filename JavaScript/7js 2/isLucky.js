/*
|--------------------------------------------------------------------------
| Lucky Bus Ticket
|--------------------------------------------------------------------------
|
*/

function isLucky(ticket) {
   if (ticket.length == 6 && /^\d+$/.test(ticket)) {
      let num = ticket.split("").map((i) => Number(i));
      return num.slice(0, 3).reduce((a, b) => a + b) == num.slice(3).reduce((a, b) => a + b);
   } else {
      return false;
   }
}


function isLucky(ticket) {
   return (
      /^\d{6}$/.test(ticket) && ![...ticket].reduce((pre, val, _, arr) => pre + +val - arr.pop(), 0)
   );
}


function isLucky(s) {
   return (
      /^[0-9]{6}$/.test(s) &&
      s
         .slice(0, 3)
         .split("")
         .reduce((s, n) => s + +n, 0) ===
         s
            .slice(3)
            .split("")
            .reduce((s, n) => s + +n, 0)
   );
}


console.log(isLucky("123321"), true);
console.log(isLucky("100001"), true);
console.log(isLucky("100200"), false);
console.log(isLucky("12341234"), false);
console.log(isLucky("12a12a"), false);
console.log(isLucky(""), false);