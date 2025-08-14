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
      (e._posthogChunkIds[n] = "01988f4c-0142-7380-9fad-a79aea6c060f"));
  } catch (e) {}
})();
function a(n, t) {
  window.gtag?.("event", n, t);
}
function i() {
  return window.gtag;
}
export { i, a as t };
//# sourceMappingURL=DZJpEsl-8Xn-.js.map

//# chunkId=01988f4c-0142-7380-9fad-a79aea6c060f
