"""
|--------------------------------------------------------------------------
| Resistor Color Codes
|--------------------------------------------------------------------------
|
"""

def decode_resistor_colors(bands):
   color = {'black':0, 'brown':1, 'red':2, 'orange':3, 'yellow':4, 'green':5, 'blue':6, 'violet':7, 'gray':8, 'white':9, 'silver':10, 'gold':5}
   bands = [color[i] for i in bands.split()]
   ohms = (bands[0] * 10 + bands[1]) * 10 ** bands[2]
   ohms, x = (ohms/1000000.0, 'M') if ohms >= 1000000 else (ohms/1000.0, 'k') if ohms >= 1000 else (ohms, '')
   return "{}{} ohms, {}%".format(int(ohms) if ohms//1 == ohms else ohms, x, bands[3] if len(bands) > 3 else 20)


def decode_resistor_colors(bands):
   codes = {'black':0, 'brown':1, 'red':2, 'orange':3, 'yellow':4, 'green':5, 'blue':6, 'violet':7, 'gray':8, 'white':9, 'silver':10, 'gold':5}
   bands = [codes[band] for band in bands.split()] + [20]
   ohms = (bands[0] * 10 + bands[1]) * 10 ** bands[2]
   p = ''
   for c in 'kM':
      if ohms // 1000: ohms /= 1000; p = c
   return '%s%s ohms, %s%%' % (str(ohms).replace('.0', ''), p, bands[3])


def decode_resistor_colors(bands):
   color = {"black" : 0, "brown" : 1, "red" : 2, "orange" : 3, "yellow" : 4, "green" : 5, "blue" : 6, "violet" : 7, "gray" : 8, "white" : 9}
   tolerance = {"gold" : 5, "silver" : 10, "none" : 20}
   a, b, p, t, *_ = bands.split() + ["none"]
   c = (10 * color[a] + color[b]) * 10 ** color[p]
   r, m = next((c / x, y) for x, y in [(10 ** 6, "M"), (10 ** 3, "k"), (1, "")] if c // x > 0)
   return "{:g}{} ohms, {}%".format(r, m, tolerance[t])


print(decode_resistor_colors("yellow violet black"), "47 ohms, 20%")
print(decode_resistor_colors("yellow violet red gold"), "4.7k ohms, 5%")
print(decode_resistor_colors("brown black green silver"), "1M ohms, 10%")