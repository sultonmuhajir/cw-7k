/*
|--------------------------------------------------------------------------
| Calculate mean and concatenate string
|--------------------------------------------------------------------------
|
*/

function mean(lst) {
   let str = "";
   let num = 0;
   lst.forEach((i) => {
      "1234567890".includes(i) ? (num += Number(i)) : (str += i);
   });
   return [num / 10, str];
}


function mean(lst) {
   return [
      lst.filter((e) => /\d+/.test(e)).reduce((a, b) => +a + +b) / 10,
      lst.filter((e) => /[a-z]/i.test(e)).join(""),
   ];
}


function mean(lst) {
   return lst.reduce(
      ([num, str], val) => (isNaN(val) ? [num, str + val] : [(num * 10 + +val) / 10, str]),
      [0, ``]
   );
}


console.log(mean(["u","6","d","1","i","w","6","s","t","4","a","6","g","1","2","w","8","o","2","0",]), [3.6, "udiwstagwo"]);