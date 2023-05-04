/*
|--------------------------------------------------------------------------
| Find Duplicates
|--------------------------------------------------------------------------
|
*/

function duplicates(arr) {
   let res = [];
   let temp = [];
   arr.forEach((i) => {
      temp.includes(i) ? res.push(i) : temp.push(i);
   });
   return [...new Set(res)];
}


const duplicates = (arr) => arr.filter((v, i) => arr.indexOf(v) !== i && arr.lastIndexOf(v) === i);


function duplicates(arr) {
   let res = [];
   for (let a of arr) {
      if (arr.indexOf(a) !== arr.lastIndexOf(a) && !res.includes(a)) res.push(a);
   }
   return res;
}


console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]), [4, 3, 1]);
console.log(duplicates([0, 1, 2, 3, 4, 5]), []);