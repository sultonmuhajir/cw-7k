function findNextSquare(sq) {
   return Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;
}


function findNextSquare(sq) {
   const number = Math.sqrt(sq);
   if (Math.round(number) === number) {
      return Math.pow(++number, 2)
   }
   return -1;
}


function findNextSquare(sq) {
   const root = Math.sqrt(sq);
   return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}


console.log(findNextSquare(121), 144);
console.log(findNextSquare(114), -1);
console.log(findNextSquare(625), 676);
console.log(findNextSquare(319225), 320356);
console.log(findNextSquare(15241383936), 15241630849);