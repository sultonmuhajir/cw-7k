/*
|--------------------------------------------------------------------------
| Negation of a Value
|--------------------------------------------------------------------------
|
*/

function negationValue(string, value) {
   for (let i = 0; i < string.length; i++) value = !value;
   return value != null ? value : false;
}


function negationValue(string, value) {
   return string.length % 2 == !value;
}


function negationValue(string, value) {
   return string.length & 1 ? !value : !!value;
}


console.log(negationValue("!", false), true);
console.log(negationValue("!", true), false);
console.log(negationValue("!!!", []), false);
console.log(negationValue("", null), false);