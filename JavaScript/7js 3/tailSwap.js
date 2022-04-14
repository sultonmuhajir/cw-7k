/*
|--------------------------------------------------------------------------
| Tail Swap
|--------------------------------------------------------------------------
|
*/

function tailSwap(arr) {
   res = []
   for (let i = 0; i < arr.length; i++) {
      temp = arr[i].split(':')
      for (let j = 0; j < temp.length; j++) {
         res.push(temp[j]);
      }
   }
   return [res[0] + ':' + res[3], res[2] + ':' + res[1]]
}


function tailSwap(arr) {
   return (arr + "").replace(/(.+:)(.+),(.+:)(.+)/, "$1$4,$3$2").split(",")
}


function tailSwap(arr) {
   const [aa, ab] = arr[0].split(":")
   const [ba, bb] = arr[1].split(":")
   return [`${aa}:${bb}`, `${ba}:${ab}`]
}


function tailSwap(arr) {
   const [a, b] = arr.map(el => el.split(":"));
   return [`${a[0]}:${b[1]}`, `${b[0]}:${a[1]}`];
}


console.log(tailSwap(['abc:123', 'cde:456']), ['abc:456', 'cde:123']);
console.log(tailSwap(['a:12345', '777:xyz']), ['a:xyz', '777:12345']);