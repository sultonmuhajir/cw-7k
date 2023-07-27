"""
|--------------------------------------------------------------------------
| Sort the Vowels!
|--------------------------------------------------------------------------
|
"""

from re import match
def sort_vowels(s):
   if type(s) == str:
      res = ''
      for i in range(len(s)):
         res += f"{s[i]}|" if match(r'(?i)[^aeiou]*$', s[i]) else f"|{s[i]}"
         if i != len(s) - 1: res += "\n"
      return res
   else:
      return ''


def sort_vowels(s):
   return type(s)==str and '\n'.join(f'|{i}' if i.lower() in 'aeiou' else f'{i}|' for i in s) or ''


def sort_vowels(s):
   try:
      return '\n'.join('|' + i  if i.lower() in 'aioue' else i + '|' for i in s)
   except:
      return ''


def sort_vowels(s):
   return "" if not isinstance(s, str) else "\n".join("|" + x if x in "aeiouAEIOU" else x + "|" for x in s)


print(sort_vowels('CODEWARS'))
print(sort_vowels('Rnd Te5T'))
print(sort_vowels(1337), '')
print(sort_vowels(None), '')