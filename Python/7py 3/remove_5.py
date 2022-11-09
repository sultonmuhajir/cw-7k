"""
|--------------------------------------------------------------------------
| Exclamation marks series #5: Remove all exclamation marks from the end of words
|--------------------------------------------------------------------------
|
"""

def remove(s):
   return ' '.join([i.split(i.replace('!', ''))[0]+i.replace('!', '') for i in s.split(' ')])


def remove(s):
   return " ".join(x.rstrip("!") for x in s.split())


from re import sub
def remove(s):
   return sub(r'\b!+', '', s)


print(remove('!!!Hi !!hi!!! !hi') , '!!!Hi !!hi !hi')
print(remove("!!!jmo!! slvtp zsasif! bxiwn"), "!!!jmo slvtp zsasif bxiwn")