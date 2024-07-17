# ! This Module won't be compiled into the final js code. ! #
# ! Only for defines and IDE identification. ! #
# These are currently required for Transcrypt in order to use the following names in JavaScript.
# Without the 'noalias' pragma, each of the following would be translated into something like 'py_Infinity' or 'py_undefined'
# python: if you want to use dict().get(); Please use dict().py_get() instead.
# !!! Do not Move These Pragma !!! #
# __pragma__('noalias', 'undefined')
# __pragma__('noalias', 'Infinity')
# __pragma__('noalias', 'clear')
# __pragma__('noalias', 'get')

# ------------------------------------------------- IDE Identification ---------------------------------------------------

# > define jprint console.log

# > define JS_RED "\x1b[31m"
# > define JS_GREEN "\x1b[32m"
# > define JS_YELLOW "\x1b[33m"
# > define JS_BLUE "\x1b[34m"
# > define JS_PURPLE "\x1b[35m"
# > define JS_CYAN "\x1b[36m"
# > define JS_WHITE "\x1b[37m"
# > define JS_RESET "\x1b[0m"
# > define BG_RED "\x1b[41m"
# > define BG_GREEN "\x1b[42m"
# > define BG_YELLOW "\x1b[43m"
# > define BG_BLUE "\x1b[44m"
# > define BG_PURPLE "\x1b[45m"
# > define BG_CYAN "\x1b[46m"
# > define BG_WHITE "\x1b[47m"
# > define BG_RESET "\x1b[0m"

# // Assert Level  // Suggest use FULL if you meet strange unexpected logic. 有助于发现逻辑错误。必要检查可以避免js运行错误
# > define ASSERT_FULL 2
# > define ASSERT_ESSENTIAL 1
# > define ASSERT_DISABLE 0
# > define ASSERT_LEVEL ASSERT_FULL

# // DLC 模块选择 //
# > define USE_TUTORIAL_FLAG 0
# > define USE_ARENA_FLAG 0
# > define USE_SCORE_COLLECTOR 0
# // 项目配置
# > define MAIN_JS_PATH D:/ablog/game-screeps/tutorial-creeps_bodies/main.mjs
# ------------------------------------------------- IDE Identification ---------------------------------------------------
size = 0
array = []
undefined = None  # > remove
Infinity = float('inf')
result = Math = object()
String = lambda _: _
jprint = lambda *_: _
PYSCREEPS_ARENA_PYTHON_VERSION = ''
JS_RED = JS_GREEN = JS_YELLOW = JS_BLUE = JS_PURPLE = JS_CYAN = JS_WHITE = JS_RESET = ''
BG_RED = BG_GREEN = BG_YELLOW = BG_BLUE = BG_PURPLE = BG_CYAN = BG_WHITE = BG_RESET = ''
arenaInfo = {}

