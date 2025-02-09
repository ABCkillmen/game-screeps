# std.py

## PyScreeps-Arena Standard Library
Contains static classes and a utils module:</br>

| class   | static | description                                  |
|---------|--------|----------------------------------------------|
| `std`   | ✔      | std functions. like info, warn ...           |
| `st`    | ✔      | Screeps Typing. set of `function(obj) -> bool` |
| `put`   | ✔      | standard output. contain set of commands.    |
| `get`   | ✔      | standard input. get data of the current game. |
| `ut` | X      | Utils, contains some expansion classes.      |

## \> std

<details>
<summary><b>std.param_assert(params, names, shoulds, errs)</b>

检查参数是否符合要求，不符合则抛出异常</summary>

| param | type | description |
|-------|------|-------------|
| params | list[object] | 参数列表 |
| names | list[str] | 参数名列表 |
| shoulds | list[callable] | 期望的参数检查列表 |
| errs | list[str] | 对应的错误信息列表 |
| __raise | bool | 是否抛出异常(默认True) |

| return | type | description |
|--------|------|-------------|
| None | None | 无返回值 |
Example:
```python
# > define ASSERT 1
def func_add(a, b):
    # > if ASSERT
    std.param_assert(
        [a, b],      # 参数列表
        ['a', 'b'],  # 参数名列表
        [lambda x: isinstance(x, int), lambda x: isinstance(x, int)],  # 期望的参数检查列表
        ['a is not int', 'b is not int']  # 对应的错误信息列表
    )
    # > endif
    return a + b
```

</details><details>
<summary><b>std.combo_filter(filter_composite)</b>

按照指定逻辑将 '组合容器函数表达式'转换为一个函数</summary>

| param | type                             | description |
|-------|----------------------------------|-------------|
| filter_composite | tuple \| list \| set \| callable | 由tuple、list和set组成的过滤器结构(最小单元是callable) |

| return | type | description |
|--------|------|-------------|
| callable | callable | 一个新的可以表达输入表达式的函数 |

Example:
```python
# 例如我们判断一个creep对象是否既能近战攻击又能远程攻击
# 我们可以使用combo_filter来实现
new_filter = std.combo_filter(
    # st.melee(obj) -> bool, st.ranged(obj) -> bool
    (st.melee, st.ranged)  # tuple表示and关系，即melee & ranged
)

attack_and_ranged_attack = new_filter(creep)

# st是一组形如function(obj)->bool函数组成的静态类，稍后会详细介绍
```

</details><details>
<summary><b>日志函数组</b>

(log, info, warn, error)</summary>

| param | type | description           |
|-------|------|-----------------------|
| caller_name | str | 调用者名称, 主要是便于定位信息位置和来源 |
| *args | str | 实际需要输出的信息             |

| return | type | description |
|--------|------|-------------|
| None | None | 无返回值 |

| function | description                                   |
|----------|-----------------------------------------------|
| log | 输出日志信息，一般用于debug和一些不太重要的信息。输出中的'log'会用黄色来显示   |
| info | 输出通用信息，一般用于输出一些标识性的信息。输出中的'info'会用绿底白字来显示     |
| warn | 输出警告信息，一般用于输出一些可能会出现问题的信息。输出中的'warn'会用黄底白字来显示 |
| error | 输出错误信息，该函数会抛出异常。                              |

</details><details>
<summary><b>std.show_usage()</b>

显示当前硬件资源的使用情况，包括CPU使用情况和内存使用情况。建议在loop函数的最后调用。</summary>
```python
def loop():
    # do something
    std.show_usage()
```
</details>

## \> st
包含一组形如`function(obj) -> bool`的函数，用于判断对象的类型</br>
总的来说，可以分为4大类：

```python
creeps = getObjectsByPrototype(Creep) -> js list
creeps = get.creeps() -> py list

# get提供了pyscreeps-arena获取绝大多数游戏内基础信息的方法, 稍后会详细介绍
```
<details>
<summary><b>Js基本类型判断:</b></summary>

| function | description |
|----------|-------------|
| st.jnumber(obj) | 判断obj是否为js中的number类型 |
| st.jstring(obj) | 判断obj是否为js中的string类型 |
| st.jbool(obj) | 判断obj是否为js中的boolean类型 |
| st.jlist(obj) | 判断obj是否为js中的array类型 |
| st.jdict(obj) | 判断obj是否为js中的dict类型(等价于jlist) |

</details>
<br><details>
<summary><b>Py基本类型判断:</b></summary>

| function | description |
|----------|-------------|
| st.tuple(obj) | 判断obj是否为python中的tuple类型 |
| st.list(obj) | 判断obj是否为python中的list类型 |
| st.dict(obj) | 判断obj是否为python中的dict类型 |
| st.set(obj) | 判断obj是否为python中的set类型 |
| st.str(obj) | 判断obj是否为python中的str类型 |
| st.int(obj) | 判断obj是否为python中的int类型 |
| st.float(obj) | 判断obj是否为python中的float类型 |
| st.bool(obj) | 判断obj是否为python中的bool类型 |


</details>
<br>
<details>
<summary><b>基本游戏类型判断:</b></summary>

| function | description                  |
|----------|------------------------------|
| st.site(obj) | 判断obj是否为ConstructionSite类型   |
| st.creep(obj) | 判断obj是否为Creep类型              |
| st.gobject(obj) | 判断obj是否为GameObject类型         |
| st.ostructure(obj) | 判断obj是否为OwnedStructure类型     |
| st.resource(obj) | 判断obj是否为Resource类型           |
| st.source(obj) | 判断obj是否为Source类型             |
| st.store(obj) | 判断obj是否为Store类型              |
| st.structure(obj) | 判断obj是否为Structure类型          |
| st.box(obj) | 判断obj是否为StructureContainer类型 |
| st.extension(obj) | 判断obj是否为StructureExtension类型 |
| st.rampart(obj) | 判断obj是否为StructureRampart类型   |
| st.road(obj) | 判断obj是否为StructureRoad类型      |
| st.spawn(obj) | 判断obj是否为StructureSpawn类型     |
| st.tower(obj) | 判断obj是否为StructureTower类型     |
| st.wall(obj) | 判断obj是否为StructureWall类型       |
| st.spawning(obj) | 判断obj是否为Spawning类型           |
| st.flag(obj) | 判断obj是否为Flag类型               |

</details>
<br>
<details>
<summary><b>对象能力判断:</b></summary>

| function | description                  |
|----------|------------------------------|
| st.movable(obj) | 判断obj是否具有移动的能力               |
| st.atkable(obj) | 判断obj是否具有攻击的能力               |
| st.melee(obj) | 判断obj是否具有近战攻击的能力             |
| st.ranged(obj) | 判断obj是否具有远程攻击的能力             |
| st.healable(obj) | 判断obj是否具有治疗别人的能力             |
| st.hitable(obj) | 判断obj是否可以被攻击(不论敌我)           |
| st.workable(obj) | 判断obj是否具有建造和收获资源的能力          |
| st.storable(obj) | 判断obj是否具有存储资源的能力             |
| st.energetic(obj) | 判断obj是否含有能量(energy)          |
| st.damaged(obj) | 判断obj是否受到了伤害(hits < maxHits) |
| st.my(obj) | 判断obj是否为我方单位                 |
| st.friend(obj) | 判断obj是否为友方单位(目前同st.my)       |
| st.enemy(obj) | 判断obj是否为敌方单位(目前同not st.my)   |

</details>

## \> put
<details>
<summary><b>Unit基础命令集</b></summary>
<details>
<summary><b>put.move(unit, to, options = None)</b>

命令Creep移动到目标点或向某个方向移动</summary>

| param | type                             | description            |
|-------|----------------------------------|------------------------|
| unit | list \| (st.friend & st.movable) | 一个或多个可移动的友方单位          |
| to | st.point \| int                  | 一个目标点或是一个方向            |
| options | UsrObject                        | 寻路选项(只在to为st.point时有效) |
| __assert | bool                             | 是否进行参数检查               |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| list[int] | 成功返回OK(0)，否则返回错误码(<0)。如果unit为list，那么返回每个unit的结果的list |

```python
creep = get.creep(st.friend)  # 获取一个友方creep
spawn = get.spawn(st.friend)  # 获取一个友方spawn
put.move(creep, LEFT)  # 让creep向左移动
put.move(creep, spawn)  # 让creep移动到spawn所在位置

# 无视沼泽赶路(只是寻路逻辑无视沼泽，实际还是会受到沼泽的影响)
op = UsrObject()
op.swampCost = op.plainCost  # 沼泽的消耗和平原一样，即无视沼泽
put.move(creep, spawn, op)  # 让creep移动到spawn所在位置

# 如果你对你的代码很有信心，可以关闭参数检查。(一般不推荐使用者这么写)
put.move(creep, spawn, None, False)  # 注意，kwargs不工作，只能按顺序传参
# 如果场上不存在友方creep，且您关闭了检查，那么可能会抛出一些奇奇怪怪的异常
```
</details><details>
<summary><b>put.attack(unit, target, move = True)</b>

命令Tower或Creep攻击敌方目标</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| unit | list \| (st.friend & st.atkable) | 一个或多个可攻击的友方单位           |
| target | st.enemy & st.hitable           | 一个敌方可受击的单位              |
| move | bool \| UsrObject                | 是否移动到目标位置(默认True)或是移动选项 |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                                                                                                                     |
|--------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 运行结果   | UsrObject \| list[UsrObject] | 返回UsrObject，每个UsrObject最多能包含melee, ranged, move这三个属性，分别表示是否进行近战攻击、远程攻击和移动，每个属性成功返回Ok(0), 失败返回错误码，未执行则为undefined。如果unit为list，那么返回每个unit的结果的list. |

```python
creep = get.creep((st.friend, st.atkable))  # 获取一个友方可攻击的creep
enemies = get.creeps(st.enemy)  # 获取所有敌方creep
closest_enemy = get.closest(creep, enemies)  # 获取离creep最近的敌方creep

put.attack(creep, closest_enemy)  # 让creep攻击最近的敌方creep
```

</details><details>
<summary><b>put.heal(unit, target, move = True)</b>

命令Tower或Creep治疗目标单位</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| unit | list \| (st.friend & st.healable) | 一个或多个友方的具有治疗能力的单位           |
| target | st.friend & st.creep            | 一个友方的creep         |
| move | bool \| UsrObject                | 是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线) |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | UsrObject \| list[UsrObject] | 返回UsrObject，每个UsrObject最多能包含heal, ranged, move这三个属性，分别表示是否进行近距离治疗、远程治疗和移动，每个属性成功返回Ok(0), 失败返回错误码，未执行则为undefined。如果unit为list，那么返回每个unit的结果的list. |
```python
creep = get.creep((st.friend, st.healable))  # 获取一个友方可治疗的creep
damaged_creep = get.creep((st.friend, st.damaged))  # 获取一个友方受伤的creep

put.heal(creep, damaged_creep)  # 让creep治疗受伤的creep
```

</details><details>
<summary><b>put.fetch(unit, target, resource_type = RESOURCE_ENERGY, amount = None, move = True)</b>

命令单位从目标处取出资源</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| unit | list \| (st.friend & st.storable) | 一个或多个友方的可携带资源的单位           |
| target | st.storable \| st.resource       | 一个可存储的目标或掉落的资源          |
| resource_type | int                      | 资源类型, 默认RESOURCE_ENERGY |
| amount | int \| None                     | 资源数量，如果没有指定，则取出所有资源 |
| move | bool \| UsrObject                | 是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线) |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| list[int] | 成功返回OK(0)，否则返回错误码(<0)。如果unit为list，那么返回每个unit的结果的list |

```python
creep = get.creep((st.friend, st.storable))  # 获取一个友方可携带资源的creep
dropped_energy = get.resource()  # 获取掉落的能量
energy_box = get.box(st.energetic)  # 获取一个有能量的箱子, 也可以写成get.box({st.empty})

put.fetch(creep, dropped_energy)  # 让creep取出掉落的能量
# put.fetch(creep, energy_box)  # 让creep取出箱子里的能量
```

```python
worker = get.creep(lambda c: c.my and c.name == 'worker')  # 获取己方的'worker'
carrier = get.creep(lambda c: c.my and c.name == 'carrier')  # 获取己方的'carrier'

if get.energy(worker) == 0:
    put.fetch(worker, carrier)  # 让worker取出carrier携带的能量

```

</details><details>
<summary><b>put.deposit(unit, target, resource_type = RESOURCE_ENERGY, amount = None, move = True)</b>

命令单位将身上的资源放置于目标处</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| unit | list \| (st.friend & st.storable) | 一个或多个友方的可携带资源的单位           |
| target | st.storable \| None             | 一个可存储的目标，如果为None，单位会直接丢弃资源到原地 |
| resource_type | int                      | 资源类型, 默认RESOURCE_ENERGY |
| amount | int \| None                     | 资源数量，如果没有指定，则转移所有资源 |
| move | bool \| UsrObject                | 是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线) |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| list[int] | 成功返回OK(0)，否则返回错误码(<0)。如果unit为list，那么返回每个unit的结果的list |

```python  
creep = get.creep((st.friend, st.storable))  # 获取一个友方可携带资源的creep
spawn = get.spawn(st.friend)  # 获取一个友方spawn

put.deposit(creep, spawn)  # 让creep把资源放到spawn
```

```python
worker = get.creep(lambda c: c.my and c.name == 'worker')  # 获取己方的'worker'
carrier = get.creep(lambda c: c.my and c.name == 'carrier')  # 获取己方的'carrier'

if get.energy(worker) == 0:
    put.deposit(carrier, worker)  # 让carrier把资源放到worker
```

</details><details>
<summary><b>put.build(unit, site, move = True)</b>

命令单位建造建筑</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| unit | list \| (st.friend & st.workable) | 一个或多个友方的可工作单位           |
| site | st.site                         | 一个ConstructionSite实例对象 |
| move | bool \| UsrObject                | 是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线) |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| list[int] | 成功返回OK(0)，否则返回错误码(<0)。如果unit为list，那么返回每个unit的结果的list |

```python
creep = get.creep((st.friend, st.workable))  # 获取一个友方可工作的creep
box = get.box({st.empty})  # 获取一个非空箱子
site = get.site()  # 获取一个ConstructionSite

if get.energy(creep) == 0:
    put.fetch(creep, box)  # 让creep取出箱子里的能量
elif site:
    put.build(creep, site)  # 让creep建造site
```

</details><details>
<summary><b>put.harvest(unit, target, move = True)</b>

命令单位采集资源</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| unit | list \| (st.friend & st.workable) | 一个友方的可工作单位           |
| target | st.source                      | 一个资源点               |
| move | bool \| UsrObject                | 是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线) |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| list[int] | 成功返回OK(0)，否则返回错误码(<0)。如果unit为list，那么返回每个unit的结果的list |

```python
# 让worker采集资源(装满了就回家，否则就继续采集)
worker = get.friend(lambda obj: obj.name == 'worker')
spawn = get.spawn(st.friend)
source = get.source()
if get.energy(worker, True) == 100:
    put.deposit(worker, spawn, RESOURCE_ENERGY)
else:
    put.harvest(worker, source)
```
</details>
</details>
<br>
<details>
<summary><b>Unit扩展命令集</b></summary>

<details>
<summary><b>put.escape(unit, target, options = None)</b>

命令Creep远离目标</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| unit | list \| (st.friend & st.movable) | 一个或多个可移动的友方单位           |
| target | st.point                     | 一个目标点               |
| options | UsrObject                        | 寻路选项(只在to为st.point时有效) |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| list[int] | 成功返回OK(0)，否则返回错误码(<0)。如果unit为list，那么返回每个unit的结果的list |

```python
# 让worker远离最近的敌人
worker = get.friend(lambda obj: obj.name == 'worker')
enemy = get.closest(worker, get.enemies())
if enemy and get.distance(worker, enemy) <= 8:
    put.escape(worker, enemy)
```

</details>
<details>
<summary><b>put.intermit(unit, target, resource_type = RESOURCE_ENERGY, options = None)</b>

断断续续地搬运资源到目标</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| unit | list \| (st.friend & st.storable & st.movable) | 一个友方的可移动的可存储资源的单位           |
| target | st.storable                    | 一个可存储的目标          |
| resource_type | int                      | 资源类型, 默认RESOURCE_ENERGY |
| options | UsrObject                        | 寻路选项(只在to为st.point时有效) |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| list[int] | 成功搬运完毕或是无资源可搬运，返回DONE(1); 搬运中返回OK(0)或是错误码(<0)。如果unit为list，那么返回每个unit的结果的list |

```python
# 将身上或地上的资源搬运回家(确保身上或地上有资源)
carrier = get.friend(lambda obj: obj.name == 'carrier')
spawn = get.spawn(st.friend)
put.intermit(carrier, spawn)
```

</details>
<details>
<summary><b>put.follow(unit, target, distance, options = None, move = True)</b>

命令一个或多个单位跟随目标</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| unit | list \| (st.friend & st.movable) | 一个或多个可移动的友方单位           |
| target | st.movable                     | 一个可移动的目标          |
| distance | int \| tuple                  | 距离最大或最小值, tuple: 距离范围, 只在友方时有效 |
| options | UsrObject                        | 寻路选项(只在to为st.point时有效) |
| move | bool \| UsrObject                | 是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线) |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| list[int] | 成功返回OK(0)，否则返回错误码(<0)。如果unit为list，那么返回每个unit的结果的list |

```python
# 让warriors跟随leader，距离不超过5。leader不考虑距离超过20的warrior。
leader = get.friend(lambda obj: obj.name == 'leader')
warriors = get.friends(lambda obj: obj.name == 'warrior')
put.follow(warriors, leader, (5, 20))
```
</details>
<details>
<summary><b>put.carry(unit, src, dst, resource_type = RESOURCE_ENERGY, options = None, intermit = False)</b>

命令单位从src处搬运资源到dst处</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| unit | list \| (st.friend & st.storable & st.movable) | 一个友方的可携带资源的可移动单位           |
| src | st.storable                     | 从哪里取得资源           |
| dst | st.storable                     | 被搬运资源的目标容器      |
| resource_type | int                      | 资源类型, 默认RESOURCE_ENERGY |
| options | UsrObject                        | 寻路选项(只在to为st.point时有效) |
| intermit | bool                         | 是否断断续续地搬运资源          |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| list[int] | 若intermit=False，成功返回OK(0)，否则返回错误码(<0); 若intermit=True，则在搬运完毕或是无资源可搬运时，返回DONE(1)，其余和前者相同。如果unit为list，那么返回每个unit的结果的list |

```python
# 将身上的资源搬运回家(确保身上有资源)
carrier = get.friend(lambda obj: obj.name == 'carrier')
spawn = get.spawn(st.friend)
box = get.closest(carrier, get.boxes(st.energetic))
put.carry(carrier, box, spawn)
```
</details></details>
<br>
<details>
<summary><b>put.site(x, y_type, building_type = None)</b>

在指定位置创建新的 ConstructionSite</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| x | int \| float \| Position          | x坐标或Position对象      |
| y_type | int \| float \| type           | y坐标或建筑类型          |
| building_type | type \| None              | 建筑类型(默认None)       |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| ConstructionSite | 如果成功(创建完成)，返回创建的ConstructionSite对象; 否则返回错误码(<0) |

```python
res = put.site(10, 10, StructureContainer)
if st.site(res):
    site = res
```

</details><details>
<summary><b>put.create(spawn, recipe, name = None)</b>

命令spawn按照指定的配方生产一个creep</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| spawn | st.friend & st.spawn             | 一个友方的Spawn           |
| recipe | list[str]                      | 一个creep的配方, 一般用const下的MOVE, CARRY, WORK等常量 |
| name | str \| None                     | 一个creep的名字(默认为None), 这样创建的creep会带有.name属性 |
| __assert | bool                         | 是否进行参数检查                |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| 运行结果   | int \| object     | 如果成功(生产完成)，返回创建的creep对象; 否则返回错误码(<0) |

```python
# 生成一个名为'worker'的creep
spawn = get.spawn(st.friend)
worker = get.friend(lambda obj: obj.name == 'worker')
if not worker:
    put.create(spawn, [CARRY, MOVE, WORK], 'worker')
```

</details>

## \> get
提供一组获取游戏中的数据的函数。
<details>
<summary><b>无参数函数集</b></summary>

| function  | return | description |
|-----------|--------|-------------|
| get.cpu       | int | 返回当前 tick 中经过的 CPU 壁钟时间（以纳秒为单位） |
| get.heap      | HeapInfo | 使用此方法获取虚拟机的堆统计信息。 |
| get.ticks     | int | 返回从当前游戏开始经过的 tick 数 |
| get.arena | arenaInfo | 获取arenaInfo对象 |
</details>
<br>
<details>
<summary><b>游戏对象获取函数集</b></summary>
最主要的一组函数，只有一个参数`filter_fn`, 返回一个或一组游戏中的对象。包括creep、spawn、source等等。

| param | type | description        |
|-------|------|--------------------|
| filter_fn | list \| tuple \| set \| callable \| None | 条件容器函数表达式(默认值None) |

如果传入None(默认值)，那么将不会进行筛选。也可以直接传入组合表达式，如`(st.friend, st.creep)`。

| function | function(复数形式) | return             | return(复数形式) | description         |
|----------|---------------------|--------------------|------------------|---------------------|
| get.creep | get.creeps | Creep \| None      | list[Creep] | 获取一个或多个特定条件的creep对象 |
| get.friend | get.friends | GameObject \| None | list[GameObject] | 获取一个或多个特定条件的友方对象 |
| get.enemy | get.enemies | GameObject \| None         | list[GameObject] | 获取一个或多个特定条件的敌方对象 |
| get.spawn | get.spawns | StructureSpawn \| None     | list[StructureSpawn] | 获取一个或多个特定条件的spawn对象 |
| get.structure | get.structures | Structure \| None          | list[Structure] | 获取一个或多个特定条件的structure对象 |
| get.source | get.sources | Source \| None             | list[Source] | 获取一个或多个特定条件的source对象 |
| get.site | get.sites | ConstructionSite \| None       | list[ConstructionSite] | 获取一个或多个特定条件的site对象 |
| get.resource | get.resources | Resource \| None           | list[Resource] | 获取一个或多个特定条件的resource对象 |
| get.tower | get.towers | StructureTower \| None        | list[StructureTower] | 获取一个或多个特定条件的tower对象 |
| get.wall | get.walls | StructureWall \| None         | list[StructureWall] | 获取一个或多个特定条件的wall对象 |
| get.rampart | get.ramparts | StructureRampart \| None      | list[StructureRampart] | 获取一个或多个特定条件的rampart对象 |
| get.extension | get.extensions | StructureExtension \| None    | list[StructureExtension] | 获取一个或多个特定条件的extension对象 |
| get.box | get.boxes | StructureContainer \| None      | list[StructureContainer] | 获取一个或多个特定条件的box对象 |
| get.road | get.roads | StructureRoad \| None        | list[StructureRoad] | 获取一个或多个特定条件的road对象 |
| get.storage | get.storages | GameObject \| None          | list[GameObject] | 获取一个或多个特定条件的storage对象 |
| get.flag | get.flags | Flag \| None              | list[Flag] | 获取一个或多个特定条件的flag对象 |
| get.score_controller | get.score_controllers | ScoreController \| None | list[ScoreController] | 获取一个或多个特定条件的score_controller对象 |

</details>
<br>
<details>
<summary><b>己方行动检测函数集</b></summary>

这一组函数用于判断单位是否在当前的tick是否被下达过某种行动命令。这些函数只能判断由put下达的行动命令，并且新的行动命令会覆盖旧的行动命令。

| param | type | description                                                 |
|-------|------|-------------------------------------------------------------|
| unit | st.creep | 一个Creep对象                                                   |
| ticks_offset | int | 偏移的ticks数, 默认为0. 比如传入-1表示上一tick(如果当前tick下达过对应命令，那么会覆盖之前的记录) |

| return | type | description                         |
|--------|------|-------------------------------------|
| bool | bool | 如果对应的tick下达过对应命令，返回True，否则返回False |

| function | description          |
|----------|----------------------|
| get.moved | 判断单位对应tick是否被下达过移动命令 |
| get.attacked | 判断单位对应tick是否被下达过攻击命令 |
| get.meleed | 判断单位对应tick是否被下达过近战攻击命令 |
| get.ranged | 判断单位对应tick是否被下达过远程攻击命令 |
| get.healed | 判断单位对应tick是否被下达过治疗命令 |
| get.fetched | 判断单位对应tick是否被下达过拿取命令 |
| get.deposited | 判断单位对应tick是否被下达过放置命令 |
| get.built | 判断单位对应tick是否被下达过建造命令 |
| get.intermited | 判断单位对应tick是否被下达过intermit命令 |

</details>
<br>
<details>
<summary><b>工具函数集</b></summary>

<details>
<summary><b>get.closest(obj, objs, filter_fn = None)</b>

返回距离最近的对象</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| obj | st.point | 一个坐标点           |
| objs | list[st.point] | 一个坐标点列表           |
| filter_fn | list \| tuple \| set \| callable \| None | 条件容器函数表达式(默认值None) |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| st.point | st.point \| None | 如果没有找到，返回None |

```python
# 获取距离最近的敌方creep
creep = get.creep(st.friend)
enemies = get.creeps(st.enemy)
closest_enemy = get.closest(creep, enemies)
```

</details>
<details>
<summary><b>get.quickest(obj, objs, filter_fn = None)</b>

返回移动到目标所需时间最短的对象</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| obj | st.point | 一个坐标点           |
| objs | list[st.point] | 一个坐标点列表           |
| filter_fn | list \| tuple \| set \| callable \| None | 条件容器函数表达式(默认值None) |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| st.point | st.point \| None | 如果没有找到，返回None |

```python
# 获取抵达时间最短的敌方creep
creep = get.creep(st.friend)
enemies = get.creeps(st.enemy)
quickest_enemy = get.quickest(creep, enemies)
```

</details>
<details>
<summary><b>get.inrange(obj, objs, range, filter_fn = None)</b>

返回在指定范围内的对象列表</summary>

| param | type                             | description             |
|-------|----------------------------------|-------------------------|
| obj | st.point | 一个坐标点           |
| objs | list[st.point] | 一个坐标点列表           |
| range | int | 查找的最大范围距离           |
| filter_fn | list \| tuple \| set \| callable \| None | 条件容器函数表达式(默认值None) |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| list | list[st.point] | 如果没有找到，返回空列表 |

```python
# 获取距离小于5的敌方creep
creep = get.creep(st.friend)
enemies = get.creeps(st.enemy)
inrange_enemies = get.inrange(creep, enemies, 5)
```

</details>
<details>
<summary><b>get.energy(target, percent = False, cmp = None)</b>

获取目标的能量值</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| target | st.storable | 一个可存储资源的游戏对象                           |
| percent | bool | 是否返回百分比(默认False)                       |
| cmp | str | 便捷比较表达式，如'>100', '<50', '=0' (没有<= >=) |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| int \| bool | int \| bool | 如果percent为True，返回百分比[0, 100]，否则返回具体能量值int; 有cmp字符串时，返回比较结果bool |

```python
# 获取spawn的能量值
spawn = get.spawn(st.friend)
energy = get.energy(spawn)
```

</details>
<details>
<summary><b>get.health(target, percent = False, cmp = None)</b>

获取目标的生命值</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| target | st.hitable | 一个可被攻击的游戏对象                           |
| percent | bool | 是否返回百分比(默认False)                       |
| cmp | str | 便捷比较表达式，如'>100', '<50', '=0' (没有<= >=) |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| int \| bool | int \| bool | 如果percent为True，返回百分比[0, 100]，否则返回具体生命值int; 有cmp字符串时，返回比较结果bool |

```python
# 获取creep的生命值
creep = get.creep(st.friend)
health = get.health(creep)
```

</details>
<details>
<summary><b>get.parts(creep)</b>

获取creep的parts信息</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| creep | st.creep | 一个Creep对象                           |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| list[str] | list[str] | 返回一个列表，包含了目标creep的所有部件(字符串形式). 如果获取失败，返回空列表 |

```python
# 获取creep的部件信息
creep = get.creep(st.friend)
parts = get.parts(creep)
```

</details>
<details>
<summary><b>get.pcount(creep, part_type, broken = True)</b>

获取creep的body中指定类型的部件数量</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| creep | st.creep | 一个Creep对象                           |
| part_type | str | 部件类型, 如MOVE, CARRY, ATTACK, WORK, RANGED_ATTACK 等 |
| broken | bool | 是否包含完全损坏的部件(默认True) |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| int | int | 返回指定类型的部件数量. 如果获取失败，返回-1 |

```python
# 获取creep的MOVE部件数量
creep = get.creep(st.friend)
move_count = get.pcount(creep, MOVE)
```

</details>
<details>
<summary><b>get.wait(creep)</b>

获取目标creep需要等待多少tick后才能进行移动</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| creep | st.creep | 一个Creep对象                           |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| int | int | 返回等待的tick数. 如果获取失败，返回-1. 如果目标无法移动，返回0xffff |

```python
# 获取creep需要等待多少tick后才能进行移动
creep = get.creep(st.friend)
wait = get.wait(creep)
```

</details>
<details>
<summary><b>get.score(creep)</b>

为Creep评分</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| creep | st.creep | 一个Creep对象                           |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| int | int | 返回评分值 |

```python
# 为creep评分
creep = get.creep(st.friend)
score = get.score(creep)
```

</details>
<details>
<summary><b>get.distance(obj, target)</b>

返回obj到目标的距离(单位: 方块数)</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| obj | st.point | 一个坐标点                           |
| target | st.point | 一个坐标点                           |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| int | int | 返回距离值 |

```python
# 获取creep到spawn的距离
creep = get.creep(st.friend)
spawn = get.spawn(st.friend)
distance = get.distance(creep, spawn)
```

</details>
<details>
<summary><b>get.sign(x)</b>

返回x的符号</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| x | int | 一个整数                           |

| return | type             | description                                          |
|--------|------------------|------------------------------------------------------|
| int | int | 返回符号值(0, 1, -1) |

</details>
<details>
<summary><b>get.find(objs, filter_fn)</b>

Find the first object that satisfies the condition</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| objs | list \| tuple | 待查找的对象列表                           |
| filter_fn | list \| tuple \| set \| callable | 容器函数表达式                           |
    
| return | type           | description |
|--------|----------------|-------------|
| object | object \| None | 返回找到的对象 |

```python
# 查找一个满足条件的creep
enemies = get.creeps(st.enemy)
enemy = get.find(enemies, st.atkable)
```

</details>
<details>
<summary><b>get.filter(objs, filter_fn)</b>

Returns a list of objects that satisfy the condition</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| objs | list \| tuple | 待查找的对象列表                           |
| filter_fn | list \| tuple \| set \| callable | 容器函数表达式                           |

| return | type           | description |
|--------|----------------|-------------|
| list | list | 返回满足条件的对象列表 |

```python
# 获取所有满足条件的creep
enemies = get.creeps(st.enemy)
atkable_enemies = get.filter(enemies, st.atkable)
```

</details>
<details>
<summary><b>get.classname(game_object)</b>

获取游戏相关的js对象的类名</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| game_object | GameObject | 游戏对象                           |

| return | type           | description |
|--------|----------------|-------------|
| str | str | 返回类名 |

```python
# 获取creep的类名
creep = get.creep(st.friend)
cls_name = get.classname(creep)
```

</details>
<details>
<summary><b>get.terrain(x_or_point, y = None)</b>

获取指定位置的地形</summary>

| param | type                             | description                            |
|-------|----------------------------------|----------------------------------------|
| x_or_point | int \| st.point | x坐标或者坐标点                           |
| y | None \| int | y坐标。 如果传入了y坐标，那么期望的第一个参数x为int类型 |

| return | type           | description |
|--------|----------------|-------------|
| int | int | 地形常量 |

```python
# 获取指定位置的地形
terrain = get.terrain(10, 10)
```

</details>
</details>

## \> ut
ut本身并不提供任何函数，内部包含多个扩展工具类，用于提供更多的功能。这些工具类可能随着版本的更新而增加或减少，具体的使用方法请参考对应的工具类文档。
(下面是应该会常驻的工具类):

| class | description |
|-------|-------------|
| ut.Stage | 有限状态机 |
| ut.View | 在屏幕上绘制图像 |
| ut.Efr | 事件消息框架 |
| ut.Mp | 地图工具 |
| ut.CInfo | Creep信息 |
| ut.StV | 战略视图 |
| ... | ... |









