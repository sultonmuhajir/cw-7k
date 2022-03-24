/*
|--------------------------------------------------------------------------
| Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
|--------------------------------------------------------------------------
|
*/

function product(string) {
   return string.split('').filter(i => i == '?').length * string.split('').filter(i => i == '!').length
}


function product(str) {
   ex = str.split('!').length - 1
   ques = str.split('?').length - 1
   return ex * ques
}


function product(str) {
   return (str.match(/[!]/g) || []).length * (str.match(/[?]/g) || []).length
}


function product(str) {
   return str.replace(/[^!]/g, ``).length * str.replace(/[^?]/g, ``).length;
}


console.log(product("!!!???"), 9);
console.log(product("!???!!"), 9);
console.log(product("!ab? ?"), 2);
console.log(product("!????!!!?"), 20);