/*
|--------------------------------------------------------------------------
| Sum of a Beach
|--------------------------------------------------------------------------
|
*/

function sumOfABeach(beach) {
   let res = 0;
   let x = ["sand", "water", "fish", "sun"];
   x.forEach((i) => {
      res += beach.toLowerCase().split(i).length - 1;
   });
   return res;
}


function sumOfABeach(beach) {
   return (beach.match(/sand|water|fish|sun/gi) || []).length;
}


function sumOfABeach(beach) {
   return beach.split(/sand|water|fish|sun/gi).length - 1;
}


console.log(sumOfABeach("WAtErSlIde"), 1);
console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN"), 3);
console.log(sumOfABeach("gOfIshsunesunFiSh"), 4);
console.log(sumOfABeach("cItYTowNcARShoW"), 0);