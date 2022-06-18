"""
|--------------------------------------------------------------------------
| Printer Errors
|--------------------------------------------------------------------------
|
"""

def printer_error(s):
   x = list('abcdefghijklm')
   return f'{len([i for i in s if i not in x])}/{len(s)}'


def printer_error(s):
   return "{}/{}".format(len([x for x in s if x not in "abcdefghijklm"]), len(s))


def printer_error(s):
   return '{}/{}'.format(sum(color > 'm' for color in s), len(s))


def printer_error(s):
   return "%s/%s" % (len(s.translate(None, "abcdefghijklm")), len(s))
   

print(printer_error('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'), "3/56")