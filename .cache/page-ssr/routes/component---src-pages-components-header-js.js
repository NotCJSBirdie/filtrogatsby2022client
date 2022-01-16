exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 4014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5000);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fast_marquee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7005);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2031);
const Header=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"text-gray-600 body-font"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container px-5 py-5 mx-auto"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex flex-col text-center w-full mb-12"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:" text-xl font-medium title-font mb-4 text-gray-900"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"mr-2 hover:underline hover:underline-offset-2 hover:transition-all hover:ease-linear"},"Catalog,")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:"/about"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"mr-2 hover:underline hover:underline-offset-2 hover:transition-all hover:ease-linear"},"About Us,")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:"https://www.instagram.com/filtro_studio/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"mr-2 hover:underline hover:underline-offset-2 hover:transition-all hover:ease-linear"},"Instagram"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:"https://files.cargocollective.com/c1082749/filtroo.svg",alt:"brandtitle"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"py-5"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_fast_marquee__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{gradient:false,direction:"right",speed:80},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"text-3xl mr-2"},"Filtro Studio is a curated catalogue of furniture and objects Filtro Studio is a curated catalogue of furniture and objects Filtro Studio is a curated catalogue of furniture and objects Filtro Studio is a curated catalogue of furniture and objects"))))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 7005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(5000);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

___$insertStyle(".marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}");

var Marquee = function (_a) {
    var _b, _c, _d, _e;
    var _f = _a.style, style = _f === void 0 ? {} : _f, _g = _a.className, className = _g === void 0 ? "" : _g, _h = _a.play, play = _h === void 0 ? true : _h, _j = _a.pauseOnHover, pauseOnHover = _j === void 0 ? false : _j, _k = _a.pauseOnClick, pauseOnClick = _k === void 0 ? false : _k, _l = _a.direction, direction = _l === void 0 ? "left" : _l, _m = _a.speed, speed = _m === void 0 ? 20 : _m, _o = _a.delay, delay = _o === void 0 ? 0 : _o, _p = _a.loop, loop = _p === void 0 ? 0 : _p, _q = _a.gradient, gradient = _q === void 0 ? true : _q, _r = _a.gradientColor, gradientColor = _r === void 0 ? [255, 255, 255] : _r, _s = _a.gradientWidth, gradientWidth = _s === void 0 ? 200 : _s, onFinish = _a.onFinish, onCycleComplete = _a.onCycleComplete, children = _a.children;
    // React Hooks
    var _t = React.useState(0), containerWidth = _t[0], setContainerWidth = _t[1];
    var _u = React.useState(0), marqueeWidth = _u[0], setMarqueeWidth = _u[1];
    var _v = React.useState(0), duration = _v[0], setDuration = _v[1];
    var _w = React.useState(false), isMounted = _w[0], setIsMounted = _w[1];
    var containerRef = React.useRef(null);
    var marqueeRef = React.useRef(null);
    var calculateWidth = function () {
        // Find width of container and width of marquee
        if (marqueeRef.current && containerRef.current) {
            setContainerWidth(containerRef.current.getBoundingClientRect().width);
            setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width);
        }
        if (marqueeWidth < containerWidth) {
            setDuration(containerWidth / speed);
        }
        else {
            setDuration(marqueeWidth / speed);
        }
    };
    React.useEffect(function () {
        calculateWidth();
        // Rerender on window resize
        window.addEventListener("resize", calculateWidth);
        return function () {
            window.removeEventListener("resize", calculateWidth);
        };
    });
    React.useEffect(function () {
        setIsMounted(true);
    }, []);
    // Gradient color in an unfinished rgba format
    var rgbaGradientColor = "rgba(" + gradientColor[0] + ", " + gradientColor[1] + ", " + gradientColor[2];
    return (React__default['default'].createElement(React.Fragment, null, !isMounted ? null : (React__default['default'].createElement("div", { ref: containerRef, style: __assign(__assign({}, style), (_b = {}, _b["--pause-on-hover"] = pauseOnHover ? "paused" : "running", _b["--pause-on-click"] = pauseOnClick ? "paused" : "running", _b)), className: className + " marquee-container" },
        gradient && (React__default['default'].createElement("div", { style: (_c = {},
                _c["--gradient-color"] = rgbaGradientColor + ", 1), " + rgbaGradientColor + ", 0)",
                _c["--gradient-width"] = typeof gradientWidth === "number"
                    ? gradientWidth + "px"
                    : gradientWidth,
                _c), className: "overlay" })),
        React__default['default'].createElement("div", { ref: marqueeRef, style: (_d = {},
                _d["--play"] = play ? "running" : "paused",
                _d["--direction"] = direction === "left" ? "normal" : "reverse",
                _d["--duration"] = duration + "s",
                _d["--delay"] = delay + "s",
                _d["--iteration-count"] = !!loop ? "" + loop : "infinite",
                _d), className: "marquee", onAnimationIteration: onCycleComplete, onAnimationEnd: onFinish }, children),
        React__default['default'].createElement("div", { style: (_e = {},
                _e["--play"] = play ? "running" : "paused",
                _e["--direction"] = direction === "left" ? "normal" : "reverse",
                _e["--duration"] = duration + "s",
                _e["--delay"] = delay + "s",
                _e["--iteration-count"] = !!loop ? "" + loop : "infinite",
                _e), className: "marquee" }, children)))));
};

exports.Z = Marquee;
//# sourceMappingURL=index.js.map


/***/ })

};
;
//# sourceMappingURL=component---src-pages-components-header-js.js.map