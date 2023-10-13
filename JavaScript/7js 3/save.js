/*
|--------------------------------------------------------------------------
| Computer problem series #1: Fill the Hard Disk Drive
|--------------------------------------------------------------------------
|
*/

function save(sizes, hd) {
   let totalSize = 0;
   let res = 0;
   for (let i = 0; i < sizes.length; i++) {
      if (totalSize + sizes[i] <= hd) {
         totalSize += sizes[i];
         res++;
      } else {
         break;
      }
   }
   return res;
}


function save(sizes, hd) {
   let i = -1;
   while (hd >= 0) {
      hd -= sizes.shift();
      i++;
   }
   return i;
}


function save(sizes, hd) {
   let result = 0;
   sizes.reduce((acc, curr) => {
      if ((acc += curr) <= hd) result += 1;
      return acc;
   }, 0);
   return result;
}


console.log(save([4, 4, 4, 3, 3], 12), 3);
console.log(save([4, 4, 4, 3, 3], 11), 2);