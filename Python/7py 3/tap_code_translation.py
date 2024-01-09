"""
|--------------------------------------------------------------------------
| Tap Code Translation
|--------------------------------------------------------------------------
|
"""

def tap_code_translation(text):
   res = ''
   abj = "ABCDEFGHIJLMNOPQRSTUVWXYZ"
   for i in text:
      if i in 'ck': res += '. ... '
      else:
         x, y = divmod(abj.index(i.upper()),5)
         res += f"{(x+1)*'.'} {(y+1)*'.'} "
   return res.strip()


def tap_code_translation(text):
   TAP_CODE = {'a': (1, 1), 'b': (1, 2), 'c': (1, 3), 'd': (1, 4), 'e': (1, 5), 'k': (1, 3),
               'f': (2, 1), 'g': (2, 2), 'h': (2, 3), 'i': (2, 4), 'j': (2, 5),
               'l': (3, 1), 'm': (3, 2), 'n': (3, 3), 'o': (3, 4), 'p': (3, 5),
               'q': (4, 1), 'r': (4, 2), 's': (4, 3), 't': (4, 4), 'u': (4, 5),
               'v': (5, 1), 'w': (5, 2), 'x': (5, 3), 'y': (5, 4), 'z': (5, 5)}
   return ' '.join('.' * c for x in text for c in TAP_CODE[x])


def tap_code_translation(text):
   loc = []
   for c in text:
      t = ord(c) - 97
      if t == 10: t = 2
      elif t > 10: t = t - 1
      l = t//5 + 1
      h = t%5+1
      loc.extend((l*'.', h*'.'))
   return " ".join(loc)


print(tap_code_translation("breaks"), ". .. .... .. . ..... . . . ... .... ...")
print(tap_code_translation("taps"), ".... .... . . ... ..... .... ...")
print(tap_code_translation("knocks"), ". ... ... ... ... .... . ... . ... .... ...")