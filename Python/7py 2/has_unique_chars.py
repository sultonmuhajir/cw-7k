"""
|--------------------------------------------------------------------------
| All unique
|--------------------------------------------------------------------------
|
"""

def has_unique_chars(string):
   unq = []
   [unq.append(i) for i in string if i not in unq]
   return string == ''.join(unq)


def has_unique_chars(string):
   return len(string) == len(set(string))


def has_unique_chars(string):
   return list(dict.fromkeys(string)) == list(string)


print(has_unique_chars("abcdef"), True)
print(has_unique_chars("++-"), False)
print(has_unique_chars("  nAa"), False)