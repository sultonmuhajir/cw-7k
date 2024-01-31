/*
|--------------------------------------------------------------------------
| Alan Partridge I - Partridge Watch
|--------------------------------------------------------------------------
|
*/

function part(arr) {
   let count = 0;
   let x = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"];
   arr.forEach((i) => {
      if (x.includes(i)) count += 1;
   });
   return count != 0
      ? `Mine's a Pint${"!".repeat(count)}`
      : "Lynn, I've pierced my foot on a spike!!";
}


const part = (x) =>
   ((m) => (m ? "Mine's a Pint" + "!".repeat(m) : "Lynn, I've pierced my foot on a spike!!"))(
      x.reduce(
         (a, b) =>
            a +
            ([
               "Partridge",
               "PearTree",
               "Chat",
               "Dan",
               "Toblerone",
               "Lynn",
               "AlphaPapa",
               "Nomad",
            ].indexOf(b) != -1
               ? 1
               : 0),
         0
      )
   );


function part(x) {
   let list = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"];
   let out = x.filter((el) => list.includes(el)) || [];
   return out.length
      ? "Mine's a Pint" + "!".repeat(out.length)
      : "Lynn, I've pierced my foot on a spike!!";
}


console.log(part(["Grouse", "Partridge", "Pheasant"]), "Mine's a Pint!");
console.log(
   part(["Pheasant", "Goose", "Starling", "Robin"]),
   "Lynn, I've pierced my foot on a spike!!"
);
console.log(
   part([
      "Grouse",
      "Partridge",
      "Pheasant",
      "Goose",
      "Starling",
      "Robin",
      "Thrush",
      "Emu",
      "PearTree",
      "Chat",
      "Dan",
      "Square",
      "Toblerone",
      "Lynn",
      "AlphaPapa",
      "BMW",
      "Graham",
      "Tool",
      "Nomad",
      "Finger",
      "Hamster",
   ]),
   "Mine's a Pint!!!!!!!!"
);