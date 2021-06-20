function stray(numbers) {
   let temp = []
   for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] != numbers[0]) {
         temp.push(numbers[i])
      }
   }
   return temp.length == 1 ? temp[0] : numbers[0];
}


const stray = nums => nums.reduce((a, b) => a ^ b);


function stray(numbers) {
   for (let i in numbers) {
      if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
         return numbers[i]
      }
   }
}


function stray(numbers) {
   let a = numbers.sort();
   if (a[0] != a[1]) {
      return a[0]
   }
   return a[a.length - 1]
}


function stray(nums) {
   let max = Math.max(...nums);
   let min = Math.min(...nums);
   return nums.filter(x => x == max).length == 1 ? max : min
}


console.log(stray([1, 1, 2]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);
console.log(stray([5, 9, 9, 9]), 3);