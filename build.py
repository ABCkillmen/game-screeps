import os
import re
import sys
import shutil
import subprocess
import pyperclip
from colorama import Fore

version_info = sys.version_info
python_version = f"Compiler py-version: {version_info.major}.{version_info.minor}.{version_info.micro}"

class Compiler:
    libs = ["game"]
    FILE_STRONG_REPLACE = {
        "std": {
            "==": "===",
            "!=": "!==",
        }
    }
    PYFILE_IGNORE_CHECK_FNAMES = ['game/const.py', 'game/proto.py', 'game/utils.py', 'game/const.py']

    PYFILE_WORD_WARNING_CHECK = {
        r"\.\s*get\s*\(": "Please use 'dict.py_get'. (add '# > ignore' same line to ignore it if you sure right).",
        r"\.\s*clear\s*\(": "Please use 'container.py_clear'. (add '# > ignore' same line to ignore it if you sure right).",
        r"\[\s*-\s*1\s*\]": "Index by '[-1]' may not work in js. (add '# > ignore' same line to ignore it if you sure right).",
    }

    PYFILE_EXIST_WARNING_CHECK = {
        r"__pragma__\s*\(\s*['\"]noalias['\"]\s*,\s*['\"]undefined['\"]\s*\)": "Strongly suggest to add '__pragma__('noalias', 'undefined')'.",
        r"__pragma__\s*\(\s*['\"]noalias['\"]\s*,\s*['\"]Infinity['\"]\s*\)": "Strongly suggest to add '__pragma__('noalias', 'Infinity')'.",
        r"__pragma__\s*\(\s*['\"]noalias['\"]\s*,\s*['\"]clear['\"]\s*\)": "Strongly suggest to add '__pragma__('noalias', 'clear')'.",
        r"__pragma__\s*\(\s*['\"]noalias['\"]\s*,\s*['\"]get['\"]\s*\)": "Strongly suggest to add '__pragma__('noalias', 'get')'.",
    }

    JS_VM = "org.transcrypt.__runtime__.js"

    GAME_UTILS = './game.utils.js'
    GAME_PROTO = './game.proto.js'
    GAME_CONST = './game.const.js'

    SYSTEM_MODULES_IGNORE = {
        GAME_UTILS: ['CircleVisualStyle', 'Color', 'CostMatrix', 'CreateConstructionSiteResult', 'Direction', 'DoesZapCodeSpaceFlag',
                     'FindPathOptions', 'Goal', 'HeapInfo',
                     'LineStyle', 'LineVisualStyle', 'PolyVisualStyle', 'RectVisualStyle', 'SearchPathOptions', 'SearchPathResult', 'Terrain',
                     'TextAlign', 'TextVisualStyle',
                     'Visual', 'getAt', 'searchPath'],
        GAME_PROTO: ['BodyPartType', 'CreepAttackResult', 'CreepBuildResult', 'CreepDropResult', 'CreepHarvestResult', 'CreepHealResult',
                     'CreepMoveResult', 'CreepPickupResult',
                     'CreepPullResult', 'CreepRangedAttackResult', 'CreepRangedHealResult', 'CreepRangedMassAttackResult',
                     'CreepTransferResult', 'CreepWithdrawResult',
                     'ResourceType', 'SpawnCreepResult', 'Store', 'TowerAttackResult', 'TowerHealResult', 'Spawning', 'ScoreController',
                     'Flag'],
        GAME_CONST: ['RESOURCE_SCORE'],
    }
    SYSTEM_MODULES_TRANSNAME = {
        GAME_UTILS: "game/utils",
        GAME_PROTO: "game/prototypes",
        GAME_CONST: "game/constants",
    }
    GENERATE_IGNORE_PYFILES = ['config.py']  # Won't be compiled into the final js code, only for defines.

    JS_IMPORT_PAT = re.compile(r'from\s+[\'\"]([^\']+)[\'\"]')
    INSERT_PAT = re.compile(r'#\s*insert\s+([^\n]*)')  # 因为被判定的string为单line，所以不需要考虑多行的情况

    TRANSCRYPT_ERROR_REPLACE = {
        # 由于transcrypt的问题，导致编译后的js代码中存在一些错误，需要进行替换
        r"new\s+set\s*\(": r"set(",
    }

    def __init__(self, src_dir, build_dir):
        # check
        if not os.path.exists(src_dir):
            print(Fore.RED + '[Error] ' + Fore.RESET + 'src dir not exists')
            sys.exit(1)

        self.src_dir = os.path.abspath(src_dir)
        self.build_dir = os.path.abspath(build_dir)
        self.target_dir = os.path.join(self.build_dir, '__target__')

    last_output = False
    @staticmethod
    def auto_read(fpath):
        """
        自动用多种编码读取文件

        Args:
            fpath:

        Returns:

        """
        if not os.path.exists(fpath):
            if not Compiler.last_output:
                Compiler.last_output = True
                print()
            print(Fore.YELLOW + '[CriticWarn] ' + Fore.RESET + f"JS file not exists: {fpath}. You can ignore if it's a not used file")
            return ""
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                return f.read()
        except UnicodeDecodeError:
            with open(fpath, 'r', encoding='gbk') as f:
                return f.read()

    def copy_to(self):
        # copy to build dir
        print(Fore.YELLOW + '>>> ' + Fore.RESET + ' copying to build dir: %s ...' % self.build_dir, end='')
        if os.path.exists(self.build_dir):
            shutil.rmtree(self.build_dir)
        shutil.copytree(self.src_dir, self.build_dir)
        # add libs
        for lib in self.libs:
            shutil.copytree(lib, os.path.join(self.build_dir, lib))

        # overwrite last to [Done]
        print(Fore.GREEN + '\r[1/6][Done]' + Fore.RESET + ' copying to build dir: %s' % self.build_dir)

    @property
    def target_py(self):
        return os.path.join(self.build_dir, 'main.py')

    @property
    def target_js(self):
        return os.path.join(self.target_dir, 'main.js')

    @staticmethod
    def preprocess_if_block(source_code, variables):
        lines = source_code.split('\n')
        stack = []
        result = []

        for i, line in enumerate(lines):
            striped = line.strip()
            if_match = re.match(r'#\s*>\s*if\s+([^:.]*)$', striped)
            elif_match = re.match(r'#\s*>\s*elif\s+([^:.]*)$', striped)
            else_match = re.match(r'#\s*>\s*else$', striped)
            endif_match = re.match(r'#\s*>\s*endif$', striped)

            if if_match:
                condition = if_match.group(1)
                stack.append(eval(condition, variables))
            elif elif_match and len(stack) > 0:
                condition = elif_match.group(1)
                stack[-1] = eval(condition, variables)
            elif else_match and len(stack) > 0:
                stack[-1] = not stack[-1]
            elif endif_match:
                stack.pop()
            else:
                if len(stack) == 0 or all(stack):
                    result.append(line)

        return '\n'.join(result)

    @staticmethod
    def pyfile_warn_check(fpath, fname) -> bool:
        """
        检查某个py文件内是否有警告

        如果有的话，输出[Warn][{file_name}/{line_io}]{detail}

        Returns:
            bool: 是否有警告
        """
        # 文件路径检查
        if fpath.endswith('__init__.py'):
            print(Fore.RED + '\n[Error] ' + Fore.RESET + f'Not support __init__.py! Please remove it(the init file) and use from directory.xxx.py import xxxx instead.')
            sys.exit(-1)
        if fname in Compiler.PYFILE_IGNORE_CHECK_FNAMES:
            return False

        # # 文件内容检查
        content = Compiler.auto_read(fpath)
        warn_flag = False
        # 内容存在性检查
        for pat, detail in Compiler.PYFILE_EXIST_WARNING_CHECK.items():
            if not re.search(pat, content):
                warn_flag = True
                print(Fore.YELLOW + f'\n[Warn]' + Fore.RESET + f'[{fname}]: {detail}', end='')
        # 内容关键字检查
        for pat, detail in Compiler.PYFILE_WORD_WARNING_CHECK.items():
            for i, line in enumerate(content.split('\n')):
                m = re.search(pat, line)
                if m:
                    # 检查m前面同一行内是否有#，如果有则忽略
                    comment = re.search(r'#', line[:m.start()])

                    # 检查m后面同一行内是否有#\s*ignore;，如果有则忽略
                    ignore = re.search(r'#\s*>\s*ignore', line[m.end():])

                    if not comment and not ignore:
                        warn_flag = True
                        print(Fore.YELLOW + f'\n[Warn]' + Fore.RESET + f'[{fname}/line:{i + 1}]: {detail}', end='')
        return warn_flag

    def pre_compile(self):
        self.copy_to()

        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'preprocessing ...', end='')
        py_fpath, py_names, warn_flag = [], [], False
        for root, dirs, files in os.walk(self.build_dir):
            for file in files:
                if file.endswith('.py'):
                    fpath: str = str(os.path.join(root, file))
                    # 得到src目录后面的内容
                    rel_name = os.path.relpath(fpath, self.build_dir).replace('\\', '/')
                    py_names.append(rel_name.replace('/', '.'))
                    py_fpath.append(fpath)
                    warn_flag |= self.pyfile_warn_check(fpath, rel_name)
        if warn_flag:
            print()  # 换行

        _pre_import_, _pre_imp_detail_ = [], {}  # import
        _pre_sort_ = {}  # sort
        _pre_define_ = {}  # define
        _js_replace_, _insert_id_ = {}, 0  # insert

        # ----------------------------------- IMPORT ----------------------------------- #
        # 获取所有.py文件中的所有import的内容，并记录下来fname:[imp1, imp2, ...]
        for i, fpath in enumerate(py_fpath):
            fname = py_names[i][:-3] + '.js'
            content = self.auto_read(fpath)
            for i, line in enumerate(content.split('\n')):
                m = re.search(r'#\s*>\s*import\s+([^\n]+)', line)
                if m:
                    _pre_import_.append('./' + re.sub(r'\s', '', m.group(1)) + '.js')
                    # 记录文件/lineio信息
                    _pre_imp_detail_[_pre_import_[-1]] = f'{fname}/line:{i + 1}'

        # ----------------------------------- REMOVE ----------------------------------- #
        # 移除所有# > remove所在行的内容
        for fpath in py_fpath:
            content = self.auto_read(fpath)
            new_content = ""
            for line in content.split('\n'):
                if not re.search(r'#\s*>\s*remove', line):
                    new_content += line + '\n'

            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)

        # ------------------------------------ SORT ------------------------------------ #
        # 获取所有.py文件中的所有# sort的内容，并记录下来(不存在则默认为2^32-1)
        for i, fpath in enumerate(py_fpath):
            fname = py_names[i][:-3] + '.js'
            content = self.auto_read(fpath)
            m = re.search(r'#\s*>\s*sort\s+(\d+)', content)
            if m:
                try:
                    sort_num = int(m.group(1))
                except ValueError:
                    print(Fore.YELLOW + '[Warn] ' + Fore.RESET + f'sort number error: "{m.group(1)}", use 2^32-1 instead.')
                    sort_num = 4294967295
                _pre_sort_[fname] = sort_num
            else:
                _pre_sort_[fname] = 4294967295

        # ------------------------------------ DEFINE ------------------------------------ #
        # 扫描所有# define的内容，然后在.py中移除这些行，并记录下来
        for fpath in py_fpath:
            content = self.auto_read(fpath)
            new_content = ""
            for line in content.split('\n'):
                # re.compile(r'#\s*define\s+([^\s]+)\s+([^\n]*)')
                m = re.search(r'#\s*>\s*define\s+([^\s]+)\s+([^\n]*)', line)
                if m:
                    _pre_define_[m.group(1)] = m.group(2)
                    new_content += '\n'
                else:
                    new_content += line + '\n'

            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)

        # 按照keys的顺序，先用前面的key对应的内容去依次替换后面的key对应的value中
        _def_keys = list(_pre_define_.keys())
        _keys_len = len(_def_keys)
        for i in range(_keys_len - 1):
            for j in range(i + 1, _keys_len):
                _pre_define_[_def_keys[j]] = _pre_define_[_def_keys[j]].replace(_def_keys[i], _pre_define_[_def_keys[i]])

        # ------------------------------------ DEFINE:REPLACE ------------------------------------ #
        # 将刚才记录的define替换到.py中(注意优先替换更长的串)(因此先排序)
        _def_keys.sort(key=lambda x: len(x), reverse=True)
        for fpath in py_fpath:
            content = self.auto_read(fpath)

            # std.py PYSCREEPS_ARENA_PYTHON_VERSION replace
            if os.path.basename(fpath).lower() == 'std.py':
                content = content.replace('PYSCREEPS_ARENA_PYTHON_VERSION', f'\"{python_version}\"')

            for key in _def_keys:
                content = re.sub(r'[^_A-Za-z0-9]' + key, self._kfc_wrapper(_pre_define_[key]), content)

            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)

        # ------------------------------------ IF BLOCK ------------------------------------ #
        for fpath in py_fpath:
            content = self.auto_read(fpath)

            content = self.preprocess_if_block(content, _pre_define_)

            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)

        # ------------------------------------ INSERT ------------------------------------ #
        # 扫描所有# insert的内容，然后在.py中将整行替换为# __pragma__("js", __JS_INSERT_{id})
        for fpath in py_fpath:
            content = self.auto_read(fpath)
            new_content = ""
            for line in content.split('\n'):
                # re.compile(r'#\s*insert\s*([^\n]*)')
                # '# insert if(obj && obj.body) for(var p of obj.body) if (p.type == MOVE) return true;'
                m = re.search(r'#\s*>\s*insert\s+([^\n]*)', line)
                if m:
                    _sign_index_ = line.find('#')  # 必然存在
                    _js_key_ = f"__JS_INSERT_{_insert_id_:08d}"
                    _js_replace_[_js_key_] = m.group(1)

                    new_content += line[:_sign_index_] + f'# __pragma__("js", "{_js_key_}")\n'
                    _insert_id_ += 1
                else:
                    new_content += line + '\n'

            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)

        print(Fore.GREEN + '\r[2/6][Done] ' + Fore.RESET + 'preprocess finish.')

        return _pre_import_, _pre_imp_detail_, _pre_sort_, _pre_define_, _js_replace_

    def clear_not_generate_pyfile(self):
        """
        清空不需要编译的py文件
        :return:
        """
        for root, dirs, files in os.walk(self.build_dir):
            for file in files:
                if file.endswith('.py') and file in self.GENERATE_IGNORE_PYFILES:
                    with open(os.path.join(root, file), 'w', encoding='utf-8') as f:
                        f.write('')

    def transcrypt_cmd(self):
        # 执行cmd命令: transcrypt -b -m -n -s -e 6 target
        # 并获取cmd得到的输出
        cmd = 'transcrypt -b -m -n -s -e 6 %s' % self.target_py
        print(Fore.YELLOW + '>>> ' + Fore.RESET + f'"{cmd}" compiling ...', end='')
        p = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)
        stdout, stderr = p.communicate()
        if 'Error while compiling' in stdout.decode():
            print('\r' + stdout.decode())
            print(Fore.RED + '[Error] ' + Fore.RESET + 'transcrypt compile error')
            sys.exit(1)
        print('\r' + Fore.GREEN + '[3/6][Done] ' + Fore.RESET + f'"{cmd}" Ready.')

    @staticmethod
    def _keep_lbracket(matched) -> str:
        """
        如果第一个字符是{, 则返回'{'，否则返回''
        :param matched:
        :return:
        """
        return '{' if matched.group(0)[0] == '{' else ''

    @staticmethod
    def _keep_first_char(matched) -> str:
        """
        保留第一个字符
        :param matched:
        :return:
        """
        return matched.group(0)[0]

    @staticmethod
    def _kfc_wrapper(replace):
        """
        保留第一个字符
        :param replace:
        :return:
        """

        def _kfc(matched) -> str:
            return matched.group(0)[0] + replace

        return _kfc

    def analyze_rebuild_main_js(self, defs):
        """
        分析main.js中导入的模块名称和先后顺序, 并重新生成main.js
        * 主要移除非SYSTEM_MODULES_IGNORE中的模块导入语句
        :param defs: dict{define: value}
        :return: imports : str, modules (names: str)
        """

        # create undefined
        imports = ""

        if defs.get('USE_TUTORIAL_FLAG', '0') == '0' and defs.get('USE_ARENA_FLAG', '0') == '0':
            imports += 'var Flag = undefined;\n'
        if defs.get('USE_SCORE_COLLECTOR', '0') == '0':
            imports += 'var ScoreController = undefined;\nvar RESOURCE_SCORE = undefined;\n'
        imports += '\n'

        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'analyzing and rebuilding main.js ...', end='')

        content = self.auto_read(self.target_js)
        modules, new_content = [], ""
        for line in content.split('\n'):
            m = re.search(self.JS_IMPORT_PAT, line)
            if not m:
                new_content += line + '\n'
                continue
            # remove ignore if in SYSTEM_MODULES_IGNORE
            module = m.group(1)
            for ignore in self.SYSTEM_MODULES_IGNORE.get(module, []):
                line = re.sub(r'[\s{]' + ignore + ',?', self._keep_lbracket, line)

            # do not add in modules if in system_modules_ignores
            if module in self.SYSTEM_MODULES_IGNORE:
                if module in self.SYSTEM_MODULES_TRANSNAME:
                    line = line.replace(module, self.SYSTEM_MODULES_TRANSNAME[module])  # 调整为js中的名称
                imports += line + '\n'
                continue
            if module not in modules:
                modules.append(module)

        # save raw main.js
        with open(self.target_js[:-3] + ".raw.js", 'w', encoding='utf-8') as f:
            f.write(content)

        # write rebuild main.js
        with open(self.target_js, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(Fore.GREEN + '\r[4/6][Done] ' + Fore.RESET + 'analyze and rebuild main.js successfully.')

        return imports, modules

    @staticmethod
    def remove_js_import(raw) -> str:
        """
        移除js中的import行
        :param raw:
        :return:
        """
        return re.sub(r'import[^\n]*\n', '', raw)

    def generate_total_js(self, usr_modules, t_imps: dict, f_sorts, f_replaces, g_replaces) -> str:
        """
        生成总的main.js
        按照如下顺序组合:
            ./org.transcrypt.__runtime__.js
            ./game.const.js  # IGNORE
            ./game.proto.js  # IGNORE
            ./game.utils.js  # IGNORE
            {usr_modules}
        :param usr_modules: list[str]  # js vm + 用户自定义模块
        :param t_imps: dict{module_name: detail}
        :param f_sorts: dict{module_name: sort_priority}
        :param f_replaces: dict{module_name: dict{old: new}}
        :param g_replaces: dict{old: new}
        :return: str
        """
        total_js = ""

        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'generating total main.js ...', end='')

        # resort modules
        f_sorts[self.JS_VM] = -1

        err_flag = False
        for i, module in enumerate(usr_modules):
            if module[2:] not in f_sorts:
                if module[2:6] == 'src.' and module[6:] in f_sorts:
                    f_sorts[module[2:]] = f_sorts[module[6:]]
                    # 为了解决这样的问题:
                    # > import src.creeps.basic
                    # import src.creeps.basic
                else:
                    print(Fore.RED + '\n[Error] ' + Fore.RESET + f'"{module[2:-3]}.py" is not a user module.')
                    imp_detail = t_imps.get(module, None)
                    if imp_detail:
                        print("\t\t-- May be imported by user in: %s" % imp_detail)
                    else:
                        print("\t\t-- Please move this file into the 'src' directory.")
                    err_flag = True
        if err_flag:
            sys.exit(1)
        for i in range(len(usr_modules)):
            for j in range(i + 1, len(usr_modules)):
                if f_sorts[usr_modules[i][2:]] > f_sorts[usr_modules[j][2:]]:
                    usr_modules[i], usr_modules[j] = usr_modules[j], usr_modules[i]

        # write modules
        for module in usr_modules:
            content = self.auto_read(os.path.join(self.target_dir, module))
            content = self.remove_js_import(content)
            for old, new in f_replaces.get(module, {}).items():
                content = re.sub(old, new, content)
            for old, new in self.TRANSCRYPT_ERROR_REPLACE.items():
                content = re.sub(old, new, content)
            total_js += f"\n// ---------------------------------------- Module:{module} "
            total_js += "----------------------------------------\n\n"
            total_js += content + '\n'

        # write main.js
        content = self.auto_read(self.target_js)
        for old, new in self.TRANSCRYPT_ERROR_REPLACE.items():
            content = re.sub(old, new, content)
        total_js += content

        # global replace
        for old, new in g_replaces.items():
            total_js = re.sub(old, new, total_js)

        print(Fore.GREEN + '\r[5/6][Done] ' + Fore.RESET + 'generate total main.js successfully.')

        return total_js

    def compile(self, export_to=None, paste=False):
        """
        编译
        :param export_to: 指定main.mjs的输出路径(/main.mjs)
        :param paste: 是否复制到剪贴板
        :return:
        """
        imps, imp_ts, sorts, defs, reps = self.pre_compile()
        self.clear_not_generate_pyfile()  # 清空不需要编译的py文件(请确保在pre_compile之后)
        self.transcrypt_cmd()
        imports, modules = self.analyze_rebuild_main_js(defs)
        total_js = imports + "\n" + self.generate_total_js(list(set(modules + imps)), imp_ts, sorts, self.FILE_STRONG_REPLACE, reps)

        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'exporting total main.js ...', end='')

        # ensure exported main.mjs path
        build_main_mjs = os.path.join(self.build_dir, 'main.mjs')

        if not export_to:
            # 尝试读取defs
            mjs_path = defs.get('MAIN_JS_PATH', build_main_mjs)
        else:
            mjs_path = export_to

        if not mjs_path.endswith('js'):
            mjs_path = os.path.join(mjs_path, 'main.mjs')

        # write main.mjs
        with open(build_main_mjs, 'w', encoding='utf-8') as f:
            f.write(total_js)

        # export main.mjs
        dir_path = os.path.dirname(mjs_path)
        if not os.path.exists(dir_path):
            print(Fore.RED + '\n[Error] ' + Fore.RESET + f'export dir path not exists: {dir_path}')
            sys.exit(1)
        with open(mjs_path, 'w', encoding='utf-8') as f:
            f.write(total_js)

        print(Fore.GREEN + '\r[6/6][Done] ' + Fore.RESET + 'export total main.js successfully.')

        if mjs_path != build_main_mjs:
            print(Fore.LIGHTBLUE_EX + '[Info] ' + Fore.RESET + f'usr export to {mjs_path}')

        # copy to clipboard
        if paste:
            pyperclip.copy(total_js)
            print(Fore.GREEN + '[Done] ' + Fore.RESET + 'copy to clipboard')

    def clean(self):
        """
        清除build目录下除了main.mjs之外的所有文件和目录
        * 先复制main.mjs到src目录下，然后删除build目录，再将main.mjs剪切回build目录
        :return:
        """
        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'clean build dir ...', end='')
        if not os.path.exists(self.build_dir):
            print(Fore.RED + '\r[Error] ' + Fore.RESET + 'build dir not exists')
            return

        if not os.path.exists(os.path.join(self.build_dir, 'main.mjs')):
            print(Fore.RED + '\r[Error] ' + Fore.RESET + 'main.mjs not exists')
            return

        # copy main.mjs to src
        shutil.copy(os.path.join(self.build_dir, 'main.mjs'), os.path.join(self.src_dir, 'main.mjs'))

        # remove build dir
        shutil.rmtree(self.build_dir)

        # create build dir
        os.makedirs(self.build_dir)

        # move main.mjs to build dir
        shutil.move(os.path.join(self.src_dir, 'main.mjs'), os.path.join(self.build_dir, 'main.mjs'))

        print(Fore.GREEN + '\r[Done] ' + Fore.RESET + 'clean build dir')

    def clear(self):
        """
        清除build目录下所有文件和目录
        :return:
        """
        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'clear build dir ...', end='')
        if not os.path.exists(self.build_dir):
            print(Fore.RED + '\r[Error] ' + Fore.RESET + 'build dir not exists')
            return

        shutil.rmtree(self.build_dir)
        os.makedirs(self.build_dir)

        print(Fore.GREEN + '\r[Done] ' + Fore.RESET + 'clear build dir')


if __name__ == '__main__':
    compiler = Compiler('src', 'build')

    compiler.compile()
    compiler.clean()
