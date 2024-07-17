var Flag = undefined;
var ScoreController = undefined;
var RESOURCE_SCORE = undefined;

import { createConstructionSite, findClosestByPath, findClosestByRange, findInRange, findPath, getCpuTime, getDirection, getHeapStatistics, getObjectById, getObjects, getObjectsByPrototype, getRange, getTerrainAt, getTicks,} from 'game/utils';
import { ConstructionSite, Creep, GameObject, OwnedStructure, Resource, Source, Structure, StructureContainer, StructureExtension, StructureRampart, StructureRoad, StructureSpawn, StructureTower, StructureWall,} from 'game/prototypes';
import {ATTACK, ATTACK_POWER, BODYPART_COST, BODYPART_HITS, BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, BUILD_POWER, CARRY, CARRY_CAPACITY, CONSTRUCTION_COST, CONSTRUCTION_COST_ROAD_SWAMP_RATIO, CONSTRUCTION_COST_ROAD_WALL_RATIO, CONTAINER_CAPACITY, CONTAINER_HITS, CREEP_SPAWN_TIME, DISMANTLE_COST, DISMANTLE_POWER, ERR_BUSY, ERR_FULL, ERR_INVALID_ARGS, ERR_INVALID_TARGET, ERR_NAME_EXISTS, ERR_NOT_ENOUGH_ENERGY, ERR_NOT_ENOUGH_EXTENSIONS, ERR_NOT_ENOUGH_RESOURCES, ERR_NOT_FOUND, ERR_NOT_IN_RANGE, ERR_NOT_OWNER, ERR_NO_BODYPART, ERR_NO_PATH, ERR_TIRED, EXTENSION_ENERGY_CAPACITY, EXTENSION_HITS, HARVEST_POWER, HEAL, HEAL_POWER, LEFT, MAX_CONSTRUCTION_SITES, MAX_CREEP_SIZE, MOVE, OBSTACLE_OBJECT_TYPES, OK, RAMPART_HITS, RAMPART_HITS_MAX, RANGED_ATTACK, RANGED_ATTACK_DISTANCE_RATE, RANGED_ATTACK_POWER, RANGED_HEAL_POWER, REPAIR_COST, REPAIR_POWER, RESOURCES_ALL, RESOURCE_DECAY, RESOURCE_ENERGY, RIGHT, ROAD_HITS, ROAD_WEAROUT, SOURCE_ENERGY_REGEN, SPAWN_ENERGY_CAPACITY, SPAWN_HITS, STRUCTURE_PROTOTYPES, TERRAIN_PLAIN, TERRAIN_SWAMP, TERRAIN_WALL, TOP, TOP_LEFT, TOP_RIGHT, TOUGH, TOWER_CAPACITY, TOWER_COOLDOWN, TOWER_ENERGY_COST, TOWER_FALLOFF, TOWER_FALLOFF_RANGE, TOWER_HITS, TOWER_OPTIMAL_RANGE, TOWER_POWER_ATTACK, TOWER_POWER_HEAL, TOWER_POWER_REPAIR, TOWER_RANGE, WALL_HITS, WALL_HITS_MAX, WORK} from 'game/constants';


// ---------------------------------------- Module:./org.transcrypt.__runtime__.js ----------------------------------------

// Transcrypt'ed from Python, 2024-07-17 17:38:12
var __name__ = 'org.transcrypt.__runtime__';
export var __envir__ = {};
__envir__.interpreter_name = 'python';
__envir__.transpiler_name = 'transcrypt';
__envir__.executor_name = __envir__.transpiler_name;
__envir__.transpiler_version = '3.9.0';

export function __nest__ (headObject, tailNames, value) {
    var current = headObject;
    if (tailNames != '') {
        var tailChain = tailNames.split ('.');
        var firstNewIndex = tailChain.length;
        for (var index = 0; index < tailChain.length; index++) {
            if (!current.hasOwnProperty (tailChain [index])) {
                firstNewIndex = index;
                break;
            }
            current = current [tailChain [index]];
        }
        for (var index = firstNewIndex; index < tailChain.length; index++) {
            current [tailChain [index]] = {};
            current = current [tailChain [index]];
        }
    }
    for (let attrib of Object.getOwnPropertyNames (value)) {
        Object.defineProperty (current, attrib, {
            get () {return value [attrib];},
            enumerable: true,
            configurable: true
        });
    }
};
export function __init__ (module) {
    if (!module.__inited__) {
        module.__all__.__init__ (module.__all__);
        module.__inited__ = true;
    }
    return module.__all__;
};
export function __get__ (aThis, func, quotedFuncName) {
    if (aThis) {
        if (aThis.hasOwnProperty ('__class__') || typeof aThis == 'string' || aThis instanceof String) {
            if (quotedFuncName) {
                Object.defineProperty (aThis, quotedFuncName, {
                    value: function () {
                        var args = [] .slice.apply (arguments);
                        return func.apply (null, [aThis] .concat (args));
                    },
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [aThis.__proxy__ ? aThis.__proxy__ : aThis] .concat (args));
            };
        }
        else {
            return func;
        }
    }
    else {
        return func;
    }
};
export function __getcm__ (aThis, func, quotedFuncName) {
    if (aThis.hasOwnProperty ('__class__')) {
        return function () {
            var args = [] .slice.apply (arguments);
            return func.apply (null, [aThis.__class__] .concat (args));
        };
    }
    else {
        return function () {
            var args = [] .slice.apply (arguments);
            return func.apply (null, [aThis] .concat (args));
        };
    }
};
export function __getsm__ (aThis, func, quotedFuncName) {
    return func;
};
export var py_metatype = {
    __name__: 'type',
    __bases__: [],
    __new__: function (meta, name, bases, attribs) {
        var cls = function () {
            var args = [] .slice.apply (arguments);
            return cls.__new__ (args);
        };
        for (var index = bases.length - 1; index >= 0; index--) {
            var base = bases [index];
            for (var attrib in base) {
                var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                if (descrip == null) {
                    continue;
                }
                Object.defineProperty (cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols (base)) {
                let descrip = Object.getOwnPropertyDescriptor (base, symbol);
                Object.defineProperty (cls, symbol, descrip);
            }
        }
        cls.__metaclass__ = meta;
        cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
        cls.__bases__ = bases;
        for (var attrib in attribs) {
            var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
            Object.defineProperty (cls, attrib, descrip);
        }
        for (let symbol of Object.getOwnPropertySymbols (attribs)) {
            let descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
            Object.defineProperty (cls, symbol, descrip);
        }
        return cls;
    }
};
py_metatype.__metaclass__ = py_metatype;
export var object = {
    __init__: function (self) {},
    __metaclass__: py_metatype,
    __name__: 'object',
    __bases__: [],
    __new__: function (args) {
        var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
        if ('__getattr__' in this || '__setattr__' in this) {
            instance.__proxy__ = new Proxy (instance, {
                get: function (target, name) {
                    let result = target [name];
                    if (result == undefined) {
                        return target.__getattr__ (name);
                    }
                    else {
                        return result;
                    }
                },
                set: function (target, name, value) {
                    try {
                        target.__setattr__ (name, value);
                    }
                    catch (exception) {
                        target [name] = value;
                    }
                    return true;
                }
            })
			instance = instance.__proxy__
        }
        this.__init__.apply (null, [instance] .concat (args));
        return instance;
    }
};
export function __class__ (name, bases, attribs, meta) {
    if (meta === undefined) {
        meta = bases [0] .__metaclass__;
    }
    return meta.__new__ (meta, name, bases, attribs);
};
export function __pragma__ () {};
export function __call__ (/* <callee>, <this>, <params>* */) {
    var args = [] .slice.apply (arguments);
    if (typeof args [0] == 'object' && '__call__' in args [0]) {
        return args [0] .__call__ .apply (args [1], args.slice (2));
    }
    else {
        return args [0] .apply (args [1], args.slice (2));
    }
};
__envir__.executor_name = __envir__.transpiler_name;
var __main__ = {__file__: ''};
var __except__ = null;
export function __kwargtrans__ (anObject) {
    anObject.__kwargtrans__ = null;
    anObject.constructor = Object;
    return anObject;
}
export function __super__ (aClass, methodName) {
    for (let base of aClass.__bases__) {
        if (methodName in base) {
           return base [methodName];
        }
    }
    throw new Exception ('Superclass method not found');
}
export function property (getter, setter) {
    if (!setter) {
        setter = function () {};
    }
    return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
}
export function __setproperty__ (anObject, name, descriptor) {
    if (!anObject.hasOwnProperty (name)) {
        Object.defineProperty (anObject, name, descriptor);
    }
}
export function assert (condition, message) {
    if (!condition) {
        throw AssertionError (message, new Error ());
    }
}
export function __mergekwargtrans__ (object0, object1) {
    var result = {};
    for (var attrib in object0) {
        result [attrib] = object0 [attrib];
    }
    for (var attrib in object1) {
        result [attrib] = object1 [attrib];
    }
    return result;
};
export function __mergefields__ (targetClass, sourceClass) {
    let fieldNames = ['__reprfields__', '__comparefields__', '__initfields__']
    if (sourceClass [fieldNames [0]]) {
        if (targetClass [fieldNames [0]]) {
            for (let fieldName of fieldNames) {
                targetClass [fieldName] = new Set ([...targetClass [fieldName], ...sourceClass [fieldName]]);
            }
        }
        else {
            for (let fieldName of fieldNames) {
                targetClass [fieldName] = new Set (sourceClass [fieldName]);
            }
        }
    }
}
export function __withblock__ (manager, statements) {
    if (hasattr (manager, '__enter__')) {
        try {
            manager.__enter__ ();
            statements ();
            manager.__exit__ ();
        }
        catch (exception) {
            if (! (manager.__exit__ (exception.name, exception, exception.stack))) {
                throw exception;
            }
        }
    }
    else {
        statements ();
        manager.close ();
    }
};
export function dir (obj) {
    var aList = [];
    for (var aKey in obj) {
        aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
    }
    aList.sort ();
    return aList;
};
export function setattr (obj, name, value) {
    obj [name] = value;
};
export function getattr (obj, name) {
    return name in obj ? obj [name] : obj ['py_' + name];
};
export function hasattr (obj, name) {
    try {
        return name in obj || 'py_' + name in obj;
    }
    catch (exception) {
        return false;
    }
};
export function delattr (obj, name) {
    if (name in obj) {
        delete obj [name];
    }
    else {
        delete obj ['py_' + name];
    }
};
export function __in__ (element, container) {
    if (container === undefined || container === null) {
        return false;
    }
    if (container.__contains__ instanceof Function) {
        return container.__contains__ (element);
    }
    else {
        return (
            container.indexOf ?
            container.indexOf (element) > -1 :
            container.hasOwnProperty (element)
        );
    }
};
export function __specialattrib__ (attrib) {
    return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
};
export function len (anObject) {
    if (anObject === undefined || anObject === null) {
        return 0;
    }
    if (anObject.__len__ instanceof Function) {
        return anObject.__len__ ();
    }
    if (anObject.length !== undefined) {
        return anObject.length;
    }
    var length = 0;
    for (var attr in anObject) {
        if (!__specialattrib__ (attr)) {
            length++;
        }
    }
    return length;
};
export function __i__ (any) {
    return py_typeof (any) == dict ? any.py_keys () : any;
}
export function __k__ (keyed, key) {
    var result = keyed [key];
    if (typeof result == 'undefined') {
        if (keyed instanceof Array)
            if (key == +key && key >= 0 && keyed.length > key)
                return result;
            else
                throw IndexError (key, new Error());
        else
            throw KeyError (key, new Error());
    }
    return result;
}
export function __t__ (target) {
    return (
        target === undefined || target === null ? false :
        ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
        target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
        target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
        target instanceof Function ? target :
        len (target) !== 0 ? target :
        false
    );
}
export function float (any) {
    if (any == 'inf') {
        return Infinity;
    }
    else if (any == '-inf') {
        return -Infinity;
    }
    else if (any == 'nan') {
        return NaN;
    }
    else if (isNaN (parseFloat (any))) {
        if (any === false) {
            return 0;
        }
        else if (any === true) {
            return 1;
        }
        else {
            throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
        }
    }
    else {
        return +any;
    }
};
float.__name__ = 'float';
float.__bases__ = [object];
export function int (any) {
    return float (any) | 0
};
int.__name__ = 'int';
int.__bases__ = [object];
export function bool (any) {
    return !!__t__ (any);
};
bool.__name__ = 'bool';
bool.__bases__ = [int];
export function py_typeof (anObject) {
    var aType = typeof anObject;
    if (aType == 'object') {
        try {
            return '__class__' in anObject ? anObject.__class__ : object;
        }
        catch (exception) {
            return aType;
        }
    }
    else {
        return (
            aType == 'boolean' ? bool :
            aType == 'string' ? str :
            aType == 'number' ? (anObject % 1 == 0 ? int : float) :
            null
        );
    }
};
export function issubclass (aClass, classinfo) {
    if (classinfo instanceof Array) {
        for (let aClass2 of classinfo) {
            if (issubclass (aClass, aClass2)) {
                return true;
            }
        }
        return false;
    }
    try {
        var aClass2 = aClass;
        if (aClass2 == classinfo) {
            return true;
        }
        else {
            var bases = [].slice.call (aClass2.__bases__);
            while (bases.length) {
                aClass2 = bases.shift ();
                if (aClass2 == classinfo) {
                    return true;
                }
                if (aClass2.__bases__.length) {
                    bases = [].slice.call (aClass2.__bases__).concat (bases);
                }
            }
            return false;
        }
    }
    catch (exception) {
        return aClass == classinfo || classinfo == object;
    }
};
export function isinstance (anObject, classinfo) {
    try {
        return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
    }
    catch (exception) {
        return issubclass (py_typeof (anObject), classinfo);
    }
};
export function callable (anObject) {
    return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
};
export function repr (anObject) {
    try {
        return anObject.__repr__ ();
    }
    catch (exception) {
        try {
            return anObject.__str__ ();
        }
        catch (exception) {
            try {
                if (anObject == null) {
                    return 'None';
                }
                else if (anObject.constructor == Object) {
                    var result = '{';
                    var comma = false;
                    for (var attrib in anObject) {
                        if (!__specialattrib__ (attrib)) {
                            if (attrib.isnumeric ()) {
                                var attribRepr = attrib;
                            }
                            else {
                                var attribRepr = '\'' + attrib + '\'';
                            }
                            if (comma) {
                                result += ', ';
                            }
                            else {
                                comma = true;
                            }
                            result += attribRepr + ': ' + repr (anObject [attrib]);
                        }
                    }
                    result += '}';
                    return result;
                }
                else {
                    return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                }
            }
            catch (exception) {
                return '<object of type: ' + typeof anObject + '>';
            }
        }
    }
};
export function chr (charCode) {
    return String.fromCharCode (charCode);
};
export function ord (aChar) {
    return aChar.charCodeAt (0);
};
export function max (nrOrSeq) {
    return arguments.length == 1 ? Math.max (...nrOrSeq) : Math.max (...arguments);
};
export function min (nrOrSeq) {
    return arguments.length == 1 ? Math.min (...nrOrSeq) : Math.min (...arguments);
};
export var abs = Math.abs;
export function round (number, ndigits) {
    if (ndigits) {
        var scale = Math.pow (10, ndigits);
        number *= scale;
    }
    var rounded = Math.round (number);
    if (rounded - number == 0.5 && rounded % 2) {
        rounded -= 1;
    }
    if (ndigits) {
        rounded /= scale;
    }
    return rounded;
};
export function __jsUsePyNext__ () {
    try {
        var result = this.__next__ ();
        return {value: result, done: false};
    }
    catch (exception) {
        return {value: undefined, done: true};
    }
}
export function __pyUseJsNext__ () {
    var result = this.next ();
    if (result.done) {
        throw StopIteration (new Error ());
    }
    else {
        return result.value;
    }
}
export function py_iter (iterable) {
    if (typeof iterable == 'string' || '__iter__' in iterable) {
        var result = iterable.__iter__ ();
        result.next = __jsUsePyNext__;
    }
    else if ('selector' in iterable) {
        var result = list (iterable) .__iter__ ();
        result.next = __jsUsePyNext__;
    }
    else if ('next' in iterable) {
        var result = iterable
        if (! ('__next__' in result)) {
            result.__next__ = __pyUseJsNext__;
        }
    }
    else if (Symbol.iterator in iterable) {
        var result = iterable [Symbol.iterator] ();
        result.__next__ = __pyUseJsNext__;
    }
    else {
        throw IterableError (new Error ());
    }
    result [Symbol.iterator] = function () {return result;};
    return result;
}
export function py_next (iterator) {
    try {
        var result = iterator.__next__ ();
    }
    catch (exception) {
        var result = iterator.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    if (result == undefined) {
        throw StopIteration (new Error ());
    }
    else {
        return result;
    }
}
export function __PyIterator__ (iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__PyIterator__.prototype.__next__ = function() {
    if (this.index < this.iterable.length) {
        return this.iterable [this.index++];
    }
    else {
        throw StopIteration (new Error ());
    }
};
export function __JsIterator__ (iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__JsIterator__.prototype.next = function () {
    if (this.index < this.iterable.py_keys.length) {
        return {value: this.index++, done: false};
    }
    else {
        return {value: undefined, done: true};
    }
};
export function py_reversed (iterable) {
    iterable = iterable.slice ();
    iterable.reverse ();
    return iterable;
};
export function zip () {
    var args = [] .slice.call (arguments);
    for (var i = 0; i < args.length; i++) {
        if (typeof args [i] == 'string') {
            args [i] = args [i] .split ('');
        }
        else if (!Array.isArray (args [i])) {
            args [i] = Array.from (args [i]);
        }
    }
    var shortest = args.length == 0 ? [] : args.reduce (
        function (array0, array1) {
            return array0.length < array1.length ? array0 : array1;
        }
    );
    return shortest.map (
        function (current, index) {
            return args.map (
                function (current) {
                    return current [index];
                }
            );
        }
    );
};
export function range (start, stop, step) {
    if (stop == undefined) {
        stop = start;
        start = 0;
    }
    if (step == undefined) {
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
};
export function any (iterable) {
    for (let item of iterable) {
        if (bool (item)) {
            return true;
        }
    }
    return false;
}
export function all (iterable) {
    for (let item of iterable) {
        if (! bool (item)) {
            return false;
        }
    }
    return true;
}
export function sum (iterable) {
    let result = 0;
    for (let item of iterable) {
        result += item;
    }
    return result;
}
export function enumerate (iterable) {
    return zip (range (len (iterable)), iterable);
}
export function copy (anObject) {
    if (anObject == null || typeof anObject == "object") {
        return anObject;
    }
    else {
        var result = {};
        for (var attrib in obj) {
            if (anObject.hasOwnProperty (attrib)) {
                result [attrib] = anObject [attrib];
            }
        }
        return result;
    }
}
export function deepcopy (anObject) {
    if (anObject == null || typeof anObject == "object") {
        return anObject;
    }
    else {
        var result = {};
        for (var attrib in obj) {
            if (anObject.hasOwnProperty (attrib)) {
                result [attrib] = deepcopy (anObject [attrib]);
            }
        }
        return result;
    }
}
export function list (iterable) {
    let instance = iterable ? Array.from (iterable) : [];
    return instance;
}
Array.prototype.__class__ = list;
list.__name__ = 'list';
list.__bases__ = [object];
Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
Array.prototype.__getslice__ = function (start, stop, step) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    else if (stop > this.length) {
        stop = this.length;
    }
    if (step == 1) {
        return Array.prototype.slice.call(this, start, stop);
    }
    let result = list ([]);
    for (let index = start; index < stop; index += step) {
        result.push (this [index]);
    }
    return result;
};
Array.prototype.__setslice__ = function (start, stop, step, source) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    if (step == null) {
        Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
    }
    else {
        let sourceIndex = 0;
        for (let targetIndex = start; targetIndex < stop; targetIndex += step) {
            this [targetIndex] = source [sourceIndex++];
        }
    }
};
Array.prototype.__repr__ = function () {
    if (this.__class__ == set && !this.length) {
        return 'set()';
    }
    let result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
    for (let index = 0; index < this.length; index++) {
        if (index) {
            result += ', ';
        }
        result += repr (this [index]);
    }
    if (this.__class__ == tuple && this.length == 1) {
        result += ',';
    }
    result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
    return result;
};
Array.prototype.__str__ = Array.prototype.__repr__;
Array.prototype.append = function (element) {
    this.push (element);
};
Array.prototype.py_clear = function () {
    this.length = 0;
};
Array.prototype.extend = function (aList) {
    this.push.apply (this, aList);
};
Array.prototype.insert = function (index, element) {
    this.splice (index, 0, element);
};
Array.prototype.remove = function (element) {
    let index = this.indexOf (element);
    if (index == -1) {
        throw ValueError ("list.remove(x): x not in list", new Error ());
    }
    this.splice (index, 1);
};
Array.prototype.index = function (element) {
    return this.indexOf (element);
};
Array.prototype.py_pop = function (index) {
    if (index == undefined) {
        return this.pop ();
    }
    else {
        return this.splice (index, 1) [0];
    }
};
Array.prototype.py_sort = function () {
    __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
};
Array.prototype.__add__ = function (aList) {
    return list (this.concat (aList));
};
Array.prototype.__mul__ = function (scalar) {
    let result = this;
    for (let i = 1; i < scalar; i++) {
        result = result.concat (this);
    }
    return result;
};
Array.prototype.__rmul__ = Array.prototype.__mul__;
export function tuple (iterable) {
    let instance = iterable ? [] .slice.apply (iterable) : [];
    instance.__class__ = tuple;
    return instance;
}
tuple.__name__ = 'tuple';
tuple.__bases__ = [object];
export function set (iterable) {
    let instance = [];
    if (iterable) {
        for (let index = 0; index < iterable.length; index++) {
            instance.add (iterable [index]);
        }
    }
    instance.__class__ = set;
    return instance;
}
set.__name__ = 'set';
set.__bases__ = [object];
Array.prototype.__bindexOf__ = function (element) {
    element += '';
    let mindex = 0;
    let maxdex = this.length - 1;
    while (mindex <= maxdex) {
        let index = (mindex + maxdex) / 2 | 0;
        let middle = this [index] + '';
        if (middle < element) {
            mindex = index + 1;
        }
        else if (middle > element) {
            maxdex = index - 1;
        }
        else {
            return index;
        }
    }
    return -1;
};
Array.prototype.add = function (element) {
    if (this.indexOf (element) == -1) {
        this.push (element);
    }
};
Array.prototype.discard = function (element) {
    var index = this.indexOf (element);
    if (index != -1) {
        this.splice (index, 1);
    }
};
Array.prototype.isdisjoint = function (other) {
    this.sort ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) != -1) {
            return false;
        }
    }
    return true;
};
Array.prototype.issuperset = function (other) {
    this.sort ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) == -1) {
            return false;
        }
    }
    return true;
};
Array.prototype.issubset = function (other) {
    return set (other.slice ()) .issuperset (this);
};
Array.prototype.union = function (other) {
    let result = set (this.slice () .sort ());
    for (let i = 0; i < other.length; i++) {
        if (result.__bindexOf__ (other [i]) == -1) {
            result.push (other [i]);
        }
    }
    return result;
};
Array.prototype.intersection = function (other) {
    this.sort ();
    let result = set ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) != -1) {
            result.push (other [i]);
        }
    }
    return result;
};
Array.prototype.difference = function (other) {
    let sother = set (other.slice () .sort ());
    let result = set ();
    for (let i = 0; i < this.length; i++) {
        if (sother.__bindexOf__ (this [i]) == -1) {
            result.push (this [i]);
        }
    }
    return result;
};
Array.prototype.symmetric_difference = function (other) {
    return this.union (other) .difference (this.intersection (other));
};
Array.prototype.py_update = function () {
    let updated = [] .concat.apply (this.slice (), arguments) .sort ();
    this.py_clear ();
    for (let i = 0; i < updated.length; i++) {
        if (updated [i] != updated [i - 1]) {
            this.push (updated [i]);
        }
    }
};
Array.prototype.__eq__ = function (other) {
    if (this.length != other.length) {
        return false;
    }
    if (this.__class__ == set) {
        this.sort ();
        other.sort ();
    }
    for (let i = 0; i < this.length; i++) {
        if (this [i] != other [i]) {
            return false;
        }
    }
    return true;
};
Array.prototype.__ne__ = function (other) {
    return !this.__eq__ (other);
};
Array.prototype.__le__ = function (other) {
    if (this.__class__ == set) {
        return this.issubset (other);
    }
    else {
        for (let i = 0; i < this.length; i++) {
            if (this [i] > other [i]) {
                return false;
            }
            else if (this [i] < other [i]) {
                return true;
            }
        }
        return true;
    }
};
Array.prototype.__ge__ = function (other) {
    if (this.__class__ == set) {
        return this.issuperset (other);
    }
    else {
        for (let i = 0; i < this.length; i++) {
            if (this [i] < other [i]) {
                return false;
            }
            else if (this [i] > other [i]) {
                return true;
            }
        }
        return true;
    }
};
Array.prototype.__lt__ = function (other) {
    return (
        this.__class__ == set ?
        this.issubset (other) && !this.issuperset (other) :
        !this.__ge__ (other)
    );
};
Array.prototype.__gt__ = function (other) {
    return (
        this.__class__ == set ?
        this.issuperset (other) && !this.issubset (other) :
        !this.__le__ (other)
    );
};
export function bytearray (bytable, encoding) {
    if (bytable == undefined) {
        return new Uint8Array (0);
    }
    else {
        let aType = py_typeof (bytable);
        if (aType == int) {
            return new Uint8Array (bytable);
        }
        else if (aType == str) {
            let aBytes = new Uint8Array (len (bytable));
            for (let i = 0; i < len (bytable); i++) {
                aBytes [i] = bytable.charCodeAt (i);
            }
            return aBytes;
        }
        else if (aType == list || aType == tuple) {
            return new Uint8Array (bytable);
        }
        else {
            throw py_TypeError;
        }
    }
}
export var bytes = bytearray;
Uint8Array.prototype.__add__ = function (aBytes) {
    let result = new Uint8Array (this.length + aBytes.length);
    result.set (this);
    result.set (aBytes, this.length);
    return result;
};
Uint8Array.prototype.__mul__ = function (scalar) {
    let result = new Uint8Array (scalar * this.length);
    for (let i = 0; i < scalar; i++) {
        result.set (this, i * this.length);
    }
    return result;
};
Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
export function str (stringable) {
    if (typeof stringable === 'number')
        return stringable.toString();
    else {
        try {
            return stringable.__str__ ();
        }
        catch (exception) {
            try {
                return repr (stringable);
            }
            catch (exception) {
                return String (stringable);
            }
        }
    }
};
String.prototype.__class__ = str;
str.__name__ = 'str';
str.__bases__ = [object];
String.prototype.__iter__ = function () {new __PyIterator__ (this);};
String.prototype.__repr__ = function () {
    return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
};
String.prototype.__str__ = function () {
    return this;
};
String.prototype.capitalize = function () {
    return this.charAt (0).toUpperCase () + this.slice (1);
};
String.prototype.endswith = function (suffix) {
    if (suffix instanceof Array) {
        for (var i=0;i<suffix.length;i++) {
            if (this.slice (-suffix[i].length) == suffix[i])
                return true;
        }
    } else
        return suffix == '' || this.slice (-suffix.length) == suffix;
    return false;
};
String.prototype.find = function (sub, start) {
    return this.indexOf (sub, start);
};
String.prototype.__getslice__ = function (start, stop, step) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    var result = '';
    if (step == 1) {
        result = this.substring (start, stop);
    }
    else {
        for (var index = start; index < stop; index += step) {
            result = result.concat (this.charAt(index));
        }
    }
    return result;
};
__setproperty__ (String.prototype, 'format', {
    get: function () {return __get__ (this, function (self) {
        var args = tuple ([] .slice.apply (arguments).slice (1));
        var autoIndex = 0;
        return self.replace (/\{(\w*)\}/g, function (match, key) {
            if (key == '') {
                key = autoIndex++;
            }
            if (key == +key) {
                return args [key] === undefined ? match : str (args [key]);
            }
            else {
                for (var index = 0; index < args.length; index++) {
                    if (typeof args [index] == 'object' && args [index][key] !== undefined) {
                        return str (args [index][key]);
                    }
                }
                return match;
            }
        });
    });},
    enumerable: true
});
String.prototype.isalnum = function () {
    return /^[0-9a-zA-Z]{1,}$/.test(this)
}
String.prototype.isalpha = function () {
    return /^[a-zA-Z]{1,}$/.test(this)
}
String.prototype.isdecimal = function () {
    return /^[0-9]{1,}$/.test(this)
}
String.prototype.isdigit = function () {
    return this.isdecimal()
}
String.prototype.islower = function () {
    return /^[a-z]{1,}$/.test(this)
}
String.prototype.isupper = function () {
    return /^[A-Z]{1,}$/.test(this)
}
String.prototype.isspace = function () {
    return /^[\s]{1,}$/.test(this)
}
String.prototype.isnumeric = function () {
    return !isNaN (parseFloat (this)) && isFinite (this);
};
String.prototype.join = function (strings) {
    strings = Array.from (strings);
    return strings.join (this);
};
String.prototype.lower = function () {
    return this.toLowerCase ();
};
String.prototype.py_replace = function (old, aNew, maxreplace) {
    return this.split (old, maxreplace) .join (aNew);
};
String.prototype.lstrip = function () {
    return this.replace (/^\s*/g, '');
};
String.prototype.rfind = function (sub, start) {
    return this.lastIndexOf (sub, start);
};
String.prototype.rsplit = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            var maxrsplit = result.length - maxsplit;
            return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
        }
        else {
            return result;
        }
    }
};
String.prototype.rstrip = function () {
    return this.replace (/\s*$/g, '');
};
String.prototype.py_split = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
        }
        else {
            return result;
        }
    }
};
String.prototype.startswith = function (prefix) {
    if (prefix instanceof Array) {
        for (var i=0;i<prefix.length;i++) {
            if (this.indexOf (prefix [i]) == 0)
                return true;
        }
    } else
        return this.indexOf (prefix) == 0;
    return false;
};
String.prototype.strip = function () {
    return this.trim ();
};
String.prototype.upper = function () {
    return this.toUpperCase ();
};
String.prototype.__mul__ = function (scalar) {
    var result = '';
    for (var i = 0; i < scalar; i++) {
        result = result + this;
    }
    return result;
};
String.prototype.__rmul__ = String.prototype.__mul__;
function __contains__ (element) {
    return this.hasOwnProperty (element);
}
function __keys__ () {
    var keys = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            keys.push (attrib);
        }
    }
    return keys;
}
function __items__ () {
    var items = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            items.push ([attrib, this [attrib]]);
        }
    }
    return items;
}
function __del__ (key) {
    delete this [key];
}
function __clear__ () {
    for (var attrib in this) {
        delete this [attrib];
    }
}
function __getdefault__ (aKey, aDefault) {
    var result = this [aKey];
    if (result == undefined) {
        result = this ['py_' + aKey]
    }
    return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
}
function __setdefault__ (aKey, aDefault) {
    var result = this [aKey];
    if (result != undefined) {
        return result;
    }
    var val = aDefault == undefined ? null : aDefault;
    this [aKey] = val;
    return val;
}
function __pop__ (aKey, aDefault) {
    var result = this [aKey];
    if (result != undefined) {
        delete this [aKey];
        return result;
    } else {
        if ( aDefault === undefined ) {
            throw KeyError (aKey, new Error());
        }
    }
    return aDefault;
}
function __popitem__ () {
    var aKey = Object.keys (this) [0];
    if (aKey == null) {
        throw KeyError ("popitem(): dictionary is empty", new Error ());
    }
    var result = tuple ([aKey, this [aKey]]);
    delete this [aKey];
    return result;
}
function __update__ (aDict) {
    for (var aKey in aDict) {
        this [aKey] = aDict [aKey];
    }
}
function __values__ () {
    var values = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            values.push (this [attrib]);
        }
    }
    return values;
}
function __dgetitem__ (aKey) {
    return this [aKey];
}
function __dsetitem__ (aKey, aValue) {
    this [aKey] = aValue;
}
export function dict (objectOrPairs) {
    var instance = {};
    if (!objectOrPairs || objectOrPairs instanceof Array) {
        if (objectOrPairs) {
            for (var index = 0; index < objectOrPairs.length; index++) {
                var pair = objectOrPairs [index];
                if ( !(pair instanceof Array) || pair.length != 2) {
                    throw ValueError(
                        "dict update sequence element #" + index +
                        " has length " + pair.length +
                        "; 2 is required", new Error());
                }
                var key = pair [0];
                var val = pair [1];
                if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                     if (!isinstance (objectOrPairs, dict)) {
                         val = dict (val);
                     }
                }
                instance [key] = val;
            }
        }
    }
    else {
        if (isinstance (objectOrPairs, dict)) {
            var aKeys = objectOrPairs.py_keys ();
            for (var index = 0; index < aKeys.length; index++ ) {
                var key = aKeys [index];
                instance [key] = objectOrPairs [key];
            }
        } else if (objectOrPairs instanceof Object) {
            instance = objectOrPairs;
        } else {
            throw ValueError ("Invalid type of object for dict creation", new Error ());
        }
    }
    __setproperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
    __setproperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
    __setproperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
    __setproperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
    __setproperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
    __setproperty__ (instance, 'py_items', {value: __items__, enumerable: false});
    __setproperty__ (instance, 'py_del', {value: __del__, enumerable: false});
    __setproperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
    __setproperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
    __setproperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
    __setproperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
    __setproperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
    __setproperty__ (instance, 'py_update', {value: __update__, enumerable: false});
    __setproperty__ (instance, 'py_values', {value: __values__, enumerable: false});
    __setproperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
    __setproperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
    return instance;
}
dict.__name__ = 'dict';
dict.__bases__ = [object];
function __setdoc__ (docString) {
    this.__doc__ = docString;
    return this;
}
__setproperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
export function __jsmod__ (a, b) {
    if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return a % b;
    }
};
export function __mod__ (a, b) {
    if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return ((a % b) + b) % b;
    }
};
export function __pow__ (a, b) {
    if (typeof a == 'object' && '__pow__' in a) {
        return a.__pow__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rpow__ (a);
    }
    else {
        return Math.pow (a, b);
    }
};
export var pow = __pow__;
export function __neg__ (a) {
    if (typeof a == 'object' && '__neg__' in a) {
        return a.__neg__ ();
    }
    else {
        return -a;
    }
};
export function __matmul__ (a, b) {
    return a.__matmul__ (b);
};
export function __mul__ (a, b) {
    if (typeof a == 'object' && '__mul__' in a) {
        return a.__mul__ (b);
    }
    else if (typeof b == 'object' && '__rmul__' in b) {
        return b.__rmul__ (a);
    }
    else if (typeof a == 'string') {
        return a.__mul__ (b);
    }
    else if (typeof b == 'string') {
        return b.__rmul__ (a);
    }
    else {
        return a * b;
    }
};
export function __truediv__ (a, b) {
    if (typeof a == 'object' && '__truediv__' in a) {
        return a.__truediv__ (b);
    }
    else if (typeof b == 'object' && '__rtruediv__' in b) {
        return b.__rtruediv__ (a);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return b.__rdiv__ (a);
    }
    else {
        return a / b;
    }
};
export function __floordiv__ (a, b) {
    if (typeof a == 'object' && '__floordiv__' in a) {
        return a.__floordiv__ (b);
    }
    else if (typeof b == 'object' && '__rfloordiv__' in b) {
        return b.__rfloordiv__ (a);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return b.__rdiv__ (a);
    }
    else {
        return Math.floor (a / b);
    }
};
export function __add__ (a, b) {
    if (typeof a == 'object' && '__add__' in a) {
        return a.__add__ (b);
    }
    else if (typeof b == 'object' && '__radd__' in b) {
        return b.__radd__ (a);
    }
    else {
        return a + b;
    }
};
export function __sub__ (a, b) {
    if (typeof a == 'object' && '__sub__' in a) {
        return a.__sub__ (b);
    }
    else if (typeof b == 'object' && '__rsub__' in b) {
        return b.__rsub__ (a);
    }
    else {
        return a - b;
    }
};
export function __lshift__ (a, b) {
    if (typeof a == 'object' && '__lshift__' in a) {
        return a.__lshift__ (b);
    }
    else if (typeof b == 'object' && '__rlshift__' in b) {
        return b.__rlshift__ (a);
    }
    else {
        return a << b;
    }
};
export function __rshift__ (a, b) {
    if (typeof a == 'object' && '__rshift__' in a) {
        return a.__rshift__ (b);
    }
    else if (typeof b == 'object' && '__rrshift__' in b) {
        return b.__rrshift__ (a);
    }
    else {
        return a >> b;
    }
};
export function __or__ (a, b) {
    if (typeof a == 'object' && '__or__' in a) {
        return a.__or__ (b);
    }
    else if (typeof b == 'object' && '__ror__' in b) {
        return b.__ror__ (a);
    }
    else {
        return a | b;
    }
};
export function __xor__ (a, b) {
    if (typeof a == 'object' && '__xor__' in a) {
        return a.__xor__ (b);
    }
    else if (typeof b == 'object' && '__rxor__' in b) {
        return b.__rxor__ (a);
    }
    else {
        return a ^ b;
    }
};
export function __and__ (a, b) {
    if (typeof a == 'object' && '__and__' in a) {
        return a.__and__ (b);
    }
    else if (typeof b == 'object' && '__rand__' in b) {
        return b.__rand__ (a);
    }
    else {
        return a & b;
    }
};
export function __eq__ (a, b) {
    if (typeof a == 'object' && '__eq__' in a) {
        return a.__eq__ (b);
    }
    else {
        return a == b;
    }
};
export function __ne__ (a, b) {
    if (typeof a == 'object' && '__ne__' in a) {
        return a.__ne__ (b);
    }
    else {
        return a != b
    }
};
export function __lt__ (a, b) {
    if (typeof a == 'object' && '__lt__' in a) {
        return a.__lt__ (b);
    }
    else {
        return a < b;
    }
};
export function __le__ (a, b) {
    if (typeof a == 'object' && '__le__' in a) {
        return a.__le__ (b);
    }
    else {
        return a <= b;
    }
};
export function __gt__ (a, b) {
    if (typeof a == 'object' && '__gt__' in a) {
        return a.__gt__ (b);
    }
    else {
        return a > b;
    }
};
export function __ge__ (a, b) {
    if (typeof a == 'object' && '__ge__' in a) {
        return a.__ge__ (b);
    }
    else {
        return a >= b;
    }
};
export function __imatmul__ (a, b) {
    if ('__imatmul__' in a) {
        return a.__imatmul__ (b);
    }
    else {
        return a.__matmul__ (b);
    }
};
export function __ipow__ (a, b) {
    if (typeof a == 'object' && '__pow__' in a) {
        return a.__ipow__ (b);
    }
    else if (typeof a == 'object' && '__ipow__' in a) {
        return a.__pow__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rpow__ (a);
    }
    else {
        return Math.pow (a, b);
    }
};
export function __ijsmod__ (a, b) {
    if (typeof a == 'object' && '__imod__' in a) {
        return a.__ismod__ (b);
    }
    else if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return a % b;
    }
};
export function __imod__ (a, b) {
    if (typeof a == 'object' && '__imod__' in a) {
        return a.__imod__ (b);
    }
    else if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return ((a % b) + b) % b;
    }
};
export function __imul__ (a, b) {
    if (typeof a == 'object' && '__imul__' in a) {
        return a.__imul__ (b);
    }
    else if (typeof a == 'object' && '__mul__' in a) {
        return a = a.__mul__ (b);
    }
    else if (typeof b == 'object' && '__rmul__' in b) {
        return a = b.__rmul__ (a);
    }
    else if (typeof a == 'string') {
        return a = a.__mul__ (b);
    }
    else if (typeof b == 'string') {
        return a = b.__rmul__ (a);
    }
    else {
        return a *= b;
    }
};
export function __idiv__ (a, b) {
    if (typeof a == 'object' && '__idiv__' in a) {
        return a.__idiv__ (b);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a = a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return a = b.__rdiv__ (a);
    }
    else {
        return a /= b;
    }
};
export function __iadd__ (a, b) {
    if (typeof a == 'object' && '__iadd__' in a) {
        return a.__iadd__ (b);
    }
    else if (typeof a == 'object' && '__add__' in a) {
        return a = a.__add__ (b);
    }
    else if (typeof b == 'object' && '__radd__' in b) {
        return a = b.__radd__ (a);
    }
    else {
        return a += b;
    }
};
export function __isub__ (a, b) {
    if (typeof a == 'object' && '__isub__' in a) {
        return a.__isub__ (b);
    }
    else if (typeof a == 'object' && '__sub__' in a) {
        return a = a.__sub__ (b);
    }
    else if (typeof b == 'object' && '__rsub__' in b) {
        return a = b.__rsub__ (a);
    }
    else {
        return a -= b;
    }
};
export function __ilshift__ (a, b) {
    if (typeof a == 'object' && '__ilshift__' in a) {
        return a.__ilshift__ (b);
    }
    else if (typeof a == 'object' && '__lshift__' in a) {
        return a = a.__lshift__ (b);
    }
    else if (typeof b == 'object' && '__rlshift__' in b) {
        return a = b.__rlshift__ (a);
    }
    else {
        return a <<= b;
    }
};
export function __irshift__ (a, b) {
    if (typeof a == 'object' && '__irshift__' in a) {
        return a.__irshift__ (b);
    }
    else if (typeof a == 'object' && '__rshift__' in a) {
        return a = a.__rshift__ (b);
    }
    else if (typeof b == 'object' && '__rrshift__' in b) {
        return a = b.__rrshift__ (a);
    }
    else {
        return a >>= b;
    }
};
export function __ior__ (a, b) {
    if (typeof a == 'object' && '__ior__' in a) {
        return a.__ior__ (b);
    }
    else if (typeof a == 'object' && '__or__' in a) {
        return a = a.__or__ (b);
    }
    else if (typeof b == 'object' && '__ror__' in b) {
        return a = b.__ror__ (a);
    }
    else {
        return a |= b;
    }
};
export function __ixor__ (a, b) {
    if (typeof a == 'object' && '__ixor__' in a) {
        return a.__ixor__ (b);
    }
    else if (typeof a == 'object' && '__xor__' in a) {
        return a = a.__xor__ (b);
    }
    else if (typeof b == 'object' && '__rxor__' in b) {
        return a = b.__rxor__ (a);
    }
    else {
        return a ^= b;
    }
};
export function __iand__ (a, b) {
    if (typeof a == 'object' && '__iand__' in a) {
        return a.__iand__ (b);
    }
    else if (typeof a == 'object' && '__and__' in a) {
        return a = a.__and__ (b);
    }
    else if (typeof b == 'object' && '__rand__' in b) {
        return a = b.__rand__ (a);
    }
    else {
        return a &= b;
    }
};
export function __getitem__ (container, key) {
    if (typeof container == 'object' && '__getitem__' in container) {
        return container.__getitem__ (key);
    }
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
        return container [container.length + key];
    }
    else {
        return container [key];
    }
};
export function __setitem__ (container, key, value) {
    if (typeof container == 'object' && '__setitem__' in container) {
        container.__setitem__ (key, value);
    }
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
        container [container.length + key] = value;
    }
    else {
        container [key] = value;
    }
};
export function __getslice__ (container, lower, upper, step) {
    if (typeof container == 'object' && '__getitem__' in container) {
        return container.__getitem__ ([lower, upper, step]);
    }
    else {
        return container.__getslice__ (lower, upper, step);
    }
};
export function __setslice__ (container, lower, upper, step, value) {
    if (typeof container == 'object' && '__setitem__' in container) {
        container.__setitem__ ([lower, upper, step], value);
    }
    else {
        container.__setslice__ (lower, upper, step, value);
    }
};
export var BaseException =  __class__ ('BaseException', [object], {
	__module__: __name__,
});
export var Exception =  __class__ ('Exception', [BaseException], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		self.__args__ = args;
		if (kwargs.error != null) {
			self.stack = kwargs.error.stack;
		}
		else if (Error) {
			self.stack = new Error ().stack;
		}
		else {
			self.stack = 'No stack trace available';
		}
	});},
	get __repr__ () {return __get__ (this, function (self) {
		if (len (self.__args__) > 1) {
			return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
		}
		else if (len (self.__args__)) {
			return '{}({})'.format (self.__class__.__name__, repr (self.__args__ [0]));
		}
		else {
			return '{}()'.format (self.__class__.__name__);
		}
	});},
	get __str__ () {return __get__ (this, function (self) {
		if (len (self.__args__) > 1) {
			return str (tuple (self.__args__));
		}
		else if (len (self.__args__)) {
			return str (self.__args__ [0]);
		}
		else {
			return '';
		}
	});}
});
export var IterableError =  __class__ ('IterableError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, error) {
		Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
	});}
});
export var StopIteration =  __class__ ('StopIteration', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, error) {
		Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
	});}
});
export var ValueError =  __class__ ('ValueError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var KeyError =  __class__ ('KeyError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var AssertionError =  __class__ ('AssertionError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		if (message) {
			Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
		}
		else {
			Exception.__init__ (self, __kwargtrans__ ({error: error}));
		}
	});}
});
export var NotImplementedError =  __class__ ('NotImplementedError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var IndexError =  __class__ ('IndexError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var AttributeError =  __class__ ('AttributeError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var py_TypeError =  __class__ ('py_TypeError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var Warning =  __class__ ('Warning', [Exception], {
	__module__: __name__,
});
export var UserWarning =  __class__ ('UserWarning', [Warning], {
	__module__: __name__,
});
export var DeprecationWarning =  __class__ ('DeprecationWarning', [Warning], {
	__module__: __name__,
});
export var RuntimeWarning =  __class__ ('RuntimeWarning', [Warning], {
	__module__: __name__,
});
export var __sort__ = function (iterable, key, reverse) {
	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
		var key = null;
	};
	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
		var reverse = false;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (key) {
		iterable.sort ((function __lambda__ (a, b) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return (key (a) > key (b) ? 1 : -(1));
		}));
	}
	else {
		iterable.sort ();
	}
	if (reverse) {
		iterable.reverse ();
	}
};
export var sorted = function (iterable, key, reverse) {
	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
		var key = null;
	};
	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
		var reverse = false;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (py_typeof (iterable) == dict) {
		var result = copy (iterable.py_keys ());
	}
	else {
		var result = copy (iterable);
	}
	__sort__ (result, key, reverse);
	return result;
};
export var map = function (func, iterable) {
	return (function () {
		var __accu0__ = [];
		for (var item of iterable) {
			__accu0__.append (func (item));
		}
		return __accu0__;
	}) ();
};
export var filter = function (func, iterable) {
	if (func == null) {
		var func = bool;
	}
	return (function () {
		var __accu0__ = [];
		for (var item of iterable) {
			if (func (item)) {
				__accu0__.append (item);
			}
		}
		return __accu0__;
	}) ();
};
export var divmod = function (n, d) {
	return tuple ([Math.floor (n / d), __mod__ (n, d)]);
};
export var __Terminal__ =  __class__ ('__Terminal__', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.buffer = '';
		try {
			self.element = document.getElementById ('__terminal__');
		}
		catch (__except0__) {
			self.element = null;
		}
		if (self.element) {
			self.element.style.overflowX = 'auto';
			self.element.style.boxSizing = 'border-box';
			self.element.style.padding = '5px';
			self.element.innerHTML = '_';
		}
	});},
	get print () {return __get__ (this, function (self) {
		var sep = ' ';
		var end = '\n';
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
			var __accu0__ = [];
			for (var arg of args) {
				__accu0__.append (str (arg));
			}
			return __accu0__;
		}) ()), end).__getslice__ (-(4096), null, 1);
		if (self.element) {
			self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
			self.element.scrollTop = self.element.scrollHeight;
		}
		else {
			console.log (sep.join ((function () {
				var __accu0__ = [];
				for (var arg of args) {
					__accu0__.append (str (arg));
				}
				return __accu0__;
			}) ()));
		}
	});},
	get input () {return __get__ (this, function (self, question) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'question': var question = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
		var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(8), null, 1)));
		self.print (answer);
		return answer;
	});}
});
export var __terminal__ = __Terminal__ ();
export var print = __terminal__.print;
export var input = __terminal__.input;

//# sourceMappingURL=org.transcrypt.__runtime__.map

// ---------------------------------------- Module:./std.js ----------------------------------------

// Transcrypt'ed from Python, 2024-07-17 17:38:12
var __name__ = 'std';
import {arenaInfo} from "game"
import {searchPath} from "game/path-finder"
import {Visual} from "game/visual"
export var DONE = 1;
export var __version__ = '0.2.a0';
export var UsrObject =  __class__ ('UsrObject', [object], {
	__module__: __name__,
});
export var Position =  __class__ ('Position', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, x, y) {
		self.x = x;
		self.y = y;
	});}
});
export var st =  __class__ ('st', [object], {
	__module__: __name__,// -------------- JS基础类型判断 -----------------
	
	NOT_JNUMBER: 'obj is not a js number.',
	NOT_JLIST: 'obj is not a js list.',
	NOT_JDICT: 'obj is not a js dict.',
	NOT_JSTRING: 'obj is not a js string.',
	NOT_JBOOL: 'obj is not a js boolean.'// -------------- PY基础类型判断 -----------------
	,
	NOT_LIST: 'obj is not a py list.',
	NOT_TUPLE: 'obj is not a py tuple.',
	NOT_DICT: 'obj is not a py dict.',
	NOT_SET: 'obj is not a py set.',
	NOT_STR: 'obj is not a py str.',
	NOT_INT: 'obj is not a py int.',
	NOT_FLOAT: 'obj is not a py float.',
	NOT_BOOL: 'obj is not a py bool.'// -------------- 游戏对象类型判断 -----------------
	,
	NOT_SITE: 'obj is not a site.',
	NOT_CREEP: 'obj is not a creep.',
	NOT_GOBJECT: 'obj is not a game object.',
	NOT_OSTRUCTURE: 'obj is not an owned structure.',
	NOT_RESOURCE: 'obj is not a resource.',
	NOT_SOURCE: 'obj is not a source.',
	NOT_STORE: 'obj is not a store.',
	NOT_STRUCTURE: 'obj is not a structure.',
	NOT_BOX: 'obj is not a box.',
	NOT_EXTENSION: 'obj is not an extension.',
	NOT_RAMPART: 'obj is not a rampart.',
	NOT_ROAD: 'obj is not a road.',
	NOT_SPAWN: 'obj is not a spawn.',
	NOT_TOWER: 'obj is not a tower.',
	NOT_WALL: 'obj is not a wall.',
	NOT_SPAWNING: 'obj is not a spawning.',
	NOT_FLAG: 'obj is not a flag.',
	NOT_POINT: 'obj is not a point.'// -------------- 对象能力类型判断 -----------------
	,
	NOT_MOVABLE: 'obj is not movable.',
	NOT_ATKABLE: 'obj is not atkable.',
	NOT_MELEE: 'obj is not melee.',
	NOT_RANGED: 'obj is not ranged.',
	NOT_HEALABLE: 'obj is not healable.',
	NOT_HITABLE: 'obj is not hitable.',
	NOT_WORKABLE: 'obj is not workable.',
	NOT_STORABLE: 'obj is not storable.',
	NOT_ENERGETIC: 'obj is not energetic.',
	NOT_DAMAGED: 'obj is not damaged.',
	NOT_EMPTY: 'obj is not empty.',
	NOT_FULL: 'obj is not full.',
	NOT_MINE: 'obj is not mine.',
	NOT_FRIEND: 'obj is not a friend.',
	NOT_ENEMY: 'obj is not an enemy.'// -------------- Other -----------------
	,
	POOR: 'Not enough energy or resources.',
	BUSY: 'The structure is busy.',
	INVALID: 'Invalid arguments or target.',
	OUT_RANGE: 'The target is out of range.'// -------------------------------------- JS基础类型判断 --------------------------------------
	,
	get jnumber () {return function (obj) {
		return typeof obj === 'number';
		// pass;
	};},
	get jlist () {return function (obj) {
		return obj instanceof Array;
		// pass;
	};},
	get jstring () {return function (obj) {
		return typeof obj === 'string';
		// pass;
	};},
	get jbool () {return function (obj) {
		return typeof obj === 'boolean';
		// pass;
	};},
	get jdict () {return function (obj) {
		return obj instanceof Array;
		// pass;
	};}// -------------------------------------- PY基础类型判断 --------------------------------------
	,
	get list () {return function (obj) {
		return isinstance (obj, list);
	};},
	get tuple () {return function (obj) {
		return isinstance (obj, tuple);
	};},
	get dict () {return function (obj) {
		return isinstance (obj, dict);
	};},
	get set () {return function (obj) {
		return isinstance (obj, set);
	};},
	get str () {return function (obj) {
		return isinstance (obj, str);
	};},
	get int () {return function (obj) {
		return isinstance (obj, int);
	};},
	get float () {return function (obj) {
		return isinstance (obj, float);
	};},
	get bool () {return function (obj) {
		return isinstance (obj, bool);
	};}// -------------------------------------- 游戏对象类型判断 --------------------------------------
	,
	get site () {return function (obj) {
		return obj instanceof ConstructionSite;
		// pass;
	};},
	get creep () {return function (obj) {
		return obj instanceof Creep;
		// pass;
	};},
	get gobject () {return function (obj) {
		return obj instanceof GameObject;
		// pass;
	};},
	get ostructure () {return function (obj) {
		return obj instanceof OwnedStructure;
		// pass;
	};},
	get resource () {return function (obj) {
		return obj instanceof Resource;
		// pass;
	};},
	get source () {return function (obj) {
		return obj instanceof Source;
		// pass;
	};},
	get store () {return function (obj) {
		return obj instanceof Store;
		// pass;
	};},
	get structure () {return function (obj) {
		return obj instanceof Structure;
		// pass;
	};},
	get box () {return function (obj) {
		return obj instanceof StructureContainer;
		// pass;
	};},
	get extension () {return function (obj) {
		return obj instanceof StructureExtension;
		// pass;
	};},
	get rampart () {return function (obj) {
		return obj instanceof StructureRampart;
		// pass;
	};},
	get road () {return function (obj) {
		return obj instanceof StructureRoad;
		// pass;
	};},
	get spawn () {return function (obj) {
		return obj instanceof StructureSpawn;
		// pass;
	};},
	get tower () {return function (obj) {
		return obj instanceof StructureTower;
		// pass;
	};},
	get wall () {return function (obj) {
		return obj instanceof StructureWall;
		// pass;
	};},
	get spawning () {return function (obj) {
		return obj instanceof Spawning;
		// pass;
	};},
	get flag () {return function (obj) {
		return obj instanceof Flag;
		// pass;
	};}// -------------------------------------- 对象能力判断 --------------------------------------
	,
	get movable () {return function (obj) {
		if(obj && obj.body) for(var p of obj.body) if (p.type == MOVE) return true;
		return false;
	};},
	get atkable () {return function (obj) {
		if (obj) {
			if (obj.body) {
				for(var p of obj.body) if (p.type == ATTACK || p.type == RANGED_ATTACK) return true;
				// pass;
			}
			else if (obj.attack) {
				return true;
			}
		}
		return false;
	};},
	get melee () {return function (obj) {
		if(obj && obj.body) for(var p of obj.body) if (p.type == ATTACK) return true;
		return false;
	};},
	get ranged () {return function (obj) {
		if (obj) {
			if (obj.body) {
				for(var p of obj.body) if (p.type == RANGED_ATTACK) return true;
				// pass;
			}
			else if (obj.attack) {
				return true;
			}
		}
		return false;
	};},
	get healable () {return function (obj) {
		if (obj) {
			if (obj.body) {
				for(var p of obj.body) if (p.type == HEAL) return true;
				// pass;
			}
			else if (obj.heal) {
				return true;
			}
		}
		return false;
	};},
	get hitable () {return function (obj) {
		return obj && obj.hits !== undefined;
	};},
	get workable () {return function (obj) {
		if(obj && obj.body) for(var p of obj.body) if (p.type == WORK) return true;
		return false;
	};},
	get storable () {return function (obj) {
		if(obj instanceof Structure && obj.store) return true;
		if(obj instanceof Creep && obj.body) for(var p of obj.body) if (p.type == CARRY) return true;
		return false;
	};},
	get energetic () {return function (obj) {
		if(obj instanceof Structure && obj.store && get.energy(obj) > 0) return true;
		if(obj instanceof Creep && get.energy(obj) > 0) return true;
		if(obj instanceof Resource && obj.amount > 0) return true;
		// pass;
	};},
	get damaged () {return function (obj) {
		if(obj.hits < obj.hitsMax) return true;
		// pass;
	};},
	get empty () {return function (obj) {
		if (!(obj) || !(obj.store)) {
			return true;
		}
		return get.energy (obj) == 0;
	};},
	get full () {return function (obj) {
		if (!(obj) || !(obj.store)) {
			return true;
		}
		return get.energy (obj, true, '=100');
	};},
	get friend () {return function (obj) {
		return obj && obj.my;
	};},
	get my () {return function (obj) {
		return obj && obj.my;
	};},
	get enemy () {return function (obj) {
		return obj && !(obj.my);
	};},
	get point () {return function (obj) {
		return obj.x !== undefined && obj.y !== undefined;
	};}
});
export var std =  __class__ ('std', [object], {
	__module__: __name__,
	OBJECT_PREVIEW_LENGTH: 20,
	get _caller_ () {return function () {
		var stack = new Error().stack;
		var cline, cname;
		var size = stack.length;
		var i = 3;
		while (i < size) {
			cline = stack.split("\n")[i];
			cname = cline.match(/at\s+(.*)\s+\(/)[1];
			if (cname.indexOf("<anonymous>") == -1) break;
			i++;
		}
		return cline;
	};},
	get param_assert () {return function (params, names, shoulds, errs, __raise) {
		if (typeof __raise == 'undefined' || (__raise != null && __raise.hasOwnProperty ("__kwargtrans__"))) {;
			var __raise = true;
		};
		var length = min (len (params), len (shoulds), len (errs));
		var __left0__ = tuple ([[], [], [], false]);
		var errored_params = __left0__ [0];
		var errored_names = __left0__ [1];
		var errored_errs = __left0__ [2];
		var err_flag = __left0__ [3];
		for (var i = 0; i < length; i++) {
			if (!(shoulds [i] (params [i]))) {
				errored_params.append (params [i]);
				errored_names.append (names [i]);
				errored_errs.append (errs [i]);
				var err_flag = true;
			}
		}
		if (err_flag) {
			var caller_info = std._caller_ ();
			var txt = (((((('\n[PyScreeps-Arena ' + '\x1b[41m') + 'Error') + '\x1b[0m') + ' Params]:') + '\x1b[33m') + caller_info) + '\x1b[0m';
			var length = len (errored_names);
			for (var i = 0; i < length; i++) {
				txt += (((((((("\n\terror '" + '\x1b[33m') + errored_names [i]) + '\x1b[0m') + "': '") + errored_errs [i]) + "'  // got: ") + '\x1b[33m') + String (errored_params [i])) + '\x1b[0m';
			}
			txt += '\n ----------------------------------------------- \n';
			if (!(__raise)) {
				console.log(txt)
				return false;
			}
			var txt = txt + '\nTick Aborted by Param Error.\n\n[Stack Info]:';
			throw new Error(txt);
		}
		return true;
	};},
	get _expand_composite_as_list () {return function (filter_composite) {
		var _ = [];
		if (isinstance (filter_composite, tuple ([tuple, list]))) {
			for (var each of filter_composite) {
				_.extend (std._expand_composite_as_list (each));
			}
			return _;
		}
		else if (isinstance (filter_composite, set)) {
			return std._expand_composite_as_list (py_next (py_iter (filter_composite)));
		}
		else {
			return [filter_composite];
		}
	};},
	get _generate_combo_js_eval () {return function (filter_composite, fid) {
		if (isinstance (filter_composite, list)) {
			return ('(' + ' || '.join ((function () {
				var __accu0__ = [];
				for (var each of filter_composite) {
					__accu0__.append (std._generate_combo_js_eval (each, fid));
				}
				return py_iter (__accu0__);
			}) ())) + ')';
		}
		else if (isinstance (filter_composite, tuple)) {
			return ('(' + ' && '.join ((function () {
				var __accu0__ = [];
				for (var each of filter_composite) {
					__accu0__.append (std._generate_combo_js_eval (each, fid));
				}
				return py_iter (__accu0__);
			}) ())) + ')';
		}
		else if (isinstance (filter_composite, set)) {
			return (' !(' + std._generate_combo_js_eval (py_next (py_iter (filter_composite)), fid)) + ')';
		}
		else {
			return ('%' + fid [filter_composite]) + '%';
		}
	};},
	_expand_memory: dict ({}),
	get combo_filter () {return function (filter_composite) {
		var memory_key = str (filter_composite);
		var fn = std._expand_memory.py_get (memory_key, null);
		if (fn) {
			return fn;
		}
		var __left0__ = tuple ([dict ({}), dict ({})]);
		var fn_ids = __left0__ [0];
		var id_fns = __left0__ [1];
		var _ = std._expand_composite_as_list (filter_composite);
		for (var [f_id, each_fn] of enumerate (set (_))) {
			f_id++;
			var __left0__ = tuple ([f_id, each_fn]);
			fn_ids [each_fn] = __left0__ [0];
			id_fns [f_id] = __left0__ [1];
		}
		var _eval_str = std._generate_combo_js_eval (filter_composite, fn_ids);
		var _inner = function (obj) {
			var eval_str = _eval_str + '';
			for (var [fn_id, func] of id_fns.py_items ()) {
				eval_str = eval_str.replace('%' + fn_id + '%', String(!!func(obj)));
				// pass;
			}
			return eval (eval_str);
		};
		std._expand_memory [memory_key] = _inner;
		return _inner;
	};},
	get log () {return function (caller_name) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		console.log("[" + caller_name, "[33m" + "Log" + "[0m" + "]:", ...args)
		// pass;
	};},
	get info () {return function (caller_name) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		console.log("[" + caller_name, "[42m" + "Info" + "[0m" + "]:", ...args)
		// pass;
	};},
	get warn () {return function (caller_name) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		console.log("[" + caller_name, "[43m" + "Warn" + "[0m" + "]:", ...args)
		// pass;
	};},
	get error () {return function (caller_name) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		throw new Error("[" + caller_name + " " + "[41m" + "Error" + "[0m" + "]: " + args.join(" "))
		// pass;
	};},
	_show_usage_flag: false,
	_cpu_limit: Math.floor (arenaInfo.cpuTimeLimit / 1000),
	_cpu_first_limit: Math.floor (arenaInfo.cpuTimeLimitFirstTick / 1000000),
	get show_usage () {return function () {
		print ('');
		var game_tick = get.ticks ();
		if (!(std._show_usage_flag)) {
			if (game_tick >= 1) {
				std._show_usage_flag = true;
			}
			print (((((('\x1b[42m' + '---------- Welcome to ') + '\x1b[35m') + 'Screeps Arena') + '\x1b[37m') + '! ----------') + '\x1b[0m');
			print ((('Lib version: ' + __version__) + ', ') + 'Compiler py-version: 3.12.4', '\n');
		}
		print ('[Hardware Usage]');
		if (game_tick <= 1) {
			var v = round (get.cpu () / 1000000);
			var color = (v < 800 ? (v < 600 ? '\x1b[32m' : '\x1b[33m') : '\x1b[31m');
			print ('cpu time: ', (color + str (v)) + '\x1b[0m', 'ms / {} ms'.format (std._cpu_first_limit));
		}
		else {
			var v = round (get.cpu () / 1000);
			var color = (v < 40000 ? (v < 30000 ? '\x1b[32m' : '\x1b[33m') : '\x1b[31m');
			print ('cpu time: ', (color + str (v)) + '\x1b[0m', 'us / {} us'.format (std._cpu_limit));
		}
		var heap = get.heap ();
		var v = round (heap.used_heap_size / 1024);
		var v_limit = round (heap.heap_size_limit / 1024);
		var color = (v < v_limit * 0.6 ? '\x1b[32m' : (v < v_limit * 0.8 ? '\x1b[33m' : '\x1b[31m'));
		print ('heap:', (color + str (v)) + '\x1b[0m', 'KB /', v_limit, 'KB');
	};}
});
export var put =  __class__ ('put', [object], {
	__module__: __name__,
	_spawn_memory: [],
	get move () {return function (unit, to, options, __assert) {
		if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
			var options = null;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, to], ['unit', 'to'], [std.combo_filter ([st.list, tuple ([st.friend, st.movable])]), std.combo_filter ([st.point, st.jnumber])], [((((st.NOT_LIST + ' | (') + st.NOT_FRIEND) + ' & ') + st.NOT_MOVABLE) + ')', (st.NOT_POINT + ' | ') + st.NOT_JNUMBER]);
		}
		if (isinstance (unit, list)) {
			var tick = get.ticks ();
			var _res = [];
			for (var each of unit) {
				if (to.x !== undefined && to.y !== undefined) {
					if (!(each.path_goal) || each.path_goal.x != to.x && each.path_goal.y != to.y) {
						var path_res = searchPath (each, to, options);
						if (path_res.incomplete) {
							std.warn ('put.move', 'Path to target:', to, ' is incomplete.');
							each.path = path_res.path;
							each.path_goal = to;
							each.path_index = 0;
						}
					}
					if (each.path) {
						var to = each.path [each.path_index];
						each.path_index++;
						if (each.path_index >= each.path.length) {
							each.path = null;
							each.path_index = 0;
						}
					}
					var _ = each.moveTo (to);
				}
				else {
					var _ = each.move (to);
				}
				if (_ == OK) {
					each.last_move = tick;
				}
				_res.append (_);
			}
			return _res;
		}
		else {
			if (to.x !== undefined && to.y !== undefined) {
				if (!(unit.path_goal) || unit.path_goal.x != to.x && unit.path_goal.y != to.y) {
					var path_res = searchPath (unit, to, options);
					if (path_res.incomplete) {
						std.warn ('put.move', 'Path to target:', to, ' is incomplete.');
						unit.path = path_res.path;
						unit.path_goal = to;
						unit.path_index = 0;
					}
				}
				if (unit.path) {
					var to = unit.path [unit.path_index];
					unit.path_index++;
					if (unit.path_index >= unit.path.length) {
						unit.path = null;
						unit.path_index = 0;
					}
				}
				var _ = unit.moveTo (to);
			}
			else {
				var _ = unit.move (to);
			}
			if (_ == OK) {
				unit.last_move = get.ticks ();
			}
			return _;
		}
	};},
	get push () {return function (unit, target, __assert) {
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, target], ['unit', 'target'], [std.combo_filter ([st.list, tuple ([st.friend, st.movable])]), std.combo_filter (tuple ([st.friend, st.movable]))], [((('obj is not a list | (' + st.NOT_FRIEND) + ' & ') + st.NOT_MOVABLE) + ')', (st.NOT_FRIEND + ' & ') + st.NOT_MOVABLE]);
		}
		if (isinstance (unit, list)) {
			var _res = [];
			for (var each of unit) {
				var _ = target.pull (each);
				if (_ != OK) {
					_res.append (_);
					continue;
				}
				_res.append (put.move (each, target, null, false));
			}
			return _res;
		}
		else {
			var _ = target.pull (unit);
			if (_ != OK) {
				return _;
			}
			return put.move (unit, target, null, false);
		}
	};},
	get attack () {return function (unit, target, move, __assert) {
		if (typeof move == 'undefined' || (move != null && move.hasOwnProperty ("__kwargtrans__"))) {;
			var move = true;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, target], ['unit', 'target'], [std.combo_filter ([st.list, tuple ([st.friend, st.atkable])]), std.combo_filter (tuple ([st.enemy, st.hitable]))], [((((st.NOT_LIST + ' | (') + st.NOT_FRIEND) + ' & ') + st.NOT_ATKABLE) + ')', (st.NOT_ENEMY + ' & ') + st.NOT_HITABLE]);
		}
		if (isinstance (unit, list)) {
			var tick = get.ticks ();
			var _res = [];
			for (var each of unit) {
				if (each instanceof StructureTower) {_res.append({attack: each.attack(target)}); continue;}
				var __left0__ = tuple ([st.melee (each), st.ranged (each)]);
				var melee = __left0__ [0];
				var ranged = __left0__ [1];
				var dist = get.distance (each, target);
				var result = {};
				if (dist == 1) {
					if (melee) {
						result.melee = each.attack (target);
					}
					if (ranged) {
						result.ranged = each.rangedMassAttack ();
					}
					if (move && !(melee) && st.atkable (target)) {
						result.move = put.escape (each, target, (move === true ? null : move), false);
					}
				}
				else if (dist <= 3) {
					if (ranged) {
						result.ranged = each.rangedAttack (target);
						if (move && dist <= 2) {
							result.move = put.escape (each, target, (move === true ? null : move), false);
						}
					}
					else if (move && melee) {
						result.move = put.move (each, target, (move === true ? null : move), false);
					}
				}
				else if (move) {
					result.move = put.move (each, target, (move === true ? null : move), false);
				}
				if (result.melee == OK) {
					each.last_melee = tick;
				}
				if (result.ranged == OK) {
					each.last_ranged = tick;
				}
				_res.append (result);
			}
			return _res;
		}
		else {
			if (unit instanceof StructureTower) return {attack: unit.attack(target)};
			var __left0__ = tuple ([st.melee (unit), st.ranged (unit)]);
			var melee = __left0__ [0];
			var ranged = __left0__ [1];
			var dist = get.distance (unit, target);
			var result = {};
			if (dist == 1) {
				if (melee) {
					result.melee = unit.attack (target);
				}
				if (ranged) {
					result.ranged = unit.rangedMassAttack ();
				}
				if (move && !(melee) && st.atkable (target)) {
					result.move = put.escape (unit, target, (move === true ? null : move), false);
				}
			}
			else if (dist <= 3) {
				if (ranged) {
					result.ranged = unit.rangedAttack (target);
					if (move && dist <= 2) {
						result.move = put.escape (unit, target, (move === true ? null : move), false);
					}
				}
				else if (move && melee) {
					result.move = put.move (unit, target, (move === true ? null : move), false);
				}
			}
			else if (move) {
				result.move = put.move (unit, target, (move === true ? null : move), false);
			}
			if (result.melee == OK) {
				unit.last_melee = get.ticks ();
			}
			if (result.ranged == OK) {
				unit.last_ranged = get.ticks ();
			}
			return result;
		}
	};},
	get heal () {return function (unit, target, move, __assert) {
		if (typeof move == 'undefined' || (move != null && move.hasOwnProperty ("__kwargtrans__"))) {;
			var move = true;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, target], ['unit', 'target'], [std.combo_filter ([st.list, tuple ([st.friend, st.healable])]), std.combo_filter (tuple ([st.friend, st.creep]))], [((((st.NOT_LIST + ' | (') + st.NOT_FRIEND) + ' & ') + st.NOT_HEALABLE) + ')', (st.NOT_FRIEND + ' & ') + st.NOT_CREEP]);
		}
		if (unit instanceof StructureTower) return {heal: unit.heal(target)};
		var result = {};
		var tick = get.ticks ();
		if (isinstance (unit, list)) {
			var _res = [];
			for (var each of unit) {
				var dist = get.distance (each, target);
				if (dist <= 1) {
					if (!(each.last_melee) || each.last_melee != tick) {
						result.heal = each.heal (target);
					}
					else if (!(each.last_ranged) || each.last_ranged != tick) {
						result.ranged = each.rangedHeal (target);
					}
				}
				else if (dist <= 3) {
					result.ranged = each.rangedHeal (target);
				}
				else if (move) {
					result.move = put.move (each, target, (move === true ? null : move), false);
				}
				if (result.heal == OK || result.ranged == OK) {
					each.last_heal = tick;
				}
				_res.append (result);
			}
			return _res;
		}
		else {
			var dist = get.distance (unit, target);
			if (dist <= 1) {
				if (!(unit.last_melee) || unit.last_melee != tick) {
					result.heal = unit.heal (target);
				}
				else if (!(unit.last_ranged) || unit.last_ranged != tick) {
					result.ranged = unit.rangedHeal (target);
				}
			}
			else if (dist <= 3) {
				result.ranged = unit.rangedHeal (target);
			}
			else if (move) {
				result.move = put.move (unit, target, (move === true ? null : move), false);
			}
			if (result.heal == OK || result.ranged == OK) {
				unit.last_heal = tick;
			}
			return result;
		}
	};},
	get fetch () {return function (unit, target, resource_type, amount, move, __assert) {
		if (typeof resource_type == 'undefined' || (resource_type != null && resource_type.hasOwnProperty ("__kwargtrans__"))) {;
			var resource_type = RESOURCE_ENERGY;
		};
		if (typeof amount == 'undefined' || (amount != null && amount.hasOwnProperty ("__kwargtrans__"))) {;
			var amount = null;
		};
		if (typeof move == 'undefined' || (move != null && move.hasOwnProperty ("__kwargtrans__"))) {;
			var move = true;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, target], ['unit', 'target'], [std.combo_filter ([st.list, tuple ([st.friend, st.storable])]), std.combo_filter ([st.storable, st.resource])], [((((st.NOT_LIST + ' | (') + st.NOT_FRIEND) + ' & ') + st.NOT_STORABLE) + ')', (st.NOT_STORABLE + ' | ') + st.NOT_RESOURCE]);
		}
		var tick = get.ticks ();
		if (isinstance (unit, list)) {
			var _res = [];
			for (var each of unit) {
				if (move && get.distance (each, target) > 1) {
					_res.append (put.move (each, target, (move === true ? null : move), false));
					continue;
				}
				if((target instanceof Resource) && target.resourceType == RESOURCE_ENERGY) {_res.append(each.pickup(target));continue;}
				each.last_fetch = tick;
				if (amount) {
					if(target instanceof Creep) {_res.append(target.transfer(each, resource_type, amount));continue;}
					if(target instanceof Structure) {_res.append(each.withdraw(target, resource_type, amount));continue;}
					// pass;
				}
				else {
					if(target instanceof Creep) {_res.append(target.transfer(each, resource_type));continue;}
					if(target instanceof Structure) {_res.append(each.withdraw(target, resource_type));continue;}
					// pass;
				}
				_res.append (ERR_INVALID_TARGET);
			}
			return _res;
		}
		else {
			if (move && get.distance (unit, target) > 1) {
				return put.move (unit, target, (move === true ? null : move), false);
			}
			if((target instanceof Resource) && target.resourceType == RESOURCE_ENERGY) return unit.pickup(target);
			unit.last_fetch = tick;
			if (amount) {
				if(target instanceof Creep) return target.transfer(unit, resource_type, amount);
				if(target instanceof Structure) return unit.withdraw(target, resource_type, amount);
				// pass;
			}
			else {
				if(target instanceof Creep) return target.transfer(unit, resource_type);
				if(target instanceof Structure) return unit.withdraw(target, resource_type);
				// pass;
			}
			return ERR_INVALID_TARGET;
		}
	};},
	get deposit () {return function (unit, target, resource_type, amount, move, __assert) {
		if (typeof resource_type == 'undefined' || (resource_type != null && resource_type.hasOwnProperty ("__kwargtrans__"))) {;
			var resource_type = RESOURCE_ENERGY;
		};
		if (typeof amount == 'undefined' || (amount != null && amount.hasOwnProperty ("__kwargtrans__"))) {;
			var amount = null;
		};
		if (typeof move == 'undefined' || (move != null && move.hasOwnProperty ("__kwargtrans__"))) {;
			var move = true;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, target], ['unit', 'target'], [std.combo_filter ([st.list, tuple ([st.friend, st.storable])]), std.combo_filter ([st.storable, (function __lambda__ (obj) {
				return obj === null;
			})])], [((((st.NOT_LIST + ' | (') + st.NOT_FRIEND) + ' & ') + st.NOT_STORABLE) + ')', (st.NOT_STORABLE + ' | ') + 'obj is not None']);
		}
		var tick = get.ticks ();
		if (isinstance (unit, list)) {
			var _res = [];
			for (var each of unit) {
				each.last_deposit = tick;
				if (target === null) {
					_res.append (each.drop (resource_type, amount));
					continue;
				}
				if (move && get.distance (each, target) > 1) {
					_res.append (put.move (each, target, (move === true ? null : move), false));
					continue;
				}
				if (amount) {
					_res.append (each.transfer (target, resource_type, amount));
				}
				else {
					_res.append (each.transfer (target, resource_type));
				}
			}
			return _res;
		}
		else {
			unit.last_deposit = tick;
			if (target === null) {
				return unit.drop (resource_type, amount);
			}
			if (move && get.distance (unit, target) > 1) {
				return put.move (unit, target, (move === true ? null : move), false);
			}
			if (amount) {
				return unit.transfer (target, resource_type, amount);
			}
			else {
				return unit.transfer (target, resource_type);
			}
		}
	};},
	get build () {return function (unit, site, move, __assert) {
		if (typeof move == 'undefined' || (move != null && move.hasOwnProperty ("__kwargtrans__"))) {;
			var move = true;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit], ['unit'], [std.combo_filter ([st.list, tuple ([st.friend, st.workable])])], [((((st.NOT_LIST + ' | (') + st.NOT_FRIEND) + ' & ') + st.NOT_WORKABLE) + ')']);
		}
		var tick = get.ticks ();
		if (isinstance (unit, list)) {
			var _res = [];
			for (var each of unit) {
				each.last_build = tick;
				if (move && get.distance (each, site) > 3) {
					_res.append (put.move (each, site, (move === true ? null : move), false));
					continue;
				}
				_res.append (each.build (site));
			}
			return _res;
		}
		else {
			unit.last_build = tick;
			if (move && get.distance (unit, site) > 3) {
				return put.move (unit, site, (move === true ? null : move), false);
			}
			return unit.build (site);
		}
	};},
	get harvest () {return function (unit, target, move, __assert) {
		if (typeof move == 'undefined' || (move != null && move.hasOwnProperty ("__kwargtrans__"))) {;
			var move = true;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, target], ['unit', 'target'], [std.combo_filter ([st.list, tuple ([st.friend, st.workable])]), st.source], [((((st.NOT_LIST + ' | (') + st.NOT_FRIEND) + ' & ') + st.NOT_WORKABLE) + ')', st.NOT_SOURCE]);
		}
		var tick = get.ticks ();
		if (isinstance (unit, list)) {
			var _res = [];
			for (var each of unit) {
				each.last_harvest = tick;
				if (move && get.distance (each, target) > 1) {
					_res.append (put.move (each, target, (move === true ? null : move), false));
					continue;
				}
				_res.append (each.harvest (target));
			}
			return _res;
		}
		else {
			unit.last_harvest = tick;
			if (move && get.distance (unit, target) > 1) {
				return put.move (unit, target, (move === true ? null : move), false);
			}
			return unit.harvest (target);
		}
	};},
	get escape () {return function (unit, target, options, __assert) {
		if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
			var options = null;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, target], ['unit', 'target'], [std.combo_filter ([list, tuple ([st.friend, st.movable])]), st.point], [((((st.NOT_LIST + ' | (') + st.NOT_FRIEND) + ' & ') + st.NOT_MOVABLE) + ')', st.NOT_POINT]);
		}
		if (isinstance (unit, list)) {
			var _res = [];
			for (var each of unit) {
				var pos = Position (each.x + get.sign (each.x - target.x), each.y + get.sign (each.y - target.y));
				if (get.terrain (pos) == TERRAIN_WALL) {
					var spawn = get.spawn (st.friend);
					if (spawn) {
						_res.append (put.move (each, spawn, options));
						continue;
					}
				}
				_res.append (put.move (each, pos, options));
			}
			return _res;
		}
		else {
			var pos = Position (unit.x + get.sign (unit.x - target.x), unit.y + get.sign (unit.y - target.y));
			if (get.terrain (pos) == TERRAIN_WALL) {
				var spawn = get.spawn (st.friend);
				if (spawn) {
					return put.move (unit, spawn, options);
				}
			}
			return put.move (unit, pos, options);
		}
	};},
	get intermit () {return function (unit, target, resource_type, options, __assert) {
		if (typeof resource_type == 'undefined' || (resource_type != null && resource_type.hasOwnProperty ("__kwargtrans__"))) {;
			var resource_type = RESOURCE_ENERGY;
		};
		if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
			var options = null;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, target], ['unit', 'target'], [std.combo_filter ([st.list, tuple ([st.friend, st.storable, st.movable])]), st.storable], [((((((st.NOT_LIST + ' | (') + st.NOT_FRIEND) + ' & ') + st.NOT_STORABLE) + ' & ') + st.NOT_MOVABLE) + ')', st.NOT_STORABLE]);
		}
		var tick = get.ticks ();
		if (isinstance (unit, list)) {
			var _res = [];
			for (var each of unit) {
				var drops = get.resources ((function __lambda__ (obj) {
					return obj.resourceType == resource_type && get.distance (each, obj) <= 1;
				}));
				var free = each.store.getFreeCapacity (resource_type);
				if (len (drops) && free > 0) {
					each.last_intermit = get.ticks ();
					_res.append (put.fetch (each, drops [0], resource_type, free, false, false));
					continue;
				}
				var current = each.store.getUsedCapacity (resource_type);
				if (current == 0) {
					_res.append (DONE);
					continue;
				}
				each.last_intermit = tick;
				var dist = get.distance (each, target);
				if (dist <= 1) {
					var _ = put.deposit (each, target, resource_type, null, (options ? options : true), false);
					if (_ != OK) {
						_res.append (_);
						continue;
					}
					_res.append (DONE);
				}
				else {
					var _ = put.deposit (each, null, resource_type, null, (options ? options : true), false);
					if (_ != OK) {
						_res.append (_);
						continue;
					}
					_res.append (put.move (each, target, options, false));
				}
			}
			return _res;
		}
		else {
			var drops = get.resources ((function __lambda__ (obj) {
				return obj.resourceType == resource_type && get.distance (unit, obj) <= 1;
			}));
			var free = unit.store.getFreeCapacity (resource_type);
			if (len (drops) && free > 0) {
				unit.last_intermit = get.ticks ();
				return put.fetch (unit, drops [0], resource_type, free, false, false);
			}
			var current = unit.store.getUsedCapacity (resource_type);
			if (current == 0) {
				return DONE;
			}
			unit.last_intermit = tick;
			var dist = get.distance (unit, target);
			if (dist <= 1) {
				var _ = put.deposit (unit, target, resource_type, null, (options ? options : true), false);
				if (_ != OK) {
					return _;
				}
				return DONE;
			}
			else {
				var _ = put.deposit (unit, null, resource_type, null, (options ? options : true), false);
				if (_ != OK) {
					return _;
				}
				return put.move (unit, target, options, false);
			}
		}
	};},
	get follow () {return function (unit, target, distance, options, move, __assert) {
		if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
			var options = null;
		};
		if (typeof move == 'undefined' || (move != null && move.hasOwnProperty ("__kwargtrans__"))) {;
			var move = true;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, target], ['unit', 'target'], [std.combo_filter ([st.list, tuple ([st.friend, st.movable])]), st.point], [((('obj is not python list. | (' + st.NOT_FRIEND) + ' & ') + st.NOT_MOVABLE) + ')', st.NOT_POINT]);
		}
		var target_is_creep = st.creep (target);
		var __left0__ = (isinstance (distance, tuple) ? distance : tuple ([distance, 65535]));
		var stop_dist = __left0__ [0];
		var ignore_dist = __left0__ [1];
		if (isinstance (unit, list)) {
			var _res = [];
			var __left0__ = tuple ([0, null]);
			var max_dist = __left0__ [0];
			var furthest = __left0__ [1];
			for (var _unit of unit) {
				if (_unit.id == target.id) {
					continue;
				}
				var dist = get.distance (_unit, target);
				if (target.my) {
					if ((ignore_dist > dist && dist > max_dist)) {
						var max_dist = dist;
						var furthest = _unit;
					}
					_res.append (put.move (_unit, target, options, false));
				}
				else {
					if (dist <= stop_dist) {
						_res.append (put.escape (_unit, target, options, false));
						continue;
					}
					_res.append (put.move (_unit, target, options, false));
				}
			}
			if (move && target.my && target_is_creep && furthest && max_dist > stop_dist) {
				_res.append (put.move (target, furthest, (move === true ? null : move), false));
			}
			return _res;
		}
		else {
			var dist = get.distance (unit, target);
			if (target.my) {
				if (move && target_is_creep && (ignore_dist >= dist && dist >= stop_dist)) {
					var _ = put.move (target, unit, (move === true ? null : move), false);
					if (_ != OK) {
						return _;
					}
				}
				return put.move (unit, target, options, false);
			}
			else {
				if (dist <= stop_dist) {
					return put.escape (unit, target, options, false);
				}
				return put.move (unit, target, options, false);
			}
		}
	};},
	get carry () {return function (unit, src, dst, resource_type, options, intermit, __assert) {
		if (typeof resource_type == 'undefined' || (resource_type != null && resource_type.hasOwnProperty ("__kwargtrans__"))) {;
			var resource_type = RESOURCE_ENERGY;
		};
		if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
			var options = null;
		};
		if (typeof intermit == 'undefined' || (intermit != null && intermit.hasOwnProperty ("__kwargtrans__"))) {;
			var intermit = false;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([unit, src, dst], ['unit', 'src', 'dst'], [std.combo_filter ([st.list, tuple ([st.friend, st.storable, st.movable])]), st.storable, st.storable], [((((((st.NOT_LIST + ' | (') + st.NOT_FRIEND) + ' & ') + st.NOT_STORABLE) + ' & ') + st.NOT_MOVABLE) + ')', st.NOT_STORABLE, st.NOT_STORABLE]);
		}
		if (isinstance (unit, list)) {
			var _res = [];
			for (var each of unit) {
				if (!(intermit)) {
					if (get.energy (each) == 0) {
						_res.append (put.fetch (each, src, resource_type, null, (options ? options : true), false));
						continue;
					}
					_res.append (put.deposit (each, dst, resource_type, null, (options ? options : true), false));
				}
				else {
					var drops = get.resources ((function __lambda__ (obj) {
						return obj.resourceType == resource_type && get.distance (each, obj) <= 1;
					}));
					var free = each.store.getFreeCapacity (resource_type);
					if (len (drops) && free > 0) {
						_res.append (put.fetch (each, drops [0], resource_type, free, false, false));
						continue;
					}
					var current = each.store.getUsedCapacity (resource_type);
					if (current == 0) {
						_res.append (put.fetch (each, src, resource_type, null, (options ? options : true), false));
						continue;
					}
					var dist = get.distance (each, dst);
					if (dist <= 1) {
						var _ = put.deposit (each, dst, resource_type, null, (options ? options : true), false);
						if (_ != OK) {
							_res.append (_);
							continue;
						}
						_res.append (DONE);
					}
					else {
						var _ = put.deposit (each, null, resource_type, null, (options ? options : true), false);
						if (_ != OK) {
							_res.append (_);
							continue;
						}
						_res.append (put.move (each, dst, options, false));
					}
				}
			}
			return _res;
		}
		else if (!(intermit)) {
			if (get.energy (unit) == 0) {
				return put.fetch (unit, src, resource_type, null, (options ? options : true), false);
			}
			return put.deposit (unit, dst, resource_type, null, (options ? options : true), false);
		}
		else {
			var drops = get.resources ((function __lambda__ (obj) {
				return obj.resourceType == resource_type && get.distance (unit, obj) <= 1;
			}));
			var free = unit.store.getFreeCapacity (resource_type);
			if (len (drops) && free > 0) {
				return put.fetch (unit, drops [0], resource_type, free, false, false);
			}
			var current = unit.store.getUsedCapacity (resource_type);
			if (current == 0) {
				return put.fetch (unit, src, resource_type, null, (options ? options : true), false);
			}
			var dist = get.distance (unit, dst);
			if (dist <= 1) {
				var _ = put.deposit (unit, dst, resource_type, null, (options ? options : true), false);
				if (_ != OK) {
					return _;
				}
				return DONE;
			}
			else {
				var _ = put.deposit (unit, null, resource_type, null, (options ? options : true), false);
				if (_ != OK) {
					return _;
				}
				return put.move (unit, dst, options, false);
			}
		}
	};},
	get site () {return function (x_pos, y_type, building_type, __assert) {
		if (typeof building_type == 'undefined' || (building_type != null && building_type.hasOwnProperty ("__kwargtrans__"))) {;
			var building_type = null;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (building_type) {
			var _ = createConstructionSite (x_pos, y_type, building_type);
		}
		else {
			var _ = createConstructionSite (x_pos, y_type);
		}
		if (_.object !== undefined) {
			return _.object;
		}
		return _.error;
	};},
	get create () {return function (spawn, recipe, py_name, __assert) {
		if (typeof py_name == 'undefined' || (py_name != null && py_name.hasOwnProperty ("__kwargtrans__"))) {;
			var py_name = null;
		};
		if (typeof __assert == 'undefined' || (__assert != null && __assert.hasOwnProperty ("__kwargtrans__"))) {;
			var __assert = true;
		};
		if (__assert) {
			std.param_assert ([spawn], ['spawn'], [std.combo_filter (tuple ([st.spawn, st.friend]))], [(st.NOT_SPAWN + ' & ') + st.NOT_FRIEND]);
		}
		var __left0__ = tuple ([-(1), get.ticks ()]);
		var ready_index = __left0__ [0];
		var now_ticks = __left0__ [1];
		for (var i = 0; i < len (put._spawn_memory); i++) {
			if (put._spawn_memory [i].birth_date <= now_ticks) {
				var ready_index = i;
				break;
			}
		}
		if (ready_index != -(1)) {
			return put._spawn_memory.py_pop (ready_index);
		}
		if (spawn.lock) {
			if (now_ticks <= spawn.lock) {
				return ERR_BUSY;
			}
			spawn.lock = undefined;
		}
		var info = spawn.spawnCreep (recipe);
		if (info.error) {
			return info.error;
		}
		spawn.lock = now_ticks + 2;
		if (py_name) {
			info.object.py_name = py_name;
		}
		info.object.birth_date = get.ticks () + CREEP_SPAWN_TIME * len (recipe);
		put._spawn_memory.append (info.object);
		return ERR_BUSY;
	};}
});
export var get =  __class__ ('get', [object], {
	__module__: __name__,
	ticks: getTicks,
	cpu: getCpuTime,
	heap: getHeapStatistics,
	byid: getObjectById,
	get arena () {return function () {
		return arenaInfo;
	};},
	get distance () {return function (obj, target) {
		if (target === null) {
			print ('get.distance: target is None. Return 65535');
			return 65535;
		}
		return obj.getRangeTo (target);
	};},
	get sign () {return function (x) {
		if (x < 0) {
			return -(1);
		}
		if (x > 0) {
			return 1;
		}
		return 0;
	};},
	get find () {return function (objs, filter_fn) {
		for (var obj of objs) {
			if (filter_fn (obj)) {
				return obj;
			}
		}
		return null;
	};},
	get filter () {return function (objs, filter_fn) {
		return list (filter (filter_fn, objs));
	};},
	get classname () {return function (game_object) {
		if (game_object instanceof Creep) return 'Creep';
		    if (game_object instanceof StructureSpawn) return 'Spawn';
		    if (game_object instanceof StructureExtension) return 'Extension';
		    if (game_object instanceof StructureRoad) return 'Road';
		    if (game_object instanceof StructureWall) return 'Wall';
		    if (game_object instanceof StructureRampart) return 'Rampart';
		    if (game_object instanceof StructureTower) return 'Tower';
		    return 'Structure';
		if (game_object instanceof Source) return 'Source';
		if (game_object instanceof Flag) return 'Flag';
		if (game_object instanceof ConstructionSite) return 'Site';
		if (game_object instanceof Resource) return 'Resource';
		if (game_object instanceof GameObject) return 'GameObject';
		return 'Object';
		// pass;
	};},
	get terrain () {return function (x_or_point, y) {
		if (typeof y == 'undefined' || (y != null && y.hasOwnProperty ("__kwargtrans__"))) {;
			var y = null;
		};
		return (y ? getTerrainAt (Position (x_or_point, y)) : getTerrainAt (x_or_point));
	};},
	get all () {return function (p_type, filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		var objs = list (getObjectsByPrototype (p_type));
		if (p_type == Creep) {
			var __left0__ = tuple ([[], get.ticks ()]);
			var tmp = __left0__ [0];
			var now_ticks = __left0__ [1];
			for (var obj of objs) {
				if (!(obj.birth_date) || obj.my && obj.birth_date <= now_ticks) {
					tmp.append (obj);
				}
			}
			objs = tmp;
		}
		if (filter_fn) {
			if (isinstance (filter_fn, tuple ([list, tuple, set]))) {
				var filter_fn = std.combo_filter (filter_fn);
			}
			var _ = filter (filter_fn, objs);
			return _;
		}
		return objs;
	};},
	get one () {return function (p_type, filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		var objs = get.all (p_type, filter_fn);
		return (objs ? objs [0] : null);
	};},
	get creeps () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (Creep, filter_fn);
	};},
	get creep () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (Creep, filter_fn);
	};},
	get friends () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (Creep, (function __lambda__ (obj) {
			return obj.my && (!(filter_fn) || filter_fn (obj));
		}));
	};},
	get friend () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (Creep, (function __lambda__ (obj) {
			return obj.my && (!(filter_fn) || filter_fn (obj));
		}));
	};},
	get enemies () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (Creep, (function __lambda__ (obj) {
			return !(obj.my) && (!(filter_fn) || filter_fn (obj));
		}));
	};},
	get enemy () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (Creep, (function __lambda__ (obj) {
			return !(obj.my) && (!(filter_fn) || filter_fn (obj));
		}));
	};},
	get spawns () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (StructureSpawn, filter_fn);
	};},
	get spawn () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (StructureSpawn, filter_fn);
	};},
	get structures () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (Structure, filter_fn);
	};},
	get structure () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (Structure, filter_fn);
	};},
	get sources () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (Source, filter_fn);
	};},
	get source () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (Source, filter_fn);
	};},
	get sites () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (ConstructionSite, filter_fn);
	};},
	get site () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (ConstructionSite, filter_fn);
	};},
	get resources () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (Resource, filter_fn);
	};},
	get resource () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (Resource, filter_fn);
	};},
	get towers () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (StructureTower, filter_fn);
	};},
	get tower () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (StructureTower, filter_fn);
	};},
	get walls () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (StructureWall, filter_fn);
	};},
	get wall () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (StructureWall, filter_fn);
	};},
	get ramparts () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (StructureRampart, filter_fn);
	};},
	get rampart () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (StructureRampart, filter_fn);
	};},
	get extensions () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (StructureExtension, filter_fn);
	};},
	get extension () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (StructureExtension, filter_fn);
	};},
	get boxes () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (StructureContainer, filter_fn);
	};},
	get box () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (StructureContainer, filter_fn);
	};},
	get roads () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (StructureRoad, filter_fn);
	};},
	get road () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (StructureRoad, filter_fn);
	};},
	get flags () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (Flag, filter_fn);
	};},
	get flag () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (Flag, filter_fn);
	};},
	get score_controllers () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (ScoreController, filter_fn);
	};},
	get score_controller () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (ScoreController, filter_fn);
	};},
	get storages () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.all (GameObject, (function __lambda__ (obj) {
			return st.storable (obj) && filter_fn (obj);
		}));
	};},
	get storage () {return function (filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		return get.one (GameObject, (function __lambda__ (obj) {
			return st.storable (obj) && filter_fn (obj);
		}));
	};},
	get moved () {return function (unit, ticks_offset) {
		if (typeof ticks_offset == 'undefined' || (ticks_offset != null && ticks_offset.hasOwnProperty ("__kwargtrans__"))) {;
			var ticks_offset = 0;
		};
		return unit.last_move == get.ticks () + ticks_offset;
	};},
	get attacked () {return function (unit, ticks_offset) {
		if (typeof ticks_offset == 'undefined' || (ticks_offset != null && ticks_offset.hasOwnProperty ("__kwargtrans__"))) {;
			var ticks_offset = 0;
		};
		return unit.last_attack == get.ticks () + ticks_offset || unit.last_ranged == get.ticks () + ticks_offset;
	};},
	get meleed () {return function (unit, ticks_offset) {
		if (typeof ticks_offset == 'undefined' || (ticks_offset != null && ticks_offset.hasOwnProperty ("__kwargtrans__"))) {;
			var ticks_offset = 0;
		};
		return unit.last_melee == get.ticks () + ticks_offset;
	};},
	get ranged () {return function (unit, ticks_offset) {
		if (typeof ticks_offset == 'undefined' || (ticks_offset != null && ticks_offset.hasOwnProperty ("__kwargtrans__"))) {;
			var ticks_offset = 0;
		};
		return unit.last_ranged == get.ticks () + ticks_offset;
	};},
	get healed () {return function (unit, ticks_offset) {
		if (typeof ticks_offset == 'undefined' || (ticks_offset != null && ticks_offset.hasOwnProperty ("__kwargtrans__"))) {;
			var ticks_offset = 0;
		};
		return unit.last_heal == get.ticks () + ticks_offset;
	};},
	get fetched () {return function (unit, ticks_offset) {
		if (typeof ticks_offset == 'undefined' || (ticks_offset != null && ticks_offset.hasOwnProperty ("__kwargtrans__"))) {;
			var ticks_offset = 0;
		};
		return unit.last_fetch == get.ticks () + ticks_offset;
	};},
	get deposited () {return function (unit, ticks_offset) {
		if (typeof ticks_offset == 'undefined' || (ticks_offset != null && ticks_offset.hasOwnProperty ("__kwargtrans__"))) {;
			var ticks_offset = 0;
		};
		return unit.last_deposit == get.ticks () + ticks_offset;
	};},
	get built () {return function (unit, ticks_offset) {
		if (typeof ticks_offset == 'undefined' || (ticks_offset != null && ticks_offset.hasOwnProperty ("__kwargtrans__"))) {;
			var ticks_offset = 0;
		};
		return unit.last_build == get.ticks () + ticks_offset;
	};},
	get intermited () {return function (unit, ticks_offset) {
		if (typeof ticks_offset == 'undefined' || (ticks_offset != null && ticks_offset.hasOwnProperty ("__kwargtrans__"))) {;
			var ticks_offset = 0;
		};
		return unit.last_intermit == get.ticks () + ticks_offset;
	};},
	get closest () {return function (obj, objs, filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		if (len (objs) == 0) {
			return null;
		}
		if (filter_fn) {
			if (isinstance (filter_fn, tuple ([list, tuple, set]))) {
				var filter_fn = std.combo_filter (filter_fn);
			}
			objs = filter(filter_fn, objs)
			// pass;
		}
		var tmp_list = [];
		for (var i = 0; i < objs.length; i++)
			tmp_list.push(objs[i]);
		objs = tmp_list;
		var obj = findClosestByRange (obj, objs);
		if (obj === undefined) {
			return null;
		}
		return obj;
	};},
	get quickest () {return function (obj, objs, filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		if (len (objs) == 0) {
			return null;
		}
		if (filter_fn) {
			if (isinstance (filter_fn, tuple ([list, tuple, set]))) {
				var filter_fn = std.combo_filter (filter_fn);
			}
			objs = filter(filter_fn, objs)
			// pass;
		}
		var tmp_list = [];
		for (var i = 0; i < objs.length; i++)
			tmp_list.push(objs[i]);
		objs = tmp_list;
		var obj = findClosestByRange (obj, objs);
		if (obj === undefined) {
			return null;
		}
		return obj;
	};},
	get inrange () {return function (obj, objs, range, filter_fn) {
		if (typeof filter_fn == 'undefined' || (filter_fn != null && filter_fn.hasOwnProperty ("__kwargtrans__"))) {;
			var filter_fn = null;
		};
		if (len (objs) == 0) {
			return [];
		}
		if (filter_fn) {
			if (isinstance (filter_fn, tuple ([list, tuple, set]))) {
				var filter_fn = std.combo_filter (filter_fn);
			}
			objs = filter(filter_fn, objs)
			// pass;
		}
		var tmp_list = [];
		for (var i = 0; i < objs.length; i++)
			tmp_list.push(objs[i]);
		objs = tmp_list;
		return list (findInRange (obj, objs, range));
	};},
	get _cmp () {return function (value, cmp) {
		if (cmp) {
			if (cmp [0] == '=') {
				return value == int (cmp.__getslice__ (1, null, 1));
			}
			if (cmp [0] == '>') {
				return value > int (cmp.__getslice__ (1, null, 1));
			}
			if (cmp [0] == '<') {
				return value < int (cmp.__getslice__ (1, null, 1));
			}
		}
		return value;
	};},
	get energy () {return function (target, percent, cmp) {
		if (typeof percent == 'undefined' || (percent != null && percent.hasOwnProperty ("__kwargtrans__"))) {;
			var percent = false;
		};
		if (typeof cmp == 'undefined' || (cmp != null && cmp.hasOwnProperty ("__kwargtrans__"))) {;
			var cmp = null;
		};
		if (target === null || !(target.store)) {
			return -(1);
		}
		var current = target.store.getUsedCapacity (RESOURCE_ENERGY);
		if (current === null) {
			return -(1);
		}
		var value = current;
		if (percent) {
			var total = target.store.getCapacity (RESOURCE_ENERGY);
			if (total === null) {
				return -(1);
			}
			value = int(current / total * 100 + 0.5)
		}
		return (cmp ? get._cmp (value, cmp) : value);
	};},
	get health () {return function (target, percent, cmp) {
		if (typeof percent == 'undefined' || (percent != null && percent.hasOwnProperty ("__kwargtrans__"))) {;
			var percent = false;
		};
		if (typeof cmp == 'undefined' || (cmp != null && cmp.hasOwnProperty ("__kwargtrans__"))) {;
			var cmp = null;
		};
		if (target === null) {
			return 0;
		}
		if (target.hits === undefined) {
			return 0;
		}
		var current = target.hits;
		var value = current;
		if (percent) {
			if (target.hitsMax === undefined) {
				return 0;
			}
			var total = target.hitsMax;
			value = int(current / total * 100 + 0.5)
		}
		return (cmp ? get._cmp (value, cmp) : value);
	};},
	get parts () {return function (creep) {
		if (!(creep) || !(creep.body)) {
			return [];
		}
		var prts = [];
		for (var prt of creep.body){
		prts.append(prt.type);
		}
		return prts;
	};},
	get pcount () {return function (creep, part_type, broken) {
		if (typeof broken == 'undefined' || (broken != null && broken.hasOwnProperty ("__kwargtrans__"))) {;
			var broken = true;
		};
		if (!(creep) || !(creep.body)) {
			return -(1);
		}
		var count = 0;
		for (var part of creep.body) {
			if (part.py_metatype == part_type) {
				if (broken || part.hits > 0) {
					count++;
				}
			}
		}
		return count;
	};},
	get wait () {return function (creep) {
		var move_count = get.pcount (creep, MOVE, false);
		if (move_count == -(1)) {
			return -(1);
		}
		if (move_count == 0) {
			return 65535;
		}
		var fatigue = creep.fatigue;
		if (fatigue <= 0) {
			return 0;
		}
		return Math.ceil ((fatigue / 2) / move_count);
	};},
	get offset () {return function (pos, dx, dy) {
		return Position (pos.x + dx, pos.y + dy);
	};},
	SCORE_TABLE: [2, 2, 1.8, 1.6, 1.3, 1, 0.8, 0.6, 0.4, 0.2, 0.1],
	get score () {return function (creep) {
		var __left0__ = tuple ([0, 0, 0]);
		var carries = __left0__ [0];
		var moves = __left0__ [1];
		var score = __left0__ [2];
		var prts = get.parts (creep);
		for (var [i, prt] of enumerate (prts)) {
			if (prt == ATTACK) {
				score += 10 + i / 5;
			}
			else if (prt == RANGED_ATTACK) {
				score += 15 + i / 4;
			}
			else if (prt == HEAL) {
				score += 12 + i;
			}
			else {
				score++;
				if (prt == MOVE) {
					moves++;
				}
				else if (prt == CARRY) {
					carries++;
				}
			}
		}
		var length = (len (prts) - carries) - moves;
		var movements = moves * 2;
		var move_cost = length * 10;
		var index = min (Math.floor (move_cost / movements), 10);
		var coef = get.SCORE_TABLE [index];
		return int (score * coef);
	};}
});
export var ut =  __class__ ('ut', [object], {
	__module__: __name__,
	VIEW_NAME_OPTS: UsrObject (),
	Stage: __class__ ('Stage', [object], {
		__module__: __name__,
		ALWAYS: true,
		get __init__ () {return __get__ (this, function (self, sdef, entry) {
			if (typeof entry == 'undefined' || (entry != null && entry.hasOwnProperty ("__kwargtrans__"))) {;
				var entry = null;
			};
			self._raw = sdef;
			var def_len = len (sdef);
			if (def_len == 0) {
				var __except0__ = ValueError ('Empty transition definition');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			var first_non_star_dst = null;
			if (entry) {
				self.current = entry;
			}
			else {
				self.current = null;
			}
			var __left0__ = tuple ([dict ({}), [], []]);
			self._trans = __left0__ [0];
			self._any_trans = __left0__ [1];
			var tmp = __left0__ [2];
			for (var i = 0; i < len (sdef); i++) {
				var item = sdef [i];
				var len_trans = len (item);
				if (!((3 <= len_trans && len_trans <= 4))) {
					var __except0__ = ValueError ('Invalid transition definition: {}'.format (sdef [i]));
					__except0__.__cause__ = null;
					throw __except0__;
				}
				var __left0__ = tuple ([item [0], item [1], item [2]]);
				var src = __left0__ [0];
				var dst = __left0__ [1];
				var cond = __left0__ [2];
				var action = (len_trans == 4 ? item [3] : null);
				if (isinstance (src, str)) {
					var src = [src];
				}
				if (isinstance (dst, str)) {
					var dst = [dst];
				}
				var da = UsrObject ();
				for (var _src of src) {
					var _src = _src.strip ();
					for (var _dst of dst) {
						var _dst = _dst.strip ();
						if (_src != '*') {
							if (self.current === null) {
								self.current = _src;
							}
							var stage_node = self._trans.py_get (_src, null);
							if (stage_node) {
								stage_node.append (tuple ([_dst, cond, action, da]));
							}
							else {
								self._trans [_src] = [tuple ([_dst, cond, action, da])];
							}
							tmp.extend ([_src, _dst]);
						}
						else {
							self._any_trans.append (tuple ([_dst, cond, action, da]));
						}
						if (_dst != '*' && first_non_star_dst === null) {
							var first_non_star_dst = _dst;
						}
					}
				}
			}
			for (var v of self._trans.py_values ()) {
				v.extend (self._any_trans);
			}
			self._states = set (tmp);
			if (self.current === null) {
				if (first_non_star_dst !== null) {
					self.current = first_non_star_dst;
				}
				else {
					std.error ('Stage', 'No valid entry found in transition definition');
				}
			}
			self._su = [];
			self._cu = dict ({});
			self._tu = dict ({});
		});},
		get asu () {return __get__ (this, function (self, attr_name, value_func) {
			self._su.append (tuple ([attr_name.strip (), value_func]));
		});},
		get acu () {return __get__ (this, function (self, current, attr_name, value_func) {
			var current = current.strip ();
			if (isinstance (current, str)) {
				var current = [current];
			}
			for (var c of current) {
				var v = self._cu.py_get (c, null);
				if (!(v)) {
					var v = [];
					self._cu [c] = v;
				}
				v.append (tuple ([attr_name.strip (), value_func]));
			}
		});},
		get atu () {return __get__ (this, function (self, src, dst, attr_name, value_func) {
			var src = src.strip ();
			var dst = dst.strip ();
			if (isinstance (src, str)) {
				var src = [src];
			}
			if (isinstance (dst, str)) {
				var dst = [dst];
			}
			for (var s of src) {
				for (var d of dst) {
					var v = self._tu.py_get (tuple ([s, d]), null);
					if (!(v)) {
						var v = [];
						self._tu.__setitem__ ([s, d], v);
					}
					v.append (tuple ([attr_name.strip (), value_func]));
				}
			}
		});},
		get py_next () {return __get__ (this, function (self, log) {
			if (typeof log == 'undefined' || (log != null && log.hasOwnProperty ("__kwargtrans__"))) {;
				var log = true;
			};
			for (var [a_name, vfn] of self._su) {
				setattr (self, a_name, vfn (self, null));
			}
			var v = self._cu.py_get (self.current, null);
			if (v) {
				for (var [a_name, vfn] of v) {
					setattr (self, a_name, vfn (self, null));
				}
			}
			var tset = self._trans.py_get (self.current);
			var tset = (tset ? tset : self._any_trans);
			for (var [dst, cond, action, trans_local] of tset) {
				var v = self._tu.py_get (tuple ([self.current, dst]), null);
				if (v) {
					for (var [a_name, vfn] of v) {
						setattr (trans_local, a_name, vfn (self, trans_local));
					}
				}
				try {
					if (cond === true || cond === false) {
						var cond_res = cond;
					}
					else {
						var cond_res = bool (cond (self, trans_local));
					}
				}
				catch (__except0__) {
					if (isinstance (__except0__, Exception)) {
						var e = __except0__;
						var __except1__ = ValueError ('[Stage] {} -> {}: Usr Condition error: \n{}'.format (self.current, dst, e));
						__except1__.__cause__ = null;
						throw __except1__;
					}
					else {
						throw __except0__;
					}
				}
				if (!(action)) {
					var cond_res = true;
				}
				if (cond_res) {
					if (action) {
						try {
							action (self, trans_local);
						}
						catch (__except0__) {
							if (isinstance (__except0__, Exception)) {
								var e = __except0__;
								var __except1__ = ValueError ('[Stage] {} -> {}: Usr Action error: \n{}'.format (self.current, dst, e));
								__except1__.__cause__ = null;
								throw __except1__;
							}
							else {
								throw __except0__;
							}
						}
					}
					var info = (self.current + ' -> ') + dst;
					self.current = dst;
					if (log) {
						return info;
					}
					return dst;
				}
			}
			if (log) {
				return (self.current + ' -> ') + self.current;
			}
			return self.current;
		});},
		get copy () {return __get__ (this, function (self) {
			var s = ut.Stage (self._raw);
			s._su = self._su.copy ();
			s._cu = self._cu.copy ();
			s._tu = self._tu.copy ();
			return s;
		});}
	}),
	View: __class__ ('View', [object], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self, layer, persistent) {
			if (typeof persistent == 'undefined' || (persistent != null && persistent.hasOwnProperty ("__kwargtrans__"))) {;
				var persistent = true;
			};
			self.v = object;
			self.v = new Visual(layer, persistent);
		});},
		get clear () {return __get__ (this, function (self) {
			self.v.clear ();
			return self;
		});},
		get text () {return __get__ (this, function (self, text, pos, font, color, options) {
			if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
				var options = null;
			};
			var options = options || UsrObject ();
			options.font = font;
			options.color = color;
			self.v.text (text, pos, options);
			return self;
		});},
		get circle () {return __get__ (this, function (self, pos, radius, fill, options) {
			if (typeof fill == 'undefined' || (fill != null && fill.hasOwnProperty ("__kwargtrans__"))) {;
				var fill = null;
			};
			if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
				var options = null;
			};
			var options = options || UsrObject ();
			options.radius = radius;
			options.fill = fill;
			self.v.circle (pos, options);
			return self;
		});},
		get line () {return __get__ (this, function (self, pos1, pos2, width, color, options) {
			if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
				var width = 0.1;
			};
			if (typeof color == 'undefined' || (color != null && color.hasOwnProperty ("__kwargtrans__"))) {;
				var color = null;
			};
			if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
				var options = null;
			};
			var options = options || UsrObject ();
			options.width = width;
			options.color = color;
			self.v.line (pos1, pos2, options);
			return self;
		});},
		get rect () {return __get__ (this, function (self, pos, width, height, fill, options) {
			if (typeof fill == 'undefined' || (fill != null && fill.hasOwnProperty ("__kwargtrans__"))) {;
				var fill = null;
			};
			if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
				var options = null;
			};
			var options = options || UsrObject ();
			options.fill = fill;
			self.v.rect (pos, width, height, options);
			return self;
		});},
		get poly () {return __get__ (this, function (self, points, fill, options) {
			if (typeof fill == 'undefined' || (fill != null && fill.hasOwnProperty ("__kwargtrans__"))) {;
				var fill = null;
			};
			if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
				var options = null;
			};
			var options = options || UsrObject ();
			options.fill = fill;
			var array = [];
			for (var i = 0; i < len(points); i++) {
			array.push(points[i]);
			}
			self.v.poly (array, options);
			return self;
		});},
		get size () {return __get__ (this, function (self) {
			return self.v.size ();
		});},
		get header () {return __get__ (this, function (self, creep, options) {
			if (typeof options == 'undefined' || (options != null && options.hasOwnProperty ("__kwargtrans__"))) {;
				var options = null;
			};
			if (creep) {
				var txt = creep.py_name || '';
				var hp_tencent = get.health (creep, true);
				var _hex = Math.floor ((hp_tencent * 255) / 100).toString (16).padStart (2, '0');
				var color = '#AE{}80'.format (_hex);
				if (txt) {
					txt += '|{}'.format ((hp_tencent < 100 ? Math.floor (hp_tencent / 10) : 'A'));
				}
				else {
					var txt = '{}'.format (hp_tencent);
				}
				self.text (txt, get.offset (creep, 0, -(0.6)), 0.4, color, (options === null ? ut.VIEW_NAME_OPTS : options));
			}
			else {
				std.warn ('View.header', 'No creep object:', creep);
			}
			return self;
		});}
	}),
	Efr: __class__ ('Efr', [object], {
		__module__: __name__,
		id: 0,
		SolutionMissing: __class__ ('SolutionMissing', [Exception], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				var event = null;
				var args = tuple ([].slice.apply (arguments).slice (1));
				__super__ (ut.Efr.SolutionMissing, '__init__') (self, ...args);
				self.event = event;
			});},
			get __str__ () {return __get__ (this, function (self) {
				var txt = '\n[SolutionMissing]: ' + 'Event refused by all stations.\n';
				if (self.event) {
					txt += '\tEvent: ' + str (self.event);
				}
				if (self.args) {
					txt += '\tDetails:';
					for (var info of self.args) {
						txt += '\n\t\t' + str (info);
					}
				}
				return txt;
			});}
		}),
		Event: __class__ ('Event', [object], {
			__module__: __name__,
			STATE_OFFLINE: 0,
			STATE_JUNIOR: 1,
			STATE_URGENT: 2,
			STATE_FINISH: 3,
			STATE_RETIRED: 4,
			STATE_EXCEPT: -(1),
			EVENT_ONCE: 1,
			EVENT_ALL: 65535,
			get __init__ () {return __get__ (this, function (self, source, dest, task, tags, times) {
				if (typeof source == 'undefined' || (source != null && source.hasOwnProperty ("__kwargtrans__"))) {;
					var source = null;
				};
				if (typeof dest == 'undefined' || (dest != null && dest.hasOwnProperty ("__kwargtrans__"))) {;
					var dest = null;
				};
				if (typeof task == 'undefined' || (task != null && task.hasOwnProperty ("__kwargtrans__"))) {;
					var task = null;
				};
				if (typeof tags == 'undefined' || (tags != null && tags.hasOwnProperty ("__kwargtrans__"))) {;
					var tags = null;
				};
				if (typeof times == 'undefined' || (times != null && times.hasOwnProperty ("__kwargtrans__"))) {;
					var times = 65535;
				};
				self.efr = null;
				self.trace = [];
				self.task = task;
				self.result = dict ({});
				self.source = source;
				self.dest = dest;
				self.tags = (tags !== null ? tags : tuple ([]));
				self.state = self.STATE_OFFLINE;
				self.times = times;
				self.links = 0;
			});},
			get offline () {return __get__ (this, function (self) {
				return self.state == self.STATE_OFFLINE;
			});},
			get junior () {return __get__ (this, function (self) {
				return self.state == self.STATE_JUNIOR || self.state == self.STATE_URGENT;
			});},
			get urgent () {return __get__ (this, function (self) {
				return self.state == self.STATE_URGENT;
			});},
			get finish () {return __get__ (this, function (self) {
				return self.state == self.STATE_FINISH || self.state == self.STATE_RETIRED;
			});},
			get retired () {return __get__ (this, function (self) {
				return self.state == self.STATE_RETIRED;
			});},
			get excepted () {return __get__ (this, function (self) {
				return self.state == self.STATE_EXCEPT;
			});},
			get excepts () {return __get__ (this, function (self) {
				return self.trace;
			});},
			get set_result () {return __get__ (this, function (self, station_key, result, syscall) {
				if (typeof syscall == 'undefined' || (syscall != null && syscall.hasOwnProperty ("__kwargtrans__"))) {;
					var syscall = false;
				};
				self.result [station_key] = result;
				if (!(syscall)) {
					self.links--;
					if (self.links <= 0) {
						self.state = self.STATE_FINISH;
					}
					else {
						self.state = self.STATE_RETIRED;
					}
				}
			});},
			get get_result () {return __get__ (this, function (self, station_key) {
				if (typeof station_key == 'undefined' || (station_key != null && station_key.hasOwnProperty ("__kwargtrans__"))) {;
					var station_key = null;
				};
				if (station_key !== null) {
					return self.result.py_get (station_key);
				}
				else {
					var get = list (self.result.py_values ());
					return (get ? get [0] : null);
				}
			});},
			get __str__ () {return __get__ (this, function (self) {
				var s_tsk = str (self.task);
				var s_tsk = (len (s_tsk) < 40 ? s_tsk : s_tsk.__getslice__ (0, 40, 1) + '...');
				var txt = 'Event[source:{}, dest:{}, task:{}, tags:{}]'.format (self.source, self.dest, s_tsk, self.tags);
				return txt;
			});}
		}),
		EventQueue: __class__ ('EventQueue', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self) {
				self.efr = null;
				self.equeue = [];
			});},
			get push () {return __get__ (this, function (self, event) {
				self.equeue.append (event);
				event.efr = self.efr;
				if (event.state == ut.Efr.Event.STATE_OFFLINE) {
					event.state = ut.Efr.Event.STATE_JUNIOR;
				}
				return event;
			});},
			get release () {return __get__ (this, function (self, num) {
				if (typeof num == 'undefined' || (num != null && num.hasOwnProperty ("__kwargtrans__"))) {;
					var num = null;
				};
				if (num === null || num >= len (self.equeue)) {
					var _ = self.equeue;
					self.equeue = [];
					return _;
				}
				var _ = self.equeue.__getslice__ (0, num, 1);
				self.equeue = self.equeue.__getslice__ (num, null, 1);
				return _;
			});},
			get __len__ () {return __get__ (this, function (self) {
				return len (self.equeue);
			});}
		}),
		EventStation: __class__ ('EventStation', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, key, filter, respond, step, lv) {
				if (typeof filter == 'undefined' || (filter != null && filter.hasOwnProperty ("__kwargtrans__"))) {;
					var filter = null;
				};
				if (typeof respond == 'undefined' || (respond != null && respond.hasOwnProperty ("__kwargtrans__"))) {;
					var respond = null;
				};
				if (typeof step == 'undefined' || (step != null && step.hasOwnProperty ("__kwargtrans__"))) {;
					var step = null;
				};
				if (typeof lv == 'undefined' || (lv != null && lv.hasOwnProperty ("__kwargtrans__"))) {;
					var lv = null;
				};
				self.efr = null;
				self.key = key;
				self.equeue = ut.Efr.EventQueue ();
				self._filter = filter;
				self._respond = respond;
				self.step = step;
				self.lv = (lv === null ? 0 : lv);
			});},
			get filter () {return __get__ (this, function (self, event) {
				if (self._filter) {
					return self._filter (event);
				}
				return self.key == event.dest;
			});},
			get respond () {return __get__ (this, function (self, event) {
				if (self._respond) {
					return self._respond (event);
				}
				return ;
			});},
			get __str__ () {return __get__ (this, function (self) {
				var txt = 'estation: {}'.format (self.key);
				return txt;
			});},
			get push () {return __get__ (this, function (self, event) {
				var event = self.equeue.push (event);
				if (self.efr._log) {
					std.info ('estation<{}>'.format (self.key), 'recv event:', str (event));
				}
				if (event) {
					event.result [self.key] = null;
					if (event.state == ut.Efr.Event.STATE_JUNIOR) {
						event.state = ut.Efr.Event.STATE_URGENT;
					}
					event.links++;
					return true;
				}
				return false;
			});},
			get py_update () {return __get__ (this, function (self) {
				var events = self.equeue.release (self.step);
				for (var [i, event] of enumerate (events)) {
					if (event.state != ut.Efr.Event.STATE_EXCEPT) {
						try {
							var ret = self.respond (event);
						}
						catch (__except0__) {
							if (isinstance (__except0__, Exception)) {
								var err = __except0__;
								event.state = ut.Efr.Event.STATE_EXCEPT;
								err.where = 'respond of estation: {}'.format (self.key);
								event.trace.append (err);
								if (self.efr._log) {
									std.log ('esta<{}>'.format (self.key), str (err));
								}
								continue;
							}
							else {
								throw __except0__;
							}
						}
						if (self.efr._log) {
							std.log ('esta<{}>'.format (self.key), 'handle:', str (event));
						}
						if (ret === null) {
							if (self.efr._log) {
								std.log ('esta<{}>'.format (self.key), 'keep running:', str (event));
							}
							self.equeue.equeue.append (event);
							continue;
						}
						else if (ret === undefined) {
							if (self.efr._log) {
								std.log ('esta<{}>'.format (self.key), 'break on running:', str (event));
							}
							self.equeue.equeue.extend (events.__getslice__ (i, null, 1));
							break;
						}
						if (event.state != ut.Efr.Event.STATE_EXCEPT) {
							event.set_result (self.key, ret, __kwargtrans__ ({syscall: true}));
							event.links--;
							if (event.links <= 0) {
								event.state = ut.Efr.Event.STATE_RETIRED;
							}
							else {
								event.state = ut.Efr.Event.STATE_FINISH;
							}
						}
					}
				}
			});}
		}),
		EventAlloter: __class__ ('EventAlloter', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, equeue, step) {
				if (typeof step == 'undefined' || (step != null && step.hasOwnProperty ("__kwargtrans__"))) {;
					var step = null;
				};
				self.efr = null;
				self.equeue = equeue;
				self.step = step;
				self.stations = [];
			});},
			get login () {return __get__ (this, function (self, station) {
				for (var my_station of self.stations) {
					if (my_station.key == station.key) {
						return false;
					}
				}
				station.efr = self.efr;
				for (var i = 0; i < len (self.stations); i++) {
					if (station.lv > self.stations [i].lv) {
						self.stations.insert (i, station);
						return true;
					}
				}
				self.stations.append (station);
				return true;
			});},
			get logoff () {return __get__ (this, function (self, station) {
				try {
					station.etr = null;
					self.stations.remove (station);
				}
				catch (__except0__) {
					return false;
				}
				return true;
			});},
			get py_update () {return __get__ (this, function (self) {
				var events = self.equeue.release (self.step);
				for (var event of events) {
					var flag = false;
					for (var station of self.stations) {
						try {
							var get = station.filter (event);
						}
						catch (__except0__) {
							if (isinstance (__except0__, Exception)) {
								var err = __except0__;
								event.state = ut.Efr.Event.STATE_EXCEPT;
								err.where = 'filter of estation: {}'.format (station.key);
								event.trace.append (err);
								if (self.efr._log) {
									std.warn ('alloter: {}'.format (self.efr.py_name), str (err));
								}
								continue;
							}
							else {
								throw __except0__;
							}
						}
						if (get) {
							var get = station.push (event);
							if (get) {
								var flag = true;
							}
							event.times--;
							if (event.times <= 0) {
								break;
							}
						}
					}
					if (!(flag)) {
						event.state = ut.Efr.Event.STATE_EXCEPT;
						var err = ut.Efr.SolutionMissing (event);
						err.where = 'alloter: {}'.format (self.efr.py_name);
						event.trace.append (err);
						if (self.efr._log) {
							std.warn ('alloter: {}'.format (self.efr.py_name), str (err));
						}
					}
				}
			});}
		}),
		get __init__ () {return __get__ (this, function (self, py_name, step, log) {
			if (typeof py_name == 'undefined' || (py_name != null && py_name.hasOwnProperty ("__kwargtrans__"))) {;
				var py_name = null;
			};
			if (typeof step == 'undefined' || (step != null && step.hasOwnProperty ("__kwargtrans__"))) {;
				var step = null;
			};
			if (typeof log == 'undefined' || (log != null && log.hasOwnProperty ("__kwargtrans__"))) {;
				var log = true;
			};
			self.py_name = (py_name ? py_name : 'EventFramework-{}'.format (ut.Efr.id));
			ut.Efr.id++;
			self.log = log;
			self.equeue = ut.Efr.EventQueue ();
			self.ealloter = ut.Efr.EventAlloter (self.equeue, step);
			self.equeue.efr = self;
			self.ealloter.efr = self;
		});},
		get _get_stations () {return __get__ (this, function (self) {
			return self.ealloter.stations;
		});},
		get login () {return __get__ (this, function (self, key, filter, respond, step, lv) {
			if (typeof filter == 'undefined' || (filter != null && filter.hasOwnProperty ("__kwargtrans__"))) {;
				var filter = null;
			};
			if (typeof respond == 'undefined' || (respond != null && respond.hasOwnProperty ("__kwargtrans__"))) {;
				var respond = null;
			};
			if (typeof step == 'undefined' || (step != null && step.hasOwnProperty ("__kwargtrans__"))) {;
				var step = null;
			};
			if (typeof lv == 'undefined' || (lv != null && lv.hasOwnProperty ("__kwargtrans__"))) {;
				var lv = null;
			};
			if (isinstance (key, str)) {
				var station = ut.Efr.EventStation (key, filter, respond, (step === null ? self.ealloter.step : step), lv);
			}
			else {
				var station = key;
			}
			station.efr = self;
			station.equeue.efr = self;
			return self.ealloter.login (station);
		});},
		get logoff () {return __get__ (this, function (self, key) {
			for (var station of self.estations) {
				if (station.key == key) {
					return self.ealloter.logoff (station);
				}
			}
			return false;
		});},
		get push () {return __get__ (this, function (self, src, dst, task, tags, times) {
			if (typeof task == 'undefined' || (task != null && task.hasOwnProperty ("__kwargtrans__"))) {;
				var task = null;
			};
			if (typeof tags == 'undefined' || (tags != null && tags.hasOwnProperty ("__kwargtrans__"))) {;
				var tags = null;
			};
			if (typeof times == 'undefined' || (times != null && times.hasOwnProperty ("__kwargtrans__"))) {;
				var times = 65535;
			};
			var event = ut.Efr.Event (src, dst, task, tags, times);
			if (self.log) {
				std.info ('efr.push: '.format (), str (event));
			}
			return self.equeue.push (event);
		});},
		get py_update () {return __get__ (this, function (self, update_stations) {
			if (typeof update_stations == 'undefined' || (update_stations != null && update_stations.hasOwnProperty ("__kwargtrans__"))) {;
				var update_stations = true;
			};
			self.ealloter.py_update ();
			if (update_stations) {
				for (var station of self.ealloter.stations) {
					station.py_update ();
				}
			}
		});},
		get __str__ () {return __get__ (this, function (self) {
			return 'EventFramework';
		});}
	}),
	Mp: __class__ ('Mp', [object], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self, width, height) {
			if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
				var width = 100;
			};
			if (typeof height == 'undefined' || (height != null && height.hasOwnProperty ("__kwargtrans__"))) {;
				var height = 100;
			};
			var _map = [];
			for (var ih = 0; ih < height; ih++) {
				var new_line = [];
				for (var iw = 0; iw < width; iw++) {
					var ter = get.terrain (iw, ih);
					if (ter == TERRAIN_PLAIN) {
						new_line.append (2);
					}
					else if (ter == TERRAIN_SWAMP) {
						new_line.append (10);
					}
					else {
						new_line.append (255);
					}
				}
				_map.append (new_line);
			}
			self.map = _map;
			self.width = width;
			self.height = height;
			self.p2 = self.pooling (self.map, 2);
			self.p4 = self.pooling (self.p2, 2);
			self.p5 = self.pooling (self.map, 5);
			self.p8 = self.pooling (self.p4, 2);
			self.p10 = self.pooling (self.p5, 2);
		});},
		get pooling () {return function (tar_arr, kernel_size) {
			if (typeof kernel_size == 'undefined' || (kernel_size != null && kernel_size.hasOwnProperty ("__kwargtrans__"))) {;
				var kernel_size = 2;
			};
			if (kernel_size < 2) {
				var __except0__ = ValueError ('Kernel size should be greater than 1');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (len (tar_arr) < kernel_size || len (tar_arr [0]) < kernel_size) {
				var __except0__ = ValueError ('Array size should be greater than kernel size');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			var res = [];
			var k_square = Math.pow (kernel_size, 2);
			var _len_h = (Math.floor (len (tar_arr) / kernel_size)) * kernel_size;
			var _len_w = (Math.floor (len (tar_arr [0]) / kernel_size)) * kernel_size;
			for (var i of range (0, _len_h, kernel_size)) {
				var new_line = [];
				for (var j of range (0, _len_w, kernel_size)) {
					var _sum = 0;
					for (var k = 0; k < kernel_size; k++) {
						for (var l = 0; l < kernel_size; l++) {
							_sum += tar_arr [i + k] [j + l];
						}
					}
					new_line.append (Math.floor (_sum / k_square));
				}
				res.append (new_line);
			}
			return res;
		};},
		get get_pooling () {return __get__ (this, function (self, psize) {
			if (psize == 1) {
				return tuple ([self.map, 1]);
			}
			else if (psize == 2) {
				return tuple ([self.p2, 2]);
			}
			else if (psize == 4) {
				return tuple ([self.p4, 4]);
			}
			else if (psize == 5) {
				return tuple ([self.p5, 5]);
			}
			else if (psize == 8) {
				return tuple ([self.p8, 8]);
			}
			else if (psize == 10) {
				return tuple ([self.p10, 10]);
			}
			else {
				var __except0__ = ValueError (__mod__ ('psize should be 1, 2, 4, 5, 8 or 10. Got: %d', psize));
				__except0__.__cause__ = null;
				throw __except0__;
			}
		});},
		get find_space2x () {return __get__ (this, function (self, psize, x, y, rot) {
			if (typeof rot == 'undefined' || (rot != null && rot.hasOwnProperty ("__kwargtrans__"))) {;
				var rot = 0;
			};
			var calc_mean2x2 = function (arr, tx, ty) {
				var _sum = 0;
				for (var i = 0; i < 2; i++) {
					for (var j = 0; j < 2; j++) {
						_sum += arr [ty + j] [tx + i];
					}
				}
				return Math.floor (_sum / 4);
			};
			var __left0__ = self.get_pooling (psize);
			var pool = __left0__ [0];
			var p_size = __left0__ [1];
			var __left0__ = tuple ([len (pool [0]), len (pool)]);
			var width = __left0__ [0];
			var height = __left0__ [1];
			var __left0__ = tuple ([Math.floor (x / p_size), Math.floor (y / p_size)]);
			var tix = __left0__ [0];
			var tiy = __left0__ [1];
			var __left0__ = tuple ([1, 0]);
			var step = __left0__ [0];
			var dir_id = __left0__ [1];
			var __left0__ = tuple ([255, Position (x, y)]);
			var best_val = __left0__ [0];
			var best_pos = __left0__ [1];
			if (rot) {
				var directs = [tuple ([-(1), 0]), tuple ([0, 1]), tuple ([1, 0]), tuple ([0, -(1)])];
			}
			else {
				var directs = [tuple ([1, 0]), tuple ([0, -(1)]), tuple ([-(1), 0]), tuple ([0, 1])];
			}
			while (true) {
				for (var _ = 0; _ < 2; _++) {
					for (var _ = 0; _ < step; _++) {
						if ((0 <= tix && tix < width - 1) && (0 <= tiy && tiy < height - 1)) {
							var val = calc_mean2x2 (pool, tix, tiy);
							if (val <= 10) {
								return Position (tix * p_size, tiy * p_size);
							}
							else if (val < best_val) {
								var best_val = val;
								var best_pos = Position (tix * p_size, tiy * p_size);
							}
						}
						else if ((tix < 0 || tix >= width - 1) && (tiy < 0 || tiy >= height - 1)) {
							return best_pos;
						}
						tix += directs [dir_id] [0];
						tiy += directs [dir_id] [1];
					}
					var dir_id = __mod__ (dir_id + 1, 4);
				}
				step++;
			}
		});},
		get draw () {return __get__ (this, function (self, view, psize) {
			var op = UsrObject ();
			op.opacity = 0.15;
			var __left0__ = self.get_pooling (psize);
			var pool = __left0__ [0];
			var p_size = __left0__ [1];
			for (var ih = 0; ih < Math.floor (self.height / p_size); ih++) {
				for (var iw = 0; iw < Math.floor (self.width / p_size); iw++) {
					var value = pool [ih] [iw];
					if (value <= 2) {
						var color = '#EEEEEE';
					}
					else if (pool [ih] [iw] <= 5) {
						var color = '#DDFFAA';
					}
					else if (pool [ih] [iw] <= 10) {
						var color = '#BBFF88';
					}
					else if (pool [ih] [iw] <= 50) {
						var color = '#BBFF33';
					}
					else if (pool [ih] [iw] <= 100) {
						var color = '#EEEE33';
					}
					else if (pool [ih] [iw] <= 150) {
						var color = '#FFAA33';
					}
					else if (pool [ih] [iw] <= 200) {
						var color = '#FF6666';
					}
					else {
						var color = '#FF33AA';
					}
					view.rect (Position (iw * p_size - 0.5, ih * p_size - 0.5), p_size, p_size, color, op);
				}
			}
		});}
	}),
	CInfo: __class__ ('CInfo', [object], {
		__module__: __name__,
		get __init__ () {return __get__ (this, function (self, creep) {
			self.nums = dict ([[MOVE, 0], [WORK, 0], [CARRY, 0], [ATTACK, 0], [RANGED_ATTACK, 0], [HEAL, 0], [TOUGH, 0]]);
			var prts = get.parts (creep);
			for (var prt of prts) {
				self.nums [prt]++;
			}
			self.score = get.score (creep);
		});}
	}),
	StV: __class__ ('StV', [object], {
		__module__: __name__,
		SIZE: 10,
		get _new_arr2d () {return function (val) {
			if (typeof val == 'undefined' || (val != null && val.hasOwnProperty ("__kwargtrans__"))) {;
				var val = null;
			};
			var _empty_list = isinstance (val, list) && len (val) == 0;
			var new_arr = [];
			for (var _ = 0; _ < ut.StV.SIZE; _++) {
				if (val !== null) {
					var row = (function () {
						var __accu0__ = [];
						for (var _ = 0; _ < ut.StV.SIZE; _++) {
							__accu0__.append ((!(_empty_list) ? val : []));
						}
						return __accu0__;
					}) ();
				}
				else {
					var row = [];
				}
				new_arr.append (row);
			}
			return new_arr;
		};},
		get _new_view2d () {return function (layer) {
			var new_arr = [];
			for (var i = 0; i < ut.StV.SIZE; i++) {
				var new_row = [];
				for (var j = 0; j < ut.StV.SIZE; j++) {
					new_row.append (ut.View (layer, true));
				}
				new_arr.append (new_row);
			}
			return new_arr;
		};},
		get _opacity_fn () {return function (strength) {
			return (1 + (9 * strength) / (strength + 200)) * 0.05;
		};},
		get _get_score () {return function (cs_dict, creep, _del) {
			if (typeof _del == 'undefined' || (_del != null && _del.hasOwnProperty ("__kwargtrans__"))) {;
				var _del = false;
			};
			var cst_info = (_del ? cs_dict.py_pop (creep.id, null) : cs_dict.py_get (creep.id, null));
			if (cst_info === null) {
				return get.score (creep);
			}
			return cst_info.score;
		};},
		get ipos () {return function (x, y, bia_x, bia_y) {
			if (typeof bia_x == 'undefined' || (bia_x != null && bia_x.hasOwnProperty ("__kwargtrans__"))) {;
				var bia_x = 0;
			};
			if (typeof bia_y == 'undefined' || (bia_y != null && bia_y.hasOwnProperty ("__kwargtrans__"))) {;
				var bia_y = 0;
			};
			return Position (Math.floor (x / 10) + bia_x, Math.floor (y / 10) + bia_y);
		};},
		get xpos () {return function (ix, iy, bia_x, bia_y) {
			if (typeof bia_x == 'undefined' || (bia_x != null && bia_x.hasOwnProperty ("__kwargtrans__"))) {;
				var bia_x = 0;
			};
			if (typeof bia_y == 'undefined' || (bia_y != null && bia_y.hasOwnProperty ("__kwargtrans__"))) {;
				var bia_y = 0;
			};
			return Position (ix * 10 + bia_x, iy * 10 + bia_y);
		};},
		get __init__ () {return __get__ (this, function (self, mp, draw, log) {
			if (typeof draw == 'undefined' || (draw != null && draw.hasOwnProperty ("__kwargtrans__"))) {;
				var draw = 1 | 2;
			};
			if (typeof log == 'undefined' || (log != null && log.hasOwnProperty ("__kwargtrans__"))) {;
				var log = false;
			};
			self.log = log;
			self.p5 = mp.p5;
			self.p10 = mp.p10;
			self.cs = dict ({});
			self.ec = dict ({'b': self._new_arr2d ([]), 'w': self._new_arr2d ([]), 'o': self._new_arr2d ([]), 's': self._new_arr2d (0)});
			self.fc = dict ({'b': self._new_arr2d ([]), 'w': self._new_arr2d ([]), 'o': self._new_arr2d ([]), 's': self._new_arr2d (0)});
			self.views = self._new_view2d (999);
			self.e_spawns = [];
			self.f_spawns = [];
			for (var spawn of get.spawns ()) {
				if (st.friend (spawn)) {
					self.f_spawns.append ([spawn, null]);
				}
				else {
					self.e_spawns.append ([spawn, null]);
				}
			}
			self.draw = bool (draw);
			self.f_draw = draw & 1;
			self.e_draw = draw & 2;
		});},
		get add () {return __get__ (this, function (self, creep) {
			var cs = ut.CInfo (creep);
			self.cs [creep.id] = cs;
			var is_friend = st.friend (creep);
			var __left0__ = tuple ([Math.floor (creep.x / 10), Math.floor (creep.y / 10)]);
			var ix = __left0__ [0];
			var iy = __left0__ [1];
			var sel = (is_friend ? self.fc : self.ec);
			var key = 'o';
			if (st.atkable (creep) || st.healable (creep)) {
				var key = 'b';
			}
			else if (st.workable (creep)) {
				var key = 'w';
			}
			sel [key] [iy] [ix].append (creep);
			sel ['s'] [iy] [ix] += cs.score;
			if (self.log) {
				std.info ('ut.StV.add', 'add {} creep:{}({}) into "{}" at ({}, {}).'.format ((is_friend ? 'friend' : 'enemy'), creep.id, cs.score, key, ix, iy));
			}
		});},
		get draw_area () {return __get__ (this, function (self, iw, ih) {
			var __left0__ = tuple ([self.fc ['s'] [ih] [iw], self.ec ['s'] [ih] [iw]]);
			var fcs = __left0__ [0];
			var ecs = __left0__ [1];
			var pos = self.xpos (iw, ih, -(0.5), 0.5);
			var op = UsrObject ();
			if (self.log) {
				std.info ('ut.StV.draw_area', 'draw area ({}, {}). fcs:{}, ecs:{}. xpos:({}, {}).'.format (iw, ih, fcs, ecs, pos.x, pos.y));
			}
			var view = self.views [ih] [iw];
			view.clear ();
			if (self.f_draw && fcs) {
				op.opacity = self._opacity_fn (fcs);
				view.rect (pos, 10, 10, 'green', op);
			}
			if (self.e_draw && ecs) {
				op.opacity = self._opacity_fn (ecs);
				view.rect (pos, 10, 10, 'red', op);
			}
		});},
		get _move_creeps_and_record () {return __get__ (this, function (self, select, key, iy, ix, moves_record, redraw_record) {
			var __left0__ = tuple ([select ['s'], select [key] [iy] [ix]]);
			var scores = __left0__ [0];
			var area = __left0__ [1];
			var _removes = [];
			for (var [i, c] of enumerate (area)) {
				var __left0__ = tuple ([Math.floor (c.x / 10), Math.floor (c.y / 10)]);
				var new_ix = __left0__ [0];
				var new_iy = __left0__ [1];
				if (c.hits === undefined || c.hits <= 0) {
					_removes.append (i);
					scores [iy] [ix] -= self._get_score (self.cs, c, true);
					continue;
				}
				else if (new_ix != ix || new_iy != iy) {
					moves_record.append (tuple ([c, new_ix, new_iy]));
					_removes.append (i);
					var score = self._get_score (self.cs, c);
					scores [iy] [ix] -= score;
					scores [new_iy] [new_ix] += score;
					redraw_record.append (tuple ([new_ix, new_iy]));
				}
			}
			if (len (_removes)) {
				_removes.reverse ();
				for (var i of _removes) {
					area.py_pop (i);
				}
			}
			return len (_removes) > 0;
		});},
		get check_new_creep () {return __get__ (this, function (self, spawn_lcs) {
			var _news = [];
			for (var i = 0; i < len (spawn_lcs); i++) {
				var __left0__ = spawn_lcs [i];
				var spawn = __left0__ [0];
				var lc = __left0__ [1];
				var sc = spawn?.spawning?.creep;
				if (sc && (!(lc) || sc.id != lc.id)) {
					self.add (sc);
					_news.append (sc);
					spawn_lcs [i] [1] = sc;
				}
			}
			return _news;
		});},
		get check_creeps_moves () {return __get__ (this, function (self) {
			var __left0__ = tuple ([[], []]);
			var _fcb_moves = __left0__ [0];
			var _ecb_moves = __left0__ [1];
			var __left0__ = tuple ([[], []]);
			var _fcw_moves = __left0__ [0];
			var _ecw_moves = __left0__ [1];
			var __left0__ = tuple ([[], []]);
			var _fco_moves = __left0__ [0];
			var _eco_moves = __left0__ [1];
			var redraw_area_ids = [];
			for (var ih = 0; ih < self.SIZE; ih++) {
				for (var iw = 0; iw < self.SIZE; iw++) {
					var _ = false;
					if (len (self.fc ['b'] [ih] [iw])) {
						_ |= self._move_creeps_and_record (self.fc, 'b', ih, iw, _fcb_moves, redraw_area_ids);
					}
					if (len (self.fc ['w'] [ih] [iw])) {
						_ |= self._move_creeps_and_record (self.fc, 'w', ih, iw, _fcw_moves, redraw_area_ids);
					}
					if (len (self.fc ['o'] [ih] [iw])) {
						_ |= self._move_creeps_and_record (self.fc, 'o', ih, iw, _fco_moves, redraw_area_ids);
					}
					if (len (self.ec ['b'] [ih] [iw])) {
						_ |= self._move_creeps_and_record (self.ec, 'b', ih, iw, _ecb_moves, redraw_area_ids);
					}
					if (len (self.ec ['w'] [ih] [iw])) {
						_ |= self._move_creeps_and_record (self.ec, 'w', ih, iw, _ecw_moves, redraw_area_ids);
					}
					if (len (self.ec ['o'] [ih] [iw])) {
						_ |= self._move_creeps_and_record (self.ec, 'o', ih, iw, _eco_moves, redraw_area_ids);
					}
					if (_) {
						redraw_area_ids.append (tuple ([iw, ih]));
					}
				}
			}
			for (var each of _fcb_moves) {
				var __left0__ = each;
				var c = __left0__ [0];
				var new_x = __left0__ [1];
				var new_y = __left0__ [2];
				self.fc ['b'] [new_y] [new_x].append (c);
			}
			for (var each of _fcw_moves) {
				var __left0__ = each;
				var c = __left0__ [0];
				var new_x = __left0__ [1];
				var new_y = __left0__ [2];
				self.fc ['w'] [new_y] [new_x].append (c);
			}
			for (var each of _fco_moves) {
				var __left0__ = each;
				var c = __left0__ [0];
				var new_x = __left0__ [1];
				var new_y = __left0__ [2];
				self.fc ['o'] [new_y] [new_x].append (c);
			}
			for (var each of _ecb_moves) {
				var __left0__ = each;
				var c = __left0__ [0];
				var new_x = __left0__ [1];
				var new_y = __left0__ [2];
				self.ec ['b'] [new_y] [new_x].append (c);
			}
			for (var each of _ecw_moves) {
				var __left0__ = each;
				var c = __left0__ [0];
				var new_x = __left0__ [1];
				var new_y = __left0__ [2];
				self.ec ['w'] [new_y] [new_x].append (c);
			}
			for (var each of _eco_moves) {
				var __left0__ = each;
				var c = __left0__ [0];
				var new_x = __left0__ [1];
				var new_y = __left0__ [2];
				self.ec ['o'] [new_y] [new_x].append (c);
			}
			return list (set (redraw_area_ids));
		});},
		get filter () {return __get__ (this, function (self, filter_fn, ret_pos) {
			if (typeof ret_pos == 'undefined' || (ret_pos != null && ret_pos.hasOwnProperty ("__kwargtrans__"))) {;
				var ret_pos = true;
			};
			var filter_fn = std.combo_filter (filter_fn);
			var res = [];
			for (var iy = 0; iy < self.SIZE; iy++) {
				for (var ix = 0; ix < self.SIZE; ix++) {
					var crs = dict ({'fb': self.fc ['b'] [iy] [ix], 'fw': self.fc ['w'] [iy] [ix], 'fo': self.fc ['o'] [iy] [ix], 'eb': self.ec ['b'] [iy] [ix], 'ew': self.ec ['w'] [iy] [ix], 'eo': self.ec ['o'] [iy] [ix], 'fs': self.fc ['s'] [iy] [ix], 'es': self.ec ['s'] [iy] [ix]});
					if (filter_fn (crs)) {
						if (ret_pos) {
							res.append (tuple ([ix, iy]));
						}
						else {
							res.append (crs);
						}
					}
				}
			}
			return res;
		});},
		get find () {return __get__ (this, function (self, filter_fn, ret_pos) {
			if (typeof ret_pos == 'undefined' || (ret_pos != null && ret_pos.hasOwnProperty ("__kwargtrans__"))) {;
				var ret_pos = true;
			};
			var filter_fn = std.combo_filter (filter_fn);
			for (var iy = 0; iy < self.SIZE; iy++) {
				for (var ix = 0; ix < self.SIZE; ix++) {
					var crs = dict ({'fb': self.fc ['b'] [iy] [ix], 'fw': self.fc ['w'] [iy] [ix], 'fo': self.fc ['o'] [iy] [ix], 'eb': self.ec ['b'] [iy] [ix], 'ew': self.ec ['w'] [iy] [ix], 'eo': self.ec ['o'] [iy] [ix], 'fs': self.fc ['s'] [iy] [ix], 'es': self.ec ['s'] [iy] [ix]});
					if (filter_fn (crs)) {
						if (ret_pos) {
							return tuple ([ix, iy]);
						}
						return crs;
					}
				}
			}
			return null;
		});},
		get _check_area_fit () {return __get__ (this, function (self, ix, iy, py_metatype) {
			if (py_metatype == 'f') {
				return self.fc ['s'] [iy] [ix] > 0;
			}
			else if (py_metatype == 'e') {
				return self.ec ['s'] [iy] [ix] > 0;
			}
			else if (py_metatype == 'fb') {
				return len (self.fc ['b'] [iy] [ix]) > 0;
			}
			else if (py_metatype == 'fw') {
				return len (self.fc ['w'] [iy] [ix]) > 0;
			}
			else if (py_metatype == 'fo') {
				return len (self.fc ['o'] [iy] [ix]) > 0;
			}
			else if (py_metatype == 'eb') {
				return len (self.ec ['b'] [iy] [ix]) > 0;
			}
			else if (py_metatype == 'ew') {
				return len (self.ec ['w'] [iy] [ix]) > 0;
			}
			else if (py_metatype == 'eo') {
				return len (self.ec ['o'] [iy] [ix]) > 0;
			}
			else {
				return false;
			}
		});},
		get closest_area () {return __get__ (this, function (self, ix, iy, py_metatype, ret_pos) {
			if (typeof ret_pos == 'undefined' || (ret_pos != null && ret_pos.hasOwnProperty ("__kwargtrans__"))) {;
				var ret_pos = true;
			};
			if (self._check_area_fit (ix, iy, py_metatype)) {
				if (ret_pos) {
					return tuple ([ix, iy]);
				}
			}
			var directs = [tuple ([0, 1]), tuple ([1, 0]), tuple ([0, -(1)]), tuple ([-(1), 0])];
			var step = 1;
			while (true) {
				for (var i = 0; i < 4; i++) {
					for (var j = 0; j < step; j++) {
						ix += directs [i] [0];
						iy += directs [i] [1];
						if ((ix < 0 || ix >= 10) && (iy < 0 || iy >= 10)) {
							return null;
						}
						if ((0 <= ix && ix < 10) && (0 <= iy && iy < 10) && self._check_area_fit (ix, iy, py_metatype)) {
							return tuple ([ix, iy]);
						}
					}
				}
				step++;
			}
		});},
		get py_update () {return __get__ (this, function (self) {
			var redraw = self.check_creeps_moves ();
			var _new_e = self.check_new_creep (self.e_spawns);
			var _new_f = self.check_new_creep (self.f_spawns);
			if (self.draw) {
				for (var creep of _new_e) {
					self.draw_area (Math.floor (creep.x / self.SIZE), Math.floor (creep.y / self.SIZE));
				}
				for (var creep of _new_f) {
					self.draw_area (Math.floor (creep.x / self.SIZE), Math.floor (creep.y / self.SIZE));
				}
				for (var each of redraw) {
					self.draw_area (each [0], each [1]);
				}
			}
		});}
	})
});
Object.defineProperty (ut.Efr, 'stations', property.call (ut.Efr, ut.Efr._get_stations));;
ut.VIEW_NAME_OPTS.font = '0.5';
ut.VIEW_NAME_OPTS.align = 'center';
ut.VIEW_NAME_OPTS.opacity = 0.7;
ut.VIEW_NAME_OPTS.color = '#AEFC80';

//# sourceMappingURL=std.map
// Transcrypt'ed from Python, 2024-07-17 17:38:12
var __name__ = '__main__';
export var loop = function () {
	var creeps = get.friends (st.creep);
	var enemy = get.enemy (st.creep);
	for (var creep of creeps) {
		if (st.melee (creep)) {
			put.attack (creep, enemy);
		}
		if (st.ranged (creep)) {
			put.attack (creep, enemy);
		}
		if (st.healable (creep)) {
			var damaged = get.friend ((function __lambda__ (obj) {
				return obj.hits < obj.hitsMax;
			}));
			if (damaged) {
				put.heal (creep, damaged);
			}
		}
	}
	std.show_usage ();
};

//# sourceMappingURL=main.map
