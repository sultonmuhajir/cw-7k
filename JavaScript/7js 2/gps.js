/*
|--------------------------------------------------------------------------
| Speed Control
|--------------------------------------------------------------------------
|
*/

function gps(s, x) {
   if (x.length <= 1) {
      return 0;
   } else {
      let arr = [];
      for (let i = 0; i < x.length - 1; i++) {
         arr.push((3600 * (x[i + 1] - x[i])) / s);
      }
      return Math.floor(Math.max(...arr));
   }
}


function gps(s, x) {
   return Math.floor((3600 * x.slice(1).reduce((m, d, i) => Math.max(m, d - x[i]), 0)) / s);
}


function gps(s, x) {
   return Math.max(...x.slice(1).map((a, i) => ((a - x[i]) / s) * 3600)) | 0;
}


console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]), 41);
console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]), 74);