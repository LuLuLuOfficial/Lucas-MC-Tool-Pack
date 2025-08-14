!function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}
            , n = (new e.Error).stack;
        n && (e._posthogChunkIds = e._posthogChunkIds || {},
            e._posthogChunkIds[n] = "01988f4c-0158-7b82-9d53-d5aedeabfaac")
    } catch (e) { }
}();
import { _ as Pe } from "./BlTxHScWgoGu.js";
import { L as he } from "./CBomguU0MRsX.js";
import { C as x, D as re, P as de, a as ke } from "./Dmj_xUyu2hdq.js";
import { b as Y } from "./HighlightedBiomeCandidates.js";
import { t as j } from "./DZJpEsl-8Xn-.js";
typeof module < "u" && (module = void 0);
typeof exports < "u" && (exports = void 0);
function ye() {
    window.__forcedVersion = 77,
        window.__analytics_biomeRequests = 0;
    var q = function () {
        var a, d = CB3FinderAppConfig || {}, C;
        function _(e, r) {
            if (!e)
                return r;
            try {
                var o = parseFloat(e);
                if (!isNaN(o))
                    return o
            } catch { }
            return r
        }
        function A(e, r) {
            if (!e)
                return r;
            try {
                var o = parseInt(e, 10);
                if (!isNaN(o))
                    return o
            } catch { }
            return r
        }
        function s(e) {
            return ke[e]
        }
        function m(e) {
            var r = he.fromString(appHelpers.cleanSeed(e));
            return (e.length < 1 || r.toString() === e || typeof appHelpers.toLong(e) < "u") && (e = void 0),
                [r, e]
        }
        function l(e, r, o) {
            return o || (o = function (f) {
                return f
            }
            ),
                Object.assign({}, r, {
                    embed: function (f) {
                        const H = {};
                        return H[e] = f,
                            H
                    },
                    extract: function (f) {
                        return typeof f[e] == "string" ? o(f[e]) : void 0
                    }
                })
        }
        function h(e, r) {
            return Object.assign({}, r, {
                embed: function (o) {
                    const f = {};
                    return f[e] = o,
                        f
                },
                extract: function (o) {
                    return o[e] != null ? o[e] !== "false" : void 0
                }
            })
        }
        var M = [["seed", l("seed", {
            isEnabled: !0,
            pushToUrl: !0,
            listen: function (e) {
                a.on("seedapply", function (r, o, f, H) {
                    e(f ?? o.toString())
                })
            },
            apply: function (e) {
                a.triggerHandler("seedchangeui", m(e))
            }
        })], ["platform", l("platform", {
            isEnabled: !0,
            pushToUrl: !0,
            listen: function (e) {
                a.on("platformchange", function (r, o, f) {
                    e(f)
                })
            },
            apply: function (e) {
                a.triggerHandler("platformchange", [ChunkApp.Platform[e], e])
            }
        }, function (e) {
            return ChunkApp.Platform[e] ? e : "java_1_7"
        })], ["dimension", l("dimension", {
            isEnabled: !!d.dimensions || window.EMBEDDED_MAP,
            pushToUrl: !0,
            listen: function (e) {
                a.on("applydimensionchanged", function (r, o) {
                    e(o)
                })
            },
            apply: function (e) {
                a.triggerHandler("dimensionchanged", [e])
            }
        }, function (e) {
            return Object.values(re).includes(e) ? e : re.Overworld
        })], ["pois", {
            isEnabled: d.pois === "all" || window.EMBEDDED_MAP,
            listen: function (e) {
                a.on("poischanged", function (r, o) {
                    e(appHelpers.poisToParams(o.pois))
                })
            },
            apply: function (e) {
                a.triggerHandler("poischanged", [{
                    pois: e
                }])
            },
            embed: function (e) {
                return {
                    pois: e.pois.map(function (r) {
                        return x[r].shortId
                    }).join("-"),
                    showBiomes: e.showBiomes
                }
            },
            extract: function (e) {
                if (!(e.pois == null && e.showBiomes == null)) {
                    var r = e.pois == null || e.pois === "" ? [] : e.pois.split("-").map(s).filter(Boolean);
                    return window.EMBEDDED_MAP && (r = r.slice(0, 1)),
                        e.showBiomes != null && e.showBiomes !== "false" && (r = r.concat("biomes")),
                        r
                }
            }
        }], ["biomeHeight", l("biomeHeight", {
            isEnabled: d.showBiomeHeightSelection || window.EMBEDDED_MAP,
            listen: function (e) {
                a.on("biomeheightchanged", function (r, o) {
                    e(o)
                })
            },
            apply: function (e) {
                a.triggerHandler("biomeheightchanged", [e])
            }
        }, function (e) {
            return ["depth0", "caveDepth", "bottom"].includes(e) ? e : "depth0"
        })], ["showHeights", h("terrain", {
            isEnabled: d.showHeightsToggle || window.EMBEDDED_MAP,
            listen: function (e) {
                a.on("showheightschanged", function (r, o) {
                    e(o)
                })
            },
            apply: function (e) {
                a.triggerHandler("showheightschanged", [e])
            }
        })], ["position", {
            isEnabled: !0,
            pushToUrl: !0,
            listen: function (e) {
                a.on("positionchanged", function (r, o, f) {
                    e({
                        x: Math.floor(o),
                        z: Math.floor(f)
                    })
                })
            },
            apply: function (e) {
                a.triggerHandler("goto", [he.fromNumber(e.x), he.fromNumber(e.z), !0])
            },
            embed: function (e) {
                return {
                    x: e.x,
                    z: e.z
                }
            },
            extract: function (e) {
                return e.x != null || e.z != null ? {
                    x: A(e.x, 0),
                    z: A(e.z, 0)
                } : void 0
            }
        }], ["zoom", {
            isEnabled: !0,
            pushToUrl: !0,
            listen: function (e) {
                a.on("zoomchange", function (r, o) {
                    e(Math.round(o * 1e3) / 1e3)
                })
            },
            apply: function (e) {
                a.triggerHandler("zoomsetfactor", e)
            },
            embed: function (e) {
                return {
                    zoom: e
                }
            },
            extract: function (e) {
                return e.zoom != null ? _(e.zoom, 0) : void 0
            }
        }], ["gridLines", h("gridLines", {
            isEnabled: !window.EMBEDDED_MAP,
            listen: function (e) {
                a.on("gridlineschange", function (r, o) {
                    e(o)
                })
            },
            apply: function (e) {
                a.triggerHandler("gridlineschange", [e])
            }
        })], ["pin", {
            isEnabled: !window.EMBEDDED_MAP,
            listen: function (e) {
                a.on("pinset", function (r, o, f) {
                    e(o == null || f == null ? null : {
                        x: o,
                        z: f
                    })
                })
            },
            apply: function (e) {
                e == null ? a.triggerHandler("setpin", void 0) : a.triggerHandler("setpin", [e.x, e.z])
            },
            embed: function (e) {
                return e != null ? {
                    pinX: e.x,
                    pinZ: e.z
                } : {
                    pinX: null,
                    pinZ: null
                }
            },
            extract: function (e) {
                if (!(e.pinX == null && e.pinZ == null))
                    return e.pinX === "null" || e.pinZ === "null" ? null : e.pinX !== "null" && e.pinZ !== "null" ? {
                        x: A(e.pinX, 0),
                        z: A(e.pinZ, 0)
                    } : void 0
            }
        }], ["biomeFilter", {
            isEnabled: !window.EMBEDDED_MAP && d.showBiomeFilter,
            listen: function (e) {
                a.on("biomefilterchanged", function (r, o) {
                    e(o)
                })
            },
            apply: function (e) {
                a.triggerHandler("biomefilterchanged", [e])
            },
            embed: function (e) {
                return {
                    biomeFilter: e ? e.join("-") : !1
                }
            },
            extract: function (e) {
                if (e.biomeFilter != null)
                    return !e.biomeFilter || e.biomeFilter === "false" ? !1 : e.biomeFilter.split("-").map(function (r) {
                        var o = A(r, -1);
                        return Y[o] != null ? o : void 0
                    }).filter(function (r) {
                        return r != null
                    })
            }
        }], ["selectedPoi", l("selectedPoi", {
            isEnabled: !window.EMBEDDED_MAP && d.renderImg,
            listen: function (e) {
                a.on("selectedpoichanged", function (r, o) {
                    e(o)
                })
            },
            apply: function (e) {
                W.selectPoiByHash(e)
            }
        })]]
            , g = M.filter(function (e) {
                return !!e[1].isEnabled
            });
        return {
            init: function (e) {
                a = e,
                    C = {},
                    g.forEach(function (r) {
                        var o = r[0]
                            , f = r[1];
                        C[o] = void 0,
                            f.listen(function (H) {
                                C[o] = H
                            })
                    })
            },
            applyQuery: function (e) {
                if (!a)
                    throw new Error("not initialized");
                var r = Object.fromEntries(new URLSearchParams(e));
                g.forEach(function (o) {
                    var f = o[1]
                        , H = f.extract(r);
                    H !== void 0 && f.apply(H)
                })
            },
            getQueryForCurrentState: function (e, r) {
                if (!a)
                    throw new Error("not initialized");
                r || (r = {});
                var o = {};
                return g.forEach(function (f) {
                    var H = f[0]
                        , n = f[1]
                        , i = r[H] !== void 0 ? r[H] : C[H];
                    i !== void 0 && (!e || n.pushToUrl) && Object.assign(o, n.embed(i))
                }),
                    new URLSearchParams(o).toString()
            },
            getUrlForCurrentState: function (e) {
                if (!a)
                    throw new Error("not initialized");
                var r = new URL(window.location.href);
                return r.hash = q.getQueryForCurrentState(!1, e),
                    r.toString()
            },
            applyCurrentUrl: function () {
                var e = {
                    hasAppliedSeed: !1,
                    hasAppliedPlatform: !1
                }
                    , r = window.location.hash.slice(1);
                return r.includes("seed=") ? (q.applyQuery(r),
                    e.hasAppliedSeed = !0,
                    e.hasAppliedPlatform = !0) : r.length > 0 && (a.triggerHandler("seedchangeui", m(r)),
                        e.hasAppliedSeed = !0),
                    e
            },
            startRouting: function () {
                if (!a)
                    throw new Error("not initialized");
                var e = q.applyCurrentUrl();
                if (window.EMBEDDED_MAP)
                    return e;
                e.hasAppliedSeed && setTimeout(function () {
                    window._enableAnalytics && (e.hasAppliedPlatform && e.hasAppliedSeed ? j("CB_ChunkApp_LaunchedWithRoute") : e.hasAppliedSeed && j("CB_ChunkApp_LaunchedWithLegacyRoute"))
                }, 1e4);
                var r = function () {
                    var o = q.getQueryForCurrentState(!0)
                        , f = new URL(window.location.href);
                    f.hash !== o && (f.hash = o,
                        window.history.replaceState(null, null, f),
                        window.setTimeout(r, 1500))
                };
                return setTimeout(function () {
                    r()
                }),
                    window.addEventListener("hashchange", function () {
                        q.applyCurrentUrl()
                    }),
                    e
            }
        }
    }()
        , W = function () {
            function a(n) {
                return n += "",
                    n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            }
            var d = 0, C = 3, _ = function () {
                var n = document.createElement("canvas");
                n.width = 0,
                    n.height = 0;
                var i = {}
                    , t = {}
                    , u = 1
                    , c = n.getContext("2d", {
                        willReadFrequently: !0
                    });
                function p() {
                    c.clearRect(0, 0, n.width, n.height),
                        i = {},
                        t = {},
                        u = 1
                }
                return {
                    clear: p,
                    updateDimensions: function (v, E) {
                        p(),
                            n.width = v,
                            n.height = E
                    },
                    getPoiData: function (v) {
                        return t[v]
                    },
                    getPoiIdAt: function (v, E) {
                        var w = c.getImageData(Math.round(v), Math.round(E), 1, 1).data
                            , P = w[0] >> C | w[1] >> C << 8 - C | w[2] >> C << 16 - 2 * C
                            , D = i[P];
                        return D
                    },
                    addPoi: function (v, E) {
                        var w = u;
                        u += 1;
                        var P = Math.pow(2, 8 - C) - 1
                            , D = (w & P) << C
                            , b = (w >> 8 - C & P) << C
                            , S = (w >> 16 - 2 * C & P) << C;
                        return i[w] = v,
                            t[v] = E,
                        {
                            fillRect: function (T, F, B, J) {
                                c.fillStyle = "rgb(" + D + "," + b + "," + S + ")",
                                    c.fillRect(T, F, B, J)
                            }
                        }
                    }
                }
            }(), A = null, s = null, m = null, l, h, M = document.createElement("template");
            M.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24"><path d="M8 18H6.222A2.222 2.222 0 0 1 4 15.778V4.222C4 2.995 4.995 2 6.222 2h7.556C15.005 2 16 2.995 16 4.222V6m-5.778 0h7.556C19.005 6 20 6.995 20 8.222v11.556A2.222 2.222 0 0 1 17.778 22h-7.556A2.222 2.222 0 0 1 8 19.778V8.222C8 6.995 8.995 6 10.222 6Z"/></svg>';
            var g = document.createElement("template");
            g.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>';
            var e = document.createElement("template");
            e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" viewBox="0 0 24 24"><path d="m8.006 6.5 4-4 4 4m-3.983-4v13M3.022 10v9.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10"/></svg>';
            var r = document.createElement("template");
            r.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" data-attribution="cc0-icons" viewBox="0 0 24 24"><path d="m11.966 6.204 3.322-3.323c3.01-3.01 8.44 2.419 5.43 5.43l-5.514 5.513c-1.598 1.598-4.063.498-5.352-1.257"/><path d="M13.801 10.973c-1.27-1.772-3.789-2.816-5.513-1.092l-5.513 5.513c-2.79 2.79 2.64 8.22 5.43 5.43l3.463-3.464"/></svg>';
            var o = navigator.share && navigator.canShare && navigator.canShare({
                title: "Chunk Base",
                url: window.location.href
            });
            function f(n, i) {
                var t = document.createElement("div")
                    , u = x[n.type].getTooltipText(n.item, i.platform.cb3World);
                if (t.appendChild(document.createTextNode(u)),
                    !window.EMBEDDED_MAP)
                    if (o) {
                        var c = document.createElement("button");
                        c.classList.add("poi-share", "unstyled"),
                            c.appendChild(e.content.cloneNode(!0)),
                            c.addEventListener("click", function () {
                                var T = q.getUrlForCurrentState({
                                    position: {
                                        x: n.coords[0],
                                        z: n.coords[2]
                                    }
                                })
                                    , F = u + " on seed " + i.seed
                                    , B = {
                                        title: F,
                                        url: T
                                    };
                                navigator.share(B),
                                    window._enableAnalytics && j("CB_ChunkApp_SharePoi")
                            }),
                            t.appendChild(c)
                    } else {
                        var p = document.createElement("a");
                        p.href = q.getUrlForCurrentState({
                            position: {
                                x: n.coords[0],
                                z: n.coords[2]
                            }
                        }),
                            p.target = "_blank",
                            p.classList.add("poi-link"),
                            p.appendChild(r.content.cloneNode(!0)),
                            t.appendChild(p)
                    }
                if (t.appendChild(document.createElement("br")),
                    x[n.type].getTooltipAdditionalText) {
                    var v = document.createElement("small")
                        , E = document.createElement("i");
                    E.innerText = x[n.type].getTooltipAdditionalText(),
                        v.appendChild(E),
                        t.appendChild(v),
                        t.appendChild(document.createElement("br"))
                }
                var w = "X: " + a(n.coords[0]);
                if (n.coords[1] != null && (w += " Y: " + a(n.coords[1])),
                    w += " Z: " + a(n.coords[2]),
                    t.appendChild(document.createTextNode(w)),
                    !window.EMBEDDED_MAP) {
                    var P = document.createElement("button");
                    P.classList.add("poi-copy", "unstyled"),
                        P.type = "button",
                        P.title = "Copy /tp command",
                        P.appendChild(M.content.cloneNode(!0));
                    var D;
                    P.addEventListener("click", function () {
                        var T = ["/tp", n.coords[0], n.coords[1] != null ? n.coords[1] : "~", n.coords[2]].join(" ");
                        navigator.clipboard.writeText(T).then(function () {
                            P.classList.add("poi-copied"),
                                P.replaceChildren(g.content.cloneNode(!0)),
                                window.clearTimeout(D),
                                window._enableAnalytics && j("CB_ChunkApp_CopyTpCommand"),
                                D = window.setTimeout(function () {
                                    P.replaceChildren(M.content.cloneNode(!0)),
                                        P.classList.remove("poi-copied")
                                }, 1500),
                                appHelpers.showToast("/tp command copied to clipboard!", {
                                    duration: 4e3
                                })
                        })
                    }),
                        t.appendChild(P),
                        t.appendChild(document.createElement("br"));
                    var b = document.createElement("label");
                    b.classList.add("poi-complete-label");
                    var S = document.createElement("input");
                    S.type = "checkbox",
                        S.checked = ie.isPoiMarked(i.platform, i.seed, n.type, x[n.type].getHash(n.item)),
                        S.addEventListener("change", function (T) {
                            T.target.checked ? ie.markPoi(i.platform, i.seed, n.type, x[n.type].getHash(n.item)) : ie.unmarkPoi(i.platform, i.seed, n.type, x[n.type].getHash(n.item)),
                                l()
                        }),
                        b.appendChild(S),
                        b.appendChild(document.createTextNode("Completed")),
                        t.appendChild(b)
                }
                return t
            }
            function H(n) {
                var i = _.getPoiData(s);
                if (s && i != null) {
                    var t = A.reference
                        , u = i.rect
                        , c = f(i, n);
                    A.setProps({
                        content: c,
                        getReferenceClientRect: function () {
                            var p = t.getBoundingClientRect();
                            return {
                                width: u.width,
                                height: u.height,
                                top: p.top + u.y,
                                bottom: p.top + u.y + u.height,
                                left: p.left + u.x,
                                right: p.left + u.x + u.width
                            }
                        }
                    }),
                        A.show()
                } else
                    A.hide()
            }
            return {
                onInit: function (n, i, t, u) {
                    A = tippy(i, {
                        duration: 0,
                        arrow: !0,
                        hideOnClick: !1,
                        interactive: !0,
                        theme: n.tippyTheme + " center-align",
                        trigger: "manual",
                        allowHTML: !0
                    }),
                        l = t,
                        h = u
                },
                onCanvasClick: function (n, i, t) {
                    var u = _.getPoiIdAt(n, i);
                    if (u == null && s == null)
                        return {
                            hit: !1,
                            handled: !1
                        };
                    u === s ? s = null : s = u,
                        m = null;
                    var c;
                    if (s != null) {
                        c = _.getPoiData(s);
                        var p = appHelpers.getFullHashForPoi(c.type, c.item);
                        h(p)
                    } else
                        h(null);
                    return u && window._enableAnalytics && c && c.type && j("CB_ChunkApp_SelectPoi", {
                        poi: c.type
                    }),
                        H(t),
                    {
                        hit: u != null,
                        handled: !0
                    }
                },
                testCanvasHit: function (n, i) {
                    return _.getPoiIdAt(n, i) != null
                },
                onMapDimensionsChanged: function (n, i) {
                    _.updateDimensions(n, i)
                },
                onParamsChanged: function () {
                    _.clear()
                },
                beforeMapRepaint: function () {
                    _.clear()
                },
                onMapRepainted: function (n) {
                    A && H(n)
                },
                isClickable: function (n, i) {
                    return _.getPoiIdAt(n, i) != null
                },
                isSelected: function (n) {
                    return n === s
                },
                onPoiDrawn: function (n, i, t, u, c, p, v, E, w) {
                    var P = c + v
                        , D = p + E
                        , b = Math.min(w[2], Math.max(w[0], c))
                        , S = Math.min(w[3], Math.max(w[1], p))
                        , T = Math.min(w[2], Math.max(w[0], P))
                        , F = Math.min(w[3], Math.max(w[1], D));
                    if (b < T && S < F) {
                        var B = _.addPoi(i, {
                            type: n,
                            item: u,
                            coords: t,
                            rect: {
                                x: b,
                                y: S,
                                width: T - b,
                                height: F - S
                            }
                        });
                        B.fillRect(b - d, S - d, T - b + 2 * d, F - S + 2 * d)
                    }
                },
                registerHash: function (n, i) {
                    i === m && (s = n,
                        m = null)
                },
                selectPoiByHash: function (n) {
                    s = null,
                        m = n,
                        h(n)
                }
            }
        }()
        , ie = function () {
            var a = "CB3_MAP_DATA"
                , d = {}
                , C = 0;
            try {
                d = JSON.parse(window.localStorage.getItem(a)) || {},
                    Object.keys(d).forEach(function (l) {
                        Object.keys(d[l]).forEach(function (h) {
                            C += Object.keys(d[l][h]).length
                        })
                    })
            } catch {
                window._enableAnalytics && j("CB_ChunkApp_UserDataLoadError")
            }
            function _(l, h) {
                return l.cb3World.edition + "/" + h.toString()
            }
            function A(l, h, M) {
                var g = _(l, h);
                d[g] || (d[g] = {}),
                    d[g][M] || (d[g][M] = {})
            }
            function s() {
                try {
                    window.localStorage.setItem(a, JSON.stringify(d))
                } catch {
                    window._enableAnalytics && j("CB_ChunkApp_UserDataUpdateError")
                }
            }
            var m = {
                isPoiMarked: function (l, h, M, g) {
                    var e = _(l, h);
                    return d[e] && d[e][M] && d[e][M][g]
                },
                markPoi: function (l, h, M, g) {
                    A(l, h, M);
                    var e = _(l, h);
                    d[e][M][g] = !0,
                        s(),
                        C += 1
                },
                unmarkPoi: function (l, h, M, g) {
                    A(l, h, M);
                    var e = _(l, h);
                    delete d[e][M][g],
                        s(),
                        C -= 1
                },
                getNumberMarkedPois: function () {
                    return C
                },
                exportData: function () {
                    return JSON.stringify(d)
                },
                importData: function (l) {
                    var h;
                    try {
                        h = JSON.parse(l)
                    } catch (M) {
                        return window._enableAnalytics && j("CB_ChunkApp_UserDataImportJsonError"),
                        {
                            ok: !1,
                            error: M
                        }
                    }
                    return d = h,
                        s(),
                        window._enableAnalytics && j("CB_ChunkApp_UserDataImportSuccess"),
                    {
                        ok: !0
                    }
                }
            };
            return m
        }()
        , fe = function () {
            var a = CB3FinderAppConfig || {}
                , d = $({})
                , C = 1.25
                , _ = Object.keys(x)
                , A = {
                    dungeon: {
                        initialChunkWidth: 32,
                        minChunkWidth: 8,
                        maxChunkWidth: 32
                    },
                    chunkClassifier: {
                        initialChunkWidth: 16,
                        minChunkWidth: 8,
                        maxChunkWidth: 64
                    },
                    big: {
                        initialChunkWidth: 8,
                        minChunkWidth: 2,
                        maxChunkWidth: 32
                    },
                    normal: {
                        initialChunkWidth: 4,
                        minChunkWidth: .5,
                        maxChunkWidth: 32
                    },
                    small: {
                        initialChunkWidth: 2,
                        minChunkWidth: .25,
                        maxChunkWidth: 32
                    },
                    full: {
                        initialChunkWidth: 4,
                        minChunkWidth: .25,
                        maxChunkWidth: 64
                    }
                }
                , s = a.pois === "all" ? Object.keys(x).filter(function (n) {
                    return !a.initiallyVisiblePois || a.initiallyVisiblePois.indexOf(n) !== -1
                }).concat(["biomes"]) : a.pois || [];
            Object.assign(d, {
                drawAll: !0,
                async: !0,
                loadingBackground: "228,232,235",
                drawChunkBordersPostRender: !0,
                deferredRender: !0,
                distantViewDeferredRender: !0,
                initialDimension: a.dimension || (a.dimensions ? a.dimensions[0] : null),
                initialBiomeHeight: "depth0",
                initialPois: s,
                disableTheater: !!a.disableTheater,
                getSupportedDimensions: function (n) {
                    return a.dimensions ? {
                        overworld: (n.restrictToDimensions == null || n.restrictToDimensions.indexOf("overworld") !== -1) && a.dimensions.indexOf(re.Overworld) !== -1,
                        nether: (n.restrictToDimensions == null || n.restrictToDimensions.indexOf("nether") !== -1) && a.dimensions.indexOf(re.Nether) !== -1,
                        end: (n.restrictToDimensions == null || n.restrictToDimensions.indexOf("end") !== -1) && a.dimensions.indexOf(re.End) !== -1
                    } : {}
                }
            }, A[a.chunkWidths]);
            var m = navigator.hardwareConcurrency != null && navigator.hardwareConcurrency > 1 ? navigator.hardwareConcurrency - 1 : 1;
            m = Math.min(m, 6);
            for (var l = [], h = 0; h < m; h++)
                l[h] = new Worker(new URL("/_astro/BtBzLFURsmxj.js", import.meta.url), {
                    type: "module"
                });
            CB3SharedTaskManagerMain.init(l),
                q.init(d);
            var M = function (n) {
                n.data.type !== "error" || !window.posthog || (window._posthogChunkIds && Object.assign(window._posthogChunkIds, n.data._posthogChunkIds),
                    window.posthog.captureException(n.data.error, {
                        origin: n.data.origin
                    }))
            }
                , g = [];
            l.forEach(function (n, i) {
                n.addEventListener("message", function (t) {
                    t.data.type === "check" && g[i](t.data.results),
                        M(t)
                }, !1)
            });
            var e = new Worker(new URL("/_astro/BtBzLFURsmxj.js", import.meta.url), {
                type: "module"
            });
            e.addEventListener("message", function (n) {
                n.data.type === "getSupportedPois" && d.triggerHandler("supportedpoischanged", [n.data.supportedPois]),
                    M(n)
            }, !1),
                d.on("platformchange", function (n, i) {
                    e.postMessage({
                        type: "getSupportedPois",
                        platform: i
                    })
                }),
                d.initialHideGridLines = a.hideGridLines;
            var r = null;
            function o(n) {
                var i = a.filterPoisByZoomLevel ? Object.keys(x).filter(function (t) {
                    return x[t].maxTileSize < n.tileSize
                }) : [];
                return d.triggerHandler("hiddenpoischanged", [i]),
                    i
            }
            function f() {
                d.triggerHandler("redrawmap")
            }
            function H(n) {
                d.triggerHandler("selectedpoichanged", [n])
            }
            return SeedMapTiles(d, {
                defaultPlatform: ChunkApp.Platform.java,
                nrParallel: m,
                init: function (n, i) {
                    W.onInit(d, n, f, H),
                        a.renderImg && H(null),
                        d.initialHiddenPois = o(i)
                },
                onParamsChanged: function (n, i) {
                    W.onParamsChanged(),
                        i.indexOf("tileSize") !== -1 && o(n)
                },
                onMapDimensionsChanged: W.onMapDimensionsChanged,
                isClickable: W.isClickable,
                getHoverText: function (n, i, t, u) {
                    if (t.hits.biomes) {
                        var c = new Uint8Array(t.hits.biomes)
                            , p = t.hits.biomeScale
                            , v = Math.floor((n - t.tile.x) / p)
                            , E = Math.floor((i - t.tile.z) / p)
                            , w = c[E * t.tile.xL / p + v];
                        if (w === 255)
                            return null;
                        var P = Y[w];
                        if (!P)
                            return null;
                        var D = "生物群系: " + P.name;
                        if (t.hits.heights) {
                            c = new Int32Array(t.hits.heights);
                            var b = c[E * t.tile.xL / p + v];
                            D += ", Y: " + b
                        }
                        return D
                    }
                    if (!a.renderImg) {
                        if (!t.hits.poiResults)
                            return null;
                        n = Math.floor(n),
                            i = Math.floor(i);
                        for (var S = Object.keys(t.hits.poiResults).reverse(), T = 0; T < S.length; T++)
                            for (var F = S[T], B = x[F], J = t.hits.poiResults[F], Q = 0; Q < J.length; Q++) {
                                var R = J[Q];
                                if (R[0] === n && R[1] === i)
                                    return B.getHoverText ? B.getHoverText(R, u.platform.cb3World) : null
                            }
                        return null
                    }
                },
                loadTile: function (n, i, t) {
                    for (var u = null, c = 0; c < l.length; c++)
                        if (!g[c]) {
                            u = c;
                            break
                        }
                    if (u == null)
                        throw new Error("loadTile: Only " + l.length + " requests allowed at a time");
                    g[u] = function (E) {
                        g[u] = null,
                            t(E)
                    }
                        ;
                    var p = Object.assign({}, n, {
                        pois: n.pois.filter(function (E) {
                            return x[E].dimension === n.dimension
                        }).filter(function (E) {
                            return !a.filterPoisByZoomLevel || x[E].maxTileSize >= n.tileSize
                        })
                    });
                    if (n.dimension === re.Overworld) {
                        var v = 64;
                        window.__analytics_biomeRequests += n.tileSize * n.tileSize / (v * v)
                    }
                    l[u].postMessage({
                        type: "check",
                        params: p,
                        tile: i
                    })
                },
                paintTile: function (n, i, t, u, c, p, v, E, w) {
                    if (i === "biomes") {
                        if (window.__analytics_lastBiomes = !!u.biomeCanvas,
                            u.biomeCanvas) {
                            var P = v(t.x, t.z)
                                , D = v(t.x + t.xL, t.z + t.zL)
                                , b = window.devicePixelRatio || 1
                                , S = appHelpers.snapToPixelRatio(P[0], "floor", b)
                                , T = appHelpers.snapToPixelRatio(P[1], "floor", b)
                                , F = appHelpers.snapToPixelRatio(D[0], "floor", b)
                                , B = appHelpers.snapToPixelRatio(D[1], "floor", b);
                            n.drawImage(u.biomeCanvas, S, T, F - S, B - T)
                        }
                        return
                    }
                    if (i === "slimeChunks" && a.renderImg && u.poiResults[de.SlimeChunk]) {
                        var J = u.poiResults[de.SlimeChunk]
                            , Q = x[de.SlimeChunk]
                            , R = n.lineWidth;
                        n.lineWidth = 2,
                            J.forEach(function (O, K) {
                                n.fillStyle = "rgb(" + Q.fillColor + ")";
                                var k = v(O[0], O[1])
                                    , Z = v(O[0] + 1, O[1] + 1);
                                n.fillRect(k[0], k[1], Z[0] - k[0] - 1, Z[1] - k[1] - 1),
                                    n.strokeStyle = "rgb(" + Q.fillColorOuter + ")",
                                    n.strokeRect(k[0] + 1, k[1] + 1, Z[0] - k[0] - 3, Z[1] - k[1] - 3)
                            }),
                            n.lineWidth = R
                    }
                    if (i === "pois") {
                        var ae = Object.keys(u.poiResults).sort(function (O, K) {
                            return _.indexOf(O) - _.indexOf(K)
                        });
                        window.__analytics_lastPois = ae,
                            ae.forEach(function (O) {
                                if (O === de.SlimeChunk && a.renderImg)
                                    return;
                                var K = u.poiResults[O]
                                    , k = x[O];
                                function Z(z, U, G) {
                                    var N = k.getImg ? k.img[k.getImg(U[2])] : k.img
                                        , I = k.getCoords ? k.getCoords(U, w.platform.cb3World) : [U[0] * 16 + 8, null, U[1] * 16 + 8]
                                        , X = v(I[0] / 16, I[2] / 16);
                                    W.registerHash(z, appHelpers.getFullHashForPoi(O, U));
                                    var oe = W.isSelected(z)
                                        , ee = N.width * (oe ? C : 1)
                                        , ne = N.height * (oe ? C : 1)
                                        , L = X[0] - ee / 2
                                        , te = X[1] - ne / 2
                                        , y = ie.isPoiMarked(w.platform, w.seed, O, k.getHash(U));
                                    n.globalAlpha = y ? .45 : 1,
                                        n.drawImage(N, Math.floor(L), Math.floor(te), ee, ne),
                                        W.onPoiDrawn(O, z, I, U, L, te, ee, ne, E)
                                }
                                K.forEach(function (z, U) {
                                    if (k.img && a.renderImg) {
                                        var G = k.splitPois ? k.splitPois(z) : [z];
                                        G.forEach(function (N, I) {
                                            var X = [O, N[0], N[1], I].join(";");
                                            W.isSelected(X) ? r = function () {
                                                Z(X, N)
                                            }
                                                : Z(X, N),
                                                n.globalAlpha = 1
                                        })
                                    } else
                                        c(z[0], z[1], typeof k.fillColor == "function" ? k.fillColor(z[2]) : k.fillColor)
                                })
                            })
                    }
                },
                processTile: function (n, i) {
                    if (!n.biomes)
                        return n;
                    var t = document.createElement("canvas");
                    t.width = i.xL / n.biomeScale,
                        t.height = i.zL / n.biomeScale;
                    var u = new Uint8Array(n.biomes), c = n.heights && new Int32Array(n.heights), p;
                    if (c) {
                        p = [];
                        for (var v = .025, E = 1 / Math.sqrt(.5) * Math.sqrt(n.biomeScale), w = 45, P = 315, D = E * 1, b = Math.PI * w / 180, S = Math.PI * P / 180, T = Math.cos(b), F = Math.sin(b), B = 0; B < t.height; B++)
                            for (var J = Math.max(B - 1, 0), Q = Math.min(B + 1, t.height - 1), R = 0; R < t.width; R++) {
                                var ae = Math.max(R - 1, 0)
                                    , O = Math.min(R + 1, t.width - 1)
                                    , K = v * c[B * t.width + ae]
                                    , k = v * c[B * t.width + O]
                                    , Z = v * c[J * t.width + R]
                                    , z = v * c[Q * t.width + R]
                                    , U = (k - K) / D
                                    , G = (z - Z) / D
                                    , N = Math.atan(Math.sqrt(U * U + G * G))
                                    , I = Math.atan2(G, -U);
                                I < 0 ? I = Math.PI / 2 - I : I > Math.PI / 2 ? I = 2 * Math.PI - I + Math.PI / 2 : I = Math.PI / 2 - I;
                                var X = F * Math.cos(N) + T * Math.sin(N) * Math.cos(S - I)
                                    , oe = Math.min(255, Math.max(0, Math.floor(256 * (X - .20710678118654746))));
                                p[B * t.width + R] = oe
                            }
                    }
                    var ee = t.getContext("2d")
                        , ne = ee.createImageData(t.width, t.height)
                        , L = ne.data;
                    function te(Ce, Me) {
                        var ce = Ce / 256
                            , ve = Me / 256;
                        return ce < .5 ? Math.min(255, Math.max(0, Math.floor(2 * ce * ve * 256))) : Math.min(255, Math.max(0, Math.floor((1 - 2 * (1 - ce) * (1 - ve)) * 256)))
                    }
                    for (var y = 0; y < t.width * t.height; y++) {
                        var le = u[y];
                        if (le !== 255) {
                            var ue = Y[le]
                                , V = ue.rgb;
                            if (p) {
                                var we = c[y]
                                    , pe = we < 62
                                    , me = ue.category === "ocean" || ue.category === "river"
                                    , ge = ue.temperature <= .1;
                                pe && !me ? ge ? V = Y[11].rgb : V = Y[7].rgb : !pe && me && (ge ? V = Y[26].rgb : V = Y[16].rgb),
                                    L[y * 4 + 0] = te(p[y], V[0]),
                                    L[y * 4 + 1] = te(p[y], V[1]),
                                    L[y * 4 + 2] = te(p[y], V[2])
                            } else
                                L[y * 4 + 0] = V[0],
                                    L[y * 4 + 1] = V[1],
                                    L[y * 4 + 2] = V[2];
                            if (L[y * 4 + 3] = 255,
                                n.biomeFilter)
                                if (n.biomeFilter.indexOf(le) === -1)
                                    L[y * 4 + 3] = 22;
                                else {
                                    var se = .6;
                                    L[y * 4 + 0] = Math.round(L[y * 4 + 0] * se),
                                        L[y * 4 + 1] = Math.round(L[y * 4 + 1] * se),
                                        L[y * 4 + 2] = Math.round(L[y * 4 + 2] * se)
                                }
                            n.biomeFilter && n.biomeFilter.indexOf(le) === -1 && (L[y * 4 + 3] = 32)
                        }
                    }
                    return ee.putImageData(ne, 0, 0),
                        Object.assign({}, n, {
                            biomeCanvas: t
                        })
                },
                onCanvasClick: function (n, i, t) {
                    var u = W.onCanvasClick(n, i, t);
                    return u.handled && d.triggerHandler("redrawmap"),
                    {
                        hit: u.hit
                    }
                },
                testCanvasHit: function (n, i) {
                    return W.testCanvasHit(n, i)
                },
                beforeMapRepaint: W.beforeMapRepaint,
                onMapRepainted: function (n) {
                    r && (r(),
                        r = null),
                        W.onMapRepainted(n)
                }
            })
        }();
    $(document).ready(function () {
        function a() {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
        }
        function d(s, m) {
            var l = new Image;
            l.onload = function () {
                m(null, l)
            }
                ,
                l.onerror = function (h) {
                    m(new Error(h))
                }
                ,
                l.src = s
        }
        function C(s, m) {
            var l = document.createElement("canvas");
            l.width = m.width,
                l.height = m.height;
            var h = l.getContext("2d");
            return h.drawImage(s, m.x, m.y, m.width, m.height, 0, 0, m.width, m.height),
                l
        }
        function _(s) {
            d(window.__seedMapPoisSpriteImage, function (m, l) {
                if (m) {
                    s(m);
                    return
                }
                var h = !1;
                Object.keys(x).forEach(function (M) {
                    var g = x[M].imgSrc;
                    if (!(!g || h))
                        if (typeof g == "string") {
                            var e = window.__seedMapPoisSprite[g];
                            if (!e) {
                                s(new Error("sprite not found: " + g)),
                                    h = !0;
                                return
                            }
                            x[M].img = C(l, e)
                        } else
                            x[M].img = {},
                                Object.keys(g).forEach(function (r) {
                                    var o = window.__seedMapPoisSprite[g[r]];
                                    if (!o) {
                                        s(new Error("sprite not found: " + g[r])),
                                            h = !0;
                                        return
                                    }
                                    x[M].img[r] = C(l, o)
                                })
                }),
                    !h && s()
            })
        }
        var A = a() ? Pe(() => import("./C7C6kwbuKSd0.js"), []) : Promise.resolve();
        A.then(function () {
            var s = fe;
            _(function (m) {
                if (m) {
                    chunkAppLoader.errorInit(),
                        console.error(m);
                    return
                }
                chunkAppLoader.init(s),
                    s.on("uiloaded", function () {
                        $("#biome-selection").biomeSelection(s),
                            $("#show-heights-label").heightsToggle(s),
                            $("#biome-dimension-selection").dimensionSelection(s),
                            $(".seedmap-layers-wrapper").seedMapLayers(s),
                            $("#biome-height-select").biomHeightSelect(s),
                            $("#map-controls").shareButtonAndPopup(s),
                            $("#mapdata-backup").backupMapData(s),
                            $("#mapdata-restore").restoreMapData(s);
                        var l = q.startRouting();
                        s.trigger("startedrouting", [l])
                    })
            })
        })
    }),
        globalThis.CB3Router = q,
        globalThis.CB3TooltipManager = W,
        globalThis.CB3MapUserDataManager = ie,
        globalThis.CB3FinderApp = fe
}
ye.call(typeof window < "u" ? window : globalThis);
//# sourceMappingURL=B_-HEsl-bAIC.js.map

//# chunkId=01988f4c-0158-7b82-9d53-d5aedeabfaac
