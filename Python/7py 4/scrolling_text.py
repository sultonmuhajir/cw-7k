"""
|--------------------------------------------------------------------------
| Scrolling Text
|--------------------------------------------------------------------------
|
"""

def scrolling_text(text):
   res = []
   for i in range(len(text)):
      res.append((text[i:] + text[:i]).upper())
   return res
   

def scrolling_text(text):
   return [(text[i:] + text[:i]).upper() for i in range(len(text))]


def scrolling_text(text):
   return list(map(lambda x: (text[x:]+text[:x]).upper(), range(len(text))))


def scrolling_text(text):
   return [ (text[i:]+text[:i]).upper() for i, e in enumerate(text)]


print(scrolling_text("abc"), ["ABC","BCA","CAB"])