/*
|--------------------------------------------------------------------------
| Linked Lists - Push & BuildOneTwoThree
|--------------------------------------------------------------------------
|
*/

function Node(data, next = null) {
   this.data = data;
   this.next = next;
}


function push(head, data) {
   return new Node(data, head);
}


function buildOneTwoThree() {
   return [3, 2, 1].reduce(push, null);
}