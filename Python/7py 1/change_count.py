"""
|--------------------------------------------------------------------------
| Loose Change!
|--------------------------------------------------------------------------
|
"""

CHANGE = { "penny": 0.01, "nickel": 0.05, "dime": 0.1, "quarter": 0.25, "dollar": 1.0 }
def change_count(change):
   return "${:.2f}".format(
      sum(map(lambda x: CHANGE[x], change.split()))
   )


def change_count(s):
   return f"${sum(CHANGE[x] for x in s.split()):.2f}"


def change_count(s):
   return f'${sum(map(CHANGE.get, s.split())) :.2f}'


print(change_count('dime penny dollar'), '$1.11')
print(change_count('dime penny nickel'), '$0.16')
print(change_count('quarter quarter'), '$0.50')
print(change_count('dollar penny dollar'), '$2.01')
print(change_count('dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny'), '$10.01')