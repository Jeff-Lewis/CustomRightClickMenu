/*!
 * Original can be found at https://github.com/SanderRonde/CustomRightClickMenu 
 * This code may only be used under the MIT style license found in the LICENSE.txt file 
**/
"use notstrict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  var r = e.babelHelpers = {};r["typeof"] = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }, r.classCallCheck = function (e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
  }, r.createClass = function () {
    function e(e, r) {
      for (var t = 0; t < r.length; t++) {
        var n = r[t];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }return function (r, t, n) {
      return t && e(r.prototype, t), n && e(r, n), r;
    };
  }(), r.defineEnumerableProperties = function (e, r) {
    for (var t in r) {
      var n = r[t];n.configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t, n);
    }return e;
  }, r.defaults = function (e, r) {
    for (var t = Object.getOwnPropertyNames(r), n = 0; n < t.length; n++) {
      var o = t[n],
          i = Object.getOwnPropertyDescriptor(r, o);i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
    }return e;
  }, r.defineProperty = function (e, r, t) {
    return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
  }, r["extends"] = Object.assign || function (e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }return e;
  }, r.get = function e(r, t, n) {
    null === r && (r = Function.prototype);var o = Object.getOwnPropertyDescriptor(r, t);if (void 0 === o) {
      var i = Object.getPrototypeOf(r);return null === i ? void 0 : e(i, t, n);
    }if ("value" in o) return o.value;var a = o.get;if (void 0 !== a) return a.call(n);
  }, r.inherits = function (e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + (typeof r === "undefined" ? "undefined" : _typeof(r)));e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? typeof Object['setPrototype' + 'Of'] === 'function'?Object['setPrototype' + 'Of'](e,r):e.__proto__ = r : e.__proto__ = r);
  }, r["instanceof"] = function (e, r) {
    return null != r && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? r[Symbol.hasInstance](e) : e instanceof r;
  }, r.newArrowCheck = function (e, r) {
    if (e !== r) throw new TypeError("Cannot instantiate an arrow function");
  }, r.objectDestructuringEmpty = function (e) {
    if (null == e) throw new TypeError("Cannot destructure undefined");
  }, r.objectWithoutProperties = function (e, r) {
    var t = {};for (var n in e) {
      r.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }return t;
  }, r.possibleConstructorReturn = function (e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !r || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) && "function" != typeof r ? e : r;
  }, r.set = function e(r, t, n, o) {
    var i = Object.getOwnPropertyDescriptor(r, t);if (void 0 === i) {
      var a = Object.getPrototypeOf(r);null !== a && e(a, t, n, o);
    } else if ("value" in i && i.writable) i.value = n;else {
      var u = i.set;void 0 !== u && u.call(o, n);
    }return n;
  }, r.slicedToArray = function () {
    function e(e, r) {
      var t = [],
          n = !0,
          o = !1,
          i = void 0;try {
        for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (t.push(a.value), !r || t.length !== r); n = !0) {}
      } catch (e) {
        o = !0, i = e;
      } finally {
        try {
          !n && u["return"] && u["return"]();
        } finally {
          if (o) throw i;
        }
      }return t;
    }return function (r, t) {
      if (Array.isArray(r)) return r;if (Symbol.iterator in Object(r)) return e(r, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(), r.taggedTemplateLiteral = function (e, r) {
    return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } }));
  }, r.temporalRef = function (e, r, t) {
    if (e === t) throw new ReferenceError(r + " is not defined - temporal dead zone");return e;
  }, r.temporalUndefined = {}, r.toArray = function (e) {
    return Array.isArray(e) ? e : Array.from(e);
  }, r.toConsumableArray = function (e) {
    if (Array.isArray(e)) {
      for (var r = 0, t = Array(e.length); r < e.length; r++) {
        t[r] = e[r];
      }return t;
    }return Array.from(e);
  };
}("undefined" == typeof global ? self : global);
'use notstrict';var MapIterator = function () {
  function e(e) {
    this._data = e, this._index = 0;
  }return e.prototype.next = function () {
    var e = this._data[this._index];return this._index++, e;
  }, e;
}(),
    MapPolyfill = function () {
  function e(t) {
    var s = this;if (this._data = [], !(this instanceof e)) throw new TypeError('Constructor requires new');if (t && !this._isIterable(t)) throw new TypeError('Passed value is not iterable');Object.defineProperty(this, 'size', { get: this._getSize }), t && Array.prototype.slice.apply(t).forEach(function (e) {
      var t = e[0],
          n = e[1];s.set(t, n);
    });
  }return e.prototype.clear = function () {
    for (; 0 < this._data.length;) {
      this._data.pop();
    }return this;
  }, e.prototype['delete'] = function (e) {
    if (void 0 === e) throw new Error('No key supplied');var t = this._get(e)[0];return -1 !== t && (this._data.splice(t, 1), !0);
  }, e.prototype.entries = function () {
    return new MapIterator(this._data);
  }, e.prototype.forEach = function (e, t) {
    var s = this;if (void 0 === e || 'function' !== typeof e) throw new Error('Please supply a function parameter');this._data.forEach(function (n) {
      var a = n[0],
          o = n[1];void 0 === t ? e(o, a, s) : e.apply(t, [o, a, s]);
    });
  }, e.prototype.get = function (e) {
    if (void 0 === e) throw new Error('No key supplied');return this._get(e)[1];
  }, e.prototype.has = function (e) {
    if (void 0 === e) throw new Error('No key supplied');return -1 !== this._get(e)[0];
  }, e.prototype.keys = function () {
    return new MapIterator(this._data.map(function (e) {
      var t = e[0];return t;
    }));
  }, e.prototype.set = function (e, t) {
    if (void 0 === e) throw new Error('No key supplied');if (void 0 === t) throw new Error('No value supplied');var s = this._get(e)[0];return -1 === s ? this._data.push([e, t]) : this._data[s] = [e, t], this;
  }, e.prototype.values = function () {
    return new MapIterator(this._data.map(function (e) {
      var t = e[0],
          s = e[1];return s;
    }));
  }, e.prototype._get = function (e) {
    for (var t = 0; t < this._data.length; t++) {
      var s = this._data[t],
          n = s[0],
          a = s[1];if (n === e && e !== NaN && n !== NaN) return [t, a];
    }return [-1, void 0];
  }, e.prototype._getSize = function () {
    return this._data.length;
  }, e.prototype._isIterable = function (e) {
    return Array.isArray(e) || 'string' === typeof e || e.toString() === Object.prototype.toString.call(function () {
      return arguments;
    });
  }, e;
}();window.Map = window.Map || MapPolyfill, 'use notstrict';var __extends = undefined && undefined.__extends || function () {
  var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var s in t) {
      t.hasOwnProperty(s) && (e[s] = t[s]);
    }
  };return function (t, s) {
    function n() {
      this.constructor = t;
    }e(t, s), t.prototype = null === s ? Object.create(s) : (n.prototype = s.prototype, new n());
  };
}(),
    WeakMapPolyfill = function (e) {
  function t(t) {
    return e.call(this, t) || this;
  }return __extends(t, e), t;
}(MapPolyfill);window.WeakMap = window.WeakMap || WeakMapPolyfill, function (e, t, s) {
  t[e] = t[e] || s(), 'undefined' != typeof module && module.exports ? module.exports = t[e] : 'function' == typeof define && define.amd && define(function () {
    return t[e];
  });
}('Promise', 'undefined' == typeof global ? window : global, function () {
  'use notstrict';
  function e(e, t) {
    m.add(e, t), g || (g = u(m.drain));
  }function t(e) {
    var t = 'undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e),
        s;return null != e && ('object' == t || 'function' == t) && (s = e.then), 'function' == typeof s && s;
  }function s() {
    for (var e = 0; e < this.chain.length; e++) {
      n(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
    }this.chain.length = 0;
  }function n(e, s, n) {
    var a, o;try {
      !1 === s ? n.reject(e.msg) : (a = !0 === s ? e.msg : s.call(void 0, e.msg), a === n.promise ? n.reject(TypeError('Promise-chain cycle')) : (o = t(a)) ? o.call(a, n.resolve, n.reject) : n.resolve(a));
    } catch (e) {
      n.reject(e);
    }
  }function a(n) {
    var r = this,
        i;if (!r.triggered) {
      r.triggered = !0, r.def && (r = r.def);try {
        (i = t(n)) ? e(function () {
          var e = new l(r);try {
            i.call(n, function () {
              a.apply(e, arguments);
            }, function () {
              o.apply(e, arguments);
            });
          } catch (t) {
            o.call(e, t);
          }
        }) : (r.msg = n, r.state = 1, 0 < r.chain.length && e(s, r));
      } catch (e) {
        o.call(new l(r), e);
      }
    }
  }function o(t) {
    var n = this;n.triggered || (n.triggered = !0, n.def && (n = n.def), n.msg = t, n.state = 2, 0 < n.chain.length && e(s, n));
  }function r(e, t, s, n) {
    for (var a = 0; a < t.length; a++) {
      (function (a) {
        e.resolve(t[a]).then(function (e) {
          s(a, e);
        }, n);
      })(a);
    }
  }function l(e) {
    this.def = e, this.triggered = !1;
  }function i(e) {
    this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
  }function d(t) {
    if ('function' != typeof t) throw TypeError('Not a function');if (0 !== this.__NPO__) throw TypeError('Not a promise');this.__NPO__ = 1;var n = new i(this);this.then = function (t, a) {
      var r = { success: 'function' != typeof t || t, failure: 'function' == typeof a && a };return r.promise = new this.constructor(function (e, t) {
        if ('function' != typeof e || 'function' != typeof t) throw TypeError('Not a function');r.resolve = e, r.reject = t;
      }), n.chain.push(r), 0 !== n.state && e(s, n), r.promise;
    }, this['catch'] = function (e) {
      return this.then(void 0, e);
    };try {
      t.call(void 0, function (e) {
        a.call(n, e);
      }, function (e) {
        o.call(n, e);
      });
    } catch (e) {
      o.call(n, e);
    }
  }var c = Object.prototype.toString,
      u = 'undefined' == typeof setImmediate ? setTimeout : function (e) {
    return setImmediate(e);
  },
      p,
      g,
      m;try {
    Object.defineProperty({}, 'x', {}), p = function p(e, t, s, n) {
      return Object.defineProperty(e, t, { value: s, writable: !0, configurable: !1 !== n });
    };
  } catch (e) {
    p = function p(e, t, s) {
      return e[t] = s, e;
    };
  }m = function () {
    function e(e, t) {
      this.fn = e, this.self = t, this.next = void 0;
    }var t, s, n;return { add: function add(a, o) {
        n = new e(a, o), s ? s.next = n : t = n, s = n, n = void 0;
      }, drain: function drain() {
        var e = t;for (t = s = g = void 0; e;) {
          e.fn.call(e.self), e = e.next;
        }
      } };
  }();var h = p({}, 'constructor', d, !1);return d.prototype = h, p(h, '__NPO__', 0, !1), p(d, 'resolve', function (e) {
    var t = this;return e && 'object' == ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) && 1 === e.__NPO__ ? e : new t(function (t, s) {
      if ('function' != typeof t || 'function' != typeof s) throw TypeError('Not a function');t(e);
    });
  }), p(d, 'reject', function (e) {
    return new this(function (t, s) {
      if ('function' != typeof t || 'function' != typeof s) throw TypeError('Not a function');s(e);
    });
  }), p(d, 'all', function (e) {
    var t = this;return '[object Array]' == c.call(e) ? 0 === e.length ? t.resolve([]) : new t(function (s, n) {
      if ('function' != typeof s || 'function' != typeof n) throw TypeError('Not a function');var a = e.length,
          o = Array(a),
          l = 0;r(t, e, function (e, t) {
        o[e] = t, ++l === a && s(o);
      }, n);
    }) : t.reject(TypeError('Not an array'));
  }), p(d, 'race', function (e) {
    var t = this;return '[object Array]' == c.call(e) ? new t(function (s, n) {
      if ('function' != typeof s || 'function' != typeof n) throw TypeError('Not a function');r(t, e, function (e, t) {
        s(t);
      }, n);
    }) : t.reject(TypeError('Not an array'));
  }), d;
});var __extends = undefined && undefined.__extends || function () {
  var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var s in t) {
      t.hasOwnProperty(s) && (e[s] = t[s]);
    }
  };return function (t, s) {
    function n() {
      this.constructor = t;
    }e(t, s), t.prototype = null === s ? Object.create(s) : (n.prototype = s.prototype, new n());
  };
}(),
    __assign = undefined && undefined.__assign || Object.assign || function (e) {
  for (var t = 1, a = arguments.length, n; t < a; t++) {
    for (var s in n = arguments[t], n) {
      Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
  }return e;
},
    __awaiter = undefined && undefined.__awaiter || function (e, t, s, n) {
  return new (s || (s = Promise))(function (a, o) {
    function r(e) {
      try {
        i(n.next(e));
      } catch (t) {
        o(t);
      }
    }function l(e) {
      try {
        i(n['throw'](e));
      } catch (t) {
        o(t);
      }
    }function i(e) {
      e.done ? a(e.value) : new s(function (t) {
        t(e.value);
      }).then(r, l);
    }i((n = n.apply(e, t || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (e, s) {
  function n(e) {
    return function (t) {
      return a([e, t]);
    };
  }function a(n) {
    if (r) throw new TypeError('Generator is already executing.');for (; o;) {
      try {
        if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
            i = n;break;case 4:
            return o.label++, { value: n[1], done: !1 };case 5:
            o.label++, l = n[1], n = [0];continue;case 7:
            n = o.ops.pop(), o.trys.pop();continue;default:
            if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
              o = 0;continue;
            }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
              o.label = n[1];break;
            }if (6 === n[0] && o.label < i[1]) {
              o.label = i[1], i = n;break;
            }if (i && o.label < i[2]) {
              o.label = i[2], o.ops.push(n);break;
            }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
      } catch (t) {
        n = [6, t], l = 0;
      } finally {
        r = i = 0;
      }
    }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
  }var o = { label: 0, sent: function sent() {
      if (1 & i[0]) throw i[1];return i[1];
    }, trys: [], ops: [] },
      r,
      l,
      i,
      d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
    return this;
  }), d;
},
    BrowserAPINS;if (function (e) {
  function t(e) {
    return !!m.runtime.lastError && (e(m.runtime.lastError), !0);
  }function s(e, t) {
    var s = t.resolve,
        n = t.reject,
        a = function a() {
      for (var t = [], a = 0; a < arguments.length; a++) {
        t[a] = arguments[a];
      }m.runtime.lastError ? n(new h(m.runtime.lastError, e)) : s(t[0]);
    };return a.__resolve = s, a.__reject = n, a.__stack = e, a;
  }function n(e) {
    return new Promise(function (t, n) {
      e(s(new Error(), { resolve: t, reject: n }));
    });
  }function a(e) {
    return { set: function set(t) {
        return n(function (s) {
          m.storage[e].set(t, s);
        });
      }, remove: function remove(s) {
        return n(function (n) {
          Array.isArray(s) ? Promise.all(s.map(function (s) {
            return new Promise(function (a) {
              m.storage[e].remove(s, function () {
                t(n.__reject) || a(null);
              });
            });
          })).then(n) : m.storage[e].remove(s, n);
        });
      }, clear: function clear() {
        return n(function (t) {
          m.storage[e].clear(t);
        });
      } };
  }function o(e) {
    if ('browser' === e) return y;if ('chrome' === e) return f;if ('undefined' === typeof location || 'undefined' === typeof location.host) return !1;throw new Error('Unsupported browser API support queried');
  }function r() {
    var e = window,
        t = !!e.opr && !!e.opr.addons || !!e.opera || 0 <= navigator.userAgent.indexOf(' OPR/');if ('undefined' !== typeof e.InstallTrigger) return 'firefox';if (e.StyleMedia) return 'edge';if (!t && o('chrome')) return 'chrome';if (t) return 'opera';if ('undefined' === typeof location || 'undefined' === typeof location.host) return 'node';throw new Error('Unsupported browser');
  }function l() {
    return b ? b : b = r();
  }function i() {
    return -1 === location.href.indexOf('backgroun');
  }function d() {
    return -1 < m.runtime.getManifest().short_name.indexOf('dev');
  }function c(e, t) {
    return e + '' === t + '';
  }function u(e, t, s) {
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
          o = a.id,
          r = a.children;if (c(o, t)) return s(a, n, e), !0;if (r && u(r, t, s)) return !0;
    }return !1;
  }function p() {
    v._lastSpecialCall = null, v._currentContextMenu = [], v._activeTabs = [], v._executedScripts = [], v._fakeTabs = {}, v._activatedBackgroundPages = [], v._tabUpdateListeners = [];
  }var g = window,
      m = g.StyleMedia ? g.browser : g.chrome,
      h = function (e) {
    function t(t, s) {
      var n = t.message,
          a = s.stack,
          o = e.call(this, n) || this;return o.stack = a, o.message = n, o;
    }return __extends(t, e), t;
  }(Error),
      y = 'browser' in window,
      f = 'chrome' in window;e.isBrowserAPISupported = o;var b = null;e.getBrowser = l, e.getSrc = function () {
    return m;
  };var x = !1;e.resetLogData = p, e.enableLogging = function () {
    x || p(), x = !0;
  }, e.isLoggingEnabled = function () {
    return x;
  }, e.disableLogging = function () {
    x = !1, v._lastSpecialCall = null, v._currentContextMenu = null, v._activeTabs = null, v._executedScripts = null, v._fakeTabs = null, v._activatedBackgroundPages = null, v._tabUpdateListeners = null;
  };var v = { _lastSpecialCall: null, _currentContextMenu: null, _activeTabs: null, _executedScripts: null, _fakeTabs: null, _activatedBackgroundPages: null, _tabUpdateListeners: null, _clearExecutedScripts: function _clearExecutedScripts() {
      for (; v._executedScripts.pop();) {}
    } };e.getTestData = function () {
    return i() || d() ? v : void 0;
  }, e.polyfill = m ? { commands: m.commands ? { getAll: function getAll() {
        return n(function (e) {
          m.commands.getAll(e);
        });
      }, onCommand: m.commands.onCommand } : void 0, contextMenus: m.contextMenus ? { create: function create(t, s) {
        var n = m.contextMenus.create(t, function () {
          s && (m.runtime.lastError ? (e.polyfill.runtime.lastError = m.runtime.lastError.message, s(), e.polyfill.runtime.lastError = null) : s());
        }),
            a = { id: n, createProperties: t, currentProperties: t, children: [] };return x && (t.parentId ? u(v._currentContextMenu, t.parentId, function (e) {
          e.children.push(a);
        }) : v._currentContextMenu.push(a)), Promise.resolve(n);
      }, update: function update(e, t) {
        return x && u(v._currentContextMenu, e, function (e) {
          var s = e.currentProperties;for (var n in t) {
            s[n] = t[n];
          }
        }), n(function (s) {
          m.contextMenus.update(e + '', t, function () {
            m.runtime.lastError ? m.contextMenus.update(~~e, t, s) : s();
          });
        });
      }, remove: function remove(e) {
        return x && u(v._currentContextMenu, e, function (e, t, s) {
          s.splice(t, 1);
        }), n(function (t) {
          m.contextMenus.remove(e + '', function () {
            m.runtime.lastError ? m.contextMenus.remove(~~e, t) : t();
          });
        });
      }, removeAll: function removeAll() {
        if (x) for (; v._currentContextMenu.length;) {
          v._currentContextMenu.pop();
        }return n(function (e) {
          var t = m.contextMenus.removeAll(function () {
            'edge' === l() && m.runtime.lastError && e.__resolve(void 0), m.runtime.lastError ? e.__reject(new h(m.runtime.lastError, e.__stack)) : e.__resolve(void 0);
          });t && 'undefined' !== typeof window && window.Promise && t instanceof window.Promise && t.then(e.__resolve, e.__reject);
        });
      } } : void 0, downloads: m.downloads ? { download: function download(e) {
        return x && (v._lastSpecialCall = { api: 'downloads.download', args: [e] }), n(function (t) {
          m.downloads.download(e, t);
        });
      } } : void 0, extension: m.extension ? { isAllowedFileSchemeAccess: function isAllowedFileSchemeAccess() {
        return n(function (e) {
          m.extension.isAllowedFileSchemeAccess(e);
        });
      } } : void 0, notifications: m.notifications ? { onClicked: m.notifications.onClicked, onClosed: m.notifications.onClosed } : void 0, permissions: m.permissions ? { contains: function contains(e) {
        return n(function (t) {
          m.permissions.contains(e, t);
        });
      }, getAll: function getAll() {
        return n(function (e) {
          m.permissions.getAll(e);
        });
      }, request: function request(e) {
        return n(function (t) {
          m.permissions.request(e, t);
        });
      }, remove: function remove(e) {
        return n(function (t) {
          m.permissions.remove(e, t);
        });
      } } : void 0, runtime: m.runtime ? { connect: function connect(e, t) {
        return t ? m.runtime.connect(e, t) : e ? m.runtime.connect(e) : m.runtime.connect();
      }, getBackgroundPage: function getBackgroundPage() {
        return n(function (e) {
          m.runtime.getBackgroundPage(e);
        });
      }, getManifest: function getManifest() {
        return Promise.resolve(m.runtime.getManifest());
      }, getURL: function getURL(e) {
        return m.runtime.getURL(e);
      }, getPlatformInfo: function getPlatformInfo() {
        return n(function (e) {
          m.runtime.getPlatformInfo(e);
        });
      }, openOptionsPage: function openOptionsPage() {
        return n(function (t) {
          'edge' === e.getBrowser() ? e.polyfill.tabs.create({ url: e.polyfill.runtime.getURL('html/options.html') }).then(function () {
            t();
          }) : m.runtime.openOptionsPage(t);
        });
      }, reload: function reload() {
        return Promise.resolve(m.runtime.reload());
      }, sendMessage: function sendMessage(e, t, s) {
        return n(function (n) {
          s ? m.runtime.sendMessage(e, t, s, n) : t ? m.runtime.sendMessage(e, t, n) : m.runtime.sendMessage(e, n);
        });
      }, onInstalled: m.runtime.onInstalled, onConnectExternal: m.runtime.onConnectExternal, onConnect: m.runtime.onConnect, onMessage: m.runtime.onMessage, lastError: null, id: m.runtime.id } : void 0, storage: m.storage ? { local: __assign({}, a('local'), { get: function get(e) {
          return n(function (t) {
            e ? m.storage.local.get(e, t) : m.storage.local.get(t);
          });
        } }), sync: __assign({}, a('sync'), { get: function get(e) {
          return n(function (t) {
            e ? m.storage.sync.get(e, t) : m.storage.sync.get(t);
          });
        } }), onChanged: m.storage.onChanged } : void 0, tabs: m.tabs ? { create: function create(e) {
        return n(function (t) {
          m.tabs.create(e, function (s) {
            var n = s.id;x && v._activeTabs.push({ type: 'create', data: e, id: n }), t(s);
          });
        });
      }, get: function get(e) {
        return n(function (t) {
          m.tabs.get(e, t);
        });
      }, getCurrent: function getCurrent() {
        return n(function (e) {
          m.tabs.getCurrent(e);
        });
      }, captureVisibleTab: function captureVisibleTab(e, t) {
        return n(function (s) {
          t ? m.tabs.captureVisibleTab(e, t, s) : e ? m.tabs.captureVisibleTab(e, s) : m.tabs.captureVisibleTab(s);
        });
      }, update: function update(e, t) {
        return __awaiter(this, void 0, void 0, function () {
          var s = this;return __generator(this, function () {
            return [2, n(function (n) {
              return __awaiter(s, void 0, void 0, function () {
                return __generator(this, function () {
                  return t ? m.tabs.update(e, t, n) : m.tabs.update(e, n), x && v._activeTabs.push({ type: 'create', data: 'number' === typeof e ? t : e, id: 'number' === typeof e ? e : void 0 }), [2];
                });
              });
            })];
          });
        });
      }, query: function query(e) {
        return n(function (t) {
          m.tabs.query(e, t);
        });
      }, executeScript: function executeScript(e, t) {
        var s = this;return n(function (n) {
          return __awaiter(s, void 0, void 0, function () {
            var s, a, o;return __generator(this, function (r) {
              switch (r.label) {case 0:
                  return (t ? m.tabs.executeScript(e, t, n) : m.tabs.executeScript(e, n), s = 'number' === typeof e ? t : e, !s.code) ? [3, 4] : (a = void 0, 'number' !== typeof e) ? [3, 1] : (a = e, [3, 3]);case 1:
                  return [4, browserAPI.tabs.getCurrent()];case 2:
                  o = r.sent(), o && (a = o.id), r.label = 3;case 3:
                  x && v._executedScripts.push({ id: a, code: s.code }), r.label = 4;case 4:
                  return [2];}
            });
          });
        });
      }, sendMessage: function sendMessage(e, s) {
        return n(function (n) {
          var a = n.__resolve,
              o = n.__reject;m.tabs.sendMessage(e, s, function (e) {
            t(o) || a(e);
          });
        });
      }, onUpdated: m.tabs.onUpdated, onRemoved: m.tabs.onRemoved, onHighlighted: m.tabs.onHighlighted } : void 0, webRequest: m.webRequest ? { onBeforeRequest: m.webRequest.onBeforeRequest } : void 0 } : {};
}(BrowserAPINS || (BrowserAPINS = {})), window.BrowserAPIInstances = window.BrowserAPIInstances || [], window.BrowserAPIInstances.push(BrowserAPINS), !window.browserAPI || window.__isVirtual) {
  window.BrowserAPINS = window.BrowserAPI = BrowserAPINS, window.browserAPI = 'edge' !== BrowserAPINS.getBrowser() && window.browser ? window.browser : __assign({}, BrowserAPINS.polyfill, { __isProxied: !0 });var menusBrowserAPI = window.browserAPI;menusBrowserAPI.contextMenus ? !menusBrowserAPI.menus && (menusBrowserAPI.menus = menusBrowserAPI.contextMenus) : menusBrowserAPI.contextMenus = menusBrowserAPI.menus;
}var BrowserAPI = window.BrowserAPINS,
    browserAPI = window.browserAPI,
    __assign = undefined && undefined.__assign || Object.assign || function (e) {
  for (var t = 1, a = arguments.length, n; t < a; t++) {
    for (var s in n = arguments[t], n) {
      Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
  }return e;
},
    __awaiter = undefined && undefined.__awaiter || function (e, t, s, n) {
  return new (s || (s = Promise))(function (a, o) {
    function r(e) {
      try {
        i(n.next(e));
      } catch (t) {
        o(t);
      }
    }function l(e) {
      try {
        i(n['throw'](e));
      } catch (t) {
        o(t);
      }
    }function i(e) {
      e.done ? a(e.value) : new s(function (t) {
        t(e.value);
      }).then(r, l);
    }i((n = n.apply(e, t || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (e, s) {
  function n(e) {
    return function (t) {
      return a([e, t]);
    };
  }function a(n) {
    if (r) throw new TypeError('Generator is already executing.');for (; o;) {
      try {
        if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
            i = n;break;case 4:
            return o.label++, { value: n[1], done: !1 };case 5:
            o.label++, l = n[1], n = [0];continue;case 7:
            n = o.ops.pop(), o.trys.pop();continue;default:
            if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
              o = 0;continue;
            }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
              o.label = n[1];break;
            }if (6 === n[0] && o.label < i[1]) {
              o.label = i[1], i = n;break;
            }if (i && o.label < i[2]) {
              o.label = i[2], o.ops.push(n);break;
            }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
      } catch (t) {
        n = [6, t], l = 0;
      } finally {
        r = i = 0;
      }
    }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
  }var o = { label: 0, sent: function sent() {
      if (1 & i[0]) throw i[1];return i[1];
    }, trys: [], ops: [] },
      r,
      l,
      i,
      d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
    return this;
  }), d;
},
    _this = undefined;(function () {
  function e(e) {
    return 'undefined' === typeof e || null === e;
  }function t(e, t) {
    var s = document.createElement('div');return s.style[e] = t, s.style[e] === t;
  }function s(e, t, s) {
    var n = null,
        a = { onfinish: null, oncancel: null, cancel: function cancel() {
        n && n.cancel(), this.oncancel && this.oncancel.apply(this, { currentTime: Date.now(), timelineTime: null });
      }, play: function play() {
        var a = this;n && n.cancel(), n = s(e, t, function () {
          a.onfinish && a.onfinish.apply(a, { currentTime: Date.now(), timelineTime: null });
        });
      }, reverse: function reverse() {
        var a = this;n && n.cancel(), n = s(t, e, function () {
          a.onfinish && a.onfinish.apply(a, { currentTime: Date.now(), timelineTime: null });
        });
      }, pause: function pause() {}, finish: function finish() {}, currentTime: 0, effect: { timing: 0, getComputedTiming: function getComputedTiming() {
          return { endTime: 0, activeDuration: 0, currentIteration: 0, localTime: 0, progress: null };
        } }, finished: Promise.resolve(a), pending: !1, startTime: Date.now(), id: '', ready: Promise.resolve(a), playState: 'finished', playbackRate: 1, timeline: { currentTime: Date.now() } };return s(e, t, function () {
      a.onfinish && a.onfinish.apply(a, { currentTime: Date.now(), timelineTime: null });
    }), a;
  }if (!window.onExists) {
    var n = function () {
      function e(e) {
        var t = this;this._val = null, this._state = 'pending', this._done = !1, this._resolveListeners = [], this._rejectListeners = [], e(function (e) {
          t._done || (t._done = !0, t._val = e, t._state = 'resolved', t._resolveListeners.forEach(function (t) {
            t(e);
          }));
        }, function (e) {
          t._done || (t._done = !0, t._val = e, t._state = 'rejected', t._rejectListeners.forEach(function (t) {
            t(e);
          }));
        });
      }return e.prototype.then = function (e, t) {
        return e ? (this._done && 'resolved' === this._state ? e(this._val) : this._resolveListeners.push(e), !t) ? this : (this._done && 'rejected' === this._state ? t(this._val) : this._rejectListeners.push(t), this) : this;
      }, e.chain = function (t) {
        return new e(function (s) {
          return t[0] ? void t[0]().then(function (n) {
            t[1] ? e.chain(t.slice(1)).then(function (e) {
              s(e);
            }) : s(n);
          }) : void s(null);
        });
      }, e;
    }();window.onExists = function (t, s) {
      s || (s = window);var a = window.Promise || n;return new a(function (n) {
        if (t in s && !e(s[t])) return void n(s[t]);var a = window.setInterval(function () {
          t in s && !e(s[t]) && (window.clearInterval(a), n(s[t]));
        }, 50);
      });
    };var a = function a(e) {
      var t = {};return Object.getOwnPropertyNames(e).forEach(function (s) {
        t[s] = e[s];
      }), t;
    },
        o = function o(e) {
      var t = a(e),
          s = t.ready;window.Polymer(__assign({}, t, { ready: function ready() {
          this.classList.add('browser-' + BrowserAPI.getBrowser()), s && 'function' === typeof s && s.apply(this, []);
        } }));
    };window.withAsync = function (e, t) {
      return __awaiter(_this, void 0, void 0, function () {
        var s, n;return __generator(this, function (a) {
          switch (a.label) {case 0:
              return [4, e()];case 1:
              return s = a.sent(), [4, t()];case 2:
              return n = a.sent(), [4, s()];case 3:
              return a.sent(), [2, n];}
        });
      });
    }, window['with'] = function (e, t) {
      var s = e(),
          n = t();return s(), n;
    };var r = null,
        l = window.getComputedStyle && 'transform' in window.getComputedStyle(document.documentElement, '');window.setDisplayFlex = function (e) {
      null === r && (r = t('display', 'flex')), e.style.display = r ? 'flex' : '-webkit-flex';
    }, window.setTransform = function (e, t) {
      l ? e.style.transform = t : e.style.WebkitTransform = t;
    }, window.animateTransform = function (e, t, n) {
      var a = t.from,
          o = t.propName,
          r = t.to,
          i = t.postfix;if (l && !e.__isAnimationJqueryPolyfill) return e.animate([{ transform: o + '(' + a + i + ')' }, { transform: o + '(' + r + i + ')' }], n);e.style.WebkitTransform = o + '(' + a + i + ')';var d = document.createElement('div');return s('0px', '100px', function (t, s, l) {
        return d.style.height = t, $(d).animate({ height: s }, { duration: n.duration || 500, step: function step(t) {
            e.style.WebkitTransform = o + '(' + (a + (r - a) / 100 * t) + i + ')';
          }, complete: function complete() {
            e.style.WebkitTransform = o + '(' + s + i + ')', l();
          } }), { cancel: function cancel() {
            $(d).stop();
          } };
      });
    }, 'undefined' !== typeof Event && -1 === location.href.indexOf('background.html') && window.onExists('Promise').then(function () {
      window.onExists('Polymer').then(function () {
        window.objectify = a, window.register = o;var e = new Event('RegisterReady');window.dispatchEvent(e);
      });
    }), window.onExistsChain = function (e, t, s, a, o, r) {
      var l = window.Promise || n;return new l(function (i) {
        var d = e;n.chain([t, s, a, o, r].filter(function (e) {
          return !!e;
        }).map(function (e) {
          return function () {
            return new l(function (t) {
              window.onExists(e, d).then(function (e) {
                d = e, t(e);
              });
            });
          };
        })).then(function (e) {
          i(e);
        });
      });
    };
  }
})(), function (e) {
  function t(e) {
    var t = e.length,
        s = ae.type(e);return !ae.isWindow(e) && (1 === e.nodeType && t || 'array' === s || 'function' !== s && (0 === t || 'number' === typeof t && 0 < t && t - 1 in e));
  }function s(e) {
    var t = he[e] = {};return ae.each(e.match(re) || [], function (e, s) {
      t[s] = !0;
    }), t;
  }function n() {
    Object.defineProperty(this.cache = {}, 0, { get: function get() {
        return {};
      } }), this.expando = ae.expando + Math.random();
  }function a(e, t, s) {
    var n;if (void 0 === s && 1 === e.nodeType) if (n = 'data-' + t.replace(fe, '-$1').toLowerCase(), s = e.getAttribute(n), 'string' === typeof s) {
      try {
        s = 'true' === s || 'false' !== s && ('null' === s ? null : +s + '' === s ? +s : ye.test(s) ? JSON.parse(s) : s);
      } catch (t) {}be.set(e, t, s);
    } else s = void 0;return s;
  }function o() {
    return !0;
  }function r() {
    return !1;
  }function l() {
    try {
      return q.activeElement;
    } catch (e) {}
  }function i(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }function d(e, t, s) {
    if (ae.isFunction(t)) return ae.grep(e, function (e, n) {
      return !!t.call(e, n, e) !== s;
    });if (t.nodeType) return ae.grep(e, function (e) {
      return e === t !== s;
    });if ('string' === typeof t) {
      if (Ee.test(t)) return ae.filter(t, e, s);t = ae.filter(t, e);
    }return ae.grep(e, function (e) {
      return 0 <= ee.call(t, e) !== s;
    });
  }function c(e, t) {
    return ae.nodeName(e, 'table') && ae.nodeName(1 === t.nodeType ? t : t.firstChild, 'tr') ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody')) : e;
  }function u(e) {
    return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
  }function p(e) {
    var t = Fe.exec(e.type);return t ? e.type = t[1] : e.removeAttribute('type'), e;
  }function g(e, t) {
    for (var s = e.length, n = 0; n < s; n++) {
      xe.set(e[n], 'globalEval', !t || xe.get(t[n], 'globalEval'));
    }
  }function m(e, t) {
    var s, n, a, o, r, l, i, d;if (1 === t.nodeType) {
      if (xe.hasData(e) && (o = xe.access(e), r = xe.set(t, o), d = o.events, d)) for (a in delete r.handle, r.events = {}, d) {
        for (s = 0, n = d[a].length; s < n; s++) {
          ae.event.add(t, a, d[a][s]);
        }
      }be.hasData(e) && (l = be.access(e), i = ae.extend({}, l), be.set(t, i));
    }
  }function h(e, t) {
    var s = e.getElementsByTagName ? e.getElementsByTagName(t || '*') : e.querySelectorAll ? e.querySelectorAll(t || '*') : [];return t === void 0 || t && ae.nodeName(e, t) ? ae.merge([e], s) : s;
  }function y(e, t) {
    var s = t.nodeName.toLowerCase();'input' === s && Oe.test(e.type) ? t.checked = e.checked : ('input' === s || 'textarea' === s) && (t.defaultValue = e.defaultValue);
  }function f(e, t) {
    if (t in e) return t;for (var s = t.charAt(0).toUpperCase() + t.slice(1), n = t, a = Qe.length; a--;) {
      if (t = Qe[a] + s, t in e) return t;
    }return n;
  }function b(e, t) {
    return e = t || e, 'none' === ae.css(e, 'display') || !ae.contains(e.ownerDocument, e);
  }function x(t) {
    return e.getComputedStyle(t, null);
  }function v(e, t) {
    for (var s = [], n = 0, a = e.length, o, r, l; n < a; n++) {
      (r = e[n], !!r.style) && (s[n] = xe.get(r, 'olddisplay'), o = r.style.display, t ? (!s[n] && 'none' === o && (r.style.display = ''), '' === r.style.display && b(r) && (s[n] = xe.access(r, 'olddisplay', C(r.nodeName)))) : !s[n] && (l = b(r), (o && 'none' !== o || !l) && xe.set(r, 'olddisplay', l ? o : ae.css(r, 'display'))));
    }for (n = 0; n < a; n++) {
      (r = e[n], !!r.style) && (t && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = t ? s[n] || '' : 'none'));
    }return e;
  }function I(e, t, s) {
    var n = Ge.exec(t);return n ? V(0, n[1] - (s || 0)) + (n[2] || 'px') : t;
  }function S(e, t, s, n, a) {
    for (var o = s === (n ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, r = 0; 4 > o; o += 2) {
      'margin' === s && (r += ae.css(e, s + Ye[o], !0, a)), n ? ('content' === s && (r -= ae.css(e, 'padding' + Ye[o], !0, a)), 'margin' !== s && (r -= ae.css(e, 'border' + Ye[o] + 'Width', !0, a))) : (r += ae.css(e, 'padding' + Ye[o], !0, a), 'padding' !== s && (r += ae.css(e, 'border' + Ye[o] + 'Width', !0, a)));
    }return r;
  }function k(e, t, s) {
    var n = !0,
        a = 'width' === t ? e.offsetWidth : e.offsetHeight,
        o = x(e),
        r = ae.support.boxSizing && 'border-box' === ae.css(e, 'boxSizing', !1, o);if (0 >= a || null == a) {
      if (a = Ze(e, t, o), (0 > a || null == a) && (a = e.style[t]), ze.test(a)) return a;n = r && (ae.support.boxSizingReliable || a === e.style[t]), a = parseFloat(a) || 0;
    }return a + S(e, t, s || (r ? 'border' : 'content'), n, o) + 'px';
  }function C(e) {
    var t = q,
        s = Xe[e];return s || (s = M(e, t), ('none' === s || !s) && (et = (et || ae('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>').css('cssText', 'display:block !important')).appendTo(t.documentElement), t = (et[0].contentWindow || et[0].contentDocument).document, t.write('<!doctype html><html><body>'), t.close(), s = M(e, t), et.detach()), Xe[e] = s), s;
  }function M(e, t) {
    var s = ae(t.createElement(e)).appendTo(t.body),
        n = ae.css(s[0], 'display');return s.remove(), n;
  }function T(e, t, s, n) {
    if (ae.isArray(t)) ae.each(t, function (t, a) {
      s || st.test(e) ? n(e, a) : T(e + '[' + ('object' === ('undefined' === typeof a ? 'undefined' : babelHelpers['typeof'](a)) ? t : '') + ']', a, s, n);
    });else if (!s && 'object' === ae.type(t)) for (var a in t) {
      T(e + '[' + a + ']', t[a], s, n);
    } else n(e, t);
  }function w(e) {
    return function (t, s) {
      'string' !== typeof t && (s = t, t = '*');var n = 0,
          a = t.toLowerCase().match(re) || [],
          o;if (ae.isFunction(s)) for (; o = a[n++];) {
        '+' === o[0] ? (o = o.slice(1) || '*', (e[o] = e[o] || []).unshift(s)) : (e[o] = e[o] || []).push(s);
      }
    };
  }function N(e, t, s, n) {
    function a(l) {
      var i;return o[l] = !0, ae.each(e[l] || [], function (e, l) {
        var d = l(t, s, n);return 'string' !== typeof d || r || o[d] ? r ? !(i = d) : void 0 : (t.dataTypes.unshift(d), a(d), !1);
      }), i;
    }var o = {},
        r = e === ft;return a(t.dataTypes[0]) || !o['*'] && a('*');
  }function E(e, t) {
    var s = ae.ajaxSettings.flatOptions || {},
        n,
        a;for (n in t) {
      void 0 !== t[n] && ((s[n] ? e : a || (a = {}))[n] = t[n]);
    }return a && ae.extend(!0, e, a), e;
  }function P(e, t, s) {
    for (var n = e.contents, a = e.dataTypes, o, r, l, i; '*' === a[0];) {
      a.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader('Content-Type'));
    }if (o) for (r in n) {
      if (n[r] && n[r].test(o)) {
        a.unshift(r);break;
      }
    }if (a[0] in s) l = a[0];else {
      for (r in s) {
        if (!a[0] || e.converters[r + ' ' + a[0]]) {
          l = r;break;
        }i || (i = r);
      }l = l || i;
    }return l ? (l !== a[0] && a.unshift(l), s[l]) : void 0;
  }function _(e, t, s, n) {
    var a = {},
        o = e.dataTypes.slice(),
        r,
        l,
        i,
        d,
        c;if (o[1]) for (i in e.converters) {
      a[i.toLowerCase()] = e.converters[i];
    }for (l = o.shift(); l;) {
      if (e.responseFields[l] && (s[e.responseFields[l]] = t), !c && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = l, l = o.shift(), l) if ('*' === l) l = c;else if ('*' !== c && c !== l) {
        if (i = a[c + ' ' + l] || a['* ' + l], !i) for (r in a) {
          if (d = r.split(' '), d[1] === l && (i = a[c + ' ' + d[0]] || a['* ' + d[0]], i)) {
            !0 === i ? i = a[r] : !0 !== a[r] && (l = d[0], o.unshift(d[1]));break;
          }
        }if (!0 !== i) if (i && e.throws) t = i(t);else try {
          t = i(t);
        } catch (t) {
          return { state: 'parsererror', error: i ? t : 'No conversion from ' + c + ' to ' + l };
        }
      }
    }return { state: 'success', data: t };
  }function L() {
    return setTimeout(function () {
      Lt = void 0;
    }), Lt = ae.now();
  }function A(e, t, s) {
    for (var n = (_t[t] || []).concat(_t['*']), a = 0, o = n.length, r; a < o; a++) {
      if (r = n[a].call(s, t, e)) return r;
    }
  }function U(e, t, s) {
    var n = 0,
        a = Pt.length,
        o = ae.Deferred().always(function () {
      delete r.elem;
    }),
        r = function r() {
      if (c) return !1;for (var t = Lt || L(), s = V(0, l.startTime + l.duration - t), n = s / l.duration || 0, a = 1 - n, r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(a);
      }return o.notifyWith(e, [l, a, s]), 1 > a && i ? s : (o.resolveWith(e, [l]), !1);
    },
        l = o.promise({ elem: e, props: ae.extend({}, t), opts: ae.extend(!0, { specialEasing: {} }, s), originalProperties: t, originalOptions: s, startTime: Lt || L(), duration: s.duration, tweens: [], createTween: function createTween(t, s) {
        var n = ae.Tween(e, l.opts, t, s, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(n), n;
      }, stop: function stop(t) {
        var s = 0,
            n = t ? l.tweens.length : 0;if (c) return this;for (c = !0; s < n; s++) {
          l.tweens[s].run(1);
        }return t ? o.resolveWith(e, [l, t]) : o.rejectWith(e, [l, t]), this;
      } }),
        i = l.props,
        d,
        c;for (R(i, l.opts.specialEasing); n < a; n++) {
      if (d = Pt[n].call(l, e, i, l.opts), d) return d;
    }return ae.map(i, A, l), ae.isFunction(l.opts.start) && l.opts.start.call(e, l), ae.fx.timer(ae.extend(r, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }function R(e, t) {
    var s, n, a, o, r;for (s in e) {
      if (n = ae.camelCase(s), a = t[n], o = e[s], ae.isArray(o) && (a = o[1], o = e[s] = o[0]), s !== n && (e[n] = o, delete e[s]), r = ae.cssHooks[n], r && 'expand' in r) for (s in o = r.expand(o), delete e[n], o) {
        s in e || (e[s] = o[s], t[s] = a);
      } else t[n] = a;
    }
  }function j(e, t, s, n, a) {
    return new j.prototype.init(e, t, s, n, a);
  }function O(e, t) {
    var s = { height: e },
        n = 0,
        a;for (t = t ? 1 : 0; 4 > n; n += 2 - t) {
      a = Ye[n], s['margin' + a] = s['padding' + a] = e;
    }return t && (s.opacity = s.width = e), s;
  }function D(e) {
    return ae.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }var V = Math.max,
      F = String.fromCharCode,
      B = 'undefined',
      H = e.location,
      q = e.document,
      W = q.documentElement,
      G = e.jQuery,
      z = e.$,
      X = {},
      K = [],
      J = '2.0.3',
      Y = K.concat,
      Q = K.push,
      Z = K.slice,
      ee = K.indexOf,
      te = X.toString,
      se = X.hasOwnProperty,
      ne = J.trim,
      ae = function e(t, s) {
    return new e.fn.init(t, s, ge);
  },
      oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      re = /\S+/g,
      le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      ie = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      de = /^-ms-/,
      ce = /-([\da-z])/gi,
      ue = function ue(e, t) {
    return t.toUpperCase();
  },
      pe = function t() {
    q.removeEventListener('DOMContentLoaded', t, !1), e.removeEventListener('load', t, !1), ae.ready();
  },
      ge,
      me;ae.fn = ae.prototype = { jquery: J, constructor: ae, init: function init(e, t, s) {
      var n, a;if (!e) return this;if ('string' === typeof e) {
        if (n = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : le.exec(e), n && (n[1] || !t)) {
          if (n[1]) {
            if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : q, !0)), ie.test(n[1]) && ae.isPlainObject(t)) for (n in t) {
              ae.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            }return this;
          }return a = q.getElementById(n[2]), a && a.parentNode && (this.length = 1, this[0] = a), this.context = q, this.selector = e, this;
        }return !t || t.jquery ? (t || s).find(e) : this.constructor(t).find(e);
      }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? s.ready(e) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this));
    }, selector: '', length: 0, toArray: function toArray() {
      return Z.call(this);
    }, get: function get(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    }, pushStack: function pushStack(e) {
      var t = ae.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
    }, each: function each(e, t) {
      return ae.each(this, e, t);
    }, ready: function ready(e) {
      return ae.ready.promise().done(e), this;
    }, slice: function slice() {
      return this.pushStack(Z.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          s = +e + (0 > e ? t : 0);return this.pushStack(0 <= s && s < t ? [this[s]] : []);
    }, map: function map(e) {
      return this.pushStack(ae.map(this, function (t, s) {
        return e.call(t, s, t);
      }));
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: Q, sort: [].sort, splice: [].splice }, ae.fn.init.prototype = ae.fn, ae.extend = ae.fn.extend = function () {
    var e = arguments[0] || {},
        t = 1,
        s = arguments.length,
        n = !1,
        a,
        o,
        r,
        l,
        i,
        d;for ('boolean' === typeof e && (n = e, e = arguments[1] || {}, t = 2), 'object' === ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) || ae.isFunction(e) || (e = {}), s === t && (e = this, --t); t < s; t++) {
      if (null != (a = arguments[t])) for (o in a) {
        (r = e[o], l = a[o], e !== l) && (n && l && (ae.isPlainObject(l) || (i = ae.isArray(l))) ? (i ? (i = !1, d = r && ae.isArray(r) ? r : []) : d = r && ae.isPlainObject(r) ? r : {}, e[o] = ae.extend(n, d, l)) : void 0 !== l && (e[o] = l));
      }
    }return e;
  }, ae.extend({ expando: 'jQuery' + (J + Math.random()).replace(/\D/g, ''), noConflict: function noConflict(t) {
      return e.$ === ae && (e.$ = z), t && e.jQuery === ae && (e.jQuery = G), ae;
    }, isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
      e ? ae.readyWait++ : ae.ready(!0);
    }, ready: function ready(e) {
      (!0 === e ? ! --ae.readyWait : !ae.isReady) && (ae.isReady = !0, !0 !== e && 0 < --ae.readyWait || (me.resolveWith(q, [ae]), ae.fn.trigger && ae(q).trigger('ready').off('ready')));
    }, isFunction: function isFunction(e) {
      return 'function' === ae.type(e);
    }, isArray: Array.isArray, isWindow: function isWindow(e) {
      return null != e && e === e.window;
    }, isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }, type: function type(e) {
      return null == e ? e + '' : 'object' === ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) || 'function' === typeof e ? X[te.call(e)] || 'object' : 'undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e);
    }, isPlainObject: function isPlainObject(e) {
      if ('object' !== ae.type(e) || e.nodeType || ae.isWindow(e)) return !1;try {
        if (e.constructor && !se.call(e.constructor.prototype, 'isPrototypeOf')) return !1;
      } catch (t) {
        return !1;
      }return !0;
    }, isEmptyObject: function isEmptyObject(e) {
      for (var t in e) {
        return !1;
      }return !0;
    }, error: function error(e) {
      throw new Error(e);
    }, parseHTML: function parseHTML(e, t, s) {
      if (!e || 'string' !== typeof e) return null;'boolean' === typeof t && (s = t, t = !1), t = t || q;var n = ie.exec(e),
          a = !s && [];return n ? [t.createElement(n[1])] : (n = ae.buildFragment([e], t, a), a && ae(a).remove(), ae.merge([], n.childNodes));
    }, parseJSON: JSON.parse, parseXML: function parseXML(e) {
      var t, s;if (!e || 'string' !== typeof e) return null;try {
        s = new DOMParser(), t = s.parseFromString(e, 'text/xml');
      } catch (s) {
        t = void 0;
      }return (!t || t.getElementsByTagName('parsererror').length) && ae.error('Invalid XML: ' + e), t;
    }, noop: function noop() {}, globalEval: function globalEval(e) {
      var t = eval,
          s;e = ae.trim(e), e && (1 === e.indexOf('use notstrict') ? (s = q.createElement('script'), s.text = e, q.head.appendChild(s).parentNode.removeChild(s)) : t(e));
    }, camelCase: function camelCase(e) {
      return e.replace(de, 'ms-').replace(ce, ue);
    }, nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }, each: function each(e, s, n) {
      var a = 0,
          o = e.length,
          r = t(e),
          l;if (n) {
        if (r) for (; a < o && (l = s.apply(e[a], n), !1 !== l); a++) {} else for (a in e) {
          if (l = s.apply(e[a], n), !1 === l) break;
        }
      } else if (r) for (; a < o && (l = s.call(e[a], a, e[a]), !1 !== l); a++) {} else for (a in e) {
        if (l = s.call(e[a], a, e[a]), !1 === l) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? '' : ne.call(e);
    }, makeArray: function makeArray(e, s) {
      var n = s || [];return null != e && (t(Object(e)) ? ae.merge(n, 'string' === typeof e ? [e] : e) : Q.call(n, e)), n;
    }, inArray: function inArray(e, t, s) {
      return null == t ? -1 : ee.call(t, e, s);
    }, merge: function merge(e, t) {
      var s = t.length,
          n = e.length,
          a = 0;if ('number' === typeof s) for (; a < s; a++) {
        e[n++] = t[a];
      } else for (; void 0 !== t[a];) {
        e[n++] = t[a++];
      }return e.length = n, e;
    }, grep: function grep(e, t, s) {
      var n = [],
          a = 0,
          o = e.length,
          r;for (s = !!s; a < o; a++) {
        r = !!t(e[a], a), s !== r && n.push(e[a]);
      }return n;
    }, map: function map(e, s, n) {
      var a = 0,
          o = e.length,
          r = t(e),
          l = [],
          i;if (r) for (; a < o; a++) {
        i = s(e[a], a, n), null != i && (l[l.length] = i);
      } else for (a in e) {
        i = s(e[a], a, n), null != i && (l[l.length] = i);
      }return Y.apply([], l);
    }, guid: 1, proxy: function proxy(e, t) {
      var s, n, a;if ('string' === typeof t && (s = e[t], t = e, e = s), !!ae.isFunction(e)) return n = Z.call(arguments, 2), a = function a() {
        return e.apply(t || this, n.concat(Z.call(arguments)));
      }, a.guid = e.guid = e.guid || ae.guid++, a;
    }, access: function access(e, t, s, n, a, o, r) {
      var l = 0,
          i = e.length,
          d = null == s;if ('object' === ae.type(s)) for (l in a = !0, s) {
        ae.access(e, t, l, s[l], !0, o, r);
      } else if (void 0 !== n && (a = !0, ae.isFunction(n) || (r = !0), d && (r ? (t.call(e, n), t = null) : (d = t, t = function t(e, _t2, s) {
        return d.call(ae(e), s);
      })), t)) for (; l < i; l++) {
        t(e[l], s, r ? n : n.call(e[l], l, t(e[l], s)));
      }return a ? e : d ? t.call(e) : i ? t(e[0], s) : o;
    }, now: Date.now, swap: function swap(e, t, s, n) {
      var a = {},
          o,
          r;for (r in t) {
        a[r] = e.style[r], e.style[r] = t[r];
      }for (r in o = s.apply(e, n || []), t) {
        e.style[r] = a[r];
      }return o;
    } }), ae.ready.promise = function (t) {
    return me || (me = ae.Deferred(), 'complete' === q.readyState ? setTimeout(ae.ready) : (q.addEventListener('DOMContentLoaded', pe, !1), e.addEventListener('load', pe, !1))), me.promise(t);
  }, ae.each(['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'], function (e, t) {
    X['[object ' + t + ']'] = t.toLowerCase();
  }), ge = ae(q), function (e) {
    function t(e, t, s, n) {
      var a, o, r, l, d, i, c, u, m, h;if ((t ? t.ownerDocument || t : k) !== xe && be(t), t = t || xe, s = s || [], !e || 'string' !== typeof e) return s;if (1 !== (l = t.nodeType) && 9 !== l) return [];if (Ie && !n) {
        if (a = ne.exec(e)) if (!(r = a[1])) {
          if (a[2]) return O.apply(s, t.getElementsByTagName(e)), s;if ((r = a[3]) && ue.getElementsByClassName && t.getElementsByClassName) return O.apply(s, t.getElementsByClassName(r)), s;
        } else if (9 === l) {
          if (o = t.getElementById(r), !(o && o.parentNode)) return s;if (o.id === r) return s.push(o), s;
        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(r)) && Me(t, o) && o.id === r) return s.push(o), s;if (ue.qsa && (!Se || !Se.test(e))) {
          if (u = c = S, m = t, h = 9 === l && e, 1 === l && 'object' !== t.nodeName.toLowerCase()) {
            for (i = p(e), (c = t.getAttribute('id')) ? u = c.replace(le, '\\$&') : t.setAttribute('id', u), u = '[id=\'' + u + '\'] ', d = i.length; d--;) {
              i[d] = u + g(i[d]);
            }m = Y.test(e) && t.parentNode || t, h = i.join(',');
          }if (h) try {
            return O.apply(s, m.querySelectorAll(h)), s;
          } catch (e) {} finally {
            c || t.removeAttribute('id');
          }
        }
      }return I(e.replace(X, '$1'), t, s, n);
    }function s() {
      function e(s, n) {
        return t.push(s += ' ') > ge.cacheLength && delete e[t.shift()], e[s] = n;
      }var t = [];return e;
    }function n(e) {
      return e[S] = !0, e;
    }function a(e) {
      var t = xe.createElement('div');try {
        return !!e(t);
      } catch (t) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function o(e, t) {
      for (var s = e.split('|'), n = e.length; n--;) {
        ge.attrHandle[s[n]] = t;
      }
    }function r(e, t) {
      var s = t && e,
          n = s && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || L) - (~e.sourceIndex || L);if (n) return n;if (s) for (; s = s.nextSibling;) {
        if (s === t) return -1;
      }return e ? 1 : -1;
    }function l(e) {
      return function (t) {
        var s = t.nodeName.toLowerCase();return 'input' === s && t.type === e;
      };
    }function d(e) {
      return function (t) {
        var s = t.nodeName.toLowerCase();return ('input' === s || 'button' === s) && t.type === e;
      };
    }function c(e) {
      return n(function (t) {
        return t = +t, n(function (s, n) {
          for (var a = e([], s.length, t), o = a.length, r; o--;) {
            s[r = a[o]] && (s[r] = !(n[r] = s[r]));
          }
        });
      });
    }function u() {}function p(e, s) {
      var n = w[e + ' '],
          a,
          o,
          r,
          l,
          i,
          d,
          c;if (n) return s ? 0 : n.slice(0);for (i = e, d = [], c = ge.preFilter; i;) {
        for (l in (!a || (o = K.exec(i))) && (o && (i = i.slice(o[0].length) || i), d.push(r = [])), a = !1, (o = J.exec(i)) && (a = o.shift(), r.push({ value: a, type: o[0].replace(X, ' ') }), i = i.slice(a.length)), ge.filter) {
          (o = te[l].exec(i)) && (!c[l] || (o = c[l](o))) && (a = o.shift(), r.push({ value: a, type: l, matches: o }), i = i.slice(a.length));
        }if (!a) break;
      }return s ? i.length : i ? t.error(e) : w(e, d).slice(0);
    }function g(e) {
      for (var t = 0, s = e.length, n = ''; t < s; t++) {
        n += e[t].value;
      }return n;
    }function m(e, t, s) {
      var n = t.dir,
          a = s && 'parentNode' === n,
          o = M++;return t.first ? function (t, s, o) {
        for (; t = t[n];) {
          if (1 === t.nodeType || a) return e(t, s, o);
        }
      } : function (t, s, r) {
        var l = C + ' ' + o,
            i,
            d,
            c;if (r) {
          for (; t = t[n];) {
            if ((1 === t.nodeType || a) && e(t, s, r)) return !0;
          }
        } else for (; t = t[n];) {
          if (1 === t.nodeType || a) if (c = t[S] || (t[S] = {}), (d = c[n]) && d[0] === l) {
            if (!0 === (i = d[1]) || i === pe) return !0 === i;
          } else if (d = c[n] = [l], d[1] = e(t, s, r) || pe, !0 === d[1]) return !0;
        }
      };
    }function h(e) {
      return 1 < e.length ? function (t, s, n) {
        for (var a = e.length; a--;) {
          if (!e[a](t, s, n)) return !1;
        }return !0;
      } : e[0];
    }function y(e, t, s, n, a) {
      for (var o = [], r = 0, l = e.length, i; r < l; r++) {
        (i = e[r]) && (!s || s(i, n, a)) && (o.push(i), null != t && t.push(r));
      }return o;
    }function f(e, t, s, a, o, r) {
      return a && !a[S] && (a = f(a)), o && !o[S] && (o = f(o, r)), n(function (n, r, l, d) {
        var c = [],
            u = [],
            p = r.length,
            g = n || v(t || '*', l.nodeType ? [l] : l, []),
            m = e && (n || !t) ? y(g, c, e, l, d) : g,
            h = s ? o || (n ? e : p || a) ? [] : r : m,
            f,
            b,
            i;if (s && s(m, h, l, d), a) for (f = y(h, u), a(f, [], l, d), b = f.length; b--;) {
          (i = f[b]) && (h[u[b]] = !(m[u[b]] = i));
        }if (!n) h = y(h === r ? h.splice(p, h.length) : h), o ? o(null, r, h, d) : O.apply(r, h);else if (o || e) {
          if (o) {
            for (f = [], b = h.length; b--;) {
              (i = h[b]) && f.push(m[b] = i);
            }o(null, h = [], f, d);
          }for (b = h.length; b--;) {
            (i = h[b]) && -1 < (f = o ? V.call(n, i) : c[b]) && (n[f] = !(r[f] = i));
          }
        }
      });
    }function b(e) {
      for (var t = e.length, s = ge.relative[e[0].type], n = s || ge.relative[' '], a = s ? 1 : 0, o = m(function (e) {
        return e === i;
      }, n, !0), r = m(function (e) {
        return -1 < V.call(i, e);
      }, n, !0), l = [function (e, t, n) {
        return !s && (n || t !== ye) || ((i = t).nodeType ? o(e, t, n) : r(e, t, n));
      }], i, d, c; a < t; a++) {
        if (d = ge.relative[e[a].type]) l = [m(h(l), d)];else {
          if (d = ge.filter[e[a].type].apply(null, e[a].matches), d[S]) {
            for (c = ++a; c < t && !ge.relative[e[c].type]; c++) {}return f(1 < a && h(l), 1 < a && g(e.slice(0, a - 1).concat({ value: ' ' === e[a - 2].type ? '*' : '' })).replace(X, '$1'), d, a < c && b(e.slice(a, c)), c < t && b(e = e.slice(c)), c < t && g(e));
          }l.push(d);
        }
      }return h(l);
    }function x(e, s) {
      var a = 0,
          o = 0 < s.length,
          r = 0 < e.length,
          l = function l(n, _l, d, c, u) {
        var p = [],
            g = 0,
            m = '0',
            i = n && [],
            h = null != u,
            f = ye,
            b = n || r && ge.find.TAG('*', u && _l.parentNode || _l),
            x = C += null == f ? 1 : Math.random() || 0.1,
            v,
            I,
            S;for (h && (ye = _l !== xe && _l, pe = a); null != (v = b[m]); m++) {
          if (r && v) {
            for (I = 0; S = e[I++];) {
              if (S(v, _l, d)) {
                c.push(v);break;
              }
            }h && (C = x, pe = ++a);
          }o && ((v = !S && v) && g--, n && i.push(v));
        }if (g += m, o && m !== g) {
          for (I = 0; S = s[I++];) {
            S(i, p, _l, d);
          }if (n) {
            if (0 < g) for (; m--;) {
              i[m] || p[m] || (p[m] = R.call(c));
            }p = y(p);
          }O.apply(c, p), h && !n && 0 < p.length && 1 < g + s.length && t.uniqueSort(c);
        }return h && (C = x, ye = f), i;
      };return o ? n(l) : l;
    }function v(e, s, n) {
      for (var a = 0, o = s.length; a < o; a++) {
        t(e, s[a], n);
      }return n;
    }function I(e, t, s, n) {
      var a = p(e),
          o,
          r,
          l,
          i,
          d;if (!n && 1 === a.length) {
        if (r = a[0] = a[0].slice(0), 2 < r.length && 'ID' === (l = r[0]).type && ue.getById && 9 === t.nodeType && Ie && ge.relative[r[1].type]) {
          if (t = (ge.find.ID(l.matches[0].replace(ie, de), t) || [])[0], !t) return s;e = e.slice(r.shift().value.length);
        }for (o = te.needsContext.test(e) ? 0 : r.length; o-- && (l = r[o], !ge.relative[i = l.type]);) {
          if ((d = ge.find[i]) && (n = d(l.matches[0].replace(ie, de), Y.test(r[0].type) && t.parentNode || t))) {
            if (r.splice(o, 1), e = n.length && g(r), !e) return O.apply(s, n), s;break;
          }
        }
      }return he(e, a)(n, t, !Ie, s, Y.test(e)), s;
    }var S = 'sizzle' + -new Date(),
        k = e.document,
        C = 0,
        M = 0,
        T = s(),
        w = s(),
        N = s(),
        E = !1,
        P = function P(e, t) {
      return e === t ? (E = !0, 0) : 0;
    },
        _ = 'undefined',
        L = -2147483648,
        A = {}.hasOwnProperty,
        U = [],
        R = U.pop,
        j = U.push,
        O = U.push,
        D = U.slice,
        V = U.indexOf || function (e) {
      for (var t = 0, s = this.length; t < s; t++) {
        if (this[t] === e) return t;
      }return -1;
    },
        B = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        H = '[\\x20\\t\\r\\n\\f]',
        q = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
        W = q.replace('w', 'w#'),
        G = '\\[' + H + '*(' + q + ')' + H + '*(?:([*^$|!~]?=)' + H + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' + W + ')|)|)' + H + '*\\]',
        z = ':(' + q + ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' + G.replace(3, 8) + ')*)|.*)\\)|)',
        X = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        K = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        J = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        Y = /[\x20\t\r\n\f]*[+~]/,
        Q = /=[\x20\t\r\n\f]*([^\]'"]*)[\x20\t\r\n\f]*\]/g,
        Z = new RegExp(z),
        ee = new RegExp('^' + W + '$'),
        te = { ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: new RegExp('^(' + q.replace('w', 'w*') + ')'), ATTR: new RegExp('^' + G), PSEUDO: new RegExp('^' + z), CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i },
        se = /^[^{]+\{\s*\[native \w/,
        ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        oe = /^(?:input|select|textarea|button)$/i,
        re = /^h\d$/i,
        le = /'|\\/g,
        ie = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        de = function de(e, t, s) {
      var n = '0x' + t - 65536;return n !== n || s ? t : 0 > n ? F(n + 65536) : F(55296 | n >> 10, 56320 | 1023 & n);
    },
        ce,
        ue,
        pe,
        ge,
        me,
        i,
        he,
        ye,
        fe,
        be,
        xe,
        ve,
        Ie,
        Se,
        ke,
        Ce,
        Me;try {
      O.apply(U = D.call(k.childNodes), k.childNodes), U[k.childNodes.length].nodeType;
    } catch (t) {
      O = { apply: U.length ? function (e, t) {
          j.apply(e, D.call(t));
        } : function (e, t) {
          for (var s = e.length, n = 0; e[s++] = t[n++];) {}e.length = s - 1;
        } };
    }for (ce in i = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && 'HTML' !== t.nodeName;
    }, ue = t.support = {}, be = t.setDocument = function (e) {
      var t = e ? e.ownerDocument || e : k,
          s = t.defaultView;return t !== xe && 9 === t.nodeType && t.documentElement ? (xe = t, ve = t.documentElement, Ie = !i(t), s && s.attachEvent && s !== s.top && s.attachEvent('onbeforeunload', function () {
        be();
      }), ue.attributes = a(function (e) {
        return e.className = 'i', !e.getAttribute('className');
      }), ue.getElementsByTagName = a(function (e) {
        return e.appendChild(t.createComment('')), !e.getElementsByTagName('*').length;
      }), ue.getElementsByClassName = a(function (e) {
        return e.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', e.firstChild.className = 'i', 2 === e.getElementsByClassName('i').length;
      }), ue.getById = a(function (e) {
        return ve.appendChild(e).id = S, !t.getElementsByName || !t.getElementsByName(S).length;
      }), ue.getById ? (ge.find.ID = function (e, t) {
        if (babelHelpers['typeof'](t.getElementById) !== _ && Ie) {
          var s = t.getElementById(e);return s && s.parentNode ? [s] : [];
        }
      }, ge.filter.ID = function (e) {
        var t = e.replace(ie, de);return function (e) {
          return e.getAttribute('id') === t;
        };
      }) : (delete ge.find.ID, ge.filter.ID = function (e) {
        var t = e.replace(ie, de);return function (e) {
          var s = babelHelpers['typeof'](e.getAttributeNode) !== _ && e.getAttributeNode('id');return s && s.value === t;
        };
      }), ge.find.TAG = ue.getElementsByTagName ? function (e, t) {
        if (babelHelpers['typeof'](t.getElementsByTagName) !== _) return t.getElementsByTagName(e);
      } : function (e, t) {
        var s = [],
            n = 0,
            a = t.getElementsByTagName(e),
            o;if ('*' === e) {
          for (; o = a[n++];) {
            1 === o.nodeType && s.push(o);
          }return s;
        }return a;
      }, ge.find.CLASS = ue.getElementsByClassName && function (e, t) {
        if (babelHelpers['typeof'](t.getElementsByClassName) !== _ && Ie) return t.getElementsByClassName(e);
      }, ke = [], Se = [], (ue.qsa = se.test(t.querySelectorAll)) && (a(function (e) {
        e.innerHTML = '<select><option selected=\'\'></option></select>', e.querySelectorAll('[selected]').length || Se.push('\\[' + H + '*(?:value|' + B + ')'), e.querySelectorAll(':checked').length || Se.push(':checked');
      }), a(function (e) {
        var s = t.createElement('input');s.setAttribute('type', 'hidden'), e.appendChild(s).setAttribute('t', ''), e.querySelectorAll('[t^=\'\']').length && Se.push('[*^$]=' + H + '*(?:\'\'|"")'), e.querySelectorAll(':enabled').length || Se.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), Se.push(',.*:');
      })), (ue.matchesSelector = se.test(Ce = ve.webkitMatchesSelector || ve.mozMatchesSelector || ve.oMatchesSelector || ve.msMatchesSelector)) && a(function (e) {
        ue.disconnectedMatch = Ce.call(e, 'div'), Ce.call(e, '[s!=\'\']:x'), ke.push('!=', z);
      }), Se = Se.length && new RegExp(Se.join('|')), ke = ke.length && new RegExp(ke.join('|')), Me = se.test(ve.contains) || ve.compareDocumentPosition ? function (e, t) {
        var s = 9 === e.nodeType ? e.documentElement : e,
            n = t && t.parentNode;return e === n || !!(n && 1 === n.nodeType && (s.contains ? s.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, P = ve.compareDocumentPosition ? function (e, s) {
        if (e === s) return E = !0, 0;var n = s.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(s);return n ? 1 & n || !ue.sortDetached && s.compareDocumentPosition(e) === n ? e === t || Me(k, e) ? -1 : s === t || Me(k, s) ? 1 : fe ? V.call(fe, e) - V.call(fe, s) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, s) {
        var n = 0,
            a = e.parentNode,
            o = s.parentNode,
            l = [e],
            i = [s],
            d;if (e === s) return E = !0, 0;if (!a || !o) return e === t ? -1 : s === t ? 1 : a ? -1 : o ? 1 : fe ? V.call(fe, e) - V.call(fe, s) : 0;if (a === o) return r(e, s);for (d = e; d = d.parentNode;) {
          l.unshift(d);
        }for (d = s; d = d.parentNode;) {
          i.unshift(d);
        }for (; l[n] === i[n];) {
          n++;
        }return n ? r(l[n], i[n]) : l[n] === k ? -1 : i[n] === k ? 1 : 0;
      }, t) : xe;
    }, t.matches = function (e, s) {
      return t(e, null, null, s);
    }, t.matchesSelector = function (e, s) {
      if ((e.ownerDocument || e) !== xe && be(e), s = s.replace(Q, '=\'$1\']'), ue.matchesSelector && Ie && (!ke || !ke.test(s)) && (!Se || !Se.test(s))) try {
        var n = Ce.call(e, s);if (n || ue.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (t) {}return 0 < t(s, xe, null, [e]).length;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== xe && be(e), Me(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== xe && be(e);var s = ge.attrHandle[t.toLowerCase()],
          n = s && A.call(ge.attrHandle, t.toLowerCase()) ? s(e, t, !Ie) : void 0;return void 0 === n ? ue.attributes || !Ie ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null : n;
    }, t.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }, t.uniqueSort = function (e) {
      var t = [],
          s = 0,
          n = 0,
          a;if (E = !ue.detectDuplicates, fe = !ue.sortStable && e.slice(0), e.sort(P), E) {
        for (; a = e[n++];) {
          a === e[n] && (s = t.push(n));
        }for (; s--;) {
          e.splice(t[s], 1);
        }
      }return e;
    }, me = t.getText = function (e) {
      var t = '',
          s = 0,
          n = e.nodeType,
          a;if (!n) for (; a = e[s]; s++) {
        t += me(a);
      } else if (1 === n || 9 === n || 11 === n) {
        if ('string' === typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
          t += me(e);
        }
      } else if (3 === n || 4 === n) return e.nodeValue;return t;
    }, ge = t.selectors = { cacheLength: 50, createPseudo: n, match: te, attrHandle: {}, find: {}, relative: { ">": { dir: 'parentNode', first: !0 }, " ": { dir: 'parentNode' }, "+": { dir: 'previousSibling', first: !0 }, "~": { dir: 'previousSibling' } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(ie, de), e[3] = (e[4] || e[5] || '').replace(ie, de), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (!e[3] && t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t = !e[5] && e[2],
              s;return te.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : t && Z.test(t) && (s = p(t, !0)) && (s = t.indexOf(')', t.length - s) - t.length) && (e[0] = e[0].slice(0, s), e[2] = t.slice(0, s)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(ie, de).toLowerCase();return '*' === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = T[e + ' '];return t || (t = new RegExp('(^|' + H + ')' + e + '(' + H + '|$)')) && T(e, function (e) {
            return t.test('string' === typeof e.className && e.className || babelHelpers['typeof'](e.getAttribute) !== _ && e.getAttribute('class') || '');
          });
        }, ATTR: function ATTR(e, s, n) {
          return function (a) {
            var o = t.attr(a, e);return null == o ? '!=' === s : !s || (o += '', '=' === s ? o === n : '!=' === s ? o !== n : '^=' === s ? n && 0 === o.indexOf(n) : '*=' === s ? n && -1 < o.indexOf(n) : '$=' === s ? n && o.slice(-n.length) === n : '~=' === s ? -1 < (' ' + o + ' ').indexOf(n) : '|=' === s && (o === n || o.slice(0, n.length + 1) === n + '-'));
          };
        }, CHILD: function CHILD(e, t, s, n, a) {
          var o = 'nth' !== e.slice(0, 3),
              r = 'last' !== e.slice(-4),
              l = 'of-type' === t;return 1 === n && 0 === a ? function (e) {
            return !!e.parentNode;
          } : function (t, s, i) {
            var d = o === r ? 'previousSibling' : 'nextSibling',
                c = t.parentNode,
                u = l && t.nodeName.toLowerCase(),
                p = !i && !l,
                g,
                m,
                h,
                y,
                f,
                b;if (c) {
              if (o) {
                for (; d;) {
                  for (h = t; h = h[d];) {
                    if (l ? h.nodeName.toLowerCase() === u : 1 === h.nodeType) return !1;
                  }b = d = 'only' === e && !b && 'nextSibling';
                }return !0;
              }if (b = [r ? c.firstChild : c.lastChild], r && p) {
                for (m = c[S] || (c[S] = {}), g = m[e] || [], f = g[0] === C && g[1], y = g[0] === C && g[2], h = f && c.childNodes[f]; h = ++f && h && h[d] || (y = f = 0) || b.pop();) {
                  if (1 === h.nodeType && ++y && h === t) {
                    m[e] = [C, f, y];break;
                  }
                }
              } else if (p && (g = (t[S] || (t[S] = {}))[e]) && g[0] === C) y = g[1];else for (; (h = ++f && h && h[d] || (y = f = 0) || b.pop()) && !((l ? h.nodeName.toLowerCase() === u : 1 === h.nodeType) && ++y && (p && ((h[S] || (h[S] = {}))[e] = [C, y]), h === t));) {}return y -= a, y === n || 0 === y % n && 0 <= y / n;
            }
          };
        }, PSEUDO: function PSEUDO(e, s) {
          var a = ge.pseudos[e] || ge.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e),
              o;return a[S] ? a(s) : 1 < a.length ? (o = [e, e, '', s], ge.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
            for (var n = a(e, s), o = n.length, r; o--;) {
              r = V.call(e, n[o]), e[r] = !(t[r] = n[o]);
            }
          }) : function (e) {
            return a(e, 0, o);
          }) : a;
        } }, pseudos: { not: n(function (e) {
          var t = [],
              s = [],
              a = he(e.replace(X, '$1'));return a[S] ? n(function (e, t, s, n) {
            for (var o = a(e, null, n, []), r = e.length, l; r--;) {
              (l = o[r]) && (e[r] = !(t[r] = l));
            }
          }) : function (e, n, o) {
            return t[0] = e, a(t, null, o, s), !s.pop();
          };
        }), has: n(function (e) {
          return function (s) {
            return 0 < t(e, s).length;
          };
        }), contains: n(function (e) {
          return function (t) {
            return -1 < (t.textContent || t.innerText || me(t)).indexOf(e);
          };
        }), lang: n(function (e) {
          return ee.test(e || '') || t.error('unsupported lang: ' + e), e = e.replace(ie, de).toLowerCase(), function (t) {
            var s;do {
              if (s = Ie ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')) return s = s.toLowerCase(), s === e || 0 === s.indexOf(e + '-');
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var s = e.location && e.location.hash;return s && s.slice(1) === t.id;
        }, root: function root(e) {
          return e === ve;
        }, focus: function focus(e) {
          return e === xe.activeElement && (!xe.hasFocus || xe.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: function enabled(e) {
          return !1 === e.disabled;
        }, disabled: function disabled(e) {
          return !0 === e.disabled;
        }, checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if ('@' < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !ge.pseudos.empty(e);
        }, header: function header(e) {
          return re.test(e.nodeName);
        }, input: function input(e) {
          return oe.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return 'input' === t && 'button' === e.type || 'button' === t;
        }, text: function text(e) {
          var t;return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || t.toLowerCase() === e.type);
        }, first: c(function () {
          return [0];
        }), last: c(function (e, t) {
          return [t - 1];
        }), eq: c(function (e, t, s) {
          return [0 > s ? s + t : s];
        }), even: c(function (e, t) {
          for (var s = 0; s < t; s += 2) {
            e.push(s);
          }return e;
        }), odd: c(function (e, t) {
          for (var s = 1; s < t; s += 2) {
            e.push(s);
          }return e;
        }), lt: c(function (e, t, s) {
          for (var n = 0 > s ? s + t : s; 0 <= --n;) {
            e.push(n);
          }return e;
        }), gt: c(function (e, t, s) {
          for (var n = 0 > s ? s + t : s; ++n < t;) {
            e.push(n);
          }return e;
        }) } }, ge.pseudos.nth = ge.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      ge.pseudos[ce] = l(ce);
    }for (ce in { submit: !0, reset: !0 }) {
      ge.pseudos[ce] = d(ce);
    }u.prototype = ge.filters = ge.pseudos, ge.setFilters = new u(), he = t.compile = function (e, t) {
      var s = [],
          n = [],
          a = N[e + ' '],
          o;if (!a) {
        for (t || (t = p(e)), o = t.length; o--;) {
          a = b(t[o]), a[S] ? s.push(a) : n.push(a);
        }a = N(e, x(n, s));
      }return a;
    }, ue.sortStable = S.split('').sort(P).join('') === S, ue.detectDuplicates = E, be(), ue.sortDetached = a(function (e) {
      return 1 & e.compareDocumentPosition(xe.createElement('div'));
    }), a(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
    }) || o('type|href|height|width', function (e, t, s) {
      if (!s) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
    }), ue.attributes && a(function (e) {
      return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
    }) || o('value', function (e, t, s) {
      if (!s && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
    }), a(function (e) {
      return null == e.getAttribute('disabled');
    }) || o(B, function (e, t, s) {
      var n;if (!s) return (n = e.getAttributeNode(t)) && n.specified ? n.value : !0 === e[t] ? t.toLowerCase() : null;
    }), ae.find = t, ae.expr = t.selectors, ae.expr[':'] = ae.expr.pseudos, ae.unique = t.uniqueSort, ae.text = t.getText, ae.isXMLDoc = t.isXML, ae.contains = t.contains;
  }(e);var he = {};ae.Callbacks = function (e) {
    e = 'string' === typeof e ? he[e] || s(e) : ae.extend({}, e);var t = [],
        n = !e.once && [],
        a = function s(a) {
      for (r = e.memory && a, l = !0, u = d || 0, d = 0, c = t.length, i = !0; t && u < c; u++) {
        if (!1 === t[u].apply(a[0], a[1]) && e.stopOnFalse) {
          r = !1;break;
        }
      }i = !1, t && (n ? n.length && s(n.shift()) : r ? t = [] : o.disable());
    },
        o = { add: function add() {
        if (t) {
          var s = t.length;(function s(n) {
            ae.each(n, function (n, a) {
              var r = ae.type(a);'function' === r ? (!e.unique || !o.has(a)) && t.push(a) : a && a.length && 'string' !== r && s(a);
            });
          })(arguments), i ? c = t.length : r && (d = s, a(r));
        }return this;
      }, remove: function remove() {
        return t && ae.each(arguments, function (e, s) {
          for (var n; -1 < (n = ae.inArray(s, t, n));) {
            t.splice(n, 1), i && (n <= c && c--, n <= u && u--);
          }
        }), this;
      }, has: function has(e) {
        return e ? -1 < ae.inArray(e, t) : !!(t && t.length);
      }, empty: function empty() {
        return t = [], c = 0, this;
      }, disable: function disable() {
        return t = n = r = void 0, this;
      }, disabled: function disabled() {
        return !t;
      }, lock: function lock() {
        return n = void 0, r || o.disable(), this;
      }, locked: function locked() {
        return !n;
      }, fireWith: function fireWith(e, s) {
        return t && (!l || n) && (s = s || [], s = [e, s.slice ? s.slice() : s], i ? n.push(s) : a(s)), this;
      }, fire: function fire() {
        return o.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!l;
      } },
        r,
        l,
        i,
        d,
        c,
        u;return o;
  }, ae.extend({ Deferred: function Deferred(e) {
      var t = [['resolve', 'done', ae.Callbacks('once memory'), 'resolved'], ['reject', 'fail', ae.Callbacks('once memory'), 'rejected'], ['notify', 'progress', ae.Callbacks('memory')]],
          s = 'pending',
          n = { state: function state() {
          return s;
        }, always: function always() {
          return a.done(arguments).fail(arguments), this;
        }, then: function then() {
          var e = arguments;return ae.Deferred(function (s) {
            ae.each(t, function (t, o) {
              var r = o[0],
                  l = ae.isFunction(e[t]) && e[t];a[o[1]](function () {
                var e = l && l.apply(this, arguments);e && ae.isFunction(e.promise) ? e.promise().done(s.resolve).fail(s.reject).progress(s.notify) : s[r + 'With'](this === n ? s.promise() : this, l ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, promise: function promise(e) {
          return null == e ? n : ae.extend(e, n);
        } },
          a = {};return n.pipe = n.then, ae.each(t, function (e, o) {
        var r = o[2],
            l = o[3];n[o[1]] = r.add, l && r.add(function () {
          s = l;
        }, t[1 ^ e][2].disable, t[2][2].lock), a[o[0]] = function () {
          return a[o[0] + 'With'](this === a ? n : this, arguments), this;
        }, a[o[0] + 'With'] = r.fireWith;
      }), n.promise(a), e && e.call(a, a), a;
    }, when: function when(e) {
      var t = 0,
          s = Z.call(arguments),
          n = s.length,
          a = 1 !== n || e && ae.isFunction(e.promise) ? n : 0,
          o = 1 === a ? e : ae.Deferred(),
          r = function r(e, t, s) {
        return function (n) {
          t[e] = this, s[e] = 1 < arguments.length ? Z.call(arguments) : n, s === l ? o.notifyWith(t, s) : ! --a && o.resolveWith(t, s);
        };
      },
          l,
          i,
          d;if (1 < n) for (l = Array(n), i = Array(n), d = Array(n); t < n; t++) {
        s[t] && ae.isFunction(s[t].promise) ? s[t].promise().done(r(t, d, s)).fail(o.reject).progress(r(t, i, l)) : --a;
      }return a || o.resolveWith(d, s), o.promise();
    } }), ae.support = function (t) {
    var s = q.createElement('input'),
        n = q.createDocumentFragment(),
        a = q.createElement('div'),
        o = q.createElement('select'),
        r = o.appendChild(q.createElement('option'));return s.type ? (s.type = 'checkbox', t.checkOn = '' !== s.value, t.optSelected = r.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !r.disabled, s = q.createElement('input'), s.value = 't', s.type = 'radio', t.radioValue = 't' === s.value, s.setAttribute('checked', 't'), s.setAttribute('name', 't'), n.appendChild(s), t.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = 'onfocusin' in e, a.style.backgroundClip = 'content-box', a.cloneNode(!0).style.backgroundClip = '', t.clearCloneStyle = 'content-box' === a.style.backgroundClip, ae(function () {
      var s = q.getElementsByTagName('body')[0],
          n,
          o;s && (n = q.createElement('div'), n.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px', s.appendChild(n).appendChild(a), a.innerHTML = '', a.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%', ae.swap(s, null == s.style.zoom ? {} : { zoom: 1 }, function () {
        t.boxSizing = 4 === a.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = '1%' !== (e.getComputedStyle(a, null) || {}).top, t.boxSizingReliable = '4px' === (e.getComputedStyle(a, null) || { width: '4px' }).width, o = a.appendChild(q.createElement('div')), o.style.cssText = a.style.cssText = 'padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box', o.style.marginRight = o.style.width = '0', a.style.width = '1px', t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), s.removeChild(n));
    }), t) : t;
  }({});var ye = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      fe = /([A-Z])/g,
      be,
      xe;n.uid = 1, n.accepts = function (e) {
    return !e.nodeType || 1 === e.nodeType || 9 === e.nodeType;
  }, n.prototype = { key: function key(e) {
      if (!n.accepts(e)) return 0;var t = {},
          s = e[this.expando];if (!s) {
        s = n.uid++;try {
          t[this.expando] = { value: s }, Object.defineProperties(e, t);
        } catch (n) {
          t[this.expando] = s, ae.extend(e, t);
        }
      }return this.cache[s] || (this.cache[s] = {}), s;
    }, set: function set(e, t, s) {
      var n = this.key(e),
          a = this.cache[n],
          o;if ('string' === typeof t) a[t] = s;else if (ae.isEmptyObject(a)) ae.extend(this.cache[n], t);else for (o in t) {
        a[o] = t[o];
      }return a;
    }, get: function get(e, t) {
      var s = this.cache[this.key(e)];return t === void 0 ? s : s[t];
    }, access: function access(e, t, s) {
      var n;return void 0 === t || t && 'string' === typeof t && void 0 === s ? (n = this.get(e, t), void 0 === n ? this.get(e, ae.camelCase(t)) : n) : (this.set(e, t, s), void 0 === s ? t : s);
    }, remove: function remove(e, t) {
      var s = this.key(e),
          n = this.cache[s],
          a,
          o,
          r;if (t === void 0) this.cache[s] = {};else for (ae.isArray(t) ? o = t.concat(t.map(ae.camelCase)) : (r = ae.camelCase(t), (t in n) ? o = [t, r] : (o = r, o = (o in n) ? [o] : o.match(re) || [])), a = o.length; a--;) {
        delete n[o[a]];
      }
    }, hasData: function hasData(e) {
      return !ae.isEmptyObject(this.cache[e[this.expando]] || {});
    }, discard: function discard(e) {
      e[this.expando] && delete this.cache[e[this.expando]];
    } }, be = new n(), xe = new n(), ae.extend({ acceptData: n.accepts, hasData: function hasData(e) {
      return be.hasData(e) || xe.hasData(e);
    }, data: function data(e, t, s) {
      return be.access(e, t, s);
    }, removeData: function removeData(e, t) {
      be.remove(e, t);
    }, _data: function _data(e, t, s) {
      return xe.access(e, t, s);
    }, _removeData: function _removeData(e, t) {
      xe.remove(e, t);
    } }), ae.fn.extend({ data: function data(e, t) {
      var s = this[0],
          n = 0,
          o = null,
          r,
          l;if (e === void 0) {
        if (this.length && (o = be.get(s), 1 === s.nodeType && !xe.get(s, 'hasDataAttrs'))) {
          for (r = s.attributes; n < r.length; n++) {
            l = r[n].name, 0 === l.indexOf('data-') && (l = ae.camelCase(l.slice(5)), a(s, l, o[l]));
          }xe.set(s, 'hasDataAttrs', !0);
        }return o;
      }return 'object' === ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) ? this.each(function () {
        be.set(this, e);
      }) : ae.access(this, function (t) {
        var n = ae.camelCase(e),
            o;return s && void 0 === t ? (o = be.get(s, e), void 0 !== o) ? o : (o = be.get(s, n), void 0 !== o) ? o : (o = a(s, n, void 0), void 0 === o ? void 0 : o) : void this.each(function () {
          var s = be.get(this, n);be.set(this, n, t), -1 !== e.indexOf('-') && void 0 !== s && be.set(this, e, t);
        });
      }, null, t, 1 < arguments.length, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        be.remove(this, e);
      });
    } }), ae.extend({ queue: function queue(e, t, s) {
      var n;if (e) return t = (t || 'fx') + 'queue', n = xe.get(e, t), s && (!n || ae.isArray(s) ? n = xe.access(e, t, ae.makeArray(s)) : n.push(s)), n || [];
    }, dequeue: function dequeue(e, t) {
      t = t || 'fx';var s = ae.queue(e, t),
          n = s.length,
          a = s.shift(),
          o = ae._queueHooks(e, t);'inprogress' === a && (a = s.shift(), n--), a && ('fx' === t && s.unshift('inprogress'), delete o.stop, a.call(e, function () {
        ae.dequeue(e, t);
      }, o)), !n && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var s = t + 'queueHooks';return xe.get(e, s) || xe.access(e, s, { empty: ae.Callbacks('once memory').add(function () {
          xe.remove(e, [t + 'queue', s]);
        }) });
    } }), ae.fn.extend({ queue: function queue(e, t) {
      var s = 2;return 'string' !== typeof e && (t = e, e = 'fx', s--), arguments.length < s ? ae.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var s = ae.queue(this, e, t);ae._queueHooks(this, e), 'fx' === e && 'inprogress' !== s[0] && ae.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        ae.dequeue(this, e);
      });
    }, delay: function delay(e, t) {
      return e = ae.fx ? ae.fx.speeds[e] || e : e, t = t || 'fx', this.queue(t, function (t, s) {
        var n = setTimeout(t, e);s.stop = function () {
          clearTimeout(n);
        };
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || 'fx', []);
    }, promise: function promise(e, t) {
      var s = 1,
          n = ae.Deferred(),
          a = this,
          o = this.length,
          r = function r() {
        --s || n.resolveWith(a, [a]);
      },
          l;for ('string' !== typeof e && (t = e, e = void 0), e = e || 'fx'; o--;) {
        l = xe.get(a[o], e + 'queueHooks'), l && l.empty && (s++, l.empty.add(r));
      }return r(), n.promise(t);
    } });var ve = /[\t\r\n\f]/g,
      Ie = /\r/g,
      Se = /^(?:input|select|textarea|button)$/i,
      ke,
      Ce;ae.fn.extend({ attr: function attr(e, t) {
      return ae.access(this, ae.attr, e, t, 1 < arguments.length);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        ae.removeAttr(this, e);
      });
    }, prop: function prop(e, t) {
      return ae.access(this, ae.prop, e, t, 1 < arguments.length);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[ae.propFix[e] || e];
      });
    }, addClass: function addClass(e) {
      var t = 0,
          s = this.length,
          n,
          a,
          o,
          r,
          l;if (ae.isFunction(e)) return this.each(function (t) {
        ae(this).addClass(e.call(this, t, this.className));
      });if ('string' === typeof e && e) for (n = (e || '').match(re) || []; t < s; t++) {
        if (a = this[t], o = 1 === a.nodeType && (a.className ? (' ' + a.className + ' ').replace(ve, ' ') : ' '), o) {
          for (l = 0; r = n[l++];) {
            0 > o.indexOf(' ' + r + ' ') && (o += r + ' ');
          }a.className = ae.trim(o);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t = 0,
          s = this.length,
          n = 0 === arguments.length || 'string' === typeof e && e,
          a,
          o,
          r,
          l,
          i;if (ae.isFunction(e)) return this.each(function (t) {
        ae(this).removeClass(e.call(this, t, this.className));
      });if (n) for (a = (e || '').match(re) || []; t < s; t++) {
        if (o = this[t], r = 1 === o.nodeType && (o.className ? (' ' + o.className + ' ').replace(ve, ' ') : ''), r) {
          for (i = 0; l = a[i++];) {
            for (; 0 <= r.indexOf(' ' + l + ' ');) {
              r = r.replace(' ' + l + ' ', ' ');
            }
          }o.className = e ? ae.trim(r) : '';
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var s = 'undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e);return 'boolean' === typeof t && 'string' === s ? t ? this.addClass(e) : this.removeClass(e) : ae.isFunction(e) ? this.each(function (s) {
        ae(this).toggleClass(e.call(this, s, this.className, t), t);
      }) : this.each(function () {
        if ('string' === s) for (var t = 0, n = ae(this), a = e.match(re) || [], o; o = a[t++];) {
          n.hasClass(o) ? n.removeClass(o) : n.addClass(o);
        } else (s === B || 'boolean' === s) && (this.className && xe.set(this, '__className__', this.className), this.className = this.className || !1 === e ? '' : xe.get(this, '__className__') || '');
      });
    }, hasClass: function hasClass(e) {
      for (var t = 0, s = this.length; t < s; t++) {
        if (1 === this[t].nodeType && 0 <= (' ' + this[t].className + ' ').replace(ve, ' ').indexOf(' ' + e + ' ')) return !0;
      }return !1;
    }, val: function val(e) {
      var t = this[0],
          s,
          n,
          a;return arguments.length ? (a = ae.isFunction(e), this.each(function (t) {
        var n;1 !== this.nodeType || (n = a ? e.call(this, t, ae(this).val()) : e, null == n ? n = '' : 'number' === typeof n ? n += '' : ae.isArray(n) && (n = ae.map(n, function (e) {
          return null == e ? '' : e + '';
        })), s = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], (!s || !('set' in s) || void 0 === s.set(this, n, 'value')) && (this.value = n));
      })) : t ? (s = ae.valHooks[t.type] || ae.valHooks[t.nodeName.toLowerCase()], s && 'get' in s && void 0 !== (n = s.get(t, 'value'))) ? n : (n = t.value, 'string' === typeof n ? n.replace(Ie, '') : null == n ? '' : n) : void 0;
    } }), ae.extend({ valHooks: { option: { get: function get(e) {
          var t = e.attributes.value;return !t || t.specified ? e.value : e.text;
        } }, select: { get: function get(e) {
          for (var t = e.options, s = e.selectedIndex, n = 'select-one' === e.type || 0 > s, a = n ? null : [], o = n ? s + 1 : t.length, r = 0 > s ? o : n ? s : 0, l, i; r < o; r++) {
            if (i = t[r], (i.selected || r === s) && (ae.support.optDisabled ? !i.disabled : null === i.getAttribute('disabled')) && (!i.parentNode.disabled || !ae.nodeName(i.parentNode, 'optgroup'))) {
              if (l = ae(i).val(), n) return l;a.push(l);
            }
          }return a;
        }, set: function set(e, t) {
          for (var s = e.options, n = ae.makeArray(t), a = s.length, o, r; a--;) {
            r = s[a], (r.selected = 0 <= ae.inArray(ae(r).val(), n)) && (o = !0);
          }return o || (e.selectedIndex = -1), n;
        } } }, attr: function attr(e, t, s) {
      var n = e.nodeType,
          a,
          o;if (e && 3 !== n && 8 !== n && 2 !== n) {
        if (babelHelpers['typeof'](e.getAttribute) === B) return ae.prop(e, t, s);if (1 === n && ae.isXMLDoc(e) || (t = t.toLowerCase(), a = ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? Ce : ke)), void 0 === s) return a && 'get' in a && null !== (o = a.get(e, t)) ? o : (o = ae.find.attr(e, t), null == o ? void 0 : o);if (null === s) ae.removeAttr(e, t);else return a && 'set' in a && void 0 !== (o = a.set(e, s, t)) ? o : (e.setAttribute(t, s + ''), s);
      }
    }, removeAttr: function removeAttr(e, t) {
      var s = 0,
          n = t && t.match(re),
          a,
          o;if (n && 1 === e.nodeType) for (; a = n[s++];) {
        o = ae.propFix[a] || a, ae.expr.match.bool.test(a) && (e[o] = !1), e.removeAttribute(a);
      }
    }, attrHooks: { type: { set: function set(e, t) {
          if (!ae.support.radioValue && 'radio' === t && ae.nodeName(e, 'input')) {
            var s = e.value;return e.setAttribute('type', t), s && (e.value = s), t;
          }
        } } }, propFix: { "for": 'htmlFor', "class": 'className' }, prop: function prop(e, t, s) {
      var n = e.nodeType,
          a,
          o,
          r;if (e && 3 !== n && 8 !== n && 2 !== n) return r = 1 !== n || !ae.isXMLDoc(e), r && (t = ae.propFix[t] || t, o = ae.propHooks[t]), void 0 === s ? o && 'get' in o && null !== (a = o.get(e, t)) ? a : e[t] : o && 'set' in o && void 0 !== (a = o.set(e, s, t)) ? a : e[t] = s;
    }, propHooks: { tabIndex: { get: function get(e) {
          return e.hasAttribute('tabindex') || Se.test(e.nodeName) || e.href ? e.tabIndex : -1;
        } } } }), Ce = { set: function set(e, t, s) {
      return !1 === t ? ae.removeAttr(e, s) : e.setAttribute(s, s), s;
    } }, ae.each(ae.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var s = ae.expr.attrHandle[t] || ae.find.attr;ae.expr.attrHandle[t] = function (e, t, n) {
      var a = ae.expr.attrHandle[t],
          o = n ? void 0 : (ae.expr.attrHandle[t] = void 0) == s(e, t, n) ? null : t.toLowerCase();return ae.expr.attrHandle[t] = a, o;
    };
  }), ae.support.optSelected || (ae.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    } }), ae.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
    ae.propFix[this.toLowerCase()] = this;
  }), ae.each(['radio', 'checkbox'], function () {
    ae.valHooks[this] = { set: function set(e, t) {
        if (ae.isArray(t)) return e.checked = 0 <= ae.inArray(ae(e).val(), t);
      } }, ae.support.checkOn || (ae.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value;
    });
  });var Me = /^key/,
      Te = /^(?:mouse|contextmenu)|click/,
      we = /^(?:focusinfocus|focusoutblur)$/,
      Ne = /^([^.]*)(?:\.(.+)|)$/;ae.event = { global: {}, add: function add(e, s, n, a, o) {
      var r = xe.get(e),
          l,
          i,
          d,
          c,
          u,
          t,
          p,
          g,
          m,
          h,
          y;if (r) {
        for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ae.guid++), (c = r.events) || (c = r.events = {}), (i = r.handle) || (i = r.handle = function (t) {
          return ('undefined' === typeof ae ? 'undefined' : babelHelpers['typeof'](ae)) === B || t && ae.event.triggered === t.type ? void 0 : ae.event.dispatch.apply(i.elem, arguments);
        }, i.elem = e), s = (s || '').match(re) || [''], u = s.length; u--;) {
          (d = Ne.exec(s[u]) || [], m = y = d[1], h = (d[2] || '').split('.').sort(), !!m) && (p = ae.event.special[m] || {}, m = (o ? p.delegateType : p.bindType) || m, p = ae.event.special[m] || {}, t = ae.extend({ type: m, origType: y, data: a, handler: n, guid: n.guid, selector: o, needsContext: o && ae.expr.match.needsContext.test(o), namespace: h.join('.') }, l), (g = c[m]) || (g = c[m] = [], g.delegateCount = 0, (!p.setup || !1 === p.setup.call(e, a, h, i)) && e.addEventListener && e.addEventListener(m, i, !1)), p.add && (p.add.call(e, t), !t.handler.guid && (t.handler.guid = n.guid)), o ? g.splice(g.delegateCount++, 0, t) : g.push(t), ae.event.global[m] = !0);
        }e = null;
      }
    }, remove: function remove(e, s, n, a, o) {
      var r = xe.hasData(e) && xe.get(e),
          l,
          i,
          d,
          c,
          u,
          t,
          p,
          g,
          m,
          h,
          y;if (r && (c = r.events)) {
        for (s = (s || '').match(re) || [''], u = s.length; u--;) {
          if (d = Ne.exec(s[u]) || [], m = y = d[1], h = (d[2] || '').split('.').sort(), !m) {
            for (m in c) {
              ae.event.remove(e, m + s[u], n, a, !0);
            }continue;
          }for (p = ae.event.special[m] || {}, m = (a ? p.delegateType : p.bindType) || m, g = c[m] || [], d = d[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), i = l = g.length; l--;) {
            t = g[l], (o || y === t.origType) && (!n || n.guid === t.guid) && (!d || d.test(t.namespace)) && (!a || a === t.selector || '**' === a && t.selector) && (g.splice(l, 1), t.selector && g.delegateCount--, p.remove && p.remove.call(e, t));
          }i && !g.length && ((!p.teardown || !1 === p.teardown.call(e, h, r.handle)) && ae.removeEvent(e, m, r.handle), delete c[m]);
        }ae.isEmptyObject(c) && (delete r.handle, xe.remove(e, 'events'));
      }
    }, trigger: function trigger(t, s, n, a) {
      var o = [n || q],
          r = se.call(t, 'type') ? t.type : t,
          l = se.call(t, 'namespace') ? t.namespace.split('.') : [],
          d,
          i,
          c,
          u,
          p,
          g,
          m;if ((i = c = n = n || q, 3 !== n.nodeType && 8 !== n.nodeType) && !we.test(r + ae.event.triggered) && (0 <= r.indexOf('.') && (l = r.split('.'), r = l.shift(), l.sort()), p = 0 > r.indexOf(':') && 'on' + r, t = t[ae.expando] ? t : new ae.Event(r, 'object' === ('undefined' === typeof t ? 'undefined' : babelHelpers['typeof'](t)) && t), t.isTrigger = a ? 2 : 3, t.namespace = l.join('.'), t.namespace_re = t.namespace ? new RegExp('(^|\\.)' + l.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = void 0, t.target || (t.target = n), s = null == s ? [t] : ae.makeArray(s, [t]), m = ae.event.special[r] || {}, a || !m.trigger || !1 !== m.trigger.apply(n, s))) {
        if (!a && !m.noBubble && !ae.isWindow(n)) {
          for (u = m.delegateType || r, we.test(u + r) || (i = i.parentNode); i; i = i.parentNode) {
            o.push(i), c = i;
          }c === (n.ownerDocument || q) && o.push(c.defaultView || c.parentWindow || e);
        }for (d = 0; (i = o[d++]) && !t.isPropagationStopped();) {
          t.type = 1 < d ? u : m.bindType || r, g = (xe.get(i, 'events') || {})[t.type] && xe.get(i, 'handle'), g && g.apply(i, s), g = p && i[p], g && ae.acceptData(i) && g.apply && !1 === g.apply(i, s) && t.preventDefault();
        }return t.type = r, a || t.isDefaultPrevented() || m._default && !1 !== m._default.apply(o.pop(), s) || !ae.acceptData(n) || !p || !ae.isFunction(n[r]) || ae.isWindow(n) || (c = n[p], c && (n[p] = null), ae.event.triggered = r, n[r](), ae.event.triggered = void 0, c && (n[p] = c)), t.result;
      }
    }, dispatch: function dispatch(e) {
      e = ae.event.fix(e);var t = [],
          s = Z.call(arguments),
          n = (xe.get(this, 'events') || {})[e.type] || [],
          a = ae.event.special[e.type] || {},
          o,
          r,
          l,
          i,
          d;if (s[0] = e, e.delegateTarget = this, !(a.preDispatch && !1 === a.preDispatch.call(this, e))) {
        for (t = ae.event.handlers.call(this, e, n), o = 0; (i = t[o++]) && !e.isPropagationStopped();) {
          for (e.currentTarget = i.elem, r = 0; (d = i.handlers[r++]) && !e.isImmediatePropagationStopped();) {
            (!e.namespace_re || e.namespace_re.test(d.namespace)) && (e.handleObj = d, e.data = d.data, l = ((ae.event.special[d.origType] || {}).handle || d.handler).apply(i.elem, s), void 0 !== l && !1 === (e.result = l) && (e.preventDefault(), e.stopPropagation()));
          }
        }return a.postDispatch && a.postDispatch.call(this, e), e.result;
      }
    }, handlers: function handlers(e, t) {
      var s = [],
          n = t.delegateCount,
          a = e.target,
          o,
          r,
          l,
          i;if (n && a.nodeType && (!e.button || 'click' !== e.type)) for (; a !== this; a = a.parentNode || this) {
        if (!0 !== a.disabled || 'click' !== e.type) {
          for (r = [], o = 0; o < n; o++) {
            i = t[o], l = i.selector + ' ', void 0 === r[l] && (r[l] = i.needsContext ? 0 <= ae(l, this).index(a) : ae.find(l, this, null, [a]).length), r[l] && r.push(i);
          }r.length && s.push({ elem: a, handlers: r });
        }
      }return n < t.length && s.push({ elem: this, handlers: t.slice(n) }), s;
    }, props: ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'relatedTarget', 'shiftKey', 'target', 'timeStamp', 'view', 'which'], fixHooks: {}, keyHooks: { props: ['char', 'charCode', 'key', 'keyCode'], filter: function filter(e, t) {
        return null == e.which && (e.which = null == t.charCode ? t.keyCode : t.charCode), e;
      } }, mouseHooks: { props: ['button', 'buttons', 'clientX', 'clientY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY', 'toElement'], filter: function filter(e, t) {
        var s = t.button,
            n,
            a,
            o;return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || q, a = n.documentElement, o = n.body, e.pageX = t.clientX + (a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      } }, fix: function fix(e) {
      if (e[ae.expando]) return e;var t = e.type,
          s = e,
          n = this.fixHooks[t],
          a,
          o,
          r;for (n || (this.fixHooks[t] = n = Te.test(t) ? this.mouseHooks : Me.test(t) ? this.keyHooks : {}), r = n.props ? this.props.concat(n.props) : this.props, e = new ae.Event(s), a = r.length; a--;) {
        o = r[a], e[o] = s[o];
      }return e.target || (e.target = q), 3 === e.target.nodeType && (e.target = e.target.parentNode), n.filter ? n.filter(e, s) : e;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== l() && this.focus) return this.focus(), !1;
        }, delegateType: 'focusin' }, blur: { trigger: function trigger() {
          if (this === l() && this.blur) return this.blur(), !1;
        }, delegateType: 'focusout' }, click: { trigger: function trigger() {
          if ('checkbox' === this.type && this.click && ae.nodeName(this, 'input')) return this.click(), !1;
        }, _default: function _default(e) {
          return ae.nodeName(e.target, 'a');
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          e.result !== void 0 && (e.originalEvent.returnValue = e.result);
        } } }, simulate: function simulate(t, s, n, a) {
      var o = ae.extend(new ae.Event(), n, { type: t, isSimulated: !0, originalEvent: {} });a ? ae.event.trigger(o, null, s) : ae.event.dispatch.call(s, o), o.isDefaultPrevented() && n.preventDefault();
    } }, ae.removeEvent = function (e, t, s) {
    e.removeEventListener && e.removeEventListener(t, s, !1);
  }, ae.Event = function (e, t) {
    return this instanceof ae.Event ? void (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? o : r) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), this[ae.expando] = !0) : new ae.Event(e, t);
  }, ae.Event.prototype = { isDefaultPrevented: r, isPropagationStopped: r, isImmediatePropagationStopped: r, preventDefault: function preventDefault() {
      var t = this.originalEvent;this.isDefaultPrevented = o, t && t.preventDefault && t.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var t = this.originalEvent;this.isPropagationStopped = o, t && t.stopPropagation && t.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = o, this.stopPropagation();
    } }, ae.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function (e, t) {
    ae.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var s = this,
            n = e.relatedTarget,
            a = e.handleObj,
            o;return n && (n === s || ae.contains(s, n)) || (e.type = a.origType, o = a.handler.apply(this, arguments), e.type = t), o;
      } };
  }), ae.support.focusinBubbles || ae.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
    var s = 0,
        n = function n(e) {
      ae.event.simulate(t, e.target, ae.event.fix(e), !0);
    };ae.event.special[t] = { setup: function setup() {
        0 === s++ && q.addEventListener(e, n, !0);
      }, teardown: function teardown() {
        0 === --s && q.removeEventListener(e, n, !0);
      } };
  }), ae.fn.extend({ on: function on(e, t, s, n, a) {
      var o, l;if ('object' === ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e))) {
        for (l in 'string' !== typeof t && (s = s || t, t = void 0), e) {
          this.on(l, t, s, e[l], a);
        }return this;
      }if (null == s && null == n ? (n = t, s = t = void 0) : null == n && ('string' === typeof t ? (n = s, s = void 0) : (n = s, s = t, t = void 0)), !1 === n) n = r;else if (!n) return this;return 1 === a && (o = n, n = function n(e) {
        return ae().off(e), o.apply(this, arguments);
      }, n.guid = o.guid || (o.guid = ae.guid++)), this.each(function () {
        ae.event.add(this, e, n, s, t);
      });
    }, one: function one(e, t, s, n) {
      return this.on(e, t, s, n, 1);
    }, off: function off(e, t, s) {
      var n, a;if (e && e.preventDefault && e.handleObj) return n = e.handleObj, ae(e.delegateTarget).off(n.namespace ? n.origType + '.' + n.namespace : n.origType, n.selector, n.handler), this;if ('object' === ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e))) {
        for (a in e) {
          this.off(a, t, e[a]);
        }return this;
      }return (!1 === t || 'function' === typeof t) && (s = t, t = void 0), !1 === s && (s = r), this.each(function () {
        ae.event.remove(this, e, s, t);
      });
    }, trigger: function trigger(e, t) {
      return this.each(function () {
        ae.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var s = this[0];if (s) return ae.event.trigger(e, t, s, !0);
    } });var Ee = /^.[^:#\[\.,]*$/,
      Pe = /^(?:parents|prev(?:Until|All))/,
      _e = ae.expr.match.needsContext,
      Le = { children: !0, contents: !0, next: !0, prev: !0 };ae.fn.extend({ find: function find(e) {
      var t = [],
          s = this,
          n = s.length,
          a;if ('string' !== typeof e) return this.pushStack(ae(e).filter(function () {
        for (a = 0; a < n; a++) {
          if (ae.contains(s[a], this)) return !0;
        }
      }));for (a = 0; a < n; a++) {
        ae.find(e, s[a], t);
      }return t = this.pushStack(1 < n ? ae.unique(t) : t), t.selector = this.selector ? this.selector + ' ' + e : e, t;
    }, has: function has(e) {
      var t = ae(e, this),
          s = t.length;return this.filter(function () {
        for (var e = 0; e < s; e++) {
          if (ae.contains(this, t[e])) return !0;
        }
      });
    }, not: function not(e) {
      return this.pushStack(d(this, e || [], !0));
    }, filter: function filter(e) {
      return this.pushStack(d(this, e || [], !1));
    }, is: function is(e) {
      return !!d(this, 'string' === typeof e && _e.test(e) ? ae(e) : e || [], !1).length;
    }, closest: function closest(e, t) {
      for (var s = 0, n = this.length, a = [], o = _e.test(e) || 'string' !== typeof e ? ae(e, t || this.context) : 0, r; s < n; s++) {
        for (r = this[s]; r && r !== t; r = r.parentNode) {
          if (11 > r.nodeType && (o ? -1 < o.index(r) : 1 === r.nodeType && ae.find.matchesSelector(r, e))) {
            r = a.push(r);break;
          }
        }
      }return this.pushStack(1 < a.length ? ae.unique(a) : a);
    }, index: function index(e) {
      return e ? 'string' === typeof e ? ee.call(ae(e), this[0]) : ee.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      var s = 'string' === typeof e ? ae(e, t) : ae.makeArray(e && e.nodeType ? [e] : e),
          n = ae.merge(this.get(), s);return this.pushStack(ae.unique(n));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), ae.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return ae.dir(e, 'parentNode');
    }, parentsUntil: function parentsUntil(e, t, s) {
      return ae.dir(e, 'parentNode', s);
    }, next: function next(e) {
      return i(e, 'nextSibling');
    }, prev: function prev(e) {
      return i(e, 'previousSibling');
    }, nextAll: function nextAll(e) {
      return ae.dir(e, 'nextSibling');
    }, prevAll: function prevAll(e) {
      return ae.dir(e, 'previousSibling');
    }, nextUntil: function nextUntil(e, t, s) {
      return ae.dir(e, 'nextSibling', s);
    }, prevUntil: function prevUntil(e, t, s) {
      return ae.dir(e, 'previousSibling', s);
    }, siblings: function siblings(e) {
      return ae.sibling((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return ae.sibling(e.firstChild);
    }, contents: function contents(e) {
      return e.contentDocument || ae.merge([], e.childNodes);
    } }, function (e, t) {
    ae.fn[e] = function (s, n) {
      var a = ae.map(this, t, s);return 'Until' !== e.slice(-5) && (n = s), n && 'string' === typeof n && (a = ae.filter(n, a)), 1 < this.length && (!Le[e] && ae.unique(a), Pe.test(e) && a.reverse()), this.pushStack(a);
    };
  }), ae.extend({ filter: function filter(e, t, s) {
      var n = t[0];return s && (e = ':not(' + e + ')'), 1 === t.length && 1 === n.nodeType ? ae.find.matchesSelector(n, e) ? [n] : [] : ae.find.matches(e, ae.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, dir: function dir(e, t, s) {
      for (var n = []; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (void 0 !== s && ae(e).is(s)) break;n.push(e);
        }
      }return n;
    }, sibling: function sibling(e, t) {
      for (var s = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && s.push(e);
      }return s;
    } });var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Ue = /<([\w:]+)/,
      Re = /<|&#?\w+;/,
      je = /<(?:script|style|link)/i,
      Oe = /^(?:checkbox|radio)$/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ve = /^$|\/(?:java|ecma)script/i,
      Fe = /^true\/(.*)/,
      Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      He = { option: [1, '<select multiple=\'multiple\'>', '</select>'], thead: [1, '<table>', '</table>'], col: [2, '<table><colgroup>', '</colgroup></table>'], tr: [2, '<table><tbody>', '</tbody></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: [0, '', ''] };He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td, ae.fn.extend({ text: function text(e) {
      return ae.access(this, function (e) {
        return e === void 0 ? ae.text(this) : this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(e));
      }, null, e, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = c(this, e);t.appendChild(e);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = c(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, remove: function remove(e, t) {
      for (var s = e ? ae.filter(e, this) : this, n = 0, a; null != (a = s[n]); n++) {
        t || 1 !== a.nodeType || ae.cleanData(h(a)), a.parentNode && (t && ae.contains(a.ownerDocument, a) && g(h(a, 'script')), a.parentNode.removeChild(a));
      }return this;
    }, empty: function empty() {
      for (var e = 0, t; null != (t = this[e]); e++) {
        1 === t.nodeType && (ae.cleanData(h(t, !1)), t.textContent = '');
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ae.clone(this, e, t);
      });
    }, html: function html(e) {
      return ae.access(this, function (e) {
        var t = this[0] || {},
            s = 0,
            n = this.length;if (e === void 0 && 1 === t.nodeType) return t.innerHTML;if ('string' === typeof e && !je.test(e) && !He[(Ue.exec(e) || ['', ''])[1].toLowerCase()]) {
          e = e.replace(Ae, '<$1></$2>');try {
            for (; s < n; s++) {
              t = this[s] || {}, 1 === t.nodeType && (ae.cleanData(h(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (t) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = ae.map(this, function (e) {
        return [e.nextSibling, e.parentNode];
      }),
          t = 0;return this.domManip(arguments, function (s) {
        var n = e[t++],
            a = e[t++];a && (n && n.parentNode !== a && (n = this.nextSibling), ae(this).remove(), a.insertBefore(s, n));
      }, !0), t ? this : this.remove();
    }, detach: function detach(e) {
      return this.remove(e, !0);
    }, domManip: function domManip(e, t, s) {
      e = Y.apply([], e);var n = 0,
          a = this.length,
          o = this,
          r = e[0],
          l = ae.isFunction(r),
          i,
          d,
          c,
          g,
          m,
          y;if (l || !(1 >= a || 'string' !== typeof r || ae.support.checkClone || !De.test(r))) return this.each(function (n) {
        var a = o.eq(n);l && (e[0] = r.call(this, n, a.html())), a.domManip(e, t, s);
      });if (a && (i = ae.buildFragment(e, this[0].ownerDocument, !1, !s && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
        for (c = ae.map(h(i, 'script'), u), g = c.length; n < a; n++) {
          m = i, n !== a - 1 && (m = ae.clone(m, !0, !0), g && ae.merge(c, h(m, 'script'))), t.call(this[n], m, n);
        }if (g) for (y = c[c.length - 1].ownerDocument, ae.map(c, p), n = 0; n < g; n++) {
          m = c[n], Ve.test(m.type || '') && !xe.access(m, 'globalEval') && ae.contains(y, m) && (m.src ? ae._evalUrl(m.src) : ae.globalEval(m.textContent.replace(Be, '')));
        }
      }return this;
    } }), ae.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (e, t) {
    ae.fn[e] = function (e) {
      for (var s = [], n = ae(e), a = n.length - 1, o = 0, r; o <= a; o++) {
        r = o === a ? this : this.clone(!0), ae(n[o])[t](r), Q.apply(s, r.get());
      }return this.pushStack(s);
    };
  }), ae.extend({ clone: function clone(e, t, s) {
      var n = e.cloneNode(!0),
          a = ae.contains(e.ownerDocument, e),
          o,
          r,
          l,
          i;if (!ae.support.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !ae.isXMLDoc(e)) for (i = h(n), l = h(e), (o = 0, r = l.length); o < r; o++) {
        y(l[o], i[o]);
      }if (t) if (s) for (l = l || h(e), i = i || h(n), (o = 0, r = l.length); o < r; o++) {
        m(l[o], i[o]);
      } else m(e, n);return i = h(n, 'script'), 0 < i.length && g(i, !a && h(e, 'script')), n;
    }, buildFragment: function buildFragment(e, t, s, n) {
      for (var a = 0, o = e.length, r = t.createDocumentFragment(), l = [], i, d, c, u, p, m; a < o; a++) {
        if (i = e[a], i || 0 === i) if ('object' === ae.type(i)) ae.merge(l, i.nodeType ? [i] : i);else if (!Re.test(i)) l.push(t.createTextNode(i));else {
          for (d = d || r.appendChild(t.createElement('div')), c = (Ue.exec(i) || ['', ''])[1].toLowerCase(), u = He[c] || He._default, d.innerHTML = u[1] + i.replace(Ae, '<$1></$2>') + u[2], m = u[0]; m--;) {
            d = d.lastChild;
          }ae.merge(l, d.childNodes), d = r.firstChild, d.textContent = '';
        }
      }for (r.textContent = '', a = 0; i = l[a++];) {
        if (!(n && -1 !== ae.inArray(i, n)) && (p = ae.contains(i.ownerDocument, i), d = h(r.appendChild(i), 'script'), p && g(d), s)) for (m = 0; i = d[m++];) {
          Ve.test(i.type || '') && s.push(i);
        }
      }return r;
    }, cleanData: function cleanData(e) {
      for (var t = ae.event.special, s = 0, a, o, r, l, i, d; (o = e[s]) !== void 0; s++) {
        if (n.accepts(o) && (i = o[xe.expando], i && (a = xe.cache[i]))) {
          if (r = Object.keys(a.events || {}), r.length) for (d = 0; void 0 !== (l = r[d]); d++) {
            t[l] ? ae.event.remove(o, l) : ae.removeEvent(o, l, a.handle);
          }xe.cache[i] && delete xe.cache[i];
        }delete be.cache[o[be.expando]];
      }
    }, _evalUrl: function _evalUrl(e) {
      return ae.ajax({ url: e, type: 'GET', dataType: 'script', async: !1, global: !1, throws: !0 });
    } }), ae.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return ae.isFunction(e) ? this.each(function (t) {
        ae(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = ae(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this);
    }, wrapInner: function wrapInner(e) {
      return ae.isFunction(e) ? this.each(function (t) {
        ae(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = ae(this),
            s = t.contents();s.length ? s.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = ae.isFunction(e);return this.each(function (s) {
        ae(this).wrapAll(t ? e.call(this, s) : e);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        ae.nodeName(this, 'body') || ae(this).replaceWith(this.childNodes);
      }).end();
    } });var qe = /^(none|table(?!-c[ea]).+)/,
      We = /^margin/,
      Ge = new RegExp('^(' + oe + ')(.*)$', 'i'),
      ze = new RegExp('^(' + oe + ')(?!px)[a-z%]+$', 'i'),
      $e = new RegExp('^([+-])=(' + oe + ')', 'i'),
      Xe = { BODY: 'block' },
      Ke = { position: 'absolute', visibility: 'hidden', display: 'block' },
      Je = { letterSpacing: 0, fontWeight: 400 },
      Ye = ['Top', 'Right', 'Bottom', 'Left'],
      Qe = ['Webkit', 'O', 'Moz', 'ms'],
      Ze,
      et;ae.fn.extend({ css: function css(e, t) {
      return ae.access(this, function (e, t, s) {
        var n = {},
            a = 0,
            o,
            r;if (ae.isArray(t)) {
          for (o = x(e), r = t.length; a < r; a++) {
            n[t[a]] = ae.css(e, t[a], !1, o);
          }return n;
        }return s === void 0 ? ae.css(e, t) : ae.style(e, t, s);
      }, e, t, 1 < arguments.length);
    }, show: function show() {
      return v(this, !0);
    }, hide: function hide() {
      return v(this);
    }, toggle: function toggle(e) {
      return 'boolean' === typeof e ? e ? this.show() : this.hide() : this.each(function () {
        b(this) ? ae(this).show() : ae(this).hide();
      });
    } }), ae.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var s = Ze(e, 'opacity');return '' === s ? '1' : s;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: 'cssFloat' }, style: function style(e, t, s, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var a = ae.camelCase(t),
            o = e.style,
            r,
            l,
            i;if (t = ae.cssProps[a] || (ae.cssProps[a] = f(o, a)), i = ae.cssHooks[t] || ae.cssHooks[a], void 0 !== s) {
          if (l = 'undefined' === typeof s ? 'undefined' : babelHelpers['typeof'](s), 'string' === l && (r = $e.exec(s)) && (s = (r[1] + 1) * r[2] + parseFloat(ae.css(e, t)), l = 'number'), null == s || 'number' === l && isNaN(s)) return;'number' !== l || ae.cssNumber[a] || (s += 'px'), ae.support.clearCloneStyle || '' !== s || 0 !== t.indexOf('background') || (o[t] = 'inherit'), i && 'set' in i && void 0 === (s = i.set(e, s, n)) || (o[t] = s);
        } else return i && 'get' in i && void 0 !== (r = i.get(e, !1, n)) ? r : o[t];
      }
    }, css: function css(e, t, s, n) {
      var a = ae.camelCase(t),
          o,
          r,
          l;return t = ae.cssProps[a] || (ae.cssProps[a] = f(e.style, a)), l = ae.cssHooks[t] || ae.cssHooks[a], l && 'get' in l && (o = l.get(e, !0, s)), void 0 === o && (o = Ze(e, t, n)), 'normal' === o && t in Je && (o = Je[t]), '' === s || s ? (r = parseFloat(o), !0 === s || ae.isNumeric(r) ? r || 0 : o) : o;
    } }), Ze = function Ze(e, t, s) {
    var n = s || x(e),
        a = n ? n.getPropertyValue(t) || n[t] : void 0,
        o = e.style,
        r,
        l,
        i;return n && ('' === a && !ae.contains(e.ownerDocument, e) && (a = ae.style(e, t)), ze.test(a) && We.test(t) && (r = o.width, l = o.minWidth, i = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = n.width, o.width = r, o.minWidth = l, o.maxWidth = i)), a;
  }, ae.each(['height', 'width'], function (e, t) {
    ae.cssHooks[t] = { get: function get(e, s, n) {
        if (s) return 0 === e.offsetWidth && qe.test(ae.css(e, 'display')) ? ae.swap(e, Ke, function () {
          return k(e, t, n);
        }) : k(e, t, n);
      }, set: function set(e, s, n) {
        var a = n && x(e);return I(e, s, n ? S(e, t, n, ae.support.boxSizing && 'border-box' === ae.css(e, 'boxSizing', !1, a), a) : 0);
      } };
  }), ae(function () {
    ae.support.reliableMarginRight || (ae.cssHooks.marginRight = { get: function get(e, t) {
        if (t) return ae.swap(e, { display: 'inline-block' }, Ze, [e, 'marginRight']);
      } }), !ae.support.pixelPosition && ae.fn.position && ae.each(['top', 'left'], function (e, t) {
      ae.cssHooks[t] = { get: function get(e, s) {
          if (s) return s = Ze(e, t), ze.test(s) ? ae(e).position()[t] + 'px' : s;
        } };
    });
  }), ae.expr && ae.expr.filters && (ae.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
  }, ae.expr.filters.visible = function (e) {
    return !ae.expr.filters.hidden(e);
  }), ae.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
    ae.cssHooks[e + t] = { expand: function expand(s) {
        for (var n = 0, a = {}, o = 'string' === typeof s ? s.split(' ') : [s]; 4 > n; n++) {
          a[e + Ye[n] + t] = o[n] || o[n - 2] || o[0];
        }return a;
      } }, We.test(e) || (ae.cssHooks[e + t].set = I);
  });var tt = /%20/g,
      st = /\[\]$/,
      nt = /\r?\n/g,
      at = /^(?:submit|button|image|reset|file)$/i,
      ot = /^(?:input|select|textarea|keygen)/i;ae.fn.extend({ serialize: function serialize() {
      return ae.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = ae.prop(this, 'elements');return e ? ae.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !ae(this).is(':disabled') && ot.test(this.nodeName) && !at.test(e) && (this.checked || !Oe.test(e));
      }).map(function (e, t) {
        var s = ae(this).val();return null == s ? null : ae.isArray(s) ? ae.map(s, function (e) {
          return { name: t.name, value: e.replace(nt, '\r\n') };
        }) : { name: t.name, value: s.replace(nt, '\r\n') };
      }).get();
    } }), ae.param = function (e, t) {
    var n = [],
        s = function s(e, t) {
      t = ae.isFunction(t) ? t() : null == t ? '' : t, n[n.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t);
    },
        a;if (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function () {
      s(this.name, this.value);
    });else for (a in e) {
      T(a, e[a], t, s);
    }return n.join('&').replace(tt, '+');
  }, ae.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, t) {
    ae.fn[t] = function (e, s) {
      return 0 < arguments.length ? this.on(t, null, e, s) : this.trigger(t);
    };
  }), ae.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }, bind: function bind(e, t, s) {
      return this.on(e, null, t, s);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, s, n) {
      return this.on(t, e, s, n);
    }, undelegate: function undelegate(e, t, s) {
      return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', s);
    } });var rt = ae.now(),
      lt = /\?/,
      it = /#.*$/,
      dt = /([?&])_=[^&]*/,
      ct = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      pt = /^(?:GET|HEAD)$/,
      gt = /^\/\//,
      mt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      ht = ae.fn.load,
      yt = {},
      ft = {},
      bt = '*/'.concat('*'),
      xt,
      vt;try {
    vt = H.href;
  } catch (t) {
    vt = q.createElement('a'), vt.href = '', vt = vt.href;
  }xt = mt.exec(vt.toLowerCase()) || [], ae.fn.load = function (e, t, s) {
    if ('string' !== typeof e && ht) return ht.apply(this, arguments);var n = this,
        a = e.indexOf(' '),
        o,
        r,
        l;return 0 <= a && (o = e.slice(a), e = e.slice(0, a)), ae.isFunction(t) ? (s = t, t = void 0) : t && 'object' === ('undefined' === typeof t ? 'undefined' : babelHelpers['typeof'](t)) && (r = 'POST'), 0 < n.length && ae.ajax({ url: e, type: r, dataType: 'html', data: t }).done(function (e) {
      l = arguments, n.html(o ? ae('<div>').append(ae.parseHTML(e)).find(o) : e);
    }).complete(s && function (e, t) {
      n.each(s, l || [e.responseText, t, e]);
    }), this;
  }, ae.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
    ae.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ae.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: vt, type: 'GET', isLocal: ut.test(xt[1]), global: !0, processData: !0, async: !0, contentType: 'application/x-www-form-urlencoded; charset=UTF-8', accepts: { "*": bt, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' }, converters: { "* text": String, "text html": !0, "text json": ae.parseJSON, "text xml": ae.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? E(E(e, ae.ajaxSettings), t) : E(ae.ajaxSettings, e);
    }, ajaxPrefilter: w(yt), ajaxTransport: w(ft), ajax: function ajax(e, t) {
      function n(e, t, n, i) {
        var c = t,
            u,
            g,
            b,
            v,
            S;2 === p || (p = 2, x && clearTimeout(x), h = void 0, f = i || '', m.readyState = 0 < e ? 4 : 0, u = 200 <= e && 300 > e || 304 === e, n && (v = P(a, m, n)), v = _(a, v, m, u), u ? (a.ifModified && (S = m.getResponseHeader('Last-Modified'), S && (ae.lastModified[y] = S), S = m.getResponseHeader('etag'), S && (ae.etag[y] = S)), 204 === e || 'HEAD' === a.type ? c = 'nocontent' : 304 === e ? c = 'notmodified' : (c = v.state, g = v.data, b = v.error, u = !b)) : (b = c, (e || !c) && (c = 'error', 0 > e && (e = 0))), m.status = e, m.statusText = (t || c) + '', u ? r.resolveWith(s, [g, c, m]) : r.rejectWith(s, [m, c, b]), m.statusCode(d), d = void 0, I && o.trigger(u ? 'ajaxSuccess' : 'ajaxError', [m, a, u ? g : b]), l.fireWith(s, [m, c]), I && (o.trigger('ajaxComplete', [m, a]), ! --ae.active && ae.event.trigger('ajaxStop')));
      }'object' === ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) && (t = e, e = void 0), t = t || {};var a = ae.ajaxSetup({}, t),
          s = a.context || a,
          o = a.context && (s.nodeType || s.jquery) ? ae(s) : ae.event,
          r = ae.Deferred(),
          l = ae.Callbacks('once memory'),
          d = a.statusCode || {},
          c = {},
          u = {},
          p = 0,
          g = 'canceled',
          m = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (2 === p) {
            if (!b) for (b = {}; t = ct.exec(f);) {
              b[t[1].toLowerCase()] = t[2];
            }t = b[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === p ? f : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          var s = e.toLowerCase();return p || (e = u[s] = u[s] || e, c[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return p || (a.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          if (e) if (2 > p) for (var t in e) {
            d[t] = [d[t], e[t]];
          } else m.always(e[m.status]);return this;
        }, abort: function abort(e) {
          var t = e || g;return h && h.abort(t), n(0, t), this;
        } },
          h,
          y,
          f,
          b,
          x,
          v,
          I,
          S;if (r.promise(m).complete = l.add, m.success = m.done, m.error = m.fail, a.url = ((e || a.url || vt) + '').replace(it, '').replace(gt, xt[1] + '//'), a.type = t.method || t.type || a.method || a.type, a.dataTypes = ae.trim(a.dataType || '*').toLowerCase().match(re) || [''], null == a.crossDomain && (v = mt.exec(a.url.toLowerCase()), a.crossDomain = !!(v && (v[1] !== xt[1] || v[2] !== xt[2] || (v[3] || ('http:' === v[1] ? '80' : '443')) !== (xt[3] || ('http:' === xt[1] ? '80' : '443'))))), a.data && a.processData && 'string' !== typeof a.data && (a.data = ae.param(a.data, a.traditional)), N(yt, a, t, m), 2 === p) return m;for (S in I = a.global, I && 0 === ae.active++ && ae.event.trigger('ajaxStart'), a.type = a.type.toUpperCase(), a.hasContent = !pt.test(a.type), y = a.url, a.hasContent || (a.data && (y = a.url += (lt.test(y) ? '&' : '?') + a.data, delete a.data), !1 === a.cache && (a.url = dt.test(y) ? y.replace(dt, '$1_=' + rt++) : y + (lt.test(y) ? '&' : '?') + '_=' + rt++)), a.ifModified && (ae.lastModified[y] && m.setRequestHeader('If-Modified-Since', ae.lastModified[y]), ae.etag[y] && m.setRequestHeader('If-None-Match', ae.etag[y])), (a.data && a.hasContent && !1 !== a.contentType || t.contentType) && m.setRequestHeader('Content-Type', a.contentType), m.setRequestHeader('Accept', a.dataTypes[0] && a.accepts[a.dataTypes[0]] ? a.accepts[a.dataTypes[0]] + ('*' === a.dataTypes[0] ? '' : ', ' + bt + '; q=0.01') : a.accepts['*']), a.headers) {
        m.setRequestHeader(S, a.headers[S]);
      }if (a.beforeSend && (!1 === a.beforeSend.call(s, m, a) || 2 === p)) return m.abort();for (S in g = 'abort', { success: 1, error: 1, complete: 1 }) {
        m[S](a[S]);
      }if (h = N(ft, a, t, m), !h) n(-1, 'No Transport');else {
        m.readyState = 1, I && o.trigger('ajaxSend', [m, a]), a.async && 0 < a.timeout && (x = setTimeout(function () {
          m.abort('timeout');
        }, a.timeout));try {
          p = 1, h.send(c, n);
        } catch (t) {
          if (2 > p) n(-1, t);else throw t;
        }
      }return m;
    }, getJSON: function getJSON(e, t, s) {
      return ae.get(e, t, s, 'json');
    }, getScript: function getScript(e, t) {
      return ae.get(e, void 0, t, 'script');
    } }), ae.each(['get', 'post'], function (e, t) {
    ae[t] = function (e, s, n, a) {
      return ae.isFunction(s) && (a = a || n, n = s, s = void 0), ae.ajax({ url: e, type: t, dataType: a, data: s, success: n });
    };
  }), ae.ajaxSetup({ accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
        return ae.globalEval(e), e;
      } } }), ae.ajaxPrefilter('script', function (e) {
    e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = 'GET');
  }), ae.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var t, _s;return { send: function send(n, a) {
          t = ae('<script>').prop({ async: !0, charset: e.scriptCharset, src: e.url }).on('load error', _s = function s(e) {
            t.remove(), _s = null, e && a('error' === e.type ? 404 : 200, e.type);
          }), q.head.appendChild(t[0]);
        }, abort: function abort() {
          _s && _s();
        } };
    }
  });var It = [],
      St = /(=)\?(?=&|$)|\?\?/;ae.ajaxSetup({ jsonp: 'callback', jsonpCallback: function jsonpCallback() {
      var e = It.pop() || ae.expando + '_' + rt++;return this[e] = !0, e;
    } }), ae.ajaxPrefilter('json jsonp', function (t, s, n) {
    var a = !1 !== t.jsonp && (St.test(t.url) ? 'url' : 'string' === typeof t.data && !(t.contentType || '').indexOf('application/x-www-form-urlencoded') && St.test(t.data) && 'data'),
        o,
        r,
        l;if (a || 'jsonp' === t.dataTypes[0]) return o = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(St, '$1' + o) : !1 !== t.jsonp && (t.url += (lt.test(t.url) ? '&' : '?') + t.jsonp + '=' + o), t.converters['script json'] = function () {
      return l || ae.error(o + ' was not called'), l[0];
    }, t.dataTypes[0] = 'json', r = e[o], e[o] = function () {
      l = arguments;
    }, n.always(function () {
      e[o] = r, t[o] && (t.jsonpCallback = s.jsonpCallback, It.push(o)), l && ae.isFunction(r) && r(l[0]), l = r = void 0;
    }), 'script';
  }), ae.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (t) {}
  };var kt = ae.ajaxSettings.xhr(),
      Ct = { 0: 200, 1223: 204 },
      Mt = 0,
      Tt = {};e.ActiveXObject && ae(e).on('unload', function () {
    for (var e in Tt) {
      Tt[e]();
    }Tt = void 0;
  }), ae.support.cors = !!kt && 'withCredentials' in kt, ae.support.ajax = kt = !!kt, ae.ajaxTransport(function (e) {
    var _t3;if (ae.support.cors || kt && !e.crossDomain) return { send: function send(s, n) {
        var a = e.xhr(),
            o,
            r;if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) {
          a[o] = e.xhrFields[o];
        }for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s['X-Requested-With'] || (s['X-Requested-With'] = 'XMLHttpRequest'), s) {
          a.setRequestHeader(o, s[o]);
        }_t3 = function t(e) {
          return function () {
            _t3 && (delete Tt[r], _t3 = a.onload = a.onerror = null, 'abort' === e ? a.abort() : 'error' === e ? n(a.status || 404, a.statusText) : n(Ct[a.status] || a.status, a.statusText, 'string' === typeof a.responseText ? { text: a.responseText } : void 0, a.getAllResponseHeaders()));
          };
        }, a.onload = _t3(), a.onerror = _t3('error'), _t3 = Tt[r = Mt++] = _t3('abort'), a.send(e.hasContent && e.data || null);
      }, abort: function abort() {
        _t3 && _t3();
      } };
  });var wt = /^(?:toggle|show|hide)$/,
      Nt = new RegExp('^(?:([+-])=|)(' + oe + ')([a-z%]*)$', 'i'),
      Et = /queueHooks$/,
      Pt = [function (e, t, s) {
    var n = this,
        a = {},
        o = e.style,
        r = e.nodeType && b(e),
        l = xe.get(e, 'fxshow'),
        i,
        d,
        c,
        u,
        p,
        g;for (i in s.queue || (p = ae._queueHooks(e, 'fx'), null == p.unqueued && (p.unqueued = 0, g = p.empty.fire, p.empty.fire = function () {
      p.unqueued || g();
    }), p.unqueued++, n.always(function () {
      n.always(function () {
        p.unqueued--, ae.queue(e, 'fx').length || p.empty.fire();
      });
    })), 1 === e.nodeType && ('height' in t || 'width' in t) && (s.overflow = [o.overflow, o.overflowX, o.overflowY], 'inline' === ae.css(e, 'display') && 'none' === ae.css(e, 'float') && (o.display = 'inline-block')), s.overflow && (o.overflow = 'hidden', n.always(function () {
      o.overflow = s.overflow[0], o.overflowX = s.overflow[1], o.overflowY = s.overflow[2];
    })), t) {
      if (d = t[i], wt.exec(d)) {
        if (delete t[i], c = c || 'toggle' === d, d === (r ? 'hide' : 'show')) if ('show' === d && l && void 0 !== l[i]) r = !0;else continue;a[i] = l && l[i] || ae.style(e, i);
      }
    }if (!ae.isEmptyObject(a)) for (i in l ? 'hidden' in l && (r = l.hidden) : l = xe.access(e, 'fxshow', {}), c && (l.hidden = !r), r ? ae(e).show() : n.done(function () {
      ae(e).hide();
    }), n.done(function () {
      for (var t in xe.remove(e, 'fxshow'), a) {
        ae.style(e, t, a[t]);
      }
    }), a) {
      u = A(r ? l[i] : 0, i, n), i in l || (l[i] = u.start, r && (u.end = u.start, u.start = 'width' === i || 'height' === i ? 1 : 0));
    }
  }],
      _t = { "*": [function (e, t) {
      var s = this.createTween(e, t),
          n = s.cur(),
          a = Nt.exec(t),
          o = a && a[3] || (ae.cssNumber[e] ? '' : 'px'),
          r = (ae.cssNumber[e] || 'px' !== o && +n) && Nt.exec(ae.css(s.elem, e)),
          l = 1,
          i = 20;if (r && r[3] !== o) {
        o = o || r[3], a = a || [], r = +n || 1;do {
          l = l || '.5', r /= l, ae.style(s.elem, e, r + o);
        } while (l !== (l = s.cur() / n) && 1 !== l && --i);
      }return a && (r = s.start = +r || +n || 0, s.unit = o, s.end = a[1] ? r + (a[1] + 1) * a[2] : +a[2]), s;
    }] },
      Lt,
      At;ae.Animation = ae.extend(U, { tweener: function tweener(e, t) {
      ae.isFunction(e) ? (t = e, e = ['*']) : e = e.split(' ');for (var s = 0, n = e.length, a; s < n; s++) {
        a = e[s], _t[a] = _t[a] || [], _t[a].unshift(t);
      }
    }, prefilter: function prefilter(e, t) {
      t ? Pt.unshift(e) : Pt.push(e);
    } }), ae.Tween = j, j.prototype = { constructor: j, init: function init(e, t, s, n, a, o) {
      this.elem = e, this.prop = s, this.easing = a || 'swing', this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ae.cssNumber[s] ? '' : 'px');
    }, cur: function cur() {
      var e = j.propHooks[this.prop];return e && e.get ? e.get(this) : j.propHooks._default.get(this);
    }, run: function run(e) {
      var t = j.propHooks[this.prop],
          s;return this.pos = this.options.duration ? s = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : s = e, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : j.propHooks._default.set(this), this;
    } }, j.prototype.init.prototype = j.prototype, j.propHooks = { _default: { get: function get(e) {
        var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ae.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0) : e.elem[e.prop];
      }, set: function set(e) {
        ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ae.cssProps[e.prop]] || ae.cssHooks[e.prop]) ? ae.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      } } }, j.propHooks.scrollTop = j.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, ae.each(['toggle', 'show', 'hide'], function (e, t) {
    var s = ae.fn[t];ae.fn[t] = function (e, n, a) {
      return null == e || 'boolean' === typeof e ? s.apply(this, arguments) : this.animate(O(t, !0), e, n, a);
    };
  }), ae.fn.extend({ fadeTo: function fadeTo(e, t, s, n) {
      return this.filter(b).css('opacity', 0).show().end().animate({ opacity: t }, e, s, n);
    }, animate: function animate(e, t, s, n) {
      var a = ae.isEmptyObject(e),
          o = ae.speed(t, s, n),
          r = function r() {
        var t = U(this, ae.extend({}, e), o);(a || xe.get(this, 'finish')) && t.stop(!0);
      };return r.finish = r, a || !1 === o.queue ? this.each(r) : this.queue(o.queue, r);
    }, stop: function stop(e, t, s) {
      var n = function n(e) {
        var t = e.stop;delete e.stop, t(s);
      };return 'string' !== typeof e && (s = t, t = e, e = void 0), t && !1 !== e && this.queue(e || 'fx', []), this.each(function () {
        var t = !0,
            a = null != e && e + 'queueHooks',
            o = ae.timers,
            r = xe.get(this);if (a) r[a] && r[a].stop && n(r[a]);else for (a in r) {
          r[a] && r[a].stop && Et.test(a) && n(r[a]);
        }for (a = o.length; a--;) {
          o[a].elem === this && (null == e || o[a].queue === e) && (o[a].anim.stop(s), t = !1, o.splice(a, 1));
        }(t || !s) && ae.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || 'fx'), this.each(function () {
        var t = xe.get(this),
            s = t[e + 'queue'],
            n = t[e + 'queueHooks'],
            a = ae.timers,
            o = s ? s.length : 0,
            r;for (t.finish = !0, ae.queue(this, e, []), n && n.stop && n.stop.call(this, !0), r = a.length; r--;) {
          a[r].elem === this && a[r].queue === e && (a[r].anim.stop(!0), a.splice(r, 1));
        }for (r = 0; r < o; r++) {
          s[r] && s[r].finish && s[r].finish.call(this);
        }delete t.finish;
      });
    } }), ae.each({ slideDown: O('show'), slideUp: O('hide'), slideToggle: O('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, function (e, t) {
    ae.fn[e] = function (e, s, n) {
      return this.animate(t, e, s, n);
    };
  }), ae.speed = function (e, t, s) {
    var n = e && 'object' === ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) ? ae.extend({}, e) : { complete: s || !s && t || ae.isFunction(e) && e, duration: e, easing: s && t || t && !ae.isFunction(t) && t };return n.duration = ae.fx.off ? 0 : 'number' === typeof n.duration ? n.duration : n.duration in ae.fx.speeds ? ae.fx.speeds[n.duration] : ae.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = 'fx'), n.old = n.complete, n.complete = function () {
      ae.isFunction(n.old) && n.old.call(this), n.queue && ae.dequeue(this, n.queue);
    }, n;
  }, ae.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    } }, ae.timers = [], ae.fx = j.prototype.init, ae.fx.tick = function () {
    var e = ae.timers,
        t = 0,
        s;for (Lt = ae.now(); t < e.length; t++) {
      s = e[t], s() || e[t] !== s || e.splice(t--, 1);
    }e.length || ae.fx.stop(), Lt = void 0;
  }, ae.fx.timer = function (e) {
    e() && ae.timers.push(e) && ae.fx.start();
  }, ae.fx.interval = 13, ae.fx.start = function () {
    At || (At = setInterval(ae.fx.tick, ae.fx.interval));
  }, ae.fx.stop = function () {
    clearInterval(At), At = null;
  }, ae.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ae.fx.step = {}, ae.expr && ae.expr.filters && (ae.expr.filters.animated = function (e) {
    return ae.grep(ae.timers, function (t) {
      return e === t.elem;
    }).length;
  }), ae.fn.offset = function (e) {
    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
      ae.offset.setOffset(this, e, t);
    });var t = this[0],
        s = { top: 0, left: 0 },
        n = t && t.ownerDocument,
        a,
        o;if (n) return (a = n.documentElement, !ae.contains(a, t)) ? s : (babelHelpers['typeof'](t.getBoundingClientRect) !== B && (s = t.getBoundingClientRect()), o = D(n), { top: s.top + o.pageYOffset - a.clientTop, left: s.left + o.pageXOffset - a.clientLeft });
  }, ae.offset = { setOffset: function setOffset(e, t, s) {
      var n = ae.css(e, 'position'),
          a = ae(e),
          o = {},
          r,
          l,
          i,
          d,
          c,
          u,
          p;'static' === n && (e.style.position = 'relative'), c = a.offset(), i = ae.css(e, 'top'), u = ae.css(e, 'left'), p = ('absolute' === n || 'fixed' === n) && -1 < (i + u).indexOf('auto'), p ? (r = a.position(), d = r.top, l = r.left) : (d = parseFloat(i) || 0, l = parseFloat(u) || 0), ae.isFunction(t) && (t = t.call(e, s, c)), null != t.top && (o.top = t.top - c.top + d), null != t.left && (o.left = t.left - c.left + l), 'using' in t ? t.using.call(e, o) : a.css(o);
    } }, ae.fn.extend({ position: function position() {
      if (this[0]) {
        var e = this[0],
            t = { top: 0, left: 0 },
            s,
            n;return 'fixed' === ae.css(e, 'position') ? n = e.getBoundingClientRect() : (s = this.offsetParent(), n = this.offset(), !ae.nodeName(s[0], 'html') && (t = s.offset()), t.top += ae.css(s[0], 'borderTopWidth', !0), t.left += ae.css(s[0], 'borderLeftWidth', !0)), { top: n.top - t.top - ae.css(e, 'marginTop', !0), left: n.left - t.left - ae.css(e, 'marginLeft', !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent || W; e && !ae.nodeName(e, 'html') && 'static' === ae.css(e, 'position');) {
          e = e.offsetParent;
        }return e || W;
      });
    } }), ae.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (t, s) {
    var n = 'pageYOffset' === s;ae.fn[t] = function (a) {
      return ae.access(this, function (t, a, o) {
        var r = D(t);return void 0 === o ? r ? r[s] : t[a] : void (r ? r.scrollTo(n ? e.pageXOffset : o, n ? o : e.pageYOffset) : t[a] = o);
      }, t, a, arguments.length, null);
    };
  }), ae.each({ Height: 'height', Width: 'width' }, function (e, t) {
    ae.each({ padding: 'inner' + e, content: t, "": 'outer' + e }, function (s, n) {
      ae.fn[n] = function (n, a) {
        var o = arguments.length && (s || 'boolean' !== typeof n),
            r = s || (!0 === n || !0 === a ? 'margin' : 'border');return ae.access(this, function (t, s, n) {
          var a;return ae.isWindow(t) ? t.document.documentElement['client' + e] : 9 === t.nodeType ? (a = t.documentElement, V(t.body['scroll' + e], a['scroll' + e], t.body['offset' + e], a['offset' + e], a['client' + e])) : n === void 0 ? ae.css(t, s, r) : ae.style(t, s, n, r);
        }, t, o ? n : void 0, o, null);
      };
    });
  }), ae.fn.size = function () {
    return this.length;
  }, ae.fn.andSelf = ae.fn.addBack, 'object' === ('undefined' === typeof module ? 'undefined' : babelHelpers['typeof'](module)) && module && 'object' === babelHelpers['typeof'](module.exports) && (module.exports = ae), 'object' === ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) && 'object' === babelHelpers['typeof'](e.document) && (e.jQuery = e.$ = ae);
}(window), 'use notstrict', function (e) {
  e.stringify = function (e) {
    return JSON.stringify(e, function (e, t) {
      return t instanceof Function || 'function' == typeof t ? t.toString() : t instanceof RegExp ? '_PxEgEr_' + t : t;
    });
  }, e.parse = function (e, t) {
    var s = !!t && /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;return JSON.parse(e, function (e, t) {
      var n;return 'string' == typeof t ? 8 > t.length ? t : (n = t.substring(0, 8), s && t.match(s) ? new Date(t) : 'function' === n ? eval('(' + t + ')') : '_PxEgEr_' === n ? eval(t.slice(8)) : t) : t;
    });
  }, e.clone = function (t, s) {
    return e.parse(e.stringify(t), s);
  };
}('undefined' === typeof exports ? window.jsonFn = {} : exports), !function (y) {
  'use notstrict';
  function b(e, s) {
    var n = (65535 & e) + (65535 & s);return (e >> 16) + (s >> 16) + (n >> 16) << 16 | 65535 & n;
  }function t(e, s) {
    return e << s | e >>> 32 - s;
  }function x(s, n, a, o, r, l) {
    return b(t(b(b(n, s), b(o, l)), r), a);
  }function r(e, s, n, a, r, l, i) {
    return x(s & n | ~s & a, e, s, r, l, i);
  }function o(e, s, t, n, a, r, l) {
    return x(s & n | t & ~n, e, s, a, r, l);
  }function u(e, s, t, n, a, o, r) {
    return x(s ^ t ^ n, e, s, a, o, r);
  }function c(e, s, t, n, a, r, l) {
    return x(t ^ (s | ~n), e, s, a, r, l);
  }function f(t, s) {
    t[s >> 5] |= 128 << s % 32, t[(s + 64 >>> 9 << 4) + 14] = s;var n = 1732584193,
        l = -271733879,
        p = -1732584194,
        g = 271733878,
        m,
        e,
        y,
        a,
        h;for (m = 0; m < t.length; m += 16) {
      e = n, y = l, a = p, h = g, n = r(n, l, p, g, t[m], 7, -680876936), g = r(g, n, l, p, t[m + 1], 12, -389564586), p = r(p, g, n, l, t[m + 2], 17, 606105819), l = r(l, p, g, n, t[m + 3], 22, -1044525330), n = r(n, l, p, g, t[m + 4], 7, -176418897), g = r(g, n, l, p, t[m + 5], 12, 1200080426), p = r(p, g, n, l, t[m + 6], 17, -1473231341), l = r(l, p, g, n, t[m + 7], 22, -45705983), n = r(n, l, p, g, t[m + 8], 7, 1770035416), g = r(g, n, l, p, t[m + 9], 12, -1958414417), p = r(p, g, n, l, t[m + 10], 17, -42063), l = r(l, p, g, n, t[m + 11], 22, -1990404162), n = r(n, l, p, g, t[m + 12], 7, 1804603682), g = r(g, n, l, p, t[m + 13], 12, -40341101), p = r(p, g, n, l, t[m + 14], 17, -1502002290), l = r(l, p, g, n, t[m + 15], 22, 1236535329), n = o(n, l, p, g, t[m + 1], 5, -165796510), g = o(g, n, l, p, t[m + 6], 9, -1069501632), p = o(p, g, n, l, t[m + 11], 14, 643717713), l = o(l, p, g, n, t[m], 20, -373897302), n = o(n, l, p, g, t[m + 5], 5, -701558691), g = o(g, n, l, p, t[m + 10], 9, 38016083), p = o(p, g, n, l, t[m + 15], 14, -660478335), l = o(l, p, g, n, t[m + 4], 20, -405537848), n = o(n, l, p, g, t[m + 9], 5, 568446438), g = o(g, n, l, p, t[m + 14], 9, -1019803690), p = o(p, g, n, l, t[m + 3], 14, -187363961), l = o(l, p, g, n, t[m + 8], 20, 1163531501), n = o(n, l, p, g, t[m + 13], 5, -1444681467), g = o(g, n, l, p, t[m + 2], 9, -51403784), p = o(p, g, n, l, t[m + 7], 14, 1735328473), l = o(l, p, g, n, t[m + 12], 20, -1926607734), n = u(n, l, p, g, t[m + 5], 4, -378558), g = u(g, n, l, p, t[m + 8], 11, -2022574463), p = u(p, g, n, l, t[m + 11], 16, 1839030562), l = u(l, p, g, n, t[m + 14], 23, -35309556), n = u(n, l, p, g, t[m + 1], 4, -1530992060), g = u(g, n, l, p, t[m + 4], 11, 1272893353), p = u(p, g, n, l, t[m + 7], 16, -155497632), l = u(l, p, g, n, t[m + 10], 23, -1094730640), n = u(n, l, p, g, t[m + 13], 4, 681279174), g = u(g, n, l, p, t[m], 11, -358537222), p = u(p, g, n, l, t[m + 3], 16, -722521979), l = u(l, p, g, n, t[m + 6], 23, 76029189), n = u(n, l, p, g, t[m + 9], 4, -640364487), g = u(g, n, l, p, t[m + 12], 11, -421815835), p = u(p, g, n, l, t[m + 15], 16, 530742520), l = u(l, p, g, n, t[m + 2], 23, -995338651), n = c(n, l, p, g, t[m], 6, -198630844), g = c(g, n, l, p, t[m + 7], 10, 1126891415), p = c(p, g, n, l, t[m + 14], 15, -1416354905), l = c(l, p, g, n, t[m + 5], 21, -57434055), n = c(n, l, p, g, t[m + 12], 6, 1700485571), g = c(g, n, l, p, t[m + 3], 10, -1894986606), p = c(p, g, n, l, t[m + 10], 15, -1051523), l = c(l, p, g, n, t[m + 1], 21, -2054922799), n = c(n, l, p, g, t[m + 8], 6, 1873313359), g = c(g, n, l, p, t[m + 15], 10, -30611744), p = c(p, g, n, l, t[m + 6], 15, -1560198380), l = c(l, p, g, n, t[m + 13], 21, 1309151649), n = c(n, l, p, g, t[m + 4], 6, -145523070), g = c(g, n, l, p, t[m + 11], 10, -1120210379), p = c(p, g, n, l, t[m + 2], 15, 718787259), l = c(l, p, g, n, t[m + 9], 21, -343485551), n = b(n, e), l = b(l, y), p = b(p, a), g = b(g, h);
    }return [n, l, p, g];
  }function i(e) {
    var s = '',
        n;for (n = 0; n < 32 * e.length; n += 8) {
      s += String.fromCharCode(255 & e[n >> 5] >>> n % 32);
    }return s;
  }function a(e) {
    var s = [],
        n;for (s[(e.length >> 2) - 1] = void 0, n = 0; n < s.length; n += 1) {
      s[n] = 0;
    }for (n = 0; n < 8 * e.length; n += 8) {
      s[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
    }return s;
  }function e(e) {
    return i(f(a(e), 8 * e.length));
  }function d(s, n) {
    var t = a(s),
        o = [],
        l = [],
        d,
        r;for (o[15] = l[15] = void 0, 16 < t.length && (t = f(t, 8 * s.length)), d = 0; 16 > d; d += 1) {
      o[d] = 909522486 ^ t[d], l[d] = 1549556828 ^ t[d];
    }return r = f(o.concat(a(n)), 512 + 8 * n.length), i(f(l.concat(r), 640));
  }function l(s) {
    var n = '0123456789abcdef',
        e = '',
        a,
        t;for (t = 0; t < s.length; t += 1) {
      a = s.charCodeAt(t), e += n.charAt(15 & a >>> 4) + n.charAt(15 & a);
    }return e;
  }function g(e) {
    return unescape(encodeURIComponent(e));
  }function h(t) {
    return e(g(t));
  }function m(e) {
    return l(h(e));
  }function p(e, s) {
    return d(g(e), g(s));
  }function s(e, s) {
    return l(p(e, s));
  }function n(e, n, t) {
    return n ? t ? p(n, e) : s(n, e) : t ? h(e) : m(e);
  }'object' == ('undefined' === typeof module ? 'undefined' : babelHelpers['typeof'](module)) && module.exports ? module.exports = n : y.md5 = n;
}(window), function () {
  'use notstrict';
  var e = function e(_e2, t, s, n) {
    return new (s || (s = Promise))(function (a, o) {
      function r(e) {
        try {
          i(n.next(e));
        } catch (t) {
          o(t);
        }
      }function l(e) {
        try {
          i(n['throw'](e));
        } catch (t) {
          o(t);
        }
      }function i(e) {
        e.done ? a(e.value) : new s(function (t) {
          t(e.value);
        }).then(r, l);
      }i((n = n.apply(_e2, t || [])).next());
    });
  },
      t = function t(e, s) {
    function n(e) {
      return function (t) {
        return a([e, t]);
      };
    }function a(n) {
      if (r) throw new TypeError('Generator is already executing.');for (; o;) {
        try {
          if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
              i = n;break;case 4:
              return o.label++, { value: n[1], done: !1 };case 5:
              o.label++, l = n[1], n = [0];continue;case 7:
              n = o.ops.pop(), o.trys.pop();continue;default:
              if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
                o = 0;continue;
              }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                o.label = n[1];break;
              }if (6 === n[0] && o.label < i[1]) {
                o.label = i[1], i = n;break;
              }if (i && o.label < i[2]) {
                o.label = i[2], o.ops.push(n);break;
              }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
        } catch (t) {
          n = [6, t], l = 0;
        } finally {
          r = i = 0;
        }
      }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
    }var o = { label: 0, sent: function sent() {
        if (1 & i[0]) throw i[1];return i[1];
      }, trys: [], ops: [] },
        r,
        l,
        i,
        d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
      return this;
    }), d;
  },
      s;(function (s) {
    function n(e) {
      s.modules.globalObject.globals.availablePermissions = e.permissions;
    }function a(e) {
      for (var t = 0, n = s.modules.toExecuteNodes.always.documentStart, a; t < n.length; t++) {
        a = n[t].id, s.modules.CRMNodes.Running.executeNode(s.modules.crm.crmById.get(a), e);
      }for (var o = 0, r = s.modules.toExecuteNodes.onUrl.documentStart; o < r.length; o++) {
        var l = r[o],
            a = l.id,
            i = l.triggers;s.modules.URLParsing.matchesUrlSchemes(i, e.url) && s.modules.CRMNodes.Running.executeNode(s.modules.crm.crmById.get(a), e);
      }
    }function o(e, t) {
      return s.modules.storages.resources.get(t)[e] && s.modules.storages.resources.get(t)[e].matchesHashes ? s.modules.storages.urlDataPairs.get(s.modules.storages.resources.get(t)[e].sourceUrl).dataURI : null;
    }s.initModule = function (e) {
      s.modules = e;
    }, s.initGlobalFunctions = function () {
      function n(e) {
        return e.sort(function (e, t) {
          return new Date(e.timestamp).getTime() - new Date(t.timestamp).getTime();
        });
      }function a(e, t) {
        if ('' === t) return e;var s = new RegExp(t);return e.filter(function (e) {
          for (var t = 0; t < e.data.length; t++) {
            if ('function' !== typeof e.data[t] && 'object' !== babelHelpers['typeof'](e.data[t]) && s.test(e.data[t] + '')) return !0;
          }return !1;
        });
      }function o(e, t, o) {
        var r = [],
            l = s.modules.globalObject.globals.logging;if ('all' === e) for (var i in l) {
          l.hasOwnProperty(i) && 'filter' !== i && (r = r.concat(l[i].logMessages));
        } else {
          var d = l[e];r = d && d.logMessages || [];
        }return 'all' === t ? n(a(r, o)) : n(a(r.filter(function (e) {
          return e.tabId === t;
        }), o));
      }function r(e, t, s) {
        return this.id = 'ALL' === e || 0 === e ? 'all' : e, this.tab = 'ALL' === t || 0 === t ? 'all' : 'string' === typeof t && 'background' === t.toLowerCase() ? 0 : t, this.text = s ? s : '', o(this.id, this.tab, this.text);
      }var l = this,
          i = 'you can find it by calling window.getID("nodename") where nodename is the name of your node';window.debugNextScriptCall = function (e) {
        if (0 !== e && !e || 'number' !== typeof e) throw new Error('Please supply a valid node ID, ' + i);var t = s.modules.crm.crmByIdSafe.get(e);if (!t) throw new Error('There is no node with the node ID you supplied, ' + i);if ('script' !== t.type) throw new Error('The node you supplied is not of type script');console.log('Listening for next activation. Make sure the devtools of the tab on which you activate the script are open when you activate it'), -1 === s.modules.globalObject.globals.eventListeners.scriptDebugListeners.indexOf(e) && s.modules.globalObject.globals.eventListeners.scriptDebugListeners.push(e);
      }, window.debugBackgroundScript = function (e) {
        if (0 !== e && !e || 'number' !== typeof e) throw new Error('Please supply a valid node ID, ' + i);var t = s.modules.crm.crmByIdSafe.get(e);if (!t) throw new Error('There is no node with the node ID you supplied, ' + i);if ('script' !== t.type) throw new Error('The node you supplied is not of type script');if ('' === t.value.backgroundScript) throw new Error('Backgroundscript is empty (code is empty string)');s.modules.CRMNodes.Script.Background.createBackgroundPage(s.modules.crm.crmById.get(e), !0);
      }, window.getID = function (e) {
        e = e.toLowerCase();var t = [];s.modules.Util.iterateMap(s.modules.crm.crmById, function (s, n) {
          var a = n.name;a && ('script' !== n.type || e !== a.toLowerCase() || t.push({ id: s, node: n }));
        }), 0 === t.length ? window.log('Unfortunately no matches were found, please try again') : 1 === t.length ? window.log('One match was found, the id is ', t[0].id, ' and the script is ', t[0].node) : (window.log('Found multiple matches, here they are:'), t.forEach(function (e) {
          window.log('Id is', e.id, ', script is', e.node);
        }));
      }, window.filter = function (e, t) {
        s.modules.globalObject.globals.logging.filter = { id: ~~e, tabId: t === void 0 ? null : ~~t };
      }, window._listenIds = function (e) {
        s.modules.Logging.Listeners.updateTabAndIdLists().then(function (t) {
          var n = t.ids;e(n), s.modules.listeners.ids.push(e);
        });
      }, window._listenTabs = function (e) {
        s.modules.Logging.Listeners.updateTabAndIdLists().then(function (t) {
          var n = t.tabs;e(n), s.modules.listeners.tabs.push(e);
        });
      }, window._listenLog = function (e, t) {
        var n = { id: 'all', tab: 'all', text: '', listener: e, update: function update(e, t, s) {
            return r.apply(n, [e, t, s]);
          }, index: s.modules.listeners.log.length };return t(n), s.modules.listeners.log.push(n), o('all', 'all', '');
      }, window._getIdsAndTabs = function (n, a, o) {
        return e(l, void 0, void 0, function () {
          var e, r;return t(this, function (t) {
            switch (t.label) {case 0:
                return e = o, r = { ids: s.modules.Logging.Listeners.getIds('background' === a ? 0 : a) }, [4, s.modules.Logging.Listeners.getTabs(n)];case 1:
                return e.apply(void 0, [(r.tabs = t.sent(), r)]), [2];}
          });
        });
      }, window._getCurrentTabIndex = function (e, t, n) {
        'background' === t ? n([0]) : n(s.modules.crmValues.tabData.get(t).nodes.get(e).map(function (e, t) {
          return t;
        }));
      };
    }, s.refreshPermissions = function () {
      return e(this, void 0, void 0, function () {
        var e, a, o;return t(this, function (t) {
          switch (t.label) {case 0:
              return window.chrome && window.chrome.permissions && (e = window.chrome.permissions, 'onRemoved' in e && 'onAdded' in e && (e.onRemoved.addListener(n), e.onAdded.addListener(n))), browserAPI.permissions ? [4, browserAPI.permissions.getAll()] : [3, 2];case 1:
              return o = t.sent(), [3, 3];case 2:
              o = { permissions: [] }, t.label = 3;case 3:
              return a = o, s.modules.globalObject.globals.availablePermissions = a.permissions, [2];}
        });
      });
    }, s.setHandlerFunction = function () {
      var n = this;window.createHandlerFunction = function (a) {
        return function (o) {
          return e(n, void 0, void 0, function () {
            var e, n, r, l, i, d;return t(this, function (t) {
              switch (t.label) {case 0:
                  return (e = s.modules.crmValues, n = e.tabData, r = e.nodeInstances, l = s.modules.Util.getLastItem(n.get(o.tabId).nodes.get(o.id)), !!l.port) ? [3, 1] : (s.modules.Util.compareArray(l.secretKey, o.key) && (delete l.secretKey, l.port = a, s.modules.Util.setMapDefault(r, o.id, new window.Map()), i = [], d = { id: o.tabId, tabIndex: n.get(o.tabId).nodes.get(o.id).length - 1 }, s.modules.Util.iterateMap(r.get(o.id), function (e) {
                    try {
                      n.get(e).nodes.get(o.id).forEach(function (t, n, a) {
                        e === o.tabId && n === a.length - 1 || (i.push({ id: e, tabIndex: n }), s.modules.Util.postMessage(t.port, { change: { type: 'added', value: d.id, tabIndex: d.tabIndex }, messageType: 'instancesUpdate' }));
                      });
                    } catch (t) {
                      r.get(o.id)['delete'](e);
                    }
                  }), s.modules.Util.setMapDefault(r.get(o.id), o.tabId, []), r.get(o.id).get(o.tabId).push({ hasHandler: !1 }), s.modules.Util.postMessage(a, { data: 'connected', instances: i, currentInstance: { id: d.id, tabIndex: d.tabIndex } })), [3, 3]);case 1:
                  return [4, s.modules.MessageHandling.handleCrmAPIMessage(o)];case 2:
                  t.sent(), t.label = 3;case 3:
                  return [2];}
            });
          });
        };
      };
    }, s.init = function () {
      function n(s) {
        var n = s.id;return e(this, void 0, void 0, function () {
          return t(this, function (e) {
            switch (e.label) {case 0:
                return [4, browserAPI.contextMenus.remove(n)['catch'](function () {})];case 1:
                return e.sent(), [2];}
          });
        });
      }function r(e, t) {
        for (var s = 0, n = e, a; s < n.length; s++) {
          a = n[s], a.enabled = t, a.children && r(a.children, t);
        }
      }function l(e, t) {
        for (var s in e) {
          if (e[s] && t[e[s].id]) return ~~s;
        }return Infinity;
      }function d(n, a, o) {
        return e(this, void 0, void 0, function () {
          var e, r, l;return t(this, function (t) {
            switch (t.label) {case 0:
                return e = a.id, a.enabled = !0, r = s.modules.crmValues.contextMenuInfoById.get(a.id).settings, a.node && 'stylesheet' === a.node.type && a.node.value.toggle && (r.checked = a.node.value.defaultOn), r.parentId = n, delete r.generatedId, [4, browserAPI.contextMenus.create(r)];case 1:
                return l = t.sent(), a.id = l, a.node && s.modules.crmValues.contextMenuIds.set(a.node.id, l), s.modules.crmValues.contextMenuInfoById.set(l, s.modules.crmValues.contextMenuInfoById.get(e)), s.modules.crmValues.contextMenuInfoById['delete'](e), s.modules.crmValues.contextMenuInfoById.get(l).enabled = !0, a.children ? [4, i(l, a.children, o)] : [3, 3];case 2:
                t.sent(), t.label = 3;case 3:
                return [2];}
          });
        });
      }function i(n, a, o) {
        return e(this, void 0, void 0, function () {
          var e, r, l;return t(this, function (t) {
            switch (t.label) {case 0:
                e = 0, r = a, t.label = 1;case 1:
                return e < r.length ? (l = r[e], (!o[l.id] || 'show' !== o[l.id].type) && o[l.id] ? [3, 3] : [4, d(n, l, o)]) : [3, 5];case 2:
                return t.sent(), [3, 4];case 3:
                s.modules.crmValues.contextMenuInfoById.get(l.id).enabled = !1, t.label = 4;case 4:
                return e++, [3, 1];case 5:
                return [2];}
          });
        });
      }function c(s, a, o) {
        return e(this, void 0, void 0, function () {
          var e, r, r, i, p, g, m, h;return t(this, function (t) {
            switch (t.label) {case 0:
                if (e = l(a, o), !(e < a.length)) return [3, 4];r = 0, t.label = 1;case 1:
                return r < e ? a[r].children && 0 < a[r].children.length ? [4, c(a[r].id, a[r].children, o)] : [3, 3] : [3, 4];case 2:
                t.sent(), t.label = 3;case 3:
                return r++, [3, 1];case 4:
                r = e, t.label = 5;case 5:
                return r < a.length ? o[a[r].id] ? 'hide' === o[a[r].id].type ? !1 === a[r].enabled ? [3, 20] : [4, u(a[r])] : [3, 7] : [3, 20] : [3, 21];case 6:
                return t.sent(), [3, 20];case 7:
                if (a[r].enabled) return [3, 20];i = [a[r]], p = r + 1, t.label = 8;case 8:
                return p < a.length ? o[a[p].id] ? 'hide' === o[a[p].id].type ? !1 === a[r].enabled ? [3, 15] : [4, u(a[p])] : [3, 10] : [3, 13] : [3, 16];case 9:
                return t.sent(), [3, 12];case 10:
                return i.push(a[p]), a[p].enabled ? [4, n(a[p])] : [3, 12];case 11:
                t.sent(), t.label = 12;case 12:
                return [3, 15];case 13:
                return a[p].enabled ? (i.push(a[p]), [4, n(a[p])]) : [3, 15];case 14:
                t.sent(), t.label = 15;case 15:
                return p++, [3, 8];case 16:
                g = 0, m = i, t.label = 17;case 17:
                return g < m.length ? (h = m[g], [4, d(s, h, o)]) : [3, 20];case 18:
                t.sent(), t.label = 19;case 19:
                return g++, [3, 17];case 20:
                return r++, [3, 5];case 21:
                return [2];}
          });
        });
      }function u(s) {
        return e(this, void 0, void 0, function () {
          return t(this, function (e) {
            switch (e.label) {case 0:
                return [4, n(s)];case 1:
                return e.sent(), s.enabled = !1, s.children && r(s.children, !1), [2];}
          });
        });
      }function p(e, t, s) {
        void 0 === t && (t = []), void 0 === s && (s = []);for (var n = 0; n < e.length; n++) {
          e[n] && ((e[n].enabled ? s : t).push(e[n]), p(e[n].children, t, s));
        }return { hiddenNodes: t, shownNodes: s };
      }function g(e, t) {
        return t.map(function (t) {
          var n = t.node,
              a = t.id;return null === n ? null : s.modules.crmValues.hideNodesOnPagesData.has(n.id) && s.modules.URLParsing.matchesUrlSchemes(s.modules.crmValues.hideNodesOnPagesData.get(n.id), e.url) ? { node: n, id: a, type: 'hide' } : null;
        }).filter(function (e) {
          return !!e;
        });
      }function m(e, t) {
        return t.map(function (t) {
          var n = t.node,
              a = t.id;return null === n ? null : s.modules.crmValues.hideNodesOnPagesData.has(n.id) && s.modules.URLParsing.matchesUrlSchemes(s.modules.crmValues.hideNodesOnPagesData.get(n.id), e.url) ? null : { node: n, id: a, type: 'show' };
        }).filter(function (e) {
          return !!e;
        }).filter(function (t) {
          var n = t.node;return !s.modules.crmValues.hideNodesOnPagesData.has(n.id) || !s.modules.URLParsing.matchesUrlSchemes(s.modules.crmValues.hideNodesOnPagesData.get(n.id), e.url);
        });
      }function h(e, t) {
        var n = s.modules.crmValues.nodeTabStatuses;return n.has(e) && n.get(e) ? n.get(e).tabs.has(t) && n.get(e).tabs.get(t) ? n.get(e).tabs.get(t).overrides : null : null;
      }function y() {
        return e(this, void 0, void 0, function () {
          var e, n;return t(this, function (t) {
            switch (t.label) {case 0:
                return [4, s.modules.Util.isTamperMonkeyEnabled()];case 1:
                return e = t.sent(), [4, s.modules.Util.isStylishInstalled()];case 2:
                return n = t.sent(), s.modules.storages.storageLocal.useAsUserscriptInstaller = !e, s.modules.storages.storageLocal.useAsUserstylesInstaller = !n, browserAPI.storage.local.set({ useAsUserscriptInstaller: !e, useAsUserstylesInstaller: !n }), [2];}
          });
        });
      }function f() {
        return e(this, void 0, void 0, function () {
          return t(this, function (e) {
            switch (e.label) {case 0:
                return browserAPI.commands ? [4, browserAPI.commands.getAll()] : [3, 2];case 1:
                return [2, e.sent()];case 2:
                return [2, []];}
          });
        });
      }function b(e, t) {
        return void 0 === t && (t = []), 0 === e.length ? [t] : e.map(function (s, n) {
          var a = e.slice(0, n).concat(e.slice(n + 1)),
              o = t.concat([s]),
              r = b(a, o);return r;
        }).reduce(function (e, t) {
          return e.concat(t);
        }, []);
      }browserAPI.tabs.onUpdated.addListener(function (e, t, n) {
        t.status && 'loading' === t.status && t.url && s.modules.Util.canRunOnUrl(t.url) && a(n);
      }), browserAPI.tabs.onRemoved.addListener(function (e) {
        s.modules.Util.iterateMap(s.modules.crmValues.nodeTabStatuses, function (t, s) {
          s.tabs['delete'](e);
        });var t = [];s.modules.Util.iterateMap(s.modules.crmValues.nodeInstances, function (s, n) {
          n && n.has(e) && (t.push(s), n['delete'](e));
        });for (var n = 0; n < t.length; n++) {
          t[n].node && void 0 !== t[n].node.id && s.modules.crmValues.tabData.get(e).nodes.get(t[n].node.id).forEach(function (t) {
            s.modules.Util.postMessage(t.port, { change: { type: 'removed', value: e }, messageType: 'instancesUpdate' });
          });
        }s.modules.crmValues.tabData['delete'](e), s.modules.Logging.Listeners.updateTabAndIdLists();
      }), browserAPI.tabs.onHighlighted && browserAPI.tabs.onHighlighted.addListener(function (n) {
        return e(this, void 0, void 0, function () {
          var a = this,
              o,
              r,
              l,
              i,
              d,
              u,
              y,
              f;return t(this, function (b) {
            switch (b.label) {case 0:
                return o = n.tabIds[n.tabIds.length - 1], [4, browserAPI.tabs.get(o)['catch'](function (e) {
                  if (-1 < e.message.indexOf('No tab with id:')) {
                    if (1e3 < s.modules.storages.failedLookups.length) {
                      for (var t = 0; s.modules.storages.failedLookups.pop() && (t++, 500 !== t);) {}s.modules.storages.failedLookups.push('Cleaning up last 500 array items because size exceeded 1000...');
                    }s.modules.storages.failedLookups.push(o);
                  } else window.log(e.message);
                })];case 1:
                return (r = b.sent(), !r) ? [2] : (l = {}, i = p(s.modules.crmValues.contextMenuItemTree), d = i.shownNodes, u = i.hiddenNodes, g(r, d).concat(m(r, u)).forEach(function (e) {
                  var t = e.node,
                      s = e.id,
                      n = e.type;l[s] = { node: t, type: n };
                }), [4, c(s.modules.crmValues.rootId, s.modules.crmValues.contextMenuItemTree, l)]);case 2:
                return b.sent(), y = s.modules.crmValues.nodeTabStatuses, f = s.modules.crmValues.contextMenuIds, s.modules.Util.asyncIterateMap(y, function (n, r) {
                  var l = r.tabs,
                      i = r.defaultCheckedValue;return e(a, void 0, void 0, function () {
                    var e, a, r, d;return t(this, function (t) {
                      switch (t.label) {case 0:
                          return e = 'stylesheet' === s.modules.crm.crmById.get(n).type, a = l.get(o), r = e ? { checked: 'boolean' === typeof a ? a : i } : null, d = h(n, o), r || d ? [4, browserAPI.contextMenus.update(f.get(n), s.modules.Util.applyContextmenuOverride(r || {}, d || {}))['catch'](function (e) {
                            window.log(e.message);
                          })] : [2, !0];case 1:
                          return t.sent(), [2, void 0];}
                    });
                  });
                }), [2];}
          });
        });
      }), browserAPI.webRequest.onBeforeRequest.addListener(function (e) {
        var t = e.url.split('https://www.localhost.io/resource/')[1].split('/'),
            s = t[0],
            n = ~~t[1];return { redirectUrl: o(s, n) };
      }, { urls: ['https://www.localhost.io/resource/*'] }, ['blocking']), function () {
        var e = s.modules.globalObject.globals.eventListeners.notificationListeners;browserAPI.notifications && (browserAPI.notifications.onClicked.addListener(function (t) {
          var n = e.get(t);n && n.onClick !== void 0 && s.modules.globalObject.globals.sendCallbackMessage(n.tabId, n.tabIndex, n.id, { err: !1, args: [t], callbackId: n.onClick });
        }), browserAPI.notifications.onClosed.addListener(function (t, n) {
          var a = e.get(t);a && a.onDone !== void 0 && s.modules.globalObject.globals.sendCallbackMessage(a.tabId, a.tabIndex, a.id, { err: !1, args: [t, n], callbackId: a.onClick }), e['delete'](t);
        }));
      }(), function () {
        return e(this, void 0, void 0, function () {
          var e;return t(this, function (t) {
            switch (t.label) {case 0:
                return [4, y()];case 1:
                return t.sent(), window.chrome && window.chrome.management && (e = window.chrome.management, e.onInstalled.addListener(y), e.onEnabled.addListener(y), e.onUninstalled.addListener(y), e.onDisabled.addListener(y)), [2];}
          });
        });
      }(), function () {
        var n = this;if (browserAPI.commands) {
          var a = s.modules.globalObject.globals.eventListeners.shortcutListeners;browserAPI.commands.onCommand.addListener(function (s) {
            return e(n, void 0, void 0, function () {
              var e;return t(this, function (t) {
                switch (t.label) {case 0:
                    return [4, f()];case 1:
                    return e = t.sent(), e.forEach(function (e) {
                      if (e.name === s) {
                        var t = e.shortcut.toLowerCase(),
                            n = b(t.split('+'));n.forEach(function (e) {
                          var t = e.join('+');a.has(t) && a.get(t) && a.get(t).forEach(function (e) {
                            e.callback();
                          });
                        });
                      }
                    }), [2];}
              });
            });
          });
        }
      }(), function () {
        browserAPI.webRequest.onBeforeRequest.addListener(function (e) {
          return window.info('Redirecting', e), { redirectUrl: location.protocol + '//' + browserAPI.runtime.id + '/fonts/fonts.css' };
        }, { urls: ['*://fonts.googleapis.com/', '*://fonts.gstatic.com/'] });
      }();
    }, s.runAlwaysRunNodes = a, s.getResourceData = o, s.restoreOpenTabs = function () {
      return e(this, void 0, void 0, function () {
        var n = this,
            a;return t(this, function (o) {
          switch (o.label) {case 0:
              return [4, browserAPI.tabs.query({})];case 1:
              return a = o.sent(), 0 === a.length ? [2] : [4, window.Promise.all(a.map(function (a) {
                return e(n, void 0, void 0, function () {
                  var n = this,
                      o;return t(this, function (r) {
                    switch (r.label) {case 0:
                        return [4, Promise.race([s.modules.Util.iipe(function () {
                          return e(n, void 0, void 0, function () {
                            var e;return t(this, function (t) {
                              switch (t.label) {case 0:
                                  if (!s.modules.Util.canRunOnUrl(a.url)) return [3, 6];t.label = 1;case 1:
                                  return t.trys.push([1, 4,, 5]), [4, browserAPI.tabs.executeScript(a.id, { file: '/js/polyfills/browser.js' })];case 2:
                                  return t.sent(), [4, browserAPI.tabs.executeScript(a.id, { file: '/js/contentscript.js' })];case 3:
                                  return t.sent(), [2, 0];case 4:
                                  return e = t.sent(), [2, 1];case 5:
                                  return [3, 7];case 6:
                                  return [2, 2];case 7:
                                  return [2];}
                            });
                          });
                        }), new window.Promise(function (a) {
                          return e(n, void 0, void 0, function () {
                            return t(this, function (e) {
                              switch (e.label) {case 0:
                                  return [4, s.modules.Util.wait(2500)];case 1:
                                  return e.sent(), a(3), [2];}
                            });
                          });
                        })])];case 1:
                        return o = r.sent(), 0 === o ? window.log('Restored tab with id', a.id) : 1 === o ? window.log('Failed to restore tab with id', a.id) : 2 === o ? window.log('Ignoring tab with id', a.id, '(chrome or file url)') : 3 === o ? window.log('Skipping restoration of tab with id', a.id, 'Tab is frozen, most likely due to user debugging') : void 0, [2];}
                  });
                });
              }))];case 2:
              return o.sent(), [2];}
        });
      });
    };
  })(s || (s = {}));var n = function n(e, t, s, _n) {
    return new (s || (s = Promise))(function (a, o) {
      function r(e) {
        try {
          i(_n.next(e));
        } catch (t) {
          o(t);
        }
      }function l(e) {
        try {
          i(_n['throw'](e));
        } catch (t) {
          o(t);
        }
      }function i(e) {
        e.done ? a(e.value) : new s(function (t) {
          t(e.value);
        }).then(r, l);
      }i((_n = _n.apply(e, t || [])).next());
    });
  },
      a = function a(e, s) {
    function n(e) {
      return function (t) {
        return a([e, t]);
      };
    }function a(n) {
      if (r) throw new TypeError('Generator is already executing.');for (; o;) {
        try {
          if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
              i = n;break;case 4:
              return o.label++, { value: n[1], done: !1 };case 5:
              o.label++, l = n[1], n = [0];continue;case 7:
              n = o.ops.pop(), o.trys.pop();continue;default:
              if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
                o = 0;continue;
              }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                o.label = n[1];break;
              }if (6 === n[0] && o.label < i[1]) {
                o.label = i[1], i = n;break;
              }if (i && o.label < i[2]) {
                o.label = i[2], o.ops.push(n);break;
              }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
        } catch (t) {
          n = [6, t], l = 0;
        } finally {
          r = i = 0;
        }
      }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
    }var o = { label: 0, sent: function sent() {
        if (1 & i[0]) throw i[1];return i[1];
      }, trys: [], ops: [] },
        r,
        l,
        i,
        d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
      return this;
    }), d;
  },
      o;(function (e) {
    var t;(function (t) {
      function s(t, n, a) {
        var o = { type: n, callbackId: t.onFinish, messageType: 'callback', data: a };try {
          var r = e.modules.crmValues.tabData,
              l = r.get(t.tabId).nodes,
              i = l.get(t.id)[t.tabIndex].port;e.modules.Util.postMessage(i, o);
        } catch (n) {
          if ('Converting circular structure to JSON' === n.message) s(t, 'error', 'Converting circular structure to JSON, getting a response from this API will not work');else throw n;
        }
      }t.respond = s, t.sendMessage = function (t) {
        var n = t.data,
            a = e.modules.crmValues.tabData,
            o = a.get(n.toInstanceId),
            r = e.modules.crmValues.nodeInstances,
            l = r.get(n.id).get(n.toInstanceId);if (!(l && o && o.nodes.has(n.id))) s(t, 'error', 'instance no longer exists');else if (l[n.toTabIndex].hasHandler) {
          var i = o.nodes,
              d = i.get(n.id)[n.toTabIndex].port;e.modules.Util.postMessage(d, { messageType: 'instanceMessage', message: n.message }), s(t, 'success');
        } else s(t, 'error', 'no listener exists');
      }, t.changeStatus = function (t) {
        var s = e.modules.crmValues.nodeInstances,
            n = s.get(t.id).get(t.tabId);n[t.tabIndex].hasHandler = t.data.hasHandler;
      };
    })(t = e.Instances || (e.Instances = {}));
  })(o || (o = {})), function (e) {
    var t;(function (t) {
      t.send = function (t) {
        var s = t.message,
            n = t.response;e.modules.background.byId.get(t.id).post({ type: 'comm', message: { type: 'backgroundMessage', message: s, respond: n, tabId: t.tabId } });
      };
    })(t = e.BackgroundPageMessage || (e.BackgroundPageMessage = {}));
  }(o || (o = {})), function (e) {
    var t;(function (t) {
      t.listen = function (t) {
        return n(this, void 0, void 0, function () {
          var s, n;return a(this, function () {
            return s = t.data, n = e.modules.globalObject.globals.eventListeners, n.notificationListeners.set(s.notificationId, { id: s.id, tabId: s.tabId, tabIndex: s.tabIndex, notificationId: s.notificationId, onDone: s.onDone, onClick: s.onClick }), [2];
          });
        });
      };
    })(t = e.NotificationListener || (e.NotificationListener = {}));
  }(o || (o = {})), function (e) {
    function t(t, s, o) {
      return n(this, void 0, void 0, function () {
        var n, r, l;return a(this, function (a) {
          switch (a.label) {case 0:
              return n = null, r = t.type, 'executeCRMCode' === r ? [3, 1] : 'getCRMHints' === r ? [3, 1] : 'createLocalLogVariable' === r ? [3, 1] : 'displayHints' === r ? [3, 2] : 'logCrmAPIValue' === r ? [3, 3] : 'resource' === r ? [3, 5] : 'anonymousLibrary' === r ? [3, 6] : 'updateStorage' === r ? [3, 7] : 'sendInstanceMessage' === r ? [3, 9] : 'sendBackgroundpageMessage' === r ? [3, 10] : 'respondToBackgroundMessage' === r ? [3, 11] : 'changeInstanceHandlerStatus' === r ? [3, 12] : 'addNotificationListener' === r ? [3, 13] : 'newTabCreated' === r ? [3, 15] : 'styleInstall' === r ? [3, 18] : 'updateStylesheet' === r ? [3, 20] : 'updateScripts' === r ? [3, 22] : 'installUserScript' === r ? [3, 24] : 'applyLocalStorage' === r ? [3, 26] : 'getStyles' === r ? [3, 27] : '_resetSettings' === r ? [3, 30] : [3, 32];case 1:
              return e.modules.Logging.LogExecution.executeCRMCode(t.data, t.type), [3, 32];case 2:
              return e.modules.Logging.LogExecution.displayHints(t), [3, 32];case 3:
              return [4, e.modules.Logging.logHandler(t.data)];case 4:
              return a.sent(), [3, 32];case 5:
              return e.modules.Resources.Resource.handle(t.data), [3, 32];case 6:
              return e.modules.Resources.Anonymous.handle(t.data), [3, 32];case 7:
              return [4, e.modules.Storages.applyChanges(t.data)];case 8:
              return a.sent(), [3, 32];case 9:
              return e.Instances.sendMessage(t), [3, 32];case 10:
              return e.BackgroundPageMessage.send(t.data), [3, 32];case 11:
              return e.Instances.respond({ onFinish: t.data.response, tabIndex: t.data.tabIndex, id: t.data.id, tabId: t.data.tabId }, 'success', t.data.message), [3, 32];case 12:
              return e.Instances.changeStatus(t), [3, 32];case 13:
              return [4, e.NotificationListener.listen(t)];case 14:
              return a.sent(), [3, 32];case 15:
              return s && o ? (l = e.modules.crmValues.tabData.has(s.tab.id), e.modules.crmValues.tabData['delete'](s.tab.id), e.modules.crmValues.tabData.set(s.tab.id, { nodes: new window.Map(), libraries: new window.Map() }), [4, e.modules.CRMNodes.Running.executeScriptsForTab(s.tab.id, l)]) : [3, 17];case 16:
              n = a.sent(), a.label = 17;case 17:
              return [3, 32];case 18:
              return [4, e.modules.CRMNodes.Stylesheet.Installing.installStylesheet(t.data)];case 19:
              return a.sent(), [3, 32];case 20:
              return [4, e.modules.CRMNodes.Stylesheet.Updating.updateStylesheet(t.data.id)];case 21:
              return a.sent(), [3, 32];case 22:
              return [4, e.modules.CRMNodes.Script.Updating.updateScripts()];case 23:
              return n = a.sent(), [3, 32];case 24:
              return [4, e.modules.CRMNodes.Script.Updating.install(t.data)];case 25:
              return a.sent(), [3, 32];case 26:
              return localStorage.setItem(t.data.key, t.data.value), [3, 32];case 27:
              return s && o ? [4, e.modules.CRMNodes.Stylesheet.Installing.getInstalledStatus(t.data.url)] : [3, 29];case 28:
              n = a.sent(), a.label = 29;case 29:
              return [3, 32];case 30:
              return e.modules.Storages.clearStorages(), [4, e.modules.Storages.loadStorages()];case 31:
              return a.sent(), [3, 32];case 32:
              return o && o(n), [2];}
        });
      });
    }function s(e, s, n, a) {
      return t(e, s, n).then(function () {
        a && a(null);
      }), !0;
    }e.initModule = function (t) {
      e.modules = t;
    }, e.handleRuntimeMessageInitial = s, e.handleCrmAPIMessage = function (t) {
      return n(this, void 0, void 0, function () {
        var n;return a(this, function (a) {
          switch (a.label) {case 0:
              return n = t.type, 'crmapi' === n ? [3, 1] : 'chrome' === n ? [3, 2] : 'browser' === n ? [3, 2] : [3, 4];case 1:
              return new e.modules.CRMAPICall.Instance(t, t.action), [3, 6];case 2:
              return [4, e.modules.BrowserHandler.handle(t)];case 3:
              return a.sent(), [3, 6];case 4:
              return [4, new Promise(function (e) {
                s(t, null, null, e);
              })];case 5:
              return a.sent(), [3, 6];case 6:
              return [2];}
        });
      });
    }, e.signalNewCRM = function () {
      return n(this, void 0, void 0, function () {
        var t, s;return a(this, function (n) {
          switch (n.label) {case 0:
              return [4, e.modules.CRMNodes.converToLegacy()];case 1:
              return t = n.sent(), s = e.modules.crmValues.tabData, e.modules.Util.iterateMap(s, function (s, n) {
                var a = n.nodes;e.modules.Util.iterateMap(a, function (s, n) {
                  n.forEach(function (n) {
                    if (n.usesLocalStorage && e.modules.crm.crmById.get(s).isLocal) try {
                      e.modules.Util.postMessage(n.port, { messageType: 'localStorageProxy', message: t });
                    } catch (t) {}
                  });
                });
              }), [2];}
        });
      });
    };
  }(o || (o = {}));var r = Object.assign || function (e) {
    for (var t = 1, a = arguments.length, n; t < a; t++) {
      for (var s in n = arguments[t], n) {
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
      }
    }return e;
  },
      l = function l(e, t, s, n) {
    return new (s || (s = Promise))(function (a, o) {
      function r(e) {
        try {
          i(n.next(e));
        } catch (t) {
          o(t);
        }
      }function l(e) {
        try {
          i(n['throw'](e));
        } catch (t) {
          o(t);
        }
      }function i(e) {
        e.done ? a(e.value) : new s(function (t) {
          t(e.value);
        }).then(r, l);
      }i((n = n.apply(e, t || [])).next());
    });
  },
      d = function d(e, s) {
    function n(e) {
      return function (t) {
        return a([e, t]);
      };
    }function a(n) {
      if (r) throw new TypeError('Generator is already executing.');for (; o;) {
        try {
          if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
              i = n;break;case 4:
              return o.label++, { value: n[1], done: !1 };case 5:
              o.label++, l = n[1], n = [0];continue;case 7:
              n = o.ops.pop(), o.trys.pop();continue;default:
              if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
                o = 0;continue;
              }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                o.label = n[1];break;
              }if (6 === n[0] && o.label < i[1]) {
                o.label = i[1], i = n;break;
              }if (i && o.label < i[2]) {
                o.label = i[2], o.ops.push(n);break;
              }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
        } catch (t) {
          n = [6, t], l = 0;
        } finally {
          r = i = 0;
        }
      }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
    }var o = { label: 0, sent: function sent() {
        if (1 & i[0]) throw i[1];return i[1];
      }, trys: [], ops: [] },
        r,
        l,
        i,
        d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
      return this;
    }), d;
  },
      i;(function (e) {
    e.initModule = function (t, s) {
      e.modules = s;
    }, e._doesLibraryExist = function (t) {
      for (var s = 0, n = e.modules.storages.storageLocal.libraries, a; s < n.length; s++) {
        if (a = n[s].name, a.toLowerCase() === t.name.toLowerCase()) return a;
      }return !1;
    }, e._isAlreadyUsed = function (e, t) {
      for (var s = 0, n = e.value.libraries, a; s < n.length; s++) {
        if (a = n[s].name, a === (t.name || null)) return !0;
      }return !1;
    };
  })(i || (i = {})), function (e) {
    var t;(function (t) {
      function s(t, s, n, a, o) {
        o ? e.modules.Util.setMapDefault(e.modules.crmValues.contextMenuGlobalOverrides, t, {}) : e.modules.crmValues.nodeTabStatuses.has(t) ? e.modules.crmValues.nodeTabStatuses.get(t).tabs.has(s) ? !e.modules.crmValues.nodeTabStatuses.get(t).tabs.get(s).overrides && (e.modules.crmValues.nodeTabStatuses.get(t).tabs.get(s).overrides = {}) : e.modules.crmValues.nodeTabStatuses.get(t).tabs.set(s, { overrides: {} }) : e.modules.crmValues.nodeTabStatuses.set(t, { tabs: new window.Map([[s, { overrides: {} }]]) });var r = o ? e.modules.crmValues.contextMenuGlobalOverrides.get(t) : e.modules.crmValues.nodeTabStatuses.get(t).tabs.get(s).overrides;for (var l in n) {
          var i = l;r[i] = n[i];
        }var d = e.modules.crmValues.contextMenuIds.get(t);d && browserAPI.contextMenus.update(d, a)['catch'](function () {});
      }t.setType = function (e) {
        e.typeCheck([{ val: 'itemType', type: 'string' }, { val: 'allTabs', type: 'boolean', optional: !0 }], function () {
          var t = e.message.data,
              n = t.itemType,
              a = t.allTabs;return -1 === ['normal', 'checkbox', 'radio', 'separator'].indexOf(n) ? void e.respondError('Item type is not one of "normal", "checkbox", "radio" or"separator"') : void (s(e.message.id, e.message.tabId, { type: n }, { type: n }, void 0 !== a && a), e.respondSuccess(null));
        });
      }, t.setChecked = function (t) {
        t.typeCheck([{ val: 'checked', type: 'boolean' }, { val: 'allTabs', type: 'boolean', optional: !0 }], function () {
          var n = t.message.data,
              a = n.checked,
              o = n.allTabs,
              l = e.modules.crmValues.contextMenuGlobalOverrides.get(t.message.id),
              i = e.modules.crmValues.nodeTabStatuses.get(t.message.id) && e.modules.crmValues.nodeTabStatuses.get(t.message.id).tabs.get(t.message.tabId) && e.modules.crmValues.nodeTabStatuses.get(t.message.id).tabs.get(t.message.tabId).overrides || {},
              d = r({}, l, i),
              c = 'checkbox' !== d.type && 'radio' !== d.type,
              u = r({ checked: a }, c ? { type: 'checkbox' } : {});s(t.message.id, t.message.tabId, u, u, void 0 !== o && o), t.respondSuccess(null);
        });
      }, t.setContentTypes = function (e) {
        e.typeCheck([{ val: 'contentTypes', type: 'array' }, { val: 'allTabs', type: 'boolean', optional: !0 }], function () {
          for (var t = e.message.data, n = t.contentTypes, a = t.allTabs, o = void 0 !== a && a, r = ['page', 'link', 'selection', 'image', 'video', 'audio'], l = 0, i = n, d; l < i.length; l++) {
            if (d = i[l], -1 === r.indexOf(d)) return void e.respondError('Not all content types are one of "page", "link", "selection", "image", "video", "audio"');
          }s(e.message.id, e.message.tabId, { contentTypes: n }, { contexts: n }, o), e.respondSuccess(null);
        });
      }, t.setVisibility = function (t) {
        t.typeCheck([{ val: 'isVisible', type: 'boolean' }, { val: 'allTabs', type: 'boolean', optional: !0 }], function () {
          t.getNodeFromId(t.message.id).run(function (n) {
            var a = t.message.data,
                o = a.isVisible,
                r = a.allTabs;return 1 === n.value.launchMode || 2 === n.value.launchMode || 4 === n.value.launchMode ? void t.respondError('A node that is not shown by default can not change its hidden status') : void (s(t.message.id, t.message.tabId, { isVisible: o }, 'chrome' === BrowserAPI.getBrowser() && 62 <= e.modules.Util.getChromeVersion() ? { visible: o } : {}, void 0 !== r && r), t.respondSuccess(null));
          });
        });
      }, t.setDisabled = function (e) {
        e.typeCheck([{ val: 'isDisabled', type: 'boolean' }, { val: 'allTabs', type: 'boolean', optional: !0 }], function () {
          var t = e.message.data,
              n = t.isDisabled,
              a = t.allTabs;s(e.message.id, e.message.tabId, { isDisabled: n }, { enabled: !n }, void 0 !== a && a), e.respondSuccess(null);
        });
      }, t.setName = function (e) {
        e.checkPermissions(['crmContextmenu'], function () {
          e.typeCheck([{ val: 'name', type: 'string' }, { val: 'allTabs', type: 'boolean', optional: !0 }], function () {
            var t = e.message.data,
                n = t.name,
                a = t.allTabs;s(e.message.id, e.message.tabId, { name: n }, { title: n }, void 0 !== a && a), e.respondSuccess(null);
          });
        });
      }, t.resetName = function (e) {
        e.typeCheck([{ val: 'itemType', type: 'string' }, { val: 'allTabs', type: 'boolean', optional: !0 }], function () {
          e.getNodeFromId(e.message.data.nodeId).run(function (t) {
            var n = e.message.data.allTabs;s(e.message.id, e.message.tabId, { name: t.name }, { title: t.name }, void 0 !== n && n), e.respondSuccess(null);
          });
        });
      };
    })(t = e.contextMenuItem || (e.contextMenuItem = {}));
  }(i || (i = {})), function (e) {
    var t;(function (t) {
      t.getRootContextMenuId = function (t) {
        t.respondSuccess(e.modules.crmValues.rootId);
      }, t.getTree = function (t) {
        t.checkPermissions(['crmGet'], function () {
          t.respondSuccess(e.modules.crm.safeTree);
        });
      }, t.getSubTree = function (t) {
        t.checkPermissions(['crmGet'], function () {
          var s = t.message.data.nodeId;if ('number' === typeof s) {
            var n = e.modules.crm.crmByIdSafe.get(s);n ? t.respondSuccess([n]) : t.respondError('There is no node with id ' + s);
          } else t.respondError('No nodeId supplied');
        });
      }, t.getNode = function (t) {
        t.checkPermissions(['crmGet'], function () {
          var s = t.message.data.nodeId;if ('number' === typeof s) {
            var n = e.modules.crm.crmByIdSafe.get(s);n ? t.respondSuccess(n) : t.respondError('There is no node with id ' + s);
          } else t.respondError('No nodeId supplied');
        });
      }, t.getNodeIdFromPath = function (t) {
        t.checkPermissions(['crmGet'], function () {
          e.modules.CRMNodes.buildNodePaths(e.modules.crm.crmTree);var s = t.message.data.path,
              n = t.lookup(s, e.modules.crm.safeTree, !1);if (!0 === n) return !1;if (!1 === n) return t.respondError('Path does not return a valid value'), !1;var a = n;return t.respondSuccess(a.id), a.id;
        });
      }, t.queryCrm = function (t) {
        t.checkPermissions(['crmGet'], function () {
          t.typeCheck([{ val: 'query', type: 'object' }, { val: 'query.type', type: 'string', optional: !0 }, { val: 'query.inSubTree', type: 'number', optional: !0 }, { val: 'query.name', type: 'string', optional: !0 }], function (s) {
            var n = t.message.data.query,
                a = [];e.modules.Util.iterateMap(e.modules.crm.crmByIdSafe, function (e, t) {
              a.push(t);
            });var o = null;if (s['query.inSubTree']) {
              var r = t.getNodeFromId(n.inSubTree, !0, !0),
                  l = [];if (r) {
                l = r.children;
              }o = [], l.forEach(function (t) {
                e.modules.Util.flattenCrm(o, t);
              });
            }o = o || a;var i = o;s['query.type'] && (i = i.filter(function (e) {
              return e.type === n.type;
            })), s['query.name'] && (i = i.filter(function (e) {
              return e.name === n.name;
            })), i = i.filter(function (e) {
              return null !== e;
            }), t.respondSuccess(i);
          });
        });
      }, t.getParentNode = function (t) {
        t.checkPermissions(['crmGet'], function () {
          t.getNodeFromId(t.message.data.nodeId).run(function (s) {
            e.modules.CRMNodes.buildNodePaths(e.modules.crm.crmTree);var n = JSON.parse(JSON.stringify(s.path));if (n.pop(), 0 === n.length) t.respondSuccess(e.modules.crm.safeTree);else {
              var a = t.lookup(n, e.modules.crm.safeTree, !1);t.respondSuccess(a);
            }
          });
        });
      }, t.getNodeType = function (e) {
        e.checkPermissions(['crmGet'], function () {
          e.getNodeFromId(e.message.data.nodeId, !0).run(function (t) {
            e.respondSuccess(t.type);
          });
        });
      }, t.getNodeValue = function (e) {
        e.checkPermissions(['crmGet'], function () {
          e.getNodeFromId(e.message.data.nodeId, !0).run(function (t) {
            e.respondSuccess(t.value);
          });
        });
      }, t.createNode = function (t) {
        var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
          t.typeCheck([{ val: 'options', type: 'object' }, { val: 'options.usesTriggers', type: 'boolean', optional: !0 }, { val: 'options.triggers', type: 'array', forChildren: [{ val: 'url', type: 'string' }], optional: !0 }, { val: 'options.linkData', type: 'array', forChildren: [{ val: 'url', type: 'string' }, { val: 'newTab', type: 'boolean', optional: !0 }], optional: !0 }, { val: 'options.scriptData', type: 'object', optional: !0 }, { dependency: 'options.scriptData', val: 'options.scriptData.script', type: 'string' }, { dependency: 'options.scriptData', val: 'options.scriptData.launchMode', type: 'number', optional: !0, min: 0, max: 3 }, { dependency: 'options.scriptData', val: 'options.scriptData.triggers', type: 'array', optional: !0, forChildren: [{ val: 'url', type: 'string' }] }, { dependency: 'options.scriptData', val: 'options.scriptData.libraries', type: 'array', optional: !0, forChildren: [{ val: 'name', type: 'string' }] }, { val: 'options.stylesheetData', type: 'object', optional: !0 }, { dependency: 'options.stylesheetData', val: 'options.stylesheetData.launchMode', type: 'number', min: 0, max: 3, optional: !0 }, { dependency: 'options.stylesheetData', val: 'options.stylesheetData.triggers', type: 'array', forChildren: [{ val: 'url', type: 'string' }], optional: !0 }, { dependency: 'options.stylesheetData', val: 'options.stylesheetData.toggle', type: 'boolean', optional: !0 }, { dependency: 'options.stylesheetData', val: 'options.stylesheetData.defaultOn', type: 'boolean', optional: !0 }, { val: 'options.value', type: 'object', optional: !0 }], function () {
            return l(s, void 0, void 0, function () {
              var s, n, a, o, l, i, c;return d(this, function (d) {
                switch (d.label) {case 0:
                    return [4, e.modules.Util.generateItemId()];case 1:
                    if (s = d.sent(), n = t.getNodeFromId(t.message.id, !1, !0), !n) return [2, !1];switch (a = n.nodeInfo, o = n.isLocal, l = r({}, e.modules.CRMNodes.makeSafe(t.message.data.options), { id: s, isLocal: o, nodeInfo: a }), c = e.modules.constants.templates, t.message.data.options.type) {case 'script':
                        i = c.getDefaultScriptNode(l), i.type = 'script';break;case 'stylesheet':
                        i = c.getDefaultStylesheetNode(l), i.type = 'stylesheet';break;case 'menu':
                        i = c.getDefaultMenuNode(l), i.type = 'menu';break;case 'divider':
                        i = c.getDefaultDividerNode(l), i.type = 'divider';break;default:case 'link':
                        i = c.getDefaultLinkNode(l), i.type = 'link';}return [4, t.moveNode(i, t.message.data.options.position)];case 2:
                    return (i = d.sent()) ? [4, e.modules.CRMNodes.updateCrm([i.id])] : [3, 4];case 3:
                    return d.sent(), t.respondSuccess(t.getNodeFromId(i.id, !0, !0)), [3, 5];case 4:
                    t.respondError('Failed to place node'), d.label = 5;case 5:
                    return [2, !0];}
              });
            });
          });
        });
      }, t.copyNode = function (t) {
        var s = this;return t.checkPermissions(['crmGet', 'crmWrite'], function () {
          t.typeCheck([{ val: 'options', type: 'object' }, { val: 'options.name', type: 'string', optional: !0 }], function (n) {
            return t.getNodeFromId(t.message.data.nodeId, !0).run(function (a) {
              return l(s, void 0, void 0, function () {
                var s = this,
                    o,
                    r,
                    i,
                    c;return d(this, function (u) {
                  switch (u.label) {case 0:
                      return o = JSON.parse(JSON.stringify(a)), r = o, [4, e.modules.Util.generateItemId()];case 1:
                      return r.id = u.sent(), [4, e.modules.Util.crmForEachAsync(o.children || [], function (t) {
                        return l(s, void 0, void 0, function () {
                          var s;return d(this, function (n) {
                            switch (n.label) {case 0:
                                return s = t, [4, e.modules.Util.generateItemId()];case 1:
                                return s.id = n.sent(), delete t.storage, delete t.file, [2];}
                          });
                        });
                      })];case 2:
                      return u.sent(), i = t.getNodeFromId(t.message.id, !1, !0, !0), !0 === i.isLocal && !0 === a.isLocal ? (o.isLocal = !0, e.modules.Util.crmForEach(o.children || [], function (e) {
                        e.isLocal = !0;
                      })) : e.modules.Util.crmForEach(o.children || [], function (e) {
                        e.isLocal = !1;
                      }), o.nodeInfo = i.nodeInfo, delete o.storage, delete o.file, n['options.name'] && (o.name = t.message.data.options.name), [4, t.moveNode(o, t.message.data.options.position)];case 3:
                      return c = u.sent(), c && e.modules.CRMNodes.updateCrm([o.id]).then(function () {
                        t.respondSuccess(t.getNodeFromId(o.id, !0, !0));
                      }), [2, !0];}
                });
              });
            }), !0;
          });
        }), !0;
      }, t.moveNode = function (t) {
        var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
          t.getNodeFromId(t.message.data.nodeId).run(function (n) {
            return l(s, void 0, void 0, function () {
              var s;return d(this, function (a) {
                switch (a.label) {case 0:
                    return e.modules.CRMNodes.buildNodePaths(e.modules.crm.crmTree), s = t.lookup(n.path, e.modules.crm.crmTree, !0), 'boolean' !== typeof s && s ? [4, t.moveNode(n, t.message.data.position, { children: s, id: n.id })] : (t.respondError('Something went wrong removing the source node'), [2]);case 1:
                    return (n = a.sent()) && e.modules.CRMNodes.updateCrm().then(function () {
                      t.respondSuccess(t.getNodeFromId(n.id, !0, !0));
                    }), [2];}
              });
            });
          });
        });
      }, t.deleteNode = function (t) {
        var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
          t.getNodeFromId(t.message.data.nodeId).run(function (n) {
            return l(s, void 0, void 0, function () {
              var s;return d(this, function (a) {
                switch (a.label) {case 0:
                    return e.modules.CRMNodes.buildNodePaths(e.modules.crm.crmTree), s = t.lookup(n.path, e.modules.crm.crmTree, !0), s.splice(n.path[n.path.length - 1], 1), void 0 === e.modules.crmValues.contextMenuIds.get(n.id) ? [3, 3] : [4, browserAPI.contextMenus.remove(e.modules.crmValues.contextMenuIds.get(n.id))];case 1:
                    return a.sent(), [4, e.modules.CRMNodes.updateCrm([t.message.data.nodeId])];case 2:
                    return a.sent(), t.respondSuccess(!0), [3, 5];case 3:
                    return [4, e.modules.CRMNodes.updateCrm([t.message.data.nodeId])];case 4:
                    a.sent(), t.respondSuccess(!0), a.label = 5;case 5:
                    return [2];}
              });
            });
          });
        });
      }, t.editNode = function (t) {
        t.checkPermissions(['crmGet', 'crmWrite'], function () {
          t.typeCheck([{ val: 'options', type: 'object' }, { val: 'options.name', type: 'string', optional: !0 }, { val: 'options.type', type: 'string', optional: !0 }], function (s) {
            t.getNodeFromId(t.message.data.nodeId).run(function (n) {
              var a = t.message.data;if (s['options.type']) {
                if ('link' !== t.message.data.options.type && 'script' !== t.message.data.options.type && 'stylesheet' !== t.message.data.options.type && 'menu' !== t.message.data.options.type && 'divider' !== t.message.data.options.type) return t.respondError('Given type is not a possible type to switch to, use either script, stylesheet, link, menu or divider'), !1;var o = n.type.toLowerCase();n.type = t.message.data.options.type, 'menu' === o ? (n.menuVal = n.children, n.value = n[a.options.type + 'Val'] || {}) : (n[o + 'Val'] = n.value, n.value = n[a.options.type + 'Val'] || {}), 'menu' === n.type && (n.children = n.value || [], n.value = null);
              }return s['options.name'] && (n.name = t.message.data.options.name), e.modules.CRMNodes.updateCrm([t.message.id]).then(function () {
                t.respondSuccess(e.modules.Util.safe(n));
              }), !0;
            });
          });
        });
      }, t.getTriggers = function (e) {
        e.checkPermissions(['crmGet'], function () {
          e.getNodeFromId(e.message.data.nodeId).run(function (t) {
            e.respondSuccess(t.triggers);
          });
        });
      }, t.setTriggers = function (t) {
        var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
          t.typeCheck([{ val: 'triggers', type: 'array', forChildren: [{ val: 'url', type: 'string' }] }], function () {
            t.getNodeFromId(t.message.data.nodeId).run(function (n) {
              return l(s, void 0, void 0, function () {
                var s, a, o, r, l, i, c, u, p, g, m, h, y;return d(this, function (d) {
                  switch (d.label) {case 0:
                      return s = t.message.data, a = s.triggers, n.showOnSpecified = !0, [4, e.modules.CRMNodes.updateCrm()];case 1:
                      if (d.sent(), o = [], e.modules.crmValues.hideNodesOnPagesData.set(n.id, []), ('script' === n.type || 'stylesheet' === n.type) && 2 === n.value.launchMode) {
                        for (r = 0, l = a; r < l.length; r++) {
                          if (i = l[r], c = e.modules.URLParsing.validatePatternUrl(i.url), !c) return t.respondSuccess('Triggers don\'t match URL scheme'), [2];
                        }
                      } else for (u = ('script' === n.type || 'stylesheet' === n.type) && 2 === n.value.launchMode, p = 0, g = a; p < g.length; p++) {
                        if (m = g[p], h = m.url, y = m.not, !e.modules.URLParsing.triggerMatchesScheme(h)) return t.respondError('Triggers don\'t match URL scheme'), [2];h = e.modules.URLParsing.prepareTrigger(h), u && (y ? e.modules.crmValues.hideNodesOnPagesData.get(n.id).push({ not: !1, url: h }) : o.push(h));
                      }return n.triggers = a, 0 === o.length && (o[0] = '<all_urls>'), e.modules.crmValues.contextMenuIds.has(n.id) ? [4, browserAPI.contextMenus.update(e.modules.crmValues.contextMenuIds.get(n.id), { documentUrlPatterns: o })] : [3, 3];case 2:
                      d.sent(), d.label = 3;case 3:
                      return [4, e.modules.CRMNodes.updateCrm()];case 4:
                      return d.sent(), t.respondSuccess(e.modules.Util.safe(n)), [2];}
                });
              });
            });
          });
        });
      }, t.getTriggerUsage = function (e) {
        e.checkPermissions(['crmGet'], function () {
          e.getNodeFromId(e.message.data.nodeId).run(function (t) {
            'menu' === t.type || 'link' === t.type || 'divider' === t.type ? e.respondSuccess(t.showOnSpecified) : e.respondError('Node is not of right type, can only be menu, link or divider');
          });
        });
      }, t.setTriggerUsage = function (t) {
        var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
          t.typeCheck([{ val: 'useTriggers', type: 'boolean' }], function () {
            var n = t.message.data;t.getNodeFromId(t.message.data.nodeId).run(function (a) {
              return l(s, void 0, void 0, function () {
                return d(this, function (s) {
                  switch (s.label) {case 0:
                      return 'menu' !== a.type && 'link' !== a.type && 'divider' !== a.type ? [3, 3] : (a.showOnSpecified = n.useTriggers, [4, e.modules.CRMNodes.updateCrm()]);case 1:
                      return s.sent(), e.modules.crmValues.contextMenuIds.has(a.id) && browserAPI.contextMenus.update(e.modules.crmValues.contextMenuIds.get(a.id), { documentUrlPatterns: ['<all_urls>'] }), [4, e.modules.CRMNodes.updateCrm()];case 2:
                      return s.sent(), t.respondSuccess(e.modules.Util.safe(a)), [3, 4];case 3:
                      t.respondError('Node is not of right type, can only be menu, link or divider'), s.label = 4;case 4:
                      return [2];}
                });
              });
            });
          });
        });
      }, t.getContentTypes = function (e) {
        e.checkPermissions(['crmGet'], function () {
          e.getNodeFromId(e.message.data.nodeId).run(function (t) {
            e.respondSuccess(t.onContentTypes);
          });
        });
      }, t.setContentType = function (t) {
        var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
          t.typeCheck([{ val: 'index', type: ['number', 'string'], min: 0, max: 5 }, { val: 'value', type: 'boolean' }], function () {
            var n = t.message.data,
                a = ['page', 'link', 'selection', 'image', 'video', 'audio'];if ('string' === typeof n.index) {
              if (-1 === a.indexOf(n.index)) return void t.respondError('Index is not in index array ([page, link, selection, image, video, audio])');n.index = a.indexOf(n.index);
            }t.getNodeFromId(t.message.data.nodeId).run(function (a) {
              return l(s, void 0, void 0, function () {
                return d(this, function (s) {
                  switch (s.label) {case 0:
                      return a.onContentTypes[n.index] = n.value, [4, e.modules.CRMNodes.updateCrm()];case 1:
                      return s.sent(), [4, browserAPI.contextMenus.update(e.modules.crmValues.contextMenuIds.get(a.id), { contexts: e.modules.CRMNodes.getContexts(a.onContentTypes) })];case 2:
                      return s.sent(), [4, e.modules.CRMNodes.updateCrm()];case 3:
                      return s.sent(), t.respondSuccess(a.onContentTypes), [2];}
                });
              });
            });
          });
        });
      }, t.setContentTypes = function (t) {
        var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
          t.typeCheck([{ val: 'contentTypes', type: 'array' }], function () {
            t.getNodeFromId(t.message.data.nodeId).run(function (n) {
              return l(s, void 0, void 0, function () {
                var s, a, o, r, l, c;return d(this, function (i) {
                  switch (i.label) {case 0:
                      if (s = t.message.data, 6 !== s.contentTypes.length) return t.respondError('Content type array is not of length 6'), [2, !1];for (a = 0, o = s.contentTypes; a < o.length; a++) {
                        if (r = o[a], 'boolean' !== typeof r) return t.respondError('Not all values in array contentTypes are of type string'), [2, !1];
                      }for (c in l = [!1, !1, !1, !1, !1, !1], s.contentTypes) {
                        l[c] = s.contentTypes[c];
                      }return n.onContentTypes = l, [4, browserAPI.contextMenus.update(e.modules.crmValues.contextMenuIds.get(n.id), { contexts: e.modules.CRMNodes.getContexts(n.onContentTypes) })];case 1:
                      return i.sent(), [4, e.modules.CRMNodes.updateCrm()];case 2:
                      return i.sent(), t.respondSuccess(e.modules.Util.safe(n)), [2, !0];}
                });
              });
            });
          });
        });
      }, t.setLaunchMode = function (t) {
        var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
          t.typeCheck([{ val: 'launchMode', type: 'number', min: 0, max: 4 }], function () {
            t.getNodeFromId(t.message.data.nodeId).run(function (n) {
              return l(s, void 0, void 0, function () {
                var s;return d(this, function (a) {
                  switch (a.label) {case 0:
                      if (s = t.message.data, 'script' === n.type || 'stylesheet' === n.type) n.value.launchMode = s.launchMode;else return t.respondError('Node is not of type script or stylesheet'), [2, !1];return [4, e.modules.CRMNodes.updateCrm()];case 1:
                      return a.sent(), t.respondSuccess(e.modules.Util.safe(n)), [2, !0];}
                });
              });
            });
          });
        });
      }, t.getLaunchMode = function (e) {
        e.checkPermissions(['crmGet'], function () {
          e.getNodeFromId(e.message.data.nodeId).run(function (t) {
            'script' === t.type || 'stylesheet' === t.type ? e.respondSuccess(t.value.launchMode) : e.respondError('Node is not of type script or stylesheet');
          });
        });
      };
    })(t = e.crm || (e.crm = {}));
  }(i || (i = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        t.setStylesheet = function (t) {
          var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
            t.typeCheck([{ val: 'stylesheet', type: 'string' }], function () {
              t.getNodeFromId(t.message.data.nodeId).run(function (n) {
                return l(s, void 0, void 0, function () {
                  var s;return d(this, function (a) {
                    switch (a.label) {case 0:
                        return s = t.message.data.stylesheet, 'stylesheet' === n.type ? n.value.stylesheet = s : (n.stylesheetVal = n.stylesheetVal || e.modules.constants.templates.getDefaultStylesheetValue(), n.stylesheetVal.stylesheet = s), [4, e.modules.CRMNodes.updateCrm()];case 1:
                        return a.sent(), t.respondSuccess(e.modules.Util.safe(n)), [2, !0];}
                  });
                });
              });
            });
          });
        }, t.getStylesheet = function (e) {
          e.checkPermissions(['crmGet'], function () {
            e.getNodeFromId(e.message.data.nodeId, !0).run(function (t) {
              'stylesheet' === t.type ? e.respondSuccess(t.value.stylesheet) : t.stylesheetVal ? e.respondSuccess(t.stylesheetVal.stylesheet) : e.respondSuccess(void 0);
            });
          });
        };
      })(s = t.stylesheet || (t.stylesheet = {}));
    })(t = e.crm || (e.crm = {}));
  }(i || (i = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        t.getLinks = function (e) {
          e.checkPermissions(['crmGet'], function () {
            e.getNodeFromId(e.message.data.nodeId).run(function (t) {
              return 'link' === t.type ? e.respondSuccess(t.value) : e.respondSuccess(t.linkVal), !0;
            });
          });
        }, t.setLinks = function (t) {
          t.checkPermissions(['crmGet', 'crmWrite'], function () {
            t.typeCheck([{ val: 'items', type: ['object', 'array'], forChildren: [{ val: 'newTab', type: 'boolean', optional: !0 }, { val: 'url', type: 'string' }] }], function () {
              t.getNodeFromId(t.message.data.nodeId).run(function (s) {
                var n = t.message.data,
                    a = n.items;if (Array.isArray(a)) {
                  'link' !== s.type && (s.linkVal = s.linkVal || []), s.value = [];for (var o = 0, r = a, l; o < r.length; o++) {
                    l = r[o], l.newTab = !!l.newTab, 'link' === s.type ? s.value.push(l) : (s.linkVal = s.linkVal || [], s.linkVal.push(l));
                  }
                } else {
                  if (a.newTab = !!a.newTab, !a.url) return t.respondError('For not all values in the array items is the property url defined'), !1;'link' === s.type ? s.value = [a] : s.linkVal = [a];
                }return e.modules.CRMNodes.updateCrm().then(function () {
                  'link' === s.type ? t.respondSuccess(e.modules.Util.safe(s).value) : t.respondSuccess(e.modules.Util.safe(s).linkVal);
                }), !0;
              });
            });
          });
        }, t.push = function (t) {
          t.checkPermissions(['crmGet', 'crmWrite'], function () {
            t.typeCheck([{ val: 'items', type: ['object', 'array'], forChildren: [{ val: 'newTab', type: 'boolean', optional: !0 }, { val: 'url', type: 'string' }] }], function () {
              t.getNodeFromId(t.message.data.nodeId).run(function (s) {
                var n = t.message.data,
                    a = n.items;if (Array.isArray(a)) {
                  'link' !== s.type && (s.linkVal = s.linkVal || []);for (var o = 0, r = a, l; o < r.length; o++) {
                    l = r[o], l.newTab = !!l.newTab, 'link' === s.type ? s.value.push(l) : (s.linkVal = s.linkVal || [], s.linkVal.push(l));
                  }
                } else {
                  if (a.newTab = !!a.newTab, !a.url) return t.respondError('For not all values in the array items is the property url defined'), !1;'link' === s.type ? s.value.push(a) : (s.linkVal = s.linkVal || [], s.linkVal.push(a));
                }return e.modules.CRMNodes.updateCrm().then(function () {
                  'link' === s.type ? t.respondSuccess(e.modules.Util.safe(s).value) : t.respondSuccess(e.modules.Util.safe(s).linkVal);
                }), !0;
              });
            });
          });
        }, t.splice = function (t) {
          var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
            t.getNodeFromId(t.message.data.nodeId).run(function (n) {
              t.typeCheck([{ val: 'start', type: 'number' }, { val: 'amount', type: 'number' }], function () {
                return l(s, void 0, void 0, function () {
                  var s, a;return d(this, function (o) {
                    switch (o.label) {case 0:
                        return (s = t.message.data, 'link' !== n.type) ? [3, 2] : (a = n.value.splice(s.start, s.amount), [4, e.modules.CRMNodes.updateCrm()]);case 1:
                        return o.sent(), t.respondSuccess({ spliced: a, newArr: e.modules.Util.safe(n).value }), [3, 4];case 2:
                        return n.linkVal = n.linkVal || [], a = n.linkVal.splice(s.start, s.amount), [4, e.modules.CRMNodes.updateCrm()];case 3:
                        o.sent(), t.respondSuccess({ spliced: a, newArr: e.modules.Util.safe(n).linkVal }), o.label = 4;case 4:
                        return [2];}
                  });
                });
              });
            });
          });
        };
      })(s = t.link || (t.link = {}));
    })(t = e.crm || (e.crm = {}));
  }(i || (i = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        t.setScript = function (t) {
          var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
            t.typeCheck([{ val: 'script', type: 'string' }], function () {
              var n = t.message.data.script;t.getNodeFromId(t.message.data.nodeId).run(function (a) {
                return l(s, void 0, void 0, function () {
                  return d(this, function (s) {
                    switch (s.label) {case 0:
                        return 'script' === a.type ? a.value.script = n : (a.scriptVal = a.scriptVal || e.modules.constants.templates.getDefaultScriptValue(), a.scriptVal.script = n), [4, e.modules.CRMNodes.updateCrm()];case 1:
                        return s.sent(), t.respondSuccess(e.modules.Util.safe(a)), [2, !0];}
                  });
                });
              });
            });
          });
        }, t.getScript = function (e) {
          e.checkPermissions(['crmGet'], function () {
            e.getNodeFromId(e.message.data.nodeId, !0).run(function (t) {
              'script' === t.type ? e.respondSuccess(t.value.script) : t.scriptVal ? e.respondSuccess(t.scriptVal.script) : e.respondSuccess(void 0);
            });
          });
        }, t.setBackgroundScript = function (t) {
          var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
            t.typeCheck([{ val: 'script', type: 'string' }], function () {
              var n = t.message.data.script;t.getNodeFromId(t.message.data.nodeId).run(function (a) {
                return l(s, void 0, void 0, function () {
                  return d(this, function (s) {
                    switch (s.label) {case 0:
                        return 'script' === a.type ? a.value.backgroundScript = n : (a.scriptVal = a.scriptVal || e.modules.constants.templates.getDefaultScriptValue(), a.scriptVal.backgroundScript = n), [4, e.modules.CRMNodes.updateCrm([t.message.data.nodeId])];case 1:
                        return s.sent(), t.respondSuccess(e.modules.Util.safe(a)), [2, !0];}
                  });
                });
              });
            });
          });
        }, t.getBackgroundScript = function (t) {
          var s = this;t.checkPermissions(['crmGet'], function () {
            t.getNodeFromId(t.message.data.nodeId, !0).run(function (n) {
              return l(s, void 0, void 0, function () {
                var s, a;return d(this, function (o) {
                  switch (o.label) {case 0:
                      return 'script' === n.type ? (a = (s = t).respondSuccess, [4, e.modules.Util.getScriptNodeScript(n, 'background')]) : [3, 2];case 1:
                      return a.apply(s, [o.sent()]), [3, 3];case 2:
                      n.scriptVal ? t.respondSuccess(n.scriptVal.backgroundScript) : t.respondSuccess(void 0), o.label = 3;case 3:
                      return [2];}
                });
              });
            });
          });
        };
      })(s = t.script || (t.script = {}));
    })(t = e.crm || (e.crm = {}));
  }(i || (i = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        var s;(function (t) {
          t.push = function (t) {
            var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
              t.typeCheck([{ val: 'libraries', type: ['object', 'array'], forChildren: [{ val: 'name', type: 'string' }] }, { val: 'libraries.name', type: 'string', optional: !0 }], function () {
                return l(s, void 0, void 0, function () {
                  var s = this,
                      n;return d(this, function () {
                    return n = t.message.data, t.getNodeFromId(t.message.data.nodeId).run(function (a) {
                      return l(s, void 0, void 0, function () {
                        var s, o, r, l, i, c;return d(this, function (d) {
                          switch (d.label) {case 0:
                              if ('script' !== a.type) return t.respondError('Node is not of type script'), [2, !1];if (s = n.libraries, Array.isArray(s)) for (o = 0, r = s; o < r.length; o++) {
                                if (l = r[o], i = l.name, !(l.name = e._doesLibraryExist(l))) return t.respondError('Library ' + i + ' is not registered'), [2, !1];e._isAlreadyUsed(a, l) || a.value.libraries.push(l);
                              } else {
                                if (c = s.name, !(s.name = e._doesLibraryExist(s))) return t.respondError('Library ' + c + ' is not registered'), [2, !1];e._isAlreadyUsed(a, s) || a.value.libraries.push(s);
                              }return [4, e.modules.CRMNodes.updateCrm()];case 1:
                              return d.sent(), t.respondSuccess(e.modules.Util.safe(a).value.libraries), [2, !0];}
                        });
                      });
                    }), [2];
                  });
                });
              });
            });
          }, t.splice = function (t) {
            var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
              t.typeCheck([{ val: 'start', type: 'number' }, { val: 'amount', type: 'number' }], function () {
                t.getNodeFromId(t.message.data.nodeId).run(function (n) {
                  return l(s, void 0, void 0, function () {
                    var s, a, o, r, l;return d(this, function (i) {
                      switch (i.label) {case 0:
                          return (s = t.message.data, a = s.start, o = s.amount, 'script' !== n.type) ? [3, 2] : (r = n.value.libraries, l = r.splice(a, o), [4, e.modules.CRMNodes.updateCrm()]);case 1:
                          return i.sent(), t.respondSuccess({ spliced: l, newArr: r }), [3, 3];case 2:
                          t.respondError('Node is not of type script'), i.label = 3;case 3:
                          return [2, !0];}
                    });
                  });
                });
              });
            });
          };
        })(s = t.libraries || (t.libraries = {}));
      })(s = t.script || (t.script = {}));
    })(t = e.crm || (e.crm = {}));
  }(i || (i = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        var s;(function (t) {
          t.push = function (t) {
            var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
              t.typeCheck([{ val: 'libraries', type: ['object', 'array'], forChildren: [{ val: 'name', type: 'string' }] }, { val: 'libraries.name', type: 'string', optional: !0 }], function () {
                t.getNodeFromId(t.message.data.nodeId).run(function (n) {
                  return l(s, void 0, void 0, function () {
                    var s, a, o, r, l, i, c;return d(this, function (d) {
                      switch (d.label) {case 0:
                          if (s = t.message.data, 'script' !== n.type) return t.respondError('Node is not of type script'), [2, !1];if (a = s.libraries, Array.isArray(a)) for (o = 0, r = a; o < r.length; o++) {
                            if (l = r[o], i = l.name, !(l.name = e._doesLibraryExist(l))) return t.respondError('Library ' + i + ' is not registered'), [2, !1];e._isAlreadyUsed(n, l) || n.value.backgroundLibraries.push(l);
                          } else {
                            if (c = a.name, !(a.name = e._doesLibraryExist(a))) return t.respondError('Library ' + c + ' is not registered'), [2, !1];e._isAlreadyUsed(n, a) || n.value.backgroundLibraries.push(a);
                          }return [4, e.modules.CRMNodes.updateCrm()];case 1:
                          return d.sent(), t.respondSuccess(e.modules.Util.safe(n).value.backgroundLibraries), [2, !0];}
                    });
                  });
                });
              });
            });
          }, t.splice = function (t) {
            var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
              t.typeCheck([{ val: 'start', type: 'number' }, { val: 'amount', type: 'number' }], function () {
                var n = t.message.data,
                    a = n.start,
                    o = n.amount;t.getNodeFromId(t.message.data.nodeId).run(function (n) {
                  return l(s, void 0, void 0, function () {
                    var s, r;return d(this, function (l) {
                      switch (l.label) {case 0:
                          return 'script' === n.type ? (s = n.value.backgroundLibraries, r = s.splice(a, o), [4, e.modules.CRMNodes.updateCrm([t.message.data.nodeId])]) : [3, 2];case 1:
                          return l.sent(), t.respondSuccess({ spliced: r, newArr: s }), [3, 3];case 2:
                          t.respondError('Node is not of type script'), l.label = 3;case 3:
                          return [2, !0];}
                    });
                  });
                });
              });
            });
          };
        })(s = t.backgroundLibraries || (t.backgroundLibraries = {}));
      })(s = t.script || (t.script = {}));
    })(t = e.crm || (e.crm = {}));
  }(i || (i = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        t.getChildren = function (e) {
          e.checkPermissions(['crmGet'], function () {
            e.getNodeFromId(e.message.data.nodeId, !0).run(function (t) {
              'menu' === t.type ? e.respondSuccess(t.children) : e.respondError('Node is not of type menu');
            });
          });
        }, t.setChildren = function (t) {
          var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
            t.typeCheck([{ val: 'childrenIds', type: 'array' }], function () {
              t.getNodeFromId(t.message.data.nodeId, !0).run(function (n) {
                return l(s, void 0, void 0, function () {
                  var s, a, o, r, l, i, c, r, u, p, g;return d(this, function (d) {
                    switch (d.label) {case 0:
                        if (e.modules.CRMNodes.buildNodePaths(e.modules.crm.crmTree), s = t.message.data.childrenIds, 'menu' !== n.type) return t.respondError('Node is not of type menu'), [2, !1];for (a = 0, o = s; a < o.length; a++) {
                          if (r = o[a], 'number' !== typeof r) return t.respondError('Not all values in array childrenIds are of type number'), [2, !1];
                        }l = n.children.length, i = 0, c = s, d.label = 1;case 1:
                        return i < c.length ? (r = c[i], u = t.getNodeFromId(r, !1, !0), !u) ? [2, !1] : (p = t.lookup(u.path, e.modules.crm.crmTree, !0), 'boolean' !== typeof p && p ? [4, t.moveNode(u, { relation: 'lastChild', node: t.message.data.nodeId }, { children: p, id: u.id })] : (t.respondError('Something went wrong removing the source node'), [2, !1])) : [3, 4];case 2:
                        d.sent(), d.label = 3;case 3:
                        return i++, [3, 1];case 4:
                        return g = t.getNodeFromId(n.id, !1, !0, !0), g.children.splice(0, l), [4, e.modules.CRMNodes.updateCrm()];case 5:
                        return d.sent(), t.respondSuccess(g), [2, !0];}
                  });
                });
              });
            });
          });
        }, t.push = function (t) {
          var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
            t.typeCheck([{ val: 'childrenIds', type: 'array' }], function () {
              e.modules.CRMNodes.buildNodePaths(e.modules.crm.crmTree);var n = t.message.data.childrenIds;t.getNodeFromId(t.message.data.nodeId, !0).run(function (a) {
                return l(s, void 0, void 0, function () {
                  var s, o, r, l, i, r, c, u;return d(this, function (d) {
                    switch (d.label) {case 0:
                        for ('menu' !== a.type && t.respondError('Node is not of type menu'), s = 0, o = n; s < o.length; s++) {
                          if (r = o[s], 'number' !== typeof r) return t.respondError('Not all values in array childrenIds are of type number'), [2, !1];
                        }l = 0, i = n, d.label = 1;case 1:
                        return l < i.length ? (r = i[l], c = t.getNodeFromId(r, !1, !0), !c) ? [2, !1] : (u = t.lookup(c.path, e.modules.crm.crmTree, !0), 'boolean' !== typeof u && u ? [4, t.moveNode(c, { relation: 'lastChild', node: t.message.data.nodeId }, { children: u, id: c.id })] : (t.respondError('Something went wrong removing the source node'), [2, !1])) : [3, 4];case 2:
                        d.sent(), d.label = 3;case 3:
                        return l++, [3, 1];case 4:
                        return [4, e.modules.CRMNodes.updateCrm()];case 5:
                        return d.sent(), t.respondSuccess(t.getNodeFromId(a.id, !0, !0)), [2, !0];}
                  });
                });
              });
            });
          });
        }, t.splice = function (t) {
          var s = this;t.checkPermissions(['crmGet', 'crmWrite'], function () {
            t.typeCheck([{ val: 'start', type: 'number' }, { val: 'amount', type: 'number' }], function () {
              var n = t.message.data,
                  a = n.start,
                  o = n.amount;t.getNodeFromId(t.message.data.nodeId).run(function (n) {
                return l(s, void 0, void 0, function () {
                  var s, r, l;return d(this, function (i) {
                    switch (i.label) {case 0:
                        return 'menu' === n.type ? (s = n.children.splice(a, o), [4, e.modules.CRMNodes.updateCrm()]) : (t.respondError('Node is not of type menu'), [2, !1]);case 1:
                        return i.sent(), r = s.map(function (t) {
                          return e.modules.CRMNodes.makeSafe(t);
                        }), l = t.getNodeFromId(n.id, !0, !0).children, t.respondSuccess({ spliced: r, newArr: l }), [2, !0];}
                  });
                });
              });
            });
          });
        };
      })(s = t.menu || (t.menu = {}));
    })(t = e.crm || (e.crm = {}));
  }(i || (i = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        function s(e) {
          return l(this, void 0, void 0, function () {
            return d(this, function (t) {
              switch (t.label) {case 0:
                  return 0 === Object.getOwnPropertyNames(e).length ? [2, []] : [3, 1];case 1:
                  return e.all ? [4, browserAPI.tabs.query({})] : [3, 3];case 2:
                  return [2, t.sent()];case 3:
                  return !1 === e.all && delete e.all, [4, browserAPI.tabs.query(e)];case 4:
                  return [2, t.sent()];}
            });
          });
        }function n(e) {
          for (var t = [], s = [], n = 0, a = e; n < a.length; n++) {
            var o = a[n],
                r = o.id;-1 < s.indexOf(r) || (t.push(o), s.push(r));
          }return t;
        }function a(t, a, o) {
          return l(this, void 0, void 0, function () {
            var r, l, i, c;return d(this, function (d) {
              switch (d.label) {case 0:
                  return 'number' === typeof o.tabId && (o.tabId = [o.tabId]), r = o.tabId, delete o.tabId, [4, s(o)];case 1:
                  return l = d.sent() || [], [4, window.Promise.all((r || []).map(function (e) {
                    return browserAPI.tabs.get(e);
                  }))];case 2:
                  return (i = d.sent(), c = t.getNodeFromId(a, !1, !0), !c || 'script' !== c.type) ? [2] : (n(l.concat(i)).forEach(function (t) {
                    e.modules.CRMNodes.Script.Handler.createHandler(c)({ pageUrl: t.url, menuItemId: 0, editable: !1, modifiers: [] }, t, !0);
                  }), [2]);}
            });
          });
        }t.runScript = function (e) {
          var t = this;e.checkPermissions(['crmRun'], function () {
            e.typeCheck([{ val: 'id', type: 'number' }, { val: 'options', type: 'object' }, { val: 'options.all', type: 'boolean', optional: !0 }, { val: 'options.tabId', type: ['number', 'array'], optional: !0 }, { val: 'options.status', type: 'string', optional: !0 }, { val: 'options.lastFocusedWindow', type: 'boolean', optional: !0 }, { val: 'options.windowId', type: 'number', optional: !0 }, { val: 'options.windowType', type: 'string', optional: !0 }, { val: 'options.active', type: 'boolean', optional: !0 }, { val: 'options.index', type: 'number', optional: !0 }, { val: 'options.title', type: 'string', optional: !0 }, { val: 'options.url', type: ['string', 'array'], optional: !0 }, { val: 'options.currentWindow', type: 'boolean', optional: !0 }, { val: 'options.highlighted', type: 'boolean', optional: !0 }, { val: 'options.pinned', type: 'boolean', optional: !0 }, { val: 'options.audible', type: 'boolean', optional: !0 }, { val: 'options.muted', type: 'boolean', optional: !0 }, { val: 'options.tabId', type: ['number', 'array'], optional: !0 }], function () {
              return l(t, void 0, void 0, function () {
                var t, s, n;return d(this, function (o) {
                  switch (o.label) {case 0:
                      return t = e.message.data, s = t.options, n = t.id, 'number' === typeof s.tabId && (s.tabId = [s.tabId]), [4, a(e, n, s)];case 1:
                      return o.sent(), [2];}
                });
              });
            });
          });
        }, t.runSelf = function (e) {
          var t = this;e.checkPermissions(['crmRun'], function () {
            e.typeCheck([{ val: 'options', type: 'object' }, { val: 'options.all', type: 'boolean', optional: !0 }, { val: 'options.tabId', type: ['number', 'array'], optional: !0 }, { val: 'options.status', type: 'string', optional: !0 }, { val: 'options.lastFocusedWindow', type: 'boolean', optional: !0 }, { val: 'options.windowId', type: 'number', optional: !0 }, { val: 'options.windowType', type: 'string', optional: !0 }, { val: 'options.active', type: 'boolean', optional: !0 }, { val: 'options.index', type: 'number', optional: !0 }, { val: 'options.title', type: 'string', optional: !0 }, { val: 'options.url', type: ['string', 'array'], optional: !0 }, { val: 'options.currentWindow', type: 'boolean', optional: !0 }, { val: 'options.highlighted', type: 'boolean', optional: !0 }, { val: 'options.pinned', type: 'boolean', optional: !0 }, { val: 'options.audible', type: 'boolean', optional: !0 }, { val: 'options.muted', type: 'boolean', optional: !0 }, { val: 'options.tabId', type: ['number', 'array'], optional: !0 }], function () {
              return l(t, void 0, void 0, function () {
                var t;return d(this, function (s) {
                  switch (s.label) {case 0:
                      return t = e.message.data.options, 'number' === typeof t.tabId && (t.tabId = [t.tabId]), [4, a(e, e.message.id, t)];case 1:
                      return s.sent(), [2];}
                });
              });
            });
          });
        }, t.addKeyboardListener = function (t) {
          t.typeCheck([{ val: 'key', type: 'string' }], function () {
            var s = t.message.data,
                n = e.modules.globalObject.globals.eventListeners.shortcutListeners,
                a = s.key.toLowerCase();e.modules.Util.setMapDefault(n, a, []);var o = { shortcut: a, callback: function callback() {
                try {
                  t.respondSuccess();
                } catch (t) {
                  var e = n.get(a).indexOf(o);n.get(a).splice(e, 1);
                }
              } };n.get(a).push(o);
          });
        };
      })(s = t.background || (t.background = {}));
    })(t = e.crm || (e.crm = {}));
  }(i || (i = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        t.register = function (t) {
          var s = this;t.checkPermissions(['crmWrite'], function () {
            t.typeCheck([{ val: 'name', type: 'string' }, { val: 'url', type: 'string', optional: !0 }, { val: 'code', type: 'string', optional: !0 }, { val: 'ts', type: 'boolean', optional: !0 }], function (n) {
              return l(s, void 0, void 0, function () {
                var s, a, o, r, l, i, c, u, u;return d(this, function (d) {
                  switch (d.label) {case 0:
                      return s = t.message.data, a = s.name, o = s.url, r = s.ts, l = s.code, n.url ? o.indexOf('.js') === o.length - 3 ? [4, Promise.race([new Promise(function (t) {
                        e.modules.Util.xhr(o).then(function (e) {
                          t(e);
                        }, function (e) {
                          t(e);
                        });
                      }), new Promise(function (e) {
                        setTimeout(function () {
                          e(null);
                        }, 5e3);
                      })])] : [3, 7] : [3, 9];case 1:
                      return (c = d.sent(), null !== c) ? [3, 2] : (t.respondError('Request timed out'), [3, 6]);case 2:
                      return 'number' === typeof c ? (t.respondError('Request failed with status code ' + c), [3, 6]) : [3, 3];case 3:
                      return i = { name: a, code: c, url: o, ts: { enabled: !!r, code: {} } }, [4, e.modules.CRMNodes.TS.compileLibrary(i)];case 4:
                      return u = d.sent(), e.modules.storages.storageLocal.libraries.push(u), [4, browserAPI.storage.local.set({ libraries: e.modules.storages.storageLocal.libraries })];case 5:
                      d.sent(), t.respondSuccess(u), d.label = 6;case 6:
                      return [3, 8];case 7:
                      return t.respondError('No valid URL given'), [2, !1];case 8:
                      return [3, 13];case 9:
                      return n.code ? (i = { name: a, code: l, ts: { enabled: !!r, code: {} } }, [4, e.modules.CRMNodes.TS.compileLibrary(i)]) : [3, 12];case 10:
                      return u = d.sent(), e.modules.storages.storageLocal.libraries.push(u), [4, browserAPI.storage.local.set({ libraries: e.modules.storages.storageLocal.libraries })];case 11:
                      return d.sent(), t.respondSuccess(u), [3, 13];case 12:
                      return t.respondError('No URL or code given'), [2, !1];case 13:
                      return [2, !0];}
                });
              });
            });
          });
        };
      })(s = t.libraries || (t.libraries = {}));
    })(t = e.crm || (e.crm = {}));
  }(i || (i = {}));var c = function c(e, t, s, n) {
    return new (s || (s = Promise))(function (a, o) {
      function r(e) {
        try {
          i(n.next(e));
        } catch (t) {
          o(t);
        }
      }function l(e) {
        try {
          i(n['throw'](e));
        } catch (t) {
          o(t);
        }
      }function i(e) {
        e.done ? a(e.value) : new s(function (t) {
          t(e.value);
        }).then(r, l);
      }i((n = n.apply(e, t || [])).next());
    });
  },
      u = function u(e, s) {
    function n(e) {
      return function (t) {
        return a([e, t]);
      };
    }function a(n) {
      if (r) throw new TypeError('Generator is already executing.');for (; o;) {
        try {
          if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
              i = n;break;case 4:
              return o.label++, { value: n[1], done: !1 };case 5:
              o.label++, l = n[1], n = [0];continue;case 7:
              n = o.ops.pop(), o.trys.pop();continue;default:
              if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
                o = 0;continue;
              }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                o.label = n[1];break;
              }if (6 === n[0] && o.label < i[1]) {
                o.label = i[1], i = n;break;
              }if (i && o.label < i[2]) {
                o.label = i[2], o.ops.push(n);break;
              }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
        } catch (t) {
          n = [6, t], l = 0;
        } finally {
          r = i = 0;
        }
      }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
    }var o = { label: 0, sent: function sent() {
        if (1 & i[0]) throw i[1];return i[1];
      }, trys: [], ops: [] },
        r,
        l,
        i,
        d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
      return this;
    }), d;
  },
      p;(function (e) {
    var t;(function (t) {
      function s(t, s, n) {
        return t.args[0] && ('chrome' !== t.type || t.args[0].type === s) && ('browser' !== t.type || 'return' === t.args[0].type) ? !1 : (e.modules.APIMessaging.ChromeMessage.throwError(t, 'fn' === s ? 'First argument of ' + n + ' should be a function' : n + ' should have something to return to'), !0);
      }function n(t, s) {
        'browser' === t.type ? e.modules.APIMessaging.createReturn(t, t.args[0].val)(s[0]) : e.modules.APIMessaging.CRMMessage.respond(t, 'success', { callbackId: t.args[0].val, params: s });
      }function a() {
        return c(this, void 0, void 0, function () {
          return u(this, function (e) {
            switch (e.label) {case 0:
                return [4, browserAPI.runtime.getManifest()];case 1:
                return [2, e.sent()];}
          });
        });
      }function o(t, s) {
        if (1 < s.split('.').length) {
          t.args[0] && 'fn' === t.args[0].type || e.modules.APIMessaging.ChromeMessage.throwError(t, 'First argument should be a function');var n = s.split('.')[0];return -1 < ['onStartup', 'onInstalled', 'onSuspend', 'onSuspendCanceled', 'onUpdateAvailable', 'onRestartRequired'].indexOf(n) && n in browserAPI.runtime ? (browserAPI.runtime[n].addListener(function () {
            for (var s = [], n = 0; n < arguments.length; n++) {
              s[n] = arguments[n];
            }var a = Array.prototype.slice.apply(s);e.modules.APIMessaging.CRMMessage.respond(t, 'success', { callbackId: t.args[0].val, params: a });
          }), !0) : 'onMessage' === n ? (e.modules.APIMessaging.ChromeMessage.throwError(t, 'This method of listening to messages is not allowed, use crmAPI.comm instead'), !0) : n in browserAPI.runtime ? (e.modules.APIMessaging.ChromeMessage.throwError(t, 'You are not allowed to listen to given event'), !0) : (e.modules.APIMessaging.ChromeMessage.throwError(t, 'Given event is not supported on this platform'), !0);
        }return !1;
      }t.getBackgroundPage = function (e, t) {
        return !(console.warn('The ' + e.type + '.runtime.getBackgroundPage API should not be used'), !s(e, 'fn', t)) || (n(e, [{}]), !0);
      }, t.openOptionsPage = function (e, t) {
        return c(this, void 0, void 0, function () {
          return u(this, function (a) {
            switch (a.label) {case 0:
                return s(e, 'fn', t) ? [2, !0] : [4, browserAPI.runtime.openOptionsPage()];case 1:
                return a.sent(), e.args[0] && n(e, []), [2, !0];}
          });
        });
      }, t._getManifest = a, t.getManifest = function (t, n) {
        return !!s(t, 'return', n) || (a().then(function (s) {
          e.modules.APIMessaging.createReturn(t, t.args[0].val)(s);
        }), !0);
      }, t.getURL = function (t) {
        for (var s = [], n = [], a = 0; a < t.args.length; a++) {
          if ('return' === t.args[a].type) s.push(t.args[a].val);else if ('arg' === t.args[a].type) n.push(t.args[a].val);else return e.modules.APIMessaging.ChromeMessage.throwError(t, 'getURL should not have a function as an argument'), !0;
        }return (0 === s.length || 0 === n.length) && e.modules.APIMessaging.ChromeMessage.throwError(t, 'getURL should be a return function with at least one argument'), e.modules.APIMessaging.createReturn(t, s[0])(browserAPI.runtime.getURL(n[0])), !0;
      }, t.unaccessibleAPI = function (t) {
        return e.modules.APIMessaging.ChromeMessage.throwError(t, 'This API should not be accessed'), !0;
      }, t.reload = function () {
        return browserAPI.runtime.reload(), !0;
      }, t.restart = function () {
        if ('restart' in browserAPI.runtime) {
          var e = browserAPI.runtime;e.restart();
        }return !0;
      }, t.restartAfterDelay = function (t) {
        var s = [],
            n = [];if (!('restartAfterDelay' in browserAPI.runtime)) return e.modules.APIMessaging.ChromeMessage.throwError(t, 'restartAfterDelay is not supported on this platform'), !0;for (var a = 0; a < t.args.length; a++) {
          if ('fn' === t.args[a].type) s.push(t.args[a].val);else if ('arg' === t.args[a].type) n.push(t.args[a].val);else return e.modules.APIMessaging.ChromeMessage.throwError(t, 'restartAfterDelay should not have a return as an argument'), !0;
        }var o = browserAPI.runtime;return o.restartAfterDelay(n[0], function () {
          e.modules.APIMessaging.CRMMessage.respond(t, 'success', { callbackId: s[0], params: [] });
        }), !0;
      }, t.getPlatformInfo = function (e, t) {
        return c(this, void 0, void 0, function () {
          var a;return u(this, function (o) {
            switch (o.label) {case 0:
                return s(e, 'fn', t) ? [2, !0] : [4, browserAPI.runtime.getPlatformInfo()];case 1:
                return a = o.sent(), e.args[0] && n(e, [a]), [2, !0];}
          });
        });
      }, t.getPackageDirectoryEntry = function (t, a) {
        if (!('getPackageDirectoryEntry' in browserAPI.runtime)) return e.modules.APIMessaging.ChromeMessage.throwError(t, 'getPackageDirectoryEntry is not supported on this platform'), !1;if (s(t, 'fn', a)) return !0;var o = browserAPI.runtime;return o.getPackageDirectoryEntry(function (e) {
          t.args[0] && n(t, [e]);
        }), !0;
      }, t.check = function (e) {
        return c(this, void 0, void 0, function () {
          var s, n, a, r;return u(this, function (l) {
            switch (l.label) {case 0:
                return (s = e.api.split('.'), n = s[0], a = s[1], 'runtime' !== n) ? [2, !1] : (r = a, 'getBackgroundPage' === r ? [3, 1] : 'openOptionsPage' === r ? [3, 2] : 'getManifest' === r ? [3, 4] : 'getURL' === r ? [3, 5] : 'connect' === r ? [3, 6] : 'connectNative' === r ? [3, 6] : 'setUninstallURL' === r ? [3, 6] : 'sendNativeMessage' === r ? [3, 6] : 'requestUpdateCheck' === r ? [3, 6] : 'reload' === r ? [3, 7] : 'restart' === r ? [3, 8] : 'restartAfterDelay' === r ? [3, 9] : 'getPlatformInfo' === r ? [3, 10] : 'getPackageDirectoryEntry' === r ? [3, 12] : [3, 13]);case 1:
                return [2, t.getBackgroundPage(e, a)];case 2:
                return [4, t.openOptionsPage(e, a)];case 3:
                return [2, l.sent()];case 4:
                return [2, t.getManifest(e, a)];case 5:
                return [2, t.getURL(e)];case 6:
                return [2, t.unaccessibleAPI(e)];case 7:
                return [2, t.reload()];case 8:
                return [2, t.restart()];case 9:
                return [2, t.restartAfterDelay(e)];case 10:
                return [4, t.getPlatformInfo(e, a)];case 11:
                return [2, l.sent()];case 12:
                return [2, t.getPackageDirectoryEntry(e, a)];case 13:
                return [2, o(e, a)];}
          });
        });
      };
    })(t = e.ChromeAPIs || (e.ChromeAPIs = {}));
  })(p || (p = {})), function (e) {
    var t;(function (t) {
      function s(t) {
        var s = n(t),
            a = e.modules.crmValues.userAddedContextMenusById;return a.has(s) && a.get(s).sourceNodeId === t.id;
      }function n(e) {
        return e.args[0].val;
      }function a(t, s, n) {
        t.args[s] && ('browser' === t.type ? e.modules.APIMessaging.createReturn(t, t.args[s].val)(n[0]) : e.modules.APIMessaging.CRMMessage.respond(t, 'success', { callbackId: t.args[s].val, params: n }));
      }function o(t, s) {
        e.modules.APIMessaging.ChromeMessage.throwError(t, s, '');
      }function r(t) {
        return c(this, void 0, void 0, function () {
          var s, n, a, o, l, i, d;return u(this, function (c) {
            switch (c.label) {case 0:
                s = t.actualId, n = t.children, a = t.parent, o = t.generatedId, a.children.splice(a.children.indexOf(t), 1), e.modules.crmValues.userAddedContextMenusById['delete'](o), l = 0, i = n, c.label = 1;case 1:
                return l < i.length ? (d = i[l], [4, r(d)]) : [3, 4];case 2:
                c.sent(), c.label = 3;case 3:
                return l++, [3, 1];case 4:
                return [4, browserAPI.contextMenus.remove(s)];case 5:
                return c.sent(), [2];}
          });
        });
      }function l(t) {
        return c(this, void 0, void 0, function () {
          var l = this,
              i,
              d,
              p,
              g,
              m,
              m,
              h,
              y,
              f,
              b,
              x,
              v;return u(this, function (I) {
            switch (I.label) {case 0:
                return (i = t.api.split('.'), d = i[0], p = i[1], 'contextMenus' !== d && 'menus' !== d) ? [2, !1] : 'removeAll' === p ? (g = t.id, [4, e.modules.Util.filter(e.modules.crmValues.userAddedContextMenus, function (e) {
                  return c(l, void 0, void 0, function () {
                    var t;return u(this, function (s) {
                      switch (s.label) {case 0:
                          return t = e.sourceNodeId === g, [4, r(e)];case 1:
                          return s.sent(), [2, !t];}
                    });
                  });
                })]) : [3, 2];case 1:
                return I.sent(), a(t, 0, []), [3, 13];case 2:
                return 'remove' === p ? s(t) ? (m = n(t), [4, r(e.modules.crmValues.userAddedContextMenusById.get(m))]) : [3, 4] : [3, 6];case 3:
                return I.sent(), a(t, 1, []), [3, 5];case 4:
                o(t, 'Attempted to modify contextMenu item that was not created by this node'), I.label = 5;case 5:
                return [3, 13];case 6:
                return 'update' === p ? s(t) ? (m = n(t), [4, browserAPI.contextMenus.update(m, t.args[1].val)]) : [3, 8] : [3, 10];case 7:
                return I.sent(), a(t, 2, []), [3, 9];case 8:
                o(t, 'Attempted to modify contextMenu item that was not created by this node'), I.label = 9;case 9:
                return [3, 13];case 10:
                return 'create' === p ? (h = e.modules.crmValues.userAddedContextMenusById, y = t.args[0].val, f = y.parentId, f && h.has(f) && (y.parentId = h.get(f).actualId), [4, browserAPI.contextMenus.create(y, e.modules.CRMNodes.handleUserAddedContextMenuErrors)]) : [3, 12];case 11:
                return b = I.sent(), x = e.modules.Util.createUniqueNumber(), v = { sourceNodeId: t.id, actualId: b, generatedId: x, createProperties: y, children: [], parent: f ? h.get(f) : null }, e.modules.crmValues.userAddedContextMenus.push(v), h.set(x, v), f && h.get(f).children.push(v), [3, 13];case 12:
                return [2, !0];case 13:
                return [2, !1];}
          });
        });
      }t.check = function (e) {
        return c(this, void 0, void 0, function () {
          return u(this, function (t) {
            switch (t.label) {case 0:
                return [4, l(e)];case 1:
                return t.sent() ? [2, !0] : [2, !1];}
          });
        });
      };
    })(t = e.ForbiddenCalls || (e.ForbiddenCalls = {}));
  }(p || (p = {})), function (e) {
    function t(e) {
      return 'storage' !== e;
    }function s(t, s) {
      var n = e.modules.crm.crmById.get(t.id);if (!n.isLocal) {
        var a = -1 !== n.permissions.indexOf('chrome') || -1 !== n.permissions.indexOf('browser'),
            o;if (o = -1 !== n.permissions.indexOf(s), !a && !o) return e.modules.APIMessaging.ChromeMessage.throwError(t, 'Both permissions ' + t.type + ' and ' + s + ' not available to this script'), !1;if (!a) return e.modules.APIMessaging.ChromeMessage.throwError(t, 'Permission ' + t.type + ' not available to this script'), !1;if (!o) return e.modules.APIMessaging.ChromeMessage.throwError(t, 'Permission ' + s + ' not avilable to this script'), !1;
      }return !0;
    }function n(t) {
      return c(this, void 0, void 0, function () {
        return u(this, function (s) {
          switch (s.label) {case 0:
              return !/[a-zA-Z0-9]*/.test(t.api) ? (e.modules.APIMessaging.ChromeMessage.throwError(t, 'Passed API "' + t.api + '" is not alphanumeric.'), [2, !1]) : [3, 1];case 1:
              return [4, e.ForbiddenCalls.check(t)];case 2:
              return s.sent() ? [2, !1] : [3, 3];case 3:
              return [4, e.ChromeAPIs.check(t)];case 4:
              if (s.sent()) return [2, !1];if ('runtime.sendMessage' === t.api) return console.warn('The ' + t.type + '.runtime.sendMessage API is not meant to be used, use crmAPI.comm instead'), e.modules.APIMessaging.sendThroughComm(t), [2, !1];s.label = 5;case 5:
              return [2, !0];}
        });
      });
    }function a(t, s) {
      return function () {
        for (var n = [], a = 0; a < arguments.length; a++) {
          n[a] = arguments[a];
        }window.chrome && window.chrome.runtime && window.chrome.runtime.lastError ? e.modules.APIMessaging.CRMMessage.respond(t, 'success', { callbackId: s, lastError: window.chrome.runtime.lastError, params: n }) : e.modules.APIMessaging.CRMMessage.respond(t, 'success', { callbackId: s, params: n });
      };
    }e.initModule = function (t) {
      e.modules = t;
    }, e.handle = function (o) {
      return c(this, void 0, void 0, function () {
        var r, l, d, c, p, g, i, m, h, y, g, f;return u(this, function (u) {
          switch (u.label) {case 0:
              return [4, n(o)];case 1:
              return u.sent() ? (r = o.requestType || o.api.split('.')[0], !t(r)) ? (e.modules.APIMessaging.ChromeMessage.throwError(o, 'Permission ' + r + ' is not allowed for scripts, please use a CRM API replacemenet'), [2, !1]) : s(o, r) ? -1 === e.modules.constants.permissions.indexOf(r) ? (e.modules.APIMessaging.ChromeMessage.throwError(o, 'Permissions ' + r + ' is not available for use or does not exist.'), [2, !1]) : -1 === e.modules.globalObject.globals.availablePermissions.indexOf(r) ? (e.modules.APIMessaging.ChromeMessage.throwError(o, 'Permissions ' + r + ' not available to the extension, visit options page'), [4, browserAPI.storage.local.get()]) : [3, 4] : [2, !1] : [2, !1];case 2:
              return l = u.sent(), d = l.requestPermissions || [r], [4, browserAPI.storage.local.set({ requestPermissions: d })];case 3:
              return u.sent(), [2, !1];case 4:
              for (c = [], p = [], g = 0; g < o.args.length; g++) {
                switch (o.args[g].type) {case 'arg':
                    c.push(e.modules.Util.jsonFn.parse(o.args[g].val));break;case 'fn':
                    c.push(a(o, o.args[g].val));break;case 'return':
                    p.push(e.modules.APIMessaging.createReturn(o, o.args[g].val));}
              }u.label = 5;case 5:
              return u.trys.push([5, 11,, 12]), 'crmAPI' in window && window.crmAPI && '__isVirtual' in window ? [4, e.modules.Sandbox.sandboxVirtualChromeFunction(o.api, o.type, o.args)] : [3, 7];case 6:
              return y = u.sent(), [3, 8];case 7:
              y = e.modules.Sandbox.sandboxChrome(o.api, o.type, c), u.label = 8;case 8:
              return i = y, m = i.success, h = i.result, m ? e.modules.Util.isThennable(h) ? [4, h] : [3, 10] : (e.modules.APIMessaging.ChromeMessage.throwError(o, 'Passed API does not exist'), [2, !1]);case 9:
              h = u.sent(), u.label = 10;case 10:
              for (g = 0; g < p.length; g++) {
                p[g](h);
              }return 'browser' === o.type && e.modules.APIMessaging.CRMMessage.respond(o, 'success', h), [3, 12];case 11:
              return f = u.sent(), e.modules.APIMessaging.ChromeMessage.throwError(o, f.message, f.stack), [2, !1];case 12:
              return [2, !0];}
        });
      });
    };
  }(p || (p = {}));var g;(function (t) {
    var e;(function (e) {
      e.respond = function (s, e, n, a) {
        var o = { type: e, callbackId: s.onFinish, messageType: 'callback', data: 'error' === e || 'chromeError' === e ? { error: n, message: n, stackTrace: a, lineNumber: s.lineNumber } : n };try {
          var r = t.modules.crmValues.tabData,
              l = r.get(s.tabId).nodes,
              i = l.get(s.id)[s.tabIndex].port;t.modules.Util.postMessage(i, o);
        } catch (n) {
          if ('Converting circular structure to JSON' === n.message) t.CRMMessage.respond(s, 'error', 'Converting circular structure to JSON, this API will not work');else throw n;
        }
      };
    })(e = t.CRMMessage || (t.CRMMessage = {}));
  })(g || (g = {})), function (e) {
    var t;(function (t) {
      t.throwError = function (t, s, n) {
        if (console.warn('Error:', s), n) {
          var a = n.split('\n');a.forEach(function (e) {
            console.warn(e);
          });
        }e.CRMMessage.respond(t, 'chromeError', s, n);
      }, t.succeed = function (t, s) {
        e.CRMMessage.respond(t, 'success', s);
      };
    })(t = e.ChromeMessage || (e.ChromeMessage = {}));
  }(g || (g = {})), function (e) {
    e.initModule = function (t) {
      e.modules = t;
    }, e.createReturn = function (t, s) {
      return function (n) {
        e.CRMMessage.respond(t, 'success', { callbackId: s, params: [n] });
      };
    }, e.sendThroughComm = function (t) {
      var s = e.modules.crmValues.nodeInstances.get(t.id),
          n = [];e.modules.Util.iterateMap(s, function (e, t) {
        t.forEach(function (t, s) {
          n.push({ id: e, tabIndex: s, instance: t });
        });
      });for (var a = [], o = [], r = 0; r < t.args.length; r++) {
        'fn' === t.args[r].type ? o.push(t.args[r]) : 'arg' === t.args[r].type && (2 < a.length && 'string' === typeof a[0] && (a = a.slice(1)), a.push(t.args[r]));
      }0 < o.length && console.warn('Message responseCallbacks are not supported');for (var r = 0; r < n.length; r++) {
        var l = e.modules.crmValues.tabData,
            i = l.get(n[r].id).nodes,
            d = i.get(t.id)[n[r].tabIndex].port;e.modules.Util.postMessage(d, { messageType: 'instanceMessage', message: a[0] });
      }
    };
  }(g || (g = {}));var m = function m(e, t, s, n) {
    return new (s || (s = Promise))(function (a, o) {
      function r(e) {
        try {
          i(n.next(e));
        } catch (t) {
          o(t);
        }
      }function l(e) {
        try {
          i(n['throw'](e));
        } catch (t) {
          o(t);
        }
      }function i(e) {
        e.done ? a(e.value) : new s(function (t) {
          t(e.value);
        }).then(r, l);
      }i((n = n.apply(e, t || [])).next());
    });
  },
      h = function h(e, s) {
    function n(e) {
      return function (t) {
        return a([e, t]);
      };
    }function a(n) {
      if (r) throw new TypeError('Generator is already executing.');for (; o;) {
        try {
          if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
              i = n;break;case 4:
              return o.label++, { value: n[1], done: !1 };case 5:
              o.label++, l = n[1], n = [0];continue;case 7:
              n = o.ops.pop(), o.trys.pop();continue;default:
              if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
                o = 0;continue;
              }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                o.label = n[1];break;
              }if (6 === n[0] && o.label < i[1]) {
                o.label = i[1], i = n;break;
              }if (i && o.label < i[2]) {
                o.label = i[2], o.ops.push(n);break;
              }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
        } catch (t) {
          n = [6, t], l = 0;
        } finally {
          r = i = 0;
        }
      }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
    }var o = { label: 0, sent: function sent() {
        if (1 & i[0]) throw i[1];return i[1];
      }, trys: [], ops: [] },
        r,
        l,
        i,
        d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
      return this;
    }), d;
  },
      y;(function (e) {
    e.initModule = function (t) {
      e.modules = t;
    };var t = function () {
      function t(e, t) {
        if (this.message = e, this.action = t, null !== t) {
          for (var s = t.split('.'), n = i, a = 0, o = s, r; a < o.length; a++) {
            r = o[a], n = n[r];
          }n(this);
        }
      }return t.prototype.respondSuccess = function () {
        for (var t = [], s = 0; s < arguments.length; s++) {
          t[s] = arguments[s];
        }return e.modules.APIMessaging.CRMMessage.respond(this.message, 'success', t), !0;
      }, t.prototype.respondError = function (t) {
        e.modules.APIMessaging.CRMMessage.respond(this.message, 'error', t);
      }, t.prototype.lookup = function (e, t, s) {
        if (void 0 === s && (s = !1), null === e || 'object' !== ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) || !Array.isArray(e)) return this.respondError('Supplied path is not of type array'), !0;for (var n = e.length - 1, a = 0, o; a < n; a++) {
          if (o = t[e[a]], t && o && o.children) t = o.children;else return !1;
        }return s ? t || !1 : t[e[n]] || !1;
      }, t.prototype.checkType = function (e, t, s, n, a, o, r) {
        return (void 0 === n && (n = 0), void 0 === o && (o = !1), void 0 === e || null === e) ? n ? (a && a(), !0) : (o ? this.respondError('Not all values for ' + s + ' are defined') : this.respondError('Value for ' + s + ' is not defined'), !1) : 'array' === t && ('object' !== ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) || Array.isArray(e)) ? (o ? this.respondError('Not all values for ' + s + ' are of type ' + t + ',' + (' they are instead of type ' + ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)))) : this.respondError('Value for ' + s + ' is not of type ' + t + ',' + (' it is instead of type ' + ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)))), !1) : ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) === t ? (r && r(), !0) : (o ? this.respondError('Not all values for ' + s + ' are of type ' + t + ',' + (' they are instead of type ' + ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)))) : this.respondError('Value for ' + s + ' is not of type ' + t + ',' + (' it is instead of type ' + ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)))), !1);
      }, t.prototype.moveNode = function (s, n, a) {
        return m(this, void 0, void 0, function () {
          var o, r, l, d, c, u, p, g, m, y, f, b, x;return h(this, function (i) {
            switch (i.label) {case 0:
                if (o = this, r = JSON.parse(JSON.stringify(e.modules.crm.crmTree)), n = n || {}, !this.checkType(n, 'object', 'position')) return [2, !1];if (!this.checkType(n.node, 'number', 'node', 1, null, !1, function () {
                  l = o.getNodeFromId(n.node, !1, !0);
                })) return [2, !1];if (!this.checkType(n.relation, 'string', 'relation', 1)) return [2, !1];switch (l = l || e.modules.crm.crmTree, d = l === e.modules.crm.crmTree, n.relation) {case 'before':
                    c = t.MoveNode.before(d, s, l, this);break;case 'firstSibling':
                    c = t.MoveNode.firstSibling(d, s, l, this);break;case 'after':
                    c = t.MoveNode.after(d, s, l, this);break;case 'lastSibling':
                    c = t.MoveNode.lastSibling(d, s, l, this);break;case 'firstChild':
                    if (u = t.MoveNode.firstChild(d, s, l, this), p = u.success, g = u.target, c = g, !p) return [2, !1];break;default:case 'lastChild':
                    if (m = t.MoveNode.lastChild(d, s, l, this), y = m.success, f = m.target, c = f, !y) return [2, !1];}if (a && 0 !== c) for (b = !1, x = 0; x < a.children.length; x++) {
                  if (a.children[x].id === a.id) {
                    if (1 === c || 3 === c) {
                      a.children.splice(x, 1);break;
                    }if (2 === c) if (b) {
                      a.children.splice(x, 1);break;
                    } else b = !0;
                  }
                }return [4, e.modules.Storages.applyChanges({ type: 'optionsPage', settingsChanges: [{ key: 'crm', oldValue: r, newValue: JSON.parse(JSON.stringify(e.modules.crm.crmTree)) }] })];case 1:
                return i.sent(), [2, s];}
          });
        });
      }, t.prototype.getNodeFromId = function (t, s, n, a) {
        void 0 === s && (s = !1), void 0 === n && (n = !1), void 0 === a && (a = !1);var o = (s ? e.modules.crm.crmByIdSafe : e.modules.crm.crmById).get(t);return o ? n ? o : { run: function run(e) {
            e(o);
          } } : (this.respondError('There is no node with the id you supplied (' + t + ')'), !n && { run: function run() {} });
      }, t._getDotValue = function (e, t) {
        for (var s = t.split('.'), n = e, a = 0; a < s.length; a++) {
          if (s[a] in n) n = n[s[a]];else return;
        }return n;
      }, t.prototype.dependencyMet = function (e, t) {
        return e.dependency && !t[e.dependency] ? (t[e.val] = !1, !1) : !0;
      }, t.prototype._isDefined = function (e, t, s) {
        return void 0 === t || null === t ? e.optional ? (s[e.val] = !1, 'continue') : (this.respondError('Value for ' + e.val + ' is not set'), !1) : !0;
      }, t.prototype._typesMatch = function (e, t) {
        for (var s = Array.isArray(e.type) ? e.type : [e.type], n = 0, a; n < s.length; n++) {
          if (a = s[n], 'array' === a && 'object' === ('undefined' === typeof t ? 'undefined' : babelHelpers['typeof'](t)) && Array.isArray(t)) return a;if (('undefined' === typeof t ? 'undefined' : babelHelpers['typeof'](t)) === a) return a;
        }return this.respondError('Value for ' + e.val + ' is not of type ' + s.join(' or ')), null;
      }, t.prototype._checkNumberConstraints = function (e, t) {
        return void 0 !== e.min && e.min > t ? (this.respondError('Value for ' + e.val + ' is smaller than ' + e.min), !1) : void 0 !== e.max && e.max < t ? (this.respondError('Value for ' + e.val + ' is bigger than ' + e.max), !1) : !0;
      }, t.prototype._checkArrayChildType = function (e, t, s) {
        for (var n = Array.isArray(s.type) ? s.type : [s.type], a = 0, o; a < n.length; a++) {
          if (o = n[a], 'array' === o) {
            if (Array.isArray(t)) return !0;
          } else if (('undefined' === typeof t ? 'undefined' : babelHelpers['typeof'](t)) === o) return !0;
        }return this.respondError('For not all values in the array ' + e.val + ' is the property ' + s.val + ' of type ' + n.join(' or ')), !1;
      }, t.prototype._checkArrayChildrenConstraints = function (e, t) {
        for (var s = 0, n = t, a; s < n.length; s++) {
          a = n[s];for (var o = 0, r = e.forChildren; o < r.length; o++) {
            var l = r[o],
                i = a[l.val];if (void 0 === i || null === i) {
              if (!l.optional) return this.respondError('For not all values in the array ' + e.val + ' is the property ' + l.val + ' defined'), !1;
            } else if (!this._checkArrayChildType(e, i, l)) return !1;
          }
        }return !0;
      }, t.prototype._checkConstraints = function (e, t) {
        return 'number' === typeof t ? this._checkNumberConstraints(e, t) : Array.isArray(t) && e.forChildren ? this._checkArrayChildrenConstraints(e, t) : !0;
      }, t.prototype.isBackgroundPage = function () {
        var e = 0 === this.message.tabId;return e || this.respondError('Call source is not a backgroundpage'), e;
      }, t.prototype.typeCheck = function (e, s) {
        for (var n = {}, a = 0, o = e, r; a < o.length; a++) {
          if (r = o[a], !!this.dependencyMet(r, n)) {
            var l = t._getDotValue(this.message.data, r.val),
                i = this._isDefined(r, l, n);if (!0 === i) {
              var d = this._typesMatch(r, l);if (d) {
                n[r.val] = !0, this._checkConstraints(r, l);continue;
              }
            } else if ('continue' === i) continue;return !1;
          }
        }return s(n), !0;
      }, t.prototype.checkPermissions = function (t, s) {
        var n = [],
            a = !0,
            o;if (!(o = e.modules.crm.crmById.get(this.message.id))) return this.respondError('The node you are running this script from no longer exist, no CRM API calls are allowed'), !1;if (o.isLocal) s && s(n);else {
          var r = [];if (!o.permissions || e.modules.Util.compareArray(o.permissions, [])) 0 < t.length && (a = !1, r = t);else for (var l = 0, i = t, d; l < i.length; l++) {
            d = i[l], -1 === o.permissions.indexOf(d) && (a = !1, r.push(d));
          }if (!a) {
            if (1e3 < e.modules.storages.insufficientPermissions.length) {
              for (var c = 0; e.modules.storages.insufficientPermissions.pop() && (c++, 500 !== c);) {}e.modules.storages.insufficientPermissions.push('Cleaning up last 500 array items because size exceeded 1000...');
            }e.modules.storages.insufficientPermissions.push('Script id ' + this.message.id + ' asked for and was rejected permission' + (1 === r.length ? ' ' + r[0] : 's ' + r.join(', '))), this.respondError('Permission' + (1 === r.length ? ' ' + r[0] : 's ' + r.join(', ')) + ' are not available to this script.');
          } else s && s(n.filter(function (e) {
            return -1 !== o.permissions.indexOf(e);
          }));
        }return !0;
      }, t.MoveNode = function () {
        function t() {}return t._targetIndex = function (e, t) {
          for (var s = 0; s < e.length; s++) {
            if (e[s].id === t.id) return s;
          }return -1;
        }, t._genMoveTargetReturn = function (e, t) {
          return -1 === e ? 1 : t ? 3 : 2;
        }, t.before = function (t, s, n, a) {
          if (t) {
            var o = this._targetIndex(e.modules.crm.crmTree, s);return e.modules.Util.pushIntoArray(s, 0, e.modules.crm.crmTree), this._genMoveTargetReturn(o, !1);
          }var r = a.lookup(n.path, e.modules.crm.crmTree, !0),
              o = this._targetIndex(r, s);return e.modules.Util.pushIntoArray(s, n.path[n.path.length - 1], r), this._genMoveTargetReturn(o, n.path[n.path.length - 1] > o);
        }, t.firstSibling = function (t, s, n, a) {
          if (t) {
            var o = this._targetIndex(e.modules.crm.crmTree, s);return e.modules.Util.pushIntoArray(s, 0, e.modules.crm.crmTree), this._genMoveTargetReturn(o, !1);
          }var r = a.lookup(n.path, e.modules.crm.crmTree, !0),
              o = this._targetIndex(r, s);return e.modules.Util.pushIntoArray(s, 0, r), this._genMoveTargetReturn(o, !1);
        }, t.after = function (t, s, n, a) {
          if (t) {
            var o = this._targetIndex(e.modules.crm.crmTree, s);return e.modules.Util.pushIntoArray(s, e.modules.crm.crmTree.length, e.modules.crm.crmTree), this._genMoveTargetReturn(o, !0);
          }var r = a.lookup(n.path, e.modules.crm.crmTree, !0),
              o = this._targetIndex(r, s);return 0 < n.path.length ? (e.modules.Util.pushIntoArray(s, n.path[n.path.length - 1] + 1, r), this._genMoveTargetReturn(o, n.path[n.path.length - 1] >= o)) : 0;
        }, t.lastSibling = function (t, s, n, a) {
          if (t) {
            var o = this._targetIndex(e.modules.crm.crmTree, s);return e.modules.Util.pushIntoArray(s, e.modules.crm.crmTree.length, e.modules.crm.crmTree), this._genMoveTargetReturn(o, !0);
          }var r = a.lookup(n.path, e.modules.crm.crmTree, !0),
              o = this._targetIndex(r, s);return e.modules.Util.pushIntoArray(s, r.length, r), this._genMoveTargetReturn(o, !0);
        }, t.firstChild = function (t, s, n, a) {
          if (t) {
            var o = this._targetIndex(e.modules.crm.crmTree, s);return e.modules.Util.pushIntoArray(s, 0, e.modules.crm.crmTree), { success: !0, target: this._genMoveTargetReturn(o, !1) };
          }if ('menu' === n.type) {
            var r = n.children,
                o = this._targetIndex(r, s);return e.modules.Util.pushIntoArray(s, 0, r), { success: !0, target: this._genMoveTargetReturn(o, !1) };
          }return a.respondError('Supplied node is not of type "menu"'), { success: !1, target: 0 };
        }, t.lastChild = function (t, s, n, a) {
          if (t) {
            var o = this._targetIndex(e.modules.crm.crmTree, s);return e.modules.Util.pushIntoArray(s, e.modules.crm.crmTree.length, e.modules.crm.crmTree), { success: !0, target: this._genMoveTargetReturn(o, !0) };
          }if ('menu' === n.type) {
            var r = n.children,
                o = this._targetIndex(r, s);return e.modules.Util.pushIntoArray(s, r.length, r), { success: !0, target: this._genMoveTargetReturn(o, !0) };
          }return a.respondError('Supplied node is not of type "menu"'), { success: !1, target: 0 };
        }, t;
      }(), t;
    }();e.Instance = t;
  })(y || (y = {}));var f;(function (e) {
    function t(e) {
      if ('<all_urls>' === e) return '<all_urls>';try {
        var t = e.split('://'),
            s = t[0],
            n = t[1],
            a = n.split('/'),
            o = a[0],
            r = a.slice(1);return { scheme: s, host: o, path: r.join('/') };
      } catch (t) {
        return { scheme: '*', host: '*', path: '*', invalid: !0 };
      }
    }function s(e, t) {
      return !('*' !== e) || e === t;
    }function n(e, t) {
      if ('*' === e) return !0;if ('*' === e[0]) {
        var s = e.slice(2),
            n = t.indexOf(s);return n === t.length - s.length;
      }return e === t;
    }function a(e, t) {
      var s = e.split('*'),
          n = s.length;if (0 === n - 1) return e === t;if (0 !== t.indexOf(s[0])) return !1;t = t.slice(s[0].length);for (var a = 1; a < n; a++) {
        if (-1 === t.indexOf(s[a])) return !1;t = t.slice(s[a].length);
      }return !0;
    }e.initModule = function (t) {
      e.modules = t;
    }, e.triggerMatchesScheme = function (e) {
      var t = /(file:\/\/\/.*|(\*|http|https|file|ftp):\/\/(\*\.[^/]+|\*|([^/\*]+.[^/\*]+))(\/(.*))?|(<all_urls>))/;return t.test(e);
    }, e.prepareTrigger = function (e) {
      if ('<all_urls>' === e) return e;if ('' === e.replace(/\s/g, '')) return null;var t = e.split('//'),
          s;return 1 === t.length && (s = 'http://' + e, t[1] = t[0]), s = -1 === t[1].indexOf('/') ? e + '/' : e, s;
    }, e.urlMatchesPattern = function (e, o) {
      var r;try {
        r = t(o);
      } catch (t) {
        return !1;
      }if ('<all_urls>' === r) return !0;var l = r;return s(e.scheme, l.scheme) && n(e.host, l.host) && a(e.path, l.path);
    }, e.validatePatternUrl = function (s) {
      if (!s || 'string' !== typeof s) return null;s = s.trim();var n = t(s);if ('<all_urls>' === n) return { scheme: '*', host: '*', path: '*' };var a = n;if (a.invalid) return null;var o = e.modules.constants.validSchemes,
          r = o.indexOf(a.scheme);if (-1 === r) return null;var l = a.host.indexOf('*');if (-1 < l) {
        if (2 < a.host.split('*').length) return null;if (0 !== l || '.' !== a.host[1]) return null;if (1 < a.host.slice(2).split('/').length) return null;
      }return a;
    }, e.matchesUrlSchemes = function (s, n) {
      for (var a = !1, o = 0, r = s; o < r.length; o++) {
        var l = r[o],
            i = l.not,
            d = l.url;if (!(0 === d.indexOf('/') && e.modules.Util.endsWith(d, '/'))) try {
          var c = t(d);if ('<all_urls>' === c) {
            if (i) return !1;a = !0;continue;
          }var u = t(n);if (c.invalid || u.invalid) throw new Error('nomatch');if ('*' !== c.scheme && c.scheme !== u.scheme) throw new Error('nomatch');if (2 < c.host.split('.').length || 0 === c.host.indexOf('*.')) {
            var p = u.host;if (0 === p.indexOf('www.') && (p = p.slice(4)), 0 === c.host.indexOf('*.') && (c.host = c.host.slice(2), p = p.split('.').slice(-2).join('.')), '*' !== c.host && c.host !== p) throw new Error('nomatch');
          } else if ('*' !== c.host && c.host !== u.host.split('.').slice(-2).join('.')) throw new Error('nomatch');if ('*' !== c.path && !new RegExp('^' + c.path.replace(/\*/g, '(.*)') + '$').test(u.path)) throw new Error('nomatch');if (i) return !1;a = !0;
        } catch (t) {
          if (new RegExp('^' + d.replace(/\*/g, '(.*)') + '$').test(n)) {
            if (i) return !1;a = !0;
          }
        } else if (new RegExp(d.slice(1, d.length - 1)).test(n)) {
          if (i) return !1;a = !0;
        }
      }return a;
    };
  })(f || (f = {}));var b;(function (e) {
    var t;(function (t) {
      t.handle = function (t) {
        e.handle(t, t.name);
      };
    })(t = e.Resource || (e.Resource = {}));
  })(b || (b = {})), function (e) {
    var t;(function (t) {
      t.handle = function (t) {
        e.handle(t, t.url);
      };
    })(t = e.Anonymous || (e.Anonymous = {}));
  }(b || (b = {})), function (e) {
    function t(t, s, n) {
      if (e.modules.storages.urlDataPairs.get(s)) {
        var a = e.modules.storages.urlDataPairs.get(s);-1 === a.refs.indexOf(t) && a.refs.push(t), n(a.dataURI, a.dataString);
      } else e.modules.Util.convertFileToDataURI(s, function (a, o) {
        e.modules.storages.urlDataPairs.set(s, { dataURI: a, dataString: o, refs: [t] }), n(a, o);
      });
    }function s(e) {
      var t = [],
          s = e.split('#')[1];if (!s) return [];var n = s.split(/[,|;]/g);return n.forEach(function (e) {
        var s = e.split('=');t.push({ algorithm: s[0], hash: s[1] });
      }), t;
    }function n(e, t, s) {
      window.crypto.subtle.digest(e, t).then(function (e) {
        return String.fromCharCode.apply(null, e) === s.hash;
      });
    }function a(e) {
      for (var t = 0, s = 0; s < e.length; s++) {
        if (48 <= e.charCodeAt(s) && 57 >= e.charCodeAt(s)) {
          t = s;break;
        }
      }return e.slice(0, t).toUpperCase() + '-' + e.slice(t);
    }function o(t, s) {
      if (0 === t.length) return !0;var o = null;t = t.reverse();for (var r = 0, l = t; r < l.length; r++) {
        var i = l[r],
            d = i.algorithm,
            c = i.hash,
            u = d.toLowerCase();if (-1 !== e.modules.constants.supportedHashes.indexOf(u)) {
          o = { algorithm: u, hash: c };break;
        }
      }if (null === o) return !1;var p = new window.TextEncoder('utf-8').encode(s);switch (o.algorithm) {case 'md5':
          return window.md5(s) === o.hash;case 'sha1':case 'sha384':case 'sha512':
          n(a(o.algorithm), p, o);}return !1;
    }function r(n, a, r) {
      var l = s(a);window.navigator.onLine && t(r, a, function (t, s) {
        var i = e.modules.storages.resources;e.modules.Util.setMapDefault(i, r, {}), i.get(r)[n] = { name: n, sourceUrl: a, dataURI: t, dataString: s, hashes: l, matchesHashes: o(l, s), crmUrl: 'https://www.localhost.io/resource/' + r + '/' + n }, browserAPI.storage.local.set({ resources: e.modules.Util.fromMap(i), urlDataPairs: e.modules.Util.fromMap(e.modules.storages.urlDataPairs) });
      });for (var i = e.modules.storages.resourceKeys, d = 0, c = i, u; d < c.length; d++) {
        if (u = c[d], u.name === n && u.scriptId === r) return;
      }i.push({ name: n, sourceUrl: a, hashes: l, scriptId: r }), browserAPI.storage.local.set({ resourceKeys: i });
    }function l(t, s) {
      for (var n = 0; n < e.modules.storages.resourceKeys.length; n++) {
        if (e.modules.storages.resourceKeys[n].name === t && e.modules.storages.resourceKeys[n].scriptId === s) {
          e.modules.storages.resourceKeys.splice(n, 1);break;
        }
      }if (e.modules.storages.resources.has(s) && e.modules.storages.resources.get(s)[t] && e.modules.storages.resources.get(s)[t].sourceUrl) {
        var a = e.modules.storages.resources.get(s)[t].sourceUrl,
            o = e.modules.storages.urlDataPairs.get(a);o && (o.refs.splice(o.refs.indexOf(s), 1), 0 === o.refs.length && e.modules.storages.urlDataPairs['delete'](a)), e.modules.storages.resources && e.modules.storages.resources.has(s) && e.modules.storages.resources.get(s)[t] && delete e.modules.storages.resources.get(s)[t], browserAPI.storage.local.set({ resourceKeys: e.modules.storages.resourceKeys, resources: e.modules.Util.fromMap(e.modules.storages.resources), urlDataPairs: e.modules.Util.fromMap(e.modules.storages.urlDataPairs) });
      }
    }function i(t) {
      var s = e.modules.storages.resources;e.modules.Util.convertFileToDataURI(t.sourceUrl, function (n, a) {
        if (!(s.has(t.scriptId) && s.get(t.scriptId)[t.name]) || s.get(t.scriptId)[t.name].dataURI !== n) {
          var r = s.get(t.scriptId)[t.name];if (o(r.hashes, a)) {
            var l = e.modules.storages.urlDataPairs.get(t.sourceUrl);l.dataURI = n, l.dataString = a, browserAPI.storage.local.set({ resources: e.modules.Util.fromMap(s), urlDataPairs: e.modules.Util.fromMap(e.modules.storages.urlDataPairs) });
          }
        }
      });
    }function d(e) {
      return function () {
        window.info('Attempting resource update'), i(e);
      };
    }e.initModule = function (t) {
      e.modules = t;
    }, e.handle = function (e, t) {
      switch (e.type) {case 'register':
          r(t, e.url, e.scriptId);break;case 'remove':
          l(t, e.scriptId);}
    }, e.updateResourceValues = function () {
      for (var t = e.modules.storages.resourceKeys, s = 0; s < t.length; s++) {
        setTimeout(d(t[s]), 1e3 * s);
      }
    };
  }(b || (b = {}));var x = function x(e, t, s, n) {
    return new (s || (s = Promise))(function (a, o) {
      function r(e) {
        try {
          i(n.next(e));
        } catch (t) {
          o(t);
        }
      }function l(e) {
        try {
          i(n['throw'](e));
        } catch (t) {
          o(t);
        }
      }function i(e) {
        e.done ? a(e.value) : new s(function (t) {
          t(e.value);
        }).then(r, l);
      }i((n = n.apply(e, t || [])).next());
    });
  },
      v = function v(e, s) {
    function n(e) {
      return function (t) {
        return a([e, t]);
      };
    }function a(n) {
      if (r) throw new TypeError('Generator is already executing.');for (; o;) {
        try {
          if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
              i = n;break;case 4:
              return o.label++, { value: n[1], done: !1 };case 5:
              o.label++, l = n[1], n = [0];continue;case 7:
              n = o.ops.pop(), o.trys.pop();continue;default:
              if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
                o = 0;continue;
              }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                o.label = n[1];break;
              }if (6 === n[0] && o.label < i[1]) {
                o.label = i[1], i = n;break;
              }if (i && o.label < i[2]) {
                o.label = i[2], o.ops.push(n);break;
              }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
        } catch (t) {
          n = [6, t], l = 0;
        } finally {
          r = i = 0;
        }
      }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
    }var o = { label: 0, sent: function sent() {
        if (1 & i[0]) throw i[1];return i[1];
      }, trys: [], ops: [] },
        r,
        l,
        i,
        d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
      return this;
    }), d;
  },
      I;(function (e) {
    var t;(function (e) {
      var t;(function (e) {
        var t;(function (e) {
          var t;(function (t) {
            function s(e, t) {
              switch (e.type) {case 'Identifier':
                  if ('localStorage' === e.name) return t.script = t.script.slice(0, e.start) + 'localStorageProxy' + t.script.slice(e.end), t.lines = t.script.split('\n'), !0;break;case 'VariableDeclaration':
                  for (var n = 0, a; n < e.declarations.length; n++) {
                    if (a = e.declarations[n], a.init && s(a.init, t)) return !0;
                  }break;case 'MemberExpression':
                  return !!s(e.object, t) || s(e.property, t);case 'CallExpression':
                  if (e.arguments && 0 < e.arguments.length) for (var n = 0; n < e.arguments.length; n++) {
                    if (s(e.arguments[n], t)) return !0;
                  }if (e.callee) return s(e.callee, t);break;case 'AssignmentExpression':
                  return s(e.right, t);case 'FunctionExpression':case 'FunctionDeclaration':
                  for (var n = 0; n < e.body.body.length; n++) {
                    if (s(e.body.body[n], t)) return !0;
                  }break;case 'ExpressionStatement':
                  return s(e.expression, t);case 'SequenceExpression':
                  for (var n = 0; n < e.expressions.length; n++) {
                    if (s(e.expressions[n], t)) return !0;
                  }break;case 'UnaryExpression':case 'ConditionalExpression':
                  return !!s(e.consequent, t) || s(e.alternate, t);case 'IfStatement':
                  if (s(e.consequent, t)) return !0;if (e.alternate) return s(e.alternate, t);break;case 'LogicalExpression':case 'BinaryExpression':
                  return !!s(e.left, t) || s(e.right, t);case 'BlockStatement':
                  for (var n = 0; n < e.body.length; n++) {
                    if (s(e.body[n], t)) return !0;
                  }break;case 'ReturnStatement':
                  return s(e.argument, t);case 'ObjectExpressions':
                  for (var n = 0; n < e.properties.length; n++) {
                    if (s(e.properties[n].value, t)) return !0;
                  }}return !1;
            }function n(e) {
              for (var t = 0, s = [], n = 0; n < e.length; n++) {
                s.push({ start: t, end: t += e[n].length + 1 });
              }return s;
            }function a(t) {
              var o = new e.TernFile('[doc]');o.text = t.join('\n');var r = new window.CodeMirror.TernServer({ defs: [] });window.tern.withContext(r.cx, function () {
                o.ast = window.tern.parse(o.text, r.passes, { directSourceFile: o, allowReturnOutsideFunction: !0, allowImportExportEverywhere: !0, ecmaVersion: r.ecmaVersion });
              });for (var l = o.ast.body, d = o.text, c = { lines: t, lineSeperators: n(t), script: d }, u = 0, i; u < l.length; u++) {
                if (i = l[u], s(i, c)) return a(c.lines);
              }return c.script;
            }t.replaceCalls = a;
          })(t = e.LocalStorageReplace || (e.LocalStorageReplace = {}));
        })(t = e.LegacyScriptReplace || (e.LegacyScriptReplace = {}));
      })(t = e.TransferFromOld || (e.TransferFromOld = {}));
    })(t = e.SetupHandling || (e.SetupHandling = {}));
  })(I || (I = {})), function (e) {
    var t;(function (e) {
      var t;(function (e) {
        var t;(function (e) {
          var t;(function (t) {
            function s(e, t) {
              return !(e !== t) || e.replace(/['|"|`]/g, '') === t;
            }function n(e, t, s) {
              for (var n = {}, a = 0, o; a < e.length; a++) {
                if (o = e[a], o.start <= t && (n.from = { index: o.start, line: a }), o.end >= s) {
                  n.to = { index: o.end, line: a };break;
                }
              }return n;
            }function a(e) {
              for (var t = e.parentExpressions.length - 1, s = e.parentExpressions[t]; s && 'CallExpression' !== s.type;) {
                s = e.parentExpressions[--t];
              }return e.parentExpressions[t];
            }function o(e, t) {
              t.functionCall = t.functionCall.map(function (e) {
                return e.replace(/['|"|`]/g, '');
              });var s = t.functionCall;s = s.reverse(), 'chrome' === s[0] && s.splice(0, 1);var n = e.callee.end,
                  a = e.end,
                  o = t.persistent.script.slice(n, a);return { call: s.join('.'), args: o };
            }function r(e, t, s) {
              for (var n = 0; n < t; n++) {
                s -= e[n].length + 1;
              }return s;
            }function l(e, t, s) {
              if (!e.isReturn || e.isValidReturn) {
                for (var n = e.persistent.lines, a = o(t, e), l = e.persistent.lines[s.from.line], d = r(e.persistent.lines, s.from.line, e.returnExpr && e.returnExpr.start || t.callee.start), c = r(e.persistent.lines, s.from.line, t.callee.end), u = l.slice(0, d) + ('window.crmAPI.chrome(\'' + a.call + '\')'), p = null, g; ' ' === u[p = u.length - 1];) {
                  u = u.slice(0, p);
                }if (';' === u[p = u.length - 1] && (u = u.slice(0, p)), '()' !== a.args) {
                  var i = a.args.split('\n');for (u += i[0], g = 1; g < i.length; g++) {
                    n[s.from.line + g] = i[g];
                  }
                }if (e.isReturn) {
                  for (var m = l.slice(c + a.args.split('\n')[0].length); 0 === m.indexOf(';');) {
                    m = m.slice(1);
                  }u += '.return(function(' + e.returnName + ') {' + m;for (var h = !0, y = 0, f = 0; f < e.persistent.lines.length; f++) {
                    if (0 === e.persistent.lines[f].indexOf('\t')) {
                      h = !0;break;
                    } else if (0 === e.persistent.lines[f].indexOf('  ')) {
                      for (var b = e.persistent.lines[f].split(' '), x = 0; x < b.length && ' ' === b[x]; x++) {
                        y++;
                      }h = !1;break;
                    }
                  }var v;h ? v = '\t' : (v = [], v[y] = ' ', v = v.join(' '));var I = null,
                      S = null;for (g = e.parentExpressions.length - 1; null === I && 0 !== g; g--) {
                    if ('BlockStatement' === e.parentExpressions[g].type || 'FunctionExpression' === e.parentExpressions[g].type && 'BlockStatement' === e.parentExpressions[g].body.type) {
                      for (I = r(e.persistent.lines, s.from.line, e.parentExpressions[g].end), S = 0; 0 < I;) {
                        I = r(e.persistent.lines, s.from.line + ++S, e.parentExpressions[g].end);
                      }I = r(e.persistent.lines, s.from.line + (S - 1), e.parentExpressions[g].end);
                    }
                  }null === S && (S = n.length - s.from.line + 1);for (var k = 0, C = n[s.from.line]; 0 === C.indexOf(v);) {
                    C = C.replace(v, ''), k++;
                  }var M = [],
                      T;M[k] = '';var w = M.join(v) + '}).send();',
                      N = e.persistent.lines.length + 1;for (g = s.from.line; g < s.from.line + (S - 1); g++) {
                    n[g] = v + n[g];
                  }for (g = s.from.line + (S - 1); g < N; g++) {
                    T = n[g], n[g] = w, w = T;
                  }
                } else n[s.from.line + (g - 1)] = n[s.from.line + (g - 1)] + '.send();', 1 === g && (u += '.send();');n[s.from.line] = u;
              }
            }function d(e, t, o) {
              if (t.parentExpressions.push(e), e.arguments && 0 < e.arguments.length) for (var p = 0; p < e.arguments.length; p++) {
                if (u(e.arguments[p], c(t), o)) return !0;
              }if ('MemberExpression' !== e.type) return u(e, c(t), o);if (e.property && (t.functionCall = t.functionCall || [], t.functionCall.push(e.property.name || e.property.raw)), e.object && e.object.name) {
                var i = s(e.object.name, 'window') && s(e.property.name || e.property.raw, 'chrome');if (i || s(e.object.name, 'chrome')) {
                  t.expression = e;var g = a(t),
                      m = n(t.persistent.lineSeperators, g.start, g.end);return t.isReturn && !t.isValidReturn ? (m.from.index = r(t.persistent.lines, m.from.line, m.from.index), m.to.index = r(t.persistent.lines, m.to.line, m.to.index), o(m, t.persistent.passes), !1) : (t.persistent.diagnostic || l(t, g, m), !0);
                }
              } else if (e.object) return d(e.object, t, o);return !1;
            }function c(e) {
              var t = e.parentExpressions || [],
                  s = {};for (var n in e) {
                e.hasOwnProperty(n) && 'parentExpressions' !== n && 'persistent' !== n && (s[n] = e[n]);
              }for (var a = [], o = 0; o < t.length; o++) {
                a.push(t[o]);
              }return s.persistent = e.persistent, s.parentExpressions = a, s;
            }function u(e, t, s) {
              switch (t.parentExpressions = t.parentExpressions || [], t.parentExpressions.push(e), e.type) {case 'VariableDeclaration':
                  t.isValidReturn = 1 === e.declarations.length;for (var n = 0, a; n < e.declarations.length; n++) {
                    if (a = e.declarations[n], a.init) {
                      var o = c(t),
                          r = a.id.name;if (o.isReturn = !0, o.returnExpr = e, o.returnName = r, u(a.init, o, s)) return !0;
                    }
                  }break;case 'CallExpression':case 'MemberExpression':
                  var l = [];if (e.arguments && 0 < e.arguments.length) for (var n = 0; n < e.arguments.length; n++) {
                    if ('MemberExpression' !== e.arguments[n].type && 'CallExpression' !== e.arguments[n].type) l.push(e.arguments[n]);else if (u(e.arguments[n], c(t), s)) return !0;
                  }if (t.functionCall = [], e.callee && d(e.callee, t, s)) return !0;for (var n = 0; n < l.length; n++) {
                    if (u(l[n], c(t), s)) return !0;
                  }break;case 'AssignmentExpression':
                  return t.isReturn = !0, t.returnExpr = e, t.returnName = e.left.name, u(e.right, t, s);case 'FunctionExpression':case 'FunctionDeclaration':
                  t.isReturn = !1;for (var n = 0; n < e.body.body.length; n++) {
                    if (u(e.body.body[n], c(t), s)) return !0;
                  }break;case 'ExpressionStatement':
                  return u(e.expression, t, s);case 'SequenceExpression':
                  t.isReturn = !1;for (var i = e.expressions.length - 1, n = 0; n < e.expressions.length; n++) {
                    if (n === i && (t.isReturn = !0), u(e.expressions[n], c(t), s)) return !0;
                  }break;case 'UnaryExpression':case 'ConditionalExpression':
                  if (t.isValidReturn = !1, t.isReturn = !0, u(e.consequent, c(t), s)) return !0;if (u(e.alternate, c(t), s)) return !0;break;case 'IfStatement':
                  if (t.isReturn = !1, u(e.consequent, c(t), s)) return !0;if (e.alternate && u(e.alternate, c(t), s)) return !0;break;case 'LogicalExpression':case 'BinaryExpression':
                  if (t.isReturn = !0, t.isValidReturn = !1, u(e.left, c(t), s)) return !0;if (u(e.right, c(t), s)) return !0;break;case 'BlockStatement':
                  t.isReturn = !1;for (var n = 0; n < e.body.length; n++) {
                    if (u(e.body[n], c(t), s)) return !0;
                  }break;case 'ReturnStatement':
                  return t.isReturn = !0, t.returnExpr = e, t.isValidReturn = !1, u(e.argument, t, s);case 'ObjectExpressions':
                  t.isReturn = !0, t.isValidReturn = !1;for (var n = 0; n < e.properties.length; n++) {
                    if (u(e.properties[n].value, c(t), s)) return !0;
                  }}return !1;
            }function i(e) {
              return function (t, s) {
                e[s] ? e[s].push(t) : e[s] = [t];
              };
            }function p(t, s, n) {
              var a = new e.TernFile('[doc]');a.text = t.join('\n');var o = new window.CodeMirror.TernServer({ defs: [] });window.tern.withContext(o.cx, function () {
                a.ast = window.tern.parse(a.text, o.passes, { directSourceFile: a, allowReturnOutsideFunction: !0, allowImportExportEverywhere: !0, ecmaVersion: o.ecmaVersion });
              });for (var r = a.ast.body, l = 0, d = [], c = 0; c < t.length; c++) {
                d.push({ start: l, end: l += t[c].length + 1 });
              }var i = a.text,
                  g = { lines: t, lineSeperators: d, script: i, passes: s },
                  m;if (0 === s) {
                g.diagnostic = !0;for (var c = 0; c < r.length; c++) {
                  m = r[c], u(m, { persistent: g }, n);
                }g.diagnostic = !1;
              }for (var c = 0; c < r.length; c++) {
                if (m = r[c], u(m, { persistent: g }, n)) {
                  i = p(g.lines.join('\n').split('\n'), s + 1, n);break;
                }
              }return i;
            }function g(e) {
              var t = [];return e.forEach(function (e, s) {
                t[s] = JSON.stringify(e);
              }), t = t.filter(function (e, s) {
                return t.indexOf(e) === s;
              }), t.map(function (e) {
                return JSON.parse(e);
              });
            }t.replace = function (e, t) {
              var s = e.indexOf('/*execute locally*/');-1 !== s && (e = e.replace('/*execute locally*/\n', ''), s === e.indexOf('/*execute locally*/') && (e = e.replace('/*execute locally*/', '')));var n = [];try {
                e = p(e.split('\n'), 0, i(n));
              } catch (s) {
                return t(null, null, !0), e;
              }var a = n[0],
                  o = n[n.length - 1];return o && t(g(a), g(o)), e;
            };
          })(t = e.ChromeCallsReplace || (e.ChromeCallsReplace = {}));
        })(t = e.LegacyScriptReplace || (e.LegacyScriptReplace = {}));
      })(t = e.TransferFromOld || (e.TransferFromOld = {}));
    })(t = e.SetupHandling || (e.SetupHandling = {}));
  }(I || (I = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        var s;(function (t) {
          function s(t) {
            var s = this;return function (n, a, o) {
              return x(s, void 0, void 0, function () {
                var s, r;return v(this, function (l) {
                  switch (l.label) {case 0:
                      return [4, browserAPI.storage.local.get()];case 1:
                      return s = l.sent().upgradeErrors, r = void 0 === s ? {} : s, r[t] = e.modules.storages.storageLocal.upgradeErrors[t] = { oldScript: n, newScript: a, generalError: o }, browserAPI.storage.local.set({ upgradeErrors: r }), [2];}
                });
              });
            };
          }var n = function () {
            return function (e) {
              this.name = e;
            };
          }();t.TernFile = n, t.generateScriptUpgradeErrorHandler = s, t.convertScriptFromLegacy = function (e, n, a) {
            var o = !1,
                r = e.indexOf('/*execute locally*/');-1 !== r && (e = e.replace('/*execute locally*/\n', ''), r === e.indexOf('/*execute locally*/') && (e = e.replace('/*execute locally*/', '')), o = !0);try {
              switch (a) {case 0:
                  e = t.ChromeCallsReplace.replace(e, s(n));break;case 1:
                  e = o ? t.LocalStorageReplace.replaceCalls(e.split('\n')) : e;break;case 2:
                  var l = o ? t.LocalStorageReplace.replaceCalls(e.split('\n')) : e;e = t.ChromeCallsReplace.replace(l, s(n));}
            } catch (t) {
              return e;
            }return e;
          };
        })(s = t.LegacyScriptReplace || (t.LegacyScriptReplace = {}));
      })(s = t.TransferFromOld || (t.TransferFromOld = {}));
    })(t = e.SetupHandling || (e.SetupHandling = {}));
  }(I || (I = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        function s() {
          if ('undefined' !== typeof localStorage && ('undefined' !== typeof window.indexedDB || 'undefined' !== typeof window.webkitIndexedDB)) {
            var e = JSON.stringify(localStorage),
                t = window.indexedDB || window.webkitIndexedDB,
                s = t.open('localStorageBackup', 1);s.onerror = function () {
              window.log('Error backing up localStorage data');
            }, s.onupgradeneeded = function (t) {
              var s = t.target.result,
                  n = s.createObjectStore('data', { keyPath: 'id' });n.add({ id: 0, data: e });
            };
          }
        }function n(t, s, n) {
          return x(this, void 0, void 0, function () {
            var a, o, r, l, i, d, c, u, p, g, m, h, y, f, b, x, I, S, k, C, M;return v(this, function (v) {
              switch (v.label) {case 0:
                  return o = t.split('%123'), r = o[0], l = o[1], i = o[2], d = l.toLowerCase(), 'link' === d ? [3, 1] : 'divider' === d ? [3, 3] : 'menu' === d ? [3, 5] : 'script' === d ? [3, 7] : [3, 9];case 1:
                  return c = void 0, c = -1 < i.indexOf(', ') ? i.split(', ') : i.split(','), p = (u = e.modules.constants.templates).getDefaultLinkNode, g = { name: r }, [4, e.modules.Util.generateItemId()];case 2:
                  return a = p.apply(u, [(g.id = v.sent(), g.value = c.map(function (e) {
                    return { newTab: s, url: e };
                  }), g)]), [3, 9];case 3:
                  return h = (m = e.modules.constants.templates).getDefaultDividerNode, y = { name: r }, [4, e.modules.Util.generateItemId()];case 4:
                  return a = h.apply(m, [(y.id = v.sent(), y.isLocal = !0, y)]), [3, 9];case 5:
                  return b = (f = e.modules.constants.templates).getDefaultMenuNode, x = { name: r }, [4, e.modules.Util.generateItemId()];case 6:
                  return a = b.apply(f, [(x.id = v.sent(), x.children = i, x.isLocal = !0, x)]), [3, 9];case 7:
                  return I = i.split('%124'), S = I[0], k = I[1], C = void 0, '0' !== S && '2' !== S && (C = S.split('1,')[1].split(','), C = C.map(function (e) {
                    return { not: !1, url: e.trim() };
                  }).filter(function (e) {
                    return '' !== e.url;
                  }), S = '2'), [4, e.modules.Util.generateItemId()];case 8:
                  return M = v.sent(), a = e.modules.constants.templates.getDefaultScriptNode({ name: r, id: M, value: { launchMode: parseInt(S, 10), updateNotice: !0, oldScript: k, script: e.SetupHandling.TransferFromOld.LegacyScriptReplace.convertScriptFromLegacy(k, M, n) }, isLocal: !0 }), C && (a.triggers = C), [3, 9];case 9:
                  return [2, a];}
            });
          });
        }function a(e, t, s, n) {
          for (; 0 !== n && t[s.index]; s.index++, n--) {
            var o = t[s.index];if ('menu' === o.type) {
              var r = ~~o.children;o.children = [], s.index++, a(o.children, t, s, r), s.index--;
            }e.push(o);
          }
        }t.transferCRMFromOld = function (t, o, r) {
          return void 0 === o && (o = localStorage), void 0 === r && (r = 2), x(this, void 0, void 0, function () {
            var l, d, c, i, u, p;return v(this, function (g) {
              switch (g.label) {case 0:
                  return s(), [4, e.SetupHandling.loadTernFiles()];case 1:
                  g.sent(), l = parseInt(o.getItem('numberofrows'), 10) + 1, d = [], c = 1, g.label = 2;case 2:
                  return c < l ? (u = (i = d).push, [4, n(o.getItem(c + ''), t, r)]) : [3, 5];case 3:
                  u.apply(i, [g.sent()]), g.label = 4;case 4:
                  return c++, [3, 2];case 5:
                  return p = [], a(p, d, { index: 0 }, d.length), [2, p];}
            });
          });
        };
      })(s = t.TransferFromOld || (t.TransferFromOld = {}));
    })(t = e.SetupHandling || (e.SetupHandling = {}));
  }(I || (I = {})), function (e) {
    var t;(function (t) {
      function s() {
        return x(this, void 0, void 0, function () {
          var t, s, a, o, r;return v(this, function (l) {
            switch (l.label) {case 0:
                return [4, n()];case 1:
                return t = l.sent(), s = window.md5(JSON.stringify(t)), [4, e.modules.Util.isTamperMonkeyEnabled()];case 2:
                return a = l.sent(), [4, e.modules.Util.isStylishInstalled()];case 3:
                return o = l.sent(), r = { requestPermissions: [], editing: null, selectedCrmType: [!0, !0, !0, !0, !0, !0], jsLintGlobals: ['window', '$', 'jQuery', 'crmAPI'], globalExcludes: [''], useStorageSync: !0, notFirstTime: !0 }, [4, browserAPI.runtime.getManifest()];case 4:
                return [2, [(r.lastUpdatedAt = l.sent().version, r.authorName = 'anonymous', r.showOptions = !0, r.recoverUnsavedData = !1, r.CRMOnPage = !1, r.editCRMInRM = !0, r.catchErrors = !0, r.useAsUserscriptInstaller = !a, r.useAsUserstylesInstaller = !o, r.hideToolsRibbon = !1, r.shrinkTitleRibbon = !1, r.libraries = [], r.settingsVersionData = { current: { hash: s, date: new Date().getTime() }, latest: { hash: s, date: new Date().getTime() }, wasUpdated: !1 }, r.nodeStorage = {}, r.resources = {}, r.resourceKeys = [], r.urlDataPairs = {}, r), t]];}
          });
        });
      }function n() {
        return x(this, void 0, void 0, function () {
          var t, s, n, a;return v(this, function (o) {
            switch (o.label) {case 0:
                return t = { editor: { keyBindings: { goToDef: 'Alt-.', rename: 'Ctrl-Q' }, cssUnderlineDisabled: !1, disabledMetaDataHighlight: !1, theme: 'dark', zoom: '100' } }, n = (s = e.modules.constants.templates).getDefaultLinkNode, a = {}, [4, e.modules.Util.generateItemId()];case 1:
                return [2, (t.crm = [n.apply(s, [(a.id = o.sent(), a.isLocal = !0, a)])], t.settingsLastUpdatedAt = new Date().getTime(), t.latestId = e.modules.globalObject.globals.latestId, t.rootName = 'Custom Menu', t.nodeStorageSync = {}, t)];}
          });
        });
      }function a(e) {
        return x(this, void 0, void 0, function () {
          var t, n, a, o, r, i, d;return v(this, function (c) {
            switch (c.label) {case 0:
                return window.localStorage.setItem('transferToVersion2', 'true'), t = { done: !1, onDone: null }, [4, s()];case 1:
                return n = c.sent(), a = n[0], o = n[1], browserAPI.storage.local.set(a), l(o), e && (o.crm = e), r = a, i = JSON.parse(JSON.stringify(a)), d = { settingsStorage: o, storageLocalCopy: i, chromeStorageLocal: r }, t.value = d, [2, d];}
          });
        });
      }function o() {
        return new Promise(function (t, s) {
          r(['/js/libraries/tern/walk.js', '/js/libraries/tern/signal.js', '/js/libraries/tern/acorn.js', '/js/libraries/tern/tern.js', '/js/libraries/tern/ternserver.js', '/js/libraries/tern/def.js', '/js/libraries/tern/comment.js', '/js/libraries/tern/infer.js'].map(function (t) {
            return function () {
              return e.modules.Util.execFile(t);
            };
          })).then(function () {
            t(null);
          }, function (e) {
            s(e);
          });
        });
      }function r(e, t) {
        return void 0 === t && (t = 0), new Promise(function (s, n) {
          e[t]().then(function (a) {
            t + 1 >= e.length ? s(a) : r(e, t + 1).then(function (e) {
              s(e);
            }, function (e) {
              n(e);
            });
          }, function (e) {
            n(e);
          });
        });
      }function l(t) {
        return x(this, void 0, void 0, function () {
          var s = this,
              n,
              a;return v(this, function (o) {
            switch (o.label) {case 0:
                return n = JSON.stringify(t), !(101400 <= n.length) && e.supportsStorageSync() ? [3, 5] : [4, browserAPI.storage.local.set({ useStorageSync: !1 })];case 1:
                return o.sent(), [4, browserAPI.storage.local.set({ settings: t })];case 2:
                return o.sent(), e.supportsStorageSync() ? [4, browserAPI.storage.sync.set({ indexes: -1 })] : [3, 4];case 3:
                o.sent(), o.label = 4;case 4:
                return [3, 8];case 5:
                return [4, browserAPI.storage.sync.clear()];case 6:
                return o.sent(), a = e.cutData(n), [4, browserAPI.storage.sync.set(a).then(function () {
                  browserAPI.storage.local.set({ settings: null });
                })['catch'](function (n) {
                  return x(s, void 0, void 0, function () {
                    return v(this, function (s) {
                      switch (s.label) {case 0:
                          return window.log('Error on uploading to storage.sync, uploading to storage.local instead', n), e.modules.storages.storageLocal.useStorageSync = !1, [4, browserAPI.storage.local.set({ useStorageSync: !1 })];case 1:
                          return s.sent(), [4, browserAPI.storage.local.set({ settings: t })];case 2:
                          return s.sent(), [4, browserAPI.storage.sync.set({ indexes: -1 })];case 3:
                          return s.sent(), [2];}
                    });
                  });
                })];case 7:
                o.sent(), o.label = 8;case 8:
                return [2];}
          });
        });
      }t.handleFirstRun = a, t.handleTransfer = function () {
        return x(this, void 0, void 0, function () {
          var e, s;return v(this, function (n) {
            switch (n.label) {case 0:
                return window.localStorage.setItem('transferToVersion2', 'true'), browserAPI.storage.local.set({ isTransfer: !0 }), window.CodeMirror && window.CodeMirror.TernServer ? [3, 2] : [4, new Promise(function (e) {
                  o().then(function () {
                    e(null);
                  }, function (e) {
                    window.log('Failed to load tern files', e);
                  });
                })];case 1:
                n.sent(), n.label = 2;case 2:
                return e = 'true' === window.localStorage.getItem('whatpage'), s = a, [4, t.TransferFromOld.transferCRMFromOld(e)];case 3:
                return [4, s.apply(void 0, [n.sent()])];case 4:
                return [2, n.sent()];}
          });
        });
      }, t.loadTernFiles = o;
    })(t = e.SetupHandling || (e.SetupHandling = {}));
  }(I || (I = {})), function (t) {
    function e() {
      return 'sync' in BrowserAPI.getSrc().storage && 'get' in BrowserAPI.getSrc().storage.sync;
    }function s(e, s) {
      var n = null;return t.modules.Util.crmForEach(s, function (t) {
        t.id === e && (n = t);
      }), n;
    }function n(e, s) {
      if (!e) {
        var n = [];return t.modules.Util.crmForEach(s, function (e) {
          n.push(e);
        }), { additions: n, removals: [], same: [] };
      }var o = [];t.modules.Util.crmForEach(e, function (e) {
        o.push(e.id);
      });var r = [];t.modules.Util.crmForEach(s, function (e) {
        r.push(e.id);
      });for (var l = [], i = [], d = [], c = 0, u = o, p; c < u.length; c++) {
        p = u[c], -1 === r.indexOf(p) && i.push(a(e, p));
      }for (var g = 0, m = r, h; g < m.length; g++) {
        h = m[g], -1 === o.indexOf(h) ? l.push(a(s, h)) : d.push(a(s, h));
      }return { additions: l, removals: i, same: d };
    }function a(e, t) {
      for (var s = 0, n = e, o; s < n.length; s++) {
        if (o = n[s], o.id === t) return o;if ('menu' === o.type && o.children) {
          var r = a(o.children, t);if (r) return r;
        }
      }return null;
    }function o(s) {
      return x(this, void 0, void 0, function () {
        var n = this,
            a,
            o;return v(this, function (l) {
          switch (l.label) {case 0:
              return a = JSON.stringify(t.modules.storages.settingsStorage), [4, browserAPI.storage.local.set({ settingsVersionData: { current: { hash: window.md5(a), date: new Date().getTime() }, latest: t.modules.storages.storageLocal.settingsVersionData.latest, wasUpdated: t.modules.storages.storageLocal.settingsVersionData.wasUpdated } })];case 1:
              return (l.sent(), t.modules.storages.storageLocal.useStorageSync && e()) ? [3, 7] : k ? (S = JSON.stringify(t.modules.storages.settingsStorage), [4, d(s)]) : [3, 5];case 2:
              return l.sent(), e() ? [4, browserAPI.storage.sync.set({ indexes: -1 })] : [3, 4];case 3:
              l.sent(), l.label = 4;case 4:
              return [2];case 5:
              return [4, browserAPI.storage.local.set({ settings: t.modules.storages.settingsStorage }).then(function () {
                return x(n, void 0, void 0, function () {
                  return v(this, function (t) {
                    switch (t.label) {case 0:
                        return [4, d(s)];case 1:
                        return t.sent(), e() ? [4, browserAPI.storage.sync.set({ indexes: -1 })] : [3, 3];case 2:
                        t.sent(), t.label = 3;case 3:
                        return [2];}
                  });
                });
              })['catch'](function (s) {
                window.log('Error on uploading to browser.storage.local ', s), (-1 < s.message.indexOf('MAX_WRITE_OPERATIONS_PER_MINUTE') || -1 < s.message.indexOf('MAX_WRITE_OPERATIONS_PER_HOUR')) && (S = JSON.stringify(t.modules.storages.settingsStorage), k && window.clearTimeout(k), k = window.setTimeout(function () {
                  return x(n, void 0, void 0, function () {
                    return v(this, function (e) {
                      switch (e.label) {case 0:
                          return [4, browserAPI.storage.local.set({ settings: S })];case 1:
                          return e.sent(), S = null, k = null, [2];}
                    });
                  });
                }, -1 < s.message.indexOf('MAX_WRITE_OPERATIONS_PER_HOUR') ? 3600000 : 3600000));
              })];case 6:
              return l.sent(), [3, 13];case 7:
              return !(101400 <= a.length) && e() ? [3, 10] : [4, browserAPI.storage.local.set({ useStorageSync: !1 })];case 8:
              return l.sent(), [4, r('settings', s)];case 9:
              return l.sent(), [3, 13];case 10:
              return o = i(a), [4, browserAPI.storage.sync.clear()];case 11:
              return l.sent(), [4, browserAPI.storage.sync.set(o).then(function () {
                return x(n, void 0, void 0, function () {
                  return v(this, function (e) {
                    switch (e.label) {case 0:
                        return [4, d(s)];case 1:
                        return e.sent(), [4, browserAPI.storage.local.set({ settings: null })];case 2:
                        return e.sent(), [2];}
                  });
                });
              })['catch'](function (e) {
                return x(n, void 0, void 0, function () {
                  return v(this, function (n) {
                    switch (n.label) {case 0:
                        return window.log('Error on uploading to storage.sync, uploading to storage.local instead', e), t.modules.storages.storageLocal.useStorageSync = !1, [4, browserAPI.storage.local.set({ useStorageSync: !1 })];case 1:
                        return n.sent(), [4, r('settings', s)];case 2:
                        return n.sent(), [2];}
                  });
                });
              })];case 12:
              l.sent(), l.label = 13;case 13:
              return [2];}
        });
      });
    }function r(e, s, n) {
      return void 0 === n && (n = null), x(this, void 0, void 0, function () {
        var a, l, i;return v(this, function (d) {
          switch (d.label) {case 0:
              return a = e, 'local' === a ? [3, 1] : 'settings' === a ? [3, 7] : 'libraries' === a ? [3, 9] : [3, 10];case 1:
              return [4, browserAPI.storage.local.set(t.modules.storages.storageLocal)];case 2:
              d.sent(), l = 0, d.label = 3;case 3:
              return l < s.length ? 'useStorageSync' === s[l].key ? (i = s[l], [4, r('settings', [], i.newValue)]) : [3, 5] : [3, 6];case 4:
              d.sent(), d.label = 5;case 5:
              return l++, [3, 3];case 6:
              return [3, 10];case 7:
              return t.modules.storages.settingsStorage.settingsLastUpdatedAt = new Date().getTime(), null !== n && (t.modules.storages.storageLocal.useStorageSync = n), [4, o(s)];case 8:
              return d.sent(), [3, 10];case 9:
              return browserAPI.storage.local.set({ libraries: s }), [3, 10];case 10:
              return [2];}
        });
      });
    }function l(e, s, n, a) {
      return x(this, void 0, void 0, function () {
        var o;return v(this, function (r) {
          switch (r.label) {case 0:
              return window.info('Setting global data stores'), t.modules.storages.storageLocal = e, t.modules.storages.settingsStorage = s, t.modules.storages.globalExcludes = c(n, 'globalExcludes', []).map(t.modules.URLParsing.validatePatternUrl).filter(function (e) {
                return null !== e;
              }), o = t.modules.Util.toMap, t.modules.storages.resources = o(c(n, 'resources', {})), t.modules.storages.nodeStorage = o(c(n, 'nodeStorage', {})), t.modules.storages.nodeStorageSync = o(c(s, 'nodeStorageSync', {})), t.modules.storages.resourceKeys = c(n, 'resourceKeys', []), t.modules.storages.urlDataPairs = o(c(n, 'urlDataPairs', {})), window.info('Building CRM representations'), [4, t.modules.CRMNodes.updateCRMValues()];case 1:
              return r.sent(), a && a(), [2];}
        });
      });
    }function i(e) {
      var t = {},
          s = e.match(/[\s\S]{1,5000}/g);return s.forEach(function (e, s) {
        t['section' + s] = e;
      }), t.indexes = s.length, t;
    }function d(e) {
      return x(this, void 0, void 0, function () {
        var s, n, a, o, r;return v(this, function (l) {
          switch (l.label) {case 0:
              s = 0, l.label = 1;case 1:
              return s < e.length ? 'crm' !== e[s].key && 'showOptions' !== e[s].key ? [3, 6] : [4, t.modules.CRMNodes.updateCRMValues()] : [3, 14];case 2:
              return l.sent(), t.modules.CRMNodes.TS.compileAllInTree(), [4, t.checkBackgroundPagesForChange({ change: e[s] })];case 3:
              return l.sent(), [4, t.modules.CRMNodes.buildPageCRM()];case 4:
              return l.sent(), [4, t.modules.MessageHandling.signalNewCRM()];case 5:
              return l.sent(), [3, 13];case 6:
              return 'latestId' === e[s].key ? (n = e[s], t.modules.globalObject.globals.latestId = n.newValue, browserAPI.runtime.sendMessage({ type: 'idUpdate', latestId: n.newValue })['catch'](function (e) {
                if ('Could not establish connection. Receiving end does not exist.' === e.message || 'The message port closed before a response was received.' === e.message) ;else throw e;
              }), [3, 13]) : [3, 7];case 7:
              return 'rootName' === e[s].key ? (a = e[s], [4, t.modules.Util.lock(0)]) : [3, 13];case 8:
              o = l.sent(), l.label = 9;case 9:
              return l.trys.push([9, 11,, 13]), [4, browserAPI.contextMenus.update(t.modules.crmValues.rootId, { title: a.newValue })];case 10:
              return l.sent(), o(), [3, 13];case 11:
              return r = l.sent(), o(), [4, t.modules.CRMNodes.buildPageCRM()];case 12:
              return l.sent(), [3, 13];case 13:
              return s++, [3, 1];case 14:
              return [2];}
        });
      });
    }function c(e, t, s) {
      var n;return e[t] ? e[t] : (browserAPI.storage.local.set((n = {}, n[t] = s, n)), s);
    }function u(e, t, s) {
      void 0 === s && (s = !1);for (var n = 0; n < t.length; n++) {
        if (s) {
          for (var a = t[n].key.split('.'), o = e, r = 0; r < a.length - 1; r++) {
            a[r] in o || (o[a[r]] = {}), o = o[a[r]];
          }o[a[n]] = t[n].newValue;
        } else e[t[n].key] = t[n].newValue;
      }
    }function p(e, s, n, a) {
      var o = t.modules.crm.crmById.get(e);o.storage = t.modules.storages.nodeStorage.get(e), browserAPI.storage.local.set({ nodeStorage: t.modules.Util.fromMap(t.modules.storages.nodeStorage) });var r = t.modules.crmValues.tabData;t.modules.Util.iterateMap(r, function (o, r) {
        var l = r.nodes;o !== s && l.has(e) && l.get(e).forEach(function (e) {
          e.port && t.modules.Util.postMessage(e.port, { changes: n, isSync: a, messageType: 'storageUpdate' });
        });
      });
    }function g(e) {
      var t = e.split('.'),
          s = t[0],
          n = t[1],
          a = t[2];return s = ~~s, n = ~~n, a = ~~a, { major: s, minor: n, patch: a };
    }function m(e, t) {
      var s = g(e),
          n = g(t);if (s.major > n.major) return -1;return s.major < n.major ? 1 : s.minor > n.minor ? -1 : s.minor < n.minor ? 1 : s.patch > n.patch ? -1 : s.patch < n.patch ? 1 : 0;
    }function h(e, t, s) {
      return 1 === m(e, s) && 1 === m(s, t);
    }function y(e) {
      var t = [!1, !1, !1, !1, !1, !1];return t[e] = !0, t;
    }function f(e, s) {
      return x(this, void 0, void 0, function () {
        var n = this,
            a,
            o,
            o;return v(this, function (r) {
          switch (r.label) {case 0:
              return a = { beforeSyncLoad: [], afterSyncLoad: [], afterSync: [] }, h(e, s, '2.0.4') && a.afterSync.push(function () {
                return x(n, void 0, void 0, function () {
                  var e = this;return v(this, function (s) {
                    switch (s.label) {case 0:
                        return [4, t.modules.Util.crmForEachAsync(t.modules.crm.crmTree, function (s) {
                          return x(e, void 0, void 0, function () {
                            var e, n, a, o, r;return v(this, function (l) {
                              switch (l.label) {case 0:
                                  return 'script' === s.type ? (e = s.value, [4, t.modules.Util.getScriptNodeScript(s)]) : [3, 3];case 1:
                                  return e.oldScript = l.sent(), n = t.SetupHandling.TransferFromOld.LegacyScriptReplace, a = s.value, r = (o = n.ChromeCallsReplace).replace, [4, t.modules.Util.getScriptNodeScript(s)];case 2:
                                  a.script = r.apply(o, [l.sent(), n.generateScriptUpgradeErrorHandler(s.id)]), l.label = 3;case 3:
                                  return s.isLocal && (s.nodeInfo.installDate = new Date().toLocaleDateString(), s.nodeInfo.lastUpdatedAt = Date.now(), s.nodeInfo.version = '1.0', s.nodeInfo.isRoot = !1, s.nodeInfo.source = 'local', s.onContentTypes[0] && s.onContentTypes[1] && s.onContentTypes[2] && !s.onContentTypes[3] && !s.onContentTypes[4] && !s.onContentTypes[5] && (s.onContentTypes = [!0, !0, !0, !0, !0, !0])), [2];}
                            });
                          });
                        })];case 1:
                        return s.sent(), [4, t.modules.CRMNodes.updateCrm()];case 2:
                        return s.sent(), [2];}
                  });
                });
              }), h(e, s, '2.0.11') ? [4, t.modules.Util.isTamperMonkeyEnabled()] : [3, 2];case 1:
              o = r.sent(), t.modules.storages.storageLocal.useAsUserscriptInstaller = !o, browserAPI.storage.local.set({ useAsUserscriptInstaller: !o }), r.label = 2;case 2:
              return h(e, s, '2.0.15') && (a.afterSyncLoad.push(function (e) {
                return e.rootName = 'Custom Menu', e;
              }), a.afterSync.push(function () {
                return x(n, void 0, void 0, function () {
                  return v(this, function (e) {
                    switch (e.label) {case 0:
                        return [4, t.uploadChanges('settings', [{ key: 'rootName', oldValue: void 0, newValue: 'Custom Menu' }])];case 1:
                        return e.sent(), [2];}
                  });
                });
              })), h(e, s, '2.1.0') && (a.beforeSyncLoad.push(function (e) {
                for (var t = e.libraries, s = 0, n = t, a; s < n.length; s++) {
                  a = n[s], a.ts = { enabled: !1, code: {} };
                }return browserAPI.storage.local.set({ libraries: t }), 'number' === typeof e.selectedCrmType && (e.selectedCrmType = y(e.selectedCrmType), browserAPI.storage.local.set({ selectedCrmType: e.selectedCrmType })), e.editing && 'number' === typeof e.editing.crmType && (e.editing.crmType = y(e.editing.crmType), browserAPI.storage.local.set({ editing: e.editing })), e;
              }), a.afterSync.push(function () {
                t.modules.Util.crmForEach(t.modules.crm.crmTree, function (e) {
                  ('script' === e.type || 'stylesheet' === e.type) && e.nodeInfo && e.nodeInfo.source && 'local' !== e.nodeInfo.source && (e.nodeInfo.source.autoUpdate = !0), 'script' === e.type && (e.value.ts = { enabled: !1, backgroundScript: {}, script: {} });
                });var e = ['var query;', 'var url = "LINK";', 'if (crmAPI.getSelection()) {', 'query = crmAPI.getSelection();', '} else {', 'query = window.prompt(\'Please enter a search query\');', '}', 'if (query) {', 'window.open(url.replace(/%s/g,query), \'_blank\');', '}'];t.modules.Util.crmForEach(t.modules.crm.crmTree, function (t) {
                  if ('script' === t.type) {
                    var s = t.value.script.split('\n');if (s.length !== e.length || s[0] !== e[0]) return;for (var n = 2; n < s.length; n++) {
                      if (s[n] !== e[n] && 8 !== n) return;
                    }if (-1 === s[1].indexOf('var url = "')) return;s[8] = 'window.open(url.replace(/%s/g,window.encodeURIComponent(query)), \'_blank\');', t.value.script = s.join('\n');
                  }
                }), t.modules.CRMNodes.updateCrm();
              })), h(e, s, '2.1.4') ? [4, t.modules.Util.isStylishInstalled()] : [3, 4];case 3:
              o = r.sent(), t.modules.storages.storageLocal.useAsUserstylesInstaller = !o, browserAPI.storage.local.set({ useAsUserstylesInstaller: !o }), r.label = 4;case 4:
              return browserAPI.storage.local.set({ lastUpdatedAt: s }), [2, a];}
        });
      });
    }function b(e) {
      return x(this, void 0, void 0, function () {
        var s, n;return v(this, function (a) {
          switch (a.label) {case 0:
              return [4, browserAPI.runtime.getManifest()];case 1:
              return s = a.sent().version, localStorage.getItem('transferToVersion2') && e.lastUpdatedAt === s ? [2, { type: 'noChanges' }] : [3, 2];case 2:
              return localStorage.getItem('transferToVersion2') && e.lastUpdatedAt ? (window.log('Upgrading minor version from', e.lastUpdatedAt, 'to', s), [4, f(e.lastUpdatedAt, s)]) : [3, 4];case 3:
              return n = a.sent(), n.beforeSyncLoad.forEach(function (t) {
                e = t(e);
              }), [2, { type: 'upgradeVersion', afterSync: n.afterSync, afterSyncLoad: n.afterSyncLoad, storageLocal: e }];case 4:
              return window.localStorage.getItem('transferToVersion2') || void 0 === window.localStorage.getItem('numberofrows') || null === window.localStorage.getItem('numberofrows') ? (window.info('Initializing for first run'), [2, { type: 'firstTimeCallback', fn: t.SetupHandling.handleFirstRun() }]) : (window.log('Upgrading from version 1.0 to version 2.0'), [2, { type: 'firstTimeCallback', fn: t.SetupHandling.handleTransfer() }]);a.label = 5;case 5:
              return [2];}
        });
      });
    }function I(e, t) {
      var s = JSON.stringify(e),
          n = window.md5(s);t.settingsVersionData && t.settingsVersionData.current.hash !== n && browserAPI.storage.local.set({ settingsVersionData: { current: { hash: n, date: e.settingsLastUpdatedAt }, latest: { hash: n, date: e.settingsLastUpdatedAt }, wasUpdated: !0 } });
    }t.initModule = function (e) {
      t.modules = e;
    }, t.supportsStorageSync = e, t.checkBackgroundPagesForChange = function (e) {
      var a = e.change,
          o = e.toUpdate;return x(this, void 0, void 0, function () {
        var e = this,
            r,
            l,
            i,
            d,
            c,
            u,
            p;return v(this, function (g) {
          switch (g.label) {case 0:
              return o ? [4, o.map(function (s) {
                return new Promise(function (n) {
                  return x(e, void 0, void 0, function () {
                    return v(this, function (e) {
                      switch (e.label) {case 0:
                          return [4, t.modules.CRMNodes.Script.Background.createBackgroundPage(t.modules.crm.crmById.get(s))];case 1:
                          return e.sent(), n(null), [2];}
                    });
                  });
                });
              })] : [3, 2];case 1:
              g.sent(), g.label = 2;case 2:
              return a ? (r = n(a.oldValue, a.newValue), l = r.same, i = r.additions, d = r.removals, [4, window.Promise.all(l.map(function (n) {
                var o = n.id;return x(e, void 0, void 0, function () {
                  var e, n, r, l, i, d, c;return v(this, function (u) {
                    switch (u.label) {case 0:
                        return e = s(o, a.oldValue), n = t.modules.crm.crmById.get(o), r = s(o, a.newValue), 'script' === r.type && e && 'script' === e.type ? [4, window.Promise.all([t.modules.Util.getScriptNodeScript(e, 'background'), t.modules.Util.getScriptNodeScript(n, 'background'), t.modules.Util.getScriptNodeScript(r, 'background')])] : [3, 3];case 1:
                        return l = u.sent(), i = l[0], d = l[1], c = l[2], i === c && d === d ? [3, 3] : [4, t.modules.CRMNodes.Script.Background.createBackgroundPage(r)];case 2:
                        u.sent(), u.label = 3;case 3:
                        return [2];}
                  });
                });
              }).concat(i.map(function (s) {
                return x(e, void 0, void 0, function () {
                  return v(this, function (e) {
                    switch (e.label) {case 0:
                        return 'script' === s.type && s.value.backgroundScript && 0 < s.value.backgroundScript.length ? [4, t.modules.CRMNodes.Script.Background.createBackgroundPage(s)] : [3, 2];case 1:
                        e.sent(), e.label = 2;case 2:
                        return [2];}
                  });
                });
              })))]) : [2];case 3:
              for (g.sent(), c = 0, u = d; c < u.length; c++) {
                p = u[c], 'script' === p.type && p.value.backgroundScript && 0 < p.value.backgroundScript.length && t.modules.background.byId.has(p.id) && (t.modules.background.byId.get(p.id).terminate(), t.modules.background.byId['delete'](p.id));
              }return [2];}
        });
      });
    }, t.findNodeWithId = a;var S = null,
        k = null;t.uploadChanges = r, t.applyChanges = function (e) {
      return x(this, void 0, void 0, function () {
        var s, n, a;return v(this, function (o) {
          switch (o.label) {case 0:
              return s = e.type, 'optionsPage' === s ? [3, 1] : 'libraries' === s ? [3, 6] : 'nodeStorage' === s ? [3, 8] : [3, 13];case 1:
              return e.localChanges ? (u(t.modules.storages.storageLocal, e.localChanges), [4, r('local', e.localChanges)]) : [3, 3];case 2:
              o.sent(), o.label = 3;case 3:
              return e.settingsChanges ? (u(t.modules.storages.settingsStorage, e.settingsChanges), [4, r('settings', e.settingsChanges)]) : [3, 5];case 4:
              o.sent(), o.label = 5;case 5:
              return [3, 13];case 6:
              return [4, t.modules.CRMNodes.TS.compileAllLibraries(e.libraries)];case 7:
              return n = o.sent(), a = t.modules.storages.storageLocal.libraries, t.modules.storages.storageLocal.libraries = n, u(t.modules.storages.storageLocal, [{ key: 'libraries', newValue: n, oldValue: a }]), [3, 13];case 8:
              return t.modules.Util.setMapDefault(t.modules.storages.nodeStorage, e.id, {}), t.modules.Util.setMapDefault(t.modules.storages.nodeStorageSync, e.id, {}), e.isSync ? (u(t.modules.storages.nodeStorageSync.get(e.id), e.nodeStorageChanges, !0), t.modules.storages.settingsStorage.nodeStorageSync = t.modules.Util.fromMap(t.modules.storages.nodeStorageSync)) : (u(t.modules.storages.nodeStorage.get(e.id), e.nodeStorageChanges, !0), t.modules.storages.storageLocal.nodeStorage = t.modules.Util.fromMap(t.modules.storages.nodeStorage)), p(e.id, e.tabId, e.nodeStorageChanges, e.isSync), e.isSync ? [4, r('settings', [{ key: 'nodeStorageSync', newValue: t.modules.Util.fromMap(t.modules.storages.nodeStorageSync), oldValue: void 0 }])] : [3, 10];case 9:
              return o.sent(), [3, 12];case 10:
              return [4, r('local', [{ key: 'nodeStorage', newValue: t.modules.Util.fromMap(t.modules.storages.nodeStorage), oldValue: void 0 }])];case 11:
              o.sent(), o.label = 12;case 12:
              return [3, 13];case 13:
              return [2];}
        });
      });
    }, t.setStorages = l, t.cutData = i, t.loadStorages = function () {
      var s = this;return new Promise(function (n) {
        return x(s, void 0, void 0, function () {
          var s, a, o, r, i, d, c, u, p, g, m, u, h, g, m, y, f, x, S, k, x;return v(this, function (v) {
            switch (v.label) {case 0:
                return window.info('Loading sync storage data'), e() ? [4, browserAPI.storage.sync.get()] : [3, 2];case 1:
                return a = v.sent(), [3, 3];case 2:
                a = {}, v.label = 3;case 3:
                return s = a, window.info('Loading local storage data'), [4, browserAPI.storage.local.get()];case 4:
                return o = v.sent(), window.info('Checking if this is the first run'), [4, b(o)];case 5:
                return r = v.sent(), 'firstTimeCallback' === r.type ? [4, r.fn] : [3, 8];case 6:
                return i = v.sent(), [4, l(i.storageLocalCopy, i.settingsStorage, i.chromeStorageLocal, function () {
                  n(null);
                })];case 7:
                return v.sent(), [3, 17];case 8:
                return ('upgradeVersion' === r.type && (o = r.storageLocal), window.info('Parsing data encoding'), d = JSON.parse(JSON.stringify(o)), delete d.globalExcludes, c = void 0, !o.useStorageSync) ? [3, 12] : (u = s.indexes, -1 !== u && null !== u && void 0 !== u ? [3, 10] : [4, browserAPI.storage.local.set({ useStorageSync: !1 })]);case 9:
                return v.sent(), c = o.settings, [3, 11];case 10:
                p = [], g = 'number' === typeof u ? u : Array.isArray(u) ? u.length : 0, t.modules.Util.createArray(g).forEach(function (e, t) {
                  p.push(s['section' + t]);
                }), m = p.join(''), c = JSON.parse(m), v.label = 11;case 11:
                return [3, 15];case 12:
                return o.settings ? [3, 14] : [4, browserAPI.storage.local.set({ useStorageSync: !0 })];case 13:
                return v.sent(), u = s.indexes, h = [], g = 'number' === typeof u ? u : Array.isArray(u) ? u.length : 0, t.modules.Util.createArray(g).forEach(function (e, t) {
                  h.push(s['section' + t]);
                }), m = h.join(''), c = JSON.parse(m), [3, 15];case 14:
                delete d.settings, c = o.settings, v.label = 15;case 15:
                if ('upgradeVersion' === r.type) for (y = 0, f = r.afterSyncLoad; y < f.length; y++) {
                  x = f[y], c = x(c);
                }return window.info('Checking for data updates'), I(c, o), [4, l(d, c, o, function () {
                  n(null);
                })];case 16:
                if (v.sent(), 'upgradeVersion' === r.type) for (S = 0, k = r.afterSync; S < k.length; S++) {
                  x = k[S], x();
                }v.label = 17;case 17:
                return [2];}
          });
        });
      });
    }, t.clearStorages = function () {
      t.modules.storages.settingsStorage = null, t.modules.storages.storageLocal = null;
    }, t.getVersionDiff = m;
  }(I || (I = {}));var S = function S(e, t, s, n) {
    return new (s || (s = Promise))(function (a, o) {
      function r(e) {
        try {
          i(n.next(e));
        } catch (t) {
          o(t);
        }
      }function l(e) {
        try {
          i(n['throw'](e));
        } catch (t) {
          o(t);
        }
      }function i(e) {
        e.done ? a(e.value) : new s(function (t) {
          t(e.value);
        }).then(r, l);
      }i((n = n.apply(e, t || [])).next());
    });
  },
      k = function k(e, s) {
    function n(e) {
      return function (t) {
        return a([e, t]);
      };
    }function a(n) {
      if (r) throw new TypeError('Generator is already executing.');for (; o;) {
        try {
          if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
              i = n;break;case 4:
              return o.label++, { value: n[1], done: !1 };case 5:
              o.label++, l = n[1], n = [0];continue;case 7:
              n = o.ops.pop(), o.trys.pop();continue;default:
              if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
                o = 0;continue;
              }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                o.label = n[1];break;
              }if (6 === n[0] && o.label < i[1]) {
                o.label = i[1], i = n;break;
              }if (i && o.label < i[2]) {
                o.label = i[2], o.ops.push(n);break;
              }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
        } catch (t) {
          n = [6, t], l = 0;
        } finally {
          r = i = 0;
        }
      }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
    }var o = { label: 0, sent: function sent() {
        if (1 & i[0]) throw i[1];return i[1];
      }, trys: [], ops: [] },
        r,
        l,
        i,
        d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
      return this;
    }), d;
  },
      C;(function (e) {
    var t;(function (t) {
      t.executeCRMCode = function (t, s) {
        if (e.modules.crmValues.tabData.has(t.tab)) {
          var n = e.modules.crmValues.tabData,
              a = n.get(t.tab).nodes,
              o = a.get(t.id)[t.tabIndex].port;e.modules.Util.postMessage(o, { messageType: s, code: t.code, logCallbackIndex: t.logListener.index });
        }
      }, t.displayHints = function (t) {
        e.modules.listeners.log[t.data.callbackIndex].listener({ id: t.id, tabId: t.tabId, tabInstanceIndex: t.tabIndex, type: 'hints', suggestions: t.data.hints });
      };
    })(t = e.LogExecution || (e.LogExecution = {}));
  })(C || (C = {})), function (e) {
    var t;(function (t) {
      function s(t) {
        void 0 === t && (t = -1);var s = e.modules.crmValues.tabData,
            n = [];return e.modules.Util.iterateMap(s, function (s, a) {
          -1 !== t && t !== s || e.modules.Util.iterateMap(a.nodes, function (e) {
            -1 === n.indexOf(e) && n.push(e);
          });
        }), n.sort(function (e, t) {
          return e - t;
        }).map(function (t) {
          return { id: t, title: e.modules.crm.crmById.get(t).name };
        });
      }function n(t, s, n, a) {
        e.modules.Util.compareArray(t, s) || (n.forEach(function (e) {
          e(t);
        }), 'id' === a ? e.modules.listeners.idVals = t : e.modules.listeners.tabVals = t);
      }function a(t) {
        var s = this;return void 0 === t && (t = 0), new Promise(function (n) {
          return S(s, void 0, void 0, function () {
            var s = this,
                a,
                o,
                r;return k(this, function (l) {
              switch (l.label) {case 0:
                  return a = e.modules.crmValues.tabData, o = [], e.modules.Util.iterateMap(a, function (n, a) {
                    (a.nodes.get(t) || 0 === t) && (0 === n ? o.push(Promise.resolve({ id: 'background', title: 'background' })) : o.push(e.modules.Util.iipe(function () {
                      return S(s, void 0, void 0, function () {
                        var t;return k(this, function (s) {
                          switch (s.label) {case 0:
                              return [4, browserAPI.tabs.get(n)['catch'](function () {
                                e.modules.Util.removeTab(n);
                              })];case 1:
                              return t = s.sent(), t ? [2, { id: n, title: t.title }] : [2, null];}
                        });
                      });
                    })));
                  }), r = n, [4, Promise.all(o)];case 1:
                  return r.apply(void 0, [l.sent().filter(function (e) {
                    return null !== e;
                  })]), [2];}
            });
          });
        });
      }t.getIds = s, t.getTabs = a, t.updateTabAndIdLists = function () {
        return S(this, void 0, void 0, function () {
          var t, o, r;return k(this, function (l) {
            switch (l.label) {case 0:
                return t = e.modules.globalObject.globals.listeners, o = s(), n(o, t.idVals, t.ids, 'id'), [4, a()];case 1:
                return r = l.sent(), n(r, t.tabVals, t.tabs, 'tab'), [2, { ids: o, tabs: r }];}
          });
        });
      };
    })(t = e.Listeners || (e.Listeners = {}));
  }(C || (C = {})), function (e) {
    function t(t, s) {
      for (var n = [], a = 2; a < arguments.length; a++) {
        n[a - 2] = arguments[a];
      }var o = e.modules.globalObject.globals.logging.filter;null !== o.id && t === o.id && null !== o.tabId ? ('*' === s || s === o.tabId) && window.log.apply(console, n) : window.log.apply(console, n);
    }function s(t, s) {
      if (e.modules.globalObject.globals.logging[t]) e.modules.globalObject.globals.logging[t][s] || (e.modules.globalObject.globals.logging[t][s] = {});else {
        var n = { values: [], logMessages: [] };n[s] = {}, e.modules.globalObject.globals.logging[t] = n;
      }
    }function n(t) {
      e.modules.globalObject.globals.listeners.log.forEach(function (e) {
        var s = 'all' === e.id || ~~e.id === ~~t.id,
            n = 'all' === e.tab || 'background' === e.tab && e.tab === t.tabId || 'background' !== e.tab && ~~e.tab === ~~t.tabId;s && n && e.listener(t);
      });
    }function a(s) {
      return S(this, void 0, void 0, function () {
        var a, o, r, l, i;return k(this, function (d) {
          switch (d.label) {case 0:
              return a = {}, o = ['Log[src:', a, ']: '], r = { id: s.id, tabId: s.tabId, logId: s.logId, tabIndex: s.tabIndex, lineNumber: s.lineNumber || '?', timestamp: new Date().toLocaleString() }, [4, browserAPI.tabs.get(s.tabId)];case 1:
              return l = d.sent(), i = e.modules.constants.specialJSON.fromJSON(s.data), o = o.concat(i), t.bind(e.modules.globalObject, s.id, s.tabId).apply(e.modules.globalObject, o), a.id = s.id, a.tabId = s.tabId, a.tab = l, a.url = l.url, a.tabIndex = s.tabIndex, a.tabTitle = l.title, a.node = e.modules.crm.crmById.get(s.id), a.nodeName = a.node.name, r.tabTitle = l.title, r.nodeTitle = a.nodeName, r.data = i, e.modules.globalObject.globals.logging[s.id].logMessages.push(r), n(r), [2];}
        });
      });
    }e.initModule = function (t) {
      e.modules = t;
    }, e.log = t, e.backgroundPageLog = function (t, s) {
      for (var a = [], o = 2; o < arguments.length; o++) {
        a[o - 2] = arguments[o];
      }s = s || [void 0, void 0];var r = { tabId: 'background', nodeTitle: e.modules.crm.crmById.get(t).name, tabTitle: 'Background Page', data: a, lineNumber: s[0], logId: s[1], timestamp: new Date().toLocaleString() },
          l = { id: t },
          i = ['Background page [', l, ']: '].concat(a);for (var d in e.log.bind(e.modules.globalObject, t, 'background').apply(e.modules.globalObject, i), r) {
        r.hasOwnProperty(d) && (l[d] = r[d]);
      }e.modules.globalObject.globals.logging[t] = e.modules.globalObject.globals.logging[t] || { logMessages: [] }, e.modules.globalObject.globals.logging[t].logMessages.push(l), n(l);
    }, e.logHandler = function (t) {
      return S(this, void 0, void 0, function () {
        var n, o;return k(this, function (r) {
          switch (r.label) {case 0:
              return s(t.id, t.tabId), n = t.type, 'evalResult' === n ? [3, 1] : 'log' === n ? [3, 3] : [3, 3];case 1:
              return [4, browserAPI.tabs.get(t.tabId)];case 2:
              return o = r.sent(), e.modules.listeners.log[t.callbackIndex].listener({ id: t.id, tabId: t.tabId, tabInstanceIndex: t.tabIndex, nodeTitle: e.modules.crm.crmById.get(t.id).name, tabTitle: o.title, type: 'evalResult', lineNumber: t.lineNumber, timestamp: t.timestamp, val: 'success' === t.value.type ? { type: 'success', result: e.modules.constants.specialJSON.fromJSON(t.value.result) } : t.value }), [3, 5];case 3:
              return [4, a({ type: t.type, id: t.id, data: t.data, tabIndex: t.tabIndex, lineNumber: t.lineNumber, tabId: t.tabId, logId: t.logId, callbackIndex: t.callbackIndex, timestamp: t.type })];case 4:
              return r.sent(), [3, 5];case 5:
              return [2];}
        });
      });
    };
  }(C || (C = {}));var M = function () {
    function e(e, t, s, n, a) {
      var o = this;this.id = e, this.script = t, this.secretKey = n, this._getInstances = a, this.worker = new Worker('/js/sandbox.js'), this._callbacks = [], this._verified = !1, this._handler = window.createHandlerFunction({ postMessage: this._postMessage.bind(this) }), this.worker.addEventListener('message', function (t) {
        o._onMessage(t);
      }, !1), this.worker.postMessage({ type: 'init', id: e, script: t, libraries: s });
    }return e.prototype.post = function (e) {
      this.worker.postMessage(e);
    }, e.prototype.listen = function (e) {
      this._callbacks.push(e);
    }, e.prototype.terminate = function () {
      this.worker.terminate();
    }, e.prototype._onMessage = function (t) {
      var e = t.data;switch (e.type) {case 'handshake':case 'crmapi':
          this._verified || (window.backgroundPageLog(this.id, null, 'Ininitialized background page'), this.worker.postMessage({ type: 'verify', message: JSON.stringify({ instances: this._getInstances(), currentInstance: null }), key: this.secretKey.join('') + this.id + 'verified' }), this._verified = !0), this._verifyKey(e, this._handler);break;case 'log':
          window.backgroundPageLog.apply(window, [this.id, [e.lineNo, -1]].concat(JSON.parse(e.data)));}this._callbacks && (this._callbacks.forEach(function (t) {
        t(e);
      }), this._callbacks = []);
    }, e.prototype._postMessage = function (e) {
      this.worker.postMessage({ type: 'message', message: JSON.stringify(e), key: this.secretKey.join('') + this.id + 'verified' });
    }, e.prototype._verifyKey = function (e, t) {
      e.key.join('') === this.secretKey.join('') ? t(JSON.parse(e.data)) : window.backgroundPageLog(this.id, null, 'Tried to send an unauthenticated message');
    }, e;
  }(),
      T;(function (e) {
    function t(e, t, s) {
      return e.apply(t, s);
    }function s(e, t, s) {
      return new Promise(function (n) {
        if ('chrome' === t) try {
          var a = crmAPI.chrome(e);a.onError = function () {
            n({ success: !1, result: null });
          };for (var o = 0, r = s, l; o < r.length; o++) {
            switch (l = r[o], l.type) {case 'fn':
                a = a.persistent(l.val);break;case 'arg':
                a = a.args(l.val);break;case 'return':
                a = a['return'](l.val);}
          }a['return'](function (e) {
            n({ success: !0, result: e });
          }).send();
        } catch (t) {
          n({ success: !1, result: null });
        } else if ('browser' === t) try {
          for (var a = crmAPI.browser, i = e.split('.'), d = 0, c = i, u; d < c.length; d++) {
            u = c[d], a = a[u];
          }for (var p = a, g = 0, m = s, l; g < m.length; g++) {
            switch (l = m[g], l.type) {case 'fn':
                p = p.persistent(l.val);break;case 'arg':
                p = p.args(l.val);}
          }p.send().then(function (e) {
            n({ success: !0, result: e });
          }, function () {
            n({ success: !1, result: null });
          });
        } catch (t) {
          n({ success: !1, result: null });
        }
      });
    }e.sandbox = function (e, t, s, n, a, o) {
      o(new M(e, t, s, n, a));
    }, e.sandboxVirtualChromeFunction = s, e.sandboxChrome = function (e, n, a) {
      var o = {},
          r;r = 'browser' === n ? window.browserAPI : window.chrome;var l = e.split('.');try {
        for (var d = 0; d < l.length; d++) {
          o = r, r = r[l[d]];
        }
      } catch (t) {
        return { success: !1, result: null };
      }return r && 'function' === typeof r ? 'crmAPI' in window && window.crmAPI && '__isVirtual' in window ? { success: !0, result: s(e, n, a) } : { success: !0, result: t(r, o, a) } : { success: !1, result: null };
    };
  })(T || (T = {}));var w;(function (t) {
    t.initModule = function (e) {
      t.modules = e;
    }, t.globals = { latestId: 0, storages: { insufficientPermissions: [], settingsStorage: null, nodeStorageSync: null, globalExcludes: null, resourceKeys: null, urlDataPairs: null, storageLocal: null, failedLookups: [], nodeStorage: null, resources: null }, background: { byId: new window.Map() }, crm: { crmTree: [], crmById: new window.Map(), safeTree: [], crmByIdSafe: new window.Map() }, availablePermissions: [], crmValues: { tabData: new window.Map([[0, { nodes: new window.Map(), libraries: new window.Map() }]]), rootId: null, contextMenuIds: new window.Map(), nodeInstances: new window.Map(), contextMenuInfoById: new window.Map(), contextMenuItemTree: [], userAddedContextMenus: [], userAddedContextMenusById: new window.Map(), contextMenuGlobalOverrides: new window.Map(), hideNodesOnPagesData: new window.Map(), nodeTabStatuses: new window.Map() }, toExecuteNodes: { onUrl: { documentStart: [], documentEnd: [] }, always: { documentStart: [], documentEnd: [] } }, sendCallbackMessage: function sendCallbackMessage(s, n, a, e) {
        var o = { type: e.err ? 'error' : 'success', data: e.err ? e.errorMessage : e.args, callbackId: e.callbackId, messageType: 'callback' },
            r = t.globals.crmValues.tabData;try {
          t.modules.Util.postMessage(r.get(s).nodes.get(a)[n].port, o);
        } catch (l) {
          if ('Converting circular structure to JSON' === l.message) o.data = 'Converting circular structure to JSON, getting a response from this API will not work', o.type = 'error', t.modules.Util.postMessage(r.get(s).nodes.get(a)[n].port, o);else throw l;
        }
      }, eventListeners: { notificationListeners: new window.Map(), shortcutListeners: new window.Map(), scriptDebugListeners: [] }, logging: { filter: { id: null, tabId: null } }, constants: { supportedHashes: ['sha1', 'sha256', 'sha384', 'sha512', 'md5'], validSchemes: ['http', 'https', 'file', 'ftp', '*'], templates: { mergeArrays: function mergeArrays(e, t) {
            for (var s = 0; s < t.length; s++) {
              e[s] = e[s] && 'object' === babelHelpers['typeof'](t[s]) && 'object' === babelHelpers['typeof'](e[s]) && void 0 !== e[s] && null !== e[s] ? Array.isArray(t[s]) ? this.mergeArrays(e[s], t[s]) : this.mergeObjects(e[s], t[s]) : t[s];
            }return e;
          }, mergeObjects: function mergeObjects(e, t) {
            for (var s in t) {
              t.hasOwnProperty(s) && (e[s] = 'object' === babelHelpers['typeof'](t[s]) && 'object' === babelHelpers['typeof'](e[s]) && void 0 !== e[s] && null !== e[s] ? Array.isArray(t[s]) ? this.mergeArrays(e[s], t[s]) : this.mergeObjects(e[s], t[s]) : t[s]);
            }return e;
          }, getDefaultNodeInfo: function getDefaultNodeInfo(e) {
            void 0 === e && (e = {});var t = { permissions: [], installDate: new Date().toLocaleDateString(), lastUpdatedAt: Date.now(), version: '1.0', isRoot: !1, source: 'local' };return this.mergeObjects(t, e);
          }, getDefaultLinkNode: function getDefaultLinkNode(e) {
            void 0 === e && (e = {});var t = { name: 'My Link', onContentTypes: [!0, !0, !0, !1, !1, !1], type: 'link', showOnSpecified: !1, nodeInfo: this.getDefaultNodeInfo(e.nodeInfo), triggers: [{ url: '*://*.example.com/*', not: !1 }], isLocal: !1, value: [{ newTab: !0, url: 'https://www.example.com' }] };return this.mergeObjects(t, e);
          }, getDefaultStylesheetValue: function getDefaultStylesheetValue(e) {
            void 0 === e && (e = {});return this.mergeObjects({ stylesheet: '', launchMode: 0, toggle: !1, defaultOn: !1, options: {}, convertedStylesheet: null }, e);
          }, getDefaultScriptValue: function getDefaultScriptValue(e) {
            void 0 === e && (e = {});return this.mergeObjects({ launchMode: 0, backgroundLibraries: [], libraries: [], script: '', backgroundScript: '', metaTags: {}, options: {}, ts: { enabled: !1, backgroundScript: {}, script: {} } }, e);
          }, getDefaultScriptNode: function getDefaultScriptNode(e) {
            void 0 === e && (e = {});var t = { name: 'My Script', onContentTypes: [!0, !0, !0, !1, !1, !1], type: 'script', isLocal: !1, nodeInfo: this.getDefaultNodeInfo(e.nodeInfo), triggers: [{ url: '*://*.example.com/*', not: !1 }], value: this.getDefaultScriptValue(e.value) };return this.mergeObjects(t, e);
          }, getDefaultStylesheetNode: function getDefaultStylesheetNode(e) {
            void 0 === e && (e = {});var t = { name: 'My Stylesheet', onContentTypes: [!0, !0, !0, !1, !1, !1], type: 'stylesheet', isLocal: !0, nodeInfo: this.getDefaultNodeInfo(e.nodeInfo), triggers: [{ url: '*://*.example.com/*', not: !1 }], value: this.getDefaultStylesheetValue(e.value) };return this.mergeObjects(t, e);
          }, getDefaultDividerOrMenuNode: function getDefaultDividerOrMenuNode(e, t) {
            void 0 === e && (e = {});var s = { name: 'My ' + (t[0].toUpperCase() + t.slice(1)), type: t, nodeInfo: this.getDefaultNodeInfo(e.nodeInfo), onContentTypes: [!0, !0, !0, !1, !1, !1], isLocal: !0, value: null, showOnSpecified: !0, children: 'menu' === t ? [] : null, permissions: [] };return this.mergeObjects(s, e);
          }, getDefaultDividerNode: function getDefaultDividerNode(e) {
            return void 0 === e && (e = {}), this.getDefaultDividerOrMenuNode(e, 'divider');
          }, getDefaultMenuNode: function getDefaultMenuNode(e) {
            return void 0 === e && (e = {}), this.getDefaultDividerOrMenuNode(e, 'menu');
          }, globalObjectWrapperCode: function globalObjectWrapperCode(e, s, n, a, o) {
            return void 0 === o && (o = !0), o ? t.modules.Caches.cacheCall(this.globalObjectWrapperCode, arguments) : ('var ' + s + ' = (' + function (e) {
              var t;return t = function () {
                var t = {},
                    s = e.REPLACEName;for (var n in s) {
                  (function (n) {
                    'webkitStorageInfo' !== n && 'function' === typeof s[n] ? t[n] = function () {
                      return s[n].apply(s, arguments);
                    } : Object.defineProperty(t, n, { get: function get() {
                        return s[n] === s ? t : 'crmAPI' === n ? e.REPLACECrmAPI : 'browser' === n ? e.REPLACEBrowserVal : 'chrome' === n ? e.REPLACEChromeVal : s[n];
                      }, set: function set(e) {
                        t[n] = e;
                      } });
                  })(n);
                }return t;
              }();
            }.toString().replace(/\w+.REPLACEName/g, e).replace(/\w+.REPLACEChromeVal/g, n).replace(/\w+.REPLACEBrowserVal/g, a).replace(/\w+.REPLACECrmAPI/g, 'crmAPI').replace(/\var\s\w+;/g, 'var ' + s + ';').replace(/return \(\w+ = \(/g, 'return (' + s + ' = (') + ')()').replace(/\n/g, '');
          } }, specialJSON: { _regexFlagNames: ['global', 'multiline', 'sticky', 'unicode', 'ignoreCase'], _getRegexFlags: function _getRegexFlags(e) {
            var t = [];return this._regexFlagNames.forEach(function (s) {
              e[s] && ('sticky' === s ? t.push('y') : t.push(s[0]));
            }), t;
          }, _stringifyNonObject: function _stringifyNonObject(e) {
            if ('function' === typeof e) {
              var t = e.toString(),
                  s = this._fnRegex.exec(t);e = '__fn$(' + s[2] + '){' + s[10] + '}$fn__';
            } else e instanceof RegExp ? e = '__regexp$' + JSON.stringify({ regexp: e.source, flags: this._getRegexFlags(e) }) + '$regexp__' : e instanceof Date ? e = '__date$' + (e + '$date__') : 'string' === typeof e && (e = e.replace(/\$/g, '\\$'));return JSON.stringify(e);
          }, _fnRegex: /^(.|\s)*\(((\w+((\s*),?(\s*)))*)\)(\s*)(=>)?(\s*)\{((.|\n|\r)+)\}$/, _specialStringRegex: /^__(fn|regexp|date)\$((.|\n)+)\$\1__$/, _fnCommRegex: /^\(((\w+((\s*),?(\s*)))*)\)\{((.|\n|\r)+)\}$/, _parseNonObject: function _parseNonObject(e) {
            var t = JSON.parse(e);if ('string' === typeof t) {
              var s;if (s = this._specialStringRegex.exec(t)) {
                var n = s[2];switch (s[1]) {case 'fn':
                    var a = this._fnCommRegex.exec(n);return '' === a[1].trim() ? new Function(a[6]) : Function.apply(void 0, a[1].split(',').concat([a[6]]));case 'regexp':
                    var o = JSON.parse(n);return new RegExp(o.regexp, o.flags.join(''));case 'date':
                    return new Date();}
              } else return t.replace(/\\\$/g, '$');
            }return t;
          }, _iterate: function _iterate(e, t, s) {
            return Array.isArray(t) ? (e = e || [], t.forEach(function (t, n, a) {
              e[n] = s(t, n, a);
            })) : (e = e || {}, Object.getOwnPropertyNames(t).forEach(function (n) {
              e[n] = s(t[n], n, t);
            })), e;
          }, _isObject: function _isObject(e) {
            return e instanceof Date || e instanceof RegExp || e instanceof Function ? !1 : 'object' === ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) && !Array.isArray(e);
          }, _toJSON: function _toJSON(e, t, s, n) {
            var a = this;if (!(this._isObject(t) || Array.isArray(t))) return { refs: [], data: this._stringifyNonObject(t), rootType: 'normal' };if (-1 === n.originalValues.indexOf(t)) {
              var o = n.refs.length;n.refs[o] = e, n.paths[o] = s, n.originalValues[o] = t;
            }e = this._iterate(e, t, function (t, o) {
              if (!(a._isObject(t) || Array.isArray(t))) return a._stringifyNonObject(t);var r;if (-1 === (r = n.originalValues.indexOf(t))) {
                r = n.refs.length, e = Array.isArray(t) ? [] : {}, n.refs.push(null), n.paths[r] = s;var l = a._toJSON(e[o], t, s.concat(o), n);n.refs[r] = l.data, n.originalValues[r] = t;
              }return '__$' + r + '$__';
            });var r = Array.isArray(t);return r ? { refs: n.refs, data: e, rootType: 'array' } : { refs: n.refs, data: e, rootType: 'object' };
          }, toJSON: function toJSON(e, t) {
            var s = this;void 0 === t && (t = []);var n = [[]],
                a = [e];if (!(this._isObject(e) || Array.isArray(e))) return JSON.stringify({ refs: [], data: this._stringifyNonObject(e), rootType: 'normal', paths: [] });var o = Array.isArray(e) ? [] : {};return t.push(o), o = this._iterate(o, e, function (e, r) {
              if (!(s._isObject(e) || Array.isArray(e))) return s._stringifyNonObject(e);var l;if (-1 === (l = a.indexOf(e))) {
                l = t.length, t.push(null);var i = s._toJSON(o[r], e, [r], { refs: t, paths: n, originalValues: a }).data;a[l] = e, n[l] = [r], t[l] = i;
              }return '__$' + l + '$__';
            }), JSON.stringify({ refs: t, data: o, rootType: Array.isArray(e) ? 'array' : 'object', paths: n });
          }, _refRegex: /^__\$(\d+)\$__$/, _replaceRefs: function _replaceRefs(e, t) {
            var s = this;return this._iterate(e, e, function (e) {
              var n;if (n = s._refRegex.exec(e)) {
                var a = n[1],
                    o = t[~~a];return o.parsed ? o.ref : (o.parsed = !0, s._replaceRefs(o.ref, t));
              }return s._parseNonObject(e);
            }), e;
          }, fromJSON: function fromJSON(e) {
            var t = JSON.parse(e);t.refs = t.refs.map(function (e) {
              return { ref: e, parsed: !1 };
            });var s = t.refs;return 'normal' === t.rootType ? JSON.parse(t.data) : (s[0].parsed = !0, this._replaceRefs(s[0].ref, s));
          } }, contexts: ['page', 'link', 'selection', 'image', 'video', 'audio'], permissions: ['alarms', 'activeTab', 'background', 'bookmarks', 'browsingData', 'clipboardRead', 'clipboardWrite', 'contentSettings', 'cookies', 'contentSettings', 'contextMenus', 'declarativeContent', 'desktopCapture', 'downloads', 'history', 'identity', 'idle', 'management', 'notifications', 'pageCapture', 'power', 'printerProvider', 'privacy', 'sessions', 'system.cpu', 'system.memory', 'system.storage', 'tabs', 'topSites', 'tabCapture', 'tts', 'webNavigation', 'webRequest', 'webRequestBlocking'], tamperMonkeyExtensions: ['gcalenpjmijncebpfijmoaglllgpjagf', 'dhdgffkkebhmkfjojejmpbldmpobfkfo', 'a1ec3820-68cb-430c-8870-2c07ecc68ff6', '7b7e1485-191d-4cb7-91d9-b6121c1157fe', '23c311a8-060b-422e-a46e-80dd73308a3b'], stylishExtensions: ['fjnbnpbmkenffdnngjfgmeleoegfcffe', '220fd736-2425-4d0a-aa36-6015937215f1'] }, listeners: { idVals: [], tabVals: [], ids: [], tabs: [], log: [] } };
  })(w || (w = {}));var N = Object.assign || function (e) {
    for (var t = 1, a = arguments.length, n; t < a; t++) {
      for (var s in n = arguments[t], n) {
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
      }
    }return e;
  },
      E = function E(e, t, s, n) {
    return new (s || (s = Promise))(function (a, o) {
      function r(e) {
        try {
          i(n.next(e));
        } catch (t) {
          o(t);
        }
      }function l(e) {
        try {
          i(n['throw'](e));
        } catch (t) {
          o(t);
        }
      }function i(e) {
        e.done ? a(e.value) : new s(function (t) {
          t(e.value);
        }).then(r, l);
      }i((n = n.apply(e, t || [])).next());
    });
  },
      P = function P(e, s) {
    function n(e) {
      return function (t) {
        return a([e, t]);
      };
    }function a(n) {
      if (r) throw new TypeError('Generator is already executing.');for (; o;) {
        try {
          if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
              i = n;break;case 4:
              return o.label++, { value: n[1], done: !1 };case 5:
              o.label++, l = n[1], n = [0];continue;case 7:
              n = o.ops.pop(), o.trys.pop();continue;default:
              if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
                o = 0;continue;
              }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                o.label = n[1];break;
              }if (6 === n[0] && o.label < i[1]) {
                o.label = i[1], i = n;break;
              }if (i && o.label < i[2]) {
                o.label = i[2], o.ops.push(n);break;
              }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
        } catch (t) {
          n = [6, t], l = 0;
        } finally {
          r = i = 0;
        }
      }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
    }var o = { label: 0, sent: function sent() {
        if (1 & i[0]) throw i[1];return i[1];
      }, trys: [], ops: [] },
        r,
        l,
        i,
        d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
      return this;
    }), d;
  },
      _;(function (e) {
    var t;(function (t) {
      var s;(function (t) {
        function s(t) {
          var s = t.tab,
              n = t.key,
              a = t.info,
              o = t.node,
              r = t.script,
              l = t.tabIndex,
              i = t.safeNode,
              d = t.indentUnit,
              c = t.contextData,
              u = t.greaseMonkeyData;return E(this, void 0, void 0, function () {
            var t, p, g, m;return P(this, function (h) {
              switch (h.label) {case 0:
                  return [4, e.modules.Util.getScriptNodeScript(o)];case 1:
                  return t = -1 < h.sent().indexOf('/*execute locally*/') && o.isLocal, p = e.modules.storages.storageLocal.catchErrors, g = [], BrowserAPI.isBrowserAPISupported('chrome') && g.push('chrome'), BrowserAPI.isBrowserAPISupported('browser') && g.push('browser'), m = -1 < e.modules.globalObject.globals.eventListeners.scriptDebugListeners.indexOf(o.id), m && e.modules.globalObject.globals.eventListeners.scriptDebugListeners.splice(e.modules.globalObject.globals.eventListeners.scriptDebugListeners.indexOf(o.id), 1), e.modules.Util.setMapDefault(e.modules.storages.nodeStorage, o.id, {}), e.modules.Util.setMapDefault(e.modules.storages.nodeStorageSync, o.id, {}), [2, [['var crmAPI = new (window._crmAPIRegistry.pop())(' + [i, o.id, s, a, n, e.modules.storages.nodeStorage.get(o.id), c, u, !1, o.value && o.value.options || {}, t, l, browserAPI.runtime.id, g.join(','), e.modules.storages.nodeStorageSync.get(o.id)].map(function (e) {
                    return void 0 === e ? JSON.stringify(null) : JSON.stringify(e);
                  }).join(', ') + ');'].join(', '), e.modules.constants.templates.globalObjectWrapperCode('window', 'windowWrapper', o.isLocal && BrowserAPI.isBrowserAPISupported('chrome') ? 'chrome' : 'void 0', o.isLocal && BrowserAPI.isBrowserAPISupported('browser') ? 'browser' : 'void 0'), '' + (p ? 'try {' : ''), 'function main(crmAPI, window, chrome, browser, menuitemid, parentmenuitemid, mediatype,linkurl, srcurl, pageurl, frameurl, frameid,selectiontext, editable, waschecked, checked) {', m ? 'debugger;' : '', r, '}', 'crmAPI.onReady(function() {main.apply(this, [crmAPI, windowWrapper, ' + (o.isLocal && BrowserAPI.isBrowserAPISupported('chrome') ? 'chrome' : 'void 0') + ', ' + (o.isLocal && BrowserAPI.isBrowserAPISupported('browser') ? 'browser' : 'void 0') + '].concat(' + JSON.stringify([a.menuItemId, a.parentMenuItemId, a.mediaType, a.linkUrl, a.srcUrl, a.pageUrl, a.frameUrl, a.frameId, a.selectionText, a.editable, a.wasChecked, a.checked]) + '))})', '' + (p ? ['} catch (error) {', d + 'if (crmAPI.debugOnError) {', '' + d + d + 'debugger;', d + '}', d + 'throw error;', '}'].join('\n') : '')].join('\n')];}
            });
          });
        }function n(t, s, n, a) {
          return E(this, void 0, void 0, function () {
            var o, r, l, d, i, c, u, p;return P(this, function (g) {
              switch (g.label) {case 0:
                  o = [], r = e.modules.storages.storageLocal.libraries, l = e.modules.storages.urlDataPairs, d = 0, g.label = 1;case 1:
                  if (!(d < n.value.libraries.length)) return [3, 9];if (i = void 0, !r) return [3, 7];c = 0, g.label = 2;case 2:
                  return c < r.length ? r[c].name === n.value.libraries[d].name ? (u = r[c], !(u.ts && u.ts.enabled)) ? [3, 4] : (p = {}, [4, e.modules.Util.getLibraryCode(u)]) : [3, 6] : [3, 7];case 3:
                  return i = (p.code = g.sent(), p), [3, 5];case 4:
                  i = u, g.label = 5;case 5:
                  return [3, 7];case 6:
                  return c++, [3, 2];case 7:
                  i || n.value.libraries[d].name || !l.get(n.value.libraries[d].url) || (i = { code: l.get(n.value.libraries[d].url).dataString }), i && o.push({ code: i.code, runAt: s }), g.label = 8;case 8:
                  return d++, [3, 1];case 9:
                  return a || o.push({ file: '/js/crmapi.js', runAt: s }), o.push({ code: t, runAt: s }), [2, o];}
            });
          });
        }function a(e) {
          return function (t) {
            return e[t] ? e[t][0] : void 0;
          };
        }function o(t) {
          var s = [],
              n = e.modules.storages.resources.get(t);if (!n) return [];for (var a in n) {
            n.hasOwnProperty(a) && s.push(n[a]);
          }return s;
        }function r(e, t) {
          var s = { code: t.code, file: t.file, runAt: 'document_idle' },
              n = t.runAt;return 'document_start' === n || 'document_end' === n || 'document_idle' === n ? s.runAt = n : window.log('Script with id', e, 'runAt value was changed to default, ', n, 'is not a valid value (use document_start, document_end or document_idle)'), s;
        }function l(t, s, n, a) {
          var o = this;a ? browserAPI.tabs.sendMessage(s, { type: 'runScript', data: { scripts: n } }) : e.modules.Util.promiseChain(n.map(function (e) {
            return function () {
              return E(o, void 0, void 0, function () {
                var n;return P(this, function (a) {
                  switch (a.label) {case 0:
                      return a.trys.push([0, 2,, 3]), [4, browserAPI.tabs.executeScript(s, r(t, e))['catch'](function (e) {
                        -1 === e.message.indexOf('Could not establish connection') && -1 === e.message.indexOf('closed') && window.log('Couldn\'t execute on tab with id', s, 'for node', t, e);
                      })];case 1:
                      return a.sent(), [3, 3];case 2:
                      return n = a.sent(), [3, 3];case 3:
                      return [2];}
                });
              });
            };
          }));
        }function i(t, s, n, r, l) {
          return E(this, void 0, void 0, function () {
            var i, d, c, u;return P(this, function (p) {
              switch (p.label) {case 0:
                  return i = (e.MetaTags.getMetaLines(s.value.script) || []).join('\n'), d = a(t), c = {}, u = { script: { author: d('author') || '', copyright: d('copyright'), description: d('description'), excludes: t.excludes, homepage: d('homepage'), icon: d('icon'), icon64: d('icon64'), includes: (t.includes || []).concat(t.include), lastUpdated: 0, matches: t.matches, isIncognito: l.incognito, downloadMode: 'browser', name: s.name, namespace: d('namespace'), options: { awareOfChrome: !0, compat_arrayleft: !1, compat_foreach: !1, compat_forvarin: !1, compat_metadata: !1, compat_prototypes: !1, compat_uW_gmonkey: !1, noframes: d('noframes'), override: { excludes: !0, includes: !0, orig_excludes: t.excludes, orig_includes: (t.includes || []).concat(t.include), use_excludes: r, use_includes: n } }, position: 1, resources: o(s.id), "run-at": t['run-at'] || t.run_at || 'document_end', system: !1, unwrap: !0, version: d('version') }, scriptMetaStr: i }, [4, e.modules.Util.getScriptNodeScript(s)];case 1:
                  return u.scriptSource = p.sent(), u.scriptUpdateURL = d('updateURL'), u.scriptWillUpdate = !0, u.scriptHandler = 'Custom Right-Click Menu', [4, browserAPI.runtime.getManifest()];case 2:
                  return [2, (c.info = (u.version = p.sent().version, u), c.resources = e.modules.storages.resources.get(s.id) || {}, c)];}
            });
          });
        }function d(e) {
          var t = [],
              s = [];if (e.triggers) for (var n = 0; n < e.triggers.length; n++) {
            e.triggers[n].not ? t.push(e.triggers[n].url) : s.push(e.triggers[n].url);
          }return { excludes: t, includes: s };
        }function c(t, s, n, a) {
          e.modules.Util.setMapDefault(e.modules.crmValues.tabData, t, { libraries: new window.Map(), nodes: new window.Map() }), e.modules.Util.setMapDefault(e.modules.crmValues.tabData.get(t).nodes, n, []), e.modules.crmValues.tabData.get(t).nodes.get(n).push({ secretKey: s, usesLocalStorage: -1 < a.indexOf('localStorageProxy') });
        }t.generateGreaseMonkeyData = i, t.getInExcludes = d, t.genTabData = c, t.createHandler = function (t) {
          var a = this;return function (o, r, u) {
            return void 0 === u && (u = !1), E(a, void 0, void 0, function () {
              var a = this,
                  p,
                  g,
                  m,
                  h,
                  y,
                  f,
                  b,
                  x,
                  v,
                  I,
                  S,
                  k,
                  C,
                  M;return P(this, function (T) {
                switch (T.label) {case 0:
                    p = [], g = !1;try {
                      p = e.modules.Util.createSecretKey();
                    } catch (t) {
                      g = t;
                    }return g ? (browserAPI.tabs.executeScript(r.id, { code: 'alert("Something went wrong very badly, please go to your Custom Right-Click Menu options page and remove any sketchy scripts.")' }).then(function () {
                      browserAPI.runtime.reload();
                    }), [3, 6]) : [3, 1];case 1:
                    return m = '\t', [4, window.Promise.all([e.modules.Util.iipe(function () {
                      return E(a, void 0, void 0, function () {
                        var e;return P(this, function (t) {
                          switch (t.label) {case 0:
                              return u ? [2, null] : [3, 1];case 1:
                              return [4, browserAPI.tabs.sendMessage(r.id, { type: 'getLastClickInfo' })];case 2:
                              return e = t.sent(), [2, e];}
                        });
                      });
                    }), e.modules.Util.iipe(function () {
                      return E(a, void 0, void 0, function () {
                        var s, n, a, o, l, c, u, p;return P(this, function (g) {
                          switch (g.label) {case 0:
                              return a = (n = e.MetaTags).getMetaTags, [4, e.modules.Util.getScriptNodeScript(t)];case 1:
                              return s = a.apply(n, [g.sent()]), o = s['run-at'] || s.run_at || 'document_end', o && Array.isArray(o) && (o = o[0]), l = d(t), c = l.excludes, u = l.includes, p = {}, [4, i(s, t, u, c, r)];case 2:
                              return [2, (p.greaseMonkeyData = g.sent(), p.runAt = o, p)];}
                        });
                      });
                    }), e.modules.Util.iipe(function () {
                      return E(a, void 0, void 0, function () {
                        return P(this, function (s) {
                          switch (s.label) {case 0:
                              return [4, e.modules.Util.getScriptNodeScript(t)];case 1:
                              return [2, s.sent().split('\n').map(function (e) {
                                return m + e;
                              }).join('\n')];}
                        });
                      });
                    }), e.modules.Util.iipe(function () {
                      return E(a, void 0, void 0, function () {
                        var s, n, a;return P(this, function (o) {
                          switch (o.label) {case 0:
                              return s = c, n = [r.id, p, t.id], [4, e.modules.Util.getScriptNodeScript(t)];case 1:
                              return s.apply(void 0, n.concat([o.sent()])), a = e.modules.crmValues.tabData.get(r.id).nodes.get(t.id).length - 1, e.modules.Logging.Listeners.updateTabAndIdLists(), [2, a];}
                        });
                      });
                    })])];case 2:
                    return h = T.sent(), y = h[0], f = h[1], b = f.greaseMonkeyData, x = f.runAt, v = h[2], I = h[3], S = e.makeSafe(t), S.permissions = t.permissions, [4, s({ node: t, safeNode: S, tab: r, info: o, key: p, contextData: y, greaseMonkeyData: b, indentUnit: m, script: v, tabIndex: I })];case 3:
                    return k = T.sent(), [4, e.modules.Util.getScriptNodeScript(t)];case 4:
                    return C = -1 < T.sent().indexOf('unsafeWindow'), [4, n(k, x, t, C)];case 5:
                    M = T.sent(), l(t.id, r.id, M, C), T.label = 6;case 6:
                    return [2];}
              });
            });
          };
        };
      })(s = t.Handler || (t.Handler = {}));
    })(t = e.Script || (e.Script = {}));
  })(_ || (_ = {})), function (e) {
    var t;(function (t) {
      var s;(function (s) {
        function n(t) {
          return E(this, void 0, void 0, function () {
            var s, n, a, o, r, l, i, d, c;return P(this, function (u) {
              switch (u.label) {case 0:
                  s = [], n = [], a = e.modules.storages.storageLocal.libraries, o = e.modules.storages.urlDataPairs, r = 0, u.label = 1;case 1:
                  if (!(r < t.value.libraries.length)) return [3, 10];if (l = void 0, !a) return [3, 8];i = 0, u.label = 2;case 2:
                  return i < a.length ? a[i].name === t.value.libraries[r].name ? (d = a[i], !(d.ts && d.ts.enabled)) ? [3, 4] : (c = {}, [4, e.modules.Util.getLibraryCode(d)]) : [3, 6] : [3, 8];case 3:
                  return l = (c.code = u.sent(), c), [3, 5];case 4:
                  l = d, u.label = 5;case 5:
                  return [3, 8];case 6:
                  null === t.value.libraries[r].name && o.get(t.value.libraries[r].url) && (l = { code: o.get(t.value.libraries[r].url).dataString }), u.label = 7;case 7:
                  return i++, [3, 2];case 8:
                  l && (l.location ? s.push('/js/defaultLibraries/' + l.location) : n.push(l.code)), u.label = 9;case 9:
                  return r++, [3, 1];case 10:
                  return [2, { libraries: s, code: n }];}
            });
          });
        }function a(t, s, n) {
          var a = s.key,
              o = s.node,
              r = s.script,
              l = s.safeNode,
              i = s.indentUnit,
              d = s.greaseMonkeyData;return E(this, void 0, void 0, function () {
            var s, c, u;return P(this, function (p) {
              switch (p.label) {case 0:
                  return [4, e.modules.Util.getScriptNodeScript(o)];case 1:
                  return s = -1 < p.sent().indexOf('/*execute locally*/') && o.isLocal, c = e.modules.storages.storageLocal.catchErrors, u = [], BrowserAPI.isBrowserAPISupported('chrome') && u.push('chrome'), BrowserAPI.isBrowserAPISupported('browser') && u.push('browser'), e.modules.Util.setMapDefault(e.modules.storages.nodeStorage, o.id, {}), e.modules.Util.setMapDefault(e.modules.storages.nodeStorageSync, o.id, {}), [2, [t.join('\n'), ['var crmAPI = new (window._crmAPIRegistry.pop())(' + [l, o.id, { id: 0 }, {}, a, e.modules.storages.nodeStorage.get(o.id), null, d, !0, e.fixOptionsErrors(o.value && o.value.options || {}), s, 0, browserAPI.runtime.id, u.join(','), e.modules.storages.nodeStorageSync.get(o.id)].map(function (e) {
                    return void 0 === e ? JSON.stringify(null) : JSON.stringify(e);
                  }).join(', ') + ');'].join(', '), e.modules.constants.templates.globalObjectWrapperCode('self', 'selfWrapper', void 0, void 0), '' + (c ? 'try {' : ''), 'function main(crmAPI, self, menuitemid, parentmenuitemid, mediatype,' + (i + 'linkurl, srcurl, pageurl, frameurl, frameid,') + (i + 'selectiontext, editable, waschecked, checked) {'), n ? 'debugger;' : '', r, '}', 'window.crmAPI = self.crmAPI = crmAPI', 'crmAPI.onReady(function() {main(crmAPI, selfWrapper)});', '' + (c ? ['} catch (error) {', i + 'if (crmAPI.debugOnError) {', '' + i + i + 'debugger;', i + '}', i + 'throw error;', '}'].join('\n') : '')].join('\n')];}
            });
          });
        }function o(t) {
          return E(this, void 0, void 0, function () {
            var s, n;return P(this, function (a) {
              switch (a.label) {case 0:
                  return n = !t || 'script' !== t.type, n ? [3, 2] : [4, e.modules.Util.getScriptNodeScript(t, 'background')];case 1:
                  n = !a.sent(), a.label = 2;case 2:
                  return s = n, s ? [3, 4] : [4, e.modules.Util.getScriptNodeScript(t, 'background')];case 3:
                  s = '' === a.sent(), a.label = 4;case 4:
                  return s ? [2, !1] : [2, !0];}
            });
          });
        }function r(s, r) {
          return void 0 === r && (r = !1), E(this, void 0, void 0, function () {
            var l = this,
                i,
                d,
                c,
                u,
                p,
                g,
                m,
                h,
                y,
                f,
                b,
                x;return P(this, function (v) {
              switch (v.label) {case 0:
                  return [4, o(s)];case 1:
                  if (!v.sent()) return [2];i = !1, e.modules.background.byId.has(s.id) && (i = !0, e.modules.Logging.backgroundPageLog(s.id, null, 'Restarting background page...'), e.modules.background.byId.get(s.id).terminate(), e.modules.Logging.backgroundPageLog(s.id, null, 'Terminated background page...')), e.modules.background.byId.has(s.id) && e.modules.background.byId.get(s.id).terminate(), e.modules.crmValues.tabData.has(0) && e.modules.crmValues.tabData.get(0).nodes.has(s.id) && e.modules.crmValues.tabData.get(0).nodes['delete'](s.id), d = [], c = !1;try {
                    d = e.modules.Util.createSecretKey();
                  } catch (t) {
                    c = t;
                  }if (c) throw window.log('An error occurred while setting up the script for node ', s.id, c), c;return u = '\t', [4, window.Promise.all([e.modules.Util.iipe(function () {
                    return E(l, void 0, void 0, function () {
                      return P(this, function (e) {
                        switch (e.label) {case 0:
                            return [4, n(s)];case 1:
                            return [2, e.sent()];}
                      });
                    });
                  }), e.modules.Util.iipe(function () {
                    return E(l, void 0, void 0, function () {
                      return P(this, function (t) {
                        switch (t.label) {case 0:
                            return [4, e.modules.Util.getScriptNodeScript(s, 'background')];case 1:
                            return [2, t.sent().split('\n').map(function (e) {
                              return u + e;
                            }).join('\n')];}
                      });
                    });
                  }), e.modules.Util.iipe(function () {
                    return E(l, void 0, void 0, function () {
                      var n, a, o, r, l, i;return P(this, function (d) {
                        switch (d.label) {case 0:
                            return o = (a = e.MetaTags).getMetaTags, [4, e.modules.Util.getScriptNodeScript(s)];case 1:
                            return n = o.apply(a, [d.sent()]), r = t.Handler.getInExcludes(s), l = r.excludes, i = r.includes, [4, t.Handler.generateGreaseMonkeyData(n, s, i, l, { incognito: !1 })];case 2:
                            return [2, d.sent()];}
                      });
                    });
                  }), e.modules.Util.iipe(function () {
                    return E(l, void 0, void 0, function () {
                      var n, a, o;return P(this, function (r) {
                        switch (r.label) {case 0:
                            return a = (n = t.Handler).genTabData, o = [0, d, s.id], [4, e.modules.Util.getScriptNodeScript(s, 'background')];case 1:
                            return a.apply(n, o.concat([r.sent()])), e.modules.Logging.Listeners.updateTabAndIdLists(), [2];}
                      });
                    });
                  })])];case 2:
                  return p = v.sent(), g = p[0], m = g.code, h = g.libraries, y = p[1], f = p[2], b = e.makeSafe(s), b.permissions = s.permissions, [4, a(m, { key: d, node: s, script: y, safeNode: b, indentUnit: u, greaseMonkeyData: f }, r)];case 3:
                  return x = v.sent(), e.modules.Sandbox.sandbox(s.id, x, h, d, function () {
                    var t = [],
                        n = e.modules.crmValues.nodeInstances;e.modules.Util.setMapDefault(n, s.id, new window.Map());var a = n.get(s.id);return e.modules.Util.iterateMap(a, function (n) {
                      try {
                        e.modules.crmValues.tabData.get(n).nodes.get(s.id).forEach(function (s, a) {
                          e.modules.Util.postMessage(s.port, { messageType: 'dummy' }), t.push({ id: n, tabIndex: a });
                        });
                      } catch (t) {
                        a['delete'](n);
                      }
                    }), t;
                  }, function (t) {
                    e.modules.background.byId.set(s.id, t), i && e.modules.Logging.log(s.id, '*', 'Background page [' + s.id + ']: ', 'Restarted background page...');
                  }), [2];}
            });
          });
        }s.createBackgroundPage = r, s.createBackgroundPages = function () {
          return E(this, void 0, void 0, function () {
            var t = this;return P(this, function () {
              return e.modules.Util.asyncIterateMap(e.modules.crm.crmById, function (e, s) {
                return E(t, void 0, void 0, function () {
                  return P(this, function (e) {
                    switch (e.label) {case 0:
                        return 'script' === s.type && 0 < s.value.backgroundScript.length ? (o(s) && window.info('Creating backgroundpage for node', s.id), [4, r(s)]) : [3, 2];case 1:
                        e.sent(), e.label = 2;case 2:
                        return [2];}
                  });
                });
              }), [2];
            });
          });
        };
      })(s = t.Background || (t.Background = {}));
    })(t = e.Script || (e.Script = {}));
  }(_ || (_ = {})), function (e) {
    var t;(function (t) {
      function s(e) {
        for (var t = [], s = -1, n = -1, a = e.split('\n'), o = 0; o < a.length; o++) {
          -1 === s ? (-1 < a[o].indexOf('==UserScript==') || -1 < a[o].indexOf('==UserStyle==')) && (s = o) : (-1 < a[o].indexOf('==/UserScript==') || -1 < a[o].indexOf('==/UserStyle==')) && (n = o, t.push({ start: s, end: n }), s = -1, n = -1);
        }return t;
      }function n(t, a) {
        if (void 0 === a && (a = !0), a) return e.modules.Caches.cacheCall(n, arguments, !0);for (var o = s(t), r = [], l = t.split('\n'), d = 0, c = o; d < c.length; d++) {
          for (var u = c[d], p = u.start, g = u.end, m = p + 1; m < g; m++) {
            r.push(l[m]);
          }
        }return r;
      }t.getMetaIndexes = s, t.getMetaLines = n;var a = new window.Map();t.getMetaTags = function (e) {
        var t = window.md5(e);if (a.has(t)) return a.get(t);for (var s = n(e), o = {}, r = null, l = /@(\w+)(\s+)(.+)/, d = 0, i; d < s.length; d++) {
          if (i = s[d].match(l), i) {
            if (r) {
              var c = r.key,
                  u = r.value;o[c] = o[c] || [], o[c].push(u);
            }r = { key: i[1], value: i[3] };
          } else r.value += '\n' + s[d];
        }if (r) {
          var c = r.key,
              u = r.value;o[c] = o[c] || [], o[c].push(u);
        }return a.set(t, o), o;
      }, t.getMetaTag = function (e, t) {
        return t in e ? Array.isArray(e[t]) ? e[t][0] : e[t] : void 0;
      }, t.getlastMetaTagValue = function (e, t) {
        return e[t] && e[t][e[t].length - 1];
      };
    })(t = e.MetaTags || (e.MetaTags = {}));
  }(_ || (_ = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        function s(t) {
          return E(this, void 0, void 0, function () {
            var n, a, o;return P(this, function (r) {
              switch (r.label) {case 0:
                  if (n = e.modules.crm.crmById.get(t).children, !n) return [3, 4];a = 0, r.label = 1;case 1:
                  return a < n.length ? [4, s(n[a].id)] : [3, 4];case 2:
                  r.sent(), r.label = 3;case 3:
                  return a++, [3, 1];case 4:
                  return e.modules.background.byId.has(t) && (e.modules.background.byId.get(t).terminate(), e.modules.background.byId['delete'](t)), e.modules.crm.crmById['delete'](t), e.modules.crm.crmByIdSafe['delete'](t), o = e.modules.crmValues.contextMenuIds.get(t), void 0 === o || null === o ? [3, 6] : [4, browserAPI.contextMenus.remove(o)['catch'](function () {})];case 5:
                  r.sent(), r.label = 6;case 6:
                  return [2];}
            });
          });
        }function n(t, s) {
          if (s !== void 0 && null !== s) {
            for (var n = e.modules.storages.settingsStorage.crm, a = 0, o = s.slice(0, -1); a < o.length; a++) {
              var r = o[a],
                  l = n[r].children;if (!l) return;n = l;
            }n[e.modules.Util.getLastItem(s)] = t;
          } else e.modules.storages.settingsStorage.crm.push(t);
        }function a(t, s) {
          return e.MetaTags.getlastMetaTagValue(t, 'CRM_LaunchMode') ? e.MetaTags.getlastMetaTagValue(t, 'CRM_LaunchMode') : 0 === s.length ? 0 : 2;
        }function o(e) {
          var t = [],
              s = (e.includes || []).concat(e.include);s && (t = t.concat(s.map(function (e) {
            return { url: e, not: !1 };
          }).filter(function (e) {
            return !!e.url;
          })));var n = e.match;n && (t = t.concat(n.map(function (e) {
            return { url: e, not: !1 };
          }).filter(function (e) {
            return !!e.url;
          })));var o = e.exclude;return o && (t = t.concat(o.map(function (e) {
            return { url: e, not: !1 };
          }).filter(function (e) {
            return !!e.url;
          }))), t = t.filter(function (e, s) {
            return t.indexOf(e) === s;
          }), { triggers: t, launchMode: a(e, t) };
        }function r(t, s, n) {
          return E(this, void 0, void 0, function () {
            var a = this,
                o,
                r,
                l,
                d,
                c,
                i,
                u,
                p,
                g,
                m,
                h;return P(this, function (y) {
              switch (y.label) {case 0:
                  for (n.type = 'script', o = n, r = [], t.CRM_libraries && t.CRM_libraries.forEach(function (e) {
                    try {
                      r.push(JSON.parse(e));
                    } catch (t) {}
                  }), l = t.require || [], d = [], c = 0; c < l.length; c++) {
                    for (i = !1, u = 0; u < r.length; u++) {
                      if (r[u].url === l[c]) {
                        i = !0;break;
                      }
                    }i || d.push({ url: l[c], name: null });
                  }return d.forEach(function (t) {
                    e.modules.Resources.Anonymous.handle({ type: 'register', name: t.url, url: t.url, scriptId: o.id });
                  }), [4, browserAPI.storage.local.get('libraries')];case 1:
                  return p = y.sent().libraries, h = (m = p).concat, [4, Promise.all(r.map(function (t) {
                    var s = t.name,
                        n = t.url;return new Promise(function (t) {
                      return E(a, void 0, void 0, function () {
                        var a;return P(this, function (o) {
                          switch (o.label) {case 0:
                              return [4, e.modules.Util.xhr(n)['catch'](function () {
                                t(null);
                              })];case 1:
                              return a = o.sent(), a || t(null), t({ name: s, code: a, url: n, ts: { enabled: !1, code: {} } }), [2];}
                        });
                      });
                    });
                  }))];case 2:
                  return g = h.apply(m, [y.sent().filter(function (e) {
                    return !!e;
                  })]), [4, browserAPI.storage.local.set({ libraries: g })];case 3:
                  return y.sent(), [4, e.modules.Storages.applyChanges({ type: 'libraries', libraries: g })];case 4:
                  return y.sent(), r = r.concat(d), o.value = e.modules.constants.templates.getDefaultScriptValue({ script: s, libraries: r }), [2];}
            });
          });
        }function l(t, s, n) {
          n = n, n.type = 'stylesheet', n.value = { stylesheet: s, defaultOn: t.CRM_defaultOn = e.MetaTags.getlastMetaTagValue(t, 'CRM_defaultOn') || !1, toggle: t.CRM_toggle = e.MetaTags.getlastMetaTagValue(t, 'CRM_toggle') || !1, launchMode: 1, options: {}, convertedStylesheet: null };
        }function i(t, s, n) {
          return E(this, void 0, void 0, function () {
            return P(this, function (a) {
              switch (a.label) {case 0:
                  return e.MetaTags.getlastMetaTagValue(t, 'CRM_stylesheet') ? (l(t, s, n), [3, 3]) : [3, 1];case 1:
                  return [4, r(t, s, n)];case 2:
                  a.sent(), a.label = 3;case 3:
                  return [2];}
            });
          });
        }function d(t, s, n, a, r) {
          return E(this, void 0, void 0, function () {
            var l, d, c, u, p, g, m, h, y, f, b, x, v, I, S, k;return P(this, function (C) {
              switch (C.label) {case 0:
                  return (l = {}, d = !1, void 0 === r || null === r) ? [3, 1] : (d = !0, l.id = r, [3, 3]);case 1:
                  return c = l, [4, e.modules.Util.generateItemId()];case 2:
                  c.id = C.sent(), C.label = 3;case 3:
                  return 0 === Object.getOwnPropertyNames(t).length && (t = e.MetaTags.getMetaTags(s)), l.name = e.MetaTags.getlastMetaTagValue(t, 'name') || 'name', [4, i(t, s, l)];case 4:
                  if (C.sent(), u = o(t), p = u.launchMode, g = u.triggers, l.triggers = g, l.value.launchMode = p, m = e.MetaTags.getlastMetaTagValue(t, 'updateURL') || e.MetaTags.getlastMetaTagValue(t, 'downloadURL') || n, h = [], t.grant && (h = t.grant, h = h.splice(h.indexOf('none'), 1)), l.nodeInfo = { version: e.MetaTags.getlastMetaTagValue(t, 'version') || null, source: { updateURL: m || n, url: m || e.MetaTags.getlastMetaTagValue(t, 'namespace') || n, author: e.MetaTags.getlastMetaTagValue(t, 'author') || 'Anonymous', autoUpdate: !0 }, isRoot: !0, permissions: h, lastUpdatedAt: Date.now(), installDate: new Date().toLocaleDateString() }, d && (l.nodeInfo.installDate = e.modules.Util.accessPath(e.modules.crm.crmById.get(r), 'nodeInfo', 'installDate') || l.nodeInfo.installDate), e.MetaTags.getlastMetaTagValue(t, 'CRM_contentTypes')) try {
                    l.onContentTypes = JSON.parse(e.MetaTags.getlastMetaTagValue(t, 'CRM_contentTypes'));
                  } catch (t) {}return l.onContentTypes || (l.onContentTypes = [!0, !0, !0, !0, !0, !0]), l.permissions = a || [], t.resource && (y = t.resource, y.forEach(function (t) {
                    var s = t.split(/(\s*)/),
                        n = s[0],
                        a = s[1];e.modules.Resources.Resource.handle({ type: 'register', name: n, url: a, scriptId: l.id });
                  })), [4, browserAPI.storage.local.get()];case 5:
                  return f = C.sent().requestPermissions, b = void 0 === f ? [] : f, browserAPI.permissions ? [4, browserAPI.permissions.getAll()] : [3, 7];case 6:
                  return v = C.sent(), [3, 8];case 7:
                  v = { permissions: [] }, C.label = 8;case 8:
                  return x = v, I = x.permissions || [], S = b.concat(l.permissions).filter(function (e) {
                    return -1 === I.indexOf(e);
                  }).filter(function (e, t, s) {
                    return s.indexOf(e) === t;
                  }), browserAPI.storage.local.set({ requestPermissions: S }), l = 'script' === l.type ? e.modules.constants.templates.getDefaultScriptNode(l) : e.modules.constants.templates.getDefaultStylesheetNode(l), d ? (k = e.modules.crm.crmById.get(r).path, [2, { node: l, path: k, oldNodeId: r }]) : [2, { node: l, path: null, oldNodeId: null }];return [2];}
            });
          });
        }function c(e) {
          var t = e.nodeInfo;return t && t.source && 'string' !== typeof t.source && (t.source.downloadURL || t.source.updateURL || t.source.url);
        }function u(t, s) {
          return E(this, void 0, void 0, function () {
            var n, a, o, r;return P(this, function (l) {
              switch (l.label) {case 0:
                  return n = t.map(function (t) {
                    var n = t.node,
                        a = n.id,
                        o = n.name,
                        r = n.nodeInfo,
                        l = e.modules.Storages.findNodeWithId(s, a);return { name: o, id: a, oldVersion: l && l.nodeInfo && l.nodeInfo.version || '', newVersion: r.version || '' };
                  }), [4, e.modules.Storages.uploadChanges('settings', [{ key: 'crm', oldValue: s, newValue: e.modules.storages.settingsStorage.crm }])];case 1:
                  return l.sent(), [4, browserAPI.storage.local.get()];case 2:
                  return a = l.sent().updatedNodes, o = void 0 === a ? [] : a, r = o.concat(n), browserAPI.storage.local.set({ updatedScripts: r }), [2, r];}
            });
          });
        }function p(t, s, n) {
          var a = this;return new Promise(function (o) {
            if (s && e.modules.Util.endsWith(s, '.user.js')) try {
              e.modules.Util.convertFileToDataURI(s, function (r, l) {
                return E(a, void 0, void 0, function () {
                  var a, r, i, c, u, p;return P(this, function (g) {
                    switch (g.label) {case 0:
                        return g.trys.push([0, 6,, 7]), a = e.MetaTags.getMetaTags(l), e.modules.Util.isNewer(a.version[0], t.nodeInfo.version) ? e.modules.Util.compareArray(t.nodeInfo.permissions, a.grant) || 1 === a.grant.length && 'none' === a.grant[0] ? [3, 3] : [4, browserAPI.storage.local.get()] : [3, 5];case 1:
                        return r = g.sent().addedPermissions, i = void 0 === r ? [] : r, i.push({ node: t.id, permissions: a.grant.filter(function (e) {
                            return -1 === t.nodeInfo.permissions.indexOf(e);
                          }) }), [4, browserAPI.storage.local.set({ addedPermissions: i })];case 2:
                        g.sent(), g.label = 3;case 3:
                        return u = (c = n).push, [4, d(a, l, s, t.permissions, t.id)];case 4:
                        u.apply(c, [g.sent()]), g.label = 5;case 5:
                        return [3, 7];case 6:
                        return p = g.sent(), window.log('Tried to update script ', t.id, ' ', t.name, ' but could not reach download URL'), [3, 7];case 7:
                        return o(null), [2];}
                  });
                });
              }, function () {
                window.log('Tried to update script ', t.id, ' ', t.name, ' but could not reach download URL'), o(null);
              });
            } catch (s) {
              window.log('Tried to update script ', t.id, ' ', t.name, ' but could not reach download URL'), o(null);
            }
          });
        }t.removeOldNode = s, t.registerNode = n, t.install = function (a) {
          return E(this, void 0, void 0, function () {
            var o, r, l, i, d, c;return P(this, function (u) {
              switch (u.label) {case 0:
                  return o = JSON.parse(JSON.stringify(e.modules.storages.settingsStorage.crm)), [4, t.installUserscript(a.metaTags, a.script, a.downloadURL, a.allowedPermissions)];case 1:
                  return (r = u.sent(), l = r.path, i = r.oldNodeId, d = r.node, !l) ? [3, 3] : (c = l, [4, s(i)]);case 2:
                  return u.sent(), n(d, c), [3, 4];case 3:
                  n(d), u.label = 4;case 4:
                  return [4, e.modules.Storages.uploadChanges('settings', [{ key: 'crm', oldValue: o, newValue: e.modules.storages.settingsStorage.crm }])];case 5:
                  return u.sent(), [2];}
            });
          });
        }, t.installUserscript = d, t.updateScripts = function () {
          return E(this, void 0, void 0, function () {
            var t = this,
                s,
                n;return P(this, function (a) {
              switch (a.label) {case 0:
                  return s = [], n = JSON.parse(JSON.stringify(e.modules.storages.settingsStorage.crm)), [4, Promise.all(e.modules.Util.mapToArr(e.modules.crm.crmById).map(function (e) {
                    var n = e[0],
                        a = e[1];return E(t, void 0, void 0, function () {
                      var e, t;return P(this, function (n) {
                        switch (n.label) {case 0:
                            return 'script' === a.type ? (e = a.nodeInfo && a.nodeInfo.isRoot, t = c(a), t && e && 'local' !== a.nodeInfo.source && a.nodeInfo.source.autoUpdate ? [4, p(a, t, s)] : [3, 2]) : [2];case 1:
                            n.sent(), n.label = 2;case 2:
                            return [2];}
                      });
                    });
                  }))];case 1:
                  return a.sent(), [4, u(s, n)];case 2:
                  return a.sent(), [2];}
            });
          });
        };
      })(s = t.Updating || (t.Updating = {}));
    })(t = e.Script || (e.Script = {}));
  }(_ || (_ = {})), function (e) {
    var t;(function (t) {
      function s(t) {
        if (-1 < e.modules.storages.globalExcludes.indexOf('<all_urls>')) return !0;for (var s = 0, n; s < e.modules.storages.globalExcludes.length; s++) {
          if (n = e.modules.storages.globalExcludes[s], n && e.modules.URLParsing.urlMatchesPattern(n, t)) return !0;
        }return !1;
      }function n(t, s) {
        'script' === t.type ? e.Script.Handler.createHandler(t)({ pageUrl: s.url, menuItemId: 0, editable: !1, modifiers: [] }, s, !0) : 'stylesheet' === t.type ? e.Stylesheet.createClickHandler(t)({ pageUrl: s.url, menuItemId: 0, editable: !1, modifiers: [] }, s) : 'link' === t.type && e.Link.createHandler(t)({ pageUrl: s.url, menuItemId: 0, editable: !1, modifiers: [] }, s);
      }t.urlIsGlobalExcluded = s, t.executeNode = n, t.executeScriptsForTab = function (t, a) {
        return E(this, void 0, void 0, function () {
          var o, r, l, i, d, c, u;return P(this, function (p) {
            switch (p.label) {case 0:
                return p.trys.push([0, 2,, 3]), [4, browserAPI.tabs.get(t)];case 1:
                if (o = p.sent(), o.url && e.modules.Util.canRunOnUrl(o.url) && (e.modules.crmValues.tabData.set(o.id, { libraries: new window.Map(), nodes: new window.Map() }), e.modules.Logging.Listeners.updateTabAndIdLists(), a && e.modules.GlobalDeclarations.runAlwaysRunNodes(o), !s(o.url))) {
                  for (r = e.modules.toExecuteNodes, l = r.onUrl.documentEnd.filter(function (t) {
                    var s = t.triggers;return e.modules.URLParsing.matchesUrlSchemes(s, o.url);
                  }), (i = 0, d = r.always.documentEnd.concat(l)); i < d.length; i++) {
                    c = d[i].id, n(e.modules.crm.crmById.get(c), o);
                  }return [2, { matched: 0 < l.length }];
                }return [3, 3];case 2:
                return u = p.sent(), console.log('Error while executing scripts for tab', u), [3, 3];case 3:
                return [2, { matched: !1 }];}
          });
        });
      };
    })(t = e.Running || (e.Running = {}));
  }(_ || (_ = {})), function (e) {
    var t;(function (e) {
      function t(e) {
        return -1 === e.indexOf('://') && (e = 'http://' + e), e;
      }function s(e, t) {
        return e.replace(/%s/g, t.selectionText || '');
      }e.createHandler = function (e) {
        return function (n, a) {
          for (var o = 0, r; o < e.value.length; o++) {
            e.value[o].newTab ? browserAPI.tabs.create({ windowId: a.windowId, url: s(t(e.value[o].url), n), openerTabId: a.id }) : r = e.value[o].url;
          }r && browserAPI.tabs.update(a.id, { url: s(t(r), n) });
        };
      };
    })(t = e.Link || (e.Link = {}));
  }(_ || (_ = {})), function (e) {
    var t;(function (t) {
      var s;(function (s) {
        function n(e) {
          var t = e.nodeInfo;return t && t.source && 'string' !== typeof t.source && (t.source.downloadURL || t.source.updateURL || t.source.url);
        }function a(s, n, a) {
          var o = this;return new Promise(function (r) {
            e.modules.Util.convertFileToDataURI(n, function (n, l) {
              return E(o, void 0, void 0, function () {
                var n, o, i, d, c;return P(this, function () {
                  try {
                    for (n = t.Installing.getUserstyleMeta(l), o = 0; o < n.sections.length; o++) {
                      (i = n.sections[o], d = e.Stylesheet.Installing.extractStylesheetData(i), c = !1, 'local' === s.nodeInfo.source || s.nodeInfo.source.sectionIndex === o) && (s.value.launchMode !== d.launchMode && (s.value.launchMode = d.launchMode, c = !0), e.modules.Util.compareArray(s.triggers, d.triggers) || (s.triggers = JSON.parse(JSON.stringify(d.triggers)), c = !0), s.value.stylesheet !== d.code && (s.value.stylesheet = d.code, c = !0), c && a.push({ node: s }));
                    }r(null);
                  } catch (t) {
                    r(null);
                  }return [2];
                });
              });
            }, function () {
              window.log('Tried to update stylesheet ', s.id, ' ', s.name, ' but could not reach download URL'), r(null);
            });
          });
        }function o(t, s) {
          return E(this, void 0, void 0, function () {
            var n, a, o, r;return P(this, function (l) {
              switch (l.label) {case 0:
                  return n = t.map(function (t) {
                    var n = t.node,
                        a = n.id,
                        o = n.name,
                        r = n.nodeInfo,
                        l = e.modules.Storages.findNodeWithId(s, a);return { name: o, id: a, oldVersion: e.modules.Util.accessPath(l, 'nodeInfo', 'version') || void 0, newVersion: r.version };
                  }), [4, e.modules.Storages.uploadChanges('settings', [{ key: 'crm', oldValue: s, newValue: e.modules.storages.settingsStorage.crm }])];case 1:
                  return l.sent(), [4, browserAPI.storage.local.get()];case 2:
                  return a = l.sent().updatedNodes, o = void 0 === a ? [] : a, r = o.concat(n), browserAPI.storage.local.set({ updatedScripts: r }), [2, r];}
            });
          });
        }s.getDownloadURL = n, s.updateStylesheet = function (t) {
          return E(this, void 0, void 0, function () {
            var s, a, o, r, l;return P(this, function (i) {
              switch (i.label) {case 0:
                  return s = e.modules.crm.crmById.get(t), a = n(s), [4, e.Stylesheet.Installing.getUserstyleMeta(a)];case 1:
                  return o = i.sent().sections['local' !== s.nodeInfo.source && s.nodeInfo.source.sectionIndex], r = e.Stylesheet.Installing.extractStylesheetData(o), l = JSON.parse(JSON.stringify(e.modules.storages.settingsStorage.crm)), s.value.launchMode = r.launchMode, s.triggers = JSON.parse(JSON.stringify(r.triggers)), s.value.stylesheet = r.code, [4, e.modules.Storages.uploadChanges('settings', [{ key: 'crm', oldValue: l, newValue: e.modules.storages.settingsStorage.crm }])];case 2:
                  return i.sent(), [2];}
            });
          });
        }, s.updateStylesheets = function () {
          return E(this, void 0, void 0, function () {
            var t = this,
                s,
                r;return P(this, function (l) {
              switch (l.label) {case 0:
                  return s = [], r = JSON.parse(JSON.stringify(e.modules.storages.settingsStorage.crm)), [4, Promise.all(e.modules.Util.mapToArr(e.modules.crm.crmById).map(function (e) {
                    var o = e[0],
                        r = e[1];return E(t, void 0, void 0, function () {
                      var e, t;return P(this, function (o) {
                        switch (o.label) {case 0:
                            return 'stylesheet' === r.type ? (e = r.nodeInfo && r.nodeInfo.isRoot, t = n(r), t && e && 'local' !== r.nodeInfo.source && r.nodeInfo.source.autoUpdate ? [4, a(r, t, s)] : [3, 2]) : [2];case 1:
                            o.sent(), o.label = 2;case 2:
                            return [2];}
                      });
                    });
                  }))];case 1:
                  return l.sent(), [4, o(s, r)];case 2:
                  return l.sent(), [2];}
            });
          });
        };
      })(s = t.Updating || (t.Updating = {}));
    })(t = e.Stylesheet || (e.Stylesheet = {}));
  }(_ || (_ = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        function s(e) {
          switch (e.type) {case 'array':
              return e.items;case 'boolean':case 'number':case 'string':case 'color':
              return e.value;case 'choice':
              return e.values[e.selected];}
        }function n(e, t, n) {
          for (var a; a = g.exec(t);) {
            var o = a[1];if (!(o in n)) window.log('Could not find option ' + o + ' for stylesheet ' + e), t = t.replace(g, '/*[' + o + ']*/');else {
              var r = s(n[o]);t = t.replace(g, r);
            }
          }return t;
        }function a(e) {
          var t = e.replace(/\n/g, '').split(' '),
              s = t[0],
              n = t[1],
              a = t.slice(2),
              o = a.join(' ').trim(),
              r,
              l;if (0 === o.indexOf('"') || 0 === o.indexOf('\'')) {
            var i = o[0];r = o.slice(1, 1 + o.slice(1).indexOf(i));
          } else r = a[0];l = s.length + 1 + n.length + 1 + r.length + 2;var d = e.replace(/\n/g, '').slice(l).trim();return { type: s, name: n, label: r, defaultValue: d };
        }function o(e) {
          return 'text' === e ? 'string' : 'color' === e ? 'color' : 'checkbox' === e ? 'boolean' : 'select' === e ? 'choice' : '?';
        }function r(t, s) {
          var n = e.MetaTags.getMetaTags(t),
              r = (n['var'] || []).concat(n.advanced || []);if (0 === r.length) return null;var l = {},
              i;return r.forEach(function (e) {
            var t = a(e),
                n = t.type,
                r = t.name,
                d = t.label,
                c = t.defaultValue,
                u = N({}, 'string' !== typeof s && s[r] || {}, { type: o(n), descr: d });switch (n) {case 'text':case 'color':case 'checkbox':
                i = 'string' !== typeof s && s[r], i && null === i.value && (u.value = c);break;case 'select':
                try {
                  var p = JSON.parse(c);l[r] = Array.isArray(c) ? N({}, u, { values: c.map(function (e) {
                      return -1 < e.indexOf(':') ? e.split(':')[0] : e;
                    }), selected: 0 }) : N({}, u, { values: Object.getOwnPropertyNames(p).map(function (e) {
                      return p[e];
                    }), selected: 0 });
                } catch (t) {
                  l[r] = N({}, u, { values: [], selected: 0 });break;
                }}l[r] = u;
          }), l;
        }function l(t, s) {
          if ('less' === t || 'stylus' === t) return e.modules.Util.toArray(s || {}).map(function (e) {
            var t = e[0],
                s = e[1];switch (s.type) {case 'string':case 'color':case 'number':
                return { key: t, value: (null === s.value ? s.defaultValue : s.value) + '' };case 'boolean':
                return { key: t, value: s.value ? 'true' : 'false' };case 'array':
                return { key: t, value: (null === s.value ? s.defaultValue : s.value).join(' ') };case 'choice':
                return { key: t, value: s.values[s.selected || 0] + '' };}
          });if ('default' === t) e.modules.Util.toArray(s || {}).map(function (e) {
            var t = e[0],
                s = e[1];switch (s.type) {case 'string':case 'color':case 'number':case 'boolean':
                return { key: t, value: (null === s.value ? s.defaultValue : s.value) + '' };case 'array':
                return { key: t, value: (null === s.value ? s.defaultValue : s.value).join(' ') };case 'choice':
                return { key: t, value: s.values[s.selected || 0] + '' };}
          });else if ('uso' === t) return [];return [];
        }function i(e, t, s) {
          var n = r(e, t),
              a = l(s, n);return 'less' === s ? a.map(function (e) {
            var t = e.key,
                s = e.value;return '@' + t + ':\t' + s;
          }).join('\n') + '\n' + e : 'stylus' === s ? a.map(function (e) {
            var t = e.key,
                s = e.value;return t + ' = ' + s + ';';
          }).join('\n') + '\n' + e : 'default' === s ? ':root {\n' + a.map(function (e) {
            var t = e.key,
                s = e.value;return '\t--' + t + ': ' + s;
          }).join('\n') + '\n}\n' + e : e;
        }function d(e, t) {
          return new Promise(function (s) {
            window.less.Parser().parse(e, function (n, a) {
              n ? (window.log('An error occurred while compiling less CSS for node ' + t + ': ' + n.name + ' ' + n.message), s(e)) : s(a.toCSS());
            });
          });
        }function c(e, t) {
          return new Promise(function (s) {
            window.stylus(e).render(function (n, a) {
              n ? (window.log('An error occurred while compiling stylus CSS for node ' + t + ': ' + n.name + ' ' + n.message), s(e)) : s(a.trim());
            });
          });
        }function u(t, s, a, o) {
          return E(this, void 0, void 0, function () {
            return P(this, function (r) {
              switch (r.label) {case 0:
                  return 'less' === a ? [4, e.modules.Util.execFile('js/libraries/less.js')] : [3, 3];case 1:
                  return r.sent(), [4, d(t, s)];case 2:
                  return [2, r.sent()];case 3:
                  return 'stylus' === a ? [4, e.modules.Util.execFile('js/libraries/stylus.js')] : [3, 6];case 4:
                  return r.sent(), [4, c(t, s)];case 5:
                  return [2, r.sent()];case 6:
                  return 'uso' === a ? [2, n(s, t, o)] : [2, t];r.label = 7;case 7:
                  return [2];}
            });
          });
        }function p(t, s, n) {
          return E(this, void 0, void 0, function () {
            var a, o, r;return P(this, function (l) {
              switch (l.label) {case 0:
                  return a = e.MetaTags.getMetaTags(s), o = (a['var'] || []).concat(a.advanced || []), r = a.preprocessor && a.preprocessor[0] || (o.length ? 'uso' : 'default'), [4, u(i(s, n, r), t, r, n)];case 1:
                  return [2, l.sent()];}
            });
          });
        }var g = /\/\*\[\[((.)+)\]\]\*\//;t.getConvertedStylesheet = function (e) {
          return E(this, void 0, void 0, function () {
            var t, s;return P(this, function (n) {
              switch (n.label) {case 0:
                  return e.value.convertedStylesheet && e.value.convertedStylesheet.options === JSON.stringify(e.value.options) ? [2, e.value.convertedStylesheet.stylesheet] : (t = e.value, s = { options: JSON.stringify(e.value.options) }, [4, p(e.id, e.value.stylesheet, 'string' === typeof e.value.options ? {} : e.value.options)]);case 1:
                  return t.convertedStylesheet = (s.stylesheet = n.sent(), s), [2, e.value.convertedStylesheet.stylesheet];}
            });
          });
        };
      })(s = t.Options || (t.Options = {}));
    })(t = e.Stylesheet || (e.Stylesheet = {}));
  }(_ || (_ = {})), function (e) {
    var t;(function (t) {
      var s;(function (t) {
        function s(e) {
          var t = /((http|https|file|ftp):\/\/)?(www\.)?((\w+)\.)*((\w+)?|(\w+)?(\/(.*)))?/g.exec(e);return [t[2] || '*', '://', t[4] && t[6] ? t[4] + t[6] : '*', t[7] || '/'].join('');
        }function n(t) {
          if (0 === t.domains.length && 0 === t.regexps.length && t.urlPrefixes.length && 0 === t.urls.length) return { launchMode: 1, triggers: [], code: t.code };var n = [];return t.domains.forEach(function (e) {
            n.push('*://' + e + '/*');
          }), t.regexps.forEach(function (e) {
            var t = /((http|https|file|ftp):\/\/)?(www\.)?((\w+)\.)*((\w+)?|(\w+)?(\/(.*)))?/g.exec(e);n.push([t[2] ? -1 < t[2].indexOf('*') ? '*' : t[2] : '*', '://', t[4] && t[6] ? -1 < t[4].indexOf('*') || -1 < t[6].indexOf('*') ? '*' : t[4] + t[6] : '*', t[7] ? -1 < t[7].indexOf('*') ? '*' : t[7] : '*'].join(''));
          }), t.urlPrefixes.forEach(function (t) {
            e.modules.URLParsing.triggerMatchesScheme(t) ? n.push(t + '*') : n.push(s(t + '*'));
          }), t.urls.forEach(function (t) {
            e.modules.URLParsing.triggerMatchesScheme(t) ? n.push(t) : n.push(s(t));
          }), { launchMode: 2, triggers: n.map(function (e) {
              return { url: e, not: !1 };
            }), code: t.code };
        }function a(t, s) {
          if (s.version && t.nodeInfo.version) return 1 === e.modules.Storages.getVersionDiff(t.nodeInfo.version, s.version);for (var n = 0; n < s.sections.length; n++) {
            var a = s.sections[n],
                o = e.Stylesheet.Installing.extractStylesheetData(a);if (('local' === t.nodeInfo.source || t.nodeInfo.source.sectionIndex === n) && (t.value.launchMode !== o.launchMode || !e.modules.Util.compareArray(t.triggers, o.triggers) || t.value.stylesheet !== o.code)) return !0;
          }return !1;
        }function o(t) {
          return E(this, void 0, void 0, function () {
            var s = this,
                n,
                o,
                r,
                l;return P(this, function (i) {
              switch (i.label) {case 0:
                  n = [], i.label = 1;case 1:
                  return i.trys.push([1, 3,, 4]), [4, e.modules.Util.xhr(t)];case 2:
                  return o = i.sent(), [3, 4];case 3:
                  return r = i.sent(), [2, []];case 4:
                  return [4, c(o)];case 5:
                  return l = i.sent(), [4, e.modules.Util.crmForEachAsync(e.modules.crm.crmTree, function (e) {
                    return E(s, void 0, void 0, function () {
                      return P(this, function () {
                        return 'stylesheet' === e.type ? (e.nodeInfo && e.nodeInfo.source && 'local' !== e.nodeInfo.source && (e.nodeInfo.source.updateURL === t || e.nodeInfo.source.downloadURL === t) && (a(e, l) ? n.push({ node: e, state: 'updatable' }) : n.push({ node: e, state: 'installed' })), [2]) : [2];
                      });
                    });
                  })];case 6:
                  return i.sent(), [2, n];}
            });
          });
        }function r(e, t, s) {
          for (var n = 0; n < s.length; n++) {
            if (e[t + n] !== s[n]) return !1;
          }return !0;
        }function l(e) {
          for (var t = [], s = -1, n = -1, a = -1, o = 0, l = !0, d = 0, i; d < e.length; d++) {
            i = e[d], (r(e, d, '@-moz-document') || r(e, d, '@document')) && (-1 !== n && (s = d - 1, t.push({ start: n, end: s, firstBracket: a }), n = s = a = -1), o = 0, l = !0, d += '-' === e[d + 1] ? 14 : 9, n = d), 0 === o && !1 === l && (s = d, l = !0, t.push({ start: n, end: s, firstBracket: a }), n = s = a = -1), '{' === i ? (l = !1, -1 === a && (a = d), o += 1) : '}' === i && (o -= 1);
          }return t;
        }function i(e) {
          var t = /(.*)\(['"](.*)['"]\)/.exec(e);return t ? { fn: t[1], url: t[2] } : { fn: null, url: null };
        }function d(t) {
          var s = e.MetaTags.getMetaLines(t);return l(t).map(function (e) {
            for (var n = e.start, a = e.end, o = e.firstBracket, r = t.slice(n, o), l = 0 < s.length ? '/* ==UserStyle==\n' + s.map(function (e) {
              return '' + e;
            }).join('\n') + '\n==/UserStyle==*/' : '', d = { code: l + '\n' + t.slice(o + 1, a - 1), domains: [], regexps: [], urlPrefixes: [], urls: [] }, c = r.split(',').map(function (e) {
              return e.trim();
            }).map(function (e) {
              return i(e);
            }), u = 0, p = c; u < p.length; u++) {
              var g = p[u],
                  m = g.fn,
                  h = g.url;'url' === m ? d.urls.push(h) : 'url-prefix' === m ? d.urlPrefixes.push(h) : 'domain' === m ? d.domains.push(h) : 'regexp' === m ? d.regexps.push(h) : void 0;
            }return d;
          });
        }function c(t) {
          var s = !1;try {
            JSON.parse(t), s = !0;
          } catch (t) {}if (s) return JSON.parse(t);var n = e.MetaTags.getMetaTags(t);return { sections: d(t), md5Url: window.md5(t), name: e.MetaTags.getMetaTag(n, 'name') || 'Userstyle', originalMd5: window.md5(t), updateUrl: e.MetaTags.getMetaTag(n, 'updateURL') || e.MetaTags.getMetaTag(n, 'homepageURL') || void 0, url: e.MetaTags.getMetaTag(n, 'homepageURL'), version: e.MetaTags.getMetaTag(n, 'version'), author: e.MetaTags.getMetaTag(n, 'author') };
        }t.extractStylesheetData = n, t.getInstalledStatus = o, t.getUserstyleMeta = c, t.installStylesheet = function (t) {
          return E(this, void 0, void 0, function () {
            var s = this,
                a,
                r;return P(this, function (l) {
              switch (l.label) {case 0:
                  return a = c(t.code), [4, o(t.downloadURL)];case 1:
                  return 0 < l.sent().length ? [2] : [4, e.modules.Util.getMultipleItemIds(a.sections.length)];case 2:
                  return r = l.sent(), [4, e.modules.Util.promiseChain(a.sections.map(function (o, l) {
                    return function () {
                      return E(s, void 0, void 0, function () {
                        var s, i, d;return P(this, function (c) {
                          switch (c.label) {case 0:
                              return s = n(o), i = e.modules.constants.templates.getDefaultStylesheetNode({ isLocal: !1, name: t.name || a.name, nodeInfo: { version: '1.0.0', source: { updateURL: a.updateUrl, url: a.url, author: a.author || t.author, sectionIndex: l, downloadURL: t.downloadURL, autoUpdate: !0 }, permissions: [], installDate: new Date().toLocaleDateString() }, triggers: s.triggers, value: { launchMode: s.launchMode, stylesheet: s.code }, id: r[l] }), d = new e.modules.CRMAPICall.Instance(null, null), [4, d.moveNode(i, {})];case 1:
                              return c.sent(), [2];}
                        });
                      });
                    };
                  }))];case 3:
                  return l.sent(), [2];}
            });
          });
        };
      })(s = t.Installing || (t.Installing = {}));
    })(t = e.Stylesheet || (e.Stylesheet = {}));
  }(_ || (_ = {})), function (e) {
    var t;(function (t) {
      t.createToggleHandler = function (s) {
        var n = this;return function (a, o) {
          return E(n, void 0, void 0, function () {
            var n, r, l;return P(this, function (i) {
              switch (i.label) {case 0:
                  return (r = s.id + '' + o.id, !a.wasChecked) ? [3, 1] : (n = ['var nodes = Array.prototype.slice.apply(document.querySelectorAll(".styleNodes' + r + '")).forEach(function(node){', 'node.remove();', '});'].join(''), [3, 3]);case 1:
                  return [4, t.Options.getConvertedStylesheet(s)];case 2:
                  l = i.sent().replace(/[ |\n]/g, ''), n = ['var CRMSSInsert=document.createElement("style");', 'CRMSSInsert.className="styleNodes' + r + '";', 'CRMSSInsert.type="text/css";', 'CRMSSInsert.appendChild(document.createTextNode(' + JSON.stringify(l) + '));', 'document.head.appendChild(CRMSSInsert);'].join(''), i.label = 3;case 3:
                  return e.modules.crmValues.nodeTabStatuses.get(s.id).tabs.has(o.id) || e.modules.crmValues.nodeTabStatuses.get(s.id).tabs.set(o.id, {}), e.modules.crmValues.nodeTabStatuses.get(s.id).tabs.get(o.id).checked = a.checked, browserAPI.tabs.executeScript(o.id, { code: n, allFrames: !0 }), [2];}
            });
          });
        };
      }, t.createClickHandler = function (e) {
        var s = this;return function (n, a) {
          return E(s, void 0, void 0, function () {
            var s, n, o;return P(this, function (r) {
              switch (r.label) {case 0:
                  return s = e.id + '' + a.id, [4, t.Options.getConvertedStylesheet(e)];case 1:
                  return n = r.sent().replace(/[ |\n]/g, ''), o = ['(function() {', 'if (document.querySelector(".styleNodes' + s + '")) {', 'return false;', '}', 'var CRMSSInsert=document.createElement("style");', 'CRMSSInsert.classList.add("styleNodes' + s + '");', 'CRMSSInsert.type="text/css";', 'CRMSSInsert.appendChild(document.createTextNode(' + JSON.stringify(n) + '));', 'document.head.appendChild(CRMSSInsert);', '}());'].join(''), browserAPI.tabs.executeScript(a.id, { code: o, allFrames: !0 }), [2, e.value.stylesheet];}
            });
          });
        };
      };
    })(t = e.Stylesheet || (e.Stylesheet = {}));
  }(_ || (_ = {})), function (t) {
    var e;(function (e) {
      function s(e) {
        var s = [],
            n = t.modules.crm.crmById.get(e.id);if (t.modules.crmValues.contextMenuIds.get(e.id) && 'stylesheet' === n.type && 'stylesheet' === e.type && n.value.stylesheet !== e.value.stylesheet) {
          var a = t.modules.crmValues.nodeTabStatuses;t.modules.Util.iterateMap(a.get(e.id).tabs, function (e) {
            s.push({ id: e });
          });
        }return s;
      }function n(e) {
        var t = e.triggers,
            s = e.id;return { triggers: t, id: s };
      }function a(e, s) {
        'stylesheet' === e.type && e.value.toggle && e.value.defaultOn && (1 === s || 0 === s ? t.modules.toExecuteNodes.always.documentEnd.push(n(e)) : (2 === s || 3 === s) && t.modules.toExecuteNodes.onUrl.documentEnd.push(n(e)));
      }function o(e, s, n) {
        if (e.showOnSpecified && ('link' === e.type || 'divider' === e.type || 'menu' === e.type) || 3 === s) {
          n.documentUrlPatterns = [], t.modules.crmValues.hideNodesOnPagesData.set(e.id, []);for (var a = 0, o; a < e.triggers.length; a++) {
            o = t.modules.URLParsing.prepareTrigger(e.triggers[a].url), o && (e.triggers[a].not ? t.modules.crmValues.hideNodesOnPagesData.get(e.id).push({ not: !1, url: o }) : n.documentUrlPatterns.push(o));
          }
        }
      }function r(e, s) {
        switch (e.type) {case 'divider':
            s.type = 'separator';break;case 'link':
            s.onclick = t.Link.createHandler(e);break;case 'script':
            s.onclick = t.Script.Handler.createHandler(e);break;case 'stylesheet':
            e.value.toggle ? (s.type = 'checkbox', s.onclick = t.Stylesheet.createToggleHandler(e), s.checked = e.value.defaultOn) : s.onclick = t.Stylesheet.createClickHandler(e), t.modules.crmValues.nodeTabStatuses.set(e.id, { defaultCheckedValue: e.value.defaultOn, tabs: new window.Map() });}
      }function l(s, n, e) {
        return E(this, void 0, void 0, function () {
          var a = this,
              o;return P(this, function (r) {
            switch (r.label) {case 0:
                return s.documentUrlPatterns ? (window.log('An error occurred with your context menu, attempting again with no url matching.', n), delete s.documentUrlPatterns, o = e, [4, browserAPI.contextMenus.create(s, function () {
                  return E(a, void 0, void 0, function () {
                    var s;return P(this, function (a) {
                      switch (a.label) {case 0:
                          return s = e, [4, browserAPI.contextMenus.create({ title: 'ERROR', onclick: t.createOptionsPageHandler() })];case 1:
                          return s.id = a.sent(), window.log('Another error occured with your context menu!', n), [2];}
                    });
                  });
                })]) : [3, 2];case 1:
                return o.id = r.sent(), [3, 3];case 2:
                window.log('An error occured with your context menu!', n), r.label = 3;case 3:
                return [2];}
          });
        });
      }function i(e, t) {
        return E(this, void 0, void 0, function () {
          var s = this,
              n,
              a;return P(this, function (o) {
            switch (o.label) {case 0:
                return o.trys.push([0, 2,, 4]), n = t, [4, browserAPI.contextMenus.create(e, function () {
                  return E(s, void 0, void 0, function () {
                    var s;return P(this, function (n) {
                      switch (n.label) {case 0:
                          return window.chrome && window.chrome.runtime ? (s = window.chrome, s && s.runtime && s.runtime.lastError ? [4, l(e, s.runtime.lastError, t)] : [3, 2]) : [3, 3];case 1:
                          n.sent(), n.label = 2;case 2:
                          return [3, 5];case 3:
                          return browserAPI.runtime.lastError ? [4, l(e, browserAPI.runtime.lastError, t)] : [3, 5];case 4:
                          n.sent(), n.label = 5;case 5:
                          return [2];}
                    });
                  });
                })];case 1:
                return n.id = o.sent(), [3, 4];case 2:
                return a = o.sent(), [4, l(e, a, t)];case 3:
                return o.sent(), [3, 4];case 4:
                return [2];}
          });
        });
      }function d(e) {
        return t.modules.crmValues.contextMenuGlobalOverrides.get(e.id);
      }function c(e, s, n, l) {
        return E(this, void 0, void 0, function () {
          return P(this, function (c) {
            switch (c.label) {case 0:
                return a(e, s), o(e, s, n), r(e, n), t.modules.Util.applyContextmenuOverride(n, d(e)), [4, i(n, l)];case 1:
                return c.sent(), t.modules.crmValues.contextMenuInfoById.set(l.id, { settings: n, path: e.path, enabled: !1 }), [2];}
          });
        });
      }function u(e, s, a) {
        var o = n(e);s ? a ? t.modules.toExecuteNodes.always.documentStart.push(o) : t.modules.toExecuteNodes.always.documentEnd.push(o) : a ? t.modules.toExecuteNodes.onUrl.documentStart.push(o) : t.modules.toExecuteNodes.onUrl.documentEnd.push(o);
      }function p(e) {
        return E(this, void 0, void 0, function () {
          var s, n, a, o;return P(this, function (r) {
            switch (r.label) {case 0:
                return 'script' === e.type ? (a = (n = t.MetaTags).getMetaTags, [4, t.modules.Util.getScriptNodeScript(e)]) : [3, 2];case 1:
                return s = a.apply(n, [r.sent()]), o = s['run-at'] || s.run_at, Array.isArray(o) || (o = [o]), [2, 'document_start' === o[0]];case 2:
                return [2, !1];}
          });
        });
      }function g(e, t, s) {
        return E(this, void 0, void 0, function () {
          var n, a, o, r;return P(this, function (l) {
            switch (l.label) {case 0:
                return (n = ('script' === e.type || 'stylesheet' === e.type) && e.value.launchMode || 0, 1 !== n && 2 !== n) ? [3, 3] : (a = u, o = [e, 1 === n], r = 'stylesheet' === e.type, r ? [3, 2] : [4, p(e)]);case 1:
                r = l.sent(), l.label = 2;case 2:
                return a.apply(void 0, o.concat([r])), [3, 5];case 3:
                return 4 === n ? [3, 5] : [4, c(e, n, t, s)];case 4:
                l.sent(), l.label = 5;case 5:
                return [2];}
          });
        });
      }e.createNode = function (e, n) {
        return E(this, void 0, void 0, function () {
          var a, o, r, l, d, i, c, u, p;return P(this, function (m) {
            switch (m.label) {case 0:
                return a = s(e), o = { title: e.name, contexts: t.getContexts(e.onContentTypes), parentId: n }, r = { id: null }, [4, g(e, o, r)];case 1:
                if (m.sent(), l = r.id, 0 !== a.length) for (e = e, d = 0; d < a.length; d++) {
                  i = e.id + '' + a[d].id, c = 'var nodes = document.querySelectorAll(".styleNodes' + i + '");var i;for (i = 0; i < nodes.length; i++) {nodes[i].remove();}', u = e.value.stylesheet.replace(/[ |\n]/g, ''), c += 'var CRMSSInsert=document.createElement("style");CRMSSInsert.className="styleNodes' + i + '";CRMSSInsert.type="text/css";CRMSSInsert.appendChild(document.createTextNode(' + JSON.stringify(u) + '));document.head.appendChild(CRMSSInsert);', browserAPI.tabs.executeScript(a[d].id, { code: c, allFrames: !0 }), p = t.modules.crmValues.nodeTabStatuses, p.get(e.id).tabs.get(a[d].id).checked = !0;
                }return [2, l];}
          });
        });
      };
    })(e = t.NodeCreation || (t.NodeCreation = {}));
  }(_ || (_ = {})), function (e) {
    var t;(function (t) {
      function s(t) {
        return E(this, void 0, void 0, function () {
          var s, n;return P(this, function (a) {
            switch (a.label) {case 0:
                return t.value.ts && t.value.ts.enabled ? (s = t.value.ts, [4, o(t.value.script, t.value.ts.script)]) : [3, 3];case 1:
                return s.script = a.sent(), n = t.value.ts, [4, o(e.modules.Util.getScriptNodeJS(t, 'background'), t.value.ts.backgroundScript)];case 2:
                n.backgroundScript = a.sent(), a.label = 3;case 3:
                return [2];}
          });
        });
      }function n(e) {
        return E(this, void 0, void 0, function () {
          var t;return P(this, function (s) {
            switch (s.label) {case 0:
                return e.ts && e.ts.enabled ? (t = e.ts, [4, o(e.code, e.ts.code)]) : [3, 2];case 1:
                t.code = s.sent(), s.label = 2;case 2:
                return [2, e];}
          });
        });
      }function a(e) {
        return E(this, void 0, void 0, function () {
          var t, n, o;return P(this, function (r) {
            switch (r.label) {case 0:
                t = e.length, n = 0, r.label = 1;case 1:
                return n < t ? (o = e[n], o ? 'script' === o.type ? [4, s(o)] : [3, 3] : [3, 5]) : [3, 6];case 2:
                return r.sent(), [3, 5];case 3:
                return 'menu' === o.type ? [4, a(o.children)] : [3, 5];case 4:
                r.sent(), r.label = 5;case 5:
                return n++, [3, 1];case 6:
                return [2];}
          });
        });
      }function o(e, t) {
        return E(this, void 0, void 0, function () {
          var s, n, a;return P(this, function (o) {
            switch (o.label) {case 0:
                return (s = t.sourceHash, n = window.md5(e), n === s) ? [3, 2] : (a = {}, [4, l(e)]);case 1:
                return [2, (a.compiled = o.sent(), a.sourceHash = n, a)];case 2:
                return [2, t];}
          });
        });
      }function r() {
        return window.module = { exports: {} }, Promise.resolve(function () {
          var e = window.module && window.module.exports;window.ts = window.ts || e, window.module = void 0;
        });
      }function l(t) {
        return E(this, void 0, void 0, function () {
          var s = this;return P(this, function () {
            return [2, new window.Promise(function (n) {
              return E(s, void 0, void 0, function () {
                var s = this;return P(this, function (a) {
                  switch (a.label) {case 0:
                      return [4, window.withAsync(r, function () {
                        return E(s, void 0, void 0, function () {
                          return P(this, function (t) {
                            switch (t.label) {case 0:
                                return [4, e.modules.Util.execFile('js/libraries/typescript.js')];case 1:
                                return t.sent(), [2];}
                          });
                        });
                      })];case 1:
                      return a.sent(), n(window.ts.transpile(t, { module: window.ts.ModuleKind.None, target: 0, noLib: !0, noResolve: !0, suppressOutputPathCheck: !0 })), [2];}
                });
              });
            })];
          });
        });
      }t.compileAllInTree = function () {
        return E(this, void 0, void 0, function () {
          return P(this, function (t) {
            switch (t.label) {case 0:
                return [4, a(e.modules.crm.crmTree)];case 1:
                return t.sent(), [2];}
          });
        });
      }, t.compileNode = s, t.compileLibrary = n, t.compileAllLibraries = function (e) {
        return E(this, void 0, void 0, function () {
          var t, s, a;return P(this, function (o) {
            switch (o.label) {case 0:
                t = 0, s = e, o.label = 1;case 1:
                return t < s.length ? (a = s[t], [4, n(a)]) : [3, 4];case 2:
                o.sent(), o.label = 3;case 3:
                return t++, [3, 1];case 4:
                return [2, e];}
          });
        });
      };
    })(t = e.TS || (e.TS = {}));
  }(_ || (_ = {})), function (e) {
    function t() {
      return E(this, void 0, void 0, function () {
        var t = this,
            s,
            n;return P(this, function (a) {
          switch (a.label) {case 0:
              return s = JSON.stringify(e.modules.storages.settingsStorage.crm), [4, e.modules.Util.crmForEachAsync(e.modules.storages.settingsStorage.crm, function (s) {
                return E(t, void 0, void 0, function () {
                  var t;return P(this, function (n) {
                    switch (n.label) {case 0:
                        return s.id || 0 === s.id ? [3, 2] : (t = s, [4, e.modules.Util.generateItemId()]);case 1:
                        t.id = n.sent(), n.label = 2;case 2:
                        return [2];}
                  });
                });
              })];case 1:
              return a.sent(), n = s === JSON.stringify(e.modules.storages.settingsStorage.crm), e.modules.crm.crmTree = e.modules.storages.settingsStorage.crm, e.modules.crm.safeTree = y(e.modules.storages.settingsStorage.crm), u(e.modules.crm.crmTree), m(), n ? [3, 3] : [4, e.modules.Storages.uploadChanges('settings', [{ key: 'crm', newValue: JSON.parse(JSON.stringify(e.modules.crm.crmTree)), oldValue: {} }])];case 2:
              a.sent(), a.label = 3;case 3:
              return [2];}
        });
      });
    }function s(e) {
      var t = {};if (e.children) {
        var n = t;n.children = [];for (var a = 0; a < e.children.length; a++) {
          n.children[a] = s(e.children[a]);
        }t = n;
      }var o = c(e, t);return o(['id', 'path', 'type', 'name', 'value', 'linkVal', 'menuVal', 'scriptVal', 'stylesheetVal', 'nodeInfo', 'triggers', 'onContentTypes', 'showOnSpecified']), t;
    }function n() {
      var e = window;if (e.chrome && e.chrome.runtime) {
        var t = e.chrome;t && t.runtime && t.runtime.lastError && window.log('Error recreating user contextmenu', t.runtime.lastError);
      } else browserAPI.runtime.lastError && window.log('Error recreating user contextmenu', browserAPI.runtime.lastError);
    }function a(t) {
      return E(this, void 0, void 0, function () {
        var s, o, r, l, i, d, c, u;return P(this, function (p) {
          switch (p.label) {case 0:
              s = e.modules.crmValues.userAddedContextMenusById, o = 0, r = t, p.label = 1;case 1:
              return o < r.length ? (l = r[o], i = l.children, d = l.createProperties, c = d.parentId, c && s.get(c) && (d.parentId = s.get(c).actualId), [4, browserAPI.contextMenus.create(d, n)]) : [3, 4];case 2:
              u = p.sent(), l.actualId = u, a(i), p.label = 3;case 3:
              return o++, [3, 1];case 4:
              return [2];}
        });
      });
    }function o() {
      return E(this, void 0, void 0, function () {
        return P(this, function () {
          return a(e.modules.crmValues.userAddedContextMenus), [2];
        });
      });
    }function r() {
      var t = this;return new Promise(function (s) {
        e.modules.crmValues.nodeTabStatuses = new window.Map(), browserAPI.contextMenus.removeAll().then(function () {
          return E(t, void 0, void 0, function () {
            var t = this,
                n,
                a;return P(this, function (r) {
              switch (r.label) {case 0:
                  return [4, e.modules.Util.lock(0)];case 1:
                  return n = r.sent(), a = e.modules.crmValues, [4, browserAPI.contextMenus.create({ title: e.modules.storages.settingsStorage.rootName || 'Custom Menu', contexts: ['all'] })];case 2:
                  return a.rootId = r.sent(), n(), e.modules.toExecuteNodes = { onUrl: { documentStart: [], documentEnd: [] }, always: { documentStart: [], documentEnd: [] } }, e.modules.Util.promiseChain(e.modules.crm.crmTree.map(function (t, s) {
                    return function () {
                      return new Promise(function (n) {
                        p(t, e.modules.crmValues.rootId, [s], e.modules.crmValues.contextMenuItemTree).then(function (a) {
                          a && (e.modules.crmValues.contextMenuItemTree[s] = { index: s, node: t, id: a.id, enabled: !0, parentId: e.modules.crmValues.rootId, children: a.children, parentTree: e.modules.crmValues.contextMenuItemTree }), n(null);
                        });
                      });
                    };
                  })).then(function () {
                    o().then(function () {
                      return E(t, void 0, void 0, function () {
                        var t, n, a, o, r, l, d, c;return P(this, function (u) {
                          switch (u.label) {case 0:
                              return e.modules.storages.storageLocal.showOptions ? (t = e.modules.crmValues.contextMenuItemTree, n = t.length, a = t, o = n, r = { index: n }, [4, browserAPI.contextMenus.create({ type: 'separator', parentId: e.modules.crmValues.rootId })]) : [3, 3];case 1:
                              return a[o] = (r.id = u.sent(), r.enabled = !0, r.node = null, r.parentId = e.modules.crmValues.rootId, r.children = [], r.parentTree = t, r), l = t, d = n + 1, c = { index: n + 1 }, [4, browserAPI.contextMenus.create({ title: 'Options', onclick: i(), parentId: e.modules.crmValues.rootId })];case 2:
                              l[d] = (c.id = u.sent(), c.enabled = !0, c.node = null, c.parentId = e.modules.crmValues.rootId, c.children = [], c.parentTree = t, c), u.label = 3;case 3:
                              return s(null), [2];}
                        });
                      });
                    });
                  }), [2];}
            });
          });
        });
      });
    }function l(t) {
      return E(this, void 0, void 0, function () {
        var s, n, a;return P(this, function (o) {
          switch (o.label) {case 0:
              return s = t.type, 'divider' === s ? [3, 1] : 'link' === s ? [3, 2] : 'menu' === s ? [3, 3] : 'script' === s ? [3, 4] : 'stylesheet' === s ? [3, 6] : [3, 7];case 1:
              return [2, [t.name, 'Divider', ''].join('%123')];case 2:
              return [2, [t.name, 'Link', t.value.map(function (e) {
                return e.url;
              }).join(',')].join('%123')];case 3:
              return [2, [t.name, 'Menu', t.children.length].join('%123')];case 4:
              return n = [t.name, 'Script'], a = [t.value.launchMode], [4, e.modules.Util.getScriptNodeScript(t)];case 5:
              return [2, n.concat([a.concat([o.sent()]).join('%124')]).join('%123')];case 6:
              return [2, [t.name, 'Script', [t.value.launchMode, t.value.stylesheet].join('%124')].join('%123')];case 7:
              return [2];}
        });
      });
    }function d(e, t) {
      for (var s = 0, n; s < e.length; s++) {
        n = e[s], t.arr.push(n), 'menu' === n.type && n.children && d(n.children, t);
      }return t;
    }function c(e, t) {
      return function (s) {
        s.forEach(function (s) {
          s in e && ('object' === babelHelpers['typeof'](e[s]) ? t[s] = JSON.parse(JSON.stringify(e[s])) : t[s] = e[s]);
        });
      };
    }function u(e, t) {
      void 0 === t && (t = []);for (var s = 0; s < e.length; s++) {
        var n = t.concat([s]),
            a = e[s];a.path = n, a.children && u(a.children, n);
      }
    }function i() {
      return function () {
        browserAPI.runtime.openOptionsPage();
      };
    }function p(t, s, n, a) {
      return E(this, void 0, void 0, function () {
        var o, r, l, d, i, c;return P(this, function (u) {
          switch (u.label) {case 0:
              return [4, e.NodeCreation.createNode(t, s)];case 1:
              if (o = u.sent(), e.modules.crmValues.contextMenuIds.set(t.id, o), null === o) return [3, 6];if (r = [], !t.children) return [3, 5];l = 0, d = 0, u.label = 2;case 2:
              return d < t.children.length ? (i = JSON.parse(JSON.stringify(n)), i.push(l), [4, p(t.children[d], o, i, r)]) : [3, 5];case 3:
              c = u.sent(), c && (l++, c.index = d, c.parentId = o, c.node = t.children[d], c.parentTree = a, r.push(c)), u.label = 4;case 4:
              return d++, [3, 2];case 5:
              return e.modules.crmValues.contextMenuInfoById.get(o).path = n, [2, { id: o, path: n, enabled: !0, children: r }];case 6:
              return [2, null];}
        });
      });
    }function g(t, n) {
      if (void 0 === n && (n = !1), n ? e.modules.crm.crmByIdSafe.set(t.id, s(t)) : e.modules.crm.crmById.set(t.id, t), t.children && 0 < t.children.length) for (var a = 0; a < t.children.length; a++) {
        g(t.children[a], n);
      }
    }function m() {
      e.modules.crm.crmById = new window.Map(), e.modules.crm.crmByIdSafe = new window.Map();for (var t = 0; t < e.modules.crm.crmTree.length; t++) {
        g(e.modules.crm.crmTree[t]), g(e.modules.crm.safeTree[t], !0);
      }
    }function h(e) {
      if (e.children) {
        for (var t = [], n = 0; n < e.children.length; n++) {
          t.push(h(e.children[n]));
        }e.children = t;
      }return s(e);
    }function y(e) {
      for (var t = JSON.parse(JSON.stringify(e)), s = [], n = 0; n < t.length; n++) {
        s.push(h(t[n]));
      }return s;
    }e.initModule = function (t) {
      e.modules = t;
    }, e.updateCrm = function (s) {
      return E(this, void 0, void 0, function () {
        var n;return P(this, function (a) {
          switch (a.label) {case 0:
              return [4, e.modules.Storages.uploadChanges('settings', [{ key: 'crm', newValue: JSON.parse(JSON.stringify(e.modules.crm.crmTree)), oldValue: {} }])];case 1:
              return a.sent(), e.TS.compileAllInTree(), [4, t()];case 2:
              return a.sent(), [4, r()];case 3:
              return a.sent(), [4, e.modules.MessageHandling.signalNewCRM()];case 4:
              return a.sent(), n = s, n ? [4, e.modules.Storages.checkBackgroundPagesForChange({ toUpdate: s })] : [3, 6];case 5:
              n = a.sent(), a.label = 6;case 6:
              return [2];}
        });
      });
    }, e.updateCRMValues = t, e.makeSafe = s, e.handleUserAddedContextMenuErrors = n, e.addUserAddedContextMenuItems = o, e.buildPageCRM = r, e.getContexts = function (t) {
      for (var s = ['browser_action'], n = e.modules.constants.contexts, a = 0; 6 > a; a++) {
        t[a] && s.push(n[a]);
      }return t[0] && s.push('editable'), s;
    }, e.converToLegacy = function () {
      return E(this, void 0, void 0, function () {
        var t, s, n, a, o;return P(this, function (r) {
          switch (r.label) {case 0:
              t = d(e.modules.crm.crmTree, { arr: [] }).arr, s = {}, n = 0, r.label = 1;case 1:
              return n < t.length ? (a = s, o = n, [4, l(t[n])]) : [3, 4];case 2:
              a[o] = r.sent(), r.label = 3;case 3:
              return n++, [3, 1];case 4:
              return s.customcolors = '0', s.firsttime = 'no', s.noBeatAnnouncement = 'true', s.numberofrows = t.length + '', s.optionson = e.modules.storages.storageLocal.showOptions.toString(), s.scriptoptions = '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0', s.waitforsearch = 'false', s.whatpage = 'false', s.indexIds = JSON.stringify(t.map(function (e) {
                return e.id;
              })), [2, s];}
        });
      });
    }, e.fixOptionsErrors = function (e) {
      if ('string' === typeof e) return e;for (var t in e) {
        var s = e[t];if ('choice' === s.type) {
          var n = s;('number' !== typeof n.selected || n.selected > n.values.length || 0 > n.selected) && (n.selected = 0);
        }e[t] = s;
      }return e;
    }, e.buildNodePaths = u, e.createOptionsPageHandler = i;
  }(_ || (_ = {}));var L;(function (e) {
    function t(e, t) {
      for (var s in e) {
        if (e[s] !== t[s]) return !1;
      }return !0;
    }function s(e) {
      switch ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) {case 'boolean':case 'number':case 'string':case 'function':case 'symbol':case 'undefined':
          return { encoding: 1, val: e };case 'object':
          return { encoding: 0, val: JSON.stringify(e) };}
    }function n(e) {
      return 0 === e.encoding ? JSON.parse(e.val) : e.val;
    }function a(e, s) {
      if (!r.has(e)) return { found: !1, result: null };for (var a = r.get(e), o = 0, l = a; o < l.length; o++) {
        var i = l[o],
            d = i.args,
            c = i.result;if (d.length === s.length && t(d, s)) return { found: !0, result: n(c) };
      }return { found: !1, result: null };
    }function o(e, t, n) {
      var a = e.apply(void 0, t.concat([!1])),
          o = { args: t, result: n ? s(a) : { encoding: 2, val: a } };if (r.has(e)) {
        var l = r.get(e);l.push(o);
      } else r.set(e, [o]);return a;
    }e.initModule = function (t) {
      e.modules = t;
    };var r = new window.WeakMap();e.cacheCall = function (e, t, s) {
      void 0 === s && (s = !0);var n = e.length - 1,
          r = Array.prototype.slice.apply(t),
          l = r.slice(0, n),
          i = a(e, l),
          d = i.found,
          c = i.result;return d ? c : o(e, l, s);
    };
  })(L || (L = {}));var A;(function (e) {
    e.init = function () {
      'undefined' === typeof location || 'undefined' === typeof location.host ? (window.log = function () {}, window.info = function () {}, window.testLog = console.log.bind(console), window.Promise = Promise) : (window.log = console.log.bind(console), window.info = window.location && window.location.hash && window.location.hash.indexOf('noBackgroundInfo') ? function () {} : console.log.bind(console));
    };
  })(A || (A = {}));var U = function U(e, t, s, n) {
    return new (s || (s = Promise))(function (a, o) {
      function r(e) {
        try {
          i(n.next(e));
        } catch (t) {
          o(t);
        }
      }function l(e) {
        try {
          i(n['throw'](e));
        } catch (t) {
          o(t);
        }
      }function i(e) {
        e.done ? a(e.value) : new s(function (t) {
          t(e.value);
        }).then(r, l);
      }i((n = n.apply(e, t || [])).next());
    });
  },
      R = function R(e, s) {
    function n(e) {
      return function (t) {
        return a([e, t]);
      };
    }function a(n) {
      if (r) throw new TypeError('Generator is already executing.');for (; o;) {
        try {
          if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
              i = n;break;case 4:
              return o.label++, { value: n[1], done: !1 };case 5:
              o.label++, l = n[1], n = [0];continue;case 7:
              n = o.ops.pop(), o.trys.pop();continue;default:
              if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
                o = 0;continue;
              }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                o.label = n[1];break;
              }if (6 === n[0] && o.label < i[1]) {
                o.label = i[1], i = n;break;
              }if (i && o.label < i[2]) {
                o.label = i[2], o.ops.push(n);break;
              }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
        } catch (t) {
          n = [6, t], l = 0;
        } finally {
          r = i = 0;
        }
      }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
    }var o = { label: 0, sent: function sent() {
        if (1 & i[0]) throw i[1];return i[1];
      }, trys: [], ops: [] },
        r,
        l,
        i,
        d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
      return this;
    }), d;
  },
      j;(function (e) {
    function t(e, n) {
      for (var a in e) {
        if (e.hasOwnProperty(a) && e[a] !== void 0) if ('object' === babelHelpers['typeof'](e[a])) {
          if ('object' !== babelHelpers['typeof'](n[a])) return !1;if (Array.isArray(e[a])) {
            if (!Array.isArray(n[a])) return !1;if (!s(e[a], n[a])) return !1;
          } else if (!t(e[a], n[a])) return !1;
        } else if (e[a] !== n[a]) return !1;
      }return !0;
    }function s(e, n) {
      if (!e && !n) return !1;if (!e || !n) return !0;var a = e.length;if (a !== n.length) return !1;for (var o = 0; o < a; o++) {
        if ('object' === babelHelpers['typeof'](e[o])) {
          if ('object' !== babelHelpers['typeof'](n[o])) return !1;if (Array.isArray(e[o])) {
            if (!Array.isArray(n[o])) return !1;if (!s(e[o], n[o])) return !1;
          } else if (!t(e[o], n[o])) return !1;
        } else if (e[o] !== n[o]) return !1;
      }return !0;
    }function n() {
      for (var e = [], t = 0; 25 > t; t++) {
        e[t] = m(100 * Math.random());
      }return h[e.join(',')] ? n() : (h[e.join(',')] = !0, e);
    }function a(e, t) {
      if (e.push(t), 'menu' === t.type && t.children) for (var s = 0, n = t.children, o; s < n.length; s++) {
        o = n[s], a(e, o);
      }
    }function o(e, t) {
      var s = !1;e.forEach(function (e, n) {
        s || t(n, e) && (s = !0);
      });
    }function r(e) {
      var t = [];return e.forEach(function (e, s) {
        t.push([s, e]);
      }), t;
    }function l(e, t, s) {
      return !e.has(t) && (e.set(t, s), !0);
    }function i(e, t) {
      return void 0 === t && (t = 'script'), 'background' === t ? e.value.backgroundScript : e.value.script;
    }function d(e) {
      var t = this;return new Promise(function (s) {
        return e[0] ? void e[0]().then(function (n) {
          return U(t, void 0, void 0, function () {
            return R(this, function (t) {
              switch (t.label) {case 0:
                  return e[1] ? [4, d(e.slice(1))] : [3, 2];case 1:
                  n = t.sent(), t.label = 2;case 2:
                  return s(n), [2];}
            });
          });
        }) : s(null);
      });
    }function c(e, t) {
      for (var s = 0, n = e, a; s < n.length; s++) {
        a = n[s], t(a) && c(a.children, t);
      }
    }function u(e) {
      return e && 'object' === ('undefined' === typeof e ? 'undefined' : babelHelpers['typeof'](e)) && 'function' === typeof e.then;
    }function p(e, t) {
      for (var s = 0, n = e, a; s < n.length; s++) {
        a = n[s], t(a), 'menu' === a.type && a.children && p(a.children, t);
      }
    }function g() {
      return 'chrome' === BrowserAPI.getBrowser() ? parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2], 10) : 1e3;
    }var m = Math.round;e.initModule = function (t) {
      e.modules = t;
    }, e.jsonFn = { stringify: function stringify(e) {
        return JSON.stringify(e, function (e, t) {
          return t instanceof Function || 'function' === typeof t ? t.toString() : t instanceof RegExp ? '_PxEgEr_' + t : t;
        });
      }, parse: function parse(e, t) {
        var s = !!t && /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;return JSON.parse(e, function (e, t) {
          if ('string' !== typeof t) return t;if (8 > t.length) return t;var n = t.substring(0, 8);return s && t.match(s) ? new Date(t) : 'function' === n ? new Function(t) : '_PxEgEr_' === n ? new RegExp(t.slice(8)) : t;
        });
      } }, e.compareArray = s, e.safe = function (t) {
      return e.modules.crm.crmByIdSafe.get(t.id);
    };var h = {};e.createSecretKey = n;var y = m(100 * Math.random());e.createUniqueNumber = function () {
      var e = m(100 * Math.random());return y += e, y;
    }, e.generateItemId = function () {
      return U(this, void 0, void 0, function () {
        return R(this, function (t) {
          switch (t.label) {case 0:
              return e.modules.globalObject.globals.latestId = e.modules.globalObject.globals.latestId || 0, e.modules.globalObject.globals.latestId++, e.modules.storages.settingsStorage ? [4, e.modules.Storages.applyChanges({ type: 'optionsPage', settingsChanges: [{ key: 'latestId', oldValue: e.modules.globalObject.globals.latestId - 1, newValue: e.modules.globalObject.globals.latestId }] })] : [3, 2];case 1:
              t.sent(), t.label = 2;case 2:
              return [2, e.modules.globalObject.globals.latestId];}
        });
      });
    }, e.getMultipleItemIds = function (t) {
      return U(this, void 0, void 0, function () {
        var s, n;return R(this, function (a) {
          switch (a.label) {case 0:
              for (e.modules.globalObject.globals.latestId = e.modules.globalObject.globals.latestId || 0, s = [], n = 0; n < t; n++) {
                e.modules.globalObject.globals.latestId++, s.push(e.modules.globalObject.globals.latestId);
              }return e.modules.storages.settingsStorage ? [4, e.modules.Storages.applyChanges({ type: 'optionsPage', settingsChanges: [{ key: 'latestId', oldValue: e.modules.globalObject.globals.latestId - t, newValue: e.modules.globalObject.globals.latestId }] })] : [3, 2];case 1:
              a.sent(), a.label = 2;case 2:
              return [2, s];}
        });
      });
    }, e.convertFileToDataURI = function (e, t, s) {
      var n = new window.XMLHttpRequest();n.responseType = 'blob', n.onload = function () {
        var e = [null, null],
            s = new FileReader();s.onloadend = function () {
          e[0] = s.result, e[1] && t(e[0], e[1]);
        }, s.readAsDataURL(n.response);var a = new FileReader();a.onloadend = function () {
          e[1] = a.result, e[0] && t(e[0], e[1]);
        }, a.readAsText(n.response);
      }, s && (n.onerror = s), n.open('GET', e), n.send();
    }, e.isNewer = function (e, t) {
      for (var s = e.split('.'), n = t.split('.'), a = Math.max(s.length, n.length), o = 0; o < a; o++) {
        var r = ~~s[o],
            l = ~~n[o];if (r > l) return !0;if (r < l) return !1;
      }return !1;
    }, e.pushIntoArray = function (e, t, s) {
      if (t === s.length) s[t] = e;else for (var n = s.length + 1, a = s[t], o = e, r = t; r < n; r++) {
        s[r] = o, o = a, a = s[r + 1];
      }return s;
    }, e.flattenCrm = a, e.iterateMap = o, e.mapToArr = r, e.asyncIterateMap = function (e, t) {
      return U(this, void 0, void 0, function () {
        var s, n, a, o, l;return R(this, function (i) {
          switch (i.label) {case 0:
              s = 0, n = r(e), i.label = 1;case 1:
              return s < n.length ? (a = n[s], o = a[0], l = a[1], [4, t(o, l)]) : [3, 4];case 2:
              if (i.sent()) return [2];i.label = 3;case 3:
              return s++, [3, 1];case 4:
              return [2];}
        });
      });
    }, e.setMapDefault = l, e.accessPath = function (e, t, s, n, a, o) {
      var r = e[t];if (r) {
        if (!s) return r;var l = r[s];if (l) {
          if (!n) return l;var i = l[n];if (i) {
            if (!a) return i;var d = i[a];if (d) {
              if (!o) return d;var c = d[o];return c ? c : void 0;
            }
          }
        }
      }
    }, e.toMap = function (e) {
      return new window.Map(Object.getOwnPropertyNames(e).map(function (t) {
        return [t, e[t]];
      }));
    }, e.fromMap = function (e) {
      var t = {};return e.forEach(function (e, s) {
        t[s] = e;
      }), t;
    }, e.toArray = function (e) {
      return Object.getOwnPropertyNames(e).map(function (t) {
        return [t, e[t]];
      });
    }, e.removeTab = function (t) {
      var s = e.modules.crmValues.nodeTabStatuses;o(s, function (e, s) {
        var n = s.tabs;n.has(t) && n['delete'](t);
      }), e.modules.crmValues.tabData['delete'](t);
    }, e.leftPad = function (e, t) {
      for (var s = '', n = 0; n < t; n++) {
        s += e;
      }return s;
    }, e.getLastItem = function (e) {
      return e[e.length - 1];
    }, e.endsWith = function (e, t) {
      return 0 === e.split('').reverse().join('').indexOf(t.split('').reverse().join(''));
    }, e.isTamperMonkeyEnabled = function () {
      return U(this, void 0, void 0, function () {
        return R(this, function () {
          return [2, new Promise(function (t) {
            window.chrome && window.chrome.management ? window.chrome.management.getAll(function (s) {
              var n = s.filter(function (t) {
                return -1 < e.modules.constants.tamperMonkeyExtensions.indexOf(t.id) && t.enabled;
              });t(0 < n.length);
            }) : t(!1);
          })];
        });
      });
    }, e.isStylishInstalled = function () {
      return U(this, void 0, void 0, function () {
        return R(this, function () {
          return [2, new Promise(function (t) {
            window.chrome && window.chrome.management ? window.chrome.management.getAll(function (s) {
              var n = s.filter(function (t) {
                return -1 < e.modules.constants.stylishExtensions.indexOf(t.id) && t.enabled;
              });t(0 < n.length);
            }) : t(!1);
          })];
        });
      });
    };var f = [];e.execFile = function (e, t) {
      return U(this, void 0, void 0, function () {
        var s;return R(this, function (n) {
          switch (n.label) {case 0:
              return -1 < f.indexOf(e) ? [2] : (s = document.createElement('script'), s.src = browserAPI.runtime.getURL(e), document.body.appendChild(s), f.push(e), t ? [4, window.onExists(t, window)] : [3, 2]);case 1:
              n.sent(), n.label = 2;case 2:
              return [2];}
        });
      });
    }, e.getScriptNodeJS = i, e.getScriptNodeScript = function (t, s) {
      return void 0 === s && (s = 'script'), U(this, void 0, void 0, function () {
        return R(this, function (n) {
          switch (n.label) {case 0:
              return t.value.ts && t.value.ts.enabled ? [4, e.modules.CRMNodes.TS.compileNode(t)] : [3, 2];case 1:
              return n.sent(), [2, 'background' === s ? t.value.ts.backgroundScript.compiled : t.value.ts.script.compiled];case 2:
              return [2, i(t, s)];}
        });
      });
    }, e.getLibraryCode = function (t) {
      return U(this, void 0, void 0, function () {
        var s;return R(this, function (n) {
          switch (n.label) {case 0:
              return t.ts && t.ts.enabled ? t.ts.code ? [2, t.ts.code.compiled] : [4, e.modules.CRMNodes.TS.compileLibrary(t)] : [3, 3];case 1:
              return [4, n.sent()];case 2:
              return s = n.sent().ts, [2, s.code.compiled];case 3:
              return [2, t.code];}
        });
      });
    };var b;e.canRunOnUrl = function (t) {
      return !t || e.modules.CRMNodes.Running.urlIsGlobalExcluded(t) || -1 !== t.indexOf('chrome://') || -1 !== t.indexOf('chrome-extension://') || -1 !== t.indexOf('about://') || -1 !== t.indexOf('chrome-devtools://') || -1 !== t.indexOf('view-source:') || -1 < t.indexOf('://chrome.google') && -1 < t.indexOf('/webstore') ? !1 : !!b || -1 === t.indexOf('file://');
    }, e.xhr = function (e, t) {
      return void 0 === t && (t = []), U(this, void 0, void 0, function () {
        return R(this, function () {
          return [2, new Promise(function (s, n) {
            var a = new window.XMLHttpRequest();a.open('GET', e), a.onreadystatechange = function () {
              a.readyState === window.XMLHttpRequest.LOADING && 0 < t.length && window.info.apply(console, t), a.readyState === window.XMLHttpRequest.DONE && (200 <= a.status && 300 > a.status ? s(a.responseText) : n(new Error('Failed XHR')));
            }, a.send();
          })];
        });
      });
    }, e.wait = function (e) {
      return new Promise(function (t) {
        window.setTimeout(function () {
          t(null);
        }, e);
      });
    }, e.iipe = function (e) {
      return e();
    }, e.createArray = function (e) {
      for (var t = [], s = 0; s < e; s++) {
        t[s] = void 0;
      }return t;
    }, e.promiseChain = d, e.postMessage = function (e, t) {
      e.postMessage(t);
    }, e.climbTree = c, e.isThennable = u, e.filter = function (e, t) {
      return U(this, void 0, void 0, function () {
        var s, n;return R(this, function (a) {
          switch (a.label) {case 0:
              s = 0, a.label = 1;case 1:
              return s < e.length ? (n = t(e[s]), u(n) ? [4, n] : [3, 3]) : [3, 5];case 2:
              n = a.sent(), a.label = 3;case 3:
              n || e.splice(s, 1), a.label = 4;case 4:
              return s++, [3, 1];case 5:
              return [2];}
        });
      });
    }, e.crmForEach = p, e.crmForEachAsync = function (e, t) {
      return U(this, void 0, void 0, function () {
        var s, n, a;return R(this, function (o) {
          switch (o.label) {case 0:
              s = 0, n = e, o.label = 1;case 1:
              return s < n.length ? (a = n[s], [4, t(a)]) : [3, 5];case 2:
              return o.sent(), 'menu' === a.type && a.children ? [4, p(a.children, t)] : [3, 4];case 3:
              o.sent(), o.label = 4;case 4:
              return s++, [3, 1];case 5:
              return [2];}
        });
      });
    }, e.getChromeVersion = g, e.applyContextmenuOverride = function (e, t) {
      t = t || {}, e = e || {};var s = t.type,
          n = t.checked,
          a = t.contentTypes,
          o = t.isVisible,
          r = t.isDisabled,
          l = t.name;return s && (e.type = s), 'boolean' === typeof n && (e.checked = n), a && (e.contexts = a), 'boolean' === typeof o && 'chrome' === BrowserAPI.getBrowser() && 62 <= g() && (e.visible = o), 'boolean' === typeof r && (e.enabled = !r), l && (e.title = l), e;
    };var x = new window.Map();e.lock = function (e) {
      l(x, e, Promise.resolve(null));var t = x.get(e),
          s = new Promise(function (e) {
        a = function a() {
          e(null);
        };
      }),
          n = new Promise(function (e) {
        s.then(function () {
          e(null);
        });
      }),
          a;return x.set(e, n), new Promise(function (e) {
        t.then(function () {
          e(a);
        });
      });
    };
  })(j || (j = {}));var O = Object.assign || function (e) {
    for (var t = 1, a = arguments.length, n; t < a; t++) {
      for (var s in n = arguments[t], n) {
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
      }
    }return e;
  },
      D = function D(e, t, s, n) {
    return new (s || (s = Promise))(function (a, o) {
      function r(e) {
        try {
          i(n.next(e));
        } catch (t) {
          o(t);
        }
      }function l(e) {
        try {
          i(n['throw'](e));
        } catch (t) {
          o(t);
        }
      }function i(e) {
        e.done ? a(e.value) : new s(function (t) {
          t(e.value);
        }).then(r, l);
      }i((n = n.apply(e, t || [])).next());
    });
  },
      V = function V(e, s) {
    function n(e) {
      return function (t) {
        return a([e, t]);
      };
    }function a(n) {
      if (r) throw new TypeError('Generator is already executing.');for (; o;) {
        try {
          if (r = 1, l && (i = l[2 & n[0] ? 'return' : n[0] ? 'throw' : 'next']) && !(i = i.call(l, n[1])).done) return i;switch ((l = 0, i) && (n = [0, i.value]), n[0]) {case 0:case 1:
              i = n;break;case 4:
              return o.label++, { value: n[1], done: !1 };case 5:
              o.label++, l = n[1], n = [0];continue;case 7:
              n = o.ops.pop(), o.trys.pop();continue;default:
              if ((i = o.trys, !(i = 0 < i.length && i[i.length - 1])) && (6 === n[0] || 2 === n[0])) {
                o = 0;continue;
              }if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                o.label = n[1];break;
              }if (6 === n[0] && o.label < i[1]) {
                o.label = i[1], i = n;break;
              }if (i && o.label < i[2]) {
                o.label = i[2], o.ops.push(n);break;
              }i[2] && o.ops.pop(), o.trys.pop();continue;}n = s.call(e, o);
        } catch (t) {
          n = [6, t], l = 0;
        } finally {
          r = i = 0;
        }
      }if (5 & n[0]) throw n[1];return { value: n[0] ? n[1] : void 0, done: !0 };
    }var o = { label: 0, sent: function sent() {
        if (1 & i[0]) throw i[1];return i[1];
      }, trys: [], ops: [] },
        r,
        l,
        i,
        d;return d = { next: n(0), "throw": n(1), "return": n(2) }, 'function' === typeof Symbol && (d[Symbol.iterator] = function () {
      return this;
    }), d;
  },
      F;(function (e) {
    function t(e) {
      m = e;
    }function n() {
      return 'undefined' === typeof location || 'undefined' === typeof location.host;
    }function a() {
      return D(this, void 0, void 0, function () {
        var e, t, s, a, o, r, l, i, d, c;return V(this, function (u) {
          switch (u.label) {case 0:
              return [4, browserAPI.runtime.getManifest()];case 1:
              return e = -1 < u.sent().short_name.indexOf('dev'), t = n() || e ? window : {}, s = w.globals, t.globals = s, a = s.crm, o = s.storages, r = s.crmValues, l = s.constants, i = s.listeners, d = s.background, c = s.toExecuteNodes, [2, { crm: a, storages: o, crmValues: r, constants: l, listeners: i, background: d, toExecuteNodes: c, globalObject: t }];}
        });
      });
    }function r() {
      return { APIMessaging: g, BrowserHandler: p, Caches: L, CRMNodes: _, CRMAPICall: y, CRMAPIFunctions: i, GlobalDeclarations: s, Logging: C, MessageHandling: o, Resources: b, Sandbox: T, Storages: I, URLParsing: f, Util: j };
    }function l() {
      return D(this, void 0, void 0, function () {
        var e;return V(this, function (t) {
          switch (t.label) {case 0:
              return e = [{}], [4, a()];case 1:
              return [2, O.apply(void 0, e.concat([t.sent(), r()]))];}
        });
      });
    }function d() {
      return D(this, void 0, void 0, function () {
        var e;return V(this, function (n) {
          switch (n.label) {case 0:
              return [4, l()];case 1:
              return e = n.sent(), g.initModule(e), p.initModule(e), L.initModule(e), _.initModule(e), y.initModule(e), i.initModule(null, e), w.initModule(e), s.initModule(e), C.initModule(e), o.initModule(e), b.initModule(e), I.initModule(e), f.initModule(e), j.initModule(e), t(e), [2];}
        });
      });
    }function c() {
      return D(this, void 0, void 0, function () {
        var e = this;return V(this, function (t) {
          switch (t.label) {case 0:
              return A.init(), window.console.group('Initialization'), window.console.group('Loading storage data'), m.globalObject.backgroundPageLoaded = j.iipe(function () {
                return D(e, void 0, void 0, function () {
                  var e = this,
                      t,
                      a,
                      t;return V(this, function (r) {
                    switch (r.label) {case 0:
                        return [4, I.loadStorages()];case 1:
                        r.sent(), window.console.groupEnd(), r.label = 2;case 2:
                        return r.trys.push([2, 8,, 9]), m.globalObject.globals.latestId = m.storages.settingsStorage.latestId, window.info('Registering permission listeners'), [4, s.refreshPermissions()];case 3:
                        return r.sent(), window.info('Setting CRMAPI message handler'), s.setHandlerFunction(), browserAPI.runtime.onConnect.addListener(function (e) {
                          e.onMessage.addListener(window.createHandlerFunction(e));
                        }), browserAPI.runtime.onMessage.addListener(o.handleRuntimeMessageInitial), window.info('Building Custom Right-Click Menu'), [4, _.buildPageCRM()];case 4:
                        return r.sent(), window.info('Compiling typescript'), [4, _.TS.compileAllInTree()];case 5:
                        return r.sent(), window.console.groupCollapsed('Restoring previous open tabs'), [4, s.restoreOpenTabs()];case 6:
                        return r.sent(), window.console.groupEnd(), window.console.groupCollapsed('Creating backgroundpages'), [4, _.Script.Background.createBackgroundPages()];case 7:
                        for (r.sent(), window.console.groupEnd(), window.info('Registering global handlers'), s.init(), window.console.group('Checking Resources'), window.info('Updating resources'), b.updateResourceValues(), window.info('Updating scripts and stylesheets'), function () {
                          return D(e, void 0, void 0, function () {
                            return V(this, function (e) {
                              switch (e.label) {case 0:
                                  return [4, _.Script.Updating.updateScripts()];case 1:
                                  return e.sent(), [4, _.Stylesheet.Updating.updateStylesheets()];case 2:
                                  return e.sent(), [2];}
                            });
                          });
                        }(), window.setInterval(function () {
                          (function () {
                            return D(e, void 0, void 0, function () {
                              return V(this, function (e) {
                                switch (e.label) {case 0:
                                    return window.info('Updating scripts and stylesheets'), [4, _.Script.Updating.updateScripts()];case 1:
                                    return e.sent(), [4, _.Stylesheet.Updating.updateStylesheets()];case 2:
                                    return e.sent(), [2];}
                              });
                            });
                          })();
                        }, 21600000), window.console.groupEnd(), window.console.groupCollapsed('Debugging'), window.info('For all of these arrays goes, close and re-expand them to "refresh" their contents'), window.info('Invalidated tabs:', m.storages.failedLookups), window.info('Insufficient permissions:', m.storages.insufficientPermissions), window.console.groupEnd(), window.info('Registering console user interface'), s.initGlobalFunctions(), -1 < location.href.indexOf('test') && (m.globalObject.Storages = I), n() && (m.globalObject.TransferFromOld = I.SetupHandling.TransferFromOld), t = 0; 5 > t; t++) {
                          window.console.groupEnd();
                        }return window.info('Done!'), n() || (window.log(''), window.log('If you\'re here to check out your background script, get its ID (you can type getID("name") to find the ID), and type filter(id, [optional tabId]) to show only those messages. You can also visit the logging page for even better logging over at ', browserAPI.runtime.getURL('html/logging.html')), window.log('You can also use the debugger for scripts by calling window.debugNextScriptCall(id) and window.debugBackgroundScript(id) for scripts and backgroundscripts respectively. You can get the id by using the getID("name") function.')), [3, 9];case 8:
                        for (a = r.sent(), t = 0; 10 > t; t++) {
                          window.console.groupEnd();
                        }throw window.log(a), window.console.trace(), a;case 9:
                        return [2];}
                  });
                });
              }), [4, m.globalObject.backgroundPageLoaded];case 1:
              return t.sent(), [2];}
        });
      });
    }function u() {
      window.logging = m.globalObject.globals.logging, window.backgroundPageLog = m.Logging.backgroundPageLog;
    }var m;e.init = function () {
      return D(this, void 0, void 0, function () {
        return V(this, function (e) {
          switch (e.label) {case 0:
              return [4, d()];case 1:
              return e.sent(), [4, c()];case 2:
              return e.sent(), u(), [2];}
        });
      });
    };
  })(F || (F = {})), function () {
    F.init();
  }();
}();