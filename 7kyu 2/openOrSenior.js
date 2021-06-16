function openOrSenior(data) {
   let res = [];
   for (let i = 0; i < data.length; i++) {
      data[i][0] >= 55 && data[i][1] > 7 ? res.push("Senior") : res.push("Open");
   }
   return res;
}


function openOrSenior(data) {
   return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');
}


function openOrSenior(data) {
   let returnVal = []
   data.map((val, idx) => {
      if (val[0] > 54 && val[1] > 7) {
         returnVal = [...returnVal, 'Senior']
      } else {
         returnVal = [...returnVal, 'Open']
      }
   })
   return returnVal
}


console.log(openOrSenior([
   [45, 12],
   [55, 21],
   [19, -2],
   [104, 20]
]), ['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([
   [3, 12],
   [55, 1],
   [91, -2],
   [54, 23]
]), ['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior([
   [59, 12],
   [55, -1],
   [12, -2],
   [12, 12]
]), ['Senior', 'Open', 'Open', 'Open'])