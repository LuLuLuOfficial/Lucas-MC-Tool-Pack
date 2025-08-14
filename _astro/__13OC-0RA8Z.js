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
        (e._posthogChunkIds[n] = "01988f4c-0151-7841-a5ee-317915704f4f"));
  } catch (e) { }
})();
var ht = (I, N) => () => (N || I((N = { exports: {} }).exports, N), N.exports);
import { L as H } from "./CBomguU0MRsX.js";
import { B as U, E as v, J as y, C as Re } from "./Dmj_xUyu2hdq.js";
import { t as he, i as vt } from "./DZJpEsl-8Xn-.js";
var bt = ht((He, Ye) => {
  typeof Ye < "u" && (Ye = void 0);
  typeof He < "u" && (He = void 0);
  function mt() {
    window._enableAnalytics = !1;
    var I = {
      config: {
        maxSeeds: 100,
        distantChunkWidth: 8,
        maxChunkWidth: 80,
        minChunkWidth: 1,
      },
      Platform: {
        java_1_21_6_lb: {
          label: "Java 1.21.6 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_21_6,
            config: { largeBiomes: !0 },
          },
        },
        java_1_21_6: {
          label: "Java 1.21.6",
          cb3World: { edition: v.Java, javaVersion: y.V1_21_6, config: {} },
        },
        java_1_21_5_lb: {
          label: "Java 1.21.5 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_21_5,
            config: { largeBiomes: !0 },
          },
        },
        java_1_21_5: {
          label: "Java 1.21.5",
          cb3World: { edition: v.Java, javaVersion: y.V1_21_5, config: {} },
        },
        java_1_21_4_lb: {
          label: "Java 1.21.4 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_21_4,
            config: { largeBiomes: !0 },
          },
        },
        java_1_21_4: {
          label: "Java 1.21.4",
          cb3World: { edition: v.Java, javaVersion: y.V1_21_4, config: {} },
        },
        java_1_21_2_lb: {
          label: "Java 1.21.2 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_21_2,
            config: { largeBiomes: !0 },
          },
        },
        java_1_21_2: {
          label: "Java 1.21.2",
          cb3World: { edition: v.Java, javaVersion: y.V1_21_2, config: {} },
        },
        java_1_21_lb: {
          label: "Java 1.21 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_21,
            config: { largeBiomes: !0 },
          },
        },
        java_1_21: {
          label: "Java 1.21",
          cb3World: { edition: v.Java, javaVersion: y.V1_21, config: {} },
        },
        java_1_20_lb: {
          label: "Java 1.20 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_20,
            config: { largeBiomes: !0 },
          },
        },
        java_1_20: {
          label: "Java 1.20",
          cb3World: { edition: v.Java, javaVersion: y.V1_20, config: {} },
        },
        java_1_19_3_lb: {
          label: "Java 1.19.3 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_19_3,
            config: { largeBiomes: !0 },
          },
        },
        java_1_19_3: {
          label: "Java 1.19.3",
          cb3World: { edition: v.Java, javaVersion: y.V1_19_3, config: {} },
        },
        java_1_19_lb: {
          label: "Java 1.19 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_19,
            config: { largeBiomes: !0 },
          },
        },
        java_1_19: {
          label: "Java 1.19",
          cb3World: { edition: v.Java, javaVersion: y.V1_19, config: {} },
        },
        java_1_18_lb: {
          label: "Java 1.18 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_18,
            config: { largeBiomes: !0 },
          },
        },
        java_1_18: {
          label: "Java 1.18",
          cb3World: { edition: v.Java, javaVersion: y.V1_18, config: {} },
        },
        java_1_17_lb: {
          label: "Java 1.17 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_17,
            config: { largeBiomes: !0 },
          },
        },
        java_1_17: {
          label: "Java 1.17",
          cb3World: { edition: v.Java, javaVersion: y.V1_17, config: {} },
        },
        java_1_16_lb: {
          label: "Java 1.16 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_16,
            config: { largeBiomes: !0 },
          },
        },
        java_1_16: {
          label: "Java 1.16",
          cb3World: { edition: v.Java, javaVersion: y.V1_16, config: {} },
        },
        java_1_15_lb: {
          label: "Java 1.15 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_15,
            config: { largeBiomes: !0 },
          },
        },
        java_1_15: {
          label: "Java 1.15",
          cb3World: { edition: v.Java, javaVersion: y.V1_15, config: {} },
        },
        java_1_14_lb: {
          label: "Java 1.14 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_14,
            config: { largeBiomes: !0 },
          },
        },
        java_1_14: {
          label: "Java 1.14",
          cb3World: { edition: v.Java, javaVersion: y.V1_14, config: {} },
        },
        java_1_13_lb: {
          label: "Java 1.13 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_13,
            config: { largeBiomes: !0 },
          },
        },
        java_1_13: {
          label: "Java 1.13",
          cb3World: { edition: v.Java, javaVersion: y.V1_13, config: {} },
        },
        java_1_12_lb: {
          label: "Java 1.12 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_12,
            config: { largeBiomes: !0 },
          },
        },
        java_1_12: {
          label: "Java 1.12",
          cb3World: { edition: v.Java, javaVersion: y.V1_12, config: {} },
        },
        java_1_11_lb: {
          label: "Java 1.11 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_11,
            config: { largeBiomes: !0 },
          },
        },
        java_1_11: {
          label: "Java 1.11",
          cb3World: { edition: v.Java, javaVersion: y.V1_11, config: {} },
        },
        java_1_10_lb: {
          label: "Java 1.10 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_10,
            config: { largeBiomes: !0 },
          },
        },
        java_1_10: {
          label: "Java 1.10",
          cb3World: { edition: v.Java, javaVersion: y.V1_10, config: {} },
        },
        java_1_9_lb: {
          label: "Java 1.9 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_9,
            config: { largeBiomes: !0 },
          },
        },
        java_1_9: {
          label: "Java 1.9",
          cb3World: { edition: v.Java, javaVersion: y.V1_9, config: {} },
        },
        java_1_8_lb: {
          label: "Java 1.8 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_8,
            config: { largeBiomes: !0 },
          },
        },
        java_1_8: {
          label: "Java 1.8",
          cb3World: { edition: v.Java, javaVersion: y.V1_8, config: {} },
        },
        java_1_7_lb: {
          label: "Java 1.7 (LB)",
          cb3World: {
            edition: v.Java,
            javaVersion: y.V1_7,
            config: { largeBiomes: !0 },
          },
        },
        java_1_7: {
          label: "Java 1.7",
          cb3World: { edition: v.Java, javaVersion: y.V1_7, config: {} },
        },
        bedrock_1_21_90: {
          label: "Bedrock 1.21.90",
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_21_90,
            config: {},
          },
        },
        bedrock_1_21_80: {
          label: "Bedrock 1.21.80",
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_21_80,
            config: {},
          },
        },
        bedrock_1_21_70: {
          label: "Bedrock 1.21.70",
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_21_70,
            config: {},
          },
        },
        bedrock_1_21_60: {
          label: "Bedrock 1.21.60",
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_21_60,
            config: {},
          },
        },
        bedrock_1_21_50: {
          label: "Bedrock 1.21.50",
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_21_50,
            config: {},
          },
        },
        bedrock_1_21: {
          label: "Bedrock 1.21",
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_21,
            config: {},
          },
        },
        bedrock_1_20_60: {
          label: "Bedrock 1.20.60",
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V_1_20_60,
            config: {},
          },
        },
        bedrock_1_20: {
          label: "Bedrock 1.20",
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_20,
            config: {},
          },
        },
        bedrock_1_19: {
          label: "Bedrock 1.19",
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_19,
            config: {},
          },
        },
        bedrock_1_18: {
          label: "Bedrock 1.18",
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_18,
            config: {},
          },
        },
        bedrock_1_17: {
          label: "Bedrock 1.17",
          use32BitSeed: !0,
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_17,
            config: {},
          },
        },
        bedrock_1_16: {
          label: "Bedrock 1.16",
          use32BitSeed: !0,
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_16,
            config: {},
          },
        },
        bedrock_1_14: {
          label: "Bedrock 1.14",
          use32BitSeed: !0,
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_14,
            config: {},
          },
        },
        java: {
          label: "Java",
          cb3World: { edition: v.Java, javaVersion: y.V1_7, config: {} },
        },
        bedrock: {
          label: "Bedrock",
          use32BitSeed: !1,
          cb3World: {
            edition: v.Bedrock,
            bedrockVersion: U.V1_19,
            config: {},
          },
        },
      },
      Zooming: {
        toChunkWidth: function (t) {
          return Math.pow(16, t);
        },
        toZoomFactor: function (t) {
          return Math.log(t) / Math.log(16);
        },
        getMinMaxZoom: function (t) {
          var s =
            t.minChunkWidth != null
              ? t.minChunkWidth
              : I.config.minChunkWidth,
            o =
              t.maxChunkWidth != null
                ? t.maxChunkWidth
                : I.config.maxChunkWidth,
            _ = I.Zooming.toZoomFactor(s),
            D = I.Zooming.toZoomFactor(o);
          return [_, D];
        },
      },
    },
      N = {
        snapToPixelRatio: function (t, s, _) {
          var _ = _ || window.devicePixelRatio || 1;
          return Math[s || "floor"](t * _) / _;
        },
        poisToParams: function (t) {
          var s = t.indexOf("biomes") !== -1,
            o = t.filter(function (_) {
              return _ !== "biomes";
            });
          return { showBiomes: s, pois: o };
        },
        getFullHashForPoi: function (t, s) {
          return t + "/" + Re[t].getHash(s);
        },
        toLong: function (t) {
          if (t.match(/^[-+]?\d+$/)) {
            var s, o;
            if (
              (t.startsWith("+")
                ? ((s = 1), (o = t.substr(1)))
                : t.startsWith("-")
                  ? ((s = -1), (o = t.substr(1)))
                  : ((s = 1), (o = t)),
                (o = o.replace(/^[0]+/g, "")),
                o.length < 1)
            )
              o = "0";
            else if (o.length > 20) return;
            var _ = H.fromString(o).multiply(H.fromNumber(s)),
              D = o;
            if ((s < 0 && (D = "-" + D), _.toString() === D)) return _;
          }
        },
        cleanSeed: function (t, s) {
          var o = N.toLong(t);
          return typeof o > "u" && (o = t.hashCode()), o.toString();
        },
        getSeedFromLong: function (t, o) {
          var o = I.Platform[o];
          return o && o.use32BitSeed ? t.toInt() + "" : t.toString();
        },
        hexToRgb: function (t) {
          var s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
          if (!s) throw new Error("bad hex color " + t);
          return [parseInt(s[1], 16), parseInt(s[2], 16), parseInt(s[3], 16)];
        },
        showToast: function (t, s) {
          if (!Toastify) {
            console.warn("Toastify not loaded, toasts not available");
            return;
          }
          var o = (s && s.duration) || 4e3,
            _ = (s && s.type) || "info",
            D = document.createElement("span");
          D.innerText = t;
          var x = document.createElement("i");
          _ === "warning" || _ === "error"
            ? x.classList.add("toast-icon", "icon-exclamation-sign")
            : x.classList.add("toast-icon", "icon-info-sign"),
            D.prepend(x),
            Toastify({
              node: D,
              duration: o,
              position: "right",
              gravity: "top",
              className: "toast-" + _,
            }).showToast();
        },
      },
      rt = (function () {
        function t() {
          try {
            if (
              typeof WebAssembly == "object" &&
              typeof WebAssembly.instantiate == "function"
            ) {
              var x = new WebAssembly.Module(
                Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
              );
              if (x instanceof WebAssembly.Module)
                return (
                  new WebAssembly.Instance(x) instanceof WebAssembly.Instance
                );
            }
          } catch { }
          return !1;
        }
        var s = function () {
          $("img.loader").addClass("hidden");
          var m = $("#app");
          m.removeClass("hidden-invisible"), m.removeClass("hidden");
        },
          o = function (x) {
            var m = $("#app");
            (x.compassImage = new Image()),
              (x.compassImage.src =
                "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22256%22%20height%3D%22256%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%20style%3D%22stroke%3Anone%3Bstroke-width%3A0%3Bstroke-dasharray%3Anone%3Bstroke-linecap%3Abutt%3Bstroke-linejoin%3Amiter%3Bstroke-miterlimit%3A10%3Bfill%3Anone%3Bfill-rule%3Anonzero%3Bopacity%3A1%22%3E%3Cpath%20d%3D%22M77.973%2063.445%2046.339.815c-.023-.045-.06-.076-.087-.117a1.536%201.536%200%200%200-.153-.207%201.507%201.507%200%200%200-.183-.166%201.446%201.446%200%200%200-.194-.133%201.455%201.455%200%200%200-.247-.105c-.044-.015-.081-.043-.128-.054-.03-.007-.06-.001-.091-.006A1.45%201.45%200%200%200%2045%20.01c-.088%200-.173.002-.258.017-.03.005-.06-.001-.09.006-.046.011-.083.039-.127.054a1.424%201.424%200%200%200-.248.106c-.07.039-.132.084-.194.133a1.453%201.453%200%200%200-.184.167%201.46%201.46%200%200%200-.152.206c-.026.042-.064.073-.087.117l-31.634%2062.63a1.5%201.5%200%200%200%201.97%202.037L45%2051.104l31.003%2014.378a1.493%201.493%200%200%200%201.709-.317%201.5%201.5%200%200%200%20.261-1.72zM43.5%207.79v40.703L16.652%2060.945%2043.5%207.79z%22%20style%3D%22stroke%3Anone%3Bstroke-width%3A1%3Bstroke-dasharray%3Anone%3Bstroke-linecap%3Abutt%3Bstroke-linejoin%3Amiter%3Bstroke-miterlimit%3A10%3Bfill%3A" +
                window.encodeURIComponent(x.textColor) +
                "%3Bfill-rule%3Anonzero%3Bopacity%3A1%22%20transform%3D%22matrix(2.81%200%200%202.81%201.407%201.407)%22%2F%3E%3Cpath%20d%3D%22M54.163%2090.009c-.432%200-.853-.187-1.144-.529L37.338%2071.02v17.489a1.5%201.5%200%200%201-3%200V66.936a1.5%201.5%200%200%201%202.643-.97l15.682%2018.46v-17.49a1.5%201.5%200%200%201%203%200v21.573a1.5%201.5%200%200%201-1.5%201.5z%22%20style%3D%22stroke%3Anone%3Bstroke-width%3A1%3Bstroke-dasharray%3Anone%3Bstroke-linecap%3Abutt%3Bstroke-linejoin%3Amiter%3Bstroke-miterlimit%3A10%3Bfill%3A" +
                window.encodeURIComponent(x.textColor) +
                "%3Bfill-rule%3Anonzero%3Bopacity%3A1%22%20transform%3D%22matrix(2.81%200%200%202.81%201.407%201.407)%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"),
              (x.compassImage.onload = function () {
                if ((nt(x), !window.EMBEDDED_MAP)) {
                  if (typeof $.fn.seedControls == "function") {
                    var S = m.find("#seed-controls");
                    S.each(function () {
                      $(this).seedControls(x);
                    });
                  }
                  if (typeof $.fn.seedFindControls == "function") {
                    var C = m.find("#seed-find-controls");
                    C.each(function () {
                      $(this).seedFindControls(x);
                    });
                  }
                  var h = m.find("#map-controls");
                  h.mapControls(x);
                }
                var w = m.find("#map-canvas");
                w.chunkMap(x),
                  s(),
                  x.triggerHandler("uiloaded"),
                  setTimeout(function () {
                    window._enableAnalytics = !0;
                  }, 5e3);
              });
          },
          _ = function () {
            $("#app").html(
              "This app is not supported by your browser. Please make sure your browser is up to date and try again."
            ),
              s();
          },
          D = {};
        return (
          (D.errorInit = function () {
            $("#app").html(
              "There was an error loading the app. Please try again later"
            ),
              he("CB_ChunkApp_InitError"),
              s();
          }),
          (D.init = function (x, m) {
            var S = typeof HTMLCanvasElement < "u",
              C =
                typeof CanvasRenderingContext2D < "u" &&
                typeof CanvasRenderingContext2D.prototype.fillText ==
                "function",
              h = typeof Worker < "u",
              w = !!window.Promise,
              p = !!t();
            (x.textColor =
              window.EMBEDDED_MAP_THEME === "dark" ? "#FFFFFF" : "#000000"),
              (x.axesColor =
                window.EMBEDDED_MAP_THEME === "dark" ? "#BBBBBB" : "#444444"),
              (x.bgColor = window.EMBEDDED_MAP_BGCOLOR || "#D0E3F0"),
              (x.tippyTheme =
                window.EMBEDDED_MAP_THEME === "dark" ? "dark" : "light"),
              !m && S && w && C && h && p
                ? o(x)
                : (_(),
                  he("CB_ChunkApp_BrowserTestFailure", {
                    missing: [
                      m && "app-support",
                      !S && "canvas",
                      !C && "canvastext",
                      !h && "workers",
                      !p && "wasm",
                      !w && "promise",
                    ]
                      .filter(Boolean)
                      .join(","),
                  }));
          }),
          D
        );
      })();
    ($.fn.seedControls = function (t) {
      var s = {
        error: "Error",
        fileError:
          "Unable to get seed from file. Please make sure to select a valid level.dat file and try again.",
        info: "Info",
        warning: "Warning",
        noSupport:
          "Due to browser limitations the following features are disabled",
        noDragAndDrop: "Drag and Drop",
        noFileRead: "Loading Seed from Savegame",
      },
        o = {
          seed: this.find("#seed"),
          randomButton: this.find("#seed-random"),
          file: this.find("#seed-file"),
          dropbox: this.find("#seed-dropbox"),
          platformSelect: this.find("select#platform"),
          errors: this.find("#seed-errors"),
          errorsBottom: $("#map-controls-errors"),
          fileError: $(
            '<div class="alert alert-error"><button class="close" data-dismiss="alert">×</button><strong>' +
            s.error +
            "!</strong> " +
            s.fileError +
            "</div>"
          ),
        },
        _ = function (i, f) {
          if (f.trim() !== f)
            return (
              "The seed you entered contains whitespace and was changed to '" +
              i.toString() +
              "'. Please double-check your input."
            );
          if (i.toString() !== f && f.match(/^[-+]?\d+$/))
            return (
              "The seed you entered is a valid number but too large and was changed to '" +
              i.toString() +
              "'. Please double-check your input."
            );
        },
        D = {
          maybeSetPlatform: function (i) {
            var f = o.platformSelect
              .find("option")
              .map(function (b, W) {
                return $(W).val();
              })
              .get();
            return f.indexOf(i) !== -1
              ? (o.platformSelect.val(i), S.platformChanged(), !0)
              : !1;
          },
          ensureEdition: function (i) {
            var f = I.Platform[o.platformSelect.val()],
              b = f && f.cb3World && f.cb3World.edition;
            if (!(!b || b === i)) {
              var W = o.platformSelect
                .find("option")
                .map(function (J, R) {
                  return $(R).val();
                })
                .get(),
                n = W.find(function (J) {
                  var R = I.Platform[J],
                    G = R && R.cb3World && R.cb3World.edition;
                  return G && G === i;
                });
              n && D.maybeSetPlatform(n);
            }
          },
          cleanSeedString: function (i) {
            return i.substr(0, 32);
          },
          getRandomSeed: function () {
            var i = this.getRandomLong();
            return N.getSeedFromLong(i, o.platformSelect.val());
          },
          getRandomLong: function () {
            var i = Math.floor(Math.random() * Math.pow(2, 32)),
              f = Math.floor(Math.random() * Math.pow(2, 32));
            return H.fromBits(i, f);
          },
          removeZero: function (i) {
            return i.replace(/^[0]+/g, "");
          },
          parseFiles: function (i) {
            i.size < 1
              ? m.showFileError()
              : Array.from(i).forEach(function (f) {
                D.addFile(f);
              });
          },
          addFile: function (i) {
            window._enableAnalytics && he("CB_ChunkApp_SaveFileLoaded"),
              loadMinecraftSave(i, function (f, b) {
                if (f) {
                  m.showFileError();
                  return;
                }
                var W = b.getSeed(),
                  n = b.getLevelName();
                if (
                  W == null ||
                  W.toString().length >= 100 ||
                  n == null ||
                  n.toString().length >= 100
                ) {
                  m.showFileError();
                  return;
                }
                m.setSeed(W), D.ensureEdition(b.isBedrock ? v.Bedrock : v.Java);
              });
          },
        },
        x = D.getRandomLong(),
        m = {
          refreshSeedAndPlatform: function (i, f) {
            var b = null,
              W = null;
            try {
              b = window.localStorage.getItem("cb_finder_lastseed");
            } catch { }
            try {
              W = window.localStorage.getItem("cb_finder_lastplatform");
            } catch { }
            return (
              !f && W && D.maybeSetPlatform(W),
              !i && b ? (m.setSeed(b), !0) : !1
            );
          },
          getSeed: function () {
            return o.seed.val();
          },
          setSeed: function (i, f) {
            o.seed.val(i), f || S.seedSubmit();
          },
          setPlatform: function (i) {
            o.platformSelect.val() !== i && o.platformSelect.val(i);
          },
          showFileError: function () {
            o.fileError.prependTo(o.errors);
          },
          showDropbox: function (i) {
            o.dropbox.fadeIn(i), $(document).one("click", m.hideDropbox);
          },
          hideDropbox: function (i) {
            typeof i != "number" && (i = 0), o.dropbox.fadeOut(i);
          },
        },
        S = {
          seedChanged: __CB__debounce(function () {
            S.seedSubmit();
          }, 500),
          seedBlurred: function () {
            S.seedSubmit();
          },
          platformChanged: function () {
            var i = o.platformSelect.val();
            i.indexOf("platform-") === 0 && (i = i.substr(9));
            var f = I.Platform[i];
            if (!window.EMBEDDED_MAP)
              try {
                window.localStorage.setItem("cb_finder_lastplatform", i);
              } catch { }
            f.warning
              ? h.showError(
                null,
                "platform-warning",
                f.warning,
                !1,
                "warning",
                !1
              )
              : h.hideError(null, "platform-warning"),
              t.triggerHandler("platformchange", [f, i]);
          },
          randomButton: function () {
            m.setSeed(D.getRandomSeed(), !1);
          },
          openFileDialog: function () {
            o.file.removeClass("hidden").focus().click().addClass("hidden");
          },
          fileSelected: function (i) {
            D.parseFiles(i.target.files);
          },
          dnd: {
            dragEnter: function () {
              m.showDropbox(125);
            },
            dragLeave: function (i) {
              (i = i.originalEvent),
                (i.clientX < 10 ||
                  i.clientY < 10 ||
                  $(window).width() - i.clientX < 10 ||
                  $(window).height - i.clientY < 10) &&
                m.hideDropbox(125);
            },
            drop: function (i) {
              (i = i.originalEvent),
                i.stopPropagation && i.stopPropagation(),
                i.preventDefault(),
                m.hideDropbox(0);
              var f = i.dataTransfer.files;
              if (!(typeof f > "u" || f.length == 0))
                return D.parseFiles(f), !1;
            },
          },
          seedSubmit: function () {
            var i = D.cleanSeedString(m.getSeed()),
              f,
              b = o.platformSelect.val(),
              W = !1;
            i.length < 1
              ? ((f = N.getSeedFromLong(x, b)), (W = !0))
              : (f = N.cleanSeed(i)),
              m.setSeed(i, !0);
            var n = H.fromString(f);
            if (!window.EMBEDDED_MAP)
              try {
                window.localStorage.setItem("cb_finder_lastseed", i);
              } catch { }
            (i.length < 1 || n.toString() === i || typeof N.toLong(i) < "u") &&
              (i = void 0);
            var J = [];
            J.indexOf(n.toString()) !== -1
              ? (h.showError(
                null,
                "seed-blocked",
                "Sorry, this seed has been blocked at the request of a server.",
                !1,
                "error",
                !0
              ),
                (i = "1"),
                (n = H.ONE))
              : h.hideError(null, "seed-blocked");
            var R = i != null && _(n, i);
            R
              ? h.showError(null, "seed-sanity-warning", R, !0, "warning", !1)
              : h.hideError(null, "seed-sanity-warning"),
              t.triggerHandler("seedchangeui", [n, i, W]);
          },
        },
        C = {},
        h = {
          showError: function (i, f, b, W, n, J, R) {
            if (W && J) throw new Error();
            if (!(J && C[f])) {
              (n = n || "error"), h.hideError(i, f);
              var G = $(
                '<div id="chunkapp-error-' +
                f +
                '" class="alert alert-' +
                n +
                '">' +
                (W
                  ? '<button class="close" data-dismiss="alert">×</button>'
                  : "") +
                "<strong>" +
                s[n] +
                '!</strong> <span class="message"></span></div>'
              );
              G.find(".message").replaceWith(b),
                G.prependTo(R === "bottom" ? o.errorsBottom : o.errors),
                (C[f] = !0);
            }
          },
          hideError: function (i, f) {
            (C[f] = !1),
              o.errors.find("#chunkapp-error-" + f).detach(),
              o.errorsBottom.find("#chunkapp-error-" + f).detach();
          },
          randomizeSeed: function () {
            m.setSeed(D.getRandomSeed(), !1);
          },
          seedChanged: function (i, f, b, W) {
            var n = m.getSeed();
            b === n || (n === "" && W) || m.setSeed(b ?? f.toString(), !0);
          },
          platformChanged: function (i, f, b) {
            m.setPlatform(b);
          },
        },
        w = !!window.FileReader;
      if (
        (o.randomButton.click(S.randomButton),
          w &&
          ($("body").bind("dragenter", S.dnd.dragEnter),
            o.dropbox
              .bind("dragleave", S.dnd.dragLeave)
              .bind("dragover", !1)
              .bind("drop", S.dnd.drop)
              .hide()
              .removeClass("hidden"),
            this.find("#seed-load").removeClass("hidden").click(S.openFileDialog),
            o.file.change(S.fileSelected)),
          !w)
      ) {
        var p =
          '<div class="alert"><button class="close" data-dismiss="alert">×</button><strong>' +
          s.info +
          "!</strong> " +
          s.noSupport +
          ": " +
          s.noFileRead +
          "</div>";
        $(p).appendTo(o.errors);
      }
      o.seed.keypress(function (i) {
        i.which === 13 && (i.preventDefault(), S.seedSubmit());
      }),
        t.on("startedrouting", function (i, f) {
          m.refreshSeedAndPlatform(f.hasAppliedSeed, f.hasAppliedPlatform),
            S.seedSubmit(),
            o.seed.change(),
            o.platformSelect.change();
        }),
        t.on("uiloaded", function () {
          typeof t.errors == "object" &&
            $.each(t.errors, function (i, f) {
              $(
                '<div class="alert alert-error"><button class="close" data-dismiss="alert">×</button><strong>' +
                s.error +
                "!</strong> </div>"
              )
                .append(document.createTextNode(f))
                .prependTo(o.errors);
            }),
            typeof t.warnings == "object" &&
            $.each(t.warnings, function (i, f) {
              $(
                '<div class="alert"><button class="close" data-dismiss="alert">×</button><strong>' +
                s.info +
                "!</strong> " +
                f +
                "</div>"
              ).prependTo(o.errors);
            });
        }),
        o.seed.change(S.seedChanged).keyup(S.seedChanged),
        o.seed.blur(S.seedBlurred),
        o.platformSelect.change(S.platformChanged),
        t.on("showerror", h.showError),
        t.on("hideerror", h.hideError),
        t.on("randomizeSeed", h.randomizeSeed),
        t.on("seedchangeui", h.seedChanged),
        t.on("platformchange", h.platformChanged);
    }),
      ($.fn.mapControls = function (t) {
        var s = this,
          o = {
            sliderContainer: this.find("#map-zoom"),
            slider: this.find("#map-zoom-slider"),
            gotoX: this.find("#map-goto-x"),
            gotoZ: this.find("#map-goto-z"),
            gotoButton: this.find("#map-goto-go"),
            theaterButton: this.find("#map-theater"),
            hideSecondary: this.find("#map-secondary-enabled"),
            useWorkers: this.find("#map-worker-enabled"),
            gridLines: this.find("#show-grid-lines"),
          },
          _ = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }),
          D = {
            updateZoomTooltip: function (f) {
              var b = Math.pow(16, f) / 16,
                W = "";
              if (b >= 1) {
                var n = _.format(b);
                W = n + " " + (n === "1" ? "pixel" : "pixels") + " per block";
              } else W = _.format(1 / b) + " blocks per pixel";
              o.sliderContainer.get(0).title = W;
            },
          },
          x = {
            flashRed: function (f) {
              f.addClass("errorflash"),
                setTimeout(function () {
                  f.removeClass("errorflash");
                }, 1500);
            },
          },
          m = {
            sliderMoved: function (f, b) {
              var W = h[0] + b.value * p;
              t.triggerHandler("zoomsetfactor", W), D.updateZoomTooltip(W);
            },
            goTo: function (f, b) {
              window._enableAnalytics && he("CB_ChunkApp_GoTo"), (b = b === !0);
              var W = o.gotoX.val(),
                n = o.gotoZ.val(),
                J = !1,
                R = !1;
              if (((W = N.toLong(W)), (n = N.toLong(n)), typeof W < "u")) {
                var G = W.toNumber();
                (G > 34359738352 || G < -34359738368) && (J = !0);
              } else J = !0;
              if (typeof n < "u") {
                var Te = n.toNumber();
                (Te > 34359738352 || Te < -34359738368) && (R = !0);
              } else R = !0;
              J && !b && x.flashRed(o.gotoX),
                R && !b && x.flashRed(o.gotoZ),
                !J && !R && t.triggerHandler("goto", [W, n]);
            },
            buttonPress: function (f) {
              f.keyCode === 13 && o.gotoButton.click();
            },
            secondaryChanged: function (f) {
              t.triggerHandler(
                "secondarychange",
                o.hideSecondary.is(":checked")
              );
            },
            gridLinesChanged: function (f) {
              t.triggerHandler("gridlineschange", o.gridLines.is(":checked"));
            },
            workerChanged: function (f) {
              var b = o.useWorkers.is(":checked");
              t.useWorkers !== b &&
                ((t.useWorkers = b), t.triggerHandler("webworkerchange", [b]));
            },
            toggleTheater: function () {
              t.triggerHandler("toggleTheaterMode", []);
            },
          },
          S = {
            zoomChange: function (f, b) {
              o.slider.slider("value", [Math.floor((b - h[0]) / p)]),
                D.updateZoomTooltip(b);
            },
            pinChanged: function (f, b, W, n) {
              n ||
                b == null ||
                W == null ||
                (o.gotoX.val(b.toString()), o.gotoZ.val(W.toString()));
            },
            theaterModeChanged: function (f, b) {
              b
                ? (o.theaterButton.addClass("exit-full-screen"),
                  o.theaterButton.removeClass("enter-full-screen"),
                  o.theaterButton.text("收起"))
                : (o.theaterButton.addClass("enter-full-screen"),
                  o.theaterButton.removeClass("exit-full-screen"),
                  o.theaterButton.text("扩展"));
            },
          },
          C = 64,
          h = I.Zooming.getMinMaxZoom(t),
          w = h[1] - h[0],
          p = Math.pow(2, Math.floor(Math.log(w / C) / Math.log(2))),
          i = Math.floor(w / p);
        o.slider.slider({ min: 0, max: i, step: 1, value: Math.ceil(i / 2) }),
          o.gotoButton.click(m.goTo),
          o.gotoX.add(o.gotoZ).on("keypress", m.buttonPress),
          o.slider.on("slide", m.sliderMoved),
          o.hideSecondary.click(m.secondaryChanged),
          o.gridLines.change(m.gridLinesChanged),
          o.theaterButton.click(m.toggleTheater),
          t.on("zoomchange", S.zoomChange),
          t.on("pinset", S.pinChanged),
          t.on("theaterModeChanged", S.theaterModeChanged),
          t.on("gridlineschange", function (f, b) {
            o.gridLines.prop("checked", b);
          }),
          (t.initialHideSecondary = o.hideSecondary.prop("checked")),
          t.supportsWorkers
            ? (o.useWorkers.click(m.workerChanged), m.workerChanged())
            : (s.find("#map-worker").hide(),
              t.triggerHandler("webworkerchange", [!1])),
          o.gridLines.prop("checked", !t.initialHideGridLines),
          t.triggerHandler("gridlineschange", !t.initialHideGridLines),
          this.find("a")
            .filter(function () {
              return typeof $(this).data("scrollto") < "u";
            })
            .each(function () {
              var f = $(this);
              f.click(function () {
                return $(f.data("scrollto")).ScrollTo(), !1;
              });
            }),
          setTimeout(function () {
            o.gotoButton.trigger("click", !0);
          }, 0);
      }),
      ($.fn.chunkMap = function (t) {
        var s = this,
          o = $("body"),
          _ = I.Platform.java,
          D = !t.initialHideSecondary,
          x = !t.initialHideGridLines,
          m,
          S,
          C,
          h,
          w,
          p,
          i,
          f,
          b = !1,
          W = 1,
          n = s.get(0).getContext("2d");
        (n.imageSmoothingEnabled = !1),
          (n.mozImageSmoothingEnabled = !1),
          (n.webkitImageSmoothingEnabled = !1),
          (n.msImageSmoothingEnabled = !1);
        var J = "Arial, Helvetica, sans-serif";
        t.loadingBackground &&
          s.css("background-color", "rgb(" + t.loadingBackground + ")");
        var R = {
          chunkLoad: "正在加载区块...",
          chunkLoadShort: "加载中...",
          to: "至",
          from: "自",
          forLabel: "for",
        },
          G = !1;
        setTimeout(function () {
          G = !0;
        }, 90 * 1e3);
        function Te() {
          try {
            if (!window._enableAnalytics || !G || !vt()) return;
            var e = {
              platform:
                Object.keys(I.Platform).find(function (a) {
                  return I.Platform[a] === _;
                }) || "N/A",
              finder: window.location.pathname,
              dimension: window.__analytics_dimension || "N/A",
              zoom: Math.pow(2, Math.floor(Math.log2(r.chunkWidth))),
              biomeFilterCount: window.__analytics_biomeFilter
                ? window.__analytics_biomeFilter.length
                : "N/A",
              poisCount: window.__analytics_lastPois
                ? window.__analytics_lastPois.length
                : "-1",
              pois:
                window.__analytics_lastPois && Re
                  ? window.__analytics_lastPois
                    .map(function (a) {
                      return Re[a].shortId;
                    })
                    .concat(window.__analytics_lastBiomes ? ["Bi"] : [])
                    .join("")
                  : "",
              theaterMode: !!r.isTheaterMode,
              hasMarkedPois: window.CB3MapUserDataManager
                ? window.CB3MapUserDataManager.getNumberMarkedPois() > 0
                : !1,
            };
            he("CB_ChunkApp_Usage", e),
              window.posthog && window.posthog.capture("CB_ChunkApp_Usage", e);
          } catch { }
          G = !1;
        }
        var r = {
          seed: H.ZERO,
          seedString: void 0,
          chunkWidth: 48,
          distantView: !1,
          startX: -6,
          startZ: -4,
          gridStartX: w,
          gridEndX: C + 1,
          gridStartY: p,
          gridEndY: h + 1,
          pin: void 0,
          isTheaterMode: !1,
        },
          be = {
            setSeed: function (e, a, d) {
              r.seed.equals(e) ||
                ((r.seed = e), (r.seedString = a), (r.seedDisplay = d));
            },
            limitInt32: function (e) {
              return e > 2147483647
                ? 2147483647
                : e < -2147483648
                  ? -2147483648
                  : e;
            },
            nearInteger: function (e) {
              var a = e % 1;
              return a < -0.999 || (a > 0 && a < 0.001)
                ? Math.floor(e)
                : a > 0.999 || (a < 0 && a > -0.001)
                  ? Math.ceil(e)
                  : e;
            },
            formatNr: function (e) {
              return (e += ""), e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            },
          },
          A = (function () {
            var e = 0,
              a = t.bgColor,
              d = "#f0cccc",
              g = N.hexToRgb(t.bgColor).join(","),
              k = !1,
              E,
              X = t.drawAll,
              u = {
                formatNr: be.formatNr,
                chunkXToScreen: function (l) {
                  return w + Math.round((l - r.startX) * r.chunkWidth);
                },
                chunkZToScreen: function (l) {
                  return p + Math.round((l - r.startZ) * r.chunkWidth);
                },
                getFirstChunkX: function () {
                  return Math.floor(r.startX);
                },
                getFirstChunkZ: function () {
                  return Math.floor(r.startZ);
                },
                getFirstChunkXToFill: function () {
                  var l = u.getFirstChunkX(),
                    c = l + 1,
                    T = u.chunkXToScreen(l),
                    V = u.chunkXToScreen(c);
                  return (T = Math.max(T, w)), V - T < 3 ? c : l;
                },
                getFirstChunkZToFill: function () {
                  var l = u.getFirstChunkZ(),
                    c = l + 1,
                    T = u.chunkZToScreen(l),
                    V = u.chunkZToScreen(c);
                  return (T = Math.max(T, p)), V - T < 3 ? c : l;
                },
                getLastChunkXToFill: function () {
                  var l = u.getFirstChunkXToFill();
                  return (
                    l + Math.floor((C - u.chunkXToScreen(l)) / r.chunkWidth)
                  );
                },
                getLastChunkZToFill: function () {
                  var l = u.getFirstChunkZToFill();
                  return (
                    l + Math.floor((h - u.chunkZToScreen(l)) / r.chunkWidth)
                  );
                },
                getScreenFirstX: function () {
                  return (Math.floor(r.startX) - r.startX) * r.chunkWidth + w;
                },
                getScreenFirstY: function () {
                  return (Math.floor(r.startZ) - r.startZ) * r.chunkWidth + p;
                },
                getInScreenFirstX: function (l) {
                  for (var c = u.getScreenFirstX(); c <= w - (l ? 1 : 0);)
                    c += r.chunkWidth;
                  return c;
                },
                getInScreenFirstY: function (l) {
                  for (var c = u.getScreenFirstY(); c <= p - (l ? 1 : 0);)
                    c += r.chunkWidth;
                  return c;
                },
                getInScreenFirstRegionX: function (l) {
                  for (
                    var c = u.getScreenFirstX(), T = Math.floor(r.startX);
                    c <= w - (l ? 1 : 0) || T % 32 !== 0;

                  )
                    (c += r.chunkWidth), (T += 1);
                  return c;
                },
                getInScreenFirstRegionY: function (l) {
                  for (
                    var c = u.getScreenFirstY(), T = Math.floor(r.startZ);
                    c <= p - (l ? 1 : 0) || T % 32 !== 0;

                  )
                    (c += r.chunkWidth), (T += 1);
                  return c;
                },
                getFirstCoordinateX: function () {
                  return Math.ceil(r.startX) * 16;
                },
                getLastCoordinateX: function () {
                  for (
                    var l = u.getFirstCoordinateX(),
                    c = u.getInScreenFirstX(!0);
                    c <= C;

                  )
                    (c += r.chunkWidth), (l += 16);
                  return l - 16;
                },
                getFirstCoordinateZ: function () {
                  return Math.ceil(r.startZ) * 16;
                },
                getLastCoordinateZ: function () {
                  for (
                    var l = u.getFirstCoordinateZ(),
                    c = u.getInScreenFirstY(!0);
                    c <= h;

                  )
                    (c += r.chunkWidth), (l += 16);
                  return l - 16;
                },
              },
              Xe = (function () {
                var l = 0,
                  c = 0,
                  T = 0,
                  V = 0,
                  Z = 0,
                  j = 0,
                  L = 0,
                  z = 0,
                  Y = 0,
                  re = 0,
                  ke = [],
                  ye = !1,
                  qe = 0,
                  ve = 0,
                  _e = 0,
                  xe = t.secondaryRange || 0,
                  We = !1,
                  Ee = null,
                  Ke = {};
                Ke.mapChanged = function (F) {
                  if (!(typeof r.seed > "u")) {
                    t.triggerHandler("mapDrawingStarted", [r, _]);
                    var P = F === !0 || X;
                    if (
                      ((ve = (ve + 1) | 0),
                        (_e = 0),
                        (T = u.getFirstChunkXToFill()),
                        (V = u.getFirstChunkZToFill()),
                        (Z = u.getLastChunkXToFill()),
                        (j = u.getLastChunkZToFill()),
                        typeof _.boundaries < "u" &&
                        ((T = Math.max(T, _.boundaries.minX)),
                          (V = Math.max(V, _.boundaries.minZ)),
                          (Z = Math.min(Z, _.boundaries.maxX)),
                          (j = Math.min(j, _.boundaries.maxZ))),
                        (L = T - xe),
                        (z = V - xe),
                        (Y = Z + xe),
                        (re = j + xe),
                        (l = L),
                        (c = z),
                        (ke = []),
                        (Ee = null),
                        (We =
                          (r.distantView && t.distantViewDeferredRender) ||
                          (!r.distantView && t.deferredRender)),
                        We)
                    ) {
                      var Q = function (ie, le) {
                        var ne = u.chunkXToScreen(ie) + 1,
                          te = u.chunkZToScreen(le) + 1;
                        return [ne, te];
                      };
                      Ee = t.getRenderer(L, z, Y - L, re - z, r.chunkWidth, Q);
                    }
                    if (
                      (F ||
                        (lt(), b || (s.attr("aria-busy", "true"), (b = !0))),
                        !ye || P)
                    ) {
                      ye = !0;
                      var ue = new Date().getTime() - E;
                      ue < 10 || P
                        ? et(void 0, 90 - ue, P, F)
                        : window.postMessage("drawChunks", "*");
                    }
                  }
                };
                var lt = function () {
                  oe(),
                    (n.font = "12px " + J),
                    (n.textAlign = "end"),
                    (n.textBaseline = "middle"),
                    (n.fillStyle = t.textColor);
                  var F = i ? R.chunkLoadShort : R.chunkLoad;
                  n.fillText(F, C - 5, 16), ae();
                },
                  dt = function () {
                    oe();
                    var F = (w + C) / 2 + 20;
                    i && (F += 50),
                      (n.fillStyle = a),
                      n.fillRect(F, 0, C - F, p - 20),
                      ae();
                  },
                  me = function (F, P, Q, ue) {
                    if (Je(F, P)) {
                      var ie = t.primaryColorRGB,
                        le = t.secondaryColorRGB;
                      typeof ue == "string" && ((ie = ue), (le = ue));
                      var ne = u.chunkXToScreen(F) + 1,
                        te = u.chunkZToScreen(P) + 1,
                        we = Math.min(u.chunkXToScreen(F + 1) - 1, C + 1),
                        de = Math.min(u.chunkZToScreen(P + 1) - 1, h + 1);
                      (ne = Math.max(ne, w + 2)),
                        (te = Math.max(te, p + 2)),
                        Q < 1
                          ? (n.fillStyle = "rgba(" + le + "," + Q + ")")
                          : (n.fillStyle = "rgb(" + ie + ")"),
                        ae(),
                        r.distantView
                          ? (n.beginPath(),
                            n.arc(
                              (ne + we) / 2,
                              (te + de) / 2,
                              4,
                              0,
                              2 * Math.PI,
                              !1
                            ),
                            n.fill())
                          : n.fillRect(ne, te, we - ne, de - te);
                    }
                  },
                  Je = function (F, P) {
                    return F >= T && P >= V && F <= Z && P <= j;
                  },
                  Qe = function (F, P) {
                    return (F = F - T), (P = P - V), F * (j - V + 1) + P;
                  },
                  st = function (F, P) {
                    if (Je(F, P)) {
                      var Q = Qe(F, P);
                      ke[Q] = 1;
                    }
                  },
                  ct = function (F, P) {
                    if (!Je(F, P)) return !1;
                    var Q = Qe(F, P);
                    return ke[Q] === 1;
                  },
                  et = function (F, P, Q, ue) {
                    if (typeof F < "u") {
                      if (F.source != window || F.data != "drawChunks") return;
                      F.stopPropagation();
                    }
                    typeof P > "u" && (P = 10),
                      (Q = Q === !0),
                      (qe = new Date().getTime());
                    var ie = ve;
                    function le() {
                      (!t.async || (_e < 1 && ye === !1)) &&
                        (t.drawChunkBordersPostRender || Ve(),
                          oe(),
                          Le(),
                          ue ||
                          (q.clearFooter(),
                            Ie(),
                            dt(),
                            b && (s.attr("aria-busy", "false"), (b = !1))));
                    }
                    for (; new Date().getTime() - qe < P || Q;) {
                      if (We) {
                        if (!Ee.hasNext()) {
                          (ye = !1), le();
                          return;
                        }
                      } else if (l > Y && (c++, (l = L), c > re)) {
                        (ye = !1), le();
                        return;
                      }
                      if (t.async)
                        We
                          ? (_e++,
                            Ee.renderNextAsync(
                              n,
                              function (se, ce, Ce, tt, ft, ut) {
                                if (ve !== ie) return !1;
                                if ((ae(), ut))
                                  (n.fillStyle = d), n.fillRect(se, ce, Ce, tt);
                                else if (ft && t.loadingBackground) {
                                  var gt = n.globalCompositeOperation;
                                  (n.globalCompositeOperation =
                                    "destination-over"),
                                    (n.fillStyle = a),
                                    n.fillRect(se, ce, Ce, tt),
                                    (n.globalCompositeOperation = gt);
                                }
                                return !0;
                              },
                              function () {
                                _e--, ve === ie && le();
                              },
                              function (se, ce, Ce) {
                                ve === ie && me(se, ce, 1, Ce);
                              },
                              function () {
                                Ve(), Le();
                              },
                              function () {
                                ae(), Ze();
                              },
                              [
                                r.gridStartX + 2,
                                r.gridStartY + 2,
                                r.gridEndX,
                                r.gridEndY,
                              ]
                            ))
                          : (_e++,
                            t.checkChunkAsync(
                              r.seed,
                              l,
                              c,
                              _,
                              function (ge, se, ce) {
                                ve === ie &&
                                  (_e--,
                                    ge
                                      ? me(se, ce, 1, ge)
                                      : t.loadingBackground && me(se, ce, 1, g),
                                    le());
                              }
                            ),
                            l++);
                      else if (We)
                        ae(),
                          Ee.renderNext(n, function (se, ce, Ce) {
                            me(se, ce, 1, Ce);
                          });
                      else {
                        var ne = t.checkChunk(r.seed, l, c, _);
                        if (ne) {
                          if ((me(l, c, 1, ne), D && xe > 0)) {
                            st(l, c);
                            var te = t.getSurroundings(l, c);
                            if (typeof te < "u")
                              for (var we = 0; we < te.length; we++) {
                                var de = te[we];
                                ct(de.x, de.z) ||
                                  (de.p > 0 && me(de.x, de.z, de.p));
                              }
                          }
                        } else t.loadingBackground && me(l, c, 1, g);
                        l++;
                      }
                    }
                    window.postMessage("drawChunks", "*");
                  };
                return (
                  window.addEventListener
                    ? window.addEventListener("message", et, !0)
                    : (X = !0),
                  Ke
                );
              })(),
              ae = function () {
                k ||
                  ((k = !0),
                    n.save(),
                    n.beginPath(),
                    n.rect(
                      r.gridStartX + 2,
                      r.gridStartY + 2,
                      r.gridEndX - r.gridStartX - 2,
                      r.gridEndY - r.gridStartY - 2
                    ),
                    n.clip());
              },
              oe = function () {
                k && ((k = !1), n.restore());
              },
              Ze = function () {
                (Pe = !1),
                  (n.fillStyle = a),
                  n.fillRect(0, 0, m, S),
                  t.loadingBackground &&
                  (ae(), n.clearRect(w, p, C - w, h - p), oe());
              },
              ot = function () {
                (n.fillStyle = "white"), n.fillRect(0, 0, m, S);
              },
              $e = function (l, c, T, V, Z) {
                var j, L;
                for (
                  n.strokeStyle = l, n.lineWidth = c, n.beginPath(), j = T;
                  j <= C + 0.5;

                )
                  n.moveTo(Math.round(j) + 0.5, Math.round(p) + 2),
                    n.lineTo(Math.round(j) + 0.5, Math.round(h) + 1),
                    (j += Z);
                for (n.stroke(), n.beginPath(), L = V; L <= h + 0.5;)
                  n.moveTo(Math.round(w) + 2, Math.round(L) + 0.5),
                    n.lineTo(Math.round(C) + 1, Math.round(L) + 0.5),
                    (L += Z);
                n.stroke();
              },
              Ve = function () {
                if (x) {
                  var l = r.chunkWidth;
                  $e(
                    "#88C",
                    r.distantView ? 1 : 2,
                    u.getInScreenFirstRegionX(!1),
                    u.getInScreenFirstRegionY(!1),
                    l * 32
                  ),
                    r.distantView ||
                    $e(
                      "#888",
                      1,
                      u.getInScreenFirstX(!1),
                      u.getInScreenFirstY(!1),
                      l
                    );
                }
              },
              Oe = function () {
                var l,
                  c,
                  T = w + 0.5,
                  V = p + 0.5;
                (n.strokeStyle = t.axesColor),
                  (n.lineWidth = "2"),
                  n.beginPath(),
                  n.moveTo(T, h + 1),
                  n.lineTo(T, V),
                  n.lineTo(C + 1, V),
                  n.stroke(),
                  (n.font = "10px " + J);
                var Z = u.formatNr(u.getFirstCoordinateX()),
                  j = u.formatNr(u.getLastCoordinateX()),
                  L = Math.max(
                    20,
                    Math.max(n.measureText(Z).width, n.measureText(j).width)
                  ),
                  z = Math.floor((L * 1.5) / r.chunkWidth) + 1;
                (l = u.getInScreenFirstX(!0)),
                  (c = p - 6),
                  (n.textAlign = "center"),
                  (n.textBaseline = "alphabetic"),
                  (n.fillStyle = t.textColor);
                for (
                  var Y = u.getFirstCoordinateX();
                  l <= C && l + L / 2 + 1 < m;

                )
                  n.fillText(u.formatNr(Y), l, c),
                    (l += r.chunkWidth * z),
                    (Y += z * 16);
                if (
                  ((l = w - 6),
                    (c = u.getInScreenFirstY(!0)),
                    (n.textAlign = "end"),
                    (Y = u.getFirstCoordinateZ()),
                    c <= h)
                )
                  for (
                    n.textBaseline =
                    r.chunkWidth * (1 - r.offsetZ) > 5 ? "middle" : "hanging",
                    n.fillText(u.formatNr(Y), l, c),
                    c += z * r.chunkWidth,
                    Y += z * 16,
                    n.textBaseline = "middle";
                    c <= h;

                  )
                    n.fillText(u.formatNr(Y), l, c),
                      (c += z * r.chunkWidth),
                      (Y += z * 16);
                i
                  ? n.drawImage(t.compassImage, 15, 10, 29, 32)
                  : ((n.font = "15px " + J),
                    (n.textBaseline = "middle"),
                    (n.textAlign = "center"),
                    (l = 34),
                    (c = (h + p) / 2 - 9),
                    n.fillText("Z", l, c),
                    (c += 18),
                    n.fillText("↓", l, c),
                    (l = (C + w) / 2),
                    (c = 18),
                    n.fillText("X →", l, c),
                    n.drawImage(t.compassImage, 20, 10, 29, 32)),
                  (n.textAlign = "start"),
                  (n.font = "11px " + J),
                  (c = 9),
                  (l = w);
                var re = ", " + R.forLabel + " " + _.label,
                  ke = r.seedDisplay || r.seed;
                typeof t.header == "string"
                  ? n.fillText(t.header, l, c + 8)
                  : typeof r.seedString > "u"
                    ? n.fillText("Seed: " + ke.toString() + re, l, c + 8)
                    : (n.fillText("Seed: ", l, c + 8),
                      (n.font = "10px " + J),
                      n.fillText(r.seedString + re, l + 35, c),
                      n.fillText(ke.toString(), l + 35, c + 16));
              },
              ze = function (l, c, T, V, Z) {
                (Pe = !0),
                  (n.font = "11px " + J),
                  (n.textAlign = "start"),
                  (n.fillStyle = t.textColor);
                var j = w + 5,
                  L = h + 19;
                i && (L -= 5),
                  n.fillText(
                    "X: " +
                    u.formatNr(l.toFixed(1)) +
                    "   Z: " +
                    u.formatNr(c.toFixed(1)),
                    j,
                    L
                  ),
                  i
                    ? (L += 14)
                    : ((n.textAlign = "end"), (L = h + 19), (j = C - 5)),
                  n.fillText(
                    "区块 (" +
                    u.formatNr(Math.floor(T / 16)) +
                    " / " +
                    u.formatNr(Math.floor(V / 16)) +
                    ") " +
                    R.from +
                    " (" +
                    u.formatNr(T) +
                    " / " +
                    u.formatNr(V) +
                    ") " +
                    R.to +
                    " (" +
                    u.formatNr(T + 15) +
                    " / " +
                    u.formatNr(V + 15) +
                    ")",
                    j,
                    L
                  ),
                  (L += 15),
                  Z && ((n.font = "12px " + J), n.fillText(Z, j, L));
              },
              it = function () {
                (n.font = "11px " + J),
                  (n.fillStyle = t.textColor),
                  (n.textAlign = "end"),
                  n.fillText("chunkbase.com", C - 5, 16);
              },
              Le = function () {
                if (((q.pinRect = void 0), !(typeof r.pin > "u"))) {
                  var l = r.pin,
                    c = w + (l[0] - r.startX) * r.chunkWidth;
                  c < w ||
                    c > C ||
                    ((e = p + (l[1] - r.startZ) * r.chunkWidth),
                      !(e < p || e > h) &&
                      ((q.pinRect = [
                        Math.floor(c) - 3,
                        Math.floor(e) - 3,
                        6,
                        6,
                      ]),
                        (n.fillStyle = "rgb(255,255,255)"),
                        n.beginPath(),
                        n.moveTo(0, 0),
                        n.arc(c, e, 7, 0, Math.PI * 2, !0),
                        n.closePath(),
                        n.fill(),
                        (n.fillStyle = "rgb(255,0,0)"),
                        n.beginPath(),
                        n.moveTo(0, 0),
                        n.arc(c, e, 5, 0, Math.PI * 2, !0),
                        n.closePath(),
                        n.fill()));
                }
              },
              Pe = !1,
              je = null,
              Ie = function () {
                if (!(Pe || typeof r.pin > "u")) {
                  var l = r.pin[0],
                    c = r.pin[1],
                    T = l * 16,
                    V = c * 16,
                    Z = null;
                  t.getHoverText &&
                    (Z = t.getHoverText({
                      x: Math.floor(T),
                      z: Math.floor(V),
                      chunkX: l,
                      chunkZ: c,
                      platform: _,
                    })),
                    ze(T, V, Math.floor(l) * 16, Math.floor(c) * 16, Z);
                }
              },
              Ue = function () {
                je !== null && clearTimeout(je), (je = setTimeout(Ie, 800));
              },
              q = {};
            (q.pinRect = void 0),
              (q.initialDraw = function () {
                q.redraw();
              }),
              (q.clearFooter = function () {
                (Pe = !1),
                  (n.fillStyle = a),
                  n.fillRect(w, h + 1, m - w, S - h - 1),
                  Ue();
              }),
              (q.redrawFooter = function (l, c, T, V, Z) {
                oe(), q.clearFooter(), ze(l, c, T, V, Z);
              });
            var Ge = function () {
              if (typeof _.boundaries > "u") {
                (r.gridStartX = w),
                  (r.gridStartY = p),
                  (r.gridEndX = C + 1),
                  (r.gridEndY = h + 1);
                return;
              }
              var l = u.getInScreenFirstX(!0),
                c = Math.ceil(r.startX),
                T = c + Math.floor((C - u.getScreenFirstX()) / r.chunkWidth),
                V = _.boundaries.minX,
                Z = _.boundaries.maxX;
              V + 1 > T || Z < c - 1
                ? ((r.gridStartX = w), (r.gridEndX = w))
                : (V >= c
                  ? (r.gridStartX = l + r.chunkWidth * (V - c) - 2)
                  : (r.gridStartX = w),
                  Z <= T
                    ? (r.gridEndX = l + r.chunkWidth * (Z - c) + 1)
                    : (r.gridEndX = C + 1));
              var j = u.getInScreenFirstY(!0),
                L = Math.ceil(r.startZ),
                z = L + Math.floor((h - u.getScreenFirstY()) / r.chunkWidth),
                Y = _.boundaries.minZ,
                re = _.boundaries.maxZ;
              Y + 1 > z || re < L - 1
                ? ((r.gridStartY = p), (r.gridEndY = p))
                : (Y >= L
                  ? (r.gridStartY = j + r.chunkWidth * (Y - L) - 2)
                  : (r.gridStartY = p),
                  re <= z
                    ? (r.gridEndY = j + r.chunkWidth * (re - L) + 1)
                    : (r.gridEndY = h + 1));
            };
            return (
              (q.redraw = function () {
                var l = window.devicePixelRatio || 1;
                n.setTransform(l, 0, 0, l, 0, 0),
                  Te(),
                  (E = new Date().getTime()),
                  Ge(),
                  oe(),
                  Ze(),
                  ae(),
                  Ve(),
                  Xe.mapChanged(!1),
                  oe(),
                  Oe(),
                  Le(),
                  Ue();
              }),
              (q.drawImage = function () {
                var l = window.devicePixelRatio || 1;
                n.setTransform(l, 0, 0, l, 0, 0),
                  Ge(),
                  oe(),
                  Ze(),
                  ot(),
                  ae(),
                  Ve(),
                  Xe.mapChanged(!0),
                  oe(),
                  Oe(),
                  it(),
                  Le(),
                  Ie();
              }),
              (q.clearAll = function () {
                (n.fillStyle = a), n.fillRect(0, 0, m, S);
              }),
              q
            );
          })(),
          M = {
            setX: function (e) {
              e !== r.startX &&
                ((e = be.limitInt32(e)),
                  (e = be.nearInteger(e)),
                  (r.startX = e),
                  M.emitCurrentPosition());
            },
            setZ: function (e) {
              e !== r.startZ &&
                ((e = be.limitInt32(e)),
                  (e = be.nearInteger(e)),
                  (r.startZ = e),
                  M.emitCurrentPosition());
            },
            emitCurrentPosition: function () {
              var e = (C - w) / r.chunkWidth / 2,
                a = (h - p) / r.chunkWidth / 2;
              t.triggerHandler("positionchanged", [
                (r.startX + e) * 16,
                (r.startZ + a) * 16,
              ]);
            },
            getChunkFromCoords: function (e, a) {
              return [(e.toNumber() + 0.5) / 16, (a.toNumber() + 0.5) / 16];
            },
            getChunkFromScreen: function (e, a) {
              if (M.isInsideMap(e, a))
                return (
                  (e = (e - w) / r.chunkWidth + r.startX),
                  (e = (Math.floor(e * 16) + 0.5) / 16),
                  (a = (a - p) / r.chunkWidth + r.startZ),
                  (a = (Math.floor(a * 16) + 0.5) / 16),
                  [e, a]
                );
            },
            getCoordsFromScreen: function (e, a) {
              if (M.isInsideMap(e, a))
                return (
                  (e = (e - w) / r.chunkWidth + r.startX),
                  (e = Math.floor(e * 160 + 0.5) / 10),
                  (a = (a - p) / r.chunkWidth + r.startZ),
                  (a = Math.floor(a * 160 + 0.5) / 10),
                  [e, a]
                );
            },
            setCenter: function (e, a) {
              var d = M.getChunkFromCoords(e, a),
                g = (C - w) / r.chunkWidth / 2,
                k = (h - p) / r.chunkWidth / 2;
              M.setX(d[0] - g), M.setZ(d[1] - k);
            },
            _setCenterRaw: function (e, a) {
              const d = [e / 16, a / 16];
              var g = (C - w) / r.chunkWidth / 2,
                k = (h - p) / r.chunkWidth / 2;
              M.setX(d[0] - g), M.setZ(d[1] - k);
            },
            getCenter: function () {
              var e = (C - w) / r.chunkWidth / 2,
                a = (h - p) / r.chunkWidth / 2,
                d = r.startX + e,
                g = r.startZ + a;
              return [d * 16, g * 16];
            },
            scaleCenter: function (e) {
              var a = M.getCenter();
              M._setCenterRaw(H.fromNumber(a[0] * e), H.fromNumber(a[1] * e));
            },
            moveY: function (e) {
              if (!(e < 1 && e > -1)) {
                var a = e / r.chunkWidth;
                M.setZ(r.startZ + a);
              }
            },
            moveX: function (e) {
              if (!(e < 1 && e > -1)) {
                var a = e / r.chunkWidth;
                M.setX(r.startX + a);
              }
            },
            setPin: function (e, a, d) {
              (r.pin = M.getChunkFromCoords(e, a)),
                t.triggerHandler("pinset", [
                  Math.floor(r.pin[0] * 16),
                  Math.floor(r.pin[1] * 16),
                  d,
                ]);
            },
            setPinAtCanvas: function (e, a) {
              var d = M.getChunkFromScreen(e, a);
              if (typeof d < "u") {
                if (typeof A.pinRect < "u") {
                  var g = A.pinRect,
                    k = g[0],
                    E = g[0] + g[2],
                    X = g[1],
                    u = g[1] + g[3];
                  if (e >= k && e <= E && a >= X && a <= u) {
                    M.removePin();
                    return;
                  }
                }
                window._enableAnalytics &&
                  he("CB_ChunkApp_PinSetViaInputDevice"),
                  (r.pin = d),
                  t.triggerHandler("pinset", [
                    Math.floor(r.pin[0] * 16),
                    Math.floor(r.pin[1] * 16),
                  ]);
              }
            },
            removePin: function () {
              (r.pin = void 0), t.triggerHandler("pinset", void 0);
            },
            isInsideMap: function (e, a) {
              return e >= w && e < C && a >= p && a <= h;
            },
          },
          K = {
            zoomFactor: 1,
            toChunkWidth: function (e) {
              return I.Zooming.toChunkWidth(e);
            },
            toZoomFactor: function (e) {
              return I.Zooming.toZoomFactor(e);
            },
            getMinMaxZoom: function () {
              return I.Zooming.getMinMaxZoom(t);
            },
            setZoom: function (e, a, d) {
              var g = K.getMinMaxZoom();
              d = Math.max(Math.min(d, g[1]), g[0]);
              var k = K.toChunkWidth(d);
              r.distantView = k < I.config.distantChunkWidth;
              var E = k / r.chunkWidth;
              (r.chunkWidth = k),
                (K.zoomFactor = d),
                (e -= w),
                (a -= p),
                M.moveX(e * E - e),
                M.moveY(a * E - a);
              var X = (d - g[0]) / (g[1] - g[0]);
              t.triggerHandler("zoomchange", [d, X]);
            },
            shiftZoom: function (e, a, d) {
              var g = Math.pow(2, d * 0.1);
              K.setZoom(e, a, K.zoomFactor + (1 - g));
            },
          },
          O = {
            lastDrag: void 0,
            dragDistance: 0,
            drag: function (e, a) {
              var d = O.lastDrag;
              if (typeof d < "u") {
                var g = d[0] - e,
                  k = d[1] - a;
                return (
                  M.moveX(g),
                  M.moveY(k),
                  (O.lastDrag = [e, a]),
                  (O.dragDistance += Math.abs(g) + Math.abs(k)),
                  !0
                );
              } else return O.stop(), !1;
            },
            start: function (e, a) {
              (O.lastDrag = [e, a]),
                (O.dragDistance = 0),
                o.css("cursor", "move"),
                o.one("mouseup", O.stop),
                o.on("mousemove", B.dragging),
                o.on("mouseleave", O.stop);
            },
            stop: function (e) {
              o.css("cursor", "auto"),
                o.off("mousemove", B.dragging),
                o.off("mouseleave", O.stop),
                (O.lastDrag = void 0),
                O.dragDistance < 4 && B.clicked(e);
            },
          },
          at = { overworld: 1, nether: 8, end: 1 },
          ee = {
            setSeed: function (e, a, d, g) {
              be.setSeed(a, d, g), A.redraw();
            },
            goTo: function (e, a, d, g) {
              M.setCenter(a, d), g || M.setPin(a, d), A.redraw();
            },
            setZoomFactor: function (e, a) {
              var d = w + (C - w) / 2,
                g = p + (h - p) / 2;
              K.setZoom(d, g, a), A.redraw();
            },
            setPlatform: function (e, a) {
              window._enableAnalytics &&
                _ &&
                a &&
                _ !== a &&
                he("CB_ChunkApp_ChangePlatform", {
                  platform:
                    Object.keys(I.Platform).find(function (d) {
                      return I.Platform[d] === a;
                    }) || "N/A",
                }),
                (_ = a),
                A.redraw();
            },
            setSecondary: function (e, a) {
              (D = !a), A.redraw();
            },
            setGridLines: function (e, a) {
              (x = a), A.redraw();
            },
            dimensionChanged: function (e, a) {
              var d = at[a] || 1,
                g = W;
              if (((W = d), !g)) {
                t.triggerHandler("applydimensionchanged", [a]);
                return;
              }
              var k = g / d;
              if (k === 1) {
                t.triggerHandler("applydimensionchanged", [a]);
                return;
              }
              if (r.pin && (r.pin[0] !== 0 || r.pin[1] !== 0)) {
                var E = [r.pin[0] * k, r.pin[1] * k];
                (r.pin = E),
                  t.triggerHandler("pinset", [
                    Math.floor(r.pin[0] * 16),
                    Math.floor(r.pin[1] * 16),
                  ]);
              }
              M.scaleCenter(k), t.triggerHandler("applydimensionchanged", [a]);
            },
            redrawMap: function () {
              A.redraw();
            },
            toggleTheaterMode: function () {
              if (!t.disableTheater) {
                var e = $(document.documentElement),
                  a = r.isTheaterMode,
                  d = !a;
                window._enableAnalytics &&
                  he("CB_ChunkApp_ToggleTheaterMode", { enabled: d ? 1 : 0 }),
                  d ? e.addClass("theater-map") : e.removeClass("theater-map"),
                  (r.isTheaterMode = d),
                  d &&
                  $([document.documentElement, document.body]).animate(
                    { scrollTop: $("#map-canvas").offset().top },
                    200
                  ),
                  Me(!1),
                  t.triggerHandler("theaterModeChanged", [d]);
              }
            },
          },
          fe = {
            isInsideMap: !1,
            handleKey: function (e) {
              var a = e.keyCode || e.which,
                d = !1;
              if (
                (a === 27
                  ? r.isTheaterMode && ee.toggleTheaterMode()
                  : fe.isInsideMap &&
                  (a === 40
                    ? (fe.down(), (d = !0))
                    : a === 38
                      ? (fe.up(), (d = !0))
                      : a === 37
                        ? (fe.left(), (d = !0))
                        : a === 39
                          ? (fe.right(), (d = !0))
                          : a === 82 && t.triggerHandler("randomizeSeed", [])),
                  d)
              )
                return A.redraw(), !1;
            },
            up: function () {
              M.moveY(-20);
            },
            down: function () {
              M.moveY(20);
            },
            left: function () {
              M.moveX(-20);
            },
            right: function () {
              M.moveX(20);
            },
          };
        $(document).on("keydown", fe.handleKey);
        var B = {
          mouseScrolled: function (e, a, d, g) {
            if (g !== 0) {
              var k = s.get(0).getBoundingClientRect(),
                E = e.clientX - k.left,
                X = e.clientY - k.top;
              if (M.isInsideMap(E, X)) {
                e.preventDefault();
                var u = r.chunkWidth;
                K.shiftZoom(E, X, -g), r.chunkWidth !== u && A.redraw();
              }
            }
          },
          mouseMoved: function (e) {
            var a = s.get(0).getBoundingClientRect(),
              d = e.clientX - a.left,
              g = e.clientY - a.top,
              k = M.getCoordsFromScreen(d, g);
            if (typeof k > "u") {
              A.clearFooter();
              return;
            }
            var E = k[0] / 16,
              X = k[1] / 16,
              u = null;
            t.getHoverText &&
              (u = t.getHoverText({
                x: Math.floor(k[0]),
                z: Math.floor(k[1]),
                chunkX: E,
                chunkZ: X,
              })),
              A.redrawFooter(
                k[0],
                k[1],
                Math.floor(E) * 16,
                Math.floor(X) * 16,
                u
              ),
              t.isClickable &&
              (t.isClickable(d, g)
                ? (s.get(0).style.cursor = "pointer")
                : (s.get(0).style.cursor = "default"));
          },
          mouseLeft: function (e) {
            (fe.isInsideMap = !1), A.clearFooter();
          },
          mouseEntered: function (e) {
            fe.isInsideMap = !0;
          },
          dragging: function (e) {
            var a = e.clientX,
              d = e.clientY;
            O.drag(a, d) && A.redraw();
          },
          _lastCanvasHandlerHit: 0,
          clicked: function (e) {
            if (t.onChunkClick) {
              var a = s.get(0).getBoundingClientRect(),
                d = e.clientX - a.left,
                g = e.clientY - a.top,
                k = M.getCoordsFromScreen(d, g);
              if (typeof k > "u") return;
              var E = Math.floor(k[0] / 16),
                X = Math.floor(k[1] / 16);
              t.onChunkClick(E, X) && A.redraw();
            }
            if (t.onCanvasClick) {
              var a = s.get(0).getBoundingClientRect(),
                d = e.clientX - a.left,
                g = e.clientY - a.top,
                u = t.onCanvasClick(d, g);
              u.hit && (B._lastCanvasHandlerHit = Date.now());
            }
          },
          _lastDblClick: 0,
          dblClicked: function (e) {
            var a = 250,
              d = 250,
              g = Date.now();
            if (!(g < B._lastCanvasHandlerHit + d)) {
              if (t.testCanvasHit && e.clientX != null && e.clientY != null) {
                var k = s.get(0).getBoundingClientRect(),
                  E = e.clientX - k.left,
                  X = e.clientY - k.top;
                if (t.testCanvasHit(E, X)) return;
              }
              g >= B._lastDblClick + a &&
                (B._doDblClick(), (B._lastDblClick = g));
            }
          },
          _doDblClick: function () {
            ee.toggleTheaterMode();
          },
          mouseDown: function (e) {
            var a = s.get(0).getBoundingClientRect(),
              d = e.clientX - a.left,
              g = e.clientY - a.top;
            M.isInsideMap(d, g) &&
              (e.preventDefault(), O.start(e.clientX, e.clientY));
          },
          _lastRightClick: 0,
          rightClicked: function (e) {
            if (!(e.originalEvent && e.originalEvent.pointerType === "touch")) {
              var a = 500,
                d = Date.now();
              if (!(d < B._lastRightClick + a)) {
                var g = B.setPinAtScreen(e.clientX, e.clientY, this);
                g && ((B._lastRightClick = d), e.preventDefault());
              }
            }
          },
          globalMouseUp: function (e) {
            O.stop();
          },
          touch: {
            lastScale: 1,
            lastDragX: 0,
            lastDragY: 0,
            lastDragXLeftOver: 0,
            lastDragYLeftOver: 0,
            enabled: !0,
            drag: function (e) {
              if (!(e.gesture.startEvent.touches.length > 1)) {
                var a = s.get(0).getBoundingClientRect();
                if (
                  M.isInsideMap(
                    e.gesture.startEvent.center.clientX - a.left,
                    e.gesture.startEvent.center.clientY - a.top
                  )
                ) {
                  e.gesture.preventDefault();
                  var d = B.touch.lastDragX,
                    g = B.touch.lastDragY,
                    k = e.gesture.deltaX,
                    E = e.gesture.deltaY;
                  (B.touch.lastDragX = k),
                    (B.touch.lastDragY = E),
                    (k = k - d + B.touch.lastDragXLeftOver),
                    (E = E - g + B.touch.lastDragYLeftOver);
                  var X = Math.floor(k + 0.5),
                    u = Math.floor(E + 0.5);
                  (B.touch.lastDragXLeftOver = k - X),
                    (B.touch.lastDragYLeftOver = E - u),
                    k !== 0 &&
                    E !== 0 &&
                    (M.moveX(-X), M.moveY(-u), A.redraw());
                }
              }
            },
            dragEnd: function (e) {
              (B.touch.lastDragX = 0),
                (B.touch.lastDragY = 0),
                (B.touch.lastDragXLeftOver = 0),
                (B.touch.lastDragYLeftOver = 0);
            },
            transformEnd: function (e) {
              B.touch.lastScale = 1;
            },
            hold: function (e) {
              B.setPinAtScreen(
                e.gesture.center.clientX,
                e.gesture.center.clientY,
                this
              ) && e.gesture.preventDefault();
            },
            pinch: function (e) {
              var a = s.get(0).getBoundingClientRect(),
                d = e.gesture.center.clientX - a.left,
                g = e.gesture.center.clientY - a.top;
              if (M.isInsideMap(d, g)) {
                var k = r.chunkWidth,
                  E = e.gesture.scale;
                K.setZoom(d, g, K.zoomFactor + (E - B.touch.lastScale) / 1.5),
                  (B.touch.lastScale = E),
                  r.chunkWidth !== k && A.redraw();
              }
            },
          },
          setPinAtScreen: function (e, a, d) {
            var g = s.get(0).getBoundingClientRect();
            return (
              (e -= g.left),
              (a -= g.top),
              M.isInsideMap(e, a)
                ? (M.setPinAtCanvas(e, a), A.redraw(), !0)
                : !1
            );
          },
        };
        if (
          (s.on("mousewheel", B.mouseScrolled),
            s.mousemove(B.mouseMoved),
            s.dblclick(B.dblClicked),
            s.mousedown(B.mouseDown),
            s.contextmenu(B.rightClicked),
            s.on("mouseleave", B.mouseLeft),
            s.on("mouseenter", B.mouseEntered),
            t.on("seedapply", ee.setSeed),
            t.on("goto", ee.goTo),
            t.on("zoomsetfactor", ee.setZoomFactor),
            t.on("getmapasimage", function () {
              A.drawImage();
              var e = s.get(0).toDataURL("image/png");
              A.clearAll(), A.redraw();
              var a = r.seedString || r.seed || "empty";
              return (
                (a = (t.shortName || "chunkbase") + "_" + a),
                { url: e, filename: a }
              );
            }),
            t.on("getsharetitle", function () {
              return (
                "Seed " +
                (r.seedString || r.seed || "empty") +
                " on chunkbase.com"
              );
            }),
            t.on("platformchange", ee.setPlatform),
            t.on("secondarychange", ee.setSecondary),
            t.on("gridlineschange", ee.setGridLines),
            t.on("redrawmap", ee.redrawMap),
            t.on("dimensionchanged", ee.dimensionChanged),
            t.on("setpin", function (e, a, d) {
              a == null || d == null
                ? M.removePin()
                : M.setPin(H.fromNumber(a), H.fromNumber(d), !0);
            }),
            t.trigger("pinset", void 0),
            typeof Hammer < "u")
        ) {
          Hammer(s.get(0))
            .on("hold", B.touch.hold)
            .on("pinch", B.touch.pinch)
            .on("transformend", B.touch.transformEnd)
            .on("drag", B.touch.drag)
            .on("dragend", B.touch.dragEnd)
            .on("doubletap", function (e) {
              return B.dblClicked(e.gesture.center);
            }),
            s.on("doubleclick", B.dblClicked);
          var Ne = !1;
          s.on("touchstart", function (e) {
            var a = s.get(0).getBoundingClientRect();
            Ne = M.isInsideMap(
              e.originalEvent.touches[0].clientX - a.left,
              e.originalEvent.touches[0].clientY - a.top
            );
          }),
            s.on("touchmove", function (e) {
              Ne && e.preventDefault();
            });
        }
        K.setZoom(
          0,
          0,
          t.initialChunkWidth != null
            ? K.toZoomFactor(t.initialChunkWidth)
            : K.zoomFactor
        ),
          M.setCenter(H.ZERO, H.ZERO);
        var De, Se, Fe, pe;
        function Me(e) {
          window.matchMedia("all and (max-width: 500px)").matches;
          var a = s.get(0),
            d = window.devicePixelRatio || 1,
            g = r.isTheaterMode,
            k = s.parents(".boxcontent");
          (i =
            (!window.EMBEDDED_MAP && k.outerWidth(!0) < 600) ||
            window.innerHeight < 400),
            i
              ? ((De = 55), (Se = 52), (Fe = 0), (pe = 55))
              : ((De = 85), (Se = 52), (Fe = 0), (pe = 45));
          var E = a.clientWidth,
            X = 0;
          if ((E || (E = k.width()), window.EMBEDDED_MAP))
            X = window.innerHeight;
          else if (g)
            X = Math.floor(Math.max(75 + pe + Se, window.innerHeight));
          else {
            var u = E - De - Fe,
              Xe = Math.floor(u * 0.7);
            (X = Xe + Se + pe), (X = Math.min(540, X));
          }
          (E === m && X === S && d === f) ||
            ((n.canvas.width = E * d),
              (n.canvas.height = X * d),
              (n.imageSmoothingEnabled = !1),
              (n.mozImageSmoothingEnabled = !1),
              (n.webkitImageSmoothingEnabled = !1),
              (n.msImageSmoothingEnabled = !1),
              (m = E),
              (S = X),
              (C = m - Fe),
              (h = S - pe),
              (w = De),
              (p = Se),
              (f = d),
              e && M.setCenter(H.ZERO, H.ZERO),
              t.triggerHandler("mapdimensionschanged", [[E, X]]),
              A.redraw());
        }
        window.addEventListener("cbResize", function () {
          Me(!1);
        });
        var Be,
          Ae = function () {
            var e = !Be;
            Be && Be.removeListener(Ae);
            const a = window.devicePixelRatio;
            (Be = window.matchMedia(
              "screen and (min-resolution: " +
              (a - 0.001) +
              "dppx) and (max-resolution: " +
              (a + 0.001) +
              "dppx)"
            )),
              Be.addListener(Ae),
              e || Me();
          };
        Ae(),
          t.on("toggleTheaterMode", ee.toggleTheaterMode),
          Me(!0),
          t.triggerHandler("canvasinit", [s.get(0)]),
          t.on("uiloaded", function () {
            Me();
          });
      });
    function nt(t) {
      var s = {},
        o = null,
        _ = null,
        D = null;
      function x(S) {
        return { seed: H.fromInt(S.toInt()), seedDisplay: S.toInt() };
      }
      function m(S, C) {
        var h = S ?? H.ONE;
        o = S;
        var w = null;
        if (s.use32BitSeed) {
          var p = x(h);
          (h = p.seed), (w = p.seedDisplay);
        }
        (C === D && (_ == null || h.equals(_))) ||
          ((_ = h), (D = C), t.trigger("seedchange", [h, C, w]));
      }
      t.on("seedchangeui", function (S, C, h) {
        m(C, h);
      }),
        t.on("platformchange", function (S, C) {
          var h = s;
          (s = C), h.use32BitSeed !== C.use32BitSeed && m(o, D);
        });
    }
    (String.prototype.hashCode = function () {
      var t = 0;
      if (this.length == 0) return t;
      for (var s = 0; s < this.length; s++) {
        var o = this.charCodeAt(s);
        (t = (t << 5) - t + o), (t = t & t);
      }
      return t;
    }),
      (function () {
        var t = null,
          s = null;
        function o(D) {
          var x = window.innerWidth,
            m = window.innerHeight;
          (t === x && s === m) ||
            ((t = x),
              (s = m),
              D !== !0 &&
              setTimeout(function () {
                var S = new Event("cbResize");
                window.dispatchEvent(S);
              }, 0));
        }
        o(!0);
        let _ = !1;
        window.visualViewport.addEventListener("resize", () => {
          _ ||
            ((_ = !0),
              requestAnimationFrame(() => {
                (_ = !1), o(!1);
              }));
        });
      })(),
      (globalThis.ChunkApp = I),
      (globalThis.appHelpers = N),
      (globalThis.chunkAppLoader = rt);
  }
  mt.call(typeof window < "u" ? window : globalThis);
});
export default bt();
//# sourceMappingURL=__13OC-0RA8Z.js.map

//# chunkId=01988f4c-0151-7841-a5ee-317915704f4f
