/*
|--------------------------------------------------------------------------
| Convert a linked list to a string
|--------------------------------------------------------------------------
|
*/

function stringify(list) {
   return list == null ? "null" : `${list.data} -> ${stringify(list.next)}`;
}


function stringify(list) {
   let res = "";
   while (list) {
      res += list.data + " -> ";
      list = list.next;
   }
   return res + "null";
}


function stringify(list) {
   let data = [];
   while (list != null) {
      data.push(list.data);
      list = list.next;
   }
   data.push("null");
   return data.join(" -> ");
}


console.log(stringify(null), "null");