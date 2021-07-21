function XO(str) {
   const lower = str.toLowerCase();
   let x = 0;
   let o = 0;
   for (let i in lower) {
      if (lower[i] == "x") {
         x += 1;
      } else if (lower[i] == "o") {
         o += 1
      }
   }
   return x == o;
}


function XO(str) {
   let x = str.match(/x/gi);
   let o = str.match(/o/gi);
   return (x && x.length) === (o && o.length);
}


function XO(str) {
   return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}


console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
