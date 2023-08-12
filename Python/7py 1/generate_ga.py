"""
|--------------------------------------------------------------------------
| Genetic Algorithm Series - #1 Generate
|--------------------------------------------------------------------------
|
"""

import random
def generate(length):
   return ''.join([str(round(random.random())) for i in range(length)])


def generate(length):
   return ''.join(random.choice('01') for i in range(length))


def generate(length):
   return ''.join([str(random.randint(0, 1)) for i in range(length)])


print(generate(16), 16)
print(generate(32), 32)
print(generate(64), 64)