function squareDigits(num) {
   const arr = num.toString().split("");
   let result = "";
   for (let i = 0; i < arr.length; i++) {
      const int = Number(arr[i])
      result += int ** 2;
   }
   return Number(result);
}


function squareDigits(num) {
   return +num.toString().split('').map(i => i * i).join('');
}


function squareDigits(num) {
   let result = num
      .toString()
      .split("")
      .map(num => parseInt(num))
      .map(num => num * num)
      .join("")
   return parseInt(result)
}


console.log(squareDigits(9119), 811181);
console.log(squareDigits(523), 2549);
