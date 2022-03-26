"""
|--------------------------------------------------------------------------
| Sum of integers in string
|--------------------------------------------------------------------------
|
"""

from re import match, findall
def sum_of_integers_in_string(s):
   res = ''
   for i in range(len(s)):
      res += s[i] if match(r'^[0-9]+$', s[i]) else '-'
   integer = list(filter(lambda i: i != '', res.split('-')))
   return sum(list(map(lambda i: int(i), integer)))


def sum_of_integers_in_string(s):
   return sum(map(int, findall("\d+", s)))


def sum_of_integers_in_string(s):
   return sum(int(w) for w in ''.join(c if c.isdigit() else ' ' for c in s).split())


def sum_of_integers_in_string(s):
   return sum(int(i) for i in findall('\d+', s))


print(sum_of_integers_in_string("C4t5 are 4m4z1ng."), 18)
print(sum_of_integers_in_string("Dogs are our best friends"), 0)
print(sum_of_integers_in_string("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"), 3635)