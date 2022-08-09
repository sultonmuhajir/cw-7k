"""
|--------------------------------------------------------------------------
| Cryptanalysis Word Patterns
|--------------------------------------------------------------------------
|
"""

def word_pattern(word):
   word = word.lower()
   unq = []
   for char in word:
      if char not in unq: unq.append(char)
   res = []
   for i in word:
      res.append(str(unq.index(i)))
   return '.'.join(res)


def word_pattern(word):
   low = word.lower()
   uniq = sorted(set(low), key=low.index)
   return ".".join(str(uniq.index(char)) for char in low)


def word_pattern(word):
   word = word.lower()
   d = {v:str(i) for i,v in enumerate(list(dict.fromkeys(word).keys()))}
   return '.'.join(d[c] for c in word)
   

print(word_pattern("hello"), "0.1.2.2.3")
print(word_pattern("heLlo"), "0.1.2.2.3")
print(word_pattern("helLo"), "0.1.2.2.3")
print(word_pattern("Hippopotomonstrosesquippedaliophobia"), "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13")