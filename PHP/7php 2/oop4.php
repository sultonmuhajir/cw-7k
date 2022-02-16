<?php
/*
|--------------------------------------------------------------------------
| Object-Oriented PHP #4 - People, people, people (Practice)
|--------------------------------------------------------------------------
|
*/

class Person {
   const species = "Homo Sapiens";
   public $name;
   public $age;
   public $occupation;
   
   public function __construct($name, $age, $occupation) {
      $this->name = $name;
      $this->age = $age;
      $this->occupation = $occupation;
   }

   public function introduce() {
      return "Hello, my name is {$this->name}";
   }

   public function describe_job() {
      return "I am currently working as a(n) {$this->occupation}";
   }
   
   public static function greet_extraterrestrials($species) {
      return "Welcome to Planet Earth {$species}!";
   }
}


$x = new Person("Riska", "20", "Bidan");
echo $x->introduce();
echo $x->describe_job();
echo Person::greet_extraterrestrials("Homo Sapiens");