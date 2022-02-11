"""
|--------------------------------------------------------------------------
| An English Twist on a Japanese Classic
|--------------------------------------------------------------------------
|
"""

def game(words):
   res = []
   for i in range(len(words)):
      x = words[i-1]
      if words[i] != '':
         if i == 0 or words[i][0] == x[-1]:
            res.append(words[i])
         else:
            break
      else:
         break
   return res


def game(words):
   if not words or not words[0]:
      return []
   return [words[0]] + (game(words[1:]) if len(words) > 1 and words[1] and words[0][-1] == words[1][0] else [])


def game(words):
   if words.count('') == len(words): return []
   for i in range(len(words)-1):
      if (words[i+1] == "") or (words[i]=="") or words[i][-1] != words[i+1][0]:
         return words[:i+1]
   return words


def game(words):
   for i in range(len(words)-1):
      if words[i] == '':
         return words[:i]
      if words[i][-1:] != words[i+1][:1]:
         return words[:i+1]
   return words


print(game(["dog", "goose", "elephant", "tiger", "rhino", "orc", "cat"]), ["dog", "goose", "elephant", "tiger", "rhino", "orc", "cat"])
print(game(["dog", "goose", "tiger", "cat", "elephant", "rhino", "orc"]), ["dog", "goose"])
print(game([]), [])
print(game(["", "", "", "", "", ""]), [])
print(game(["ab", "bc", "", "de", "", "", ""]), ["ab", "bc"])