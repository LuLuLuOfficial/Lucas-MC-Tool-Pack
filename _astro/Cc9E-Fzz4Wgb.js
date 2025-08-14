!function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}
            , n = (new e.Error).stack;
        n && (e._posthogChunkIds = e._posthogChunkIds || {},
            e._posthogChunkIds[n] = "0198824c-9da3-7983-b557-1ebcbce6feda")
    } catch (e) { }
}();
var ce = (r, u) => () => (u || r((u = {
    exports: {}
}).exports, u),
    u.exports);
var ue = ce((_, j) => {
    typeof j < "u" && (j = void 0);
    typeof _ < "u" && (_ = void 0);
    function he() {
        (function (r) {
            typeof r.fn.each2 > "u" && r.fn.extend({
                each2: function (u) {
                    for (var x = r([0]), T = -1, R = this.length; ++T < R && (x.context = x[0] = this[T]) && u.call(x[0], T, x) !== !1;)
                        ;
                    return this
                }
            })
        }
        )(jQuery),
            function (r, u) {
                if (window.Select2 !== u)
                    return;
                var f, x, T, R, A, k, U, K, L, f = {
                    TAB: 9,
                    ENTER: 13,
                    ESC: 27,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    HOME: 36,
                    END: 35,
                    BACKSPACE: 8,
                    DELETE: 46,
                    isArrow: function (e) {
                        switch (e = e.which ? e.which : e,
                        e) {
                            case f.LEFT:
                            case f.RIGHT:
                            case f.UP:
                            case f.DOWN:
                                return !0
                        }
                        return !1
                    },
                    isControl: function (e) {
                        var s = e.which;
                        switch (s) {
                            case f.SHIFT:
                            case f.CTRL:
                            case f.ALT:
                                return !0
                        }
                        return !!e.metaKey
                    },
                    isFunctionKey: function (e) {
                        return e = e.which ? e.which : e,
                            e >= 112 && e <= 123
                    }
                }, $ = "<div class='select2-measure-scrollbar'></div>";
                K = r(document),
                    A = function () {
                        var e = 1;
                        return function () {
                            return e++
                        }
                    }();
                function E(e, s) {
                    for (var i = 0, t = s.length; i < t; i = i + 1)
                        if (S(e, s[i]))
                            return i;
                    return -1
                }
                function ee() {
                    var e = r($);
                    e.appendTo("body");
                    var s = {
                        width: e.width() - e[0].clientWidth,
                        height: e.height() - e[0].clientHeight
                    };
                    return e.remove(),
                        s
                }
                function S(e, s) {
                    return e === s ? !0 : e === u || s === u || e === null || s === null ? !1 : e.constructor === String ? e + "" == s + "" : s.constructor === String ? s + "" == e + "" : !1
                }
                function H(e, s) {
                    var i, t, n;
                    if (e === null || e.length < 1)
                        return [];
                    for (i = e.split(s),
                        t = 0,
                        n = i.length; t < n; t = t + 1)
                        i[t] = r.trim(i[t]);
                    return i
                }
                function V(e) {
                    return e.outerWidth(!1) - e.width()
                }
                function G(e) {
                    var s = "keyup-change-value";
                    e.on("keydown", function () {
                        r.data(e, s) === u && r.data(e, s, e.val())
                    }),
                        e.on("keyup", function () {
                            var i = r.data(e, s);
                            i !== u && e.val() !== i && (r.removeData(e, s),
                                e.trigger("keyup-change"))
                        })
                }
                K.on("mousemove", function (e) { // 持续追踪鼠标光标的最新坐标
                    U = {
                        x: e.pageX,
                        y: e.pageY
                    }
                });
                function te(e) {
                    e.on("mousemove", function (s) {
                        var i = U;
                        (i === u || i.x !== s.pageX || i.y !== s.pageY) && r(s.target).trigger("mousemove-filtered", s)
                    })
                }
                function q(e, s, i) {
                    i = i || u;
                    var t;
                    return function () {
                        var n = arguments;
                        window.clearTimeout(t),
                            t = window.setTimeout(function () {
                                s.apply(i, n)
                            }, e)
                    }
                }
                function se(e) {
                    var s = !1, i;
                    return function () {
                        return s === !1 && (i = e(),
                            s = !0),
                            i
                    }
                }
                function ie(e, s) {
                    var i = q(e, function (t) {
                        s.trigger("scroll-debounced", t)
                    });
                    s.on("scroll", function (t) {
                        E(t.target, s.get()) >= 0 && i(t)
                    })
                }
                function ne(e) {
                    e[0] !== document.activeElement && window.setTimeout(function () {
                        var s = e[0], i = e.val().length, t;
                        e.focus(),
                            e.is(":visible") && s === document.activeElement && (s.setSelectionRange ? s.setSelectionRange(i, i) : s.createTextRange && (t = s.createTextRange(),
                                t.collapse(!1),
                                t.select()))
                    }, 0)
                }
                function re(e) {
                    e = r(e)[0];
                    var s = 0
                        , i = 0;
                    if ("selectionStart" in e)
                        s = e.selectionStart,
                            i = e.selectionEnd - s;
                    else if ("selection" in document) {
                        e.focus();
                        var t = document.selection.createRange();
                        i = document.selection.createRange().text.length,
                            t.moveStart("character", -e.value.length),
                            s = t.text.length - i
                    }
                    return {
                        offset: s,
                        length: i
                    }
                }
                function v(e) {
                    e.preventDefault(),
                        e.stopPropagation()
                }
                function oe(e) {
                    e.preventDefault(),
                        e.stopImmediatePropagation()
                }
                function ae(e) {
                    if (!k) {
                        var s = e[0].currentStyle || window.getComputedStyle(e[0], null);
                        k = r(document.createElement("div")).css({
                            position: "absolute",
                            left: "-10000px",
                            top: "-10000px",
                            display: "none",
                            fontSize: s.fontSize,
                            fontFamily: s.fontFamily,
                            fontStyle: s.fontStyle,
                            fontWeight: s.fontWeight,
                            letterSpacing: s.letterSpacing,
                            textTransform: s.textTransform,
                            whiteSpace: "nowrap"
                        }),
                            k.attr("class", "select2-sizer"),
                            r("body").append(k)
                    }
                    return k.text(e.val()),
                        k.width()
                }
                function F(e, s, i) {
                    var t, n = [], a;
                    t = e.attr("class"),
                        t && (t = "" + t,
                            r(t.split(" ")).each2(function () {
                                this.indexOf("select2-") === 0 && n.push(this)
                            })),
                        t = s.attr("class"),
                        t && (t = "" + t,
                            r(t.split(" ")).each2(function () {
                                this.indexOf("select2-") !== 0 && (a = i(this),
                                    a && n.push(this))
                            })),
                        e.attr("class", n.join(" "))
                }
                function X(e, s, i, t) {
                    var n = e.toUpperCase().indexOf(s.toUpperCase())
                        , a = s.length;
                    if (n < 0) {
                        i.push(t(e));
                        return
                    }
                    i.push(t(e.substring(0, n))),
                        i.push("<span class='select2-match'>"),
                        i.push(t(e.substring(n, n + a))),
                        i.push("</span>"),
                        i.push(t(e.substring(n + a, e.length)))
                }
                function Q(e) {
                    var s, i = 0, t = null, n = e.quietMillis || 100, a = e.url, o = this;
                    return function (l) {
                        window.clearTimeout(s),
                            s = window.setTimeout(function () {
                                i += 1;
                                var c = i
                                    , h = e.data
                                    , d = a
                                    , g = e.transport || r.fn.select2.ajaxDefaults.transport
                                    , p = {
                                        type: e.type || "GET",
                                        cache: e.store || !1,
                                        jsonpCallback: e.jsonpCallback || u,
                                        dataType: e.dataType || "json"
                                    }
                                    , m = r.extend({}, r.fn.select2.ajaxDefaults.params, p);
                                h = h ? h.call(o, l.term, l.page, l.context) : null,
                                    d = typeof d == "function" ? d.call(o, l.term, l.page, l.context) : d,
                                    t !== null && t.abort(),
                                    e.params && (r.isFunction(e.params) ? r.extend(m, e.params.call(o)) : r.extend(m, e.params)),
                                    r.extend(m, {
                                        url: d,
                                        dataType: e.dataType,
                                        data: h,
                                        success: function (w) {
                                            if (!(c < i)) {
                                                var C = e.results(w, l.page);
                                                l.callback(C)
                                            }
                                        }
                                    }),
                                    t = g.call(o, m)
                            }, n)
                    }
                }
                function Y(e) {
                    var s = e, i, t, n = function (o) {
                        return "" + o.text
                    };
                    r.isArray(s) && (t = s,
                        s = {
                            results: t
                        }),
                        r.isFunction(s) === !1 && (t = s,
                            s = function () {
                                return t
                            }
                        );
                    var a = s();
                    return a.text && (n = a.text,
                        r.isFunction(n) || (i = a.text,
                            n = function (o) {
                                return o[i]
                            }
                        )),
                        function (o) {
                            var l = o.term, c = {
                                results: []
                            }, h;
                            if (l === "") {
                                o.callback(s());
                                return
                            }
                            h = function (d, g) {
                                var p, m;
                                if (d = d[0],
                                    d.children) {
                                    p = {};
                                    for (m in d)
                                        d.hasOwnProperty(m) && (p[m] = d[m]);
                                    p.children = [],
                                        r(d.children).each2(function (w, C) {
                                            h(C, p.children)
                                        }),
                                        (p.children.length || o.matcher(l, n(p), d)) && g.push(p)
                                } else
                                    o.matcher(l, n(d), d) && g.push(d)
                            }
                                ,
                                r(s().results).each2(function (d, g) {
                                    h(g, c.results)
                                }),
                                o.callback(c)
                        }
                }
                function J(e) {
                    var s = r.isFunction(e);
                    return function (i) {
                        var t = i.term
                            , n = {
                                results: []
                            };
                        r(s ? e() : e).each(function () {
                            var a = this.text !== u
                                , o = a ? this.text : this;
                            (t === "" || i.matcher(t, o)) && n.results.push(a ? this : {
                                id: this,
                                text: this
                            })
                        }),
                            i.callback(n)
                    }
                }
                function O(e, s) {
                    if (r.isFunction(e))
                        return !0;
                    if (!e)
                        return !1;
                    throw new Error("formatterName must be a function or a falsy value")
                }
                function P(e) {
                    return r.isFunction(e) ? e() : e
                }
                function Z(e) {
                    var s = 0;
                    return r.each(e, function (i, t) {
                        t.children ? s += Z(t.children) : s++
                    }),
                        s
                }
                function le(e, s, i, t) {
                    var n = e, a = !1, o, l, c, h, d;
                    if (!t.createSearchChoice || !t.tokenSeparators || t.tokenSeparators.length < 1)
                        return u;
                    for (; ;) {
                        for (l = -1,
                            c = 0,
                            h = t.tokenSeparators.length; c < h && (d = t.tokenSeparators[c],
                                l = e.indexOf(d),
                                !(l >= 0)); c++)
                            ;
                        if (l < 0)
                            break;
                        if (o = e.substring(0, l),
                            e = e.substring(l + d.length),
                            o.length > 0 && (o = t.createSearchChoice(o, s),
                                o !== u && o !== null && t.id(o) !== u && t.id(o) !== null)) {
                            for (a = !1,
                                c = 0,
                                h = s.length; c < h; c++)
                                if (S(t.id(o), t.id(s[c]))) {
                                    a = !0;
                                    break
                                }
                            a || i(o)
                        }
                    }
                    if (n !== e)
                        return e
                }
                function N(e, s) {
                    var i = function () { };
                    return i.prototype = new e,
                        i.prototype.constructor = i,
                        i.prototype.parent = e.prototype,
                        i.prototype = r.extend(i.prototype, s),
                        i
                }
                x = N(Object, {
                    bind: function (e) {
                        var s = this;
                        return function () {
                            e.apply(s, arguments)
                        }
                    },
                    init: function (e) {
                        var s, i, t = ".select2-results", n, a;
                        this.opts = e = this.prepareOpts(e),
                            this.id = e.id,
                            e.element.data("select2") !== u && e.element.data("select2") !== null && this.destroy(),
                            this.container = this.createContainer(),
                            this.containerId = "s2id_" + (e.element.attr("id") || "autogen" + A()),
                            this.containerSelector = "#" + this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"),
                            this.container.attr("id", this.containerId),
                            this.body = se(function () {
                                return e.element.closest("body")
                            }),
                            F(this.container, this.opts.element, this.opts.adaptContainerCssClass),
                            this.container.css(P(e.containerCss)),
                            this.container.addClass(P(e.containerCssClass)),
                            this.elementTabIndex = this.opts.element.attr("tabindex"),
                            this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container),
                            this.container.data("select2", this),
                            this.dropdown = this.container.find(".select2-drop"),
                            this.dropdown.addClass(P(e.dropdownCssClass)),
                            this.dropdown.data("select2", this),
                            this.results = s = this.container.find(t),
                            this.search = i = this.container.find("input.select2-input"),
                            this.resultsPage = 0,
                            this.context = null,
                            this.initContainer(),
                            te(this.results),
                            this.dropdown.on("mousemove-filtered touchstart touchmove touchend", t, this.bind(this.highlightUnderEvent)),
                            ie(80, this.results),
                            this.dropdown.on("scroll-debounced", t, this.bind(this.loadMoreIfNeeded)),
                            r(this.container).on("change", ".select2-input", function (o) {
                                o.stopPropagation()
                            }),
                            r(this.dropdown).on("change", ".select2-input", function (o) {
                                o.stopPropagation()
                            }),
                            r.fn.mousewheel && s.mousewheel(function (o, l, c, h) {
                                var d = s.scrollTop();
                                h > 0 && d - h <= 0 ? (s.scrollTop(0),
                                    v(o)) : h < 0 && s.get(0).scrollHeight - s.scrollTop() + h <= s.height() && (s.scrollTop(s.get(0).scrollHeight - s.height()),
                                        v(o))
                            }),
                            G(i),
                            i.on("keyup-change input paste", this.bind(this.updateResults)),
                            i.on("focus", function () { // 高亮生物群系对应下拉列表的点击事件, 生成下拉列表
                                i.addClass("select2-focused")
                            }),
                            i.on("blur", function () {
                                i.removeClass("select2-focused")
                            }),
                            this.dropdown.on("mouseup", t, this.bind(function (o) { // 高亮生物群系对应下拉列表出现后, 检测下拉列表内的点击事件, 选择对应选项
                                r(o.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(o),
                                    this.selectHighlighted(o))
                            })),
                            this.dropdown.on("click mouseup mousedown", function (o) { // 高亮生物群系对应下拉列表出现后, 检测是否在下拉列表内进行选择, 防止下拉列表被关闭
                                o.stopPropagation()
                            }),
                            r.isFunction(this.opts.initSelection) && (this.initSelection(),
                                this.monitorSource()),
                            e.maximumInputLength !== null && this.search.attr("maxlength", e.maximumInputLength);
                        var n = e.element.prop("disabled");
                        n === u && (n = !1),
                            this.enable(!n);
                        var a = e.element.prop("readonly");
                        a === u && (a = !1),
                            this.readonly(a),
                            L = L || ee(),
                            this.autofocus = e.element.prop("autofocus"),
                            e.element.prop("autofocus", !1),
                            this.autofocus && this.focus()
                    },
                    destroy: function () {
                        var e = this.opts.element.data("select2");
                        this.propertyObserver && (delete this.propertyObserver,
                            this.propertyObserver = null),
                            e !== u && (e.container.remove(),
                                e.dropdown.remove(),
                                e.opts.element.removeClass("select2-offscreen").removeData("select2").off(".select2").attr({
                                    tabindex: this.elementTabIndex
                                }).prop("autofocus", this.autofocus || !1).show())
                    },
                    optionToData: function (e) {
                        if (e.is("option"))
                            return {
                                id: e.prop("value"),
                                text: e.text(),
                                element: e.get(),
                                css: e.attr("class"),
                                disabled: e.prop("disabled"),
                                locked: S(e.attr("locked"), "locked")
                            };
                        if (e.is("optgroup"))
                            return {
                                text: e.attr("label"),
                                children: [],
                                element: e.get(),
                                css: e.attr("class")
                            }
                    },
                    prepareOpts: function (e) {
                        var s, i, t, n, a = this;
                        if (s = e.element,
                            s.get(0).tagName.toLowerCase() === "select" && (this.select = i = e.element),
                            i && r.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                                if (this in e)
                                    throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                            }),
                            e = r.extend({}, {
                                populateResults: function (o, l, c) {
                                    var h, d = this.opts.id;
                                    h = function (g, p, m) {
                                        var w, C, b, I, W, z, y, D, M, B;
                                        for (g = e.sortResults(g, p, c),
                                            w = 0,
                                            C = g.length; w < C; w = w + 1)
                                            b = g[w],
                                                W = b.disabled === !0,
                                                I = !W && d(b) !== u,
                                                z = b.children && b.children.length > 0,
                                                y = r("<li></li>"),
                                                y.addClass("select2-results-dept-" + m),
                                                y.addClass("select2-result"),
                                                y.addClass(I ? "select2-result-selectable" : "select2-result-unselectable"),
                                                W && y.addClass("select2-disabled"),
                                                z && y.addClass("select2-result-with-children"),
                                                y.addClass(a.opts.formatResultCssClass(b)),
                                                D = r(document.createElement("div")),
                                                D.addClass("select2-result-label"),
                                                B = e.formatResult(b, D, c, a.opts.escapeMarkup),
                                                B !== u && D.html(B),
                                                y.append(D),
                                                z && (M = r("<ul></ul>"),
                                                    M.addClass("select2-result-sub"),
                                                    h(b.children, M, m + 1),
                                                    y.append(M)),
                                                y.data("select2-data", b),
                                                p.append(y)
                                    }
                                        ,
                                        h(l, o, 0)
                                }
                            }, r.fn.select2.defaults, e),
                            typeof e.id != "function" && (t = e.id,
                                e.id = function (o) {
                                    return o[t]
                                }
                            ),
                            r.isArray(e.element.data("select2Tags"))) {
                            if ("tags" in e)
                                throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + e.element.attr("id");
                            e.tags = e.element.data("select2Tags")
                        }
                        if (i ? (e.query = this.bind(function (o) {
                            var l = {
                                results: [],
                                more: !1
                            }, c = o.term, h, d, g;
                            g = function (p, m) {
                                var w;
                                p.is("option") ? o.matcher(c, p.text(), p) && m.push(a.optionToData(p)) : p.is("optgroup") && (w = a.optionToData(p),
                                    p.children().each2(function (C, b) {
                                        g(b, w.children)
                                    }),
                                    w.children.length > 0 && m.push(w))
                            }
                                ,
                                h = s.children(),
                                this.getPlaceholder() !== u && h.length > 0 && (d = h[0],
                                    r(d).text() === "" && (h = h.not(d))),
                                h.each2(function (p, m) {
                                    g(m, l.results)
                                }),
                                o.callback(l)
                        }),
                            e.id = function (o) {
                                return o.id
                            }
                            ,
                            e.formatResultCssClass = function (o) {
                                return o.css
                            }
                        ) : "query" in e || ("ajax" in e ? (n = e.element.data("ajax-url"),
                            n && n.length > 0 && (e.ajax.url = n),
                            e.query = Q.call(e.element, e.ajax)) : "data" in e ? e.query = Y(e.data) : "tags" in e && (e.query = J(e.tags),
                                e.createSearchChoice === u && (e.createSearchChoice = function (o) {
                                    return {
                                        id: o,
                                        text: o
                                    }
                                }
                                ),
                                e.initSelection === u && (e.initSelection = function (o, l) {
                                    var c = [];
                                    r(H(o.val(), e.separator)).each(function () {
                                        var h = this
                                            , d = this
                                            , g = e.tags;
                                        r.isFunction(g) && (g = g()),
                                            r(g).each(function () {
                                                if (S(this.id, h))
                                                    return d = this.text,
                                                        !1
                                            }),
                                            c.push({
                                                id: h,
                                                text: d
                                            })
                                    }),
                                        l(c)
                                }
                                ))),
                            typeof e.query != "function")
                            throw "query function not defined for Select2 " + e.element.attr("id");
                        return e
                    },
                    monitorSource: function () {
                        var e = this.opts.element, s;
                        e.on("change.select2", this.bind(function (i) {
                            this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                        })),
                            s = this.bind(function () {
                                var t, i = e.prop("disabled");
                                i === u && (i = !1),
                                    this.enable(!i);
                                var t = e.prop("readonly");
                                t === u && (t = !1),
                                    this.readonly(t),
                                    F(this.container, this.opts.element, this.opts.adaptContainerCssClass),
                                    this.container.addClass(P(this.opts.containerCssClass)),
                                    F(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass),
                                    this.dropdown.addClass(P(this.opts.dropdownCssClass))
                            }),
                            e.on("propertychange.select2 DOMAttrModified.select2", s),
                            this.mutationCallback === u && (this.mutationCallback = function (i) {
                                i.forEach(s)
                            }
                            ),
                            typeof WebKitMutationObserver < "u" && (this.propertyObserver && (delete this.propertyObserver,
                                this.propertyObserver = null),
                                this.propertyObserver = new WebKitMutationObserver(this.mutationCallback),
                                this.propertyObserver.observe(e.get(0), {
                                    attributes: !0,
                                    subtree: !1
                                }))
                    },
                    triggerSelect: function (e) {
                        var s = r.Event("select2-selecting", {
                            val: this.id(e),
                            object: e
                        });
                        return this.opts.element.trigger(s),
                            !s.isDefaultPrevented()
                    },
                    triggerChange: function (e) {
                        e = e || {},
                            e = r.extend({}, e, {
                                type: "change",
                                val: this.val()
                            }),
                            this.opts.element.data("select2-change-triggered", !0),
                            this.opts.element.trigger(e),
                            this.opts.element.data("select2-change-triggered", !1),
                            this.opts.element.click(),
                            this.opts.blurOnChange && this.opts.element.blur()
                    },
                    isInterfaceEnabled: function () {
                        return this.enabledInterface === !0
                    },
                    enableInterface: function () {
                        var e = this._enabled && !this._readonly
                            , s = !e;
                        return e === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", s),
                            this.close(),
                            this.enabledInterface = e,
                            !0)
                    },
                    enable: function (e) {
                        return e === u && (e = !0),
                            this._enabled === e ? !1 : (this._enabled = e,
                                this.opts.element.prop("disabled", !e),
                                this.enableInterface(),
                                !0)
                    },
                    readonly: function (e) {
                        return e === u && (e = !1),
                            this._readonly === e ? !1 : (this._readonly = e,
                                this.opts.element.prop("readonly", e),
                                this.enableInterface(),
                                !0)
                    },
                    opened: function () {
                        return this.container.hasClass("select2-dropdown-open")
                    },
                    positionDropdown: function () {
                        var e = this.dropdown, s = this.container.offset(), i = this.container.outerHeight(!1), t = this.container.outerWidth(!1), n = e.outerHeight(!1), a = r(window).scrollLeft() + r(window).width(), o = r(window).scrollTop() + r(window).height(), l = s.top + i, c = s.left, h = l + n <= o, d = s.top - n >= this.body().scrollTop(), g = e.outerWidth(!1), p = c + g <= a, m = e.hasClass("select2-drop-above"), w, C, b, I;
                        this.opts.dropdownAutoWidth ? (I = r(".select2-results", e)[0],
                            e.addClass("select2-drop-auto-width"),
                            e.css("width", ""),
                            g = e.outerWidth(!1) + (I.scrollHeight === I.clientHeight ? 0 : L.width),
                            g > t ? t = g : g = t,
                            p = c + g <= a) : this.container.removeClass("select2-drop-auto-width"),
                            this.body().css("position") !== "static" && (w = this.body().offset(),
                                l -= w.top,
                                c -= w.left),
                            m ? (C = !0,
                                !d && h && (C = !1)) : (C = !1,
                                    !h && d && (C = !0)),
                            p || (c = s.left + t - g),
                            C ? (l = s.top - n,
                                this.container.addClass("select2-drop-above"),
                                e.addClass("select2-drop-above")) : (this.container.removeClass("select2-drop-above"),
                                    e.removeClass("select2-drop-above")),
                            b = r.extend({
                                top: l,
                                left: c,
                                width: t
                            }, P(this.opts.dropdownCss)),
                            e.css(b)
                    },
                    shouldOpen: function () {
                        var e;
                        return this.opened() || this._enabled === !1 || this._readonly === !0 ? !1 : (e = r.Event("select2-opening"),
                            this.opts.element.trigger(e),
                            !e.isDefaultPrevented())
                    },
                    clearDropdownAlignmentPreference: function () {
                        this.container.removeClass("select2-drop-above"),
                            this.dropdown.removeClass("select2-drop-above")
                    },
                    open: function () {
                        return this.shouldOpen() ? (this.opening(),
                            !0) : !1
                    },
                    opening: function () {
                        var e = this.containerId, s = "scroll." + e, i = "resize." + e, t = "orientationchange." + e, n;
                        this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),
                            this.clearDropdownAlignmentPreference(),
                            this.dropdown[0] !== this.body().children().last()[0] && this.dropdown.detach().appendTo(this.body()),
                            n = r("#select2-drop-mask"),
                            n.length == 0 && (n = r(document.createElement("div")),
                                n.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"),
                                n.hide(),
                                n.appendTo(this.body()),
                                n.on("mousedown touchstart", function (l) {
                                    var c = r("#select2-drop"), h;
                                    c.length > 0 && (h = c.data("select2"),
                                        h.opts.selectOnBlur && h.selectHighlighted({
                                            noFocus: !0
                                        }),
                                        h.close(),
                                        l.preventDefault(),
                                        l.stopPropagation())
                                })),
                            this.dropdown.prev()[0] !== n[0] && this.dropdown.before(n),
                            r("#select2-drop").removeAttr("id"),
                            this.dropdown.attr("id", "select2-drop"),
                            n.css(o()),
                            n.show(),
                            this.dropdown.show(),
                            this.positionDropdown(),
                            this.dropdown.addClass("select2-drop-active"),
                            this.ensureHighlightVisible();
                        var a = this;
                        this.container.parents().add(window).each(function () {
                            r(this).on(i + " " + s + " " + t, function (l) {
                                r("#select2-drop-mask").css(o()),
                                    a.positionDropdown()
                            })
                        });
                        function o() {
                            return {
                                width: Math.max(document.documentElement.scrollWidth, r(window).width()),
                                height: Math.max(document.documentElement.scrollHeight, r(window).height())
                            }
                        }
                    },
                    close: function () {
                        if (this.opened()) {
                            var e = this.containerId
                                , s = "scroll." + e
                                , i = "resize." + e
                                , t = "orientationchange." + e;
                            this.container.parents().add(window).each(function () {
                                r(this).off(s).off(i).off(t)
                            }),
                                this.clearDropdownAlignmentPreference(),
                                r("#select2-drop-mask").hide(),
                                this.dropdown.removeAttr("id"),
                                this.dropdown.hide(),
                                this.container.removeClass("select2-dropdown-open"),
                                this.results.empty(),
                                this.clearSearch(),
                                this.search.removeClass("select2-active"),
                                this.opts.element.trigger(r.Event("select2-close"))
                        }
                    },
                    clearSearch: function () { },
                    getMaximumSelectionSize: function () {
                        return P(this.opts.maximumSelectionSize)
                    },
                    ensureHighlightVisible: function () {
                        var e = this.results, s, i, t, n, a, o, l;
                        if (i = this.highlight(),
                            !(i < 0)) {
                            if (i == 0) {
                                e.scrollTop(0);
                                return
                            }
                            s = this.findHighlightableChoices().find(".select2-result-label"),
                                t = r(s[i]),
                                n = t.offset().top + t.outerHeight(!0),
                                i === s.length - 1 && (l = e.find("li.select2-more-results"),
                                    l.length > 0 && (n = l.offset().top + l.outerHeight(!0))),
                                a = e.offset().top + e.outerHeight(!0),
                                n > a && e.scrollTop(e.scrollTop() + (n - a)),
                                o = t.offset().top - e.offset().top,
                                o < 0 && t.css("display") != "none" && e.scrollTop(e.scrollTop() + o)
                        }
                    },
                    findHighlightableChoices: function () {
                        return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")
                    },
                    moveHighlight: function (e) {
                        for (var s = this.findHighlightableChoices(), i = this.highlight(); i > -1 && i < s.length;) {
                            i += e;
                            var t = r(s[i]);
                            if (t.hasClass("select2-result-selectable") && !t.hasClass("select2-disabled") && !t.hasClass("select2-selected")) {
                                this.highlight(i);
                                break
                            }
                        }
                    },
                    highlight: function (e) {
                        var s = this.findHighlightableChoices(), i, t;
                        if (arguments.length === 0)
                            return E(s.filter(".select2-highlighted")[0], s.get());
                        e >= s.length && (e = s.length - 1),
                            e < 0 && (e = 0),
                            this.results.find(".select2-highlighted").removeClass("select2-highlighted"),
                            i = r(s[e]),
                            i.addClass("select2-highlighted"),
                            this.ensureHighlightVisible(),
                            t = i.data("select2-data"),
                            t && this.opts.element.trigger({
                                type: "select2-highlight",
                                val: this.id(t),
                                choice: t
                            })
                    },
                    countSelectableResults: function () {
                        return this.findHighlightableChoices().length
                    },
                    highlightUnderEvent: function (e) {
                        var s = r(e.target).closest(".select2-result-selectable");
                        if (s.length > 0 && !s.is(".select2-highlighted")) {
                            var i = this.findHighlightableChoices();
                            this.highlight(i.index(s))
                        } else
                            s.length == 0 && this.results.find(".select2-highlighted").removeClass("select2-highlighted")
                    },
                    loadMoreIfNeeded: function () {
                        var e = this.results, s = e.find("li.select2-more-results"), i, t = this.resultsPage + 1, n = this, a = this.search.val(), o = this.context;
                        s.length !== 0 && (i = s.offset().top - e.offset().top - e.height(),
                            i <= this.opts.loadMorePadding && (s.addClass("select2-active"),
                                this.opts.query({
                                    element: this.opts.element,
                                    term: a,
                                    page: t,
                                    context: o,
                                    matcher: this.opts.matcher,
                                    callback: this.bind(function (l) {
                                        n.opened() && (n.opts.populateResults.call(this, e, l.results, {
                                            term: a,
                                            page: t,
                                            context: o
                                        }),
                                            n.postprocessResults(l, !1, !1),
                                            l.more === !0 ? (s.detach().appendTo(e).text(n.opts.formatLoadMore(t + 1)),
                                                window.setTimeout(function () {
                                                    n.loadMoreIfNeeded()
                                                }, 10)) : s.remove(),
                                            n.positionDropdown(),
                                            n.resultsPage = t,
                                            n.context = l.context)
                                    })
                                })))
                    },
                    tokenize: function () { },
                    updateResults: function (e) {
                        var s = this.search, i = this.results, t = this.opts, n, a = this, o, l = s.val(), c = r.data(this.container, "select2-last-term");
                        if (e !== !0 && c && S(l, c) || (r.data(this.container, "select2-last-term", l),
                            e !== !0 && (this.showSearchInput === !1 || !this.opened())))
                            return;
                        function h() {
                            i.scrollTop(0),
                                s.removeClass("select2-active"),
                                a.positionDropdown()
                        }
                        function d(p) {
                            i.html(p),
                                h()
                        }
                        var g = this.getMaximumSelectionSize();
                        if (g >= 1 && (n = this.data(),
                            r.isArray(n) && n.length >= g && O(t.formatSelectionTooBig))) {
                            d("<li class='select2-selection-limit'>" + t.formatSelectionTooBig(g) + "</li>");
                            return
                        }
                        if (s.val().length < t.minimumInputLength) {
                            O(t.formatInputTooShort) ? d("<li class='select2-no-results'>" + t.formatInputTooShort(s.val(), t.minimumInputLength) + "</li>") : d(""),
                                e && this.showSearch(!0);
                            return
                        }
                        if (t.maximumInputLength && s.val().length > t.maximumInputLength) {
                            O(t.formatInputTooLong) ? d("<li class='select2-no-results'>" + t.formatInputTooLong(s.val(), t.maximumInputLength) + "</li>") : d("");
                            return
                        }
                        t.formatSearching && this.findHighlightableChoices().length === 0 && d("<li class='select2-searching'>" + t.formatSearching() + "</li>"),
                            s.addClass("select2-active"),
                            o = this.tokenize(),
                            o != u && o != null && s.val(o),
                            this.resultsPage = 1,
                            t.query({
                                element: t.element,
                                term: s.val(),
                                page: this.resultsPage,
                                context: null,
                                matcher: t.matcher,
                                callback: this.bind(function (p) {
                                    var m;
                                    if (!this.opened()) {
                                        this.search.removeClass("select2-active");
                                        return
                                    }
                                    if (this.context = p.context === u ? null : p.context,
                                        this.opts.createSearchChoice && s.val() !== "" && (m = this.opts.createSearchChoice.call(null, s.val(), p.results),
                                            m !== u && m !== null && a.id(m) !== u && a.id(m) !== null && r(p.results).filter(function () {
                                                return S(a.id(this), a.id(m))
                                            }).length === 0 && p.results.unshift(m)),
                                        p.results.length === 0 && O(t.formatNoMatches)) {
                                        d("<li class='select2-no-results'>" + t.formatNoMatches(s.val()) + "</li>");
                                        return
                                    }
                                    i.empty(),
                                        a.opts.populateResults.call(this, i, p.results, {
                                            term: s.val(),
                                            page: this.resultsPage,
                                            context: null
                                        }),
                                        p.more === !0 && O(t.formatLoadMore) && (i.append("<li class='select2-more-results'>" + a.opts.escapeMarkup(t.formatLoadMore(this.resultsPage)) + "</li>"),
                                            window.setTimeout(function () {
                                                a.loadMoreIfNeeded()
                                            }, 10)),
                                        this.postprocessResults(p, e),
                                        h(),
                                        this.opts.element.trigger({
                                            type: "select2-loaded",
                                            data: p
                                        })
                                })
                            })
                    },
                    cancel: function () {
                        this.close()
                    },
                    blur: function () {
                        this.opts.selectOnBlur && this.selectHighlighted({
                            noFocus: !0
                        }),
                            this.close(),
                            this.container.removeClass("select2-container-active"),
                            this.search[0] === document.activeElement && this.search.blur(),
                            this.clearSearch(),
                            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
                    },
                    focusSearch: function () {
                        ne(this.search)
                    },
                    selectHighlighted: function (e) {
                        var s = this.highlight()
                            , i = this.results.find(".select2-highlighted")
                            , t = i.closest(".select2-result").data("select2-data");
                        t && (this.highlight(s),
                            this.onSelect(t, e))
                    },
                    getPlaceholder: function () {
                        return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder
                    },
                    initContainerWidth: function () {
                        function e() {
                            var i, t, n, a, o;
                            if (this.opts.width === "off")
                                return null;
                            if (this.opts.width === "element")
                                return this.opts.element.outerWidth(!1) === 0 ? "auto" : this.opts.element.outerWidth(!1) + "px";
                            if (this.opts.width === "copy" || this.opts.width === "resolve") {
                                if (i = this.opts.element.attr("style"),
                                    i !== u) {
                                    for (t = i.split(";"),
                                        a = 0,
                                        o = t.length; a < o; a = a + 1)
                                        if (n = t[a].replace(/\s/g, "").match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),
                                            n !== null && n.length >= 1)
                                            return n[1]
                                }
                                return i = this.opts.element.css("width"),
                                    i && i.length > 0 ? i : this.opts.width === "resolve" ? this.opts.element.outerWidth(!1) === 0 ? "auto" : this.opts.element.outerWidth(!1) + "px" : null
                            } else
                                return r.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                        }
                        var s = e.call(this);
                        s !== null && this.container.css("width", s)
                    }
                }),
                    T = N(x, {
                        createContainer: function () {
                            var e = r(document.createElement("div")).attr({
                                class: "select2-container"
                            }).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>", "   <span>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>", "   <div><b></b></div>", "</a>", "<input class='select2-focusser select2-offscreen' type='text'/>", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' aria-label='" + (this.opts.ariaLabel ?? "") + "' class='select2-input'/>", "   </div>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                            return e
                        },
                        enableInterface: function () {
                            this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
                        },
                        opening: function () {
                            var e, s;
                            this.parent.opening.apply(this, arguments),
                                this.showSearchInput !== !1 && this.search.val(this.focusser.val()),
                                this.search.focus(),
                                e = this.search.get(0),
                                e.createTextRange && (s = e.createTextRange(),
                                    s.collapse(!1),
                                    s.select()),
                                this.focusser.prop("disabled", !0).val(""),
                                this.updateResults(!0),
                                this.opts.element.trigger(r.Event("select2-open"))
                        },
                        close: function () {
                            this.opened() && (this.parent.close.apply(this, arguments),
                                this.focusser.removeAttr("disabled"),
                                this.focusser.focus())
                        },
                        focus: function () {
                            this.opened() ? this.close() : (this.focusser.removeAttr("disabled"),
                                this.focusser.focus())
                        },
                        isFocused: function () {
                            return this.container.hasClass("select2-container-active")
                        },
                        cancel: function () {
                            this.parent.cancel.apply(this, arguments),
                                this.focusser.removeAttr("disabled"),
                                this.focusser.focus()
                        },
                        initContainer: function () {
                            var e, s = this.container, i = this.dropdown;
                            this.showSearch(!1),
                                this.selection = e = s.find(".select2-choice"),
                                this.focusser = s.find(".select2-focusser"),
                                this.focusser.attr("id", "s2id_autogen" + A()),
                                r("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.focusser.attr("id")),
                                this.focusser.attr("tabindex", this.elementTabIndex),
                                this.search.on("keydown", this.bind(function (t) {
                                    if (this.isInterfaceEnabled()) {
                                        if (t.which === f.PAGE_UP || t.which === f.PAGE_DOWN) {
                                            v(t);
                                            return
                                        }
                                        switch (t.which) {
                                            case f.UP:
                                            case f.DOWN:
                                                this.moveHighlight(t.which === f.UP ? -1 : 1),
                                                    v(t);
                                                return;
                                            case f.ENTER:
                                                this.selectHighlighted(),
                                                    v(t);
                                                return;
                                            case f.TAB:
                                                this.selectHighlighted({
                                                    noFocus: !0
                                                });
                                                return;
                                            case f.ESC:
                                                this.cancel(t),
                                                    v(t);
                                                return
                                        }
                                    }
                                })),
                                this.search.on("blur", this.bind(function (t) {
                                    document.activeElement === this.body().get(0) && window.setTimeout(this.bind(function () {
                                        this.search.focus()
                                    }), 0)
                                })),
                                this.focusser.on("keydown", this.bind(function (t) {
                                    if (this.isInterfaceEnabled() && !(t.which === f.TAB || f.isControl(t) || f.isFunctionKey(t) || t.which === f.ESC)) {
                                        if (this.opts.openOnEnter === !1 && t.which === f.ENTER) {
                                            v(t);
                                            return
                                        }
                                        if (t.which == f.DOWN || t.which == f.UP || t.which == f.ENTER && this.opts.openOnEnter) {
                                            this.open(),
                                                v(t);
                                            return
                                        }
                                        if (t.which == f.DELETE || t.which == f.BACKSPACE) {
                                            this.opts.allowClear && this.clear(),
                                                v(t);
                                            return
                                        }
                                    }
                                })),
                                G(this.focusser),
                                this.focusser.on("keyup-change input", this.bind(function (t) {
                                    t.stopPropagation(),
                                        !this.opened() && this.open()
                                })),
                                e.on("mousedown", "abbr", this.bind(function (t) {
                                    this.isInterfaceEnabled() && (this.clear(),
                                        oe(t),
                                        this.close(),
                                        this.selection.focus())
                                })),
                                e.on("mousedown", this.bind(function (t) {
                                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(r.Event("select2-focus")),
                                        this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(),
                                        v(t)
                                })),
                                i.on("mousedown", this.bind(function () {
                                    this.search.focus()
                                })),
                                e.on("focus", this.bind(function (t) {
                                    v(t)
                                })),
                                this.focusser.on("focus", this.bind(function () {
                                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(r.Event("select2-focus")),
                                        this.container.addClass("select2-container-active")
                                })).on("blur", this.bind(function () {
                                    this.opened() || (this.container.removeClass("select2-container-active"),
                                        this.opts.element.trigger(r.Event("select2-blur")))
                                })),
                                this.search.on("focus", this.bind(function () {
                                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(r.Event("select2-focus")),
                                        this.container.addClass("select2-container-active")
                                })),
                                this.initContainerWidth(),
                                this.opts.element.addClass("select2-offscreen"),
                                this.setPlaceholder()
                        },
                        clear: function (e) {
                            var s = this.selection.data("select2-data");
                            s && (this.opts.element.val(""),
                                this.selection.find("span").empty(),
                                this.selection.removeData("select2-data"),
                                this.setPlaceholder(),
                                e !== !1 && (this.opts.element.trigger({
                                    type: "select2-removed",
                                    val: this.id(s),
                                    choice: s
                                }),
                                    this.triggerChange({
                                        removed: s
                                    })))
                        },
                        initSelection: function () {
                            if (this.opts.element.val() === "" && this.opts.element.text() === "")
                                this.updateSelection([]),
                                    this.close(),
                                    this.setPlaceholder();
                            else {
                                var e = this;
                                this.opts.initSelection.call(null, this.opts.element, function (s) {
                                    s !== u && s !== null && (e.updateSelection(s),
                                        e.close(),
                                        e.setPlaceholder())
                                })
                            }
                        },
                        prepareOpts: function () {
                            var e = this.parent.prepareOpts.apply(this, arguments)
                                , s = this;
                            return e.element.get(0).tagName.toLowerCase() === "select" ? e.initSelection = function (i, t) {
                                var n = i.find(":selected");
                                t(s.optionToData(n))
                            }
                                : "data" in e && (e.initSelection = e.initSelection || function (i, t) {
                                    var n = i.val()
                                        , a = null;
                                    e.query({
                                        matcher: function (o, l, c) {
                                            var h = S(n, e.id(c));
                                            return h && (a = c),
                                                h
                                        },
                                        callback: r.isFunction(t) ? function () {
                                            t(a)
                                        }
                                            : r.noop
                                    })
                                }
                                ),
                                e
                        },
                        getPlaceholder: function () {
                            return this.select && this.select.find("option").first().text() !== "" ? u : this.parent.getPlaceholder.apply(this, arguments)
                        },
                        setPlaceholder: function () {
                            var e = this.getPlaceholder();
                            if (this.opts.element.val() === "" && e !== u) {
                                if (this.select && this.select.find("option:first").text() !== "")
                                    return;
                                this.selection.find("span").html(this.opts.escapeMarkup(e)),
                                    this.selection.addClass("select2-default"),
                                    this.container.removeClass("select2-allowclear")
                            }
                        },
                        postprocessResults: function (e, s, i) {
                            var t = 0
                                , n = this;
                            if (this.findHighlightableChoices().each2(function (o, l) {
                                if (S(n.id(l.data("select2-data")), n.opts.element.val()))
                                    return t = o,
                                        !1
                            }),
                                i !== !1 && this.highlight(t),
                                s === !0 && this.showSearchInput === !1) {
                                var a = this.opts.minimumResultsForSearch;
                                a >= 0 && this.showSearch(Z(e.results) >= a)
                            }
                        },
                        showSearch: function (e) {
                            this.showSearchInput = e,
                                this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !e),
                                this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !e),
                                r(this.dropdown, this.container).toggleClass("select2-with-searchbox", e)
                        },
                        onSelect: function (e, s) {
                            if (this.triggerSelect(e)) {
                                var i = this.opts.element.val()
                                    , t = this.data();
                                this.opts.element.val(this.id(e)),
                                    this.updateSelection(e),
                                    this.opts.element.trigger({
                                        type: "select2-selected",
                                        val: this.id(e),
                                        choice: e
                                    }),
                                    this.close(),
                                    (!s || !s.noFocus) && this.selection.focus(),
                                    S(i, this.id(e)) || this.triggerChange({
                                        added: e,
                                        removed: t
                                    })
                            }
                        },
                        updateSelection: function (e) {
                            var s = this.selection.find("span"), i;
                            this.selection.data("select2-data", e),
                                s.empty(),
                                i = this.opts.formatSelection(e, s),
                                i !== u && s.append(this.opts.escapeMarkup(i)),
                                this.selection.removeClass("select2-default"),
                                this.opts.allowClear && this.getPlaceholder() !== u && this.container.addClass("select2-allowclear")
                        },
                        val: function () {
                            var e, s = !1, i = null, t = this, n = this.data();
                            if (arguments.length === 0)
                                return this.opts.element.val();
                            if (e = arguments[0],
                                arguments.length > 1 && (s = arguments[1]),
                                this.select)
                                this.select.val(e).find(":selected").each2(function (a, o) {
                                    return i = t.optionToData(o),
                                        !1
                                }),
                                    this.updateSelection(i),
                                    this.setPlaceholder(),
                                    s && this.triggerChange({
                                        added: i,
                                        removed: n
                                    });
                            else {
                                if (this.opts.initSelection === u)
                                    throw new Error("cannot call val() if initSelection() is not defined");
                                if (!e && e !== 0) {
                                    this.clear(s);
                                    return
                                }
                                this.opts.element.val(e),
                                    this.opts.initSelection(this.opts.element, function (a) {
                                        t.opts.element.val(a ? t.id(a) : ""),
                                            t.updateSelection(a),
                                            t.setPlaceholder(),
                                            s && t.triggerChange({
                                                added: a,
                                                removed: n
                                            })
                                    })
                            }
                        },
                        clearSearch: function () {
                            this.search.val(""),
                                this.focusser.val("")
                        },
                        data: function (e, s) {
                            var i;
                            if (arguments.length === 0)
                                return i = this.selection.data("select2-data"),
                                    i == u && (i = null),
                                    i;
                            !e || e === "" ? this.clear(s) : (i = this.data(),
                                this.opts.element.val(e ? this.id(e) : ""),
                                this.updateSelection(e),
                                s && this.triggerChange({
                                    added: e,
                                    removed: i
                                }))
                        }
                    }),
                    R = N(x, {
                        createContainer: function () {
                            var e = r(document.createElement("div")).attr({
                                class: "select2-container select2-container-multi"
                            }).html(["    <ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' aria-label='" + (this.opts.ariaLabel ?? "") + "' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                            return e
                        },
                        prepareOpts: function () {
                            var e = this.parent.prepareOpts.apply(this, arguments)
                                , s = this;
                            return e.element.get(0).tagName.toLowerCase() === "select" ? e.initSelection = function (i, t) {
                                var n = [];
                                i.find(":selected").each2(function (a, o) {
                                    n.push(s.optionToData(o))
                                }),
                                    t(n)
                            }
                                : "data" in e && (e.initSelection = e.initSelection || function (i, t) {
                                    var n = H(i.val(), e.separator)
                                        , a = [];
                                    e.query({
                                        matcher: function (o, l, c) {
                                            var h = r.grep(n, function (d) {
                                                return S(d, e.id(c))
                                            }).length;
                                            return h && a.push(c),
                                                h
                                        },
                                        callback: r.isFunction(t) ? function () {
                                            for (var o = [], l = 0; l < n.length; l++)
                                                for (var c = n[l], h = 0; h < a.length; h++) {
                                                    var d = a[h];
                                                    if (S(c, e.id(d))) {
                                                        o.push(d),
                                                            a.splice(h, 1);
                                                        break
                                                    }
                                                }
                                            t(o)
                                        }
                                            : r.noop
                                    })
                                }
                                ),
                                e
                        },
                        selectChoice: function (e) {
                            var s = this.container.find(".select2-search-choice-focus");
                            s.length && e && e[0] == s[0] || (s.length && this.opts.element.trigger("choice-deselected", s),
                                s.removeClass("select2-search-choice-focus"),
                                e && e.length && (this.close(),
                                    e.addClass("select2-search-choice-focus"),
                                    this.opts.element.trigger("choice-selected", e)))
                        },
                        initContainer: function () {
                            var e = ".select2-choices", s;
                            this.searchContainer = this.container.find(".select2-search-field"),
                                this.selection = s = this.container.find(e);
                            var i = this;
                            this.selection.on("mousedown", ".select2-search-choice", function (t) {
                                i.search[0].focus(),
                                    i.selectChoice(r(this))
                            }),
                                this.search.attr("id", "s2id_autogen" + A()),
                                r("label[for='" + this.opts.element.attr("id") + "']").attr("for", this.search.attr("id")),
                                this.search.on("input paste", this.bind(function () {
                                    this.isInterfaceEnabled() && (this.opened() || this.open())
                                })),
                                this.search.attr("tabindex", this.elementTabIndex),
                                this.keydowns = 0,
                                this.search.on("keydown", this.bind(function (t) {
                                    if (this.isInterfaceEnabled()) {
                                        ++this.keydowns;
                                        var n = s.find(".select2-search-choice-focus")
                                            , a = n.prev(".select2-search-choice:not(.select2-locked)")
                                            , o = n.next(".select2-search-choice:not(.select2-locked)")
                                            , l = re(this.search);
                                        if (n.length && (t.which == f.LEFT || t.which == f.RIGHT || t.which == f.BACKSPACE || t.which == f.DELETE || t.which == f.ENTER)) {
                                            var c = n;
                                            t.which == f.LEFT && a.length ? c = a : t.which == f.RIGHT ? c = o.length ? o : null : t.which === f.BACKSPACE ? (this.unselect(n.first()),
                                                this.search.width(10),
                                                c = a.length ? a : o) : t.which == f.DELETE ? (this.unselect(n.first()),
                                                    this.search.width(10),
                                                    c = o.length ? o : null) : t.which == f.ENTER && (c = null),
                                                this.selectChoice(c),
                                                v(t),
                                                (!c || !c.length) && this.open();
                                            return
                                        } else if ((t.which === f.BACKSPACE && this.keydowns == 1 || t.which == f.LEFT) && l.offset == 0 && !l.length) {
                                            this.selectChoice(s.find(".select2-search-choice:not(.select2-locked)").last()),
                                                v(t);
                                            return
                                        } else
                                            this.selectChoice(null);
                                        if (this.opened())
                                            switch (t.which) {
                                                case f.UP:
                                                case f.DOWN:
                                                    this.moveHighlight(t.which === f.UP ? -1 : 1),
                                                        v(t);
                                                    return;
                                                case f.ENTER:
                                                    this.selectHighlighted(),
                                                        v(t);
                                                    return;
                                                case f.TAB:
                                                    this.selectHighlighted({
                                                        noFocus: !0
                                                    });
                                                    return;
                                                case f.ESC:
                                                    this.cancel(t),
                                                        v(t);
                                                    return
                                            }
                                        if (!(t.which === f.TAB || f.isControl(t) || f.isFunctionKey(t) || t.which === f.BACKSPACE || t.which === f.ESC)) {
                                            if (t.which === f.ENTER) {
                                                if (this.opts.openOnEnter === !1)
                                                    return;
                                                if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)
                                                    return
                                            }
                                            this.open(),
                                                (t.which === f.PAGE_UP || t.which === f.PAGE_DOWN) && v(t),
                                                t.which === f.ENTER && v(t)
                                        }
                                    }
                                })),
                                this.search.on("keyup", this.bind(function (t) {
                                    this.keydowns = 0,
                                        this.resizeSearch()
                                })),
                                this.search.on("blur", this.bind(function (t) {
                                    this.container.removeClass("select2-container-active"),
                                        this.search.removeClass("select2-focused"),
                                        this.selectChoice(null),
                                        this.opened() || this.clearSearch(),
                                        t.stopImmediatePropagation(),
                                        this.opts.element.trigger(r.Event("select2-blur"))
                                })),
                                this.container.on("mousedown", e, this.bind(function (t) {
                                    this.isInterfaceEnabled() && (r(t.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null),
                                        this.clearPlaceholder(),
                                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(r.Event("select2-focus")),
                                        this.open(),
                                        this.focusSearch(),
                                        t.preventDefault()))
                                })),
                                this.container.on("focus", e, this.bind(function () {
                                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(r.Event("select2-focus")),
                                        this.container.addClass("select2-container-active"),
                                        this.dropdown.addClass("select2-drop-active"),
                                        this.clearPlaceholder())
                                })),
                                this.initContainerWidth(),
                                this.opts.element.addClass("select2-offscreen"),
                                this.clearSearch()
                        },
                        enableInterface: function () {
                            this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
                        },
                        initSelection: function () {
                            if (this.opts.element.val() === "" && this.opts.element.text() === "" && (this.updateSelection([]),
                                this.close(),
                                this.clearSearch()),
                                this.select || this.opts.element.val() !== "") {
                                var e = this;
                                this.opts.initSelection.call(null, this.opts.element, function (s) {
                                    s !== u && s !== null && (e.updateSelection(s),
                                        e.close(),
                                        e.clearSearch())
                                })
                            }
                        },
                        clearSearch: function () { },
                        clearPlaceholder: function () {
                            this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
                        },
                        opening: function () {
                            this.clearPlaceholder(),
                                this.resizeSearch(),
                                this.parent.opening.apply(this, arguments),
                                this.focusSearch(),
                                this.updateResults(!0),
                                this.search.focus(),
                                this.opts.element.trigger(r.Event("select2-open"))
                        },
                        close: function () {
                            this.opened() && this.parent.close.apply(this, arguments)
                        },
                        focus: function () {
                            this.close(),
                                this.search.focus()
                        },
                        isFocused: function () {
                            return this.search.hasClass("select2-focused")
                        },
                        updateSelection: function (e) {
                            var s = []
                                , i = []
                                , t = this;
                            r(e).each(function () {
                                E(t.id(this), s) < 0 && (s.push(t.id(this)),
                                    i.push(this))
                            }),
                                e = i,
                                this.selection.find(".select2-search-choice").remove(),
                                r(e).each(function () {
                                    t.addSelectedChoice(this)
                                }),
                                t.postprocessResults()
                        },
                        tokenize: function () {
                            var e = this.search.val();
                            e = this.opts.tokenizer(e, this.data(), this.bind(this.onSelect), this.opts),
                                e != null && e != u && (this.search.val(e),
                                    e.length > 0 && this.open())
                        },
                        onSelect: function (e, s) {
                            this.triggerSelect(e) && (this.addSelectedChoice(e),
                                this.opts.element.trigger({
                                    type: "selected",
                                    val: this.id(e),
                                    choice: e
                                }),
                                (this.select || !this.opts.closeOnSelect) && this.postprocessResults(),
                                this.opts.closeOnSelect ? (this.close(),
                                    this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10),
                                        this.resizeSearch(),
                                        this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() && this.updateResults(!0),
                                        this.positionDropdown()) : (this.close(),
                                            this.search.width(10)),
                                this.triggerChange({
                                    added: e
                                }),
                                (!s || !s.noFocus) && this.focusSearch())
                        },
                        cancel: function () {
                            this.close(),
                                this.focusSearch()
                        },
                        addSelectedChoice: function (e) {
                            var s = !e.locked, i = r("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"), t = r("<li class='select2-search-choice select2-locked'><div></div></li>"), n = s ? i : t, a = this.id(e), o = this.getVal(), l;
                            l = this.opts.formatSelection(e, n.find("div")),
                                l != u && n.find("div").replaceWith("<div title='" + this.opts.escapeMarkup(l) + "'>" + this.opts.escapeMarkup(l) + "</div>"),
                                s && n.find(".select2-search-choice-close").on("mousedown", v).on("click dblclick", this.bind(function (c) {
                                    this.isInterfaceEnabled() && (r(c.target).closest(".select2-search-choice").fadeOut("fast", this.bind(function () {
                                        this.unselect(r(c.target)),
                                            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),
                                            this.close(),
                                            this.focusSearch()
                                    })).dequeue(),
                                        v(c))
                                })).on("focus", this.bind(function () {
                                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"),
                                        this.dropdown.addClass("select2-drop-active"))
                                })),
                                n.data("select2-data", e),
                                n.insertBefore(this.searchContainer),
                                o.push(a),
                                this.setVal(o)
                        },
                        unselect: function (e) {
                            var s = this.getVal(), i, t;
                            if (e = e.closest(".select2-search-choice"),
                                e.length === 0)
                                throw "Invalid argument: " + e + ". Must be .select2-search-choice";
                            i = e.data("select2-data"),
                                i && (t = E(this.id(i), s),
                                    t >= 0 && (s.splice(t, 1),
                                        this.setVal(s),
                                        this.select && this.postprocessResults()),
                                    e.remove(),
                                    this.opts.element.trigger({
                                        type: "removed",
                                        val: this.id(i),
                                        choice: i
                                    }),
                                    this.triggerChange({
                                        removed: i
                                    }))
                        },
                        postprocessResults: function (e, s, i) {
                            var t = this.getVal()
                                , n = this.results.find(".select2-result")
                                , a = this.results.find(".select2-result-with-children")
                                , o = this;
                            n.each2(function (l, c) {
                                var h = o.id(c.data("select2-data"));
                                E(h, t) >= 0 && (c.addClass("select2-selected"),
                                    c.find(".select2-result-selectable").addClass("select2-selected"))
                            }),
                                a.each2(function (l, c) {
                                    !c.is(".select2-result-selectable") && c.find(".select2-result-selectable:not(.select2-selected)").length === 0 && c.addClass("select2-selected")
                                }),
                                this.highlight() == -1 && i !== !1 && o.highlight(0),
                                !this.opts.createSearchChoice && !n.filter(".select2-result:not(.select2-selected)").length > 0 && this.results.append("<li class='select2-no-results'>" + o.opts.formatNoMatches(o.search.val()) + "</li>")
                        },
                        getMaxSearchWidth: function () {
                            return this.selection.width() - V(this.search)
                        },
                        resizeSearch: function () {
                            var e, s, i, t, n, a = V(this.search);
                            e = ae(this.search) + 10,
                                s = this.search.offset().left,
                                i = this.selection.width(),
                                t = this.selection.offset().left,
                                n = i - (s - t) - a,
                                n < e && (n = i - a),
                                n < 40 && (n = i - a),
                                n <= 0 && (n = e),
                                this.search.width(Math.floor(n))
                        },
                        getVal: function () {
                            var e;
                            return this.select ? (e = this.select.val(),
                                e === null ? [] : e) : (e = this.opts.element.val(),
                                    H(e, this.opts.separator))
                        },
                        setVal: function (e) {
                            var s;
                            this.select ? this.select.val(e) : (s = [],
                                r(e).each(function () {
                                    E(this, s) < 0 && s.push(this)
                                }),
                                this.opts.element.val(s.length === 0 ? "" : s.join(this.opts.separator)))
                        },
                        buildChangeDetails: function (t, i) {
                            for (var i = i.slice(0), t = t.slice(0), n = 0; n < i.length; n++)
                                for (var a = 0; a < t.length; a++)
                                    S(this.opts.id(i[n]), this.opts.id(t[a])) && (i.splice(n, 1),
                                        n--,
                                        t.splice(a, 1),
                                        a--);
                            return {
                                added: i,
                                removed: t
                            }
                        },
                        val: function (e, s) {
                            var i, t = this;
                            if (arguments.length === 0)
                                return this.getVal();
                            if (i = this.data(),
                                i.length || (i = []),
                                !e && e !== 0) {
                                this.opts.element.val(""),
                                    this.updateSelection([]),
                                    this.clearSearch(),
                                    s && this.triggerChange({
                                        added: this.data(),
                                        removed: i
                                    });
                                return
                            }
                            if (this.setVal(e),
                                this.select)
                                this.opts.initSelection(this.select, this.bind(this.updateSelection)),
                                    s && this.triggerChange(this.buildChangeDetails(i, this.data()));
                            else {
                                if (this.opts.initSelection === u)
                                    throw new Error("val() cannot be called if initSelection() is not defined");
                                this.opts.initSelection(this.opts.element, function (n) {
                                    var a = r(n).map(t.id);
                                    t.setVal(a),
                                        t.updateSelection(n),
                                        t.clearSearch(),
                                        s && t.triggerChange(this.buildChangeDetails(i, this.data()))
                                })
                            }
                            this.clearSearch()
                        },
                        onSortStart: function () {
                            if (this.select)
                                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                            this.search.width(0),
                                this.searchContainer.hide()
                        },
                        onSortEnd: function () {
                            var e = []
                                , s = this;
                            this.searchContainer.show(),
                                this.searchContainer.appendTo(this.searchContainer.parent()),
                                this.resizeSearch(),
                                this.selection.find(".select2-search-choice").each(function () {
                                    e.push(s.opts.id(r(this).data("select2-data")))
                                }),
                                this.setVal(e),
                                this.triggerChange()
                        },
                        data: function (e, s) {
                            var i = this, t, n;
                            if (arguments.length === 0)
                                return this.selection.find(".select2-search-choice").map(function () {
                                    return r(this).data("select2-data")
                                }).get();
                            n = this.data(),
                                e || (e = []),
                                t = r.map(e, function (a) {
                                    return i.opts.id(a)
                                }),
                                this.setVal(t),
                                this.updateSelection(e),
                                this.clearSearch(),
                                s && this.triggerChange(this.buildChangeDetails(n, this.data()))
                        }
                    }),
                    r.fn.select2 = function () {
                        var e = Array.prototype.slice.call(arguments, 0), s, i, t, n, a = ["val", "updateResults", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "onSortStart", "onSortEnd", "enable", "readonly", "positionDropdown", "data"], o = ["val", "opened", "isFocused", "container", "data"];
                        return this.each(function () {
                            if (e.length === 0 || typeof e[0] == "object")
                                s = e.length === 0 ? {} : r.extend({}, e[0]),
                                    s.element = r(this),
                                    s.element.get(0).tagName.toLowerCase() === "select" ? n = s.element.prop("multiple") : (n = s.multiple || !1,
                                        "tags" in s && (s.multiple = n = !0)),
                                    i = n ? new R : new T,
                                    i.init(s);
                            else if (typeof e[0] == "string") {
                                if (E(e[0], a) < 0)
                                    throw "Unknown method: " + e[0];
                                if (t = u,
                                    i = r(this).data("select2"),
                                    i === u)
                                    return;
                                if (e[0] === "container" ? t = i.container : t = i[e[0]].apply(i, e.slice(1)),
                                    E(e[0], o) >= 0)
                                    return !1
                            } else
                                throw "Invalid arguments to select2 plugin: " + e
                        }),
                            t === u ? this : t
                    }
                    ,
                    r.fn.select2.defaults = {
                        width: "copy",
                        loadMorePadding: 0,
                        closeOnSelect: !0,
                        openOnEnter: !0,
                        containerCss: {},
                        dropdownCss: {},
                        containerCssClass: "",
                        dropdownCssClass: "",
                        formatResult: function (e, s, i, t) {
                            var n = [];
                            return X(e.text, i.term, n, t),
                                n.join("")
                        },
                        formatSelection: function (e, s) {
                            return e ? e.text : u
                        },
                        sortResults: function (e, s, i) {
                            return e
                        },
                        formatResultCssClass: function (e) {
                            return u
                        },
                        formatNoMatches: function () {
                            return "No matches found"
                        },
                        formatInputTooShort: function (e, s) {
                            var i = s - e.length;
                            return "Please enter " + i + " more character" + (i == 1 ? "" : "s")
                        },
                        formatInputTooLong: function (e, s) {
                            var i = e.length - s;
                            return "Please delete " + i + " character" + (i == 1 ? "" : "s")
                        },
                        formatSelectionTooBig: function (e) {
                            return "You can only select " + e + " item" + (e == 1 ? "" : "s")
                        },
                        formatLoadMore: function (e) {
                            return "Loading more results..."
                        },
                        formatSearching: function () {
                            return "Searching..."
                        },
                        minimumResultsForSearch: 0,
                        minimumInputLength: 0,
                        maximumInputLength: null,
                        maximumSelectionSize: 0,
                        id: function (e) {
                            return e.id
                        },
                        matcher: function (e, s) {
                            return ("" + s).toUpperCase().indexOf(("" + e).toUpperCase()) >= 0
                        },
                        separator: ",",
                        tokenSeparators: [],
                        tokenizer: le,
                        escapeMarkup: function (e) {
                            var s = {
                                "\\": "&#92;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#47;"
                            };
                            return String(e).replace(/[&<>"'\/\\]/g, function (i) {
                                return s[i]
                            })
                        },
                        blurOnChange: !1,
                        selectOnBlur: !1,
                        adaptContainerCssClass: function (e) {
                            return e
                        },
                        adaptDropdownCssClass: function (e) {
                            return null
                        }
                    },
                    r.fn.select2.ajaxDefaults = {
                        transport: r.ajax,
                        params: {
                            type: "GET",
                            store: !1,
                            dataType: "json"
                        }
                    },
                    window.Select2 = {
                        query: {
                            ajax: Q,
                            local: Y,
                            tags: J
                        },
                        util: {
                            debounce: q,
                            markMatch: X
                        },
                        class: {
                            abstract: x,
                            single: T,
                            multi: R
                        }
                    }
            }(jQuery)
    }
    he.call(typeof window < "u" ? window : globalThis)
}
);
export default ue();
//# sourceMappingURL=Cc9E-Fzz4Wgb.js.map

//# chunkId=0198824c-9da3-7983-b557-1ebcbce6feda
