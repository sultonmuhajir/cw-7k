<?php
/*
|--------------------------------------------------------------------------
| Alphabet war
|--------------------------------------------------------------------------
|
*/

function alphabetWar($fight)
{
   $left = 0;
   $right = 0;
   for ($i=0; $i < strlen($fight); $i++) { 
      if ($fight[$i] == 'w' || $fight[$i] == 'p' || $fight[$i] == 'b' || $fight[$i] == 's') {
         $left += ($fight[$i] == 'w' ? 4 : ($fight[$i] == 'p' ? 3 : ($fight[$i] == 'b' ? 2 : ($fight[$i] == 's' ? 1 : 0))));
      } else {
         $right += ($fight[$i] == 'm' ? 4 : ($fight[$i] == 'q' ? 3 : ($fight[$i] == 'd' ? 2 : ($fight[$i] == 'z' ? 1 : 0))));
      }
   }
   return ($left > $right ? 'Left side wins!' : ($left < $right ? 'Right side wins!' : "Let's fight again!"));
}


function alphabetWar($fight)
{
   $sum = array_sum(
      preg_replace(['/[w]/','/[p]/','/[b]/', '/[s]/', '/[m]/','/[q]/','/[d]/', '/[z]/'], [4,3,2,1,-4,-3,-2,-1], str_split($fight))
   );
  return $sum == 0 ? "Let's fight again!" : ($sum > 0 ? "Left side wins!" : "Right side wins!");
}


function alphabetWar($fight) {
   $right_side = array_sum(str_split(strtr($fight,["m"=>4, "q"=>3, "d"=>2, "z"=>1])));
   $left_side = array_sum(str_split(strtr($fight, ["w"=>4, "p"=>3, "b"=>2, "s"=>1])));
   return ($right_side > $left_side) ? "Right side wins!" : ($left_side > $right_side ? "Left side wins!" : "Let's fight again!");
}


function alphabetWar($fight)
{
   $arr = str_split($fight);
   $sum = array_sum(preg_replace(['/[w]/','/[p]/','/[b]/', '/[s]/', '/[m]/','/[q]/','/[d]/', '/[z]/'], [4,3,2,1,-4,-3,-2,-1], $arr));
   return $sum === 0 ? "Let's fight again!" :($sum < 0 ? "Right side wins!":"Left side wins!");
}


print_r(alphabetWar("z"). " Right side wins!
");
print_r(alphabetWar("zdqmwpbs"). " Let's fight again!
");
print_r(alphabetWar("zzzzs"). " Right side wins!
");
print_r(alphabetWar("wwwwww"). " Left side wins!
");