<?php
/*
|--------------------------------------------------------------------------
| Convert a linked list to a string
|--------------------------------------------------------------------------
|
*/

function stringify($list) {
   return $list == null ? 'NULL' : "$list->data -> " . stringify($list->next);
}


function stringify($list): string {
   $res = "";
   while ($list) {
      $res .= ($list->data ?? "NULL") . " -> ";
      $list = $list->next;
   }
   return $res . "NULL";
}


function stringify($list): string {
   $res = [];
   while ($list) {
      $res[] = $list->data;
      $list = $list->next;
   }
   $res[] = "NULL";
   return implode(' -> ', $res);
}


print(stringify(null) . ' ' . null);