/*
|--------------------------------------------------------------------------
| Correct the time-string
|--------------------------------------------------------------------------
|
*/

function timeCorrect(timestring) {
   return !timestring
      ? timestring
      : /^\d{2}:\d{2}:\d{2}$/.test(timestring)
      ? new Date(new Date().setHours(...timestring.split(`:`))).toTimeString().slice(0, 8)
      : null;
}


function timeCorrect(timestring) {
   if (!timestring) return timestring;
   if (!/^(\d\d:){2}\d\d$/.test(timestring)) return null;
   return new Date(0, 0, 0, ...timestring.split(":")).toString().slice(16, 24);
}


function timeCorrect(ts) {
   if (!ts) return ts;
   if (!/\d\d:\d\d:\d\d/.test(ts)) return null;
   var rs = ts.slice(0, 2) * 3600 + ts.slice(3, 5) * 60 + +ts.slice(-2);
   return `${("0" + (~~(rs / 3600) % 24)).slice(-2)}:${("0" + ~~((rs % 3600) / 60)).slice(-2)}:${(
      "0" +
      ((rs % 3600) % 60)
   ).slice(-2)}`;
}


console.log(timeCorrect(null), null);
console.log(timeCorrect(""), "");
console.log(timeCorrect("001122"), null);
console.log(timeCorrect("00;11;22"), null);
console.log(timeCorrect("0a:1c:22"), null);
console.log(timeCorrect("09:10:01"), "09:10:01");
console.log(timeCorrect("11:70:10"), "12:10:10");