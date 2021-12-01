<?php
/*
|--------------------------------------------------------------------------
| Bumps in the Road
|--------------------------------------------------------------------------
|
*/

function bump($x) {
   return strlen(str_replace('_', '', $x)) <= 15 ? 'Woohoo!' : 'Car Dead';
}


function bump(string $x): string {
   return (substr_count($x, 'n') > 15)? 'Car Dead' : 'Woohoo!';
}


function bump($x) {
   return array_count_values(str_split($x))['n'] > 15 ? "Car Dead" : "Woohoo!";
}


function bump($x) {
   return preg_match_all('/n/', $x, $m) <= 15 ? 'Woohoo!': 'Car Dead';
}


print_r(bump("n") . " Woohoo!
");
print_r(bump("_nnnnnnn_n__n______nn__nn_nnn") . " Car Dead
");
print_r(bump("______n___n_") . " Woohoo!
");