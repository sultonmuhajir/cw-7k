/*
|--------------------------------------------------------------------------
| Simple Fun #144: Distinct Digit Year
|--------------------------------------------------------------------------
|
*/

function distinctDigitYear(year) {
   let x = 0;
   while (x != 4) {
      year += 1;
      let arr = String(year).split("");
      let res = arr.map((i) => arr.filter((j) => j == i).length);
      x = res.reduce((a, b) => a + b);
      if (x == 4) return year;
   }
}


function distinctDigitYear(year) {
   while (/(.).*\1/.test(`${++year}`));
   return year;
}


function distinctDigitYear(year) {
   while (new Set(Array.from(String(++year))).size < 4);
   return year;
}


console.log(distinctDigitYear(1989), 2013);
console.log(distinctDigitYear(2013), 2014);