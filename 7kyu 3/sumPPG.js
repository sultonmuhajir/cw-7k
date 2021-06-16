function NBAplayer(name, team, ppg) {
   this.name = name;
   this.team = team;
   this.ppg = ppg;
}

function sumPPG(playerOne, playerTwo) {
   return playerOne.ppg + playerTwo.ppg;
}


const sumPPG = (playerOne, playerTwo) => playerOne.ppg + playerTwo.ppg;


function sumPPG(...players) {
   return players.map(el => el.ppg).reduce((a, b) => a + b)
}


var iverson = new NBAplayer("Iverson", "76ers", 11.2);
var jordan = new NBAplayer("Jordan", "bulls", 20.2);
console.log(sumPPG(iverson, jordan), 31.4);