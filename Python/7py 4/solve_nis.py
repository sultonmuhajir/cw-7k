"""
|--------------------------------------------------------------------------
| Numbers in strings
|--------------------------------------------------------------------------
|
"""

from re import findall
def solve(s):
   return max(list(map(lambda i: int(i), findall(r'[0-9]+', s))))


def solve(s):
   return max(map(int, findall(r'\d+', s)))


def solve(s):
   return max(map(int,"".join(" " if x.isalpha() else x for x in s).split()))


def solve(s):
   return max(int(n) for n in findall(r'\d+',s))


print(solve('gh12cdy695m1'),695)
print(solve('2ti9iei7qhr5'),9)
print(solve('vih61w8oohj5'),61)
print(solve('f7g42g16hcu5'),42)
print(solve('lu1j8qbbb85'),85)