"""
|--------------------------------------------------------------------------
| Frequency sequence
|--------------------------------------------------------------------------
|
"""

def freq_seq(s, sep):
   return sep.join(list(map(lambda i: str(len(s.split(i))-1), list(s))))


def freq_seq(s, sep):
   return sep.join([str(s.count(i)) for i in s])


def freq_seq(s, sep):
   return sep.join(map(str, (map(s.count, s))))


print(freq_seq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1')
print(freq_seq('19999999', ':'), '1:7:7:7:7:7:7:7')
print(freq_seq('^^^**$', 'x'), '3x3x3x2x2x1')