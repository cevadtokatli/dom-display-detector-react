/*!
 * DOM Display Detector React
 * version: 1.0.0
 *  author: Cevad Tokatli <cevadtokatli@hotmail.com>
 * website: http://cevadtokatli.com
 *  github: https://github.com/cevadtokatli/dom-display-detector-react
 * license: MIT
*/

'use strict';

var reactDom = require('react-dom');

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

var n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    z = n ? Symbol.for("react.suspense") : 60113,
    A = n ? Symbol.for("react.memo") : 60115,
    B = n ? Symbol.for("react.lazy") : 60116,
    C = "function" === typeof Symbol && Symbol.iterator;

function aa(a, b, e, c, d, g, h, f) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [e, c, d, g, h, f],
          m = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[m++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function D(a) {
  for (var b = arguments.length - 1, e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
    e += "&args[]=" + encodeURIComponent(arguments[c + 1]);
  }

  aa(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
}

var E = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    F = {};

function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = F;
  this.updater = e || E;
}

G.prototype.isReactComponent = {};

G.prototype.setState = function (a, b) {
  "object" !== _typeof(a) && "function" !== typeof a && null != a ? D("85") : void 0;
  this.updater.enqueueSetState(this, a, b, "setState");
};

G.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function H() {}

H.prototype = G.prototype;

function I(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = F;
  this.updater = e || E;
}

var J = I.prototype = new H();
J.constructor = I;
objectAssign(J, G.prototype);
J.isPureReactComponent = !0;
var K = {
  current: null,
  currentDispatcher: null
},
    L = Object.prototype.hasOwnProperty,
    M = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function N(a, b, e) {
  var c = void 0,
      d = {},
      g = null,
      h = null;
  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = b[c]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) {
      l[m] = arguments[m + 2];
    }

    d.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === d[c] && (d[c] = f[c]);
  }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: h,
    props: d,
    _owner: K.current
  };
}

function ba(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, e, c) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = e;
    d.context = c;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: e,
    context: c,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, e, c) {
  var d = _typeof(a);

  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return e(c, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    d = a[h];
    var f = b + U(d, h);
    g += T(d, f, e, c);
  } else if (null === a || "object" !== _typeof(a) ? f = null : (f = C && a[C] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done;) {
    d = d.value, f = b + U(d, h++), g += T(d, f, e, c);
  } else "object" === d && (e = "" + a, D("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));
  return g;
}

function V(a, b, e) {
  return null == a ? 0 : T(a, "", b, e);
}

function U(a, b) {
  return "object" === _typeof(a) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ca(a, b) {
  a.func.call(a.context, b, a.count++);
}

function da(a, b, e) {
  var c = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? W(a, c, e, function (a) {
    return a;
  }) : null != a && (O(a) && (a = ba(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + e)), c.push(a));
}

function W(a, b, e, c, d) {
  var g = "";
  null != e && (g = ("" + e).replace(P, "$&/") + "/");
  b = R(b, g, c, d);
  V(a, da, b);
  S(b);
}

var X = {
  Children: {
    map: function map(a, b, e) {
      if (null == a) return a;
      var c = [];
      W(a, c, null, b, e);
      return c;
    },
    forEach: function forEach(a, b, e) {
      if (null == a) return a;
      b = R(null, null, b, e);
      V(a, ca, b);
      S(b);
    },
    count: function count(a) {
      return V(a, function () {
        return null;
      }, null);
    },
    toArray: function toArray(a) {
      var b = [];
      W(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function only(a) {
      O(a) ? void 0 : D("143");
      return a;
    }
  },
  createRef: function createRef() {
    return {
      current: null
    };
  },
  Component: G,
  PureComponent: I,
  createContext: function createContext(a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function forwardRef(a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function lazy(a) {
    return {
      $$typeof: B,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function memo(a, b) {
    return {
      $$typeof: A,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  Fragment: r,
  StrictMode: t,
  Suspense: z,
  createElement: N,
  cloneElement: function cloneElement(a, b, e) {
    null === a || void 0 === a ? D("267", a) : void 0;
    var c = void 0,
        d = objectAssign({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = K.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) {
        L.call(b, c) && !M.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
      }
    }

    c = arguments.length - 2;
    if (1 === c) d.children = e;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) {
        l[m] = arguments[m + 2];
      }

      d.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: h,
      props: d,
      _owner: f
    };
  },
  createFactory: function createFactory(a) {
    var b = N.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: O,
  version: "16.7.0",
  unstable_ConcurrentMode: x,
  unstable_Profiler: u,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: K,
    assign: objectAssign
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
var react_production_min = Z.default || Z;

var react = createCommonjsModule(function (module) {

  {
    module.exports = react_production_min;
  }
});
var react_1 = react.Children;
var react_2 = react.Component;
var react_3 = react.PropTypes;
var react_4 = react.createElement;
var react_5 = react.cloneElement;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };
  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

var domDisplayDetector_min = createCommonjsModule(function (module, exports) {
  /*!
   *   DOM Display Detector
   *   version: 1.0.3
   *    author: Cevad Tokatli <cevadtokatli@hotmail.com>
   *   website: http://cevadtokatli.com
   *    github: https://github.com/cevadtokatli/dom-display-detector
   *   license: MIT
   */
  (function (global, factory) {
    factory(exports);
  })(commonjsGlobal, function (exports) {

    var classCallCheck = function classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var elements = [],
        _init = false;

    var DOMDisplayDetector = function () {
      function DOMDisplayDetector() {
        classCallCheck(this, DOMDisplayDetector);
      }

      createClass(DOMDisplayDetector, null, [{
        key: "init",
        value: function init() {
          if (!window) {
            throw new Error("DOM Display Detector needs a window");
          }

          _init = true;
          window.addEventListener("resize", this.detect, true);
          window.addEventListener("scroll", this.detect, true);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          _init = false;
          window.removeEventListener("resize", this.detect);
          window.removeEventListener("scroll", this.detect);
        }
      }, {
        key: "bind",
        value: function bind(elm, appearCallback, disCallback) {
          var _this = this;

          var elms = this.getElement(elm);
          elms.forEach(function (e) {
            _this.bindElement(e, appearCallback, disCallback, false);
          });
        }
      }, {
        key: "bindOnce",
        value: function bindOnce(elm, appearCallback, disCallback) {
          var _this2 = this;

          var elms = this.getElement(elm);
          elms.forEach(function (e) {
            _this2.bindElement(e, appearCallback, disCallback, true);
          });
        }
      }, {
        key: "unbind",
        value: function unbind(elm) {
          var elms = this.getElement(elm);
          elements = elements.filter(function (e) {
            if (elms.indexOf(e.elm) > -1 && !e.bindOnce) {
              e.elm.scrollAnimationBound = false;
              return false;
            }

            return true;
          });

          if (_init && elements.length == 0) {
            this.destroy();
          }
        }
      }, {
        key: "bindElement",
        value: function bindElement(elm, appearCallback, disCallback, bindOnce) {
          var _this3 = this;

          if (!elm.scrollAnimationBound) {
            var display = window.getComputedStyle(elm, null).getPropertyValue("display");

            if (display == "none" || elm.offsetWidth != 0 || elm.offsetHeight != 0) {
              elm.scrollAnimationBound = true;
              var e = {
                elm: elm,
                appearCallback: appearCallback,
                disCallback: disCallback,
                seen: false,
                bindOnce: bindOnce
              };
              elements.push(e);
              var w = this.getWindowPosition();
              this.isSeen(e, w);

              if (!_init) {
                this.init();
              }
            } else {
              setTimeout(function () {
                _this3.bindElement(elm, appearCallback, disCallback, bindOnce);
              }, 100);
            }
          }
        }
      }, {
        key: "getElement",
        value: function getElement(elm) {
          if (typeof elm == "string") {
            return Array.prototype.map.call(document.querySelectorAll(elm), function (t) {
              return t;
            });
          } else {
            return [elm];
          }
        }
      }, {
        key: "detect",
        value: function detect() {
          var _this4 = this;

          var w = this.getWindowPosition();
          elements.forEach(function (e) {
            _this4.isSeen(e, w);
          });
        }
      }, {
        key: "isSeen",
        value: function isSeen(e, w) {
          var elm = e.elm,
              offset = this.getOffset(elm),
              width = elm.offsetWidth,
              height = elm.offsetHeight,
              left = offset.left,
              top = offset.top;

          if (w.height + w.y >= top && w.y <= top + height && w.width + w.x >= left && w.x <= left + width) {
            if (!e.seen) {
              e.seen = true;

              if (e.bindOnce && e.invokedDisCallback) {
                var i = elements.indexOf(e);
                elements.splice(i, 1);

                if (_init && elements.length == 0) {
                  this.destroy();
                }
              } else {
                e.invokedAppearCallback = true;

                if (typeof e.appearCallback == "function") {
                  e.appearCallback({
                    target: e.elm
                  });
                }
              }
            }
          } else {
            if (e.seen) {
              e.seen = false;

              if (e.bindOnce && e.invokedAppearCallback) {
                var i = elements.indexOf(e);
                elements.splice(i, 1);

                if (_init && elements.length == 0) {
                  this.destroy();
                }
              } else {
                e.invokedDisCallback = true;

                if (typeof e.disCallback == "function") {
                  e.disCallback({
                    target: e.elm
                  });
                }
              }
            }
          }
        }
      }, {
        key: "getWindowPosition",
        value: function getWindowPosition() {
          return {
            width: window.innerWidth,
            height: window.innerHeight,
            x: window.pageXOffset,
            y: window.pageYOffset
          };
        }
      }, {
        key: "getOffset",
        value: function getOffset(elm) {
          var left = 0,
              top = 0;

          do {
            if (!isNaN(elm.offsetLeft)) {
              left += elm.offsetLeft;
            }

            if (!isNaN(elm.offsetTop)) {
              top += elm.offsetTop;
            }

            elm = elm.offsetParent;
          } while (elm);

          return {
            left: left,
            top: top
          };
        }
      }]);
      return DOMDisplayDetector;
    }();

    DOMDisplayDetector.detect = DOMDisplayDetector.detect.bind(DOMDisplayDetector);
    var bind = DOMDisplayDetector.bind.bind(DOMDisplayDetector);
    var bindOnce = DOMDisplayDetector.bindOnce.bind(DOMDisplayDetector);
    var unbind = DOMDisplayDetector.unbind.bind(DOMDisplayDetector);
    exports.bind = bind;
    exports.bindOnce = bindOnce;
    exports.unbind = unbind;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  });
});
var DDP = unwrapExports(domDisplayDetector_min);

var DOMDisplayDetector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DOMDisplayDetector, _React$Component);

  function DOMDisplayDetector(props) {
    var _this;

    _classCallCheck(this, DOMDisplayDetector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DOMDisplayDetector).call(this, props));
    _this.seen = _this.seen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.unseen = _this.unseen.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DOMDisplayDetector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.el = reactDom.findDOMNode(this);

      if (this.props.once) {
        DDP.bindOnce(this.el, this.seen, this.unseen);
      } else {
        DDP.bind(this.el, this.seen, this.unseen);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      DDP.unbind(this.el);
    }
  }, {
    key: "seen",
    value: function seen(_ref) {
      var target = _ref.target;
      this.props.seen(target);

      if (typeof this.node.seen === 'function') {
        this.node.seen(target);
      }
    }
  }, {
    key: "unseen",
    value: function unseen(_ref2) {
      var target = _ref2.target;
      this.props.unseen(target);

      if (typeof this.el.unseen === 'function') {
        this.el.unseen(target);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react.cloneElement(this.props.children, {
        ref: function ref(node) {
          return _this2.node = node;
        }
      });
    }
  }]);

  return DOMDisplayDetector;
}(react.Component);
DOMDisplayDetector.propTypes = {
  once: propTypes.bool,
  seen: propTypes.func,
  unseen: propTypes.func
};
DOMDisplayDetector.defaultProps = {
  once: false,
  seen: function seen() {},
  unseen: function unseen() {}
};

module.exports = DOMDisplayDetector;
