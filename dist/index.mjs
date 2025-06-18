import Ze, { useDebugValue as Hs, createElement as Sa, useRef as to, useContext as Ea, useState as Yo, useEffect as Jo, memo as Ca } from "react";
var _i = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ba(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var o = function i() {
      return this instanceof i ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    o.prototype = e.prototype;
  } else o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(t).forEach(function(i) {
    var s = Object.getOwnPropertyDescriptor(t, i);
    Object.defineProperty(o, i, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[i];
      }
    });
  }), o;
}
var tt = { exports: {} }, Do = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function Ta() {
  if (zs) return Do;
  zs = 1;
  var t = Ze, e = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, c, l) {
    var d, u = {}, g = null, v = null;
    l !== void 0 && (g = "" + l), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (d in c) i.call(c, d) && !n.hasOwnProperty(d) && (u[d] = c[d]);
    if (a && a.defaultProps) for (d in c = a.defaultProps, c) u[d] === void 0 && (u[d] = c[d]);
    return { $$typeof: e, type: a, key: g, ref: v, props: u, _owner: s.current };
  }
  return Do.Fragment = o, Do.jsx = r, Do.jsxs = r, Do;
}
var Ro = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Us;
function Pa() {
  return Us || (Us = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ze, e = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), h = Symbol.iterator, f = "@@iterator";
    function I(p) {
      if (p === null || typeof p != "object")
        return null;
      var T = h && p[h] || p[f];
      return typeof T == "function" ? T : null;
    }
    var L = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(p) {
      {
        for (var T = arguments.length, M = new Array(T > 1 ? T - 1 : 0), K = 1; K < T; K++)
          M[K - 1] = arguments[K];
        $("error", p, M);
      }
    }
    function $(p, T, M) {
      {
        var K = L.ReactDebugCurrentFrame, te = K.getStackAddendum();
        te !== "" && (T += "%s", M = M.concat([te]));
        var ae = M.map(function(ee) {
          return String(ee);
        });
        ae.unshift("Warning: " + T), Function.prototype.apply.call(console[p], console, ae);
      }
    }
    var D = !1, A = !1, B = !1, C = !1, x = !1, j;
    j = Symbol.for("react.module.reference");
    function _(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === i || p === n || x || p === s || p === l || p === d || C || p === v || D || A || B || typeof p == "object" && p !== null && (p.$$typeof === g || p.$$typeof === u || p.$$typeof === r || p.$$typeof === a || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === j || p.getModuleId !== void 0));
    }
    function m(p, T, M) {
      var K = p.displayName;
      if (K)
        return K;
      var te = T.displayName || T.name || "";
      return te !== "" ? M + "(" + te + ")" : M;
    }
    function k(p) {
      return p.displayName || "Context";
    }
    function y(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case i:
          return "Fragment";
        case o:
          return "Portal";
        case n:
          return "Profiler";
        case s:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var T = p;
            return k(T) + ".Consumer";
          case r:
            var M = p;
            return k(M._context) + ".Provider";
          case c:
            return m(p, p.render, "ForwardRef");
          case u:
            var K = p.displayName || null;
            return K !== null ? K : y(p.type) || "Memo";
          case g: {
            var te = p, ae = te._payload, ee = te._init;
            try {
              return y(ee(ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, N = 0, q, oe, V, re, ue, pe, W;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function xe() {
      {
        if (N === 0) {
          q = console.log, oe = console.info, V = console.warn, re = console.error, ue = console.group, pe = console.groupCollapsed, W = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        N++;
      }
    }
    function Se() {
      {
        if (N--, N === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, p, {
              value: q
            }),
            info: P({}, p, {
              value: oe
            }),
            warn: P({}, p, {
              value: V
            }),
            error: P({}, p, {
              value: re
            }),
            group: P({}, p, {
              value: ue
            }),
            groupCollapsed: P({}, p, {
              value: pe
            }),
            groupEnd: P({}, p, {
              value: W
            })
          });
        }
        N < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = L.ReactCurrentDispatcher, S;
    function w(p, T, M) {
      {
        if (S === void 0)
          try {
            throw Error();
          } catch (te) {
            var K = te.stack.trim().match(/\n( *(at )?)/);
            S = K && K[1] || "";
          }
        return `
` + S + p;
      }
    }
    var O = !1, U;
    {
      var F = typeof WeakMap == "function" ? WeakMap : Map;
      U = new F();
    }
    function X(p, T) {
      if (!p || O)
        return "";
      {
        var M = U.get(p);
        if (M !== void 0)
          return M;
      }
      var K;
      O = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ae;
      ae = le.current, le.current = null, xe();
      try {
        if (T) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (Ie) {
              K = Ie;
            }
            Reflect.construct(p, [], ee);
          } else {
            try {
              ee.call();
            } catch (Ie) {
              K = Ie;
            }
            p.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ie) {
            K = Ie;
          }
          p();
        }
      } catch (Ie) {
        if (Ie && K && typeof Ie.stack == "string") {
          for (var Z = Ie.stack.split(`
`), Be = K.stack.split(`
`), ve = Z.length - 1, fe = Be.length - 1; ve >= 1 && fe >= 0 && Z[ve] !== Be[fe]; )
            fe--;
          for (; ve >= 1 && fe >= 0; ve--, fe--)
            if (Z[ve] !== Be[fe]) {
              if (ve !== 1 || fe !== 1)
                do
                  if (ve--, fe--, fe < 0 || Z[ve] !== Be[fe]) {
                    var De = `
` + Z[ve].replace(" at new ", " at ");
                    return p.displayName && De.includes("<anonymous>") && (De = De.replace("<anonymous>", p.displayName)), typeof p == "function" && U.set(p, De), De;
                  }
                while (ve >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        O = !1, le.current = ae, Se(), Error.prepareStackTrace = te;
      }
      var wo = p ? p.displayName || p.name : "", no = wo ? w(wo) : "";
      return typeof p == "function" && U.set(p, no), no;
    }
    function me(p, T, M) {
      return X(p, !1);
    }
    function Ce(p) {
      var T = p.prototype;
      return !!(T && T.isReactComponent);
    }
    function be(p, T, M) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return X(p, Ce(p));
      if (typeof p == "string")
        return w(p);
      switch (p) {
        case l:
          return w("Suspense");
        case d:
          return w("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return me(p.render);
          case u:
            return be(p.type, T, M);
          case g: {
            var K = p, te = K._payload, ae = K._init;
            try {
              return be(ae(te), T, M);
            } catch {
            }
          }
        }
      return "";
    }
    var Fe = Object.prototype.hasOwnProperty, eo = {}, qe = L.ReactDebugCurrentFrame;
    function oi(p) {
      if (p) {
        var T = p._owner, M = be(p.type, p._source, T ? T.type : null);
        qe.setExtraStackFrame(M);
      } else
        qe.setExtraStackFrame(null);
    }
    function ta(p, T, M, K, te) {
      {
        var ae = Function.call.bind(Fe);
        for (var ee in p)
          if (ae(p, ee)) {
            var Z = void 0;
            try {
              if (typeof p[ee] != "function") {
                var Be = Error((K || "React class") + ": " + M + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              Z = p[ee](T, ee, K, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ve) {
              Z = ve;
            }
            Z && !(Z instanceof Error) && (oi(te), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", M, ee, typeof Z), oi(null)), Z instanceof Error && !(Z.message in eo) && (eo[Z.message] = !0, oi(te), E("Failed %s type: %s", M, Z.message), oi(null));
          }
      }
    }
    var sa = Array.isArray;
    function Ri(p) {
      return sa(p);
    }
    function na(p) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, M = T && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return M;
      }
    }
    function ra(p) {
      try {
        return Ts(p), !1;
      } catch {
        return !0;
      }
    }
    function Ts(p) {
      return "" + p;
    }
    function Ps(p) {
      if (ra(p))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", na(p)), Ts(p);
    }
    var Is = L.ReactCurrentOwner, aa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Os, As;
    function ca(p) {
      if (Fe.call(p, "ref")) {
        var T = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function la(p) {
      if (Fe.call(p, "key")) {
        var T = Object.getOwnPropertyDescriptor(p, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function da(p, T) {
      typeof p.ref == "string" && Is.current;
    }
    function ua(p, T) {
      {
        var M = function() {
          Os || (Os = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        M.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function ga(p, T) {
      {
        var M = function() {
          As || (As = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        M.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var pa = function(p, T, M, K, te, ae, ee) {
      var Z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: p,
        key: T,
        ref: M,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: ae
      };
      return Z._store = {}, Object.defineProperty(Z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.defineProperty(Z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(Z.props), Object.freeze(Z)), Z;
    };
    function ha(p, T, M, K, te) {
      {
        var ae, ee = {}, Z = null, Be = null;
        M !== void 0 && (Ps(M), Z = "" + M), la(T) && (Ps(T.key), Z = "" + T.key), ca(T) && (Be = T.ref, da(T, te));
        for (ae in T)
          Fe.call(T, ae) && !aa.hasOwnProperty(ae) && (ee[ae] = T[ae]);
        if (p && p.defaultProps) {
          var ve = p.defaultProps;
          for (ae in ve)
            ee[ae] === void 0 && (ee[ae] = ve[ae]);
        }
        if (Z || Be) {
          var fe = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          Z && ua(ee, fe), Be && ga(ee, fe);
        }
        return pa(p, Z, Be, te, K, Is.current, ee);
      }
    }
    var $i = L.ReactCurrentOwner, Ls = L.ReactDebugCurrentFrame;
    function ko(p) {
      if (p) {
        var T = p._owner, M = be(p.type, p._source, T ? T.type : null);
        Ls.setExtraStackFrame(M);
      } else
        Ls.setExtraStackFrame(null);
    }
    var Hi;
    Hi = !1;
    function zi(p) {
      return typeof p == "object" && p !== null && p.$$typeof === e;
    }
    function Ns() {
      {
        if ($i.current) {
          var p = y($i.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function ma(p) {
      return "";
    }
    var Ms = {};
    function va(p) {
      {
        var T = Ns();
        if (!T) {
          var M = typeof p == "string" ? p : p.displayName || p.name;
          M && (T = `

Check the top-level render call using <` + M + ">.");
        }
        return T;
      }
    }
    function Fs(p, T) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var M = va(T);
        if (Ms[M])
          return;
        Ms[M] = !0;
        var K = "";
        p && p._owner && p._owner !== $i.current && (K = " It was passed a child from " + y(p._owner.type) + "."), ko(p), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, K), ko(null);
      }
    }
    function Ds(p, T) {
      {
        if (typeof p != "object")
          return;
        if (Ri(p))
          for (var M = 0; M < p.length; M++) {
            var K = p[M];
            zi(K) && Fs(K, T);
          }
        else if (zi(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var te = I(p);
          if (typeof te == "function" && te !== p.entries)
            for (var ae = te.call(p), ee; !(ee = ae.next()).done; )
              zi(ee.value) && Fs(ee.value, T);
        }
      }
    }
    function _a(p) {
      {
        var T = p.type;
        if (T == null || typeof T == "string")
          return;
        var M;
        if (typeof T == "function")
          M = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === u))
          M = T.propTypes;
        else
          return;
        if (M) {
          var K = y(T);
          ta(M, p.props, "prop", K, p);
        } else if (T.PropTypes !== void 0 && !Hi) {
          Hi = !0;
          var te = y(T);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fa(p) {
      {
        for (var T = Object.keys(p.props), M = 0; M < T.length; M++) {
          var K = T[M];
          if (K !== "children" && K !== "key") {
            ko(p), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), ko(null);
            break;
          }
        }
        p.ref !== null && (ko(p), E("Invalid attribute `ref` supplied to `React.Fragment`."), ko(null));
      }
    }
    var Rs = {};
    function $s(p, T, M, K, te, ae) {
      {
        var ee = _(p);
        if (!ee) {
          var Z = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Be = ma();
          Be ? Z += Be : Z += Ns();
          var ve;
          p === null ? ve = "null" : Ri(p) ? ve = "array" : p !== void 0 && p.$$typeof === e ? (ve = "<" + (y(p.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof p, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, Z);
        }
        var fe = ha(p, T, M, te, ae);
        if (fe == null)
          return fe;
        if (ee) {
          var De = T.children;
          if (De !== void 0)
            if (K)
              if (Ri(De)) {
                for (var wo = 0; wo < De.length; wo++)
                  Ds(De[wo], p);
                Object.freeze && Object.freeze(De);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ds(De, p);
        }
        if (Fe.call(T, "key")) {
          var no = y(p), Ie = Object.keys(T).filter(function(xa) {
            return xa !== "key";
          }), Ui = Ie.length > 0 ? "{key: someKey, " + Ie.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Rs[no + Ui]) {
            var ja = Ie.length > 0 ? "{" + Ie.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ui, no, ja, no), Rs[no + Ui] = !0;
          }
        }
        return p === i ? fa(fe) : _a(fe), fe;
      }
    }
    function ya(p, T, M) {
      return $s(p, T, M, !0);
    }
    function ba(p, T, M) {
      return $s(p, T, M, !1);
    }
    var ka = ba, wa = ya;
    Ro.Fragment = i, Ro.jsx = ka, Ro.jsxs = wa;
  }()), Ro;
}
process.env.NODE_ENV === "production" ? tt.exports = Ta() : tt.exports = Pa();
var R = tt.exports, Oe = function() {
  return Oe = Object.assign || function(e) {
    for (var o, i = 1, s = arguments.length; i < s; i++) {
      o = arguments[i];
      for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    }
    return e;
  }, Oe.apply(this, arguments);
};
function Co(t, e, o) {
  if (o || arguments.length === 2) for (var i = 0, s = e.length, n; i < s; i++)
    (n || !(i in e)) && (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
  return t.concat(n || Array.prototype.slice.call(e));
}
function Ia(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return e[o] === void 0 && (e[o] = t(o)), e[o];
  };
}
var Oa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Aa = /* @__PURE__ */ Ia(
  function(t) {
    return Oa.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ce = "-ms-", Vo = "-moz-", se = "-webkit-", En = "comm", Bi = "rule", Ct = "decl", La = "@import", Cn = "@keyframes", Na = "@layer", Bn = Math.abs, Bt = String.fromCharCode, st = Object.assign;
function Ma(t, e) {
  return ke(t, 0) ^ 45 ? (((e << 2 ^ ke(t, 0)) << 2 ^ ke(t, 1)) << 2 ^ ke(t, 2)) << 2 ^ ke(t, 3) : 0;
}
function Tn(t) {
  return t.trim();
}
function Ye(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function J(t, e, o) {
  return t.replace(e, o);
}
function ai(t, e, o) {
  return t.indexOf(e, o);
}
function ke(t, e) {
  return t.charCodeAt(e) | 0;
}
function Bo(t, e, o) {
  return t.slice(e, o);
}
function We(t) {
  return t.length;
}
function Pn(t) {
  return t.length;
}
function Uo(t, e) {
  return e.push(t), t;
}
function Fa(t, e) {
  return t.map(e).join("");
}
function qs(t, e) {
  return t.filter(function(o) {
    return !Ye(o, e);
  });
}
var Ti = 1, To = 1, In = 0, $e = 0, ye = 0, Lo = "";
function Pi(t, e, o, i, s, n, r, a) {
  return { value: t, root: e, parent: o, type: i, props: s, children: n, line: Ti, column: To, length: r, return: "", siblings: a };
}
function oo(t, e) {
  return st(Pi("", null, null, "", null, null, 0, t.siblings), t, { length: -t.length }, e);
}
function jo(t) {
  for (; t.root; )
    t = oo(t.root, { children: [t] });
  Uo(t, t.siblings);
}
function Da() {
  return ye;
}
function Ra() {
  return ye = $e > 0 ? ke(Lo, --$e) : 0, To--, ye === 10 && (To = 1, Ti--), ye;
}
function ze() {
  return ye = $e < In ? ke(Lo, $e++) : 0, To++, ye === 10 && (To = 1, Ti++), ye;
}
function ho() {
  return ke(Lo, $e);
}
function ci() {
  return $e;
}
function Ii(t, e) {
  return Bo(Lo, t, e);
}
function nt(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function $a(t) {
  return Ti = To = 1, In = We(Lo = t), $e = 0, [];
}
function Ha(t) {
  return Lo = "", t;
}
function qi(t) {
  return Tn(Ii($e - 1, rt(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function za(t) {
  for (; (ye = ho()) && ye < 33; )
    ze();
  return nt(t) > 2 || nt(ye) > 3 ? "" : " ";
}
function Ua(t, e) {
  for (; --e && ze() && !(ye < 48 || ye > 102 || ye > 57 && ye < 65 || ye > 70 && ye < 97); )
    ;
  return Ii(t, ci() + (e < 6 && ho() == 32 && ze() == 32));
}
function rt(t) {
  for (; ze(); )
    switch (ye) {
      case t:
        return $e;
      case 34:
      case 39:
        t !== 34 && t !== 39 && rt(ye);
        break;
      case 40:
        t === 41 && rt(t);
        break;
      case 92:
        ze();
        break;
    }
  return $e;
}
function qa(t, e) {
  for (; ze() && t + ye !== 57; )
    if (t + ye === 84 && ho() === 47)
      break;
  return "/*" + Ii(e, $e - 1) + "*" + Bt(t === 47 ? t : ze());
}
function Wa(t) {
  for (; !nt(ho()); )
    ze();
  return Ii(t, $e);
}
function Va(t) {
  return Ha(li("", null, null, null, [""], t = $a(t), 0, [0], t));
}
function li(t, e, o, i, s, n, r, a, c) {
  for (var l = 0, d = 0, u = r, g = 0, v = 0, h = 0, f = 1, I = 1, L = 1, E = 0, $ = "", D = s, A = n, B = i, C = $; I; )
    switch (h = E, E = ze()) {
      case 40:
        if (h != 108 && ke(C, u - 1) == 58) {
          ai(C += J(qi(E), "&", "&\f"), "&\f", Bn(l ? a[l - 1] : 0)) != -1 && (L = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += qi(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += za(h);
        break;
      case 92:
        C += Ua(ci() - 1, 7);
        continue;
      case 47:
        switch (ho()) {
          case 42:
          case 47:
            Uo(Ka(qa(ze(), ci()), e, o, c), c);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * f:
        a[l++] = We(C) * L;
      case 125 * f:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            I = 0;
          case 59 + d:
            L == -1 && (C = J(C, /\f/g, "")), v > 0 && We(C) - u && Uo(v > 32 ? Vs(C + ";", i, o, u - 1, c) : Vs(J(C, " ", "") + ";", i, o, u - 2, c), c);
            break;
          case 59:
            C += ";";
          default:
            if (Uo(B = Ws(C, e, o, l, d, s, a, $, D = [], A = [], u, n), n), E === 123)
              if (d === 0)
                li(C, e, B, B, D, n, u, a, A);
              else
                switch (g === 99 && ke(C, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    li(t, B, B, i && Uo(Ws(t, B, B, 0, 0, s, a, $, s, D = [], u, A), A), s, A, u, a, i ? D : A);
                    break;
                  default:
                    li(C, B, B, B, [""], A, 0, a, A);
                }
        }
        l = d = v = 0, f = L = 1, $ = C = "", u = r;
        break;
      case 58:
        u = 1 + We(C), v = h;
      default:
        if (f < 1) {
          if (E == 123)
            --f;
          else if (E == 125 && f++ == 0 && Ra() == 125)
            continue;
        }
        switch (C += Bt(E), E * f) {
          case 38:
            L = d > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            a[l++] = (We(C) - 1) * L, L = 1;
            break;
          case 64:
            ho() === 45 && (C += qi(ze())), g = ho(), d = u = We($ = C += Wa(ci())), E++;
            break;
          case 45:
            h === 45 && We(C) == 2 && (f = 0);
        }
    }
  return n;
}
function Ws(t, e, o, i, s, n, r, a, c, l, d, u) {
  for (var g = s - 1, v = s === 0 ? n : [""], h = Pn(v), f = 0, I = 0, L = 0; f < i; ++f)
    for (var E = 0, $ = Bo(t, g + 1, g = Bn(I = r[f])), D = t; E < h; ++E)
      (D = Tn(I > 0 ? v[E] + " " + $ : J($, /&\f/g, v[E]))) && (c[L++] = D);
  return Pi(t, e, o, s === 0 ? Bi : a, c, l, d, u);
}
function Ka(t, e, o, i) {
  return Pi(t, e, o, En, Bt(Da()), Bo(t, 2, -2), 0, i);
}
function Vs(t, e, o, i, s) {
  return Pi(t, e, o, Ct, Bo(t, 0, i), Bo(t, i + 1, -1), i, s);
}
function On(t, e, o) {
  switch (Ma(t, e)) {
    case 5103:
      return se + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return se + t + t;
    case 4789:
      return Vo + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + t + Vo + t + ce + t + t;
    case 5936:
      switch (ke(t, e + 11)) {
        case 114:
          return se + t + ce + J(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return se + t + ce + J(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return se + t + ce + J(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
    case 6828:
    case 4268:
    case 2903:
      return se + t + ce + t + t;
    case 6165:
      return se + t + ce + "flex-" + t + t;
    case 5187:
      return se + t + J(t, /(\w+).+(:[^]+)/, se + "box-$1$2" + ce + "flex-$1$2") + t;
    case 5443:
      return se + t + ce + "flex-item-" + J(t, /flex-|-self/g, "") + (Ye(t, /flex-|baseline/) ? "" : ce + "grid-row-" + J(t, /flex-|-self/g, "")) + t;
    case 4675:
      return se + t + ce + "flex-line-pack" + J(t, /align-content|flex-|-self/g, "") + t;
    case 5548:
      return se + t + ce + J(t, "shrink", "negative") + t;
    case 5292:
      return se + t + ce + J(t, "basis", "preferred-size") + t;
    case 6060:
      return se + "box-" + J(t, "-grow", "") + se + t + ce + J(t, "grow", "positive") + t;
    case 4554:
      return se + J(t, /([^-])(transform)/g, "$1" + se + "$2") + t;
    case 6187:
      return J(J(J(t, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return J(t, /(image-set\([^]*)/, se + "$1$`$1");
    case 4968:
      return J(J(t, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + ce + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + se + t + t;
    case 4200:
      if (!Ye(t, /flex-|baseline/)) return ce + "grid-column-align" + Bo(t, e) + t;
      break;
    case 2592:
    case 3360:
      return ce + J(t, "template-", "") + t;
    case 4384:
    case 3616:
      return o && o.some(function(i, s) {
        return e = s, Ye(i.props, /grid-\w+-end/);
      }) ? ~ai(t + (o = o[e].value), "span", 0) ? t : ce + J(t, "-start", "") + t + ce + "grid-row-span:" + (~ai(o, "span", 0) ? Ye(o, /\d+/) : +Ye(o, /\d+/) - +Ye(t, /\d+/)) + ";" : ce + J(t, "-start", "") + t;
    case 4896:
    case 4128:
      return o && o.some(function(i) {
        return Ye(i.props, /grid-\w+-start/);
      }) ? t : ce + J(J(t, "-end", "-span"), "span ", "") + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(t, /(.+)-inline(.+)/, se + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (We(t) - 1 - e > 6)
        switch (ke(t, e + 1)) {
          case 109:
            if (ke(t, e + 4) !== 45)
              break;
          case 102:
            return J(t, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + Vo + (ke(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~ai(t, "stretch", 0) ? On(J(t, "stretch", "fill-available"), e, o) + t : t;
        }
      break;
    case 5152:
    case 5920:
      return J(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(i, s, n, r, a, c, l) {
        return ce + s + ":" + n + l + (r ? ce + s + "-span:" + (a ? c : +c - +n) + l : "") + t;
      });
    case 4949:
      if (ke(t, e + 6) === 121)
        return J(t, ":", ":" + se) + t;
      break;
    case 6444:
      switch (ke(t, ke(t, 14) === 45 ? 18 : 11)) {
        case 120:
          return J(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + se + (ke(t, 14) === 45 ? "inline-" : "") + "box$3$1" + se + "$2$3$1" + ce + "$2box$3") + t;
        case 100:
          return J(t, ":", ":" + ce) + t;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return J(t, "scroll-", "scroll-snap-") + t;
  }
  return t;
}
function fi(t, e) {
  for (var o = "", i = 0; i < t.length; i++)
    o += e(t[i], i, t, e) || "";
  return o;
}
function Ya(t, e, o, i) {
  switch (t.type) {
    case Na:
      if (t.children.length) break;
    case La:
    case Ct:
      return t.return = t.return || t.value;
    case En:
      return "";
    case Cn:
      return t.return = t.value + "{" + fi(t.children, i) + "}";
    case Bi:
      if (!We(t.value = t.props.join(","))) return "";
  }
  return We(o = fi(t.children, i)) ? t.return = t.value + "{" + o + "}" : "";
}
function Ga(t) {
  var e = Pn(t);
  return function(o, i, s, n) {
    for (var r = "", a = 0; a < e; a++)
      r += t[a](o, i, s, n) || "";
    return r;
  };
}
function Xa(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function Ja(t, e, o, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Ct:
        t.return = On(t.value, t.length, o);
        return;
      case Cn:
        return fi([oo(t, { value: J(t.value, "@", "@" + se) })], i);
      case Bi:
        if (t.length)
          return Fa(o = t.props, function(s) {
            switch (Ye(s, i = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                jo(oo(t, { props: [J(s, /:(read-\w+)/, ":" + Vo + "$1")] })), jo(oo(t, { props: [s] })), st(t, { props: qs(o, i) });
                break;
              case "::placeholder":
                jo(oo(t, { props: [J(s, /:(plac\w+)/, ":" + se + "input-$1")] })), jo(oo(t, { props: [J(s, /:(plac\w+)/, ":" + Vo + "$1")] })), jo(oo(t, { props: [J(s, /:(plac\w+)/, ce + "input-$1")] })), jo(oo(t, { props: [s] })), st(t, { props: qs(o, i) });
                break;
            }
            return "";
          });
    }
}
var Za = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, _o = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", An = "active", Ln = "data-styled-version", Oi = "6.1.13", Tt = `/*!sc*/
`, yi = typeof window < "u" && "HTMLElement" in window, Qa = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Ks = /invalid hook call/i, ii = /* @__PURE__ */ new Set(), ec = function(t, e) {
  if (process.env.NODE_ENV !== "production") {
    var o = e ? ' with the id of "'.concat(e, '"') : "", i = "The component ".concat(t).concat(o, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, s = console.error;
    try {
      var n = !0;
      console.error = function(r) {
        for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
        Ks.test(r) ? (n = !1, ii.delete(i)) : s.apply(void 0, Co([r], a, !1));
      }, to(), n && !ii.has(i) && (console.warn(i), ii.add(i));
    } catch (r) {
      Ks.test(r.message) && ii.delete(i);
    } finally {
      console.error = s;
    }
  }
}, Ai = Object.freeze([]), Po = Object.freeze({});
function oc(t, e, o) {
  return o === void 0 && (o = Po), t.theme !== o.theme && t.theme || e || o.theme;
}
var at = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ic = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, tc = /(^-|-$)/g;
function Ys(t) {
  return t.replace(ic, "-").replace(tc, "");
}
var sc = /(a)(d)/gi, ti = 52, Gs = function(t) {
  return String.fromCharCode(t + (t > 25 ? 39 : 97));
};
function ct(t) {
  var e, o = "";
  for (e = Math.abs(t); e > ti; e = e / ti | 0) o = Gs(e % ti) + o;
  return (Gs(e % ti) + o).replace(sc, "$1-$2");
}
var Wi, Nn = 5381, ro = function(t, e) {
  for (var o = e.length; o; ) t = 33 * t ^ e.charCodeAt(--o);
  return t;
}, Mn = function(t) {
  return ro(Nn, t);
};
function nc(t) {
  return ct(Mn(t) >>> 0);
}
function Fn(t) {
  return process.env.NODE_ENV !== "production" && typeof t == "string" && t || t.displayName || t.name || "Component";
}
function Vi(t) {
  return typeof t == "string" && (process.env.NODE_ENV === "production" || t.charAt(0) === t.charAt(0).toLowerCase());
}
var Dn = typeof Symbol == "function" && Symbol.for, Rn = Dn ? Symbol.for("react.memo") : 60115, rc = Dn ? Symbol.for("react.forward_ref") : 60112, ac = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, cc = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, $n = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, lc = ((Wi = {})[rc] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Wi[Rn] = $n, Wi);
function Xs(t) {
  return ("type" in (e = t) && e.type.$$typeof) === Rn ? $n : "$$typeof" in t ? lc[t.$$typeof] : ac;
  var e;
}
var dc = Object.defineProperty, uc = Object.getOwnPropertyNames, Js = Object.getOwnPropertySymbols, gc = Object.getOwnPropertyDescriptor, pc = Object.getPrototypeOf, Zs = Object.prototype;
function Hn(t, e, o) {
  if (typeof e != "string") {
    if (Zs) {
      var i = pc(e);
      i && i !== Zs && Hn(t, i, o);
    }
    var s = uc(e);
    Js && (s = s.concat(Js(e)));
    for (var n = Xs(t), r = Xs(e), a = 0; a < s.length; ++a) {
      var c = s[a];
      if (!(c in cc || o && o[c] || r && c in r || n && c in n)) {
        var l = gc(e, c);
        try {
          dc(t, c, l);
        } catch {
        }
      }
    }
  }
  return t;
}
function Io(t) {
  return typeof t == "function";
}
function Pt(t) {
  return typeof t == "object" && "styledComponentId" in t;
}
function go(t, e) {
  return t && e ? "".concat(t, " ").concat(e) : t || e || "";
}
function Qs(t, e) {
  if (t.length === 0) return "";
  for (var o = t[0], i = 1; i < t.length; i++) o += t[i];
  return o;
}
function Oo(t) {
  return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof);
}
function lt(t, e, o) {
  if (o === void 0 && (o = !1), !o && !Oo(t) && !Array.isArray(t)) return e;
  if (Array.isArray(e)) for (var i = 0; i < e.length; i++) t[i] = lt(t[i], e[i]);
  else if (Oo(e)) for (var i in e) t[i] = lt(t[i], e[i]);
  return t;
}
function It(t, e) {
  Object.defineProperty(t, "toString", { value: e });
}
var hc = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function mc() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  for (var o = t[0], i = [], s = 1, n = t.length; s < n; s += 1) i.push(t[s]);
  return i.forEach(function(r) {
    o = o.replace(/%[a-z]/, r);
  }), o;
}
function No(t) {
  for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : "")) : new Error(mc.apply(void 0, Co([hc[t]], e, !1)).trim());
}
var vc = function() {
  function t(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
  }
  return t.prototype.indexOfGroup = function(e) {
    for (var o = 0, i = 0; i < e; i++) o += this.groupSizes[i];
    return o;
  }, t.prototype.insertRules = function(e, o) {
    if (e >= this.groupSizes.length) {
      for (var i = this.groupSizes, s = i.length, n = s; e >= n; ) if ((n <<= 1) < 0) throw No(16, "".concat(e));
      this.groupSizes = new Uint32Array(n), this.groupSizes.set(i), this.length = n;
      for (var r = s; r < n; r++) this.groupSizes[r] = 0;
    }
    for (var a = this.indexOfGroup(e + 1), c = (r = 0, o.length); r < c; r++) this.tag.insertRule(a, o[r]) && (this.groupSizes[e]++, a++);
  }, t.prototype.clearGroup = function(e) {
    if (e < this.length) {
      var o = this.groupSizes[e], i = this.indexOfGroup(e), s = i + o;
      this.groupSizes[e] = 0;
      for (var n = i; n < s; n++) this.tag.deleteRule(i);
    }
  }, t.prototype.getGroup = function(e) {
    var o = "";
    if (e >= this.length || this.groupSizes[e] === 0) return o;
    for (var i = this.groupSizes[e], s = this.indexOfGroup(e), n = s + i, r = s; r < n; r++) o += "".concat(this.tag.getRule(r)).concat(Tt);
    return o;
  }, t;
}(), _c = 1 << 30, di = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map(), ui = 1, si = function(t) {
  if (di.has(t)) return di.get(t);
  for (; bi.has(ui); ) ui++;
  var e = ui++;
  if (process.env.NODE_ENV !== "production" && ((0 | e) < 0 || e > _c)) throw No(16, "".concat(e));
  return di.set(t, e), bi.set(e, t), e;
}, fc = function(t, e) {
  ui = e + 1, di.set(t, e), bi.set(e, t);
}, yc = "style[".concat(_o, "][").concat(Ln, '="').concat(Oi, '"]'), bc = new RegExp("^".concat(_o, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), kc = function(t, e, o) {
  for (var i, s = o.split(","), n = 0, r = s.length; n < r; n++) (i = s[n]) && t.registerName(e, i);
}, wc = function(t, e) {
  for (var o, i = ((o = e.textContent) !== null && o !== void 0 ? o : "").split(Tt), s = [], n = 0, r = i.length; n < r; n++) {
    var a = i[n].trim();
    if (a) {
      var c = a.match(bc);
      if (c) {
        var l = 0 | parseInt(c[1], 10), d = c[2];
        l !== 0 && (fc(d, l), kc(t, d, c[3]), t.getTag().insertRules(l, s)), s.length = 0;
      } else s.push(a);
    }
  }
}, en = function(t) {
  for (var e = document.querySelectorAll(yc), o = 0, i = e.length; o < i; o++) {
    var s = e[o];
    s && s.getAttribute(_o) !== An && (wc(t, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
function jc() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var zn = function(t) {
  var e = document.head, o = t || e, i = document.createElement("style"), s = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(_o, "]")));
    return c[c.length - 1];
  }(o), n = s !== void 0 ? s.nextSibling : null;
  i.setAttribute(_o, An), i.setAttribute(Ln, Oi);
  var r = jc();
  return r && i.setAttribute("nonce", r), o.insertBefore(i, n), i;
}, xc = function() {
  function t(e) {
    this.element = zn(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var i = document.styleSheets, s = 0, n = i.length; s < n; s++) {
        var r = i[s];
        if (r.ownerNode === o) return r;
      }
      throw No(17);
    }(this.element), this.length = 0;
  }
  return t.prototype.insertRule = function(e, o) {
    try {
      return this.sheet.insertRule(o, e), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.prototype.deleteRule = function(e) {
    this.sheet.deleteRule(e), this.length--;
  }, t.prototype.getRule = function(e) {
    var o = this.sheet.cssRules[e];
    return o && o.cssText ? o.cssText : "";
  }, t;
}(), Sc = function() {
  function t(e) {
    this.element = zn(e), this.nodes = this.element.childNodes, this.length = 0;
  }
  return t.prototype.insertRule = function(e, o) {
    if (e <= this.length && e >= 0) {
      var i = document.createTextNode(o);
      return this.element.insertBefore(i, this.nodes[e] || null), this.length++, !0;
    }
    return !1;
  }, t.prototype.deleteRule = function(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }, t;
}(), Ec = function() {
  function t(e) {
    this.rules = [], this.length = 0;
  }
  return t.prototype.insertRule = function(e, o) {
    return e <= this.length && (this.rules.splice(e, 0, o), this.length++, !0);
  }, t.prototype.deleteRule = function(e) {
    this.rules.splice(e, 1), this.length--;
  }, t.prototype.getRule = function(e) {
    return e < this.length ? this.rules[e] : "";
  }, t;
}(), on = yi, Cc = { isServer: !yi, useCSSOMInjection: !Qa }, Un = function() {
  function t(e, o, i) {
    e === void 0 && (e = Po), o === void 0 && (o = {});
    var s = this;
    this.options = Oe(Oe({}, Cc), e), this.gs = o, this.names = new Map(i), this.server = !!e.isServer, !this.server && yi && on && (on = !1, en(this)), It(this, function() {
      return function(n) {
        for (var r = n.getTag(), a = r.length, c = "", l = function(u) {
          var g = function(L) {
            return bi.get(L);
          }(u);
          if (g === void 0) return "continue";
          var v = n.names.get(g), h = r.getGroup(u);
          if (v === void 0 || !v.size || h.length === 0) return "continue";
          var f = "".concat(_o, ".g").concat(u, '[id="').concat(g, '"]'), I = "";
          v !== void 0 && v.forEach(function(L) {
            L.length > 0 && (I += "".concat(L, ","));
          }), c += "".concat(h).concat(f, '{content:"').concat(I, '"}').concat(Tt);
        }, d = 0; d < a; d++) l(d);
        return c;
      }(s);
    });
  }
  return t.registerId = function(e) {
    return si(e);
  }, t.prototype.rehydrate = function() {
    !this.server && yi && en(this);
  }, t.prototype.reconstructWithOptions = function(e, o) {
    return o === void 0 && (o = !0), new t(Oe(Oe({}, this.options), e), this.gs, o && this.names || void 0);
  }, t.prototype.allocateGSInstance = function(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }, t.prototype.getTag = function() {
    return this.tag || (this.tag = (e = function(o) {
      var i = o.useCSSOMInjection, s = o.target;
      return o.isServer ? new Ec(s) : i ? new xc(s) : new Sc(s);
    }(this.options), new vc(e)));
    var e;
  }, t.prototype.hasNameForId = function(e, o) {
    return this.names.has(e) && this.names.get(e).has(o);
  }, t.prototype.registerName = function(e, o) {
    if (si(e), this.names.has(e)) this.names.get(e).add(o);
    else {
      var i = /* @__PURE__ */ new Set();
      i.add(o), this.names.set(e, i);
    }
  }, t.prototype.insertRules = function(e, o, i) {
    this.registerName(e, o), this.getTag().insertRules(si(e), i);
  }, t.prototype.clearNames = function(e) {
    this.names.has(e) && this.names.get(e).clear();
  }, t.prototype.clearRules = function(e) {
    this.getTag().clearGroup(si(e)), this.clearNames(e);
  }, t.prototype.clearTag = function() {
    this.tag = void 0;
  }, t;
}(), Bc = /&/g, Tc = /^\s*\/\/.*$/gm;
function qn(t, e) {
  return t.map(function(o) {
    return o.type === "rule" && (o.value = "".concat(e, " ").concat(o.value), o.value = o.value.replaceAll(",", ",".concat(e, " ")), o.props = o.props.map(function(i) {
      return "".concat(e, " ").concat(i);
    })), Array.isArray(o.children) && o.type !== "@keyframes" && (o.children = qn(o.children, e)), o;
  });
}
function Pc(t) {
  var e, o, i, s = Po, n = s.options, r = n === void 0 ? Po : n, a = s.plugins, c = a === void 0 ? Ai : a, l = function(g, v, h) {
    return h.startsWith(o) && h.endsWith(o) && h.replaceAll(o, "").length > 0 ? ".".concat(e) : g;
  }, d = c.slice();
  d.push(function(g) {
    g.type === Bi && g.value.includes("&") && (g.props[0] = g.props[0].replace(Bc, o).replace(i, l));
  }), r.prefix && d.push(Ja), d.push(Ya);
  var u = function(g, v, h, f) {
    v === void 0 && (v = ""), h === void 0 && (h = ""), f === void 0 && (f = "&"), e = f, o = v, i = new RegExp("\\".concat(o, "\\b"), "g");
    var I = g.replace(Tc, ""), L = Va(h || v ? "".concat(h, " ").concat(v, " { ").concat(I, " }") : I);
    r.namespace && (L = qn(L, r.namespace));
    var E = [];
    return fi(L, Ga(d.concat(Xa(function($) {
      return E.push($);
    })))), E;
  };
  return u.hash = c.length ? c.reduce(function(g, v) {
    return v.name || No(15), ro(g, v.name);
  }, Nn).toString() : "", u;
}
var Ic = new Un(), dt = Pc(), Wn = Ze.createContext({ shouldForwardProp: void 0, styleSheet: Ic, stylis: dt });
Wn.Consumer;
Ze.createContext(void 0);
function tn() {
  return Ea(Wn);
}
var sn = function() {
  function t(e, o) {
    var i = this;
    this.inject = function(s, n) {
      n === void 0 && (n = dt);
      var r = i.name + n.hash;
      s.hasNameForId(i.id, r) || s.insertRules(i.id, r, n(i.rules, r, "@keyframes"));
    }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = o, It(this, function() {
      throw No(12, String(i.name));
    });
  }
  return t.prototype.getName = function(e) {
    return e === void 0 && (e = dt), this.name + e.hash;
  }, t;
}(), Oc = function(t) {
  return t >= "A" && t <= "Z";
};
function nn(t) {
  for (var e = "", o = 0; o < t.length; o++) {
    var i = t[o];
    if (o === 1 && i === "-" && t[0] === "-") return t;
    Oc(i) ? e += "-" + i.toLowerCase() : e += i;
  }
  return e.startsWith("ms-") ? "-" + e : e;
}
var Vn = function(t) {
  return t == null || t === !1 || t === "";
}, Kn = function(t) {
  var e, o, i = [];
  for (var s in t) {
    var n = t[s];
    t.hasOwnProperty(s) && !Vn(n) && (Array.isArray(n) && n.isCss || Io(n) ? i.push("".concat(nn(s), ":"), n, ";") : Oo(n) ? i.push.apply(i, Co(Co(["".concat(s, " {")], Kn(n), !1), ["}"], !1)) : i.push("".concat(nn(s), ": ").concat((e = s, (o = n) == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || e in Za || e.startsWith("--") ? String(o).trim() : "".concat(o, "px")), ";")));
  }
  return i;
};
function mo(t, e, o, i) {
  if (Vn(t)) return [];
  if (Pt(t)) return [".".concat(t.styledComponentId)];
  if (Io(t)) {
    if (!Io(n = t) || n.prototype && n.prototype.isReactComponent || !e) return [t];
    var s = t(e);
    return process.env.NODE_ENV === "production" || typeof s != "object" || Array.isArray(s) || s instanceof sn || Oo(s) || s === null || console.error("".concat(Fn(t), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), mo(s, e, o, i);
  }
  var n;
  return t instanceof sn ? o ? (t.inject(o, i), [t.getName(i)]) : [t] : Oo(t) ? Kn(t) : Array.isArray(t) ? Array.prototype.concat.apply(Ai, t.map(function(r) {
    return mo(r, e, o, i);
  })) : [t.toString()];
}
function Ac(t) {
  for (var e = 0; e < t.length; e += 1) {
    var o = t[e];
    if (Io(o) && !Pt(o)) return !1;
  }
  return !0;
}
var Lc = Mn(Oi), Nc = function() {
  function t(e, o, i) {
    this.rules = e, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (i === void 0 || i.isStatic) && Ac(e), this.componentId = o, this.baseHash = ro(Lc, o), this.baseStyle = i, Un.registerId(o);
  }
  return t.prototype.generateAndInjectStyles = function(e, o, i) {
    var s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, o, i) : "";
    if (this.isStatic && !i.hash) if (this.staticRulesId && o.hasNameForId(this.componentId, this.staticRulesId)) s = go(s, this.staticRulesId);
    else {
      var n = Qs(mo(this.rules, e, o, i)), r = ct(ro(this.baseHash, n) >>> 0);
      if (!o.hasNameForId(this.componentId, r)) {
        var a = i(n, ".".concat(r), void 0, this.componentId);
        o.insertRules(this.componentId, r, a);
      }
      s = go(s, r), this.staticRulesId = r;
    }
    else {
      for (var c = ro(this.baseHash, i.hash), l = "", d = 0; d < this.rules.length; d++) {
        var u = this.rules[d];
        if (typeof u == "string") l += u, process.env.NODE_ENV !== "production" && (c = ro(c, u));
        else if (u) {
          var g = Qs(mo(u, e, o, i));
          c = ro(c, g + d), l += g;
        }
      }
      if (l) {
        var v = ct(c >>> 0);
        o.hasNameForId(this.componentId, v) || o.insertRules(this.componentId, v, i(l, ".".concat(v), void 0, this.componentId)), s = go(s, v);
      }
    }
    return s;
  }, t;
}(), Yn = Ze.createContext(void 0);
Yn.Consumer;
var Ki = {}, rn = /* @__PURE__ */ new Set();
function Mc(t, e, o) {
  var i = Pt(t), s = t, n = !Vi(t), r = e.attrs, a = r === void 0 ? Ai : r, c = e.componentId, l = c === void 0 ? function(D, A) {
    var B = typeof D != "string" ? "sc" : Ys(D);
    Ki[B] = (Ki[B] || 0) + 1;
    var C = "".concat(B, "-").concat(nc(Oi + B + Ki[B]));
    return A ? "".concat(A, "-").concat(C) : C;
  }(e.displayName, e.parentComponentId) : c, d = e.displayName, u = d === void 0 ? function(D) {
    return Vi(D) ? "styled.".concat(D) : "Styled(".concat(Fn(D), ")");
  }(t) : d, g = e.displayName && e.componentId ? "".concat(Ys(e.displayName), "-").concat(e.componentId) : e.componentId || l, v = i && s.attrs ? s.attrs.concat(a).filter(Boolean) : a, h = e.shouldForwardProp;
  if (i && s.shouldForwardProp) {
    var f = s.shouldForwardProp;
    if (e.shouldForwardProp) {
      var I = e.shouldForwardProp;
      h = function(D, A) {
        return f(D, A) && I(D, A);
      };
    } else h = f;
  }
  var L = new Nc(o, g, i ? s.componentStyle : void 0);
  function E(D, A) {
    return function(B, C, x) {
      var j = B.attrs, _ = B.componentStyle, m = B.defaultProps, k = B.foldedComponentIds, y = B.styledComponentId, P = B.target, N = Ze.useContext(Yn), q = tn(), oe = B.shouldForwardProp || q.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Hs(y);
      var V = oc(C, N, m) || Po, re = function(Se, le, S) {
        for (var w, O = Oe(Oe({}, le), { className: void 0, theme: S }), U = 0; U < Se.length; U += 1) {
          var F = Io(w = Se[U]) ? w(O) : w;
          for (var X in F) O[X] = X === "className" ? go(O[X], F[X]) : X === "style" ? Oe(Oe({}, O[X]), F[X]) : F[X];
        }
        return le.className && (O.className = go(O.className, le.className)), O;
      }(j, C, V), ue = re.as || P, pe = {};
      for (var W in re) re[W] === void 0 || W[0] === "$" || W === "as" || W === "theme" && re.theme === V || (W === "forwardedAs" ? pe.as = re.forwardedAs : oe && !oe(W, ue) || (pe[W] = re[W], oe || process.env.NODE_ENV !== "development" || Aa(W) || rn.has(W) || !at.has(ue) || (rn.add(W), console.warn('styled-components: it looks like an unknown prop "'.concat(W, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ie = function(Se, le) {
        var S = tn(), w = Se.generateAndInjectStyles(le, S.styleSheet, S.stylis);
        return process.env.NODE_ENV !== "production" && Hs(w), w;
      }(_, re);
      process.env.NODE_ENV !== "production" && B.warnTooManyClasses && B.warnTooManyClasses(ie);
      var xe = go(k, y);
      return ie && (xe += " " + ie), re.className && (xe += " " + re.className), pe[Vi(ue) && !at.has(ue) ? "class" : "className"] = xe, pe.ref = x, Sa(ue, pe);
    }($, D, A);
  }
  E.displayName = u;
  var $ = Ze.forwardRef(E);
  return $.attrs = v, $.componentStyle = L, $.displayName = u, $.shouldForwardProp = h, $.foldedComponentIds = i ? go(s.foldedComponentIds, s.styledComponentId) : "", $.styledComponentId = g, $.target = i ? s.target : t, Object.defineProperty($, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = i ? function(A) {
      for (var B = [], C = 1; C < arguments.length; C++) B[C - 1] = arguments[C];
      for (var x = 0, j = B; x < j.length; x++) lt(A, j[x], !0);
      return A;
    }({}, s.defaultProps, D) : D;
  } }), process.env.NODE_ENV !== "production" && (ec(u, g), $.warnTooManyClasses = /* @__PURE__ */ function(D, A) {
    var B = {}, C = !1;
    return function(x) {
      if (!C && (B[x] = !0, Object.keys(B).length >= 200)) {
        var j = A ? ' with the id of "'.concat(A, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(D).concat(j, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), C = !0, B = {};
      }
    };
  }(u, g)), It($, function() {
    return ".".concat($.styledComponentId);
  }), n && Hn($, t, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), $;
}
function an(t, e) {
  for (var o = [t[0]], i = 0, s = e.length; i < s; i += 1) o.push(e[i], t[i + 1]);
  return o;
}
var cn = function(t) {
  return Object.assign(t, { isCss: !0 });
};
function Fc(t) {
  for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
  if (Io(t) || Oo(t)) return cn(mo(an(Ai, Co([t], e, !0))));
  var i = t;
  return e.length === 0 && i.length === 1 && typeof i[0] == "string" ? mo(i) : cn(mo(an(i, e)));
}
function ut(t, e, o) {
  if (o === void 0 && (o = Po), !e) throw No(1, e);
  var i = function(s) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    return t(e, o, Fc.apply(void 0, Co([s], n, !1)));
  };
  return i.attrs = function(s) {
    return ut(t, e, Oe(Oe({}, o), { attrs: Array.prototype.concat(o.attrs, s).filter(Boolean) }));
  }, i.withConfig = function(s) {
    return ut(t, e, Oe(Oe({}, o), s));
  }, i;
}
var Gn = function(t) {
  return ut(Mc, t);
}, G = Gn;
at.forEach(function(t) {
  G[t] = Gn(t);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var ni = "__sc-".concat(_o, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[ni] || (window[ni] = 0), window[ni] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[ni] += 1);
const Dc = G.div`
  width: ${({ $width: t }) => t || "500px"};
  padding-top: 40px;
  position: relative;
`, Rc = "data:image/svg+xml,%3c!--%20justify.svg%20--%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20stroke-width='2'%20stroke='currentColor'%20fill='none'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cline%20x1='4'%20y1='6'%20x2='20'%20y2='6'%20/%3e%3cline%20x1='4'%20y1='10'%20x2='20'%20y2='10'%20/%3e%3cline%20x1='4'%20y1='14'%20x2='20'%20y2='14'%20/%3e%3cline%20x1='4'%20y1='18'%20x2='20'%20y2='18'%20/%3e%3c/svg%3e", $c = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20stroke-width='2'%20stroke='%2306b6d4'%20fill='none'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cline%20x1='4'%20y1='6'%20x2='20'%20y2='6'%20/%3e%3cline%20x1='4'%20y1='10'%20x2='20'%20y2='10'%20/%3e%3cline%20x1='4'%20y1='14'%20x2='20'%20y2='14'%20/%3e%3cline%20x1='4'%20y1='18'%20x2='20'%20y2='18'%20/%3e%3c/svg%3e", Hc = G.div`
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: ${({ $align: t }) => t === "justify" ? "24px 24px" : "auto"};
  background-position: ${({ $align: t }) => {
  switch (t) {
    case "left":
      return "1px -292px";
    case "center":
      return "1px -334px";
    case "right":
      return "1px -376px";
    default:
      return "center";
  }
}};

  background-image: ${({ $align: t }) => t === "justify" ? `url(${Rc})` : "url('https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png')"};

  cursor: pointer;

  &:hover {
    background-image: ${({ $align: t }) => {
  if (t === "justify")
    return `url(${$c})`;
}};
    background-position: ${({ $align: t }) => {
  switch (t) {
    case "left":
      return "-29px -292px";
    case "center":
      return "-29px -334px";
    case "right":
      return "-29px -376px";
    default:
      return "center";
  }
}};
  }
`, ln = (t) => {
  let e;
  const o = /* @__PURE__ */ new Set(), i = (l, d) => {
    const u = typeof l == "function" ? l(e) : l;
    if (!Object.is(u, e)) {
      const g = e;
      e = d ?? (typeof u != "object" || u === null) ? u : Object.assign({}, e, u), o.forEach((v) => v(e, g));
    }
  }, s = () => e, a = { setState: i, getState: s, getInitialState: () => c, subscribe: (l) => (o.add(l), () => o.delete(l)) }, c = e = t(i, s, a);
  return a;
}, zc = (t) => t ? ln(t) : ln, Uc = (t) => t;
function qc(t, e = Uc) {
  const o = Ze.useSyncExternalStore(
    t.subscribe,
    () => e(t.getState()),
    () => e(t.getInitialState())
  );
  return Ze.useDebugValue(o), o;
}
const dn = (t) => {
  const e = zc(t), o = (i) => qc(e, i);
  return Object.assign(o, e), o;
}, Wc = (t) => t ? dn(t) : dn, Ae = Wc((t) => ({
  editor: null,
  activeModal: null,
  align: "left",
  currentBlockIndex: -1,
  setEditor: (e) => t({ editor: e }),
  toggleModal: (e) => {
    t((o) => ({
      activeModal: o.activeModal === e ? null : e
    }));
  },
  closeModal: () => t({ activeModal: null }),
  setAlign: (e) => t({ align: e }),
  setCurrentBlockIndex: (e) => t({ currentBlockIndex: e })
})), Yi = ["left", "center", "right", "justify"];
function Vc() {
  const { editor: t, align: e, setAlign: o } = Ae(), i = (n) => {
    const a = (Yi.indexOf(n) + 1) % Yi.length;
    return Yi[a];
  }, s = async () => {
    if (!t) return;
    const n = t.blocks.getCurrentBlockIndex(), a = (await t.save()).blocks[n], c = document.querySelector(
      `.ce-block[data-id="${a.id}"] .ce-paragraph`
    ), l = (c == null ? void 0 : c.style.textAlign) || "left", d = i(l);
    c && (c.style.textAlign = d), t.caret.setToBlock(n, "end"), o(d);
  };
  return /* @__PURE__ */ R.jsx(Hc, { $align: e, onClick: s });
}
const Kc = G.div`
  width: 25px;
  height: 25px;
  background-position: 1px -211px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png");
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-position: -29px -211px;
  }
`;
function Yc({ handleBlockIndex: t }) {
  const { toggleModal: e } = Ae(), o = () => {
    t(), e("emoji");
  };
  return /* @__PURE__ */ R.jsx(Kc, { className: "modal-active-icon", onClick: o });
}
const Gc = G.div`
  width: 25px;
  height: 25px;
  background-position: 1px -124px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png");
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-position: -29px -124px;
  }
`, Xc = G.input`
  display: none;
`;
function Jc({
  handleBlockIndex: t,
  addBlock: e,
  onUpload: o
}) {
  const i = to(null), s = async (r) => {
    var c;
    const a = (c = r.target.files) == null ? void 0 : c[0];
    if (a) {
      let l;
      if (o) {
        const { name: d, path: u } = await o(a);
        l = {
          url: u,
          name: d,
          type: a.type,
          size: a.size
        };
      } else
        l = {
          url: URL.createObjectURL(a),
          name: a.name,
          type: a.type,
          size: a.size
        };
      e("file", l);
    }
    i.current && (i.current.value = "");
  }, n = () => {
    var r;
    t(), (r = i.current) == null || r.click();
  };
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    /* @__PURE__ */ R.jsx(Gc, { onClick: n }),
    /* @__PURE__ */ R.jsx(
      Xc,
      {
        type: "file",
        ref: i,
        onChange: s,
        style: { display: "none" }
      }
    )
  ] });
}
const Zc = G.div``, Qc = G.div`
  width: 25px;
  height: 25px;
  background-position: 1px -40px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png");
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-position: -29px -40px;
  }
`;
function el({
  handleBlockIndex: t,
  addBlock: e,
  onUpload: o
}) {
  const i = to(null), s = async (a) => {
    const c = a.target.files;
    if (c) {
      const l = await Promise.all(
        Array.from(c).map(async (g) => {
          let v, h;
          if (o) {
            const L = await o(g);
            v = L.path, h = L.name;
          } else
            v = URL.createObjectURL(g), h = g.name;
          const { width: f, height: I } = await n(v);
          return {
            url: v,
            name: h,
            type: g.type,
            size: g.size,
            width: f,
            height: I,
            ratio: f / I
          };
        })
      ), d = Math.ceil(l.length / 3), u = Array.from(
        { length: d },
        () => []
      );
      l.forEach((g, v) => {
        const h = v % d;
        u[h].push(g);
      }), u.forEach((g) => {
        e("unifiedImage", { images: g });
      });
    }
    i.current && (i.current.value = "");
  }, n = (a) => new Promise((c) => {
    const l = new Image();
    l.onload = () => c({ width: l.width, height: l.height }), l.src = a;
  }), r = () => {
    var a;
    t(), (a = i.current) == null || a.click();
  };
  return /* @__PURE__ */ R.jsxs(Zc, { children: [
    /* @__PURE__ */ R.jsx(Qc, { onClick: r }),
    /* @__PURE__ */ R.jsx(
      "input",
      {
        type: "file",
        accept: "image/*",
        ref: i,
        onChange: s,
        multiple: !0,
        style: { display: "none" }
      }
    )
  ] });
}
const ol = G.div``, il = G.div`
  width: 25px;
  height: 25px;
  background-position: 1px 2px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png");
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-position: -29px 2px;
  }
`, tl = G.input`
  display: none;
`;
function sl({
  handleBlockIndex: t,
  addBlock: e,
  onUpload: o
}) {
  const i = to(null), s = async (a) => {
    var l;
    const c = (l = a.target.files) == null ? void 0 : l[0];
    if (c) {
      let d, u;
      if (o) {
        const { name: f, path: I } = await o(c);
        d = I, u = f;
      } else
        d = URL.createObjectURL(c), u = c.name;
      const { width: g, height: v } = await n(d), h = {
        url: d,
        name: u,
        size: c.size,
        type: c.type,
        width: g,
        height: v,
        ratio: g / v
      };
      e("unifiedImage", { images: [h] });
    }
    i.current && (i.current.value = "");
  }, n = (a) => new Promise((c) => {
    const l = new Image();
    l.onload = () => c({ width: l.width, height: l.height }), l.src = a;
  }), r = () => {
    var a;
    t(), (a = i.current) == null || a.click();
  };
  return /* @__PURE__ */ R.jsxs(ol, { children: [
    /* @__PURE__ */ R.jsx(il, { onClick: r }),
    /* @__PURE__ */ R.jsx(
      tl,
      {
        type: "file",
        accept: "image/*",
        ref: i,
        onChange: s,
        style: { display: "none" }
      }
    )
  ] });
}
const nl = G.div`
  width: 25px;
  height: 25px;
  background-position: 1px -250px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png");
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-position: -29px -250px;
  }
`;
function rl({ handleBlockIndex: t }) {
  const { toggleModal: e } = Ae(), o = () => {
    t(), e("line");
  };
  return /* @__PURE__ */ R.jsx(nl, { className: "modal-active-icon", onClick: o });
}
G.div`
  width: 25px;
  height: 25px;
  background-position: 1px -168px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png");
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-position: -29px -168px;
  }
`;
const al = G.div``, cl = G.div`
  width: 25px;
  height: 25px;
  background-position: 1px -83px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/btn_side.v2.png");
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-position: -29px -83px;
  }
`, ll = G.input`
  display: none;
  pointer-events: none;
`;
function dl({
  handleBlockIndex: t,
  addBlock: e,
  onUpload: o
}) {
  const i = to(null), s = async (r) => {
    var l;
    const a = (l = r.target.files) == null ? void 0 : l[0];
    if (!a) return;
    let c;
    if (o) {
      const d = await o(a);
      c = {
        url: d.path,
        name: d.name,
        type: a.type,
        size: a.size
      };
    } else {
      const d = new FileReader();
      c = {
        url: await new Promise((g) => {
          d.onloadend = () => g(d.result), d.readAsDataURL(a);
        }),
        name: a.name,
        type: a.type,
        size: a.size
      };
    }
    e("video", c), i.current && (i.current.value = "");
  }, n = () => {
    var r;
    t(), (r = i.current) == null || r.click();
  };
  return /* @__PURE__ */ R.jsxs(al, { children: [
    /* @__PURE__ */ R.jsx(cl, { onClick: n }),
    /* @__PURE__ */ R.jsx(
      ll,
      {
        type: "file",
        accept: "video/*",
        ref: i,
        onChange: s,
        style: { display: "none" }
      }
    )
  ] });
}
const Me = {
  primary: "#00c6be",
  black_primary: "#333333",
  white_primary: "#FFF",
  light_gray: "#eee",
  medium_gray: "#909090",
  dark_gray: "#666",
  modal_border_color: "#d9d9d9"
}, ul = G.div`
  width: 358px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`, gl = G.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(13, 22px);
  grid-gap: 6px;
`, pl = G.li`
  cursor: pointer;
  list-style: none;
`, hl = G.div`
  display: flex;
  justify-content: center;
`, un = G.button`
  margin: 0 5px;
  padding: 8px 12px;
  color: ${Me.white_primary};
  background-color: ${Me.primary};
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: ${Me.light_gray};
    cursor: not-allowed;
  }
`, ml = [
  {
    emoji: "😀",
    description: "grinning face",
    category: "Smileys & Emotion",
    aliases: [
      "grinning"
    ],
    tags: [
      "smile",
      "happy"
    ],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😃",
    description: "grinning face with big eyes",
    category: "Smileys & Emotion",
    aliases: [
      "smiley"
    ],
    tags: [
      "happy",
      "joy",
      "haha"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😄",
    description: "grinning face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: [
      "smile"
    ],
    tags: [
      "happy",
      "joy",
      "laugh",
      "pleased"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😁",
    description: "beaming face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: [
      "grin"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😆",
    description: "grinning squinting face",
    category: "Smileys & Emotion",
    aliases: [
      "laughing",
      "satisfied"
    ],
    tags: [
      "happy",
      "haha"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😅",
    description: "grinning face with sweat",
    category: "Smileys & Emotion",
    aliases: [
      "sweat_smile"
    ],
    tags: [
      "hot"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤣",
    description: "rolling on the floor laughing",
    category: "Smileys & Emotion",
    aliases: [
      "rofl"
    ],
    tags: [
      "lol",
      "laughing"
    ],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "😂",
    description: "face with tears of joy",
    category: "Smileys & Emotion",
    aliases: [
      "joy"
    ],
    tags: [
      "tears"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙂",
    description: "slightly smiling face",
    category: "Smileys & Emotion",
    aliases: [
      "slightly_smiling_face"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🙃",
    description: "upside-down face",
    category: "Smileys & Emotion",
    aliases: [
      "upside_down_face"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🫠",
    description: "melting face",
    category: "Smileys & Emotion",
    aliases: [
      "melting_face"
    ],
    tags: [
      "sarcasm",
      "dread"
    ],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "😉",
    description: "winking face",
    category: "Smileys & Emotion",
    aliases: [
      "wink"
    ],
    tags: [
      "flirt"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😊",
    description: "smiling face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: [
      "blush"
    ],
    tags: [
      "proud"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😇",
    description: "smiling face with halo",
    category: "Smileys & Emotion",
    aliases: [
      "innocent"
    ],
    tags: [
      "angel"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥰",
    description: "smiling face with hearts",
    category: "Smileys & Emotion",
    aliases: [
      "smiling_face_with_three_hearts"
    ],
    tags: [
      "love"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😍",
    description: "smiling face with heart-eyes",
    category: "Smileys & Emotion",
    aliases: [
      "heart_eyes"
    ],
    tags: [
      "love",
      "crush"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤩",
    description: "star-struck",
    category: "Smileys & Emotion",
    aliases: [
      "star_struck"
    ],
    tags: [
      "eyes"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😘",
    description: "face blowing a kiss",
    category: "Smileys & Emotion",
    aliases: [
      "kissing_heart"
    ],
    tags: [
      "flirt"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😗",
    description: "kissing face",
    category: "Smileys & Emotion",
    aliases: [
      "kissing"
    ],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "☺️",
    description: "smiling face",
    category: "Smileys & Emotion",
    aliases: [
      "relaxed"
    ],
    tags: [
      "blush",
      "pleased"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "😚",
    description: "kissing face with closed eyes",
    category: "Smileys & Emotion",
    aliases: [
      "kissing_closed_eyes"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😙",
    description: "kissing face with smiling eyes",
    category: "Smileys & Emotion",
    aliases: [
      "kissing_smiling_eyes"
    ],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "🥲",
    description: "smiling face with tear",
    category: "Smileys & Emotion",
    aliases: [
      "smiling_face_with_tear"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "😋",
    description: "face savoring food",
    category: "Smileys & Emotion",
    aliases: [
      "yum"
    ],
    tags: [
      "tongue",
      "lick"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😛",
    description: "face with tongue",
    category: "Smileys & Emotion",
    aliases: [
      "stuck_out_tongue"
    ],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😜",
    description: "winking face with tongue",
    category: "Smileys & Emotion",
    aliases: [
      "stuck_out_tongue_winking_eye"
    ],
    tags: [
      "prank",
      "silly"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤪",
    description: "zany face",
    category: "Smileys & Emotion",
    aliases: [
      "zany_face"
    ],
    tags: [
      "goofy",
      "wacky"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😝",
    description: "squinting face with tongue",
    category: "Smileys & Emotion",
    aliases: [
      "stuck_out_tongue_closed_eyes"
    ],
    tags: [
      "prank"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤑",
    description: "money-mouth face",
    category: "Smileys & Emotion",
    aliases: [
      "money_mouth_face"
    ],
    tags: [
      "rich"
    ],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤗",
    description: "smiling face with open hands",
    category: "Smileys & Emotion",
    aliases: [
      "hugs"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤭",
    description: "face with hand over mouth",
    category: "Smileys & Emotion",
    aliases: [
      "hand_over_mouth"
    ],
    tags: [
      "quiet",
      "whoops"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🫢",
    description: "face with open eyes and hand over mouth",
    category: "Smileys & Emotion",
    aliases: [
      "face_with_open_eyes_and_hand_over_mouth"
    ],
    tags: [
      "gasp",
      "shock"
    ],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🫣",
    description: "face with peeking eye",
    category: "Smileys & Emotion",
    aliases: [
      "face_with_peeking_eye"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🤫",
    description: "shushing face",
    category: "Smileys & Emotion",
    aliases: [
      "shushing_face"
    ],
    tags: [
      "silence",
      "quiet"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🤔",
    description: "thinking face",
    category: "Smileys & Emotion",
    aliases: [
      "thinking"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🫡",
    description: "saluting face",
    category: "Smileys & Emotion",
    aliases: [
      "saluting_face"
    ],
    tags: [
      "respect"
    ],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🤐",
    description: "zipper-mouth face",
    category: "Smileys & Emotion",
    aliases: [
      "zipper_mouth_face"
    ],
    tags: [
      "silence",
      "hush"
    ],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤨",
    description: "face with raised eyebrow",
    category: "Smileys & Emotion",
    aliases: [
      "raised_eyebrow"
    ],
    tags: [
      "suspicious"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😐",
    description: "neutral face",
    category: "Smileys & Emotion",
    aliases: [
      "neutral_face"
    ],
    tags: [
      "meh"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😑",
    description: "expressionless face",
    category: "Smileys & Emotion",
    aliases: [
      "expressionless"
    ],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😶",
    description: "face without mouth",
    category: "Smileys & Emotion",
    aliases: [
      "no_mouth"
    ],
    tags: [
      "mute",
      "silence"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫥",
    description: "dotted line face",
    category: "Smileys & Emotion",
    aliases: [
      "dotted_line_face"
    ],
    tags: [
      "invisible"
    ],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "😶‍🌫️",
    description: "face in clouds",
    category: "Smileys & Emotion",
    aliases: [
      "face_in_clouds"
    ],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0"
  },
  {
    emoji: "😏",
    description: "smirking face",
    category: "Smileys & Emotion",
    aliases: [
      "smirk"
    ],
    tags: [
      "smug"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😒",
    description: "unamused face",
    category: "Smileys & Emotion",
    aliases: [
      "unamused"
    ],
    tags: [
      "meh"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙄",
    description: "face with rolling eyes",
    category: "Smileys & Emotion",
    aliases: [
      "roll_eyes"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "😬",
    description: "grimacing face",
    category: "Smileys & Emotion",
    aliases: [
      "grimacing"
    ],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😮‍💨",
    description: "face exhaling",
    category: "Smileys & Emotion",
    aliases: [
      "face_exhaling"
    ],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0"
  },
  {
    emoji: "🤥",
    description: "lying face",
    category: "Smileys & Emotion",
    aliases: [
      "lying_face"
    ],
    tags: [
      "liar"
    ],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🫨",
    description: "shaking face",
    category: "Smileys & Emotion",
    aliases: [
      "shaking_face"
    ],
    tags: [
      "shock"
    ],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "😌",
    description: "relieved face",
    category: "Smileys & Emotion",
    aliases: [
      "relieved"
    ],
    tags: [
      "whew"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😔",
    description: "pensive face",
    category: "Smileys & Emotion",
    aliases: [
      "pensive"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😪",
    description: "sleepy face",
    category: "Smileys & Emotion",
    aliases: [
      "sleepy"
    ],
    tags: [
      "tired"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤤",
    description: "drooling face",
    category: "Smileys & Emotion",
    aliases: [
      "drooling_face"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "😴",
    description: "sleeping face",
    category: "Smileys & Emotion",
    aliases: [
      "sleeping"
    ],
    tags: [
      "zzz"
    ],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😷",
    description: "face with medical mask",
    category: "Smileys & Emotion",
    aliases: [
      "mask"
    ],
    tags: [
      "sick",
      "ill"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤒",
    description: "face with thermometer",
    category: "Smileys & Emotion",
    aliases: [
      "face_with_thermometer"
    ],
    tags: [
      "sick"
    ],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤕",
    description: "face with head-bandage",
    category: "Smileys & Emotion",
    aliases: [
      "face_with_head_bandage"
    ],
    tags: [
      "hurt"
    ],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🤢",
    description: "nauseated face",
    category: "Smileys & Emotion",
    aliases: [
      "nauseated_face"
    ],
    tags: [
      "sick",
      "barf",
      "disgusted"
    ],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🤮",
    description: "face vomiting",
    category: "Smileys & Emotion",
    aliases: [
      "vomiting_face"
    ],
    tags: [
      "barf",
      "sick"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🤧",
    description: "sneezing face",
    category: "Smileys & Emotion",
    aliases: [
      "sneezing_face"
    ],
    tags: [
      "achoo",
      "sick"
    ],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥵",
    description: "hot face",
    category: "Smileys & Emotion",
    aliases: [
      "hot_face"
    ],
    tags: [
      "heat",
      "sweating"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥶",
    description: "cold face",
    category: "Smileys & Emotion",
    aliases: [
      "cold_face"
    ],
    tags: [
      "freezing",
      "ice"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥴",
    description: "woozy face",
    category: "Smileys & Emotion",
    aliases: [
      "woozy_face"
    ],
    tags: [
      "groggy"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😵",
    description: "face with crossed-out eyes",
    category: "Smileys & Emotion",
    aliases: [
      "dizzy_face"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😵‍💫",
    description: "face with spiral eyes",
    category: "Smileys & Emotion",
    aliases: [
      "face_with_spiral_eyes"
    ],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0"
  },
  {
    emoji: "🤯",
    description: "exploding head",
    category: "Smileys & Emotion",
    aliases: [
      "exploding_head"
    ],
    tags: [
      "mind",
      "blown"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🤠",
    description: "cowboy hat face",
    category: "Smileys & Emotion",
    aliases: [
      "cowboy_hat_face"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥳",
    description: "partying face",
    category: "Smileys & Emotion",
    aliases: [
      "partying_face"
    ],
    tags: [
      "celebration",
      "birthday"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥸",
    description: "disguised face",
    category: "Smileys & Emotion",
    aliases: [
      "disguised_face"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "😎",
    description: "smiling face with sunglasses",
    category: "Smileys & Emotion",
    aliases: [
      "sunglasses"
    ],
    tags: [
      "cool"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤓",
    description: "nerd face",
    category: "Smileys & Emotion",
    aliases: [
      "nerd_face"
    ],
    tags: [
      "geek",
      "glasses"
    ],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🧐",
    description: "face with monocle",
    category: "Smileys & Emotion",
    aliases: [
      "monocle_face"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😕",
    description: "confused face",
    category: "Smileys & Emotion",
    aliases: [
      "confused"
    ],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "🫤",
    description: "face with diagonal mouth",
    category: "Smileys & Emotion",
    aliases: [
      "face_with_diagonal_mouth"
    ],
    tags: [
      "confused"
    ],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "😟",
    description: "worried face",
    category: "Smileys & Emotion",
    aliases: [
      "worried"
    ],
    tags: [
      "nervous"
    ],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "🙁",
    description: "slightly frowning face",
    category: "Smileys & Emotion",
    aliases: [
      "slightly_frowning_face"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "☹️",
    description: "frowning face",
    category: "Smileys & Emotion",
    aliases: [
      "frowning_face"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "😮",
    description: "face with open mouth",
    category: "Smileys & Emotion",
    aliases: [
      "open_mouth"
    ],
    tags: [
      "surprise",
      "impressed",
      "wow"
    ],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😯",
    description: "hushed face",
    category: "Smileys & Emotion",
    aliases: [
      "hushed"
    ],
    tags: [
      "silence",
      "speechless"
    ],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😲",
    description: "astonished face",
    category: "Smileys & Emotion",
    aliases: [
      "astonished"
    ],
    tags: [
      "amazed",
      "gasp"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😳",
    description: "flushed face",
    category: "Smileys & Emotion",
    aliases: [
      "flushed"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥺",
    description: "pleading face",
    category: "Smileys & Emotion",
    aliases: [
      "pleading_face"
    ],
    tags: [
      "puppy",
      "eyes"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥹",
    description: "face holding back tears",
    category: "Smileys & Emotion",
    aliases: [
      "face_holding_back_tears"
    ],
    tags: [
      "tears",
      "gratitude"
    ],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "😦",
    description: "frowning face with open mouth",
    category: "Smileys & Emotion",
    aliases: [
      "frowning"
    ],
    tags: [],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😧",
    description: "anguished face",
    category: "Smileys & Emotion",
    aliases: [
      "anguished"
    ],
    tags: [
      "stunned"
    ],
    unicode_version: "6.1",
    ios_version: "6.0"
  },
  {
    emoji: "😨",
    description: "fearful face",
    category: "Smileys & Emotion",
    aliases: [
      "fearful"
    ],
    tags: [
      "scared",
      "shocked",
      "oops"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😰",
    description: "anxious face with sweat",
    category: "Smileys & Emotion",
    aliases: [
      "cold_sweat"
    ],
    tags: [
      "nervous"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😥",
    description: "sad but relieved face",
    category: "Smileys & Emotion",
    aliases: [
      "disappointed_relieved"
    ],
    tags: [
      "phew",
      "sweat",
      "nervous"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😢",
    description: "crying face",
    category: "Smileys & Emotion",
    aliases: [
      "cry"
    ],
    tags: [
      "sad",
      "tear"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😭",
    description: "loudly crying face",
    category: "Smileys & Emotion",
    aliases: [
      "sob"
    ],
    tags: [
      "sad",
      "cry",
      "bawling"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😱",
    description: "face screaming in fear",
    category: "Smileys & Emotion",
    aliases: [
      "scream"
    ],
    tags: [
      "horror",
      "shocked"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😖",
    description: "confounded face",
    category: "Smileys & Emotion",
    aliases: [
      "confounded"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😣",
    description: "persevering face",
    category: "Smileys & Emotion",
    aliases: [
      "persevere"
    ],
    tags: [
      "struggling"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😞",
    description: "disappointed face",
    category: "Smileys & Emotion",
    aliases: [
      "disappointed"
    ],
    tags: [
      "sad"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😓",
    description: "downcast face with sweat",
    category: "Smileys & Emotion",
    aliases: [
      "sweat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😩",
    description: "weary face",
    category: "Smileys & Emotion",
    aliases: [
      "weary"
    ],
    tags: [
      "tired"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😫",
    description: "tired face",
    category: "Smileys & Emotion",
    aliases: [
      "tired_face"
    ],
    tags: [
      "upset",
      "whine"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥱",
    description: "yawning face",
    category: "Smileys & Emotion",
    aliases: [
      "yawning_face"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "😤",
    description: "face with steam from nose",
    category: "Smileys & Emotion",
    aliases: [
      "triumph"
    ],
    tags: [
      "smug"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😡",
    description: "enraged face",
    category: "Smileys & Emotion",
    aliases: [
      "rage",
      "pout"
    ],
    tags: [
      "angry"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😠",
    description: "angry face",
    category: "Smileys & Emotion",
    aliases: [
      "angry"
    ],
    tags: [
      "mad",
      "annoyed"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤬",
    description: "face with symbols on mouth",
    category: "Smileys & Emotion",
    aliases: [
      "cursing_face"
    ],
    tags: [
      "foul"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "😈",
    description: "smiling face with horns",
    category: "Smileys & Emotion",
    aliases: [
      "smiling_imp"
    ],
    tags: [
      "devil",
      "evil",
      "horns"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👿",
    description: "angry face with horns",
    category: "Smileys & Emotion",
    aliases: [
      "imp"
    ],
    tags: [
      "angry",
      "devil",
      "evil",
      "horns"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💀",
    description: "skull",
    category: "Smileys & Emotion",
    aliases: [
      "skull"
    ],
    tags: [
      "dead",
      "danger",
      "poison"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☠️",
    description: "skull and crossbones",
    category: "Smileys & Emotion",
    aliases: [
      "skull_and_crossbones"
    ],
    tags: [
      "danger",
      "pirate"
    ],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "💩",
    description: "pile of poo",
    category: "Smileys & Emotion",
    aliases: [
      "hankey",
      "poop",
      "shit"
    ],
    tags: [
      "crap"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤡",
    description: "clown face",
    category: "Smileys & Emotion",
    aliases: [
      "clown_face"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "👹",
    description: "ogre",
    category: "Smileys & Emotion",
    aliases: [
      "japanese_ogre"
    ],
    tags: [
      "monster"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👺",
    description: "goblin",
    category: "Smileys & Emotion",
    aliases: [
      "japanese_goblin"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👻",
    description: "ghost",
    category: "Smileys & Emotion",
    aliases: [
      "ghost"
    ],
    tags: [
      "halloween"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👽",
    description: "alien",
    category: "Smileys & Emotion",
    aliases: [
      "alien"
    ],
    tags: [
      "ufo"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👾",
    description: "alien monster",
    category: "Smileys & Emotion",
    aliases: [
      "space_invader"
    ],
    tags: [
      "game",
      "retro"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤖",
    description: "robot",
    category: "Smileys & Emotion",
    aliases: [
      "robot"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "😺",
    description: "grinning cat",
    category: "Smileys & Emotion",
    aliases: [
      "smiley_cat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😸",
    description: "grinning cat with smiling eyes",
    category: "Smileys & Emotion",
    aliases: [
      "smile_cat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😹",
    description: "cat with tears of joy",
    category: "Smileys & Emotion",
    aliases: [
      "joy_cat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😻",
    description: "smiling cat with heart-eyes",
    category: "Smileys & Emotion",
    aliases: [
      "heart_eyes_cat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😼",
    description: "cat with wry smile",
    category: "Smileys & Emotion",
    aliases: [
      "smirk_cat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😽",
    description: "kissing cat",
    category: "Smileys & Emotion",
    aliases: [
      "kissing_cat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙀",
    description: "weary cat",
    category: "Smileys & Emotion",
    aliases: [
      "scream_cat"
    ],
    tags: [
      "horror"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😿",
    description: "crying cat",
    category: "Smileys & Emotion",
    aliases: [
      "crying_cat_face"
    ],
    tags: [
      "sad",
      "tear"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "😾",
    description: "pouting cat",
    category: "Smileys & Emotion",
    aliases: [
      "pouting_cat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙈",
    description: "see-no-evil monkey",
    category: "Smileys & Emotion",
    aliases: [
      "see_no_evil"
    ],
    tags: [
      "monkey",
      "blind",
      "ignore"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙉",
    description: "hear-no-evil monkey",
    category: "Smileys & Emotion",
    aliases: [
      "hear_no_evil"
    ],
    tags: [
      "monkey",
      "deaf"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🙊",
    description: "speak-no-evil monkey",
    category: "Smileys & Emotion",
    aliases: [
      "speak_no_evil"
    ],
    tags: [
      "monkey",
      "mute",
      "hush"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💌",
    description: "love letter",
    category: "Smileys & Emotion",
    aliases: [
      "love_letter"
    ],
    tags: [
      "email",
      "envelope"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💘",
    description: "heart with arrow",
    category: "Smileys & Emotion",
    aliases: [
      "cupid"
    ],
    tags: [
      "love",
      "heart"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💝",
    description: "heart with ribbon",
    category: "Smileys & Emotion",
    aliases: [
      "gift_heart"
    ],
    tags: [
      "chocolates"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💖",
    description: "sparkling heart",
    category: "Smileys & Emotion",
    aliases: [
      "sparkling_heart"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💗",
    description: "growing heart",
    category: "Smileys & Emotion",
    aliases: [
      "heartpulse"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💓",
    description: "beating heart",
    category: "Smileys & Emotion",
    aliases: [
      "heartbeat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💞",
    description: "revolving hearts",
    category: "Smileys & Emotion",
    aliases: [
      "revolving_hearts"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💕",
    description: "two hearts",
    category: "Smileys & Emotion",
    aliases: [
      "two_hearts"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💟",
    description: "heart decoration",
    category: "Smileys & Emotion",
    aliases: [
      "heart_decoration"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❣️",
    description: "heart exclamation",
    category: "Smileys & Emotion",
    aliases: [
      "heavy_heart_exclamation"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "💔",
    description: "broken heart",
    category: "Smileys & Emotion",
    aliases: [
      "broken_heart"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❤️‍🔥",
    description: "heart on fire",
    category: "Smileys & Emotion",
    aliases: [
      "heart_on_fire"
    ],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0"
  },
  {
    emoji: "❤️‍🩹",
    description: "mending heart",
    category: "Smileys & Emotion",
    aliases: [
      "mending_heart"
    ],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0"
  },
  {
    emoji: "❤️",
    description: "red heart",
    category: "Smileys & Emotion",
    aliases: [
      "heart"
    ],
    tags: [
      "love"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🩷",
    description: "pink heart",
    category: "Smileys & Emotion",
    aliases: [
      "pink_heart"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🧡",
    description: "orange heart",
    category: "Smileys & Emotion",
    aliases: [
      "orange_heart"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "💛",
    description: "yellow heart",
    category: "Smileys & Emotion",
    aliases: [
      "yellow_heart"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💚",
    description: "green heart",
    category: "Smileys & Emotion",
    aliases: [
      "green_heart"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💙",
    description: "blue heart",
    category: "Smileys & Emotion",
    aliases: [
      "blue_heart"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🩵",
    description: "light blue heart",
    category: "Smileys & Emotion",
    aliases: [
      "light_blue_heart"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "💜",
    description: "purple heart",
    category: "Smileys & Emotion",
    aliases: [
      "purple_heart"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤎",
    description: "brown heart",
    category: "Smileys & Emotion",
    aliases: [
      "brown_heart"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🖤",
    description: "black heart",
    category: "Smileys & Emotion",
    aliases: [
      "black_heart"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🩶",
    description: "grey heart",
    category: "Smileys & Emotion",
    aliases: [
      "grey_heart"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🤍",
    description: "white heart",
    category: "Smileys & Emotion",
    aliases: [
      "white_heart"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "💋",
    description: "kiss mark",
    category: "Smileys & Emotion",
    aliases: [
      "kiss"
    ],
    tags: [
      "lipstick"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💯",
    description: "hundred points",
    category: "Smileys & Emotion",
    aliases: [
      "100"
    ],
    tags: [
      "score",
      "perfect"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💢",
    description: "anger symbol",
    category: "Smileys & Emotion",
    aliases: [
      "anger"
    ],
    tags: [
      "angry"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💥",
    description: "collision",
    category: "Smileys & Emotion",
    aliases: [
      "boom",
      "collision"
    ],
    tags: [
      "explode"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💫",
    description: "dizzy",
    category: "Smileys & Emotion",
    aliases: [
      "dizzy"
    ],
    tags: [
      "star"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💦",
    description: "sweat droplets",
    category: "Smileys & Emotion",
    aliases: [
      "sweat_drops"
    ],
    tags: [
      "water",
      "workout"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💨",
    description: "dashing away",
    category: "Smileys & Emotion",
    aliases: [
      "dash"
    ],
    tags: [
      "wind",
      "blow",
      "fast"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕳️",
    description: "hole",
    category: "Smileys & Emotion",
    aliases: [
      "hole"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "💬",
    description: "speech balloon",
    category: "Smileys & Emotion",
    aliases: [
      "speech_balloon"
    ],
    tags: [
      "comment"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👁️‍🗨️",
    description: "eye in speech bubble",
    category: "Smileys & Emotion",
    aliases: [
      "eye_speech_bubble"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🗨️",
    description: "left speech bubble",
    category: "Smileys & Emotion",
    aliases: [
      "left_speech_bubble"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🗯️",
    description: "right anger bubble",
    category: "Smileys & Emotion",
    aliases: [
      "right_anger_bubble"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "💭",
    description: "thought balloon",
    category: "Smileys & Emotion",
    aliases: [
      "thought_balloon"
    ],
    tags: [
      "thinking"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💤",
    description: "ZZZ",
    category: "Smileys & Emotion",
    aliases: [
      "zzz"
    ],
    tags: [
      "sleeping"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👋",
    description: "waving hand",
    category: "People & Body",
    aliases: [
      "wave"
    ],
    tags: [
      "goodbye"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🤚",
    description: "raised back of hand",
    category: "People & Body",
    aliases: [
      "raised_back_of_hand"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🖐️",
    description: "hand with fingers splayed",
    category: "People & Body",
    aliases: [
      "raised_hand_with_fingers_splayed"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: !0
  },
  {
    emoji: "✋",
    description: "raised hand",
    category: "People & Body",
    aliases: [
      "hand",
      "raised_hand"
    ],
    tags: [
      "highfive",
      "stop"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🖖",
    description: "vulcan salute",
    category: "People & Body",
    aliases: [
      "vulcan_salute"
    ],
    tags: [
      "prosper",
      "spock"
    ],
    unicode_version: "7.0",
    ios_version: "8.3",
    skin_tones: !0
  },
  {
    emoji: "🫱",
    description: "rightwards hand",
    category: "People & Body",
    aliases: [
      "rightwards_hand"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4",
    skin_tones: !0
  },
  {
    emoji: "🫲",
    description: "leftwards hand",
    category: "People & Body",
    aliases: [
      "leftwards_hand"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4",
    skin_tones: !0
  },
  {
    emoji: "🫳",
    description: "palm down hand",
    category: "People & Body",
    aliases: [
      "palm_down_hand"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4",
    skin_tones: !0
  },
  {
    emoji: "🫴",
    description: "palm up hand",
    category: "People & Body",
    aliases: [
      "palm_up_hand"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4",
    skin_tones: !0
  },
  {
    emoji: "🫷",
    description: "leftwards pushing hand",
    category: "People & Body",
    aliases: [
      "leftwards_pushing_hand"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4",
    skin_tones: !0
  },
  {
    emoji: "🫸",
    description: "rightwards pushing hand",
    category: "People & Body",
    aliases: [
      "rightwards_pushing_hand"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4",
    skin_tones: !0
  },
  {
    emoji: "👌",
    description: "OK hand",
    category: "People & Body",
    aliases: [
      "ok_hand"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🤌",
    description: "pinched fingers",
    category: "People & Body",
    aliases: [
      "pinched_fingers"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "🤏",
    description: "pinching hand",
    category: "People & Body",
    aliases: [
      "pinching_hand"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "✌️",
    description: "victory hand",
    category: "People & Body",
    aliases: [
      "v"
    ],
    tags: [
      "victory",
      "peace"
    ],
    unicode_version: "",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🤞",
    description: "crossed fingers",
    category: "People & Body",
    aliases: [
      "crossed_fingers"
    ],
    tags: [
      "luck",
      "hopeful"
    ],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🫰",
    description: "hand with index finger and thumb crossed",
    category: "People & Body",
    aliases: [
      "hand_with_index_finger_and_thumb_crossed"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4",
    skin_tones: !0
  },
  {
    emoji: "🤟",
    description: "love-you gesture",
    category: "People & Body",
    aliases: [
      "love_you_gesture"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🤘",
    description: "sign of the horns",
    category: "People & Body",
    aliases: [
      "metal"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1",
    skin_tones: !0
  },
  {
    emoji: "🤙",
    description: "call me hand",
    category: "People & Body",
    aliases: [
      "call_me_hand"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👈",
    description: "backhand index pointing left",
    category: "People & Body",
    aliases: [
      "point_left"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👉",
    description: "backhand index pointing right",
    category: "People & Body",
    aliases: [
      "point_right"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👆",
    description: "backhand index pointing up",
    category: "People & Body",
    aliases: [
      "point_up_2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🖕",
    description: "middle finger",
    category: "People & Body",
    aliases: [
      "middle_finger",
      "fu"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: !0
  },
  {
    emoji: "👇",
    description: "backhand index pointing down",
    category: "People & Body",
    aliases: [
      "point_down"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "☝️",
    description: "index pointing up",
    category: "People & Body",
    aliases: [
      "point_up"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🫵",
    description: "index pointing at the viewer",
    category: "People & Body",
    aliases: [
      "index_pointing_at_the_viewer"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4",
    skin_tones: !0
  },
  {
    emoji: "👍",
    description: "thumbs up",
    category: "People & Body",
    aliases: [
      "+1",
      "thumbsup"
    ],
    tags: [
      "approve",
      "ok"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👎",
    description: "thumbs down",
    category: "People & Body",
    aliases: [
      "-1",
      "thumbsdown"
    ],
    tags: [
      "disapprove",
      "bury"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "✊",
    description: "raised fist",
    category: "People & Body",
    aliases: [
      "fist_raised",
      "fist"
    ],
    tags: [
      "power"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👊",
    description: "oncoming fist",
    category: "People & Body",
    aliases: [
      "fist_oncoming",
      "facepunch",
      "punch"
    ],
    tags: [
      "attack"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🤛",
    description: "left-facing fist",
    category: "People & Body",
    aliases: [
      "fist_left"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤜",
    description: "right-facing fist",
    category: "People & Body",
    aliases: [
      "fist_right"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👏",
    description: "clapping hands",
    category: "People & Body",
    aliases: [
      "clap"
    ],
    tags: [
      "praise",
      "applause"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🙌",
    description: "raising hands",
    category: "People & Body",
    aliases: [
      "raised_hands"
    ],
    tags: [
      "hooray"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🫶",
    description: "heart hands",
    category: "People & Body",
    aliases: [
      "heart_hands"
    ],
    tags: [
      "love"
    ],
    unicode_version: "14.0",
    ios_version: "15.4",
    skin_tones: !0
  },
  {
    emoji: "👐",
    description: "open hands",
    category: "People & Body",
    aliases: [
      "open_hands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🤲",
    description: "palms up together",
    category: "People & Body",
    aliases: [
      "palms_up_together"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🤝",
    description: "handshake",
    category: "People & Body",
    aliases: [
      "handshake"
    ],
    tags: [
      "deal"
    ],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🙏",
    description: "folded hands",
    category: "People & Body",
    aliases: [
      "pray"
    ],
    tags: [
      "please",
      "hope",
      "wish"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "✍️",
    description: "writing hand",
    category: "People & Body",
    aliases: [
      "writing_hand"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1",
    skin_tones: !0
  },
  {
    emoji: "💅",
    description: "nail polish",
    category: "People & Body",
    aliases: [
      "nail_care"
    ],
    tags: [
      "beauty",
      "manicure"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🤳",
    description: "selfie",
    category: "People & Body",
    aliases: [
      "selfie"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "💪",
    description: "flexed biceps",
    category: "People & Body",
    aliases: [
      "muscle"
    ],
    tags: [
      "flex",
      "bicep",
      "strong",
      "workout"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🦾",
    description: "mechanical arm",
    category: "People & Body",
    aliases: [
      "mechanical_arm"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦿",
    description: "mechanical leg",
    category: "People & Body",
    aliases: [
      "mechanical_leg"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦵",
    description: "leg",
    category: "People & Body",
    aliases: [
      "leg"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🦶",
    description: "foot",
    category: "People & Body",
    aliases: [
      "foot"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👂",
    description: "ear",
    category: "People & Body",
    aliases: [
      "ear"
    ],
    tags: [
      "hear",
      "sound",
      "listen"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🦻",
    description: "ear with hearing aid",
    category: "People & Body",
    aliases: [
      "ear_with_hearing_aid"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "👃",
    description: "nose",
    category: "People & Body",
    aliases: [
      "nose"
    ],
    tags: [
      "smell"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🧠",
    description: "brain",
    category: "People & Body",
    aliases: [
      "brain"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🫀",
    description: "anatomical heart",
    category: "People & Body",
    aliases: [
      "anatomical_heart"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🫁",
    description: "lungs",
    category: "People & Body",
    aliases: [
      "lungs"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦷",
    description: "tooth",
    category: "People & Body",
    aliases: [
      "tooth"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦴",
    description: "bone",
    category: "People & Body",
    aliases: [
      "bone"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "👀",
    description: "eyes",
    category: "People & Body",
    aliases: [
      "eyes"
    ],
    tags: [
      "look",
      "see",
      "watch"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👁️",
    description: "eye",
    category: "People & Body",
    aliases: [
      "eye"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "👅",
    description: "tongue",
    category: "People & Body",
    aliases: [
      "tongue"
    ],
    tags: [
      "taste"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👄",
    description: "mouth",
    category: "People & Body",
    aliases: [
      "lips"
    ],
    tags: [
      "kiss"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫦",
    description: "biting lip",
    category: "People & Body",
    aliases: [
      "biting_lip"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "👶",
    description: "baby",
    category: "People & Body",
    aliases: [
      "baby"
    ],
    tags: [
      "child",
      "newborn"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🧒",
    description: "child",
    category: "People & Body",
    aliases: [
      "child"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👦",
    description: "boy",
    category: "People & Body",
    aliases: [
      "boy"
    ],
    tags: [
      "child"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👧",
    description: "girl",
    category: "People & Body",
    aliases: [
      "girl"
    ],
    tags: [
      "child"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🧑",
    description: "person",
    category: "People & Body",
    aliases: [
      "adult"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👱",
    description: "person: blond hair",
    category: "People & Body",
    aliases: [
      "blond_haired_person"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👨",
    description: "man",
    category: "People & Body",
    aliases: [
      "man"
    ],
    tags: [
      "mustache",
      "father",
      "dad"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🧔",
    description: "person: beard",
    category: "People & Body",
    aliases: [
      "bearded_person"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧔‍♂️",
    description: "man: beard",
    category: "People & Body",
    aliases: [
      "man_beard"
    ],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "🧔‍♀️",
    description: "woman: beard",
    category: "People & Body",
    aliases: [
      "woman_beard"
    ],
    tags: [],
    unicode_version: "13.1",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "👨‍🦰",
    description: "man: red hair",
    category: "People & Body",
    aliases: [
      "red_haired_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👨‍🦱",
    description: "man: curly hair",
    category: "People & Body",
    aliases: [
      "curly_haired_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👨‍🦳",
    description: "man: white hair",
    category: "People & Body",
    aliases: [
      "white_haired_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👨‍🦲",
    description: "man: bald",
    category: "People & Body",
    aliases: [
      "bald_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👩",
    description: "woman",
    category: "People & Body",
    aliases: [
      "woman"
    ],
    tags: [
      "girls"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👩‍🦰",
    description: "woman: red hair",
    category: "People & Body",
    aliases: [
      "red_haired_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦰",
    description: "person: red hair",
    category: "People & Body",
    aliases: [
      "person_red_hair"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🦱",
    description: "woman: curly hair",
    category: "People & Body",
    aliases: [
      "curly_haired_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦱",
    description: "person: curly hair",
    category: "People & Body",
    aliases: [
      "person_curly_hair"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🦳",
    description: "woman: white hair",
    category: "People & Body",
    aliases: [
      "white_haired_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦳",
    description: "person: white hair",
    category: "People & Body",
    aliases: [
      "person_white_hair"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🦲",
    description: "woman: bald",
    category: "People & Body",
    aliases: [
      "bald_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦲",
    description: "person: bald",
    category: "People & Body",
    aliases: [
      "person_bald"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👱‍♀️",
    description: "woman: blond hair",
    category: "People & Body",
    aliases: [
      "blond_haired_woman",
      "blonde_woman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "👱‍♂️",
    description: "man: blond hair",
    category: "People & Body",
    aliases: [
      "blond_haired_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧓",
    description: "older person",
    category: "People & Body",
    aliases: [
      "older_adult"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👴",
    description: "old man",
    category: "People & Body",
    aliases: [
      "older_man"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👵",
    description: "old woman",
    category: "People & Body",
    aliases: [
      "older_woman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🙍",
    description: "person frowning",
    category: "People & Body",
    aliases: [
      "frowning_person"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🙍‍♂️",
    description: "man frowning",
    category: "People & Body",
    aliases: [
      "frowning_man"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🙍‍♀️",
    description: "woman frowning",
    category: "People & Body",
    aliases: [
      "frowning_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🙎",
    description: "person pouting",
    category: "People & Body",
    aliases: [
      "pouting_face"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🙎‍♂️",
    description: "man pouting",
    category: "People & Body",
    aliases: [
      "pouting_man"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🙎‍♀️",
    description: "woman pouting",
    category: "People & Body",
    aliases: [
      "pouting_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🙅",
    description: "person gesturing NO",
    category: "People & Body",
    aliases: [
      "no_good"
    ],
    tags: [
      "stop",
      "halt",
      "denied"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🙅‍♂️",
    description: "man gesturing NO",
    category: "People & Body",
    aliases: [
      "no_good_man",
      "ng_man"
    ],
    tags: [
      "stop",
      "halt",
      "denied"
    ],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🙅‍♀️",
    description: "woman gesturing NO",
    category: "People & Body",
    aliases: [
      "no_good_woman",
      "ng_woman"
    ],
    tags: [
      "stop",
      "halt",
      "denied"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🙆",
    description: "person gesturing OK",
    category: "People & Body",
    aliases: [
      "ok_person"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🙆‍♂️",
    description: "man gesturing OK",
    category: "People & Body",
    aliases: [
      "ok_man"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🙆‍♀️",
    description: "woman gesturing OK",
    category: "People & Body",
    aliases: [
      "ok_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "💁",
    description: "person tipping hand",
    category: "People & Body",
    aliases: [
      "tipping_hand_person",
      "information_desk_person"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "💁‍♂️",
    description: "man tipping hand",
    category: "People & Body",
    aliases: [
      "tipping_hand_man",
      "sassy_man"
    ],
    tags: [
      "information"
    ],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "💁‍♀️",
    description: "woman tipping hand",
    category: "People & Body",
    aliases: [
      "tipping_hand_woman",
      "sassy_woman"
    ],
    tags: [
      "information"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🙋",
    description: "person raising hand",
    category: "People & Body",
    aliases: [
      "raising_hand"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🙋‍♂️",
    description: "man raising hand",
    category: "People & Body",
    aliases: [
      "raising_hand_man"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🙋‍♀️",
    description: "woman raising hand",
    category: "People & Body",
    aliases: [
      "raising_hand_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧏",
    description: "deaf person",
    category: "People & Body",
    aliases: [
      "deaf_person"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🧏‍♂️",
    description: "deaf man",
    category: "People & Body",
    aliases: [
      "deaf_man"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🧏‍♀️",
    description: "deaf woman",
    category: "People & Body",
    aliases: [
      "deaf_woman"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🙇",
    description: "person bowing",
    category: "People & Body",
    aliases: [
      "bow"
    ],
    tags: [
      "respect",
      "thanks"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🙇‍♂️",
    description: "man bowing",
    category: "People & Body",
    aliases: [
      "bowing_man"
    ],
    tags: [
      "respect",
      "thanks"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🙇‍♀️",
    description: "woman bowing",
    category: "People & Body",
    aliases: [
      "bowing_woman"
    ],
    tags: [
      "respect",
      "thanks"
    ],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🤦",
    description: "person facepalming",
    category: "People & Body",
    aliases: [
      "facepalm"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🤦‍♂️",
    description: "man facepalming",
    category: "People & Body",
    aliases: [
      "man_facepalming"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤦‍♀️",
    description: "woman facepalming",
    category: "People & Body",
    aliases: [
      "woman_facepalming"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤷",
    description: "person shrugging",
    category: "People & Body",
    aliases: [
      "shrug"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🤷‍♂️",
    description: "man shrugging",
    category: "People & Body",
    aliases: [
      "man_shrugging"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤷‍♀️",
    description: "woman shrugging",
    category: "People & Body",
    aliases: [
      "woman_shrugging"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍⚕️",
    description: "health worker",
    category: "People & Body",
    aliases: [
      "health_worker"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍⚕️",
    description: "man health worker",
    category: "People & Body",
    aliases: [
      "man_health_worker"
    ],
    tags: [
      "doctor",
      "nurse"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍⚕️",
    description: "woman health worker",
    category: "People & Body",
    aliases: [
      "woman_health_worker"
    ],
    tags: [
      "doctor",
      "nurse"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🎓",
    description: "student",
    category: "People & Body",
    aliases: [
      "student"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🎓",
    description: "man student",
    category: "People & Body",
    aliases: [
      "man_student"
    ],
    tags: [
      "graduation"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🎓",
    description: "woman student",
    category: "People & Body",
    aliases: [
      "woman_student"
    ],
    tags: [
      "graduation"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🏫",
    description: "teacher",
    category: "People & Body",
    aliases: [
      "teacher"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🏫",
    description: "man teacher",
    category: "People & Body",
    aliases: [
      "man_teacher"
    ],
    tags: [
      "school",
      "professor"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🏫",
    description: "woman teacher",
    category: "People & Body",
    aliases: [
      "woman_teacher"
    ],
    tags: [
      "school",
      "professor"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍⚖️",
    description: "judge",
    category: "People & Body",
    aliases: [
      "judge"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍⚖️",
    description: "man judge",
    category: "People & Body",
    aliases: [
      "man_judge"
    ],
    tags: [
      "justice"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍⚖️",
    description: "woman judge",
    category: "People & Body",
    aliases: [
      "woman_judge"
    ],
    tags: [
      "justice"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🌾",
    description: "farmer",
    category: "People & Body",
    aliases: [
      "farmer"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🌾",
    description: "man farmer",
    category: "People & Body",
    aliases: [
      "man_farmer"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🌾",
    description: "woman farmer",
    category: "People & Body",
    aliases: [
      "woman_farmer"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🍳",
    description: "cook",
    category: "People & Body",
    aliases: [
      "cook"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🍳",
    description: "man cook",
    category: "People & Body",
    aliases: [
      "man_cook"
    ],
    tags: [
      "chef"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🍳",
    description: "woman cook",
    category: "People & Body",
    aliases: [
      "woman_cook"
    ],
    tags: [
      "chef"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🔧",
    description: "mechanic",
    category: "People & Body",
    aliases: [
      "mechanic"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🔧",
    description: "man mechanic",
    category: "People & Body",
    aliases: [
      "man_mechanic"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🔧",
    description: "woman mechanic",
    category: "People & Body",
    aliases: [
      "woman_mechanic"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🏭",
    description: "factory worker",
    category: "People & Body",
    aliases: [
      "factory_worker"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🏭",
    description: "man factory worker",
    category: "People & Body",
    aliases: [
      "man_factory_worker"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🏭",
    description: "woman factory worker",
    category: "People & Body",
    aliases: [
      "woman_factory_worker"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍💼",
    description: "office worker",
    category: "People & Body",
    aliases: [
      "office_worker"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍💼",
    description: "man office worker",
    category: "People & Body",
    aliases: [
      "man_office_worker"
    ],
    tags: [
      "business"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍💼",
    description: "woman office worker",
    category: "People & Body",
    aliases: [
      "woman_office_worker"
    ],
    tags: [
      "business"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🔬",
    description: "scientist",
    category: "People & Body",
    aliases: [
      "scientist"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🔬",
    description: "man scientist",
    category: "People & Body",
    aliases: [
      "man_scientist"
    ],
    tags: [
      "research"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🔬",
    description: "woman scientist",
    category: "People & Body",
    aliases: [
      "woman_scientist"
    ],
    tags: [
      "research"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍💻",
    description: "technologist",
    category: "People & Body",
    aliases: [
      "technologist"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍💻",
    description: "man technologist",
    category: "People & Body",
    aliases: [
      "man_technologist"
    ],
    tags: [
      "coder"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍💻",
    description: "woman technologist",
    category: "People & Body",
    aliases: [
      "woman_technologist"
    ],
    tags: [
      "coder"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🎤",
    description: "singer",
    category: "People & Body",
    aliases: [
      "singer"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🎤",
    description: "man singer",
    category: "People & Body",
    aliases: [
      "man_singer"
    ],
    tags: [
      "rockstar"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🎤",
    description: "woman singer",
    category: "People & Body",
    aliases: [
      "woman_singer"
    ],
    tags: [
      "rockstar"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🎨",
    description: "artist",
    category: "People & Body",
    aliases: [
      "artist"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🎨",
    description: "man artist",
    category: "People & Body",
    aliases: [
      "man_artist"
    ],
    tags: [
      "painter"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🎨",
    description: "woman artist",
    category: "People & Body",
    aliases: [
      "woman_artist"
    ],
    tags: [
      "painter"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍✈️",
    description: "pilot",
    category: "People & Body",
    aliases: [
      "pilot"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍✈️",
    description: "man pilot",
    category: "People & Body",
    aliases: [
      "man_pilot"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍✈️",
    description: "woman pilot",
    category: "People & Body",
    aliases: [
      "woman_pilot"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🚀",
    description: "astronaut",
    category: "People & Body",
    aliases: [
      "astronaut"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🚀",
    description: "man astronaut",
    category: "People & Body",
    aliases: [
      "man_astronaut"
    ],
    tags: [
      "space"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🚀",
    description: "woman astronaut",
    category: "People & Body",
    aliases: [
      "woman_astronaut"
    ],
    tags: [
      "space"
    ],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🚒",
    description: "firefighter",
    category: "People & Body",
    aliases: [
      "firefighter"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🚒",
    description: "man firefighter",
    category: "People & Body",
    aliases: [
      "man_firefighter"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👩‍🚒",
    description: "woman firefighter",
    category: "People & Body",
    aliases: [
      "woman_firefighter"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👮",
    description: "police officer",
    category: "People & Body",
    aliases: [
      "police_officer",
      "cop"
    ],
    tags: [
      "law"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👮‍♂️",
    description: "man police officer",
    category: "People & Body",
    aliases: [
      "policeman"
    ],
    tags: [
      "law",
      "cop"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👮‍♀️",
    description: "woman police officer",
    category: "People & Body",
    aliases: [
      "policewoman"
    ],
    tags: [
      "law",
      "cop"
    ],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🕵️",
    description: "detective",
    category: "People & Body",
    aliases: [
      "detective"
    ],
    tags: [
      "sleuth"
    ],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: !0
  },
  {
    emoji: "🕵️‍♂️",
    description: "man detective",
    category: "People & Body",
    aliases: [
      "male_detective"
    ],
    tags: [
      "sleuth"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🕵️‍♀️",
    description: "woman detective",
    category: "People & Body",
    aliases: [
      "female_detective"
    ],
    tags: [
      "sleuth"
    ],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "💂",
    description: "guard",
    category: "People & Body",
    aliases: [
      "guard"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "💂‍♂️",
    description: "man guard",
    category: "People & Body",
    aliases: [
      "guardsman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "💂‍♀️",
    description: "woman guard",
    category: "People & Body",
    aliases: [
      "guardswoman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🥷",
    description: "ninja",
    category: "People & Body",
    aliases: [
      "ninja"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "👷",
    description: "construction worker",
    category: "People & Body",
    aliases: [
      "construction_worker"
    ],
    tags: [
      "helmet"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👷‍♂️",
    description: "man construction worker",
    category: "People & Body",
    aliases: [
      "construction_worker_man"
    ],
    tags: [
      "helmet"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👷‍♀️",
    description: "woman construction worker",
    category: "People & Body",
    aliases: [
      "construction_worker_woman"
    ],
    tags: [
      "helmet"
    ],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🫅",
    description: "person with crown",
    category: "People & Body",
    aliases: [
      "person_with_crown"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4",
    skin_tones: !0
  },
  {
    emoji: "🤴",
    description: "prince",
    category: "People & Body",
    aliases: [
      "prince"
    ],
    tags: [
      "crown",
      "royal"
    ],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "👸",
    description: "princess",
    category: "People & Body",
    aliases: [
      "princess"
    ],
    tags: [
      "crown",
      "royal"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👳",
    description: "person wearing turban",
    category: "People & Body",
    aliases: [
      "person_with_turban"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👳‍♂️",
    description: "man wearing turban",
    category: "People & Body",
    aliases: [
      "man_with_turban"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👳‍♀️",
    description: "woman wearing turban",
    category: "People & Body",
    aliases: [
      "woman_with_turban"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "👲",
    description: "person with skullcap",
    category: "People & Body",
    aliases: [
      "man_with_gua_pi_mao"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🧕",
    description: "woman with headscarf",
    category: "People & Body",
    aliases: [
      "woman_with_headscarf"
    ],
    tags: [
      "hijab"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🤵",
    description: "person in tuxedo",
    category: "People & Body",
    aliases: [
      "person_in_tuxedo"
    ],
    tags: [
      "groom",
      "marriage",
      "wedding"
    ],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤵‍♂️",
    description: "man in tuxedo",
    category: "People & Body",
    aliases: [
      "man_in_tuxedo"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "🤵‍♀️",
    description: "woman in tuxedo",
    category: "People & Body",
    aliases: [
      "woman_in_tuxedo"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "👰",
    description: "person with veil",
    category: "People & Body",
    aliases: [
      "person_with_veil"
    ],
    tags: [
      "marriage",
      "wedding"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👰‍♂️",
    description: "man with veil",
    category: "People & Body",
    aliases: [
      "man_with_veil"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "👰‍♀️",
    description: "woman with veil",
    category: "People & Body",
    aliases: [
      "woman_with_veil",
      "bride_with_veil"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "🤰",
    description: "pregnant woman",
    category: "People & Body",
    aliases: [
      "pregnant_woman"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🫃",
    description: "pregnant man",
    category: "People & Body",
    aliases: [
      "pregnant_man"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4",
    skin_tones: !0
  },
  {
    emoji: "🫄",
    description: "pregnant person",
    category: "People & Body",
    aliases: [
      "pregnant_person"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4",
    skin_tones: !0
  },
  {
    emoji: "🤱",
    description: "breast-feeding",
    category: "People & Body",
    aliases: [
      "breast_feeding"
    ],
    tags: [
      "nursing"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👩‍🍼",
    description: "woman feeding baby",
    category: "People & Body",
    aliases: [
      "woman_feeding_baby"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "👨‍🍼",
    description: "man feeding baby",
    category: "People & Body",
    aliases: [
      "man_feeding_baby"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🍼",
    description: "person feeding baby",
    category: "People & Body",
    aliases: [
      "person_feeding_baby"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "👼",
    description: "baby angel",
    category: "People & Body",
    aliases: [
      "angel"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🎅",
    description: "Santa Claus",
    category: "People & Body",
    aliases: [
      "santa"
    ],
    tags: [
      "christmas"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🤶",
    description: "Mrs. Claus",
    category: "People & Body",
    aliases: [
      "mrs_claus"
    ],
    tags: [
      "santa"
    ],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🎄",
    description: "mx claus",
    category: "People & Body",
    aliases: [
      "mx_claus"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0",
    skin_tones: !0
  },
  {
    emoji: "🦸",
    description: "superhero",
    category: "People & Body",
    aliases: [
      "superhero"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🦸‍♂️",
    description: "man superhero",
    category: "People & Body",
    aliases: [
      "superhero_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🦸‍♀️",
    description: "woman superhero",
    category: "People & Body",
    aliases: [
      "superhero_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🦹",
    description: "supervillain",
    category: "People & Body",
    aliases: [
      "supervillain"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🦹‍♂️",
    description: "man supervillain",
    category: "People & Body",
    aliases: [
      "supervillain_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🦹‍♀️",
    description: "woman supervillain",
    category: "People & Body",
    aliases: [
      "supervillain_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧙",
    description: "mage",
    category: "People & Body",
    aliases: [
      "mage"
    ],
    tags: [
      "wizard"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧙‍♂️",
    description: "man mage",
    category: "People & Body",
    aliases: [
      "mage_man"
    ],
    tags: [
      "wizard"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧙‍♀️",
    description: "woman mage",
    category: "People & Body",
    aliases: [
      "mage_woman"
    ],
    tags: [
      "wizard"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧚",
    description: "fairy",
    category: "People & Body",
    aliases: [
      "fairy"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧚‍♂️",
    description: "man fairy",
    category: "People & Body",
    aliases: [
      "fairy_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧚‍♀️",
    description: "woman fairy",
    category: "People & Body",
    aliases: [
      "fairy_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧛",
    description: "vampire",
    category: "People & Body",
    aliases: [
      "vampire"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧛‍♂️",
    description: "man vampire",
    category: "People & Body",
    aliases: [
      "vampire_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧛‍♀️",
    description: "woman vampire",
    category: "People & Body",
    aliases: [
      "vampire_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧜",
    description: "merperson",
    category: "People & Body",
    aliases: [
      "merperson"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧜‍♂️",
    description: "merman",
    category: "People & Body",
    aliases: [
      "merman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧜‍♀️",
    description: "mermaid",
    category: "People & Body",
    aliases: [
      "mermaid"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧝",
    description: "elf",
    category: "People & Body",
    aliases: [
      "elf"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧝‍♂️",
    description: "man elf",
    category: "People & Body",
    aliases: [
      "elf_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧝‍♀️",
    description: "woman elf",
    category: "People & Body",
    aliases: [
      "elf_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧞",
    description: "genie",
    category: "People & Body",
    aliases: [
      "genie"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧞‍♂️",
    description: "man genie",
    category: "People & Body",
    aliases: [
      "genie_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧞‍♀️",
    description: "woman genie",
    category: "People & Body",
    aliases: [
      "genie_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧟",
    description: "zombie",
    category: "People & Body",
    aliases: [
      "zombie"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧟‍♂️",
    description: "man zombie",
    category: "People & Body",
    aliases: [
      "zombie_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧟‍♀️",
    description: "woman zombie",
    category: "People & Body",
    aliases: [
      "zombie_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧌",
    description: "troll",
    category: "People & Body",
    aliases: [
      "troll"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "💆",
    description: "person getting massage",
    category: "People & Body",
    aliases: [
      "massage"
    ],
    tags: [
      "spa"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "💆‍♂️",
    description: "man getting massage",
    category: "People & Body",
    aliases: [
      "massage_man"
    ],
    tags: [
      "spa"
    ],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "💆‍♀️",
    description: "woman getting massage",
    category: "People & Body",
    aliases: [
      "massage_woman"
    ],
    tags: [
      "spa"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "💇",
    description: "person getting haircut",
    category: "People & Body",
    aliases: [
      "haircut"
    ],
    tags: [
      "beauty"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "💇‍♂️",
    description: "man getting haircut",
    category: "People & Body",
    aliases: [
      "haircut_man"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "💇‍♀️",
    description: "woman getting haircut",
    category: "People & Body",
    aliases: [
      "haircut_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🚶",
    description: "person walking",
    category: "People & Body",
    aliases: [
      "walking"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🚶‍♂️",
    description: "man walking",
    category: "People & Body",
    aliases: [
      "walking_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🚶‍♀️",
    description: "woman walking",
    category: "People & Body",
    aliases: [
      "walking_woman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🧍",
    description: "person standing",
    category: "People & Body",
    aliases: [
      "standing_person"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🧍‍♂️",
    description: "man standing",
    category: "People & Body",
    aliases: [
      "standing_man"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🧍‍♀️",
    description: "woman standing",
    category: "People & Body",
    aliases: [
      "standing_woman"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🧎",
    description: "person kneeling",
    category: "People & Body",
    aliases: [
      "kneeling_person"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🧎‍♂️",
    description: "man kneeling",
    category: "People & Body",
    aliases: [
      "kneeling_man"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🧎‍♀️",
    description: "woman kneeling",
    category: "People & Body",
    aliases: [
      "kneeling_woman"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦯",
    description: "person with white cane",
    category: "People & Body",
    aliases: [
      "person_with_probing_cane"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🦯",
    description: "man with white cane",
    category: "People & Body",
    aliases: [
      "man_with_probing_cane"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "👩‍🦯",
    description: "woman with white cane",
    category: "People & Body",
    aliases: [
      "woman_with_probing_cane"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦼",
    description: "person in motorized wheelchair",
    category: "People & Body",
    aliases: [
      "person_in_motorized_wheelchair"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🦼",
    description: "man in motorized wheelchair",
    category: "People & Body",
    aliases: [
      "man_in_motorized_wheelchair"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "👩‍🦼",
    description: "woman in motorized wheelchair",
    category: "People & Body",
    aliases: [
      "woman_in_motorized_wheelchair"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🦽",
    description: "person in manual wheelchair",
    category: "People & Body",
    aliases: [
      "person_in_manual_wheelchair"
    ],
    tags: [],
    unicode_version: "12.1",
    ios_version: "13.2",
    skin_tones: !0
  },
  {
    emoji: "👨‍🦽",
    description: "man in manual wheelchair",
    category: "People & Body",
    aliases: [
      "man_in_manual_wheelchair"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "👩‍🦽",
    description: "woman in manual wheelchair",
    category: "People & Body",
    aliases: [
      "woman_in_manual_wheelchair"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "🏃",
    description: "person running",
    category: "People & Body",
    aliases: [
      "runner",
      "running"
    ],
    tags: [
      "exercise",
      "workout",
      "marathon"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🏃‍♂️",
    description: "man running",
    category: "People & Body",
    aliases: [
      "running_man"
    ],
    tags: [
      "exercise",
      "workout",
      "marathon"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🏃‍♀️",
    description: "woman running",
    category: "People & Body",
    aliases: [
      "running_woman"
    ],
    tags: [
      "exercise",
      "workout",
      "marathon"
    ],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "💃",
    description: "woman dancing",
    category: "People & Body",
    aliases: [
      "woman_dancing",
      "dancer"
    ],
    tags: [
      "dress"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🕺",
    description: "man dancing",
    category: "People & Body",
    aliases: [
      "man_dancing"
    ],
    tags: [
      "dancer"
    ],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🕴️",
    description: "person in suit levitating",
    category: "People & Body",
    aliases: [
      "business_suit_levitating"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: !0
  },
  {
    emoji: "👯",
    description: "people with bunny ears",
    category: "People & Body",
    aliases: [
      "dancers"
    ],
    tags: [
      "bunny"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👯‍♂️",
    description: "men with bunny ears",
    category: "People & Body",
    aliases: [
      "dancing_men"
    ],
    tags: [
      "bunny"
    ],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👯‍♀️",
    description: "women with bunny ears",
    category: "People & Body",
    aliases: [
      "dancing_women"
    ],
    tags: [
      "bunny"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧖",
    description: "person in steamy room",
    category: "People & Body",
    aliases: [
      "sauna_person"
    ],
    tags: [
      "steamy"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧖‍♂️",
    description: "man in steamy room",
    category: "People & Body",
    aliases: [
      "sauna_man"
    ],
    tags: [
      "steamy"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧖‍♀️",
    description: "woman in steamy room",
    category: "People & Body",
    aliases: [
      "sauna_woman"
    ],
    tags: [
      "steamy"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧗",
    description: "person climbing",
    category: "People & Body",
    aliases: [
      "climbing"
    ],
    tags: [
      "bouldering"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧗‍♂️",
    description: "man climbing",
    category: "People & Body",
    aliases: [
      "climbing_man"
    ],
    tags: [
      "bouldering"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧗‍♀️",
    description: "woman climbing",
    category: "People & Body",
    aliases: [
      "climbing_woman"
    ],
    tags: [
      "bouldering"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🤺",
    description: "person fencing",
    category: "People & Body",
    aliases: [
      "person_fencing"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🏇",
    description: "horse racing",
    category: "People & Body",
    aliases: [
      "horse_racing"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "⛷️",
    description: "skier",
    category: "People & Body",
    aliases: [
      "skier"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🏂",
    description: "snowboarder",
    category: "People & Body",
    aliases: [
      "snowboarder"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🏌️",
    description: "person golfing",
    category: "People & Body",
    aliases: [
      "golfing"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: !0
  },
  {
    emoji: "🏌️‍♂️",
    description: "man golfing",
    category: "People & Body",
    aliases: [
      "golfing_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🏌️‍♀️",
    description: "woman golfing",
    category: "People & Body",
    aliases: [
      "golfing_woman"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🏄",
    description: "person surfing",
    category: "People & Body",
    aliases: [
      "surfer"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🏄‍♂️",
    description: "man surfing",
    category: "People & Body",
    aliases: [
      "surfing_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🏄‍♀️",
    description: "woman surfing",
    category: "People & Body",
    aliases: [
      "surfing_woman"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🚣",
    description: "person rowing boat",
    category: "People & Body",
    aliases: [
      "rowboat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🚣‍♂️",
    description: "man rowing boat",
    category: "People & Body",
    aliases: [
      "rowing_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🚣‍♀️",
    description: "woman rowing boat",
    category: "People & Body",
    aliases: [
      "rowing_woman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🏊",
    description: "person swimming",
    category: "People & Body",
    aliases: [
      "swimmer"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🏊‍♂️",
    description: "man swimming",
    category: "People & Body",
    aliases: [
      "swimming_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🏊‍♀️",
    description: "woman swimming",
    category: "People & Body",
    aliases: [
      "swimming_woman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "⛹️",
    description: "person bouncing ball",
    category: "People & Body",
    aliases: [
      "bouncing_ball_person"
    ],
    tags: [
      "basketball"
    ],
    unicode_version: "5.2",
    ios_version: "9.1",
    skin_tones: !0
  },
  {
    emoji: "⛹️‍♂️",
    description: "man bouncing ball",
    category: "People & Body",
    aliases: [
      "bouncing_ball_man",
      "basketball_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "⛹️‍♀️",
    description: "woman bouncing ball",
    category: "People & Body",
    aliases: [
      "bouncing_ball_woman",
      "basketball_woman"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🏋️",
    description: "person lifting weights",
    category: "People & Body",
    aliases: [
      "weight_lifting"
    ],
    tags: [
      "gym",
      "workout"
    ],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: !0
  },
  {
    emoji: "🏋️‍♂️",
    description: "man lifting weights",
    category: "People & Body",
    aliases: [
      "weight_lifting_man"
    ],
    tags: [
      "gym",
      "workout"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🏋️‍♀️",
    description: "woman lifting weights",
    category: "People & Body",
    aliases: [
      "weight_lifting_woman"
    ],
    tags: [
      "gym",
      "workout"
    ],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🚴",
    description: "person biking",
    category: "People & Body",
    aliases: [
      "bicyclist"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🚴‍♂️",
    description: "man biking",
    category: "People & Body",
    aliases: [
      "biking_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🚴‍♀️",
    description: "woman biking",
    category: "People & Body",
    aliases: [
      "biking_woman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🚵",
    description: "person mountain biking",
    category: "People & Body",
    aliases: [
      "mountain_bicyclist"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🚵‍♂️",
    description: "man mountain biking",
    category: "People & Body",
    aliases: [
      "mountain_biking_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🚵‍♀️",
    description: "woman mountain biking",
    category: "People & Body",
    aliases: [
      "mountain_biking_woman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0",
    skin_tones: !0
  },
  {
    emoji: "🤸",
    description: "person cartwheeling",
    category: "People & Body",
    aliases: [
      "cartwheeling"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🤸‍♂️",
    description: "man cartwheeling",
    category: "People & Body",
    aliases: [
      "man_cartwheeling"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤸‍♀️",
    description: "woman cartwheeling",
    category: "People & Body",
    aliases: [
      "woman_cartwheeling"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤼",
    description: "people wrestling",
    category: "People & Body",
    aliases: [
      "wrestling"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🤼‍♂️",
    description: "men wrestling",
    category: "People & Body",
    aliases: [
      "men_wrestling"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🤼‍♀️",
    description: "women wrestling",
    category: "People & Body",
    aliases: [
      "women_wrestling"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🤽",
    description: "person playing water polo",
    category: "People & Body",
    aliases: [
      "water_polo"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🤽‍♂️",
    description: "man playing water polo",
    category: "People & Body",
    aliases: [
      "man_playing_water_polo"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤽‍♀️",
    description: "woman playing water polo",
    category: "People & Body",
    aliases: [
      "woman_playing_water_polo"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤾",
    description: "person playing handball",
    category: "People & Body",
    aliases: [
      "handball_person"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🤾‍♂️",
    description: "man playing handball",
    category: "People & Body",
    aliases: [
      "man_playing_handball"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤾‍♀️",
    description: "woman playing handball",
    category: "People & Body",
    aliases: [
      "woman_playing_handball"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤹",
    description: "person juggling",
    category: "People & Body",
    aliases: [
      "juggling_person"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🤹‍♂️",
    description: "man juggling",
    category: "People & Body",
    aliases: [
      "man_juggling"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🤹‍♀️",
    description: "woman juggling",
    category: "People & Body",
    aliases: [
      "woman_juggling"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2",
    skin_tones: !0
  },
  {
    emoji: "🧘",
    description: "person in lotus position",
    category: "People & Body",
    aliases: [
      "lotus_position"
    ],
    tags: [
      "meditation"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧘‍♂️",
    description: "man in lotus position",
    category: "People & Body",
    aliases: [
      "lotus_position_man"
    ],
    tags: [
      "meditation"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🧘‍♀️",
    description: "woman in lotus position",
    category: "People & Body",
    aliases: [
      "lotus_position_woman"
    ],
    tags: [
      "meditation"
    ],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "🛀",
    description: "person taking bath",
    category: "People & Body",
    aliases: [
      "bath"
    ],
    tags: [
      "shower"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "🛌",
    description: "person in bed",
    category: "People & Body",
    aliases: [
      "sleeping_bed"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1",
    skin_tones: !0
  },
  {
    emoji: "🧑‍🤝‍🧑",
    description: "people holding hands",
    category: "People & Body",
    aliases: [
      "people_holding_hands"
    ],
    tags: [
      "couple",
      "date"
    ],
    unicode_version: "12.0",
    ios_version: "13.0",
    skin_tones: !0
  },
  {
    emoji: "👭",
    description: "women holding hands",
    category: "People & Body",
    aliases: [
      "two_women_holding_hands"
    ],
    tags: [
      "couple",
      "date"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👫",
    description: "woman and man holding hands",
    category: "People & Body",
    aliases: [
      "couple"
    ],
    tags: [
      "date"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👬",
    description: "men holding hands",
    category: "People & Body",
    aliases: [
      "two_men_holding_hands"
    ],
    tags: [
      "couple",
      "date"
    ],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "💏",
    description: "kiss",
    category: "People & Body",
    aliases: [
      "couplekiss"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👩‍❤️‍💋‍👨",
    description: "kiss: woman, man",
    category: "People & Body",
    aliases: [
      "couplekiss_man_woman"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👨‍❤️‍💋‍👨",
    description: "kiss: man, man",
    category: "People & Body",
    aliases: [
      "couplekiss_man_man"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3",
    skin_tones: !0
  },
  {
    emoji: "👩‍❤️‍💋‍👩",
    description: "kiss: woman, woman",
    category: "People & Body",
    aliases: [
      "couplekiss_woman_woman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3",
    skin_tones: !0
  },
  {
    emoji: "💑",
    description: "couple with heart",
    category: "People & Body",
    aliases: [
      "couple_with_heart"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0",
    skin_tones: !0
  },
  {
    emoji: "👩‍❤️‍👨",
    description: "couple with heart: woman, man",
    category: "People & Body",
    aliases: [
      "couple_with_heart_woman_man"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1",
    skin_tones: !0
  },
  {
    emoji: "👨‍❤️‍👨",
    description: "couple with heart: man, man",
    category: "People & Body",
    aliases: [
      "couple_with_heart_man_man"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3",
    skin_tones: !0
  },
  {
    emoji: "👩‍❤️‍👩",
    description: "couple with heart: woman, woman",
    category: "People & Body",
    aliases: [
      "couple_with_heart_woman_woman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3",
    skin_tones: !0
  },
  {
    emoji: "👪",
    description: "family",
    category: "People & Body",
    aliases: [
      "family"
    ],
    tags: [
      "home",
      "parents",
      "child"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👨‍👩‍👦",
    description: "family: man, woman, boy",
    category: "People & Body",
    aliases: [
      "family_man_woman_boy"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "👨‍👩‍👧",
    description: "family: man, woman, girl",
    category: "People & Body",
    aliases: [
      "family_man_woman_girl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    description: "family: man, woman, girl, boy",
    category: "People & Body",
    aliases: [
      "family_man_woman_girl_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👩‍👦‍👦",
    description: "family: man, woman, boy, boy",
    category: "People & Body",
    aliases: [
      "family_man_woman_boy_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👩‍👧‍👧",
    description: "family: man, woman, girl, girl",
    category: "People & Body",
    aliases: [
      "family_man_woman_girl_girl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👨‍👦",
    description: "family: man, man, boy",
    category: "People & Body",
    aliases: [
      "family_man_man_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👨‍👧",
    description: "family: man, man, girl",
    category: "People & Body",
    aliases: [
      "family_man_man_girl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👨‍👧‍👦",
    description: "family: man, man, girl, boy",
    category: "People & Body",
    aliases: [
      "family_man_man_girl_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👨‍👦‍👦",
    description: "family: man, man, boy, boy",
    category: "People & Body",
    aliases: [
      "family_man_man_boy_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👨‍👧‍👧",
    description: "family: man, man, girl, girl",
    category: "People & Body",
    aliases: [
      "family_man_man_girl_girl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👩‍👩‍👦",
    description: "family: woman, woman, boy",
    category: "People & Body",
    aliases: [
      "family_woman_woman_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👩‍👩‍👧",
    description: "family: woman, woman, girl",
    category: "People & Body",
    aliases: [
      "family_woman_woman_girl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👩‍👩‍👧‍👦",
    description: "family: woman, woman, girl, boy",
    category: "People & Body",
    aliases: [
      "family_woman_woman_girl_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👩‍👩‍👦‍👦",
    description: "family: woman, woman, boy, boy",
    category: "People & Body",
    aliases: [
      "family_woman_woman_boy_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👩‍👩‍👧‍👧",
    description: "family: woman, woman, girl, girl",
    category: "People & Body",
    aliases: [
      "family_woman_woman_girl_girl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "👨‍👦",
    description: "family: man, boy",
    category: "People & Body",
    aliases: [
      "family_man_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👨‍👦‍👦",
    description: "family: man, boy, boy",
    category: "People & Body",
    aliases: [
      "family_man_boy_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👨‍👧",
    description: "family: man, girl",
    category: "People & Body",
    aliases: [
      "family_man_girl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👨‍👧‍👦",
    description: "family: man, girl, boy",
    category: "People & Body",
    aliases: [
      "family_man_girl_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👨‍👧‍👧",
    description: "family: man, girl, girl",
    category: "People & Body",
    aliases: [
      "family_man_girl_girl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👩‍👦",
    description: "family: woman, boy",
    category: "People & Body",
    aliases: [
      "family_woman_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👩‍👦‍👦",
    description: "family: woman, boy, boy",
    category: "People & Body",
    aliases: [
      "family_woman_boy_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👩‍👧",
    description: "family: woman, girl",
    category: "People & Body",
    aliases: [
      "family_woman_girl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👩‍👧‍👦",
    description: "family: woman, girl, boy",
    category: "People & Body",
    aliases: [
      "family_woman_girl_boy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "👩‍👧‍👧",
    description: "family: woman, girl, girl",
    category: "People & Body",
    aliases: [
      "family_woman_girl_girl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "🗣️",
    description: "speaking head",
    category: "People & Body",
    aliases: [
      "speaking_head"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "👤",
    description: "bust in silhouette",
    category: "People & Body",
    aliases: [
      "bust_in_silhouette"
    ],
    tags: [
      "user"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👥",
    description: "busts in silhouette",
    category: "People & Body",
    aliases: [
      "busts_in_silhouette"
    ],
    tags: [
      "users",
      "group",
      "team"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫂",
    description: "people hugging",
    category: "People & Body",
    aliases: [
      "people_hugging"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "👣",
    description: "footprints",
    category: "People & Body",
    aliases: [
      "footprints"
    ],
    tags: [
      "feet",
      "tracks"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐵",
    description: "monkey face",
    category: "Animals & Nature",
    aliases: [
      "monkey_face"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐒",
    description: "monkey",
    category: "Animals & Nature",
    aliases: [
      "monkey"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦍",
    description: "gorilla",
    category: "Animals & Nature",
    aliases: [
      "gorilla"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦧",
    description: "orangutan",
    category: "Animals & Nature",
    aliases: [
      "orangutan"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🐶",
    description: "dog face",
    category: "Animals & Nature",
    aliases: [
      "dog"
    ],
    tags: [
      "pet"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐕",
    description: "dog",
    category: "Animals & Nature",
    aliases: [
      "dog2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦮",
    description: "guide dog",
    category: "Animals & Nature",
    aliases: [
      "guide_dog"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🐕‍🦺",
    description: "service dog",
    category: "Animals & Nature",
    aliases: [
      "service_dog"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🐩",
    description: "poodle",
    category: "Animals & Nature",
    aliases: [
      "poodle"
    ],
    tags: [
      "dog"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐺",
    description: "wolf",
    category: "Animals & Nature",
    aliases: [
      "wolf"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦊",
    description: "fox",
    category: "Animals & Nature",
    aliases: [
      "fox_face"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦝",
    description: "raccoon",
    category: "Animals & Nature",
    aliases: [
      "raccoon"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐱",
    description: "cat face",
    category: "Animals & Nature",
    aliases: [
      "cat"
    ],
    tags: [
      "pet"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐈",
    description: "cat",
    category: "Animals & Nature",
    aliases: [
      "cat2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐈‍⬛",
    description: "black cat",
    category: "Animals & Nature",
    aliases: [
      "black_cat"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦁",
    description: "lion",
    category: "Animals & Nature",
    aliases: [
      "lion"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🐯",
    description: "tiger face",
    category: "Animals & Nature",
    aliases: [
      "tiger"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐅",
    description: "tiger",
    category: "Animals & Nature",
    aliases: [
      "tiger2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐆",
    description: "leopard",
    category: "Animals & Nature",
    aliases: [
      "leopard"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐴",
    description: "horse face",
    category: "Animals & Nature",
    aliases: [
      "horse"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫎",
    description: "moose",
    category: "Animals & Nature",
    aliases: [
      "moose"
    ],
    tags: [
      "canada"
    ],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🫏",
    description: "donkey",
    category: "Animals & Nature",
    aliases: [
      "donkey"
    ],
    tags: [
      "mule"
    ],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🐎",
    description: "horse",
    category: "Animals & Nature",
    aliases: [
      "racehorse"
    ],
    tags: [
      "speed"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦄",
    description: "unicorn",
    category: "Animals & Nature",
    aliases: [
      "unicorn"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦓",
    description: "zebra",
    category: "Animals & Nature",
    aliases: [
      "zebra"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦌",
    description: "deer",
    category: "Animals & Nature",
    aliases: [
      "deer"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦬",
    description: "bison",
    category: "Animals & Nature",
    aliases: [
      "bison"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🐮",
    description: "cow face",
    category: "Animals & Nature",
    aliases: [
      "cow"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐂",
    description: "ox",
    category: "Animals & Nature",
    aliases: [
      "ox"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐃",
    description: "water buffalo",
    category: "Animals & Nature",
    aliases: [
      "water_buffalo"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐄",
    description: "cow",
    category: "Animals & Nature",
    aliases: [
      "cow2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐷",
    description: "pig face",
    category: "Animals & Nature",
    aliases: [
      "pig"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐖",
    description: "pig",
    category: "Animals & Nature",
    aliases: [
      "pig2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐗",
    description: "boar",
    category: "Animals & Nature",
    aliases: [
      "boar"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐽",
    description: "pig nose",
    category: "Animals & Nature",
    aliases: [
      "pig_nose"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐏",
    description: "ram",
    category: "Animals & Nature",
    aliases: [
      "ram"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐑",
    description: "ewe",
    category: "Animals & Nature",
    aliases: [
      "sheep"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐐",
    description: "goat",
    category: "Animals & Nature",
    aliases: [
      "goat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐪",
    description: "camel",
    category: "Animals & Nature",
    aliases: [
      "dromedary_camel"
    ],
    tags: [
      "desert"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐫",
    description: "two-hump camel",
    category: "Animals & Nature",
    aliases: [
      "camel"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦙",
    description: "llama",
    category: "Animals & Nature",
    aliases: [
      "llama"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦒",
    description: "giraffe",
    category: "Animals & Nature",
    aliases: [
      "giraffe"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐘",
    description: "elephant",
    category: "Animals & Nature",
    aliases: [
      "elephant"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦣",
    description: "mammoth",
    category: "Animals & Nature",
    aliases: [
      "mammoth"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦏",
    description: "rhinoceros",
    category: "Animals & Nature",
    aliases: [
      "rhinoceros"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦛",
    description: "hippopotamus",
    category: "Animals & Nature",
    aliases: [
      "hippopotamus"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐭",
    description: "mouse face",
    category: "Animals & Nature",
    aliases: [
      "mouse"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐁",
    description: "mouse",
    category: "Animals & Nature",
    aliases: [
      "mouse2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐀",
    description: "rat",
    category: "Animals & Nature",
    aliases: [
      "rat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐹",
    description: "hamster",
    category: "Animals & Nature",
    aliases: [
      "hamster"
    ],
    tags: [
      "pet"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐰",
    description: "rabbit face",
    category: "Animals & Nature",
    aliases: [
      "rabbit"
    ],
    tags: [
      "bunny"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐇",
    description: "rabbit",
    category: "Animals & Nature",
    aliases: [
      "rabbit2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐿️",
    description: "chipmunk",
    category: "Animals & Nature",
    aliases: [
      "chipmunk"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦫",
    description: "beaver",
    category: "Animals & Nature",
    aliases: [
      "beaver"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦔",
    description: "hedgehog",
    category: "Animals & Nature",
    aliases: [
      "hedgehog"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦇",
    description: "bat",
    category: "Animals & Nature",
    aliases: [
      "bat"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🐻",
    description: "bear",
    category: "Animals & Nature",
    aliases: [
      "bear"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐻‍❄️",
    description: "polar bear",
    category: "Animals & Nature",
    aliases: [
      "polar_bear"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🐨",
    description: "koala",
    category: "Animals & Nature",
    aliases: [
      "koala"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐼",
    description: "panda",
    category: "Animals & Nature",
    aliases: [
      "panda_face"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦥",
    description: "sloth",
    category: "Animals & Nature",
    aliases: [
      "sloth"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦦",
    description: "otter",
    category: "Animals & Nature",
    aliases: [
      "otter"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦨",
    description: "skunk",
    category: "Animals & Nature",
    aliases: [
      "skunk"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦘",
    description: "kangaroo",
    category: "Animals & Nature",
    aliases: [
      "kangaroo"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦡",
    description: "badger",
    category: "Animals & Nature",
    aliases: [
      "badger"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐾",
    description: "paw prints",
    category: "Animals & Nature",
    aliases: [
      "feet",
      "paw_prints"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦃",
    description: "turkey",
    category: "Animals & Nature",
    aliases: [
      "turkey"
    ],
    tags: [
      "thanksgiving"
    ],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🐔",
    description: "chicken",
    category: "Animals & Nature",
    aliases: [
      "chicken"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐓",
    description: "rooster",
    category: "Animals & Nature",
    aliases: [
      "rooster"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐣",
    description: "hatching chick",
    category: "Animals & Nature",
    aliases: [
      "hatching_chick"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐤",
    description: "baby chick",
    category: "Animals & Nature",
    aliases: [
      "baby_chick"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐥",
    description: "front-facing baby chick",
    category: "Animals & Nature",
    aliases: [
      "hatched_chick"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐦",
    description: "bird",
    category: "Animals & Nature",
    aliases: [
      "bird"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐧",
    description: "penguin",
    category: "Animals & Nature",
    aliases: [
      "penguin"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕊️",
    description: "dove",
    category: "Animals & Nature",
    aliases: [
      "dove"
    ],
    tags: [
      "peace"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦅",
    description: "eagle",
    category: "Animals & Nature",
    aliases: [
      "eagle"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦆",
    description: "duck",
    category: "Animals & Nature",
    aliases: [
      "duck"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦢",
    description: "swan",
    category: "Animals & Nature",
    aliases: [
      "swan"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦉",
    description: "owl",
    category: "Animals & Nature",
    aliases: [
      "owl"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦤",
    description: "dodo",
    category: "Animals & Nature",
    aliases: [
      "dodo"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪶",
    description: "feather",
    category: "Animals & Nature",
    aliases: [
      "feather"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦩",
    description: "flamingo",
    category: "Animals & Nature",
    aliases: [
      "flamingo"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦚",
    description: "peacock",
    category: "Animals & Nature",
    aliases: [
      "peacock"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦜",
    description: "parrot",
    category: "Animals & Nature",
    aliases: [
      "parrot"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪽",
    description: "wing",
    category: "Animals & Nature",
    aliases: [
      "wing"
    ],
    tags: [
      "fly"
    ],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🐦‍⬛",
    description: "black bird",
    category: "Animals & Nature",
    aliases: [
      "black_bird"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🪿",
    description: "goose",
    category: "Animals & Nature",
    aliases: [
      "goose"
    ],
    tags: [
      "honk"
    ],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🐸",
    description: "frog",
    category: "Animals & Nature",
    aliases: [
      "frog"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐊",
    description: "crocodile",
    category: "Animals & Nature",
    aliases: [
      "crocodile"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐢",
    description: "turtle",
    category: "Animals & Nature",
    aliases: [
      "turtle"
    ],
    tags: [
      "slow"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦎",
    description: "lizard",
    category: "Animals & Nature",
    aliases: [
      "lizard"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🐍",
    description: "snake",
    category: "Animals & Nature",
    aliases: [
      "snake"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐲",
    description: "dragon face",
    category: "Animals & Nature",
    aliases: [
      "dragon_face"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐉",
    description: "dragon",
    category: "Animals & Nature",
    aliases: [
      "dragon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦕",
    description: "sauropod",
    category: "Animals & Nature",
    aliases: [
      "sauropod"
    ],
    tags: [
      "dinosaur"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦖",
    description: "T-Rex",
    category: "Animals & Nature",
    aliases: [
      "t-rex"
    ],
    tags: [
      "dinosaur"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🐳",
    description: "spouting whale",
    category: "Animals & Nature",
    aliases: [
      "whale"
    ],
    tags: [
      "sea"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐋",
    description: "whale",
    category: "Animals & Nature",
    aliases: [
      "whale2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐬",
    description: "dolphin",
    category: "Animals & Nature",
    aliases: [
      "dolphin",
      "flipper"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦭",
    description: "seal",
    category: "Animals & Nature",
    aliases: [
      "seal"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🐟",
    description: "fish",
    category: "Animals & Nature",
    aliases: [
      "fish"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐠",
    description: "tropical fish",
    category: "Animals & Nature",
    aliases: [
      "tropical_fish"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐡",
    description: "blowfish",
    category: "Animals & Nature",
    aliases: [
      "blowfish"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦈",
    description: "shark",
    category: "Animals & Nature",
    aliases: [
      "shark"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🐙",
    description: "octopus",
    category: "Animals & Nature",
    aliases: [
      "octopus"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐚",
    description: "spiral shell",
    category: "Animals & Nature",
    aliases: [
      "shell"
    ],
    tags: [
      "sea",
      "beach"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪸",
    description: "coral",
    category: "Animals & Nature",
    aliases: [
      "coral"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🪼",
    description: "jellyfish",
    category: "Animals & Nature",
    aliases: [
      "jellyfish"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🐌",
    description: "snail",
    category: "Animals & Nature",
    aliases: [
      "snail"
    ],
    tags: [
      "slow"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦋",
    description: "butterfly",
    category: "Animals & Nature",
    aliases: [
      "butterfly"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🐛",
    description: "bug",
    category: "Animals & Nature",
    aliases: [
      "bug"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐜",
    description: "ant",
    category: "Animals & Nature",
    aliases: [
      "ant"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🐝",
    description: "honeybee",
    category: "Animals & Nature",
    aliases: [
      "bee",
      "honeybee"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪲",
    description: "beetle",
    category: "Animals & Nature",
    aliases: [
      "beetle"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🐞",
    description: "lady beetle",
    category: "Animals & Nature",
    aliases: [
      "lady_beetle"
    ],
    tags: [
      "bug"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🦗",
    description: "cricket",
    category: "Animals & Nature",
    aliases: [
      "cricket"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪳",
    description: "cockroach",
    category: "Animals & Nature",
    aliases: [
      "cockroach"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🕷️",
    description: "spider",
    category: "Animals & Nature",
    aliases: [
      "spider"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🕸️",
    description: "spider web",
    category: "Animals & Nature",
    aliases: [
      "spider_web"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦂",
    description: "scorpion",
    category: "Animals & Nature",
    aliases: [
      "scorpion"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦟",
    description: "mosquito",
    category: "Animals & Nature",
    aliases: [
      "mosquito"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪰",
    description: "fly",
    category: "Animals & Nature",
    aliases: [
      "fly"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪱",
    description: "worm",
    category: "Animals & Nature",
    aliases: [
      "worm"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🦠",
    description: "microbe",
    category: "Animals & Nature",
    aliases: [
      "microbe"
    ],
    tags: [
      "germ"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "💐",
    description: "bouquet",
    category: "Animals & Nature",
    aliases: [
      "bouquet"
    ],
    tags: [
      "flowers"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌸",
    description: "cherry blossom",
    category: "Animals & Nature",
    aliases: [
      "cherry_blossom"
    ],
    tags: [
      "flower",
      "spring"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💮",
    description: "white flower",
    category: "Animals & Nature",
    aliases: [
      "white_flower"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪷",
    description: "lotus",
    category: "Animals & Nature",
    aliases: [
      "lotus"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🏵️",
    description: "rosette",
    category: "Animals & Nature",
    aliases: [
      "rosette"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌹",
    description: "rose",
    category: "Animals & Nature",
    aliases: [
      "rose"
    ],
    tags: [
      "flower"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥀",
    description: "wilted flower",
    category: "Animals & Nature",
    aliases: [
      "wilted_flower"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🌺",
    description: "hibiscus",
    category: "Animals & Nature",
    aliases: [
      "hibiscus"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌻",
    description: "sunflower",
    category: "Animals & Nature",
    aliases: [
      "sunflower"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌼",
    description: "blossom",
    category: "Animals & Nature",
    aliases: [
      "blossom"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌷",
    description: "tulip",
    category: "Animals & Nature",
    aliases: [
      "tulip"
    ],
    tags: [
      "flower"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪻",
    description: "hyacinth",
    category: "Animals & Nature",
    aliases: [
      "hyacinth"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🌱",
    description: "seedling",
    category: "Animals & Nature",
    aliases: [
      "seedling"
    ],
    tags: [
      "plant"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪴",
    description: "potted plant",
    category: "Animals & Nature",
    aliases: [
      "potted_plant"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🌲",
    description: "evergreen tree",
    category: "Animals & Nature",
    aliases: [
      "evergreen_tree"
    ],
    tags: [
      "wood"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌳",
    description: "deciduous tree",
    category: "Animals & Nature",
    aliases: [
      "deciduous_tree"
    ],
    tags: [
      "wood"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌴",
    description: "palm tree",
    category: "Animals & Nature",
    aliases: [
      "palm_tree"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌵",
    description: "cactus",
    category: "Animals & Nature",
    aliases: [
      "cactus"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌾",
    description: "sheaf of rice",
    category: "Animals & Nature",
    aliases: [
      "ear_of_rice"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌿",
    description: "herb",
    category: "Animals & Nature",
    aliases: [
      "herb"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☘️",
    description: "shamrock",
    category: "Animals & Nature",
    aliases: [
      "shamrock"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🍀",
    description: "four leaf clover",
    category: "Animals & Nature",
    aliases: [
      "four_leaf_clover"
    ],
    tags: [
      "luck"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍁",
    description: "maple leaf",
    category: "Animals & Nature",
    aliases: [
      "maple_leaf"
    ],
    tags: [
      "canada"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍂",
    description: "fallen leaf",
    category: "Animals & Nature",
    aliases: [
      "fallen_leaf"
    ],
    tags: [
      "autumn"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍃",
    description: "leaf fluttering in wind",
    category: "Animals & Nature",
    aliases: [
      "leaves"
    ],
    tags: [
      "leaf"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪹",
    description: "empty nest",
    category: "Animals & Nature",
    aliases: [
      "empty_nest"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🪺",
    description: "nest with eggs",
    category: "Animals & Nature",
    aliases: [
      "nest_with_eggs"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🍄",
    description: "mushroom",
    category: "Animals & Nature",
    aliases: [
      "mushroom"
    ],
    tags: [
      "fungus"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍇",
    description: "grapes",
    category: "Food & Drink",
    aliases: [
      "grapes"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍈",
    description: "melon",
    category: "Food & Drink",
    aliases: [
      "melon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍉",
    description: "watermelon",
    category: "Food & Drink",
    aliases: [
      "watermelon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍊",
    description: "tangerine",
    category: "Food & Drink",
    aliases: [
      "tangerine",
      "orange",
      "mandarin"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍋",
    description: "lemon",
    category: "Food & Drink",
    aliases: [
      "lemon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍌",
    description: "banana",
    category: "Food & Drink",
    aliases: [
      "banana"
    ],
    tags: [
      "fruit"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍍",
    description: "pineapple",
    category: "Food & Drink",
    aliases: [
      "pineapple"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥭",
    description: "mango",
    category: "Food & Drink",
    aliases: [
      "mango"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🍎",
    description: "red apple",
    category: "Food & Drink",
    aliases: [
      "apple"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍏",
    description: "green apple",
    category: "Food & Drink",
    aliases: [
      "green_apple"
    ],
    tags: [
      "fruit"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍐",
    description: "pear",
    category: "Food & Drink",
    aliases: [
      "pear"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍑",
    description: "peach",
    category: "Food & Drink",
    aliases: [
      "peach"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍒",
    description: "cherries",
    category: "Food & Drink",
    aliases: [
      "cherries"
    ],
    tags: [
      "fruit"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍓",
    description: "strawberry",
    category: "Food & Drink",
    aliases: [
      "strawberry"
    ],
    tags: [
      "fruit"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫐",
    description: "blueberries",
    category: "Food & Drink",
    aliases: [
      "blueberries"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥝",
    description: "kiwi fruit",
    category: "Food & Drink",
    aliases: [
      "kiwi_fruit"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🍅",
    description: "tomato",
    category: "Food & Drink",
    aliases: [
      "tomato"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫒",
    description: "olive",
    category: "Food & Drink",
    aliases: [
      "olive"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥥",
    description: "coconut",
    category: "Food & Drink",
    aliases: [
      "coconut"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥑",
    description: "avocado",
    category: "Food & Drink",
    aliases: [
      "avocado"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🍆",
    description: "eggplant",
    category: "Food & Drink",
    aliases: [
      "eggplant"
    ],
    tags: [
      "aubergine"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥔",
    description: "potato",
    category: "Food & Drink",
    aliases: [
      "potato"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥕",
    description: "carrot",
    category: "Food & Drink",
    aliases: [
      "carrot"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🌽",
    description: "ear of corn",
    category: "Food & Drink",
    aliases: [
      "corn"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌶️",
    description: "hot pepper",
    category: "Food & Drink",
    aliases: [
      "hot_pepper"
    ],
    tags: [
      "spicy"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🫑",
    description: "bell pepper",
    category: "Food & Drink",
    aliases: [
      "bell_pepper"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥒",
    description: "cucumber",
    category: "Food & Drink",
    aliases: [
      "cucumber"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥬",
    description: "leafy green",
    category: "Food & Drink",
    aliases: [
      "leafy_green"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥦",
    description: "broccoli",
    category: "Food & Drink",
    aliases: [
      "broccoli"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧄",
    description: "garlic",
    category: "Food & Drink",
    aliases: [
      "garlic"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧅",
    description: "onion",
    category: "Food & Drink",
    aliases: [
      "onion"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🥜",
    description: "peanuts",
    category: "Food & Drink",
    aliases: [
      "peanuts"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🫘",
    description: "beans",
    category: "Food & Drink",
    aliases: [
      "beans"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🌰",
    description: "chestnut",
    category: "Food & Drink",
    aliases: [
      "chestnut"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫚",
    description: "ginger root",
    category: "Food & Drink",
    aliases: [
      "ginger_root"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🫛",
    description: "pea pod",
    category: "Food & Drink",
    aliases: [
      "pea_pod"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🍞",
    description: "bread",
    category: "Food & Drink",
    aliases: [
      "bread"
    ],
    tags: [
      "toast"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥐",
    description: "croissant",
    category: "Food & Drink",
    aliases: [
      "croissant"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥖",
    description: "baguette bread",
    category: "Food & Drink",
    aliases: [
      "baguette_bread"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🫓",
    description: "flatbread",
    category: "Food & Drink",
    aliases: [
      "flatbread"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥨",
    description: "pretzel",
    category: "Food & Drink",
    aliases: [
      "pretzel"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥯",
    description: "bagel",
    category: "Food & Drink",
    aliases: [
      "bagel"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥞",
    description: "pancakes",
    category: "Food & Drink",
    aliases: [
      "pancakes"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🧇",
    description: "waffle",
    category: "Food & Drink",
    aliases: [
      "waffle"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧀",
    description: "cheese wedge",
    category: "Food & Drink",
    aliases: [
      "cheese"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🍖",
    description: "meat on bone",
    category: "Food & Drink",
    aliases: [
      "meat_on_bone"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍗",
    description: "poultry leg",
    category: "Food & Drink",
    aliases: [
      "poultry_leg"
    ],
    tags: [
      "meat",
      "chicken"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥩",
    description: "cut of meat",
    category: "Food & Drink",
    aliases: [
      "cut_of_meat"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥓",
    description: "bacon",
    category: "Food & Drink",
    aliases: [
      "bacon"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🍔",
    description: "hamburger",
    category: "Food & Drink",
    aliases: [
      "hamburger"
    ],
    tags: [
      "burger"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍟",
    description: "french fries",
    category: "Food & Drink",
    aliases: [
      "fries"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍕",
    description: "pizza",
    category: "Food & Drink",
    aliases: [
      "pizza"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌭",
    description: "hot dog",
    category: "Food & Drink",
    aliases: [
      "hotdog"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🥪",
    description: "sandwich",
    category: "Food & Drink",
    aliases: [
      "sandwich"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🌮",
    description: "taco",
    category: "Food & Drink",
    aliases: [
      "taco"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌯",
    description: "burrito",
    category: "Food & Drink",
    aliases: [
      "burrito"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🫔",
    description: "tamale",
    category: "Food & Drink",
    aliases: [
      "tamale"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥙",
    description: "stuffed flatbread",
    category: "Food & Drink",
    aliases: [
      "stuffed_flatbread"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🧆",
    description: "falafel",
    category: "Food & Drink",
    aliases: [
      "falafel"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🥚",
    description: "egg",
    category: "Food & Drink",
    aliases: [
      "egg"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🍳",
    description: "cooking",
    category: "Food & Drink",
    aliases: [
      "fried_egg"
    ],
    tags: [
      "breakfast"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥘",
    description: "shallow pan of food",
    category: "Food & Drink",
    aliases: [
      "shallow_pan_of_food"
    ],
    tags: [
      "paella",
      "curry"
    ],
    unicode_version: "",
    ios_version: "10.2"
  },
  {
    emoji: "🍲",
    description: "pot of food",
    category: "Food & Drink",
    aliases: [
      "stew"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫕",
    description: "fondue",
    category: "Food & Drink",
    aliases: [
      "fondue"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🥣",
    description: "bowl with spoon",
    category: "Food & Drink",
    aliases: [
      "bowl_with_spoon"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥗",
    description: "green salad",
    category: "Food & Drink",
    aliases: [
      "green_salad"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🍿",
    description: "popcorn",
    category: "Food & Drink",
    aliases: [
      "popcorn"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🧈",
    description: "butter",
    category: "Food & Drink",
    aliases: [
      "butter"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧂",
    description: "salt",
    category: "Food & Drink",
    aliases: [
      "salt"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥫",
    description: "canned food",
    category: "Food & Drink",
    aliases: [
      "canned_food"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🍱",
    description: "bento box",
    category: "Food & Drink",
    aliases: [
      "bento"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍘",
    description: "rice cracker",
    category: "Food & Drink",
    aliases: [
      "rice_cracker"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍙",
    description: "rice ball",
    category: "Food & Drink",
    aliases: [
      "rice_ball"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍚",
    description: "cooked rice",
    category: "Food & Drink",
    aliases: [
      "rice"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍛",
    description: "curry rice",
    category: "Food & Drink",
    aliases: [
      "curry"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍜",
    description: "steaming bowl",
    category: "Food & Drink",
    aliases: [
      "ramen"
    ],
    tags: [
      "noodle"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍝",
    description: "spaghetti",
    category: "Food & Drink",
    aliases: [
      "spaghetti"
    ],
    tags: [
      "pasta"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍠",
    description: "roasted sweet potato",
    category: "Food & Drink",
    aliases: [
      "sweet_potato"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍢",
    description: "oden",
    category: "Food & Drink",
    aliases: [
      "oden"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍣",
    description: "sushi",
    category: "Food & Drink",
    aliases: [
      "sushi"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍤",
    description: "fried shrimp",
    category: "Food & Drink",
    aliases: [
      "fried_shrimp"
    ],
    tags: [
      "tempura"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍥",
    description: "fish cake with swirl",
    category: "Food & Drink",
    aliases: [
      "fish_cake"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥮",
    description: "moon cake",
    category: "Food & Drink",
    aliases: [
      "moon_cake"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🍡",
    description: "dango",
    category: "Food & Drink",
    aliases: [
      "dango"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥟",
    description: "dumpling",
    category: "Food & Drink",
    aliases: [
      "dumpling"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥠",
    description: "fortune cookie",
    category: "Food & Drink",
    aliases: [
      "fortune_cookie"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥡",
    description: "takeout box",
    category: "Food & Drink",
    aliases: [
      "takeout_box"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦀",
    description: "crab",
    category: "Food & Drink",
    aliases: [
      "crab"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🦞",
    description: "lobster",
    category: "Food & Drink",
    aliases: [
      "lobster"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦐",
    description: "shrimp",
    category: "Food & Drink",
    aliases: [
      "shrimp"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦑",
    description: "squid",
    category: "Food & Drink",
    aliases: [
      "squid"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦪",
    description: "oyster",
    category: "Food & Drink",
    aliases: [
      "oyster"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🍦",
    description: "soft ice cream",
    category: "Food & Drink",
    aliases: [
      "icecream"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍧",
    description: "shaved ice",
    category: "Food & Drink",
    aliases: [
      "shaved_ice"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍨",
    description: "ice cream",
    category: "Food & Drink",
    aliases: [
      "ice_cream"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍩",
    description: "doughnut",
    category: "Food & Drink",
    aliases: [
      "doughnut"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍪",
    description: "cookie",
    category: "Food & Drink",
    aliases: [
      "cookie"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎂",
    description: "birthday cake",
    category: "Food & Drink",
    aliases: [
      "birthday"
    ],
    tags: [
      "party"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍰",
    description: "shortcake",
    category: "Food & Drink",
    aliases: [
      "cake"
    ],
    tags: [
      "dessert"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧁",
    description: "cupcake",
    category: "Food & Drink",
    aliases: [
      "cupcake"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥧",
    description: "pie",
    category: "Food & Drink",
    aliases: [
      "pie"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🍫",
    description: "chocolate bar",
    category: "Food & Drink",
    aliases: [
      "chocolate_bar"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍬",
    description: "candy",
    category: "Food & Drink",
    aliases: [
      "candy"
    ],
    tags: [
      "sweet"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍭",
    description: "lollipop",
    category: "Food & Drink",
    aliases: [
      "lollipop"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍮",
    description: "custard",
    category: "Food & Drink",
    aliases: [
      "custard"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍯",
    description: "honey pot",
    category: "Food & Drink",
    aliases: [
      "honey_pot"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍼",
    description: "baby bottle",
    category: "Food & Drink",
    aliases: [
      "baby_bottle"
    ],
    tags: [
      "milk"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥛",
    description: "glass of milk",
    category: "Food & Drink",
    aliases: [
      "milk_glass"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "☕",
    description: "hot beverage",
    category: "Food & Drink",
    aliases: [
      "coffee"
    ],
    tags: [
      "cafe",
      "espresso"
    ],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫖",
    description: "teapot",
    category: "Food & Drink",
    aliases: [
      "teapot"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🍵",
    description: "teacup without handle",
    category: "Food & Drink",
    aliases: [
      "tea"
    ],
    tags: [
      "green",
      "breakfast"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍶",
    description: "sake",
    category: "Food & Drink",
    aliases: [
      "sake"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍾",
    description: "bottle with popping cork",
    category: "Food & Drink",
    aliases: [
      "champagne"
    ],
    tags: [
      "bottle",
      "bubbly",
      "celebration"
    ],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🍷",
    description: "wine glass",
    category: "Food & Drink",
    aliases: [
      "wine_glass"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍸",
    description: "cocktail glass",
    category: "Food & Drink",
    aliases: [
      "cocktail"
    ],
    tags: [
      "drink"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍹",
    description: "tropical drink",
    category: "Food & Drink",
    aliases: [
      "tropical_drink"
    ],
    tags: [
      "summer",
      "vacation"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍺",
    description: "beer mug",
    category: "Food & Drink",
    aliases: [
      "beer"
    ],
    tags: [
      "drink"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🍻",
    description: "clinking beer mugs",
    category: "Food & Drink",
    aliases: [
      "beers"
    ],
    tags: [
      "drinks"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥂",
    description: "clinking glasses",
    category: "Food & Drink",
    aliases: [
      "clinking_glasses"
    ],
    tags: [
      "cheers",
      "toast"
    ],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥃",
    description: "tumbler glass",
    category: "Food & Drink",
    aliases: [
      "tumbler_glass"
    ],
    tags: [
      "whisky"
    ],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🫗",
    description: "pouring liquid",
    category: "Food & Drink",
    aliases: [
      "pouring_liquid"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🥤",
    description: "cup with straw",
    category: "Food & Drink",
    aliases: [
      "cup_with_straw"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧋",
    description: "bubble tea",
    category: "Food & Drink",
    aliases: [
      "bubble_tea"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧃",
    description: "beverage box",
    category: "Food & Drink",
    aliases: [
      "beverage_box"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧉",
    description: "mate",
    category: "Food & Drink",
    aliases: [
      "mate"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧊",
    description: "ice",
    category: "Food & Drink",
    aliases: [
      "ice_cube"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🥢",
    description: "chopsticks",
    category: "Food & Drink",
    aliases: [
      "chopsticks"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🍽️",
    description: "fork and knife with plate",
    category: "Food & Drink",
    aliases: [
      "plate_with_cutlery"
    ],
    tags: [
      "dining",
      "dinner"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🍴",
    description: "fork and knife",
    category: "Food & Drink",
    aliases: [
      "fork_and_knife"
    ],
    tags: [
      "cutlery"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥄",
    description: "spoon",
    category: "Food & Drink",
    aliases: [
      "spoon"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🔪",
    description: "kitchen knife",
    category: "Food & Drink",
    aliases: [
      "hocho",
      "knife"
    ],
    tags: [
      "cut",
      "chop"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🫙",
    description: "jar",
    category: "Food & Drink",
    aliases: [
      "jar"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🏺",
    description: "amphora",
    category: "Food & Drink",
    aliases: [
      "amphora"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌍",
    description: "globe showing Europe-Africa",
    category: "Travel & Places",
    aliases: [
      "earth_africa"
    ],
    tags: [
      "globe",
      "world",
      "international"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌎",
    description: "globe showing Americas",
    category: "Travel & Places",
    aliases: [
      "earth_americas"
    ],
    tags: [
      "globe",
      "world",
      "international"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌏",
    description: "globe showing Asia-Australia",
    category: "Travel & Places",
    aliases: [
      "earth_asia"
    ],
    tags: [
      "globe",
      "world",
      "international"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌐",
    description: "globe with meridians",
    category: "Travel & Places",
    aliases: [
      "globe_with_meridians"
    ],
    tags: [
      "world",
      "global",
      "international"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗺️",
    description: "world map",
    category: "Travel & Places",
    aliases: [
      "world_map"
    ],
    tags: [
      "travel"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🗾",
    description: "map of Japan",
    category: "Travel & Places",
    aliases: [
      "japan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧭",
    description: "compass",
    category: "Travel & Places",
    aliases: [
      "compass"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🏔️",
    description: "snow-capped mountain",
    category: "Travel & Places",
    aliases: [
      "mountain_snow"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⛰️",
    description: "mountain",
    category: "Travel & Places",
    aliases: [
      "mountain"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🌋",
    description: "volcano",
    category: "Travel & Places",
    aliases: [
      "volcano"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗻",
    description: "mount fuji",
    category: "Travel & Places",
    aliases: [
      "mount_fuji"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏕️",
    description: "camping",
    category: "Travel & Places",
    aliases: [
      "camping"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏖️",
    description: "beach with umbrella",
    category: "Travel & Places",
    aliases: [
      "beach_umbrella"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏜️",
    description: "desert",
    category: "Travel & Places",
    aliases: [
      "desert"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏝️",
    description: "desert island",
    category: "Travel & Places",
    aliases: [
      "desert_island"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏞️",
    description: "national park",
    category: "Travel & Places",
    aliases: [
      "national_park"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏟️",
    description: "stadium",
    category: "Travel & Places",
    aliases: [
      "stadium"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏛️",
    description: "classical building",
    category: "Travel & Places",
    aliases: [
      "classical_building"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏗️",
    description: "building construction",
    category: "Travel & Places",
    aliases: [
      "building_construction"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🧱",
    description: "brick",
    category: "Travel & Places",
    aliases: [
      "bricks"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪨",
    description: "rock",
    category: "Travel & Places",
    aliases: [
      "rock"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪵",
    description: "wood",
    category: "Travel & Places",
    aliases: [
      "wood"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🛖",
    description: "hut",
    category: "Travel & Places",
    aliases: [
      "hut"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🏘️",
    description: "houses",
    category: "Travel & Places",
    aliases: [
      "houses"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏚️",
    description: "derelict house",
    category: "Travel & Places",
    aliases: [
      "derelict_house"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏠",
    description: "house",
    category: "Travel & Places",
    aliases: [
      "house"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏡",
    description: "house with garden",
    category: "Travel & Places",
    aliases: [
      "house_with_garden"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏢",
    description: "office building",
    category: "Travel & Places",
    aliases: [
      "office"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏣",
    description: "Japanese post office",
    category: "Travel & Places",
    aliases: [
      "post_office"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏤",
    description: "post office",
    category: "Travel & Places",
    aliases: [
      "european_post_office"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏥",
    description: "hospital",
    category: "Travel & Places",
    aliases: [
      "hospital"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏦",
    description: "bank",
    category: "Travel & Places",
    aliases: [
      "bank"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏨",
    description: "hotel",
    category: "Travel & Places",
    aliases: [
      "hotel"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏩",
    description: "love hotel",
    category: "Travel & Places",
    aliases: [
      "love_hotel"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏪",
    description: "convenience store",
    category: "Travel & Places",
    aliases: [
      "convenience_store"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏫",
    description: "school",
    category: "Travel & Places",
    aliases: [
      "school"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏬",
    description: "department store",
    category: "Travel & Places",
    aliases: [
      "department_store"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏭",
    description: "factory",
    category: "Travel & Places",
    aliases: [
      "factory"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏯",
    description: "Japanese castle",
    category: "Travel & Places",
    aliases: [
      "japanese_castle"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏰",
    description: "castle",
    category: "Travel & Places",
    aliases: [
      "european_castle"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💒",
    description: "wedding",
    category: "Travel & Places",
    aliases: [
      "wedding"
    ],
    tags: [
      "marriage"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗼",
    description: "Tokyo tower",
    category: "Travel & Places",
    aliases: [
      "tokyo_tower"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗽",
    description: "Statue of Liberty",
    category: "Travel & Places",
    aliases: [
      "statue_of_liberty"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⛪",
    description: "church",
    category: "Travel & Places",
    aliases: [
      "church"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🕌",
    description: "mosque",
    category: "Travel & Places",
    aliases: [
      "mosque"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛕",
    description: "hindu temple",
    category: "Travel & Places",
    aliases: [
      "hindu_temple"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🕍",
    description: "synagogue",
    category: "Travel & Places",
    aliases: [
      "synagogue"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "⛩️",
    description: "shinto shrine",
    category: "Travel & Places",
    aliases: [
      "shinto_shrine"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🕋",
    description: "kaaba",
    category: "Travel & Places",
    aliases: [
      "kaaba"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "⛲",
    description: "fountain",
    category: "Travel & Places",
    aliases: [
      "fountain"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "⛺",
    description: "tent",
    category: "Travel & Places",
    aliases: [
      "tent"
    ],
    tags: [
      "camping"
    ],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🌁",
    description: "foggy",
    category: "Travel & Places",
    aliases: [
      "foggy"
    ],
    tags: [
      "karl"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌃",
    description: "night with stars",
    category: "Travel & Places",
    aliases: [
      "night_with_stars"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏙️",
    description: "cityscape",
    category: "Travel & Places",
    aliases: [
      "cityscape"
    ],
    tags: [
      "skyline"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌄",
    description: "sunrise over mountains",
    category: "Travel & Places",
    aliases: [
      "sunrise_over_mountains"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌅",
    description: "sunrise",
    category: "Travel & Places",
    aliases: [
      "sunrise"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌆",
    description: "cityscape at dusk",
    category: "Travel & Places",
    aliases: [
      "city_sunset"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌇",
    description: "sunset",
    category: "Travel & Places",
    aliases: [
      "city_sunrise"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌉",
    description: "bridge at night",
    category: "Travel & Places",
    aliases: [
      "bridge_at_night"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "♨️",
    description: "hot springs",
    category: "Travel & Places",
    aliases: [
      "hotsprings"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🎠",
    description: "carousel horse",
    category: "Travel & Places",
    aliases: [
      "carousel_horse"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛝",
    description: "playground slide",
    category: "Travel & Places",
    aliases: [
      "playground_slide"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🎡",
    description: "ferris wheel",
    category: "Travel & Places",
    aliases: [
      "ferris_wheel"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎢",
    description: "roller coaster",
    category: "Travel & Places",
    aliases: [
      "roller_coaster"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💈",
    description: "barber pole",
    category: "Travel & Places",
    aliases: [
      "barber"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎪",
    description: "circus tent",
    category: "Travel & Places",
    aliases: [
      "circus_tent"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚂",
    description: "locomotive",
    category: "Travel & Places",
    aliases: [
      "steam_locomotive"
    ],
    tags: [
      "train"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚃",
    description: "railway car",
    category: "Travel & Places",
    aliases: [
      "railway_car"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚄",
    description: "high-speed train",
    category: "Travel & Places",
    aliases: [
      "bullettrain_side"
    ],
    tags: [
      "train"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚅",
    description: "bullet train",
    category: "Travel & Places",
    aliases: [
      "bullettrain_front"
    ],
    tags: [
      "train"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚆",
    description: "train",
    category: "Travel & Places",
    aliases: [
      "train2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚇",
    description: "metro",
    category: "Travel & Places",
    aliases: [
      "metro"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚈",
    description: "light rail",
    category: "Travel & Places",
    aliases: [
      "light_rail"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚉",
    description: "station",
    category: "Travel & Places",
    aliases: [
      "station"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚊",
    description: "tram",
    category: "Travel & Places",
    aliases: [
      "tram"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚝",
    description: "monorail",
    category: "Travel & Places",
    aliases: [
      "monorail"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚞",
    description: "mountain railway",
    category: "Travel & Places",
    aliases: [
      "mountain_railway"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚋",
    description: "tram car",
    category: "Travel & Places",
    aliases: [
      "train"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚌",
    description: "bus",
    category: "Travel & Places",
    aliases: [
      "bus"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚍",
    description: "oncoming bus",
    category: "Travel & Places",
    aliases: [
      "oncoming_bus"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚎",
    description: "trolleybus",
    category: "Travel & Places",
    aliases: [
      "trolleybus"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚐",
    description: "minibus",
    category: "Travel & Places",
    aliases: [
      "minibus"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚑",
    description: "ambulance",
    category: "Travel & Places",
    aliases: [
      "ambulance"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚒",
    description: "fire engine",
    category: "Travel & Places",
    aliases: [
      "fire_engine"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚓",
    description: "police car",
    category: "Travel & Places",
    aliases: [
      "police_car"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚔",
    description: "oncoming police car",
    category: "Travel & Places",
    aliases: [
      "oncoming_police_car"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚕",
    description: "taxi",
    category: "Travel & Places",
    aliases: [
      "taxi"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚖",
    description: "oncoming taxi",
    category: "Travel & Places",
    aliases: [
      "oncoming_taxi"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚗",
    description: "automobile",
    category: "Travel & Places",
    aliases: [
      "car",
      "red_car"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚘",
    description: "oncoming automobile",
    category: "Travel & Places",
    aliases: [
      "oncoming_automobile"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚙",
    description: "sport utility vehicle",
    category: "Travel & Places",
    aliases: [
      "blue_car"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛻",
    description: "pickup truck",
    category: "Travel & Places",
    aliases: [
      "pickup_truck"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🚚",
    description: "delivery truck",
    category: "Travel & Places",
    aliases: [
      "truck"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚛",
    description: "articulated lorry",
    category: "Travel & Places",
    aliases: [
      "articulated_lorry"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚜",
    description: "tractor",
    category: "Travel & Places",
    aliases: [
      "tractor"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏎️",
    description: "racing car",
    category: "Travel & Places",
    aliases: [
      "racing_car"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏍️",
    description: "motorcycle",
    category: "Travel & Places",
    aliases: [
      "motorcycle"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛵",
    description: "motor scooter",
    category: "Travel & Places",
    aliases: [
      "motor_scooter"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🦽",
    description: "manual wheelchair",
    category: "Travel & Places",
    aliases: [
      "manual_wheelchair"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🦼",
    description: "motorized wheelchair",
    category: "Travel & Places",
    aliases: [
      "motorized_wheelchair"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🛺",
    description: "auto rickshaw",
    category: "Travel & Places",
    aliases: [
      "auto_rickshaw"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🚲",
    description: "bicycle",
    category: "Travel & Places",
    aliases: [
      "bike"
    ],
    tags: [
      "bicycle"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛴",
    description: "kick scooter",
    category: "Travel & Places",
    aliases: [
      "kick_scooter"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🛹",
    description: "skateboard",
    category: "Travel & Places",
    aliases: [
      "skateboard"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🛼",
    description: "roller skate",
    category: "Travel & Places",
    aliases: [
      "roller_skate"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🚏",
    description: "bus stop",
    category: "Travel & Places",
    aliases: [
      "busstop"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛣️",
    description: "motorway",
    category: "Travel & Places",
    aliases: [
      "motorway"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛤️",
    description: "railway track",
    category: "Travel & Places",
    aliases: [
      "railway_track"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛢️",
    description: "oil drum",
    category: "Travel & Places",
    aliases: [
      "oil_drum"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⛽",
    description: "fuel pump",
    category: "Travel & Places",
    aliases: [
      "fuelpump"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🛞",
    description: "wheel",
    category: "Travel & Places",
    aliases: [
      "wheel"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🚨",
    description: "police car light",
    category: "Travel & Places",
    aliases: [
      "rotating_light"
    ],
    tags: [
      "911",
      "emergency"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚥",
    description: "horizontal traffic light",
    category: "Travel & Places",
    aliases: [
      "traffic_light"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚦",
    description: "vertical traffic light",
    category: "Travel & Places",
    aliases: [
      "vertical_traffic_light"
    ],
    tags: [
      "semaphore"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛑",
    description: "stop sign",
    category: "Travel & Places",
    aliases: [
      "stop_sign"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🚧",
    description: "construction",
    category: "Travel & Places",
    aliases: [
      "construction"
    ],
    tags: [
      "wip"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⚓",
    description: "anchor",
    category: "Travel & Places",
    aliases: [
      "anchor"
    ],
    tags: [
      "ship"
    ],
    unicode_version: "4.1",
    ios_version: "6.0"
  },
  {
    emoji: "🛟",
    description: "ring buoy",
    category: "Travel & Places",
    aliases: [
      "ring_buoy"
    ],
    tags: [
      "life preserver"
    ],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "⛵",
    description: "sailboat",
    category: "Travel & Places",
    aliases: [
      "boat",
      "sailboat"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🛶",
    description: "canoe",
    category: "Travel & Places",
    aliases: [
      "canoe"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🚤",
    description: "speedboat",
    category: "Travel & Places",
    aliases: [
      "speedboat"
    ],
    tags: [
      "ship"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛳️",
    description: "passenger ship",
    category: "Travel & Places",
    aliases: [
      "passenger_ship"
    ],
    tags: [
      "cruise"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⛴️",
    description: "ferry",
    category: "Travel & Places",
    aliases: [
      "ferry"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🛥️",
    description: "motor boat",
    category: "Travel & Places",
    aliases: [
      "motor_boat"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🚢",
    description: "ship",
    category: "Travel & Places",
    aliases: [
      "ship"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "✈️",
    description: "airplane",
    category: "Travel & Places",
    aliases: [
      "airplane"
    ],
    tags: [
      "flight"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🛩️",
    description: "small airplane",
    category: "Travel & Places",
    aliases: [
      "small_airplane"
    ],
    tags: [
      "flight"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛫",
    description: "airplane departure",
    category: "Travel & Places",
    aliases: [
      "flight_departure"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛬",
    description: "airplane arrival",
    category: "Travel & Places",
    aliases: [
      "flight_arrival"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🪂",
    description: "parachute",
    category: "Travel & Places",
    aliases: [
      "parachute"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "💺",
    description: "seat",
    category: "Travel & Places",
    aliases: [
      "seat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚁",
    description: "helicopter",
    category: "Travel & Places",
    aliases: [
      "helicopter"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚟",
    description: "suspension railway",
    category: "Travel & Places",
    aliases: [
      "suspension_railway"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚠",
    description: "mountain cableway",
    category: "Travel & Places",
    aliases: [
      "mountain_cableway"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚡",
    description: "aerial tramway",
    category: "Travel & Places",
    aliases: [
      "aerial_tramway"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛰️",
    description: "satellite",
    category: "Travel & Places",
    aliases: [
      "artificial_satellite"
    ],
    tags: [
      "orbit",
      "space"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🚀",
    description: "rocket",
    category: "Travel & Places",
    aliases: [
      "rocket"
    ],
    tags: [
      "ship",
      "launch"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛸",
    description: "flying saucer",
    category: "Travel & Places",
    aliases: [
      "flying_saucer"
    ],
    tags: [
      "ufo"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🛎️",
    description: "bellhop bell",
    category: "Travel & Places",
    aliases: [
      "bellhop_bell"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🧳",
    description: "luggage",
    category: "Travel & Places",
    aliases: [
      "luggage"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "⌛",
    description: "hourglass done",
    category: "Travel & Places",
    aliases: [
      "hourglass"
    ],
    tags: [
      "time"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⏳",
    description: "hourglass not done",
    category: "Travel & Places",
    aliases: [
      "hourglass_flowing_sand"
    ],
    tags: [
      "time"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⌚",
    description: "watch",
    category: "Travel & Places",
    aliases: [
      "watch"
    ],
    tags: [
      "time"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⏰",
    description: "alarm clock",
    category: "Travel & Places",
    aliases: [
      "alarm_clock"
    ],
    tags: [
      "morning"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏱️",
    description: "stopwatch",
    category: "Travel & Places",
    aliases: [
      "stopwatch"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.1"
  },
  {
    emoji: "⏲️",
    description: "timer clock",
    category: "Travel & Places",
    aliases: [
      "timer_clock"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.1"
  },
  {
    emoji: "🕰️",
    description: "mantelpiece clock",
    category: "Travel & Places",
    aliases: [
      "mantelpiece_clock"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🕛",
    description: "twelve o’clock",
    category: "Travel & Places",
    aliases: [
      "clock12"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕧",
    description: "twelve-thirty",
    category: "Travel & Places",
    aliases: [
      "clock1230"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕐",
    description: "one o’clock",
    category: "Travel & Places",
    aliases: [
      "clock1"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕜",
    description: "one-thirty",
    category: "Travel & Places",
    aliases: [
      "clock130"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕑",
    description: "two o’clock",
    category: "Travel & Places",
    aliases: [
      "clock2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕝",
    description: "two-thirty",
    category: "Travel & Places",
    aliases: [
      "clock230"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕒",
    description: "three o’clock",
    category: "Travel & Places",
    aliases: [
      "clock3"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕞",
    description: "three-thirty",
    category: "Travel & Places",
    aliases: [
      "clock330"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕓",
    description: "four o’clock",
    category: "Travel & Places",
    aliases: [
      "clock4"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕟",
    description: "four-thirty",
    category: "Travel & Places",
    aliases: [
      "clock430"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕔",
    description: "five o’clock",
    category: "Travel & Places",
    aliases: [
      "clock5"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕠",
    description: "five-thirty",
    category: "Travel & Places",
    aliases: [
      "clock530"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕕",
    description: "six o’clock",
    category: "Travel & Places",
    aliases: [
      "clock6"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕡",
    description: "six-thirty",
    category: "Travel & Places",
    aliases: [
      "clock630"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕖",
    description: "seven o’clock",
    category: "Travel & Places",
    aliases: [
      "clock7"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕢",
    description: "seven-thirty",
    category: "Travel & Places",
    aliases: [
      "clock730"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕗",
    description: "eight o’clock",
    category: "Travel & Places",
    aliases: [
      "clock8"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕣",
    description: "eight-thirty",
    category: "Travel & Places",
    aliases: [
      "clock830"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕘",
    description: "nine o’clock",
    category: "Travel & Places",
    aliases: [
      "clock9"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕤",
    description: "nine-thirty",
    category: "Travel & Places",
    aliases: [
      "clock930"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕙",
    description: "ten o’clock",
    category: "Travel & Places",
    aliases: [
      "clock10"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕥",
    description: "ten-thirty",
    category: "Travel & Places",
    aliases: [
      "clock1030"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕚",
    description: "eleven o’clock",
    category: "Travel & Places",
    aliases: [
      "clock11"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕦",
    description: "eleven-thirty",
    category: "Travel & Places",
    aliases: [
      "clock1130"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌑",
    description: "new moon",
    category: "Travel & Places",
    aliases: [
      "new_moon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌒",
    description: "waxing crescent moon",
    category: "Travel & Places",
    aliases: [
      "waxing_crescent_moon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌓",
    description: "first quarter moon",
    category: "Travel & Places",
    aliases: [
      "first_quarter_moon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌔",
    description: "waxing gibbous moon",
    category: "Travel & Places",
    aliases: [
      "moon",
      "waxing_gibbous_moon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌕",
    description: "full moon",
    category: "Travel & Places",
    aliases: [
      "full_moon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌖",
    description: "waning gibbous moon",
    category: "Travel & Places",
    aliases: [
      "waning_gibbous_moon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌗",
    description: "last quarter moon",
    category: "Travel & Places",
    aliases: [
      "last_quarter_moon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌘",
    description: "waning crescent moon",
    category: "Travel & Places",
    aliases: [
      "waning_crescent_moon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌙",
    description: "crescent moon",
    category: "Travel & Places",
    aliases: [
      "crescent_moon"
    ],
    tags: [
      "night"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌚",
    description: "new moon face",
    category: "Travel & Places",
    aliases: [
      "new_moon_with_face"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌛",
    description: "first quarter moon face",
    category: "Travel & Places",
    aliases: [
      "first_quarter_moon_with_face"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌜",
    description: "last quarter moon face",
    category: "Travel & Places",
    aliases: [
      "last_quarter_moon_with_face"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌡️",
    description: "thermometer",
    category: "Travel & Places",
    aliases: [
      "thermometer"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "☀️",
    description: "sun",
    category: "Travel & Places",
    aliases: [
      "sunny"
    ],
    tags: [
      "weather"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🌝",
    description: "full moon face",
    category: "Travel & Places",
    aliases: [
      "full_moon_with_face"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌞",
    description: "sun with face",
    category: "Travel & Places",
    aliases: [
      "sun_with_face"
    ],
    tags: [
      "summer"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪐",
    description: "ringed planet",
    category: "Travel & Places",
    aliases: [
      "ringed_planet"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "⭐",
    description: "star",
    category: "Travel & Places",
    aliases: [
      "star"
    ],
    tags: [],
    unicode_version: "5.1",
    ios_version: "6.0"
  },
  {
    emoji: "🌟",
    description: "glowing star",
    category: "Travel & Places",
    aliases: [
      "star2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌠",
    description: "shooting star",
    category: "Travel & Places",
    aliases: [
      "stars"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌌",
    description: "milky way",
    category: "Travel & Places",
    aliases: [
      "milky_way"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☁️",
    description: "cloud",
    category: "Travel & Places",
    aliases: [
      "cloud"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⛅",
    description: "sun behind cloud",
    category: "Travel & Places",
    aliases: [
      "partly_sunny"
    ],
    tags: [
      "weather",
      "cloud"
    ],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "⛈️",
    description: "cloud with lightning and rain",
    category: "Travel & Places",
    aliases: [
      "cloud_with_lightning_and_rain"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🌤️",
    description: "sun behind small cloud",
    category: "Travel & Places",
    aliases: [
      "sun_behind_small_cloud"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌥️",
    description: "sun behind large cloud",
    category: "Travel & Places",
    aliases: [
      "sun_behind_large_cloud"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌦️",
    description: "sun behind rain cloud",
    category: "Travel & Places",
    aliases: [
      "sun_behind_rain_cloud"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌧️",
    description: "cloud with rain",
    category: "Travel & Places",
    aliases: [
      "cloud_with_rain"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌨️",
    description: "cloud with snow",
    category: "Travel & Places",
    aliases: [
      "cloud_with_snow"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌩️",
    description: "cloud with lightning",
    category: "Travel & Places",
    aliases: [
      "cloud_with_lightning"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌪️",
    description: "tornado",
    category: "Travel & Places",
    aliases: [
      "tornado"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌫️",
    description: "fog",
    category: "Travel & Places",
    aliases: [
      "fog"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌬️",
    description: "wind face",
    category: "Travel & Places",
    aliases: [
      "wind_face"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🌀",
    description: "cyclone",
    category: "Travel & Places",
    aliases: [
      "cyclone"
    ],
    tags: [
      "swirl"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌈",
    description: "rainbow",
    category: "Travel & Places",
    aliases: [
      "rainbow"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌂",
    description: "closed umbrella",
    category: "Travel & Places",
    aliases: [
      "closed_umbrella"
    ],
    tags: [
      "weather",
      "rain"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☂️",
    description: "umbrella",
    category: "Travel & Places",
    aliases: [
      "open_umbrella"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☔",
    description: "umbrella with rain drops",
    category: "Travel & Places",
    aliases: [
      "umbrella"
    ],
    tags: [
      "rain",
      "weather"
    ],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "⛱️",
    description: "umbrella on ground",
    category: "Travel & Places",
    aliases: [
      "parasol_on_ground"
    ],
    tags: [
      "beach_umbrella"
    ],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "⚡",
    description: "high voltage",
    category: "Travel & Places",
    aliases: [
      "zap"
    ],
    tags: [
      "lightning",
      "thunder"
    ],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "❄️",
    description: "snowflake",
    category: "Travel & Places",
    aliases: [
      "snowflake"
    ],
    tags: [
      "winter",
      "cold",
      "weather"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "☃️",
    description: "snowman",
    category: "Travel & Places",
    aliases: [
      "snowman_with_snow"
    ],
    tags: [
      "winter",
      "christmas"
    ],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "⛄",
    description: "snowman without snow",
    category: "Travel & Places",
    aliases: [
      "snowman"
    ],
    tags: [
      "winter"
    ],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "☄️",
    description: "comet",
    category: "Travel & Places",
    aliases: [
      "comet"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "🔥",
    description: "fire",
    category: "Travel & Places",
    aliases: [
      "fire"
    ],
    tags: [
      "burn"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💧",
    description: "droplet",
    category: "Travel & Places",
    aliases: [
      "droplet"
    ],
    tags: [
      "water"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🌊",
    description: "water wave",
    category: "Travel & Places",
    aliases: [
      "ocean"
    ],
    tags: [
      "sea"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎃",
    description: "jack-o-lantern",
    category: "Activities",
    aliases: [
      "jack_o_lantern"
    ],
    tags: [
      "halloween"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎄",
    description: "Christmas tree",
    category: "Activities",
    aliases: [
      "christmas_tree"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎆",
    description: "fireworks",
    category: "Activities",
    aliases: [
      "fireworks"
    ],
    tags: [
      "festival",
      "celebration"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎇",
    description: "sparkler",
    category: "Activities",
    aliases: [
      "sparkler"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧨",
    description: "firecracker",
    category: "Activities",
    aliases: [
      "firecracker"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "✨",
    description: "sparkles",
    category: "Activities",
    aliases: [
      "sparkles"
    ],
    tags: [
      "shiny"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎈",
    description: "balloon",
    category: "Activities",
    aliases: [
      "balloon"
    ],
    tags: [
      "party",
      "birthday"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎉",
    description: "party popper",
    category: "Activities",
    aliases: [
      "tada"
    ],
    tags: [
      "hooray",
      "party"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎊",
    description: "confetti ball",
    category: "Activities",
    aliases: [
      "confetti_ball"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎋",
    description: "tanabata tree",
    category: "Activities",
    aliases: [
      "tanabata_tree"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎍",
    description: "pine decoration",
    category: "Activities",
    aliases: [
      "bamboo"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎎",
    description: "Japanese dolls",
    category: "Activities",
    aliases: [
      "dolls"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎏",
    description: "carp streamer",
    category: "Activities",
    aliases: [
      "flags"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎐",
    description: "wind chime",
    category: "Activities",
    aliases: [
      "wind_chime"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎑",
    description: "moon viewing ceremony",
    category: "Activities",
    aliases: [
      "rice_scene"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧧",
    description: "red envelope",
    category: "Activities",
    aliases: [
      "red_envelope"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎀",
    description: "ribbon",
    category: "Activities",
    aliases: [
      "ribbon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎁",
    description: "wrapped gift",
    category: "Activities",
    aliases: [
      "gift"
    ],
    tags: [
      "present",
      "birthday",
      "christmas"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎗️",
    description: "reminder ribbon",
    category: "Activities",
    aliases: [
      "reminder_ribbon"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎟️",
    description: "admission tickets",
    category: "Activities",
    aliases: [
      "tickets"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎫",
    description: "ticket",
    category: "Activities",
    aliases: [
      "ticket"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎖️",
    description: "military medal",
    category: "Activities",
    aliases: [
      "medal_military"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏆",
    description: "trophy",
    category: "Activities",
    aliases: [
      "trophy"
    ],
    tags: [
      "award",
      "contest",
      "winner"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏅",
    description: "sports medal",
    category: "Activities",
    aliases: [
      "medal_sports"
    ],
    tags: [
      "gold",
      "winner"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🥇",
    description: "1st place medal",
    category: "Activities",
    aliases: [
      "1st_place_medal"
    ],
    tags: [
      "gold"
    ],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥈",
    description: "2nd place medal",
    category: "Activities",
    aliases: [
      "2nd_place_medal"
    ],
    tags: [
      "silver"
    ],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥉",
    description: "3rd place medal",
    category: "Activities",
    aliases: [
      "3rd_place_medal"
    ],
    tags: [
      "bronze"
    ],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "⚽",
    description: "soccer ball",
    category: "Activities",
    aliases: [
      "soccer"
    ],
    tags: [
      "sports"
    ],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "⚾",
    description: "baseball",
    category: "Activities",
    aliases: [
      "baseball"
    ],
    tags: [
      "sports"
    ],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🥎",
    description: "softball",
    category: "Activities",
    aliases: [
      "softball"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🏀",
    description: "basketball",
    category: "Activities",
    aliases: [
      "basketball"
    ],
    tags: [
      "sports"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏐",
    description: "volleyball",
    category: "Activities",
    aliases: [
      "volleyball"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏈",
    description: "american football",
    category: "Activities",
    aliases: [
      "football"
    ],
    tags: [
      "sports"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏉",
    description: "rugby football",
    category: "Activities",
    aliases: [
      "rugby_football"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎾",
    description: "tennis",
    category: "Activities",
    aliases: [
      "tennis"
    ],
    tags: [
      "sports"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥏",
    description: "flying disc",
    category: "Activities",
    aliases: [
      "flying_disc"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎳",
    description: "bowling",
    category: "Activities",
    aliases: [
      "bowling"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏏",
    description: "cricket game",
    category: "Activities",
    aliases: [
      "cricket_game"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏑",
    description: "field hockey",
    category: "Activities",
    aliases: [
      "field_hockey"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏒",
    description: "ice hockey",
    category: "Activities",
    aliases: [
      "ice_hockey"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🥍",
    description: "lacrosse",
    category: "Activities",
    aliases: [
      "lacrosse"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🏓",
    description: "ping pong",
    category: "Activities",
    aliases: [
      "ping_pong"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏸",
    description: "badminton",
    category: "Activities",
    aliases: [
      "badminton"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🥊",
    description: "boxing glove",
    category: "Activities",
    aliases: [
      "boxing_glove"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥋",
    description: "martial arts uniform",
    category: "Activities",
    aliases: [
      "martial_arts_uniform"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🥅",
    description: "goal net",
    category: "Activities",
    aliases: [
      "goal_net"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "⛳",
    description: "flag in hole",
    category: "Activities",
    aliases: [
      "golf"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "⛸️",
    description: "ice skate",
    category: "Activities",
    aliases: [
      "ice_skate"
    ],
    tags: [
      "skating"
    ],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🎣",
    description: "fishing pole",
    category: "Activities",
    aliases: [
      "fishing_pole_and_fish"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🤿",
    description: "diving mask",
    category: "Activities",
    aliases: [
      "diving_mask"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🎽",
    description: "running shirt",
    category: "Activities",
    aliases: [
      "running_shirt_with_sash"
    ],
    tags: [
      "marathon"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎿",
    description: "skis",
    category: "Activities",
    aliases: [
      "ski"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛷",
    description: "sled",
    category: "Activities",
    aliases: [
      "sled"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥌",
    description: "curling stone",
    category: "Activities",
    aliases: [
      "curling_stone"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎯",
    description: "bullseye",
    category: "Activities",
    aliases: [
      "dart"
    ],
    tags: [
      "target"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪀",
    description: "yo-yo",
    category: "Activities",
    aliases: [
      "yo_yo"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🪁",
    description: "kite",
    category: "Activities",
    aliases: [
      "kite"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🔫",
    description: "water pistol",
    category: "Activities",
    aliases: [
      "gun"
    ],
    tags: [
      "shoot",
      "weapon"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎱",
    description: "pool 8 ball",
    category: "Activities",
    aliases: [
      "8ball"
    ],
    tags: [
      "pool",
      "billiards"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔮",
    description: "crystal ball",
    category: "Activities",
    aliases: [
      "crystal_ball"
    ],
    tags: [
      "fortune"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪄",
    description: "magic wand",
    category: "Activities",
    aliases: [
      "magic_wand"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🎮",
    description: "video game",
    category: "Activities",
    aliases: [
      "video_game"
    ],
    tags: [
      "play",
      "controller",
      "console"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕹️",
    description: "joystick",
    category: "Activities",
    aliases: [
      "joystick"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎰",
    description: "slot machine",
    category: "Activities",
    aliases: [
      "slot_machine"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎲",
    description: "game die",
    category: "Activities",
    aliases: [
      "game_die"
    ],
    tags: [
      "dice",
      "gambling"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧩",
    description: "puzzle piece",
    category: "Activities",
    aliases: [
      "jigsaw"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧸",
    description: "teddy bear",
    category: "Activities",
    aliases: [
      "teddy_bear"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪅",
    description: "piñata",
    category: "Activities",
    aliases: [
      "pinata"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪩",
    description: "mirror ball",
    category: "Activities",
    aliases: [
      "mirror_ball"
    ],
    tags: [
      "disco",
      "party"
    ],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🪆",
    description: "nesting dolls",
    category: "Activities",
    aliases: [
      "nesting_dolls"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "♠️",
    description: "spade suit",
    category: "Activities",
    aliases: [
      "spades"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♥️",
    description: "heart suit",
    category: "Activities",
    aliases: [
      "hearts"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♦️",
    description: "diamond suit",
    category: "Activities",
    aliases: [
      "diamonds"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♣️",
    description: "club suit",
    category: "Activities",
    aliases: [
      "clubs"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♟️",
    description: "chess pawn",
    category: "Activities",
    aliases: [
      "chess_pawn"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🃏",
    description: "joker",
    category: "Activities",
    aliases: [
      "black_joker"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🀄",
    description: "mahjong red dragon",
    category: "Activities",
    aliases: [
      "mahjong"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🎴",
    description: "flower playing cards",
    category: "Activities",
    aliases: [
      "flower_playing_cards"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎭",
    description: "performing arts",
    category: "Activities",
    aliases: [
      "performing_arts"
    ],
    tags: [
      "theater",
      "drama"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🖼️",
    description: "framed picture",
    category: "Activities",
    aliases: [
      "framed_picture"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎨",
    description: "artist palette",
    category: "Activities",
    aliases: [
      "art"
    ],
    tags: [
      "design",
      "paint"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧵",
    description: "thread",
    category: "Activities",
    aliases: [
      "thread"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪡",
    description: "sewing needle",
    category: "Activities",
    aliases: [
      "sewing_needle"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧶",
    description: "yarn",
    category: "Activities",
    aliases: [
      "yarn"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪢",
    description: "knot",
    category: "Activities",
    aliases: [
      "knot"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "👓",
    description: "glasses",
    category: "Objects",
    aliases: [
      "eyeglasses"
    ],
    tags: [
      "glasses"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕶️",
    description: "sunglasses",
    category: "Objects",
    aliases: [
      "dark_sunglasses"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🥽",
    description: "goggles",
    category: "Objects",
    aliases: [
      "goggles"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥼",
    description: "lab coat",
    category: "Objects",
    aliases: [
      "lab_coat"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🦺",
    description: "safety vest",
    category: "Objects",
    aliases: [
      "safety_vest"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "👔",
    description: "necktie",
    category: "Objects",
    aliases: [
      "necktie"
    ],
    tags: [
      "shirt",
      "formal"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👕",
    description: "t-shirt",
    category: "Objects",
    aliases: [
      "shirt",
      "tshirt"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👖",
    description: "jeans",
    category: "Objects",
    aliases: [
      "jeans"
    ],
    tags: [
      "pants"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧣",
    description: "scarf",
    category: "Objects",
    aliases: [
      "scarf"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧤",
    description: "gloves",
    category: "Objects",
    aliases: [
      "gloves"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧥",
    description: "coat",
    category: "Objects",
    aliases: [
      "coat"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧦",
    description: "socks",
    category: "Objects",
    aliases: [
      "socks"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "👗",
    description: "dress",
    category: "Objects",
    aliases: [
      "dress"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👘",
    description: "kimono",
    category: "Objects",
    aliases: [
      "kimono"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥻",
    description: "sari",
    category: "Objects",
    aliases: [
      "sari"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🩱",
    description: "one-piece swimsuit",
    category: "Objects",
    aliases: [
      "one_piece_swimsuit"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🩲",
    description: "briefs",
    category: "Objects",
    aliases: [
      "swim_brief"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🩳",
    description: "shorts",
    category: "Objects",
    aliases: [
      "shorts"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "👙",
    description: "bikini",
    category: "Objects",
    aliases: [
      "bikini"
    ],
    tags: [
      "beach"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👚",
    description: "woman’s clothes",
    category: "Objects",
    aliases: [
      "womans_clothes"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪭",
    description: "folding hand fan",
    category: "Objects",
    aliases: [
      "folding_hand_fan"
    ],
    tags: [
      "sensu"
    ],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "👛",
    description: "purse",
    category: "Objects",
    aliases: [
      "purse"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👜",
    description: "handbag",
    category: "Objects",
    aliases: [
      "handbag"
    ],
    tags: [
      "bag"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👝",
    description: "clutch bag",
    category: "Objects",
    aliases: [
      "pouch"
    ],
    tags: [
      "bag"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛍️",
    description: "shopping bags",
    category: "Objects",
    aliases: [
      "shopping"
    ],
    tags: [
      "bags"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎒",
    description: "backpack",
    category: "Objects",
    aliases: [
      "school_satchel"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🩴",
    description: "thong sandal",
    category: "Objects",
    aliases: [
      "thong_sandal"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "👞",
    description: "man’s shoe",
    category: "Objects",
    aliases: [
      "mans_shoe",
      "shoe"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👟",
    description: "running shoe",
    category: "Objects",
    aliases: [
      "athletic_shoe"
    ],
    tags: [
      "sneaker",
      "sport",
      "running"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🥾",
    description: "hiking boot",
    category: "Objects",
    aliases: [
      "hiking_boot"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🥿",
    description: "flat shoe",
    category: "Objects",
    aliases: [
      "flat_shoe"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "👠",
    description: "high-heeled shoe",
    category: "Objects",
    aliases: [
      "high_heel"
    ],
    tags: [
      "shoe"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👡",
    description: "woman’s sandal",
    category: "Objects",
    aliases: [
      "sandal"
    ],
    tags: [
      "shoe"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🩰",
    description: "ballet shoes",
    category: "Objects",
    aliases: [
      "ballet_shoes"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "👢",
    description: "woman’s boot",
    category: "Objects",
    aliases: [
      "boot"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪮",
    description: "hair pick",
    category: "Objects",
    aliases: [
      "hair_pick"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "👑",
    description: "crown",
    category: "Objects",
    aliases: [
      "crown"
    ],
    tags: [
      "king",
      "queen",
      "royal"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "👒",
    description: "woman’s hat",
    category: "Objects",
    aliases: [
      "womans_hat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎩",
    description: "top hat",
    category: "Objects",
    aliases: [
      "tophat"
    ],
    tags: [
      "hat",
      "classy"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎓",
    description: "graduation cap",
    category: "Objects",
    aliases: [
      "mortar_board"
    ],
    tags: [
      "education",
      "college",
      "university",
      "graduation"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧢",
    description: "billed cap",
    category: "Objects",
    aliases: [
      "billed_cap"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪖",
    description: "military helmet",
    category: "Objects",
    aliases: [
      "military_helmet"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "⛑️",
    description: "rescue worker’s helmet",
    category: "Objects",
    aliases: [
      "rescue_worker_helmet"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "📿",
    description: "prayer beads",
    category: "Objects",
    aliases: [
      "prayer_beads"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "💄",
    description: "lipstick",
    category: "Objects",
    aliases: [
      "lipstick"
    ],
    tags: [
      "makeup"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💍",
    description: "ring",
    category: "Objects",
    aliases: [
      "ring"
    ],
    tags: [
      "wedding",
      "marriage",
      "engaged"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💎",
    description: "gem stone",
    category: "Objects",
    aliases: [
      "gem"
    ],
    tags: [
      "diamond"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔇",
    description: "muted speaker",
    category: "Objects",
    aliases: [
      "mute"
    ],
    tags: [
      "sound",
      "volume"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔈",
    description: "speaker low volume",
    category: "Objects",
    aliases: [
      "speaker"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔉",
    description: "speaker medium volume",
    category: "Objects",
    aliases: [
      "sound"
    ],
    tags: [
      "volume"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔊",
    description: "speaker high volume",
    category: "Objects",
    aliases: [
      "loud_sound"
    ],
    tags: [
      "volume"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📢",
    description: "loudspeaker",
    category: "Objects",
    aliases: [
      "loudspeaker"
    ],
    tags: [
      "announcement"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📣",
    description: "megaphone",
    category: "Objects",
    aliases: [
      "mega"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📯",
    description: "postal horn",
    category: "Objects",
    aliases: [
      "postal_horn"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔔",
    description: "bell",
    category: "Objects",
    aliases: [
      "bell"
    ],
    tags: [
      "sound",
      "notification"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔕",
    description: "bell with slash",
    category: "Objects",
    aliases: [
      "no_bell"
    ],
    tags: [
      "volume",
      "off"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎼",
    description: "musical score",
    category: "Objects",
    aliases: [
      "musical_score"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎵",
    description: "musical note",
    category: "Objects",
    aliases: [
      "musical_note"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎶",
    description: "musical notes",
    category: "Objects",
    aliases: [
      "notes"
    ],
    tags: [
      "music"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎙️",
    description: "studio microphone",
    category: "Objects",
    aliases: [
      "studio_microphone"
    ],
    tags: [
      "podcast"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎚️",
    description: "level slider",
    category: "Objects",
    aliases: [
      "level_slider"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎛️",
    description: "control knobs",
    category: "Objects",
    aliases: [
      "control_knobs"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎤",
    description: "microphone",
    category: "Objects",
    aliases: [
      "microphone"
    ],
    tags: [
      "sing"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎧",
    description: "headphone",
    category: "Objects",
    aliases: [
      "headphones"
    ],
    tags: [
      "music",
      "earphones"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📻",
    description: "radio",
    category: "Objects",
    aliases: [
      "radio"
    ],
    tags: [
      "podcast"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎷",
    description: "saxophone",
    category: "Objects",
    aliases: [
      "saxophone"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪗",
    description: "accordion",
    category: "Objects",
    aliases: [
      "accordion"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🎸",
    description: "guitar",
    category: "Objects",
    aliases: [
      "guitar"
    ],
    tags: [
      "rock"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎹",
    description: "musical keyboard",
    category: "Objects",
    aliases: [
      "musical_keyboard"
    ],
    tags: [
      "piano"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎺",
    description: "trumpet",
    category: "Objects",
    aliases: [
      "trumpet"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎻",
    description: "violin",
    category: "Objects",
    aliases: [
      "violin"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪕",
    description: "banjo",
    category: "Objects",
    aliases: [
      "banjo"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🥁",
    description: "drum",
    category: "Objects",
    aliases: [
      "drum"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "10.2"
  },
  {
    emoji: "🪘",
    description: "long drum",
    category: "Objects",
    aliases: [
      "long_drum"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪇",
    description: "maracas",
    category: "Objects",
    aliases: [
      "maracas"
    ],
    tags: [
      "shaker"
    ],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "🪈",
    description: "flute",
    category: "Objects",
    aliases: [
      "flute"
    ],
    tags: [
      "recorder"
    ],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "📱",
    description: "mobile phone",
    category: "Objects",
    aliases: [
      "iphone"
    ],
    tags: [
      "smartphone",
      "mobile"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📲",
    description: "mobile phone with arrow",
    category: "Objects",
    aliases: [
      "calling"
    ],
    tags: [
      "call",
      "incoming"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☎️",
    description: "telephone",
    category: "Objects",
    aliases: [
      "phone",
      "telephone"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "📞",
    description: "telephone receiver",
    category: "Objects",
    aliases: [
      "telephone_receiver"
    ],
    tags: [
      "phone",
      "call"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📟",
    description: "pager",
    category: "Objects",
    aliases: [
      "pager"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📠",
    description: "fax machine",
    category: "Objects",
    aliases: [
      "fax"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔋",
    description: "battery",
    category: "Objects",
    aliases: [
      "battery"
    ],
    tags: [
      "power"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪫",
    description: "low battery",
    category: "Objects",
    aliases: [
      "low_battery"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🔌",
    description: "electric plug",
    category: "Objects",
    aliases: [
      "electric_plug"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💻",
    description: "laptop",
    category: "Objects",
    aliases: [
      "computer"
    ],
    tags: [
      "desktop",
      "screen"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🖥️",
    description: "desktop computer",
    category: "Objects",
    aliases: [
      "desktop_computer"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🖨️",
    description: "printer",
    category: "Objects",
    aliases: [
      "printer"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⌨️",
    description: "keyboard",
    category: "Objects",
    aliases: [
      "keyboard"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "🖱️",
    description: "computer mouse",
    category: "Objects",
    aliases: [
      "computer_mouse"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🖲️",
    description: "trackball",
    category: "Objects",
    aliases: [
      "trackball"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "💽",
    description: "computer disk",
    category: "Objects",
    aliases: [
      "minidisc"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💾",
    description: "floppy disk",
    category: "Objects",
    aliases: [
      "floppy_disk"
    ],
    tags: [
      "save"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💿",
    description: "optical disk",
    category: "Objects",
    aliases: [
      "cd"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📀",
    description: "dvd",
    category: "Objects",
    aliases: [
      "dvd"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧮",
    description: "abacus",
    category: "Objects",
    aliases: [
      "abacus"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎥",
    description: "movie camera",
    category: "Objects",
    aliases: [
      "movie_camera"
    ],
    tags: [
      "film",
      "video"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎞️",
    description: "film frames",
    category: "Objects",
    aliases: [
      "film_strip"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📽️",
    description: "film projector",
    category: "Objects",
    aliases: [
      "film_projector"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🎬",
    description: "clapper board",
    category: "Objects",
    aliases: [
      "clapper"
    ],
    tags: [
      "film"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📺",
    description: "television",
    category: "Objects",
    aliases: [
      "tv"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📷",
    description: "camera",
    category: "Objects",
    aliases: [
      "camera"
    ],
    tags: [
      "photo"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📸",
    description: "camera with flash",
    category: "Objects",
    aliases: [
      "camera_flash"
    ],
    tags: [
      "photo"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📹",
    description: "video camera",
    category: "Objects",
    aliases: [
      "video_camera"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📼",
    description: "videocassette",
    category: "Objects",
    aliases: [
      "vhs"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔍",
    description: "magnifying glass tilted left",
    category: "Objects",
    aliases: [
      "mag"
    ],
    tags: [
      "search",
      "zoom"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔎",
    description: "magnifying glass tilted right",
    category: "Objects",
    aliases: [
      "mag_right"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🕯️",
    description: "candle",
    category: "Objects",
    aliases: [
      "candle"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "💡",
    description: "light bulb",
    category: "Objects",
    aliases: [
      "bulb"
    ],
    tags: [
      "idea",
      "light"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔦",
    description: "flashlight",
    category: "Objects",
    aliases: [
      "flashlight"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏮",
    description: "red paper lantern",
    category: "Objects",
    aliases: [
      "izakaya_lantern",
      "lantern"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪔",
    description: "diya lamp",
    category: "Objects",
    aliases: [
      "diya_lamp"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "📔",
    description: "notebook with decorative cover",
    category: "Objects",
    aliases: [
      "notebook_with_decorative_cover"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📕",
    description: "closed book",
    category: "Objects",
    aliases: [
      "closed_book"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📖",
    description: "open book",
    category: "Objects",
    aliases: [
      "book",
      "open_book"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📗",
    description: "green book",
    category: "Objects",
    aliases: [
      "green_book"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📘",
    description: "blue book",
    category: "Objects",
    aliases: [
      "blue_book"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📙",
    description: "orange book",
    category: "Objects",
    aliases: [
      "orange_book"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📚",
    description: "books",
    category: "Objects",
    aliases: [
      "books"
    ],
    tags: [
      "library"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📓",
    description: "notebook",
    category: "Objects",
    aliases: [
      "notebook"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📒",
    description: "ledger",
    category: "Objects",
    aliases: [
      "ledger"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📃",
    description: "page with curl",
    category: "Objects",
    aliases: [
      "page_with_curl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📜",
    description: "scroll",
    category: "Objects",
    aliases: [
      "scroll"
    ],
    tags: [
      "document"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📄",
    description: "page facing up",
    category: "Objects",
    aliases: [
      "page_facing_up"
    ],
    tags: [
      "document"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📰",
    description: "newspaper",
    category: "Objects",
    aliases: [
      "newspaper"
    ],
    tags: [
      "press"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗞️",
    description: "rolled-up newspaper",
    category: "Objects",
    aliases: [
      "newspaper_roll"
    ],
    tags: [
      "press"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📑",
    description: "bookmark tabs",
    category: "Objects",
    aliases: [
      "bookmark_tabs"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔖",
    description: "bookmark",
    category: "Objects",
    aliases: [
      "bookmark"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏷️",
    description: "label",
    category: "Objects",
    aliases: [
      "label"
    ],
    tags: [
      "tag"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "💰",
    description: "money bag",
    category: "Objects",
    aliases: [
      "moneybag"
    ],
    tags: [
      "dollar",
      "cream"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪙",
    description: "coin",
    category: "Objects",
    aliases: [
      "coin"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "💴",
    description: "yen banknote",
    category: "Objects",
    aliases: [
      "yen"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💵",
    description: "dollar banknote",
    category: "Objects",
    aliases: [
      "dollar"
    ],
    tags: [
      "money"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💶",
    description: "euro banknote",
    category: "Objects",
    aliases: [
      "euro"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💷",
    description: "pound banknote",
    category: "Objects",
    aliases: [
      "pound"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💸",
    description: "money with wings",
    category: "Objects",
    aliases: [
      "money_with_wings"
    ],
    tags: [
      "dollar"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💳",
    description: "credit card",
    category: "Objects",
    aliases: [
      "credit_card"
    ],
    tags: [
      "subscription"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🧾",
    description: "receipt",
    category: "Objects",
    aliases: [
      "receipt"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "💹",
    description: "chart increasing with yen",
    category: "Objects",
    aliases: [
      "chart"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "✉️",
    description: "envelope",
    category: "Objects",
    aliases: [
      "envelope"
    ],
    tags: [
      "letter",
      "email"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "📧",
    description: "e-mail",
    category: "Objects",
    aliases: [
      "email",
      "e-mail"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📨",
    description: "incoming envelope",
    category: "Objects",
    aliases: [
      "incoming_envelope"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📩",
    description: "envelope with arrow",
    category: "Objects",
    aliases: [
      "envelope_with_arrow"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📤",
    description: "outbox tray",
    category: "Objects",
    aliases: [
      "outbox_tray"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📥",
    description: "inbox tray",
    category: "Objects",
    aliases: [
      "inbox_tray"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📦",
    description: "package",
    category: "Objects",
    aliases: [
      "package"
    ],
    tags: [
      "shipping"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📫",
    description: "closed mailbox with raised flag",
    category: "Objects",
    aliases: [
      "mailbox"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📪",
    description: "closed mailbox with lowered flag",
    category: "Objects",
    aliases: [
      "mailbox_closed"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📬",
    description: "open mailbox with raised flag",
    category: "Objects",
    aliases: [
      "mailbox_with_mail"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📭",
    description: "open mailbox with lowered flag",
    category: "Objects",
    aliases: [
      "mailbox_with_no_mail"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📮",
    description: "postbox",
    category: "Objects",
    aliases: [
      "postbox"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗳️",
    description: "ballot box with ballot",
    category: "Objects",
    aliases: [
      "ballot_box"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "✏️",
    description: "pencil",
    category: "Objects",
    aliases: [
      "pencil2"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "✒️",
    description: "black nib",
    category: "Objects",
    aliases: [
      "black_nib"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🖋️",
    description: "fountain pen",
    category: "Objects",
    aliases: [
      "fountain_pen"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🖊️",
    description: "pen",
    category: "Objects",
    aliases: [
      "pen"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🖌️",
    description: "paintbrush",
    category: "Objects",
    aliases: [
      "paintbrush"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🖍️",
    description: "crayon",
    category: "Objects",
    aliases: [
      "crayon"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📝",
    description: "memo",
    category: "Objects",
    aliases: [
      "memo",
      "pencil"
    ],
    tags: [
      "document",
      "note"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💼",
    description: "briefcase",
    category: "Objects",
    aliases: [
      "briefcase"
    ],
    tags: [
      "business"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📁",
    description: "file folder",
    category: "Objects",
    aliases: [
      "file_folder"
    ],
    tags: [
      "directory"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📂",
    description: "open file folder",
    category: "Objects",
    aliases: [
      "open_file_folder"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗂️",
    description: "card index dividers",
    category: "Objects",
    aliases: [
      "card_index_dividers"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📅",
    description: "calendar",
    category: "Objects",
    aliases: [
      "date"
    ],
    tags: [
      "calendar",
      "schedule"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📆",
    description: "tear-off calendar",
    category: "Objects",
    aliases: [
      "calendar"
    ],
    tags: [
      "schedule"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗒️",
    description: "spiral notepad",
    category: "Objects",
    aliases: [
      "spiral_notepad"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🗓️",
    description: "spiral calendar",
    category: "Objects",
    aliases: [
      "spiral_calendar"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📇",
    description: "card index",
    category: "Objects",
    aliases: [
      "card_index"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📈",
    description: "chart increasing",
    category: "Objects",
    aliases: [
      "chart_with_upwards_trend"
    ],
    tags: [
      "graph",
      "metrics"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📉",
    description: "chart decreasing",
    category: "Objects",
    aliases: [
      "chart_with_downwards_trend"
    ],
    tags: [
      "graph",
      "metrics"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📊",
    description: "bar chart",
    category: "Objects",
    aliases: [
      "bar_chart"
    ],
    tags: [
      "stats",
      "metrics"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📋",
    description: "clipboard",
    category: "Objects",
    aliases: [
      "clipboard"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📌",
    description: "pushpin",
    category: "Objects",
    aliases: [
      "pushpin"
    ],
    tags: [
      "location"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📍",
    description: "round pushpin",
    category: "Objects",
    aliases: [
      "round_pushpin"
    ],
    tags: [
      "location"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📎",
    description: "paperclip",
    category: "Objects",
    aliases: [
      "paperclip"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🖇️",
    description: "linked paperclips",
    category: "Objects",
    aliases: [
      "paperclips"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "📏",
    description: "straight ruler",
    category: "Objects",
    aliases: [
      "straight_ruler"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📐",
    description: "triangular ruler",
    category: "Objects",
    aliases: [
      "triangular_ruler"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "✂️",
    description: "scissors",
    category: "Objects",
    aliases: [
      "scissors"
    ],
    tags: [
      "cut"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🗃️",
    description: "card file box",
    category: "Objects",
    aliases: [
      "card_file_box"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🗄️",
    description: "file cabinet",
    category: "Objects",
    aliases: [
      "file_cabinet"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🗑️",
    description: "wastebasket",
    category: "Objects",
    aliases: [
      "wastebasket"
    ],
    tags: [
      "trash"
    ],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🔒",
    description: "locked",
    category: "Objects",
    aliases: [
      "lock"
    ],
    tags: [
      "security",
      "private"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔓",
    description: "unlocked",
    category: "Objects",
    aliases: [
      "unlock"
    ],
    tags: [
      "security"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔏",
    description: "locked with pen",
    category: "Objects",
    aliases: [
      "lock_with_ink_pen"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔐",
    description: "locked with key",
    category: "Objects",
    aliases: [
      "closed_lock_with_key"
    ],
    tags: [
      "security"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔑",
    description: "key",
    category: "Objects",
    aliases: [
      "key"
    ],
    tags: [
      "lock",
      "password"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🗝️",
    description: "old key",
    category: "Objects",
    aliases: [
      "old_key"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🔨",
    description: "hammer",
    category: "Objects",
    aliases: [
      "hammer"
    ],
    tags: [
      "tool"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪓",
    description: "axe",
    category: "Objects",
    aliases: [
      "axe"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "⛏️",
    description: "pick",
    category: "Objects",
    aliases: [
      "pick"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "⚒️",
    description: "hammer and pick",
    category: "Objects",
    aliases: [
      "hammer_and_pick"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🛠️",
    description: "hammer and wrench",
    category: "Objects",
    aliases: [
      "hammer_and_wrench"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🗡️",
    description: "dagger",
    category: "Objects",
    aliases: [
      "dagger"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⚔️",
    description: "crossed swords",
    category: "Objects",
    aliases: [
      "crossed_swords"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "💣",
    description: "bomb",
    category: "Objects",
    aliases: [
      "bomb"
    ],
    tags: [
      "boom"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪃",
    description: "boomerang",
    category: "Objects",
    aliases: [
      "boomerang"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🏹",
    description: "bow and arrow",
    category: "Objects",
    aliases: [
      "bow_and_arrow"
    ],
    tags: [
      "archery"
    ],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛡️",
    description: "shield",
    category: "Objects",
    aliases: [
      "shield"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🪚",
    description: "carpentry saw",
    category: "Objects",
    aliases: [
      "carpentry_saw"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🔧",
    description: "wrench",
    category: "Objects",
    aliases: [
      "wrench"
    ],
    tags: [
      "tool"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪛",
    description: "screwdriver",
    category: "Objects",
    aliases: [
      "screwdriver"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🔩",
    description: "nut and bolt",
    category: "Objects",
    aliases: [
      "nut_and_bolt"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⚙️",
    description: "gear",
    category: "Objects",
    aliases: [
      "gear"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🗜️",
    description: "clamp",
    category: "Objects",
    aliases: [
      "clamp"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⚖️",
    description: "balance scale",
    category: "Objects",
    aliases: [
      "balance_scale"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🦯",
    description: "white cane",
    category: "Objects",
    aliases: [
      "probing_cane"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🔗",
    description: "link",
    category: "Objects",
    aliases: [
      "link"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⛓️",
    description: "chains",
    category: "Objects",
    aliases: [
      "chains"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "9.1"
  },
  {
    emoji: "🪝",
    description: "hook",
    category: "Objects",
    aliases: [
      "hook"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧰",
    description: "toolbox",
    category: "Objects",
    aliases: [
      "toolbox"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧲",
    description: "magnet",
    category: "Objects",
    aliases: [
      "magnet"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪜",
    description: "ladder",
    category: "Objects",
    aliases: [
      "ladder"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "⚗️",
    description: "alembic",
    category: "Objects",
    aliases: [
      "alembic"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🧪",
    description: "test tube",
    category: "Objects",
    aliases: [
      "test_tube"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧫",
    description: "petri dish",
    category: "Objects",
    aliases: [
      "petri_dish"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧬",
    description: "dna",
    category: "Objects",
    aliases: [
      "dna"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🔬",
    description: "microscope",
    category: "Objects",
    aliases: [
      "microscope"
    ],
    tags: [
      "science",
      "laboratory",
      "investigate"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔭",
    description: "telescope",
    category: "Objects",
    aliases: [
      "telescope"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📡",
    description: "satellite antenna",
    category: "Objects",
    aliases: [
      "satellite"
    ],
    tags: [
      "signal"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💉",
    description: "syringe",
    category: "Objects",
    aliases: [
      "syringe"
    ],
    tags: [
      "health",
      "hospital",
      "needle"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🩸",
    description: "drop of blood",
    category: "Objects",
    aliases: [
      "drop_of_blood"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "💊",
    description: "pill",
    category: "Objects",
    aliases: [
      "pill"
    ],
    tags: [
      "health",
      "medicine"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🩹",
    description: "adhesive bandage",
    category: "Objects",
    aliases: [
      "adhesive_bandage"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🩼",
    description: "crutch",
    category: "Objects",
    aliases: [
      "crutch"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🩺",
    description: "stethoscope",
    category: "Objects",
    aliases: [
      "stethoscope"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🩻",
    description: "x-ray",
    category: "Objects",
    aliases: [
      "x_ray"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🚪",
    description: "door",
    category: "Objects",
    aliases: [
      "door"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛗",
    description: "elevator",
    category: "Objects",
    aliases: [
      "elevator"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪞",
    description: "mirror",
    category: "Objects",
    aliases: [
      "mirror"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪟",
    description: "window",
    category: "Objects",
    aliases: [
      "window"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🛏️",
    description: "bed",
    category: "Objects",
    aliases: [
      "bed"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🛋️",
    description: "couch and lamp",
    category: "Objects",
    aliases: [
      "couch_and_lamp"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🪑",
    description: "chair",
    category: "Objects",
    aliases: [
      "chair"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🚽",
    description: "toilet",
    category: "Objects",
    aliases: [
      "toilet"
    ],
    tags: [
      "wc"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪠",
    description: "plunger",
    category: "Objects",
    aliases: [
      "plunger"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🚿",
    description: "shower",
    category: "Objects",
    aliases: [
      "shower"
    ],
    tags: [
      "bath"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛁",
    description: "bathtub",
    category: "Objects",
    aliases: [
      "bathtub"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪤",
    description: "mouse trap",
    category: "Objects",
    aliases: [
      "mouse_trap"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪒",
    description: "razor",
    category: "Objects",
    aliases: [
      "razor"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🧴",
    description: "lotion bottle",
    category: "Objects",
    aliases: [
      "lotion_bottle"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧷",
    description: "safety pin",
    category: "Objects",
    aliases: [
      "safety_pin"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧹",
    description: "broom",
    category: "Objects",
    aliases: [
      "broom"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧺",
    description: "basket",
    category: "Objects",
    aliases: [
      "basket"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧻",
    description: "roll of paper",
    category: "Objects",
    aliases: [
      "roll_of_paper"
    ],
    tags: [
      "toilet"
    ],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪣",
    description: "bucket",
    category: "Objects",
    aliases: [
      "bucket"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧼",
    description: "soap",
    category: "Objects",
    aliases: [
      "soap"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🫧",
    description: "bubbles",
    category: "Objects",
    aliases: [
      "bubbles"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🪥",
    description: "toothbrush",
    category: "Objects",
    aliases: [
      "toothbrush"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🧽",
    description: "sponge",
    category: "Objects",
    aliases: [
      "sponge"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🧯",
    description: "fire extinguisher",
    category: "Objects",
    aliases: [
      "fire_extinguisher"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🛒",
    description: "shopping cart",
    category: "Objects",
    aliases: [
      "shopping_cart"
    ],
    tags: [],
    unicode_version: "9.0",
    ios_version: "10.2"
  },
  {
    emoji: "🚬",
    description: "cigarette",
    category: "Objects",
    aliases: [
      "smoking"
    ],
    tags: [
      "cigarette"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⚰️",
    description: "coffin",
    category: "Objects",
    aliases: [
      "coffin"
    ],
    tags: [
      "funeral"
    ],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🪦",
    description: "headstone",
    category: "Objects",
    aliases: [
      "headstone"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "⚱️",
    description: "funeral urn",
    category: "Objects",
    aliases: [
      "funeral_urn"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🧿",
    description: "nazar amulet",
    category: "Objects",
    aliases: [
      "nazar_amulet"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🪬",
    description: "hamsa",
    category: "Objects",
    aliases: [
      "hamsa"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🗿",
    description: "moai",
    category: "Objects",
    aliases: [
      "moyai"
    ],
    tags: [
      "stone"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪧",
    description: "placard",
    category: "Objects",
    aliases: [
      "placard"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🪪",
    description: "identification card",
    category: "Objects",
    aliases: [
      "identification_card"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "🏧",
    description: "ATM sign",
    category: "Symbols",
    aliases: [
      "atm"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚮",
    description: "litter in bin sign",
    category: "Symbols",
    aliases: [
      "put_litter_in_its_place"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚰",
    description: "potable water",
    category: "Symbols",
    aliases: [
      "potable_water"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "♿",
    description: "wheelchair symbol",
    category: "Symbols",
    aliases: [
      "wheelchair"
    ],
    tags: [
      "accessibility"
    ],
    unicode_version: "4.1",
    ios_version: "6.0"
  },
  {
    emoji: "🚹",
    description: "men’s room",
    category: "Symbols",
    aliases: [
      "mens"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚺",
    description: "women’s room",
    category: "Symbols",
    aliases: [
      "womens"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚻",
    description: "restroom",
    category: "Symbols",
    aliases: [
      "restroom"
    ],
    tags: [
      "toilet"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚼",
    description: "baby symbol",
    category: "Symbols",
    aliases: [
      "baby_symbol"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚾",
    description: "water closet",
    category: "Symbols",
    aliases: [
      "wc"
    ],
    tags: [
      "toilet",
      "restroom"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛂",
    description: "passport control",
    category: "Symbols",
    aliases: [
      "passport_control"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛃",
    description: "customs",
    category: "Symbols",
    aliases: [
      "customs"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛄",
    description: "baggage claim",
    category: "Symbols",
    aliases: [
      "baggage_claim"
    ],
    tags: [
      "airport"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛅",
    description: "left luggage",
    category: "Symbols",
    aliases: [
      "left_luggage"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⚠️",
    description: "warning",
    category: "Symbols",
    aliases: [
      "warning"
    ],
    tags: [
      "wip"
    ],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚸",
    description: "children crossing",
    category: "Symbols",
    aliases: [
      "children_crossing"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⛔",
    description: "no entry",
    category: "Symbols",
    aliases: [
      "no_entry"
    ],
    tags: [
      "limit"
    ],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🚫",
    description: "prohibited",
    category: "Symbols",
    aliases: [
      "no_entry_sign"
    ],
    tags: [
      "block",
      "forbidden"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚳",
    description: "no bicycles",
    category: "Symbols",
    aliases: [
      "no_bicycles"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚭",
    description: "no smoking",
    category: "Symbols",
    aliases: [
      "no_smoking"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚯",
    description: "no littering",
    category: "Symbols",
    aliases: [
      "do_not_litter"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚱",
    description: "non-potable water",
    category: "Symbols",
    aliases: [
      "non-potable_water"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚷",
    description: "no pedestrians",
    category: "Symbols",
    aliases: [
      "no_pedestrians"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📵",
    description: "no mobile phones",
    category: "Symbols",
    aliases: [
      "no_mobile_phones"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔞",
    description: "no one under eighteen",
    category: "Symbols",
    aliases: [
      "underage"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☢️",
    description: "radioactive",
    category: "Symbols",
    aliases: [
      "radioactive"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☣️",
    description: "biohazard",
    category: "Symbols",
    aliases: [
      "biohazard"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "⬆️",
    description: "up arrow",
    category: "Symbols",
    aliases: [
      "arrow_up"
    ],
    tags: [],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "↗️",
    description: "up-right arrow",
    category: "Symbols",
    aliases: [
      "arrow_upper_right"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "➡️",
    description: "right arrow",
    category: "Symbols",
    aliases: [
      "arrow_right"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "↘️",
    description: "down-right arrow",
    category: "Symbols",
    aliases: [
      "arrow_lower_right"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⬇️",
    description: "down arrow",
    category: "Symbols",
    aliases: [
      "arrow_down"
    ],
    tags: [],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "↙️",
    description: "down-left arrow",
    category: "Symbols",
    aliases: [
      "arrow_lower_left"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⬅️",
    description: "left arrow",
    category: "Symbols",
    aliases: [
      "arrow_left"
    ],
    tags: [],
    unicode_version: "4.0",
    ios_version: "6.0"
  },
  {
    emoji: "↖️",
    description: "up-left arrow",
    category: "Symbols",
    aliases: [
      "arrow_upper_left"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "↕️",
    description: "up-down arrow",
    category: "Symbols",
    aliases: [
      "arrow_up_down"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "↔️",
    description: "left-right arrow",
    category: "Symbols",
    aliases: [
      "left_right_arrow"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "↩️",
    description: "right arrow curving left",
    category: "Symbols",
    aliases: [
      "leftwards_arrow_with_hook"
    ],
    tags: [
      "return"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "↪️",
    description: "left arrow curving right",
    category: "Symbols",
    aliases: [
      "arrow_right_hook"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⤴️",
    description: "right arrow curving up",
    category: "Symbols",
    aliases: [
      "arrow_heading_up"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⤵️",
    description: "right arrow curving down",
    category: "Symbols",
    aliases: [
      "arrow_heading_down"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🔃",
    description: "clockwise vertical arrows",
    category: "Symbols",
    aliases: [
      "arrows_clockwise"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔄",
    description: "counterclockwise arrows button",
    category: "Symbols",
    aliases: [
      "arrows_counterclockwise"
    ],
    tags: [
      "sync"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔙",
    description: "BACK arrow",
    category: "Symbols",
    aliases: [
      "back"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔚",
    description: "END arrow",
    category: "Symbols",
    aliases: [
      "end"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔛",
    description: "ON! arrow",
    category: "Symbols",
    aliases: [
      "on"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔜",
    description: "SOON arrow",
    category: "Symbols",
    aliases: [
      "soon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔝",
    description: "TOP arrow",
    category: "Symbols",
    aliases: [
      "top"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛐",
    description: "place of worship",
    category: "Symbols",
    aliases: [
      "place_of_worship"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "⚛️",
    description: "atom symbol",
    category: "Symbols",
    aliases: [
      "atom_symbol"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🕉️",
    description: "om",
    category: "Symbols",
    aliases: [
      "om"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "✡️",
    description: "star of David",
    category: "Symbols",
    aliases: [
      "star_of_david"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☸️",
    description: "wheel of dharma",
    category: "Symbols",
    aliases: [
      "wheel_of_dharma"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☯️",
    description: "yin yang",
    category: "Symbols",
    aliases: [
      "yin_yang"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "✝️",
    description: "latin cross",
    category: "Symbols",
    aliases: [
      "latin_cross"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☦️",
    description: "orthodox cross",
    category: "Symbols",
    aliases: [
      "orthodox_cross"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☪️",
    description: "star and crescent",
    category: "Symbols",
    aliases: [
      "star_and_crescent"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "☮️",
    description: "peace symbol",
    category: "Symbols",
    aliases: [
      "peace_symbol"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "🕎",
    description: "menorah",
    category: "Symbols",
    aliases: [
      "menorah"
    ],
    tags: [],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🔯",
    description: "dotted six-pointed star",
    category: "Symbols",
    aliases: [
      "six_pointed_star"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🪯",
    description: "khanda",
    category: "Symbols",
    aliases: [
      "khanda"
    ],
    tags: [],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "♈",
    description: "Aries",
    category: "Symbols",
    aliases: [
      "aries"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♉",
    description: "Taurus",
    category: "Symbols",
    aliases: [
      "taurus"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♊",
    description: "Gemini",
    category: "Symbols",
    aliases: [
      "gemini"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♋",
    description: "Cancer",
    category: "Symbols",
    aliases: [
      "cancer"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♌",
    description: "Leo",
    category: "Symbols",
    aliases: [
      "leo"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♍",
    description: "Virgo",
    category: "Symbols",
    aliases: [
      "virgo"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♎",
    description: "Libra",
    category: "Symbols",
    aliases: [
      "libra"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♏",
    description: "Scorpio",
    category: "Symbols",
    aliases: [
      "scorpius"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♐",
    description: "Sagittarius",
    category: "Symbols",
    aliases: [
      "sagittarius"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♑",
    description: "Capricorn",
    category: "Symbols",
    aliases: [
      "capricorn"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♒",
    description: "Aquarius",
    category: "Symbols",
    aliases: [
      "aquarius"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "♓",
    description: "Pisces",
    category: "Symbols",
    aliases: [
      "pisces"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⛎",
    description: "Ophiuchus",
    category: "Symbols",
    aliases: [
      "ophiuchus"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔀",
    description: "shuffle tracks button",
    category: "Symbols",
    aliases: [
      "twisted_rightwards_arrows"
    ],
    tags: [
      "shuffle"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔁",
    description: "repeat button",
    category: "Symbols",
    aliases: [
      "repeat"
    ],
    tags: [
      "loop"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔂",
    description: "repeat single button",
    category: "Symbols",
    aliases: [
      "repeat_one"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "▶️",
    description: "play button",
    category: "Symbols",
    aliases: [
      "arrow_forward"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⏩",
    description: "fast-forward button",
    category: "Symbols",
    aliases: [
      "fast_forward"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏭️",
    description: "next track button",
    category: "Symbols",
    aliases: [
      "next_track_button"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.1"
  },
  {
    emoji: "⏯️",
    description: "play or pause button",
    category: "Symbols",
    aliases: [
      "play_or_pause_button"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.1"
  },
  {
    emoji: "◀️",
    description: "reverse button",
    category: "Symbols",
    aliases: [
      "arrow_backward"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⏪",
    description: "fast reverse button",
    category: "Symbols",
    aliases: [
      "rewind"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏮️",
    description: "last track button",
    category: "Symbols",
    aliases: [
      "previous_track_button"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.1"
  },
  {
    emoji: "🔼",
    description: "upwards button",
    category: "Symbols",
    aliases: [
      "arrow_up_small"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏫",
    description: "fast up button",
    category: "Symbols",
    aliases: [
      "arrow_double_up"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔽",
    description: "downwards button",
    category: "Symbols",
    aliases: [
      "arrow_down_small"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏬",
    description: "fast down button",
    category: "Symbols",
    aliases: [
      "arrow_double_down"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⏸️",
    description: "pause button",
    category: "Symbols",
    aliases: [
      "pause_button"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⏹️",
    description: "stop button",
    category: "Symbols",
    aliases: [
      "stop_button"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⏺️",
    description: "record button",
    category: "Symbols",
    aliases: [
      "record_button"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "⏏️",
    description: "eject button",
    category: "Symbols",
    aliases: [
      "eject_button"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🎦",
    description: "cinema",
    category: "Symbols",
    aliases: [
      "cinema"
    ],
    tags: [
      "film",
      "movie"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔅",
    description: "dim button",
    category: "Symbols",
    aliases: [
      "low_brightness"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔆",
    description: "bright button",
    category: "Symbols",
    aliases: [
      "high_brightness"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📶",
    description: "antenna bars",
    category: "Symbols",
    aliases: [
      "signal_strength"
    ],
    tags: [
      "wifi"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🛜",
    description: "wireless",
    category: "Symbols",
    aliases: [
      "wireless"
    ],
    tags: [
      "wifi"
    ],
    unicode_version: "15.0",
    ios_version: "16.4"
  },
  {
    emoji: "📳",
    description: "vibration mode",
    category: "Symbols",
    aliases: [
      "vibration_mode"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📴",
    description: "mobile phone off",
    category: "Symbols",
    aliases: [
      "mobile_phone_off"
    ],
    tags: [
      "mute",
      "off"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "♀️",
    description: "female sign",
    category: "Symbols",
    aliases: [
      "female_sign"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "♂️",
    description: "male sign",
    category: "Symbols",
    aliases: [
      "male_sign"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "⚧️",
    description: "transgender symbol",
    category: "Symbols",
    aliases: [
      "transgender_symbol"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "✖️",
    description: "multiply",
    category: "Symbols",
    aliases: [
      "heavy_multiplication_x"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "➕",
    description: "plus",
    category: "Symbols",
    aliases: [
      "heavy_plus_sign"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "➖",
    description: "minus",
    category: "Symbols",
    aliases: [
      "heavy_minus_sign"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "➗",
    description: "divide",
    category: "Symbols",
    aliases: [
      "heavy_division_sign"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🟰",
    description: "heavy equals sign",
    category: "Symbols",
    aliases: [
      "heavy_equals_sign"
    ],
    tags: [],
    unicode_version: "14.0",
    ios_version: "15.4"
  },
  {
    emoji: "♾️",
    description: "infinity",
    category: "Symbols",
    aliases: [
      "infinity"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "‼️",
    description: "double exclamation mark",
    category: "Symbols",
    aliases: [
      "bangbang"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "⁉️",
    description: "exclamation question mark",
    category: "Symbols",
    aliases: [
      "interrobang"
    ],
    tags: [],
    unicode_version: "3.0",
    ios_version: "6.0"
  },
  {
    emoji: "❓",
    description: "red question mark",
    category: "Symbols",
    aliases: [
      "question"
    ],
    tags: [
      "confused"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❔",
    description: "white question mark",
    category: "Symbols",
    aliases: [
      "grey_question"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❕",
    description: "white exclamation mark",
    category: "Symbols",
    aliases: [
      "grey_exclamation"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❗",
    description: "red exclamation mark",
    category: "Symbols",
    aliases: [
      "exclamation",
      "heavy_exclamation_mark"
    ],
    tags: [
      "bang"
    ],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "〰️",
    description: "wavy dash",
    category: "Symbols",
    aliases: [
      "wavy_dash"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "💱",
    description: "currency exchange",
    category: "Symbols",
    aliases: [
      "currency_exchange"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💲",
    description: "heavy dollar sign",
    category: "Symbols",
    aliases: [
      "heavy_dollar_sign"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⚕️",
    description: "medical symbol",
    category: "Symbols",
    aliases: [
      "medical_symbol"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "♻️",
    description: "recycling symbol",
    category: "Symbols",
    aliases: [
      "recycle"
    ],
    tags: [
      "environment",
      "green"
    ],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "⚜️",
    description: "fleur-de-lis",
    category: "Symbols",
    aliases: [
      "fleur_de_lis"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "9.1"
  },
  {
    emoji: "🔱",
    description: "trident emblem",
    category: "Symbols",
    aliases: [
      "trident"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "📛",
    description: "name badge",
    category: "Symbols",
    aliases: [
      "name_badge"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔰",
    description: "Japanese symbol for beginner",
    category: "Symbols",
    aliases: [
      "beginner"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "⭕",
    description: "hollow red circle",
    category: "Symbols",
    aliases: [
      "o"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "✅",
    description: "check mark button",
    category: "Symbols",
    aliases: [
      "white_check_mark"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "☑️",
    description: "check box with check",
    category: "Symbols",
    aliases: [
      "ballot_box_with_check"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "✔️",
    description: "check mark",
    category: "Symbols",
    aliases: [
      "heavy_check_mark"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "❌",
    description: "cross mark",
    category: "Symbols",
    aliases: [
      "x"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "❎",
    description: "cross mark button",
    category: "Symbols",
    aliases: [
      "negative_squared_cross_mark"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "➰",
    description: "curly loop",
    category: "Symbols",
    aliases: [
      "curly_loop"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "➿",
    description: "double curly loop",
    category: "Symbols",
    aliases: [
      "loop"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "〽️",
    description: "part alternation mark",
    category: "Symbols",
    aliases: [
      "part_alternation_mark"
    ],
    tags: [],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "✳️",
    description: "eight-spoked asterisk",
    category: "Symbols",
    aliases: [
      "eight_spoked_asterisk"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "✴️",
    description: "eight-pointed star",
    category: "Symbols",
    aliases: [
      "eight_pointed_black_star"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "❇️",
    description: "sparkle",
    category: "Symbols",
    aliases: [
      "sparkle"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "©️",
    description: "copyright",
    category: "Symbols",
    aliases: [
      "copyright"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "®️",
    description: "registered",
    category: "Symbols",
    aliases: [
      "registered"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "™️",
    description: "trade mark",
    category: "Symbols",
    aliases: [
      "tm"
    ],
    tags: [
      "trademark"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "#️⃣",
    description: "keycap: #",
    category: "Symbols",
    aliases: [
      "hash"
    ],
    tags: [
      "number"
    ],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "*️⃣",
    description: "keycap: *",
    category: "Symbols",
    aliases: [
      "asterisk"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "9.1"
  },
  {
    emoji: "0️⃣",
    description: "keycap: 0",
    category: "Symbols",
    aliases: [
      "zero"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "1️⃣",
    description: "keycap: 1",
    category: "Symbols",
    aliases: [
      "one"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "2️⃣",
    description: "keycap: 2",
    category: "Symbols",
    aliases: [
      "two"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "3️⃣",
    description: "keycap: 3",
    category: "Symbols",
    aliases: [
      "three"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "4️⃣",
    description: "keycap: 4",
    category: "Symbols",
    aliases: [
      "four"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "5️⃣",
    description: "keycap: 5",
    category: "Symbols",
    aliases: [
      "five"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "6️⃣",
    description: "keycap: 6",
    category: "Symbols",
    aliases: [
      "six"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "7️⃣",
    description: "keycap: 7",
    category: "Symbols",
    aliases: [
      "seven"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "8️⃣",
    description: "keycap: 8",
    category: "Symbols",
    aliases: [
      "eight"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "9️⃣",
    description: "keycap: 9",
    category: "Symbols",
    aliases: [
      "nine"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🔟",
    description: "keycap: 10",
    category: "Symbols",
    aliases: [
      "keycap_ten"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔠",
    description: "input latin uppercase",
    category: "Symbols",
    aliases: [
      "capital_abcd"
    ],
    tags: [
      "letters"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔡",
    description: "input latin lowercase",
    category: "Symbols",
    aliases: [
      "abcd"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔢",
    description: "input numbers",
    category: "Symbols",
    aliases: [
      "1234"
    ],
    tags: [
      "numbers"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔣",
    description: "input symbols",
    category: "Symbols",
    aliases: [
      "symbols"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔤",
    description: "input latin letters",
    category: "Symbols",
    aliases: [
      "abc"
    ],
    tags: [
      "alphabet"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🅰️",
    description: "A button (blood type)",
    category: "Symbols",
    aliases: [
      "a"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆎",
    description: "AB button (blood type)",
    category: "Symbols",
    aliases: [
      "ab"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🅱️",
    description: "B button (blood type)",
    category: "Symbols",
    aliases: [
      "b"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆑",
    description: "CL button",
    category: "Symbols",
    aliases: [
      "cl"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆒",
    description: "COOL button",
    category: "Symbols",
    aliases: [
      "cool"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆓",
    description: "FREE button",
    category: "Symbols",
    aliases: [
      "free"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "ℹ️",
    description: "information",
    category: "Symbols",
    aliases: [
      "information_source"
    ],
    tags: [],
    unicode_version: "3.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆔",
    description: "ID button",
    category: "Symbols",
    aliases: [
      "id"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "Ⓜ️",
    description: "circled M",
    category: "Symbols",
    aliases: [
      "m"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🆕",
    description: "NEW button",
    category: "Symbols",
    aliases: [
      "new"
    ],
    tags: [
      "fresh"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆖",
    description: "NG button",
    category: "Symbols",
    aliases: [
      "ng"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🅾️",
    description: "O button (blood type)",
    category: "Symbols",
    aliases: [
      "o2"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆗",
    description: "OK button",
    category: "Symbols",
    aliases: [
      "ok"
    ],
    tags: [
      "yes"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🅿️",
    description: "P button",
    category: "Symbols",
    aliases: [
      "parking"
    ],
    tags: [],
    unicode_version: "5.2",
    ios_version: "6.0"
  },
  {
    emoji: "🆘",
    description: "SOS button",
    category: "Symbols",
    aliases: [
      "sos"
    ],
    tags: [
      "help",
      "emergency"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆙",
    description: "UP! button",
    category: "Symbols",
    aliases: [
      "up"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🆚",
    description: "VS button",
    category: "Symbols",
    aliases: [
      "vs"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈁",
    description: "Japanese “here” button",
    category: "Symbols",
    aliases: [
      "koko"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈂️",
    description: "Japanese “service charge” button",
    category: "Symbols",
    aliases: [
      "sa"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈷️",
    description: "Japanese “monthly amount” button",
    category: "Symbols",
    aliases: [
      "u6708"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈶",
    description: "Japanese “not free of charge” button",
    category: "Symbols",
    aliases: [
      "u6709"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈯",
    description: "Japanese “reserved” button",
    category: "Symbols",
    aliases: [
      "u6307"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🉐",
    description: "Japanese “bargain” button",
    category: "Symbols",
    aliases: [
      "ideograph_advantage"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈹",
    description: "Japanese “discount” button",
    category: "Symbols",
    aliases: [
      "u5272"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈚",
    description: "Japanese “free of charge” button",
    category: "Symbols",
    aliases: [
      "u7121"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🈲",
    description: "Japanese “prohibited” button",
    category: "Symbols",
    aliases: [
      "u7981"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🉑",
    description: "Japanese “acceptable” button",
    category: "Symbols",
    aliases: [
      "accept"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈸",
    description: "Japanese “application” button",
    category: "Symbols",
    aliases: [
      "u7533"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈴",
    description: "Japanese “passing grade” button",
    category: "Symbols",
    aliases: [
      "u5408"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈳",
    description: "Japanese “vacancy” button",
    category: "Symbols",
    aliases: [
      "u7a7a"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "㊗️",
    description: "Japanese “congratulations” button",
    category: "Symbols",
    aliases: [
      "congratulations"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "㊙️",
    description: "Japanese “secret” button",
    category: "Symbols",
    aliases: [
      "secret"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🈺",
    description: "Japanese “open for business” button",
    category: "Symbols",
    aliases: [
      "u55b6"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🈵",
    description: "Japanese “no vacancy” button",
    category: "Symbols",
    aliases: [
      "u6e80"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔴",
    description: "red circle",
    category: "Symbols",
    aliases: [
      "red_circle"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🟠",
    description: "orange circle",
    category: "Symbols",
    aliases: [
      "orange_circle"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟡",
    description: "yellow circle",
    category: "Symbols",
    aliases: [
      "yellow_circle"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟢",
    description: "green circle",
    category: "Symbols",
    aliases: [
      "green_circle"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🔵",
    description: "blue circle",
    category: "Symbols",
    aliases: [
      "large_blue_circle"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🟣",
    description: "purple circle",
    category: "Symbols",
    aliases: [
      "purple_circle"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟤",
    description: "brown circle",
    category: "Symbols",
    aliases: [
      "brown_circle"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "⚫",
    description: "black circle",
    category: "Symbols",
    aliases: [
      "black_circle"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "6.0"
  },
  {
    emoji: "⚪",
    description: "white circle",
    category: "Symbols",
    aliases: [
      "white_circle"
    ],
    tags: [],
    unicode_version: "4.1",
    ios_version: "6.0"
  },
  {
    emoji: "🟥",
    description: "red square",
    category: "Symbols",
    aliases: [
      "red_square"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟧",
    description: "orange square",
    category: "Symbols",
    aliases: [
      "orange_square"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟨",
    description: "yellow square",
    category: "Symbols",
    aliases: [
      "yellow_square"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟩",
    description: "green square",
    category: "Symbols",
    aliases: [
      "green_square"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟦",
    description: "blue square",
    category: "Symbols",
    aliases: [
      "blue_square"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟪",
    description: "purple square",
    category: "Symbols",
    aliases: [
      "purple_square"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "🟫",
    description: "brown square",
    category: "Symbols",
    aliases: [
      "brown_square"
    ],
    tags: [],
    unicode_version: "12.0",
    ios_version: "13.0"
  },
  {
    emoji: "⬛",
    description: "black large square",
    category: "Symbols",
    aliases: [
      "black_large_square"
    ],
    tags: [],
    unicode_version: "5.1",
    ios_version: "6.0"
  },
  {
    emoji: "⬜",
    description: "white large square",
    category: "Symbols",
    aliases: [
      "white_large_square"
    ],
    tags: [],
    unicode_version: "5.1",
    ios_version: "6.0"
  },
  {
    emoji: "◼️",
    description: "black medium square",
    category: "Symbols",
    aliases: [
      "black_medium_square"
    ],
    tags: [],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "◻️",
    description: "white medium square",
    category: "Symbols",
    aliases: [
      "white_medium_square"
    ],
    tags: [],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "◾",
    description: "black medium-small square",
    category: "Symbols",
    aliases: [
      "black_medium_small_square"
    ],
    tags: [],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "◽",
    description: "white medium-small square",
    category: "Symbols",
    aliases: [
      "white_medium_small_square"
    ],
    tags: [],
    unicode_version: "3.2",
    ios_version: "6.0"
  },
  {
    emoji: "▪️",
    description: "black small square",
    category: "Symbols",
    aliases: [
      "black_small_square"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "▫️",
    description: "white small square",
    category: "Symbols",
    aliases: [
      "white_small_square"
    ],
    tags: [],
    unicode_version: "",
    ios_version: "6.0"
  },
  {
    emoji: "🔶",
    description: "large orange diamond",
    category: "Symbols",
    aliases: [
      "large_orange_diamond"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔷",
    description: "large blue diamond",
    category: "Symbols",
    aliases: [
      "large_blue_diamond"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔸",
    description: "small orange diamond",
    category: "Symbols",
    aliases: [
      "small_orange_diamond"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔹",
    description: "small blue diamond",
    category: "Symbols",
    aliases: [
      "small_blue_diamond"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔺",
    description: "red triangle pointed up",
    category: "Symbols",
    aliases: [
      "small_red_triangle"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔻",
    description: "red triangle pointed down",
    category: "Symbols",
    aliases: [
      "small_red_triangle_down"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "💠",
    description: "diamond with a dot",
    category: "Symbols",
    aliases: [
      "diamond_shape_with_a_dot_inside"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔘",
    description: "radio button",
    category: "Symbols",
    aliases: [
      "radio_button"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔳",
    description: "white square button",
    category: "Symbols",
    aliases: [
      "white_square_button"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🔲",
    description: "black square button",
    category: "Symbols",
    aliases: [
      "black_square_button"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏁",
    description: "chequered flag",
    category: "Flags",
    aliases: [
      "checkered_flag"
    ],
    tags: [
      "milestone",
      "finish"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🚩",
    description: "triangular flag",
    category: "Flags",
    aliases: [
      "triangular_flag_on_post"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🎌",
    description: "crossed flags",
    category: "Flags",
    aliases: [
      "crossed_flags"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🏴",
    description: "black flag",
    category: "Flags",
    aliases: [
      "black_flag"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏳️",
    description: "white flag",
    category: "Flags",
    aliases: [
      "white_flag"
    ],
    tags: [],
    unicode_version: "7.0",
    ios_version: "9.1"
  },
  {
    emoji: "🏳️‍🌈",
    description: "rainbow flag",
    category: "Flags",
    aliases: [
      "rainbow_flag"
    ],
    tags: [
      "pride"
    ],
    unicode_version: "6.0",
    ios_version: "10.0"
  },
  {
    emoji: "🏳️‍⚧️",
    description: "transgender flag",
    category: "Flags",
    aliases: [
      "transgender_flag"
    ],
    tags: [],
    unicode_version: "13.0",
    ios_version: "14.0"
  },
  {
    emoji: "🏴‍☠️",
    description: "pirate flag",
    category: "Flags",
    aliases: [
      "pirate_flag"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇦🇨",
    description: "flag: Ascension Island",
    category: "Flags",
    aliases: [
      "ascension_island"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇦🇩",
    description: "flag: Andorra",
    category: "Flags",
    aliases: [
      "andorra"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇪",
    description: "flag: United Arab Emirates",
    category: "Flags",
    aliases: [
      "united_arab_emirates"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇫",
    description: "flag: Afghanistan",
    category: "Flags",
    aliases: [
      "afghanistan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇬",
    description: "flag: Antigua & Barbuda",
    category: "Flags",
    aliases: [
      "antigua_barbuda"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇮",
    description: "flag: Anguilla",
    category: "Flags",
    aliases: [
      "anguilla"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇱",
    description: "flag: Albania",
    category: "Flags",
    aliases: [
      "albania"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇲",
    description: "flag: Armenia",
    category: "Flags",
    aliases: [
      "armenia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇴",
    description: "flag: Angola",
    category: "Flags",
    aliases: [
      "angola"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇶",
    description: "flag: Antarctica",
    category: "Flags",
    aliases: [
      "antarctica"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇦🇷",
    description: "flag: Argentina",
    category: "Flags",
    aliases: [
      "argentina"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇸",
    description: "flag: American Samoa",
    category: "Flags",
    aliases: [
      "american_samoa"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇹",
    description: "flag: Austria",
    category: "Flags",
    aliases: [
      "austria"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇺",
    description: "flag: Australia",
    category: "Flags",
    aliases: [
      "australia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇼",
    description: "flag: Aruba",
    category: "Flags",
    aliases: [
      "aruba"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇦🇽",
    description: "flag: Åland Islands",
    category: "Flags",
    aliases: [
      "aland_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇦🇿",
    description: "flag: Azerbaijan",
    category: "Flags",
    aliases: [
      "azerbaijan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇦",
    description: "flag: Bosnia & Herzegovina",
    category: "Flags",
    aliases: [
      "bosnia_herzegovina"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇧",
    description: "flag: Barbados",
    category: "Flags",
    aliases: [
      "barbados"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇩",
    description: "flag: Bangladesh",
    category: "Flags",
    aliases: [
      "bangladesh"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇪",
    description: "flag: Belgium",
    category: "Flags",
    aliases: [
      "belgium"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇫",
    description: "flag: Burkina Faso",
    category: "Flags",
    aliases: [
      "burkina_faso"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇬",
    description: "flag: Bulgaria",
    category: "Flags",
    aliases: [
      "bulgaria"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇭",
    description: "flag: Bahrain",
    category: "Flags",
    aliases: [
      "bahrain"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇮",
    description: "flag: Burundi",
    category: "Flags",
    aliases: [
      "burundi"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇯",
    description: "flag: Benin",
    category: "Flags",
    aliases: [
      "benin"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇱",
    description: "flag: St. Barthélemy",
    category: "Flags",
    aliases: [
      "st_barthelemy"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇧🇲",
    description: "flag: Bermuda",
    category: "Flags",
    aliases: [
      "bermuda"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇳",
    description: "flag: Brunei",
    category: "Flags",
    aliases: [
      "brunei"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇴",
    description: "flag: Bolivia",
    category: "Flags",
    aliases: [
      "bolivia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇶",
    description: "flag: Caribbean Netherlands",
    category: "Flags",
    aliases: [
      "caribbean_netherlands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇧🇷",
    description: "flag: Brazil",
    category: "Flags",
    aliases: [
      "brazil"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇸",
    description: "flag: Bahamas",
    category: "Flags",
    aliases: [
      "bahamas"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇹",
    description: "flag: Bhutan",
    category: "Flags",
    aliases: [
      "bhutan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇻",
    description: "flag: Bouvet Island",
    category: "Flags",
    aliases: [
      "bouvet_island"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇧🇼",
    description: "flag: Botswana",
    category: "Flags",
    aliases: [
      "botswana"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇾",
    description: "flag: Belarus",
    category: "Flags",
    aliases: [
      "belarus"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇧🇿",
    description: "flag: Belize",
    category: "Flags",
    aliases: [
      "belize"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇦",
    description: "flag: Canada",
    category: "Flags",
    aliases: [
      "canada"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇨",
    description: "flag: Cocos (Keeling) Islands",
    category: "Flags",
    aliases: [
      "cocos_islands"
    ],
    tags: [
      "keeling"
    ],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇨🇩",
    description: "flag: Congo - Kinshasa",
    category: "Flags",
    aliases: [
      "congo_kinshasa"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇫",
    description: "flag: Central African Republic",
    category: "Flags",
    aliases: [
      "central_african_republic"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇬",
    description: "flag: Congo - Brazzaville",
    category: "Flags",
    aliases: [
      "congo_brazzaville"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇭",
    description: "flag: Switzerland",
    category: "Flags",
    aliases: [
      "switzerland"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇮",
    description: "flag: Côte d’Ivoire",
    category: "Flags",
    aliases: [
      "cote_divoire"
    ],
    tags: [
      "ivory"
    ],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇰",
    description: "flag: Cook Islands",
    category: "Flags",
    aliases: [
      "cook_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇱",
    description: "flag: Chile",
    category: "Flags",
    aliases: [
      "chile"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇲",
    description: "flag: Cameroon",
    category: "Flags",
    aliases: [
      "cameroon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇳",
    description: "flag: China",
    category: "Flags",
    aliases: [
      "cn"
    ],
    tags: [
      "china"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇨🇴",
    description: "flag: Colombia",
    category: "Flags",
    aliases: [
      "colombia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇵",
    description: "flag: Clipperton Island",
    category: "Flags",
    aliases: [
      "clipperton_island"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇨🇷",
    description: "flag: Costa Rica",
    category: "Flags",
    aliases: [
      "costa_rica"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇺",
    description: "flag: Cuba",
    category: "Flags",
    aliases: [
      "cuba"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇻",
    description: "flag: Cape Verde",
    category: "Flags",
    aliases: [
      "cape_verde"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇼",
    description: "flag: Curaçao",
    category: "Flags",
    aliases: [
      "curacao"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇽",
    description: "flag: Christmas Island",
    category: "Flags",
    aliases: [
      "christmas_island"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇨🇾",
    description: "flag: Cyprus",
    category: "Flags",
    aliases: [
      "cyprus"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇨🇿",
    description: "flag: Czechia",
    category: "Flags",
    aliases: [
      "czech_republic"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇩🇪",
    description: "flag: Germany",
    category: "Flags",
    aliases: [
      "de"
    ],
    tags: [
      "flag",
      "germany"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇩🇬",
    description: "flag: Diego Garcia",
    category: "Flags",
    aliases: [
      "diego_garcia"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇩🇯",
    description: "flag: Djibouti",
    category: "Flags",
    aliases: [
      "djibouti"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇩🇰",
    description: "flag: Denmark",
    category: "Flags",
    aliases: [
      "denmark"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇩🇲",
    description: "flag: Dominica",
    category: "Flags",
    aliases: [
      "dominica"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇩🇴",
    description: "flag: Dominican Republic",
    category: "Flags",
    aliases: [
      "dominican_republic"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇩🇿",
    description: "flag: Algeria",
    category: "Flags",
    aliases: [
      "algeria"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇦",
    description: "flag: Ceuta & Melilla",
    category: "Flags",
    aliases: [
      "ceuta_melilla"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇪🇨",
    description: "flag: Ecuador",
    category: "Flags",
    aliases: [
      "ecuador"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇪",
    description: "flag: Estonia",
    category: "Flags",
    aliases: [
      "estonia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇬",
    description: "flag: Egypt",
    category: "Flags",
    aliases: [
      "egypt"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇭",
    description: "flag: Western Sahara",
    category: "Flags",
    aliases: [
      "western_sahara"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇪🇷",
    description: "flag: Eritrea",
    category: "Flags",
    aliases: [
      "eritrea"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇸",
    description: "flag: Spain",
    category: "Flags",
    aliases: [
      "es"
    ],
    tags: [
      "spain"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇪🇹",
    description: "flag: Ethiopia",
    category: "Flags",
    aliases: [
      "ethiopia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇪🇺",
    description: "flag: European Union",
    category: "Flags",
    aliases: [
      "eu",
      "european_union"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇫🇮",
    description: "flag: Finland",
    category: "Flags",
    aliases: [
      "finland"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇫🇯",
    description: "flag: Fiji",
    category: "Flags",
    aliases: [
      "fiji"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇫🇰",
    description: "flag: Falkland Islands",
    category: "Flags",
    aliases: [
      "falkland_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇫🇲",
    description: "flag: Micronesia",
    category: "Flags",
    aliases: [
      "micronesia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇫🇴",
    description: "flag: Faroe Islands",
    category: "Flags",
    aliases: [
      "faroe_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇫🇷",
    description: "flag: France",
    category: "Flags",
    aliases: [
      "fr"
    ],
    tags: [
      "france",
      "french"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇬🇦",
    description: "flag: Gabon",
    category: "Flags",
    aliases: [
      "gabon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇧",
    description: "flag: United Kingdom",
    category: "Flags",
    aliases: [
      "gb",
      "uk"
    ],
    tags: [
      "flag",
      "british"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇬🇩",
    description: "flag: Grenada",
    category: "Flags",
    aliases: [
      "grenada"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇪",
    description: "flag: Georgia",
    category: "Flags",
    aliases: [
      "georgia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇫",
    description: "flag: French Guiana",
    category: "Flags",
    aliases: [
      "french_guiana"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇬",
    description: "flag: Guernsey",
    category: "Flags",
    aliases: [
      "guernsey"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇬🇭",
    description: "flag: Ghana",
    category: "Flags",
    aliases: [
      "ghana"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇮",
    description: "flag: Gibraltar",
    category: "Flags",
    aliases: [
      "gibraltar"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇱",
    description: "flag: Greenland",
    category: "Flags",
    aliases: [
      "greenland"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇬🇲",
    description: "flag: Gambia",
    category: "Flags",
    aliases: [
      "gambia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇳",
    description: "flag: Guinea",
    category: "Flags",
    aliases: [
      "guinea"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇵",
    description: "flag: Guadeloupe",
    category: "Flags",
    aliases: [
      "guadeloupe"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇬🇶",
    description: "flag: Equatorial Guinea",
    category: "Flags",
    aliases: [
      "equatorial_guinea"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇷",
    description: "flag: Greece",
    category: "Flags",
    aliases: [
      "greece"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇸",
    description: "flag: South Georgia & South Sandwich Islands",
    category: "Flags",
    aliases: [
      "south_georgia_south_sandwich_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇬🇹",
    description: "flag: Guatemala",
    category: "Flags",
    aliases: [
      "guatemala"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇺",
    description: "flag: Guam",
    category: "Flags",
    aliases: [
      "guam"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇼",
    description: "flag: Guinea-Bissau",
    category: "Flags",
    aliases: [
      "guinea_bissau"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇬🇾",
    description: "flag: Guyana",
    category: "Flags",
    aliases: [
      "guyana"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇭🇰",
    description: "flag: Hong Kong SAR China",
    category: "Flags",
    aliases: [
      "hong_kong"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇭🇲",
    description: "flag: Heard & McDonald Islands",
    category: "Flags",
    aliases: [
      "heard_mcdonald_islands"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇭🇳",
    description: "flag: Honduras",
    category: "Flags",
    aliases: [
      "honduras"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇭🇷",
    description: "flag: Croatia",
    category: "Flags",
    aliases: [
      "croatia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇭🇹",
    description: "flag: Haiti",
    category: "Flags",
    aliases: [
      "haiti"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇭🇺",
    description: "flag: Hungary",
    category: "Flags",
    aliases: [
      "hungary"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇨",
    description: "flag: Canary Islands",
    category: "Flags",
    aliases: [
      "canary_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇮🇩",
    description: "flag: Indonesia",
    category: "Flags",
    aliases: [
      "indonesia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇪",
    description: "flag: Ireland",
    category: "Flags",
    aliases: [
      "ireland"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇱",
    description: "flag: Israel",
    category: "Flags",
    aliases: [
      "israel"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇲",
    description: "flag: Isle of Man",
    category: "Flags",
    aliases: [
      "isle_of_man"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇮🇳",
    description: "flag: India",
    category: "Flags",
    aliases: [
      "india"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇴",
    description: "flag: British Indian Ocean Territory",
    category: "Flags",
    aliases: [
      "british_indian_ocean_territory"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇮🇶",
    description: "flag: Iraq",
    category: "Flags",
    aliases: [
      "iraq"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇷",
    description: "flag: Iran",
    category: "Flags",
    aliases: [
      "iran"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇸",
    description: "flag: Iceland",
    category: "Flags",
    aliases: [
      "iceland"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇮🇹",
    description: "flag: Italy",
    category: "Flags",
    aliases: [
      "it"
    ],
    tags: [
      "italy"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇯🇪",
    description: "flag: Jersey",
    category: "Flags",
    aliases: [
      "jersey"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇯🇲",
    description: "flag: Jamaica",
    category: "Flags",
    aliases: [
      "jamaica"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇯🇴",
    description: "flag: Jordan",
    category: "Flags",
    aliases: [
      "jordan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇯🇵",
    description: "flag: Japan",
    category: "Flags",
    aliases: [
      "jp"
    ],
    tags: [
      "japan"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇰🇪",
    description: "flag: Kenya",
    category: "Flags",
    aliases: [
      "kenya"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇬",
    description: "flag: Kyrgyzstan",
    category: "Flags",
    aliases: [
      "kyrgyzstan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇭",
    description: "flag: Cambodia",
    category: "Flags",
    aliases: [
      "cambodia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇮",
    description: "flag: Kiribati",
    category: "Flags",
    aliases: [
      "kiribati"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇲",
    description: "flag: Comoros",
    category: "Flags",
    aliases: [
      "comoros"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇳",
    description: "flag: St. Kitts & Nevis",
    category: "Flags",
    aliases: [
      "st_kitts_nevis"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇵",
    description: "flag: North Korea",
    category: "Flags",
    aliases: [
      "north_korea"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇷",
    description: "flag: South Korea",
    category: "Flags",
    aliases: [
      "kr"
    ],
    tags: [
      "korea"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇰🇼",
    description: "flag: Kuwait",
    category: "Flags",
    aliases: [
      "kuwait"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇾",
    description: "flag: Cayman Islands",
    category: "Flags",
    aliases: [
      "cayman_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇰🇿",
    description: "flag: Kazakhstan",
    category: "Flags",
    aliases: [
      "kazakhstan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇦",
    description: "flag: Laos",
    category: "Flags",
    aliases: [
      "laos"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇧",
    description: "flag: Lebanon",
    category: "Flags",
    aliases: [
      "lebanon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇨",
    description: "flag: St. Lucia",
    category: "Flags",
    aliases: [
      "st_lucia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇮",
    description: "flag: Liechtenstein",
    category: "Flags",
    aliases: [
      "liechtenstein"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇰",
    description: "flag: Sri Lanka",
    category: "Flags",
    aliases: [
      "sri_lanka"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇷",
    description: "flag: Liberia",
    category: "Flags",
    aliases: [
      "liberia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇸",
    description: "flag: Lesotho",
    category: "Flags",
    aliases: [
      "lesotho"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇹",
    description: "flag: Lithuania",
    category: "Flags",
    aliases: [
      "lithuania"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇺",
    description: "flag: Luxembourg",
    category: "Flags",
    aliases: [
      "luxembourg"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇻",
    description: "flag: Latvia",
    category: "Flags",
    aliases: [
      "latvia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇱🇾",
    description: "flag: Libya",
    category: "Flags",
    aliases: [
      "libya"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇦",
    description: "flag: Morocco",
    category: "Flags",
    aliases: [
      "morocco"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇨",
    description: "flag: Monaco",
    category: "Flags",
    aliases: [
      "monaco"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇲🇩",
    description: "flag: Moldova",
    category: "Flags",
    aliases: [
      "moldova"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇪",
    description: "flag: Montenegro",
    category: "Flags",
    aliases: [
      "montenegro"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇫",
    description: "flag: St. Martin",
    category: "Flags",
    aliases: [
      "st_martin"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇲🇬",
    description: "flag: Madagascar",
    category: "Flags",
    aliases: [
      "madagascar"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇭",
    description: "flag: Marshall Islands",
    category: "Flags",
    aliases: [
      "marshall_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇲🇰",
    description: "flag: North Macedonia",
    category: "Flags",
    aliases: [
      "macedonia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇱",
    description: "flag: Mali",
    category: "Flags",
    aliases: [
      "mali"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇲",
    description: "flag: Myanmar (Burma)",
    category: "Flags",
    aliases: [
      "myanmar"
    ],
    tags: [
      "burma"
    ],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇳",
    description: "flag: Mongolia",
    category: "Flags",
    aliases: [
      "mongolia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇴",
    description: "flag: Macao SAR China",
    category: "Flags",
    aliases: [
      "macau"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇵",
    description: "flag: Northern Mariana Islands",
    category: "Flags",
    aliases: [
      "northern_mariana_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇶",
    description: "flag: Martinique",
    category: "Flags",
    aliases: [
      "martinique"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇲🇷",
    description: "flag: Mauritania",
    category: "Flags",
    aliases: [
      "mauritania"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇸",
    description: "flag: Montserrat",
    category: "Flags",
    aliases: [
      "montserrat"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇹",
    description: "flag: Malta",
    category: "Flags",
    aliases: [
      "malta"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇺",
    description: "flag: Mauritius",
    category: "Flags",
    aliases: [
      "mauritius"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇲🇻",
    description: "flag: Maldives",
    category: "Flags",
    aliases: [
      "maldives"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇼",
    description: "flag: Malawi",
    category: "Flags",
    aliases: [
      "malawi"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇽",
    description: "flag: Mexico",
    category: "Flags",
    aliases: [
      "mexico"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇾",
    description: "flag: Malaysia",
    category: "Flags",
    aliases: [
      "malaysia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇲🇿",
    description: "flag: Mozambique",
    category: "Flags",
    aliases: [
      "mozambique"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇦",
    description: "flag: Namibia",
    category: "Flags",
    aliases: [
      "namibia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇨",
    description: "flag: New Caledonia",
    category: "Flags",
    aliases: [
      "new_caledonia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇪",
    description: "flag: Niger",
    category: "Flags",
    aliases: [
      "niger"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇫",
    description: "flag: Norfolk Island",
    category: "Flags",
    aliases: [
      "norfolk_island"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇳🇬",
    description: "flag: Nigeria",
    category: "Flags",
    aliases: [
      "nigeria"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇮",
    description: "flag: Nicaragua",
    category: "Flags",
    aliases: [
      "nicaragua"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇱",
    description: "flag: Netherlands",
    category: "Flags",
    aliases: [
      "netherlands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇴",
    description: "flag: Norway",
    category: "Flags",
    aliases: [
      "norway"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇵",
    description: "flag: Nepal",
    category: "Flags",
    aliases: [
      "nepal"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇷",
    description: "flag: Nauru",
    category: "Flags",
    aliases: [
      "nauru"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇳🇺",
    description: "flag: Niue",
    category: "Flags",
    aliases: [
      "niue"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇳🇿",
    description: "flag: New Zealand",
    category: "Flags",
    aliases: [
      "new_zealand"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇴🇲",
    description: "flag: Oman",
    category: "Flags",
    aliases: [
      "oman"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇦",
    description: "flag: Panama",
    category: "Flags",
    aliases: [
      "panama"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇪",
    description: "flag: Peru",
    category: "Flags",
    aliases: [
      "peru"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇫",
    description: "flag: French Polynesia",
    category: "Flags",
    aliases: [
      "french_polynesia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇵🇬",
    description: "flag: Papua New Guinea",
    category: "Flags",
    aliases: [
      "papua_new_guinea"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇭",
    description: "flag: Philippines",
    category: "Flags",
    aliases: [
      "philippines"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇰",
    description: "flag: Pakistan",
    category: "Flags",
    aliases: [
      "pakistan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇱",
    description: "flag: Poland",
    category: "Flags",
    aliases: [
      "poland"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇲",
    description: "flag: St. Pierre & Miquelon",
    category: "Flags",
    aliases: [
      "st_pierre_miquelon"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇵🇳",
    description: "flag: Pitcairn Islands",
    category: "Flags",
    aliases: [
      "pitcairn_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇵🇷",
    description: "flag: Puerto Rico",
    category: "Flags",
    aliases: [
      "puerto_rico"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇸",
    description: "flag: Palestinian Territories",
    category: "Flags",
    aliases: [
      "palestinian_territories"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇹",
    description: "flag: Portugal",
    category: "Flags",
    aliases: [
      "portugal"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇼",
    description: "flag: Palau",
    category: "Flags",
    aliases: [
      "palau"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇵🇾",
    description: "flag: Paraguay",
    category: "Flags",
    aliases: [
      "paraguay"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇶🇦",
    description: "flag: Qatar",
    category: "Flags",
    aliases: [
      "qatar"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇷🇪",
    description: "flag: Réunion",
    category: "Flags",
    aliases: [
      "reunion"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇷🇴",
    description: "flag: Romania",
    category: "Flags",
    aliases: [
      "romania"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇷🇸",
    description: "flag: Serbia",
    category: "Flags",
    aliases: [
      "serbia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇷🇺",
    description: "flag: Russia",
    category: "Flags",
    aliases: [
      "ru"
    ],
    tags: [
      "russia"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇷🇼",
    description: "flag: Rwanda",
    category: "Flags",
    aliases: [
      "rwanda"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇦",
    description: "flag: Saudi Arabia",
    category: "Flags",
    aliases: [
      "saudi_arabia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇧",
    description: "flag: Solomon Islands",
    category: "Flags",
    aliases: [
      "solomon_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇨",
    description: "flag: Seychelles",
    category: "Flags",
    aliases: [
      "seychelles"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇩",
    description: "flag: Sudan",
    category: "Flags",
    aliases: [
      "sudan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇪",
    description: "flag: Sweden",
    category: "Flags",
    aliases: [
      "sweden"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇬",
    description: "flag: Singapore",
    category: "Flags",
    aliases: [
      "singapore"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇭",
    description: "flag: St. Helena",
    category: "Flags",
    aliases: [
      "st_helena"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇸🇮",
    description: "flag: Slovenia",
    category: "Flags",
    aliases: [
      "slovenia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇯",
    description: "flag: Svalbard & Jan Mayen",
    category: "Flags",
    aliases: [
      "svalbard_jan_mayen"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇸🇰",
    description: "flag: Slovakia",
    category: "Flags",
    aliases: [
      "slovakia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇱",
    description: "flag: Sierra Leone",
    category: "Flags",
    aliases: [
      "sierra_leone"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇲",
    description: "flag: San Marino",
    category: "Flags",
    aliases: [
      "san_marino"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇳",
    description: "flag: Senegal",
    category: "Flags",
    aliases: [
      "senegal"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇴",
    description: "flag: Somalia",
    category: "Flags",
    aliases: [
      "somalia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇷",
    description: "flag: Suriname",
    category: "Flags",
    aliases: [
      "suriname"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇸",
    description: "flag: South Sudan",
    category: "Flags",
    aliases: [
      "south_sudan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇹",
    description: "flag: São Tomé & Príncipe",
    category: "Flags",
    aliases: [
      "sao_tome_principe"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇻",
    description: "flag: El Salvador",
    category: "Flags",
    aliases: [
      "el_salvador"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇽",
    description: "flag: Sint Maarten",
    category: "Flags",
    aliases: [
      "sint_maarten"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇾",
    description: "flag: Syria",
    category: "Flags",
    aliases: [
      "syria"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇸🇿",
    description: "flag: Eswatini",
    category: "Flags",
    aliases: [
      "swaziland"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇦",
    description: "flag: Tristan da Cunha",
    category: "Flags",
    aliases: [
      "tristan_da_cunha"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇹🇨",
    description: "flag: Turks & Caicos Islands",
    category: "Flags",
    aliases: [
      "turks_caicos_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇩",
    description: "flag: Chad",
    category: "Flags",
    aliases: [
      "chad"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇹🇫",
    description: "flag: French Southern Territories",
    category: "Flags",
    aliases: [
      "french_southern_territories"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇬",
    description: "flag: Togo",
    category: "Flags",
    aliases: [
      "togo"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇭",
    description: "flag: Thailand",
    category: "Flags",
    aliases: [
      "thailand"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇯",
    description: "flag: Tajikistan",
    category: "Flags",
    aliases: [
      "tajikistan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇰",
    description: "flag: Tokelau",
    category: "Flags",
    aliases: [
      "tokelau"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇹🇱",
    description: "flag: Timor-Leste",
    category: "Flags",
    aliases: [
      "timor_leste"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇲",
    description: "flag: Turkmenistan",
    category: "Flags",
    aliases: [
      "turkmenistan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇳",
    description: "flag: Tunisia",
    category: "Flags",
    aliases: [
      "tunisia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇴",
    description: "flag: Tonga",
    category: "Flags",
    aliases: [
      "tonga"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇷",
    description: "flag: Turkey",
    category: "Flags",
    aliases: [
      "tr"
    ],
    tags: [
      "turkey"
    ],
    unicode_version: "8.0",
    ios_version: "9.1"
  },
  {
    emoji: "🇹🇹",
    description: "flag: Trinidad & Tobago",
    category: "Flags",
    aliases: [
      "trinidad_tobago"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇻",
    description: "flag: Tuvalu",
    category: "Flags",
    aliases: [
      "tuvalu"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇹🇼",
    description: "flag: Taiwan",
    category: "Flags",
    aliases: [
      "taiwan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇹🇿",
    description: "flag: Tanzania",
    category: "Flags",
    aliases: [
      "tanzania"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇺🇦",
    description: "flag: Ukraine",
    category: "Flags",
    aliases: [
      "ukraine"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇺🇬",
    description: "flag: Uganda",
    category: "Flags",
    aliases: [
      "uganda"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇺🇲",
    description: "flag: U.S. Outlying Islands",
    category: "Flags",
    aliases: [
      "us_outlying_islands"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇺🇳",
    description: "flag: United Nations",
    category: "Flags",
    aliases: [
      "united_nations"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🇺🇸",
    description: "flag: United States",
    category: "Flags",
    aliases: [
      "us"
    ],
    tags: [
      "flag",
      "united",
      "america"
    ],
    unicode_version: "6.0",
    ios_version: "6.0"
  },
  {
    emoji: "🇺🇾",
    description: "flag: Uruguay",
    category: "Flags",
    aliases: [
      "uruguay"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇺🇿",
    description: "flag: Uzbekistan",
    category: "Flags",
    aliases: [
      "uzbekistan"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇦",
    description: "flag: Vatican City",
    category: "Flags",
    aliases: [
      "vatican_city"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇻🇨",
    description: "flag: St. Vincent & Grenadines",
    category: "Flags",
    aliases: [
      "st_vincent_grenadines"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇪",
    description: "flag: Venezuela",
    category: "Flags",
    aliases: [
      "venezuela"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇬",
    description: "flag: British Virgin Islands",
    category: "Flags",
    aliases: [
      "british_virgin_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇮",
    description: "flag: U.S. Virgin Islands",
    category: "Flags",
    aliases: [
      "us_virgin_islands"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇳",
    description: "flag: Vietnam",
    category: "Flags",
    aliases: [
      "vietnam"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇻🇺",
    description: "flag: Vanuatu",
    category: "Flags",
    aliases: [
      "vanuatu"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇼🇫",
    description: "flag: Wallis & Futuna",
    category: "Flags",
    aliases: [
      "wallis_futuna"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇼🇸",
    description: "flag: Samoa",
    category: "Flags",
    aliases: [
      "samoa"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇽🇰",
    description: "flag: Kosovo",
    category: "Flags",
    aliases: [
      "kosovo"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇾🇪",
    description: "flag: Yemen",
    category: "Flags",
    aliases: [
      "yemen"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇾🇹",
    description: "flag: Mayotte",
    category: "Flags",
    aliases: [
      "mayotte"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "9.0"
  },
  {
    emoji: "🇿🇦",
    description: "flag: South Africa",
    category: "Flags",
    aliases: [
      "south_africa"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇿🇲",
    description: "flag: Zambia",
    category: "Flags",
    aliases: [
      "zambia"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🇿🇼",
    description: "flag: Zimbabwe",
    category: "Flags",
    aliases: [
      "zimbabwe"
    ],
    tags: [],
    unicode_version: "6.0",
    ios_version: "8.3"
  },
  {
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    description: "flag: England",
    category: "Flags",
    aliases: [
      "england"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    description: "flag: Scotland",
    category: "Flags",
    aliases: [
      "scotland"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  },
  {
    emoji: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    description: "flag: Wales",
    category: "Flags",
    aliases: [
      "wales"
    ],
    tags: [],
    unicode_version: "11.0",
    ios_version: "12.1"
  }
];
function vl({ addBlock: t }) {
  const [e, o] = Yo([]), [i, s] = Yo(0), n = 150, { closeModal: r } = Ae(), a = (l) => {
    t("emoji", {
      emoji: l.emoji
    }), r();
  };
  Jo(() => {
    o(ml);
  }, []);
  const c = e.slice(
    i * n,
    (i + 1) * n
  );
  return /* @__PURE__ */ R.jsxs(ul, { children: [
    /* @__PURE__ */ R.jsx(gl, { children: c.map((l, d) => /* @__PURE__ */ R.jsx(pl, { onClick: () => a(l), children: /* @__PURE__ */ R.jsx("span", { children: l.emoji }) }, d)) }),
    /* @__PURE__ */ R.jsxs(hl, { children: [
      /* @__PURE__ */ R.jsx(
        un,
        {
          disabled: i === 0,
          onClick: () => s(i - 1),
          children: "이전"
        }
      ),
      /* @__PURE__ */ R.jsx(
        un,
        {
          disabled: (i + 1) * n >= e.length,
          onClick: () => s(i + 1),
          children: "다음"
        }
      )
    ] })
  ] });
}
const _l = G.div`
  display: flex;
  flex-direction: column;
  padding: 10px 25px;
`, fl = G.div`
  width: 245px;
  height: 30px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/line/pc_line.png");
  background-repeat: no-repeat;
  background-position: ${({ $imagePosition: t }) => t};
  cursor: pointer;
`, yl = [
  {
    modalImagePosition: "0 15px",
    inBlockImageURL: "https://t1.daumcdn.net/brunch/static/img/line/pc_line_type_01.png",
    inBlockImagePosition: "0 50%"
  },
  {
    modalImagePosition: "0 -15px",
    inBlockImageURL: "https://t1.daumcdn.net/brunch/static/img/line/pc_line_type_02.png",
    inBlockImagePosition: "0 50%"
  },
  {
    modalImagePosition: "0 -80px",
    inBlockImageURL: "https://t1.daumcdn.net/brunch/static/img/line/pc_line_type_04.png",
    inBlockImagePosition: "50% 50%"
  },
  {
    modalImagePosition: "0 -45px",
    inBlockImageURL: "https://t1.daumcdn.net/brunch/static/img/line/pc_line_type_03.png",
    inBlockImagePosition: "50% 50%"
  },
  {
    modalImagePosition: "0 -137px",
    inBlockImageURL: "https://t1.daumcdn.net/brunch/static/img/line/pc_line_type_06.png",
    inBlockImagePosition: "0 50%"
  },
  {
    modalImagePosition: "0 -112px",
    inBlockImageURL: "https://t1.daumcdn.net/brunch/static/img/line/pc_line_type_05.png",
    inBlockImagePosition: "0 50%"
  }
];
function bl({ addBlock: t }) {
  const { closeModal: e } = Ae(), o = (i) => {
    const s = {
      url: i.inBlockImageURL,
      imagePosition: i.inBlockImagePosition
    };
    t("delimiter", s), e();
  };
  return /* @__PURE__ */ R.jsx(_l, { children: yl.map((i, s) => /* @__PURE__ */ R.jsx(
    fl,
    {
      $imagePosition: i.modalImagePosition,
      onClick: () => o(i)
    },
    s
  )) });
}
const kl = G.div`
  width: 358px;
  display: flex;
  flex-direction: column;
  align-items: center;
`, wl = G.div`
  width: calc(100% - 40px);
  border-bottom: 1px solid ${Me.dark_gray};
  padding: 20px 20px 12px 8px;
  display: flex;
  align-items: center;
  gap: 12px;
`, jl = G.div`
  display: flex;
  align-items: center;
  gap: 4px;
`, xl = G.input`
  width: 250px;
  color: ${Me.black_primary};
  font-size: 18px;
`, Sl = G.button`
  width: 25px;
  height: 25px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/ico_editor_layer_v1.png");
  background-repeat: no-repeat;
  background-position: -30px -30px;
`, El = G.button`
  width: 25px;
  height: 25px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/ico_editor_layer_v1.png");
  background-repeat: no-repeat;
  background-position: 0 -30px;
`, Cl = G.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  height: 331px;
  overflow-y: scroll;
`, Bl = G.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${Me.light_gray};
  }
`, Tl = G.li`
  width: calc(100% - 40px);
  padding: 16px 6px 16px 6px;
  border-bottom: 1px solid ${Me.light_gray};
  display: flex;
  flex-direction: column;
  gap: 4px;
`, Pl = G.p`
  color: ${Me.black_primary};
  font-size: 16px;
`, Il = G.span`
  color: ${Me.primary};
  font-weight: bold;
`, Ol = G.p`
  color: ${Me.medium_gray};
  font-size: 12px;
`, Al = G.div`
  width: 100%;
  height: 331px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`, Ll = G.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`, Nl = G.div`
  width: 42px;
  height: 62px;
  background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/editor/ico_editor_layer_v1.png");
  background-repeat: no-repeat;
  background-position: -60px 0;
`, Ml = G.p`
  font-size: 14px;
  color: ${Me.medium_gray};
`, Fl = void 0, Dl = async (t) => {
  if (!t)
    return [];
  try {
    const e = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${t}`,
      {
        method: "GET",
        headers: {
          Authorization: `KakaoAK ${Fl}`,
          "Content-Type": "application/json"
        }
      }
    );
    if (!e.ok)
      throw new Error("네트워크 응답이 정상이 아닙니다.");
    return (await e.json()).documents.map(
      ({ id: i, place_name: s, road_address_name: n, place_url: r }) => ({
        id: i,
        name: s,
        address: n,
        url: r
      })
    );
  } catch (e) {
    return console.error("검색 중 오류 발생:", e), [];
  }
};
function Rl({ addBlock: t }) {
  const [e, o] = Yo(""), [i, s] = Yo([]), { closeModal: n } = Ae(), r = async (d) => {
    const u = await Dl(d);
    s(u);
  }, a = () => {
    o("");
  }, c = (d) => e ? d.split(new RegExp(`(${e})`, "gi")).map(
    (g, v) => g.toLowerCase() === e.toLowerCase() ? /* @__PURE__ */ R.jsx(Il, { children: g }, v) : g
  ) : d, l = (d) => {
    t("place", d), n();
  };
  return Jo(() => {
    r(e);
  }, [e]), /* @__PURE__ */ R.jsxs(kl, { children: [
    /* @__PURE__ */ R.jsxs(wl, { children: [
      /* @__PURE__ */ R.jsx(
        xl,
        {
          type: "text",
          value: e,
          onChange: (d) => o(d.target.value),
          placeholder: "장소, 주소를 검색하세요"
        }
      ),
      /* @__PURE__ */ R.jsxs(jl, { children: [
        /* @__PURE__ */ R.jsx(Sl, { onClick: a }),
        /* @__PURE__ */ R.jsx(El, { onClick: () => r(e) })
      ] })
    ] }),
    i.length === 0 ? /* @__PURE__ */ R.jsx(Al, { children: /* @__PURE__ */ R.jsxs(Ll, { children: [
      /* @__PURE__ */ R.jsx(Nl, {}),
      /* @__PURE__ */ R.jsx(Ml, { children: "장소 첨부" })
    ] }) }) : /* @__PURE__ */ R.jsx(Cl, { children: i.map((d) => /* @__PURE__ */ R.jsx(Bl, { children: /* @__PURE__ */ R.jsxs(Tl, { onClick: () => l(d), children: [
      /* @__PURE__ */ R.jsx(Pl, { children: c(d.name) }),
      /* @__PURE__ */ R.jsx(Ol, { children: d.address })
    ] }) }, d.id)) })
  ] });
}
const $l = G.div`
  position: fixed;
  top: ${({ $top: t }) => `${t}px`};
  right: 20%;
  z-index: 100;
  display: inline-block;
  border: 1px solid ${Me.modal_border_color};
  border-radius: 1px;
  background-color: ${Me.white_primary};
`, Hl = (t, e) => {
  const o = to(null);
  return Jo(() => {
    const i = (s) => {
      const n = s.target;
      o.current && !o.current.contains(n) && // ref 요소의 외부 클릭 확인
      !(e && e(n)) && t();
    };
    return document.addEventListener("mousedown", i), () => {
      document.removeEventListener("mousedown", i);
    };
  }, [t, e]), { $ref: o };
};
function zl({ top: t, children: e }) {
  const { activeModal: o, closeModal: i } = Ae(), { $ref: s } = Hl(
    () => {
      i();
    },
    (n) => o && n.classList.contains("modal-active-icon")
  );
  return /* @__PURE__ */ R.jsx($l, { $top: t, ref: s, children: e });
}
const Ul = G.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 42px;
  position: absolute;
  top: ${(t) => t.$top}px;
  /* right: ${(t) => t.$right}%; */
  z-index: 1000;
  border-bottom: 1px solid black;
  padding: 8px;
`;
function ql({ position: t, children: e }) {
  return /* @__PURE__ */ R.jsx(Ul, { $top: t.top, $right: t.right, children: e });
}
function Wl({ toolbarTop: t, onUpload: e }) {
  const { editor: o, activeModal: i, currentBlockIndex: s, setCurrentBlockIndex: n } = Ae(), r = () => {
    if (!o) return;
    const c = o.blocks.getCurrentBlockIndex(), l = o.blocks.getBlocksCount();
    if (c > -1) {
      n(c);
      return;
    }
    if (l === 1) {
      const d = o.blocks.getBlockByIndex(0), u = (d == null ? void 0 : d.name) === "paragraph" && d.isEmpty;
      n(u ? 0 : 1);
      return;
    }
    n(Math.max(0, l - 1));
  }, a = (c, l) => {
    if (!o) return;
    const d = o.blocks.getBlockByIndex(s);
    (d == null ? void 0 : d.name) === "paragraph" && d.isEmpty ? (o.blocks.delete(s), o.blocks.insert(c, l, void 0, s)) : o.blocks.insert(c, l, void 0, s + 1);
  };
  return /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
    i && /* @__PURE__ */ R.jsxs(zl, { top: t, children: [
      i === "place" && /* @__PURE__ */ R.jsx(Rl, { addBlock: a }),
      i === "emoji" && /* @__PURE__ */ R.jsx(vl, { addBlock: a }),
      i === "line" && /* @__PURE__ */ R.jsx(bl, { addBlock: a })
    ] }),
    /* @__PURE__ */ R.jsxs(ql, { position: { top: t, right: 0 }, children: [
      /* @__PURE__ */ R.jsx(
        sl,
        {
          handleBlockIndex: r,
          addBlock: a,
          onUpload: e
        }
      ),
      /* @__PURE__ */ R.jsx(
        el,
        {
          handleBlockIndex: r,
          addBlock: a,
          onUpload: e
        }
      ),
      /* @__PURE__ */ R.jsx(
        dl,
        {
          handleBlockIndex: r,
          addBlock: a,
          onUpload: e
        }
      ),
      /* @__PURE__ */ R.jsx(
        Jc,
        {
          handleBlockIndex: r,
          addBlock: a,
          onUpload: e
        }
      ),
      /* @__PURE__ */ R.jsx(Yc, { handleBlockIndex: r }),
      /* @__PURE__ */ R.jsx(rl, { handleBlockIndex: r }),
      /* @__PURE__ */ R.jsx(Vc, {})
    ] })
  ] });
}
const Vl = G.div`
  cursor: pointer;

  /* 실제 컨텐츠 영역은 기본 커서 사용 */
  .ce-block {
    cursor: text;
  }
`;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var Kl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Li(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Gi() {
}
Object.assign(Gi, {
  default: Gi,
  register: Gi,
  revert: function() {
  },
  __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
  const e = (this.document || this.ownerDocument).querySelectorAll(t);
  let o = e.length;
  for (; --o >= 0 && e.item(o) !== this; )
    ;
  return o > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(t) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(t))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(t) {
  const e = document.createDocumentFragment();
  Array.isArray(t) || (t = [t]), t.forEach((o) => {
    const i = o instanceof Node;
    e.appendChild(i ? o : document.createTextNode(o));
  }), this.insertBefore(e, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(t) {
  t = arguments.length === 0 ? !0 : !!t;
  const e = this.parentNode, o = window.getComputedStyle(e, null), i = parseInt(o.getPropertyValue("border-top-width")), s = parseInt(o.getPropertyValue("border-left-width")), n = this.offsetTop - e.offsetTop < e.scrollTop, r = this.offsetTop - e.offsetTop + this.clientHeight - i > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, c = this.offsetLeft - e.offsetLeft + this.clientWidth - s > e.scrollLeft + e.clientWidth, l = n && !r;
  (n || r) && t && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - i + this.clientHeight / 2), (a || c) && t && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - s + this.clientWidth / 2), (n || r || a || c) && !t && this.scrollIntoView(l);
});
window.requestIdleCallback = window.requestIdleCallback || function(t) {
  const e = Date.now();
  return setTimeout(function() {
    t({
      didTimeout: !1,
      timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(t) {
  clearTimeout(t);
};
let Yl = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, o) => (o &= 63, o < 36 ? e += o.toString(36) : o < 62 ? e += (o - 26).toString(36).toUpperCase() : o > 62 ? e += "-" : e += "_", e), "");
var Xn = /* @__PURE__ */ ((t) => (t.VERBOSE = "VERBOSE", t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR", t))(Xn || {});
const Y = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46
}, Gl = {
  LEFT: 0
};
function Zo(t, e, o = "log", i, s = "color: inherit") {
  if (!("console" in window) || !window.console[o])
    return;
  const n = ["info", "log", "warn", "error"].includes(o), r = [];
  switch (Zo.logLevel) {
    case "ERROR":
      if (o !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(o))
        return;
      break;
    case "INFO":
      if (!n || t)
        return;
      break;
  }
  i && r.push(i);
  const a = "Editor.js 2.30.7";
  t && (n ? (r.unshift(`line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`, s), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
  try {
    n ? i ? console[o](`${e} %o`, ...r) : console[o](e, ...r) : console[o](e);
  } catch {
  }
}
Zo.logLevel = "VERBOSE";
function Xl(t) {
  Zo.logLevel = t;
}
const ne = Zo.bind(window, !1), Re = Zo.bind(window, !0);
function fo(t) {
  return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function ge(t) {
  return fo(t) === "function" || fo(t) === "asyncfunction";
}
function je(t) {
  return fo(t) === "object";
}
function Qe(t) {
  return fo(t) === "string";
}
function Jl(t) {
  return fo(t) === "boolean";
}
function gn(t) {
  return fo(t) === "number";
}
function pn(t) {
  return fo(t) === "undefined";
}
function He(t) {
  return t ? Object.keys(t).length === 0 && t.constructor === Object : !0;
}
function Jn(t) {
  return t > 47 && t < 58 || // number keys
  t === 32 || t === 13 || // Space bar & return key(s)
  t === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  t > 64 && t < 91 || // letter keys
  t > 95 && t < 112 || // Numpad keys
  t > 185 && t < 193 || // ;=,-./` (in order)
  t > 218 && t < 223;
}
async function Zl(t, e = () => {
}, o = () => {
}) {
  async function i(s, n, r) {
    try {
      await s.function(s.data), await n(pn(s.data) ? {} : s.data);
    } catch {
      r(pn(s.data) ? {} : s.data);
    }
  }
  return t.reduce(async (s, n) => (await s, i(n, e, o)), Promise.resolve());
}
function Zn(t) {
  return Array.prototype.slice.call(t);
}
function ki(t, e) {
  return function() {
    const o = this, i = arguments;
    window.setTimeout(() => t.apply(o, i), e);
  };
}
function Ql(t) {
  return t.name.split(".").pop();
}
function ed(t) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(t);
}
function hn(t, e, o) {
  let i;
  return (...s) => {
    const n = this, r = () => {
      i = null, t.apply(n, s);
    };
    window.clearTimeout(i), i = window.setTimeout(r, e);
  };
}
function gt(t, e, o = void 0) {
  let i, s, n, r = null, a = 0;
  o || (o = {});
  const c = function() {
    a = o.leading === !1 ? 0 : Date.now(), r = null, n = t.apply(i, s), r || (i = s = null);
  };
  return function() {
    const l = Date.now();
    !a && o.leading === !1 && (a = l);
    const d = e - (l - a);
    return i = this, s = arguments, d <= 0 || d > e ? (r && (clearTimeout(r), r = null), a = l, n = t.apply(i, s), r || (i = s = null)) : !r && o.trailing !== !1 && (r = setTimeout(c, d)), n;
  };
}
function od() {
  const t = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(t).find((o) => window.navigator.appVersion.toLowerCase().indexOf(o) !== -1);
  return e && (t[e] = !0), t;
}
function wi(t) {
  return t[0].toUpperCase() + t.slice(1);
}
function pt(t, ...e) {
  if (!e.length)
    return t;
  const o = e.shift();
  if (je(t) && je(o))
    for (const i in o)
      je(o[i]) ? (t[i] || Object.assign(t, { [i]: {} }), pt(t[i], o[i])) : Object.assign(t, { [i]: o[i] });
  return pt(t, ...e);
}
function Ot(t) {
  const e = od();
  return t = t.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? t = t.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : t = t.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), t;
}
function id(t) {
  try {
    return new URL(t).href;
  } catch {
  }
  return t.substring(0, 2) === "//" ? window.location.protocol + t : window.location.origin + t;
}
function td() {
  return Yl(10);
}
function sd(t) {
  window.open(t, "_blank");
}
function nd(t = "") {
  return `${t}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function ht(t, e, o) {
  const i = `«${e}» is deprecated and will be removed in the next major release. Please use the «${o}» instead.`;
  t && Re(i, "warn");
}
function Mo(t, e, o) {
  const i = o.value ? "value" : "get", s = o[i], n = `#${e}Cache`;
  if (o[i] = function(...r) {
    return this[n] === void 0 && (this[n] = s.apply(this, ...r)), this[n];
  }, i === "get" && o.set) {
    const r = o.set;
    o.set = function(a) {
      delete t[n], r.apply(this, a);
    };
  }
  return o;
}
const Qn = 650;
function Fo() {
  return window.matchMedia(`(max-width: ${Qn}px)`).matches;
}
const mt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function rd(t, e) {
  const o = Array.isArray(t) || je(t), i = Array.isArray(e) || je(e);
  return o || i ? JSON.stringify(t) === JSON.stringify(e) : t === e;
}
class b {
  /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
  static isSingleTag(e) {
    return e.tagName && [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */
  static isLineBreakTag(e) {
    return e && e.tagName && [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */
  static make(e, o = null, i = {}) {
    const s = document.createElement(e);
    if (Array.isArray(o)) {
      const n = o.filter((r) => r !== void 0);
      s.classList.add(...n);
    } else
      o && s.classList.add(o);
    for (const n in i)
      Object.prototype.hasOwnProperty.call(i, n) && (s[n] = i[n]);
    return s;
  }
  /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */
  static text(e) {
    return document.createTextNode(e);
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */
  static append(e, o) {
    Array.isArray(o) ? o.forEach((i) => e.appendChild(i)) : e.appendChild(o);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  static prepend(e, o) {
    Array.isArray(o) ? (o = o.reverse(), o.forEach((i) => e.prepend(i))) : e.prepend(o);
  }
  /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */
  static swap(e, o) {
    const i = document.createElement("div"), s = e.parentNode;
    s.insertBefore(i, e), s.insertBefore(e, o), s.insertBefore(o, i), s.removeChild(i);
  }
  /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */
  static find(e = document, o) {
    return e.querySelector(o);
  }
  /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */
  static get(e) {
    return document.getElementById(e);
  }
  /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */
  static findAll(e = document, o) {
    return e.querySelectorAll(o);
  }
  /**
   * Returns CSS selector for all text inputs
   */
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((e) => `input[type="${e}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return Zn(e.querySelectorAll(b.allInputsSelector)).reduce((o, i) => b.isNativeInput(i) || b.containsOnlyInlineElements(i) ? [...o, i] : [...o, ...b.getDeepestBlockElements(i)], []);
  }
  /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns - it can be text Node or Element Node, so that caret will able to work with it
   *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
   */
  static getDeepestNode(e, o = !1) {
    const i = o ? "lastChild" : "firstChild", s = o ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[i]) {
      let n = e[i];
      if (b.isSingleTag(n) && !b.isNativeInput(n) && !b.isLineBreakTag(n))
        if (n[s])
          n = n[s];
        else if (n.parentNode[s])
          n = n.parentNode[s];
        else
          return n.parentNode;
      return this.getDeepestNode(n, o);
    }
    return e;
  }
  /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isElement(e) {
    return gn(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return gn(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isNativeInput(e) {
    const o = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? o.includes(e.tagName) : !1;
  }
  /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */
  static canSetCaret(e) {
    let o = !0;
    if (b.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          o = !1;
          break;
      }
    else
      o = b.isContentEditable(e);
    return o;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e, o) {
    let i;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? i = e.value : i = e.textContent.replace("​", ""), o && (i = i.replace(new RegExp(o, "g"), "")), i.trim().length === 0);
  }
  /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : !1;
  }
  /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */
  static isEmpty(e, o) {
    const i = [e];
    for (; i.length > 0; )
      if (e = i.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e, o))
          return !1;
        e.childNodes && i.push(...Array.from(e.childNodes));
      }
    return !0;
  }
  /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */
  static isHTMLString(e) {
    const o = b.make("div");
    return o.innerHTML = e, o.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return b.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */
  static containsOnlyInlineElements(e) {
    let o;
    Qe(e) ? (o = document.createElement("div"), o.innerHTML = e) : o = e;
    const i = (s) => !b.blockElements.includes(s.tagName.toLowerCase()) && Array.from(s.children).every(i);
    return Array.from(o.children).every(i);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return b.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((o, i) => [...o, ...b.getDeepestBlockElements(i)], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return Qe(e) ? document.getElementById(e) : e;
  }
  /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */
  static offset(e) {
    const o = e.getBoundingClientRect(), i = window.pageXOffset || document.documentElement.scrollLeft, s = window.pageYOffset || document.documentElement.scrollTop, n = o.top + s, r = o.left + i;
    return {
      top: n,
      left: r,
      bottom: n + o.height,
      right: r + o.width
    };
  }
}
function ad(t) {
  return !/[^\t\n\r ]/.test(t);
}
function cd(t) {
  const e = window.getComputedStyle(t), o = parseFloat(e.fontSize), i = parseFloat(e.lineHeight) || o * 1.2, s = parseFloat(e.paddingTop), n = parseFloat(e.borderTopWidth), r = parseFloat(e.marginTop), a = o * 0.8, c = (i - o) / 2;
  return r + n + s + c + a;
}
function er(t) {
  t.dataset.empty = b.isEmpty(t) ? "true" : "false";
}
const ld = {
  blockTunes: {
    toggler: {
      "Click to tune": "",
      "or drag to move": ""
    }
  },
  inlineToolbar: {
    converter: {
      "Convert to": ""
    }
  },
  toolbar: {
    toolbox: {
      Add: ""
    }
  },
  popover: {
    Filter: "",
    "Nothing found": "",
    "Convert to": ""
  }
}, dd = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
}, ud = {
  link: {
    "Add a link": ""
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
}, gd = {
  delete: {
    Delete: "",
    "Click to delete": ""
  },
  moveUp: {
    "Move up": ""
  },
  moveDown: {
    "Move down": ""
  }
}, or = {
  ui: ld,
  toolNames: dd,
  tools: ud,
  blockTunes: gd
}, ir = class xo {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(e, o) {
    return xo._t(e, o);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(e, o) {
    return xo._t(e, o);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(e) {
    xo.currentDictionary = e;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(e, o) {
    const i = xo.getNamespace(e);
    return !i || !i[o] ? o : i[o];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(e) {
    return e.split(".").reduce((o, i) => !o || !Object.keys(o).length ? {} : o[i], xo.currentDictionary);
  }
};
ir.currentDictionary = or;
let Pe = ir;
class tr extends Error {
}
class Qo {
  constructor() {
    this.subscribers = {};
  }
  /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  on(e, o) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(o);
  }
  /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  once(e, o) {
    e in this.subscribers || (this.subscribers[e] = []);
    const i = (s) => {
      const n = o(s), r = this.subscribers[e].indexOf(i);
      return r !== -1 && this.subscribers[e].splice(r, 1), n;
    };
    this.subscribers[e].push(i);
  }
  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */
  emit(e, o) {
    He(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((i, s) => {
      const n = s(i);
      return n !== void 0 ? n : i;
    }, o);
  }
  /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */
  off(e, o) {
    if (this.subscribers[e] === void 0) {
      console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
      return;
    }
    for (let i = 0; i < this.subscribers[e].length; i++)
      if (this.subscribers[e][i] === o) {
        delete this.subscribers[e][i];
        break;
      }
  }
  /**
   * Destroyer
   * clears subscribers list
   */
  destroy() {
    this.subscribers = {};
  }
}
function Ge(t) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return t.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return t.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return t.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return t.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return t.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return t.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(e) {
      t.stretched = e;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return t.stretched;
    },
    /**
     * True if Block has inputs to be focused
     */
    get focusable() {
      return t.focusable;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(e, o) {
      return t.call(e, o);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return t.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(e) {
      return t.validate(e);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      t.dispatchChange();
    },
    /**
     * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
     * This method returns the entry that is related to the Block (depended on the Block data)
     */
    getActiveToolboxEntry() {
      return t.getActiveToolboxEntry();
    }
  });
}
class ei {
  constructor() {
    this.allListeners = [];
  }
  /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  on(e, o, i, s = !1) {
    const n = nd("l"), r = {
      id: n,
      element: e,
      eventType: o,
      handler: i,
      options: s
    };
    if (!this.findOne(e, o, i))
      return this.allListeners.push(r), e.addEventListener(o, i, s), n;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, o, i, s) {
    const n = this.findAll(e, o, i);
    n.forEach((r, a) => {
      const c = this.allListeners.indexOf(n[a]);
      c > -1 && (this.allListeners.splice(c, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
    });
  }
  /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */
  offById(e) {
    const o = this.findById(e);
    o && o.element.removeEventListener(o.eventType, o.handler, o.options);
  }
  /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */
  findOne(e, o, i) {
    const s = this.findAll(e, o, i);
    return s.length > 0 ? s[0] : null;
  }
  /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */
  findAll(e, o, i) {
    let s;
    const n = e ? this.findByEventTarget(e) : [];
    return e && o && i ? s = n.filter((r) => r.eventType === o && r.handler === i) : e && o ? s = n.filter((r) => r.eventType === o) : s = n, s;
  }
  /**
   * Removes all listeners
   */
  removeAll() {
    this.allListeners.map((e) => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  /**
   * Module cleanup on destruction
   */
  destroy() {
    this.removeAll();
  }
  /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */
  findByEventTarget(e) {
    return this.allListeners.filter((o) => {
      if (o.element === e)
        return o;
    });
  }
  /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */
  findByType(e) {
    return this.allListeners.filter((o) => {
      if (o.eventType === e)
        return o;
    });
  }
  /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */
  findByHandler(e) {
    return this.allListeners.filter((o) => {
      if (o.handler === e)
        return o;
    });
  }
  /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */
  findById(e) {
    return this.allListeners.find((o) => o.id === e);
  }
}
class Q {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: o }) {
    if (this.nodes = {}, this.listeners = new ei(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (i, s, n, r = !1) => {
        this.mutableListenerIds.push(
          this.listeners.on(i, s, n, r)
        );
      },
      /**
       * Clears all mutable listeners
       */
      clearAll: () => {
        for (const i of this.mutableListenerIds)
          this.listeners.offById(i);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === Q)
      throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = o;
  }
  /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */
  set state(e) {
    this.Editor = e;
  }
  /**
   * Remove memorized nodes
   */
  removeAllNodes() {
    for (const e in this.nodes) {
      const o = this.nodes[e];
      o instanceof HTMLElement && o.remove();
    }
  }
  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
}
class z {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
  }
  /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const e = window.getSelection();
    if (!e)
      return null;
    const o = e.anchorNode;
    return o ? b.isElement(o) ? o : o.parentElement : null;
  }
  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */
  static get isAtEditor() {
    return this.isSelectionAtEditor(z.get());
  }
  /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */
  static isSelectionAtEditor(e) {
    if (!e)
      return !1;
    let o = e.anchorNode || e.focusNode;
    o && o.nodeType === Node.TEXT_NODE && (o = o.parentNode);
    let i = null;
    return o && o instanceof Element && (i = o.closest(`.${z.CSS.editorZone}`)), i ? i.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */
  static isRangeAtEditor(e) {
    if (!e)
      return;
    let o = e.startContainer;
    o && o.nodeType === Node.TEXT_NODE && (o = o.parentNode);
    let i = null;
    return o && o instanceof Element && (i = o.closest(`.${z.CSS.editorZone}`)), i ? i.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!z.get().anchorNode;
  }
  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let e = document.selection, o, i = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (e && e.type !== "Control")
      return e = e, o = e.createRange(), i.x = o.boundingLeft, i.y = o.boundingTop, i.width = o.boundingWidth, i.height = o.boundingHeight, i;
    if (!window.getSelection)
      return ne("Method window.getSelection is not supported", "warn"), i;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return ne("Method SelectionUtils.rangeCount is not supported", "warn"), i;
    if (e.rangeCount === 0)
      return i;
    if (o = e.getRangeAt(0).cloneRange(), o.getBoundingClientRect && (i = o.getBoundingClientRect()), i.x === 0 && i.y === 0) {
      const s = document.createElement("span");
      if (s.getBoundingClientRect) {
        s.appendChild(document.createTextNode("​")), o.insertNode(s), i = s.getBoundingClientRect();
        const n = s.parentNode;
        n.removeChild(s), n.normalize();
      }
    }
    return i;
  }
  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */
  static setCursor(e, o = 0) {
    const i = document.createRange(), s = window.getSelection();
    return b.isNativeInput(e) ? b.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = o, e.getBoundingClientRect()) : void 0 : (i.setStart(e, o), i.setEnd(e, o), s.removeAllRanges(), s.addRange(i), i.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const o = z.range;
    return o === null ? !1 : e.contains(o.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = z.range;
    if (e === null)
      return;
    const o = b.make("span", "codex-editor__fake-cursor");
    o.dataset.mutationFree = "true", e.collapse(), e.insertNode(o);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return b.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const o = b.find(e, ".codex-editor__fake-cursor");
    o && o.remove();
  }
  /**
   * Removes fake background
   */
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
  }
  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
  }
  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = z.range;
  }
  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange)
      return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }
  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const e = window.getSelection(), o = document.createRange();
    o.selectNodeContents(e.focusNode), o.collapse(!1), e.removeAllRanges(), e.addRange(o);
  }
  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */
  findParentTag(e, o, i = 10) {
    const s = window.getSelection();
    let n = null;
    return !s || !s.anchorNode || !s.focusNode ? null : ([
      /** the Node in which the selection begins */
      s.anchorNode,
      /** the Node in which the selection ends */
      s.focusNode
    ].forEach((r) => {
      let a = i;
      for (; a > 0 && r.parentNode && !(r.tagName === e && (n = r, o && r.classList && !r.classList.contains(o) && (n = null), n)); )
        r = r.parentNode, a--;
    }), n);
  }
  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */
  expandToTag(e) {
    const o = window.getSelection();
    o.removeAllRanges();
    const i = document.createRange();
    i.selectNodeContents(e), o.addRange(i);
  }
}
function pd(t, e) {
  const { type: o, target: i, addedNodes: s, removedNodes: n } = t;
  return t.type === "attributes" && t.attributeName === "data-empty" ? !1 : !!(e.contains(i) || o === "childList" && (Array.from(s).some((r) => r === e) || Array.from(n).some((r) => r === e)));
}
const vt = "redactor dom changed", sr = "block changed", nr = "fake cursor is about to be toggled", rr = "fake cursor have been set", Go = "editor mobile layout toggled";
function _t(t, e) {
  if (!t.conversionConfig)
    return !1;
  const o = t.conversionConfig[e];
  return ge(o) || Qe(o);
}
function ji(t, e) {
  return _t(t.tool, e);
}
function ar(t, e) {
  return Object.entries(t).some(([o, i]) => e[o] && rd(e[o], i));
}
async function cr(t, e) {
  const o = (await t.save()).data, i = e.find((s) => s.name === t.name);
  return i !== void 0 && !_t(i, "export") ? [] : e.reduce((s, n) => {
    if (!_t(n, "import") || n.toolbox === void 0)
      return s;
    const r = n.toolbox.filter((a) => {
      if (He(a) || a.icon === void 0)
        return !1;
      if (a.data !== void 0) {
        if (ar(a.data, o))
          return !1;
      } else if (n.name === t.name)
        return !1;
      return !0;
    });
    return s.push({
      ...n,
      toolbox: r
    }), s;
  }, []);
}
function mn(t, e) {
  return t.mergeable ? t.name === e.name ? !0 : ji(e, "export") && ji(t, "import") : !1;
}
function hd(t, e) {
  const o = e == null ? void 0 : e.export;
  return ge(o) ? o(t) : Qe(o) ? t[o] : (o !== void 0 && ne("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function vn(t, e) {
  const o = e == null ? void 0 : e.import;
  return ge(o) ? o(t) : Qe(o) ? {
    [o]: t
  } : (o !== void 0 && ne("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var de = /* @__PURE__ */ ((t) => (t.Default = "default", t.Separator = "separator", t.Html = "html", t))(de || {}), Je = /* @__PURE__ */ ((t) => (t.APPEND_CALLBACK = "appendCallback", t.RENDERED = "rendered", t.MOVED = "moved", t.UPDATED = "updated", t.REMOVED = "removed", t.ON_PASTE = "onPaste", t))(Je || {});
class we extends Qo {
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({
    id: e = td(),
    data: o,
    tool: i,
    readOnly: s,
    tunesData: n
  }, r) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (a = void 0) => {
      const c = a === void 0, l = a instanceof InputEvent;
      !c && !l && this.detectToolRootChange(a);
      let d;
      c || l ? d = !0 : d = !(a.length > 0 && a.every((u) => {
        const { addedNodes: g, removedNodes: v, target: h } = u;
        return [
          ...Array.from(g),
          ...Array.from(v),
          h
        ].some((f) => (b.isElement(f) || (f = f.parentElement), f && f.closest('[data-mutation-free="true"]') !== null));
      })), d && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = i.name, this.id = e, this.settings = i.settings, this.config = i.settings.config || {}, this.editorEventBus = r || null, this.blockAPI = new Ge(this), this.tool = i, this.toolInstance = i.create(o, this.blockAPI, s), this.tunes = i.tunes, this.composeTunes(n), this.holder = this.compose(), window.requestIdleCallback(() => {
      this.watchBlockMutations(), this.addInputEvents(), this.toggleInputsEmptyMark();
    });
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   */
  get inputs() {
    if (this.cachedInputs.length !== 0)
      return this.cachedInputs;
    const e = b.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  /**
   * Return current Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  /**
   * Set input index to the passed element
   *
   * @param element - HTML Element to set as current input
   */
  set currentInput(e) {
    const o = this.inputs.findIndex((i) => i === e || i.contains(e));
    o !== -1 && (this.inputIndex = o);
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get firstInput() {
    return this.inputs[0];
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data() {
    return this.save().then((e) => e && !He(e.data) ? e.data : {});
  }
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable() {
    return ge(this.toolInstance.merge);
  }
  /**
   * If Block contains inputs, it is focusable
   */
  get focusable() {
    return this.inputs.length !== 0;
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = b.isEmpty(this.pluginsContent, "/"), o = !this.hasMedia;
    return e && o;
  }
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget"
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var o, i;
    this.holder.classList.toggle(we.CSS.selected, e);
    const s = e === !0 && z.isRangeInsideContainer(this.holder), n = e === !1 && z.isFakeCursorInsideContainer(this.holder);
    (s || n) && ((o = this.editorEventBus) == null || o.emit(nr, { state: e }), s ? z.addFakeCursor() : z.removeFakeCursor(this.holder), (i = this.editorEventBus) == null || i.emit(rr, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains(we.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle(we.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains(we.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle(we.CSS.dropTarget, e);
  }
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(e, o) {
    if (ge(this.toolInstance[e])) {
      e === "appendCallback" && ne(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, o);
      } catch (i) {
        ne(`Error during '${e}' call: ${i.message}`, "error");
      }
    }
  }
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent), o = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries()
    ].forEach(([n, r]) => {
      if (ge(r.save))
        try {
          o[n] = r.save();
        } catch (a) {
          ne(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", a);
        }
    });
    const i = window.performance.now();
    let s;
    return Promise.resolve(e).then((n) => (s = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: n,
      tunes: o,
      time: s - i
    })).catch((n) => {
      ne(`Saving process for ${this.name} tool failed due to the ${n}`, "log", "red");
    });
  }
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  async validate(e) {
    let o = !0;
    return this.toolInstance.validate instanceof Function && (o = await this.toolInstance.validate(e)), o;
  }
  /**
   * Returns data to render in Block Tunes menu.
   * Splits block tunes into 2 groups: block specific tunes and common tunes
   */
  getTunes() {
    const e = [], o = [], i = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [];
    return b.isElement(i) ? e.push({
      type: de.Html,
      element: i
    }) : Array.isArray(i) ? e.push(...i) : e.push(i), [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((s) => s.render()).forEach((s) => {
      b.isElement(s) ? o.push({
        type: de.Html,
        element: s
      }) : Array.isArray(s) ? o.push(...s) : o.push(s);
    }), {
      toolTunes: e,
      commonTunes: o
    };
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = b.isNativeInput(document.activeElement) || !z.anchorNode ? document.activeElement : z.anchorNode;
  }
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange() {
    this.didMutated();
  }
  /**
   * Call Tool instance destroy method
   */
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), ge(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1)
      return Promise.resolve(this.tool.toolbox[0]);
    const o = await this.data, i = e;
    return i == null ? void 0 : i.find((s) => ar(s.data, o));
  }
  /**
   * Exports Block data as string using conversion config
   */
  async exportDataAsString() {
    const e = await this.data;
    return hd(e, this.tool.conversionConfig);
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = b.make("div", we.CSS.wrapper), o = b.make("div", we.CSS.content), i = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = i, o.appendChild(this.toolRenderedElement);
    let s = o;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((n) => {
      if (ge(n.wrap))
        try {
          s = n.wrap(s);
        } catch (r) {
          ne(`Tune ${n.constructor.name} wrap method throws an Error %o`, "warn", r);
        }
    }), e.appendChild(s), e;
  }
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((o) => {
      (o.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(o.name, o.create(e[o.name], this.blockAPI));
    }), Object.entries(e).forEach(([o, i]) => {
      this.tunesInstances.has(o) || (this.unavailableTunesData[o] = i);
    });
  }
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus), b.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), b.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (o) => {
      const { mutations: i } = o;
      i.some((s) => pd(s, this.toolRenderedElement)) && this.didMutated(i);
    }, (e = this.editorEventBus) == null || e.on(vt, this.redactorDomChangedCallback);
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(vt, this.redactorDomChangedCallback);
  }
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  detectToolRootChange(e) {
    e.forEach((o) => {
      if (Array.from(o.removedNodes).includes(this.toolRenderedElement)) {
        const i = o.addedNodes[o.addedNodes.length - 1];
        this.toolRenderedElement = i;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
  /**
   * Mark inputs with 'data-empty' attribute with the empty state
   */
  toggleInputsEmptyMark() {
    this.inputs.forEach(er);
  }
}
class md extends Q {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, o = {}, i = {}, s, n, r, a) => {
      const c = this.Editor.BlockManager.insert({
        id: a,
        tool: e,
        data: o,
        index: s,
        needToFocus: n,
        replace: r
      });
      return new Ge(c);
    }, this.composeBlockData = async (e) => {
      const o = this.Editor.Tools.blockTools.get(e);
      return new we({
        tool: o,
        api: this.Editor.API,
        readOnly: !0,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, o, i) => {
      const { BlockManager: s } = this.Editor, n = s.getBlockById(e);
      if (n === void 0)
        throw new Error(`Block with id "${e}" not found`);
      const r = await s.update(n, o, i);
      return new Ge(r);
    }, this.convert = async (e, o, i) => {
      var s, n;
      const { BlockManager: r, Tools: a } = this.Editor, c = r.getBlockById(e);
      if (!c)
        throw new Error(`Block with id "${e}" not found`);
      const l = a.blockTools.get(c.name), d = a.blockTools.get(o);
      if (!d)
        throw new Error(`Block Tool with type "${o}" not found`);
      const u = ((s = l == null ? void 0 : l.conversionConfig) == null ? void 0 : s.export) !== void 0, g = ((n = d.conversionConfig) == null ? void 0 : n.import) !== void 0;
      if (u && g) {
        const v = await r.convert(c, o, i);
        return new Ge(v);
      } else {
        const v = [
          u ? !1 : wi(c.name),
          g ? !1 : wi(o)
        ].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${c.name}" to "${o}" is not possible. ${v} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, o = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(o);
      const i = e.map(({ id: s, type: n, data: r }) => this.Editor.BlockManager.composeBlock({
        id: s,
        tool: n || this.config.defaultBlock,
        data: r
      }));
      return this.Editor.BlockManager.insertMany(i, o), i.map((s) => new Ge(s));
    };
  }
  /**
   * Available methods
   *
   * @returns {Blocks}
   */
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, o) => this.swap(e, o),
      move: (e, o) => this.move(e, o),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      getBlockByElement: (e) => this.getBlockByElement(e),
      stretchBlock: (e, o = !0) => this.stretchBlock(e, o),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert
    };
  }
  /**
   * Returns Blocks count
   *
   * @returns {number}
   */
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  /**
   * Returns current block index
   *
   * @returns {number}
   */
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */
  getBlockIndex(e) {
    const o = this.Editor.BlockManager.getBlockById(e);
    if (!o) {
      Re("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(o);
  }
  /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */
  getBlockByIndex(e) {
    const o = this.Editor.BlockManager.getBlockByIndex(e);
    if (o === void 0) {
      Re("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new Ge(o);
  }
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const o = this.Editor.BlockManager.getBlockById(e);
    return o === void 0 ? (Re("There is no block with id `" + e + "`", "warn"), null) : new Ge(o);
  }
  /**
   * Get Block API object by any child html element
   *
   * @param element - html element to get Block by
   */
  getBlockByElement(e) {
    const o = this.Editor.BlockManager.getBlock(e);
    if (o === void 0) {
      Re("There is no block corresponding to element `" + e + "`", "warn");
      return;
    }
    return new Ge(o);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, o) {
    ne(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info"
    ), this.Editor.BlockManager.swap(e, o);
  }
  /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */
  move(e, o) {
    this.Editor.BlockManager.move(e, o);
  }
  /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const o = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(o);
    } catch (o) {
      Re(o, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
  }
  /**
   * Clear Editor's area
   */
  async clear() {
    await this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
  }
  /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */
  async render(e) {
    if (e === void 0 || e.blocks === void 0)
      throw new Error("Incorrect data passed to the render() method");
    this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
  }
  /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */
  renderFromHTML(e) {
    return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
  }
  /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(e, o = !0) {
    ht(
      !0,
      "blocks.stretchBlock()",
      "BlockAPI"
    );
    const i = this.Editor.BlockManager.getBlockByIndex(e);
    i && (i.stretched = o);
  }
  /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */
  insertNewBlock() {
    ne("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
  }
  /**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */
  validateIndex(e) {
    if (typeof e != "number")
      throw new Error("Index should be a number");
    if (e < 0)
      throw new Error("Index should be greater than or equal to 0");
    if (e === null)
      throw new Error("Index should be greater than or equal to 0");
  }
}
function vd(t, e) {
  return typeof t == "number" ? e.BlockManager.getBlockByIndex(t) : typeof t == "string" ? e.BlockManager.getBlockById(t) : e.BlockManager.getBlockById(t.id);
}
class _d extends Q {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, o = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, o), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, o = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, o), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, o = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, o), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, o = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, o), !0) : !1, this.setToBlock = (e, o = this.Editor.Caret.positions.DEFAULT, i = 0) => {
      const s = vd(e, this.Editor);
      return s === void 0 ? !1 : (this.Editor.Caret.setToBlock(s, o, i), !0);
    }, this.focus = (e = !1) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
}
class fd extends Q {
  /**
   * Available methods
   *
   * @returns {Events}
   */
  get methods() {
    return {
      emit: (e, o) => this.emit(e, o),
      off: (e, o) => this.off(e, o),
      on: (e, o) => this.on(e, o)
    };
  }
  /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */
  on(e, o) {
    this.eventsDispatcher.on(e, o);
  }
  /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */
  emit(e, o) {
    this.eventsDispatcher.emit(e, o);
  }
  /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */
  off(e, o) {
    this.eventsDispatcher.off(e, o);
  }
}
class At extends Q {
  /**
   * Return namespace section for tool or block tune
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  static getNamespace(e, o) {
    return o ? `blockTunes.${e}` : `tools.${e}`;
  }
  /**
   * Return I18n API methods with global dictionary access
   */
  get methods() {
    return {
      t: () => {
        Re("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, o) {
    return Object.assign(
      this.methods,
      {
        t: (i) => Pe.t(At.getNamespace(e, o), i)
      }
    );
  }
}
class yd extends Q {
  /**
   * Editor.js Core API modules
   */
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      tools: this.Editor.ToolsAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, o) {
    return Object.assign(
      this.methods,
      {
        i18n: this.Editor.I18nAPI.getMethodsForTool(e, o)
      }
    );
  }
}
class bd extends Q {
  /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  /**
   * Open Inline Toolbar
   */
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  /**
   * Close Inline Toolbar
   */
  close() {
    this.Editor.InlineToolbar.close();
  }
}
class kd extends Q {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, o, i, s) => this.on(e, o, i, s),
      off: (e, o, i, s) => this.off(e, o, i, s),
      offById: (e) => this.offById(e)
    };
  }
  /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  on(e, o, i, s) {
    return this.listeners.on(e, o, i, s);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, o, i, s) {
    this.listeners.off(e, o, i, s);
  }
  /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */
  offById(e) {
    this.listeners.offById(e);
  }
}
var lr = { exports: {} };
(function(t, e) {
  (function(o, i) {
    t.exports = i();
  })(window, function() {
    return function(o) {
      var i = {};
      function s(n) {
        if (i[n])
          return i[n].exports;
        var r = i[n] = { i: n, l: !1, exports: {} };
        return o[n].call(r.exports, r, r.exports, s), r.l = !0, r.exports;
      }
      return s.m = o, s.c = i, s.d = function(n, r, a) {
        s.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: a });
      }, s.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, s.t = function(n, r) {
        if (1 & r && (n = s(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
          return n;
        var a = /* @__PURE__ */ Object.create(null);
        if (s.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: n }), 2 & r && typeof n != "string")
          for (var c in n)
            s.d(a, c, (function(l) {
              return n[l];
            }).bind(null, c));
        return a;
      }, s.n = function(n) {
        var r = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return s.d(r, "a", r), r;
      }, s.o = function(n, r) {
        return Object.prototype.hasOwnProperty.call(n, r);
      }, s.p = "/", s(s.s = 0);
    }([function(o, i, s) {
      s(1), /*!
      * Codex JavaScript Notification module
      * https://github.com/codex-team/js-notifier
      */
      o.exports = function() {
        var n = s(6), r = "cdx-notify--bounce-in", a = null;
        return { show: function(c) {
          if (c.message) {
            (function() {
              if (a)
                return !0;
              a = n.getWrapper(), document.body.appendChild(a);
            })();
            var l = null, d = c.time || 8e3;
            switch (c.type) {
              case "confirm":
                l = n.confirm(c);
                break;
              case "prompt":
                l = n.prompt(c);
                break;
              default:
                l = n.alert(c), window.setTimeout(function() {
                  l.remove();
                }, d);
            }
            a.appendChild(l), l.classList.add(r);
          }
        } };
      }();
    }, function(o, i, s) {
      var n = s(2);
      typeof n == "string" && (n = [[o.i, n, ""]]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      s(4)(n, r), n.locals && (o.exports = n.locals);
    }, function(o, i, s) {
      (o.exports = s(3)(!1)).push([o.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(o, i) {
      o.exports = function(s) {
        var n = [];
        return n.toString = function() {
          return this.map(function(r) {
            var a = function(c, l) {
              var d = c[1] || "", u = c[3];
              if (!u)
                return d;
              if (l && typeof btoa == "function") {
                var g = (h = u, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(h)))) + " */"), v = u.sources.map(function(f) {
                  return "/*# sourceURL=" + u.sourceRoot + f + " */";
                });
                return [d].concat(v).concat([g]).join(`
`);
              }
              var h;
              return [d].join(`
`);
            }(r, s);
            return r[2] ? "@media " + r[2] + "{" + a + "}" : a;
          }).join("");
        }, n.i = function(r, a) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var c = {}, l = 0; l < this.length; l++) {
            var d = this[l][0];
            typeof d == "number" && (c[d] = !0);
          }
          for (l = 0; l < r.length; l++) {
            var u = r[l];
            typeof u[0] == "number" && c[u[0]] || (a && !u[2] ? u[2] = a : a && (u[2] = "(" + u[2] + ") and (" + a + ")"), n.push(u));
          }
        }, n;
      };
    }, function(o, i, s) {
      var n, r, a = {}, c = (n = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return r === void 0 && (r = n.apply(this, arguments)), r;
      }), l = /* @__PURE__ */ function(x) {
        var j = {};
        return function(_) {
          if (typeof _ == "function")
            return _();
          if (j[_] === void 0) {
            var m = (function(k) {
              return document.querySelector(k);
            }).call(this, _);
            if (window.HTMLIFrameElement && m instanceof window.HTMLIFrameElement)
              try {
                m = m.contentDocument.head;
              } catch {
                m = null;
              }
            j[_] = m;
          }
          return j[_];
        };
      }(), d = null, u = 0, g = [], v = s(5);
      function h(x, j) {
        for (var _ = 0; _ < x.length; _++) {
          var m = x[_], k = a[m.id];
          if (k) {
            k.refs++;
            for (var y = 0; y < k.parts.length; y++)
              k.parts[y](m.parts[y]);
            for (; y < m.parts.length; y++)
              k.parts.push(D(m.parts[y], j));
          } else {
            var P = [];
            for (y = 0; y < m.parts.length; y++)
              P.push(D(m.parts[y], j));
            a[m.id] = { id: m.id, refs: 1, parts: P };
          }
        }
      }
      function f(x, j) {
        for (var _ = [], m = {}, k = 0; k < x.length; k++) {
          var y = x[k], P = j.base ? y[0] + j.base : y[0], N = { css: y[1], media: y[2], sourceMap: y[3] };
          m[P] ? m[P].parts.push(N) : _.push(m[P] = { id: P, parts: [N] });
        }
        return _;
      }
      function I(x, j) {
        var _ = l(x.insertInto);
        if (!_)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var m = g[g.length - 1];
        if (x.insertAt === "top")
          m ? m.nextSibling ? _.insertBefore(j, m.nextSibling) : _.appendChild(j) : _.insertBefore(j, _.firstChild), g.push(j);
        else if (x.insertAt === "bottom")
          _.appendChild(j);
        else {
          if (typeof x.insertAt != "object" || !x.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var k = l(x.insertInto + " " + x.insertAt.before);
          _.insertBefore(j, k);
        }
      }
      function L(x) {
        if (x.parentNode === null)
          return !1;
        x.parentNode.removeChild(x);
        var j = g.indexOf(x);
        j >= 0 && g.splice(j, 1);
      }
      function E(x) {
        var j = document.createElement("style");
        return x.attrs.type === void 0 && (x.attrs.type = "text/css"), $(j, x.attrs), I(x, j), j;
      }
      function $(x, j) {
        Object.keys(j).forEach(function(_) {
          x.setAttribute(_, j[_]);
        });
      }
      function D(x, j) {
        var _, m, k, y;
        if (j.transform && x.css) {
          if (!(y = j.transform(x.css)))
            return function() {
            };
          x.css = y;
        }
        if (j.singleton) {
          var P = u++;
          _ = d || (d = E(j)), m = C.bind(null, _, P, !1), k = C.bind(null, _, P, !0);
        } else
          x.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (_ = function(N) {
            var q = document.createElement("link");
            return N.attrs.type === void 0 && (N.attrs.type = "text/css"), N.attrs.rel = "stylesheet", $(q, N.attrs), I(N, q), q;
          }(j), m = (function(N, q, oe) {
            var V = oe.css, re = oe.sourceMap, ue = q.convertToAbsoluteUrls === void 0 && re;
            (q.convertToAbsoluteUrls || ue) && (V = v(V)), re && (V += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(re)))) + " */");
            var pe = new Blob([V], { type: "text/css" }), W = N.href;
            N.href = URL.createObjectURL(pe), W && URL.revokeObjectURL(W);
          }).bind(null, _, j), k = function() {
            L(_), _.href && URL.revokeObjectURL(_.href);
          }) : (_ = E(j), m = (function(N, q) {
            var oe = q.css, V = q.media;
            if (V && N.setAttribute("media", V), N.styleSheet)
              N.styleSheet.cssText = oe;
            else {
              for (; N.firstChild; )
                N.removeChild(N.firstChild);
              N.appendChild(document.createTextNode(oe));
            }
          }).bind(null, _), k = function() {
            L(_);
          });
        return m(x), function(N) {
          if (N) {
            if (N.css === x.css && N.media === x.media && N.sourceMap === x.sourceMap)
              return;
            m(x = N);
          } else
            k();
        };
      }
      o.exports = function(x, j) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (j = j || {}).attrs = typeof j.attrs == "object" ? j.attrs : {}, j.singleton || typeof j.singleton == "boolean" || (j.singleton = c()), j.insertInto || (j.insertInto = "head"), j.insertAt || (j.insertAt = "bottom");
        var _ = f(x, j);
        return h(_, j), function(m) {
          for (var k = [], y = 0; y < _.length; y++) {
            var P = _[y];
            (N = a[P.id]).refs--, k.push(N);
          }
          for (m && h(f(m, j), j), y = 0; y < k.length; y++) {
            var N;
            if ((N = k[y]).refs === 0) {
              for (var q = 0; q < N.parts.length; q++)
                N.parts[q]();
              delete a[N.id];
            }
          }
        };
      };
      var A, B = (A = [], function(x, j) {
        return A[x] = j, A.filter(Boolean).join(`
`);
      });
      function C(x, j, _, m) {
        var k = _ ? "" : m.css;
        if (x.styleSheet)
          x.styleSheet.cssText = B(j, k);
        else {
          var y = document.createTextNode(k), P = x.childNodes;
          P[j] && x.removeChild(P[j]), P.length ? x.insertBefore(y, P[j]) : x.appendChild(y);
        }
      }
    }, function(o, i) {
      o.exports = function(s) {
        var n = typeof window < "u" && window.location;
        if (!n)
          throw new Error("fixUrls requires window.location");
        if (!s || typeof s != "string")
          return s;
        var r = n.protocol + "//" + n.host, a = r + n.pathname.replace(/\/[^\/]*$/, "/");
        return s.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(c, l) {
          var d, u = l.trim().replace(/^"(.*)"$/, function(g, v) {
            return v;
          }).replace(/^'(.*)'$/, function(g, v) {
            return v;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(u) ? c : (d = u.indexOf("//") === 0 ? u : u.indexOf("/") === 0 ? r + u : a + u.replace(/^\.\//, ""), "url(" + JSON.stringify(d) + ")");
        });
      };
    }, function(o, i, s) {
      var n, r, a, c, l, d, u, g, v;
      o.exports = (n = "cdx-notifies", r = "cdx-notify", a = "cdx-notify__cross", c = "cdx-notify__button--confirm", l = "cdx-notify__button--cancel", d = "cdx-notify__input", u = "cdx-notify__button", g = "cdx-notify__btns-wrapper", { alert: v = function(h) {
        var f = document.createElement("DIV"), I = document.createElement("DIV"), L = h.message, E = h.style;
        return f.classList.add(r), E && f.classList.add(r + "--" + E), f.innerHTML = L, I.classList.add(a), I.addEventListener("click", f.remove.bind(f)), f.appendChild(I), f;
      }, confirm: function(h) {
        var f = v(h), I = document.createElement("div"), L = document.createElement("button"), E = document.createElement("button"), $ = f.querySelector("." + a), D = h.cancelHandler, A = h.okHandler;
        return I.classList.add(g), L.innerHTML = h.okText || "Confirm", E.innerHTML = h.cancelText || "Cancel", L.classList.add(u), E.classList.add(u), L.classList.add(c), E.classList.add(l), D && typeof D == "function" && (E.addEventListener("click", D), $.addEventListener("click", D)), A && typeof A == "function" && L.addEventListener("click", A), L.addEventListener("click", f.remove.bind(f)), E.addEventListener("click", f.remove.bind(f)), I.appendChild(L), I.appendChild(E), f.appendChild(I), f;
      }, prompt: function(h) {
        var f = v(h), I = document.createElement("div"), L = document.createElement("button"), E = document.createElement("input"), $ = f.querySelector("." + a), D = h.cancelHandler, A = h.okHandler;
        return I.classList.add(g), L.innerHTML = h.okText || "Ok", L.classList.add(u), L.classList.add(c), E.classList.add(d), h.placeholder && E.setAttribute("placeholder", h.placeholder), h.default && (E.value = h.default), h.inputType && (E.type = h.inputType), D && typeof D == "function" && $.addEventListener("click", D), A && typeof A == "function" && L.addEventListener("click", function() {
          A(E.value);
        }), L.addEventListener("click", f.remove.bind(f)), I.appendChild(E), I.appendChild(L), f.appendChild(I), f;
      }, getWrapper: function() {
        var h = document.createElement("DIV");
        return h.classList.add(n), h;
      } });
    }]);
  });
})(lr);
var wd = lr.exports;
const jd = /* @__PURE__ */ Li(wd);
class xd {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    jd.show(e);
  }
}
class Sd extends Q {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: o }) {
    super({
      config: e,
      eventsDispatcher: o
    }), this.notifier = new xd();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e) => this.show(e)
    };
  }
  /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */
  show(e) {
    return this.notifier.show(e);
  }
}
class Ed extends Q {
  /**
   * Available methods
   */
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (o) => this.toggle(o),
      get isEnabled() {
        return e();
      }
    };
  }
  /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  /**
   * Returns current read-only state
   */
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
}
var dr = { exports: {} };
(function(t, e) {
  (function(o, i) {
    t.exports = i();
  })(Kl, function() {
    function o(u) {
      var g = u.tags, v = Object.keys(g), h = v.map(function(f) {
        return typeof g[f];
      }).every(function(f) {
        return f === "object" || f === "boolean" || f === "function";
      });
      if (!h)
        throw new Error("The configuration was invalid");
      this.config = u;
    }
    var i = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function s(u) {
      return i.indexOf(u.nodeName) !== -1;
    }
    var n = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function r(u) {
      return n.indexOf(u.nodeName) !== -1;
    }
    o.prototype.clean = function(u) {
      const g = document.implementation.createHTMLDocument(), v = g.createElement("div");
      return v.innerHTML = u, this._sanitize(g, v), v.innerHTML;
    }, o.prototype._sanitize = function(u, g) {
      var v = a(u, g), h = v.firstChild();
      if (h)
        do {
          if (h.nodeType === Node.TEXT_NODE)
            if (h.data.trim() === "" && (h.previousElementSibling && s(h.previousElementSibling) || h.nextElementSibling && s(h.nextElementSibling))) {
              g.removeChild(h), this._sanitize(u, g);
              break;
            } else
              continue;
          if (h.nodeType === Node.COMMENT_NODE) {
            g.removeChild(h), this._sanitize(u, g);
            break;
          }
          var f = r(h), I;
          f && (I = Array.prototype.some.call(h.childNodes, s));
          var L = !!g.parentNode, E = s(g) && s(h) && L, $ = h.nodeName.toLowerCase(), D = c(this.config, $, h), A = f && I;
          if (A || l(h, D) || !this.config.keepNestedBlockElements && E) {
            if (!(h.nodeName === "SCRIPT" || h.nodeName === "STYLE"))
              for (; h.childNodes.length > 0; )
                g.insertBefore(h.childNodes[0], h);
            g.removeChild(h), this._sanitize(u, g);
            break;
          }
          for (var B = 0; B < h.attributes.length; B += 1) {
            var C = h.attributes[B];
            d(C, D, h) && (h.removeAttribute(C.name), B = B - 1);
          }
          this._sanitize(u, h);
        } while (h = v.nextSibling());
    };
    function a(u, g) {
      return u.createTreeWalker(
        g,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function c(u, g, v) {
      return typeof u.tags[g] == "function" ? u.tags[g](v) : u.tags[g];
    }
    function l(u, g) {
      return typeof g > "u" ? !0 : typeof g == "boolean" ? !g : !1;
    }
    function d(u, g, v) {
      var h = u.name.toLowerCase();
      return g === !0 ? !1 : typeof g[h] == "function" ? !g[h](u.value, v) : typeof g[h] > "u" || g[h] === !1 ? !0 : typeof g[h] == "string" ? g[h] !== u.value : !1;
    }
    return o;
  });
})(dr);
var Cd = dr.exports;
const Bd = /* @__PURE__ */ Li(Cd);
function Lt(t, e) {
  return t.map((o) => {
    const i = ge(e) ? e(o.tool) : e;
    return He(i) || (o.data = Nt(o.data, i)), o;
  });
}
function Ve(t, e = {}) {
  const o = {
    tags: e
  };
  return new Bd(o).clean(t);
}
function Nt(t, e) {
  return Array.isArray(t) ? Td(t, e) : je(t) ? Pd(t, e) : Qe(t) ? Id(t, e) : t;
}
function Td(t, e) {
  return t.map((o) => Nt(o, e));
}
function Pd(t, e) {
  const o = {};
  for (const i in t) {
    if (!Object.prototype.hasOwnProperty.call(t, i))
      continue;
    const s = t[i], n = Od(e[i]) ? e[i] : e;
    o[i] = Nt(s, n);
  }
  return o;
}
function Id(t, e) {
  return je(e) ? Ve(t, e) : e === !1 ? Ve(t, {}) : t;
}
function Od(t) {
  return je(t) || Jl(t) || ge(t);
}
class Ad extends Q {
  /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
  get methods() {
    return {
      clean: (e, o) => this.clean(e, o)
    };
  }
  /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */
  clean(e, o) {
    return Ve(e, o);
  }
}
class Ld extends Q {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  get methods() {
    return {
      save: () => this.save()
    };
  }
  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? (Re(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
}
class Nd extends Q {
  constructor() {
    super(...arguments), this.selectionUtils = new z();
  }
  /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
  get methods() {
    return {
      findParentTag: (e, o) => this.findParentTag(e, o),
      expandToTag: (e) => this.expandToTag(e),
      save: () => this.selectionUtils.save(),
      restore: () => this.selectionUtils.restore(),
      setFakeBackground: () => this.selectionUtils.setFakeBackground(),
      removeFakeBackground: () => this.selectionUtils.removeFakeBackground()
    };
  }
  /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */
  findParentTag(e, o) {
    return this.selectionUtils.findParentTag(e, o);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    this.selectionUtils.expandToTag(e);
  }
}
class Md extends Q {
  /**
   * Available methods
   */
  get methods() {
    return {
      getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values())
    };
  }
}
class Fd extends Q {
  /**
   * Exported classes
   */
  get classes() {
    return {
      /**
       * Base Block styles
       */
      block: "cdx-block",
      /**
       * Inline Tools styles
       */
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      /**
       * UI elements
       */
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      /**
       * Settings styles
       */
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
}
class Dd extends Q {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e)
    };
  }
  /**
   * Open toolbar
   */
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * Close toolbar and all included elements
   */
  close() {
    this.Editor.Toolbar.close();
  }
  /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      Re("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      Re("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
}
var ur = { exports: {} };
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */
(function(t, e) {
  (function(o, i) {
    t.exports = i();
  })(window, function() {
    return function(o) {
      var i = {};
      function s(n) {
        if (i[n])
          return i[n].exports;
        var r = i[n] = { i: n, l: !1, exports: {} };
        return o[n].call(r.exports, r, r.exports, s), r.l = !0, r.exports;
      }
      return s.m = o, s.c = i, s.d = function(n, r, a) {
        s.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: a });
      }, s.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, s.t = function(n, r) {
        if (1 & r && (n = s(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
          return n;
        var a = /* @__PURE__ */ Object.create(null);
        if (s.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: n }), 2 & r && typeof n != "string")
          for (var c in n)
            s.d(a, c, (function(l) {
              return n[l];
            }).bind(null, c));
        return a;
      }, s.n = function(n) {
        var r = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return s.d(r, "a", r), r;
      }, s.o = function(n, r) {
        return Object.prototype.hasOwnProperty.call(n, r);
      }, s.p = "", s(s.s = 0);
    }([function(o, i, s) {
      o.exports = s(1);
    }, function(o, i, s) {
      s.r(i), s.d(i, "default", function() {
        return n;
      });
      class n {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(!0);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(a, c, l) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const d = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, l);
          if (d.hidingDelay && (this.hidingDelay = d.hidingDelay), this.nodes.content.innerHTML = "", typeof c == "string")
            this.nodes.content.appendChild(document.createTextNode(c));
          else {
            if (!(c instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof c + " given.");
            this.nodes.content.appendChild(c);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), d.placement) {
            case "top":
              this.placeTop(a, d);
              break;
            case "left":
              this.placeLeft(a, d);
              break;
            case "right":
              this.placeRight(a, d);
              break;
            case "bottom":
            default:
              this.placeBottom(a, d);
          }
          d && d.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
          }, d.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
        }
        hide(a = !1) {
          if (this.hidingDelay && !a)
            return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
              this.hide(!0);
            }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(a, c, l) {
          a.addEventListener("mouseenter", () => {
            this.show(a, c, l);
          }), a.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const a = "codex-tooltips-style";
          if (document.getElementById(a))
            return;
          const c = s(2), l = this.make("style", null, { textContent: c.toString(), id: a });
          this.prepend(document.head, l);
        }
        placeBottom(a, c) {
          const l = a.getBoundingClientRect(), d = l.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, u = l.bottom + window.pageYOffset + this.offsetTop + c.marginTop;
          this.applyPlacement("bottom", d, u);
        }
        placeTop(a, c) {
          const l = a.getBoundingClientRect(), d = l.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, u = l.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", d, u);
        }
        placeLeft(a, c) {
          const l = a.getBoundingClientRect(), d = l.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - c.marginLeft, u = l.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", d, u);
        }
        placeRight(a, c) {
          const l = a.getBoundingClientRect(), d = l.right + this.offsetRight + c.marginRight, u = l.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", d, u);
        }
        applyPlacement(a, c, l) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = c + "px", this.nodes.wrapper.style.top = l + "px";
        }
        make(a, c = null, l = {}) {
          const d = document.createElement(a);
          Array.isArray(c) ? d.classList.add(...c) : c && d.classList.add(c);
          for (const u in l)
            l.hasOwnProperty(u) && (d[u] = l[u]);
          return d;
        }
        append(a, c) {
          Array.isArray(c) ? c.forEach((l) => a.appendChild(l)) : a.appendChild(c);
        }
        prepend(a, c) {
          Array.isArray(c) ? (c = c.reverse()).forEach((l) => a.prepend(l)) : a.prepend(c);
        }
      }
    }, function(o, i) {
      o.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(ur);
var Rd = ur.exports;
const $d = /* @__PURE__ */ Li(Rd);
let Ue = null;
function Mt() {
  Ue || (Ue = new $d());
}
function Hd(t, e, o) {
  Mt(), Ue == null || Ue.show(t, e, o);
}
function xi(t = !1) {
  Mt(), Ue == null || Ue.hide(t);
}
function Si(t, e, o) {
  Mt(), Ue == null || Ue.onHover(t, e, o);
}
function zd() {
  Ue == null || Ue.destroy(), Ue = null;
}
class Ud extends Q {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: o }) {
    super({
      config: e,
      eventsDispatcher: o
    });
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e, o, i) => this.show(e, o, i),
      hide: () => this.hide(),
      onHover: (e, o, i) => this.onHover(e, o, i)
    };
  }
  /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  show(e, o, i) {
    Hd(e, o, i);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    xi();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, o, i) {
    Si(e, o, i);
  }
}
class qd extends Q {
  /**
   * Available methods / getters
   */
  get methods() {
    return {
      nodes: this.editorNodes
      /**
       * There can be added some UI methods, like toggleThinMode() etc
       */
    };
  }
  /**
   * Exported classes
   */
  get editorNodes() {
    return {
      /**
       * Top-level editor instance wrapper
       */
      wrapper: this.Editor.UI.nodes.wrapper,
      /**
       * Element that holds all the Blocks
       */
      redactor: this.Editor.UI.nodes.redactor
    };
  }
}
function gr(t, e) {
  const o = {};
  return Object.entries(t).forEach(([i, s]) => {
    if (je(s)) {
      const n = e ? `${e}.${i}` : i;
      Object.values(s).every((r) => Qe(r)) ? o[i] = n : o[i] = gr(s, n);
      return;
    }
    o[i] = s;
  }), o;
}
const Ne = gr(or);
function Wd(t, e) {
  const o = {};
  return Object.keys(t).forEach((i) => {
    const s = e[i];
    s !== void 0 ? o[s] = t[i] : o[i] = t[i];
  }), o;
}
const pr = class qo {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(e, o) {
    this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = o;
  }
  /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */
  setCursor(e) {
    e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(e) {
    this.items = e;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(qo.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(qo.directions.LEFT);
  }
  /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */
  leafNodesAndReturnIndex(e) {
    if (this.items.length === 0)
      return this.cursor;
    let o = this.cursor;
    return o === -1 ? o = e === qo.directions.RIGHT ? -1 : 0 : this.items[o].classList.remove(this.focusedCssClass), e === qo.directions.RIGHT ? o = (o + 1) % this.items.length : o = (this.items.length + o - 1) % this.items.length, b.canSetCaret(this.items[o]) && ki(() => z.setCursor(this.items[o]), 50)(), this.items[o].classList.add(this.focusedCssClass), o;
  }
};
pr.directions = {
  RIGHT: "right",
  LEFT: "left"
};
let $o = pr;
class yo {
  /**
   * @param options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (o) => {
      if (this.isEventReadyForHandling(o))
        switch (yo.usedKeys.includes(o.keyCode) && o.preventDefault(), o.keyCode) {
          case Y.TAB:
            this.handleTabPress(o);
            break;
          case Y.LEFT:
          case Y.UP:
            this.flipLeft();
            break;
          case Y.RIGHT:
          case Y.DOWN:
            this.flipRight();
            break;
          case Y.ENTER:
            this.handleEnterPress(o);
            break;
        }
    }, this.iterator = new $o(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || yo.usedKeys;
  }
  /**
   * True if flipper is currently activated
   */
  get isActivated() {
    return this.activated;
  }
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys() {
    return [
      Y.TAB,
      Y.LEFT,
      Y.RIGHT,
      Y.ENTER,
      Y.UP,
      Y.DOWN
    ];
  }
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(e, o) {
    this.activated = !0, e && this.iterator.setItems(e), o !== void 0 && this.iterator.setCursor(o), document.addEventListener("keydown", this.onKeyDown, !0);
  }
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate() {
    this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Focus first item
   */
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  /**
   * Focuses next flipper iterator item
   */
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  /**
   * Return true if some button is focused
   */
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter((o) => o !== e);
  }
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  dropCursor() {
    this.iterator.dropCursor();
  }
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  handleTabPress(e) {
    switch (e.shiftKey ? $o.directions.LEFT : $o.directions.RIGHT) {
      case $o.directions.RIGHT:
        this.flipRight();
        break;
      case $o.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), ge(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
}
const Vd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', Kd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', Yd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>', Gd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>', Xd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', Jd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', Zd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', Qd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', _n = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', eu = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', ou = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', hr = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>', iu = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', tu = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', su = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>', nu = "__", ru = "--";
function so(t) {
  return (e, o) => [[t, e].filter((i) => !!i).join(nu), o].filter((i) => !!i).join(ru);
}
const Ho = so("ce-hint"), zo = {
  root: Ho(),
  alignedStart: Ho(null, "align-left"),
  alignedCenter: Ho(null, "align-center"),
  title: Ho("title"),
  description: Ho("description")
};
class au {
  /**
   * Constructs the hint content instance
   *
   * @param params - hint content parameters
   */
  constructor(e) {
    this.nodes = {
      root: b.make("div", [zo.root, e.alignment === "center" ? zo.alignedCenter : zo.alignedStart]),
      title: b.make("div", zo.title, { textContent: e.title })
    }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = b.make("div", zo.description, { textContent: e.description }), this.nodes.root.appendChild(this.nodes.description));
  }
  /**
   * Returns the root element of the hint content
   */
  getElement() {
    return this.nodes.root;
  }
}
class Ft {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    this.params = e;
  }
  /**
   * Item name if exists
   */
  get name() {
    if (this.params !== void 0 && "name" in this.params)
      return this.params.name;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    xi();
  }
  /**
   * Called when children popover is opened (if exists)
   */
  onChildrenOpen() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onOpen) == "function" && this.params.children.onOpen();
  }
  /**
   * Called when children popover is closed (if exists)
   */
  onChildrenClose() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onClose) == "function" && this.params.children.onClose();
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    var e, o;
    this.params !== void 0 && "onActivate" in this.params && ((o = (e = this.params).onActivate) == null || o.call(e, this.params));
  }
  /**
   * Adds hint to the item element if hint data is provided
   *
   * @param itemElement - popover item root element to add hint to
   * @param hintData - hint data
   */
  addHint(e, o) {
    const i = new au(o);
    Si(e, i.getElement(), {
      placement: o.position,
      hidingDelay: 100
    });
  }
  /**
   * Returns item children that are represented as popover items
   */
  get children() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.items) !== void 0 ? this.params.children.items : [];
  }
  /**
   * Returns true if item has any type of children
   */
  get hasChildren() {
    return this.children.length > 0;
  }
  /**
   * Returns true if item children should be open instantly after popover is opened and not on item click/hover
   */
  get isChildrenOpen() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.isOpen) === !0;
  }
  /**
   * True if item children items should be navigatable via keyboard
   */
  get isChildrenFlippable() {
    var e;
    return !(this.params === void 0 || !("children" in this.params) || ((e = this.params.children) == null ? void 0 : e.isFlippable) === !1);
  }
  /**
   * Returns true if item has children that should be searchable
   */
  get isChildrenSearchable() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.searchable) === !0;
  }
  /**
   * True if popover should close once item is activated
   */
  get closeOnActivate() {
    return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
  }
  /**
   * True if item is active
   */
  get isActive() {
    return this.params === void 0 || !("isActive" in this.params) ? !1 : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === !0;
  }
}
const Le = so("ce-popover-item"), he = {
  container: Le(),
  active: Le(null, "active"),
  disabled: Le(null, "disabled"),
  focused: Le(null, "focused"),
  hidden: Le(null, "hidden"),
  confirmationState: Le(null, "confirmation"),
  noHover: Le(null, "no-hover"),
  noFocus: Le(null, "no-focus"),
  title: Le("title"),
  secondaryTitle: Le("secondary-title"),
  icon: Le("icon"),
  iconTool: Le("icon", "tool"),
  iconChevronRight: Le("icon", "chevron-right"),
  wobbleAnimation: so("wobble")()
};
class po extends Ft {
  /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   * @param renderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, o) {
    super(e), this.params = e, this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      var i;
      (i = this.nodes.root) == null || i.classList.remove(he.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      var i;
      (i = this.nodes.root) == null || i.classList.remove(he.noHover);
    }, this.onErrorAnimationEnd = () => {
      var i, s;
      (i = this.nodes.icon) == null || i.classList.remove(he.wobbleAnimation), (s = this.nodes.icon) == null || s.removeEventListener("animationend", this.onErrorAnimationEnd);
    }, this.nodes.root = this.make(e, o);
  }
  /**
   * True if item is disabled and hence not clickable
   */
  get isDisabled() {
    return this.params.isDisabled === !0;
  }
  /**
   * Exposes popover item toggle parameter
   */
  get toggle() {
    return this.params.toggle;
  }
  /**
   * Item title
   */
  get title() {
    return this.params.title;
  }
  /**
   * True if confirmation state is enabled for popover item
   */
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  /**
   * True if item is focused in keyboard navigation process
   */
  get isFocused() {
    return this.nodes.root === null ? !1 : this.nodes.root.classList.contains(he.focused);
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */
  toggleActive(e) {
    var o;
    (o = this.nodes.root) == null || o.classList.toggle(he.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var o;
    (o = this.nodes.root) == null || o.classList.toggle(he.hidden, e);
  }
  /**
   * Resets popover item to its original state
   */
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  /**
   * Method called once item becomes focused during keyboard navigation
   */
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   * @param renderParams - popover item render params
   */
  make(e, o) {
    var i, s;
    const n = (o == null ? void 0 : o.wrapperTag) || "div", r = b.make(n, he.container, {
      type: n === "button" ? "button" : void 0
    });
    return e.name && (r.dataset.itemName = e.name), this.nodes.icon = b.make("div", [he.icon, he.iconTool], {
      innerHTML: e.icon || Zd
    }), r.appendChild(this.nodes.icon), e.title !== void 0 && r.appendChild(b.make("div", he.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && r.appendChild(b.make("div", he.secondaryTitle, {
      textContent: e.secondaryLabel
    })), this.hasChildren && r.appendChild(b.make("div", [he.icon, he.iconChevronRight], {
      innerHTML: Gd
    })), this.isActive && r.classList.add(he.active), e.isDisabled && r.classList.add(he.disabled), e.hint !== void 0 && ((i = o == null ? void 0 : o.hint) == null ? void 0 : i.enabled) !== !1 && this.addHint(r, {
      ...e.hint,
      position: ((s = o == null ? void 0 : o.hint) == null ? void 0 : s.position) || "right"
    }), r;
  }
  /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */
  enableConfirmationMode(e) {
    if (this.nodes.root === null)
      return;
    const o = {
      ...this.params,
      ...e,
      confirmation: "confirmation" in e ? e.confirmation : void 0
    }, i = this.make(o);
    this.nodes.root.innerHTML = i.innerHTML, this.nodes.root.classList.add(he.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    if (this.nodes.root === null)
      return;
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(he.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    var e, o, i;
    (e = this.nodes.root) == null || e.classList.add(he.noHover), (o = this.nodes.root) == null || o.classList.add(he.noFocus), (i = this.nodes.root) == null || i.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: !0 });
  }
  /**
   * Disables special focus and hover behavior
   */
  disableSpecialHoverAndFocusBehavior() {
    var e;
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e = this.nodes.root) == null || e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */
  activateOrEnableConfirmationMode(e) {
    var o;
    if (!("confirmation" in e) || e.confirmation === void 0)
      try {
        (o = e.onActivate) == null || o.call(e, e), this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else
      this.enableConfirmationMode(e.confirmation);
  }
  /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */
  animateError() {
    var e, o, i;
    (e = this.nodes.icon) != null && e.classList.contains(he.wobbleAnimation) || ((o = this.nodes.icon) == null || o.classList.add(he.wobbleAnimation), (i = this.nodes.icon) == null || i.addEventListener("animationend", this.onErrorAnimationEnd));
  }
}
const Xi = so("ce-popover-item-separator"), Ji = {
  container: Xi(),
  line: Xi("line"),
  hidden: Xi(null, "hidden")
};
class mr extends Ft {
  /**
   * Constructs the instance
   */
  constructor() {
    super(), this.nodes = {
      root: b.make("div", Ji.container),
      line: b.make("div", Ji.line)
    }, this.nodes.root.appendChild(this.nodes.line);
  }
  /**
   * Returns popover separator root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var o;
    (o = this.nodes.root) == null || o.classList.toggle(Ji.hidden, e);
  }
}
var Ke = /* @__PURE__ */ ((t) => (t.Closed = "closed", t.ClosedOnActivate = "closed-on-activate", t))(Ke || {});
const Te = so("ce-popover"), _e = {
  popover: Te(),
  popoverContainer: Te("container"),
  popoverOpenTop: Te(null, "open-top"),
  popoverOpenLeft: Te(null, "open-left"),
  popoverOpened: Te(null, "opened"),
  search: Te("search"),
  nothingFoundMessage: Te("nothing-found-message"),
  nothingFoundMessageDisplayed: Te("nothing-found-message", "displayed"),
  items: Te("items"),
  overlay: Te("overlay"),
  overlayHidden: Te("overlay", "hidden"),
  popoverNested: Te(null, "nested"),
  getPopoverNestedClass: (t) => Te(null, `nested-level-${t.toString()}`),
  popoverInline: Te(null, "inline"),
  popoverHeader: Te("header")
};
var Eo = /* @__PURE__ */ ((t) => (t.NestingLevel = "--nesting-level", t.PopoverHeight = "--popover-height", t.InlinePopoverWidth = "--inline-popover-width", t.TriggerItemLeft = "--trigger-item-left", t.TriggerItemTop = "--trigger-item-top", t))(Eo || {});
const fn = so("ce-popover-item-html"), yn = {
  root: fn(),
  hidden: fn(null, "hidden")
};
class Xo extends Ft {
  /**
   * Constructs the instance
   *
   * @param params – instance parameters
   * @param renderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, o) {
    var i, s;
    super(e), this.nodes = {
      root: b.make("div", yn.root)
    }, this.nodes.root.appendChild(e.element), e.name && (this.nodes.root.dataset.itemName = e.name), e.hint !== void 0 && ((i = o == null ? void 0 : o.hint) == null ? void 0 : i.enabled) !== !1 && this.addHint(this.nodes.root, {
      ...e.hint,
      position: ((s = o == null ? void 0 : o.hint) == null ? void 0 : s.position) || "right"
    });
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var o;
    (o = this.nodes.root) == null || o.classList.toggle(yn.hidden, e);
  }
  /**
   * Returns list of buttons and inputs inside custom content
   */
  getControls() {
    const e = this.nodes.root.querySelectorAll(
      `button, ${b.allInputsSelector}`
    );
    return Array.from(e);
  }
}
class vr extends Qo {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   * @param itemsRenderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, o = {}) {
    super(), this.params = e, this.itemsRenderParams = o, this.listeners = new ei(), this.messages = {
      nothingFound: "Nothing found",
      search: "Search"
    }, this.items = this.buildItems(e.items), e.messages && (this.messages = {
      ...this.messages,
      ...e.messages
    }), this.nodes = {}, this.nodes.popoverContainer = b.make("div", [_e.popoverContainer]), this.nodes.nothingFoundMessage = b.make("div", [_e.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = b.make("div", [_e.items]), this.items.forEach((i) => {
      const s = i.getElement();
      s !== null && this.nodes.items.appendChild(s);
    }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", (i) => this.handleClick(i)), this.nodes.popover = b.make("div", [
      _e.popover,
      this.params.class
    ]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
  }
  /**
   * List of default popover items that are searchable and may have confirmation state
   */
  get itemsDefault() {
    return this.items.filter((e) => e instanceof po);
  }
  /**
   * Returns HTML element corresponding to the popover
   */
  getElement() {
    return this.nodes.popover;
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.popover.classList.add(_e.popoverOpened), this.search !== void 0 && this.search.focus();
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(_e.popoverOpened), this.nodes.popover.classList.remove(_e.popoverOpenTop), this.itemsDefault.forEach((e) => e.reset()), this.search !== void 0 && this.search.clear(), this.emit(Ke.Closed);
  }
  /**
   * Clears memory
   */
  destroy() {
    var e;
    this.items.forEach((o) => o.destroy()), this.nodes.popover.remove(), this.listeners.removeAll(), (e = this.search) == null || e.destroy();
  }
  /**
   * Looks for the item by name and imitates click on it
   *
   * @param name - name of the item to activate
   */
  activateItemByName(e) {
    const o = this.items.find((i) => i.name === e);
    this.handleItemClick(o);
  }
  /**
   * Factory method for creating popover items
   *
   * @param items - list of items params
   */
  buildItems(e) {
    return e.map((o) => {
      switch (o.type) {
        case de.Separator:
          return new mr();
        case de.Html:
          return new Xo(o, this.itemsRenderParams[de.Html]);
        default:
          return new po(o, this.itemsRenderParams[de.Default]);
      }
    });
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(e) {
    return this.items.filter((o) => o instanceof po || o instanceof Xo).find((o) => {
      const i = o.getElement();
      return i === null ? !1 : e.composedPath().includes(i);
    });
  }
  /**
   * Handles popover item click
   *
   * @param item - item to handle click of
   */
  handleItemClick(e) {
    if (!("isDisabled" in e && e.isDisabled)) {
      if (e.hasChildren) {
        this.showNestedItems(e), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick();
        return;
      }
      this.itemsDefault.filter((o) => o !== e).forEach((o) => o.reset()), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && (this.hide(), this.emit(Ke.ClosedOnActivate));
    }
  }
  /**
   * Handles clicks inside popover
   *
   * @param event - item to handle click of
   */
  handleClick(e) {
    const o = this.getTargetItem(e);
    o !== void 0 && this.handleItemClick(o);
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(e) {
    if (e instanceof po && (e.toggle === !0 && e.toggleActive(), typeof e.toggle == "string")) {
      const o = this.itemsDefault.filter((i) => i.toggle === e.toggle);
      if (o.length === 1) {
        e.toggleActive();
        return;
      }
      o.forEach((i) => {
        i.toggleActive(i === e);
      });
    }
  }
}
var Ei = /* @__PURE__ */ ((t) => (t.Search = "search", t))(Ei || {});
const Zi = so("cdx-search-field"), Qi = {
  wrapper: Zi(),
  icon: Zi("icon"),
  input: Zi("input")
};
class cu extends Qo {
  /**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.placeholder - input placeholder
   */
  constructor({ items: e, placeholder: o }) {
    super(), this.listeners = new ei(), this.items = e, this.wrapper = b.make("div", Qi.wrapper);
    const i = b.make("div", Qi.icon, {
      innerHTML: iu
    });
    this.input = b.make("input", Qi.input, {
      placeholder: o,
      /**
       * Used to prevent focusing on the input by Tab key
       * (Popover in the Toolbar lays below the blocks,
       * so Tab in the last block will focus this hidden input if this property is not set)
       */
      tabIndex: -1
    }), this.wrapper.appendChild(i), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
      this.searchQuery = this.input.value, this.emit(Ei.Search, {
        query: this.searchQuery,
        items: this.foundItems
      });
    });
  }
  /**
   * Returns search field element
   */
  getElement() {
    return this.wrapper;
  }
  /**
   * Sets focus to the input
   */
  focus() {
    this.input.focus();
  }
  /**
   * Clears search query and results
   */
  clear() {
    this.input.value = "", this.searchQuery = "", this.emit(Ei.Search, {
      query: "",
      items: this.foundItems
    });
  }
  /**
   * Clears memory
   */
  destroy() {
    this.listeners.removeAll();
  }
  /**
   * Returns list of found items for the current search query
   */
  get foundItems() {
    return this.items.filter((e) => this.checkItem(e));
  }
  /**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */
  checkItem(e) {
    var o, i;
    const s = ((o = e.title) == null ? void 0 : o.toLowerCase()) || "", n = (i = this.searchQuery) == null ? void 0 : i.toLowerCase();
    return n !== void 0 ? s.includes(n) : !1;
  }
}
var lu = Object.defineProperty, du = Object.getOwnPropertyDescriptor, uu = (t, e, o, i) => {
  for (var s = du(e, o), n = t.length - 1, r; n >= 0; n--)
    (r = t[n]) && (s = r(e, o, s) || s);
  return s && lu(e, o, s), s;
};
const _r = class fr extends vr {
  /**
   * Construct the instance
   *
   * @param params - popover params
   * @param itemsRenderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, o) {
    super(e, o), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
      var i;
      super.hide(), this.destroyNestedPopoverIfExists(), (i = this.flipper) == null || i.deactivate(), this.previouslyHoveredItem = null;
    }, this.onFlip = () => {
      const i = this.itemsDefault.find((s) => s.isFocused);
      i == null || i.onFocus();
    }, this.onSearch = (i) => {
      var s;
      const n = i.query === "", r = i.items.length === 0;
      this.items.forEach((c) => {
        let l = !1;
        c instanceof po ? l = !i.items.includes(c) : (c instanceof mr || c instanceof Xo) && (l = r || !n), c.toggleHidden(l);
      }), this.toggleNothingFoundMessage(r);
      const a = i.query === "" ? this.flippableElements : i.items.map((c) => c.getElement());
      (s = this.flipper) != null && s.isActivated && (this.flipper.deactivate(), this.flipper.activate(a));
    }, e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(_e.popoverNested), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", (i) => this.handleHover(i)), e.searchable && this.addSearch(), e.flippable !== !1 && (this.flipper = new yo({
      items: this.flippableElements,
      focusedItemClass: he.focused,
      allowedKeys: [
        Y.TAB,
        Y.UP,
        Y.DOWN,
        Y.ENTER
      ]
    }), this.flipper.onFlip(this.onFlip));
  }
  /**
   * Returns true if some item inside popover is focused
   */
  hasFocus() {
    return this.flipper === void 0 ? !1 : this.flipper.hasFocus();
  }
  /**
   * Scroll position inside items container of the popover
   */
  get scrollTop() {
    return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
  }
  /**
   * Returns visible element offset top
   */
  get offsetTop() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
  }
  /**
   * Open popover
   */
  show() {
    var e;
    this.nodes.popover.style.setProperty(Eo.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(_e.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(_e.popoverOpenLeft), super.show(), (e = this.flipper) == null || e.activate(this.flippableElements);
  }
  /**
   * Clears memory
   */
  destroy() {
    this.hide(), super.destroy();
  }
  /**
   * Handles displaying nested items for the item.
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e, this.showNestedPopoverForItem(e));
  }
  /**
   * Handles hover events inside popover items container
   *
   * @param event - hover event data
   */
  handleHover(e) {
    const o = this.getTargetItem(e);
    o !== void 0 && this.previouslyHoveredItem !== o && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = o, o.hasChildren && this.showNestedPopoverForItem(o));
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used for correct positioning of the nested popover
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, o) {
    const i = o.getElement(), s = (i ? i.offsetTop : 0) - this.scrollTop, n = this.offsetTop + s;
    e.style.setProperty(Eo.TriggerItemTop, n + "px");
  }
  /**
   * Destroys existing nested popover
   */
  destroyNestedPopoverIfExists() {
    var e, o;
    this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(Ke.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e = this.flipper) == null || e.activate(this.flippableElements), (o = this.nestedPopoverTriggerItem) == null || o.onChildrenClose());
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    var o;
    this.nestedPopover = new fr({
      searchable: e.isChildrenSearchable,
      items: e.children,
      nestingLevel: this.nestingLevel + 1,
      flippable: e.isChildrenFlippable,
      messages: this.messages
    }), e.onChildrenOpen(), this.nestedPopover.on(Ke.ClosedOnActivate, this.hide);
    const i = this.nestedPopover.getElement();
    return this.nodes.popover.appendChild(i), this.setTriggerItemPosition(i, e), i.style.setProperty(Eo.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (o = this.flipper) == null || o.deactivate(), this.nestedPopover;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return !1;
    const e = this.nodes.popoverContainer.getBoundingClientRect(), o = this.scopeElement.getBoundingClientRect(), i = this.size.height, s = e.top + i, n = e.top - i, r = Math.min(window.innerHeight, o.bottom);
    return n < o.top || s <= r;
  }
  /**
   * Checks if popover should be opened left.
   * It should happen when there is enough space in the right or not enough space in the left
   */
  get shouldOpenRight() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return !1;
    const e = this.nodes.popover.getBoundingClientRect(), o = this.scopeElement.getBoundingClientRect(), i = this.size.width, s = e.right + i, n = e.left - i, r = Math.min(window.innerWidth, o.right);
    return n < o.left || s <= r;
  }
  get size() {
    var e;
    const o = {
      height: 0,
      width: 0
    };
    if (this.nodes.popover === null)
      return o;
    const i = this.nodes.popover.cloneNode(!0);
    i.style.visibility = "hidden", i.style.position = "absolute", i.style.top = "-1000px", i.classList.add(_e.popoverOpened), (e = i.querySelector("." + _e.popoverNested)) == null || e.remove(), document.body.appendChild(i);
    const s = i.querySelector("." + _e.popoverContainer);
    return o.height = s.offsetHeight, o.width = s.offsetWidth, i.remove(), o;
  }
  /**
   * Returns list of elements available for keyboard navigation.
   */
  get flippableElements() {
    return this.items.map((e) => {
      if (e instanceof po)
        return e.getElement();
      if (e instanceof Xo)
        return e.getControls();
    }).flat().filter((e) => e != null);
  }
  /**
   * Adds search to the popover
   */
  addSearch() {
    this.search = new cu({
      items: this.itemsDefault,
      placeholder: this.messages.search
    }), this.search.on(Ei.Search, this.onSearch);
    const e = this.search.getElement();
    e.classList.add(_e.search), this.nodes.popoverContainer.insertBefore(e, this.nodes.popoverContainer.firstChild);
  }
  /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */
  toggleNothingFoundMessage(e) {
    this.nodes.nothingFoundMessage.classList.toggle(_e.nothingFoundMessageDisplayed, e);
  }
};
uu([
  Mo
], _r.prototype, "size");
let Dt = _r;
class gu extends Dt {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    const o = !Fo();
    super(
      {
        ...e,
        class: _e.popoverInline
      },
      {
        [de.Default]: {
          /**
           * We use button instead of div here to fix bug associated with focus loss (which leads to selection change) on click in safari
           *
           * @todo figure out better way to solve the issue
           */
          wrapperTag: "button",
          hint: {
            position: "top",
            alignment: "center",
            enabled: o
          }
        },
        [de.Html]: {
          hint: {
            position: "top",
            alignment: "center",
            enabled: o
          }
        }
      }
    ), this.items.forEach((i) => {
      !(i instanceof po) && !(i instanceof Xo) || i.hasChildren && i.isChildrenOpen && this.showNestedItems(i);
    });
  }
  /**
   * Returns visible element offset top
   */
  get offsetLeft() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetLeft;
  }
  /**
   * Open popover
   */
  show() {
    this.nestingLevel === 0 && this.nodes.popover.style.setProperty(
      Eo.InlinePopoverWidth,
      this.size.width + "px"
    ), super.show();
  }
  /**
   * Disable hover event handling.
   * Overrides parent's class behavior
   */
  handleHover() {
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used to position nested popover right below clicked item
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, o) {
    const i = o.getElement(), s = i ? i.offsetLeft : 0, n = this.offsetLeft + s;
    e.style.setProperty(
      Eo.TriggerItemLeft,
      n + "px"
    );
  }
  /**
   * Handles displaying nested items for the item.
   * Overriding in order to add toggling behaviour
   *
   * @param item – item to toggle nested popover for
   */
  showNestedItems(e) {
    if (this.nestedPopoverTriggerItem === e) {
      this.destroyNestedPopoverIfExists(), this.nestedPopoverTriggerItem = null;
      return;
    }
    super.showNestedItems(e);
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    const o = super.showNestedPopoverForItem(e);
    return o.getElement().classList.add(_e.getPopoverNestedClass(o.nestingLevel)), o;
  }
  /**
   * Overrides default item click handling.
   * Helps to close nested popover once other item is clicked.
   *
   * @param item - clicked item
   */
  handleItemClick(e) {
    var o;
    e !== this.nestedPopoverTriggerItem && ((o = this.nestedPopoverTriggerItem) == null || o.handleClick(), super.destroyNestedPopoverIfExists()), super.handleItemClick(e);
  }
}
const yr = class Wo {
  constructor() {
    this.scrollPosition = null;
  }
  /**
   * Locks body element scroll
   */
  lock() {
    mt ? this.lockHard() : document.body.classList.add(Wo.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    mt ? this.unlockHard() : document.body.classList.remove(Wo.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add(Wo.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove(Wo.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
yr.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
let pu = yr;
const et = so("ce-popover-header"), ot = {
  root: et(),
  text: et("text"),
  backButton: et("back-button")
};
class hu {
  /**
   * Constructs the instance
   *
   * @param params - popover header params
   */
  constructor({ text: e, onBackButtonClick: o }) {
    this.listeners = new ei(), this.text = e, this.onBackButtonClick = o, this.nodes = {
      root: b.make("div", [ot.root]),
      backButton: b.make("button", [ot.backButton]),
      text: b.make("div", [ot.text])
    }, this.nodes.backButton.innerHTML = Yd, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
  }
  /**
   * Returns popover header root html element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    this.nodes.root.remove(), this.listeners.destroy();
  }
}
class mu {
  constructor() {
    this.history = [];
  }
  /**
   * Push new popover state
   *
   * @param state - new state
   */
  push(e) {
    this.history.push(e);
  }
  /**
   * Pop last popover state
   */
  pop() {
    return this.history.pop();
  }
  /**
   * Title retrieved from the current state
   */
  get currentTitle() {
    return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
  }
  /**
   * Items list retrieved from the current state
   */
  get currentItems() {
    return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
  }
  /**
   * Returns history to initial popover state
   */
  reset() {
    for (; this.history.length > 1; )
      this.pop();
  }
}
class br extends vr {
  /**
   * Construct the instance
   *
   * @param params - popover params
   */
  constructor(e) {
    super(e, {
      [de.Default]: {
        hint: {
          enabled: !1
        }
      },
      [de.Html]: {
        hint: {
          enabled: !1
        }
      }
    }), this.scrollLocker = new pu(), this.history = new mu(), this.isHidden = !0, this.nodes.overlay = b.make("div", [_e.overlay, _e.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.history.push({ items: e.items });
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.overlay.classList.remove(_e.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = !1;
  }
  /**
   * Closes popover
   */
  hide() {
    this.isHidden || (super.hide(), this.nodes.overlay.classList.add(_e.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = !0);
  }
  /**
   * Clears memory
   */
  destroy() {
    super.destroy(), this.scrollLocker.unlock();
  }
  /**
   * Handles displaying nested items for the item
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.updateItemsAndHeader(e.children, e.title), this.history.push({
      title: e.title,
      items: e.children
    });
  }
  /**
   * Removes rendered popover items and header and displays new ones
   *
   * @param items - new popover items
   * @param title - new popover header text
   */
  updateItemsAndHeader(e, o) {
    if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), o !== void 0) {
      this.header = new hu({
        text: o,
        onBackButtonClick: () => {
          this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
        }
      });
      const i = this.header.getElement();
      i !== null && this.nodes.popoverContainer.insertBefore(i, this.nodes.popoverContainer.firstChild);
    }
    this.items.forEach((i) => {
      var s;
      return (s = i.getElement()) == null ? void 0 : s.remove();
    }), this.items = this.buildItems(e), this.items.forEach((i) => {
      var s;
      const n = i.getElement();
      n !== null && ((s = this.nodes.items) == null || s.appendChild(n));
    });
  }
}
class vu extends Q {
  constructor() {
    super(...arguments), this.opened = !1, this.selection = new z(), this.popover = null, this.close = () => {
      this.opened && (this.opened = !1, z.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(Ke.Closed, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
    }, this.onPopoverClose = () => {
      this.close();
    };
  }
  /**
   * Module Events
   */
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  /**
   * Block Settings CSS
   */
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */
  get flipper() {
    var e;
    if (this.popover !== null)
      return "flipper" in this.popover ? (e = this.popover) == null ? void 0 : e.flipper : void 0;
  }
  /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */
  make() {
    this.nodes.wrapper = b.make("div", [this.CSS.settings]), this.eventsDispatcher.on(Go, this.close);
  }
  /**
   * Destroys module
   */
  destroy() {
    this.removeAllNodes(), this.listeners.destroy(), this.eventsDispatcher.off(Go, this.close);
  }
  /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */
  async open(e = this.Editor.BlockManager.currentBlock) {
    var o;
    this.opened = !0, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
    const { toolTunes: i, commonTunes: s } = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened);
    const n = Fo() ? br : Dt;
    this.popover = new n({
      searchable: !0,
      items: await this.getTunesItems(e, s, i),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: Pe.ui(Ne.ui.popover, "Nothing found"),
        search: Pe.ui(Ne.ui.popover, "Filter")
      }
    }), this.popover.on(Ke.Closed, this.onPopoverClose), (o = this.nodes.wrapper) == null || o.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Returns list of items to be displayed in block tunes menu.
   * Merges tool specific tunes, conversion menu and common tunes in one list in predefined order
   *
   * @param currentBlock –  block we are about to open block tunes for
   * @param commonTunes – common tunes
   * @param toolTunes - tool specific tunes
   */
  async getTunesItems(e, o, i) {
    const s = [];
    i !== void 0 && i.length > 0 && (s.push(...i), s.push({
      type: de.Separator
    }));
    const n = Array.from(this.Editor.Tools.blockTools.values()), r = (await cr(e, n)).reduce((a, c) => (c.toolbox.forEach((l) => {
      a.push({
        icon: l.icon,
        title: Pe.t(Ne.toolNames, l.title),
        name: c.name,
        closeOnActivate: !0,
        onActivate: async () => {
          const { BlockManager: d, Caret: u, Toolbar: g } = this.Editor, v = await d.convert(e, c.name, l.data);
          g.close(), u.setToBlock(v, u.positions.END);
        }
      });
    }), a), []);
    return r.length > 0 && (s.push({
      icon: hr,
      name: "convert-to",
      title: Pe.ui(Ne.ui.popover, "Convert to"),
      children: {
        searchable: !0,
        items: r
      }
    }), s.push({
      type: de.Separator
    })), s.push(...o), s.map((a) => this.resolveTuneAliases(a));
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    if (e.type === de.Separator || e.type === de.Html)
      return e;
    const o = Wd(e, { label: "title" });
    return e.confirmation && (o.confirmation = this.resolveTuneAliases(e.confirmation)), o;
  }
}
var kr = { exports: {} };
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
(function(t, e) {
  (function(o, i) {
    t.exports = i();
  })(window, function() {
    return function(o) {
      var i = {};
      function s(n) {
        if (i[n])
          return i[n].exports;
        var r = i[n] = { i: n, l: !1, exports: {} };
        return o[n].call(r.exports, r, r.exports, s), r.l = !0, r.exports;
      }
      return s.m = o, s.c = i, s.d = function(n, r, a) {
        s.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: a });
      }, s.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, s.t = function(n, r) {
        if (1 & r && (n = s(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
          return n;
        var a = /* @__PURE__ */ Object.create(null);
        if (s.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: n }), 2 & r && typeof n != "string")
          for (var c in n)
            s.d(a, c, (function(l) {
              return n[l];
            }).bind(null, c));
        return a;
      }, s.n = function(n) {
        var r = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return s.d(r, "a", r), r;
      }, s.o = function(n, r) {
        return Object.prototype.hasOwnProperty.call(n, r);
      }, s.p = "", s(s.s = 0);
    }([function(o, i, s) {
      function n(c, l) {
        for (var d = 0; d < l.length; d++) {
          var u = l[d];
          u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(c, u.key, u);
        }
      }
      function r(c, l, d) {
        return l && n(c.prototype, l), d && n(c, d), c;
      }
      s.r(i);
      var a = function() {
        function c(l) {
          var d = this;
          (function(u, g) {
            if (!(u instanceof g))
              throw new TypeError("Cannot call a class as a function");
          })(this, c), this.commands = {}, this.keys = {}, this.name = l.name, this.parseShortcutName(l.name), this.element = l.on, this.callback = l.callback, this.executeShortcut = function(u) {
            d.execute(u);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }
        return r(c, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), r(c, [{ key: "parseShortcutName", value: function(l) {
          l = l.split("+");
          for (var d = 0; d < l.length; d++) {
            l[d] = l[d].toUpperCase();
            var u = !1;
            for (var g in c.supportedCommands)
              if (c.supportedCommands[g].includes(l[d])) {
                u = this.commands[g] = !0;
                break;
              }
            u || (this.keys[l[d]] = !0);
          }
          for (var v in c.supportedCommands)
            this.commands[v] || (this.commands[v] = !1);
        } }, { key: "execute", value: function(l) {
          var d, u = { CMD: l.ctrlKey || l.metaKey, SHIFT: l.shiftKey, ALT: l.altKey }, g = !0;
          for (d in this.commands)
            this.commands[d] !== u[d] && (g = !1);
          var v, h = !0;
          for (v in this.keys)
            h = h && l.keyCode === c.keyCodes[v];
          g && h && this.callback(l);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), c;
      }();
      i.default = a;
    }]).default;
  });
})(kr);
var _u = kr.exports;
const fu = /* @__PURE__ */ Li(_u);
class yu {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */ new Map();
  }
  /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
      );
    const o = new fu({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), i = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...i, o]);
  }
  /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */
  remove(e, o) {
    const i = this.findShortcut(e, o);
    if (!i)
      return;
    i.remove();
    const s = this.registeredShortcuts.get(e);
    this.registeredShortcuts.set(e, s.filter((n) => n !== i));
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, o) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: i }) => i === o);
  }
}
const Ao = new yu();
var bu = Object.defineProperty, ku = Object.getOwnPropertyDescriptor, wr = (t, e, o, i) => {
  for (var s = ku(e, o), n = t.length - 1, r; n >= 0; n--)
    (r = t[n]) && (s = r(e, o, s) || s);
  return s && bu(e, o, s), s;
}, gi = /* @__PURE__ */ ((t) => (t.Opened = "toolbox-opened", t.Closed = "toolbox-closed", t.BlockAdded = "toolbox-block-added", t))(gi || {});
const Rt = class jr extends Qo {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: e, tools: o, i18nLabels: i }) {
    super(), this.opened = !1, this.listeners = new ei(), this.popover = null, this.handleMobileLayoutToggle = () => {
      this.destroyPopover(), this.initPopover();
    }, this.onPopoverClose = () => {
      this.opened = !1, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = e, this.tools = o, this.i18nLabels = i, this.enableShortcuts(), this.nodes = {
      toolbox: b.make("div", jr.CSS.toolbox)
    }, this.initPopover(), this.api.events.on(Go, this.handleMobileLayoutToggle);
  }
  /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  /**
   * CSS styles
   */
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    if (this.popover !== null)
      return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
  }
  /**
   * Destroy Module
   */
  destroy() {
    var e;
    super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e = this.popover) == null || e.off(Ke.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(Go, this.handleMobileLayoutToggle);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(e, o) {
    this.insertNewBlock(e, o);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var e;
    this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = !0, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var e;
    (e = this.popover) == null || e.hide(), this.opened = !1, this.emit(
      "toolbox-closed"
      /* Closed */
    );
  }
  /**
   * Close Toolbox
   */
  toggle() {
    this.opened ? this.close() : this.open();
  }
  /**
   * Creates toolbox popover and appends it inside wrapper element
   */
  initPopover() {
    var e;
    const o = Fo() ? br : Dt;
    this.popover = new o({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: !0,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(Ke.Closed, this.onPopoverClose), (e = this.nodes.toolbox) == null || e.append(this.popover.getElement());
  }
  /**
   * Destroys popover instance and removes it from DOM
   */
  destroyPopover() {
    this.popover !== null && (this.popover.hide(), this.popover.off(Ke.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
  }
  get toolsToBeDisplayed() {
    const e = [];
    return this.tools.forEach((o) => {
      o.toolbox && e.push(o);
    }), e;
  }
  get toolboxItemsToBeDisplayed() {
    const e = (o, i) => ({
      icon: o.icon,
      title: Pe.t(Ne.toolNames, o.title || wi(i.name)),
      name: i.name,
      onActivate: () => {
        this.toolButtonActivated(i.name, o.data);
      },
      secondaryLabel: i.shortcut ? Ot(i.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((o, i) => (Array.isArray(i.toolbox) ? i.toolbox.forEach((s) => {
      o.push(e(s, i));
    }) : i.toolbox !== void 0 && o.push(e(i.toolbox, i)), o), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const o = e.shortcut;
      o && this.enableShortcutForTool(e.name, o);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(e, o) {
    Ao.add({
      name: o,
      on: this.api.ui.nodes.redactor,
      handler: async (i) => {
        i.preventDefault();
        const s = this.api.blocks.getCurrentBlockIndex(), n = this.api.blocks.getBlockByIndex(s);
        if (n)
          try {
            const r = await this.api.blocks.convert(n.id, e);
            this.api.caret.setToBlock(r, "end");
            return;
          } catch {
          }
        this.insertNewBlock(e);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const o = e.shortcut;
      o && Ao.remove(this.api.ui.nodes.redactor, o);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(e, o) {
    const i = this.api.blocks.getCurrentBlockIndex(), s = this.api.blocks.getBlockByIndex(i);
    if (!s)
      return;
    const n = s.isEmpty ? i : i + 1;
    let r;
    if (o) {
      const c = await this.api.blocks.composeBlockData(e);
      r = Object.assign(c, o);
    }
    const a = this.api.blocks.insert(
      e,
      r,
      void 0,
      n,
      void 0,
      s.isEmpty
    );
    a.call(Je.APPEND_CALLBACK), this.api.caret.setToBlock(n), this.emit("toolbox-block-added", {
      block: a
    }), this.api.toolbar.close();
  }
};
wr([
  Mo
], Rt.prototype, "toolsToBeDisplayed");
wr([
  Mo
], Rt.prototype, "toolboxItemsToBeDisplayed");
let wu = Rt;
const xr = "block hovered";
async function ju(t, e) {
  const o = navigator.keyboard;
  if (!o)
    return e;
  try {
    return (await o.getLayoutMap()).get(t) || e;
  } catch (i) {
    return console.error(i), e;
  }
}
class xu extends Q {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: o }) {
    super({
      config: e,
      eventsDispatcher: o
    }), this.toolboxInstance = null;
  }
  /**
   * CSS styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  /**
   * Public interface for accessing the Toolbox
   */
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var o;
        (o = this.toolboxInstance) == null || o.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          ne("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          ne("toolbox.toggle() called before initialization is finished", "warn");
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var o;
        return (o = this.toolboxInstance) == null ? void 0 : o.hasFocus();
      }
    };
  }
  /**
   * Block actions appearance manipulations
   */
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  /**
   * Methods for working with Block Tunes toggler
   */
  get blockTunesToggler() {
    return {
      hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
      show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
    };
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
      this.drawUI(), this.enableModuleBindings();
    }, { timeout: 2e3 });
  }
  /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance === null) {
      ne("Can't open Toolbar since Editor initialization is not finished yet", "warn");
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const o = e.holder, { isMobile: i } = this.Editor.UI;
    let s;
    const n = 20, r = e.firstInput, a = o.getBoundingClientRect(), c = r !== void 0 ? r.getBoundingClientRect() : null, l = c !== null ? c.top - a.top : null, d = l !== null ? l > n : void 0;
    if (i)
      s = o.offsetTop + o.offsetHeight;
    else if (r === void 0 || d) {
      const u = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
      s = o.offsetTop + u;
    } else {
      const u = cd(r), g = parseInt(window.getComputedStyle(this.nodes.plusButton).height, 10);
      s = o.offsetTop + u - g + 8 + l;
    }
    this.nodes.wrapper.style.top = `${Math.floor(s)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    var e, o;
    this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (o = this.toolboxInstance) == null || o.close(), this.Editor.BlockSettings.close(), this.reset());
  }
  /**
   * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
   */
  reset() {
    this.nodes.wrapper.style.top = "unset";
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = !0) {
    this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
  }
  /**
   * Draws Toolbar elements
   */
  async make() {
    this.nodes.wrapper = b.make("div", this.CSS.toolbar), ["content", "actions"].forEach((n) => {
      this.nodes[n] = b.make("div", this.CSS[n]);
    }), b.append(this.nodes.wrapper, this.nodes.content), b.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = b.make("div", this.CSS.plusButton, {
      innerHTML: ou
    }), b.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
      xi(!0), this.plusButtonClicked();
    }, !1);
    const e = b.make("div");
    e.appendChild(document.createTextNode(Pe.ui(Ne.ui.toolbar.toolbox, "Add"))), e.appendChild(b.make("div", this.CSS.plusButtonShortcut, {
      textContent: "/"
    })), Si(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = b.make("span", this.CSS.settingsToggler, {
      innerHTML: eu
    }), b.append(this.nodes.actions, this.nodes.settingsToggler);
    const o = b.make("div"), i = b.text(Pe.ui(Ne.ui.blockTunes.toggler, "Click to tune")), s = await ju("Slash", "/");
    o.appendChild(i), o.appendChild(b.make("div", this.CSS.plusButtonShortcut, {
      textContent: Ot(`CMD + ${s}`)
    })), Si(this.nodes.settingsToggler, o, {
      hidingDelay: 400
    }), b.append(this.nodes.actions, this.makeToolbox()), b.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), b.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new wu({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: Pe.ui(Ne.ui.popover, "Filter"),
        nothingFound: Pe.ui(Ne.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(gi.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(gi.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(gi.BlockAdded, ({ block: e }) => {
      const { BlockManager: o, Caret: i } = this.Editor, s = o.getBlockById(e.id);
      s.inputs.length === 0 && (s === o.lastBlock ? (o.insertAtEnd(), i.setToBlock(o.lastBlock)) : i.setToBlock(o.nextBlock));
    }), this.toolboxInstance.getElement();
  }
  /**
   * Handler for Plus Button
   */
  plusButtonClicked() {
    var e;
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
  }
  /**
   * Enable bindings
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e) => {
      var o;
      e.stopPropagation(), this.settingsTogglerClicked(), (o = this.toolboxInstance) != null && o.opened && this.toolboxInstance.close(), xi(!0);
    }, !0), Fo() || this.eventsDispatcher.on(xr, (e) => {
      var o;
      this.Editor.BlockSettings.opened || (o = this.toolboxInstance) != null && o.opened || this.moveAndOpen(e.block);
    });
  }
  /**
   * Disable bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Clicks on the Block Settings toggler
   */
  settingsTogglerClicked() {
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
  }
  /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */
  destroy() {
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
  }
}
var vo = /* @__PURE__ */ ((t) => (t[t.Block = 0] = "Block", t[t.Inline = 1] = "Inline", t[t.Tune = 2] = "Tune", t))(vo || {}), pi = /* @__PURE__ */ ((t) => (t.Shortcut = "shortcut", t.Toolbox = "toolbox", t.EnabledInlineTools = "inlineToolbar", t.EnabledBlockTunes = "tunes", t.Config = "config", t))(pi || {}), Sr = /* @__PURE__ */ ((t) => (t.Shortcut = "shortcut", t.SanitizeConfig = "sanitize", t))(Sr || {}), So = /* @__PURE__ */ ((t) => (t.IsEnabledLineBreaks = "enableLineBreaks", t.Toolbox = "toolbox", t.ConversionConfig = "conversionConfig", t.IsReadOnlySupported = "isReadOnlySupported", t.PasteConfig = "pasteConfig", t))(So || {}), $t = /* @__PURE__ */ ((t) => (t.IsInline = "isInline", t.Title = "title", t))($t || {}), ft = /* @__PURE__ */ ((t) => (t.IsTune = "isTune", t))(ft || {});
class Ht {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: o,
    config: i,
    api: s,
    isDefault: n,
    isInternal: r = !1,
    defaultPlaceholder: a
  }) {
    this.api = s, this.name = e, this.constructable = o, this.config = i, this.isDefault = n, this.isInternal = r, this.defaultPlaceholder = a;
  }
  /**
   * Returns Tool user configuration
   */
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  /**
   * Calls Tool's reset method
   */
  reset() {
    if (ge(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (ge(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings
      });
  }
  /**
   * Returns shortcut for Tool (internal or specified by user)
   */
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  /**
   * Returns Tool's sanitizer configuration
   */
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  /**
   * Returns true if Tools is inline
   */
  isInline() {
    return this.type === vo.Inline;
  }
  /**
   * Returns true if Tools is block
   */
  isBlock() {
    return this.type === vo.Block;
  }
  /**
   * Returns true if Tools is tune
   */
  isTune() {
    return this.type === vo.Tune;
  }
}
class Su extends Q {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: o }) {
    super({
      config: e,
      eventsDispatcher: o
    }), this.CSS = {
      inlineToolbar: "ce-inline-toolbar"
    }, this.opened = !1, this.popover = null, this.toolbarVerticalMargin = Fo() ? 20 : 6, this.toolsInstances = /* @__PURE__ */ new Map();
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? this.destroy() : window.requestIdleCallback(() => {
      this.make();
    }, { timeout: 2e3 });
  }
  /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   */
  async tryToShow(e = !1) {
    e && this.close(), this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    var e, o;
    this.opened && (this.Editor.ReadOnly.isEnabled || (Array.from(this.toolsInstances.entries()).forEach(([i, s]) => {
      const n = this.getToolShortcut(i);
      n && Ao.remove(this.Editor.UI.nodes.redactor, n), ge(s.clear) && s.clear();
    }), this.toolsInstances = null, this.reset(), this.opened = !1, (e = this.popover) == null || e.hide(), (o = this.popover) == null || o.destroy(), this.popover = null));
  }
  /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */
  containsNode(e) {
    return this.nodes.wrapper === void 0 ? !1 : this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    var e;
    this.removeAllNodes(), (e = this.popover) == null || e.destroy(), this.popover = null;
  }
  /**
   * Making DOM
   */
  make() {
    this.nodes.wrapper = b.make("div", [
      this.CSS.inlineToolbar,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), b.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Shows Inline Toolbar
   */
  async open() {
    var e;
    if (this.opened)
      return;
    this.opened = !0, this.popover !== null && this.popover.destroy();
    const o = await this.getInlineTools();
    this.popover = new gu({
      items: o,
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: Pe.ui(Ne.ui.popover, "Nothing found"),
        search: Pe.ui(Ne.ui.popover, "Filter")
      }
    }), this.move(this.popover.size.width), (e = this.nodes.wrapper) == null || e.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Move Toolbar to the selected text
   *
   * @param popoverWidth - width of the toolbar popover
   */
  move(e) {
    const o = z.rect, i = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), s = {
      x: o.x - i.x,
      y: o.y + o.height - // + window.scrollY
      i.top + this.toolbarVerticalMargin
    };
    s.x + e + i.x > this.Editor.UI.contentRect.right && (s.x = this.Editor.UI.contentRect.right - e - i.x), this.nodes.wrapper.style.left = Math.floor(s.x) + "px", this.nodes.wrapper.style.top = Math.floor(s.y) + "px";
  }
  /**
   * Clear orientation classes and reset position
   */
  reset() {
    this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
  }
  /**
   * Need to show Inline Toolbar or not
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], o = z.get(), i = z.text;
    if (!o || !o.anchorNode || o.isCollapsed || i.length < 1)
      return !1;
    const s = b.isElement(o.anchorNode) ? o.anchorNode : o.anchorNode.parentElement;
    if (s === null || o && e.includes(s.tagName) || s.closest('[contenteditable="true"]') === null)
      return !1;
    const n = this.Editor.BlockManager.getBlock(o.anchorNode);
    return n ? n.tool.inlineTools.size !== 0 : !1;
  }
  /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Returns Inline Tools segregated by their appearance type: popover items and custom html elements.
   * Sets this.toolsInstances map
   */
  async getInlineTools() {
    const e = z.get(), o = this.Editor.BlockManager.getBlock(e.anchorNode), i = Array.from(o.tool.inlineTools.values()), s = [];
    this.toolsInstances === null && (this.toolsInstances = /* @__PURE__ */ new Map());
    for (let n = 0; n < i.length; n++) {
      const r = i[n], a = r.create(), c = await a.render();
      this.toolsInstances.set(r.name, a);
      const l = this.getToolShortcut(r.name);
      if (l)
        try {
          this.enableShortcuts(r.name, l);
        } catch {
        }
      const d = l !== void 0 ? Ot(l) : void 0, u = Pe.t(
        Ne.toolNames,
        r.title || wi(r.name)
      );
      [c].flat().forEach((g) => {
        var v, h;
        const f = {
          name: r.name,
          onActivate: () => {
            this.toolClicked(a);
          },
          hint: {
            title: u,
            description: d
          }
        };
        if (b.isElement(g)) {
          const I = {
            ...f,
            element: g,
            type: de.Html
          };
          if (ge(a.renderActions)) {
            const L = a.renderActions();
            I.children = {
              isOpen: (v = a.checkState) == null ? void 0 : v.call(a, z.get()),
              /** Disable keyboard navigation in actions, as it might conflict with enter press handling */
              isFlippable: !1,
              items: [
                {
                  type: de.Html,
                  element: L
                }
              ]
            };
          } else
            (h = a.checkState) == null || h.call(a, z.get());
          s.push(I);
        } else if (g.type === de.Html)
          s.push({
            ...f,
            ...g,
            type: de.Html
          });
        else if (g.type === de.Separator)
          s.push({
            type: de.Separator
          });
        else {
          const I = {
            ...f,
            ...g,
            type: de.Default
          };
          "children" in I && n !== 0 && s.push({
            type: de.Separator
          }), s.push(I), "children" in I && n < i.length - 1 && s.push({
            type: de.Separator
          });
        }
      });
    }
    return s;
  }
  /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */
  getToolShortcut(e) {
    const { Tools: o } = this.Editor, i = o.inlineTools.get(e), s = o.internal.inlineTools;
    return Array.from(s.keys()).includes(e) ? this.inlineTools[e][Sr.Shortcut] : i == null ? void 0 : i.shortcut;
  }
  /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param toolName - tool name
   * @param shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcuts(e, o) {
    Ao.add({
      name: o,
      handler: (i) => {
        var s;
        const { currentBlock: n } = this.Editor.BlockManager;
        n && n.tool.enabledInlineTools && (i.preventDefault(), (s = this.popover) == null || s.activateItemByName(e));
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Inline Tool button clicks
   *
   * @param tool - Tool's instance
   */
  toolClicked(e) {
    var o;
    const i = z.range;
    (o = e.surround) == null || o.call(e, i), this.checkToolsState();
  }
  /**
   * Check Tools` state by selection
   */
  checkToolsState() {
    var e;
    (e = this.toolsInstances) == null || e.forEach((o) => {
      var i;
      (i = o.checkState) == null || i.call(o, z.get());
    });
  }
  /**
   * Get inline tools tools
   * Tools that has isInline is true
   */
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([o, i]) => {
      e[o] = i.create();
    }), e;
  }
}
function Er() {
  const t = window.getSelection();
  if (t === null)
    return [null, 0];
  let e = t.focusNode, o = t.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[o] ? (e = e.childNodes[o], o = 0) : (e = e.childNodes[o - 1], o = e.textContent.length)), [e, o]);
}
function Cr(t, e, o, i) {
  const s = document.createRange();
  i === "left" ? (s.setStart(t, 0), s.setEnd(e, o)) : (s.setStart(e, o), s.setEnd(t, t.childNodes.length));
  const n = s.cloneContents(), r = document.createElement("div");
  r.appendChild(n);
  const a = r.textContent || "";
  return ad(a);
}
function hi(t) {
  const e = b.getDeepestNode(t);
  if (e === null || b.isEmpty(t))
    return !0;
  if (b.isNativeInput(e))
    return e.selectionEnd === 0;
  if (b.isEmpty(t))
    return !0;
  const [o, i] = Er();
  return o === null ? !1 : Cr(t, o, i, "left");
}
function mi(t) {
  const e = b.getDeepestNode(t, !0);
  if (e === null)
    return !0;
  if (b.isNativeInput(e))
    return e.selectionEnd === e.value.length;
  const [o, i] = Er();
  return o === null ? !1 : Cr(t, o, i, "right");
}
class Eu extends Q {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case Y.BACKSPACE:
        this.backspace(e);
        break;
      case Y.DELETE:
        this.delete(e);
        break;
      case Y.ENTER:
        this.enter(e);
        break;
      case Y.DOWN:
      case Y.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case Y.UP:
      case Y.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case Y.TAB:
        this.tabPressed(e);
        break;
    }
    e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && Jn(e.keyCode) && (this.Editor.Toolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
  }
  /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */
  dragOver(e) {
    const o = this.Editor.BlockManager.getBlockByChildNode(e.target);
    o.dropTarget = !0;
  }
  /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */
  dragLeave(e) {
    const o = this.Editor.BlockManager.getBlockByChildNode(e.target);
    o.dropTarget = !1;
  }
  /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandC(e) {
    const { BlockSelection: o } = this.Editor;
    o.anyBlockSelected && o.copySelectedBlocks(e);
  }
  /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandX(e) {
    const { BlockSelection: o, BlockManager: i, Caret: s } = this.Editor;
    o.anyBlockSelected && o.copySelectedBlocks(e).then(() => {
      const n = i.removeSelectedBlocks(), r = i.insertDefaultBlockAtIndex(n, !0);
      s.setToBlock(r, s.positions.START), o.clearSelection(e);
    });
  }
  /**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */
  tabPressed(e) {
    const { InlineToolbar: o, Caret: i } = this.Editor;
    o.opened || (e.shiftKey ? i.navigatePrevious(!0) : i.navigateNext(!0)) && e.preventDefault();
  }
  /**
   * '/' + 'command' keydown inside a Block
   */
  commandSlashPressed() {
    this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
  }
  /**
   * '/' keydown inside a Block
   *
   * @param event - keydown
   */
  slashPressed(e) {
    this.Editor.BlockManager.currentBlock.isEmpty && (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
  }
  /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */
  enter(e) {
    const { BlockManager: o, UI: i } = this.Editor, s = o.currentBlock;
    if (s === void 0 || s.tool.isLineBreaksEnabled || i.someToolbarOpened && i.someFlipperButtonFocused || e.shiftKey && !mt)
      return;
    let n = s;
    s.currentInput !== void 0 && hi(s.currentInput) && !s.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : s.currentInput && mi(s.currentInput) ? n = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : n = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(n), this.Editor.Toolbar.moveAndOpen(n), e.preventDefault();
  }
  /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    const { BlockManager: o, Caret: i } = this.Editor, { currentBlock: s, previousBlock: n } = o;
    if (!(s === void 0 || !z.isCollapsed || !s.currentInput || !hi(s.currentInput))) {
      if (e.preventDefault(), this.Editor.Toolbar.close(), s.currentInput !== s.firstInput) {
        i.navigatePrevious();
        return;
      }
      if (n !== null) {
        if (n.isEmpty) {
          o.removeBlock(n);
          return;
        }
        if (s.isEmpty) {
          o.removeBlock(s);
          const r = o.currentBlock;
          i.setToBlock(r, i.positions.END);
          return;
        }
        mn(n, s) ? this.mergeBlocks(n, s) : i.setToBlock(n, i.positions.END);
      }
    }
  }
  /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */
  delete(e) {
    const { BlockManager: o, Caret: i } = this.Editor, { currentBlock: s, nextBlock: n } = o;
    if (!(!z.isCollapsed || !mi(s.currentInput))) {
      if (e.preventDefault(), this.Editor.Toolbar.close(), s.currentInput !== s.lastInput) {
        i.navigateNext();
        return;
      }
      if (n !== null) {
        if (n.isEmpty) {
          o.removeBlock(n);
          return;
        }
        if (s.isEmpty) {
          o.removeBlock(s), i.setToBlock(n, i.positions.START);
          return;
        }
        mn(s, n) ? this.mergeBlocks(s, n) : i.setToBlock(n, i.positions.START);
      }
    }
  }
  /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */
  mergeBlocks(e, o) {
    const { BlockManager: i, Caret: s, Toolbar: n } = this.Editor;
    s.createShadow(e.lastInput), i.mergeBlocks(e, o).then(() => {
      s.restoreCaret(e.pluginsContent), n.close();
    });
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const o = yo.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === Y.TAB);
    if (this.Editor.UI.someToolbarOpened && o)
      return;
    this.Editor.Toolbar.close();
    const { currentBlock: i } = this.Editor.BlockManager, s = ((i == null ? void 0 : i.currentInput) !== void 0 ? mi(i.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === Y.DOWN && s) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    if (e.keyCode === Y.DOWN || e.keyCode === Y.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
      e.preventDefault();
      return;
    }
    ki(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (yo.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === Y.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.Toolbar.close();
    const { currentBlock: o } = this.Editor.BlockManager, i = ((o == null ? void 0 : o.currentInput) !== void 0 ? hi(o.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === Y.UP && i) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    if (e.keyCode === Y.UP || e.keyCode === Y.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
      e.preventDefault();
      return;
    }
    ki(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const o = e.keyCode === Y.ENTER && this.Editor.Toolbar.toolbox.opened, i = e.keyCode === Y.ENTER && this.Editor.BlockSettings.opened, s = e.keyCode === Y.ENTER && this.Editor.InlineToolbar.opened, n = e.keyCode === Y.TAB;
    return !(e.shiftKey || n || o || i || s);
  }
  /**
   * If Toolbox is not open, then just open it and show plus button
   */
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */
  activateBlockSettings() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
class it {
  /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  /**
   * Get length of Block instances array
   *
   * @returns {number}
   */
  get length() {
    return this.blocks.length;
  }
  /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */
  get array() {
    return this.blocks;
  }
  /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */
  get nodes() {
    return Zn(this.workingArea.children);
  }
  /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */
  static set(e, o, i) {
    return isNaN(Number(o)) ? (Reflect.set(e, o, i), !0) : (e.insert(+o, i), !0);
  }
  /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */
  static get(e, o) {
    return isNaN(Number(o)) ? Reflect.get(e, o) : e.get(+o);
  }
  /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */
  swap(e, o) {
    const i = this.blocks[o];
    b.swap(this.blocks[e].holder, i.holder), this.blocks[o] = this.blocks[e], this.blocks[e] = i;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, o) {
    const i = this.blocks.splice(o, 1)[0], s = e - 1, n = Math.max(0, s), r = this.blocks[n];
    e > 0 ? this.insertToDOM(i, "afterend", r) : this.insertToDOM(i, "beforebegin", r), this.blocks.splice(e, 0, i);
    const a = this.composeBlockEvent("move", {
      fromIndex: o,
      toIndex: e
    });
    i.call(Je.MOVED, a);
  }
  /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */
  insert(e, o, i = !1) {
    if (!this.length) {
      this.push(o);
      return;
    }
    e > this.length && (e = this.length), i && (this.blocks[e].holder.remove(), this.blocks[e].call(Je.REMOVED));
    const s = i ? 1 : 0;
    if (this.blocks.splice(e, s, o), e > 0) {
      const n = this.blocks[e - 1];
      this.insertToDOM(o, "afterend", n);
    } else {
      const n = this.blocks[e + 1];
      n ? this.insertToDOM(o, "beforebegin", n) : this.insertToDOM(o);
    }
  }
  /**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */
  replace(e, o) {
    if (this.blocks[e] === void 0)
      throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(o.holder), this.blocks[e] = o;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */
  insertMany(e, o) {
    const i = new DocumentFragment();
    for (const s of e)
      i.appendChild(s.holder);
    if (this.length > 0) {
      if (o > 0) {
        const s = Math.min(o - 1, this.length - 1);
        this.blocks[s].holder.after(i);
      } else
        o === 0 && this.workingArea.prepend(i);
      this.blocks.splice(o, 0, ...e);
    } else
      this.blocks.push(...e), this.workingArea.appendChild(i);
    e.forEach((s) => s.call(Je.RENDERED));
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(Je.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(Je.REMOVED)), this.blocks.length = 0;
  }
  /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */
  insertAfter(e, o) {
    const i = this.blocks.indexOf(e);
    this.insert(i + 1, o);
  }
  /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */
  get(e) {
    return this.blocks[e];
  }
  /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */
  insertToDOM(e, o, i) {
    o ? i.holder.insertAdjacentElement(o, e.holder) : this.workingArea.appendChild(e.holder), e.call(Je.RENDERED);
  }
  /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */
  composeBlockEvent(e, o) {
    return new CustomEvent(e, {
      detail: o
    });
  }
}
const bn = "block-removed", kn = "block-added", Cu = "block-moved", wn = "block-changed";
class Bu {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((o, i) => {
      this.completed = this.completed.then(e).then(o).catch(i);
    });
  }
}
class Tu extends Q {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  /**
   * Returns current Block index
   *
   * @returns {number}
   */
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  /**
   * returns first Block
   *
   * @returns {Block}
   */
  get firstBlock() {
    return this._blocks[0];
  }
  /**
   * returns last Block
   *
   * @returns {Block}
   */
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  /**
   * Get current Block instance
   *
   * @returns {Block}
   */
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find((e) => !!e.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((e) => !!e.inputs.length);
  }
  /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */
  get blocks() {
    return this._blocks.array;
  }
  /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */
  prepare() {
    const e = new it(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: it.set,
      get: it.get
    }), this.listeners.on(
      document,
      "copy",
      (o) => this.Editor.BlockEvents.handleCommandC(o)
    );
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */
  composeBlock({
    tool: e,
    data: o = {},
    id: i = void 0,
    tunes: s = {}
  }) {
    const n = this.Editor.ReadOnly.isEnabled, r = this.Editor.Tools.blockTools.get(e), a = new we({
      id: i,
      data: o,
      tool: r,
      api: this.Editor.API,
      readOnly: n,
      tunesData: s
    }, this.eventsDispatcher);
    return n || window.requestIdleCallback(() => {
      this.bindBlockEvents(a);
    }, { timeout: 2e3 }), a;
  }
  /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */
  insert({
    id: e = void 0,
    tool: o = this.config.defaultBlock,
    data: i = {},
    index: s,
    needToFocus: n = !0,
    replace: r = !1,
    tunes: a = {}
  } = {}) {
    let c = s;
    c === void 0 && (c = this.currentBlockIndex + (r ? 0 : 1));
    const l = this.composeBlock({
      id: e,
      tool: o,
      data: i,
      tunes: a
    });
    return r && this.blockDidMutated(bn, this.getBlockByIndex(c), {
      index: c
    }), this._blocks.insert(c, l, r), this.blockDidMutated(kn, l, {
      index: c
    }), n ? this.currentBlockIndex = c : c <= this.currentBlockIndex && this.currentBlockIndex++, l;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */
  insertMany(e, o = 0) {
    this._blocks.insertMany(e, o);
  }
  /**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events.
   *
   * If neither data nor tunes is provided, return the provided block instead.
   *
   * @param block - block to update
   * @param data - (optional) new data
   * @param tunes - (optional) tune data
   */
  async update(e, o, i) {
    if (!o && !i)
      return e;
    const s = await e.data, n = this.composeBlock({
      id: e.id,
      tool: e.name,
      data: Object.assign({}, s, o ?? {}),
      tunes: i ?? e.tunes
    }), r = this.getBlockIndex(e);
    return this._blocks.replace(r, n), this.blockDidMutated(wn, n, {
      index: r
    }), n;
  }
  /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */
  replace(e, o, i) {
    const s = this.getBlockIndex(e);
    return this.insert({
      tool: o,
      data: i,
      index: s,
      replace: !0
    });
  }
  /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */
  paste(e, o, i = !1) {
    const s = this.insert({
      tool: e,
      replace: i
    });
    try {
      window.requestIdleCallback(() => {
        s.call(Je.ON_PASTE, o);
      });
    } catch (n) {
      ne(`${e}: onPaste callback call is failed`, "error", n);
    }
    return s;
  }
  /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */
  insertDefaultBlockAtIndex(e, o = !1) {
    const i = this.composeBlock({ tool: this.config.defaultBlock });
    return this._blocks[e] = i, this.blockDidMutated(kn, i, {
      index: e
    }), o ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, i;
  }
  /**
   * Always inserts at the end
   *
   * @returns {Block}
   */
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */
  async mergeBlocks(e, o) {
    let i;
    if (e.name === o.name && e.mergeable) {
      const s = await o.data;
      if (He(s)) {
        console.error("Could not merge Block. Failed to extract original Block data.");
        return;
      }
      const [n] = Lt([s], e.tool.sanitizeConfig);
      i = n;
    } else if (e.mergeable && ji(o, "export") && ji(e, "import")) {
      const s = await o.exportDataAsString(), n = Ve(s, e.tool.sanitizeConfig);
      i = vn(n, e.tool.conversionConfig);
    }
    i !== void 0 && (await e.mergeWith(i), this.removeBlock(o), this.currentBlockIndex = this._blocks.indexOf(e));
  }
  /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */
  removeBlock(e, o = !0) {
    return new Promise((i) => {
      const s = this._blocks.indexOf(e);
      if (!this.validateIndex(s))
        throw new Error("Can't find a Block to remove");
      e.destroy(), this._blocks.remove(s), this.blockDidMutated(bn, e, {
        index: s
      }), this.currentBlockIndex >= s && this.currentBlockIndex--, this.blocks.length ? s === 0 && (this.currentBlockIndex = 0) : (this.unsetCurrentBlock(), o && this.insert()), i();
    });
  }
  /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */
  removeSelectedBlocks() {
    let e;
    for (let o = this.blocks.length - 1; o >= 0; o--)
      this.blocks[o].selected && (this.removeBlock(this.blocks[o]), e = o);
    return e;
  }
  /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--)
      this._blocks.remove(e);
    this.unsetCurrentBlock(), this.insert(), this.currentBlock.firstInput.focus();
  }
  /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(), o = b.make("div");
    o.appendChild(e);
    const i = {
      text: b.isEmpty(o) ? "" : o.innerHTML
    };
    return this.insert({ data: i });
  }
  /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */
  getBlockById(e) {
    return this._blocks.array.find((o) => o.id === e);
  }
  /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */
  getBlock(e) {
    b.isElement(e) || (e = e.parentNode);
    const o = this._blocks.nodes, i = e.closest(`.${we.CSS.wrapper}`), s = o.indexOf(i);
    if (s >= 0)
      return this._blocks[s];
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    b.isElement(e) || (e = e.parentNode);
    const o = e.closest(`.${we.CSS.wrapper}`);
    if (!o)
      return;
    const i = o.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (i != null && i.isEqualNode(this.Editor.UI.nodes.wrapper))
      return this.currentBlockIndex = this._blocks.nodes.indexOf(o), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node))
      return;
    b.isElement(e) || (e = e.parentNode);
    const o = e.closest(`.${we.CSS.wrapper}`);
    return this.blocks.find((i) => i.holder === o);
  }
  /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */
  swap(e, o) {
    this._blocks.swap(e, o), this.currentBlockIndex = o;
  }
  /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */
  move(e, o = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(o)) {
      ne("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(o)) {
      ne("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
      return;
    }
    this._blocks.move(e, o), this.currentBlockIndex = e, this.blockDidMutated(Cu, this.currentBlock, {
      fromIndex: o,
      toIndex: e
    });
  }
  /**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */
  async convert(e, o, i) {
    if (!await e.save())
      throw new Error("Could not convert Block. Failed to extract original Block data.");
    const s = this.Editor.Tools.blockTools.get(o);
    if (!s)
      throw new Error(`Could not convert Block. Tool «${o}» not found.`);
    const n = await e.exportDataAsString(), r = Ve(
      n,
      s.sanitizeConfig
    );
    let a = vn(r, s.conversionConfig);
    return i && (a = Object.assign(a, i)), this.replace(e, s.name, a);
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  unsetCurrentBlock() {
    this.currentBlockIndex = -1;
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  async clear(e = !1) {
    const o = new Bu();
    this.blocks.forEach((i) => {
      o.add(async () => {
        await this.removeBlock(i, !1);
      });
    }), await o.completed, this.unsetCurrentBlock(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */
  async destroy() {
    await Promise.all(this.blocks.map((e) => e.destroy()));
  }
  /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */
  bindBlockEvents(e) {
    const { BlockEvents: o } = this.Editor;
    this.readOnlyMutableListeners.on(e.holder, "keydown", (i) => {
      o.keydown(i);
    }), this.readOnlyMutableListeners.on(e.holder, "keyup", (i) => {
      o.keyup(i);
    }), this.readOnlyMutableListeners.on(e.holder, "dragover", (i) => {
      o.dragOver(i);
    }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (i) => {
      o.dragLeave(i);
    }), e.on("didMutated", (i) => this.blockDidMutated(wn, i, {
      index: this.getBlockIndex(i)
    }));
  }
  /**
   * Disable mutable handlers and bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Enables all module handlers and bindings for all Blocks
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      document,
      "cut",
      (e) => this.Editor.BlockEvents.handleCommandX(e)
    ), this.blocks.forEach((e) => {
      this.bindBlockEvents(e);
    });
  }
  /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */
  blockDidMutated(e, o, i) {
    const s = new CustomEvent(e, {
      detail: {
        target: new Ge(o),
        ...i
      }
    });
    return this.eventsDispatcher.emit(sr, {
      event: s
    }), o;
  }
}
class Pu extends Q {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
  }
  /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: !0,
      img: {
        src: !0,
        width: !0,
        height: !0
      },
      a: {
        href: !0
      },
      b: {},
      i: {},
      u: {}
    };
  }
  /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((o) => o.selected === !0);
  }
  /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */
  set allBlocksSelected(e) {
    const { BlockManager: o } = this.Editor;
    o.blocks.forEach((i) => {
      i.selected = e;
    }), this.clearCache();
  }
  /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((o) => o.selected === !0)), this.anyBlockSelectedCache;
  }
  /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter((e) => e.selected);
  }
  /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */
  prepare() {
    this.selection = new z(), Ao.add({
      name: "CMD+A",
      handler: (e) => {
        const { BlockManager: o, ReadOnly: i } = this.Editor;
        if (i.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        o.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */
  toggleReadOnly() {
    z.get().removeAllRanges(), this.allBlocksSelected = !1;
  }
  /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  unSelectBlockByIndex(e) {
    const { BlockManager: o } = this.Editor;
    let i;
    isNaN(e) ? i = o.currentBlock : i = o.getBlockByIndex(e), i.selected = !1, this.clearCache();
  }
  /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */
  clearSelection(e, o = !1) {
    const { BlockManager: i, Caret: s, RectangleSelection: n } = this.Editor;
    this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    const r = e && e instanceof KeyboardEvent, a = r && Jn(e.keyCode);
    if (this.anyBlockSelected && r && a && !z.isSelectionExists) {
      const c = i.removeSelectedBlocks();
      i.insertDefaultBlockAtIndex(c, !0), s.setToBlock(i.currentBlock), ki(() => {
        const l = e.key;
        s.insertContentAtCaretPosition(l.length > 1 ? "" : l);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || n.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    o && this.selection.restore(), this.allBlocksSelected = !1;
  }
  /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */
  copySelectedBlocks(e) {
    e.preventDefault();
    const o = b.make("div");
    this.selectedBlocks.forEach((n) => {
      const r = Ve(n.holder.innerHTML, this.sanitizerConfig), a = b.make("p");
      a.innerHTML = r, o.appendChild(a);
    });
    const i = Array.from(o.childNodes).map((n) => n.textContent).join(`

`), s = o.innerHTML;
    return e.clipboardData.setData("text/plain", i), e.clipboardData.setData("text/html", s), Promise.all(this.selectedBlocks.map((n) => n.save())).then((n) => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(n));
      } catch {
      }
    });
  }
  /**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: o } = this.Editor, i = o.getBlockByIndex(e);
    i !== void 0 && this.selectBlock(i);
  }
  /**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */
  selectBlock(e) {
    this.selection.save(), z.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
  }
  /**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */
  unselectBlock(e) {
    e.selected = !1, this.clearCache();
  }
  /**
   * Clear anyBlockSelected cache
   */
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */
  destroy() {
    Ao.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), b.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    const o = this.Editor.BlockManager.getBlock(e.target), i = o.inputs;
    if (i.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if (i.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(o), this.needToSelectAll = !0);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), z.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
  }
}
class Ci extends Q {
  /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  /**
   * Elements styles that can be useful for Caret Module
   */
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToBlock(e, o = this.positions.DEFAULT, i = 0) {
    var s;
    const { BlockManager: n, BlockSelection: r } = this.Editor;
    if (r.clearSelection(), !e.focusable) {
      (s = window.getSelection()) == null || s.removeAllRanges(), r.selectBlock(e), n.currentBlock = e;
      return;
    }
    let a;
    switch (o) {
      case this.positions.START:
        a = e.firstInput;
        break;
      case this.positions.END:
        a = e.lastInput;
        break;
      default:
        a = e.currentInput;
    }
    if (!a)
      return;
    const c = b.getDeepestNode(a, o === this.positions.END), l = b.getContentLength(c);
    switch (!0) {
      case o === this.positions.START:
        i = 0;
        break;
      case o === this.positions.END:
      case i > l:
        i = l;
        break;
    }
    this.set(c, i), n.setCurrentBlockByChildNode(e.holder), n.currentBlock.currentInput = a;
  }
  /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToInput(e, o = this.positions.DEFAULT, i = 0) {
    const { currentBlock: s } = this.Editor.BlockManager, n = b.getDeepestNode(e);
    switch (o) {
      case this.positions.START:
        this.set(n, 0);
        break;
      case this.positions.END:
        this.set(n, b.getContentLength(n));
        break;
      default:
        i && this.set(n, i);
    }
    s.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, o = 0) {
    const { top: i, bottom: s } = z.setCursor(e, o), { innerHeight: n } = window;
    i < 0 ? window.scrollBy(0, i - 30) : s > n && window.scrollBy(0, s - n + 30);
  }
  /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty)
        this.setToBlock(e);
      else {
        const o = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(o);
      }
  }
  /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */
  extractFragmentFromCaretPosition() {
    const e = z.get();
    if (e.rangeCount) {
      const o = e.getRangeAt(0), i = this.Editor.BlockManager.currentBlock.currentInput;
      if (o.deleteContents(), i)
        if (b.isNativeInput(i)) {
          const s = i, n = document.createDocumentFragment(), r = s.value.substring(0, s.selectionStart), a = s.value.substring(s.selectionStart);
          return n.textContent = a, s.value = r, n;
        } else {
          const s = o.cloneRange();
          return s.selectNodeContents(i), s.setStart(o.endContainer, o.endOffset), s.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigateNext(e = !1) {
    const { BlockManager: o } = this.Editor, { currentBlock: i, nextBlock: s } = o;
    if (i === void 0)
      return !1;
    const { nextInput: n, currentInput: r } = i, a = r !== void 0 ? mi(r) : void 0;
    let c = s;
    const l = e || a || !i.focusable;
    if (n && l)
      return this.setToInput(n, this.positions.START), !0;
    if (c === null) {
      if (i.tool.isDefault || !l)
        return !1;
      c = o.insertAtEnd();
    }
    return l ? (this.setToBlock(c, this.positions.START), !0) : !1;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigatePrevious(e = !1) {
    const { currentBlock: o, previousBlock: i } = this.Editor.BlockManager;
    if (!o)
      return !1;
    const { previousInput: s, currentInput: n } = o, r = n !== void 0 ? hi(n) : void 0, a = e || r || !o.focusable;
    return s && a ? (this.setToInput(s, this.positions.END), !0) : i !== null && a ? (this.setToBlock(i, this.positions.END), !0) : !1;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const o = document.createElement("span");
    o.classList.add(Ci.CSS.shadowCaret), e.insertAdjacentElement("beforeend", o);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const o = e.querySelector(`.${Ci.CSS.shadowCaret}`);
    if (!o)
      return;
    new z().expandToTag(o);
    const i = document.createRange();
    i.selectNode(o), i.extractContents();
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const o = document.createDocumentFragment(), i = document.createElement("div"), s = z.get(), n = z.range;
    i.innerHTML = e, Array.from(i.childNodes).forEach((l) => o.appendChild(l)), o.childNodes.length === 0 && o.appendChild(new Text());
    const r = o.lastChild;
    n.deleteContents(), n.insertNode(o);
    const a = document.createRange(), c = r.nodeType === Node.TEXT_NODE ? r : r.firstChild;
    c !== null && c.textContent !== null && a.setStart(c, c.textContent.length), s.removeAllRanges(), s.addRange(a);
  }
}
class Iu extends Q {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: o, BlockSelection: i } = this.Editor;
      if (e.relatedTarget === null && e.target === null)
        return;
      const s = o.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, n = o.getBlockByChildNode(e.target);
      if (!(!s || !n) && n !== s) {
        if (s === this.firstSelectedBlock) {
          z.get().removeAllRanges(), s.selected = !0, n.selected = !0, i.clearCache();
          return;
        }
        if (n === this.firstSelectedBlock) {
          s.selected = !1, n.selected = !1, i.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(s, n), this.lastSelectedBlock = n;
      }
    };
  }
  /**
   * Module preparation
   *
   * @returns {Promise}
   */
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */
  watchSelection(e) {
    if (e.button !== Gl.LEFT)
      return;
    const { BlockManager: o } = this.Editor;
    this.firstSelectedBlock = o.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  /**
   * Return boolean is cross block selection started:
   * there should be at least 2 selected blocks
   */
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock && this.firstSelectedBlock !== this.lastSelectedBlock;
  }
  /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */
  toggleBlockSelectedState(e = !0) {
    const { BlockManager: o, BlockSelection: i } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = o.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, i.clearCache(), z.get().removeAllRanges());
    const s = o.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), n = o.blocks[s];
    n && (this.lastSelectedBlock.selected !== n.selected ? (n.selected = !0, i.clearCache()) : (this.lastSelectedBlock.selected = !1, i.clearCache()), this.lastSelectedBlock = n, this.Editor.InlineToolbar.close(), n.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: o, BlockSelection: i, Caret: s } = this.Editor, n = o.blocks.indexOf(this.firstSelectedBlock), r = o.blocks.indexOf(this.lastSelectedBlock);
    if (i.anyBlockSelected && n > -1 && r > -1 && e && e instanceof KeyboardEvent)
      switch (e.keyCode) {
        case Y.DOWN:
        case Y.RIGHT:
          s.setToBlock(o.blocks[Math.max(n, r)], s.positions.END);
          break;
        case Y.UP:
        case Y.LEFT:
          s.setToBlock(o.blocks[Math.min(n, r)], s.positions.START);
          break;
        default:
          s.setToBlock(o.blocks[Math.max(n, r)], s.positions.END);
      }
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: o } = this.Editor;
    z.isCollapsed || this.Editor.BlockSelection.clearSelection(e), o.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, o) {
    const { BlockManager: i, BlockSelection: s } = this.Editor, n = i.blocks.indexOf(e), r = i.blocks.indexOf(o), a = e.selected !== o.selected;
    for (let c = Math.min(n, r); c <= Math.max(n, r); c++) {
      const l = i.blocks[c];
      l !== this.firstSelectedBlock && l !== (a ? e : o) && (i.blocks[c].selected = !i.blocks[c].selected, s.clearCache());
    }
  }
}
class Ou extends Q {
  constructor() {
    super(...arguments), this.isStartedAtEditor = !1;
  }
  /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Add drag events listeners to editor zone
   */
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (o) => {
      await this.processDrop(o);
    }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (o) => {
      this.processDragOver(o);
    }, !0);
  }
  /**
   * Unbind drag-n-drop event handlers
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */
  async processDrop(e) {
    const {
      BlockManager: o,
      Paste: i,
      Caret: s
    } = this.Editor;
    e.preventDefault(), o.blocks.forEach((r) => {
      r.dropTarget = !1;
    }), z.isAtEditor && !z.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
    const n = o.setCurrentBlockByChildNode(e.target);
    if (n)
      this.Editor.Caret.setToBlock(n, s.positions.END);
    else {
      const r = o.setCurrentBlockByChildNode(o.lastBlock.holder);
      this.Editor.Caret.setToBlock(r, s.positions.END);
    }
    await i.processDataTransfer(e.dataTransfer, !0);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    z.isAtEditor && !z.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
}
const Au = 180, Lu = 400;
class Nu extends Q {
  /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
  constructor({ config: e, eventsDispatcher: o }) {
    super({
      config: e,
      eventsDispatcher: o
    }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = Lu, this.mutationObserver = new MutationObserver((i) => {
      this.redactorChanged(i);
    }), this.eventsDispatcher.on(sr, (i) => {
      this.particularBlockChanged(i.event);
    }), this.eventsDispatcher.on(nr, () => {
      this.disable();
    }), this.eventsDispatcher.on(rr, () => {
      this.enable();
    });
  }
  /**
   * Enables onChange event
   */
  enable() {
    this.mutationObserver.observe(
      this.Editor.UI.nodes.redactor,
      {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0
      }
    ), this.disabled = !1;
  }
  /**
   * Disables onChange event
   */
  disable() {
    this.mutationObserver.disconnect(), this.disabled = !0;
  }
  /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */
  particularBlockChanged(e) {
    this.disabled || !ge(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let o;
      this.batchingOnChangeQueue.size === 1 ? o = this.batchingOnChangeQueue.values().next().value : o = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, o), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */
  redactorChanged(e) {
    this.eventsDispatcher.emit(vt, {
      mutations: e
    });
  }
}
const Br = class Tr extends Q {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e) => {
      try {
        const o = e.create({}, {}, !1);
        if (e.pasteConfig === !1) {
          this.exceptionList.push(e.name);
          return;
        }
        if (!ge(o.onPaste))
          return;
        this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
      } catch (o) {
        ne(
          `Paste handling for «${e.name}» Tool hasn't been set up because of the error`,
          "warn",
          o
        );
      }
    }, this.handlePasteEvent = async (e) => {
      const { BlockManager: o, Toolbar: i } = this.Editor, s = o.setCurrentBlockByChildNode(e.target);
      !s || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || s && this.exceptionList.includes(s.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), i.close());
    };
  }
  /**
   * Set onPaste callback and collect tools` paste configurations
   */
  async prepare() {
    this.processTools();
  }
  /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */
  toggleReadOnly(e) {
    e ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(e, o = !1) {
    const { Tools: i } = this.Editor, s = e.types;
    if ((s.includes ? s.includes("Files") : s.contains("Files")) && !He(this.toolsFiles)) {
      await this.processFiles(e.files);
      return;
    }
    const n = e.getData(this.MIME_TYPE), r = e.getData("text/plain");
    let a = e.getData("text/html");
    if (n)
      try {
        this.insertEditorJSData(JSON.parse(n));
        return;
      } catch {
      }
    o && r.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : r) + "</p>");
    const c = Object.keys(this.toolsTags).reduce((u, g) => (u[g.toLowerCase()] = this.toolsTags[g].sanitizationConfig ?? {}, u), {}), l = Object.assign({}, c, i.getAllInlineToolsSanitizeConfig(), { br: {} }), d = Ve(a, l);
    !d.trim() || d.trim() === r || !b.isHTMLString(d) ? await this.processText(r) : await this.processText(d, !0);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(e, o = !1) {
    const { Caret: i, BlockManager: s } = this.Editor, n = o ? this.processHTML(e) : this.processPlain(e);
    if (!n.length)
      return;
    if (n.length === 1) {
      n[0].isBlock ? this.processSingleBlock(n.pop()) : this.processInlinePaste(n.pop());
      return;
    }
    const r = s.currentBlock && s.currentBlock.tool.isDefault && s.currentBlock.isEmpty;
    n.map(
      async (a, c) => this.insertBlock(a, c === 0 && r)
    ), s.currentBlock && i.setToBlock(s.currentBlock, i.positions.END);
  }
  /**
   * Set onPaste callback handler
   */
  setCallback() {
    this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Unset onPaste callback handler
   */
  unsetCallback() {
    this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Get and process tool`s paste configs
   */
  processTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(e) {
    return Qe(e) ? [e] : je(e) ? Object.keys(e) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const o = e.pasteConfig.tags || [], i = [];
    o.forEach((s) => {
      const n = this.collectTagNames(s);
      i.push(...n), n.forEach((r) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, r)) {
          ne(
            `Paste handler for «${e.name}» Tool on «${r}» tag is skipped because it is already used by «${this.toolsTags[r].tool.name}» Tool.`,
            "warn"
          );
          return;
        }
        const a = je(s) ? s[r] : null;
        this.toolsTags[r.toUpperCase()] = {
          tool: e,
          sanitizationConfig: a
        };
      });
    }), this.tagsByTool[e.name] = i.map((s) => s.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const { files: o = {} } = e.pasteConfig;
    let { extensions: i, mimeTypes: s } = o;
    !i && !s || (i && !Array.isArray(i) && (ne(`«extensions» property of the onDrop config for «${e.name}» Tool should be an array`), i = []), s && !Array.isArray(s) && (ne(`«mimeTypes» property of the onDrop config for «${e.name}» Tool should be an array`), s = []), s && (s = s.filter((n) => ed(n) ? !0 : (ne(`MIME type value «${n}» for the «${e.name}» Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[e.name] = {
      extensions: i || [],
      mimeTypes: s || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(e) {
    e.pasteConfig === !1 || !e.pasteConfig.patterns || He(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(([o, i]) => {
      i instanceof RegExp || ne(
        `Pattern ${i} for «${e.name}» Tool is skipped because it should be a Regexp instance.`,
        "warn"
      ), this.toolsPatterns.push({
        key: o,
        pattern: i,
        tool: e
      });
    });
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(e) {
    return b.isNativeInput(e);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(e) {
    const { BlockManager: o } = this.Editor;
    let i;
    i = await Promise.all(
      Array.from(e).map((n) => this.processFile(n))
    ), i = i.filter((n) => !!n);
    const s = o.currentBlock.tool.isDefault && o.currentBlock.isEmpty;
    i.forEach(
      (n, r) => {
        o.paste(n.type, n.event, r === 0 && s);
      }
    );
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(e) {
    const o = Ql(e), i = Object.entries(this.toolsFiles).find(([n, { mimeTypes: r, extensions: a }]) => {
      const [c, l] = e.type.split("/"), d = a.find((g) => g.toLowerCase() === o.toLowerCase()), u = r.find((g) => {
        const [v, h] = g.split("/");
        return v === c && (h === l || h === "*");
      });
      return !!d || !!u;
    });
    if (!i)
      return;
    const [s] = i;
    return {
      event: this.composePasteEvent("file", {
        file: e
      }),
      type: s
    };
  }
  /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */
  processHTML(e) {
    const { Tools: o } = this.Editor, i = b.make("DIV");
    return i.innerHTML = e, this.getNodes(i).map((s) => {
      let n, r = o.defaultTool, a = !1;
      switch (s.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          n = b.make("div"), n.appendChild(s);
          break;
        case Node.ELEMENT_NODE:
          n = s, a = !0, this.toolsTags[n.tagName] && (r = this.toolsTags[n.tagName].tool);
          break;
      }
      const { tags: c } = r.pasteConfig || { tags: [] }, l = c.reduce((g, v) => (this.collectTagNames(v).forEach((h) => {
        const f = je(v) ? v[h] : null;
        g[h.toLowerCase()] = f || {};
      }), g), {}), d = Object.assign({}, l, r.baseSanitizeConfig);
      if (n.tagName.toLowerCase() === "table") {
        const g = Ve(n.outerHTML, d);
        n = b.make("div", void 0, {
          innerHTML: g
        }).firstChild;
      } else
        n.innerHTML = Ve(n.innerHTML, d);
      const u = this.composePasteEvent("tag", {
        data: n
      });
      return {
        content: n,
        isBlock: a,
        tool: r.name,
        event: u
      };
    }).filter((s) => {
      const n = b.isEmpty(s.content), r = b.isSingleTag(s.content);
      return !n || r;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(e) {
    const { defaultBlock: o } = this.config;
    if (!e)
      return [];
    const i = o;
    return e.split(/\r?\n/).filter((s) => s.trim()).map((s) => {
      const n = b.make("div");
      n.textContent = s;
      const r = this.composePasteEvent("tag", {
        data: n
      });
      return {
        content: n,
        tool: i,
        isBlock: !1,
        event: r
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(e) {
    const { Caret: o, BlockManager: i } = this.Editor, { currentBlock: s } = i;
    if (!s || e.tool !== s.name || !b.containsOnlyInlineElements(e.content.innerHTML)) {
      this.insertBlock(e, (s == null ? void 0 : s.tool.isDefault) && s.isEmpty);
      return;
    }
    o.insertContentAtCaretPosition(e.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(e) {
    const { BlockManager: o, Caret: i } = this.Editor, { content: s } = e;
    if (o.currentBlock && o.currentBlock.tool.isDefault && s.textContent.length < Tr.PATTERN_PROCESSING_MAX_LENGTH) {
      const n = await this.processPattern(s.textContent);
      if (n) {
        const r = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty, a = o.paste(n.tool, n.event, r);
        i.setToBlock(a, i.positions.END);
        return;
      }
    }
    if (o.currentBlock && o.currentBlock.currentInput) {
      const n = o.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        !1,
        Ve(s.innerHTML, n)
      );
    } else
      this.insertBlock(e);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(e) {
    const o = this.toolsPatterns.find((i) => {
      const s = i.pattern.exec(e);
      return s ? e === s.shift() : !1;
    });
    return o ? {
      event: this.composePasteEvent("pattern", {
        key: o.key,
        data: e
      }),
      tool: o.tool.name
    } : void 0;
  }
  /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */
  insertBlock(e, o = !1) {
    const { BlockManager: i, Caret: s } = this.Editor, { currentBlock: n } = i;
    let r;
    if (o && n && n.isEmpty) {
      r = i.paste(e.tool, e.event, !0), s.setToBlock(r, s.positions.END);
      return;
    }
    r = i.paste(e.tool, e.event), s.setToBlock(r, s.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(e) {
    const { BlockManager: o, Caret: i, Tools: s } = this.Editor;
    Lt(
      e,
      (n) => s.blockTools.get(n).sanitizeConfig
    ).forEach(({ tool: n, data: r }, a) => {
      let c = !1;
      a === 0 && (c = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty);
      const l = o.insert({
        tool: n,
        data: r,
        replace: c
      });
      i.setToBlock(l, i.positions.END);
    });
  }
  /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */
  processElementNode(e, o, i) {
    const s = Object.keys(this.toolsTags), n = e, { tool: r } = this.toolsTags[n.tagName] || {}, a = this.tagsByTool[r == null ? void 0 : r.name] || [], c = s.includes(n.tagName), l = b.blockElements.includes(n.tagName.toLowerCase()), d = Array.from(n.children).some(
      ({ tagName: g }) => s.includes(g) && !a.includes(g)
    ), u = Array.from(n.children).some(
      ({ tagName: g }) => b.blockElements.includes(g.toLowerCase())
    );
    if (!l && !c && !d)
      return i.appendChild(n), [...o, i];
    if (c && !d || l && !u && !d)
      return [...o, i, n];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(e) {
    const o = Array.from(e.childNodes);
    let i;
    const s = (n, r) => {
      if (b.isEmpty(r) && !b.isSingleTag(r))
        return n;
      const a = n[n.length - 1];
      let c = new DocumentFragment();
      switch (a && b.isFragment(a) && (c = n.pop()), r.nodeType) {
        case Node.ELEMENT_NODE:
          if (i = this.processElementNode(r, n, c), i)
            return i;
          break;
        case Node.TEXT_NODE:
          return c.appendChild(r), [...n, c];
        default:
          return [...n, c];
      }
      return [...n, ...Array.from(r.childNodes).reduce(s, [])];
    };
    return o.reduce(s, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(e, o) {
    return new CustomEvent(e, {
      detail: o
    });
  }
};
Br.PATTERN_PROCESSING_MAX_LENGTH = 450;
let Mu = Br;
class Fu extends Q {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
  }
  /**
   * Returns state of read only mode
   */
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  /**
   * Set initial state
   */
  async prepare() {
    const { Tools: e } = this.Editor, { blockTools: o } = e, i = [];
    Array.from(o.entries()).forEach(([s, n]) => {
      n.isReadOnlySupported || i.push(s);
    }), this.toolsDontSupportReadOnly = i, this.config.readOnly && i.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly, !0);
  }
  /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param state - (optional) read-only state or toggle
   * @param isInitial - (optional) true when editor is initializing
   */
  async toggle(e = !this.readOnlyEnabled, o = !1) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const i = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const n in this.Editor)
      this.Editor[n].toggleReadOnly && this.Editor[n].toggleReadOnly(e);
    if (i === e)
      return this.readOnlyEnabled;
    if (o)
      return this.readOnlyEnabled;
    this.Editor.ModificationsObserver.disable();
    const s = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(s.blocks), this.Editor.ModificationsObserver.enable(), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new tr(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
}
class Ko extends Q {
  constructor() {
    super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  /**
   * Module Preparation
   * Creating rect and hang handlers
   */
  prepare() {
    this.enableModuleBindings();
  }
  /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */
  startSelection(e, o) {
    const i = document.elementFromPoint(e - window.pageXOffset, o - window.pageYOffset);
    i.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
    const s = [
      `.${we.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], n = i.closest("." + this.Editor.UI.CSS.editorWrapper), r = s.some((a) => !!i.closest(a));
    !n || r || (this.mousedown = !0, this.startX = e, this.startY = o);
  }
  /**
   * Clear all params to end selection
   */
  endSelection() {
    this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  /**
   * is RectSelection Activated
   */
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  /**
   * Mark that selection is end
   */
  clearSelection() {
    this.isRectSelectionActivated = !1;
  }
  /**
   * Sets Module necessary event handlers
   */
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(e, "mousedown", (o) => {
      this.processMouseDown(o);
    }, !1), this.listeners.on(document.body, "mousemove", gt((o) => {
      this.processMouseMove(o);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", gt((o) => {
      this.processScroll(o);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseup", () => {
      this.processMouseUp();
    }, !1);
  }
  /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseDown(e) {
    e.button === this.MAIN_MOUSE_BUTTON && (e.target.closest(b.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY));
  }
  /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  /**
   * Handle mouse leave
   */
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processScroll(e) {
    this.changingRectangle(e);
  }
  /**
   * Handle mouse up
   */
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = !1;
      return;
    }
    this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0);
  }
  /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */
  genHTML() {
    const { UI: e } = this.Editor, o = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), i = b.make("div", Ko.CSS.overlay, {}), s = b.make("div", Ko.CSS.overlayContainer, {}), n = b.make("div", Ko.CSS.rect, {});
    return s.appendChild(n), i.appendChild(s), o.appendChild(i), this.overlayRectangle = n, {
      container: o,
      overlay: i
    };
  }
  /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown))
      return;
    const o = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - o, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */
  changingRectangle(e) {
    if (!this.mousedown)
      return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const { rightPos: o, leftPos: i, index: s } = this.genInfoForMouseSelection(), n = this.startX > o && this.mouseX > o, r = this.startX < i && this.mouseX < i;
    this.rectCrossesBlocks = !(n || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), s !== void 0 && (this.trySelectNextBlock(s), this.inverseSelection(), z.get().removeAllRanges());
  }
  /**
   * Shrink rect to singular point
   */
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */
  inverseSelection() {
    const e = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !e)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(o);
    if (!this.rectCrossesBlocks && e)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(o);
  }
  /**
   * Updates size of rectangle
   */
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */
  genInfoForMouseSelection() {
    const e = document.body.offsetWidth / 2, o = this.mouseY - window.pageYOffset, i = document.elementFromPoint(e, o), s = this.Editor.BlockManager.getBlockByChildNode(i);
    let n;
    s !== void 0 && (n = this.Editor.BlockManager.blocks.findIndex((d) => d.holder === s.holder));
    const r = this.Editor.BlockManager.lastBlock.holder.querySelector("." + we.CSS.content), a = Number.parseInt(window.getComputedStyle(r).width, 10) / 2, c = e - a, l = e + a;
    return {
      index: n,
      leftPos: c,
      rightPos: l
    };
  }
  /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */
  trySelectNextBlock(e) {
    const o = this.stackOfSelected[this.stackOfSelected.length - 1] === e, i = this.stackOfSelected.length, s = 1, n = -1, r = 0;
    if (o)
      return;
    const a = this.stackOfSelected[i - 1] - this.stackOfSelected[i - 2] > 0;
    let c = r;
    i > 1 && (c = a ? s : n);
    const l = e > this.stackOfSelected[i - 1] && c === s, d = e < this.stackOfSelected[i - 1] && c === n, u = !(l || d || c === r);
    if (!u && (e > this.stackOfSelected[i - 1] || this.stackOfSelected[i - 1] === void 0)) {
      let h = this.stackOfSelected[i - 1] + 1 || e;
      for (h; h <= e; h++)
        this.addBlockInSelection(h);
      return;
    }
    if (!u && e < this.stackOfSelected[i - 1]) {
      for (let h = this.stackOfSelected[i - 1] - 1; h >= e; h--)
        this.addBlockInSelection(h);
      return;
    }
    if (!u)
      return;
    let g = i - 1, v;
    for (e > this.stackOfSelected[i - 1] ? v = () => e > this.stackOfSelected[g] : v = () => e < this.stackOfSelected[g]; v(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g]), this.stackOfSelected.pop(), g--;
  }
}
class Du extends Q {
  /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
  async render(e) {
    return new Promise((o) => {
      const { Tools: i, BlockManager: s } = this.Editor;
      if (e.length === 0)
        s.insert();
      else {
        const n = e.map(({ type: r, data: a, tunes: c, id: l }) => {
          i.available.has(r) === !1 && (Re(`Tool «${r}» is not found. Check 'tools' property at the Editor.js config.`, "warn"), a = this.composeStubDataForTool(r, a, l), r = i.stubTool);
          let d;
          try {
            d = s.composeBlock({
              id: l,
              tool: r,
              data: a,
              tunes: c
            });
          } catch (u) {
            ne(`Block «${r}» skipped because of plugins error`, "error", {
              data: a,
              error: u
            }), a = this.composeStubDataForTool(r, a, l), r = i.stubTool, d = s.composeBlock({
              id: l,
              tool: r,
              data: a,
              tunes: c
            });
          }
          return d;
        });
        s.insertMany(n);
      }
      window.requestIdleCallback(() => {
        o();
      }, { timeout: 2e3 });
    });
  }
  /**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */
  composeStubDataForTool(e, o, i) {
    const { Tools: s } = this.Editor;
    let n = e;
    if (s.unavailable.has(e)) {
      const r = s.unavailable.get(e).toolbox;
      r !== void 0 && r[0].title !== void 0 && (n = r[0].title);
    }
    return {
      savedData: {
        id: i,
        type: e,
        data: o
      },
      title: n
    };
  }
}
class Ru extends Q {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: o } = this.Editor, i = e.blocks, s = [];
    try {
      i.forEach((a) => {
        s.push(this.getSavedData(a));
      });
      const n = await Promise.all(s), r = await Lt(n, (a) => o.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(r);
    } catch (n) {
      Re("Saving failed due to the Error %o", "error", n);
    }
  }
  /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */
  async getSavedData(e) {
    const o = await e.save(), i = o && await e.validate(o.data);
    return {
      ...o,
      isValid: i
    };
  }
  /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */
  makeOutput(e) {
    const o = [];
    return e.forEach(({ id: i, tool: s, data: n, tunes: r, isValid: a }) => {
      if (!a) {
        ne(`Block «${s}» skipped because saved data is invalid`);
        return;
      }
      if (s === this.Editor.Tools.stubTool) {
        o.push(n);
        return;
      }
      const c = {
        id: i,
        type: s,
        data: n,
        ...!He(r) && {
          tunes: r
        }
      };
      o.push(c);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: o,
      version: "2.30.7"
    };
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(t);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const $u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function Hu(t) {
  const e = document.createElement("div");
  e.innerHTML = t.trim();
  const o = document.createDocumentFragment();
  return o.append(...Array.from(e.childNodes)), o;
}
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class zt {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: o, api: i, readOnly: s }) {
    this.api = i, this.readOnly = s, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = o.placeholder ? o.placeholder : zt.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = o.preserveBlank ?? !1;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
      return;
    const { textContent: o } = this._element;
    o === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    if (!this._element)
      return;
    this._data.text += e.text;
    const o = Hu(e.text);
    this._element.appendChild(o), this._element.normalize();
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const o = {
      text: e.detail.data.innerHTML
    };
    this._data = o, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox() {
    return {
      icon: $u,
      title: "Text"
    };
  }
}
class Ut {
  constructor() {
    this.commandName = "bold";
  }
  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      b: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return {
      icon: Vd,
      name: "bold",
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName)
    };
  }
  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  get shortcut() {
    return "CMD+B";
  }
}
Ut.isInline = !0;
Ut.title = "Bold";
class qt {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      i: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Qd, this.nodes.button;
  }
  /**
   * Wrap range with <i> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+I";
  }
}
qt.isInline = !0;
qt.title = "Italic";
class Wt {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new z();
  }
  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      a: {
        href: !0,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = _n, this.nodes.button;
  }
  /**
   * Input for the link
   */
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const o = this.selection.findParentTag("A");
      if (o) {
        this.selection.expandToTag(o), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
        return;
      }
    }
    this.toggleActions();
  }
  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      this.nodes.button.innerHTML = tu, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const o = e.getAttribute("href");
      this.nodes.input.value = o !== "null" ? o : "", this.selection.save();
    } else
      this.nodes.button.innerHTML = _n, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  /**
   * Function called with Inline Toolbar closing
   */
  clear() {
    this.closeActions();
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+K";
  }
  /**
   * Show/close link input
   */
  toggleActions() {
    this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
  }
  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  openActions(e = !1) {
    this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
  }
  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  closeActions(e = !0) {
    if (this.selection.isFakeBackgroundEnabled) {
      const o = new z();
      o.save(), this.selection.restore(), this.selection.removeFakeBackground(), o.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
  }
  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  enterPressed(e) {
    let o = this.nodes.input.value || "";
    if (!o.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(o)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), ne("Incorrect Link pasted", "warn", o);
      return;
    }
    o = this.prepareLink(o), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(o), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  validateURL(e) {
    return !/\s/.test(e);
  }
  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e))
      return e;
    const o = /^\/[^/\s]/.test(e), i = e.substring(0, 1) === "#", s = /^\/\/[^/\s]/.test(e);
    return !o && !i && !s && (e = "http://" + e), e;
  }
  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  insertLink(e) {
    const o = this.selection.findParentTag("A");
    o && this.selection.expandToTag(o), document.execCommand(this.commandLink, !1, e);
  }
  /**
   * Removes <a> tag
   */
  unlink() {
    document.execCommand(this.commandUnlink);
  }
}
Wt.isInline = !0;
Wt.title = "Link";
class Pr {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.i18nAPI = e.i18n, this.blocksAPI = e.blocks, this.selectionAPI = e.selection, this.toolsAPI = e.tools, this.caretAPI = e.caret;
  }
  /**
   * Returns tool's UI config
   */
  async render() {
    const e = z.get(), o = this.blocksAPI.getBlockByElement(e.anchorNode);
    if (o === void 0)
      return [];
    const i = this.toolsAPI.getBlockTools(), s = await cr(o, i);
    if (s.length === 0)
      return [];
    const n = s.reduce((l, d) => {
      var u;
      return (u = d.toolbox) == null || u.forEach((g) => {
        l.push({
          icon: g.icon,
          title: Pe.t(Ne.toolNames, g.title),
          name: d.name,
          closeOnActivate: !0,
          onActivate: async () => {
            const v = await this.blocksAPI.convert(o.id, d.name, g.data);
            this.caretAPI.setToBlock(v, "end");
          }
        });
      }), l;
    }, []), r = await o.getActiveToolboxEntry(), a = r !== void 0 ? r.icon : hr, c = !Fo();
    return {
      icon: a,
      name: "convert-to",
      hint: {
        title: this.i18nAPI.t("Convert to")
      },
      children: {
        searchable: c,
        items: n,
        onOpen: () => {
          c && (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
        },
        onClose: () => {
          c && (this.selectionAPI.restore(), this.selectionAPI.removeFakeBackground());
        }
      }
    };
  }
}
Pr.isInline = !0;
class Ir {
  /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
  constructor({ data: e, api: o }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = o, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.wrapper;
  }
  /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */
  save() {
    return this.savedData;
  }
  /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */
  make() {
    const e = b.make("div", this.CSS.wrapper), o = su, i = b.make("div", this.CSS.info), s = b.make("div", this.CSS.title, {
      textContent: this.title
    }), n = b.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = o, i.appendChild(s), i.appendChild(n), e.appendChild(i), e;
  }
}
Ir.isReadOnlySupported = !0;
class zu extends Ht {
  constructor() {
    super(...arguments), this.type = vo.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[$t.Title];
  }
  /**
   * Constructs new InlineTool instance from constructable
   */
  create() {
    return new this.constructable({
      api: this.api,
      config: this.settings
    });
  }
}
class Uu extends Ht {
  constructor() {
    super(...arguments), this.type = vo.Tune;
  }
  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  create(e, o) {
    return new this.constructable({
      api: this.api,
      config: this.settings,
      block: o,
      data: e
    });
  }
}
class Ee extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, o]) => o.isBlock());
    return new Ee(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, o]) => o.isInline());
    return new Ee(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, o]) => o.isTune());
    return new Ee(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, o]) => o.isInternal);
    return new Ee(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, o]) => !o.isInternal);
    return new Ee(e);
  }
}
var qu = Object.defineProperty, Wu = Object.getOwnPropertyDescriptor, Or = (t, e, o, i) => {
  for (var s = Wu(e, o), n = t.length - 1, r; n >= 0; n--)
    (r = t[n]) && (s = r(e, o, s) || s);
  return s && qu(e, o, s), s;
};
class Vt extends Ht {
  constructor() {
    super(...arguments), this.type = vo.Block, this.inlineTools = new Ee(), this.tunes = new Ee();
  }
  /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */
  create(e, o, i) {
    return new this.constructable({
      data: e,
      block: o,
      readOnly: i,
      api: this.api,
      config: this.settings
    });
  }
  /**
   * Returns true if read-only mode is supported by Tool
   */
  get isReadOnlySupported() {
    return this.constructable[So.IsReadOnlySupported] === !0;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[So.IsEnabledLineBreaks];
  }
  /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */
  get toolbox() {
    const e = this.constructable[So.Toolbox], o = this.config[pi.Toolbox];
    if (!He(e) && o !== !1)
      return o ? Array.isArray(e) ? Array.isArray(o) ? o.map((i, s) => {
        const n = e[s];
        return n ? {
          ...n,
          ...i
        } : i;
      }) : [o] : Array.isArray(o) ? o : [
        {
          ...e,
          ...o
        }
      ] : Array.isArray(e) ? e : [e];
  }
  /**
   * Returns Tool conversion configuration
   */
  get conversionConfig() {
    return this.constructable[So.ConversionConfig];
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[pi.EnabledInlineTools] || !1;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[pi.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[So.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, o = this.baseSanitizeConfig;
    if (He(e))
      return o;
    const i = {};
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s)) {
        const n = e[s];
        je(n) ? i[s] = Object.assign({}, o, n) : i[s] = n;
      }
    return i;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((o) => Object.assign(e, o.sanitizeConfig)), Array.from(this.tunes.values()).forEach((o) => Object.assign(e, o.sanitizeConfig)), e;
  }
}
Or([
  Mo
], Vt.prototype, "sanitizeConfig");
Or([
  Mo
], Vt.prototype, "baseSanitizeConfig");
class Vu {
  /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
  constructor(e, o, i) {
    this.api = i, this.config = e, this.editorConfig = o;
  }
  /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */
  get(e) {
    const { class: o, isInternal: i = !1, ...s } = this.config[e], n = this.getConstructor(o), r = o[ft.IsTune];
    return new n({
      name: e,
      constructable: o,
      config: s,
      api: this.api.getMethodsForTool(e, r),
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: i
    });
  }
  /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */
  getConstructor(e) {
    switch (!0) {
      case e[$t.IsInline]:
        return zu;
      case e[ft.IsTune]:
        return Uu;
      default:
        return Vt;
    }
  }
}
class Ar {
  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Kd,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  /**
   * Handle clicks on 'move down' button
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(e + 1);
    if (!o)
      throw new Error("Unable to move Block down since it is already the last");
    const i = o.holder, s = i.getBoundingClientRect();
    let n = Math.abs(window.innerHeight - i.offsetHeight);
    s.top < window.innerHeight && (n = window.scrollY + i.offsetHeight), window.scrollTo(0, n), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
Ar.isTune = !0;
class Lr {
  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Jd,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick()
      }
    };
  }
  /**
   * Delete block conditions passed
   */
  handleClick() {
    this.api.blocks.delete();
  }
}
Lr.isTune = !0;
class Nr {
  /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Xd,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  /**
   * Move current block up
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(e), i = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !o || !i)
      throw new Error("Unable to move Block up since it is already the first");
    const s = o.holder, n = i.holder, r = s.getBoundingClientRect(), a = n.getBoundingClientRect();
    let c;
    a.top > 0 ? c = Math.abs(r.top) - Math.abs(a.top) : c = Math.abs(r.top) + a.height, window.scrollBy(0, -1 * c), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
Nr.isTune = !0;
var Ku = Object.defineProperty, Yu = Object.getOwnPropertyDescriptor, Gu = (t, e, o, i) => {
  for (var s = Yu(e, o), n = t.length - 1, r; n >= 0; n--)
    (r = t[n]) && (s = r(e, o, s) || s);
  return s && Ku(e, o, s), s;
};
class Mr extends Q {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new Ee(), this.toolsUnavailable = new Ee();
  }
  /**
   * Returns available Tools
   */
  get available() {
    return this.toolsAvailable;
  }
  /**
   * Returns unavailable Tools
   */
  get unavailable() {
    return this.toolsUnavailable;
  }
  /**
   * Return Tools for the Inline Toolbar
   */
  get inlineTools() {
    return this.available.inlineTools;
  }
  /**
   * Return editor block tools
   */
  get blockTools() {
    return this.available.blockTools;
  }
  /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */
  get blockTunes() {
    return this.available.blockTunes;
  }
  /**
   * Returns default Tool object
   */
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  /**
   * Returns internal tools
   */
  get internal() {
    return this.available.internalTools;
  }
  /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */
  async prepare() {
    if (this.validateTools(), this.config.tools = pt({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new Vu(e, this.config, this.Editor.API);
    const o = this.getListOfPrepareFunctions(e);
    if (o.length === 0)
      return Promise.resolve();
    await Zl(o, (i) => {
      this.toolPrepareMethodSuccess(i);
    }, (i) => {
      this.toolPrepareMethodFallback(i);
    }), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((o) => {
      Object.assign(e, o.sanitizeConfig);
    }), e;
  }
  /**
   * Calls each Tool reset method to clean up anything set by Tool
   */
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      ge(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      convertTo: {
        class: Pr,
        isInternal: !0
      },
      link: {
        class: Wt,
        isInternal: !0
      },
      bold: {
        class: Ut,
        isInternal: !0
      },
      italic: {
        class: qt,
        isInternal: !0
      },
      paragraph: {
        class: zt,
        inlineToolbar: !0,
        isInternal: !0
      },
      stub: {
        class: Ir,
        isInternal: !0
      },
      moveUp: {
        class: Nr,
        isInternal: !0
      },
      delete: {
        class: Lr,
        isInternal: !0
      },
      moveDown: {
        class: Ar,
        isInternal: !0
      }
    };
  }
  /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */
  toolPrepareMethodSuccess(e) {
    const o = this.factory.get(e.toolName);
    if (o.isInline()) {
      const i = ["render"].filter((s) => !o.create()[s]);
      if (i.length) {
        ne(
          `Incorrect Inline Tool: ${o.name}. Some of required methods is not implemented %o`,
          "warn",
          i
        ), this.toolsUnavailable.set(o.name, o);
        return;
      }
    }
    this.toolsAvailable.set(o.name, o);
  }
  /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */
  getListOfPrepareFunctions(e) {
    const o = [];
    return Object.entries(e).forEach(([i, s]) => {
      o.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: ge(s.class.prepare) ? s.class.prepare : () => {
        },
        data: {
          toolName: i,
          config: s.config
        }
      });
    }), o;
  }
  /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== !1) {
      if (e.enabledInlineTools === !0) {
        e.inlineTools = new Ee(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((o) => [o, this.inlineTools.get(o)]) : Array.from(this.inlineTools.entries())
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new Ee(
        /** Prepend ConvertTo Inline Tool */
        ["convertTo", ...e.enabledInlineTools].map((o) => [o, this.inlineTools.get(o)])
      ));
    }
  }
  /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== !1) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const o = new Ee(
          e.enabledBlockTunes.map((i) => [i, this.blockTunes.get(i)])
        );
        e.tunes = new Ee([...o, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const o = new Ee(
          this.config.tunes.map((i) => [i, this.blockTunes.get(i)])
        );
        e.tunes = new Ee([...o, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools)
          return;
        const o = this.config.tools[e];
        if (!ge(o) && !ge(o.class))
          throw Error(
            `Tool «${e}» must be a constructor function or an object with function in the «class» property`
          );
      }
  }
  /**
   * Unify tools config
   */
  prepareConfig() {
    const e = {};
    for (const o in this.config.tools)
      je(this.config.tools[o]) ? e[o] = this.config.tools[o] : e[o] = { class: this.config.tools[o] };
    return e;
  }
}
Gu([
  Mo
], Mr.prototype, "getAllInlineToolsSanitizeConfig");
const Xu = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}
`;
class Ju extends Q {
  constructor() {
    super(...arguments), this.isMobile = !1, this.contentRectCache = void 0, this.resizeDebouncer = hn(() => {
      this.windowResize();
    }, 200);
  }
  /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */
  get contentRect() {
    if (this.contentRectCache)
      return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${we.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  /**
   * Making main interface
   */
  async prepare() {
    this.setIsMobile(), this.make(), this.loadStyles();
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : window.requestIdleCallback(() => {
      this.enableModuleBindings();
    }, {
      timeout: 2e3
    });
  }
  /**
   * Check if Editor is empty and set CSS class to wrapper
   */
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
  }
  /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: o, InlineToolbar: i } = this.Editor;
    return !!(o.opened || i.opened || e.toolbox.opened);
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, o]) => o.flipper instanceof yo).some(([e, o]) => o.flipper.hasFocus());
  }
  /**
   * Clean editor`s UI
   */
  destroy() {
    this.nodes.holder.innerHTML = "";
  }
  /**
   * Close all Editor's toolbars
   */
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: o, InlineToolbar: i } = this.Editor;
    o.close(), i.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and save the result
   */
  setIsMobile() {
    const e = window.innerWidth < Qn;
    e !== this.isMobile && this.eventsDispatcher.emit(Go, {
      isEnabled: this.isMobile
    }), this.isMobile = e;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    this.nodes.holder = b.getHolder(this.config.holder), this.nodes.wrapper = b.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = b.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (b.get(e))
      return;
    const o = b.make("style", null, {
      id: e,
      textContent: Xu.toString()
    });
    this.config.style && !He(this.config.style) && this.config.style.nonce && o.setAttribute("nonce", this.config.style.nonce), b.prepend(document.head, o);
  }
  /**
   * Bind events on the Editor.js interface
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (o) => {
      this.redactorClicked(o);
    }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (o) => {
      this.documentTouched(o);
    }, {
      capture: !0,
      passive: !0
    }), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (o) => {
      this.documentTouched(o);
    }, {
      capture: !0,
      passive: !0
    }), this.readOnlyMutableListeners.on(document, "keydown", (o) => {
      this.documentKeydown(o);
    }, !0), this.readOnlyMutableListeners.on(document, "mousedown", (o) => {
      this.documentClicked(o);
    }, !0);
    const e = hn(() => {
      this.selectionChanged();
    }, Au);
    this.readOnlyMutableListeners.on(document, "selectionchange", e, !0), this.readOnlyMutableListeners.on(window, "resize", () => {
      this.resizeDebouncer();
    }, {
      passive: !0
    }), this.watchBlockHoveredEvents(), this.enableInputsEmptyMark();
  }
  /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", gt((o) => {
      const i = o.target.closest(".ce-block");
      this.Editor.BlockSelection.anyBlockSelected || i && e !== i && (e = i, this.eventsDispatcher.emit(xr, {
        block: this.Editor.BlockManager.getBlockByChildNode(i)
      }));
    }, 20), {
      passive: !0
    });
  }
  /**
   * Unbind events on the Editor.js interface
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Resize window handler
   */
  windowResize() {
    this.contentRectCache = null, this.setIsMobile();
  }
  /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  documentKeydown(e) {
    switch (e.keyCode) {
      case Y.ENTER:
        this.enterPressed(e);
        break;
      case Y.BACKSPACE:
      case Y.DELETE:
        this.backspacePressed(e);
        break;
      case Y.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  defaultBehaviour(e) {
    const { currentBlock: o } = this.Editor.BlockManager, i = e.target.closest(`.${this.CSS.editorWrapper}`), s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (o !== void 0 && i === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    i || o && s || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: o, BlockSelection: i, Caret: s } = this.Editor;
    if (i.anyBlockSelected && !z.isSelectionExists) {
      const n = o.removeSelectedBlocks(), r = o.insertDefaultBlockAtIndex(n, !0);
      s.setToBlock(r, s.positions.START), i.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: o, BlockSelection: i } = this.Editor;
    if (this.someToolbarOpened)
      return;
    const s = o.currentBlockIndex >= 0;
    if (i.anyBlockSelected && !z.isSelectionExists) {
      i.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && s && e.target.tagName === "BODY") {
      const n = this.Editor.BlockManager.insert();
      e.preventDefault(), this.Editor.Caret.setToBlock(n), this.Editor.Toolbar.moveAndOpen(n);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    var o, i;
    if (!e.isTrusted)
      return;
    const s = e.target;
    this.nodes.holder.contains(s) || z.isAtEditor || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
    const n = (o = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : o.contains(s), r = (i = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : i.contains(s), a = n || r;
    if (this.Editor.BlockSettings.opened && !a) {
      this.Editor.BlockSettings.close();
      const c = this.Editor.BlockManager.getBlockByChildNode(s);
      this.Editor.Toolbar.moveAndOpen(c);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param {MouseEvent | TouchEvent} event - touch or mouse event
   */
  documentTouched(e) {
    let o = e.target;
    if (o === this.nodes.redactor) {
      const i = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, s = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      o = document.elementFromPoint(i, s);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(o);
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */
  redactorClicked(e) {
    if (!z.isCollapsed)
      return;
    const o = e.target, i = e.metaKey || e.ctrlKey;
    if (b.isAnchor(o) && i) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const s = o.getAttribute("href"), n = id(s);
      sd(n);
      return;
    }
    this.processBottomZoneClick(e);
  }
  /**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */
  processBottomZoneClick(e) {
    const o = this.Editor.BlockManager.getBlockByIndex(-1), i = b.offset(o.holder).bottom, s = e.pageY, { BlockSelection: n } = this.Editor;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !n.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    i < s) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const { BlockManager: r, Caret: a, Toolbar: c } = this.Editor;
      (!r.lastBlock.tool.isDefault || !r.lastBlock.isEmpty) && r.insertAtEnd(), a.setToTheLastBlock(), c.moveAndOpen(r.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: o } = this.Editor, i = z.anchorElement;
    if (e.isCrossBlockSelectionStarted && o.anyBlockSelected && z.get().removeAllRanges(), !i) {
      z.range || this.Editor.InlineToolbar.close();
      return;
    }
    const s = i.closest(`.${we.CSS.content}`);
    (s === null || s.closest(`.${z.CSS.editorWrapper}`) !== this.nodes.wrapper) && (this.Editor.InlineToolbar.containsNode(i) || this.Editor.InlineToolbar.close(), i.dataset.inlineToolbar !== "true") || (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(i), this.Editor.InlineToolbar.tryToShow(!0));
  }
  /**
   * Editor.js provides and ability to show placeholders for empty contenteditable elements
   *
   * This method watches for input and focus events and toggles 'data-empty' attribute
   * to workaroud the case, when inputs contains only <br>s and has no visible content
   * Then, CSS could rely on this attribute to show placeholders
   */
  enableInputsEmptyMark() {
    function e(o) {
      const i = o.target;
      er(i);
    }
    this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
  }
}
const Zu = {
  // API Modules
  BlocksAPI: md,
  CaretAPI: _d,
  EventsAPI: fd,
  I18nAPI: At,
  API: yd,
  InlineToolbarAPI: bd,
  ListenersAPI: kd,
  NotifierAPI: Sd,
  ReadOnlyAPI: Ed,
  SanitizerAPI: Ad,
  SaverAPI: Ld,
  SelectionAPI: Nd,
  ToolsAPI: Md,
  StylesAPI: Fd,
  ToolbarAPI: Dd,
  TooltipAPI: Ud,
  UiAPI: qd,
  // Toolbar Modules
  BlockSettings: vu,
  Toolbar: xu,
  InlineToolbar: Su,
  // Modules
  BlockEvents: Eu,
  BlockManager: Tu,
  BlockSelection: Pu,
  Caret: Ci,
  CrossBlockSelection: Iu,
  DragNDrop: Ou,
  ModificationsObserver: Nu,
  Paste: Mu,
  ReadOnly: Fu,
  RectangleSelection: Ko,
  Renderer: Du,
  Saver: Ru,
  Tools: Mr,
  UI: Ju
};
class Qu {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new Qo();
    let o, i;
    this.isReady = new Promise((s, n) => {
      o = s, i = n;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const { BlockManager: s, Caret: n, UI: r, ModificationsObserver: a } = this.moduleInstances;
      r.checkEmptiness(), a.enable(), this.configuration.autofocus && n.setToBlock(s.blocks[0], n.positions.START), o();
    }).catch((s) => {
      ne(`Editor.js is not ready because of ${s}`, "error"), i(s);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var o, i;
    je(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, ht(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = Xn.VERBOSE), Xl(this.config.logLevel), ht(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const s = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
      p: !0,
      b: !0,
      a: !0
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (He(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [s] }), this.config.readOnly = this.config.readOnly || !1, (o = this.config.i18n) != null && o.messages && Pe.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
  }
  /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */
  get configuration() {
    return this.config;
  }
  /**
   * Checks for required fields in Editor's config
   */
  validate() {
    const { holderId: e, holder: o } = this.config;
    if (e && o)
      throw Error("«holderId» and «holder» param can't assign at the same time.");
    if (Qe(o) && !b.get(o))
      throw Error(`element with ID «${o}» is missing. Pass correct holder's ID.`);
    if (o && je(o) && !b.isElement(o))
      throw Error("«holder» value must be an Element node");
  }
  /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */
  init() {
    this.constructModules(), this.configureModules();
  }
  /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly"
    ].reduce(
      (e, o) => e.then(async () => {
        try {
          await this.moduleInstances[o].prepare();
        } catch (i) {
          if (i instanceof tr)
            throw new Error(i.message);
          ne(`Module ${o} was skipped because of %o`, "warn", i);
        }
      }),
      Promise.resolve()
    );
  }
  /**
   * Render initial data
   */
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  /**
   * Make modules instances and save it to the @property this.moduleInstances
   */
  constructModules() {
    Object.entries(Zu).forEach(([e, o]) => {
      try {
        this.moduleInstances[e] = new o({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (i) {
        ne("[constructModules]", `Module ${e} skipped because`, "error", i);
      }
    });
  }
  /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */
  getModulesDiff(e) {
    const o = {};
    for (const i in this.moduleInstances)
      i !== e && (o[i] = this.moduleInstances[i]);
    return o;
  }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */
class eg {
  /** Editor version */
  static get version() {
    return "2.30.7";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let o = () => {
    };
    je(e) && ge(e.onReady) && (o = e.onReady);
    const i = new Qu(e);
    this.isReady = i.isReady.then(() => {
      this.exportAPI(i), o();
    });
  }
  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  exportAPI(e) {
    const o = ["configuration"], i = () => {
      Object.values(e.moduleInstances).forEach((s) => {
        ge(s.destroy) && s.destroy(), s.listeners.removeAll();
      }), zd(), e = null;
      for (const s in this)
        Object.prototype.hasOwnProperty.call(this, s) && delete this[s];
      Object.setPrototypeOf(this, null);
    };
    o.forEach((s) => {
      this[s] = e[s];
    }), this.destroy = i, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([s, n]) => {
      Object.entries(n).forEach(([r, a]) => {
        this[a] = e.moduleInstances.API.methods[s][r];
      });
    });
  }
}
var Fr = { exports: {} };
(function(t, e) {
  (function(o, i) {
    t.exports = i();
  })(self, () => (() => {
    var o = { 523: (r, a, c) => {
      c.d(a, { A: () => v });
      var l = c(601), d = c.n(l), u = c(314), g = c.n(u)()(d());
      g.push([r.id, `.ce-block--drop-target .ce-block__content:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -20px;
  margin-top: -1px;
  height: 8px;
  width: 8px;
  border: solid #a0a0a0;
  border-width: 1px 1px 0 0;
  -webkit-transform-origin: right;
  transform-origin: right;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.ce-block--drop-target .ce-block__content:after {
  background: none;
}
`, ""]);
      const v = g;
    }, 314: (r) => {
      r.exports = function(a) {
        var c = [];
        return c.toString = function() {
          return this.map(function(l) {
            var d = "", u = l[5] !== void 0;
            return l[4] && (d += "@supports (".concat(l[4], ") {")), l[2] && (d += "@media ".concat(l[2], " {")), u && (d += "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")), d += a(l), u && (d += "}"), l[2] && (d += "}"), l[4] && (d += "}"), d;
          }).join("");
        }, c.i = function(l, d, u, g, v) {
          typeof l == "string" && (l = [[null, l, void 0]]);
          var h = {};
          if (u) for (var f = 0; f < this.length; f++) {
            var I = this[f][0];
            I != null && (h[I] = !0);
          }
          for (var L = 0; L < l.length; L++) {
            var E = [].concat(l[L]);
            u && h[E[0]] || (v !== void 0 && (E[5] === void 0 || (E[1] = "@layer".concat(E[5].length > 0 ? " ".concat(E[5]) : "", " {").concat(E[1], "}")), E[5] = v), d && (E[2] && (E[1] = "@media ".concat(E[2], " {").concat(E[1], "}")), E[2] = d), g && (E[4] ? (E[1] = "@supports (".concat(E[4], ") {").concat(E[1], "}"), E[4] = g) : E[4] = "".concat(g)), c.push(E));
          }
        }, c;
      };
    }, 601: (r) => {
      r.exports = function(a) {
        return a[1];
      };
    }, 72: (r) => {
      var a = [];
      function c(u) {
        for (var g = -1, v = 0; v < a.length; v++) if (a[v].identifier === u) {
          g = v;
          break;
        }
        return g;
      }
      function l(u, g) {
        for (var v = {}, h = [], f = 0; f < u.length; f++) {
          var I = u[f], L = g.base ? I[0] + g.base : I[0], E = v[L] || 0, $ = "".concat(L, " ").concat(E);
          v[L] = E + 1;
          var D = c($), A = { css: I[1], media: I[2], sourceMap: I[3], supports: I[4], layer: I[5] };
          if (D !== -1) a[D].references++, a[D].updater(A);
          else {
            var B = d(A, g);
            g.byIndex = f, a.splice(f, 0, { identifier: $, updater: B, references: 1 });
          }
          h.push($);
        }
        return h;
      }
      function d(u, g) {
        var v = g.domAPI(g);
        return v.update(u), function(h) {
          if (h) {
            if (h.css === u.css && h.media === u.media && h.sourceMap === u.sourceMap && h.supports === u.supports && h.layer === u.layer) return;
            v.update(u = h);
          } else v.remove();
        };
      }
      r.exports = function(u, g) {
        var v = l(u = u || [], g = g || {});
        return function(h) {
          h = h || [];
          for (var f = 0; f < v.length; f++) {
            var I = c(v[f]);
            a[I].references--;
          }
          for (var L = l(h, g), E = 0; E < v.length; E++) {
            var $ = c(v[E]);
            a[$].references === 0 && (a[$].updater(), a.splice($, 1));
          }
          v = L;
        };
      };
    }, 659: (r) => {
      var a = {};
      r.exports = function(c, l) {
        var d = function(u) {
          if (a[u] === void 0) {
            var g = document.querySelector(u);
            if (window.HTMLIFrameElement && g instanceof window.HTMLIFrameElement) try {
              g = g.contentDocument.head;
            } catch {
              g = null;
            }
            a[u] = g;
          }
          return a[u];
        }(c);
        if (!d) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        d.appendChild(l);
      };
    }, 540: (r) => {
      r.exports = function(a) {
        var c = document.createElement("style");
        return a.setAttributes(c, a.attributes), a.insert(c, a.options), c;
      };
    }, 56: (r, a, c) => {
      r.exports = function(l) {
        var d = c.nc;
        d && l.setAttribute("nonce", d);
      };
    }, 825: (r) => {
      r.exports = function(a) {
        if (typeof document > "u") return { update: function() {
        }, remove: function() {
        } };
        var c = a.insertStyleElement(a);
        return { update: function(l) {
          (function(d, u, g) {
            var v = "";
            g.supports && (v += "@supports (".concat(g.supports, ") {")), g.media && (v += "@media ".concat(g.media, " {"));
            var h = g.layer !== void 0;
            h && (v += "@layer".concat(g.layer.length > 0 ? " ".concat(g.layer) : "", " {")), v += g.css, h && (v += "}"), g.media && (v += "}"), g.supports && (v += "}");
            var f = g.sourceMap;
            f && typeof btoa < "u" && (v += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(f)))), " */")), u.styleTagTransform(v, d, u.options);
          })(c, a, l);
        }, remove: function() {
          (function(l) {
            if (l.parentNode === null) return !1;
            l.parentNode.removeChild(l);
          })(c);
        } };
      };
    }, 113: (r) => {
      r.exports = function(a, c) {
        if (c.styleSheet) c.styleSheet.cssText = a;
        else {
          for (; c.firstChild; ) c.removeChild(c.firstChild);
          c.appendChild(document.createTextNode(a));
        }
      };
    } }, i = {};
    function s(r) {
      var a = i[r];
      if (a !== void 0) return a.exports;
      var c = i[r] = { id: r, exports: {} };
      return o[r](c, c.exports, s), c.exports;
    }
    s.n = (r) => {
      var a = r && r.__esModule ? () => r.default : () => r;
      return s.d(a, { a }), a;
    }, s.d = (r, a) => {
      for (var c in a) s.o(a, c) && !s.o(r, c) && Object.defineProperty(r, c, { enumerable: !0, get: a[c] });
    }, s.o = (r, a) => Object.prototype.hasOwnProperty.call(r, a), s.nc = void 0;
    var n = {};
    return (() => {
      s.d(n, { default: () => C });
      var r = s(72), a = s.n(r), c = s(825), l = s.n(c), d = s(659), u = s.n(d), g = s(56), v = s.n(g), h = s(540), f = s.n(h), I = s(113), L = s.n(I), E = s(523), $ = {};
      function D(x) {
        return D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(j) {
          return typeof j;
        } : function(j) {
          return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j;
        }, D(x);
      }
      function A(x, j) {
        for (var _ = 0; _ < j.length; _++) {
          var m = j[_];
          m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(x, B(m.key), m);
        }
      }
      function B(x) {
        var j = function(_, m) {
          if (D(_) != "object" || !_) return _;
          var k = _[Symbol.toPrimitive];
          if (k !== void 0) {
            var y = k.call(_, "string");
            if (D(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(_);
        }(x);
        return D(j) == "symbol" ? j : j + "";
      }
      $.styleTagTransform = L(), $.setAttributes = v(), $.insert = u().bind(null, "head"), $.domAPI = l(), $.insertStyleElement = f(), a()(E.A, $), E.A && E.A.locals && E.A.locals;
      var C = function() {
        return x = function m(k, y) {
          var P = k.configuration, N = k.blocks, q = k.toolbar, oe = k.save;
          (function(V, re) {
            if (!(V instanceof re)) throw new TypeError("Cannot call a class as a function");
          })(this, m), this.toolbar = q, this.borderStyle = y || "1px dashed #aaa", this.api = N, this.holder = typeof P.holder == "string" ? document.getElementById(P.holder) : P.holder, this.readOnly = P.readOnly, this.startBlock = null, this.endBlock = null, this.save = oe, this.setDragListener(), this.setDropListener();
        }, _ = [{ key: "isReadOnlySupported", get: function() {
          return !0;
        } }], (j = [{ key: "setElementCursor", value: function(m) {
          if (m) {
            var k = document.createRange(), y = window.getSelection();
            k.setStart(m.childNodes[0], 0), k.collapse(!0), y.removeAllRanges(), y.addRange(k), m.focus();
          }
        } }, { key: "setDragListener", value: function() {
          var m = this;
          if (!this.readOnly) {
            var k = this.holder.querySelector(".ce-toolbar__settings-btn");
            if (k) this.initializeDragListener(k);
            else {
              var y = new MutationObserver(function(P, N) {
                var q = m.holder.querySelector(".ce-toolbar__settings-btn");
                q && (m.initializeDragListener(q), N.disconnect());
              });
              y.observe(this.holder, { childList: !0, subtree: !0 });
            }
          }
        } }, { key: "initializeDragListener", value: function(m) {
          var k = this;
          m.setAttribute("draggable", "true"), m.addEventListener("dragstart", function() {
            k.startBlock = k.api.getCurrentBlockIndex();
          }), m.addEventListener("drag", function() {
            if (k.toolbar.close(), !k.isTheOnlyBlock()) {
              var y = k.holder.querySelectorAll(".ce-block"), P = k.holder.querySelector(".ce-block--drop-target");
              k.setElementCursor(P), k.setBorderBlocks(y, P);
            }
          });
        } }, { key: "setBorderBlocks", value: function(m, k) {
          var y = this;
          Object.values(m).forEach(function(P) {
            var N = P.querySelector(".ce-block__content");
            P !== k ? (N.style.removeProperty("border-top"), N.style.removeProperty("border-bottom")) : Object.keys(m).find(function(q) {
              return m[q] === k;
            }) > y.startBlock ? N.style.borderBottom = y.borderStyle : N.style.borderTop = y.borderStyle;
          });
        } }, { key: "setDropListener", value: function() {
          var m = this;
          document.addEventListener("drop", function(k) {
            var y = k.target;
            if (m.holder.contains(y) && m.startBlock !== null) {
              var P = m.getDropTarget(y);
              if (P) {
                var N = P.querySelector(".ce-block__content");
                N.style.removeProperty("border-top"), N.style.removeProperty("border-bottom"), m.endBlock = m.getTargetPosition(P), m.moveBlocks();
              }
            }
            m.startBlock = null;
          });
        } }, { key: "getDropTarget", value: function(m) {
          return m.classList.contains("ce-block") ? m : m.closest(".ce-block");
        } }, { key: "getTargetPosition", value: function(m) {
          return Array.from(m.parentNode.children).indexOf(m);
        } }, { key: "isTheOnlyBlock", value: function() {
          return this.api.getBlocksCount() === 1;
        } }, { key: "moveBlocks", value: function() {
          this.isTheOnlyBlock() || this.api.move(this.endBlock, this.startBlock);
        } }]) && A(x.prototype, j), _ && A(x, _), Object.defineProperty(x, "prototype", { writable: !1 }), x;
        var x, j, _;
      }();
    })(), n.default;
  })());
})(Fr);
var og = Fr.exports;
const ig = /* @__PURE__ */ Sn(og);
var Dr = { exports: {} };
/*! For license information please see bundle.js.LICENSE.txt */
(function(t, e) {
  (function(o, i) {
    t.exports = i();
  })(self, () => (() => {
    var o = { 917: function(r, a) {
      var c, l;
      c = function(d) {
        var u = /* @__PURE__ */ function() {
          function v(h, f) {
            for (var I = 0; I < f.length; I++) {
              var L = f[I];
              L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(h, L.key, L);
            }
          }
          return function(h, f, I) {
            return f && v(h.prototype, f), I && v(h, I), h;
          };
        }(), g = function() {
          function v(h) {
            (function(f, I) {
              if (!(f instanceof I)) throw new TypeError("Cannot call a class as a function");
            })(this, v), this.target = h, this.isContentEditable = h && h.contentEditable;
          }
          return u(v, [{ key: "getPos", value: function() {
            if (document.activeElement !== this.target) return -1;
            if (this.isContentEditable === "true") {
              this.target.focus();
              var h = document.getSelection().getRangeAt(0), f = h.cloneRange();
              return f.selectNodeContents(this.target), f.setEnd(h.endContainer, h.endOffset), f.toString().length;
            }
            return this.target.selectionStart;
          } }, { key: "setPos", value: function(h) {
            if (this.isContentEditable === "true") {
              if (h >= 0) {
                var f = window.getSelection(), I = this.createRange(this.target, { count: h });
                I && (I.collapse(!1), f.removeAllRanges(), f.addRange(I));
              }
            } else this.target.setSelectionRange(h, h);
          } }, { key: "createRange", value: function(h, f, I) {
            if (I || ((I = document.createRange()).selectNode(h), I.setStart(h, 0)), f.count === 0) I.setEnd(h, f.count);
            else if (h && f.count > 0) if (h.nodeType === Node.TEXT_NODE) h.textContent.length < f.count ? f.count -= h.textContent.length : (I.setEnd(h, f.count), f.count = 0);
            else for (var L = 0; L < h.childNodes.length && (I = this.createRange(h.childNodes[L], f, I), f.count !== 0); L++) ;
            return I;
          } }]), v;
        }();
        d.exports = g;
      }, (l = c.apply(a, [r])) === void 0 || (r.exports = l);
    }, 442: (r, a, c) => {
      r.exports = c(917);
    }, 633: (r, a, c) => {
      var l = c(738).default;
      function d() {
        r.exports = d = function() {
          return g;
        }, r.exports.__esModule = !0, r.exports.default = r.exports;
        var u, g = {}, v = Object.prototype, h = v.hasOwnProperty, f = Object.defineProperty || function(S, w, O) {
          S[w] = O.value;
        }, I = typeof Symbol == "function" ? Symbol : {}, L = I.iterator || "@@iterator", E = I.asyncIterator || "@@asyncIterator", $ = I.toStringTag || "@@toStringTag";
        function D(S, w, O) {
          return Object.defineProperty(S, w, { value: O, enumerable: !0, configurable: !0, writable: !0 }), S[w];
        }
        try {
          D({}, "");
        } catch {
          D = function(w, O, U) {
            return w[O] = U;
          };
        }
        function A(S, w, O, U) {
          var F = w && w.prototype instanceof k ? w : k, X = Object.create(F.prototype), me = new Se(U || []);
          return f(X, "_invoke", { value: pe(S, O, me) }), X;
        }
        function B(S, w, O) {
          try {
            return { type: "normal", arg: S.call(w, O) };
          } catch (U) {
            return { type: "throw", arg: U };
          }
        }
        g.wrap = A;
        var C = "suspendedStart", x = "suspendedYield", j = "executing", _ = "completed", m = {};
        function k() {
        }
        function y() {
        }
        function P() {
        }
        var N = {};
        D(N, L, function() {
          return this;
        });
        var q = Object.getPrototypeOf, oe = q && q(q(le([])));
        oe && oe !== v && h.call(oe, L) && (N = oe);
        var V = P.prototype = k.prototype = Object.create(N);
        function re(S) {
          ["next", "throw", "return"].forEach(function(w) {
            D(S, w, function(O) {
              return this._invoke(w, O);
            });
          });
        }
        function ue(S, w) {
          function O(F, X, me, Ce) {
            var be = B(S[F], S, X);
            if (be.type !== "throw") {
              var Fe = be.arg, eo = Fe.value;
              return eo && l(eo) == "object" && h.call(eo, "__await") ? w.resolve(eo.__await).then(function(qe) {
                O("next", qe, me, Ce);
              }, function(qe) {
                O("throw", qe, me, Ce);
              }) : w.resolve(eo).then(function(qe) {
                Fe.value = qe, me(Fe);
              }, function(qe) {
                return O("throw", qe, me, Ce);
              });
            }
            Ce(be.arg);
          }
          var U;
          f(this, "_invoke", { value: function(F, X) {
            function me() {
              return new w(function(Ce, be) {
                O(F, X, Ce, be);
              });
            }
            return U = U ? U.then(me, me) : me();
          } });
        }
        function pe(S, w, O) {
          var U = C;
          return function(F, X) {
            if (U === j) throw Error("Generator is already running");
            if (U === _) {
              if (F === "throw") throw X;
              return { value: u, done: !0 };
            }
            for (O.method = F, O.arg = X; ; ) {
              var me = O.delegate;
              if (me) {
                var Ce = W(me, O);
                if (Ce) {
                  if (Ce === m) continue;
                  return Ce;
                }
              }
              if (O.method === "next") O.sent = O._sent = O.arg;
              else if (O.method === "throw") {
                if (U === C) throw U = _, O.arg;
                O.dispatchException(O.arg);
              } else O.method === "return" && O.abrupt("return", O.arg);
              U = j;
              var be = B(S, w, O);
              if (be.type === "normal") {
                if (U = O.done ? _ : x, be.arg === m) continue;
                return { value: be.arg, done: O.done };
              }
              be.type === "throw" && (U = _, O.method = "throw", O.arg = be.arg);
            }
          };
        }
        function W(S, w) {
          var O = w.method, U = S.iterator[O];
          if (U === u) return w.delegate = null, O === "throw" && S.iterator.return && (w.method = "return", w.arg = u, W(S, w), w.method === "throw") || O !== "return" && (w.method = "throw", w.arg = new TypeError("The iterator does not provide a '" + O + "' method")), m;
          var F = B(U, S.iterator, w.arg);
          if (F.type === "throw") return w.method = "throw", w.arg = F.arg, w.delegate = null, m;
          var X = F.arg;
          return X ? X.done ? (w[S.resultName] = X.value, w.next = S.nextLoc, w.method !== "return" && (w.method = "next", w.arg = u), w.delegate = null, m) : X : (w.method = "throw", w.arg = new TypeError("iterator result is not an object"), w.delegate = null, m);
        }
        function ie(S) {
          var w = { tryLoc: S[0] };
          1 in S && (w.catchLoc = S[1]), 2 in S && (w.finallyLoc = S[2], w.afterLoc = S[3]), this.tryEntries.push(w);
        }
        function xe(S) {
          var w = S.completion || {};
          w.type = "normal", delete w.arg, S.completion = w;
        }
        function Se(S) {
          this.tryEntries = [{ tryLoc: "root" }], S.forEach(ie, this), this.reset(!0);
        }
        function le(S) {
          if (S || S === "") {
            var w = S[L];
            if (w) return w.call(S);
            if (typeof S.next == "function") return S;
            if (!isNaN(S.length)) {
              var O = -1, U = function F() {
                for (; ++O < S.length; ) if (h.call(S, O)) return F.value = S[O], F.done = !1, F;
                return F.value = u, F.done = !0, F;
              };
              return U.next = U;
            }
          }
          throw new TypeError(l(S) + " is not iterable");
        }
        return y.prototype = P, f(V, "constructor", { value: P, configurable: !0 }), f(P, "constructor", { value: y, configurable: !0 }), y.displayName = D(P, $, "GeneratorFunction"), g.isGeneratorFunction = function(S) {
          var w = typeof S == "function" && S.constructor;
          return !!w && (w === y || (w.displayName || w.name) === "GeneratorFunction");
        }, g.mark = function(S) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(S, P) : (S.__proto__ = P, D(S, $, "GeneratorFunction")), S.prototype = Object.create(V), S;
        }, g.awrap = function(S) {
          return { __await: S };
        }, re(ue.prototype), D(ue.prototype, E, function() {
          return this;
        }), g.AsyncIterator = ue, g.async = function(S, w, O, U, F) {
          F === void 0 && (F = Promise);
          var X = new ue(A(S, w, O, U), F);
          return g.isGeneratorFunction(w) ? X : X.next().then(function(me) {
            return me.done ? me.value : X.next();
          });
        }, re(V), D(V, $, "Generator"), D(V, L, function() {
          return this;
        }), D(V, "toString", function() {
          return "[object Generator]";
        }), g.keys = function(S) {
          var w = Object(S), O = [];
          for (var U in w) O.push(U);
          return O.reverse(), function F() {
            for (; O.length; ) {
              var X = O.pop();
              if (X in w) return F.value = X, F.done = !1, F;
            }
            return F.done = !0, F;
          };
        }, g.values = le, Se.prototype = { constructor: Se, reset: function(S) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = u, this.done = !1, this.delegate = null, this.method = "next", this.arg = u, this.tryEntries.forEach(xe), !S) for (var w in this) w.charAt(0) === "t" && h.call(this, w) && !isNaN(+w.slice(1)) && (this[w] = u);
        }, stop: function() {
          this.done = !0;
          var S = this.tryEntries[0].completion;
          if (S.type === "throw") throw S.arg;
          return this.rval;
        }, dispatchException: function(S) {
          if (this.done) throw S;
          var w = this;
          function O(be, Fe) {
            return X.type = "throw", X.arg = S, w.next = be, Fe && (w.method = "next", w.arg = u), !!Fe;
          }
          for (var U = this.tryEntries.length - 1; U >= 0; --U) {
            var F = this.tryEntries[U], X = F.completion;
            if (F.tryLoc === "root") return O("end");
            if (F.tryLoc <= this.prev) {
              var me = h.call(F, "catchLoc"), Ce = h.call(F, "finallyLoc");
              if (me && Ce) {
                if (this.prev < F.catchLoc) return O(F.catchLoc, !0);
                if (this.prev < F.finallyLoc) return O(F.finallyLoc);
              } else if (me) {
                if (this.prev < F.catchLoc) return O(F.catchLoc, !0);
              } else {
                if (!Ce) throw Error("try statement without catch or finally");
                if (this.prev < F.finallyLoc) return O(F.finallyLoc);
              }
            }
          }
        }, abrupt: function(S, w) {
          for (var O = this.tryEntries.length - 1; O >= 0; --O) {
            var U = this.tryEntries[O];
            if (U.tryLoc <= this.prev && h.call(U, "finallyLoc") && this.prev < U.finallyLoc) {
              var F = U;
              break;
            }
          }
          F && (S === "break" || S === "continue") && F.tryLoc <= w && w <= F.finallyLoc && (F = null);
          var X = F ? F.completion : {};
          return X.type = S, X.arg = w, F ? (this.method = "next", this.next = F.finallyLoc, m) : this.complete(X);
        }, complete: function(S, w) {
          if (S.type === "throw") throw S.arg;
          return S.type === "break" || S.type === "continue" ? this.next = S.arg : S.type === "return" ? (this.rval = this.arg = S.arg, this.method = "return", this.next = "end") : S.type === "normal" && w && (this.next = w), m;
        }, finish: function(S) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var O = this.tryEntries[w];
            if (O.finallyLoc === S) return this.complete(O.completion, O.afterLoc), xe(O), m;
          }
        }, catch: function(S) {
          for (var w = this.tryEntries.length - 1; w >= 0; --w) {
            var O = this.tryEntries[w];
            if (O.tryLoc === S) {
              var U = O.completion;
              if (U.type === "throw") {
                var F = U.arg;
                xe(O);
              }
              return F;
            }
          }
          throw Error("illegal catch attempt");
        }, delegateYield: function(S, w, O) {
          return this.delegate = { iterator: le(S), resultName: w, nextLoc: O }, this.method === "next" && (this.arg = u), m;
        } }, g;
      }
      r.exports = d, r.exports.__esModule = !0, r.exports.default = r.exports;
    }, 738: (r) => {
      function a(c) {
        return r.exports = a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
          return typeof l;
        } : function(l) {
          return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
        }, r.exports.__esModule = !0, r.exports.default = r.exports, a(c);
      }
      r.exports = a, r.exports.__esModule = !0, r.exports.default = r.exports;
    }, 756: (r, a, c) => {
      var l = c(633)();
      r.exports = l;
      try {
        regeneratorRuntime = l;
      } catch {
        typeof globalThis == "object" ? globalThis.regeneratorRuntime = l : Function("r", "regeneratorRuntime = r")(l);
      }
    } }, i = {};
    function s(r) {
      var a = i[r];
      if (a !== void 0) return a.exports;
      var c = i[r] = { exports: {} };
      return o[r].call(c.exports, c, c.exports, s), c.exports;
    }
    s.n = (r) => {
      var a = r && r.__esModule ? () => r.default : () => r;
      return s.d(a, { a }), a;
    }, s.d = (r, a) => {
      for (var c in a) s.o(a, c) && !s.o(r, c) && Object.defineProperty(r, c, { enumerable: !0, get: a[c] });
    }, s.o = (r, a) => Object.prototype.hasOwnProperty.call(r, a);
    var n = {};
    return (() => {
      function r(A, B, C, x, j, _, m) {
        try {
          var k = A[_](m), y = k.value;
        } catch (P) {
          return void C(P);
        }
        k.done ? B(y) : Promise.resolve(y).then(x, j);
      }
      function a(A) {
        return function() {
          var B = this, C = arguments;
          return new Promise(function(x, j) {
            var _ = A.apply(B, C);
            function m(y) {
              r(_, x, j, m, k, "next", y);
            }
            function k(y) {
              r(_, x, j, m, k, "throw", y);
            }
            m(void 0);
          });
        };
      }
      function c(A) {
        return c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
          return typeof B;
        } : function(B) {
          return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
        }, c(A);
      }
      function l(A) {
        var B = function(C, x) {
          if (c(C) != "object" || !C) return C;
          var j = C[Symbol.toPrimitive];
          if (j !== void 0) {
            var _ = j.call(C, "string");
            if (c(_) != "object") return _;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(C);
        }(A);
        return c(B) == "symbol" ? B : B + "";
      }
      function d(A, B) {
        if (!(A instanceof B)) throw new TypeError("Cannot call a class as a function");
      }
      function u(A, B) {
        for (var C = 0; C < B.length; C++) {
          var x = B[C];
          x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(A, l(x.key), x);
        }
      }
      function g(A, B, C) {
        return B && u(A.prototype, B), C && u(A, C), Object.defineProperty(A, "prototype", { writable: !1 }), A;
      }
      s.d(n, { default: () => D });
      var v = s(756), h = s.n(v), f = s(442), I = s.n(f), L = function() {
        return g(function A(B, C, x) {
          d(this, A), this.holder = C, this.observer = null, this.debounceTimer = x, this.mutationDebouncer = this.debounce(function() {
            B();
          }, this.debounceTimer);
        }, [{ key: "setMutationObserver", value: function() {
          var A = this, B = this.holder.querySelector(".codex-editor__redactor");
          this.observer = new MutationObserver(function(C) {
            A.mutationHandler(C);
          }), this.observer.observe(B, { childList: !0, attributes: !0, subtree: !0, characterData: !0, characterDataOldValue: !0 });
        } }, { key: "mutationHandler", value: function(A) {
          var B = this, C = !1;
          A.forEach(function(x) {
            switch (x.type) {
              case "childList":
                x.target === B.holder ? B.onDestroy() : C = !0;
                break;
              case "characterData":
                C = !0;
                break;
              case "attributes":
                x.target.classList.contains("ce-block") || x.target.classList.contains("tc-toolbox") || (C = !0);
            }
          }), C && this.mutationDebouncer();
        } }, { key: "debounce", value: function(A, B) {
          var C, x = this;
          return function() {
            for (var j = arguments.length, _ = new Array(j), m = 0; m < j; m++) _[m] = arguments[m];
            var k = x;
            clearTimeout(C), C = setTimeout(function() {
              return A.apply(k, _);
            }, B);
          };
        } }, { key: "onDestroy", value: function() {
          var A = new CustomEvent("destroy");
          document.dispatchEvent(A), this.observer.disconnect();
        } }]);
      }();
      function E(A, B) {
        var C = Object.keys(A);
        if (Object.getOwnPropertySymbols) {
          var x = Object.getOwnPropertySymbols(A);
          B && (x = x.filter(function(j) {
            return Object.getOwnPropertyDescriptor(A, j).enumerable;
          })), C.push.apply(C, x);
        }
        return C;
      }
      function $(A) {
        for (var B = 1; B < arguments.length; B++) {
          var C = arguments[B] != null ? arguments[B] : {};
          B % 2 ? E(Object(C), !0).forEach(function(x) {
            var j, _, m;
            j = A, _ = x, m = C[x], (_ = l(_)) in j ? Object.defineProperty(j, _, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : j[_] = m;
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(C)) : E(Object(C)).forEach(function(x) {
            Object.defineProperty(A, x, Object.getOwnPropertyDescriptor(C, x));
          });
        }
        return A;
      }
      var D = function() {
        return g(function _(m) {
          var k = this, y = m.editor, P = m.config, N = P === void 0 ? {} : P, q = m.onUpdate, oe = m.maxLength;
          d(this, _);
          var V = { maxLength: 30, onUpdate: function() {
          }, config: { debounceTimer: 200, shortcuts: { undo: ["CMD+Z"], redo: ["CMD+Y", "CMD+SHIFT+Z"] } } }, re = y.blocks, ue = y.caret, pe = y.configuration, W = pe.holder, ie = pe.defaultBlock, xe = V.config.shortcuts, Se = N.shortcuts, le = $($({}, xe), Se), S = Array.isArray(le.undo) ? le.undo : [le.undo], w = Array.isArray(le.redo) ? le.redo : [le.redo], O = V.config.debounceTimer, U = N.debounceTimer, F = U === void 0 ? O : U;
          this.holder = typeof W == "string" ? document.getElementById(W) : W, this.editor = y, this.defaultBlock = ie, this.blocks = re, this.caret = ue, this.shouldSaveHistory = !0, this.readOnly = pe.readOnly, this.maxLength = oe || V.maxLength, this.onUpdate = q || V.onUpdate, this.config = { debounceTimer: F, shortcuts: { undo: S, redo: w } }, new L(function() {
            return k.registerChange();
          }, this.holder, this.config.debounceTimer).setMutationObserver(), this.setEventListeners(), this.initialItem = null, this.clear();
        }, [{ key: "truncate", value: function(_, m) {
          for (; _.length > m; ) _.shift();
        } }, { key: "initialize", value: function(_) {
          var m = "blocks" in _ ? _.blocks : _, k = { index: m.length - 1, state: m };
          this.stack[0] = k, this.initialItem = k;
        } }, { key: "clear", value: function() {
          this.stack = this.initialItem ? [this.initialItem] : [{ index: 0, state: [{ type: this.defaultBlock, data: {} }] }], this.position = 0, this.onUpdate();
        } }, { key: "setReadOnly", value: function() {
          var _ = this.holder.querySelector(".ce-toolbox");
          this.readOnly = !_;
        } }, { key: "registerChange", value: function() {
          var _ = this;
          this.setReadOnly(), this.readOnly || (this.editor && this.editor.save && this.shouldSaveHistory && this.editor.save().then(function(m) {
            _.editorDidUpdate(m.blocks) && _.save(m.blocks);
          }), this.shouldSaveHistory = !0);
        } }, { key: "editorDidUpdate", value: function(_) {
          var m = this.stack[this.position].state;
          return !!_.length && (_.length !== m.length || JSON.stringify(m) !== JSON.stringify(_));
        } }, { key: "save", value: function(_) {
          this.position >= this.maxLength && this.truncate(this.stack, this.maxLength), this.position = Math.min(this.position, this.stack.length - 1), this.stack = this.stack.slice(0, this.position + 1);
          var m = this.blocks.getCurrentBlockIndex(), k = this.blocks.getBlocksCount(), y = m;
          _[m] || (y -= k - _.length);
          var P = !_[y] || _[y].type !== "paragraph" && _[y].type !== "header" ? null : this.getCaretIndex(m);
          this.stack.push({ index: y, state: _, caretIndex: P }), this.position += 1, this.onUpdate();
        } }, { key: "getCaretIndex", value: function(_) {
          var m = this.holder.getElementsByClassName("ce-block__content");
          return new (I())(m[_].firstChild).getPos();
        } }, { key: "insertDeletedBlock", value: function(_, m, k) {
          for (var y = 0; y < _.length; y += 1) if (!m[y] || _[y].id !== m[y].id) {
            this.blocks.insert(_[y].type, _[y].data, {}, y, !0), this.caret.setToBlock(k, "end");
            break;
          }
        } }, { key: "blockWasDropped", value: function(_, m) {
          return _.length === m.length && _.some(function(k, y) {
            return k.id !== m[y].id;
          });
        } }, { key: "blockWasSkipped", value: function(_, m) {
          return _.length !== m.length;
        } }, { key: "contentChangedInNoFocusBlock", value: function(_, m) {
          return _ !== m;
        } }, { key: "blockWasDeleted", value: function(_, m) {
          return _.length > m.length;
        } }, { key: "contentWasCopied", value: function(_, m, k) {
          return Object.keys(_[k].data).length === 0 && JSON.stringify(m[k + 1]) !== JSON.stringify(_[k + 1]);
        } }, { key: "undo", value: (j = a(h().mark(function _() {
          var m, k, y, P, N, q, oe, V, re, ue, pe;
          return h().wrap(function(W) {
            for (; ; ) switch (W.prev = W.next) {
              case 0:
                if (!this.canUndo()) {
                  W.next = 47;
                  break;
                }
                if (m = this.stack[this.position], k = m.index, y = m.state, this.position -= 1, this.shouldSaveHistory = !1, P = this.stack[this.position].index, N = this.stack[this.position], q = N.state, oe = N.caretIndex, this.onUpdate(), V = this.blocks.getBlocksCount(), q[P] || (P -= 1, this.stack[this.position].index = P), !this.blockWasDeleted(q, y)) {
                  W.next = 13;
                  break;
                }
                this.insertDeletedBlock(q, y, P), W.next = 42;
                break;
              case 13:
                if (!this.contentWasCopied(q, y, P)) {
                  W.next = 19;
                  break;
                }
                return W.next = 16, this.blocks.render({ blocks: q });
              case 16:
                this.caret.setToBlock(P, "end"), W.next = 42;
                break;
              case 19:
                if (!(P < k && this.blockWasSkipped(q, y))) {
                  W.next = 25;
                  break;
                }
                return W.next = 22, this.blocks.delete(k);
              case 22:
                this.caret.setToBlock(P, "end"), W.next = 42;
                break;
              case 25:
                if (!(V > q.length)) {
                  W.next = 31;
                  break;
                }
                return W.next = 28, this.blocks.render({ blocks: q });
              case 28:
                this.setCaretIndex(P, oe), W.next = 42;
                break;
              case 31:
                if (!this.blockWasDropped(q, y)) {
                  W.next = 37;
                  break;
                }
                return W.next = 34, this.blocks.render({ blocks: q });
              case 34:
                this.caret.setToBlock(P, "end"), W.next = 42;
                break;
              case 37:
                if (!this.contentChangedInNoFocusBlock(P, k)) {
                  W.next = 42;
                  break;
                }
                return re = this.blocks.getBlockByIndex(k), ue = re.id, W.next = 41, this.blocks.update(ue, q[k].data);
              case 41:
                this.setCaretIndex(P, oe);
              case 42:
                if (!(pe = this.blocks.getBlockByIndex(P))) {
                  W.next = 47;
                  break;
                }
                return W.next = 46, this.blocks.update(pe.id, q[P].data);
              case 46:
                this.setCaretIndex(P, oe);
              case 47:
              case "end":
                return W.stop();
            }
          }, _, this);
        })), function() {
          return j.apply(this, arguments);
        }) }, { key: "setCaretIndex", value: function(_, m) {
          if (m && m !== -1) {
            var k = this.holder.getElementsByClassName("ce-block__content"), y = new (I())(k[_].firstChild);
            setTimeout(function() {
              return y.setPos(m);
            }, 50);
          } else this.caret.setToBlock(_, "end");
        } }, { key: "insertBlock", value: (x = a(h().mark(function _(m, k) {
          return h().wrap(function(y) {
            for (; ; ) switch (y.prev = y.next) {
              case 0:
                return y.next = 2, this.blocks.insert(m[k].type, m[k].data, {}, k, !0);
              case 2:
              case "end":
                return y.stop();
            }
          }, _, this);
        })), function(_, m) {
          return x.apply(this, arguments);
        }) }, { key: "insertSkippedBlocks", value: (C = a(h().mark(function _(m, k, y) {
          var P;
          return h().wrap(function(N) {
            for (; ; ) switch (N.prev = N.next) {
              case 0:
                for (P = m.length; P < k.length; P += 1) this.insertBlock(k, P);
                if (JSON.stringify(m[y - 1]) === JSON.stringify(k[y - 1])) {
                  N.next = 4;
                  break;
                }
                return N.next = 4, this.updateModifiedBlock(k, y);
              case 4:
              case "end":
                return N.stop();
            }
          }, _, this);
        })), function(_, m, k) {
          return C.apply(this, arguments);
        }) }, { key: "updateModifiedBlock", value: (B = a(h().mark(function _(m, k) {
          var y;
          return h().wrap(function(P) {
            for (; ; ) switch (P.prev = P.next) {
              case 0:
                if (y = m[k - 1], !this.editor.blocks.getById(y.id)) {
                  P.next = 3;
                  break;
                }
                return P.abrupt("return", this.blocks.update(y.id, y.data));
              case 3:
                return P.abrupt("return", this.blocks.render({ blocks: m }));
              case 4:
              case "end":
                return P.stop();
            }
          }, _, this);
        })), function(_, m) {
          return B.apply(this, arguments);
        }) }, { key: "redo", value: (A = a(h().mark(function _() {
          var m, k, y, P, N, q, oe;
          return h().wrap(function(V) {
            for (; ; ) switch (V.prev = V.next) {
              case 0:
                if (!this.canRedo()) {
                  V.next = 27;
                  break;
                }
                if (this.position += 1, this.shouldSaveHistory = !1, m = this.stack[this.position], k = m.index, y = m.state, P = m.caretIndex, (N = this.stack[this.position - 1]).index, q = N.state, !this.blockWasDeleted(q, y)) {
                  V.next = 11;
                  break;
                }
                return V.next = 8, this.blocks.delete();
              case 8:
                this.caret.setToBlock(k, "end"), V.next = 21;
                break;
              case 11:
                if (!this.blockWasSkipped(y, q)) {
                  V.next = 17;
                  break;
                }
                return V.next = 14, this.insertSkippedBlocks(q, y, k);
              case 14:
                this.caret.setToBlock(k, "end"), V.next = 21;
                break;
              case 17:
                if (!this.blockWasDropped(y, q) || this.position === 1) {
                  V.next = 21;
                  break;
                }
                return V.next = 20, this.blocks.render({ blocks: y });
              case 20:
                this.caret.setToBlock(k, "end");
              case 21:
                if (this.onUpdate(), !(oe = this.blocks.getBlockByIndex(k))) {
                  V.next = 27;
                  break;
                }
                return V.next = 26, this.blocks.update(oe.id, y[k].data);
              case 26:
                this.setCaretIndex(k, P);
              case 27:
              case "end":
                return V.stop();
            }
          }, _, this);
        })), function() {
          return A.apply(this, arguments);
        }) }, { key: "canUndo", value: function() {
          return !this.readOnly && this.position > 0;
        } }, { key: "canRedo", value: function() {
          return !this.readOnly && this.position < this.count();
        } }, { key: "count", value: function() {
          return this.stack.length - 1;
        } }, { key: "parseKeys", value: function(_) {
          var m = { CMD: /(Mac)/i.test(navigator.platform) ? "metaKey" : "ctrlKey", ALT: "altKey", SHIFT: "shiftKey" }, k = _.slice(0, -1).map(function(P) {
            return m[P];
          }), y = k.includes("shiftKey") && _.length === 2 ? _[_.length - 1].toUpperCase() : _[_.length - 1].toLowerCase();
          return k.push(y), k;
        } }, { key: "setEventListeners", value: function() {
          var _ = this, m = this.holder, k = this.config.shortcuts, y = k.undo, P = k.redo, N = y.map(function(ie) {
            return ie.replace(/ /g, "").split("+");
          }), q = P.map(function(ie) {
            return ie.replace(/ /g, "").split("+");
          }), oe = N.map(function(ie) {
            return _.parseKeys(ie);
          }), V = q.map(function(ie) {
            return _.parseKeys(ie);
          }), re = function(ie, xe) {
            return xe.reduce(function(Se, le) {
              return Se || function(S, w) {
                return w.length === 3 && S[w[0]] && S[w[1]] && S.key.toLowerCase() === w[2];
              }(ie, le);
            }, !1);
          }, ue = function(ie, xe, Se) {
            return !(!function(le, S) {
              return S.reduce(function(w, O) {
                return w || function(U, F) {
                  return F.length === 2 && U[F[0]] && U.key.toLowerCase() === F[1];
                }(le, O);
              }, !1);
            }(ie, xe) || re(ie, Se)) || !!re(ie, xe);
          }, pe = function(ie) {
            ue(ie, oe, V) && (ie.preventDefault(), _.undo());
          }, W = function(ie) {
            ue(ie, V, oe) && (ie.preventDefault(), _.redo());
          };
          m.addEventListener("keydown", pe), m.addEventListener("keydown", W), m.addEventListener("destroy", function() {
            m.removeEventListener("keydown", pe), m.removeEventListener("keydown", W);
          });
        } }], [{ key: "isReadOnlySupported", get: function() {
          return !0;
        } }]);
        var A, B, C, x, j;
      }();
    })(), n.default;
  })());
})(Dr);
var tg = Dr.exports;
const sg = /* @__PURE__ */ Sn(tg);
class ng {
  constructor({ data: e, api: o }) {
    this.handleKeyDown = (s) => {
      s.key === "Backspace" && (s.preventDefault(), this.api.blocks.delete());
    }, this.api = o, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-delimiter",
      delimiter: "delimiter",
      active: "ce-delimiter--active"
    };
    const { align: i } = Ae.getState();
    this.data = {
      ...e,
      align: i
    }, this._element = this.drawView();
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get contentless() {
    return !0;
  }
  drawView() {
    const e = document.createElement("div"), o = document.createElement("hr");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), o.classList.add(this._CSS.delimiter), o.addEventListener("click", () => {
      o.classList.add(this._CSS.active), document.addEventListener("keydown", this.handleKeyDown);
    }), document.addEventListener(
      "click",
      (i) => {
        this._element.contains(i.target) || (o.classList.remove(this._CSS.active), document.removeEventListener("keydown", this.handleKeyDown));
      },
      !0
    ), this.data && (o.style.backgroundImage = `url(${this.data.url})`, o.style.backgroundPosition = this.data.align === "center" ? "50% 50%" : this.data.imagePosition, e.appendChild(o)), this.applyAlignment(o), e;
  }
  applyAlignment(e) {
    e.classList.remove("align-left", "align-center"), this.data.align === "center" && e.classList.add("align-center"), this.data.align === "left" && e.classList.add("align-left");
  }
  render() {
    return this._element;
  }
  save() {
    return {
      url: this.data.url,
      imagePosition: this.data.imagePosition,
      align: this.data.align
    };
  }
  static get toolbox() {
    return {
      icon: "🖼️",
      title: "delimiter"
    };
  }
  static get pasteConfig() {
    return { tags: ["HR"] };
  }
  onPaste() {
    this.data = {};
  }
}
class rg {
  constructor({ data: e, api: o }) {
    this.handleKeyDown = (s) => {
      s.key === "Backspace" && (s.preventDefault(), this.api.blocks.delete());
    }, this.api = o, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-emoji",
      emoji: "emoji-wrapper",
      emojiIcon: "emoji-icon",
      active: "ce-emoji--active"
    };
    const { align: i } = Ae.getState();
    this.data = {
      ...e,
      align: i
    }, this._element = this.drawView();
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get contentless() {
    return !0;
  }
  drawView() {
    const e = document.createElement("div"), o = document.createElement("div"), i = document.createElement("div");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), o.classList.add(this._CSS.emoji), i.classList.add(this._CSS.emojiIcon), o.addEventListener("click", () => {
      i.classList.add(this._CSS.active), document.addEventListener("keydown", this.handleKeyDown);
    }), document.addEventListener(
      "click",
      (s) => {
        this._element.contains(s.target) || (i.classList.remove(this._CSS.active), document.removeEventListener("keydown", this.handleKeyDown));
      },
      !0
    ), this.data && (i.innerText = this.data.emoji, o.appendChild(i), e.appendChild(o)), this.applyAlignment(o), e;
  }
  applyAlignment(e) {
    e.classList.remove("align-left", "align-center"), this.data.align === "center" && e.classList.add("align-center"), this.data.align === "left" && e.classList.add("align-left");
  }
  render() {
    return this._element;
  }
  save() {
    return {
      emoji: this.data.emoji,
      align: this.data.align
    };
  }
  static get toolbox() {
    return {
      icon: "🖼️",
      title: "emoji"
    };
  }
  static get pasteConfig() {
    return { tags: ["EMOJI"] };
  }
  onPaste() {
    this.data = {};
  }
}
class ag {
  constructor({ data: e, api: o }) {
    this.handleKeyDown = (s) => {
      s.key === "Backspace" && (s.preventDefault(), this.api.blocks.delete());
    }, this.api = o, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-file",
      file: "file-wrapper",
      fileContainer: "file-container",
      fileIcon: "file-icon",
      fileName: "file-name",
      active: "ce-file--active"
    };
    const { align: i } = Ae.getState();
    this.data = {
      ...e,
      align: i
    }, this._element = this.drawView();
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get contentless() {
    return !0;
  }
  drawView() {
    const e = document.createElement("div"), o = document.createElement("div"), i = document.createElement("div"), s = document.createElement("div"), n = document.createElement("p");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), o.classList.add(this._CSS.file), i.classList.add(this._CSS.fileContainer), s.classList.add(this._CSS.fileIcon), n.classList.add(this._CSS.fileName), o.addEventListener("click", () => {
      i.classList.add(this._CSS.active), document.addEventListener("keydown", this.handleKeyDown);
    }), document.addEventListener(
      "click",
      (r) => {
        this._element.contains(r.target) || (i.classList.remove(this._CSS.active), document.removeEventListener("keydown", this.handleKeyDown));
      },
      !0
    ), this.data && (n.innerText = this.data.name, i.appendChild(s), i.appendChild(n), o.appendChild(i), e.appendChild(o)), this.applyAlignment(o), e;
  }
  applyAlignment(e) {
    e.classList.remove("align-left", "align-center"), this.data.align === "center" && e.classList.add("align-center"), this.data.align === "left" && e.classList.add("align-left");
  }
  render() {
    return this._element;
  }
  save() {
    return {
      url: this.data.url,
      name: this.data.name,
      type: this.data.type,
      size: this.data.size,
      align: this.data.align
    };
  }
  static get toolbox() {
    return {
      icon: "🖼️",
      title: "file"
    };
  }
  static get pasteConfig() {
    return { tags: ["INPUT"] };
  }
  onPaste() {
    this.data = {};
  }
}
const cg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', lg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', dg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', ug = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', gg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', pg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>', hg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', mg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>', jn = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', vg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>', _g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>', fg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.50001C13.5 7 10.935 6.66476 9.75315 7.79706C9.27092 8.25909 9 8.88574 9 9.53915C9 10.1926 9.27092 10.8192 9.75315 11.2812C10.9835 12.46 13.0165 11.5457 14.2468 12.7244C14.7291 13.1865 15 13.8131 15 14.4665C15 15.1199 14.7291 15.7466 14.2468 16.2086C12.8659 17.5317 10 17.5 9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12H18"/></svg>', yg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>', bg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7.5V11.5C9 12.2956 9.31607 13.0587 9.87868 13.6213C10.4413 14.1839 11.2044 14.5 12 14.5C12.7956 14.5 13.5587 14.1839 14.1213 13.6213C14.6839 13.0587 15 12.2956 15 11.5V7.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.71429 18H16.2857"/></svg>';
class kg {
  constructor({ data: e, config: o, api: i, readOnly: s }) {
    this.api = i, this.readOnly = s, this._settings = o, this._data = this.normalizeData(e), this._element = this.getTag();
  }
  get _CSS() {
    return {
      block: this.api.styles.block,
      wrapper: "ce-header"
    };
  }
  isHeaderData(e) {
    return e.text !== void 0;
  }
  normalizeData(e) {
    const o = { text: "", level: this.defaultLevel.number };
    return this.isHeaderData(e) && (o.text = e.text || "", e.level !== void 0 && !isNaN(parseInt(e.level.toString())) && (o.level = parseInt(e.level.toString()))), o;
  }
  render() {
    return this._element;
  }
  renderSettings() {
    return this.levels.map((e) => ({
      icon: e.svg,
      label: this.api.i18n.t(`제목 ${e.number}`),
      onActivate: () => this.setLevel(e.number),
      closeOnActivate: !0,
      isActive: this.currentLevel.number === e.number,
      render: () => document.createElement("div")
    }));
  }
  setLevel(e) {
    this.data = {
      level: e,
      text: this.data.text
    };
  }
  merge(e) {
    this._element.insertAdjacentHTML("beforeend", e.text);
  }
  validate(e) {
    return e.text.trim() !== "";
  }
  save(e) {
    return {
      text: e.innerHTML,
      level: this.currentLevel.number
    };
  }
  static get conversionConfig() {
    return {
      export: "text",
      import: "text"
    };
  }
  static get sanitize() {
    return {
      level: !1,
      text: {}
    };
  }
  static get isReadOnlySupported() {
    return !0;
  }
  get data() {
    return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
  }
  set data(e) {
    if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
      const o = this.getTag();
      o.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(o, this._element), this._element = o;
    }
    e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
  }
  getTag() {
    const e = document.createElement(
      this.currentLevel.tag
    );
    return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
  }
  get currentLevel() {
    let e = this.levels.find(
      (o) => o.number === this._data.level
    );
    return e || (e = this.defaultLevel), e;
  }
  get defaultLevel() {
    if (this._settings.defaultLevel) {
      const e = this.levels.find((o) => o.number === this._settings.defaultLevel);
      if (e)
        return e;
      console.warn(
        "(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels"
      );
    }
    return this.levels[1];
  }
  get levels() {
    const e = [
      {
        number: 1,
        tag: "H1",
        svg: cg
      },
      {
        number: 2,
        tag: "H2",
        svg: lg
      },
      {
        number: 3,
        tag: "H3",
        svg: dg
      },
      {
        number: 4,
        tag: "H4",
        svg: ug
      },
      {
        number: 5,
        tag: "H5",
        svg: gg
      },
      {
        number: 6,
        tag: "H6",
        svg: pg
      }
    ];
    return this._settings.levels ? e.filter((o) => this._settings.levels.includes(o.number)) : e;
  }
  onPaste(e) {
    const o = e.detail;
    if ("data" in o) {
      const i = o.data;
      let s = this.defaultLevel.number;
      switch (i.tagName) {
        case "H1":
          s = 1;
          break;
        case "H2":
          s = 2;
          break;
        case "H3":
          s = 3;
          break;
        case "H4":
          s = 4;
          break;
        case "H5":
          s = 5;
          break;
        case "H6":
          s = 6;
          break;
      }
      this._settings.levels && (s = this._settings.levels.reduce((n, r) => Math.abs(r - s) < Math.abs(n - s) ? r : n)), this.data = {
        level: s,
        text: i.innerHTML
      };
    }
  }
  static get pasteConfig() {
    return {
      tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
    };
  }
  static get toolbox() {
    return {
      icon: mg,
      title: "제목"
    };
  }
}
class wg {
  static get isReadOnlySupported() {
    return !0;
  }
  static get enableLineBreaks() {
    return !0;
  }
  static get toolbox() {
    return {
      icon: jn,
      title: "리스트"
    };
  }
  constructor({
    data: e,
    config: o,
    api: i,
    readOnly: s
  }) {
    this.api = i, this.readOnly = s, this.settings = [
      {
        name: "unordered",
        label: "글머리 기호 목록",
        icon: jn,
        default: o.defaultStyle === "unordered" || !1
      },
      {
        name: "ordered",
        label: "번호 목록",
        icon: vg,
        default: o.defaultStyle === "ordered" || !0
      }
    ], this._elements = {
      wrapper: null
    }, this._data = {
      style: this.settings.find((n) => n.default === !0).name,
      items: []
    }, this.data = e;
  }
  render() {
    return this._elements.wrapper = this.makeMainTag(this._data.style), this._data.items.length ? this._data.items.forEach((e) => {
      this._elements.wrapper.appendChild(
        this._make("li", this.CSS.item, {
          innerHTML: e
        })
      );
    }) : this._elements.wrapper.appendChild(this._make("li", this.CSS.item)), this.readOnly || this._elements.wrapper.addEventListener(
      "keydown",
      (e) => {
        const [o, i] = [13, 8];
        switch (e.keyCode) {
          case o:
            this.getOutofList(e);
            break;
          case i:
            this.backspace(e);
            break;
        }
      },
      !1
    ), this._elements.wrapper;
  }
  save() {
    return this.data;
  }
  static get conversionConfig() {
    return {
      export: (e) => e.items.join(". "),
      import: (e) => ({
        items: [e],
        style: "unordered"
      })
    };
  }
  static get sanitize() {
    return {
      style: {},
      items: {
        br: !0
      }
    };
  }
  renderSettings() {
    return this.settings.map((e) => ({
      ...e,
      isActive: this._data.style === e.name,
      closeOnActivate: !0,
      onActivate: () => this.toggleTune(e.name)
    }));
  }
  onPaste(e) {
    const o = e.detail.data;
    this.data = this.pasteHandler(o);
  }
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  makeMainTag(e) {
    const o = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered, i = e === "ordered" ? "ol" : "ul";
    return this._make(i, [this.CSS.baseBlock, this.CSS.wrapper, o], {
      contentEditable: !this.readOnly
    });
  }
  toggleTune(e) {
    var i;
    const o = this.makeMainTag(e);
    for (; (i = this._elements.wrapper) != null && i.hasChildNodes(); )
      o.appendChild(this._elements.wrapper.firstChild);
    this._elements.wrapper.replaceWith(o), this._elements.wrapper = o, this._data.style = e;
  }
  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: "cdx-list",
      wrapperOrdered: "cdx-list--ordered",
      wrapperUnordered: "cdx-list--unordered",
      item: "cdx-list__item"
    };
  }
  set data(e) {
    e || (e = { style: "unordered", items: [] }), this._data.style = e.style || this.settings.find((i) => i.default === !0).name, this._data.items = e.items || [];
    const o = this._elements.wrapper;
    o && o.parentNode.replaceChild(this.render(), o);
  }
  get data() {
    var o;
    this._data.items = [];
    const e = (o = this._elements.wrapper) == null ? void 0 : o.querySelectorAll(`.${this.CSS.item}`);
    return e && e.forEach((i) => {
      i.innerHTML.replace("<br>", " ").trim() && this._data.items.push(i.innerHTML);
    }), this._data;
  }
  _make(e, o = null, i = {}) {
    const s = document.createElement(e);
    Array.isArray(o) ? s.classList.add(...o) : o && s.classList.add(o);
    for (const n in i)
      s[n] = i[n];
    return s;
  }
  get currentItem() {
    let e = window.getSelection().anchorNode;
    return e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode), e.closest(`.${this.CSS.item}`);
  }
  getOutofList(e) {
    var i, s;
    const o = this._elements.wrapper.querySelectorAll("." + this.CSS.item);
    if (o.length === 1) {
      const n = this.currentItem;
      if (!n || !((i = n.textContent) != null && i.trim().length)) {
        e.preventDefault(), e.stopPropagation(), this.api.blocks.delete(this.api.blocks.getCurrentBlockIndex()), this.api.blocks.insert("paragraph", { text: "" }), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
        return;
      }
    }
    if (o.length > 1) {
      const n = o[o.length - 1], r = this.currentItem;
      r === n && !((s = n.textContent) != null && s.trim().length) && (r.parentElement.removeChild(r), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex()), e.preventDefault(), e.stopPropagation());
    }
  }
  backspace(e) {
    var s;
    const o = this._elements.wrapper.querySelectorAll("." + this.CSS.item);
    if (o.length === 0)
      return;
    const i = this.currentItem;
    if (i && !((s = i.textContent) != null && s.trim().length)) {
      const n = i;
      if (o.length === 1) {
        e.preventDefault(), this.api.blocks.delete(this.api.blocks.getCurrentBlockIndex()), this.api.blocks.insert("paragraph", { text: "" }), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
        return;
      }
      window.requestIdleCallback(() => {
        n.parentElement.removeChild(n);
      });
    }
  }
  pasteHandler(e) {
    const { tagName: o } = e;
    let i;
    switch (o) {
      case "OL":
        i = "ordered";
        break;
      case "UL":
      case "LI":
        i = "unordered";
        break;
      default:
        i = "unordered";
    }
    const s = {
      style: i,
      items: []
    };
    if (o === "LI")
      s.items = [e.innerHTML];
    else {
      const n = Array.from(e.querySelectorAll("LI"));
      s.items = n.map((r) => r.innerHTML).filter((r) => !!r.trim());
    }
    return s;
  }
}
function jg(t) {
  const e = document.createElement("div");
  e.innerHTML = t.trim();
  const o = document.createDocumentFragment();
  return o.append(...Array.from(e.childNodes)), o;
}
class Kt {
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  constructor({ data: e, config: o, api: i, readOnly: s }) {
    this.api = i, this.readOnly = s, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = o.placeholder ? o.placeholder : Kt.DEFAULT_PLACEHOLDER;
    const { align: n } = Ae.getState();
    this._data = {
      ...e,
      align: n
    }, this._element = null, this._preserveBlank = o.preserveBlank ?? !1;
  }
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
      return;
    const { textContent: o } = this._element;
    o === "" && (this._element.innerHTML = "");
  }
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), this.applyAlignment(e), e;
  }
  applyAlignment(e) {
    e.classList.remove("text-align-left", "text-align-center"), this._data.align === "center" && e.classList.add("text-align-center"), this._data.align === "left" && e.classList.add("text-align-left");
  }
  render() {
    return this._element = this.drawView(), this._element;
  }
  merge(e) {
    if (!this._element)
      return;
    this._data.text += e.text;
    const o = jg(e.text);
    this._element.appendChild(o), this._element.normalize();
  }
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  save(e) {
    return {
      text: e.innerHTML,
      align: this._data.align
    };
  }
  onPaste(e) {
    const o = {
      text: e.detail.data.innerHTML,
      align: this._data.align
    };
    this._data = o, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  static get conversionConfig() {
    return {
      export: "text",
      import: "text"
    };
  }
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  static get toolbox() {
    return {
      icon: yg,
      title: "본문"
    };
  }
}
class xg {
  constructor({ data: e, api: o }) {
    this.handleKeyDown = (s) => {
      s.key === "Backspace" && (s.preventDefault(), this.api.blocks.delete());
    }, this.api = o, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-place",
      place: "place-wrapper",
      placeContainer: "place-container",
      placeIcon: "place-icon",
      placeTextWrapper: "place-text-wrapper",
      placeName: "place-name",
      placeAddress: "place-address",
      active: "ce-place--active"
    };
    const { align: i } = Ae.getState();
    this.data = {
      ...e,
      align: i
    }, this._element = this.drawView();
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get contentless() {
    return !0;
  }
  drawView() {
    const e = document.createElement("div"), o = document.createElement("div"), i = document.createElement("div"), s = document.createElement("div"), n = document.createElement("div"), r = document.createElement("p"), a = document.createElement("p");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), o.classList.add(this._CSS.place), i.classList.add(this._CSS.placeContainer), s.classList.add(this._CSS.placeIcon), n.classList.add(this._CSS.placeTextWrapper), r.classList.add(this._CSS.placeName), a.classList.add(this._CSS.placeAddress), o.addEventListener("click", () => {
      i.classList.add(this._CSS.active), document.addEventListener("keydown", this.handleKeyDown);
    }), document.addEventListener(
      "click",
      (c) => {
        this._element.contains(c.target) || (i.classList.remove(this._CSS.active), document.removeEventListener("keydown", this.handleKeyDown));
      },
      !0
    ), this.data && (r.innerText = this.data.name, a.innerText = this.data.address, n.appendChild(r), n.appendChild(a), i.appendChild(s), i.appendChild(n), o.appendChild(i), e.appendChild(o)), this.applyAlignment(o), e;
  }
  applyAlignment(e) {
    e.classList.remove("align-left", "align-center"), this.data.align === "center" && e.classList.add("align-center"), this.data.align === "left" && e.classList.add("align-left");
  }
  render() {
    return this._element;
  }
  save() {
    return {
      url: this.data.url,
      id: this.data.id,
      address: this.data.address,
      name: this.data.name,
      align: this.data.align
    };
  }
  static get toolbox() {
    return {
      icon: "🖼️",
      title: "place"
    };
  }
  static get pasteConfig() {
    return { tags: ["DIV"] };
  }
  onPaste() {
    this.data = {};
  }
}
var yt = {}, Yt = {}, Gt = {};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.allInputsSelector = Sg;
function Sg() {
  var t = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + t.map(function(e) {
    return 'input[type="'.concat(e, '"]');
  }).join(", ");
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.allInputsSelector = void 0;
  var e = Gt;
  Object.defineProperty(t, "allInputsSelector", { enumerable: !0, get: function() {
    return e.allInputsSelector;
  } });
})(Yt);
var bo = {}, Xt = {};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.isNativeInput = Eg;
function Eg(t) {
  var e = [
    "INPUT",
    "TEXTAREA"
  ];
  return t && t.tagName ? e.includes(t.tagName) : !1;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isNativeInput = void 0;
  var e = Xt;
  Object.defineProperty(t, "isNativeInput", { enumerable: !0, get: function() {
    return e.isNativeInput;
  } });
})(bo);
var Rr = {}, Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.append = Cg;
function Cg(t, e) {
  Array.isArray(e) ? e.forEach(function(o) {
    t.appendChild(o);
  }) : t.appendChild(e);
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.append = void 0;
  var e = Jt;
  Object.defineProperty(t, "append", { enumerable: !0, get: function() {
    return e.append;
  } });
})(Rr);
var Zt = {}, Qt = {};
Object.defineProperty(Qt, "__esModule", { value: !0 });
Qt.blockElements = Bg;
function Bg() {
  return [
    "address",
    "article",
    "aside",
    "blockquote",
    "canvas",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "noscript",
    "ol",
    "output",
    "p",
    "pre",
    "ruby",
    "section",
    "table",
    "tbody",
    "thead",
    "tr",
    "tfoot",
    "ul",
    "video"
  ];
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.blockElements = void 0;
  var e = Qt;
  Object.defineProperty(t, "blockElements", { enumerable: !0, get: function() {
    return e.blockElements;
  } });
})(Zt);
var $r = {}, es = {};
Object.defineProperty(es, "__esModule", { value: !0 });
es.calculateBaseline = Tg;
function Tg(t) {
  var e = window.getComputedStyle(t), o = parseFloat(e.fontSize), i = parseFloat(e.lineHeight) || o * 1.2, s = parseFloat(e.paddingTop), n = parseFloat(e.borderTopWidth), r = parseFloat(e.marginTop), a = o * 0.8, c = (i - o) / 2, l = r + n + s + c + a;
  return l;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.calculateBaseline = void 0;
  var e = es;
  Object.defineProperty(t, "calculateBaseline", { enumerable: !0, get: function() {
    return e.calculateBaseline;
  } });
})($r);
var Hr = {}, os = {}, is = {}, ts = {};
Object.defineProperty(ts, "__esModule", { value: !0 });
ts.isContentEditable = Pg;
function Pg(t) {
  return t.contentEditable === "true";
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isContentEditable = void 0;
  var e = ts;
  Object.defineProperty(t, "isContentEditable", { enumerable: !0, get: function() {
    return e.isContentEditable;
  } });
})(is);
Object.defineProperty(os, "__esModule", { value: !0 });
os.canSetCaret = Ag;
var Ig = bo, Og = is;
function Ag(t) {
  var e = !0;
  if ((0, Ig.isNativeInput)(t))
    switch (t.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        e = !1;
        break;
    }
  else
    e = (0, Og.isContentEditable)(t);
  return e;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.canSetCaret = void 0;
  var e = os;
  Object.defineProperty(t, "canSetCaret", { enumerable: !0, get: function() {
    return e.canSetCaret;
  } });
})(Hr);
var Ni = {}, ss = {};
function Lg(t, e, o) {
  const i = o.value !== void 0 ? "value" : "get", s = o[i], n = `#${e}Cache`;
  if (o[i] = function(...r) {
    return this[n] === void 0 && (this[n] = s.apply(this, r)), this[n];
  }, i === "get" && o.set) {
    const r = o.set;
    o.set = function(a) {
      delete t[n], r.apply(this, a);
    };
  }
  return o;
}
function zr() {
  const t = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(t).find((o) => window.navigator.appVersion.toLowerCase().indexOf(o) !== -1);
  return e !== void 0 && (t[e] = !0), t;
}
function ns(t) {
  return t != null && t !== "" && (typeof t != "object" || Object.keys(t).length > 0);
}
function Ng(t) {
  return !ns(t);
}
const Mg = () => typeof window < "u" && window.navigator !== null && ns(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Fg(t) {
  const e = zr();
  return t = t.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, "+"), e.mac ? t = t.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : t = t.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), t;
}
function Dg(t) {
  return t[0].toUpperCase() + t.slice(1);
}
function Rg(t) {
  const e = document.createElement("div");
  e.style.position = "absolute", e.style.left = "-999px", e.style.bottom = "-999px", e.innerHTML = t, document.body.appendChild(e);
  const o = window.getSelection(), i = document.createRange();
  if (i.selectNode(e), o === null)
    throw new Error("Cannot copy text to clipboard");
  o.removeAllRanges(), o.addRange(i), document.execCommand("copy"), document.body.removeChild(e);
}
function $g(t, e, o) {
  let i;
  return (...s) => {
    const n = this, r = () => {
      i = void 0, o !== !0 && t.apply(n, s);
    }, a = o === !0 && i !== void 0;
    window.clearTimeout(i), i = window.setTimeout(r, e), a && t.apply(n, s);
  };
}
function io(t) {
  return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function Hg(t) {
  return io(t) === "boolean";
}
function Ur(t) {
  return io(t) === "function" || io(t) === "asyncfunction";
}
function zg(t) {
  return Ur(t) && /^\s*class\s+/.test(t.toString());
}
function Ug(t) {
  return io(t) === "number";
}
function vi(t) {
  return io(t) === "object";
}
function qg(t) {
  return Promise.resolve(t) === t;
}
function Wg(t) {
  return io(t) === "string";
}
function Vg(t) {
  return io(t) === "undefined";
}
function bt(t, ...e) {
  if (!e.length)
    return t;
  const o = e.shift();
  if (vi(t) && vi(o))
    for (const i in o)
      vi(o[i]) ? (t[i] === void 0 && Object.assign(t, { [i]: {} }), bt(t[i], o[i])) : Object.assign(t, { [i]: o[i] });
  return bt(t, ...e);
}
function Kg(t, e, o) {
  const i = `«${e}» is deprecated and will be removed in the next major release. Please use the «${o}» instead.`;
  t && console.warn(i);
}
function Yg(t) {
  try {
    return new URL(t).href;
  } catch {
  }
  return t.substring(0, 2) === "//" ? window.location.protocol + t : window.location.origin + t;
}
function Gg(t) {
  return t > 47 && t < 58 || t === 32 || t === 13 || t === 229 || t > 64 && t < 91 || t > 95 && t < 112 || t > 185 && t < 193 || t > 218 && t < 223;
}
const Xg = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, Jg = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
class Zg {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((o, i) => {
      this.completed = this.completed.then(e).then(o).catch(i);
    });
  }
}
function Qg(t, e, o = void 0) {
  let i, s, n, r = null, a = 0;
  o || (o = {});
  const c = function() {
    a = o.leading === !1 ? 0 : Date.now(), r = null, n = t.apply(i, s), r === null && (i = s = null);
  };
  return function() {
    const l = Date.now();
    !a && o.leading === !1 && (a = l);
    const d = e - (l - a);
    return i = this, s = arguments, d <= 0 || d > e ? (r && (clearTimeout(r), r = null), a = l, n = t.apply(i, s), r === null && (i = s = null)) : !r && o.trailing !== !1 && (r = setTimeout(c, d)), n;
  };
}
const ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PromiseQueue: Zg,
  beautifyShortcut: Fg,
  cacheable: Lg,
  capitalize: Dg,
  copyTextToClipboard: Rg,
  debounce: $g,
  deepMerge: bt,
  deprecationAssert: Kg,
  getUserOS: zr,
  getValidUrl: Yg,
  isBoolean: Hg,
  isClass: zg,
  isEmpty: Ng,
  isFunction: Ur,
  isIosDevice: Mg,
  isNumber: Ug,
  isObject: vi,
  isPrintableKey: Gg,
  isPromise: qg,
  isString: Wg,
  isUndefined: Vg,
  keyCodes: Xg,
  mouseButtons: Jg,
  notEmpty: ns,
  throttle: Qg,
  typeOf: io
}, Symbol.toStringTag, { value: "Module" })), rs = /* @__PURE__ */ Ba(ep);
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.containsOnlyInlineElements = tp;
var op = rs, ip = Zt;
function tp(t) {
  var e;
  (0, op.isString)(t) ? (e = document.createElement("div"), e.innerHTML = t) : e = t;
  var o = function(i) {
    return !(0, ip.blockElements)().includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
  };
  return Array.from(e.children).every(o);
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.containsOnlyInlineElements = void 0;
  var e = ss;
  Object.defineProperty(t, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return e.containsOnlyInlineElements;
  } });
})(Ni);
var qr = {}, as = {}, Mi = {}, cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.make = sp;
function sp(t, e, o) {
  var i;
  e === void 0 && (e = null), o === void 0 && (o = {});
  var s = document.createElement(t);
  if (Array.isArray(e)) {
    var n = e.filter(function(a) {
      return a !== void 0;
    });
    (i = s.classList).add.apply(i, n);
  } else e !== null && s.classList.add(e);
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (s[r] = o[r]);
  return s;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.make = void 0;
  var e = cs;
  Object.defineProperty(t, "make", { enumerable: !0, get: function() {
    return e.make;
  } });
})(Mi);
Object.defineProperty(as, "__esModule", { value: !0 });
as.fragmentToString = rp;
var np = Mi;
function rp(t) {
  var e = (0, np.make)("div");
  return e.appendChild(t), e.innerHTML;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.fragmentToString = void 0;
  var e = as;
  Object.defineProperty(t, "fragmentToString", { enumerable: !0, get: function() {
    return e.fragmentToString;
  } });
})(qr);
var Wr = {}, ls = {};
Object.defineProperty(ls, "__esModule", { value: !0 });
ls.getContentLength = cp;
var ap = bo;
function cp(t) {
  var e, o;
  return (0, ap.isNativeInput)(t) ? t.value.length : t.nodeType === Node.TEXT_NODE ? t.length : (o = (e = t.textContent) === null || e === void 0 ? void 0 : e.length) !== null && o !== void 0 ? o : 0;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getContentLength = void 0;
  var e = ls;
  Object.defineProperty(t, "getContentLength", { enumerable: !0, get: function() {
    return e.getContentLength;
  } });
})(Wr);
var ds = {}, us = {}, xn = _i && _i.__spreadArray || function(t, e, o) {
  if (o || arguments.length === 2) for (var i = 0, s = e.length, n; i < s; i++)
    (n || !(i in e)) && (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
  return t.concat(n || Array.prototype.slice.call(e));
};
Object.defineProperty(us, "__esModule", { value: !0 });
us.getDeepestBlockElements = Vr;
var lp = Ni;
function Vr(t) {
  return (0, lp.containsOnlyInlineElements)(t) ? [t] : Array.from(t.children).reduce(function(e, o) {
    return xn(xn([], e, !0), Vr(o), !0);
  }, []);
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getDeepestBlockElements = void 0;
  var e = us;
  Object.defineProperty(t, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return e.getDeepestBlockElements;
  } });
})(ds);
var Kr = {}, gs = {}, Fi = {}, ps = {};
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.isLineBreakTag = dp;
function dp(t) {
  return [
    "BR",
    "WBR"
  ].includes(t.tagName);
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isLineBreakTag = void 0;
  var e = ps;
  Object.defineProperty(t, "isLineBreakTag", { enumerable: !0, get: function() {
    return e.isLineBreakTag;
  } });
})(Fi);
var Di = {}, hs = {};
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.isSingleTag = up;
function up(t) {
  return [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ].includes(t.tagName);
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isSingleTag = void 0;
  var e = hs;
  Object.defineProperty(t, "isSingleTag", { enumerable: !0, get: function() {
    return e.isSingleTag;
  } });
})(Di);
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.getDeepestNode = Yr;
var gp = bo, pp = Fi, hp = Di;
function Yr(t, e) {
  e === void 0 && (e = !1);
  var o = e ? "lastChild" : "firstChild", i = e ? "previousSibling" : "nextSibling";
  if (t.nodeType === Node.ELEMENT_NODE && t[o]) {
    var s = t[o];
    if ((0, hp.isSingleTag)(s) && !(0, gp.isNativeInput)(s) && !(0, pp.isLineBreakTag)(s))
      if (s[i])
        s = s[i];
      else if (s.parentNode !== null && s.parentNode[i])
        s = s.parentNode[i];
      else
        return s.parentNode;
    return Yr(s, e);
  }
  return t;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getDeepestNode = void 0;
  var e = gs;
  Object.defineProperty(t, "getDeepestNode", { enumerable: !0, get: function() {
    return e.getDeepestNode;
  } });
})(Kr);
var Gr = {}, ms = {}, ri = _i && _i.__spreadArray || function(t, e, o) {
  if (o || arguments.length === 2) for (var i = 0, s = e.length, n; i < s; i++)
    (n || !(i in e)) && (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
  return t.concat(n || Array.prototype.slice.call(e));
};
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.findAllInputs = yp;
var mp = Ni, vp = ds, _p = Yt, fp = bo;
function yp(t) {
  return Array.from(t.querySelectorAll((0, _p.allInputsSelector)())).reduce(function(e, o) {
    return (0, fp.isNativeInput)(o) || (0, mp.containsOnlyInlineElements)(o) ? ri(ri([], e, !0), [o], !1) : ri(ri([], e, !0), (0, vp.getDeepestBlockElements)(o), !0);
  }, []);
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.findAllInputs = void 0;
  var e = ms;
  Object.defineProperty(t, "findAllInputs", { enumerable: !0, get: function() {
    return e.findAllInputs;
  } });
})(Gr);
var Xr = {}, vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.isCollapsedWhitespaces = bp;
function bp(t) {
  return !/[^\t\n\r ]/.test(t);
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isCollapsedWhitespaces = void 0;
  var e = vs;
  Object.defineProperty(t, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return e.isCollapsedWhitespaces;
  } });
})(Xr);
var _s = {}, fs = {};
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.isElement = wp;
var kp = rs;
function wp(t) {
  return (0, kp.isNumber)(t) ? !1 : !!t && !!t.nodeType && t.nodeType === Node.ELEMENT_NODE;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isElement = void 0;
  var e = fs;
  Object.defineProperty(t, "isElement", { enumerable: !0, get: function() {
    return e.isElement;
  } });
})(_s);
var Jr = {}, ys = {}, bs = {}, ks = {};
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.isLeaf = jp;
function jp(t) {
  return t === null ? !1 : t.childNodes.length === 0;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isLeaf = void 0;
  var e = ks;
  Object.defineProperty(t, "isLeaf", { enumerable: !0, get: function() {
    return e.isLeaf;
  } });
})(bs);
var ws = {}, js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
js.isNodeEmpty = Bp;
var xp = Fi, Sp = _s, Ep = bo, Cp = Di;
function Bp(t, e) {
  var o = "";
  return (0, Cp.isSingleTag)(t) && !(0, xp.isLineBreakTag)(t) ? !1 : ((0, Sp.isElement)(t) && (0, Ep.isNativeInput)(t) ? o = t.value : t.textContent !== null && (o = t.textContent.replace("​", "")), e !== void 0 && (o = o.replace(new RegExp(e, "g"), "")), o.trim().length === 0);
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isNodeEmpty = void 0;
  var e = js;
  Object.defineProperty(t, "isNodeEmpty", { enumerable: !0, get: function() {
    return e.isNodeEmpty;
  } });
})(ws);
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.isEmpty = Ip;
var Tp = bs, Pp = ws;
function Ip(t, e) {
  t.normalize();
  for (var o = [t]; o.length > 0; ) {
    var i = o.shift();
    if (i) {
      if (t = i, (0, Tp.isLeaf)(t) && !(0, Pp.isNodeEmpty)(t, e))
        return !1;
      o.push.apply(o, Array.from(t.childNodes));
    }
  }
  return !0;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isEmpty = void 0;
  var e = ys;
  Object.defineProperty(t, "isEmpty", { enumerable: !0, get: function() {
    return e.isEmpty;
  } });
})(Jr);
var Zr = {}, xs = {};
Object.defineProperty(xs, "__esModule", { value: !0 });
xs.isFragment = Ap;
var Op = rs;
function Ap(t) {
  return (0, Op.isNumber)(t) ? !1 : !!t && !!t.nodeType && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isFragment = void 0;
  var e = xs;
  Object.defineProperty(t, "isFragment", { enumerable: !0, get: function() {
    return e.isFragment;
  } });
})(Zr);
var Qr = {}, Ss = {};
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.isHTMLString = Np;
var Lp = Mi;
function Np(t) {
  var e = (0, Lp.make)("div");
  return e.innerHTML = t, e.childElementCount > 0;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isHTMLString = void 0;
  var e = Ss;
  Object.defineProperty(t, "isHTMLString", { enumerable: !0, get: function() {
    return e.isHTMLString;
  } });
})(Qr);
var ea = {}, Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.offset = Mp;
function Mp(t) {
  var e = t.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, s = e.top + i, n = e.left + o;
  return {
    top: s,
    left: n,
    bottom: s + e.height,
    right: n + e.width
  };
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.offset = void 0;
  var e = Es;
  Object.defineProperty(t, "offset", { enumerable: !0, get: function() {
    return e.offset;
  } });
})(ea);
var oa = {}, Cs = {};
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.prepend = Fp;
function Fp(t, e) {
  Array.isArray(e) ? (e = e.reverse(), e.forEach(function(o) {
    return t.prepend(o);
  })) : t.prepend(e);
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.prepend = void 0;
  var e = Cs;
  Object.defineProperty(t, "prepend", { enumerable: !0, get: function() {
    return e.prepend;
  } });
})(oa);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.prepend = t.offset = t.make = t.isLineBreakTag = t.isSingleTag = t.isNodeEmpty = t.isLeaf = t.isHTMLString = t.isFragment = t.isEmpty = t.isElement = t.isContentEditable = t.isCollapsedWhitespaces = t.findAllInputs = t.isNativeInput = t.allInputsSelector = t.getDeepestNode = t.getDeepestBlockElements = t.getContentLength = t.fragmentToString = t.containsOnlyInlineElements = t.canSetCaret = t.calculateBaseline = t.blockElements = t.append = void 0;
  var e = Yt;
  Object.defineProperty(t, "allInputsSelector", { enumerable: !0, get: function() {
    return e.allInputsSelector;
  } });
  var o = bo;
  Object.defineProperty(t, "isNativeInput", { enumerable: !0, get: function() {
    return o.isNativeInput;
  } });
  var i = Rr;
  Object.defineProperty(t, "append", { enumerable: !0, get: function() {
    return i.append;
  } });
  var s = Zt;
  Object.defineProperty(t, "blockElements", { enumerable: !0, get: function() {
    return s.blockElements;
  } });
  var n = $r;
  Object.defineProperty(t, "calculateBaseline", { enumerable: !0, get: function() {
    return n.calculateBaseline;
  } });
  var r = Hr;
  Object.defineProperty(t, "canSetCaret", { enumerable: !0, get: function() {
    return r.canSetCaret;
  } });
  var a = Ni;
  Object.defineProperty(t, "containsOnlyInlineElements", { enumerable: !0, get: function() {
    return a.containsOnlyInlineElements;
  } });
  var c = qr;
  Object.defineProperty(t, "fragmentToString", { enumerable: !0, get: function() {
    return c.fragmentToString;
  } });
  var l = Wr;
  Object.defineProperty(t, "getContentLength", { enumerable: !0, get: function() {
    return l.getContentLength;
  } });
  var d = ds;
  Object.defineProperty(t, "getDeepestBlockElements", { enumerable: !0, get: function() {
    return d.getDeepestBlockElements;
  } });
  var u = Kr;
  Object.defineProperty(t, "getDeepestNode", { enumerable: !0, get: function() {
    return u.getDeepestNode;
  } });
  var g = Gr;
  Object.defineProperty(t, "findAllInputs", { enumerable: !0, get: function() {
    return g.findAllInputs;
  } });
  var v = Xr;
  Object.defineProperty(t, "isCollapsedWhitespaces", { enumerable: !0, get: function() {
    return v.isCollapsedWhitespaces;
  } });
  var h = is;
  Object.defineProperty(t, "isContentEditable", { enumerable: !0, get: function() {
    return h.isContentEditable;
  } });
  var f = _s;
  Object.defineProperty(t, "isElement", { enumerable: !0, get: function() {
    return f.isElement;
  } });
  var I = Jr;
  Object.defineProperty(t, "isEmpty", { enumerable: !0, get: function() {
    return I.isEmpty;
  } });
  var L = Zr;
  Object.defineProperty(t, "isFragment", { enumerable: !0, get: function() {
    return L.isFragment;
  } });
  var E = Qr;
  Object.defineProperty(t, "isHTMLString", { enumerable: !0, get: function() {
    return E.isHTMLString;
  } });
  var $ = bs;
  Object.defineProperty(t, "isLeaf", { enumerable: !0, get: function() {
    return $.isLeaf;
  } });
  var D = ws;
  Object.defineProperty(t, "isNodeEmpty", { enumerable: !0, get: function() {
    return D.isNodeEmpty;
  } });
  var A = Fi;
  Object.defineProperty(t, "isLineBreakTag", { enumerable: !0, get: function() {
    return A.isLineBreakTag;
  } });
  var B = Di;
  Object.defineProperty(t, "isSingleTag", { enumerable: !0, get: function() {
    return B.isSingleTag;
  } });
  var C = Mi;
  Object.defineProperty(t, "make", { enumerable: !0, get: function() {
    return C.make;
  } });
  var x = ea;
  Object.defineProperty(t, "offset", { enumerable: !0, get: function() {
    return x.offset;
  } });
  var j = oa;
  Object.defineProperty(t, "prepend", { enumerable: !0, get: function() {
    return j.prepend;
  } });
})(yt);
var ia = /* @__PURE__ */ ((t) => (t.Type1 = "type1", t.Type2 = "type2", t.Type3 = "type3", t))(ia || {});
class Bs {
  // 인용구 블록을 참조할 수 있도록 인스턴스 변수 추가
  constructor({ data: e, config: o, api: i, readOnly: s, block: n }) {
    const { DEFAULT_TYPE: r } = Bs;
    this.api = i, this.readOnly = s, this._data = {
      text: e.text || "",
      type: Object.values(ia).includes(e.type) && e.type || o.defaultType || r
    }, this._CSS = {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input
    }, this._block = n;
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get toolbox() {
    return {
      icon: _g,
      title: "인용구"
    };
  }
  static get contentless() {
    return !0;
  }
  static get enableLineBreaks() {
    return !0;
  }
  static get DEFAULT_TYPE() {
    return "type1";
  }
  static get conversionConfig() {
    return {
      import: "text",
      export: function(e) {
        return e.text;
      }
    };
  }
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input
    };
  }
  get settings() {
    return [
      {
        name: "type1",
        label: "인용구1"
      },
      {
        name: "type2",
        label: "인용구2"
      },
      {
        name: "type3",
        label: "인용구3"
      }
    ];
  }
  render() {
    const e = yt.make("div", [this._CSS.baseClass, this._CSS.wrapper]);
    return this._quoteElement = yt.make(
      "blockquote",
      [this._CSS.input, this._CSS.text, this.getTypeClass(this._data.type)],
      {
        contentEditable: !this.readOnly,
        innerHTML: this._data.text
      }
    ), this._quoteElement.addEventListener(
      "keydown",
      (o) => this.handleKeydown(o)
    ), e.appendChild(this._quoteElement), e;
  }
  get currentItem() {
    let e = window.getSelection().anchorNode;
    return e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode), e.closest(`.${this.CSS.text}`);
  }
  handleKeydown(e) {
    var i;
    const o = this._quoteElement;
    if (e.key === "Enter" && (e.shiftKey || (e.preventDefault(), this.getOutOfQuote())), e.key === "Backspace" && ((i = o.textContent) == null ? void 0 : i.trim().length) === 0) {
      e.preventDefault();
      const s = this.api.blocks.getCurrentBlockIndex();
      this.api.blocks.delete(s), this.api.blocks.insert("paragraph", { text: "" }), this.api.caret.setToBlock(s);
      return;
    }
  }
  getOutOfQuote() {
    this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
  }
  getTypeClass(e) {
    switch (e) {
      case "type1":
        return "blockquote_type1";
      case "type2":
        return "blockquote_type2";
      case "type3":
        return "blockquote_type3";
      default:
        return "blockquote_type1";
    }
  }
  save(e) {
    const o = e.querySelector(`.${this._CSS.text}`);
    return Object.assign(this._data, {
      text: (o == null ? void 0 : o.innerHTML) ?? ""
    });
  }
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  renderSettings() {
    return this.settings.map((e) => ({
      icon: null,
      // 아이콘이 필요 없으므로 null로 설정
      label: this.api.i18n.t(e.label),
      onActivate: () => this._toggleTune(e.name),
      isActive: this._data.type === e.name,
      closeOnActivate: !0
    }));
  }
  _toggleTune(e) {
    this._data.type = e, this._quoteElement && (this._quoteElement.classList.remove(
      "blockquote_type1",
      "blockquote_type2",
      "blockquote_type3"
    ), this._quoteElement.classList.add(this.getTypeClass(e))), this._block.dispatchChange();
  }
}
const H = class H {
  constructor({ data: e, api: o }) {
    this.handleKeyDown = (i) => {
      const s = i.target instanceof HTMLInputElement;
      i.key === "Backspace" && !s && (i.preventDefault(), this.api.blocks.delete());
    }, this.api = o, this.data = e || { images: [], caption: "" }, this._CSS = this.initializeCSS(), this._element = this.drawView(), this.activateCaption = !!this.data.caption;
  }
  // Static Getters
  static get isReadOnlySupported() {
    return !0;
  }
  static get contentless() {
    return !0;
  }
  static get toolbox() {
    return {
      icon: "🖼️",
      title: "Unified Image"
    };
  }
  static get pasteConfig() {
    return { tags: [] };
  }
  initializeCSS() {
    return {
      block: this.api.styles.block,
      imageWrapper: "ce-unified-image-wrapper",
      wrapper: "ce-unified-image",
      groupImage: "unified-image-wrapper",
      imageItem: "unified-image-item",
      caption: "unified-image-caption"
    };
  }
  drawView() {
    const e = document.createElement("div");
    e.classList.add(this._CSS.wrapper, this._CSS.block), e.addEventListener("dragover", this.onDragOverBlock.bind(this)), e.addEventListener("drop", this.onDropBlock.bind(this));
    const o = document.createElement("div");
    o.classList.add(this._CSS.imageWrapper), this.renderImages(o);
    const i = document.createElement("input");
    return i.classList.add(this._CSS.caption), i.placeholder = "이미지를 설명해보세요", i.value = this.data.caption || "", i.addEventListener("input", (s) => {
      const n = s.target;
      this.data.caption = n.value;
    }), this.updateCaptionVisibility(i), o.addEventListener("click", () => {
      this.showCaption(i), this._element.classList.add("active"), document.addEventListener("keydown", this.handleKeyDown);
    }), document.addEventListener(
      "click",
      (s) => {
        this._element.contains(s.target) || (this._element.classList.remove("active"), i.value === "" ? this.hideCaption(i) : this.showCaption(i), document.removeEventListener("keydown", this.handleKeyDown));
      },
      !0
    ), e.appendChild(o), e.appendChild(i), e;
  }
  updateCaptionVisibility(e) {
    this.data.caption || H.activeImageBlock === this && this.activateCaption ? this.showCaption(e) : this.hideCaption(e);
  }
  deactivate() {
    this.activateCaption = !1, this._element.classList.remove("active");
  }
  showCaption(e) {
    this.activateCaption = !0, e.style.display = "block";
  }
  hideCaption(e) {
    this.activateCaption = !1, e.style.display = "none";
  }
  renderImages(e) {
    const o = this.data.images || [], i = o.reduce(
      (s, n) => s + n.ratio,
      0
    );
    o.forEach((s, n) => {
      const r = this.createImageWrapper(
        s,
        n,
        i,
        o.length
      );
      e.appendChild(r);
    });
  }
  createImageWrapper(e, o, i, s) {
    const n = document.createElement("div"), r = document.createElement("img");
    n.classList.add(this._CSS.groupImage), n.dataset.index = String(o), r.classList.add(this._CSS.imageItem), r.src = e.url, r.alt = e.name, r.draggable = !0, this.addImageEventListeners(n, e, o);
    const a = i > 0 ? `${e.ratio / i * 100}%` : "100%";
    n.style.width = s === 1 && e.width < 800 ? `${e.width}px` : a, n.appendChild(r);
    const c = document.createElement("div");
    c.classList.add("image-resizer-handle"), n.appendChild(c);
    let l = 0, d = 0;
    const u = (v) => {
      const h = v.clientX - l, f = d + h;
      f > 50 && (n.style.width = `${f}px`, e.width = f, e.ratio = f / e.height);
    }, g = () => {
      document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", g);
    };
    return c.addEventListener("mousedown", (v) => {
      v.preventDefault(), l = v.clientX, d = n.getBoundingClientRect().width, document.addEventListener("mousemove", u), document.addEventListener("mouseup", g);
    }), n;
  }
  addImageEventListeners(e, o, i) {
    e.addEventListener(
      "dragstart",
      (s) => this.onDragStart(s, o, i)
    ), e.addEventListener("dragover", (s) => this.onDragOver(s, i)), e.addEventListener("drop", (s) => this.onDrop(s, i)), e.addEventListener("dragleave", this.onDragLeave.bind(this));
  }
  onDragStart(e, o, i) {
    e.dataTransfer && (e.dataTransfer.effectAllowed = "move", H.draggedImage = o, H.sourceInstance = this, H.sourceIndex = i, e.dataTransfer.setData(
      "application/json",
      JSON.stringify({
        imageData: o,
        sourceIndex: i,
        blockIndex: this.api.blocks.getCurrentBlockIndex()
      })
    ), this.deactivate(), H.activeImageBlock = null);
  }
  onDragOver(e, o) {
    e.preventDefault(), e.stopPropagation(), this.clearDragOverEffects();
    const i = e.currentTarget;
    if (!i || H.sourceInstance && H.sourceInstance === this && H.sourceIndex === o)
      return;
    const s = this.getDropType(e, i);
    let n = i;
    if ((s === "top" || s === "bottom") && (n = i.parentElement || i), !!n) {
      switch (s) {
        case "top":
          n.classList.add("drag-over-top");
          break;
        case "bottom":
          n.classList.add("drag-over-bottom");
          break;
        case "left":
          n.classList.add("drag-over-left");
          break;
        case "right":
          n.classList.add("drag-over-right");
          break;
      }
      i.dataset.dropType = s;
    }
  }
  getDropType(e, o) {
    const i = o.getBoundingClientRect(), s = e.clientX, n = e.clientY, r = i.left + i.width / 2, a = i.top + i.height / 2, c = s - r, l = n - a;
    return Math.abs(l) > Math.abs(c) ? l < 0 ? "top" : "bottom" : c < 0 ? "left" : "right";
  }
  async onDrop(e, o) {
    if (e.preventDefault(), e.stopPropagation(), !e.dataTransfer) return;
    const i = e.dataTransfer.getData("application/json");
    if (!i) return;
    const { sourceIndex: s, blockIndex: n } = JSON.parse(i), r = this.api.blocks.getBlockByIndex(n), a = e.currentTarget;
    if (H.sourceInstance && H.sourceInstance === this && s === o)
      return;
    const c = a.dataset.dropType, l = c === "bottom" ? this.api.blocks.getCurrentBlockIndex() + 1 : this.api.blocks.getCurrentBlockIndex();
    if (c === "top" || c === "bottom")
      this.onDropNewBlock(c, n, o, l);
    else {
      const d = this.getDropPosition(e, a);
      H.sourceInstance === this ? this.handleInternalDrop(s, d) : H.sourceInstance && H.draggedImage && await this.handleExternalDrop(r, n, d);
    }
    this.clearDragOverEffects(), this.updateView(), H.draggedImage = null, H.sourceInstance = null, H.sourceIndex = null;
  }
  onDropNewBlock(e, o, i, s) {
    if (!H.draggedImage || !H.sourceInstance || o === s && H.sourceIndex === i || H.sourceInstance.data.images.length === 1 && e === "top" && o === s - 1 || H.sourceInstance.data.images.length === 1 && e === "bottom" && o === s + 1)
      return;
    const n = {
      url: H.draggedImage.url,
      name: H.draggedImage.name,
      ratio: H.draggedImage.ratio,
      width: H.draggedImage.width
    }, r = [...H.sourceInstance.data.images];
    r.splice(H.sourceIndex, 1), H.sourceInstance.data.images = r;
    const a = { images: [n] };
    if (this.api.blocks.insert(
      "unifiedImage",
      a,
      {},
      s,
      !0
    ), r.length === 0) {
      const c = o > s ? o + 1 : o;
      this.api.blocks.delete(c);
    } else H.sourceInstance && H.sourceInstance.updateView();
    H.draggedImage = null, H.sourceInstance = null, H.sourceIndex = null, this.updateView();
  }
  getDropPosition(e, o) {
    const i = o.getBoundingClientRect(), s = e.clientX, n = i.left, r = i.width;
    return s < n + r / 2 ? parseInt(o.dataset.index || "0") : parseInt(o.dataset.index || "0") + 1;
  }
  handleInternalDrop(e, o) {
    const i = [...this.data.images], [s] = i.splice(e, 1);
    i.splice(o, 0, s), this.data.images = i, this.updateView();
  }
  async handleExternalDrop(e, o, i) {
    const s = [...H.sourceInstance.data.images], n = [...this.data.images];
    if (n.length < 3) {
      s.splice(H.sourceIndex, 1), H.sourceInstance.data.images = s, n.splice(i, 0, H.draggedImage), this.data.images = n, await this.api.blocks.update(e.id, {
        ...H.sourceInstance.data
      });
      const r = this.api.blocks.getBlockByIndex(
        this.api.blocks.getCurrentBlockIndex()
      );
      await this.api.blocks.update(r.id, this.data), s.length === 0 && this.api.blocks.delete(o);
    }
    this.updateView();
  }
  onDragLeave(e) {
    e.preventDefault(), e.stopPropagation(), this.clearDragOverEffects();
  }
  clearDragOverEffects() {
    document.querySelectorAll(
      ".drag-over-left, .drag-over-right, .drag-over-top, .drag-over-bottom"
    ).forEach((o) => {
      o.classList.remove(
        "drag-over-left",
        "drag-over-right",
        "drag-over-top",
        "drag-over-bottom"
      );
    });
  }
  onDragOverBlock(e) {
    if (e.preventDefault(), e.stopPropagation(), H.sourceInstance && H.sourceInstance === this)
      return;
    if (this.data.images && this.data.images.length >= 3) {
      e.dataTransfer.dropEffect = "none";
      return;
    }
    const o = this._element.querySelectorAll(`.${this._CSS.groupImage}`);
    if (this.clearDragOverEffects(), o.length === 0)
      this._element.classList.add("drag-over-empty");
    else {
      const i = o[o.length - 1], s = i.getBoundingClientRect();
      e.clientX > s.right && i.classList.add("drag-over-right");
    }
    this.updateView();
  }
  onDropBlock(e) {
    e.preventDefault(), e.stopPropagation(), !(H.sourceInstance && H.sourceInstance === this) && (!H.draggedImage || !H.sourceInstance || (this.handleBlockDrop(e), this._element.classList.remove("drag-over-empty"), H.draggedImage = null, H.sourceInstance = null, H.sourceIndex = null, this.updateView()));
  }
  handleBlockDrop(e) {
    const o = [...this.data.images || []];
    if (o.length < 3) {
      let i = o.length;
      const s = this._element.querySelectorAll(`.${this._CSS.groupImage}`);
      s.length > 0 && (i = this.determineDropIndex(e, s)), o.splice(i, 0, H.draggedImage), this.data.images = o;
      const n = [...H.sourceInstance.data.images];
      n.splice(H.sourceIndex, 1), H.sourceInstance.data.images = n, this.updateBlocks(), H.sourceInstance.updateView(), this.updateView();
    }
  }
  determineDropIndex(e, o) {
    for (let i = 0; i < o.length; i++) {
      const n = o[i].getBoundingClientRect();
      if (e.clientX < n.left + n.width / 2)
        return i;
    }
    return o.length;
  }
  updateBlocks() {
    const e = this.api.blocks.getBlockByIndex(
      this.api.blocks.getCurrentBlockIndex() - 1
    );
    this.api.blocks.update(e.id, H.sourceInstance.data);
    const o = this.api.blocks.getBlockByIndex(
      this.api.blocks.getCurrentBlockIndex()
    );
    this.api.blocks.update(o.id, this.data);
  }
  updateView() {
    const e = this.drawView();
    this._element.replaceWith(e), this._element = e;
  }
  save() {
    return this.data;
  }
  onPaste() {
    this.data = {};
  }
  render() {
    return this._element;
  }
};
H.draggedImage = null, H.sourceInstance = null, H.sourceIndex = null, H.activeImageBlock = null;
let kt = H;
class Dp {
  constructor({ data: e, api: o }) {
    this.handleKeyDown = (i) => {
      const s = i.target instanceof HTMLInputElement;
      i.key === "Backspace" && !s && (i.preventDefault(), this.api.blocks.delete());
    }, this.api = o, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-video",
      video: "video-wrapper",
      caption: "video-caption",
      active: "ce-video--active"
    }, this.data = e || { url: "", caption: "" }, this._element = this.drawView();
  }
  static get isReadOnlySupported() {
    return !0;
  }
  static get contentless() {
    return !0;
  }
  drawView() {
    const e = document.createElement("div"), o = document.createElement("video"), i = document.createElement("input");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), o.classList.add(this._CSS.video), i.classList.add(this._CSS.caption), o.addEventListener("click", (s) => {
      e.classList.add(this._CSS.active), this.showCaption(i), document.addEventListener("keydown", this.handleKeyDown);
    }), document.addEventListener(
      "click",
      (s) => {
        this._element.contains(s.target) || (e.classList.remove(this._CSS.active), this.hideCaption(i), document.removeEventListener("keydown", this.handleKeyDown));
      },
      !0
    ), i.addEventListener("input", (s) => {
      const n = s.target;
      this.data.caption = n.value;
    }), this.data && this.data.url && (o.src = this.data.url, o.controls = !0, i.placeholder = "비디오를 설명해보세요", this.data.caption ? (i.value = this.data.caption, i.style.display = "block") : i.style.display = "none", e.appendChild(o), e.appendChild(i)), e;
  }
  showCaption(e) {
    e.style.display = "block";
  }
  hideCaption(e) {
    this.data.caption || (e.style.display = "none");
  }
  render() {
    return this._element;
  }
  save() {
    return this.data;
  }
  static get toolbox() {
    return {
      icon: "🖼️",
      title: "Video"
    };
  }
  static get pasteConfig() {
    return { tags: ["VIDEO"] };
  }
  onPaste() {
    this.data = {};
  }
}
const Xe = class Xe {
  constructor(e) {
    this.tag = "SPAN", this.range = null, this.currentFont = null, this.fontPickerContainer = null, this.api = e.api, this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
  }
  static get CSS() {
    return "cdx-font-picker";
  }
  render() {
    const e = document.createElement("button");
    e.classList.add("font-picker-wrapper"), e.classList.add(this.iconClasses.base), e.type = "button", this.button = document.createElement("div");
    const o = document.createElement("span");
    o.classList.add("font-icon"), o.textContent = this.toolboxIcon, this.button.appendChild(o);
    const i = document.createElement("div");
    return i.classList.add("dropdown-icon"), i.innerHTML = `${hg}`, e.appendChild(this.button), e.appendChild(i), e;
  }
  renderActions() {
    return this.fontPickerContainer = document.createElement("ul"), this.fontPickerContainer.classList.add("font-picker-container"), Xe.FONT_OPTIONS.forEach((e) => {
      const o = document.createElement("li");
      o.classList.add("font-label"), o.textContent = e.label, o.style.fontFamily = e.value, o.setAttribute("data-value", e.value), o.addEventListener("click", () => {
        this.customSurround(e.value), this.updateToolboxIcon();
      }), this.fontPickerContainer.appendChild(o);
    }), this.fontPickerContainer;
  }
  surround(e) {
    e && (this.range = e);
  }
  customSurround(e) {
    const o = this.api.selection.findParentTag(
      this.tag,
      Xe.CSS
    );
    o ? this.unwrap(o) : this.wrap(e), this.currentFont = e;
  }
  wrap(e) {
    const o = document.createElement(this.tag);
    if (o.classList.add(Xe.CSS), e && (o.style.fontFamily = e, this.currentFont = e), this.range) {
      const i = this.range.extractContents();
      this.flattenSpans(i), o.appendChild(i), this.range.deleteContents(), this.range.insertNode(o), this.api.selection.expandToTag(o);
    }
  }
  flattenSpans(e) {
    (e instanceof DocumentFragment || e instanceof Element) && e.querySelectorAll("span.cdx-font-picker").forEach((i) => {
      if (i.parentNode) {
        const s = document.createTextNode(i.textContent || "");
        i.parentNode.replaceChild(s, i);
      }
    });
  }
  unwrap(e) {
    var n;
    this.api.selection.expandToTag(e);
    const o = window.getSelection();
    if (!o)
      return;
    const i = o.getRangeAt(0);
    if (!i)
      return;
    const s = i.extractContents();
    (n = e.parentNode) == null || n.removeChild(e), i.insertNode(s), o.removeAllRanges(), o.addRange(i);
  }
  checkState() {
    const e = this.api.selection.findParentTag(this.tag, Xe.CSS);
    if (!e)
      this.currentFont = "MalgunGothic";
    else {
      const o = e.style.fontFamily.replace(/['"]+/g, "");
      this.currentFont = o;
    }
    return this.updateToolboxIcon(), !1;
  }
  updateToolboxIcon() {
    if (!this.fontPickerContainer) return;
    const e = this.fontPickerContainer.querySelectorAll(".font-label");
    e.forEach((i) => {
      i.classList.remove("font-active");
    });
    const o = Array.from(e).find(
      (i) => i.getAttribute("data-value") === this.currentFont
    );
    o && o.classList.add("font-active");
  }
  get toolboxIcon() {
    return "F";
  }
  static get sanitize() {
    return {
      span: {
        class: Xe.CSS,
        style: !0
      }
    };
  }
};
Xe.FONT_OPTIONS = [
  { value: "MalgunGothic", label: "Malgun Gothic" },
  { value: "NotoSans", label: "본고딕" },
  { value: "NanumMyeongjo", label: "나눔명조" },
  { value: "NanumGothic", label: "나눔고딕" },
  { value: "NanumBarunGothic", label: "나눔바른고딕" },
  { value: "Helvetica", label: "Helvetica" },
  { value: "Georgia", label: "Georgia" }
], Xe.isInline = !0;
let wt = Xe;
const ao = class ao {
  constructor(e) {
    this.tag = "S", this.api = e.api, this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
  }
  static get CSS() {
    return "cdx-strike-through";
  }
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
  }
  surround(e) {
    if (!e)
      return;
    const o = this.api.selection.findParentTag(
      this.tag,
      ao.CSS
    );
    o ? this.unwrap(o) : this.wrap(e);
  }
  wrap(e) {
    const o = document.createElement(this.tag);
    o.classList.add(ao.CSS), o.appendChild(e.extractContents()), e.insertNode(o), this.api.selection.expandToTag(o);
  }
  unwrap(e) {
    var n;
    this.api.selection.expandToTag(e);
    const o = window.getSelection();
    if (!o)
      return;
    const i = o.getRangeAt(0);
    if (!i)
      return;
    const s = i.extractContents();
    s && ((n = e.parentNode) == null || n.removeChild(e), i.insertNode(s), o.removeAllRanges(), o.addRange(i));
  }
  checkState() {
    var o;
    const e = this.api.selection.findParentTag(
      this.tag,
      ao.CSS
    );
    return (o = this.button) == null || o.classList.toggle(this.iconClasses.active, !!e), !!e;
  }
  get toolboxIcon() {
    return fg;
  }
  static get sanitize() {
    return {
      u: {
        class: ao.CSS
      }
    };
  }
};
ao.isInline = !0;
let jt = ao;
const co = class co {
  constructor(e) {
    this.tag = "SPAN", this.colors = [], this.range = null, this.currentColor = null, this.api = e.api, this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    }, e.config && e.config.colorCollections && (this.colors = e.config.colorCollections);
  }
  static get CSS() {
    return "cdx-background-color-picker";
  }
  render() {
    this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(
      this.iconClasses.base,
      "background-color-picker-btn"
    );
    const e = document.createElement("span");
    return e.classList.add("text-icon"), e.textContent = this.toolboxIcon, this.button.appendChild(e), this.button;
  }
  renderActions() {
    const e = document.createElement("div");
    return e.classList.add("color-picker-container"), this.colors.forEach((o) => {
      const i = document.createElement("div");
      i.classList.add("color-box"), i.style.backgroundColor = o, i.addEventListener("click", () => {
        this.customSurround(o), this.updateToolboxIcon();
      }), e.appendChild(i);
    }), e;
  }
  surround(e) {
    e && (this.range = e);
  }
  customSurround(e) {
    const o = this.api.selection.findParentTag(
      this.tag,
      co.CSS
    );
    o ? this.unwrap(o) : this.wrap(e), this.currentColor = e;
  }
  wrap(e) {
    const o = document.createElement(this.tag);
    if (o.classList.add(co.CSS), e && (o.style.backgroundColor = e, this.currentColor = e), this.range) {
      const i = this.range.extractContents();
      this.flattenSpans(i), o.appendChild(i), this.range.deleteContents(), this.range.insertNode(o), this.api.selection.expandToTag(o);
    }
  }
  // 중첩된 <span> 요소를 텍스트 노드로 변환하는 메서드
  flattenSpans(e) {
    (e instanceof DocumentFragment || e instanceof Element) && e.querySelectorAll("span.cdx-background-color-picker").forEach((i) => {
      if (i.parentNode) {
        const s = document.createTextNode(i.textContent || "");
        i.parentNode.replaceChild(s, i);
      }
    });
  }
  unwrap(e) {
    var n;
    this.api.selection.expandToTag(e);
    const o = window.getSelection();
    if (!o)
      return;
    const i = o.getRangeAt(0);
    if (!i)
      return;
    const s = i.extractContents();
    (n = e.parentNode) == null || n.removeChild(e), i.insertNode(s), o.removeAllRanges(), o.addRange(i);
  }
  checkState() {
    const e = this.api.selection.findParentTag(
      this.tag,
      co.CSS
    );
    if (e || (this.currentColor = "transparent", this.updateToolboxIcon()), e) {
      const o = e.style.backgroundColor;
      this.currentColor = o, this.updateToolboxIcon();
    }
    return !1;
  }
  updateToolboxIcon() {
    this.button && (this.button.style.backgroundColor = this.currentColor, (this.currentColor !== "transparent" || !this.currentColor) && (this.button.style.color = "#ffffff", this.button.style.border = "none"), (this.currentColor === "#ffffff" || this.currentColor === "rgb(255, 255, 255)") && (this.button.style.color = "#000000", this.button.style.border = "1px solid #ccc"));
  }
  get toolboxIcon() {
    return "A";
  }
  static get sanitize() {
    return {
      span: {
        class: co.CSS,
        style: !0
      }
    };
  }
};
co.isInline = !0;
let xt = co;
const lo = class lo {
  constructor(e) {
    this.tag = "SPAN", this.colors = [], this.range = null, this.api = e.api, this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    }, e.config && e.config.colorCollections && (this.colors = e.config.colorCollections);
  }
  static get CSS() {
    return "cdx-color-picker";
  }
  render() {
    this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base, "color-picker-btn"), this.colorPreview = document.createElement("span"), this.colorPreview.classList.add("color-preview");
    const e = document.createElement("span");
    return e.classList.add("text-icon"), e.textContent = this.toolboxIcon, this.button.appendChild(e), this.button.appendChild(this.colorPreview), this.button;
  }
  renderActions() {
    const e = document.createElement("div");
    return e.classList.add("color-picker-container"), this.colors.forEach((o) => {
      const i = document.createElement("div");
      i.classList.add("color-box"), i.style.backgroundColor = o, i.addEventListener("click", () => {
        this.customSurround(o), this.updateToolboxIcon();
      }), e.appendChild(i);
    }), e;
  }
  surround(e) {
    e && (this.range = e);
  }
  customSurround(e) {
    const o = this.api.selection.findParentTag(
      this.tag,
      lo.CSS
    );
    o ? this.unwrap(o) : this.wrap(e), this.currentColor = e;
  }
  wrap(e) {
    const o = document.createElement(this.tag);
    if (o.classList.add(lo.CSS), e && (o.style.color = e, this.currentColor = e), this.range) {
      const i = this.range.extractContents();
      this.flattenSpans(i), o.appendChild(i), this.range.deleteContents(), this.range.insertNode(o), this.api.selection.expandToTag(o);
    }
  }
  // 중첩된 <span> 요소를 텍스트 노드로 변환하는 메서드
  flattenSpans(e) {
    (e instanceof DocumentFragment || e instanceof Element) && e.querySelectorAll("span.cdx-color-picker").forEach((i) => {
      if (i.parentNode) {
        const s = document.createTextNode(i.textContent || "");
        i.parentNode.replaceChild(s, i);
      }
    });
  }
  unwrap(e) {
    var n;
    this.api.selection.expandToTag(e);
    const o = window.getSelection();
    if (!o)
      return;
    const i = o.getRangeAt(0);
    if (!i)
      return;
    const s = i.extractContents();
    (n = e.parentNode) == null || n.removeChild(e), i.insertNode(s), o.removeAllRanges(), o.addRange(i);
  }
  checkState() {
    const e = this.api.selection.findParentTag(this.tag, lo.CSS);
    if (e) {
      const o = e.style.color;
      this.currentColor = o, this.updateToolboxIcon();
    }
    return !1;
  }
  updateToolboxIcon() {
    this.colorPreview && (this.colorPreview.style.backgroundColor = this.currentColor);
  }
  get toolboxIcon() {
    return "A";
  }
  static get sanitize() {
    return {
      span: {
        class: lo.CSS,
        style: !0
      }
    };
  }
};
lo.isInline = !0;
let St = lo;
const uo = class uo {
  constructor(e) {
    this.tag = "U", this.api = e.api, this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
  }
  static get CSS() {
    return "cdx-underline";
  }
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
  }
  surround(e) {
    if (!e)
      return;
    const o = this.api.selection.findParentTag(
      this.tag,
      uo.CSS
    );
    o ? this.unwrap(o) : this.wrap(e);
  }
  wrap(e) {
    const o = document.createElement(this.tag);
    o.classList.add(uo.CSS), o.appendChild(e.extractContents()), e.insertNode(o), this.api.selection.expandToTag(o);
  }
  unwrap(e) {
    var n;
    this.api.selection.expandToTag(e);
    const o = window.getSelection();
    if (!o)
      return;
    const i = o.getRangeAt(0);
    if (!i)
      return;
    const s = i.extractContents();
    s && ((n = e.parentNode) == null || n.removeChild(e), i.insertNode(s), o.removeAllRanges(), o.addRange(i));
  }
  checkState() {
    var o;
    const e = this.api.selection.findParentTag(this.tag, uo.CSS);
    return (o = this.button) == null || o.classList.toggle(this.iconClasses.active, !!e), !!e;
  }
  get toolboxIcon() {
    return bg;
  }
  static get sanitize() {
    return {
      u: {
        class: uo.CSS
      }
    };
  }
};
uo.isInline = !0;
let Et = uo;
const Rp = {
  /* Block Tool */
  paragraph: {
    class: Kt,
    inlineToolbar: [
      "link",
      "bold",
      "underline",
      "strikethrough",
      "font",
      "color",
      "backgroundColor"
    ]
  },
  header: {
    class: kg,
    inlineToolbar: [],
    config: {
      levels: [1, 2, 3],
      defaultLevel: 1
    }
  },
  quote: {
    class: Bs,
    inlineToolbar: []
  },
  list: {
    class: wg,
    inlineToolbar: []
  },
  unifiedImage: kt,
  video: Dp,
  file: ag,
  place: xg,
  emoji: rg,
  delimiter: ng,
  /* Inline Tool */
  font: wt,
  underline: Et,
  strikethrough: jt,
  color: {
    class: St,
    config: {
      colorCollections: [
        "#ffffff",
        "#000000",
        "#16b06d",
        "#00c6be",
        "#2e84b6",
        "#959595",
        "#f4c016",
        "#f6655b",
        "#ec4c69",
        "#5c5cb2"
      ]
    }
  },
  backgroundColor: {
    class: xt,
    config: {
      colorCollections: [
        "#ffffff",
        "#000000",
        "#16b06d",
        "#00c6be",
        "#2e84b6",
        "#959595",
        "#f4c016",
        "#f6655b",
        "#ec4c69",
        "#5c5cb2"
      ]
    }
  }
}, $p = Ca(() => {
  const { setEditor: t } = Ae(), e = to(null);
  return Jo(() => {
    if (!e.current) {
      const o = new eg({
        holder: "editorjs",
        autofocus: !0,
        tools: Rp,
        onReady: () => {
          new sg({ editor: o }), new ig(o), t(o);
        }
      });
      e.current = o;
    }
  }, []), /* @__PURE__ */ R.jsx(Vl, { id: "editorjs", style: { cursor: "pointer" } });
});
function zp({ onUpload: t, width: e }) {
  const o = to(null), [i, s] = Yo(0);
  return Jo(() => {
    const n = () => {
      if (o.current) {
        const r = o.current.getBoundingClientRect();
        r.top > 0 && s(r.top + 40), r.top <= 0 && s(40);
      }
    };
    return window.addEventListener("scroll", n), () => {
      window.removeEventListener("scroll", n);
    };
  }, []), /* @__PURE__ */ R.jsxs(Dc, { ref: o, $width: e, children: [
    /* @__PURE__ */ R.jsx($p, {}),
    /* @__PURE__ */ R.jsx(Wl, { toolbarTop: i, onUpload: t })
  ] });
}
export {
  zp as EditorSection
};
