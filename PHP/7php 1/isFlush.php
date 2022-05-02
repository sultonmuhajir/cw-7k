<?php
/*
|--------------------------------------------------------------------------
| Determine if the poker hand is flush
|--------------------------------------------------------------------------
|
*/

function checkIfFlush($cards) {
	$x = [];
	foreach ($cards as $card) {
		array_push($x, substr($card, -1) );
	}
	return count(array_unique($x)) == 1;
}


function checkIfFlush($cards) {
	return preg_match("/(H|S|D|C)(\g{1}){4}/", preg_replace("/[^HSDC]/", "", join("", $cards))) === 1;
}


function checkIfFlush($cards) {
	return count(array_count_values(array_map(function ($a) {
		return substr($a, -1);
	}, $cards))) > 1 ? false : true;
}


function checkIfFlush($cards) {
	foreach ($cards as &$value) {
		$value = ltrim($value, '0123456789JQKA');
	}
  return 1==count(array_unique($cards));
}


print_r(checkIfFlush(["AS", "3S", "9S", "KS", "4S"]) . ' ' . true . ' 
');
print_r(checkIfFlush(["AD", "4S", "7H", "KC", "5S"]) . ' ' . false . ' 
');