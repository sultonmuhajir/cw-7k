function isLeapYear(year) {
   return year % 400 == 0 ? true : year % 100 == 0 ? false : year % 4 == 0 ? true : false;
}


const isLeapYear = year => !((year % 400) * (!(year % 100)) + year % 4);


function isLeapYear(year) {
   return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}


function isLeapYear(year) {
   if (0 == year % 400) return true;
   if (0 == year % 100) return false;
   if (0 == year % 4) return true;
   return false;
}


function isLeapYear(y) {
   return !((y % 400) && ((y % 4) || !(y % 100)))
}


console.log(isLeapYear(1234), false);
console.log(isLeapYear(1984), true);
console.log(isLeapYear(2000), true);
console.log(isLeapYear(2010), false);
console.log(isLeapYear(2013), false);
console.log(isLeapYear(1000), false);
console.log(isLeapYear(1800), false);