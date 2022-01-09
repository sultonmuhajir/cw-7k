"""
|--------------------------------------------------------------------------
| Thinkful - String Drills: Poem formatter
|--------------------------------------------------------------------------
|
"""

def format_poem(poem):
   return poem.replace('. ', '.\n')


def format_poem(poem):
   return ".\n".join(poem.split(". "))


from re import sub
def format_poem(poem):
   return sub(r"(?<=\.)\s", "\n", poem)


print(format_poem('Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.'), 'Beautiful is better than ugly.\nExplicit is better than implicit.\nSimple is better than complex.\nComplex is better than complicated.')
print(format_poem("Flat is better than nested. Sparse is better than dense. Readability counts. Special cases aren't special enough to break the rules."), "Flat is better than nested.\nSparse is better than dense.\nReadability counts.\nSpecial cases aren't special enough to break the rules.")
print(format_poem("Although practicality beats purity. Errors should never pass silently. Unless explicitly silenced. In the face of ambiguity, refuse the temptation to guess."), "Although practicality beats purity.\nErrors should never pass silently.\nUnless explicitly silenced.\nIn the face of ambiguity, refuse the temptation to guess.")