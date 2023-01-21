/*
|--------------------------------------------------------------------------
| Regex validate PIN code
|--------------------------------------------------------------------------
|
*/

const validatePIN = pin => ((pin.length == 4 || pin.length == 6) && pin.match(/^[0-9]+$/)) ? true : false;


function validatePIN(pin) {
   return /^(\d{4}|\d{6})$/.test(pin)
}


function validatePIN(pin) {
   const n = pin.length;
   if (n != 4 && n != 6)
      return false;
   for (let i in pin)
      if (pin[i] > '9' || pin[i] < '0')
         return false;
   return true;
}


console.log(validatePIN("1234"), true, "Wrong output for '1234'");
console.log(validatePIN("12345"), false, "Wrong output for '12345'")
console.log(validatePIN("-1234"), false, "Wrong output for '-1234'")
console.log(validatePIN("1.234"), false, "Wrong output for '1.234'")
console.log(validatePIN("a234"), false, "Wrong output for 'a234'")
console.log(validatePIN("a234"), false, "Wrong output for '.234'")
console.log(validatePIN("0000"), true, "Wrong output for '0000'");
console.log(validatePIN("098765"), true, "Wrong output for '098765'");