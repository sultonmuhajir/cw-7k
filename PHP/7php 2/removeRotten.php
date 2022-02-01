<?php
/*
|--------------------------------------------------------------------------
| Help the Fruit Guy
|--------------------------------------------------------------------------
|
*/

function removeRotten($x) {
	return $x ? array_map(function($i) {
		return strtolower(str_replace('rotten', '', $i));
	}, $x) : [];
}


function removeRotten($fruitBasket) {
	return $fruitBasket ? array_map(function ($e) {
		return strtolower(preg_replace("/^rotten/", "", $e));
	}, $fruitBasket) : [];
}


function removeRotten($fruitBasket) {
	return is_array($fruitBasket) ? array_map('strtolower', str_replace('rotten', '', $fruitBasket)) : [];
}


function removeRotten($fruitBasket) {
	return !$fruitBasket ? [] : preg_replace('/rotten/', '', array_map('strtolower', $fruitBasket));
}


print_r(removeRotten(["apple", "rottenBanana", "kiwi", "melone", "orange"]));
print_r(removeRotten([]));
print_r(removeRotten(NULL));