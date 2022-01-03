<?php
/*
|--------------------------------------------------------------------------
| Count the Digit
|--------------------------------------------------------------------------
|
*/

function nbDig($n, $d) {
   $res = 0;
   for ($i=0; $i <= $n; $i++) { 
      $res += substr_count(strval($i**2), $d);
   }
   return $res;
}


function nbDig($n, $d): int {
   return substr_count(implode('', array_map(function($num){return $num**2;},range(0, $n))), $d);
}


function nbDig( int $n, int $d ): int {
   return array_sum( array_map( function( $n ) use ( $d ) { return substr_count( strval( $n*$n ), $d ); }, range( 0, $n ) ) );
}


function nbDig($n, $d) {
   $sqt = array_map(function($num) { return $num*$num; }, range(0,$n));
   return substr_count(implode(preg_grep("/($d)/", $sqt)), $d);
}


print_r(nbDig(5750, 0) . ' ' . 4700 . '
');
print_r(nbDig(11011, 2) . ' ' . 9481 . '
');
print_r(nbDig(12224, 8) . ' ' . 7733 . '
');
print_r(nbDig(11549, 1) . ' ' . 11905 . '
');