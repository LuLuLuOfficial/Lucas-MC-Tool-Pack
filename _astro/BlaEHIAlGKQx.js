!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}
          , n = (new e.Error).stack;
        n && (e._posthogChunkIds = e._posthogChunkIds || {},
        e._posthogChunkIds[n] = "0198824c-9da6-7281-9bfb-cebd7e5825f9")
    } catch (e) {}
}();
var ut = (e, I) => () => (I || e((I = {
    exports: {}
}).exports, I),
I.exports);
var ft = ut( (nt, at) => {
    typeof at < "u" && (at = void 0);
    typeof nt < "u" && (nt = void 0);
    function ct() {
        /*! jQuery UI - v1.10.3 - 2013-05-11
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
        (function(e, I) {
            var h = 0
              , r = /^ui-id-\d+$/;
            e.ui = e.ui || {},
            e.extend(e.ui, {
                version: "1.10.3",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    NUMPAD_ADD: 107,
                    NUMPAD_DECIMAL: 110,
                    NUMPAD_DIVIDE: 111,
                    NUMPAD_ENTER: 108,
                    NUMPAD_MULTIPLY: 106,
                    NUMPAD_SUBTRACT: 109,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }),
            e.fn.extend({
                focus: function(n) {
                    return function(t, a) {
                        return typeof t == "number" ? this.each(function() {
                            var o = this;
                            setTimeout(function() {
                                e(o).focus(),
                                a && a.call(o)
                            }, t)
                        }) : n.apply(this, arguments)
                    }
                }(e.fn.focus),
                scrollParent: function() {
                    var n;
                    return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? n = this.parents().filter(function() {
                        return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                    }).eq(0) : n = this.parents().filter(function() {
                        return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                    }).eq(0),
                    /fixed/.test(this.css("position")) || !n.length ? e(document) : n
                },
                zIndex: function(n) {
                    if (n !== I)
                        return this.css("zIndex", n);
                    if (this.length)
                        for (var t = e(this[0]), a, o; t.length && t[0] !== document; ) {
                            if (a = t.css("position"),
                            (a === "absolute" || a === "relative" || a === "fixed") && (o = parseInt(t.css("zIndex"), 10),
                            !isNaN(o) && o !== 0))
                                return o;
                            t = t.parent()
                        }
                    return 0
                },
                uniqueId: function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++h)
                    })
                },
                removeUniqueId: function() {
                    return this.each(function() {
                        r.test(this.id) && e(this).removeAttr("id")
                    })
                }
            });
            function i(n, t) {
                var a, o, l, u = n.nodeName.toLowerCase();
                return u === "area" ? (a = n.parentNode,
                o = a.name,
                !n.href || !o || a.nodeName.toLowerCase() !== "map" ? !1 : (l = e("img[usemap=#" + o + "]")[0],
                !!l && s(l))) : (/input|select|textarea|button|object/.test(u) ? !n.disabled : u === "a" && n.href || t) && s(n)
            }
            function s(n) {
                return e.expr.filters.visible(n) && !e(n).parents().addBack().filter(function() {
                    return e.css(this, "visibility") === "hidden"
                }).length
            }
            e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo(function(n) {
                    return function(t) {
                        return !!e.data(t, n)
                    }
                }) : function(n, t, a) {
                    return !!e.data(n, a[3])
                }
                ,
                focusable: function(n) {
                    return i(n, !isNaN(e.attr(n, "tabindex")))
                },
                tabbable: function(n) {
                    var t = e.attr(n, "tabindex")
                      , a = isNaN(t);
                    return (a || t >= 0) && i(n, !a)
                }
            }),
            e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, t) {
                var a = t === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
                  , o = t.toLowerCase()
                  , l = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
                function u(c, p, f, d) {
                    return e.each(a, function() {
                        p -= parseFloat(e.css(c, "padding" + this)) || 0,
                        f && (p -= parseFloat(e.css(c, "border" + this + "Width")) || 0),
                        d && (p -= parseFloat(e.css(c, "margin" + this)) || 0)
                    }),
                    p
                }
                e.fn["inner" + t] = function(c) {
                    return c === I ? l["inner" + t].call(this) : this.each(function() {
                        e(this).css(o, u(this, c) + "px")
                    })
                }
                ,
                e.fn["outer" + t] = function(c, p) {
                    return typeof c != "number" ? l["outer" + t].call(this, c) : this.each(function() {
                        e(this).css(o, u(this, c, !0, p) + "px")
                    })
                }
            }),
            e.fn.addBack || (e.fn.addBack = function(n) {
                return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
            }
            ),
            e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(n) {
                return function(t) {
                    return arguments.length ? n.call(this, e.camelCase(t)) : n.call(this)
                }
            }(e.fn.removeData)),
            e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
            e.support.selectstart = "onselectstart"in document.createElement("div"),
            e.fn.extend({
                disableSelection: function() {
                    return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(n) {
                        n.preventDefault()
                    })
                },
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                }
            }),
            e.extend(e.ui, {
                plugin: {
                    add: function(n, t, a) {
                        var o, l = e.ui[n].prototype;
                        for (o in a)
                            l.plugins[o] = l.plugins[o] || [],
                            l.plugins[o].push([t, a[o]])
                    },
                    call: function(n, t, a) {
                        var o, l = n.plugins[t];
                        if (!(!l || !n.element[0].parentNode || n.element[0].parentNode.nodeType === 11))
                            for (o = 0; o < l.length; o++)
                                n.options[l[o][0]] && l[o][1].apply(n.element, a)
                    }
                },
                hasScroll: function(n, t) {
                    if (e(n).css("overflow") === "hidden")
                        return !1;
                    var a = t && t === "left" ? "scrollLeft" : "scrollTop"
                      , o = !1;
                    return n[a] > 0 ? !0 : (n[a] = 1,
                    o = n[a] > 0,
                    n[a] = 0,
                    o)
                }
            })
        }
        )(jQuery),
        function(e, I) {
            var h = 0
              , r = Array.prototype.slice
              , i = e.cleanData;
            e.cleanData = function(s) {
                for (var n = 0, t; (t = s[n]) != null; n++)
                    try {
                        e(t).triggerHandler("remove")
                    } catch {}
                i(s)
            }
            ,
            e.widget = function(s, n, t) {
                var a, o, l, u, c = {}, p = s.split(".")[0];
                s = s.split(".")[1],
                a = p + "-" + s,
                t || (t = n,
                n = e.Widget),
                e.expr[":"][a.toLowerCase()] = function(f) {
                    return !!e.data(f, a)
                }
                ,
                e[p] = e[p] || {},
                o = e[p][s],
                l = e[p][s] = function(f, d) {
                    if (!this._createWidget)
                        return new l(f,d);
                    arguments.length && this._createWidget(f, d)
                }
                ,
                e.extend(l, o, {
                    version: t.version,
                    _proto: e.extend({}, t),
                    _childConstructors: []
                }),
                u = new n,
                u.options = e.widget.extend({}, u.options),
                e.each(t, function(f, d) {
                    if (!e.isFunction(d)) {
                        c[f] = d;
                        return
                    }
                    c[f] = function() {
                        var m = function() {
                            return n.prototype[f].apply(this, arguments)
                        }
                          , b = function(g) {
                            return n.prototype[f].apply(this, g)
                        };
                        return function() {
                            var g = this._super, v = this._superApply, y;
                            return this._super = m,
                            this._superApply = b,
                            y = d.apply(this, arguments),
                            this._super = g,
                            this._superApply = v,
                            y
                        }
                    }()
                }),
                l.prototype = e.widget.extend(u, {
                    widgetEventPrefix: o ? u.widgetEventPrefix : s
                }, c, {
                    constructor: l,
                    namespace: p,
                    widgetName: s,
                    widgetFullName: a
                }),
                o ? (e.each(o._childConstructors, function(f, d) {
                    var m = d.prototype;
                    e.widget(m.namespace + "." + m.widgetName, l, d._proto)
                }),
                delete o._childConstructors) : n._childConstructors.push(l),
                e.widget.bridge(s, l)
            }
            ,
            e.widget.extend = function(s) {
                for (var n = r.call(arguments, 1), t = 0, a = n.length, o, l; t < a; t++)
                    for (o in n[t])
                        l = n[t][o],
                        n[t].hasOwnProperty(o) && l !== I && (e.isPlainObject(l) ? s[o] = e.isPlainObject(s[o]) ? e.widget.extend({}, s[o], l) : e.widget.extend({}, l) : s[o] = l);
                return s
            }
            ,
            e.widget.bridge = function(s, n) {
                var t = n.prototype.widgetFullName || s;
                e.fn[s] = function(a) {
                    var o = typeof a == "string"
                      , l = r.call(arguments, 1)
                      , u = this;
                    return a = !o && l.length ? e.widget.extend.apply(null, [a].concat(l)) : a,
                    o ? this.each(function() {
                        var c, p = e.data(this, t);
                        if (!p)
                            return e.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + a + "'");
                        if (!e.isFunction(p[a]) || a.charAt(0) === "_")
                            return e.error("no such method '" + a + "' for " + s + " widget instance");
                        if (c = p[a].apply(p, l),
                        c !== p && c !== I)
                            return u = c && c.jquery ? u.pushStack(c.get()) : c,
                            !1
                    }) : this.each(function() {
                        var c = e.data(this, t);
                        c ? c.option(a || {})._init() : e.data(this, t, new n(a,this))
                    }),
                    u
                }
            }
            ,
            e.Widget = function() {}
            ,
            e.Widget._childConstructors = [],
            e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(s, n) {
                    n = e(n || this.defaultElement || this)[0],
                    this.element = e(n),
                    this.uuid = h++,
                    this.eventNamespace = "." + this.widgetName + this.uuid,
                    this.options = e.widget.extend({}, this.options, this._getCreateOptions(), s),
                    this.bindings = e(),
                    this.hoverable = e(),
                    this.focusable = e(),
                    n !== this && (e.data(n, this.widgetFullName, this),
                    this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === n && this.destroy()
                        }
                    }),
                    this.document = e(n.style ? n.ownerDocument : n.document || n),
                    this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
                    this._create(),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init()
                },
                _getCreateOptions: e.noop,
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() {
                    this._destroy(),
                    this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
                    this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                    this.bindings.unbind(this.eventNamespace),
                    this.hoverable.removeClass("ui-state-hover"),
                    this.focusable.removeClass("ui-state-focus")
                },
                _destroy: e.noop,
                widget: function() {
                    return this.element
                },
                option: function(s, n) {
                    var t = s, a, o, l;
                    if (arguments.length === 0)
                        return e.widget.extend({}, this.options);
                    if (typeof s == "string")
                        if (t = {},
                        a = s.split("."),
                        s = a.shift(),
                        a.length) {
                            for (o = t[s] = e.widget.extend({}, this.options[s]),
                            l = 0; l < a.length - 1; l++)
                                o[a[l]] = o[a[l]] || {},
                                o = o[a[l]];
                            if (s = a.pop(),
                            n === I)
                                return o[s] === I ? null : o[s];
                            o[s] = n
                        } else {
                            if (n === I)
                                return this.options[s] === I ? null : this.options[s];
                            t[s] = n
                        }
                    return this._setOptions(t),
                    this
                },
                _setOptions: function(s) {
                    var n;
                    for (n in s)
                        this._setOption(n, s[n]);
                    return this
                },
                _setOption: function(s, n) {
                    return this.options[s] = n,
                    s === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!n).attr("aria-disabled", n),
                    this.hoverable.removeClass("ui-state-hover"),
                    this.focusable.removeClass("ui-state-focus")),
                    this
                },
                enable: function() {
                    return this._setOption("disabled", !1)
                },
                disable: function() {
                    return this._setOption("disabled", !0)
                },
                _on: function(s, n, t) {
                    var a, o = this;
                    typeof s != "boolean" && (t = n,
                    n = s,
                    s = !1),
                    t ? (n = a = e(n),
                    this.bindings = this.bindings.add(n)) : (t = n,
                    n = this.element,
                    a = this.widget()),
                    e.each(t, function(l, u) {
                        function c() {
                            if (!(!s && (o.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))))
                                return (typeof u == "string" ? o[u] : u).apply(o, arguments)
                        }
                        typeof u != "string" && (c.guid = u.guid = u.guid || c.guid || e.guid++);
                        var p = l.match(/^(\w+)\s*(.*)$/)
                          , f = p[1] + o.eventNamespace
                          , d = p[2];
                        d ? a.delegate(d, f, c) : n.bind(f, c)
                    })
                },
                _off: function(s, n) {
                    n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                    s.unbind(n).undelegate(n)
                },
                _delay: function(s, n) {
                    function t() {
                        return (typeof s == "string" ? a[s] : s).apply(a, arguments)
                    }
                    var a = this;
                    return setTimeout(t, n || 0)
                },
                _hoverable: function(s) {
                    this.hoverable = this.hoverable.add(s),
                    this._on(s, {
                        mouseenter: function(n) {
                            e(n.currentTarget).addClass("ui-state-hover")
                        },
                        mouseleave: function(n) {
                            e(n.currentTarget).removeClass("ui-state-hover")
                        }
                    })
                },
                _focusable: function(s) {
                    this.focusable = this.focusable.add(s),
                    this._on(s, {
                        focusin: function(n) {
                            e(n.currentTarget).addClass("ui-state-focus")
                        },
                        focusout: function(n) {
                            e(n.currentTarget).removeClass("ui-state-focus")
                        }
                    })
                },
                _trigger: function(s, n, t) {
                    var a, o, l = this.options[s];
                    if (t = t || {},
                    n = e.Event(n),
                    n.type = (s === this.widgetEventPrefix ? s : this.widgetEventPrefix + s).toLowerCase(),
                    n.target = this.element[0],
                    o = n.originalEvent,
                    o)
                        for (a in o)
                            a in n || (n[a] = o[a]);
                    return this.element.trigger(n, t),
                    !(e.isFunction(l) && l.apply(this.element[0], [n].concat(t)) === !1 || n.isDefaultPrevented())
                }
            },
            e.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(s, n) {
                e.Widget.prototype["_" + s] = function(t, a, o) {
                    typeof a == "string" && (a = {
                        effect: a
                    });
                    var l, u = a ? a === !0 || typeof a == "number" ? n : a.effect || n : s;
                    a = a || {},
                    typeof a == "number" && (a = {
                        duration: a
                    }),
                    l = !e.isEmptyObject(a),
                    a.complete = o,
                    a.delay && t.delay(a.delay),
                    l && e.effects && e.effects.effect[u] ? t[s](a) : u !== s && t[u] ? t[u](a.duration, a.easing, o) : t.queue(function(c) {
                        e(this)[s](),
                        o && o.call(t[0]),
                        c()
                    })
                }
            })
        }(jQuery),
        function(e, I) {
            var h = !1;
            e(document).mouseup(function() {
                h = !1
            }),
            e.widget("ui.mouse", {
                version: "1.10.3",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var r = this;
                    this.element.bind("mousedown." + this.widgetName, function(i) {
                        return r._mouseDown(i)
                    }).bind("click." + this.widgetName, function(i) {
                        if (e.data(i.target, r.widgetName + ".preventClickEvent") === !0)
                            return e.removeData(i.target, r.widgetName + ".preventClickEvent"),
                            i.stopImmediatePropagation(),
                            !1
                    }),
                    this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName),
                    this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(r) {
                    if (!h) {
                        this._mouseStarted && this._mouseUp(r),
                        this._mouseDownEvent = r;
                        var i = this
                          , s = r.which === 1
                          , n = typeof this.options.cancel == "string" && r.target.nodeName ? e(r.target).closest(this.options.cancel).length : !1;
                        return !s || n || !this._mouseCapture(r) ? !0 : (this.mouseDelayMet = !this.options.delay,
                        this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0
                        }, this.options.delay)),
                        this._mouseDistanceMet(r) && this._mouseDelayMet(r) && (this._mouseStarted = this._mouseStart(r) !== !1,
                        !this._mouseStarted) ? (r.preventDefault(),
                        !0) : (e.data(r.target, this.widgetName + ".preventClickEvent") === !0 && e.removeData(r.target, this.widgetName + ".preventClickEvent"),
                        this._mouseMoveDelegate = function(t) {
                            return i._mouseMove(t)
                        }
                        ,
                        this._mouseUpDelegate = function(t) {
                            return i._mouseUp(t)
                        }
                        ,
                        e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                        r.preventDefault(),
                        h = !0,
                        !0))
                    }
                },
                _mouseMove: function(r) {
                    return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !r.button ? this._mouseUp(r) : this._mouseStarted ? (this._mouseDrag(r),
                    r.preventDefault()) : (this._mouseDistanceMet(r) && this._mouseDelayMet(r) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, r) !== !1,
                    this._mouseStarted ? this._mouseDrag(r) : this._mouseUp(r)),
                    !this._mouseStarted)
                },
                _mouseUp: function(r) {
                    return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && (this._mouseStarted = !1,
                    r.target === this._mouseDownEvent.target && e.data(r.target, this.widgetName + ".preventClickEvent", !0),
                    this._mouseStop(r)),
                    !1
                },
                _mouseDistanceMet: function(r) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - r.pageX), Math.abs(this._mouseDownEvent.pageY - r.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            })
        }(jQuery),
        function(e, I) {
            e.ui = e.ui || {};
            var h, r = Math.max, i = Math.abs, s = Math.round, n = /left|center|right/, t = /top|center|bottom/, a = /[\+\-]\d+(\.[\d]+)?%?/, o = /^\w+/, l = /%$/, u = e.fn.position;
            function c(d, m, b) {
                return [parseFloat(d[0]) * (l.test(d[0]) ? m / 100 : 1), parseFloat(d[1]) * (l.test(d[1]) ? b / 100 : 1)]
            }
            function p(d, m) {
                return parseInt(e.css(d, m), 10) || 0
            }
            function f(d) {
                var m = d[0];
                return m.nodeType === 9 ? {
                    width: d.width(),
                    height: d.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(m) ? {
                    width: d.width(),
                    height: d.height(),
                    offset: {
                        top: d.scrollTop(),
                        left: d.scrollLeft()
                    }
                } : m.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: m.pageY,
                        left: m.pageX
                    }
                } : {
                    width: d.outerWidth(),
                    height: d.outerHeight(),
                    offset: d.offset()
                }
            }
            e.position = {
                scrollbarWidth: function() {
                    if (h !== I)
                        return h;
                    var d, m, b = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), g = b.children()[0];
                    return e("body").append(b),
                    d = g.offsetWidth,
                    b.css("overflow", "scroll"),
                    m = g.offsetWidth,
                    d === m && (m = b[0].clientWidth),
                    b.remove(),
                    h = d - m
                },
                getScrollInfo: function(d) {
                    var m = d.isWindow ? "" : d.element.css("overflow-x")
                      , b = d.isWindow ? "" : d.element.css("overflow-y")
                      , g = m === "scroll" || m === "auto" && d.width < d.element[0].scrollWidth
                      , v = b === "scroll" || b === "auto" && d.height < d.element[0].scrollHeight;
                    return {
                        width: v ? e.position.scrollbarWidth() : 0,
                        height: g ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(d) {
                    var m = e(d || window)
                      , b = e.isWindow(m[0]);
                    return {
                        element: m,
                        isWindow: b,
                        offset: m.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: m.scrollLeft(),
                        scrollTop: m.scrollTop(),
                        width: b ? m.width() : m.outerWidth(),
                        height: b ? m.height() : m.outerHeight()
                    }
                }
            },
            e.fn.position = function(d) {
                if (!d || !d.of)
                    return u.apply(this, arguments);
                d = e.extend({}, d);
                var m, b, g, v, y, _, w = e(d.of), x = e.position.getWithinInfo(d.within), T = e.position.getScrollInfo(x), D = (d.collision || "flip").split(" "), C = {};
                return _ = f(w),
                w[0].preventDefault && (d.at = "left top"),
                b = _.width,
                g = _.height,
                v = _.offset,
                y = e.extend({}, v),
                e.each(["my", "at"], function() {
                    var k = (d[this] || "").split(" "), P, M;
                    k.length === 1 && (k = n.test(k[0]) ? k.concat(["center"]) : t.test(k[0]) ? ["center"].concat(k) : ["center", "center"]),
                    k[0] = n.test(k[0]) ? k[0] : "center",
                    k[1] = t.test(k[1]) ? k[1] : "center",
                    P = a.exec(k[0]),
                    M = a.exec(k[1]),
                    C[this] = [P ? P[0] : 0, M ? M[0] : 0],
                    d[this] = [o.exec(k[0])[0], o.exec(k[1])[0]]
                }),
                D.length === 1 && (D[1] = D[0]),
                d.at[0] === "right" ? y.left += b : d.at[0] === "center" && (y.left += b / 2),
                d.at[1] === "bottom" ? y.top += g : d.at[1] === "center" && (y.top += g / 2),
                m = c(C.at, b, g),
                y.left += m[0],
                y.top += m[1],
                this.each(function() {
                    var k, P, M = e(this), S = M.outerWidth(), H = M.outerHeight(), L = p(this, "marginLeft"), E = p(this, "marginTop"), W = S + L + p(this, "marginRight") + T.width, Y = H + E + p(this, "marginBottom") + T.height, z = e.extend({}, y), F = c(C.my, M.outerWidth(), M.outerHeight());
                    d.my[0] === "right" ? z.left -= S : d.my[0] === "center" && (z.left -= S / 2),
                    d.my[1] === "bottom" ? z.top -= H : d.my[1] === "center" && (z.top -= H / 2),
                    z.left += F[0],
                    z.top += F[1],
                    e.support.offsetFractions || (z.left = s(z.left),
                    z.top = s(z.top)),
                    k = {
                        marginLeft: L,
                        marginTop: E
                    },
                    e.each(["left", "top"], function(K, R) {
                        e.ui.position[D[K]] && e.ui.position[D[K]][R](z, {
                            targetWidth: b,
                            targetHeight: g,
                            elemWidth: S,
                            elemHeight: H,
                            collisionPosition: k,
                            collisionWidth: W,
                            collisionHeight: Y,
                            offset: [m[0] + F[0], m[1] + F[1]],
                            my: d.my,
                            at: d.at,
                            within: x,
                            elem: M
                        })
                    }),
                    d.using && (P = function(K) {
                        var R = v.left - z.left
                          , U = R + b - S
                          , A = v.top - z.top
                          , V = A + g - H
                          , j = {
                            target: {
                                element: w,
                                left: v.left,
                                top: v.top,
                                width: b,
                                height: g
                            },
                            element: {
                                element: M,
                                left: z.left,
                                top: z.top,
                                width: S,
                                height: H
                            },
                            horizontal: U < 0 ? "left" : R > 0 ? "right" : "center",
                            vertical: V < 0 ? "top" : A > 0 ? "bottom" : "middle"
                        };
                        b < S && i(R + U) < b && (j.horizontal = "center"),
                        g < H && i(A + V) < g && (j.vertical = "middle"),
                        r(i(R), i(U)) > r(i(A), i(V)) ? j.important = "horizontal" : j.important = "vertical",
                        d.using.call(this, K, j)
                    }
                    ),
                    M.offset(e.extend(z, {
                        using: P
                    }))
                })
            }
            ,
            e.ui.position = {
                fit: {
                    left: function(d, m) {
                        var b = m.within, g = b.isWindow ? b.scrollLeft : b.offset.left, v = b.width, y = d.left - m.collisionPosition.marginLeft, _ = g - y, w = y + m.collisionWidth - v - g, x;
                        m.collisionWidth > v ? _ > 0 && w <= 0 ? (x = d.left + _ + m.collisionWidth - v - g,
                        d.left += _ - x) : w > 0 && _ <= 0 ? d.left = g : _ > w ? d.left = g + v - m.collisionWidth : d.left = g : _ > 0 ? d.left += _ : w > 0 ? d.left -= w : d.left = r(d.left - y, d.left)
                    },
                    top: function(d, m) {
                        var b = m.within, g = b.isWindow ? b.scrollTop : b.offset.top, v = m.within.height, y = d.top - m.collisionPosition.marginTop, _ = g - y, w = y + m.collisionHeight - v - g, x;
                        m.collisionHeight > v ? _ > 0 && w <= 0 ? (x = d.top + _ + m.collisionHeight - v - g,
                        d.top += _ - x) : w > 0 && _ <= 0 ? d.top = g : _ > w ? d.top = g + v - m.collisionHeight : d.top = g : _ > 0 ? d.top += _ : w > 0 ? d.top -= w : d.top = r(d.top - y, d.top)
                    }
                },
                flip: {
                    left: function(d, m) {
                        var b = m.within, g = b.offset.left + b.scrollLeft, v = b.width, y = b.isWindow ? b.scrollLeft : b.offset.left, _ = d.left - m.collisionPosition.marginLeft, w = _ - y, x = _ + m.collisionWidth - v - y, T = m.my[0] === "left" ? -m.elemWidth : m.my[0] === "right" ? m.elemWidth : 0, D = m.at[0] === "left" ? m.targetWidth : m.at[0] === "right" ? -m.targetWidth : 0, C = -2 * m.offset[0], k, P;
                        w < 0 ? (k = d.left + T + D + C + m.collisionWidth - v - g,
                        (k < 0 || k < i(w)) && (d.left += T + D + C)) : x > 0 && (P = d.left - m.collisionPosition.marginLeft + T + D + C - y,
                        (P > 0 || i(P) < x) && (d.left += T + D + C))
                    },
                    top: function(d, m) {
                        var b = m.within, g = b.offset.top + b.scrollTop, v = b.height, y = b.isWindow ? b.scrollTop : b.offset.top, _ = d.top - m.collisionPosition.marginTop, w = _ - y, x = _ + m.collisionHeight - v - y, T = m.my[1] === "top", D = T ? -m.elemHeight : m.my[1] === "bottom" ? m.elemHeight : 0, C = m.at[1] === "top" ? m.targetHeight : m.at[1] === "bottom" ? -m.targetHeight : 0, k = -2 * m.offset[1], P, M;
                        w < 0 ? (M = d.top + D + C + k + m.collisionHeight - v - g,
                        d.top + D + C + k > w && (M < 0 || M < i(w)) && (d.top += D + C + k)) : x > 0 && (P = d.top - m.collisionPosition.marginTop + D + C + k - y,
                        d.top + D + C + k > x && (P > 0 || i(P) < x) && (d.top += D + C + k))
                    }
                },
                flipfit: {
                    left: function() {
                        e.ui.position.flip.left.apply(this, arguments),
                        e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        e.ui.position.flip.top.apply(this, arguments),
                        e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var d, m, b, g, v, y = document.getElementsByTagName("body")[0], _ = document.createElement("div");
                d = document.createElement(y ? "div" : "body"),
                b = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                },
                y && e.extend(b, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (v in b)
                    d.style[v] = b[v];
                d.appendChild(_),
                m = y || document.documentElement,
                m.insertBefore(d, m.firstChild),
                _.style.cssText = "position: absolute; left: 10.7432222px;",
                g = e(_).offset().left,
                e.support.offsetFractions = g > 10 && g < 11,
                d.innerHTML = "",
                m.removeChild(d)
            }()
        }(jQuery),
        function(e, I) {
            e.widget("ui.draggable", e.ui.mouse, {
                version: "1.10.3",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1,
                    drag: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"),
                    this.options.addClasses && this.element.addClass("ui-draggable"),
                    this.options.disabled && this.element.addClass("ui-draggable-disabled"),
                    this._mouseInit()
                },
                _destroy: function() {
                    this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
                    this._mouseDestroy()
                },
                _mouseCapture: function(h) {
                    var r = this.options;
                    return this.helper || r.disabled || e(h.target).closest(".ui-resizable-handle").length > 0 || (this.handle = this._getHandle(h),
                    !this.handle) ? !1 : (e(r.iframeFix === !0 ? "iframe" : r.iframeFix).each(function() {
                        e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                            width: this.offsetWidth + "px",
                            height: this.offsetHeight + "px",
                            position: "absolute",
                            opacity: "0.001",
                            zIndex: 1e3
                        }).css(e(this).offset()).appendTo("body")
                    }),
                    !0)
                },
                _mouseStart: function(h) {
                    var r = this.options;
                    return this.helper = this._createHelper(h),
                    this.helper.addClass("ui-draggable-dragging"),
                    this._cacheHelperProportions(),
                    e.ui.ddmanager && (e.ui.ddmanager.current = this),
                    this._cacheMargins(),
                    this.cssPosition = this.helper.css("position"),
                    this.scrollParent = this.helper.scrollParent(),
                    this.offsetParent = this.helper.offsetParent(),
                    this.offsetParentCssPosition = this.offsetParent.css("position"),
                    this.offset = this.positionAbs = this.element.offset(),
                    this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    },
                    this.offset.scroll = !1,
                    e.extend(this.offset, {
                        click: {
                            left: h.pageX - this.offset.left,
                            top: h.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }),
                    this.originalPosition = this.position = this._generatePosition(h),
                    this.originalPageX = h.pageX,
                    this.originalPageY = h.pageY,
                    r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt),
                    this._setContainment(),
                    this._trigger("start", h) === !1 ? (this._clear(),
                    !1) : (this._cacheHelperProportions(),
                    e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, h),
                    this._mouseDrag(h, !0),
                    e.ui.ddmanager && e.ui.ddmanager.dragStart(this, h),
                    !0)
                },
                _mouseDrag: function(h, r) {
                    if (this.offsetParentCssPosition === "fixed" && (this.offset.parent = this._getParentOffset()),
                    this.position = this._generatePosition(h),
                    this.positionAbs = this._convertPositionTo("absolute"),
                    !r) {
                        var i = this._uiHash();
                        if (this._trigger("drag", h, i) === !1)
                            return this._mouseUp({}),
                            !1;
                        this.position = i.position
                    }
                    return (!this.options.axis || this.options.axis !== "y") && (this.helper[0].style.left = this.position.left + "px"),
                    (!this.options.axis || this.options.axis !== "x") && (this.helper[0].style.top = this.position.top + "px"),
                    e.ui.ddmanager && e.ui.ddmanager.drag(this, h),
                    !1
                },
                _mouseStop: function(h) {
                    var r = this
                      , i = !1;
                    return e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, h)),
                    this.dropped && (i = this.dropped,
                    this.dropped = !1),
                    this.options.helper === "original" && !e.contains(this.element[0].ownerDocument, this.element[0]) || (this.options.revert === "invalid" && !i || this.options.revert === "valid" && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        r._trigger("stop", h) !== !1 && r._clear()
                    }) : this._trigger("stop", h) !== !1 && this._clear()),
                    !1
                },
                _mouseUp: function(h) {
                    return e("div.ui-draggable-iframeFix").each(function() {
                        this.parentNode.removeChild(this)
                    }),
                    e.ui.ddmanager && e.ui.ddmanager.dragStop(this, h),
                    e.ui.mouse.prototype._mouseUp.call(this, h)
                },
                cancel: function() {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
                    this
                },
                _getHandle: function(h) {
                    return this.options.handle ? !!e(h.target).closest(this.element.find(this.options.handle)).length : !0
                },
                _createHelper: function(h) {
                    var r = this.options
                      , i = e.isFunction(r.helper) ? e(r.helper.apply(this.element[0], [h])) : r.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
                    return i.parents("body").length || i.appendTo(r.appendTo === "parent" ? this.element[0].parentNode : r.appendTo),
                    i[0] !== this.element[0] && !/(fixed|absolute)/.test(i.css("position")) && i.css("position", "absolute"),
                    i
                },
                _adjustOffsetFromHelper: function(h) {
                    typeof h == "string" && (h = h.split(" ")),
                    e.isArray(h) && (h = {
                        left: +h[0],
                        top: +h[1] || 0
                    }),
                    "left"in h && (this.offset.click.left = h.left + this.margins.left),
                    "right"in h && (this.offset.click.left = this.helperProportions.width - h.right + this.margins.left),
                    "top"in h && (this.offset.click.top = h.top + this.margins.top),
                    "bottom"in h && (this.offset.click.top = this.helperProportions.height - h.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    var h = this.offsetParent.offset();
                    return this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (h.left += this.scrollParent.scrollLeft(),
                    h.top += this.scrollParent.scrollTop()),
                    (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) && (h = {
                        top: 0,
                        left: 0
                    }),
                    {
                        top: h.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: h.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if (this.cssPosition === "relative") {
                        var h = this.element.position();
                        return {
                            top: h.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: h.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        }
                    } else
                        return {
                            top: 0,
                            left: 0
                        }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var h, r, i, s = this.options;
                    if (!s.containment) {
                        this.containment = null;
                        return
                    }
                    if (s.containment === "window") {
                        this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                        return
                    }
                    if (s.containment === "document") {
                        this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                        return
                    }
                    if (s.containment.constructor === Array) {
                        this.containment = s.containment;
                        return
                    }
                    s.containment === "parent" && (s.containment = this.helper[0].parentNode),
                    r = e(s.containment),
                    i = r[0],
                    i && (h = r.css("overflow") !== "hidden",
                    this.containment = [(parseInt(r.css("borderLeftWidth"), 10) || 0) + (parseInt(r.css("paddingLeft"), 10) || 0), (parseInt(r.css("borderTopWidth"), 10) || 0) + (parseInt(r.css("paddingTop"), 10) || 0), (h ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(r.css("borderRightWidth"), 10) || 0) - (parseInt(r.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (h ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(r.css("borderBottomWidth"), 10) || 0) - (parseInt(r.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                    this.relative_container = r)
                },
                _convertPositionTo: function(h, r) {
                    r || (r = this.position);
                    var i = h === "absolute" ? 1 : -1
                      , s = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
                    return this.offset.scroll || (this.offset.scroll = {
                        top: s.scrollTop(),
                        left: s.scrollLeft()
                    }),
                    {
                        top: r.top + this.offset.relative.top * i + this.offset.parent.top * i - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * i,
                        left: r.left + this.offset.relative.left * i + this.offset.parent.left * i - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * i
                    }
                },
                _generatePosition: function(h) {
                    var r, i, s, n, t = this.options, a = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, o = h.pageX, l = h.pageY;
                    return this.offset.scroll || (this.offset.scroll = {
                        top: a.scrollTop(),
                        left: a.scrollLeft()
                    }),
                    this.originalPosition && (this.containment && (this.relative_container ? (i = this.relative_container.offset(),
                    r = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : r = this.containment,
                    h.pageX - this.offset.click.left < r[0] && (o = r[0] + this.offset.click.left),
                    h.pageY - this.offset.click.top < r[1] && (l = r[1] + this.offset.click.top),
                    h.pageX - this.offset.click.left > r[2] && (o = r[2] + this.offset.click.left),
                    h.pageY - this.offset.click.top > r[3] && (l = r[3] + this.offset.click.top)),
                    t.grid && (s = t.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / t.grid[1]) * t.grid[1] : this.originalPageY,
                    l = r ? s - this.offset.click.top >= r[1] || s - this.offset.click.top > r[3] ? s : s - this.offset.click.top >= r[1] ? s - t.grid[1] : s + t.grid[1] : s,
                    n = t.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / t.grid[0]) * t.grid[0] : this.originalPageX,
                    o = r ? n - this.offset.click.left >= r[0] || n - this.offset.click.left > r[2] ? n : n - this.offset.click.left >= r[0] ? n - t.grid[0] : n + t.grid[0] : n)),
                    {
                        top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
                    }
                },
                _clear: function() {
                    this.helper.removeClass("ui-draggable-dragging"),
                    this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(),
                    this.helper = null,
                    this.cancelHelperRemoval = !1
                },
                _trigger: function(h, r, i) {
                    return i = i || this._uiHash(),
                    e.ui.plugin.call(this, h, [r, i]),
                    h === "drag" && (this.positionAbs = this._convertPositionTo("absolute")),
                    e.Widget.prototype._trigger.call(this, h, r, i)
                },
                plugins: {},
                _uiHash: function() {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }),
            e.ui.plugin.add("draggable", "connectToSortable", {
                start: function(h, r) {
                    var i = e(this).data("ui-draggable")
                      , s = i.options
                      , n = e.extend({}, r, {
                        item: i.element
                    });
                    i.sortables = [],
                    e(s.connectToSortable).each(function() {
                        var t = e.data(this, "ui-sortable");
                        t && !t.options.disabled && (i.sortables.push({
                            instance: t,
                            shouldRevert: t.options.revert
                        }),
                        t.refreshPositions(),
                        t._trigger("activate", h, n))
                    })
                },
                stop: function(h, r) {
                    var i = e(this).data("ui-draggable")
                      , s = e.extend({}, r, {
                        item: i.element
                    });
                    e.each(i.sortables, function() {
                        this.instance.isOver ? (this.instance.isOver = 0,
                        i.cancelHelperRemoval = !0,
                        this.instance.cancelHelperRemoval = !1,
                        this.shouldRevert && (this.instance.options.revert = this.shouldRevert),
                        this.instance._mouseStop(h),
                        this.instance.options.helper = this.instance.options._helper,
                        i.options.helper === "original" && this.instance.currentItem.css({
                            top: "auto",
                            left: "auto"
                        })) : (this.instance.cancelHelperRemoval = !1,
                        this.instance._trigger("deactivate", h, s))
                    })
                },
                drag: function(h, r) {
                    var i = e(this).data("ui-draggable")
                      , s = this;
                    e.each(i.sortables, function() {
                        var n = !1
                          , t = this;
                        this.instance.positionAbs = i.positionAbs,
                        this.instance.helperProportions = i.helperProportions,
                        this.instance.offset.click = i.offset.click,
                        this.instance._intersectsWith(this.instance.containerCache) && (n = !0,
                        e.each(i.sortables, function() {
                            return this.instance.positionAbs = i.positionAbs,
                            this.instance.helperProportions = i.helperProportions,
                            this.instance.offset.click = i.offset.click,
                            this !== t && this.instance._intersectsWith(this.instance.containerCache) && e.contains(t.instance.element[0], this.instance.element[0]) && (n = !1),
                            n
                        })),
                        n ? (this.instance.isOver || (this.instance.isOver = 1,
                        this.instance.currentItem = e(s).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0),
                        this.instance.options._helper = this.instance.options.helper,
                        this.instance.options.helper = function() {
                            return r.helper[0]
                        }
                        ,
                        h.target = this.instance.currentItem[0],
                        this.instance._mouseCapture(h, !0),
                        this.instance._mouseStart(h, !0, !0),
                        this.instance.offset.click.top = i.offset.click.top,
                        this.instance.offset.click.left = i.offset.click.left,
                        this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left,
                        this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top,
                        i._trigger("toSortable", h),
                        i.dropped = this.instance.element,
                        i.currentItem = i.element,
                        this.instance.fromOutside = i),
                        this.instance.currentItem && this.instance._mouseDrag(h)) : this.instance.isOver && (this.instance.isOver = 0,
                        this.instance.cancelHelperRemoval = !0,
                        this.instance.options.revert = !1,
                        this.instance._trigger("out", h, this.instance._uiHash(this.instance)),
                        this.instance._mouseStop(h, !0),
                        this.instance.options.helper = this.instance.options._helper,
                        this.instance.currentItem.remove(),
                        this.instance.placeholder && this.instance.placeholder.remove(),
                        i._trigger("fromSortable", h),
                        i.dropped = !1)
                    })
                }
            }),
            e.ui.plugin.add("draggable", "cursor", {
                start: function() {
                    var h = e("body")
                      , r = e(this).data("ui-draggable").options;
                    h.css("cursor") && (r._cursor = h.css("cursor")),
                    h.css("cursor", r.cursor)
                },
                stop: function() {
                    var h = e(this).data("ui-draggable").options;
                    h._cursor && e("body").css("cursor", h._cursor)
                }
            }),
            e.ui.plugin.add("draggable", "opacity", {
                start: function(h, r) {
                    var i = e(r.helper)
                      , s = e(this).data("ui-draggable").options;
                    i.css("opacity") && (s._opacity = i.css("opacity")),
                    i.css("opacity", s.opacity)
                },
                stop: function(h, r) {
                    var i = e(this).data("ui-draggable").options;
                    i._opacity && e(r.helper).css("opacity", i._opacity)
                }
            }),
            e.ui.plugin.add("draggable", "scroll", {
                start: function() {
                    var h = e(this).data("ui-draggable");
                    h.scrollParent[0] !== document && h.scrollParent[0].tagName !== "HTML" && (h.overflowOffset = h.scrollParent.offset())
                },
                drag: function(h) {
                    var r = e(this).data("ui-draggable")
                      , i = r.options
                      , s = !1;
                    r.scrollParent[0] !== document && r.scrollParent[0].tagName !== "HTML" ? ((!i.axis || i.axis !== "x") && (r.overflowOffset.top + r.scrollParent[0].offsetHeight - h.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop + i.scrollSpeed : h.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop - i.scrollSpeed)),
                    (!i.axis || i.axis !== "y") && (r.overflowOffset.left + r.scrollParent[0].offsetWidth - h.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft + i.scrollSpeed : h.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft - i.scrollSpeed))) : ((!i.axis || i.axis !== "x") && (h.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (h.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed))),
                    (!i.axis || i.axis !== "y") && (h.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (h.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed)))),
                    s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, h)
                }
            }),
            e.ui.plugin.add("draggable", "snap", {
                start: function() {
                    var h = e(this).data("ui-draggable")
                      , r = h.options;
                    h.snapElements = [],
                    e(r.snap.constructor !== String ? r.snap.items || ":data(ui-draggable)" : r.snap).each(function() {
                        var i = e(this)
                          , s = i.offset();
                        this !== h.element[0] && h.snapElements.push({
                            item: this,
                            width: i.outerWidth(),
                            height: i.outerHeight(),
                            top: s.top,
                            left: s.left
                        })
                    })
                },
                drag: function(h, r) {
                    var i, s, n, t, a, o, l, u, c, p, f = e(this).data("ui-draggable"), d = f.options, m = d.snapTolerance, b = r.offset.left, g = b + f.helperProportions.width, v = r.offset.top, y = v + f.helperProportions.height;
                    for (c = f.snapElements.length - 1; c >= 0; c--) {
                        if (a = f.snapElements[c].left,
                        o = a + f.snapElements[c].width,
                        l = f.snapElements[c].top,
                        u = l + f.snapElements[c].height,
                        g < a - m || b > o + m || y < l - m || v > u + m || !e.contains(f.snapElements[c].item.ownerDocument, f.snapElements[c].item)) {
                            f.snapElements[c].snapping && f.options.snap.release && f.options.snap.release.call(f.element, h, e.extend(f._uiHash(), {
                                snapItem: f.snapElements[c].item
                            })),
                            f.snapElements[c].snapping = !1;
                            continue
                        }
                        d.snapMode !== "inner" && (i = Math.abs(l - y) <= m,
                        s = Math.abs(u - v) <= m,
                        n = Math.abs(a - g) <= m,
                        t = Math.abs(o - b) <= m,
                        i && (r.position.top = f._convertPositionTo("relative", {
                            top: l - f.helperProportions.height,
                            left: 0
                        }).top - f.margins.top),
                        s && (r.position.top = f._convertPositionTo("relative", {
                            top: u,
                            left: 0
                        }).top - f.margins.top),
                        n && (r.position.left = f._convertPositionTo("relative", {
                            top: 0,
                            left: a - f.helperProportions.width
                        }).left - f.margins.left),
                        t && (r.position.left = f._convertPositionTo("relative", {
                            top: 0,
                            left: o
                        }).left - f.margins.left)),
                        p = i || s || n || t,
                        d.snapMode !== "outer" && (i = Math.abs(l - v) <= m,
                        s = Math.abs(u - y) <= m,
                        n = Math.abs(a - b) <= m,
                        t = Math.abs(o - g) <= m,
                        i && (r.position.top = f._convertPositionTo("relative", {
                            top: l,
                            left: 0
                        }).top - f.margins.top),
                        s && (r.position.top = f._convertPositionTo("relative", {
                            top: u - f.helperProportions.height,
                            left: 0
                        }).top - f.margins.top),
                        n && (r.position.left = f._convertPositionTo("relative", {
                            top: 0,
                            left: a
                        }).left - f.margins.left),
                        t && (r.position.left = f._convertPositionTo("relative", {
                            top: 0,
                            left: o - f.helperProportions.width
                        }).left - f.margins.left)),
                        !f.snapElements[c].snapping && (i || s || n || t || p) && f.options.snap.snap && f.options.snap.snap.call(f.element, h, e.extend(f._uiHash(), {
                            snapItem: f.snapElements[c].item
                        })),
                        f.snapElements[c].snapping = i || s || n || t || p
                    }
                }
            }),
            e.ui.plugin.add("draggable", "stack", {
                start: function() {
                    var h, r = this.data("ui-draggable").options, i = e.makeArray(e(r.stack)).sort(function(s, n) {
                        return (parseInt(e(s).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                    });
                    i.length && (h = parseInt(e(i[0]).css("zIndex"), 10) || 0,
                    e(i).each(function(s) {
                        e(this).css("zIndex", h + s)
                    }),
                    this.css("zIndex", h + i.length))
                }
            }),
            e.ui.plugin.add("draggable", "zIndex", {
                start: function(h, r) {
                    var i = e(r.helper)
                      , s = e(this).data("ui-draggable").options;
                    i.css("zIndex") && (s._zIndex = i.css("zIndex")),
                    i.css("zIndex", s.zIndex)
                },
                stop: function(h, r) {
                    var i = e(this).data("ui-draggable").options;
                    i._zIndex && e(r.helper).css("zIndex", i._zIndex)
                }
            })
        }(jQuery),
        function(e, I) {
            function h(r, i, s) {
                return r > i && r < i + s
            }
            e.widget("ui.droppable", {
                version: "1.10.3",
                widgetEventPrefix: "drop",
                options: {
                    accept: "*",
                    activeClass: !1,
                    addClasses: !0,
                    greedy: !1,
                    hoverClass: !1,
                    scope: "default",
                    tolerance: "intersect",
                    activate: null,
                    deactivate: null,
                    drop: null,
                    out: null,
                    over: null
                },
                _create: function() {
                    var r = this.options
                      , i = r.accept;
                    this.isover = !1,
                    this.isout = !0,
                    this.accept = e.isFunction(i) ? i : function(s) {
                        return s.is(i)
                    }
                    ,
                    this.proportions = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    },
                    e.ui.ddmanager.droppables[r.scope] = e.ui.ddmanager.droppables[r.scope] || [],
                    e.ui.ddmanager.droppables[r.scope].push(this),
                    r.addClasses && this.element.addClass("ui-droppable")
                },
                _destroy: function() {
                    for (var r = 0, i = e.ui.ddmanager.droppables[this.options.scope]; r < i.length; r++)
                        i[r] === this && i.splice(r, 1);
                    this.element.removeClass("ui-droppable ui-droppable-disabled")
                },
                _setOption: function(r, i) {
                    r === "accept" && (this.accept = e.isFunction(i) ? i : function(s) {
                        return s.is(i)
                    }
                    ),
                    e.Widget.prototype._setOption.apply(this, arguments)
                },
                _activate: function(r) {
                    var i = e.ui.ddmanager.current;
                    this.options.activeClass && this.element.addClass(this.options.activeClass),
                    i && this._trigger("activate", r, this.ui(i))
                },
                _deactivate: function(r) {
                    var i = e.ui.ddmanager.current;
                    this.options.activeClass && this.element.removeClass(this.options.activeClass),
                    i && this._trigger("deactivate", r, this.ui(i))
                },
                _over: function(r) {
                    var i = e.ui.ddmanager.current;
                    !i || (i.currentItem || i.element)[0] === this.element[0] || this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass),
                    this._trigger("over", r, this.ui(i)))
                },
                _out: function(r) {
                    var i = e.ui.ddmanager.current;
                    !i || (i.currentItem || i.element)[0] === this.element[0] || this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
                    this._trigger("out", r, this.ui(i)))
                },
                _drop: function(r, i) {
                    var s = i || e.ui.ddmanager.current
                      , n = !1;
                    return !s || (s.currentItem || s.element)[0] === this.element[0] || (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                        var t = e.data(this, "ui-droppable");
                        if (t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {
                            offset: t.element.offset()
                        }), t.options.tolerance))
                            return n = !0,
                            !1
                    }),
                    n) ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass),
                    this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
                    this._trigger("drop", r, this.ui(s)),
                    this.element) : !1
                },
                ui: function(r) {
                    return {
                        draggable: r.currentItem || r.element,
                        helper: r.helper,
                        position: r.position,
                        offset: r.positionAbs
                    }
                }
            }),
            e.ui.intersect = function(r, i, s) {
                if (!i.offset)
                    return !1;
                var n, t, a = (r.positionAbs || r.position.absolute).left, o = a + r.helperProportions.width, l = (r.positionAbs || r.position.absolute).top, u = l + r.helperProportions.height, c = i.offset.left, p = c + i.proportions.width, f = i.offset.top, d = f + i.proportions.height;
                switch (s) {
                case "fit":
                    return c <= a && o <= p && f <= l && u <= d;
                case "intersect":
                    return c < a + r.helperProportions.width / 2 && o - r.helperProportions.width / 2 < p && f < l + r.helperProportions.height / 2 && u - r.helperProportions.height / 2 < d;
                case "pointer":
                    return n = (r.positionAbs || r.position.absolute).left + (r.clickOffset || r.offset.click).left,
                    t = (r.positionAbs || r.position.absolute).top + (r.clickOffset || r.offset.click).top,
                    h(t, f, i.proportions.height) && h(n, c, i.proportions.width);
                case "touch":
                    return (l >= f && l <= d || u >= f && u <= d || l < f && u > d) && (a >= c && a <= p || o >= c && o <= p || a < c && o > p);
                default:
                    return !1
                }
            }
            ,
            e.ui.ddmanager = {
                current: null,
                droppables: {
                    default: []
                },
                prepareOffsets: function(r, i) {
                    var s, n, t = e.ui.ddmanager.droppables[r.options.scope] || [], a = i ? i.type : null, o = (r.currentItem || r.element).find(":data(ui-droppable)").addBack();
                    t: for (s = 0; s < t.length; s++)
                        if (!(t[s].options.disabled || r && !t[s].accept.call(t[s].element[0], r.currentItem || r.element))) {
                            for (n = 0; n < o.length; n++)
                                if (o[n] === t[s].element[0]) {
                                    t[s].proportions.height = 0;
                                    continue t
                                }
                            t[s].visible = t[s].element.css("display") !== "none",
                            t[s].visible && (a === "mousedown" && t[s]._activate.call(t[s], i),
                            t[s].offset = t[s].element.offset(),
                            t[s].proportions = {
                                width: t[s].element[0].offsetWidth,
                                height: t[s].element[0].offsetHeight
                            })
                        }
                },
                drop: function(r, i) {
                    var s = !1;
                    return e.each((e.ui.ddmanager.droppables[r.options.scope] || []).slice(), function() {
                        this.options && (!this.options.disabled && this.visible && e.ui.intersect(r, this, this.options.tolerance) && (s = this._drop.call(this, i) || s),
                        !this.options.disabled && this.visible && this.accept.call(this.element[0], r.currentItem || r.element) && (this.isout = !0,
                        this.isover = !1,
                        this._deactivate.call(this, i)))
                    }),
                    s
                },
                dragStart: function(r, i) {
                    r.element.parentsUntil("body").bind("scroll.droppable", function() {
                        r.options.refreshPositions || e.ui.ddmanager.prepareOffsets(r, i)
                    })
                },
                drag: function(r, i) {
                    r.options.refreshPositions && e.ui.ddmanager.prepareOffsets(r, i),
                    e.each(e.ui.ddmanager.droppables[r.options.scope] || [], function() {
                        if (!(this.options.disabled || this.greedyChild || !this.visible)) {
                            var s, n, t, a = e.ui.intersect(r, this, this.options.tolerance), o = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                            o && (this.options.greedy && (n = this.options.scope,
                            t = this.element.parents(":data(ui-droppable)").filter(function() {
                                return e.data(this, "ui-droppable").options.scope === n
                            }),
                            t.length && (s = e.data(t[0], "ui-droppable"),
                            s.greedyChild = o === "isover")),
                            s && o === "isover" && (s.isover = !1,
                            s.isout = !0,
                            s._out.call(s, i)),
                            this[o] = !0,
                            this[o === "isout" ? "isover" : "isout"] = !1,
                            this[o === "isover" ? "_over" : "_out"].call(this, i),
                            s && o === "isout" && (s.isout = !1,
                            s.isover = !0,
                            s._over.call(s, i)))
                        }
                    })
                },
                dragStop: function(r, i) {
                    r.element.parentsUntil("body").unbind("scroll.droppable"),
                    r.options.refreshPositions || e.ui.ddmanager.prepareOffsets(r, i)
                }
            }
        }(jQuery),
        function(e, I) {
            function h(i) {
                return parseInt(i, 10) || 0
            }
            function r(i) {
                return !isNaN(parseInt(i, 10))
            }
            e.widget("ui.resizable", e.ui.mouse, {
                version: "1.10.3",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 90,
                    resize: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    var i, s, n, t, a, o = this, l = this.options;
                    if (this.element.addClass("ui-resizable"),
                    e.extend(this, {
                        _aspectRatio: !!l.aspectRatio,
                        aspectRatio: l.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: l.helper || l.ghost || l.animate ? l.helper || "ui-resizable-helper" : null
                    }),
                    this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })),
                    this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")),
                    this.elementIsWrapper = !0,
                    this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }),
                    this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }),
                    this.originalResizeStyle = this.originalElement.css("resize"),
                    this.originalElement.css("resize", "none"),
                    this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })),
                    this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }),
                    this._proportionallyResize()),
                    this.handles = l.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"),
                    this.handles.constructor === String)
                        for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                        i = this.handles.split(","),
                        this.handles = {},
                        s = 0; s < i.length; s++)
                            n = e.trim(i[s]),
                            a = "ui-resizable-" + n,
                            t = e("<div class='ui-resizable-handle " + a + "'></div>"),
                            t.css({
                                zIndex: l.zIndex
                            }),
                            n === "se" && t.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                            this.handles[n] = ".ui-resizable-" + n,
                            this.element.append(t);
                    this._renderAxis = function(u) {
                        var c, p, f, d;
                        u = u || this.element;
                        for (c in this.handles)
                            this.handles[c].constructor === String && (this.handles[c] = e(this.handles[c], this.element).show()),
                            this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (p = e(this.handles[c], this.element),
                            d = /sw|ne|nw|se|n|s/.test(c) ? p.outerHeight() : p.outerWidth(),
                            f = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""),
                            u.css(f, d),
                            this._proportionallyResize()),
                            e(this.handles[c]).length
                    }
                    ,
                    this._renderAxis(this.element),
                    this._handles = e(".ui-resizable-handle", this.element).disableSelection(),
                    this._handles.mouseover(function() {
                        o.resizing || (this.className && (t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                        o.axis = t && t[1] ? t[1] : "se")
                    }),
                    l.autoHide && (this._handles.hide(),
                    e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                        l.disabled || (e(this).removeClass("ui-resizable-autohide"),
                        o._handles.show())
                    }).mouseleave(function() {
                        l.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"),
                        o._handles.hide())
                    })),
                    this._mouseInit()
                },
                _destroy: function() {
                    this._mouseDestroy();
                    var i, s = function(n) {
                        e(n).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                    };
                    return this.elementIsWrapper && (s(this.element),
                    i = this.element,
                    this.originalElement.css({
                        position: i.css("position"),
                        width: i.outerWidth(),
                        height: i.outerHeight(),
                        top: i.css("top"),
                        left: i.css("left")
                    }).insertAfter(i),
                    i.remove()),
                    this.originalElement.css("resize", this.originalResizeStyle),
                    s(this.originalElement),
                    this
                },
                _mouseCapture: function(i) {
                    var s, n, t = !1;
                    for (s in this.handles)
                        n = e(this.handles[s])[0],
                        (n === i.target || e.contains(n, i.target)) && (t = !0);
                    return !this.options.disabled && t
                },
                _mouseStart: function(i) {
                    var s, n, t, a = this.options, o = this.element.position(), l = this.element;
                    return this.resizing = !0,
                    /absolute/.test(l.css("position")) ? l.css({
                        position: "absolute",
                        top: l.css("top"),
                        left: l.css("left")
                    }) : l.is(".ui-draggable") && l.css({
                        position: "absolute",
                        top: o.top,
                        left: o.left
                    }),
                    this._renderProxy(),
                    s = h(this.helper.css("left")),
                    n = h(this.helper.css("top")),
                    a.containment && (s += e(a.containment).scrollLeft() || 0,
                    n += e(a.containment).scrollTop() || 0),
                    this.offset = this.helper.offset(),
                    this.position = {
                        left: s,
                        top: n
                    },
                    this.size = this._helper ? {
                        width: l.outerWidth(),
                        height: l.outerHeight()
                    } : {
                        width: l.width(),
                        height: l.height()
                    },
                    this.originalSize = this._helper ? {
                        width: l.outerWidth(),
                        height: l.outerHeight()
                    } : {
                        width: l.width(),
                        height: l.height()
                    },
                    this.originalPosition = {
                        left: s,
                        top: n
                    },
                    this.sizeDiff = {
                        width: l.outerWidth() - l.width(),
                        height: l.outerHeight() - l.height()
                    },
                    this.originalMousePosition = {
                        left: i.pageX,
                        top: i.pageY
                    },
                    this.aspectRatio = typeof a.aspectRatio == "number" ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
                    t = e(".ui-resizable-" + this.axis).css("cursor"),
                    e("body").css("cursor", t === "auto" ? this.axis + "-resize" : t),
                    l.addClass("ui-resizable-resizing"),
                    this._propagate("start", i),
                    !0
                },
                _mouseDrag: function(i) {
                    var s, n = this.helper, t = {}, a = this.originalMousePosition, o = this.axis, l = this.position.top, u = this.position.left, c = this.size.width, p = this.size.height, f = i.pageX - a.left || 0, d = i.pageY - a.top || 0, m = this._change[o];
                    return m && (s = m.apply(this, [i, f, d]),
                    this._updateVirtualBoundaries(i.shiftKey),
                    (this._aspectRatio || i.shiftKey) && (s = this._updateRatio(s, i)),
                    s = this._respectSize(s, i),
                    this._updateCache(s),
                    this._propagate("resize", i),
                    this.position.top !== l && (t.top = this.position.top + "px"),
                    this.position.left !== u && (t.left = this.position.left + "px"),
                    this.size.width !== c && (t.width = this.size.width + "px"),
                    this.size.height !== p && (t.height = this.size.height + "px"),
                    n.css(t),
                    !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                    e.isEmptyObject(t) || this._trigger("resize", i, this.ui())),
                    !1
                },
                _mouseStop: function(i) {
                    this.resizing = !1;
                    var s, n, t, a, o, l, u, c = this.options, p = this;
                    return this._helper && (s = this._proportionallyResizeElements,
                    n = s.length && /textarea/i.test(s[0].nodeName),
                    t = n && e.ui.hasScroll(s[0], "left") ? 0 : p.sizeDiff.height,
                    a = n ? 0 : p.sizeDiff.width,
                    o = {
                        width: p.helper.width() - a,
                        height: p.helper.height() - t
                    },
                    l = parseInt(p.element.css("left"), 10) + (p.position.left - p.originalPosition.left) || null,
                    u = parseInt(p.element.css("top"), 10) + (p.position.top - p.originalPosition.top) || null,
                    c.animate || this.element.css(e.extend(o, {
                        top: u,
                        left: l
                    })),
                    p.helper.height(p.size.height),
                    p.helper.width(p.size.width),
                    this._helper && !c.animate && this._proportionallyResize()),
                    e("body").css("cursor", "auto"),
                    this.element.removeClass("ui-resizable-resizing"),
                    this._propagate("stop", i),
                    this._helper && this.helper.remove(),
                    !1
                },
                _updateVirtualBoundaries: function(i) {
                    var s, n, t, a, o, l = this.options;
                    o = {
                        minWidth: r(l.minWidth) ? l.minWidth : 0,
                        maxWidth: r(l.maxWidth) ? l.maxWidth : 1 / 0,
                        minHeight: r(l.minHeight) ? l.minHeight : 0,
                        maxHeight: r(l.maxHeight) ? l.maxHeight : 1 / 0
                    },
                    (this._aspectRatio || i) && (s = o.minHeight * this.aspectRatio,
                    t = o.minWidth / this.aspectRatio,
                    n = o.maxHeight * this.aspectRatio,
                    a = o.maxWidth / this.aspectRatio,
                    s > o.minWidth && (o.minWidth = s),
                    t > o.minHeight && (o.minHeight = t),
                    n < o.maxWidth && (o.maxWidth = n),
                    a < o.maxHeight && (o.maxHeight = a)),
                    this._vBoundaries = o
                },
                _updateCache: function(i) {
                    this.offset = this.helper.offset(),
                    r(i.left) && (this.position.left = i.left),
                    r(i.top) && (this.position.top = i.top),
                    r(i.height) && (this.size.height = i.height),
                    r(i.width) && (this.size.width = i.width)
                },
                _updateRatio: function(i) {
                    var s = this.position
                      , n = this.size
                      , t = this.axis;
                    return r(i.height) ? i.width = i.height * this.aspectRatio : r(i.width) && (i.height = i.width / this.aspectRatio),
                    t === "sw" && (i.left = s.left + (n.width - i.width),
                    i.top = null),
                    t === "nw" && (i.top = s.top + (n.height - i.height),
                    i.left = s.left + (n.width - i.width)),
                    i
                },
                _respectSize: function(i) {
                    var s = this._vBoundaries
                      , n = this.axis
                      , t = r(i.width) && s.maxWidth && s.maxWidth < i.width
                      , a = r(i.height) && s.maxHeight && s.maxHeight < i.height
                      , o = r(i.width) && s.minWidth && s.minWidth > i.width
                      , l = r(i.height) && s.minHeight && s.minHeight > i.height
                      , u = this.originalPosition.left + this.originalSize.width
                      , c = this.position.top + this.size.height
                      , p = /sw|nw|w/.test(n)
                      , f = /nw|ne|n/.test(n);
                    return o && (i.width = s.minWidth),
                    l && (i.height = s.minHeight),
                    t && (i.width = s.maxWidth),
                    a && (i.height = s.maxHeight),
                    o && p && (i.left = u - s.minWidth),
                    t && p && (i.left = u - s.maxWidth),
                    l && f && (i.top = c - s.minHeight),
                    a && f && (i.top = c - s.maxHeight),
                    !i.width && !i.height && !i.left && i.top ? i.top = null : !i.width && !i.height && !i.top && i.left && (i.left = null),
                    i
                },
                _proportionallyResize: function() {
                    if (this._proportionallyResizeElements.length) {
                        var i, s, n, t, a, o = this.helper || this.element;
                        for (i = 0; i < this._proportionallyResizeElements.length; i++) {
                            if (a = this._proportionallyResizeElements[i],
                            !this.borderDif)
                                for (this.borderDif = [],
                                n = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")],
                                t = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")],
                                s = 0; s < n.length; s++)
                                    this.borderDif[s] = (parseInt(n[s], 10) || 0) + (parseInt(t[s], 10) || 0);
                            a.css({
                                height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
                                width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
                            })
                        }
                    }
                },
                _renderProxy: function() {
                    var i = this.element
                      , s = this.options;
                    this.elementOffset = i.offset(),
                    this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"),
                    this.helper.addClass(this._helper).css({
                        width: this.element.outerWidth() - 1,
                        height: this.element.outerHeight() - 1,
                        position: "absolute",
                        left: this.elementOffset.left + "px",
                        top: this.elementOffset.top + "px",
                        zIndex: ++s.zIndex
                    }),
                    this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                },
                _change: {
                    e: function(i, s) {
                        return {
                            width: this.originalSize.width + s
                        }
                    },
                    w: function(i, s) {
                        var n = this.originalSize
                          , t = this.originalPosition;
                        return {
                            left: t.left + s,
                            width: n.width - s
                        }
                    },
                    n: function(i, s, n) {
                        var t = this.originalSize
                          , a = this.originalPosition;
                        return {
                            top: a.top + n,
                            height: t.height - n
                        }
                    },
                    s: function(i, s, n) {
                        return {
                            height: this.originalSize.height + n
                        }
                    },
                    se: function(i, s, n) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [i, s, n]))
                    },
                    sw: function(i, s, n) {
                        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [i, s, n]))
                    },
                    ne: function(i, s, n) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [i, s, n]))
                    },
                    nw: function(i, s, n) {
                        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [i, s, n]))
                    }
                },
                _propagate: function(i, s) {
                    e.ui.plugin.call(this, i, [s, this.ui()]),
                    i !== "resize" && this._trigger(i, s, this.ui())
                },
                plugins: {},
                ui: function() {
                    return {
                        originalElement: this.originalElement,
                        element: this.element,
                        helper: this.helper,
                        position: this.position,
                        size: this.size,
                        originalSize: this.originalSize,
                        originalPosition: this.originalPosition
                    }
                }
            }),
            e.ui.plugin.add("resizable", "animate", {
                stop: function(i) {
                    var s = e(this).data("ui-resizable")
                      , n = s.options
                      , t = s._proportionallyResizeElements
                      , a = t.length && /textarea/i.test(t[0].nodeName)
                      , o = a && e.ui.hasScroll(t[0], "left") ? 0 : s.sizeDiff.height
                      , l = a ? 0 : s.sizeDiff.width
                      , u = {
                        width: s.size.width - l,
                        height: s.size.height - o
                    }
                      , c = parseInt(s.element.css("left"), 10) + (s.position.left - s.originalPosition.left) || null
                      , p = parseInt(s.element.css("top"), 10) + (s.position.top - s.originalPosition.top) || null;
                    s.element.animate(e.extend(u, p && c ? {
                        top: p,
                        left: c
                    } : {}), {
                        duration: n.animateDuration,
                        easing: n.animateEasing,
                        step: function() {
                            var f = {
                                width: parseInt(s.element.css("width"), 10),
                                height: parseInt(s.element.css("height"), 10),
                                top: parseInt(s.element.css("top"), 10),
                                left: parseInt(s.element.css("left"), 10)
                            };
                            t && t.length && e(t[0]).css({
                                width: f.width,
                                height: f.height
                            }),
                            s._updateCache(f),
                            s._propagate("resize", i)
                        }
                    })
                }
            }),
            e.ui.plugin.add("resizable", "containment", {
                start: function() {
                    var i, s, n, t, a, o, l, u = e(this).data("ui-resizable"), c = u.options, p = u.element, f = c.containment, d = f instanceof e ? f.get(0) : /parent/.test(f) ? p.parent().get(0) : f;
                    d && (u.containerElement = e(d),
                    /document/.test(f) || f === document ? (u.containerOffset = {
                        left: 0,
                        top: 0
                    },
                    u.containerPosition = {
                        left: 0,
                        top: 0
                    },
                    u.parentData = {
                        element: e(document),
                        left: 0,
                        top: 0,
                        width: e(document).width(),
                        height: e(document).height() || document.body.parentNode.scrollHeight
                    }) : (i = e(d),
                    s = [],
                    e(["Top", "Right", "Left", "Bottom"]).each(function(m, b) {
                        s[m] = h(i.css("padding" + b))
                    }),
                    u.containerOffset = i.offset(),
                    u.containerPosition = i.position(),
                    u.containerSize = {
                        height: i.innerHeight() - s[3],
                        width: i.innerWidth() - s[1]
                    },
                    n = u.containerOffset,
                    t = u.containerSize.height,
                    a = u.containerSize.width,
                    o = e.ui.hasScroll(d, "left") ? d.scrollWidth : a,
                    l = e.ui.hasScroll(d) ? d.scrollHeight : t,
                    u.parentData = {
                        element: d,
                        left: n.left,
                        top: n.top,
                        width: o,
                        height: l
                    }))
                },
                resize: function(i) {
                    var s, n, t, a, o = e(this).data("ui-resizable"), l = o.options, u = o.containerOffset, c = o.position, p = o._aspectRatio || i.shiftKey, f = {
                        top: 0,
                        left: 0
                    }, d = o.containerElement;
                    d[0] !== document && /static/.test(d.css("position")) && (f = u),
                    c.left < (o._helper ? u.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - u.left : o.position.left - f.left),
                    p && (o.size.height = o.size.width / o.aspectRatio),
                    o.position.left = l.helper ? u.left : 0),
                    c.top < (o._helper ? u.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - u.top : o.position.top),
                    p && (o.size.width = o.size.height * o.aspectRatio),
                    o.position.top = o._helper ? u.top : 0),
                    o.offset.left = o.parentData.left + o.position.left,
                    o.offset.top = o.parentData.top + o.position.top,
                    s = Math.abs((o._helper,
                    o.offset.left - f.left + o.sizeDiff.width)),
                    n = Math.abs((o._helper ? o.offset.top - f.top : o.offset.top - u.top) + o.sizeDiff.height),
                    t = o.containerElement.get(0) === o.element.parent().get(0),
                    a = /relative|absolute/.test(o.containerElement.css("position")),
                    t && a && (s -= o.parentData.left),
                    s + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - s,
                    p && (o.size.height = o.size.width / o.aspectRatio)),
                    n + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - n,
                    p && (o.size.width = o.size.height * o.aspectRatio))
                },
                stop: function() {
                    var i = e(this).data("ui-resizable")
                      , s = i.options
                      , n = i.containerOffset
                      , t = i.containerPosition
                      , a = i.containerElement
                      , o = e(i.helper)
                      , l = o.offset()
                      , u = o.outerWidth() - i.sizeDiff.width
                      , c = o.outerHeight() - i.sizeDiff.height;
                    i._helper && !s.animate && /relative/.test(a.css("position")) && e(this).css({
                        left: l.left - t.left - n.left,
                        width: u,
                        height: c
                    }),
                    i._helper && !s.animate && /static/.test(a.css("position")) && e(this).css({
                        left: l.left - t.left - n.left,
                        width: u,
                        height: c
                    })
                }
            }),
            e.ui.plugin.add("resizable", "alsoResize", {
                start: function() {
                    var i = e(this).data("ui-resizable")
                      , s = i.options
                      , n = function(t) {
                        e(t).each(function() {
                            var a = e(this);
                            a.data("ui-resizable-alsoresize", {
                                width: parseInt(a.width(), 10),
                                height: parseInt(a.height(), 10),
                                left: parseInt(a.css("left"), 10),
                                top: parseInt(a.css("top"), 10)
                            })
                        })
                    };
                    typeof s.alsoResize == "object" && !s.alsoResize.parentNode ? s.alsoResize.length ? (s.alsoResize = s.alsoResize[0],
                    n(s.alsoResize)) : e.each(s.alsoResize, function(t) {
                        n(t)
                    }) : n(s.alsoResize)
                },
                resize: function(i, s) {
                    var n = e(this).data("ui-resizable")
                      , t = n.options
                      , a = n.originalSize
                      , o = n.originalPosition
                      , l = {
                        height: n.size.height - a.height || 0,
                        width: n.size.width - a.width || 0,
                        top: n.position.top - o.top || 0,
                        left: n.position.left - o.left || 0
                    }
                      , u = function(c, p) {
                        e(c).each(function() {
                            var f = e(this)
                              , d = e(this).data("ui-resizable-alsoresize")
                              , m = {}
                              , b = p && p.length ? p : f.parents(s.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            e.each(b, function(g, v) {
                                var y = (d[v] || 0) + (l[v] || 0);
                                y && y >= 0 && (m[v] = y || null)
                            }),
                            f.css(m)
                        })
                    };
                    typeof t.alsoResize == "object" && !t.alsoResize.nodeType ? e.each(t.alsoResize, function(c, p) {
                        u(c, p)
                    }) : u(t.alsoResize)
                },
                stop: function() {
                    e(this).removeData("resizable-alsoresize")
                }
            }),
            e.ui.plugin.add("resizable", "ghost", {
                start: function() {
                    var i = e(this).data("ui-resizable")
                      , s = i.options
                      , n = i.size;
                    i.ghost = i.originalElement.clone(),
                    i.ghost.css({
                        opacity: .25,
                        display: "block",
                        position: "relative",
                        height: n.height,
                        width: n.width,
                        margin: 0,
                        left: 0,
                        top: 0
                    }).addClass("ui-resizable-ghost").addClass(typeof s.ghost == "string" ? s.ghost : ""),
                    i.ghost.appendTo(i.helper)
                },
                resize: function() {
                    var i = e(this).data("ui-resizable");
                    i.ghost && i.ghost.css({
                        position: "relative",
                        height: i.size.height,
                        width: i.size.width
                    })
                },
                stop: function() {
                    var i = e(this).data("ui-resizable");
                    i.ghost && i.helper && i.helper.get(0).removeChild(i.ghost.get(0))
                }
            }),
            e.ui.plugin.add("resizable", "grid", {
                resize: function() {
                    var i = e(this).data("ui-resizable")
                      , s = i.options
                      , n = i.size
                      , t = i.originalSize
                      , a = i.originalPosition
                      , o = i.axis
                      , l = typeof s.grid == "number" ? [s.grid, s.grid] : s.grid
                      , u = l[0] || 1
                      , c = l[1] || 1
                      , p = Math.round((n.width - t.width) / u) * u
                      , f = Math.round((n.height - t.height) / c) * c
                      , d = t.width + p
                      , m = t.height + f
                      , b = s.maxWidth && s.maxWidth < d
                      , g = s.maxHeight && s.maxHeight < m
                      , v = s.minWidth && s.minWidth > d
                      , y = s.minHeight && s.minHeight > m;
                    s.grid = l,
                    v && (d = d + u),
                    y && (m = m + c),
                    b && (d = d - u),
                    g && (m = m - c),
                    /^(se|s|e)$/.test(o) ? (i.size.width = d,
                    i.size.height = m) : /^(ne)$/.test(o) ? (i.size.width = d,
                    i.size.height = m,
                    i.position.top = a.top - f) : /^(sw)$/.test(o) ? (i.size.width = d,
                    i.size.height = m,
                    i.position.left = a.left - p) : (i.size.width = d,
                    i.size.height = m,
                    i.position.top = a.top - f,
                    i.position.left = a.left - p)
                }
            })
        }(jQuery),
        function(e, I) {
            e.widget("ui.selectable", e.ui.mouse, {
                version: "1.10.3",
                options: {
                    appendTo: "body",
                    autoRefresh: !0,
                    distance: 0,
                    filter: "*",
                    tolerance: "touch",
                    selected: null,
                    selecting: null,
                    start: null,
                    stop: null,
                    unselected: null,
                    unselecting: null
                },
                _create: function() {
                    var h, r = this;
                    this.element.addClass("ui-selectable"),
                    this.dragged = !1,
                    this.refresh = function() {
                        h = e(r.options.filter, r.element[0]),
                        h.addClass("ui-selectee"),
                        h.each(function() {
                            var i = e(this)
                              , s = i.offset();
                            e.data(this, "selectable-item", {
                                element: this,
                                $element: i,
                                left: s.left,
                                top: s.top,
                                right: s.left + i.outerWidth(),
                                bottom: s.top + i.outerHeight(),
                                startselected: !1,
                                selected: i.hasClass("ui-selected"),
                                selecting: i.hasClass("ui-selecting"),
                                unselecting: i.hasClass("ui-unselecting")
                            })
                        })
                    }
                    ,
                    this.refresh(),
                    this.selectees = h.addClass("ui-selectee"),
                    this._mouseInit(),
                    this.helper = e("<div class='ui-selectable-helper'></div>")
                },
                _destroy: function() {
                    this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
                    this.element.removeClass("ui-selectable ui-selectable-disabled"),
                    this._mouseDestroy()
                },
                _mouseStart: function(h) {
                    var r = this
                      , i = this.options;
                    this.opos = [h.pageX, h.pageY],
                    !this.options.disabled && (this.selectees = e(i.filter, this.element[0]),
                    this._trigger("start", h),
                    e(i.appendTo).append(this.helper),
                    this.helper.css({
                        left: h.pageX,
                        top: h.pageY,
                        width: 0,
                        height: 0
                    }),
                    i.autoRefresh && this.refresh(),
                    this.selectees.filter(".ui-selected").each(function() {
                        var s = e.data(this, "selectable-item");
                        s.startselected = !0,
                        !h.metaKey && !h.ctrlKey && (s.$element.removeClass("ui-selected"),
                        s.selected = !1,
                        s.$element.addClass("ui-unselecting"),
                        s.unselecting = !0,
                        r._trigger("unselecting", h, {
                            unselecting: s.element
                        }))
                    }),
                    e(h.target).parents().addBack().each(function() {
                        var s, n = e.data(this, "selectable-item");
                        if (n)
                            return s = !h.metaKey && !h.ctrlKey || !n.$element.hasClass("ui-selected"),
                            n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"),
                            n.unselecting = !s,
                            n.selecting = s,
                            n.selected = s,
                            s ? r._trigger("selecting", h, {
                                selecting: n.element
                            }) : r._trigger("unselecting", h, {
                                unselecting: n.element
                            }),
                            !1
                    }))
                },
                _mouseDrag: function(h) {
                    if (this.dragged = !0,
                    !this.options.disabled) {
                        var r, i = this, s = this.options, n = this.opos[0], t = this.opos[1], a = h.pageX, o = h.pageY;
                        return n > a && (r = a,
                        a = n,
                        n = r),
                        t > o && (r = o,
                        o = t,
                        t = r),
                        this.helper.css({
                            left: n,
                            top: t,
                            width: a - n,
                            height: o - t
                        }),
                        this.selectees.each(function() {
                            var l = e.data(this, "selectable-item")
                              , u = !1;
                            !l || l.element === i.element[0] || (s.tolerance === "touch" ? u = !(l.left > a || l.right < n || l.top > o || l.bottom < t) : s.tolerance === "fit" && (u = l.left > n && l.right < a && l.top > t && l.bottom < o),
                            u ? (l.selected && (l.$element.removeClass("ui-selected"),
                            l.selected = !1),
                            l.unselecting && (l.$element.removeClass("ui-unselecting"),
                            l.unselecting = !1),
                            l.selecting || (l.$element.addClass("ui-selecting"),
                            l.selecting = !0,
                            i._trigger("selecting", h, {
                                selecting: l.element
                            }))) : (l.selecting && ((h.metaKey || h.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"),
                            l.selecting = !1,
                            l.$element.addClass("ui-selected"),
                            l.selected = !0) : (l.$element.removeClass("ui-selecting"),
                            l.selecting = !1,
                            l.startselected && (l.$element.addClass("ui-unselecting"),
                            l.unselecting = !0),
                            i._trigger("unselecting", h, {
                                unselecting: l.element
                            }))),
                            l.selected && !h.metaKey && !h.ctrlKey && !l.startselected && (l.$element.removeClass("ui-selected"),
                            l.selected = !1,
                            l.$element.addClass("ui-unselecting"),
                            l.unselecting = !0,
                            i._trigger("unselecting", h, {
                                unselecting: l.element
                            }))))
                        }),
                        !1
                    }
                },
                _mouseStop: function(h) {
                    var r = this;
                    return this.dragged = !1,
                    e(".ui-unselecting", this.element[0]).each(function() {
                        var i = e.data(this, "selectable-item");
                        i.$element.removeClass("ui-unselecting"),
                        i.unselecting = !1,
                        i.startselected = !1,
                        r._trigger("unselected", h, {
                            unselected: i.element
                        })
                    }),
                    e(".ui-selecting", this.element[0]).each(function() {
                        var i = e.data(this, "selectable-item");
                        i.$element.removeClass("ui-selecting").addClass("ui-selected"),
                        i.selecting = !1,
                        i.selected = !0,
                        i.startselected = !0,
                        r._trigger("selected", h, {
                            selected: i.element
                        })
                    }),
                    this._trigger("stop", h),
                    this.helper.remove(),
                    !1
                }
            })
        }(jQuery),
        function(e, I) {
            function h(i, s, n) {
                return i > s && i < s + n
            }
            function r(i) {
                return /left|right/.test(i.css("float")) || /inline|table-cell/.test(i.css("display"))
            }
            e.widget("ui.sortable", e.ui.mouse, {
                version: "1.10.3",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3,
                    activate: null,
                    beforeStop: null,
                    change: null,
                    deactivate: null,
                    out: null,
                    over: null,
                    receive: null,
                    remove: null,
                    sort: null,
                    start: null,
                    stop: null,
                    update: null
                },
                _create: function() {
                    var i = this.options;
                    this.containerCache = {},
                    this.element.addClass("ui-sortable"),
                    this.refresh(),
                    this.floating = this.items.length ? i.axis === "x" || r(this.items[0].item) : !1,
                    this.offset = this.element.offset(),
                    this._mouseInit(),
                    this.ready = !0
                },
                _destroy: function() {
                    this.element.removeClass("ui-sortable ui-sortable-disabled"),
                    this._mouseDestroy();
                    for (var i = this.items.length - 1; i >= 0; i--)
                        this.items[i].item.removeData(this.widgetName + "-item");
                    return this
                },
                _setOption: function(i, s) {
                    i === "disabled" ? (this.options[i] = s,
                    this.widget().toggleClass("ui-sortable-disabled", !!s)) : e.Widget.prototype._setOption.apply(this, arguments)
                },
                _mouseCapture: function(i, s) {
                    var n = null
                      , t = !1
                      , a = this;
                    return this.reverting || this.options.disabled || this.options.type === "static" || (this._refreshItems(i),
                    e(i.target).parents().each(function() {
                        if (e.data(this, a.widgetName + "-item") === a)
                            return n = e(this),
                            !1
                    }),
                    e.data(i.target, a.widgetName + "-item") === a && (n = e(i.target)),
                    !n) || this.options.handle && !s && (e(this.options.handle, n).find("*").addBack().each(function() {
                        this === i.target && (t = !0)
                    }),
                    !t) ? !1 : (this.currentItem = n,
                    this._removeCurrentsFromItems(),
                    !0)
                },
                _mouseStart: function(i, s, n) {
                    var t, a, o = this.options;
                    if (this.currentContainer = this,
                    this.refreshPositions(),
                    this.helper = this._createHelper(i),
                    this._cacheHelperProportions(),
                    this._cacheMargins(),
                    this.scrollParent = this.helper.scrollParent(),
                    this.offset = this.currentItem.offset(),
                    this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    },
                    e.extend(this.offset, {
                        click: {
                            left: i.pageX - this.offset.left,
                            top: i.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }),
                    this.helper.css("position", "absolute"),
                    this.cssPosition = this.helper.css("position"),
                    this.originalPosition = this._generatePosition(i),
                    this.originalPageX = i.pageX,
                    this.originalPageY = i.pageY,
                    o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
                    this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    },
                    this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
                    this._createPlaceholder(),
                    o.containment && this._setContainment(),
                    o.cursor && o.cursor !== "auto" && (a = this.document.find("body"),
                    this.storedCursor = a.css("cursor"),
                    a.css("cursor", o.cursor),
                    this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)),
                    o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
                    this.helper.css("opacity", o.opacity)),
                    o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
                    this.helper.css("zIndex", o.zIndex)),
                    this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()),
                    this._trigger("start", i, this._uiHash()),
                    this._preserveHelperProportions || this._cacheHelperProportions(),
                    !n)
                        for (t = this.containers.length - 1; t >= 0; t--)
                            this.containers[t]._trigger("activate", i, this._uiHash(this));
                    return e.ui.ddmanager && (e.ui.ddmanager.current = this),
                    e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, i),
                    this.dragging = !0,
                    this.helper.addClass("ui-sortable-helper"),
                    this._mouseDrag(i),
                    !0
                },
                _mouseDrag: function(i) {
                    var s, n, t, a, o = this.options, l = !1;
                    for (this.position = this._generatePosition(i),
                    this.positionAbs = this._convertPositionTo("absolute"),
                    this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
                    this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - i.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = l = this.scrollParent[0].scrollTop + o.scrollSpeed : i.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = l = this.scrollParent[0].scrollTop - o.scrollSpeed),
                    this.overflowOffset.left + this.scrollParent[0].offsetWidth - i.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = l = this.scrollParent[0].scrollLeft + o.scrollSpeed : i.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = l = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (i.pageY - e(document).scrollTop() < o.scrollSensitivity ? l = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (i.pageY - e(document).scrollTop()) < o.scrollSensitivity && (l = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)),
                    i.pageX - e(document).scrollLeft() < o.scrollSensitivity ? l = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (i.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (l = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))),
                    l !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, i)),
                    this.positionAbs = this._convertPositionTo("absolute"),
                    (!this.options.axis || this.options.axis !== "y") && (this.helper[0].style.left = this.position.left + "px"),
                    (!this.options.axis || this.options.axis !== "x") && (this.helper[0].style.top = this.position.top + "px"),
                    s = this.items.length - 1; s >= 0; s--)
                        if (n = this.items[s],
                        t = n.item[0],
                        a = this._intersectsWithPointer(n),
                        !!a && n.instance === this.currentContainer && t !== this.currentItem[0] && this.placeholder[a === 1 ? "next" : "prev"]()[0] !== t && !e.contains(this.placeholder[0], t) && (this.options.type !== "semi-dynamic" || !e.contains(this.element[0], t))) {
                            if (this.direction = a === 1 ? "down" : "up",
                            this.options.tolerance === "pointer" || this._intersectsWithSides(n))
                                this._rearrange(i, n);
                            else
                                break;
                            this._trigger("change", i, this._uiHash());
                            break
                        }
                    return this._contactContainers(i),
                    e.ui.ddmanager && e.ui.ddmanager.drag(this, i),
                    this._trigger("sort", i, this._uiHash()),
                    this.lastPositionAbs = this.positionAbs,
                    !1
                },
                _mouseStop: function(i, s) {
                    if (i) {
                        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, i),
                        this.options.revert) {
                            var n = this
                              , t = this.placeholder.offset()
                              , a = this.options.axis
                              , o = {};
                            (!a || a === "x") && (o.left = t.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
                            (!a || a === "y") && (o.top = t.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
                            this.reverting = !0,
                            e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                                n._clear(i)
                            })
                        } else
                            this._clear(i, s);
                        return !1
                    }
                },
                cancel: function() {
                    if (this.dragging) {
                        this._mouseUp({
                            target: null
                        }),
                        this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                        for (var i = this.containers.length - 1; i >= 0; i--)
                            this.containers[i]._trigger("deactivate", null, this._uiHash(this)),
                            this.containers[i].containerCache.over && (this.containers[i]._trigger("out", null, this._uiHash(this)),
                            this.containers[i].containerCache.over = 0)
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                    this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(),
                    e.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }),
                    this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)),
                    this
                },
                serialize: function(i) {
                    var s = this._getItemsAsjQuery(i && i.connected)
                      , n = [];
                    return i = i || {},
                    e(s).each(function() {
                        var t = (e(i.item || this).attr(i.attribute || "id") || "").match(i.expression || /(.+)[\-=_](.+)/);
                        t && n.push((i.key || t[1] + "[]") + "=" + (i.key && i.expression ? t[1] : t[2]))
                    }),
                    !n.length && i.key && n.push(i.key + "="),
                    n.join("&")
                },
                toArray: function(i) {
                    var s = this._getItemsAsjQuery(i && i.connected)
                      , n = [];
                    return i = i || {},
                    s.each(function() {
                        n.push(e(i.item || this).attr(i.attribute || "id") || "")
                    }),
                    n
                },
                _intersectsWith: function(i) {
                    var s = this.positionAbs.left
                      , n = s + this.helperProportions.width
                      , t = this.positionAbs.top
                      , a = t + this.helperProportions.height
                      , o = i.left
                      , l = o + i.width
                      , u = i.top
                      , c = u + i.height
                      , p = this.offset.click.top
                      , f = this.offset.click.left
                      , d = this.options.axis === "x" || t + p > u && t + p < c
                      , m = this.options.axis === "y" || s + f > o && s + f < l
                      , b = d && m;
                    return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > i[this.floating ? "width" : "height"] ? b : o < s + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < l && u < t + this.helperProportions.height / 2 && a - this.helperProportions.height / 2 < c
                },
                _intersectsWithPointer: function(i) {
                    var s = this.options.axis === "x" || h(this.positionAbs.top + this.offset.click.top, i.top, i.height)
                      , n = this.options.axis === "y" || h(this.positionAbs.left + this.offset.click.left, i.left, i.width)
                      , t = s && n
                      , a = this._getDragVerticalDirection()
                      , o = this._getDragHorizontalDirection();
                    return t ? this.floating ? o && o === "right" || a === "down" ? 2 : 1 : a && (a === "down" ? 2 : 1) : !1
                },
                _intersectsWithSides: function(i) {
                    var s = h(this.positionAbs.top + this.offset.click.top, i.top + i.height / 2, i.height)
                      , n = h(this.positionAbs.left + this.offset.click.left, i.left + i.width / 2, i.width)
                      , t = this._getDragVerticalDirection()
                      , a = this._getDragHorizontalDirection();
                    return this.floating && a ? a === "right" && n || a === "left" && !n : t && (t === "down" && s || t === "up" && !s)
                },
                _getDragVerticalDirection: function() {
                    var i = this.positionAbs.top - this.lastPositionAbs.top;
                    return i !== 0 && (i > 0 ? "down" : "up")
                },
                _getDragHorizontalDirection: function() {
                    var i = this.positionAbs.left - this.lastPositionAbs.left;
                    return i !== 0 && (i > 0 ? "right" : "left")
                },
                refresh: function(i) {
                    return this._refreshItems(i),
                    this.refreshPositions(),
                    this
                },
                _connectWith: function() {
                    var i = this.options;
                    return i.connectWith.constructor === String ? [i.connectWith] : i.connectWith
                },
                _getItemsAsjQuery: function(i) {
                    var s, n, t, a, o = [], l = [], u = this._connectWith();
                    if (u && i)
                        for (s = u.length - 1; s >= 0; s--)
                            for (t = e(u[s]),
                            n = t.length - 1; n >= 0; n--)
                                a = e.data(t[n], this.widgetFullName),
                                a && a !== this && !a.options.disabled && l.push([e.isFunction(a.options.items) ? a.options.items.call(a.element) : e(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                    for (l.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
                    s = l.length - 1; s >= 0; s--)
                        l[s][0].each(function() {
                            o.push(this)
                        });
                    return e(o)
                },
                _removeCurrentsFromItems: function() {
                    var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = e.grep(this.items, function(s) {
                        for (var n = 0; n < i.length; n++)
                            if (i[n] === s.item[0])
                                return !1;
                        return !0
                    })
                },
                _refreshItems: function(i) {
                    this.items = [],
                    this.containers = [this];
                    var s, n, t, a, o, l, u, c, p = this.items, f = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], i, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]], d = this._connectWith();
                    if (d && this.ready)
                        for (s = d.length - 1; s >= 0; s--)
                            for (t = e(d[s]),
                            n = t.length - 1; n >= 0; n--)
                                a = e.data(t[n], this.widgetFullName),
                                a && a !== this && !a.options.disabled && (f.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], i, {
                                    item: this.currentItem
                                }) : e(a.options.items, a.element), a]),
                                this.containers.push(a));
                    for (s = f.length - 1; s >= 0; s--)
                        for (o = f[s][1],
                        l = f[s][0],
                        n = 0,
                        c = l.length; n < c; n++)
                            u = e(l[n]),
                            u.data(this.widgetName + "-item", o),
                            p.push({
                                item: u,
                                instance: o,
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            })
                },
                refreshPositions: function(i) {
                    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                    var s, n, t, a;
                    for (s = this.items.length - 1; s >= 0; s--)
                        n = this.items[s],
                        !(n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0]) && (t = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item,
                        i || (n.width = t.outerWidth(),
                        n.height = t.outerHeight()),
                        a = t.offset(),
                        n.left = a.left,
                        n.top = a.top);
                    if (this.options.custom && this.options.custom.refreshContainers)
                        this.options.custom.refreshContainers.call(this);
                    else
                        for (s = this.containers.length - 1; s >= 0; s--)
                            a = this.containers[s].element.offset(),
                            this.containers[s].containerCache.left = a.left,
                            this.containers[s].containerCache.top = a.top,
                            this.containers[s].containerCache.width = this.containers[s].element.outerWidth(),
                            this.containers[s].containerCache.height = this.containers[s].element.outerHeight();
                    return this
                },
                _createPlaceholder: function(i) {
                    i = i || this;
                    var s, n = i.options;
                    (!n.placeholder || n.placeholder.constructor === String) && (s = n.placeholder,
                    n.placeholder = {
                        element: function() {
                            var t = i.currentItem[0].nodeName.toLowerCase()
                              , a = e("<" + t + ">", i.document[0]).addClass(s || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                            return t === "tr" ? i.currentItem.children().each(function() {
                                e("<td>&#160;</td>", i.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(a)
                            }) : t === "img" && a.attr("src", i.currentItem.attr("src")),
                            s || a.css("visibility", "hidden"),
                            a
                        },
                        update: function(t, a) {
                            s && !n.forcePlaceholderSize || (a.height() || a.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)),
                            a.width() || a.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }),
                    i.placeholder = e(n.placeholder.element.call(i.element, i.currentItem)),
                    i.currentItem.after(i.placeholder),
                    n.placeholder.update(i, i.placeholder)
                },
                _contactContainers: function(i) {
                    var s, n, t, a, o, l, u, c, p, f, d = null, m = null;
                    for (s = this.containers.length - 1; s >= 0; s--)
                        if (!e.contains(this.currentItem[0], this.containers[s].element[0]))
                            if (this._intersectsWith(this.containers[s].containerCache)) {
                                if (d && e.contains(this.containers[s].element[0], d.element[0]))
                                    continue;
                                d = this.containers[s],
                                m = s
                            } else
                                this.containers[s].containerCache.over && (this.containers[s]._trigger("out", i, this._uiHash(this)),
                                this.containers[s].containerCache.over = 0);
                    if (d)
                        if (this.containers.length === 1)
                            this.containers[m].containerCache.over || (this.containers[m]._trigger("over", i, this._uiHash(this)),
                            this.containers[m].containerCache.over = 1);
                        else {
                            for (t = 1e4,
                            a = null,
                            f = d.floating || r(this.currentItem),
                            o = f ? "left" : "top",
                            l = f ? "width" : "height",
                            u = this.positionAbs[o] + this.offset.click[o],
                            n = this.items.length - 1; n >= 0; n--)
                                e.contains(this.containers[m].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (f && !h(this.positionAbs.top + this.offset.click.top, this.items[n].top, this.items[n].height) || (c = this.items[n].item.offset()[o],
                                p = !1,
                                Math.abs(c - u) > Math.abs(c + this.items[n][l] - u) && (p = !0,
                                c += this.items[n][l]),
                                Math.abs(c - u) < t && (t = Math.abs(c - u),
                                a = this.items[n],
                                this.direction = p ? "up" : "down")));
                            if (!a && !this.options.dropOnEmpty || this.currentContainer === this.containers[m])
                                return;
                            a ? this._rearrange(i, a, null, !0) : this._rearrange(i, null, this.containers[m].element, !0),
                            this._trigger("change", i, this._uiHash()),
                            this.containers[m]._trigger("change", i, this._uiHash(this)),
                            this.currentContainer = this.containers[m],
                            this.options.placeholder.update(this.currentContainer, this.placeholder),
                            this.containers[m]._trigger("over", i, this._uiHash(this)),
                            this.containers[m].containerCache.over = 1
                        }
                },
                _createHelper: function(i) {
                    var s = this.options
                      , n = e.isFunction(s.helper) ? e(s.helper.apply(this.element[0], [i, this.currentItem])) : s.helper === "clone" ? this.currentItem.clone() : this.currentItem;
                    return n.parents("body").length || e(s.appendTo !== "parent" ? s.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]),
                    n[0] === this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }),
                    (!n[0].style.width || s.forceHelperSize) && n.width(this.currentItem.width()),
                    (!n[0].style.height || s.forceHelperSize) && n.height(this.currentItem.height()),
                    n
                },
                _adjustOffsetFromHelper: function(i) {
                    typeof i == "string" && (i = i.split(" ")),
                    e.isArray(i) && (i = {
                        left: +i[0],
                        top: +i[1] || 0
                    }),
                    "left"in i && (this.offset.click.left = i.left + this.margins.left),
                    "right"in i && (this.offset.click.left = this.helperProportions.width - i.right + this.margins.left),
                    "top"in i && (this.offset.click.top = i.top + this.margins.top),
                    "bottom"in i && (this.offset.click.top = this.helperProportions.height - i.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var i = this.offsetParent.offset();
                    return this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (i.left += this.scrollParent.scrollLeft(),
                    i.top += this.scrollParent.scrollTop()),
                    (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) && (i = {
                        top: 0,
                        left: 0
                    }),
                    {
                        top: i.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: i.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if (this.cssPosition === "relative") {
                        var i = this.currentItem.position();
                        return {
                            top: i.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: i.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        }
                    } else
                        return {
                            top: 0,
                            left: 0
                        }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var i, s, n, t = this.options;
                    t.containment === "parent" && (t.containment = this.helper[0].parentNode),
                    (t.containment === "document" || t.containment === "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
                    /^(document|window|parent)$/.test(t.containment) || (i = e(t.containment)[0],
                    s = e(t.containment).offset(),
                    n = e(i).css("overflow") !== "hidden",
                    this.containment = [s.left + (parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0) - this.margins.left, s.top + (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0) - this.margins.top, s.left + (n ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, s.top + (n ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                },
                _convertPositionTo: function(i, s) {
                    s || (s = this.position);
                    var n = i === "absolute" ? 1 : -1
                      , t = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
                      , a = /(html|body)/i.test(t[0].tagName);
                    return {
                        top: s.top + this.offset.relative.top * n + this.offset.parent.top * n - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : t.scrollTop()) * n,
                        left: s.left + this.offset.relative.left * n + this.offset.parent.left * n - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : t.scrollLeft()) * n
                    }
                },
                _generatePosition: function(i) {
                    var s, n, t = this.options, a = i.pageX, o = i.pageY, l = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, u = /(html|body)/i.test(l[0].tagName);
                    return this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()),
                    this.originalPosition && (this.containment && (i.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left),
                    i.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top),
                    i.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left),
                    i.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)),
                    t.grid && (s = this.originalPageY + Math.round((o - this.originalPageY) / t.grid[1]) * t.grid[1],
                    o = this.containment ? s - this.offset.click.top >= this.containment[1] && s - this.offset.click.top <= this.containment[3] ? s : s - this.offset.click.top >= this.containment[1] ? s - t.grid[1] : s + t.grid[1] : s,
                    n = this.originalPageX + Math.round((a - this.originalPageX) / t.grid[0]) * t.grid[0],
                    a = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - t.grid[0] : n + t.grid[0] : n)),
                    {
                        top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : u ? 0 : l.scrollTop()),
                        left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : u ? 0 : l.scrollLeft())
                    }
                },
                _rearrange: function(i, s, n, t) {
                    n ? n[0].appendChild(this.placeholder[0]) : s.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? s.item[0] : s.item[0].nextSibling),
                    this.counter = this.counter ? ++this.counter : 1;
                    var a = this.counter;
                    this._delay(function() {
                        a === this.counter && this.refreshPositions(!t)
                    })
                },
                _clear: function(i, s) {
                    this.reverting = !1;
                    var n, t = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
                    this._noFinalSort = null,
                    this.helper[0] === this.currentItem[0]) {
                        for (n in this._storedCSS)
                            (this._storedCSS[n] === "auto" || this._storedCSS[n] === "static") && (this._storedCSS[n] = "");
                        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                    } else
                        this.currentItem.show();
                    for (this.fromOutside && !s && t.push(function(a) {
                        this._trigger("receive", a, this._uiHash(this.fromOutside))
                    }),
                    (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !s && t.push(function(a) {
                        this._trigger("update", a, this._uiHash())
                    }),
                    this !== this.currentContainer && (s || (t.push(function(a) {
                        this._trigger("remove", a, this._uiHash())
                    }),
                    t.push(function(a) {
                        return function(o) {
                            a._trigger("receive", o, this._uiHash(this))
                        }
                    }
                    .call(this, this.currentContainer)),
                    t.push(function(a) {
                        return function(o) {
                            a._trigger("update", o, this._uiHash(this))
                        }
                    }
                    .call(this, this.currentContainer)))),
                    n = this.containers.length - 1; n >= 0; n--)
                        s || t.push(function(a) {
                            return function(o) {
                                a._trigger("deactivate", o, this._uiHash(this))
                            }
                        }
                        .call(this, this.containers[n])),
                        this.containers[n].containerCache.over && (t.push(function(a) {
                            return function(o) {
                                a._trigger("out", o, this._uiHash(this))
                            }
                        }
                        .call(this, this.containers[n])),
                        this.containers[n].containerCache.over = 0);
                    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
                    this.storedStylesheet.remove()),
                    this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
                    this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex),
                    this.dragging = !1,
                    this.cancelHelperRemoval) {
                        if (!s) {
                            for (this._trigger("beforeStop", i, this._uiHash()),
                            n = 0; n < t.length; n++)
                                t[n].call(this, i);
                            this._trigger("stop", i, this._uiHash())
                        }
                        return this.fromOutside = !1,
                        !1
                    }
                    if (s || this._trigger("beforeStop", i, this._uiHash()),
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                    this.helper[0] !== this.currentItem[0] && this.helper.remove(),
                    this.helper = null,
                    !s) {
                        for (n = 0; n < t.length; n++)
                            t[n].call(this, i);
                        this._trigger("stop", i, this._uiHash())
                    }
                    return this.fromOutside = !1,
                    !0
                },
                _trigger: function() {
                    e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
                },
                _uiHash: function(i) {
                    var s = i || this;
                    return {
                        helper: s.helper,
                        placeholder: s.placeholder || e([]),
                        position: s.position,
                        originalPosition: s.originalPosition,
                        offset: s.positionAbs,
                        item: s.currentItem,
                        sender: i ? i.element : null
                    }
                }
            })
        }(jQuery),
        function(e, I) {
            var h = 0
              , r = {}
              , i = {};
            r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "hide",
            i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show",
            e.widget("ui.accordion", {
                version: "1.10.3",
                options: {
                    active: 0,
                    animate: {},
                    collapsible: !1,
                    event: "click",
                    header: "> li > :first-child,> :not(li):even",
                    heightStyle: "auto",
                    icons: {
                        activeHeader: "ui-icon-triangle-1-s",
                        header: "ui-icon-triangle-1-e"
                    },
                    activate: null,
                    beforeActivate: null
                },
                _create: function() {
                    var s = this.options;
                    this.prevShow = this.prevHide = e(),
                    this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"),
                    !s.collapsible && (s.active === !1 || s.active == null) && (s.active = 0),
                    this._processPanels(),
                    s.active < 0 && (s.active += this.headers.length),
                    this._refresh()
                },
                _getCreateEventData: function() {
                    return {
                        header: this.active,
                        panel: this.active.length ? this.active.next() : e(),
                        content: this.active.length ? this.active.next() : e()
                    }
                },
                _createIcons: function() {
                    var s = this.options.icons;
                    s && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + s.header).prependTo(this.headers),
                    this.active.children(".ui-accordion-header-icon").removeClass(s.header).addClass(s.activeHeader),
                    this.headers.addClass("ui-accordion-icons"))
                },
                _destroyIcons: function() {
                    this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
                },
                _destroy: function() {
                    var s;
                    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
                    this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                        /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                    }),
                    this._destroyIcons(),
                    s = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                        /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                    }),
                    this.options.heightStyle !== "content" && s.css("height", "")
                },
                _setOption: function(s, n) {
                    if (s === "active") {
                        this._activate(n);
                        return
                    }
                    s === "event" && (this.options.event && this._off(this.headers, this.options.event),
                    this._setupEvents(n)),
                    this._super(s, n),
                    s === "collapsible" && !n && this.options.active === !1 && this._activate(0),
                    s === "icons" && (this._destroyIcons(),
                    n && this._createIcons()),
                    s === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!n)
                },
                _keydown: function(s) {
                    if (!(s.altKey || s.ctrlKey)) {
                        var n = e.ui.keyCode
                          , t = this.headers.length
                          , a = this.headers.index(s.target)
                          , o = !1;
                        switch (s.keyCode) {
                        case n.RIGHT:
                        case n.DOWN:
                            o = this.headers[(a + 1) % t];
                            break;
                        case n.LEFT:
                        case n.UP:
                            o = this.headers[(a - 1 + t) % t];
                            break;
                        case n.SPACE:
                        case n.ENTER:
                            this._eventHandler(s);
                            break;
                        case n.HOME:
                            o = this.headers[0];
                            break;
                        case n.END:
                            o = this.headers[t - 1];
                            break
                        }
                        o && (e(s.target).attr("tabIndex", -1),
                        e(o).attr("tabIndex", 0),
                        o.focus(),
                        s.preventDefault())
                    }
                },
                _panelKeyDown: function(s) {
                    s.keyCode === e.ui.keyCode.UP && s.ctrlKey && e(s.currentTarget).prev().focus()
                },
                refresh: function() {
                    var s = this.options;
                    this._processPanels(),
                    s.active === !1 && s.collapsible === !0 || !this.headers.length ? (s.active = !1,
                    this.active = e()) : s.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (s.active = !1,
                    this.active = e()) : this._activate(Math.max(0, s.active - 1)) : s.active = this.headers.index(this.active),
                    this._destroyIcons(),
                    this._refresh()
                },
                _processPanels: function() {
                    this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),
                    this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
                },
                _refresh: function() {
                    var s, n = this.options, t = n.heightStyle, a = this.element.parent(), o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++h);
                    this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),
                    this.active.next().addClass("ui-accordion-content-active").show(),
                    this.headers.attr("role", "tab").each(function(l) {
                        var u = e(this)
                          , c = u.attr("id")
                          , p = u.next()
                          , f = p.attr("id");
                        c || (c = o + "-header-" + l,
                        u.attr("id", c)),
                        f || (f = o + "-panel-" + l,
                        p.attr("id", f)),
                        u.attr("aria-controls", f),
                        p.attr("aria-labelledby", c)
                    }).next().attr("role", "tabpanel"),
                    this.headers.not(this.active).attr({
                        "aria-selected": "false",
                        tabIndex: -1
                    }).next().attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    }).hide(),
                    this.active.length ? this.active.attr({
                        "aria-selected": "true",
                        tabIndex: 0
                    }).next().attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    }) : this.headers.eq(0).attr("tabIndex", 0),
                    this._createIcons(),
                    this._setupEvents(n.event),
                    t === "fill" ? (s = a.height(),
                    this.element.siblings(":visible").each(function() {
                        var l = e(this)
                          , u = l.css("position");
                        u === "absolute" || u === "fixed" || (s -= l.outerHeight(!0))
                    }),
                    this.headers.each(function() {
                        s -= e(this).outerHeight(!0)
                    }),
                    this.headers.next().each(function() {
                        e(this).height(Math.max(0, s - e(this).innerHeight() + e(this).height()))
                    }).css("overflow", "auto")) : t === "auto" && (s = 0,
                    this.headers.next().each(function() {
                        s = Math.max(s, e(this).css("height", "").height())
                    }).height(s))
                },
                _activate: function(s) {
                    var n = this._findActive(s)[0];
                    n !== this.active[0] && (n = n || this.active[0],
                    this._eventHandler({
                        target: n,
                        currentTarget: n,
                        preventDefault: e.noop
                    }))
                },
                _findActive: function(s) {
                    return typeof s == "number" ? this.headers.eq(s) : e()
                },
                _setupEvents: function(s) {
                    var n = {
                        keydown: "_keydown"
                    };
                    s && e.each(s.split(" "), function(t, a) {
                        n[a] = "_eventHandler"
                    }),
                    this._off(this.headers.add(this.headers.next())),
                    this._on(this.headers, n),
                    this._on(this.headers.next(), {
                        keydown: "_panelKeyDown"
                    }),
                    this._hoverable(this.headers),
                    this._focusable(this.headers)
                },
                _eventHandler: function(s) {
                    var n = this.options
                      , t = this.active
                      , a = e(s.currentTarget)
                      , o = a[0] === t[0]
                      , l = o && n.collapsible
                      , u = l ? e() : a.next()
                      , c = t.next()
                      , p = {
                        oldHeader: t,
                        oldPanel: c,
                        newHeader: l ? e() : a,
                        newPanel: u
                    };
                    s.preventDefault(),
                    !(o && !n.collapsible || this._trigger("beforeActivate", s, p) === !1) && (n.active = l ? !1 : this.headers.index(a),
                    this.active = o ? e() : a,
                    this._toggle(p),
                    t.removeClass("ui-accordion-header-active ui-state-active"),
                    n.icons && t.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),
                    o || (a.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),
                    n.icons && a.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),
                    a.next().addClass("ui-accordion-content-active")))
                },
                _toggle: function(s) {
                    var n = s.newPanel
                      , t = this.prevShow.length ? this.prevShow : s.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0),
                    this.prevShow = n,
                    this.prevHide = t,
                    this.options.animate ? this._animate(n, t, s) : (t.hide(),
                    n.show(),
                    this._toggleComplete(s)),
                    t.attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    }),
                    t.prev().attr("aria-selected", "false"),
                    n.length && t.length ? t.prev().attr("tabIndex", -1) : n.length && this.headers.filter(function() {
                        return e(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1),
                    n.attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    }).prev().attr({
                        "aria-selected": "true",
                        tabIndex: 0
                    })
                },
                _animate: function(s, n, t) {
                    var a, o, l, u = this, c = 0, p = s.length && (!n.length || s.index() < n.index()), f = this.options.animate || {}, d = p && f.down || f, m = function() {
                        u._toggleComplete(t)
                    };
                    if (typeof d == "number" && (l = d),
                    typeof d == "string" && (o = d),
                    o = o || d.easing || f.easing,
                    l = l || d.duration || f.duration,
                    !n.length)
                        return s.animate(i, l, o, m);
                    if (!s.length)
                        return n.animate(r, l, o, m);
                    a = s.show().outerHeight(),
                    n.animate(r, {
                        duration: l,
                        easing: o,
                        step: function(b, g) {
                            g.now = Math.round(b)
                        }
                    }),
                    s.hide().animate(i, {
                        duration: l,
                        easing: o,
                        complete: m,
                        step: function(b, g) {
                            g.now = Math.round(b),
                            g.prop !== "height" ? c += g.now : u.options.heightStyle !== "content" && (g.now = Math.round(a - n.outerHeight() - c),
                            c = 0)
                        }
                    })
                },
                _toggleComplete: function(s) {
                    var n = s.oldPanel;
                    n.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
                    n.length && (n.parent()[0].className = n.parent()[0].className),
                    this._trigger("activate", null, s)
                }
            })
        }(jQuery),
        function(e, I) {
            var h = 0;
            e.widget("ui.autocomplete", {
                version: "1.10.3",
                defaultElement: "<input>",
                options: {
                    appendTo: null,
                    autoFocus: !1,
                    delay: 300,
                    minLength: 1,
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    source: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    response: null,
                    search: null,
                    select: null
                },
                pending: 0,
                _create: function() {
                    var r, i, s, n = this.element[0].nodeName.toLowerCase(), t = n === "textarea", a = n === "input";
                    this.isMultiLine = t ? !0 : a ? !1 : this.element.prop("isContentEditable"),
                    this.valueMethod = this.element[t || a ? "val" : "text"],
                    this.isNewMenu = !0,
                    this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
                    this._on(this.element, {
                        keydown: function(o) {
                            if (this.element.prop("readOnly")) {
                                r = !0,
                                s = !0,
                                i = !0;
                                return
                            }
                            r = !1,
                            s = !1,
                            i = !1;
                            var l = e.ui.keyCode;
                            switch (o.keyCode) {
                            case l.PAGE_UP:
                                r = !0,
                                this._move("previousPage", o);
                                break;
                            case l.PAGE_DOWN:
                                r = !0,
                                this._move("nextPage", o);
                                break;
                            case l.UP:
                                r = !0,
                                this._keyEvent("previous", o);
                                break;
                            case l.DOWN:
                                r = !0,
                                this._keyEvent("next", o);
                                break;
                            case l.ENTER:
                            case l.NUMPAD_ENTER:
                                this.menu.active && (r = !0,
                                o.preventDefault(),
                                this.menu.select(o));
                                break;
                            case l.TAB:
                                this.menu.active && this.menu.select(o);
                                break;
                            case l.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term),
                                this.close(o),
                                o.preventDefault());
                                break;
                            default:
                                i = !0,
                                this._searchTimeout(o);
                                break
                            }
                        },
                        keypress: function(o) {
                            if (r) {
                                r = !1,
                                (!this.isMultiLine || this.menu.element.is(":visible")) && o.preventDefault();
                                return
                            }
                            if (!i) {
                                var l = e.ui.keyCode;
                                switch (o.keyCode) {
                                case l.PAGE_UP:
                                    this._move("previousPage", o);
                                    break;
                                case l.PAGE_DOWN:
                                    this._move("nextPage", o);
                                    break;
                                case l.UP:
                                    this._keyEvent("previous", o);
                                    break;
                                case l.DOWN:
                                    this._keyEvent("next", o);
                                    break
                                }
                            }
                        },
                        input: function(o) {
                            if (s) {
                                s = !1,
                                o.preventDefault();
                                return
                            }
                            this._searchTimeout(o)
                        },
                        focus: function() {
                            this.selectedItem = null,
                            this.previous = this._value()
                        },
                        blur: function(o) {
                            if (this.cancelBlur) {
                                delete this.cancelBlur;
                                return
                            }
                            clearTimeout(this.searching),
                            this.close(o),
                            this._change(o)
                        }
                    }),
                    this._initSource(),
                    this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                        role: null
                    }).hide().data("ui-menu"),
                    this._on(this.menu.element, {
                        mousedown: function(o) {
                            o.preventDefault(),
                            this.cancelBlur = !0,
                            this._delay(function() {
                                delete this.cancelBlur
                            });
                            var l = this.menu.element[0];
                            e(o.target).closest(".ui-menu-item").length || this._delay(function() {
                                var u = this;
                                this.document.one("mousedown", function(c) {
                                    c.target !== u.element[0] && c.target !== l && !e.contains(l, c.target) && u.close()
                                })
                            })
                        },
                        menufocus: function(o, l) {
                            if (this.isNewMenu && (this.isNewMenu = !1,
                            o.originalEvent && /^mouse/.test(o.originalEvent.type))) {
                                this.menu.blur(),
                                this.document.one("mousemove", function() {
                                    e(o.target).trigger(o.originalEvent)
                                });
                                return
                            }
                            var u = l.item.data("ui-autocomplete-item");
                            this._trigger("focus", o, {
                                item: u
                            }) !== !1 ? o.originalEvent && /^key/.test(o.originalEvent.type) && this._value(u.value) : this.liveRegion.text(u.value)
                        },
                        menuselect: function(o, l) {
                            var u = l.item.data("ui-autocomplete-item")
                              , c = this.previous;
                            this.element[0] !== this.document[0].activeElement && (this.element.focus(),
                            this.previous = c,
                            this._delay(function() {
                                this.previous = c,
                                this.selectedItem = u
                            })),
                            this._trigger("select", o, {
                                item: u
                            }) !== !1 && this._value(u.value),
                            this.term = this._value(),
                            this.close(o),
                            this.selectedItem = u
                        }
                    }),
                    this.liveRegion = e("<span>", {
                        role: "status",
                        "aria-live": "polite"
                    }).addClass("ui-helper-hidden-accessible").insertBefore(this.element),
                    this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
                },
                _destroy: function() {
                    clearTimeout(this.searching),
                    this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
                    this.menu.element.remove(),
                    this.liveRegion.remove()
                },
                _setOption: function(r, i) {
                    this._super(r, i),
                    r === "source" && this._initSource(),
                    r === "appendTo" && this.menu.element.appendTo(this._appendTo()),
                    r === "disabled" && i && this.xhr && this.xhr.abort()
                },
                _appendTo: function() {
                    var r = this.options.appendTo;
                    return r && (r = r.jquery || r.nodeType ? e(r) : this.document.find(r).eq(0)),
                    r || (r = this.element.closest(".ui-front")),
                    r.length || (r = this.document[0].body),
                    r
                },
                _initSource: function() {
                    var r, i, s = this;
                    e.isArray(this.options.source) ? (r = this.options.source,
                    this.source = function(n, t) {
                        t(e.ui.autocomplete.filter(r, n.term))
                    }
                    ) : typeof this.options.source == "string" ? (i = this.options.source,
                    this.source = function(n, t) {
                        s.xhr && s.xhr.abort(),
                        s.xhr = e.ajax({
                            url: i,
                            data: n,
                            dataType: "json",
                            success: function(a) {
                                t(a)
                            },
                            error: function() {
                                t([])
                            }
                        })
                    }
                    ) : this.source = this.options.source
                },
                _searchTimeout: function(r) {
                    clearTimeout(this.searching),
                    this.searching = this._delay(function() {
                        this.term !== this._value() && (this.selectedItem = null,
                        this.search(null, r))
                    }, this.options.delay)
                },
                search: function(r, i) {
                    if (r = r ?? this._value(),
                    this.term = this._value(),
                    r.length < this.options.minLength)
                        return this.close(i);
                    if (this._trigger("search", i) !== !1)
                        return this._search(r)
                },
                _search: function(r) {
                    this.pending++,
                    this.element.addClass("ui-autocomplete-loading"),
                    this.cancelSearch = !1,
                    this.source({
                        term: r
                    }, this._response())
                },
                _response: function() {
                    var r = this
                      , i = ++h;
                    return function(s) {
                        i === h && r.__response(s),
                        r.pending--,
                        r.pending || r.element.removeClass("ui-autocomplete-loading")
                    }
                },
                __response: function(r) {
                    r && (r = this._normalize(r)),
                    this._trigger("response", null, {
                        content: r
                    }),
                    !this.options.disabled && r && r.length && !this.cancelSearch ? (this._suggest(r),
                    this._trigger("open")) : this._close()
                },
                close: function(r) {
                    this.cancelSearch = !0,
                    this._close(r)
                },
                _close: function(r) {
                    this.menu.element.is(":visible") && (this.menu.element.hide(),
                    this.menu.blur(),
                    this.isNewMenu = !0,
                    this._trigger("close", r))
                },
                _change: function(r) {
                    this.previous !== this._value() && this._trigger("change", r, {
                        item: this.selectedItem
                    })
                },
                _normalize: function(r) {
                    return r.length && r[0].label && r[0].value ? r : e.map(r, function(i) {
                        return typeof i == "string" ? {
                            label: i,
                            value: i
                        } : e.extend({
                            label: i.label || i.value,
                            value: i.value || i.label
                        }, i)
                    })
                },
                _suggest: function(r) {
                    var i = this.menu.element.empty();
                    this._renderMenu(i, r),
                    this.isNewMenu = !0,
                    this.menu.refresh(),
                    i.show(),
                    this._resizeMenu(),
                    i.position(e.extend({
                        of: this.element
                    }, this.options.position)),
                    this.options.autoFocus && this.menu.next()
                },
                _resizeMenu: function() {
                    var r = this.menu.element;
                    r.outerWidth(Math.max(r.width("").outerWidth() + 1, this.element.outerWidth()))
                },
                _renderMenu: function(r, i) {
                    var s = this;
                    e.each(i, function(n, t) {
                        s._renderItemData(r, t)
                    })
                },
                _renderItemData: function(r, i) {
                    return this._renderItem(r, i).data("ui-autocomplete-item", i)
                },
                _renderItem: function(r, i) {
                    return e("<li>").append(e("<a>").text(i.label)).appendTo(r)
                },
                _move: function(r, i) {
                    if (!this.menu.element.is(":visible")) {
                        this.search(null, i);
                        return
                    }
                    if (this.menu.isFirstItem() && /^previous/.test(r) || this.menu.isLastItem() && /^next/.test(r)) {
                        this._value(this.term),
                        this.menu.blur();
                        return
                    }
                    this.menu[r](i)
                },
                widget: function() {
                    return this.menu.element
                },
                _value: function() {
                    return this.valueMethod.apply(this.element, arguments)
                },
                _keyEvent: function(r, i) {
                    (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(r, i),
                    i.preventDefault())
                }
            }),
            e.extend(e.ui.autocomplete, {
                escapeRegex: function(r) {
                    return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                },
                filter: function(r, i) {
                    var s = new RegExp(e.ui.autocomplete.escapeRegex(i),"i");
                    return e.grep(r, function(n) {
                        return s.test(n.label || n.value || n)
                    })
                }
            }),
            e.widget("ui.autocomplete", e.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function(r) {
                            return r + (r > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                        }
                    }
                },
                __response: function(r) {
                    var i;
                    this._superApply(arguments),
                    !(this.options.disabled || this.cancelSearch) && (r && r.length ? i = this.options.messages.results(r.length) : i = this.options.messages.noResults,
                    this.liveRegion.text(i))
                }
            })
        }(jQuery),
        function(e, I) {
            var h, r, i, s, n = "ui-button ui-widget ui-state-default ui-corner-all", t = "ui-state-hover ui-state-active ", a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", o = function() {
                var u = e(this);
                setTimeout(function() {
                    u.find(":ui-button").button("refresh")
                }, 1)
            }, l = function(u) {
                var c = u.name
                  , p = u.form
                  , f = e([]);
                return c && (c = c.replace(/'/g, "\\'"),
                p ? f = e(p).find("[name='" + c + "']") : f = e("[name='" + c + "']", u.ownerDocument).filter(function() {
                    return !this.form
                })),
                f
            };
            e.widget("ui.button", {
                version: "1.10.3",
                defaultElement: "<button>",
                options: {
                    disabled: null,
                    text: !0,
                    label: null,
                    icons: {
                        primary: null,
                        secondary: null
                    }
                },
                _create: function() {
                    this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, o),
                    typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
                    this._determineButtonType(),
                    this.hasTitle = !!this.buttonElement.attr("title");
                    var u = this
                      , c = this.options
                      , p = this.type === "checkbox" || this.type === "radio"
                      , f = p ? "" : "ui-state-active"
                      , d = "ui-state-focus";
                    c.label === null && (c.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()),
                    this._hoverable(this.buttonElement),
                    this.buttonElement.addClass(n).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                        c.disabled || this === h && e(this).addClass("ui-state-active")
                    }).bind("mouseleave" + this.eventNamespace, function() {
                        c.disabled || e(this).removeClass(f)
                    }).bind("click" + this.eventNamespace, function(m) {
                        c.disabled && (m.preventDefault(),
                        m.stopImmediatePropagation())
                    }),
                    this.element.bind("focus" + this.eventNamespace, function() {
                        u.buttonElement.addClass(d)
                    }).bind("blur" + this.eventNamespace, function() {
                        u.buttonElement.removeClass(d)
                    }),
                    p && (this.element.bind("change" + this.eventNamespace, function() {
                        s || u.refresh()
                    }),
                    this.buttonElement.bind("mousedown" + this.eventNamespace, function(m) {
                        c.disabled || (s = !1,
                        r = m.pageX,
                        i = m.pageY)
                    }).bind("mouseup" + this.eventNamespace, function(m) {
                        c.disabled || (r !== m.pageX || i !== m.pageY) && (s = !0)
                    })),
                    this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if (c.disabled || s)
                            return !1
                    }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if (c.disabled || s)
                            return !1;
                        e(this).addClass("ui-state-active"),
                        u.buttonElement.attr("aria-pressed", "true");
                        var m = u.element[0];
                        l(m).not(m).map(function() {
                            return e(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                        if (c.disabled)
                            return !1;
                        e(this).addClass("ui-state-active"),
                        h = this,
                        u.document.one("mouseup", function() {
                            h = null
                        })
                    }).bind("mouseup" + this.eventNamespace, function() {
                        if (c.disabled)
                            return !1;
                        e(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(m) {
                        if (c.disabled)
                            return !1;
                        (m.keyCode === e.ui.keyCode.SPACE || m.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        e(this).removeClass("ui-state-active")
                    }),
                    this.buttonElement.is("a") && this.buttonElement.keyup(function(m) {
                        m.keyCode === e.ui.keyCode.SPACE && e(this).click()
                    })),
                    this._setOption("disabled", c.disabled),
                    this._resetButton()
                },
                _determineButtonType: function() {
                    var u, c, p;
                    this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button",
                    this.type === "checkbox" || this.type === "radio" ? (u = this.element.parents().last(),
                    c = "label[for='" + this.element.attr("id") + "']",
                    this.buttonElement = u.find(c),
                    this.buttonElement.length || (u = u.length ? u.siblings() : this.element.siblings(),
                    this.buttonElement = u.filter(c),
                    this.buttonElement.length || (this.buttonElement = u.find(c))),
                    this.element.addClass("ui-helper-hidden-accessible"),
                    p = this.element.is(":checked"),
                    p && this.buttonElement.addClass("ui-state-active"),
                    this.buttonElement.prop("aria-pressed", p)) : this.buttonElement = this.element
                },
                widget: function() {
                    return this.buttonElement
                },
                _destroy: function() {
                    this.element.removeClass("ui-helper-hidden-accessible"),
                    this.buttonElement.removeClass(n + " " + t + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
                    this.hasTitle || this.buttonElement.removeAttr("title")
                },
                _setOption: function(u, c) {
                    if (this._super(u, c),
                    u === "disabled") {
                        c ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                        return
                    }
                    this._resetButton()
                },
                refresh: function() {
                    var u = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                    u !== this.options.disabled && this._setOption("disabled", u),
                    this.type === "radio" ? l(this.element[0]).each(function() {
                        e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
                },
                _resetButton: function() {
                    if (this.type === "input") {
                        this.options.label && this.element.val(this.options.label);
                        return
                    }
                    var u = this.buttonElement.removeClass(a)
                      , c = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(u.empty()).text()
                      , p = this.options.icons
                      , f = p.primary && p.secondary
                      , d = [];
                    p.primary || p.secondary ? (this.options.text && d.push("ui-button-text-icon" + (f ? "s" : p.primary ? "-primary" : "-secondary")),
                    p.primary && u.prepend("<span class='ui-button-icon-primary ui-icon " + p.primary + "'></span>"),
                    p.secondary && u.append("<span class='ui-button-icon-secondary ui-icon " + p.secondary + "'></span>"),
                    this.options.text || (d.push(f ? "ui-button-icons-only" : "ui-button-icon-only"),
                    this.hasTitle || u.attr("title", e.trim(c)))) : d.push("ui-button-text-only"),
                    u.addClass(d.join(" "))
                }
            }),
            e.widget("ui.buttonset", {
                version: "1.10.3",
                options: {
                    items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
                },
                _create: function() {
                    this.element.addClass("ui-buttonset")
                },
                _init: function() {
                    this.refresh()
                },
                _setOption: function(u, c) {
                    u === "disabled" && this.buttons.button("option", u, c),
                    this._super(u, c)
                },
                refresh: function() {
                    var u = this.element.css("direction") === "rtl";
                    this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                        return e(this).button("widget")[0]
                    }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(u ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(u ? "ui-corner-left" : "ui-corner-right").end().end()
                },
                _destroy: function() {
                    this.element.removeClass("ui-buttonset"),
                    this.buttons.map(function() {
                        return e(this).button("widget")[0]
                    }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
                }
            })
        }(jQuery),
        function(e, I) {
            e.extend(e.ui, {
                datepicker: {
                    version: "1.10.3"
                }
            });
            var h = "datepicker", r;
            function i() {
                this._curInst = null,
                this._keyEvent = !1,
                this._disabledInputs = [],
                this._datepickerShowing = !1,
                this._inDialog = !1,
                this._mainDivId = "ui-datepicker-div",
                this._inlineClass = "ui-datepicker-inline",
                this._appendClass = "ui-datepicker-append",
                this._triggerClass = "ui-datepicker-trigger",
                this._dialogClass = "ui-datepicker-dialog",
                this._disableClass = "ui-datepicker-disabled",
                this._unselectableClass = "ui-datepicker-unselectable",
                this._currentClass = "ui-datepicker-current-day",
                this._dayOverClass = "ui-datepicker-days-cell-over",
                this.regional = [],
                this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: ""
                },
                this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1
                },
                e.extend(this._defaults, this.regional[""]),
                this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            }
            e.extend(i.prototype, {
                markerClassName: "hasDatepicker",
                maxRows: 4,
                _widgetDatepicker: function() {
                    return this.dpDiv
                },
                setDefaults: function(t) {
                    return n(this._defaults, t || {}),
                    this
                },
                _attachDatepicker: function(t, a) {
                    var o, l, u;
                    o = t.nodeName.toLowerCase(),
                    l = o === "div" || o === "span",
                    t.id || (this.uuid += 1,
                    t.id = "dp" + this.uuid),
                    u = this._newInst(e(t), l),
                    u.settings = e.extend({}, a || {}),
                    o === "input" ? this._connectDatepicker(t, u) : l && this._inlineDatepicker(t, u)
                },
                _newInst: function(t, a) {
                    var o = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                    return {
                        id: o,
                        input: t,
                        selectedDay: 0,
                        selectedMonth: 0,
                        selectedYear: 0,
                        drawMonth: 0,
                        drawYear: 0,
                        inline: a,
                        dpDiv: a ? s(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                    }
                },
                _connectDatepicker: function(t, a) {
                    var o = e(t);
                    a.append = e([]),
                    a.trigger = e([]),
                    !o.hasClass(this.markerClassName) && (this._attachments(o, a),
                    o.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
                    this._autoSize(a),
                    e.data(t, h, a),
                    a.settings.disabled && this._disableDatepicker(t))
                },
                _attachments: function(t, a) {
                    var o, l, u, c = this._get(a, "appendText"), p = this._get(a, "isRTL");
                    a.append && a.append.remove(),
                    c && (a.append = e("<span class='" + this._appendClass + "'>" + c + "</span>"),
                    t[p ? "before" : "after"](a.append)),
                    t.unbind("focus", this._showDatepicker),
                    a.trigger && a.trigger.remove(),
                    o = this._get(a, "showOn"),
                    (o === "focus" || o === "both") && t.focus(this._showDatepicker),
                    (o === "button" || o === "both") && (l = this._get(a, "buttonText"),
                    u = this._get(a, "buttonImage"),
                    a.trigger = e(this._get(a, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                        src: u,
                        alt: l,
                        title: l
                    }) : e("<button type='button'></button>").addClass(this._triggerClass).html(u ? e("<img/>").attr({
                        src: u,
                        alt: l,
                        title: l
                    }) : l)),
                    t[p ? "before" : "after"](a.trigger),
                    a.trigger.click(function() {
                        return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : (e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] && e.datepicker._hideDatepicker(),
                        e.datepicker._showDatepicker(t[0])),
                        !1
                    }))
                },
                _autoSize: function(t) {
                    if (this._get(t, "autoSize") && !t.inline) {
                        var a, o, l, u, c = new Date(2009,11,20), p = this._get(t, "dateFormat");
                        p.match(/[DM]/) && (a = function(f) {
                            for (o = 0,
                            l = 0,
                            u = 0; u < f.length; u++)
                                f[u].length > o && (o = f[u].length,
                                l = u);
                            return l
                        }
                        ,
                        c.setMonth(a(this._get(t, p.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                        c.setDate(a(this._get(t, p.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - c.getDay())),
                        t.input.attr("size", this._formatDate(t, c).length)
                    }
                },
                _inlineDatepicker: function(t, a) {
                    var o = e(t);
                    o.hasClass(this.markerClassName) || (o.addClass(this.markerClassName).append(a.dpDiv),
                    e.data(t, h, a),
                    this._setDate(a, this._getDefaultDate(a), !0),
                    this._updateDatepicker(a),
                    this._updateAlternate(a),
                    a.settings.disabled && this._disableDatepicker(t),
                    a.dpDiv.css("display", "block"))
                },
                _dialogDatepicker: function(t, a, o, l, u) {
                    var c, p, f, d, m, b = this._dialogInst;
                    return b || (this.uuid += 1,
                    c = "dp" + this.uuid,
                    this._dialogInput = e("<input type='text' id='" + c + "' style='position: absolute; top: -100px; width: 0px;'/>"),
                    this._dialogInput.keydown(this._doKeyDown),
                    e("body").append(this._dialogInput),
                    b = this._dialogInst = this._newInst(this._dialogInput, !1),
                    b.settings = {},
                    e.data(this._dialogInput[0], h, b)),
                    n(b.settings, l || {}),
                    a = a && a.constructor === Date ? this._formatDate(b, a) : a,
                    this._dialogInput.val(a),
                    this._pos = u ? u.length ? u : [u.pageX, u.pageY] : null,
                    this._pos || (p = document.documentElement.clientWidth,
                    f = document.documentElement.clientHeight,
                    d = document.documentElement.scrollLeft || document.body.scrollLeft,
                    m = document.documentElement.scrollTop || document.body.scrollTop,
                    this._pos = [p / 2 - 100 + d, f / 2 - 150 + m]),
                    this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                    b.settings.onSelect = o,
                    this._inDialog = !0,
                    this.dpDiv.addClass(this._dialogClass),
                    this._showDatepicker(this._dialogInput[0]),
                    e.blockUI && e.blockUI(this.dpDiv),
                    e.data(this._dialogInput[0], h, b),
                    this
                },
                _destroyDatepicker: function(t) {
                    var a, o = e(t), l = e.data(t, h);
                    o.hasClass(this.markerClassName) && (a = t.nodeName.toLowerCase(),
                    e.removeData(t, h),
                    a === "input" ? (l.append.remove(),
                    l.trigger.remove(),
                    o.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (a === "div" || a === "span") && o.removeClass(this.markerClassName).empty())
                },
                _enableDatepicker: function(t) {
                    var a, o, l = e(t), u = e.data(t, h);
                    l.hasClass(this.markerClassName) && (a = t.nodeName.toLowerCase(),
                    a === "input" ? (t.disabled = !1,
                    u.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    })) : (a === "div" || a === "span") && (o = l.children("." + this._inlineClass),
                    o.children().removeClass("ui-state-disabled"),
                    o.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
                    this._disabledInputs = e.map(this._disabledInputs, function(c) {
                        return c === t ? null : c
                    }))
                },
                _disableDatepicker: function(t) {
                    var a, o, l = e(t), u = e.data(t, h);
                    l.hasClass(this.markerClassName) && (a = t.nodeName.toLowerCase(),
                    a === "input" ? (t.disabled = !0,
                    u.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    })) : (a === "div" || a === "span") && (o = l.children("." + this._inlineClass),
                    o.children().addClass("ui-state-disabled"),
                    o.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
                    this._disabledInputs = e.map(this._disabledInputs, function(c) {
                        return c === t ? null : c
                    }),
                    this._disabledInputs[this._disabledInputs.length] = t)
                },
                _isDisabledDatepicker: function(t) {
                    if (!t)
                        return !1;
                    for (var a = 0; a < this._disabledInputs.length; a++)
                        if (this._disabledInputs[a] === t)
                            return !0;
                    return !1
                },
                _getInst: function(t) {
                    try {
                        return e.data(t, h)
                    } catch {
                        throw "Missing instance data for this datepicker"
                    }
                },
                _optionDatepicker: function(t, a, o) {
                    var l, u, c, p, f = this._getInst(t);
                    if (arguments.length === 2 && typeof a == "string")
                        return a === "defaults" ? e.extend({}, e.datepicker._defaults) : f ? a === "all" ? e.extend({}, f.settings) : this._get(f, a) : null;
                    l = a || {},
                    typeof a == "string" && (l = {},
                    l[a] = o),
                    f && (this._curInst === f && this._hideDatepicker(),
                    u = this._getDateDatepicker(t, !0),
                    c = this._getMinMaxDate(f, "min"),
                    p = this._getMinMaxDate(f, "max"),
                    n(f.settings, l),
                    c !== null && l.dateFormat !== I && l.minDate === I && (f.settings.minDate = this._formatDate(f, c)),
                    p !== null && l.dateFormat !== I && l.maxDate === I && (f.settings.maxDate = this._formatDate(f, p)),
                    "disabled"in l && (l.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
                    this._attachments(e(t), f),
                    this._autoSize(f),
                    this._setDate(f, u),
                    this._updateAlternate(f),
                    this._updateDatepicker(f))
                },
                _changeDatepicker: function(t, a, o) {
                    this._optionDatepicker(t, a, o)
                },
                _refreshDatepicker: function(t) {
                    var a = this._getInst(t);
                    a && this._updateDatepicker(a)
                },
                _setDateDatepicker: function(t, a) {
                    var o = this._getInst(t);
                    o && (this._setDate(o, a),
                    this._updateDatepicker(o),
                    this._updateAlternate(o))
                },
                _getDateDatepicker: function(t, a) {
                    var o = this._getInst(t);
                    return o && !o.inline && this._setDateFromField(o, a),
                    o ? this._getDate(o) : null
                },
                _doKeyDown: function(t) {
                    var a, o, l, u = e.datepicker._getInst(t.target), c = !0, p = u.dpDiv.is(".ui-datepicker-rtl");
                    if (u._keyEvent = !0,
                    e.datepicker._datepickerShowing)
                        switch (t.keyCode) {
                        case 9:
                            e.datepicker._hideDatepicker(),
                            c = !1;
                            break;
                        case 13:
                            return l = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", u.dpDiv),
                            l[0] && e.datepicker._selectDay(t.target, u.selectedMonth, u.selectedYear, l[0]),
                            a = e.datepicker._get(u, "onSelect"),
                            a ? (o = e.datepicker._formatDate(u),
                            a.apply(u.input ? u.input[0] : null, [o, u])) : e.datepicker._hideDatepicker(),
                            !1;
                        case 27:
                            e.datepicker._hideDatepicker();
                            break;
                        case 33:
                            e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(u, "stepBigMonths") : -e.datepicker._get(u, "stepMonths"), "M");
                            break;
                        case 34:
                            e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(u, "stepBigMonths") : +e.datepicker._get(u, "stepMonths"), "M");
                            break;
                        case 35:
                            (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target),
                            c = t.ctrlKey || t.metaKey;
                            break;
                        case 36:
                            (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target),
                            c = t.ctrlKey || t.metaKey;
                            break;
                        case 37:
                            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, p ? 1 : -1, "D"),
                            c = t.ctrlKey || t.metaKey,
                            t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(u, "stepBigMonths") : -e.datepicker._get(u, "stepMonths"), "M");
                            break;
                        case 38:
                            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"),
                            c = t.ctrlKey || t.metaKey;
                            break;
                        case 39:
                            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, p ? -1 : 1, "D"),
                            c = t.ctrlKey || t.metaKey,
                            t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(u, "stepBigMonths") : +e.datepicker._get(u, "stepMonths"), "M");
                            break;
                        case 40:
                            (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"),
                            c = t.ctrlKey || t.metaKey;
                            break;
                        default:
                            c = !1
                        }
                    else
                        t.keyCode === 36 && t.ctrlKey ? e.datepicker._showDatepicker(this) : c = !1;
                    c && (t.preventDefault(),
                    t.stopPropagation())
                },
                _doKeyPress: function(t) {
                    var a, o, l = e.datepicker._getInst(t.target);
                    if (e.datepicker._get(l, "constrainInput"))
                        return a = e.datepicker._possibleChars(e.datepicker._get(l, "dateFormat")),
                        o = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode),
                        t.ctrlKey || t.metaKey || o < " " || !a || a.indexOf(o) > -1
                },
                _doKeyUp: function(t) {
                    var a, o = e.datepicker._getInst(t.target);
                    if (o.input.val() !== o.lastVal)
                        try {
                            a = e.datepicker.parseDate(e.datepicker._get(o, "dateFormat"), o.input ? o.input.val() : null, e.datepicker._getFormatConfig(o)),
                            a && (e.datepicker._setDateFromField(o),
                            e.datepicker._updateAlternate(o),
                            e.datepicker._updateDatepicker(o))
                        } catch {}
                    return !0
                },
                _showDatepicker: function(t) {
                    if (t = t.target || t,
                    t.nodeName.toLowerCase() !== "input" && (t = e("input", t.parentNode)[0]),
                    !(e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t)) {
                        var a, o, l, u, c, p, f;
                        a = e.datepicker._getInst(t),
                        e.datepicker._curInst && e.datepicker._curInst !== a && (e.datepicker._curInst.dpDiv.stop(!0, !0),
                        a && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),
                        o = e.datepicker._get(a, "beforeShow"),
                        l = o ? o.apply(t, [t, a]) : {},
                        l !== !1 && (n(a.settings, l),
                        a.lastVal = null,
                        e.datepicker._lastInput = t,
                        e.datepicker._setDateFromField(a),
                        e.datepicker._inDialog && (t.value = ""),
                        e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t),
                        e.datepicker._pos[1] += t.offsetHeight),
                        u = !1,
                        e(t).parents().each(function() {
                            return u |= e(this).css("position") === "fixed",
                            !u
                        }),
                        c = {
                            left: e.datepicker._pos[0],
                            top: e.datepicker._pos[1]
                        },
                        e.datepicker._pos = null,
                        a.dpDiv.empty(),
                        a.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }),
                        e.datepicker._updateDatepicker(a),
                        c = e.datepicker._checkOffset(a, c, u),
                        a.dpDiv.css({
                            position: e.datepicker._inDialog && e.blockUI ? "static" : u ? "fixed" : "absolute",
                            display: "none",
                            left: c.left + "px",
                            top: c.top + "px"
                        }),
                        a.inline || (p = e.datepicker._get(a, "showAnim"),
                        f = e.datepicker._get(a, "duration"),
                        a.dpDiv.zIndex(e(t).zIndex() + 1),
                        e.datepicker._datepickerShowing = !0,
                        e.effects && e.effects.effect[p] ? a.dpDiv.show(p, e.datepicker._get(a, "showOptions"), f) : a.dpDiv[p || "show"](p ? f : null),
                        e.datepicker._shouldFocusInput(a) && a.input.focus(),
                        e.datepicker._curInst = a))
                    }
                },
                _updateDatepicker: function(t) {
                    this.maxRows = 4,
                    r = t,
                    t.dpDiv.empty().append(this._generateHTML(t)),
                    this._attachHandlers(t),
                    t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                    var a, o = this._getNumberOfMonths(t), l = o[1], u = 17;
                    t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
                    l > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + l).css("width", u * l + "em"),
                    t.dpDiv[(o[0] !== 1 || o[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"),
                    t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"),
                    t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(),
                    t.yearshtml && (a = t.yearshtml,
                    setTimeout(function() {
                        a === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                        a = t.yearshtml = null
                    }, 0))
                },
                _shouldFocusInput: function(t) {
                    return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
                },
                _checkOffset: function(t, a, o) {
                    var l = t.dpDiv.outerWidth()
                      , u = t.dpDiv.outerHeight()
                      , c = t.input ? t.input.outerWidth() : 0
                      , p = t.input ? t.input.outerHeight() : 0
                      , f = document.documentElement.clientWidth + (o ? 0 : e(document).scrollLeft())
                      , d = document.documentElement.clientHeight + (o ? 0 : e(document).scrollTop());
                    return a.left -= this._get(t, "isRTL") ? l - c : 0,
                    a.left -= o && a.left === t.input.offset().left ? e(document).scrollLeft() : 0,
                    a.top -= o && a.top === t.input.offset().top + p ? e(document).scrollTop() : 0,
                    a.left -= Math.min(a.left, a.left + l > f && f > l ? Math.abs(a.left + l - f) : 0),
                    a.top -= Math.min(a.top, a.top + u > d && d > u ? Math.abs(u + p) : 0),
                    a
                },
                _findPos: function(t) {
                    for (var a, o = this._getInst(t), l = this._get(o, "isRTL"); t && (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t)); )
                        t = t[l ? "previousSibling" : "nextSibling"];
                    return a = e(t).offset(),
                    [a.left, a.top]
                },
                _hideDatepicker: function(t) {
                    var a, o, l, u, c = this._curInst;
                    !c || t && c !== e.data(t, h) || this._datepickerShowing && (a = this._get(c, "showAnim"),
                    o = this._get(c, "duration"),
                    l = function() {
                        e.datepicker._tidyDialog(c)
                    }
                    ,
                    e.effects && (e.effects.effect[a] || e.effects[a]) ? c.dpDiv.hide(a, e.datepicker._get(c, "showOptions"), o, l) : c.dpDiv[a === "slideDown" ? "slideUp" : a === "fadeIn" ? "fadeOut" : "hide"](a ? o : null, l),
                    a || l(),
                    this._datepickerShowing = !1,
                    u = this._get(c, "onClose"),
                    u && u.apply(c.input ? c.input[0] : null, [c.input ? c.input.val() : "", c]),
                    this._lastInput = null,
                    this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }),
                    e.blockUI && (e.unblockUI(),
                    e("body").append(this.dpDiv))),
                    this._inDialog = !1)
                },
                _tidyDialog: function(t) {
                    t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
                },
                _checkExternalClick: function(t) {
                    if (e.datepicker._curInst) {
                        var a = e(t.target)
                          , o = e.datepicker._getInst(a[0]);
                        (a[0].id !== e.datepicker._mainDivId && a.parents("#" + e.datepicker._mainDivId).length === 0 && !a.hasClass(e.datepicker.markerClassName) && !a.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && !(e.datepicker._inDialog && e.blockUI) || a.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== o) && e.datepicker._hideDatepicker()
                    }
                },
                _adjustDate: function(t, a, o) {
                    var l = e(t)
                      , u = this._getInst(l[0]);
                    this._isDisabledDatepicker(l[0]) || (this._adjustInstDate(u, a + (o === "M" ? this._get(u, "showCurrentAtPos") : 0), o),
                    this._updateDatepicker(u))
                },
                _gotoToday: function(t) {
                    var a, o = e(t), l = this._getInst(o[0]);
                    this._get(l, "gotoCurrent") && l.currentDay ? (l.selectedDay = l.currentDay,
                    l.drawMonth = l.selectedMonth = l.currentMonth,
                    l.drawYear = l.selectedYear = l.currentYear) : (a = new Date,
                    l.selectedDay = a.getDate(),
                    l.drawMonth = l.selectedMonth = a.getMonth(),
                    l.drawYear = l.selectedYear = a.getFullYear()),
                    this._notifyChange(l),
                    this._adjustDate(o)
                },
                _selectMonthYear: function(t, a, o) {
                    var l = e(t)
                      , u = this._getInst(l[0]);
                    u["selected" + (o === "M" ? "Month" : "Year")] = u["draw" + (o === "M" ? "Month" : "Year")] = parseInt(a.options[a.selectedIndex].value, 10),
                    this._notifyChange(u),
                    this._adjustDate(l)
                },
                _selectDay: function(t, a, o, l) {
                    var u, c = e(t);
                    e(l).hasClass(this._unselectableClass) || this._isDisabledDatepicker(c[0]) || (u = this._getInst(c[0]),
                    u.selectedDay = u.currentDay = e("a", l).html(),
                    u.selectedMonth = u.currentMonth = a,
                    u.selectedYear = u.currentYear = o,
                    this._selectDate(t, this._formatDate(u, u.currentDay, u.currentMonth, u.currentYear)))
                },
                _clearDate: function(t) {
                    var a = e(t);
                    this._selectDate(a, "")
                },
                _selectDate: function(t, a) {
                    var o, l = e(t), u = this._getInst(l[0]);
                    a = a ?? this._formatDate(u),
                    u.input && u.input.val(a),
                    this._updateAlternate(u),
                    o = this._get(u, "onSelect"),
                    o ? o.apply(u.input ? u.input[0] : null, [a, u]) : u.input && u.input.trigger("change"),
                    u.inline ? this._updateDatepicker(u) : (this._hideDatepicker(),
                    this._lastInput = u.input[0],
                    typeof u.input[0] != "object" && u.input.focus(),
                    this._lastInput = null)
                },
                _updateAlternate: function(t) {
                    var a, o, l, u = this._get(t, "altField");
                    u && (a = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                    o = this._getDate(t),
                    l = this.formatDate(a, o, this._getFormatConfig(t)),
                    e(u).each(function() {
                        e(this).val(l)
                    }))
                },
                noWeekends: function(t) {
                    var a = t.getDay();
                    return [a > 0 && a < 6, ""]
                },
                iso8601Week: function(t) {
                    var a, o = new Date(t.getTime());
                    return o.setDate(o.getDate() + 4 - (o.getDay() || 7)),
                    a = o.getTime(),
                    o.setMonth(0),
                    o.setDate(1),
                    Math.floor(Math.round((a - o) / 864e5) / 7) + 1
                },
                parseDate: function(t, a, o) {
                    if (t == null || a == null)
                        throw "Invalid arguments";
                    if (a = typeof a == "object" ? a.toString() : a + "",
                    a === "")
                        return null;
                    var l, u, c, p = 0, f = (o ? o.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = typeof f != "string" ? f : new Date().getFullYear() % 100 + parseInt(f, 10), m = (o ? o.dayNamesShort : null) || this._defaults.dayNamesShort, b = (o ? o.dayNames : null) || this._defaults.dayNames, g = (o ? o.monthNamesShort : null) || this._defaults.monthNamesShort, v = (o ? o.monthNames : null) || this._defaults.monthNames, y = -1, _ = -1, w = -1, x = -1, T = !1, D, C = function(S) {
                        var H = l + 1 < t.length && t.charAt(l + 1) === S;
                        return H && l++,
                        H
                    }, k = function(S) {
                        var H = C(S)
                          , L = S === "@" ? 14 : S === "!" ? 20 : S === "y" && H ? 4 : S === "o" ? 3 : 2
                          , E = new RegExp("^\\d{1," + L + "}")
                          , W = a.substring(p).match(E);
                        if (!W)
                            throw "Missing number at position " + p;
                        return p += W[0].length,
                        parseInt(W[0], 10)
                    }, P = function(S, H, L) {
                        var E = -1
                          , W = e.map(C(S) ? L : H, function(Y, z) {
                            return [[z, Y]]
                        }).sort(function(Y, z) {
                            return -(Y[1].length - z[1].length)
                        });
                        if (e.each(W, function(Y, z) {
                            var F = z[1];
                            if (a.substr(p, F.length).toLowerCase() === F.toLowerCase())
                                return E = z[0],
                                p += F.length,
                                !1
                        }),
                        E !== -1)
                            return E + 1;
                        throw "Unknown name at position " + p
                    }, M = function() {
                        if (a.charAt(p) !== t.charAt(l))
                            throw "Unexpected literal at position " + p;
                        p++
                    };
                    for (l = 0; l < t.length; l++)
                        if (T)
                            t.charAt(l) === "'" && !C("'") ? T = !1 : M();
                        else
                            switch (t.charAt(l)) {
                            case "d":
                                w = k("d");
                                break;
                            case "D":
                                P("D", m, b);
                                break;
                            case "o":
                                x = k("o");
                                break;
                            case "m":
                                _ = k("m");
                                break;
                            case "M":
                                _ = P("M", g, v);
                                break;
                            case "y":
                                y = k("y");
                                break;
                            case "@":
                                D = new Date(k("@")),
                                y = D.getFullYear(),
                                _ = D.getMonth() + 1,
                                w = D.getDate();
                                break;
                            case "!":
                                D = new Date((k("!") - this._ticksTo1970) / 1e4),
                                y = D.getFullYear(),
                                _ = D.getMonth() + 1,
                                w = D.getDate();
                                break;
                            case "'":
                                C("'") ? M() : T = !0;
                                break;
                            default:
                                M()
                            }
                    if (p < a.length && (c = a.substr(p),
                    !/^\s+/.test(c)))
                        throw "Extra/unparsed characters found in date: " + c;
                    if (y === -1 ? y = new Date().getFullYear() : y < 100 && (y += new Date().getFullYear() - new Date().getFullYear() % 100 + (y <= d ? 0 : -100)),
                    x > -1) {
                        _ = 1,
                        w = x;
                        do {
                            if (u = this._getDaysInMonth(y, _ - 1),
                            w <= u)
                                break;
                            _++,
                            w -= u
                        } while (!0)
                    }
                    if (D = this._daylightSavingAdjust(new Date(y,_ - 1,w)),
                    D.getFullYear() !== y || D.getMonth() + 1 !== _ || D.getDate() !== w)
                        throw "Invalid date";
                    return D
                },
                ATOM: "yy-mm-dd",
                COOKIE: "D, dd M yy",
                ISO_8601: "yy-mm-dd",
                RFC_822: "D, d M y",
                RFC_850: "DD, dd-M-y",
                RFC_1036: "D, d M y",
                RFC_1123: "D, d M yy",
                RFC_2822: "D, d M yy",
                RSS: "D, d M y",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yy-mm-dd",
                _ticksTo1970: (1969 * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7,
                formatDate: function(t, a, o) {
                    if (!a)
                        return "";
                    var l, u = (o ? o.dayNamesShort : null) || this._defaults.dayNamesShort, c = (o ? o.dayNames : null) || this._defaults.dayNames, p = (o ? o.monthNamesShort : null) || this._defaults.monthNamesShort, f = (o ? o.monthNames : null) || this._defaults.monthNames, d = function(y) {
                        var _ = l + 1 < t.length && t.charAt(l + 1) === y;
                        return _ && l++,
                        _
                    }, m = function(y, _, w) {
                        var x = "" + _;
                        if (d(y))
                            for (; x.length < w; )
                                x = "0" + x;
                        return x
                    }, b = function(y, _, w, x) {
                        return d(y) ? x[_] : w[_]
                    }, g = "", v = !1;
                    if (a)
                        for (l = 0; l < t.length; l++)
                            if (v)
                                t.charAt(l) === "'" && !d("'") ? v = !1 : g += t.charAt(l);
                            else
                                switch (t.charAt(l)) {
                                case "d":
                                    g += m("d", a.getDate(), 2);
                                    break;
                                case "D":
                                    g += b("D", a.getDay(), u, c);
                                    break;
                                case "o":
                                    g += m("o", Math.round((new Date(a.getFullYear(),a.getMonth(),a.getDate()).getTime() - new Date(a.getFullYear(),0,0).getTime()) / 864e5), 3);
                                    break;
                                case "m":
                                    g += m("m", a.getMonth() + 1, 2);
                                    break;
                                case "M":
                                    g += b("M", a.getMonth(), p, f);
                                    break;
                                case "y":
                                    g += d("y") ? a.getFullYear() : (a.getYear() % 100 < 10 ? "0" : "") + a.getYear() % 100;
                                    break;
                                case "@":
                                    g += a.getTime();
                                    break;
                                case "!":
                                    g += a.getTime() * 1e4 + this._ticksTo1970;
                                    break;
                                case "'":
                                    d("'") ? g += "'" : v = !0;
                                    break;
                                default:
                                    g += t.charAt(l)
                                }
                    return g
                },
                _possibleChars: function(t) {
                    var a, o = "", l = !1, u = function(c) {
                        var p = a + 1 < t.length && t.charAt(a + 1) === c;
                        return p && a++,
                        p
                    };
                    for (a = 0; a < t.length; a++)
                        if (l)
                            t.charAt(a) === "'" && !u("'") ? l = !1 : o += t.charAt(a);
                        else
                            switch (t.charAt(a)) {
                            case "d":
                            case "m":
                            case "y":
                            case "@":
                                o += "0123456789";
                                break;
                            case "D":
                            case "M":
                                return null;
                            case "'":
                                u("'") ? o += "'" : l = !0;
                                break;
                            default:
                                o += t.charAt(a)
                            }
                    return o
                },
                _get: function(t, a) {
                    return t.settings[a] !== I ? t.settings[a] : this._defaults[a]
                },
                _setDateFromField: function(t, a) {
                    if (t.input.val() !== t.lastVal) {
                        var o = this._get(t, "dateFormat")
                          , l = t.lastVal = t.input ? t.input.val() : null
                          , u = this._getDefaultDate(t)
                          , c = u
                          , p = this._getFormatConfig(t);
                        try {
                            c = this.parseDate(o, l, p) || u
                        } catch {
                            l = a ? "" : l
                        }
                        t.selectedDay = c.getDate(),
                        t.drawMonth = t.selectedMonth = c.getMonth(),
                        t.drawYear = t.selectedYear = c.getFullYear(),
                        t.currentDay = l ? c.getDate() : 0,
                        t.currentMonth = l ? c.getMonth() : 0,
                        t.currentYear = l ? c.getFullYear() : 0,
                        this._adjustInstDate(t)
                    }
                },
                _getDefaultDate: function(t) {
                    return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
                },
                _determineDate: function(t, a, o) {
                    var l = function(p) {
                        var f = new Date;
                        return f.setDate(f.getDate() + p),
                        f
                    }
                      , u = function(p) {
                        try {
                            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), p, e.datepicker._getFormatConfig(t))
                        } catch {}
                        for (var f = (p.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, d = f.getFullYear(), m = f.getMonth(), b = f.getDate(), g = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, v = g.exec(p); v; ) {
                            switch (v[2] || "d") {
                            case "d":
                            case "D":
                                b += parseInt(v[1], 10);
                                break;
                            case "w":
                            case "W":
                                b += parseInt(v[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                m += parseInt(v[1], 10),
                                b = Math.min(b, e.datepicker._getDaysInMonth(d, m));
                                break;
                            case "y":
                            case "Y":
                                d += parseInt(v[1], 10),
                                b = Math.min(b, e.datepicker._getDaysInMonth(d, m));
                                break
                            }
                            v = g.exec(p)
                        }
                        return new Date(d,m,b)
                    }
                      , c = a == null || a === "" ? o : typeof a == "string" ? u(a) : typeof a == "number" ? isNaN(a) ? o : l(a) : new Date(a.getTime());
                    return c = c && c.toString() === "Invalid Date" ? o : c,
                    c && (c.setHours(0),
                    c.setMinutes(0),
                    c.setSeconds(0),
                    c.setMilliseconds(0)),
                    this._daylightSavingAdjust(c)
                },
                _daylightSavingAdjust: function(t) {
                    return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0),
                    t) : null
                },
                _setDate: function(t, a, o) {
                    var l = !a
                      , u = t.selectedMonth
                      , c = t.selectedYear
                      , p = this._restrictMinMax(t, this._determineDate(t, a, new Date));
                    t.selectedDay = t.currentDay = p.getDate(),
                    t.drawMonth = t.selectedMonth = t.currentMonth = p.getMonth(),
                    t.drawYear = t.selectedYear = t.currentYear = p.getFullYear(),
                    (u !== t.selectedMonth || c !== t.selectedYear) && !o && this._notifyChange(t),
                    this._adjustInstDate(t),
                    t.input && t.input.val(l ? "" : this._formatDate(t))
                },
                _getDate: function(t) {
                    var a = !t.currentYear || t.input && t.input.val() === "" ? null : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
                    return a
                },
                _attachHandlers: function(t) {
                    var a = this._get(t, "stepMonths")
                      , o = "#" + t.id.replace(/\\\\/g, "\\");
                    t.dpDiv.find("[data-handler]").map(function() {
                        var l = {
                            prev: function() {
                                e.datepicker._adjustDate(o, -a, "M")
                            },
                            next: function() {
                                e.datepicker._adjustDate(o, +a, "M")
                            },
                            hide: function() {
                                e.datepicker._hideDatepicker()
                            },
                            today: function() {
                                e.datepicker._gotoToday(o)
                            },
                            selectDay: function() {
                                return e.datepicker._selectDay(o, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                                !1
                            },
                            selectMonth: function() {
                                return e.datepicker._selectMonthYear(o, this, "M"),
                                !1
                            },
                            selectYear: function() {
                                return e.datepicker._selectMonthYear(o, this, "Y"),
                                !1
                            }
                        };
                        e(this).bind(this.getAttribute("data-event"), l[this.getAttribute("data-handler")])
                    })
                },
                _generateHTML: function(t) {
                    var a, o, l, u, c, p, f, d, m, b, g, v, y, _, w, x, T, D, C, k, P, M, S, H, L, E, W, Y, z, F, K, R, U, A, V, j, J, X, Z, $ = new Date, tt = this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth(),$.getDate())), B = this._get(t, "isRTL"), lt = this._get(t, "showButtonPanel"), ot = this._get(t, "hideIfNoPrevNext"), et = this._get(t, "navigationAsDateFormat"), q = this._getNumberOfMonths(t), ht = this._get(t, "showCurrentAtPos"), rt = this._get(t, "stepMonths"), it = q[0] !== 1 || q[1] !== 1, st = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear,t.currentMonth,t.currentDay) : new Date(9999,9,9)), Q = this._getMinMaxDate(t, "min"), G = this._getMinMaxDate(t, "max"), N = t.drawMonth - ht, O = t.drawYear;
                    if (N < 0 && (N += 12,
                    O--),
                    G)
                        for (a = this._daylightSavingAdjust(new Date(G.getFullYear(),G.getMonth() - q[0] * q[1] + 1,G.getDate())),
                        a = Q && a < Q ? Q : a; this._daylightSavingAdjust(new Date(O,N,1)) > a; )
                            N--,
                            N < 0 && (N = 11,
                            O--);
                    for (t.drawMonth = N,
                    t.drawYear = O,
                    o = this._get(t, "prevText"),
                    o = et ? this.formatDate(o, this._daylightSavingAdjust(new Date(O,N - rt,1)), this._getFormatConfig(t)) : o,
                    l = this._canAdjustMonth(t, -1, O, N) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + o + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + o + "</span></a>" : ot ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + o + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + o + "</span></a>",
                    u = this._get(t, "nextText"),
                    u = et ? this.formatDate(u, this._daylightSavingAdjust(new Date(O,N + rt,1)), this._getFormatConfig(t)) : u,
                    c = this._canAdjustMonth(t, 1, O, N) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + u + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + u + "</span></a>" : ot ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + u + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + u + "</span></a>",
                    p = this._get(t, "currentText"),
                    f = this._get(t, "gotoCurrent") && t.currentDay ? st : tt,
                    p = et ? this.formatDate(p, f, this._getFormatConfig(t)) : p,
                    d = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>",
                    m = lt ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? d : "") + (this._isInRange(t, f) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + p + "</button>" : "") + (B ? "" : d) + "</div>" : "",
                    b = parseInt(this._get(t, "firstDay"), 10),
                    b = isNaN(b) ? 0 : b,
                    g = this._get(t, "showWeek"),
                    v = this._get(t, "dayNames"),
                    y = this._get(t, "dayNamesMin"),
                    _ = this._get(t, "monthNames"),
                    w = this._get(t, "monthNamesShort"),
                    x = this._get(t, "beforeShowDay"),
                    T = this._get(t, "showOtherMonths"),
                    D = this._get(t, "selectOtherMonths"),
                    C = this._getDefaultDate(t),
                    k = "",
                    M = 0; M < q[0]; M++) {
                        for (S = "",
                        this.maxRows = 4,
                        H = 0; H < q[1]; H++) {
                            if (L = this._daylightSavingAdjust(new Date(O,N,t.selectedDay)),
                            E = " ui-corner-all",
                            W = "",
                            it) {
                                if (W += "<div class='ui-datepicker-group",
                                q[1] > 1)
                                    switch (H) {
                                    case 0:
                                        W += " ui-datepicker-group-first",
                                        E = " ui-corner-" + (B ? "right" : "left");
                                        break;
                                    case q[1] - 1:
                                        W += " ui-datepicker-group-last",
                                        E = " ui-corner-" + (B ? "left" : "right");
                                        break;
                                    default:
                                        W += " ui-datepicker-group-middle",
                                        E = "";
                                        break
                                    }
                                W += "'>"
                            }
                            for (W += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + E + "'>" + (/all|left/.test(E) && M === 0 ? B ? c : l : "") + (/all|right/.test(E) && M === 0 ? B ? l : c : "") + this._generateMonthYearHeader(t, N, O, Q, G, M > 0 || H > 0, _, w) + "</div><table class='ui-datepicker-calendar'><thead><tr>",
                            Y = g ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "",
                            P = 0; P < 7; P++)
                                z = (P + b) % 7,
                                Y += "<th" + ((P + b + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + v[z] + "'>" + y[z] + "</span></th>";
                            for (W += Y + "</tr></thead><tbody>",
                            F = this._getDaysInMonth(O, N),
                            O === t.selectedYear && N === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, F)),
                            K = (this._getFirstDayOfMonth(O, N) - b + 7) % 7,
                            R = Math.ceil((K + F) / 7),
                            U = it && this.maxRows > R ? this.maxRows : R,
                            this.maxRows = U,
                            A = this._daylightSavingAdjust(new Date(O,N,1 - K)),
                            V = 0; V < U; V++) {
                                for (W += "<tr>",
                                j = g ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "",
                                P = 0; P < 7; P++)
                                    J = x ? x.apply(t.input ? t.input[0] : null, [A]) : [!0, ""],
                                    X = A.getMonth() !== N,
                                    Z = X && !D || !J[0] || Q && A < Q || G && A > G,
                                    j += "<td class='" + ((P + b + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (X ? " ui-datepicker-other-month" : "") + (A.getTime() === L.getTime() && N === t.selectedMonth && t._keyEvent || C.getTime() === A.getTime() && C.getTime() === L.getTime() ? " " + this._dayOverClass : "") + (Z ? " " + this._unselectableClass + " ui-state-disabled" : "") + (X && !T ? "" : " " + J[1] + (A.getTime() === st.getTime() ? " " + this._currentClass : "") + (A.getTime() === tt.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!X || T) && J[2] ? " title='" + J[2].replace(/'/g, "&#39;") + "'" : "") + (Z ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (X && !T ? "&#xa0;" : Z ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === tt.getTime() ? " ui-state-highlight" : "") + (A.getTime() === st.getTime() ? " ui-state-active" : "") + (X ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>",
                                    A.setDate(A.getDate() + 1),
                                    A = this._daylightSavingAdjust(A);
                                W += j + "</tr>"
                            }
                            N++,
                            N > 11 && (N = 0,
                            O++),
                            W += "</tbody></table>" + (it ? "</div>" + (q[0] > 0 && H === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""),
                            S += W
                        }
                        k += S
                    }
                    return k += m,
                    t._keyEvent = !1,
                    k
                },
                _generateMonthYearHeader: function(t, a, o, l, u, c, p, f) {
                    var d, m, b, g, v, y, _, w, x = this._get(t, "changeMonth"), T = this._get(t, "changeYear"), D = this._get(t, "showMonthAfterYear"), C = "<div class='ui-datepicker-title'>", k = "";
                    if (c || !x)
                        k += "<span class='ui-datepicker-month'>" + p[a] + "</span>";
                    else {
                        for (d = l && l.getFullYear() === o,
                        m = u && u.getFullYear() === o,
                        k += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                        b = 0; b < 12; b++)
                            (!d || b >= l.getMonth()) && (!m || b <= u.getMonth()) && (k += "<option value='" + b + "'" + (b === a ? " selected='selected'" : "") + ">" + f[b] + "</option>");
                        k += "</select>"
                    }
                    if (D || (C += k + (c || !(x && T) ? "&#xa0;" : "")),
                    !t.yearshtml)
                        if (t.yearshtml = "",
                        c || !T)
                            C += "<span class='ui-datepicker-year'>" + o + "</span>";
                        else {
                            for (g = this._get(t, "yearRange").split(":"),
                            v = new Date().getFullYear(),
                            y = function(P) {
                                var M = P.match(/c[+\-].*/) ? o + parseInt(P.substring(1), 10) : P.match(/[+\-].*/) ? v + parseInt(P, 10) : parseInt(P, 10);
                                return isNaN(M) ? v : M
                            }
                            ,
                            _ = y(g[0]),
                            w = Math.max(_, y(g[1] || "")),
                            _ = l ? Math.max(_, l.getFullYear()) : _,
                            w = u ? Math.min(w, u.getFullYear()) : w,
                            t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; _ <= w; _++)
                                t.yearshtml += "<option value='" + _ + "'" + (_ === o ? " selected='selected'" : "") + ">" + _ + "</option>";
                            t.yearshtml += "</select>",
                            C += t.yearshtml,
                            t.yearshtml = null
                        }
                    return C += this._get(t, "yearSuffix"),
                    D && (C += (c || !(x && T) ? "&#xa0;" : "") + k),
                    C += "</div>",
                    C
                },
                _adjustInstDate: function(t, a, o) {
                    var l = t.drawYear + (o === "Y" ? a : 0)
                      , u = t.drawMonth + (o === "M" ? a : 0)
                      , c = Math.min(t.selectedDay, this._getDaysInMonth(l, u)) + (o === "D" ? a : 0)
                      , p = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(l,u,c)));
                    t.selectedDay = p.getDate(),
                    t.drawMonth = t.selectedMonth = p.getMonth(),
                    t.drawYear = t.selectedYear = p.getFullYear(),
                    (o === "M" || o === "Y") && this._notifyChange(t)
                },
                _restrictMinMax: function(t, a) {
                    var o = this._getMinMaxDate(t, "min")
                      , l = this._getMinMaxDate(t, "max")
                      , u = o && a < o ? o : a;
                    return l && u > l ? l : u
                },
                _notifyChange: function(t) {
                    var a = this._get(t, "onChangeMonthYear");
                    a && a.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
                },
                _getNumberOfMonths: function(t) {
                    var a = this._get(t, "numberOfMonths");
                    return a == null ? [1, 1] : typeof a == "number" ? [1, a] : a
                },
                _getMinMaxDate: function(t, a) {
                    return this._determineDate(t, this._get(t, a + "Date"), null)
                },
                _getDaysInMonth: function(t, a) {
                    return 32 - this._daylightSavingAdjust(new Date(t,a,32)).getDate()
                },
                _getFirstDayOfMonth: function(t, a) {
                    return new Date(t,a,1).getDay()
                },
                _canAdjustMonth: function(t, a, o, l) {
                    var u = this._getNumberOfMonths(t)
                      , c = this._daylightSavingAdjust(new Date(o,l + (a < 0 ? a : u[0] * u[1]),1));
                    return a < 0 && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth())),
                    this._isInRange(t, c)
                },
                _isInRange: function(t, a) {
                    var o, l, u = this._getMinMaxDate(t, "min"), c = this._getMinMaxDate(t, "max"), p = null, f = null, d = this._get(t, "yearRange");
                    return d && (o = d.split(":"),
                    l = new Date().getFullYear(),
                    p = parseInt(o[0], 10),
                    f = parseInt(o[1], 10),
                    o[0].match(/[+\-].*/) && (p += l),
                    o[1].match(/[+\-].*/) && (f += l)),
                    (!u || a.getTime() >= u.getTime()) && (!c || a.getTime() <= c.getTime()) && (!p || a.getFullYear() >= p) && (!f || a.getFullYear() <= f)
                },
                _getFormatConfig: function(t) {
                    var a = this._get(t, "shortYearCutoff");
                    return a = typeof a != "string" ? a : new Date().getFullYear() % 100 + parseInt(a, 10),
                    {
                        shortYearCutoff: a,
                        dayNamesShort: this._get(t, "dayNamesShort"),
                        dayNames: this._get(t, "dayNames"),
                        monthNamesShort: this._get(t, "monthNamesShort"),
                        monthNames: this._get(t, "monthNames")
                    }
                },
                _formatDate: function(t, a, o, l) {
                    a || (t.currentDay = t.selectedDay,
                    t.currentMonth = t.selectedMonth,
                    t.currentYear = t.selectedYear);
                    var u = a ? typeof a == "object" ? a : this._daylightSavingAdjust(new Date(l,o,a)) : this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));
                    return this.formatDate(this._get(t, "dateFormat"), u, this._getFormatConfig(t))
                }
            });
            function s(t) {
                var a = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
                return t.delegate(a, "mouseout", function() {
                    e(this).removeClass("ui-state-hover"),
                    this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).removeClass("ui-datepicker-prev-hover"),
                    this.className.indexOf("ui-datepicker-next") !== -1 && e(this).removeClass("ui-datepicker-next-hover")
                }).delegate(a, "mouseover", function() {
                    e.datepicker._isDisabledDatepicker(r.inline ? t.parent()[0] : r.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
                    e(this).addClass("ui-state-hover"),
                    this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).addClass("ui-datepicker-prev-hover"),
                    this.className.indexOf("ui-datepicker-next") !== -1 && e(this).addClass("ui-datepicker-next-hover"))
                })
            }
            function n(t, a) {
                e.extend(t, a);
                for (var o in a)
                    a[o] == null && (t[o] = a[o]);
                return t
            }
            e.fn.datepicker = function(t) {
                if (!this.length)
                    return this;
                e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick),
                e.datepicker.initialized = !0),
                e("#" + e.datepicker._mainDivId).length === 0 && e("body").append(e.datepicker.dpDiv);
                var a = Array.prototype.slice.call(arguments, 1);
                return typeof t == "string" && (t === "isDisabled" || t === "getDate" || t === "widget") ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(a)) : t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(a)) : this.each(function() {
                    typeof t == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(a)) : e.datepicker._attachDatepicker(this, t)
                })
            }
            ,
            e.datepicker = new i,
            e.datepicker.initialized = !1,
            e.datepicker.uuid = new Date().getTime(),
            e.datepicker.version = "1.10.3"
        }(jQuery),
        function(e, I) {
            var h = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            }
              , r = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
            e.widget("ui.dialog", {
                version: "1.10.3",
                options: {
                    appendTo: "body",
                    autoOpen: !0,
                    buttons: [],
                    closeOnEscape: !0,
                    closeText: "close",
                    dialogClass: "",
                    draggable: !0,
                    hide: null,
                    height: "auto",
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 150,
                    minWidth: 150,
                    modal: !1,
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                        using: function(i) {
                            var s = e(this).css(i).offset().top;
                            s < 0 && e(this).css("top", i.top - s)
                        }
                    },
                    resizable: !0,
                    show: null,
                    title: null,
                    width: 300,
                    beforeClose: null,
                    close: null,
                    drag: null,
                    dragStart: null,
                    dragStop: null,
                    focus: null,
                    open: null,
                    resize: null,
                    resizeStart: null,
                    resizeStop: null
                },
                _create: function() {
                    this.originalCss = {
                        display: this.element[0].style.display,
                        width: this.element[0].style.width,
                        minHeight: this.element[0].style.minHeight,
                        maxHeight: this.element[0].style.maxHeight,
                        height: this.element[0].style.height
                    },
                    this.originalPosition = {
                        parent: this.element.parent(),
                        index: this.element.parent().children().index(this.element)
                    },
                    this.originalTitle = this.element.attr("title"),
                    this.options.title = this.options.title || this.originalTitle,
                    this._createWrapper(),
                    this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),
                    this._createTitlebar(),
                    this._createButtonPane(),
                    this.options.draggable && e.fn.draggable && this._makeDraggable(),
                    this.options.resizable && e.fn.resizable && this._makeResizable(),
                    this._isOpen = !1
                },
                _init: function() {
                    this.options.autoOpen && this.open()
                },
                _appendTo: function() {
                    var i = this.options.appendTo;
                    return i && (i.jquery || i.nodeType) ? e(i) : this.document.find(i || "body").eq(0)
                },
                _destroy: function() {
                    var i, s = this.originalPosition;
                    this._destroyOverlay(),
                    this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),
                    this.uiDialog.stop(!0, !0).remove(),
                    this.originalTitle && this.element.attr("title", this.originalTitle),
                    i = s.parent.children().eq(s.index),
                    i.length && i[0] !== this.element[0] ? i.before(this.element) : s.parent.append(this.element)
                },
                widget: function() {
                    return this.uiDialog
                },
                disable: e.noop,
                enable: e.noop,
                close: function(i) {
                    var s = this;
                    !this._isOpen || this._trigger("beforeClose", i) === !1 || (this._isOpen = !1,
                    this._destroyOverlay(),
                    this.opener.filter(":focusable").focus().length || e(this.document[0].activeElement).blur(),
                    this._hide(this.uiDialog, this.options.hide, function() {
                        s._trigger("close", i)
                    }))
                },
                isOpen: function() {
                    return this._isOpen
                },
                moveToTop: function() {
                    this._moveToTop()
                },
                _moveToTop: function(i, s) {
                    var n = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
                    return n && !s && this._trigger("focus", i),
                    n
                },
                open: function() {
                    var i = this;
                    if (this._isOpen) {
                        this._moveToTop() && this._focusTabbable();
                        return
                    }
                    this._isOpen = !0,
                    this.opener = e(this.document[0].activeElement),
                    this._size(),
                    this._position(),
                    this._createOverlay(),
                    this._moveToTop(null, !0),
                    this._show(this.uiDialog, this.options.show, function() {
                        i._focusTabbable(),
                        i._trigger("focus")
                    }),
                    this._trigger("open")
                },
                _focusTabbable: function() {
                    var i = this.element.find("[autofocus]");
                    i.length || (i = this.element.find(":tabbable")),
                    i.length || (i = this.uiDialogButtonPane.find(":tabbable")),
                    i.length || (i = this.uiDialogTitlebarClose.filter(":tabbable")),
                    i.length || (i = this.uiDialog),
                    i.eq(0).focus()
                },
                _keepFocus: function(i) {
                    function s() {
                        var n = this.document[0].activeElement
                          , t = this.uiDialog[0] === n || e.contains(this.uiDialog[0], n);
                        t || this._focusTabbable()
                    }
                    i.preventDefault(),
                    s.call(this),
                    this._delay(s)
                },
                _createWrapper: function() {
                    this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                        tabIndex: -1,
                        role: "dialog"
                    }).appendTo(this._appendTo()),
                    this._on(this.uiDialog, {
                        keydown: function(i) {
                            if (this.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === e.ui.keyCode.ESCAPE) {
                                i.preventDefault(),
                                this.close(i);
                                return
                            }
                            if (i.keyCode === e.ui.keyCode.TAB) {
                                var s = this.uiDialog.find(":tabbable")
                                  , n = s.filter(":first")
                                  , t = s.filter(":last");
                                (i.target === t[0] || i.target === this.uiDialog[0]) && !i.shiftKey ? (n.focus(1),
                                i.preventDefault()) : (i.target === n[0] || i.target === this.uiDialog[0]) && i.shiftKey && (t.focus(1),
                                i.preventDefault())
                            }
                        },
                        mousedown: function(i) {
                            this._moveToTop(i) && this._focusTabbable()
                        }
                    }),
                    this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                        "aria-describedby": this.element.uniqueId().attr("id")
                    })
                },
                _createTitlebar: function() {
                    var i;
                    this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),
                    this._on(this.uiDialogTitlebar, {
                        mousedown: function(s) {
                            e(s.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                        }
                    }),
                    this.uiDialogTitlebarClose = e("<button></button>").button({
                        label: this.options.closeText,
                        icons: {
                            primary: "ui-icon-closethick"
                        },
                        text: !1
                    }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),
                    this._on(this.uiDialogTitlebarClose, {
                        click: function(s) {
                            s.preventDefault(),
                            this.close(s)
                        }
                    }),
                    i = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),
                    this._title(i),
                    this.uiDialog.attr({
                        "aria-labelledby": i.attr("id")
                    })
                },
                _title: function(i) {
                    this.options.title || i.html("&#160;"),
                    i.text(this.options.title)
                },
                _createButtonPane: function() {
                    this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                    this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),
                    this._createButtons()
                },
                _createButtons: function() {
                    var i = this
                      , s = this.options.buttons;
                    if (this.uiDialogButtonPane.remove(),
                    this.uiButtonSet.empty(),
                    e.isEmptyObject(s) || e.isArray(s) && !s.length) {
                        this.uiDialog.removeClass("ui-dialog-buttons");
                        return
                    }
                    e.each(s, function(n, t) {
                        var a, o;
                        t = e.isFunction(t) ? {
                            click: t,
                            text: n
                        } : t,
                        t = e.extend({
                            type: "button"
                        }, t),
                        a = t.click,
                        t.click = function() {
                            a.apply(i.element[0], arguments)
                        }
                        ,
                        o = {
                            icons: t.icons,
                            text: t.showText
                        },
                        delete t.icons,
                        delete t.showText,
                        e("<button></button>", t).button(o).appendTo(i.uiButtonSet)
                    }),
                    this.uiDialog.addClass("ui-dialog-buttons"),
                    this.uiDialogButtonPane.appendTo(this.uiDialog)
                },
                _makeDraggable: function() {
                    var i = this
                      , s = this.options;
                    function n(t) {
                        return {
                            position: t.position,
                            offset: t.offset
                        }
                    }
                    this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                        handle: ".ui-dialog-titlebar",
                        containment: "document",
                        start: function(t, a) {
                            e(this).addClass("ui-dialog-dragging"),
                            i._blockFrames(),
                            i._trigger("dragStart", t, n(a))
                        },
                        drag: function(t, a) {
                            i._trigger("drag", t, n(a))
                        },
                        stop: function(t, a) {
                            s.position = [a.position.left - i.document.scrollLeft(), a.position.top - i.document.scrollTop()],
                            e(this).removeClass("ui-dialog-dragging"),
                            i._unblockFrames(),
                            i._trigger("dragStop", t, n(a))
                        }
                    })
                },
                _makeResizable: function() {
                    var i = this
                      , s = this.options
                      , n = s.resizable
                      , t = this.uiDialog.css("position")
                      , a = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw";
                    function o(l) {
                        return {
                            originalPosition: l.originalPosition,
                            originalSize: l.originalSize,
                            position: l.position,
                            size: l.size
                        }
                    }
                    this.uiDialog.resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: this.element,
                        maxWidth: s.maxWidth,
                        maxHeight: s.maxHeight,
                        minWidth: s.minWidth,
                        minHeight: this._minHeight(),
                        handles: a,
                        start: function(l, u) {
                            e(this).addClass("ui-dialog-resizing"),
                            i._blockFrames(),
                            i._trigger("resizeStart", l, o(u))
                        },
                        resize: function(l, u) {
                            i._trigger("resize", l, o(u))
                        },
                        stop: function(l, u) {
                            s.height = e(this).height(),
                            s.width = e(this).width(),
                            e(this).removeClass("ui-dialog-resizing"),
                            i._unblockFrames(),
                            i._trigger("resizeStop", l, o(u))
                        }
                    }).css("position", t)
                },
                _minHeight: function() {
                    var i = this.options;
                    return i.height === "auto" ? i.minHeight : Math.min(i.minHeight, i.height)
                },
                _position: function() {
                    var i = this.uiDialog.is(":visible");
                    i || this.uiDialog.show(),
                    this.uiDialog.position(this.options.position),
                    i || this.uiDialog.hide()
                },
                _setOptions: function(i) {
                    var s = this
                      , n = !1
                      , t = {};
                    e.each(i, function(a, o) {
                        s._setOption(a, o),
                        a in h && (n = !0),
                        a in r && (t[a] = o)
                    }),
                    n && (this._size(),
                    this._position()),
                    this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", t)
                },
                _setOption: function(i, s) {
                    var n, t, a = this.uiDialog;
                    i === "dialogClass" && a.removeClass(this.options.dialogClass).addClass(s),
                    i !== "disabled" && (this._super(i, s),
                    i === "appendTo" && this.uiDialog.appendTo(this._appendTo()),
                    i === "buttons" && this._createButtons(),
                    i === "closeText" && this.uiDialogTitlebarClose.button({
                        label: "" + s
                    }),
                    i === "draggable" && (n = a.is(":data(ui-draggable)"),
                    n && !s && a.draggable("destroy"),
                    !n && s && this._makeDraggable()),
                    i === "position" && this._position(),
                    i === "resizable" && (t = a.is(":data(ui-resizable)"),
                    t && !s && a.resizable("destroy"),
                    t && typeof s == "string" && a.resizable("option", "handles", s),
                    !t && s !== !1 && this._makeResizable()),
                    i === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                },
                _size: function() {
                    var i, s, n, t = this.options;
                    this.element.show().css({
                        width: "auto",
                        minHeight: 0,
                        maxHeight: "none",
                        height: 0
                    }),
                    t.minWidth > t.width && (t.width = t.minWidth),
                    i = this.uiDialog.css({
                        height: "auto",
                        width: t.width
                    }).outerHeight(),
                    s = Math.max(0, t.minHeight - i),
                    n = typeof t.maxHeight == "number" ? Math.max(0, t.maxHeight - i) : "none",
                    t.height === "auto" ? this.element.css({
                        minHeight: s,
                        maxHeight: n,
                        height: "auto"
                    }) : this.element.height(Math.max(0, t.height - i)),
                    this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                },
                _blockFrames: function() {
                    this.iframeBlocks = this.document.find("iframe").map(function() {
                        var i = e(this);
                        return e("<div>").css({
                            position: "absolute",
                            width: i.outerWidth(),
                            height: i.outerHeight()
                        }).appendTo(i.parent()).offset(i.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(),
                    delete this.iframeBlocks)
                },
                _allowInteraction: function(i) {
                    return e(i.target).closest(".ui-dialog").length ? !0 : !!e(i.target).closest(".ui-datepicker").length
                },
                _createOverlay: function() {
                    if (this.options.modal) {
                        var i = this
                          , s = this.widgetFullName;
                        e.ui.dialog.overlayInstances || this._delay(function() {
                            e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(n) {
                                i._allowInteraction(n) || (n.preventDefault(),
                                e(".ui-dialog:visible:last .ui-dialog-content").data(s)._focusTabbable())
                            })
                        }),
                        this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),
                        this._on(this.overlay, {
                            mousedown: "_keepFocus"
                        }),
                        e.ui.dialog.overlayInstances++
                    }
                },
                _destroyOverlay: function() {
                    this.options.modal && this.overlay && (e.ui.dialog.overlayInstances--,
                    e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"),
                    this.overlay.remove(),
                    this.overlay = null)
                }
            }),
            e.ui.dialog.overlayInstances = 0,
            e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
                _position: function() {
                    var i = this.options.position, s = [], n = [0, 0], t;
                    i ? ((typeof i == "string" || typeof i == "object" && "0"in i) && (s = i.split ? i.split(" ") : [i[0], i[1]],
                    s.length === 1 && (s[1] = s[0]),
                    e.each(["left", "top"], function(a, o) {
                        +s[a] === s[a] && (n[a] = s[a],
                        s[a] = o)
                    }),
                    i = {
                        my: s[0] + (n[0] < 0 ? n[0] : "+" + n[0]) + " " + s[1] + (n[1] < 0 ? n[1] : "+" + n[1]),
                        at: s.join(" ")
                    }),
                    i = e.extend({}, e.ui.dialog.prototype.options.position, i)) : i = e.ui.dialog.prototype.options.position,
                    t = this.uiDialog.is(":visible"),
                    t || this.uiDialog.show(),
                    this.uiDialog.position(i),
                    t || this.uiDialog.hide()
                }
            })
        }(jQuery),
        function(e, I) {
            e.widget("ui.menu", {
                version: "1.10.3",
                defaultElement: "<ul>",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-carat-1-e"
                    },
                    menus: "ul",
                    position: {
                        my: "left top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function() {
                    this.activeMenu = this.element,
                    this.mouseHandled = !1,
                    this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                        role: this.options.role,
                        tabIndex: 0
                    }).bind("click" + this.eventNamespace, e.proxy(function(h) {
                        this.options.disabled && h.preventDefault()
                    }, this)),
                    this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
                    this._on({
                        "mousedown .ui-menu-item > a": function(h) {
                            h.preventDefault()
                        },
                        "click .ui-state-disabled > a": function(h) {
                            h.preventDefault()
                        },
                        "click .ui-menu-item:has(a)": function(h) {
                            var r = e(h.target).closest(".ui-menu-item");
                            !this.mouseHandled && r.not(".ui-state-disabled").length && (this.mouseHandled = !0,
                            this.select(h),
                            r.has(".ui-menu").length ? this.expand(h) : this.element.is(":focus") || (this.element.trigger("focus", [!0]),
                            this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(h) {
                            var r = e(h.currentTarget);
                            r.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                            this.focus(h, r)
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(h, r) {
                            var i = this.active || this.element.children(".ui-menu-item").eq(0);
                            r || this.focus(h, i)
                        },
                        blur: function(h) {
                            this._delay(function() {
                                e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(h)
                            })
                        },
                        keydown: "_keydown"
                    }),
                    this.refresh(),
                    this._on(this.document, {
                        click: function(h) {
                            e(h.target).closest(".ui-menu").length || this.collapseAll(h),
                            this.mouseHandled = !1
                        }
                    })
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
                    this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var h = e(this);
                        h.data("ui-menu-submenu-carat") && h.remove()
                    }),
                    this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                },
                _keydown: function(h) {
                    var r, i, s, n, t, a = !0;
                    function o(l) {
                        return l.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                    }
                    switch (h.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(h);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(h);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", h);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", h);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(h);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(h);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(h);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(h);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(h);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(h);
                        break;
                    default:
                        a = !1,
                        i = this.previousFilter || "",
                        s = String.fromCharCode(h.keyCode),
                        n = !1,
                        clearTimeout(this.filterTimer),
                        s === i ? n = !0 : s = i + s,
                        t = new RegExp("^" + o(s),"i"),
                        r = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return t.test(e(this).children("a").text())
                        }),
                        r = n && r.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : r,
                        r.length || (s = String.fromCharCode(h.keyCode),
                        t = new RegExp("^" + o(s),"i"),
                        r = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return t.test(e(this).children("a").text())
                        })),
                        r.length ? (this.focus(h, r),
                        r.length > 1 ? (this.previousFilter = s,
                        this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                    }
                    a && h.preventDefault()
                },
                _activate: function(h) {
                    this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(h) : this.select(h))
                },
                refresh: function() {
                    var h, r = this.options.icons.submenu, i = this.element.find(this.options.menus);
                    i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var s = e(this)
                          , n = s.prev("a")
                          , t = e("<span>").addClass("ui-menu-icon ui-icon " + r).data("ui-menu-submenu-carat", !0);
                        n.attr("aria-haspopup", "true").prepend(t),
                        s.attr("aria-labelledby", n.attr("id"))
                    }),
                    h = i.add(this.element),
                    h.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    }),
                    h.children(":not(.ui-menu-item)").each(function() {
                        var s = e(this);
                        /[^\-\u2014\u2013\s]/.test(s.text()) || s.addClass("ui-widget-content ui-menu-divider")
                    }),
                    h.children(".ui-state-disabled").attr("aria-disabled", "true"),
                    this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    }[this.options.role]
                },
                _setOption: function(h, r) {
                    h === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(r.submenu),
                    this._super(h, r)
                },
                focus: function(h, r) {
                    var i, s;
                    this.blur(h, h && h.type === "focus"),
                    this._scrollIntoView(r),
                    this.active = r.first(),
                    s = this.active.children("a").addClass("ui-state-focus"),
                    this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
                    this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
                    h && h.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                        this._close()
                    }, this.delay),
                    i = r.children(".ui-menu"),
                    i.length && /^mouse/.test(h.type) && this._startOpening(i),
                    this.activeMenu = r.parent(),
                    this._trigger("focus", h, {
                        item: r
                    })
                },
                _scrollIntoView: function(h) {
                    var r, i, s, n, t, a;
                    this._hasScroll() && (r = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0,
                    i = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0,
                    s = h.offset().top - this.activeMenu.offset().top - r - i,
                    n = this.activeMenu.scrollTop(),
                    t = this.activeMenu.height(),
                    a = h.height(),
                    s < 0 ? this.activeMenu.scrollTop(n + s) : s + a > t && this.activeMenu.scrollTop(n + s - t + a))
                },
                blur: function(h, r) {
                    r || clearTimeout(this.timer),
                    this.active && (this.active.children("a").removeClass("ui-state-focus"),
                    this.active = null,
                    this._trigger("blur", h, {
                        item: this.active
                    }))
                },
                _startOpening: function(h) {
                    clearTimeout(this.timer),
                    h.attr("aria-hidden") === "true" && (this.timer = this._delay(function() {
                        this._close(),
                        this._open(h)
                    }, this.delay))
                },
                _open: function(h) {
                    var r = e.extend({
                        of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer),
                    this.element.find(".ui-menu").not(h.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
                    h.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(r)
                },
                collapseAll: function(h, r) {
                    clearTimeout(this.timer),
                    this.timer = this._delay(function() {
                        var i = r ? this.element : e(h && h.target).closest(this.element.find(".ui-menu"));
                        i.length || (i = this.element),
                        this._close(i),
                        this.blur(h),
                        this.activeMenu = i
                    }, this.delay)
                },
                _close: function(h) {
                    h || (h = this.active ? this.active.parent() : this.element),
                    h.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
                },
                collapse: function(h) {
                    var r = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    r && r.length && (this._close(),
                    this.focus(h, r))
                },
                expand: function(h) {
                    var r = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                    r && r.length && (this._open(r.parent()),
                    this._delay(function() {
                        this.focus(h, r)
                    }))
                },
                next: function(h) {
                    this._move("next", "first", h)
                },
                previous: function(h) {
                    this._move("prev", "last", h)
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(h, r, i) {
                    var s;
                    this.active && (h === "first" || h === "last" ? s = this.active[h === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : s = this.active[h + "All"](".ui-menu-item").eq(0)),
                    (!s || !s.length || !this.active) && (s = this.activeMenu.children(".ui-menu-item")[r]()),
                    this.focus(i, s)
                },
                nextPage: function(h) {
                    var r, i, s;
                    if (!this.active) {
                        this.next(h);
                        return
                    }
                    this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top,
                    s = this.element.height(),
                    this.active.nextAll(".ui-menu-item").each(function() {
                        return r = e(this),
                        r.offset().top - i - s < 0
                    }),
                    this.focus(h, r)) : this.focus(h, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))
                },
                previousPage: function(h) {
                    var r, i, s;
                    if (!this.active) {
                        this.next(h);
                        return
                    }
                    this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top,
                    s = this.element.height(),
                    this.active.prevAll(".ui-menu-item").each(function() {
                        return r = e(this),
                        r.offset().top - i + s > 0
                    }),
                    this.focus(h, r)) : this.focus(h, this.activeMenu.children(".ui-menu-item").first()))
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function(h) {
                    this.active = this.active || e(h.target).closest(".ui-menu-item");
                    var r = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(h, !0),
                    this._trigger("select", h, r)
                }
            })
        }(jQuery),
        function(e, I) {
            e.widget("ui.progressbar", {
                version: "1.10.3",
                options: {
                    max: 100,
                    value: 0,
                    change: null,
                    complete: null
                },
                min: 0,
                _create: function() {
                    this.oldValue = this.options.value = this._constrainedValue(),
                    this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                        role: "progressbar",
                        "aria-valuemin": this.min
                    }),
                    this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
                    this._refreshValue()
                },
                _destroy: function() {
                    this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
                    this.valueDiv.remove()
                },
                value: function(h) {
                    if (h === I)
                        return this.options.value;
                    this.options.value = this._constrainedValue(h),
                    this._refreshValue()
                },
                _constrainedValue: function(h) {
                    return h === I && (h = this.options.value),
                    this.indeterminate = h === !1,
                    typeof h != "number" && (h = 0),
                    this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, h))
                },
                _setOptions: function(h) {
                    var r = h.value;
                    delete h.value,
                    this._super(h),
                    this.options.value = this._constrainedValue(r),
                    this._refreshValue()
                },
                _setOption: function(h, r) {
                    h === "max" && (r = Math.max(this.min, r)),
                    this._super(h, r)
                },
                _percentage: function() {
                    return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                },
                _refreshValue: function() {
                    var h = this.options.value
                      , r = this._percentage();
                    this.valueDiv.toggle(this.indeterminate || h > this.min).toggleClass("ui-corner-right", h === this.options.max).width(r.toFixed(0) + "%"),
                    this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate),
                    this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
                    this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": h
                    }),
                    this.overlayDiv && (this.overlayDiv.remove(),
                    this.overlayDiv = null)),
                    this.oldValue !== h && (this.oldValue = h,
                    this._trigger("change")),
                    h === this.options.max && this._trigger("complete")
                }
            })
        }(jQuery),
        function(e, I) {
            var h = 5;
            e.widget("ui.slider", e.ui.mouse, {
                version: "1.10.3",
                widgetEventPrefix: "slide",
                options: {
                    animate: !1,
                    distance: 0,
                    max: 100,
                    min: 0,
                    orientation: "horizontal",
                    range: !1,
                    step: 1,
                    value: 0,
                    values: null,
                    change: null,
                    slide: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    this._keySliding = !1,
                    this._mouseSliding = !1,
                    this._animateOff = !0,
                    this._handleIndex = null,
                    this._detectOrientation(),
                    this._mouseInit(),
                    this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
                    this._refresh(),
                    this._setOption("disabled", this.options.disabled),
                    this._animateOff = !1
                },
                _refresh: function() {
                    this._createRange(),
                    this._createHandles(),
                    this._setupEvents(),
                    this._refreshValue()
                },
                _createHandles: function() {
                    var r, i, s = this.options, n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), t = "<a class='ui-slider-handle ui-state-default ui-corner-all' aria-label='Slider handle' href='#'></a>", a = [];
                    for (i = s.values && s.values.length || 1,
                    n.length > i && (n.slice(i).remove(),
                    n = n.slice(0, i)),
                    r = n.length; r < i; r++)
                        a.push(t);
                    this.handles = n.add(e(a.join("")).appendTo(this.element)),
                    this.handle = this.handles.eq(0),
                    this.handles.each(function(o) {
                        e(this).data("ui-slider-handle-index", o)
                    })
                },
                _createRange: function() {
                    var r = this.options
                      , i = "";
                    r.range ? (r.range === !0 && (r.values ? r.values.length && r.values.length !== 2 ? r.values = [r.values[0], r.values[0]] : e.isArray(r.values) && (r.values = r.values.slice(0)) : r.values = [this._valueMin(), this._valueMin()]),
                    !this.range || !this.range.length ? (this.range = e("<div></div>").appendTo(this.element),
                    i = "ui-slider-range ui-widget-header ui-corner-all") : this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    }),
                    this.range.addClass(i + (r.range === "min" || r.range === "max" ? " ui-slider-range-" + r.range : ""))) : this.range = e([])
                },
                _setupEvents: function() {
                    var r = this.handles.add(this.range).filter("a");
                    this._off(r),
                    this._on(r, this._handleEvents),
                    this._hoverable(r),
                    this._focusable(r)
                },
                _destroy: function() {
                    this.handles.remove(),
                    this.range.remove(),
                    this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
                    this._mouseDestroy()
                },
                _mouseCapture: function(r) {
                    var i, s, n, t, a, o, l, u, c = this, p = this.options;
                    return p.disabled || (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    },
                    this.elementOffset = this.element.offset(),
                    i = {
                        x: r.pageX,
                        y: r.pageY
                    },
                    s = this._normValueFromMouse(i),
                    n = this._valueMax() - this._valueMin() + 1,
                    this.handles.each(function(f) {
                        var d = Math.abs(s - c.values(f));
                        (n > d || n === d && (f === c._lastChangedValue || c.values(f) === p.min)) && (n = d,
                        t = e(this),
                        a = f)
                    }),
                    o = this._start(r, a),
                    o === !1) ? !1 : (this._mouseSliding = !0,
                    this._handleIndex = a,
                    t.addClass("ui-state-active").focus(),
                    l = t.offset(),
                    u = !e(r.target).parents().addBack().is(".ui-slider-handle"),
                    this._clickOffset = u ? {
                        left: 0,
                        top: 0
                    } : {
                        left: r.pageX - l.left - t.width() / 2,
                        top: r.pageY - l.top - t.height() / 2 - (parseInt(t.css("borderTopWidth"), 10) || 0) - (parseInt(t.css("borderBottomWidth"), 10) || 0) + (parseInt(t.css("marginTop"), 10) || 0)
                    },
                    this.handles.hasClass("ui-state-hover") || this._slide(r, a, s),
                    this._animateOff = !0,
                    !0)
                },
                _mouseStart: function() {
                    return !0
                },
                _mouseDrag: function(r) {
                    var i = {
                        x: r.pageX,
                        y: r.pageY
                    }
                      , s = this._normValueFromMouse(i);
                    return this._slide(r, this._handleIndex, s),
                    !1
                },
                _mouseStop: function(r) {
                    return this.handles.removeClass("ui-state-active"),
                    this._mouseSliding = !1,
                    this._stop(r, this._handleIndex),
                    this._change(r, this._handleIndex),
                    this._handleIndex = null,
                    this._clickOffset = null,
                    this._animateOff = !1,
                    !1
                },
                _detectOrientation: function() {
                    this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
                },
                _normValueFromMouse: function(r) {
                    var i, s, n, t, a;
                    return this.orientation === "horizontal" ? (i = this.elementSize.width,
                    s = r.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height,
                    s = r.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                    n = s / i,
                    n > 1 && (n = 1),
                    n < 0 && (n = 0),
                    this.orientation === "vertical" && (n = 1 - n),
                    t = this._valueMax() - this._valueMin(),
                    a = this._valueMin() + n * t,
                    this._trimAlignValue(a)
                },
                _start: function(r, i) {
                    var s = {
                        handle: this.handles[i],
                        value: this.value()
                    };
                    return this.options.values && this.options.values.length && (s.value = this.values(i),
                    s.values = this.values()),
                    this._trigger("start", r, s)
                },
                _slide: function(r, i, s) {
                    var n, t, a;
                    this.options.values && this.options.values.length ? (n = this.values(i ? 0 : 1),
                    this.options.values.length === 2 && this.options.range === !0 && (i === 0 && s > n || i === 1 && s < n) && (s = n),
                    s !== this.values(i) && (t = this.values(),
                    t[i] = s,
                    a = this._trigger("slide", r, {
                        handle: this.handles[i],
                        value: s,
                        values: t
                    }),
                    n = this.values(i ? 0 : 1),
                    a !== !1 && this.values(i, s, !0))) : s !== this.value() && (a = this._trigger("slide", r, {
                        handle: this.handles[i],
                        value: s
                    }),
                    a !== !1 && this.value(s))
                },
                _stop: function(r, i) {
                    var s = {
                        handle: this.handles[i],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (s.value = this.values(i),
                    s.values = this.values()),
                    this._trigger("stop", r, s)
                },
                _change: function(r, i) {
                    if (!this._keySliding && !this._mouseSliding) {
                        var s = {
                            handle: this.handles[i],
                            value: this.value()
                        };
                        this.options.values && this.options.values.length && (s.value = this.values(i),
                        s.values = this.values()),
                        this._lastChangedValue = i,
                        this._trigger("change", r, s)
                    }
                },
                value: function(r) {
                    if (arguments.length) {
                        this.options.value = this._trimAlignValue(r),
                        this._refreshValue(),
                        this._change(null, 0);
                        return
                    }
                    return this._value()
                },
                values: function(r, i) {
                    var s, n, t;
                    if (arguments.length > 1) {
                        this.options.values[r] = this._trimAlignValue(i),
                        this._refreshValue(),
                        this._change(null, r);
                        return
                    }
                    if (arguments.length)
                        if (e.isArray(arguments[0])) {
                            for (s = this.options.values,
                            n = arguments[0],
                            t = 0; t < s.length; t += 1)
                                s[t] = this._trimAlignValue(n[t]),
                                this._change(null, t);
                            this._refreshValue()
                        } else
                            return this.options.values && this.options.values.length ? this._values(r) : this.value();
                    else
                        return this._values()
                },
                _setOption: function(r, i) {
                    var s, n = 0;
                    switch (r === "range" && this.options.range === !0 && (i === "min" ? (this.options.value = this._values(0),
                    this.options.values = null) : i === "max" && (this.options.value = this._values(this.options.values.length - 1),
                    this.options.values = null)),
                    e.isArray(this.options.values) && (n = this.options.values.length),
                    e.Widget.prototype._setOption.apply(this, arguments),
                    r) {
                    case "orientation":
                        this._detectOrientation(),
                        this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                        this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0,
                        this._refreshValue(),
                        this._change(null, 0),
                        this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0,
                        this._refreshValue(),
                        s = 0; s < n; s += 1)
                            this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0,
                        this._refreshValue(),
                        this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0,
                        this._refresh(),
                        this._animateOff = !1;
                        break
                    }
                },
                _value: function() {
                    var r = this.options.value;
                    return r = this._trimAlignValue(r),
                    r
                },
                _values: function(r) {
                    var i, s, n;
                    if (arguments.length)
                        return i = this.options.values[r],
                        i = this._trimAlignValue(i),
                        i;
                    if (this.options.values && this.options.values.length) {
                        for (s = this.options.values.slice(),
                        n = 0; n < s.length; n += 1)
                            s[n] = this._trimAlignValue(s[n]);
                        return s
                    } else
                        return []
                },
                _trimAlignValue: function(r) {
                    if (r <= this._valueMin())
                        return this._valueMin();
                    if (r >= this._valueMax())
                        return this._valueMax();
                    var i = this.options.step > 0 ? this.options.step : 1
                      , s = (r - this._valueMin()) % i
                      , n = r - s;
                    return Math.abs(s) * 2 >= i && (n += s > 0 ? i : -i),
                    parseFloat(n.toFixed(5))
                },
                _valueMin: function() {
                    return this.options.min
                },
                _valueMax: function() {
                    return this.options.max
                },
                _refreshValue: function() {
                    var r, i, s, n, t, a = this.options.range, o = this.options, l = this, u = this._animateOff ? !1 : o.animate, c = {};
                    this.options.values && this.options.values.length ? this.handles.each(function(p) {
                        i = (l.values(p) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100,
                        c[l.orientation === "horizontal" ? "left" : "bottom"] = i + "%",
                        e(this).stop(1, 1)[u ? "animate" : "css"](c, o.animate),
                        l.options.range === !0 && (l.orientation === "horizontal" ? (p === 0 && l.range.stop(1, 1)[u ? "animate" : "css"]({
                            left: i + "%"
                        }, o.animate),
                        p === 1 && l.range[u ? "animate" : "css"]({
                            width: i - r + "%"
                        }, {
                            queue: !1,
                            duration: o.animate
                        })) : (p === 0 && l.range.stop(1, 1)[u ? "animate" : "css"]({
                            bottom: i + "%"
                        }, o.animate),
                        p === 1 && l.range[u ? "animate" : "css"]({
                            height: i - r + "%"
                        }, {
                            queue: !1,
                            duration: o.animate
                        }))),
                        r = i
                    }) : (s = this.value(),
                    n = this._valueMin(),
                    t = this._valueMax(),
                    i = t !== n ? (s - n) / (t - n) * 100 : 0,
                    c[this.orientation === "horizontal" ? "left" : "bottom"] = i + "%",
                    this.handle.stop(1, 1)[u ? "animate" : "css"](c, o.animate),
                    a === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                        width: i + "%"
                    }, o.animate),
                    a === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({
                        width: 100 - i + "%"
                    }, {
                        queue: !1,
                        duration: o.animate
                    }),
                    a === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                        height: i + "%"
                    }, o.animate),
                    a === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({
                        height: 100 - i + "%"
                    }, {
                        queue: !1,
                        duration: o.animate
                    }))
                },
                _handleEvents: {
                    keydown: function(r) {
                        var i, s, n, t, a = e(r.target).data("ui-slider-handle-index");
                        switch (r.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (r.preventDefault(),
                            !this._keySliding && (this._keySliding = !0,
                            e(r.target).addClass("ui-state-active"),
                            i = this._start(r, a),
                            i === !1))
                                return;
                            break
                        }
                        switch (t = this.options.step,
                        this.options.values && this.options.values.length ? s = n = this.values(a) : s = n = this.value(),
                        r.keyCode) {
                        case e.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / h);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / h);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (s === this._valueMax())
                                return;
                            n = this._trimAlignValue(s + t);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (s === this._valueMin())
                                return;
                            n = this._trimAlignValue(s - t);
                            break
                        }
                        this._slide(r, a, n)
                    },
                    click: function(r) {
                        r.preventDefault()
                    },
                    keyup: function(r) {
                        var i = e(r.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1,
                        this._stop(r, i),
                        this._change(r, i),
                        e(r.target).removeClass("ui-state-active"))
                    }
                }
            })
        }(jQuery),
        function(e) {
            function I(h) {
                return function() {
                    var r = this.element.val();
                    h.apply(this, arguments),
                    this._refresh(),
                    r !== this.element.val() && this._trigger("change")
                }
            }
            e.widget("ui.spinner", {
                version: "1.10.3",
                defaultElement: "<input>",
                widgetEventPrefix: "spin",
                options: {
                    culture: null,
                    icons: {
                        down: "ui-icon-triangle-1-s",
                        up: "ui-icon-triangle-1-n"
                    },
                    incremental: !0,
                    max: null,
                    min: null,
                    numberFormat: null,
                    page: 10,
                    step: 1,
                    change: null,
                    spin: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    this._setOption("max", this.options.max),
                    this._setOption("min", this.options.min),
                    this._setOption("step", this.options.step),
                    this._value(this.element.val(), !0),
                    this._draw(),
                    this._on(this._events),
                    this._refresh(),
                    this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
                },
                _getCreateOptions: function() {
                    var h = {}
                      , r = this.element;
                    return e.each(["min", "max", "step"], function(i, s) {
                        var n = r.attr(s);
                        n !== void 0 && n.length && (h[s] = n)
                    }),
                    h
                },
                _events: {
                    keydown: function(h) {
                        this._start(h) && this._keydown(h) && h.preventDefault()
                    },
                    keyup: "_stop",
                    focus: function() {
                        this.previous = this.element.val()
                    },
                    blur: function(h) {
                        if (this.cancelBlur) {
                            delete this.cancelBlur;
                            return
                        }
                        this._stop(),
                        this._refresh(),
                        this.previous !== this.element.val() && this._trigger("change", h)
                    },
                    mousewheel: function(h, r) {
                        if (r) {
                            if (!this.spinning && !this._start(h))
                                return !1;
                            this._spin((r > 0 ? 1 : -1) * this.options.step, h),
                            clearTimeout(this.mousewheelTimer),
                            this.mousewheelTimer = this._delay(function() {
                                this.spinning && this._stop(h)
                            }, 100),
                            h.preventDefault()
                        }
                    },
                    "mousedown .ui-spinner-button": function(h) {
                        var r;
                        r = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
                        function i() {
                            var s = this.element[0] === this.document[0].activeElement;
                            s || (this.element.focus(),
                            this.previous = r,
                            this._delay(function() {
                                this.previous = r
                            }))
                        }
                        h.preventDefault(),
                        i.call(this),
                        this.cancelBlur = !0,
                        this._delay(function() {
                            delete this.cancelBlur,
                            i.call(this)
                        }),
                        this._start(h) !== !1 && this._repeat(null, e(h.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, h)
                    },
                    "mouseup .ui-spinner-button": "_stop",
                    "mouseenter .ui-spinner-button": function(h) {
                        if (e(h.currentTarget).hasClass("ui-state-active")) {
                            if (this._start(h) === !1)
                                return !1;
                            this._repeat(null, e(h.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, h)
                        }
                    },
                    "mouseleave .ui-spinner-button": "_stop"
                },
                _draw: function() {
                    var h = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                    this.element.attr("role", "spinbutton"),
                    this.buttons = h.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
                    this.buttons.height() > Math.ceil(h.height() * .5) && h.height() > 0 && h.height(h.height()),
                    this.options.disabled && this.disable()
                },
                _keydown: function(h) {
                    var r = this.options
                      , i = e.ui.keyCode;
                    switch (h.keyCode) {
                    case i.UP:
                        return this._repeat(null, 1, h),
                        !0;
                    case i.DOWN:
                        return this._repeat(null, -1, h),
                        !0;
                    case i.PAGE_UP:
                        return this._repeat(null, r.page, h),
                        !0;
                    case i.PAGE_DOWN:
                        return this._repeat(null, -r.page, h),
                        !0
                    }
                    return !1
                },
                _uiSpinnerHtml: function() {
                    return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
                },
                _buttonHtml: function() {
                    return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
                },
                _start: function(h) {
                    return !this.spinning && this._trigger("start", h) === !1 ? !1 : (this.counter || (this.counter = 1),
                    this.spinning = !0,
                    !0)
                },
                _repeat: function(h, r, i) {
                    h = h || 500,
                    clearTimeout(this.timer),
                    this.timer = this._delay(function() {
                        this._repeat(40, r, i)
                    }, h),
                    this._spin(r * this.options.step, i)
                },
                _spin: function(h, r) {
                    var i = this.value() || 0;
                    this.counter || (this.counter = 1),
                    i = this._adjustValue(i + h * this._increment(this.counter)),
                    (!this.spinning || this._trigger("spin", r, {
                        value: i
                    }) !== !1) && (this._value(i),
                    this.counter++)
                },
                _increment: function(h) {
                    var r = this.options.incremental;
                    return r ? e.isFunction(r) ? r(h) : Math.floor(h * h * h / 5e4 - h * h / 500 + 17 * h / 200 + 1) : 1
                },
                _precision: function() {
                    var h = this._precisionOf(this.options.step);
                    return this.options.min !== null && (h = Math.max(h, this._precisionOf(this.options.min))),
                    h
                },
                _precisionOf: function(h) {
                    var r = h.toString()
                      , i = r.indexOf(".");
                    return i === -1 ? 0 : r.length - i - 1
                },
                _adjustValue: function(h) {
                    var r, i, s = this.options;
                    return r = s.min !== null ? s.min : 0,
                    i = h - r,
                    i = Math.round(i / s.step) * s.step,
                    h = r + i,
                    h = parseFloat(h.toFixed(this._precision())),
                    s.max !== null && h > s.max ? s.max : s.min !== null && h < s.min ? s.min : h
                },
                _stop: function(h) {
                    this.spinning && (clearTimeout(this.timer),
                    clearTimeout(this.mousewheelTimer),
                    this.counter = 0,
                    this.spinning = !1,
                    this._trigger("stop", h))
                },
                _setOption: function(h, r) {
                    if (h === "culture" || h === "numberFormat") {
                        var i = this._parse(this.element.val());
                        this.options[h] = r,
                        this.element.val(this._format(i));
                        return
                    }
                    (h === "max" || h === "min" || h === "step") && typeof r == "string" && (r = this._parse(r)),
                    h === "icons" && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(r.up),
                    this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(r.down)),
                    this._super(h, r),
                    h === "disabled" && (r ? (this.element.prop("disabled", !0),
                    this.buttons.button("disable")) : (this.element.prop("disabled", !1),
                    this.buttons.button("enable")))
                },
                _setOptions: I(function(h) {
                    this._super(h),
                    this._value(this.element.val())
                }),
                _parse: function(h) {
                    return typeof h == "string" && h !== "" && (h = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(h, 10, this.options.culture) : +h),
                    h === "" || isNaN(h) ? null : h
                },
                _format: function(h) {
                    return h === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(h, this.options.numberFormat, this.options.culture) : h
                },
                _refresh: function() {
                    this.element.attr({
                        "aria-valuemin": this.options.min,
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": this._parse(this.element.val())
                    })
                },
                _value: function(h, r) {
                    var i;
                    h !== "" && (i = this._parse(h),
                    i !== null && (r || (i = this._adjustValue(i)),
                    h = this._format(i))),
                    this.element.val(h),
                    this._refresh()
                },
                _destroy: function() {
                    this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
                    this.uiSpinner.replaceWith(this.element)
                },
                stepUp: I(function(h) {
                    this._stepUp(h)
                }),
                _stepUp: function(h) {
                    this._start() && (this._spin((h || 1) * this.options.step),
                    this._stop())
                },
                stepDown: I(function(h) {
                    this._stepDown(h)
                }),
                _stepDown: function(h) {
                    this._start() && (this._spin((h || 1) * -this.options.step),
                    this._stop())
                },
                pageUp: I(function(h) {
                    this._stepUp((h || 1) * this.options.page)
                }),
                pageDown: I(function(h) {
                    this._stepDown((h || 1) * this.options.page)
                }),
                value: function(h) {
                    if (!arguments.length)
                        return this._parse(this.element.val());
                    I(this._value).call(this, h)
                },
                widget: function() {
                    return this.uiSpinner
                }
            })
        }(jQuery),
        function(e, I) {
            var h = 0
              , r = /#.*$/;
            function i() {
                return ++h
            }
            function s(n) {
                return n.hash.length > 1 && decodeURIComponent(n.href.replace(r, "")) === decodeURIComponent(location.href.replace(r, ""))
            }
            e.widget("ui.tabs", {
                version: "1.10.3",
                delay: 300,
                options: {
                    active: null,
                    collapsible: !1,
                    event: "click",
                    heightStyle: "content",
                    hide: null,
                    show: null,
                    activate: null,
                    beforeActivate: null,
                    beforeLoad: null,
                    load: null
                },
                _create: function() {
                    var n = this
                      , t = this.options;
                    this.running = !1,
                    this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(a) {
                        e(this).is(".ui-state-disabled") && a.preventDefault()
                    }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                        e(this).closest("li").is(".ui-state-disabled") && this.blur()
                    }),
                    this._processTabs(),
                    t.active = this._initialActive(),
                    e.isArray(t.disabled) && (t.disabled = e.unique(t.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                        return n.tabs.index(a)
                    }))).sort()),
                    this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(t.active) : this.active = e(),
                    this._refresh(),
                    this.active.length && this.load(t.active)
                },
                _initialActive: function() {
                    var n = this.options.active
                      , t = this.options.collapsible
                      , a = location.hash.substring(1);
                    return n === null && (a && this.tabs.each(function(o, l) {
                        if (e(l).attr("aria-controls") === a)
                            return n = o,
                            !1
                    }),
                    n === null && (n = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
                    (n === null || n === -1) && (n = this.tabs.length ? 0 : !1)),
                    n !== !1 && (n = this.tabs.index(this.tabs.eq(n)),
                    n === -1 && (n = t ? !1 : 0)),
                    !t && n === !1 && this.anchors.length && (n = 0),
                    n
                },
                _getCreateEventData: function() {
                    return {
                        tab: this.active,
                        panel: this.active.length ? this._getPanelForTab(this.active) : e()
                    }
                },
                _tabKeydown: function(n) {
                    var t = e(this.document[0].activeElement).closest("li")
                      , a = this.tabs.index(t)
                      , o = !0;
                    if (!this._handlePageNav(n)) {
                        switch (n.keyCode) {
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                            a++;
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.LEFT:
                            o = !1,
                            a--;
                            break;
                        case e.ui.keyCode.END:
                            a = this.anchors.length - 1;
                            break;
                        case e.ui.keyCode.HOME:
                            a = 0;
                            break;
                        case e.ui.keyCode.SPACE:
                            n.preventDefault(),
                            clearTimeout(this.activating),
                            this._activate(a);
                            return;
                        case e.ui.keyCode.ENTER:
                            n.preventDefault(),
                            clearTimeout(this.activating),
                            this._activate(a === this.options.active ? !1 : a);
                            return;
                        default:
                            return
                        }
                        n.preventDefault(),
                        clearTimeout(this.activating),
                        a = this._focusNextTab(a, o),
                        n.ctrlKey || (t.attr("aria-selected", "false"),
                        this.tabs.eq(a).attr("aria-selected", "true"),
                        this.activating = this._delay(function() {
                            this.option("active", a)
                        }, this.delay))
                    }
                },
                _panelKeydown: function(n) {
                    this._handlePageNav(n) || n.ctrlKey && n.keyCode === e.ui.keyCode.UP && (n.preventDefault(),
                    this.active.focus())
                },
                _handlePageNav: function(n) {
                    if (n.altKey && n.keyCode === e.ui.keyCode.PAGE_UP)
                        return this._activate(this._focusNextTab(this.options.active - 1, !1)),
                        !0;
                    if (n.altKey && n.keyCode === e.ui.keyCode.PAGE_DOWN)
                        return this._activate(this._focusNextTab(this.options.active + 1, !0)),
                        !0
                },
                _findNextTab: function(n, t) {
                    var a = this.tabs.length - 1;
                    function o() {
                        return n > a && (n = 0),
                        n < 0 && (n = a),
                        n
                    }
                    for (; e.inArray(o(), this.options.disabled) !== -1; )
                        n = t ? n + 1 : n - 1;
                    return n
                },
                _focusNextTab: function(n, t) {
                    return n = this._findNextTab(n, t),
                    this.tabs.eq(n).focus(),
                    n
                },
                _setOption: function(n, t) {
                    if (n === "active") {
                        this._activate(t);
                        return
                    }
                    if (n === "disabled") {
                        this._setupDisabled(t);
                        return
                    }
                    this._super(n, t),
                    n === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t),
                    !t && this.options.active === !1 && this._activate(0)),
                    n === "event" && this._setupEvents(t),
                    n === "heightStyle" && this._setupHeightStyle(t)
                },
                _tabId: function(n) {
                    return n.attr("aria-controls") || "ui-tabs-" + i()
                },
                _sanitizeSelector: function(n) {
                    return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                },
                refresh: function() {
                    var n = this.options
                      , t = this.tablist.children(":has(a[href])");
                    n.disabled = e.map(t.filter(".ui-state-disabled"), function(a) {
                        return t.index(a)
                    }),
                    this._processTabs(),
                    n.active === !1 || !this.anchors.length ? (n.active = !1,
                    this.active = e()) : this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === n.disabled.length ? (n.active = !1,
                    this.active = e()) : this._activate(this._findNextTab(Math.max(0, n.active - 1), !1)) : n.active = this.tabs.index(this.active),
                    this._refresh()
                },
                _refresh: function() {
                    this._setupDisabled(this.options.disabled),
                    this._setupEvents(this.options.event),
                    this._setupHeightStyle(this.options.heightStyle),
                    this.tabs.not(this.active).attr({
                        "aria-selected": "false",
                        tabIndex: -1
                    }),
                    this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    }),
                    this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                        "aria-selected": "true",
                        tabIndex: 0
                    }),
                    this._getPanelForTab(this.active).show().attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    })) : this.tabs.eq(0).attr("tabIndex", 0)
                },
                _processTabs: function() {
                    var n = this;
                    this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"),
                    this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                        role: "tab",
                        tabIndex: -1
                    }),
                    this.anchors = this.tabs.map(function() {
                        return e("a", this)[0]
                    }).addClass("ui-tabs-anchor").attr({
                        role: "presentation",
                        tabIndex: -1
                    }),
                    this.panels = e(),
                    this.anchors.each(function(t, a) {
                        var o, l, u, c = e(a).uniqueId().attr("id"), p = e(a).closest("li"), f = p.attr("aria-controls");
                        s(a) ? (o = a.hash,
                        l = n.element.find(n._sanitizeSelector(o))) : (u = n._tabId(p),
                        o = "#" + u,
                        l = n.element.find(o),
                        l.length || (l = n._createPanel(u),
                        l.insertAfter(n.panels[t - 1] || n.tablist)),
                        l.attr("aria-live", "polite")),
                        l.length && (n.panels = n.panels.add(l)),
                        f && p.data("ui-tabs-aria-controls", f),
                        p.attr({
                            "aria-controls": o.substring(1),
                            "aria-labelledby": c
                        }),
                        l.attr("aria-labelledby", c)
                    }),
                    this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
                },
                _getList: function() {
                    return this.element.find("ol,ul").eq(0)
                },
                _createPanel: function(n) {
                    return e("<div>").attr("id", n).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                },
                _setupDisabled: function(n) {
                    e.isArray(n) && (n.length ? n.length === this.anchors.length && (n = !0) : n = !1);
                    for (var t = 0, a; a = this.tabs[t]; t++)
                        n === !0 || e.inArray(t, n) !== -1 ? e(a).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(a).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                    this.options.disabled = n
                },
                _setupEvents: function(n) {
                    var t = {
                        click: function(a) {
                            a.preventDefault()
                        }
                    };
                    n && e.each(n.split(" "), function(a, o) {
                        t[o] = "_eventHandler"
                    }),
                    this._off(this.anchors.add(this.tabs).add(this.panels)),
                    this._on(this.anchors, t),
                    this._on(this.tabs, {
                        keydown: "_tabKeydown"
                    }),
                    this._on(this.panels, {
                        keydown: "_panelKeydown"
                    }),
                    this._focusable(this.tabs),
                    this._hoverable(this.tabs)
                },
                _setupHeightStyle: function(n) {
                    var t, a = this.element.parent();
                    n === "fill" ? (t = a.height(),
                    t -= this.element.outerHeight() - this.element.height(),
                    this.element.siblings(":visible").each(function() {
                        var o = e(this)
                          , l = o.css("position");
                        l === "absolute" || l === "fixed" || (t -= o.outerHeight(!0))
                    }),
                    this.element.children().not(this.panels).each(function() {
                        t -= e(this).outerHeight(!0)
                    }),
                    this.panels.each(function() {
                        e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                    }).css("overflow", "auto")) : n === "auto" && (t = 0,
                    this.panels.each(function() {
                        t = Math.max(t, e(this).height("").height())
                    }).height(t))
                },
                _eventHandler: function(n) {
                    var t = this.options
                      , a = this.active
                      , o = e(n.currentTarget)
                      , l = o.closest("li")
                      , u = l[0] === a[0]
                      , c = u && t.collapsible
                      , p = c ? e() : this._getPanelForTab(l)
                      , f = a.length ? this._getPanelForTab(a) : e()
                      , d = {
                        oldTab: a,
                        oldPanel: f,
                        newTab: c ? e() : l,
                        newPanel: p
                    };
                    n.preventDefault(),
                    !(l.hasClass("ui-state-disabled") || l.hasClass("ui-tabs-loading") || this.running || u && !t.collapsible || this._trigger("beforeActivate", n, d) === !1) && (t.active = c ? !1 : this.tabs.index(l),
                    this.active = u ? e() : l,
                    this.xhr && this.xhr.abort(),
                    !f.length && !p.length && e.error("jQuery UI Tabs: Mismatching fragment identifier."),
                    p.length && this.load(this.tabs.index(l), n),
                    this._toggle(n, d))
                },
                _toggle: function(n, t) {
                    var a = this
                      , o = t.newPanel
                      , l = t.oldPanel;
                    this.running = !0;
                    function u() {
                        a.running = !1,
                        a._trigger("activate", n, t)
                    }
                    function c() {
                        t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                        o.length && a.options.show ? a._show(o, a.options.show, u) : (o.show(),
                        u())
                    }
                    l.length && this.options.hide ? this._hide(l, this.options.hide, function() {
                        t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                        c()
                    }) : (t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                    l.hide(),
                    c()),
                    l.attr({
                        "aria-expanded": "false",
                        "aria-hidden": "true"
                    }),
                    t.oldTab.attr("aria-selected", "false"),
                    o.length && l.length ? t.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                        return e(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1),
                    o.attr({
                        "aria-expanded": "true",
                        "aria-hidden": "false"
                    }),
                    t.newTab.attr({
                        "aria-selected": "true",
                        tabIndex: 0
                    })
                },
                _activate: function(n) {
                    var t, a = this._findActive(n);
                    a[0] !== this.active[0] && (a.length || (a = this.active),
                    t = a.find(".ui-tabs-anchor")[0],
                    this._eventHandler({
                        target: t,
                        currentTarget: t,
                        preventDefault: e.noop
                    }))
                },
                _findActive: function(n) {
                    return n === !1 ? e() : this.tabs.eq(n)
                },
                _getIndex: function(n) {
                    return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))),
                    n
                },
                _destroy: function() {
                    this.xhr && this.xhr.abort(),
                    this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
                    this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
                    this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),
                    this.tabs.add(this.panels).each(function() {
                        e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                    }),
                    this.tabs.each(function() {
                        var n = e(this)
                          , t = n.data("ui-tabs-aria-controls");
                        t ? n.attr("aria-controls", t).removeData("ui-tabs-aria-controls") : n.removeAttr("aria-controls")
                    }),
                    this.panels.show(),
                    this.options.heightStyle !== "content" && this.panels.css("height", "")
                },
                enable: function(n) {
                    var t = this.options.disabled;
                    t !== !1 && (n === I ? t = !1 : (n = this._getIndex(n),
                    e.isArray(t) ? t = e.map(t, function(a) {
                        return a !== n ? a : null
                    }) : t = e.map(this.tabs, function(a, o) {
                        return o !== n ? o : null
                    })),
                    this._setupDisabled(t))
                },
                disable: function(n) {
                    var t = this.options.disabled;
                    if (t !== !0) {
                        if (n === I)
                            t = !0;
                        else {
                            if (n = this._getIndex(n),
                            e.inArray(n, t) !== -1)
                                return;
                            e.isArray(t) ? t = e.merge([n], t).sort() : t = [n]
                        }
                        this._setupDisabled(t)
                    }
                },
                load: function(n, t) {
                    n = this._getIndex(n);
                    var a = this
                      , o = this.tabs.eq(n)
                      , l = o.find(".ui-tabs-anchor")
                      , u = this._getPanelForTab(o)
                      , c = {
                        tab: o,
                        panel: u
                    };
                    s(l[0]) || (this.xhr = e.ajax(this._ajaxSettings(l, t, c)),
                    this.xhr && this.xhr.statusText !== "canceled" && (o.addClass("ui-tabs-loading"),
                    u.attr("aria-busy", "true"),
                    this.xhr.success(function(p) {
                        setTimeout(function() {
                            u.html(p),
                            a._trigger("load", t, c)
                        }, 1)
                    }).complete(function(p, f) {
                        setTimeout(function() {
                            f === "abort" && a.panels.stop(!1, !0),
                            o.removeClass("ui-tabs-loading"),
                            u.removeAttr("aria-busy"),
                            p === a.xhr && delete a.xhr
                        }, 1)
                    })))
                },
                _ajaxSettings: function(n, t, a) {
                    var o = this;
                    return {
                        url: n.attr("href"),
                        beforeSend: function(l, u) {
                            return o._trigger("beforeLoad", t, e.extend({
                                jqXHR: l,
                                ajaxSettings: u
                            }, a))
                        }
                    }
                },
                _getPanelForTab: function(n) {
                    var t = e(n).attr("aria-controls");
                    return this.element.find(this._sanitizeSelector("#" + t))
                }
            })
        }(jQuery),
        function(e) {
            var I = 0;
            function h(i, s) {
                var n = (i.attr("aria-describedby") || "").split(/\s+/);
                n.push(s),
                i.data("ui-tooltip-id", s).attr("aria-describedby", e.trim(n.join(" ")))
            }
            function r(i) {
                var s = i.data("ui-tooltip-id")
                  , n = (i.attr("aria-describedby") || "").split(/\s+/)
                  , t = e.inArray(s, n);
                t !== -1 && n.splice(t, 1),
                i.removeData("ui-tooltip-id"),
                n = e.trim(n.join(" ")),
                n ? i.attr("aria-describedby", n) : i.removeAttr("aria-describedby")
            }
            e.widget("ui.tooltip", {
                version: "1.10.3",
                options: {
                    content: function() {
                        var i = e(this).attr("title") || "";
                        return e("<a>").text(i).html()
                    },
                    hide: !0,
                    items: "[title]:not([disabled])",
                    position: {
                        my: "left top+15",
                        at: "left bottom",
                        collision: "flipfit flip"
                    },
                    show: !0,
                    tooltipClass: null,
                    track: !1,
                    close: null,
                    open: null
                },
                _create: function() {
                    this._on({
                        mouseover: "open",
                        focusin: "open"
                    }),
                    this.tooltips = {},
                    this.parents = {},
                    this.options.disabled && this._disable()
                },
                _setOption: function(i, s) {
                    var n = this;
                    if (i === "disabled") {
                        this[s ? "_disable" : "_enable"](),
                        this.options[i] = s;
                        return
                    }
                    this._super(i, s),
                    i === "content" && e.each(this.tooltips, function(t, a) {
                        n._updateContent(a)
                    })
                },
                _disable: function() {
                    var i = this;
                    e.each(this.tooltips, function(s, n) {
                        var t = e.Event("blur");
                        t.target = t.currentTarget = n[0],
                        i.close(t, !0)
                    }),
                    this.element.find(this.options.items).addBack().each(function() {
                        var s = e(this);
                        s.is("[title]") && s.data("ui-tooltip-title", s.attr("title")).attr("title", "")
                    })
                },
                _enable: function() {
                    this.element.find(this.options.items).addBack().each(function() {
                        var i = e(this);
                        i.data("ui-tooltip-title") && i.attr("title", i.data("ui-tooltip-title"))
                    })
                },
                open: function(i) {
                    var s = this
                      , n = e(i ? i.target : this.element).closest(this.options.items);
                    !n.length || n.data("ui-tooltip-id") || (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
                    n.data("ui-tooltip-open", !0),
                    i && i.type === "mouseover" && n.parents().each(function() {
                        var t = e(this), a;
                        t.data("ui-tooltip-open") && (a = e.Event("blur"),
                        a.target = a.currentTarget = this,
                        s.close(a, !0)),
                        t.attr("title") && (t.uniqueId(),
                        s.parents[this.id] = {
                            element: this,
                            title: t.attr("title")
                        },
                        t.attr("title", ""))
                    }),
                    this._updateContent(n, i))
                },
                _updateContent: function(i, s) {
                    var n, t = this.options.content, a = this, o = s ? s.type : null;
                    if (typeof t == "string")
                        return this._open(s, i, t);
                    n = t.call(i[0], function(l) {
                        i.data("ui-tooltip-open") && a._delay(function() {
                            s && (s.type = o),
                            this._open(s, i, l)
                        })
                    }),
                    n && this._open(s, i, n)
                },
                _open: function(i, s, n) {
                    var t, a, o, l = e.extend({}, this.options.position);
                    if (!n)
                        return;
                    if (t = this._find(s),
                    t.length) {
                        t.find(".ui-tooltip-content").html(n);
                        return
                    }
                    s.is("[title]") && (i && i.type === "mouseover" ? s.attr("title", "") : s.removeAttr("title")),
                    t = this._tooltip(s),
                    h(s, t.attr("id")),
                    t.find(".ui-tooltip-content").html(n);
                    function u(c) {
                        l.of = c,
                        !t.is(":hidden") && t.position(l)
                    }
                    this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                        mousemove: u
                    }),
                    u(i)) : t.position(e.extend({
                        of: s
                    }, this.options.position)),
                    t.hide(),
                    this._show(t, this.options.show),
                    this.options.show && this.options.show.delay && (o = this.delayedShow = setInterval(function() {
                        t.is(":visible") && (u(l.of),
                        clearInterval(o))
                    }, e.fx.interval)),
                    this._trigger("open", i, {
                        tooltip: t
                    }),
                    a = {
                        keyup: function(c) {
                            if (c.keyCode === e.ui.keyCode.ESCAPE) {
                                var p = e.Event(c);
                                p.currentTarget = s[0],
                                this.close(p, !0)
                            }
                        },
                        remove: function() {
                            this._removeTooltip(t)
                        }
                    },
                    (!i || i.type === "mouseover") && (a.mouseleave = "close"),
                    (!i || i.type === "focusin") && (a.focusout = "close"),
                    this._on(!0, s, a)
                },
                close: function(i) {
                    var s = this
                      , n = e(i ? i.currentTarget : this.element)
                      , t = this._find(n);
                    this.closing || (clearInterval(this.delayedShow),
                    n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")),
                    r(n),
                    t.stop(!0),
                    this._hide(t, this.options.hide, function() {
                        s._removeTooltip(e(this))
                    }),
                    n.removeData("ui-tooltip-open"),
                    this._off(n, "mouseleave focusout keyup"),
                    n[0] !== this.element[0] && this._off(n, "remove"),
                    this._off(this.document, "mousemove"),
                    i && i.type === "mouseleave" && e.each(this.parents, function(a, o) {
                        e(o.element).attr("title", o.title),
                        delete s.parents[a]
                    }),
                    this.closing = !0,
                    this._trigger("close", i, {
                        tooltip: t
                    }),
                    this.closing = !1)
                },
                _tooltip: function(i) {
                    var s = "ui-tooltip-" + I++
                      , n = e("<div>").attr({
                        id: s,
                        role: "tooltip"
                    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                    return e("<div>").addClass("ui-tooltip-content").appendTo(n),
                    n.appendTo(this.document[0].body),
                    this.tooltips[s] = i,
                    n
                },
                _find: function(i) {
                    var s = i.data("ui-tooltip-id");
                    return s ? e("#" + s) : e()
                },
                _removeTooltip: function(i) {
                    i.remove(),
                    delete this.tooltips[i.attr("id")]
                },
                _destroy: function() {
                    var i = this;
                    e.each(this.tooltips, function(s, n) {
                        var t = e.Event("blur");
                        t.target = t.currentTarget = n[0],
                        i.close(t, !0),
                        e("#" + s).remove(),
                        n.data("ui-tooltip-title") && (n.attr("title", n.data("ui-tooltip-title")),
                        n.removeData("ui-tooltip-title"))
                    })
                }
            })
        }(jQuery),
        function(e, I) {
            var h = "ui-effects-";
            e.effects = {
                effect: {}
            };
            /*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
            (function(r, i) {
                var s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", n = /^([\-+])=\s*(\d+\.?\d*)/, t = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(g) {
                        return [g[1], g[2], g[3], g[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(g) {
                        return [g[1] * 2.55, g[2] * 2.55, g[3] * 2.55, g[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(g) {
                        return [parseInt(g[1], 16), parseInt(g[2], 16), parseInt(g[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(g) {
                        return [parseInt(g[1] + g[1], 16), parseInt(g[2] + g[2], 16), parseInt(g[3] + g[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(g) {
                        return [g[1], g[2] / 100, g[3] / 100, g[4]]
                    }
                }], a = r.Color = function(g, v, y, _) {
                    return new r.Color.fn.parse(g,v,y,_)
                }
                , o = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                }, l = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                }, u = a.support = {}, c = r("<p>")[0], p, f = r.each;
                c.style.cssText = "background-color:rgba(1,1,1,.5)",
                u.rgba = c.style.backgroundColor.indexOf("rgba") > -1,
                f(o, function(g, v) {
                    v.store = "_" + g,
                    v.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                });
                function d(g, v, y) {
                    var _ = l[v.type] || {};
                    return g == null ? y || !v.def ? null : v.def : (g = _.floor ? ~~g : parseFloat(g),
                    isNaN(g) ? v.def : _.mod ? (g + _.mod) % _.mod : 0 > g ? 0 : _.max < g ? _.max : g)
                }
                function m(g) {
                    var v = a()
                      , y = v._rgba = [];
                    return g = g.toLowerCase(),
                    f(t, function(_, w) {
                        var x, T = w.re.exec(g), D = T && w.parse(T), C = w.space || "rgba";
                        if (D)
                            return x = v[C](D),
                            v[o[C].store] = x[o[C].store],
                            y = v._rgba = x._rgba,
                            !1
                    }),
                    y.length ? (y.join() === "0,0,0,0" && r.extend(y, p.transparent),
                    v) : p[g]
                }
                a.fn = r.extend(a.prototype, {
                    parse: function(g, v, y, _) {
                        if (g === i)
                            return this._rgba = [null, null, null, null],
                            this;
                        (g.jquery || g.nodeType) && (g = r(g).css(v),
                        v = i);
                        var w = this
                          , x = r.type(g)
                          , T = this._rgba = [];
                        if (v !== i && (g = [g, v, y, _],
                        x = "array"),
                        x === "string")
                            return this.parse(m(g) || p._default);
                        if (x === "array")
                            return f(o.rgba.props, function(D, C) {
                                T[C.idx] = d(g[C.idx], C)
                            }),
                            this;
                        if (x === "object")
                            return g instanceof a ? f(o, function(D, C) {
                                g[C.store] && (w[C.store] = g[C.store].slice())
                            }) : f(o, function(D, C) {
                                var k = C.store;
                                f(C.props, function(P, M) {
                                    if (!w[k] && C.to) {
                                        if (P === "alpha" || g[P] == null)
                                            return;
                                        w[k] = C.to(w._rgba)
                                    }
                                    w[k][M.idx] = d(g[P], M, !0)
                                }),
                                w[k] && r.inArray(null, w[k].slice(0, 3)) < 0 && (w[k][3] = 1,
                                C.from && (w._rgba = C.from(w[k])))
                            }),
                            this
                    },
                    is: function(g) {
                        var v = a(g)
                          , y = !0
                          , _ = this;
                        return f(o, function(w, x) {
                            var T, D = v[x.store];
                            return D && (T = _[x.store] || x.to && x.to(_._rgba) || [],
                            f(x.props, function(C, k) {
                                if (D[k.idx] != null)
                                    return y = D[k.idx] === T[k.idx],
                                    y
                            })),
                            y
                        }),
                        y
                    },
                    _space: function() {
                        var g = []
                          , v = this;
                        return f(o, function(y, _) {
                            v[_.store] && g.push(y)
                        }),
                        g.pop()
                    },
                    transition: function(g, v) {
                        var y = a(g)
                          , _ = y._space()
                          , w = o[_]
                          , x = this.alpha() === 0 ? a("transparent") : this
                          , T = x[w.store] || w.to(x._rgba)
                          , D = T.slice();
                        return y = y[w.store],
                        f(w.props, function(C, k) {
                            var P = k.idx
                              , M = T[P]
                              , S = y[P]
                              , H = l[k.type] || {};
                            S !== null && (M === null ? D[P] = S : (H.mod && (S - M > H.mod / 2 ? M += H.mod : M - S > H.mod / 2 && (M -= H.mod)),
                            D[P] = d((S - M) * v + M, k)))
                        }),
                        this[_](D)
                    },
                    blend: function(g) {
                        if (this._rgba[3] === 1)
                            return this;
                        var v = this._rgba.slice()
                          , y = v.pop()
                          , _ = a(g)._rgba;
                        return a(r.map(v, function(w, x) {
                            return (1 - y) * _[x] + y * w
                        }))
                    },
                    toRgbaString: function() {
                        var g = "rgba("
                          , v = r.map(this._rgba, function(y, _) {
                            return y ?? (_ > 2 ? 1 : 0)
                        });
                        return v[3] === 1 && (v.pop(),
                        g = "rgb("),
                        g + v.join() + ")"
                    },
                    toHslaString: function() {
                        var g = "hsla("
                          , v = r.map(this.hsla(), function(y, _) {
                            return y == null && (y = _ > 2 ? 1 : 0),
                            _ && _ < 3 && (y = Math.round(y * 100) + "%"),
                            y
                        });
                        return v[3] === 1 && (v.pop(),
                        g = "hsl("),
                        g + v.join() + ")"
                    },
                    toHexString: function(g) {
                        var v = this._rgba.slice()
                          , y = v.pop();
                        return g && v.push(~~(y * 255)),
                        "#" + r.map(v, function(_) {
                            return _ = (_ || 0).toString(16),
                            _.length === 1 ? "0" + _ : _
                        }).join("")
                    },
                    toString: function() {
                        return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
                    }
                }),
                a.fn.parse.prototype = a.fn;
                function b(g, v, y) {
                    return y = (y + 1) % 1,
                    y * 6 < 1 ? g + (v - g) * y * 6 : y * 2 < 1 ? v : y * 3 < 2 ? g + (v - g) * (2 / 3 - y) * 6 : g
                }
                o.hsla.to = function(g) {
                    if (g[0] == null || g[1] == null || g[2] == null)
                        return [null, null, null, g[3]];
                    var v = g[0] / 255, y = g[1] / 255, _ = g[2] / 255, w = g[3], x = Math.max(v, y, _), T = Math.min(v, y, _), D = x - T, C = x + T, k = C * .5, P, M;
                    return T === x ? P = 0 : v === x ? P = 60 * (y - _) / D + 360 : y === x ? P = 60 * (_ - v) / D + 120 : P = 60 * (v - y) / D + 240,
                    D === 0 ? M = 0 : k <= .5 ? M = D / C : M = D / (2 - C),
                    [Math.round(P) % 360, M, k, w ?? 1]
                }
                ,
                o.hsla.from = function(g) {
                    if (g[0] == null || g[1] == null || g[2] == null)
                        return [null, null, null, g[3]];
                    var v = g[0] / 360
                      , y = g[1]
                      , _ = g[2]
                      , w = g[3]
                      , x = _ <= .5 ? _ * (1 + y) : _ + y - _ * y
                      , T = 2 * _ - x;
                    return [Math.round(b(T, x, v + 1 / 3) * 255), Math.round(b(T, x, v) * 255), Math.round(b(T, x, v - 1 / 3) * 255), w]
                }
                ,
                f(o, function(g, v) {
                    var y = v.props
                      , _ = v.store
                      , w = v.to
                      , x = v.from;
                    a.fn[g] = function(T) {
                        if (w && !this[_] && (this[_] = w(this._rgba)),
                        T === i)
                            return this[_].slice();
                        var D, C = r.type(T), k = C === "array" || C === "object" ? T : arguments, P = this[_].slice();
                        return f(y, function(M, S) {
                            var H = k[C === "object" ? M : S.idx];
                            H == null && (H = P[S.idx]),
                            P[S.idx] = d(H, S)
                        }),
                        x ? (D = a(x(P)),
                        D[_] = P,
                        D) : a(P)
                    }
                    ,
                    f(y, function(T, D) {
                        a.fn[T] || (a.fn[T] = function(C) {
                            var k = r.type(C), P = T === "alpha" ? this._hsla ? "hsla" : "rgba" : g, M = this[P](), S = M[D.idx], H;
                            return k === "undefined" ? S : (k === "function" && (C = C.call(this, S),
                            k = r.type(C)),
                            C == null && D.empty ? this : (k === "string" && (H = n.exec(C),
                            H && (C = S + parseFloat(H[2]) * (H[1] === "+" ? 1 : -1))),
                            M[D.idx] = C,
                            this[P](M)))
                        }
                        )
                    })
                }),
                a.hook = function(g) {
                    var v = g.split(" ");
                    f(v, function(y, _) {
                        r.cssHooks[_] = {
                            set: function(w, x) {
                                var T, D, C = "";
                                if (x !== "transparent" && (r.type(x) !== "string" || (T = m(x)))) {
                                    if (x = a(T || x),
                                    !u.rgba && x._rgba[3] !== 1) {
                                        for (D = _ === "backgroundColor" ? w.parentNode : w; (C === "" || C === "transparent") && D && D.style; )
                                            try {
                                                C = r.css(D, "backgroundColor"),
                                                D = D.parentNode
                                            } catch {}
                                        x = x.blend(C && C !== "transparent" ? C : "_default")
                                    }
                                    x = x.toRgbaString()
                                }
                                try {
                                    w.style[_] = x
                                } catch {}
                            }
                        },
                        r.fx.step[_] = function(w) {
                            w.colorInit || (w.start = a(w.elem, _),
                            w.end = a(w.end),
                            w.colorInit = !0),
                            r.cssHooks[_].set(w.elem, w.start.transition(w.end, w.pos))
                        }
                    })
                }
                ,
                a.hook(s),
                r.cssHooks.borderColor = {
                    expand: function(g) {
                        var v = {};
                        return f(["Top", "Right", "Bottom", "Left"], function(y, _) {
                            v["border" + _ + "Color"] = g
                        }),
                        v
                    }
                },
                p = r.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }
            )(jQuery),
            function() {
                var r = ["add", "remove", "toggle"]
                  , i = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
                e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, a) {
                    e.fx.step[a] = function(o) {
                        (o.end !== "none" && !o.setAttr || o.pos === 1 && !o.setAttr) && (jQuery.style(o.elem, a, o.end),
                        o.setAttr = !0)
                    }
                });
                function s(t) {
                    var a, o, l = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, u = {};
                    if (l && l.length && l[0] && l[l[0]])
                        for (o = l.length; o--; )
                            a = l[o],
                            typeof l[a] == "string" && (u[e.camelCase(a)] = l[a]);
                    else
                        for (a in l)
                            typeof l[a] == "string" && (u[a] = l[a]);
                    return u
                }
                function n(t, a) {
                    var o = {}, l, u;
                    for (l in a)
                        u = a[l],
                        t[l] !== u && (i[l] || (e.fx.step[l] || !isNaN(parseFloat(u))) && (o[l] = u));
                    return o
                }
                e.fn.addBack || (e.fn.addBack = function(t) {
                    return this.add(t == null ? this.prevObject : this.prevObject.filter(t))
                }
                ),
                e.effects.animateClass = function(t, a, o, l) {
                    var u = e.speed(a, o, l);
                    return this.queue(function() {
                        var c = e(this), p = c.attr("class") || "", f, d = u.children ? c.find("*").addBack() : c;
                        d = d.map(function() {
                            var m = e(this);
                            return {
                                el: m,
                                start: s(this)
                            }
                        }),
                        f = function() {
                            e.each(r, function(m, b) {
                                t[b] && c[b + "Class"](t[b])
                            })
                        }
                        ,
                        f(),
                        d = d.map(function() {
                            return this.end = s(this.el[0]),
                            this.diff = n(this.start, this.end),
                            this
                        }),
                        c.attr("class", p),
                        d = d.map(function() {
                            var m = this
                              , b = e.Deferred()
                              , g = e.extend({}, u, {
                                queue: !1,
                                complete: function() {
                                    b.resolve(m)
                                }
                            });
                            return this.el.animate(this.diff, g),
                            b.promise()
                        }),
                        e.when.apply(e, d.get()).done(function() {
                            f(),
                            e.each(arguments, function() {
                                var m = this.el;
                                e.each(this.diff, function(b) {
                                    m.css(b, "")
                                })
                            }),
                            u.complete.call(c[0])
                        })
                    })
                }
                ,
                e.fn.extend({
                    addClass: function(t) {
                        return function(a, o, l, u) {
                            return o ? e.effects.animateClass.call(this, {
                                add: a
                            }, o, l, u) : t.apply(this, arguments)
                        }
                    }(e.fn.addClass),
                    removeClass: function(t) {
                        return function(a, o, l, u) {
                            return arguments.length > 1 ? e.effects.animateClass.call(this, {
                                remove: a
                            }, o, l, u) : t.apply(this, arguments)
                        }
                    }(e.fn.removeClass),
                    toggleClass: function(t) {
                        return function(a, o, l, u, c) {
                            return typeof o == "boolean" || o === I ? l ? e.effects.animateClass.call(this, o ? {
                                add: a
                            } : {
                                remove: a
                            }, l, u, c) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                                toggle: a
                            }, o, l, u)
                        }
                    }(e.fn.toggleClass),
                    switchClass: function(t, a, o, l, u) {
                        return e.effects.animateClass.call(this, {
                            add: a,
                            remove: t
                        }, o, l, u)
                    }
                })
            }(),
            function() {
                e.extend(e.effects, {
                    version: "1.10.3",
                    save: function(s, n) {
                        for (var t = 0; t < n.length; t++)
                            n[t] !== null && s.data(h + n[t], s[0].style[n[t]])
                    },
                    restore: function(s, n) {
                        var t, a;
                        for (a = 0; a < n.length; a++)
                            n[a] !== null && (t = s.data(h + n[a]),
                            t === I && (t = ""),
                            s.css(n[a], t))
                    },
                    setMode: function(s, n) {
                        return n === "toggle" && (n = s.is(":hidden") ? "show" : "hide"),
                        n
                    },
                    getBaseline: function(s, n) {
                        var t, a;
                        switch (s[0]) {
                        case "top":
                            t = 0;
                            break;
                        case "middle":
                            t = .5;
                            break;
                        case "bottom":
                            t = 1;
                            break;
                        default:
                            t = s[0] / n.height
                        }
                        switch (s[1]) {
                        case "left":
                            a = 0;
                            break;
                        case "center":
                            a = .5;
                            break;
                        case "right":
                            a = 1;
                            break;
                        default:
                            a = s[1] / n.width
                        }
                        return {
                            x: a,
                            y: t
                        }
                    },
                    createWrapper: function(s) {
                        if (s.parent().is(".ui-effects-wrapper"))
                            return s.parent();
                        var n = {
                            width: s.outerWidth(!0),
                            height: s.outerHeight(!0),
                            float: s.css("float")
                        }
                          , t = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        })
                          , a = {
                            width: s.width(),
                            height: s.height()
                        }
                          , o = document.activeElement;
                        try {
                            o.id
                        } catch {
                            o = document.body
                        }
                        return s.wrap(t),
                        (s[0] === o || e.contains(s[0], o)) && e(o).focus(),
                        t = s.parent(),
                        s.css("position") === "static" ? (t.css({
                            position: "relative"
                        }),
                        s.css({
                            position: "relative"
                        })) : (e.extend(n, {
                            position: s.css("position"),
                            zIndex: s.css("z-index")
                        }),
                        e.each(["top", "left", "bottom", "right"], function(l, u) {
                            n[u] = s.css(u),
                            isNaN(parseInt(n[u], 10)) && (n[u] = "auto")
                        }),
                        s.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })),
                        s.css(a),
                        t.css(n).show()
                    },
                    removeWrapper: function(s) {
                        var n = document.activeElement;
                        return s.parent().is(".ui-effects-wrapper") && (s.parent().replaceWith(s),
                        (s[0] === n || e.contains(s[0], n)) && e(n).focus()),
                        s
                    },
                    setTransition: function(s, n, t, a) {
                        return a = a || {},
                        e.each(n, function(o, l) {
                            var u = s.cssUnit(l);
                            u[0] > 0 && (a[l] = u[0] * t + u[1])
                        }),
                        a
                    }
                });
                function r(s, n, t, a) {
                    return e.isPlainObject(s) && (n = s,
                    s = s.effect),
                    s = {
                        effect: s
                    },
                    n == null && (n = {}),
                    e.isFunction(n) && (a = n,
                    t = null,
                    n = {}),
                    (typeof n == "number" || e.fx.speeds[n]) && (a = t,
                    t = n,
                    n = {}),
                    e.isFunction(t) && (a = t,
                    t = null),
                    n && e.extend(s, n),
                    t = t || n.duration,
                    s.duration = e.fx.off ? 0 : typeof t == "number" ? t : t in e.fx.speeds ? e.fx.speeds[t] : e.fx.speeds._default,
                    s.complete = a || n.complete,
                    s
                }
                function i(s) {
                    return !!(!s || typeof s == "number" || e.fx.speeds[s] || typeof s == "string" && !e.effects.effect[s] || e.isFunction(s) || typeof s == "object" && !s.effect)
                }
                e.fn.extend({
                    effect: function() {
                        var s = r.apply(this, arguments)
                          , n = s.mode
                          , t = s.queue
                          , a = e.effects.effect[s.effect];
                        if (e.fx.off || !a)
                            return n ? this[n](s.duration, s.complete) : this.each(function() {
                                s.complete && s.complete.call(this)
                            });
                        function o(l) {
                            var u = e(this)
                              , c = s.complete
                              , p = s.mode;
                            function f() {
                                e.isFunction(c) && c.call(u[0]),
                                e.isFunction(l) && l()
                            }
                            (u.is(":hidden") ? p === "hide" : p === "show") ? (u[p](),
                            f()) : a.call(u[0], s, f)
                        }
                        return t === !1 ? this.each(o) : this.queue(t || "fx", o)
                    },
                    show: function(s) {
                        return function(n) {
                            if (i(n))
                                return s.apply(this, arguments);
                            var t = r.apply(this, arguments);
                            return t.mode = "show",
                            this.effect.call(this, t)
                        }
                    }(e.fn.show),
                    hide: function(s) {
                        return function(n) {
                            if (i(n))
                                return s.apply(this, arguments);
                            var t = r.apply(this, arguments);
                            return t.mode = "hide",
                            this.effect.call(this, t)
                        }
                    }(e.fn.hide),
                    toggle: function(s) {
                        return function(n) {
                            if (i(n) || typeof n == "boolean")
                                return s.apply(this, arguments);
                            var t = r.apply(this, arguments);
                            return t.mode = "toggle",
                            this.effect.call(this, t)
                        }
                    }(e.fn.toggle),
                    cssUnit: function(s) {
                        var n = this.css(s)
                          , t = [];
                        return e.each(["em", "px", "%", "pt"], function(a, o) {
                            n.indexOf(o) > 0 && (t = [parseFloat(n), o])
                        }),
                        t
                    }
                })
            }(),
            function() {
                var r = {};
                e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(i, s) {
                    r[s] = function(n) {
                        return Math.pow(n, i + 2)
                    }
                }),
                e.extend(r, {
                    Sine: function(i) {
                        return 1 - Math.cos(i * Math.PI / 2)
                    },
                    Circ: function(i) {
                        return 1 - Math.sqrt(1 - i * i)
                    },
                    Elastic: function(i) {
                        return i === 0 || i === 1 ? i : -Math.pow(2, 8 * (i - 1)) * Math.sin(((i - 1) * 80 - 7.5) * Math.PI / 15)
                    },
                    Back: function(i) {
                        return i * i * (3 * i - 2)
                    },
                    Bounce: function(i) {
                        for (var s, n = 4; i < ((s = Math.pow(2, --n)) - 1) / 11; )
                            ;
                        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((s * 3 - 2) / 22 - i, 2)
                    }
                }),
                e.each(r, function(i, s) {
                    e.easing["easeIn" + i] = s,
                    e.easing["easeOut" + i] = function(n) {
                        return 1 - s(1 - n)
                    }
                    ,
                    e.easing["easeInOut" + i] = function(n) {
                        return n < .5 ? s(n * 2) / 2 : 1 - s(n * -2 + 2) / 2
                    }
                })
            }()
        }(jQuery),
        function(e, I) {
            var h = /up|down|vertical/
              , r = /up|left|vertical|horizontal/;
            e.effects.effect.blind = function(i, s) {
                var n = e(this), t = ["position", "top", "bottom", "left", "right", "height", "width"], a = e.effects.setMode(n, i.mode || "hide"), o = i.direction || "up", l = h.test(o), u = l ? "height" : "width", c = l ? "top" : "left", p = r.test(o), f = {}, d = a === "show", m, b, g;
                n.parent().is(".ui-effects-wrapper") ? e.effects.save(n.parent(), t) : e.effects.save(n, t),
                n.show(),
                m = e.effects.createWrapper(n).css({
                    overflow: "hidden"
                }),
                b = m[u](),
                g = parseFloat(m.css(c)) || 0,
                f[u] = d ? b : 0,
                p || (n.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({
                    position: "absolute"
                }),
                f[c] = d ? g : b + g),
                d && (m.css(u, 0),
                p || m.css(c, g + b)),
                m.animate(f, {
                    duration: i.duration,
                    easing: i.easing,
                    queue: !1,
                    complete: function() {
                        a === "hide" && n.hide(),
                        e.effects.restore(n, t),
                        e.effects.removeWrapper(n),
                        s()
                    }
                })
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.bounce = function(h, r) {
                var i = e(this), s = ["position", "top", "bottom", "left", "right", "height", "width"], n = e.effects.setMode(i, h.mode || "effect"), t = n === "hide", a = n === "show", o = h.direction || "up", l = h.distance, u = h.times || 5, c = u * 2 + (a || t ? 1 : 0), p = h.duration / c, f = h.easing, d = o === "up" || o === "down" ? "top" : "left", m = o === "up" || o === "left", b, g, v, y = i.queue(), _ = y.length;
                for ((a || t) && s.push("opacity"),
                e.effects.save(i, s),
                i.show(),
                e.effects.createWrapper(i),
                l || (l = i[d === "top" ? "outerHeight" : "outerWidth"]() / 3),
                a && (v = {
                    opacity: 1
                },
                v[d] = 0,
                i.css("opacity", 0).css(d, m ? -l * 2 : l * 2).animate(v, p, f)),
                t && (l = l / Math.pow(2, u - 1)),
                v = {},
                v[d] = 0,
                b = 0; b < u; b++)
                    g = {},
                    g[d] = (m ? "-=" : "+=") + l,
                    i.animate(g, p, f).animate(v, p, f),
                    l = t ? l * 2 : l / 2;
                t && (g = {
                    opacity: 0
                },
                g[d] = (m ? "-=" : "+=") + l,
                i.animate(g, p, f)),
                i.queue(function() {
                    t && i.hide(),
                    e.effects.restore(i, s),
                    e.effects.removeWrapper(i),
                    r()
                }),
                _ > 1 && y.splice.apply(y, [1, 0].concat(y.splice(_, c + 1))),
                i.dequeue()
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.clip = function(h, r) {
                var i = e(this), s = ["position", "top", "bottom", "left", "right", "height", "width"], n = e.effects.setMode(i, h.mode || "hide"), t = n === "show", a = h.direction || "vertical", o = a === "vertical", l = o ? "height" : "width", u = o ? "top" : "left", c = {}, p, f, d;
                e.effects.save(i, s),
                i.show(),
                p = e.effects.createWrapper(i).css({
                    overflow: "hidden"
                }),
                f = i[0].tagName === "IMG" ? p : i,
                d = f[l](),
                t && (f.css(l, 0),
                f.css(u, d / 2)),
                c[l] = t ? d : 0,
                c[u] = t ? 0 : d / 2,
                f.animate(c, {
                    queue: !1,
                    duration: h.duration,
                    easing: h.easing,
                    complete: function() {
                        t || i.hide(),
                        e.effects.restore(i, s),
                        e.effects.removeWrapper(i),
                        r()
                    }
                })
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.drop = function(h, r) {
                var i = e(this), s = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"], n = e.effects.setMode(i, h.mode || "hide"), t = n === "show", a = h.direction || "left", o = a === "up" || a === "down" ? "top" : "left", l = a === "up" || a === "left" ? "pos" : "neg", u = {
                    opacity: t ? 1 : 0
                }, c;
                e.effects.save(i, s),
                i.show(),
                e.effects.createWrapper(i),
                c = h.distance || i[o === "top" ? "outerHeight" : "outerWidth"](!0) / 2,
                t && i.css("opacity", 0).css(o, l === "pos" ? -c : c),
                u[o] = (t ? l === "pos" ? "+=" : "-=" : l === "pos" ? "-=" : "+=") + c,
                i.animate(u, {
                    queue: !1,
                    duration: h.duration,
                    easing: h.easing,
                    complete: function() {
                        n === "hide" && i.hide(),
                        e.effects.restore(i, s),
                        e.effects.removeWrapper(i),
                        r()
                    }
                })
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.explode = function(h, r) {
                var i = h.pieces ? Math.round(Math.sqrt(h.pieces)) : 3, s = i, n = e(this), t = e.effects.setMode(n, h.mode || "hide"), a = t === "show", o = n.show().css("visibility", "hidden").offset(), l = Math.ceil(n.outerWidth() / s), u = Math.ceil(n.outerHeight() / i), c = [], p, f, d, m, b, g;
                function v() {
                    c.push(this),
                    c.length === i * s && y()
                }
                for (p = 0; p < i; p++)
                    for (m = o.top + p * u,
                    g = p - (i - 1) / 2,
                    f = 0; f < s; f++)
                        d = o.left + f * l,
                        b = f - (s - 1) / 2,
                        n.clone().appendTo("body").wrap("<div></div>").css({
                            position: "absolute",
                            visibility: "visible",
                            left: -f * l,
                            top: -p * u
                        }).parent().addClass("ui-effects-explode").css({
                            position: "absolute",
                            overflow: "hidden",
                            width: l,
                            height: u,
                            left: d + (a ? b * l : 0),
                            top: m + (a ? g * u : 0),
                            opacity: a ? 0 : 1
                        }).animate({
                            left: d + (a ? 0 : b * l),
                            top: m + (a ? 0 : g * u),
                            opacity: a ? 1 : 0
                        }, h.duration || 500, h.easing, v);
                function y() {
                    n.css({
                        visibility: "visible"
                    }),
                    e(c).remove(),
                    a || n.hide(),
                    r()
                }
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.fade = function(h, r) {
                var i = e(this)
                  , s = e.effects.setMode(i, h.mode || "toggle");
                i.animate({
                    opacity: s
                }, {
                    queue: !1,
                    duration: h.duration,
                    easing: h.easing,
                    complete: r
                })
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.fold = function(h, r) {
                var i = e(this), s = ["position", "top", "bottom", "left", "right", "height", "width"], n = e.effects.setMode(i, h.mode || "hide"), t = n === "show", a = n === "hide", o = h.size || 15, l = /([0-9]+)%/.exec(o), u = !!h.horizFirst, c = t !== u, p = c ? ["width", "height"] : ["height", "width"], f = h.duration / 2, d, m, b = {}, g = {};
                e.effects.save(i, s),
                i.show(),
                d = e.effects.createWrapper(i).css({
                    overflow: "hidden"
                }),
                m = c ? [d.width(), d.height()] : [d.height(), d.width()],
                l && (o = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]),
                t && d.css(u ? {
                    height: 0,
                    width: o
                } : {
                    height: o,
                    width: 0
                }),
                b[p[0]] = t ? m[0] : o,
                g[p[1]] = t ? m[1] : 0,
                d.animate(b, f, h.easing).animate(g, f, h.easing, function() {
                    a && i.hide(),
                    e.effects.restore(i, s),
                    e.effects.removeWrapper(i),
                    r()
                })
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.highlight = function(h, r) {
                var i = e(this)
                  , s = ["backgroundImage", "backgroundColor", "opacity"]
                  , n = e.effects.setMode(i, h.mode || "show")
                  , t = {
                    backgroundColor: i.css("backgroundColor")
                };
                n === "hide" && (t.opacity = 0),
                e.effects.save(i, s),
                i.show().css({
                    backgroundImage: "none",
                    backgroundColor: h.color || "#ffff99"
                }).animate(t, {
                    queue: !1,
                    duration: h.duration,
                    easing: h.easing,
                    complete: function() {
                        n === "hide" && i.hide(),
                        e.effects.restore(i, s),
                        r()
                    }
                })
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.pulsate = function(h, r) {
                var i = e(this), s = e.effects.setMode(i, h.mode || "show"), n = s === "show", t = s === "hide", a = n || s === "hide", o = (h.times || 5) * 2 + (a ? 1 : 0), l = h.duration / o, u = 0, c = i.queue(), p = c.length, f;
                for ((n || !i.is(":visible")) && (i.css("opacity", 0).show(),
                u = 1),
                f = 1; f < o; f++)
                    i.animate({
                        opacity: u
                    }, l, h.easing),
                    u = 1 - u;
                i.animate({
                    opacity: u
                }, l, h.easing),
                i.queue(function() {
                    t && i.hide(),
                    r()
                }),
                p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, o + 1))),
                i.dequeue()
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.puff = function(h, r) {
                var i = e(this)
                  , s = e.effects.setMode(i, h.mode || "hide")
                  , n = s === "hide"
                  , t = parseInt(h.percent, 10) || 150
                  , a = t / 100
                  , o = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
                e.extend(h, {
                    effect: "scale",
                    queue: !1,
                    fade: !0,
                    mode: s,
                    complete: r,
                    percent: n ? t : 100,
                    from: n ? o : {
                        height: o.height * a,
                        width: o.width * a,
                        outerHeight: o.outerHeight * a,
                        outerWidth: o.outerWidth * a
                    }
                }),
                i.effect(h)
            }
            ,
            e.effects.effect.scale = function(h, r) {
                var i = e(this)
                  , s = e.extend(!0, {}, h)
                  , n = e.effects.setMode(i, h.mode || "effect")
                  , t = parseInt(h.percent, 10) || (parseInt(h.percent, 10) === 0 || n === "hide" ? 0 : 100)
                  , a = h.direction || "both"
                  , o = h.origin
                  , l = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                }
                  , u = {
                    y: a !== "horizontal" ? t / 100 : 1,
                    x: a !== "vertical" ? t / 100 : 1
                };
                s.effect = "size",
                s.queue = !1,
                s.complete = r,
                n !== "effect" && (s.origin = o || ["middle", "center"],
                s.restore = !0),
                s.from = h.from || (n === "show" ? {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                } : l),
                s.to = {
                    height: l.height * u.y,
                    width: l.width * u.x,
                    outerHeight: l.outerHeight * u.y,
                    outerWidth: l.outerWidth * u.x
                },
                s.fade && (n === "show" && (s.from.opacity = 0,
                s.to.opacity = 1),
                n === "hide" && (s.from.opacity = 1,
                s.to.opacity = 0)),
                i.effect(s)
            }
            ,
            e.effects.effect.size = function(h, r) {
                var i, s, n, t = e(this), a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"], o = ["position", "top", "bottom", "left", "right", "overflow", "opacity"], l = ["width", "height", "overflow"], u = ["fontSize"], c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], p = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], f = e.effects.setMode(t, h.mode || "effect"), d = h.restore || f !== "effect", m = h.scale || "both", b = h.origin || ["middle", "center"], g = t.css("position"), v = d ? a : o, y = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                f === "show" && t.show(),
                i = {
                    height: t.height(),
                    width: t.width(),
                    outerHeight: t.outerHeight(),
                    outerWidth: t.outerWidth()
                },
                h.mode === "toggle" && f === "show" ? (t.from = h.to || y,
                t.to = h.from || i) : (t.from = h.from || (f === "show" ? y : i),
                t.to = h.to || (f === "hide" ? y : i)),
                n = {
                    from: {
                        y: t.from.height / i.height,
                        x: t.from.width / i.width
                    },
                    to: {
                        y: t.to.height / i.height,
                        x: t.to.width / i.width
                    }
                },
                (m === "box" || m === "both") && (n.from.y !== n.to.y && (v = v.concat(c),
                t.from = e.effects.setTransition(t, c, n.from.y, t.from),
                t.to = e.effects.setTransition(t, c, n.to.y, t.to)),
                n.from.x !== n.to.x && (v = v.concat(p),
                t.from = e.effects.setTransition(t, p, n.from.x, t.from),
                t.to = e.effects.setTransition(t, p, n.to.x, t.to))),
                (m === "content" || m === "both") && n.from.y !== n.to.y && (v = v.concat(u).concat(l),
                t.from = e.effects.setTransition(t, u, n.from.y, t.from),
                t.to = e.effects.setTransition(t, u, n.to.y, t.to)),
                e.effects.save(t, v),
                t.show(),
                e.effects.createWrapper(t),
                t.css("overflow", "hidden").css(t.from),
                b && (s = e.effects.getBaseline(b, i),
                t.from.top = (i.outerHeight - t.outerHeight()) * s.y,
                t.from.left = (i.outerWidth - t.outerWidth()) * s.x,
                t.to.top = (i.outerHeight - t.to.outerHeight) * s.y,
                t.to.left = (i.outerWidth - t.to.outerWidth) * s.x),
                t.css(t.from),
                (m === "content" || m === "both") && (c = c.concat(["marginTop", "marginBottom"]).concat(u),
                p = p.concat(["marginLeft", "marginRight"]),
                l = a.concat(c).concat(p),
                t.find("*[width]").each(function() {
                    var _ = e(this)
                      , w = {
                        height: _.height(),
                        width: _.width(),
                        outerHeight: _.outerHeight(),
                        outerWidth: _.outerWidth()
                    };
                    d && e.effects.save(_, l),
                    _.from = {
                        height: w.height * n.from.y,
                        width: w.width * n.from.x,
                        outerHeight: w.outerHeight * n.from.y,
                        outerWidth: w.outerWidth * n.from.x
                    },
                    _.to = {
                        height: w.height * n.to.y,
                        width: w.width * n.to.x,
                        outerHeight: w.height * n.to.y,
                        outerWidth: w.width * n.to.x
                    },
                    n.from.y !== n.to.y && (_.from = e.effects.setTransition(_, c, n.from.y, _.from),
                    _.to = e.effects.setTransition(_, c, n.to.y, _.to)),
                    n.from.x !== n.to.x && (_.from = e.effects.setTransition(_, p, n.from.x, _.from),
                    _.to = e.effects.setTransition(_, p, n.to.x, _.to)),
                    _.css(_.from),
                    _.animate(_.to, h.duration, h.easing, function() {
                        d && e.effects.restore(_, l)
                    })
                })),
                t.animate(t.to, {
                    queue: !1,
                    duration: h.duration,
                    easing: h.easing,
                    complete: function() {
                        t.to.opacity === 0 && t.css("opacity", t.from.opacity),
                        f === "hide" && t.hide(),
                        e.effects.restore(t, v),
                        d || (g === "static" ? t.css({
                            position: "relative",
                            top: t.to.top,
                            left: t.to.left
                        }) : e.each(["top", "left"], function(_, w) {
                            t.css(w, function(x, T) {
                                var D = parseInt(T, 10)
                                  , C = _ ? t.to.left : t.to.top;
                                return T === "auto" ? C + "px" : D + C + "px"
                            })
                        })),
                        e.effects.removeWrapper(t),
                        r()
                    }
                })
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.shake = function(h, r) {
                var i = e(this), s = ["position", "top", "bottom", "left", "right", "height", "width"], n = e.effects.setMode(i, h.mode || "effect"), t = h.direction || "left", a = h.distance || 20, o = h.times || 3, l = o * 2 + 1, u = Math.round(h.duration / l), c = t === "up" || t === "down" ? "top" : "left", p = t === "up" || t === "left", f = {}, d = {}, m = {}, b, g = i.queue(), v = g.length;
                for (e.effects.save(i, s),
                i.show(),
                e.effects.createWrapper(i),
                f[c] = (p ? "-=" : "+=") + a,
                d[c] = (p ? "+=" : "-=") + a * 2,
                m[c] = (p ? "-=" : "+=") + a * 2,
                i.animate(f, u, h.easing),
                b = 1; b < o; b++)
                    i.animate(d, u, h.easing).animate(m, u, h.easing);
                i.animate(d, u, h.easing).animate(f, u / 2, h.easing).queue(function() {
                    n === "hide" && i.hide(),
                    e.effects.restore(i, s),
                    e.effects.removeWrapper(i),
                    r()
                }),
                v > 1 && g.splice.apply(g, [1, 0].concat(g.splice(v, l + 1))),
                i.dequeue()
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.slide = function(h, r) {
                var i = e(this), s = ["position", "top", "bottom", "left", "right", "width", "height"], n = e.effects.setMode(i, h.mode || "show"), t = n === "show", a = h.direction || "left", o = a === "up" || a === "down" ? "top" : "left", l = a === "up" || a === "left", u, c = {};
                e.effects.save(i, s),
                i.show(),
                u = h.distance || i[o === "top" ? "outerHeight" : "outerWidth"](!0),
                e.effects.createWrapper(i).css({
                    overflow: "hidden"
                }),
                t && i.css(o, l ? isNaN(u) ? "-" + u : -u : u),
                c[o] = (t ? l ? "+=" : "-=" : l ? "-=" : "+=") + u,
                i.animate(c, {
                    queue: !1,
                    duration: h.duration,
                    easing: h.easing,
                    complete: function() {
                        n === "hide" && i.hide(),
                        e.effects.restore(i, s),
                        e.effects.removeWrapper(i),
                        r()
                    }
                })
            }
        }(jQuery),
        function(e, I) {
            e.effects.effect.transfer = function(h, r) {
                var i = e(this)
                  , s = e(h.to)
                  , n = s.css("position") === "fixed"
                  , t = e("body")
                  , a = n ? t.scrollTop() : 0
                  , o = n ? t.scrollLeft() : 0
                  , l = s.offset()
                  , u = {
                    top: l.top - a,
                    left: l.left - o,
                    height: s.innerHeight(),
                    width: s.innerWidth()
                }
                  , c = i.offset()
                  , p = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(h.className).css({
                    top: c.top - a,
                    left: c.left - o,
                    height: i.innerHeight(),
                    width: i.innerWidth(),
                    position: n ? "fixed" : "absolute"
                }).animate(u, h.duration, h.easing, function() {
                    p.remove(),
                    r()
                })
            }
        }(jQuery)
    }
    ct.call(typeof window < "u" ? window : globalThis)
}
);
export default ft();
//# sourceMappingURL=BlaEHIAlGKQx.js.map

//# chunkId=0198824c-9da6-7281-9bfb-cebd7e5825f9
