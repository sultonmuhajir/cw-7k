"""
|--------------------------------------------------------------------------
| Which color is the brightest?
|--------------------------------------------------------------------------
|
"""

def x(s):
   return max(int(s[i:i+2], 16) for i in (1, 3, 5))
def brightest(colors):
   return max(colors, key=x)


def brightest(colors):
   return max(colors, key=lambda s:max(s[1:3],s[3:5],s[5:]))


def brightest(colors):
   return sorted(colors, key=lambda c: max(c[1:3], c[3:5], c[5:]), reverse=True)[0]


print(brightest(["#001000", "#000000"]), "#001000")
print(brightest(["#ABCDEF", "#123456"]), "#ABCDEF")
print(brightest(["#00FF00", "#FFFF00"]), "#00FF00")
print(brightest(["#FFFFFF", "#1234FF"]), "#FFFFFF")
print(brightest(["#FFFFFF", "#123456", "#000000"]), "#FFFFFF")