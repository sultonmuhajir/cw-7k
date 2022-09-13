/*
|--------------------------------------------------------------------------
| Array Leaders (Array Series #3)
|--------------------------------------------------------------------------
|
*/

function arrayLeaders(numbers) {
   return numbers.filter((v, i) => v > numbers.slice(i + 1).reduce((a, b) => a + b, 0));
}


const arrayLeaders = (n, s = eval(n.join`+`)) => n.filter((v) => v > (s -= v));


function arrayLeaders(numbers) {
   let arr = [];
   for (i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers.slice(i + 1).reduce((a, b) => a + b, 0)) arr.push(numbers[i]);
   }
   return arr;
}


function arrayLeaders(numbers) {
   return numbers.reduceRight(
      ([acc, sum], x) => (x > sum ? [[x, ...acc], sum + x] : [acc, sum + x]),
      [[], 0]
   )[0];
}


console.log(arrayLeaders([1, 2, 3, 4, 0]), [4]);
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);