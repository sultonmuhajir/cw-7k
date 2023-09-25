/*
|--------------------------------------------------------------------------
| Linked Lists - Append
|--------------------------------------------------------------------------
|
*/

function Node(data) {
   this.data = data;
   this.next = null;
}
function append(listA, listB) {
   if (!listA) return listB;
   listA.next = append(listA.next, listB);
   return listA;
}


const Node = (data, next = null) => ({ data, next });
const append = (l1, l2) => (l1 ? new Node(l1.data, append(l1.next, l2)) : l2);


class Node {
   constructor(data) {
      Object.assign(this, { data, next: null });
   }
}
const append = (listA, listB) =>
   !listA ? listB : ((listA.next = append(listA.next, listB)), listA);