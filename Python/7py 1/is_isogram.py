"""
|--------------------------------------------------------------------------
| Isograms
|--------------------------------------------------------------------------
|
"""

def is_isogram(string):
   return len(set(list(string.lower()))) == len(string)


is_isogram = lambda _: len(set(_.lower()))==len(_)


def is_isogram(string):
   string = string.lower()
   for letter in string:
      if string.count(letter) > 1: return False
   return True


def is_isogram(string):
   return all(string.lower().count(i) <= 1 for i in string)


print(is_isogram("Dermatoglyphics"), True )
print(is_isogram("isogram"), True )
print(is_isogram("aba"), False, "same chars may not be adjacent" )
print(is_isogram("moOse"), False, "same chars may not be same case" )
print(is_isogram("isIsogram"), False )
print(is_isogram(""), True, "an empty string is a valid isogram" )