/*
|--------------------------------------------------------------------------
| Calculate Meal Total
|--------------------------------------------------------------------------
|
*/

function calculate_total(subtotal, tax, tip) {
   return Number((subtotal + (subtotal * (tax / 100)) + (subtotal * (tip / 100))).toFixed(2));
}


const calculate_total = (subtotal, tax, tip) => Math.round(subtotal * (100 + tax + tip)) / 100


const calculate_total = (sub, tax, tip) => Math.round(sub * (100 + tax + tip)) / 1e2


function calculate_total(subtotal, tax, tip) {
   return +(subtotal * (1 + tip / 100 + tax / 100)).toFixed(2);
}


console.log(calculate_total(5, 5, 10), 5.75);
console.log(calculate_total(36.97, 7, 15), 45.10);
console.log(calculate_total(0.00, 6, 18), 0.00);
console.log(calculate_total(80.94, 0, 20), 97.13);
console.log(calculate_total(54.96, 8, 0), 59.36);