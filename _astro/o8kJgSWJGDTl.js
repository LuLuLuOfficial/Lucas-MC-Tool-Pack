!function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}
            , n = (new e.Error).stack;
        n && (e._posthogChunkIds = e._posthogChunkIds || {},
            e._posthogChunkIds[n] = "0197c2e1-928a-7513-a106-0b1ef92d56d0")
    } catch (e) { }
}();
var Tt = (F, P) => () => (P || F((P = {
    exports: {}
}).exports, P),
    P.exports);
var At = Tt((le, ie) => {
    typeof ie < "u" && (ie = void 0);
    typeof le < "u" && (le = void 0);
    function Ct() {
        (function (F, P) {
            typeof le == "object" && typeof ie < "u" ? ie.exports = P(__require("@popperjs/core")) : typeof define == "function" && define.amd ? define(["@popperjs/core"], P) : (F = F || self).tippy = P(F.Popper)
        }
        )(this, function (F) {
            var P = typeof window < "u" && typeof document < "u"
                , nt = P ? navigator.userAgent : ""
                , rt = /MSIE |Trident\//.test(nt)
                , W = {
                    passive: !0,
                    capture: !0
                };
            function de(e, n, i) {
                if (Array.isArray(e)) {
                    var o = e[n];
                    return o ?? (Array.isArray(i) ? i[n] : i)
                }
                return e
            }
            function ve(e, n) {
                var i = {}.toString.call(e);
                return i.indexOf("[object") === 0 && i.indexOf(n + "]") > -1
            }
            function Ce(e, n) {
                return typeof e == "function" ? e.apply(void 0, n) : e
            }
            function Ae(e, n) {
                return n === 0 ? e : function (o) {
                    clearTimeout(i),
                        i = setTimeout(function () {
                            e(o)
                        }, n)
                }
                    ;
                var i
            }
            function Oe(e, n) {
                var i = Object.assign({}, e);
                return n.forEach(function (o) {
                    delete i[o]
                }),
                    i
            }
            function G(e) {
                return [].concat(e)
            }
            function Le(e, n) {
                e.indexOf(n) === -1 && e.push(n)
            }
            function ke(e) {
                return e.split("-")[0]
            }
            function K(e) {
                return [].slice.call(e)
            }
            function X() {
                return document.createElement("div")
            }
            function oe(e) {
                return ["Element", "Fragment"].some(function (n) {
                    return ve(e, n)
                })
            }
            function me(e) {
                return ve(e, "MouseEvent")
            }
            function De(e) {
                return !(!e || !e._tippy || e._tippy.reference !== e)
            }
            function it(e) {
                return oe(e) ? [e] : function (n) {
                    return ve(n, "NodeList")
                }(e) ? K(e) : Array.isArray(e) ? e : K(document.querySelectorAll(e))
            }
            function ge(e, n) {
                e.forEach(function (i) {
                    i && (i.style.transitionDuration = n + "ms")
                })
            }
            function Z(e, n) {
                e.forEach(function (i) {
                    i && i.setAttribute("data-state", n)
                })
            }
            function Me(e) {
                var n = G(e)[0];
                return n && n.ownerDocument || document
            }
            function he(e, n, i) {
                var o = n + "EventListener";
                ["transitionend", "webkitTransitionEnd"].forEach(function (p) {
                    e[o](p, i)
                })
            }
            var B = {
                isTouch: !1
            }
                , Re = 0;
            function ot() {
                B.isTouch || (B.isTouch = !0,
                    window.performance && document.addEventListener("mousemove", Ve))
            }
            function Ve() {
                var e = performance.now();
                e - Re < 20 && (B.isTouch = !1,
                    document.removeEventListener("mousemove", Ve)),
                    Re = e
            }
            function at() {
                var e = document.activeElement;
                if (De(e)) {
                    var n = e._tippy;
                    e.blur && !n.state.isVisible && e.blur()
                }
            }
            var M = Object.assign({
                appendTo: function () {
                    return document.body
                },
                aria: {
                    content: "auto",
                    expanded: "auto"
                },
                delay: 0,
                duration: [300, 250],
                getReferenceClientRect: null,
                hideOnClick: !0,
                ignoreAttributes: !1,
                interactive: !1,
                interactiveBorder: 2,
                interactiveDebounce: 0,
                moveTransition: "",
                offset: [0, 10],
                onAfterUpdate: function () { },
                onBeforeUpdate: function () { },
                onCreate: function () { },
                onDestroy: function () { },
                onHidden: function () { },
                onHide: function () { },
                onMount: function () { },
                onShow: function () { },
                onShown: function () { },
                onTrigger: function () { },
                onUntrigger: function () { },
                onClickOutside: function () { },
                placement: "top",
                plugins: [],
                popperOptions: {},
                render: null,
                showOnCreate: !1,
                touch: !0,
                trigger: "mouseenter focus",
                triggerTarget: null
            }, {
                animateFill: !1,
                followCursor: !1,
                inlinePositioning: !1,
                sticky: !1
            }, {}, {
                allowHTML: !1,
                animation: "fade",
                arrow: !0,
                content: "",
                inertia: !1,
                maxWidth: 350,
                role: "tooltip",
                theme: "",
                zIndex: 9999
            })
                , st = Object.keys(M);
            function je(e) {
                var n = (e.plugins || []).reduce(function (i, o) {
                    var p = o.name
                        , c = o.defaultValue;
                    return p && (i[p] = e[p] !== void 0 ? e[p] : c),
                        i
                }, {});
                return Object.assign({}, e, {}, n)
            }
            function Pe(e, n) {
                var i = Object.assign({}, n, {
                    content: Ce(n.content, [e])
                }, n.ignoreAttributes ? {} : function (o, p) {
                    return (p ? Object.keys(je(Object.assign({}, M, {
                        plugins: p
                    }))) : st).reduce(function (c, a) {
                        var v = (o.getAttribute("data-tippy-" + a) || "").trim();
                        if (!v)
                            return c;
                        if (a === "content")
                            c[a] = v;
                        else
                            try {
                                c[a] = JSON.parse(v)
                            } catch {
                                c[a] = v
                            }
                        return c
                    }, {})
                }(e, n.plugins));
                return i.aria = Object.assign({}, M.aria, {}, i.aria),
                    i.aria = {
                        expanded: i.aria.expanded === "auto" ? n.interactive : i.aria.expanded,
                        content: i.aria.content === "auto" ? n.interactive ? null : "describedby" : i.aria.content
                    },
                    i
            }
            function be(e, n) {
                e.innerHTML = n
            }
            function Ie(e) {
                var n = X();
                return e === !0 ? n.className = "tippy-arrow" : (n.className = "tippy-svg-arrow",
                    oe(e) ? n.appendChild(e) : be(n, e)),
                    n
            }
            function Se(e, n) {
                oe(n.content) ? (be(e, ""),
                    e.appendChild(n.content)) : typeof n.content != "function" && (n.allowHTML ? be(e, n.content) : e.textContent = n.content)
            }
            function ae(e) {
                var n = e.firstElementChild
                    , i = K(n.children);
                return {
                    box: n,
                    content: i.find(function (o) {
                        return o.classList.contains("tippy-content")
                    }),
                    arrow: i.find(function (o) {
                        return o.classList.contains("tippy-arrow") || o.classList.contains("tippy-svg-arrow")
                    }),
                    backdrop: i.find(function (o) {
                        return o.classList.contains("tippy-backdrop")
                    })
                }
            }
            function Be(e) {
                var n = X()
                    , i = X();
                i.className = "tippy-box",
                    i.setAttribute("data-state", "hidden"),
                    i.setAttribute("tabindex", "-1");
                var o = X();
                function p(c, a) {
                    var v = ae(n),
                        l = v.box,
                        w = v.content,
                        y = v.arrow;
                    a.theme ? l.setAttribute("data-theme", a.theme) : l.removeAttribute("data-theme"),
                        typeof a.animation == "string" ? l.setAttribute("data-animation", a.animation) : l.removeAttribute("data-animation"),
                        a.inertia ? l.setAttribute("data-inertia", "") : l.removeAttribute("data-inertia"),
                        l.style.maxWidth = typeof a.maxWidth == "number" ? a.maxWidth + "px" : a.maxWidth,
                        a.role ? l.setAttribute("role", a.role) : l.removeAttribute("role"),
                        c.content === a.content && c.allowHTML === a.allowHTML || Se(w, e.props),
                        a.arrow ? y ? c.arrow !== a.arrow && (l.removeChild(y),
                            l.appendChild(Ie(a.arrow))) : l.appendChild(Ie(a.arrow)) : y && l.removeChild(y)
                }
                return o.className = "tippy-content",
                    o.setAttribute("data-state", "hidden"),
                    Se(o, e.props),
                    n.appendChild(i),
                    i.appendChild(o),
                    p(e.props, e.props),
                {
                    popper: n,
                    onUpdate: p
                }
            }
            Be.$$tippy = !0;
            var ut = 1
                , se = []
                , ue = [];
            function pt(e, n) {
                var i, o, p, c, a, v, l, w, y, u = Pe(e, Object.assign({}, M, {}, je((i = n,
                    Object.keys(i).reduce(function (r, s) {
                        return i[s] !== void 0 && (r[s] = i[s]),
                            r
                    }, {}))))), h = !1, x = !1, f = !1, T = !1, E = [], C = Ae(Je, u.interactiveDebounce), A = Me(u.triggerTarget || e), Y = ut++, q = (y = u.plugins).filter(function (r, s) {
                        return y.indexOf(r) === s
                    }), t = {
                        id: Y,
                        reference: e,
                        popper: X(),
                        popperInstance: null,
                        props: u,
                        state: {
                            isEnabled: !0,
                            isVisible: !1,
                            isDestroyed: !1,
                            isMounted: !1,
                            isShown: !1
                        },
                        plugins: q,
                        clearDelayTimeouts: function () {
                            clearTimeout(o),
                                clearTimeout(p),
                                cancelAnimationFrame(c)
                        },
                        setProps: function (r) {
                            if (!t.state.isDestroyed) {
                                V("onBeforeUpdate", [t, r]),
                                    qe();
                                var s = t.props
                                    , d = Pe(e, Object.assign({}, t.props, {}, r, {
                                        ignoreAttributes: !0
                                    }));
                                t.props = d,
                                    Ye(),
                                    s.interactiveDebounce !== d.interactiveDebounce && (xe(),
                                        C = Ae(Je, d.interactiveDebounce)),
                                    s.triggerTarget && !d.triggerTarget ? G(s.triggerTarget).forEach(function (g) {
                                        g.removeAttribute("aria-expanded")
                                    }) : d.triggerTarget && e.removeAttribute("aria-expanded"),
                                    re(),
                                    pe(),
                                    _ && _(s, d),
                                    t.popperInstance && (Ze(),
                                        Te().forEach(function (g) {
                                            requestAnimationFrame(g._tippy.popperInstance.forceUpdate)
                                        })),
                                    V("onAfterUpdate", [t, r])
                            }
                        },
                        setContent: function (r) {
                            t.setProps({
                                content: r
                            })
                        },
                        show: function () {
                            var r = t.state.isVisible
                                , s = t.state.isDestroyed
                                , d = !t.state.isEnabled
                                , g = B.isTouch && !t.props.touch
                                , b = de(t.props.duration, 0, M.duration);
                            if (!(r || s || d || g) && !J().hasAttribute("disabled") && (V("onShow", [t], !1),
                                t.props.onShow(t) !== !1)) {
                                if (t.state.isVisible = !0,
                                    H() && (m.style.visibility = "visible"),
                                    pe(),
                                    We(),
                                    t.state.isMounted || (m.style.transition = "none"),
                                    H()) {
                                    var L = ne()
                                        , N = L.box
                                        , z = L.content;
                                    ge([N, z], 0)
                                }
                                l = function () {
                                    if (t.state.isVisible && !T) {
                                        if (T = !0,
                                            m.offsetHeight,
                                            m.style.transition = t.props.moveTransition,
                                            H() && t.props.animation) {
                                            var O = ne()
                                                , S = O.box
                                                , k = O.content;
                                            ge([S, k], b),
                                                Z([S, k], "visible")
                                        }
                                        _e(),
                                            re(),
                                            Le(ue, t),
                                            t.state.isMounted = !0,
                                            V("onMount", [t]),
                                            t.props.animation && H() && function (U, j) {
                                                Xe(U, j)
                                            }(b, function () {
                                                t.state.isShown = !0,
                                                    V("onShown", [t])
                                            })
                                    }
                                }
                                    ,
                                    function () {
                                        var O, S = t.props.appendTo, k = J();
                                        O = t.props.interactive && S === M.appendTo || S === "parent" ? k.parentNode : Ce(S, [k]),
                                            O.contains(m) || O.appendChild(m),
                                            Ze()
                                    }()
                            }
                        },
                        hide: function () {
                            var r = !t.state.isVisible
                                , s = t.state.isDestroyed
                                , d = !t.state.isEnabled
                                , g = de(t.props.duration, 1, M.duration);
                            if (!(r || s || d) && (V("onHide", [t], !1),
                                t.props.onHide(t) !== !1)) {
                                if (t.state.isVisible = !1,
                                    t.state.isShown = !1,
                                    T = !1,
                                    h = !1,
                                    H() && (m.style.visibility = "hidden"),
                                    xe(),
                                    Ee(),
                                    pe(),
                                    H()) {
                                    var b = ne()
                                        , L = b.box
                                        , N = b.content;
                                    t.props.animation && (ge([L, N], g),
                                        Z([L, N], "hidden"))
                                }
                                _e(),
                                    re(),
                                    t.props.animation ? H() && function (z, O) {
                                        Xe(z, function () {
                                            !t.state.isVisible && m.parentNode && m.parentNode.contains(m) && O()
                                        })
                                    }(g, t.unmount) : t.unmount()
                            }
                        },
                        hideWithInteractivity: function (r) {
                            A.addEventListener("mousemove", C),
                                Le(se, C),
                                C(r)
                        },
                        enable: function () {
                            t.state.isEnabled = !0
                        },
                        disable: function () {
                            t.hide(),
                                t.state.isEnabled = !1
                        },
                        unmount: function () {
                            t.state.isVisible && t.hide(),
                                t.state.isMounted && (et(),
                                    Te().forEach(function (r) {
                                        r._tippy.unmount()
                                    }),
                                    m.parentNode && m.parentNode.removeChild(m),
                                    ue = ue.filter(function (r) {
                                        return r !== t
                                    }),
                                    t.state.isMounted = !1,
                                    V("onHidden", [t]))
                        },
                        destroy: function () {
                            t.state.isDestroyed || (t.clearDelayTimeouts(),
                                t.unmount(),
                                qe(),
                                delete e._tippy,
                                t.state.isDestroyed = !0,
                                V("onDestroy", [t]))
                        }
                    };
                if (!u.render)
                    return t;
                var D = u.render(t)
                    , m = D.popper
                    , _ = D.onUpdate;
                m.setAttribute("data-tippy-root", ""),
                    m.id = "tippy-" + t.id,
                    t.popper = m,
                    e._tippy = t,
                    m._tippy = t;
                var $ = q.map(function (r) {
                    return r.fn(t)
                })
                    , I = e.hasAttribute("aria-expanded");
                return Ye(),
                    re(),
                    pe(),
                    V("onCreate", [t]),
                    u.showOnCreate && tt(),
                    m.addEventListener("mouseenter", function () {
                        t.props.interactive && t.state.isVisible && t.clearDelayTimeouts()
                    }),
                    m.addEventListener("mouseleave", function (r) {
                        t.props.interactive && t.props.trigger.indexOf("mouseenter") >= 0 && (A.addEventListener("mousemove", C),
                            C(r))
                    }),
                    t;
                function ee() {
                    var r = t.props.touch;
                    return Array.isArray(r) ? r : [r, 0]
                }
                function te() {
                    return ee()[0] === "hold"
                }
                function H() {
                    var r;
                    return !!((r = t.props.render) != null && r.$$tippy)
                }
                function J() {
                    return w || e
                }
                function ne() {
                    return ae(m)
                }
                function Ue(r) {
                    return t.state.isMounted && !t.state.isVisible || B.isTouch || a && a.type === "focus" ? 0 : de(t.props.delay, r ? 0 : 1, M.delay)
                }
                function pe() {
                    m.style.pointerEvents = t.props.interactive && t.state.isVisible ? "" : "none",
                        m.style.zIndex = "" + t.props.zIndex
                }
                function V(r, s, d) {
                    var g;
                    d === void 0 && (d = !0),
                        $.forEach(function (b) {
                            b[r] && b[r].apply(void 0, s)
                        }),
                        d && (g = t.props)[r].apply(g, s)
                }
                function _e() {
                    var r = t.props.aria;
                    if (r.content) {
                        var s = "aria-" + r.content
                            , d = m.id;
                        G(t.props.triggerTarget || e).forEach(function (g) {
                            var b = g.getAttribute(s);
                            if (t.state.isVisible)
                                g.setAttribute(s, b ? b + " " + d : d);
                            else {
                                var L = b && b.replace(d, "").trim();
                                L ? g.setAttribute(s, L) : g.removeAttribute(s)
                            }
                        })
                    }
                }
                function re() {
                    !I && t.props.aria.expanded && G(t.props.triggerTarget || e).forEach(function (r) {
                        t.props.interactive ? r.setAttribute("aria-expanded", t.state.isVisible && r === J() ? "true" : "false") : r.removeAttribute("aria-expanded")
                    })
                }
                function xe() {
                    A.removeEventListener("mousemove", C),
                        se = se.filter(function (r) {
                            return r !== C
                        })
                }
                function ce(r) {
                    if (!(B.isTouch && (f || r.type === "mousedown") || t.props.interactive && m.contains(r.target))) {
                        if (J().contains(r.target)) {
                            if (B.isTouch || t.state.isVisible && t.props.trigger.indexOf("click") >= 0)
                                return
                        } else
                            V("onClickOutside", [t, r]);
                        t.props.hideOnClick === !0 && (t.clearDelayTimeouts(),
                            t.hide(),
                            x = !0,
                            setTimeout(function () {
                                x = !1
                            }),
                            t.state.isMounted || Ee())
                    }
                }
                function ze() {
                    f = !0
                }
                function Fe() {
                    f = !1
                }
                function We() {
                    A.addEventListener("mousedown", ce, !0),
                        A.addEventListener("touchend", ce, W),
                        A.addEventListener("touchstart", Fe, W),
                        A.addEventListener("touchmove", ze, W)
                }
                function Ee() {
                    A.removeEventListener("mousedown", ce, !0),
                        A.removeEventListener("touchend", ce, W),
                        A.removeEventListener("touchstart", Fe, W),
                        A.removeEventListener("touchmove", ze, W)
                }
                function Xe(r, s) {
                    var d = ne().box;
                    function g(b) {
                        b.target === d && (he(d, "remove", g),
                            s())
                    }
                    if (r === 0)
                        return s();
                    he(d, "remove", v),
                        he(d, "add", g),
                        v = g
                }
                function Q(r, s, d) {
                    d === void 0 && (d = !1),
                        G(t.props.triggerTarget || e).forEach(function (g) {
                            g.addEventListener(r, s, d),
                                E.push({
                                    node: g,
                                    eventType: r,
                                    handler: s,
                                    options: d
                                })
                        })
                }
                function Ye() {
                    var r;
                    te() && (Q("touchstart", $e, {
                        passive: !0
                    }),
                        Q("touchend", Ge, {
                            passive: !0
                        })),
                        (r = t.props.trigger,
                            r.split(/\s+/).filter(Boolean)).forEach(function (s) {
                                if (s !== "manual")
                                    switch (Q(s, $e),
                                    s) {
                                        case "mouseenter":
                                            Q("mouseleave", Ge);
                                            break;
                                        case "focus":
                                            Q(rt ? "focusout" : "blur", Ke);
                                            break;
                                        case "focusin":
                                            Q("focusout", Ke)
                                    }
                            })
                }
                function qe() {
                    E.forEach(function (r) {
                        var s = r.node
                            , d = r.eventType
                            , g = r.handler
                            , b = r.options;
                        s.removeEventListener(d, g, b)
                    }),
                        E = []
                }
                function $e(r) {
                    var s, d = !1;
                    if (t.state.isEnabled && !Qe(r) && !x) {
                        var g = ((s = a) == null ? void 0 : s.type) === "focus";
                        a = r,
                            w = r.currentTarget,
                            re(),
                            !t.state.isVisible && me(r) && se.forEach(function (b) {
                                return b(r)
                            }),
                            r.type === "click" && (t.props.trigger.indexOf("mouseenter") < 0 || h) && t.props.hideOnClick !== !1 && t.state.isVisible ? d = !0 : tt(r),
                            r.type === "click" && (h = !d),
                            d && !g && fe(r)
                    }
                }
                function Je(r) {
                    var s = r.target
                        , d = J().contains(s) || m.contains(s);
                    r.type === "mousemove" && d || function (g, b) {
                        var L = b.clientX
                            , N = b.clientY;
                        return g.every(function (z) {
                            var O = z.popperRect
                                , S = z.popperState
                                , k = z.props.interactiveBorder
                                , U = ke(S.placement)
                                , j = S.modifiersData.offset;
                            if (!j)
                                return !0;
                            var mt = U === "bottom" ? j.top.y : 0
                                , gt = U === "top" ? j.bottom.y : 0
                                , ht = U === "right" ? j.left.x : 0
                                , bt = U === "left" ? j.right.x : 0
                                , yt = O.top - N + mt > k
                                , wt = N - O.bottom - gt > k
                                , xt = O.left - L + ht > k
                                , Et = L - O.right - bt > k;
                            return yt || wt || xt || Et
                        })
                    }(Te().concat(m).map(function (g) {
                        var b, L = (b = g._tippy.popperInstance) == null ? void 0 : b.state;
                        return L ? {
                            popperRect: g.getBoundingClientRect(),
                            popperState: L,
                            props: u
                        } : null
                    }).filter(Boolean), r) && (xe(),
                        fe(r))
                }
                function Ge(r) {
                    Qe(r) || t.props.trigger.indexOf("click") >= 0 && h || (t.props.interactive ? t.hideWithInteractivity(r) : fe(r))
                }
                function Ke(r) {
                    t.props.trigger.indexOf("focusin") < 0 && r.target !== J() || t.props.interactive && r.relatedTarget && m.contains(r.relatedTarget) || fe(r)
                }
                function Qe(r) {
                    return !!B.isTouch && te() !== r.type.indexOf("touch") >= 0
                }
                function Ze() {
                    et();
                    var r = t.props
                        , s = r.popperOptions
                        , d = r.placement
                        , g = r.offset
                        , b = r.getReferenceClientRect
                        , L = r.moveTransition
                        , N = H() ? ae(m).arrow : null
                        , z = b ? {
                            getBoundingClientRect: b,
                            contextElement: b.contextElement || J()
                        } : e
                        , O = [{
                            name: "offset",
                            options: {
                                offset: g
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                padding: {
                                    top: 2,
                                    bottom: 2,
                                    left: 5,
                                    right: 5
                                }
                            }
                        }, {
                            name: "flip",
                            options: {
                                padding: 5
                            }
                        }, {
                            name: "computeStyles",
                            options: {
                                adaptive: !L
                            }
                        }, {
                            name: "$$tippy",
                            enabled: !0,
                            phase: "beforeWrite",
                            requires: ["computeStyles"],
                            fn: function (S) {
                                var k = S.state;
                                if (H()) {
                                    var U = ne().box;
                                    ["placement", "reference-hidden", "escaped"].forEach(function (j) {
                                        j === "placement" ? U.setAttribute("data-placement", k.placement) : k.attributes.popper["data-popper-" + j] ? U.setAttribute("data-" + j, "") : U.removeAttribute("data-" + j)
                                    }),
                                        k.attributes.popper = {}
                                }
                            }
                        }];
                    H() && N && O.push({
                        name: "arrow",
                        options: {
                            element: N,
                            padding: 3
                        }
                    }),
                        O.push.apply(O, s?.modifiers || []),
                        t.popperInstance = F.createPopper(z, m, Object.assign({}, s, {
                            placement: d,
                            onFirstUpdate: l,
                            modifiers: O
                        }))
                }
                function et() {
                    t.popperInstance && (t.popperInstance.destroy(),
                        t.popperInstance = null)
                }
                function Te() {
                    return K(m.querySelectorAll("[data-tippy-root]"))
                }
                function tt(r) {
                    t.clearDelayTimeouts(),
                        r && V("onTrigger", [t, r]),
                        We();
                    var s = Ue(!0)
                        , d = ee()
                        , g = d[0]
                        , b = d[1];
                    B.isTouch && g === "hold" && b && (s = b),
                        s ? o = setTimeout(function () {
                            t.show()
                        }, s) : t.show()
                }
                function fe(r) {
                    if (t.clearDelayTimeouts(),
                        V("onUntrigger", [t, r]),
                        t.state.isVisible) {
                        if (!(t.props.trigger.indexOf("mouseenter") >= 0 && t.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(r.type) >= 0 && h)) {
                            var s = Ue(!1);
                            s ? p = setTimeout(function () {
                                t.state.isVisible && t.hide()
                            }, s) : c = requestAnimationFrame(function () {
                                t.hide()
                            })
                        }
                    } else
                        Ee()
                }
            }
            function R(e, n) {
                n === void 0 && (n = {});
                var i = M.plugins.concat(n.plugins || []);
                document.addEventListener("touchstart", ot, W),
                    window.addEventListener("blur", at);
                var o = Object.assign({}, n, {
                    plugins: i
                })
                    , p = it(e).reduce(function (c, a) {
                        var v = a && pt(a, o);
                        return v && c.push(v),
                            c
                    }, []);
                return oe(e) ? p[0] : p
            }
            R.defaultProps = M,
                R.setDefaultProps = function (e) {
                    Object.keys(e).forEach(function (n) {
                        M[n] = e[n]
                    })
                }
                ,
                R.currentInput = B;
            var ct = {
                mouseover: "mouseenter",
                focusin: "focus",
                click: "click"
            }
                , ft = {
                    name: "animateFill",
                    defaultValue: !1,
                    fn: function (e) {
                        var n;
                        if (!((n = e.props.render) != null && n.$$tippy))
                            return {};
                        var i = ae(e.popper)
                            , o = i.box
                            , p = i.content
                            , c = e.props.animateFill ? function () {
                                var a = X();
                                return a.className = "tippy-backdrop",
                                    Z([a], "hidden"),
                                    a
                            }() : null;
                        return {
                            onCreate: function () {
                                c && (o.insertBefore(c, o.firstElementChild),
                                    o.setAttribute("data-animatefill", ""),
                                    o.style.overflow = "hidden",
                                    e.setProps({
                                        arrow: !1,
                                        animation: "shift-away"
                                    }))
                            },
                            onMount: function () {
                                if (c) {
                                    var a = o.style.transitionDuration
                                        , v = Number(a.replace("ms", ""));
                                    p.style.transitionDelay = Math.round(v / 10) + "ms",
                                        c.style.transitionDuration = a,
                                        Z([c], "visible")
                                }
                            },
                            onShow: function () {
                                c && (c.style.transitionDuration = "0ms")
                            },
                            onHide: function () {
                                c && Z([c], "hidden")
                            }
                        }
                    }
                }
                , ye = {
                    clientX: 0,
                    clientY: 0
                }
                , we = [];
            function He(e) {
                var n = e.clientX
                    , i = e.clientY;
                ye = {
                    clientX: n,
                    clientY: i
                }
            }
            var lt = {
                name: "followCursor",
                defaultValue: !1,
                fn: function (e) {
                    var n = e.reference
                        , i = Me(e.props.triggerTarget || n)
                        , o = !1
                        , p = !1
                        , c = !0
                        , a = e.props;
                    function v() {
                        return e.props.followCursor === "initial" && e.state.isVisible
                    }
                    function l() {
                        i.addEventListener("mousemove", u)
                    }
                    function w() {
                        i.removeEventListener("mousemove", u)
                    }
                    function y() {
                        o = !0,
                            e.setProps({
                                getReferenceClientRect: null
                            }),
                            o = !1
                    }
                    function u(f) {
                        var T = !f.target || n.contains(f.target)
                            , E = e.props.followCursor
                            , C = f.clientX
                            , A = f.clientY
                            , Y = n.getBoundingClientRect()
                            , q = C - Y.left
                            , t = A - Y.top;
                        !T && e.props.interactive || e.setProps({
                            getReferenceClientRect: function () {
                                var D = n.getBoundingClientRect()
                                    , m = C
                                    , _ = A;
                                E === "initial" && (m = D.left + q,
                                    _ = D.top + t);
                                var $ = E === "horizontal" ? D.top : _
                                    , I = E === "vertical" ? D.right : m
                                    , ee = E === "horizontal" ? D.bottom : _
                                    , te = E === "vertical" ? D.left : m;
                                return {
                                    width: I - te,
                                    height: ee - $,
                                    top: $,
                                    right: I,
                                    bottom: ee,
                                    left: te
                                }
                            }
                        })
                    }
                    function h() {
                        e.props.followCursor && (we.push({
                            instance: e,
                            doc: i
                        }),
                            function (f) {
                                f.addEventListener("mousemove", He)
                            }(i))
                    }
                    function x() {
                        (we = we.filter(function (f) {
                            return f.instance !== e
                        })).filter(function (f) {
                            return f.doc === i
                        }).length === 0 && function (f) {
                            f.removeEventListener("mousemove", He)
                        }(i)
                    }
                    return {
                        onCreate: h,
                        onDestroy: x,
                        onBeforeUpdate: function () {
                            a = e.props
                        },
                        onAfterUpdate: function (f, T) {
                            var E = T.followCursor;
                            o || E !== void 0 && a.followCursor !== E && (x(),
                                E ? (h(),
                                    !e.state.isMounted || p || v() || l()) : (w(),
                                        y()))
                        },
                        onMount: function () {
                            e.props.followCursor && !p && (c && (u(ye),
                                c = !1),
                                v() || l())
                        },
                        onTrigger: function (f, T) {
                            me(T) && (ye = {
                                clientX: T.clientX,
                                clientY: T.clientY
                            }),
                                p = T.type === "focus"
                        },
                        onHidden: function () {
                            e.props.followCursor && (y(),
                                w(),
                                c = !0)
                        }
                    }
                }
            }
                , dt = {
                    name: "inlinePositioning",
                    defaultValue: !1,
                    fn: function (e) {
                        var n, i = e.reference, o = -1, p = !1, c = {
                            name: "tippyInlinePositioning",
                            enabled: !0,
                            phase: "afterWrite",
                            fn: function (v) {
                                var l = v.state;
                                e.props.inlinePositioning && (n !== l.placement && e.setProps({
                                    getReferenceClientRect: function () {
                                        return function (w) {
                                            return function (y, u, h, x) {
                                                if (h.length < 2 || y === null)
                                                    return u;
                                                if (h.length === 2 && x >= 0 && h[0].left > h[1].right)
                                                    return h[x] || u;
                                                switch (y) {
                                                    case "top":
                                                    case "bottom":
                                                        var f = h[0]
                                                            , T = h[h.length - 1]
                                                            , E = y === "top"
                                                            , C = f.top
                                                            , A = T.bottom
                                                            , Y = E ? f.left : T.left
                                                            , q = E ? f.right : T.right;
                                                        return {
                                                            top: C,
                                                            bottom: A,
                                                            left: Y,
                                                            right: q,
                                                            width: q - Y,
                                                            height: A - C
                                                        };
                                                    case "left":
                                                    case "right":
                                                        var t = Math.min.apply(Math, h.map(function (I) {
                                                            return I.left
                                                        }))
                                                            , D = Math.max.apply(Math, h.map(function (I) {
                                                                return I.right
                                                            }))
                                                            , m = h.filter(function (I) {
                                                                return y === "left" ? I.left === t : I.right === D
                                                            })
                                                            , _ = m[0].top
                                                            , $ = m[m.length - 1].bottom;
                                                        return {
                                                            top: _,
                                                            bottom: $,
                                                            left: t,
                                                            right: D,
                                                            width: D - t,
                                                            height: $ - _
                                                        };
                                                    default:
                                                        return u
                                                }
                                            }(ke(w), i.getBoundingClientRect(), K(i.getClientRects()), o)
                                        }(l.placement)
                                    }
                                }),
                                    n = l.placement)
                            }
                        };
                        function a() {
                            var v;
                            p || (v = function (l, w) {
                                var y;
                                return {
                                    popperOptions: Object.assign({}, l.popperOptions, {
                                        modifiers: [].concat((((y = l.popperOptions) == null ? void 0 : y.modifiers) || []).filter(function (u) {
                                            return u.name !== w.name
                                        }), [w])
                                    })
                                }
                            }(e.props, c),
                                p = !0,
                                e.setProps(v),
                                p = !1)
                        }
                        return {
                            onCreate: a,
                            onAfterUpdate: a,
                            onTrigger: function (v, l) {
                                if (me(l)) {
                                    var w = K(e.reference.getClientRects())
                                        , y = w.find(function (u) {
                                            return u.left - 2 <= l.clientX && u.right + 2 >= l.clientX && u.top - 2 <= l.clientY && u.bottom + 2 >= l.clientY
                                        });
                                    o = w.indexOf(y)
                                }
                            },
                            onUntrigger: function () {
                                o = -1
                            }
                        }
                    }
                }
                , vt = {
                    name: "sticky",
                    defaultValue: !1,
                    fn: function (e) {
                        var n = e.reference
                            , i = e.popper;
                        function o(v) {
                            return e.props.sticky === !0 || e.props.sticky === v
                        }
                        var p = null
                            , c = null;
                        function a() {
                            var v = o("reference") ? (e.popperInstance ? e.popperInstance.state.elements.reference : n).getBoundingClientRect() : null
                                , l = o("popper") ? i.getBoundingClientRect() : null;
                            (v && Ne(p, v) || l && Ne(c, l)) && e.popperInstance && e.popperInstance.update(),
                                p = v,
                                c = l,
                                e.state.isMounted && requestAnimationFrame(a)
                        }
                        return {
                            onMount: function () {
                                e.props.sticky && a()
                            }
                        }
                    }
                };
            function Ne(e, n) {
                return !e || !n || e.top !== n.top || e.right !== n.right || e.bottom !== n.bottom || e.left !== n.left
            }
            return P && function (e) {
                var n = document.createElement("style");
                n.textContent = e,
                    n.setAttribute("data-tippy-stylesheet", "");
                var i = document.head
                    , o = document.querySelector("head>style,head>link");
                o ? i.insertBefore(n, o) : i.appendChild(n)
            }('.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'),
                R.setDefaultProps({
                    plugins: [ft, lt, dt, vt],
                    render: Be
                }),
                R.createSingleton = function (e, n) {
                    n === void 0 && (n = {});
                    var i, o = e, p = [], c = n.overrides;
                    function a() {
                        p = o.map(function (u) {
                            return u.reference
                        })
                    }
                    function v(u) {
                        o.forEach(function (h) {
                            u ? h.enable() : h.disable()
                        })
                    }
                    v(!1),
                        a();
                    var l = {
                        fn: function () {
                            return {
                                onDestroy: function () {
                                    v(!0)
                                },
                                onTrigger: function (u, h) {
                                    var x = h.currentTarget
                                        , f = p.indexOf(x);
                                    if (x !== i) {
                                        i = x;
                                        var T = (c || []).concat("content").reduce(function (E, C) {
                                            return E[C] = o[f].props[C],
                                                E
                                        }, {});
                                        u.setProps(Object.assign({}, T, {
                                            getReferenceClientRect: function () {
                                                return x.getBoundingClientRect()
                                            }
                                        }))
                                    }
                                }
                            }
                        }
                    }
                        , w = R(X(), Object.assign({}, Oe(n, ["overrides"]), {
                            plugins: [l].concat(n.plugins || []),
                            triggerTarget: p
                        }))
                        , y = w.setProps;
                    return w.setProps = function (u) {
                        c = u.overrides || c,
                            y(u)
                    }
                        ,
                        w.setInstances = function (u) {
                            v(!0),
                                o = u,
                                v(!1),
                                a(),
                                w.setProps({
                                    triggerTarget: p
                                })
                        }
                        ,
                        w
                }
                ,
                R.delegate = function (e, n) {
                    var i = []
                        , o = []
                        , p = n.target
                        , c = Oe(n, ["target"])
                        , a = Object.assign({}, c, {
                            trigger: "manual",
                            touch: !1
                        })
                        , v = Object.assign({}, c, {
                            showOnCreate: !0
                        })
                        , l = R(e, a);
                    function w(u) {
                        if (u.target) {
                            var h = u.target.closest(p);
                            if (h) {
                                var x = h.getAttribute("data-tippy-trigger") || n.trigger || M.trigger;
                                if (!h._tippy && !(u.type === "touchstart" && typeof v.touch == "boolean" || u.type !== "touchstart" && x.indexOf(ct[u.type]) < 0)) {
                                    var f = R(h, v);
                                    f && (o = o.concat(f))
                                }
                            }
                        }
                    }
                    function y(u, h, x, f) {
                        f === void 0 && (f = !1),
                            u.addEventListener(h, x, f),
                            i.push({
                                node: u,
                                eventType: h,
                                handler: x,
                                options: f
                            })
                    }
                    return G(l).forEach(function (u) {
                        var h = u.destroy;
                        u.destroy = function (x) {
                            x === void 0 && (x = !0),
                                x && o.forEach(function (f) {
                                    f.destroy()
                                }),
                                o = [],
                                i.forEach(function (f) {
                                    var T = f.node
                                        , E = f.eventType
                                        , C = f.handler
                                        , A = f.options;
                                    T.removeEventListener(E, C, A)
                                }),
                                i = [],
                                h()
                        }
                            ,
                            function (x) {
                                var f = x.reference;
                                y(f, "touchstart", w),
                                    y(f, "mouseover", w),
                                    y(f, "focusin", w),
                                    y(f, "click", w)
                            }(u)
                    }),
                        l
                }
                ,
                R.hideAll = function (e) {
                    var n = e === void 0 ? {} : e
                        , i = n.exclude
                        , o = n.duration;
                    ue.forEach(function (p) {
                        var c = !1;
                        if (i && (c = De(i) ? p.reference === i : p.popper === i.popper),
                            !c) {
                            var a = p.props.duration;
                            p.setProps({
                                duration: o
                            }),
                                p.hide(),
                                p.state.isDestroyed || p.setProps({
                                    duration: a
                                })
                        }
                    })
                }
                ,
                R.roundArrow = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
                R
        })
    }
    Ct.call(typeof window < "u" ? window : globalThis)
}
);
export default At();
//# sourceMappingURL=o8kJgSWJGDTl.js.map

//# chunkId=0197c2e1-928a-7513-a106-0b1ef92d56d0
