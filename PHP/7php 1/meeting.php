<?php
/*
|--------------------------------------------------------------------------
| The Office IV - Find a Meeting Room
|--------------------------------------------------------------------------
|
*/

function meeting($a) {
   return in_array('O', $a) ? array_search('O', $a) : 'None available!';
}


function meeting($a) {
   return array_search('O', $a) == false ? 'None available!' : array_search('O', $a);
}


function meeting($a) {
   return is_int(array_search('O', $a)) ? array_search('O', $a) : 'None available!';
}


print_r(meeting(['X', 'O', 'X']) . ' ' . 1 . '
');
print_r(meeting(['O', 'X', 'X', 'X', 'X']) . ' ' . 0 . '
');
print_r(meeting(['X', 'X', 'X', 'X', 'X']) . ' None available!
');