from game.const import *
from game.proto import *
from game.utils import *
from config import *
from std import *
# ----------------------------------
# __pragma__('noalias', 'undefined')
# __pragma__('noalias', 'Infinity')
# __pragma__('noalias', 'clear')
# __pragma__('noalias', 'get')


def loop():
    # Your code here
    creeps = get.friends(st.creep)
    enemy = get.enemy(st.creep)

    for creep in creeps:
        if st.melee(creep):
            put.attack(creep, enemy)
        if st.ranged(creep):
            put.attack(creep, enemy)
        if st.healable(creep):
            damaged = get.friend(lambda obj: obj.hits < obj.hitsMax)
            if damaged:
                put.heal(creep, damaged)
    std.show_usage()
