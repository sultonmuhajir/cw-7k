<?php
/*
|--------------------------------------------------------------------------
| Find the stray number
|--------------------------------------------------------------------------
|
*/

function stray($arr)
{
   return array_reduce($arr, function($a, $b) { return $a ^ $b; });
}


function stray(array $arr) {
   return array_search(1, array_count_values($arr));
}


function stray($arr)
{
   sort($arr);
   return $arr['0'] ==  $arr['1'] ? end($arr) : $arr['0'];
}


function stray($arr) {
   return array_flip(array_count_values($arr))[1];
}


print_r(stray([1, 1, 2]).' '. 2 . '
');
print_r(stray([4, 2, 2, 2, 2]).' '. 4 . '
');
print_r(stray([4, 4, 4, 5, 4, 4, 4]).' '. 5 . '
');