"""
|--------------------------------------------------------------------------
| Count the Characters
|--------------------------------------------------------------------------
|
"""

def count_char(s, c):
   return len(list(filter(lambda i: i == c.lower(), s.lower())))


def count_char(s,c):
   return s.lower().count(c.lower())


def count_char(s,x):
   return sum(1 for i in s if i.lower()==x.lower())


print(count_char("Hello there", "e"), 3)
print(count_char("Hello there", "t"), 1)
print(count_char("Hello there", "h"), 2)
print(count_char("Hello there", "L"), 2)
print(count_char("Hello there", " "), 1)