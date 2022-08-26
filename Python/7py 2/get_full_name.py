"""
|--------------------------------------------------------------------------
| FIXME: Get Full Name
|--------------------------------------------------------------------------
|
"""

class Dinglemouse(object):
   def __init__(self, fn, ln):
      self.fn = fn
      self.ln = ln
   def get_full_name(self):
      return f"{self.fn} {self.ln}".strip()


class Dinglemouse(object):
   def __init__(self, first, last):
      self.name = '{} {}'.format(first, last).strip()
   def get_full_name(self):
      return self.name


class Dinglemouse(object):
   def __init__(self, first_name, last_name):
      self.first_name = first_name
      self.last_name = last_name
   def get_full_name(self):
      return ' '.join(filter(lambda x:x,(self.first_name,self.last_name)))


print(Dinglemouse('Clint', 'Eastwood').get_full_name(), 'Clint Eastwood')
print(Dinglemouse('', 'Eastwood').get_full_name(), 'Eastwood')
print(Dinglemouse('Clint', '').get_full_name(), 'Clint')        
print(Dinglemouse('', '').get_full_name(), '')