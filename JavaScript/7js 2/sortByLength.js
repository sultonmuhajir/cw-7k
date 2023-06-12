/*
|--------------------------------------------------------------------------
| Sort array by string length
|--------------------------------------------------------------------------
|
*/

function sortByLength(array) {
   let res = [];
   let x = array.map((i) => i.length).sort((a, b) => a - b);
   for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < array.length; j++) {
         if (array[j].length == x[i]) res.push(array[j]);
      }
   }
   return res;
}


function sortByLength(array) {
   return array.sort((a, b) => a.length - b.length);
}


function sortByLength(array) {
   let shortestWord = array.sort(function (a, z) {
      return a.length - z.length;
   });
   return shortestWord;
}


console.log(sortByLength(["Beg", "Life", "I", "To"]), ["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]), ["","Pizza","Brains","Moderately",]);
console.log(sortByLength(["Longer", "Longest", "Short"]), ["Short", "Longer", "Longest"]);