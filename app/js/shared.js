var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
(function () {
    if (window.onExists) {
        return;
    }
    function isUndefined(val) {
        return typeof val === 'undefined' || val === null;
    }
    var RoughPromise = (function () {
        function RoughPromise(initializer) {
            var _this = this;
            this._val = null;
            this._state = 'pending';
            this._done = false;
            this._resolveListeners = [];
            this._rejectListeners = [];
            initializer(function (val) {
                if (_this._done) {
                    return;
                }
                _this._done = true;
                _this._val = val;
                _this._state = 'resolved';
                _this._resolveListeners.forEach(function (listener) {
                    listener(val);
                });
            }, function (err) {
                if (_this._done) {
                    return;
                }
                _this._done = true;
                _this._val = err;
                _this._state = 'rejected';
                _this._rejectListeners.forEach(function (listener) {
                    listener(err);
                });
            });
        }
        RoughPromise.prototype.then = function (onfulfilled, onrejected) {
            if (!onfulfilled) {
                return this;
            }
            if (this._done && this._state === 'resolved') {
                onfulfilled(this._val);
            }
            else {
                this._resolveListeners.push(onfulfilled);
            }
            if (!onrejected) {
                return this;
            }
            if (this._done && this._state === 'rejected') {
                onrejected(this._val);
            }
            else {
                this._rejectListeners.push(onrejected);
            }
            return this;
        };
        RoughPromise.chain = function (initializers) {
            return new RoughPromise(function (resolve) {
                if (!initializers[0]) {
                    resolve(null);
                    return;
                }
                initializers[0]().then(function (result) {
                    if (initializers[1]) {
                        RoughPromise.chain(initializers.slice(1)).then(function (result) {
                            resolve(result);
                        });
                    }
                    else {
                        resolve(result);
                    }
                });
            });
        };
        return RoughPromise;
    }());
    window.onExists = function (key, container) {
        if (!container) {
            container = window;
        }
        var prom = (window.Promise || RoughPromise);
        return new prom(function (resolve) {
            if (key in container && !isUndefined(container[key])) {
                resolve(container[key]);
                return;
            }
            var interval = window.setInterval(function () {
                if (key in container && !isUndefined(container[key])) {
                    window.clearInterval(interval);
                    resolve(container[key]);
                }
            }, 50);
        });
    };
    var objectify = function (fn) {
        var obj = {};
        Object.getOwnPropertyNames(fn).forEach(function (key) {
            obj[key] = fn[key];
        });
        return obj;
    };
    var register = function (fn) {
        var objectified = objectify(fn);
        var prevReady = objectified.ready;
        window.Polymer(__assign({}, objectified, {
            ready: function () {
                this.classList.add("browser-" + BrowserAPI.getBrowser());
                if (prevReady && typeof prevReady === 'function') {
                    prevReady.apply(this, []);
                }
            }
        }));
    };
    window.withAsync = function (initializer, fn) { return __awaiter(_this, void 0, void 0, function () {
        var toRun, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, initializer()];
                case 1:
                    toRun = _a.sent();
                    return [4, fn()];
                case 2:
                    res = _a.sent();
                    return [4, toRun()];
                case 3:
                    _a.sent();
                    return [2, res];
            }
        });
    }); };
    window["with"] = function (initializer, fn) {
        var toRun = initializer();
        var res = fn();
        toRun();
        return res;
    };
    function propertyPersists(property, value) {
        var dummyEl = document.createElement('div');
        dummyEl.style[property] = value;
        return dummyEl.style[property] === value;
    }
    var _supportsFlexUnprefixed = null;
    var _supportsTransformUnprefixed = window.getComputedStyle &&
        'transform' in window.getComputedStyle(document.documentElement, '');
    window.setDisplayFlex = function (el) {
        if (_supportsFlexUnprefixed === null) {
            _supportsFlexUnprefixed =
                propertyPersists('display', 'flex');
        }
        if (_supportsFlexUnprefixed) {
            el.style.display = 'flex';
        }
        else {
            el.style.display = '-webkit-flex';
        }
    };
    window.setTransform = function (el, value) {
        if (_supportsTransformUnprefixed) {
            el.style.transform = value;
        }
        else {
            el.style.WebkitTransform = value;
        }
    };
    function createAnimation(from, to, doAnimation) {
        var currentAnimation = null;
        var retVal = {
            onfinish: null,
            oncancel: null,
            cancel: function () {
                currentAnimation && currentAnimation.cancel();
                this.oncancel && this.oncancel.apply(this, {
                    currentTime: Date.now(),
                    timelineTime: null
                });
            },
            play: function () {
                var _this = this;
                currentAnimation && currentAnimation.cancel();
                currentAnimation = doAnimation(from, to, function () {
                    _this.onfinish && _this.onfinish.apply(_this, {
                        currentTime: Date.now(),
                        timelineTime: null
                    });
                });
            },
            reverse: function () {
                var _this = this;
                currentAnimation && currentAnimation.cancel();
                currentAnimation = doAnimation(to, from, function () {
                    _this.onfinish && _this.onfinish.apply(_this, {
                        currentTime: Date.now(),
                        timelineTime: null
                    });
                });
            },
            pause: function () { },
            finish: function () { },
            currentTime: 0,
            effect: {
                timing: 0,
                getComputedTiming: function () {
                    return {
                        endTime: 0,
                        activeDuration: 0,
                        currentIteration: 0,
                        localTime: 0,
                        progress: null
                    };
                }
            },
            finished: Promise.resolve(retVal),
            pending: false,
            startTime: Date.now(),
            id: '',
            ready: Promise.resolve(retVal),
            playState: 'finished',
            playbackRate: 1.0,
            timeline: {
                currentTime: Date.now()
            }
        };
        doAnimation(from, to, function () {
            retVal.onfinish && retVal.onfinish.apply(retVal, {
                currentTime: Date.now(),
                timelineTime: null
            });
        });
        return retVal;
    }
    window.animateTransform = function (el, properties, options) {
        var from = properties.from, propName = properties.propName, to = properties.to, postfix = properties.postfix;
        if (_supportsTransformUnprefixed && !el.__isAnimationJqueryPolyfill) {
            return el.animate([{
                    transform: propName + "(" + from + postfix + ")"
                }, {
                    transform: propName + "(" + to + postfix + ")"
                }], options);
        }
        else {
            var diff = to - from;
            var diffPercentage_1 = diff / 100;
            el.style.WebkitTransform = propName + "(" + from + postfix + ")";
            var dummy_1 = document.createElement('div');
            return createAnimation('0px', '100px', function (fromDummy, toDummy, done) {
                dummy_1.style.height = fromDummy;
                $(dummy_1).animate({
                    height: toDummy
                }, {
                    duration: options.duration || 500,
                    step: function (now) {
                        var progress = from + (diffPercentage_1 * now);
                        el.style.WebkitTransform = propName + "(" + progress + postfix + ")";
                    },
                    complete: function () {
                        el.style.WebkitTransform = propName + "(" + toDummy + postfix + ")";
                        done();
                    }
                });
                return {
                    cancel: function () {
                        $(dummy_1).stop();
                    }
                };
            });
        }
    };
    if (typeof Event !== 'undefined' && location.href.indexOf('background.html') === -1) {
        window.onExists('Promise').then(function () {
            window.onExists('Polymer').then(function () {
                window.objectify = objectify;
                window.register = register;
                var event = new Event('RegisterReady');
                window.dispatchEvent(event);
            });
        });
    }
    window.onExistsChain = function (container, key1, key2, key3, key4, key5) {
        var prom = (window.Promise || RoughPromise);
        return new prom(function (resolve) {
            var state = container;
            var keys = [key1, key2, key3, key4, key5];
            RoughPromise.chain(keys.filter(function (key) { return !!key; }).map(function (key) {
                return function () {
                    return new prom(function (resolveInner) {
                        window.onExists(key, state).then(function (result) {
                            state = result;
                            resolveInner(result);
                        });
                    });
                };
            })).then(function (finalResult) {
                resolve(finalResult);
            });
        });
    };
})();
