<?php
/*
|--------------------------------------------------------------------------
| Principal Diagonal | VS | Secondary Diagonal
|--------------------------------------------------------------------------
|
*/

function diagonal($matrix) {
   $res = 0;
   $x = count($matrix) - 1;
   for ($i = 0; $i < count($matrix); $i++) {
      $res += $matrix[$i][$i] - $matrix[$i][$x];
      $x -= 1;
   }
   return $res > 0 ? "Principal Diagonal win!" : ($res < 0 ? "Secondary Diagonal win!" : "Draw!");
}


function diagonal($matrix) {
   foreach ($matrix as $i => $e) {
      $diff += $e[$i] - $e[count($matrix) - $i - 1];
   }
   return $diff > 0 ? "Principal Diagonal win!" : ($diff < 0 ? "Secondary Diagonal win!" : "Draw!");
}


function diagonal($matrix){
	$cnt = count($matrix);$pd = $sd = 0;
	for($i=0;$i<$cnt;$i++){
		$pd+=$matrix[$i][$i];
		$sd+=$matrix[$i][$cnt-1-$i];
	}
	return $pd==$sd ? 'Draw!' : ($pd>$sd ? 'Principal Diagonal win!' : 'Secondary Diagonal win!');
}


print_r(
   diagonal([
      [2, 2, 2],
      [4, 2, 6],
      [1, 8, 2],
   ]) . " Principal Diagonal win!
");
print_r(
   diagonal([
      [1, 2, 2, 5, 1],
      [4, 1, 6, 1, 1],
      [1, 8, 5, 6, 2],
      [1, 5, 2, 1, 2],
      [1, 8, 2, 6, 1],
   ]) . " Secondary Diagonal win!
");