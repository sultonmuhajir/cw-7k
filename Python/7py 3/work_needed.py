"""
|--------------------------------------------------------------------------
| Offload your work!
|--------------------------------------------------------------------------
|
"""

def work_needed(project_minutes, free_lancers):
   x = project_minutes - sum(time[0] * 60 + time[1] for time in free_lancers)
   return "Easy Money!" if x <= 0 else f'I need to work {x // 60} hour(s) and {x % 60} minute(s)'


work_needed = lambda p,f:(lambda t:("Easy Money!","I need to work %d hour(s) and %d minute(s)"%divmod(t,60))[t>0])(p-sum(h*60+m for h,m in f))


def work_needed(mins, fls):
   time = mins - sum ([h*60 + m for h,m in fls])
   h, m = int(time / 60), time%60
   return 'I need to work {} hour(s) and {} minute(s)'.format(h,m) if time > 0 else 'Easy Money!'


print(work_needed(60, [(1,0)]), "Easy Money!")
print(work_needed(60, [(0,0)]), "I need to work 1 hour(s) and 0 minute(s)")
print(work_needed(141, [(1,55), (0,25)]), "I need to work 0 hour(s) and 1 minute(s)")