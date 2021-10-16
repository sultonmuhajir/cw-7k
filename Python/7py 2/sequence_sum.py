"""
|--------------------------------------------------------------------------
| Sum of a sequence
|--------------------------------------------------------------------------
|
"""

def sequence_sum(begin_number, end_number, step):
   res = 0
   for i in range(begin_number, end_number+1, step):
      res += i
   return res


def sequence_sum(start, end, step):
   return sum(range(start, end+1, step))


def sequence_sum(b, e, s):
   k = (e - b) // s
   return (1 + k) * (b + s * k / 2) if b <= e else 0


def sequence_sum(beg, end, step):
   if beg > end:
      return 0
   return beg + sequence_sum(beg+step, end, step)


print(sequence_sum(2, 6, 2), 12)
print(sequence_sum(1, 5, 1), 15)
print(sequence_sum(1, 5, 3), 5)
print(sequence_sum(16, 15, 3), 0)