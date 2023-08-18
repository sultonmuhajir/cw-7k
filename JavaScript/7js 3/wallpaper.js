/*
|--------------------------------------------------------------------------
| Easy wallpaper
|--------------------------------------------------------------------------
|
*/

function wallpaper(l, w, h) {
   return numbers[Math.ceil(l && w && (l + w) * h * 0.4423)];
}


function wallpaper(l, w, h) {
   const nums = ["","one","two","three","four","five","six","seven","eight","nine","ten",
      "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];
   return !l | !w | !h ? "zero" : nums[Math.ceil((w * h + l * h) * 0.4423)];
}


function wallpaper(l, w, h) {
   return numbers[l && w ? Math.ceil((h * (l + w) * 2.3) / 5.2) : 0];
}


console.log(wallpaper(6.3, 4.5, 3.29), "sixteen");
console.log(wallpaper(7.8, 2.9, 3.29), "sixteen");
console.log(wallpaper(6.3, 5.8, 3.13), "seventeen");
console.log(wallpaper(6.1, 6.7, 2.81), "sixteen");
console.log(wallpaper(0, 5.6, 3.2), "zero");