"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from3, except, desc) => {
  if (from3 && typeof from3 === "object" || typeof from3 === "function") {
    for (let key of __getOwnPropNames(from3))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from3[key], enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => RolayPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian9 = require("obsidian");

// node_modules/lib0/map.js
var create = () => /* @__PURE__ */ new Map();
var copy = (m) => {
  const r = create();
  m.forEach((v, k) => {
    r.set(k, v);
  });
  return r;
};
var setIfUndefined = (map2, key, createT) => {
  let set = map2.get(key);
  if (set === void 0) {
    map2.set(key, set = createT());
  }
  return set;
};
var map = (m, f) => {
  const res = [];
  for (const [key, value] of m) {
    res.push(f(value, key));
  }
  return res;
};
var any = (m, f) => {
  for (const [key, value] of m) {
    if (f(value, key)) {
      return true;
    }
  }
  return false;
};

// node_modules/lib0/set.js
var create2 = () => /* @__PURE__ */ new Set();

// node_modules/lib0/array.js
var last = (arr) => arr[arr.length - 1];
var appendTo = (dest, src) => {
  for (let i = 0; i < src.length; i++) {
    dest.push(src[i]);
  }
};
var from = Array.from;
var every = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    if (!f(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
var some = (arr, f) => {
  for (let i = 0; i < arr.length; i++) {
    if (f(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
var unfold = (len, f) => {
  const array = new Array(len);
  for (let i = 0; i < len; i++) {
    array[i] = f(i, array);
  }
  return array;
};
var isArray = Array.isArray;

// node_modules/lib0/observable.js
var ObservableV2 = class {
  constructor() {
    this._observers = create();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(name, f) {
    setIfUndefined(
      this._observers,
      /** @type {string} */
      name,
      create2
    ).add(f);
    return f;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(name, f) {
    const _f = (...args2) => {
      this.off(
        name,
        /** @type {any} */
        _f
      );
      f(...args2);
    };
    this.on(
      name,
      /** @type {any} */
      _f
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(name, args2) {
    return from((this._observers.get(name) || create()).values()).forEach((f) => f(...args2));
  }
  destroy() {
    this._observers = create();
  }
};

// node_modules/lib0/math.js
var floor = Math.floor;
var abs = Math.abs;
var min = (a, b) => a < b ? a : b;
var max = (a, b) => a > b ? a : b;
var isNaN = Number.isNaN;
var isNegativeZero = (n) => n !== 0 ? n < 0 : 1 / n < 0;

// node_modules/lib0/binary.js
var BIT1 = 1;
var BIT2 = 2;
var BIT3 = 4;
var BIT4 = 8;
var BIT6 = 32;
var BIT7 = 64;
var BIT8 = 128;
var BIT18 = 1 << 17;
var BIT19 = 1 << 18;
var BIT20 = 1 << 19;
var BIT21 = 1 << 20;
var BIT22 = 1 << 21;
var BIT23 = 1 << 22;
var BIT24 = 1 << 23;
var BIT25 = 1 << 24;
var BIT26 = 1 << 25;
var BIT27 = 1 << 26;
var BIT28 = 1 << 27;
var BIT29 = 1 << 28;
var BIT30 = 1 << 29;
var BIT31 = 1 << 30;
var BIT32 = 1 << 31;
var BITS5 = 31;
var BITS6 = 63;
var BITS7 = 127;
var BITS17 = BIT18 - 1;
var BITS18 = BIT19 - 1;
var BITS19 = BIT20 - 1;
var BITS20 = BIT21 - 1;
var BITS21 = BIT22 - 1;
var BITS22 = BIT23 - 1;
var BITS23 = BIT24 - 1;
var BITS24 = BIT25 - 1;
var BITS25 = BIT26 - 1;
var BITS26 = BIT27 - 1;
var BITS27 = BIT28 - 1;
var BITS28 = BIT29 - 1;
var BITS29 = BIT30 - 1;
var BITS30 = BIT31 - 1;
var BITS31 = 2147483647;

// node_modules/lib0/number.js
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
var LOWEST_INT32 = 1 << 31;
var isInteger = Number.isInteger || ((num) => typeof num === "number" && isFinite(num) && floor(num) === num);
var isNaN2 = Number.isNaN;
var parseInt2 = Number.parseInt;

// node_modules/lib0/string.js
var fromCharCode = String.fromCharCode;
var fromCodePoint = String.fromCodePoint;
var MAX_UTF16_CHARACTER = fromCharCode(65535);
var toLowerCase = (s) => s.toLowerCase();
var trimLeftRegex = /^\s*/g;
var trimLeft = (s) => s.replace(trimLeftRegex, "");
var fromCamelCaseRegex = /([A-Z])/g;
var fromCamelCase = (s, separator) => trimLeft(s.replace(fromCamelCaseRegex, (match2) => `${separator}${toLowerCase(match2)}`));
var _encodeUtf8Polyfill = (str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buf[i] = /** @type {number} */
    encodedString.codePointAt(i);
  }
  return buf;
};
var utf8TextEncoder = (
  /** @type {TextEncoder} */
  typeof TextEncoder !== "undefined" ? new TextEncoder() : null
);
var _encodeUtf8Native = (str) => utf8TextEncoder.encode(str);
var encodeUtf8 = utf8TextEncoder ? _encodeUtf8Native : _encodeUtf8Polyfill;
var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
if (utf8TextDecoder && utf8TextDecoder.decode(new Uint8Array()).length === 1) {
  utf8TextDecoder = null;
}
var repeat = (source, n) => unfold(n, () => source).join("");

// node_modules/lib0/encoding.js
var Encoder = class {
  constructor() {
    this.cpos = 0;
    this.cbuf = new Uint8Array(100);
    this.bufs = [];
  }
};
var createEncoder = () => new Encoder();
var length = (encoder) => {
  let len = encoder.cpos;
  for (let i = 0; i < encoder.bufs.length; i++) {
    len += encoder.bufs[i].length;
  }
  return len;
};
var toUint8Array = (encoder) => {
  const uint8arr = new Uint8Array(length(encoder));
  let curPos = 0;
  for (let i = 0; i < encoder.bufs.length; i++) {
    const d = encoder.bufs[i];
    uint8arr.set(d, curPos);
    curPos += d.length;
  }
  uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
  return uint8arr;
};
var verifyLen = (encoder, len) => {
  const bufferLen = encoder.cbuf.length;
  if (bufferLen - encoder.cpos < len) {
    encoder.bufs.push(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos));
    encoder.cbuf = new Uint8Array(max(bufferLen, len) * 2);
    encoder.cpos = 0;
  }
};
var write = (encoder, num) => {
  const bufferLen = encoder.cbuf.length;
  if (encoder.cpos === bufferLen) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(bufferLen * 2);
    encoder.cpos = 0;
  }
  encoder.cbuf[encoder.cpos++] = num;
};
var writeUint8 = write;
var writeVarUint = (encoder, num) => {
  while (num > BITS7) {
    write(encoder, BIT8 | BITS7 & num);
    num = floor(num / 128);
  }
  write(encoder, BITS7 & num);
};
var writeVarInt = (encoder, num) => {
  const isNegative = isNegativeZero(num);
  if (isNegative) {
    num = -num;
  }
  write(encoder, (num > BITS6 ? BIT8 : 0) | (isNegative ? BIT7 : 0) | BITS6 & num);
  num = floor(num / 64);
  while (num > 0) {
    write(encoder, (num > BITS7 ? BIT8 : 0) | BITS7 & num);
    num = floor(num / 128);
  }
};
var _strBuffer = new Uint8Array(3e4);
var _maxStrBSize = _strBuffer.length / 3;
var _writeVarStringNative = (encoder, str) => {
  if (str.length < _maxStrBSize) {
    const written = utf8TextEncoder.encodeInto(str, _strBuffer).written || 0;
    writeVarUint(encoder, written);
    for (let i = 0; i < written; i++) {
      write(encoder, _strBuffer[i]);
    }
  } else {
    writeVarUint8Array(encoder, encodeUtf8(str));
  }
};
var _writeVarStringPolyfill = (encoder, str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    write(
      encoder,
      /** @type {number} */
      encodedString.codePointAt(i)
    );
  }
};
var writeVarString = utf8TextEncoder && /** @type {any} */
utf8TextEncoder.encodeInto ? _writeVarStringNative : _writeVarStringPolyfill;
var writeUint8Array = (encoder, uint8Array) => {
  const bufferLen = encoder.cbuf.length;
  const cpos = encoder.cpos;
  const leftCopyLen = min(bufferLen - cpos, uint8Array.length);
  const rightCopyLen = uint8Array.length - leftCopyLen;
  encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
  encoder.cpos += leftCopyLen;
  if (rightCopyLen > 0) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(max(bufferLen * 2, rightCopyLen));
    encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
    encoder.cpos = rightCopyLen;
  }
};
var writeVarUint8Array = (encoder, uint8Array) => {
  writeVarUint(encoder, uint8Array.byteLength);
  writeUint8Array(encoder, uint8Array);
};
var writeOnDataView = (encoder, len) => {
  verifyLen(encoder, len);
  const dview = new DataView(encoder.cbuf.buffer, encoder.cpos, len);
  encoder.cpos += len;
  return dview;
};
var writeFloat32 = (encoder, num) => writeOnDataView(encoder, 4).setFloat32(0, num, false);
var writeFloat64 = (encoder, num) => writeOnDataView(encoder, 8).setFloat64(0, num, false);
var writeBigInt64 = (encoder, num) => (
  /** @type {any} */
  writeOnDataView(encoder, 8).setBigInt64(0, num, false)
);
var floatTestBed = new DataView(new ArrayBuffer(4));
var isFloat32 = (num) => {
  floatTestBed.setFloat32(0, num);
  return floatTestBed.getFloat32(0) === num;
};
var writeAny = (encoder, data) => {
  switch (typeof data) {
    case "string":
      write(encoder, 119);
      writeVarString(encoder, data);
      break;
    case "number":
      if (isInteger(data) && abs(data) <= BITS31) {
        write(encoder, 125);
        writeVarInt(encoder, data);
      } else if (isFloat32(data)) {
        write(encoder, 124);
        writeFloat32(encoder, data);
      } else {
        write(encoder, 123);
        writeFloat64(encoder, data);
      }
      break;
    case "bigint":
      write(encoder, 122);
      writeBigInt64(encoder, data);
      break;
    case "object":
      if (data === null) {
        write(encoder, 126);
      } else if (isArray(data)) {
        write(encoder, 117);
        writeVarUint(encoder, data.length);
        for (let i = 0; i < data.length; i++) {
          writeAny(encoder, data[i]);
        }
      } else if (data instanceof Uint8Array) {
        write(encoder, 116);
        writeVarUint8Array(encoder, data);
      } else {
        write(encoder, 118);
        const keys3 = Object.keys(data);
        writeVarUint(encoder, keys3.length);
        for (let i = 0; i < keys3.length; i++) {
          const key = keys3[i];
          writeVarString(encoder, key);
          writeAny(encoder, data[key]);
        }
      }
      break;
    case "boolean":
      write(encoder, data ? 120 : 121);
      break;
    default:
      write(encoder, 127);
  }
};
var RleEncoder = class extends Encoder {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(writer) {
    super();
    this.w = writer;
    this.s = null;
    this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      if (this.count > 0) {
        writeVarUint(this, this.count - 1);
      }
      this.count = 1;
      this.w(this, v);
      this.s = v;
    }
  }
};
var flushUintOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    writeVarInt(encoder.encoder, encoder.count === 1 ? encoder.s : -encoder.s);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
var UintOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.s === v) {
      this.count++;
    } else {
      flushUintOptRleEncoder(this);
      this.count = 1;
      this.s = v;
    }
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    flushUintOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
};
var flushIntDiffOptRleEncoder = (encoder) => {
  if (encoder.count > 0) {
    const encodedDiff = encoder.diff * 2 + (encoder.count === 1 ? 0 : 1);
    writeVarInt(encoder.encoder, encodedDiff);
    if (encoder.count > 1) {
      writeVarUint(encoder.encoder, encoder.count - 2);
    }
  }
};
var IntDiffOptRleEncoder = class {
  constructor() {
    this.encoder = new Encoder();
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(v) {
    if (this.diff === v - this.s) {
      this.s = v;
      this.count++;
    } else {
      flushIntDiffOptRleEncoder(this);
      this.count = 1;
      this.diff = v - this.s;
      this.s = v;
    }
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    flushIntDiffOptRleEncoder(this);
    return toUint8Array(this.encoder);
  }
};
var StringEncoder = class {
  constructor() {
    this.sarr = [];
    this.s = "";
    this.lensE = new UintOptRleEncoder();
  }
  /**
   * @param {string} string
   */
  write(string) {
    this.s += string;
    if (this.s.length > 19) {
      this.sarr.push(this.s);
      this.s = "";
    }
    this.lensE.write(string.length);
  }
  toUint8Array() {
    const encoder = new Encoder();
    this.sarr.push(this.s);
    this.s = "";
    writeVarString(encoder, this.sarr.join(""));
    writeUint8Array(encoder, this.lensE.toUint8Array());
    return toUint8Array(encoder);
  }
};

// node_modules/lib0/error.js
var create3 = (s) => new Error(s);
var methodUnimplemented = () => {
  throw create3("Method unimplemented");
};
var unexpectedCase = () => {
  throw create3("Unexpected case");
};

// node_modules/lib0/decoding.js
var errorUnexpectedEndOfArray = create3("Unexpected end of array");
var errorIntegerOutOfRange = create3("Integer out of Range");
var Decoder = class {
  /**
   * @param {Uint8Array<Buf>} uint8Array Binary data to decode
   */
  constructor(uint8Array) {
    this.arr = uint8Array;
    this.pos = 0;
  }
};
var createDecoder = (uint8Array) => new Decoder(uint8Array);
var hasContent = (decoder) => decoder.pos !== decoder.arr.length;
var readUint8Array = (decoder, len) => {
  const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
  decoder.pos += len;
  return view;
};
var readVarUint8Array = (decoder) => readUint8Array(decoder, readVarUint(decoder));
var readUint8 = (decoder) => decoder.arr[decoder.pos++];
var readVarUint = (decoder) => {
  let num = 0;
  let mult = 1;
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    const r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
var readVarInt = (decoder) => {
  let r = decoder.arr[decoder.pos++];
  let num = r & BITS6;
  let mult = 64;
  const sign = (r & BIT7) > 0 ? -1 : 1;
  if ((r & BIT8) === 0) {
    return sign * num;
  }
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    r = decoder.arr[decoder.pos++];
    num = num + (r & BITS7) * mult;
    mult *= 128;
    if (r < BIT8) {
      return sign * num;
    }
    if (num > MAX_SAFE_INTEGER) {
      throw errorIntegerOutOfRange;
    }
  }
  throw errorUnexpectedEndOfArray;
};
var _readVarStringPolyfill = (decoder) => {
  let remainingLen = readVarUint(decoder);
  if (remainingLen === 0) {
    return "";
  } else {
    let encodedString = String.fromCodePoint(readUint8(decoder));
    if (--remainingLen < 100) {
      while (remainingLen--) {
        encodedString += String.fromCodePoint(readUint8(decoder));
      }
    } else {
      while (remainingLen > 0) {
        const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
        const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
        decoder.pos += nextLen;
        encodedString += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          bytes
        );
        remainingLen -= nextLen;
      }
    }
    return decodeURIComponent(escape(encodedString));
  }
};
var _readVarStringNative = (decoder) => (
  /** @type any */
  utf8TextDecoder.decode(readVarUint8Array(decoder))
);
var readVarString = utf8TextDecoder ? _readVarStringNative : _readVarStringPolyfill;
var readFromDataView = (decoder, len) => {
  const dv = new DataView(decoder.arr.buffer, decoder.arr.byteOffset + decoder.pos, len);
  decoder.pos += len;
  return dv;
};
var readFloat32 = (decoder) => readFromDataView(decoder, 4).getFloat32(0, false);
var readFloat64 = (decoder) => readFromDataView(decoder, 8).getFloat64(0, false);
var readBigInt64 = (decoder) => (
  /** @type {any} */
  readFromDataView(decoder, 8).getBigInt64(0, false)
);
var readAnyLookupTable = [
  (decoder) => void 0,
  // CASE 127: undefined
  (decoder) => null,
  // CASE 126: null
  readVarInt,
  // CASE 125: integer
  readFloat32,
  // CASE 124: float32
  readFloat64,
  // CASE 123: float64
  readBigInt64,
  // CASE 122: bigint
  (decoder) => false,
  // CASE 121: boolean (false)
  (decoder) => true,
  // CASE 120: boolean (true)
  readVarString,
  // CASE 119: string
  (decoder) => {
    const len = readVarUint(decoder);
    const obj = {};
    for (let i = 0; i < len; i++) {
      const key = readVarString(decoder);
      obj[key] = readAny(decoder);
    }
    return obj;
  },
  (decoder) => {
    const len = readVarUint(decoder);
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(readAny(decoder));
    }
    return arr;
  },
  readVarUint8Array
  // CASE 116: Uint8Array
];
var readAny = (decoder) => readAnyLookupTable[127 - readUint8(decoder)](decoder);
var RleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(uint8Array, reader) {
    super(uint8Array);
    this.reader = reader;
    this.s = null;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = this.reader(this);
      if (hasContent(this)) {
        this.count = readVarUint(this) + 1;
      } else {
        this.count = -1;
      }
    }
    this.count--;
    return (
      /** @type {T} */
      this.s
    );
  }
};
var UintOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = readVarInt(this);
      const isNegative = isNegativeZero(this.s);
      this.count = 1;
      if (isNegative) {
        this.s = -this.s;
        this.count = readVarUint(this) + 2;
      }
    }
    this.count--;
    return (
      /** @type {number} */
      this.s
    );
  }
};
var IntDiffOptRleDecoder = class extends Decoder {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    super(uint8Array);
    this.s = 0;
    this.count = 0;
    this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const diff = readVarInt(this);
      const hasCount = diff & 1;
      this.diff = floor(diff / 2);
      this.count = 1;
      if (hasCount) {
        this.count = readVarUint(this) + 2;
      }
    }
    this.s += this.diff;
    this.count--;
    return this.s;
  }
};
var StringDecoder = class {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(uint8Array) {
    this.decoder = new UintOptRleDecoder(uint8Array);
    this.str = readVarString(this.decoder);
    this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const end = this.spos + this.decoder.read();
    const res = this.str.slice(this.spos, end);
    this.spos = end;
    return res;
  }
};

// node_modules/lib0/webcrypto.js
var subtle = crypto.subtle;
var getRandomValues = crypto.getRandomValues.bind(crypto);

// node_modules/lib0/random.js
var uint32 = () => getRandomValues(new Uint32Array(1))[0];
var uuidv4Template = "10000000-1000-4000-8000" + -1e11;
var uuidv4 = () => uuidv4Template.replace(
  /[018]/g,
  /** @param {number} c */
  (c) => (c ^ uint32() & 15 >> c / 4).toString(16)
);

// node_modules/lib0/time.js
var getUnixTime = Date.now;

// node_modules/lib0/promise.js
var create4 = (f) => (
  /** @type {Promise<T>} */
  new Promise(f)
);
var all = Promise.all.bind(Promise);

// node_modules/lib0/conditions.js
var undefinedToNull = (v) => v === void 0 ? null : v;

// node_modules/lib0/storage.js
var VarStoragePolyfill = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(key, newValue) {
    this.map.set(key, newValue);
  }
  /**
   * @param {string} key
   */
  getItem(key) {
    return this.map.get(key);
  }
};
var _localStorage = new VarStoragePolyfill();
var usePolyfill = true;
try {
  if (typeof localStorage !== "undefined" && localStorage) {
    _localStorage = localStorage;
    usePolyfill = false;
  }
} catch (e) {
}
var varStorage = _localStorage;

// node_modules/lib0/trait/equality.js
var EqualityTraitSymbol = /* @__PURE__ */ Symbol("Equality");
var equals = (a, b) => a === b || !!a?.[EqualityTraitSymbol]?.(b) || false;

// node_modules/lib0/object.js
var isObject = (o) => typeof o === "object";
var assign = Object.assign;
var keys = Object.keys;
var forEach = (obj, f) => {
  for (const key in obj) {
    f(obj[key], key);
  }
};
var size = (obj) => keys(obj).length;
var isEmpty = (obj) => {
  for (const _k in obj) {
    return false;
  }
  return true;
};
var every2 = (obj, f) => {
  for (const key in obj) {
    if (!f(obj[key], key)) {
      return false;
    }
  }
  return true;
};
var hasProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
var equalFlat = (a, b) => a === b || size(a) === size(b) && every2(a, (val, key) => (val !== void 0 || hasProperty(b, key)) && equals(b[key], val));
var freeze = Object.freeze;
var deepFreeze = (o) => {
  for (const key in o) {
    const c = o[key];
    if (typeof c === "object" || typeof c === "function") {
      deepFreeze(o[key]);
    }
  }
  return freeze(o);
};

// node_modules/lib0/function.js
var callAll = (fs, args2, i = 0) => {
  try {
    for (; i < fs.length; i++) {
      fs[i](...args2);
    }
  } finally {
    if (i < fs.length) {
      callAll(fs, args2, i + 1);
    }
  }
};
var id = (a) => a;
var equalityDeep = (a, b) => {
  if (a === b) {
    return true;
  }
  if (a == null || b == null || a.constructor !== b.constructor && (a.constructor || Object) !== (b.constructor || Object)) {
    return false;
  }
  if (a[EqualityTraitSymbol] != null) {
    return a[EqualityTraitSymbol](b);
  }
  switch (a.constructor) {
    case ArrayBuffer:
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    // eslint-disable-next-line no-fallthrough
    case Uint8Array: {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      break;
    }
    case Set: {
      if (a.size !== b.size) {
        return false;
      }
      for (const value of a) {
        if (!b.has(value)) {
          return false;
        }
      }
      break;
    }
    case Map: {
      if (a.size !== b.size) {
        return false;
      }
      for (const key of a.keys()) {
        if (!b.has(key) || !equalityDeep(a.get(key), b.get(key))) {
          return false;
        }
      }
      break;
    }
    case void 0:
    case Object:
      if (size(a) !== size(b)) {
        return false;
      }
      for (const key in a) {
        if (!hasProperty(a, key) || !equalityDeep(a[key], b[key])) {
          return false;
        }
      }
      break;
    case Array:
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!equalityDeep(a[i], b[i])) {
          return false;
        }
      }
      break;
    default:
      return false;
  }
  return true;
};
var isOneOf = (value, options) => options.includes(value);

// node_modules/lib0/environment.js
var isNode = typeof process !== "undefined" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
var isMac = typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
var params;
var args = [];
var computeParams = () => {
  if (params === void 0) {
    if (isNode) {
      params = create();
      const pargs = process.argv;
      let currParamName = null;
      for (let i = 0; i < pargs.length; i++) {
        const parg = pargs[i];
        if (parg[0] === "-") {
          if (currParamName !== null) {
            params.set(currParamName, "");
          }
          currParamName = parg;
        } else {
          if (currParamName !== null) {
            params.set(currParamName, parg);
            currParamName = null;
          } else {
            args.push(parg);
          }
        }
      }
      if (currParamName !== null) {
        params.set(currParamName, "");
      }
    } else if (typeof location === "object") {
      params = create();
      (location.search || "?").slice(1).split("&").forEach((kv) => {
        if (kv.length !== 0) {
          const [key, value] = kv.split("=");
          params.set(`--${fromCamelCase(key, "-")}`, value);
          params.set(`-${fromCamelCase(key, "-")}`, value);
        }
      });
    } else {
      params = create();
    }
  }
  return params;
};
var hasParam = (name) => computeParams().has(name);
var getVariable = (name) => isNode ? undefinedToNull(process.env[name.toUpperCase().replaceAll("-", "_")]) : undefinedToNull(varStorage.getItem(name));
var hasConf = (name) => hasParam("--" + name) || getVariable(name) !== null;
var production = hasConf("production");
var forceColor = isNode && isOneOf(process.env.FORCE_COLOR, ["true", "1", "2"]);
var supportsColor = forceColor || !hasParam("--no-colors") && // @todo deprecate --no-colors
!hasConf("no-color") && (!isNode || process.stdout.isTTY) && (!isNode || hasParam("--color") || getVariable("COLORTERM") !== null || (getVariable("TERM") || "").includes("color"));

// node_modules/lib0/buffer.js
var createUint8ArrayFromLen = (len) => new Uint8Array(len);
var copyUint8Array = (uint8Array) => {
  const newBuf = createUint8ArrayFromLen(uint8Array.byteLength);
  newBuf.set(uint8Array);
  return newBuf;
};

// node_modules/lib0/pair.js
var Pair = class {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
};
var create5 = (left, right) => new Pair(left, right);

// node_modules/lib0/prng.js
var bool = (gen) => gen.next() >= 0.5;
var int53 = (gen, min4, max4) => floor(gen.next() * (max4 + 1 - min4) + min4);
var int32 = (gen, min4, max4) => floor(gen.next() * (max4 + 1 - min4) + min4);
var int31 = (gen, min4, max4) => int32(gen, min4, max4);
var letter = (gen) => fromCharCode(int31(gen, 97, 122));
var word = (gen, minLen = 0, maxLen = 20) => {
  const len = int31(gen, minLen, maxLen);
  let str = "";
  for (let i = 0; i < len; i++) {
    str += letter(gen);
  }
  return str;
};
var oneOf = (gen, array) => array[int31(gen, 0, array.length - 1)];

// node_modules/lib0/schema.js
var schemaSymbol = /* @__PURE__ */ Symbol("0schema");
var ValidationError = class {
  constructor() {
    this._rerrs = [];
  }
  /**
   * @param {string?} path
   * @param {string} expected
   * @param {string} has
   * @param {string?} message
   */
  extend(path, expected, has, message = null) {
    this._rerrs.push({ path, expected, has, message });
  }
  toString() {
    const s = [];
    for (let i = this._rerrs.length - 1; i > 0; i--) {
      const r = this._rerrs[i];
      s.push(repeat(" ", (this._rerrs.length - i) * 2) + `${r.path != null ? `[${r.path}] ` : ""}${r.has} doesn't match ${r.expected}. ${r.message}`);
    }
    return s.join("\n");
  }
};
var shapeExtends = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null || a.constructor !== b.constructor) return false;
  if (a[EqualityTraitSymbol]) return equals(a, b);
  if (isArray(a)) {
    return every(
      a,
      (aitem) => some(b, (bitem) => shapeExtends(aitem, bitem))
    );
  } else if (isObject(a)) {
    return every2(
      a,
      (aitem, akey) => shapeExtends(aitem, b[akey])
    );
  }
  return false;
};
var Schema = class {
  /**
   * @param {Schema<any>} other
   */
  extends(other) {
    let [a, b] = [
      /** @type {any} */
      this.shape,
      /** @type {any} */
      other.shape
    ];
    if (
      /** @type {typeof Schema<any>} */
      this.constructor._dilutes
    ) [b, a] = [a, b];
    return shapeExtends(a, b);
  }
  /**
   * Overwrite this when necessary. By default, we only check the `shape` property which every shape
   * should have.
   * @param {Schema<any>} other
   */
  equals(other) {
    return this.constructor === other.constructor && equalityDeep(this.shape, other.shape);
  }
  [schemaSymbol]() {
    return true;
  }
  /**
   * @param {object} other
   */
  [EqualityTraitSymbol](other) {
    return this.equals(
      /** @type {any} */
      other
    );
  }
  /**
   * Use `schema.validate(obj)` with a typed parameter that is already of typed to be an instance of
   * Schema. Validate will check the structure of the parameter and return true iff the instance
   * really is an instance of Schema.
   *
   * @param {T} o
   * @return {boolean}
   */
  validate(o) {
    return this.check(o);
  }
  /* c8 ignore start */
  /**
   * Similar to validate, but this method accepts untyped parameters.
   *
   * @param {any} _o
   * @param {ValidationError} [_err]
   * @return {_o is T}
   */
  check(_o, _err) {
    methodUnimplemented();
  }
  /* c8 ignore stop */
  /**
   * @type {Schema<T?>}
   */
  get nullable() {
    return $union(this, $null);
  }
  /**
   * @type {$Optional<Schema<T>>}
   */
  get optional() {
    return new $Optional(
      /** @type {Schema<T>} */
      this
    );
  }
  /**
   * Cast a variable to a specific type. Returns the casted value, or throws an exception otherwise.
   * Use this if you know that the type is of a specific type and you just want to convince the type
   * system.
   *
   * **Do not rely on these error messages!**
   * Performs an assertion check only if not in a production environment.
   *
   * @template OO
   * @param {OO} o
   * @return {Extract<OO, T> extends never ? T : (OO extends Array<never> ? T : Extract<OO,T>)}
   */
  cast(o) {
    assert(o, this);
    return (
      /** @type {any} */
      o
    );
  }
  /**
   * EXPECTO PATRONUM!! 🪄
   * This function protects against type errors. Though it may not work in the real world.
   *
   * "After all this time?"
   * "Always." - Snape, talking about type safety
   *
   * Ensures that a variable is a a specific type. Returns the value, or throws an exception if the assertion check failed.
   * Use this if you know that the type is of a specific type and you just want to convince the type
   * system.
   *
   * Can be useful when defining lambdas: `s.lambda(s.$number, s.$void).expect((n) => n + 1)`
   *
   * **Do not rely on these error messages!**
   * Performs an assertion check if not in a production environment.
   *
   * @param {T} o
   * @return {o extends T ? T : never}
   */
  expect(o) {
    assert(o, this);
    return o;
  }
};
// this.shape must not be defined on Schema. Otherwise typecheck on metatypes (e.g. $$object) won't work as expected anymore
/**
 * If true, the more things are added to the shape the more objects this schema will accept (e.g.
 * union). By default, the more objects are added, the the fewer objects this schema will accept.
 * @protected
 */
__publicField(Schema, "_dilutes", false);
var $ConstructedBy = class extends Schema {
  /**
   * @param {C} c
   * @param {((o:Instance<C>)=>boolean)|null} check
   */
  constructor(c, check) {
    super();
    this.shape = c;
    this._c = check;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is C extends ((...args:any[]) => infer T) ? T : (C extends (new (...args:any[]) => any) ? InstanceType<C> : never)} o
   */
  check(o, err = void 0) {
    const c = o?.constructor === this.shape && (this._c == null || this._c(o));
    !c && err?.extend(null, this.shape.name, o?.constructor.name, o?.constructor !== this.shape ? "Constructor match failed" : "Check failed");
    return c;
  }
};
var $constructedBy = (c, check = null) => new $ConstructedBy(c, check);
var $$constructedBy = $constructedBy($ConstructedBy);
var $Custom = class extends Schema {
  /**
   * @param {(o:any) => boolean} check
   */
  constructor(check) {
    super();
    this.shape = check;
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is any}
   */
  check(o, err) {
    const c = this.shape(o);
    !c && err?.extend(null, "custom prop", o?.constructor.name, "failed to check custom prop");
    return c;
  }
};
var $custom = (check) => new $Custom(check);
var $$custom = $constructedBy($Custom);
var $Literal = class extends Schema {
  /**
   * @param {Array<T>} literals
   */
  constructor(literals) {
    super();
    this.shape = literals;
  }
  /**
   *
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is T}
   */
  check(o, err) {
    const c = this.shape.some((a) => a === o);
    !c && err?.extend(null, this.shape.join(" | "), o.toString());
    return c;
  }
};
var $literal = (...literals) => new $Literal(literals);
var $$literal = $constructedBy($Literal);
var _regexEscape = (
  /** @type {any} */
  RegExp.escape || /** @type {(str:string) => string} */
  ((str) => str.replace(/[().|&,$^[\]]/g, (s) => "\\" + s))
);
var _schemaStringTemplateToRegex = (s) => {
  if ($string.check(s)) {
    return [_regexEscape(s)];
  }
  if ($$literal.check(s)) {
    return (
      /** @type {Array<string|number>} */
      s.shape.map((v) => v + "")
    );
  }
  if ($$number.check(s)) {
    return ["[+-]?\\d+.?\\d*"];
  }
  if ($$string.check(s)) {
    return [".*"];
  }
  if ($$union.check(s)) {
    return s.shape.map(_schemaStringTemplateToRegex).flat(1);
  }
  unexpectedCase();
};
var $StringTemplate = class extends Schema {
  /**
   * @param {T} shape
   */
  constructor(shape) {
    super();
    this.shape = shape;
    this._r = new RegExp("^" + shape.map(_schemaStringTemplateToRegex).map((opts) => `(${opts.join("|")})`).join("") + "$");
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is CastStringTemplateArgsToTemplate<T>}
   */
  check(o, err) {
    const c = this._r.exec(o) != null;
    !c && err?.extend(null, this._r.toString(), o.toString(), "String doesn't match string template.");
    return c;
  }
};
var $$stringTemplate = $constructedBy($StringTemplate);
var isOptionalSymbol = /* @__PURE__ */ Symbol("optional");
var $Optional = class extends Schema {
  /**
   * @param {S} shape
   */
  constructor(shape) {
    super();
    this.shape = shape;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is (Unwrap<S>|undefined)}
   */
  check(o, err) {
    const c = o === void 0 || this.shape.check(o);
    !c && err?.extend(null, "undefined (optional)", "()");
    return c;
  }
  get [isOptionalSymbol]() {
    return true;
  }
};
var $$optional = $constructedBy($Optional);
var $Never = class extends Schema {
  /**
   * @param {any} _o
   * @param {ValidationError} [err]
   * @return {_o is never}
   */
  check(_o, err) {
    err?.extend(null, "never", typeof _o);
    return false;
  }
};
var $never = new $Never();
var $$never = $constructedBy($Never);
var _$Object = class _$Object extends Schema {
  /**
   * @param {S} shape
   * @param {boolean} partial
   */
  constructor(shape, partial = false) {
    super();
    this.shape = shape;
    this._isPartial = partial;
  }
  /**
   * @type {Schema<Partial<$ObjectToType<S>>>}
   */
  get partial() {
    return new _$Object(this.shape, true);
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is $ObjectToType<S>}
   */
  check(o, err) {
    if (o == null) {
      err?.extend(null, "object", "null");
      return false;
    }
    return every2(this.shape, (vv, vk) => {
      const c = this._isPartial && !hasProperty(o, vk) || vv.check(o[vk], err);
      !c && err?.extend(vk.toString(), vv.toString(), typeof o[vk], "Object property does not match");
      return c;
    });
  }
};
__publicField(_$Object, "_dilutes", true);
var $Object = _$Object;
var $object = (def) => (
  /** @type {any} */
  new $Object(def)
);
var $$object = $constructedBy($Object);
var $objectAny = $custom((o) => o != null && (o.constructor === Object || o.constructor == null));
var $Record = class extends Schema {
  /**
   * @param {Keys} keys
   * @param {Values} values
   */
  constructor(keys3, values) {
    super();
    this.shape = {
      keys: keys3,
      values
    };
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is { [key in Unwrap<Keys>]: Unwrap<Values> }}
   */
  check(o, err) {
    return o != null && every2(o, (vv, vk) => {
      const ck = this.shape.keys.check(vk, err);
      !ck && err?.extend(vk + "", "Record", typeof o, ck ? "Key doesn't match schema" : "Value doesn't match value");
      return ck && this.shape.values.check(vv, err);
    });
  }
};
var $record = (keys3, values) => new $Record(keys3, values);
var $$record = $constructedBy($Record);
var $Tuple = class extends Schema {
  /**
   * @param {S} shape
   */
  constructor(shape) {
    super();
    this.shape = shape;
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is { [K in keyof S]: S[K] extends Schema<infer Type> ? Type : never }}
   */
  check(o, err) {
    return o != null && every2(this.shape, (vv, vk) => {
      const c = (
        /** @type {Schema<any>} */
        vv.check(o[vk], err)
      );
      !c && err?.extend(vk.toString(), "Tuple", typeof vv);
      return c;
    });
  }
};
var $tuple = (...def) => new $Tuple(def);
var $$tuple = $constructedBy($Tuple);
var $Array = class extends Schema {
  /**
   * @param {Array<S>} v
   */
  constructor(v) {
    super();
    this.shape = v.length === 1 ? v[0] : new $Union(v);
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is Array<S extends Schema<infer T> ? T : never>} o
   */
  check(o, err) {
    const c = isArray(o) && every(o, (oi) => this.shape.check(oi));
    !c && err?.extend(null, "Array", "");
    return c;
  }
};
var $array = (...def) => new $Array(def);
var $$array = $constructedBy($Array);
var $arrayAny = $custom((o) => isArray(o));
var $InstanceOf = class extends Schema {
  /**
   * @param {new (...args:any) => T} constructor
   * @param {((o:T) => boolean)|null} check
   */
  constructor(constructor, check) {
    super();
    this.shape = constructor;
    this._c = check;
  }
  /**
   * @param {any} o
   * @param {ValidationError} err
   * @return {o is T}
   */
  check(o, err) {
    const c = o instanceof this.shape && (this._c == null || this._c(o));
    !c && err?.extend(null, this.shape.name, o?.constructor.name);
    return c;
  }
};
var $instanceOf = (c, check = null) => new $InstanceOf(c, check);
var $$instanceOf = $constructedBy($InstanceOf);
var $$schema = $instanceOf(Schema);
var $Lambda = class extends Schema {
  /**
   * @param {Args} args
   */
  constructor(args2) {
    super();
    this.len = args2.length - 1;
    this.args = $tuple(...args2.slice(-1));
    this.res = args2[this.len];
  }
  /**
   * @param {any} f
   * @param {ValidationError} err
   * @return {f is _LArgsToLambdaDef<Args>}
   */
  check(f, err) {
    const c = f.constructor === Function && f.length <= this.len;
    !c && err?.extend(null, "function", typeof f);
    return c;
  }
};
var $$lambda = $constructedBy($Lambda);
var $function = $custom((o) => typeof o === "function");
var $Intersection = class extends Schema {
  /**
   * @param {T} v
   */
  constructor(v) {
    super();
    this.shape = v;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is Intersect<UnwrapArray<T>>}
   */
  check(o, err) {
    const c = every(this.shape, (check) => check.check(o, err));
    !c && err?.extend(null, "Intersectinon", typeof o);
    return c;
  }
};
var $$intersect = $constructedBy($Intersection, (o) => o.shape.length > 0);
var $Union = class extends Schema {
  /**
   * @param {Array<Schema<S>>} v
   */
  constructor(v) {
    super();
    this.shape = v;
  }
  /**
   * @param {any} o
   * @param {ValidationError} [err]
   * @return {o is S}
   */
  check(o, err) {
    const c = some(this.shape, (vv) => vv.check(o, err));
    err?.extend(null, "Union", typeof o);
    return c;
  }
};
__publicField($Union, "_dilutes", true);
var $union = (...schemas) => schemas.findIndex(($s) => $$union.check($s)) >= 0 ? $union(...schemas.map(($s) => $($s)).map(($s) => $$union.check($s) ? $s.shape : [$s]).flat(1)) : schemas.length === 1 ? schemas[0] : new $Union(schemas);
var $$union = (
  /** @type {Schema<$Union<any>>} */
  $constructedBy($Union)
);
var _t = () => true;
var $any = $custom(_t);
var $$any = (
  /** @type {Schema<Schema<any>>} */
  $constructedBy($Custom, (o) => o.shape === _t)
);
var $bigint = $custom((o) => typeof o === "bigint");
var $$bigint = (
  /** @type {Schema<Schema<BigInt>>} */
  $custom((o) => o === $bigint)
);
var $symbol = $custom((o) => typeof o === "symbol");
var $$symbol = (
  /** @type {Schema<Schema<Symbol>>} */
  $custom((o) => o === $symbol)
);
var $number = $custom((o) => typeof o === "number");
var $$number = (
  /** @type {Schema<Schema<number>>} */
  $custom((o) => o === $number)
);
var $string = $custom((o) => typeof o === "string");
var $$string = (
  /** @type {Schema<Schema<string>>} */
  $custom((o) => o === $string)
);
var $boolean = $custom((o) => typeof o === "boolean");
var $$boolean = (
  /** @type {Schema<Schema<Boolean>>} */
  $custom((o) => o === $boolean)
);
var $undefined = $literal(void 0);
var $$undefined = (
  /** @type {Schema<Schema<undefined>>} */
  $constructedBy($Literal, (o) => o.shape.length === 1 && o.shape[0] === void 0)
);
var $void = $literal(void 0);
var $null = $literal(null);
var $$null = (
  /** @type {Schema<Schema<null>>} */
  $constructedBy($Literal, (o) => o.shape.length === 1 && o.shape[0] === null)
);
var $uint8Array = $constructedBy(Uint8Array);
var $$uint8Array = (
  /** @type {Schema<Schema<Uint8Array>>} */
  $constructedBy($ConstructedBy, (o) => o.shape === Uint8Array)
);
var $primitive = $union($number, $string, $null, $undefined, $bigint, $boolean, $symbol);
var $json = (() => {
  const $jsonArr = (
    /** @type {$Array<$any>} */
    $array($any)
  );
  const $jsonRecord = (
    /** @type {$Record<$string,$any>} */
    $record($string, $any)
  );
  const $json2 = $union($number, $string, $null, $boolean, $jsonArr, $jsonRecord);
  $jsonArr.shape = $json2;
  $jsonRecord.shape.values = $json2;
  return $json2;
})();
var $ = (o) => {
  if ($$schema.check(o)) {
    return (
      /** @type {any} */
      o
    );
  } else if ($objectAny.check(o)) {
    const o2 = {};
    for (const k in o) {
      o2[k] = $(o[k]);
    }
    return (
      /** @type {any} */
      $object(o2)
    );
  } else if ($arrayAny.check(o)) {
    return (
      /** @type {any} */
      $union(...o.map($))
    );
  } else if ($primitive.check(o)) {
    return (
      /** @type {any} */
      $literal(o)
    );
  } else if ($function.check(o)) {
    return (
      /** @type {any} */
      $constructedBy(
        /** @type {any} */
        o
      )
    );
  }
  unexpectedCase();
};
var assert = production ? () => {
} : (o, schema) => {
  const err = new ValidationError();
  if (!schema.check(o, err)) {
    throw create3(`Expected value to be of type ${schema.constructor.name}.
${err.toString()}`);
  }
};
var PatternMatcher = class {
  /**
   * @param {Schema<State>} [$state]
   */
  constructor($state) {
    this.patterns = [];
    this.$state = $state;
  }
  /**
   * @template P
   * @template R
   * @param {P} pattern
   * @param {(o:NoInfer<Unwrap<ReadSchema<P>>>,s:State)=>R} handler
   * @return {PatternMatcher<State,Patterns|Pattern<Unwrap<ReadSchema<P>>,R>>}
   */
  if(pattern, handler) {
    this.patterns.push({ if: $(pattern), h: handler });
    return this;
  }
  /**
   * @template R
   * @param {(o:any,s:State)=>R} h
   */
  else(h) {
    return this.if($any, h);
  }
  /**
   * @return {State extends undefined
   *   ? <In extends Unwrap<Patterns['if']>>(o:In,state?:undefined)=>PatternMatchResult<Patterns,In>
   *   : <In extends Unwrap<Patterns['if']>>(o:In,state:State)=>PatternMatchResult<Patterns,In>}
   */
  done() {
    return (
      /** @type {any} */
      (o, s) => {
        for (let i = 0; i < this.patterns.length; i++) {
          const p = this.patterns[i];
          if (p.if.check(o)) {
            return p.h(o, s);
          }
        }
        throw create3("Unhandled pattern");
      }
    );
  }
};
var match = (state) => new PatternMatcher(
  /** @type {any} */
  state
);
var _random = (
  /** @type {any} */
  match(
    /** @type {Schema<prng.PRNG>} */
    $any
  ).if($$number, (_o, gen) => int53(gen, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER)).if($$string, (_o, gen) => word(gen)).if($$boolean, (_o, gen) => bool(gen)).if($$bigint, (_o, gen) => BigInt(int53(gen, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER))).if($$union, (o, gen) => random(gen, oneOf(gen, o.shape))).if($$object, (o, gen) => {
    const res = {};
    for (const k in o.shape) {
      let prop = o.shape[k];
      if ($$optional.check(prop)) {
        if (bool(gen)) {
          continue;
        }
        prop = prop.shape;
      }
      res[k] = _random(prop, gen);
    }
    return res;
  }).if($$array, (o, gen) => {
    const arr = [];
    const n = int32(gen, 0, 42);
    for (let i = 0; i < n; i++) {
      arr.push(random(gen, o.shape));
    }
    return arr;
  }).if($$literal, (o, gen) => {
    return oneOf(gen, o.shape);
  }).if($$null, (o, gen) => {
    return null;
  }).if($$lambda, (o, gen) => {
    const res = random(gen, o.res);
    return () => res;
  }).if($$any, (o, gen) => random(gen, oneOf(gen, [
    $number,
    $string,
    $null,
    $undefined,
    $bigint,
    $boolean,
    $array($number),
    $record($union("a", "b", "c"), $number)
  ]))).if($$record, (o, gen) => {
    const res = {};
    const keysN = int53(gen, 0, 3);
    for (let i = 0; i < keysN; i++) {
      const key = random(gen, o.shape.keys);
      const val = random(gen, o.shape.values);
      res[key] = val;
    }
    return res;
  }).done()
);
var random = (gen, schema) => (
  /** @type {any} */
  _random($(schema), gen)
);

// node_modules/lib0/dom.js
var doc = (
  /** @type {Document} */
  typeof document !== "undefined" ? document : {}
);
var $fragment = $custom((el) => el.nodeType === DOCUMENT_FRAGMENT_NODE);
var domParser = (
  /** @type {DOMParser} */
  typeof DOMParser !== "undefined" ? new DOMParser() : null
);
var $element = $custom((el) => el.nodeType === ELEMENT_NODE);
var $text = $custom((el) => el.nodeType === TEXT_NODE);
var mapToStyleString = (m) => map(m, (value, key) => `${key}:${value};`).join("");
var ELEMENT_NODE = doc.ELEMENT_NODE;
var TEXT_NODE = doc.TEXT_NODE;
var CDATA_SECTION_NODE = doc.CDATA_SECTION_NODE;
var COMMENT_NODE = doc.COMMENT_NODE;
var DOCUMENT_NODE = doc.DOCUMENT_NODE;
var DOCUMENT_TYPE_NODE = doc.DOCUMENT_TYPE_NODE;
var DOCUMENT_FRAGMENT_NODE = doc.DOCUMENT_FRAGMENT_NODE;
var $node = $custom((el) => el.nodeType === DOCUMENT_NODE);

// node_modules/lib0/symbol.js
var create6 = Symbol;

// node_modules/lib0/logging.common.js
var BOLD = create6();
var UNBOLD = create6();
var BLUE = create6();
var GREY = create6();
var GREEN = create6();
var RED = create6();
var PURPLE = create6();
var ORANGE = create6();
var UNCOLOR = create6();
var computeNoColorLoggingArgs = (args2) => {
  if (args2.length === 1 && args2[0]?.constructor === Function) {
    args2 = /** @type {Array<string|Symbol|Object|number>} */
    /** @type {[function]} */
    args2[0]();
  }
  const strBuilder = [];
  const logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (arg === void 0) {
      break;
    } else if (arg.constructor === String || arg.constructor === Number) {
      strBuilder.push(arg);
    } else if (arg.constructor === Object) {
      break;
    }
  }
  if (i > 0) {
    logArgs.push(strBuilder.join(""));
  }
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
var lastLoggingTime = getUnixTime();

// node_modules/lib0/logging.js
var _browserStyleMap = {
  [BOLD]: create5("font-weight", "bold"),
  [UNBOLD]: create5("font-weight", "normal"),
  [BLUE]: create5("color", "blue"),
  [GREEN]: create5("color", "green"),
  [GREY]: create5("color", "grey"),
  [RED]: create5("color", "red"),
  [PURPLE]: create5("color", "purple"),
  [ORANGE]: create5("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [UNCOLOR]: create5("color", "black")
};
var computeBrowserLoggingArgs = (args2) => {
  if (args2.length === 1 && args2[0]?.constructor === Function) {
    args2 = /** @type {Array<string|Symbol|Object|number>} */
    /** @type {[function]} */
    args2[0]();
  }
  const strBuilder = [];
  const styles = [];
  const currentStyle = create();
  let logArgs = [];
  let i = 0;
  for (; i < args2.length; i++) {
    const arg = args2[i];
    const style = _browserStyleMap[arg];
    if (style !== void 0) {
      currentStyle.set(style.left, style.right);
    } else {
      if (arg === void 0) {
        break;
      }
      if (arg.constructor === String || arg.constructor === Number) {
        const style2 = mapToStyleString(currentStyle);
        if (i > 0 || style2.length > 0) {
          strBuilder.push("%c" + arg);
          styles.push(style2);
        } else {
          strBuilder.push(arg);
        }
      } else {
        break;
      }
    }
  }
  if (i > 0) {
    logArgs = styles;
    logArgs.unshift(strBuilder.join(""));
  }
  for (; i < args2.length; i++) {
    const arg = args2[i];
    if (!(arg instanceof Symbol)) {
      logArgs.push(arg);
    }
  }
  return logArgs;
};
var computeLoggingArgs = supportsColor ? computeBrowserLoggingArgs : computeNoColorLoggingArgs;
var print = (...args2) => {
  console.log(...computeLoggingArgs(args2));
  vconsoles.forEach((vc) => vc.print(args2));
};
var warn = (...args2) => {
  console.warn(...computeLoggingArgs(args2));
  args2.unshift(ORANGE);
  vconsoles.forEach((vc) => vc.print(args2));
};
var vconsoles = create2();

// node_modules/lib0/iterator.js
var createIterator = (next) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next
});
var iteratorFilter = (iterator, filter) => createIterator(() => {
  let res;
  do {
    res = iterator.next();
  } while (!res.done && !filter(res.value));
  return res;
});
var iteratorMap = (iterator, fmap) => createIterator(() => {
  const { done, value } = iterator.next();
  return { done, value: done ? void 0 : fmap(value) };
});

// node_modules/yjs/dist/yjs.mjs
var DeleteItem = class {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(clock, len) {
    this.clock = clock;
    this.len = len;
  }
};
var DeleteSet = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
};
var iterateDeletedStructs = (transaction, ds, f) => ds.clients.forEach((deletes, clientid) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    transaction.doc.store.clients.get(clientid)
  );
  if (structs != null) {
    const lastStruct = structs[structs.length - 1];
    const clockState = lastStruct.id.clock + lastStruct.length;
    for (let i = 0, del = deletes[i]; i < deletes.length && del.clock < clockState; del = deletes[++i]) {
      iterateStructs(transaction, structs, del.clock, del.len, f);
    }
  }
});
var findIndexDS = (dis, clock) => {
  let left = 0;
  let right = dis.length - 1;
  while (left <= right) {
    const midindex = floor((left + right) / 2);
    const mid = dis[midindex];
    const midclock = mid.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.len) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
  }
  return null;
};
var isDeleted = (ds, id2) => {
  const dis = ds.clients.get(id2.client);
  return dis !== void 0 && findIndexDS(dis, id2.clock) !== null;
};
var sortAndMergeDeleteSet = (ds) => {
  ds.clients.forEach((dels) => {
    dels.sort((a, b) => a.clock - b.clock);
    let i, j;
    for (i = 1, j = 1; i < dels.length; i++) {
      const left = dels[j - 1];
      const right = dels[i];
      if (left.clock + left.len >= right.clock) {
        dels[j - 1] = new DeleteItem(left.clock, max(left.len, right.clock + right.len - left.clock));
      } else {
        if (j < i) {
          dels[j] = right;
        }
        j++;
      }
    }
    dels.length = j;
  });
};
var mergeDeleteSets = (dss) => {
  const merged = new DeleteSet();
  for (let dssI = 0; dssI < dss.length; dssI++) {
    dss[dssI].clients.forEach((delsLeft, client) => {
      if (!merged.clients.has(client)) {
        const dels = delsLeft.slice();
        for (let i = dssI + 1; i < dss.length; i++) {
          appendTo(dels, dss[i].clients.get(client) || []);
        }
        merged.clients.set(client, dels);
      }
    });
  }
  sortAndMergeDeleteSet(merged);
  return merged;
};
var addToDeleteSet = (ds, client, clock, length3) => {
  setIfUndefined(ds.clients, client, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new DeleteItem(clock, length3));
};
var createDeleteSet = () => new DeleteSet();
var createDeleteSetFromStructStore = (ss) => {
  const ds = createDeleteSet();
  ss.clients.forEach((structs, client) => {
    const dsitems = [];
    for (let i = 0; i < structs.length; i++) {
      const struct = structs[i];
      if (struct.deleted) {
        const clock = struct.id.clock;
        let len = struct.length;
        if (i + 1 < structs.length) {
          for (let next = structs[i + 1]; i + 1 < structs.length && next.deleted; next = structs[++i + 1]) {
            len += next.length;
          }
        }
        dsitems.push(new DeleteItem(clock, len));
      }
    }
    if (dsitems.length > 0) {
      ds.clients.set(client, dsitems);
    }
  });
  return ds;
};
var writeDeleteSet = (encoder, ds) => {
  writeVarUint(encoder.restEncoder, ds.clients.size);
  from(ds.clients.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, dsitems]) => {
    encoder.resetDsCurVal();
    writeVarUint(encoder.restEncoder, client);
    const len = dsitems.length;
    writeVarUint(encoder.restEncoder, len);
    for (let i = 0; i < len; i++) {
      const item = dsitems[i];
      encoder.writeDsClock(item.clock);
      encoder.writeDsLen(item.len);
    }
  });
};
var readDeleteSet = (decoder) => {
  const ds = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    if (numberOfDeletes > 0) {
      const dsField = setIfUndefined(ds.clients, client, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let i2 = 0; i2 < numberOfDeletes; i2++) {
        dsField.push(new DeleteItem(decoder.readDsClock(), decoder.readDsLen()));
      }
    }
  }
  return ds;
};
var readAndApplyDeleteSet = (decoder, transaction, store) => {
  const unappliedDS = new DeleteSet();
  const numClients = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numClients; i++) {
    decoder.resetDsCurVal();
    const client = readVarUint(decoder.restDecoder);
    const numberOfDeletes = readVarUint(decoder.restDecoder);
    const structs = store.clients.get(client) || [];
    const state = getState(store, client);
    for (let i2 = 0; i2 < numberOfDeletes; i2++) {
      const clock = decoder.readDsClock();
      const clockEnd = clock + decoder.readDsLen();
      if (clock < state) {
        if (state < clockEnd) {
          addToDeleteSet(unappliedDS, client, state, clockEnd - state);
        }
        let index = findIndexSS(structs, clock);
        let struct = structs[index];
        if (!struct.deleted && struct.id.clock < clock) {
          structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
          index++;
        }
        while (index < structs.length) {
          struct = structs[index++];
          if (struct.id.clock < clockEnd) {
            if (!struct.deleted) {
              if (clockEnd < struct.id.clock + struct.length) {
                structs.splice(index, 0, splitItem(transaction, struct, clockEnd - struct.id.clock));
              }
              struct.delete(transaction);
            }
          } else {
            break;
          }
        }
      } else {
        addToDeleteSet(unappliedDS, client, clock, clockEnd - clock);
      }
    }
  }
  if (unappliedDS.clients.size > 0) {
    const ds = new UpdateEncoderV2();
    writeVarUint(ds.restEncoder, 0);
    writeDeleteSet(ds, unappliedDS);
    return ds.toUint8Array();
  }
  return null;
};
var generateNewClientId = uint32;
var Doc = class _Doc extends ObservableV2 {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid = uuidv4(), collectionid = null, gc = true, gcFilter = () => true, meta = null, autoLoad = false, shouldLoad = true } = {}) {
    super();
    this.gc = gc;
    this.gcFilter = gcFilter;
    this.clientID = generateNewClientId();
    this.guid = guid;
    this.collectionid = collectionid;
    this.share = /* @__PURE__ */ new Map();
    this.store = new StructStore();
    this._transaction = null;
    this._transactionCleanups = [];
    this.subdocs = /* @__PURE__ */ new Set();
    this._item = null;
    this.shouldLoad = shouldLoad;
    this.autoLoad = autoLoad;
    this.meta = meta;
    this.isLoaded = false;
    this.isSynced = false;
    this.isDestroyed = false;
    this.whenLoaded = create4((resolve) => {
      this.on("load", () => {
        this.isLoaded = true;
        resolve(this);
      });
    });
    const provideSyncedPromise = () => create4((resolve) => {
      const eventHandler = (isSynced) => {
        if (isSynced === void 0 || isSynced === true) {
          this.off("sync", eventHandler);
          resolve();
        }
      };
      this.on("sync", eventHandler);
    });
    this.on("sync", (isSynced) => {
      if (isSynced === false && this.isSynced) {
        this.whenSynced = provideSyncedPromise();
      }
      this.isSynced = isSynced === void 0 || isSynced === true;
      if (this.isSynced && !this.isLoaded) {
        this.emit("load", [this]);
      }
    });
    this.whenSynced = provideSyncedPromise();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const item = this._item;
    if (item !== null && !this.shouldLoad) {
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          transaction.subdocsLoaded.add(this);
        },
        null,
        true
      );
    }
    this.shouldLoad = true;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(from(this.subdocs).map((doc2) => doc2.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(f, origin = null) {
    return transact(this, f, origin);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(name, TypeConstructor = (
    /** @type {any} */
    AbstractType
  )) {
    const type = setIfUndefined(this.share, name, () => {
      const t = new TypeConstructor();
      t._integrate(this, null);
      return t;
    });
    const Constr = type.constructor;
    if (TypeConstructor !== AbstractType && Constr !== TypeConstructor) {
      if (Constr === AbstractType) {
        const t = new TypeConstructor();
        t._map = type._map;
        type._map.forEach(
          /** @param {Item?} n */
          (n) => {
            for (; n !== null; n = n.left) {
              n.parent = t;
            }
          }
        );
        t._start = type._start;
        for (let n = t._start; n !== null; n = n.right) {
          n.parent = t;
        }
        t._length = type._length;
        this.share.set(name, t);
        t._integrate(this, null);
        return (
          /** @type {InstanceType<Type>} */
          t
        );
      } else {
        throw new Error(`Type with the name ${name} has already been defined with a different constructor`);
      }
    }
    return (
      /** @type {InstanceType<Type>} */
      type
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(name = "") {
    return (
      /** @type {YArray<T>} */
      this.get(name, YArray)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(name = "") {
    return this.get(name, YText);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(name = "") {
    return (
      /** @type {YMap<T>} */
      this.get(name, YMap)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(name = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(name, YXmlElement)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(name = "") {
    return this.get(name, YXmlFragment);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const doc2 = {};
    this.share.forEach((value, key) => {
      doc2[key] = value.toJSON();
    });
    return doc2;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    this.isDestroyed = true;
    from(this.subdocs).forEach((subdoc) => subdoc.destroy());
    const item = this._item;
    if (item !== null) {
      this._item = null;
      const content = (
        /** @type {ContentDoc} */
        item.content
      );
      content.doc = new _Doc({ guid: this.guid, ...content.opts, shouldLoad: false });
      content.doc._item = item;
      transact(
        /** @type {any} */
        item.parent.doc,
        (transaction) => {
          const doc2 = content.doc;
          if (!item.deleted) {
            transaction.subdocsAdded.add(doc2);
          }
          transaction.subdocsRemoved.add(this);
        },
        null,
        true
      );
    }
    this.emit("destroyed", [true]);
    this.emit("destroy", [this]);
    super.destroy();
  }
};
var DSDecoderV1 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number}
   */
  readDsLen() {
    return readVarUint(this.restDecoder);
  }
};
var UpdateDecoderV1 = class extends DSDecoderV1 {
  /**
   * @return {ID}
   */
  readLeftID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return createID(readVarUint(this.restDecoder), readVarUint(this.restDecoder));
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return readUint8(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readString() {
    return readVarString(this.restDecoder);
  }
  /**
   * @return {boolean} isKey
   */
  readParentInfo() {
    return readVarUint(this.restDecoder) === 1;
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readTypeRef() {
    return readVarUint(this.restDecoder);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number} len
   */
  readLen() {
    return readVarUint(this.restDecoder);
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return copyUint8Array(readVarUint8Array(this.restDecoder));
  }
  /**
   * Legacy implementation uses JSON parse. We use any-decoding in v2.
   *
   * @return {any}
   */
  readJSON() {
    return JSON.parse(readVarString(this.restDecoder));
  }
  /**
   * @return {string}
   */
  readKey() {
    return readVarString(this.restDecoder);
  }
};
var DSDecoderV2 = class {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    this.dsCurrVal = 0;
    this.restDecoder = decoder;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    this.dsCurrVal += readVarUint(this.restDecoder);
    return this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const diff = readVarUint(this.restDecoder) + 1;
    this.dsCurrVal += diff;
    return diff;
  }
};
var UpdateDecoderV2 = class extends DSDecoderV2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(decoder) {
    super(decoder);
    this.keys = [];
    readVarUint(decoder);
    this.keyClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.clientDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.leftClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.rightClockDecoder = new IntDiffOptRleDecoder(readVarUint8Array(decoder));
    this.infoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.stringDecoder = new StringDecoder(readVarUint8Array(decoder));
    this.parentInfoDecoder = new RleDecoder(readVarUint8Array(decoder), readUint8);
    this.typeRefDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
    this.lenDecoder = new UintOptRleDecoder(readVarUint8Array(decoder));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new ID(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new ID(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return readVarUint8Array(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return readAny(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const keyClock = this.keyClockDecoder.read();
    if (keyClock < this.keys.length) {
      return this.keys[keyClock];
    } else {
      const key = this.stringDecoder.read();
      this.keys.push(key);
      return key;
    }
  }
};
var DSEncoderV1 = class {
  constructor() {
    this.restEncoder = createEncoder();
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    writeVarUint(this.restEncoder, clock);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    writeVarUint(this.restEncoder, len);
  }
};
var UpdateEncoderV1 = class extends DSEncoderV1 {
  /**
   * @param {ID} id
   */
  writeLeftID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id2) {
    writeVarUint(this.restEncoder, id2.client);
    writeVarUint(this.restEncoder, id2.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(client) {
    writeVarUint(this.restEncoder, client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    writeUint8(this.restEncoder, info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    writeVarString(this.restEncoder, s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    writeVarUint(this.restEncoder, isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    writeVarUint(this.restEncoder, info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    writeVarUint(this.restEncoder, len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * @param {any} embed
   */
  writeJSON(embed) {
    writeVarString(this.restEncoder, JSON.stringify(embed));
  }
  /**
   * @param {string} key
   */
  writeKey(key) {
    writeVarString(this.restEncoder, key);
  }
};
var DSEncoderV2 = class {
  constructor() {
    this.restEncoder = createEncoder();
    this.dsCurrVal = 0;
  }
  toUint8Array() {
    return toUint8Array(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(clock) {
    const diff = clock - this.dsCurrVal;
    this.dsCurrVal = clock;
    writeVarUint(this.restEncoder, diff);
  }
  /**
   * @param {number} len
   */
  writeDsLen(len) {
    if (len === 0) {
      unexpectedCase();
    }
    writeVarUint(this.restEncoder, len - 1);
    this.dsCurrVal += len;
  }
};
var UpdateEncoderV2 = class extends DSEncoderV2 {
  constructor() {
    super();
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyClock = 0;
    this.keyClockEncoder = new IntDiffOptRleEncoder();
    this.clientEncoder = new UintOptRleEncoder();
    this.leftClockEncoder = new IntDiffOptRleEncoder();
    this.rightClockEncoder = new IntDiffOptRleEncoder();
    this.infoEncoder = new RleEncoder(writeUint8);
    this.stringEncoder = new StringEncoder();
    this.parentInfoEncoder = new RleEncoder(writeUint8);
    this.typeRefEncoder = new UintOptRleEncoder();
    this.lenEncoder = new UintOptRleEncoder();
  }
  toUint8Array() {
    const encoder = createEncoder();
    writeVarUint(encoder, 0);
    writeVarUint8Array(encoder, this.keyClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.clientEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.leftClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.rightClockEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.infoEncoder));
    writeVarUint8Array(encoder, this.stringEncoder.toUint8Array());
    writeVarUint8Array(encoder, toUint8Array(this.parentInfoEncoder));
    writeVarUint8Array(encoder, this.typeRefEncoder.toUint8Array());
    writeVarUint8Array(encoder, this.lenEncoder.toUint8Array());
    writeUint8Array(encoder, toUint8Array(this.restEncoder));
    return toUint8Array(encoder);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(id2) {
    this.clientEncoder.write(id2.client);
    this.leftClockEncoder.write(id2.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(id2) {
    this.clientEncoder.write(id2.client);
    this.rightClockEncoder.write(id2.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(client) {
    this.clientEncoder.write(client);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(info) {
    this.infoEncoder.write(info);
  }
  /**
   * @param {string} s
   */
  writeString(s) {
    this.stringEncoder.write(s);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(isYKey) {
    this.parentInfoEncoder.write(isYKey ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(info) {
    this.typeRefEncoder.write(info);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(len) {
    this.lenEncoder.write(len);
  }
  /**
   * @param {any} any
   */
  writeAny(any2) {
    writeAny(this.restEncoder, any2);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(buf) {
    writeVarUint8Array(this.restEncoder, buf);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(embed) {
    writeAny(this.restEncoder, embed);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(key) {
    const clock = this.keyMap.get(key);
    if (clock === void 0) {
      this.keyClockEncoder.write(this.keyClock++);
      this.stringEncoder.write(key);
    } else {
      this.keyClockEncoder.write(clock);
    }
  }
};
var writeStructs = (encoder, structs, client, clock) => {
  clock = max(clock, structs[0].id.clock);
  const startNewStructs = findIndexSS(structs, clock);
  writeVarUint(encoder.restEncoder, structs.length - startNewStructs);
  encoder.writeClient(client);
  writeVarUint(encoder.restEncoder, clock);
  const firstStruct = structs[startNewStructs];
  firstStruct.write(encoder, clock - firstStruct.id.clock);
  for (let i = startNewStructs + 1; i < structs.length; i++) {
    structs[i].write(encoder, 0);
  }
};
var writeClientsStructs = (encoder, store, _sm) => {
  const sm = /* @__PURE__ */ new Map();
  _sm.forEach((clock, client) => {
    if (getState(store, client) > clock) {
      sm.set(client, clock);
    }
  });
  getStateVector(store).forEach((_clock, client) => {
    if (!_sm.has(client)) {
      sm.set(client, 0);
    }
  });
  writeVarUint(encoder.restEncoder, sm.size);
  from(sm.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeStructs(
      encoder,
      /** @type {Array<GC|Item>} */
      store.clients.get(client),
      client,
      clock
    );
  });
};
var readClientsStructRefs = (decoder, doc2) => {
  const clientRefs = create();
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const refs = new Array(numberOfStructs);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    clientRefs.set(client, { i: 0, refs });
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      switch (BITS5 & info) {
        case 0: {
          const len = decoder.readLen();
          refs[i2] = new GC(createID(client, clock), len);
          clock += len;
          break;
        }
        case 10: {
          const len = readVarUint(decoder.restDecoder);
          refs[i2] = new Skip(createID(client, clock), len);
          clock += len;
          break;
        }
        default: {
          const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
          const struct = new Item(
            createID(client, clock),
            null,
            // left
            (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
            // origin
            null,
            // right
            (info & BIT7) === BIT7 ? decoder.readRightID() : null,
            // right origin
            cantCopyParentInfo ? decoder.readParentInfo() ? doc2.get(decoder.readString()) : decoder.readLeftID() : null,
            // parent
            cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
            // parentSub
            readItemContent(decoder, info)
            // item content
          );
          refs[i2] = struct;
          clock += struct.length;
        }
      }
    }
  }
  return clientRefs;
};
var integrateStructs = (transaction, store, clientsStructRefs) => {
  const stack = [];
  let clientsStructRefsIds = from(clientsStructRefs.keys()).sort((a, b) => a - b);
  if (clientsStructRefsIds.length === 0) {
    return null;
  }
  const getNextStructTarget = () => {
    if (clientsStructRefsIds.length === 0) {
      return null;
    }
    let nextStructsTarget = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1])
    );
    while (nextStructsTarget.refs.length === nextStructsTarget.i) {
      clientsStructRefsIds.pop();
      if (clientsStructRefsIds.length > 0) {
        nextStructsTarget = /** @type {{i:number,refs:Array<GC|Item>}} */
        clientsStructRefs.get(clientsStructRefsIds[clientsStructRefsIds.length - 1]);
      } else {
        return null;
      }
    }
    return nextStructsTarget;
  };
  let curStructsTarget = getNextStructTarget();
  if (curStructsTarget === null) {
    return null;
  }
  const restStructs = new StructStore();
  const missingSV = /* @__PURE__ */ new Map();
  const updateMissingSv = (client, clock) => {
    const mclock = missingSV.get(client);
    if (mclock == null || mclock > clock) {
      missingSV.set(client, clock);
    }
  };
  let stackHead = (
    /** @type {any} */
    curStructsTarget.refs[
      /** @type {any} */
      curStructsTarget.i++
    ]
  );
  const state = /* @__PURE__ */ new Map();
  const addStackToRestSS = () => {
    for (const item of stack) {
      const client = item.id.client;
      const inapplicableItems = clientsStructRefs.get(client);
      if (inapplicableItems) {
        inapplicableItems.i--;
        restStructs.clients.set(client, inapplicableItems.refs.slice(inapplicableItems.i));
        clientsStructRefs.delete(client);
        inapplicableItems.i = 0;
        inapplicableItems.refs = [];
      } else {
        restStructs.clients.set(client, [item]);
      }
      clientsStructRefsIds = clientsStructRefsIds.filter((c) => c !== client);
    }
    stack.length = 0;
  };
  while (true) {
    if (stackHead.constructor !== Skip) {
      const localClock = setIfUndefined(state, stackHead.id.client, () => getState(store, stackHead.id.client));
      const offset = localClock - stackHead.id.clock;
      if (offset < 0) {
        stack.push(stackHead);
        updateMissingSv(stackHead.id.client, stackHead.id.clock - 1);
        addStackToRestSS();
      } else {
        const missing = stackHead.getMissing(transaction, store);
        if (missing !== null) {
          stack.push(stackHead);
          const structRefs = clientsStructRefs.get(
            /** @type {number} */
            missing
          ) || { refs: [], i: 0 };
          if (structRefs.refs.length === structRefs.i) {
            updateMissingSv(
              /** @type {number} */
              missing,
              getState(store, missing)
            );
            addStackToRestSS();
          } else {
            stackHead = structRefs.refs[structRefs.i++];
            continue;
          }
        } else if (offset === 0 || offset < stackHead.length) {
          stackHead.integrate(transaction, offset);
          state.set(stackHead.id.client, stackHead.id.clock + stackHead.length);
        }
      }
    }
    if (stack.length > 0) {
      stackHead = /** @type {GC|Item} */
      stack.pop();
    } else if (curStructsTarget !== null && curStructsTarget.i < curStructsTarget.refs.length) {
      stackHead = /** @type {GC|Item} */
      curStructsTarget.refs[curStructsTarget.i++];
    } else {
      curStructsTarget = getNextStructTarget();
      if (curStructsTarget === null) {
        break;
      } else {
        stackHead = /** @type {GC|Item} */
        curStructsTarget.refs[curStructsTarget.i++];
      }
    }
  }
  if (restStructs.clients.size > 0) {
    const encoder = new UpdateEncoderV2();
    writeClientsStructs(encoder, restStructs, /* @__PURE__ */ new Map());
    writeVarUint(encoder.restEncoder, 0);
    return { missing: missingSV, update: encoder.toUint8Array() };
  }
  return null;
};
var writeStructsFromTransaction = (encoder, transaction) => writeClientsStructs(encoder, transaction.doc.store, transaction.beforeState);
var readUpdateV2 = (decoder, ydoc, transactionOrigin, structDecoder = new UpdateDecoderV2(decoder)) => transact(ydoc, (transaction) => {
  transaction.local = false;
  let retry2 = false;
  const doc2 = transaction.doc;
  const store = doc2.store;
  const ss = readClientsStructRefs(structDecoder, doc2);
  const restStructs = integrateStructs(transaction, store, ss);
  const pending = store.pendingStructs;
  if (pending) {
    for (const [client, clock] of pending.missing) {
      if (clock < getState(store, client)) {
        retry2 = true;
        break;
      }
    }
    if (restStructs) {
      for (const [client, clock] of restStructs.missing) {
        const mclock = pending.missing.get(client);
        if (mclock == null || mclock > clock) {
          pending.missing.set(client, clock);
        }
      }
      pending.update = mergeUpdatesV2([pending.update, restStructs.update]);
    }
  } else {
    store.pendingStructs = restStructs;
  }
  const dsRest = readAndApplyDeleteSet(structDecoder, transaction, store);
  if (store.pendingDs) {
    const pendingDSUpdate = new UpdateDecoderV2(createDecoder(store.pendingDs));
    readVarUint(pendingDSUpdate.restDecoder);
    const dsRest2 = readAndApplyDeleteSet(pendingDSUpdate, transaction, store);
    if (dsRest && dsRest2) {
      store.pendingDs = mergeUpdatesV2([dsRest, dsRest2]);
    } else {
      store.pendingDs = dsRest || dsRest2;
    }
  } else {
    store.pendingDs = dsRest;
  }
  if (retry2) {
    const update = (
      /** @type {{update: Uint8Array}} */
      store.pendingStructs.update
    );
    store.pendingStructs = null;
    applyUpdateV2(transaction.doc, update);
  }
}, transactionOrigin, false);
var applyUpdateV2 = (ydoc, update, transactionOrigin, YDecoder = UpdateDecoderV2) => {
  const decoder = createDecoder(update);
  readUpdateV2(decoder, ydoc, transactionOrigin, new YDecoder(decoder));
};
var applyUpdate = (ydoc, update, transactionOrigin) => applyUpdateV2(ydoc, update, transactionOrigin, UpdateDecoderV1);
var writeStateAsUpdate = (encoder, doc2, targetStateVector = /* @__PURE__ */ new Map()) => {
  writeClientsStructs(encoder, doc2.store, targetStateVector);
  writeDeleteSet(encoder, createDeleteSetFromStructStore(doc2.store));
};
var encodeStateAsUpdateV2 = (doc2, encodedTargetStateVector = new Uint8Array([0]), encoder = new UpdateEncoderV2()) => {
  const targetStateVector = decodeStateVector(encodedTargetStateVector);
  writeStateAsUpdate(encoder, doc2, targetStateVector);
  const updates = [encoder.toUint8Array()];
  if (doc2.store.pendingDs) {
    updates.push(doc2.store.pendingDs);
  }
  if (doc2.store.pendingStructs) {
    updates.push(diffUpdateV2(doc2.store.pendingStructs.update, encodedTargetStateVector));
  }
  if (updates.length > 1) {
    if (encoder.constructor === UpdateEncoderV1) {
      return mergeUpdates(updates.map((update, i) => i === 0 ? update : convertUpdateFormatV2ToV1(update)));
    } else if (encoder.constructor === UpdateEncoderV2) {
      return mergeUpdatesV2(updates);
    }
  }
  return updates[0];
};
var encodeStateAsUpdate = (doc2, encodedTargetStateVector) => encodeStateAsUpdateV2(doc2, encodedTargetStateVector, new UpdateEncoderV1());
var readStateVector = (decoder) => {
  const ss = /* @__PURE__ */ new Map();
  const ssLength = readVarUint(decoder.restDecoder);
  for (let i = 0; i < ssLength; i++) {
    const client = readVarUint(decoder.restDecoder);
    const clock = readVarUint(decoder.restDecoder);
    ss.set(client, clock);
  }
  return ss;
};
var decodeStateVector = (decodedState) => readStateVector(new DSDecoderV1(createDecoder(decodedState)));
var writeStateVector = (encoder, sv) => {
  writeVarUint(encoder.restEncoder, sv.size);
  from(sv.entries()).sort((a, b) => b[0] - a[0]).forEach(([client, clock]) => {
    writeVarUint(encoder.restEncoder, client);
    writeVarUint(encoder.restEncoder, clock);
  });
  return encoder;
};
var writeDocumentStateVector = (encoder, doc2) => writeStateVector(encoder, getStateVector(doc2.store));
var encodeStateVectorV2 = (doc2, encoder = new DSEncoderV2()) => {
  if (doc2 instanceof Map) {
    writeStateVector(encoder, doc2);
  } else {
    writeDocumentStateVector(encoder, doc2);
  }
  return encoder.toUint8Array();
};
var encodeStateVector = (doc2) => encodeStateVectorV2(doc2, new DSEncoderV1());
var EventHandler = class {
  constructor() {
    this.l = [];
  }
};
var createEventHandler = () => new EventHandler();
var addEventHandlerListener = (eventHandler, f) => eventHandler.l.push(f);
var removeEventHandlerListener = (eventHandler, f) => {
  const l = eventHandler.l;
  const len = l.length;
  eventHandler.l = l.filter((g) => f !== g);
  if (len === eventHandler.l.length) {
    console.error("[yjs] Tried to remove event handler that doesn't exist.");
  }
};
var callEventHandlerListeners = (eventHandler, arg0, arg1) => callAll(eventHandler.l, [arg0, arg1]);
var ID = class {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(client, clock) {
    this.client = client;
    this.clock = clock;
  }
};
var compareIDs = (a, b) => a === b || a !== null && b !== null && a.client === b.client && a.clock === b.clock;
var createID = (client, clock) => new ID(client, clock);
var findRootTypeKey = (type) => {
  for (const [key, value] of type.doc.share.entries()) {
    if (value === type) {
      return key;
    }
  }
  throw unexpectedCase();
};
var Snapshot = class {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(ds, sv) {
    this.ds = ds;
    this.sv = sv;
  }
};
var createSnapshot = (ds, sm) => new Snapshot(ds, sm);
var emptySnapshot = createSnapshot(createDeleteSet(), /* @__PURE__ */ new Map());
var isVisible = (item, snapshot) => snapshot === void 0 ? !item.deleted : snapshot.sv.has(item.id.client) && (snapshot.sv.get(item.id.client) || 0) > item.id.clock && !isDeleted(snapshot.ds, item.id);
var splitSnapshotAffectedStructs = (transaction, snapshot) => {
  const meta = setIfUndefined(transaction.meta, splitSnapshotAffectedStructs, create2);
  const store = transaction.doc.store;
  if (!meta.has(snapshot)) {
    snapshot.sv.forEach((clock, client) => {
      if (clock < getState(store, client)) {
        getItemCleanStart(transaction, createID(client, clock));
      }
    });
    iterateDeletedStructs(transaction, snapshot.ds, (_item) => {
    });
    meta.add(snapshot);
  }
};
var StructStore = class {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
    this.pendingStructs = null;
    this.pendingDs = null;
  }
};
var getStateVector = (store) => {
  const sm = /* @__PURE__ */ new Map();
  store.clients.forEach((structs, client) => {
    const struct = structs[structs.length - 1];
    sm.set(client, struct.id.clock + struct.length);
  });
  return sm;
};
var getState = (store, client) => {
  const structs = store.clients.get(client);
  if (structs === void 0) {
    return 0;
  }
  const lastStruct = structs[structs.length - 1];
  return lastStruct.id.clock + lastStruct.length;
};
var addStruct = (store, struct) => {
  let structs = store.clients.get(struct.id.client);
  if (structs === void 0) {
    structs = [];
    store.clients.set(struct.id.client, structs);
  } else {
    const lastStruct = structs[structs.length - 1];
    if (lastStruct.id.clock + lastStruct.length !== struct.id.clock) {
      throw unexpectedCase();
    }
  }
  structs.push(struct);
};
var findIndexSS = (structs, clock) => {
  let left = 0;
  let right = structs.length - 1;
  let mid = structs[right];
  let midclock = mid.id.clock;
  if (midclock === clock) {
    return right;
  }
  let midindex = floor(clock / (midclock + mid.length - 1) * right);
  while (left <= right) {
    mid = structs[midindex];
    midclock = mid.id.clock;
    if (midclock <= clock) {
      if (clock < midclock + mid.length) {
        return midindex;
      }
      left = midindex + 1;
    } else {
      right = midindex - 1;
    }
    midindex = floor((left + right) / 2);
  }
  throw unexpectedCase();
};
var find = (store, id2) => {
  const structs = store.clients.get(id2.client);
  return structs[findIndexSS(structs, id2.clock)];
};
var getItem = (
  /** @type {function(StructStore,ID):Item} */
  find
);
var findIndexCleanStart = (transaction, structs, clock) => {
  const index = findIndexSS(structs, clock);
  const struct = structs[index];
  if (struct.id.clock < clock && struct instanceof Item) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, clock - struct.id.clock));
    return index + 1;
  }
  return index;
};
var getItemCleanStart = (transaction, id2) => {
  const structs = (
    /** @type {Array<Item>} */
    transaction.doc.store.clients.get(id2.client)
  );
  return structs[findIndexCleanStart(transaction, structs, id2.clock)];
};
var getItemCleanEnd = (transaction, store, id2) => {
  const structs = store.clients.get(id2.client);
  const index = findIndexSS(structs, id2.clock);
  const struct = structs[index];
  if (id2.clock !== struct.id.clock + struct.length - 1 && struct.constructor !== GC) {
    structs.splice(index + 1, 0, splitItem(transaction, struct, id2.clock - struct.id.clock + 1));
  }
  return struct;
};
var replaceStruct = (store, struct, newStruct) => {
  const structs = (
    /** @type {Array<GC|Item>} */
    store.clients.get(struct.id.client)
  );
  structs[findIndexSS(structs, struct.id.clock)] = newStruct;
};
var iterateStructs = (transaction, structs, clockStart, len, f) => {
  if (len === 0) {
    return;
  }
  const clockEnd = clockStart + len;
  let index = findIndexCleanStart(transaction, structs, clockStart);
  let struct;
  do {
    struct = structs[index++];
    if (clockEnd < struct.id.clock + struct.length) {
      findIndexCleanStart(transaction, structs, clockEnd);
    }
    f(struct);
  } while (index < structs.length && structs[index].id.clock < clockEnd);
};
var Transaction = class {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(doc2, origin, local) {
    this.doc = doc2;
    this.deleteSet = new DeleteSet();
    this.beforeState = getStateVector(doc2.store);
    this.afterState = /* @__PURE__ */ new Map();
    this.changed = /* @__PURE__ */ new Map();
    this.changedParentTypes = /* @__PURE__ */ new Map();
    this._mergeStructs = [];
    this.origin = origin;
    this.meta = /* @__PURE__ */ new Map();
    this.local = local;
    this.subdocsAdded = /* @__PURE__ */ new Set();
    this.subdocsRemoved = /* @__PURE__ */ new Set();
    this.subdocsLoaded = /* @__PURE__ */ new Set();
    this._needFormattingCleanup = false;
  }
};
var writeUpdateMessageFromTransaction = (encoder, transaction) => {
  if (transaction.deleteSet.clients.size === 0 && !any(transaction.afterState, (clock, client) => transaction.beforeState.get(client) !== clock)) {
    return false;
  }
  sortAndMergeDeleteSet(transaction.deleteSet);
  writeStructsFromTransaction(encoder, transaction);
  writeDeleteSet(encoder, transaction.deleteSet);
  return true;
};
var addChangedTypeToTransaction = (transaction, type, parentSub) => {
  const item = type._item;
  if (item === null || item.id.clock < (transaction.beforeState.get(item.id.client) || 0) && !item.deleted) {
    setIfUndefined(transaction.changed, type, create2).add(parentSub);
  }
};
var tryToMergeWithLefts = (structs, pos) => {
  let right = structs[pos];
  let left = structs[pos - 1];
  let i = pos;
  for (; i > 0; right = left, left = structs[--i - 1]) {
    if (left.deleted === right.deleted && left.constructor === right.constructor) {
      if (left.mergeWith(right)) {
        if (right instanceof Item && right.parentSub !== null && /** @type {AbstractType<any>} */
        right.parent._map.get(right.parentSub) === right) {
          right.parent._map.set(
            right.parentSub,
            /** @type {Item} */
            left
          );
        }
        continue;
      }
    }
    break;
  }
  const merged = pos - i;
  if (merged) {
    structs.splice(pos + 1 - merged, merged);
  }
  return merged;
};
var tryGcDeleteSet = (ds, store, gcFilter) => {
  for (const [client, deleteItems] of ds.clients.entries()) {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const endDeleteItemClock = deleteItem.clock + deleteItem.len;
      for (let si = findIndexSS(structs, deleteItem.clock), struct = structs[si]; si < structs.length && struct.id.clock < endDeleteItemClock; struct = structs[++si]) {
        const struct2 = structs[si];
        if (deleteItem.clock + deleteItem.len <= struct2.id.clock) {
          break;
        }
        if (struct2 instanceof Item && struct2.deleted && !struct2.keep && gcFilter(struct2)) {
          struct2.gc(store, false);
        }
      }
    }
  }
};
var tryMergeDeleteSet = (ds, store) => {
  ds.clients.forEach((deleteItems, client) => {
    const structs = (
      /** @type {Array<GC|Item>} */
      store.clients.get(client)
    );
    for (let di = deleteItems.length - 1; di >= 0; di--) {
      const deleteItem = deleteItems[di];
      const mostRightIndexToCheck = min(structs.length - 1, 1 + findIndexSS(structs, deleteItem.clock + deleteItem.len - 1));
      for (let si = mostRightIndexToCheck, struct = structs[si]; si > 0 && struct.id.clock >= deleteItem.clock; struct = structs[si]) {
        si -= 1 + tryToMergeWithLefts(structs, si);
      }
    }
  });
};
var cleanupTransactions = (transactionCleanups, i) => {
  if (i < transactionCleanups.length) {
    const transaction = transactionCleanups[i];
    const doc2 = transaction.doc;
    const store = doc2.store;
    const ds = transaction.deleteSet;
    const mergeStructs = transaction._mergeStructs;
    try {
      sortAndMergeDeleteSet(ds);
      transaction.afterState = getStateVector(transaction.doc.store);
      doc2.emit("beforeObserverCalls", [transaction, doc2]);
      const fs = [];
      transaction.changed.forEach(
        (subs, itemtype) => fs.push(() => {
          if (itemtype._item === null || !itemtype._item.deleted) {
            itemtype._callObserver(transaction, subs);
          }
        })
      );
      fs.push(() => {
        transaction.changedParentTypes.forEach((events, type) => {
          if (type._dEH.l.length > 0 && (type._item === null || !type._item.deleted)) {
            events = events.filter(
              (event) => event.target._item === null || !event.target._item.deleted
            );
            events.forEach((event) => {
              event.currentTarget = type;
              event._path = null;
            });
            events.sort((event1, event2) => event1.path.length - event2.path.length);
            fs.push(() => {
              callEventHandlerListeners(type._dEH, events, transaction);
            });
          }
        });
        fs.push(() => doc2.emit("afterTransaction", [transaction, doc2]));
        fs.push(() => {
          if (transaction._needFormattingCleanup) {
            cleanupYTextAfterTransaction(transaction);
          }
        });
      });
      callAll(fs, []);
    } finally {
      if (doc2.gc) {
        tryGcDeleteSet(ds, store, doc2.gcFilter);
      }
      tryMergeDeleteSet(ds, store);
      transaction.afterState.forEach((clock, client) => {
        const beforeClock = transaction.beforeState.get(client) || 0;
        if (beforeClock !== clock) {
          const structs = (
            /** @type {Array<GC|Item>} */
            store.clients.get(client)
          );
          const firstChangePos = max(findIndexSS(structs, beforeClock), 1);
          for (let i2 = structs.length - 1; i2 >= firstChangePos; ) {
            i2 -= 1 + tryToMergeWithLefts(structs, i2);
          }
        }
      });
      for (let i2 = mergeStructs.length - 1; i2 >= 0; i2--) {
        const { client, clock } = mergeStructs[i2].id;
        const structs = (
          /** @type {Array<GC|Item>} */
          store.clients.get(client)
        );
        const replacedStructPos = findIndexSS(structs, clock);
        if (replacedStructPos + 1 < structs.length) {
          if (tryToMergeWithLefts(structs, replacedStructPos + 1) > 1) {
            continue;
          }
        }
        if (replacedStructPos > 0) {
          tryToMergeWithLefts(structs, replacedStructPos);
        }
      }
      if (!transaction.local && transaction.afterState.get(doc2.clientID) !== transaction.beforeState.get(doc2.clientID)) {
        print(ORANGE, BOLD, "[yjs] ", UNBOLD, RED, "Changed the client-id because another client seems to be using it.");
        doc2.clientID = generateNewClientId();
      }
      doc2.emit("afterTransactionCleanup", [transaction, doc2]);
      if (doc2._observers.has("update")) {
        const encoder = new UpdateEncoderV1();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("update", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      if (doc2._observers.has("updateV2")) {
        const encoder = new UpdateEncoderV2();
        const hasContent2 = writeUpdateMessageFromTransaction(encoder, transaction);
        if (hasContent2) {
          doc2.emit("updateV2", [encoder.toUint8Array(), transaction.origin, doc2, transaction]);
        }
      }
      const { subdocsAdded, subdocsLoaded, subdocsRemoved } = transaction;
      if (subdocsAdded.size > 0 || subdocsRemoved.size > 0 || subdocsLoaded.size > 0) {
        subdocsAdded.forEach((subdoc) => {
          subdoc.clientID = doc2.clientID;
          if (subdoc.collectionid == null) {
            subdoc.collectionid = doc2.collectionid;
          }
          doc2.subdocs.add(subdoc);
        });
        subdocsRemoved.forEach((subdoc) => doc2.subdocs.delete(subdoc));
        doc2.emit("subdocs", [{ loaded: subdocsLoaded, added: subdocsAdded, removed: subdocsRemoved }, doc2, transaction]);
        subdocsRemoved.forEach((subdoc) => subdoc.destroy());
      }
      if (transactionCleanups.length <= i + 1) {
        doc2._transactionCleanups = [];
        doc2.emit("afterAllTransactions", [doc2, transactionCleanups]);
      } else {
        cleanupTransactions(transactionCleanups, i + 1);
      }
    }
  }
};
var transact = (doc2, f, origin = null, local = true) => {
  const transactionCleanups = doc2._transactionCleanups;
  let initialCall = false;
  let result = null;
  if (doc2._transaction === null) {
    initialCall = true;
    doc2._transaction = new Transaction(doc2, origin, local);
    transactionCleanups.push(doc2._transaction);
    if (transactionCleanups.length === 1) {
      doc2.emit("beforeAllTransactions", [doc2]);
    }
    doc2.emit("beforeTransaction", [doc2._transaction, doc2]);
  }
  try {
    result = f(doc2._transaction);
  } finally {
    if (initialCall) {
      const finishCleanup = doc2._transaction === transactionCleanups[0];
      doc2._transaction = null;
      if (finishCleanup) {
        cleanupTransactions(transactionCleanups, 0);
      }
    }
  }
  return result;
};
function* lazyStructReaderGenerator(decoder) {
  const numOfStateUpdates = readVarUint(decoder.restDecoder);
  for (let i = 0; i < numOfStateUpdates; i++) {
    const numberOfStructs = readVarUint(decoder.restDecoder);
    const client = decoder.readClient();
    let clock = readVarUint(decoder.restDecoder);
    for (let i2 = 0; i2 < numberOfStructs; i2++) {
      const info = decoder.readInfo();
      if (info === 10) {
        const len = readVarUint(decoder.restDecoder);
        yield new Skip(createID(client, clock), len);
        clock += len;
      } else if ((BITS5 & info) !== 0) {
        const cantCopyParentInfo = (info & (BIT7 | BIT8)) === 0;
        const struct = new Item(
          createID(client, clock),
          null,
          // left
          (info & BIT8) === BIT8 ? decoder.readLeftID() : null,
          // origin
          null,
          // right
          (info & BIT7) === BIT7 ? decoder.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          cantCopyParentInfo ? decoder.readParentInfo() ? decoder.readString() : decoder.readLeftID() : null,
          // parent
          cantCopyParentInfo && (info & BIT6) === BIT6 ? decoder.readString() : null,
          // parentSub
          readItemContent(decoder, info)
          // item content
        );
        yield struct;
        clock += struct.length;
      } else {
        const len = decoder.readLen();
        yield new GC(createID(client, clock), len);
        clock += len;
      }
    }
  }
}
var LazyStructReader = class {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(decoder, filterSkips) {
    this.gen = lazyStructReaderGenerator(decoder);
    this.curr = null;
    this.done = false;
    this.filterSkips = filterSkips;
    this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do {
      this.curr = this.gen.next().value || null;
    } while (this.filterSkips && this.curr !== null && this.curr.constructor === Skip);
    return this.curr;
  }
};
var LazyStructWriter = class {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(encoder) {
    this.currClient = 0;
    this.startClock = 0;
    this.written = 0;
    this.encoder = encoder;
    this.clientStructs = [];
  }
};
var mergeUpdates = (updates) => mergeUpdatesV2(updates, UpdateDecoderV1, UpdateEncoderV1);
var sliceStruct = (left, diff) => {
  if (left.constructor === GC) {
    const { client, clock } = left.id;
    return new GC(createID(client, clock + diff), left.length - diff);
  } else if (left.constructor === Skip) {
    const { client, clock } = left.id;
    return new Skip(createID(client, clock + diff), left.length - diff);
  } else {
    const leftItem = (
      /** @type {Item} */
      left
    );
    const { client, clock } = leftItem.id;
    return new Item(
      createID(client, clock + diff),
      null,
      createID(client, clock + diff - 1),
      null,
      leftItem.rightOrigin,
      leftItem.parent,
      leftItem.parentSub,
      leftItem.content.splice(diff)
    );
  }
};
var mergeUpdatesV2 = (updates, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  if (updates.length === 1) {
    return updates[0];
  }
  const updateDecoders = updates.map((update) => new YDecoder(createDecoder(update)));
  let lazyStructDecoders = updateDecoders.map((decoder) => new LazyStructReader(decoder, true));
  let currWrite = null;
  const updateEncoder = new YEncoder();
  const lazyStructEncoder = new LazyStructWriter(updateEncoder);
  while (true) {
    lazyStructDecoders = lazyStructDecoders.filter((dec) => dec.curr !== null);
    lazyStructDecoders.sort(
      /** @type {function(any,any):number} */
      (dec1, dec2) => {
        if (dec1.curr.id.client === dec2.curr.id.client) {
          const clockDiff = dec1.curr.id.clock - dec2.curr.id.clock;
          if (clockDiff === 0) {
            return dec1.curr.constructor === dec2.curr.constructor ? 0 : dec1.curr.constructor === Skip ? 1 : -1;
          } else {
            return clockDiff;
          }
        } else {
          return dec2.curr.id.client - dec1.curr.id.client;
        }
      }
    );
    if (lazyStructDecoders.length === 0) {
      break;
    }
    const currDecoder = lazyStructDecoders[0];
    const firstClient = (
      /** @type {Item | GC} */
      currDecoder.curr.id.client
    );
    if (currWrite !== null) {
      let curr = (
        /** @type {Item | GC | null} */
        currDecoder.curr
      );
      let iterated = false;
      while (curr !== null && curr.id.clock + curr.length <= currWrite.struct.id.clock + currWrite.struct.length && curr.id.client >= currWrite.struct.id.client) {
        curr = currDecoder.next();
        iterated = true;
      }
      if (curr === null || // current decoder is empty
      curr.id.client !== firstClient || // check whether there is another decoder that has has updates from `firstClient`
      iterated && curr.id.clock > currWrite.struct.id.clock + currWrite.struct.length) {
        continue;
      }
      if (firstClient !== currWrite.struct.id.client) {
        writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
        currWrite = { struct: curr, offset: 0 };
        currDecoder.next();
      } else {
        if (currWrite.struct.id.clock + currWrite.struct.length < curr.id.clock) {
          if (currWrite.struct.constructor === Skip) {
            currWrite.struct.length = curr.id.clock + curr.length - currWrite.struct.id.clock;
          } else {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            const diff = curr.id.clock - currWrite.struct.id.clock - currWrite.struct.length;
            const struct = new Skip(createID(firstClient, currWrite.struct.id.clock + currWrite.struct.length), diff);
            currWrite = { struct, offset: 0 };
          }
        } else {
          const diff = currWrite.struct.id.clock + currWrite.struct.length - curr.id.clock;
          if (diff > 0) {
            if (currWrite.struct.constructor === Skip) {
              currWrite.struct.length -= diff;
            } else {
              curr = sliceStruct(curr, diff);
            }
          }
          if (!currWrite.struct.mergeWith(
            /** @type {any} */
            curr
          )) {
            writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
            currWrite = { struct: curr, offset: 0 };
            currDecoder.next();
          }
        }
      }
    } else {
      currWrite = { struct: (
        /** @type {Item | GC} */
        currDecoder.curr
      ), offset: 0 };
      currDecoder.next();
    }
    for (let next = currDecoder.curr; next !== null && next.id.client === firstClient && next.id.clock === currWrite.struct.id.clock + currWrite.struct.length && next.constructor !== Skip; next = currDecoder.next()) {
      writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
      currWrite = { struct: next, offset: 0 };
    }
  }
  if (currWrite !== null) {
    writeStructToLazyStructWriter(lazyStructEncoder, currWrite.struct, currWrite.offset);
    currWrite = null;
  }
  finishLazyStructWriting(lazyStructEncoder);
  const dss = updateDecoders.map((decoder) => readDeleteSet(decoder));
  const ds = mergeDeleteSets(dss);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
var diffUpdateV2 = (update, sv, YDecoder = UpdateDecoderV2, YEncoder = UpdateEncoderV2) => {
  const state = decodeStateVector(sv);
  const encoder = new YEncoder();
  const lazyStructWriter = new LazyStructWriter(encoder);
  const decoder = new YDecoder(createDecoder(update));
  const reader = new LazyStructReader(decoder, false);
  while (reader.curr) {
    const curr = reader.curr;
    const currClient = curr.id.client;
    const svClock = state.get(currClient) || 0;
    if (reader.curr.constructor === Skip) {
      reader.next();
      continue;
    }
    if (curr.id.clock + curr.length > svClock) {
      writeStructToLazyStructWriter(lazyStructWriter, curr, max(svClock - curr.id.clock, 0));
      reader.next();
      while (reader.curr && reader.curr.id.client === currClient) {
        writeStructToLazyStructWriter(lazyStructWriter, reader.curr, 0);
        reader.next();
      }
    } else {
      while (reader.curr && reader.curr.id.client === currClient && reader.curr.id.clock + reader.curr.length <= svClock) {
        reader.next();
      }
    }
  }
  finishLazyStructWriting(lazyStructWriter);
  const ds = readDeleteSet(decoder);
  writeDeleteSet(encoder, ds);
  return encoder.toUint8Array();
};
var flushLazyStructWriter = (lazyWriter) => {
  if (lazyWriter.written > 0) {
    lazyWriter.clientStructs.push({ written: lazyWriter.written, restEncoder: toUint8Array(lazyWriter.encoder.restEncoder) });
    lazyWriter.encoder.restEncoder = createEncoder();
    lazyWriter.written = 0;
  }
};
var writeStructToLazyStructWriter = (lazyWriter, struct, offset) => {
  if (lazyWriter.written > 0 && lazyWriter.currClient !== struct.id.client) {
    flushLazyStructWriter(lazyWriter);
  }
  if (lazyWriter.written === 0) {
    lazyWriter.currClient = struct.id.client;
    lazyWriter.encoder.writeClient(struct.id.client);
    writeVarUint(lazyWriter.encoder.restEncoder, struct.id.clock + offset);
  }
  struct.write(lazyWriter.encoder, offset);
  lazyWriter.written++;
};
var finishLazyStructWriting = (lazyWriter) => {
  flushLazyStructWriter(lazyWriter);
  const restEncoder = lazyWriter.encoder.restEncoder;
  writeVarUint(restEncoder, lazyWriter.clientStructs.length);
  for (let i = 0; i < lazyWriter.clientStructs.length; i++) {
    const partStructs = lazyWriter.clientStructs[i];
    writeVarUint(restEncoder, partStructs.written);
    writeUint8Array(restEncoder, partStructs.restEncoder);
  }
};
var convertUpdateFormat = (update, blockTransformer, YDecoder, YEncoder) => {
  const updateDecoder = new YDecoder(createDecoder(update));
  const lazyDecoder = new LazyStructReader(updateDecoder, false);
  const updateEncoder = new YEncoder();
  const lazyWriter = new LazyStructWriter(updateEncoder);
  for (let curr = lazyDecoder.curr; curr !== null; curr = lazyDecoder.next()) {
    writeStructToLazyStructWriter(lazyWriter, blockTransformer(curr), 0);
  }
  finishLazyStructWriting(lazyWriter);
  const ds = readDeleteSet(updateDecoder);
  writeDeleteSet(updateEncoder, ds);
  return updateEncoder.toUint8Array();
};
var convertUpdateFormatV2ToV1 = (update) => convertUpdateFormat(update, id, UpdateDecoderV2, UpdateEncoderV1);
var errorComputeChanges = "You must not compute changes after the event-handler fired.";
var YEvent = class {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(target, transaction) {
    this.target = target;
    this.currentTarget = target;
    this.transaction = transaction;
    this._changes = null;
    this._keys = null;
    this._delta = null;
    this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = getPathTo(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(struct) {
    return isDeleted(this.transaction.deleteSet, struct.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create3(errorComputeChanges);
      }
      const keys3 = /* @__PURE__ */ new Map();
      const target = this.target;
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      changed.forEach((key) => {
        if (key !== null) {
          const item = (
            /** @type {Item} */
            target._map.get(key)
          );
          let action;
          let oldValue;
          if (this.adds(item)) {
            let prev = item.left;
            while (prev !== null && this.adds(prev)) {
              prev = prev.left;
            }
            if (this.deletes(item)) {
              if (prev !== null && this.deletes(prev)) {
                action = "delete";
                oldValue = last(prev.content.getContent());
              } else {
                return;
              }
            } else {
              if (prev !== null && this.deletes(prev)) {
                action = "update";
                oldValue = last(prev.content.getContent());
              } else {
                action = "add";
                oldValue = void 0;
              }
            }
          } else {
            if (this.deletes(item)) {
              action = "delete";
              oldValue = last(
                /** @type {Item} */
                item.content.getContent()
              );
            } else {
              return;
            }
          }
          keys3.set(key, { action, oldValue });
        }
      });
      this._keys = keys3;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(struct) {
    return struct.id.clock >= (this.transaction.beforeState.get(struct.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let changes = this._changes;
    if (changes === null) {
      if (this.transaction.doc._transactionCleanups.length === 0) {
        throw create3(errorComputeChanges);
      }
      const target = this.target;
      const added = create2();
      const deleted = create2();
      const delta = [];
      changes = {
        added,
        deleted,
        delta,
        keys: this.keys
      };
      const changed = (
        /** @type Set<string|null> */
        this.transaction.changed.get(target)
      );
      if (changed.has(null)) {
        let lastOp = null;
        const packOp = () => {
          if (lastOp) {
            delta.push(lastOp);
          }
        };
        for (let item = target._start; item !== null; item = item.right) {
          if (item.deleted) {
            if (this.deletes(item) && !this.adds(item)) {
              if (lastOp === null || lastOp.delete === void 0) {
                packOp();
                lastOp = { delete: 0 };
              }
              lastOp.delete += item.length;
              deleted.add(item);
            }
          } else {
            if (this.adds(item)) {
              if (lastOp === null || lastOp.insert === void 0) {
                packOp();
                lastOp = { insert: [] };
              }
              lastOp.insert = lastOp.insert.concat(item.content.getContent());
              added.add(item);
            } else {
              if (lastOp === null || lastOp.retain === void 0) {
                packOp();
                lastOp = { retain: 0 };
              }
              lastOp.retain += item.length;
            }
          }
        }
        if (lastOp !== null && lastOp.retain === void 0) {
          packOp();
        }
      }
      this._changes = changes;
    }
    return (
      /** @type {any} */
      changes
    );
  }
};
var getPathTo = (parent, child) => {
  const path = [];
  while (child._item !== null && child !== parent) {
    if (child._item.parentSub !== null) {
      path.unshift(child._item.parentSub);
    } else {
      let i = 0;
      let c = (
        /** @type {AbstractType<any>} */
        child._item.parent._start
      );
      while (c !== child._item && c !== null) {
        if (!c.deleted && c.countable) {
          i += c.length;
        }
        c = c.right;
      }
      path.unshift(i);
    }
    child = /** @type {AbstractType<any>} */
    child._item.parent;
  }
  return path;
};
var warnPrematureAccess = () => {
  warn("Invalid access: Add Yjs type to a document before reading data.");
};
var maxSearchMarker = 80;
var globalSearchMarkerTimestamp = 0;
var ArraySearchMarker = class {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(p, index) {
    p.marker = true;
    this.p = p;
    this.index = index;
    this.timestamp = globalSearchMarkerTimestamp++;
  }
};
var refreshMarkerTimestamp = (marker) => {
  marker.timestamp = globalSearchMarkerTimestamp++;
};
var overwriteMarker = (marker, p, index) => {
  marker.p.marker = false;
  marker.p = p;
  p.marker = true;
  marker.index = index;
  marker.timestamp = globalSearchMarkerTimestamp++;
};
var markPosition = (searchMarker, p, index) => {
  if (searchMarker.length >= maxSearchMarker) {
    const marker = searchMarker.reduce((a, b) => a.timestamp < b.timestamp ? a : b);
    overwriteMarker(marker, p, index);
    return marker;
  } else {
    const pm = new ArraySearchMarker(p, index);
    searchMarker.push(pm);
    return pm;
  }
};
var findMarker = (yarray, index) => {
  if (yarray._start === null || index === 0 || yarray._searchMarker === null) {
    return null;
  }
  const marker = yarray._searchMarker.length === 0 ? null : yarray._searchMarker.reduce((a, b) => abs(index - a.index) < abs(index - b.index) ? a : b);
  let p = yarray._start;
  let pindex = 0;
  if (marker !== null) {
    p = marker.p;
    pindex = marker.index;
    refreshMarkerTimestamp(marker);
  }
  while (p.right !== null && pindex < index) {
    if (!p.deleted && p.countable) {
      if (index < pindex + p.length) {
        break;
      }
      pindex += p.length;
    }
    p = p.right;
  }
  while (p.left !== null && pindex > index) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  while (p.left !== null && p.left.id.client === p.id.client && p.left.id.clock + p.left.length === p.id.clock) {
    p = p.left;
    if (!p.deleted && p.countable) {
      pindex -= p.length;
    }
  }
  if (marker !== null && abs(marker.index - pindex) < /** @type {YText|YArray<any>} */
  p.parent.length / maxSearchMarker) {
    overwriteMarker(marker, p, pindex);
    return marker;
  } else {
    return markPosition(yarray._searchMarker, p, pindex);
  }
};
var updateMarkerChanges = (searchMarker, index, len) => {
  for (let i = searchMarker.length - 1; i >= 0; i--) {
    const m = searchMarker[i];
    if (len > 0) {
      let p = m.p;
      p.marker = false;
      while (p && (p.deleted || !p.countable)) {
        p = p.left;
        if (p && !p.deleted && p.countable) {
          m.index -= p.length;
        }
      }
      if (p === null || p.marker === true) {
        searchMarker.splice(i, 1);
        continue;
      }
      m.p = p;
      p.marker = true;
    }
    if (index < m.index || len > 0 && index === m.index) {
      m.index = max(index, m.index + len);
    }
  }
};
var callTypeObservers = (type, transaction, event) => {
  const changedType = type;
  const changedParentTypes = transaction.changedParentTypes;
  while (true) {
    setIfUndefined(changedParentTypes, type, () => []).push(event);
    if (type._item === null) {
      break;
    }
    type = /** @type {AbstractType<any>} */
    type._item.parent;
  }
  callEventHandlerListeners(changedType._eH, event, transaction);
};
var AbstractType = class {
  constructor() {
    this._item = null;
    this._map = /* @__PURE__ */ new Map();
    this._start = null;
    this.doc = null;
    this._length = 0;
    this._eH = createEventHandler();
    this._dEH = createEventHandler();
    this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(y, item) {
    this.doc = y;
    this._item = item;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw methodUnimplemented();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw methodUnimplemented();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(_encoder) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let n = this._start;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, _parentSubs) {
    if (!transaction.local && this._searchMarker) {
      this._searchMarker.length = 0;
    }
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(f) {
    addEventHandlerListener(this._eH, f);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(f) {
    addEventHandlerListener(this._dEH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(f) {
    removeEventHandlerListener(this._eH, f);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(f) {
    removeEventHandlerListener(this._dEH, f);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
};
var typeListSlice = (type, start, end) => {
  type.doc ?? warnPrematureAccess();
  if (start < 0) {
    start = type._length + start;
  }
  if (end < 0) {
    end = type._length + end;
  }
  let len = end - start;
  const cs = [];
  let n = type._start;
  while (n !== null && len > 0) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      if (c.length <= start) {
        start -= c.length;
      } else {
        for (let i = start; i < c.length && len > 0; i++) {
          cs.push(c[i]);
          len--;
        }
        start = 0;
      }
    }
    n = n.right;
  }
  return cs;
};
var typeListToArray = (type) => {
  type.doc ?? warnPrematureAccess();
  const cs = [];
  let n = type._start;
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        cs.push(c[i]);
      }
    }
    n = n.right;
  }
  return cs;
};
var typeListForEach = (type, f) => {
  let index = 0;
  let n = type._start;
  type.doc ?? warnPrematureAccess();
  while (n !== null) {
    if (n.countable && !n.deleted) {
      const c = n.content.getContent();
      for (let i = 0; i < c.length; i++) {
        f(c[i], index++, type);
      }
    }
    n = n.right;
  }
};
var typeListMap = (type, f) => {
  const result = [];
  typeListForEach(type, (c, i) => {
    result.push(f(c, i, type));
  });
  return result;
};
var typeListCreateIterator = (type) => {
  let n = type._start;
  let currentContent = null;
  let currentContentIndex = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (currentContent === null) {
        while (n !== null && n.deleted) {
          n = n.right;
        }
        if (n === null) {
          return {
            done: true,
            value: void 0
          };
        }
        currentContent = n.content.getContent();
        currentContentIndex = 0;
        n = n.right;
      }
      const value = currentContent[currentContentIndex++];
      if (currentContent.length <= currentContentIndex) {
        currentContent = null;
      }
      return {
        done: false,
        value
      };
    }
  };
};
var typeListGet = (type, index) => {
  type.doc ?? warnPrematureAccess();
  const marker = findMarker(type, index);
  let n = type._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        return n.content.getContent()[index];
      }
      index -= n.length;
    }
  }
};
var typeListInsertGenericsAfter = (transaction, parent, referenceItem, content) => {
  let left = referenceItem;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const store = doc2.store;
  const right = referenceItem === null ? parent._start : referenceItem.right;
  let jsonContent = [];
  const packJsonContent = () => {
    if (jsonContent.length > 0) {
      left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentAny(jsonContent));
      left.integrate(transaction, 0);
      jsonContent = [];
    }
  };
  content.forEach((c) => {
    if (c === null) {
      jsonContent.push(c);
    } else {
      switch (c.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          jsonContent.push(c);
          break;
        default:
          packJsonContent();
          switch (c.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentBinary(new Uint8Array(
                /** @type {Uint8Array} */
                c
              )));
              left.integrate(transaction, 0);
              break;
            case Doc:
              left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentDoc(
                /** @type {Doc} */
                c
              ));
              left.integrate(transaction, 0);
              break;
            default:
              if (c instanceof AbstractType) {
                left = new Item(createID(ownClientId, getState(store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentType(c));
                left.integrate(transaction, 0);
              } else {
                throw new Error("Unexpected content type in insert operation");
              }
          }
      }
    }
  });
  packJsonContent();
};
var lengthExceeded = () => create3("Length exceeded!");
var typeListInsertGenerics = (transaction, parent, index, content) => {
  if (index > parent._length) {
    throw lengthExceeded();
  }
  if (index === 0) {
    if (parent._searchMarker) {
      updateMarkerChanges(parent._searchMarker, index, content.length);
    }
    return typeListInsertGenericsAfter(transaction, parent, null, content);
  }
  const startIndex = index;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
    if (index === 0) {
      n = n.prev;
      index += n && n.countable && !n.deleted ? n.length : 0;
    }
  }
  for (; n !== null; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index <= n.length) {
        if (index < n.length) {
          getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
        }
        break;
      }
      index -= n.length;
    }
  }
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, startIndex, content.length);
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
var typeListPushGenerics = (transaction, parent, content) => {
  const marker = (parent._searchMarker || []).reduce((maxMarker, currMarker) => currMarker.index > maxMarker.index ? currMarker : maxMarker, { index: 0, p: parent._start });
  let n = marker.p;
  if (n) {
    while (n.right) {
      n = n.right;
    }
  }
  return typeListInsertGenericsAfter(transaction, parent, n, content);
};
var typeListDelete = (transaction, parent, index, length3) => {
  if (length3 === 0) {
    return;
  }
  const startIndex = index;
  const startLength = length3;
  const marker = findMarker(parent, index);
  let n = parent._start;
  if (marker !== null) {
    n = marker.p;
    index -= marker.index;
  }
  for (; n !== null && index > 0; n = n.right) {
    if (!n.deleted && n.countable) {
      if (index < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + index));
      }
      index -= n.length;
    }
  }
  while (length3 > 0 && n !== null) {
    if (!n.deleted) {
      if (length3 < n.length) {
        getItemCleanStart(transaction, createID(n.id.client, n.id.clock + length3));
      }
      n.delete(transaction);
      length3 -= n.length;
    }
    n = n.right;
  }
  if (length3 > 0) {
    throw lengthExceeded();
  }
  if (parent._searchMarker) {
    updateMarkerChanges(
      parent._searchMarker,
      startIndex,
      -startLength + length3
      /* in case we remove the above exception */
    );
  }
};
var typeMapDelete = (transaction, parent, key) => {
  const c = parent._map.get(key);
  if (c !== void 0) {
    c.delete(transaction);
  }
};
var typeMapSet = (transaction, parent, key, value) => {
  const left = parent._map.get(key) || null;
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  let content;
  if (value == null) {
    content = new ContentAny([value]);
  } else {
    switch (value.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        content = new ContentAny([value]);
        break;
      case Uint8Array:
        content = new ContentBinary(
          /** @type {Uint8Array} */
          value
        );
        break;
      case Doc:
        content = new ContentDoc(
          /** @type {Doc} */
          value
        );
        break;
      default:
        if (value instanceof AbstractType) {
          content = new ContentType(value);
        } else {
          throw new Error("Unexpected content type");
        }
    }
  }
  new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, null, null, parent, key, content).integrate(transaction, 0);
};
var typeMapGet = (parent, key) => {
  parent.doc ?? warnPrematureAccess();
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted ? val.content.getContent()[val.length - 1] : void 0;
};
var typeMapGetAll = (parent) => {
  const res = {};
  parent.doc ?? warnPrematureAccess();
  parent._map.forEach((value, key) => {
    if (!value.deleted) {
      res[key] = value.content.getContent()[value.length - 1];
    }
  });
  return res;
};
var typeMapHas = (parent, key) => {
  parent.doc ?? warnPrematureAccess();
  const val = parent._map.get(key);
  return val !== void 0 && !val.deleted;
};
var typeMapGetAllSnapshot = (parent, snapshot) => {
  const res = {};
  parent._map.forEach((value, key) => {
    let v = value;
    while (v !== null && (!snapshot.sv.has(v.id.client) || v.id.clock >= (snapshot.sv.get(v.id.client) || 0))) {
      v = v.left;
    }
    if (v !== null && isVisible(v, snapshot)) {
      res[key] = v.content.getContent()[v.length - 1];
    }
  });
  return res;
};
var createMapIterator = (type) => {
  type.doc ?? warnPrematureAccess();
  return iteratorFilter(
    type._map.entries(),
    /** @param {any} entry */
    (entry) => !entry[1].deleted
  );
};
var YArrayEvent = class extends YEvent {
};
var YArray = class _YArray extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
    this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(items) {
    const a = new _YArray();
    a.push(items);
    return a;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new _YArray();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const arr = new _YArray();
    arr.insert(0, this.toArray().map(
      (el) => el instanceof AbstractType ? (
        /** @type {typeof el} */
        el.clone()
      ) : el
    ));
    return arr;
  }
  get length() {
    this.doc ?? warnPrematureAccess();
    return this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    callTypeObservers(this, transaction, new YArrayEvent(this, transaction));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(
          transaction,
          this,
          index,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListPushGenerics(
          transaction,
          this,
          /** @type {any} */
          content
        );
      });
    } else {
      this._prelimContent.push(...content);
    }
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(index, length3 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length3);
      });
    } else {
      this._prelimContent.splice(index, length3);
    }
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((c) => c instanceof AbstractType ? c.toJSON() : c);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(f) {
    return typeListMap(
      this,
      /** @type {any} */
      f
    );
  }
  /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return typeListCreateIterator(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YArrayRefID);
  }
};
var readYArray = (_decoder) => new YArray();
var YMapEvent = class extends YEvent {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(ymap, transaction, subs) {
    super(ymap, transaction);
    this.keysChanged = subs;
  }
};
var YMap = class _YMap extends AbstractType {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(entries) {
    super();
    this._prelimContent = null;
    if (entries === void 0) {
      this._prelimContent = /* @__PURE__ */ new Map();
    } else {
      this._prelimContent = new Map(entries);
    }
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this._prelimContent.forEach((value, key) => {
      this.set(key, value);
    });
    this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new _YMap();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const map2 = new _YMap();
    this.forEach((value, key) => {
      map2.set(key, value instanceof AbstractType ? (
        /** @type {typeof value} */
        value.clone()
      ) : value);
    });
    return map2;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YMapEvent(this, transaction, parentSubs));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? warnPrematureAccess();
    const map2 = {};
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        const v = item.content.getContent()[item.length - 1];
        map2[key] = v instanceof AbstractType ? v.toJSON() : v;
      }
    });
    return map2;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...createMapIterator(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return iteratorMap(
      createMapIterator(this),
      /** @param {any} v */
      (v) => v[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return iteratorMap(
      createMapIterator(this),
      /** @param {any} v */
      (v) => v[1].content.getContent()[v[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return iteratorMap(
      createMapIterator(this),
      /** @param {any} v */
      (v) => (
        /** @type {any} */
        [v[0], v[1].content.getContent()[v[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    this.doc ?? warnPrematureAccess();
    this._map.forEach((item, key) => {
      if (!item.deleted) {
        f(item.content.getContent()[item.length - 1], key, this);
      }
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(key) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, key);
      });
    } else {
      this._prelimContent.delete(key);
    }
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(key, value) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(
          transaction,
          this,
          key,
          /** @type {any} */
          value
        );
      });
    } else {
      this._prelimContent.set(key, value);
    }
    return value;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(key) {
    return (
      /** @type {any} */
      typeMapGet(this, key)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(key) {
    return typeMapHas(this, key);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        this.forEach(function(_value, key, map2) {
          typeMapDelete(transaction, map2, key);
        });
      });
    } else {
      this._prelimContent.clear();
    }
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YMapRefID);
  }
};
var readYMap = (_decoder) => new YMap();
var equalAttrs = (a, b) => a === b || typeof a === "object" && typeof b === "object" && a && b && equalFlat(a, b);
var ItemTextListPosition = class {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(left, right, index, currentAttributes) {
    this.left = left;
    this.right = right;
    this.index = index;
    this.currentAttributes = currentAttributes;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    if (this.right === null) {
      unexpectedCase();
    }
    switch (this.right.content.constructor) {
      case ContentFormat:
        if (!this.right.deleted) {
          updateCurrentAttributes(
            this.currentAttributes,
            /** @type {ContentFormat} */
            this.right.content
          );
        }
        break;
      default:
        if (!this.right.deleted) {
          this.index += this.right.length;
        }
        break;
    }
    this.left = this.right;
    this.right = this.right.right;
  }
};
var findNextPosition = (transaction, pos, count) => {
  while (pos.right !== null && count > 0) {
    switch (pos.right.content.constructor) {
      case ContentFormat:
        if (!pos.right.deleted) {
          updateCurrentAttributes(
            pos.currentAttributes,
            /** @type {ContentFormat} */
            pos.right.content
          );
        }
        break;
      default:
        if (!pos.right.deleted) {
          if (count < pos.right.length) {
            getItemCleanStart(transaction, createID(pos.right.id.client, pos.right.id.clock + count));
          }
          pos.index += pos.right.length;
          count -= pos.right.length;
        }
        break;
    }
    pos.left = pos.right;
    pos.right = pos.right.right;
  }
  return pos;
};
var findPosition = (transaction, parent, index, useSearchMarker) => {
  const currentAttributes = /* @__PURE__ */ new Map();
  const marker = useSearchMarker ? findMarker(parent, index) : null;
  if (marker) {
    const pos = new ItemTextListPosition(marker.p.left, marker.p, marker.index, currentAttributes);
    return findNextPosition(transaction, pos, index - marker.index);
  } else {
    const pos = new ItemTextListPosition(null, parent._start, 0, currentAttributes);
    return findNextPosition(transaction, pos, index);
  }
};
var insertNegatedAttributes = (transaction, parent, currPos, negatedAttributes) => {
  while (currPos.right !== null && (currPos.right.deleted === true || currPos.right.content.constructor === ContentFormat && equalAttrs(
    negatedAttributes.get(
      /** @type {ContentFormat} */
      currPos.right.content.key
    ),
    /** @type {ContentFormat} */
    currPos.right.content.value
  ))) {
    if (!currPos.right.deleted) {
      negatedAttributes.delete(
        /** @type {ContentFormat} */
        currPos.right.content.key
      );
    }
    currPos.forward();
  }
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  negatedAttributes.forEach((val, key) => {
    const left = currPos.left;
    const right = currPos.right;
    const nextFormat = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
    nextFormat.integrate(transaction, 0);
    currPos.right = nextFormat;
    currPos.forward();
  });
};
var updateCurrentAttributes = (currentAttributes, format) => {
  const { key, value } = format;
  if (value === null) {
    currentAttributes.delete(key);
  } else {
    currentAttributes.set(key, value);
  }
};
var minimizeAttributeChanges = (currPos, attributes) => {
  while (true) {
    if (currPos.right === null) {
      break;
    } else if (currPos.right.deleted || currPos.right.content.constructor === ContentFormat && equalAttrs(
      attributes[
        /** @type {ContentFormat} */
        currPos.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      currPos.right.content.value
    )) ;
    else {
      break;
    }
    currPos.forward();
  }
};
var insertAttributes = (transaction, parent, currPos, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  const negatedAttributes = /* @__PURE__ */ new Map();
  for (const key in attributes) {
    const val = attributes[key];
    const currentVal = currPos.currentAttributes.get(key) ?? null;
    if (!equalAttrs(currentVal, val)) {
      negatedAttributes.set(key, currentVal);
      const { left, right } = currPos;
      currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, new ContentFormat(key, val));
      currPos.right.integrate(transaction, 0);
      currPos.forward();
    }
  }
  return negatedAttributes;
};
var insertText = (transaction, parent, currPos, text2, attributes) => {
  currPos.currentAttributes.forEach((_val, key) => {
    if (attributes[key] === void 0) {
      attributes[key] = null;
    }
  });
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  const content = text2.constructor === String ? new ContentString(
    /** @type {string} */
    text2
  ) : text2 instanceof AbstractType ? new ContentType(text2) : new ContentEmbed(text2);
  let { left, right, index } = currPos;
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, content.getLength());
  }
  right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), left, left && left.lastId, right, right && right.id, parent, null, content);
  right.integrate(transaction, 0);
  currPos.right = right;
  currPos.index = index;
  currPos.forward();
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
var formatText = (transaction, parent, currPos, length3, attributes) => {
  const doc2 = transaction.doc;
  const ownClientId = doc2.clientID;
  minimizeAttributeChanges(currPos, attributes);
  const negatedAttributes = insertAttributes(transaction, parent, currPos, attributes);
  iterationLoop: while (currPos.right !== null && (length3 > 0 || negatedAttributes.size > 0 && (currPos.right.deleted || currPos.right.content.constructor === ContentFormat))) {
    if (!currPos.right.deleted) {
      switch (currPos.right.content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            currPos.right.content
          );
          const attr = attributes[key];
          if (attr !== void 0) {
            if (equalAttrs(attr, value)) {
              negatedAttributes.delete(key);
            } else {
              if (length3 === 0) {
                break iterationLoop;
              }
              negatedAttributes.set(key, value);
            }
            currPos.right.delete(transaction);
          } else {
            currPos.currentAttributes.set(key, value);
          }
          break;
        }
        default:
          if (length3 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
          }
          length3 -= currPos.right.length;
          break;
      }
    }
    currPos.forward();
  }
  if (length3 > 0) {
    let newlines = "";
    for (; length3 > 0; length3--) {
      newlines += "\n";
    }
    currPos.right = new Item(createID(ownClientId, getState(doc2.store, ownClientId)), currPos.left, currPos.left && currPos.left.lastId, currPos.right, currPos.right && currPos.right.id, parent, null, new ContentString(newlines));
    currPos.right.integrate(transaction, 0);
    currPos.forward();
  }
  insertNegatedAttributes(transaction, parent, currPos, negatedAttributes);
};
var cleanupFormattingGap = (transaction, start, curr, startAttributes, currAttributes) => {
  let end = start;
  const endFormats = create();
  while (end && (!end.countable || end.deleted)) {
    if (!end.deleted && end.content.constructor === ContentFormat) {
      const cf = (
        /** @type {ContentFormat} */
        end.content
      );
      endFormats.set(cf.key, cf);
    }
    end = end.right;
  }
  let cleanups = 0;
  let reachedCurr = false;
  while (start !== end) {
    if (curr === start) {
      reachedCurr = true;
    }
    if (!start.deleted) {
      const content = start.content;
      switch (content.constructor) {
        case ContentFormat: {
          const { key, value } = (
            /** @type {ContentFormat} */
            content
          );
          const startAttrValue = startAttributes.get(key) ?? null;
          if (endFormats.get(key) !== content || startAttrValue === value) {
            start.delete(transaction);
            cleanups++;
            if (!reachedCurr && (currAttributes.get(key) ?? null) === value && startAttrValue !== value) {
              if (startAttrValue === null) {
                currAttributes.delete(key);
              } else {
                currAttributes.set(key, startAttrValue);
              }
            }
          }
          if (!reachedCurr && !start.deleted) {
            updateCurrentAttributes(
              currAttributes,
              /** @type {ContentFormat} */
              content
            );
          }
          break;
        }
      }
    }
    start = /** @type {Item} */
    start.right;
  }
  return cleanups;
};
var cleanupContextlessFormattingGap = (transaction, item) => {
  while (item && item.right && (item.right.deleted || !item.right.countable)) {
    item = item.right;
  }
  const attrs = /* @__PURE__ */ new Set();
  while (item && (item.deleted || !item.countable)) {
    if (!item.deleted && item.content.constructor === ContentFormat) {
      const key = (
        /** @type {ContentFormat} */
        item.content.key
      );
      if (attrs.has(key)) {
        item.delete(transaction);
      } else {
        attrs.add(key);
      }
    }
    item = item.left;
  }
};
var cleanupYTextFormatting = (type) => {
  let res = 0;
  transact(
    /** @type {Doc} */
    type.doc,
    (transaction) => {
      let start = (
        /** @type {Item} */
        type._start
      );
      let end = type._start;
      let startAttributes = create();
      const currentAttributes = copy(startAttributes);
      while (end) {
        if (end.deleted === false) {
          switch (end.content.constructor) {
            case ContentFormat:
              updateCurrentAttributes(
                currentAttributes,
                /** @type {ContentFormat} */
                end.content
              );
              break;
            default:
              res += cleanupFormattingGap(transaction, start, end, startAttributes, currentAttributes);
              startAttributes = copy(currentAttributes);
              start = end;
              break;
          }
        }
        end = end.right;
      }
    }
  );
  return res;
};
var cleanupYTextAfterTransaction = (transaction) => {
  const needFullCleanup = /* @__PURE__ */ new Set();
  const doc2 = transaction.doc;
  for (const [client, afterClock] of transaction.afterState.entries()) {
    const clock = transaction.beforeState.get(client) || 0;
    if (afterClock === clock) {
      continue;
    }
    iterateStructs(
      transaction,
      /** @type {Array<Item|GC>} */
      doc2.store.clients.get(client),
      clock,
      afterClock,
      (item) => {
        if (!item.deleted && /** @type {Item} */
        item.content.constructor === ContentFormat && item.constructor !== GC) {
          needFullCleanup.add(
            /** @type {any} */
            item.parent
          );
        }
      }
    );
  }
  transact(doc2, (t) => {
    iterateDeletedStructs(transaction, transaction.deleteSet, (item) => {
      if (item instanceof GC || !/** @type {YText} */
      item.parent._hasFormatting || needFullCleanup.has(
        /** @type {YText} */
        item.parent
      )) {
        return;
      }
      const parent = (
        /** @type {YText} */
        item.parent
      );
      if (item.content.constructor === ContentFormat) {
        needFullCleanup.add(parent);
      } else {
        cleanupContextlessFormattingGap(t, item);
      }
    });
    for (const yText of needFullCleanup) {
      cleanupYTextFormatting(yText);
    }
  });
};
var deleteText = (transaction, currPos, length3) => {
  const startLength = length3;
  const startAttrs = copy(currPos.currentAttributes);
  const start = currPos.right;
  while (length3 > 0 && currPos.right !== null) {
    if (currPos.right.deleted === false) {
      switch (currPos.right.content.constructor) {
        case ContentType:
        case ContentEmbed:
        case ContentString:
          if (length3 < currPos.right.length) {
            getItemCleanStart(transaction, createID(currPos.right.id.client, currPos.right.id.clock + length3));
          }
          length3 -= currPos.right.length;
          currPos.right.delete(transaction);
          break;
      }
    }
    currPos.forward();
  }
  if (start) {
    cleanupFormattingGap(transaction, start, currPos.right, startAttrs, currPos.currentAttributes);
  }
  const parent = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (currPos.left || currPos.right).parent
  );
  if (parent._searchMarker) {
    updateMarkerChanges(parent._searchMarker, currPos.index, -startLength + length3);
  }
  return currPos;
};
var YTextEvent = class extends YEvent {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(ytext, transaction, subs) {
    super(ytext, transaction);
    this.childListChanged = false;
    this.keysChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.keysChanged.add(sub);
      }
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const changes = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = changes;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const y = (
        /** @type {Doc} */
        this.target.doc
      );
      const delta = [];
      transact(y, (transaction) => {
        const currentAttributes = /* @__PURE__ */ new Map();
        const oldAttributes = /* @__PURE__ */ new Map();
        let item = this.target._start;
        let action = null;
        const attributes = {};
        let insert = "";
        let retain = 0;
        let deleteLen = 0;
        const addOp = () => {
          if (action !== null) {
            let op = null;
            switch (action) {
              case "delete":
                if (deleteLen > 0) {
                  op = { delete: deleteLen };
                }
                deleteLen = 0;
                break;
              case "insert":
                if (typeof insert === "object" || insert.length > 0) {
                  op = { insert };
                  if (currentAttributes.size > 0) {
                    op.attributes = {};
                    currentAttributes.forEach((value, key) => {
                      if (value !== null) {
                        op.attributes[key] = value;
                      }
                    });
                  }
                }
                insert = "";
                break;
              case "retain":
                if (retain > 0) {
                  op = { retain };
                  if (!isEmpty(attributes)) {
                    op.attributes = assign({}, attributes);
                  }
                }
                retain = 0;
                break;
            }
            if (op) delta.push(op);
            action = null;
          }
        };
        while (item !== null) {
          switch (item.content.constructor) {
            case ContentType:
            case ContentEmbed:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  addOp();
                  action = "insert";
                  insert = item.content.getContent()[0];
                  addOp();
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += 1;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += 1;
              }
              break;
            case ContentString:
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  if (action !== "insert") {
                    addOp();
                    action = "insert";
                  }
                  insert += /** @type {ContentString} */
                  item.content.str;
                }
              } else if (this.deletes(item)) {
                if (action !== "delete") {
                  addOp();
                  action = "delete";
                }
                deleteLen += item.length;
              } else if (!item.deleted) {
                if (action !== "retain") {
                  addOp();
                  action = "retain";
                }
                retain += item.length;
              }
              break;
            case ContentFormat: {
              const { key, value } = (
                /** @type {ContentFormat} */
                item.content
              );
              if (this.adds(item)) {
                if (!this.deletes(item)) {
                  const curVal = currentAttributes.get(key) ?? null;
                  if (!equalAttrs(curVal, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (equalAttrs(value, oldAttributes.get(key) ?? null)) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (value !== null) {
                    item.delete(transaction);
                  }
                }
              } else if (this.deletes(item)) {
                oldAttributes.set(key, value);
                const curVal = currentAttributes.get(key) ?? null;
                if (!equalAttrs(curVal, value)) {
                  if (action === "retain") {
                    addOp();
                  }
                  attributes[key] = curVal;
                }
              } else if (!item.deleted) {
                oldAttributes.set(key, value);
                const attr = attributes[key];
                if (attr !== void 0) {
                  if (!equalAttrs(attr, value)) {
                    if (action === "retain") {
                      addOp();
                    }
                    if (value === null) {
                      delete attributes[key];
                    } else {
                      attributes[key] = value;
                    }
                  } else if (attr !== null) {
                    item.delete(transaction);
                  }
                }
              }
              if (!item.deleted) {
                if (action === "insert") {
                  addOp();
                }
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  item.content
                );
              }
              break;
            }
          }
          item = item.right;
        }
        addOp();
        while (delta.length > 0) {
          const lastOp = delta[delta.length - 1];
          if (lastOp.retain !== void 0 && lastOp.attributes === void 0) {
            delta.pop();
          } else {
            break;
          }
        }
      });
      this._delta = delta;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
};
var YText = class _YText extends AbstractType {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(string) {
    super();
    this._pending = string !== void 0 ? [() => this.insert(0, string)] : [];
    this._searchMarker = [];
    this._hasFormatting = false;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    this.doc ?? warnPrematureAccess();
    return this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    try {
      this._pending.forEach((f) => f());
    } catch (e) {
      console.error(e);
    }
    this._pending = null;
  }
  _copy() {
    return new _YText();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const text2 = new _YText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    super._callObserver(transaction, parentSubs);
    const event = new YTextEvent(this, transaction, parentSubs);
    callTypeObservers(this, transaction, event);
    if (!transaction.local && this._hasFormatting) {
      transaction._needFormattingCleanup = true;
    }
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? warnPrematureAccess();
    let str = "";
    let n = this._start;
    while (n !== null) {
      if (!n.deleted && n.countable && n.content.constructor === ContentString) {
        str += /** @type {ContentString} */
        n.content.str;
      }
      n = n.right;
    }
    return str;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {Array<any>} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(delta, { sanitize = true } = {}) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const currPos = new ItemTextListPosition(null, this._start, 0, /* @__PURE__ */ new Map());
        for (let i = 0; i < delta.length; i++) {
          const op = delta[i];
          if (op.insert !== void 0) {
            const ins = !sanitize && typeof op.insert === "string" && i === delta.length - 1 && currPos.right === null && op.insert.slice(-1) === "\n" ? op.insert.slice(0, -1) : op.insert;
            if (typeof ins !== "string" || ins.length > 0) {
              insertText(transaction, this, currPos, ins, op.attributes || {});
            }
          } else if (op.retain !== void 0) {
            formatText(transaction, this, currPos, op.retain, op.attributes || {});
          } else if (op.delete !== void 0) {
            deleteText(transaction, currPos, op.delete);
          }
        }
      });
    } else {
      this._pending.push(() => this.applyDelta(delta));
    }
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(snapshot, prevSnapshot, computeYChange) {
    this.doc ?? warnPrematureAccess();
    const ops = [];
    const currentAttributes = /* @__PURE__ */ new Map();
    const doc2 = (
      /** @type {Doc} */
      this.doc
    );
    let str = "";
    let n = this._start;
    function packStr() {
      if (str.length > 0) {
        const attributes = {};
        let addAttributes = false;
        currentAttributes.forEach((value, key) => {
          addAttributes = true;
          attributes[key] = value;
        });
        const op = { insert: str };
        if (addAttributes) {
          op.attributes = attributes;
        }
        ops.push(op);
        str = "";
      }
    }
    const computeDelta = () => {
      while (n !== null) {
        if (isVisible(n, snapshot) || prevSnapshot !== void 0 && isVisible(n, prevSnapshot)) {
          switch (n.content.constructor) {
            case ContentString: {
              const cur = currentAttributes.get("ychange");
              if (snapshot !== void 0 && !isVisible(n, snapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "removed") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("removed", n.id) : { type: "removed" });
                }
              } else if (prevSnapshot !== void 0 && !isVisible(n, prevSnapshot)) {
                if (cur === void 0 || cur.user !== n.id.client || cur.type !== "added") {
                  packStr();
                  currentAttributes.set("ychange", computeYChange ? computeYChange("added", n.id) : { type: "added" });
                }
              } else if (cur !== void 0) {
                packStr();
                currentAttributes.delete("ychange");
              }
              str += /** @type {ContentString} */
              n.content.str;
              break;
            }
            case ContentType:
            case ContentEmbed: {
              packStr();
              const op = {
                insert: n.content.getContent()[0]
              };
              if (currentAttributes.size > 0) {
                const attrs = (
                  /** @type {Object<string,any>} */
                  {}
                );
                op.attributes = attrs;
                currentAttributes.forEach((value, key) => {
                  attrs[key] = value;
                });
              }
              ops.push(op);
              break;
            }
            case ContentFormat:
              if (isVisible(n, snapshot)) {
                packStr();
                updateCurrentAttributes(
                  currentAttributes,
                  /** @type {ContentFormat} */
                  n.content
                );
              }
              break;
          }
        }
        n = n.right;
      }
      packStr();
    };
    if (snapshot || prevSnapshot) {
      transact(doc2, (transaction) => {
        if (snapshot) {
          splitSnapshotAffectedStructs(transaction, snapshot);
        }
        if (prevSnapshot) {
          splitSnapshotAffectedStructs(transaction, prevSnapshot);
        }
        computeDelta();
      }, "cleanup");
    } else {
      computeDelta();
    }
    return ops;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(index, text2, attributes) {
    if (text2.length <= 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, !attributes);
        if (!attributes) {
          attributes = {};
          pos.currentAttributes.forEach((v, k) => {
            attributes[k] = v;
          });
        }
        insertText(transaction, this, pos, text2, attributes);
      });
    } else {
      this._pending.push(() => this.insert(index, text2, attributes));
    }
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(index, embed, attributes) {
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, !attributes);
        insertText(transaction, this, pos, embed, attributes || {});
      });
    } else {
      this._pending.push(() => this.insertEmbed(index, embed, attributes || {}));
    }
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(index, length3) {
    if (length3 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        deleteText(transaction, findPosition(transaction, this, index, true), length3);
      });
    } else {
      this._pending.push(() => this.delete(index, length3));
    }
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(index, length3, attributes) {
    if (length3 === 0) {
      return;
    }
    const y = this.doc;
    if (y !== null) {
      transact(y, (transaction) => {
        const pos = findPosition(transaction, this, index, false);
        if (pos.right === null) {
          return;
        }
        formatText(transaction, this, pos, length3, attributes);
      });
    } else {
      this._pending.push(() => this.format(index, length3, attributes));
    }
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._pending.push(() => this.removeAttribute(attributeName));
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._pending.push(() => this.setAttribute(attributeName, attributeValue));
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return typeMapGetAll(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YTextRefID);
  }
};
var readYText = (_decoder) => new YText();
var YXmlTreeWalker = class {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(root, f = () => true) {
    this._filter = f;
    this._root = root;
    this._currentNode = /** @type {Item} */
    root._start;
    this._firstCall = true;
    root.doc ?? warnPrematureAccess();
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let n = this._currentNode;
    let type = n && n.content && /** @type {any} */
    n.content.type;
    if (n !== null && (!this._firstCall || n.deleted || !this._filter(type))) {
      do {
        type = /** @type {any} */
        n.content.type;
        if (!n.deleted && (type.constructor === YXmlElement || type.constructor === YXmlFragment) && type._start !== null) {
          n = type._start;
        } else {
          while (n !== null) {
            const nxt = n.next;
            if (nxt !== null) {
              n = nxt;
              break;
            } else if (n.parent === this._root) {
              n = null;
            } else {
              n = /** @type {AbstractType<any>} */
              n.parent._item;
            }
          }
        }
      } while (n !== null && (n.deleted || !this._filter(
        /** @type {ContentType} */
        n.content.type
      )));
    }
    this._firstCall = false;
    if (n === null) {
      return { value: void 0, done: true };
    }
    this._currentNode = n;
    return { value: (
      /** @type {any} */
      n.content.type
    ), done: false };
  }
};
var YXmlFragment = class _YXmlFragment extends AbstractType {
  constructor() {
    super();
    this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const first = this._first;
    return first ? first.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    );
    this._prelimContent = null;
  }
  _copy() {
    return new _YXmlFragment();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const el = new _YXmlFragment();
    el.insert(0, this.toArray().map((item) => item instanceof AbstractType ? item.clone() : item));
    return el;
  }
  get length() {
    this.doc ?? warnPrematureAccess();
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(filter) {
    return new YXmlTreeWalker(this, filter);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(query) {
    query = query.toUpperCase();
    const iterator = new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query);
    const next = iterator.next();
    if (next.done) {
      return null;
    } else {
      return next.value;
    }
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(query) {
    query = query.toUpperCase();
    return from(new YXmlTreeWalker(this, (element2) => element2.nodeName && element2.nodeName.toUpperCase() === query));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(transaction, parentSubs) {
    callTypeObservers(this, transaction, new YXmlEvent(this, parentSubs, transaction));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return typeListMap(this, (xml) => xml.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const fragment = _document.createDocumentFragment();
    if (binding !== void 0) {
      binding._createAssociation(fragment, this);
    }
    typeListForEach(this, (xmlType) => {
      fragment.insertBefore(xmlType.toDOM(_document, hooks, binding), null);
    });
    return fragment;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(index, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListInsertGenerics(transaction, this, index, content);
      });
    } else {
      this._prelimContent.splice(index, 0, ...content);
    }
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(ref, content) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        const refItem = ref && ref instanceof AbstractType ? ref._item : ref;
        typeListInsertGenericsAfter(transaction, this, refItem, content);
      });
    } else {
      const pc = (
        /** @type {Array<any>} */
        this._prelimContent
      );
      const index = ref === null ? 0 : pc.findIndex((el) => el === ref) + 1;
      if (index === 0 && ref !== null) {
        throw create3("Reference item not found");
      }
      pc.splice(index, 0, ...content);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(index, length3 = 1) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeListDelete(transaction, this, index, length3);
      });
    } else {
      this._prelimContent.splice(index, length3);
    }
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return typeListToArray(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(content) {
    this.insert(this.length, content);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */
  unshift(content) {
    this.insert(0, content);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(index) {
    return typeListGet(this, index);
  }
  /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(start = 0, end = this.length) {
    return typeListSlice(this, start, end);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(f) {
    typeListForEach(this, f);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlFragmentRefID);
  }
};
var readYXmlFragment = (_decoder) => new YXmlFragment();
var YXmlElement = class _YXmlElement extends YXmlFragment {
  constructor(nodeName = "UNDEFINED") {
    super();
    this.nodeName = nodeName;
    this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(y, item) {
    super._integrate(y, item);
    /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((value, key) => {
      this.setAttribute(key, value);
    });
    this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new _YXmlElement(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const el = new _YXmlElement(this.nodeName);
    const attrs = this.getAttributes();
    forEach(attrs, (value, key) => {
      el.setAttribute(
        key,
        /** @type {any} */
        value
      );
    });
    el.insert(0, this.toArray().map((v) => v instanceof AbstractType ? v.clone() : v));
    return el;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const attrs = this.getAttributes();
    const stringBuilder = [];
    const keys3 = [];
    for (const key in attrs) {
      keys3.push(key);
    }
    keys3.sort();
    const keysLen = keys3.length;
    for (let i = 0; i < keysLen; i++) {
      const key = keys3[i];
      stringBuilder.push(key + '="' + attrs[key] + '"');
    }
    const nodeName = this.nodeName.toLocaleLowerCase();
    const attrsString = stringBuilder.length > 0 ? " " + stringBuilder.join(" ") : "";
    return `<${nodeName}${attrsString}>${super.toString()}</${nodeName}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(attributeName) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapDelete(transaction, this, attributeName);
      });
    } else {
      this._prelimAttrs.delete(attributeName);
    }
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(attributeName, attributeValue) {
    if (this.doc !== null) {
      transact(this.doc, (transaction) => {
        typeMapSet(transaction, this, attributeName, attributeValue);
      });
    } else {
      this._prelimAttrs.set(attributeName, attributeValue);
    }
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapGet(this, attributeName)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(attributeName) {
    return (
      /** @type {any} */
      typeMapHas(this, attributeName)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(snapshot) {
    return (
      /** @type {any} */
      snapshot ? typeMapGetAllSnapshot(this, snapshot) : typeMapGetAll(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const dom = _document.createElement(this.nodeName);
    const attrs = this.getAttributes();
    for (const key in attrs) {
      const value = attrs[key];
      if (typeof value === "string") {
        dom.setAttribute(key, value);
      }
    }
    typeListForEach(this, (yxml) => {
      dom.appendChild(yxml.toDOM(_document, hooks, binding));
    });
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlElementRefID);
    encoder.writeKey(this.nodeName);
  }
};
var readYXmlElement = (decoder) => new YXmlElement(decoder.readKey());
var YXmlEvent = class extends YEvent {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with which the
   *                                  change was created.
   */
  constructor(target, subs, transaction) {
    super(target, transaction);
    this.childListChanged = false;
    this.attributesChanged = /* @__PURE__ */ new Set();
    subs.forEach((sub) => {
      if (sub === null) {
        this.childListChanged = true;
      } else {
        this.attributesChanged.add(sub);
      }
    });
  }
};
var YXmlHook = class _YXmlHook extends YMap {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(hookName) {
    super();
    this.hookName = hookName;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new _YXmlHook(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const el = new _YXmlHook(this.hookName);
    this.forEach((value, key) => {
      el.set(key, value);
    });
    return el;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks = {}, binding) {
    const hook = hooks[this.hookName];
    let dom;
    if (hook !== void 0) {
      dom = hook.createDom(this);
    } else {
      dom = document.createElement(this.hookName);
    }
    dom.setAttribute("data-yjs-hook", this.hookName);
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlHookRefID);
    encoder.writeKey(this.hookName);
  }
};
var readYXmlHook = (decoder) => new YXmlHook(decoder.readKey());
var YXmlText = class _YXmlText extends YText {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const n = this._item ? this._item.next : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const n = this._item ? this._item.prev : null;
    return n ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      n.content.type
    ) : null;
  }
  _copy() {
    return new _YXmlText();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const text2 = new _YXmlText();
    text2.applyDelta(this.toDelta());
    return text2;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(_document = document, hooks, binding) {
    const dom = _document.createTextNode(this.toString());
    if (binding !== void 0) {
      binding._createAssociation(dom, this);
    }
    return dom;
  }
  toString() {
    return this.toDelta().map((delta) => {
      const nestedNodes = [];
      for (const nodeName in delta.attributes) {
        const attrs = [];
        for (const key in delta.attributes[nodeName]) {
          attrs.push({ key, value: delta.attributes[nodeName][key] });
        }
        attrs.sort((a, b) => a.key < b.key ? -1 : 1);
        nestedNodes.push({ nodeName, attrs });
      }
      nestedNodes.sort((a, b) => a.nodeName < b.nodeName ? -1 : 1);
      let str = "";
      for (let i = 0; i < nestedNodes.length; i++) {
        const node = nestedNodes[i];
        str += `<${node.nodeName}`;
        for (let j = 0; j < node.attrs.length; j++) {
          const attr = node.attrs[j];
          str += ` ${attr.key}="${attr.value}"`;
        }
        str += ">";
      }
      str += delta.insert;
      for (let i = nestedNodes.length - 1; i >= 0; i--) {
        str += `</${nestedNodes[i].nodeName}>`;
      }
      return str;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(encoder) {
    encoder.writeTypeRef(YXmlTextRefID);
  }
};
var readYXmlText = (decoder) => new YXmlText();
var AbstractStruct = class {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(id2, length3) {
    this.id = id2;
    this.length = length3;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw methodUnimplemented();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} whether this merged with right
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(encoder, offset, encodingRef) {
    throw methodUnimplemented();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    throw methodUnimplemented();
  }
};
var structGCRefNumber = 0;
var GC = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.length -= offset;
    }
    addStruct(transaction.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structGCRefNumber);
    encoder.writeLen(this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
var ContentBinary = class _ContentBinary {
  /**
   * @param {Uint8Array} content
   */
  constructor(content) {
    this.content = content;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new _ContentBinary(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
};
var readContentBinary = (decoder) => new ContentBinary(decoder.readBuf());
var ContentDeleted = class _ContentDeleted {
  /**
   * @param {number} len
   */
  constructor(len) {
    this.len = len;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new _ContentDeleted(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(offset) {
    const right = new _ContentDeleted(this.len - offset);
    this.len = offset;
    return right;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.len += right.len;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    addToDeleteSet(transaction.deleteSet, item.id.client, item.id.clock, this.len);
    item.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeLen(this.len - offset);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
};
var readContentDeleted = (decoder) => new ContentDeleted(decoder.readLen());
var createDocFromOpts = (guid, opts) => new Doc({ guid, ...opts, shouldLoad: opts.shouldLoad || opts.autoLoad || false });
var ContentDoc = class _ContentDoc {
  /**
   * @param {Doc} doc
   */
  constructor(doc2) {
    if (doc2._item) {
      console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid.");
    }
    this.doc = doc2;
    const opts = {};
    this.opts = opts;
    if (!doc2.gc) {
      opts.gc = false;
    }
    if (doc2.autoLoad) {
      opts.autoLoad = true;
    }
    if (doc2.meta !== null) {
      opts.meta = doc2.meta;
    }
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new _ContentDoc(createDocFromOpts(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.doc._item = item;
    transaction.subdocsAdded.add(this.doc);
    if (this.doc.shouldLoad) {
      transaction.subdocsLoaded.add(this.doc);
    }
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (transaction.subdocsAdded.has(this.doc)) {
      transaction.subdocsAdded.delete(this.doc);
    } else {
      transaction.subdocsRemoved.add(this.doc);
    }
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(this.doc.guid);
    encoder.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
};
var readContentDoc = (decoder) => new ContentDoc(createDocFromOpts(decoder.readString(), decoder.readAny()));
var ContentEmbed = class _ContentEmbed {
  /**
   * @param {Object} embed
   */
  constructor(embed) {
    this.embed = embed;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new _ContentEmbed(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
};
var readContentEmbed = (decoder) => new ContentEmbed(decoder.readJSON());
var ContentFormat = class _ContentFormat {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return false;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new _ContentFormat(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(_offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(_right) {
    return false;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(_transaction, item) {
    const p = (
      /** @type {YText} */
      item.parent
    );
    p._searchMarker = null;
    p._hasFormatting = true;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeKey(this.key);
    encoder.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
};
var readContentFormat = (decoder) => new ContentFormat(decoder.readKey(), decoder.readJSON());
var ContentJSON = class _ContentJSON {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new _ContentJSON(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(offset) {
    const right = new _ContentJSON(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeString(c === void 0 ? "undefined" : JSON.stringify(c));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
};
var readContentJSON = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    const c = decoder.readString();
    if (c === "undefined") {
      cs.push(void 0);
    } else {
      cs.push(JSON.parse(c));
    }
  }
  return new ContentJSON(cs);
};
var isDevMode = getVariable("node_env") === "development";
var ContentAny = class _ContentAny {
  /**
   * @param {Array<any>} arr
   */
  constructor(arr) {
    this.arr = arr;
    isDevMode && deepFreeze(arr);
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new _ContentAny(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(offset) {
    const right = new _ContentAny(this.arr.slice(offset));
    this.arr = this.arr.slice(0, offset);
    return right;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.arr = this.arr.concat(right.arr);
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    const len = this.arr.length;
    encoder.writeLen(len - offset);
    for (let i = offset; i < len; i++) {
      const c = this.arr[i];
      encoder.writeAny(c);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
};
var readContentAny = (decoder) => {
  const len = decoder.readLen();
  const cs = [];
  for (let i = 0; i < len; i++) {
    cs.push(decoder.readAny());
  }
  return new ContentAny(cs);
};
var ContentString = class _ContentString {
  /**
   * @param {string} str
   */
  constructor(str) {
    this.str = str;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new _ContentString(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(offset) {
    const right = new _ContentString(this.str.slice(offset));
    this.str = this.str.slice(0, offset);
    const firstCharCode = this.str.charCodeAt(offset - 1);
    if (firstCharCode >= 55296 && firstCharCode <= 56319) {
      this.str = this.str.slice(0, offset - 1) + "\uFFFD";
      right.str = "\uFFFD" + right.str.slice(1);
    }
    return right;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(right) {
    this.str += right.str;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeString(offset === 0 ? this.str : this.str.slice(offset));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
};
var readContentString = (decoder) => new ContentString(decoder.readString());
var typeRefs = [
  readYArray,
  readYMap,
  readYText,
  readYXmlElement,
  readYXmlFragment,
  readYXmlHook,
  readYXmlText
];
var YArrayRefID = 0;
var YMapRefID = 1;
var YTextRefID = 2;
var YXmlElementRefID = 3;
var YXmlFragmentRefID = 4;
var YXmlHookRefID = 5;
var YXmlTextRefID = 6;
var ContentType = class _ContentType {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(type) {
    this.type = type;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return true;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new _ContentType(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(offset) {
    throw methodUnimplemented();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(right) {
    return false;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(transaction, item) {
    this.type._integrate(transaction.doc, item);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(transaction) {
    let item = this.type._start;
    while (item !== null) {
      if (!item.deleted) {
        item.delete(transaction);
      } else if (item.id.clock < (transaction.beforeState.get(item.id.client) || 0)) {
        transaction._mergeStructs.push(item);
      }
      item = item.right;
    }
    this.type._map.forEach((item2) => {
      if (!item2.deleted) {
        item2.delete(transaction);
      } else if (item2.id.clock < (transaction.beforeState.get(item2.id.client) || 0)) {
        transaction._mergeStructs.push(item2);
      }
    });
    transaction.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(store) {
    let item = this.type._start;
    while (item !== null) {
      item.gc(store, true);
      item = item.right;
    }
    this.type._start = null;
    this.type._map.forEach(
      /** @param {Item | null} item */
      (item2) => {
        while (item2 !== null) {
          item2.gc(store, true);
          item2 = item2.left;
        }
      }
    );
    this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    this.type._write(encoder);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
};
var readContentType = (decoder) => new ContentType(typeRefs[decoder.readTypeRef()](decoder));
var splitItem = (transaction, leftItem, diff) => {
  const { client, clock } = leftItem.id;
  const rightItem = new Item(
    createID(client, clock + diff),
    leftItem,
    createID(client, clock + diff - 1),
    leftItem.right,
    leftItem.rightOrigin,
    leftItem.parent,
    leftItem.parentSub,
    leftItem.content.splice(diff)
  );
  if (leftItem.deleted) {
    rightItem.markDeleted();
  }
  if (leftItem.keep) {
    rightItem.keep = true;
  }
  if (leftItem.redone !== null) {
    rightItem.redone = createID(leftItem.redone.client, leftItem.redone.clock + diff);
  }
  leftItem.right = rightItem;
  if (rightItem.right !== null) {
    rightItem.right.left = rightItem;
  }
  transaction._mergeStructs.push(rightItem);
  if (rightItem.parentSub !== null && rightItem.right === null) {
    rightItem.parent._map.set(rightItem.parentSub, rightItem);
  }
  leftItem.length = diff;
  return rightItem;
};
var Item = class _Item extends AbstractStruct {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(id2, left, origin, right, rightOrigin, parent, parentSub, content) {
    super(id2, content.getLength());
    this.origin = origin;
    this.left = left;
    this.right = right;
    this.rightOrigin = rightOrigin;
    this.parent = parent;
    this.parentSub = parentSub;
    this.redone = null;
    this.content = content;
    this.info = this.content.isCountable() ? BIT2 : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(isMarked) {
    if ((this.info & BIT4) > 0 !== isMarked) {
      this.info ^= BIT4;
    }
  }
  get marker() {
    return (this.info & BIT4) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & BIT1) > 0;
  }
  set keep(doKeep) {
    if (this.keep !== doKeep) {
      this.info ^= BIT1;
    }
  }
  get countable() {
    return (this.info & BIT2) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & BIT3) > 0;
  }
  set deleted(doDelete) {
    if (this.deleted !== doDelete) {
      this.info ^= BIT3;
    }
  }
  markDeleted() {
    this.info |= BIT3;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= getState(store, this.origin.client)) {
      return this.origin.client;
    }
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= getState(store, this.rightOrigin.client)) {
      return this.rightOrigin.client;
    }
    if (this.parent && this.parent.constructor === ID && this.id.client !== this.parent.client && this.parent.clock >= getState(store, this.parent.client)) {
      return this.parent.client;
    }
    if (this.origin) {
      this.left = getItemCleanEnd(transaction, store, this.origin);
      this.origin = this.left.lastId;
    }
    if (this.rightOrigin) {
      this.right = getItemCleanStart(transaction, this.rightOrigin);
      this.rightOrigin = this.right.id;
    }
    if (this.left && this.left.constructor === GC || this.right && this.right.constructor === GC) {
      this.parent = null;
    } else if (!this.parent) {
      if (this.left && this.left.constructor === _Item) {
        this.parent = this.left.parent;
        this.parentSub = this.left.parentSub;
      } else if (this.right && this.right.constructor === _Item) {
        this.parent = this.right.parent;
        this.parentSub = this.right.parentSub;
      }
    } else if (this.parent.constructor === ID) {
      const parentItem = getItem(store, this.parent);
      if (parentItem.constructor === GC) {
        this.parent = null;
      } else {
        this.parent = /** @type {ContentType} */
        parentItem.content.type;
      }
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    if (offset > 0) {
      this.id.clock += offset;
      this.left = getItemCleanEnd(transaction, transaction.doc.store, createID(this.id.client, this.id.clock - 1));
      this.origin = this.left.lastId;
      this.content = this.content.splice(offset);
      this.length -= offset;
    }
    if (this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let left = this.left;
        let o;
        if (left !== null) {
          o = left.right;
        } else if (this.parentSub !== null) {
          o = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (o !== null && o.left !== null) {
            o = o.left;
          }
        } else {
          o = /** @type {AbstractType<any>} */
          this.parent._start;
        }
        const conflictingItems = /* @__PURE__ */ new Set();
        const itemsBeforeOrigin = /* @__PURE__ */ new Set();
        while (o !== null && o !== this.right) {
          itemsBeforeOrigin.add(o);
          conflictingItems.add(o);
          if (compareIDs(this.origin, o.origin)) {
            if (o.id.client < this.id.client) {
              left = o;
              conflictingItems.clear();
            } else if (compareIDs(this.rightOrigin, o.rightOrigin)) {
              break;
            }
          } else if (o.origin !== null && itemsBeforeOrigin.has(getItem(transaction.doc.store, o.origin))) {
            if (!conflictingItems.has(getItem(transaction.doc.store, o.origin))) {
              left = o;
              conflictingItems.clear();
            }
          } else {
            break;
          }
          o = o.right;
        }
        this.left = left;
      }
      if (this.left !== null) {
        const right = this.left.right;
        this.right = right;
        this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null) {
          r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null;
          while (r !== null && r.left !== null) {
            r = r.left;
          }
        } else {
          r = /** @type {AbstractType<any>} */
          this.parent._start;
          this.parent._start = this;
        }
        this.right = r;
      }
      if (this.right !== null) {
        this.right.left = this;
      } else if (this.parentSub !== null) {
        this.parent._map.set(this.parentSub, this);
        if (this.left !== null) {
          this.left.delete(transaction);
        }
      }
      if (this.parentSub === null && this.countable && !this.deleted) {
        this.parent._length += this.length;
      }
      addStruct(transaction.doc.store, this);
      this.content.integrate(transaction, this);
      addChangedTypeToTransaction(
        transaction,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      );
      if (
        /** @type {AbstractType<any>} */
        this.parent._item !== null && /** @type {AbstractType<any>} */
        this.parent._item.deleted || this.parentSub !== null && this.right !== null
      ) {
        this.delete(transaction);
      }
    } else {
      new GC(this.id, this.length).integrate(transaction, 0);
    }
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let n = this.right;
    while (n !== null && n.deleted) {
      n = n.right;
    }
    return n;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let n = this.left;
    while (n !== null && n.deleted) {
      n = n.left;
    }
    return n;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : createID(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor === right.constructor && compareIDs(right.origin, this.lastId) && this.right === right && compareIDs(this.rightOrigin, right.rightOrigin) && this.id.client === right.id.client && this.id.clock + this.length === right.id.clock && this.deleted === right.deleted && this.redone === null && right.redone === null && this.content.constructor === right.content.constructor && this.content.mergeWith(right.content)) {
      const searchMarker = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      if (searchMarker) {
        searchMarker.forEach((marker) => {
          if (marker.p === right) {
            marker.p = this;
            if (!this.deleted && this.countable) {
              marker.index -= this.length;
            }
          }
        });
      }
      if (right.keep) {
        this.keep = true;
      }
      this.right = right.right;
      if (this.right !== null) {
        this.right.left = this;
      }
      this.length += right.length;
      return true;
    }
    return false;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(transaction) {
    if (!this.deleted) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (this.countable && this.parentSub === null) {
        parent._length -= this.length;
      }
      this.markDeleted();
      addToDeleteSet(transaction.deleteSet, this.id.client, this.id.clock, this.length);
      addChangedTypeToTransaction(transaction, parent, this.parentSub);
      this.content.delete(transaction);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(store, parentGCd) {
    if (!this.deleted) {
      throw unexpectedCase();
    }
    this.content.gc(store);
    if (parentGCd) {
      replaceStruct(store, this, new GC(this.id, this.length));
    } else {
      this.content = new ContentDeleted(this.length);
    }
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(encoder, offset) {
    const origin = offset > 0 ? createID(this.id.client, this.id.clock + offset - 1) : this.origin;
    const rightOrigin = this.rightOrigin;
    const parentSub = this.parentSub;
    const info = this.content.getRef() & BITS5 | (origin === null ? 0 : BIT8) | // origin is defined
    (rightOrigin === null ? 0 : BIT7) | // right origin is defined
    (parentSub === null ? 0 : BIT6);
    encoder.writeInfo(info);
    if (origin !== null) {
      encoder.writeLeftID(origin);
    }
    if (rightOrigin !== null) {
      encoder.writeRightID(rightOrigin);
    }
    if (origin === null && rightOrigin === null) {
      const parent = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (parent._item !== void 0) {
        const parentItem = parent._item;
        if (parentItem === null) {
          const ykey = findRootTypeKey(parent);
          encoder.writeParentInfo(true);
          encoder.writeString(ykey);
        } else {
          encoder.writeParentInfo(false);
          encoder.writeLeftID(parentItem.id);
        }
      } else if (parent.constructor === String) {
        encoder.writeParentInfo(true);
        encoder.writeString(parent);
      } else if (parent.constructor === ID) {
        encoder.writeParentInfo(false);
        encoder.writeLeftID(parent);
      } else {
        unexpectedCase();
      }
      if (parentSub !== null) {
        encoder.writeString(parentSub);
      }
    }
    this.content.write(encoder, offset);
  }
};
var readItemContent = (decoder, info) => contentRefs[info & BITS5](decoder);
var contentRefs = [
  () => {
    unexpectedCase();
  },
  // GC is not ItemContent
  readContentDeleted,
  // 1
  readContentJSON,
  // 2
  readContentBinary,
  // 3
  readContentString,
  // 4
  readContentEmbed,
  // 5
  readContentFormat,
  // 6
  readContentType,
  // 7
  readContentAny,
  // 8
  readContentDoc,
  // 9
  () => {
    unexpectedCase();
  }
  // 10 - Skip is not ItemContent
];
var structSkipRefNumber = 10;
var Skip = class extends AbstractStruct {
  get deleted() {
    return true;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(right) {
    if (this.constructor !== right.constructor) {
      return false;
    }
    this.length += right.length;
    return true;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(transaction, offset) {
    unexpectedCase();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(encoder, offset) {
    encoder.writeInfo(structSkipRefNumber);
    writeVarUint(encoder.restEncoder, this.length - offset);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(transaction, store) {
    return null;
  }
};
var glo = (
  /** @type {any} */
  typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {}
);
var importIdentifier = "__ $YJS$ __";
if (glo[importIdentifier] === true) {
  console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
}
glo[importIdentifier] = true;

// src/api/client.ts
var import_obsidian = require("obsidian");
var MAX_BINARY_REDIRECTS = 5;
var RolayApiError = class extends Error {
  constructor(status, message, code = "http_error", details) {
    super(message);
    this.name = "RolayApiError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
};
var RolayApiClient = class {
  constructor(config) {
    this.config = config;
  }
  async login(request) {
    const response = await this.requestJson(
      "POST",
      "/v1/auth/login",
      request,
      { auth: false }
    );
    await this.config.saveSession({
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      user: response.user,
      authenticatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    return response;
  }
  async refresh() {
    const session = this.config.getSession();
    if (!session?.refreshToken) {
      throw new Error("No refresh token is stored yet.");
    }
    const body = {
      refreshToken: session.refreshToken
    };
    try {
      const response = await this.requestJson(
        "POST",
        "/v1/auth/refresh",
        body,
        { auth: false }
      );
      await this.config.saveSession({
        ...session,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        authenticatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      return response;
    } catch (error) {
      if (error instanceof RolayApiError && error.status === 401) {
        await this.config.saveSession(null);
      }
      throw error;
    }
  }
  async getCurrentUser() {
    return this.requestJson(
      "GET",
      "/v1/auth/me"
    );
  }
  async updateCurrentUserProfile(body) {
    return this.requestJson(
      "PATCH",
      "/v1/auth/me/profile",
      body
    );
  }
  async changeCurrentUserPassword(body) {
    const response = await this.requestJson(
      "PATCH",
      "/v1/auth/me/password",
      body
    );
    await this.config.saveSession({
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      user: response.user,
      authenticatedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    return response;
  }
  async listRooms() {
    return this.requestJson(
      "GET",
      "/v1/rooms"
    );
  }
  async createRoom(body) {
    return this.requestJson(
      "POST",
      "/v1/rooms",
      body
    );
  }
  async joinRoom(body) {
    return this.requestJson(
      "POST",
      "/v1/rooms/join",
      body
    );
  }
  async getRoomInvite(workspaceId) {
    return this.requestJson(
      "GET",
      `/v1/rooms/${encodeURIComponent(workspaceId)}/invite`
    );
  }
  async updateRoomInviteState(workspaceId, body) {
    return this.requestJson(
      "PATCH",
      `/v1/rooms/${encodeURIComponent(workspaceId)}/invite`,
      body
    );
  }
  async regenerateRoomInvite(workspaceId) {
    return this.requestJson(
      "POST",
      `/v1/rooms/${encodeURIComponent(workspaceId)}/invite/regenerate`
    );
  }
  async getRoomPublication(workspaceId) {
    return this.requestJson(
      "GET",
      `/v1/rooms/${encodeURIComponent(workspaceId)}/publication`
    );
  }
  async updateRoomPublication(workspaceId, body) {
    return this.requestJson(
      "PATCH",
      `/v1/rooms/${encodeURIComponent(workspaceId)}/publication`,
      body
    );
  }
  async listManagedUsers() {
    return this.requestJson(
      "GET",
      "/v1/admin/users"
    );
  }
  async createManagedUser(body) {
    return this.requestJson(
      "POST",
      "/v1/admin/users",
      body
    );
  }
  async deleteManagedUser(userId) {
    return this.requestJson(
      "DELETE",
      `/v1/admin/users/${encodeURIComponent(userId)}`
    );
  }
  async listAllRoomsAsAdmin() {
    return this.requestJson(
      "GET",
      "/v1/admin/workspaces"
    );
  }
  async listRoomMembersAsAdmin(workspaceId) {
    return this.requestJson(
      "GET",
      `/v1/admin/workspaces/${encodeURIComponent(workspaceId)}/members`
    );
  }
  async listRoomMembers(workspaceId) {
    return this.requestJson(
      "GET",
      `/v1/rooms/${encodeURIComponent(workspaceId)}/members`
    );
  }
  async addRoomMemberAsAdmin(workspaceId, body) {
    return this.requestJson(
      "POST",
      `/v1/admin/workspaces/${encodeURIComponent(workspaceId)}/members`,
      body
    );
  }
  async deleteRoomAsAdmin(workspaceId) {
    return this.requestJson(
      "DELETE",
      `/v1/admin/workspaces/${encodeURIComponent(workspaceId)}`
    );
  }
  async getWorkspaceTree(workspaceId) {
    return this.requestJson(
      "GET",
      `/v1/workspaces/${encodeURIComponent(workspaceId)}/tree`
    );
  }
  async applyBatchOperations(workspaceId, body) {
    const response = await this.requestJsonWithMeta(
      "POST",
      `/v1/workspaces/${encodeURIComponent(workspaceId)}/ops/batch`,
      body
    );
    return withResponseMeta(response.json, response.meta);
  }
  async createCrdtToken(entryId) {
    return this.requestJson(
      "POST",
      `/v1/files/${encodeURIComponent(entryId)}/crdt-token`
    );
  }
  async getWorkspaceMarkdownBootstrap(workspaceId, body) {
    return this.requestJson(
      "POST",
      `/v1/workspaces/${encodeURIComponent(workspaceId)}/markdown/bootstrap`,
      body
    );
  }
  async createBlobUploadTicket(entryId, body) {
    const response = await this.requestJsonWithMeta(
      "POST",
      `/v1/files/${encodeURIComponent(entryId)}/blob/upload-ticket`,
      body
    );
    return withResponseMeta(response.json, response.meta);
  }
  async createBlobDownloadTicket(entryId) {
    const response = await this.requestJsonWithMeta(
      "POST",
      `/v1/files/${encodeURIComponent(entryId)}/blob/download-ticket`
    );
    return withResponseMeta(response.json, response.meta);
  }
  async cancelBlobUpload(entryId, uploadId) {
    const response = await this.requestJsonWithMeta(
      "DELETE",
      `/v1/files/${encodeURIComponent(entryId)}/blob/uploads/${encodeURIComponent(uploadId)}`
    );
    return withResponseMeta(response.json, response.meta);
  }
  async uploadBlobContent(entryId, uploadId, data, expectedHash, startOffset = 0, totalSize = data.byteLength, onProgress, signal, fallbackTarget) {
    const path = `/v1/files/${encodeURIComponent(entryId)}/blob/uploads/${encodeURIComponent(uploadId)}/content`;
    try {
      return await this.uploadBlobContentWithRefresh(
        path,
        data,
        expectedHash,
        startOffset,
        totalSize,
        onProgress,
        signal
      );
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw error;
      }
      if (!fallbackTarget || !shouldFallbackToRawUpload(error)) {
        throw error;
      }
      if (startOffset > 0) {
        throw error;
      }
      try {
        await this.uploadBlobToTarget(fallbackTarget, data, onProgress, signal);
        return {
          ok: true,
          hash: expectedHash,
          sizeBytes: totalSize,
          uploadedBytes: totalSize,
          receivedBytes: totalSize,
          complete: true,
          status: 200,
          requestId: null,
          transport: "raw-fallback"
        };
      } catch (fallbackError) {
        if (fallbackError instanceof Error && fallbackError.name === "AbortError") {
          throw fallbackError;
        }
        throw new Error(
          `Authenticated blob upload failed (${formatUploadTransportError(error)}); raw upload fallback also failed (${formatUploadTransportError(fallbackError)}).`
        );
      }
    }
  }
  async uploadBlobToTarget(target, data, onProgress, signal) {
    const uploadTarget = target;
    if (!uploadTarget) {
      throw new Error("Blob upload target is missing.");
    }
    const transportErrors = [];
    const electronUpload = tryElectronBinaryUpload(uploadTarget, data, onProgress, signal);
    if (electronUpload) {
      try {
        await electronUpload;
        return;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          throw error;
        }
        transportErrors.push(`electron: ${error instanceof Error ? error.message : String(error)}`);
      }
    } else {
      transportErrors.push("electron: unavailable");
    }
    const nodeUpload = tryNodeBinaryUpload(uploadTarget, data, onProgress, signal);
    if (nodeUpload) {
      try {
        await nodeUpload;
        return;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          throw error;
        }
        transportErrors.push(`node: ${error instanceof Error ? error.message : String(error)}`);
      }
    } else {
      transportErrors.push("node: unavailable");
    }
    try {
      await xhrBinaryRequest({
        method: uploadTarget.method,
        url: uploadTarget.url,
        headers: uploadTarget.headers,
        body: data,
        signal,
        onUploadProgress: onProgress
      });
      return;
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw error;
      }
      transportErrors.push(`xhr: ${error instanceof Error ? error.message : String(error)}`);
    }
    try {
      const response = await fetch(uploadTarget.url, {
        method: uploadTarget.method,
        headers: uploadTarget.headers,
        body: new Uint8Array(data),
        signal
      });
      if (!response.ok) {
        throw await this.createFetchError(response);
      }
      onProgress?.({
        loadedBytes: data.byteLength,
        totalBytes: data.byteLength
      });
      return;
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw error;
      }
      transportErrors.push(`fetch: ${error instanceof Error ? error.message : String(error)}`);
    }
    throw new Error(`Blob upload failed via all transports (${transportErrors.join("; ")})`);
  }
  async downloadBlobFromUrl(url, onProgress, signal) {
    const transportErrors = [];
    const electronDownload = tryElectronBinaryDownload(url, onProgress, signal);
    if (electronDownload) {
      try {
        return await electronDownload;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          throw error;
        }
        transportErrors.push(`electron: ${error instanceof Error ? error.message : String(error)}`);
      }
    } else {
      transportErrors.push("electron: unavailable");
    }
    const nodeDownload = tryNodeBinaryDownload(url, onProgress, signal);
    if (nodeDownload) {
      try {
        return await nodeDownload;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          throw error;
        }
        transportErrors.push(`node: ${error instanceof Error ? error.message : String(error)}`);
      }
    } else {
      transportErrors.push("node: unavailable");
    }
    try {
      return await xhrBinaryRequest({
        method: "GET",
        url,
        responseType: "arraybuffer",
        signal,
        onDownloadProgress: onProgress,
        mapResponse: (request) => {
          const data = normalizeArrayBufferResponse(request.response);
          return {
            data,
            contentType: request.getResponseHeader("Content-Type"),
            contentLength: parseContentLengthHeader(request.getResponseHeader("Content-Length")),
            hash: request.getResponseHeader("X-Rolay-Blob-Hash")
          };
        }
      });
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw error;
      }
      transportErrors.push(`xhr: ${error instanceof Error ? error.message : String(error)}`);
    }
    try {
      return await fetchBinaryDownload(url, onProgress, signal);
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw error;
      }
      transportErrors.push(`fetch: ${error instanceof Error ? error.message : String(error)}`);
    }
    throw new Error(`Blob download failed via all transports (${transportErrors.join("; ")})`);
  }
  async downloadBlobContent(url, offset, onChunk, onProgress, signal) {
    return this.downloadBlobContentWithRefresh(url, offset, onChunk, onProgress, signal);
  }
  async fetchAuthorizedStream(path, init = {}) {
    const initialToken = await this.getAccessToken();
    let response = await this.fetchStream(path, initialToken, init);
    if (response.status === 401) {
      await this.refresh();
      const nextToken = await this.getAccessToken();
      response = await this.fetchStream(path, nextToken, init);
    }
    if (!response.ok) {
      throw await this.createFetchError(response);
    }
    return response;
  }
  buildAbsoluteUrl(path) {
    return this.buildUrl(path);
  }
  async getValidAccessToken() {
    return this.getAccessToken();
  }
  async requestJson(method, path, body, options = {}) {
    const auth = options.auth !== false;
    const response = auth ? await this.requestWithRefresh(method, path, body) : await this.performRequest(method, path, body, void 0);
    if (response.status >= 400) {
      throw createRequestUrlError(response);
    }
    return response.json;
  }
  async requestJsonWithMeta(method, path, body, options = {}) {
    const auth = options.auth !== false;
    const response = auth ? await this.requestWithRefresh(method, path, body) : await this.performRequest(method, path, body, void 0);
    if (response.status >= 400) {
      throw createRequestUrlError(response);
    }
    return {
      json: response.json,
      meta: extractResponseMeta(response)
    };
  }
  async requestWithRefresh(method, path, body) {
    const initialToken = await this.getAccessToken();
    let response = await this.performRequest(method, path, body, initialToken);
    if (response.status === 401) {
      await this.refresh();
      const nextToken = await this.getAccessToken();
      response = await this.performRequest(method, path, body, nextToken);
    }
    if (response.status >= 400) {
      throw createRequestUrlError(response);
    }
    return response;
  }
  async performRequest(method, path, body, accessToken) {
    const headers = {
      Accept: "application/json"
    };
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
    return (0, import_obsidian.requestUrl)({
      url: this.buildUrl(path),
      method,
      headers,
      contentType: body === void 0 ? void 0 : "application/json",
      body: body === void 0 ? void 0 : JSON.stringify(body),
      throw: false
    });
  }
  async getAccessToken() {
    const session = this.config.getSession();
    if (session?.accessToken) {
      return session.accessToken;
    }
    if (session?.refreshToken) {
      const response = await this.refresh();
      return response.accessToken;
    }
    throw new Error("You are not authenticated yet.");
  }
  buildUrl(path) {
    if (/^https?:\/\//i.test(path)) {
      return path;
    }
    const baseUrl = this.config.getServerUrl().trim().replace(/\/+$/, "");
    if (!baseUrl) {
      throw new Error("Server URL is empty.");
    }
    return `${baseUrl}${path}`;
  }
  async fetchStream(path, accessToken, init) {
    const headers = new Headers(init.headers ?? {});
    headers.set("Accept", "text/event-stream");
    headers.set("Authorization", `Bearer ${accessToken}`);
    return fetch(this.buildUrl(path), {
      ...init,
      headers
    });
  }
  async createFetchError(response) {
    const fallbackMessage = `HTTP ${response.status}`;
    const responseText = await response.text();
    return createTextError(response.status, responseText, fallbackMessage);
  }
  async downloadBlobContentWithRefresh(url, offset, onChunk, onProgress, signal) {
    const initialToken = await this.getAccessToken();
    try {
      return await this.performAuthorizedBlobDownload(
        url,
        initialToken,
        offset,
        onChunk,
        onProgress,
        signal
      );
    } catch (error) {
      if (!(error instanceof RolayApiError) || error.status !== 401) {
        throw error;
      }
      await this.refresh();
      const nextToken = await this.getAccessToken();
      return this.performAuthorizedBlobDownload(
        url,
        nextToken,
        offset,
        onChunk,
        onProgress,
        signal
      );
    }
  }
  async performAuthorizedBlobDownload(url, accessToken, offset, onChunk, onProgress, signal) {
    const headers = {
      Accept: "application/octet-stream",
      Authorization: `Bearer ${accessToken}`
    };
    if (offset > 0) {
      headers.Range = `bytes=${offset}-`;
    }
    const absoluteUrl = this.buildUrl(url);
    const mappedProgress = mapTransferProgress(onProgress, offset, 0);
    const electronDownload = tryElectronBinaryDownloadStream(
      absoluteUrl,
      headers,
      offset,
      onChunk,
      mappedProgress,
      signal
    );
    if (electronDownload) {
      try {
        return await electronDownload;
      } catch (error) {
        if (error instanceof RolayApiError || error instanceof Error && error.name === "AbortError") {
          throw error;
        }
      }
    }
    const nodeDownload = tryNodeBinaryDownloadStream(
      absoluteUrl,
      headers,
      offset,
      onChunk,
      mappedProgress,
      signal
    );
    if (nodeDownload) {
      try {
        return await nodeDownload;
      } catch (error) {
        if (error instanceof RolayApiError || error instanceof Error && error.name === "AbortError") {
          throw error;
        }
      }
    }
    try {
      return await fetchBinaryDownloadStream(
        absoluteUrl,
        headers,
        offset,
        onChunk,
        mappedProgress,
        signal
      );
    } catch (error) {
      if (error instanceof RolayApiError || error instanceof Error && error.name === "AbortError") {
        throw error;
      }
    }
    const download = await xhrBinaryRequest({
      method: "GET",
      url: absoluteUrl,
      headers,
      responseType: "arraybuffer",
      signal,
      onDownloadProgress: mappedProgress,
      mapResponse: (request) => {
        const data = normalizeArrayBufferResponse(request.response);
        return {
          data,
          contentType: request.getResponseHeader("Content-Type"),
          contentLength: parseContentLengthHeader(request.getResponseHeader("Content-Length")),
          hash: request.getResponseHeader("X-Rolay-Blob-Hash"),
          requestId: requestHeader(request, "X-Rolay-Request-Id"),
          contentRange: requestHeader(request, "Content-Range"),
          acceptRanges: requestHeader(request, "Accept-Ranges")
        };
      }
    });
    await onChunk(download.data);
    return {
      contentType: download.contentType,
      contentLength: download.contentLength,
      hash: download.hash,
      status: offset > 0 ? 206 : 200,
      requestId: download.requestId,
      transport: "xhr",
      contentRange: download.contentRange,
      acceptRanges: download.acceptRanges
    };
  }
  async uploadBlobContentWithRefresh(path, data, expectedHash, startOffset, totalSize, onProgress, signal) {
    const initialToken = await this.getAccessToken();
    try {
      return await this.performAuthorizedBlobUpload(
        path,
        initialToken,
        data,
        expectedHash,
        startOffset,
        totalSize,
        onProgress,
        signal
      );
    } catch (error) {
      if (!(error instanceof RolayApiError) || error.status !== 401) {
        throw error;
      }
      await this.refresh();
      const nextToken = await this.getAccessToken();
      return this.performAuthorizedBlobUpload(
        path,
        nextToken,
        data,
        expectedHash,
        startOffset,
        totalSize,
        onProgress,
        signal
      );
    }
  }
  async performAuthorizedBlobUpload(path, accessToken, data, expectedHash, startOffset, totalSize, onProgress, signal) {
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/octet-stream"
    };
    if (data.byteLength > 0 && totalSize > 0) {
      headers["Content-Range"] = `bytes ${startOffset}-${startOffset + data.byteLength - 1}/${totalSize}`;
    }
    const absoluteUrl = this.buildUrl(path);
    const nodeResponse = tryNodeBinaryRequest(
      {
        method: "PUT",
        url: absoluteUrl,
        headers
      },
      data,
      mapTransferProgress(onProgress, startOffset, totalSize),
      signal
    );
    if (nodeResponse) {
      const response2 = await nodeResponse;
      if (response2.status >= 200 && response2.status < 300) {
        return parseBlobUploadContentResponse(
          response2.text,
          expectedHash,
          totalSize,
          response2.status,
          getHeaderValue(response2.headers, "x-rolay-request-id"),
          "node"
        );
      }
      throw createTextError(response2.status, response2.text, response2.statusText || `HTTP ${response2.status}`);
    }
    try {
      return await xhrBinaryRequest({
        method: "PUT",
        url: absoluteUrl,
        headers,
        body: data,
        signal,
        onUploadProgress: mapTransferProgress(onProgress, startOffset, totalSize),
        mapResponse: (request) => {
          return parseBlobUploadContentResponse(
            extractXhrResponseText(request),
            expectedHash,
            totalSize,
            request.status,
            requestHeader(request, "X-Rolay-Request-Id"),
            "xhr"
          );
        }
      });
    } catch (error) {
      if (error instanceof RolayApiError || error instanceof Error && error.name === "AbortError") {
        throw error;
      }
    }
    const response = await fetch(absoluteUrl, {
      method: "PUT",
      headers,
      body: new Uint8Array(data),
      signal
    });
    if (!response.ok) {
      throw await this.createFetchError(response);
    }
    onProgress?.({
      loadedBytes: totalSize,
      totalBytes: totalSize
    });
    return parseBlobUploadContentResponse(
      await response.text(),
      expectedHash,
      totalSize,
      response.status,
      response.headers.get("X-Rolay-Request-Id"),
      "fetch"
    );
  }
};
function xhrBinaryRequest(options) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(options.method, options.url, true);
    request.responseType = options.responseType ?? "";
    for (const [header, value] of Object.entries(options.headers ?? {})) {
      request.setRequestHeader(header, value);
    }
    const cleanup = () => {
      options.signal?.removeEventListener("abort", abortHandler);
    };
    const abortHandler = () => {
      request.abort();
      cleanup();
      reject(createAbortError());
    };
    if (options.signal) {
      if (options.signal.aborted) {
        reject(createAbortError());
        return;
      }
      options.signal.addEventListener("abort", abortHandler, { once: true });
    }
    request.upload.onprogress = (event) => {
      if (!options.onUploadProgress) {
        return;
      }
      options.onUploadProgress({
        loadedBytes: event.loaded,
        totalBytes: event.lengthComputable ? event.total : options.body?.byteLength ?? 0
      });
    };
    request.onprogress = (event) => {
      if (!options.onDownloadProgress) {
        return;
      }
      options.onDownloadProgress({
        loadedBytes: event.loaded,
        totalBytes: event.lengthComputable ? event.total : 0
      });
    };
    request.onerror = () => {
      cleanup();
      reject(new Error(`Request to ${options.url} failed.`));
    };
    request.onabort = () => {
      cleanup();
      reject(createAbortError());
    };
    request.onload = () => {
      cleanup();
      if (request.status < 200 || request.status >= 300) {
        reject(
          createTextError(
            request.status,
            extractXhrResponseText(request),
            request.statusText || `HTTP ${request.status}`
          )
        );
        return;
      }
      if (options.mapResponse) {
        resolve(options.mapResponse(request));
        return;
      }
      resolve(void 0);
    };
    request.send(options.body);
  });
}
function tryNodeBinaryUpload(target, data, onProgress, signal) {
  const nodeRequire = getNodeRequire();
  if (!nodeRequire) {
    return null;
  }
  const targetUrl = new URL(target.url);
  const requestModule = nodeRequire(targetUrl.protocol === "https:" ? "node:https" : "node:http");
  return new Promise((resolve, reject) => {
    let settled = false;
    const headers = { ...target.headers };
    if (!hasHeader(headers, "content-length")) {
      headers["Content-Length"] = String(data.byteLength);
    }
    const cleanup = () => {
      signal?.removeEventListener("abort", abortHandler);
    };
    const finishReject = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error instanceof Error ? error : new Error(String(error)));
    };
    const finishResolve = () => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve();
    };
    const abortHandler = () => {
      request.destroy(createAbortError());
      finishReject(createAbortError());
    };
    if (signal?.aborted) {
      finishReject(createAbortError());
      return;
    }
    signal?.addEventListener("abort", abortHandler, { once: true });
    const request = requestModule.request(
      {
        protocol: targetUrl.protocol,
        hostname: targetUrl.hostname,
        port: targetUrl.port ? Number(targetUrl.port) : void 0,
        path: `${targetUrl.pathname}${targetUrl.search}`,
        method: target.method,
        headers
      },
      (response) => {
        const chunks = [];
        response.on("data", (chunk) => {
          if (typeof chunk === "string") {
            chunks.push(Buffer.from(chunk));
            return;
          }
          chunks.push(chunk instanceof Uint8Array ? chunk : Buffer.from(chunk));
        });
        response.on("end", () => {
          const status = response.statusCode ?? 0;
          if (status < 200 || status >= 300) {
            const responseText = Buffer.concat(chunks.map((chunk) => Buffer.from(chunk))).toString("utf8");
            finishReject(createTextError(status, responseText, response.statusMessage || `HTTP ${status}`));
            return;
          }
          onProgress?.({
            loadedBytes: data.byteLength,
            totalBytes: data.byteLength
          });
          finishResolve();
        });
      }
    );
    request.on("error", (error) => {
      finishReject(new Error(`Request to ${target.url} failed: ${error.message}`));
    });
    request.write(Buffer.from(new Uint8Array(data)));
    request.end();
  });
}
function tryElectronBinaryUpload(target, data, onProgress, signal) {
  const nodeRequire = getNodeRequire();
  if (!nodeRequire) {
    return null;
  }
  let electronModule = null;
  try {
    electronModule = nodeRequire("electron");
  } catch {
    return null;
  }
  if (!electronModule?.net?.request) {
    return null;
  }
  const electronNet = electronModule.net;
  return new Promise((resolve, reject) => {
    let settled = false;
    const request = electronNet.request({
      method: target.method,
      url: target.url
    });
    const cleanup = () => {
      signal?.removeEventListener("abort", abortHandler);
    };
    const finishReject = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error instanceof Error ? error : new Error(String(error)));
    };
    const finishResolve = () => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve();
    };
    const abortHandler = () => {
      request.abort();
      finishReject(createAbortError());
    };
    if (signal?.aborted) {
      finishReject(createAbortError());
      return;
    }
    signal?.addEventListener("abort", abortHandler, { once: true });
    for (const [header, value] of Object.entries(target.headers)) {
      request.setHeader(header, value);
    }
    if (!hasHeader(target.headers, "content-length")) {
      request.setHeader("Content-Length", String(data.byteLength));
    }
    request.on("response", (response) => {
      const chunks = [];
      response.on("data", (chunk) => {
        if (typeof chunk === "string") {
          chunks.push(Buffer.from(chunk));
          return;
        }
        chunks.push(chunk instanceof Uint8Array ? chunk : Buffer.from(chunk));
      });
      response.on("end", () => {
        const status = response.statusCode ?? 0;
        if (status < 200 || status >= 300) {
          const responseText = Buffer.concat(chunks.map((chunk) => Buffer.from(chunk))).toString("utf8");
          finishReject(createTextError(status, responseText, response.statusMessage || `HTTP ${status}`));
          return;
        }
        onProgress?.({
          loadedBytes: data.byteLength,
          totalBytes: data.byteLength
        });
        finishResolve();
      });
    });
    request.on("error", (error) => {
      finishReject(new Error(`Request to ${target.url} failed: ${error.message}`));
    });
    request.write(Buffer.from(new Uint8Array(data)));
    request.end();
  });
}
function tryNodeBinaryDownload(urlString, onProgress, signal) {
  const nodeRequire = getNodeRequire();
  if (!nodeRequire) {
    return null;
  }
  return startNodeBinaryDownload(urlString, onProgress, signal, nodeRequire, 0);
}
function startNodeBinaryDownload(urlString, onProgress, signal, nodeRequire, redirectCount) {
  if (redirectCount > MAX_BINARY_REDIRECTS) {
    return Promise.reject(new Error(`Binary download redirect limit exceeded for ${urlString}.`));
  }
  const targetUrl = new URL(urlString);
  const requestModule = nodeRequire(targetUrl.protocol === "https:" ? "node:https" : "node:http");
  return new Promise((resolve, reject) => {
    let settled = false;
    let request;
    const cleanup = () => {
      signal?.removeEventListener("abort", abortHandler);
    };
    const finishReject = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error instanceof Error ? error : new Error(String(error)));
    };
    const finishResolve = (result) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve(result);
    };
    const abortHandler = () => {
      request.destroy(createAbortError());
      finishReject(createAbortError());
    };
    if (signal?.aborted) {
      finishReject(createAbortError());
      return;
    }
    signal?.addEventListener("abort", abortHandler, { once: true });
    request = requestModule.request(
      {
        protocol: targetUrl.protocol,
        hostname: targetUrl.hostname,
        port: targetUrl.port ? Number(targetUrl.port) : void 0,
        path: `${targetUrl.pathname}${targetUrl.search}`,
        method: "GET"
      },
      (response) => {
        const totalBytes = parseContentLengthHeader(getHeaderValue(response.headers, "content-length"));
        const chunks = [];
        let loadedBytes = 0;
        response.on("data", (chunk) => {
          const bytes = typeof chunk === "string" ? Buffer.from(chunk) : chunk instanceof Uint8Array ? chunk : Buffer.from(chunk);
          chunks.push(bytes);
          loadedBytes += bytes.byteLength;
          onProgress?.({
            loadedBytes,
            totalBytes: totalBytes ?? loadedBytes
          });
        });
        response.on("end", async () => {
          const status = response.statusCode ?? 0;
          const buffer = Buffer.concat(chunks.map((chunk) => Buffer.from(chunk)));
          const location2 = getHeaderValue(response.headers, "location");
          if (status >= 300 && status < 400 && location2) {
            try {
              const redirectedUrl = new URL(location2, urlString).toString();
              const redirectedResult = await startNodeBinaryDownload(
                redirectedUrl,
                onProgress,
                signal,
                nodeRequire,
                redirectCount + 1
              );
              finishResolve(redirectedResult);
            } catch (error) {
              finishReject(error);
            }
            return;
          }
          if (status < 200 || status >= 300) {
            finishReject(createTextError(status, buffer.toString("utf8"), response.statusMessage || `HTTP ${status}`));
            return;
          }
          finishResolve({
            data: normalizeArrayBufferResponse(buffer),
            contentType: getHeaderValue(response.headers, "content-type"),
            contentLength: totalBytes,
            hash: getHeaderValue(response.headers, "x-rolay-blob-hash")
          });
        });
      }
    );
    request.on("error", (error) => {
      finishReject(new Error(`Request to ${urlString} failed: ${error.message}`));
    });
    request.end();
  });
}
function tryElectronBinaryDownload(url, onProgress, signal) {
  const nodeRequire = getNodeRequire();
  if (!nodeRequire) {
    return null;
  }
  let electronModule = null;
  try {
    electronModule = nodeRequire("electron");
  } catch {
    return null;
  }
  if (!electronModule?.net?.request) {
    return null;
  }
  return startElectronBinaryDownload(url, onProgress, signal, electronModule.net, 0);
}
function startElectronBinaryDownload(url, onProgress, signal, electronNet, redirectCount) {
  if (redirectCount > MAX_BINARY_REDIRECTS) {
    return Promise.reject(new Error(`Binary download redirect limit exceeded for ${url}.`));
  }
  return new Promise((resolve, reject) => {
    let settled = false;
    const request = electronNet.request({
      method: "GET",
      url
    });
    const cleanup = () => {
      signal?.removeEventListener("abort", abortHandler);
    };
    const finishReject = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error instanceof Error ? error : new Error(String(error)));
    };
    const finishResolve = (result) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve(result);
    };
    const abortHandler = () => {
      request.abort();
      finishReject(createAbortError());
    };
    if (signal?.aborted) {
      finishReject(createAbortError());
      return;
    }
    signal?.addEventListener("abort", abortHandler, { once: true });
    request.on("response", (response) => {
      const totalBytes = parseContentLengthHeader(getHeaderValue(response.headers, "content-length"));
      const chunks = [];
      let loadedBytes = 0;
      response.on("data", (chunk) => {
        const bytes = typeof chunk === "string" ? Buffer.from(chunk) : chunk instanceof Uint8Array ? chunk : Buffer.from(chunk);
        chunks.push(bytes);
        loadedBytes += bytes.byteLength;
        onProgress?.({
          loadedBytes,
          totalBytes: totalBytes ?? loadedBytes
        });
      });
      response.on("end", async () => {
        const status = response.statusCode ?? 0;
        const buffer = Buffer.concat(chunks.map((chunk) => Buffer.from(chunk)));
        const location2 = getHeaderValue(response.headers, "location");
        if (status >= 300 && status < 400 && location2) {
          try {
            const redirectedUrl = new URL(location2, url).toString();
            const redirectedResult = await startElectronBinaryDownload(
              redirectedUrl,
              onProgress,
              signal,
              electronNet,
              redirectCount + 1
            );
            finishResolve(redirectedResult);
          } catch (error) {
            finishReject(error);
          }
          return;
        }
        if (status < 200 || status >= 300) {
          finishReject(createTextError(status, buffer.toString("utf8"), response.statusMessage || `HTTP ${status}`));
          return;
        }
        finishResolve({
          data: normalizeArrayBufferResponse(buffer),
          contentType: getHeaderValue(response.headers, "content-type"),
          contentLength: totalBytes,
          hash: getHeaderValue(response.headers, "x-rolay-blob-hash")
        });
      });
    });
    request.on("error", (error) => {
      finishReject(new Error(`Request to ${url} failed: ${error.message}`));
    });
    request.end();
  });
}
function tryNodeBinaryDownloadStream(url, headers, offset, onChunk, onProgress, signal) {
  const nodeRequire = getNodeRequire();
  if (!nodeRequire) {
    return null;
  }
  const targetUrl = new URL(url);
  const requestModule = nodeRequire(targetUrl.protocol === "https:" ? "node:https" : "node:http");
  return new Promise((resolve, reject) => {
    let settled = false;
    let loadedBytes = 0;
    let request;
    const cleanup = () => {
      signal?.removeEventListener("abort", abortHandler);
    };
    const finishResolve = (result) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve(result);
    };
    const finishReject = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error instanceof Error ? error : new Error(String(error)));
    };
    const abortHandler = () => {
      request.destroy(createAbortError());
      finishReject(createAbortError());
    };
    if (signal?.aborted) {
      finishReject(createAbortError());
      return;
    }
    signal?.addEventListener("abort", abortHandler, { once: true });
    request = requestModule.request(
      {
        protocol: targetUrl.protocol,
        hostname: targetUrl.hostname,
        port: targetUrl.port ? Number(targetUrl.port) : void 0,
        path: `${targetUrl.pathname}${targetUrl.search}`,
        method: "GET",
        headers
      },
      (response) => {
        const status = response.statusCode ?? 0;
        const errorChunks = [];
        let pendingChunkWrite = null;
        if (status >= 200 && status < 300) {
          ensureRangeRequestHonored(
            status,
            (name) => getHeaderValue(response.headers, name),
            offset
          );
        }
        const totalBytes = parseContentLengthHeader(getHeaderValue(response.headers, "content-length"));
        response.on("data", (chunk) => {
          const bytes = typeof chunk === "string" ? new Uint8Array(Buffer.from(chunk)) : chunk instanceof Uint8Array ? new Uint8Array(chunk) : new Uint8Array(Buffer.from(chunk));
          if (status < 200 || status >= 300) {
            errorChunks.push(bytes);
            return;
          }
          response.pause?.();
          loadedBytes += bytes.byteLength;
          pendingChunkWrite = Promise.resolve(onChunk(toOwnedArrayBuffer(bytes))).then(() => {
            onProgress?.({
              loadedBytes,
              totalBytes: totalBytes ?? loadedBytes
            });
          }).then(
            () => {
              if (!settled) {
                response.resume?.();
              }
            },
            (error) => {
              request.destroy(error instanceof Error ? error : new Error(String(error)));
              finishReject(error);
            }
          );
        });
        response.on("end", () => {
          const finalize = () => {
            if (status < 200 || status >= 300) {
              finishReject(
                createTextError(
                  status,
                  Buffer.concat(errorChunks.map((chunk) => Buffer.from(chunk))).toString("utf8"),
                  response.statusMessage ?? `HTTP ${status}`
                )
              );
              return;
            }
            finishResolve({
              contentType: getHeaderValue(response.headers, "content-type"),
              contentLength: totalBytes,
              hash: getHeaderValue(response.headers, "x-rolay-blob-hash"),
              status,
              requestId: getHeaderValue(response.headers, "x-rolay-request-id"),
              transport: "node",
              contentRange: getHeaderValue(response.headers, "content-range"),
              acceptRanges: getHeaderValue(response.headers, "accept-ranges")
            });
          };
          if (pendingChunkWrite) {
            void pendingChunkWrite.then(finalize, finishReject);
            return;
          }
          finalize();
        });
      }
    );
    request.on("error", (error) => {
      finishReject(new Error(`Request to ${url} failed: ${error.message}`));
    });
    request.end();
  });
}
function tryElectronBinaryDownloadStream(url, headers, offset, onChunk, onProgress, signal) {
  const nodeRequire = getNodeRequire();
  if (!nodeRequire) {
    return null;
  }
  let electronModule = null;
  try {
    electronModule = nodeRequire("electron");
  } catch {
    return null;
  }
  if (!electronModule?.net?.request) {
    return null;
  }
  const electronNet = electronModule.net;
  return new Promise((resolve, reject) => {
    let settled = false;
    let loadedBytes = 0;
    const request = electronNet.request({
      method: "GET",
      url
    });
    const cleanup = () => {
      signal?.removeEventListener("abort", abortHandler);
    };
    const finishResolve = (result) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve(result);
    };
    const finishReject = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error instanceof Error ? error : new Error(String(error)));
    };
    const abortHandler = () => {
      request.abort();
      finishReject(createAbortError());
    };
    if (signal?.aborted) {
      finishReject(createAbortError());
      return;
    }
    signal?.addEventListener("abort", abortHandler, { once: true });
    for (const [headerName, headerValue] of Object.entries(headers)) {
      request.setHeader(headerName, headerValue);
    }
    request.on("response", (response) => {
      const status = response.statusCode ?? 0;
      const errorChunks = [];
      let pendingChunkWrite = null;
      if (status >= 200 && status < 300) {
        ensureRangeRequestHonored(
          status,
          (name) => getHeaderValue(response.headers, name),
          offset
        );
      }
      const totalBytes = parseContentLengthHeader(getHeaderValue(response.headers, "content-length"));
      response.on("data", (chunk) => {
        const bytes = typeof chunk === "string" ? new Uint8Array(Buffer.from(chunk)) : chunk instanceof Uint8Array ? new Uint8Array(chunk) : new Uint8Array(Buffer.from(chunk));
        if (status < 200 || status >= 300) {
          errorChunks.push(bytes);
          return;
        }
        response.pause?.();
        loadedBytes += bytes.byteLength;
        pendingChunkWrite = Promise.resolve(onChunk(toOwnedArrayBuffer(bytes))).then(() => {
          onProgress?.({
            loadedBytes,
            totalBytes: totalBytes ?? loadedBytes
          });
        }).then(
          () => {
            if (!settled) {
              response.resume?.();
            }
          },
          (error) => {
            request.abort();
            finishReject(error);
          }
        );
      });
      response.on("end", () => {
        const finalize = () => {
          if (status < 200 || status >= 300) {
            finishReject(
              createTextError(
                status,
                Buffer.concat(errorChunks.map((chunk) => Buffer.from(chunk))).toString("utf8"),
                response.statusMessage ?? `HTTP ${status}`
              )
            );
            return;
          }
          finishResolve({
            contentType: getHeaderValue(response.headers, "content-type"),
            contentLength: totalBytes,
            hash: getHeaderValue(response.headers, "x-rolay-blob-hash"),
            status,
            requestId: getHeaderValue(response.headers, "x-rolay-request-id"),
            transport: "electron",
            contentRange: getHeaderValue(response.headers, "content-range"),
            acceptRanges: getHeaderValue(response.headers, "accept-ranges")
          });
        };
        if (pendingChunkWrite) {
          void pendingChunkWrite.then(finalize, finishReject);
          return;
        }
        finalize();
      });
    });
    request.on("error", (error) => {
      finishReject(new Error(`Request to ${url} failed: ${error.message}`));
    });
    request.end();
  });
}
function hasHeader(headers, expectedName) {
  const normalizedExpected = expectedName.toLowerCase();
  return Object.keys(headers).some((header) => header.toLowerCase() === normalizedExpected);
}
function tryNodeBinaryRequest(requestTarget, data, onProgress, signal) {
  const nodeRequire = getNodeRequire();
  if (!nodeRequire) {
    return null;
  }
  const targetUrl = new URL(requestTarget.url);
  const requestModule = nodeRequire(targetUrl.protocol === "https:" ? "node:https" : "node:http");
  return new Promise((resolve, reject) => {
    let settled = false;
    const headers = { ...requestTarget.headers };
    if (!hasHeader(headers, "content-length")) {
      headers["Content-Length"] = String(data.byteLength);
    }
    let request;
    const cleanup = () => {
      signal?.removeEventListener("abort", abortHandler);
    };
    const finishReject = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error instanceof Error ? error : new Error(String(error)));
    };
    const finishResolve = (response) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve(response);
    };
    const abortHandler = () => {
      request.destroy(createAbortError());
      finishReject(createAbortError());
    };
    if (signal?.aborted) {
      finishReject(createAbortError());
      return;
    }
    signal?.addEventListener("abort", abortHandler, { once: true });
    request = requestModule.request(
      {
        protocol: targetUrl.protocol,
        hostname: targetUrl.hostname,
        port: targetUrl.port ? Number(targetUrl.port) : void 0,
        path: `${targetUrl.pathname}${targetUrl.search}`,
        method: requestTarget.method,
        headers
      },
      (response) => {
        const chunks = [];
        response.on("data", (chunk) => {
          if (typeof chunk === "string") {
            chunks.push(Buffer.from(chunk));
            return;
          }
          chunks.push(chunk instanceof Uint8Array ? chunk : Buffer.from(chunk));
        });
        response.on("end", () => {
          onProgress?.({
            loadedBytes: data.byteLength,
            totalBytes: data.byteLength
          });
          finishResolve({
            status: response.statusCode ?? 0,
            statusText: response.statusMessage ?? "",
            text: Buffer.concat(chunks.map((chunk) => Buffer.from(chunk))).toString("utf8"),
            headers: response.headers ?? {}
          });
        });
      }
    );
    request.on("error", (error) => {
      finishReject(new Error(`Request to ${requestTarget.url} failed: ${error.message}`));
    });
    request.write(Buffer.from(new Uint8Array(data)));
    request.end();
  });
}
function createRequestUrlError(response) {
  return createTextError(response.status, response.text, `HTTP ${response.status}`);
}
function extractResponseMeta(response) {
  return {
    status: response.status,
    requestId: getHeaderValue(response.headers, "x-rolay-request-id"),
    headers: response.headers ?? {}
  };
}
function withResponseMeta(json, meta) {
  return Object.assign(json, { _meta: meta });
}
function parseBlobUploadContentResponse(responseText, expectedHash, fallbackSizeBytes, status, requestId, transport) {
  if (!responseText.trim()) {
    return {
      ok: true,
      hash: expectedHash,
      sizeBytes: fallbackSizeBytes,
      uploadedBytes: fallbackSizeBytes,
      receivedBytes: fallbackSizeBytes,
      complete: true,
      status,
      requestId,
      transport
    };
  }
  try {
    const parsed = JSON.parse(responseText);
    if (parsed?.ok === true) {
      const sizeBytes = typeof parsed.sizeBytes === "number" && parsed.sizeBytes >= 0 ? parsed.sizeBytes : fallbackSizeBytes;
      const uploadedBytes = typeof parsed.uploadedBytes === "number" && parsed.uploadedBytes >= 0 ? parsed.uploadedBytes : typeof parsed.receivedBytes === "number" && parsed.receivedBytes >= 0 ? parsed.receivedBytes : sizeBytes;
      return {
        ok: true,
        uploadId: typeof parsed.uploadId === "string" && parsed.uploadId.trim() ? parsed.uploadId : void 0,
        receivedBytes: typeof parsed.receivedBytes === "number" && parsed.receivedBytes >= 0 ? parsed.receivedBytes : uploadedBytes,
        uploadedBytes,
        complete: parsed.complete === true,
        hash: typeof parsed.hash === "string" && parsed.hash.trim() ? parsed.hash : expectedHash,
        sizeBytes,
        status,
        requestId,
        transport
      };
    }
  } catch {
  }
  return {
    ok: true,
    hash: expectedHash,
    sizeBytes: fallbackSizeBytes,
    uploadedBytes: fallbackSizeBytes,
    receivedBytes: fallbackSizeBytes,
    complete: true,
    status,
    requestId,
    transport
  };
}
function createTextError(status, responseText, fallbackMessage) {
  try {
    const parsed = JSON.parse(responseText);
    if (parsed?.error?.message) {
      return new RolayApiError(
        status,
        parsed.error.message,
        parsed.error.code,
        parsed.error.details
      );
    }
  } catch {
  }
  return new RolayApiError(status, responseText || fallbackMessage);
}
function parseContentLengthHeader(value) {
  if (!value) {
    return null;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}
function requestHeader(request, name) {
  return request.getResponseHeader(name);
}
function getHeaderValue(headers, expectedName) {
  if (!headers) {
    return null;
  }
  const normalizedExpected = expectedName.toLowerCase();
  for (const [headerName, value] of Object.entries(headers)) {
    if (headerName.toLowerCase() !== normalizedExpected) {
      continue;
    }
    if (Array.isArray(value)) {
      return value[0] ?? null;
    }
    return value ?? null;
  }
  return null;
}
function createAbortError() {
  const error = new Error("The operation was aborted.");
  error.name = "AbortError";
  return error;
}
function normalizeArrayBufferResponse(response) {
  if (response instanceof ArrayBuffer) {
    return response;
  }
  if (ArrayBuffer.isView(response)) {
    const view = response;
    return toOwnedArrayBuffer(new Uint8Array(view.buffer, view.byteOffset, view.byteLength));
  }
  return new ArrayBuffer(0);
}
function toOwnedArrayBuffer(bytes) {
  const copy2 = new Uint8Array(bytes.byteLength);
  copy2.set(bytes);
  return copy2.buffer;
}
function mapTransferProgress(onProgress, baseLoadedBytes, knownTotalBytes) {
  if (!onProgress) {
    return void 0;
  }
  return (progress) => {
    const totalBytes = knownTotalBytes > 0 ? knownTotalBytes : progress.totalBytes > 0 ? baseLoadedBytes + progress.totalBytes : baseLoadedBytes + progress.loadedBytes;
    onProgress({
      loadedBytes: baseLoadedBytes + progress.loadedBytes,
      totalBytes
    });
  };
}
function ensureRangeRequestHonored(status, getHeader, offset) {
  if (offset <= 0) {
    return;
  }
  const contentRange = getHeader("Content-Range");
  if (status === 206 && contentRange) {
    return;
  }
  throw new Error(`Range request starting at ${offset} was not honored by the server.`);
}
async function fetchBinaryDownloadStream(url, headers, offset, onChunk, onProgress, signal) {
  const response = await fetch(url, {
    method: "GET",
    headers,
    signal
  });
  if (!response.ok) {
    const responseText = await response.text();
    throw createTextError(response.status, responseText, `HTTP ${response.status}`);
  }
  if (!response.body) {
    throw new Error("Binary download response body is empty.");
  }
  ensureRangeRequestHonored(response.status, (name) => response.headers.get(name), offset);
  const totalBytes = parseContentLengthHeader(response.headers.get("Content-Length"));
  const reader = response.body.getReader();
  let loadedBytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    if (!value) {
      continue;
    }
    loadedBytes += value.byteLength;
    await onChunk(toOwnedArrayBuffer(value));
    onProgress?.({
      loadedBytes,
      totalBytes: totalBytes ?? loadedBytes
    });
  }
  return {
    contentType: response.headers.get("Content-Type"),
    contentLength: totalBytes,
    hash: response.headers.get("X-Rolay-Blob-Hash"),
    status: response.status,
    requestId: response.headers.get("X-Rolay-Request-Id"),
    transport: "fetch",
    contentRange: response.headers.get("Content-Range"),
    acceptRanges: response.headers.get("Accept-Ranges")
  };
}
async function fetchBinaryDownload(url, onProgress, signal) {
  const response = await fetch(url, {
    method: "GET",
    signal
  });
  if (!response.ok) {
    const responseText = await response.text();
    throw createTextError(response.status, responseText, `HTTP ${response.status}`);
  }
  if (!response.body) {
    throw new Error("Binary download response body is empty.");
  }
  const totalBytes = parseContentLengthHeader(response.headers.get("Content-Length"));
  const reader = response.body.getReader();
  const chunks = [];
  let loadedBytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    if (!value) {
      continue;
    }
    chunks.push(value);
    loadedBytes += value.byteLength;
    onProgress?.({
      loadedBytes,
      totalBytes: totalBytes ?? loadedBytes
    });
  }
  return {
    data: toOwnedArrayBuffer(concatUint8Arrays(chunks)),
    contentType: response.headers.get("Content-Type"),
    contentLength: totalBytes,
    hash: response.headers.get("X-Rolay-Blob-Hash")
  };
}
function concatUint8Arrays(chunks) {
  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return result;
}
function extractXhrResponseText(request) {
  try {
    if (typeof request.responseText === "string") {
      return request.responseText;
    }
  } catch {
  }
  const response = request.response;
  if (typeof response === "string") {
    return response;
  }
  return "";
}
function shouldFallbackToRawUpload(error) {
  if (!(error instanceof RolayApiError)) {
    return true;
  }
  return error.status === 404 || error.status === 405 || error.status === 408 || error.status === 425 || error.status === 429 || error.status >= 500;
}
function formatUploadTransportError(error) {
  if (error instanceof RolayApiError) {
    return `${error.code}: ${error.message}`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}
function getNodeRequire() {
  const candidate = globalThis.require ?? globalThis.window?.require;
  if (typeof candidate === "function") {
    return candidate;
  }
  try {
    return Function("return typeof require === 'function' ? require : undefined;")() ?? null;
  } catch {
    return null;
  }
}

// src/obsidian/file-bridge.ts
var import_obsidian3 = require("obsidian");

// src/sync/path-mapper.ts
var import_obsidian2 = require("obsidian");
function normalizeSyncRoot(syncRoot) {
  const trimmed = syncRoot.trim();
  if (!trimmed) {
    return "";
  }
  return (0, import_obsidian2.normalizePath)(trimmed);
}
function normalizeRoomFolderName(folderName) {
  return folderName.trim();
}
function isValidRoomFolderName(folderName) {
  const normalized = normalizeRoomFolderName(folderName);
  return Boolean(normalized) && !/[\\/]/.test(normalized);
}
function getRoomRoot(syncRoot, folderName) {
  const normalizedSyncRoot = normalizeSyncRoot(syncRoot);
  const normalizedFolderName = normalizeRoomFolderName(folderName ?? "");
  if (!normalizedFolderName) {
    return normalizedSyncRoot;
  }
  if (!normalizedSyncRoot) {
    return normalizedFolderName;
  }
  return (0, import_obsidian2.normalizePath)(`${normalizedSyncRoot}/${normalizedFolderName}`);
}
function toLocalPathForRoom(syncRoot, folderName, serverPath) {
  const roomRoot = getRoomRoot(syncRoot, folderName);
  const normalizedServerPath = (0, import_obsidian2.normalizePath)(serverPath);
  if (!roomRoot) {
    return normalizedServerPath;
  }
  if (!normalizedServerPath) {
    return roomRoot;
  }
  return (0, import_obsidian2.normalizePath)(`${roomRoot}/${normalizedServerPath}`);
}
function toServerPathForRoom(localPath, syncRoot, folderName) {
  const normalizedLocalPath = (0, import_obsidian2.normalizePath)(localPath);
  const roomRoot = getRoomRoot(syncRoot, folderName);
  if (!roomRoot) {
    return normalizedLocalPath;
  }
  if (normalizedLocalPath === roomRoot) {
    return "";
  }
  if (!normalizedLocalPath.startsWith(`${roomRoot}/`)) {
    return null;
  }
  return normalizedLocalPath.slice(roomRoot.length + 1);
}
function isManagedPathForRoom(localPath, syncRoot, folderName) {
  const normalizedLocalPath = (0, import_obsidian2.normalizePath)(localPath);
  const roomRoot = getRoomRoot(syncRoot, folderName);
  if (!roomRoot) {
    return true;
  }
  return normalizedLocalPath === roomRoot || normalizedLocalPath.startsWith(`${roomRoot}/`);
}

// src/utils/file-kind.ts
function isMarkdownPath(path) {
  return /\.md$/i.test(path.trim());
}
function isBinaryPath(path) {
  return !isMarkdownPath(path);
}
function guessMimeTypeFromPath(path) {
  const extension = getLowerCaseExtension(path);
  switch (extension) {
    case "txt":
      return "text/plain";
    case "json":
      return "application/json";
    case "csv":
      return "text/csv";
    case "pdf":
      return "application/pdf";
    case "png":
      return "image/png";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "gif":
      return "image/gif";
    case "webp":
      return "image/webp";
    case "svg":
      return "image/svg+xml";
    case "mp3":
      return "audio/mpeg";
    case "wav":
      return "audio/wav";
    case "m4a":
      return "audio/mp4";
    case "mp4":
      return "video/mp4";
    case "mov":
      return "video/quicktime";
    case "zip":
      return "application/zip";
    case "7z":
      return "application/x-7z-compressed";
    default:
      return "application/octet-stream";
  }
}
function getLowerCaseExtension(path) {
  const normalized = path.replace(/\\/g, "/");
  const fileName = normalized.slice(normalized.lastIndexOf("/") + 1);
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex <= 0 || dotIndex === fileName.length - 1) {
    return "";
  }
  return fileName.slice(dotIndex + 1).toLowerCase();
}

// src/obsidian/file-bridge.ts
var _FileBridge = class _FileBridge {
  constructor(config) {
    this.suppressedPrefixes = /* @__PURE__ */ new Map();
    this.recentRemoteCreates = /* @__PURE__ */ new Map();
    this.recentRemoteWrites = /* @__PURE__ */ new Map();
    this.recentRemoteRenames = /* @__PURE__ */ new Map();
    this.recentRemoteDeletes = /* @__PURE__ */ new Map();
    this.protectedRemoteBinaryPlaceholders = /* @__PURE__ */ new Map();
    this.app = config.app;
    this.getSyncRoot = config.getSyncRoot;
    this.getFolderName = config.getFolderName;
    this.getDownloadedRooms = config.getDownloadedRooms;
    this.getEntryByPath = config.getEntryByPath;
    this.isWorkspaceSyncActive = config.isWorkspaceSyncActive;
    this.hasPendingCreate = config.hasPendingCreate;
    this.hasPendingDelete = config.hasPendingDelete;
    this.hasPendingBinaryWrite = config.hasPendingBinaryWrite;
    this.log = config.log;
    this.onCreateFolder = config.onCreateFolder;
    this.onCreateMarkdown = config.onCreateMarkdown;
    this.onCreateBinary = config.onCreateBinary;
    this.onUpdateBinary = config.onUpdateBinary;
    this.onRenameOrMove = config.onRenameOrMove;
    this.onDeleteEntry = config.onDeleteEntry;
    this.onRemotePathObserved = config.onRemotePathObserved;
    this.wasPathRecentlyObservedAsRemote = config.wasPathRecentlyObservedAsRemote;
  }
  async applySnapshot(snapshot, previousEntries) {
    const folderName = this.getFolderName(snapshot.workspace.id);
    if (!folderName || !this.isWorkspaceSyncActive(snapshot.workspace.id)) {
      return;
    }
    const roomRoot = this.getRoomRoot(folderName);
    if (roomRoot) {
      await this.ensureFolderExists(roomRoot);
    }
    const previousById = new Map(previousEntries.map((entry) => [entry.id, entry]));
    const nextById = new Map(snapshot.entries.map((entry) => [entry.id, entry]));
    const activePathSet = new Set(
      snapshot.entries.filter((entry) => !entry.deleted).map((entry) => (0, import_obsidian3.normalizePath)(entry.path))
    );
    const renamedEntries = snapshot.entries.filter((entry) => !entry.deleted).filter((entry) => {
      const previous = previousById.get(entry.id);
      return previous && !previous.deleted && previous.path !== entry.path;
    });
    for (const entry of renamedEntries) {
      if (!this.isWorkspaceSyncActive(snapshot.workspace.id)) {
        return;
      }
      const previous = previousById.get(entry.id);
      if (previous) {
        await this.safeApply(`rename local ${previous.path} -> ${entry.path}`, async () => {
          await this.renameLocalPath(folderName, previous.path, entry.path);
        });
      }
    }
    const activeEntries = snapshot.entries.filter((entry) => !entry.deleted).filter((entry) => !this.hasPendingDelete(snapshot.workspace.id, entry.path)).sort(compareEntriesForMaterialization);
    for (const entry of activeEntries) {
      if (!this.isWorkspaceSyncActive(snapshot.workspace.id)) {
        return;
      }
      await this.safeApply(`materialize ${entry.path}`, async () => {
        await this.ensureLocalEntry(snapshot.workspace.id, folderName, entry);
      });
    }
    const deletedEntries = previousEntries.filter((previous) => {
      if (previous.deleted) {
        return false;
      }
      if (activePathSet.has((0, import_obsidian3.normalizePath)(previous.path))) {
        return false;
      }
      if (this.hasPendingCreate(snapshot.workspace.id, previous.path)) {
        return false;
      }
      const next = nextById.get(previous.id);
      return !next || next.deleted;
    });
    for (const entry of deletedEntries.sort(compareEntriesForDeletion)) {
      if (!this.isWorkspaceSyncActive(snapshot.workspace.id)) {
        return;
      }
      await this.safeApply(`trash ${entry.path}`, async () => {
        await this.trashLocalEntry(folderName, entry.path);
      });
    }
  }
  async handleVaultCreate(file) {
    const resolved = this.resolveRoomPath(file.path);
    if (!resolved || this.isSuppressedPath(file.path)) {
      return;
    }
    if (this.consumeRecentRemoteCreate(file.path)) {
      this.onRemotePathObserved?.(resolved.workspaceId, file.path, resolved.serverPath);
      return;
    }
    if (this.wasPathRecentlyObservedAsRemote?.(resolved.workspaceId, file.path)) {
      this.onRemotePathObserved?.(resolved.workspaceId, file.path, resolved.serverPath);
      return;
    }
    if (file instanceof import_obsidian3.TFile && !isMarkdownPath(file.path) && this.isProtectedRemoteBinaryPlaceholder(file.path) && !this.hasPendingBinaryWrite(file.path)) {
      this.onRemotePathObserved?.(resolved.workspaceId, file.path, resolved.serverPath);
      return;
    }
    if (this.getEntryByPath(resolved.workspaceId, resolved.serverPath) && !this.hasPendingDelete(resolved.workspaceId, resolved.serverPath)) {
      this.onRemotePathObserved?.(resolved.workspaceId, file.path, resolved.serverPath);
      return;
    }
    if (file instanceof import_obsidian3.TFolder) {
      await this.onCreateFolder(resolved.workspaceId, resolved.serverPath);
      return;
    }
    if (file instanceof import_obsidian3.TFile && isMarkdownPath(file.path)) {
      await this.onCreateMarkdown(
        resolved.workspaceId,
        resolved.serverPath,
        await this.readMarkdownFile(file)
      );
      return;
    }
    if (file instanceof import_obsidian3.TFile) {
      const existingEntry = this.getEntryByPath(resolved.workspaceId, resolved.serverPath);
      if (existingEntry && existingEntry.kind === "binary" && !existingEntry.deleted) {
        await this.onUpdateBinary(
          resolved.workspaceId,
          existingEntry,
          await this.readBinaryFile(file)
        );
        return;
      }
      await this.onCreateBinary(
        resolved.workspaceId,
        resolved.serverPath,
        await this.readBinaryFile(file)
      );
      return;
    }
  }
  async handleVaultModify(file) {
    if (!(file instanceof import_obsidian3.TFile)) {
      return;
    }
    const resolved = this.resolveRoomPath(file.path);
    if (!resolved || this.isSuppressedPath(file.path) || isMarkdownPath(file.path)) {
      return;
    }
    if (this.consumeRecentRemoteWrite(file.path) || this.consumeRecentRemoteCreate(file.path)) {
      this.onRemotePathObserved?.(resolved.workspaceId, file.path, resolved.serverPath);
      return;
    }
    if (this.wasPathRecentlyObservedAsRemote?.(resolved.workspaceId, file.path)) {
      this.onRemotePathObserved?.(resolved.workspaceId, file.path, resolved.serverPath);
      return;
    }
    if (this.isProtectedRemoteBinaryPlaceholder(file.path) && !this.hasPendingBinaryWrite(file.path)) {
      this.onRemotePathObserved?.(resolved.workspaceId, file.path, resolved.serverPath);
      return;
    }
    const existingEntry = this.getEntryByPath(resolved.workspaceId, resolved.serverPath);
    if (existingEntry && !existingEntry.deleted) {
      if (!existingEntry.blob && !this.hasPendingBinaryWrite(file.path)) {
        this.onRemotePathObserved?.(resolved.workspaceId, file.path, resolved.serverPath);
        return;
      }
      await this.onUpdateBinary(
        resolved.workspaceId,
        existingEntry,
        await this.readBinaryFile(file)
      );
      return;
    }
    if (!this.hasPendingDelete(resolved.workspaceId, resolved.serverPath)) {
      await this.onCreateBinary(
        resolved.workspaceId,
        resolved.serverPath,
        await this.readBinaryFile(file)
      );
    }
  }
  async handleVaultRename(file, oldPath) {
    if (this.isSuppressedPath(oldPath) || this.isSuppressedPath(file.path)) {
      return;
    }
    if (this.consumeRecentRemoteRename(oldPath, file.path)) {
      return;
    }
    const oldResolved = this.resolveRoomPath(oldPath);
    const newResolved = this.resolveRoomPath(file.path);
    if (!oldResolved && !newResolved) {
      return;
    }
    if (!oldResolved && newResolved) {
      this.forgetRecentRemoteHistory(file.path);
      await this.handleVaultCreate(file);
      return;
    }
    if (oldResolved && !newResolved) {
      this.forgetRecentRemoteHistory(oldPath);
      this.forgetRecentRemoteHistory(file.path);
      const entry2 = this.getEntryByPath(oldResolved.workspaceId, oldResolved.serverPath);
      if (!entry2) {
        return;
      }
      await this.onDeleteEntry(oldResolved.workspaceId, entry2);
      return;
    }
    if (!oldResolved || !newResolved) {
      return;
    }
    if (oldResolved.workspaceId !== newResolved.workspaceId) {
      this.log(`Managed path ${oldPath} was moved across room roots. Cross-room moves are not supported.`);
      return;
    }
    this.forgetRecentRemoteHistory(oldPath);
    this.forgetRecentRemoteHistory(file.path);
    const entry = this.getEntryByPath(oldResolved.workspaceId, oldResolved.serverPath);
    if (!entry) {
      return;
    }
    const type = getParentPath(oldResolved.serverPath) === getParentPath(newResolved.serverPath) ? "rename_entry" : "move_entry";
    await this.onRenameOrMove(oldResolved.workspaceId, entry, newResolved.serverPath, type);
  }
  async handleVaultDelete(file) {
    const resolved = this.resolveRoomPath(file.path);
    if (!resolved || this.isSuppressedPath(file.path)) {
      return;
    }
    if (this.consumeRecentRemoteDelete(file.path)) {
      return;
    }
    this.forgetRecentRemoteHistory(file.path);
    const roomRoot = this.getRoomRoot(resolved.folderName);
    if (!this.app.vault.getAbstractFileByPath(roomRoot)) {
      this.log(`Skipping remote delete for ${file.path} because the local room root is no longer installed.`);
      return;
    }
    const entry = this.getEntryByPath(resolved.workspaceId, resolved.serverPath);
    if (!entry) {
      return;
    }
    await this.onDeleteEntry(resolved.workspaceId, entry);
  }
  toLocalPath(workspaceId, serverPath) {
    const folderName = this.getFolderName(workspaceId);
    if (!folderName) {
      return null;
    }
    return toLocalPathForRoom(this.getSyncRoot(), folderName, serverPath);
  }
  resolveRoomPath(localPath) {
    for (const room of this.getDownloadedRooms()) {
      if (!isManagedPathForRoom(localPath, this.getSyncRoot(), room.folderName)) {
        continue;
      }
      const serverPath = toServerPathForRoom(localPath, this.getSyncRoot(), room.folderName);
      if (serverPath === null) {
        continue;
      }
      return {
        ...room,
        serverPath
      };
    }
    return null;
  }
  async renameLocalPath(folderName, oldServerPath, newServerPath) {
    const oldLocalPath = toLocalPathForRoom(this.getSyncRoot(), folderName, oldServerPath);
    const newLocalPath = toLocalPathForRoom(this.getSyncRoot(), folderName, newServerPath);
    if (oldLocalPath === newLocalPath) {
      return;
    }
    const existing = this.app.vault.getAbstractFileByPath(oldLocalPath);
    if (!existing) {
      return;
    }
    const destination = this.app.vault.getAbstractFileByPath(newLocalPath);
    if (destination && destination.path !== existing.path) {
      this.log(`Skipped local rename to ${newLocalPath} because that path already exists.`);
      return;
    }
    await this.ensureFolderExists(getParentPath(newLocalPath));
    this.markRecentRemoteRename(oldLocalPath, newLocalPath);
    await this.withSuppressedPaths([oldLocalPath, newLocalPath], async () => {
      await this.app.fileManager.renameFile(existing, newLocalPath);
    });
    this.moveProtectedRemoteBinaryPlaceholder(oldLocalPath, newLocalPath);
  }
  async ensureLocalEntry(workspaceId, folderName, entry) {
    const localPath = toLocalPathForRoom(this.getSyncRoot(), folderName, entry.path);
    const existing = await this.getExistingPath(localPath);
    if (entry.kind === "folder") {
      await this.ensureFolderExists(localPath);
      return;
    }
    await this.ensureFolderExists(getParentPath(localPath));
    if (existing) {
      return;
    }
    if (entry.kind === "markdown") {
      this.markRecentRemoteCreate(localPath);
      this.onRemotePathObserved?.(workspaceId, localPath, entry.path);
      await this.withSuppressedPaths([localPath], async () => {
        await this.app.vault.create(localPath, "");
      });
      return;
    }
    this.markRecentRemoteCreate(localPath);
    this.markRecentRemoteWrite(localPath);
    this.markProtectedRemoteBinaryPlaceholder(localPath);
    this.onRemotePathObserved?.(workspaceId, localPath, entry.path);
    await this.withSuppressedPaths([localPath], async () => {
      await this.app.vault.createBinary(localPath, new ArrayBuffer(0));
    });
  }
  async trashLocalEntry(folderName, serverPath) {
    const localPath = toLocalPathForRoom(this.getSyncRoot(), folderName, serverPath);
    const existing = this.app.vault.getAbstractFileByPath(localPath);
    if (!existing) {
      return;
    }
    this.markRecentRemoteDelete(localPath);
    this.clearProtectedRemoteBinaryPlaceholder(localPath);
    await this.withSuppressedPaths([localPath], async () => {
      await this.app.vault.trash(existing, false);
    });
  }
  async ensureFolderExists(folderPath) {
    const normalizedFolderPath = (0, import_obsidian3.normalizePath)(folderPath);
    if (!normalizedFolderPath) {
      return;
    }
    const segments = normalizedFolderPath.split("/");
    let currentPath = "";
    for (const segment of segments) {
      currentPath = currentPath ? `${currentPath}/${segment}` : segment;
      const existing = await this.getExistingPath(currentPath);
      if (existing instanceof import_obsidian3.TFolder || existing === "exists-on-disk") {
        continue;
      }
      if (existing) {
        throw new Error(`Expected folder at ${currentPath}, but a file already exists there.`);
      }
      this.markRecentRemoteCreate(currentPath);
      await this.withSuppressedPaths([currentPath], async () => {
        await this.app.vault.createFolder(currentPath);
      });
    }
  }
  async getExistingPath(path) {
    const existing = this.app.vault.getAbstractFileByPath(path);
    if (existing) {
      return existing;
    }
    try {
      return await this.app.vault.adapter.exists((0, import_obsidian3.normalizePath)(path)) ? "exists-on-disk" : null;
    } catch {
      return null;
    }
  }
  getRoomRoot(folderName) {
    return getRoomRoot(this.getSyncRoot(), folderName);
  }
  async readMarkdownFile(file) {
    try {
      return await this.app.vault.cachedRead(file);
    } catch (error) {
      this.log(`Failed to read markdown content for ${file.path}: ${error instanceof Error ? error.message : String(error)}`);
      return "";
    }
  }
  async readBinaryFile(file) {
    try {
      return await this.app.vault.readBinary(file);
    } catch (error) {
      this.log(`Failed to read binary content for ${file.path}: ${error instanceof Error ? error.message : String(error)}`);
      return new ArrayBuffer(0);
    }
  }
  async writeBinaryContent(workspaceId, serverPath, data) {
    const folderName = this.getFolderName(workspaceId);
    if (!folderName) {
      return null;
    }
    const localPath = toLocalPathForRoom(this.getSyncRoot(), folderName, serverPath);
    await this.ensureFolderExists(getParentPath(localPath));
    const existing = this.app.vault.getAbstractFileByPath(localPath);
    if (existing instanceof import_obsidian3.TFile) {
      this.markRecentRemoteWrite(localPath);
      await this.withSuppressedPaths([localPath], async () => {
        await this.app.vault.modifyBinary(existing, data);
      });
      this.clearProtectedRemoteBinaryPlaceholder(localPath);
      return localPath;
    }
    if (existing) {
      throw new Error(`Cannot write binary content to ${localPath} because a folder already exists there.`);
    }
    this.markRecentRemoteCreate(localPath);
    this.markRecentRemoteWrite(localPath);
    this.onRemotePathObserved?.(workspaceId, localPath, serverPath);
    await this.withSuppressedPaths([localPath], async () => {
      await this.app.vault.createBinary(localPath, data);
    });
    this.clearProtectedRemoteBinaryPlaceholder(localPath);
    return localPath;
  }
  getProtectedRemoteBinaryPlaceholderPaths() {
    return [...this.protectedRemoteBinaryPlaceholders.keys()];
  }
  isSuppressedPath(path) {
    const normalizedPath = (0, import_obsidian3.normalizePath)(path);
    for (const prefix of this.suppressedPrefixes.keys()) {
      if (normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`)) {
        return true;
      }
    }
    return false;
  }
  async withSuppressedPaths(paths, work) {
    const normalizedPaths = [...new Set(paths.map((path) => (0, import_obsidian3.normalizePath)(path)).filter(Boolean))];
    for (const path of normalizedPaths) {
      this.incrementSuppression(path);
    }
    try {
      await work();
    } finally {
      window.setTimeout(() => {
        for (const path of normalizedPaths) {
          this.decrementSuppression(path);
        }
      }, 750);
    }
  }
  async runWithSuppressedPaths(paths, work) {
    await this.withSuppressedPaths(paths, work);
  }
  incrementSuppression(path) {
    this.suppressedPrefixes.set(path, (this.suppressedPrefixes.get(path) ?? 0) + 1);
  }
  decrementSuppression(path) {
    const currentCount = this.suppressedPrefixes.get(path);
    if (!currentCount) {
      return;
    }
    if (currentCount <= 1) {
      this.suppressedPrefixes.delete(path);
      return;
    }
    this.suppressedPrefixes.set(path, currentCount - 1);
  }
  async safeApply(label, work) {
    try {
      await work();
    } catch (error) {
      this.log(`${label} failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  markRecentRemoteCreate(path) {
    const normalizedPath = (0, import_obsidian3.normalizePath)(path);
    const previousHandle = this.recentRemoteCreates.get(normalizedPath);
    if (previousHandle !== void 0) {
      window.clearTimeout(previousHandle);
    }
    const handle = window.setTimeout(() => {
      this.recentRemoteCreates.delete(normalizedPath);
    }, _FileBridge.REMOTE_CREATE_GUARD_MS);
    this.recentRemoteCreates.set(normalizedPath, handle);
  }
  consumeRecentRemoteCreate(path) {
    const normalizedPath = (0, import_obsidian3.normalizePath)(path);
    const handle = this.recentRemoteCreates.get(normalizedPath);
    if (handle === void 0) {
      return false;
    }
    window.clearTimeout(handle);
    this.recentRemoteCreates.delete(normalizedPath);
    this.log(`Ignored create echo for remotely materialized path ${normalizedPath}.`);
    return true;
  }
  markRecentRemoteWrite(path) {
    const normalizedPath = (0, import_obsidian3.normalizePath)(path);
    const previousHandle = this.recentRemoteWrites.get(normalizedPath);
    if (previousHandle !== void 0) {
      window.clearTimeout(previousHandle);
    }
    const handle = window.setTimeout(() => {
      this.recentRemoteWrites.delete(normalizedPath);
    }, _FileBridge.REMOTE_WRITE_GUARD_MS);
    this.recentRemoteWrites.set(normalizedPath, handle);
  }
  consumeRecentRemoteWrite(path) {
    const normalizedPath = (0, import_obsidian3.normalizePath)(path);
    const handle = this.recentRemoteWrites.get(normalizedPath);
    if (handle === void 0) {
      return false;
    }
    window.clearTimeout(handle);
    this.recentRemoteWrites.delete(normalizedPath);
    this.log(`Ignored modify echo for remotely materialized path ${normalizedPath}.`);
    return true;
  }
  markRecentRemoteRename(oldPath, newPath) {
    const key = this.buildRemoteRenameKey(oldPath, newPath);
    const previousHandle = this.recentRemoteRenames.get(key);
    if (previousHandle !== void 0) {
      window.clearTimeout(previousHandle);
    }
    const handle = window.setTimeout(() => {
      this.recentRemoteRenames.delete(key);
    }, _FileBridge.REMOTE_CREATE_GUARD_MS);
    this.recentRemoteRenames.set(key, handle);
  }
  consumeRecentRemoteRename(oldPath, newPath) {
    const key = this.buildRemoteRenameKey(oldPath, newPath);
    const handle = this.recentRemoteRenames.get(key);
    if (handle === void 0) {
      return false;
    }
    window.clearTimeout(handle);
    this.recentRemoteRenames.delete(key);
    this.log(`Ignored rename echo for remotely materialized path ${(0, import_obsidian3.normalizePath)(oldPath)} -> ${(0, import_obsidian3.normalizePath)(newPath)}.`);
    return true;
  }
  markRecentRemoteDelete(path) {
    const normalizedPath = (0, import_obsidian3.normalizePath)(path);
    const previousHandle = this.recentRemoteDeletes.get(normalizedPath);
    if (previousHandle !== void 0) {
      window.clearTimeout(previousHandle);
    }
    const handle = window.setTimeout(() => {
      this.recentRemoteDeletes.delete(normalizedPath);
    }, _FileBridge.REMOTE_CREATE_GUARD_MS);
    this.recentRemoteDeletes.set(normalizedPath, handle);
  }
  consumeRecentRemoteDelete(path) {
    const normalizedPath = (0, import_obsidian3.normalizePath)(path);
    const handle = this.recentRemoteDeletes.get(normalizedPath);
    if (handle === void 0) {
      return false;
    }
    window.clearTimeout(handle);
    this.recentRemoteDeletes.delete(normalizedPath);
    this.log(`Ignored delete echo for remotely materialized path ${normalizedPath}.`);
    return true;
  }
  markProtectedRemoteBinaryPlaceholder(path) {
    const normalizedPath = (0, import_obsidian3.normalizePath)(path);
    const previousHandle = this.protectedRemoteBinaryPlaceholders.get(normalizedPath);
    if (previousHandle !== void 0) {
      window.clearTimeout(previousHandle);
    }
    const handle = window.setTimeout(() => {
      this.protectedRemoteBinaryPlaceholders.delete(normalizedPath);
    }, _FileBridge.REMOTE_BINARY_PLACEHOLDER_GUARD_MS);
    this.protectedRemoteBinaryPlaceholders.set(normalizedPath, handle);
  }
  clearProtectedRemoteBinaryPlaceholder(path) {
    const normalizedPath = (0, import_obsidian3.normalizePath)(path);
    const handle = this.protectedRemoteBinaryPlaceholders.get(normalizedPath);
    if (handle === void 0) {
      return;
    }
    window.clearTimeout(handle);
    this.protectedRemoteBinaryPlaceholders.delete(normalizedPath);
  }
  moveProtectedRemoteBinaryPlaceholder(oldPath, newPath) {
    const normalizedOldPath = (0, import_obsidian3.normalizePath)(oldPath);
    const handle = this.protectedRemoteBinaryPlaceholders.get(normalizedOldPath);
    if (handle === void 0) {
      return;
    }
    window.clearTimeout(handle);
    this.protectedRemoteBinaryPlaceholders.delete(normalizedOldPath);
    this.markProtectedRemoteBinaryPlaceholder(newPath);
  }
  isProtectedRemoteBinaryPlaceholder(path) {
    return this.protectedRemoteBinaryPlaceholders.has((0, import_obsidian3.normalizePath)(path));
  }
  forgetRecentRemoteHistory(path) {
    const normalizedPath = (0, import_obsidian3.normalizePath)(path);
    const createHandle = this.recentRemoteCreates.get(normalizedPath);
    if (createHandle !== void 0) {
      window.clearTimeout(createHandle);
      this.recentRemoteCreates.delete(normalizedPath);
    }
    const writeHandle = this.recentRemoteWrites.get(normalizedPath);
    if (writeHandle !== void 0) {
      window.clearTimeout(writeHandle);
      this.recentRemoteWrites.delete(normalizedPath);
    }
    const deleteHandle = this.recentRemoteDeletes.get(normalizedPath);
    if (deleteHandle !== void 0) {
      window.clearTimeout(deleteHandle);
      this.recentRemoteDeletes.delete(normalizedPath);
    }
    for (const [key, handle] of [...this.recentRemoteRenames.entries()]) {
      if (!key.startsWith(`${normalizedPath}=>`) && !key.endsWith(`=>${normalizedPath}`)) {
        continue;
      }
      window.clearTimeout(handle);
      this.recentRemoteRenames.delete(key);
    }
  }
  buildRemoteRenameKey(oldPath, newPath) {
    return `${(0, import_obsidian3.normalizePath)(oldPath)}=>${(0, import_obsidian3.normalizePath)(newPath)}`;
  }
};
_FileBridge.REMOTE_CREATE_GUARD_MS = 1e4;
_FileBridge.REMOTE_WRITE_GUARD_MS = 4e3;
_FileBridge.REMOTE_BINARY_PLACEHOLDER_GUARD_MS = 5 * 6e4;
var FileBridge = _FileBridge;
function getParentPath(path) {
  const normalized = (0, import_obsidian3.normalizePath)(path);
  const separatorIndex = normalized.lastIndexOf("/");
  return separatorIndex === -1 ? "" : normalized.slice(0, separatorIndex);
}
function compareEntriesForMaterialization(left, right) {
  if (left.kind === "folder" && right.kind !== "folder") {
    return -1;
  }
  if (left.kind !== "folder" && right.kind === "folder") {
    return 1;
  }
  return left.path.localeCompare(right.path);
}
function compareEntriesForDeletion(left, right) {
  return right.path.length - left.path.length;
}

// node_modules/@hocuspocus/common/dist/hocuspocus-common.esm.js
var floor2 = Math.floor;
var min2 = (a, b) => a < b ? a : b;
var max2 = (a, b) => a > b ? a : b;
var BIT82 = 128;
var BITS72 = 127;
var MAX_SAFE_INTEGER2 = Number.MAX_SAFE_INTEGER;
var _encodeUtf8Polyfill2 = (str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buf[i] = /** @type {number} */
    encodedString.codePointAt(i);
  }
  return buf;
};
var utf8TextEncoder2 = (
  /** @type {TextEncoder} */
  typeof TextEncoder !== "undefined" ? new TextEncoder() : null
);
var _encodeUtf8Native2 = (str) => utf8TextEncoder2.encode(str);
var encodeUtf82 = utf8TextEncoder2 ? _encodeUtf8Native2 : _encodeUtf8Polyfill2;
var utf8TextDecoder2 = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
if (utf8TextDecoder2 && utf8TextDecoder2.decode(new Uint8Array()).length === 1) {
  utf8TextDecoder2 = null;
}
var write2 = (encoder, num) => {
  const bufferLen = encoder.cbuf.length;
  if (encoder.cpos === bufferLen) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(bufferLen * 2);
    encoder.cpos = 0;
  }
  encoder.cbuf[encoder.cpos++] = num;
};
var writeVarUint2 = (encoder, num) => {
  while (num > BITS72) {
    write2(encoder, BIT82 | BITS72 & num);
    num = floor2(num / 128);
  }
  write2(encoder, BITS72 & num);
};
var _strBuffer2 = new Uint8Array(3e4);
var _maxStrBSize2 = _strBuffer2.length / 3;
var _writeVarStringNative2 = (encoder, str) => {
  if (str.length < _maxStrBSize2) {
    const written = utf8TextEncoder2.encodeInto(str, _strBuffer2).written || 0;
    writeVarUint2(encoder, written);
    for (let i = 0; i < written; i++) {
      write2(encoder, _strBuffer2[i]);
    }
  } else {
    writeVarUint8Array2(encoder, encodeUtf82(str));
  }
};
var _writeVarStringPolyfill2 = (encoder, str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  writeVarUint2(encoder, len);
  for (let i = 0; i < len; i++) {
    write2(
      encoder,
      /** @type {number} */
      encodedString.codePointAt(i)
    );
  }
};
var writeVarString2 = utf8TextEncoder2 && /** @type {any} */
utf8TextEncoder2.encodeInto ? _writeVarStringNative2 : _writeVarStringPolyfill2;
var writeUint8Array2 = (encoder, uint8Array) => {
  const bufferLen = encoder.cbuf.length;
  const cpos = encoder.cpos;
  const leftCopyLen = min2(bufferLen - cpos, uint8Array.length);
  const rightCopyLen = uint8Array.length - leftCopyLen;
  encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
  encoder.cpos += leftCopyLen;
  if (rightCopyLen > 0) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(max2(bufferLen * 2, rightCopyLen));
    encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
    encoder.cpos = rightCopyLen;
  }
};
var writeVarUint8Array2 = (encoder, uint8Array) => {
  writeVarUint2(encoder, uint8Array.byteLength);
  writeUint8Array2(encoder, uint8Array);
};
var create7 = (s) => new Error(s);
var errorUnexpectedEndOfArray2 = create7("Unexpected end of array");
var errorIntegerOutOfRange2 = create7("Integer out of Range");
var readUint8Array2 = (decoder, len) => {
  const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
  decoder.pos += len;
  return view;
};
var readVarUint8Array2 = (decoder) => readUint8Array2(decoder, readVarUint2(decoder));
var readUint82 = (decoder) => decoder.arr[decoder.pos++];
var readVarUint2 = (decoder) => {
  let num = 0;
  let mult = 1;
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    const r = decoder.arr[decoder.pos++];
    num = num + (r & BITS72) * mult;
    mult *= 128;
    if (r < BIT82) {
      return num;
    }
    if (num > MAX_SAFE_INTEGER2) {
      throw errorIntegerOutOfRange2;
    }
  }
  throw errorUnexpectedEndOfArray2;
};
var _readVarStringPolyfill2 = (decoder) => {
  let remainingLen = readVarUint2(decoder);
  if (remainingLen === 0) {
    return "";
  } else {
    let encodedString = String.fromCodePoint(readUint82(decoder));
    if (--remainingLen < 100) {
      while (remainingLen--) {
        encodedString += String.fromCodePoint(readUint82(decoder));
      }
    } else {
      while (remainingLen > 0) {
        const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
        const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
        decoder.pos += nextLen;
        encodedString += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          bytes
        );
        remainingLen -= nextLen;
      }
    }
    return decodeURIComponent(escape(encodedString));
  }
};
var _readVarStringNative2 = (decoder) => (
  /** @type any */
  utf8TextDecoder2.decode(readVarUint8Array2(decoder))
);
var readVarString2 = utf8TextDecoder2 ? _readVarStringNative2 : _readVarStringPolyfill2;
var AuthMessageType;
(function(AuthMessageType2) {
  AuthMessageType2[AuthMessageType2["Token"] = 0] = "Token";
  AuthMessageType2[AuthMessageType2["PermissionDenied"] = 1] = "PermissionDenied";
  AuthMessageType2[AuthMessageType2["Authenticated"] = 2] = "Authenticated";
})(AuthMessageType || (AuthMessageType = {}));
var writeAuthentication = (encoder, auth) => {
  writeVarUint2(encoder, AuthMessageType.Token);
  writeVarString2(encoder, auth);
};
var readAuthMessage = (decoder, sendToken, permissionDeniedHandler, authenticatedHandler) => {
  switch (readVarUint2(decoder)) {
    case AuthMessageType.Token: {
      sendToken();
      break;
    }
    case AuthMessageType.PermissionDenied: {
      permissionDeniedHandler(readVarString2(decoder));
      break;
    }
    case AuthMessageType.Authenticated: {
      authenticatedHandler(readVarString2(decoder));
      break;
    }
  }
};
var awarenessStatesToArray = (states) => {
  return Array.from(states.entries()).map(([key, value]) => {
    return {
      clientId: key,
      ...value
    };
  });
};
var WsReadyStates;
(function(WsReadyStates2) {
  WsReadyStates2[WsReadyStates2["Connecting"] = 0] = "Connecting";
  WsReadyStates2[WsReadyStates2["Open"] = 1] = "Open";
  WsReadyStates2[WsReadyStates2["Closing"] = 2] = "Closing";
  WsReadyStates2[WsReadyStates2["Closed"] = 3] = "Closed";
})(WsReadyStates || (WsReadyStates = {}));

// node_modules/@lifeomic/attempt/dist/es6/src/index.js
function applyDefaults(options) {
  if (!options) {
    options = {};
  }
  return {
    delay: options.delay === void 0 ? 200 : options.delay,
    initialDelay: options.initialDelay === void 0 ? 0 : options.initialDelay,
    minDelay: options.minDelay === void 0 ? 0 : options.minDelay,
    maxDelay: options.maxDelay === void 0 ? 0 : options.maxDelay,
    factor: options.factor === void 0 ? 0 : options.factor,
    maxAttempts: options.maxAttempts === void 0 ? 3 : options.maxAttempts,
    timeout: options.timeout === void 0 ? 0 : options.timeout,
    jitter: options.jitter === true,
    initialJitter: options.initialJitter === true,
    handleError: options.handleError === void 0 ? null : options.handleError,
    handleTimeout: options.handleTimeout === void 0 ? null : options.handleTimeout,
    beforeAttempt: options.beforeAttempt === void 0 ? null : options.beforeAttempt,
    calculateDelay: options.calculateDelay === void 0 ? null : options.calculateDelay
  };
}
async function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
function defaultCalculateDelay(context, options) {
  let delay = options.delay;
  if (delay === 0) {
    return 0;
  }
  if (options.factor) {
    delay *= Math.pow(options.factor, context.attemptNum - 1);
    if (options.maxDelay !== 0) {
      delay = Math.min(delay, options.maxDelay);
    }
  }
  if (options.jitter) {
    const min4 = Math.ceil(options.minDelay);
    const max4 = Math.floor(delay);
    delay = Math.floor(Math.random() * (max4 - min4 + 1)) + min4;
  }
  return Math.round(delay);
}
async function retry(attemptFunc, attemptOptions) {
  const options = applyDefaults(attemptOptions);
  for (const prop of [
    "delay",
    "initialDelay",
    "minDelay",
    "maxDelay",
    "maxAttempts",
    "timeout"
  ]) {
    const value = options[prop];
    if (!Number.isInteger(value) || value < 0) {
      throw new Error(`Value for ${prop} must be an integer greater than or equal to 0`);
    }
  }
  if (options.factor.constructor !== Number || options.factor < 0) {
    throw new Error(`Value for factor must be a number greater than or equal to 0`);
  }
  if (options.delay < options.minDelay) {
    throw new Error(`delay cannot be less than minDelay (delay: ${options.delay}, minDelay: ${options.minDelay}`);
  }
  const context = {
    attemptNum: 0,
    attemptsRemaining: options.maxAttempts ? options.maxAttempts : -1,
    aborted: false,
    abort() {
      context.aborted = true;
    }
  };
  const calculateDelay = options.calculateDelay || defaultCalculateDelay;
  async function makeAttempt() {
    if (options.beforeAttempt) {
      options.beforeAttempt(context, options);
    }
    if (context.aborted) {
      const err = new Error(`Attempt aborted`);
      err.code = "ATTEMPT_ABORTED";
      throw err;
    }
    const onError = async (err) => {
      if (options.handleError) {
        await options.handleError(err, context, options);
      }
      if (context.aborted || context.attemptsRemaining === 0) {
        throw err;
      }
      context.attemptNum++;
      const delay = calculateDelay(context, options);
      if (delay) {
        await sleep(delay);
      }
      return makeAttempt();
    };
    if (context.attemptsRemaining > 0) {
      context.attemptsRemaining--;
    }
    if (options.timeout) {
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          if (options.handleTimeout) {
            try {
              resolve(options.handleTimeout(context, options));
            } catch (e) {
              reject(e);
            }
          } else {
            const err = new Error(`Retry timeout (attemptNum: ${context.attemptNum}, timeout: ${options.timeout})`);
            err.code = "ATTEMPT_TIMEOUT";
            reject(err);
          }
        }, options.timeout);
        attemptFunc(context, options).then((result) => {
          clearTimeout(timer);
          resolve(result);
        }).catch((err) => {
          clearTimeout(timer);
          onError(err).then(resolve).catch(reject);
        });
      });
    } else {
      return attemptFunc(context, options).catch(onError);
    }
  }
  const initialDelay = options.calculateDelay ? options.calculateDelay(context, options) : options.initialDelay;
  if (initialDelay) {
    await sleep(initialDelay);
  }
  if (context.attemptNum < 1 && options.initialJitter) {
    const delay = calculateDelay(context, options);
    if (delay) {
      await sleep(delay);
    }
  }
  return makeAttempt();
}

// node_modules/@hocuspocus/provider/dist/hocuspocus-provider.esm.js
var floor3 = Math.floor;
var min3 = (a, b) => a < b ? a : b;
var max3 = (a, b) => a > b ? a : b;
var BIT72 = 64;
var BIT83 = 128;
var BITS62 = 63;
var BITS73 = 127;
var MAX_SAFE_INTEGER3 = Number.MAX_SAFE_INTEGER;
var create$2 = () => /* @__PURE__ */ new Set();
var from2 = Array.from;
var _encodeUtf8Polyfill3 = (str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  const buf = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buf[i] = /** @type {number} */
    encodedString.codePointAt(i);
  }
  return buf;
};
var utf8TextEncoder3 = (
  /** @type {TextEncoder} */
  typeof TextEncoder !== "undefined" ? new TextEncoder() : null
);
var _encodeUtf8Native3 = (str) => utf8TextEncoder3.encode(str);
var encodeUtf83 = utf8TextEncoder3 ? _encodeUtf8Native3 : _encodeUtf8Polyfill3;
var utf8TextDecoder3 = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
if (utf8TextDecoder3 && utf8TextDecoder3.decode(new Uint8Array()).length === 1) {
  utf8TextDecoder3 = null;
}
var Encoder2 = class {
  constructor() {
    this.cpos = 0;
    this.cbuf = new Uint8Array(100);
    this.bufs = [];
  }
};
var createEncoder2 = () => new Encoder2();
var length$1 = (encoder) => {
  let len = encoder.cpos;
  for (let i = 0; i < encoder.bufs.length; i++) {
    len += encoder.bufs[i].length;
  }
  return len;
};
var toUint8Array2 = (encoder) => {
  const uint8arr = new Uint8Array(length$1(encoder));
  let curPos = 0;
  for (let i = 0; i < encoder.bufs.length; i++) {
    const d = encoder.bufs[i];
    uint8arr.set(d, curPos);
    curPos += d.length;
  }
  uint8arr.set(new Uint8Array(encoder.cbuf.buffer, 0, encoder.cpos), curPos);
  return uint8arr;
};
var write3 = (encoder, num) => {
  const bufferLen = encoder.cbuf.length;
  if (encoder.cpos === bufferLen) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(bufferLen * 2);
    encoder.cpos = 0;
  }
  encoder.cbuf[encoder.cpos++] = num;
};
var writeVarUint3 = (encoder, num) => {
  while (num > BITS73) {
    write3(encoder, BIT83 | BITS73 & num);
    num = floor3(num / 128);
  }
  write3(encoder, BITS73 & num);
};
var _strBuffer3 = new Uint8Array(3e4);
var _maxStrBSize3 = _strBuffer3.length / 3;
var _writeVarStringNative3 = (encoder, str) => {
  if (str.length < _maxStrBSize3) {
    const written = utf8TextEncoder3.encodeInto(str, _strBuffer3).written || 0;
    writeVarUint3(encoder, written);
    for (let i = 0; i < written; i++) {
      write3(encoder, _strBuffer3[i]);
    }
  } else {
    writeVarUint8Array3(encoder, encodeUtf83(str));
  }
};
var _writeVarStringPolyfill3 = (encoder, str) => {
  const encodedString = unescape(encodeURIComponent(str));
  const len = encodedString.length;
  writeVarUint3(encoder, len);
  for (let i = 0; i < len; i++) {
    write3(
      encoder,
      /** @type {number} */
      encodedString.codePointAt(i)
    );
  }
};
var writeVarString3 = utf8TextEncoder3 && /** @type {any} */
utf8TextEncoder3.encodeInto ? _writeVarStringNative3 : _writeVarStringPolyfill3;
var writeUint8Array3 = (encoder, uint8Array) => {
  const bufferLen = encoder.cbuf.length;
  const cpos = encoder.cpos;
  const leftCopyLen = min3(bufferLen - cpos, uint8Array.length);
  const rightCopyLen = uint8Array.length - leftCopyLen;
  encoder.cbuf.set(uint8Array.subarray(0, leftCopyLen), cpos);
  encoder.cpos += leftCopyLen;
  if (rightCopyLen > 0) {
    encoder.bufs.push(encoder.cbuf);
    encoder.cbuf = new Uint8Array(max3(bufferLen * 2, rightCopyLen));
    encoder.cbuf.set(uint8Array.subarray(leftCopyLen));
    encoder.cpos = rightCopyLen;
  }
};
var writeVarUint8Array3 = (encoder, uint8Array) => {
  writeVarUint3(encoder, uint8Array.byteLength);
  writeUint8Array3(encoder, uint8Array);
};
var create$1 = (s) => new Error(s);
var errorUnexpectedEndOfArray3 = create$1("Unexpected end of array");
var errorIntegerOutOfRange3 = create$1("Integer out of Range");
var Decoder2 = class {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(uint8Array) {
    this.arr = uint8Array;
    this.pos = 0;
  }
};
var createDecoder2 = (uint8Array) => new Decoder2(uint8Array);
var readUint8Array3 = (decoder, len) => {
  const view = new Uint8Array(decoder.arr.buffer, decoder.pos + decoder.arr.byteOffset, len);
  decoder.pos += len;
  return view;
};
var readVarUint8Array3 = (decoder) => readUint8Array3(decoder, readVarUint3(decoder));
var readUint83 = (decoder) => decoder.arr[decoder.pos++];
var readVarUint3 = (decoder) => {
  let num = 0;
  let mult = 1;
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    const r = decoder.arr[decoder.pos++];
    num = num + (r & BITS73) * mult;
    mult *= 128;
    if (r < BIT83) {
      return num;
    }
    if (num > MAX_SAFE_INTEGER3) {
      throw errorIntegerOutOfRange3;
    }
  }
  throw errorUnexpectedEndOfArray3;
};
var readVarInt2 = (decoder) => {
  let r = decoder.arr[decoder.pos++];
  let num = r & BITS62;
  let mult = 64;
  const sign = (r & BIT72) > 0 ? -1 : 1;
  if ((r & BIT83) === 0) {
    return sign * num;
  }
  const len = decoder.arr.length;
  while (decoder.pos < len) {
    r = decoder.arr[decoder.pos++];
    num = num + (r & BITS73) * mult;
    mult *= 128;
    if (r < BIT83) {
      return sign * num;
    }
    if (num > MAX_SAFE_INTEGER3) {
      throw errorIntegerOutOfRange3;
    }
  }
  throw errorUnexpectedEndOfArray3;
};
var _readVarStringPolyfill3 = (decoder) => {
  let remainingLen = readVarUint3(decoder);
  if (remainingLen === 0) {
    return "";
  } else {
    let encodedString = String.fromCodePoint(readUint83(decoder));
    if (--remainingLen < 100) {
      while (remainingLen--) {
        encodedString += String.fromCodePoint(readUint83(decoder));
      }
    } else {
      while (remainingLen > 0) {
        const nextLen = remainingLen < 1e4 ? remainingLen : 1e4;
        const bytes = decoder.arr.subarray(decoder.pos, decoder.pos + nextLen);
        decoder.pos += nextLen;
        encodedString += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          bytes
        );
        remainingLen -= nextLen;
      }
    }
    return decodeURIComponent(escape(encodedString));
  }
};
var _readVarStringNative3 = (decoder) => (
  /** @type any */
  utf8TextDecoder3.decode(readVarUint8Array3(decoder))
);
var readVarString3 = utf8TextDecoder3 ? _readVarStringNative3 : _readVarStringPolyfill3;
var peekVarString = (decoder) => {
  const pos = decoder.pos;
  const s = readVarString3(decoder);
  decoder.pos = pos;
  return s;
};
var getUnixTime2 = Date.now;
var create8 = () => /* @__PURE__ */ new Map();
var setIfUndefined2 = (map2, key, createT) => {
  let set = map2.get(key);
  if (set === void 0) {
    map2.set(key, set = createT());
  }
  return set;
};
var Observable = class {
  constructor() {
    this._observers = create8();
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  on(name, f) {
    setIfUndefined2(this._observers, name, create$2).add(f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  once(name, f) {
    const _f = (...args2) => {
      this.off(name, _f);
      f(...args2);
    };
    this.on(name, _f);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  off(name, f) {
    const observers = this._observers.get(name);
    if (observers !== void 0) {
      observers.delete(f);
      if (observers.size === 0) {
        this._observers.delete(name);
      }
    }
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @param {N} name The event name.
   * @param {Array<any>} args The arguments that are applied to the event listener.
   */
  emit(name, args2) {
    return from2((this._observers.get(name) || create8()).values()).forEach((f) => f(...args2));
  }
  destroy() {
    this._observers = create8();
  }
};
var keys2 = Object.keys;
var length2 = (obj) => keys2(obj).length;
var hasProperty2 = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
var equalityStrict = (a, b) => a === b;
var equalityDeep2 = (a, b) => {
  if (a == null || b == null) {
    return equalityStrict(a, b);
  }
  if (a.constructor !== b.constructor) {
    return false;
  }
  if (a === b) {
    return true;
  }
  switch (a.constructor) {
    case ArrayBuffer:
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    // eslint-disable-next-line no-fallthrough
    case Uint8Array: {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      break;
    }
    case Set: {
      if (a.size !== b.size) {
        return false;
      }
      for (const value of a) {
        if (!b.has(value)) {
          return false;
        }
      }
      break;
    }
    case Map: {
      if (a.size !== b.size) {
        return false;
      }
      for (const key of a.keys()) {
        if (!b.has(key) || !equalityDeep2(a.get(key), b.get(key))) {
          return false;
        }
      }
      break;
    }
    case Object:
      if (length2(a) !== length2(b)) {
        return false;
      }
      for (const key in a) {
        if (!hasProperty2(a, key) || !equalityDeep2(a[key], b[key])) {
          return false;
        }
      }
      break;
    case Array:
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        if (!equalityDeep2(a[i], b[i])) {
          return false;
        }
      }
      break;
    default:
      return false;
  }
  return true;
};
var outdatedTimeout = 3e4;
var Awareness = class extends Observable {
  /**
   * @param {Y.Doc} doc
   */
  constructor(doc2) {
    super();
    this.doc = doc2;
    this.clientID = doc2.clientID;
    this.states = /* @__PURE__ */ new Map();
    this.meta = /* @__PURE__ */ new Map();
    this._checkInterval = /** @type {any} */
    setInterval(() => {
      const now = getUnixTime2();
      if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - /** @type {{lastUpdated:number}} */
      this.meta.get(this.clientID).lastUpdated) {
        this.setLocalState(this.getLocalState());
      }
      const remove = [];
      this.meta.forEach((meta, clientid) => {
        if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) {
          remove.push(clientid);
        }
      });
      if (remove.length > 0) {
        removeAwarenessStates(this, remove, "timeout");
      }
    }, floor3(outdatedTimeout / 10));
    doc2.on("destroy", () => {
      this.destroy();
    });
    this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]);
    this.setLocalState(null);
    super.destroy();
    clearInterval(this._checkInterval);
  }
  /**
   * @return {Object<string,any>|null}
   */
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  /**
   * @param {Object<string,any>|null} state
   */
  setLocalState(state) {
    const clientID = this.clientID;
    const currLocalMeta = this.meta.get(clientID);
    const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
    const prevState = this.states.get(clientID);
    if (state === null) {
      this.states.delete(clientID);
    } else {
      this.states.set(clientID, state);
    }
    this.meta.set(clientID, {
      clock,
      lastUpdated: getUnixTime2()
    });
    const added = [];
    const updated = [];
    const filteredUpdated = [];
    const removed = [];
    if (state === null) {
      removed.push(clientID);
    } else if (prevState == null) {
      if (state != null) {
        added.push(clientID);
      }
    } else {
      updated.push(clientID);
      if (!equalityDeep2(prevState, state)) {
        filteredUpdated.push(clientID);
      }
    }
    if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
      this.emit("change", [{ added, updated: filteredUpdated, removed }, "local"]);
    }
    this.emit("update", [{ added, updated, removed }, "local"]);
  }
  /**
   * @param {string} field
   * @param {any} value
   */
  setLocalStateField(field, value) {
    const state = this.getLocalState();
    if (state !== null) {
      this.setLocalState({
        ...state,
        [field]: value
      });
    }
  }
  /**
   * @return {Map<number,Object<string,any>>}
   */
  getStates() {
    return this.states;
  }
};
var removeAwarenessStates = (awareness, clients, origin) => {
  const removed = [];
  for (let i = 0; i < clients.length; i++) {
    const clientID = clients[i];
    if (awareness.states.has(clientID)) {
      awareness.states.delete(clientID);
      if (clientID === awareness.clientID) {
        const curMeta = (
          /** @type {MetaClientState} */
          awareness.meta.get(clientID)
        );
        awareness.meta.set(clientID, {
          clock: curMeta.clock + 1,
          lastUpdated: getUnixTime2()
        });
      }
      removed.push(clientID);
    }
  }
  if (removed.length > 0) {
    awareness.emit("change", [{ added: [], updated: [], removed }, origin]);
    awareness.emit("update", [{ added: [], updated: [], removed }, origin]);
  }
};
var encodeAwarenessUpdate = (awareness, clients, states = awareness.states) => {
  const len = clients.length;
  const encoder = createEncoder2();
  writeVarUint3(encoder, len);
  for (let i = 0; i < len; i++) {
    const clientID = clients[i];
    const state = states.get(clientID) || null;
    const clock = (
      /** @type {MetaClientState} */
      awareness.meta.get(clientID).clock
    );
    writeVarUint3(encoder, clientID);
    writeVarUint3(encoder, clock);
    writeVarString3(encoder, JSON.stringify(state));
  }
  return toUint8Array2(encoder);
};
var applyAwarenessUpdate = (awareness, update, origin) => {
  const decoder = createDecoder2(update);
  const timestamp = getUnixTime2();
  const added = [];
  const updated = [];
  const filteredUpdated = [];
  const removed = [];
  const len = readVarUint3(decoder);
  for (let i = 0; i < len; i++) {
    const clientID = readVarUint3(decoder);
    let clock = readVarUint3(decoder);
    const state = JSON.parse(readVarString3(decoder));
    const clientMeta = awareness.meta.get(clientID);
    const prevState = awareness.states.get(clientID);
    const currClock = clientMeta === void 0 ? 0 : clientMeta.clock;
    if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
      if (state === null) {
        if (clientID === awareness.clientID && awareness.getLocalState() != null) {
          clock++;
        } else {
          awareness.states.delete(clientID);
        }
      } else {
        awareness.states.set(clientID, state);
      }
      awareness.meta.set(clientID, {
        clock,
        lastUpdated: timestamp
      });
      if (clientMeta === void 0 && state !== null) {
        added.push(clientID);
      } else if (clientMeta !== void 0 && state === null) {
        removed.push(clientID);
      } else if (state !== null) {
        if (!equalityDeep2(state, prevState)) {
          filteredUpdated.push(clientID);
        }
        updated.push(clientID);
      }
    }
  }
  if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
    awareness.emit("change", [{
      added,
      updated: filteredUpdated,
      removed
    }, origin]);
  }
  if (added.length > 0 || updated.length > 0 || removed.length > 0) {
    awareness.emit("update", [{
      added,
      updated,
      removed
    }, origin]);
  }
};
var EventEmitter = class {
  constructor() {
    this.callbacks = {};
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  on(event, fn) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    this.callbacks[event].push(fn);
    return this;
  }
  emit(event, ...args2) {
    const callbacks = this.callbacks[event];
    if (callbacks) {
      callbacks.forEach((callback) => callback.apply(this, args2));
    }
    return this;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  off(event, fn) {
    const callbacks = this.callbacks[event];
    if (callbacks) {
      if (fn) {
        this.callbacks[event] = callbacks.filter((callback) => callback !== fn);
      } else {
        delete this.callbacks[event];
      }
    }
    return this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
};
var IncomingMessage = class {
  constructor(data) {
    this.data = data;
    this.encoder = createEncoder2();
    this.decoder = createDecoder2(new Uint8Array(this.data));
  }
  peekVarString() {
    return peekVarString(this.decoder);
  }
  readVarUint() {
    return readVarUint3(this.decoder);
  }
  readVarString() {
    return readVarString3(this.decoder);
  }
  readVarUint8Array() {
    return readVarUint8Array3(this.decoder);
  }
  writeVarUint(type) {
    return writeVarUint3(this.encoder, type);
  }
  writeVarString(string) {
    return writeVarString3(this.encoder, string);
  }
  writeVarUint8Array(data) {
    return writeVarUint8Array3(this.encoder, data);
  }
  length() {
    return length$1(this.encoder);
  }
};
var MessageType;
(function(MessageType2) {
  MessageType2[MessageType2["Sync"] = 0] = "Sync";
  MessageType2[MessageType2["Awareness"] = 1] = "Awareness";
  MessageType2[MessageType2["Auth"] = 2] = "Auth";
  MessageType2[MessageType2["QueryAwareness"] = 3] = "QueryAwareness";
  MessageType2[MessageType2["Stateless"] = 5] = "Stateless";
  MessageType2[MessageType2["CLOSE"] = 7] = "CLOSE";
  MessageType2[MessageType2["SyncStatus"] = 8] = "SyncStatus";
})(MessageType || (MessageType = {}));
var WebSocketStatus;
(function(WebSocketStatus2) {
  WebSocketStatus2["Connecting"] = "connecting";
  WebSocketStatus2["Connected"] = "connected";
  WebSocketStatus2["Disconnected"] = "disconnected";
})(WebSocketStatus || (WebSocketStatus = {}));
var OutgoingMessage = class {
  constructor() {
    this.encoder = createEncoder2();
  }
  get(args2) {
    return args2.encoder;
  }
  toUint8Array() {
    return toUint8Array2(this.encoder);
  }
};
var CloseMessage = class extends OutgoingMessage {
  constructor() {
    super(...arguments);
    this.type = MessageType.CLOSE;
    this.description = "Ask the server to close the connection";
  }
  get(args2) {
    writeVarString3(this.encoder, args2.documentName);
    writeVarUint3(this.encoder, this.type);
    return this.encoder;
  }
};
var HocuspocusProviderWebsocket = class extends EventEmitter {
  constructor(configuration) {
    super();
    this.messageQueue = [];
    this.configuration = {
      url: "",
      autoConnect: true,
      preserveTrailingSlash: false,
      // @ts-ignore
      document: void 0,
      WebSocketPolyfill: void 0,
      // TODO: this should depend on awareness.outdatedTime
      messageReconnectTimeout: 3e4,
      // 1 second
      delay: 1e3,
      // instant
      initialDelay: 0,
      // double the delay each time
      factor: 2,
      // unlimited retries
      maxAttempts: 0,
      // wait at least 1 second
      minDelay: 1e3,
      // at least every 30 seconds
      maxDelay: 3e4,
      // randomize
      jitter: true,
      // retry forever
      timeout: 0,
      onOpen: () => null,
      onConnect: () => null,
      onMessage: () => null,
      onOutgoingMessage: () => null,
      onStatus: () => null,
      onDisconnect: () => null,
      onClose: () => null,
      onDestroy: () => null,
      onAwarenessUpdate: () => null,
      onAwarenessChange: () => null,
      handleTimeout: null,
      providerMap: /* @__PURE__ */ new Map()
    };
    this.webSocket = null;
    this.webSocketHandlers = {};
    this.shouldConnect = true;
    this.status = WebSocketStatus.Disconnected;
    this.lastMessageReceived = 0;
    this.identifier = 0;
    this.intervals = {
      connectionChecker: null
    };
    this.connectionAttempt = null;
    this.receivedOnOpenPayload = void 0;
    this.closeTries = 0;
    this.setConfiguration(configuration);
    this.configuration.WebSocketPolyfill = configuration.WebSocketPolyfill ? configuration.WebSocketPolyfill : WebSocket;
    this.on("open", this.configuration.onOpen);
    this.on("open", this.onOpen.bind(this));
    this.on("connect", this.configuration.onConnect);
    this.on("message", this.configuration.onMessage);
    this.on("outgoingMessage", this.configuration.onOutgoingMessage);
    this.on("status", this.configuration.onStatus);
    this.on("disconnect", this.configuration.onDisconnect);
    this.on("close", this.configuration.onClose);
    this.on("destroy", this.configuration.onDestroy);
    this.on("awarenessUpdate", this.configuration.onAwarenessUpdate);
    this.on("awarenessChange", this.configuration.onAwarenessChange);
    this.on("close", this.onClose.bind(this));
    this.on("message", this.onMessage.bind(this));
    this.intervals.connectionChecker = setInterval(this.checkConnection.bind(this), this.configuration.messageReconnectTimeout / 10);
    if (this.shouldConnect) {
      this.connect();
    }
  }
  async onOpen(event) {
    this.status = WebSocketStatus.Connected;
    this.emit("status", { status: WebSocketStatus.Connected });
    this.cancelWebsocketRetry = void 0;
    this.receivedOnOpenPayload = event;
  }
  attach(provider) {
    this.configuration.providerMap.set(provider.configuration.name, provider);
    if (this.status === WebSocketStatus.Disconnected && this.shouldConnect) {
      this.connect();
    }
    if (this.receivedOnOpenPayload && this.status === WebSocketStatus.Connected) {
      provider.onOpen(this.receivedOnOpenPayload);
    }
  }
  detach(provider) {
    if (this.configuration.providerMap.has(provider.configuration.name)) {
      provider.send(CloseMessage, {
        documentName: provider.configuration.name
      });
      this.configuration.providerMap.delete(provider.configuration.name);
    }
  }
  setConfiguration(configuration = {}) {
    this.configuration = { ...this.configuration, ...configuration };
    if (!this.configuration.autoConnect) {
      this.shouldConnect = false;
    }
  }
  async connect() {
    if (this.status === WebSocketStatus.Connected) {
      return;
    }
    if (this.cancelWebsocketRetry) {
      this.cancelWebsocketRetry();
      this.cancelWebsocketRetry = void 0;
    }
    this.receivedOnOpenPayload = void 0;
    this.shouldConnect = true;
    const abortableRetry = () => {
      let cancelAttempt = false;
      const retryPromise2 = retry(this.createWebSocketConnection.bind(this), {
        delay: this.configuration.delay,
        initialDelay: this.configuration.initialDelay,
        factor: this.configuration.factor,
        maxAttempts: this.configuration.maxAttempts,
        minDelay: this.configuration.minDelay,
        maxDelay: this.configuration.maxDelay,
        jitter: this.configuration.jitter,
        timeout: this.configuration.timeout,
        handleTimeout: this.configuration.handleTimeout,
        beforeAttempt: (context) => {
          if (!this.shouldConnect || cancelAttempt) {
            context.abort();
          }
        }
      }).catch((error) => {
        if (error && error.code !== "ATTEMPT_ABORTED") {
          throw error;
        }
      });
      return {
        retryPromise: retryPromise2,
        cancelFunc: () => {
          cancelAttempt = true;
        }
      };
    };
    const { retryPromise, cancelFunc } = abortableRetry();
    this.cancelWebsocketRetry = cancelFunc;
    return retryPromise;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  attachWebSocketListeners(ws, reject) {
    const { identifier } = ws;
    const onMessageHandler = (payload) => this.emit("message", payload);
    const onCloseHandler = (payload) => this.emit("close", { event: payload });
    const onOpenHandler = (payload) => this.emit("open", payload);
    const onErrorHandler = (err) => {
      reject(err);
    };
    this.webSocketHandlers[identifier] = {
      message: onMessageHandler,
      close: onCloseHandler,
      open: onOpenHandler,
      error: onErrorHandler
    };
    const handlers = this.webSocketHandlers[ws.identifier];
    Object.keys(handlers).forEach((name) => {
      ws.addEventListener(name, handlers[name]);
    });
  }
  cleanupWebSocket() {
    if (!this.webSocket) {
      return;
    }
    const { identifier } = this.webSocket;
    const handlers = this.webSocketHandlers[identifier];
    Object.keys(handlers).forEach((name) => {
      var _a;
      (_a = this.webSocket) === null || _a === void 0 ? void 0 : _a.removeEventListener(name, handlers[name]);
      delete this.webSocketHandlers[identifier];
    });
    this.webSocket.close();
    this.webSocket = null;
  }
  createWebSocketConnection() {
    return new Promise((resolve, reject) => {
      if (this.webSocket) {
        this.messageQueue = [];
        this.cleanupWebSocket();
      }
      this.lastMessageReceived = 0;
      this.identifier += 1;
      const ws = new this.configuration.WebSocketPolyfill(this.url);
      ws.binaryType = "arraybuffer";
      ws.identifier = this.identifier;
      this.attachWebSocketListeners(ws, reject);
      this.webSocket = ws;
      this.status = WebSocketStatus.Connecting;
      this.emit("status", { status: WebSocketStatus.Connecting });
      this.connectionAttempt = {
        resolve,
        reject
      };
    });
  }
  onMessage(event) {
    var _a;
    this.resolveConnectionAttempt();
    this.lastMessageReceived = getUnixTime2();
    const message = new IncomingMessage(event.data);
    const documentName = message.peekVarString();
    (_a = this.configuration.providerMap.get(documentName)) === null || _a === void 0 ? void 0 : _a.onMessage(event);
  }
  resolveConnectionAttempt() {
    if (this.connectionAttempt) {
      this.connectionAttempt.resolve();
      this.connectionAttempt = null;
      this.status = WebSocketStatus.Connected;
      this.emit("status", { status: WebSocketStatus.Connected });
      this.emit("connect");
      this.messageQueue.forEach((message) => this.send(message));
      this.messageQueue = [];
    }
  }
  stopConnectionAttempt() {
    this.connectionAttempt = null;
  }
  rejectConnectionAttempt() {
    var _a;
    (_a = this.connectionAttempt) === null || _a === void 0 ? void 0 : _a.reject();
    this.connectionAttempt = null;
  }
  checkConnection() {
    var _a;
    if (this.status !== WebSocketStatus.Connected) {
      return;
    }
    if (!this.lastMessageReceived) {
      return;
    }
    if (this.configuration.messageReconnectTimeout >= getUnixTime2() - this.lastMessageReceived) {
      return;
    }
    this.closeTries += 1;
    if (this.closeTries > 2) {
      this.onClose({
        event: {
          code: 4408,
          reason: "forced"
        }
      });
      this.closeTries = 0;
    } else {
      (_a = this.webSocket) === null || _a === void 0 ? void 0 : _a.close();
      this.messageQueue = [];
    }
  }
  get serverUrl() {
    if (this.configuration.preserveTrailingSlash) {
      return this.configuration.url;
    }
    let url = this.configuration.url;
    while (url[url.length - 1] === "/") {
      url = url.slice(0, url.length - 1);
    }
    return url;
  }
  get url() {
    return this.serverUrl;
  }
  disconnect() {
    this.shouldConnect = false;
    if (this.webSocket === null) {
      return;
    }
    try {
      this.webSocket.close();
      this.messageQueue = [];
    } catch (e) {
      console.error(e);
    }
  }
  send(message) {
    var _a;
    if (((_a = this.webSocket) === null || _a === void 0 ? void 0 : _a.readyState) === WsReadyStates.Open) {
      this.webSocket.send(message);
    } else {
      this.messageQueue.push(message);
    }
  }
  onClose({ event }) {
    this.closeTries = 0;
    this.cleanupWebSocket();
    if (this.connectionAttempt) {
      this.rejectConnectionAttempt();
    }
    this.status = WebSocketStatus.Disconnected;
    this.emit("status", { status: WebSocketStatus.Disconnected });
    this.emit("disconnect", { event });
    if (!this.cancelWebsocketRetry && this.shouldConnect) {
      setTimeout(() => {
        this.connect();
      }, this.configuration.delay);
    }
  }
  destroy() {
    this.emit("destroy");
    clearInterval(this.intervals.connectionChecker);
    this.stopConnectionAttempt();
    this.disconnect();
    this.removeAllListeners();
    this.cleanupWebSocket();
  }
};
var messageYjsSyncStep1 = 0;
var messageYjsSyncStep2 = 1;
var messageYjsUpdate = 2;
var writeSyncStep1 = (encoder, doc2) => {
  writeVarUint3(encoder, messageYjsSyncStep1);
  const sv = encodeStateVector(doc2);
  writeVarUint8Array3(encoder, sv);
};
var writeSyncStep2 = (encoder, doc2, encodedStateVector) => {
  writeVarUint3(encoder, messageYjsSyncStep2);
  writeVarUint8Array3(encoder, encodeStateAsUpdate(doc2, encodedStateVector));
};
var readSyncStep1 = (decoder, encoder, doc2) => writeSyncStep2(encoder, doc2, readVarUint8Array3(decoder));
var readSyncStep2 = (decoder, doc2, transactionOrigin) => {
  try {
    applyUpdate(doc2, readVarUint8Array3(decoder), transactionOrigin);
  } catch (error) {
    console.error("Caught error while handling a Yjs update", error);
  }
};
var writeUpdate = (encoder, update) => {
  writeVarUint3(encoder, messageYjsUpdate);
  writeVarUint8Array3(encoder, update);
};
var readUpdate = readSyncStep2;
var readSyncMessage = (decoder, encoder, doc2, transactionOrigin) => {
  const messageType = readVarUint3(decoder);
  switch (messageType) {
    case messageYjsSyncStep1:
      readSyncStep1(decoder, encoder, doc2);
      break;
    case messageYjsSyncStep2:
      readSyncStep2(decoder, doc2, transactionOrigin);
      break;
    case messageYjsUpdate:
      readUpdate(decoder, doc2, transactionOrigin);
      break;
    default:
      throw new Error("Unknown message type");
  }
  return messageType;
};
var MessageReceiver = class {
  constructor(message) {
    this.message = message;
  }
  apply(provider, emitSynced) {
    const { message } = this;
    const type = message.readVarUint();
    const emptyMessageLength = message.length();
    switch (type) {
      case MessageType.Sync:
        this.applySyncMessage(provider, emitSynced);
        break;
      case MessageType.Awareness:
        this.applyAwarenessMessage(provider);
        break;
      case MessageType.Auth:
        this.applyAuthMessage(provider);
        break;
      case MessageType.QueryAwareness:
        this.applyQueryAwarenessMessage(provider);
        break;
      case MessageType.Stateless:
        provider.receiveStateless(readVarString3(message.decoder));
        break;
      case MessageType.SyncStatus:
        this.applySyncStatusMessage(provider, readVarInt2(message.decoder) === 1);
        break;
      case MessageType.CLOSE:
        const event = {
          code: 1e3,
          reason: readVarString3(message.decoder),
          // @ts-ignore
          target: provider.configuration.websocketProvider.webSocket,
          type: "close"
        };
        provider.onClose();
        provider.configuration.onClose({ event });
        provider.forwardClose({ event });
        break;
      default:
        throw new Error(`Can\u2019t apply message of unknown type: ${type}`);
    }
    if (message.length() > emptyMessageLength + 1) {
      provider.send(OutgoingMessage, { encoder: message.encoder });
    }
  }
  applySyncMessage(provider, emitSynced) {
    const { message } = this;
    message.writeVarUint(MessageType.Sync);
    const syncMessageType = readSyncMessage(message.decoder, message.encoder, provider.document, provider);
    if (emitSynced && syncMessageType === messageYjsSyncStep2) {
      provider.synced = true;
    }
  }
  applySyncStatusMessage(provider, applied) {
    if (applied) {
      provider.decrementUnsyncedChanges();
    }
  }
  applyAwarenessMessage(provider) {
    if (!provider.awareness)
      return;
    const { message } = this;
    applyAwarenessUpdate(provider.awareness, message.readVarUint8Array(), provider);
  }
  applyAuthMessage(provider) {
    const { message } = this;
    readAuthMessage(message.decoder, provider.sendToken.bind(provider), provider.permissionDeniedHandler.bind(provider), provider.authenticatedHandler.bind(provider));
  }
  applyQueryAwarenessMessage(provider) {
    if (!provider.awareness)
      return;
    const { message } = this;
    message.writeVarUint(MessageType.Awareness);
    message.writeVarUint8Array(encodeAwarenessUpdate(provider.awareness, Array.from(provider.awareness.getStates().keys())));
  }
};
var MessageSender = class {
  constructor(Message, args2 = {}) {
    this.message = new Message();
    this.encoder = this.message.get(args2);
  }
  create() {
    return toUint8Array2(this.encoder);
  }
  send(webSocket) {
    webSocket === null || webSocket === void 0 ? void 0 : webSocket.send(this.create());
  }
};
var AuthenticationMessage = class extends OutgoingMessage {
  constructor() {
    super(...arguments);
    this.type = MessageType.Auth;
    this.description = "Authentication";
  }
  get(args2) {
    if (typeof args2.token === "undefined") {
      throw new Error("The authentication message requires `token` as an argument.");
    }
    writeVarString3(this.encoder, args2.documentName);
    writeVarUint3(this.encoder, this.type);
    writeAuthentication(this.encoder, args2.token);
    return this.encoder;
  }
};
var AwarenessMessage = class extends OutgoingMessage {
  constructor() {
    super(...arguments);
    this.type = MessageType.Awareness;
    this.description = "Awareness states update";
  }
  get(args2) {
    if (typeof args2.awareness === "undefined") {
      throw new Error("The awareness message requires awareness as an argument");
    }
    if (typeof args2.clients === "undefined") {
      throw new Error("The awareness message requires clients as an argument");
    }
    writeVarString3(this.encoder, args2.documentName);
    writeVarUint3(this.encoder, this.type);
    let awarenessUpdate;
    if (args2.states === void 0) {
      awarenessUpdate = encodeAwarenessUpdate(args2.awareness, args2.clients);
    } else {
      awarenessUpdate = encodeAwarenessUpdate(args2.awareness, args2.clients, args2.states);
    }
    writeVarUint8Array3(this.encoder, awarenessUpdate);
    return this.encoder;
  }
};
var StatelessMessage = class extends OutgoingMessage {
  constructor() {
    super(...arguments);
    this.type = MessageType.Stateless;
    this.description = "A stateless message";
  }
  get(args2) {
    var _a;
    writeVarString3(this.encoder, args2.documentName);
    writeVarUint3(this.encoder, this.type);
    writeVarString3(this.encoder, (_a = args2.payload) !== null && _a !== void 0 ? _a : "");
    return this.encoder;
  }
};
var SyncStepOneMessage = class extends OutgoingMessage {
  constructor() {
    super(...arguments);
    this.type = MessageType.Sync;
    this.description = "First sync step";
  }
  get(args2) {
    if (typeof args2.document === "undefined") {
      throw new Error("The sync step one message requires document as an argument");
    }
    writeVarString3(this.encoder, args2.documentName);
    writeVarUint3(this.encoder, this.type);
    writeSyncStep1(this.encoder, args2.document);
    return this.encoder;
  }
};
var UpdateMessage = class extends OutgoingMessage {
  constructor() {
    super(...arguments);
    this.type = MessageType.Sync;
    this.description = "A document update";
  }
  get(args2) {
    writeVarString3(this.encoder, args2.documentName);
    writeVarUint3(this.encoder, this.type);
    writeUpdate(this.encoder, args2.update);
    return this.encoder;
  }
};
var AwarenessError = class extends Error {
  constructor() {
    super(...arguments);
    this.code = 1001;
  }
};
var HocuspocusProvider = class extends EventEmitter {
  constructor(configuration) {
    var _a, _b, _c;
    super();
    this.configuration = {
      name: "",
      // @ts-ignore
      document: void 0,
      // @ts-ignore
      awareness: void 0,
      token: null,
      forceSyncInterval: false,
      onAuthenticated: () => null,
      onAuthenticationFailed: () => null,
      onOpen: () => null,
      onConnect: () => null,
      onMessage: () => null,
      onOutgoingMessage: () => null,
      onSynced: () => null,
      onStatus: () => null,
      onDisconnect: () => null,
      onClose: () => null,
      onDestroy: () => null,
      onAwarenessUpdate: () => null,
      onAwarenessChange: () => null,
      onStateless: () => null,
      onUnsyncedChanges: () => null
    };
    this.isSynced = false;
    this.unsyncedChanges = 0;
    this.isAuthenticated = false;
    this.authorizedScope = void 0;
    this.manageSocket = false;
    this._isAttached = false;
    this.intervals = {
      forceSync: null
    };
    this.boundDocumentUpdateHandler = this.documentUpdateHandler.bind(this);
    this.boundAwarenessUpdateHandler = this.awarenessUpdateHandler.bind(this);
    this.boundPageHide = this.pageHide.bind(this);
    this.boundOnOpen = this.onOpen.bind(this);
    this.boundOnClose = this.onClose.bind(this);
    this.forwardConnect = () => this.emit("connect");
    this.forwardStatus = (e) => this.emit("status", e);
    this.forwardClose = (e) => this.emit("close", e);
    this.forwardDisconnect = (e) => this.emit("disconnect", e);
    this.forwardDestroy = () => this.emit("destroy");
    this.setConfiguration(configuration);
    this.configuration.document = configuration.document ? configuration.document : new Doc();
    this.configuration.awareness = configuration.awareness !== void 0 ? configuration.awareness : new Awareness(this.document);
    this.on("open", this.configuration.onOpen);
    this.on("message", this.configuration.onMessage);
    this.on("outgoingMessage", this.configuration.onOutgoingMessage);
    this.on("synced", this.configuration.onSynced);
    this.on("destroy", this.configuration.onDestroy);
    this.on("awarenessUpdate", this.configuration.onAwarenessUpdate);
    this.on("awarenessChange", this.configuration.onAwarenessChange);
    this.on("stateless", this.configuration.onStateless);
    this.on("unsyncedChanges", this.configuration.onUnsyncedChanges);
    this.on("authenticated", this.configuration.onAuthenticated);
    this.on("authenticationFailed", this.configuration.onAuthenticationFailed);
    (_a = this.awareness) === null || _a === void 0 ? void 0 : _a.on("update", () => {
      this.emit("awarenessUpdate", {
        states: awarenessStatesToArray(this.awareness.getStates())
      });
    });
    (_b = this.awareness) === null || _b === void 0 ? void 0 : _b.on("change", () => {
      this.emit("awarenessChange", {
        states: awarenessStatesToArray(this.awareness.getStates())
      });
    });
    this.document.on("update", this.boundDocumentUpdateHandler);
    (_c = this.awareness) === null || _c === void 0 ? void 0 : _c.on("update", this.boundAwarenessUpdateHandler);
    this.registerEventListeners();
    if (this.configuration.forceSyncInterval && typeof this.configuration.forceSyncInterval === "number") {
      this.intervals.forceSync = setInterval(this.forceSync.bind(this), this.configuration.forceSyncInterval);
    }
    if (this.manageSocket) {
      this.attach();
    }
  }
  setConfiguration(configuration = {}) {
    if (!configuration.websocketProvider) {
      this.manageSocket = true;
      this.configuration.websocketProvider = new HocuspocusProviderWebsocket(configuration);
    }
    this.configuration = { ...this.configuration, ...configuration };
  }
  get document() {
    return this.configuration.document;
  }
  get isAttached() {
    return this._isAttached;
  }
  get awareness() {
    return this.configuration.awareness;
  }
  get hasUnsyncedChanges() {
    return this.unsyncedChanges > 0;
  }
  resetUnsyncedChanges() {
    this.unsyncedChanges = 1;
    this.emit("unsyncedChanges", { number: this.unsyncedChanges });
  }
  incrementUnsyncedChanges() {
    this.unsyncedChanges += 1;
    this.emit("unsyncedChanges", { number: this.unsyncedChanges });
  }
  decrementUnsyncedChanges() {
    if (this.unsyncedChanges > 0) {
      this.unsyncedChanges -= 1;
    }
    if (this.unsyncedChanges === 0) {
      this.synced = true;
    }
    this.emit("unsyncedChanges", { number: this.unsyncedChanges });
  }
  forceSync() {
    this.resetUnsyncedChanges();
    this.send(SyncStepOneMessage, {
      document: this.document,
      documentName: this.configuration.name
    });
  }
  pageHide() {
    if (this.awareness) {
      removeAwarenessStates(this.awareness, [this.document.clientID], "page hide");
    }
  }
  registerEventListeners() {
    if (typeof window === "undefined" || !("addEventListener" in window)) {
      return;
    }
    window.addEventListener("pagehide", this.boundPageHide);
  }
  sendStateless(payload) {
    this.send(StatelessMessage, {
      documentName: this.configuration.name,
      payload
    });
  }
  async sendToken() {
    let token;
    try {
      token = await this.getToken();
    } catch (error) {
      this.permissionDeniedHandler(`Failed to get token during sendToken(): ${error}`);
      return;
    }
    this.send(AuthenticationMessage, {
      token: token !== null && token !== void 0 ? token : "",
      documentName: this.configuration.name
    });
  }
  documentUpdateHandler(update, origin) {
    if (origin === this) {
      return;
    }
    this.incrementUnsyncedChanges();
    this.send(UpdateMessage, { update, documentName: this.configuration.name });
  }
  awarenessUpdateHandler({ added, updated, removed }, origin) {
    const changedClients = added.concat(updated).concat(removed);
    this.send(AwarenessMessage, {
      awareness: this.awareness,
      clients: changedClients,
      documentName: this.configuration.name
    });
  }
  /**
   * Indicates whether a first handshake with the server has been established
   *
   * Note: this does not mean all updates from the client have been persisted to the backend. For this,
   * use `hasUnsyncedChanges`.
   */
  get synced() {
    return this.isSynced;
  }
  set synced(state) {
    if (this.isSynced === state) {
      return;
    }
    this.isSynced = state;
    if (state) {
      this.emit("synced", { state });
    }
  }
  receiveStateless(payload) {
    this.emit("stateless", { payload });
  }
  // not needed, but provides backward compatibility with e.g. lexical/yjs
  async connect() {
    if (this.manageSocket) {
      return this.configuration.websocketProvider.connect();
    }
    console.warn("HocuspocusProvider::connect() is deprecated and does not do anything. Please connect/disconnect on the websocketProvider, or attach/deattach providers.");
  }
  disconnect() {
    if (this.manageSocket) {
      return this.configuration.websocketProvider.disconnect();
    }
    console.warn("HocuspocusProvider::disconnect() is deprecated and does not do anything. Please connect/disconnect on the websocketProvider, or attach/deattach providers.");
  }
  async onOpen(event) {
    this.isAuthenticated = false;
    this.emit("open", { event });
    await this.sendToken();
    this.startSync();
  }
  async getToken() {
    if (typeof this.configuration.token === "function") {
      const token = await this.configuration.token();
      return token;
    }
    return this.configuration.token;
  }
  startSync() {
    this.resetUnsyncedChanges();
    this.send(SyncStepOneMessage, {
      document: this.document,
      documentName: this.configuration.name
    });
    if (this.awareness && this.awareness.getLocalState() !== null) {
      this.send(AwarenessMessage, {
        awareness: this.awareness,
        clients: [this.document.clientID],
        documentName: this.configuration.name
      });
    }
  }
  send(message, args2) {
    if (!this._isAttached)
      return;
    const messageSender = new MessageSender(message, args2);
    this.emit("outgoingMessage", { message: messageSender.message });
    messageSender.send(this.configuration.websocketProvider);
  }
  onMessage(event) {
    const message = new IncomingMessage(event.data);
    const documentName = message.readVarString();
    message.writeVarString(documentName);
    this.emit("message", { event, message: new IncomingMessage(event.data) });
    new MessageReceiver(message).apply(this, true);
  }
  onClose() {
    this.isAuthenticated = false;
    this.synced = false;
    if (this.awareness) {
      removeAwarenessStates(this.awareness, Array.from(this.awareness.getStates().keys()).filter((client) => client !== this.document.clientID), this);
    }
  }
  destroy() {
    this.emit("destroy");
    if (this.intervals.forceSync) {
      clearInterval(this.intervals.forceSync);
    }
    if (this.awareness) {
      removeAwarenessStates(this.awareness, [this.document.clientID], "provider destroy");
      this.awareness.off("update", this.boundAwarenessUpdateHandler);
      this.awareness.destroy();
    }
    this.document.off("update", this.boundDocumentUpdateHandler);
    this.removeAllListeners();
    this.detach();
    if (this.manageSocket) {
      this.configuration.websocketProvider.destroy();
    }
    if (typeof window === "undefined" || !("removeEventListener" in window)) {
      return;
    }
    window.removeEventListener("pagehide", this.boundPageHide);
  }
  detach() {
    this.configuration.websocketProvider.off("connect", this.configuration.onConnect);
    this.configuration.websocketProvider.off("connect", this.forwardConnect);
    this.configuration.websocketProvider.off("status", this.forwardStatus);
    this.configuration.websocketProvider.off("status", this.configuration.onStatus);
    this.configuration.websocketProvider.off("open", this.boundOnOpen);
    this.configuration.websocketProvider.off("close", this.boundOnClose);
    this.configuration.websocketProvider.off("close", this.configuration.onClose);
    this.configuration.websocketProvider.off("close", this.forwardClose);
    this.configuration.websocketProvider.off("disconnect", this.configuration.onDisconnect);
    this.configuration.websocketProvider.off("disconnect", this.forwardDisconnect);
    this.configuration.websocketProvider.off("destroy", this.configuration.onDestroy);
    this.configuration.websocketProvider.off("destroy", this.forwardDestroy);
    this.configuration.websocketProvider.detach(this);
    this._isAttached = false;
  }
  attach() {
    if (this._isAttached)
      return;
    this.configuration.websocketProvider.on("connect", this.configuration.onConnect);
    this.configuration.websocketProvider.on("connect", this.forwardConnect);
    this.configuration.websocketProvider.on("status", this.configuration.onStatus);
    this.configuration.websocketProvider.on("status", this.forwardStatus);
    this.configuration.websocketProvider.on("open", this.boundOnOpen);
    this.configuration.websocketProvider.on("close", this.boundOnClose);
    this.configuration.websocketProvider.on("close", this.configuration.onClose);
    this.configuration.websocketProvider.on("close", this.forwardClose);
    this.configuration.websocketProvider.on("disconnect", this.configuration.onDisconnect);
    this.configuration.websocketProvider.on("disconnect", this.forwardDisconnect);
    this.configuration.websocketProvider.on("destroy", this.configuration.onDestroy);
    this.configuration.websocketProvider.on("destroy", this.forwardDestroy);
    this.configuration.websocketProvider.attach(this);
    this._isAttached = true;
  }
  permissionDeniedHandler(reason) {
    this.emit("authenticationFailed", { reason });
    this.isAuthenticated = false;
  }
  authenticatedHandler(scope) {
    this.isAuthenticated = true;
    this.authorizedScope = scope;
    this.emit("authenticated", { scope });
  }
  setAwarenessField(key, value) {
    if (!this.awareness) {
      throw new AwarenessError(`Cannot set awareness field "${key}" to ${JSON.stringify(value)}. You have disabled Awareness for this provider by explicitly passing awareness: null in the provider configuration.`);
    }
    this.awareness.setLocalStateField(key, value);
  }
};

// src/realtime/crdt-session.ts
var import_obsidian5 = require("obsidian");

// src/realtime/shared-presence.ts
var import_state = require("@codemirror/state");
var import_view = require("@codemirror/view");
var import_obsidian4 = require("obsidian");
var setRemotePresenceEffect = import_state.StateEffect.define();
var END_OF_LINE_LABEL_DELAY_MS = 700;
var STALE_REMOTE_CURSOR_REJECT_WINDOW_MS = 500;
var sharedCursorUiState = /* @__PURE__ */ new Map();
var sharedPresenceViewState = /* @__PURE__ */ new WeakMap();
var remotePresenceField = import_state.StateField.define({
  create() {
    return import_view.Decoration.none;
  },
  update(decorations, transaction) {
    let nextDecorations = decorations.map(transaction.changes);
    for (const effect of transaction.effects) {
      if (effect.is(setRemotePresenceEffect)) {
        nextDecorations = buildRemotePresenceDecorations(transaction.state.doc.length, effect.value);
      }
    }
    return nextDecorations;
  },
  provide: (field) => import_view.EditorView.decorations.from(field)
});
function createSharedPresenceExtension(onSelectionChange) {
  return [
    remotePresenceField,
    import_view.EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        recordMappedRemotePresence(update.view, update.changes);
      }
      if (!update.selectionSet && !update.docChanged && !update.focusChanged) {
        return;
      }
      const editorInfo = update.state.field(import_obsidian4.editorInfoField, false);
      if (!editorInfo?.file || !editorInfo.editor) {
        return;
      }
      onSelectionChange({
        filePath: editorInfo.file.path,
        editor: editorInfo.editor,
        focused: update.view.hasFocus
      });
    })
  ];
}
function getCodeMirrorEditorView(editor) {
  const candidate = editor?.cm;
  return isEditorView(candidate) ? candidate : null;
}
function getMarkdownEditorViewsForFile(app, filePath) {
  return getMarkdownViewsForFile(app, filePath).map((view) => getCodeMirrorEditorView(view.editor)).filter((view) => view !== null);
}
function getMarkdownViewsForFile(app, filePath) {
  return app.workspace.getLeavesOfType("markdown").map((leaf) => leaf.view).filter((view) => view instanceof import_obsidian4.MarkdownView).filter((view) => view.file?.path === filePath);
}
function setRemotePresenceDecorations(view, presences) {
  const stabilizedPresences = stabilizeIncomingPresences(view, presences);
  const nextSignature = getPresenceSignature(stabilizedPresences);
  const viewState = getSharedPresenceViewState(view);
  if (viewState.lastSignature === nextSignature) {
    return;
  }
  viewState.lastSignature = nextSignature;
  viewState.renderedPresences = new Map(
    stabilizedPresences.map((presence) => [getSharedCursorKey(presence), cloneSharedCursorPresence(presence)])
  );
  view.dispatch({
    effects: setRemotePresenceEffect.of(stabilizedPresences)
  });
}
function getPresenceSignature(presences) {
  return presences.map((presence) => {
    return [
      presence.clientId,
      presence.userId,
      presence.displayName,
      presence.color,
      presence.selection.anchor,
      presence.selection.head
    ].join(":");
  }).sort().join("|");
}
function buildRemotePresenceDecorations(documentLength, presences) {
  cleanupSharedCursorUiState(presences);
  const builder = new import_state.RangeSetBuilder();
  const ranges = [];
  for (const presence of presences) {
    const anchor = clampOffset(presence.selection.anchor, documentLength);
    const head = clampOffset(presence.selection.head, documentLength);
    const from3 = Math.min(anchor, head);
    const to = Math.max(anchor, head);
    if (from3 !== to) {
      ranges.push({
        from: from3,
        to,
        decoration: import_view.Decoration.mark({
          class: "rolay-shared-selection",
          attributes: {
            style: `background-color: ${withAlphaChannel(presence.color, 0.2)};`
          }
        })
      });
    }
    ranges.push({
      from: head,
      to: head,
      decoration: import_view.Decoration.widget({
        side: 1,
        widget: new SharedCursorWidget(
          getSharedCursorKey(presence),
          presence.displayName,
          presence.color,
          from3 !== to
        )
      })
    });
  }
  ranges.sort((left, right) => left.from - right.from || left.to - right.to);
  for (const range of ranges) {
    builder.add(range.from, range.to, range.decoration);
  }
  return builder.finish();
}
function clampOffset(offset, documentLength) {
  if (!Number.isFinite(offset)) {
    return 0;
  }
  return Math.max(0, Math.min(documentLength, Math.floor(offset)));
}
function withAlphaChannel(color, alpha) {
  const normalizedColor = color.trim();
  const hexMatch = normalizedColor.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hexMatch) {
    const hex = hexMatch[1];
    const expandedHex = hex.length === 3 ? hex.split("").map((char) => `${char}${char}`).join("") : hex;
    const red = Number.parseInt(expandedHex.slice(0, 2), 16);
    const green = Number.parseInt(expandedHex.slice(2, 4), 16);
    const blue = Number.parseInt(expandedHex.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }
  if (color.startsWith("hsl(") && color.endsWith(")")) {
    return `${color.slice(0, -1)} / ${alpha})`;
  }
  if (normalizedColor.startsWith("rgb(") && normalizedColor.endsWith(")")) {
    return normalizedColor.replace(/^rgb\(/, "rgba(").replace(/\)$/, `, ${alpha})`);
  }
  return normalizedColor;
}
function isEditorView(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  return "dispatch" in value && "state" in value && "dom" in value && "hasFocus" in value;
}
function getSharedPresenceViewState(view) {
  const existing = sharedPresenceViewState.get(view);
  if (existing) {
    return existing;
  }
  const created = {
    lastSignature: null,
    lastDocChangeAt: 0,
    renderedPresences: /* @__PURE__ */ new Map()
  };
  sharedPresenceViewState.set(view, created);
  return created;
}
function recordMappedRemotePresence(view, changes) {
  const viewState = getSharedPresenceViewState(view);
  viewState.lastDocChangeAt = Date.now();
  if (viewState.renderedPresences.size === 0) {
    return;
  }
  const remappedPresences = /* @__PURE__ */ new Map();
  for (const [cursorKey, presence] of viewState.renderedPresences) {
    remappedPresences.set(cursorKey, {
      ...presence,
      selection: {
        anchor: clampOffset(changes.mapPos(presence.selection.anchor, 1), view.state.doc.length),
        head: clampOffset(changes.mapPos(presence.selection.head, 1), view.state.doc.length)
      }
    });
  }
  viewState.renderedPresences = remappedPresences;
  viewState.lastSignature = getPresenceSignature([...remappedPresences.values()]);
}
function stabilizeIncomingPresences(view, presences) {
  const viewState = getSharedPresenceViewState(view);
  if (Date.now() - viewState.lastDocChangeAt > STALE_REMOTE_CURSOR_REJECT_WINDOW_MS) {
    return presences;
  }
  return presences.map((presence) => {
    const current = viewState.renderedPresences.get(getSharedCursorKey(presence));
    if (!current) {
      return presence;
    }
    const incomingHasSelection = presence.selection.anchor !== presence.selection.head;
    const currentHasSelection = current.selection.anchor !== current.selection.head;
    if (incomingHasSelection !== currentHasSelection) {
      return presence;
    }
    const incomingStart = Math.min(presence.selection.anchor, presence.selection.head);
    const incomingEnd = Math.max(presence.selection.anchor, presence.selection.head);
    const currentStart = Math.min(current.selection.anchor, current.selection.head);
    const currentEnd = Math.max(current.selection.anchor, current.selection.head);
    const movesBackwards = incomingStart < currentStart || incomingEnd < currentEnd;
    if (!movesBackwards) {
      return presence;
    }
    return {
      ...presence,
      selection: {
        anchor: current.selection.anchor,
        head: current.selection.head
      }
    };
  });
}
function cloneSharedCursorPresence(presence) {
  return {
    ...presence,
    selection: {
      anchor: presence.selection.anchor,
      head: presence.selection.head
    }
  };
}
var SharedCursorWidget = class extends import_view.WidgetType {
  constructor(cursorKey, displayName, color, hasSelection) {
    super();
    this.cursorKey = cursorKey;
    this.displayName = displayName;
    this.color = color;
    this.hasSelection = hasSelection;
  }
  eq(other) {
    return this.cursorKey === other.cursorKey && this.displayName === other.displayName && this.color === other.color && this.hasSelection === other.hasSelection;
  }
  toDOM() {
    const wrapper = document.createElement("span");
    wrapper.className = "rolay-shared-cursor";
    wrapper.style.setProperty("--rolay-presence-color", this.color);
    wrapper.setAttribute("aria-hidden", "true");
    const caret = document.createElement("span");
    caret.className = "rolay-shared-cursor__caret";
    const hitbox = document.createElement("span");
    hitbox.className = "rolay-shared-cursor__hitbox";
    const label = document.createElement("span");
    label.className = "rolay-shared-cursor__label";
    label.textContent = this.displayName;
    const uiState = getSharedCursorUiState(this.cursorKey);
    let autoRevealHandle = null;
    let hovered = false;
    const line = wrapper.closest(".cm-line");
    const clearAutoReveal = () => {
      if (autoRevealHandle !== null) {
        window.clearTimeout(autoRevealHandle);
        autoRevealHandle = null;
      }
    };
    const updateInlineVisibility = (visible) => {
      uiState.inlineVisible = visible;
      wrapper.classList.toggle("rolay-shared-cursor--inline-visible", visible);
    };
    const scheduleAutoReveal = (delayMs) => {
      clearAutoReveal();
      autoRevealHandle = window.setTimeout(() => {
        if (!wrapper.isConnected) {
          return;
        }
        if (!wrapper.classList.contains("rolay-shared-cursor--end")) {
          return;
        }
        updateInlineVisibility(true);
        autoRevealHandle = null;
      }, Math.max(0, delayMs));
    };
    const applyEndOfLineMode = () => {
      const isEndOfLine = !this.hasSelection && isCursorAtVisualLineEnd(wrapper);
      wrapper.classList.toggle("rolay-shared-cursor--end", isEndOfLine);
      if (isEndOfLine) {
        if (uiState.endOfLineSince === null) {
          uiState.endOfLineSince = Date.now();
        }
        if (hovered) {
          clearAutoReveal();
          updateInlineVisibility(true);
          return;
        }
        const elapsedMs = Date.now() - uiState.endOfLineSince;
        if (uiState.inlineVisible || elapsedMs >= END_OF_LINE_LABEL_DELAY_MS) {
          clearAutoReveal();
          updateInlineVisibility(true);
          return;
        }
        updateInlineVisibility(false);
        scheduleAutoReveal(END_OF_LINE_LABEL_DELAY_MS - elapsedMs);
        return;
      }
      uiState.endOfLineSince = null;
      uiState.inlineVisible = false;
      clearAutoReveal();
      wrapper.classList.remove("rolay-shared-cursor--inline-visible");
    };
    wrapper.addEventListener("mouseenter", () => {
      hovered = true;
      if (wrapper.classList.contains("rolay-shared-cursor--end")) {
        clearAutoReveal();
        updateInlineVisibility(true);
      }
    });
    wrapper.addEventListener("mouseleave", () => {
      hovered = false;
    });
    let mutationObserver = null;
    if (line instanceof HTMLElement) {
      mutationObserver = new MutationObserver(() => {
        if (!wrapper.isConnected) {
          mutationObserver?.disconnect();
          clearAutoReveal();
          return;
        }
        applyEndOfLineMode();
      });
    }
    if (mutationObserver && line instanceof HTMLElement) {
      mutationObserver.observe(line, {
        childList: true,
        characterData: true,
        subtree: true
      });
    }
    const cleanup = () => {
      mutationObserver?.disconnect();
      clearAutoReveal();
    };
    Object.assign(wrapper, {
      __rolayCursorCleanup: cleanup
    });
    requestAnimationFrame(() => {
      if (!wrapper.isConnected) {
        cleanup();
        return;
      }
      applyEndOfLineMode();
    });
    wrapper.append(hitbox, caret, label);
    return wrapper;
  }
  destroy(dom) {
    const cleanup = dom.__rolayCursorCleanup;
    cleanup?.();
  }
  ignoreEvent() {
    return true;
  }
};
function getSharedCursorKey(presence) {
  return `${presence.userId}:${presence.clientId}`;
}
function getSharedCursorUiState(cursorKey) {
  const existing = sharedCursorUiState.get(cursorKey);
  if (existing) {
    return existing;
  }
  const created = {
    endOfLineSince: null,
    inlineVisible: false
  };
  sharedCursorUiState.set(cursorKey, created);
  return created;
}
function cleanupSharedCursorUiState(presences) {
  const activeKeys = new Set(presences.map((presence) => getSharedCursorKey(presence)));
  for (const cursorKey of sharedCursorUiState.keys()) {
    if (!activeKeys.has(cursorKey)) {
      sharedCursorUiState.delete(cursorKey);
    }
  }
}
function isCursorAtVisualLineEnd(wrapper) {
  const line = wrapper.closest(".cm-line");
  if (!(line instanceof HTMLElement)) {
    return false;
  }
  return !hasFollowingVisibleContent(wrapper, line);
}
function hasFollowingVisibleContent(startNode, line) {
  let current = startNode;
  while (current && current !== line) {
    let sibling = current.nextSibling;
    while (sibling) {
      if (nodeContainsVisibleContent(sibling)) {
        return true;
      }
      sibling = sibling.nextSibling;
    }
    current = current.parentNode;
  }
  return false;
}
function nodeContainsVisibleContent(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return (node.textContent ?? "").length > 0;
  }
  if (!(node instanceof HTMLElement)) {
    return false;
  }
  if (node.classList.contains("rolay-shared-cursor") || node.classList.contains("cm-widgetBuffer")) {
    return false;
  }
  if (node.tagName === "BR") {
    return false;
  }
  if ((node.textContent ?? "").length > 0) {
    return true;
  }
  return Array.from(node.childNodes).some((child) => nodeContainsVisibleContent(child));
}

// src/utils/text-diff.ts
function diffText(currentText, nextText) {
  if (currentText === nextText) {
    return {
      start: 0,
      deleteCount: 0,
      insertText: ""
    };
  }
  let start = 0;
  const maxPrefix = Math.min(currentText.length, nextText.length);
  while (start < maxPrefix && currentText[start] === nextText[start]) {
    start += 1;
  }
  let currentEnd = currentText.length;
  let nextEnd = nextText.length;
  while (currentEnd > start && nextEnd > start && currentText[currentEnd - 1] === nextText[nextEnd - 1]) {
    currentEnd -= 1;
    nextEnd -= 1;
  }
  return {
    start,
    deleteCount: currentEnd - start,
    insertText: nextText.slice(start, nextEnd)
  };
}
function applyTextPatchToEditor(editor, currentText, nextText, editorView) {
  const patch = diffText(currentText, nextText);
  if (patch.deleteCount === 0 && patch.insertText.length === 0) {
    return;
  }
  if (editorView) {
    const preservedScrollTop = editorView.scrollDOM.scrollTop;
    const preservedScrollLeft = editorView.scrollDOM.scrollLeft;
    editorView.dispatch({
      changes: {
        from: patch.start,
        to: patch.start + patch.deleteCount,
        insert: patch.insertText
      }
    });
    editorView.scrollDOM.scrollTop = preservedScrollTop;
    editorView.scrollDOM.scrollLeft = preservedScrollLeft;
    window.requestAnimationFrame(() => {
      if (!editorView.dom.isConnected) {
        return;
      }
      editorView.scrollDOM.scrollTop = preservedScrollTop;
      editorView.scrollDOM.scrollLeft = preservedScrollLeft;
    });
    return;
  }
  const from3 = offsetToEditorPosition(currentText, patch.start);
  const to = offsetToEditorPosition(currentText, patch.start + patch.deleteCount);
  editor.replaceRange(patch.insertText, from3, to);
}
function offsetToEditorPosition(text2, offset) {
  let line = 0;
  let ch = 0;
  for (let index = 0; index < offset; index += 1) {
    if (text2[index] === "\n") {
      line += 1;
      ch = 0;
    } else {
      ch += 1;
    }
  }
  return { line, ch };
}

// src/realtime/crdt-session.ts
var LOCAL_EDITOR_ORIGIN = "rolay-local-editor";
var CrdtSessionManager = class {
  constructor(config) {
    this.pendingOfflineUpdates = /* @__PURE__ */ new Map();
    this.activeSession = null;
    this.sessionOperationQueue = Promise.resolve();
    this.app = config.app;
    this.apiClient = config.apiClient;
    this.getCurrentUser = config.getCurrentUser;
    this.getPresenceColor = config.getPresenceColor;
    this.resolveWorkspaceIdByLocalPath = config.resolveWorkspaceIdByLocalPath;
    this.isLiveSyncEnabledForLocalPath = config.isLiveSyncEnabledForLocalPath;
    this.getPersistedCrdtState = config.getPersistedCrdtState;
    this.persistCrdtState = config.persistCrdtState;
    this.resolveEntryByLocalPath = config.resolveEntryByLocalPath;
    this.log = config.log;
  }
  async bindToFile(file) {
    return this.runSessionOperation(async () => {
      await this.bindToFileNow(file);
    });
  }
  async refreshActiveSession() {
    return this.runSessionOperation(async () => {
      if (!this.activeSession) {
        return;
      }
      const { file } = this.activeSession;
      await this.bindToFileNow(file);
    });
  }
  async refreshPresencePreferences() {
    return this.runSessionOperation(async () => {
      if (!this.activeSession) {
        return;
      }
      const currentUser = this.getCurrentUser();
      if (!currentUser) {
        this.activeSession.clearPresenceOnly();
        return;
      }
      this.activeSession.updateAwarenessUser(currentUser, this.getPresenceColor());
    });
  }
  async disconnect() {
    return this.runSessionOperation(async () => {
      this.detachActiveSession();
      await this.activeSession?.destroy();
      this.activeSession = null;
    });
  }
  async goOffline() {
    return this.runSessionOperation(async () => {
      if (!this.activeSession) {
        return;
      }
      await this.activeSession.goOffline();
    });
  }
  async bindToFileNow(file) {
    if (!file || file.extension !== "md") {
      this.detachActiveSession();
      await this.activeSession?.destroy();
      this.activeSession = null;
      return;
    }
    const entry = this.resolveEntryByLocalPath(file.path);
    if (!entry || entry.kind !== "markdown") {
      this.detachActiveSession();
      await this.activeSession?.destroy();
      this.activeSession = null;
      return;
    }
    const liveSyncEnabled = this.isLiveSyncEnabledForLocalPath(file.path);
    const persistedCrdtState = this.getPersistedCrdtState(entry.id);
    const localBootstrapState = this.pendingOfflineUpdates.get(entry.id) ?? persistedCrdtState;
    const hasPendingOfflineState = this.pendingOfflineUpdates.has(entry.id);
    if (this.activeSession?.matches(file, entry)) {
      if (liveSyncEnabled && this.activeSession.isOffline()) {
        const nextLocalBootstrapState = this.detachActiveSession() ?? persistedCrdtState;
        await this.activeSession.destroy();
        this.activeSession = null;
        await this.connect(file, entry, nextLocalBootstrapState);
        return;
      }
      if (!liveSyncEnabled) {
        await this.activeSession.goOffline();
      }
      this.activeSession.syncEditorContext();
      return;
    }
    this.detachActiveSession();
    await this.activeSession?.destroy();
    this.activeSession = null;
    if (liveSyncEnabled) {
      if (localBootstrapState) {
        this.log(
          `Preparing live CRDT bootstrap for ${file.path} from ${hasPendingOfflineState ? "offline state" : "persisted cache"}.`
        );
      }
      await this.connect(file, entry, localBootstrapState);
      return;
    }
    if (localBootstrapState) {
      this.log(
        `Opening offline CRDT cache for ${file.path} from ${hasPendingOfflineState ? "offline state" : "persisted cache"}.`
      );
      await this.openOffline(file, entry, localBootstrapState);
      return;
    }
    this.log(`No persisted CRDT cache is available for offline markdown ${file.path}. Remote-safe merge will start after the next live sync.`);
  }
  handleEditorChange(editor, view) {
    if (!this.activeSession || !view.file) {
      return;
    }
    if (view.file.path !== this.activeSession.file.path) {
      return;
    }
    const editorView = getCodeMirrorEditorView(editor);
    if (!editorView?.hasFocus) {
      return;
    }
    this.activeSession.pushLocalText(editor.getValue());
  }
  handleEditorSelectionChange(filePath, editor, focused) {
    if (!this.activeSession || filePath !== this.activeSession.file.path) {
      return;
    }
    this.activeSession.updateLocalPresence(editor, focused);
  }
  getState() {
    if (!this.activeSession) {
      return null;
    }
    return this.activeSession.getState();
  }
  getLocalNotePresenceViewer() {
    return this.activeSession?.getLocalNotePresenceViewer() ?? null;
  }
  async seedRemoteMarkdown(entry, localText, contextLabel = entry.path) {
    if (!localText) {
      return;
    }
    await this.mergeRemoteMarkdownState(entry, createMarkdownTextState(localText), contextLabel);
  }
  async mergeRemoteMarkdownState(entry, localState, contextLabel = entry.path) {
    if (localState.byteLength === 0) {
      return;
    }
    this.log(`Merging local markdown state into remote CRDT doc for ${contextLabel}.`);
    const bootstrap = await this.apiClient.createCrdtToken(entry.id);
    await mergeRemoteMarkdownState({
      wsUrl: bootstrap.wsUrl,
      docId: bootstrap.docId,
      token: createCrdtTokenSupplier(this.apiClient, entry.id, bootstrap.token),
      localState,
      log: this.log,
      contextLabel
    });
  }
  async connect(file, entry, initialState) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      this.log(`Skipping CRDT session for ${file.path} because no authenticated user is available.`);
      return;
    }
    this.log(`Opening CRDT session for ${file.path}.`);
    const workspaceId = this.resolveWorkspaceIdByLocalPath(file.path);
    if (!workspaceId) {
      this.log(`Skipping CRDT session for ${file.path} because no room workspace could be resolved.`);
      return;
    }
    const bootstrap = await this.apiClient.createCrdtToken(entry.id);
    const session = new BoundCrdtSession(
      this.app,
      file,
      entry,
      workspaceId,
      currentUser,
      this.getPresenceColor(),
      bootstrap.docId,
      bootstrap.wsUrl,
      createCrdtTokenSupplier(this.apiClient, entry.id, bootstrap.token),
      this.log,
      this.persistCrdtState,
      initialState ?? null
    );
    this.activeSession = session;
    await session.open();
    this.pendingOfflineUpdates.delete(entry.id);
  }
  async openOffline(file, entry, initialState) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return;
    }
    const workspaceId = this.resolveWorkspaceIdByLocalPath(file.path);
    if (!workspaceId) {
      return;
    }
    const session = new BoundCrdtSession(
      this.app,
      file,
      entry,
      workspaceId,
      currentUser,
      this.getPresenceColor(),
      entry.id,
      null,
      null,
      this.log,
      this.persistCrdtState,
      initialState
    );
    this.activeSession = session;
    await session.openOffline();
    this.pendingOfflineUpdates.delete(entry.id);
  }
  detachActiveSession() {
    if (!this.activeSession) {
      return null;
    }
    const pendingOfflineUpdate = this.activeSession.capturePendingOfflineUpdate();
    if (pendingOfflineUpdate) {
      this.pendingOfflineUpdates.set(this.activeSession.entry.id, pendingOfflineUpdate);
      this.persistCrdtState(this.activeSession.entry.id, this.activeSession.file.path, pendingOfflineUpdate);
    }
    return pendingOfflineUpdate;
  }
  async runSessionOperation(operation) {
    const next = this.sessionOperationQueue.then(operation, operation);
    this.sessionOperationQueue = next.then(
      () => void 0,
      () => void 0
    );
    return next;
  }
};
var BoundCrdtSession = class {
  constructor(app, file, entry, workspaceId, currentUser, presenceColor, docId, wsUrl, token, log, persistCrdtState, initialState = null) {
    this.yDocument = new Doc();
    this.provider = null;
    this.status = "idle";
    this.applyingRemoteText = false;
    this.lastLocalSelectionKey = null;
    this.remoteObserverBound = false;
    this.persistenceObserverBound = false;
    this.persistHandle = null;
    this.app = app;
    this.file = file;
    this.entry = entry;
    this.workspaceId = workspaceId;
    this.currentUser = currentUser;
    this.docId = docId;
    this.wsUrl = wsUrl;
    this.token = token;
    this.log = log;
    this.persistCrdtState = persistCrdtState;
    this.awarenessUser = buildAwarenessUserPayload(currentUser, presenceColor);
    this.awarenessViewer = buildAwarenessViewerPayload(workspaceId, entry.id);
    this.yText = this.yDocument.getText("content");
    if (initialState && initialState.byteLength > 0) {
      applyUpdate(this.yDocument, initialState, "rolay-local-bootstrap");
      this.log(`Loaded local CRDT bootstrap state for ${this.file.path}.`);
    }
  }
  async open() {
    if (!this.wsUrl || !this.token) {
      throw new Error(`CRDT bootstrap is missing for ${this.file.path}.`);
    }
    this.status = "connecting";
    this.bindRemoteObserver();
    this.bindPersistenceObserver();
    this.provider = new HocuspocusProvider({
      url: this.wsUrl,
      name: this.docId,
      document: this.yDocument,
      token: this.token,
      onOpen: () => {
        this.log(`CRDT websocket opened for ${this.file.path}.`);
      },
      onStatus: ({ status }) => {
        if (status === "connecting" || status === "connected") {
          if (this.status !== "synced") {
            this.status = "connecting";
          }
        }
        this.log(`CRDT provider status for ${this.file.path}: ${status}.`);
      },
      onSynced: () => {
        this.status = "synced";
        this.syncEditorContext();
      },
      onAwarenessChange: () => {
        this.renderRemotePresence();
      },
      onDisconnect: () => {
        if (this.status !== "offline") {
          this.status = "connecting";
        }
        this.log(`CRDT websocket disconnected for ${this.file.path}.`);
        this.clearRemotePresence();
      },
      onAuthenticationFailed: ({ reason }) => {
        this.log(`CRDT auth failed for ${this.file.path}: ${reason}`);
        this.clearLocalPresence();
        this.clearRemotePresence();
        this.provider?.disconnect();
        this.status = "offline";
        new import_obsidian5.Notice(`Rolay CRDT auth failed for ${this.file.path}.`);
      }
    });
    this.publishLocalUserPresence();
    this.publishLocalViewerPresence();
  }
  async openOffline() {
    this.bindRemoteObserver();
    this.bindPersistenceObserver();
    this.status = "offline";
    this.syncEditorContext();
  }
  matches(file, entry) {
    return this.file.path === file.path && this.entry.id === entry.id;
  }
  isOffline() {
    return this.status === "offline";
  }
  clearPresenceOnly() {
    this.clearLocalPresence();
    this.clearRemotePresence();
  }
  updateAwarenessUser(user, presenceColor) {
    this.awarenessUser = buildAwarenessUserPayload(user, presenceColor);
    this.publishLocalUserPresence();
    this.renderRemotePresence();
  }
  syncEditorContext() {
    this.seedOrSyncEditor();
    this.updateLocalPresenceFromActiveView();
    this.renderRemotePresence();
  }
  pushLocalText(nextText) {
    if (this.status !== "synced" && this.status !== "offline" || this.applyingRemoteText) {
      return;
    }
    const currentText = this.yText.toString();
    if (currentText === nextText) {
      return;
    }
    const patch = diffText(currentText, nextText);
    this.yDocument.transact(() => {
      if (patch.deleteCount > 0) {
        this.yText.delete(patch.start, patch.deleteCount);
      }
      if (patch.insertText.length > 0) {
        this.yText.insert(patch.start, patch.insertText);
      }
    }, LOCAL_EDITOR_ORIGIN);
  }
  async goOffline() {
    if (this.status === "offline") {
      return;
    }
    this.clearLocalPresence();
    this.clearRemotePresence();
    this.provider?.disconnect();
    this.status = "offline";
    this.log(`CRDT session moved offline for ${this.file.path}.`);
  }
  updateLocalPresence(editor, focused) {
    if (!this.provider || this.status === "offline") {
      return;
    }
    this.publishLocalUserPresence();
    if (!focused) {
      if (this.lastLocalSelectionKey === null) {
        return;
      }
      this.provider.setAwarenessField("selection", null);
      this.lastLocalSelectionKey = null;
      return;
    }
    const selection = getPrimaryEditorSelection(editor);
    const selectionKey = `${selection.anchor}:${selection.head}`;
    if (selectionKey === this.lastLocalSelectionKey) {
      return;
    }
    this.provider.setAwarenessField("selection", selection);
    this.lastLocalSelectionKey = selectionKey;
  }
  getState() {
    return {
      entryId: this.entry.id,
      filePath: this.file.path,
      docId: this.docId,
      status: this.status
    };
  }
  getLocalNotePresenceViewer() {
    if (this.status === "idle" || this.status === "offline") {
      return null;
    }
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian5.MarkdownView);
    if (!activeView?.file || activeView.file.path !== this.file.path) {
      return null;
    }
    return {
      presenceId: `presence:${this.workspaceId}:${this.entry.id}:${this.yDocument.clientID}`,
      workspaceId: this.workspaceId,
      entryId: this.entry.id,
      userId: this.awarenessUser.userId,
      displayName: this.awarenessUser.displayName,
      color: this.awarenessUser.color,
      hasSelection: this.hasLocalTextSelection()
    };
  }
  async destroy() {
    this.clearLocalPresence();
    this.clearRemotePresence();
    this.flushPersistedState();
    this.provider?.destroy();
    this.provider = null;
    this.yDocument.destroy();
    this.status = "idle";
  }
  capturePendingOfflineUpdate() {
    if (this.status !== "offline") {
      return null;
    }
    return encodeStateAsUpdate(this.yDocument);
  }
  bindRemoteObserver() {
    if (this.remoteObserverBound) {
      return;
    }
    this.remoteObserverBound = true;
    this.yText.observe((_event, transaction) => {
      if (transaction.origin === LOCAL_EDITOR_ORIGIN) {
        return;
      }
      this.syncRemoteIntoOpenEditors();
    });
  }
  bindPersistenceObserver() {
    if (this.persistenceObserverBound) {
      return;
    }
    this.persistenceObserverBound = true;
    this.yDocument.on("update", () => {
      this.schedulePersistedState();
    });
  }
  syncRemoteIntoOpenEditors() {
    const views = getMarkdownViewsForFile(this.app, this.file.path);
    if (views.length === 0) {
      return;
    }
    const remoteText = this.yText.toString();
    this.applyingRemoteText = true;
    try {
      for (const view of views) {
        const currentText = view.editor.getValue();
        if (currentText === remoteText) {
          continue;
        }
        applyTextPatchToEditor(
          view.editor,
          currentText,
          remoteText,
          getCodeMirrorEditorView(view.editor)
        );
      }
    } finally {
      this.applyingRemoteText = false;
    }
  }
  seedOrSyncEditor() {
    const views = getMarkdownViewsForFile(this.app, this.file.path);
    if (views.length === 0) {
      return;
    }
    const remoteText = this.yText.toString();
    if (!remoteText) {
      for (const view of views) {
        const currentText = view.editor.getValue();
        if (!currentText) {
          continue;
        }
        this.log(`Seeding empty CRDT doc from local editor content for ${this.file.path}.`);
        this.pushLocalText(currentText);
        return;
      }
    }
    this.syncRemoteIntoOpenEditors();
  }
  publishLocalUserPresence() {
    this.provider?.setAwarenessField("user", this.awarenessUser);
  }
  publishLocalViewerPresence() {
    this.provider?.setAwarenessField("viewer", this.awarenessViewer);
  }
  clearLocalSelectionPresence() {
    if (!this.provider) {
      return;
    }
    this.provider.setAwarenessField("selection", null);
    this.lastLocalSelectionKey = null;
  }
  clearLocalPresence() {
    if (!this.provider) {
      return;
    }
    this.provider.setAwarenessField("viewer", null);
    this.clearLocalSelectionPresence();
  }
  hasLocalTextSelection() {
    if (!this.lastLocalSelectionKey) {
      return false;
    }
    const [anchor, head] = this.lastLocalSelectionKey.split(":").map((part) => Number(part));
    return Number.isFinite(anchor) && Number.isFinite(head) && anchor !== head;
  }
  schedulePersistedState() {
    if (this.persistHandle !== null) {
      window.clearTimeout(this.persistHandle);
    }
    this.persistHandle = window.setTimeout(() => {
      this.persistHandle = null;
      this.flushPersistedState();
    }, 300);
  }
  flushPersistedState() {
    if (this.persistHandle !== null) {
      window.clearTimeout(this.persistHandle);
      this.persistHandle = null;
    }
    this.persistCrdtState(this.entry.id, this.file.path, encodeStateAsUpdate(this.yDocument));
  }
  updateLocalPresenceFromActiveView() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian5.MarkdownView);
    if (!view?.file || view.file.path !== this.file.path) {
      this.clearLocalSelectionPresence();
      return;
    }
    const editorView = getCodeMirrorEditorView(view.editor);
    if (!editorView) {
      this.clearLocalSelectionPresence();
      return;
    }
    this.updateLocalPresence(view.editor, editorView.hasFocus);
  }
  renderRemotePresence() {
    const remotePresence = this.getRemotePresence();
    for (const editorView of getMarkdownEditorViewsForFile(this.app, this.file.path)) {
      setRemotePresenceDecorations(editorView, remotePresence);
    }
  }
  clearRemotePresence() {
    for (const editorView of getMarkdownEditorViewsForFile(this.app, this.file.path)) {
      setRemotePresenceDecorations(editorView, []);
    }
  }
  getRemotePresence() {
    const awareness = this.provider?.awareness;
    if (!awareness) {
      return [];
    }
    const remotePresence = [];
    for (const [clientId, state] of awareness.getStates()) {
      if (clientId === this.yDocument.clientID) {
        continue;
      }
      const presence = parseRemotePresenceState(clientId, state);
      if (presence) {
        remotePresence.push(presence);
      }
    }
    return remotePresence;
  }
};
function buildAwarenessUserPayload(user, presenceColor) {
  return {
    userId: user.id,
    displayName: user.displayName || user.username,
    color: presenceColor || buildPresenceColor(user.id)
  };
}
function buildAwarenessViewerPayload(workspaceId, entryId) {
  return {
    workspaceId,
    entryId,
    active: true
  };
}
function buildPresenceColor(seed) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(index) | 0;
  }
  const hue = Math.abs(hash) % 360;
  return hslToHex(hue, 72, 56);
}
function hslToHex(hue, saturationPercent, lightnessPercent) {
  const saturation = saturationPercent / 100;
  const lightness = lightnessPercent / 100;
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const scaledHue = hue / 60;
  const x = chroma * (1 - Math.abs(scaledHue % 2 - 1));
  let red = 0;
  let green = 0;
  let blue = 0;
  if (scaledHue >= 0 && scaledHue < 1) {
    red = chroma;
    green = x;
  } else if (scaledHue < 2) {
    red = x;
    green = chroma;
  } else if (scaledHue < 3) {
    green = chroma;
    blue = x;
  } else if (scaledHue < 4) {
    green = x;
    blue = chroma;
  } else if (scaledHue < 5) {
    red = x;
    blue = chroma;
  } else {
    red = chroma;
    blue = x;
  }
  const match2 = lightness - chroma / 2;
  const toHex = (value) => {
    const normalized = Math.max(0, Math.min(255, Math.round((value + match2) * 255)));
    return normalized.toString(16).padStart(2, "0");
  };
  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}
function getPrimaryEditorSelection(editor) {
  return {
    anchor: editor.posToOffset(editor.getCursor("anchor")),
    head: editor.posToOffset(editor.getCursor("head"))
  };
}
function parseRemotePresenceState(clientId, state) {
  const user = isRecord(state.user) ? state.user : null;
  const selection = isRecord(state.selection) ? state.selection : null;
  if (!user || !selection) {
    return null;
  }
  const userId = typeof user.userId === "string" ? user.userId : "";
  const displayName = typeof user.displayName === "string" ? user.displayName : userId;
  const color = typeof user.color === "string" && user.color ? user.color : buildPresenceColor(userId || String(clientId));
  const anchor = typeof selection.anchor === "number" ? selection.anchor : Number.NaN;
  const head = typeof selection.head === "number" ? selection.head : Number.NaN;
  if (!userId || !Number.isFinite(anchor) || !Number.isFinite(head)) {
    return null;
  }
  return {
    clientId,
    userId,
    displayName: displayName || userId,
    color,
    selection: {
      anchor,
      head
    }
  };
}
function isRecord(value) {
  return Boolean(value) && typeof value === "object";
}
function createCrdtTokenSupplier(apiClient, entryId, initialToken) {
  let nextToken = initialToken;
  return async () => {
    if (nextToken) {
      const token = nextToken;
      nextToken = null;
      return token;
    }
    const bootstrap = await apiClient.createCrdtToken(entryId);
    return bootstrap.token;
  };
}
async function mergeRemoteMarkdownState(options) {
  if (options.localState.byteLength === 0) {
    return;
  }
  const yDocument = new Doc();
  applyUpdate(yDocument, options.localState, "rolay-import-bootstrap");
  await new Promise((resolve, reject) => {
    let settled = false;
    let provider = null;
    const settle = (callback) => {
      if (settled) {
        return;
      }
      settled = true;
      timeoutHandle && window.clearTimeout(timeoutHandle);
      try {
        callback();
      } finally {
        provider?.destroy();
        yDocument.destroy();
      }
    };
    const timeoutHandle = window.setTimeout(() => {
      settle(() => {
        reject(new Error(`Timed out while seeding remote markdown for ${options.contextLabel}.`));
      });
    }, 15e3);
    provider = new HocuspocusProvider({
      url: options.wsUrl,
      name: options.docId,
      document: yDocument,
      token: options.token,
      onSynced: () => {
        window.setTimeout(() => {
          settle(() => {
            options.log(`Merged local markdown state into remote CRDT doc for ${options.contextLabel}.`);
            resolve();
          });
        }, 500);
      },
      onAuthenticationFailed: () => {
        settle(() => {
          reject(new Error(`CRDT auth failed while seeding ${options.contextLabel}.`));
        });
      }
    });
  });
}
function createMarkdownTextState(text2) {
  const yDocument = new Doc();
  try {
    if (text2) {
      yDocument.getText("content").insert(0, text2);
    }
    return encodeStateAsUpdate(yDocument);
  } finally {
    yDocument.destroy();
  }
}

// src/settings/data.ts
var import_obsidian6 = require("obsidian");

// src/utils/sha256.ts
async function sha256Hash(data) {
  const bytes = data instanceof Uint8Array ? Uint8Array.from(data) : new Uint8Array(data);
  if (globalThis.crypto?.subtle) {
    const digest = await globalThis.crypto.subtle.digest("SHA-256", bytes);
    return normalizeSha256Hash(bytesToBase64(new Uint8Array(digest))) ?? "";
  }
  const nodeRequire = getNodeRequire2();
  if (nodeRequire) {
    const { createHash } = nodeRequire("node:crypto");
    const hash = createHash("sha256");
    hash.update(bytes);
    const digest = hash.digest("base64");
    return normalizeSha256Hash(typeof digest === "string" ? digest : bytesToBase64(digest)) ?? "";
  }
  throw new Error("No SHA-256 implementation is available in this environment.");
}
function normalizeSha256Hash(hash) {
  if (typeof hash !== "string") {
    return null;
  }
  const trimmed = hash.trim();
  if (!trimmed) {
    return null;
  }
  const digest = trimmed.replace(/^sha256:/i, "");
  if (!digest) {
    return null;
  }
  const canonicalBase64 = canonicalizeDigestToBase64(digest);
  if (canonicalBase64) {
    return `sha256:${canonicalBase64}`;
  }
  return `sha256:${digest}`;
}
function getNodeRequire2() {
  const candidate = globalThis.require ?? globalThis.window?.require;
  if (typeof candidate === "function") {
    return candidate;
  }
  try {
    return Function("return typeof require === 'function' ? require : undefined;")() ?? null;
  } catch {
    return null;
  }
}
function canonicalizeDigestToBase64(digest) {
  const bytes = decodeDigestToBytes(digest);
  if (!bytes || bytes.length !== 32) {
    return null;
  }
  return bytesToBase64(bytes);
}
function decodeDigestToBytes(digest) {
  if (/^[0-9a-f]{64}$/i.test(digest)) {
    return decodeHexDigest(digest);
  }
  return decodeBase64Digest(digest);
}
function decodeHexDigest(digest) {
  if (!/^[0-9a-f]{64}$/i.test(digest)) {
    return null;
  }
  const bytes = new Uint8Array(32);
  for (let index = 0; index < 32; index += 1) {
    const offset = index * 2;
    bytes[index] = Number.parseInt(digest.slice(offset, offset + 2), 16);
  }
  return bytes;
}
function decodeBase64Digest(digest) {
  const paddedDigest = padBase64(digest.trim());
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(paddedDigest)) {
    return null;
  }
  const nodeRequire = getNodeRequire2();
  if (nodeRequire) {
    try {
      const { Buffer: Buffer2 } = nodeRequire("node:buffer");
      return Uint8Array.from(Buffer2.from(paddedDigest, "base64"));
    } catch {
      return null;
    }
  }
  if (typeof globalThis.atob === "function") {
    try {
      const decoded = globalThis.atob(paddedDigest);
      const bytes = new Uint8Array(decoded.length);
      for (let index = 0; index < decoded.length; index += 1) {
        bytes[index] = decoded.charCodeAt(index);
      }
      return bytes;
    } catch {
      return null;
    }
  }
  return null;
}
function padBase64(value) {
  const remainder = value.length % 4;
  if (remainder === 0) {
    return value;
  }
  return value.padEnd(value.length + (4 - remainder), "=");
}
function bytesToBase64(bytes) {
  const nodeRequire = getNodeRequire2();
  if (nodeRequire) {
    const { Buffer: Buffer2 } = nodeRequire("node:buffer");
    return Buffer2.from(bytes).toString("base64");
  }
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  if (typeof globalThis.btoa === "function") {
    return globalThis.btoa(binary);
  }
  throw new Error("No base64 encoder is available in this environment.");
}

// src/settings/data.ts
var ROLAY_SERVER_URL = "http://46.16.36.87:3000";
var ROLAY_DEVICE_NAME = import_obsidian6.Platform.isMobile ? "Obsidian Mobile" : "Obsidian Desktop";
var ROLAY_AUTO_CONNECT = true;
var DEFAULT_SETTINGS = {
  serverUrl: ROLAY_SERVER_URL,
  username: "",
  password: "",
  presenceColor: "",
  syncRoot: "",
  deviceName: ROLAY_DEVICE_NAME,
  autoConnect: ROLAY_AUTO_CONNECT,
  roomBindings: {}
};
function normalizeServerUrl(serverUrl) {
  const trimmed = serverUrl.trim().replace(/\/+$/, "");
  if (!trimmed) {
    return "";
  }
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  return `http://${trimmed}`;
}
function createDefaultPluginData() {
  return {
    settings: { ...DEFAULT_SETTINGS, roomBindings: {} },
    session: null,
    sync: {
      rooms: {}
    },
    crdtCache: {
      entries: {}
    },
    binaryCache: {
      entries: {}
    },
    pendingMarkdownCreates: {},
    pendingMarkdownMerges: {},
    pendingBinaryWrites: {},
    binaryTransfers: {},
    deviceId: createDeviceId(),
    logs: []
  };
}
function mergePluginData(rawData) {
  const defaults = createDefaultPluginData();
  const rawSession = rawData?.session ?? null;
  const rawSettings = rawData?.settings ?? {};
  const normalizedSettings = {
    ...defaults.settings,
    ...rawSettings,
    serverUrl: ROLAY_SERVER_URL,
    presenceColor: normalizePresenceColor(rawSettings.presenceColor),
    syncRoot: normalizeSyncRootSetting(rawSettings.syncRoot ?? defaults.settings.syncRoot),
    deviceName: ROLAY_DEVICE_NAME,
    autoConnect: ROLAY_AUTO_CONNECT,
    roomBindings: normalizeRoomBindings(rawSettings)
  };
  const hasSessionTokens = Boolean(
    rawSession?.accessToken?.trim() || rawSession?.refreshToken?.trim()
  );
  const normalizedSession = rawSession && hasSessionTokens ? {
    ...rawSession,
    accessToken: typeof rawSession.accessToken === "string" ? rawSession.accessToken : "",
    refreshToken: typeof rawSession.refreshToken === "string" ? rawSession.refreshToken : "",
    user: normalizeUser(rawSession.user)
  } : defaults.session;
  return {
    ...defaults,
    ...rawData,
    settings: normalizedSettings,
    session: normalizedSession,
    sync: {
      rooms: normalizeRoomSyncMap(rawData?.sync)
    },
    crdtCache: normalizeCrdtCacheState(rawData?.crdtCache),
    binaryCache: normalizeBinaryCacheState(rawData?.binaryCache),
    pendingMarkdownCreates: normalizePendingMarkdownCreates(rawData?.pendingMarkdownCreates),
    pendingMarkdownMerges: normalizePendingMarkdownMerges(rawData?.pendingMarkdownMerges),
    pendingBinaryWrites: normalizePendingBinaryWrites(rawData?.pendingBinaryWrites),
    binaryTransfers: normalizeBinaryTransfers(rawData?.binaryTransfers),
    deviceId: rawData?.deviceId ?? defaults.deviceId,
    logs: Array.isArray(rawData?.logs) ? rawData.logs.slice(-100) : defaults.logs
  };
}
function getRoomSyncState(sync, roomId) {
  if (!roomId) {
    return {
      lastCursor: null,
      lastSnapshotAt: null
    };
  }
  return sync.rooms[roomId] ?? {
    lastCursor: null,
    lastSnapshotAt: null
  };
}
function getRoomBindingSettings(settings, roomId) {
  return settings.roomBindings[roomId] ?? null;
}
function normalizeRoomBindings(rawSettings) {
  const normalized = {};
  const rawBindings = rawSettings.roomBindings;
  if (rawBindings && typeof rawBindings === "object") {
    for (const [roomId, binding] of Object.entries(rawBindings)) {
      const rawFolderName = (binding.folderName ?? binding.localFolderName ?? "").trim();
      const folderName = rawFolderName === roomId ? "" : rawFolderName;
      normalized[roomId] = {
        folderName,
        downloaded: Boolean(binding.downloaded)
      };
    }
  }
  const legacyActiveRoomId = (rawSettings.activeRoomId ?? rawSettings.workspaceId ?? "").trim();
  if (legacyActiveRoomId && !(legacyActiveRoomId in normalized)) {
    normalized[legacyActiveRoomId] = {
      folderName: "",
      downloaded: true
    };
  }
  return normalized;
}
function normalizeRoomSyncMap(rawSync) {
  const rooms = {};
  const rawRooms = rawSync?.rooms;
  if (rawRooms && typeof rawRooms === "object") {
    for (const [roomId, rawState] of Object.entries(rawRooms)) {
      rooms[roomId] = normalizeRoomSyncState(rawState);
    }
  }
  return rooms;
}
function normalizeRoomSyncState(rawState) {
  if (!rawState || typeof rawState !== "object") {
    return {
      lastCursor: null,
      lastSnapshotAt: null
    };
  }
  const candidate = rawState;
  return {
    lastCursor: typeof candidate.lastCursor === "number" ? candidate.lastCursor : null,
    lastSnapshotAt: typeof candidate.lastSnapshotAt === "string" ? candidate.lastSnapshotAt : null
  };
}
function normalizeCrdtCacheState(rawCache) {
  if (!rawCache || typeof rawCache !== "object") {
    return {
      entries: {}
    };
  }
  const rawEntries = rawCache.entries;
  if (!rawEntries || typeof rawEntries !== "object") {
    return {
      entries: {}
    };
  }
  const entries = {};
  for (const [entryId, rawEntry] of Object.entries(rawEntries)) {
    if (!rawEntry || typeof rawEntry !== "object") {
      continue;
    }
    const candidate = rawEntry;
    if (typeof candidate.encodedState !== "string" || !candidate.encodedState) {
      continue;
    }
    entries[entryId] = {
      encodedState: candidate.encodedState,
      filePath: typeof candidate.filePath === "string" ? candidate.filePath : "",
      updatedAt: typeof candidate.updatedAt === "string" ? candidate.updatedAt : (/* @__PURE__ */ new Date(0)).toISOString()
    };
  }
  return { entries };
}
function normalizePendingMarkdownCreates(rawPendingCreates) {
  if (!rawPendingCreates || typeof rawPendingCreates !== "object") {
    return {};
  }
  const entries = {};
  for (const [rawLocalPath, rawPendingCreate] of Object.entries(rawPendingCreates)) {
    if (!rawPendingCreate || typeof rawPendingCreate !== "object") {
      continue;
    }
    const candidate = rawPendingCreate;
    const localPath = normalizeStoredPath(candidate.localPath ?? rawLocalPath);
    const serverPath = normalizeStoredPath(candidate.serverPath ?? "");
    const workspaceId = typeof candidate.workspaceId === "string" ? candidate.workspaceId.trim() : "";
    if (!localPath || !serverPath || !workspaceId) {
      continue;
    }
    entries[localPath] = {
      workspaceId,
      localPath,
      serverPath,
      createdAt: typeof candidate.createdAt === "string" ? candidate.createdAt : (/* @__PURE__ */ new Date()).toISOString(),
      lastAttemptAt: typeof candidate.lastAttemptAt === "string" ? candidate.lastAttemptAt : null,
      lastError: typeof candidate.lastError === "string" ? candidate.lastError : null
    };
  }
  return entries;
}
function normalizePendingMarkdownMerges(rawPendingMerges) {
  if (!rawPendingMerges || typeof rawPendingMerges !== "object") {
    return {};
  }
  const entries = {};
  for (const [rawEntryId, rawPendingMerge] of Object.entries(rawPendingMerges)) {
    if (!rawPendingMerge || typeof rawPendingMerge !== "object") {
      continue;
    }
    const candidate = rawPendingMerge;
    const entryId = typeof candidate.entryId === "string" ? candidate.entryId.trim() : rawEntryId.trim();
    const localPath = normalizeStoredPath(candidate.localPath ?? "");
    const filePath = normalizeStoredPath(candidate.filePath ?? "");
    const workspaceId = typeof candidate.workspaceId === "string" ? candidate.workspaceId.trim() : "";
    if (!entryId || !localPath || !filePath || !workspaceId) {
      continue;
    }
    entries[entryId] = {
      workspaceId,
      entryId,
      localPath,
      filePath,
      createdAt: typeof candidate.createdAt === "string" ? candidate.createdAt : (/* @__PURE__ */ new Date()).toISOString(),
      lastAttemptAt: typeof candidate.lastAttemptAt === "string" ? candidate.lastAttemptAt : null,
      lastError: typeof candidate.lastError === "string" ? candidate.lastError : null
    };
  }
  return entries;
}
function normalizeBinaryCacheState(rawCache) {
  if (!rawCache || typeof rawCache !== "object") {
    return {
      entries: {}
    };
  }
  const rawEntries = rawCache.entries;
  if (!rawEntries || typeof rawEntries !== "object") {
    return {
      entries: {}
    };
  }
  const entries = {};
  for (const [entryId, rawEntry] of Object.entries(rawEntries)) {
    if (!rawEntry || typeof rawEntry !== "object") {
      continue;
    }
    const candidate = rawEntry;
    const normalizedHash = normalizeSha256Hash(candidate.hash);
    if (!normalizedHash) {
      continue;
    }
    entries[entryId] = {
      hash: normalizedHash,
      sizeBytes: typeof candidate.sizeBytes === "number" && candidate.sizeBytes >= 0 ? candidate.sizeBytes : 0,
      mimeType: typeof candidate.mimeType === "string" && candidate.mimeType ? candidate.mimeType : "application/octet-stream",
      filePath: typeof candidate.filePath === "string" ? normalizeStoredPath(candidate.filePath) : "",
      updatedAt: typeof candidate.updatedAt === "string" ? candidate.updatedAt : (/* @__PURE__ */ new Date(0)).toISOString()
    };
  }
  return { entries };
}
function normalizePendingBinaryWrites(rawPendingWrites) {
  if (!rawPendingWrites || typeof rawPendingWrites !== "object") {
    return {};
  }
  const entries = {};
  for (const [rawLocalPath, rawPendingWrite] of Object.entries(rawPendingWrites)) {
    if (!rawPendingWrite || typeof rawPendingWrite !== "object") {
      continue;
    }
    const candidate = rawPendingWrite;
    const localPath = normalizeStoredPath(candidate.localPath ?? rawLocalPath);
    const serverPath = normalizeStoredPath(candidate.serverPath ?? "");
    const workspaceId = typeof candidate.workspaceId === "string" ? candidate.workspaceId.trim() : "";
    if (!localPath || !serverPath || !workspaceId) {
      continue;
    }
    entries[localPath] = {
      workspaceId,
      localPath,
      serverPath,
      entryId: typeof candidate.entryId === "string" && candidate.entryId.trim() ? candidate.entryId.trim() : null,
      createdAt: typeof candidate.createdAt === "string" ? candidate.createdAt : (/* @__PURE__ */ new Date()).toISOString(),
      lastAttemptAt: typeof candidate.lastAttemptAt === "string" ? candidate.lastAttemptAt : null,
      lastError: typeof candidate.lastError === "string" ? candidate.lastError : null
    };
  }
  return entries;
}
function normalizeBinaryTransfers(rawTransfers) {
  if (!rawTransfers || typeof rawTransfers !== "object") {
    return {};
  }
  const entries = {};
  for (const [rawLocalPath, rawTransfer] of Object.entries(rawTransfers)) {
    if (!rawTransfer || typeof rawTransfer !== "object") {
      continue;
    }
    const candidate = rawTransfer;
    const localPath = normalizeStoredPath(candidate.localPath ?? rawLocalPath);
    const serverPath = normalizeStoredPath(candidate.serverPath ?? "");
    const workspaceId = typeof candidate.workspaceId === "string" ? candidate.workspaceId.trim() : "";
    const kind = candidate.kind === "download" ? "download" : candidate.kind === "upload" ? "upload" : null;
    const status = normalizeBinaryTransferStatus(candidate.status);
    if (!localPath || !serverPath || !workspaceId || !kind || !status) {
      continue;
    }
    const normalizedHash = normalizeSha256Hash(candidate.hash) ?? null;
    entries[localPath] = {
      workspaceId,
      entryId: typeof candidate.entryId === "string" && candidate.entryId.trim() ? candidate.entryId.trim() : null,
      localPath,
      serverPath,
      kind,
      status,
      bytesTotal: typeof candidate.bytesTotal === "number" && candidate.bytesTotal >= 0 ? candidate.bytesTotal : 0,
      bytesDone: typeof candidate.bytesDone === "number" && candidate.bytesDone >= 0 ? candidate.bytesDone : 0,
      hash: normalizedHash,
      mimeType: typeof candidate.mimeType === "string" && candidate.mimeType.trim() ? candidate.mimeType.trim() : null,
      uploadId: typeof candidate.uploadId === "string" && candidate.uploadId.trim() ? candidate.uploadId.trim() : null,
      rangeSupported: Boolean(candidate.rangeSupported),
      createdAt: typeof candidate.createdAt === "string" ? candidate.createdAt : (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: typeof candidate.updatedAt === "string" ? candidate.updatedAt : (/* @__PURE__ */ new Date()).toISOString(),
      lastError: typeof candidate.lastError === "string" ? candidate.lastError : null
    };
  }
  return entries;
}
function normalizeBinaryTransferStatus(status) {
  switch (status) {
    case "preparing":
    case "uploading":
    case "canceling":
    case "downloading":
    case "committing":
    case "done":
    case "failed":
      return status;
    default:
      return null;
  }
}
function normalizeUser(user) {
  if (!user) {
    return null;
  }
  return {
    ...user,
    isAdmin: Boolean(user.isAdmin),
    globalRole: normalizeGlobalRole(user.globalRole)
  };
}
function normalizeGlobalRole(globalRole) {
  if (globalRole === "admin" || globalRole === "writer" || globalRole === "reader") {
    return globalRole;
  }
  return "reader";
}
function createDeviceId() {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }
  return `rolay-device-${Date.now()}`;
}
function normalizeStoredPath(path) {
  return path.trim().replace(/\\/g, "/");
}
function normalizePresenceColor(color) {
  if (typeof color !== "string") {
    return "";
  }
  const normalized = color.trim();
  const hexMatch = normalized.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
  if (hexMatch) {
    const hex = hexMatch[1];
    if (hex.length === 3) {
      return `#${hex.split("").map((part) => `${part}${part}`).join("").toLowerCase()}`;
    }
    return normalized.toLowerCase();
  }
  const rgbMatch = normalized.match(
    /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i
  );
  if (rgbMatch) {
    const channels = rgbMatch.slice(1).map((value) => Number.parseInt(value, 10));
    if (channels.every((channel) => channel >= 0 && channel <= 255)) {
      return `#${channels.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
    }
  }
  const hslMatch = normalized.match(
    /^hsl\(\s*(-?\d+(?:\.\d+)?)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/i
  );
  if (hslMatch) {
    const hue = Number.parseFloat(hslMatch[1]);
    const saturation = Number.parseInt(hslMatch[2], 10);
    const lightness = Number.parseInt(hslMatch[3], 10);
    if (saturation >= 0 && saturation <= 100 && lightness >= 0 && lightness <= 100) {
      return hslToHex2(hue, saturation, lightness);
    }
  }
  return "";
}
function normalizeSyncRootSetting(syncRoot) {
  if (typeof syncRoot !== "string") {
    return "";
  }
  const normalized = syncRoot.trim().replace(/\\/g, "/");
  if (!normalized || normalized === "/") {
    return "";
  }
  return normalized.replace(/^\/+|\/+$/g, "");
}
function hslToHex2(hue, saturationPercent, lightnessPercent) {
  const h = (hue % 360 + 360) % 360;
  const s = saturationPercent / 100;
  const l = lightnessPercent / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(h / 60 % 2 - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) {
    r = c;
    g = x;
  } else if (h < 120) {
    r = x;
    g = c;
  } else if (h < 180) {
    g = c;
    b = x;
  } else if (h < 240) {
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }
  const toHex = (channel) => Math.round((channel + m) * 255).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// src/settings/tab.ts
var import_obsidian8 = require("obsidian");

// src/ui/text-input-modal.ts
var import_obsidian7 = require("obsidian");
var TextInputModal = class extends import_obsidian7.Modal {
  constructor(app, options, resolve) {
    super(app);
    this.submitted = false;
    this.options = options;
    this.resolve = resolve;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h2", { text: this.options.title });
    if (this.options.description) {
      contentEl.createEl("p", { text: this.options.description });
    }
    new import_obsidian7.Setting(contentEl).setName(this.options.label).addText((text2) => {
      text2.setPlaceholder(this.options.placeholder ?? "").setValue(this.options.initialValue ?? "");
      this.inputEl = text2.inputEl;
      this.inputEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          this.submit();
        }
      });
    });
    const buttonRow = contentEl.createDiv({ cls: "rolay-modal-actions" });
    const cancelButton = buttonRow.createEl("button", { text: "Cancel" });
    const submitButton = buttonRow.createEl("button", {
      text: this.options.submitText,
      cls: "mod-cta"
    });
    cancelButton.addEventListener("click", () => this.close());
    submitButton.addEventListener("click", () => this.submit());
    window.setTimeout(() => this.inputEl?.focus(), 0);
  }
  onClose() {
    if (!this.submitted) {
      this.resolve(null);
    }
    this.contentEl.empty();
  }
  submit() {
    const value = this.inputEl?.value.trim() ?? "";
    if (!value) {
      this.inputEl?.focus();
      return;
    }
    this.submitted = true;
    this.resolve(value);
    this.close();
  }
};
function openTextInputModal(app, options) {
  return new Promise((resolve) => {
    new TextInputModal(app, options, resolve).open();
  });
}

// src/settings/tab.ts
var PAGE_SIZE = 3;
var RolaySettingTab = class extends import_obsidian8.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.activeView = "rooms";
    this.activeDetail = null;
    this.isVisible = false;
    this.renderHandle = null;
    this.lastRenderKey = null;
    this.resetScrollOnNextRender = false;
    this.listQueries = /* @__PURE__ */ new Map();
    this.listPages = /* @__PURE__ */ new Map();
    this.rolay = plugin;
  }
  display() {
    const wasVisible = this.isVisible;
    this.isVisible = true;
    if (!wasVisible) {
      void this.rolay.activateSettingsPanelRealtime();
    }
    this.render();
  }
  hide() {
    this.isVisible = false;
    this.rolay.deactivateSettingsPanelRealtime();
    if (this.renderHandle !== null) {
      window.clearTimeout(this.renderHandle);
      this.renderHandle = null;
    }
    super.hide();
  }
  requestRender() {
    if (!this.isVisible || this.renderHandle !== null) {
      return;
    }
    this.renderHandle = window.setTimeout(() => {
      this.renderHandle = null;
      if (!this.isVisible) {
        return;
      }
      if (this.hasFocusedTextInput()) {
        this.requestRender();
        return;
      }
      this.render();
    }, 120);
  }
  render() {
    const { containerEl } = this;
    const settings = this.rolay.getSettings();
    const status = this.rolay.getStatusSnapshot();
    const currentUser = this.rolay.getCurrentUser();
    const isAdmin = Boolean(currentUser?.isAdmin);
    const roomCards = this.rolay.getRoomCardStates();
    const scrollHost = this.getScrollHost();
    if (!currentUser && this.activeView === "rooms") {
      this.activeView = "account";
    }
    if (!isAdmin && this.activeView === "admin") {
      this.activeView = currentUser ? "rooms" : "account";
    }
    if (this.activeDetail && !roomCards.some((room) => room.room.workspace.id === this.activeDetail?.roomId)) {
      this.activeDetail = null;
      this.activeView = currentUser ? "rooms" : "account";
    }
    let renderKey = this.getRenderKey();
    const shouldRestoreScroll = !this.resetScrollOnNextRender && this.lastRenderKey === renderKey;
    const preservedScrollTop = shouldRestoreScroll ? scrollHost?.scrollTop ?? 0 : 0;
    containerEl.empty();
    const shell = containerEl.createDiv({ cls: "rolay-settings-shell" });
    this.renderHero(shell, currentUser);
    if (this.activeDetail) {
      const activeRoom = roomCards.find((room) => room.room.workspace.id === this.activeDetail?.roomId) ?? null;
      if (!activeRoom) {
        this.activeDetail = null;
        this.activeView = "rooms";
        renderKey = this.getRenderKey();
      } else if (this.activeDetail.mode === "admin-room") {
        this.renderAdminRoomDetailView(shell, activeRoom, currentUser);
        this.finishRender(scrollHost, renderKey, preservedScrollTop);
        return;
      } else {
        this.renderRoomDetailView(shell, activeRoom, currentUser);
        this.finishRender(scrollHost, renderKey, preservedScrollTop);
        return;
      }
    }
    this.renderTabSwitcher(shell, isAdmin);
    switch (this.activeView) {
      case "account":
        this.renderAccountView(shell, settings, currentUser);
        break;
      case "rooms":
        this.renderRoomsView(shell, currentUser, roomCards);
        break;
      case "admin":
        if (isAdmin) {
          this.renderAdminView(shell, currentUser);
          break;
        }
        this.activeView = "rooms";
        this.renderRoomsView(shell, currentUser, roomCards);
        renderKey = this.getRenderKey();
        break;
      case "general":
      default:
        this.renderGeneralView(shell, settings, status);
    }
    this.finishRender(scrollHost, renderKey, preservedScrollTop);
  }
  renderHero(containerEl, _currentUser) {
    const heroEl = containerEl.createDiv({ cls: "rolay-settings-hero" });
    heroEl.createEl("div", {
      cls: "rolay-settings-brand",
      text: "Rolay"
    });
  }
  renderTabSwitcher(containerEl, isAdmin) {
    const tabsEl = containerEl.createDiv({ cls: "rolay-settings-tabs" });
    if (this.rolay.getCurrentUser()) {
      this.createTabButton(tabsEl, "Rooms", "rooms");
    }
    this.createTabButton(tabsEl, "Account", "account");
    this.createTabButton(tabsEl, "General", "general");
    if (isAdmin) {
      this.createTabButton(tabsEl, "Admin", "admin");
    }
  }
  createTabButton(containerEl, label, view) {
    const button = containerEl.createEl("button", {
      cls: "rolay-settings-tab-button",
      text: label
    });
    if (this.activeView === view) {
      button.classList.add("mod-cta");
    }
    button.addEventListener("click", () => {
      if (this.activeView === view && this.activeDetail === null) {
        return;
      }
      this.resetScrollOnNextRender = true;
      this.activeDetail = null;
      this.activeView = view;
      this.render();
    });
  }
  renderAccountView(containerEl, settings, currentUser) {
    const grid = this.createGrid(containerEl);
    if (!currentUser) {
      const loginCard = this.createCard(grid, "Log In");
      this.createInputField(loginCard.body, {
        label: "Username",
        value: settings.username,
        placeholder: "username",
        onChange: async (value) => {
          await this.rolay.updateSettings({
            username: value.trim()
          });
        }
      });
      this.createInputField(loginCard.body, {
        label: "Password",
        type: "password",
        value: settings.password,
        placeholder: "password",
        onChange: async (value) => {
          await this.rolay.updateSettings({
            password: value
          });
        }
      });
      const actions = this.createActionRow(loginCard.body);
      this.createActionButton(actions, "Login", "mod-cta", async () => {
        await this.rolay.loginWithSettings();
        this.activeView = "rooms";
        this.resetScrollOnNextRender = true;
        await this.rolay.activateSettingsPanelRealtime();
        this.requestRender();
      });
      return;
    }
    const overviewCard = this.createCard(grid, "Account");
    const overviewBadges = overviewCard.body.createDiv({ cls: "rolay-settings-badges" });
    this.createBadge(overviewBadges, currentUser.isAdmin ? "Admin" : "User", currentUser.isAdmin ? "accent" : "muted");
    this.createBadge(overviewBadges, currentUser.globalRole, "ready");
    this.createInfoBlock(overviewCard.body, [
      ["Login", currentUser.username],
      ["Display name", currentUser.displayName || "not set"],
      ["Role", currentUser.isAdmin ? "admin" : "user"]
    ]);
    const overviewActions = this.createActionRow(overviewCard.body);
    this.createActionButton(overviewActions, "Logout", "mod-warning", async () => {
      await this.rolay.logout();
      new import_obsidian8.Notice("Rolay session cleared.");
      this.activeDetail = null;
      this.activeView = "account";
      this.resetScrollOnNextRender = true;
      this.rolay.deactivateSettingsPanelRealtime();
      this.requestRender();
    });
    const profileCard = this.createCard(grid, "Display Name", "Shown to collaborators in shared cursors and presence.");
    this.createInputField(profileCard.body, {
      value: this.rolay.getProfileDraftDisplayName(),
      placeholder: currentUser.displayName || "Display name",
      onChange: (value) => {
        this.rolay.setProfileDraftDisplayName(value);
      }
    });
    const profileActions = this.createActionRow(profileCard.body);
    this.createActionButton(profileActions, "Save", "mod-cta", async () => {
      await this.rolay.updateOwnDisplayName();
      this.requestRender();
    });
    const presenceCard = this.createCard(grid, "Cursor Color", "Used for your shared cursor and selection in markdown collaboration.");
    this.renderPresenceColorControls(presenceCard.body);
    const passwordDraft = this.rolay.getPasswordChangeDraft();
    const securityCard = this.createCard(grid, "Change Password");
    this.createInputField(securityCard.body, {
      label: "Current password",
      type: "password",
      value: passwordDraft.currentPassword,
      placeholder: "current password",
      onChange: (value) => {
        this.rolay.updatePasswordChangeDraft({
          currentPassword: value
        });
      }
    });
    this.createInputField(securityCard.body, {
      label: "New password",
      type: "password",
      value: passwordDraft.newPassword,
      placeholder: "new password",
      onChange: (value) => {
        this.rolay.updatePasswordChangeDraft({
          newPassword: value
        });
      }
    });
    this.createInputField(securityCard.body, {
      label: "Confirm new password",
      type: "password",
      value: passwordDraft.confirmPassword,
      placeholder: "repeat new password",
      onChange: (value) => {
        this.rolay.updatePasswordChangeDraft({
          confirmPassword: value
        });
      }
    });
    const securityActions = this.createActionRow(securityCard.body);
    this.createActionButton(securityActions, "Change password", "mod-cta", async () => {
      await this.rolay.changeOwnPassword();
      this.requestRender();
    });
  }
  renderGeneralView(containerEl, settings, status) {
    const grid = this.createGrid(containerEl);
    const rootCard = this.createCard(grid, "Root Folder", "Base vault folder under which installed room folders are created.");
    this.createInputField(rootCard.body, {
      value: settings.syncRoot,
      placeholder: "/",
      onChange: async (value) => {
        await this.rolay.updateSettings({
          syncRoot: value.trim() === "/" ? "" : value.trim()
        });
      }
    });
    const debugCard = this.createCard(grid, "Debug");
    const debugDetails = debugCard.body.createEl("details", { cls: "rolay-settings-details" });
    debugDetails.createEl("summary", {
      cls: "rolay-settings-details-summary",
      text: "Show runtime details"
    });
    const debugBody = debugDetails.createDiv({ cls: "rolay-settings-details-body" });
    this.createInfoBlock(debugBody, [
      ["Authenticated user", status.userLabel],
      ["Global role", status.globalRoleLabel],
      ["Admin mode", status.isAdmin ? "enabled" : "disabled"],
      ["Installed rooms", String(status.downloadedRoomCount)],
      ["Open streams", String(status.activeStreamCount)],
      ["Root folder", settings.syncRoot || "/"],
      ["Log file", status.persistentLogPath],
      ["CRDT session", status.crdtLabel]
    ]);
    debugBody.createEl("pre", {
      cls: "rolay-settings-log",
      text: status.recentLogs.length > 0 ? status.recentLogs.join("\n") : "No sync activity recorded yet."
    });
  }
  renderRoomsView(containerEl, currentUser, rooms) {
    const topGrid = this.createGrid(containerEl);
    if (!currentUser) {
      const signedOutCard = this.createCard(
        topGrid,
        "Rooms",
        "Sign in first to create rooms, join by invite, and manage room folders."
      );
      signedOutCard.body.createEl("div", {
        cls: "rolay-settings-empty-state",
        text: "Log into Rolay to view and configure rooms."
      });
      return;
    }
    const roomsCard = this.createCard(topGrid, "Rooms");
    this.renderRoomList(roomsCard.body, rooms);
    const joinRoomDraft = this.rolay.getJoinRoomDraft();
    const joinCard = this.createCard(topGrid, "Join by Invite");
    this.createInputField(joinCard.body, {
      value: joinRoomDraft.code,
      placeholder: "paste invite key",
      onChange: (value) => {
        this.rolay.updateJoinRoomDraft({
          code: value
        });
      }
    });
    const joinActions = this.createActionRow(joinCard.body);
    this.createActionButton(joinActions, "Join room", "", async () => {
      await this.rolay.joinRoomFromDraft();
      this.requestRender();
    });
    if (this.rolay.canCurrentUserCreateRooms()) {
      const createRoomDraft = this.rolay.getCreateRoomDraft();
      const createCard = this.createCard(topGrid, "Create Room");
      this.createInputField(createCard.body, {
        value: createRoomDraft.name,
        placeholder: "Physics Lab",
        onChange: (value) => {
          this.rolay.updateCreateRoomDraft({
            name: value
          });
        }
      });
      const createActions = this.createActionRow(createCard.body);
      this.createActionButton(createActions, "Create room", "mod-cta", async () => {
        await this.rolay.createRoomFromDraft();
        this.requestRender();
      });
    }
  }
  renderRoomList(containerEl, rooms) {
    if (rooms.length === 0) {
      containerEl.createEl("div", {
        cls: "rolay-settings-empty-state",
        text: "No rooms available."
      });
      return;
    }
    const listEl = containerEl.createDiv({ cls: "rolay-settings-list" });
    for (const room of rooms) {
      const itemEl = listEl.createDiv({ cls: "rolay-settings-list-item" });
      const titleWrap = itemEl.createDiv({ cls: "rolay-settings-list-title-wrap" });
      titleWrap.createDiv({
        cls: "rolay-settings-list-title",
        text: room.room.workspace.name
      });
      const actionsEl = itemEl.createDiv({ cls: "rolay-settings-list-actions" });
      if (room.downloaded) {
        const indicator = actionsEl.createSpan({
          cls: `rolay-settings-room-indicator ${room.streamStatus === "open" ? "rolay-settings-room-indicator-connected" : "rolay-settings-room-indicator-disconnected"}`
        });
        indicator.setAttribute("title", room.streamStatus === "open" ? "Connected" : "Disconnected");
      } else {
        const installButton = actionsEl.createEl("button", {
          cls: "rolay-settings-icon-button rolay-settings-install-button",
          attr: {
            "aria-label": `Install ${room.room.workspace.name}`,
            title: "Install folder"
          }
        });
        (0, import_obsidian8.setIcon)(installButton, "download");
        installButton.addEventListener("click", () => {
          void this.promptInstallOrRenameRoom(room);
        });
      }
      const actionButton = actionsEl.createEl("button", {
        cls: "rolay-settings-icon-button",
        attr: {
          "aria-label": `Open settings for ${room.room.workspace.name}`,
          title: "Room settings"
        }
      });
      (0, import_obsidian8.setIcon)(actionButton, "settings");
      actionButton.addEventListener("click", () => {
        this.openDetail("room", room.room.workspace.id);
      });
    }
  }
  renderRoomDetailView(containerEl, room, currentUser) {
    const pageTop = containerEl.createDiv({ cls: "rolay-settings-page-top" });
    const navRow = pageTop.createDiv({ cls: "rolay-settings-page-nav" });
    const backButton = navRow.createEl("button", {
      cls: "rolay-settings-icon-button rolay-settings-back-button",
      attr: {
        "aria-label": "Back to rooms",
        title: "Back to rooms"
      }
    });
    (0, import_obsidian8.setIcon)(backButton, "arrow-left");
    backButton.addEventListener("click", () => {
      this.resetScrollOnNextRender = true;
      this.activeDetail = null;
      this.activeView = "rooms";
      this.render();
    });
    const breadcrumb = navRow.createDiv({ cls: "rolay-settings-breadcrumb" });
    breadcrumb.createSpan({
      cls: "rolay-settings-page-nav-label",
      text: "Rooms"
    });
    breadcrumb.createSpan({
      cls: "rolay-settings-breadcrumb-separator",
      text: ">"
    });
    breadcrumb.createSpan({
      cls: "rolay-settings-breadcrumb-current",
      text: room.room.workspace.name
    });
    const badges = pageTop.createDiv({ cls: "rolay-settings-badges" });
    this.createBadge(badges, room.downloaded ? "Installed" : "Not installed", room.downloaded ? "ready" : "muted");
    this.createBadge(
      badges,
      room.downloaded ? room.streamStatus === "open" ? "Connected" : room.streamStatus === "stopped" ? "Disconnected" : "Connecting" : "Offline",
      !room.downloaded ? "muted" : room.streamStatus === "open" ? "ready" : room.streamStatus === "stopped" ? "muted" : "accent"
    );
    this.createBadge(
      badges,
      room.room.membershipRole === "owner" ? "Owner" : "Member",
      room.room.membershipRole === "owner" ? "accent" : "muted"
    );
    this.createBadge(
      badges,
      room.publication.enabled ? "Public" : "Private",
      room.publication.enabled ? "accent" : "muted"
    );
    const grid = this.createGrid(containerEl);
    const membersCard = this.createCard(grid, "Members");
    this.renderMembersPanel(membersCard.body, this.rolay.getRoomMembers(room.room.workspace.id), {
      listKey: `room-members:${room.room.workspace.id}`,
      searchEnabled: false,
      emptyState: "No members yet.",
      noResultsState: "No members on this page.",
      showGlobalRole: false,
      showUserId: false
    });
    const folderCard = this.createCard(
      grid,
      "Local Folder",
      room.downloaded ? "This only changes the local vault binding. It does not rename the room on the server." : "Install the room into a vault folder. Installation is blocked if that folder already exists."
    );
    this.createInfoBlock(folderCard.body, [
      ["Folder", room.downloaded ? room.folderName : "not installed"],
      ["Folder path", room.downloaded ? room.localRoot : "not installed"]
    ]);
    const folderActions = this.createActionRow(folderCard.body);
    this.createActionButton(
      folderActions,
      room.downloaded ? "Rename folder" : "Install folder",
      room.downloaded ? "" : "mod-cta",
      async () => {
        const nextFolderName = await openTextInputModal(this.app, {
          title: room.downloaded ? "Rename Rolay Room Folder" : "Install Rolay Room",
          label: "Local folder name",
          placeholder: room.room.workspace.name,
          initialValue: room.folderName || room.room.workspace.name,
          submitText: room.downloaded ? "Save" : "Install",
          description: room.downloaded ? "This only changes the local vault folder binding." : "Installation is blocked if the target folder already exists."
        });
        if (!nextFolderName) {
          return;
        }
        if (room.downloaded) {
          await this.rolay.renameInstalledRoomFolder(room.room.workspace.id, nextFolderName);
        } else {
          await this.rolay.installRoom(room.room.workspace.id, nextFolderName);
        }
        this.requestRender();
      }
    );
    if (room.downloaded) {
      if (room.streamStatus === "stopped") {
        this.createActionButton(folderActions, "Connect", "mod-cta", async () => {
          await this.rolay.connectRoom(room.room.workspace.id);
          this.requestRender();
        });
      } else {
        this.createActionButton(folderActions, "Disconnect", "", async () => {
          await this.rolay.disconnectRoom(room.room.workspace.id);
          this.requestRender();
        });
      }
    }
    this.renderPublicationCard(grid, {
      workspaceId: room.room.workspace.id,
      roomName: room.room.workspace.name,
      publication: room.publication,
      canManage: Boolean(currentUser?.isAdmin) || room.room.membershipRole === "owner"
    });
    if (room.room.membershipRole === "owner") {
      const inviteCard = this.createCard(grid, "Invites", "Owner-only controls for the current invite key.");
      const inviteEnabled = room.invite?.enabled ?? room.room.inviteEnabled;
      this.createInfoBlock(inviteCard.body, [
        ["Enabled", String(inviteEnabled)],
        ["Updated", this.formatDateTime(room.invite?.updatedAt) ?? "syncing..."]
      ]);
      this.addCopyableInfoLine(
        inviteCard.body,
        "Invite key",
        room.invite?.code ?? "syncing...",
        Boolean(room.invite?.code)
      );
      const inviteActions = this.createActionRow(inviteCard.body);
      this.createActionButton(inviteActions, inviteEnabled ? "Disable invite" : "Enable invite", "", async () => {
        await this.rolay.setRoomInviteEnabled(room.room.workspace.id, !inviteEnabled);
        this.requestRender();
      });
      this.createActionButton(inviteActions, "Regenerate", "mod-warning", async () => {
        await this.rolay.regenerateRoomInvite(room.room.workspace.id);
        this.requestRender();
      });
    }
    const debugCard = this.createCard(grid, "Debug");
    const debugDetails = debugCard.body.createEl("details", { cls: "rolay-settings-details" });
    debugDetails.createEl("summary", {
      cls: "rolay-settings-details-summary",
      text: "Show room details"
    });
    const debugBody = debugDetails.createDiv({ cls: "rolay-settings-details-body" });
    this.createInfoBlock(debugBody, [
      ["Room ID", room.room.workspace.id],
      ["Membership", room.room.membershipRole],
      ["Members", String(room.room.memberCount)],
      ["Connection", room.downloaded ? room.streamStatus : "not installed"],
      ["Markdown preload", room.crdtCacheLabel],
      ["File transfers", room.binaryTransferLabel],
      ["Last snapshot", room.lastSnapshotLabel],
      ["Last cursor", room.lastCursorLabel]
    ]);
  }
  renderAdminView(containerEl, currentUser) {
    const managedUserDraft = this.rolay.getManagedUserDraft();
    const adminRooms = this.rolay.getAdminRooms();
    const grid = this.createGrid(containerEl);
    const usersCard = this.createCard(grid, "Users");
    this.renderAdminUsersPanel(usersCard.body, this.rolay.getManagedUsers(), currentUser?.id ?? null);
    const createUserCard = this.createCard(grid, "Create User");
    this.createInputField(createUserCard.body, {
      label: "Username",
      value: managedUserDraft.username,
      placeholder: "student1",
      onChange: (value) => {
        this.rolay.updateManagedUserDraft({
          username: value.trim()
        });
      }
    });
    this.createInputField(createUserCard.body, {
      label: "Temporary password",
      type: "password",
      value: managedUserDraft.password,
      placeholder: "temporary-password",
      onChange: (value) => {
        this.rolay.updateManagedUserDraft({
          password: value
        });
      }
    });
    this.createInputField(createUserCard.body, {
      label: "Display name",
      value: managedUserDraft.displayName ?? "",
      placeholder: "Student One",
      onChange: (value) => {
        this.rolay.updateManagedUserDraft({
          displayName: value
        });
      }
    });
    this.createSelectField(createUserCard.body, {
      label: "Managed role",
      value: managedUserDraft.globalRole ?? "reader",
      options: [
        ["writer", "writer"],
        ["reader", "reader"]
      ],
      onChange: (value) => {
        this.rolay.updateManagedUserDraft({
          globalRole: value
        });
      }
    });
    const createUserActions = this.createActionRow(createUserCard.body);
    this.createActionButton(createUserActions, "Create user", "mod-cta", async () => {
      await this.rolay.createManagedUserFromDraft();
      this.requestRender();
    });
    const roomsCard = this.createCard(grid, "Rooms");
    this.renderAdminRoomsPanel(roomsCard.body, adminRooms);
  }
  renderAdminUsersPanel(containerEl, users, currentUserId) {
    const query = this.getListQuery("admin-users");
    const filteredUsers = users.filter((user) => {
      if (!query) {
        return true;
      }
      const haystack = `${user.username} ${user.displayName} ${user.globalRole}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
    this.renderSearchBar(containerEl, "admin-users", "Search users");
    const pagination = this.paginate(filteredUsers, this.getListPage("admin-users"));
    this.setListPage("admin-users", pagination.page);
    if (pagination.items.length === 0) {
      containerEl.createEl("div", {
        cls: "rolay-settings-empty-state",
        text: filteredUsers.length === 0 ? "No users match the current search." : "No managed users available."
      });
      return;
    }
    const listEl = containerEl.createDiv({ cls: "rolay-settings-list" });
    for (const user of pagination.items) {
      const itemEl = listEl.createDiv({ cls: "rolay-settings-list-item rolay-settings-list-item-stack" });
      const topRow = itemEl.createDiv({ cls: "rolay-settings-list-item-top" });
      topRow.createDiv({
        cls: "rolay-settings-list-title",
        text: `${user.displayName} (@${user.username})`
      });
      const badges = topRow.createDiv({ cls: "rolay-settings-badges" });
      this.createBadge(badges, user.globalRole, "ready");
      if (user.disabledAt) {
        this.createBadge(badges, "Disabled", "muted");
      } else if (user.id === currentUserId) {
        this.createBadge(badges, "Current session", "accent");
      }
      this.createInfoBlock(itemEl, [
        ["User ID", user.id],
        ["Created", this.formatDateTime(user.createdAt) ?? "unknown"],
        ["Disabled", this.formatDateTime(user.disabledAt) ?? "active"]
      ]);
      if (user.id !== currentUserId) {
        const actions = this.createActionRow(itemEl);
        this.createActionButton(actions, "Delete", "mod-warning", async () => {
          if (!window.confirm(`Delete managed user ${user.username}?`)) {
            return;
          }
          await this.rolay.deleteManagedUser(user.id);
          this.requestRender();
        });
      }
    }
    this.renderPaginationControls(containerEl, "admin-users", pagination, filteredUsers.length);
  }
  renderAdminRoomsPanel(containerEl, rooms) {
    const query = this.getListQuery("admin-rooms");
    const filteredRooms = rooms.filter((room) => {
      if (!query) {
        return true;
      }
      const haystack = `${room.workspace.name} ${room.workspace.id}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
    this.renderSearchBar(containerEl, "admin-rooms", "Search rooms");
    const pagination = this.paginate(filteredRooms, this.getListPage("admin-rooms"));
    this.setListPage("admin-rooms", pagination.page);
    if (pagination.items.length === 0) {
      containerEl.createEl("div", {
        cls: "rolay-settings-empty-state",
        text: filteredRooms.length === 0 ? "No rooms match the current search." : "No admin rooms available."
      });
      return;
    }
    const listEl = containerEl.createDiv({ cls: "rolay-settings-list" });
    for (const room of pagination.items) {
      const itemEl = listEl.createDiv({ cls: "rolay-settings-list-item" });
      const titleWrap = itemEl.createDiv({ cls: "rolay-settings-list-title-wrap" });
      titleWrap.createDiv({
        cls: "rolay-settings-list-title",
        text: room.workspace.name
      });
      titleWrap.createDiv({
        cls: "rolay-settings-list-meta",
        text: `${room.memberCount} members, ${room.ownerCount} owners`
      });
      const actionButton = itemEl.createEl("button", {
        cls: "rolay-settings-secondary-button",
        text: "Inspect"
      });
      actionButton.addEventListener("click", () => {
        this.openDetail("admin-room", room.workspace.id);
      });
    }
    this.renderPaginationControls(containerEl, "admin-rooms", pagination, filteredRooms.length);
  }
  renderMembersPanel(containerEl, members, options) {
    if (options.searchEnabled !== false && members.length > 0) {
      this.renderSearchBar(containerEl, options.listKey, "Search people");
    }
    const query = options.searchEnabled === false ? "" : this.getListQuery(options.listKey);
    const filteredMembers = members.filter((member) => {
      if (!query) {
        return true;
      }
      const haystack = `${member.user.username} ${member.user.displayName} ${member.user.globalRole} ${member.role}`.toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
    const pagination = this.paginate(filteredMembers, this.getListPage(options.listKey));
    this.setListPage(options.listKey, pagination.page);
    if (pagination.items.length === 0) {
      containerEl.createEl("div", {
        cls: "rolay-settings-empty-state",
        text: members.length === 0 ? options.emptyState ?? "No members yet." : options.noResultsState ?? "No people match the current search."
      });
      return;
    }
    const listEl = containerEl.createDiv({ cls: "rolay-settings-list" });
    for (const member of pagination.items) {
      const itemEl = listEl.createDiv({ cls: "rolay-settings-list-item rolay-settings-list-item-stack" });
      const topRow = itemEl.createDiv({ cls: "rolay-settings-list-item-top" });
      topRow.createDiv({
        cls: "rolay-settings-list-title",
        text: `${member.user.displayName} (@${member.user.username})`
      });
      const badges = topRow.createDiv({ cls: "rolay-settings-badges" });
      this.createBadge(badges, member.role, member.role === "owner" ? "accent" : "muted");
      if (options.showGlobalRole !== false) {
        this.createBadge(badges, member.user.globalRole, "ready");
      }
      const rows = [
        ["Joined", this.formatDateTime(member.joinedAt) ?? member.joinedAt]
      ];
      if (options.showUserId !== false) {
        rows.unshift(["User ID", member.user.id]);
      }
      this.createInfoBlock(itemEl, rows);
    }
    this.renderPaginationControls(containerEl, options.listKey, pagination, filteredMembers.length);
  }
  renderAdminRoomDetailView(containerEl, room, currentUser) {
    const adminRoom = this.rolay.getAdminRooms().find((entry) => entry.workspace.id === room.room.workspace.id) ?? null;
    const pageTop = containerEl.createDiv({ cls: "rolay-settings-page-top" });
    const navRow = pageTop.createDiv({ cls: "rolay-settings-page-nav" });
    const backButton = navRow.createEl("button", {
      cls: "rolay-settings-icon-button rolay-settings-back-button",
      attr: {
        "aria-label": "Back to admin",
        title: "Back to admin"
      }
    });
    (0, import_obsidian8.setIcon)(backButton, "arrow-left");
    backButton.addEventListener("click", () => {
      this.resetScrollOnNextRender = true;
      this.activeDetail = null;
      this.activeView = "admin";
      this.render();
    });
    const breadcrumb = navRow.createDiv({ cls: "rolay-settings-breadcrumb" });
    breadcrumb.createSpan({
      cls: "rolay-settings-page-nav-label",
      text: "Admin"
    });
    breadcrumb.createSpan({
      cls: "rolay-settings-breadcrumb-separator",
      text: ">"
    });
    breadcrumb.createSpan({
      cls: "rolay-settings-breadcrumb-current",
      text: room.room.workspace.name
    });
    const badges = pageTop.createDiv({ cls: "rolay-settings-badges" });
    this.createBadge(badges, `${adminRoom?.memberCount ?? room.room.memberCount} members`, "ready");
    if (adminRoom) {
      this.createBadge(badges, `${adminRoom.ownerCount} owners`, "accent");
    }
    this.createBadge(
      badges,
      adminRoom?.inviteEnabled ?? room.room.inviteEnabled ? "Invite on" : "Invite off",
      adminRoom?.inviteEnabled ?? room.room.inviteEnabled ? "ready" : "muted"
    );
    this.createBadge(
      badges,
      (adminRoom?.publication ?? room.publication).enabled ? "Public" : "Private",
      (adminRoom?.publication ?? room.publication).enabled ? "accent" : "muted"
    );
    const grid = this.createGrid(containerEl);
    this.renderPublicationCard(grid, {
      workspaceId: room.room.workspace.id,
      roomName: room.room.workspace.name,
      publication: adminRoom?.publication ?? room.publication,
      canManage: Boolean(currentUser?.isAdmin)
    });
    const membersCard = this.createCard(grid, "People");
    this.renderMembersPanel(membersCard.body, this.rolay.getRoomMembers(room.room.workspace.id), {
      listKey: `admin-members:${room.room.workspace.id}`
    });
    const memberFormCard = this.createCard(grid, "Add Member");
    const adminRoomDraft = this.rolay.getAdminRoomMemberDraft();
    this.createInputField(memberFormCard.body, {
      label: "Username",
      value: adminRoomDraft.username,
      placeholder: "student1",
      onChange: (value) => {
        this.rolay.updateAdminRoomMemberDraft({
          username: value.trim()
        });
      }
    });
    this.createSelectField(memberFormCard.body, {
      label: "Membership role",
      value: adminRoomDraft.role ?? "member",
      options: [
        ["member", "member"],
        ["owner", "owner"]
      ],
      onChange: (value) => {
        this.rolay.updateAdminRoomMemberDraft({
          role: value
        });
      }
    });
    const memberActions = this.createActionRow(memberFormCard.body);
    this.createActionButton(memberActions, "Add to room", "", async () => {
      this.rolay.setAdminSelectedRoomId(room.room.workspace.id);
      await this.rolay.addUserToSelectedAdminRoom();
      await this.rolay.loadRoomMembersForUi(room.room.workspace.id);
      this.requestRender();
    });
    const dangerCard = this.createCard(grid, "Danger Zone");
    dangerCard.body.createEl("div", {
      cls: "rolay-settings-empty-state",
      text: "Deleting the room does not delete local folders automatically."
    });
    const dangerActions = this.createActionRow(dangerCard.body);
    this.createActionButton(dangerActions, "Delete room", "mod-warning", async () => {
      if (!window.confirm(`Delete room ${room.room.workspace.name} (${room.room.workspace.id})?`)) {
        return;
      }
      await this.rolay.deleteAdminRoom(room.room.workspace.id);
      this.activeDetail = null;
      this.activeView = "admin";
      this.requestRender();
    });
    const debugCard = this.createCard(grid, "Debug");
    const debugDetails = debugCard.body.createEl("details", { cls: "rolay-settings-details" });
    debugDetails.createEl("summary", {
      cls: "rolay-settings-details-summary",
      text: "Show room details"
    });
    const debugBody = debugDetails.createDiv({ cls: "rolay-settings-details-body" });
    this.createInfoBlock(debugBody, [
      ["Room ID", room.room.workspace.id],
      ["Name", room.room.workspace.name],
      ["Invite", adminRoom?.inviteEnabled ?? room.room.inviteEnabled ? "enabled" : "disabled"],
      ["Publication", (adminRoom?.publication ?? room.publication).enabled ? "public" : "private"],
      ["Members", String(adminRoom?.memberCount ?? room.room.memberCount)],
      ["Owners", String(adminRoom?.ownerCount ?? 0)],
      ["Viewer account", currentUser?.username ?? "unknown"]
    ]);
  }
  renderPublicationCard(containerEl, options) {
    const publicationCard = this.createCard(
      containerEl,
      "Publication",
      "Public rooms are readable by anyone who has the public site address. The public site is read-only and does not use private editor sync."
    );
    this.createInfoBlock(publicationCard.body, [
      ["Status", options.publication.enabled ? "Public" : "Private"],
      ["Updated", this.formatDateTime(options.publication.updatedAt) ?? "never"]
    ]);
    if (options.canManage) {
      this.createSelectField(publicationCard.body, {
        label: "Visibility",
        value: options.publication.enabled ? "public" : "private",
        options: [
          ["private", "Private"],
          ["public", "Public"]
        ],
        onChange: async (value) => {
          await this.rolay.setRoomPublicationEnabled(options.workspaceId, value === "public");
          this.requestRender();
        }
      });
    }
    if (options.publication.enabled) {
      publicationCard.body.createDiv({
        cls: "rolay-settings-inline-note",
        text: "Anyone who knows the public site address can read this room without logging in. Public visitors cannot edit, upload, or send presence."
      });
      this.addCopyableInfoLine(
        publicationCard.body,
        "Public site",
        this.rolay.getPublicSiteUrl()
      );
      const actions = this.createActionRow(publicationCard.body);
      this.createActionButton(actions, "Open public site", "mod-cta", async () => {
        window.open(this.rolay.getPublicSiteUrl(), "_blank", "noopener,noreferrer");
      });
      this.createActionButton(actions, "Copy public link", "", async () => {
        await this.copyToClipboard(this.rolay.getPublicSiteUrl(), "Public site link copied.");
      });
      return;
    }
    publicationCard.body.createDiv({
      cls: "rolay-settings-empty-state",
      text: options.canManage ? `The room "${options.roomName}" is private. Turn on public access only if read-only open access is intended.` : `The room "${options.roomName}" is private.`
    });
  }
  createGrid(containerEl, twoColumns = false) {
    const grid = containerEl.createDiv({
      cls: twoColumns ? "rolay-settings-grid rolay-settings-grid-wide" : "rolay-settings-grid"
    });
    grid.createDiv({ cls: "rolay-settings-grid-column" });
    if (twoColumns) {
      grid.createDiv({ cls: "rolay-settings-grid-column" });
    }
    return grid;
  }
  createCard(containerEl, title, helpText) {
    const cardHost = this.resolveCardHost(containerEl);
    const card = cardHost.createDiv({ cls: "rolay-settings-card" });
    const header = card.createDiv({ cls: "rolay-settings-card-header" });
    const titleRow = header.createDiv({ cls: "rolay-settings-card-title-row" });
    titleRow.createEl("h3", {
      cls: "rolay-settings-card-title",
      text: title
    });
    if (helpText) {
      const helpButton = titleRow.createEl("button", {
        cls: "rolay-settings-help-button",
        attr: {
          type: "button",
          "data-tooltip": helpText
        }
      });
      (0, import_obsidian8.setIcon)(helpButton, "help-circle");
      helpButton.createSpan({
        cls: "rolay-settings-sr-only",
        text: helpText
      });
    }
    return {
      card,
      body: card.createDiv({ cls: "rolay-settings-card-body" })
    };
  }
  resolveCardHost(containerEl) {
    if (!containerEl.classList.contains("rolay-settings-grid") && !containerEl.classList.contains("rolay-settings-grid-wide")) {
      return containerEl;
    }
    const columns = [...containerEl.children].filter((child) => {
      return child instanceof HTMLDivElement && child.classList.contains("rolay-settings-grid-column");
    });
    if (columns.length === 0) {
      return containerEl;
    }
    return columns.reduce((shortest, column) => {
      return column.offsetHeight < shortest.offsetHeight ? column : shortest;
    }, columns[0]);
  }
  renderPresenceColorControls(containerEl) {
    const row = containerEl.createDiv({ cls: "rolay-settings-color-row" });
    const pickerField = row.createDiv({ cls: "rolay-settings-color-picker-wrap" });
    const picker = pickerField.createEl("input", {
      cls: "rolay-settings-color-picker",
      type: "color"
    });
    const currentColor = this.rolay.getPresenceColor() ?? "#4f8cff";
    picker.value = currentColor;
    picker.addEventListener("input", () => {
      void this.rolay.updatePresenceColor(picker.value);
    });
    const textInput = row.createEl("input", {
      cls: "rolay-settings-input",
      type: "text"
    });
    textInput.placeholder = "#4f8cff / rgb(79, 140, 255) / hsl(217, 100%, 66%)";
    textInput.value = currentColor;
    textInput.addEventListener("change", () => {
      void this.rolay.updatePresenceColor(textInput.value).then(() => {
        textInput.value = this.rolay.getPresenceColor() ?? textInput.value;
        picker.value = this.rolay.getPresenceColor() ?? picker.value;
      });
    });
  }
  createInputField(containerEl, options) {
    const fieldEl = containerEl.createDiv({ cls: "rolay-settings-field" });
    if (options.label) {
      fieldEl.createDiv({
        cls: "rolay-settings-field-label",
        text: options.label
      });
    }
    const input = fieldEl.createEl("input", {
      cls: "rolay-settings-input",
      type: options.type ?? "text"
    });
    input.placeholder = options.placeholder ?? "";
    input.value = options.value;
    input.addEventListener("input", () => {
      void options.onChange(input.value);
    });
    return input;
  }
  createSelectField(containerEl, options) {
    const fieldEl = containerEl.createDiv({ cls: "rolay-settings-field" });
    if (options.label) {
      fieldEl.createDiv({
        cls: "rolay-settings-field-label",
        text: options.label
      });
    }
    const select = fieldEl.createEl("select", {
      cls: "rolay-settings-input"
    });
    for (const [value, label] of options.options) {
      select.createEl("option", {
        value,
        text: label
      });
    }
    select.value = options.value;
    select.addEventListener("change", () => {
      void options.onChange(select.value);
    });
    return select;
  }
  renderSearchBar(containerEl, key, placeholder) {
    const fieldEl = containerEl.createDiv({ cls: "rolay-settings-search-row" });
    const input = fieldEl.createEl("input", {
      cls: "rolay-settings-input",
      type: "search"
    });
    input.placeholder = placeholder;
    input.value = this.getListQuery(key);
    input.addEventListener("input", () => {
      this.setListQuery(key, input.value);
      this.requestRender();
    });
  }
  renderPaginationControls(containerEl, key, pagination, totalItems) {
    const footer = containerEl.createDiv({ cls: "rolay-settings-pagination" });
    footer.createDiv({
      cls: "rolay-settings-pagination-summary",
      text: `${pagination.page + 1}/${pagination.totalPages} \xB7 ${totalItems} total`
    });
    const actions = footer.createDiv({ cls: "rolay-settings-pagination-actions" });
    const prevButton = actions.createEl("button", {
      cls: "rolay-settings-icon-button",
      attr: {
        "aria-label": "Previous page",
        title: "Previous page"
      }
    });
    (0, import_obsidian8.setIcon)(prevButton, "chevron-left");
    prevButton.disabled = pagination.page <= 0;
    prevButton.addEventListener("click", () => {
      this.setListPage(key, pagination.page - 1);
      this.requestRender();
    });
    const nextButton = actions.createEl("button", {
      cls: "rolay-settings-icon-button",
      attr: {
        "aria-label": "Next page",
        title: "Next page"
      }
    });
    (0, import_obsidian8.setIcon)(nextButton, "chevron-right");
    nextButton.disabled = pagination.page >= pagination.totalPages - 1;
    nextButton.addEventListener("click", () => {
      this.setListPage(key, pagination.page + 1);
      this.requestRender();
    });
  }
  paginate(items, requestedPage) {
    const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    const page = Math.max(0, Math.min(requestedPage, totalPages - 1));
    const start = page * PAGE_SIZE;
    return {
      items: items.slice(start, start + PAGE_SIZE),
      page,
      totalPages
    };
  }
  getListQuery(key) {
    return this.listQueries.get(key) ?? "";
  }
  setListQuery(key, value) {
    this.listQueries.set(key, value);
    this.listPages.set(key, 0);
  }
  getListPage(key) {
    return this.listPages.get(key) ?? 0;
  }
  setListPage(key, page) {
    this.listPages.set(key, Math.max(0, page));
  }
  async promptInstallOrRenameRoom(room) {
    const nextFolderName = await openTextInputModal(this.app, {
      title: room.downloaded ? "Rename Rolay Room Folder" : "Install Rolay Room",
      label: "Local folder name",
      placeholder: room.room.workspace.name,
      initialValue: room.folderName || room.room.workspace.name,
      submitText: room.downloaded ? "Save" : "Install",
      description: room.downloaded ? "This only changes the local vault folder binding." : "Installation is blocked if the target folder already exists."
    });
    if (!nextFolderName) {
      return;
    }
    if (room.downloaded) {
      await this.rolay.renameInstalledRoomFolder(room.room.workspace.id, nextFolderName);
    } else {
      await this.rolay.installRoom(room.room.workspace.id, nextFolderName);
    }
    this.requestRender();
  }
  openDetail(mode, roomId) {
    this.resetScrollOnNextRender = true;
    this.activeDetail = { mode, roomId };
    void Promise.allSettled([
      this.rolay.loadRoomMembersForUi(roomId),
      this.rolay.refreshRoomPublication(roomId)
    ]).then(() => this.requestRender());
    this.render();
  }
  formatDateTime(value) {
    if (!value) {
      return null;
    }
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return value;
    }
    return new Intl.DateTimeFormat(void 0, {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(parsed);
  }
  getRenderKey() {
    if (this.activeDetail) {
      return `detail:${this.activeDetail.mode}:${this.activeDetail.roomId}`;
    }
    return `view:${this.activeView}`;
  }
  getScrollHost() {
    let current = this.containerEl;
    while (current) {
      const style = window.getComputedStyle(current);
      const overflowY = style.overflowY;
      const isScrollable = (overflowY === "auto" || overflowY === "scroll") && current.scrollHeight > current.clientHeight;
      if (isScrollable) {
        return current;
      }
      current = current.parentElement;
    }
    return this.containerEl;
  }
  finishRender(scrollHost, renderKey, scrollTop) {
    this.lastRenderKey = renderKey;
    const nextScrollTop = this.resetScrollOnNextRender ? 0 : scrollTop;
    this.resetScrollOnNextRender = false;
    window.requestAnimationFrame(() => {
      if (!this.isVisible || !scrollHost) {
        return;
      }
      scrollHost.scrollTop = nextScrollTop;
    });
  }
  createActionRow(containerEl) {
    return containerEl.createDiv({ cls: "rolay-settings-action-row" });
  }
  createActionButton(containerEl, label, cls, onClick) {
    const button = containerEl.createEl("button", {
      text: label,
      cls: cls || void 0
    });
    button.addEventListener("click", () => {
      void onClick();
    });
    return button;
  }
  createInfoBlock(containerEl, rows) {
    const block = containerEl.createDiv({ cls: "rolay-settings-info-block" });
    for (const [label, value] of rows) {
      const row = block.createDiv({ cls: "rolay-settings-info-row" });
      row.createDiv({
        cls: "rolay-settings-info-label",
        text: label
      });
      row.createDiv({
        cls: "rolay-settings-info-value",
        text: value
      });
    }
    return block;
  }
  addCopyableInfoLine(containerEl, label, value, allowCopy = true) {
    const row = containerEl.createDiv({ cls: "rolay-settings-copy-row" });
    const info = row.createDiv({ cls: "rolay-settings-copy-main" });
    info.createDiv({
      cls: "rolay-settings-info-label",
      text: label
    });
    info.createDiv({
      cls: "rolay-settings-info-value",
      text: value
    });
    if (!allowCopy) {
      return;
    }
    const copyButton = row.createEl("button", {
      cls: "rolay-settings-secondary-button",
      text: "Copy"
    });
    copyButton.addEventListener("click", () => {
      void this.copyToClipboard(value, `${label} copied.`);
    });
  }
  createBadge(containerEl, label, tone) {
    containerEl.createSpan({
      cls: `rolay-settings-badge rolay-settings-badge-${tone}`,
      text: label
    });
  }
  async copyToClipboard(text2, successMessage) {
    try {
      await navigator.clipboard.writeText(text2);
      new import_obsidian8.Notice(successMessage);
    } catch (error) {
      new import_obsidian8.Notice(`Copy failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  hasFocusedTextInput() {
    const activeEl = document.activeElement;
    if (!(activeEl instanceof HTMLElement)) {
      return false;
    }
    if (!this.containerEl.contains(activeEl)) {
      return false;
    }
    if (activeEl instanceof HTMLInputElement || activeEl instanceof HTMLTextAreaElement || activeEl instanceof HTMLSelectElement) {
      return true;
    }
    return activeEl.isContentEditable;
  }
};

// node_modules/eventsource-parser/dist/index.js
var ParseError = class extends Error {
  constructor(message, options) {
    super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
  }
};
function noop(_arg) {
}
function createParser(callbacks) {
  if (typeof callbacks == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks;
  let incompleteLine = "", isFirstChunk = true, id2, data = "", eventType = "";
  function feed(newChunk) {
    const chunk = isFirstChunk ? newChunk.replace(/^\xEF\xBB\xBF/, "") : newChunk, [complete, incomplete] = splitLines(`${incompleteLine}${chunk}`);
    for (const line of complete)
      parseLine(line);
    incompleteLine = incomplete, isFirstChunk = false;
  }
  function parseLine(line) {
    if (line === "") {
      dispatchEvent();
      return;
    }
    if (line.startsWith(":")) {
      onComment && onComment(line.slice(line.startsWith(": ") ? 2 : 1));
      return;
    }
    const fieldSeparatorIndex = line.indexOf(":");
    if (fieldSeparatorIndex !== -1) {
      const field = line.slice(0, fieldSeparatorIndex), offset = line[fieldSeparatorIndex + 1] === " " ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
      processField(field, value, line);
      return;
    }
    processField(line, "", line);
  }
  function processField(field, value, line) {
    switch (field) {
      case "event":
        eventType = value;
        break;
      case "data":
        data = `${data}${value}
`;
        break;
      case "id":
        id2 = value.includes("\0") ? void 0 : value;
        break;
      case "retry":
        /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(
          new ParseError(`Invalid \`retry\` value: "${value}"`, {
            type: "invalid-retry",
            value,
            line
          })
        );
        break;
      default:
        onError(
          new ParseError(
            `Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`,
            { type: "unknown-field", field, value, line }
          )
        );
        break;
    }
  }
  function dispatchEvent() {
    data.length > 0 && onEvent({
      id: id2,
      event: eventType || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: data.endsWith(`
`) ? data.slice(0, -1) : data
    }), id2 = void 0, data = "", eventType = "";
  }
  function reset(options = {}) {
    incompleteLine && options.consume && parseLine(incompleteLine), isFirstChunk = true, id2 = void 0, data = "", eventType = "", incompleteLine = "";
  }
  return { feed, reset };
}
function splitLines(chunk) {
  const lines = [];
  let incompleteLine = "", searchIndex = 0;
  for (; searchIndex < chunk.length; ) {
    const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
    let lineEnd = -1;
    if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = Math.min(crIndex, lfIndex) : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) {
      incompleteLine = chunk.slice(searchIndex);
      break;
    } else {
      const line = chunk.slice(searchIndex, lineEnd);
      lines.push(line), searchIndex = lineEnd + 1, chunk[searchIndex - 1] === "\r" && chunk[searchIndex] === `
` && searchIndex++;
    }
  }
  return [lines, incompleteLine];
}

// src/sync/event-stream.ts
var WorkspaceEventStream = class {
  constructor(apiClient, log) {
    this.abortController = null;
    this.stopped = true;
    this.currentCursor = null;
    this.reconnectAttempt = 0;
    this.reconnectHandle = null;
    this.workspaceId = null;
    this.handlers = null;
    this.apiClient = apiClient;
    this.log = log;
  }
  start(workspaceId, cursor, handlers) {
    this.stop();
    this.workspaceId = workspaceId;
    this.currentCursor = cursor;
    this.handlers = handlers;
    this.stopped = false;
    void this.connect();
  }
  stop() {
    this.stopped = true;
    this.workspaceId = null;
    this.handlers?.onStatusChange?.("stopped");
    this.abortController?.abort();
    this.abortController = null;
    if (this.reconnectHandle !== null) {
      window.clearTimeout(this.reconnectHandle);
      this.reconnectHandle = null;
    }
  }
  getCursor() {
    return this.currentCursor;
  }
  async connect() {
    if (this.stopped || !this.workspaceId || !this.handlers) {
      return;
    }
    this.handlers.onStatusChange?.(this.reconnectAttempt === 0 ? "connecting" : "reconnecting");
    this.abortController = new AbortController();
    try {
      const query = this.currentCursor === null ? "" : `?cursor=${this.currentCursor}`;
      const path = `/v1/workspaces/${encodeURIComponent(this.workspaceId)}/events${query}`;
      const response = await this.openAuthorizedStream(path, this.abortController.signal);
      this.reconnectAttempt = 0;
      this.handlers.onStatusChange?.("open");
      this.handlers.onOpen?.();
      await this.consumeStream(response, this.abortController.signal);
      if (!this.stopped) {
        this.scheduleReconnect();
      }
    } catch (error) {
      if (this.stopped || isAbortError(error)) {
        return;
      }
      if (isSoftStreamCloseError(error)) {
        this.scheduleReconnect();
        return;
      }
      const normalizedError = error instanceof Error ? error : new Error(String(error));
      this.handlers.onStatusChange?.("error");
      this.handlers.onError?.(normalizedError);
      this.scheduleReconnect();
    }
  }
  async consumeStream(response, signal) {
    const parser = createParser({
      onEvent: (message) => {
        void this.handleMessage(message);
      }
    });
    if (isNodeResponse(response)) {
      response.setEncoding("utf8");
      await new Promise((resolve, reject) => {
        const abortHandler = () => {
          reject(createAbortError2());
        };
        signal.addEventListener("abort", abortHandler, { once: true });
        response.on("data", (chunk) => {
          parser.feed(chunk);
        });
        response.on("end", () => {
          signal.removeEventListener("abort", abortHandler);
          resolve();
        });
        response.on("error", (error) => {
          signal.removeEventListener("abort", abortHandler);
          reject(error);
        });
      });
      return;
    }
    if (!response.body) {
      throw new Error("SSE response body is empty.");
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    while (!this.stopped) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      parser.feed(decoder.decode(value, { stream: true }));
    }
  }
  async handleMessage(message) {
    if (!message.event || !message.data) {
      return;
    }
    const eventId = Number(message.id);
    if (Number.isFinite(eventId)) {
      if (this.currentCursor !== null && eventId <= this.currentCursor) {
        return;
      }
      this.currentCursor = eventId;
    }
    let data;
    try {
      data = JSON.parse(message.data);
    } catch {
      data = message.data;
    }
    await this.handlers?.onEvent?.({
      id: Number.isFinite(eventId) ? eventId : this.currentCursor ?? 0,
      event: message.event,
      data
    });
  }
  scheduleReconnect() {
    if (this.stopped) {
      return;
    }
    this.reconnectAttempt += 1;
    const delay = Math.min(3e4, 1e3 * 2 ** Math.min(this.reconnectAttempt, 5));
    this.log(`SSE disconnected. Reconnecting in ${delay}ms.`);
    this.handlers?.onStatusChange?.("reconnecting");
    this.reconnectHandle = window.setTimeout(() => {
      this.reconnectHandle = null;
      void this.connect();
    }, delay);
  }
  async openAuthorizedStream(path, signal) {
    const accessToken = await this.apiClient.getValidAccessToken();
    const url = this.apiClient.buildAbsoluteUrl(path);
    let response = await this.openStream(url, accessToken, signal);
    if (getResponseStatus(response) === 401) {
      await this.apiClient.refresh();
      const refreshedToken = await this.apiClient.getValidAccessToken();
      response = await this.openStream(url, refreshedToken, signal);
    }
    const status = getResponseStatus(response);
    if (status >= 400) {
      throw new Error(`SSE request failed with HTTP ${status}.`);
    }
    return response;
  }
  async openStream(url, accessToken, signal) {
    const nodeRequire = getNodeRequire3();
    if (nodeRequire) {
      return openNodeRequest(url, accessToken, signal, nodeRequire);
    }
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "text/event-stream",
        Authorization: `Bearer ${accessToken}`
      },
      signal
    });
  }
};
function isAbortError(error) {
  return error instanceof DOMException && error.name === "AbortError" || error instanceof Error && error.name === "AbortError";
}
function isSoftStreamCloseError(error) {
  if (!(error instanceof Error)) {
    return false;
  }
  const code = error.code;
  if (code === "ECONNRESET" || code === "ERR_STREAM_PREMATURE_CLOSE" || code === "UND_ERR_SOCKET") {
    return true;
  }
  const message = error.message.trim().toLowerCase();
  return message === "aborted" || message.includes("premature close") || message.includes("socket hang up");
}
function isNodeResponse(response) {
  return typeof response.setEncoding === "function";
}
function getResponseStatus(response) {
  return isNodeResponse(response) ? response.statusCode ?? 0 : response.status;
}
function createAbortError2() {
  const error = new Error("The operation was aborted.");
  error.name = "AbortError";
  return error;
}
function getNodeRequire3() {
  const candidate = globalThis.require ?? globalThis.window?.require;
  if (typeof candidate === "function") {
    return candidate;
  }
  try {
    return Function("return typeof require === 'function' ? require : undefined;")() ?? null;
  } catch {
    return null;
  }
}
async function openNodeRequest(urlString, accessToken, signal, nodeRequire) {
  const url = new URL(urlString);
  const requestModule = url.protocol === "https:" ? nodeRequire("node:https") : nodeRequire("node:http");
  return new Promise((resolve, reject) => {
    const options = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port ? Number(url.port) : void 0,
      path: `${url.pathname}${url.search}`,
      method: "GET",
      headers: {
        Accept: "text/event-stream",
        Authorization: `Bearer ${accessToken}`
      }
    };
    const request = requestModule.request(options, (response) => {
      cleanup();
      resolve(response);
    });
    const abortHandler = () => {
      request.destroy(createAbortError2());
      cleanup();
      reject(createAbortError2());
    };
    const errorHandler = (error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      signal.removeEventListener("abort", abortHandler);
      request.removeListener("error", errorHandler);
    };
    signal.addEventListener("abort", abortHandler, { once: true });
    request.on("error", errorHandler);
    request.end();
  });
}

// src/sync/operations.ts
var OperationsQueue = class {
  constructor(config) {
    this.chain = Promise.resolve();
    this.apiClient = config.apiClient;
    this.getDeviceId = config.getDeviceId;
    this.log = config.log;
    this.onTrace = config.onTrace;
    this.onAfterApply = config.onAfterApply;
  }
  enqueue(workspaceId, operation, reason) {
    const queued = async () => {
      const opWithId = {
        ...operation,
        opId: createOperationId()
      };
      this.log(`Sending ${operation.type} (${opWithId.opId}) for ${reason}.`);
      const response = await this.apiClient.applyBatchOperations(workspaceId, {
        deviceId: this.getDeviceId(),
        operations: [opWithId]
      });
      if (response._meta) {
        this.onTrace?.(workspaceId, opWithId, reason, response._meta);
      }
      const failed = response.results.find((result) => result.status !== "applied");
      for (const result of response.results) {
        this.log(describeResult(result));
      }
      await this.onAfterApply?.(workspaceId, reason);
      if (failed) {
        throw new RolayOperationError(workspaceId, opWithId, failed);
      }
      return response;
    };
    const task = this.chain.then(queued, queued);
    this.chain = task.then(() => void 0, () => void 0);
    return task;
  }
};
var RolayOperationError = class extends Error {
  constructor(workspaceId, operation, result) {
    super(`Rolay server returned ${result.status} for ${operation.type}: ${result.reason ?? "unknown"}`);
    this.name = "RolayOperationError";
    this.workspaceId = workspaceId;
    this.operation = operation;
    this.result = result;
  }
};
function createOperationId() {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }
  return `rolay-op-${Date.now()}`;
}
function describeResult(result) {
  if (result.status === "applied") {
    return `Operation ${result.opId} applied at event ${result.eventSeq ?? "?"}.`;
  }
  const suggested = result.suggestedPath ? ` Suggested path: ${result.suggestedPath}.` : "";
  return `Operation ${result.opId} ${result.status}: ${result.reason ?? "unknown"}.${suggested}`;
}

// src/sync/settings-stream.ts
var SettingsEventStream = class {
  constructor(apiClient, log) {
    this.abortController = null;
    this.stopped = true;
    this.currentCursor = null;
    this.reconnectAttempt = 0;
    this.reconnectHandle = null;
    this.handlers = null;
    this.apiClient = apiClient;
    this.log = log;
  }
  start(cursor, handlers) {
    this.stop();
    this.currentCursor = cursor;
    this.handlers = handlers;
    this.stopped = false;
    void this.connect();
  }
  stop() {
    this.stopped = true;
    this.handlers?.onStatusChange?.("stopped");
    this.abortController?.abort();
    this.abortController = null;
    if (this.reconnectHandle !== null) {
      window.clearTimeout(this.reconnectHandle);
      this.reconnectHandle = null;
    }
  }
  getCursor() {
    return this.currentCursor;
  }
  async connect() {
    if (this.stopped || !this.handlers) {
      return;
    }
    this.handlers.onStatusChange?.(this.reconnectAttempt === 0 ? "connecting" : "reconnecting");
    this.abortController = new AbortController();
    try {
      const response = await this.openAuthorizedStream(this.abortController.signal);
      this.reconnectAttempt = 0;
      this.handlers.onStatusChange?.("open");
      this.handlers.onOpen?.();
      await this.consumeStream(response, this.abortController.signal);
      if (!this.stopped) {
        this.scheduleReconnect();
      }
    } catch (error) {
      if (this.stopped || isAbortError2(error)) {
        return;
      }
      if (isSoftStreamCloseError2(error)) {
        this.scheduleReconnect();
        return;
      }
      const normalizedError = error instanceof Error ? error : new Error(String(error));
      this.handlers.onStatusChange?.("error");
      this.handlers.onError?.(normalizedError);
      this.scheduleReconnect();
    }
  }
  async consumeStream(response, signal) {
    const parser = createParser({
      onEvent: (message) => {
        void this.handleMessage(message);
      }
    });
    if (isNodeResponse2(response)) {
      response.setEncoding("utf8");
      await new Promise((resolve, reject) => {
        const abortHandler = () => {
          reject(createAbortError3());
        };
        signal.addEventListener("abort", abortHandler, { once: true });
        response.on("data", (chunk) => {
          parser.feed(chunk);
        });
        response.on("end", () => {
          signal.removeEventListener("abort", abortHandler);
          resolve();
        });
        response.on("error", (error) => {
          signal.removeEventListener("abort", abortHandler);
          reject(error);
        });
      });
      return;
    }
    if (!response.body) {
      throw new Error("Settings SSE response body is empty.");
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    while (!this.stopped) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      parser.feed(decoder.decode(value, { stream: true }));
    }
  }
  async handleMessage(message) {
    if (!message.event || !message.data) {
      return;
    }
    const eventId = Number(message.id);
    if (Number.isFinite(eventId)) {
      if (this.currentCursor !== null && eventId <= this.currentCursor) {
        return;
      }
      this.currentCursor = eventId;
    }
    let data;
    try {
      data = JSON.parse(message.data);
    } catch {
      data = message.data;
    }
    await this.handlers?.onEvent?.({
      id: Number.isFinite(eventId) ? eventId : this.currentCursor ?? 0,
      event: message.event,
      data
    });
  }
  scheduleReconnect() {
    if (this.stopped) {
      return;
    }
    this.reconnectAttempt += 1;
    const delay = Math.min(3e4, 1e3 * 2 ** Math.min(this.reconnectAttempt, 5));
    this.log(`Settings SSE disconnected. Reconnecting in ${delay}ms.`);
    this.handlers?.onStatusChange?.("reconnecting");
    this.reconnectHandle = window.setTimeout(() => {
      this.reconnectHandle = null;
      void this.connect();
    }, delay);
  }
  async openAuthorizedStream(signal) {
    const accessToken = await this.apiClient.getValidAccessToken();
    let response = await this.openStream(accessToken, signal);
    if (getResponseStatus2(response) === 401) {
      await this.apiClient.refresh();
      const refreshedToken = await this.apiClient.getValidAccessToken();
      response = await this.openStream(refreshedToken, signal);
    }
    const status = getResponseStatus2(response);
    if (status >= 400) {
      throw new Error(`Settings SSE request failed with HTTP ${status}.`);
    }
    return response;
  }
  async openStream(accessToken, signal) {
    const url = this.buildUrl();
    const nodeRequire = getNodeRequire4();
    if (nodeRequire) {
      return openNodeRequest2(url, accessToken, this.currentCursor, signal, nodeRequire);
    }
    const headers = new Headers({
      Accept: "text/event-stream",
      Authorization: `Bearer ${accessToken}`
    });
    if (this.currentCursor !== null) {
      headers.set("Last-Event-ID", String(this.currentCursor));
    }
    return fetch(url, {
      method: "GET",
      headers,
      signal
    });
  }
  buildUrl() {
    const query = this.currentCursor === null ? "" : `?cursor=${encodeURIComponent(String(this.currentCursor))}`;
    return this.apiClient.buildAbsoluteUrl(`/v1/events/settings${query}`);
  }
};
function isAbortError2(error) {
  return error instanceof DOMException && error.name === "AbortError" || error instanceof Error && error.name === "AbortError";
}
function isSoftStreamCloseError2(error) {
  if (!(error instanceof Error)) {
    return false;
  }
  const code = error.code;
  if (code === "ECONNRESET" || code === "ERR_STREAM_PREMATURE_CLOSE" || code === "UND_ERR_SOCKET") {
    return true;
  }
  const message = error.message.trim().toLowerCase();
  return message === "aborted" || message.includes("premature close") || message.includes("socket hang up");
}
function isNodeResponse2(response) {
  return typeof response.setEncoding === "function";
}
function getResponseStatus2(response) {
  return isNodeResponse2(response) ? response.statusCode ?? 0 : response.status;
}
function createAbortError3() {
  const error = new Error("The operation was aborted.");
  error.name = "AbortError";
  return error;
}
function getNodeRequire4() {
  const candidate = globalThis.require ?? globalThis.window?.require;
  if (typeof candidate === "function") {
    return candidate;
  }
  try {
    return Function("return typeof require === 'function' ? require : undefined;")() ?? null;
  } catch {
    return null;
  }
}
async function openNodeRequest2(urlString, accessToken, lastEventId, signal, nodeRequire) {
  const url = new URL(urlString);
  const requestModule = url.protocol === "https:" ? nodeRequire("node:https") : nodeRequire("node:http");
  return new Promise((resolve, reject) => {
    const headers = {
      Accept: "text/event-stream",
      Authorization: `Bearer ${accessToken}`
    };
    if (lastEventId !== null) {
      headers["Last-Event-ID"] = String(lastEventId);
    }
    const options = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port ? Number(url.port) : void 0,
      path: `${url.pathname}${url.search}`,
      method: "GET",
      headers
    };
    const request = requestModule.request(options, (response) => {
      cleanup();
      resolve(response);
    });
    const abortHandler = () => {
      request.destroy(createAbortError3());
      cleanup();
      reject(createAbortError3());
    };
    const errorHandler = (error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      signal.removeEventListener("abort", abortHandler);
      request.removeListener("error", errorHandler);
    };
    signal.addEventListener("abort", abortHandler, { once: true });
    request.on("error", errorHandler);
    request.end();
  });
}

// src/sync/note-presence-stream.ts
var NotePresenceEventStream = class {
  constructor(apiClient, log) {
    this.abortController = null;
    this.stopped = true;
    this.reconnectAttempt = 0;
    this.reconnectHandle = null;
    this.workspaceId = null;
    this.handlers = null;
    this.apiClient = apiClient;
    this.log = log;
  }
  start(workspaceId, handlers) {
    this.stop();
    this.workspaceId = workspaceId;
    this.handlers = handlers;
    this.stopped = false;
    void this.connect();
  }
  stop() {
    this.stopped = true;
    this.workspaceId = null;
    this.handlers?.onStatusChange?.("stopped");
    this.abortController?.abort();
    this.abortController = null;
    if (this.reconnectHandle !== null) {
      window.clearTimeout(this.reconnectHandle);
      this.reconnectHandle = null;
    }
  }
  async connect() {
    if (this.stopped || !this.workspaceId || !this.handlers) {
      return;
    }
    this.handlers.onStatusChange?.(this.reconnectAttempt === 0 ? "connecting" : "reconnecting");
    this.abortController = new AbortController();
    try {
      const response = await this.openAuthorizedStream(this.workspaceId, this.abortController.signal);
      this.reconnectAttempt = 0;
      this.handlers.onStatusChange?.("open");
      this.handlers.onOpen?.();
      await this.consumeStream(response, this.abortController.signal);
      if (!this.stopped) {
        this.scheduleReconnect();
      }
    } catch (error) {
      if (this.stopped || isAbortError3(error)) {
        return;
      }
      if (isSoftStreamCloseError3(error)) {
        this.scheduleReconnect();
        return;
      }
      const normalizedError = error instanceof Error ? error : new Error(String(error));
      this.handlers.onStatusChange?.("error");
      this.handlers.onError?.(normalizedError);
      this.scheduleReconnect();
    }
  }
  async consumeStream(response, signal) {
    const parser = createParser({
      onEvent: (message) => {
        void this.handleMessage(message);
      }
    });
    if (isNodeResponse3(response)) {
      response.setEncoding("utf8");
      await new Promise((resolve, reject) => {
        const abortHandler = () => {
          reject(createAbortError4());
        };
        signal.addEventListener("abort", abortHandler, { once: true });
        response.on("data", (chunk) => {
          parser.feed(chunk);
        });
        response.on("end", () => {
          signal.removeEventListener("abort", abortHandler);
          resolve();
        });
        response.on("error", (error) => {
          signal.removeEventListener("abort", abortHandler);
          reject(error);
        });
      });
      return;
    }
    if (!response.body) {
      throw new Error("Note presence SSE response body is empty.");
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    while (!this.stopped) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      parser.feed(decoder.decode(value, { stream: true }));
    }
  }
  async handleMessage(message) {
    if (!message.event || !message.data) {
      return;
    }
    let data;
    try {
      data = JSON.parse(message.data);
    } catch {
      data = message.data;
    }
    await this.handlers?.onEvent?.({
      id: 0,
      event: message.event,
      data
    });
  }
  scheduleReconnect() {
    if (this.stopped) {
      return;
    }
    this.reconnectAttempt += 1;
    const delay = Math.min(3e4, 1e3 * 2 ** Math.min(this.reconnectAttempt, 5));
    this.log(`Note presence SSE disconnected. Reconnecting in ${delay}ms.`);
    this.handlers?.onStatusChange?.("reconnecting");
    this.reconnectHandle = window.setTimeout(() => {
      this.reconnectHandle = null;
      void this.connect();
    }, delay);
  }
  async openAuthorizedStream(workspaceId, signal) {
    const accessToken = await this.apiClient.getValidAccessToken();
    let response = await this.openStream(workspaceId, accessToken, signal);
    if (getResponseStatus3(response) === 401) {
      await this.apiClient.refresh();
      const refreshedToken = await this.apiClient.getValidAccessToken();
      response = await this.openStream(workspaceId, refreshedToken, signal);
    }
    const status = getResponseStatus3(response);
    if (status >= 400) {
      throw new Error(`Note presence SSE request failed with HTTP ${status}.`);
    }
    return response;
  }
  async openStream(workspaceId, accessToken, signal) {
    const url = this.apiClient.buildAbsoluteUrl(
      `/v1/workspaces/${encodeURIComponent(workspaceId)}/note-presence/events`
    );
    const nodeRequire = getNodeRequire5();
    if (nodeRequire) {
      return openNodeRequest3(url, accessToken, signal, nodeRequire);
    }
    return fetch(url, {
      method: "GET",
      headers: {
        Accept: "text/event-stream",
        Authorization: `Bearer ${accessToken}`
      },
      signal
    });
  }
};
function isAbortError3(error) {
  return error instanceof DOMException && error.name === "AbortError" || error instanceof Error && error.name === "AbortError";
}
function isSoftStreamCloseError3(error) {
  if (!(error instanceof Error)) {
    return false;
  }
  const code = error.code;
  if (code === "ECONNRESET" || code === "ERR_STREAM_PREMATURE_CLOSE" || code === "UND_ERR_SOCKET") {
    return true;
  }
  const message = error.message.trim().toLowerCase();
  return message === "aborted" || message.includes("premature close") || message.includes("socket hang up");
}
function isNodeResponse3(response) {
  return typeof response.setEncoding === "function";
}
function getResponseStatus3(response) {
  return isNodeResponse3(response) ? response.statusCode ?? 0 : response.status;
}
function createAbortError4() {
  const error = new Error("The operation was aborted.");
  error.name = "AbortError";
  return error;
}
function getNodeRequire5() {
  const candidate = globalThis.require ?? globalThis.window?.require;
  if (typeof candidate === "function") {
    return candidate;
  }
  try {
    return Function("return typeof require === 'function' ? require : undefined;")() ?? null;
  } catch {
    return null;
  }
}
async function openNodeRequest3(urlString, accessToken, signal, nodeRequire) {
  const url = new URL(urlString);
  const requestModule = url.protocol === "https:" ? nodeRequire("node:https") : nodeRequire("node:http");
  return new Promise((resolve, reject) => {
    const options = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port ? Number(url.port) : void 0,
      path: `${url.pathname}${url.search}`,
      method: "GET",
      headers: {
        Accept: "text/event-stream",
        Authorization: `Bearer ${accessToken}`
      }
    };
    const request = requestModule.request(options, (response) => {
      cleanup();
      resolve(response);
    });
    const abortHandler = () => {
      request.destroy(createAbortError4());
      cleanup();
      reject(createAbortError4());
    };
    const errorHandler = (error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      signal.removeEventListener("abort", abortHandler);
      request.removeListener("error", errorHandler);
    };
    signal.addEventListener("abort", abortHandler, { once: true });
    request.on("error", errorHandler);
    request.end();
  });
}

// src/sync/tree-store.ts
var TreeStore = class {
  constructor() {
    this.workspace = null;
    this.cursor = null;
    this.entriesById = /* @__PURE__ */ new Map();
    this.entriesByPath = /* @__PURE__ */ new Map();
  }
  clear() {
    this.workspace = null;
    this.cursor = null;
    this.entriesById.clear();
    this.entriesByPath.clear();
  }
  applySnapshot(snapshot) {
    this.workspace = snapshot.workspace;
    this.cursor = snapshot.cursor;
    this.entriesById.clear();
    this.entriesByPath.clear();
    for (const entry of snapshot.entries) {
      this.entriesById.set(entry.id, entry);
      if (!entry.deleted) {
        this.entriesByPath.set(normalizePath3(entry.path), entry);
      }
    }
  }
  recordCursor(cursor) {
    this.cursor = cursor;
  }
  getCursor() {
    return this.cursor;
  }
  getWorkspace() {
    return this.workspace;
  }
  getWorkspaceId() {
    return this.workspace?.id ?? null;
  }
  getEntries() {
    return [...this.entriesById.values()].sort((left, right) => left.path.localeCompare(right.path));
  }
  getEntryById(entryId) {
    return this.entriesById.get(entryId) ?? null;
  }
  getEntryByPath(path) {
    return this.entriesByPath.get(normalizePath3(path)) ?? null;
  }
  upsertEntry(entry) {
    const previousEntry = this.entriesById.get(entry.id);
    if (previousEntry) {
      this.entriesByPath.delete(normalizePath3(previousEntry.path));
    }
    this.entriesById.set(entry.id, entry);
    if (!entry.deleted) {
      this.entriesByPath.set(normalizePath3(entry.path), entry);
    }
  }
  markEntryDeleted(entryId) {
    const existingEntry = this.entriesById.get(entryId);
    if (!existingEntry) {
      return;
    }
    this.entriesByPath.delete(normalizePath3(existingEntry.path));
    this.entriesById.set(entryId, {
      ...existingEntry,
      deleted: true
    });
  }
};
function normalizePath3(path) {
  return path.replace(/\\/g, "/");
}

// src/utils/base64.ts
function encodeBase64(bytes) {
  let binary = "";
  const chunkSize = 32768;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}
function decodeBase64(encoded) {
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

// src/main.ts
var _RolayPlugin = class _RolayPlugin extends import_obsidian9.Plugin {
  constructor() {
    super(...arguments);
    this.roomRuntime = /* @__PURE__ */ new Map();
    this.roomInvites = /* @__PURE__ */ new Map();
    this.pendingLocalCreates = /* @__PURE__ */ new Map();
    this.pendingLocalDeletes = /* @__PURE__ */ new Map();
    this.binaryTransferState = /* @__PURE__ */ new Map();
    this.binarySyncTokens = /* @__PURE__ */ new Map();
    this.binarySyncPathsByToken = /* @__PURE__ */ new Map();
    this.pendingBinarySyncReruns = /* @__PURE__ */ new Set();
    this.recentRemoteObservedPaths = /* @__PURE__ */ new Map();
    this.pendingRemoteMarkdownSettles = /* @__PURE__ */ new Map();
    this.persistHandle = null;
    this.isUnloading = false;
    this.explorerDecorationHandle = null;
    this.explorerDecorationFrame = null;
    this.explorerToggleRefreshHandle = null;
    this.explorerMutationObserver = null;
    this.notePresenceUiHandle = null;
    this.roomList = [];
    this.adminRoomList = [];
    this.managedUsers = [];
    this.adminSelectedRoomId = "";
    this.adminRoomMembers = [];
    this.roomMembersCache = /* @__PURE__ */ new Map();
    this.logFlushHandle = null;
    this.logFileWrite = Promise.resolve();
    this.pendingLogLines = [];
    this.settingsEventStream = null;
    this.settingsEventStreamGeneration = 0;
    this.settingsEventCursor = null;
    this.settingsEventStreamStatus = "stopped";
    this.settingsStreamRecoveryInFlight = false;
    this.startupBootstrapHandle = null;
    this.startupRoomResumeHandles = /* @__PURE__ */ new Set();
    this.profileDraftDisplayName = "";
    this.passwordChangeDraft = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
    this.createRoomDraft = {
      name: ""
    };
    this.joinRoomDraft = {
      code: ""
    };
    this.managedUserDraft = {
      username: "",
      password: "",
      displayName: "",
      globalRole: "reader"
    };
    this.adminRoomMemberDraft = {
      username: "",
      role: "member"
    };
  }
  async onload() {
    this.isUnloading = false;
    this.data = mergePluginData(await this.loadData());
    this.data.logs = trimRecentLogEntries(this.data.logs, Date.now(), _RolayPlugin.LOG_FILE_RETENTION_MS, 100);
    this.restorePersistedBinaryTransfers();
    this.resetProfileDraft();
    this.apiClient = new RolayApiClient({
      getServerUrl: () => normalizeServerUrl(this.data.settings.serverUrl),
      getSession: () => this.data.session,
      saveSession: async (session) => {
        this.data.session = session;
        if (!session) {
          this.stopSettingsEventStream();
        }
        await this.persistNow();
        this.updateStatusBar();
      }
    });
    this.crdtManager = new CrdtSessionManager({
      app: this.app,
      apiClient: this.apiClient,
      getCurrentUser: () => this.getCurrentUser(),
      getPresenceColor: () => this.getPresenceColor(),
      resolveWorkspaceIdByLocalPath: (localPath) => this.resolveDownloadedRoomByLocalPath(localPath)?.workspaceId ?? null,
      isLiveSyncEnabledForLocalPath: (localPath) => this.isLiveSyncEnabledForLocalPath(localPath),
      getPersistedCrdtState: (entryId) => this.getPersistedCrdtState(entryId),
      persistCrdtState: (entryId, filePath, state) => this.persistCrdtState(entryId, filePath, state),
      resolveEntryByLocalPath: (localPath) => this.resolveEntryByLocalPath(localPath),
      log: (message) => this.recordLog("crdt", message)
    });
    this.registerEditorExtension(
      createSharedPresenceExtension(({ filePath, editor, focused }) => {
        this.crdtManager.handleEditorSelectionChange(filePath, editor, focused);
      })
    );
    this.operationsQueue = new OperationsQueue({
      apiClient: this.apiClient,
      getDeviceId: () => this.data.deviceId,
      log: (message) => this.recordLog("ops", message),
      onTrace: (workspaceId, operation, reason, meta) => {
        if (operation.type !== "commit_blob_revision") {
          return;
        }
        this.traceBlob(
          `[${workspaceId}] commit_blob_revision entryId=${operation.entryId} hash=${operation.hash} sizeBytes=${operation.sizeBytes} entryVersion=${operation.preconditions?.entryVersion ?? "?"} path=${operation.preconditions?.path ?? "?"} reason=${reason} status=${meta.status} requestId=${meta.requestId ?? "-"}`
        );
      },
      onAfterApply: (workspaceId) => {
        this.scheduleSnapshotRefresh(workspaceId, "local-op");
      }
    });
    this.fileBridge = new FileBridge({
      app: this.app,
      getSyncRoot: () => this.data.settings.syncRoot,
      getFolderName: (workspaceId) => this.getDownloadedFolderName(workspaceId),
      getDownloadedRooms: () => this.getDownloadedRooms(),
      getEntryByPath: (workspaceId, path) => this.getRoomStore(workspaceId)?.getEntryByPath(path) ?? null,
      isWorkspaceSyncActive: (workspaceId) => this.isRoomSyncActive(workspaceId),
      hasPendingCreate: (workspaceId, path) => this.hasPendingLocalCreate(workspaceId, path),
      hasPendingDelete: (workspaceId, path) => this.hasPendingLocalDelete(workspaceId, path),
      hasPendingBinaryWrite: (localPath) => (0, import_obsidian9.normalizePath)(localPath) in this.data.pendingBinaryWrites,
      log: (message) => this.recordLog("bridge", message),
      onCreateFolder: (workspaceId, path) => this.queueCreateFolder(workspaceId, path),
      onCreateMarkdown: (workspaceId, path, localContent) => this.queueCreateMarkdown(workspaceId, path, localContent),
      onCreateBinary: (workspaceId, path, localContent) => this.queueBinaryWrite(workspaceId, path, localContent, null),
      onUpdateBinary: (workspaceId, entry, localContent) => this.queueBinaryWrite(workspaceId, entry.path, localContent, entry),
      onRenameOrMove: (workspaceId, entry, newPath, type) => this.queueRenameOrMove(workspaceId, entry, newPath, type),
      onDeleteEntry: (workspaceId, entry) => this.queueDeleteEntry(workspaceId, entry),
      onRemotePathObserved: (workspaceId, localPath, serverPath) => {
        this.noteRemoteObservedPath(workspaceId, localPath, serverPath);
      },
      wasPathRecentlyObservedAsRemote: (workspaceId, localPath) => this.wasPathRecentlyObservedAsRemote(workspaceId, localPath)
    });
    this.statusBarEl = this.addStatusBarItem();
    this.updateStatusBar();
    this.settingsTab = new RolaySettingTab(this.app, this);
    this.addSettingTab(this.settingsTab);
    this.registerCommands();
    this.registerEvent(
      this.app.workspace.on("file-open", (file) => {
        void this.handleFileOpen(file);
      })
    );
    this.registerEvent(
      this.app.workspace.on("editor-change", (editor, info) => {
        if (info instanceof import_obsidian9.MarkdownView) {
          this.crdtManager.handleEditorChange(editor, info);
        }
      })
    );
    this.registerEvent(
      this.app.workspace.on("layout-change", () => {
        this.scheduleExplorerLoadingDecorations();
        this.scheduleNotePresenceUiRefresh();
        this.ensureExplorerMutationObserver();
      })
    );
    this.ensureExplorerMutationObserver();
    this.registerDomEvent(this.app.workspace.containerEl, "click", (event) => {
      if (this.isExplorerFolderInteractionTarget(event.target)) {
        this.refreshExplorerDecorationsAfterFolderToggle();
      }
    }, true);
    this.registerDomEvent(this.app.workspace.containerEl, "keydown", (event) => {
      if ((event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Enter" || event.key === " ") && this.isExplorerFolderInteractionTarget(event.target)) {
        this.refreshExplorerDecorationsAfterFolderToggle();
      }
    }, true);
    this.registerEvent(
      this.app.vault.on("create", (file) => {
        void this.handleVaultCreate(file);
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        void this.handleVaultRename(file, oldPath);
      })
    );
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        void this.handleVaultModify(file);
      })
    );
    this.registerEvent(
      this.app.vault.on("delete", (file) => {
        void this.handleVaultDelete(file);
      })
    );
    this.register(() => {
      this.isUnloading = true;
      this.stopSettingsEventStream();
      if (this.persistHandle !== null) {
        window.clearTimeout(this.persistHandle);
      }
      if (this.explorerDecorationHandle !== null) {
        window.clearTimeout(this.explorerDecorationHandle);
      }
      if (this.explorerDecorationFrame !== null) {
        window.cancelAnimationFrame(this.explorerDecorationFrame);
      }
      if (this.explorerToggleRefreshHandle !== null) {
        window.clearTimeout(this.explorerToggleRefreshHandle);
      }
      this.explorerMutationObserver?.disconnect();
      this.explorerMutationObserver = null;
      if (this.notePresenceUiHandle !== null) {
        window.clearTimeout(this.notePresenceUiHandle);
      }
      if (this.logFlushHandle !== null) {
        window.clearTimeout(this.logFlushHandle);
      }
      this.clearDeferredStartupWork();
      for (const runtime of this.roomRuntime.values()) {
        if (runtime.snapshotRefreshHandle !== null) {
          window.clearTimeout(runtime.snapshotRefreshHandle);
        }
        if (runtime.backgroundMarkdownRefreshHandle !== null) {
          window.clearTimeout(runtime.backgroundMarkdownRefreshHandle);
        }
        if (runtime.lockedBootstrapRetryHandle !== null) {
          window.clearTimeout(runtime.lockedBootstrapRetryHandle);
        }
      }
      for (const handle of this.pendingRemoteMarkdownSettles.values()) {
        window.clearTimeout(handle);
      }
      this.pendingRemoteMarkdownSettles.clear();
      for (const transfer of this.binaryTransferState.values()) {
        transfer.abortController?.abort();
      }
      this.binaryTransferState.clear();
      this.binarySyncTokens.clear();
      this.binarySyncPathsByToken.clear();
    });
    this.recordLog("plugin", "Rolay plugin loaded.");
    this.scheduleStartupBootstrap("startup");
  }
  async onunload() {
    this.isUnloading = true;
    this.clearDeferredStartupWork();
    this.stopSettingsEventStream();
    this.stopAllRoomEventStreams();
    await this.crdtManager.disconnect();
    await this.persistNow();
    await this.flushLogFile();
  }
  getSettings() {
    return this.data.settings;
  }
  getCurrentUser() {
    return this.data.session?.user ?? null;
  }
  getRoomList() {
    return [...this.roomList];
  }
  getRoomCardStates() {
    const roomsById = new Map(this.roomList.map((room) => [room.workspace.id, room]));
    const orderedRoomIds = [
      ...this.roomList.map((room) => room.workspace.id),
      ...Object.entries(this.data.settings.roomBindings).filter(([roomId, binding]) => binding.downloaded && !roomsById.has(roomId)).map(([roomId]) => roomId)
    ];
    return orderedRoomIds.map((roomId) => {
      const room = roomsById.get(roomId) ?? {
        workspace: {
          id: roomId,
          name: this.getStoredRoomBinding(roomId)?.folderName || roomId
        },
        membershipRole: "member",
        createdAt: "",
        memberCount: 0,
        inviteEnabled: false,
        publication: createDefaultRoomPublicationState(roomId)
      };
      const folderName = this.getResolvedRoomFolderName(room.workspace.id, room.workspace.name);
      const binding = this.getStoredRoomBinding(room.workspace.id);
      const localRoot = getRoomRoot(this.data.settings.syncRoot, folderName);
      const roomSync = getRoomSyncState(this.data.sync, room.workspace.id);
      const runtime = this.roomRuntime.get(room.workspace.id);
      const treeStore = runtime?.treeStore ?? null;
      const markdownEntries = treeStore?.getEntries().filter((entry) => !entry.deleted && entry.kind === "markdown") ?? [];
      const cachedMarkdownCount = markdownEntries.filter((entry) => this.hasPersistedCrdtCache(entry.id)).length;
      const binaryTransferLabel = this.formatRoomBinaryTransferLabel(room.workspace.id);
      return {
        room,
        folderName,
        downloaded: Boolean(binding?.downloaded),
        localRoot,
        folderExists: Boolean(localRoot && this.app.vault.getAbstractFileByPath(localRoot)),
        streamStatus: runtime?.streamStatus ?? "stopped",
        lastCursorLabel: roomSync.lastCursor === null ? "none" : String(roomSync.lastCursor),
        lastSnapshotLabel: roomSync.lastSnapshotAt ?? "never",
        entryCount: treeStore?.getEntries().length ?? 0,
        markdownEntryCount: markdownEntries.length,
        cachedMarkdownCount,
        crdtCacheLabel: this.formatRoomCrdtCacheLabel(runtime?.markdownBootstrap, markdownEntries.length, cachedMarkdownCount),
        binaryTransferLabel,
        invite: this.roomInvites.get(room.workspace.id) ?? null,
        publication: normalizeRoomPublicationState(room.publication, room.workspace.id)
      };
    });
  }
  getManagedUsers() {
    return [...this.managedUsers];
  }
  getAdminRooms() {
    return [...this.adminRoomList];
  }
  getAdminSelectedRoomId() {
    return this.adminSelectedRoomId;
  }
  setAdminSelectedRoomId(roomId) {
    this.adminSelectedRoomId = roomId.trim();
    this.adminRoomMembers = [];
    this.requestSettingsRender();
  }
  getAdminRoomMembers() {
    return [...this.adminRoomMembers];
  }
  getRoomMembers(workspaceId) {
    return [...this.roomMembersCache.get(workspaceId) ?? []];
  }
  getProfileDraftDisplayName() {
    return this.profileDraftDisplayName || this.data.session?.user?.displayName || "";
  }
  getPresenceColor() {
    const configured = this.data.settings.presenceColor.trim();
    if (configured) {
      return configured;
    }
    const currentUser = this.getCurrentUser();
    return currentUser ? buildPresenceColor(currentUser.id) : null;
  }
  async updatePresenceColor(color) {
    const normalizedColor = normalizePresenceColor(color);
    await this.updateSettings({
      presenceColor: normalizedColor
    });
    await this.crdtManager.refreshPresencePreferences();
    this.requestSettingsRender();
  }
  setProfileDraftDisplayName(displayName) {
    this.profileDraftDisplayName = displayName;
  }
  getPasswordChangeDraft() {
    return { ...this.passwordChangeDraft };
  }
  updatePasswordChangeDraft(update) {
    this.passwordChangeDraft = {
      ...this.passwordChangeDraft,
      ...update
    };
  }
  getCreateRoomDraft() {
    return { ...this.createRoomDraft };
  }
  updateCreateRoomDraft(update) {
    this.createRoomDraft = {
      ...this.createRoomDraft,
      ...update
    };
  }
  getJoinRoomDraft() {
    return { ...this.joinRoomDraft };
  }
  updateJoinRoomDraft(update) {
    this.joinRoomDraft = {
      ...this.joinRoomDraft,
      ...update
    };
  }
  getManagedUserDraft() {
    return { ...this.managedUserDraft };
  }
  updateManagedUserDraft(update) {
    this.managedUserDraft = {
      ...this.managedUserDraft,
      ...update
    };
  }
  getAdminRoomMemberDraft() {
    return { ...this.adminRoomMemberDraft };
  }
  updateAdminRoomMemberDraft(update) {
    this.adminRoomMemberDraft = {
      ...this.adminRoomMemberDraft,
      ...update
    };
  }
  canCurrentUserCreateRooms() {
    const user = this.getCurrentUser();
    if (!user) {
      return false;
    }
    return user.isAdmin || user.globalRole === "admin" || user.globalRole === "writer";
  }
  getStatusSnapshot() {
    const currentUser = this.data.session?.user ?? null;
    const downloadedRooms = this.getDownloadedRooms();
    const activeStreams = [...this.roomRuntime.values()].filter((runtime) => runtime.streamStatus === "open").length;
    const crdtState = this.crdtManager.getState();
    return {
      userLabel: currentUser ? `${currentUser.displayName} (@${currentUser.username})` : "not authenticated",
      globalRoleLabel: currentUser?.globalRole ?? "none",
      isAdmin: Boolean(currentUser?.isAdmin),
      downloadedRoomCount: downloadedRooms.length,
      activeStreamCount: activeStreams,
      crdtLabel: crdtState ? `${crdtState.status} for ${crdtState.filePath}` : "inactive (open a markdown note inside a downloaded room folder)",
      persistentLogPath: this.getPersistentLogFilePath(),
      recentLogs: this.data.logs.slice(-12).map((entry) => {
        return `[${entry.at}] ${entry.scope}/${entry.level}: ${entry.message}`;
      })
    };
  }
  requestSettingsRender() {
    this.settingsTab?.requestRender();
  }
  async activateSettingsPanelRealtime() {
    if (!this.getCurrentUser()) {
      this.stopSettingsEventStream();
      this.requestSettingsRender();
      return;
    }
    await this.loadSettingsPanelSnapshot();
    this.startSettingsEventStream(null);
  }
  deactivateSettingsPanelRealtime() {
    this.stopSettingsEventStream();
    this.requestSettingsRender();
  }
  async loadSettingsPanelSnapshot() {
    if (!this.getCurrentUser()) {
      this.requestSettingsRender();
      return;
    }
    try {
      await this.fetchCurrentUser(false, false);
    } catch (error) {
      this.handleError("Settings initial load failed", error, false);
      return;
    }
    try {
      await this.refreshOwnerRoomInvites(false);
    } catch (error) {
      this.handleError("Invite auto-refresh failed", error, false);
    }
    if (this.getCurrentUser()?.isAdmin && this.adminSelectedRoomId) {
      try {
        await this.refreshAdminRoomMembers(false, this.adminSelectedRoomId, false);
      } catch (error) {
        this.handleError("Admin room members auto-refresh failed", error, false);
      }
    }
    this.requestSettingsRender();
  }
  async updateSettings(update) {
    this.data.settings = {
      ...this.data.settings,
      ...update,
      serverUrl: ROLAY_SERVER_URL,
      deviceName: ROLAY_DEVICE_NAME,
      autoConnect: ROLAY_AUTO_CONNECT,
      roomBindings: {
        ...this.data.settings.roomBindings,
        ...update.roomBindings ?? {}
      }
    };
    this.data.settings.serverUrl = normalizeServerUrl(ROLAY_SERVER_URL);
    this.data.settings.syncRoot = this.data.settings.syncRoot.trim();
    await this.persistNow();
    this.updateStatusBar();
  }
  async setRoomFolderName(workspaceId, folderName) {
    const binding = this.getStoredRoomBinding(workspaceId);
    if (binding?.downloaded) {
      throw this.notifyError("Folder name is locked after the room has been downloaded.");
    }
    await this.saveRoomBinding(workspaceId, {
      folderName: folderName.trim(),
      downloaded: Boolean(binding?.downloaded)
    });
  }
  async loginWithSettings(showNotice = true, resumeRooms = true) {
    const { username, password } = this.data.settings;
    if (!username || !password) {
      throw this.notifyError("Username and password are required before login.");
    }
    try {
      const response = await this.apiClient.login({
        username,
        password,
        deviceName: ROLAY_DEVICE_NAME
      });
      await this.applySessionUser(response.user);
      await this.refreshPostAuthState();
      if (resumeRooms) {
        await this.resumeDownloadedRooms("login");
      }
      this.recordLog("auth", `Logged in as ${response.user.username}.`);
      if (showNotice) {
        new import_obsidian9.Notice(`Rolay login successful for ${response.user.username}.`);
      }
      this.updateStatusBar();
    } catch (error) {
      this.handleError("Login failed", error);
      throw error;
    }
  }
  async refreshSession(showNotice = true) {
    try {
      await this.apiClient.refresh();
      await this.fetchCurrentUser(false);
      this.recordLog("auth", "Session tokens refreshed.");
      if (showNotice) {
        new import_obsidian9.Notice("Rolay session refreshed.");
      }
      this.updateStatusBar();
    } catch (error) {
      this.handleError("Refresh failed", error);
      throw error;
    }
  }
  async logout() {
    this.stopSettingsEventStream();
    this.stopAllRoomEventStreams();
    await this.crdtManager.disconnect();
    for (const localPath of [...this.binaryTransferState.keys()]) {
      this.invalidateBinarySyncToken(localPath);
    }
    for (const localPath of [...this.binaryTransferState.keys()]) {
      await this.cancelBinaryTransferForLocalPath(localPath, "logout");
    }
    this.binaryTransferState.clear();
    this.binarySyncTokens.clear();
    this.binarySyncPathsByToken.clear();
    this.roomRuntime.clear();
    this.roomInvites.clear();
    this.roomList = [];
    this.adminRoomList = [];
    this.managedUsers = [];
    this.adminSelectedRoomId = "";
    this.adminRoomMembers = [];
    this.data.session = null;
    this.resetProfileDraft();
    this.clearPasswordChangeDraft();
    this.clearRoomDrafts();
    this.clearManagedUserDraft();
    this.clearAdminRoomMemberDraft();
    this.recordLog("auth", "Session cleared.");
    await this.persistNow();
    this.updateStatusBar();
  }
  async fetchCurrentUser(showNotice = false, logActivity = true) {
    const response = await this.apiClient.getCurrentUser();
    await this.applySessionUser(response.user);
    await this.refreshPostAuthState(logActivity);
    if (logActivity) {
      this.recordLog("auth", `Loaded current user ${response.user.username}.`);
    }
    if (showNotice) {
      new import_obsidian9.Notice(`Current Rolay user: ${response.user.displayName}`);
    }
    return response.user;
  }
  async updateOwnDisplayName() {
    const displayName = this.getProfileDraftDisplayName().trim();
    if (!displayName) {
      throw this.notifyError("Display name is required.");
    }
    try {
      const response = await this.apiClient.updateCurrentUserProfile({ displayName });
      await this.applySessionUser(response.user);
      await this.crdtManager.refreshPresencePreferences();
      this.recordLog("auth", `Updated display name to ${response.user.displayName}.`);
      new import_obsidian9.Notice(`Rolay display name updated to ${response.user.displayName}.`);
    } catch (error) {
      this.handleError("Display name update failed", error);
      throw error;
    }
  }
  async changeOwnPassword() {
    if (!this.getCurrentUser()) {
      throw this.notifyError("Log into Rolay before changing your password.");
    }
    const currentPassword = this.passwordChangeDraft.currentPassword;
    const newPassword = this.passwordChangeDraft.newPassword;
    const confirmPassword = this.passwordChangeDraft.confirmPassword;
    if (!currentPassword) {
      throw this.notifyError("Current password is required.");
    }
    if (!newPassword) {
      throw this.notifyError("New password is required.");
    }
    if (!confirmPassword) {
      throw this.notifyError("Confirm the new password.");
    }
    if (newPassword !== confirmPassword) {
      throw this.notifyError("New password confirmation does not match.");
    }
    if (newPassword === currentPassword) {
      throw this.notifyError("New password must be different from the current password.");
    }
    try {
      const response = await this.apiClient.changeCurrentUserPassword({
        currentPassword,
        newPassword
      });
      this.resetProfileDraft();
      this.clearPasswordChangeDraft();
      await this.updateSettings({
        password: newPassword
      });
      this.recordLog("auth", `Changed password for ${response.user.username}. Session tokens were rotated.`);
      new import_obsidian9.Notice("Rolay password updated. The current session was rotated.");
    } catch (error) {
      const friendlyMessage = this.getPasswordChangeErrorMessage(error);
      if (friendlyMessage) {
        this.recordLog("error", `Password change failed: ${friendlyMessage}`, "error");
        new import_obsidian9.Notice(friendlyMessage);
        throw new Error(friendlyMessage);
      }
      this.handleError("Password change failed", error);
      throw error;
    }
  }
  async refreshRooms(showNotice = false, logActivity = true) {
    const response = await this.apiClient.listRooms();
    this.roomList = [...response.workspaces].map(normalizeRoomListItem).sort(compareRoomsByName);
    await this.reconcileLocalRoomFolders();
    this.reconcileInviteCache();
    if (logActivity) {
      this.recordLog("rooms", `Loaded ${this.roomList.length} room(s).`);
    }
    if (showNotice) {
      new import_obsidian9.Notice(`Loaded ${this.roomList.length} Rolay room(s).`);
    }
    this.updateStatusBar();
    return this.getRoomList();
  }
  async createRoomFromDraft() {
    if (!this.canCurrentUserCreateRooms()) {
      throw this.notifyError("Only writer/admin users can create rooms.");
    }
    const name = this.createRoomDraft.name.trim();
    if (!name) {
      throw this.notifyError("Room name is required.");
    }
    try {
      await this.ensureAuthenticated(true);
      const response = await this.apiClient.createRoom({ name });
      this.clearCreateRoomDraft();
      await this.refreshRooms(false);
      this.recordLog("rooms", `Created room ${response.workspace.name} (${response.workspace.id}).`);
      new import_obsidian9.Notice(`Rolay room created: ${response.workspace.name}`);
    } catch (error) {
      this.handleError("Room creation failed", error);
      throw error;
    }
  }
  async joinRoomFromDraft() {
    const code = this.joinRoomDraft.code.trim();
    if (!code) {
      throw this.notifyError("Invite key is required.");
    }
    try {
      await this.ensureAuthenticated(true);
      const response = await this.apiClient.joinRoom({ code });
      this.clearJoinRoomDraft();
      await this.refreshRooms(false);
      this.recordLog("rooms", `Joined room ${response.workspace.name} (${response.workspace.id}).`);
      new import_obsidian9.Notice(`Joined Rolay room: ${response.workspace.name}`);
    } catch (error) {
      this.handleError("Join room failed", error);
      throw error;
    }
  }
  async createRoomFromPrompt() {
    const name = await openTextInputModal(this.app, {
      title: "Create Rolay Room",
      label: "Room name",
      placeholder: "Math Group",
      submitText: "Create",
      description: "Writers and admins can create rooms. The room folder is not downloaded automatically."
    });
    if (!name) {
      return;
    }
    this.updateCreateRoomDraft({ name });
    await this.createRoomFromDraft();
  }
  async joinRoomFromPrompt() {
    const code = await openTextInputModal(this.app, {
      title: "Join Rolay Room",
      label: "Invite key",
      placeholder: "paste invite key",
      submitText: "Join",
      description: "Joining happens only by invite key or through admin membership management."
    });
    if (!code) {
      return;
    }
    this.updateJoinRoomDraft({ code });
    await this.joinRoomFromDraft();
  }
  async downloadRoom(workspaceId) {
    const room = this.requireRoom(workspaceId);
    const folderName = this.requireFolderNameForRoom(room.workspace.id, room.workspace.name);
    const localRoot = getRoomRoot(this.data.settings.syncRoot, folderName);
    if (this.isFolderNameUsedByAnotherRoom(room.workspace.id, folderName)) {
      throw this.notifyError(`Another room is already bound to the folder name "${folderName}".`);
    }
    if (localRoot && this.app.vault.getAbstractFileByPath(localRoot)) {
      throw this.notifyError(`Vault already contains the folder "${localRoot}". Choose another folder name before downloading.`);
    }
    await this.saveRoomBinding(room.workspace.id, {
      folderName,
      downloaded: true
    });
    try {
      await this.connectRoom(room.workspace.id, false, "download");
      this.recordLog("rooms", `Installed room ${room.workspace.name} into ${localRoot}.`);
      new import_obsidian9.Notice(`Rolay room installed: ${room.workspace.name}`);
    } catch (error) {
      this.handleError("Room download failed", error);
      throw error;
    }
  }
  async connectRoom(workspaceId, showNotice = true, reason = "manual-connect") {
    const room = this.requireDownloadedRoom(workspaceId);
    const runtime = this.ensureRoomRuntime(room.workspace.id);
    runtime.streamStatus = "connecting";
    this.updateStatusBar();
    this.scheduleExplorerLoadingDecorations();
    await this.refreshRoomSnapshot(room.workspace.id, reason);
    if (!this.isRoomSyncActive(room.workspace.id)) {
      return;
    }
    await this.startRoomEventStream(room.workspace.id);
    this.scheduleSnapshotRefresh(room.workspace.id, "post-connect-binary-followup");
    this.scheduleBackgroundMarkdownRefresh(
      room.workspace.id,
      "post-connect-background-refresh",
      _RolayPlugin.ROOM_MARKDOWN_REFRESH_AFTER_SNAPSHOT_MS,
      true
    );
    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile && this.isLocalPathInDownloadedRoom(activeFile.path, room.workspace.id)) {
      await this.bindActiveMarkdownToCrdt();
    }
    if (showNotice) {
      new import_obsidian9.Notice(`Rolay room connected: ${room.workspace.name}`);
    }
  }
  async disconnectRoom(workspaceId, showNotice = true) {
    const room = this.requireDownloadedRoom(workspaceId);
    this.stopRoomEventStream(room.workspace.id);
    await this.cancelRoomBinaryTransfers(room.workspace.id, "disconnect");
    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile && this.isLocalPathInDownloadedRoom(activeFile.path, room.workspace.id)) {
      await this.crdtManager.goOffline();
      this.updateStatusBar();
    }
    if (showNotice) {
      new import_obsidian9.Notice(`Rolay room disconnected: ${room.workspace.name}`);
    }
  }
  async installRoom(workspaceId, folderName) {
    const room = this.requireRoom(workspaceId);
    const nextFolderName = normalizeRoomFolderName(folderName || room.workspace.name);
    if (!isValidRoomFolderName(nextFolderName)) {
      throw this.notifyError("Room folder name must be non-empty and must not contain '/' or '\\'.");
    }
    if (this.isFolderNameUsedByAnotherRoom(room.workspace.id, nextFolderName)) {
      throw this.notifyError(`Another room is already bound to the folder name "${nextFolderName}".`);
    }
    await this.saveRoomBinding(room.workspace.id, {
      folderName: nextFolderName,
      downloaded: false
    });
    await this.downloadRoom(room.workspace.id);
  }
  async renameInstalledRoomFolder(workspaceId, folderName) {
    const room = this.requireDownloadedRoom(workspaceId);
    const currentFolderName = this.getResolvedRoomFolderName(room.workspace.id, room.workspace.name);
    const nextFolderName = normalizeRoomFolderName(folderName || room.workspace.name);
    if (!isValidRoomFolderName(nextFolderName)) {
      throw this.notifyError("Room folder name must be non-empty and must not contain '/' or '\\'.");
    }
    if (nextFolderName === currentFolderName) {
      return;
    }
    if (this.isFolderNameUsedByAnotherRoom(room.workspace.id, nextFolderName)) {
      throw this.notifyError(`Another room is already bound to the folder name "${nextFolderName}".`);
    }
    const currentRoot = getRoomRoot(this.data.settings.syncRoot, currentFolderName);
    const nextRoot = getRoomRoot(this.data.settings.syncRoot, nextFolderName);
    const currentFolder = this.app.vault.getAbstractFileByPath(currentRoot);
    const nextFolder = this.app.vault.getAbstractFileByPath(nextRoot);
    if (!currentFolder) {
      await this.deactivateRoomDownload(room.workspace.id, false);
      throw this.notifyError("The local room folder is missing. The room was detached from the vault.");
    }
    if (nextFolder && nextFolder.path !== currentRoot) {
      throw this.notifyError(`Vault already contains the folder "${nextRoot}". Choose another folder name.`);
    }
    await this.fileBridge.runWithSuppressedPaths([currentRoot, nextRoot], async () => {
      await this.app.fileManager.renameFile(currentFolder, nextRoot);
    });
    await this.saveRoomBinding(room.workspace.id, {
      folderName: nextFolderName,
      downloaded: true
    });
    await this.bindActiveMarkdownToCrdt();
    this.recordLog("rooms", `Renamed local room folder for ${room.workspace.id} from ${currentFolderName} to ${nextFolderName}.`);
    new import_obsidian9.Notice(`Rolay room folder renamed to ${nextFolderName}.`);
  }
  async refreshRoomInvite(workspaceId, showNotice = true, logActivity = true) {
    const room = this.requireOwnerRoom(workspaceId);
    const response = await this.apiClient.getRoomInvite(room.workspace.id);
    this.roomInvites.set(room.workspace.id, response.invite);
    this.patchInviteEnabled(room.workspace.id, response.invite.enabled);
    if (logActivity) {
      this.recordLog("invite", `Loaded invite state for ${room.workspace.id}.`);
    }
    if (showNotice) {
      new import_obsidian9.Notice(`Invite key loaded for ${room.workspace.name}.`);
    }
    return response.invite;
  }
  async setRoomInviteEnabled(workspaceId, enabled) {
    const room = this.requireOwnerRoom(workspaceId);
    try {
      const response = await this.apiClient.updateRoomInviteState(room.workspace.id, { enabled });
      this.roomInvites.set(room.workspace.id, response.invite);
      this.patchInviteEnabled(room.workspace.id, response.invite.enabled);
      this.recordLog("invite", `${enabled ? "Enabled" : "Disabled"} invite key for ${room.workspace.id}.`);
      new import_obsidian9.Notice(`Invite key ${enabled ? "enabled" : "disabled"} for ${room.workspace.name}.`);
    } catch (error) {
      this.handleError("Invite state update failed", error);
      throw error;
    }
  }
  async regenerateRoomInvite(workspaceId) {
    const room = this.requireOwnerRoom(workspaceId);
    try {
      const response = await this.apiClient.regenerateRoomInvite(room.workspace.id);
      this.roomInvites.set(room.workspace.id, response.invite);
      this.patchInviteEnabled(room.workspace.id, response.invite.enabled);
      this.recordLog("invite", `Regenerated invite key for ${room.workspace.id}.`);
      new import_obsidian9.Notice(`Invite key regenerated for ${room.workspace.name}.`);
    } catch (error) {
      this.handleError("Invite regenerate failed", error);
      throw error;
    }
  }
  getPublicSiteUrl() {
    const normalizedServerUrl = normalizeServerUrl(this.data.settings.serverUrl) || ROLAY_SERVER_URL;
    return `${normalizedServerUrl.replace(/\/+$/, "")}/`;
  }
  canCurrentUserManageRoomPublication(workspaceId) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      return false;
    }
    if (currentUser.isAdmin) {
      return true;
    }
    return this.roomList.some((room) => {
      return room.workspace.id === workspaceId && room.membershipRole === "owner";
    });
  }
  async refreshRoomPublication(workspaceId, logActivity = false) {
    const response = await this.apiClient.getRoomPublication(workspaceId);
    const publication = normalizeRoomPublicationState(response.publication, workspaceId);
    this.patchRoomPublication(workspaceId, publication);
    if (logActivity) {
      this.recordLog(
        "publication",
        `Loaded publication state for ${workspaceId}: ${publication.enabled ? "public" : "private"}.`
      );
    }
    this.updateStatusBar();
    this.requestSettingsRender();
    return publication;
  }
  async setRoomPublicationEnabled(workspaceId, enabled) {
    this.requireRoomPublicationManager(workspaceId);
    const roomName = this.getKnownRoomName(workspaceId);
    try {
      const response = await this.apiClient.updateRoomPublication(workspaceId, { enabled });
      const publication = normalizeRoomPublicationState(response.publication, workspaceId);
      this.patchRoomPublication(workspaceId, publication);
      this.recordLog(
        "publication",
        `${enabled ? "Enabled" : "Disabled"} public publication for ${workspaceId}.`
      );
      this.updateStatusBar();
      new import_obsidian9.Notice(
        enabled ? `Room is now public on the read-only site: ${roomName}` : `Room is now private again: ${roomName}`
      );
      this.requestSettingsRender();
    } catch (error) {
      this.handleError("Room publication update failed", error);
      throw error;
    }
  }
  async refreshManagedUsers(showNotice = false, logActivity = true) {
    this.requireAdmin();
    const response = await this.apiClient.listManagedUsers();
    this.managedUsers = [...response.users].sort((left, right) => left.username.localeCompare(right.username));
    if (logActivity) {
      this.recordLog("admin", `Loaded ${this.managedUsers.length} managed user(s).`);
    }
    if (showNotice) {
      new import_obsidian9.Notice(`Loaded ${this.managedUsers.length} managed user(s).`);
    }
    return this.getManagedUsers();
  }
  async createManagedUserFromDraft() {
    this.requireAdmin();
    const username = this.managedUserDraft.username.trim();
    const password = this.managedUserDraft.password;
    const displayName = this.managedUserDraft.displayName?.trim() || void 0;
    const globalRole = this.managedUserDraft.globalRole ?? "reader";
    if (!username || !password) {
      throw this.notifyError("Username and temporary password are required.");
    }
    try {
      const response = await this.apiClient.createManagedUser({
        username,
        password,
        displayName,
        globalRole
      });
      this.recordLog(
        "admin",
        `Created managed user ${response.user.username} (${response.user.globalRole}).`
      );
      new import_obsidian9.Notice(`Rolay account created: ${response.user.username}`);
      this.clearManagedUserDraft();
      await this.refreshManagedUsers(false);
    } catch (error) {
      this.handleError("Managed user creation failed", error);
      throw error;
    }
  }
  async deleteManagedUser(userId) {
    this.requireAdmin();
    try {
      const response = await this.apiClient.deleteManagedUser(userId);
      this.managedUsers = this.managedUsers.filter((user) => user.id !== userId);
      this.recordLog("admin", `Deleted managed user ${response.user.username}.`);
      new import_obsidian9.Notice(`Rolay account deleted: ${response.user.username}`);
      if (this.adminRoomMembers.some((member) => member.user.id === userId)) {
        await this.refreshAdminRoomMembers(false);
      }
    } catch (error) {
      this.handleError("Managed user deletion failed", error);
      throw error;
    }
  }
  async refreshAdminRooms(showNotice = false, logActivity = true) {
    this.requireAdmin();
    const response = await this.apiClient.listAllRoomsAsAdmin();
    this.adminRoomList = [...response.workspaces].map(normalizeAdminRoomListItem).sort(compareRoomsByName);
    if (!this.adminSelectedRoomId && this.adminRoomList.length === 1) {
      this.adminSelectedRoomId = this.adminRoomList[0].workspace.id;
    } else if (this.adminSelectedRoomId && !this.adminRoomList.some((room) => room.workspace.id === this.adminSelectedRoomId)) {
      this.adminSelectedRoomId = "";
      this.adminRoomMembers = [];
    }
    if (logActivity) {
      this.recordLog("admin", `Loaded ${this.adminRoomList.length} room(s) in admin scope.`);
    }
    if (showNotice) {
      new import_obsidian9.Notice(`Loaded ${this.adminRoomList.length} admin room(s).`);
    }
    return this.getAdminRooms();
  }
  async refreshAdminRoomMembers(showNotice = false, roomId = this.adminSelectedRoomId, logActivity = true) {
    this.requireAdmin();
    const targetRoomId = roomId.trim();
    if (!targetRoomId) {
      throw this.notifyError("Select an admin room first.");
    }
    const members = await this.loadRoomMembersForUi(targetRoomId, logActivity);
    this.adminSelectedRoomId = targetRoomId;
    this.adminRoomMembers = [...members];
    if (logActivity) {
      this.recordLog("admin", `Loaded ${this.adminRoomMembers.length} member(s) for room ${targetRoomId}.`);
    }
    if (showNotice) {
      new import_obsidian9.Notice(`Loaded ${this.adminRoomMembers.length} room member(s).`);
    }
    return this.getAdminRoomMembers();
  }
  async loadRoomMembersForUi(workspaceId, logActivity = false) {
    try {
      const response = this.data.session?.user?.isAdmin ? await this.apiClient.listRoomMembersAsAdmin(workspaceId) : await this.apiClient.listRoomMembers(workspaceId);
      const members = [...response.members].sort(compareRoomMembers);
      this.roomMembersCache.set(workspaceId, members);
      if (this.adminSelectedRoomId === workspaceId) {
        this.adminRoomMembers = [...members];
      }
      if (logActivity) {
        this.recordLog("rooms", `Loaded ${members.length} member(s) for room ${workspaceId}.`);
      }
      this.requestSettingsRender();
      return [...members];
    } catch (error) {
      this.recordLog(
        "rooms",
        `Failed to load members for room ${workspaceId}: ${error instanceof Error ? error.message : String(error)}`,
        "error"
      );
      return this.getRoomMembers(workspaceId);
    }
  }
  async addUserToSelectedAdminRoom() {
    this.requireAdmin();
    const roomId = this.adminSelectedRoomId.trim();
    if (!roomId) {
      throw this.notifyError("Select an admin room first.");
    }
    const username = this.adminRoomMemberDraft.username.trim();
    const role = this.adminRoomMemberDraft.role ?? "member";
    if (!username) {
      throw this.notifyError("Username is required.");
    }
    try {
      const response = await this.apiClient.addRoomMemberAsAdmin(roomId, {
        username,
        role
      });
      this.recordLog(
        "admin",
        `Added ${response.user.username} to room ${response.workspace.id} as ${response.membership.role}.`
      );
      new import_obsidian9.Notice(`Added ${response.user.username} to ${response.workspace.name}.`);
      this.clearAdminRoomMemberDraft();
      await this.refreshAdminRoomMembers(false, roomId);
      await this.refreshAdminRooms(false);
      await this.refreshRooms(false);
    } catch (error) {
      this.handleError("Add room member failed", error);
      throw error;
    }
  }
  async deleteAdminRoom(roomId = this.adminSelectedRoomId) {
    this.requireAdmin();
    const targetRoomId = roomId.trim();
    if (!targetRoomId) {
      throw this.notifyError("Select an admin room first.");
    }
    try {
      const response = await this.apiClient.deleteRoomAsAdmin(targetRoomId);
      this.recordLog("admin", `Deleted room ${response.workspace.name} (${response.workspace.id}).`);
      new import_obsidian9.Notice(`Deleted Rolay room: ${response.workspace.name}`);
      await this.deactivateRoomDownload(targetRoomId);
      if (this.adminSelectedRoomId === targetRoomId) {
        this.adminSelectedRoomId = "";
        this.adminRoomMembers = [];
      }
      await this.refreshAdminRooms(false);
      await this.refreshRooms(false);
      this.updateStatusBar();
    } catch (error) {
      this.handleError("Delete room failed", error);
      throw error;
    }
  }
  async refreshRoomSnapshot(workspaceId, reason = "manual") {
    const runtime = this.ensureRoomRuntime(workspaceId);
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    if (runtime.snapshotRefreshInFlight) {
      runtime.snapshotRefreshQueuedReason = runtime.snapshotRefreshQueuedReason ?? reason;
      return;
    }
    runtime.snapshotRefreshInFlight = true;
    try {
      await this.performRoomSnapshotRefresh(workspaceId, reason);
    } catch (error) {
      if (this.shouldRetrySnapshotAfterAuthRecovery(error)) {
        try {
          await this.ensureAuthenticated(true);
          await this.performRoomSnapshotRefresh(workspaceId, `${reason}-auth-retry`);
          return;
        } catch (retryError) {
          this.handleError("Tree snapshot failed", retryError);
          throw retryError;
        }
      }
      this.handleError("Tree snapshot failed", error);
      throw error;
    } finally {
      runtime.snapshotRefreshInFlight = false;
      const queuedReason = runtime.snapshotRefreshQueuedReason;
      runtime.snapshotRefreshQueuedReason = null;
      if (queuedReason && this.isRoomSyncActive(workspaceId)) {
        this.scheduleSnapshotRefresh(workspaceId, queuedReason);
      }
    }
  }
  async performRoomSnapshotRefresh(workspaceId, reason) {
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    if (!this.hasUsableSessionTokens() && this.canAttemptAuth()) {
      await this.ensureAuthenticated(true);
    }
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    const room = this.requireDownloadedRoom(workspaceId);
    const runtime = this.ensureRoomRuntime(room.workspace.id);
    const previousEntries = runtime.treeStore.getEntries();
    const snapshot = await this.apiClient.getWorkspaceTree(room.workspace.id);
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    runtime.treeStore.applySnapshot(snapshot);
    this.confirmSnapshotPendingCreates(room.workspace.id, snapshot.entries);
    this.confirmSnapshotPendingDeletes(room.workspace.id, snapshot.entries);
    await this.fileBridge.applySnapshot(snapshot, previousEntries);
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    this.scheduleExplorerLoadingDecorations();
    this.setRoomSyncState(room.workspace.id, {
      lastCursor: snapshot.cursor,
      lastSnapshotAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    this.recordLog(
      "tree",
      `Fetched snapshot for ${snapshot.workspace.name} with ${snapshot.entries.length} entries (${reason}).`
    );
    await this.bootstrapRoomMarkdownCache(room.workspace.id, snapshot.entries, reason);
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    await this.syncBinaryEntriesFromSnapshot(room.workspace.id, snapshot.entries, reason);
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    this.scheduleBackgroundMarkdownRefresh(
      room.workspace.id,
      "post-snapshot-background-refresh",
      _RolayPlugin.ROOM_MARKDOWN_REFRESH_AFTER_SNAPSHOT_MS,
      true
    );
    await this.reconcilePendingMarkdownCreates(room.workspace.id, reason);
    await this.reconcilePendingMarkdownMerges(room.workspace.id, reason);
    await this.reconcilePendingBinaryWrites(room.workspace.id, reason);
    await this.persistNow();
    this.updateStatusBar();
    await this.bindActiveMarkdownToCrdt();
  }
  shouldRetrySnapshotAfterAuthRecovery(error) {
    if (!(error instanceof Error)) {
      return false;
    }
    const normalizedMessage = error.message.toLowerCase();
    return (normalizedMessage.includes("you are not authenticated yet") || normalizedMessage.includes("no refresh token is stored yet.")) && this.canAttemptAuth();
  }
  hasUsableSessionTokens() {
    return Boolean(
      this.data.session?.accessToken?.trim() || this.data.session?.refreshToken?.trim()
    );
  }
  async startRoomEventStream(workspaceId) {
    const room = this.requireDownloadedRoom(workspaceId);
    const runtime = this.ensureRoomRuntime(room.workspace.id);
    this.stopRoomEventStream(room.workspace.id);
    const generation = runtime.eventStreamGeneration + 1;
    runtime.eventStreamGeneration = generation;
    runtime.streamStatus = "connecting";
    this.updateStatusBar();
    this.scheduleExplorerLoadingDecorations();
    const roomSync = getRoomSyncState(this.data.sync, room.workspace.id);
    const treeCursor = runtime.treeStore.getCursor();
    if (treeCursor === null && roomSync.lastCursor === null) {
      await this.refreshRoomSnapshot(room.workspace.id, "pre-sse");
    }
    const cursor = runtime.treeStore.getCursor() ?? getRoomSyncState(this.data.sync, room.workspace.id).lastCursor;
    const stream = new WorkspaceEventStream(this.apiClient, (message) => {
      this.recordLog("sse", `[${room.workspace.id}] ${message}`);
    });
    runtime.eventStream = stream;
    stream.start(room.workspace.id, cursor, {
      onOpen: () => {
        if (runtime.eventStreamGeneration !== generation) {
          return;
        }
        this.recordLog("sse", `Subscribed to room ${room.workspace.id} events.`);
      },
      onEvent: async (event) => {
        if (runtime.eventStreamGeneration !== generation) {
          return;
        }
        const lastHandledEventId = runtime.lastHandledEventId ?? runtime.treeStore.getCursor();
        if (lastHandledEventId !== null && event.id <= lastHandledEventId) {
          return;
        }
        runtime.lastHandledEventId = event.id;
        runtime.treeStore.recordCursor(event.id);
        this.updateRoomSyncCursor(room.workspace.id, event.id);
        this.schedulePersist();
        this.recordLog("sse", `[${room.workspace.id}] Event ${event.id}: ${event.event}`);
        if (event.event.startsWith("tree.") || event.event.startsWith("blob.")) {
          this.scheduleSnapshotRefresh(room.workspace.id, "event-stream");
        }
      },
      onStatusChange: (status) => {
        if (runtime.eventStreamGeneration !== generation) {
          return;
        }
        runtime.streamStatus = status;
        this.updateStatusBar();
        this.scheduleExplorerLoadingDecorations();
        this.scheduleNotePresenceUiRefresh();
      },
      onError: (error) => {
        if (runtime.eventStreamGeneration !== generation) {
          return;
        }
        this.handleError(`Workspace event stream error (${room.workspace.id})`, error, false);
      }
    });
    this.startRoomNotePresenceStream(room.workspace.id);
  }
  stopRoomEventStream(workspaceId) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return;
    }
    if (runtime.snapshotRefreshHandle !== null) {
      window.clearTimeout(runtime.snapshotRefreshHandle);
      runtime.snapshotRefreshHandle = null;
    }
    runtime.snapshotRefreshQueuedReason = null;
    this.clearBackgroundMarkdownRefresh(workspaceId);
    this.clearLockedMarkdownBootstrapRetry(workspaceId, false);
    this.cancelRoomMarkdownBootstrap(workspaceId);
    runtime.eventStreamGeneration += 1;
    runtime.eventStream?.stop();
    runtime.eventStream = null;
    this.stopRoomNotePresenceStream(workspaceId);
    runtime.streamStatus = "stopped";
    runtime.lastHandledEventId = runtime.treeStore.getCursor();
    this.updateStatusBar();
    this.scheduleImmediateExplorerLoadingDecorations();
    this.refreshNotePresenceUiNow();
  }
  stopAllRoomEventStreams() {
    for (const workspaceId of this.roomRuntime.keys()) {
      this.stopRoomEventStream(workspaceId);
    }
  }
  startRoomNotePresenceStream(workspaceId) {
    const runtime = this.ensureRoomRuntime(workspaceId);
    this.stopRoomNotePresenceStream(workspaceId);
    const generation = runtime.notePresenceStreamGeneration + 1;
    runtime.notePresenceStreamGeneration = generation;
    const stream = new NotePresenceEventStream(this.apiClient, (message) => {
      this.recordLog("presence", `[${workspaceId}] ${message}`);
    });
    runtime.notePresenceStream = stream;
    stream.start(workspaceId, {
      onOpen: () => {
        if (runtime.notePresenceStreamGeneration !== generation) {
          return;
        }
        this.recordLog("presence", `Subscribed to note presence for room ${workspaceId}.`);
      },
      onEvent: async (event) => {
        if (runtime.notePresenceStreamGeneration !== generation) {
          return;
        }
        if (event.event === "ping") {
          return;
        }
        if (event.event === "presence.snapshot") {
          this.applyNotePresenceSnapshot(workspaceId, event.data);
          return;
        }
        if (event.event === "note.presence.updated") {
          this.applyNotePresenceUpdate(workspaceId, event.data);
        }
      },
      onError: (error) => {
        if (runtime.notePresenceStreamGeneration !== generation) {
          return;
        }
        this.handleError(`Note presence stream error (${workspaceId})`, error, false);
      }
    });
  }
  stopRoomNotePresenceStream(workspaceId) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return;
    }
    runtime.notePresenceStreamGeneration += 1;
    runtime.notePresenceStream?.stop();
    runtime.notePresenceStream = null;
    runtime.notePresenceByEntryId.clear();
    runtime.noteAnonymousViewerCountByEntryId.clear();
    this.scheduleImmediateExplorerLoadingDecorations();
    this.refreshNotePresenceUiNow();
  }
  startSettingsEventStream(cursor) {
    this.stopSettingsEventStream();
    if (!this.getCurrentUser()) {
      return;
    }
    const generation = this.settingsEventStreamGeneration + 1;
    this.settingsEventStreamGeneration = generation;
    this.settingsEventCursor = cursor;
    const stream = new SettingsEventStream(this.apiClient, (message) => {
      this.recordLog("settings-sse", message);
    });
    this.settingsEventStream = stream;
    stream.start(cursor, {
      onOpen: () => {
        if (this.settingsEventStreamGeneration !== generation) {
          return;
        }
        this.recordLog("settings-sse", "Subscribed to settings events.");
      },
      onEvent: async (event) => {
        if (this.settingsEventStreamGeneration !== generation) {
          return;
        }
        await this.handleSettingsEventStreamEvent(event);
      },
      onStatusChange: (status) => {
        if (this.settingsEventStreamGeneration !== generation) {
          return;
        }
        this.settingsEventStreamStatus = status;
        this.updateStatusBar();
      },
      onError: (error) => {
        if (this.settingsEventStreamGeneration !== generation) {
          return;
        }
        this.handleError("Settings event stream error", error, false);
        if (this.shouldRecoverSettingsStream(error)) {
          void this.recoverSettingsEventStream();
        }
      }
    });
  }
  stopSettingsEventStream() {
    this.settingsEventStreamGeneration += 1;
    this.settingsEventStream?.stop();
    this.settingsEventStream = null;
    this.settingsEventStreamStatus = "stopped";
  }
  async handleSettingsEventStreamEvent(event) {
    const envelope = normalizeSettingsEventEnvelope(event);
    const eventId = event.id > 0 ? event.id : envelope.eventId;
    if (Number.isFinite(eventId) && eventId > 0) {
      this.settingsEventCursor = eventId;
    }
    if (envelope.type === "ping") {
      return;
    }
    if (envelope.type === "stream.ready") {
      this.recordLog("settings-sse", `Settings stream ready at event ${this.settingsEventCursor ?? envelope.eventId}.`);
      this.requestSettingsRender();
      return;
    }
    this.recordLog(
      "settings-sse",
      `Event ${this.settingsEventCursor ?? envelope.eventId}: ${envelope.type} (${envelope.scope}).`
    );
    switch (envelope.type) {
      case "auth.me.updated":
        await this.applySettingsUserUpdate(extractUserFromSettingsPayload(envelope.payload));
        break;
      case "room.created":
      case "room.updated":
        await this.applySettingsRoomUpsert(envelope.scope, envelope.payload);
        break;
      case "room.deleted":
        await this.applySettingsRoomDelete(envelope.scope, envelope.payload);
        break;
      case "room.membership.changed":
        await this.applySettingsRoomMembershipChanged(envelope.payload);
        break;
      case "room.invite.updated":
        this.applySettingsInviteUpdate(extractInviteFromSettingsPayload(envelope.payload));
        break;
      case "room.publication.updated":
        this.applySettingsRoomPublicationUpdate(extractRoomPublicationUpdatedPayload(envelope.payload));
        break;
      case "admin.user.created":
      case "admin.user.updated":
        this.applySettingsManagedUserUpsert(extractManagedUserFromSettingsPayload(envelope.payload));
        break;
      case "admin.user.deleted":
        this.applySettingsManagedUserDelete(extractUserIdFromSettingsPayload(envelope.payload));
        break;
      case "admin.room.members.updated":
        this.applySettingsAdminRoomMembersUpdate(extractAdminRoomMembersPayload(envelope.payload));
        break;
      default:
        break;
    }
    this.requestSettingsRender();
  }
  async recoverSettingsEventStream() {
    if (this.settingsStreamRecoveryInFlight) {
      return;
    }
    this.settingsStreamRecoveryInFlight = true;
    try {
      this.recordLog("settings-sse", "Settings SSE resume was reset. Refetching settings snapshot.");
      this.stopSettingsEventStream();
      this.settingsEventCursor = null;
      await this.loadSettingsPanelSnapshot();
      if (this.getCurrentUser()) {
        this.startSettingsEventStream(null);
      }
    } finally {
      this.settingsStreamRecoveryInFlight = false;
    }
  }
  shouldRecoverSettingsStream(error) {
    return /HTTP (400|404|409|410)\b/.test(error.message);
  }
  async bindActiveMarkdownToCrdt() {
    try {
      const activeFile = this.app.workspace.getActiveFile();
      await this.crdtManager.bindToFile(activeFile);
      await this.syncMarkdownLockForLocalPath(activeFile?.path ?? null);
      this.updateStatusBar();
    } catch (error) {
      this.handleError("CRDT bind failed", error);
      throw error;
    }
  }
  async disconnectCrdt() {
    await this.crdtManager.disconnect();
    this.updateStatusBar();
  }
  async bootstrapSync(reason) {
    if (!this.canAttemptAuth()) {
      this.recordLog(
        "startup",
        `Skipping ${reason} sync bootstrap because auth settings are incomplete.`
      );
      return;
    }
    try {
      await this.ensureAuthenticated(true, !reason.includes("startup"));
      await this.resumeDownloadedRooms(reason);
    } catch (error) {
      this.handleError("Startup sync failed", error, false);
    }
  }
  scheduleStartupBootstrap(reason) {
    this.app.workspace.onLayoutReady(() => {
      if (this.isUnloading || this.startupBootstrapHandle !== null) {
        return;
      }
      this.recordLog(
        "startup",
        `Deferring ${reason} sync bootstrap until after the Obsidian workspace finishes opening.`
      );
      this.startupBootstrapHandle = window.setTimeout(() => {
        this.startupBootstrapHandle = null;
        if (this.isUnloading) {
          return;
        }
        void this.bootstrapSync(`${reason}-deferred`);
      }, _RolayPlugin.STARTUP_BOOTSTRAP_DELAY_MS);
    });
  }
  clearDeferredStartupWork() {
    if (this.startupBootstrapHandle !== null) {
      window.clearTimeout(this.startupBootstrapHandle);
      this.startupBootstrapHandle = null;
    }
    for (const handle of this.startupRoomResumeHandles) {
      window.clearTimeout(handle);
    }
    this.startupRoomResumeHandles.clear();
  }
  async ensureAuthenticated(silent = false, resumeRoomsAfterLogin = true) {
    if (this.data.session?.refreshToken) {
      await this.refreshSession(!silent);
      return;
    }
    await this.loginWithSettings(!silent, resumeRoomsAfterLogin);
  }
  canAttemptAuth() {
    const { serverUrl, username, password } = this.data.settings;
    return Boolean(serverUrl && (username && password || this.data.session?.refreshToken));
  }
  registerCommands() {
    this.addCommand({
      id: "rolay-login",
      name: "Login with configured credentials",
      callback: () => {
        void this.loginWithSettings();
      }
    });
    this.addCommand({
      id: "rolay-refresh-session",
      name: "Refresh current Rolay session",
      callback: () => {
        void this.refreshSession();
      }
    });
    this.addCommand({
      id: "rolay-reload-current-user",
      name: "Reload current Rolay user profile",
      callback: () => {
        void this.fetchCurrentUser(true);
      }
    });
    this.addCommand({
      id: "rolay-refresh-room-list",
      name: "Refresh room list",
      callback: () => {
        void this.refreshRooms(true);
      }
    });
    this.addCommand({
      id: "rolay-connect-active-note",
      name: "Connect active markdown note to Rolay CRDT",
      callback: () => {
        void this.bindActiveMarkdownToCrdt();
      }
    });
    this.addCommand({
      id: "rolay-create-room",
      name: "Create room",
      callback: () => {
        void this.createRoomFromPrompt();
      }
    });
    this.addCommand({
      id: "rolay-join-room",
      name: "Join room by invite key",
      callback: () => {
        void this.joinRoomFromPrompt();
      }
    });
  }
  async handleFileOpen(file) {
    await this.crdtManager.bindToFile(file);
    if (file && this.findLockedMarkdownPathAtOrBelow(file.path)) {
      const room = this.resolveDownloadedRoomByLocalPath(file.path);
      if (room) {
        this.scheduleSnapshotRefresh(room.workspaceId, "priority-open");
      }
    }
    await this.syncMarkdownLockForLocalPath(file?.path ?? null);
    this.updateStatusBar();
    this.refreshNotePresenceUiNow();
    this.scheduleImmediateExplorerLoadingDecorations();
  }
  async handleVaultCreate(file) {
    try {
      await this.fileBridge.handleVaultCreate(file);
    } catch (error) {
      this.handleError(`Local create sync failed for ${file.path}`, error, false);
    }
  }
  async handleVaultModify(file) {
    try {
      if (!(file instanceof import_obsidian9.TFile) || isMarkdownPath(file.path)) {
        return;
      }
      await this.fileBridge.handleVaultModify(file);
    } catch (error) {
      this.handleError(`Local binary modify sync failed for ${file.path}`, error, false);
    }
  }
  async handleVaultRename(file, oldPath) {
    try {
      if (await this.revertLockedMarkdownRename(file, oldPath)) {
        await this.bindActiveMarkdownToCrdt();
        return;
      }
      if (await this.revertDownloadingBinaryRename(file, oldPath)) {
        await this.bindActiveMarkdownToCrdt();
        return;
      }
      await this.refreshMarkdownContentBeforeRoomExit(file, oldPath);
      this.forgetRecentRemoteHintsForLocalPath(oldPath, true);
      this.forgetRecentRemoteHintsForLocalPath(file.path, true);
      this.handlePendingMarkdownCreateRename(oldPath, file.path);
      this.handlePendingMarkdownMergeRename(oldPath, file.path);
      await this.handlePendingBinaryWriteRename(oldPath, file.path);
      await this.fileBridge.handleVaultRename(file, oldPath);
      await this.bindActiveMarkdownToCrdt();
    } catch (error) {
      this.handleError(`Local rename sync failed for ${oldPath}`, error, false);
    }
  }
  async handleVaultDelete(file) {
    try {
      if (await this.restoreLockedMarkdownDelete(file)) {
        await this.bindActiveMarkdownToCrdt();
        return;
      }
      if (await this.restoreDownloadingBinaryDelete(file)) {
        await this.bindActiveMarkdownToCrdt();
        return;
      }
      this.forgetRecentRemoteHintsForLocalPath(file.path, true);
      this.clearPendingMarkdownCreate(file.path);
      this.clearPendingMarkdownMergesForLocalPath(file.path);
      await this.clearPendingBinaryWriteForLocalPath(file.path, true);
      if (await this.handlePotentialRoomRootRemoval(file.path, "delete")) {
        return;
      }
      await this.fileBridge.handleVaultDelete(file);
      await this.bindActiveMarkdownToCrdt();
    } catch (error) {
      this.handleError(`Local delete sync failed for ${file.path}`, error, false);
    }
  }
  async refreshPostAuthState(logActivity = true) {
    try {
      await this.refreshRooms(false, logActivity);
    } catch (error) {
      this.handleError("Room list refresh failed", error, false);
    }
    if (this.data.session?.user?.isAdmin) {
      try {
        await this.refreshManagedUsers(false, logActivity);
      } catch (error) {
        this.handleError("Admin user list refresh failed", error, false);
      }
      try {
        await this.refreshAdminRooms(false, logActivity);
      } catch (error) {
        this.handleError("Admin room list refresh failed", error, false);
      }
    } else {
      this.clearAdminState();
    }
  }
  async resumeDownloadedRooms(reason) {
    await this.reconcileLocalRoomFolders();
    const downloadedRooms = this.getDownloadedRooms();
    if (downloadedRooms.length === 0) {
      this.recordLog("startup", `No downloaded rooms to resume (${reason}).`);
      return;
    }
    if (reason.includes("startup")) {
      this.recordLog(
        "startup",
        `Scheduling ${downloadedRooms.length} downloaded room(s) for staggered resume (${reason}).`
      );
      downloadedRooms.forEach((room, index) => {
        const handle = window.setTimeout(() => {
          this.startupRoomResumeHandles.delete(handle);
          if (this.isUnloading) {
            return;
          }
          const runtime = this.roomRuntime.get(room.workspaceId);
          if (runtime && runtime.streamStatus !== "stopped") {
            return;
          }
          void this.connectRoom(room.workspaceId, false, reason).catch((error) => {
            this.handleError(`Startup room resume failed (${room.workspaceId})`, error, false);
          });
        }, index * _RolayPlugin.STARTUP_ROOM_CONNECT_STAGGER_MS);
        this.startupRoomResumeHandles.add(handle);
      });
      return;
    }
    for (const room of downloadedRooms) {
      await this.connectRoom(room.workspaceId, false, reason);
    }
  }
  async reconcileDownloadedRooms() {
    const availableRoomIds = new Set(this.roomList.map((room) => room.workspace.id));
    for (const [roomId, binding] of Object.entries(this.data.settings.roomBindings)) {
      if (!binding.downloaded || availableRoomIds.has(roomId)) {
        continue;
      }
      this.stopRoomEventStream(roomId);
      this.recordLog(
        "rooms",
        `Room ${roomId} is not present in the current room list. Keeping the local folder binding and downloaded flag intact.`
      );
    }
  }
  reconcileInviteCache() {
    const ownerRoomIds = new Set(
      this.roomList.filter((room) => room.membershipRole === "owner").map((room) => room.workspace.id)
    );
    for (const roomId of [...this.roomInvites.keys()]) {
      if (!ownerRoomIds.has(roomId)) {
        this.roomInvites.delete(roomId);
      }
    }
  }
  scheduleSnapshotRefresh(workspaceId, reason = "event-stream") {
    const runtime = this.ensureRoomRuntime(workspaceId);
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    if (runtime.snapshotRefreshInFlight) {
      runtime.snapshotRefreshQueuedReason = runtime.snapshotRefreshQueuedReason ?? reason;
      return;
    }
    if (runtime.snapshotRefreshHandle !== null) {
      runtime.snapshotRefreshQueuedReason = runtime.snapshotRefreshQueuedReason ?? reason;
      return;
    }
    runtime.snapshotRefreshHandle = window.setTimeout(() => {
      runtime.snapshotRefreshHandle = null;
      void this.refreshRoomSnapshot(workspaceId, reason);
    }, 400);
  }
  clearBackgroundMarkdownRefresh(workspaceId) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return;
    }
    if (runtime.backgroundMarkdownRefreshHandle !== null) {
      window.clearTimeout(runtime.backgroundMarkdownRefreshHandle);
      runtime.backgroundMarkdownRefreshHandle = null;
    }
    runtime.backgroundMarkdownRefreshInFlight = false;
  }
  scheduleBackgroundMarkdownRefresh(workspaceId, reason, delayMs = _RolayPlugin.ROOM_MARKDOWN_REFRESH_INTERVAL_MS, replaceExisting = false) {
    const runtime = this.ensureRoomRuntime(workspaceId);
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    if (runtime.backgroundMarkdownRefreshHandle !== null) {
      if (!replaceExisting) {
        return;
      }
      window.clearTimeout(runtime.backgroundMarkdownRefreshHandle);
      runtime.backgroundMarkdownRefreshHandle = null;
    }
    runtime.backgroundMarkdownRefreshHandle = window.setTimeout(() => {
      runtime.backgroundMarkdownRefreshHandle = null;
      void this.runBackgroundMarkdownRefresh(workspaceId, reason);
    }, Math.max(250, delayMs));
  }
  async runBackgroundMarkdownRefresh(workspaceId, reason) {
    const runtime = this.roomRuntime.get(workspaceId);
    const binding = this.getStoredRoomBinding(workspaceId);
    if (!runtime || !binding?.downloaded || runtime.streamStatus === "stopped") {
      return;
    }
    if (runtime.backgroundMarkdownRefreshInFlight) {
      this.scheduleBackgroundMarkdownRefresh(workspaceId, reason);
      return;
    }
    if (runtime.markdownBootstrap.status === "loading") {
      this.scheduleBackgroundMarkdownRefresh(workspaceId, reason);
      return;
    }
    runtime.backgroundMarkdownRefreshInFlight = true;
    try {
      await this.refreshClosedRoomMarkdownContent(workspaceId, reason);
    } catch (error) {
      const message = getErrorMessage(error);
      if (isStaleMarkdownBootstrapError(error)) {
        this.recordLog(
          "crdt",
          `[${workspaceId}] Background markdown refresh saw a stale markdown entry; refreshing snapshot before retry.`
        );
        this.scheduleSnapshotRefresh(workspaceId, "markdown-bootstrap-stale-entry");
      } else if (isRetryableBackgroundMarkdownError(error)) {
        this.recordLog(
          "crdt",
          `[${workspaceId}] Background markdown refresh will retry after transient failure: ${message}`
        );
      } else {
        this.recordLog(
          "crdt",
          `[${workspaceId}] Background markdown refresh failed: ${message}`,
          "error"
        );
      }
    } finally {
      runtime.backgroundMarkdownRefreshInFlight = false;
      const currentRuntime = this.roomRuntime.get(workspaceId);
      const currentBinding = this.getStoredRoomBinding(workspaceId);
      if (!currentRuntime || !currentBinding?.downloaded || currentRuntime.streamStatus === "stopped") {
        return;
      }
      this.scheduleBackgroundMarkdownRefresh(workspaceId, "background-markdown");
    }
  }
  recordLog(scope, message, level = "info") {
    const entry = {
      at: (/* @__PURE__ */ new Date()).toISOString(),
      level,
      scope,
      message
    };
    this.data.logs = [
      ...trimRecentLogEntries(this.data.logs, Date.now(), _RolayPlugin.LOG_FILE_RETENTION_MS, 99),
      entry
    ];
    this.pendingLogLines.push(formatPersistentLogLine(entry));
    this.schedulePersist();
    this.scheduleLogFlush();
    console[level === "error" ? "error" : "info"](`[Rolay] ${scope}: ${message}`);
    this.updateStatusBar();
  }
  handleError(title, error, showNotice = true) {
    const message = error instanceof Error ? error.message : String(error);
    this.recordLog("error", `${title}: ${message}`, "error");
    if (showNotice) {
      new import_obsidian9.Notice(`${title}: ${message}`);
    }
  }
  notifyError(message) {
    new import_obsidian9.Notice(message);
    return new Error(message);
  }
  schedulePersist() {
    if (this.persistHandle !== null) {
      window.clearTimeout(this.persistHandle);
    }
    this.persistHandle = window.setTimeout(() => {
      this.persistHandle = null;
      void this.persistNow();
    }, 300);
  }
  async persistNow() {
    if (this.persistHandle !== null) {
      window.clearTimeout(this.persistHandle);
      this.persistHandle = null;
    }
    await this.saveData(this.data);
    await this.flushLogFile();
  }
  scheduleLogFlush() {
    if (this.logFlushHandle !== null) {
      return;
    }
    this.logFlushHandle = window.setTimeout(() => {
      this.logFlushHandle = null;
      void this.flushLogFile();
    }, 250);
  }
  async flushLogFile() {
    if (this.logFlushHandle !== null) {
      window.clearTimeout(this.logFlushHandle);
      this.logFlushHandle = null;
    }
    const nextBatch = this.pendingLogLines.splice(0).join("");
    if (!nextBatch) {
      await this.logFileWrite;
      return;
    }
    this.logFileWrite = this.logFileWrite.then(async () => {
      try {
        await this.ensurePersistentLogFolderExists();
        const adapter = this.app.vault.adapter;
        const logFilePath = this.getPersistentLogFilePath();
        if (await adapter.exists(logFilePath)) {
          await adapter.append(logFilePath, nextBatch);
        } else {
          await adapter.write(logFilePath, nextBatch);
        }
        await this.trimPersistentLogFileIfNeeded(logFilePath);
      } catch (error) {
        console.error("[Rolay] failed to write persistent log file", error);
      }
    });
    await this.logFileWrite;
  }
  getPersistentLogFilePath() {
    return (0, import_obsidian9.normalizePath)(`${this.app.vault.configDir}/plugins/${this.manifest.id}/${_RolayPlugin.LOG_FILE_NAME}`);
  }
  getPersistentLogFolderPath() {
    return (0, import_obsidian9.normalizePath)(`${this.app.vault.configDir}/plugins/${this.manifest.id}`);
  }
  getBinaryTransferFolderPath() {
    return (0, import_obsidian9.normalizePath)(
      `${this.app.vault.configDir}/plugins/${this.manifest.id}/${_RolayPlugin.BINARY_TRANSFER_PARTS_FOLDER}`
    );
  }
  getBinaryTransferWorkspaceFolderPath(workspaceId) {
    return (0, import_obsidian9.normalizePath)(`${this.getBinaryTransferFolderPath()}/${sanitizePathSegment(workspaceId)}`);
  }
  getBinaryDownloadPartPath(workspaceId, entryId, hash) {
    const normalizedHash = normalizeSha256Hash(hash) ?? hash;
    const safeHash = sanitizePathSegment(normalizedHash.replace(/[:/+=]/g, "-")).slice(0, 48) || "blob";
    return (0, import_obsidian9.normalizePath)(
      `${this.getBinaryTransferWorkspaceFolderPath(workspaceId)}/${sanitizePathSegment(entryId)}-${safeHash}.part`
    );
  }
  async ensureAdapterFolderExists(folderPath) {
    const adapter = this.app.vault.adapter;
    const segments = (0, import_obsidian9.normalizePath)(folderPath).split("/").filter(Boolean);
    let currentPath = "";
    for (const segment of segments) {
      currentPath = currentPath ? `${currentPath}/${segment}` : segment;
      if (await adapter.exists(currentPath)) {
        continue;
      }
      await adapter.mkdir(currentPath);
    }
  }
  async ensurePersistentLogFolderExists() {
    await this.ensureAdapterFolderExists(this.getPersistentLogFolderPath());
  }
  async trimPersistentLogFileIfNeeded(logFilePath) {
    const stat = await this.app.vault.adapter.stat(logFilePath);
    if (!stat || stat.size <= 0) {
      return;
    }
    const fileContents = await this.app.vault.adapter.read(logFilePath);
    const nowMs = Date.now();
    const trimmedByAge = trimPersistentLogByAge(fileContents, _RolayPlugin.LOG_FILE_RETENTION_MS, nowMs);
    const trimmedBySize = trimPersistentLogBySize(
      trimmedByAge,
      _RolayPlugin.MAX_LOG_FILE_BYTES,
      _RolayPlugin.LOG_FILE_TRIM_TARGET_BYTES,
      nowMs
    );
    if (trimmedBySize !== fileContents) {
      await this.app.vault.adapter.write(logFilePath, trimmedBySize);
    }
  }
  async getAdapterFileSize(path) {
    try {
      const stat = await this.app.vault.adapter.stat((0, import_obsidian9.normalizePath)(path));
      return stat?.size ?? 0;
    } catch {
      return 0;
    }
  }
  async removeAdapterPathIfExists(path) {
    const normalizedPath = (0, import_obsidian9.normalizePath)(path);
    try {
      if (!await this.app.vault.adapter.exists(normalizedPath)) {
        return;
      }
      await this.app.vault.adapter.remove(normalizedPath);
    } catch {
    }
  }
  async writeBinaryTransferPart(partPath, data, append2) {
    await this.ensureAdapterFolderExists(getParentPath2(partPath));
    if (append2) {
      await this.app.vault.adapter.appendBinary((0, import_obsidian9.normalizePath)(partPath), data);
      return;
    }
    await this.app.vault.adapter.writeBinary((0, import_obsidian9.normalizePath)(partPath), data);
  }
  async readBinaryTransferPart(partPath) {
    try {
      if (!await this.app.vault.adapter.exists((0, import_obsidian9.normalizePath)(partPath))) {
        return null;
      }
      return await this.app.vault.adapter.readBinary((0, import_obsidian9.normalizePath)(partPath));
    } catch {
      return null;
    }
  }
  requireAdmin() {
    if (!this.data.session?.user?.isAdmin) {
      throw this.notifyError("This action is admin-only.");
    }
  }
  requireRoom(workspaceId) {
    const room = this.roomList.find((item) => item.workspace.id === workspaceId);
    if (!room) {
      throw this.notifyError("Room is not available in the current membership list.");
    }
    return room;
  }
  requireDownloadedRoom(workspaceId) {
    const room = this.requireRoom(workspaceId);
    const binding = this.getStoredRoomBinding(workspaceId);
    if (!binding?.downloaded) {
      throw new Error("Download the room folder first.");
    }
    return room;
  }
  requireOwnerRoom(workspaceId) {
    const room = this.requireRoom(workspaceId);
    if (room.membershipRole !== "owner") {
      throw this.notifyError("Only room owners can manage invite keys.");
    }
    return room;
  }
  requireRoomPublicationManager(workspaceId) {
    if (this.data.session?.user?.isAdmin) {
      return;
    }
    const room = this.requireRoom(workspaceId);
    if (room.membershipRole !== "owner") {
      throw this.notifyError("Only room owners and admins can change room publication.");
    }
  }
  getKnownRoomName(workspaceId) {
    return this.roomList.find((room) => room.workspace.id === workspaceId)?.workspace.name ?? this.adminRoomList.find((room) => room.workspace.id === workspaceId)?.workspace.name ?? this.getStoredRoomBinding(workspaceId)?.folderName ?? workspaceId;
  }
  getStoredRoomBinding(workspaceId) {
    return getRoomBindingSettings(this.data.settings, workspaceId);
  }
  getResolvedRoomFolderName(workspaceId, fallbackRoomName) {
    const binding = this.getStoredRoomBinding(workspaceId);
    return normalizeRoomFolderName(binding?.folderName || fallbackRoomName);
  }
  getDownloadedFolderName(workspaceId) {
    const binding = this.getStoredRoomBinding(workspaceId);
    if (!binding?.downloaded) {
      return null;
    }
    const room = this.roomList.find((item) => item.workspace.id === workspaceId);
    return normalizeRoomFolderName(binding.folderName || room?.workspace.name || workspaceId);
  }
  getDownloadedRooms() {
    return Object.entries(this.data.settings.roomBindings).filter(([, binding]) => Boolean(binding.downloaded)).map(([workspaceId, binding]) => {
      const room = this.roomList.find((item) => item.workspace.id === workspaceId);
      return {
        workspaceId,
        folderName: normalizeRoomFolderName(binding.folderName || room?.workspace.name || workspaceId)
      };
    });
  }
  ensureRoomRuntime(workspaceId) {
    const existing = this.roomRuntime.get(workspaceId);
    if (existing) {
      return existing;
    }
    const runtime = {
      treeStore: new TreeStore(),
      eventStream: null,
      eventStreamGeneration: 0,
      notePresenceStream: null,
      notePresenceStreamGeneration: 0,
      notePresenceByEntryId: /* @__PURE__ */ new Map(),
      noteAnonymousViewerCountByEntryId: /* @__PURE__ */ new Map(),
      streamStatus: "stopped",
      lastHandledEventId: null,
      snapshotRefreshHandle: null,
      snapshotRefreshInFlight: false,
      snapshotRefreshQueuedReason: null,
      backgroundMarkdownRefreshHandle: null,
      backgroundMarkdownRefreshInFlight: false,
      lockedBootstrapRetryHandle: null,
      lockedBootstrapRetryAttempt: 0,
      markdownBootstrap: {
        status: "idle",
        totalTargets: 0,
        completedTargets: 0,
        totalBytes: 0,
        completedBytes: 0,
        documentBytesByEntryId: /* @__PURE__ */ new Map(),
        completedEntryIds: /* @__PURE__ */ new Set(),
        hydratedTargets: 0,
        lockedLocalPaths: /* @__PURE__ */ new Set(),
        lastRunAt: null,
        lastError: null,
        rerunRequested: false,
        runToken: 0
      }
    };
    this.roomRuntime.set(workspaceId, runtime);
    return runtime;
  }
  getRoomStore(workspaceId) {
    return this.roomRuntime.get(workspaceId)?.treeStore ?? null;
  }
  resolveDownloadedRoomByLocalPath(localPath) {
    const downloadedRooms = this.getDownloadedRooms().sort(
      (left, right) => right.folderName.length - left.folderName.length
    );
    for (const room of downloadedRooms) {
      if (toServerPathForRoom(localPath, this.data.settings.syncRoot, room.folderName) !== null) {
        return room;
      }
    }
    return null;
  }
  findLockedMarkdownPathAtOrBelow(localPath) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    for (const [workspaceId, runtime] of this.roomRuntime.entries()) {
      for (const lockedPath of runtime.markdownBootstrap.lockedLocalPaths) {
        if (lockedPath === normalizedLocalPath || lockedPath.startsWith(`${normalizedLocalPath}/`) || normalizedLocalPath.startsWith(`${lockedPath}/`)) {
          return {
            workspaceId,
            lockedPath
          };
        }
      }
    }
    return null;
  }
  async shouldKeepMarkdownLocked(workspaceId, entry, localPath, persistedState = null) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    const waitingForRemoteSettle = this.isWaitingForRemoteMarkdownSettle(workspaceId, normalizedLocalPath);
    const activeCrdtState = this.crdtManager.getState();
    if (activeCrdtState?.entryId === entry.id && (activeCrdtState.status === "synced" || activeCrdtState.status === "offline")) {
      return false;
    }
    if (this.hasPendingLocalCreate(workspaceId, entry.path)) {
      return true;
    }
    if (this.data.pendingMarkdownCreates[normalizedLocalPath]) {
      return true;
    }
    if (this.data.pendingMarkdownMerges[entry.id]) {
      return true;
    }
    const localFile = this.app.vault.getAbstractFileByPath(normalizedLocalPath);
    if (!(localFile instanceof import_obsidian9.TFile) || localFile.extension !== "md") {
      return true;
    }
    const nextState = persistedState ?? this.getPersistedCrdtState(entry.id);
    if (!nextState) {
      return true;
    }
    const openViews = getMarkdownViewsForFile(this.app, normalizedLocalPath);
    const currentText = openViews.length > 0 ? openViews[0].editor.getValue() : await this.app.vault.cachedRead(localFile);
    const expectedText = decodeMarkdownTextState(nextState);
    if (waitingForRemoteSettle && expectedText.length === 0) {
      return true;
    }
    return currentText !== expectedText;
  }
  async refreshRoomMarkdownLocks(workspaceId, entries) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return;
    }
    runtime.markdownBootstrap.lockedLocalPaths.clear();
    for (const entry of entries) {
      if (entry.deleted || entry.kind !== "markdown") {
        continue;
      }
      const localPath = this.fileBridge.toLocalPath(workspaceId, entry.path) ?? entry.path;
      if (await this.shouldKeepMarkdownLocked(workspaceId, entry, localPath)) {
        runtime.markdownBootstrap.lockedLocalPaths.add((0, import_obsidian9.normalizePath)(localPath));
      }
    }
    if (runtime.markdownBootstrap.lockedLocalPaths.size === 0) {
      this.clearLockedMarkdownBootstrapRetry(workspaceId, false);
    } else if (runtime.markdownBootstrap.status !== "loading") {
      this.scheduleLockedMarkdownBootstrapRetry(workspaceId, "locked-retry");
    }
    this.scheduleExplorerLoadingDecorations();
  }
  async syncMarkdownLockForEntry(workspaceId, entry, localPath, persistedState = null) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return;
    }
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    if (await this.shouldKeepMarkdownLocked(workspaceId, entry, normalizedLocalPath, persistedState)) {
      runtime.markdownBootstrap.lockedLocalPaths.add(normalizedLocalPath);
    } else {
      runtime.markdownBootstrap.lockedLocalPaths.delete(normalizedLocalPath);
      this.clearPendingRemoteMarkdownSettle(workspaceId, normalizedLocalPath);
    }
    if (runtime.markdownBootstrap.lockedLocalPaths.size === 0) {
      this.clearLockedMarkdownBootstrapRetry(workspaceId, false);
    } else if (runtime.markdownBootstrap.status !== "loading") {
      this.scheduleLockedMarkdownBootstrapRetry(workspaceId, "locked-retry");
    }
    this.scheduleExplorerLoadingDecorations();
  }
  async syncMarkdownLockForLocalPath(localPath) {
    if (!localPath) {
      this.scheduleExplorerLoadingDecorations();
      return;
    }
    const room = this.resolveDownloadedRoomByLocalPath(localPath);
    if (!room) {
      this.scheduleExplorerLoadingDecorations();
      return;
    }
    const serverPath = toServerPathForRoom(localPath, this.data.settings.syncRoot, room.folderName);
    if (!serverPath) {
      this.scheduleExplorerLoadingDecorations();
      return;
    }
    const entry = this.getRoomStore(room.workspaceId)?.getEntryByPath(serverPath) ?? null;
    if (!entry || entry.kind !== "markdown" || entry.deleted) {
      this.scheduleExplorerLoadingDecorations();
      return;
    }
    await this.syncMarkdownLockForEntry(room.workspaceId, entry, localPath);
  }
  scheduleExplorerLoadingDecorations() {
    if (this.explorerDecorationHandle !== null) {
      return;
    }
    this.explorerDecorationHandle = window.setTimeout(() => {
      this.explorerDecorationHandle = null;
      this.refreshExplorerLoadingDecorations();
    }, 80);
  }
  scheduleImmediateExplorerLoadingDecorations() {
    if (this.explorerDecorationHandle !== null) {
      window.clearTimeout(this.explorerDecorationHandle);
      this.explorerDecorationHandle = null;
    }
    if (this.explorerDecorationFrame !== null) {
      return;
    }
    this.explorerDecorationFrame = window.requestAnimationFrame(() => {
      this.explorerDecorationFrame = null;
      this.refreshExplorerLoadingDecorations();
    });
  }
  refreshNotePresenceUiNow() {
    if (this.notePresenceUiHandle !== null) {
      window.clearTimeout(this.notePresenceUiHandle);
      this.notePresenceUiHandle = null;
    }
    this.refreshNotePresenceUi();
  }
  refreshExplorerDecorationsAfterFolderToggle() {
    this.scheduleImmediateExplorerLoadingDecorations();
    if (this.explorerToggleRefreshHandle !== null) {
      return;
    }
    this.explorerToggleRefreshHandle = window.setTimeout(() => {
      this.explorerToggleRefreshHandle = null;
      this.scheduleImmediateExplorerLoadingDecorations();
    }, 32);
  }
  ensureExplorerMutationObserver() {
    if (this.explorerMutationObserver || typeof MutationObserver === "undefined") {
      return;
    }
    const container = this.app.workspace.containerEl;
    if (!container) {
      return;
    }
    this.explorerMutationObserver = new MutationObserver((mutations) => {
      if (this.shouldRefreshExplorerDecorationsForMutations(mutations)) {
        this.refreshExplorerDecorationsAfterFolderToggle();
      }
    });
    this.explorerMutationObserver.observe(container, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["class", "aria-expanded", "style"],
      attributeOldValue: true
    });
  }
  scheduleNotePresenceUiRefresh() {
    if (this.notePresenceUiHandle !== null) {
      return;
    }
    this.notePresenceUiHandle = window.setTimeout(() => {
      this.notePresenceUiHandle = null;
      this.refreshNotePresenceUi();
    }, 80);
  }
  refreshNotePresenceUi() {
    for (const leaf of this.app.workspace.getLeavesOfType("markdown")) {
      const view = leaf.view;
      if (!(view instanceof import_obsidian9.MarkdownView)) {
        continue;
      }
      this.renderNotePresenceChipsForView(view);
    }
  }
  refreshExplorerLoadingDecorations() {
    const container = this.app.workspace.containerEl;
    if (!container) {
      return;
    }
    const loadingPaths = this.getLoadingExplorerPaths();
    const uploadingPaths = this.getUploadingExplorerPaths();
    const roomFolderStatuses = this.getRoomFolderExplorerStatuses();
    const pathElements = [...container.querySelectorAll("[data-path]")];
    const visibleExplorerPaths = this.getVisibleExplorerPathSet(pathElements);
    const transferBadges = this.getExplorerTransferBadges();
    const notePresenceBadges = this.getExplorerNotePresenceBadges(visibleExplorerPaths);
    const anonymousPresenceBadges = this.getExplorerAnonymousPresenceBadges(visibleExplorerPaths);
    for (const element2 of pathElements) {
      element2.classList.remove(
        "rolay-loading-path",
        "rolay-loading-ancestor",
        "rolay-uploading-path",
        "rolay-uploading-ancestor",
        "rolay-room-folder",
        "rolay-room-folder-disconnected",
        "rolay-room-folder-connecting",
        "rolay-room-folder-connected"
      );
      const dataPath = element2.getAttribute("data-path");
      if (!dataPath) {
        continue;
      }
      const normalizedPath = (0, import_obsidian9.normalizePath)(dataPath);
      const exactMatch = loadingPaths.has(normalizedPath);
      const descendantMatch = !exactMatch && [...loadingPaths].some((loadingPath) => {
        return loadingPath.startsWith(`${normalizedPath}/`);
      });
      const exactUploadingMatch = uploadingPaths.has(normalizedPath);
      const descendantUploadingMatch = !exactUploadingMatch && [...uploadingPaths].some((uploadingPath) => {
        return uploadingPath.startsWith(`${normalizedPath}/`);
      });
      const roomFolderStatus = roomFolderStatuses.get(normalizedPath) ?? null;
      if (exactMatch || descendantMatch) {
        element2.classList.add("rolay-loading-path");
      }
      if (descendantMatch) {
        element2.classList.add("rolay-loading-ancestor");
      }
      if (exactUploadingMatch || descendantUploadingMatch) {
        element2.classList.add("rolay-uploading-path");
      }
      if (descendantUploadingMatch) {
        element2.classList.add("rolay-uploading-ancestor");
      }
      if (roomFolderStatus) {
        element2.classList.add("rolay-room-folder");
        if (roomFolderStatus === "open") {
          element2.classList.add("rolay-room-folder-connected");
        } else if (roomFolderStatus === "stopped") {
          element2.classList.add("rolay-room-folder-disconnected");
        } else {
          element2.classList.add("rolay-room-folder-connecting");
        }
      }
      this.updateExplorerTransferBadge(
        element2,
        transferBadges.get(normalizedPath) ?? null
      );
      this.updateExplorerNotePresenceBadge(
        element2,
        notePresenceBadges.get(normalizedPath) ?? null
      );
      this.updateExplorerAnonymousPresenceBadge(
        element2,
        anonymousPresenceBadges.get(normalizedPath) ?? null
      );
    }
  }
  renderNotePresenceChipsForView(view) {
    const file = view.file;
    const host = this.findNotePresenceHost(view);
    if (!host) {
      this.removeNotePresenceBar(view);
      return;
    }
    const presence = file ? this.getNotePresenceForLocalPath(file.path) : {
      viewers: [],
      anonymousViewerCount: 0
    };
    if (presence.viewers.length === 0 && presence.anonymousViewerCount === 0) {
      this.removeNotePresenceBar(view);
      return;
    }
    let bar = view.containerEl.querySelector(".rolay-note-presence-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "rolay-note-presence-bar";
      host.parentElement?.insertBefore(bar, host);
    }
    const signature = presence.viewers.map((viewer) => `${viewer.presenceId}:${viewer.displayName}:${viewer.color}`).join("|") + `|anonymous:${presence.anonymousViewerCount}`;
    if (bar.dataset.signature === signature) {
      return;
    }
    bar.dataset.signature = signature;
    bar.replaceChildren(
      ...presence.viewers.map((viewer) => {
        const chip = document.createElement("span");
        chip.className = "rolay-note-presence-chip";
        chip.textContent = viewer.displayName;
        chip.style.setProperty("--rolay-note-presence-color", viewer.color);
        return chip;
      }),
      ...presence.anonymousViewerCount > 0 ? [this.createAnonymousPresenceChip(presence.anonymousViewerCount)] : []
    );
  }
  createAnonymousPresenceChip(count) {
    const chip = document.createElement("span");
    chip.className = "rolay-note-presence-chip rolay-note-presence-chip-anonymous";
    chip.setAttribute(
      "aria-label",
      count === 1 ? "1 anonymous public viewer" : `${count} anonymous public viewers`
    );
    const icon = document.createElement("span");
    icon.className = "rolay-note-presence-chip-icon";
    (0, import_obsidian9.setIcon)(icon, "eye");
    const label = document.createElement("span");
    label.textContent = String(count);
    chip.replaceChildren(icon, label);
    return chip;
  }
  removeNotePresenceBar(view) {
    view.containerEl.querySelector(".rolay-note-presence-bar")?.remove();
  }
  findNotePresenceHost(view) {
    const container = view.containerEl;
    return container.querySelector(".inline-title") ?? container.querySelector(".view-content .inline-title");
  }
  getExplorerNotePresenceBadges(visibleExplorerPaths) {
    const aggregate = /* @__PURE__ */ new Map();
    const downloadedRooms = new Map(
      this.getDownloadedRooms().map((room) => [room.workspaceId, room])
    );
    for (const [workspaceId, runtime] of this.roomRuntime.entries()) {
      const downloadedRoom = downloadedRooms.get(workspaceId);
      if (!downloadedRoom) {
        continue;
      }
      const roomRoot = (0, import_obsidian9.normalizePath)(getRoomRoot(this.data.settings.syncRoot, downloadedRoom.folderName));
      let localPresenceRolledUp = false;
      for (const [entryId, viewers] of runtime.notePresenceByEntryId.entries()) {
        const effectiveViewers = this.mergeLocalNotePresenceViewer(workspaceId, entryId, viewers);
        if (effectiveViewers.length === 0) {
          continue;
        }
        localPresenceRolledUp || (localPresenceRolledUp = this.isLocalNotePresenceForEntry(workspaceId, entryId));
        const entry = runtime.treeStore.getEntryById(entryId);
        if (!entry || entry.deleted || entry.kind !== "markdown") {
          continue;
        }
        const localPath = this.fileBridge.toLocalPath(workspaceId, entry.path);
        if (!localPath) {
          continue;
        }
        const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
        this.accumulateExplorerNotePresenceBadge(
          aggregate,
          this.getMinimalVisibleExplorerPresencePath(normalizedLocalPath, roomRoot, visibleExplorerPaths),
          effectiveViewers
        );
      }
      const localPresence = this.crdtManager.getLocalNotePresenceViewer();
      if (localPresence && localPresence.workspaceId === workspaceId && !localPresenceRolledUp && !runtime.notePresenceByEntryId.has(localPresence.entryId)) {
        const entry = runtime.treeStore.getEntryById(localPresence.entryId);
        const localPath = entry && !entry.deleted && entry.kind === "markdown" ? this.fileBridge.toLocalPath(workspaceId, entry.path) : null;
        if (localPath) {
          this.accumulateExplorerNotePresenceBadge(
            aggregate,
            this.getMinimalVisibleExplorerPresencePath((0, import_obsidian9.normalizePath)(localPath), roomRoot, visibleExplorerPaths),
            [localPresence]
          );
        }
      }
    }
    const badges = /* @__PURE__ */ new Map();
    for (const [localPath, state] of aggregate) {
      badges.set(localPath, {
        count: state.count,
        color: state.count === 1 ? state.soleColor ?? "var(--interactive-accent, #8b5cf6)" : "var(--interactive-accent, #8b5cf6)"
      });
    }
    return badges;
  }
  getExplorerAnonymousPresenceBadges(visibleExplorerPaths) {
    const aggregate = /* @__PURE__ */ new Map();
    const downloadedRooms = new Map(
      this.getDownloadedRooms().map((room) => [room.workspaceId, room])
    );
    for (const [workspaceId, runtime] of this.roomRuntime.entries()) {
      const downloadedRoom = downloadedRooms.get(workspaceId);
      if (!downloadedRoom) {
        continue;
      }
      const roomRoot = (0, import_obsidian9.normalizePath)(getRoomRoot(this.data.settings.syncRoot, downloadedRoom.folderName));
      for (const [entryId, anonymousViewerCount] of runtime.noteAnonymousViewerCountByEntryId.entries()) {
        if (anonymousViewerCount <= 0) {
          continue;
        }
        const entry = runtime.treeStore.getEntryById(entryId);
        if (!entry || entry.deleted || entry.kind !== "markdown") {
          continue;
        }
        const localPath = this.fileBridge.toLocalPath(workspaceId, entry.path);
        if (!localPath) {
          continue;
        }
        const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
        this.accumulateExplorerAnonymousPresenceBadge(
          aggregate,
          this.getMinimalVisibleExplorerPresencePath(normalizedLocalPath, roomRoot, visibleExplorerPaths),
          anonymousViewerCount
        );
      }
    }
    return new Map(
      [...aggregate.entries()].map(([localPath, count]) => [localPath, { count }])
    );
  }
  accumulateExplorerNotePresenceBadge(aggregate, localPath, viewers) {
    const existing = aggregate.get(localPath);
    const nextCount = (existing?.count ?? 0) + viewers.length;
    const nextSoleColor = nextCount === 1 ? viewers[0]?.color ?? existing?.soleColor ?? null : null;
    aggregate.set(localPath, {
      count: nextCount,
      soleColor: nextSoleColor
    });
  }
  accumulateExplorerAnonymousPresenceBadge(aggregate, localPath, anonymousViewerCount) {
    aggregate.set(localPath, (aggregate.get(localPath) ?? 0) + anonymousViewerCount);
  }
  mergeLocalNotePresenceViewer(workspaceId, entryId, viewers) {
    const merged = [...viewers];
    const localPresence = this.crdtManager.getLocalNotePresenceViewer();
    if (!localPresence || localPresence.workspaceId !== workspaceId || localPresence.entryId !== entryId) {
      return merged;
    }
    if (merged.some((viewer) => this.isSamePresenceViewer(viewer, localPresence))) {
      return merged;
    }
    merged.push(localPresence);
    merged.sort(compareNotePresenceViewers);
    return merged;
  }
  isLocalNotePresenceForEntry(workspaceId, entryId) {
    const localPresence = this.crdtManager.getLocalNotePresenceViewer();
    return Boolean(localPresence && localPresence.workspaceId === workspaceId && localPresence.entryId === entryId);
  }
  isSamePresenceViewer(viewer, localPresence) {
    if (viewer.presenceId === localPresence.presenceId) {
      return true;
    }
    const localClientId = localPresence.presenceId.split(":").pop();
    return Boolean(
      localClientId && viewer.userId === localPresence.userId && viewer.presenceId.endsWith(`:${localClientId}`)
    );
  }
  getVisibleExplorerPathSet(pathElements) {
    const visiblePaths = /* @__PURE__ */ new Set();
    for (const element2 of pathElements) {
      const dataPath = element2.getAttribute("data-path");
      if (!dataPath || !this.isExplorerDecorationElement(element2) || !this.isElementVisiblyRendered(element2)) {
        continue;
      }
      visiblePaths.add((0, import_obsidian9.normalizePath)(dataPath));
    }
    return visiblePaths;
  }
  getMinimalVisibleExplorerPresencePath(localPath, roomRoot, visibleExplorerPaths) {
    const normalizedRoomRoot = (0, import_obsidian9.normalizePath)(roomRoot);
    let candidate = (0, import_obsidian9.normalizePath)(localPath);
    while (candidate) {
      if ((candidate === normalizedRoomRoot || candidate.startsWith(`${normalizedRoomRoot}/`)) && visibleExplorerPaths.has(candidate)) {
        return candidate;
      }
      if (candidate === normalizedRoomRoot) {
        break;
      }
      const parentPath = getParentPath2(candidate);
      if (!parentPath || parentPath === candidate) {
        break;
      }
      candidate = parentPath;
    }
    return visibleExplorerPaths.has(normalizedRoomRoot) ? normalizedRoomRoot : (0, import_obsidian9.normalizePath)(localPath);
  }
  isExplorerDecorationElement(element2) {
    return Boolean(
      element2.closest(".nav-files-container") || element2.closest('.workspace-leaf-content[data-type="file-explorer"]') || element2.classList.contains("nav-file") || element2.classList.contains("nav-folder") || element2.classList.contains("nav-file-title") || element2.classList.contains("nav-folder-title") || element2.classList.contains("tree-item-self")
    );
  }
  isElementVisiblyRendered(element2) {
    return element2.getClientRects().length > 0;
  }
  shouldRefreshExplorerDecorationsForMutations(mutations) {
    for (const mutation of mutations) {
      if (mutation.type === "attributes") {
        const target2 = mutation.target;
        if (!(target2 instanceof HTMLElement) || !this.isExplorerDecorationElement(target2)) {
          continue;
        }
        if (mutation.attributeName === "class") {
          const previousClass = this.stripRolayDecorationClasses(mutation.oldValue ?? "");
          const currentClass = this.stripRolayDecorationClasses(target2.className);
          if (previousClass === currentClass) {
            continue;
          }
        }
        return true;
      }
      if (mutation.type !== "childList") {
        continue;
      }
      const target = mutation.target;
      if (!(target instanceof HTMLElement) || !this.isExplorerDecorationElement(target)) {
        continue;
      }
      const changedNodes = [...mutation.addedNodes, ...mutation.removedNodes];
      if (changedNodes.length === 0 || changedNodes.every((node) => this.isRolayDecorationNode(node))) {
        continue;
      }
      if (changedNodes.some((node) => this.isExplorerStructureNode(node))) {
        return true;
      }
    }
    return false;
  }
  stripRolayDecorationClasses(className) {
    return className.split(/\s+/).filter((classToken) => classToken && !classToken.startsWith("rolay-")).sort().join(" ");
  }
  isRolayDecorationNode(node) {
    if (!(node instanceof HTMLElement)) {
      return false;
    }
    return this.isRolayDecorationElement(node);
  }
  isRolayDecorationElement(element2) {
    return Boolean(
      element2.closest(
        ".rolay-note-presence-badge, .rolay-note-anonymous-presence-badge, .rolay-transfer-progress-badge"
      ) || [...element2.classList].some((className) => className.startsWith("rolay-"))
    );
  }
  isExplorerStructureNode(node) {
    if (!(node instanceof HTMLElement)) {
      return false;
    }
    return Boolean(
      node.matches?.("[data-path], .nav-file, .nav-folder, .nav-file-title, .nav-folder-title, .tree-item-self") || node.querySelector?.("[data-path], .nav-file, .nav-folder, .nav-file-title, .nav-folder-title, .tree-item-self")
    );
  }
  isExplorerFolderInteractionTarget(target) {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    const folderElement = target.closest(".nav-folder, .nav-folder-title");
    if (!folderElement) {
      return false;
    }
    return Boolean(
      folderElement.closest(".nav-files-container") || folderElement.closest('.workspace-leaf-content[data-type="file-explorer"]')
    );
  }
  updateExplorerNotePresenceBadge(element2, badgeState) {
    const titleHost = this.findExplorerTitleHost(element2);
    if (!titleHost) {
      return;
    }
    let badge = titleHost.querySelector(".rolay-note-presence-badge");
    if (!badgeState) {
      badge?.remove();
      return;
    }
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "rolay-note-presence-badge";
      const anonymousBadge = titleHost.querySelector(".rolay-note-anonymous-presence-badge");
      if (anonymousBadge) {
        titleHost.insertBefore(badge, anonymousBadge);
      } else {
        titleHost.appendChild(badge);
      }
    }
    badge.style.setProperty("--rolay-note-presence-badge-color", badgeState.color);
    badge.textContent = badgeState.count <= 1 ? "" : String(badgeState.count);
    badge.classList.toggle("rolay-note-presence-badge-multi", badgeState.count > 1);
    badge.setAttribute("aria-label", badgeState.count <= 1 ? "1 viewer" : `${badgeState.count} viewers`);
  }
  updateExplorerAnonymousPresenceBadge(element2, badgeState) {
    const titleHost = this.findExplorerTitleHost(element2);
    if (!titleHost) {
      return;
    }
    let badge = titleHost.querySelector(".rolay-note-anonymous-presence-badge");
    if (!badgeState || badgeState.count <= 0) {
      badge?.remove();
      return;
    }
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "rolay-note-anonymous-presence-badge";
      titleHost.appendChild(badge);
    }
    const icon = document.createElement("span");
    icon.className = "rolay-note-anonymous-presence-badge-icon";
    (0, import_obsidian9.setIcon)(icon, "eye");
    const label = document.createElement("span");
    label.textContent = String(badgeState.count);
    badge.replaceChildren(icon, label);
    badge.setAttribute(
      "aria-label",
      badgeState.count === 1 ? "1 anonymous public viewer" : `${badgeState.count} anonymous public viewers`
    );
  }
  getExplorerTransferBadges() {
    const aggregate = /* @__PURE__ */ new Map();
    const exactTransferPaths = /* @__PURE__ */ new Set();
    for (const transfer of this.binaryTransferState.values()) {
      const activeUpload = transfer.kind === "upload" && (transfer.status === "preparing" || transfer.status === "uploading" || transfer.status === "canceling" || transfer.status === "committing");
      const activeDownload = transfer.kind === "download" && (transfer.status === "preparing" || transfer.status === "downloading");
      if (!activeUpload && !activeDownload) {
        continue;
      }
      exactTransferPaths.add((0, import_obsidian9.normalizePath)(transfer.localPath));
      this.addExplorerTransferProgress(
        aggregate,
        transfer.localPath,
        transfer.kind,
        Math.max(0, transfer.bytesDone),
        Math.max(0, transfer.bytesTotal)
      );
    }
    for (const placeholderPath of this.fileBridge.getProtectedRemoteBinaryPlaceholderPaths()) {
      const normalizedPath = (0, import_obsidian9.normalizePath)(placeholderPath);
      if (exactTransferPaths.has(normalizedPath)) {
        continue;
      }
      exactTransferPaths.add(normalizedPath);
      const entry = this.resolveEntryByLocalPath(normalizedPath);
      this.addExplorerTransferProgress(
        aggregate,
        normalizedPath,
        "download",
        0,
        entry?.blob?.sizeBytes ?? 1
      );
    }
    for (const [workspaceId, runtime] of this.roomRuntime.entries()) {
      for (const lockedPath of runtime.markdownBootstrap.lockedLocalPaths) {
        const normalizedPath = (0, import_obsidian9.normalizePath)(lockedPath);
        if (this.isExplorerPathUploading(normalizedPath) || exactTransferPaths.has(normalizedPath)) {
          continue;
        }
        const progress = this.getMarkdownLockProgress(workspaceId, normalizedPath);
        this.addExplorerTransferProgress(
          aggregate,
          normalizedPath,
          "download",
          progress.completedBytes,
          progress.totalBytes
        );
      }
    }
    for (const pendingCreate of Object.values(this.data.pendingMarkdownCreates)) {
      const normalizedPath = (0, import_obsidian9.normalizePath)(pendingCreate.localPath);
      if (exactTransferPaths.has(normalizedPath)) {
        continue;
      }
      exactTransferPaths.add(normalizedPath);
      this.addExplorerTransferProgress(
        aggregate,
        normalizedPath,
        "upload",
        0,
        this.getLocalFileSizeOrOne(normalizedPath)
      );
    }
    for (const pendingMerge of Object.values(this.data.pendingMarkdownMerges)) {
      const normalizedPath = (0, import_obsidian9.normalizePath)(pendingMerge.localPath);
      if (exactTransferPaths.has(normalizedPath)) {
        continue;
      }
      exactTransferPaths.add(normalizedPath);
      this.addExplorerTransferProgress(
        aggregate,
        normalizedPath,
        "upload",
        0,
        this.getLocalFileSizeOrOne(normalizedPath)
      );
    }
    for (const pendingWrite of Object.values(this.data.pendingBinaryWrites)) {
      const normalizedPath = (0, import_obsidian9.normalizePath)(pendingWrite.localPath);
      if (exactTransferPaths.has(normalizedPath)) {
        continue;
      }
      exactTransferPaths.add(normalizedPath);
      this.addExplorerTransferProgress(
        aggregate,
        normalizedPath,
        "upload",
        0,
        this.getLocalFileSizeOrOne(normalizedPath)
      );
    }
    return new Map(
      [...aggregate.entries()].map(([localPath, state]) => [
        localPath,
        {
          label: this.formatExplorerTransferAggregatePercentLabel(state),
          kind: state.kind
        }
      ])
    );
  }
  addExplorerTransferProgress(aggregate, localPath, kind, completedBytes, totalBytes) {
    const normalizedPath = (0, import_obsidian9.normalizePath)(localPath);
    this.mergeExplorerTransferProgress(aggregate, normalizedPath, kind, completedBytes, totalBytes);
    const room = this.resolveDownloadedRoomByLocalPath(normalizedPath);
    if (!room) {
      return;
    }
    const roomRoot = (0, import_obsidian9.normalizePath)(getRoomRoot(this.data.settings.syncRoot, room.folderName));
    let parentPath = getParentPath2(normalizedPath);
    while (parentPath) {
      if (parentPath !== roomRoot && !parentPath.startsWith(`${roomRoot}/`)) {
        break;
      }
      this.mergeExplorerTransferProgress(aggregate, parentPath, kind, completedBytes, totalBytes);
      if (parentPath === roomRoot) {
        break;
      }
      parentPath = getParentPath2(parentPath);
    }
  }
  mergeExplorerTransferProgress(aggregate, localPath, kind, completedBytes, totalBytes) {
    const normalizedTotalBytes = Math.max(1, Math.trunc(totalBytes));
    const normalizedCompletedBytes = Math.max(
      0,
      Math.min(Math.trunc(completedBytes), normalizedTotalBytes)
    );
    const existing = aggregate.get(localPath);
    if (!existing) {
      aggregate.set(localPath, {
        kind,
        completedBytes: normalizedCompletedBytes,
        totalBytes: normalizedTotalBytes,
        itemCount: 1
      });
      return;
    }
    aggregate.set(localPath, {
      kind: existing.kind === "download" || kind === "download" ? "download" : "upload",
      completedBytes: existing.completedBytes + normalizedCompletedBytes,
      totalBytes: existing.totalBytes + normalizedTotalBytes,
      itemCount: existing.itemCount + 1
    });
  }
  formatExplorerTransferAggregatePercentLabel(state) {
    if (state.totalBytes <= 0) {
      return "0%";
    }
    const percent = Math.round(state.completedBytes / state.totalBytes * 100);
    return `${Math.max(0, Math.min(100, percent))}%`;
  }
  getMarkdownLockProgress(workspaceId, localPath) {
    const runtime = this.roomRuntime.get(workspaceId);
    const room = this.getDownloadedRooms().find((entry2) => entry2.workspaceId === workspaceId);
    if (!runtime || !room) {
      return {
        completedBytes: 0,
        totalBytes: 1
      };
    }
    const serverPath = toServerPathForRoom(localPath, this.data.settings.syncRoot, room.folderName);
    const entry = serverPath ? runtime.treeStore.getEntryByPath(serverPath) : null;
    if (!entry) {
      return {
        completedBytes: 0,
        totalBytes: 1
      };
    }
    const totalBytes = Math.max(
      1,
      runtime.markdownBootstrap.documentBytesByEntryId.get(entry.id) ?? 1
    );
    const completed = runtime.markdownBootstrap.completedEntryIds.has(entry.id) || this.hasPersistedCrdtCache(entry.id);
    return {
      completedBytes: completed ? totalBytes : 0,
      totalBytes
    };
  }
  getLocalFileSizeOrOne(localPath) {
    const file = this.app.vault.getAbstractFileByPath(localPath);
    if (file instanceof import_obsidian9.TFile && Number.isFinite(file.stat.size) && file.stat.size > 0) {
      return file.stat.size;
    }
    return 1;
  }
  isExplorerPathUploading(localPath) {
    const normalizedPath = (0, import_obsidian9.normalizePath)(localPath);
    if (normalizedPath in this.data.pendingMarkdownCreates) {
      return true;
    }
    if (normalizedPath in this.data.pendingBinaryWrites) {
      return true;
    }
    if (Object.values(this.data.pendingMarkdownMerges).some((entry) => {
      return (0, import_obsidian9.normalizePath)(entry.localPath) === normalizedPath;
    })) {
      return true;
    }
    const transfer = this.binaryTransferState.get(normalizedPath);
    return Boolean(
      transfer && transfer.kind === "upload" && (transfer.status === "preparing" || transfer.status === "uploading" || transfer.status === "canceling" || transfer.status === "committing")
    );
  }
  updateExplorerTransferBadge(element2, badgeState) {
    const titleHost = this.findExplorerTitleHost(element2);
    if (!titleHost) {
      return;
    }
    let badge = titleHost.querySelector(".rolay-transfer-progress-badge");
    if (!badgeState) {
      badge?.remove();
      return;
    }
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "rolay-transfer-progress-badge";
      const presenceBadge = titleHost.querySelector(
        ".rolay-note-presence-badge, .rolay-note-anonymous-presence-badge"
      );
      if (presenceBadge) {
        titleHost.insertBefore(badge, presenceBadge);
      } else {
        titleHost.appendChild(badge);
      }
    }
    badge.textContent = badgeState.label;
    badge.classList.toggle("rolay-transfer-progress-badge-upload", badgeState.kind === "upload");
    badge.classList.toggle("rolay-transfer-progress-badge-download", badgeState.kind === "download");
    badge.setAttribute(
      "aria-label",
      badgeState.kind === "upload" ? `Upload progress ${badgeState.label}` : `Download progress ${badgeState.label}`
    );
  }
  findExplorerTitleHost(element2) {
    return element2.querySelector(".nav-file-title-content") ?? element2.querySelector(".tree-item-inner");
  }
  getLoadingExplorerPaths() {
    const loadingPaths = /* @__PURE__ */ new Set();
    const uploadingPaths = this.getUploadingExplorerPaths();
    for (const runtime of this.roomRuntime.values()) {
      for (const lockedPath of runtime.markdownBootstrap.lockedLocalPaths) {
        if (!uploadingPaths.has(lockedPath)) {
          loadingPaths.add(lockedPath);
        }
      }
    }
    for (const placeholderPath of this.fileBridge.getProtectedRemoteBinaryPlaceholderPaths()) {
      const normalizedPath = (0, import_obsidian9.normalizePath)(placeholderPath);
      const transfer = this.binaryTransferState.get(normalizedPath);
      if (!transfer) {
        loadingPaths.add(normalizedPath);
        continue;
      }
      if (transfer.kind === "download" && (transfer.status === "preparing" || transfer.status === "downloading")) {
        loadingPaths.add(normalizedPath);
      }
    }
    for (const transfer of this.binaryTransferState.values()) {
      if (transfer.kind !== "download") {
        continue;
      }
      if (transfer.status === "preparing" || transfer.status === "downloading") {
        loadingPaths.add((0, import_obsidian9.normalizePath)(transfer.localPath));
      }
    }
    return loadingPaths;
  }
  getUploadingExplorerPaths() {
    const uploadingPaths = /* @__PURE__ */ new Set();
    for (const pendingCreate of Object.values(this.data.pendingMarkdownCreates)) {
      uploadingPaths.add((0, import_obsidian9.normalizePath)(pendingCreate.localPath));
    }
    for (const pendingMerge of Object.values(this.data.pendingMarkdownMerges)) {
      uploadingPaths.add((0, import_obsidian9.normalizePath)(pendingMerge.localPath));
    }
    for (const pendingWrite of Object.values(this.data.pendingBinaryWrites)) {
      uploadingPaths.add((0, import_obsidian9.normalizePath)(pendingWrite.localPath));
    }
    for (const transfer of this.binaryTransferState.values()) {
      if (transfer.kind !== "upload") {
        continue;
      }
      if (transfer.status === "preparing" || transfer.status === "uploading" || transfer.status === "canceling" || transfer.status === "committing") {
        uploadingPaths.add((0, import_obsidian9.normalizePath)(transfer.localPath));
      }
    }
    return uploadingPaths;
  }
  getRoomFolderExplorerStatuses() {
    const statuses = /* @__PURE__ */ new Map();
    for (const room of this.getDownloadedRooms()) {
      const roomRoot = getRoomRoot(this.data.settings.syncRoot, room.folderName);
      if (!roomRoot) {
        continue;
      }
      statuses.set(
        (0, import_obsidian9.normalizePath)(roomRoot),
        this.roomRuntime.get(room.workspaceId)?.streamStatus ?? "stopped"
      );
    }
    return statuses;
  }
  getNotePresenceForLocalPath(localPath) {
    const room = this.resolveDownloadedRoomByLocalPath(localPath);
    if (!room) {
      return createEmptyNotePresenceDisplayState();
    }
    const serverPath = toServerPathForRoom(localPath, this.data.settings.syncRoot, room.folderName);
    if (!serverPath) {
      return createEmptyNotePresenceDisplayState();
    }
    const entry = this.getRoomStore(room.workspaceId)?.getEntryByPath(serverPath);
    if (!entry || entry.deleted || entry.kind !== "markdown") {
      return createEmptyNotePresenceDisplayState();
    }
    return this.getNotePresenceForEntry(room.workspaceId, entry.id);
  }
  getNotePresenceForEntry(workspaceId, entryId) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return createEmptyNotePresenceDisplayState();
    }
    const viewers = runtime.notePresenceByEntryId.get(entryId) ?? [];
    return {
      viewers: this.mergeLocalNotePresenceViewer(workspaceId, entryId, viewers),
      anonymousViewerCount: runtime.noteAnonymousViewerCountByEntryId.get(entryId) ?? 0
    };
  }
  applyNotePresenceSnapshot(workspaceId, payload) {
    const snapshot = extractNotePresenceSnapshotPayload(payload);
    if (!snapshot || snapshot.workspaceId !== workspaceId) {
      return;
    }
    const runtime = this.ensureRoomRuntime(workspaceId);
    runtime.notePresenceByEntryId.clear();
    runtime.noteAnonymousViewerCountByEntryId.clear();
    for (const note of snapshot.notes) {
      if (note.viewers.length > 0) {
        runtime.notePresenceByEntryId.set(note.entryId, note.viewers);
      }
      if (note.anonymousViewerCount > 0) {
        runtime.noteAnonymousViewerCountByEntryId.set(note.entryId, note.anonymousViewerCount);
      }
    }
    this.scheduleExplorerLoadingDecorations();
    this.scheduleNotePresenceUiRefresh();
  }
  applyNotePresenceUpdate(workspaceId, payload) {
    const update = extractNotePresenceUpdatedPayload(payload);
    if (!update || update.workspaceId !== workspaceId) {
      return;
    }
    const runtime = this.ensureRoomRuntime(workspaceId);
    if (update.viewers.length === 0) {
      runtime.notePresenceByEntryId.delete(update.entryId);
    } else {
      runtime.notePresenceByEntryId.set(update.entryId, update.viewers);
    }
    if (update.anonymousViewerCount <= 0) {
      runtime.noteAnonymousViewerCountByEntryId.delete(update.entryId);
    } else {
      runtime.noteAnonymousViewerCountByEntryId.set(update.entryId, update.anonymousViewerCount);
    }
    this.scheduleExplorerLoadingDecorations();
    this.scheduleNotePresenceUiRefresh();
  }
  getBinaryTransfersForWorkspace(workspaceId) {
    return [...this.binaryTransferState.values()].filter((transfer) => transfer.workspaceId === workspaceId);
  }
  formatRoomBinaryTransferLabel(workspaceId) {
    const transfers = this.getBinaryTransfersForWorkspace(workspaceId).filter((transfer) => {
      return transfer.status !== "done";
    });
    if (transfers.length === 0) {
      return "idle";
    }
    const activeUploads = transfers.filter((transfer) => transfer.kind === "upload");
    const activeDownloads = transfers.filter((transfer) => transfer.kind === "download");
    const totalBytes = transfers.reduce((sum, transfer) => sum + Math.max(0, transfer.bytesTotal), 0);
    const completedBytes = transfers.reduce((sum, transfer) => {
      return sum + Math.min(Math.max(0, transfer.bytesDone), Math.max(0, transfer.bytesTotal));
    }, 0);
    const percent = totalBytes > 0 ? `${Math.round(completedBytes / totalBytes * 100)}%` : "working";
    const parts = [];
    if (activeUploads.length > 0) {
      parts.push(`${activeUploads.length} uploading`);
    }
    if (activeDownloads.length > 0) {
      parts.push(`${activeDownloads.length} downloading`);
    }
    if (totalBytes > 0) {
      return `${percent} (${formatByteCount(completedBytes)}/${formatByteCount(totalBytes)}, ${parts.join(", ")})`;
    }
    return parts.join(", ");
  }
  createBinarySyncToken(localPath) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    const existingToken = this.binarySyncTokens.get(normalizedLocalPath);
    if (existingToken) {
      this.binarySyncPathsByToken.delete(existingToken);
    }
    const token = typeof globalThis.crypto?.randomUUID === "function" ? globalThis.crypto.randomUUID() : `rolay-binary-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    this.binarySyncTokens.set(normalizedLocalPath, token);
    this.binarySyncPathsByToken.set(token, normalizedLocalPath);
    return token;
  }
  invalidateBinarySyncToken(localPath) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    const existingToken = this.binarySyncTokens.get(normalizedLocalPath);
    if (existingToken) {
      this.binarySyncPathsByToken.delete(existingToken);
    }
    this.binarySyncTokens.delete(normalizedLocalPath);
  }
  isBinarySyncTokenCurrent(localPath, token) {
    return this.binarySyncTokens.get((0, import_obsidian9.normalizePath)(localPath)) === token;
  }
  moveBinarySyncToken(oldPath, newPath) {
    const normalizedOldPath = (0, import_obsidian9.normalizePath)(oldPath);
    const normalizedNewPath = (0, import_obsidian9.normalizePath)(newPath);
    const existingToken = this.binarySyncTokens.get(normalizedOldPath);
    if (!existingToken) {
      return;
    }
    this.binarySyncTokens.delete(normalizedOldPath);
    this.binarySyncTokens.set(normalizedNewPath, existingToken);
    this.binarySyncPathsByToken.set(existingToken, normalizedNewPath);
  }
  getBinarySyncPathForToken(token) {
    return this.binarySyncPathsByToken.get(token) ?? null;
  }
  updateBinaryTransferState(localPath, patch) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    const existing = this.binaryTransferState.get(normalizedLocalPath);
    if (!existing) {
      throw new Error(`Missing binary transfer state for ${normalizedLocalPath}.`);
    }
    const nextState = {
      ...existing,
      ...patch,
      localPath: normalizedLocalPath,
      updatedAt: patch.updatedAt ?? (/* @__PURE__ */ new Date()).toISOString()
    };
    this.binaryTransferState.set(normalizedLocalPath, nextState);
    this.persistBinaryTransferState(nextState);
    this.scheduleExplorerLoadingDecorations();
    this.updateStatusBar();
    return nextState;
  }
  maybeUpdateBinaryTransferState(localPath, patch) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    const existing = this.binaryTransferState.get(normalizedLocalPath);
    if (!existing) {
      return null;
    }
    return this.updateBinaryTransferState(normalizedLocalPath, patch);
  }
  setBinaryTransferState(state) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(state.localPath);
    const nextState = {
      ...state,
      localPath: normalizedLocalPath
    };
    this.binaryTransferState.set(normalizedLocalPath, nextState);
    this.persistBinaryTransferState(nextState);
    this.scheduleExplorerLoadingDecorations();
    this.updateStatusBar();
  }
  traceBlob(message, level = "info") {
    if (!_RolayPlugin.ENABLE_BLOB_TRANSFER_TRACE) {
      return;
    }
    this.recordLog("blob-trace", message, level);
  }
  clearBinaryTransferRuntimeState(localPath) {
    if (!this.binaryTransferState.delete((0, import_obsidian9.normalizePath)(localPath))) {
      return;
    }
    this.scheduleExplorerLoadingDecorations();
    this.updateStatusBar();
  }
  clearBinaryTransferState(localPath) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    this.clearPersistedBinaryTransferState(normalizedLocalPath);
    this.clearBinaryTransferRuntimeState(normalizedLocalPath);
  }
  restorePersistedBinaryTransfers() {
    for (const persisted of Object.values(this.data.binaryTransfers)) {
      this.binaryTransferState.set((0, import_obsidian9.normalizePath)(persisted.localPath), {
        workspaceId: persisted.workspaceId,
        entryId: persisted.entryId,
        localPath: (0, import_obsidian9.normalizePath)(persisted.localPath),
        serverPath: persisted.serverPath,
        kind: persisted.kind,
        status: persisted.status,
        bytesTotal: persisted.bytesTotal,
        bytesDone: persisted.bytesDone,
        hash: persisted.hash,
        mimeType: persisted.mimeType,
        uploadId: persisted.uploadId,
        cancelUrl: null,
        lastError: persisted.lastError,
        rangeSupported: persisted.rangeSupported,
        createdAt: persisted.createdAt,
        updatedAt: persisted.updatedAt,
        rerunRequested: false,
        abortController: null
      });
    }
  }
  persistBinaryTransferState(state) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(state.localPath);
    this.data.binaryTransfers[normalizedLocalPath] = {
      workspaceId: state.workspaceId,
      entryId: state.entryId,
      localPath: normalizedLocalPath,
      serverPath: state.serverPath,
      kind: state.kind,
      status: state.status,
      bytesTotal: state.bytesTotal,
      bytesDone: state.bytesDone,
      hash: state.hash,
      mimeType: state.mimeType,
      uploadId: state.uploadId,
      rangeSupported: state.rangeSupported,
      createdAt: state.createdAt,
      updatedAt: state.updatedAt,
      lastError: state.lastError
    };
    this.schedulePersist();
  }
  clearPersistedBinaryTransferState(localPath) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    if (!(normalizedLocalPath in this.data.binaryTransfers)) {
      return;
    }
    delete this.data.binaryTransfers[normalizedLocalPath];
    this.schedulePersist();
  }
  movePersistedBinaryTransferState(oldPath, newPath, serverPath) {
    const normalizedOldPath = (0, import_obsidian9.normalizePath)(oldPath);
    const normalizedNewPath = (0, import_obsidian9.normalizePath)(newPath);
    const existing = this.data.binaryTransfers[normalizedOldPath];
    if (!existing) {
      return;
    }
    delete this.data.binaryTransfers[normalizedOldPath];
    this.data.binaryTransfers[normalizedNewPath] = {
      ...existing,
      localPath: normalizedNewPath,
      serverPath: serverPath ?? existing.serverPath,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const runtime = this.binaryTransferState.get(normalizedOldPath);
    if (runtime) {
      this.binaryTransferState.delete(normalizedOldPath);
      this.binaryTransferState.set(normalizedNewPath, {
        ...runtime,
        localPath: normalizedNewPath,
        serverPath: serverPath ?? runtime.serverPath,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
  }
  getBinaryBlobContentUrl(entryId, contentUrl) {
    if (contentUrl?.trim()) {
      return contentUrl.trim();
    }
    return `/v1/files/${encodeURIComponent(entryId)}/blob/content`;
  }
  async clearBinaryDownloadPart(workspaceId, entryId, hash) {
    const normalizedHash = normalizeSha256Hash(hash);
    if (!entryId || !normalizedHash) {
      return;
    }
    await this.removeAdapterPathIfExists(
      this.getBinaryDownloadPartPath(workspaceId, entryId, normalizedHash)
    );
  }
  async cancelBinaryTransferForLocalPath(localPath, reason) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    const transfer = this.binaryTransferState.get(normalizedLocalPath);
    if (!transfer) {
      return;
    }
    if (transfer.kind === "upload" && transfer.uploadId && transfer.entryId) {
      this.updateBinaryTransferState(normalizedLocalPath, {
        status: "canceling"
      });
    }
    transfer.abortController?.abort();
    if (transfer.kind === "upload" && transfer.uploadId && transfer.entryId) {
      try {
        await this.apiClient.cancelBlobUpload(transfer.entryId, transfer.uploadId);
        this.recordLog(
          "blob",
          `[${transfer.workspaceId}] Canceled blob upload ${transfer.uploadId} for ${transfer.serverPath} (${reason}).`
        );
      } catch (error) {
        this.recordLog(
          "blob",
          `[${transfer.workspaceId}] Failed to cancel blob upload ${transfer.uploadId} for ${transfer.serverPath}: ${error instanceof Error ? error.message : String(error)}`,
          "error"
        );
      }
    }
    if (transfer.kind === "download") {
      await this.clearBinaryDownloadPart(transfer.workspaceId, transfer.entryId, transfer.hash);
    }
    this.clearBinaryTransferState(normalizedLocalPath);
  }
  async cancelRoomBinaryTransfers(workspaceId, reason) {
    for (const localPath of [...this.binarySyncTokens.keys()]) {
      const room = this.resolveDownloadedRoomByLocalPath(localPath);
      if (room?.workspaceId !== workspaceId) {
        continue;
      }
      this.invalidateBinarySyncToken(localPath);
      this.pendingBinarySyncReruns.delete((0, import_obsidian9.normalizePath)(localPath));
    }
    const transfers = this.getBinaryTransfersForWorkspace(workspaceId);
    if (transfers.length === 0) {
      return;
    }
    this.recordLog(
      "blob",
      `[${workspaceId}] Canceling ${transfers.length} active binary transfer(s) because room sync was disconnected.`
    );
    await Promise.all(
      transfers.map((transfer) => this.cancelBinaryTransferForLocalPath(transfer.localPath, reason))
    );
  }
  findDownloadingBinaryPathAtOrBelow(localPath) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    for (const transfer of this.binaryTransferState.values()) {
      if (transfer.kind !== "download" || transfer.status !== "preparing" && transfer.status !== "downloading") {
        continue;
      }
      const transferLocalPath = (0, import_obsidian9.normalizePath)(transfer.localPath);
      if (normalizedLocalPath === transferLocalPath || transferLocalPath.startsWith(`${normalizedLocalPath}/`)) {
        return {
          workspaceId: transfer.workspaceId,
          localPath: transferLocalPath
        };
      }
    }
    return null;
  }
  async revertDownloadingBinaryRename(file, oldPath) {
    const blocked = this.findDownloadingBinaryPathAtOrBelow(oldPath);
    if (!blocked) {
      return false;
    }
    this.recordLog(
      "blob",
      `[${blocked.workspaceId}] Reverted local move/rename for ${oldPath} because ${blocked.localPath} is still downloading and protected.`
    );
    new import_obsidian9.Notice("Rolay is still downloading this file. Move and rename are blocked until download finishes.");
    if (file.path === oldPath) {
      this.scheduleExplorerLoadingDecorations();
      return true;
    }
    const currentFile = this.app.vault.getAbstractFileByPath(file.path);
    if (!currentFile) {
      this.scheduleSnapshotRefresh(blocked.workspaceId, "restore-downloading-binary-rename");
      return true;
    }
    try {
      await this.fileBridge.runWithSuppressedPaths([oldPath, file.path], async () => {
        await this.app.fileManager.renameFile(currentFile, oldPath);
      });
    } catch (error) {
      this.recordLog(
        "blob",
        `[${blocked.workspaceId}] Failed to revert downloading binary rename for ${oldPath}: ${error instanceof Error ? error.message : String(error)}`,
        "error"
      );
      this.scheduleSnapshotRefresh(blocked.workspaceId, "restore-downloading-binary-rename");
    }
    this.scheduleExplorerLoadingDecorations();
    return true;
  }
  async restoreDownloadingBinaryDelete(file) {
    const blocked = this.findDownloadingBinaryPathAtOrBelow(file.path);
    if (!blocked) {
      return false;
    }
    this.recordLog(
      "blob",
      `[${blocked.workspaceId}] Ignored local delete for ${file.path} because ${blocked.localPath} is still downloading and protected.`
    );
    new import_obsidian9.Notice("Rolay is still downloading this file. Delete is blocked until download finishes.");
    await this.refreshRoomSnapshot(blocked.workspaceId, "restore-downloading-binary-delete");
    this.scheduleExplorerLoadingDecorations();
    return true;
  }
  async revertLockedMarkdownRename(file, oldPath) {
    const blocked = this.findLockedMarkdownPathAtOrBelow(oldPath);
    if (!blocked) {
      return false;
    }
    this.recordLog(
      "crdt",
      `[${blocked.workspaceId}] Reverted local move/rename for ${oldPath} because ${blocked.lockedPath} is still loading and protected.`
    );
    new import_obsidian9.Notice("Rolay is still loading this markdown note. Move and rename are blocked until download finishes.");
    if (file.path === oldPath) {
      this.scheduleExplorerLoadingDecorations();
      return true;
    }
    const currentFile = this.app.vault.getAbstractFileByPath(file.path);
    if (!currentFile) {
      this.scheduleSnapshotRefresh(blocked.workspaceId, "restore-locked-rename");
      return true;
    }
    try {
      await this.fileBridge.runWithSuppressedPaths([oldPath, file.path], async () => {
        await this.app.fileManager.renameFile(currentFile, oldPath);
      });
    } catch (error) {
      this.recordLog(
        "crdt",
        `[${blocked.workspaceId}] Failed to revert locked rename for ${oldPath}: ${error instanceof Error ? error.message : String(error)}`,
        "error"
      );
      this.scheduleSnapshotRefresh(blocked.workspaceId, "restore-locked-rename");
    }
    this.scheduleExplorerLoadingDecorations();
    return true;
  }
  async restoreLockedMarkdownDelete(file) {
    const blocked = this.findLockedMarkdownPathAtOrBelow(file.path);
    if (!blocked) {
      return false;
    }
    this.recordLog(
      "crdt",
      `[${blocked.workspaceId}] Ignored local delete for ${file.path} because ${blocked.lockedPath} is still loading and protected.`
    );
    new import_obsidian9.Notice("Rolay is still loading this markdown note. Delete is blocked until download finishes.");
    await this.refreshRoomSnapshot(blocked.workspaceId, "restore-locked-delete");
    this.scheduleExplorerLoadingDecorations();
    return true;
  }
  clearLockedMarkdownBootstrapRetry(workspaceId, resetAttempt = true) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return;
    }
    if (runtime.lockedBootstrapRetryHandle !== null) {
      window.clearTimeout(runtime.lockedBootstrapRetryHandle);
      runtime.lockedBootstrapRetryHandle = null;
    }
    if (resetAttempt) {
      runtime.lockedBootstrapRetryAttempt = 0;
    }
  }
  scheduleLockedMarkdownBootstrapRetry(workspaceId, reason) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return;
    }
    if (runtime.markdownBootstrap.lockedLocalPaths.size === 0) {
      this.clearLockedMarkdownBootstrapRetry(workspaceId);
      return;
    }
    if (runtime.lockedBootstrapRetryHandle !== null) {
      return;
    }
    const retryDelays = [1e3, 2e3, 4e3, 8e3];
    const delay = retryDelays[Math.min(runtime.lockedBootstrapRetryAttempt, retryDelays.length - 1)];
    runtime.lockedBootstrapRetryHandle = window.setTimeout(() => {
      runtime.lockedBootstrapRetryHandle = null;
      runtime.lockedBootstrapRetryAttempt = Math.min(
        runtime.lockedBootstrapRetryAttempt + 1,
        retryDelays.length - 1
      );
      const currentRuntime = this.roomRuntime.get(workspaceId);
      const roomBinding = this.getStoredRoomBinding(workspaceId);
      if (!currentRuntime || !roomBinding?.downloaded) {
        return;
      }
      const lockedEntries = currentRuntime.treeStore.getEntries().filter((entry) => {
        if (entry.deleted || entry.kind !== "markdown") {
          return false;
        }
        const localPath = this.fileBridge.toLocalPath(workspaceId, entry.path) ?? entry.path;
        return currentRuntime.markdownBootstrap.lockedLocalPaths.has((0, import_obsidian9.normalizePath)(localPath));
      });
      if (lockedEntries.length === 0) {
        this.clearLockedMarkdownBootstrapRetry(workspaceId);
        return;
      }
      void this.bootstrapRoomMarkdownCache(
        workspaceId,
        lockedEntries,
        reason,
        currentRuntime.treeStore.getEntries()
      );
    }, delay);
  }
  buildPendingRoomPathKey(workspaceId, path) {
    return `${workspaceId}::${path.replace(/\\/g, "/")}`;
  }
  registerPendingLocalCreate(workspaceId, path) {
    this.pendingLocalCreates.set(this.buildPendingRoomPathKey(workspaceId, path), Date.now());
  }
  clearPendingLocalCreate(workspaceId, path) {
    this.pendingLocalCreates.delete(this.buildPendingRoomPathKey(workspaceId, path));
  }
  hasPendingLocalCreate(workspaceId, path) {
    const key = this.buildPendingRoomPathKey(workspaceId, path);
    const createdAt = this.pendingLocalCreates.get(key);
    if (createdAt === void 0) {
      return false;
    }
    if (Date.now() - createdAt <= _RolayPlugin.PENDING_CREATE_CONFIRMATION_TTL_MS) {
      return true;
    }
    this.pendingLocalCreates.delete(key);
    return false;
  }
  registerPendingLocalDelete(workspaceId, path) {
    this.pendingLocalDeletes.set(this.buildPendingRoomPathKey(workspaceId, path), Date.now());
  }
  clearPendingLocalDelete(workspaceId, path) {
    this.pendingLocalDeletes.delete(this.buildPendingRoomPathKey(workspaceId, path));
  }
  hasPendingLocalDelete(workspaceId, path) {
    const prefix = `${workspaceId}::`;
    const normalizedPath = (0, import_obsidian9.normalizePath)(path);
    const now = Date.now();
    for (const [key, createdAt] of [...this.pendingLocalDeletes.entries()]) {
      if (now - createdAt > _RolayPlugin.PENDING_DELETE_GUARD_MS) {
        this.pendingLocalDeletes.delete(key);
        continue;
      }
      if (!key.startsWith(prefix)) {
        continue;
      }
      const pendingPath = key.slice(prefix.length);
      if (normalizedPath === pendingPath || normalizedPath.startsWith(`${pendingPath}/`)) {
        return true;
      }
    }
    return false;
  }
  clearPendingRoomPathsForWorkspace(workspaceId) {
    const prefix = `${workspaceId}::`;
    for (const key of [...this.pendingLocalCreates.keys()]) {
      if (key.startsWith(prefix)) {
        this.pendingLocalCreates.delete(key);
      }
    }
    for (const key of [...this.pendingLocalDeletes.keys()]) {
      if (key.startsWith(prefix)) {
        this.pendingLocalDeletes.delete(key);
      }
    }
    for (const [key, handle] of [...this.recentRemoteObservedPaths.entries()]) {
      if (!key.startsWith(prefix)) {
        continue;
      }
      window.clearTimeout(handle);
      this.recentRemoteObservedPaths.delete(key);
    }
    for (const [key, handle] of [...this.pendingRemoteMarkdownSettles.entries()]) {
      if (!key.startsWith(prefix)) {
        continue;
      }
      window.clearTimeout(handle);
      this.pendingRemoteMarkdownSettles.delete(key);
    }
  }
  optimisticUpsertRoomEntry(workspaceId, entry) {
    this.getRoomStore(workspaceId)?.upsertEntry(entry);
  }
  optimisticDeleteRoomEntry(workspaceId, entryId) {
    this.getRoomStore(workspaceId)?.markEntryDeleted(entryId);
  }
  confirmSnapshotPendingCreates(workspaceId, entries) {
    for (const entry of entries) {
      if (entry.deleted) {
        continue;
      }
      this.clearPendingLocalCreate(workspaceId, entry.path);
    }
  }
  confirmSnapshotPendingDeletes(workspaceId, entries) {
    const prefix = `${workspaceId}::`;
    const activePaths = entries.filter((entry) => !entry.deleted).map((entry) => (0, import_obsidian9.normalizePath)(entry.path));
    for (const key of [...this.pendingLocalDeletes.keys()]) {
      if (!key.startsWith(prefix)) {
        continue;
      }
      const pendingPath = key.slice(prefix.length);
      const stillActive = activePaths.some((activePath) => {
        return activePath === pendingPath || activePath.startsWith(`${pendingPath}/`);
      });
      if (!stillActive) {
        this.pendingLocalDeletes.delete(key);
      }
    }
  }
  buildRemoteObservedPathKey(workspaceId, localPath) {
    return `${workspaceId}::${(0, import_obsidian9.normalizePath)(localPath)}`;
  }
  noteRemoteObservedPath(workspaceId, localPath, serverPath) {
    const key = this.buildRemoteObservedPathKey(workspaceId, localPath);
    const existingHandle = this.recentRemoteObservedPaths.get(key);
    if (existingHandle !== void 0) {
      window.clearTimeout(existingHandle);
    }
    const handle = window.setTimeout(() => {
      this.recentRemoteObservedPaths.delete(key);
    }, _RolayPlugin.RECENT_REMOTE_PATH_TTL_MS);
    this.recentRemoteObservedPaths.set(key, handle);
    if (/\.(md|markdown)$/i.test(localPath) || /\.md$/i.test(serverPath)) {
      this.markPendingRemoteMarkdownSettle(workspaceId, localPath);
    }
    this.clearPendingLocalCreate(workspaceId, serverPath);
    this.clearPendingMarkdownCreate(localPath);
    this.clearPendingBinaryWriteRecord(localPath);
  }
  wasPathRecentlyObservedAsRemote(workspaceId, localPath) {
    return this.recentRemoteObservedPaths.has(this.buildRemoteObservedPathKey(workspaceId, localPath));
  }
  forgetRecentRemoteHintsForLocalPath(localPath, clearSettle = false) {
    const room = this.resolveDownloadedRoomByLocalPath(localPath);
    if (!room) {
      return;
    }
    this.forgetRecentRemoteObservedPath(room.workspaceId, localPath, clearSettle);
  }
  forgetRecentRemoteObservedPath(workspaceId, localPath, clearSettle = false) {
    const key = this.buildRemoteObservedPathKey(workspaceId, localPath);
    const handle = this.recentRemoteObservedPaths.get(key);
    if (handle !== void 0) {
      window.clearTimeout(handle);
      this.recentRemoteObservedPaths.delete(key);
    }
    if (clearSettle) {
      this.clearPendingRemoteMarkdownSettle(workspaceId, localPath);
    }
  }
  markPendingRemoteMarkdownSettle(workspaceId, localPath) {
    const key = this.buildRemoteObservedPathKey(workspaceId, localPath);
    const existingHandle = this.pendingRemoteMarkdownSettles.get(key);
    if (existingHandle !== void 0) {
      window.clearTimeout(existingHandle);
    }
    const handle = window.setTimeout(() => {
      this.pendingRemoteMarkdownSettles.delete(key);
      this.scheduleSnapshotRefresh(workspaceId, "remote-markdown-settle");
      this.scheduleExplorerLoadingDecorations();
    }, _RolayPlugin.REMOTE_MARKDOWN_SETTLE_TTL_MS);
    this.pendingRemoteMarkdownSettles.set(key, handle);
  }
  isWaitingForRemoteMarkdownSettle(workspaceId, localPath) {
    return this.pendingRemoteMarkdownSettles.has(this.buildRemoteObservedPathKey(workspaceId, localPath));
  }
  clearPendingRemoteMarkdownSettle(workspaceId, localPath) {
    const key = this.buildRemoteObservedPathKey(workspaceId, localPath);
    const handle = this.pendingRemoteMarkdownSettles.get(key);
    if (handle === void 0) {
      return;
    }
    window.clearTimeout(handle);
    this.pendingRemoteMarkdownSettles.delete(key);
  }
  async saveRoomBinding(workspaceId, nextBinding) {
    const current = this.getStoredRoomBinding(workspaceId) ?? {
      folderName: "",
      downloaded: false
    };
    await this.updateSettings({
      roomBindings: {
        [workspaceId]: {
          ...current,
          ...nextBinding
        }
      }
    });
  }
  requireFolderNameForRoom(workspaceId, fallbackRoomName) {
    const folderName = this.getResolvedRoomFolderName(workspaceId, fallbackRoomName);
    if (!isValidRoomFolderName(folderName)) {
      throw this.notifyError("Room folder name must be non-empty and must not contain '/' or '\\'.");
    }
    return folderName;
  }
  isLocalPathInDownloadedRoom(localPath, workspaceId) {
    const folderName = this.getDownloadedFolderName(workspaceId);
    if (!folderName) {
      return false;
    }
    return toServerPathForRoom(localPath, this.data.settings.syncRoot, folderName) !== null;
  }
  isRoomSyncActive(workspaceId) {
    const runtime = this.roomRuntime.get(workspaceId);
    return Boolean(
      !this.isUnloading && runtime && runtime.streamStatus !== "stopped" && this.getStoredRoomBinding(workspaceId)?.downloaded
    );
  }
  isFolderNameUsedByAnotherRoom(workspaceId, folderName) {
    for (const room of this.roomList) {
      if (room.workspace.id === workspaceId) {
        continue;
      }
      const otherFolderName = this.getResolvedRoomFolderName(room.workspace.id, room.workspace.name);
      if (otherFolderName && otherFolderName === folderName) {
        const binding = this.getStoredRoomBinding(room.workspace.id);
        if (binding?.downloaded || binding?.folderName) {
          return true;
        }
      }
    }
    return false;
  }
  async deactivateRoomDownload(workspaceId, showNotice = false) {
    const activeFile = this.app.workspace.getActiveFile();
    if (activeFile && this.isLocalPathInDownloadedRoom(activeFile.path, workspaceId)) {
      await this.crdtManager.disconnect();
    }
    this.stopRoomEventStream(workspaceId);
    this.clearLockedMarkdownBootstrapRetry(workspaceId, false);
    const runtime = this.roomRuntime.get(workspaceId);
    if (runtime && runtime.snapshotRefreshHandle !== null) {
      window.clearTimeout(runtime.snapshotRefreshHandle);
    }
    this.roomRuntime.delete(workspaceId);
    this.scheduleExplorerLoadingDecorations();
    this.roomInvites.delete(workspaceId);
    this.clearPendingRoomPathsForWorkspace(workspaceId);
    this.clearPendingMarkdownCreatesForWorkspace(workspaceId);
    this.clearPendingMarkdownMergesForWorkspace(workspaceId);
    await this.clearPendingBinaryWritesForWorkspace(workspaceId);
    const binding = this.getStoredRoomBinding(workspaceId);
    if (binding?.downloaded) {
      await this.saveRoomBinding(workspaceId, {
        downloaded: false
      });
    }
    if (showNotice) {
      new import_obsidian9.Notice("Rolay room folder detached from the vault.");
    }
  }
  updateStatusBar() {
    if (!this.statusBarEl) {
      return;
    }
    this.statusBarEl.empty();
    this.statusBarEl.hide();
    this.requestSettingsRender();
  }
  async refreshOwnerRoomInvites(logActivity = true) {
    const ownerRooms = this.roomList.filter((room) => room.membershipRole === "owner");
    for (const room of ownerRooms) {
      try {
        await this.refreshRoomInvite(room.workspace.id, false, logActivity);
      } catch (error) {
        this.handleError(`Invite auto-refresh failed (${room.workspace.id})`, error, false);
      }
    }
  }
  async applySettingsUserUpdate(user) {
    if (!user || !this.data.session) {
      return;
    }
    const wasAdmin = Boolean(this.data.session.user?.isAdmin);
    this.data.session = {
      ...this.data.session,
      user
    };
    this.resetProfileDraft();
    if (wasAdmin && !user.isAdmin) {
      this.clearAdminState();
    } else if (!wasAdmin && user.isAdmin) {
      try {
        await this.refreshManagedUsers(false, false);
        await this.refreshAdminRooms(false, false);
        if (this.adminSelectedRoomId) {
          await this.refreshAdminRoomMembers(false, this.adminSelectedRoomId, false);
        }
      } catch (error) {
        this.handleError("Admin state bootstrap failed", error, false);
      }
    }
    await this.persistNow();
    this.updateStatusBar();
  }
  async applySettingsRoomUpsert(scope, payload) {
    if (scope === "admin.rooms") {
      const room2 = extractAdminRoomFromSettingsPayload(payload);
      if (!room2) {
        return;
      }
      this.upsertAdminRoom(room2);
      this.updateStatusBar();
      return;
    }
    const room = extractRoomFromSettingsPayload(payload);
    if (!room) {
      return;
    }
    this.upsertUserRoom(room);
    this.updateStatusBar();
  }
  async applySettingsRoomDelete(scope, payload) {
    const workspaceId = extractWorkspaceIdFromSettingsPayload(payload);
    if (!workspaceId) {
      return;
    }
    if (scope === "admin.rooms") {
      this.removeAdminRoom(workspaceId);
      this.updateStatusBar();
      return;
    }
    await this.removeUserRoom(workspaceId, "settings-stream");
    this.updateStatusBar();
  }
  async applySettingsRoomMembershipChanged(payload) {
    const membership = extractRoomMembershipChangedPayload(payload);
    if (!membership) {
      return;
    }
    if (membership.room) {
      this.upsertUserRoom(membership.room);
      this.updateStatusBar();
      return;
    }
    if (membership.workspaceId && membership.removed !== false) {
      await this.removeUserRoom(membership.workspaceId, "settings-membership");
      this.updateStatusBar();
      return;
    }
    if (membership.workspaceId) {
      await this.loadSettingsPanelSnapshot();
    }
  }
  applySettingsInviteUpdate(invite) {
    if (!invite) {
      return;
    }
    this.roomInvites.set(invite.workspaceId, invite);
    this.patchInviteEnabled(invite.workspaceId, invite.enabled);
    this.updateStatusBar();
  }
  applySettingsRoomPublicationUpdate(update) {
    if (!update) {
      return;
    }
    this.patchRoomPublication(
      update.workspaceId,
      normalizeRoomPublicationState(update.publication, update.workspaceId)
    );
    this.updateStatusBar();
  }
  applySettingsManagedUserUpsert(user) {
    if (!user) {
      return;
    }
    const nextUsers = this.managedUsers.filter((entry) => entry.id !== user.id);
    nextUsers.push(user);
    nextUsers.sort((left, right) => left.username.localeCompare(right.username));
    this.managedUsers = nextUsers;
    this.updateStatusBar();
  }
  applySettingsManagedUserDelete(userId) {
    if (!userId) {
      return;
    }
    this.managedUsers = this.managedUsers.filter((user) => user.id !== userId);
    if (this.adminRoomMembers.some((member) => member.user.id === userId)) {
      this.adminRoomMembers = this.adminRoomMembers.filter((member) => member.user.id !== userId);
    }
    this.updateStatusBar();
  }
  applySettingsAdminRoomMembersUpdate(update) {
    if (!update) {
      return;
    }
    if (this.adminSelectedRoomId === update.workspaceId) {
      this.adminRoomMembers = [...update.members].sort(compareRoomMembers);
    }
    const ownerCount = update.members.filter((member) => member.role === "owner").length;
    const memberCount = update.members.length;
    this.adminRoomList = this.adminRoomList.map((room) => {
      if (room.workspace.id !== update.workspaceId) {
        return room;
      }
      return {
        ...room,
        ownerCount,
        memberCount
      };
    }).sort(compareRoomsByName);
    this.roomList = this.roomList.map((room) => {
      if (room.workspace.id !== update.workspaceId) {
        return room;
      }
      return {
        ...room,
        memberCount
      };
    }).sort(compareRoomsByName);
    this.updateStatusBar();
  }
  upsertUserRoom(room) {
    const nextRooms = this.roomList.filter((entry) => entry.workspace.id !== room.workspace.id);
    nextRooms.push(room);
    nextRooms.sort(compareRoomsByName);
    this.roomList = nextRooms;
    this.reconcileInviteCache();
    if (room.membershipRole === "owner" && !this.roomInvites.has(room.workspace.id)) {
      void this.refreshRoomInvite(room.workspace.id, false, false).then(() => {
        this.requestSettingsRender();
      }).catch((error) => {
        this.handleError(`Invite bootstrap failed (${room.workspace.id})`, error, false);
      });
    }
  }
  upsertAdminRoom(room) {
    const nextRooms = this.adminRoomList.filter((entry) => entry.workspace.id !== room.workspace.id);
    nextRooms.push(room);
    nextRooms.sort(compareRoomsByName);
    this.adminRoomList = nextRooms;
    this.reconcileAdminSelectedRoom();
  }
  async removeUserRoom(workspaceId, reason) {
    const hadRoom = this.roomList.some((room) => room.workspace.id === workspaceId);
    this.roomList = this.roomList.filter((room) => room.workspace.id !== workspaceId);
    this.roomInvites.delete(workspaceId);
    if (hadRoom && this.getStoredRoomBinding(workspaceId)?.downloaded) {
      await this.deactivateRoomDownload(workspaceId, false);
      this.recordLog("rooms", `Detached room ${workspaceId} after settings ${reason}.`);
    }
    this.reconcileInviteCache();
  }
  removeAdminRoom(workspaceId) {
    this.adminRoomList = this.adminRoomList.filter((room) => room.workspace.id !== workspaceId);
    if (this.adminSelectedRoomId === workspaceId) {
      this.adminSelectedRoomId = "";
      this.adminRoomMembers = [];
      this.clearAdminRoomMemberDraft();
    }
    this.reconcileAdminSelectedRoom();
  }
  reconcileAdminSelectedRoom() {
    if (!this.adminSelectedRoomId && this.adminRoomList.length === 1) {
      this.adminSelectedRoomId = this.adminRoomList[0].workspace.id;
      return;
    }
    if (this.adminSelectedRoomId && !this.adminRoomList.some((room) => room.workspace.id === this.adminSelectedRoomId)) {
      this.adminSelectedRoomId = "";
      this.adminRoomMembers = [];
      this.clearAdminRoomMemberDraft();
    }
  }
  async applySessionUser(user) {
    if (!this.data.session) {
      this.recordLog(
        "auth",
        `Ignored session user update for ${user.username} because no authenticated session with tokens is available.`,
        "error"
      );
      return;
    }
    this.data.session = {
      ...this.data.session,
      user
    };
    this.resetProfileDraft();
    await this.persistNow();
    this.updateStatusBar();
  }
  updateRoomSyncCursor(workspaceId, cursor) {
    const current = getRoomSyncState(this.data.sync, workspaceId);
    this.setRoomSyncState(workspaceId, {
      ...current,
      lastCursor: cursor
    });
  }
  setRoomSyncState(workspaceId, nextState) {
    this.data.sync.rooms = {
      ...this.data.sync.rooms,
      [workspaceId]: nextState
    };
  }
  resetProfileDraft() {
    this.profileDraftDisplayName = this.data.session?.user?.displayName ?? "";
  }
  clearRoomDrafts() {
    this.clearCreateRoomDraft();
    this.clearJoinRoomDraft();
  }
  clearCreateRoomDraft() {
    this.createRoomDraft = {
      name: ""
    };
  }
  clearJoinRoomDraft() {
    this.joinRoomDraft = {
      code: ""
    };
  }
  clearPasswordChangeDraft() {
    this.passwordChangeDraft = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  }
  clearManagedUserDraft() {
    this.managedUserDraft = {
      username: "",
      password: "",
      displayName: "",
      globalRole: "reader"
    };
  }
  clearAdminRoomMemberDraft() {
    this.adminRoomMemberDraft = {
      username: "",
      role: "member"
    };
  }
  clearAdminState() {
    this.adminRoomList = [];
    this.managedUsers = [];
    this.adminSelectedRoomId = "";
    this.adminRoomMembers = [];
    this.clearAdminRoomMemberDraft();
  }
  getPasswordChangeErrorMessage(error) {
    if (!(error instanceof RolayApiError)) {
      return null;
    }
    if (error.code === "password_unchanged") {
      return "New password must be different from the current password.";
    }
    const normalizedCode = error.code.toLowerCase();
    if (normalizedCode.includes("current") && normalizedCode.includes("password")) {
      return "Current password is incorrect.";
    }
    const normalizedMessage = error.message.toLowerCase();
    if (normalizedMessage.includes("current password") && (normalizedMessage.includes("invalid") || normalizedMessage.includes("incorrect") || normalizedMessage.includes("wrong"))) {
      return "Current password is incorrect.";
    }
    if (normalizedMessage.includes("password unchanged") || normalizedMessage.includes("same as") || normalizedMessage.includes("must be different")) {
      return "New password must be different from the current password.";
    }
    return null;
  }
  getPendingMarkdownCreatesForWorkspace(workspaceId) {
    return Object.values(this.data.pendingMarkdownCreates).filter((entry) => entry.workspaceId === workspaceId).sort((left, right) => left.createdAt.localeCompare(right.createdAt));
  }
  getPendingMarkdownMergesForWorkspace(workspaceId) {
    return Object.values(this.data.pendingMarkdownMerges).filter((entry) => entry.workspaceId === workspaceId).sort((left, right) => left.createdAt.localeCompare(right.createdAt));
  }
  getPendingBinaryWritesForWorkspace(workspaceId) {
    return Object.values(this.data.pendingBinaryWrites).filter((entry) => entry.workspaceId === workspaceId).sort((left, right) => left.createdAt.localeCompare(right.createdAt));
  }
  handlePendingMarkdownCreateRename(oldPath, newPath) {
    const normalizedOldPath = (0, import_obsidian9.normalizePath)(oldPath);
    const normalizedNewPath = (0, import_obsidian9.normalizePath)(newPath);
    const pendingCreate = this.data.pendingMarkdownCreates[normalizedOldPath];
    if (!pendingCreate) {
      return;
    }
    delete this.data.pendingMarkdownCreates[normalizedOldPath];
    const nextServerPath = this.resolvePendingMarkdownServerPath(
      pendingCreate.workspaceId,
      normalizedNewPath,
      pendingCreate.serverPath
    );
    if (!nextServerPath) {
      this.schedulePersist();
      this.scheduleExplorerLoadingDecorations();
      this.recordLog(
        "ops",
        `[${pendingCreate.workspaceId}] Cleared pending markdown create for ${normalizedOldPath} because it moved outside the downloaded room.`
      );
      return;
    }
    this.data.pendingMarkdownCreates[normalizedNewPath] = {
      ...pendingCreate,
      localPath: normalizedNewPath,
      serverPath: nextServerPath
    };
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
  }
  handlePendingMarkdownMergeRename(oldPath, newPath) {
    const normalizedOldPath = (0, import_obsidian9.normalizePath)(oldPath);
    const normalizedNewPath = (0, import_obsidian9.normalizePath)(newPath);
    let changed = false;
    for (const [entryId, pendingMerge] of Object.entries(this.data.pendingMarkdownMerges)) {
      if (pendingMerge.localPath !== normalizedOldPath) {
        continue;
      }
      const nextFilePath = this.resolvePendingMarkdownServerPath(
        pendingMerge.workspaceId,
        normalizedNewPath,
        pendingMerge.filePath
      );
      if (!nextFilePath) {
        delete this.data.pendingMarkdownMerges[entryId];
        changed = true;
        this.recordLog(
          "crdt",
          `[${pendingMerge.workspaceId}] Cleared pending markdown merge for ${normalizedOldPath} because it moved outside the downloaded room.`
        );
        continue;
      }
      this.data.pendingMarkdownMerges[entryId] = {
        ...pendingMerge,
        localPath: normalizedNewPath,
        filePath: nextFilePath
      };
      changed = true;
    }
    if (changed) {
      this.schedulePersist();
      this.scheduleExplorerLoadingDecorations();
    }
  }
  async handlePendingBinaryWriteRename(oldPath, newPath) {
    const normalizedOldPath = (0, import_obsidian9.normalizePath)(oldPath);
    const normalizedNewPath = (0, import_obsidian9.normalizePath)(newPath);
    const pendingWrite = this.data.pendingBinaryWrites[normalizedOldPath];
    if (!pendingWrite) {
      return;
    }
    delete this.data.pendingBinaryWrites[normalizedOldPath];
    this.moveBinarySyncToken(normalizedOldPath, normalizedNewPath);
    this.movePersistedBinaryTransferState(normalizedOldPath, normalizedNewPath);
    await this.cancelBinaryTransferForLocalPath(normalizedOldPath, "rename");
    const nextServerPath = this.resolvePendingMarkdownServerPath(
      pendingWrite.workspaceId,
      normalizedNewPath,
      pendingWrite.serverPath
    );
    if (!nextServerPath) {
      this.schedulePersist();
      this.scheduleExplorerLoadingDecorations();
      this.recordLog(
        "blob",
        `[${pendingWrite.workspaceId}] Cleared pending binary write for ${normalizedOldPath} because it moved outside the downloaded room.`
      );
      return;
    }
    this.data.pendingBinaryWrites[normalizedNewPath] = {
      ...pendingWrite,
      localPath: normalizedNewPath,
      serverPath: nextServerPath
    };
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
    const currentFile = this.app.vault.getAbstractFileByPath(normalizedNewPath);
    const entry = pendingWrite.entryId ? this.getRoomStore(pendingWrite.workspaceId)?.getEntryById(pendingWrite.entryId) ?? null : this.getRoomStore(pendingWrite.workspaceId)?.getEntryByPath(nextServerPath) ?? null;
    if (currentFile instanceof import_obsidian9.TFile && isBinaryPath(currentFile.path)) {
      await this.queueBinaryWrite(
        pendingWrite.workspaceId,
        nextServerPath,
        await this.app.vault.readBinary(currentFile),
        entry
      );
    }
  }
  clearPendingMarkdownCreate(localPath) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    if (!(normalizedLocalPath in this.data.pendingMarkdownCreates)) {
      return;
    }
    delete this.data.pendingMarkdownCreates[normalizedLocalPath];
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
  }
  clearPendingBinaryWriteRecord(localPath) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    if (!(normalizedLocalPath in this.data.pendingBinaryWrites)) {
      return;
    }
    delete this.data.pendingBinaryWrites[normalizedLocalPath];
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
  }
  async clearPendingBinaryWriteForLocalPath(localPath, cancelTransfer) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    if (!(normalizedLocalPath in this.data.pendingBinaryWrites)) {
      if (cancelTransfer) {
        this.invalidateBinarySyncToken(normalizedLocalPath);
        await this.cancelBinaryTransferForLocalPath(normalizedLocalPath, "clear");
      }
      return;
    }
    if (cancelTransfer) {
      this.invalidateBinarySyncToken(normalizedLocalPath);
      await this.cancelBinaryTransferForLocalPath(normalizedLocalPath, "clear");
    }
    delete this.data.pendingBinaryWrites[normalizedLocalPath];
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
  }
  clearPendingMarkdownMergesForLocalPath(localPath) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    let changed = false;
    for (const [entryId, pendingMerge] of Object.entries(this.data.pendingMarkdownMerges)) {
      if (pendingMerge.localPath !== normalizedLocalPath) {
        continue;
      }
      delete this.data.pendingMarkdownMerges[entryId];
      changed = true;
    }
    if (changed) {
      this.schedulePersist();
      this.scheduleExplorerLoadingDecorations();
    }
  }
  clearPendingMarkdownCreatesForWorkspace(workspaceId) {
    let changed = false;
    for (const [localPath, pendingCreate] of Object.entries(this.data.pendingMarkdownCreates)) {
      if (pendingCreate.workspaceId !== workspaceId) {
        continue;
      }
      delete this.data.pendingMarkdownCreates[localPath];
      changed = true;
    }
    if (changed) {
      this.schedulePersist();
      this.scheduleExplorerLoadingDecorations();
    }
  }
  async clearPendingBinaryWritesForWorkspace(workspaceId) {
    let changed = false;
    for (const [localPath, pendingWrite] of Object.entries(this.data.pendingBinaryWrites)) {
      if (pendingWrite.workspaceId !== workspaceId) {
        continue;
      }
      this.invalidateBinarySyncToken(localPath);
      await this.cancelBinaryTransferForLocalPath(localPath, "workspace-clear");
      delete this.data.pendingBinaryWrites[localPath];
      changed = true;
    }
    if (changed) {
      this.schedulePersist();
      this.scheduleExplorerLoadingDecorations();
    }
  }
  clearPendingMarkdownMergesForWorkspace(workspaceId) {
    let changed = false;
    for (const [entryId, pendingMerge] of Object.entries(this.data.pendingMarkdownMerges)) {
      if (pendingMerge.workspaceId !== workspaceId) {
        continue;
      }
      delete this.data.pendingMarkdownMerges[entryId];
      changed = true;
    }
    if (changed) {
      this.schedulePersist();
      this.scheduleExplorerLoadingDecorations();
    }
  }
  async rememberPendingMarkdownCreate(workspaceId, localPath, serverPath, error) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const existing = this.data.pendingMarkdownCreates[normalizedLocalPath];
    this.data.pendingMarkdownCreates[normalizedLocalPath] = {
      workspaceId,
      localPath: normalizedLocalPath,
      serverPath,
      createdAt: existing?.createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
      lastAttemptAt: (/* @__PURE__ */ new Date()).toISOString(),
      lastError: errorMessage
    };
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
    this.recordLog(
      "ops",
      `[${workspaceId}] Keeping local markdown create for ${serverPath} pending until the next successful room refresh/connect: ${errorMessage}`,
      "error"
    );
  }
  rememberPendingMarkdownMerge(workspaceId, entryId, localPath, filePath, error = null) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    const existing = this.data.pendingMarkdownMerges[entryId];
    this.data.pendingMarkdownMerges[entryId] = {
      workspaceId,
      entryId,
      localPath: normalizedLocalPath,
      filePath,
      createdAt: existing?.createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
      lastAttemptAt: (/* @__PURE__ */ new Date()).toISOString(),
      lastError: error ? error instanceof Error ? error.message : String(error) : null
    };
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
  }
  rememberPendingBinaryWrite(workspaceId, localPath, serverPath, entryId, error = null) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    const existing = this.data.pendingBinaryWrites[normalizedLocalPath];
    this.data.pendingBinaryWrites[normalizedLocalPath] = {
      workspaceId,
      localPath: normalizedLocalPath,
      serverPath,
      entryId,
      createdAt: existing?.createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
      lastAttemptAt: (/* @__PURE__ */ new Date()).toISOString(),
      lastError: error ? error instanceof Error ? error.message : String(error) : null
    };
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
  }
  updatePendingBinaryWriteEntryId(localPath, entryId, serverPath) {
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(localPath);
    const existing = this.data.pendingBinaryWrites[normalizedLocalPath];
    if (!existing) {
      return;
    }
    this.data.pendingBinaryWrites[normalizedLocalPath] = {
      ...existing,
      entryId,
      serverPath: serverPath ?? existing.serverPath,
      lastAttemptAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
  }
  clearPendingMarkdownMerge(entryId) {
    if (!(entryId in this.data.pendingMarkdownMerges)) {
      return;
    }
    delete this.data.pendingMarkdownMerges[entryId];
    this.schedulePersist();
    this.scheduleExplorerLoadingDecorations();
  }
  shouldDropPendingMarkdownCreateAsRemoteEcho(workspaceId, pendingCreate, remoteEntry) {
    if (remoteEntry.deleted || remoteEntry.kind !== "markdown") {
      return false;
    }
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(pendingCreate.localPath);
    if (this.wasPathRecentlyObservedAsRemote(workspaceId, normalizedLocalPath)) {
      return true;
    }
    const cachedEntry = this.findPersistedCrdtCacheEntry(remoteEntry.id);
    if (cachedEntry && (0, import_obsidian9.normalizePath)(cachedEntry.filePath) === normalizedLocalPath) {
      return true;
    }
    const pendingMerge = this.data.pendingMarkdownMerges[remoteEntry.id];
    if (pendingMerge && (0, import_obsidian9.normalizePath)(pendingMerge.localPath) === normalizedLocalPath) {
      return true;
    }
    return false;
  }
  shouldDropPendingBinaryWriteAsRemoteEcho(workspaceId, pendingWrite, remoteEntry) {
    if (remoteEntry.deleted || remoteEntry.kind !== "binary") {
      return false;
    }
    const normalizedLocalPath = (0, import_obsidian9.normalizePath)(pendingWrite.localPath);
    if (this.wasPathRecentlyObservedAsRemote(workspaceId, normalizedLocalPath)) {
      return true;
    }
    const cachedEntry = this.findPersistedBinaryCacheEntry(remoteEntry.id);
    if (cachedEntry && (0, import_obsidian9.normalizePath)(cachedEntry.filePath) === normalizedLocalPath) {
      return true;
    }
    if (!pendingWrite.entryId && !remoteEntry.blob && (0, import_obsidian9.normalizePath)(pendingWrite.serverPath) === (0, import_obsidian9.normalizePath)(remoteEntry.path)) {
      return true;
    }
    return false;
  }
  resolvePendingMarkdownServerPath(workspaceId, localPath, fallbackServerPath) {
    const folderName = this.getDownloadedFolderName(workspaceId);
    if (!folderName) {
      return fallbackServerPath;
    }
    return toServerPathForRoom(localPath, this.data.settings.syncRoot, folderName) ?? null;
  }
  resolveEntryByLocalPath(localPath) {
    const downloadedRooms = this.getDownloadedRooms().sort((left, right) => right.folderName.length - left.folderName.length);
    for (const room of downloadedRooms) {
      const serverPath = toServerPathForRoom(localPath, this.data.settings.syncRoot, room.folderName);
      if (serverPath === null) {
        continue;
      }
      const entry = this.getRoomStore(room.workspaceId)?.getEntryByPath(serverPath) ?? null;
      if (entry) {
        return entry;
      }
    }
    return null;
  }
  hasPersistedCrdtCache(entryId) {
    return Boolean(this.findPersistedCrdtCacheEntry(entryId));
  }
  findPersistedCrdtCacheEntry(entryId) {
    const cacheKey = this.getCrdtCacheKey(entryId);
    return this.data.crdtCache.entries[cacheKey] ?? this.data.crdtCache.entries[entryId] ?? null;
  }
  getPersistedCrdtState(entryId) {
    const cacheKey = this.getCrdtCacheKey(entryId);
    const cached = this.findPersistedCrdtCacheEntry(entryId);
    if (!cached) {
      return null;
    }
    try {
      return decodeBase64(cached.encodedState);
    } catch (error) {
      delete this.data.crdtCache.entries[cacheKey];
      delete this.data.crdtCache.entries[entryId];
      this.recordLog(
        "crdt",
        `Dropped invalid persisted CRDT cache for ${entryId}: ${error instanceof Error ? error.message : String(error)}`,
        "error"
      );
      this.schedulePersist();
      return null;
    }
  }
  persistCrdtState(entryId, filePath, state) {
    const cacheKey = this.getCrdtCacheKey(entryId);
    this.data.crdtCache.entries[cacheKey] = {
      encodedState: encodeBase64(state),
      filePath,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    delete this.data.crdtCache.entries[entryId];
    this.prunePersistedCrdtCache();
    this.schedulePersist();
  }
  prunePersistedCrdtCache() {
    const entries = Object.entries(this.data.crdtCache.entries);
    if (entries.length <= _RolayPlugin.MAX_PERSISTED_CRDT_DOCS) {
      return;
    }
    const sortedEntries = entries.map(([entryId, entry]) => ({ entryId, entry })).sort((left, right) => compareCrdtCacheEntries(left.entry, right.entry));
    for (const staleEntry of sortedEntries.slice(0, entries.length - _RolayPlugin.MAX_PERSISTED_CRDT_DOCS)) {
      delete this.data.crdtCache.entries[staleEntry.entryId];
    }
  }
  async hydrateMarkdownFileFromState(workspaceId, entry, localPath, nextState, previousState) {
    const localFile = this.app.vault.getAbstractFileByPath(localPath);
    if (!(localFile instanceof import_obsidian9.TFile) || localFile.extension !== "md") {
      return false;
    }
    if (this.hasPendingLocalCreate(workspaceId, entry.path)) {
      this.recordLog("crdt", `[${workspaceId}] Skipped preload overwrite for ${entry.path} because a local create is still pending.`);
      return false;
    }
    if (this.data.pendingMarkdownCreates[(0, import_obsidian9.normalizePath)(localPath)]) {
      this.recordLog("crdt", `[${workspaceId}] Skipped preload overwrite for ${entry.path} because a local markdown create replay is pending.`);
      return false;
    }
    if (this.data.pendingMarkdownMerges[entry.id]) {
      this.recordLog("crdt", `[${workspaceId}] Skipped preload overwrite for ${entry.path} because a local markdown merge is pending.`);
      return false;
    }
    if (getMarkdownViewsForFile(this.app, localPath).length > 0) {
      return false;
    }
    const nextText = decodeMarkdownTextState(nextState);
    const currentText = await this.app.vault.cachedRead(localFile);
    if (currentText === nextText) {
      return true;
    }
    const previousText = previousState ? decodeMarkdownTextState(previousState) : null;
    const safeToOverwrite = currentText.length === 0 || previousText !== null && currentText === previousText;
    if (!safeToOverwrite) {
      this.recordLog(
        "crdt",
        `[${workspaceId}] Left local markdown ${entry.path} untouched during preload because it diverged from the last known cached content.`
      );
      return false;
    }
    await this.app.vault.modify(localFile, nextText);
    return true;
  }
  async refreshClosedRoomMarkdownContent(workspaceId, reason) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return;
    }
    const targets = runtime.treeStore.getEntries().filter((entry) => !entry.deleted && entry.kind === "markdown").map((entry) => ({
      entry,
      localPath: this.fileBridge.toLocalPath(workspaceId, entry.path) ?? entry.path
    })).filter(({ localPath }) => {
      const localFile = this.app.vault.getAbstractFileByPath(localPath);
      return localFile instanceof import_obsidian9.TFile && localFile.extension === "md" && getMarkdownViewsForFile(this.app, localPath).length === 0;
    });
    await this.fetchMarkdownTargetsFromBootstrap(workspaceId, targets, reason, true);
  }
  async refreshMarkdownContentBeforeRoomExit(file, oldPath) {
    const room = this.resolveDownloadedRoomByLocalPath(oldPath);
    if (!room) {
      return;
    }
    if (this.resolveDownloadedRoomByLocalPath(file.path)?.workspaceId === room.workspaceId) {
      return;
    }
    const oldServerPath = toServerPathForRoom(oldPath, this.data.settings.syncRoot, room.folderName);
    if (!oldServerPath) {
      return;
    }
    const roomStore = this.getRoomStore(room.workspaceId);
    if (!roomStore) {
      return;
    }
    const normalizedOldPath = (0, import_obsidian9.normalizePath)(oldPath);
    const normalizedNewPath = (0, import_obsidian9.normalizePath)(file.path);
    const targets = roomStore.getEntries().filter(
      (entry) => !entry.deleted && entry.kind === "markdown" && (entry.path === oldServerPath || entry.path.startsWith(`${oldServerPath}/`))
    ).map((entry) => {
      const oldLocalPath = (0, import_obsidian9.normalizePath)(this.fileBridge.toLocalPath(room.workspaceId, entry.path) ?? entry.path);
      if (oldLocalPath !== normalizedOldPath && !oldLocalPath.startsWith(`${normalizedOldPath}/`)) {
        return null;
      }
      const relativeSuffix = oldLocalPath.slice(normalizedOldPath.length);
      return {
        entry,
        localPath: `${normalizedNewPath}${relativeSuffix}`
      };
    }).filter((target) => target !== null);
    if (targets.length === 0) {
      return;
    }
    await this.fetchMarkdownTargetsFromBootstrap(
      room.workspaceId,
      targets,
      "room-exit-content-sync",
      false
    );
  }
  async fetchMarkdownTargetsFromBootstrap(workspaceId, targets, reason, updateLocks) {
    if (targets.length === 0 || !this.isRoomSyncActive(workspaceId)) {
      return;
    }
    const targetsByEntryId = new Map(
      targets.map((target) => [target.entry.id, target])
    );
    const metadataResponse = await this.apiClient.getWorkspaceMarkdownBootstrap(workspaceId, {
      entryIds: [...targetsByEntryId.keys()],
      includeState: false
    });
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    if (metadataResponse.encoding !== "base64") {
      throw new Error(`Unsupported markdown bootstrap encoding: ${metadataResponse.encoding}`);
    }
    const metadataByEntryId = new Map(
      metadataResponse.documents.map((document2) => [document2.entryId, document2])
    );
    const knownEntries = targets.map((target) => target.entry).filter((entry) => metadataByEntryId.has(entry.id));
    if (knownEntries.length === 0) {
      return;
    }
    const batches = this.buildMarkdownBootstrapBatches(knownEntries, metadataByEntryId);
    let hydratedTargets = 0;
    let changedStates = 0;
    for (const batch of batches) {
      const response = await this.apiClient.getWorkspaceMarkdownBootstrap(workspaceId, {
        entryIds: batch.map((entry) => entry.id),
        includeState: true
      });
      if (!this.isRoomSyncActive(workspaceId)) {
        return;
      }
      if (response.encoding !== "base64") {
        throw new Error(`Unsupported markdown bootstrap encoding: ${response.encoding}`);
      }
      if (!response.includesState) {
        throw new Error("Markdown bootstrap batch omitted state payloads.");
      }
      const responseByEntryId = new Map(
        response.documents.map((document2) => [document2.entryId, document2])
      );
      for (const entry of batch) {
        if (!this.isRoomSyncActive(workspaceId)) {
          return;
        }
        const target = targetsByEntryId.get(entry.id);
        const document2 = responseByEntryId.get(entry.id);
        if (!target || !document2?.state) {
          continue;
        }
        const previousState = this.getPersistedCrdtState(entry.id);
        const normalizedState = normalizeBootstrapState(document2.state);
        if (this.persistCrdtStateIfChanged(entry.id, target.localPath, normalizedState)) {
          changedStates += 1;
        }
        if (await this.hydrateMarkdownFileFromState(
          workspaceId,
          entry,
          target.localPath,
          normalizedState,
          previousState
        )) {
          hydratedTargets += 1;
        }
        if (updateLocks && this.isLocalPathInDownloadedRoom(target.localPath, workspaceId)) {
          await this.syncMarkdownLockForEntry(workspaceId, entry, target.localPath, normalizedState);
        }
      }
    }
    if (changedStates > 0 || hydratedTargets > 0) {
      this.recordLog(
        "crdt",
        `[${workspaceId}] Refreshed ${hydratedTargets}/${targets.length} closed markdown document(s) via HTTP bootstrap (${reason}, ${changedStates} state update(s)).`
      );
    }
  }
  persistCrdtStateIfChanged(entryId, filePath, state) {
    const existing = this.findPersistedCrdtCacheEntry(entryId);
    if (existing && (0, import_obsidian9.normalizePath)(existing.filePath) === (0, import_obsidian9.normalizePath)(filePath) && areUint8ArraysEqual(decodeBase64(existing.encodedState), state)) {
      return false;
    }
    this.persistCrdtState(entryId, filePath, state);
    return true;
  }
  getCrdtCacheKey(entryId) {
    const normalizedServerUrl = normalizeServerUrl(this.data.settings.serverUrl);
    return normalizedServerUrl ? `${normalizedServerUrl}::${entryId}` : entryId;
  }
  findPersistedBinaryCacheEntry(entryId) {
    const cacheKey = this.getBinaryCacheKey(entryId);
    return this.data.binaryCache.entries[cacheKey] ?? this.data.binaryCache.entries[entryId] ?? null;
  }
  persistBinaryCacheEntry(entryId, filePath, hash, sizeBytes, mimeType) {
    const normalizedHash = normalizeSha256Hash(hash);
    if (!normalizedHash) {
      return;
    }
    const cacheKey = this.getBinaryCacheKey(entryId);
    this.data.binaryCache.entries[cacheKey] = {
      hash: normalizedHash,
      sizeBytes,
      mimeType,
      filePath,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    delete this.data.binaryCache.entries[entryId];
    this.prunePersistedBinaryCache();
    this.schedulePersist();
  }
  clearPersistedBinaryCacheEntry(entryId) {
    const cacheKey = this.getBinaryCacheKey(entryId);
    if (!(cacheKey in this.data.binaryCache.entries) && !(entryId in this.data.binaryCache.entries)) {
      return;
    }
    delete this.data.binaryCache.entries[cacheKey];
    delete this.data.binaryCache.entries[entryId];
    this.schedulePersist();
  }
  prunePersistedBinaryCache() {
    const entries = Object.entries(this.data.binaryCache.entries).map(([entryId, entry]) => ({
      entryId,
      entry
    }));
    if (entries.length <= _RolayPlugin.MAX_PERSISTED_BINARY_ENTRIES) {
      return;
    }
    const sortedEntries = [...entries].sort((left, right) => left.entry.updatedAt.localeCompare(right.entry.updatedAt));
    for (const staleEntry of sortedEntries.slice(0, entries.length - _RolayPlugin.MAX_PERSISTED_BINARY_ENTRIES)) {
      delete this.data.binaryCache.entries[staleEntry.entryId];
    }
  }
  getBinaryCacheKey(entryId) {
    const normalizedServerUrl = normalizeServerUrl(this.data.settings.serverUrl);
    return normalizedServerUrl ? `${normalizedServerUrl}::${entryId}` : entryId;
  }
  formatRoomCrdtCacheLabel(bootstrap, markdownEntryCount, cachedMarkdownCount) {
    if (markdownEntryCount === 0) {
      return "no markdown files yet";
    }
    if (!bootstrap || bootstrap.status === "idle") {
      if (bootstrap?.lockedLocalPaths.size) {
        return `${cachedMarkdownCount}/${markdownEntryCount} loaded (${bootstrap.lockedLocalPaths.size} still protected)`;
      }
      return `${cachedMarkdownCount}/${markdownEntryCount} loaded`;
    }
    if (bootstrap.status === "loading") {
      if (bootstrap.totalBytes <= 0) {
        return `measuring size (${bootstrap.completedTargets}/${Math.max(bootstrap.totalTargets, markdownEntryCount)} files, ${bootstrap.hydratedTargets} written locally)`;
      }
      const completedBytes = Math.min(bootstrap.completedBytes, bootstrap.totalBytes);
      const percent = Math.round(completedBytes / bootstrap.totalBytes * 100);
      return `${percent}% loaded (${formatByteCount(completedBytes)}/${formatByteCount(bootstrap.totalBytes)}, ${bootstrap.completedTargets}/${bootstrap.totalTargets} files, ${bootstrap.hydratedTargets} written locally)`;
    }
    if (bootstrap.status === "error") {
      if (bootstrap.totalBytes > 0) {
        const completedBytes = Math.min(bootstrap.completedBytes, bootstrap.totalBytes);
        const percent = Math.round(completedBytes / bootstrap.totalBytes * 100);
        return `partial ${percent}% loaded (${formatByteCount(completedBytes)}/${formatByteCount(bootstrap.totalBytes)}, ${bootstrap.lockedLocalPaths.size} protected, ${bootstrap.lastError ?? "bootstrap error"})`;
      }
      return `partial ${cachedMarkdownCount}/${markdownEntryCount} loaded (${bootstrap.lastError ?? "bootstrap error"})`;
    }
    if (bootstrap.totalBytes > 0) {
      const protectionLabel = bootstrap.lockedLocalPaths.size > 0 ? `, ${bootstrap.lockedLocalPaths.size} still protected` : "";
      return `100% loaded (${formatByteCount(bootstrap.totalBytes)}/${formatByteCount(bootstrap.totalBytes)}, ${cachedMarkdownCount}/${markdownEntryCount} files cached, ${bootstrap.hydratedTargets} written locally${protectionLabel})`;
    }
    return `100% loaded (${cachedMarkdownCount}/${markdownEntryCount} files cached, ${bootstrap.hydratedTargets} written locally)`;
  }
  cancelRoomMarkdownBootstrap(workspaceId) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return;
    }
    runtime.markdownBootstrap.runToken += 1;
    runtime.markdownBootstrap.rerunRequested = false;
    runtime.markdownBootstrap.status = "idle";
    runtime.markdownBootstrap.totalTargets = 0;
    runtime.markdownBootstrap.completedTargets = 0;
    runtime.markdownBootstrap.totalBytes = 0;
    runtime.markdownBootstrap.completedBytes = 0;
    runtime.markdownBootstrap.documentBytesByEntryId.clear();
    runtime.markdownBootstrap.completedEntryIds.clear();
    runtime.markdownBootstrap.hydratedTargets = 0;
    runtime.markdownBootstrap.lastError = null;
    this.scheduleExplorerLoadingDecorations();
  }
  async bootstrapRoomMarkdownCache(workspaceId, entries, reason, lockEntries = entries) {
    const runtime = this.roomRuntime.get(workspaceId);
    if (!runtime) {
      return;
    }
    const activeFilePath = this.app.workspace.getActiveFile()?.path ?? null;
    const markdownEntries = entries.filter((entry) => !entry.deleted && entry.kind === "markdown").sort((left, right) => {
      const leftLocalPath = this.fileBridge.toLocalPath(workspaceId, left.path) ?? left.path;
      const rightLocalPath = this.fileBridge.toLocalPath(workspaceId, right.path) ?? right.path;
      if (activeFilePath && leftLocalPath === activeFilePath && rightLocalPath !== activeFilePath) {
        return -1;
      }
      if (activeFilePath && rightLocalPath === activeFilePath && leftLocalPath !== activeFilePath) {
        return 1;
      }
      return left.path.localeCompare(right.path);
    });
    if (runtime.markdownBootstrap.status === "loading") {
      runtime.markdownBootstrap.rerunRequested = true;
      return;
    }
    runtime.markdownBootstrap.runToken += 1;
    const runToken = runtime.markdownBootstrap.runToken;
    runtime.markdownBootstrap.rerunRequested = false;
    runtime.markdownBootstrap.totalTargets = markdownEntries.length;
    runtime.markdownBootstrap.completedTargets = 0;
    runtime.markdownBootstrap.totalBytes = 0;
    runtime.markdownBootstrap.completedBytes = 0;
    runtime.markdownBootstrap.documentBytesByEntryId.clear();
    runtime.markdownBootstrap.completedEntryIds.clear();
    runtime.markdownBootstrap.hydratedTargets = 0;
    runtime.markdownBootstrap.lastRunAt = (/* @__PURE__ */ new Date()).toISOString();
    runtime.markdownBootstrap.lastError = null;
    runtime.markdownBootstrap.status = markdownEntries.length > 0 ? "loading" : "ready";
    this.updateStatusBar();
    await this.refreshRoomMarkdownLocks(workspaceId, lockEntries);
    if (markdownEntries.length === 0) {
      return;
    }
    this.recordLog(
      "crdt",
      `[${workspaceId}] Preloading ${markdownEntries.length} markdown document(s) via HTTP bootstrap metadata + state batches (${reason}).`
    );
    try {
      const metadataResponse = await this.apiClient.getWorkspaceMarkdownBootstrap(workspaceId, {
        entryIds: markdownEntries.map((entry) => entry.id),
        includeState: false
      });
      if (runtime.markdownBootstrap.runToken !== runToken) {
        return;
      }
      if (metadataResponse.encoding !== "base64") {
        throw new Error(`Unsupported markdown bootstrap encoding: ${metadataResponse.encoding}`);
      }
      const metadataByEntryId = new Map(
        metadataResponse.documents.map((document2) => [document2.entryId, document2])
      );
      for (const document2 of metadataResponse.documents) {
        runtime.markdownBootstrap.documentBytesByEntryId.set(
          document2.entryId,
          Math.max(0, document2.encodedBytes)
        );
      }
      const knownEntries = markdownEntries.filter((entry) => metadataByEntryId.has(entry.id));
      const metadataMissingCount = markdownEntries.length - knownEntries.length;
      runtime.markdownBootstrap.totalTargets = metadataResponse.documentCount > 0 ? metadataResponse.documentCount : metadataResponse.documents.length;
      runtime.markdownBootstrap.totalBytes = metadataResponse.totalEncodedBytes > 0 ? metadataResponse.totalEncodedBytes : metadataResponse.documents.reduce(
        (sum, document2) => sum + Math.max(0, document2.encodedBytes),
        0
      );
      this.updateStatusBar();
      if (knownEntries.length === 0) {
        runtime.markdownBootstrap.lastError = metadataMissingCount > 0 ? `server returned metadata for 0/${markdownEntries.length} markdown documents` : null;
        runtime.markdownBootstrap.status = metadataMissingCount > 0 ? "error" : "ready";
        await this.refreshRoomMarkdownLocks(workspaceId, lockEntries);
        this.updateStatusBar();
        return;
      }
      const batches = this.buildMarkdownBootstrapBatches(knownEntries, metadataByEntryId);
      let missingEntryCount = metadataMissingCount;
      for (const batch of batches) {
        if (runtime.markdownBootstrap.runToken !== runToken) {
          return;
        }
        const response = await this.apiClient.getWorkspaceMarkdownBootstrap(workspaceId, {
          entryIds: batch.map((entry) => entry.id),
          includeState: true
        });
        if (runtime.markdownBootstrap.runToken !== runToken) {
          return;
        }
        if (response.encoding !== "base64") {
          throw new Error(`Unsupported markdown bootstrap encoding: ${response.encoding}`);
        }
        if (!response.includesState) {
          throw new Error("Markdown bootstrap batch omitted state payloads.");
        }
        const responseByEntryId = new Map(response.documents.map((document2) => [document2.entryId, document2]));
        for (const entry of batch) {
          if (runtime.markdownBootstrap.runToken !== runToken) {
            return;
          }
          const document2 = responseByEntryId.get(entry.id);
          const metadataDocument = metadataByEntryId.get(entry.id);
          if (!document2?.state || !metadataDocument) {
            missingEntryCount += 1;
            continue;
          }
          const localPath = this.fileBridge.toLocalPath(workspaceId, entry.path) ?? entry.path;
          const previousState = this.getPersistedCrdtState(entry.id);
          const normalizedState = normalizeBootstrapState(document2.state);
          this.persistCrdtState(entry.id, localPath, normalizedState);
          if (await this.hydrateMarkdownFileFromState(workspaceId, entry, localPath, normalizedState, previousState)) {
            runtime.markdownBootstrap.hydratedTargets += 1;
          }
          runtime.markdownBootstrap.completedTargets += 1;
          runtime.markdownBootstrap.completedBytes += Math.max(
            0,
            document2.encodedBytes ?? metadataDocument.encodedBytes
          );
          runtime.markdownBootstrap.completedEntryIds.add(entry.id);
          if (activeFilePath && localPath === activeFilePath) {
            await this.bindActiveMarkdownToCrdt();
          }
          await this.syncMarkdownLockForEntry(workspaceId, entry, localPath, normalizedState);
          this.updateStatusBar();
        }
      }
      if (runtime.markdownBootstrap.totalBytes > 0) {
        runtime.markdownBootstrap.completedBytes = Math.min(
          runtime.markdownBootstrap.completedBytes,
          runtime.markdownBootstrap.totalBytes
        );
      }
      runtime.markdownBootstrap.lastError = missingEntryCount > 0 ? `server returned ${runtime.markdownBootstrap.completedTargets}/${markdownEntries.length} bootstrap document(s)` : null;
      runtime.markdownBootstrap.status = missingEntryCount > 0 ? "error" : "ready";
      await this.refreshRoomMarkdownLocks(workspaceId, lockEntries);
      this.updateStatusBar();
      if (missingEntryCount === 0) {
        this.recordLog(
          "crdt",
          `[${workspaceId}] HTTP markdown bootstrap stored ${runtime.markdownBootstrap.completedTargets} markdown document(s) with ${formatByteCount(runtime.markdownBootstrap.completedBytes)} downloaded.`
        );
      } else {
        this.recordLog(
          "crdt",
          `[${workspaceId}] HTTP markdown bootstrap stored ${runtime.markdownBootstrap.completedTargets}/${markdownEntries.length} markdown document(s).`,
          "error"
        );
      }
    } catch (error) {
      if (runtime.markdownBootstrap.runToken !== runToken) {
        return;
      }
      const message = getErrorMessage(error);
      if (isStaleMarkdownBootstrapError(error)) {
        runtime.markdownBootstrap.lastError = null;
        runtime.markdownBootstrap.status = "idle";
        this.recordLog(
          "crdt",
          `[${workspaceId}] HTTP markdown bootstrap saw a stale markdown entry; refreshing snapshot before retry.`
        );
        this.scheduleSnapshotRefresh(workspaceId, "markdown-bootstrap-stale-entry");
        this.updateStatusBar();
        return;
      }
      runtime.markdownBootstrap.lastError = message;
      runtime.markdownBootstrap.status = "error";
      this.recordLog(
        "crdt",
        `[${workspaceId}] HTTP markdown bootstrap failed: ${message}`,
        "error"
      );
      this.updateStatusBar();
    }
    if (runtime.markdownBootstrap.rerunRequested) {
      runtime.markdownBootstrap.rerunRequested = false;
      await this.bootstrapRoomMarkdownCache(
        workspaceId,
        runtime.treeStore.getEntries(),
        "rerun",
        runtime.treeStore.getEntries()
      );
    }
  }
  buildMarkdownBootstrapBatches(entries, metadataByEntryId) {
    const batches = [];
    let currentBatch = [];
    let currentBatchBytes = 0;
    for (const entry of entries) {
      const encodedBytes = Math.max(0, metadataByEntryId.get(entry.id)?.encodedBytes ?? 0);
      const wouldOverflowDocs = currentBatch.length >= _RolayPlugin.MARKDOWN_BOOTSTRAP_BATCH_MAX_DOCS;
      const wouldOverflowBytes = currentBatch.length > 0 && currentBatchBytes + encodedBytes > _RolayPlugin.MARKDOWN_BOOTSTRAP_BATCH_TARGET_ENCODED_BYTES;
      if (wouldOverflowDocs || wouldOverflowBytes) {
        batches.push(currentBatch);
        currentBatch = [];
        currentBatchBytes = 0;
      }
      currentBatch.push(entry);
      currentBatchBytes += encodedBytes;
    }
    if (currentBatch.length > 0) {
      batches.push(currentBatch);
    }
    return batches;
  }
  isLiveSyncEnabledForLocalPath(localPath) {
    for (const room of this.getDownloadedRooms()) {
      const serverPath = toServerPathForRoom(localPath, this.data.settings.syncRoot, room.folderName);
      if (serverPath === null) {
        continue;
      }
      return (this.roomRuntime.get(room.workspaceId)?.streamStatus ?? "stopped") !== "stopped";
    }
    return false;
  }
  async handlePotentialRoomRootRemoval(localPath, reason) {
    const room = this.getDownloadedRooms().find((item) => {
      const roomRoot = getRoomRoot(this.data.settings.syncRoot, item.folderName);
      return roomRoot === localPath;
    });
    if (!room) {
      return false;
    }
    await this.deactivateRoomDownload(room.workspaceId, false);
    this.recordLog(
      "rooms",
      `Detached local room folder for ${room.workspaceId} after ${reason}. Remote room content was left untouched.`
    );
    return true;
  }
  async reconcileLocalRoomFolders() {
    for (const room of this.getDownloadedRooms()) {
      const roomRoot = getRoomRoot(this.data.settings.syncRoot, room.folderName);
      if (await this.localPathExists(roomRoot)) {
        continue;
      }
      await this.deactivateRoomDownload(room.workspaceId, false);
      this.recordLog(
        "rooms",
        `Detached room ${room.workspaceId} because the local folder ${roomRoot} is missing. Remote room content was left untouched.`
      );
    }
  }
  async localPathExists(path) {
    if (this.app.vault.getAbstractFileByPath(path)) {
      return true;
    }
    try {
      return await this.app.vault.adapter.exists((0, import_obsidian9.normalizePath)(path));
    } catch {
      return false;
    }
  }
  patchInviteEnabled(workspaceId, enabled) {
    this.roomList = this.roomList.map((room) => {
      if (room.workspace.id !== workspaceId) {
        return room;
      }
      return {
        ...room,
        inviteEnabled: enabled
      };
    });
    this.adminRoomList = this.adminRoomList.map((room) => {
      if (room.workspace.id !== workspaceId) {
        return room;
      }
      return {
        ...room,
        inviteEnabled: enabled
      };
    });
  }
  patchRoomPublication(workspaceId, publication) {
    this.roomList = this.roomList.map((room) => {
      if (room.workspace.id !== workspaceId) {
        return room;
      }
      return {
        ...room,
        publication: normalizeRoomPublicationState(publication, workspaceId)
      };
    });
    this.adminRoomList = this.adminRoomList.map((room) => {
      if (room.workspace.id !== workspaceId) {
        return room;
      }
      return {
        ...room,
        publication: normalizeRoomPublicationState(publication, workspaceId)
      };
    });
  }
  async queueCreateFolder(workspaceId, path) {
    if (!this.isRoomSyncActive(workspaceId)) {
      this.recordLog("ops", `[${workspaceId}] Ignored local folder create ${path} because the room is disconnected.`);
      return;
    }
    this.registerPendingLocalCreate(workspaceId, path);
    let confirmedServerCreate = false;
    try {
      const response = await this.operationsQueue.enqueue(
        workspaceId,
        {
          type: "create_folder",
          path
        },
        `local folder create ${path}`
      );
      const createdEntry = response.results.find((result) => result.status === "applied")?.entry ?? null;
      if (createdEntry) {
        this.optimisticUpsertRoomEntry(workspaceId, createdEntry);
      }
      confirmedServerCreate = true;
    } finally {
      if (!confirmedServerCreate) {
        this.clearPendingLocalCreate(workspaceId, path);
      }
    }
  }
  async queueCreateMarkdown(workspaceId, path, localContent = "") {
    const localPath = this.fileBridge.toLocalPath(workspaceId, path) ?? path;
    await this.syncMarkdownCreate(workspaceId, path, localPath, localContent, 0);
  }
  async syncMarkdownCreate(workspaceId, path, localPath, localContent = "", conflictDepth = 0) {
    if (!this.isRoomSyncActive(workspaceId)) {
      await this.rememberPendingMarkdownCreate(
        workspaceId,
        localPath,
        path,
        new Error("Room is disconnected; markdown create will retry after reconnect.")
      );
      return;
    }
    this.registerPendingLocalCreate(workspaceId, path);
    let confirmedServerCreate = false;
    try {
      const response = await this.operationsQueue.enqueue(
        workspaceId,
        {
          type: "create_markdown",
          path
        },
        `local markdown create ${path}`
      );
      const appliedEntry = response.results.find((result) => result.status === "applied")?.entry ?? null;
      if (appliedEntry) {
        this.optimisticUpsertRoomEntry(workspaceId, appliedEntry);
      }
      confirmedServerCreate = true;
      this.clearPendingMarkdownCreate(localPath);
      this.recordLog(
        "ops",
        `[${workspaceId}] Markdown entry created for ${path}. Existing local text will be pushed into the remote CRDT doc when possible.`
      );
      let createdEntry = appliedEntry;
      if (!createdEntry) {
        await this.refreshRoomSnapshot(workspaceId, "markdown-create-seed");
        createdEntry = this.getRoomStore(workspaceId)?.getEntryByPath(path) ?? null;
      }
      if (!createdEntry || createdEntry.kind !== "markdown") {
        return;
      }
      const currentLocalContent = await this.readLocalMarkdownContent(localPath, localContent);
      if (!currentLocalContent) {
        return;
      }
      const localMarkdownState = createMarkdownTextState(currentLocalContent);
      this.persistCrdtState(createdEntry.id, localPath, localMarkdownState);
      this.rememberPendingMarkdownMerge(workspaceId, createdEntry.id, localPath, path);
      const activeFile = this.app.workspace.getActiveFile();
      try {
        if (activeFile?.path === localPath && this.isLiveSyncEnabledForLocalPath(localPath)) {
          await this.bindActiveMarkdownToCrdt();
          const activeCrdtState = this.crdtManager.getState();
          if (activeCrdtState?.entryId === createdEntry.id) {
            this.scheduleSnapshotRefresh(workspaceId, "markdown-live-import");
            return;
          }
        }
        await this.crdtManager.mergeRemoteMarkdownState(createdEntry, localMarkdownState, path);
        this.clearPendingMarkdownMerge(createdEntry.id);
        this.scheduleSnapshotRefresh(workspaceId, "markdown-seed");
      } catch (error) {
        this.rememberPendingMarkdownMerge(workspaceId, createdEntry.id, localPath, path, error);
        this.handleError(`Remote markdown merge failed for ${path}`, error, false);
      }
    } catch (error) {
      if (error instanceof RolayOperationError && error.result.status === "conflict" && error.result.reason === "path_already_exists") {
        this.clearPendingLocalCreate(workspaceId, path);
        await this.resolveMarkdownCreatePathConflict(
          workspaceId,
          path,
          localPath,
          localContent,
          error.result.suggestedPath,
          conflictDepth
        );
        return;
      }
      await this.rememberPendingMarkdownCreate(workspaceId, localPath, path, error);
      throw error;
    } finally {
      if (!confirmedServerCreate) {
        this.clearPendingLocalCreate(workspaceId, path);
      }
    }
  }
  async resolveMarkdownCreatePathConflict(workspaceId, originalServerPath, originalLocalPath, fallbackLocalContent, suggestedPath, conflictDepth) {
    if (conflictDepth >= 8) {
      throw new Error(`Too many markdown rename retries for ${originalServerPath}.`);
    }
    const localFile = this.app.vault.getAbstractFileByPath(originalLocalPath);
    if (!(localFile instanceof import_obsidian9.TFile) || localFile.extension !== "md") {
      this.clearPendingMarkdownCreate(originalLocalPath);
      this.recordLog(
        "ops",
        `[${workspaceId}] Dropped conflicting local markdown create for ${originalServerPath} because the local file is gone.`,
        "error"
      );
      return;
    }
    const replacementServerPath = this.findAvailableMarkdownConflictPath(
      workspaceId,
      suggestedPath?.trim() || originalServerPath
    );
    const replacementLocalPath = this.fileBridge.toLocalPath(workspaceId, replacementServerPath) ?? replacementServerPath;
    if (replacementLocalPath === originalLocalPath) {
      throw new Error(`No available fallback markdown path for ${originalServerPath}.`);
    }
    await this.fileBridge.runWithSuppressedPaths([originalLocalPath, replacementLocalPath], async () => {
      await this.app.fileManager.renameFile(localFile, replacementLocalPath);
    });
    const conflictMessage = `[${workspaceId}] Local markdown ${originalServerPath} conflicted with an existing server path. Renamed local file to ${replacementServerPath} so both copies survive.`;
    this.recordLog("ops", conflictMessage, "error");
    new import_obsidian9.Notice(`Rolay kept your offline note as ${replacementServerPath}.`);
    const latestLocalContent = await this.readLocalMarkdownContent(replacementLocalPath, fallbackLocalContent);
    await this.rememberPendingMarkdownCreate(
      workspaceId,
      replacementLocalPath,
      replacementServerPath,
      new Error(conflictMessage)
    );
    await this.syncMarkdownCreate(
      workspaceId,
      replacementServerPath,
      replacementLocalPath,
      latestLocalContent,
      conflictDepth + 1
    );
  }
  async reconcilePendingMarkdownCreates(workspaceId, reason) {
    const pendingCreates = this.getPendingMarkdownCreatesForWorkspace(workspaceId);
    if (pendingCreates.length === 0) {
      return;
    }
    this.recordLog(
      "ops",
      `[${workspaceId}] Replaying ${pendingCreates.length} pending local markdown create(s) after ${reason}.`
    );
    for (const pendingCreate of pendingCreates) {
      const currentFile = this.app.vault.getAbstractFileByPath(pendingCreate.localPath);
      if (!(currentFile instanceof import_obsidian9.TFile) || currentFile.extension !== "md") {
        this.clearPendingMarkdownCreate(pendingCreate.localPath);
        this.recordLog(
          "ops",
          `[${workspaceId}] Cleared pending markdown create for ${pendingCreate.localPath} because the local file no longer exists.`
        );
        continue;
      }
      const currentServerPath = toServerPathForRoom(
        pendingCreate.localPath,
        this.data.settings.syncRoot,
        this.getDownloadedFolderName(workspaceId)
      );
      if (currentServerPath === null) {
        this.clearPendingMarkdownCreate(pendingCreate.localPath);
        this.recordLog(
          "ops",
          `[${workspaceId}] Cleared pending markdown create for ${pendingCreate.localPath} because it is no longer inside the room root.`
        );
        continue;
      }
      const remoteEntry = this.getRoomStore(workspaceId)?.getEntryByPath(currentServerPath) ?? null;
      if (remoteEntry) {
        if (this.shouldDropPendingMarkdownCreateAsRemoteEcho(workspaceId, pendingCreate, remoteEntry)) {
          this.clearPendingMarkdownCreate(pendingCreate.localPath);
          this.clearPendingLocalCreate(workspaceId, currentServerPath);
          this.recordLog(
            "ops",
            `[${workspaceId}] Cleared stale pending markdown create for ${currentServerPath} because that path is already owned by remote entry ${remoteEntry.id}.`
          );
          continue;
        }
        const currentLocalContent = await this.readLocalMarkdownContent(pendingCreate.localPath, "");
        await this.resolveMarkdownCreatePathConflict(
          workspaceId,
          currentServerPath,
          pendingCreate.localPath,
          currentLocalContent,
          void 0,
          0
        );
        continue;
      }
      try {
        const currentLocalContent = await this.readLocalMarkdownContent(pendingCreate.localPath, "");
        await this.syncMarkdownCreate(
          workspaceId,
          currentServerPath,
          pendingCreate.localPath,
          currentLocalContent,
          0
        );
      } catch {
      }
    }
  }
  async reconcilePendingMarkdownMerges(workspaceId, reason) {
    const pendingMerges = this.getPendingMarkdownMergesForWorkspace(workspaceId);
    if (pendingMerges.length === 0) {
      return;
    }
    this.recordLog(
      "crdt",
      `[${workspaceId}] Replaying ${pendingMerges.length} pending markdown CRDT merge(s) after ${reason}.`
    );
    for (const pendingMerge of pendingMerges) {
      const currentFile = this.app.vault.getAbstractFileByPath(pendingMerge.localPath);
      if (!(currentFile instanceof import_obsidian9.TFile) || currentFile.extension !== "md") {
        this.clearPendingMarkdownMerge(pendingMerge.entryId);
        this.recordLog(
          "crdt",
          `[${workspaceId}] Cleared pending markdown merge for ${pendingMerge.localPath} because the local file no longer exists.`
        );
        continue;
      }
      const currentServerPath = this.resolvePendingMarkdownServerPath(
        workspaceId,
        pendingMerge.localPath,
        pendingMerge.filePath
      );
      if (currentServerPath === null) {
        this.clearPendingMarkdownMerge(pendingMerge.entryId);
        this.recordLog(
          "crdt",
          `[${workspaceId}] Cleared pending markdown merge for ${pendingMerge.localPath} because it is no longer inside the room root.`
        );
        continue;
      }
      const entry = this.getRoomStore(workspaceId)?.getEntryById(pendingMerge.entryId) ?? null;
      if (!entry || entry.deleted || entry.kind !== "markdown") {
        this.clearPendingMarkdownMerge(pendingMerge.entryId);
        this.recordLog(
          "crdt",
          `[${workspaceId}] Cleared pending markdown merge for ${pendingMerge.localPath} because the remote markdown entry is no longer available.`,
          "error"
        );
        continue;
      }
      const persistedState = this.getPersistedCrdtState(entry.id);
      if (!persistedState) {
        this.clearPendingMarkdownMerge(entry.id);
        this.recordLog(
          "crdt",
          `[${workspaceId}] Cleared pending markdown merge for ${pendingMerge.localPath} because the local CRDT cache is missing.`,
          "error"
        );
        continue;
      }
      this.rememberPendingMarkdownMerge(workspaceId, entry.id, pendingMerge.localPath, currentServerPath);
      try {
        await this.crdtManager.mergeRemoteMarkdownState(entry, persistedState, currentServerPath);
        this.clearPendingMarkdownMerge(entry.id);
      } catch (error) {
        this.rememberPendingMarkdownMerge(workspaceId, entry.id, pendingMerge.localPath, currentServerPath, error);
      }
    }
  }
  async queueBinaryWrite(workspaceId, serverPath, localContent, existingEntry) {
    const localPath = (0, import_obsidian9.normalizePath)(this.fileBridge.toLocalPath(workspaceId, serverPath) ?? serverPath);
    if (!this.isRoomSyncActive(workspaceId)) {
      this.rememberPendingBinaryWrite(
        workspaceId,
        localPath,
        serverPath,
        existingEntry?.id ?? null,
        new Error("Room is disconnected; binary write will retry after reconnect.")
      );
      return;
    }
    if (this.binarySyncTokens.has(localPath)) {
      this.pendingBinarySyncReruns.add(localPath);
      this.rememberPendingBinaryWrite(workspaceId, localPath, serverPath, existingEntry?.id ?? null);
      const existingTransfer = this.binaryTransferState.get(localPath);
      if (existingTransfer?.kind === "upload") {
        this.updateBinaryTransferState(localPath, {
          rerunRequested: true
        });
      }
      return;
    }
    const activeTransfer = this.binaryTransferState.get(localPath);
    if (activeTransfer && activeTransfer.kind === "upload" && activeTransfer.status !== "done" && activeTransfer.status !== "failed" && this.binarySyncTokens.has(localPath)) {
      this.updateBinaryTransferState(localPath, {
        rerunRequested: true
      });
      this.rememberPendingBinaryWrite(workspaceId, localPath, serverPath, existingEntry?.id ?? activeTransfer.entryId);
      return;
    }
    this.rememberPendingBinaryWrite(workspaceId, localPath, serverPath, existingEntry?.id ?? null);
    const token = this.createBinarySyncToken(localPath);
    void this.syncBinaryWrite(
      workspaceId,
      localPath,
      serverPath,
      existingEntry?.id ?? null,
      token,
      localContent
    );
  }
  async syncBinaryWrite(workspaceId, initialLocalPath, fallbackServerPath, initialEntryId, token, initialContent) {
    let finalLocalPath = (0, import_obsidian9.normalizePath)(initialLocalPath);
    let finalServerPath = fallbackServerPath;
    let finalEntryId = initialEntryId;
    let createdPlaceholderEntry = null;
    try {
      if (!this.isRoomSyncActive(workspaceId)) {
        return;
      }
      const currentLocalPath = this.getBinarySyncPathForToken(token);
      if (!currentLocalPath) {
        return;
      }
      finalLocalPath = currentLocalPath;
      const currentFile = this.app.vault.getAbstractFileByPath(currentLocalPath);
      if (!(currentFile instanceof import_obsidian9.TFile) || !isBinaryPath(currentFile.path)) {
        await this.clearPendingBinaryWriteForLocalPath(currentLocalPath, false);
        return;
      }
      const currentServerPath = this.resolvePendingMarkdownServerPath(
        workspaceId,
        currentLocalPath,
        fallbackServerPath
      );
      if (!currentServerPath) {
        await this.clearPendingBinaryWriteForLocalPath(currentLocalPath, false);
        return;
      }
      finalServerPath = currentServerPath;
      const binaryContent = initialContent && (0, import_obsidian9.normalizePath)(initialLocalPath) === currentLocalPath ? initialContent : await this.readLocalBinaryContent(currentLocalPath);
      const sizeBytes = binaryContent.byteLength;
      const hash = await sha256Hash(binaryContent);
      const mimeType = guessMimeTypeFromPath(currentLocalPath);
      let entry = (initialEntryId ? this.getRoomStore(workspaceId)?.getEntryById(initialEntryId) : null) ?? this.getRoomStore(workspaceId)?.getEntryByPath(currentServerPath) ?? null;
      if (!entry || entry.deleted || entry.kind !== "binary") {
        this.registerPendingLocalCreate(workspaceId, currentServerPath);
        let confirmedServerCreate = false;
        try {
          const response = await this.operationsQueue.enqueue(
            workspaceId,
            {
              type: "create_binary_placeholder",
              path: currentServerPath,
              sizeBytes,
              mimeType
            },
            `local binary placeholder ${currentServerPath}`
          );
          if (!this.isRoomSyncActive(workspaceId)) {
            return;
          }
          const appliedEntry = response.results.find((result) => result.status === "applied")?.entry ?? null;
          if (appliedEntry) {
            this.optimisticUpsertRoomEntry(workspaceId, appliedEntry);
          }
          confirmedServerCreate = true;
          createdPlaceholderEntry = appliedEntry;
          entry = appliedEntry;
          finalEntryId = appliedEntry?.id ?? finalEntryId;
          this.updatePendingBinaryWriteEntryId(currentLocalPath, appliedEntry?.id ?? null, currentServerPath);
        } catch (error) {
          if (error instanceof RolayOperationError && error.result.status === "conflict" && error.result.reason === "path_already_exists") {
            this.clearPendingLocalCreate(workspaceId, currentServerPath);
            await this.resolveBinaryWritePathConflict(
              workspaceId,
              currentServerPath,
              currentLocalPath,
              error.result.suggestedPath,
              token
            );
            return;
          }
          throw error;
        } finally {
          if (!confirmedServerCreate) {
            this.clearPendingLocalCreate(workspaceId, currentServerPath);
          }
        }
        if (!entry) {
          await this.refreshRoomSnapshot(workspaceId, "binary-placeholder-create");
          if (!this.isRoomSyncActive(workspaceId)) {
            return;
          }
          entry = this.getRoomStore(workspaceId)?.getEntryByPath(currentServerPath) ?? null;
          if (entry && entry.kind === "binary") {
            createdPlaceholderEntry = entry;
            finalEntryId = entry.id;
            this.updatePendingBinaryWriteEntryId(currentLocalPath, entry.id, currentServerPath);
          }
        }
      }
      if (!entry || entry.deleted || entry.kind !== "binary") {
        throw new Error(`Binary entry for ${currentServerPath} is unavailable after placeholder creation.`);
      }
      const desiredLocalPath = this.getBinarySyncPathForToken(token);
      const desiredServerPath = desiredLocalPath ? this.resolvePendingMarkdownServerPath(workspaceId, desiredLocalPath, currentServerPath) : null;
      if (!desiredLocalPath || !desiredServerPath) {
        if (createdPlaceholderEntry) {
          await this.deleteBinaryPlaceholderIfSafe(workspaceId, createdPlaceholderEntry);
        }
        return;
      }
      finalLocalPath = desiredLocalPath;
      finalServerPath = desiredServerPath;
      if (entry.path !== desiredServerPath) {
        const renameType = getParentPath2(entry.path) === getParentPath2(desiredServerPath) ? "rename_entry" : "move_entry";
        await this.queueRenameOrMove(workspaceId, entry, desiredServerPath, renameType);
        entry = this.getRoomStore(workspaceId)?.getEntryById(entry.id) ?? {
          ...entry,
          path: desiredServerPath
        };
      }
      finalEntryId = entry.id;
      this.updatePendingBinaryWriteEntryId(desiredLocalPath, entry.id, desiredServerPath);
      if (!this.isBinarySyncTokenCurrent(desiredLocalPath, token)) {
        return;
      }
      const existingTransfer = this.binaryTransferState.get(desiredLocalPath);
      this.setBinaryTransferState({
        workspaceId,
        entryId: entry.id,
        localPath: desiredLocalPath,
        serverPath: desiredServerPath,
        kind: "upload",
        status: "preparing",
        bytesTotal: sizeBytes,
        bytesDone: 0,
        hash,
        mimeType,
        uploadId: null,
        cancelUrl: null,
        lastError: null,
        rangeSupported: false,
        createdAt: existingTransfer?.createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        rerunRequested: false,
        abortController: null
      });
      this.traceBlob(
        `[${workspaceId}] upload-ticket request entryId=${entry.id} localPath=${desiredLocalPath} serverPath=${desiredServerPath} hash=${hash} sizeBytes=${sizeBytes} mimeType=${mimeType}`
      );
      const ticket = await this.apiClient.createBlobUploadTicket(entry.id, {
        hash,
        sizeBytes,
        mimeType
      });
      if (!this.isRoomSyncActive(workspaceId)) {
        return;
      }
      this.traceBlob(
        `[${workspaceId}] upload-ticket response entryId=${entry.id} localPath=${desiredLocalPath} serverPath=${desiredServerPath} status=${ticket._meta.status} requestId=${ticket._meta.requestId ?? "-"} alreadyExists=${ticket.alreadyExists} uploadId=${ticket.uploadId} uploadedBytes=${ticket.uploadedBytes} sizeBytes=${ticket.sizeBytes} hash=${ticket.hash}`
      );
      const normalizedTicketHash = normalizeSha256Hash(ticket.hash);
      if (!normalizedTicketHash) {
        throw new Error(`Blob upload ticket for ${desiredServerPath} is missing a valid hash.`);
      }
      const totalUploadBytes = ticket.sizeBytes > 0 ? ticket.sizeBytes : sizeBytes;
      let commitHash = normalizedTicketHash;
      let uploadedBytes = clampTransferBytes(ticket.uploadedBytes, totalUploadBytes);
      if (!this.maybeUpdateBinaryTransferState(desiredLocalPath, {
        entryId: entry.id,
        bytesTotal: totalUploadBytes,
        bytesDone: uploadedBytes,
        hash: normalizedTicketHash,
        mimeType: ticket.mimeType,
        uploadId: ticket.uploadId,
        cancelUrl: ticket.cancel?.url ?? null
      })) {
        return;
      }
      if (!ticket.alreadyExists) {
        const abortController = new AbortController();
        if (!this.maybeUpdateBinaryTransferState(desiredLocalPath, {
          status: "uploading",
          bytesDone: uploadedBytes,
          abortController
        })) {
          return;
        }
        if (uploadedBytes > 0) {
          this.recordLog(
            "blob",
            `[${workspaceId}] Resuming binary upload for ${desiredServerPath} at ${formatByteCount(uploadedBytes)} of ${formatByteCount(totalUploadBytes)}.`
          );
        }
        let offsetRecoveryAttempts = 0;
        while (uploadedBytes < totalUploadBytes) {
          const currentOffset = uploadedBytes;
          const nextChunkEnd = Math.min(
            totalUploadBytes,
            currentOffset + _RolayPlugin.BINARY_UPLOAD_CHUNK_SIZE
          );
          const uploadChunk = binaryContent.slice(currentOffset, nextChunkEnd);
          const contentRange = `bytes ${currentOffset}-${nextChunkEnd - 1}/${totalUploadBytes}`;
          this.traceBlob(
            `[${workspaceId}] upload content request entryId=${entry.id} uploadId=${ticket.uploadId} localPath=${desiredLocalPath} hash=${commitHash} sizeBytes=${totalUploadBytes} chunkStart=${currentOffset} chunkEnd=${nextChunkEnd - 1} contentRange="${contentRange}"`
          );
          let uploadResponse;
          try {
            uploadResponse = await this.apiClient.uploadBlobContent(
              entry.id,
              ticket.uploadId,
              uploadChunk,
              commitHash,
              currentOffset,
              totalUploadBytes,
              (progress) => {
                this.maybeUpdateBinaryTransferState(desiredLocalPath, {
                  status: "uploading",
                  bytesDone: progress.loadedBytes,
                  bytesTotal: progress.totalBytes > 0 ? progress.totalBytes : totalUploadBytes
                });
              },
              abortController.signal,
              currentOffset === 0 && nextChunkEnd === totalUploadBytes ? ticket.upload : void 0
            );
            if (!this.isRoomSyncActive(workspaceId)) {
              return;
            }
          } catch (error) {
            const expectedOffset = extractBlobOffsetMismatchExpectedOffset(error, totalUploadBytes);
            if (expectedOffset !== null) {
              offsetRecoveryAttempts += 1;
              if (offsetRecoveryAttempts > _RolayPlugin.MAX_BINARY_UPLOAD_OFFSET_RECOVERY_ATTEMPTS) {
                throw new Error(
                  `Blob upload offset recovery exceeded ${_RolayPlugin.MAX_BINARY_UPLOAD_OFFSET_RECOVERY_ATTEMPTS} attempts.`
                );
              }
              uploadedBytes = expectedOffset;
              this.recordLog(
                "blob",
                `[${workspaceId}] Upload offset mismatch for ${desiredServerPath}; resuming from ${formatByteCount(expectedOffset)}.`,
                "error"
              );
              this.traceBlob(
                `[${workspaceId}] upload content mismatch entryId=${entry.id} uploadId=${ticket.uploadId} localPath=${desiredLocalPath} expectedOffset=${expectedOffset} chunkStart=${currentOffset} chunkEnd=${nextChunkEnd - 1}`,
                "error"
              );
              this.maybeUpdateBinaryTransferState(desiredLocalPath, {
                status: "uploading",
                bytesDone: expectedOffset,
                bytesTotal: totalUploadBytes
              });
              continue;
            }
            throw error;
          }
          offsetRecoveryAttempts = 0;
          const serverHash = normalizeSha256Hash(uploadResponse.hash) ?? commitHash;
          const fallbackUploadedBytes = currentOffset + uploadChunk.byteLength;
          const nextUploadedBytes = clampTransferBytes(
            uploadResponse.uploadedBytes ?? fallbackUploadedBytes,
            totalUploadBytes
          );
          if (nextUploadedBytes < currentOffset) {
            throw new Error(`Upload progress moved backwards for ${desiredServerPath}.`);
          }
          commitHash = serverHash;
          uploadedBytes = nextUploadedBytes;
          this.traceBlob(
            `[${workspaceId}] upload content response entryId=${entry.id} uploadId=${uploadResponse.uploadId ?? ticket.uploadId} localPath=${desiredLocalPath} transport=${uploadResponse.transport} status=${uploadResponse.status} requestId=${uploadResponse.requestId ?? "-"} uploadedBytes=${uploadResponse.uploadedBytes ?? nextUploadedBytes} receivedBytes=${uploadResponse.receivedBytes ?? uploadChunk.byteLength} complete=${uploadResponse.complete === true} hash=${uploadResponse.hash ?? commitHash}`
          );
          if (!this.maybeUpdateBinaryTransferState(desiredLocalPath, {
            hash: commitHash,
            uploadId: uploadResponse.uploadId ?? ticket.uploadId,
            bytesDone: uploadedBytes,
            bytesTotal: totalUploadBytes
          })) {
            return;
          }
          if (uploadResponse.complete === true && uploadedBytes >= totalUploadBytes) {
            break;
          }
        }
        if (commitHash !== normalizedTicketHash) {
          this.recordLog(
            "blob",
            `[${workspaceId}] Upload endpoint returned ${commitHash} for ${desiredServerPath} instead of ticket hash ${normalizedTicketHash}. Using server-confirmed hash.`,
            "error"
          );
        }
        ticket.hash = commitHash;
        ticket.sizeBytes = totalUploadBytes;
      } else {
        if (!this.maybeUpdateBinaryTransferState(desiredLocalPath, {
          status: "committing",
          bytesDone: totalUploadBytes
        })) {
          return;
        }
      }
      if (!this.isBinarySyncTokenCurrent(desiredLocalPath, token)) {
        return;
      }
      if (!this.maybeUpdateBinaryTransferState(desiredLocalPath, {
        status: "committing",
        hash: commitHash,
        bytesDone: totalUploadBytes,
        bytesTotal: totalUploadBytes
      })) {
        return;
      }
      this.traceBlob(
        `[${workspaceId}] commit_blob_revision request entryId=${entry.id} localPath=${desiredLocalPath} hash=${commitHash} sizeBytes=${totalUploadBytes} entryVersion=${entry.entryVersion} path=${entry.path}`
      );
      if (!this.isRoomSyncActive(workspaceId)) {
        return;
      }
      const commitResponse = await this.operationsQueue.enqueue(
        workspaceId,
        {
          type: "commit_blob_revision",
          entryId: entry.id,
          hash: commitHash,
          sizeBytes: totalUploadBytes,
          mimeType: ticket.mimeType,
          preconditions: {
            entryVersion: entry.entryVersion,
            path: entry.path
          }
        },
        `commit blob revision ${desiredServerPath}`
      );
      if (!this.isRoomSyncActive(workspaceId)) {
        return;
      }
      const committedEntry = commitResponse.results.find((result) => result.status === "applied")?.entry ?? null;
      if (committedEntry) {
        this.optimisticUpsertRoomEntry(workspaceId, committedEntry);
        entry = committedEntry;
        finalEntryId = committedEntry.id;
        finalServerPath = committedEntry.path;
      }
      this.persistBinaryCacheEntry(entry.id, desiredLocalPath, commitHash, totalUploadBytes, ticket.mimeType);
      await this.clearPendingBinaryWriteForLocalPath(desiredLocalPath, false);
      this.clearBinaryTransferState(desiredLocalPath);
      this.invalidateBinarySyncToken(desiredLocalPath);
      this.recordLog(
        "blob",
        `[${workspaceId}] Uploaded ${desiredServerPath} (${formatByteCount(totalUploadBytes)}, ${commitHash.slice(0, 19)}...).`
      );
      this.traceBlob(
        `[${workspaceId}] upload complete entryId=${entry.id} localPath=${desiredLocalPath} hash=${commitHash} sizeBytes=${totalUploadBytes} results=${commitResponse.results.length}`
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (error instanceof Error && error.name === "AbortError") {
        if (!this.isUnloading) {
          this.recordLog("blob", `[${workspaceId}] Binary transfer aborted for ${finalLocalPath}.`);
        }
      } else {
        const mismatchDetails = formatBlobHashMismatchDetails(error);
        if (mismatchDetails) {
          this.recordLog(
            "blob",
            `[${workspaceId}] Blob hash mismatch for ${finalServerPath}: ${mismatchDetails}`,
            "error"
          );
        }
        this.recordLog("blob", `[${workspaceId}] Binary sync failed for ${finalLocalPath}: ${message}`, "error");
        this.handleError(`Binary sync failed for ${finalLocalPath}`, error, false);
      }
      const transfer = this.binaryTransferState.get((0, import_obsidian9.normalizePath)(finalLocalPath));
      if (transfer) {
        this.updateBinaryTransferState(finalLocalPath, {
          status: "failed",
          lastError: message,
          abortController: null
        });
      }
      if (this.isBinarySyncTokenCurrent(finalLocalPath, token)) {
        this.rememberPendingBinaryWrite(workspaceId, finalLocalPath, finalServerPath, finalEntryId, error);
      }
    } finally {
      if (this.isUnloading) {
        return;
      }
      const transfer = this.binaryTransferState.get((0, import_obsidian9.normalizePath)(finalLocalPath));
      const normalizedFinalLocalPath = (0, import_obsidian9.normalizePath)(finalLocalPath);
      const shouldRerun = Boolean(transfer?.rerunRequested) || this.pendingBinarySyncReruns.has(normalizedFinalLocalPath);
      this.pendingBinarySyncReruns.delete(normalizedFinalLocalPath);
      if (!shouldRerun && transfer?.status !== "failed") {
        this.clearBinaryTransferState(finalLocalPath);
      }
      if (shouldRerun) {
        this.clearBinaryTransferState(finalLocalPath);
        const currentFile = this.app.vault.getAbstractFileByPath(finalLocalPath);
        const currentServerPath = this.resolvePendingMarkdownServerPath(workspaceId, finalLocalPath, fallbackServerPath);
        const entry = this.data.pendingBinaryWrites[(0, import_obsidian9.normalizePath)(finalLocalPath)]?.entryId ? this.getRoomStore(workspaceId)?.getEntryById(
          this.data.pendingBinaryWrites[(0, import_obsidian9.normalizePath)(finalLocalPath)]?.entryId ?? ""
        ) ?? null : currentServerPath ? this.getRoomStore(workspaceId)?.getEntryByPath(currentServerPath) ?? null : null;
        if (currentFile instanceof import_obsidian9.TFile && isBinaryPath(currentFile.path) && currentServerPath) {
          await this.queueBinaryWrite(
            workspaceId,
            currentServerPath,
            await this.app.vault.readBinary(currentFile),
            entry
          );
        }
      }
    }
  }
  async resolveBinaryWritePathConflict(workspaceId, originalServerPath, originalLocalPath, suggestedPath, token) {
    const localFile = this.app.vault.getAbstractFileByPath(originalLocalPath);
    if (!(localFile instanceof import_obsidian9.TFile) || !isBinaryPath(localFile.path)) {
      await this.clearPendingBinaryWriteForLocalPath(originalLocalPath, false);
      this.recordLog(
        "blob",
        `[${workspaceId}] Dropped conflicting local binary write for ${originalServerPath} because the local file is gone.`,
        "error"
      );
      return;
    }
    const replacementServerPath = this.findAvailableBinaryConflictPath(
      workspaceId,
      suggestedPath?.trim() || originalServerPath
    );
    const replacementLocalPath = this.fileBridge.toLocalPath(workspaceId, replacementServerPath) ?? replacementServerPath;
    if (replacementLocalPath === originalLocalPath) {
      throw new Error(`No available fallback binary path for ${originalServerPath}.`);
    }
    await this.fileBridge.runWithSuppressedPaths([originalLocalPath, replacementLocalPath], async () => {
      await this.app.fileManager.renameFile(localFile, replacementLocalPath);
    });
    this.moveBinarySyncToken(originalLocalPath, replacementLocalPath);
    const conflictMessage = `[${workspaceId}] Local binary ${originalServerPath} conflicted with an existing server path. Renamed local file to ${replacementServerPath} so both copies survive.`;
    this.recordLog("blob", conflictMessage, "error");
    new import_obsidian9.Notice(`Rolay kept your local file as ${replacementServerPath}.`);
    const currentFile = this.app.vault.getAbstractFileByPath(replacementLocalPath);
    if (!(currentFile instanceof import_obsidian9.TFile)) {
      return;
    }
    await this.queueBinaryWrite(
      workspaceId,
      replacementServerPath,
      await this.app.vault.readBinary(currentFile),
      null
    );
  }
  async reconcilePendingBinaryWrites(workspaceId, reason) {
    const pendingWrites = this.getPendingBinaryWritesForWorkspace(workspaceId);
    if (pendingWrites.length === 0) {
      return;
    }
    this.recordLog(
      "blob",
      `[${workspaceId}] Replaying ${pendingWrites.length} pending binary write(s) after ${reason}.`
    );
    for (const pendingWrite of pendingWrites) {
      const currentFile = this.app.vault.getAbstractFileByPath(pendingWrite.localPath);
      if (!(currentFile instanceof import_obsidian9.TFile) || !isBinaryPath(currentFile.path)) {
        await this.clearPendingBinaryWriteForLocalPath(pendingWrite.localPath, false);
        this.recordLog(
          "blob",
          `[${workspaceId}] Cleared pending binary write for ${pendingWrite.localPath} because the local file no longer exists.`
        );
        continue;
      }
      const currentServerPath = this.resolvePendingMarkdownServerPath(
        workspaceId,
        pendingWrite.localPath,
        pendingWrite.serverPath
      );
      if (!currentServerPath) {
        await this.clearPendingBinaryWriteForLocalPath(pendingWrite.localPath, false);
        this.recordLog(
          "blob",
          `[${workspaceId}] Cleared pending binary write for ${pendingWrite.localPath} because it is no longer inside the room root.`
        );
        continue;
      }
      const entryById = pendingWrite.entryId ? this.getRoomStore(workspaceId)?.getEntryById(pendingWrite.entryId) ?? null : null;
      const entry = entryById ?? this.getRoomStore(workspaceId)?.getEntryByPath(currentServerPath) ?? null;
      if (entry && this.shouldDropPendingBinaryWriteAsRemoteEcho(workspaceId, pendingWrite, entry)) {
        this.clearPendingBinaryWriteRecord(pendingWrite.localPath);
        this.clearPendingLocalCreate(workspaceId, currentServerPath);
        this.recordLog(
          "blob",
          `[${workspaceId}] Cleared stale pending binary write for ${currentServerPath} because that path is already owned by remote entry ${entry.id}.`
        );
        continue;
      }
      try {
        await this.queueBinaryWrite(
          workspaceId,
          currentServerPath,
          await this.app.vault.readBinary(currentFile),
          entry
        );
      } catch {
      }
    }
  }
  async syncBinaryEntriesFromSnapshot(workspaceId, entries, reason) {
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    for (const entry of entries) {
      if (entry.kind === "binary" && entry.deleted) {
        this.clearPersistedBinaryCacheEntry(entry.id);
      }
    }
    const binaryEntries = entries.filter((entry) => !entry.deleted && entry.kind === "binary");
    await this.cancelStaleBinaryDownloads(workspaceId, binaryEntries);
    if (binaryEntries.length === 0) {
      return;
    }
    const queue = [...binaryEntries];
    const workers = Array.from(
      { length: Math.min(_RolayPlugin.BINARY_DOWNLOAD_CONCURRENCY, queue.length) },
      async () => {
        while (queue.length > 0) {
          if (!this.isRoomSyncActive(workspaceId)) {
            return;
          }
          const entry = queue.shift();
          if (!entry) {
            return;
          }
          await this.ensureBinaryEntryDownloaded(workspaceId, entry, reason);
        }
      }
    );
    await Promise.all(workers);
  }
  async cancelStaleBinaryDownloads(workspaceId, entries) {
    const activeEntries = new Map(entries.map((entry) => [entry.id, entry]));
    const transfers = this.getBinaryTransfersForWorkspace(workspaceId).filter((transfer) => transfer.kind === "download");
    for (const transfer of transfers) {
      const entry = transfer.entryId ? activeEntries.get(transfer.entryId) ?? null : null;
      const remoteHash = entry?.blob?.hash ?? null;
      if (!entry || entry.deleted || entry.path !== transfer.serverPath || transfer.hash && remoteHash && transfer.hash !== remoteHash) {
        await this.cancelBinaryTransferForLocalPath(transfer.localPath, "stale-download");
      }
    }
  }
  async ensureBinaryEntryDownloaded(workspaceId, entry, reason) {
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    if (entry.deleted || entry.kind !== "binary" || !entry.blob) {
      return;
    }
    const localPath = (0, import_obsidian9.normalizePath)(this.fileBridge.toLocalPath(workspaceId, entry.path) ?? entry.path);
    const pendingWrite = this.data.pendingBinaryWrites[localPath];
    if (pendingWrite) {
      if (this.shouldDropPendingBinaryWriteAsRemoteEcho(workspaceId, pendingWrite, entry)) {
        this.clearPendingBinaryWriteRecord(localPath);
      } else {
        return;
      }
    }
    const activeUpload = this.binaryTransferState.get(localPath);
    if (activeUpload && activeUpload.kind === "upload") {
      return;
    }
    const existingTransfer = this.binaryTransferState.get(localPath);
    const remoteHash = normalizeSha256Hash(entry.blob.hash);
    if (!remoteHash) {
      throw new Error(`Binary entry ${entry.path} is missing a valid blob hash.`);
    }
    if (existingTransfer && existingTransfer.kind === "download" && existingTransfer.hash === remoteHash && (existingTransfer.status === "preparing" || existingTransfer.status === "downloading") && existingTransfer.abortController) {
      return;
    }
    const localFile = this.app.vault.getAbstractFileByPath(localPath);
    const cached = this.findPersistedBinaryCacheEntry(entry.id);
    const remoteSize = entry.blob.sizeBytes;
    const remoteMimeType = entry.blob.mimeType || entry.mimeType || "application/octet-stream";
    if (localFile instanceof import_obsidian9.TFile && cached?.hash === remoteHash) {
      if ((0, import_obsidian9.normalizePath)(cached.filePath) !== localPath) {
        this.persistBinaryCacheEntry(entry.id, localPath, remoteHash, remoteSize, remoteMimeType);
      }
      await this.clearBinaryDownloadPart(workspaceId, entry.id, remoteHash);
      return;
    }
    if (localFile instanceof import_obsidian9.TFile) {
      const localBytes = await this.app.vault.readBinary(localFile);
      const localHash = await sha256Hash(localBytes);
      if (localHash === remoteHash) {
        this.persistBinaryCacheEntry(entry.id, localPath, remoteHash, remoteSize, remoteMimeType);
        await this.clearBinaryDownloadPart(workspaceId, entry.id, remoteHash);
        return;
      }
      const safeToOverwrite = localBytes.byteLength === 0 || (cached ? cached.hash === localHash : false);
      if (!safeToOverwrite) {
        await this.resolveBinaryDownloadConflict(workspaceId, entry, localPath);
      }
    }
    try {
      this.traceBlob(
        `[${workspaceId}] download-ticket request entryId=${entry.id} localPath=${localPath} serverPath=${entry.path} expectedHash=${remoteHash} expectedSizeBytes=${remoteSize}`
      );
      const ticket = await this.apiClient.createBlobDownloadTicket(entry.id);
      if (!this.isRoomSyncActive(workspaceId)) {
        return;
      }
      this.traceBlob(
        `[${workspaceId}] download-ticket response entryId=${entry.id} localPath=${localPath} serverPath=${entry.path} status=${ticket._meta.status} requestId=${ticket._meta.requestId ?? "-"} hash=${ticket.hash} sizeBytes=${ticket.sizeBytes} contentUrl=${ticket.contentUrl ?? "-"} rangeSupported=${ticket.rangeSupported === true}`
      );
      const ticketHash = normalizeSha256Hash(ticket.hash) ?? remoteHash;
      if (!ticketHash) {
        throw new Error(`Binary download ticket for ${entry.path} is missing a valid blob hash.`);
      }
      const totalDownloadBytes = ticket.sizeBytes > 0 ? ticket.sizeBytes : remoteSize;
      const partPath = this.getBinaryDownloadPartPath(workspaceId, entry.id, ticketHash);
      let resumeOffset = await this.getAdapterFileSize(partPath);
      if (resumeOffset > totalDownloadBytes) {
        await this.removeAdapterPathIfExists(partPath);
        resumeOffset = 0;
      }
      if (!ticket.rangeSupported && resumeOffset > 0 && resumeOffset < totalDownloadBytes) {
        this.recordLog(
          "blob",
          `[${workspaceId}] Restarting binary download for ${entry.path} from zero because ranged resume is unavailable.`
        );
        await this.removeAdapterPathIfExists(partPath);
        resumeOffset = 0;
      }
      if (totalDownloadBytes === 0 && resumeOffset === 0) {
        await this.writeBinaryTransferPart(partPath, new ArrayBuffer(0), false);
      }
      this.setBinaryTransferState({
        workspaceId,
        entryId: entry.id,
        localPath,
        serverPath: entry.path,
        kind: "download",
        status: "preparing",
        bytesTotal: totalDownloadBytes,
        bytesDone: resumeOffset,
        hash: ticketHash,
        mimeType: ticket.mimeType || remoteMimeType,
        uploadId: null,
        cancelUrl: null,
        lastError: null,
        rangeSupported: Boolean(ticket.rangeSupported),
        createdAt: existingTransfer?.createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
        rerunRequested: false,
        abortController: new AbortController()
      });
      const transfer = this.maybeUpdateBinaryTransferState(localPath, {
        status: "downloading",
        bytesTotal: totalDownloadBytes,
        bytesDone: resumeOffset,
        hash: ticketHash,
        mimeType: ticket.mimeType || remoteMimeType,
        rangeSupported: Boolean(ticket.rangeSupported)
      });
      if (!transfer) {
        return;
      }
      if (resumeOffset > 0 && resumeOffset < totalDownloadBytes) {
        this.recordLog(
          "blob",
          `[${workspaceId}] Resuming binary download for ${entry.path} at ${formatByteCount(resumeOffset)} of ${formatByteCount(totalDownloadBytes)}.`
        );
      }
      if (resumeOffset < totalDownloadBytes) {
        let append2 = resumeOffset > 0;
        if (!append2) {
          await this.removeAdapterPathIfExists(partPath);
        }
        const downloadUrl = this.getBinaryBlobContentUrl(entry.id, ticket.contentUrl ?? null);
        this.traceBlob(
          `[${workspaceId}] blob content request entryId=${entry.id} localPath=${localPath} expectedHash=${ticketHash} expectedSizeBytes=${totalDownloadBytes} partialOffset=${resumeOffset} range=${resumeOffset > 0 ? `bytes=${resumeOffset}-` : "-"}`
        );
        const download = await this.apiClient.downloadBlobContent(
          downloadUrl,
          resumeOffset,
          async (chunk) => {
            await this.writeBinaryTransferPart(partPath, chunk, append2);
            append2 = true;
          },
          (progress) => {
            this.maybeUpdateBinaryTransferState(localPath, {
              status: "downloading",
              bytesDone: progress.loadedBytes,
              bytesTotal: progress.totalBytes > 0 ? progress.totalBytes : totalDownloadBytes
            });
          },
          transfer.abortController?.signal
        );
        if (!this.isRoomSyncActive(workspaceId)) {
          return;
        }
        this.traceBlob(
          `[${workspaceId}] blob content response entryId=${entry.id} localPath=${localPath} transport=${download.transport} status=${download.status} requestId=${download.requestId ?? "-"} contentLength=${download.contentLength ?? -1} contentRange=${download.contentRange ?? "-"} acceptRanges=${download.acceptRanges ?? "-"} blobHash=${download.hash ?? "-"}`
        );
        await this.applyDownloadedBinary(
          workspaceId,
          entry,
          localPath,
          partPath,
          {
            hash: normalizeSha256Hash(download.hash ?? ticketHash) ?? ticketHash,
            sizeBytes: totalDownloadBytes,
            mimeType: download.contentType ?? ticket.mimeType ?? remoteMimeType
          },
          reason
        );
      } else {
        this.traceBlob(
          `[${workspaceId}] blob content skipped entryId=${entry.id} localPath=${localPath} reason=already-complete partialOffset=${resumeOffset}`
        );
        await this.applyDownloadedBinary(
          workspaceId,
          entry,
          localPath,
          partPath,
          {
            hash: ticketHash,
            sizeBytes: totalDownloadBytes,
            mimeType: ticket.mimeType ?? remoteMimeType
          },
          reason
        );
      }
      this.clearBinaryTransferState(localPath);
    } catch (error) {
      if (!(error instanceof Error && error.name === "AbortError")) {
        this.recordLog(
          "blob",
          `[${workspaceId}] Binary download failed for ${entry.path}: ${error instanceof Error ? error.message : String(error)}`,
          "error"
        );
      } else if (!this.isUnloading) {
        this.recordLog("blob", `[${workspaceId}] Binary download aborted for ${entry.path}.`);
      }
      if (this.isUnloading) {
        return;
      }
      this.maybeUpdateBinaryTransferState(localPath, {
        status: "failed",
        lastError: error instanceof Error ? error.message : String(error),
        abortController: null
      });
    }
  }
  async applyDownloadedBinary(workspaceId, entry, localPath, partPath, downloadMeta, reason) {
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    const downloadData = await this.readBinaryTransferPart(partPath);
    if (!downloadData) {
      throw new Error(`Downloaded binary part for ${entry.path} is missing.`);
    }
    const effectiveHash = normalizeSha256Hash(downloadMeta.hash);
    const effectiveSize = downloadMeta.sizeBytes > 0 ? downloadMeta.sizeBytes : downloadData.byteLength;
    const effectiveMimeType = downloadMeta.mimeType ?? entry.blob?.mimeType ?? entry.mimeType ?? "application/octet-stream";
    if (effectiveSize !== downloadData.byteLength) {
      await this.removeAdapterPathIfExists(partPath);
      throw new Error(
        `Downloaded blob size mismatch for ${entry.path}: expected ${effectiveSize} bytes, got ${downloadData.byteLength}.`
      );
    }
    const computedHash = await sha256Hash(downloadData);
    if (!this.isRoomSyncActive(workspaceId)) {
      return;
    }
    this.traceBlob(
      `[${workspaceId}] download finalize entryId=${entry.id} localPath=${localPath} partPath=${partPath} computedHash=${computedHash} expectedHash=${effectiveHash ?? "-"} sizeBytes=${downloadData.byteLength}`
    );
    if (effectiveHash && computedHash !== effectiveHash) {
      await this.removeAdapterPathIfExists(partPath);
      throw new Error(`Downloaded blob hash mismatch for ${entry.path}.`);
    }
    const existingLocalFile = this.app.vault.getAbstractFileByPath(localPath);
    const cached = this.findPersistedBinaryCacheEntry(entry.id);
    if (existingLocalFile instanceof import_obsidian9.TFile) {
      const currentLocalBytes = await this.app.vault.readBinary(existingLocalFile);
      const currentLocalHash = await sha256Hash(currentLocalBytes);
      if (currentLocalHash === computedHash) {
        this.persistBinaryCacheEntry(entry.id, localPath, computedHash, effectiveSize, effectiveMimeType);
        await this.removeAdapterPathIfExists(partPath);
        return;
      }
      const safeToOverwrite = currentLocalBytes.byteLength === 0 || (cached ? cached.hash === currentLocalHash : false);
      if (!safeToOverwrite) {
        await this.resolveBinaryDownloadConflict(workspaceId, entry, localPath);
      }
    }
    await this.fileBridge.writeBinaryContent(workspaceId, entry.path, downloadData);
    await this.removeAdapterPathIfExists(partPath);
    this.persistBinaryCacheEntry(entry.id, localPath, computedHash, effectiveSize, effectiveMimeType);
    this.recordLog(
      "blob",
      `[${workspaceId}] Downloaded ${entry.path} (${formatByteCount(downloadData.byteLength)}) from ${reason}.`
    );
  }
  async resolveBinaryDownloadConflict(workspaceId, entry, originalLocalPath) {
    const localFile = this.app.vault.getAbstractFileByPath(originalLocalPath);
    if (!(localFile instanceof import_obsidian9.TFile) || !isBinaryPath(localFile.path)) {
      return;
    }
    const replacementServerPath = this.findAvailableBinaryConflictPath(workspaceId, entry.path);
    const replacementLocalPath = this.fileBridge.toLocalPath(workspaceId, replacementServerPath) ?? replacementServerPath;
    if (replacementLocalPath === originalLocalPath) {
      return;
    }
    await this.fileBridge.runWithSuppressedPaths([originalLocalPath, replacementLocalPath], async () => {
      await this.app.fileManager.renameFile(localFile, replacementLocalPath);
    });
    const conflictMessage = `[${workspaceId}] Local binary ${entry.path} diverged from the incoming remote blob. Renamed local file to ${replacementServerPath} so both copies survive.`;
    this.recordLog("blob", conflictMessage, "error");
    new import_obsidian9.Notice(`Rolay kept your local file as ${replacementServerPath}.`);
    const replacementFile = this.app.vault.getAbstractFileByPath(replacementLocalPath);
    if (replacementFile instanceof import_obsidian9.TFile) {
      await this.queueBinaryWrite(
        workspaceId,
        replacementServerPath,
        await this.app.vault.readBinary(replacementFile),
        null
      );
    }
  }
  async deleteBinaryPlaceholderIfSafe(workspaceId, entry) {
    try {
      await this.operationsQueue.enqueue(
        workspaceId,
        {
          type: "delete_entry",
          entryId: entry.id,
          preconditions: {
            entryVersion: entry.entryVersion,
            path: entry.path
          }
        },
        `abandon binary placeholder ${entry.path}`
      );
      this.optimisticDeleteRoomEntry(workspaceId, entry.id);
    } catch (error) {
      this.recordLog(
        "blob",
        `[${workspaceId}] Failed to delete abandoned binary placeholder ${entry.path}: ${error instanceof Error ? error.message : String(error)}`,
        "error"
      );
    }
  }
  findAvailableBinaryConflictPath(workspaceId, desiredServerPath) {
    const normalizedDesiredPath = desiredServerPath.replace(/\\/g, "/");
    const directoryPath = getParentPath2(normalizedDesiredPath);
    const fileName = getFileName(normalizedDesiredPath);
    const extension = getFileExtension(fileName);
    const rawStem = extension ? fileName.slice(0, -(extension.length + 1)) : fileName;
    const { baseStem, nextIndex } = parseCopySuffix(rawStem);
    const candidates = [normalizedDesiredPath];
    for (let index = nextIndex; index <= nextIndex + 999; index += 1) {
      const candidateFileName = extension ? `${baseStem}(${index}).${extension}` : `${baseStem}(${index})`;
      candidates.push(directoryPath ? `${directoryPath}/${candidateFileName}` : candidateFileName);
    }
    for (const candidatePath of candidates) {
      const remoteExists = Boolean(this.getRoomStore(workspaceId)?.getEntryByPath(candidatePath));
      const localPath = this.fileBridge.toLocalPath(workspaceId, candidatePath) ?? candidatePath;
      const localExists = Boolean(this.app.vault.getAbstractFileByPath(localPath));
      if (!remoteExists && !localExists) {
        return candidatePath;
      }
    }
    throw new Error(`No free conflict-safe binary path is available for ${desiredServerPath}.`);
  }
  async queueRenameOrMove(workspaceId, entry, newPath, type) {
    if (!this.isRoomSyncActive(workspaceId)) {
      this.recordLog(
        "ops",
        `[${workspaceId}] Ignored local ${type} ${entry.path} -> ${newPath} because the room is disconnected.`
      );
      return;
    }
    this.optimisticUpsertRoomEntry(workspaceId, {
      ...entry,
      path: newPath
    });
    try {
      const response = await this.operationsQueue.enqueue(
        workspaceId,
        {
          type,
          entryId: entry.id,
          newPath,
          preconditions: {
            entryVersion: entry.entryVersion,
            path: entry.path
          }
        },
        `${type} ${entry.path} -> ${newPath}`
      );
      const updatedEntry = response.results.find((result) => result.status === "applied")?.entry ?? {
        ...entry,
        path: newPath
      };
      this.optimisticUpsertRoomEntry(workspaceId, updatedEntry);
    } catch (error) {
      this.scheduleSnapshotRefresh(workspaceId, "rename-recovery");
      throw error;
    }
  }
  async queueDeleteEntry(workspaceId, entry) {
    if (!this.isRoomSyncActive(workspaceId)) {
      this.recordLog("ops", `[${workspaceId}] Ignored local delete ${entry.path} because the room is disconnected.`);
      return;
    }
    this.registerPendingLocalDelete(workspaceId, entry.path);
    this.optimisticDeleteRoomEntry(workspaceId, entry.id);
    try {
      const response = await this.operationsQueue.enqueue(
        workspaceId,
        {
          type: "delete_entry",
          entryId: entry.id,
          preconditions: {
            entryVersion: entry.entryVersion,
            path: entry.path
          }
        },
        `delete ${entry.path}`
      );
      const deletedEntry = response.results.find((result) => result.status === "applied")?.entry ?? null;
      if (deletedEntry) {
        this.optimisticUpsertRoomEntry(workspaceId, deletedEntry);
        if (entry.kind === "binary") {
          this.clearPersistedBinaryCacheEntry(entry.id);
        }
        return;
      }
      this.optimisticDeleteRoomEntry(workspaceId, entry.id);
      if (entry.kind === "binary") {
        this.clearPersistedBinaryCacheEntry(entry.id);
      }
    } catch (error) {
      this.clearPendingLocalDelete(workspaceId, entry.path);
      this.scheduleSnapshotRefresh(workspaceId, "delete-recovery");
      throw error;
    }
  }
  findAvailableMarkdownConflictPath(workspaceId, desiredServerPath) {
    const normalizedDesiredPath = desiredServerPath.replace(/\\/g, "/");
    const directoryPath = getParentPath2(normalizedDesiredPath);
    const fileName = getFileName(normalizedDesiredPath);
    const extension = getFileExtension(fileName);
    const rawStem = extension ? fileName.slice(0, -(extension.length + 1)) : fileName;
    const { baseStem, nextIndex } = parseCopySuffix(rawStem);
    const candidates = [normalizedDesiredPath];
    for (let index = nextIndex; index <= nextIndex + 999; index += 1) {
      const candidateFileName = extension ? `${baseStem}(${index}).${extension}` : `${baseStem}(${index})`;
      candidates.push(directoryPath ? `${directoryPath}/${candidateFileName}` : candidateFileName);
    }
    for (const candidatePath of candidates) {
      const remoteExists = Boolean(this.getRoomStore(workspaceId)?.getEntryByPath(candidatePath));
      if (remoteExists) {
        continue;
      }
      const candidateLocalPath = this.fileBridge.toLocalPath(workspaceId, candidatePath) ?? candidatePath;
      if (this.app.vault.getAbstractFileByPath(candidateLocalPath)) {
        continue;
      }
      return candidatePath;
    }
    throw new Error(`No free conflict-safe path is available for ${desiredServerPath}.`);
  }
  async readLocalMarkdownContent(localPath, fallback = "") {
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian9.MarkdownView);
    if (activeView?.file?.path === localPath) {
      return activeView.editor.getValue();
    }
    const localFile = this.app.vault.getAbstractFileByPath(localPath);
    if (!(localFile instanceof import_obsidian9.TFile) || localFile.extension !== "md") {
      return fallback;
    }
    try {
      return await this.app.vault.cachedRead(localFile);
    } catch (error) {
      this.recordLog(
        "bridge",
        `Failed to read local markdown content for ${localPath}: ${error instanceof Error ? error.message : String(error)}`,
        "error"
      );
      return fallback;
    }
  }
  async readLocalBinaryContent(localPath, fallback = new ArrayBuffer(0)) {
    const localFile = this.app.vault.getAbstractFileByPath(localPath);
    if (!(localFile instanceof import_obsidian9.TFile) || !isBinaryPath(localFile.path)) {
      return fallback;
    }
    try {
      return await this.app.vault.readBinary(localFile);
    } catch (error) {
      this.recordLog(
        "blob",
        `Failed to read local binary content for ${localPath}: ${error instanceof Error ? error.message : String(error)}`,
        "error"
      );
      return fallback;
    }
  }
};
_RolayPlugin.MAX_PERSISTED_CRDT_DOCS = 64;
_RolayPlugin.MAX_PERSISTED_BINARY_ENTRIES = 128;
_RolayPlugin.ENABLE_BLOB_TRANSFER_TRACE = true;
_RolayPlugin.BINARY_TRANSFER_PARTS_FOLDER = "transfers";
_RolayPlugin.BINARY_UPLOAD_CHUNK_SIZE = 4 * 1024 * 1024;
_RolayPlugin.MAX_BINARY_UPLOAD_OFFSET_RECOVERY_ATTEMPTS = 8;
_RolayPlugin.LOG_FILE_RETENTION_MS = 48 * 60 * 60 * 1e3;
_RolayPlugin.MAX_LOG_FILE_BYTES = 256 * 1024;
_RolayPlugin.LOG_FILE_TRIM_TARGET_BYTES = 192 * 1024;
_RolayPlugin.LOG_FILE_NAME = "rolay-sync.log";
_RolayPlugin.PENDING_CREATE_CONFIRMATION_TTL_MS = 6e4;
_RolayPlugin.RECENT_REMOTE_PATH_TTL_MS = 3e4;
_RolayPlugin.REMOTE_MARKDOWN_SETTLE_TTL_MS = 15e3;
_RolayPlugin.ROOM_MARKDOWN_REFRESH_INTERVAL_MS = 5e3;
_RolayPlugin.ROOM_MARKDOWN_REFRESH_AFTER_SNAPSHOT_MS = 1200;
_RolayPlugin.MARKDOWN_BOOTSTRAP_BATCH_MAX_DOCS = 8;
_RolayPlugin.MARKDOWN_BOOTSTRAP_BATCH_TARGET_ENCODED_BYTES = 512 * 1024;
_RolayPlugin.BINARY_DOWNLOAD_CONCURRENCY = 2;
_RolayPlugin.PENDING_DELETE_GUARD_MS = 6e4;
_RolayPlugin.STARTUP_BOOTSTRAP_DELAY_MS = 1500;
_RolayPlugin.STARTUP_ROOM_CONNECT_STAGGER_MS = 900;
var RolayPlugin = _RolayPlugin;
function normalizeSettingsEventEnvelope(event) {
  const rawData = isRecord2(event.data) ? event.data : {};
  const eventId = typeof rawData["eventId"] === "number" ? rawData["eventId"] : event.id;
  const type = typeof rawData["type"] === "string" ? rawData["type"] : event.event;
  const occurredAt = typeof rawData["occurredAt"] === "string" ? rawData["occurredAt"] : (/* @__PURE__ */ new Date()).toISOString();
  const scope = typeof rawData["scope"] === "string" ? rawData["scope"] : inferSettingsScopeFromType(type);
  const payload = "payload" in rawData ? rawData["payload"] : event.data;
  return {
    eventId,
    type,
    occurredAt,
    scope,
    payload
  };
}
function inferSettingsScopeFromType(type) {
  switch (type) {
    case "stream.ready":
    case "ping":
      return "settings.stream";
    case "auth.me.updated":
      return "auth.me";
    case "room.invite.updated":
      return "room.invite";
    case "room.publication.updated":
      return "room.publication";
    case "admin.user.created":
    case "admin.user.updated":
    case "admin.user.deleted":
      return "admin.users";
    case "admin.room.members.updated":
      return "admin.room.members";
    default:
      return "rooms";
  }
}
function extractUserFromSettingsPayload(payload) {
  const candidate = unwrapSettingsPayloadObject(payload, "user");
  if (!candidate) {
    return null;
  }
  const { id: id2, username, displayName, isAdmin, globalRole } = candidate;
  if (typeof id2 !== "string" || typeof username !== "string" || typeof displayName !== "string" || typeof isAdmin !== "boolean" || globalRole !== "admin" && globalRole !== "writer" && globalRole !== "reader") {
    return null;
  }
  return {
    id: id2,
    username,
    displayName,
    isAdmin,
    globalRole
  };
}
function extractManagedUserFromSettingsPayload(payload) {
  const candidate = unwrapSettingsPayloadObject(payload, "user");
  const user = extractUserFromSettingsPayload(candidate ?? payload);
  if (!user || !candidate) {
    return null;
  }
  return {
    ...user,
    createdAt: typeof candidate.createdAt === "string" ? candidate.createdAt : void 0,
    disabledAt: typeof candidate.disabledAt === "string" || candidate.disabledAt === null ? candidate.disabledAt : void 0
  };
}
function extractRoomFromSettingsPayload(payload) {
  const candidate = unwrapSettingsPayloadObject(payload, "room");
  if (!candidate) {
    return null;
  }
  const workspace = extractWorkspace(candidate.workspace);
  const membershipRole = candidate.membershipRole;
  const createdAt = candidate.createdAt;
  const memberCount = candidate.memberCount;
  const inviteEnabled = candidate.inviteEnabled;
  if (!workspace || membershipRole !== "owner" && membershipRole !== "member" || typeof createdAt !== "string" || typeof memberCount !== "number" || typeof inviteEnabled !== "boolean") {
    return null;
  }
  return {
    workspace,
    membershipRole,
    createdAt,
    memberCount,
    inviteEnabled,
    publication: extractRoomPublicationState(candidate.publication, workspace.id) ?? void 0
  };
}
function extractAdminRoomFromSettingsPayload(payload) {
  const candidate = unwrapSettingsPayloadObject(payload, "room");
  const room = extractRoomFromSettingsPayload(candidate ?? payload);
  if (!room || !candidate || typeof candidate.ownerCount !== "number") {
    return null;
  }
  return {
    ...room,
    ownerCount: candidate.ownerCount
  };
}
function extractInviteFromSettingsPayload(payload) {
  const candidate = unwrapSettingsPayloadObject(payload, "invite");
  if (!candidate) {
    return null;
  }
  const { workspaceId, code, enabled, updatedAt } = candidate;
  if (typeof workspaceId !== "string" || typeof code !== "string" || typeof enabled !== "boolean" || typeof updatedAt !== "string") {
    return null;
  }
  return {
    workspaceId,
    code,
    enabled,
    updatedAt
  };
}
function extractRoomMembershipChangedPayload(payload) {
  if (!isRecord2(payload)) {
    return null;
  }
  const room = extractRoomFromSettingsPayload(payload);
  const workspaceId = typeof payload.workspaceId === "string" ? payload.workspaceId : room?.workspace.id;
  const removed = typeof payload.removed === "boolean" ? payload.removed : void 0;
  if (!workspaceId && !room) {
    return null;
  }
  return {
    workspaceId,
    room: room ?? void 0,
    removed
  };
}
function extractWorkspaceIdFromSettingsPayload(payload) {
  if (!isRecord2(payload)) {
    return null;
  }
  if (typeof payload.workspaceId === "string") {
    return payload.workspaceId;
  }
  const room = extractRoomFromSettingsPayload(payload) ?? extractAdminRoomFromSettingsPayload(payload);
  return room?.workspace.id ?? null;
}
function extractUserIdFromSettingsPayload(payload) {
  if (!isRecord2(payload)) {
    return null;
  }
  if (typeof payload.userId === "string") {
    return payload.userId;
  }
  const user = extractUserFromSettingsPayload(payload);
  return user?.id ?? null;
}
function extractAdminRoomMembersPayload(payload) {
  if (!isRecord2(payload) || typeof payload.workspaceId !== "string" || !Array.isArray(payload.members)) {
    return null;
  }
  const members = payload.members.map((member) => extractRoomMember(member)).filter((member) => member !== null).sort(compareRoomMembers);
  return {
    workspaceId: payload.workspaceId,
    members
  };
}
function extractRoomPublicationUpdatedPayload(payload) {
  if (!isRecord2(payload) || typeof payload.workspaceId !== "string") {
    return null;
  }
  const publication = extractRoomPublicationState(payload.publication, payload.workspaceId);
  if (!publication) {
    return null;
  }
  return {
    workspaceId: payload.workspaceId,
    publication
  };
}
function extractRoomPublicationState(payload, fallbackWorkspaceId) {
  if (!isRecord2(payload)) {
    return createDefaultRoomPublicationState(fallbackWorkspaceId);
  }
  const workspaceId = typeof payload.workspaceId === "string" && payload.workspaceId.trim() ? payload.workspaceId : fallbackWorkspaceId;
  const enabled = typeof payload.enabled === "boolean" ? payload.enabled : false;
  const updatedAt = typeof payload.updatedAt === "string" && payload.updatedAt.trim() ? payload.updatedAt : null;
  return {
    workspaceId,
    enabled,
    updatedAt
  };
}
function extractNotePresenceSnapshotPayload(payload) {
  if (!isRecord2(payload) || typeof payload.workspaceId !== "string" || !Array.isArray(payload.notes)) {
    return null;
  }
  const notes = payload.notes.map((note) => extractNotePresenceSnapshotNote(note)).filter((note) => note !== null);
  return {
    workspaceId: payload.workspaceId,
    notes
  };
}
function extractNotePresenceUpdatedPayload(payload) {
  if (!isRecord2(payload) || typeof payload.workspaceId !== "string" || typeof payload.entryId !== "string" || !Array.isArray(payload.viewers)) {
    return null;
  }
  const viewers = payload.viewers.map((viewer) => extractNotePresenceViewer(viewer)).filter((viewer) => viewer !== null).sort(compareNotePresenceViewers);
  return {
    workspaceId: payload.workspaceId,
    entryId: payload.entryId,
    viewers,
    anonymousViewerCount: extractAnonymousViewerCount(payload.anonymousViewerCount)
  };
}
function extractNotePresenceSnapshotNote(payload) {
  if (!isRecord2(payload) || typeof payload.entryId !== "string" || !Array.isArray(payload.viewers)) {
    return null;
  }
  const viewers = payload.viewers.map((viewer) => extractNotePresenceViewer(viewer)).filter((viewer) => viewer !== null).sort(compareNotePresenceViewers);
  return {
    entryId: payload.entryId,
    viewers,
    anonymousViewerCount: extractAnonymousViewerCount(payload.anonymousViewerCount)
  };
}
function extractNotePresenceViewer(payload) {
  if (!isRecord2(payload) || typeof payload.presenceId !== "string" || typeof payload.userId !== "string" || typeof payload.displayName !== "string" || typeof payload.color !== "string" || typeof payload.hasSelection !== "boolean") {
    return null;
  }
  return {
    presenceId: payload.presenceId,
    userId: payload.userId,
    displayName: payload.displayName,
    color: payload.color,
    hasSelection: payload.hasSelection
  };
}
function extractAnonymousViewerCount(value) {
  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
    return 0;
  }
  return Math.trunc(value);
}
function createEmptyNotePresenceDisplayState() {
  return {
    viewers: [],
    anonymousViewerCount: 0
  };
}
function extractRoomMember(payload) {
  if (!isRecord2(payload)) {
    return null;
  }
  const user = extractUserFromSettingsPayload(payload.user);
  if (!user || payload.role !== "owner" && payload.role !== "member" || typeof payload.joinedAt !== "string") {
    return null;
  }
  return {
    user,
    role: payload.role,
    joinedAt: payload.joinedAt
  };
}
function extractWorkspace(payload) {
  if (!isRecord2(payload) || typeof payload.id !== "string" || typeof payload.name !== "string") {
    return null;
  }
  return {
    id: payload.id,
    slug: typeof payload.slug === "string" ? payload.slug : void 0,
    name: payload.name
  };
}
function unwrapSettingsPayloadObject(payload, nestedKey) {
  if (!isRecord2(payload)) {
    return null;
  }
  if (isRecord2(payload[nestedKey])) {
    return payload[nestedKey];
  }
  return payload;
}
function isRecord2(value) {
  return typeof value === "object" && value !== null;
}
function compareRoomsByName(left, right) {
  const nameComparison = left.workspace.name.localeCompare(right.workspace.name);
  if (nameComparison !== 0) {
    return nameComparison;
  }
  return left.workspace.id.localeCompare(right.workspace.id);
}
function compareRoomMembers(left, right) {
  if (left.role !== right.role) {
    return left.role === "owner" ? -1 : 1;
  }
  return left.user.username.localeCompare(right.user.username);
}
function createDefaultRoomPublicationState(workspaceId) {
  return {
    workspaceId,
    enabled: false,
    updatedAt: null
  };
}
function normalizeRoomPublicationState(publication, workspaceId) {
  return extractRoomPublicationState(publication, workspaceId) ?? createDefaultRoomPublicationState(workspaceId);
}
function normalizeRoomListItem(room) {
  return {
    ...room,
    publication: normalizeRoomPublicationState(room.publication, room.workspace.id)
  };
}
function normalizeAdminRoomListItem(room) {
  return {
    ...room,
    publication: normalizeRoomPublicationState(room.publication, room.workspace.id)
  };
}
function compareNotePresenceViewers(left, right) {
  const displayNameComparison = left.displayName.localeCompare(right.displayName);
  if (displayNameComparison !== 0) {
    return displayNameComparison;
  }
  return left.presenceId.localeCompare(right.presenceId);
}
function normalizeBootstrapState(encodedState) {
  const decodedState = decodeBase64(encodedState);
  const yDocument = new Doc();
  try {
    applyUpdate(yDocument, decodedState, "rolay-http-bootstrap");
    return encodeStateAsUpdate(yDocument);
  } finally {
    yDocument.destroy();
  }
}
function decodeMarkdownTextState(state) {
  const yDocument = new Doc();
  try {
    applyUpdate(yDocument, state, "rolay-decode-markdown-state");
    return yDocument.getText("content").toString();
  } finally {
    yDocument.destroy();
  }
}
function formatByteCount(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "0 B";
  }
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  const digits = value >= 100 || unitIndex === 0 ? 0 : value >= 10 ? 1 : 2;
  return `${value.toFixed(digits)} ${units[unitIndex]}`;
}
function formatBlobHashMismatchDetails(error) {
  if (!(error instanceof RolayApiError) || error.code !== "blob_hash_mismatch") {
    return null;
  }
  const details = error.details ?? {};
  const expectedHash = typeof details.expectedHash === "string" ? details.expectedHash : null;
  const actualHash = typeof details.actualHash === "string" ? details.actualHash : null;
  const receivedSizeBytes = typeof details.receivedSizeBytes === "number" && Number.isFinite(details.receivedSizeBytes) ? details.receivedSizeBytes : null;
  const parts = [];
  if (expectedHash) {
    parts.push(`expected ${expectedHash}`);
  }
  if (actualHash) {
    parts.push(`actual ${actualHash}`);
  }
  if (receivedSizeBytes !== null) {
    parts.push(`received ${formatByteCount(receivedSizeBytes)}`);
  }
  if (expectedHash && actualHash) {
    const normalizedExpected = normalizeSha256Hash(expectedHash);
    const normalizedActual = normalizeSha256Hash(actualHash);
    if (normalizedExpected && normalizedActual && normalizedExpected === normalizedActual) {
      parts.push("same digest, different hash encoding");
    }
  }
  if (parts.length === 0) {
    return error.message;
  }
  return parts.join(", ");
}
function getErrorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}
function isStaleMarkdownBootstrapError(error) {
  const message = getErrorMessage(error).toLowerCase();
  return message.includes("markdown entry not found");
}
function isRetryableBackgroundMarkdownError(error) {
  if (error instanceof RolayApiError && [408, 429, 500, 502, 503, 504].includes(error.status)) {
    return true;
  }
  const message = getErrorMessage(error);
  return message.includes("ERR_CONTENT_LENGTH_MISMATCH") || message.includes("ERR_NETWORK_IO_SUSPENDED") || message.includes("Failed to fetch") || message.includes("NetworkError");
}
function clampTransferBytes(value, totalBytes) {
  if (!Number.isFinite(value) || value <= 0) {
    return 0;
  }
  if (!Number.isFinite(totalBytes) || totalBytes <= 0) {
    return Math.max(0, Math.trunc(value));
  }
  return Math.max(0, Math.min(Math.trunc(value), Math.trunc(totalBytes)));
}
function extractBlobOffsetMismatchExpectedOffset(error, totalBytes) {
  if (!(error instanceof RolayApiError) || error.code !== "blob_offset_mismatch") {
    return null;
  }
  const rawOffset = error.details?.expectedOffset;
  if (typeof rawOffset !== "number" || !Number.isFinite(rawOffset)) {
    return null;
  }
  return clampTransferBytes(rawOffset, totalBytes);
}
function areUint8ArraysEqual(left, right) {
  if (left.byteLength !== right.byteLength) {
    return false;
  }
  for (let index = 0; index < left.byteLength; index += 1) {
    if (left[index] !== right[index]) {
      return false;
    }
  }
  return true;
}
function compareCrdtCacheEntries(left, right) {
  return left.updatedAt.localeCompare(right.updatedAt);
}
function formatPersistentLogLine(entry) {
  const sanitizedMessage = entry.message.replace(/\r?\n/g, " ");
  return `[${entry.at}] ${entry.scope}/${entry.level}: ${sanitizedMessage}
`;
}
function trimRecentLogEntries(entries, nowMs, retentionMs, maxEntries) {
  const cutoffMs = nowMs - retentionMs;
  return entries.filter((entry) => {
    const timestampMs = Date.parse(entry.at);
    return Number.isFinite(timestampMs) && timestampMs >= cutoffMs;
  }).slice(-maxEntries);
}
function trimPersistentLogByAge(contents, retentionMs, nowMs) {
  if (!contents) {
    return contents;
  }
  const cutoffMs = nowMs - retentionMs;
  const lines = splitPersistentLogLines(contents);
  const keptLines = [];
  let droppedLineCount = 0;
  for (const line of lines) {
    const timestampMs = parsePersistentLogTimestampMs(line);
    if (timestampMs === null) {
      if (line.includes("trimmed older Rolay log lines")) {
        droppedLineCount += 1;
        continue;
      }
      keptLines.push(line);
      continue;
    }
    if (timestampMs >= cutoffMs) {
      keptLines.push(line);
    } else {
      droppedLineCount += 1;
    }
  }
  if (droppedLineCount === 0) {
    return contents;
  }
  const retentionHours = Math.round(retentionMs / (60 * 60 * 1e3));
  return formatPersistentLogTrimLine(
    nowMs,
    `Trimmed ${droppedLineCount} Rolay log line(s) older than ${retentionHours} hours.`
  ) + keptLines.join("");
}
function trimPersistentLogBySize(contents, maxBytes, targetBytes, nowMs) {
  if (!contents || getTextByteLength(contents) <= maxBytes) {
    return contents;
  }
  const marker = formatPersistentLogTrimLine(
    nowMs,
    `Trimmed persistent Rolay log to the newest ${formatByteCount(targetBytes)} because it exceeded ${formatByteCount(
      maxBytes
    )}.`
  );
  const lines = splitPersistentLogLines(contents);
  const keptLines = [];
  let keptBytes = getTextByteLength(marker);
  for (let index = lines.length - 1; index >= 0; index -= 1) {
    const line = lines[index];
    const lineBytes = getTextByteLength(line);
    if (keptBytes + lineBytes > targetBytes && keptLines.length > 0) {
      break;
    }
    if (keptBytes + lineBytes <= targetBytes) {
      keptLines.push(line);
      keptBytes += lineBytes;
    }
  }
  if (keptLines.length === 0) {
    return marker;
  }
  return marker + keptLines.reverse().join("");
}
function splitPersistentLogLines(contents) {
  return contents.match(/[^\r\n]*(?:\r?\n|$)/g)?.filter((line) => line.length > 0) ?? [];
}
function parsePersistentLogTimestampMs(line) {
  const match2 = /^\[([^\]]+)\]/.exec(line);
  if (!match2) {
    return null;
  }
  const timestampMs = Date.parse(match2[1]);
  return Number.isFinite(timestampMs) ? timestampMs : null;
}
function formatPersistentLogTrimLine(nowMs, message) {
  return `[${new Date(nowMs).toISOString()}] plugin/info: ${message}
`;
}
function getTextByteLength(text2) {
  return new TextEncoder().encode(text2).byteLength;
}
function getFileName(path) {
  const separatorIndex = path.lastIndexOf("/");
  return separatorIndex === -1 ? path : path.slice(separatorIndex + 1);
}
function getParentPath2(path) {
  const separatorIndex = path.lastIndexOf("/");
  return separatorIndex === -1 ? "" : path.slice(0, separatorIndex);
}
function sanitizePathSegment(value) {
  return value.trim().replace(/[<>:"/\\|?*\x00-\x1f]+/g, "-");
}
function getFileExtension(fileName) {
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex <= 0 || dotIndex === fileName.length - 1) {
    return "";
  }
  return fileName.slice(dotIndex + 1);
}
function parseCopySuffix(stem) {
  const match2 = stem.match(/^(.*)\((\d+)\)$/);
  if (!match2) {
    return {
      baseStem: stem,
      nextIndex: 1
    };
  }
  return {
    baseStem: match2[1],
    nextIndex: Number(match2[2]) + 1
  };
}
