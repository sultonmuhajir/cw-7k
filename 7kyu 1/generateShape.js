function generateShape(integer) {
   let res = "";
   for (let x = 0; x < integer; x++) {
      for (let i = 0; i < integer; i++) {
         res += "+";
      }
      if (x != integer - 1) {
         res += "\n";
      }
   }
   return res;
}


function generateShape(n) {
   return ("+".repeat(n) + "\n").repeat(n).trim()
}


function generateShape(int) {
   return Array(int).fill(Array(int + 1).join('+')).join('\n')
}


console.log(generateShape(8));
console.log(generateShape(3));