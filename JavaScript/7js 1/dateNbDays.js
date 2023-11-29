/*
|--------------------------------------------------------------------------
| Target Date
|--------------------------------------------------------------------------
|
*/

function dateNbDays(a0, a, p) {
   return new Date(2016, 0, 1 + Math.ceil(Math.log(a / a0) / Math.log(p / 36000 + 1)))
      .toISOString()
      .slice(0, 10);
}


function dateNbDays(a0, a, p) {
   let days = Math.ceil((ln(a) - ln(a0)) / ln(1 + p / 36000));
   let date = new Date(2016, 0, 1 + days);
   return date.toISOString().split("T")[0];
}


function dateNbDays(a0, a, p) {
   const countDay = new Date(2016, 0, 1);
   const profit = p / 36000;
   do {
      a0 += a0 * profit;
      countDay.setDate(countDay.getDate() + 1);
   } while (a0 <= a);
   return countDay.toISOString().split("T")[0];
}


console.log(dateNbDays(4281, 5087, 2), "2024-07-03");
console.log(dateNbDays(4620, 5188, 2), "2021-09-19");
console.log(dateNbDays(9999, 11427, 6), "2018-03-13");
console.log(dateNbDays(3525, 4822, 3), "2026-04-18");
console.log(dateNbDays(5923, 6465, 6), "2017-06-10");
console.log(dateNbDays(4254, 4761, 8), "2017-05-22");
console.log(dateNbDays(1244, 2566, 4), "2033-11-04");
console.log(dateNbDays(6328, 7517, 5), "2019-05-25");
console.log(dateNbDays(2920, 3834, 2), "2029-06-03");
console.log(dateNbDays(7792, 8987, 4), "2019-07-09");