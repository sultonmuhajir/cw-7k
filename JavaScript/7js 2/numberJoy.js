/*
|--------------------------------------------------------------------------
| Especially Joyful Numbers
|--------------------------------------------------------------------------
|
*/

function numberJoy(n) {
   const x = String(n).split('').map(i => Number(i)).reduce((a, b) => a + b);
   const y = Number(String(x).split('').reverse().join(''));
   return x * y == n;
}


function numberJoy(n) {
   return (x = [..."" + n].reduce((a, b) => +b + a, 0)) * [..."" + x].reverse().join `` == n;
}


function numberJoy(n) {
   return (val => val * [...`${val}`].reverse().join(``) === n)
      ([...`${n}`].reduce((pre, val) => pre + +val, 0));
}


console.log(numberJoy(1997), false, 'Not a Harshad number')
console.log(numberJoy(1998), false, 'Harshad but digit sum=27, and 27x72 does not equal 1998')
console.log(numberJoy(1729), true, 'Harshad and digit sum=19, and 19x91 = 1729')
console.log(numberJoy(1458), true, "It was correct")