"""
|--------------------------------------------------------------------------
| Bits Battle
|--------------------------------------------------------------------------
|
"""

def bits_battle(numbers):
   odd = len(list(filter(lambda i: i == '1', ''.join(list(map(lambda i: "{0:b}".format(i), (filter(lambda i: i%2!=0, numbers))))))))
   even = len(list(filter(lambda i: i == '0', ''.join(list(map(lambda i: "{0:b}".format(i), (filter(lambda i: i%2==0, numbers))))))))
   return 'odds win' if odd > even else 'evens win' if odd < even else 'tie'


def bits_battle(a):
   odds, evens = sum([bin(i).count('1') for i in a if i % 2]), sum([bin(i).count('0') - 1 for i in a if i % 2 == 0])
   return 'odds win' if odds > evens else 'evens win' if evens > odds else 'tie'


def bits_battle(numbers):
   x = sum(format(n, 'b').count('1') if n % 2 else -format(n, 'b').count('0') for n in numbers if n)
   return ( 'odds win' if x > 0 else 'evens win' if x < 0 else 'tie' )


def bits_battle(numbers):
   odds = [i for i in numbers if i % 2 ]
   evens = [i for i in numbers if i % 2 == 0]
   res = sum(bin(i).count('1') for i in odds) - sum(bin(i)[2:].count('0') for i in evens)
   return 'tie' if res == 0 else ['odds win', 'evens win'][res < 0]


def bits_battle(numbers):
   s = sum(map(lambda x: f'{x:b}'.count('1') if x%2 else -f'{x:b}'.count('0'), numbers))
   return {s>0:'odds win', s==0:'tie', s<0: 'evens win'}.get(True)


print(bits_battle([5, 3, 14]), 'odds win')
print(bits_battle([3, 8, 22, 15, 78]), 'evens win')
print(bits_battle([]), 'tie')
print(bits_battle([1, 13, 16]), 'tie')