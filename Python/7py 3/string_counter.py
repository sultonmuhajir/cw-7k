"""
|--------------------------------------------------------------------------
| How many times does it contain?
|--------------------------------------------------------------------------
|
"""

def string_counter(string, char):
   res = 0
   for i in string:
      if i == char: res += 1
   return res


def string_counter(string, char):
   return string.count(char)


def string_counter(string, char):
   return sum(1 for i in string if char == i)


print(string_counter("Hello World!", "o"), 2)
print(string_counter("Do you like Harry Potter?", "?"), 1)
print(string_counter("abcdefg", "a"), 1)