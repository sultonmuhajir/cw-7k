/*
|--------------------------------------------------------------------------
| Sum of numbers from 0 to N
|--------------------------------------------------------------------------
|
*/

function showSequence(count) {
   if (count == 0) return "0=0";
   if (count < 0) return `${count}<0`;
   let res = [];
   for (let i = 0; i <= count; i++) res.push(i);
   return `${res.join("+")} = ${res.reduce((a, b) => a + b)}`;
}


const SequenceSum = {
   showSequence: (count) => {
      if (count < 1) return count + (count < 0 ? "<0" : "=0");
      return (
         Array.from({ length: count + 1 }, (_, i) => i).join("+") +
         " = " +
         (count * (count + 1)) / 2
      );
   },
}


const SequenceSum = {
   showSequence: (n) =>
      n < 0 ? n + "<0" : [...Array(n + 1).keys()].join("+") + (n ? " = " : "=") + (n * (n + 1)) / 2,
}


console.log(showSequence(6), "0+1+2+3+4+5+6 = 21");