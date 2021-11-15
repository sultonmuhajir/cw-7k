"""
|--------------------------------------------------------------------------
| Calculate Meal Total
|--------------------------------------------------------------------------
|
"""

def calculate_total(subtotal, tax, tip):
   return float(format(subtotal + (subtotal * (tax / 100)) + (subtotal * (tip / 100)), ".2f"))


def calculate_total(subtotal, tax, tip):
   return round((1 + (tip + tax) / 100.0) * subtotal, 2)


def calculate_total(subtotal, tax, tip):
   return float("{0:.2f}".format(subtotal + subtotal*(tax+tip)/100))


def calculate_total(subtotal, tax, tip):
   return round(subtotal * ( 1 + tax / 100.0 + tip /100.0), 2)


print(calculate_total(5, 5, 10), 5.75)
print(calculate_total(36.97, 7, 15), 45.10)
print(calculate_total(0.00, 6, 18), 0.00)
print(calculate_total(80.94, 0, 20), 97.13)
print(calculate_total(54.96, 8, 0), 59.36)