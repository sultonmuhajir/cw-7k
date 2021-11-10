<?php
/*
|--------------------------------------------------------------------------
| Thinkful - String Drills: Quotable
|--------------------------------------------------------------------------
|
*/

function quotable($name, $quote) {
   $qt = '"' . $quote . '"';
   return "{$name} said: {$qt}";
}


function quotable(string $name, string $quote) {
   return "{$name} said: \"{$quote}\"";
}


function quotable($name, $quote) {
   $str = '[name] said: "[quote]"';
   $res = str_replace('[name]', $name, $str);
   $res = str_replace('[quote]', $quote, $res);
   return $res;
}


function quotable($name, $quote) {
   return $name." said: " . "\"" . $quote . "\"";
}


print_r(quotable('Grae', 'Practice makes perfect') . ' Grae said: "Practice makes perfect"');