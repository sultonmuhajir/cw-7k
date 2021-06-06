const descendingOrder = n => parseInt(n.toString().split("").sort().reverse().join(""));


const descendingOrder = n => +[...`${n}`].sort().reverse().join(``);


function descendingOrder(n) {
   let a = [];
   let s = n.toString();
   a = Array.from(s);
   for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
         if (a[i] < a[j]) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
         }
      }
   }
   let str = a.join('');
   return Number(str);
}


console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)
console.log(descendingOrder(5617814), 8765411)
