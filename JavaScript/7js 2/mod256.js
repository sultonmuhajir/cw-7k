/*
|--------------------------------------------------------------------------
| MOD 256 without the MOD operator
|--------------------------------------------------------------------------
|
*/

function mod256WithoutMod(number) {
   return number - ((number / 256) ^ 0) * 256;
}


function mod256WithoutMod(number) {
   return number - ((number / 256) | 0) * 256;
}


function mod256WithoutMod(number) {
   return number - ~~(number / 256) * 256;
}


console.log(mod256WithoutMod(254), 254);
console.log(mod256WithoutMod(256), 0);
console.log(mod256WithoutMod(258), 2);
console.log(mod256WithoutMod(-254), -254);
console.log(mod256WithoutMod(-256), 0);
console.log(mod256WithoutMod(-258), -2);