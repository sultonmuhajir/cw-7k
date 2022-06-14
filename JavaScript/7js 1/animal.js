/*
|--------------------------------------------------------------------------
| JavaScript class-like objects
|--------------------------------------------------------------------------
|
*/

class Animal {
   constructor(name, type) {
      this.name = name;
      this.type = type;
   }
   toString() {
      return `${this.name} is a ${this.type}`
   }
}


const dog = new Animal('Max', 'dog');
console.log(dog.name = 'Lassie');