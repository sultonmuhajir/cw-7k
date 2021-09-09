/*
|--------------------------------------------------------------------------
| Thinkful - String Drills: Repeater
|--------------------------------------------------------------------------
|
*/

function repeater(string, n) {
   let res = ''
   for (let i = 0; i < n; i++) {
      res += string;
   }
   return res;
}


const repeater = Function.call.bind("".repeat);


function repeater(string, n) {
   return string.repeat(n)
}


function repeater(string, n) {
   return new Array(n + 1).join(string);
}


console.log(repeater('a', 5), 'aaaaa')
console.log(repeater('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa')
console.log(repeater('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ')