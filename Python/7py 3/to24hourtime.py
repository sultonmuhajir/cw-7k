"""
|--------------------------------------------------------------------------
| Converting 12-hour time to 24-hour time
|--------------------------------------------------------------------------
|
"""

def to24hourtime(hour, minute, period):
   if period == "am": h = "00" if hour == 12 else "0" + str(hour) if hour < 10 else str(hour)
   else: h = "12" if hour == 12 else str(12 + hour)
   m = "0" + str(minute) if minute < 10 else str(minute)
   return h + m


def to24hourtime(hour, minute, period):
   return f'{hour % 12 + 12 * (period == "pm"):02}{minute:02}'


from datetime import datetime
def to24hourtime(h, m, p):
   return datetime.strptime('%02d%02d%s' % (h, m, p.upper()), '%I%M%p').strftime('%H%M')


print(to24hourtime( 1,  0, 'am'), '0100')
print(to24hourtime( 1,  0, 'pm'), '1300')
print(to24hourtime(12,  0, 'am'), '0000')
print(to24hourtime(12,  0, 'pm'), '1200')
print(to24hourtime( 6, 30, 'am'), '0630')
print(to24hourtime( 9, 45, 'pm'), '2145')