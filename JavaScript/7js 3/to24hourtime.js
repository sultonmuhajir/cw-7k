/*
|--------------------------------------------------------------------------
| Converting 12-hour time to 24-hour time
|--------------------------------------------------------------------------
|
*/

function to24hourtime(hour, minute, period) {
   let h =
      period == "am"
         ? hour == 12
            ? "00"
            : hour < 10
            ? "0" + hour
            : String(hour)
         : hour == 12
         ? "12"
         : String(hour + 12);
   let m = minute < 10 ? "0" + minute : String(minute);
   return h + m;
}


function to24hourtime(hour, minute, period) {
   return (
      String(period == "am" ? hour % 12 : hour == 12 ? 12 : hour + 12).padStart(2, "0") +
      (minute + "").padStart(2, "0")
   );
}


function to24hourtime(hour, minute, period) {
   if (hour == 12) hour = 0;
   if (minute < 10) minute = `0${minute}`;
   if (period == "pm") hour = hour + 12;
   if (hour < 10) hour = `0${hour}`;
   return `${hour}${minute}`;
}


console.log(to24hourtime(1, 0, "am"), "0100");
console.log(to24hourtime(1, 0, "pm"), "1300");
console.log(to24hourtime(12, 0, "am"), "0000");
console.log(to24hourtime(12, 0, "pm"), "1200");
console.log(to24hourtime(6, 30, "am"), "0630");
console.log(to24hourtime(9, 45, "pm"), "2145");