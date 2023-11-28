<?php
/*
|--------------------------------------------------------------------------
| Fun with lists: lastIndexOf
|--------------------------------------------------------------------------
|
*/

function last_index_of($head, $value) {
   $i = 0; $res = -1;
   while ($head) {
      if ($head->data === $value) $res = $i;
      $head = $head->next;        
      $i += 1;
   }
   return $res;
}


function last_index_of($head, $value) {
   return $head ? max(last_index_of($head->next, $value) + 1 ?: -1, $head->data === $value ? 0 : -1) : -1;
}


function last_index_of($head, $value) {
   $index = -1;
   for ($count = 0; $head !== NULL; $head = $head->next, $count++) {
      if ($head->data === $value) $index = $count;
   }
   return $index;
}


print_r(last_index_of(null, 17) . ' ' . -1 . '
');
print_r(last_index_of([1, 2, 3], 2) . ' ' . 1 . '
');
print_r(last_index_of(["aaa", "b", "abc"], "aaa") . ' ' . 0 . '
');
print_r(last_index_of([17, "17", 1.2], 17) . ' ' . 0 . '
');
print_r(last_index_of([17, "17", 1.2], "17") . ' ' . 1 . '
');
print_r(last_index_of([1, 2, 3, 3], 3) . ' ' . 3 . '
');