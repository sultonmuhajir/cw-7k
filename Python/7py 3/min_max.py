"""
|--------------------------------------------------------------------------
| The highest profit wins!
|--------------------------------------------------------------------------
|
"""

def min_max(lst):
   return [min(lst), max(lst)]


min_max = lambda _: [min(_),max(_)]


def min_max(lst):
   srt = sorted(lst)
   return [srt[0], srt[-1]]


print(min_max([1,2,3,4,5]), [1, 5])
print(min_max([2334454,5]), [5, 2334454])