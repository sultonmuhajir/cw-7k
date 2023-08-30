"""
|--------------------------------------------------------------------------
| Array comparator
|--------------------------------------------------------------------------
|
"""

def match_arrays(v, r):
   return len([i for i in v if i in r])


def match_arrays(v, r):
   count = 0
   for item in v:
      if item in r: count += 1
   return count


def match_arrays(v, r):
   return sum(x in r for x in v)


print(match_arrays(['Perl','Closure','JavaScript'],['Go', 'C++','Erlang']),0)
print(match_arrays(['Erlang','JavaScript'],['Go', 'C++','Python']),0)
print(match_arrays([True,3,9,11,15],[True,3,11]),3)