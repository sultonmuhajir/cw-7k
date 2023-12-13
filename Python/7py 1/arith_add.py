"""
|--------------------------------------------------------------------------
| Adding words - Part I
|--------------------------------------------------------------------------
|
"""

class Arith:
   def __init__(self, number):
      self.number = number
      self.arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
   def add(self, n):
      return self.arr[self.arr.index(n) + self.arr.index(self.number)]
   

class Arith():
   def __init__(self, w):
      self.val = NUMBERS.index(w)
   def add(self, w):
      return NUMBERS[self.val + NUMBERS.index(w)]


print(Arith("three").add("seven"), "ten")
print(Arith("three").add("eight"), "eleven")
print(Arith("three").add("zero"), "three")