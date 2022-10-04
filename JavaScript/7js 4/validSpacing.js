/*
|--------------------------------------------------------------------------
| Valid Spacing
|--------------------------------------------------------------------------
|
*/

function validSpacing(s) {
   return s.split(" ").includes("") == false || s == "";
}


function validSpacing(s) {
   return s.replace(/\s+/g, " ").trim() == s;
}


function validSpacing(s) {
   return s.trim() == s && !s.includes("  ");
}


function validSpacing(s) {
   return !/^ |  | $/.test(s);
}


console.log(validSpacing("Hello world"), true);
console.log(validSpacing(" Hello world"), false);
console.log(validSpacing("Hello  world "), false);
console.log(validSpacing(""), true);