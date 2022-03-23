/*
|--------------------------------------------------------------------------
| Multiply characters
|--------------------------------------------------------------------------
|
*/

function spam(number) {
   let res = [];
   for (let i = 0; i < number; i++) {
      res.push('hue');
   }
   return res.join('');
}


function spam(number) {
   return Array(++number).join("hue");
}


function spam(number) {
   return "hue".repeat(number);
}


function spam(number) {
   var res = '';
   while (number--) {
      res += 'hue'
   }
   return res;
}


function spam(number) {
   return (number != 0) ? "hue" + spam(number - 1) : "";
}


console.log(spam(1), "hue");
console.log(spam(6), "huehuehuehuehuehue");
console.log(spam(14), "huehuehuehuehuehuehuehuehuehuehuehuehuehue");