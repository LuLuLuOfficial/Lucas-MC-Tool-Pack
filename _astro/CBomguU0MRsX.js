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
      (e._posthogChunkIds[n] = "01982e22-92ad-7cc2-8ab3-9fc60a9dd612"));
  } catch (e) {}
})();
/**
 * @license
 * Copyright 2009 The Closure Library Authors
 * Copyright 2020 Daniel Wirtz / The long.js Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
var L = null;
try {
  L = new WebAssembly.Instance(
    new WebAssembly.Module(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127,
        127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11,
        7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5,
        100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114,
        101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0,
        10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
        66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4,
        66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32,
        1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127,
        34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0,
        173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134,
        132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126,
        32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66,
        32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36,
        1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
        173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167,
        11,
      ])
    ),
    {}
  ).exports;
} catch {}
function f(i, t, h) {
  (this.low = i | 0), (this.high = t | 0), (this.unsigned = !!h);
}
f.prototype.__isLong__;
Object.defineProperty(f.prototype, "__isLong__", {
  value: !0,
});
function c(i) {
  return (i && i.__isLong__) === !0;
}
function M(i) {
  var t = Math.clz32(i & -i);
  return i ? 31 - t : t;
}
f.isLong = c;
var W = {},
  R = {};
function T(i, t) {
  var h, e, g;
  return t
    ? ((i >>>= 0),
      (g = 0 <= i && i < 256) && ((e = R[i]), e)
        ? e
        : ((h = r(i, 0, !0)), g && (R[i] = h), h))
    : ((i |= 0),
      (g = -128 <= i && i < 128) && ((e = W[i]), e)
        ? e
        : ((h = r(i, i < 0 ? -1 : 0, !1)), g && (W[i] = h), h));
}
f.fromInt = T;
function v(i, t) {
  if (isNaN(i)) return t ? d : O;
  if (t) {
    if (i < 0) return d;
    if (i >= B) return D;
  } else {
    if (i <= -P) return E;
    if (i + 1 >= P) return z;
  }
  return i < 0 ? v(-i, t).neg() : r(i % y | 0, (i / y) | 0, t);
}
f.fromNumber = v;
function r(i, t, h) {
  return new f(i, t, h);
}
f.fromBits = r;
var x = Math.pow;
function A(i, t, h) {
  if (i.length === 0) throw Error("empty string");
  if (
    (typeof t == "number" ? ((h = t), (t = !1)) : (t = !!t),
    i === "NaN" || i === "Infinity" || i === "+Infinity" || i === "-Infinity")
  )
    return t ? d : O;
  if (((h = h || 10), h < 2 || 36 < h)) throw RangeError("radix");
  var e;
  if ((e = i.indexOf("-")) > 0) throw Error("interior hyphen");
  if (e === 0) return A(i.substring(1), t, h).neg();
  for (var g = v(x(h, 8)), s = O, u = 0; u < i.length; u += 8) {
    var w = Math.min(8, i.length - u),
      _ = parseInt(i.substring(u, u + w), h);
    if (w < 8) {
      var l = v(x(h, w));
      s = s.mul(l).add(v(_));
    } else (s = s.mul(g)), (s = s.add(v(_)));
  }
  return (s.unsigned = t), s;
}
f.fromString = A;
function q(i, t) {
  return typeof i == "number"
    ? v(i, t)
    : typeof i == "string"
    ? A(i, t)
    : r(i.low, i.high, typeof t == "boolean" ? t : i.unsigned);
}
f.fromValue = q;
var S = 65536,
  H = 1 << 24,
  y = S * S,
  B = y * y,
  P = B / 2,
  V = T(H),
  O = T(0);
f.ZERO = O;
var d = T(0, !0);
f.UZERO = d;
var b = T(1);
f.ONE = b;
var m = T(1, !0);
f.UONE = m;
var Z = T(-1);
f.NEG_ONE = Z;
var z = r(-1, 2147483647, !1);
f.MAX_VALUE = z;
var D = r(-1, -1, !0);
f.MAX_UNSIGNED_VALUE = D;
var E = r(0, -2147483648, !1);
f.MIN_VALUE = E;
var n = f.prototype;
n.toInt = function () {
  return this.unsigned ? this.low >>> 0 : this.low;
};
n.toNumber = function () {
  return this.unsigned
    ? (this.high >>> 0) * y + (this.low >>> 0)
    : this.high * y + (this.low >>> 0);
};
n.toString = function (t) {
  if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
  if (this.isZero()) return "0";
  if (this.isNegative())
    if (this.eq(E)) {
      var h = v(t),
        e = this.div(h),
        g = e.mul(h).sub(this);
      return e.toString(t) + g.toInt().toString(t);
    } else return "-" + this.neg().toString(t);
  for (var s = v(x(t, 6), this.unsigned), u = this, w = ""; ; ) {
    var _ = u.div(s),
      l = u.sub(_.mul(s)).toInt() >>> 0,
      o = l.toString(t);
    if (((u = _), u.isZero())) return o + w;
    for (; o.length < 6; ) o = "0" + o;
    w = "" + o + w;
  }
};
n.getHighBits = function () {
  return this.high;
};
n.getHighBitsUnsigned = function () {
  return this.high >>> 0;
};
n.getLowBits = function () {
  return this.low;
};
n.getLowBitsUnsigned = function () {
  return this.low >>> 0;
};
n.getNumBitsAbs = function () {
  if (this.isNegative()) return this.eq(E) ? 64 : this.neg().getNumBitsAbs();
  for (
    var t = this.high != 0 ? this.high : this.low, h = 31;
    h > 0 && (t & (1 << h)) == 0;
    h--
  );
  return this.high != 0 ? h + 33 : h + 1;
};
n.isSafeInteger = function () {
  var t = this.high >> 21;
  return t
    ? this.unsigned
      ? !1
      : t === -1 && !(this.low === 0 && this.high === -2097152)
    : !0;
};
n.isZero = function () {
  return this.high === 0 && this.low === 0;
};
n.eqz = n.isZero;
n.isNegative = function () {
  return !this.unsigned && this.high < 0;
};
n.isPositive = function () {
  return this.unsigned || this.high >= 0;
};
n.isOdd = function () {
  return (this.low & 1) === 1;
};
n.isEven = function () {
  return (this.low & 1) === 0;
};
n.equals = function (t) {
  return (
    c(t) || (t = q(t)),
    this.unsigned !== t.unsigned &&
    this.high >>> 31 === 1 &&
    t.high >>> 31 === 1
      ? !1
      : this.high === t.high && this.low === t.low
  );
};
n.eq = n.equals;
n.notEquals = function (t) {
  return !this.eq(t);
};
n.neq = n.notEquals;
n.ne = n.notEquals;
n.lessThan = function (t) {
  return this.comp(t) < 0;
};
n.lt = n.lessThan;
n.lessThanOrEqual = function (t) {
  return this.comp(t) <= 0;
};
n.lte = n.lessThanOrEqual;
n.le = n.lessThanOrEqual;
n.greaterThan = function (t) {
  return this.comp(t) > 0;
};
n.gt = n.greaterThan;
n.greaterThanOrEqual = function (t) {
  return this.comp(t) >= 0;
};
n.gte = n.greaterThanOrEqual;
n.ge = n.greaterThanOrEqual;
n.compare = function (t) {
  if ((c(t) || (t = q(t)), this.eq(t))) return 0;
  var h = this.isNegative(),
    e = t.isNegative();
  return h && !e
    ? -1
    : !h && e
    ? 1
    : this.unsigned
    ? t.high >>> 0 > this.high >>> 0 ||
      (t.high === this.high && t.low >>> 0 > this.low >>> 0)
      ? -1
      : 1
    : this.sub(t).isNegative()
    ? -1
    : 1;
};
n.comp = n.compare;
n.negate = function () {
  return !this.unsigned && this.eq(E) ? E : this.not().add(b);
};
n.neg = n.negate;
n.add = function (t) {
  c(t) || (t = q(t));
  var h = this.high >>> 16,
    e = this.high & 65535,
    g = this.low >>> 16,
    s = this.low & 65535,
    u = t.high >>> 16,
    w = t.high & 65535,
    _ = t.low >>> 16,
    l = t.low & 65535,
    o = 0,
    I = 0,
    a = 0,
    N = 0;
  return (
    (N += s + l),
    (a += N >>> 16),
    (N &= 65535),
    (a += g + _),
    (I += a >>> 16),
    (a &= 65535),
    (I += e + w),
    (o += I >>> 16),
    (I &= 65535),
    (o += h + u),
    (o &= 65535),
    r((a << 16) | N, (o << 16) | I, this.unsigned)
  );
};
n.subtract = function (t) {
  return c(t) || (t = q(t)), this.add(t.neg());
};
n.sub = n.subtract;
n.multiply = function (t) {
  if (this.isZero()) return this;
  if ((c(t) || (t = q(t)), L)) {
    var h = L.mul(this.low, this.high, t.low, t.high);
    return r(h, L.get_high(), this.unsigned);
  }
  if (t.isZero()) return this.unsigned ? d : O;
  if (this.eq(E)) return t.isOdd() ? E : O;
  if (t.eq(E)) return this.isOdd() ? E : O;
  if (this.isNegative())
    return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
  if (t.isNegative()) return this.mul(t.neg()).neg();
  if (this.lt(V) && t.lt(V))
    return v(this.toNumber() * t.toNumber(), this.unsigned);
  var e = this.high >>> 16,
    g = this.high & 65535,
    s = this.low >>> 16,
    u = this.low & 65535,
    w = t.high >>> 16,
    _ = t.high & 65535,
    l = t.low >>> 16,
    o = t.low & 65535,
    I = 0,
    a = 0,
    N = 0,
    U = 0;
  return (
    (U += u * o),
    (N += U >>> 16),
    (U &= 65535),
    (N += s * o),
    (a += N >>> 16),
    (N &= 65535),
    (N += u * l),
    (a += N >>> 16),
    (N &= 65535),
    (a += g * o),
    (I += a >>> 16),
    (a &= 65535),
    (a += s * l),
    (I += a >>> 16),
    (a &= 65535),
    (a += u * _),
    (I += a >>> 16),
    (a &= 65535),
    (I += e * o + g * l + s * _ + u * w),
    (I &= 65535),
    r((N << 16) | U, (I << 16) | a, this.unsigned)
  );
};
n.mul = n.multiply;
n.divide = function (t) {
  if ((c(t) || (t = q(t)), t.isZero())) throw Error("division by zero");
  if (L) {
    if (
      !this.unsigned &&
      this.high === -2147483648 &&
      t.low === -1 &&
      t.high === -1
    )
      return this;
    var h = (this.unsigned ? L.div_u : L.div_s)(
      this.low,
      this.high,
      t.low,
      t.high
    );
    return r(h, L.get_high(), this.unsigned);
  }
  if (this.isZero()) return this.unsigned ? d : O;
  var e, g, s;
  if (this.unsigned) {
    if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return d;
    if (t.gt(this.shru(1))) return m;
    s = d;
  } else {
    if (this.eq(E)) {
      if (t.eq(b) || t.eq(Z)) return E;
      if (t.eq(E)) return b;
      var u = this.shr(1);
      return (
        (e = u.div(t).shl(1)),
        e.eq(O)
          ? t.isNegative()
            ? b
            : Z
          : ((g = this.sub(t.mul(e))), (s = e.add(g.div(t))), s)
      );
    } else if (t.eq(E)) return this.unsigned ? d : O;
    if (this.isNegative())
      return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
    if (t.isNegative()) return this.div(t.neg()).neg();
    s = O;
  }
  for (g = this; g.gte(t); ) {
    e = Math.max(1, Math.floor(g.toNumber() / t.toNumber()));
    for (
      var w = Math.ceil(Math.log(e) / Math.LN2),
        _ = w <= 48 ? 1 : x(2, w - 48),
        l = v(e),
        o = l.mul(t);
      o.isNegative() || o.gt(g);

    )
      (e -= _), (l = v(e, this.unsigned)), (o = l.mul(t));
    l.isZero() && (l = b), (s = s.add(l)), (g = g.sub(o));
  }
  return s;
};
n.div = n.divide;
n.modulo = function (t) {
  if ((c(t) || (t = q(t)), L)) {
    var h = (this.unsigned ? L.rem_u : L.rem_s)(
      this.low,
      this.high,
      t.low,
      t.high
    );
    return r(h, L.get_high(), this.unsigned);
  }
  return this.sub(this.div(t).mul(t));
};
n.mod = n.modulo;
n.rem = n.modulo;
n.not = function () {
  return r(~this.low, ~this.high, this.unsigned);
};
n.countLeadingZeros = function () {
  return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
};
n.clz = n.countLeadingZeros;
n.countTrailingZeros = function () {
  return this.low ? M(this.low) : M(this.high) + 32;
};
n.ctz = n.countTrailingZeros;
n.and = function (t) {
  return (
    c(t) || (t = q(t)), r(this.low & t.low, this.high & t.high, this.unsigned)
  );
};
n.or = function (t) {
  return (
    c(t) || (t = q(t)), r(this.low | t.low, this.high | t.high, this.unsigned)
  );
};
n.xor = function (t) {
  return (
    c(t) || (t = q(t)), r(this.low ^ t.low, this.high ^ t.high, this.unsigned)
  );
};
n.shiftLeft = function (t) {
  return (
    c(t) && (t = t.toInt()),
    (t &= 63) === 0
      ? this
      : t < 32
      ? r(
          this.low << t,
          (this.high << t) | (this.low >>> (32 - t)),
          this.unsigned
        )
      : r(0, this.low << (t - 32), this.unsigned)
  );
};
n.shl = n.shiftLeft;
n.shiftRight = function (t) {
  return (
    c(t) && (t = t.toInt()),
    (t &= 63) === 0
      ? this
      : t < 32
      ? r(
          (this.low >>> t) | (this.high << (32 - t)),
          this.high >> t,
          this.unsigned
        )
      : r(this.high >> (t - 32), this.high >= 0 ? 0 : -1, this.unsigned)
  );
};
n.shr = n.shiftRight;
n.shiftRightUnsigned = function (t) {
  return (
    c(t) && (t = t.toInt()),
    (t &= 63) === 0
      ? this
      : t < 32
      ? r(
          (this.low >>> t) | (this.high << (32 - t)),
          this.high >>> t,
          this.unsigned
        )
      : t === 32
      ? r(this.high, 0, this.unsigned)
      : r(this.high >>> (t - 32), 0, this.unsigned)
  );
};
n.shru = n.shiftRightUnsigned;
n.shr_u = n.shiftRightUnsigned;
n.rotateLeft = function (t) {
  var h;
  return (
    c(t) && (t = t.toInt()),
    (t &= 63) === 0
      ? this
      : t === 32
      ? r(this.high, this.low, this.unsigned)
      : t < 32
      ? ((h = 32 - t),
        r(
          (this.low << t) | (this.high >>> h),
          (this.high << t) | (this.low >>> h),
          this.unsigned
        ))
      : ((t -= 32),
        (h = 32 - t),
        r(
          (this.high << t) | (this.low >>> h),
          (this.low << t) | (this.high >>> h),
          this.unsigned
        ))
  );
};
n.rotl = n.rotateLeft;
n.rotateRight = function (t) {
  var h;
  return (
    c(t) && (t = t.toInt()),
    (t &= 63) === 0
      ? this
      : t === 32
      ? r(this.high, this.low, this.unsigned)
      : t < 32
      ? ((h = 32 - t),
        r(
          (this.high << h) | (this.low >>> t),
          (this.low << h) | (this.high >>> t),
          this.unsigned
        ))
      : ((t -= 32),
        (h = 32 - t),
        r(
          (this.low << h) | (this.high >>> t),
          (this.high << h) | (this.low >>> t),
          this.unsigned
        ))
  );
};
n.rotr = n.rotateRight;
n.toSigned = function () {
  return this.unsigned ? r(this.low, this.high, !1) : this;
};
n.toUnsigned = function () {
  return this.unsigned ? this : r(this.low, this.high, !0);
};
n.toBytes = function (t) {
  return t ? this.toBytesLE() : this.toBytesBE();
};
n.toBytesLE = function () {
  var t = this.high,
    h = this.low;
  return [
    h & 255,
    (h >>> 8) & 255,
    (h >>> 16) & 255,
    h >>> 24,
    t & 255,
    (t >>> 8) & 255,
    (t >>> 16) & 255,
    t >>> 24,
  ];
};
n.toBytesBE = function () {
  var t = this.high,
    h = this.low;
  return [
    t >>> 24,
    (t >>> 16) & 255,
    (t >>> 8) & 255,
    t & 255,
    h >>> 24,
    (h >>> 16) & 255,
    (h >>> 8) & 255,
    h & 255,
  ];
};
f.fromBytes = function (t, h, e) {
  return e ? f.fromBytesLE(t, h) : f.fromBytesBE(t, h);
};
f.fromBytesLE = function (t, h) {
  return new f(
    t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
    t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
    h
  );
};
f.fromBytesBE = function (t, h) {
  return new f(
    (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
    (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
    h
  );
};
typeof BigInt == "function" &&
  ((f.fromBigInt = function (t, h) {
    var e = Number(BigInt.asIntN(32, t)),
      g = Number(BigInt.asIntN(32, t >> BigInt(32)));
    return r(e, g, h);
  }),
  (f.fromValue = function (t, h) {
    return typeof t == "bigint" ? f.fromBigInt(t, h) : q(t, h);
  }),
  (n.toBigInt = function () {
    var t = BigInt(this.low >>> 0),
      h = BigInt(this.unsigned ? this.high >>> 0 : this.high);
    return (h << BigInt(32)) | t;
  }));
export { f as L };
//# sourceMappingURL=CBomguU0MRsX.js.map

//# chunkId=01982e22-92ad-7cc2-8ab3-9fc60a9dd612
