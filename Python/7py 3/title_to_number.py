"""
|--------------------------------------------------------------------------
| Excel sheet column numbers
|--------------------------------------------------------------------------
|
"""

def title_to_number(title):
   res = 0
   for char in title:
      res = res * 26 + (ord(char) - ord('A') + 1)
   return res


def title_to_number(title):
   return sum((ord(char) - 64) * 26 ** i for i, char in enumerate(title[::-1]))


from functools import reduce
def title_to_number(s):
   return reduce(lambda a,c: a*26+ord(c)-64, s, 0)


print(title_to_number('A'),1)
print(title_to_number('Z'),26)
print(title_to_number('AA'),27)
print(title_to_number('AZ'),52)
print(title_to_number('BA'),53)
print(title_to_number('CODEWARS'),28779382963)