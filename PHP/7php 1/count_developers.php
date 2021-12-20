<?php
/*
|--------------------------------------------------------------------------
| Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
|--------------------------------------------------------------------------
|
*/

function count_developers($a) {
   return count(array_filter($a, fn($i) => $i['continent'] == 'Europe' && $i['language'] == 'JavaScript'));
}


function count_developers($a) {
   return array_reduce($a, function($a, $c){
     return $a + ($c['continent']=='Europe' && $c['language']=='JavaScript');
   }, 0);
}


function count_developers($a) {
   return array_sum(array_map(function ($array) {
      return $array["continent"] == "Europe" && $array["language"] == "JavaScript" ? 1 : 0;
   }, $a));
}


function count_developers(array $a): int {
  $total = 0;
   foreach ($a as $item) {
      if ($item['language'] == 'JavaScript' && $item['continent'] == 'Europe') {
         $total++;
      }
   }
  return $total;
}


$list1 = [
   [
     "first_name" => "Noah",
     "last_name" => "M.",
     "country" => "Switzerland",
     "continent" => "Europe",
     "age" => 19,
     "language" => "JavaScript"
   ],
   [
     "first_name" => "Maia",
     "last_name" => "S.",
     "country" => "Tahiti",
     "continent" => "Oceania",
     "age" => 28,
     "language" => "JavaScript"
   ],
   [
     "first_name" => "Shufen",
     "last_name" => "L.",
     "country" => "Taiwan",
     "continent" => "Asia",
     "age" => 30,
     "language" => "HTML"
   ],
   [
     "first_name" => "Sumayah",
     "last_name" => "M.",
     "country" => "Tajikistan",
     "continent" => "Asia",
     "age" => 30,
     "language" => "CSS"
   ]
];
print_r(count_developers($list1));