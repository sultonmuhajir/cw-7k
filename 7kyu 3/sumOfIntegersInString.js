function sumOfIntegersInString(s) {
   let num = s.match(/\d+/g);
   return num != null ? num.map(Number).reduce((acc, curr) => acc + curr) : 0;
}


function sumOfIntegersInString(s) {
   return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
}


function sumOfIntegersInString(s) {
   const searchNumber = s.split(/[^0-9]/gi)
   let total = 0
   for (let i = 0; i < searchNumber.length; i++) {
      total += Number(searchNumber[i])
   }
   return total
}


function sumOfIntegersInString(s) {
   return s.replace(/\D/gi, ' ')
      .split(" ")
      .map(value => Number(value))
      .reduce((a, b) => a + b);
}


with(require('ramda'))
var sumOfIntegersInString = pipe(match(/\d+/g), sum)


console.log(sumOfIntegersInString("C4t5 are 4m4z1ng."), 18);
console.log(sumOfIntegersInString("Dogs are our best friends"), 0);
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"), 3635);