<?php
/*
|--------------------------------------------------------------------------
| Lucky Bus Ticket
|--------------------------------------------------------------------------
|
*/

function isLucky($ticket) {
   if (strlen($ticket) == 6 && ctype_digit($ticket)) {
      $num = array_map('intval', str_split($ticket));
      return array_sum(array_slice($num, 0, 3)) == array_sum(array_slice($num, 3));
   } else {
      return false;
   }
}


function isLucky($ticket){
   return preg_match('/^\d{6}$/', $ticket) && ($ticket[0] + $ticket[1] + $ticket[2] == $ticket[3] + $ticket[4] + $ticket[5]);
}


function isLucky($ticket){
   return preg_match("/^\d{6}$/", $ticket) && 
      array_sum(str_split(substr($ticket, 0, 3))) == array_sum(str_split(substr($ticket, 3)));
}


print_r(isLucky("123321") . ' ' . true . '
');
print_r(isLucky("100001") . ' ' . true . '
');
print_r(isLucky("100200") . ' ' . false . '
');
print_r(isLucky("12341234") . ' ' . false . '
');
print_r(isLucky("12a12a") . ' ' . false . '
');
print_r(isLucky("") . ' ' . false . '
');