/*
|--------------------------------------------------------------------------
| See You Next Happy Year
|--------------------------------------------------------------------------
|
*/

function nextHappyYear(year) {
   while (new Set([...(++year + "")]).size < 4);
   return year;
}


function nextHappyYear(year) {
   return new Set(`${++year}`).size < 4 ? nextHappyYear(year) : year;
}


function nextHappyYear(year) {
   do year += 1;
   while (/([0-9]).*?\1/.test(year));
   return year;
}


function nextHappyYear(year) {
   while (new Set(String(++year).split("")).size < 4);
   return year;
}


console.log(nextHappyYear(1001), 1023);
console.log(nextHappyYear(1123), 1203);
console.log(nextHappyYear(2001), 2013);
console.log(nextHappyYear(2334), 2340);