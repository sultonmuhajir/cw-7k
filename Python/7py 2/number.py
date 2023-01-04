"""
|--------------------------------------------------------------------------
| Number of People in the Bus
|--------------------------------------------------------------------------
|
"""

def number(bus_stops):
   x = 0
   y = 0
   for i in range(len(bus_stops)):
      x += bus_stops[i][0]
      y += bus_stops[i][1]
   return x - y


def number(bus_stops):
   return sum(on - off for on, off in bus_stops)


def number(bus_stops):
   sum=0
   for i in bus_stops:
      sum+=i[0]-i[1]
   return sum


def number(bus_stops):
   return sum([item[0] - item[1] for item in bus_stops]) 


def number(bus_stops):
   return sum(map(lambda x: x[0]-x[1],bus_stops))


print(number([[10,0],[3,5],[5,8]]),5)
print(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17)
print(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21)