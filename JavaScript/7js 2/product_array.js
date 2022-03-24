/*
|--------------------------------------------------------------------------
| Product of Array Items
|--------------------------------------------------------------------------
|
*/

function product(values) {
   return values == null || values.length == 0 ? null : values.reduce((a, b) => a * b);
}


function product(values) {
   return values && values.length ? eval(values.join `*`) : null
}


function product(values) {
   return values && 0 in values ? values.map(V => values *= V, values = 1) && values : null
}


function product(values) {
   return values + values ? values.reduce((a, b) => a * b) : null
}


console.log(product([5, 4, 1, 3, 9]), 540);
console.log(product([-2, 6, 7, 8]), -672);
console.log(product([10]), 10);
console.log(product([0, 2, 9, 7]), 0);
console.log(product(null), null);
console.log(product([]), null);