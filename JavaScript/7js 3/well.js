/*
|--------------------------------------------------------------------------
| Well of Ideas - Harder Version
|--------------------------------------------------------------------------
|
*/

function well(x) {
   let arr = []
   x.forEach(y => {
      y.forEach(i => {
         if (typeof i == 'string') {
            arr.push(i.toLowerCase());
         }
      })
   });
   const good = arr.filter(i => i == 'good').length;
   return good > 2 ? 'I smell a series!' : good <= 0 ? 'Fail!' : 'Publish!'
}


function well(x) {
   x = x.reduce((p, c) => p + c.filter(f => /^good$/i.test(f)).length, 0);
   return x === 0 ? 'Fail!' : x <= 2 ? 'Publish!' : 'I smell a series!';
}


function well(x) {
   const $ = x.toString().toLowerCase().split(/good/g).length - 1
   return $ > 2 ? 'I smell a series!' : $ > 0 ? 'Publish!' : 'Fail!'
}


console.log(well([
   ['bad', 'bAd', 'bad'],
   ['bad', 'bAd', 'bad'],
   ['bad', 'bAd', 'bad']
]), 'Fail!');
console.log(well([
   ['gOOd', 'bad', 'BAD', 'bad', 'bad'],
   ['bad', 'bAd', 'bad'],
   ['GOOD', 'bad', 'bad', 'bAd']
]), 'Publish!');
console.log(well([
   ['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'],
   ['bad'],
   ['gOOd', 'BAD']
]), 'I smell a series!');