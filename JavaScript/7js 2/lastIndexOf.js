/*
|--------------------------------------------------------------------------
| Fun with lists: lastIndexOf
|--------------------------------------------------------------------------
|
*/

function lastIndexOf(head, value) {
   let res = -1;
   for (let i = 0, node = head; node; i++, node = node.next) {
      if (node.data === value) res = i;
   }
   return res;
}


function lastIndexOf(head, value) {
   let i = 0;
   let res = -1;
   while (head) {
      if (value === head.data) res = i;
      i++;
      head = head.next;
   }
   return res;
}


function lastIndexOf(head, value) {
   const list = (node) => (node ? [node.data, ...list(node.next)] : []);
   return list(head).lastIndexOf(value);
}


console.log(lastIndexOf(null, 17), -1);
console.log(lastIndexOf([1, 2, 3], 2), 1);
console.log(lastIndexOf(["aaa", "b", "abc"], "aaa"), 0);
console.log(lastIndexOf([17, "17", 1.2], 17), 0);
console.log(lastIndexOf([17, "17", 1.2], "17"), 1);
console.log(lastIndexOf([1, 2, 3, 3], 3), 3);