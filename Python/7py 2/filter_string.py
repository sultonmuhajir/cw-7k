"""
|--------------------------------------------------------------------------
| Filter the number
|--------------------------------------------------------------------------
|
"""

def filter_string(string):
   return int(''.join(list(filter(lambda i: i.isnumeric() , string))))


def filter_string(string):
   return int(filter(str.isdigit, string))


def filter_string(str):
   return int(''.join(ch for ch in str if ch.isdigit()))


from re import findall
def filter_string(string: str) -> int:
   return int("".join(findall("\d", string)))


def filter_string(string):
   return int("".join([num for num in string if num in "0123456789"]))


print(filter_string("123"), 123, 'Just return the numbers')
print(filter_string("a1b2c3"), 123, 'Just return the numbers')
print(filter_string("aa1bb2cc3dd"), 123, 'Just return the numbers')
print(filter_string("aa 112 3dd"), 1123, 'Just return the numbers')
print(filter_string("11bb2c23c3"), 112233, 'Just return the numbers')