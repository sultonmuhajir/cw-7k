"""
|--------------------------------------------------------------------------
| Interview Question (easy)
|--------------------------------------------------------------------------
|
"""

def get_strings(city):
   arr = city.lower().replace(' ','')
   return ','.join(f'{i}:'+'*'*(arr.count(i)) for i in dict.fromkeys(arr))


from collections import Counter
def get_strings(city):
   return ",".join(f"{char}:{'*'*count}" for char, count in Counter(city.replace(" ", "").lower()).items())


def get_strings(s):
   return ','.join(f"{i}:{'*'*s.lower().count(i)}" for i in dict.fromkeys(s.replace(' ','').lower()))


print(get_strings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*")
print(get_strings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*")
print(get_strings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*")