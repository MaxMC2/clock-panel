define(["@grafana/data","@grafana/runtime","@grafana/ui","emotion","moment","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./ClockPanel.tsx":
/*!************************!*\
  !*** ./ClockPanel.tsx ***!
  \************************/
/*! exports provided: getTimeZoneNames, ClockPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeZoneNames", function() { return getTimeZoneNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockPanel", function() { return ClockPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./types.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _external_moment_duration_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./external/moment-duration-format */ "./external/moment-duration-format.js");
/* harmony import */ var _external_moment_duration_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_external_moment_duration_format__WEBPACK_IMPORTED_MODULE_5__);



 // eslint-disable-next-line



function getTimeZoneNames() {
  return moment__WEBPACK_IMPORTED_MODULE_4___default.a.tz.names();
}

var ClockPanel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClockPanel, _super);

  function ClockPanel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      now: _this.getTZ(),
      timezone: ''
    };
    return _this;
  }

  ClockPanel.prototype.componentDidMount = function () {
    var _this = this;

    this.timerID = setInterval(function () {
      return _this.tick();
    }, 1000 // 1 second
    );
  };

  ClockPanel.prototype.componentWillUnmount = function () {
    clearInterval(this.timerID);
  };

  ClockPanel.prototype.tick = function () {
    var timezone = this.props.options.timezone;
    this.setState({
      now: this.getTZ(timezone)
    });
  };

  ClockPanel.prototype.getTimeFormat = function () {
    var _a = this.props.options,
        clockType = _a.clockType,
        timeSettings = _a.timeSettings;

    if (clockType === _types__WEBPACK_IMPORTED_MODULE_2__["ClockType"].Custom && timeSettings.customFormat) {
      return timeSettings.customFormat;
    }

    if (clockType === _types__WEBPACK_IMPORTED_MODULE_2__["ClockType"].H12) {
      return 'h:mm:ss A';
    }

    return 'HH:mm:ss';
  }; // Return a new moment instnce in the selected timezone
  // eslint-disable-next-line


  ClockPanel.prototype.getTZ = function (tz) {
    if (!tz) {
      tz = moment__WEBPACK_IMPORTED_MODULE_4___default.a.tz.guess();
    }

    return moment__WEBPACK_IMPORTED_MODULE_4___default()().tz(tz);
  };

  ClockPanel.prototype.getCountdownText = function () {
    var now = this.state.now;
    var _a = this.props.options,
        countdownSettings = _a.countdownSettings,
        timezone = _a.timezone;

    if (!countdownSettings.endCountdownTime) {
      return countdownSettings.endText;
    }

    var timeLeft = moment__WEBPACK_IMPORTED_MODULE_4___default.a.duration(moment__WEBPACK_IMPORTED_MODULE_4___default()(countdownSettings.endCountdownTime).utcOffset(this.getTZ(timezone).format('Z'), true).diff(now));
    var formattedTimeLeft = '';

    if (timeLeft.asSeconds() <= 0) {
      return countdownSettings.endText;
    }

    if (countdownSettings.customFormat === 'auto') {
      return timeLeft.format();
    }

    if (countdownSettings.customFormat) {
      return timeLeft.format(countdownSettings.customFormat);
    }

    var previous = '';

    if (timeLeft.years() > 0) {
      formattedTimeLeft = timeLeft.years() === 1 ? '1 year, ' : timeLeft.years() + ' years, ';
      previous = 'years';
    }

    if (timeLeft.months() > 0 || previous === 'years') {
      formattedTimeLeft += timeLeft.months() === 1 ? '1 month, ' : timeLeft.months() + ' months, ';
      previous = 'months';
    }

    if (timeLeft.days() > 0 || previous === 'months') {
      formattedTimeLeft += timeLeft.days() === 1 ? '1 day, ' : timeLeft.days() + ' days, ';
      previous = 'days';
    }

    if (timeLeft.hours() > 0 || previous === 'days') {
      formattedTimeLeft += timeLeft.hours() === 1 ? '1 hour, ' : timeLeft.hours() + ' hours, ';
      previous = 'hours';
    }

    if (timeLeft.minutes() > 0 || previous === 'hours') {
      formattedTimeLeft += timeLeft.minutes() === 1 ? '1 minute, ' : timeLeft.minutes() + ' minutes, ';
    }

    formattedTimeLeft += timeLeft.seconds() === 1 ? '1 second ' : timeLeft.seconds() + ' seconds';
    return formattedTimeLeft;
  };

  ClockPanel.prototype.getLoopText = function () {
    var now = this.state.now;
    var _a = this.props.options,
        loopSettings = _a.loopSettings,
        timezone = _a.timezone;
    var timeLeft = moment__WEBPACK_IMPORTED_MODULE_4___default.a.duration(moment__WEBPACK_IMPORTED_MODULE_4___default()(loopSettings.endLoopTime, 'HH:mm:ss').utcOffset(this.getTZ(timezone).format('Z'), true).diff(now));
    var formattedTimeLeft = '';

    if (timeLeft.asSeconds() <= 0) {
      var countdownTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(loopSettings.loopCountdown, 'HH:mm:ss');
      loopSettings.endLoopTime = moment__WEBPACK_IMPORTED_MODULE_4___default()(loopSettings.endLoopTime, 'HH:mm:ss').add(countdownTime.get('hour'), 'h').add(countdownTime.get('minute'), 'm').add(countdownTime.get('second'), 's').format('HH:mm:ss');
    }

    if (loopSettings.customFormat === 'auto') {
      return timeLeft.format();
    }

    if (loopSettings.customFormat) {
      return timeLeft.format(loopSettings.customFormat);
    }

    var previous = '';

    if (timeLeft.years() > 0) {
      formattedTimeLeft = timeLeft.years() === 1 ? '1 year, ' : timeLeft.years() + ' years, ';
      previous = 'years';
    }

    if (timeLeft.months() > 0 || previous === 'years') {
      formattedTimeLeft += timeLeft.months() === 1 ? '1 month, ' : timeLeft.months() + ' months, ';
      previous = 'months';
    }

    if (timeLeft.days() > 0 || previous === 'months') {
      formattedTimeLeft += timeLeft.days() === 1 ? '1 day, ' : timeLeft.days() + ' days, ';
      previous = 'days';
    }

    if (timeLeft.hours() > 0 || previous === 'days') {
      formattedTimeLeft += timeLeft.hours() === 1 ? '1 hour, ' : timeLeft.hours() + ' hours, ';
      previous = 'hours';
    }

    if (timeLeft.minutes() > 0 || previous === 'hours') {
      formattedTimeLeft += timeLeft.minutes() === 1 ? '1 minute, ' : timeLeft.minutes() + ' minutes, ';
    }

    formattedTimeLeft += timeLeft.seconds() === 1 ? '1 second ' : timeLeft.seconds() + ' seconds';
    return formattedTimeLeft;
  };

  ClockPanel.prototype.renderZone = function () {
    var now = this.state.now;
    var timezoneSettings = this.props.options.timezoneSettings;
    var zoneFormat = timezoneSettings.zoneFormat;
    var clazz = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: 1.4;\n    "], ["\n      font-size: ", ";\n      font-weight: ", ";\n      line-height: 1.4;\n    "])), timezoneSettings.fontSize, timezoneSettings.fontWeight);
    var zone = this.props.options.timezone || '';

    switch (zoneFormat) {
      case _types__WEBPACK_IMPORTED_MODULE_2__["ZoneFormat"].offsetAbbv:
        zone = now.format('Z z');
        break;

      case _types__WEBPACK_IMPORTED_MODULE_2__["ZoneFormat"].offset:
        zone = now.format('Z');
        break;

      case _types__WEBPACK_IMPORTED_MODULE_2__["ZoneFormat"].abbv:
        zone = now.format('z');
        break;

      default:
        try {
          zone = this.getTZ(zone)._z.name;
        } catch (e) {
          console.log('Error getting timezone', e);
        }

    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: clazz
    }, zone, zoneFormat === _types__WEBPACK_IMPORTED_MODULE_2__["ZoneFormat"].nameOffset && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "(", now.format('Z z'), ")"));
  };

  ClockPanel.prototype.renderDate = function () {
    var now = this.state.now;
    var dateSettings = this.props.options.dateSettings;
    var clazz = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      font-size: ", ";\n      font-weight: ", ";\n    "], ["\n      font-size: ", ";\n      font-weight: ", ";\n    "])), dateSettings.fontSize, dateSettings.fontWeight);
    var disp = now.locale(dateSettings.locale || '').format(dateSettings.dateFormat);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: clazz
    }, disp));
  };

  ClockPanel.prototype.renderTime = function () {
    var now = this.state.now;
    var _a = this.props.options,
        timeSettings = _a.timeSettings,
        mode = _a.mode;
    var clazz = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      font-size: ", ";\n      font-weight: ", ";\n    "], ["\n      font-size: ", ";\n      font-weight: ", ";\n    "])), timeSettings.fontSize, timeSettings.fontWeight);
    var disp = now.format(this.getTimeFormat());

    switch (mode) {
      case _types__WEBPACK_IMPORTED_MODULE_2__["ClockMode"].countdown:
        disp = this.getCountdownText();
        break;

      case _types__WEBPACK_IMPORTED_MODULE_2__["ClockMode"].loop:
        disp = this.getLoopText();
        break;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: clazz
    }, disp);
  };

  ClockPanel.prototype.render = function () {
    var _a = this.props,
        options = _a.options,
        width = _a.width,
        height = _a.height;
    var bgColor = options.bgColor,
        dateSettings = options.dateSettings,
        timezoneSettings = options.timezoneSettings;
    var clazz = Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      background-color: ", ";\n      text-align: center;\n    "], ["\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      background-color: ", ";\n      text-align: center;\n    "])), bgColor !== null && bgColor !== void 0 ? bgColor : '');
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: clazz,
      style: {
        width: width,
        height: height
      }
    }, dateSettings.showDate && this.renderDate(), this.renderTime(), timezoneSettings.showTimezone && this.renderZone());
  };

  return ClockPanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);


var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/***/ }),

/***/ "./external/moment-duration-format.js":
/*!********************************************!*\
  !*** ./external/moment-duration-format.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Moment Duration Format v2.2.1
 *  https://github.com/jsmreese/moment-duration-format
 *  Date: 2018-01-21
 *
 *  Duration format plugin function for the Moment.js library
 *  http://momentjs.com/
 *
 *  Copyright 2018 John Madhavan-Reese
 *  Released under the MIT license
 */
(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! moment */ "moment")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

  if (root) {
    // Globals.
    root.momentDurationFormatSetup = root.moment ? factory(root.moment) : factory;
  }
})(this, function (moment) {
  // `Number#tolocaleString` is tested on plugin initialization.
  // If the feature test passes, `toLocaleStringWorks` will be set to `true` and the
  // native function will be used to generate formatted output. If the feature
  // test fails, the fallback format function internal to this plugin will be
  // used.
  var toLocaleStringWorks = false; // `Number#toLocaleString` rounds incorrectly for select numbers in Microsoft
  // environments (Edge, IE11, Windows Phone) and possibly other environments.
  // If the rounding test fails and `toLocaleString` will be used for formatting,
  // the plugin will "pre-round" number values using the fallback number format
  // function before passing them to `toLocaleString` for final formatting.

  var toLocaleStringRoundingWorks = false; // Token type names in order of descending magnitude.

  var types = "escape years months weeks days hours minutes seconds milliseconds general".split(" ");
  var bubbles = [{
    type: "seconds",
    targets: [{
      type: "minutes",
      value: 60
    }, {
      type: "hours",
      value: 3600
    }, {
      type: "days",
      value: 86400
    }, {
      type: "weeks",
      value: 604800
    }, {
      type: "months",
      value: 2678400
    }, {
      type: "years",
      value: 31536000
    }]
  }, {
    type: "minutes",
    targets: [{
      type: "hours",
      value: 60
    }, {
      type: "days",
      value: 1440
    }, {
      type: "weeks",
      value: 10080
    }, {
      type: "months",
      value: 44640
    }, {
      type: "years",
      value: 525600
    }]
  }, {
    type: "hours",
    targets: [{
      type: "days",
      value: 24
    }, {
      type: "weeks",
      value: 168
    }, {
      type: "months",
      value: 744
    }, {
      type: "years",
      value: 8760
    }]
  }, {
    type: "days",
    targets: [{
      type: "weeks",
      value: 7
    }, {
      type: "months",
      value: 31
    }, {
      type: "years",
      value: 365
    }]
  }, {
    type: "months",
    targets: [{
      type: "years",
      value: 12
    }]
  }]; // stringIncludes

  function stringIncludes(str, search) {
    if (search.length > str.length) {
      return false;
    }

    return str.indexOf(search) !== -1;
  } // repeatZero(qty)
  // Returns "0" repeated `qty` times.
  // `qty` must be a integer >= 0.


  function repeatZero(qty) {
    var result = "";

    while (qty) {
      result += "0";
      qty -= 1;
    }

    return result;
  }

  function stringRound(digits) {
    var digitsArray = digits.split("").reverse();
    var i = 0;
    var carry = true;

    while (carry && i < digitsArray.length) {
      if (i) {
        if (digitsArray[i] === "9") {
          digitsArray[i] = "0";
        } else {
          digitsArray[i] = (parseInt(digitsArray[i], 10) + 1).toString();
          carry = false;
        }
      } else {
        if (parseInt(digitsArray[i], 10) < 5) {
          carry = false;
        }

        digitsArray[i] = "0";
      }

      i += 1;
    }

    if (carry) {
      digitsArray.push("1");
    }

    return digitsArray.reverse().join("");
  } // formatNumber
  // Formats any number greater than or equal to zero using these options:
  // - userLocale
  // - useToLocaleString
  // - useGrouping
  // - grouping
  // - maximumSignificantDigits
  // - minimumIntegerDigits
  // - fractionDigits
  // - groupingSeparator
  // - decimalSeparator
  //
  // `useToLocaleString` will use `toLocaleString` for formatting.
  // `userLocale` option is passed through to `toLocaleString`.
  // `fractionDigits` is passed through to `maximumFractionDigits` and `minimumFractionDigits`
  // Using `maximumSignificantDigits` will override `minimumIntegerDigits` and `fractionDigits`.


  function formatNumber(number, options, userLocale) {
    var useToLocaleString = options.useToLocaleString;
    var useGrouping = options.useGrouping;
    var grouping = useGrouping && options.grouping.slice();
    var maximumSignificantDigits = options.maximumSignificantDigits;
    var minimumIntegerDigits = options.minimumIntegerDigits || 1;
    var fractionDigits = options.fractionDigits || 0;
    var groupingSeparator = options.groupingSeparator;
    var decimalSeparator = options.decimalSeparator;

    if (useToLocaleString && userLocale) {
      var localeStringOptions = {
        minimumIntegerDigits: minimumIntegerDigits,
        useGrouping: useGrouping
      };

      if (fractionDigits) {
        localeStringOptions.maximumFractionDigits = fractionDigits;
        localeStringOptions.minimumFractionDigits = fractionDigits;
      } // toLocaleString output is "0.0" instead of "0" for HTC browsers
      // when maximumSignificantDigits is set. See #96.


      if (maximumSignificantDigits && number > 0) {
        localeStringOptions.maximumSignificantDigits = maximumSignificantDigits;
      }

      if (!toLocaleStringRoundingWorks) {
        var roundingOptions = extend({}, options);
        roundingOptions.useGrouping = false;
        roundingOptions.decimalSeparator = ".";
        number = parseFloat(formatNumber(number, roundingOptions), 10);
      }

      return number.toLocaleString(userLocale, localeStringOptions);
    }

    var numberString; // Add 1 to digit output length for floating point errors workaround. See below.

    if (maximumSignificantDigits) {
      numberString = number.toPrecision(maximumSignificantDigits + 1);
    } else {
      numberString = number.toFixed(fractionDigits + 1);
    }

    var integerString;
    var fractionString;
    var exponentString;
    var temp = numberString.split("e");
    exponentString = temp[1] || "";
    temp = temp[0].split(".");
    fractionString = temp[1] || "";
    integerString = temp[0] || ""; // Workaround for floating point errors in `toFixed` and `toPrecision`.
    // (3.55).toFixed(1); --> "3.5"
    // (123.55 - 120).toPrecision(2); --> "3.5"
    // (123.55 - 120); --> 3.549999999999997
    // (123.55 - 120).toFixed(2); --> "3.55"
    // Round by examing the string output of the next digit.
    // *************** Implement String Rounding here ***********************
    // Check integerString + fractionString length of toPrecision before rounding.
    // Check length of fractionString from toFixed output before rounding.

    var integerLength = integerString.length;
    var fractionLength = fractionString.length;
    var digitCount = integerLength + fractionLength;
    var digits = integerString + fractionString;

    if (maximumSignificantDigits && digitCount === maximumSignificantDigits + 1 || !maximumSignificantDigits && fractionLength === fractionDigits + 1) {
      // Round digits.
      digits = stringRound(digits);

      if (digits.length === digitCount + 1) {
        integerLength = integerLength + 1;
      } // Discard final fractionDigit.


      if (fractionLength) {
        digits = digits.slice(0, -1);
      } // Separate integer and fraction.


      integerString = digits.slice(0, integerLength);
      fractionString = digits.slice(integerLength);
    } // Trim trailing zeroes from fractionString because toPrecision outputs
    // precision, not significant digits.


    if (maximumSignificantDigits) {
      fractionString = fractionString.replace(/0*$/, "");
    } // Handle exponent.


    var exponent = parseInt(exponentString, 10);

    if (exponent > 0) {
      if (fractionString.length <= exponent) {
        fractionString = fractionString + repeatZero(exponent - fractionString.length);
        integerString = integerString + fractionString;
        fractionString = "";
      } else {
        integerString = integerString + fractionString.slice(0, exponent);
        fractionString = fractionString.slice(exponent);
      }
    } else if (exponent < 0) {
      fractionString = repeatZero(Math.abs(exponent) - integerString.length) + integerString + fractionString;
      integerString = "0";
    }

    if (!maximumSignificantDigits) {
      // Trim or pad fraction when not using maximumSignificantDigits.
      fractionString = fractionString.slice(0, fractionDigits);

      if (fractionString.length < fractionDigits) {
        fractionString = fractionString + repeatZero(fractionDigits - fractionString.length);
      } // Pad integer when using minimumIntegerDigits
      // and not using maximumSignificantDigits.


      if (integerString.length < minimumIntegerDigits) {
        integerString = repeatZero(minimumIntegerDigits - integerString.length) + integerString;
      }
    }

    var formattedString = ""; // Handle grouping.

    if (useGrouping) {
      temp = integerString;
      var group;

      while (temp.length) {
        if (grouping.length) {
          group = grouping.shift();
        }

        if (formattedString) {
          formattedString = groupingSeparator + formattedString;
        }

        formattedString = temp.slice(-group) + formattedString;
        temp = temp.slice(0, -group);
      }
    } else {
      formattedString = integerString;
    } // Add decimalSeparator and fraction.


    if (fractionString) {
      formattedString = formattedString + decimalSeparator + fractionString;
    }

    return formattedString;
  } // durationLabelCompare


  function durationLabelCompare(a, b) {
    if (a.label.length > b.label.length) {
      return -1;
    }

    if (a.label.length < b.label.length) {
      return 1;
    } // a must be equal to b


    return 0;
  } // durationGetLabels


  function durationGetLabels(token, localeData) {
    var labels = [];
    each(keys(localeData), function (localeDataKey) {
      if (localeDataKey.slice(0, 15) !== "_durationLabels") {
        return;
      }

      var labelType = localeDataKey.slice(15).toLowerCase();
      each(keys(localeData[localeDataKey]), function (labelKey) {
        if (labelKey.slice(0, 1) === token) {
          labels.push({
            type: labelType,
            key: labelKey,
            label: localeData[localeDataKey][labelKey]
          });
        }
      });
    });
    return labels;
  } // durationPluralKey


  function durationPluralKey(token, integerValue, decimalValue) {
    // Singular for a value of `1`, but not for `1.0`.
    if (integerValue === 1 && decimalValue === null) {
      return token;
    }

    return token + token;
  }

  var engLocale = {
    durationLabelsStandard: {
      S: 'millisecond',
      SS: 'milliseconds',
      s: 'second',
      ss: 'seconds',
      m: 'minute',
      mm: 'minutes',
      h: 'hour',
      hh: 'hours',
      d: 'day',
      dd: 'days',
      w: 'week',
      ww: 'weeks',
      M: 'month',
      MM: 'months',
      y: 'year',
      yy: 'years'
    },
    durationLabelsShort: {
      S: 'msec',
      SS: 'msecs',
      s: 'sec',
      ss: 'secs',
      m: 'min',
      mm: 'mins',
      h: 'hr',
      hh: 'hrs',
      d: 'dy',
      dd: 'dys',
      w: 'wk',
      ww: 'wks',
      M: 'mo',
      MM: 'mos',
      y: 'yr',
      yy: 'yrs'
    },
    durationTimeTemplates: {
      HMS: 'h:mm:ss',
      HM: 'h:mm',
      MS: 'm:ss'
    },
    durationLabelTypes: [{
      type: "standard",
      string: "__"
    }, {
      type: "short",
      string: "_"
    }],
    durationPluralKey: durationPluralKey
  }; // isArray

  function isArray(array) {
    return Object.prototype.toString.call(array) === "[object Array]";
  } // isObject


  function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  } // findLast


  function findLast(array, callback) {
    var index = array.length;

    while (index -= 1) {
      if (callback(array[index])) {
        return array[index];
      }
    }
  } // find


  function find(array, callback) {
    var index = 0;
    var max = array && array.length || 0;
    var match;

    if (typeof callback !== "function") {
      match = callback;

      callback = function callback(item) {
        return item === match;
      };
    }

    while (index < max) {
      if (callback(array[index])) {
        return array[index];
      }

      index += 1;
    }
  } // each


  function each(array, callback) {
    var index = 0,
        max = array.length;

    if (!array || !max) {
      return;
    }

    while (index < max) {
      if (callback(array[index], index) === false) {
        return;
      }

      index += 1;
    }
  } // map


  function map(array, callback) {
    var index = 0,
        max = array.length,
        ret = [];

    if (!array || !max) {
      return ret;
    }

    while (index < max) {
      ret[index] = callback(array[index], index);
      index += 1;
    }

    return ret;
  } // pluck


  function pluck(array, prop) {
    return map(array, function (item) {
      return item[prop];
    });
  } // compact


  function compact(array) {
    var ret = [];
    each(array, function (item) {
      if (item) {
        ret.push(item);
      }
    });
    return ret;
  } // unique


  function unique(array) {
    var ret = [];
    each(array, function (_a) {
      if (!find(ret, _a)) {
        ret.push(_a);
      }
    });
    return ret;
  } // intersection


  function intersection(a, b) {
    var ret = [];
    each(a, function (_a) {
      each(b, function (_b) {
        if (_a === _b) {
          ret.push(_a);
        }
      });
    });
    return unique(ret);
  } // rest


  function rest(array, callback) {
    var ret = [];
    each(array, function (item, index) {
      if (!callback(item)) {
        ret = array.slice(index);
        return false;
      }
    });
    return ret;
  } // initial


  function initial(array, callback) {
    var reversed = array.slice().reverse();
    return rest(reversed, callback).reverse();
  } // extend


  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }

    return a;
  } // keys


  function keys(a) {
    var ret = [];

    for (var key in a) {
      if (a.hasOwnProperty(key)) {
        ret.push(key);
      }
    }

    return ret;
  } // any


  function any(array, callback) {
    var index = 0,
        max = array.length;

    if (!array || !max) {
      return false;
    }

    while (index < max) {
      if (callback(array[index], index) === true) {
        return true;
      }

      index += 1;
    }

    return false;
  } // flatten


  function flatten(array) {
    var ret = [];
    each(array, function (child) {
      ret = ret.concat(child);
    });
    return ret;
  }

  function toLocaleStringSupportsLocales() {
    var number = 0;

    try {
      number.toLocaleString('i');
    } catch (e) {
      return e.name === 'RangeError';
    }

    return false;
  }

  function featureTestToLocaleStringRounding() {
    return 3.55.toLocaleString("en", {
      useGrouping: false,
      minimumIntegerDigits: 1,
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }) === "3.6";
  }

  function featureTestToLocaleString() {
    var passed = true; // Test locale.

    passed = passed && toLocaleStringSupportsLocales();

    if (!passed) {
      return false;
    } // Test minimumIntegerDigits.


    passed = passed && 1 .toLocaleString("en", {
      minimumIntegerDigits: 1
    }) === "1";
    passed = passed && 1 .toLocaleString("en", {
      minimumIntegerDigits: 2
    }) === "01";
    passed = passed && 1 .toLocaleString("en", {
      minimumIntegerDigits: 3
    }) === "001";

    if (!passed) {
      return false;
    } // Test maximumFractionDigits and minimumFractionDigits.


    passed = passed && 99.99.toLocaleString("en", {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }) === "100";
    passed = passed && 99.99.toLocaleString("en", {
      maximumFractionDigits: 1,
      minimumFractionDigits: 1
    }) === "100.0";
    passed = passed && 99.99.toLocaleString("en", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }) === "99.99";
    passed = passed && 99.99.toLocaleString("en", {
      maximumFractionDigits: 3,
      minimumFractionDigits: 3
    }) === "99.990";

    if (!passed) {
      return false;
    } // Test maximumSignificantDigits.


    passed = passed && 99.99.toLocaleString("en", {
      maximumSignificantDigits: 1
    }) === "100";
    passed = passed && 99.99.toLocaleString("en", {
      maximumSignificantDigits: 2
    }) === "100";
    passed = passed && 99.99.toLocaleString("en", {
      maximumSignificantDigits: 3
    }) === "100";
    passed = passed && 99.99.toLocaleString("en", {
      maximumSignificantDigits: 4
    }) === "99.99";
    passed = passed && 99.99.toLocaleString("en", {
      maximumSignificantDigits: 5
    }) === "99.99";

    if (!passed) {
      return false;
    } // Test grouping.


    passed = passed && 1000 .toLocaleString("en", {
      useGrouping: true
    }) === "1,000";
    passed = passed && 1000 .toLocaleString("en", {
      useGrouping: false
    }) === "1000";

    if (!passed) {
      return false;
    }

    return true;
  } // durationsFormat(durations [, template] [, precision] [, settings])


  function durationsFormat() {
    var args = [].slice.call(arguments);
    var settings = {};
    var durations; // Parse arguments.

    each(args, function (arg, index) {
      if (!index) {
        if (!isArray(arg)) {
          throw "Expected array as the first argument to durationsFormat.";
        }

        durations = arg;
      }

      if (typeof arg === "string" || typeof arg === "function") {
        settings.template = arg;
        return;
      }

      if (typeof arg === "number") {
        settings.precision = arg;
        return;
      }

      if (isObject(arg)) {
        extend(settings, arg);
      }
    });

    if (!durations || !durations.length) {
      return [];
    }

    settings.returnMomentTypes = true;
    var formattedDurations = map(durations, function (dur) {
      return dur.format(settings);
    }); // Merge token types from all durations.

    var outputTypes = intersection(types, unique(pluck(flatten(formattedDurations), "type")));
    var largest = settings.largest;

    if (largest) {
      outputTypes = outputTypes.slice(0, largest);
    }

    settings.returnMomentTypes = false;
    settings.outputTypes = outputTypes;
    return map(durations, function (dur) {
      return dur.format(settings);
    });
  } // durationFormat([template] [, precision] [, settings])


  function durationFormat() {
    var args = [].slice.call(arguments);
    var settings = extend({}, this.format.defaults); // Keep a shadow copy of this moment for calculating remainders.
    // Perform all calculations on positive duration value, handle negative
    // sign at the very end.

    var asMilliseconds = this.asMilliseconds();
    var asMonths = this.asMonths(); // Treat invalid durations as having a value of 0 milliseconds.

    if (this.isValid() === false) {
      asMilliseconds = 0;
      asMonths = 0;
    }

    var isNegative = asMilliseconds < 0; // Two shadow copies are needed because of the way moment.js handles
    // duration arithmetic for years/months and for weeks/days/hours/minutes/seconds.

    var remainder = moment.duration(Math.abs(asMilliseconds), "milliseconds");
    var remainderMonths = moment.duration(Math.abs(asMonths), "months"); // Parse arguments.

    each(args, function (arg) {
      if (typeof arg === "string" || typeof arg === "function") {
        settings.template = arg;
        return;
      }

      if (typeof arg === "number") {
        settings.precision = arg;
        return;
      }

      if (isObject(arg)) {
        extend(settings, arg);
      }
    });
    var momentTokens = {
      years: "y",
      months: "M",
      weeks: "w",
      days: "d",
      hours: "h",
      minutes: "m",
      seconds: "s",
      milliseconds: "S"
    };
    var tokenDefs = {
      escape: /\[(.+?)\]/,
      years: /\*?[Yy]+/,
      months: /\*?M+/,
      weeks: /\*?[Ww]+/,
      days: /\*?[Dd]+/,
      hours: /\*?[Hh]+/,
      minutes: /\*?m+/,
      seconds: /\*?s+/,
      milliseconds: /\*?S+/,
      general: /.+?/
    }; // Types array is available in the template function.

    settings.types = types;

    var typeMap = function typeMap(token) {
      return find(types, function (type) {
        return tokenDefs[type].test(token);
      });
    };

    var tokenizer = new RegExp(map(types, function (type) {
      return tokenDefs[type].source;
    }).join("|"), "g"); // Current duration object is available in the template function.

    settings.duration = this; // Eval template function and cache template string.

    var template = typeof settings.template === "function" ? settings.template.apply(settings) : settings.template; // outputTypes and returnMomentTypes are settings to support durationsFormat().
    // outputTypes is an array of moment token types that determines
    // the tokens returned in formatted output. This option overrides
    // trim, largest, stopTrim, etc.

    var outputTypes = settings.outputTypes; // returnMomentTypes is a boolean that sets durationFormat to return
    // the processed momentTypes instead of formatted output.

    var returnMomentTypes = settings.returnMomentTypes;
    var largest = settings.largest; // Setup stopTrim array of token types.

    var stopTrim = [];

    if (!outputTypes) {
      if (isArray(settings.stopTrim)) {
        settings.stopTrim = settings.stopTrim.join("");
      } // Parse stopTrim string to create token types array.


      if (settings.stopTrim) {
        each(settings.stopTrim.match(tokenizer), function (token) {
          var type = typeMap(token);

          if (type === "escape" || type === "general") {
            return;
          }

          stopTrim.push(type);
        });
      }
    } // Cache moment's locale data.


    var localeData = moment.localeData();

    if (!localeData) {
      localeData = {};
    } // Fall back to this plugin's `eng` extension.


    each(keys(engLocale), function (key) {
      if (typeof engLocale[key] === "function") {
        if (!localeData[key]) {
          localeData[key] = engLocale[key];
        }

        return;
      }

      if (!localeData["_" + key]) {
        localeData["_" + key] = engLocale[key];
      }
    }); // Replace Duration Time Template strings.
    // For locale `eng`: `_HMS_`, `_HM_`, and `_MS_`.

    each(keys(localeData._durationTimeTemplates), function (item) {
      template = template.replace("_" + item + "_", localeData._durationTimeTemplates[item]);
    }); // Determine user's locale.

    var userLocale = settings.userLocale || moment.locale();
    var useLeftUnits = settings.useLeftUnits;
    var usePlural = settings.usePlural;
    var precision = settings.precision;
    var forceLength = settings.forceLength;
    var useGrouping = settings.useGrouping;
    var trunc = settings.trunc; // Use significant digits only when precision is greater than 0.

    var useSignificantDigits = settings.useSignificantDigits && precision > 0;
    var significantDigits = useSignificantDigits ? settings.precision : 0;
    var significantDigitsCache = significantDigits;
    var minValue = settings.minValue;
    var isMinValue = false;
    var maxValue = settings.maxValue;
    var isMaxValue = false; // formatNumber fallback options.

    var useToLocaleString = settings.useToLocaleString;
    var groupingSeparator = settings.groupingSeparator;
    var decimalSeparator = settings.decimalSeparator;
    var grouping = settings.grouping;
    useToLocaleString = useToLocaleString && toLocaleStringWorks; // Trim options.

    var trim = settings.trim;

    if (isArray(trim)) {
      trim = trim.join(" ");
    }

    if (trim === null && (largest || maxValue || useSignificantDigits)) {
      trim = "all";
    }

    if (trim === null || trim === true || trim === "left" || trim === "right") {
      trim = "large";
    }

    if (trim === false) {
      trim = "";
    }

    var trimIncludes = function trimIncludes(item) {
      return item.test(trim);
    };

    var rLarge = /large/;
    var rSmall = /small/;
    var rBoth = /both/;
    var rMid = /mid/;
    var rAll = /^all|[^sm]all/;
    var rFinal = /final/;
    var trimLarge = largest > 0 || any([rLarge, rBoth, rAll], trimIncludes);
    var trimSmall = any([rSmall, rBoth, rAll], trimIncludes);
    var trimMid = any([rMid, rAll], trimIncludes);
    var trimFinal = any([rFinal, rAll], trimIncludes); // Parse format string to create raw tokens array.

    var rawTokens = map(template.match(tokenizer), function (token, index) {
      var type = typeMap(token);

      if (token.slice(0, 1) === "*") {
        token = token.slice(1);

        if (type !== "escape" && type !== "general") {
          stopTrim.push(type);
        }
      }

      return {
        index: index,
        length: token.length,
        text: "",
        // Replace escaped tokens with the non-escaped token text.
        token: type === "escape" ? token.replace(tokenDefs.escape, "$1") : token,
        // Ignore type on non-moment tokens.
        type: type === "escape" || type === "general" ? null : type
      };
    }); // Associate text tokens with moment tokens.

    var currentToken = {
      index: 0,
      length: 0,
      token: "",
      text: "",
      type: null
    };
    var tokens = [];

    if (useLeftUnits) {
      rawTokens.reverse();
    }

    each(rawTokens, function (token) {
      if (token.type) {
        if (currentToken.type || currentToken.text) {
          tokens.push(currentToken);
        }

        currentToken = token;
        return;
      }

      if (useLeftUnits) {
        currentToken.text = token.token + currentToken.text;
      } else {
        currentToken.text += token.token;
      }
    });

    if (currentToken.type || currentToken.text) {
      tokens.push(currentToken);
    }

    if (useLeftUnits) {
      tokens.reverse();
    } // Find unique moment token types in the template in order of
    // descending magnitude.


    var momentTypes = intersection(types, unique(compact(pluck(tokens, "type")))); // Exit early if there are no moment token types.

    if (!momentTypes.length) {
      return pluck(tokens, "text").join("");
    } // Calculate values for each moment type in the template.
    // For processing the settings, values are associated with moment types.
    // Values will be assigned to tokens at the last step in order to
    // assume nothing about frequency or order of tokens in the template.


    momentTypes = map(momentTypes, function (momentType, index) {
      // Is this the least-magnitude moment token found?
      var isSmallest = index + 1 === momentTypes.length; // Is this the greatest-magnitude moment token found?

      var isLargest = !index; // Get the raw value in the current units.

      var rawValue;

      if (momentType === "years" || momentType === "months") {
        rawValue = remainderMonths.as(momentType);
      } else {
        rawValue = remainder.as(momentType);
      }

      var wholeValue = Math.floor(rawValue);
      var decimalValue = rawValue - wholeValue;
      var token = find(tokens, function (token) {
        return momentType === token.type;
      });

      if (isLargest && maxValue && rawValue > maxValue) {
        isMaxValue = true;
      }

      if (isSmallest && minValue && Math.abs(settings.duration.as(momentType)) < minValue) {
        isMinValue = true;
      } // Note the length of the largest-magnitude moment token:
      // if it is greater than one and forceLength is not set,
      // then default forceLength to `true`.
      //
      // Rationale is this: If the template is "h:mm:ss" and the
      // moment value is 5 minutes, the user-friendly output is
      // "5:00", not "05:00". We shouldn't pad the `minutes` token
      // even though it has length of two if the template is "h:mm:ss";
      //
      // If the minutes output should always include the leading zero
      // even when the hour is trimmed then set `{ forceLength: true }`
      // to output "05:00". If the template is "hh:mm:ss", the user
      // clearly wanted everything padded so we should output "05:00";
      //
      // If the user wants the full padded output, they can use
      // template "hh:mm:ss" and set `{ trim: false }` to output
      // "00:05:00".


      if (isLargest && forceLength === null && token.length > 1) {
        forceLength = true;
      } // Update remainder.


      remainder.subtract(wholeValue, momentType);
      remainderMonths.subtract(wholeValue, momentType);
      return {
        rawValue: rawValue,
        wholeValue: wholeValue,
        // Decimal value is only retained for the least-magnitude
        // moment type in the format template.
        decimalValue: isSmallest ? decimalValue : 0,
        isSmallest: isSmallest,
        isLargest: isLargest,
        type: momentType,
        // Tokens can appear multiple times in a template string,
        // but all instances must share the same length.
        tokenLength: token.length
      };
    });
    var truncMethod = trunc ? Math.floor : Math.round;

    var truncate = function truncate(value, places) {
      var factor = Math.pow(10, places);
      return truncMethod(value * factor) / factor;
    };

    var foundFirst = false;
    var bubbled = false;

    var formatValue = function formatValue(momentType, index) {
      var formatOptions = {
        useGrouping: useGrouping,
        groupingSeparator: groupingSeparator,
        decimalSeparator: decimalSeparator,
        grouping: grouping,
        useToLocaleString: useToLocaleString
      };

      if (useSignificantDigits) {
        if (significantDigits <= 0) {
          momentType.rawValue = 0;
          momentType.wholeValue = 0;
          momentType.decimalValue = 0;
        } else {
          formatOptions.maximumSignificantDigits = significantDigits;
          momentType.significantDigits = significantDigits;
        }
      }

      if (isMaxValue && !bubbled) {
        if (momentType.isLargest) {
          momentType.wholeValue = maxValue;
          momentType.decimalValue = 0;
        } else {
          momentType.wholeValue = 0;
          momentType.decimalValue = 0;
        }
      }

      if (isMinValue && !bubbled) {
        if (momentType.isSmallest) {
          momentType.wholeValue = minValue;
          momentType.decimalValue = 0;
        } else {
          momentType.wholeValue = 0;
          momentType.decimalValue = 0;
        }
      }

      if (momentType.isSmallest || momentType.significantDigits && momentType.significantDigits - momentType.wholeValue.toString().length <= 0) {
        // Apply precision to least significant token value.
        if (precision < 0) {
          momentType.value = truncate(momentType.wholeValue, precision);
        } else if (precision === 0) {
          momentType.value = truncMethod(momentType.wholeValue + momentType.decimalValue);
        } else {
          // precision > 0
          if (useSignificantDigits) {
            if (trunc) {
              momentType.value = truncate(momentType.rawValue, significantDigits - momentType.wholeValue.toString().length);
            } else {
              momentType.value = momentType.rawValue;
            }

            if (momentType.wholeValue) {
              significantDigits -= momentType.wholeValue.toString().length;
            }
          } else {
            formatOptions.fractionDigits = precision;

            if (trunc) {
              momentType.value = momentType.wholeValue + truncate(momentType.decimalValue, precision);
            } else {
              momentType.value = momentType.wholeValue + momentType.decimalValue;
            }
          }
        }
      } else {
        if (useSignificantDigits && momentType.wholeValue) {
          // Outer Math.round required here to handle floating point errors.
          momentType.value = Math.round(truncate(momentType.wholeValue, momentType.significantDigits - momentType.wholeValue.toString().length));
          significantDigits -= momentType.wholeValue.toString().length;
        } else {
          momentType.value = momentType.wholeValue;
        }
      }

      if (momentType.tokenLength > 1 && (forceLength || foundFirst)) {
        formatOptions.minimumIntegerDigits = momentType.tokenLength;

        if (bubbled && formatOptions.maximumSignificantDigits < momentType.tokenLength) {
          delete formatOptions.maximumSignificantDigits;
        }
      }

      if (!foundFirst && (momentType.value > 0 || trim === ""
      /* trim: false */
      || find(stopTrim, momentType.type) || find(outputTypes, momentType.type))) {
        foundFirst = true;
      }

      momentType.formattedValue = formatNumber(momentType.value, formatOptions, userLocale);
      formatOptions.useGrouping = false;
      formatOptions.decimalSeparator = ".";
      momentType.formattedValueEn = formatNumber(momentType.value, formatOptions, "en");

      if (momentType.tokenLength === 2 && momentType.type === "milliseconds") {
        momentType.formattedValueMS = formatNumber(momentType.value, {
          minimumIntegerDigits: 3,
          useGrouping: false
        }, "en").slice(0, 2);
      }

      return momentType;
    }; // Calculate formatted values.


    momentTypes = map(momentTypes, formatValue);
    momentTypes = compact(momentTypes); // Bubble rounded values.

    if (momentTypes.length > 1) {
      var findType = function findType(type) {
        return find(momentTypes, function (momentType) {
          return momentType.type === type;
        });
      };

      var bubbleTypes = function bubbleTypes(bubble) {
        var bubbleMomentType = findType(bubble.type);

        if (!bubbleMomentType) {
          return;
        }

        each(bubble.targets, function (target) {
          var targetMomentType = findType(target.type);

          if (!targetMomentType) {
            return;
          }

          if (parseInt(bubbleMomentType.formattedValueEn, 10) === target.value) {
            bubbleMomentType.rawValue = 0;
            bubbleMomentType.wholeValue = 0;
            bubbleMomentType.decimalValue = 0;
            targetMomentType.rawValue += 1;
            targetMomentType.wholeValue += 1;
            targetMomentType.decimalValue = 0;
            targetMomentType.formattedValueEn = targetMomentType.wholeValue.toString();
            bubbled = true;
          }
        });
      };

      each(bubbles, bubbleTypes);
    } // Recalculate formatted values.


    if (bubbled) {
      foundFirst = false;
      significantDigits = significantDigitsCache;
      momentTypes = map(momentTypes, formatValue);
      momentTypes = compact(momentTypes);
    }

    if (outputTypes && !(isMaxValue && !settings.trim)) {
      momentTypes = map(momentTypes, function (momentType) {
        if (find(outputTypes, function (outputType) {
          return momentType.type === outputType;
        })) {
          return momentType;
        }

        return null;
      });
      momentTypes = compact(momentTypes);
    } else {
      // Trim Large.
      if (trimLarge) {
        momentTypes = rest(momentTypes, function (momentType) {
          // Stop trimming on:
          // - the smallest moment type
          // - a type marked for stopTrim
          // - a type that has a whole value
          return !momentType.isSmallest && !momentType.wholeValue && !find(stopTrim, momentType.type);
        });
      } // Largest.


      if (largest && momentTypes.length) {
        momentTypes = momentTypes.slice(0, largest);
      } // Trim Small.


      if (trimSmall && momentTypes.length > 1) {
        momentTypes = initial(momentTypes, function (momentType) {
          // Stop trimming on:
          // - a type marked for stopTrim
          // - a type that has a whole value
          // - the largest momentType
          return !momentType.wholeValue && !find(stopTrim, momentType.type) && !momentType.isLargest;
        });
      } // Trim Mid.


      if (trimMid) {
        momentTypes = map(momentTypes, function (momentType, index) {
          if (index > 0 && index < momentTypes.length - 1 && !momentType.wholeValue) {
            return null;
          }

          return momentType;
        });
        momentTypes = compact(momentTypes);
      } // Trim Final.


      if (trimFinal && momentTypes.length === 1 && !momentTypes[0].wholeValue && !(!trunc && momentTypes[0].isSmallest && momentTypes[0].rawValue < minValue)) {
        momentTypes = [];
      }
    }

    if (returnMomentTypes) {
      return momentTypes;
    } // Localize and pluralize unit labels.


    each(tokens, function (token) {
      var key = momentTokens[token.type];
      var momentType = find(momentTypes, function (momentType) {
        return momentType.type === token.type;
      });

      if (!key || !momentType) {
        return;
      }

      var values = momentType.formattedValueEn.split(".");
      values[0] = parseInt(values[0], 10);

      if (values[1]) {
        values[1] = parseFloat("0." + values[1], 10);
      } else {
        values[1] = null;
      }

      var pluralKey = localeData.durationPluralKey(key, values[0], values[1]);
      var labels = durationGetLabels(key, localeData);
      var autoLocalized = false;
      var pluralizedLabels = {}; // Auto-Localized unit labels.

      each(localeData._durationLabelTypes, function (labelType) {
        var label = find(labels, function (label) {
          return label.type === labelType.type && label.key === pluralKey;
        });

        if (label) {
          pluralizedLabels[label.type] = label.label;

          if (stringIncludes(token.text, labelType.string)) {
            token.text = token.text.replace(labelType.string, label.label);
            autoLocalized = true;
          }
        }
      }); // Auto-pluralized unit labels.

      if (usePlural && !autoLocalized) {
        labels.sort(durationLabelCompare);
        each(labels, function (label) {
          if (pluralizedLabels[label.type] === label.label) {
            if (stringIncludes(token.text, label.label)) {
              // Stop checking this token if its label is already
              // correctly pluralized.
              return false;
            } // Skip this label if it is correct, but not present in
            // the token's text.


            return;
          }

          if (stringIncludes(token.text, label.label)) {
            // Replece this token's label and stop checking.
            token.text = token.text.replace(label.label, pluralizedLabels[label.type]);
            return false;
          }
        });
      }
    }); // Build ouptut.

    tokens = map(tokens, function (token) {
      if (!token.type) {
        return token.text;
      }

      var momentType = find(momentTypes, function (momentType) {
        return momentType.type === token.type;
      });

      if (!momentType) {
        return "";
      }

      var out = "";

      if (useLeftUnits) {
        out += token.text;
      }

      if (isNegative && isMaxValue || !isNegative && isMinValue) {
        out += "< ";
        isMaxValue = false;
        isMinValue = false;
      }

      if (isNegative && isMinValue || !isNegative && isMaxValue) {
        out += "> ";
        isMaxValue = false;
        isMinValue = false;
      }

      if (isNegative && (momentType.value > 0 || find(stopTrim, momentType.type) || find(outputTypes, momentType.type))) {
        out += "-";
        isNegative = false;
      }

      if (token.type === "milliseconds" && momentType.formattedValueMS) {
        out += momentType.formattedValueMS;
      } else {
        out += momentType.formattedValue;
      }

      if (!useLeftUnits) {
        out += token.text;
      }

      return out;
    }); // Trim leading and trailing comma, space, colon, and dot.

    return tokens.join("").replace(/(,| |:|\.)*$/, "").replace(/^(,| |:|\.)*/, "");
  } // defaultFormatTemplate


  function defaultFormatTemplate() {
    var dur = this.duration;

    var findType = function findType(type) {
      return dur._data[type];
    };

    var firstType = find(this.types, findType);
    var lastType = findLast(this.types, findType); // Default template strings for each duration dimension type.

    switch (firstType) {
      case "milliseconds":
        return "S __";

      case "seconds": // Fallthrough.

      case "minutes":
        return "*_MS_";

      case "hours":
        return "_HMS_";

      case "days":
        // Possible Fallthrough.
        if (firstType === lastType) {
          return "d __";
        }

      case "weeks":
        if (firstType === lastType) {
          return "w __";
        }

        if (this.trim === null) {
          this.trim = "both";
        }

        return "w __, d __, h __";

      case "months":
        // Possible Fallthrough.
        if (firstType === lastType) {
          return "M __";
        }

      case "years":
        if (firstType === lastType) {
          return "y __";
        }

        if (this.trim === null) {
          this.trim = "both";
        }

        return "y __, M __, d __";

      default:
        if (this.trim === null) {
          this.trim = "both";
        }

        return "y __, d __, h __, m __, s __";
    }
  } // init


  function init(context) {
    if (!context) {
      throw "Moment Duration Format init cannot find moment instance.";
    }

    context.duration.format = durationsFormat;
    context.duration.fn.format = durationFormat;
    context.duration.fn.format.defaults = {
      // Many options are defaulted to `null` to distinguish between
      // 'not set' and 'set to `false`'
      // trim
      // Can be a string, a delimited list of strings, an array of strings,
      // or a boolean.
      // "large" - will trim largest-magnitude zero-value tokens until
      // finding a token with a value, a token identified as 'stopTrim', or
      // the final token of the format string.
      // "small" - will trim smallest-magnitude zero-value tokens until
      // finding a token with a value, a token identified as 'stopTrim', or
      // the final token of the format string.
      // "both" - will execute "large" trim then "small" trim.
      // "mid" - will trim any zero-value tokens that are not the first or
      // last tokens. Usually used in conjunction with "large" or "both".
      // e.g. "large mid" or "both mid".
      // "final" - will trim the final token if it is zero-value. Use this
      // option with "large" or "both" to output an empty string when
      // formatting a zero-value duration. e.g. "large final" or "both final".
      // "all" - Will trim all zero-value tokens. Shorthand for "both mid final".
      // "left" - maps to "large" to support plugin's version 1 API.
      // "right" - maps to "large" to support plugin's version 1 API.
      // `false` - template tokens are not trimmed.
      // `true` - treated as "large".
      // `null` - treated as "large".
      trim: null,
      // stopTrim
      // A moment token string, a delimited set of moment token strings,
      // or an array of moment token strings. Trimming will stop when a token
      // listed in this option is reached. A "*" character in the format
      // template string will also mark a moment token as stopTrim.
      // e.g. "d [days] *h:mm:ss" will always stop trimming at the 'hours' token.
      stopTrim: null,
      // largest
      // Set to a positive integer to output only the "n" largest-magnitude
      // moment tokens that have a value. All lesser-magnitude moment tokens
      // will be ignored. This option takes effect even if `trim` is set
      // to `false`.
      largest: null,
      // maxValue
      // Use `maxValue` to render generalized output for large duration values,
      // e.g. `"> 60 days"`. `maxValue` must be a positive integer and is
      /// applied to the greatest-magnitude moment token in the format template.
      maxValue: null,
      // minValue
      // Use `minValue` to render generalized output for small duration values,
      // e.g. `"< 5 minutes"`. `minValue` must be a positive integer and is
      // applied to the least-magnitude moment token in the format template.
      minValue: null,
      // precision
      // If a positive integer, number of decimal fraction digits to render.
      // If a negative integer, number of integer place digits to truncate to 0.
      // If `useSignificantDigits` is set to `true` and `precision` is a positive
      // integer, sets the maximum number of significant digits used in the
      // formatted output.
      precision: 0,
      // trunc
      // Default behavior rounds final token value. Set to `true` to
      // truncate final token value, which was the default behavior in
      // version 1 of this plugin.
      trunc: false,
      // forceLength
      // Force first moment token with a value to render at full length
      // even when template is trimmed and first moment token has length of 1.
      forceLength: null,
      // userLocale
      // Formatted numerical output is rendered using `toLocaleString`
      // and the locale of the user's environment. Set this option to render
      // numerical output using a different locale. Unit names are rendered
      // and detected using the locale set in moment.js, which can be different
      // from the locale of user's environment.
      userLocale: null,
      // usePlural
      // Will automatically singularize or pluralize unit names when they
      // appear in the text associated with each moment token. Standard and
      // short unit labels are singularized and pluralized, based on locale.
      // e.g. in english, "1 second" or "1 sec" would be rendered instead
      // of "1 seconds" or "1 secs". The default pluralization function
      // renders a plural label for a value with decimal precision.
      // e.g. "1.0 seconds" is never rendered as "1.0 second".
      // Label types and pluralization function are configurable in the
      // localeData extensions.
      usePlural: true,
      // useLeftUnits
      // The text to the right of each moment token in a format string
      // is treated as that token's units for the purposes of trimming,
      // singularizing, and auto-localizing.
      // e.g. "h [hours], m [minutes], s [seconds]".
      // To properly singularize or localize a format string such as
      // "[hours] h, [minutes] m, [seconds] s", where the units appear
      // to the left of each moment token, set useLeftUnits to `true`.
      // This plugin is not tested in the context of rtl text.
      useLeftUnits: false,
      // useGrouping
      // Enables locale-based digit grouping in the formatted output. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
      useGrouping: true,
      // useSignificantDigits
      // Treat the `precision` option as the maximum significant digits
      // to be rendered. Precision must be a positive integer. Significant
      // digits extend across unit types,
      // e.g. "6 hours 37.5 minutes" represents 4 significant digits.
      // Enabling this option causes token length to be ignored. See  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
      useSignificantDigits: false,
      // template
      // The template string used to format the duration. May be a function
      // or a string. Template functions are executed with the `this` binding
      // of the settings object so that template strings may be dynamically
      // generated based on the duration object (accessible via `this.duration`)
      // or any of the other settings. Leading and trailing space, comma,
      // period, and colon characters are trimmed from the resulting string.
      template: defaultFormatTemplate,
      // useToLocaleString
      // Set this option to `false` to ignore the `toLocaleString` feature
      // test and force the use of the `formatNumber` fallback function
      // included in this plugin.
      useToLocaleString: true,
      // formatNumber fallback options.
      // When `toLocaleString` is detected and passes the feature test, the
      // following options will have no effect: `toLocaleString` will be used
      // for formatting and the grouping separator, decimal separator, and
      // integer digit grouping will be determined by the user locale.
      // groupingSeparator
      // The integer digit grouping separator used when using the fallback
      // formatNumber function.
      groupingSeparator: ",",
      // decimalSeparator
      // The decimal separator used when using the fallback formatNumber
      // function.
      decimalSeparator: ".",
      // grouping
      // The integer digit grouping used when using the fallback formatNumber
      // function. Must be an array. The default value of `[3]` gives the
      // standard 3-digit thousand/million/billion digit groupings for the
      // "en" locale. Setting this option to `[3, 2]` would generate the
      // thousand/lakh/crore digit groupings used in the "en-IN" locale.
      grouping: [3]
    };
    context.updateLocale('en', engLocale);
  } // Run feature tests for `Number#toLocaleString`.


  toLocaleStringWorks = featureTestToLocaleString();
  toLocaleStringRoundingWorks = toLocaleStringWorks && featureTestToLocaleStringRounding(); // Initialize duration format on the global moment instance.

  init(moment); // Return the init function so that duration format can be
  // initialized on other moment instances.

  return init;
});

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ClockPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClockPanel */ "./ClockPanel.tsx");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./options.tsx");



var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_ClockPanel__WEBPACK_IMPORTED_MODULE_1__["ClockPanel"]).setNoPadding().setPanelOptions(_options__WEBPACK_IMPORTED_MODULE_2__["optionsBuilder"]);

/***/ }),

/***/ "./options.tsx":
/*!*********************!*\
  !*** ./options.tsx ***!
  \*********************/
/*! exports provided: optionsBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsBuilder", function() { return optionsBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./types.ts");
/* harmony import */ var _ClockPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ClockPanel */ "./ClockPanel.tsx");








var optionsBuilder = function optionsBuilder(builder) {
  // Global options
  builder.addRadio({
    path: 'mode',
    name: 'Mode',
    settings: {
      options: [{
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ClockMode"].time,
        label: 'Time'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ClockMode"].countdown,
        label: 'Countdown'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ClockMode"].loop,
        label: 'Loop'
      }]
    },
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_6__["ClockMode"].time
  }).addCustomEditor({
    id: 'bgColor',
    path: 'bgColor',
    name: 'Background Color',
    editor: function editor(props) {
      var styles = getStyles(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["config"].theme);
      var prefix = null;
      var suffix = null;

      if (props.value) {
        suffix = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          className: styles.trashIcon,
          name: "trash-alt",
          onClick: function onClick() {
            return props.onChange(undefined);
          }
        });
      }

      prefix = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styles.inputPrefix
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styles.colorPicker
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], {
        color: props.value || _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__["config"].theme.colors.panelBg,
        onChange: props.onChange,
        enableNamedColors: true
      })));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        type: "text",
        value: props.value || 'Pick Color',
        onBlur: function onBlur(v) {
          console.log('CLICK');
        },
        prefix: prefix,
        suffix: suffix
      }));
    },
    defaultValue: ''
  }); // TODO: refreshSettings.syncWithDashboard

  addCountdown(builder);
  addLoop(builder);
  addTimeFormat(builder);
  addTimeZone(builder);
  addDateFormat(builder);
}; //---------------------------------------------------------------------
// COUNTDOWN
//---------------------------------------------------------------------

function addCountdown(builder) {
  var category = ['Countdown'];
  builder.addTextInput({
    category: category,
    path: 'countdownSettings.endCountdownTime',
    name: 'End Time',
    settings: {
      placeholder: 'ISO 8601 or RFC 2822 Date time'
    },
    defaultValue: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["dateTime"])(Date.now()).add(6, 'h').format(),
    showIf: function showIf(o) {
      return o.mode === _types__WEBPACK_IMPORTED_MODULE_6__["ClockMode"].countdown;
    }
  }).addTextInput({
    category: category,
    path: 'countdownSettings.endText',
    name: 'End Text',
    defaultValue: '00:00:00',
    showIf: function showIf(o) {
      return o.mode === _types__WEBPACK_IMPORTED_MODULE_6__["ClockMode"].countdown;
    }
  }).addTextInput({
    category: category,
    path: 'countdownSettings.customFormat',
    name: 'Custom format',
    settings: {
      placeholder: 'optional'
    },
    defaultValue: undefined,
    showIf: function showIf(o) {
      return o.mode === _types__WEBPACK_IMPORTED_MODULE_6__["ClockMode"].countdown;
    }
  });
} //---------------------------------------------------------------------
// LOOP
//---------------------------------------------------------------------


function addLoop(builder) {
  var category = ['Loop'];
  builder.addTextInput({
    category: category,
    path: 'loopSettings.loopCountdown',
    name: 'Loop Countdown',
    defaultValue: '01:00:00',
    showIf: function showIf(o) {
      return o.mode === _types__WEBPACK_IMPORTED_MODULE_6__["ClockMode"].loop;
    }
  }).addTextInput({
    category: category,
    path: 'loopSettings.endLoopTime',
    name: 'Next Time',
    defaultValue: Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["dateTime"])(Date.now()).add(1, 'h').format('HH:mm:ss'),
    showIf: function showIf(o) {
      return o.mode === _types__WEBPACK_IMPORTED_MODULE_6__["ClockMode"].loop;
    }
  }).addTextInput({
    category: category,
    path: 'loopSettings.customFormat',
    name: 'Custom format',
    settings: {
      placeholder: 'optional'
    },
    defaultValue: undefined,
    showIf: function showIf(o) {
      return o.mode === _types__WEBPACK_IMPORTED_MODULE_6__["ClockMode"].loop;
    }
  });
} //---------------------------------------------------------------------
// TIME FORMAT
//---------------------------------------------------------------------


function addTimeFormat(builder) {
  var category = ['Time Format'];
  builder.addRadio({
    category: category,
    path: 'clockType',
    name: 'Clock Type',
    settings: {
      options: [{
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ClockType"].H24,
        label: '24 Hour'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ClockType"].H12,
        label: '12 Hour'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ClockType"].Custom,
        label: 'Custom'
      }]
    },
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_6__["ClockType"].H24
  }).addTextInput({
    category: category,
    path: 'timeSettings.customFormat',
    name: 'Time Format',
    description: 'the date formatting pattern',
    settings: {
      placeholder: 'date format'
    },
    defaultValue: undefined,
    showIf: function showIf(opts) {
      return opts.clockType === _types__WEBPACK_IMPORTED_MODULE_6__["ClockType"].Custom;
    }
  }).addTextInput({
    category: category,
    path: 'timeSettings.fontSize',
    name: 'Font size',
    settings: {
      placeholder: 'date format'
    },
    defaultValue: '12px'
  }).addRadio({
    category: category,
    path: 'timeSettings.fontWeight',
    name: 'Font weight',
    settings: {
      options: [{
        value: _types__WEBPACK_IMPORTED_MODULE_6__["FontWeight"].normal,
        label: 'Normal'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["FontWeight"].bold,
        label: 'Bold'
      }]
    },
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_6__["FontWeight"].normal
  });
} //---------------------------------------------------------------------
// TIMEZONE
//---------------------------------------------------------------------


function addTimeZone(builder) {
  var category = ['Timezone'];
  var timezones = Object(_ClockPanel__WEBPACK_IMPORTED_MODULE_7__["getTimeZoneNames"])().map(function (n) {
    return {
      label: n,
      value: n
    };
  });
  timezones.unshift({
    label: 'Default',
    value: ''
  });
  builder.addSelect({
    category: category,
    path: 'timezone',
    name: 'Timezone',
    settings: {
      options: timezones
    },
    defaultValue: ''
  }).addBooleanSwitch({
    category: category,
    path: 'timezoneSettings.showTimezone',
    name: 'Show Timezone',
    defaultValue: false
  }).addSelect({
    category: category,
    path: 'timezoneSettings.zoneFormat',
    name: 'Display Format',
    settings: {
      options: [{
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ZoneFormat"].name,
        label: 'Normal'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ZoneFormat"].nameOffset,
        label: 'Name + Offset'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ZoneFormat"].offsetAbbv,
        label: 'Offset + Abbreviation'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ZoneFormat"].offset,
        label: 'Offset'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["ZoneFormat"].abbv,
        label: 'Abbriviation'
      }]
    },
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_6__["ZoneFormat"].offsetAbbv,
    showIf: function showIf(s) {
      var _a;

      return (_a = s.timezoneSettings) === null || _a === void 0 ? void 0 : _a.showTimezone;
    }
  }).addTextInput({
    category: category,
    path: 'timezoneSettings.fontSize',
    name: 'Font size',
    settings: {
      placeholder: 'font size'
    },
    defaultValue: '12px',
    showIf: function showIf(s) {
      var _a;

      return (_a = s.timezoneSettings) === null || _a === void 0 ? void 0 : _a.showTimezone;
    }
  }).addRadio({
    category: category,
    path: 'timezoneSettings.fontWeight',
    name: 'Font weight',
    settings: {
      options: [{
        value: _types__WEBPACK_IMPORTED_MODULE_6__["FontWeight"].normal,
        label: 'Normal'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["FontWeight"].bold,
        label: 'Bold'
      }]
    },
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_6__["FontWeight"].normal,
    showIf: function showIf(s) {
      var _a;

      return (_a = s.timezoneSettings) === null || _a === void 0 ? void 0 : _a.showTimezone;
    }
  });
} //---------------------------------------------------------------------
// DATE FORMAT
//---------------------------------------------------------------------


function addDateFormat(builder) {
  var category = ['Date Options'];
  builder.addBooleanSwitch({
    category: category,
    path: 'dateSettings.showDate',
    name: 'Show Date',
    defaultValue: false
  }).addTextInput({
    category: category,
    path: 'dateSettings.dateFormat',
    name: 'Date Format',
    settings: {
      placeholder: 'Enter date format'
    },
    defaultValue: 'YYYY-MM-DD',
    showIf: function showIf(s) {
      var _a;

      return (_a = s.dateSettings) === null || _a === void 0 ? void 0 : _a.showDate;
    }
  }).addTextInput({
    category: category,
    path: 'dateSettings.locale',
    name: 'Locale',
    settings: {
      placeholder: 'Enter locale: de, fr, es, ... (default: en)'
    },
    defaultValue: '',
    showIf: function showIf(s) {
      var _a;

      return (_a = s.dateSettings) === null || _a === void 0 ? void 0 : _a.showDate;
    }
  }).addTextInput({
    category: category,
    path: 'dateSettings.fontSize',
    name: 'Font size',
    settings: {
      placeholder: 'date format'
    },
    defaultValue: '20px',
    showIf: function showIf(s) {
      var _a;

      return (_a = s.dateSettings) === null || _a === void 0 ? void 0 : _a.showDate;
    }
  }).addRadio({
    category: category,
    path: 'dateSettings.fontWeight',
    name: 'Font weight',
    settings: {
      options: [{
        value: _types__WEBPACK_IMPORTED_MODULE_6__["FontWeight"].normal,
        label: 'Normal'
      }, {
        value: _types__WEBPACK_IMPORTED_MODULE_6__["FontWeight"].bold,
        label: 'Bold'
      }]
    },
    defaultValue: _types__WEBPACK_IMPORTED_MODULE_6__["FontWeight"].normal,
    showIf: function showIf(s) {
      var _a;

      return (_a = s.dateSettings) === null || _a === void 0 ? void 0 : _a.showDate;
    }
  });
}

var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function (theme) {
  return {
    colorPicker: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      padding: 0 ", ";\n    "], ["\n      padding: 0 ", ";\n    "])), theme.spacing.sm),
    inputPrefix: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: flex;\n      align-items: center;\n    "], ["\n      display: flex;\n      align-items: center;\n    "]))),
    trashIcon: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      color: ", ";\n      cursor: pointer;\n\n      &:hover {\n        color: ", ";\n      }\n    "], ["\n      color: ", ";\n      cursor: pointer;\n\n      &:hover {\n        color: ", ";\n      }\n    "])), theme.colors.textWeak, theme.colors.text)
  };
});
var templateObject_1, templateObject_2, templateObject_3;

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! exports provided: ClockMode, ClockType, ZoneFormat, FontWeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockMode", function() { return ClockMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockType", function() { return ClockType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneFormat", function() { return ZoneFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontWeight", function() { return FontWeight; });
var ClockMode;

(function (ClockMode) {
  ClockMode["time"] = "time";
  ClockMode["countdown"] = "countdown";
  ClockMode["loop"] = "loop";
})(ClockMode || (ClockMode = {}));

var ClockType;

(function (ClockType) {
  ClockType["H24"] = "24 hour";
  ClockType["H12"] = "12 hour";
  ClockType["Custom"] = "custom";
})(ClockType || (ClockType = {}));

var ZoneFormat;

(function (ZoneFormat) {
  ZoneFormat["name"] = "name";
  ZoneFormat["nameOffset"] = "nameOffset";
  ZoneFormat["offsetAbbv"] = "offsetAbbv";
  ZoneFormat["offset"] = "offset";
  ZoneFormat["abbv"] = "abbv";
})(ZoneFormat || (ZoneFormat = {}));

var FontWeight;

(function (FontWeight) {
  FontWeight["normal"] = "normal";
  FontWeight["bold"] = "bold";
})(FontWeight || (FontWeight = {}));

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map