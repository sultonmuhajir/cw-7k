"""
|--------------------------------------------------------------------------
| Band name generator
|--------------------------------------------------------------------------
|
"""

def band_name_generator(name):
   return f'The {name.capitalize()}' if name[0] != name[-1] else name.capitalize() + name[slice(1, len(name))]


def band_name_generator(name):
   return name.capitalize()+name[1:] if name[0]==name[-1] else 'The '+ name.capitalize()


def band_name_generator(name):
   return['The '+name.title(), name.title()+name[1:]][name[0]==name[-1]]


def band_name_generator(name):
   return ('The '+name, name+name[1:])[name.endswith(name[0])].title()


print(band_name_generator("knife"), "The Knife")
print(band_name_generator("tart"), "Tartart")
print(band_name_generator("sandles"), "Sandlesandles")
print(band_name_generator("bed"), "The Bed")
print(band_name_generator("qq"), "Qqq")