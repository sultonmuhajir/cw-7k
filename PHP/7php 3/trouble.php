<?php
/*
|--------------------------------------------------------------------------
| Double Trouble
|--------------------------------------------------------------------------
|
*/

function trouble($x, $t) {
   $res = [$x[0]];
   for ($i = 1; $i < count($x); ++$i) {
      if ($res[count($res) - 1] + $x[$i] != $t) array_push($res, $x[$i]);
   }
   return $res;
}


function trouble($x, $t){
	$i = 1;
	while($i<count($x)){
		if($x[$i-1]+$x[$i]==$t){
			unset($x[$i]);
			$x = array_values($x);
		} else $i++;
	}
	return $x;
}


function trouble($x, $t) {
   $res = [];  
   foreach($x as $i)
      if(!$res || end($res)+$i!=$t) $res[] = $i;
   return $res;
}


print_r(trouble([1, 3, 5, 6, 7, 4, 3], 7));
print_r(trouble([4, 1, 1, 1, 4], 2));
print_r(trouble([2, 2, 2, 2, 2, 2], 4));
print_r(trouble([2, 6, 2], 8));