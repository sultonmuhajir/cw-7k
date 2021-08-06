/*
|--------------------------------------------------------------------------
| String ends with?
|--------------------------------------------------------------------------
|
*/

function solution(str, ending) {
   const revEnd = ending.split("").reverse();
   const len = revEnd.length;
   const revStr = str.split("").reverse().splice(0, len);
   return revStr.join("") == revEnd.join("") ? true : false;
}


function solution(str, ending) {
   return str.endsWith(ending);
}


function solution(str, ending) {
   return ending === str.substr(str.length - ending.length, str.length);
}


function solution(str, ending) {
   const l = ending.length;
   const str = str.slice(-l);
   return str.match(ending) ? true : false;
}


console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)