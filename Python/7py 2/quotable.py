"""
|--------------------------------------------------------------------------
| Thinkful - String Drills: Quotable
|--------------------------------------------------------------------------
|
"""

def quotable(name, quote):
   return f'{name} said: "{quote}"'


def quotable(name, quote):
   return '{} said: "{}"'.format(name, quote)


def quotable(name, quote):
   return name + ' said: ' + '"' + quote + '"'


def quotable(_n, _q):
   return ' said: '.join([_n, f'"{_q}"'])


print(quotable('Grae', 'Practice makes perfect'), 'Grae said: "Practice makes perfect"')
print(quotable('Dan', 'Get back to work, Grae'), 'Dan said: "Get back to work, Grae"')
print(quotable('Alex', 'Python is great fun'), 'Alex said: "Python is great fun"')