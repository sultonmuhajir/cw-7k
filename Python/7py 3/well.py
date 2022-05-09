"""
|--------------------------------------------------------------------------
| Well of Ideas - Harder Version
|--------------------------------------------------------------------------
|
"""

def well(arr):
   res = []
   for i in arr:
      for j in i:
         if type(j) == str:
            res.append(j.lower())
   good = len(list(filter(lambda i: i == 'good', res)))
   return 'I smell a series!' if good > 2 else 'Fail!' if good <= 0 else 'Publish!'


def well(arr):
   counter = str(arr).lower().count('good')
   return ['Fail!','Publish!','I smell a series!'][(counter>0) + (counter>2)]


def well(a):
   c = [i.lower() for j in a for i in j if type(i)==str].count('good')
   return 'Fail!' if c<1 else 'Publish!' if c<3 else 'I smell a series!'
    

print(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!')
print(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!')
print(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!')