/*
|--------------------------------------------------------------------------
| Separate basic types
|--------------------------------------------------------------------------
|
*/

function separateTypes(input) {
   let obj = {};
   const num = input.filter(el => typeof el == "number");
   const str = input.filter(el => typeof el == "string");
   const bool = input.filter(el => typeof el == "boolean");
   if (num.length >= 1) obj.number = num;
   if (str.length >= 1) obj.string = str;
   if (bool.length >= 1) obj.boolean = bool;
   return obj;
}


separateTypes = a => a.reduce((x, y) => ({
   ...x,
   [q = typeof y]: [...x[q] || [], y]
}), {})


function separateTypes(input, data = ['number', 'string', 'boolean'], obj = {}) {
   let arr = data.map(x => input.filter(d => typeof d == x));
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) obj[data[i]] = arr[i];
   }
   return obj;
}


const separateTypes = arr => arr.reduce((acc, curr) => ({
   ...acc,
   [typeof curr]: acc[typeof curr] ? [...acc[typeof curr], curr] : [curr]
}), {})


console.log(separateTypes(['a', 1, 2, false, 'b']), {
   number: [1, 2],
   string: ['a', 'b'],
   boolean: [false]
});
console.log(separateTypes(['a', 1, 2]), {
   number: [1, 2],
   string: ['a']
});