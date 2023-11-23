/*
|--------------------------------------------------------------------------
| Linked Lists - Get Nth Node
|--------------------------------------------------------------------------
|
*/

function Node(data) {
   this.data = data;
   this.next = null;
}
function getNth(node, index = 0) {
   if (node && !index) return node;
   return getNth(node.next, index - 1);
}


class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}
const getNth = (node, index) => !node ? (() => {throw new Error()})() : index ? getNth(node.next, --index) : node;


function Node(data) {
   [this.data, this.next] = [data, null];
}
function getNth(node, index) {
   if (!node) throw true;
   return index === 0 ? node : getNth(node.next, index - 1);
}