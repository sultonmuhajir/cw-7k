<?php
/*
|--------------------------------------------------------------------------
| Baby shark lyrics generator
|--------------------------------------------------------------------------
|
*/

function babySharkLyrics() {
   $x = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', 'Let\'s go hunt'];
   $s = '';
   foreach($x as $y) {
      $s .= str_repeat($y . ", doo doo doo doo doo doo\n", 3) . $y . '!' . "\n";
   }
   return $s . 'Run away,…';
}


function babySharkLyrics() {
   return implode(array_map(fn($v)=>str_repeat(trim("{$v} shark, ".str_repeat('doo ', 6))."\n",3)."{$v} shark!\n",['Baby','Mommy','Daddy','Grandma','Grandpa'])).str_repeat(trim("Let's go hunt, ".str_repeat('doo ', 6)) . "\n", 3)."Let's go hunt!\n"."Run away,…";
}


function babySharkLyrics() {
   $sh = ["Baby", "Mommy", "Daddy", "Grandma", "Grandpa"];
   $ds = ", doo doo doo doo doo doo\n";
   foreach ($sh as $s) {
      $lyr .= str_repeat("$s shark$ds", 3) . "$s shark!\n";
   }
   return $lyr . str_repeat("Let's go hunt$ds", 3) . "Let's go hunt!\nRun away,…";
}


print_r(babySharkLyrics());