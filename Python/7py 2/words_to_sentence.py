"""
|--------------------------------------------------------------------------
| Words to sentence
|--------------------------------------------------------------------------
|
"""

def words_to_sentence(words):
   return ' '.join(words)


def words_to_sentence(words):
   res = ""
   for word in words:
      res += word + ' '
   res = res[:-1]
   return res


words_to_sentence = ' '.join


def words_to_sentence(words):
   x = ''
   for i in words:
      x += i + ' '
   return x.strip(' ')


print(words_to_sentence(['bacon', 'is', 'delicious']), 'bacon is delicious')