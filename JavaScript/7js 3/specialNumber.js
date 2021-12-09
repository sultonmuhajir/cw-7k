/*
|--------------------------------------------------------------------------
| Special Number (Special Numbers Series #5)
|--------------------------------------------------------------------------
|
*/

function specialNumber(n) {
   const x = [0, 1, 2, 3, 4, 5];
   const num = String(n);
   let count = 0;
   for (let i = 0; i < num.length; i++) {
      for (let j = 0; j < x.length; j++) {
         if (num[i] == x[j]) {
            count++;
         }
      }
   }
   return count == num.length ? "Special!!" : "NOT!!";
}


function specialNumber(n) {
   return /[6-9]/.test(n) ? "NOT!!" : "Special!!"
}


function specialNumber(n) {
   return /^[012345]+$/g.test(n) ? 'Special!!' : 'NOT!!';
}


function specialNumber(n) {
   return ('' + n).split ``.every(digit => digit < 6) ? 'Special!!' : 'NOT!!';
}


console.log(specialNumber(2), "Special!!");
console.log(specialNumber(55), "Special!!");
console.log(specialNumber(26), "NOT!!");
console.log(specialNumber(9), "NOT!!");