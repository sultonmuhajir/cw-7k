"""
|--------------------------------------------------------------------------
| Hungarian Vowel Harmony (easy)
|--------------------------------------------------------------------------
|
"""

def dative(word):
   nek = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"]
   nak = ["a", "á", "o", "ó", "u", "ú"]
   x = [i for i in word if i in nek+nak][-1]
   return f"{word}nek" if x in nek else f"{word}nak"


def dative(word):
   for x in reversed(word):
      if x in "aáoóuú": return word + "nak"
      if x in "eéiíöőüű": return word + "nek"


from re import sub
def dative(word):
   return word + ("nak" if sub("[^eéiíöőüűaáoóuú]", "", word)[-1] in u"aáoóuú" else "nek" )


print(dative("ablak"), "ablaknak")
print(dative("szék"), "széknek")
print(dative("otthon"), "otthonnak")
print(dative("tükör"), "tükörnek")