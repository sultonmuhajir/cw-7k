<?php
/*
|--------------------------------------------------------------------------
| Remove anchor from URL
|--------------------------------------------------------------------------
|
*/

function replaceAll($string) {
   return explode('#', $string)[0];
}


function replaceAll(string $string) :string {
   return preg_replace('/#.*$/','',$string);
}


function replaceAll($s) {
   return strtok($s, "#");
}


function replaceAll(string $string) : string {
   return preg_split('/#/u', $string)[0];
}


print_r(replaceAll('www.codewars.com#about') . ' www.codewars.com');