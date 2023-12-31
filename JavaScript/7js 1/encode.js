/*
|--------------------------------------------------------------------------
| Ciphers #1 - The 01 Cipher
|--------------------------------------------------------------------------
|
*/

function encode(plaintext) {
   let res = "";
   for (let i = 0; i < plaintext.length; i++) {
      let num = plaintext[i].toLowerCase().charCodeAt() - 97;
      res += num < 0 || num > 25 ? plaintext[i] : num % 2 == 0 ? "0" : "1";
   }
   return res;
}


function encode(plaintext) {
   return plaintext.replace(/[a-z]/gi, (c) => 1 - (c.charCodeAt(0) % 2));
}


function encode(s) {
   return s.split``.map((c) => (/[a-z]/i.test(c) ? (c.toLowerCase().charCodeAt() + 1) % 2 : c))
      .join``;
}


console.log(encode("Hello World!"), "10110 00111!");