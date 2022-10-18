"""
|--------------------------------------------------------------------------
| Find the lucky numbers
|--------------------------------------------------------------------------
|
"""

def filter_lucky(lst):
   return list(filter(lambda i: '7' in str(i), lst))


def filter_lucky(lst):
   return [i for i in lst if '7' in str(i)]


def filter_lucky(lst):
   return [i for i in lst if str(i).find('7') != -1]


def filter_lucky(lst):
   return [i for i in lst if str(i).count('7') != 0]


print(filter_lucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]), [7, 70, 17])
print(filter_lucky([71, 9907, 69]), [71, 9907])