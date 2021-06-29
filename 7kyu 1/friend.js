function friend(friends) {
   return friends.filter(i => i.length == 4);
}


const friend = friends => friends.filter(friend => friend.length == 4);


function friend(friends) {
   return friends.reduce((res, x) => {
      if (x.length == 4) {
         res.push(x);
         return res;
      } else return res
   }, []);
}


function friend(friends) {
   const friend = []
   for (const str of friends) {
      if (str.length === 4) friend.push(str)
   }
   return friend
}


console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);