/*
|--------------------------------------------------------------------------
| Composing squared strings
|--------------------------------------------------------------------------
|
*/

function compose(s1, s2) {
   let x1 = s1.split("\n");
   let x2 = s2.split("\n");
   let s = x1.map((x1, i) => x1.substr(0, i + 1) + x2[x2.length - i - 1].substr(0, x2.length - i));
   return s.join("\n");
}


function compose(s1, s2) {
   return s1
      .split("\n")
      .map(
         (x, i, arr, arr2 = s2.split("\n").reverse()) =>
            x.slice(0, i + 1) + arr2[i].slice(0, arr2.length - i)
      )
      .join("\n");
}


function compose(s1, s2, idx = 0) {
   return s1.replace(
      /\S+/g,
      (val) =>
         val.slice(0, idx + 1) +
         s2
            .split(`\n`)
            .reverse()
            [idx].slice(0, val.length - idx++)
   );
}


console.log(
   compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"),
   "bNkTB\nhTrWO\nRTFVi\nCnnIj"
);