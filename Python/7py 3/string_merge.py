"""
|--------------------------------------------------------------------------
| String Merge!
|--------------------------------------------------------------------------
|
"""

def string_merge(string1, string2, letter):
   return f'{string1[0:string1.index(letter)]}{string2[string2.index(letter):]}'


def StringMerge(string1, string2, letter):
   return string1[:string1.index(letter)] + string2[string2.index(letter):]


def StringMerge(s1, s2, l):
   return s1.split(l)[0] + l + s2.split(l, 1)[1]


def StringMerge(s1, s2, l):
   return s1[:s1.find(l)] + s2[s2.find(l):]


print(string_merge("hello", "world", "l"), "held")
print(string_merge("coding", "anywhere", "n"), "codinywhere")
print(string_merge("jason", "samson", "s"), "jasamson")
print(string_merge("wonderful", "people", "e"), "wondeople")