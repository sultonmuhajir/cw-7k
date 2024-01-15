/*
|--------------------------------------------------------------------------
| Friday the 13th Part 1
|--------------------------------------------------------------------------
|
*/

function killcount(counselors, jason) {
   return counselors.filter((x) => x[1] < jason).map((x) => x[0]);
}


function killcount(counselors, jason) {
   let arr = [];
   for (let i = 0; i < counselors.length; i++) {
      if (counselors[i][1] < jason) {
         arr.push(counselors[i][0]);
      }
   }
   return arr;
}


function killcount(counselors, jason) {
   return counselors.reduce(
      (killed, [name, int]) => (int < jason ? killed.concat(name) : killed),
      []
   );
}


console.log(
   killcount(
      [
         ["Mike", 7],
         ["Alysa", 3],
      ],
      7
   ),
   ["Alysa"]
);