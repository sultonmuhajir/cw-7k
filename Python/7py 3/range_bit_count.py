"""
|--------------------------------------------------------------------------
| Simple Fun #10: Range Bit Counting
|--------------------------------------------------------------------------
|
"""

def range_bit_count(a, b):
   return len(''.join(''.join([bin(i)[2:] for i in range(a,b+1)]).split('0')))


def range_bit_count(a,b):
   return sum(x.bit_count() for x in range(a,b+1))


def range_bit_count(a, b):
   return sum([sum(int(y) for y in bin(x)[2:] if y == '1') for x in range(a, b+1)])


def range_bit_count(a, b):
   return sum(bin(i).count('1') for i in range(a, b+1))


print(range_bit_count(2,7) , 11)
print(range_bit_count(0,1) , 1)
print(range_bit_count(4,4) , 1)