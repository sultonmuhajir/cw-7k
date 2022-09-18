/*
|--------------------------------------------------------------------------
| Lost number in number sequence
|--------------------------------------------------------------------------
|
*/

function findDeletedNumber(arr, mixArr) {
   if (arr.length == mixArr.length) {
      return 0;
   } else {
      const x = mixArr.sort((a, b) => a - b);
      for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < x.length; j++) {
            if (arr[j] != x[j]) {
               return arr[j]
            }
         }
      }
      return arr[arr.length - 1]
   }
}


function findDeletedNumber(arr, mixArr) {
   return arr.filter(v => mixArr.indexOf(v) == -1)[0] || 0
}


function findDeletedNumber(arr, mixArr) {
   let arrSum = arr.reduce((a, b) => a + b, 0)
   let mixArrSum = mixArr.reduce((a, b) => a + b, 0)
   return arrSum - mixArrSum
}


function findDeletedNumber(arr, mixArr) {
   return arr.find((element) => {
      return !mixArr.includes(element)
   }) || 0;
}


console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, 'Deletion')
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]), 5, 'Deletion')
console.log(findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]), 0, 'No deletion')
console.log(findDeletedNumber([]));