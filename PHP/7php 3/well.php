<?php
/*
|--------------------------------------------------------------------------
| Well of Ideas - Harder Version
|--------------------------------------------------------------------------
|
*/

function well($arr) {
   $res = [];
   foreach ($arr as $x) {
      foreach ($x as $i) {
         if (gettype($i) == 'string') {
            array_push($res, strtolower($i));
         }
      }
   }
   $good = count(array_filter($res, function($i) {return $i == 'good';}));
   return $good > 2 ? 'I smell a series!' : ($good <= 0 ? 'Fail!' : 'Publish!');
}


function well($arr) {
   $count = substr_count(strtolower(json_encode($arr)), 'good');
   return !$count ? 'Fail!' : ($count <= 2 ? 'Publish!' : 'I smell a series!');
}


function well($arr) {
   $count = count(preg_grep("/^good$/i", array_merge(...$arr)));
   return $count > 2 ? "I smell a series!" : ($count > 1 ? "Publish!" : "Fail!");
}


print_r(well([
   ['bad', 'bAd', 'bad'],
   ['bad', 'bAd', 'bad'],
   ['bad', 'bAd', 'bad']
]));