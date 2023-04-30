"""
|--------------------------------------------------------------------------
| Numbers to Letters
|--------------------------------------------------------------------------
|
"""

def switcher(arr):
   letter = " zyxwvutsrqponmlkjihgfedcba!? "
   return ''.join([letter[int(i)] for i in arr])


def switcher(arr):
   return ''.join({'27':'!','28':'?','29':' '}.get(i, chr(123 - int(i))) for i in arr)


def switcher(arr):
   return ''.join({'27':'!','28':'?','29':' '}.get(e, chr(abs(int(e)-26)+97)) for e in arr)


print(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars')
print(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw')
print(switcher(['4', '24']), 'wc')
print(switcher(['12']), 'o')