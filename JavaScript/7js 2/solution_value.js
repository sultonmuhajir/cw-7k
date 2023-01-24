/*
|--------------------------------------------------------------------------
| Substituting Variables Into Strings: Padded Numbers
|--------------------------------------------------------------------------
|
*/

function solution(value) {
   let res = "";
   value = String(value).split("").reverse().join("");
   for (let i = 0; i < 5; i++) res += value[i] ? value[i] : "0";
   return `Value is ${res.split("").reverse().join("")}`;
}


function solution(value) {
   return "Value is " + ("00000" + value).slice(-5);
}


function solution(value) {
   return `Value is ${value.toString().padStart(5, "0")}`;
}


console.log(solution(5), "Value is 00005");
console.log(solution(1204), "Value is 01204");
console.log(solution(109), "Value is 00109");
console.log(solution(0), "Value is 00000");