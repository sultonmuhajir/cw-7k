<?php
/*
|--------------------------------------------------------------------------
| Object-Oriented PHP #3 - Class Constants and Static Methods
|--------------------------------------------------------------------------
|
*/

class CurrentUSPresident {
   const name = "Barack Obama";
   
   public static function greet($name) {
      return "Hello {$name}, my name is Barack Obama, nice to meet you!";
   }
}


echo CurrentUSPresident::name;
echo CurrentUSPresident::greet("Donald");