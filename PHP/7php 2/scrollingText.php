<?php
/*
|--------------------------------------------------------------------------
| Scrolling Text
|--------------------------------------------------------------------------
|
*/

function scrollingText($text) {
   $res = [];
   for ($i = 0; $i < strlen($text); $i++) {
      array_push($res, strtoupper(substr($text, $i) . substr($text, 0, $i)));
   }
   return $res;
}


function scrollingText($text) {
   $text.= $text;
   return array_map(function ($i)  use ($text){
      return strtoupper(substr($text, $i, strlen($text) / 2));
   }, range(0, strlen($text) / 2 - 1));
}


function scrollingText($text) {
   $scroll = [strtoupper($text)];
   while ($scroll[0] != ($extt = substr(end($scroll), 1).end($scroll)[0])) {
      $scroll[] = $extt;
   }
   return $scroll;
}


function scrollingText($text) {
   $res = [];
   for($i = 0; $i < strlen($text); $i++) {
      $res[] = strtoupper(substr($text, $i) . substr($text, 0, $i));
   }
   return $res;
}


print_r(scrollingText("abcdefg"));