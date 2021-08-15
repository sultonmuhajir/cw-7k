/*
|--------------------------------------------------------------------------
| Divide and Conquer
|--------------------------------------------------------------------------
|
*/

function divCon(x) {
   let num = 0;
   let str = 0;
   for (let i = 0; i < x.length; i++) {
      typeof x[i] == "number" ? num += x[i] : str += Number(x[i]);
   }
   return num - str;
}


function divCon(x) {
   return x.reduce((acc, cur) => typeof cur === 'number' ? acc + cur : acc - Number(cur), 0)
}


function divCon(q) {
   let a = 0,
      a2 = 0;
   q.forEach(e => (typeof (e) == 'string') ? a2 += +e : a += e);
   return (a - a2);
}


console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);