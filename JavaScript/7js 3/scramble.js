/*
|--------------------------------------------------------------------------
| String Scramble
|--------------------------------------------------------------------------
|
*/

function scramble(str, arr) {
   return arr.map((v, i) => str[arr.indexOf(i)]).join("");
}


function scramble(str, arr) {
   for (let res = [], i = 0; i < arr.length; i++) res[arr[i]] = str[i];
   return res.join("");
}


function scramble(str, arr) {
   return arr.reduce((a, _, i) => a + str[arr.indexOf(i)], "");
}


console.log(scramble("abcd", [0, 3, 1, 2]), "acdb");
console.log(scramble("sc301s", [4, 0, 3, 1, 5, 2]), "c0s3s1");
console.log(scramble("bskl5", [2, 1, 4, 3, 0]), "5sblk");