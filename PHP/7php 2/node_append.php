<?php
/*
|--------------------------------------------------------------------------
| Linked Lists - Append
|--------------------------------------------------------------------------
|
*/

function append($list_a, $list_b) {
   if (is_null($list_a)) return $list_b;
   if (is_null($list_b)) return $list_a;
   return new Node($list_a->data, append($list_a->next, $list_b));
}


function append($list_a, $list_b) {
   return $list_a ? new Node($list_a->data , !is_null($list_a->next) ? append($list_a->next, $list_b) : $list_b) : $list_b;
}


function append($list_a, $list_b) {
   if (!$list_a) return $list_b;
   $pos = $list_a;
   while ($pos->next) $pos = $pos->next;
   $pos->next = $list_b;
   return $list_a;
}