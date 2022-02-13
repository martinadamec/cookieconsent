// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"5qf4":[function(require,module,exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],"2uHg":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"5BXi":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],"P9Ib":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":"5BXi"}],"ss9A":[function(require,module,exports) {
var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],"M7z6":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"eT53":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":"M7z6"}],"/vZ6":[function(require,module,exports) {
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_is-object":"M7z6","./_global":"5qf4"}],"/o6G":[function(require,module,exports) {
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":"P9Ib","./_fails":"5BXi","./_dom-create":"/vZ6"}],"9y37":[function(require,module,exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":"M7z6"}],"nw8e":[function(require,module,exports) {
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":"eT53","./_ie8-dom-define":"/o6G","./_to-primitive":"9y37","./_descriptors":"P9Ib"}],"uJ6d":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"0NXb":[function(require,module,exports) {
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_object-dp":"nw8e","./_property-desc":"uJ6d","./_descriptors":"P9Ib"}],"U49f":[function(require,module,exports) {
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],"H21C":[function(require,module,exports) {
module.exports = false;

},{}],"6zGc":[function(require,module,exports) {

var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":"ss9A","./_global":"5qf4","./_library":"H21C"}],"d5RU":[function(require,module,exports) {
module.exports = require('./_shared')('native-function-to-string', Function.toString);

},{"./_shared":"6zGc"}],"PHot":[function(require,module,exports) {

var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var $toString = require('./_function-to-string');
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_global":"5qf4","./_hide":"0NXb","./_has":"2uHg","./_uid":"U49f","./_function-to-string":"d5RU","./_core":"ss9A"}],"6kYj":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],"E3Kh":[function(require,module,exports) {
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":"6kYj"}],"izCb":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_global":"5qf4","./_core":"ss9A","./_hide":"0NXb","./_redefine":"PHot","./_ctx":"E3Kh"}],"AoVy":[function(require,module,exports) {
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_uid":"U49f","./_is-object":"M7z6","./_has":"2uHg","./_object-dp":"nw8e","./_fails":"5BXi"}],"44AI":[function(require,module,exports) {
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_shared":"6zGc","./_uid":"U49f","./_global":"5qf4"}],"rq3q":[function(require,module,exports) {
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_object-dp":"nw8e","./_has":"2uHg","./_wks":"44AI"}],"AuE7":[function(require,module,exports) {
exports.f = require('./_wks');

},{"./_wks":"44AI"}],"r4vV":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_global":"5qf4","./_core":"ss9A","./_library":"H21C","./_wks-ext":"AuE7","./_object-dp":"nw8e"}],"Z5df":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"nGau":[function(require,module,exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":"Z5df"}],"+Bjj":[function(require,module,exports) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],"g6sb":[function(require,module,exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_iobject":"nGau","./_defined":"+Bjj"}],"yjVO":[function(require,module,exports) {
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"dJBs":[function(require,module,exports) {
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":"yjVO"}],"vfEH":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":"yjVO"}],"4Ca7":[function(require,module,exports) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-iobject":"g6sb","./_to-length":"dJBs","./_to-absolute-index":"vfEH"}],"NaGB":[function(require,module,exports) {
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":"6zGc","./_uid":"U49f"}],"vL0Z":[function(require,module,exports) {
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_has":"2uHg","./_to-iobject":"g6sb","./_array-includes":"4Ca7","./_shared-key":"NaGB"}],"9bbv":[function(require,module,exports) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],"U9a7":[function(require,module,exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_object-keys-internal":"vL0Z","./_enum-bug-keys":"9bbv"}],"EWMd":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"vjRp":[function(require,module,exports) {
exports.f = {}.propertyIsEnumerable;

},{}],"0jjw":[function(require,module,exports) {
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-keys":"U9a7","./_object-gops":"EWMd","./_object-pie":"vjRp"}],"JTrm":[function(require,module,exports) {
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":"Z5df"}],"MiMz":[function(require,module,exports) {
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_object-dp":"nw8e","./_an-object":"eT53","./_object-keys":"U9a7","./_descriptors":"P9Ib"}],"xj/b":[function(require,module,exports) {
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":"5qf4"}],"sYaK":[function(require,module,exports) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":"eT53","./_object-dps":"MiMz","./_enum-bug-keys":"9bbv","./_shared-key":"NaGB","./_dom-create":"/vZ6","./_html":"xj/b"}],"Vzm0":[function(require,module,exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_object-keys-internal":"vL0Z","./_enum-bug-keys":"9bbv"}],"dvol":[function(require,module,exports) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_to-iobject":"g6sb","./_object-gopn":"Vzm0"}],"uIjZ":[function(require,module,exports) {
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_object-pie":"vjRp","./_property-desc":"uJ6d","./_to-iobject":"g6sb","./_to-primitive":"9y37","./_has":"2uHg","./_ie8-dom-define":"/o6G","./_descriptors":"P9Ib"}],"uVn9":[function(require,module,exports) {

'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_global":"5qf4","./_has":"2uHg","./_descriptors":"P9Ib","./_export":"izCb","./_redefine":"PHot","./_meta":"AoVy","./_fails":"5BXi","./_shared":"6zGc","./_set-to-string-tag":"rq3q","./_uid":"U49f","./_wks":"44AI","./_wks-ext":"AuE7","./_wks-define":"r4vV","./_enum-keys":"0jjw","./_is-array":"JTrm","./_an-object":"eT53","./_is-object":"M7z6","./_to-iobject":"g6sb","./_to-primitive":"9y37","./_property-desc":"uJ6d","./_object-create":"sYaK","./_object-gopn-ext":"dvol","./_object-gopd":"uIjZ","./_object-dp":"nw8e","./_object-keys":"U9a7","./_object-gopn":"Vzm0","./_object-pie":"vjRp","./_object-gops":"EWMd","./_library":"H21C","./_hide":"0NXb"}],"GM7B":[function(require,module,exports) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":"Z5df","./_wks":"44AI"}],"4zTK":[function(require,module,exports) {
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof');
var test = {};
test[require('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"./_classof":"GM7B","./_wks":"44AI","./_redefine":"PHot"}],"CtPZ":[function(require,module,exports) {
require('../modules/es6.symbol');
require('../modules/es6.object.to-string');
module.exports = require('../modules/_core').Symbol;

},{"../modules/es6.symbol":"uVn9","../modules/es6.object.to-string":"4zTK","../modules/_core":"ss9A"}],"x5yM":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_to-integer":"yjVO","./_defined":"+Bjj"}],"JO4d":[function(require,module,exports) {
module.exports = {};

},{}],"ebgP":[function(require,module,exports) {
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_object-create":"sYaK","./_property-desc":"uJ6d","./_set-to-string-tag":"rq3q","./_hide":"0NXb","./_wks":"44AI"}],"rfVX":[function(require,module,exports) {
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":"+Bjj"}],"8q6y":[function(require,module,exports) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":"2uHg","./_to-object":"rfVX","./_shared-key":"NaGB"}],"mH0U":[function(require,module,exports) {
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_library":"H21C","./_export":"izCb","./_redefine":"PHot","./_hide":"0NXb","./_iterators":"JO4d","./_iter-create":"ebgP","./_set-to-string-tag":"rq3q","./_object-gpo":"8q6y","./_wks":"44AI"}],"tbKg":[function(require,module,exports) {
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_string-at":"x5yM","./_iter-define":"mH0U"}],"Z7e/":[function(require,module,exports) {
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_wks":"44AI","./_hide":"0NXb"}],"x8b3":[function(require,module,exports) {
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],"6w+v":[function(require,module,exports) {
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":"Z7e/","./_iter-step":"x8b3","./_iterators":"JO4d","./_to-iobject":"g6sb","./_iter-define":"mH0U"}],"v6Aj":[function(require,module,exports) {

var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"./es6.array.iterator":"6w+v","./_object-keys":"U9a7","./_redefine":"PHot","./_global":"5qf4","./_hide":"0NXb","./_iterators":"JO4d","./_wks":"44AI"}],"KQqW":[function(require,module,exports) {
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/es6.string.iterator":"tbKg","../../modules/web.dom.iterable":"v6Aj","../../modules/_wks-ext":"AuE7"}],"/6wJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utilities =
/*#__PURE__*/
function () {
  function Utilities() {
    _classCallCheck(this, Utilities);
  }

  _createClass(Utilities, null, [{
    key: "ready",
    value: function ready(fn) {
      if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    }
  }, {
    key: "objectType",
    value: function objectType(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1);
    }
  }, {
    key: "lightenDarkenColor",
    value: function lightenDarkenColor(col, amt) {
      var usePound = false;

      if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
      }

      var num = parseInt(col, 16);
      var r = (num >> 16) + amt;

      if (r > 255) {
        r = 255;
      } else if (r < 0) {
        r = 0;
      }

      var b = (num >> 8 & 0x00FF) + amt;

      if (b > 255) {
        b = 255;
      } else if (b < 0) {
        b = 0;
      }

      var g = (num & 0x0000FF) + amt;

      if (g > 255) {
        g = 255;
      } else if (g < 0) {
        g = 0;
      }

      return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
    }
  }, {
    key: "removeCookie",
    value: function removeCookie() {
      document.cookie = "cconsent=; expires=Thu, 01 Jan 1980 00:00:00 UTC; path=/;";
    } // Create an array of services from Cookieconsent global object
    // Filter based on category or leave empty is all is wanted

  }, {
    key: "listGlobalServices",
    value: function listGlobalServices(category) {
      var categories = []; // Global config objectnot set

      if (typeof window.CookieConsent === 'undefined') return categories; // Category is not specified or opposite

      if (typeof category === 'undefined') {
        for (var key in window.CookieConsent.config.services) {
          categories.push(key);
        }
      } else {
        for (var _key in window.CookieConsent.config.services) {
          if (window.CookieConsent.config.services[_key].category === category) categories.push(_key);
        }
      }

      return categories;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(elem, event) {
      var event;

      if (typeof Event === 'function') {
        event = new Event(event);
      } else {
        event = document.createEvent('Event');
        event.initEvent(event, true, true);
      }

      elem.dispatchEvent(event);
    }
  }]);

  return Utilities;
}();

exports.default = Utilities;
},{}],"aJ5U":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Filter =
/*#__PURE__*/
function () {
  function Filter() {
    _classCallCheck(this, Filter);
  }

  _createClass(Filter, [{
    key: "createBlacklist",
    value: function createBlacklist(type) {
      var services = {};

      for (var service in window.CookieConsent.config.services) {
        if (window.CookieConsent.config.services[service].type === type) {
          if (window.CookieConsent.config.categories[window.CookieConsent.config.services[service].category].needed === false) {
            if (window.CookieConsent.config.categories[window.CookieConsent.config.services[service].category].wanted === false) {
              services[service] = window.CookieConsent.config.services[service];
            }
          }
        }
      }

      var blacklist = [];

      for (var service in services) {
        var type = _Utilities.default.objectType(services[service].search);

        if (type === 'String') {
          blacklist.push(services[service].search);
        } else if (type === 'Array') {
          for (var i = 0; i < services[service].search.length; i++) {
            blacklist.push(services[service].search[i]);
          }
        }
      }

      return blacklist;
    }
  }]);

  return Filter;
}();

exports.default = Filter;
},{"./Utilities":"/6wJ"}],"UWvR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Filter2 = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InsertScriptFilter =
/*#__PURE__*/
function (_Filter) {
  _inherits(InsertScriptFilter, _Filter);

  function InsertScriptFilter() {
    _classCallCheck(this, InsertScriptFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(InsertScriptFilter).call(this));
  }

  _createClass(InsertScriptFilter, [{
    key: "init",
    value: function init() {
      this.overrideAppendChild();
      this.overrideInsertBefore();
    }
  }, {
    key: "overrideAppendChild",
    value: function overrideAppendChild() {
      Element.prototype.appendChild = function (elem) {
        if (arguments[0].tagName === 'SCRIPT') {
          //console.log('Appending:', arguments);
          for (var key in window.CookieConsent.config.services) {
            // Did user opt-in?
            if (window.CookieConsent.config.services[key].type === 'dynamic-script') {
              if (arguments[0].outerHTML.indexOf(window.CookieConsent.config.services[key].search) >= 0) {
                if (window.CookieConsent.config.categories[window.CookieConsent.config.services[key].category].wanted === false) {
                  window.CookieConsent.buffer.appendChild.push({
                    'this': this,
                    'category': window.CookieConsent.config.services[key].category,
                    arguments: arguments
                  });
                  return undefined;
                }
              }
            }
          }
        }

        return Node.prototype.appendChild.apply(this, arguments);
      };
    }
  }, {
    key: "overrideInsertBefore",
    value: function overrideInsertBefore() {
      Element.prototype.insertBefore = function (elem) {
        if (arguments[0].tagName === 'SCRIPT') {
          //console.log('Inserting:', arguments);
          for (var key in window.CookieConsent.config.services) {
            // Did user opt-in?
            if (window.CookieConsent.config.services[key].type === 'dynamic-script') {
              if (arguments[0].outerHTML.indexOf(window.CookieConsent.config.services[key].search) >= 0) {
                if (window.CookieConsent.config.categories[window.CookieConsent.config.services[key].category].wanted === false) {
                  window.CookieConsent.buffer.insertBefore.push({
                    'this': this,
                    'category': window.CookieConsent.config.services[key].category,
                    arguments: arguments
                  });
                  return undefined;
                }
              }
            }
          }
        }

        return Node.prototype.insertBefore.apply(this, arguments);
      };
    }
  }]);

  return InsertScriptFilter;
}(_Filter2.default);

exports.default = InsertScriptFilter;
},{"./Filter":"aJ5U"}],"ob2e":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utilities = _interopRequireDefault(require("./Utilities"));

var _Filter2 = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ScriptTagFilter =
/*#__PURE__*/
function (_Filter) {
  _inherits(ScriptTagFilter, _Filter);

  function ScriptTagFilter() {
    _classCallCheck(this, ScriptTagFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScriptTagFilter).call(this));
  }

  _createClass(ScriptTagFilter, [{
    key: "init",
    value: function init() {
      this.filterTags();
    }
  }, {
    key: "filterTags",
    value: function filterTags() {
      var _this = this;

      _Utilities.default.ready(function () {
        var blacklist = _get(_getPrototypeOf(ScriptTagFilter.prototype), "createBlacklist", _this).call(_this, 'script-tag');

        var scriptTags = document.querySelectorAll('script[type="text/plain"]');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = scriptTags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var scriptTag = _step.value;

            if (blacklist.indexOf(scriptTag.dataset.consent) < 0) {
              var newtag = document.createElement('script');
              var parentNode = scriptTag.parentNode;
              scriptTag.type = 'text/javascript';
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = scriptTag.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var attribute = _step2.value;
                  newtag.setAttribute(attribute.nodeName, attribute.nodeValue);
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              newtag.innerHTML = scriptTag.innerHTML;
              parentNode.insertBefore(newtag, scriptTag);
              parentNode.removeChild(scriptTag);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
    }
  }]);

  return ScriptTagFilter;
}(_Filter2.default);

exports.default = ScriptTagFilter;
},{"./Utilities":"/6wJ","./Filter":"aJ5U"}],"935K":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Filter2 = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WrapperFilter =
/*#__PURE__*/
function (_Filter) {
  _inherits(WrapperFilter, _Filter);

  function WrapperFilter() {
    _classCallCheck(this, WrapperFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(WrapperFilter).call(this));
  }

  _createClass(WrapperFilter, [{
    key: "init",
    value: function init() {
      this.filterWrappers();
    }
  }, {
    key: "filterWrappers",
    value: function filterWrappers() {
      var blacklist = _get(_getPrototypeOf(WrapperFilter.prototype), "createBlacklist", this).call(this, 'wrapped');

      function wrapper() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var callback = arguments.length > 1 ? arguments[1] : undefined;

        if (blacklist.indexOf(name) < 0) {
          callback();
        }
      }

      window.CookieConsent.wrapper = wrapper;
    }
  }]);

  return WrapperFilter;
}(_Filter2.default);

exports.default = WrapperFilter;
},{"./Filter":"aJ5U"}],"2E//":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Filter2 = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LocalCookieFilter =
/*#__PURE__*/
function (_Filter) {
  _inherits(LocalCookieFilter, _Filter);

  function LocalCookieFilter() {
    _classCallCheck(this, LocalCookieFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(LocalCookieFilter).call(this));
  }

  _createClass(LocalCookieFilter, [{
    key: "init",
    value: function init() {
      this.filterlocalCookies();
    }
  }, {
    key: "getCookieDescriptor",
    value: function getCookieDescriptor() {
      var cookieDescriptor;
      cookieDescriptor = Object.getOwnPropertyDescriptor(document, 'cookie') || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie');

      if (!cookieDescriptor) {
        cookieDescriptor = {};
        cookieDescriptor.get = HTMLDocument.prototype.__lookupGetter__("cookie");
        cookieDescriptor.set = HTMLDocument.prototype.__lookupSetter__("cookie");
      }

      return cookieDescriptor;
    }
  }, {
    key: "filterlocalCookies",
    value: function filterlocalCookies() {
      // TODO - implement buffer
      var blacklist = _get(_getPrototypeOf(LocalCookieFilter.prototype), "createBlacklist", this).call(this, 'localcookie');

      var cookieDescriptor = this.getCookieDescriptor();
      Object.defineProperty(document, "cookie", {
        configurable: true,
        get: function get() {
          return cookieDescriptor.get.apply(document);
        },
        set: function set() {
          var cookieArguments = arguments;

          if (blacklist.length) {
            var cookieName = arguments[0].split('=')[0];
            Array.prototype.forEach.call(blacklist, function (blacklistItem) {
              if (cookieName.indexOf(blacklistItem) < 0) cookieDescriptor.set.apply(document, cookieArguments);
            });
          } else {
            cookieDescriptor.set.apply(document, cookieArguments);
          }
        }
      });
    }
  }]);

  return LocalCookieFilter;
}(_Filter2.default);

exports.default = LocalCookieFilter;
},{"./Filter":"aJ5U"}],"GuEK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = exports.svg = exports.s = exports.setChildren = exports.setStyle = exports.setAttr = exports.Router = exports.router = exports.Place = exports.place = exports.unmount = exports.mount = exports.ListPool = exports.listPool = exports.List = exports.list = exports.html = exports.h = exports.el = void 0;
var HASH = '#'.charCodeAt(0);
var DOT = '.'.charCodeAt(0);
var TAG_NAME = 0;
var ID = 1;
var CLASS_NAME = 2;

var parseQuery = function (query) {
  var tag = null;
  var id = null;
  var className = null;
  var mode = TAG_NAME;
  var offset = 0;

  for (var i = 0; i <= query.length; i++) {
    var char = query.charCodeAt(i);
    var isHash = char === HASH;
    var isDot = char === DOT;
    var isEnd = !char;

    if (isHash || isDot || isEnd) {
      if (mode === TAG_NAME) {
        if (i === 0) {
          tag = 'div';
        } else {
          tag = query.substring(offset, i);
        }
      } else if (mode === ID) {
        id = query.substring(offset, i);
      } else {
        if (className) {
          className += ' ' + query.substring(offset, i);
        } else {
          className = query.substring(offset, i);
        }
      }

      if (isHash) {
        mode = ID;
      } else if (isDot) {
        mode = CLASS_NAME;
      }

      offset = i + 1;
    }
  }

  return {
    tag: tag,
    id: id,
    className: className
  };
};

var createElement = function (query, ns) {
  var ref = parseQuery(query);
  var tag = ref.tag;
  var id = ref.id;
  var className = ref.className;
  var element = ns ? document.createElementNS(ns, tag) : document.createElement(tag);

  if (id) {
    element.id = id;
  }

  if (className) {
    if (ns) {
      element.setAttribute('class', className);
    } else {
      element.className = className;
    }
  }

  return element;
};

var unmount = function (parent, child) {
  var parentEl = getEl(parent);
  var childEl = getEl(child);

  if (child === childEl && childEl.__redom_view) {
    // try to look up the view if not provided
    child = childEl.__redom_view;
  }

  if (childEl.parentNode) {
    doUnmount(child, childEl, parentEl);
    parentEl.removeChild(childEl);
  }

  return child;
};

exports.unmount = unmount;

var doUnmount = function (child, childEl, parentEl) {
  var hooks = childEl.__redom_lifecycle;

  if (hooksAreEmpty(hooks)) {
    childEl.__redom_mounted = false;
    return;
  }

  var traverse = parentEl;

  if (childEl.__redom_mounted) {
    trigger(childEl, 'onunmount');
  }

  while (traverse) {
    var parentHooks = traverse.__redom_lifecycle || {};

    for (var hook in hooks) {
      if (parentHooks[hook]) {
        parentHooks[hook] -= hooks[hook];
      }
    }

    if (hooksAreEmpty(parentHooks)) {
      traverse.__redom_lifecycle = null;
    }

    traverse = traverse.parentNode;
  }
};

var hooksAreEmpty = function (hooks) {
  if (hooks == null) {
    return true;
  }

  for (var key in hooks) {
    if (hooks[key]) {
      return false;
    }
  }

  return true;
};

var hookNames = ['onmount', 'onremount', 'onunmount'];
var shadowRootAvailable = typeof window !== 'undefined' && 'ShadowRoot' in window;

var mount = function (parent, child, before, replace) {
  var parentEl = getEl(parent);
  var childEl = getEl(child);

  if (child === childEl && childEl.__redom_view) {
    // try to look up the view if not provided
    child = childEl.__redom_view;
  }

  if (child !== childEl) {
    childEl.__redom_view = child;
  }

  var wasMounted = childEl.__redom_mounted;
  var oldParent = childEl.parentNode;

  if (wasMounted && oldParent !== parentEl) {
    doUnmount(child, childEl, oldParent);
  }

  if (before != null) {
    if (replace) {
      parentEl.replaceChild(childEl, getEl(before));
    } else {
      parentEl.insertBefore(childEl, getEl(before));
    }
  } else {
    parentEl.appendChild(childEl);
  }

  doMount(child, childEl, parentEl, oldParent);
  return child;
};

exports.mount = mount;

var doMount = function (child, childEl, parentEl, oldParent) {
  var hooks = childEl.__redom_lifecycle || (childEl.__redom_lifecycle = {});
  var remount = parentEl === oldParent;
  var hooksFound = false;

  for (var i = 0, list = hookNames; i < list.length; i += 1) {
    var hookName = list[i];

    if (!remount) {
      // if already mounted, skip this phase
      if (child !== childEl) {
        // only Views can have lifecycle events
        if (hookName in child) {
          hooks[hookName] = (hooks[hookName] || 0) + 1;
        }
      }
    }

    if (hooks[hookName]) {
      hooksFound = true;
    }
  }

  if (!hooksFound) {
    childEl.__redom_mounted = true;
    return;
  }

  var traverse = parentEl;
  var triggered = false;

  if (remount || traverse && traverse.__redom_mounted) {
    trigger(childEl, remount ? 'onremount' : 'onmount');
    triggered = true;
  }

  while (traverse) {
    var parent = traverse.parentNode;
    var parentHooks = traverse.__redom_lifecycle || (traverse.__redom_lifecycle = {});

    for (var hook in hooks) {
      parentHooks[hook] = (parentHooks[hook] || 0) + hooks[hook];
    }

    if (triggered) {
      break;
    } else {
      if (traverse === document || shadowRootAvailable && traverse instanceof window.ShadowRoot || parent && parent.__redom_mounted) {
        trigger(traverse, remount ? 'onremount' : 'onmount');
        triggered = true;
      }

      traverse = parent;
    }
  }
};

var trigger = function (el, eventName) {
  if (eventName === 'onmount' || eventName === 'onremount') {
    el.__redom_mounted = true;
  } else if (eventName === 'onunmount') {
    el.__redom_mounted = false;
  }

  var hooks = el.__redom_lifecycle;

  if (!hooks) {
    return;
  }

  var view = el.__redom_view;
  var hookCount = 0;
  view && view[eventName] && view[eventName]();

  for (var hook in hooks) {
    if (hook) {
      hookCount++;
    }
  }

  if (hookCount) {
    var traverse = el.firstChild;

    while (traverse) {
      var next = traverse.nextSibling;
      trigger(traverse, eventName);
      traverse = next;
    }
  }
};

var setStyle = function (view, arg1, arg2) {
  var el = getEl(view);

  if (arg2 !== undefined) {
    el.style[arg1] = arg2;
  } else if (typeof arg1 === 'string') {
    el.setAttribute('style', arg1);
  } else {
    for (var key in arg1) {
      setStyle(el, key, arg1[key]);
    }
  }
};
/* global SVGElement */


exports.setStyle = setStyle;
var xlinkns = 'http://www.w3.org/1999/xlink';

var setAttr = function (view, arg1, arg2) {
  var el = getEl(view);
  var isSVG = el instanceof SVGElement;
  var isFunc = typeof arg2 === 'function';

  if (arg2 !== undefined) {
    if (arg1 === 'style') {
      setStyle(el, arg2);
    } else if (isSVG && isFunc) {
      el[arg1] = arg2;
    } else if (arg1 === 'dataset') {
      setData(el, arg2);
    } else if (!isSVG && (arg1 in el || isFunc)) {
      el[arg1] = arg2;
    } else {
      if (isSVG && arg1 === 'xlink') {
        setXlink(el, arg2);
        return;
      }

      el.setAttribute(arg1, arg2);
    }
  } else {
    for (var key in arg1) {
      setAttr(el, key, arg1[key]);
    }
  }
};

exports.setAttr = setAttr;

function setXlink(el, obj) {
  for (var key in obj) {
    el.setAttributeNS(xlinkns, key, obj[key]);
  }
}

function setData(el, obj) {
  for (var key in obj) {
    el.dataset[key] = obj[key];
  }
}

var text = function (str) {
  return document.createTextNode(str != null ? str : '');
};

exports.text = text;

var parseArguments = function (element, args) {
  for (var i = 0, list = args; i < list.length; i += 1) {
    var arg = list[i];

    if (arg !== 0 && !arg) {
      continue;
    }

    var type = typeof arg; // support middleware

    if (type === 'function') {
      arg(element);
    } else if (type === 'string' || type === 'number') {
      element.appendChild(text(arg));
    } else if (isNode(getEl(arg))) {
      mount(element, arg);
    } else if (arg.length) {
      parseArguments(element, arg);
    } else if (type === 'object') {
      setAttr(element, arg);
    }
  }
};

var ensureEl = function (parent) {
  return typeof parent === 'string' ? html(parent) : getEl(parent);
};

var getEl = function (parent) {
  return parent.nodeType && parent || !parent.el && parent || getEl(parent.el);
};

var isNode = function (a) {
  return a && a.nodeType;
};

var htmlCache = {};

var memoizeHTML = function (query) {
  return htmlCache[query] || (htmlCache[query] = createElement(query));
};

var html = function (query) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) args[len] = arguments[len + 1];

  var element;
  var type = typeof query;

  if (type === 'string') {
    element = memoizeHTML(query).cloneNode(false);
  } else if (isNode(query)) {
    element = query.cloneNode(false);
  } else if (type === 'function') {
    var Query = query;
    element = new (Function.prototype.bind.apply(Query, [null].concat(args)))();
  } else {
    throw new Error('At least one argument required');
  }

  parseArguments(getEl(element), args);
  return element;
};

exports.html = html;

html.extend = function (query) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) args[len] = arguments[len + 1];

  var clone = memoizeHTML(query);
  return html.bind.apply(html, [this, clone].concat(args));
};

var el = html;
exports.el = el;
var h = html;
exports.h = h;

var setChildren = function (parent) {
  var children = [],
      len = arguments.length - 1;

  while (len-- > 0) children[len] = arguments[len + 1];

  var parentEl = getEl(parent);
  var current = traverse(parent, children, parentEl.firstChild);

  while (current) {
    var next = current.nextSibling;
    unmount(parent, current);
    current = next;
  }
};

exports.setChildren = setChildren;

function traverse(parent, children, _current) {
  var current = _current;
  var childEls = new Array(children.length);

  for (var i = 0; i < children.length; i++) {
    childEls[i] = children[i] && getEl(children[i]);
  }

  for (var i$1 = 0; i$1 < children.length; i$1++) {
    var child = children[i$1];

    if (!child) {
      continue;
    }

    var childEl = childEls[i$1];

    if (childEl === current) {
      current = current.nextSibling;
      continue;
    }

    if (isNode(childEl)) {
      var next = current && current.nextSibling;
      var exists = child.__redom_index != null;
      var replace = exists && next === childEls[i$1 + 1];
      mount(parent, child, current, replace);

      if (replace) {
        current = next;
      }

      continue;
    }

    if (child.length != null) {
      current = traverse(parent, child, current);
    }
  }

  return current;
}

var propKey = function (key) {
  return function (item) {
    return item[key];
  };
};

var listPool = function (View, key, initData) {
  return new ListPool(View, key, initData);
};

exports.listPool = listPool;

var ListPool = function ListPool(View, key, initData) {
  this.View = View;
  this.initData = initData;
  this.oldLookup = {};
  this.lookup = {};
  this.oldViews = [];
  this.views = [];

  if (key != null) {
    this.key = typeof key === 'function' ? key : propKey(key);
  }
};

exports.ListPool = ListPool;

ListPool.prototype.update = function update(data, context) {
  var ref = this;
  var View = ref.View;
  var key = ref.key;
  var initData = ref.initData;
  var keySet = key != null;
  var oldLookup = this.lookup;
  var newLookup = {};
  var newViews = new Array(data.length);
  var oldViews = this.views;

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var view = void 0;

    if (keySet) {
      var id = key(item);
      view = oldLookup[id] || new View(initData, item, i, data);
      newLookup[id] = view;
      view.__redom_id = id;
    } else {
      view = oldViews[i] || new View(initData, item, i, data);
    }

    view.update && view.update(item, i, data, context);
    var el = getEl(view.el);
    el.__redom_view = view;
    newViews[i] = view;
  }

  this.oldViews = oldViews;
  this.views = newViews;
  this.oldLookup = oldLookup;
  this.lookup = newLookup;
};

var list = function (parent, View, key, initData) {
  return new List(parent, View, key, initData);
};

exports.list = list;

var List = function List(parent, View, key, initData) {
  this.__redom_list = true;
  this.View = View;
  this.initData = initData;
  this.views = [];
  this.pool = new ListPool(View, key, initData);
  this.el = ensureEl(parent);
  this.keySet = key != null;
};

exports.List = List;

List.prototype.update = function update(data, context) {
  if (data === void 0) data = [];
  var ref = this;
  var keySet = ref.keySet;
  var oldViews = this.views;
  this.pool.update(data, context);
  var ref$1 = this.pool;
  var views = ref$1.views;
  var lookup = ref$1.lookup;

  if (keySet) {
    for (var i = 0; i < oldViews.length; i++) {
      var oldView = oldViews[i];
      var id = oldView.__redom_id;

      if (lookup[id] == null) {
        oldView.__redom_index = null;
        unmount(this, oldView);
      }
    }
  }

  for (var i$1 = 0; i$1 < views.length; i$1++) {
    var view = views[i$1];
    view.__redom_index = i$1;
  }

  setChildren(this, views);

  if (keySet) {
    this.lookup = lookup;
  }

  this.views = views;
};

List.extend = function (parent, View, key, initData) {
  return List.bind(List, parent, View, key, initData);
};

list.extend = List.extend;
/* global Node */

var place = function (View, initData) {
  return new Place(View, initData);
};

exports.place = place;

var Place = function Place(View, initData) {
  this.el = text('');
  this.visible = false;
  this.view = null;
  this._placeholder = this.el;

  if (View instanceof Node) {
    this._el = View;
  } else {
    this._View = View;
  }

  this._initData = initData;
};

exports.Place = Place;

Place.prototype.update = function update(visible, data) {
  var placeholder = this._placeholder;
  var parentNode = this.el.parentNode;

  if (visible) {
    if (!this.visible) {
      if (this._el) {
        mount(parentNode, this._el, placeholder);
        unmount(parentNode, placeholder);
        this.el = this._el;
        this.visible = visible;
        return;
      }

      var View = this._View;
      var view = new View(this._initData);
      this.el = getEl(view);
      this.view = view;
      mount(parentNode, view, placeholder);
      unmount(parentNode, placeholder);
    }

    this.view && this.view.update && this.view.update(data);
  } else {
    if (this.visible) {
      if (this._el) {
        mount(parentNode, placeholder, this._el);
        unmount(parentNode, this._el);
        this.el = placeholder;
        this.visible = visible;
        return;
      }

      mount(parentNode, placeholder, this.view);
      unmount(parentNode, this.view);
      this.el = placeholder;
      this.view = null;
    }
  }

  this.visible = visible;
};

var router = function (parent, Views, initData) {
  return new Router(parent, Views, initData);
};

exports.router = router;

var Router = function Router(parent, Views, initData) {
  this.el = ensureEl(parent);
  this.Views = Views;
  this.initData = initData;
};

exports.Router = Router;

Router.prototype.update = function update(route, data) {
  if (route !== this.route) {
    var Views = this.Views;
    var View = Views[route];
    this.route = route;
    this.view = View && new View(this.initData, data);
    setChildren(this.el, [this.view]);
  }

  this.view && this.view.update && this.view.update(data, route);
};

var ns = 'http://www.w3.org/2000/svg';
var svgCache = {};

var memoizeSVG = function (query) {
  return svgCache[query] || (svgCache[query] = createElement(query, ns));
};

var svg = function (query) {
  var args = [],
      len = arguments.length - 1;

  while (len-- > 0) args[len] = arguments[len + 1];

  var element;
  var type = typeof query;

  if (type === 'string') {
    element = memoizeSVG(query).cloneNode(false);
  } else if (isNode(query)) {
    element = query.cloneNode(false);
  } else if (type === 'function') {
    var Query = query;
    element = new (Function.prototype.bind.apply(Query, [null].concat(args)))();
  } else {
    throw new Error('At least one argument required');
  }

  parseArguments(getEl(element), args);
  return element;
};

exports.svg = svg;

svg.extend = function (query) {
  var clone = memoizeSVG(query);
  return svg.bind(this, clone);
};

svg.ns = ns;
var s = svg;
exports.s = s;
},{}],"4LWe":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Language =
/*#__PURE__*/
function () {
  function Language() {
    _classCallCheck(this, Language);
  }

  _createClass(Language, [{
    key: "setLocale",
    value: function setLocale(locale) {
      window.CookieConsent.config.language.current = locale;
    }
  }], [{
    key: "getTranslation",
    value: function getTranslation(object, locale, key) {
      var currentLocale;
      if (!object.hasOwnProperty('language')) return '[Missing language object]';
      if (!object.language.hasOwnProperty('locale')) return '[Missing locale object]';
      currentLocale = object.language.locale.hasOwnProperty(locale) ? locale : 'en';
      return object.language.locale[currentLocale].hasOwnProperty(key) ? object.language.locale[currentLocale][key] : '[Missing translation]';
    }
  }]);

  return Language;
}();

exports.default = Language;
},{}],"/Qw2":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redom = require("redom");

var _Language = _interopRequireDefault(require("./Language"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Interface =
/*#__PURE__*/
function () {
  function Interface() {
    _classCallCheck(this, Interface);

    this.elements = {};
  }

  _createClass(Interface, [{
    key: "buildCustomBar",
    value: function buildCustomBar() {
      var bar = document.getElementById(window.CookieConsent.config.barCustomId);
      bar.classList.add('ccb--hidden');
      return bar;
    }
  }, {
    key: "getSvgCookies",
    value: function getSvgCookies() {
      return (0, _redom.svg)("svg", {
        viewBox: "0 0 1000 1000"
      }, (0, _redom.svg)("g", (0, _redom.svg)("g", {
        transform: 'translate(0.000000,511.000000) scale(0.100000,-0.100000)'
      }, (0, _redom.svg)('path', {
        d: "M6623.5,4884.8c-301.1-832.5-301.1-856,165.3-1056.8c490-206.6,537.3-183,808.8,354.2c230.3,454.6,248,608.1,88.6,667.1c-41.3,17.8-289.3,53.2-555,70.9C6753.4,4955.7,6647.1,4949.7,6623.5,4884.8z M7184.3,4359.4c-94.4-177.1-324.7-147.6-253.8,35.5c17.7,47.2,94.4,82.6,171.2,82.6C7231.6,4477.5,7237.5,4459.7,7184.3,4359.4z"
      }), (0, _redom.svg)('path', {
        d: "M3937.3,4684.1C1723.5,4241.3,100,2263.6,100,20.2c0-2514.9,2007.2-4622.5,4522.2-4734.7c1068.6-53.1,1960,183,2816,749.8C8807.8-3067.4,9604.8-1591.5,9604.8,49.7c0,696.6-35.4,767.5-425.1,767.5c-265.7,0-318.8,23.6-525.4,230.3c-165.3,165.3-230.3,277.5-230.3,407.3c0,100.4-41.3,224.4-94.4,271.6c-112.2,112.1-82.7,112.1-336.5,5.9c-631.7-259.7-1369.6,129.9-1493.6,785.2c-35.5,183,0,383.7,129.8,785.2c41.3,129.8-129.8,289.2-312.9,289.2c-371.9,0-667.1,354.2-667.1,791.1c0,242-17.7,283.4-153.5,330.6C5289.3,4796.3,4397.8,4778.6,3937.3,4684.1z M5230.3,4034.7c76.7-307,389.6-690.7,661.2-797c171.2-70.8,183-94.4,147.6-301.1c-94.4-578.5,248-1251.6,791.1-1552.6c277.5-153.5,383.7-177.1,749.8-177.1c413.3,0,430.9-5.9,495.9-165.4c100.4-247.9,495.9-572.6,785.2-649.4c312.9-82.6,336.5-147.6,265.7-832.4c-177.1-1747.4-1393.3-3182.1-3111.2-3677.9c-501.8-141.7-619.9-153.5-1298.8-129.9c-614,23.6-832.4,59-1222.1,188.9C1723.5-3457,572.3-1845.3,572.3,20.2c0,749.8,141.7,1334.2,484.1,1995.4C1404.7,2694.6,2178.1,3468,2857,3816.2c619.9,318.8,1216.1,478.2,1824.2,478.2l484.1,5.9L5230.3,4034.7z"
      }), (0, _redom.svg)('path', {
        d: "M4155.8,3822.2c-248-147.6-354.2-625.8-183-867.8c183-265.7,454.6-112.2,401.4,230.3c-23.6,147.6-5.9,230.2,59,283.4c118.1,100.4,118.1,206.6,0,324.7C4327,3904.8,4297.5,3904.8,4155.8,3822.2z"
      }), (0, _redom.svg)('path', {
        d: "M3087.2,2659.2c-188.9-53.2-371.9-141.7-407.3-188.9c-35.4-59-17.7-236.2,53.1-531.3l112.2-442.8l295.2,11.8c165.3,0,401.4,41.3,531.3,88.6c236.1,82.7,236.1,82.7,224.3,371.9c-5.9,165.3-47.2,401.4-88.5,531.3C3713,2783.1,3606.7,2806.7,3087.2,2659.2z M3429.6,2139.6c47.2-118.1,47.2-112.2-124-165.3c-118.1-35.5-135.8-23.6-135.8,106.3c0,112.1,29.5,153.5,112.2,153.5C3341.1,2234.1,3411.9,2192.7,3429.6,2139.6z"
      }), (0, _redom.svg)('path', {
        d: "M4834.7,2163.2c-159.4-159.4-35.4-401.4,206.6-401.4c76.7,0,171.2-64.9,230.2-153.5c70.9-106.3,141.7-141.7,253.9-129.9c413.2,47.2,23.6,755.6-419.2,755.6C4994.1,2234.1,4876,2204.6,4834.7,2163.2z"
      }), (0, _redom.svg)('path', {
        d: "M1440.1,911.7c-165.3-153.5-242.1-354.2-206.6-572.7c11.8-112.2,53.1-141.7,188.9-141.7c147.6,0,183,29.5,224.4,183c29.5,106.3,106.3,206.6,194.8,247.9c183,82.7,242.1,218.4,147.6,336.5C1877,1100.6,1611.3,1071.1,1440.1,911.7z"
      }), (0, _redom.svg)('path', {
        d: "M3276.1,693.3c-124-70.8-141.7-348.3-35.4-454.6c112.2-112.2,389.6-88.6,460.5,41.3c82.6,165.3,76.7,224.3-59,360.1C3512.3,770,3423.7,781.8,3276.1,693.3z"
      }), (0, _redom.svg)('path', {
        d: "M6960,480.7c-29.5-59-100.4-289.2-159.4-507.7c-129.9-495.9-112.2-519.5,501.8-684.8C7662.5-812.2,7757-824,7816-759.1c100.4,100.4,330.6,909.2,289.2,1015.4c-29.5,82.7-749.7,324.7-968.2,324.7C7066.3,581.1,6989.5,533.8,6960,480.7z M7574-15.2c17.8-29.5,11.8-106.3-5.9-177.1c-29.5-88.6-70.8-106.3-165.3-76.7c-171.2,53.1-171.2,47.2-129.9,218.4c29.5,106.3,70.9,135.8,153.5,118.1C7491.3,49.7,7556.2,14.3,7574-15.2z"
      }), (0, _redom.svg)('path', {
        d: "M4923.3,398.1c-129.9-76.7-277.5-360.2-277.5-549c0-82.7,76.7-236.1,171.2-342.5c448.7-501.8,1233.8,53.2,926.8,649.4c-53.1,100.4-147.6,212.6-206.6,248C5389.6,480.7,5059,474.8,4923.3,398.1z M5342.4-109.7c-11.8-59-59-106.3-106.3-106.3s-94.4,47.2-106.3,106.3c-11.8,70.8,17.7,100.4,106.3,100.4S5354.2-38.8,5342.4-109.7z"
      }), (0, _redom.svg)('path', {
        d: "M2048.2-109.7c-336.5-124-495.9-537.2-318.8-832.4c312.9-531.3,1086.3-307,1086.3,318.8c0,94.4-70.9,224.3-200.7,354.2C2420.1-74.2,2260.7-32.9,2048.2-109.7z M2343.4-658.7c0-76.7-41.3-118.1-118.1-118.1c-112.2,0-159.4,118.1-76.7,194.8C2225.3-499.3,2343.4-546.5,2343.4-658.7z"
      }), (0, _redom.svg)('path', {
        d: "M6287-1083.8c-141.7-118.1-165.3-259.7-70.8-395.5c106.3-147.6,330.6-159.4,460.5-29.5c124,124,118.1,236.1-23.6,377.8C6517.2-995.2,6416.9-983.4,6287-1083.8z"
      }), (0, _redom.svg)('path', {
        d: "M4858.3-1603.3c-271.6-324.7-177.1-861.9,147.6-814.7c118,11.8,147.6,53.2,159.4,253.8c11.8,129.9,59,283.4,112.2,336.5c135.8,153.5,76.7,366-106.3,389.6C5059-1426.2,4976.4-1467.5,4858.3-1603.3z"
      }), (0, _redom.svg)('path', {
        d: "M2945.6-2028.3c-88.5-112.1-183-944.6-124-1062.6c35.4-64.9,159.4-112.1,389.6-135.8c188.9-17.7,395.5-47.2,466.4-59c224.3-47.2,312.9,88.6,383.7,584.5c76.7,572.7,53.1,602.2-507.7,678.9C3028.2-1945.7,3016.4-1945.7,2945.6-2028.3z M3624.5-2512.4c5.9-5.9,0-70.9-23.6-141.7c-17.7-88.6-76.7-129.9-171.2-129.9c-118.1,0-141.7,29.5-141.7,177.1c0,165.3,11.8,177.1,165.3,141.7C3541.8-2488.8,3618.6-2512.4,3624.5-2512.4z"
      }), (0, _redom.svg)('path', {
        d: "M6115.8-2364.8c-442.8-448.7,23.6-1186.7,602.1-950.5c236.1,100.4,348.3,277.5,348.3,549c0,312.9-253.8,572.7-560.8,572.7C6346-2193.6,6245.6-2240.8,6115.8-2364.8z M6641.2-2766.3c29.5-100.3-153.5-171.2-236.1-88.6c-35.4,35.5-41.3,88.6-17.7,129.9C6440.5-2642.3,6605.8-2671.8,6641.2-2766.3z"
      }), (0, _redom.svg)('path', {
        d: "M4716.6-3409.8c-177.1-124-171.2-348.3,17.7-472.3c135.8-88.6,159.4-88.6,295.2,0c188.9,123.9,194.8,348.3,17.7,472.3c-70.8,53.1-147.6,94.4-165.3,94.4S4787.5-3356.7,4716.6-3409.8z"
      }), (0, _redom.svg)('path', {
        d: "M8483.1,3893c-94.4-183-70.9-289.3,88.6-395.6c212.5-141.7,442.8-35.5,442.8,200.7c0,88.6-29.5,194.9-70.8,236.1C8831.5,4046.5,8554,4022.9,8483.1,3893z"
      }), (0, _redom.svg)('path', {
        d: "M7243.4,3001.5c-141.7-265.7,123.9-543.1,389.6-419.1c159.4,70.9,194.9,342.4,70.9,466.3C7585.8,3166.8,7314.2,3137.3,7243.4,3001.5z"
      }), (0, _redom.svg)('path', {
        d: "M8796,2848.1c-177.1-112.2-312.9-248-312.9-307c0-53.2,82.7-301.1,183-555c248-613.9,312.9-619.9,832.4-124c218.4,218.4,401.4,431,401.4,472.3c0,141.7-549,726.1-678.9,720.2C9156.2,3054.7,8961.3,2960.2,8796,2848.1z M9250.6,2440.7c59-76.7,53.2-112.1-35.4-212.5l-106.3-118.1l-47.2,129.9C8967.2,2482,9103,2617.8,9250.6,2440.7z"
      }))));
    }
  }, {
    key: "buildBar",
    value: function buildBar() {
      var barText = _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barMainText');

      var acceptText = _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barBtnAcceptAll');

      barText = barText.replace('%barBtnAcceptAll%', acceptText);
      var svgIcon = this.getSvgCookies();
      return (0, _redom.el)('div.cconsent-bar.ccb--hidden', (0, _redom.el)('div.cconsent-bar-container', (0, _redom.el)("div.ccb__wrapper", (0, _redom.el)('div.ccb__content', (0, _redom.el)('div.ccb-icon', svgIcon), (0, _redom.el)('div.ccb-text', barText)), (0, _redom.el)('div.ccb__control', (0, _redom.el)('button.consent-reject', _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barBtnReject')), (0, _redom.el)('a.ccb__edit', _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barLinkSetting')), (0, _redom.el)('button.consent-give', acceptText)))));
    }
  }, {
    key: "buildModal",
    value: function buildModal() {
      // Cookie names list middleware
      var listCookies = function listCookies(category) {
        var list = [];

        for (var service in window.CookieConsent.config.services) {
          window.CookieConsent.config.services[service].category === category && list.push(window.CookieConsent.config.services[service]);
        }

        if (list.length) {
          var listItems = [];

          for (var item in list) {
            listItems.push((0, _redom.el)('li', _Language.default.getTranslation(list[item], window.CookieConsent.config.language.current, 'name')));
          }

          return [(0, _redom.el)('div.ccm__list', (0, _redom.el)('span.ccm__list__title', _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalAffectedSolutions')), (0, _redom.el)('ul', listItems))];
        }
      };

      function modalTabGroups() {
        var contentItems = [];
        var i = 0;

        for (var key in window.CookieConsent.config.categories) {
          contentItems.push((0, _redom.el)('dl.ccm__tabgroup' + '.' + key + (window.CookieConsent.config.categories[key].checked ? '.checked-5jhk' : ''), {
            'data-category': key
          }, (0, _redom.el)('dt.ccm__tab-head', _Language.default.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'name'), (0, _redom.el)('a.ccm__tab-head__icon-wedge', (0, _redom.el)(document.createElementNS("http://www.w3.org/2000/svg", "svg"), {
            version: "1.2",
            preserveAspectRatio: "none",
            viewBox: "0 0 24 24",
            class: "icon-wedge-svg",
            "data-id": "e9b3c566e8c14cfea38af128759b91a3",
            style: "opacity: 1; mix-blend-mode: normal; fill: rgb(51, 51, 51); width: 32px; height: 32px;"
          }, (0, _redom.el)(document.createElementNS("http://www.w3.org/2000/svg", "path"), {
            'xmlns:default': "http://www.w3.org/2000/svg",
            id: "angle-down",
            d: "M17.2,9.84c0-0.09-0.04-0.18-0.1-0.24l-0.52-0.52c-0.13-0.13-0.33-0.14-0.47-0.01c0,0-0.01,0.01-0.01,0.01  l-4.1,4.1l-4.09-4.1C7.78,8.94,7.57,8.94,7.44,9.06c0,0-0.01,0.01-0.01,0.01L6.91,9.6c-0.13,0.13-0.14,0.33-0.01,0.47  c0,0,0.01,0.01,0.01,0.01l4.85,4.85c0.13,0.13,0.33,0.14,0.47,0.01c0,0,0.01-0.01,0.01-0.01l4.85-4.85c0.06-0.06,0.1-0.15,0.1-0.24  l0,0H17.2z",
            style: "fill: rgb(51, 51, 51);"
          })))), (0, _redom.el)('dd.ccm__tab-content', (0, _redom.el)('div.ccm__tab-content__left', !window.CookieConsent.config.categories[key].needed && (0, _redom.el)('div.ccm__switch-component', (0, _redom.el)('div.status-off', _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'off')), (0, _redom.el)('div.ccm__switch-group', (0, _redom.el)('label.ccm__switch', (0, _redom.el)('input.category-onoff', {
            type: 'checkbox',
            'data-category': key,
            'checked': window.CookieConsent.config.categories[key].checked
          }), (0, _redom.el)('span.ccm__switch__slider'))), (0, _redom.el)('div.status-on', _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'on')))), (0, _redom.el)('div.right', (0, _redom.el)('h3', _Language.default.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'name')), (0, _redom.el)('p', _Language.default.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'description')), (0, _redom.el)('div.ccm__list', listCookies(key))))));
          i++;
        }

        return contentItems;
      }

      var h2 = (0, _redom.el)('h2', _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalMainTitle'));
      h2.style.marginBottom = '10px';
      return (0, _redom.el)('div.cconsent-modal', (0, _redom.el)('div.ccm__content', (0, _redom.el)('div.ccm__content__heading', h2, (0, _redom.el)('p', _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalMainText'), window.CookieConsent.config.modalMainTextMoreLink ? (0, _redom.el)('a', {
        href: window.CookieConsent.config.modalMainTextMoreLink,
        target: '_blank',
        rel: 'noopener noreferrer'
      }, _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalMainTitle')) : null), (0, _redom.el)('div.ccm__cheading__close', '×')), (0, _redom.el)('div.ccm__content__body', (0, _redom.el)('div.ccm__tabs', modalTabGroups())), (0, _redom.el)('div.ccm__footer', (0, _redom.el)('button.ccm__footer__consent-modal-submit.secondary', _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalBtnSave')), (0, _redom.el)('button.consent-give', _Language.default.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalBtnAcceptAll')))));
    }
  }, {
    key: "modalRedrawIcons",
    value: function modalRedrawIcons() {
      var tabGroups = this.elements['modal'].querySelectorAll('.ccm__tabgroup');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = tabGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tabGroup = _step.value;

          if (window.CookieConsent.config.categories[tabGroup.dataset.category].checked) {
            if (!tabGroup.classList.contains('checked-5jhk')) {
              tabGroup.classList.add('checked-5jhk');
              tabGroup.querySelector('input.category-onoff').checked = true;
            }
          } else {
            if (tabGroup.classList.contains('checked-5jhk')) tabGroup.classList.remove('checked-5jhk');
            tabGroup.querySelector('input.category-onoff').checked = false;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render(name, elem, callback) {
      if (typeof callback === 'undefined') callback = function callback() {};

      if (typeof this.elements[name] !== 'undefined') {
        this.elements[name].parentNode.replaceChild(elem, this.elements[name]);
        this.elements[name] = elem;
        callback(elem);
        return elem;
      } else {
        var insertedElem = (0, _redom.mount)(document.body, elem);

        if (insertedElem) {
          this.elements[name] = insertedElem;
        }

        callback(insertedElem);
        return insertedElem;
      }
    }
  }, {
    key: "buildInterface",
    value: function buildInterface(callback) {
      if (typeof callback === 'undefined') callback = function callback() {};
      var that = this;

      _Utilities.default.ready(function () {
        that.render('bar', window.CookieConsent.config.barCustomId ? that.buildCustomBar() : that.buildBar(), function (bar) {
          // Show the bar after a while
          if (!window.CookieConsent.config.cookieExists) {
            setTimeout(function () {
              bar.classList.remove('ccb--hidden');
            }, window.CookieConsent.config.barTimeout);
          }
        });
        that.render('modal', that.buildModal());
        callback();
      });
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(elements) {
      var _this = this;

      // If you click Accept all cookies
      var buttonConsentGive = document.querySelectorAll('.consent-give');
      var buttonConsentReject = document.querySelectorAll('.consent-reject');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = buttonConsentGive[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var button = _step2.value;
          button.addEventListener('click', function () {
            // We set config to full consent
            for (var key in window.CookieConsent.config.categories) {
              window.CookieConsent.config.categories[key].wanted = window.CookieConsent.config.categories[key].checked = true;
            }

            _this.writeBufferToDOM();

            _this.buildCookie(function (cookie) {
              _this.setCookie(cookie);
            });

            _this.elements['bar'].classList.add('ccb--hidden');

            _this.elements['modal'].classList.remove('ccm--visible');

            _this.modalRedrawIcons();
          });
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = buttonConsentReject[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _button = _step3.value;

          _button.addEventListener('click', function () {
            _this.writeBufferToDOM();

            _this.buildCookie(function (cookie) {
              _this.setCookie(cookie);
            });

            _this.elements['bar'].classList.add('ccb--hidden');

            _this.elements['modal'].classList.remove('ccm--visible');

            _this.modalRedrawIcons();
          });
        } // If you click Cookie settings and open modal

      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      Array.prototype.forEach.call(document.getElementsByClassName('ccb__edit'), function (edit) {
        edit.addEventListener('click', function (e) {
          _this.elements['modal'].classList.add('ccm--visible');

          e.preventDefault();
          return false;
        });
      }); // If you click trough the tabs on Cookie settings
      // If you click on/off switch

      this.elements['modal'].querySelector('.ccm__tabs').addEventListener('click', function (event) {
        // If you click trough the tabs on Cookie settings
        if (event.target.classList.contains('ccm__tab-head') || event.target.classList.contains('ccm__tab-head__icon-wedge')) {
          var getDlParent = function getDlParent(eventTarget) {
            var parent = eventTarget.parentNode;

            if (parent.nodeName !== 'DL') {
              return getDlParent(parent);
            } else {
              return parent;
            }
          };

          var parentDl = getDlParent(event.target);

          if (parentDl.classList.contains('ccm__tabgroup--open')) {
            parentDl.classList.remove('ccm__tabgroup--open');
          } else {
            parentDl.classList.add('ccm__tabgroup--open');
          }
        } // If you click on/off switch


        if (event.target.classList.contains('category-onoff')) {
          window.CookieConsent.config.categories[event.target.dataset.category].wanted = window.CookieConsent.config.categories[event.target.dataset.category].checked = event.target.checked === true ? true : false;
          var dt = document.querySelector('.ccm__tabgroup.' + event.target.dataset.category);

          if (event.target.checked === false && dt.classList.contains('checked-5jhk')) {
            dt.classList.remove('checked-5jhk');
          } else {
            dt.classList.add('checked-5jhk');
          }
        }
      }); // If you click close on open modal

      this.elements['modal'].querySelector('.ccm__cheading__close').addEventListener('click', function (event) {
        _this.elements['modal'].classList.remove('ccm--visible');
      }); // If you click submit on cookie settings

      document.querySelector('.ccm__footer__consent-modal-submit').addEventListener('click', function () {
        var switchElements = _this.elements['modal'].querySelectorAll('.ccm__switch input');

        Array.prototype.forEach.call(switchElements, function (switchElement) {
          window.CookieConsent.config.categories[switchElement.dataset.category].wanted = switchElement.checked;
        });

        _this.buildCookie(function (cookie) {
          _this.setCookie(cookie, function () {
            _this.elements['modal'].classList.remove('ccm--visible');

            _this.elements['bar'].classList.add('ccb--hidden');
          });
        });

        _this.writeBufferToDOM();
      });
    }
  }, {
    key: "writeBufferToDOM",
    value: function writeBufferToDOM() {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = window.CookieConsent.buffer.appendChild[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var action = _step4.value;

          if (window.CookieConsent.config.categories[action.category].wanted === true) {
            Node.prototype.appendChild.apply(action.this, action.arguments);
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = window.CookieConsent.buffer.insertBefore[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _action = _step5.value;

          if (window.CookieConsent.config.categories[_action.category].wanted === true) {
            _action.arguments[1] = _action.arguments[0].parentNode === null ? _action.this.lastChild : _action.arguments[1];
            Node.prototype.insertBefore.apply(_action.this, _action.arguments);
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }, {
    key: "buildCookie",
    value: function buildCookie(callback) {
      var cookie = {
        version: window.CookieConsent.config.cookieVersion,
        categories: {},
        services: []
      };

      for (var key in window.CookieConsent.config.categories) {
        cookie.categories[key] = {
          wanted: window.CookieConsent.config.categories[key].wanted
        };
      }

      cookie.services = _Utilities.default.listGlobalServices();
      if (callback) callback(cookie);
      return cookie;
    }
  }, {
    key: "setCookie",
    value: function setCookie(cookie, callback) {
      document.cookie = "cconsent=".concat(JSON.stringify(cookie), "; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;");
      if (callback) callback();
    }
  }]);

  return Interface;
}();

exports.default = Interface;
},{"redom":"GuEK","./Language":"4LWe","./Utilities":"/6wJ"}],"n2FS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.en = void 0;
var en = {
  barMainText: 'This website uses cookies to ensure you get the best experience on our website.',
  barLinkSetting: 'Cookie Settings',
  barBtnReject: 'Reject',
  barBtnAcceptAll: 'Accept all cookies',
  modalMainTitle: 'Cookie settings',
  modalMainText: 'Cookies are small piece of data sent from a website and stored on the user\'s computer by the user\'s web browser while the user is browsing. Your browser stores each message in a small file, called cookie. When you request another page from the server, your browser sends the cookie back to the server. Cookies were designed to be a reliable mechanism for websites to remember information or to record the user\'s browsing activity.',
  modalBtnSave: 'Save current settings',
  modalBtnAcceptAll: 'Accept all cookies and close',
  modalAffectedSolutions: 'Affected solutions:',
  learnMore: 'Learn More',
  on: 'On',
  off: 'Off'
};
exports.en = en;
},{}],"WETQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cs = void 0;
var cs = {
  barMainText: 'Naše webové stránky používají cookies, které nám pomáhají zjistit, jak jsou naše stránky používány. Abychom cookies mohli používat, musíte nám to povolit. Kliknutím na tlačítko „%barBtnAcceptAll%“ udělujete tento souhlas.',
  barLinkSetting: 'Nastavení',
  barBtnReject: 'Odmítnout',
  barBtnAcceptAll: 'Souhlasím',
  modalMainTitle: 'Nastavení souborů cookies',
  modalMainText: 'Cookies jsou malé soubory, které webové stránky (i ty naše) ukládají ve Vašem webovém prohlížeči. Obsahy těchto souborů jsou vyměňovány mezi Vaším prohlížečem a našimi servery, případně se servery našich partnerů. Některé cookies potřebujeme, aby webová stránka mohla správně fungovat, některé potřebujeme k marketingové a statistické analytice. Zde si můžete nastavit, které cookies budeme moci používat. ',
  modalBtnSave: 'Uložit nastavení',
  modalBtnAcceptAll: 'Souhlasím s použitím všech cookies',
  modalAffectedSolutions: 'Ovlivňuje funkce:',
  learnMore: 'Zjistit více',
  on: 'Zapnout',
  off: 'Vypnout'
};
exports.cs = cs;
},{}],"mGQU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "en", {
  enumerable: true,
  get: function () {
    return _en.en;
  }
});
Object.defineProperty(exports, "cs", {
  enumerable: true,
  get: function () {
    return _cs.cs;
  }
});

var _en = require("./en");

var _cs = require("./cs");
},{"./en":"n2FS","./cs":"WETQ"}],"duLQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utilities = _interopRequireDefault(require("./Utilities"));

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Configuration =
/*#__PURE__*/
function () {
  function Configuration(configObject) {
    _classCallCheck(this, Configuration);

    window.CookieConsent.buffer = {
      appendChild: [],
      insertBefore: [] // Wrapper filter function

    };

    window.CookieConsent.wrapper = function () {}; // Settings injector for users


    window.CookieConsent.setConfiguration = this.setConfiguration.bind(this);
    window.CookieConsent.config = {
      active: true,
      cookieExists: false,
      cookieVersion: 1,
      modalMainTextMoreLink: null,
      barCustomId: null,
      barTimeout: 1000,
      language: {
        current: 'cs',
        locale: {
          en: _i18n.en,
          cs: _i18n.cs
        }
      },
      categories: {},
      services: {}
    };
    this.setConfiguration(configObject);
  }

  _createClass(Configuration, [{
    key: "setConfiguration",
    value: function setConfiguration(configObject) {
      // The user overrides the default config
      console.log(window.CookieConsent.config, configObject, _objectSpread({}, window.CookieConsent.config, configObject));
      this.mergeDeep(window.CookieConsent.config, configObject); //loMerge(window.CookieConsent.config, configObject);
      // The cookie overrides the default and user config

      this.cookieToConfig(); // We tell the world we did this

      _Utilities.default.dispatchEvent(document, 'CCConfigSet');
    }
  }, {
    key: "cookieToConfig",
    value: function cookieToConfig() {
      function removeReload() {
        _Utilities.default.removeCookie();

        location.reload();
        return false;
      }

      document.cookie.split(';').filter(function (item) {
        if (item.indexOf('cconsent') >= 0) {
          var cookieData = JSON.parse(item.split('=')[1]); // We check cookie version. If older we need to renew cookie.

          if (typeof cookieData.version === 'undefined') {
            return removeReload();
          } else {
            if (cookieData.version !== window.CookieConsent.config.cookieVersion) {
              return removeReload();
            }
          } // We check if cookie data categories also exist in user config


          for (var key in cookieData.categories) {
            // The cookie contains category not present in user config so we invalidate cookie
            if (typeof window.CookieConsent.config.categories[key] === 'undefined') {
              return removeReload();
            }
          } // We check if cookie data services also exist in user config


          cookieData.services.forEach(function (service) {
            // The cookie contains service not present in user config so we invalidate cookie
            if (typeof window.CookieConsent.config.services[service] === 'undefined') {
              return removeReload();
            }
          }); // We we integrate cookie data into the global config object

          for (var _key in cookieData.categories) {
            window.CookieConsent.config.categories[_key].checked = window.CookieConsent.config.categories[_key].wanted = cookieData.categories[_key].wanted === true ? true : false;
          }

          window.CookieConsent.config.cookieExists = true;
          return true;
        }
      });
      return false;
    } // Simple object check.

  }, {
    key: "isObject",
    value: function isObject(item) {
      return item && _typeof(item) === 'object' && !Array.isArray(item);
    } //Deep merge two objects.

  }, {
    key: "mergeDeep",
    value: function mergeDeep(target) {
      for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
        sources[_key2 - 1] = arguments[_key2];
      }

      if (!sources.length) return target;
      var source = sources.shift();

      if (this.isObject(target) && this.isObject(source)) {
        for (var key in source) {
          if (this.isObject(source[key])) {
            if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
            this.mergeDeep(target[key], source[key]);
          } else {
            Object.assign(target, _defineProperty({}, key, source[key]));
          }
        }
      }

      return this.mergeDeep.apply(this, [target].concat(sources));
    }
  }]);

  return Configuration;
}();

exports.default = Configuration;
},{"./Utilities":"/6wJ","../i18n":"mGQU"}],"xR4A":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RemoveCookies =
/*#__PURE__*/
function () {
  function RemoveCookies() {
    _classCallCheck(this, RemoveCookies);
  }

  _createClass(RemoveCookies, [{
    key: "init",
    value: function init() {
      this.removeUnwantedCookies();
    }
  }, {
    key: "removeUnwantedCookies",
    value: function removeUnwantedCookies() {
      var cookieList = [];
      var config = window.CookieConsent.config;
      document.cookie.split(';').map(function (a) {
        cookieList.push(a.split('=')[0].replace(/(^\s*)|(\s*&)/, ''));
      });

      for (var service in config.services) {
        if (_Utilities.default.objectType(config.services[service].cookies) === 'Array') {
          // Remove cookies if they are not wanted by user
          if (!config.categories[config.services[service].category].wanted) {
            for (var i in config.services[service].cookies) {
              var type = _Utilities.default.objectType(config.services[service].cookies[i].name);

              if (type === 'String') {
                if (cookieList.indexOf(config.services[service].cookies[i].name) > -1) {
                  this.removeCookie(config.services[service].cookies[i]);
                }
              } else if (type === 'RegExp') {
                // Searching cookie list for cookies matching specified RegExp
                var cookieDef = config.services[service].cookies[i];

                for (var c in cookieList) {
                  if (cookieList[c].match(cookieDef.name)) {
                    this.removeCookie({
                      name: cookieList[c],
                      domain: _Utilities.default.objectType(cookieDef.domain) === 'String' ? cookieDef.domain : null
                    });
                  }
                }
              }
            }
          }
        }
      }
    }
  }, {
    key: "removeCookie",
    value: function removeCookie(cookie) {
      // Removing cookies from domain and .domain
      var domain = _Utilities.default.objectType(cookie.domain) === 'String' ? "domain=".concat(cookie.domain, ";") : '';
      document.cookie = "".concat(cookie.name, "=; expires=Thu, 01 Jan 1980 00:00:00 UTC; ").concat(domain, " path=/;");
    }
  }]);

  return RemoveCookies;
}();

exports.default = RemoveCookies;
},{"./Utilities":"/6wJ"}],"ylk/":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InsertScriptFilter = _interopRequireDefault(require("./InsertScriptFilter"));

var _ScriptTagFilter = _interopRequireDefault(require("./ScriptTagFilter"));

var _WrapperFilter = _interopRequireDefault(require("./WrapperFilter"));

var _LocalCookieFilter = _interopRequireDefault(require("./LocalCookieFilter"));

var _Interface = _interopRequireDefault(require("./Interface"));

var _Configuration = _interopRequireDefault(require("./Configuration"));

var _RemoveCookies = _interopRequireDefault(require("./RemoveCookies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CookieConsent =
/*#__PURE__*/
function () {
  function CookieConsent() {
    _classCallCheck(this, CookieConsent);
  }

  _createClass(CookieConsent, [{
    key: "init",
    value: function init(configObject) {
      new _Configuration.default(configObject);
      var removeCookies = new _RemoveCookies.default();
      var insertScriptFilter = new _InsertScriptFilter.default();
      var scriptTagFilter = new _ScriptTagFilter.default();
      var wrapperFilter = new _WrapperFilter.default();
      var localCookieFilter = new _LocalCookieFilter.default();
      removeCookies.init();
      insertScriptFilter.init();
      scriptTagFilter.init();
      wrapperFilter.init();
      localCookieFilter.init();
      var UI = new _Interface.default();
      UI.buildInterface(function () {
        UI.addEventListeners();
      });
    }
  }]);

  return CookieConsent;
}();

exports.default = CookieConsent;
},{"./InsertScriptFilter":"UWvR","./ScriptTagFilter":"ob2e","./WrapperFilter":"935K","./LocalCookieFilter":"2E//","./Interface":"/Qw2","./Configuration":"duLQ","./RemoveCookies":"xR4A"}],"Dnl4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.necessary = void 0;
var necessary = {
  // The cookies here are necessary and category cant be turned off.
  // Wanted config value  will be ignored.
  needed: true,
  // The cookies in this category will be let trough.
  // This probably should be false if not necessary category
  wanted: true,
  // If the checkbox is on or off at first run.
  checked: true,
  // Language settings for categories
  language: {
    locale: {
      en: {
        name: 'Necessary cookies',
        description: 'These are technical files that are required for the proper functioning of our website and all its features. They are used, for example, to store products in your shopping cart, display products on request, control filters, personal settings and to configure your consent with the use of cookies. Your consent is not required for these cookies and cannot be removed.'
      },
      cs: {
        name: 'Nezbytné cookies',
        description: 'Jedná se o technické soubory, které jsou nezbytné ke správnému chování našich webových stránek a všech jejich funkcí. Používají se mimo jiné k ukládání produktů v nákupním košíku, zobrazování produktů na přání, ovládání filtrů, osobního nastavení a také nastavení souhlasu s uživáním cookies. Pro tyto cookies není zapotřebí Váš souhlas a není možné jej ani odebrat.'
      }
    }
  }
};
exports.necessary = necessary;
},{}],"pK1d":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.analytics = void 0;
var analytics = {
  // The cookies here are necessary and category cant be turned off.
  // Wanted config value  will be ignored.
  needed: false,
  // The cookies in this category will be let trough.
  // This probably should be false if not necessary category
  wanted: false,
  // If the checkbox is on or off at first run.
  checked: false,
  // Language settings for categories
  language: {
    locale: {
      cs: {
        name: 'Analytické cookies',
        description: 'Tyto cookies nám umožňují měřit výkonnost našich webových stránek a našich online kampaní. S jejich pomocí zjišťujeme počet návštěv, zdroj návštěv a další parametry. Shromážděné údaje zjišťujeme v agregované podobě, která nám neumožňuje údaje dohledat ke konkrétnímu uživateli. Pokud tyto cookies deaktivujete, nebudeme moci analyzovat výkonnost našich webových stránek a optimalizovat je pro co nejsnažší užívání.'
      },
      en: {
        name: 'Analytical cookies',
        description: 'These cookies allow us to analyse the performance of our website and our online campaigns. We use them to see how many times you visit a site, the source of your visits and other parameters. We collect data in an aggregate form, which does not allow us to trace the data to a specific user. If you disable these cookies, we will not be able to analyse the performance of our website and optimise it for your easiest possible use.'
      }
    }
  }
};
exports.analytics = analytics;
},{}],"FiSc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _necessary = require("./necessary");

Object.keys(_necessary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _necessary[key];
    }
  });
});

var _analytics = require("./analytics");

Object.keys(_analytics).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _analytics[key];
    }
  });
});
},{"./necessary":"Dnl4","./analytics":"pK1d"}],"4LsD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var config = {
  category: 'necessary',
  type: 'dynamic-script',
  search: '',
  cookies: [{
    name: '_nss',
    domain: "".concat(window.location.hostname)
  }, {
    name: 'nette-samesite',
    domain: "".concat(window.location.hostname)
  }, {
    name: '_GRECAPTCHA',
    domain: 'www.google.com'
  }, {
    name: '_grecaptcha',
    domain: "".concat(window.location.hostname)
  }],
  language: {
    locale: {
      cs: {
        name: 'Konfigurační cookies'
      },
      en: {
        name: 'Configuration cookies'
      }
    }
  }
};
exports.config = config;
},{}],"wB2v":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configNette = void 0;

var _config = require("./config");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var configNette = _objectSpread({}, _config.config, {
  cookies: [].concat(_toConsumableArray(_config.config.cookies), [{
    name: 'nette-samesite',
    domain: "".concat(window.location.hostname)
  }])
});

exports.configNette = configNette;
},{"./config":"4LsD"}],"KqvK":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ganalytics = void 0;
var ganalytics = {
  // Existing category Unique name
  // This example shows how to block Google Analytics
  category: 'analytics',
  // Type of blocking to apply here.
  // This depends on the type of script we are trying to block
  // Can be: dynamic-script, script-tag, wrapped, localcookie
  type: 'dynamic-script',
  // Only needed if "type: dynamic-script"
  // The filter will look for this keyword in inserted scipt tags
  // and block if match found
  search: 'analytics',
  // List of known cookie names or Regular expressions matching
  // cookie names placed by this service.
  // These willbe removed from current domain and .domain.
  cookies: [{
    // Known cookie name.
    name: '_gid',
    // Expected cookie domain.
    domain: ".".concat(window.location.hostname)
  }, {
    // Regex matching cookie name.
    name: /^_ga/,
    domain: ".".concat(window.location.hostname)
  }, {
    name: 'ads/ga-audiences',
    domain: ".".concat(window.location.hostname)
  }],
  language: {
    locale: {
      cs: {
        name: 'Google Analytics – analytika návštěvnosti'
      },
      en: {
        name: 'Google Analytics – traffic analytics'
      }
    }
  }
};
exports.ganalytics = ganalytics;
},{}],"Ns+s":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("./config");

Object.keys(_config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _config[key];
    }
  });
});

var _configNette = require("./configNette");

Object.keys(_configNette).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _configNette[key];
    }
  });
});

var _ganalytics = require("./ganalytics");

Object.keys(_ganalytics).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ganalytics[key];
    }
  });
});
},{"./config":"4LsD","./configNette":"wB2v","./ganalytics":"KqvK"}],"Focm":[function(require,module,exports) {
"use strict";

require("core-js/es6/symbol");

require("core-js/fn/symbol/iterator");

var _CookieConsent = _interopRequireDefault(require("./lib/CookieConsent"));

var categories = _interopRequireWildcard(require("./categories"));

var services = _interopRequireWildcard(require("./services"));

var i18n = _interopRequireWildcard(require("./i18n"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookieConsent = new _CookieConsent.default();
window.CookieConsent = window.CookieConsent || {};
window.CookieConsent.init = cookieConsent.init;
window.CookieConsent.categories = categories;
window.CookieConsent.services = services;
window.CookieConsent.i18n = i18n;
},{"core-js/es6/symbol":"CtPZ","core-js/fn/symbol/iterator":"KQqW","./lib/CookieConsent":"ylk/","./categories":"FiSc","./services":"Ns+s","./i18n":"mGQU"}]},{},["Focm"], null)
//# sourceMappingURL=cookieconsent.map