!(function () {
    try {
        var e =
            "undefined" != typeof window
                ? window
                : "undefined" != typeof global
                    ? global
                    : "undefined" != typeof globalThis
                        ? globalThis
                        : "undefined" != typeof self
                            ? self
                            : {},
            n = new e.Error().stack;
        n &&
            ((e._posthogChunkIds = e._posthogChunkIds || {}),
                (e._posthogChunkIds[n] = "0197c2e1-92b4-78f3-a1d2-ab39e005301a"));
    } catch (e) { }
})();
var ir = (L, x) => () => (
    x ||
    L(
        (x = {
            exports: {},
        }).exports,
        x
    ),
    x.exports
);
var or = ir((At, Le) => {
    typeof Le < "u" && (Le = void 0);
    typeof At < "u" && (At = void 0);
    function rr() {
        /*!
         * jQuery JavaScript Library v1.10.0
         * http://jquery.com/
         *
         * Includes Sizzle.js
         * http://sizzlejs.com/
         *
         * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2013-05-24T18:39Z
         */
        (function (L, x) {
            var qe,
                Dt,
                ne = typeof x,
                Mn = L.location,
                E = L.document,
                Lt = E.documentElement,
                qn = L.jQuery,
                Pn = L.$,
                Pe = {},
                we = [],
                Ke = "1.10.0",
                Ht = we.concat,
                Ze = we.push,
                de = we.slice,
                jt = we.indexOf,
                Fn = Pe.toString,
                Ce = Pe.hasOwnProperty,
                $e = Ke.trim,
                n = function (e, t) {
                    return new n.fn.init(e, t, Dt);
                },
                Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ie = /\S+/g,
                Rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                Bn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                _t = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                Wn = /^[\],:{}\s]*$/,
                In = /(?:^|:|,)(?:\s*\[)+/g,
                zn = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                Xn = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
                Un = /^-ms-/,
                Vn = /-([\da-z])/gi,
                Qn = function (e, t) {
                    return t.toUpperCase();
                },
                ae = function (e) {
                    (E.addEventListener ||
                        e.type === "load" ||
                        E.readyState === "complete") &&
                        (Ot(), n.ready());
                },
                Ot = function () {
                    E.addEventListener
                        ? (E.removeEventListener("DOMContentLoaded", ae, !1),
                            L.removeEventListener("load", ae, !1))
                        : (E.detachEvent("onreadystatechange", ae),
                            L.detachEvent("onload", ae));
                };
            (n.fn = n.prototype =
            {
                jquery: Ke,
                constructor: n,
                init: function (e, t, i) {
                    var r, o;
                    if (!e) return this;
                    if (typeof e == "string")
                        if (
                            (e.charAt(0) === "<" &&
                                e.charAt(e.length - 1) === ">" &&
                                e.length >= 3
                                ? (r = [null, e, null])
                                : (r = Bn.exec(e)),
                                r && (r[1] || !t))
                        )
                            if (r[1]) {
                                if (
                                    ((t = t instanceof n ? t[0] : t),
                                        n.merge(
                                            this,
                                            n.parseHTML(
                                                r[1],
                                                t && t.nodeType ? t.ownerDocument || t : E,
                                                !0
                                            )
                                        ),
                                        _t.test(r[1]) && n.isPlainObject(t))
                                )
                                    for (r in t)
                                        n.isFunction(this[r])
                                            ? this[r](t[r])
                                            : this.attr(r, t[r]);
                                return this;
                            } else {
                                if (((o = E.getElementById(r[2])), o && o.parentNode)) {
                                    if (o.id !== r[2]) return i.find(e);
                                    (this.length = 1), (this[0] = o);
                                }
                                return (this.context = E), (this.selector = e), this;
                            }
                        else
                            return !t || t.jquery
                                ? (t || i).find(e)
                                : this.constructor(t).find(e);
                    else {
                        if (e.nodeType)
                            return (this.context = this[0] = e), (this.length = 1), this;
                        if (n.isFunction(e)) return i.ready(e);
                    }
                    return (
                        e.selector !== x &&
                        ((this.selector = e.selector), (this.context = e.context)),
                        n.makeArray(e, this)
                    );
                },
                selector: "",
                length: 0,
                toArray: function () {
                    return de.call(this);
                },
                get: function (e) {
                    return e == null
                        ? this.toArray()
                        : e < 0
                            ? this[this.length + e]
                            : this[e];
                },
                pushStack: function (e) {
                    var t = n.merge(this.constructor(), e);
                    return (t.prevObject = this), (t.context = this.context), t;
                },
                each: function (e, t) {
                    return n.each(this, e, t);
                },
                ready: function (e) {
                    return n.ready.promise().done(e), this;
                },
                slice: function () {
                    return this.pushStack(de.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                eq: function (e) {
                    var t = this.length,
                        i = +e + (e < 0 ? t : 0);
                    return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
                },
                map: function (e) {
                    return this.pushStack(
                        n.map(this, function (t, i) {
                            return e.call(t, i, t);
                        })
                    );
                },
                end: function () {
                    return this.prevObject || this.constructor(null);
                },
                push: Ze,
                sort: [].sort,
                splice: [].splice,
            }),
                (n.fn.init.prototype = n.fn),
                (n.extend = n.fn.extend =
                    function () {
                        var e,
                            t,
                            i,
                            r,
                            o,
                            a,
                            s = arguments[0] || {},
                            f = 1,
                            p = arguments.length,
                            d = !1;
                        for (
                            typeof s == "boolean" &&
                            ((d = s), (s = arguments[1] || {}), (f = 2)),
                            typeof s != "object" && !n.isFunction(s) && (s = {}),
                            p === f && ((s = this), --f);
                            f < p;
                            f++
                        )
                            if ((o = arguments[f]) != null)
                                for (r in o)
                                    (e = s[r]),
                                        (i = o[r]),
                                        !(r === "__proto__" || s === i) &&
                                        (d && i && (n.isPlainObject(i) || (t = n.isArray(i)))
                                            ? (t
                                                ? ((t = !1), (a = e && n.isArray(e) ? e : []))
                                                : (a = e && n.isPlainObject(e) ? e : {}),
                                                (s[r] = n.extend(d, a, i)))
                                            : i !== x && (s[r] = i));
                        return s;
                    }),
                n.extend({
                    expando: "jQuery" + (Ke + Math.random()).replace(/\D/g, ""),
                    noConflict: function (e) {
                        return (
                            L.$ === n && (L.$ = Pn), e && L.jQuery === n && (L.jQuery = qn), n
                        );
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (e) {
                        e ? n.readyWait++ : n.ready(!0);
                    },
                    ready: function (e) {
                        if (!(e === !0 ? --n.readyWait : n.isReady)) {
                            if (!E.body) return setTimeout(n.ready);
                            (n.isReady = !0),
                                !(e !== !0 && --n.readyWait > 0) &&
                                (qe.resolveWith(E, [n]),
                                    n.fn.trigger && n(E).trigger("ready").off("ready"));
                        }
                    },
                    isFunction: function (e) {
                        return n.type(e) === "function";
                    },
                    isArray:
                        Array.isArray ||
                        function (e) {
                            return n.type(e) === "array";
                        },
                    isWindow: function (e) {
                        return e != null && e == e.window;
                    },
                    isNumeric: function (e) {
                        return !isNaN(parseFloat(e)) && isFinite(e);
                    },
                    type: function (e) {
                        return e == null
                            ? String(e)
                            : typeof e == "object" || typeof e == "function"
                                ? Pe[Fn.call(e)] || "object"
                                : typeof e;
                    },
                    isPlainObject: function (e) {
                        var t;
                        if (!e || n.type(e) !== "object" || e.nodeType || n.isWindow(e))
                            return !1;
                        try {
                            if (
                                e.constructor &&
                                !Ce.call(e, "constructor") &&
                                !Ce.call(e.constructor.prototype, "isPrototypeOf")
                            )
                                return !1;
                        } catch {
                            return !1;
                        }
                        if (n.support.ownLast) for (t in e) return Ce.call(e, t);
                        for (t in e);
                        return t === x || Ce.call(e, t);
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    error: function (e) {
                        throw new Error(e);
                    },
                    parseHTML: function (e, t, i) {
                        if (!e || typeof e != "string") return null;
                        typeof t == "boolean" && ((i = t), (t = !1)), (t = t || E);
                        var r = _t.exec(e),
                            o = !i && [];
                        return r
                            ? [t.createElement(r[1])]
                            : ((r = n.buildFragment([e], t, o)),
                                o && n(o).remove(),
                                n.merge([], r.childNodes));
                    },
                    parseJSON: function (e) {
                        if (L.JSON && L.JSON.parse) return L.JSON.parse(e);
                        if (e === null) return e;
                        if (
                            typeof e == "string" &&
                            ((e = n.trim(e)),
                                e && Wn.test(e.replace(zn, "@").replace(Xn, "]").replace(In, "")))
                        )
                            return new Function("return " + e)();
                        n.error("Invalid JSON: " + e);
                    },
                    parseXML: function (e) {
                        var t, i;
                        if (!e || typeof e != "string") return null;
                        try {
                            L.DOMParser
                                ? ((i = new DOMParser()),
                                    (t = i.parseFromString(e, "text/xml")))
                                : ((t = new ActiveXObject("Microsoft.XMLDOM")),
                                    (t.async = "false"),
                                    t.loadXML(e));
                        } catch {
                            t = x;
                        }
                        return (
                            (!t ||
                                !t.documentElement ||
                                t.getElementsByTagName("parsererror").length) &&
                            n.error("Invalid XML: " + e),
                            t
                        );
                    },
                    noop: function () { },
                    globalEval: function (e) {
                        e &&
                            n.trim(e) &&
                            (
                                L.execScript ||
                                function (t) {
                                    L.eval.call(L, t);
                                }
                            )(e);
                    },
                    camelCase: function (e) {
                        return e.replace(Un, "ms-").replace(Vn, Qn);
                    },
                    nodeName: function (e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                    },
                    each: function (e, t, i) {
                        var r,
                            o = 0,
                            a = e.length,
                            s = et(e);
                        if (i) {
                            if (s) for (; o < a && ((r = t.apply(e[o], i)), r !== !1); o++);
                            else for (o in e) if (((r = t.apply(e[o], i)), r === !1)) break;
                        } else if (s)
                            for (; o < a && ((r = t.call(e[o], o, e[o])), r !== !1); o++);
                        else
                            for (o in e) if (((r = t.call(e[o], o, e[o])), r === !1)) break;
                        return e;
                    },
                    trim:
                        $e && !$e.call("\uFEFF ")
                            ? function (e) {
                                return e == null ? "" : $e.call(e);
                            }
                            : function (e) {
                                return e == null ? "" : (e + "").replace(Rn, "");
                            },
                    makeArray: function (e, t) {
                        var i = t || [];
                        return (
                            e != null &&
                            (et(Object(e))
                                ? n.merge(i, typeof e == "string" ? [e] : e)
                                : Ze.call(i, e)),
                            i
                        );
                    },
                    inArray: function (e, t, i) {
                        var r;
                        if (t) {
                            if (jt) return jt.call(t, e, i);
                            for (
                                r = t.length, i = i ? (i < 0 ? Math.max(0, r + i) : i) : 0;
                                i < r;
                                i++
                            )
                                if (i in t && t[i] === e) return i;
                        }
                        return -1;
                    },
                    merge: function (e, t) {
                        var i = t.length,
                            r = e.length,
                            o = 0;
                        if (typeof i == "number") for (; o < i; o++) e[r++] = t[o];
                        else for (; t[o] !== x;) e[r++] = t[o++];
                        return (e.length = r), e;
                    },
                    grep: function (e, t, i) {
                        var r,
                            o = [],
                            a = 0,
                            s = e.length;
                        for (i = !!i; a < s; a++)
                            (r = !!t(e[a], a)), i !== r && o.push(e[a]);
                        return o;
                    },
                    map: function (e, t, i) {
                        var r,
                            o = 0,
                            a = e.length,
                            s = et(e),
                            f = [];
                        if (s)
                            for (; o < a; o++)
                                (r = t(e[o], o, i)), r != null && (f[f.length] = r);
                        else
                            for (o in e) (r = t(e[o], o, i)), r != null && (f[f.length] = r);
                        return Ht.apply([], f);
                    },
                    guid: 1,
                    proxy: function (e, t) {
                        var i, r, o;
                        return (
                            typeof t == "string" && ((o = e[t]), (t = e), (e = o)),
                            n.isFunction(e)
                                ? ((i = de.call(arguments, 2)),
                                    (r = function () {
                                        return e.apply(t || this, i.concat(de.call(arguments)));
                                    }),
                                    (r.guid = e.guid = e.guid || n.guid++),
                                    r)
                                : x
                        );
                    },
                    access: function (e, t, i, r, o, a, s) {
                        var f = 0,
                            p = e.length,
                            d = i == null;
                        if (n.type(i) === "object") {
                            o = !0;
                            for (f in i) n.access(e, t, f, i[f], !0, a, s);
                        } else if (
                            r !== x &&
                            ((o = !0),
                                n.isFunction(r) || (s = !0),
                                d &&
                                (s
                                    ? (t.call(e, r), (t = null))
                                    : ((d = t),
                                        (t = function (h, m, v) {
                                            return d.call(n(h), v);
                                        }))),
                                t)
                        )
                            for (; f < p; f++)
                                t(e[f], i, s ? r : r.call(e[f], f, t(e[f], i)));
                        return o ? e : d ? t.call(e) : p ? t(e[0], i) : a;
                    },
                    now: function () {
                        return new Date().getTime();
                    },
                    swap: function (e, t, i, r) {
                        var o,
                            a,
                            s = {};
                        for (a in t) (s[a] = e.style[a]), (e.style[a] = t[a]);
                        o = i.apply(e, r || []);
                        for (a in t) e.style[a] = s[a];
                        return o;
                    },
                }),
                (n.ready.promise = function (e) {
                    if (!qe)
                        if (((qe = n.Deferred()), E.readyState === "complete"))
                            setTimeout(n.ready);
                        else if (E.addEventListener)
                            E.addEventListener("DOMContentLoaded", ae, !1),
                                L.addEventListener("load", ae, !1);
                        else {
                            E.attachEvent("onreadystatechange", ae),
                                L.attachEvent("onload", ae);
                            var t = !1;
                            try {
                                t = L.frameElement == null && E.documentElement;
                            } catch { }
                            t &&
                                t.doScroll &&
                                (function i() {
                                    if (!n.isReady) {
                                        try {
                                            t.doScroll("left");
                                        } catch {
                                            return setTimeout(i, 50);
                                        }
                                        Ot(), n.ready();
                                    }
                                })();
                        }
                    return qe.promise(e);
                }),
                n.each(
                    "Boolean Number String Function Array Date RegExp Object Error".split(
                        " "
                    ),
                    function (e, t) {
                        Pe["[object " + t + "]"] = t.toLowerCase();
                    }
                );
            function et(e) {
                var t = e.length,
                    i = n.type(e);
                return n.isWindow(e)
                    ? !1
                    : e.nodeType === 1 && t
                        ? !0
                        : i === "array" ||
                        (i !== "function" &&
                            (t === 0 || (typeof t == "number" && t > 0 && t - 1 in e)));
            }
            Dt = n(E);
            /*!
             * Sizzle CSS Selector Engine v1.9.4-pre
             * http://sizzlejs.com/
             *
             * Copyright 2013 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2013-05-15
             */
            (function (e, t) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    f,
                    p,
                    d,
                    h,
                    m,
                    v,
                    b,
                    D,
                    k,
                    O,
                    te,
                    X,
                    W = "sizzle" + -new Date(),
                    A = e.document,
                    J = 0,
                    M = 0,
                    I = wt(),
                    ue = wt(),
                    Ue = wt(),
                    K = !1,
                    fe = function () {
                        return 0;
                    },
                    $ = typeof t,
                    re = 1 << 31,
                    le = {}.hasOwnProperty,
                    z = [],
                    Pi = z.pop,
                    Fi = z.push,
                    ce = z.push,
                    Dn = z.slice,
                    xe =
                        z.indexOf ||
                        function (u) {
                            for (var c = 0, l = this.length; c < l; c++)
                                if (this[c] === u) return c;
                            return -1;
                        },
                    mt =
                        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    F = "[\\x20\\t\\r\\n\\f]",
                    De = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    Ln = De.replace("w", "w#"),
                    Hn =
                        "\\[" +
                        F +
                        "*(" +
                        De +
                        ")" +
                        F +
                        "*(?:([*^$|!~]?=)" +
                        F +
                        `*(?:(['"])((?:\\\\.|[^\\\\])*?)\\3|(` +
                        Ln +
                        ")|)|)" +
                        F +
                        "*\\]",
                    bt =
                        ":(" +
                        De +
                        `)(?:\\(((['"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|` +
                        Hn.replace(3, 8) +
                        ")*)|.*)\\)|)",
                    Ve = new RegExp(
                        "^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$",
                        "g"
                    ),
                    Ri = new RegExp("^" + F + "*," + F + "*"),
                    Bi = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                    xt = new RegExp(F + "*[+~]"),
                    Wi = new RegExp("=" + F + `*([^\\]'"]*)` + F + "*\\]", "g"),
                    Ii = new RegExp(bt),
                    zi = new RegExp("^" + Ln + "$"),
                    Qe = {
                        ID: new RegExp("^#(" + De + ")"),
                        CLASS: new RegExp("^\\.(" + De + ")"),
                        TAG: new RegExp("^(" + De.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + Hn),
                        PSEUDO: new RegExp("^" + bt),
                        CHILD: new RegExp(
                            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            F +
                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                            F +
                            "*(?:([+-]|)" +
                            F +
                            "*(\\d+)|))" +
                            F +
                            "*\\)|)",
                            "i"
                        ),
                        bool: new RegExp("^(?:" + mt + ")$", "i"),
                        needsContext: new RegExp(
                            "^" +
                            F +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            F +
                            "*((?:-\\d)?\\d*)" +
                            F +
                            "*\\)|)(?=[^-]|$)",
                            "i"
                        ),
                    },
                    Xi = /^[^{]+\{\s*\[native \w/,
                    Ui = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Vi = /^(?:input|select|textarea|button)$/i,
                    Qi = /^h\d$/i,
                    Yi = /'|\\/g,
                    pe = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
                    he = function (u, c, l) {
                        var g = "0x" + c - 65536;
                        return g !== g || l
                            ? c
                            : g < 0
                                ? String.fromCharCode(g + 65536)
                                : String.fromCharCode((g >> 10) | 55296, (g & 1023) | 56320);
                    };
                try {
                    ce.apply((z = Dn.call(A.childNodes)), A.childNodes),
                        z[A.childNodes.length].nodeType;
                } catch {
                    ce = {
                        apply: z.length
                            ? function (c, l) {
                                Fi.apply(c, Dn.call(l));
                            }
                            : function (c, l) {
                                for (var g = c.length, y = 0; (c[g++] = l[y++]););
                                c.length = g - 1;
                            },
                    };
                }
                function q(u, c, l, g) {
                    var y, T, w, C, N, H, j, S, P, _;
                    if (
                        ((c ? c.ownerDocument || c : A) !== v && m(c),
                            (c = c || v),
                            (l = l || []),
                            !u || typeof u != "string")
                    )
                        return l;
                    if ((C = c.nodeType) !== 1 && C !== 9) return [];
                    if (D && !g) {
                        if ((y = Ui.exec(u)))
                            if ((w = y[1])) {
                                if (C === 9)
                                    if (((T = c.getElementById(w)), T && T.parentNode)) {
                                        if (T.id === w) return l.push(T), l;
                                    } else return l;
                                else if (
                                    c.ownerDocument &&
                                    (T = c.ownerDocument.getElementById(w)) &&
                                    X(c, T) &&
                                    T.id === w
                                )
                                    return l.push(T), l;
                            } else {
                                if (y[2]) return ce.apply(l, c.getElementsByTagName(u)), l;
                                if (
                                    (w = y[3]) &&
                                    r.getElementsByClassName &&
                                    c.getElementsByClassName
                                )
                                    return ce.apply(l, c.getElementsByClassName(w)), l;
                            }
                        if (r.qsa && (!k || !k.test(u))) {
                            if (
                                ((S = j = W),
                                    (P = c),
                                    (_ = C === 9 && u),
                                    C === 1 && c.nodeName.toLowerCase() !== "object")
                            ) {
                                for (
                                    H = Ye(u),
                                    (j = c.getAttribute("id"))
                                        ? (S = j.replace(Yi, "\\$&"))
                                        : c.setAttribute("id", S),
                                    S = "[id='" + S + "'] ",
                                    N = H.length;
                                    N--;

                                )
                                    H[N] = S + Ge(H[N]);
                                (P = (xt.test(u) && c.parentNode) || c), (_ = H.join(","));
                            }
                            if (_)
                                try {
                                    return ce.apply(l, P.querySelectorAll(_)), l;
                                } catch {
                                } finally {
                                    j || c.removeAttribute("id");
                                }
                        }
                    }
                    return nr(u.replace(Ve, "$1"), c, l, g);
                }
                function Tt(u) {
                    return Xi.test(u + "");
                }
                function wt() {
                    var u = [];
                    function c(l, g) {
                        return (
                            u.push((l += " ")) > a.cacheLength && delete c[u.shift()],
                            (c[l] = g)
                        );
                    }
                    return c;
                }
                function ee(u) {
                    return (u[W] = !0), u;
                }
                function oe(u) {
                    var c = v.createElement("div");
                    try {
                        return !!u(c);
                    } catch {
                        return !1;
                    } finally {
                        c.parentNode && c.parentNode.removeChild(c), (c = null);
                    }
                }
                function Ct(u, c, l) {
                    u = u.split("|");
                    for (var g, y = u.length, T = l ? null : c; y--;)
                        (!(g = a.attrHandle[u[y]]) || g === c) && (a.attrHandle[u[y]] = T);
                }
                function Gi(u, c) {
                    var l = u.getAttributeNode(c);
                    return l && l.specified
                        ? l.value
                        : u[c] === !0
                            ? c.toLowerCase()
                            : null;
                }
                function Ji(u, c) {
                    return u.getAttribute(c, c.toLowerCase() === "type" ? 1 : 2);
                }
                function Ki(u) {
                    if (u.nodeName.toLowerCase() === "input") return u.defaultValue;
                }
                function jn(u, c) {
                    var l = c && u,
                        g =
                            l &&
                            u.nodeType === 1 &&
                            c.nodeType === 1 &&
                            (~c.sourceIndex || re) - (~u.sourceIndex || re);
                    if (g) return g;
                    if (l) {
                        for (; (l = l.nextSibling);) if (l === c) return -1;
                    }
                    return u ? 1 : -1;
                }
                function Zi(u) {
                    return function (c) {
                        var l = c.nodeName.toLowerCase();
                        return l === "input" && c.type === u;
                    };
                }
                function $i(u) {
                    return function (c) {
                        var l = c.nodeName.toLowerCase();
                        return (l === "input" || l === "button") && c.type === u;
                    };
                }
                function Te(u) {
                    return ee(function (c) {
                        return (
                            (c = +c),
                            ee(function (l, g) {
                                for (var y, T = u([], l.length, c), w = T.length; w--;)
                                    l[(y = T[w])] && (l[y] = !(g[y] = l[y]));
                            })
                        );
                    });
                }
                (f = q.isXML =
                    function (u) {
                        var c = u && (u.ownerDocument || u).documentElement;
                        return c ? c.nodeName !== "HTML" : !1;
                    }),
                    (r = q.support = {}),
                    (m = q.setDocument =
                        function (u) {
                            var c = u ? u.ownerDocument || u : A;
                            return c === v || c.nodeType !== 9 || !c.documentElement
                                ? v
                                : ((v = c),
                                    (b = c.documentElement),
                                    (D = !f(c)),
                                    (r.attributes = oe(function (l) {
                                        return (
                                            (l.innerHTML = "<a href='#'></a>"),
                                            Ct(
                                                "type|href|height|width",
                                                Ji,
                                                l.firstChild.getAttribute("href") === "#"
                                            ),
                                            Ct(mt, Gi, l.getAttribute("disabled") == null),
                                            (l.className = "i"),
                                            !l.getAttribute("className")
                                        );
                                    })),
                                    (r.input = oe(function (l) {
                                        return (
                                            (l.innerHTML = "<input>"),
                                            l.firstChild.setAttribute("value", ""),
                                            l.firstChild.getAttribute("value") === ""
                                        );
                                    })),
                                    Ct("value", Ki, r.attributes && r.input),
                                    (r.getElementsByTagName = oe(function (l) {
                                        return (
                                            l.appendChild(c.createComment("")),
                                            !l.getElementsByTagName("*").length
                                        );
                                    })),
                                    (r.getElementsByClassName = oe(function (l) {
                                        return (
                                            (l.innerHTML =
                                                "<div class='a'></div><div class='a i'></div>"),
                                            (l.firstChild.className = "i"),
                                            l.getElementsByClassName("i").length === 2
                                        );
                                    })),
                                    (r.getById = oe(function (l) {
                                        return (
                                            (b.appendChild(l).id = W),
                                            !c.getElementsByName || !c.getElementsByName(W).length
                                        );
                                    })),
                                    r.getById
                                        ? ((a.find.ID = function (l, g) {
                                            if (typeof g.getElementById !== $ && D) {
                                                var y = g.getElementById(l);
                                                return y && y.parentNode ? [y] : [];
                                            }
                                        }),
                                            (a.filter.ID = function (l) {
                                                var g = l.replace(pe, he);
                                                return function (y) {
                                                    return y.getAttribute("id") === g;
                                                };
                                            }))
                                        : (delete a.find.ID,
                                            (a.filter.ID = function (l) {
                                                var g = l.replace(pe, he);
                                                return function (y) {
                                                    var T =
                                                        typeof y.getAttributeNode !== $ &&
                                                        y.getAttributeNode("id");
                                                    return T && T.value === g;
                                                };
                                            })),
                                    (a.find.TAG = r.getElementsByTagName
                                        ? function (l, g) {
                                            if (typeof g.getElementsByTagName !== $)
                                                return g.getElementsByTagName(l);
                                        }
                                        : function (l, g) {
                                            var y,
                                                T = [],
                                                w = 0,
                                                C = g.getElementsByTagName(l);
                                            if (l === "*") {
                                                for (; (y = C[w++]);) y.nodeType === 1 && T.push(y);
                                                return T;
                                            }
                                            return C;
                                        }),
                                    (a.find.CLASS =
                                        r.getElementsByClassName &&
                                        function (l, g) {
                                            if (typeof g.getElementsByClassName !== $ && D)
                                                return g.getElementsByClassName(l);
                                        }),
                                    (O = []),
                                    (k = []),
                                    (r.qsa = Tt(c.querySelectorAll)) &&
                                    (oe(function (l) {
                                        (l.innerHTML =
                                            "<select><option selected=''></option></select>"),
                                            l.querySelectorAll("[selected]").length ||
                                            k.push("\\[" + F + "*(?:value|" + mt + ")"),
                                            l.querySelectorAll(":checked").length ||
                                            k.push(":checked");
                                    }),
                                        oe(function (l) {
                                            var g = c.createElement("input");
                                            g.setAttribute("type", "hidden"),
                                                l.appendChild(g).setAttribute("t", ""),
                                                l.querySelectorAll("[t^='']").length &&
                                                k.push("[*^$]=" + F + `*(?:''|"")`),
                                                l.querySelectorAll(":enabled").length ||
                                                k.push(":enabled", ":disabled"),
                                                l.querySelectorAll("*,:x"),
                                                k.push(",.*:");
                                        })),
                                    (r.matchesSelector = Tt(
                                        (te =
                                            b.webkitMatchesSelector ||
                                            b.mozMatchesSelector ||
                                            b.oMatchesSelector ||
                                            b.msMatchesSelector)
                                    )) &&
                                    oe(function (l) {
                                        (r.disconnectedMatch = te.call(l, "div")),
                                            te.call(l, "[s!='']:x"),
                                            O.push("!=", bt);
                                    }),
                                    (k = k.length && new RegExp(k.join("|"))),
                                    (O = O.length && new RegExp(O.join("|"))),
                                    (X =
                                        Tt(b.contains) || b.compareDocumentPosition
                                            ? function (l, g) {
                                                var y = l.nodeType === 9 ? l.documentElement : l,
                                                    T = g && g.parentNode;
                                                return (
                                                    l === T ||
                                                    !!(
                                                        T &&
                                                        T.nodeType === 1 &&
                                                        (y.contains
                                                            ? y.contains(T)
                                                            : l.compareDocumentPosition &&
                                                            l.compareDocumentPosition(T) & 16)
                                                    )
                                                );
                                            }
                                            : function (l, g) {
                                                if (g) {
                                                    for (; (g = g.parentNode);) if (g === l) return !0;
                                                }
                                                return !1;
                                            }),
                                    (r.sortDetached = oe(function (l) {
                                        return (
                                            l.compareDocumentPosition(c.createElement("div")) & 1
                                        );
                                    })),
                                    (fe = b.compareDocumentPosition
                                        ? function (l, g) {
                                            if (l === g) return (K = !0), 0;
                                            var y =
                                                g.compareDocumentPosition &&
                                                l.compareDocumentPosition &&
                                                l.compareDocumentPosition(g);
                                            return y
                                                ? y & 1 ||
                                                    (!r.sortDetached &&
                                                        g.compareDocumentPosition(l) === y)
                                                    ? l === c || X(A, l)
                                                        ? -1
                                                        : g === c || X(A, g)
                                                            ? 1
                                                            : h
                                                                ? xe.call(h, l) - xe.call(h, g)
                                                                : 0
                                                    : y & 4
                                                        ? -1
                                                        : 1
                                                : l.compareDocumentPosition
                                                    ? -1
                                                    : 1;
                                        }
                                        : function (l, g) {
                                            var y,
                                                T = 0,
                                                w = l.parentNode,
                                                C = g.parentNode,
                                                N = [l],
                                                H = [g];
                                            if (l === g) return (K = !0), 0;
                                            if (!w || !C)
                                                return l === c
                                                    ? -1
                                                    : g === c
                                                        ? 1
                                                        : w
                                                            ? -1
                                                            : C
                                                                ? 1
                                                                : h
                                                                    ? xe.call(h, l) - xe.call(h, g)
                                                                    : 0;
                                            if (w === C) return jn(l, g);
                                            for (y = l; (y = y.parentNode);) N.unshift(y);
                                            for (y = g; (y = y.parentNode);) H.unshift(y);
                                            for (; N[T] === H[T];) T++;
                                            return T
                                                ? jn(N[T], H[T])
                                                : N[T] === A
                                                    ? -1
                                                    : H[T] === A
                                                        ? 1
                                                        : 0;
                                        }),
                                    c);
                        }),
                    (q.matches = function (u, c) {
                        return q(u, null, null, c);
                    }),
                    (q.matchesSelector = function (u, c) {
                        if (
                            ((u.ownerDocument || u) !== v && m(u),
                                (c = c.replace(Wi, "='$1']")),
                                r.matchesSelector &&
                                D &&
                                (!O || !O.test(c)) &&
                                (!k || !k.test(c)))
                        )
                            try {
                                var l = te.call(u, c);
                                if (
                                    l ||
                                    r.disconnectedMatch ||
                                    (u.document && u.document.nodeType !== 11)
                                )
                                    return l;
                            } catch { }
                        return q(c, v, null, [u]).length > 0;
                    }),
                    (q.contains = function (u, c) {
                        return (u.ownerDocument || u) !== v && m(u), X(u, c);
                    }),
                    (q.attr = function (u, c) {
                        (u.ownerDocument || u) !== v && m(u);
                        var l = a.attrHandle[c.toLowerCase()],
                            g = l && le.call(a.attrHandle, c.toLowerCase()) ? l(u, c, !D) : t;
                        return g === t
                            ? r.attributes || !D
                                ? u.getAttribute(c)
                                : (g = u.getAttributeNode(c)) && g.specified
                                    ? g.value
                                    : null
                            : g;
                    }),
                    (q.error = function (u) {
                        throw new Error("Syntax error, unrecognized expression: " + u);
                    }),
                    (q.uniqueSort = function (u) {
                        var c,
                            l = [],
                            g = 0,
                            y = 0;
                        if (
                            ((K = !r.detectDuplicates),
                                (h = !r.sortStable && u.slice(0)),
                                u.sort(fe),
                                K)
                        ) {
                            for (; (c = u[y++]);) c === u[y] && (g = l.push(y));
                            for (; g--;) u.splice(l[g], 1);
                        }
                        return u;
                    }),
                    (s = q.getText =
                        function (u) {
                            var c,
                                l = "",
                                g = 0,
                                y = u.nodeType;
                            if (y) {
                                if (y === 1 || y === 9 || y === 11) {
                                    if (typeof u.textContent == "string") return u.textContent;
                                    for (u = u.firstChild; u; u = u.nextSibling) l += s(u);
                                } else if (y === 3 || y === 4) return u.nodeValue;
                            } else for (; (c = u[g]); g++) l += s(c);
                            return l;
                        }),
                    (a = q.selectors =
                    {
                        cacheLength: 50,
                        createPseudo: ee,
                        match: Qe,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0,
                            },
                            " ": {
                                dir: "parentNode",
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0,
                            },
                            "~": {
                                dir: "previousSibling",
                            },
                        },
                        preFilter: {
                            ATTR: function (u) {
                                return (
                                    (u[1] = u[1].replace(pe, he)),
                                    (u[3] = (u[4] || u[5] || "").replace(pe, he)),
                                    u[2] === "~=" && (u[3] = " " + u[3] + " "),
                                    u.slice(0, 4)
                                );
                            },
                            CHILD: function (u) {
                                return (
                                    (u[1] = u[1].toLowerCase()),
                                    u[1].slice(0, 3) === "nth"
                                        ? (u[3] || q.error(u[0]),
                                            (u[4] = +(u[4]
                                                ? u[5] + (u[6] || 1)
                                                : 2 * (u[3] === "even" || u[3] === "odd"))),
                                            (u[5] = +(u[7] + u[8] || u[3] === "odd")))
                                        : u[3] && q.error(u[0]),
                                    u
                                );
                            },
                            PSEUDO: function (u) {
                                var c,
                                    l = !u[5] && u[2];
                                return Qe.CHILD.test(u[0])
                                    ? null
                                    : (u[3] && u[4] !== t
                                        ? (u[2] = u[4])
                                        : l &&
                                        Ii.test(l) &&
                                        (c = Ye(l, !0)) &&
                                        (c = l.indexOf(")", l.length - c) - l.length) &&
                                        ((u[0] = u[0].slice(0, c)), (u[2] = l.slice(0, c))),
                                        u.slice(0, 3));
                            },
                        },
                        filter: {
                            TAG: function (u) {
                                var c = u.replace(pe, he).toLowerCase();
                                return u === "*"
                                    ? function () {
                                        return !0;
                                    }
                                    : function (l) {
                                        return l.nodeName && l.nodeName.toLowerCase() === c;
                                    };
                            },
                            CLASS: function (u) {
                                var c = I[u + " "];
                                return (
                                    c ||
                                    ((c = new RegExp("(^|" + F + ")" + u + "(" + F + "|$)")) &&
                                        I(u, function (l) {
                                            return c.test(
                                                (typeof l.className == "string" && l.className) ||
                                                (typeof l.getAttribute !== $ &&
                                                    l.getAttribute("class")) ||
                                                ""
                                            );
                                        }))
                                );
                            },
                            ATTR: function (u, c, l) {
                                return function (g) {
                                    var y = q.attr(g, u);
                                    return y == null
                                        ? c === "!="
                                        : c
                                            ? ((y += ""),
                                                c === "="
                                                    ? y === l
                                                    : c === "!="
                                                        ? y !== l
                                                        : c === "^="
                                                            ? l && y.indexOf(l) === 0
                                                            : c === "*="
                                                                ? l && y.indexOf(l) > -1
                                                                : c === "$="
                                                                    ? l && y.slice(-l.length) === l
                                                                    : c === "~="
                                                                        ? (" " + y + " ").indexOf(l) > -1
                                                                        : c === "|="
                                                                            ? y === l || y.slice(0, l.length + 1) === l + "-"
                                                                            : !1)
                                            : !0;
                                };
                            },
                            CHILD: function (u, c, l, g, y) {
                                var T = u.slice(0, 3) !== "nth",
                                    w = u.slice(-4) !== "last",
                                    C = c === "of-type";
                                return g === 1 && y === 0
                                    ? function (N) {
                                        return !!N.parentNode;
                                    }
                                    : function (N, H, j) {
                                        var S,
                                            P,
                                            _,
                                            B,
                                            U,
                                            V,
                                            Y = T !== w ? "nextSibling" : "previousSibling",
                                            R = N.parentNode,
                                            Oe = C && N.nodeName.toLowerCase(),
                                            Me = !j && !C;
                                        if (R) {
                                            if (T) {
                                                for (; Y;) {
                                                    for (_ = N; (_ = _[Y]);)
                                                        if (
                                                            C
                                                                ? _.nodeName.toLowerCase() === Oe
                                                                : _.nodeType === 1
                                                        )
                                                            return !1;
                                                    V = Y = u === "only" && !V && "nextSibling";
                                                }
                                                return !0;
                                            }
                                            if (
                                                ((V = [w ? R.firstChild : R.lastChild]), w && Me)
                                            ) {
                                                for (
                                                    P = R[W] || (R[W] = {}),
                                                    S = P[u] || [],
                                                    U = S[0] === J && S[1],
                                                    B = S[0] === J && S[2],
                                                    _ = U && R.childNodes[U];
                                                    (_ =
                                                        (++U && _ && _[Y]) || (B = U = 0) || V.pop());

                                                )
                                                    if (_.nodeType === 1 && ++B && _ === N) {
                                                        P[u] = [J, U, B];
                                                        break;
                                                    }
                                            } else if (
                                                Me &&
                                                (S = (N[W] || (N[W] = {}))[u]) &&
                                                S[0] === J
                                            )
                                                B = S[1];
                                            else
                                                for (
                                                    ;
                                                    (_ =
                                                        (++U && _ && _[Y]) || (B = U = 0) || V.pop()) &&
                                                    !(
                                                        (C
                                                            ? _.nodeName.toLowerCase() === Oe
                                                            : _.nodeType === 1) &&
                                                        ++B &&
                                                        (Me && ((_[W] || (_[W] = {}))[u] = [J, B]),
                                                            _ === N)
                                                    );

                                                );
                                            return (
                                                (B -= y), B === g || (B % g === 0 && B / g >= 0)
                                            );
                                        }
                                    };
                            },
                            PSEUDO: function (u, c) {
                                var l,
                                    g =
                                        a.pseudos[u] ||
                                        a.setFilters[u.toLowerCase()] ||
                                        q.error("unsupported pseudo: " + u);
                                return g[W]
                                    ? g(c)
                                    : g.length > 1
                                        ? ((l = [u, u, "", c]),
                                            a.setFilters.hasOwnProperty(u.toLowerCase())
                                                ? ee(function (y, T) {
                                                    for (var w, C = g(y, c), N = C.length; N--;)
                                                        (w = xe.call(y, C[N])), (y[w] = !(T[w] = C[N]));
                                                })
                                                : function (y) {
                                                    return g(y, 0, l);
                                                })
                                        : g;
                            },
                        },
                        pseudos: {
                            not: ee(function (u) {
                                var c = [],
                                    l = [],
                                    g = p(u.replace(Ve, "$1"));
                                return g[W]
                                    ? ee(function (y, T, w, C) {
                                        for (var N, H = g(y, null, C, []), j = y.length; j--;)
                                            (N = H[j]) && (y[j] = !(T[j] = N));
                                    })
                                    : function (y, T, w) {
                                        return (c[0] = y), g(c, null, w, l), !l.pop();
                                    };
                            }),
                            has: ee(function (u) {
                                return function (c) {
                                    return q(u, c).length > 0;
                                };
                            }),
                            contains: ee(function (u) {
                                return function (c) {
                                    return (
                                        (c.textContent || c.innerText || s(c)).indexOf(u) > -1
                                    );
                                };
                            }),
                            lang: ee(function (u) {
                                return (
                                    zi.test(u || "") || q.error("unsupported lang: " + u),
                                    (u = u.replace(pe, he).toLowerCase()),
                                    function (c) {
                                        var l;
                                        do
                                            if (
                                                (l = D
                                                    ? c.lang
                                                    : c.getAttribute("xml:lang") ||
                                                    c.getAttribute("lang"))
                                            )
                                                return (
                                                    (l = l.toLowerCase()),
                                                    l === u || l.indexOf(u + "-") === 0
                                                );
                                        while ((c = c.parentNode) && c.nodeType === 1);
                                        return !1;
                                    }
                                );
                            }),
                            target: function (u) {
                                var c = e.location && e.location.hash;
                                return c && c.slice(1) === u.id;
                            },
                            root: function (u) {
                                return u === b;
                            },
                            focus: function (u) {
                                return (
                                    u === v.activeElement &&
                                    (!v.hasFocus || v.hasFocus()) &&
                                    !!(u.type || u.href || ~u.tabIndex)
                                );
                            },
                            enabled: function (u) {
                                return u.disabled === !1;
                            },
                            disabled: function (u) {
                                return u.disabled === !0;
                            },
                            checked: function (u) {
                                var c = u.nodeName.toLowerCase();
                                return (
                                    (c === "input" && !!u.checked) ||
                                    (c === "option" && !!u.selected)
                                );
                            },
                            selected: function (u) {
                                return (
                                    u.parentNode && u.parentNode.selectedIndex,
                                    u.selected === !0
                                );
                            },
                            empty: function (u) {
                                for (u = u.firstChild; u; u = u.nextSibling)
                                    if (
                                        u.nodeName > "@" ||
                                        u.nodeType === 3 ||
                                        u.nodeType === 4
                                    )
                                        return !1;
                                return !0;
                            },
                            parent: function (u) {
                                return !a.pseudos.empty(u);
                            },
                            header: function (u) {
                                return Qi.test(u.nodeName);
                            },
                            input: function (u) {
                                return Vi.test(u.nodeName);
                            },
                            button: function (u) {
                                var c = u.nodeName.toLowerCase();
                                return (
                                    (c === "input" && u.type === "button") || c === "button"
                                );
                            },
                            text: function (u) {
                                var c;
                                return (
                                    u.nodeName.toLowerCase() === "input" &&
                                    u.type === "text" &&
                                    ((c = u.getAttribute("type")) == null ||
                                        c.toLowerCase() === u.type)
                                );
                            },
                            first: Te(function () {
                                return [0];
                            }),
                            last: Te(function (u, c) {
                                return [c - 1];
                            }),
                            eq: Te(function (u, c, l) {
                                return [l < 0 ? l + c : l];
                            }),
                            even: Te(function (u, c) {
                                for (var l = 0; l < c; l += 2) u.push(l);
                                return u;
                            }),
                            odd: Te(function (u, c) {
                                for (var l = 1; l < c; l += 2) u.push(l);
                                return u;
                            }),
                            lt: Te(function (u, c, l) {
                                for (var g = l < 0 ? l + c : l; --g >= 0;) u.push(g);
                                return u;
                            }),
                            gt: Te(function (u, c, l) {
                                for (var g = l < 0 ? l + c : l; ++g < c;) u.push(g);
                                return u;
                            }),
                        },
                    });
                for (i in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0,
                })
                    a.pseudos[i] = Zi(i);
                for (i in {
                    submit: !0,
                    reset: !0,
                })
                    a.pseudos[i] = $i(i);
                function Ye(u, c) {
                    var l,
                        g,
                        y,
                        T,
                        w,
                        C,
                        N,
                        H = ue[u + " "];
                    if (H) return c ? 0 : H.slice(0);
                    for (w = u, C = [], N = a.preFilter; w;) {
                        (!l || (g = Ri.exec(w))) &&
                            (g && (w = w.slice(g[0].length) || w), C.push((y = []))),
                            (l = !1),
                            (g = Bi.exec(w)) &&
                            ((l = g.shift()),
                                y.push({
                                    value: l,
                                    type: g[0].replace(Ve, " "),
                                }),
                                (w = w.slice(l.length)));
                        for (T in a.filter)
                            (g = Qe[T].exec(w)) &&
                                (!N[T] || (g = N[T](g))) &&
                                ((l = g.shift()),
                                    y.push({
                                        value: l,
                                        type: T,
                                        matches: g,
                                    }),
                                    (w = w.slice(l.length)));
                        if (!l) break;
                    }
                    return c ? w.length : w ? q.error(u) : ue(u, C).slice(0);
                }
                function Ge(u) {
                    for (var c = 0, l = u.length, g = ""; c < l; c++) g += u[c].value;
                    return g;
                }
                function Nt(u, c, l) {
                    var g = c.dir,
                        y = l && g === "parentNode",
                        T = M++;
                    return c.first
                        ? function (w, C, N) {
                            for (; (w = w[g]);)
                                if (w.nodeType === 1 || y) return u(w, C, N);
                        }
                        : function (w, C, N) {
                            var H,
                                j,
                                S,
                                P = J + " " + T;
                            if (N) {
                                for (; (w = w[g]);)
                                    if ((w.nodeType === 1 || y) && u(w, C, N)) return !0;
                            } else
                                for (; (w = w[g]);)
                                    if (w.nodeType === 1 || y) {
                                        if (
                                            ((S = w[W] || (w[W] = {})), (j = S[g]) && j[0] === P)
                                        ) {
                                            if ((H = j[1]) === !0 || H === o) return H === !0;
                                        } else if (
                                            ((j = S[g] = [P]),
                                                (j[1] = u(w, C, N) || o),
                                                j[1] === !0)
                                        )
                                            return !0;
                                    }
                        };
                }
                function St(u) {
                    return u.length > 1
                        ? function (c, l, g) {
                            for (var y = u.length; y--;) if (!u[y](c, l, g)) return !1;
                            return !0;
                        }
                        : u[0];
                }
                function Je(u, c, l, g, y) {
                    for (var T, w = [], C = 0, N = u.length, H = c != null; C < N; C++)
                        (T = u[C]) && (!l || l(T, g, y)) && (w.push(T), H && c.push(C));
                    return w;
                }
                function Et(u, c, l, g, y, T) {
                    return (
                        g && !g[W] && (g = Et(g)),
                        y && !y[W] && (y = Et(y, T)),
                        ee(function (w, C, N, H) {
                            var j,
                                S,
                                P,
                                _ = [],
                                B = [],
                                U = C.length,
                                V = w || tr(c || "*", N.nodeType ? [N] : N, []),
                                Y = u && (w || !c) ? Je(V, _, u, N, H) : V,
                                R = l ? (y || (w ? u : U || g) ? [] : C) : Y;
                            if ((l && l(Y, R, N, H), g))
                                for (j = Je(R, B), g(j, [], N, H), S = j.length; S--;)
                                    (P = j[S]) && (R[B[S]] = !(Y[B[S]] = P));
                            if (w) {
                                if (y || u) {
                                    if (y) {
                                        for (j = [], S = R.length; S--;)
                                            (P = R[S]) && j.push((Y[S] = P));
                                        y(null, (R = []), j, H);
                                    }
                                    for (S = R.length; S--;)
                                        (P = R[S]) &&
                                            (j = y ? xe.call(w, P) : _[S]) > -1 &&
                                            (w[j] = !(C[j] = P));
                                }
                            } else (R = Je(R === C ? R.splice(U, R.length) : R)), y ? y(null, C, R, H) : ce.apply(C, R);
                        })
                    );
                }
                function kt(u) {
                    for (
                        var c,
                        l,
                        g,
                        y = u.length,
                        T = a.relative[u[0].type],
                        w = T || a.relative[" "],
                        C = T ? 1 : 0,
                        N = Nt(
                            function (S) {
                                return S === c;
                            },
                            w,
                            !0
                        ),
                        H = Nt(
                            function (S) {
                                return xe.call(c, S) > -1;
                            },
                            w,
                            !0
                        ),
                        j = [
                            function (S, P, _) {
                                return (
                                    (!T && (_ || P !== d)) ||
                                    ((c = P).nodeType ? N(S, P, _) : H(S, P, _))
                                );
                            },
                        ];
                        C < y;
                        C++
                    )
                        if ((l = a.relative[u[C].type])) j = [Nt(St(j), l)];
                        else {
                            if (((l = a.filter[u[C].type].apply(null, u[C].matches)), l[W])) {
                                for (g = ++C; g < y && !a.relative[u[g].type]; g++);
                                return Et(
                                    C > 1 && St(j),
                                    C > 1 &&
                                    Ge(
                                        u.slice(0, C - 1).concat({
                                            value: u[C - 2].type === " " ? "*" : "",
                                        })
                                    ).replace(Ve, "$1"),
                                    l,
                                    C < g && kt(u.slice(C, g)),
                                    g < y && kt((u = u.slice(g))),
                                    g < y && Ge(u)
                                );
                            }
                            j.push(l);
                        }
                    return St(j);
                }
                function er(u, c) {
                    var l = 0,
                        g = c.length > 0,
                        y = u.length > 0,
                        T = function (w, C, N, H, j) {
                            var S,
                                P,
                                _,
                                B = [],
                                U = 0,
                                V = "0",
                                Y = w && [],
                                R = j != null,
                                Oe = d,
                                Me = w || (y && a.find.TAG("*", (j && C.parentNode) || C)),
                                On = (J += Oe == null ? 1 : Math.random() || 0.1);
                            for (
                                R && ((d = C !== v && C), (o = l));
                                (S = Me[V]) != null;
                                V++
                            ) {
                                if (y && S) {
                                    for (P = 0; (_ = u[P++]);)
                                        if (_(S, C, N)) {
                                            H.push(S);
                                            break;
                                        }
                                    R && ((J = On), (o = ++l));
                                }
                                g && ((S = !_ && S) && U--, w && Y.push(S));
                            }
                            if (((U += V), g && V !== U)) {
                                for (P = 0; (_ = c[P++]);) _(Y, B, C, N);
                                if (w) {
                                    if (U > 0) for (; V--;) Y[V] || B[V] || (B[V] = Pi.call(H));
                                    B = Je(B);
                                }
                                ce.apply(H, B),
                                    R &&
                                    !w &&
                                    B.length > 0 &&
                                    U + c.length > 1 &&
                                    q.uniqueSort(H);
                            }
                            return R && ((J = On), (d = Oe)), Y;
                        };
                    return g ? ee(T) : T;
                }
                p = q.compile = function (u, c) {
                    var l,
                        g = [],
                        y = [],
                        T = Ue[u + " "];
                    if (!T) {
                        for (c || (c = Ye(u)), l = c.length; l--;)
                            (T = kt(c[l])), T[W] ? g.push(T) : y.push(T);
                        T = Ue(u, er(y, g));
                    }
                    return T;
                };
                function tr(u, c, l) {
                    for (var g = 0, y = c.length; g < y; g++) q(u, c[g], l);
                    return l;
                }
                function nr(u, c, l, g) {
                    var y,
                        T,
                        w,
                        C,
                        N,
                        H = Ye(u);
                    if (!g && H.length === 1) {
                        if (
                            ((T = H[0] = H[0].slice(0)),
                                T.length > 2 &&
                                (w = T[0]).type === "ID" &&
                                r.getById &&
                                c.nodeType === 9 &&
                                D &&
                                a.relative[T[1].type])
                        ) {
                            if (
                                ((c = (a.find.ID(w.matches[0].replace(pe, he), c) || [])[0]),
                                    !c)
                            )
                                return l;
                            u = u.slice(T.shift().value.length);
                        }
                        for (
                            y = Qe.needsContext.test(u) ? 0 : T.length;
                            y-- && ((w = T[y]), !a.relative[(C = w.type)]);

                        )
                            if (
                                (N = a.find[C]) &&
                                (g = N(
                                    w.matches[0].replace(pe, he),
                                    (xt.test(T[0].type) && c.parentNode) || c
                                ))
                            ) {
                                if ((T.splice(y, 1), (u = g.length && Ge(T)), !u))
                                    return ce.apply(l, g), l;
                                break;
                            }
                    }
                    return p(u, H)(g, c, !D, l, xt.test(u)), l;
                }
                a.pseudos.nth = a.pseudos.eq;
                function _n() { }
                (_n.prototype = a.filters = a.pseudos),
                    (a.setFilters = new _n()),
                    (r.sortStable = W.split("").sort(fe).join("") === W),
                    m(),
                    [0, 0].sort(fe),
                    (r.detectDuplicates = K),
                    (n.find = q),
                    (n.expr = q.selectors),
                    (n.expr[":"] = n.expr.pseudos),
                    (n.unique = q.uniqueSort),
                    (n.text = q.getText),
                    (n.isXMLDoc = q.isXML),
                    (n.contains = q.contains);
            })(L);
            var Mt = {};
            function Yn(e) {
                var t = (Mt[e] = {});
                return (
                    n.each(e.match(ie) || [], function (i, r) {
                        t[r] = !0;
                    }),
                    t
                );
            }
            (n.Callbacks = function (e) {
                e = typeof e == "string" ? Mt[e] || Yn(e) : n.extend({}, e);
                var t,
                    i,
                    r,
                    o,
                    a,
                    s,
                    f = [],
                    p = !e.once && [],
                    d = function (m) {
                        for (
                            i = e.memory && m,
                            r = !0,
                            a = s || 0,
                            s = 0,
                            o = f.length,
                            t = !0;
                            f && a < o;
                            a++
                        )
                            if (f[a].apply(m[0], m[1]) === !1 && e.stopOnFalse) {
                                i = !1;
                                break;
                            }
                        (t = !1),
                            f && (p ? p.length && d(p.shift()) : i ? (f = []) : h.disable());
                    },
                    h = {
                        add: function () {
                            if (f) {
                                var m = f.length;
                                (function v(b) {
                                    n.each(b, function (D, k) {
                                        var O = n.type(k);
                                        O === "function"
                                            ? (!e.unique || !h.has(k)) && f.push(k)
                                            : k && k.length && O !== "string" && v(k);
                                    });
                                })(arguments),
                                    t ? (o = f.length) : i && ((s = m), d(i));
                            }
                            return this;
                        },
                        remove: function () {
                            return (
                                f &&
                                n.each(arguments, function (m, v) {
                                    for (var b; (b = n.inArray(v, f, b)) > -1;)
                                        f.splice(b, 1), t && (b <= o && o--, b <= a && a--);
                                }),
                                this
                            );
                        },
                        has: function (m) {
                            return m ? n.inArray(m, f) > -1 : !!(f && f.length);
                        },
                        empty: function () {
                            return (f = []), (o = 0), this;
                        },
                        disable: function () {
                            return (f = p = i = x), this;
                        },
                        disabled: function () {
                            return !f;
                        },
                        lock: function () {
                            return (p = x), i || h.disable(), this;
                        },
                        locked: function () {
                            return !p;
                        },
                        fireWith: function (m, v) {
                            return (
                                (v = v || []),
                                (v = [m, v.slice ? v.slice() : v]),
                                f && (!r || p) && (t ? p.push(v) : d(v)),
                                this
                            );
                        },
                        fire: function () {
                            return h.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!r;
                        },
                    };
                return h;
            }),
                n.extend({
                    Deferred: function (e) {
                        var t = [
                            ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", n.Callbacks("memory")],
                        ],
                            i = "pending",
                            r = {
                                state: function () {
                                    return i;
                                },
                                always: function () {
                                    return o.done(arguments).fail(arguments), this;
                                },
                                then: function () {
                                    var a = arguments;
                                    return n
                                        .Deferred(function (s) {
                                            n.each(t, function (f, p) {
                                                var d = p[0],
                                                    h = n.isFunction(a[f]) && a[f];
                                                o[p[1]](function () {
                                                    var m = h && h.apply(this, arguments);
                                                    m && n.isFunction(m.promise)
                                                        ? m
                                                            .promise()
                                                            .done(s.resolve)
                                                            .fail(s.reject)
                                                            .progress(s.notify)
                                                        : s[d + "With"](
                                                            this === r ? s.promise() : this,
                                                            h ? [m] : arguments
                                                        );
                                                });
                                            }),
                                                (a = null);
                                        })
                                        .promise();
                                },
                                promise: function (a) {
                                    return a != null ? n.extend(a, r) : r;
                                },
                            },
                            o = {};
                        return (
                            (r.pipe = r.then),
                            n.each(t, function (a, s) {
                                var f = s[2],
                                    p = s[3];
                                (r[s[1]] = f.add),
                                    p &&
                                    f.add(
                                        function () {
                                            i = p;
                                        },
                                        t[a ^ 1][2].disable,
                                        t[2][2].lock
                                    ),
                                    (o[s[0]] = function () {
                                        return (
                                            o[s[0] + "With"](this === o ? r : this, arguments), this
                                        );
                                    }),
                                    (o[s[0] + "With"] = f.fireWith);
                            }),
                            r.promise(o),
                            e && e.call(o, o),
                            o
                        );
                    },
                    when: function (e) {
                        var t = 0,
                            i = de.call(arguments),
                            r = i.length,
                            o = r !== 1 || (e && n.isFunction(e.promise)) ? r : 0,
                            a = o === 1 ? e : n.Deferred(),
                            s = function (h, m, v) {
                                return function (b) {
                                    (m[h] = this),
                                        (v[h] = arguments.length > 1 ? de.call(arguments) : b),
                                        v === f ? a.notifyWith(m, v) : --o || a.resolveWith(m, v);
                                };
                            },
                            f,
                            p,
                            d;
                        if (r > 1)
                            for (
                                f = new Array(r), p = new Array(r), d = new Array(r);
                                t < r;
                                t++
                            )
                                i[t] && n.isFunction(i[t].promise)
                                    ? i[t]
                                        .promise()
                                        .done(s(t, d, i))
                                        .fail(a.reject)
                                        .progress(s(t, p, f))
                                    : --o;
                        return o || a.resolveWith(d, i), a.promise();
                    },
                }),
                (n.support = (function (e) {
                    var t,
                        i,
                        r,
                        o,
                        a,
                        s,
                        f,
                        p,
                        d,
                        h = E.createElement("div");
                    if (
                        (h.setAttribute("className", "t"),
                            (h.innerHTML =
                                "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                            (t = h.getElementsByTagName("*") || []),
                            (i = h.getElementsByTagName("a")[0]),
                            !i || !i.style || !t.length)
                    )
                        return e;
                    (o = E.createElement("select")),
                        (s = o.appendChild(E.createElement("option"))),
                        (r = h.getElementsByTagName("input")[0]),
                        (i.style.cssText = "top:1px;float:left;opacity:.5"),
                        (e.getSetAttribute = h.className !== "t"),
                        (e.leadingWhitespace = h.firstChild.nodeType === 3),
                        (e.tbody = !h.getElementsByTagName("tbody").length),
                        (e.htmlSerialize = !!h.getElementsByTagName("link").length),
                        (e.style = /top/.test(i.getAttribute("style"))),
                        (e.hrefNormalized = i.getAttribute("href") === "/a"),
                        (e.opacity = /^0.5/.test(i.style.opacity)),
                        (e.cssFloat = !!i.style.cssFloat),
                        (e.checkOn = !!r.value),
                        (e.optSelected = s.selected),
                        (e.enctype = !!E.createElement("form").enctype),
                        (e.html5Clone =
                            E.createElement("nav").cloneNode(!0).outerHTML !==
                            "<:nav></:nav>"),
                        (e.inlineBlockNeedsLayout = !1),
                        (e.shrinkWrapBlocks = !1),
                        (e.pixelPosition = !1),
                        (e.deleteExpando = !0),
                        (e.noCloneEvent = !0),
                        (e.reliableMarginRight = !0),
                        (e.boxSizingReliable = !0),
                        (r.checked = !0),
                        (e.noCloneChecked = r.cloneNode(!0).checked),
                        (o.disabled = !0),
                        (e.optDisabled = !s.disabled);
                    try {
                        delete h.test;
                    } catch {
                        e.deleteExpando = !1;
                    }
                    (r = E.createElement("input")),
                        r.setAttribute("value", ""),
                        (e.input = r.getAttribute("value") === ""),
                        (r.value = "t"),
                        r.setAttribute("type", "radio"),
                        (e.radioValue = r.value === "t"),
                        r.setAttribute("checked", "t"),
                        r.setAttribute("name", "t"),
                        (a = E.createDocumentFragment()),
                        a.appendChild(r),
                        (e.appendChecked = r.checked),
                        (e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
                        h.attachEvent &&
                        (h.attachEvent("onclick", function () {
                            e.noCloneEvent = !1;
                        }),
                            h.cloneNode(!0).click());
                    for (d in {
                        submit: !0,
                        change: !0,
                        focusin: !0,
                    })
                        h.setAttribute((f = "on" + d), "t"),
                            (e[d + "Bubbles"] = f in L || h.attributes[f].expando === !1);
                    (h.style.backgroundClip = "content-box"),
                        (h.cloneNode(!0).style.backgroundClip = ""),
                        (e.clearCloneStyle = h.style.backgroundClip === "content-box");
                    for (d in n(e)) break;
                    return (
                        (e.ownLast = d !== "0"),
                        n(function () {
                            var m,
                                v,
                                b,
                                D =
                                    "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                                k = E.getElementsByTagName("body")[0];
                            k &&
                                ((m = E.createElement("div")),
                                    (m.style.cssText =
                                        "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
                                    k.appendChild(m).appendChild(h),
                                    (h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                                    (b = h.getElementsByTagName("td")),
                                    (b[0].style.cssText =
                                        "padding:0;margin:0;border:0;display:none"),
                                    (p = b[0].offsetHeight === 0),
                                    (b[0].style.display = ""),
                                    (b[1].style.display = "none"),
                                    (e.reliableHiddenOffsets = p && b[0].offsetHeight === 0),
                                    (h.innerHTML = ""),
                                    (h.style.cssText =
                                        "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
                                    n.swap(
                                        k,
                                        k.style.zoom != null
                                            ? {
                                                zoom: 1,
                                            }
                                            : {},
                                        function () {
                                            e.boxSizing = h.offsetWidth === 4;
                                        }
                                    ),
                                    L.getComputedStyle &&
                                    ((e.pixelPosition =
                                        (L.getComputedStyle(h, null) || {}).top !== "1%"),
                                        (e.boxSizingReliable =
                                            (
                                                L.getComputedStyle(h, null) || {
                                                    width: "4px",
                                                }
                                            ).width === "4px"),
                                        (v = h.appendChild(E.createElement("div"))),
                                        (v.style.cssText = h.style.cssText = D),
                                        (v.style.marginRight = v.style.width = "0"),
                                        (h.style.width = "1px"),
                                        (e.reliableMarginRight = !parseFloat(
                                            (L.getComputedStyle(v, null) || {}).marginRight
                                        ))),
                                    typeof h.style.zoom !== ne &&
                                    ((h.innerHTML = ""),
                                        (h.style.cssText =
                                            D + "width:1px;padding:1px;display:inline;zoom:1"),
                                        (e.inlineBlockNeedsLayout = h.offsetWidth === 3),
                                        (h.style.display = "block"),
                                        (h.innerHTML = "<div></div>"),
                                        (h.firstChild.style.width = "5px"),
                                        (e.shrinkWrapBlocks = h.offsetWidth !== 3),
                                        e.inlineBlockNeedsLayout && (k.style.zoom = 1)),
                                    k.removeChild(m),
                                    (m = h = b = v = null));
                        }),
                        (t = o = a = s = i = r = null),
                        e
                    );
                })({}));
            var Gn = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                Jn = /([A-Z])/g;
            function qt(e, t, i, r) {
                if (n.acceptData(e)) {
                    var o,
                        a,
                        s = n.expando,
                        f = e.nodeType,
                        p = f ? n.store : e,
                        d = f ? e[s] : e[s] && s;
                    if (
                        !(
                            (!d || !p[d] || (!r && !p[d].data)) &&
                            i === x &&
                            typeof t == "string"
                        )
                    )
                        return (
                            d || (f ? (d = e[s] = we.pop() || n.guid++) : (d = s)),
                            p[d] ||
                            (p[d] = f
                                ? {}
                                : {
                                    toJSON: n.noop,
                                }),
                            (typeof t == "object" || typeof t == "function") &&
                            (r
                                ? (p[d] = n.extend(p[d], t))
                                : (p[d].data = n.extend(p[d].data, t))),
                            (a = p[d]),
                            r || (a.data || (a.data = {}), (a = a.data)),
                            i !== x && (a[n.camelCase(t)] = i),
                            typeof t == "string"
                                ? ((o = a[t]), o == null && (o = a[n.camelCase(t)]))
                                : (o = a),
                            o
                        );
                }
            }
            function Pt(e, t, i) {
                if (n.acceptData(e)) {
                    var r,
                        o,
                        a = e.nodeType,
                        s = a ? n.store : e,
                        f = a ? e[n.expando] : n.expando;
                    if (s[f]) {
                        if (t && ((r = i ? s[f] : s[f].data), r)) {
                            for (
                                n.isArray(t)
                                    ? (t = t.concat(n.map(t, n.camelCase)))
                                    : (t in r)
                                        ? (t = [t])
                                        : ((t = n.camelCase(t)),
                                            (t in r) ? (t = [t]) : (t = t.split(" "))),
                                o = t.length;
                                o--;

                            )
                                delete r[t[o]];
                            if (i ? !tt(r) : !n.isEmptyObject(r)) return;
                        }
                        (!i && (delete s[f].data, !tt(s[f]))) ||
                            (a
                                ? n.cleanData([e], !0)
                                : n.support.deleteExpando || s != s.window
                                    ? delete s[f]
                                    : (s[f] = null));
                    }
                }
            }
            n.extend({
                store: {},
                noData: {
                    applet: !0,
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                },
                hasData: function (e) {
                    return (
                        (e = e.nodeType ? n.store[e[n.expando]] : e[n.expando]),
                        !!e && !tt(e)
                    );
                },
                data: function (e, t, i) {
                    return qt(e, t, i);
                },
                removeData: function (e, t) {
                    return Pt(e, t);
                },
                _data: function (e, t, i) {
                    return qt(e, t, i, !0);
                },
                _removeData: function (e, t) {
                    return Pt(e, t, !0);
                },
                acceptData: function (e) {
                    if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
                    var t = e.nodeName && n.noData[e.nodeName.toLowerCase()];
                    return !t || (t !== !0 && e.getAttribute("classid") === t);
                },
            }),
                n.fn.extend({
                    data: function (e, t) {
                        var i,
                            r,
                            o = null,
                            a = 0,
                            s = this[0];
                        if (e === x) {
                            if (
                                this.length &&
                                ((o = n.data(s)),
                                    s.nodeType === 1 && !n._data(s, "parsedAttrs"))
                            ) {
                                for (i = s.attributes; a < i.length; a++)
                                    (r = i[a].name),
                                        r.indexOf("data-") === 0 &&
                                        ((r = n.camelCase(r.slice(5))), Ft(s, r, o[r]));
                                n._data(s, "parsedAttrs", !0);
                            }
                            return o;
                        }
                        return typeof e == "object"
                            ? this.each(function () {
                                n.data(this, e);
                            })
                            : arguments.length > 1
                                ? this.each(function () {
                                    n.data(this, e, t);
                                })
                                : s
                                    ? Ft(s, e, n.data(s, e))
                                    : null;
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            n.removeData(this, e);
                        });
                    },
                });
            function Ft(e, t, i) {
                if (i === x && e.nodeType === 1) {
                    var r = "data-" + t.replace(Jn, "-$1").toLowerCase();
                    if (((i = e.getAttribute(r)), typeof i == "string")) {
                        try {
                            i =
                                i === "true"
                                    ? !0
                                    : i === "false"
                                        ? !1
                                        : i === "null"
                                            ? null
                                            : +i + "" === i
                                                ? +i
                                                : Gn.test(i)
                                                    ? n.parseJSON(i)
                                                    : i;
                        } catch { }
                        n.data(e, t, i);
                    } else i = x;
                }
                return i;
            }
            function tt(e) {
                var t;
                for (t in e)
                    if (!(t === "data" && n.isEmptyObject(e[t])) && t !== "toJSON")
                        return !1;
                return !0;
            }
            n.extend({
                queue: function (e, t, i) {
                    var r;
                    if (e)
                        return (
                            (t = (t || "fx") + "queue"),
                            (r = n._data(e, t)),
                            i &&
                            (!r || n.isArray(i)
                                ? (r = n._data(e, t, n.makeArray(i)))
                                : r.push(i)),
                            r || []
                        );
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var i = n.queue(e, t),
                        r = i.length,
                        o = i.shift(),
                        a = n._queueHooks(e, t),
                        s = function () {
                            n.dequeue(e, t);
                        };
                    o === "inprogress" && ((o = i.shift()), r--),
                        (a.cur = o),
                        o &&
                        (t === "fx" && i.unshift("inprogress"),
                            delete a.stop,
                            o.call(e, s, a)),
                        !r && a && a.empty.fire();
                },
                _queueHooks: function (e, t) {
                    var i = t + "queueHooks";
                    return (
                        n._data(e, i) ||
                        n._data(e, i, {
                            empty: n.Callbacks("once memory").add(function () {
                                n._removeData(e, t + "queue"), n._removeData(e, i);
                            }),
                        })
                    );
                },
            }),
                n.fn.extend({
                    queue: function (e, t) {
                        var i = 2;
                        return (
                            typeof e != "string" && ((t = e), (e = "fx"), i--),
                            arguments.length < i
                                ? n.queue(this[0], e)
                                : t === x
                                    ? this
                                    : this.each(function () {
                                        var r = n.queue(this, e, t);
                                        n._queueHooks(this, e),
                                            e === "fx" && r[0] !== "inprogress" && n.dequeue(this, e);
                                    })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            n.dequeue(this, e);
                        });
                    },
                    delay: function (e, t) {
                        return (
                            (e = (n.fx && n.fx.speeds[e]) || e),
                            (t = t || "fx"),
                            this.queue(t, function (i, r) {
                                var o = setTimeout(i, e);
                                r.stop = function () {
                                    clearTimeout(o);
                                };
                            })
                        );
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function (e, t) {
                        var i,
                            r = 1,
                            o = n.Deferred(),
                            a = this,
                            s = this.length,
                            f = function () {
                                --r || o.resolveWith(a, [a]);
                            };
                        for (
                            typeof e != "string" && ((t = e), (e = x)), e = e || "fx";
                            s--;

                        )
                            (i = n._data(a[s], e + "queueHooks")),
                                i && i.empty && (r++, i.empty.add(f));
                        return f(), o.promise(t);
                    },
                });
            var Ne,
                Rt,
                nt = /[\t\r\n\f]/g,
                Kn = /\r/g,
                Zn = /^(?:input|select|textarea|button|object)$/i,
                $n = /^(?:a|area)$/i,
                it = /^(?:checked|selected)$/i,
                ge = n.support.getSetAttribute,
                Re = n.support.input;
            n.fn.extend({
                attr: function (e, t) {
                    return n.access(this, n.attr, e, t, arguments.length > 1);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        n.removeAttr(this, e);
                    });
                },
                prop: function (e, t) {
                    return n.access(this, n.prop, e, t, arguments.length > 1);
                },
                removeProp: function (e) {
                    return (
                        (e = n.propFix[e] || e),
                        this.each(function () {
                            try {
                                (this[e] = x), delete this[e];
                            } catch { }
                        })
                    );
                },
                addClass: function (e) {
                    var t,
                        i,
                        r,
                        o,
                        a,
                        s = 0,
                        f = this.length,
                        p = typeof e == "string" && e;
                    if (n.isFunction(e))
                        return this.each(function (d) {
                            n(this).addClass(e.call(this, d, this.className));
                        });
                    if (p) {
                        for (t = (e || "").match(ie) || []; s < f; s++)
                            if (
                                ((i = this[s]),
                                    (r =
                                        i.nodeType === 1 &&
                                        (i.className
                                            ? (" " + i.className + " ").replace(nt, " ")
                                            : " ")),
                                    r)
                            ) {
                                for (a = 0; (o = t[a++]);)
                                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i.className = n.trim(r);
                            }
                    }
                    return this;
                },
                removeClass: function (e) {
                    var t,
                        i,
                        r,
                        o,
                        a,
                        s = 0,
                        f = this.length,
                        p = arguments.length === 0 || (typeof e == "string" && e);
                    if (n.isFunction(e))
                        return this.each(function (d) {
                            n(this).removeClass(e.call(this, d, this.className));
                        });
                    if (p) {
                        for (t = (e || "").match(ie) || []; s < f; s++)
                            if (
                                ((i = this[s]),
                                    (r =
                                        i.nodeType === 1 &&
                                        (i.className
                                            ? (" " + i.className + " ").replace(nt, " ")
                                            : "")),
                                    r)
                            ) {
                                for (a = 0; (o = t[a++]);)
                                    for (; r.indexOf(" " + o + " ") >= 0;)
                                        r = r.replace(" " + o + " ", " ");
                                i.className = e ? n.trim(r) : "";
                            }
                    }
                    return this;
                },
                toggleClass: function (e, t) {
                    var i = typeof e,
                        r = typeof t == "boolean";
                    return n.isFunction(e)
                        ? this.each(function (o) {
                            n(this).toggleClass(e.call(this, o, this.className, t), t);
                        })
                        : this.each(function () {
                            if (i === "string")
                                for (
                                    var o, a = 0, s = n(this), f = t, p = e.match(ie) || [];
                                    (o = p[a++]);

                                )
                                    (f = r ? f : !s.hasClass(o)),
                                        s[f ? "addClass" : "removeClass"](o);
                            else
                                (i === ne || i === "boolean") &&
                                    (this.className &&
                                        n._data(this, "__className__", this.className),
                                        (this.className =
                                            this.className || e === !1
                                                ? ""
                                                : n._data(this, "__className__") || ""));
                        });
                },
                hasClass: function (e) {
                    for (var t = " " + e + " ", i = 0, r = this.length; i < r; i++)
                        if (
                            this[i].nodeType === 1 &&
                            (" " + this[i].className + " ").replace(nt, " ").indexOf(t) >= 0
                        )
                            return !0;
                    return !1;
                },
                val: function (e) {
                    var t,
                        i,
                        r,
                        o = this[0];
                    return arguments.length
                        ? ((r = n.isFunction(e)),
                            this.each(function (a) {
                                var s;
                                this.nodeType === 1 &&
                                    (r ? (s = e.call(this, a, n(this).val())) : (s = e),
                                        s == null
                                            ? (s = "")
                                            : typeof s == "number"
                                                ? (s += "")
                                                : n.isArray(s) &&
                                                (s = n.map(s, function (f) {
                                                    return f == null ? "" : f + "";
                                                })),
                                        (i =
                                            n.valHooks[this.type] ||
                                            n.valHooks[this.nodeName.toLowerCase()]),
                                        (!i || !("set" in i) || i.set(this, s, "value") === x) &&
                                        (this.value = s));
                            }))
                        : o
                            ? ((i = n.valHooks[o.type] || n.valHooks[o.nodeName.toLowerCase()]),
                                i && "get" in i && (t = i.get(o, "value")) !== x
                                    ? t
                                    : ((t = o.value),
                                        typeof t == "string" ? t.replace(Kn, "") : t ?? ""))
                            : void 0;
                },
            }),
                n.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = n.find.attr(e, "value");
                                return t ?? e.text;
                            },
                        },
                        select: {
                            get: function (e) {
                                for (
                                    var t,
                                    i,
                                    r = e.options,
                                    o = e.selectedIndex,
                                    a = e.type === "select-one" || o < 0,
                                    s = a ? null : [],
                                    f = a ? o + 1 : r.length,
                                    p = o < 0 ? f : a ? o : 0;
                                    p < f;
                                    p++
                                )
                                    if (
                                        ((i = r[p]),
                                            (i.selected || p === o) &&
                                            (n.support.optDisabled
                                                ? !i.disabled
                                                : i.getAttribute("disabled") === null) &&
                                            (!i.parentNode.disabled ||
                                                !n.nodeName(i.parentNode, "optgroup")))
                                    ) {
                                        if (((t = n(i).val()), a)) return t;
                                        s.push(t);
                                    }
                                return s;
                            },
                            set: function (e, t) {
                                for (
                                    var i, r, o = e.options, a = n.makeArray(t), s = o.length;
                                    s--;

                                )
                                    (r = o[s]),
                                        (r.selected = n.inArray(n(r).val(), a) >= 0) && (i = !0);
                                return i || (e.selectedIndex = -1), a;
                            },
                        },
                    },
                    attr: function (e, t, i) {
                        var r,
                            o,
                            a = e.nodeType;
                        if (!(!e || a === 3 || a === 8 || a === 2)) {
                            if (typeof e.getAttribute === ne) return n.prop(e, t, i);
                            if (
                                ((a !== 1 || !n.isXMLDoc(e)) &&
                                    ((t = t.toLowerCase()),
                                        (r =
                                            n.attrHooks[t] || (n.expr.match.bool.test(t) ? Rt : Ne))),
                                    i !== x)
                            )
                                if (i === null) n.removeAttr(e, t);
                                else
                                    return r && "set" in r && (o = r.set(e, i, t)) !== x
                                        ? o
                                        : (e.setAttribute(t, i + ""), i);
                            else
                                return r && "get" in r && (o = r.get(e, t)) !== null
                                    ? o
                                    : ((o = n.find.attr(e, t)), o ?? x);
                        }
                    },
                    removeAttr: function (e, t) {
                        var i,
                            r,
                            o = 0,
                            a = t && t.match(ie);
                        if (a && e.nodeType === 1)
                            for (; (i = a[o++]);)
                                (r = n.propFix[i] || i),
                                    n.expr.match.bool.test(i)
                                        ? (Re && ge) || !it.test(i)
                                            ? (e[r] = !1)
                                            : (e[n.camelCase("default-" + i)] = e[r] = !1)
                                        : n.attr(e, i, ""),
                                    e.removeAttribute(ge ? i : r);
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (
                                    !n.support.radioValue &&
                                    t === "radio" &&
                                    n.nodeName(e, "input")
                                ) {
                                    var i = e.value;
                                    return e.setAttribute("type", t), i && (e.value = i), t;
                                }
                            },
                        },
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className",
                    },
                    prop: function (e, t, i) {
                        var r,
                            o,
                            a,
                            s = e.nodeType;
                        if (!(!e || s === 3 || s === 8 || s === 2))
                            return (
                                (a = s !== 1 || !n.isXMLDoc(e)),
                                a && ((t = n.propFix[t] || t), (o = n.propHooks[t])),
                                i !== x
                                    ? o && "set" in o && (r = o.set(e, i, t)) !== x
                                        ? r
                                        : (e[t] = i)
                                    : o && "get" in o && (r = o.get(e, t)) !== null
                                        ? r
                                        : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = n.find.attr(e, "tabindex");
                                return t
                                    ? parseInt(t, 10)
                                    : Zn.test(e.nodeName) || ($n.test(e.nodeName) && e.href)
                                        ? 0
                                        : -1;
                            },
                        },
                    },
                }),
                (Rt = {
                    set: function (e, t, i) {
                        return (
                            t === !1
                                ? n.removeAttr(e, i)
                                : (Re && ge) || !it.test(i)
                                    ? e.setAttribute((!ge && n.propFix[i]) || i, i)
                                    : (e[n.camelCase("default-" + i)] = e[i] = !0),
                            i
                        );
                    },
                }),
                n.each(n.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var i = n.expr.attrHandle[t] || n.find.attr;
                    n.expr.attrHandle[t] =
                        (Re && ge) || !it.test(t)
                            ? function (r, o, a) {
                                var s = n.expr.attrHandle[o],
                                    f = a
                                        ? x
                                        : (n.expr.attrHandle[o] = x) != i(r, o, a)
                                            ? o.toLowerCase()
                                            : null;
                                return (n.expr.attrHandle[o] = s), f;
                            }
                            : function (r, o, a) {
                                return a
                                    ? x
                                    : r[n.camelCase("default-" + o)]
                                        ? o.toLowerCase()
                                        : null;
                            };
                }),
                (!Re || !ge) &&
                (n.attrHooks.value = {
                    set: function (e, t, i) {
                        if (n.nodeName(e, "input")) e.defaultValue = t;
                        else return Ne && Ne.set(e, t, i);
                    },
                }),
                ge ||
                ((Ne = {
                    set: function (e, t, i) {
                        var r = e.getAttributeNode(i);
                        return (
                            r ||
                            e.setAttributeNode((r = e.ownerDocument.createAttribute(i))),
                            (r.value = t += ""),
                            i === "value" || t === e.getAttribute(i) ? t : x
                        );
                    },
                }),
                    (n.expr.attrHandle.id =
                        n.expr.attrHandle.name =
                        n.expr.attrHandle.coords =
                        function (e, t, i) {
                            var r;
                            return i
                                ? x
                                : (r = e.getAttributeNode(t)) && r.value !== ""
                                    ? r.value
                                    : null;
                        }),
                    (n.valHooks.button = {
                        get: function (e, t) {
                            var i = e.getAttributeNode(t);
                            return i && i.specified ? i.value : x;
                        },
                        set: Ne.set,
                    }),
                    (n.attrHooks.contenteditable = {
                        set: function (e, t, i) {
                            Ne.set(e, t === "" ? !1 : t, i);
                        },
                    }),
                    n.each(["width", "height"], function (e, t) {
                        n.attrHooks[t] = {
                            set: function (i, r) {
                                if (r === "") return i.setAttribute(t, "auto"), r;
                            },
                        };
                    })),
                n.support.hrefNormalized ||
                n.each(["href", "src"], function (e, t) {
                    n.propHooks[t] = {
                        get: function (i) {
                            return i.getAttribute(t, 4);
                        },
                    };
                }),
                n.support.style ||
                (n.attrHooks.style = {
                    get: function (e) {
                        return e.style.cssText || x;
                    },
                    set: function (e, t) {
                        return (e.style.cssText = t + "");
                    },
                }),
                n.support.optSelected ||
                (n.propHooks.selected = {
                    get: function (e) {
                        var t = e.parentNode;
                        return (
                            t &&
                            (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                            null
                        );
                    },
                }),
                n.each(
                    [
                        "tabIndex",
                        "readOnly",
                        "maxLength",
                        "cellSpacing",
                        "cellPadding",
                        "rowSpan",
                        "colSpan",
                        "useMap",
                        "frameBorder",
                        "contentEditable",
                    ],
                    function () {
                        n.propFix[this.toLowerCase()] = this;
                    }
                ),
                n.support.enctype || (n.propFix.enctype = "encoding"),
                n.each(["radio", "checkbox"], function () {
                    (n.valHooks[this] = {
                        set: function (e, t) {
                            if (n.isArray(t))
                                return (e.checked = n.inArray(n(e).val(), t) >= 0);
                        },
                    }),
                        n.support.checkOn ||
                        (n.valHooks[this].get = function (e) {
                            return e.getAttribute("value") === null ? "on" : e.value;
                        });
                });
            var rt = /^(?:input|select|textarea)$/i,
                ei = /^key/,
                ti = /^(?:mouse|contextmenu)|click/,
                Bt = /^(?:focusinfocus|focusoutblur)$/,
                Wt = /^([^.]*)(?:\.(.+)|)$/;
            function Be() {
                return !0;
            }
            function Se() {
                return !1;
            }
            function It() {
                try {
                    return E.activeElement;
                } catch { }
            }
            (n.event = {
                global: {},
                add: function (e, t, i, r, o) {
                    var a,
                        s,
                        f,
                        p,
                        d,
                        h,
                        m,
                        v,
                        b,
                        D,
                        k,
                        O = n._data(e);
                    if (O) {
                        for (
                            i.handler && ((p = i), (i = p.handler), (o = p.selector)),
                            i.guid || (i.guid = n.guid++),
                            (s = O.events) || (s = O.events = {}),
                            (h = O.handle) ||
                            ((h = O.handle =
                                function (te) {
                                    return typeof n !== ne &&
                                        (!te || n.event.triggered !== te.type)
                                        ? n.event.dispatch.apply(h.elem, arguments)
                                        : x;
                                }),
                                (h.elem = e)),
                            t = (t || "").match(ie) || [""],
                            f = t.length;
                            f--;
                        )
                            (a = Wt.exec(t[f]) || []),
                                (b = k = a[1]),
                                (D = (a[2] || "").split(".").sort()),
                                b &&
                                ((d = n.event.special[b] || {}),
                                    (b = (o ? d.delegateType : d.bindType) || b),
                                    (d = n.event.special[b] || {}),
                                    (m = n.extend(
                                        {
                                            type: b,
                                            origType: k,
                                            data: r,
                                            handler: i,
                                            guid: i.guid,
                                            selector: o,
                                            needsContext: o && n.expr.match.needsContext.test(o),
                                            namespace: D.join("."),
                                        },
                                        p
                                    )),
                                    (v = s[b]) ||
                                    ((v = s[b] = []),
                                        (v.delegateCount = 0),
                                        (!d.setup || d.setup.call(e, r, D, h) === !1) &&
                                        (e.addEventListener
                                            ? e.addEventListener(b, h, !1)
                                            : e.attachEvent && e.attachEvent("on" + b, h))),
                                    d.add &&
                                    (d.add.call(e, m),
                                        m.handler.guid || (m.handler.guid = i.guid)),
                                    o ? v.splice(v.delegateCount++, 0, m) : v.push(m),
                                    (n.event.global[b] = !0));
                        e = null;
                    }
                },
                remove: function (e, t, i, r, o) {
                    var a,
                        s,
                        f,
                        p,
                        d,
                        h,
                        m,
                        v,
                        b,
                        D,
                        k,
                        O = n.hasData(e) && n._data(e);
                    if (!(!O || !(h = O.events))) {
                        for (t = (t || "").match(ie) || [""], d = t.length; d--;) {
                            if (
                                ((f = Wt.exec(t[d]) || []),
                                    (b = k = f[1]),
                                    (D = (f[2] || "").split(".").sort()),
                                    !b)
                            ) {
                                for (b in h) n.event.remove(e, b + t[d], i, r, !0);
                                continue;
                            }
                            for (
                                m = n.event.special[b] || {},
                                b = (r ? m.delegateType : m.bindType) || b,
                                v = h[b] || [],
                                f =
                                f[2] &&
                                new RegExp("(^|\\.)" + D.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                p = a = v.length;
                                a--;

                            )
                                (s = v[a]),
                                    (o || k === s.origType) &&
                                    (!i || i.guid === s.guid) &&
                                    (!f || f.test(s.namespace)) &&
                                    (!r || r === s.selector || (r === "**" && s.selector)) &&
                                    (v.splice(a, 1),
                                        s.selector && v.delegateCount--,
                                        m.remove && m.remove.call(e, s));
                            p &&
                                !v.length &&
                                ((!m.teardown || m.teardown.call(e, D, O.handle) === !1) &&
                                    n.removeEvent(e, b, O.handle),
                                    delete h[b]);
                        }
                        n.isEmptyObject(h) && (delete O.handle, n._removeData(e, "events"));
                    }
                },
                trigger: function (e, t, i, r) {
                    var o,
                        a,
                        s,
                        f,
                        p,
                        d,
                        h,
                        m = [i || E],
                        v = Ce.call(e, "type") ? e.type : e,
                        b = Ce.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (
                        ((s = d = i = i || E),
                            !(i.nodeType === 3 || i.nodeType === 8) &&
                            !Bt.test(v + n.event.triggered) &&
                            (v.indexOf(".") >= 0 &&
                                ((b = v.split(".")), (v = b.shift()), b.sort()),
                                (a = v.indexOf(":") < 0 && "on" + v),
                                (e = e[n.expando]
                                    ? e
                                    : new n.Event(v, typeof e == "object" && e)),
                                (e.isTrigger = r ? 2 : 3),
                                (e.namespace = b.join(".")),
                                (e.namespace_re = e.namespace
                                    ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
                                    : null),
                                (e.result = x),
                                e.target || (e.target = i),
                                (t = t == null ? [e] : n.makeArray(t, [e])),
                                (p = n.event.special[v] || {}),
                                !(!r && p.trigger && p.trigger.apply(i, t) === !1)))
                    ) {
                        if (!r && !p.noBubble && !n.isWindow(i)) {
                            for (
                                f = p.delegateType || v, Bt.test(f + v) || (s = s.parentNode);
                                s;
                                s = s.parentNode
                            )
                                m.push(s), (d = s);
                            d === (i.ownerDocument || E) &&
                                m.push(d.defaultView || d.parentWindow || L);
                        }
                        for (h = 0; (s = m[h++]) && !e.isPropagationStopped();)
                            (e.type = h > 1 ? f : p.bindType || v),
                                (o =
                                    (n._data(s, "events") || {})[e.type] && n._data(s, "handle")),
                                o && o.apply(s, t),
                                (o = a && s[a]),
                                o &&
                                n.acceptData(s) &&
                                o.apply &&
                                o.apply(s, t) === !1 &&
                                e.preventDefault();
                        if (
                            ((e.type = v),
                                !r &&
                                !e.isDefaultPrevented() &&
                                (!p._default || p._default.apply(m.pop(), t) === !1) &&
                                n.acceptData(i) &&
                                a &&
                                i[v] &&
                                !n.isWindow(i))
                        ) {
                            (d = i[a]), d && (i[a] = null), (n.event.triggered = v);
                            try {
                                i[v]();
                            } catch { }
                            (n.event.triggered = x), d && (i[a] = d);
                        }
                        return e.result;
                    }
                },
                dispatch: function (e) {
                    e = n.event.fix(e);
                    var t,
                        i,
                        r,
                        o,
                        a,
                        s = [],
                        f = de.call(arguments),
                        p = (n._data(this, "events") || {})[e.type] || [],
                        d = n.event.special[e.type] || {};
                    if (
                        ((f[0] = e),
                            (e.delegateTarget = this),
                            !(d.preDispatch && d.preDispatch.call(this, e) === !1))
                    ) {
                        for (
                            s = n.event.handlers.call(this, e, p), t = 0;
                            (o = s[t++]) && !e.isPropagationStopped();

                        )
                            for (
                                e.currentTarget = o.elem, a = 0;
                                (r = o.handlers[a++]) && !e.isImmediatePropagationStopped();

                            )
                                (!e.namespace_re || e.namespace_re.test(r.namespace)) &&
                                    ((e.handleObj = r),
                                        (e.data = r.data),
                                        (i = (
                                            (n.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, f)),
                                        i !== x &&
                                        (e.result = i) === !1 &&
                                        (e.preventDefault(), e.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, e), e.result;
                    }
                },
                handlers: function (e, t) {
                    var i,
                        r,
                        o,
                        a,
                        s = [],
                        f = t.delegateCount,
                        p = e.target;
                    if (f && p.nodeType && (!e.button || e.type !== "click")) {
                        for (; p != this; p = p.parentNode || this)
                            if (
                                p.nodeType === 1 &&
                                (p.disabled !== !0 || e.type !== "click")
                            ) {
                                for (o = [], a = 0; a < f; a++)
                                    (r = t[a]),
                                        (i = r.selector + " "),
                                        o[i] === x &&
                                        (o[i] = r.needsContext
                                            ? n(i, this).index(p) >= 0
                                            : n.find(i, this, null, [p]).length),
                                        o[i] && o.push(r);
                                o.length &&
                                    s.push({
                                        elem: p,
                                        handlers: o,
                                    });
                            }
                    }
                    return (
                        f < t.length &&
                        s.push({
                            elem: this,
                            handlers: t.slice(f),
                        }),
                        s
                    );
                },
                fix: function (e) {
                    if (e[n.expando]) return e;
                    var t,
                        i,
                        r,
                        o = e.type,
                        a = e,
                        s = this.fixHooks[o];
                    for (
                        s ||
                        (this.fixHooks[o] = s =
                            ti.test(o) ? this.mouseHooks : ei.test(o) ? this.keyHooks : {}),
                        r = s.props ? this.props.concat(s.props) : this.props,
                        e = new n.Event(a),
                        t = r.length;
                        t--;

                    )
                        (i = r[t]), (e[i] = a[i]);
                    return (
                        e.target || (e.target = a.srcElement || E),
                        e.target.nodeType === 3 && (e.target = e.target.parentNode),
                        (e.metaKey = !!e.metaKey),
                        s.filter ? s.filter(e, a) : e
                    );
                },
                props:
                    "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
                        " "
                    ),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (e, t) {
                        return (
                            e.which == null &&
                            (e.which = t.charCode != null ? t.charCode : t.keyCode),
                            e
                        );
                    },
                },
                mouseHooks: {
                    props:
                        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                            " "
                        ),
                    filter: function (e, t) {
                        var i,
                            r,
                            o,
                            a = t.button,
                            s = t.fromElement;
                        return (
                            e.pageX == null &&
                            t.clientX != null &&
                            ((r = e.target.ownerDocument || E),
                                (o = r.documentElement),
                                (i = r.body),
                                (e.pageX =
                                    t.clientX +
                                    ((o && o.scrollLeft) || (i && i.scrollLeft) || 0) -
                                    ((o && o.clientLeft) || (i && i.clientLeft) || 0)),
                                (e.pageY =
                                    t.clientY +
                                    ((o && o.scrollTop) || (i && i.scrollTop) || 0) -
                                    ((o && o.clientTop) || (i && i.clientTop) || 0))),
                            !e.relatedTarget &&
                            s &&
                            (e.relatedTarget = s === e.target ? t.toElement : s),
                            !e.which &&
                            a !== x &&
                            (e.which = a & 1 ? 1 : a & 2 ? 3 : a & 4 ? 2 : 0),
                            e
                        );
                    },
                },
                special: {
                    load: {
                        noBubble: !0,
                    },
                    focus: {
                        trigger: function () {
                            if (this !== It() && this.focus)
                                try {
                                    return this.focus(), !1;
                                } catch { }
                        },
                        delegateType: "focusin",
                    },
                    blur: {
                        trigger: function () {
                            if (this === It() && this.blur) return this.blur(), !1;
                        },
                        delegateType: "focusout",
                    },
                    click: {
                        trigger: function () {
                            if (
                                n.nodeName(this, "input") &&
                                this.type === "checkbox" &&
                                this.click
                            )
                                return this.click(), !1;
                        },
                        _default: function (e) {
                            return n.nodeName(e.target, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            e.result !== x && (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
                simulate: function (e, t, i, r) {
                    var o = n.extend(new n.Event(), i, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {},
                    });
                    r ? n.event.trigger(o, null, t) : n.event.dispatch.call(t, o),
                        o.isDefaultPrevented() && i.preventDefault();
                },
            }),
                (n.removeEvent = E.removeEventListener
                    ? function (e, t, i) {
                        e.removeEventListener && e.removeEventListener(t, i, !1);
                    }
                    : function (e, t, i) {
                        var r = "on" + t;
                        e.detachEvent &&
                            (typeof e[r] === ne && (e[r] = null), e.detachEvent(r, i));
                    }),
                (n.Event = function (e, t) {
                    if (!(this instanceof n.Event)) return new n.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                            (this.type = e.type),
                            (this.isDefaultPrevented =
                                e.defaultPrevented ||
                                    e.returnValue === !1 ||
                                    (e.getPreventDefault && e.getPreventDefault())
                                    ? Be
                                    : Se))
                        : (this.type = e),
                        t && n.extend(this, t),
                        (this.timeStamp = (e && e.timeStamp) || n.now()),
                        (this[n.expando] = !0);
                }),
                (n.Event.prototype = {
                    isDefaultPrevented: Se,
                    isPropagationStopped: Se,
                    isImmediatePropagationStopped: Se,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = Be),
                            e &&
                            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = Be),
                            e &&
                            (e.stopPropagation && e.stopPropagation(),
                                (e.cancelBubble = !0));
                    },
                    stopImmediatePropagation: function () {
                        (this.isImmediatePropagationStopped = Be), this.stopPropagation();
                    },
                }),
                n.each(
                    {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                    },
                    function (e, t) {
                        n.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function (i) {
                                var r,
                                    o = this,
                                    a = i.relatedTarget,
                                    s = i.handleObj;
                                return (
                                    (!a || (a !== o && !n.contains(o, a))) &&
                                    ((i.type = s.origType),
                                        (r = s.handler.apply(this, arguments)),
                                        (i.type = t)),
                                    r
                                );
                            },
                        };
                    }
                ),
                n.support.submitBubbles ||
                (n.event.special.submit = {
                    setup: function () {
                        if (n.nodeName(this, "form")) return !1;
                        n.event.add(this, "click._submit keypress._submit", function (e) {
                            var t = e.target,
                                i =
                                    n.nodeName(t, "input") || n.nodeName(t, "button")
                                        ? t.form
                                        : x;
                            i &&
                                !n._data(i, "submitBubbles") &&
                                (n.event.add(i, "submit._submit", function (r) {
                                    r._submit_bubble = !0;
                                }),
                                    n._data(i, "submitBubbles", !0));
                        });
                    },
                    postDispatch: function (e) {
                        e._submit_bubble &&
                            (delete e._submit_bubble,
                                this.parentNode &&
                                !e.isTrigger &&
                                n.event.simulate("submit", this.parentNode, e, !0));
                    },
                    teardown: function () {
                        if (n.nodeName(this, "form")) return !1;
                        n.event.remove(this, "._submit");
                    },
                }),
                n.support.changeBubbles ||
                (n.event.special.change = {
                    setup: function () {
                        if (rt.test(this.nodeName))
                            return (
                                (this.type === "checkbox" || this.type === "radio") &&
                                (n.event.add(this, "propertychange._change", function (e) {
                                    e.originalEvent.propertyName === "checked" &&
                                        (this._just_changed = !0);
                                }),
                                    n.event.add(this, "click._change", function (e) {
                                        this._just_changed &&
                                            !e.isTrigger &&
                                            (this._just_changed = !1),
                                            n.event.simulate("change", this, e, !0);
                                    })),
                                !1
                            );
                        n.event.add(this, "beforeactivate._change", function (e) {
                            var t = e.target;
                            rt.test(t.nodeName) &&
                                !n._data(t, "changeBubbles") &&
                                (n.event.add(t, "change._change", function (i) {
                                    this.parentNode &&
                                        !i.isSimulated &&
                                        !i.isTrigger &&
                                        n.event.simulate("change", this.parentNode, i, !0);
                                }),
                                    n._data(t, "changeBubbles", !0));
                        });
                    },
                    handle: function (e) {
                        var t = e.target;
                        if (
                            this !== t ||
                            e.isSimulated ||
                            e.isTrigger ||
                            (t.type !== "radio" && t.type !== "checkbox")
                        )
                            return e.handleObj.handler.apply(this, arguments);
                    },
                    teardown: function () {
                        return n.event.remove(this, "._change"), !rt.test(this.nodeName);
                    },
                }),
                n.support.focusinBubbles ||
                n.each(
                    {
                        focus: "focusin",
                        blur: "focusout",
                    },
                    function (e, t) {
                        var i = 0,
                            r = function (o) {
                                n.event.simulate(t, o.target, n.event.fix(o), !0);
                            };
                        n.event.special[t] = {
                            setup: function () {
                                i++ === 0 && E.addEventListener(e, r, !0);
                            },
                            teardown: function () {
                                --i === 0 && E.removeEventListener(e, r, !0);
                            },
                        };
                    }
                ),
                n.fn.extend({
                    on: function (e, t, i, r, o) {
                        var a, s;
                        if (typeof e == "object") {
                            typeof t != "string" && ((i = i || t), (t = x));
                            for (a in e) this.on(a, t, i, e[a], o);
                            return this;
                        }
                        if (
                            (i == null && r == null
                                ? ((r = t), (i = t = x))
                                : r == null &&
                                (typeof t == "string"
                                    ? ((r = i), (i = x))
                                    : ((r = i), (i = t), (t = x))),
                                r === !1)
                        )
                            r = Se;
                        else if (!r) return this;
                        return (
                            o === 1 &&
                            ((s = r),
                                (r = function (f) {
                                    return n().off(f), s.apply(this, arguments);
                                }),
                                (r.guid = s.guid || (s.guid = n.guid++))),
                            this.each(function () {
                                n.event.add(this, e, r, i, t);
                            })
                        );
                    },
                    one: function (e, t, i, r) {
                        return this.on(e, t, i, r, 1);
                    },
                    off: function (e, t, i) {
                        var r, o;
                        if (e && e.preventDefault && e.handleObj)
                            return (
                                (r = e.handleObj),
                                n(e.delegateTarget).off(
                                    r.namespace ? r.origType + "." + r.namespace : r.origType,
                                    r.selector,
                                    r.handler
                                ),
                                this
                            );
                        if (typeof e == "object") {
                            for (o in e) this.off(o, t, e[o]);
                            return this;
                        }
                        return (
                            (t === !1 || typeof t == "function") && ((i = t), (t = x)),
                            i === !1 && (i = Se),
                            this.each(function () {
                                n.event.remove(this, e, i, t);
                            })
                        );
                    },
                    trigger: function (e, t) {
                        return this.each(function () {
                            n.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function (e, t) {
                        var i = this[0];
                        if (i) return n.event.trigger(e, t, i, !0);
                    },
                });
            var ni = /^.[^:#\[\.,]*$/,
                ii = /^(?:parents|prev(?:Until|All))/,
                zt = n.expr.match.needsContext,
                ri = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0,
                };
            n.fn.extend({
                find: function (e) {
                    var t,
                        i = [],
                        r = this,
                        o = r.length;
                    if (typeof e != "string")
                        return this.pushStack(
                            n(e).filter(function () {
                                for (t = 0; t < o; t++) if (n.contains(r[t], this)) return !0;
                            })
                        );
                    for (t = 0; t < o; t++) n.find(e, r[t], i);
                    return (
                        (i = this.pushStack(o > 1 ? n.unique(i) : i)),
                        (i.selector = this.selector ? this.selector + " " + e : e),
                        i
                    );
                },
                has: function (e) {
                    var t,
                        i = n(e, this),
                        r = i.length;
                    return this.filter(function () {
                        for (t = 0; t < r; t++) if (n.contains(this, i[t])) return !0;
                    });
                },
                not: function (e) {
                    return this.pushStack(ot(this, e || [], !0));
                },
                filter: function (e) {
                    return this.pushStack(ot(this, e || [], !1));
                },
                is: function (e) {
                    return !!ot(
                        this,
                        typeof e == "string" && zt.test(e) ? n(e) : e || [],
                        !1
                    ).length;
                },
                closest: function (e, t) {
                    for (
                        var i,
                        r = 0,
                        o = this.length,
                        a = [],
                        s =
                            zt.test(e) || typeof e != "string"
                                ? n(e, t || this.context)
                                : 0;
                        r < o;
                        r++
                    )
                        for (i = this[r]; i && i !== t; i = i.parentNode)
                            if (
                                i.nodeType < 11 &&
                                (s
                                    ? s.index(i) > -1
                                    : i.nodeType === 1 && n.find.matchesSelector(i, e))
                            ) {
                                i = a.push(i);
                                break;
                            }
                    return this.pushStack(a.length > 1 ? n.unique(a) : a);
                },
                index: function (e) {
                    return e
                        ? typeof e == "string"
                            ? n.inArray(this[0], n(e))
                            : n.inArray(e.jquery ? e[0] : e, this)
                        : this[0] && this[0].parentNode
                            ? this.first().prevAll().length
                            : -1;
                },
                add: function (e, t) {
                    var i =
                        typeof e == "string"
                            ? n(e, t)
                            : n.makeArray(e && e.nodeType ? [e] : e),
                        r = n.merge(this.get(), i);
                    return this.pushStack(n.unique(r));
                },
                addBack: function (e) {
                    return this.add(
                        e == null ? this.prevObject : this.prevObject.filter(e)
                    );
                },
            });
            function Xt(e, t) {
                do e = e[t];
                while (e && e.nodeType !== 1);
                return e;
            }
            n.each(
                {
                    parent: function (e) {
                        var t = e.parentNode;
                        return t && t.nodeType !== 11 ? t : null;
                    },
                    parents: function (e) {
                        return n.dir(e, "parentNode");
                    },
                    parentsUntil: function (e, t, i) {
                        return n.dir(e, "parentNode", i);
                    },
                    next: function (e) {
                        return Xt(e, "nextSibling");
                    },
                    prev: function (e) {
                        return Xt(e, "previousSibling");
                    },
                    nextAll: function (e) {
                        return n.dir(e, "nextSibling");
                    },
                    prevAll: function (e) {
                        return n.dir(e, "previousSibling");
                    },
                    nextUntil: function (e, t, i) {
                        return n.dir(e, "nextSibling", i);
                    },
                    prevUntil: function (e, t, i) {
                        return n.dir(e, "previousSibling", i);
                    },
                    siblings: function (e) {
                        return n.sibling((e.parentNode || {}).firstChild, e);
                    },
                    children: function (e) {
                        return n.sibling(e.firstChild);
                    },
                    contents: function (e) {
                        return n.nodeName(e, "iframe")
                            ? e.contentDocument || e.contentWindow.document
                            : n.merge([], e.childNodes);
                    },
                },
                function (e, t) {
                    n.fn[e] = function (i, r) {
                        var o = n.map(this, t, i);
                        return (
                            e.slice(-5) !== "Until" && (r = i),
                            r && typeof r == "string" && (o = n.filter(r, o)),
                            this.length > 1 &&
                            (ri[e] || (o = n.unique(o)), ii.test(e) && (o = o.reverse())),
                            this.pushStack(o)
                        );
                    };
                }
            ),
                n.extend({
                    filter: function (e, t, i) {
                        var r = t[0];
                        return (
                            i && (e = ":not(" + e + ")"),
                            t.length === 1 && r.nodeType === 1
                                ? n.find.matchesSelector(r, e)
                                    ? [r]
                                    : []
                                : n.find.matches(
                                    e,
                                    n.grep(t, function (o) {
                                        return o.nodeType === 1;
                                    })
                                )
                        );
                    },
                    dir: function (e, t, i) {
                        for (
                            var r = [], o = e[t];
                            o &&
                            o.nodeType !== 9 &&
                            (i === x || o.nodeType !== 1 || !n(o).is(i));

                        )
                            o.nodeType === 1 && r.push(o), (o = o[t]);
                        return r;
                    },
                    sibling: function (e, t) {
                        for (var i = []; e; e = e.nextSibling)
                            e.nodeType === 1 && e !== t && i.push(e);
                        return i;
                    },
                });
            function ot(e, t, i) {
                if (n.isFunction(t))
                    return n.grep(e, function (r, o) {
                        return !!t.call(r, o, r) !== i;
                    });
                if (t.nodeType)
                    return n.grep(e, function (r) {
                        return (r === t) !== i;
                    });
                if (typeof t == "string") {
                    if (ni.test(t)) return n.filter(t, e, i);
                    t = n.filter(t, e);
                }
                return n.grep(e, function (r) {
                    return n.inArray(r, t) >= 0 !== i;
                });
            }
            function Ut(e) {
                var t = Vt.split("|"),
                    i = e.createDocumentFragment();
                if (i.createElement) for (; t.length;) i.createElement(t.pop());
                return i;
            }
            var Vt =
                "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                oi = / jQuery\d+="(?:null|\d+)"/g,
                Qt = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
                at = /^\s+/,
                Yt =
                    /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Gt = /<([\w:]+)/,
                Jt = /<tbody/i,
                ai = /<|&#?\w+;/,
                si = /<(?:script|style|link)/i,
                st = /^(?:checkbox|radio)$/i,
                ui = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Kt = /^$|\/(?:java|ecma)script/i,
                fi = /^true\/(.*)/,
                li = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Z = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: n.support.htmlSerialize
                        ? [0, "", ""]
                        : [1, "X<div>", "</div>"],
                },
                ci = Ut(E),
                ut = ci.appendChild(E.createElement("div"));
            (Z.optgroup = Z.option),
                (Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead),
                (Z.th = Z.td),
                n.fn.extend({
                    text: function (e) {
                        return n.access(
                            this,
                            function (t) {
                                return t === x
                                    ? n.text(this)
                                    : this.empty().append(
                                        ((this[0] && this[0].ownerDocument) || E).createTextNode(
                                            t
                                        )
                                    );
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function () {
                        return this.domManip(arguments, function (e) {
                            if (
                                this.nodeType === 1 ||
                                this.nodeType === 11 ||
                                this.nodeType === 9
                            ) {
                                var t = Zt(this, e);
                                t.appendChild(e);
                            }
                        });
                    },
                    prepend: function () {
                        return this.domManip(arguments, function (e) {
                            if (
                                this.nodeType === 1 ||
                                this.nodeType === 11 ||
                                this.nodeType === 9
                            ) {
                                var t = Zt(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return this.domManip(arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return this.domManip(arguments, function (e) {
                            this.parentNode &&
                                this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    remove: function (e, t) {
                        for (
                            var i, r = e ? n.filter(e, this) : this, o = 0;
                            (i = r[o]) != null;
                            o++
                        )
                            !t && i.nodeType === 1 && n.cleanData(Q(i)),
                                i.parentNode &&
                                (t && n.contains(i.ownerDocument, i) && ft(Q(i, "script")),
                                    i.parentNode.removeChild(i));
                        return this;
                    },
                    empty: function () {
                        for (var e, t = 0; (e = this[t]) != null; t++) {
                            for (e.nodeType === 1 && n.cleanData(Q(e, !1)); e.firstChild;)
                                e.removeChild(e.firstChild);
                            e.options && n.nodeName(e, "select") && (e.options.length = 0);
                        }
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = e ?? !1),
                            (t = t ?? e),
                            this.map(function () {
                                return n.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return n.access(
                            this,
                            function (t) {
                                var i = this[0] || {},
                                    r = 0,
                                    o = this.length;
                                if (t === x)
                                    return i.nodeType === 1 ? i.innerHTML.replace(oi, "") : x;
                                if (
                                    typeof t == "string" &&
                                    !si.test(t) &&
                                    (n.support.htmlSerialize || !Qt.test(t)) &&
                                    (n.support.leadingWhitespace || !at.test(t)) &&
                                    !Z[(Gt.exec(t) || ["", ""])[1].toLowerCase()]
                                ) {
                                    t = t.replace(Yt, "<$1></$2>");
                                    try {
                                        for (; r < o; r++)
                                            (i = this[r] || {}),
                                                i.nodeType === 1 &&
                                                (n.cleanData(Q(i, !1)), (i.innerHTML = t));
                                        i = 0;
                                    } catch { }
                                }
                                i && this.empty().append(t);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var e = n.map(this, function (i) {
                            return [i.nextSibling, i.parentNode];
                        }),
                            t = 0;
                        return (
                            this.domManip(
                                arguments,
                                function (i) {
                                    var r = e[t++],
                                        o = e[t++];
                                    o &&
                                        (r && r.parentNode !== o && (r = this.nextSibling),
                                            n(this).remove(),
                                            o.insertBefore(i, r));
                                },
                                !0
                            ),
                            t ? this : this.remove()
                        );
                    },
                    detach: function (e) {
                        return this.remove(e, !0);
                    },
                    domManip: function (e, t, i) {
                        e = Ht.apply([], e);
                        var r,
                            o,
                            a,
                            s,
                            f,
                            p,
                            d = 0,
                            h = this.length,
                            m = this,
                            v = h - 1,
                            b = e[0],
                            D = n.isFunction(b);
                        if (
                            D ||
                            !(
                                h <= 1 ||
                                typeof b != "string" ||
                                n.support.checkClone ||
                                !ui.test(b)
                            )
                        )
                            return this.each(function (k) {
                                var O = m.eq(k);
                                D && (e[0] = b.call(this, k, O.html())), O.domManip(e, t, i);
                            });
                        if (
                            h &&
                            ((p = n.buildFragment(e, this[0].ownerDocument, !1, !i && this)),
                                (r = p.firstChild),
                                p.childNodes.length === 1 && (p = r),
                                r)
                        ) {
                            for (s = n.map(Q(p, "script"), $t), a = s.length; d < h; d++)
                                (o = p),
                                    d !== v &&
                                    ((o = n.clone(o, !0, !0)), a && n.merge(s, Q(o, "script"))),
                                    t.call(this[d], o, d);
                            if (a)
                                for (
                                    f = s[s.length - 1].ownerDocument, n.map(s, en), d = 0;
                                    d < a;
                                    d++
                                )
                                    (o = s[d]),
                                        Kt.test(o.type || "") &&
                                        !n._data(o, "globalEval") &&
                                        n.contains(f, o) &&
                                        (o.src
                                            ? n._evalUrl(o.src)
                                            : n.globalEval(
                                                (
                                                    o.text ||
                                                    o.textContent ||
                                                    o.innerHTML ||
                                                    ""
                                                ).replace(li, "")
                                            ));
                            p = r = null;
                        }
                        return this;
                    },
                });
            function Zt(e, t) {
                return n.nodeName(e, "table") &&
                    n.nodeName(t.nodeType === 1 ? t : t.firstChild, "tr")
                    ? e.getElementsByTagName("tbody")[0] ||
                    e.appendChild(e.ownerDocument.createElement("tbody"))
                    : e;
            }
            function $t(e) {
                return (e.type = (n.find.attr(e, "type") !== null) + "/" + e.type), e;
            }
            function en(e) {
                var t = fi.exec(e.type);
                return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
            }
            function ft(e, t) {
                for (var i, r = 0; (i = e[r]) != null; r++)
                    n._data(i, "globalEval", !t || n._data(t[r], "globalEval"));
            }
            function tn(e, t) {
                if (!(t.nodeType !== 1 || !n.hasData(e))) {
                    var i,
                        r,
                        o,
                        a = n._data(e),
                        s = n._data(t, a),
                        f = a.events;
                    if (f) {
                        delete s.handle, (s.events = {});
                        for (i in f)
                            for (r = 0, o = f[i].length; r < o; r++)
                                n.event.add(t, i, f[i][r]);
                    }
                    s.data && (s.data = n.extend({}, s.data));
                }
            }
            function pi(e, t) {
                var i, r, o;
                if (t.nodeType === 1) {
                    if (
                        ((i = t.nodeName.toLowerCase()),
                            !n.support.noCloneEvent && t[n.expando])
                    ) {
                        o = n._data(t);
                        for (r in o.events) n.removeEvent(t, r, o.handle);
                        t.removeAttribute(n.expando);
                    }
                    i === "script" && t.text !== e.text
                        ? (($t(t).text = e.text), en(t))
                        : i === "object"
                            ? (t.parentNode && (t.outerHTML = e.outerHTML),
                                n.support.html5Clone &&
                                e.innerHTML &&
                                !n.trim(t.innerHTML) &&
                                (t.innerHTML = e.innerHTML))
                            : i === "input" && st.test(e.type)
                                ? ((t.defaultChecked = t.checked = e.checked),
                                    t.value !== e.value && (t.value = e.value))
                                : i === "option"
                                    ? (t.defaultSelected = t.selected = e.defaultSelected)
                                    : (i === "input" || i === "textarea") &&
                                    (t.defaultValue = e.defaultValue);
                }
            }
            n.each(
                {
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith",
                },
                function (e, t) {
                    n.fn[e] = function (i) {
                        for (var r, o = 0, a = [], s = n(i), f = s.length - 1; o <= f; o++)
                            (r = o === f ? this : this.clone(!0)),
                                n(s[o])[t](r),
                                Ze.apply(a, r.get());
                        return this.pushStack(a);
                    };
                }
            );
            function Q(e, t) {
                var i,
                    r,
                    o = 0,
                    a =
                        typeof e.getElementsByTagName !== ne
                            ? e.getElementsByTagName(t || "*")
                            : typeof e.querySelectorAll !== ne
                                ? e.querySelectorAll(t || "*")
                                : x;
                if (!a)
                    for (a = [], i = e.childNodes || e; (r = i[o]) != null; o++)
                        !t || n.nodeName(r, t) ? a.push(r) : n.merge(a, Q(r, t));
                return t === x || (t && n.nodeName(e, t)) ? n.merge([e], a) : a;
            }
            function hi(e) {
                st.test(e.type) && (e.defaultChecked = e.checked);
            }
            n.extend({
                clone: function (e, t, i) {
                    var r,
                        o,
                        a,
                        s,
                        f,
                        p = n.contains(e.ownerDocument, e);
                    if (
                        (n.support.html5Clone ||
                            n.isXMLDoc(e) ||
                            !Qt.test("<" + e.nodeName + ">")
                            ? (a = e.cloneNode(!0))
                            : ((ut.innerHTML = e.outerHTML),
                                ut.removeChild((a = ut.firstChild))),
                            (!n.support.noCloneEvent || !n.support.noCloneChecked) &&
                            (e.nodeType === 1 || e.nodeType === 11) &&
                            !n.isXMLDoc(e))
                    )
                        for (r = Q(a), f = Q(e), s = 0; (o = f[s]) != null; ++s)
                            r[s] && pi(o, r[s]);
                    if (t)
                        if (i)
                            for (f = f || Q(e), r = r || Q(a), s = 0; (o = f[s]) != null; s++)
                                tn(o, r[s]);
                        else tn(e, a);
                    return (
                        (r = Q(a, "script")),
                        r.length > 0 && ft(r, !p && Q(e, "script")),
                        (r = f = o = null),
                        a
                    );
                },
                buildFragment: function (e, t, i, r) {
                    for (
                        var o, a, s, f, p, d, h, m = e.length, v = Ut(t), b = [], D = 0;
                        D < m;
                        D++
                    )
                        if (((a = e[D]), a || a === 0))
                            if (n.type(a) === "object") n.merge(b, a.nodeType ? [a] : a);
                            else if (!ai.test(a)) b.push(t.createTextNode(a));
                            else {
                                for (
                                    f = f || v.appendChild(t.createElement("div")),
                                    p = (Gt.exec(a) || ["", ""])[1].toLowerCase(),
                                    h = Z[p] || Z._default,
                                    f.innerHTML = h[1] + a.replace(Yt, "<$1></$2>") + h[2],
                                    o = h[0];
                                    o--;

                                )
                                    f = f.lastChild;
                                if (
                                    (!n.support.leadingWhitespace &&
                                        at.test(a) &&
                                        b.push(t.createTextNode(at.exec(a)[0])),
                                        !n.support.tbody)
                                )
                                    for (
                                        a =
                                        p === "table" && !Jt.test(a)
                                            ? f.firstChild
                                            : h[1] === "<table>" && !Jt.test(a)
                                                ? f
                                                : 0,
                                        o = a && a.childNodes.length;
                                        o--;

                                    )
                                        n.nodeName((d = a.childNodes[o]), "tbody") &&
                                            !d.childNodes.length &&
                                            a.removeChild(d);
                                for (
                                    n.merge(b, f.childNodes), f.textContent = "";
                                    f.firstChild;

                                )
                                    f.removeChild(f.firstChild);
                                f = v.lastChild;
                            }
                    for (
                        f && v.removeChild(f),
                        n.support.appendChecked || n.grep(Q(b, "input"), hi),
                        D = 0;
                        (a = b[D++]);

                    )
                        if (
                            !(r && n.inArray(a, r) !== -1) &&
                            ((s = n.contains(a.ownerDocument, a)),
                                (f = Q(v.appendChild(a), "script")),
                                s && ft(f),
                                i)
                        )
                            for (o = 0; (a = f[o++]);) Kt.test(a.type || "") && i.push(a);
                    return (f = null), v;
                },
                cleanData: function (e, t) {
                    for (
                        var i,
                        r,
                        o,
                        a,
                        s = 0,
                        f = n.expando,
                        p = n.store,
                        d = n.support.deleteExpando,
                        h = n.event.special;
                        (i = e[s]) != null;
                        s++
                    )
                        if ((t || n.acceptData(i)) && ((o = i[f]), (a = o && p[o]), a)) {
                            if (a.events)
                                for (r in a.events)
                                    h[r] ? n.event.remove(i, r) : n.removeEvent(i, r, a.handle);
                            p[o] &&
                                (delete p[o],
                                    d
                                        ? delete i[f]
                                        : typeof i.removeAttribute !== ne
                                            ? i.removeAttribute(f)
                                            : (i[f] = null),
                                    we.push(o));
                        }
                },
                _evalUrl: function (e) {
                    return n.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0,
                    });
                },
            }),
                n.fn.extend({
                    wrapAll: function (e) {
                        if (n.isFunction(e))
                            return this.each(function (i) {
                                n(this).wrapAll(e.call(this, i));
                            });
                        if (this[0]) {
                            var t = n(e, this[0].ownerDocument).eq(0).clone(!0);
                            this[0].parentNode && t.insertBefore(this[0]),
                                t
                                    .map(function () {
                                        for (
                                            var i = this;
                                            i.firstChild && i.firstChild.nodeType === 1;

                                        )
                                            i = i.firstChild;
                                        return i;
                                    })
                                    .append(this);
                        }
                        return this;
                    },
                    wrapInner: function (e) {
                        return n.isFunction(e)
                            ? this.each(function (t) {
                                n(this).wrapInner(e.call(this, t));
                            })
                            : this.each(function () {
                                var t = n(this),
                                    i = t.contents();
                                i.length ? i.wrapAll(e) : t.append(e);
                            });
                    },
                    wrap: function (e) {
                        var t = n.isFunction(e);
                        return this.each(function (i) {
                            n(this).wrapAll(t ? e.call(this, i) : e);
                        });
                    },
                    unwrap: function () {
                        return this.parent()
                            .each(function () {
                                n.nodeName(this, "body") ||
                                    n(this).replaceWith(this.childNodes);
                            })
                            .end();
                    },
                });
            var He,
                ye,
                ve,
                lt = /alpha\([^)]*\)/i,
                di = /opacity\s*=\s*([^)]*)/,
                gi = /^(top|right|bottom|left)$/,
                yi = /^(none|table(?!-c[ea]).+)/,
                nn = /^margin/,
                vi = new RegExp("^(" + Fe + ")(.*)$", "i"),
                We = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
                mi = new RegExp("^([+-])=(" + Fe + ")", "i"),
                rn = {
                    BODY: "block",
                },
                bi = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block",
                },
                on = {
                    letterSpacing: 0,
                    fontWeight: 400,
                },
                me = ["Top", "Right", "Bottom", "Left"],
                an = ["Webkit", "O", "Moz", "ms"];
            function sn(e, t) {
                if (t in e) return t;
                for (
                    var i = t.charAt(0).toUpperCase() + t.slice(1), r = t, o = an.length;
                    o--;

                )
                    if (((t = an[o] + i), t in e)) return t;
                return r;
            }
            function je(e, t) {
                return (
                    (e = t || e),
                    n.css(e, "display") === "none" || !n.contains(e.ownerDocument, e)
                );
            }
            function un(e, t) {
                for (var i, r, o, a = [], s = 0, f = e.length; s < f; s++)
                    (r = e[s]),
                        r.style &&
                        ((a[s] = n._data(r, "olddisplay")),
                            (i = r.style.display),
                            t
                                ? (!a[s] && i === "none" && (r.style.display = ""),
                                    r.style.display === "" &&
                                    je(r) &&
                                    (a[s] = n._data(r, "olddisplay", pn(r.nodeName))))
                                : a[s] ||
                                ((o = je(r)),
                                    ((i && i !== "none") || !o) &&
                                    n._data(r, "olddisplay", o ? i : n.css(r, "display"))));
                for (s = 0; s < f; s++)
                    (r = e[s]),
                        r.style &&
                        (!t || r.style.display === "none" || r.style.display === "") &&
                        (r.style.display = t ? a[s] || "" : "none");
                return e;
            }
            n.fn.extend({
                css: function (e, t) {
                    return n.access(
                        this,
                        function (i, r, o) {
                            var a,
                                s,
                                f = {},
                                p = 0;
                            if (n.isArray(r)) {
                                for (s = ye(i), a = r.length; p < a; p++)
                                    f[r[p]] = n.css(i, r[p], !1, s);
                                return f;
                            }
                            return o !== x ? n.style(i, r, o) : n.css(i, r);
                        },
                        e,
                        t,
                        arguments.length > 1
                    );
                },
                show: function () {
                    return un(this, !0);
                },
                hide: function () {
                    return un(this);
                },
                toggle: function (e) {
                    var t = typeof e == "boolean";
                    return this.each(function () {
                        (t ? e : je(this)) ? n(this).show() : n(this).hide();
                    });
                },
            }),
                n.extend({
                    cssHooks: {
                        opacity: {
                            get: function (e, t) {
                                if (t) {
                                    var i = ve(e, "opacity");
                                    return i === "" ? "1" : i;
                                }
                            },
                        },
                    },
                    cssNumber: {
                        columnCount: !0,
                        fillOpacity: !0,
                        fontWeight: !0,
                        lineHeight: !0,
                        opacity: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                    },
                    cssProps: {
                        float: n.support.cssFloat ? "cssFloat" : "styleFloat",
                    },
                    style: function (e, t, i, r) {
                        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
                            var o,
                                a,
                                s,
                                f = n.camelCase(t),
                                p = e.style;
                            if (
                                ((t = n.cssProps[f] || (n.cssProps[f] = sn(p, f))),
                                    (s = n.cssHooks[t] || n.cssHooks[f]),
                                    i !== x)
                            ) {
                                if (
                                    ((a = typeof i),
                                        a === "string" &&
                                        (o = mi.exec(i)) &&
                                        ((i = (o[1] + 1) * o[2] + parseFloat(n.css(e, t))),
                                            (a = "number")),
                                        i == null || (a === "number" && isNaN(i)))
                                )
                                    return;
                                if (
                                    (a === "number" && !n.cssNumber[f] && (i += "px"),
                                        !n.support.clearCloneStyle &&
                                        i === "" &&
                                        t.indexOf("background") === 0 &&
                                        (p[t] = "inherit"),
                                        !s || !("set" in s) || (i = s.set(e, i, r)) !== x)
                                )
                                    try {
                                        p[t] = i;
                                    } catch { }
                            } else
                                return s && "get" in s && (o = s.get(e, !1, r)) !== x
                                    ? o
                                    : p[t];
                        }
                    },
                    css: function (e, t, i, r) {
                        var o,
                            a,
                            s,
                            f = n.camelCase(t);
                        return (
                            (t = n.cssProps[f] || (n.cssProps[f] = sn(e.style, f))),
                            (s = n.cssHooks[t] || n.cssHooks[f]),
                            s && "get" in s && (a = s.get(e, !0, i)),
                            a === x && (a = ve(e, t, r)),
                            a === "normal" && t in on && (a = on[t]),
                            i === "" || i
                                ? ((o = parseFloat(a)), i === !0 || n.isNumeric(o) ? o || 0 : a)
                                : a
                        );
                    },
                }),
                L.getComputedStyle
                    ? ((ye = function (e) {
                        return L.getComputedStyle(e, null);
                    }),
                        (ve = function (e, t, i) {
                            var r,
                                o,
                                a,
                                s = i || ye(e),
                                f = s ? s.getPropertyValue(t) || s[t] : x,
                                p = e.style;
                            return (
                                s &&
                                (f === "" &&
                                    !n.contains(e.ownerDocument, e) &&
                                    (f = n.style(e, t)),
                                    We.test(f) &&
                                    nn.test(t) &&
                                    ((r = p.width),
                                        (o = p.minWidth),
                                        (a = p.maxWidth),
                                        (p.minWidth = p.maxWidth = p.width = f),
                                        (f = s.width),
                                        (p.width = r),
                                        (p.minWidth = o),
                                        (p.maxWidth = a))),
                                f
                            );
                        }))
                    : E.documentElement.currentStyle &&
                    ((ye = function (e) {
                        return e.currentStyle;
                    }),
                        (ve = function (e, t, i) {
                            var r,
                                o,
                                a,
                                s = i || ye(e),
                                f = s ? s[t] : x,
                                p = e.style;
                            return (
                                f == null && p && p[t] && (f = p[t]),
                                We.test(f) &&
                                !gi.test(t) &&
                                ((r = p.left),
                                    (o = e.runtimeStyle),
                                    (a = o && o.left),
                                    a && (o.left = e.currentStyle.left),
                                    (p.left = t === "fontSize" ? "1em" : f),
                                    (f = p.pixelLeft + "px"),
                                    (p.left = r),
                                    a && (o.left = a)),
                                f === "" ? "auto" : f
                            );
                        }));
            function fn(e, t, i) {
                var r = vi.exec(t);
                return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t;
            }
            function ln(e, t, i, r, o) {
                for (
                    var a = i === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                    s = 0;
                    a < 4;
                    a += 2
                )
                    i === "margin" && (s += n.css(e, i + me[a], !0, o)),
                        r
                            ? (i === "content" && (s -= n.css(e, "padding" + me[a], !0, o)),
                                i !== "margin" &&
                                (s -= n.css(e, "border" + me[a] + "Width", !0, o)))
                            : ((s += n.css(e, "padding" + me[a], !0, o)),
                                i !== "padding" &&
                                (s += n.css(e, "border" + me[a] + "Width", !0, o)));
                return s;
            }
            function cn(e, t, i) {
                var r = !0,
                    o = t === "width" ? e.offsetWidth : e.offsetHeight,
                    a = ye(e),
                    s =
                        n.support.boxSizing &&
                        n.css(e, "boxSizing", !1, a) === "border-box";
                if (o <= 0 || o == null) {
                    if (
                        ((o = ve(e, t, a)),
                            (o < 0 || o == null) && (o = e.style[t]),
                            We.test(o))
                    )
                        return o;
                    (r = s && (n.support.boxSizingReliable || o === e.style[t])),
                        (o = parseFloat(o) || 0);
                }
                return o + ln(e, t, i || (s ? "border" : "content"), r, a) + "px";
            }
            function pn(e) {
                var t = E,
                    i = rn[e];
                return (
                    i ||
                    ((i = hn(e, t)),
                        (i === "none" || !i) &&
                        ((He = (
                            He ||
                            n("<iframe frameborder='0' width='0' height='0'/>").css(
                                "cssText",
                                "display:block !important"
                            )
                        ).appendTo(t.documentElement)),
                            (t = (He[0].contentWindow || He[0].contentDocument).document),
                            t.write("<!doctype html><html><body>"),
                            t.close(),
                            (i = hn(e, t)),
                            He.detach()),
                        (rn[e] = i)),
                    i
                );
            }
            function hn(e, t) {
                var i = n(t.createElement(e)).appendTo(t.body),
                    r = n.css(i[0], "display");
                return i.remove(), r;
            }
            n.each(["height", "width"], function (e, t) {
                n.cssHooks[t] = {
                    get: function (i, r, o) {
                        if (r)
                            return i.offsetWidth === 0 && yi.test(n.css(i, "display"))
                                ? n.swap(i, bi, function () {
                                    return cn(i, t, o);
                                })
                                : cn(i, t, o);
                    },
                    set: function (i, r, o) {
                        var a = o && ye(i);
                        return fn(
                            i,
                            r,
                            o
                                ? ln(
                                    i,
                                    t,
                                    o,
                                    n.support.boxSizing &&
                                    n.css(i, "boxSizing", !1, a) === "border-box",
                                    a
                                )
                                : 0
                        );
                    },
                };
            }),
                n.support.opacity ||
                (n.cssHooks.opacity = {
                    get: function (e, t) {
                        return di.test(
                            (t && e.currentStyle
                                ? e.currentStyle.filter
                                : e.style.filter) || ""
                        )
                            ? 0.01 * parseFloat(RegExp.$1) + ""
                            : t
                                ? "1"
                                : "";
                    },
                    set: function (e, t) {
                        var i = e.style,
                            r = e.currentStyle,
                            o = n.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                            a = (r && r.filter) || i.filter || "";
                        (i.zoom = 1),
                            !(
                                (t >= 1 || t === "") &&
                                n.trim(a.replace(lt, "")) === "" &&
                                i.removeAttribute &&
                                (i.removeAttribute("filter"), t === "" || (r && !r.filter))
                            ) && (i.filter = lt.test(a) ? a.replace(lt, o) : a + " " + o);
                    },
                }),
                n(function () {
                    n.support.reliableMarginRight ||
                        (n.cssHooks.marginRight = {
                            get: function (e, t) {
                                if (t)
                                    return n.swap(
                                        e,
                                        {
                                            display: "inline-block",
                                        },
                                        ve,
                                        [e, "marginRight"]
                                    );
                            },
                        }),
                        !n.support.pixelPosition &&
                        n.fn.position &&
                        n.each(["top", "left"], function (e, t) {
                            n.cssHooks[t] = {
                                get: function (i, r) {
                                    if (r)
                                        return (
                                            (r = ve(i, t)),
                                            We.test(r) ? n(i).position()[t] + "px" : r
                                        );
                                },
                            };
                        });
                }),
                n.expr &&
                n.expr.filters &&
                ((n.expr.filters.hidden = function (e) {
                    return (
                        (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
                        (!n.support.reliableHiddenOffsets &&
                            ((e.style && e.style.display) || n.css(e, "display")) ===
                            "none")
                    );
                }),
                    (n.expr.filters.visible = function (e) {
                        return !n.expr.filters.hidden(e);
                    })),
                n.each(
                    {
                        margin: "",
                        padding: "",
                        border: "Width",
                    },
                    function (e, t) {
                        (n.cssHooks[e + t] = {
                            expand: function (i) {
                                for (
                                    var r = 0,
                                    o = {},
                                    a = typeof i == "string" ? i.split(" ") : [i];
                                    r < 4;
                                    r++
                                )
                                    o[e + me[r] + t] = a[r] || a[r - 2] || a[0];
                                return o;
                            },
                        }),
                            nn.test(e) || (n.cssHooks[e + t].set = fn);
                    }
                );
            var xi = /%20/g,
                Ti = /\[\]$/,
                dn = /\r?\n/g,
                wi = /^(?:submit|button|image|reset|file)$/i,
                Ci = /^(?:input|select|textarea|keygen)/i;
            n.fn.extend({
                serialize: function () {
                    return n.param(this.serializeArray());
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = n.prop(this, "elements");
                        return e ? n.makeArray(e) : this;
                    })
                        .filter(function () {
                            var e = this.type;
                            return (
                                this.name &&
                                !n(this).is(":disabled") &&
                                Ci.test(this.nodeName) &&
                                !wi.test(e) &&
                                (this.checked || !st.test(e))
                            );
                        })
                        .map(function (e, t) {
                            var i = n(this).val();
                            return i == null
                                ? null
                                : n.isArray(i)
                                    ? n.map(i, function (r) {
                                        return {
                                            name: t.name,
                                            value: r.replace(
                                                dn,
                                                `\r
`
                                            ),
                                        };
                                    })
                                    : {
                                        name: t.name,
                                        value: i.replace(
                                            dn,
                                            `\r
`
                                        ),
                                    };
                        })
                        .get();
                },
            }),
                (n.param = function (e, t) {
                    var i,
                        r = [],
                        o = function (a, s) {
                            (s = n.isFunction(s) ? s() : s ?? ""),
                                (r[r.length] =
                                    encodeURIComponent(a) + "=" + encodeURIComponent(s));
                        };
                    if (
                        (t === x && (t = n.ajaxSettings && n.ajaxSettings.traditional),
                            n.isArray(e) || (e.jquery && !n.isPlainObject(e)))
                    )
                        n.each(e, function () {
                            o(this.name, this.value);
                        });
                    else for (i in e) ct(i, e[i], t, o);
                    return r.join("&").replace(xi, "+");
                });
            function ct(e, t, i, r) {
                var o;
                if (n.isArray(t))
                    n.each(t, function (a, s) {
                        i || Ti.test(e)
                            ? r(e, s)
                            : ct(e + "[" + (typeof s == "object" ? a : "") + "]", s, i, r);
                    });
                else if (!i && n.type(t) === "object")
                    for (o in t) ct(e + "[" + o + "]", t[o], i, r);
                else r(e, t);
            }
            n.each(
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                    " "
                ),
                function (e, t) {
                    n.fn[t] = function (i, r) {
                        return arguments.length > 0
                            ? this.on(t, null, i, r)
                            : this.trigger(t);
                    };
                }
            ),
                n.fn.extend({
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                    bind: function (e, t, i) {
                        return this.on(e, null, t, i);
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function (e, t, i, r) {
                        return this.on(t, e, i, r);
                    },
                    undelegate: function (e, t, i) {
                        return arguments.length === 1
                            ? this.off(e, "**")
                            : this.off(t, e || "**", i);
                    },
                });
            var be,
                se,
                pt = n.now(),
                ht = /\?/,
                Ni = /#.*$/,
                gn = /([?&])_=[^&]*/,
                Si = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Ei = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                ki = /^(?:GET|HEAD)$/,
                Ai = /^\/\//,
                yn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                vn = n.fn.load,
                mn = {},
                dt = {},
                bn = "*/".concat("*");
            try {
                se = Mn.href;
            } catch {
                (se = E.createElement("a")), (se.href = ""), (se = se.href);
            }
            be = yn.exec(se.toLowerCase()) || [];
            function xn(e) {
                return function (t, i) {
                    typeof t != "string" && ((i = t), (t = "*"));
                    var r,
                        o = 0,
                        a = t.toLowerCase().match(ie) || [];
                    if (n.isFunction(i))
                        for (; (r = a[o++]);)
                            r[0] === "+"
                                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(i))
                                : (e[r] = e[r] || []).push(i);
                };
            }
            function Tn(e, t, i, r) {
                var o = {},
                    a = e === dt;
                function s(f) {
                    var p;
                    return (
                        (o[f] = !0),
                        n.each(e[f] || [], function (d, h) {
                            var m = h(t, i, r);
                            if (typeof m == "string" && !a && !o[m])
                                return t.dataTypes.unshift(m), s(m), !1;
                            if (a) return !(p = m);
                        }),
                        p
                    );
                }
                return s(t.dataTypes[0]) || (!o["*"] && s("*"));
            }
            function gt(e, t) {
                var i,
                    r,
                    o = n.ajaxSettings.flatOptions || {};
                for (r in t) t[r] !== x && ((o[r] ? e : i || (i = {}))[r] = t[r]);
                return i && n.extend(!0, e, i), e;
            }
            (n.fn.load = function (e, t, i) {
                if (typeof e != "string" && vn) return vn.apply(this, arguments);
                var r,
                    o,
                    a,
                    s = this,
                    f = e.indexOf(" ");
                return (
                    f >= 0 && ((r = e.slice(f, e.length)), (e = e.slice(0, f))),
                    n.isFunction(t)
                        ? ((i = t), (t = x))
                        : t && typeof t == "object" && (a = "POST"),
                    s.length > 0 &&
                    n
                        .ajax({
                            url: e,
                            type: a,
                            dataType: "html",
                            data: t,
                        })
                        .done(function (p) {
                            (o = arguments),
                                s.html(r ? n("<div>").append(n.parseHTML(p)).find(r) : p);
                        })
                        .complete(
                            i &&
                            function (p, d) {
                                s.each(i, o || [p.responseText, d, p]);
                            }
                        ),
                    this
                );
            }),
                n.each(
                    [
                        "ajaxStart",
                        "ajaxStop",
                        "ajaxComplete",
                        "ajaxError",
                        "ajaxSuccess",
                        "ajaxSend",
                    ],
                    function (e, t) {
                        n.fn[t] = function (i) {
                            return this.on(t, i);
                        };
                    }
                ),
                n.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: se,
                        type: "GET",
                        isLocal: Ei.test(be[1]),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": bn,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript",
                        },
                        contents: {
                            xml: /xml/,
                            html: /html/,
                            json: /json/,
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON",
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": n.parseJSON,
                            "text xml": n.parseXML,
                        },
                        flatOptions: {
                            url: !0,
                            context: !0,
                        },
                    },
                    ajaxSetup: function (e, t) {
                        return t ? gt(gt(e, n.ajaxSettings), t) : gt(n.ajaxSettings, e);
                    },
                    ajaxPrefilter: xn(mn),
                    ajaxTransport: xn(dt),
                    ajax: function (e, t) {
                        typeof e == "object" && ((t = e), (e = x)), (t = t || {});
                        var i,
                            r,
                            o,
                            a,
                            s,
                            f,
                            p,
                            d,
                            h = n.ajaxSetup({}, t),
                            m = h.context || h,
                            v = h.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                            b = n.Deferred(),
                            D = n.Callbacks("once memory"),
                            k = h.statusCode || {},
                            O = {},
                            te = {},
                            X = 0,
                            W = "canceled",
                            A = {
                                readyState: 0,
                                getResponseHeader: function (M) {
                                    var I;
                                    if (X === 2) {
                                        if (!d)
                                            for (d = {}; (I = Si.exec(a));)
                                                d[I[1].toLowerCase()] = I[2];
                                        I = d[M.toLowerCase()];
                                    }
                                    return I ?? null;
                                },
                                getAllResponseHeaders: function () {
                                    return X === 2 ? a : null;
                                },
                                setRequestHeader: function (M, I) {
                                    var ue = M.toLowerCase();
                                    return X || ((M = te[ue] = te[ue] || M), (O[M] = I)), this;
                                },
                                overrideMimeType: function (M) {
                                    return X || (h.mimeType = M), this;
                                },
                                statusCode: function (M) {
                                    var I;
                                    if (M)
                                        if (X < 2) for (I in M) k[I] = [k[I], M[I]];
                                        else A.always(M[A.status]);
                                    return this;
                                },
                                abort: function (M) {
                                    var I = M || W;
                                    return p && p.abort(I), J(0, I), this;
                                },
                            };
                        if (
                            ((b.promise(A).complete = D.add),
                                (A.success = A.done),
                                (A.error = A.fail),
                                (h.url = ((e || h.url || se) + "")
                                    .replace(Ni, "")
                                    .replace(Ai, be[1] + "//")),
                                (h.type = t.method || t.type || h.method || h.type),
                                (h.dataTypes = n
                                    .trim(h.dataType || "*")
                                    .toLowerCase()
                                    .match(ie) || [""]),
                                h.crossDomain == null &&
                                ((i = yn.exec(h.url.toLowerCase())),
                                    (h.crossDomain = !!(
                                        i &&
                                        (i[1] !== be[1] ||
                                            i[2] !== be[2] ||
                                            (i[3] || (i[1] === "http:" ? "80" : "443")) !==
                                            (be[3] || (be[1] === "http:" ? "80" : "443")))
                                    ))),
                                h.data &&
                                h.processData &&
                                typeof h.data != "string" &&
                                (h.data = n.param(h.data, h.traditional)),
                                Tn(mn, h, t, A),
                                X === 2)
                        )
                            return A;
                        (f = h.global),
                            f && n.active++ === 0 && n.event.trigger("ajaxStart"),
                            (h.type = h.type.toUpperCase()),
                            (h.hasContent = !ki.test(h.type)),
                            (o = h.url),
                            h.hasContent ||
                            (h.data &&
                                ((o = h.url += (ht.test(o) ? "&" : "?") + h.data),
                                    delete h.data),
                                h.store === !1 &&
                                (h.url = gn.test(o)
                                    ? o.replace(gn, "$1_=" + pt++)
                                    : o + (ht.test(o) ? "&" : "?") + "_=" + pt++)),
                            h.ifModified &&
                            (n.lastModified[o] &&
                                A.setRequestHeader("If-Modified-Since", n.lastModified[o]),
                                n.etag[o] && A.setRequestHeader("If-None-Match", n.etag[o])),
                            ((h.data && h.hasContent && h.contentType !== !1) ||
                                t.contentType) &&
                            A.setRequestHeader("Content-Type", h.contentType),
                            A.setRequestHeader(
                                "Accept",
                                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                                    ? h.accepts[h.dataTypes[0]] +
                                    (h.dataTypes[0] !== "*" ? ", " + bn + "; q=0.01" : "")
                                    : h.accepts["*"]
                            );
                        for (r in h.headers) A.setRequestHeader(r, h.headers[r]);
                        if (h.beforeSend && (h.beforeSend.call(m, A, h) === !1 || X === 2))
                            return A.abort();
                        W = "abort";
                        for (r in {
                            success: 1,
                            error: 1,
                            complete: 1,
                        })
                            A[r](h[r]);
                        if (((p = Tn(dt, h, t, A)), !p)) J(-1, "No Transport");
                        else {
                            (A.readyState = 1),
                                f && v.trigger("ajaxSend", [A, h]),
                                h.async &&
                                h.timeout > 0 &&
                                (s = setTimeout(function () {
                                    A.abort("timeout");
                                }, h.timeout));
                            try {
                                (X = 1), p.send(O, J);
                            } catch (M) {
                                if (X < 2) J(-1, M);
                                else throw M;
                            }
                        }
                        function J(M, I, ue, Ue) {
                            var K,
                                fe,
                                $,
                                re,
                                le,
                                z = I;
                            X !== 2 &&
                                ((X = 2),
                                    s && clearTimeout(s),
                                    (p = x),
                                    (a = Ue || ""),
                                    (A.readyState = M > 0 ? 4 : 0),
                                    (K = (M >= 200 && M < 300) || M === 304),
                                    ue && (re = Di(h, A, ue)),
                                    (re = Li(h, re, A, K)),
                                    K
                                        ? (h.ifModified &&
                                            ((le = A.getResponseHeader("Last-Modified")),
                                                le && (n.lastModified[o] = le),
                                                (le = A.getResponseHeader("etag")),
                                                le && (n.etag[o] = le)),
                                            M === 204 || h.type === "HEAD"
                                                ? (z = "nocontent")
                                                : M === 304
                                                    ? (z = "notmodified")
                                                    : ((z = re.state),
                                                        (fe = re.data),
                                                        ($ = re.error),
                                                        (K = !$)))
                                        : (($ = z), (M || !z) && ((z = "error"), M < 0 && (M = 0))),
                                    (A.status = M),
                                    (A.statusText = (I || z) + ""),
                                    K ? b.resolveWith(m, [fe, z, A]) : b.rejectWith(m, [A, z, $]),
                                    A.statusCode(k),
                                    (k = x),
                                    f &&
                                    v.trigger(K ? "ajaxSuccess" : "ajaxError", [
                                        A,
                                        h,
                                        K ? fe : $,
                                    ]),
                                    D.fireWith(m, [A, z]),
                                    f &&
                                    (v.trigger("ajaxComplete", [A, h]),
                                        --n.active || n.event.trigger("ajaxStop")));
                        }
                        return A;
                    },
                    getJSON: function (e, t, i) {
                        return n.get(e, t, i, "json");
                    },
                    getScript: function (e, t) {
                        return n.get(e, x, t, "script");
                    },
                }),
                n.each(["get", "post"], function (e, t) {
                    n[t] = function (i, r, o, a) {
                        return (
                            n.isFunction(r) && ((a = a || o), (o = r), (r = x)),
                            n.ajax({
                                url: i,
                                type: t,
                                dataType: a,
                                data: r,
                                success: o,
                            })
                        );
                    };
                });
            function Di(e, t, i) {
                for (var r, o, a, s, f = e.contents, p = e.dataTypes; p[0] === "*";)
                    p.shift(),
                        o === x && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                if (o) {
                    for (s in f)
                        if (f[s] && f[s].test(o)) {
                            p.unshift(s);
                            break;
                        }
                }
                if (p[0] in i) a = p[0];
                else {
                    for (s in i) {
                        if (!p[0] || e.converters[s + " " + p[0]]) {
                            a = s;
                            break;
                        }
                        r || (r = s);
                    }
                    a = a || r;
                }
                if (a) return a !== p[0] && p.unshift(a), i[a];
            }
            function Li(e, t, i, r) {
                var o,
                    a,
                    s,
                    f,
                    p,
                    d = {},
                    h = e.dataTypes.slice();
                if (h[1]) for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
                for (a = h.shift(); a;)
                    if (
                        (e.responseFields[a] && (i[e.responseFields[a]] = t),
                            !p && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            (p = a),
                            (a = h.shift()),
                            a)
                    ) {
                        if (a === "*") a = p;
                        else if (p !== "*" && p !== a) {
                            if (((s = d[p + " " + a] || d["* " + a]), !s)) {
                                for (o in d)
                                    if (
                                        ((f = o.split(" ")),
                                            f[1] === a &&
                                            ((s = d[p + " " + f[0]] || d["* " + f[0]]), s))
                                    ) {
                                        s === !0
                                            ? (s = d[o])
                                            : d[o] !== !0 && ((a = f[0]), h.unshift(f[1]));
                                        break;
                                    }
                            }
                            if (s !== !0)
                                if (s && e.throws) t = s(t);
                                else
                                    try {
                                        t = s(t);
                                    } catch (m) {
                                        return {
                                            state: "parsererror",
                                            error: s ? m : "No conversion from " + p + " to " + a,
                                        };
                                    }
                        }
                    }
                return {
                    state: "success",
                    data: t,
                };
            }
            n.ajaxSetup({
                accepts: {
                    script:
                        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: {
                    script: /(?:java|ecma)script/,
                },
                converters: {
                    "text script": function (e) {
                        return n.globalEval(e), e;
                    },
                },
            }),
                n.ajaxPrefilter("script", function (e) {
                    e.store === x && (e.store = !1),
                        e.crossDomain && ((e.type = "GET"), (e.global = !1));
                }),
                n.ajaxTransport("script", function (e) {
                    if (e.crossDomain) {
                        var t,
                            i = E.head || n("head")[0] || E.documentElement;
                        return {
                            send: function (r, o) {
                                (t = E.createElement("script")),
                                    (t.async = !0),
                                    e.scriptCharset && (t.charset = e.scriptCharset),
                                    (t.src = e.url),
                                    (t.onload = t.onreadystatechange =
                                        function (a, s) {
                                            (s ||
                                                !t.readyState ||
                                                /loaded|complete/.test(t.readyState)) &&
                                                ((t.onload = t.onreadystatechange = null),
                                                    t.parentNode && t.parentNode.removeChild(t),
                                                    (t = null),
                                                    s || o(200, "success"));
                                        }),
                                    i.insertBefore(t, i.firstChild);
                            },
                            abort: function () {
                                t && t.onload(x, !0);
                            },
                        };
                    }
                });
            var wn = [],
                yt = /(=)\?(?=&|$)|\?\?/;
            n.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = wn.pop() || n.expando + "_" + pt++;
                    return (this[e] = !0), e;
                },
            }),
                n.ajaxPrefilter("json jsonp", function (e, t, i) {
                    var r,
                        o,
                        a,
                        s =
                            e.jsonp !== !1 &&
                            (yt.test(e.url)
                                ? "url"
                                : typeof e.data == "string" &&
                                !(e.contentType || "").indexOf(
                                    "application/x-www-form-urlencoded"
                                ) &&
                                yt.test(e.data) &&
                                "data");
                    if (s || e.dataTypes[0] === "jsonp")
                        return (
                            (r = e.jsonpCallback =
                                n.isFunction(e.jsonpCallback)
                                    ? e.jsonpCallback()
                                    : e.jsonpCallback),
                            s
                                ? (e[s] = e[s].replace(yt, "$1" + r))
                                : e.jsonp !== !1 &&
                                (e.url += (ht.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                            (e.converters["script json"] = function () {
                                return a || n.error(r + " was not called"), a[0];
                            }),
                            (e.dataTypes[0] = "json"),
                            (o = L[r]),
                            (L[r] = function () {
                                a = arguments;
                            }),
                            i.always(function () {
                                (L[r] = o),
                                    e[r] && ((e.jsonpCallback = t.jsonpCallback), wn.push(r)),
                                    a && n.isFunction(o) && o(a[0]),
                                    (a = o = x);
                            }),
                            "script"
                        );
                });
            var Ee,
                ke,
                Hi = 0,
                vt =
                    L.ActiveXObject &&
                    function () {
                        var e;
                        for (e in Ee) Ee[e](x, !0);
                    };
            function Cn() {
                try {
                    return new L.XMLHttpRequest();
                } catch { }
            }
            function ji() {
                try {
                    return new L.ActiveXObject("Microsoft.XMLHTTP");
                } catch { }
            }
            (n.ajaxSettings.xhr = L.ActiveXObject
                ? function () {
                    return (!this.isLocal && Cn()) || ji();
                }
                : Cn),
                (ke = n.ajaxSettings.xhr()),
                (n.support.cors = !!ke && "withCredentials" in ke),
                (ke = n.support.ajax = !!ke),
                ke &&
                n.ajaxTransport(function (e) {
                    if (!e.crossDomain || n.support.cors) {
                        var t;
                        return {
                            send: function (i, r) {
                                var o,
                                    a,
                                    s = e.xhr();
                                if (
                                    (e.username
                                        ? s.open(e.type, e.url, e.async, e.username, e.password)
                                        : s.open(e.type, e.url, e.async),
                                        e.xhrFields)
                                )
                                    for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                e.mimeType &&
                                    s.overrideMimeType &&
                                    s.overrideMimeType(e.mimeType),
                                    !e.crossDomain &&
                                    !i["X-Requested-With"] &&
                                    (i["X-Requested-With"] = "XMLHttpRequest");
                                try {
                                    for (a in i) s.setRequestHeader(a, i[a]);
                                } catch { }
                                s.send((e.hasContent && e.data) || null),
                                    (t = function (f, p) {
                                        var d, h, m, v;
                                        try {
                                            if (t && (p || s.readyState === 4))
                                                if (
                                                    ((t = x),
                                                        o &&
                                                        ((s.onreadystatechange = n.noop),
                                                            vt && delete Ee[o]),
                                                        p)
                                                )
                                                    s.readyState !== 4 && s.abort();
                                                else {
                                                    (v = {}),
                                                        (d = s.status),
                                                        (h = s.getAllResponseHeaders()),
                                                        typeof s.responseText == "string" &&
                                                        (v.text = s.responseText);
                                                    try {
                                                        m = s.statusText;
                                                    } catch {
                                                        m = "";
                                                    }
                                                    !d && e.isLocal && !e.crossDomain
                                                        ? (d = v.text ? 200 : 404)
                                                        : d === 1223 && (d = 204);
                                                }
                                        } catch (b) {
                                            p || r(-1, b);
                                        }
                                        v && r(d, m, v, h);
                                    }),
                                    e.async
                                        ? s.readyState === 4
                                            ? setTimeout(t)
                                            : ((o = ++Hi),
                                                vt &&
                                                (Ee || ((Ee = {}), n(L).unload(vt)), (Ee[o] = t)),
                                                (s.onreadystatechange = t))
                                        : t();
                            },
                            abort: function () {
                                t && t(x, !0);
                            },
                        };
                    }
                });
            var Ae,
                Ie,
                _i = /^(?:toggle|show|hide)$/,
                Nn = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
                Oi = /queueHooks$/,
                ze = [qi],
                _e = {
                    "*": [
                        function (e, t) {
                            var i = this.createTween(e, t),
                                r = i.cur(),
                                o = Nn.exec(t),
                                a = (o && o[3]) || (n.cssNumber[e] ? "" : "px"),
                                s =
                                    (n.cssNumber[e] || (a !== "px" && +r)) &&
                                    Nn.exec(n.css(i.elem, e)),
                                f = 1,
                                p = 20;
                            if (s && s[3] !== a) {
                                (a = a || s[3]), (o = o || []), (s = +r || 1);
                                do (f = f || ".5"), (s = s / f), n.style(i.elem, e, s + a);
                                while (f !== (f = i.cur() / r) && f !== 1 && --p);
                            }
                            return (
                                o &&
                                ((i.unit = a),
                                    (i.start = +s || +r || 0),
                                    (i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])),
                                i
                            );
                        },
                    ],
                };
            function Sn() {
                return (
                    setTimeout(function () {
                        Ae = x;
                    }),
                    (Ae = n.now())
                );
            }
            function En(e, t, i) {
                for (
                    var r, o = (_e[t] || []).concat(_e["*"]), a = 0, s = o.length;
                    a < s;
                    a++
                )
                    if ((r = o[a].call(i, t, e))) return r;
            }
            function kn(e, t, i) {
                var r,
                    o,
                    a = 0,
                    s = ze.length,
                    f = n.Deferred().always(function () {
                        delete p.elem;
                    }),
                    p = function () {
                        if (o) return !1;
                        for (
                            var m = Ae || Sn(),
                            v = Math.max(0, d.startTime + d.duration - m),
                            b = v / d.duration || 0,
                            D = 1 - b,
                            k = 0,
                            O = d.tweens.length;
                            k < O;
                            k++
                        )
                            d.tweens[k].run(D);
                        return (
                            f.notifyWith(e, [d, D, v]),
                            D < 1 && O ? v : (f.resolveWith(e, [d]), !1)
                        );
                    },
                    d = f.promise({
                        elem: e,
                        props: n.extend({}, t),
                        opts: n.extend(
                            !0,
                            {
                                specialEasing: {},
                            },
                            i
                        ),
                        originalProperties: t,
                        originalOptions: i,
                        startTime: Ae || Sn(),
                        duration: i.duration,
                        tweens: [],
                        createTween: function (m, v) {
                            var b = n.Tween(
                                e,
                                d.opts,
                                m,
                                v,
                                d.opts.specialEasing[m] || d.opts.easing
                            );
                            return d.tweens.push(b), b;
                        },
                        stop: function (m) {
                            var v = 0,
                                b = m ? d.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; v < b; v++) d.tweens[v].run(1);
                            return (
                                m ? f.resolveWith(e, [d, m]) : f.rejectWith(e, [d, m]), this
                            );
                        },
                    }),
                    h = d.props;
                for (Mi(h, d.opts.specialEasing); a < s; a++)
                    if (((r = ze[a].call(d, e, h, d.opts)), r)) return r;
                return (
                    n.map(h, En, d),
                    n.isFunction(d.opts.start) && d.opts.start.call(e, d),
                    n.fx.timer(
                        n.extend(p, {
                            elem: e,
                            anim: d,
                            queue: d.opts.queue,
                        })
                    ),
                    d
                        .progress(d.opts.progress)
                        .done(d.opts.done, d.opts.complete)
                        .fail(d.opts.fail)
                        .always(d.opts.always)
                );
            }
            function Mi(e, t) {
                var i, r, o, a, s;
                for (i in e)
                    if (
                        ((r = n.camelCase(i)),
                            (o = t[r]),
                            (a = e[i]),
                            n.isArray(a) && ((o = a[1]), (a = e[i] = a[0])),
                            i !== r && ((e[r] = a), delete e[i]),
                            (s = n.cssHooks[r]),
                            s && "expand" in s)
                    ) {
                        (a = s.expand(a)), delete e[r];
                        for (i in a) i in e || ((e[i] = a[i]), (t[i] = o));
                    } else t[r] = o;
            }
            n.Animation = n.extend(kn, {
                tweener: function (e, t) {
                    n.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
                    for (var i, r = 0, o = e.length; r < o; r++)
                        (i = e[r]), (_e[i] = _e[i] || []), _e[i].unshift(t);
                },
                prefilter: function (e, t) {
                    t ? ze.unshift(e) : ze.push(e);
                },
            });
            function qi(e, t, i) {
                var r,
                    o,
                    a,
                    s,
                    f,
                    p,
                    d = this,
                    h = {},
                    m = e.style,
                    v = e.nodeType && je(e),
                    b = n._data(e, "fxshow");
                i.queue ||
                    ((f = n._queueHooks(e, "fx")),
                        f.unqueued == null &&
                        ((f.unqueued = 0),
                            (p = f.empty.fire),
                            (f.empty.fire = function () {
                                f.unqueued || p();
                            })),
                        f.unqueued++,
                        d.always(function () {
                            d.always(function () {
                                f.unqueued--, n.queue(e, "fx").length || f.empty.fire();
                            });
                        })),
                    e.nodeType === 1 &&
                    ("height" in t || "width" in t) &&
                    ((i.overflow = [m.overflow, m.overflowX, m.overflowY]),
                        n.css(e, "display") === "inline" &&
                        n.css(e, "float") === "none" &&
                        (!n.support.inlineBlockNeedsLayout || pn(e.nodeName) === "inline"
                            ? (m.display = "inline-block")
                            : (m.zoom = 1))),
                    i.overflow &&
                    ((m.overflow = "hidden"),
                        n.support.shrinkWrapBlocks ||
                        d.always(function () {
                            (m.overflow = i.overflow[0]),
                                (m.overflowX = i.overflow[1]),
                                (m.overflowY = i.overflow[2]);
                        }));
                for (r in t)
                    if (((o = t[r]), _i.exec(o))) {
                        if (
                            (delete t[r],
                                (a = a || o === "toggle"),
                                o === (v ? "hide" : "show"))
                        )
                            continue;
                        h[r] = (b && b[r]) || n.style(e, r);
                    }
                if (!n.isEmptyObject(h)) {
                    b ? "hidden" in b && (v = b.hidden) : (b = n._data(e, "fxshow", {})),
                        a && (b.hidden = !v),
                        v
                            ? n(e).show()
                            : d.done(function () {
                                n(e).hide();
                            }),
                        d.done(function () {
                            var D;
                            n._removeData(e, "fxshow");
                            for (D in h) n.style(e, D, h[D]);
                        });
                    for (r in h)
                        (s = En(v ? b[r] : 0, r, d)),
                            r in b ||
                            ((b[r] = s.start),
                                v &&
                                ((s.end = s.start),
                                    (s.start = r === "width" || r === "height" ? 1 : 0)));
                }
            }
            function G(e, t, i, r, o) {
                return new G.prototype.init(e, t, i, r, o);
            }
            (n.Tween = G),
                (G.prototype = {
                    constructor: G,
                    init: function (e, t, i, r, o, a) {
                        (this.elem = e),
                            (this.prop = i),
                            (this.easing = o || "swing"),
                            (this.options = t),
                            (this.start = this.now = this.cur()),
                            (this.end = r),
                            (this.unit = a || (n.cssNumber[i] ? "" : "px"));
                    },
                    cur: function () {
                        var e = G.propHooks[this.prop];
                        return e && e.get ? e.get(this) : G.propHooks._default.get(this);
                    },
                    run: function (e) {
                        var t,
                            i = G.propHooks[this.prop];
                        return (
                            this.options.duration
                                ? (this.pos = t =
                                    n.easing[this.easing](
                                        e,
                                        this.options.duration * e,
                                        0,
                                        1,
                                        this.options.duration
                                    ))
                                : (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step &&
                            this.options.step.call(this.elem, this.now, this),
                            i && i.set ? i.set(this) : G.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (G.prototype.init.prototype = G.prototype),
                (G.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return e.elem[e.prop] != null &&
                                (!e.elem.style || e.elem.style[e.prop] == null)
                                ? e.elem[e.prop]
                                : ((t = n.css(e.elem, e.prop, "")), !t || t === "auto" ? 0 : t);
                        },
                        set: function (e) {
                            n.fx.step[e.prop]
                                ? n.fx.step[e.prop](e)
                                : e.elem.style &&
                                    (e.elem.style[n.cssProps[e.prop]] != null ||
                                        n.cssHooks[e.prop])
                                    ? n.style(e.elem, e.prop, e.now + e.unit)
                                    : (e.elem[e.prop] = e.now);
                        },
                    },
                }),
                (G.propHooks.scrollTop = G.propHooks.scrollLeft =
                {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                n.each(["toggle", "show", "hide"], function (e, t) {
                    var i = n.fn[t];
                    n.fn[t] = function (r, o, a) {
                        return r == null || typeof r == "boolean"
                            ? i.apply(this, arguments)
                            : this.animate(Xe(t, !0), r, o, a);
                    };
                }),
                n.fn.extend({
                    fadeTo: function (e, t, i, r) {
                        return this.filter(je).css("opacity", 0).show().end().animate(
                            {
                                opacity: t,
                            },
                            e,
                            i,
                            r
                        );
                    },
                    animate: function (e, t, i, r) {
                        var o = n.isEmptyObject(e),
                            a = n.speed(t, i, r),
                            s = function () {
                                var f = kn(this, n.extend({}, e), a);
                                (s.finish = function () {
                                    f.stop(!0);
                                }),
                                    (o || n._data(this, "finish")) && f.stop(!0);
                            };
                        return (
                            (s.finish = s),
                            o || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
                        );
                    },
                    stop: function (e, t, i) {
                        var r = function (o) {
                            var a = o.stop;
                            delete o.stop, a(i);
                        };
                        return (
                            typeof e != "string" && ((i = t), (t = e), (e = x)),
                            t && e !== !1 && this.queue(e || "fx", []),
                            this.each(function () {
                                var o = !0,
                                    a = e != null && e + "queueHooks",
                                    s = n.timers,
                                    f = n._data(this);
                                if (a) f[a] && f[a].stop && r(f[a]);
                                else for (a in f) f[a] && f[a].stop && Oi.test(a) && r(f[a]);
                                for (a = s.length; a--;)
                                    s[a].elem === this &&
                                        (e == null || s[a].queue === e) &&
                                        (s[a].anim.stop(i), (o = !1), s.splice(a, 1));
                                (o || !i) && n.dequeue(this, e);
                            })
                        );
                    },
                    finish: function (e) {
                        return (
                            e !== !1 && (e = e || "fx"),
                            this.each(function () {
                                var t,
                                    i = n._data(this),
                                    r = i[e + "queue"],
                                    o = i[e + "queueHooks"],
                                    a = n.timers,
                                    s = r ? r.length : 0;
                                for (
                                    i.finish = !0,
                                    n.queue(this, e, []),
                                    o && o.cur && o.cur.finish && o.cur.finish.call(this),
                                    t = a.length;
                                    t--;

                                )
                                    a[t].elem === this &&
                                        a[t].queue === e &&
                                        (a[t].anim.stop(!0), a.splice(t, 1));
                                for (t = 0; t < s; t++)
                                    r[t] && r[t].finish && r[t].finish.call(this);
                                delete i.finish;
                            })
                        );
                    },
                });
            function Xe(e, t) {
                var i,
                    r = {
                        height: e,
                    },
                    o = 0;
                for (t = t ? 1 : 0; o < 4; o += 2 - t)
                    (i = me[o]), (r["margin" + i] = r["padding" + i] = e);
                return t && (r.opacity = r.width = e), r;
            }
            n.each(
                {
                    slideDown: Xe("show"),
                    slideUp: Xe("hide"),
                    slideToggle: Xe("toggle"),
                    fadeIn: {
                        opacity: "show",
                    },
                    fadeOut: {
                        opacity: "hide",
                    },
                    fadeToggle: {
                        opacity: "toggle",
                    },
                },
                function (e, t) {
                    n.fn[e] = function (i, r, o) {
                        return this.animate(t, i, r, o);
                    };
                }
            ),
                (n.speed = function (e, t, i) {
                    var r =
                        e && typeof e == "object"
                            ? n.extend({}, e)
                            : {
                                complete: i || (!i && t) || (n.isFunction(e) && e),
                                duration: e,
                                easing: (i && t) || (t && !n.isFunction(t) && t),
                            };
                    return (
                        (r.duration = n.fx.off
                            ? 0
                            : typeof r.duration == "number"
                                ? r.duration
                                : r.duration in n.fx.speeds
                                    ? n.fx.speeds[r.duration]
                                    : n.fx.speeds._default),
                        (r.queue == null || r.queue === !0) && (r.queue = "fx"),
                        (r.old = r.complete),
                        (r.complete = function () {
                            n.isFunction(r.old) && r.old.call(this),
                                r.queue && n.dequeue(this, r.queue);
                        }),
                        r
                    );
                }),
                (n.easing = {
                    linear: function (e) {
                        return e;
                    },
                    swing: function (e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                }),
                (n.timers = []),
                (n.fx = G.prototype.init),
                (n.fx.tick = function () {
                    var e,
                        t = n.timers,
                        i = 0;
                    for (Ae = n.now(); i < t.length; i++)
                        (e = t[i]), !e() && t[i] === e && t.splice(i--, 1);
                    t.length || n.fx.stop(), (Ae = x);
                }),
                (n.fx.timer = function (e) {
                    e() && n.timers.push(e) && n.fx.start();
                }),
                (n.fx.interval = 13),
                (n.fx.start = function () {
                    Ie || (Ie = setInterval(n.fx.tick, n.fx.interval));
                }),
                (n.fx.stop = function () {
                    clearInterval(Ie), (Ie = null);
                }),
                (n.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400,
                }),
                (n.fx.step = {}),
                n.expr &&
                n.expr.filters &&
                (n.expr.filters.animated = function (e) {
                    return n.grep(n.timers, function (t) {
                        return e === t.elem;
                    }).length;
                }),
                (n.fn.offset = function (e) {
                    if (arguments.length)
                        return e === x
                            ? this
                            : this.each(function (s) {
                                n.offset.setOffset(this, e, s);
                            });
                    var t,
                        i,
                        r = {
                            top: 0,
                            left: 0,
                        },
                        o = this[0],
                        a = o && o.ownerDocument;
                    if (a)
                        return (
                            (t = a.documentElement),
                            n.contains(t, o)
                                ? (typeof o.getBoundingClientRect !== ne &&
                                    (r = o.getBoundingClientRect()),
                                    (i = An(a)),
                                {
                                    top:
                                        r.top +
                                        (i.pageYOffset || t.scrollTop) -
                                        (t.clientTop || 0),
                                    left:
                                        r.left +
                                        (i.pageXOffset || t.scrollLeft) -
                                        (t.clientLeft || 0),
                                })
                                : r
                        );
                }),
                (n.offset = {
                    setOffset: function (e, t, i) {
                        var r = n.css(e, "position");
                        r === "static" && (e.style.position = "relative");
                        var o = n(e),
                            a = o.offset(),
                            s = n.css(e, "top"),
                            f = n.css(e, "left"),
                            p =
                                (r === "absolute" || r === "fixed") &&
                                n.inArray("auto", [s, f]) > -1,
                            d = {},
                            h = {},
                            m,
                            v;
                        p
                            ? ((h = o.position()), (m = h.top), (v = h.left))
                            : ((m = parseFloat(s) || 0), (v = parseFloat(f) || 0)),
                            n.isFunction(t) && (t = t.call(e, i, a)),
                            t.top != null && (d.top = t.top - a.top + m),
                            t.left != null && (d.left = t.left - a.left + v),
                            "using" in t ? t.using.call(e, d) : o.css(d);
                    },
                }),
                n.fn.extend({
                    position: function () {
                        if (this[0]) {
                            var e,
                                t,
                                i = {
                                    top: 0,
                                    left: 0,
                                },
                                r = this[0];
                            return (
                                n.css(r, "position") === "fixed"
                                    ? (t = r.getBoundingClientRect())
                                    : ((e = this.offsetParent()),
                                        (t = this.offset()),
                                        n.nodeName(e[0], "html") || (i = e.offset()),
                                        (i.top += n.css(e[0], "borderTopWidth", !0)),
                                        (i.left += n.css(e[0], "borderLeftWidth", !0))),
                                {
                                    top: t.top - i.top - n.css(r, "marginTop", !0),
                                    left: t.left - i.left - n.css(r, "marginLeft", !0),
                                }
                            );
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (
                                var e = this.offsetParent || Lt;
                                e &&
                                !n.nodeName(e, "html") &&
                                n.css(e, "position") === "static";

                            )
                                e = e.offsetParent;
                            return e || Lt;
                        });
                    },
                }),
                n.each(
                    {
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset",
                    },
                    function (e, t) {
                        var i = /Y/.test(t);
                        n.fn[e] = function (r) {
                            return n.access(
                                this,
                                function (o, a, s) {
                                    var f = An(o);
                                    if (s === x)
                                        return f
                                            ? t in f
                                                ? f[t]
                                                : f.document.documentElement[a]
                                            : o[a];
                                    f
                                        ? f.scrollTo(
                                            i ? n(f).scrollLeft() : s,
                                            i ? s : n(f).scrollTop()
                                        )
                                        : (o[a] = s);
                                },
                                e,
                                r,
                                arguments.length,
                                null
                            );
                        };
                    }
                );
            function An(e) {
                return n.isWindow(e)
                    ? e
                    : e.nodeType === 9
                        ? e.defaultView || e.parentWindow
                        : !1;
            }
            n.each(
                {
                    Height: "height",
                    Width: "width",
                },
                function (e, t) {
                    n.each(
                        {
                            padding: "inner" + e,
                            content: t,
                            "": "outer" + e,
                        },
                        function (i, r) {
                            n.fn[r] = function (o, a) {
                                var s = arguments.length && (i || typeof o != "boolean"),
                                    f = i || (o === !0 || a === !0 ? "margin" : "border");
                                return n.access(
                                    this,
                                    function (p, d, h) {
                                        var m;
                                        return n.isWindow(p)
                                            ? p.document.documentElement["client" + e]
                                            : p.nodeType === 9
                                                ? ((m = p.documentElement),
                                                    Math.max(
                                                        p.body["scroll" + e],
                                                        m["scroll" + e],
                                                        p.body["offset" + e],
                                                        m["offset" + e],
                                                        m["client" + e]
                                                    ))
                                                : h === x
                                                    ? n.css(p, d, f)
                                                    : n.style(p, d, h, f);
                                    },
                                    t,
                                    s ? o : x,
                                    s,
                                    null
                                );
                            };
                        }
                    );
                }
            ),
                (n.fn.size = function () {
                    return this.length;
                }),
                (n.fn.andSelf = n.fn.addBack),
                typeof Le == "object" && typeof Le.exports == "object"
                    ? (Le.exports = n)
                    : ((L.jQuery = L.$ = n),
                        typeof define == "function" &&
                        define.amd &&
                        define("jquery", [], function () {
                            return n;
                        }));
        })(window);
    }
    rr.call(typeof window < "u" ? window : globalThis);
});
export default or();
//# sourceMappingURL=BxpWI5DBim9X.js.map

//# chunkId=0197c2e1-92b4-78f3-a1d2-ab39e005301a
