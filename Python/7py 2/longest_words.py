"""
|--------------------------------------------------------------------------
| Thinkful - List Drills: Longest word
|--------------------------------------------------------------------------
|
"""

def longest(words):
   return max([len(i) for i in words])


def longest(words):
   return max(map(len, words))


def longest(words):
   return len(max(words, key=len))


print(longest(['simple', 'is', 'better', 'than', 'complex']), 7)
print(longest(['explicit', 'is', 'better', 'than', 'implicit']), 8)
print(longest(['beautiful', 'is', 'better', 'than', 'ugly']), 9)