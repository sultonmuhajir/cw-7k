/*
|--------------------------------------------------------------------------
| Simple Fun #182: Happy "g"
|--------------------------------------------------------------------------
|
*/

function gHappy(str) {
   return !str.replace(/g{2,}/g, "").includes("g");
}


function gHappy(str) {
   return !/(?<!g)g(?!g)/.test(str);
}


function gHappy(str) {
   return !/g/.test(str.replace(/g{2,}/g, ""));
}


console.log(gHappy("gg0gg3gg0gg"), true);
console.log(gHappy("gog"), false);
console.log(gHappy("ggg ggg g ggg"), false);
console.log(gHappy("A half of a half is a quarter."), true);
console.log(gHappy("good grief"), false);
console.log(gHappy("bigger is ggooder"), true);
console.log(gHappy("gggggggggg"), true);