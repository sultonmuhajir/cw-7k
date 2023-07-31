<?php
/*
|--------------------------------------------------------------------------
| Hungarian Vowel Harmony (easy)
|--------------------------------------------------------------------------
|
*/

function dative($word) {
   for ($i = strlen($word) - 1; $i >= 0; $i--) {
      if (strpos("aáoóuú", $word[$i]) !== false) return $word . "nak";
      if (strpos("eéiíöőüű", $word[$i]) !== false) return $word . "nek";
   }
}


function dative(string $w): string {
   return (preg_match('[e|é|i|í|ö|ő|ü|ű]', $w)> preg_match('[a|á|o|ó|u|ú]', $w))? $w."nek": $w."nak";
}


function dative(string $w): string {
   str_replace(['a', 'á', 'o', 'ó','u', 'ú'],'',$w,$count);
   return $w.($count > 0 ? 'nak' : 'nek');
}


print_r(dative("ablak") . " ablaknak
");
print_r(dative("szék") . " széknek
");
print_r(dative("otthon") . " otthonnak
");
print_r(dative("tükör") . " tükörnek
");