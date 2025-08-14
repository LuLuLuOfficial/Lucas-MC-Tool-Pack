!function () {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}
            , n = (new e.Error).stack;
        n && (e._posthogChunkIds = e._posthogChunkIds || {},
            e._posthogChunkIds[n] = "01988f4c-0144-75d3-9b1d-04c68dec59d1")
    } catch (e) { }
}();
var E = (t, s) => () => (s || t((s = {
    exports: {}
}).exports, s),
    s.exports);
import { E as A, J as P, B, D as k, C as L } from "./Dmj_xUyu2hdq.js";
import { b as D } from "./HighlightedBiomeCandidates.js";
import { S as O } from "./B9STObB0XZlt.js";
import { t as m } from "./DZJpEsl-8Xn-.js";
import "./CBomguU0MRsX.js";
var U = E((y, C) => {
    function _(t) {
        return t.edition === A.Java && t.javaVersion >= P.V1_18 || t.edition === A.Bedrock && t.bedrockVersion >= B.V1_18
    }
    const H = t => _(t);
    typeof C < "u" && (C = void 0);
    typeof y < "u" && (y = void 0);
    function F() {
        $.fn.dimensionSelection = function (t) {
            var s = $(this);
            if (!(s.length < 1)) {
                var n = {
                    select: s.find("select"),
                    overworldOption: s.find('option[value="overworld"]'),
                    netherOption: s.find('option[value="nether"]'),
                    endOption: s.find('option[value="end"]')
                }
                    , h = {
                        getDimension: function () {
                            return n.select.val()
                        }
                    }
                    , l = {
                        onChange: function () {
                            var u = h.getDimension();
                            u && (window.__analytics_dimension = u,
                                t.triggerHandler("dimensionchanged", [u]))
                        },
                        onPlatformChange: function (u) {
                            var r = t.getSupportedDimensions ? t.getSupportedDimensions(u) : {}
                                , c = !!r.nether
                                , i = !!r.end
                                , e = $.contains(document, n.netherOption[0])
                                , a = $.contains(document, n.endOption[0]);
                            e && !c ? n.netherOption.detach() : !e && c && (n.netherOption.insertAfter(n.overworldOption),
                                e = !0),
                                a && !i ? n.endOption.detach() : !a && i && n.endOption.insertAfter(e ? n.netherOption : n.overworldOption),
                                l.onChange()
                        }
                    };
                n.select.change(l.onChange),
                    t.initialDimension && n.select.val(t.initialDimension),
                    t.on("platformchange", function (u, r) {
                        l.onPlatformChange(r)
                    }),
                    t.on("dimensionchanged", function (u, r) {
                        window.__analytics_dimension = r,
                            n.select.val(r)
                    }),
                    l.onChange()
            }
        }
            ,
            $.fn.biomeSelection = function (t) {
                var s = $(this);
                if (!(s.length < 1)) {
                    var n = k.Overworld
                        , h = "depth0"
                        , l = {
                            checkbox: s.find("#biome-selection-checkbox"),
                            select: s.find("#biome-selection-select"),
                            selectWrap: s.find("#biome-selection-select-wrap")
                        }
                        , u = {
                            isFilterActive: function () {
                                return l.checkbox.is(":checked")
                            }
                        }
                        , r = {
                            getBiomeValue: function () {
                                if (!u.isFilterActive())
                                    return !1;
                                var i = l.select.select2("val");
                                return i.length < 1 ? !1 : i.map(function (e) {
                                    return +e
                                })
                            },
                            triggerBiomeFilterEvent: function () {
                                var i = r.getBiomeValue();
                                window.__analytics_biomeFilter = i,
                                    t.triggerHandler("biomefilterchanged", [i]),
                                    r.updateSanityWarning()
                            },
                            updateSanityWarning: function (i) {
                                var e = r.getBiomeValue();
                                if (e) {
                                    var a = r.sanityCheckBiomes(e, h);
                                    a ? t.triggerHandler("showerror", ["biome-sanity-warning", a, !0, "warning", !1, "bottom"]) : t.triggerHandler("hideerror", ["biome-sanity-warning"])
                                } else
                                    t.triggerHandler("hideerror", ["biome-sanity-warning"])
                            },
                            sanityCheckBiomes: function (i, e) {
                                for (var a = 174, o = 175, d = 183, f = e === "caveDepth" || e === "bottom", g = e === "bottom", p = 0; p < i.length; p++) {
                                    var v = i[p]
                                        , b = v === a || v === o;
                                    if (b && !f)
                                        return "Cave biomes don't generate at the surface. Please select biome height 'Underground' or 'Bottom'.";
                                    var w = v === d;
                                    if (w && !g)
                                        return "Deep Dark does not generate at the selected biome height. Please select height 'Bottom'."
                                }
                            }
                        }
                        , c = {
                            onFilterChanged: function () {
                                var i = u.isFilterActive();
                                l.select.select2("enable", i),
                                    r.triggerBiomeFilterEvent()
                            },
                            onBiomesChanged: function () {
                                var i = l.select.select2("container").find(".select2-input")[0];
                                i.value = "",
                                    i.dispatchEvent(new Event("change")),
                                    r.triggerBiomeFilterEvent(),
                                    l.selectWrap.find(".select2-search-choice > div").removeAttr("title")
                            },
                            dimensionChanged: function (i) {
                                i !== n && (n = i,
                                    l.select.select2("val", []),
                                    l.select.select2("updateResults"),
                                    r.triggerBiomeFilterEvent())
                            },
                            biomeHeightChanged: function (i) {
                                i !== h && (h = i,
                                    r.updateSanityWarning())
                            }
                        };
                    l.select.select2({
                        data: function () {
                            return {
                                results: D.filter(function (i) {
                                    return i.dimension === n
                                }).reduce(function (i, e) {
                                    return i.push(e),
                                        (e.oldNames || []).forEach(function (a) {
                                            i.push(Object.assign({}, e, {
                                                name: a,
                                                originalName: e.name
                                            }))
                                        }),
                                        i
                                }, []).map(function (i) {
                                    return {
                                        id: i.id,
                                        text: i.name,
                                        rgb: i.rgb,
                                        cbOriginalName: i.originalName
                                    }
                                })
                            }
                        },
                        multiple: !0,
                        placeholder: "Select Biomes",
                        ariaLabel: "Biomes to highlight",
                        formatResult: function (i) {
                            return '<div class="biome-square" style="background-color:rgb(' + i.rgb.join(",") + ');"></div>' + i.text
                        },
                        formatSelection: function (i) {
                            return '<div class="biome-square" style="background-color:rgb(' + i.rgb.join(",") + ');"></div>' + i.text
                        },
                        escapeMarkup: function (i) {
                            return i
                        },
                        matcher: function (i, e, a) {
                            return ("" + e + " " + a.id).toUpperCase().indexOf(("" + i).toUpperCase()) >= 0
                        },
                        width: "resolve"
                    }),
                        l.select.on("selected", function (i) {
                            var e = i.choice || {};
                            e.cbOriginalName && e.text && appHelpers.showToast("Biome '" + e.text + "' is now called '" + e.cbOriginalName + "'", {
                                duration: 8e3,
                                type: "warning"
                            })
                        }),
                        l.checkbox.change(c.onFilterChanged),
                        l.select.change(c.onBiomesChanged),
                        t.on("applydimensionchanged", function (i, e) {
                            c.dimensionChanged(e)
                        }),
                        t.on("biomeheightchanged", function (i, e) {
                            c.biomeHeightChanged(e)
                        }),
                        t.on("biomefilterchanged", function (i, e) {
                            if (r.getBiomeValue() !== e) {
                                if (!e) {
                                    l.checkbox.prop("checked", !1),
                                        l.select.select2("enable", !1);
                                    return
                                }
                                l.checkbox.prop("checked", !0),
                                    l.select.select2("enable", !0),
                                    l.select.select2("val", e),
                                    l.select.select2("updateResults")
                            }
                        }),
                        c.onFilterChanged()
                }
            }
            ,
            $.fn.seedMapLayers = function (t) {
                var s = $(this);
                if (!(s.length < 1)) {
                    var n = {
                        container: s,
                        selectAll: s.find("#seedmap-checkall"),
                        unselectAll: s.find("#seedmap-uncheckall"),
                        poiGrid: s.find("#seedmap-layers"),
                        pois: s.find("#seedmap-layers button"),
                        toggle: s.find("#seedmap-layers-toggle-hor"),
                        zoomWarning: s.find(".seedmap-layers-warning"),
                        scrollbarWrapper: s.find("[data-simplebar]")
                    }
                        , h = t.initialDimension
                        , l = []
                        , u = t.initialHiddenPois || []
                        , r = {
                            applyPois: function (e) {
                                n.pois.each(function (a, o) {
                                    var d = o.dataset.poi
                                        , f = e.indexOf(d) !== -1;
                                    f ? o.setAttribute("aria-checked", "true") : o.setAttribute("aria-checked", "false")
                                })
                            },
                            applyPoisFromStorage: function (e) {
                                n.pois.each(function (a, o) {
                                    var d = o.dataset.poi
                                        , f = e.on.indexOf(d) !== -1
                                        , g = e.off.indexOf(d) !== -1;
                                    f ? o.setAttribute("aria-checked", "true") : g && o.setAttribute("aria-checked", "false")
                                })
                            },
                            applyFilters: function () {
                                n.pois.each(function (e, a) {
                                    var o = a.dataset.poi
                                        , d = o === "biomes" || L[o].dimension === h && l.indexOf(o) !== -1;
                                    d ? a.classList.remove("hidden") : a.classList.add("hidden"),
                                        new O(n.scrollbarWrapper.get(0)).recalculate()
                                })
                            },
                            applyHiddenPois: function () {
                                n.pois.each(function (e, a) {
                                    var o = a.dataset.poi;
                                    u.indexOf(o) !== -1 ? a.classList.add("zoom-hidden") : a.classList.remove("zoom-hidden")
                                })
                            },
                            refreshZoomWarning: function () {
                                var e = !1;
                                n.pois.each(function (a, o) {
                                    !e && o.classList.contains("zoom-hidden") && o.getAttribute("aria-checked") === "true" && !o.classList.contains("hidden") && (e = !0)
                                }),
                                    e ? n.zoomWarning.removeClass("hidden") : n.zoomWarning.addClass("hidden")
                            },
                            getPois: function () {
                                var e = [];
                                return n.pois.each(function (a, o) {
                                    var d = o.dataset.poi
                                        , f = o.getAttribute("aria-checked") === "true";
                                    f && e.push(d)
                                }),
                                {
                                    pois: e
                                }
                            }
                        }
                        , c = {
                            emitInitialPois: function () {
                                var e = r.getPois();
                                t.triggerHandler("poischanged", [e, {
                                    isFromSeedMapLayers: !0
                                }])
                            },
                            onPoisChangedViaUi: function () {
                                var e = r.getPois();
                                c.storeActivePois(e),
                                    t.triggerHandler("poischanged", [e, {
                                        isFromSeedMapLayers: !0
                                    }])
                            },
                            setAllSelected: function (e) {
                                n.pois.attr("aria-checked", e ? "true" : "false")
                            },
                            storeActivePois: function (e) {
                                var a = e.pois
                                    , o = n.pois.map(function (f, g) {
                                        return g.dataset.poi
                                    }).toArray()
                                    , d = o.filter(function (f) {
                                        return a.indexOf(f) === -1
                                    });
                                try {
                                    window.localStorage.setItem("cb_finder_lastpois", JSON.stringify({
                                        pois: {
                                            on: a,
                                            off: d
                                        }
                                    }))
                                } catch {
                                    window._enableAnalytics && m("CB_ChunkApp_LastPoisUpdateError")
                                }
                            },
                            tryRestoreActivePois: function () {
                                var e;
                                try {
                                    e = JSON.parse(window.localStorage.getItem("cb_finder_lastpois"))
                                } catch {
                                    return
                                }
                                !e || !e.pois || !e.pois.on || !e.pois.off || (r.applyPoisFromStorage(e.pois),
                                    t.triggerHandler("poischanged", [r.getPois(), {
                                        isFromSeedMapLayers: !0
                                    }]))
                            }
                        }
                        , i = {
                            poiClicked: function () {
                                this.getAttribute("aria-checked") === "true" ? this.setAttribute("aria-checked", "false") : this.setAttribute("aria-checked", "true"),
                                    r.refreshZoomWarning(),
                                    c.onPoisChangedViaUi()
                            },
                            selectAll: function () {
                                c.setAllSelected(!0),
                                    r.refreshZoomWarning(),
                                    c.onPoisChangedViaUi()
                            },
                            unselectAll: function () {
                                c.setAllSelected(!1),
                                    r.refreshZoomWarning(),
                                    c.onPoisChangedViaUi()
                            },
                            dimensionChanged: function (e) {
                                h !== e && (h = e,
                                    r.applyFilters(e),
                                    r.refreshZoomWarning())
                            },
                            supportedPoisChanged: function (e) {
                                l = e,
                                    r.applyFilters(),
                                    r.refreshZoomWarning()
                            },
                            toggleClicked: function () {
                                n.container.hasClass("seedmap-layers-expanded") ? (n.container.removeClass("seedmap-layers-expanded"),
                                    n.toggle.text("▼")) : (n.container.addClass("seedmap-layers-expanded"),
                                        n.toggle.text("▲"))
                            },
                            hiddenPoisChanged: function (e) {
                                u = e,
                                    r.applyHiddenPois(),
                                    r.refreshZoomWarning()
                            }
                        };
                    n.toggle.click(i.toggleClicked),
                        n.pois.click(i.poiClicked),
                        n.selectAll.click(i.selectAll),
                        n.unselectAll.click(i.unselectAll),
                        t.on("applydimensionchanged", function (e, a) {
                            i.dimensionChanged(a)
                        }),
                        t.on("supportedpoischanged", function (e, a) {
                            i.supportedPoisChanged(a)
                        }),
                        t.on("hiddenpoischanged", function (e, a) {
                            i.hiddenPoisChanged(a)
                        }),
                        t.on("poischanged", function (e, a, o) {
                            (!o || !o.isFromSeedMapLayers) && c.storeActivePois(a),
                                r.applyPois(a.pois)
                        }),
                        t.on("startedrouting", function (e, a) {
                            c.tryRestoreActivePois()
                        }),
                        r.applyPois(t.initialPois),
                        r.applyFilters(),
                        r.applyHiddenPois(),
                        r.refreshZoomWarning(),
                        c.emitInitialPois()
                }
            }
            ,
            $.fn.biomHeightSelect = function (t) {
                var s = $(this);
                if (!(s.length < 1)) {
                    var n = t.initialDimension
                        , h = null
                        , l = t.initialPois
                        , u = null
                        , r = {
                            maybeUpdateEnabledState: function () {
                                var i = n === k.Overworld
                                    , e = h && H(h.cb3World)
                                    , a = l.indexOf("biomes") !== -1
                                    , o = i && e && a;
                                o !== u && (u = o,
                                    s.attr("disabled", !o))
                            }
                        }
                        , c = {
                            triggerUpdate: function () {
                                var i = s.val();
                                t.triggerHandler("biomeheightchanged", [i])
                            }
                        };
                    t.on("applydimensionchanged", function (i, e) {
                        n = e,
                            r.maybeUpdateEnabledState()
                    }),
                        t.on("platformchange", function (i, e) {
                            h = e,
                                r.maybeUpdateEnabledState()
                        }),
                        t.on("poischanged", function (i, e) {
                            l = e.pois,
                                r.maybeUpdateEnabledState()
                        }),
                        t.on("biomeheightchanged", function (i, e) {
                            s.val(e)
                        }),
                        s.change(c.triggerUpdate),
                        r.maybeUpdateEnabledState(),
                        c.triggerUpdate()
                }
            }
            ,
            $.fn.heightsToggle = function (t) {
                var s = $(this);
                if (!(s.length < 1)) {
                    var n = {
                        container: s,
                        checkbox: s.find("#show-heights-checkbox")
                    }
                        , h = t.initialDimension
                        , l = null
                        , u = t.initialPois
                        , r = t.initialBiomeHeight
                        , c = {
                            updateEnabledState: function () {
                                var e = i.isSupported(h, l, u);
                                n.checkbox.attr("disabled", !e),
                                    e ? n.container.removeClass("disabled") : n.container.addClass("disabled")
                            }
                        }
                        , i = {
                            isSupported: function (e, a, o) {
                                var d = e === k.Overworld
                                    , f = o.indexOf("biomes") !== -1 && r === "depth0"
                                    , g = a && (a.cb3World.javaVersion >= P.V1_18 || a.cb3World.bedrockVersion >= B.V1_18);
                                return d && f && g
                            },
                            triggerUpdate: function () {
                                var e = !!n.checkbox.is(":checked");
                                t.triggerHandler("showheightschanged", [e])
                            }
                        };
                    t.on("applydimensionchanged", function (e, a) {
                        h = a,
                            c.updateEnabledState()
                    }),
                        t.on("platformchange", function (e, a) {
                            l = a,
                                c.updateEnabledState()
                        }),
                        t.on("poischanged", function (e, a) {
                            u = a.pois,
                                c.updateEnabledState()
                        }),
                        t.on("biomeheightchanged", function (e, a) {
                            r = a,
                                c.updateEnabledState()
                        }),
                        t.on("showheightschanged", function (e, a) {
                            n.checkbox.prop("checked", a)
                        }),
                        n.checkbox.change(i.triggerUpdate),
                        c.updateEnabledState(),
                        i.triggerUpdate()
                }
            }
            ,
            $.fn.shareButtonAndPopup = function (t) {
                var s = $(this);
                if (s.length < 1)
                    return;
                var n = {
                    shareButton: this.find("#map-share"),
                    shareContent: this.find("#map-share-popover-content"),
                    mapPreview: this.find("#map-share-map-preview"),
                    mapDownload: this.find("#map-share-map-download"),
                    mapShare: this.find("#map-share-map-share"),
                    linkText: this.find("#map-share-link-text"),
                    linkCopy: this.find("#map-share-link-copy"),
                    linkShare: this.find("#map-share-link-share")
                }
                    , h = navigator.share && navigator.canShare && navigator.canShare({
                        title: "Chunk Base",
                        url: window.location.href
                    })
                    , l = new File([new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 55, 110, 249, 36, 0, 0, 0, 10, 73, 68, 65, 84, 120, 1, 99, 96, 0, 0, 0, 2, 0, 1, 115, 117, 1, 24, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130])], "chunkbase.png", {
                        type: "image/png",
                        lastModified: new Date().getTime()
                    })
                    , u = h && navigator.canShare({
                        title: "Chunk Base",
                        url: window.location.href,
                        files: [l]
                    });
                h ? u || n.mapShare.css("display", "none") : (n.linkShare.css("display", "none"),
                    n.mapShare.css("display", "none"));
                function r(o) {
                    function d() {
                        window.alert("Failed to download map. Please make sure you use an up-to-date web browser")
                    }
                    function f() {
                        var g = $("<a></a>");
                        g.attr("download", o.filename + ".png"),
                            g.attr("href", o.url),
                            g.appendTo($("body")),
                            g[0].click(),
                            g.remove()
                    }
                    if ("download" in document.createElement("a"))
                        try {
                            f(),
                                window._enableAnalytics && m("CB_ChunkApp_DownloadImage")
                        } catch {
                            d()
                        }
                    else
                        d()
                }
                function c(o, d, f) {
                    fetch(o.url).then(function (g) {
                        return g.blob()
                    }).then(function (g) {
                        var p = [new File([g], o.filename + ".png", {
                            type: g.type,
                            lastModified: new Date().getTime()
                        })]
                            , v = {
                                files: p,
                                title: d,
                                url: f,
                                text: d
                            };
                        navigator.share(v),
                            window._enableAnalytics && m("CB_ChunkApp_ShareImage")
                    })
                }
                function i(o, d) {
                    navigator.clipboard.writeText(o).then(function () {
                        n.linkCopy.get(0).classList.remove("copy"),
                            n.linkCopy.get(0).classList.add("approve"),
                            n.linkText.get(0).select(),
                            window._enableAnalytics && m("CB_ChunkApp_CopyLink"),
                            d(window.setTimeout(function () {
                                n.linkCopy.get(0).classList.remove("approve"),
                                    n.linkCopy.get(0).classList.add("copy")
                            }, 1500)),
                            appHelpers.showToast("Link copied to clipboard!", {
                                duration: 4e3
                            })
                    })
                }
                function e(o, d) {
                    var f = {
                        title: o,
                        url: d
                    };
                    navigator.share(f),
                        window._enableAnalytics && m("CB_ChunkApp_ShareLink")
                }
                var a;
                tippy(n.shareButton.get(0), {
                    interactive: !0,
                    theme: t.tippyTheme + " center-align",
                    trigger: "click",
                    allowHTML: !0,
                    content: n.shareContent.get(0),
                    maxWidth: 600,
                    onHide: function () {
                        a && (a(),
                            a = null)
                    },
                    onShow: function (o) {
                        var d = CB3Router.getUrlForCurrentState()
                            , f = t.triggerHandler("getmapasimage")
                            , g = t.triggerHandler("getsharetitle");
                        n.mapPreview.get(0).src = f.url;
                        var p = function () {
                            r(f)
                        };
                        n.mapDownload.get(0).addEventListener("click", p);
                        var v = function () {
                            c(f, g, d)
                        };
                        n.mapShare.get(0).addEventListener("click", v),
                            n.linkText.val(d);
                        var b = null
                            , w = function () {
                                i(d, function (x) {
                                    window.clearTimeout(b),
                                        b = x
                                })
                            };
                        n.linkCopy.get(0).addEventListener("click", w);
                        var S = function () {
                            e(g, d)
                        };
                        n.linkShare.get(0).addEventListener("click", S),
                            a = function () {
                                n.linkText.val(""),
                                    n.mapPreview.get(0).src = "",
                                    n.mapDownload.get(0).removeEventListener("click", p),
                                    n.mapShare.get(0).removeEventListener("click", v),
                                    n.linkCopy.get(0).removeEventListener("click", w),
                                    n.linkShare.get(0).removeEventListener("click", S)
                            }
                    }
                })
            }
            ,
            $.fn.backupMapData = function (t) {
                var s = $(this);
                s.click(function () {
                    var n = CB3MapUserDataManager.exportData()
                        , h = new Blob([n], {
                            type: "application/json"
                        })
                        , l = URL.createObjectURL(h)
                        , u = document.createElement("a");
                    u.href = l;
                    var r = new Date().toISOString().slice(0, 10);
                    u.download = "chunkbase-map-data-" + r + ".json",
                        u.click()
                })
            }
            ,
            $.fn.restoreMapData = function (t) {
                var s = $(this);
                s.click(function () {
                    var n = window.confirm("Loading saved locations will overwrite your current ones. Are you sure you want to continue?");
                    if (n) {
                        var h = document.createElement("input");
                        h.type = "file",
                            h.accept = ".json",
                            h.addEventListener("change", function (l) {
                                var u = l.target.files[0];
                                if (u) {
                                    var r = new FileReader;
                                    r.onerror = function () {
                                        appHelpers.showToast("Error reading file: " + r.error.message, {
                                            duration: 8e3,
                                            type: "error"
                                        })
                                    }
                                        ,
                                        r.onload = function (c) {
                                            var i = c.target.result
                                                , e = CB3MapUserDataManager.importData(i);
                                            e.ok ? (t.triggerHandler("redrawmap"),
                                                appHelpers.showToast("Map data loaded successfully!", {
                                                    duration: 8e3,
                                                    type: "info"
                                                })) : appHelpers.showToast("Failed to load map data. (" + e.error.name + ")", {
                                                    duration: 8e3,
                                                    type: "error"
                                                })
                                        }
                                        ,
                                        r.readAsText(u)
                                }
                            }),
                            h.click()
                    }
                })
            }
    }
    F.call(typeof window < "u" ? window : globalThis)
}
);
export default U();
//# sourceMappingURL=DMtd6uAMYWXI.js.map

//# chunkId=01988f4c-0144-75d3-9b1d-04c68dec59d1
