/*
|--------------------------------------------------------------------------
| Cost of my ride
|--------------------------------------------------------------------------
|
*/

function insurance(age, size, numofdays) {
   let res = 0;
   res += (age < 25) ? numofdays * 10 : a = 0;
   res += size == "economy" ? 0 : size == "medium" ? numofdays * 10 : size == "full-size" ? numofdays * 15 : numofdays * 15;
   res += numofdays > 0 ? 50 * numofdays : 0;
   return res > 0 ? res : 0;
}


const insurance = (a, s, n) => 0 < n ? (50 + (a < 25) * 10 + (s == 'economy' ? 0 : s == 'medium' ? 10 : 15)) * n : 0;


function insurance(age, size, numofdays) {
   const extraAge = age < 25 ? 10 : 0;
   const extraSize = size == "economy" ? 0 : size == "medium" ? 10 : 15;
   return numofdays > 0 ? (50 + extraAge + extraSize) * numofdays : 0;
}


function insurance(age, size, numofdays) {
   return (50 + 10 * (age < 25) + (size === 'economy' ? 0 : size === 'medium' ? 10 : 15)) * Math.max(numofdays, 0);
}


function insurance(age, size, numofdays) {
   const surcharge =
      size === 'economy' ? 0 :
      size === 'medium' ? 10 : 15;
   return Math.max(numofdays, 0) * ((age < 25 ? 10 : 0) + 50 + surcharge);
}


console.log(insurance(18, "medium", 7), 490);
console.log(insurance(30, "full-size", 30), 1950);
console.log(insurance(21, "economy", -10), 0);
console.log(insurance(42, "my custom car", 7), 455);