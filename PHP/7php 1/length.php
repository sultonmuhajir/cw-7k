<?php
/*
|--------------------------------------------------------------------------
| Fun with lists: length
|--------------------------------------------------------------------------
|
*/

function length($head) {
   return $head ? 1 + length($head->next) : 0;
}


function length($head) {
   $count = 0;
   while ($head) {
      $count++;
      $head = $head->next;
   }
   return $count;
}


function length($l) {
   return is_null($l) ? 0 : 1 + length($l->next);
}