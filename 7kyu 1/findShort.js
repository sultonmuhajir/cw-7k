function findShort(s) {
   const arr = s.split(" ");
   let min = arr[0].length;
   for (let i = 0; i < arr.length; i++) {
      let hsl;
      for (let j = 0; j < arr[i].length; j++) {
         hsl = arr[i].length;
      }
      if (hsl < min) min = hsl;
   }
   return min;
}


function findShort(s) {
   const arr = s.split(' ');
   let smallest = arr[0];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < smallest.length) {
         smallest = arr[i];
      }
   }
   return smallest.length;
}


const findShort = s => Math.min.apply(null, s.split(' ').map(w => w.length));


const findShort = (s) => s.split(' ').sort((a, b) => b.length - a.length).pop().length;


const findShort = s => s.split(' ').map(a => a.length).reduce((a, b) => Math.min(a, b));


console.log(findShort("sulton muhajir"), 6);
console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
