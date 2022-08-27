/*
|--------------------------------------------------------------------------
| Rotate for a Max
|--------------------------------------------------------------------------
|
*/

function maxRot(n) {
   let str = n.toString();
   let res = [str];
   for (let i = 0; i <= str.length - 1; i++) {
      str = str.slice(0, i) + str.slice(i + 1) + str[i];
      res.push(str.split().join());
   }
   return Math.max.apply(null, res);
}


function maxRot(n) {
   return [...`${n}`].reduce(
      (pre, _, idx) =>
         Math.max(
            pre,
            (n = `${n}`.slice(0, idx) + `${n}`.slice(idx + 1) + `${n}`.slice(idx, idx + 1))
         ),
      n
   );
}


function maxRot(n) {
   const maxArray = String(n)
      .split("")
      .reduce((acc, num, index, initial) => {
         initial.push(initial.splice(index, 1)[0]);
         acc.push(Number(initial.join("")));
         return acc;
      }, []);
   return Math.max(n, ...maxArray);
}


console.log(maxRot(56789), 68957);
console.log(maxRot(38458215), 85821534);
console.log(maxRot(195881031), 988103115);
console.log(maxRot(896219342), 962193428);
console.log(maxRot(69418307), 94183076);