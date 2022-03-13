/*
|--------------------------------------------------------------------------
| Find the lucky numbers
|--------------------------------------------------------------------------
|
*/

function filterLucky(x) {
   res = []
   let num = x.map(i => String(i))
   num.forEach(i => {
      if (i.search('7') >= 0) res.push(Number(i));
   });
   return res;
}


function filterLucky(x) {
   return x.filter(n => /7/.test(n))
}


function filterLucky(x) {
   return x.filter(x => x.toString().includes('7'));
}


function filterLucky(x) {
   return x.filter(el => `${el}`.indexOf(7) > -1);
}


console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]), [7, 70, 17]);
console.log(filterLucky([71, 9907, 69]), [71, 9907]);