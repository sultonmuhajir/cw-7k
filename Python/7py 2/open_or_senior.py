"""
|--------------------------------------------------------------------------
| Categorize New Member
|--------------------------------------------------------------------------
|
"""

def open_or_senior(data):
   res = []
   for i in range(len(data)):
      res.append("Senior") if data[i][0] >= 55 and data[i][1] > 7 else res.append("Open")
   return res


def open_or_senior(data):
   return ["Senior" if age >= 55 and handicap >= 8 else "Open" for (age, handicap) in data]


def open_or_senior(members):
   return ["Senior" if m[0]>54 and m[1]>7 else "Open" for m in members]


def open_or_senior(data):
   return map(lambda d: 'Senior' if d[0] >= 55 and d[1] > 7 else 'Open', data)


print(open_or_senior([(45, 12),(55,21),(19, -2),(104, 20)]),['Open', 'Senior', 'Open', 'Senior'])
print(open_or_senior([(16, 23),(73,1),(56, 20),(1, -1)]),['Open', 'Open', 'Senior', 'Open'])