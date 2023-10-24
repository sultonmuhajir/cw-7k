<?php
/*
|--------------------------------------------------------------------------
| Fun with lists: indexOf
|--------------------------------------------------------------------------
|
*/

function index_of($head, $value) {
   $i = 0;
   while ($head) {
      if ($head->data === $value) return $i;
      $head = $head->next;
      $i++;
   }
   return -1;
}


function index_of($node, $v) {
   return $node ? ($node->data === $v ? 0 : (index_of($node->next, $v) + 1 ?: -1))  : -1;
}


function index_of($head, $value, $index = 0) {
   if ($head === NULL) return -1;
   if ($head->data === $value) return $index;
   return index_of($head->next, $value, $index + 1);
}