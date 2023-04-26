"""
|--------------------------------------------------------------------------
| sPoNgEbOb MeMe
|--------------------------------------------------------------------------
|
"""

def sponge_meme(s):
   return ''.join([s[i].upper() if i%2==0 else s[i].lower() for i in range(len(s))])


def sponge_meme(sentence):
   res = ""
   for i in range(len(sentence)):
      res += sentence[i].upper() if i % 2 == 0 else sentence[i].lower()
   return res


def sponge_meme( s ):
   return "".join([x.upper(), x.lower()][i % 2] for i, x in enumerate(s))


print(sponge_meme("stop Making spongebob Memes!"), "StOp mAkInG SpOnGeBoB MeMeS!")