from game.const import *
from game.proto import *
from game.utils import *

from config import *

# Author:
# github: EagleBaby
# QQ: eashinergion
# bilibili: 我阅读理解一直可以的
# ----------------------------------

# // Module Select
# > if USE_TUTORIAL_FLAG
# > insert import {Flag} from "game/prototypes"
# > endif
# > if USE_ARENA_FLAG
# > insert import { Flag } from 'arena/season_alpha/capture_the_flag/basic';
# > endif
# > if USE_SCORE_COLLECTOR
# > insert import { RESOURCE_SCORE, ScoreCollector } from 'arena/season_alpha/collect_and_control/basic';
# > endif

# > insert import {arenaInfo} from "game"
# > insert import {searchPath} from "game/path-finder"
# > insert import {Visual} from "game/visual"

# > sort 0
# ----------------------------------
# __pragma__('noalias', 'undefined')
# __pragma__('noalias', 'Infinity')
# __pragma__('noalias', 'clear')
# __pragma__('noalias', 'get')

DONE = 1
__version__ = '0.2.a0'


# -------------------------


class UsrObject:
    """
    空对象, 用于添加自定义属性
    """
    pass


class Position:  # js中position只是type
    def __init__(self, x, y):
        self.x = x
        self.y = y


# ----------------------------------------------------------------------------------------------------------------------

# screeps typing
class st:  # ScreepsTyping
    """
    st提供了一组形如st.funcx(obj)->bool的函数:</br>
        1. 用于判断一个对象是否是某种js类型，这类函数一般以jxxxx命名</br>
        2. 用于判断一个对象是否是某种py类型，这类函数一般以对应python对象名命名</br>
        3. 用于判断一个对象是否是某种游戏对象类型</br>
        4. 用于判断一个对象是否具有某种能力</br>
    """
    # > insert // -------------- JS基础类型判断 -----------------
    NOT_JNUMBER = "obj is not a js number."
    NOT_JLIST = "obj is not a js list."
    NOT_JDICT = "obj is not a js dict."
    NOT_JSTRING = "obj is not a js string."
    NOT_JBOOL = "obj is not a js boolean."
    # > insert // -------------- PY基础类型判断 -----------------
    NOT_LIST = "obj is not a py list."
    NOT_TUPLE = "obj is not a py tuple."
    NOT_DICT = "obj is not a py dict."
    NOT_SET = "obj is not a py set."
    NOT_STR = "obj is not a py str."
    NOT_INT = "obj is not a py int."
    NOT_FLOAT = "obj is not a py float."
    NOT_BOOL = "obj is not a py bool."
    # > insert // -------------- 游戏对象类型判断 -----------------
    NOT_SITE = "obj is not a site."
    NOT_CREEP = "obj is not a creep."
    NOT_GOBJECT = "obj is not a game object."
    NOT_OSTRUCTURE = "obj is not an owned structure."
    NOT_RESOURCE = "obj is not a resource."
    NOT_SOURCE = "obj is not a source."
    NOT_STORE = "obj is not a store."
    NOT_STRUCTURE = "obj is not a structure."
    NOT_BOX = "obj is not a box."
    NOT_EXTENSION = "obj is not an extension."
    NOT_RAMPART = "obj is not a rampart."
    NOT_ROAD = "obj is not a road."
    NOT_SPAWN = "obj is not a spawn."
    NOT_TOWER = "obj is not a tower."
    NOT_WALL = "obj is not a wall."
    NOT_SPAWNING = "obj is not a spawning."
    NOT_FLAG = "obj is not a flag."
    NOT_POINT = "obj is not a point."
    # > insert // -------------- 对象能力类型判断 -----------------
    NOT_MOVABLE = "obj is not movable."
    NOT_ATKABLE = "obj is not atkable."
    NOT_MELEE = "obj is not melee."
    NOT_RANGED = "obj is not ranged."
    NOT_HEALABLE = "obj is not healable."
    NOT_HITABLE = "obj is not hitable."
    NOT_WORKABLE = "obj is not workable."
    NOT_STORABLE = "obj is not storable."
    NOT_ENERGETIC = "obj is not energetic."
    NOT_DAMAGED = "obj is not damaged."
    NOT_EMPTY = "obj is not empty."
    NOT_FULL = "obj is not full."
    NOT_MINE = "obj is not mine."
    NOT_FRIEND = "obj is not a friend."
    NOT_ENEMY = "obj is not an enemy."
    # > insert // -------------- Other -----------------
    POOR = "Not enough energy or resources."
    BUSY = "The structure is busy."
    INVALID = "Invalid arguments or target."
    OUT_RANGE = "The target is out of range."

    # > insert // -------------------------------------- JS基础类型判断 --------------------------------------
    @staticmethod
    def jnumber(obj: object) -> bool:
        """
        判断一个对象是否是js Number
        

        Args:
            obj:

        Returns:
        
        """
        # __pragma__('js', "return typeof obj === 'number';")
        pass

    @staticmethod
    def jlist(obj: object) -> bool:
        """
        判断一个对象是否是js Array


        Args:
            obj:

        Returns:

        """
        # __pragma__('js', "return obj instanceof Array;")
        pass

    @staticmethod
    def jstring(obj: object) -> bool:
        """
        判断一个对象是否是js String

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', "return typeof obj === 'string';")
        pass

    @staticmethod
    def jbool(obj: object) -> bool:
        """
        判断一个对象是否是js Boolean

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', "return typeof obj === 'boolean';")
        pass

    @staticmethod
    def jdict(obj: object) -> bool:
        """
        判断一个对象是否是js Array  # js中dict是Array来实现的

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', "return obj instanceof Array;")
        pass

    # > insert // -------------------------------------- PY基础类型判断 --------------------------------------

    @staticmethod
    def list(obj: object) -> bool:
        """
        判断一个对象是否是py list
        

        Args:
            obj: 

        Returns:
        
        """
        return isinstance(obj, list)

    @staticmethod
    def tuple(obj: object) -> bool:
        """
        判断一个对象是否是py tuple

        Args:
            obj:

        Returns:

        """
        return isinstance(obj, tuple)

    @staticmethod
    def dict(obj: object) -> bool:
        """
        判断一个对象是否是py dict

        Args:
            obj:

        Returns:

        """
        return isinstance(obj, dict)

    @staticmethod
    def set(obj: object) -> bool:
        """
        判断一个对象是否是py set

        Args:
            obj:

        Returns:

        """
        return isinstance(obj, set)

    @staticmethod
    def str(obj: object) -> bool:
        """
        判断一个对象是否是py str

        Args:
            obj:

        Returns:

        """
        return isinstance(obj, str)

    @staticmethod
    def int(obj: object) -> bool:
        """
        判断一个对象是否是py int

        Args:
            obj:

        Returns:

        """
        return isinstance(obj, int)

    @staticmethod
    def float(obj: object) -> bool:
        """
        判断一个对象是否是py float

        Args:
            obj:

        Returns:

        """
        return isinstance(obj, float)

    @staticmethod
    def bool(obj: object) -> bool:
        """
        判断一个对象是否是py bool

        Args:
            obj:

        Returns:

        """
        return isinstance(obj, bool)

    # > insert // -------------------------------------- 游戏对象类型判断 --------------------------------------

    @staticmethod
    def site(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:ConstructionSite

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof ConstructionSite;')
        pass

    @staticmethod
    def creep(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Creep

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof Creep;')
        pass

    @staticmethod
    def gobject(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof GameObject;')
        pass

    @staticmethod
    def ostructure(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:OwnedStructure

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof OwnedStructure;')
        pass

    @staticmethod
    def resource(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Resource

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof Resource;')
        pass

    @staticmethod
    def source(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Source

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof Source;')
        pass

    @staticmethod
    def store(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Store

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof Store;')
        pass

    @staticmethod
    def structure(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Structure

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof Structure;')
        pass

    @staticmethod
    def box(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureContainer

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof StructureContainer;')
        pass

    @staticmethod
    def extension(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureExtension

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof StructureExtension;')
        pass

    @staticmethod
    def rampart(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureRampart

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof StructureRampart;')
        pass

    @staticmethod
    def road(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureRoad

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof StructureRoad;')
        pass

    @staticmethod
    def spawn(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Spawn

        Args:
            obj: 

        Returns:

        """
        # __pragma__('js', 'return obj instanceof StructureSpawn;')
        pass

    @staticmethod
    def tower(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureTower

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof StructureTower;')
        pass

    @staticmethod
    def wall(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:StructureWall

        Args:
            obj: 

        Returns:
        
        """
        # __pragma__('js', 'return obj instanceof StructureWall;')
        pass

    @staticmethod
    def spawning(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Spawning

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof Spawning;')
        pass

    @staticmethod
    def flag(obj: object) -> bool:
        """
        判断一个对象是否是 游戏对象:Flag

        Args:
            obj:

        Returns:

        """
        # __pragma__('js', 'return obj instanceof Flag;')
        pass

    # > insert // -------------------------------------- 对象能力判断 --------------------------------------

    @staticmethod
    def movable(obj: object) -> bool:
        """
        判断一个game object是否可以移动

        Args:
            obj: 

        Returns:
        
        """
        # > insert if(obj && obj.body) for(var p of obj.body) if (p.type == MOVE) return true;
        return False

    @staticmethod
    def atkable(obj: object) -> bool:
        """
        判断一个game object是否可以攻击(或远程攻击)

        Args:
            obj: 

        Returns:
        
        """
        if obj:
            if obj.body:
                # __pragma__('js', 'for(var p of obj.body) if (p.type == ATTACK || p.type == RANGED_ATTACK) return true;')
                pass
            elif obj.attack:
                return True
        return False

    @staticmethod
    def melee(obj: object) -> bool:
        """
        判断一个game object是否可以近战攻击

        Args:
            obj: 

        Returns:
        
        """
        # > insert if(obj && obj.body) for(var p of obj.body) if (p.type == ATTACK) return true;
        return False

    @staticmethod
    def ranged(obj: object) -> bool:
        """
        判断一个game object是否可以远程攻击

        Args:
            obj: 

        Returns:
        
        """
        if obj:
            if obj.body:
                # __pragma__('js', 'for(var p of obj.body) if (p.type == RANGED_ATTACK) return true;')
                pass
            elif obj.attack:
                return True
        return False

    @staticmethod
    def healable(obj: object) -> bool:
        """
        判断一个game object是否可以治疗他人

        Args:
            obj: 

        Returns:
        
        """
        if obj:
            if obj.body:
                # __pragma__('js', 'for(var p of obj.body) if (p.type == HEAL) return true;')
                pass
            elif obj.heal:
                return True
        return False

    @staticmethod
    def hitable(obj: object) -> bool:
        """
        判断一个game object是否可以被攻击

        Args:
            obj: 

        Returns:
        
        """
        return obj and obj.hits is not undefined

    @staticmethod
    def workable(obj: object) -> bool:
        """
        判断一个game object是否可以工作

        Args:
            obj: 

        Returns:
        
        """
        # > insert if(obj && obj.body) for(var p of obj.body) if (p.type == WORK) return true;
        return False

    @staticmethod
    def storable(obj: object) -> bool:
        """
        判断一个game object是否可以储存资源(和现有资源情况无关)

        Args:
            obj: 

        Returns:
        
        """
        # > insert if(obj instanceof Structure && obj.store) return true;
        # > insert if(obj instanceof Creep && obj.body) for(var p of obj.body) if (p.type == CARRY) return true;
        return False

    @staticmethod
    def energetic(obj: object) -> bool:
        """
        判断一个game object是否可以被单位拿取到能量

        Args:
            obj:

        Returns:

        """
        # > insert if(obj instanceof Structure && obj.store && get.energy(obj) > 0) return true;
        # > insert if(obj instanceof Creep && get.energy(obj) > 0) return true;
        # > insert if(obj instanceof Resource && obj.amount > 0) return true;
        pass

    @staticmethod
    def damaged(obj: object) -> bool:
        """
        判断一个game object是否受损

        Args:
            obj:

        Returns:

        """
        # > insert if(obj.hits < obj.hitsMax) return true;
        pass

    @staticmethod
    def empty(obj: object) -> bool:
        """
        判断一个对象的store是否为空(特指RESOURCE_ENERGY)

        Args:
            obj: 

        Returns:
        
        """
        if not obj or not obj.store:
            return True
        return get.energy(obj) == 0

    @staticmethod
    def full(obj: object) -> bool:
        """
        判断一个对象的store是否满(特指RESOURCE_ENERGY)

        Args:
            obj: 

        Returns:
        
        """
        if not obj or not obj.store:
            return True
        return get.energy(obj, True, '=100')

    @staticmethod
    def friend(obj: object) -> bool:
        """
        判断一个game object是否是友方

        Args:
            obj:

        Returns:

        """
        return obj and obj.my

    @staticmethod
    def my(obj: object) -> bool:
        """
        判断一个game object是否是己方

        Args:
            obj:

        Returns:

        """
        return obj and obj.my

    @staticmethod
    def enemy(obj: object) -> bool:
        """
        判断一个game object是否是敌方

        Args:
            obj:

        Returns:

        """
        return obj and not obj.my

    @staticmethod
    def point(obj: object) -> bool:
        """
        判断一个对象是否是一个坐标点(具有x和y属性)

        Args:
            obj:

        Returns:

        """
        return obj.x is not undefined and obj.y is not undefined


# standard (tools)
class std:
    """
    标准库基础函数
    """
    OBJECT_PREVIEW_LENGTH = 20

    @staticmethod
    def _caller_() -> str:
        """
        获取上一个函数的caller

        *不会考虑 lambda之类的函数，返回最近的一个实名函数的调用堆栈信息

        ! 不大可能由用户来直接调用

        Returns:
            上一个函数的调用信息
        """
        # __pragma__("js", "var stack = new Error().stack;")
        # __pragma__("js", 'var cline, cname;')
        # __pragma__("js", 'var size = stack.length;')
        i = 3  # 0是本函数，1是调用本函数的函数，2是调用调用本函数的函数
        while i < size:
            # __pragma__("js", r'cline = stack.split("\n")[i];')
            # __pragma__("js", r'cname = cline.match(/at\s+(.*)\s+\(/)[1];')
            # __pragma__("js", r'if (cname.indexOf("<anonymous>") == -1) break;')
            i += 1
        # __pragma__("js", 'return cline;')

    @staticmethod
    def param_assert(params: list[object], names: list[str], shoulds: list[callable], errs: list[str], __raise: bool = True):
        """
        打印invalid参数错误信息

        Args:
            params: 参数列表 list of object
            names: 参数名列表 list of string
            shoulds: 期望的参数检查列表 list of function
            errs: 对应的错误信息列表 list of string
            __raise: 是否抛出异常(默认True)

        Returns:

        """
        length = min(len(params), len(shoulds), len(errs))  # 保证长度一致
        errored_params, errored_names, errored_errs, err_flag = [], [], [], False  # 错误参数列表
        for i in range(length):
            if not shoulds[i](params[i]):
                errored_params.append(params[i])
                errored_names.append(names[i])
                errored_errs.append(errs[i])
                err_flag = True
        if err_flag:  # 如果有错误
            caller_info = std._caller_()

            txt = "\n[PyScreeps-Arena " + BG_RED + "Error" + JS_RESET + " Params]:" + JS_YELLOW + caller_info + JS_RESET
            length = len(errored_names)
            for i in range(length):
                txt += "\n\terror '" + JS_YELLOW + errored_names[i] + JS_RESET + "': '" + errored_errs[
                    i] + "'  // got: " + JS_YELLOW + String(errored_params[i]) + JS_RESET
            txt += '\n ----------------------------------------------- \n'

            if not __raise:
                # __pragma__('js', '{}', 'console.log(txt)')
                return False
            txt = txt + "\nTick Aborted by Param Error.\n\n[Stack Info]:"
            # __pragma__('js', '{}', 'throw new Error(txt);')

        return True

    @staticmethod
    def _expand_composite_as_list(filter_composite: tuple | list | set | callable):
        """
        展开函数容器表达式为list
        :param filter_composite:
        :return:
        """
        _ = []
        if isinstance(filter_composite, (tuple, list)):
            for each in filter_composite:
                _.extend(std._expand_composite_as_list(each))
            return _
        elif isinstance(filter_composite, set):
            return std._expand_composite_as_list(next(iter(filter_composite)))
        else:
            return [filter_composite]

    @staticmethod
    def _generate_combo_js_eval(filter_composite: tuple | list | set | callable, fid: dict):
        """
        生成js表达串
        :param filter_composite:
        :param fid:
        :return:
        """
        if isinstance(filter_composite, list):
            return "(" + ' || '.join(std._generate_combo_js_eval(each, fid) for each in filter_composite) + ")"
        elif isinstance(filter_composite, tuple):
            return "(" + ' && '.join(std._generate_combo_js_eval(each, fid) for each in filter_composite) + ")"
        elif isinstance(filter_composite, set):
            return ' !(' + std._generate_combo_js_eval(next(iter(filter_composite)), fid) + ')'
        else:
            return '%' + fid[filter_composite] + '%'

    _expand_memory = {}

    @staticmethod
    def combo_filter(filter_composite: tuple | list | set | callable) -> callable:
        """
        展开函数容器表达式

        函数容器表达式是一个由list(表示或)，tuple(表示与), set(表示not)组成的表达式，支持嵌套

        * 你可以直接使用combo来代替std.combo_filter

        Args:
            filter_composite: 只由tuple、list和set组成的过滤器结构(最小单元是callable)

        Returns:
            一个新的可以表达输入表达式的函数
        """
        memory_key = str(filter_composite)
        fn = std._expand_memory.py_get(memory_key, None)  # py_get是python的dict的get方法
        if fn: return fn

        fn_ids, id_fns = {}, {}  # 函数到id的映射，id到函数的映射
        _ = std._expand_composite_as_list(filter_composite)  # 将表达式展开为list
        for f_id, each_fn in enumerate(set(_)):
            f_id += 1
            fn_ids[each_fn], id_fns[f_id] = f_id, each_fn

        # 创建js表达串，其中各个函数使用%fid%表示S
        _eval_str = std._generate_combo_js_eval(filter_composite, fn_ids)

        def _inner(obj):
            eval_str = _eval_str + ""  # js string copy
            for fn_id, func in id_fns.items():
                # __pragma__('js', "eval_str = eval_str.replace('%' + fn_id + '%', String(!!func(obj)));")
                pass

            return eval(eval_str)

        std._expand_memory[memory_key] = _inner
        return _inner

    @staticmethod
    def log(caller_name: str, *args: str):
        """
        [caller_name Log]: *args

        Args:
            caller_name: 调用者名称
            *args: 输出信息

        Returns:

        """
        # __pragma__('js', '{}', 'console.log("[" + caller_name, JS_YELLOW + "Log" + JS_RESET + "]:", ...args)')
        pass

    @staticmethod
    def info(caller_name: str, *args: str):
        """
        [caller_name Info]: *args

        Args:
            caller_name: 调用者名称
            *args: 输出信息

        Returns:

        """
        # __pragma__('js', '{}', 'console.log("[" + caller_name, BG_GREEN + "Info" + JS_RESET + "]:", ...args)')
        pass

    @staticmethod
    def warn(caller_name: str, *args: str):
        """
        [caller_name Warn]: *args

        Args:
            caller_name: 调用者名称
            *args: 输出信息

        Returns:

        """
        # __pragma__('js', '{}', 'console.log("[" + caller_name, BG_YELLOW + "Warn" + JS_RESET + "]:", ...args)')
        pass

    @staticmethod
    def error(caller_name: str, *args: str):
        """
        [caller_name Error]: *args

        * 会抛出一个js的Error

        Args:
            caller_name: 调用者名称
            *args: 输出信息

        Returns:

        """
        # __pragma__('js', '{}', 'throw new Error("[" + caller_name + " " + BG_RED + "Error" + JS_RESET + "]: " + args.join(" "))')
        pass

    _show_usage_flag = False
    _cpu_limit = arenaInfo.cpuTimeLimit // 1000  # 单位是us
    _cpu_first_limit = arenaInfo.cpuTimeLimitFirstTick // 1000000  # 单位是ms

    @staticmethod
    def show_usage():
        print('')
        game_tick = get.ticks()
        if not std._show_usage_flag:
            if game_tick >= 1:
                std._show_usage_flag = True
            print(BG_GREEN + '---------- Welcome to ' + JS_PURPLE + 'Screeps Arena' + JS_WHITE + '! ----------' + JS_RESET)
            print('Lib version: ' + __version__ + ', ' + PYSCREEPS_ARENA_PYTHON_VERSION, '\n')
        print('[Hardware Usage]')
        if game_tick <= 1:
            v = round(get.cpu() / 1000000)
            color = (JS_GREEN if v < 600 else JS_YELLOW) if v < 800 else JS_RED
            print("cpu time: ", color + str(v) + JS_RESET, f'ms / {std._cpu_first_limit} ms')
        else:
            v = round(get.cpu() / 1000)
            color = (JS_GREEN if v < 30000 else JS_YELLOW) if v < 40000 else JS_RED
            print("cpu time: ", color + str(v) + JS_RESET, f'us / {std._cpu_limit} us')
        heap = get.heap()
        v = round(heap.used_heap_size / 1024)
        v_limit = round(heap.heap_size_limit / 1024)
        color = JS_GREEN if v < v_limit * 0.6 else JS_YELLOW if v < v_limit * 0.8 else JS_RED
        print("heap:", color + str(v) + JS_RESET, 'KB /', v_limit, "KB")


# put (command)
class put:
    """
    标准命令输出函数库

    格式说明(例如):


    unit: st.friend & st.movable (ES: st.creep) 一个可移动的友方单位   # '完全检查'时需要为st.friend & st.movable，'必要检查'时需要为st.creep

    to: st.point | int (ES: X)一个目标点或是一个方向   # '完全检查'时需要为st.point | int，'必要检查'时不检查该参数

    options: Options (X) 寻路选项(只在to为st.point时有效)   # 任何情况下都不会检查该参数，你需要确保传入的参数是正确的

    __assert: bool 是否进行参数检查   # 该参数任何情况下都不会被检查

    """
    _spawn_memory = []  # 用于存储spawn生产信息的memory

    @staticmethod
    def move(unit: list | (st.friend & st.movable), to: st.point | int, options: UsrObject = None, __assert: bool = True) -> int | list[int]:
        """
        命令Creep移动到目标点或向某个方向移动

        Args:
            unit: list | (st.friend & st.movable) (ES: list | st.creep) 一个或多个可移动的友方单位
            to: st.point | int (ES: X)一个目标点或是一个方向
            options: Options (X) 寻路选项(只在to为st.point时有效)
            __assert: bool 是否进行参数检查

        Returns:
            成功返回OK(0)，否则返回错误码(<0)
            * 如果unit是一个list，返回一个list，包含每个单位的返回值
        """
        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, to],
                             ['unit', 'to'],
                             [std.combo_filter([st.list, (st.friend, st.movable)]), std.combo_filter([st.point, st.jnumber])],
                             [st.NOT_LIST + ' | (' + st.NOT_FRIEND + ' & ' + st.NOT_MOVABLE + ')', st.NOT_POINT + ' | ' + st.NOT_JNUMBER])
            # > else
            if to is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, st.creep])],
                             [st.NOT_LIST + ' | ' + st.NOT_CREEP])
            # > endif
        # > endif

        if isinstance(unit, list):
            tick = get.ticks()
            _res = []
            for each in unit:
                if to.x is not undefined and to.y is not undefined:  # to is a point:
                    if not each.path_goal or (each.path_goal.x != to.x and each.path_goal.y != to.y):  # 如果目标不同，重新寻路
                        path_res = searchPath(each, to, options)
                        if path_res.incomplete:
                            std.warn('put.move', 'Path to target:', to, ' is incomplete.')

                            # 保留对同一目标的寻路结果(减少cpu消耗)
                            each.path = path_res.path
                            each.path_goal = to
                            each.path_index = 0
                    if each.path:
                        to = each.path[each.path_index]
                        each.path_index += 1
                        if each.path_index >= each.path.length:
                            each.path = None
                            each.path_index = 0
                    _ = each.moveTo(to)
                else:
                    _ = each.move(to)

                if _ == OK:  # 作为判定依据  (get.ticks()应该效率很高)
                    each.last_move = tick
                _res.append(_)
            return _res
        else:
            if to.x is not undefined and to.y is not undefined:  # to is a point:
                if not unit.path_goal or (unit.path_goal.x != to.x and unit.path_goal.y != to.y):  # 如果目标不同，重新寻路
                    path_res = searchPath(unit, to, options)
                    if path_res.incomplete:
                        std.warn('put.move', 'Path to target:', to, ' is incomplete.')

                        # 保留对同一目标的寻路结果(减少cpu消耗)
                        unit.path = path_res.path
                        unit.path_goal = to
                        unit.path_index = 0
                if unit.path:
                    to = unit.path[unit.path_index]
                    unit.path_index += 1
                    if unit.path_index >= unit.path.length:
                        unit.path = None
                        unit.path_index = 0
                _ = unit.moveTo(to)
            else:
                _ = unit.move(to)

            if _ == OK:  # 作为判定依据  (get.ticks()应该效率很高)
                unit.last_move = get.ticks()

            return _

    @staticmethod
    def push(unit: list | (st.friend & st.movable), target: st.friend & st.movable, __assert: bool = True) -> int | list[int]:
        """
        命令一个或多个Creep推动目标Creep
        * 可以让多个高机动力的Creep帮助推动一个低机动力的Creep移动(target必须正在移动)

        Args:
            unit: list | (st.friend & st.movable) (ES: st.creep | list) 一个可移动的友方单位
            target: st.friend & st.movable (ES: st.creep)一个可移动的友方单位
            __assert: bool 是否进行参数检查

        Returns:
            成功返回OK(0)，否则返回错误码(<0)
            * 如果unit是一个list，返回一个list，包含每个单位的返回值
        """
        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [std.combo_filter([st.list, (st.friend, st.movable)]), std.combo_filter((st.friend, st.movable))],
                             ['obj is not a list | (' + st.NOT_FRIEND + ' & ' + st.NOT_MOVABLE + ')', st.NOT_FRIEND + ' & ' + st.NOT_MOVABLE])
            # > else
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [std.combo_filter([st.creep, st.list]), st.creep],
                             ['obj is not a creep | list', st.NOT_CREEP])
            # > endif
        # > endif

        if isinstance(unit, list):
            _res = []
            for each in unit:
                _ = target.pull(each)
                if _ != OK:
                    _res.append(_)
                    continue
                _res.append(put.move(each, target, None, False))
            return _res
        else:
            _ = target.pull(unit)
            if _ != OK:
                return _
            return put.move(unit, target, None, False)

    @staticmethod
    def attack(unit: list | (st.friend & st.atkable), target: st.enemy & st.hitable, move: bool | UsrObject = True, __assert: bool = True) -> UsrObject | list[UsrObject]:
        """
        命令Tower或Creep攻击敌方目标

        Args:
            unit: list | (st.friend & st.atkable) (ES: list | *.attack is not undefined) 一个或多个友方的可攻击单位，例如：*.attack is not undefined
            target: st.enemy & st.hitable (ES: X) 一个敌方的可被攻击的单位
            move: bool | Options (X) 是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            Result (如果没有执行某条操作，则不包含对应属性)

                .melee: int 发动近战攻击时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

                .ranged: int 发动远程攻击时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

                .move: int   移动时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

            * 如果unit是一个list，返回一个list，包含每个单位的返回值
        """
        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [std.combo_filter([st.list, (st.friend, st.atkable)]), std.combo_filter((st.enemy, st.hitable))],
                             [st.NOT_LIST + " | (" + st.NOT_FRIEND + ' & ' + st.NOT_ATKABLE + ")", st.NOT_ENEMY + ' & ' + st.NOT_HITABLE])
            # > else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, lambda obj: obj and obj.attack is not undefined])],
                             [st.NOT_LIST + " | " + 'unit do not have .attack method.'])
            # > endif
        # > endif

        if isinstance(unit, list):
            tick = get.ticks()
            _res = []
            for each in unit:
                # > insert if (each instanceof StructureTower) {_res.append({attack: each.attack(target)}); continue;}

                # 获取攻击距离
                melee, ranged = st.melee(each), st.ranged(each)
                dist = get.distance(each, target)  # 获取距禮
                # > insert var result = {};

                if dist == 1:
                    if melee:
                        result.melee = each.attack(target)
                    if ranged:
                        result.ranged = each.rangedMassAttack()

                    if move and not melee and st.atkable(target):  # 如果敌方单位能攻击, 自身又不能近战攻击
                        result.move = put.escape(each, target, None if move is True else move, False)
                elif dist <= 3:
                    if ranged:
                        result.ranged = each.rangedAttack(target)
                        if move and dist <= 2:  # 如果敌方单位是近战单位并且距离为2(尝试风筝对面)
                            result.move = put.escape(each, target, None if move is True else move, False)
                    elif move and melee:
                        result.move = put.move(each, target, None if move is True else move, False)
                elif move:
                    result.move = put.move(each, target, None if move is True else move, False)

                if result.melee == OK:
                    each.last_melee = tick
                if result.ranged == OK:
                    each.last_ranged = tick

                _res.append(result)
            return _res
        else:
            # > insert if (unit instanceof StructureTower) return {attack: unit.attack(target)};

            # 获取攻击距离
            melee, ranged = st.melee(unit), st.ranged(unit)
            dist = get.distance(unit, target)  # 获取距禮
            # > insert var result = {};

            if dist == 1:
                if melee:
                    result.melee = unit.attack(target)
                if ranged:
                    result.ranged = unit.rangedMassAttack()

                if move and not melee and st.atkable(target):  # 如果敌方单位能攻击, 自身又不能近战攻击
                    result.move = put.escape(unit, target, None if move is True else move, False)
            elif dist <= 3:
                if ranged:
                    result.ranged = unit.rangedAttack(target)
                    if move and dist <= 2:  # 如果敌方单位是近战单位并且距离为2(尝试风筝对面)
                        result.move = put.escape(unit, target, None if move is True else move, False)
                elif move and melee:
                    result.move = put.move(unit, target, None if move is True else move, False)
            elif move:
                result.move = put.move(unit, target, None if move is True else move, False)

            if result.melee == OK:
                unit.last_melee = get.ticks()
            if result.ranged == OK:
                unit.last_ranged = get.ticks()

            return result

    @staticmethod
    def heal(unit: list | (st.friend & st.healable), target: st.friend & st.creep, move: bool | UsrObject = True, __assert: bool = True) -> UsrObject | list[UsrObject]:
        """
        命令Tower或Creep治疗目标单位

        Args:
            unit: list | (st.friend & st.healable) (ES: list | *.heal is not undefined) 一个或多个友方的具有治疗能力的单位
            target: st.friend & st.creep (ES: X) 一个友方的creep
            move: bool | Options (X) 是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            UsrObject (如果没有执行某条操作，则不包含对应属性)

                .heal: int 近距离治疗时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

                .ranged: int 远程治疗时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

                .move: int   移动时记录对应的返回值(成功返回OK(0)，否则返回错误码(<0))

            * 如果unit是一个list，返回一个list，包含每个单位的返回值
        """

        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [std.combo_filter([st.list, (st.friend, st.healable)]), std.combo_filter((st.friend, st.creep))],
                             [st.NOT_LIST + " | (" + st.NOT_FRIEND + ' & ' + st.NOT_HEALABLE + ")", st.NOT_FRIEND + ' & ' + st.NOT_CREEP])
            # > else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, lambda obj: obj and obj.heal is not undefined])],
                             [st.NOT_LIST + " | " + 'unit do not have .heal method.'])
            # > endif
        # > endif

        # > insert if (unit instanceof StructureTower) return {heal: unit.heal(target)};
        # > insert var result = {};
        tick = get.ticks()

        if isinstance(unit, list):
            _res = []
            for each in unit:
                dist = get.distance(each, target)
                if dist <= 1:
                    if not each.last_melee or each.last_melee != tick:
                        result.heal = each.heal(target)
                    elif not each.last_ranged or each.last_ranged != tick:
                        result.ranged = each.rangedHeal(target)
                elif dist <= 3:
                    result.ranged = each.rangedHeal(target)
                elif move:
                    result.move = put.move(each, target, None if move is True else move, False)

                if result.heal == OK or result.ranged == OK:
                    each.last_heal = tick
                _res.append(result)
            return _res
        else:
            dist = get.distance(unit, target)
            if dist <= 1:
                if not unit.last_melee or unit.last_melee != tick:
                    result.heal = unit.heal(target)
                elif not unit.last_ranged or unit.last_ranged != tick:
                    result.ranged = unit.rangedHeal(target)
            elif dist <= 3:
                result.ranged = unit.rangedHeal(target)
            elif move:
                result.move = put.move(unit, target, None if move is True else move, False)

            if result.heal == OK or result.ranged == OK:
                unit.last_heal = tick
            return result

    @staticmethod
    def fetch(unit: list | (st.friend & st.storable), target: st.storable | st.resource, resource_type: int = RESOURCE_ENERGY, amount: int | None = None,
              move: bool | UsrObject = True,
              __assert: bool = True) -> int | list[int]:
        """
        命令单位从目标处取出资源

        Args:
            unit: list | (st.friend & st.storable) (ES: list | st.creep) 一个或多个友方的可携带资源的单位
            target: st.storable | st.resource (ES: X)一个可存储的目标或掉落的资源
            resource_type: int (X)资源类型, 默认RESOURCE_ENERGY
            amount: int | None (X)资源数量，如果没有指定，则取出所有资源
            move: bool | Options (X)是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)
            * 如果unit是一个list，返回一个list，包含每个单位的返回值
        """
        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [std.combo_filter([st.list, (st.friend, st.storable)]), std.combo_filter([st.storable, st.resource])],
                             [st.NOT_LIST + " | (" + st.NOT_FRIEND + ' & ' + st.NOT_STORABLE + ")", st.NOT_STORABLE + ' | ' + st.NOT_RESOURCE])
            # > else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, st.creep])],
                             [st.NOT_LIST + " | " + st.NOT_CREEP])
            # > endif
        # > endif

        tick = get.ticks()

        if isinstance(unit, list):
            _res = []
            for each in unit:
                if move and get.distance(each, target) > 1:
                    _res.append(put.move(each, target, None if move is True else move, False))
                    continue

                # > insert if((target instanceof Resource) && target.resourceType == RESOURCE_ENERGY) {_res.append(each.pickup(target));continue;}

                each.last_fetch = tick

                if amount:
                    # > insert if(target instanceof Creep) {_res.append(target.transfer(each, resource_type, amount));continue;}
                    # > insert if(target instanceof Structure) {_res.append(each.withdraw(target, resource_type, amount));continue;}
                    pass
                else:
                    # > insert if(target instanceof Creep) {_res.append(target.transfer(each, resource_type));continue;}
                    # > insert if(target instanceof Structure) {_res.append(each.withdraw(target, resource_type));continue;}
                    pass
                _res.append(ERR_INVALID_TARGET)
            return _res
        else:
            if move and get.distance(unit, target) > 1:
                return put.move(unit, target, None if move is True else move, False)

            # > insert if((target instanceof Resource) && target.resourceType == RESOURCE_ENERGY) return unit.pickup(target);

            unit.last_fetch = tick

            if amount:
                # > insert if(target instanceof Creep) return target.transfer(unit, resource_type, amount);
                # > insert if(target instanceof Structure) return unit.withdraw(target, resource_type, amount);
                pass
            else:
                # > insert if(target instanceof Creep) return target.transfer(unit, resource_type);
                # > insert if(target instanceof Structure) return unit.withdraw(target, resource_type);
                pass
            return ERR_INVALID_TARGET

    @staticmethod
    def deposit(unit: list | (st.friend & st.storable), target: st.storable | None, resource_type: int = RESOURCE_ENERGY, amount: int | None = None,
                move: bool | UsrObject = True, __assert: bool = True) -> int | list[int]:
        """
        命令单位将身上的资源放置于目标处

        Args:
            unit: list | (st.friend & st.storable) (ES: list | st.creep) 一个或多个友方的可携带资源的单位
            target: st.storable | None (ES: X)一个可存储的目标，如果为None，单位会直接丢弃资源到原地
            resource_type: int (X)资源类型, 默认RESOURCE_ENERGY
            amount: int | None (X)资源数量，如果没有指定，则转移所有资源
            move: bool | Options (X)是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)
            * 如果unit是一个list，返回一个list，包含每个单位的返回值

        Examples:
            ```python
            # 让worker采集资源并把采集到的资源运回spawn
            worker = get.friend(lambda obj: obj.name == 'worker')
            spawn = get.spawn(st.friend)
            source = get.source()
            if get.energy(worker, True) == 100:
                put.deposit(worker, spawn, RESOURCE_ENERGY)
            else:
                put.harvest(worker, source)
            ```
            ```python
            # 让carrier从box不停地取出资源并把资源丢在地上
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            box = get.closest(carrier, get.boxes())
            if get.energy(box) > 0:
                if get.energy(carrier) == 0:
                    put.fetch(carrier, box, RESOURCE_ENERGY)
                else:
                    put.deposit(carrier, None, RESOURCE_ENERGY)
            ```
            ```python
            # 让carrier从box取出资源并把资源送给worker
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            worker = get.friend(lambda obj: obj.name == 'worker')
            box = get.closest(carrier, get.boxes(combo( {st.empty} )))  # 最近的非空box
            if get.energy(carrier, True) > 50:  # 自身带有50%以上的能量就先给worker
                put.deposit(carrier, worker, RESOURCE_ENERGY)
            elif box:
                put.fetch(carrier, box, RESOURCE_ENERGY)
            ```
        """

        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [std.combo_filter([st.list, (st.friend, st.storable)]), std.combo_filter([st.storable, lambda obj: obj is None])],
                             [st.NOT_LIST + " | (" + st.NOT_FRIEND + ' & ' + st.NOT_STORABLE + ")", st.NOT_STORABLE + ' | ' + 'obj is not None'])
            # > else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, st.creep])],
                             [st.NOT_LIST + " | " + st.NOT_CREEP])
            # > endif
        # > endif

        tick = get.ticks()

        if isinstance(unit, list):
            _res = []
            for each in unit:
                each.last_deposit = tick

                if target is None:
                    _res.append(each.drop(resource_type, amount))
                    continue

                if move and get.distance(each, target) > 1:
                    _res.append(put.move(each, target, None if move is True else move, False))
                    continue

                if amount:
                    _res.append(each.transfer(target, resource_type, amount))
                else:
                    _res.append(each.transfer(target, resource_type))
            return _res
        else:
            unit.last_deposit = tick

            if target is None:
                return unit.drop(resource_type, amount)

            if move and get.distance(unit, target) > 1:
                return put.move(unit, target, None if move is True else move, False)

            if amount:
                return unit.transfer(target, resource_type, amount)
            else:
                return unit.transfer(target, resource_type)

    @staticmethod
    def build(unit: list | (st.friend & st.workable), site: st.site, move: bool | UsrObject = True, __assert: bool = True) -> int | list[int]:
        """
        命令单位建造建筑

        Args:
            unit: list | (st.friend & st.workable) (ES: list | st.creep) 一个或多个友方的可工作单位
            site: st.site (ES: X)一个ConstructionSite实例对象
            move: bool | Options (X)是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)
            * 如果unit是一个list，返回一个list，包含每个单位的返回值
        """

        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, (st.friend, st.workable)])],
                             [st.NOT_LIST + " | (" + st.NOT_FRIEND + ' & ' + st.NOT_WORKABLE + ")"])
            # > else
            if site is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, st.creep])],
                             [st.NOT_LIST + " | " + st.NOT_CREEP])
            # > endif
        # > endif

        tick = get.ticks()

        if isinstance(unit, list):
            _res = []
            for each in unit:
                each.last_build = tick

                if move and get.distance(each, site) > 3:
                    _res.append(put.move(each, site, None if move is True else move, False))
                    continue
                _res.append(each.build(site))
            return _res
        else:
            unit.last_build = tick

            if move and get.distance(unit, site) > 3:
                return put.move(unit, site, None if move is True else move, False)
            return unit.build(site)

    @staticmethod
    def harvest(unit: list | (st.friend & st.workable), target: st.source, move: bool | UsrObject = True, __assert: bool = True) -> int | list[int]:
        """
        命令单位采集资源

        Args:
            unit: list | (st.friend & st.workable) (ES: list | st.creep) 一个友方的可工作单位
            target: st.source (ES: X)一个资源点
            move: bool | Options (X)是否可以自主移动(可以传入options, 视作True，用于调整移动时的路线)
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)
            * 如果unit是一个list，返回一个list，包含每个单位的返回值

        Examples:
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
        """

        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [std.combo_filter([st.list, (st.friend, st.workable)]), st.source],
                             [st.NOT_LIST + " | (" + st.NOT_FRIEND + ' & ' + st.NOT_WORKABLE + ")", st.NOT_SOURCE])
            # > else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, st.creep])],
                             [st.NOT_LIST + " | " + st.NOT_CREEP])
            # > endif
        # > endif
        tick = get.ticks()

        if isinstance(unit, list):
            _res = []
            for each in unit:
                each.last_harvest = tick

                if move and get.distance(each, target) > 1:
                    _res.append(put.move(each, target, None if move is True else move, False))
                    continue
                _res.append(each.harvest(target))
            return _res
        else:
            unit.last_harvest = tick

            if move and get.distance(unit, target) > 1:
                return put.move(unit, target, None if move is True else move, False)

            return unit.harvest(target)

    # -------------------------------------- Extension: --------------------------------------

    @staticmethod
    def escape(unit: list | (st.friend & st.movable), target: st.point, options: UsrObject = None, __assert: bool = True) -> int | list[int]:
        """
        命令Creep远离目标

        ! 不是很好的逃离算法，只是一个简单的逃跑算法(尝试过传入.flee，但是貌似不工作)

        Args:
            unit: list | (st.friend & st.movable) (ES: list | st.creep) 一个或多个可移动的友方单位
            target: st.point (ES: X)目标点
            options: Options (X) 寻路选项
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)
            * 如果unit是一个list，返回一个list，包含每个单位的返回值

        Examples:
            ```python
            # 让worker远离最近的敌人
            worker = get.friend(lambda obj: obj.name == 'worker')
            enemy = get.closest(worker, get.enemies())
            if enemy and get.distance(worker, enemy) <= 8:
                put.escape(worker, enemy)
            ```
        """
        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [std.combo_filter([list, (st.friend, st.movable)]), st.point],
                             [st.NOT_LIST + " | (" + st.NOT_FRIEND + " & " + st.NOT_MOVABLE + ")", st.NOT_POINT])
            # > else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([list, st.creep])],
                             [st.NOT_LIST + " | " + st.NOT_CREEP])
            # > endif
        # > endif

        if isinstance(unit, list):
            _res = []
            for each in unit:
                pos = Position(each.x + get.sign(each.x - target.x), each.y + get.sign(each.y - target.y))
                if get.terrain(pos) == TERRAIN_WALL:
                    spawn = get.spawn(st.friend)
                    if spawn:
                        _res.append(put.move(each, spawn, options))
                        continue
                _res.append(put.move(each, pos, options))
            return _res
        else:
            pos = Position(unit.x + get.sign(unit.x - target.x), unit.y + get.sign(unit.y - target.y))
            if get.terrain(pos) == TERRAIN_WALL:
                spawn = get.spawn(st.friend)
                if spawn:
                    return put.move(unit, spawn, options)
            return put.move(unit, pos, options)

    @staticmethod
    def intermit(unit: list | (st.friend & st.storable & st.movable), target: st.storable, resource_type: int = RESOURCE_ENERGY, options: UsrObject = None,
                 __assert: bool = True) -> int | list[int]:
        """
        断断续续地搬运资源到目标

        * 特别适用于空载和满载状态下移动能力差距巨大的单位

        Args:
            unit: list | (st.friend & st.storable & st.movable) (ES: list | st.creep) 一个友方的可移动的可存储资源的单位
            target: st.storable (ES: X)一个可存储的目标
            resource_type: int (X)资源类型, 默认RESOURCE_ENERGY
            options: Options (X) 寻路选项
            __assert: bool 是否进行参数检查

        Returns:
            int 成功搬运完毕或是无资源可搬运，返回DONE(1); 搬运中返回OK(0)或是错误码(<0)
            * 如果unit是一个list，返回一个list，包含每个单位的返回值

        Examples:
            ```python
            # 将身上或地上的资源搬运回家(确保身上或地上有资源)
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            spawn = get.spawn(st.friend)
            put.intermit(carrier, spawn, RESOURCE_ENERGY)
            ```
        """
        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [std.combo_filter([st.list, (st.friend, st.storable, st.movable)]), st.storable],
                             [st.NOT_LIST + " | (" + st.NOT_FRIEND + ' & ' + st.NOT_STORABLE + ' & ' + st.NOT_MOVABLE + ")", st.NOT_STORABLE])
            # > else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, st.creep])],
                             [st.NOT_LIST + " | " + st.NOT_CREEP])
            # > endif
        # > endif
        tick = get.ticks()

        if isinstance(unit, list):
            _res = []
            for each in unit:
                drops = get.resources(lambda obj: obj.resourceType == resource_type and get.distance(each, obj) <= 1)
                free = each.store.getFreeCapacity(resource_type)
                if len(drops) and free > 0:
                    each.last_intermit = get.ticks()
                    _res.append(put.fetch(each, drops[0], resource_type, free, False, False))  # 捡起东西后这个回合就不会再移动了
                    continue

                current = each.store.getUsedCapacity(resource_type)
                if current == 0:
                    _res.append(DONE)
                    continue

                each.last_intermit = tick

                dist = get.distance(each, target)
                if dist <= 1:
                    _ = put.deposit(each, target, resource_type, None, options if options else True, False)
                    if _ != OK:
                        _res.append(_)
                        continue
                    _res.append(DONE)
                else:

                    _ = put.deposit(each, None, resource_type, None, options if options else True, False)
                    if _ != OK:
                        _res.append(_)
                        continue
                    _res.append(put.move(each, target, options, False))
            return _res
        else:
            drops = get.resources(lambda obj: obj.resourceType == resource_type and get.distance(unit, obj) <= 1)
            free = unit.store.getFreeCapacity(resource_type)
            if len(drops) and free > 0:
                unit.last_intermit = get.ticks()
                return put.fetch(unit, drops[0], resource_type, free, False, False)  # 捡起东西后这个回合就不会再移动了

            current = unit.store.getUsedCapacity(resource_type)
            if current == 0:
                return DONE

            unit.last_intermit = tick

            dist = get.distance(unit, target)
            if dist <= 1:
                _ = put.deposit(unit, target, resource_type, None, options if options else True, False)
                if _ != OK:
                    return _
                return DONE
            else:

                _ = put.deposit(unit, None, resource_type, None, options if options else True, False)
                if _ != OK:
                    return _
                return put.move(unit, target, options, False)

    @staticmethod
    def follow(unit: list | (st.friend & st.movable), target: st.movable, distance: int | tuple, options: UsrObject = None,
               move: bool | UsrObject = True, __assert: bool = True) -> int | list[int]:
        """
        命令一个或多个单位跟随目标(可以是尾随，Creep祟祟)

        * 跟随友方时，distance为距离最大值，超出距离(且启用move)时将命令target主动靠近unit(或最远的unit)

        * 跟随敌方时，distance为距离最小值

        Args:
            unit: list | (st.friend & st.movable) (ES: list | st.creep) 一个或多个可移动的友方单位(多个units时可以包含被follow的目标，会自动排除)
            target: st.point (ES: X) 一个目标点
            distance: int | tuple (X)最大或最小距离, tuple: 距离范围, 只在友方时有效(允许忽略过于遥远的友方跟随者)。否则将[0]作为参数
            options: Options (X) unit进行移动时的move options
            move: bool | Options (X) 友方target是否会回靠(的options)
            __assert: bool 是否进行参数检查

        Returns:
            int 成功返回OK(0)，否则返回错误码(<0)
            * 如果unit是一个list，返回一个list，包含每个单位的返回值

        Examples:
            ```python
            leader = get.friend(lambda obj: obj.name == 'leader')
            warriors = get.friends(lambda obj: obj.name == 'warrior')
            # warriors跟随leader，距离不超过5。leader不考虑距离超过20的warrior。
            put.follow(warriors, leader, (5, 20))
            ```
        """
        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, target],
                             ['unit', 'target'],
                             [std.combo_filter([st.list, (st.friend, st.movable)]), st.point],
                             ['obj is not python list. | (' + st.NOT_FRIEND + ' & ' + st.NOT_MOVABLE + ')', st.NOT_POINT])
            # > else
            if target is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, st.creep])],
                             ['obj is not python list. | ' + st.NOT_CREEP])
            # > endif
        # > endif

        target_is_creep = st.creep(target)
        stop_dist, ignore_dist = distance if isinstance(distance, tuple) else (distance, 0xffff)
        if isinstance(unit, list):
            _res = []
            max_dist, furthest = 0, None
            for _unit in unit:
                if _unit.id == target.id:
                    continue
                dist = get.distance(_unit, target)

                if target.my:

                    if ignore_dist > dist > max_dist:  # 只有在友方时才考虑
                        max_dist = dist
                        furthest = _unit

                    _res.append(put.move(_unit, target, options, False))
                else:
                    if dist <= stop_dist:
                        _res.append(put.escape(_unit, target, options, False))
                        continue
                    _res.append(put.move(_unit, target, options, False))

            if move and target.my and target_is_creep and furthest and max_dist > stop_dist:
                _res.append(put.move(target, furthest, None if move is True else move, False))
            return _res
        else:
            dist = get.distance(unit, target)
            if target.my:
                if move and target_is_creep and ignore_dist >= dist >= stop_dist:
                    _ = put.move(target, unit, None if move is True else move, False)
                    if _ != OK:
                        return _
                return put.move(unit, target, options, False)
            else:
                if dist <= stop_dist:
                    return put.escape(unit, target, options, False)
                return put.move(unit, target, options, False)

    @staticmethod
    def carry(unit: list | (st.friend & st.storable & st.movable), src: st.storable, dst: st.storable, resource_type: int = RESOURCE_ENERGY,
              options: UsrObject = None, intermit: bool = False,
              __assert: bool = True) -> int | list[int]:
        """
        命令单位从src处搬运资源到dst处

        Args:
            unit: list | (st.friend & st.storable & st.movable) (ES: list | st.creep) 一个友方的可携带资源的可移动单位
            src: st.storable (ES: X) 从哪里取得资源
            dst: st.storable (ES: X) 被搬运资源的目标容器
            resource_type: int (X)资源类型, 默认RESOURCE_ENERGY
            options: Options (X) 寻路选项
            intermit: bool 是否断断续续地搬运资源
            __assert: bool 是否进行参数检查

        Returns:
            int 若intermit=False，成功返回OK(0)，否则返回错误码(<0); 若intermit=True，则在搬运完毕或是无资源可搬运时，返回DONE(1)，其余和前者相同
            * 如果unit是一个list，返回一个list，包含每个单位的返回值

        Examples:
            ```python
            # 将身上的资源搬运回家(确保身上有资源)
            carrier = get.friend(lambda obj: obj.name == 'carrier')
            spawn = get.spawn(st.friend)
            box = get.closest(carrier, get.boxes(st.energetic))
            put.carry(carrier, box, spawn, RESOURCE_ENERGY)
            ```
        """
        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([unit, src, dst],
                             ['unit', 'src', 'dst'],
                             [std.combo_filter([st.list, (st.friend, st.storable, st.movable)]), st.storable, st.storable],
                             [st.NOT_LIST + " | (" + st.NOT_FRIEND + ' & ' + st.NOT_STORABLE + ' & ' + st.NOT_MOVABLE + ")", st.NOT_STORABLE, st.NOT_STORABLE])
            # > else
            if src is undefined or dst is undefined:
                return ERR_INVALID_TARGET
            std.param_assert([unit],
                             ['unit'],
                             [std.combo_filter([st.list, st.creep])],
                             [st.NOT_LIST + " | " + st.NOT_CREEP])
            # > endif
        # > endif

        if isinstance(unit, list):
            _res = []
            for each in unit:
                if not intermit:
                    if get.energy(each) == 0:
                        _res.append(put.fetch(each, src, resource_type, None, options if options else True, False))
                        continue
                    _res.append(put.deposit(each, dst, resource_type, None, options if options else True, False))
                else:
                    drops = get.resources(lambda obj: obj.resourceType == resource_type and get.distance(each, obj) <= 1)
                    free = each.store.getFreeCapacity(resource_type)
                    if len(drops) and free > 0:
                        _res.append(put.fetch(each, drops[0], resource_type, free, False, False))  # 捡起东西后这个回合就不会再移动了
                        continue

                    current = each.store.getUsedCapacity(resource_type)
                    if current == 0:
                        _res.append(put.fetch(each, src, resource_type, None, options if options else True, False))
                        continue

                    dist = get.distance(each, dst)
                    if dist <= 1:
                        _ = put.deposit(each, dst, resource_type, None, options if options else True, False)
                        if _ != OK:
                            _res.append(_)
                            continue
                        _res.append(DONE)
                    else:

                        _ = put.deposit(each, None, resource_type, None, options if options else True, False)
                        if _ != OK:
                            _res.append(_)
                            continue
                        _res.append(put.move(each, dst, options, False))
            return _res
        else:
            if not intermit:
                if get.energy(unit) == 0:
                    return put.fetch(unit, src, resource_type, None, options if options else True, False)
                return put.deposit(unit, dst, resource_type, None, options if options else True, False)
            else:
                drops = get.resources(lambda obj: obj.resourceType == resource_type and get.distance(unit, obj) <= 1)
                free = unit.store.getFreeCapacity(resource_type)
                if len(drops) and free > 0:
                    return put.fetch(unit, drops[0], resource_type, free, False, False)  # 捡起东西后这个回合就不会再移动了

                current = unit.store.getUsedCapacity(resource_type)
                if current == 0:
                    return put.fetch(unit, src, resource_type, None, options if options else True, False)

                dist = get.distance(unit, dst)
                if dist <= 1:
                    _ = put.deposit(unit, dst, resource_type, None, options if options else True, False)
                    if _ != OK:
                        return _
                    return DONE
                else:

                    _ = put.deposit(unit, None, resource_type, None, options if options else True, False)
                    if _ != OK:
                        return _
                    return put.move(unit, dst, options, False)

    # -------------------------------------- Special: --------------------------------------

    @staticmethod
    def site(x_pos: int | float | Position, y_type: int | float | type, building_type: type | None = None, __assert=True) -> int | ConstructionSite:
        """
        创建一个ConstructionSite

        Args:
            x_pos: int | float | Position (X) x坐标或Position对象
            y_type: int | float | type (X) y坐标或建筑类型
            building_type: type | None (X) 建筑类型
            __assert: bool 是否进行参数检查(un use at here)

        Returns:
            int | ConstructionSite
        """
        if building_type:
            _ = createConstructionSite(x_pos, y_type, building_type)
        else:
            _ = createConstructionSite(x_pos, y_type)

        if _.object is not undefined:
            return _.object
        return _.error

    @staticmethod
    def create(spawn: st.friend & st.spawn, recipe: list[str], name: str | None = None, __assert: bool = True) -> int | Creep:
        """
        命令spawn按照指定的配方生产一个creep

        Args:
            spawn: st.friend & st.spawn (ES: st.spawn)一个友方的Spawn
            recipe: list[str] (ES: X) 一个creep的配方, 一般用const下的MOVE, CARRY, WORK等常量
            name: str | None (X) 一个creep的名字(默认为None), 这样创建的creep会带有.name属性
            __assert: bool 是否进行参数检查

        Returns:
            int | object 如果成功(生产完成)，返回创建的creep对象; 否则返回错误码(<0)

        Examples:
            ```python
            # 生成一个名为'worker'的creep
            spawn = get.spawn(st.friend)
            worker = get.friend(lambda obj: obj.name == 'worker')
            if not worker:
                put.create(spawn, [CARRY, MOVE, WORK], 'worker')
            ```
        """
        # > if ASSERT_LEVEL > ASSERT_DISABLE
        if __assert:
            # > if ASSERT_LEVEL >= ASSERT_FULL
            std.param_assert([spawn],
                             ['spawn'],
                             [std.combo_filter((st.spawn, st.friend))],
                             [st.NOT_SPAWN + ' & ' + st.NOT_FRIEND])
            # > else
            std.param_assert([spawn],
                             ['spawn'],
                             [st.spawn],
                             [st.NOT_SPAWN])
            # > endif
        # > endif

        ready_index, now_ticks = -1, get.ticks()
        for i in range(len(put._spawn_memory)):
            if put._spawn_memory[i].birth_date <= now_ticks:
                ready_index = i
                break
        if ready_index != -1:
            return put._spawn_memory.pop(ready_index)

        if spawn.lock:
            if now_ticks <= spawn.lock:
                return ERR_BUSY
            spawn.lock = undefined

        # 开始生产
        info = spawn.spawnCreep(recipe)
        if info.error:
            return info.error

        spawn.lock = now_ticks + 2
        if name: info.object.name = name
        info.object.birth_date = get.ticks() + CREEP_SPAWN_TIME * len(recipe)
        put._spawn_memory.append(info.object)

        return ERR_BUSY


# get (game information)
class get:
    ticks = getTicks
    cpu = getCpuTime
    heap = getHeapStatistics
    byid = getObjectById

    @staticmethod
    def arena() -> UsrObject:
        """
        获取arenaInfo对象

        Returns:
            object，包含以下属性:
                name:str The name of the arena.
                level:int Currently equals to 1 for basic arena and 2 for advanced.
                season:str Currently equals to "alpha".
                ticksLimit:int Game ticks limit.
                cpuTimeLimit:int CPU wall time execution limit per one tick (except the first tick).
                cpuTimeLimitFirstTick:int CPU wall time limit on the first tick.
        """
        return arenaInfo

    @staticmethod
    def distance(obj: st.point, target: st.point) -> int:
        """
        返回obj到目标的距离(单位: 方块数)

        Args:
            obj: st.point (X) 一个坐标点
            target: st.point (X) 一个坐标点

        Returns:
            int
        """
        if target is None:
            print('get.distance: target is None. Return 65535')
            return 0xffff
        return obj.getRangeTo(target)

    @staticmethod
    def sign(x: int) -> int:
        """
        返回x的符号
        Args:
            x:

        Returns:
            0, 1, -1
        """
        if x < 0:
            return -1
        if x > 0:
            return 1
        return 0

    @staticmethod
    def find(objs: list | tuple, filter_fn: list | tuple | set | callable) -> object:
        """
        Find the first object that satisfies the condition

        Args:
            objs: list | tuple (X) 待查找的对象列表
            filter_fn: list | tuple | set | callable (X) 容器函数表达式

        Returns:
            object
        """
        for obj in objs:
            if filter_fn(obj):
                return obj
        return None

    @staticmethod
    def filter(objs: list | tuple, filter_fn: list | tuple | set | callable) -> list:
        """
        Returns a list of objects that satisfy the condition

        Args:
            objs: list | tuple (X) 待查找的对象列表
            filter_fn: list | tuple | set | callable (X) 容器函数表达式

        Returns:
            list
        """
        return list(filter(filter_fn, objs))

    @staticmethod
    def classname(game_object: GameObject) -> str:
        """
        获取游戏相关的js对象的类名
        Args:
            game_object: GameObject (X) 游戏对象

        Returns:
            str
        """
        # __pragma__('js', "if (game_object instanceof Creep) return 'Creep';")
        # __pragma__('js', "if (game_object instanceof Structure) {")
        # __pragma__('js', "    if (game_object instanceof StructureSpawn) return 'Spawn';")
        # __pragma__('js', "    if (game_object instanceof StructureExtension) return 'Extension';")
        # __pragma__('js', "    if (game_object instanceof StructureRoad) return 'Road';")
        # __pragma__('js', "    if (game_object instanceof StructureWall) return 'Wall';")
        # __pragma__('js', "    if (game_object instanceof StructureRampart) return 'Rampart';")
        # __pragma__('js', "    if (game_object instanceof StructureTower) return 'Tower';")
        # __pragma__('js', "    return 'Structure';")
        # __pragma__('js', "}")
        # __pragma__('js', "if (game_object instanceof Source) return 'Source';")
        # __pragma__('js', "if (game_object instanceof Flag) return 'Flag';")
        # __pragma__('js', "if (game_object instanceof ConstructionSite) return 'Site';")
        # __pragma__('js', "if (game_object instanceof Resource) return 'Resource';")
        # __pragma__('js', "if (game_object instanceof GameObject) return 'GameObject';")
        # __pragma__('js', "return 'Object';")
        pass

    @staticmethod
    def terrain(x_or_point: int | st.point, y: None | int = None) -> int:
        """
        获取指定位置的地形

        Args:
            x_or_point: int| st.point (X) x坐标或者坐标点
            y: None|int (X) y坐标。 如果传入了y坐标，那么期望的第一个参数x为int类型

        Returns:
            int 地形常量
        """
        return getTerrainAt(Position(x_or_point, y)) if y else getTerrainAt(x_or_point)

    @staticmethod
    def all(p_type: type, filter_fn: list | tuple | set | callable | None = None) -> list:
        """
        获取所有指定类型、指定条件的所有对象

        Args:
            p_type: type (X) 对象的类型
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        objs = list(getObjectsByPrototype(p_type))
        if p_type == Creep:  # 过滤掉还没准备好的Creep
            tmp, now_ticks = [], get.ticks()
            for obj in objs:
                if not obj.birth_date or (obj.my and obj.birth_date <= now_ticks):
                    tmp.append(obj)
            # __pragma__("js", "objs = tmp;")
        if filter_fn:
            if isinstance(filter_fn, (list, tuple, set)):
                filter_fn = std.combo_filter(filter_fn)
            _ = filter(filter_fn, objs)
            return _
        return objs

    @staticmethod
    def one(p_type: type, filter_fn: list | tuple | set | callable | None = None) -> object | None:
        """
        获取所有指定类型、指定条件的一个对象

        Args:
            p_type: type (X) 对象的类型
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            object | None 如果没有找到，返回None
        """
        objs = get.all(p_type, filter_fn)
        return objs[0] if objs else None

    @staticmethod
    def creeps(filter_fn: list | tuple | set | callable | None = None) -> list[Creep]:
        """
        获取所有满足条件的Creep

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Creep, filter_fn)

    @staticmethod
    def creep(filter_fn: list | tuple | set | callable | None = None) -> Creep | None:
        """
        获取一个满足条件的Creep

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            Creep 如果没有找到，返回None
        """
        return get.one(Creep, filter_fn)

    @staticmethod
    def friends(filter_fn: list | tuple | set | callable | None = None) -> list[GameObject]:
        """
        获取所有满足条件的友方对象

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Creep, lambda obj: obj.my and (not filter_fn or filter_fn(obj)))

    @staticmethod
    def friend(filter_fn: list | tuple | set | callable | None = None) -> GameObject | None:
        """
        获取一个满足条件的友方对象

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            GameObject 如果没有找到，返回None

        Examples:
            ```python
            # 获取SpawnSwamp模式下的基地Spawn
            spawn = get.friend(st.spawn)
            # 方式2
            spawn = get.spawn(st.friend)
            ```
        """
        return get.one(Creep, lambda obj: obj.my and (not filter_fn or filter_fn(obj)))

    @staticmethod
    def enemies(filter_fn: list | tuple | set | callable | None = None) -> list[GameObject]:
        """
        获取所有满足条件的敌方对象

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Creep, lambda obj: not obj.my and (not filter_fn or filter_fn(obj)))

    @staticmethod
    def enemy(filter_fn: list | tuple | set | callable | None = None) -> GameObject | None:
        """
        获取一个满足条件的敌方对象

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            GameObject 如果没有找到，返回None
        """
        return get.one(Creep, lambda obj: not obj.my and (not filter_fn or filter_fn(obj)))

    @staticmethod
    def spawns(filter_fn: list | tuple | set | callable | None = None) -> list[StructureSpawn]:
        """
        获取所有满足条件的Spawn

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureSpawn, filter_fn)

    @staticmethod
    def spawn(filter_fn: list | tuple | set | callable | None = None) -> StructureSpawn | None:
        """
        获取一个满足条件的Spawn

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureSpawn 如果没有找到，返回None
        """
        return get.one(StructureSpawn, filter_fn)

    @staticmethod
    def structures(filter_fn: list | tuple | set | callable | None = None) -> list[Structure]:
        """
        获取所有满足条件的Structure

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Structure, filter_fn)

    @staticmethod
    def structure(filter_fn: list | tuple | set | callable | None = None) -> Structure | None:
        """
        获取一个满足条件的Structure

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            Structure 如果没有找到，返回None
        """
        return get.one(Structure, filter_fn)

    @staticmethod
    def sources(filter_fn: list | tuple | set | callable | None = None) -> list[Source]:
        """
        获取所有满足条件的Source

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Source, filter_fn)

    @staticmethod
    def source(filter_fn: list | tuple | set | callable | None = None) -> Source | None:
        """
        获取一个满足条件的Source

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            Source 如果没有找到，返回None
        """
        return get.one(Source, filter_fn)

    @staticmethod
    def sites(filter_fn: list | tuple | set | callable | None = None) -> list[ConstructionSite]:
        """
        获取所有满足条件的ConstructionSite

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(ConstructionSite, filter_fn)

    @staticmethod
    def site(filter_fn: list | tuple | set | callable | None = None) -> ConstructionSite | None:
        """
        获取一个满足条件的ConstructionSite

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            ConstructionSite 如果没有找到，返回None
        """
        return get.one(ConstructionSite, filter_fn)

    @staticmethod
    def resources(filter_fn: list | tuple | set | callable | None = None) -> list[Resource]:
        """
        获取所有满足条件的Resource

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Resource, filter_fn)

    @staticmethod
    def resource(filter_fn: list | tuple | set | callable | None = None) -> Resource | None:
        """
        获取一个满足条件的Resource

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            Resource 如果没有找到，返回None
        """
        return get.one(Resource, filter_fn)

    @staticmethod
    def towers(filter_fn: list | tuple | set | callable | None = None) -> list[StructureTower]:
        """
        获取所有满足条件的Tower

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureTower, filter_fn)

    @staticmethod
    def tower(filter_fn: list | tuple | set | callable | None = None) -> StructureTower | None:
        """
        获取一个满足条件的Tower

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureTower 如果没有找到，返回None
        """
        return get.one(StructureTower, filter_fn)

    @staticmethod
    def walls(filter_fn: list | tuple | set | callable | None = None) -> list[StructureWall]:
        """
        获取所有满足条件的Wall

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureWall, filter_fn)

    @staticmethod
    def wall(filter_fn: list | tuple | set | callable | None = None) -> StructureWall | None:
        """
        获取一个满足条件的Wall

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureWall 如果没有找到，返回None
        """
        return get.one(StructureWall, filter_fn)

    @staticmethod
    def ramparts(filter_fn: list | tuple | set | callable | None = None) -> list[StructureRampart]:
        """
        获取所有满足条件的Rampart

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureRampart, filter_fn)

    @staticmethod
    def rampart(filter_fn: list | tuple | set | callable | None = None) -> StructureRampart | None:
        """
        获取一个满足条件的Rampart

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureRampart 如果没有找到，返回None
        """
        return get.one(StructureRampart, filter_fn)

    @staticmethod
    def extensions(filter_fn: list | tuple | set | callable | None = None) -> list[StructureExtension]:
        """
        获取所有满足条件的Extension

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureExtension, filter_fn)

    @staticmethod
    def extension(filter_fn: list | tuple | set | callable | None = None) -> StructureExtension | None:
        """
        获取一个满足条件的Extension

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureExtension 如果没有找到，返回None
        """
        return get.one(StructureExtension, filter_fn)

    @staticmethod
    def boxes(filter_fn: list | tuple | set | callable | None = None) -> list[StructureContainer]:
        """
        获取所有满足条件的Container

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureContainer, filter_fn)

    @staticmethod
    def box(filter_fn: list | tuple | set | callable | None = None) -> StructureContainer | None:
        """
        获取一个满足条件的Container

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureContainer 如果没有找到，返回None
        """
        return get.one(StructureContainer, filter_fn)

    @staticmethod
    def roads(filter_fn: list | tuple | set | callable | None = None) -> list[StructureRoad]:
        """
        获取所有满足条件的Road

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(StructureRoad, filter_fn)

    @staticmethod
    def road(filter_fn: list | tuple | set | callable | None = None) -> StructureRoad | None:
        """
        获取一个满足条件的Road

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            StructureRoad 如果没有找到，返回None
        """
        return get.one(StructureRoad, filter_fn)

    # --------------------------Arenas---------------------------

    @staticmethod
    def flags(filter_fn: list | tuple | set | callable | None = None) -> list[Flag]:
        """
        获取所有满足条件的Flag

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(Flag, filter_fn)

    @staticmethod
    def flag(filter_fn: list | tuple | set | callable | None = None) -> Flag | None:
        """
        获取一个满足条件的Flag

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            Flag 如果没有找到，返回None
        """
        return get.one(Flag, filter_fn)

    @staticmethod
    def score_controllers(filter_fn: list | tuple | set | callable | None = None) -> list[ScoreController]:
        """
        获取所有满足条件的ScoreController

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(ScoreController, filter_fn)

    @staticmethod
    def score_controller(filter_fn: list | tuple | set | callable | None = None) -> ScoreController | None:
        """
        获取一个满足条件的ScoreController

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            ScoreController 如果没有找到，返回None
        """
        return get.one(ScoreController, filter_fn)

    @staticmethod
    def storages(filter_fn: list | tuple | set | callable | None = None) -> list[GameObject]:
        """
        获取所有满足条件的Storage

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        return get.all(GameObject, lambda obj: st.storable(obj) and filter_fn(obj))

    @staticmethod
    def storage(filter_fn: list | tuple | set | callable | None = None) -> GameObject | None:
        """
        获取一个满足条件的Storage

        Args:
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            GameObject 如果没有找到，返回None
        """
        return get.one(GameObject, lambda obj: st.storable(obj) and filter_fn(obj))

    @staticmethod
    def moved(unit: st.creep, ticks_offset: int = 0) -> bool:
        """
        判断单位当前tick是否被下达过移动命令

        * 只能判断由put下达的移动命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_move == get.ticks() + ticks_offset

    @staticmethod
    def attacked(unit: st.creep, ticks_offset: int = 0) -> bool:
        """
        判断单位当前tick是否被下达过攻击命令

        * 只能判断由put下达的攻击命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return (unit.last_attack == get.ticks() + ticks_offset) or (unit.last_ranged == get.ticks() + ticks_offset)

    @staticmethod
    def meleed(unit: st.creep, ticks_offset: int = 0) -> bool:
        """
        判断单位当前tick是否被下达过近战攻击命令

        * 只能判断由put下达的攻击命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_melee == get.ticks() + ticks_offset

    @staticmethod
    def ranged(unit: st.creep, ticks_offset: int = 0) -> bool:
        """
        判断单位当前tick是否被下达过远程攻击命令

        * 只能判断由put下达的攻击命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_ranged == get.ticks() + ticks_offset

    @staticmethod
    def healed(unit: st.creep, ticks_offset: int = 0) -> bool:
        """
        判断单位当前tick是否被下达过治疗命令

        * 只能判断由put下达的治疗命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_heal == get.ticks() + ticks_offset

    @staticmethod
    def fetched(unit: st.creep, ticks_offset: int = 0) -> bool:
        """
        判断单位当前tick是否被下达过拿取命令

        * 只能判断由put下达的拿取命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_fetch == get.ticks() + ticks_offset

    @staticmethod
    def deposited(unit: st.creep, ticks_offset: int = 0) -> bool:
        """
        判断单位当前tick是否被下达过放置命令

        * 只能判断由put下达的放置命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_deposit == get.ticks() + ticks_offset

    @staticmethod
    def built(unit: st.creep, ticks_offset: int = 0) -> bool:
        """
        判断单位当前tick是否被下达过建造命令

        * 只能判断由put下达的建造命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_build == get.ticks() + ticks_offset

    @staticmethod
    def intermited(unit: st.creep, ticks_offset: int = 0) -> bool:
        """
        判断单位当前tick是否被下达过intermit命令

        * 只能判断由put下达的放置命令

        Args:
            unit: st.creep (X) 一个Creep对象
            ticks_offset: int (X) 偏移的ticks数, 默认为0. 比如传入-1表示上一tick

        Returns:
            bool
        """
        return unit.last_intermit == get.ticks() + ticks_offset

    @staticmethod
    def closest(obj: st.point, objs: list[st.point], filter_fn: list | tuple | set | callable | None = None) -> st.point | None:
        """
        返回距离最近的对象

        Args:
            obj: st.point (X) 一个坐标点
            objs: list[st.point] (X) 一个坐标点列表
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            st.point | None 如果没有找到，返回None
        """

        if len(objs) == 0: return None
        if filter_fn:
            if isinstance(filter_fn, (list, tuple, set)):
                filter_fn = std.combo_filter(filter_fn)
            # __pragma__("js", "objs = filter(filter_fn, objs)")
            pass
        # __pragma__("js", 'var tmp_list = [];')
        # __pragma__("js", 'for (var i = 0; i < objs.length; i++)')
        # __pragma__("js", '	tmp_list.push(objs[i]);')
        # __pragma__("js", 'objs = tmp_list;')
        obj = findClosestByRange(obj, objs)
        if obj is undefined: return None
        return obj

    @staticmethod
    def quickest(obj: st.point, objs: list[st.point], filter_fn: list | tuple | set | callable | None = None) -> st.point | None:
        """
        返回移动到目标所需时间最短的对象

        Args:
            obj: st.point (X) 一个坐标点
            objs: list[st.point] (X) 一个坐标点列表
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            st.point | None 如果没有找到，返回None
        """
        if len(objs) == 0: return None
        if filter_fn:
            if isinstance(filter_fn, (list, tuple, set)):
                filter_fn = std.combo_filter(filter_fn)
            # __pragma__("js", "objs = filter(filter_fn, objs)")
            pass
        # __pragma__("js", 'var tmp_list = [];')
        # __pragma__("js", 'for (var i = 0; i < objs.length; i++)')
        # __pragma__("js", '	tmp_list.push(objs[i]);')
        # __pragma__("js", 'objs = tmp_list;')
        obj = findClosestByRange(obj, objs)
        if obj is undefined: return None
        return obj

    @staticmethod
    def inrange(obj: st.point, objs: list[st.point], range: int, filter_fn: list | tuple | set | callable | None = None) -> list[st.point]:
        """
        返回在指定范围内的对象列表

        Args:
            obj: st.point (X) 一个坐标点
            objs: list[st.point] (X) 一个坐标点列表
            range: int (X) 查找的最大范围距离
            filter_fn: list | tuple | set | callable | None (X) 条件容器函数表达式

        Returns:
            list 如果没有找到，返回空列表
        """
        if len(objs) == 0: return []
        if filter_fn:
            if isinstance(filter_fn, (list, tuple, set)):
                filter_fn = std.combo_filter(filter_fn)
            # __pragma__("js", "objs = filter(filter_fn, objs)")
            pass
        # __pragma__("js", 'var tmp_list = [];')
        # __pragma__("js", 'for (var i = 0; i < objs.length; i++)')
        # __pragma__("js", '	tmp_list.push(objs[i]);')
        # __pragma__("js", 'objs = tmp_list;')
        return list(findInRange(obj, objs, range))

    @staticmethod
    def _cmp(value, cmp: str):
        if cmp:
            if cmp[0] == '=':
                return value == int(cmp[1:])
            if cmp[0] == '>':
                return value > int(cmp[1:])
            if cmp[0] == '<':
                return value < int(cmp[1:])
        return value

    @staticmethod
    def energy(target: st.storable, percent: bool = False, cmp: str = None) -> int | bool:
        """
        获取目标的能量值

        Args:
            target: st.storable (X) 一个可存储资源的游戏对象
            percent: bool (X) 是否返回百分比
            cmp: str (X) 便捷比较表达式，如'>100', '<50', '=0' (没有<= >=)

        Returns:
            int | bool 没有cmp字符串时，如果percent为True，返回百分比[0, 100]，否则返回具体能量值int; 有cmp字符串时，返回比较结果bool

        """
        if target is None or not target.store: return -1

        current = target.store.getUsedCapacity(RESOURCE_ENERGY)
        if current is None: return -1
        value = current
        if percent:
            total = target.store.getCapacity(RESOURCE_ENERGY)
            if total is None: return -1
            # __pragma__('js', 'value = int(current / total * 100 + 0.5)')
        return get._cmp(value, cmp) if cmp else value

    @staticmethod
    def health(target: st.hitable, percent: bool = False, cmp: str = None) -> int | bool:
        """
        获取目标的生命值

        Args:
            target: st.hitable (X) 一个可被攻击的游戏对象
            percent: bool (X) 是否返回百分比
            cmp: str (X) 便捷比较表达式，如'>100', '<50', '=0' (没有<= >=)

        Returns:
            int | bool 没有cmp字符串时，如果percent为True，返回百分比[0, 100]，否则返回具体生命值int; 有cmp字符串时，返回比较结果bool
        """
        if target is None: return 0
        if target.hits is undefined: return 0
        current = target.hits
        value = current
        if percent:
            if target.hitsMax is undefined: return 0
            total = target.hitsMax
            # __pragma__('js', 'value = int(current / total * 100 + 0.5)')
        return get._cmp(value, cmp) if cmp else value

    @staticmethod
    def parts(creep: st.creep) -> list[str]:
        """
        获取creep的parts信息

        Args:
            creep: st.creep (X) 一个Creep对象

        Returns:
            list[str]  返回一个列表，包含了目标creep的所有部件(字符串形式). 如果获取失败，返回空列表
        """
        if not creep or not creep.body: return []
        # jprint(creep.body)
        prts = []
        # > insert for (var prt of creep.body){
        # > insert     prts.append(prt.type);
        # > insert }
        return prts

    @staticmethod
    def pcount(creep: st.creep, part_type: str, broken: bool = True) -> int:
        """
        获取creep的body中指定类型的部件数量

        Args:
            creep: st.creep (X) 一个Creep对象
            part_type: str (X) 部件类型, 如MOVE, CARRY, ATTACK, WORK, RANGED_ATTACK 等
            broken: bool (X) 是否包含完全损坏的部件. False时可以忽略hit = 0的部件

        Returns:
            int  返回指定类型的部件数量. 如果获取失败，返回-1

        """
        if not creep or not creep.body: return -1
        count = 0
        for part in creep.body:
            if part.type == part_type:
                if broken or part.hits > 0:
                    count += 1
        return count

    @staticmethod
    def wait(creep: st.creep) -> int:
        """
        获取目标creep需要等待多少tick后才能进行移动

        Args:
            creep: st.creep (X) 一个Creep对象

        Returns:
            int  返回等待的tick数. 如果获取失败，返回-1. 如果目标无法移动，返回0xffff
        """
        move_count = get.pcount(creep, MOVE, False)
        if move_count == -1: return -1
        if move_count == 0: return 0xffff
        fatigue = creep.fatigue

        if fatigue <= 0: return 0
        return Math.ceil(fatigue / 2 / move_count)

    @staticmethod
    def offset(pos: st.point, dx: float, dy: float) -> st.point:
        """
        返回一个新的坐标点，位移dx, dy

        Args:
            pos: st.point (X) 一个坐标点
            dx: float (X) x轴位移, 单位为方块
            dy: float (X) y轴位移, 单位为方块

        Returns:
            st.point  返回一个新的坐标点
        """
        return Position(pos.x + dx, pos.y + dy)

    SCORE_TABLE = [
        2, 2,  # 0, 1
        1.8, 1.6, 1.3, 1,  # 2, 3, 4, 5
        0.8, 0.6, 0.4, 0.2, 0.1,  # 6, 7, 8, 9, >10
    ]

    @staticmethod
    def score(creep) -> int:
        """
        为Creep评分
        Args:
            creep: Creep

        Returns:

        """
        carries, moves, score = 0, 0, 0
        prts = get.parts(creep)
        for i, prt in enumerate(prts):
            if prt == ATTACK:
                score += 10 + i / 5
            elif prt == RANGED_ATTACK:
                score += 15 + i / 4
            elif prt == HEAL:
                score += 12 + i
            else:
                score += 1

                if prt == MOVE:
                    moves += 1
                elif prt == CARRY:
                    carries += 1

        length = len(prts) - carries - moves

        movements = moves * 2
        move_cost = length * 10
        index = min(move_cost // movements, 10)
        coef = get.SCORE_TABLE[index]
        return int(score * coef)


# utils
class ut:
    VIEW_NAME_OPTS = UsrObject()

    class Stage:
        """
        有限状态机

        .current: str 当前状态

        .next(): str 从当前状态转移到下一个状态

        Args:
            sdef: 一个list对象, 每个元素是一个转移定义: <br/>[src: str | tuple, dst: str | tuple, condition: callable -> bool, action: callable]

                * 每个callable形如 callable(stage:Stage, trans-local:object). stage表示所有当前的Stage实例; trans-local表示当前转移内部的局部空间

                * 如果是固定跳转，那么可以只传入action。即: [src: str | tuple, dst: str | tuple, action: callable]

                !!! 注意: sdef不能是空列表

                * 特别的，src可以是 ＊。当某个src没有任何可行跳转时，会尝试使用 ＊ -> 的跳转判断。

                * 特别的，src和dst可以是tuple。这通常表示二者的condition和action是一样的。

                例如: [('a', 'b'), 'c', ...]将被解析为 ['a', 'b', ...], ['b', 'c', ...]

            entry: 初始状态. 如果不指定, 则默认为sdef[0]的src

        Examples:
            ```python
            spawn = get.spawn(st.friend)

            # 一个Carrier的状态机
            sc = Stage([
                # 任何状态下，如果我没有能量储备了，就去获取Energy
                ['*', 'fetch', lambda s, t: get.energy(s.unit) == 0, lambda s, t: put.fetch(s.unit, get.closest(s.unit, get.boxes(st.energetic)))],
                # 任何状态下，如果我身上有能量，就把能量带回家
                ['*', 'deposit', lambda s, t: get.energy(s.unit) > 0, lambda s, t: put.deposit(s.unit, spawn)],
            ])


            def loop():
                if not sc.unit:
                    res = put.create(spawn, [CARRY, MOVE])
                    sc.unit = res if st.creep(res) else None
                else:
                    print('carrier:', sc.next())
            ```
        """

        ALWAYS = True

        def __init__(self, sdef: list, entry: str = None):
            self._raw = sdef
            def_len = len(sdef)
            if def_len == 0:
                raise ValueError("Empty transition definition")

            first_non_star_dst = None
            if entry:
                self.current = entry
            else:
                self.current = None

            # 获取状态集 set[str]
            # 获取状态转移字典 dict[src, list[tuple(dst, condition, action)]]  # 若无action, 则为None
            self._trans, self._any_trans, tmp = {}, [], []

            for i in range(len(sdef)):
                item = sdef[i]

                # 这一段是考虑到transcrypt的语法解析问题，不敢写的太风骚: for src, dst, *rest in smdef. 怕出问题
                len_trans = len(item)
                if not 3 <= len_trans <= 4:
                    raise ValueError(f"Invalid transition definition: {sdef[i]}")
                src, dst, cond = item[0], item[1], item[2]
                action = item[3] if len_trans == 4 else None

                if isinstance(src, str):
                    src = [src]

                if isinstance(dst, str):
                    dst = [dst]

                # 形式上写在一起，因此共用一个DataArea(本质就是一个空object)
                da = UsrObject()

                for _src in src:
                    _src = _src.strip()
                    for _dst in dst:
                        _dst = _dst.strip()
                        if _src != '*':
                            if self.current is None:
                                self.current = _src
                            # 写入到常规跳转表
                            stage_node = self._trans.py_get(_src, None)
                            if stage_node:
                                stage_node.append((_dst, cond, action, da))
                            else:
                                self._trans[_src] = [(_dst, cond, action, da)]

                            tmp.extend([_src, _dst])
                        else:
                            self._any_trans.append((_dst, cond, action, da))

                        if _dst != '*' and first_non_star_dst is None:
                            first_non_star_dst = _dst

            # 再把any_trans添加到所有跳转集的末尾
            for v in self._trans.values():
                v.extend(self._any_trans)

            self._states = set(tmp)

            if self.current is None:
                if first_non_star_dst is not None:
                    self.current = first_non_star_dst
                else:
                    std.error('Stage', "No valid entry found in transition definition")

            # // 更新函数集
            self._su = []  # (attr_name, value_func)
            self._cu = {}  # current: [(attr_name, value_func)]
            self._tu = {}  # (src, dst): [(attr_name, value_func)]

        def asu(self, attr_name: str, value_func: callable):
            """
            Add Stage Update<br/>
            添加属性更新函数<br/>
            用于在状态机的next时自动更新属性<br/>
            * 暂时无法移除，谨慎添加

            Args:
                attr_name: str 属性名
                value_func: callable(s) -> any 更新函数，s为当前Stage实例

            Returns:

            Examples:
                ```python
                carrier = get.friend(lambda obj: obj.name == 'carrier')
                sc = Stage([
                    ['home', 'boxing', lambda s, t: s.energy == 0, lambda s, t: put.fetch(carrier, t.box)],
                    ['boxing', 'home', lambda s, t: s.energy > 0, lambda s, t: put.deposit(carrier, s.spawn)],
                ])

                # update on every next
                sc.asu('energy', lambda s, t: get.energy(carrier))
                # update on every next if current is 'boxing'
                sc.acu('boxing', 'spawn', lambda s, t: get.spawn(st.friend))  # 实际建议将spawn放在全局初始化中, 这里只是举例
                # only update when 'home -> boxing'
                sc.atu('home', 'boxing', 'box', lambda s, t: get.closest(carrier, get.boxes(st.energetic)) )
                ```

            """
            self._su.append((attr_name.strip(), value_func))

        def acu(self, current: str | tuple, attr_name: str, value_func: callable):
            """
            Add Current Update<br/>
            添加特定状态下的属性更新函数<br/>
            用于在状态机特定current下的next时自动更新属性<br/>
            * 暂时无法移除，谨慎添加

            Args:
                current: str | tuple 当前状态, 如果是tuple则表示多个状态均添加
                attr_name: str 属性名
                value_func: callable(s) -> any 更新函数，s为当前Stage实例

            Returns:

            Examples:
                ```python
                carrier = get.friend(lambda obj: obj.name == 'carrier')
                sc = Stage([
                    ['home', 'boxing', lambda s, t: s.energy == 0, lambda s, t: put.fetch(carrier, t.box)],
                    ['boxing', 'home', lambda s, t: s.energy > 0, lambda s, t: put.deposit(carrier, s.spawn)],
                ])

                # update on every next
                sc.asu('energy', lambda s, t: get.energy(carrier))
                # update on every next if current is 'boxing'
                sc.acu('boxing', 'spawn', lambda s, t: get.spawn(st.friend))  # 实际建议将spawn放在全局初始化中, 这里只是举例
                # only update when 'home -> boxing'
                sc.atu('home', 'boxing', 'box', lambda s, t: get.closest(carrier, get.boxes(st.energetic)) )
                ```
            """
            current = current.strip()
            if isinstance(current, str):
                current = [current]
            for c in current:
                v = self._cu.py_get(c, None)
                if not v:
                    v = []
                    self._cu[c] = v
                v.append((attr_name.strip(), value_func))

        def atu(self, src: str | tuple, dst: str | tuple, attr_name: str, value_func: callable):
            """
            Add Trans Update<br/>
            添加特定转移时的属性更新函数<br/>
            用于在状态机特定 src->dst 时对trans-area中属性的自动更新<br/>
            * 暂时无法移除，谨慎添加

            Args:
                src: str | tuple 当前状态, 如果是tuple则表示多个状态均添加
                dst: str | tuple 目标状态, 如果是tuple则表示多个状态均添加
                attr_name: str 属性名
                value_func: callable(s, t) -> any 更新函数，s为当前Stage实例, t为当前转移的局部空间

            Returns:

            Examples:
                ```python
                carrier = get.friend(lambda obj: obj.name == 'carrier')
                sc = Stage([
                    ['home', 'boxing', lambda s, t: s.energy == 0, lambda s, t: put.fetch(carrier, t.box)],
                    ['boxing', 'home', lambda s, t: s.energy > 0, lambda s, t: put.deposit(carrier, s.spawn)],
                ])

                # update on every next
                sc.asu('energy', lambda s, t: get.energy(carrier))
                # update on every next if current is 'boxing'
                sc.acu('boxing', 'spawn', lambda s, t: get.spawn(st.friend))  # 实际建议将spawn放在全局初始化中, 这里只是举例
                # only update when 'home -> boxing'
                sc.atu('home', 'boxing', 'box', lambda s, t: get.closest(carrier, get.boxes(st.energetic)) )
                ```
            """
            src = src.strip()
            dst = dst.strip()
            if isinstance(src, str):
                src = [src]
            if isinstance(dst, str):
                dst = [dst]
            for s in src:
                for d in dst:
                    v = self._tu.py_get((s, d), None)
                    if not v:
                        v = []
                        self._tu[(s, d)] = v
                    v.append((attr_name.strip(), value_func))

        def next(self, log: bool = True) -> str:
            """
            从当前状态转移到下一个状态

            Args:
                log: 是否返回log信息

            Returns:
                str: log=False: 下一个状态. 如果没有进行转移, 则返回当前状态 | log=True: 返回一句跳转信息: 'src -> dst'
            """

            # 更新su
            for a_name, vfn in self._su:
                setattr(self, a_name, vfn(self, None))

            # 更新cu
            v = self._cu.py_get(self.current, None)
            if v:
                for a_name, vfn in v:
                    setattr(self, a_name, vfn(self, None))

            tset = self._trans.py_get(self.current)
            tset = tset if tset else self._any_trans
            for dst, cond, action, trans_local in tset:
                # print(self.current, dst, cond, action)
                v = self._tu.py_get((self.current, dst), None)
                if v:
                    for a_name, vfn in v:
                        setattr(trans_local, a_name, vfn(self, trans_local))

                try:
                    if cond is True or cond is False:
                        cond_res = cond
                    else:
                        cond_res = bool(cond(self, trans_local))
                except Exception as e:
                    raise ValueError(f"[Stage] {self.current} -> {dst}: Usr Condition error: \n{e}")

                if not action:
                    cond_res = True

                if cond_res:
                    if action:
                        try:
                            action(self, trans_local)
                        except Exception as e:
                            raise ValueError(f"[Stage] {self.current} -> {dst}: Usr Action error: \n{e}")
                    info = self.current + " -> " + dst
                    self.current = dst
                    if log:
                        return info
                    return dst
            if log:
                return self.current + " -> " + self.current
            return self.current

        def copy(self):
            """
            '复制'一个Stage实例

            * 只会复制当前sdef和各种update函数，不会复制当前状态和局部空间数据

            Returns:
                Stage

            """
            s = ut.Stage(self._raw)
            s._su = self._su.copy()
            s._cu = self._cu.copy()
            s._tu = self._tu.copy()
            return s

    class View:
        """
        Visual的包装类

        Args:
            layer: int (X) 视图层级
            persistent: bool (X) 是否持久化视图

        Examples:
            ```python
            view = ut.View(1, True)
            view.clear().text('Hello', st.point(0, 0), 0.5, '#FF0000')  # > ignore
            ```
        """

        def __init__(self, layer: int, persistent: bool = True):
            self.v = object
            # > insert self.v = new Visual(layer, persistent);

        def clear(self) -> object:
            """
            清空当前视图

            * 如果编译器提出警告，可以使用 `# > ignore` 来忽略

            Returns:
                View
            """
            self.v.clear()  # > ignore
            return self

        def text(self, text: str, pos: st.point, font: str | int | float, color: str, options: UsrObject = None) -> object:
            """
            绘制文字

            Args:
                text: str (X) 文字内容
                pos: st.point (X) 文字位置
                font: str | int | float (X) 字体大小 可以是 0.5 '12px' 这样的 (优先级高于options.font)
                color: str (X) 颜色  比如 '#FF0000' (优先级高于options.color)
                options: 详见ScreepsArena文档

            Returns:
                View
            """
            options = options or UsrObject()
            options.font = font
            options.color = color
            self.v.text(text, pos, options)
            return self

        def circle(self, pos: st.point, radius: float, fill: str = None, options: UsrObject = None) -> object:
            """
            绘制圆形

            Args:
                pos: st.point (X) 圆心坐标
                radius: float (X) 半径 (单位为方块) (优先级高于options.radius)
                fill: str (X) 填充颜色  比如 '#FF0000' (优先级高于options.fill)
                options: 详见ScreepsArena文档

            Returns:
                View
            """
            options = options or UsrObject()
            options.radius = radius
            options.fill = fill
            self.v.circle(pos, options)
            return self

        def line(self, pos1: st.point, pos2: st.point, width: float = 0.1, color: str = None, options: UsrObject = None) -> object:
            """
            绘制线段

            Args:
                pos1: st.point (X) 起点坐标
                pos2: st.point (X) 终点坐标
                width: float (X) 线宽 (单位为方块) (优先级高于options.width)
                color: str (X) 颜色 比如 '#FF0000' (优先级高于options.color)
                options: 详见ScreepsArena文档

            Returns:
                View
            """
            options = options or UsrObject()
            options.width = width
            options.color = color
            self.v.line(pos1, pos2, options)
            return self

        def rect(self, pos: st.point, width: float, height: float, fill: str = None, options: UsrObject = None) -> object:
            """
            绘制矩形

            Args:
                pos: st.point (X) 左上角坐标
                width: float (X) 宽度
                height: float (X) 高度
                fill: str (X) 填充颜色 比如 '#FF0000' (优先级高于options.fill)
                options: 详见ScreepsArena文档

            Returns:
                View
            """
            options = options or UsrObject()
            options.fill = fill
            self.v.rect(pos, width, height, options)
            return self

        def poly(self, points: list[st.point], fill: str = None, options: UsrObject = None) -> object:
            """
            绘制多边形

            Args:
                points: list[st.point] (X) 多边形的顶点坐标
                fill: str (X) 填充颜色 比如 '#FF0000' (优先级高于options.fill)
                options: 详见ScreepsArena文档

            Returns:
                View
            """
            options = options or UsrObject()
            options.fill = fill

            # > insert var array = [];
            # > insert for (var i = 0; i < len(points); i++) {
            # > insert     array.push(points[i]);
            # > insert }

            self.v.poly(array, options)
            return self

        def size(self) -> int:
            """
            返回视图的大小<br/>
            * 详见ScreepsArena文档

            Returns:
                int
            """
            return self.v.size()

        def header(self, creep: st.creep, options: UsrObject | None = None) -> object:
            """
            为一个Creep绘制标题

            Args:
                creep: st.creep (X) 一个Creep对象
                options: 用户指定绘制细节

            Returns:
                View
            """
            if creep:
                txt = creep.name or ""
                hp_tencent = get.health(creep, True)  # int:0 - 100
                _hex = Math.floor(hp_tencent * 255 / 100).toString(16).padStart(2, '0')
                color = f'#AE{_hex}80'
                if txt:
                    txt += f"|{hp_tencent // 10 if hp_tencent < 100 else 'A'}"
                else:
                    txt = f"{hp_tencent}"

                self.text(txt, get.offset(creep, 0, -0.6), 0.4, color, ut.VIEW_NAME_OPTS if options is None else options)
            else:
                std.warn("View.header", "No creep object:", creep)
            return self

    class Efr:
        """
        事件驱动框架(精简版)(?青春版)

        Args:
            name: str (X) 框架名称, 用于标识框架。名称重复不会报错，但会影响你debug。 如果不指定，将使用默认名称+id
            step: int (X) 框架的执行步长。默认为None，表示不限制步长. 如果你的峰值事件数量较多，可以考虑限制step
            log: bool (X) 是否开启日志输出。默认为True

        Examples:
            ```python
            efr = ut.Efr('main', None, True)
            efr.login('logger', None, lambda e: print(e.task))  # 注册一个事件工作站，用于输出日志
            efr.push('tmp', 'logger', 'event task data. like:"hello, world!".')  # 推送一个事件, 发起者为'tmp', 目标为'logger'
            ```
        """
        id = 0

        class SolutionMissing(Exception):
            def __init__(self, *args, event=None):
                super().__init__(*args)
                self.event = event

            def __str__(self):
                txt = '\n[SolutionMissing]: ' + "Event refused by all stations.\n"
                if self.event:
                    txt += "\tEvent: " + str(self.event)
                if self.args:
                    txt += "\tDetails:"
                    for info in self.args:
                        txt += "\n\t\t" + str(info)
                return txt

        class Event:
            """
            事件对象

            事件通常有5个状态：
            1.STATE_OFFLINE - 游离态 0
                刚刚实例化的事件对象，尚未添加到事件框架中。
            2.STATE_JUNIOR - 预备态 1
                该事件被EventFramework.push()到了事件队列。但尚未被进一步处理的状态
            3.STATE_URGENT - 激发态 2
                该事件已经被分配到了EventStation中，但尚未被执行的状态
            4.STATE_FINISH - 完成态 3
                该事件至少被成功执行了一次
                此时的Event可以通过Event.result获取部分结果
            5.STATE_RETIRED - 末态 4
                该事件被所有工作站成功执行, 并且已经脱离了EventFramework
                此时的Event可以通过Event.result获取所有结果
            *6.STATE_EXCEPT - 异常态 -1
                该事件在任意环节中出错，通过Event.trace获取更多错误信息

            The event generally has four states:
            1.STATE_OFFLINE - free state
                The event object just instantiated has not been added to the EventFramework.
            2.STATE_JUNIOR - ready
                The event was by EventFramework.push() to the event queue. A state that has not yet been further processed
            3.STATE_URGENT - excited state
                The state in which the event has been assigned to an EventStation but has not yet been executed
            4.STATE_FINISH - finish atleast once
                The event was executed successfully atleast once and still in EventFramework
                At this time, the event can be through Event.result get the part of the results
            5.STATE_RETIRED - final state
                The event was executed successfully in all task and has broken away from the EventFramework
                At this time, the event can be through Event.result get the all the results
            *6.STATE_EXCEPT - exception
                The event has an error in any step, which is passed through Event.trace for more error information

            Args:
                source: str | object (X) 事件发起者名称。
                dest: str | object (X) 事件目标名称。通常情况下建议使用字符串，使用object时，请确认filter函数的正确性
                task: object (X) 事件任务数据。通常用于传递任务内容数据
                tags: list (X) 事件标签 通常用于标记事件的类型，便于您设计filter函数
                times: int (X) 事件最大执行次数，默认为65535，必须大于0。如果<=1，则表示最多只允许执行一次

            """
            # static const
            STATE_OFFLINE = 0
            STATE_JUNIOR = 1
            STATE_URGENT = 2
            STATE_FINISH = 3
            STATE_RETIRED = 4
            STATE_EXCEPT = -1

            EVENT_ONCE = 1
            EVENT_ALL = 65535

            def __init__(self, source: str | object = None, dest: str | object = None, task: object = None, tags: list = None, times: int = 65535):
                self.efr = None

                self.trace = []
                self.task = task
                self.result = {}
                self.source = source
                self.dest = dest
                self.tags = tags if tags is not None else ()
                self.state = self.STATE_OFFLINE
                self.times = times
                self.links: int = 0

            def offline(self) -> bool:
                """
                检查事件是否处于游离状态</br>
                Check whether the event is offline

                Returns:
                    如果是游离状态返回True, 否则返回False
                """
                return self.state == self.STATE_OFFLINE

            def junior(self) -> bool:
                """
                检查事件是否已经被添加到事件队列中或已经处于urgent状态</br>
                Check whether the event has been added to eventQueue

                Returns:
                    如果是junior或urgent状态返回True, 否则返回False
                """
                return self.state == self.STATE_JUNIOR or self.state == self.STATE_URGENT

            def urgent(self) -> bool:
                """
                检查事件是否已经被添加到station中</br>
                Check whether the event has been added to station

                Returns:
                    如果是urgent状态返回True, 否则返回False
                """
                return self.state == self.STATE_URGENT

            def finish(self) -> bool:
                """
                检查事件是否已经结束或完全结束。只有结束的事件才可以获取result</br>
                Check whether the event has finished or retired. Only the finished event can get the result.

                Returns:
                    如果是finish或retired状态返回True, 否则返回False
                """
                return self.state == self.STATE_FINISH or self.state == self.STATE_RETIRED

            def retired(self) -> bool:
                """
                检查事件是否已经完全结束。</br>
                Check whether the event has retired.

                Returns:
                    如果是retired状态返回True, 否则返回False
                """
                return self.state == self.STATE_RETIRED

            def excepted(self) -> bool:
                """
                检查事件是否出现错误</br>
                Check whether the event has except.

                Returns:
                    如果是except状态返回True, 否则返回False
                """
                return self.state == self.STATE_EXCEPT

            def excepts(self) -> list[Exception]:
                """
                获取event的错误信息. 尚未出错或失败返回[]</br>
                Get the exception-information of event. No error or failure returned []

                Returns:
                    list: 错误信息列表
                """
                return self.trace

            def set_result(self, station_key: object, result: object, syscall=False) -> None:
                """
                set the result of event</br>
                (API for outer caller? maybe)

                Args:
                    station_key: object
                    result: object 事件结果(通常是工作站的respond返回值)
                    syscall: bool 是否来自EventFramework的调用。如果不是，它将自动设置其状态。(用户不应传入此参数)

                Returns:
                    None
                """
                self.result[station_key] = result
                if not syscall:
                    self.links -= 1
                    if self.links <= 0:
                        self.state = self.STATE_FINISH
                    else:
                        self.state = self.STATE_RETIRED

            def get_result(self, station_key: str = None) -> object:
                """
                get the result of event from station. return Get or None

                Args:
                    station_key: str 事件工作站的key 如果为None则返回第一个搜索到的结果(通常用于唯一工作站的情况)

                Returns:
                    object: 事件结果
                """
                if station_key is not None:
                    return self.result.py_get(station_key)
                else:
                    get = list(self.result.values())
                    return get[0] if get else None

            def __str__(self):
                s_tsk = str(self.task)
                s_tsk = s_tsk if len(s_tsk) < 40 else (s_tsk[:40] + '...')
                txt = "Event[source:{}, dest:{}, task:{}, tags:{}]".format(self.source, self.dest, s_tsk, self.tags)
                return txt

        class EventQueue:
            """
            事件队列，事件框架的事件入口

            EventQueue, event entry of EventFramework

            * 一般情况下，用户不需要直接操作EventQueue，而是通过EventFramework的push方法来推送事件

            Args:
                None
            """

            def __init__(self):
                self.efr = None
                self.equeue = []

            def push(self, event: object) -> object:
                """
                驱动事件。成功返回该event, 失败返回None

                Args:
                    event: Event 事件实例

                Returns:
                    Event: 事件实例
                """
                self.equeue.append(event)
                event.efr = self.efr
                if event.state == ut.Efr.Event.STATE_OFFLINE:
                    event.state = ut.Efr.Event.STATE_JUNIOR
                return event

            def release(self, num: int | None = None) -> list:
                """
                获取事件队列中的事件, 该函数不推荐用户使用。用户调用会导致EventFramework工作异常</br>
                Get events in the event queue. This function is not recommended for users. User calls will cause the EventFramework to work abnormally

                Args:
                    num: int 一次获取的事件数量。返回的事件数量不会超过此值(如果为None则表示无限制)

                Returns:
                    list: 事件列表
                """
                if num is None or num >= len(self.equeue):
                    _ = self.equeue
                    self.equeue = []
                    return _

                _ = self.equeue[:num]
                self.equeue = self.equeue[num:]
                return _

            def __len__(self):
                return len(self.equeue)

        class EventStation:
            """
            事件工作站

            # 重要说明:
                小心死锁的情况(A调用(push)到B，但是B必须在A执行完后再能返回)

            Args:
                key: str 工作站的key
                filter: callable 事件筛选函数 如果为None则当event.dest == key时会接收事件
                respond: callable 事件响应函数 如果为None则不响应
                step: int 事件处理步长 默认为None，表示一回合处理完所有事件
                lv: int 工作站优先级(默认为0)(越大越优先)
            """

            def __init__(self, key: str, filter: callable = None, respond: callable = None, step: int = None, lv: int = None):
                self.efr = None
                self.key = key

                self.equeue = ut.Efr.EventQueue()

                self._filter = filter
                self._respond = respond

                self.step = step
                self.lv = 0 if lv is None else lv

            # @abstractmethod
            def filter(self, event: object) -> bool:
                """
                如果初始化时未传入filter则需要用户覆盖此方法</br>
                If filter is not passed in during initialization, you need to override this method

                定义工作站对事件的筛选方法. 筛选通过返回True, 失败返回False</br>
                Defines how the workstation filters events. The filter returns true if passed and false if failed

                默认筛选方法是: 判断事件的dest是否和工作站的key匹配</br>
                The default filtering method is to judge whether the dest of the event matches the workstation.key

                Args:
                    event: Event 事件实例

                Returns:
                    bool，True表示接收事件，False表示拒绝事件
                """
                if self._filter:
                    return self._filter(event)
                return self.key == event.dest

            # @abstractmethod
            def respond(self, event: object) -> object:
                """
                如果初始化时未传入filter则需要用户覆盖此方法</br>
                If filter is not passed in during initialization, you need to override this method

                Args:
                    event: Event 事件实例

                Returns:
                    object 事件处理结果
                """
                if self._respond:
                    return self._respond(event)
                return

            def __str__(self):
                txt = f"estation: {self.key}"
                return txt

            def push(self, event: object) -> bool:
                """
                推送事件到工作站队列</br>
                Push event to workstation queue

                Args:
                    event: Event 事件实例

                Returns:
                    bool 事件是否成功推送
                """
                event = self.equeue.push(event)
                if self.efr._log:
                    std.info(f"estation<{self.key}>", 'recv event:', str(event))
                if event:
                    event.result[self.key] = None
                    if event.state == ut.Efr.Event.STATE_JUNIOR:
                        event.state = ut.Efr.Event.STATE_URGENT
                    event.links += 1
                    return True
                return False

            def update(self):
                events = self.equeue.release(self.step)
                for i, event in enumerate(events):
                    if event.state != ut.Efr.Event.STATE_EXCEPT:
                        try:
                            ret = self.respond(event)
                        except Exception as err:
                            event.state = ut.Efr.Event.STATE_EXCEPT
                            err.where = f"respond of estation: {self.key}"
                            event.trace.append(err)
                            if self.efr._log:
                                std.log(f"esta<{self.key}>", str(err))
                            continue

                        if self.efr._log:
                            std.log(f"esta<{self.key}>", 'handle:', str(event))

                        # running
                        if ret is None:
                            # skip it:
                            if self.efr._log:
                                std.log(f"esta<{self.key}>", 'keep running:', str(event))
                            self.equeue.equeue.append(event)
                            continue
                        elif ret is undefined:
                            if self.efr._log:
                                std.log(f"esta<{self.key}>", 'break on running:', str(event))
                            self.equeue.equeue.extend(events[i:])
                            break

                        if event.state != ut.Efr.Event.STATE_EXCEPT:
                            event.set_result(self.key, ret, syscall=True)
                            event.links -= 1
                            if event.links <= 0:
                                event.state = ut.Efr.Event.STATE_RETIRED
                            else:
                                event.state = ut.Efr.Event.STATE_FINISH

        class EventAlloter:
            """
            事件分配器</br>
            事件分配器会在update函数被调用时工作，取出事件队列中的事件，然后轮询所有已注册的工作站(根据事件的性质可能会提前结束). 最后将事件分配到对应的工作站的队列中

            Event Allocator</br>
            The event allocator will work when the 'update' function is called, take out the events in the event queue, and then poll all registered workstations (depending on the nature of the event, it may end in advance) Finally, the event is allocated to the queue of the corresponding workstation

            Args:
                equeue: object 事件队列
                step: int 事件分配器的步长。表示每次update时，分配器最多分配多少个事件。默认为None，表示不限制步长
            """

            def __init__(self, equeue: object, step: int = None):
                self.efr = None

                self.equeue = equeue
                self.step = step

                self.stations = []

            def login(self, station: object) -> bool:
                """
                注册事件工作站。当update时，alloter会用调用station.filter(事件)->bool来判断station是否响应此事件。如果station响应了事件，那么alloter会把事件传入该station的队列.</br>
                成功返回True，失败返回False

                Register the event workstation. When updating, the alloter will call station Filter - > bool to determine whether the station responds to this event. If the station responds to an event, the alloter will pass the event into the queue of the station</br>
                Returns true for success and false for failure

                Args:
                    station: object 工作站实例

                Returns:
                    bool 事件是否成功注册
                """
                for my_station in self.stations:
                    if my_station.key == station.key:
                        return False

                station.efr = self.efr

                for i in range(len(self.stations)):
                    if station.lv > self.stations[i].lv:
                        self.stations.insert(i, station)
                        return True
                self.stations.append(station)
                return True

            def logoff(self, station: object) -> bool:
                """
                注销工作站。成功或不存在station返回True，失败返回False</br>
                Log off the eventstation. Successful or non-existent stations return true, while failure returns false

                Args:
                    station: object 工作站实例

                Returns:
                    bool 事件是否成功注销
                """
                try:
                    station.etr = None
                    self.stations.remove(station)
                except:
                    return False

                return True

            def update(self):
                """
                由外部单元执行更新</br>
                Updates are performed by external units

                """
                events = self.equeue.release(self.step)

                for event in events:
                    flag = False
                    for station in self.stations:
                        # try filter.
                        try:
                            get = station.filter(event)
                        except Exception as err:
                            event.state = ut.Efr.Event.STATE_EXCEPT
                            err.where = f"filter of estation: {station.key}"
                            event.trace.append(err)
                            if self.efr._log:
                                std.warn(f"alloter: {self.efr.name}", str(err))
                            continue

                        # add to station
                        if get:
                            get = station.push(event)
                            if get:
                                flag = True

                            event.times -= 1
                            if event.times <= 0:
                                break

                    # set exception
                    if not flag:
                        event.state = ut.Efr.Event.STATE_EXCEPT
                        # record except
                        err = ut.Efr.SolutionMissing(event)
                        err.where = f"alloter: {self.efr.name}"
                        event.trace.append(err)
                        if self.efr._log:
                            std.warn(f"alloter: {self.efr.name}", str(err))

        def __init__(self, name: str = None, step: int = None, log=True):
            self.name = name if name else f"EventFramework-{ut.Efr.id}"
            ut.Efr.id += 1

            self.log = log

            # 外部组件
            self.equeue = ut.Efr.EventQueue()
            self.ealloter = ut.Efr.EventAlloter(self.equeue, step)

            # 绑定
            self.equeue.efr = self
            self.ealloter.efr = self

        @property
        def stations(self) -> list:
            """
            获取所有已经注册过的station

            Get all registered stations

            Returns:
                list: 工作站列表
            """
            return self.ealloter.stations

        def login(self, key: str | EventStation, filter=None, respond=None, step: int = None, lv: int = None) -> bool:
            """
            注册事件工作站。当update时，alloter会用调用station.filter(事件)->bool来判断station是否响应此事件。如果station响应了事件，那么alloter会把事件传入该station的队列.</br>
            成功返回True，失败返回False

            Register the event workstation. When updating, the alloter will call station Filter - > bool to determine whether the station responds to this event. If the station responds to an event, the alloter will pass the event into the queue of the station</br>
            Returns true for success and false for failure

            Args:
                key: str | EventStation 工作站key 或 工作站实例
                filter: callable 事件筛选函数 如果为None则当event.dest == key时会接收事件
                respond: callable 事件响应函数 如果为None则不响应
                step: int 事件处理步长 默认为None，表示一回合处理完所有事件
                lv: int 工作站优先级(默认为0)(越大越优先)

            Returns:
                bool 事件是否成功注册
            """
            if isinstance(key, str):
                station = ut.Efr.EventStation(key, filter, respond, self.ealloter.step if step is None else step, lv)
            else:
                station = key

            # 绑定与内绑定
            station.efr = self
            station.equeue.efr = self

            return self.ealloter.login(station)

        def logoff(self, key: str) -> bool:
            """
            注销工作站。成功或不存在station返回True，失败返回False</br>
            Log off the eventstation. Successful or non-existent stations return true, while failure returns false

            Args:
                key: str 工作站key

            Returns:
                bool 事件是否成功注销
            """
            for station in self.estations:
                if station.key == key:
                    return self.ealloter.logoff(station)
            return False

        def push(self, src: str, dst: str, task: object = None, tags: list = None, times: int = 65535) -> Event:
            """
            驱动事件。成功返回该event, 失败返回None

            Args:
                src: str 事件发起者
                dst: str 事件目标
                task: object 事件任务
                tags: list 事件标签
                times: int 事件最大执行次数，默认为65535，必须大于0。如果<=1，则表示最多只允许执行一次

            Returns:
                Event: 事件实例
            """
            event = ut.Efr.Event(src, dst, task, tags, times)
            if self.log:
                std.info(f"efr.push: ", str(event))
            return self.equeue.push(event)

        def update(self, update_stations=True) -> None:
            """
            事件框架更新

            efr update

            Args:
                update_stations: bool 是否更新工作站

            Returns:
                None
            """
            self.ealloter.update()
            if update_stations:
                for station in self.ealloter.stations:
                    station.update()

        def __str__(self):
            return 'EventFramework'

    class Mp:
        """
        The map class, used to store the terrain information of the map and pooling maps

        * should only initialize once in the main loop at the first tick.

        Args:
            width: int, the width of the map, default 100
            height: int, the height of the map, default 100
        """

        def __init__(self, width=100, height=100):
            _map = []
            for ih in range(height):
                new_line = []
                for iw in range(width):
                    ter = get.terrain(iw, ih)
                    if ter == TERRAIN_PLAIN:
                        new_line.append(2)
                    elif ter == TERRAIN_SWAMP:
                        new_line.append(10)
                    else:
                        new_line.append(255)
                _map.append(new_line)
            self.map = _map
            self.width = width
            self.height = height

            self.p2 = self.pooling(self.map, 2)
            self.p4 = self.pooling(self.p2, 2)
            self.p5 = self.pooling(self.map, 5)
            self.p8 = self.pooling(self.p4, 2)
            self.p10 = self.pooling(self.p5, 2)

        @staticmethod
        def pooling(tar_arr, kernel_size=2) -> list[list[int]]:
            """
            Pooling the arr with kernel_size and stride with 'mean'

            Args:
                tar_arr: list[list[int]]
                kernel_size: int, strides will equal to kernel_size

            Returns:
                池化后的数组
            """
            if kernel_size < 2:
                raise ValueError("Kernel size should be greater than 1")
            if len(tar_arr) < kernel_size or len(tar_arr[0]) < kernel_size:
                raise ValueError("Array size should be greater than kernel size")
            res = []
            k_square = kernel_size ** 2
            _len_h = (len(tar_arr) // kernel_size) * kernel_size
            _len_w = (len(tar_arr[0]) // kernel_size) * kernel_size
            for i in range(0, _len_h, kernel_size):
                new_line = []
                for j in range(0, _len_w, kernel_size):
                    _sum = 0
                    for k in range(kernel_size):
                        for l in range(kernel_size):
                            _sum += tar_arr[i + k][j + l]
                    new_line.append(_sum // k_square)

                res.append(new_line)
            return res

        def get_pooling(self, psize: int) -> (list[list[int]], int):
            """
            Get the pooling array with psize

            Args:
                psize: int, the pooling size

            Returns:
                list[list[int]], int
            """
            if psize == 1:
                return self.map, 1
            elif psize == 2:
                return self.p2, 2
            elif psize == 4:
                return self.p4, 4
            elif psize == 5:
                return self.p5, 5
            elif psize == 8:
                return self.p8, 8
            elif psize == 10:
                return self.p10, 10
            else:
                raise ValueError("psize should be 1, 2, 4, 5, 8 or 10. Got: %d" % psize)

        def find_space2x(self, psize: int, x: int, y: int, rot: int = 0) -> Position:
            """
            Find a 2x psize square space with the base point x, y

            Args:
                psize: int, the size of the pool. (1, 2, 4, 5, 8, 10)对应搜寻的space大小为(2x2, 4x4, 8x8, 10x10, 16x16, 20x20)
                x: int, the x position of the 100x100 space
                y: int, the y position of the 100x100 space
                rot: 0/1, 表示螺旋的方向, 0代表左逆时针, 1代表右逆时针

            Returns:
                the lt position of the 2x2 space
            """

            def calc_mean2x2(arr, tx, ty):
                """
                Calculate the mean of the 2x2 area

                Args:
                    arr:
                    tx:
                    ty:

                Returns:
                    int
                """
                _sum = 0
                for i in range(2):
                    for j in range(2):
                        _sum += arr[ty + j][tx + i]
                return _sum // 4

            pool, p_size = self.get_pooling(psize)

            width, height = len(pool[0]), len(pool)
            tix, tiy = x // p_size, y // p_size
            step, dir_id = 1, 0
            best_val, best_pos = 255, Position(x, y)
            if rot:
                directs = [(-1, 0), (0, 1), (1, 0), (0, -1)]
            else:
                directs = [(1, 0), (0, -1), (-1, 0), (0, 1)]

            # // 从目标点开始螺旋外扩遍历，对每个点计算2x2平均值，找到<= 10的pos并返回。找不到就返回tix, tiy
            while True:
                for _ in range(2):
                    for _ in range(step):
                        if (0 <= tix < (width - 1)) and (0 <= tiy < (height - 1)):
                            val = calc_mean2x2(pool, tix, tiy)
                            # print('calc', tix, tiy, '->', val)
                            if val <= 10:
                                return Position(tix * p_size, tiy * p_size)
                            elif val < best_val:
                                best_val = val
                                best_pos = Position(tix * p_size, tiy * p_size)
                        elif (tix < 0 or tix >= width - 1) and (tiy < 0 or tiy >= height - 1):
                            return best_pos
                        tix += directs[dir_id][0]
                        tiy += directs[dir_id][1]
                    dir_id = (dir_id + 1) % 4
                step += 1

        def draw(self, view: Visual, psize: int) -> None:
            """
            在视图上绘制特定池化的图像

            Args:
                view: 视图对象
                psize: 池化大小, 1, 2, 4, 5, 8, 10

            Returns:
                None
            """
            op = UsrObject()
            op.opacity = 0.15
            pool, p_size = self.get_pooling(psize)

            # draw each pool, <= 10: green, >10: yellow, >100: red
            for ih in range(self.height // p_size):
                for iw in range(self.width // p_size):
                    value = pool[ih][iw]
                    if value <= 2:
                        color = '#EEEEEE'
                    elif pool[ih][iw] <= 5:
                        color = '#DDFFAA'
                    elif pool[ih][iw] <= 10:
                        color = '#BBFF88'
                    elif pool[ih][iw] <= 50:
                        color = '#BBFF33'
                    elif pool[ih][iw] <= 100:
                        color = '#EEEE33'
                    elif pool[ih][iw] <= 150:
                        color = '#FFAA33'
                    elif pool[ih][iw] <= 200:
                        color = '#FF6666'
                    else:
                        color = '#FF33AA'
                    view.rect(Position(iw * p_size - 0.5, ih * p_size - 0.5), p_size, p_size, color, op)

    class CInfo:
        """
        用于存储Creep的Strategic Info</br>
        包括:</br>
        - nums: dict prt_name: num</br>
        - score: int  # 最大评分</br>

        Args:
            creep: Creep
        """

        def __init__(self, creep):
            self.nums = {
                MOVE: 0,
                WORK: 0,
                CARRY: 0,
                ATTACK: 0,
                RANGED_ATTACK: 0,
                HEAL: 0,
                TOUGH: 0,
            }
            prts = get.parts(creep)
            # jprint(prts)
            for prt in prts:
                self.nums[prt] += 1
            self.score = get.score(creep)

    class StV:
        """
        战术视图

        Args:
            draw: int  # 绘制的强度:</br>
                0: 不绘制</br>
                1: 绘制友方Creep信息使能</br>
                2: 绘制敌方Creep信息使能</br>
        """

        SIZE = 10  # 10x10的小块

        @staticmethod
        def _new_arr2d(val: int | list | None = None):
            # 生成一个10x10的空数组
            _empty_list = isinstance(val, list) and len(val) == 0
            new_arr = []
            for _ in range(ut.StV.SIZE):
                if val is not None:
                    row = [val if not _empty_list else [] for _ in range(ut.StV.SIZE)]
                else:
                    row = []
                new_arr.append(row)
            return new_arr

        @staticmethod
        def _new_view2d(layer: int):
            new_arr = []
            for i in range(ut.StV.SIZE):
                new_row = []
                for j in range(ut.StV.SIZE):
                    new_row.append(ut.View(layer, True))
                new_arr.append(new_row)
            return new_arr

        @staticmethod
        def _opacity_fn(strength: int) -> float:
            # 将0-inf的strength转换为0.05-0.5的透明度
            return (1 + 9 * strength / (strength + 200)) * .05

        @staticmethod
        def _get_score(cs_dict: dict, creep, _del=False):
            cst_info = cs_dict.pop(creep.id, None) if _del else cs_dict.py_get(creep.id, None)
            if cst_info is None:
                return get.score(creep)
            return cst_info.score

        @staticmethod
        def ipos(x, y, bia_x: float | int = 0, bia_y: float | int = 0) -> Position:
            return Position(x // 10 + bia_x, y // 10 + bia_y)

        @staticmethod
        def xpos(ix, iy, bia_x: float | int = 0, bia_y: float | int = 0) -> Position:
            return Position(ix * 10 + bia_x, iy * 10 + bia_y)

        def __init__(self, mp, draw: int = 1 | 2, log=False):
            # logging
            self.log = log

            # base data
            self.p5: list[list[int]] = mp.p5  # 20x20的池化地图
            self.p10: list[list[int]] = mp.p10  # 10x10的池化地图
            self.cs = {}  # 统计所有creep的基本数据
            self.ec = {
                'b': self._new_arr2d([]),  # Battle Unit
                'w': self._new_arr2d([]),  # Work Unit
                'o': self._new_arr2d([]),  # Other Unit
                's': self._new_arr2d(0),  # Battle Units的score总和
            }
            self.fc = {
                'b': self._new_arr2d([]),  # Battle Unit
                'w': self._new_arr2d([]),  # Work Unit
                'o': self._new_arr2d([]),  # Other Unit
                's': self._new_arr2d(0),  # Battle Units的score总和
            }

            self.views = self._new_view2d(999)  # 用于绘制的视图
            self.e_spawns = []  # spawn obj, last_spawning_creep
            self.f_spawns = []  # spawn obj, last_spawning_creep

            # find spawns
            for spawn in get.spawns():
                if st.friend(spawn):
                    self.f_spawns.append([spawn, None])
                else:
                    self.e_spawns.append([spawn, None])

            # jprint(self.e_spawns, self.f_spawns)

            # parse draw
            self.draw = bool(draw)
            self.f_draw = draw & 1
            self.e_draw = draw & 2

        def add(self, creep):
            """
            添加creep信息到stv
            Args:
                creep:

            Returns:

            """
            # Creep Info
            cs = ut.CInfo(creep)
            self.cs[creep.id] = cs  # add creep info

            # Friend or Enemy
            is_friend = st.friend(creep)
            ix, iy = creep.x // 10, creep.y // 10
            sel = self.fc if is_friend else self.ec

            # B W O write.
            key = 'o'
            if st.atkable(creep) or st.healable(creep):
                key = 'b'
            elif st.workable(creep):
                key = 'w'

            # write
            sel[key][iy][ix].append(creep)
            sel['s'][iy][ix] += cs.score
            if self.log:
                std.info('ut.StV.add', f'add {"friend" if is_friend else "enemy"} creep:{creep.id}({cs.score}) into "{key}" at ({ix}, {iy}).')

        def draw_area(self, iw, ih):
            """
            绘制指定的地图区块
            Args:
                iw:
                ih:

            Returns:

            """

            fcs, ecs = self.fc['s'][ih][iw], self.ec['s'][ih][iw]
            pos = self.xpos(iw, ih, -.5, .5)
            op = UsrObject()

            if self.log:
                std.info('ut.StV.draw_area', f'draw area ({iw}, {ih}). fcs:{fcs}, ecs:{ecs}. xpos:({pos.x}, {pos.y}).')

            view = self.views[ih][iw]
            view.clear()  # > ignore
            if self.f_draw and fcs:
                op.opacity = self._opacity_fn(fcs)
                view.rect(pos, 10, 10, 'green', op)

            if self.e_draw and ecs:
                op.opacity = self._opacity_fn(ecs)
                view.rect(pos, 10, 10, 'red', op)

        def _move_creeps_and_record(self, select: dict, key: str, iy, ix, moves_record: list, redraw_record: list) -> bool:
            """
            检查creep是否移动到其他区域
            Args:
                select: dict  己方或敌方的creep信息字典
                key: str  'b' 'w' 'o' # Battle, Work, Other
                iy: int current iy
                ix: int current ix
                moves_record: list  # 移动记录
                redraw_record: list  # 需要重新绘制的区域

            Returns:
                如果有creep移动到其他区域，返回True，否则返回False
            """
            scores, area = select['s'], select[key][iy][ix]
            _removes = []
            for i, c in enumerate(area):
                new_ix, new_iy = c.x // 10, c.y // 10
                if c.hits is undefined or c.hits <= 0:  # creep dead(in game 0.18.0 will turn to undefined)
                    _removes.append(i)
                    scores[iy][ix] -= self._get_score(self.cs, c, True)
                    continue
                elif new_ix != ix or new_iy != iy:
                    moves_record.append((c, new_ix, new_iy))
                    _removes.append(i)
                    score = self._get_score(self.cs, c)
                    scores[iy][ix] -= score
                    scores[new_iy][new_ix] += score
                    redraw_record.append((new_ix, new_iy))

            if len(_removes):
                _removes.reverse()
                for i in _removes:
                    area.pop(i)

            return len(_removes) > 0

        def check_new_creep(self, spawn_lcs: list) -> list:
            """
            检查有无新的creep
            Args:
                spawn_lcs:

            Returns:
                返回新的creep列表
            """
            _news = []
            for i in range(len(spawn_lcs)):
                spawn, lc = spawn_lcs[i]
                sc = get.creep()  # > remove
                # > insert var sc = spawn?.spawning?.creep;
                if sc and (not lc or sc.id != lc.id):
                    self.add(sc)
                    _news.append(sc)
                    spawn_lcs[i][1] = sc
            return _news

        def check_creeps_moves(self) -> list:
            """
            检查creep的移动情况
            Args:

            Returns:
                redraw_area_ids: set  # 需要重新绘制的区域
            """
            # check creep move to other area

            # creep: (new_x, new_y)
            _fcb_moves, _ecb_moves = [], []
            _fcw_moves, _ecw_moves = [], []
            _fco_moves, _eco_moves = [], []
            redraw_area_ids = []
            for ih in range(self.SIZE):
                for iw in range(self.SIZE):
                    _ = False
                    if len(self.fc['b'][ih][iw]):
                        _ |= self._move_creeps_and_record(self.fc, 'b', ih, iw, _fcb_moves, redraw_area_ids)
                    if len(self.fc['w'][ih][iw]):
                        _ |= self._move_creeps_and_record(self.fc, 'w', ih, iw, _fcw_moves, redraw_area_ids)
                    if len(self.fc['o'][ih][iw]):
                        _ |= self._move_creeps_and_record(self.fc, 'o', ih, iw, _fco_moves, redraw_area_ids)
                    if len(self.ec['b'][ih][iw]):
                        _ |= self._move_creeps_and_record(self.ec, 'b', ih, iw, _ecb_moves, redraw_area_ids)
                    if len(self.ec['w'][ih][iw]):
                        _ |= self._move_creeps_and_record(self.ec, 'w', ih, iw, _ecw_moves, redraw_area_ids)
                    if len(self.ec['o'][ih][iw]):
                        _ |= self._move_creeps_and_record(self.ec, 'o', ih, iw, _eco_moves, redraw_area_ids)
                    if _:  # redraw
                        redraw_area_ids.append((iw, ih))

            # add new move
            for each in _fcb_moves:
                c, new_x, new_y = each
                self.fc['b'][new_y][new_x].append(c)
            for each in _fcw_moves:
                c, new_x, new_y = each
                self.fc['w'][new_y][new_x].append(c)
            for each in _fco_moves:
                c, new_x, new_y = each
                self.fc['o'][new_y][new_x].append(c)
            for each in _ecb_moves:
                c, new_x, new_y = each
                self.ec['b'][new_y][new_x].append(c)
            for each in _ecw_moves:
                c, new_x, new_y = each
                self.ec['w'][new_y][new_x].append(c)
            for each in _eco_moves:
                c, new_x, new_y = each
                self.ec['o'][new_y][new_x].append(c)
            # finish check move
            return list(set(redraw_area_ids))

        def filter(self, filter_fn: list | tuple | set | callable, ret_pos=True):
            """
            过滤整个二位网络，返回选中[(ix, iy), ...]
            Args:
                filter_fn: list|tuple|set|callable
                    params: crs: dict,
                        crs:{
                            'fb': list[creep],
                            'fw': list[creep],
                            'fo': list[creep],
                            'eb': list[creep],
                            'ew': list[creep],
                            'eo': list[creep],
                            'fs': int,
                            'es': int,
                        }
                ret_pos: bool  # 返回类型为[(ix, iy), ...]，否则返回[[Creep, ], ...]

            Returns:

            """
            filter_fn = std.combo_filter(filter_fn)
            res = []
            for iy in range(self.SIZE):
                for ix in range(self.SIZE):
                    crs = {
                        'fb': self.fc['b'][iy][ix],
                        'fw': self.fc['w'][iy][ix],
                        'fo': self.fc['o'][iy][ix],
                        'eb': self.ec['b'][iy][ix],
                        'ew': self.ec['w'][iy][ix],
                        'eo': self.ec['o'][iy][ix],
                        'fs': self.fc['s'][iy][ix],
                        'es': self.ec['s'][iy][ix],
                    }
                    if filter_fn(crs):
                        if ret_pos:
                            res.append((ix, iy))
                        else:
                            res.append(crs)
            return res

        def find(self, filter_fn: list | tuple | set | callable, ret_pos=True) -> tuple | None:
            """
            查找符合条件的区域
            Args:
                filter_fn: list|tuple|set|callable
                    params: crs: dict,
                        crs:{
                            'fb': list[creep],
                            'fw': list[creep],
                            'fo': list[creep],
                            'eb': list[creep],
                            'ew': list[creep],
                            'eo': list[creep],
                            'fs': int,
                            'es': int,
                        }
                ret_pos: bool  # 返回类型为(ix, iy)，否则返回[Creep, ]

            Returns:
                返回符合条件的区域(ix, iy), 如果找不到则返回None
            """
            filter_fn = std.combo_filter(filter_fn)
            for iy in range(self.SIZE):
                for ix in range(self.SIZE):
                    crs = {
                        'fb': self.fc['b'][iy][ix],
                        'fw': self.fc['w'][iy][ix],
                        'fo': self.fc['o'][iy][ix],
                        'eb': self.ec['b'][iy][ix],
                        'ew': self.ec['w'][iy][ix],
                        'eo': self.ec['o'][iy][ix],
                        'fs': self.fc['s'][iy][ix],
                        'es': self.ec['s'][iy][ix],
                    }
                    if filter_fn(crs):
                        if ret_pos:
                            return ix, iy
                        return crs

            return None

        def _check_area_fit(self, ix, iy, type: str) -> bool:
            """
            检查区域是否符合要求
            Args:
                ix:
                iy:
                type:

            Returns:

            """
            if type == 'f':
                return self.fc['s'][iy][ix] > 0
            elif type == 'e':
                return self.ec['s'][iy][ix] > 0
            elif type == 'fb':
                return len(self.fc['b'][iy][ix]) > 0
            elif type == 'fw':
                return len(self.fc['w'][iy][ix]) > 0
            elif type == 'fo':
                return len(self.fc['o'][iy][ix]) > 0
            elif type == 'eb':
                return len(self.ec['b'][iy][ix]) > 0
            elif type == 'ew':
                return len(self.ec['w'][iy][ix]) > 0
            elif type == 'eo':
                return len(self.ec['o'][iy][ix]) > 0
            else:
                return False

        def closest_area(self, ix, iy, type: str, ret_pos=True) -> tuple | None:
            """
            获取最近的区域
            Args:
                ix:
                iy:
                type: f fa fh fo e ea eh eo
                ret_pos: bool # 返回类型为(ix, iy)，否则返回[Creep, ]

            Returns:
                返回最近的区域(ix, iy), 如果找不到则返回None
            """
            if self._check_area_fit(ix, iy, type):
                if ret_pos:
                    return ix, iy
            # 螺旋向外遍历. 对应的list不为空，则返回tuple
            directs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
            step = 1
            while True:
                for i in range(4):
                    for j in range(step):
                        ix += directs[i][0]
                        iy += directs[i][1]
                        if (ix < 0 or ix >= 10) and (iy < 0 or iy >= 10):
                            return None
                        if 0 <= ix < 10 and 0 <= iy < 10 and self._check_area_fit(ix, iy, type):
                            return ix, iy
                step += 1

        def update(self):
            """
            更新地图信息
            """
            # check moves
            redraw = self.check_creeps_moves()

            # for each spawn and check spawning with last tick
            _new_e = self.check_new_creep(self.e_spawns)
            _new_f = self.check_new_creep(self.f_spawns)

            # redraw
            if self.draw:
                for creep in _new_e:
                    self.draw_area(creep.x // self.SIZE, creep.y // self.SIZE)
                for creep in _new_f:
                    self.draw_area(creep.x // self.SIZE, creep.y // self.SIZE)
                for each in redraw:
                    self.draw_area(each[0], each[1])


ut.VIEW_NAME_OPTS.font = '0.5'
ut.VIEW_NAME_OPTS.align = 'center'
ut.VIEW_NAME_OPTS.opacity = 0.7
ut.VIEW_NAME_OPTS.color = '#AEFC80'
