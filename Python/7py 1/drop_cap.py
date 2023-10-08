"""
|--------------------------------------------------------------------------
| Dropcaps
|--------------------------------------------------------------------------
|
"""

def drop_cap(n):
   arr = n.split(" ")
   for i in range(len(arr)):
      if len(arr[i]) > 2:
         arr[i] = arr[i][0].upper() + arr[i][1:].lower()
   return " ".join(arr)


def drop_cap(str_):
   return ' '.join( w.capitalize() if len(w) > 2 else w for w in str_.split(' ') )


from re import sub
def drop_cap(s):
   return sub(r'\S{3,}', lambda m: m.group(0).title(), s)


print(drop_cap("Apple Banana"), "Apple Banana")
print(drop_cap("Apple"), "Apple")
print(drop_cap(""), "")
print(drop_cap("of"), "of")
print(drop_cap("  leading spaces"), "  Leading Spaces")
print(drop_cap("trailing spaces   "), "Trailing Spaces   ")
print(drop_cap("ALL CAPS CRAZINESS"), "All Caps Craziness")
print(drop_cap("rAnDoM CaPs CrAzInEsS"), "Random Caps Craziness")