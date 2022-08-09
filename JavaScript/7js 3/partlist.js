/*
|--------------------------------------------------------------------------
| Parts of a list
|--------------------------------------------------------------------------
|
*/

function partlist(arr) {
   let res = [];
   for (let i = 0; i < arr.length - 1; i++) {
      res.push([arr.slice(0, i + 1).join(" "), arr.slice(i + 1, arr.length).join(" ")]);
   }
   return res;
}


function partlist(arr) {
   return arr.map((v, i) => [arr.slice(0, i).join(" "), arr.slice(i).join(" ")]).slice(1);
}


function partlist(arr) {
   return arr.reduce(
      (h, _, i) => h.concat(i == 0 ? [] : [[arr.slice(0, i).join(" "), arr.slice(i).join(" ")]]),
      []
   );
}


console.log(partlist(["I", "wish", "I", "hadn't", "come"]), [
   ["I", "wish I hadn't come"],
   ["I wish", "I hadn't come"],
   ["I wish I", "hadn't come"],
   ["I wish I hadn't", "come"],
]);