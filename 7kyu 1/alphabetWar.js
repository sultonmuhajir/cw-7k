function alphabetWar(fight) {
   let left = 0;
   let right = 0;
   for (let i = 0; i < fight.length; i++) {
      if (fight[i] == 'w' || fight[i] == 'p' || fight[i] == 'b' || fight[i] == 's') {
         left += fight[i] == 'w' ? 4 : fight[i] == 'p' ? 3 : fight[i] == 'b' ? 2 : fight[i] == 's' ? 1 : 0;
      } else {
         right += fight[i] == 'm' ? 4 : fight[i] == 'q' ? 3 : fight[i] == 'd' ? 2 : fight[i] == 'z' ? 1 : 0;
      }
   }
   return left > right ? 'Left side wins!' : left < right ? 'Right side wins!' : "Let's fight again!";
}


function alphabetWar(fight) {
   let map = {
      w: -4,
      p: -3,
      b: -2,
      s: -1,
      m: 4,
      q: 3,
      d: 2,
      z: 1
   };
   let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
   return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}


function alphabetWar(fight) {
   thisIsWar = {
      'w': 4,
      'p': 3,
      'b': 2,
      's': 1,
      'm': -4,
      'q': -3,
      'd': -2,
      'z': -1
   };
   result = 0;
   fight.split("").map(function (l) {
      result += thisIsWar[l] !== undefined ? thisIsWar[l] : 0
   });
   return result < 0 ? "Right side wins!" : result > 0 ? "Left side wins!" : "Let's fight again!"
}


function alphabetWar(fight) {
   let score = 0;
   for (const letter of fight) {
      switch (letter) {
         case 'w':
            score -= 4;
            break;
         case 'p':
            score -= 3;
            break;
         case 'b':
            score -= 2;
            break;
         case 's':
            score -= 1;
            break;
         case 'm':
            score += 4;
            break;
         case 'q':
            score += 3;
            break;
         case 'd':
            score += 2;
            break;
         case 'z':
            score += 1;
            break;
      }
   }
   return score < 0 ? "Left side wins!" : score > 0 ? "Right side wins!" : "Let's fight again!";
}


console.log(alphabetWar("z"), "Right side wins!");
console.log(alphabetWar("zdqmwpbs"), "Let's fight again!");
console.log(alphabetWar("zzzzs"), "Right side wins!");
console.log(alphabetWar("wwwwww"), "Left side wins!");