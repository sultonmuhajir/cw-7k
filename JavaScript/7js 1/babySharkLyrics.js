/*
|--------------------------------------------------------------------------
| Baby shark lyrics generator
|--------------------------------------------------------------------------
|
*/

function babySharkLyrics() {
   let x = [
      "Baby shark",
      "Mommy shark",
      "Daddy shark",
      "Grandma shark",
      "Grandpa shark",
      "Let's go hunt",
   ];
   return x.map((i) => `${i},${" doo".repeat(6)}\n`.repeat(3) + `${i}!\n`).join("") + "Run away,…";
}


function babySharkLyrics() {
   return (
      [
         ...[`Baby`, `Mommy`, `Daddy`, `Grandma`, `Grandpa`].map((v) => v + ` shark`),
         `Let's go hunt`,
      ].map((v) => `${v},${` doo`.repeat(6)}\n`.repeat(3) + v + `!\n`).join`` + `Run away,…`
   );
}


function babySharkLyrics() {
   let d = " doo".repeat(6),
      a = ["Baby", "Mommy", "Daddy", "Grandma", "Grandpa"],
      r = "";
   for (let i in a) {
      r += (a[i] + " shark," + d + "\n").repeat(3);
      r += a[i] + " shark!\n";
   }
   return r + ("Let's go hunt," + d + "\n").repeat(3) + "Let's go hunt!\nRun away,…";
}


console.log(babySharkLyrics());