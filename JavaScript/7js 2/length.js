/*
|--------------------------------------------------------------------------
| Fun with lists: length
|--------------------------------------------------------------------------
|
*/

function length(head) {
   return head ? 1 + length(head.next) : 0;
}


function length(head) {
   let res = 0;
   while (head) {
      head = head.next;
      res++;
   }
   return res;
}


function length(head) {
   let x = head;
   for (let i = 0; x; ++i) {
      x = x.next;
   }
   return i;
}