"""
|--------------------------------------------------------------------------
| Uglify Word
|--------------------------------------------------------------------------
|
"""

import re
def uglify_word(s):
   return re.sub(r'[a-zA-Z]+', lambda match: ''.join([c.lower() if i % 2 else c.upper() for i, c in enumerate(match.group())]), s)


uglify_word = lambda s: __import__('re').sub(r"[a-zA-Z]+", lambda x: ''.join((c.upper(), c.lower())[i & 1] for i, c in enumerate(x.group())), s)


def uglify_word(s):
   flag, res = 1, ""
   for char in s:
      res += char.upper() if flag else char.lower()
      flag = not flag or not char.isalpha()
   return res


print(uglify_word("AAA"), "AaA")
print(uglify_word("AaA"), "AaA")
print(uglify_word("BbB"), "BbB")
print(uglify_word("aaa-bbb-ccc"), "AaA-BbB-CcC")
print(uglify_word("AaA-BbB-CcC"), "AaA-BbB-CcC")
print(uglify_word("eeee-ffff-gggg"), "EeEe-FfFf-GgGg")
print(uglify_word("EeEe-FfFf-GgGg"), "EeEe-FfFf-GgGg")
print(uglify_word("qwe123asdf456zxc"), "QwE123AsDf456ZxC")
print(uglify_word("Hello World"), "HeLlO WoRlD")