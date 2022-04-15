"""
|--------------------------------------------------------------------------
| Tail Swap
|--------------------------------------------------------------------------
|
"""

def tail_swap(strings):
   a1, a2 = strings[0].split(':')
   b1, b2 = strings[1].split(':')
   return [f'{a1}:{b2}',f'{b1}:{a2}']


def tail_swap(arr):
   fmt = '{}:{}'.format
   (head, tail), (head_2, tail_2) = (a.split(':') for a in arr)
   return [fmt(head, tail_2), fmt(head_2, tail)]


def tail_swap(strings):
   return '{0}:{3} {2}:{1}'.format(*[j for i in strings for j in i.split(':')]).split()


def tail_swap(lst):
   (a,b),(c,d) = (s.split(':') for s in lst)
   return list(map(':'.join, ((a,d),(c,b))))


print(tail_swap(['abc:123', 'cde:456']), ['abc:456', 'cde:123'])
print(tail_swap(['a:12345', '777:xyz']), ['a:xyz',   '777:12345'])