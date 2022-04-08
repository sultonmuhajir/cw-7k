<?php
/*
|--------------------------------------------------------------------------
| Find how many times did a team from a given country win the Champions League?
|--------------------------------------------------------------------------
|
*/

function countWins($winnerList, $country) {
   return count(array_filter($winnerList, function($i) use ($country) {
      return $i['country'] == $country;
   }));
}


function countWins($winnerList, $country) {
   return array_count_values(array_column($winnerList,"country"))[$country];
}


function countWins($winnerList, $country) {
   return array_reduce($winnerList, function ($c, $i) use ($country) {
      return $c + ($i['country'] == $country ? 1 : 0);
   }, 0);
}