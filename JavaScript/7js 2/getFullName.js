/*
|--------------------------------------------------------------------------
| FIXME: Get Full Name
|--------------------------------------------------------------------------
|
*/

class Dinglemouse {
   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }
   getFullName() {
      return this.firstName == ""
         ? this.lastName
         : this.lastName == ""
         ? this.firstName
         : `${this.firstName} ${this.lastName}`;
   }
}


class Dinglemouse {
   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }
   getFullName() {
      return `${this.firstName} ${this.lastName}`.trim();
   }
}


class Dinglemouse {
   constructor(a, b) {
      this.name = [a, b];
   }
   getFullName() {
      return this.name.filter(Boolean).join` `;
   }
}


console.log(new Dinglemouse("", "").getFullName(), "Clint Eastwood");