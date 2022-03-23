/*
|--------------------------------------------------------------------------
| Convert an array of strings to array of numbers
|--------------------------------------------------------------------------
|
*/

function toNumberArray(stringarray) {
   return stringarray.map(i => Number(i));
}


const toNumberArray = (stringarray) => stringarray.map($ => +$)


function toNumberArray(stringarray) {
   return stringarray.map(parseFloat);
}


function toNumberArray(str) {
   let arr = [];
   for (let i = 0; i < str.length; i++) {
      arr.push(+str[i]);
   }
   return arr;
}


console.log(toNumberArray(["1.1", "2.2", "3.3"]), [1.1, 2.2, 3.3]);