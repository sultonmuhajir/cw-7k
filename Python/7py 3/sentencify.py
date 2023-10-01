"""
|--------------------------------------------------------------------------
| Pull your words together, man!
|--------------------------------------------------------------------------
|
"""

def sentencify(words):
   return ' '.join(words)[0].upper() + ' '.join(words)[1:] + '.'


def sentencify(w):
   return f"{' '.join(w)[0].upper()}{' '.join(w)[1:]}."


def sentencify(words):
   return ' '.join([words[0][0].capitalize()+words[0][1:]]+words[1:])+'.'


print(sentencify(["yes"]), "Yes.")
print(sentencify(["let", "there", "be", "light"]), "Let there be light.")
print(sentencify(["extra", "stuff\"''", "stays"]), "Extra stuff\"'' stays.")