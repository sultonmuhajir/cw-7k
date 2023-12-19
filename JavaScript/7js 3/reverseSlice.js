/*
|--------------------------------------------------------------------------
| String reverse slicing 101
|--------------------------------------------------------------------------
|
*/

function reverseSlice(str) {
   let res = [];
   for (let i = 0; i < str.length; i++) {
      res.push(
         str
            .split("")
            .splice(0, i + 1)
            .reverse()
            .join("")
      );
   }
   return res.reverse();
}


function reverseSlice(s) {
   return Array(s.length)
      .fill(0)
      .map((e, i) => s.split("").reverse().join("").slice(i));
}


function reverseSlice(str) {
   const res = [str[0]];
   for (let i = 1; i < str.length; i++) {
      res.unshift(str[i] + res[0]);
   }
   return res;
}


console.log(reverseSlice("123"), ["321", "21", "1"]);
console.log(reverseSlice("abcde"), ["edcba", "dcba", "cba", "ba", "a"]);