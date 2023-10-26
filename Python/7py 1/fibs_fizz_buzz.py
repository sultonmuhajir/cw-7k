"""
|--------------------------------------------------------------------------
| Fibonacci's FizzBuzz
|--------------------------------------------------------------------------
|
"""

def fibs_fizz_buzz(n):
   x = [1, 1]
   for i in range(2, n): x.append(x[i - 1] + x[i - 2])
   res = ["FizzBuzz" if i % 15 == 0 else "Fizz" if i % 3 == 0 else "Buzz" if i % 5 == 0 else i for i in x]
   return [1] if n == 1 else res


def fibs_fizz_buzz(n):
   r, a, b = [], 0, 1
   for i in range(n):
      r.append("Fizz" * (not b % 3) + "Buzz" * (not b % 5) or b)
      a, b = b, a + b
   return r


def fibs_fizz_buzz(n):
   lst = [1]
   {lst.append(sum(lst[-2:])) for i in range(1,n)}
   return [(i,('Buzz','Fizz')[i%3==0],"FizzBuzz")[(i%3 + i%5==0) + (i%3==0 or i%5==0)] for i in lst]


print(fibs_fizz_buzz(5), [1, 1, 2, "Fizz", "Buzz"])
print(fibs_fizz_buzz(1), [1])