<?php
/*
|--------------------------------------------------------------------------
| Fizz Buzz Cuckoo Clock
|--------------------------------------------------------------------------
|
*/

function fizzBuzzCuckooClock($time) {
   list($hour, $minute) = explode(":", $time);
   if ((int)$minute == 0) {
      return trim(str_repeat("Cuckoo ", ($hour % 12) ?: 12));
   } elseif ((int)$minute == 30) {return "Cuckoo";
   } elseif ((int)$minute % 15 == 0) {return "Fizz Buzz";
   } elseif ((int)$minute % 3 == 0) {return "Fizz";
   } elseif ((int)$minute % 5 == 0) {return "Buzz";
   } else {return "tick";}
}


function fizzBuzzCuckooClock($time) {
   list($h,$m) = explode(':', $time);
   if ($m==0) return trim(str_repeat('Cuckoo ', $h%12==0?12:$h%12));
   if ($m==30) return 'Cuckoo';
   if ($m%3==0||$m%5==0) return trim(($m%3==0?'Fizz ':'').($m%5==0?'Buzz':''));
   return 'tick';
}


function fizzBuzzCuckooClock($time) {
   $time = explode(':', $time);
   $time[0] > 12 ? $time[0] -= 12 : ($time[0] == '00' ? $time[0] = 12 : '');
   switch ($time) {
      case ($time[1] === '00') : return trim(str_repeat('Cuckoo ', intval($time[0])));
      case ($time[1] === '30') : return 'Cuckoo';
      case ($time[1] % (3 * 5) === 0) : return 'Fizz Buzz';
      case ($time[1] % 3 === 0) : return 'Fizz';
      case ($time[1] % 5 === 0) : return 'Buzz';
      default : return 'tick';
   }
}


print_r(fizzBuzzCuckooClock("13:34") . " tick
");
print_r(fizzBuzzCuckooClock("11:15") . " Fizz Buzz
");
print_r(fizzBuzzCuckooClock("03:03") . " Fizz
");
print_r(fizzBuzzCuckooClock("14:30") . " Cuckoo
");
print_r(fizzBuzzCuckooClock("08:55") . " Buzz
");
print_r(fizzBuzzCuckooClock("14:00") . " Cuckoo Cuckoo
");