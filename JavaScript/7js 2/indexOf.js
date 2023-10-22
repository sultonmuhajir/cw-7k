/*
|--------------------------------------------------------------------------
| Fun with lists: indexOf
|--------------------------------------------------------------------------
|
*/

function indexOf(head, value) {
   for (let i = 0; head; head = head.next, i++) {
      if (head.data === value) return i;
   }
   return -1;
}


function indexOf(head, value, i = 0) {
   return head == null ? -1 : head.data === value ? i : indexOf(head.next, value, i + 1);
}


function indexOf(head, value) {
   let i = 0;
   while (head) {
      if (head.data === value) return i;
      head = head.next;
      i++;
   }
   return -1;
}