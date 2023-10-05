"""
|--------------------------------------------------------------------------
| Baby shark lyrics generator
|--------------------------------------------------------------------------
|
"""

def baby_shark_lyrics():
   x = [
      "Baby shark",
      "Mommy shark",
      "Daddy shark",
      "Grandma shark",
      "Grandpa shark",
      "Let's go hunt",
   ]
   return ''.join([f"{i},{' doo'*6}\n"*3 + f"{i}!\n" for i in x]) + "Run away,…"


def baby_shark_lyrics():
   arr = ['Baby shark','Mommy shark','Daddy shark','Grandma shark','Grandpa shark',"Let's go hunt"]
   out = ''
   doo =' doo' * 6
   for i in arr:
      out += (i+','+doo+'\n')*3 + (i+'!\n')
   return out + 'Run away,…'


def baby_shark_lyrics():
   a = "{}," +  " doo" * 6 + '\n'
   b = [x + ' shark' for x in ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa']] + ["Let's go hunt"]
   return ''.join([a.format(x)*3 + x + '!\n' for x in b]) + 'Run away,…'


print(baby_shark_lyrics())