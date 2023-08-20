<?php
/*
|--------------------------------------------------------------------------
| Easy wallpaper
|--------------------------------------------------------------------------
|
*/

function wallpaper($l, $w, $h) {
   $numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
   return $l * $w * $h != 0 ? $numbers[ceil(2 * ($l + $w) * $h / 5.2 * 1.15)] : $numbers[0];
}


function wallPaper($l, $w, $h) {
   if($l * $w * $h == 0) return $numbers[0];
   return $numbers[ceil(2.3 * ($l + $w) * $h / 5.2)];
}


function wallPaper($l, $w, $h) {
   return ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'][$l*$w*$h ? ceil(($l + $w) * 2 * $h * 1.15 / 5.2) : 0];
}


print_r(wallPaper(6.3, 4.5, 3.29) . " sixteen
");
print_r(wallPaper(7.8, 2.9, 3.29) . " sixteen
");
print_r(wallPaper(6.3, 5.8, 3.13) . " seventeen
");
print_r(wallPaper(6.1, 6.7, 2.81) . " sixteen
");
print_r(wallPaper(0, 5.6, 3.2) . " zero
");