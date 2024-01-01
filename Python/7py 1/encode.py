"""
|--------------------------------------------------------------------------
| Ciphers #1 - The 01 Cipher
|--------------------------------------------------------------------------
|
"""

def encode(plaintext):
   res = ""
   for char in plaintext:
      num = ord(char.lower()) - 97
      res += char if num < 0 or num > 25 else "0" if num % 2 == 0 else "1"
   return res


def encode(s):
   return "".join(['1', '0'][ord(x)%2] if x.isalpha() else x for x in s.lower())


from re import sub
def encode(s):
   return sub(r"[a-zA-Z]", lambda m: str((ord(m.group())+1)%2), s)


print(encode("Hello World!"),"10110 00111!")