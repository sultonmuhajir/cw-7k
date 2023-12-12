/*
|--------------------------------------------------------------------------
| Adding words - Part I
|--------------------------------------------------------------------------
|
*/

class Arith {
   constructor(number) {
      this.number = number;
      this.arr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
   }
   add(n) {
      return this.arr[this.arr.indexOf(n) + this.arr.indexOf(this.number)];
   }
}


function Arith(number) {
   this.number = number;
   this.add = function (number2) {
      let numbers = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
      return numbers[numbers.indexOf(this.number) + numbers.indexOf(number2)];
   };
}


console.log(i.add("seven"), "ten");
console.log(i.add("eight"), "eleven");
console.log(i.add("zero"), "three");