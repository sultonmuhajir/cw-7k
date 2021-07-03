function DNAStrand(dna) {
   let res = ""
   for (let i = 0; i < dna.length; i++) {
      if (dna[i] == "A") {
         res += "T"
      } else if (dna[i] == "T") {
         res += "A"
      } else if (dna[i] == "G") {
         res += "C"
      } else {
         res += "G"
      }
   }
   return res;
}


const DNAStrand = dna => dna.replace(/./g, m => 'CGAT' ['GCTA'.indexOf(m)]);


function DNAStrand(dna) {
   let table = {
      C: 'G',
      G: 'C',
      A: 'T',
      T: 'A'
   };
   return dna.split('').map(function (cv) {
      return table[cv];
   }).join('');
}


function DNAStrand(dna) {
   return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}


function DNAStrand(dna) {
   return dna.split('').map(function (v) {
      return {
         A: 'T',
         T: 'A',
         C: 'G',
         G: 'C'
      } [v];
   }).join('');
}


console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is")
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is")
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is")