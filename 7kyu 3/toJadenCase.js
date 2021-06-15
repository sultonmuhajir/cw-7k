String.prototype.toJadenCase = function () {
   const arr = this.split(" ");
   const result = [];
   for (let i in arr) {
      result.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase());
   }
   return result.join(" ");
}


String.prototype.toJadenCase = function () {
   return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};


String.prototype.toJadenCase = function () {
   return this.replace(/(?:^|\s)\S/g, function (c) {
      return c.toUpperCase();
   });
};


const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
