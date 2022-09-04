/*
|--------------------------------------------------------------------------
| How many times does it contain?
|--------------------------------------------------------------------------
|
*/

function stringCounter(inputS, charS) {
   let res = 0
   for (let i = 0; i < inputS.length; i++) {
      if (inputS[i] == charS) res += 1
   }
   return res
}


function stringCounter(inputS, charS) {
   return inputS.split("").filter(function (elem) {
      return elem === charS
   }).length;
}


function stringCounter(inputS, charS) {
   return (inputS.match(new RegExp('[' + charS + ']', 'g')) || []).length
}


console.log(stringCounter("Hello World!", "o"), 2);
console.log(stringCounter("Do you like Harry Potter?", "?"), 1);
console.log(stringCounter("abcdefg", "a"), 1);