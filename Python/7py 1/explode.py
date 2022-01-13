"""
|--------------------------------------------------------------------------
| Digits explosion
|--------------------------------------------------------------------------
|
"""

def explode(s):
   res = ''
   for i in range(len(s)):
      for j in range(int(s[i])):
         res += s[i]
   return res


def explode(s):
   return ''.join(c * int(c) for c in s)


def explode(s):
   result = ""
   for num in s:
      result += int(num)*num
   return result


def explode(string: str) -> str:
   return "".join(map(lambda _it: _it * int(_it), string))


print(explode("312"), "333122")
print(explode("102269"),"12222666666999999999")
print(explode("0"), "")
print(explode("000"), "")
print(explode("123"), "122333")