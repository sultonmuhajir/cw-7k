"""
|--------------------------------------------------------------------------
| Bubblesort Once
|--------------------------------------------------------------------------
|
"""

def bubblesort_once(l):
   res = l[:]
   for i in range(len(res) - 1):
      if res[i] > res[i + 1]: res[i], res[i + 1] = res[i + 1], res[i]
   return res


def bubblesort_once(l, i=0):
   return l if i == len(l)-1 or l == [] else bubblesort_once(l[:i] + [min(l[i:i+2])] + [max(l[i:i+2])] +l[i+2:], i+1) 


def bubblesort_once(lst):
   arr = lst[:]
   for i in range(len(arr)-1):
      arr[i], arr[i+1] = sorted([arr[i], arr[i+1]])
   return arr


print(bubblesort_once([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9])