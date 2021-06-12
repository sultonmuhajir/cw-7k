function addBinary(a, b) {
   return (a + b).toString(2);
}


function addBinary(a, b) {
   let num = a + b;
   let bin = "";
   while (num) {
      bin = (num & 1) + bin;
      num >>= 1;
   }
   return bin;
}


function addBinary(a, b) {
   var sum = a + b
   var bin = []
   while (sum > 0) {
      bin.push(sum % 2)
      sum = Math.floor(sum / 2)
   }
   return bin.reverse().join("")
}


console.log(addBinary(1, 1), "10");
console.log(addBinary(5, 9), "1110");