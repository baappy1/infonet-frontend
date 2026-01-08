(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Home/LogoSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InfiniteSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function InfiniteSlider() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "78783676398b9c4be8179c04df7b21117ce66f52bfc0b9c5ba5daad655c8a0b3") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "78783676398b9c4be8179c04df7b21117ce66f52bfc0b9c5ba5daad655c8a0b3";
    }
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "InfiniteSlider[useEffect()]": ()=>{
                const track = trackRef.current;
                const items = Array.from(track.children);
                let trackWidth = track.scrollWidth;
                const wrapperWidth = wrapperRef.current.offsetWidth;
                while(trackWidth < wrapperWidth * 5){
                    items.forEach({
                        "InfiniteSlider[useEffect() > items.forEach()]": (item)=>{
                            const clone = item.cloneNode(true);
                            track.appendChild(clone);
                        }
                    }["InfiniteSlider[useEffect() > items.forEach()]"]);
                    trackWidth = track.scrollWidth;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(track, {
                    x: -wrapperWidth,
                    duration: 30,
                    ease: "linear",
                    repeat: -1,
                    modifiers: {
                        x: (x)=>`${parseFloat(x) % wrapperWidth}px`
                    }
                });
            }
        })["InfiniteSlider[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center uppercase  mb-[30px] lg:mb-[56px] pl-[10px] pr-[10px]  lg:pl-0 lg:pr-0 font-[14px] leading-[18px] lg:font-[16px] lg:leading-[22px]",
                children: "Helping 100+ leading companies get better results"
            }, void 0, false, {
                fileName: "[project]/components/Home/LogoSlider.jsx",
                lineNumber: 56,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/LogoSlider.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "z-[99] absolute left-[-132px] rotate-[-180deg] top-[-20px] transform w-[227px] h-[100px] hidden sm:flex",
            style: {
                background: "linear-gradient(270deg, #F8F8F3 67.97%, rgba(248, 248, 243, 0) 100%)"
            }
        }, void 0, false, {
            fileName: "[project]/components/Home/LogoSlider.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "z-[99] absolute right-[-132px] top-[-20px] transform w-[227px] h-[100px] hidden sm:flex",
            style: {
                background: "linear-gradient(270deg, #F8F8F3 67.97%, rgba(248, 248, 243, 0) 100%)"
            }
        }, void 0, false, {
            fileName: "[project]/components/Home/LogoSlider.jsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "z-[99] absolute left-[-2px] rotate-[-180deg] top-[-3px] transform w-[48px] h-[40px] flex sm:hidden",
            style: {
                background: "linear-gradient(270deg, #F8F8F3 67.97%, rgba(248, 248, 243, 0) 100%)"
            }
        }, void 0, false, {
            fileName: "[project]/components/Home/LogoSlider.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "z-[99] absolute right-[-2px] top-[-3px] transform w-[48px] h-[40px] flex sm:hidden",
            style: {
                background: "linear-gradient(270deg, #F8F8F3 67.97%, rgba(248, 248, 243, 0) 100%)"
            }
        }, void 0, false, {
            fileName: "[project]/components/Home/LogoSlider.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-[50px] lg:pt-[100px] pb:[45px] lg:pb-[120px] bg-[#F8F8F3] overflow-hidden",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto relative",
                    children: [
                        t3,
                        t4,
                        t5,
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: wrapperRef,
                            className: "w-full overflow-hidden pb-[20px] lg:pb-[50px] border-b border-dashed border-b-[#08090D33]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: trackRef,
                                className: "flex gap-[34px] lg:gap-[63px] w-max",
                                children: [
                                    "Item 1",
                                    "Item 2",
                                    "Item 3",
                                    "Item 4",
                                    "Item 5"
                                ].map(_InfiniteSliderAnonymous)
                            }, void 0, false, {
                                fileName: "[project]/components/Home/LogoSlider.jsx",
                                lineNumber: 99,
                                columnNumber: 292
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Home/LogoSlider.jsx",
                            lineNumber: 99,
                            columnNumber: 168
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/LogoSlider.jsx",
                    lineNumber: 99,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/LogoSlider.jsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_s(InfiniteSlider, "NZo9xY/zXQ4ZKIsl2YgC7oLln8s=");
_c = InfiniteSlider;
function _InfiniteSliderAnonymous(item_0, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-auto h-[39px] lg:h-[48px] flex items-center justify-center flex-shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            width: 142,
            height: 42,
            className: "h-[22px] lg:h-[42px] w-auto object-contain",
            src: "https://staging.hellonotionhive.com/wordpress/infonet/wp-content/uploads/2026/01/logo-01.svg",
            alt: ""
        }, void 0, false, {
            fileName: "[project]/components/Home/LogoSlider.jsx",
            lineNumber: 107,
            columnNumber: 114
        }, this)
    }, index, false, {
        fileName: "[project]/components/Home/LogoSlider.jsx",
        lineNumber: 107,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "InfiniteSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/HomeSolution.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeSolution
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// Custom arrow component
const AccordionArrow = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "93f8edd54e373d2a783f4234f34e5edad1ff5403db56a1fab83f4846c7bf671f") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "93f8edd54e373d2a783f4234f34e5edad1ff5403db56a1fab83f4846c7bf671f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip0_100_1245)",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 2.5L8 13.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 19,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.5 9.80005L8 14.3L3.5 9.80005",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square"
                }, void 0, false, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 19,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "accordion-arrow transition-transform duration-300 data-[state=open]:rotate-180",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "clip0_100_1245",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: 16,
                            height: 16,
                            fill: "white",
                            transform: "matrix(0 1 -1 0 16 0)"
                        }, void 0, false, {
                            fileName: "[project]/components/Home/HomeSolution.jsx",
                            lineNumber: 26,
                            columnNumber: 236
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Home/HomeSolution.jsx",
                        lineNumber: 26,
                        columnNumber: 206
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 26,
                    columnNumber: 200
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 26,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = AccordionArrow;
function HomeSolution() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "93f8edd54e373d2a783f4234f34e5edad1ff5403db56a1fab83f4846c7bf671f") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "93f8edd54e373d2a783f4234f34e5edad1ff5403db56a1fab83f4846c7bf671f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:block w-full lg:w-[50.85%]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                width: 671,
                height: 536,
                className: "w-full object-cover rounded-[8px]",
                src: "https://staging.hellonotionhive.com/wordpress/infonet/wp-content/uploads/2026/01/home-solution.png",
                alt: "Technology Tailored for Fuel & Retail Operations"
            }, void 0, false, {
                fileName: "[project]/components/Home/HomeSolution.jsx",
                lineNumber: 43,
                columnNumber: 64
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "top-title mb-[20px]",
            children: "[ Products & Solutions ]"
        }, void 0, false, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-manrope text-[28px] leading-[30px] lg:text-[40px] lg:leading-[50px] pb-[40px] lg:pb-[30px]",
            children: "Technology Tailored for Fuel & Retail Operations"
        }, void 0, false, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
            value: "item-1",
            className: "border-t border-dashed border-b-0 border-[#08090D33]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                    className: "pt-[20px] pb-[24px] flex justify-between items-center leading-[18px] lg:leading-[22px] uppercase text-[14px] lg:text-[16px]",
                    children: [
                        "C-Store Commander",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionArrow, {}, void 0, false, {
                            fileName: "[project]/components/Home/HomeSolution.jsx",
                            lineNumber: 61,
                            columnNumber: 276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 61,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                    className: "flex flex-col gap-4 text-[#08090D] w-full font-manrope",
                    children: "An all-in-one touch-screen Point-of-Sale system built for convenience stores and fuel retail. C-Store Commander seamlessly connects your front counter to your back office, ensuring fast transactions, accurate inventory control, and real-time reporting."
                }, void 0, false, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 61,
                    columnNumber: 313
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
            value: "item-2",
            className: "border-t border-dashed border-b-0 border-[#08090D33]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                    className: "pt-[20px] pb-[24px] flex justify-between items-center leading-[18px] lg:leading-[22px] uppercase text-[14px] lg:text-[16px]",
                    children: [
                        "Unattended Fueling",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionArrow, {}, void 0, false, {
                            fileName: "[project]/components/Home/HomeSolution.jsx",
                            lineNumber: 68,
                            columnNumber: 277
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 68,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                    className: "flex flex-col gap-4 text-[#08090D] w-full font-manrope",
                    children: "An all-in-one touch-screen Point-of-Sale system built for convenience stores and fuel retail. C-Store Commander seamlessly connects your front counter to your back office, ensuring fast transactions, accurate inventory control, and real-time reporting."
                }, void 0, false, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 68,
                    columnNumber: 314
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
            type: "single",
            collapsible: true,
            className: "w-full native-accordion",
            defaultValue: "item-1",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                    value: "item-3",
                    className: "border-t border-dashed border-b-0 border-[#08090D33]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                            className: "pt-[20px] pb-[24px] flex justify-between items-center leading-[18px] lg:leading-[22px] uppercase text-[14px] lg:text-[16px]",
                            children: [
                                "Custom Software",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionArrow, {}, void 0, false, {
                                    fileName: "[project]/components/Home/HomeSolution.jsx",
                                    lineNumber: 75,
                                    columnNumber: 384
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Home/HomeSolution.jsx",
                            lineNumber: 75,
                            columnNumber: 215
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                            className: "flex flex-col gap-4 text-[#08090D] w-full font-manrope",
                            children: "An all-in-one touch-screen Point-of-Sale system built for convenience stores and fuel retail. C-Store Commander seamlessly connects your front counter to your back office, ensuring fast transactions, accurate inventory control, and real-time reporting."
                        }, void 0, false, {
                            fileName: "[project]/components/Home/HomeSolution.jsx",
                            lineNumber: 75,
                            columnNumber: 421
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 75,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[14px] leading-[18px]",
            children: "book a demo"
        }, void 0, false, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip0_505_137)",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.5 8H13.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 89,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.79999 3.5L14.3 8L9.79999 12.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square"
                }, void 0, false, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 89,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full lg:w-[40.7%]",
            children: [
                t1,
                t2,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "",
                    className: "inline-flex font-medium rounded-[4px] bg-[#EBFF3A] transition duration-150 hover:bg-white uppercase gap-[10px] px-[16px] py-[12px] mt-[24px] lg:mt-[20px]",
                    children: [
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: 16,
                            height: 16,
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                t7,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                        id: "clip0_505_137",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: 16,
                                            height: 16,
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Home/HomeSolution.jsx",
                                            lineNumber: 96,
                                            columnNumber: 377
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/HomeSolution.jsx",
                                        lineNumber: 96,
                                        columnNumber: 348
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Home/HomeSolution.jsx",
                                    lineNumber: 96,
                                    columnNumber: 342
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Home/HomeSolution.jsx",
                            lineNumber: 96,
                            columnNumber: 243
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 96,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "solutions bg-[#F8F8F3] pt-[30px] lg:pt-[100px] pb-[90px] lg:pb-[220px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto 2xl:px-[0] px-[20px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-[40px] lg:gap-[50px] items-start",
                    children: [
                        t0,
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "block lg:hidden w-full lg:w-[50.85%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                width: 671,
                                height: 536,
                                className: "w-full object-cover rounded-[8px]",
                                src: "https://staging.hellonotionhive.com/wordpress/infonet/wp-content/uploads/2026/01/home-solution.png",
                                alt: "Technology Tailored for Fuel & Retail Operations"
                            }, void 0, false, {
                                fileName: "[project]/components/Home/HomeSolution.jsx",
                                lineNumber: 103,
                                columnNumber: 296
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Home/HomeSolution.jsx",
                            lineNumber: 103,
                            columnNumber: 242
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/HomeSolution.jsx",
                    lineNumber: 103,
                    columnNumber: 154
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Home/HomeSolution.jsx",
                lineNumber: 103,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/HomeSolution.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    return t9;
}
_c1 = HomeSolution;
var _c, _c1;
__turbopack_context__.k.register(_c, "AccordionArrow");
__turbopack_context__.k.register(_c1, "HomeSolution");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/ServeCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
function ServeCard() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "f3d36969e54d5c993314484dc875b30aeae198a73a259944c34099a07da33657") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3d36969e54d5c993314484dc875b30aeae198a73a259944c34099a07da33657";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            width: 202,
            height: 202,
            className: "rounded-[999999px] h-[130px] w-[130px] md:h-[202px] md:w-[202px] mb-[20px] overflow-hidden relative",
            src: "https://staging.hellonotionhive.com/wordpress/infonet/wp-content/uploads/2026/01/b30381a3d7111f37f3ad553294591e662765962c.webp"
        }, void 0, false, {
            fileName: "[project]/components/Home/ServeCard.jsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mb-[10px] text-[20px] leading-[24px] md:text-[24px] md:leading-[30px] font-manrope",
            children: "Retail Gas Stations"
        }, void 0, false, {
            fileName: "[project]/components/Home/ServeCard.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-manrope font-medium text-[14px] leading-[20px]",
            children: "Optimize every pump and every transaction with InfoNet’s integrated solutions. Reduce transaction times, increase pricing accuracy, and simplify inventory tracking."
        }, void 0, false, {
            fileName: "[project]/components/Home/ServeCard.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[14px] leading-[18px]",
            children: "learn more"
        }, void 0, false, {
            fileName: "[project]/components/Home/ServeCard.jsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip0_505_137)",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.5 8H13.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Home/ServeCard.jsx",
                    lineNumber: 36,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.79999 3.5L14.3 8L9.79999 12.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square"
                }, void 0, false, {
                    fileName: "[project]/components/Home/ServeCard.jsx",
                    lineNumber: 36,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/ServeCard.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    t0,
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "",
                        className: "inline-flex font-medium box-border rounded-[4px] bg-[#EBFF3A] transition duration-150 hover:bg-white hover:border border-1 border-[#EBFF3A] hover:border-[#08090D] hover:text-[#08090D] uppercase gap-[10px] px-[15px] py-[11px] mt-[20px]",
                        children: [
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: 16,
                                height: 16,
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    t4,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "clip0_505_137",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: 16,
                                                height: 16,
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Home/ServeCard.jsx",
                                                lineNumber: 43,
                                                columnNumber: 447
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Home/ServeCard.jsx",
                                            lineNumber: 43,
                                            columnNumber: 418
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/ServeCard.jsx",
                                        lineNumber: 43,
                                        columnNumber: 412
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Home/ServeCard.jsx",
                                lineNumber: 43,
                                columnNumber: 313
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Home/ServeCard.jsx",
                        lineNumber: 43,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/ServeCard.jsx",
                lineNumber: 43,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = ServeCard;
var _c;
__turbopack_context__.k.register(_c, "ServeCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/IndustryServe.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndustryServe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$ServeCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Home/ServeCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const containerVariants = {
    hidden: {},
    visible: (isMobile)=>({
            transition: {
                staggerChildren: isMobile ? 0 : 0.15 // stagger only on desktop
            }
        })
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
function IndustryServe() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "3c0ab96a03035c8e1704ceb1c9e09e2ffe19f4990c4dbc888831b0a4f2a8807c") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3c0ab96a03035c8e1704ceb1c9e09e2ffe19f4990c4dbc888831b0a4f2a8807c";
    }
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row justify-between items-end",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-[41.7%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "top-title mb-[20px]",
                            children: "[ industries we serve ]"
                        }, void 0, false, {
                            fileName: "[project]/components/Home/IndustryServe.jsx",
                            lineNumber: 39,
                            columnNumber: 116
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-manrope mb-[20px] lg:mb-[0px] text-[28px] leading-[30px] lg:text-[40px] lg:leading-[50px]",
                            children: "Industry-Specific Solutions You Can Trust"
                        }, void 0, false, {
                            fileName: "[project]/components/Home/IndustryServe.jsx",
                            lineNumber: 39,
                            columnNumber: 182
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/IndustryServe.jsx",
                    lineNumber: 39,
                    columnNumber: 79
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-[41.7%] font-manrope font-medium text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px] opacity-80",
                    children: "Custom software and systems built to meet the unique needs of fuel, retail, and fleet businesses across North America."
                }, void 0, false, {
                    fileName: "[project]/components/Home/IndustryServe.jsx",
                    lineNumber: 39,
                    columnNumber: 347
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/IndustryServe.jsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== shouldReduce) {
        t1 = shouldReduce ? {} : containerVariants;
        $[2] = shouldReduce;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== shouldReduce) {
        t2 = shouldReduce ? {} : "visible";
        $[4] = shouldReduce;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            once: true,
            amount: 0.4
        };
        t4 = Array.from({
            length: 6
        });
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    let t5;
    if ($[8] !== shouldReduce) {
        t5 = t4.map({
            "IndustryServe[(anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: shouldReduce ? {} : itemVariants,
                    className: "w-[calc((100%-132px)/3)] flex flex-col",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$ServeCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Home/IndustryServe.jsx",
                        lineNumber: 79,
                        columnNumber: 164
                    }, this)
                }, i, false, {
                    fileName: "[project]/components/Home/IndustryServe.jsx",
                    lineNumber: 79,
                    columnNumber: 49
                }, this)
        }["IndustryServe[(anonymous)()]"]);
        $[8] = shouldReduce;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t1 || $[11] !== t2 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "hidden lg:flex flex-wrap gap-x-[44px] gap-y-[78px] mt-[40px] lg:mt-[120px]",
            variants: t1,
            initial: "hidden",
            whileInView: t2,
            custom: false,
            viewport: t3,
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/Home/IndustryServe.jsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== shouldReduce) {
        t7 = shouldReduce ? {} : containerVariants;
        $[14] = shouldReduce;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== shouldReduce) {
        t8 = shouldReduce ? {} : "visible";
        $[16] = shouldReduce;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t10;
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            once: true,
            amount: 0.05
        };
        t10 = Array.from({
            length: 6
        });
        $[18] = t10;
        $[19] = t9;
    } else {
        t10 = $[18];
        t9 = $[19];
    }
    let t11;
    if ($[20] !== shouldReduce) {
        t11 = t10.map({
            "IndustryServe[(anonymous)()]": (__0, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: shouldReduce ? {} : itemVariants,
                    className: "w-full sm:w-[calc((100%-88px)/2)] flex flex-col",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$ServeCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Home/IndustryServe.jsx",
                        lineNumber: 131,
                        columnNumber: 179
                    }, this)
                }, i_0, false, {
                    fileName: "[project]/components/Home/IndustryServe.jsx",
                    lineNumber: 131,
                    columnNumber: 53
                }, this)
        }["IndustryServe[(anonymous)()]"]);
        $[20] = shouldReduce;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t11 || $[23] !== t7 || $[24] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex lg:hidden flex-wrap gap-x-[44px] gap-y-[40px] mt-[40px]",
            variants: t7,
            initial: "hidden",
            whileInView: t8,
            custom: true,
            viewport: t9,
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/Home/IndustryServe.jsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t7;
        $[24] = t8;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== t12 || $[27] !== t6) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "2xl:pt-[24.15vh] 2xl:pb-[24vh] lg:pt-[120px] lg:pb-[120px] pt-[90px] pb-[90px] bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container lg:pr-[0] lg:pl-[0] pr-[20px] pl-[20px]",
                children: [
                    t0,
                    t6,
                    t12
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/IndustryServe.jsx",
                lineNumber: 150,
                columnNumber: 116
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/IndustryServe.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[26] = t12;
        $[27] = t6;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    return t13;
}
_s(IndustryServe, "iYpYDrIHpmH/05XmEfs20CvCoFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = IndustryServe;
var _c;
__turbopack_context__.k.register(_c, "IndustryServe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/WhyChooseCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyChooseCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function WhyChooseCard() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "5b4744b3900b3e5f0f2eb1fbad277e2f60f1461c6c8c44328122a006d58da8f8") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b4744b3900b3e5f0f2eb1fbad277e2f60f1461c6c8c44328122a006d58da8f8";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-icon",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://staging.hellonotionhive.com/wordpress/infonet/wp-content/uploads/2026/01/why-choose-icon-01.svg",
                width: 60,
                height: 60,
                className: "lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] object-contain mb-[20px] lg:mb-[30px]"
            }, void 0, false, {
                fileName: "[project]/components/Home/WhyChooseCard.jsx",
                lineNumber: 13,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/WhyChooseCard.jsx",
            lineNumber: 13,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "why-choose-card bg-white p-[20px] lg:p-[30px] h-full flex flex-col justify-between rounded-[8px]",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-[10px] text-[20px] leading-[24px] md:text-[24px] md:leading-[30px] font-manrope",
                                children: "25+ Years"
                            }, void 0, false, {
                                fileName: "[project]/components/Home/WhyChooseCard.jsx",
                                lineNumber: 20,
                                columnNumber: 160
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-manrope font-medium text-[14px] leading-[20px]",
                                children: "Delivering reliable, industry-focused solutions to fuel retailers and convenience stores across North America."
                            }, void 0, false, {
                                fileName: "[project]/components/Home/WhyChooseCard.jsx",
                                lineNumber: 20,
                                columnNumber: 273
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Home/WhyChooseCard.jsx",
                        lineNumber: 20,
                        columnNumber: 130
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/WhyChooseCard.jsx",
                lineNumber: 20,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = WhyChooseCard;
var _c;
__turbopack_context__.k.register(_c, "WhyChooseCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/WhyChoose.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyChoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$WhyChooseCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Home/WhyChooseCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const containerVariants = {
    hidden: {},
    visible: (isMobile)=>({
            transition: {
                staggerChildren: isMobile ? 0.1 : 0.15 // smaller stagger on mobile
            }
        })
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};
function WhyChoose() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "d2b891e8dd147ebe7f0624b0177582a24d6839cd34f907c81a519b4f829a1d32") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d2b891e8dd147ebe7f0624b0177582a24d6839cd34f907c81a519b4f829a1d32";
    }
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const isMobile = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth < 1024 : "TURBOPACK unreachable";
    let t0;
    if ($[1] !== shouldReduce) {
        t0 = shouldReduce ? {} : containerVariants;
        $[1] = shouldReduce;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== shouldReduce) {
        t1 = shouldReduce ? {} : "visible";
        $[3] = shouldReduce;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            once: true,
            amount: 0.1
        };
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== shouldReduce) {
        t3 = shouldReduce ? {} : itemVariants;
        $[6] = shouldReduce;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: t3,
            className: "top-title mb-[20px]",
            children: "[ Why Choose Us ]"
        }, void 0, false, {
            fileName: "[project]/components/Home/WhyChoose.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== shouldReduce) {
        t5 = shouldReduce ? {} : itemVariants;
        $[10] = shouldReduce;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: t5,
            className: "font-manrope lg:mb-[0px] text-[28px] leading-[30px] lg:text-[40px] lg:leading-[50px]",
            children: "Why Industry Leaders Trust InfoNet"
        }, void 0, false, {
            fileName: "[project]/components/Home/WhyChoose.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== shouldReduce) {
        t7 = shouldReduce ? {} : itemVariants;
        $[14] = shouldReduce;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: t7,
            className: "mt-[20px] font-manrope font-medium text-[14px] mx-auto max-w-[649px] leading-[20px] lg:text-[16px] lg:leading-[22px] opacity-80",
            children: "From seamless transactions to fully integrated management systems, InfoNet delivers technology solutions that help fuel retailers, convenience stores, and unattended sites operate efficiently."
        }, void 0, false, {
            fileName: "[project]/components/Home/WhyChoose.jsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== t0 || $[19] !== t1 || $[20] !== t4 || $[21] !== t6 || $[22] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center",
            variants: t0,
            initial: "hidden",
            whileInView: t1,
            custom: isMobile,
            viewport: t2,
            children: [
                t4,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/WhyChoose.jsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[18] = t0;
        $[19] = t1;
        $[20] = t4;
        $[21] = t6;
        $[22] = t8;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== shouldReduce) {
        t10 = shouldReduce ? {} : containerVariants;
        $[24] = shouldReduce;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== shouldReduce) {
        t11 = shouldReduce ? {} : "visible";
        $[26] = shouldReduce;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            once: true,
            amount: 0.1
        };
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = Array.from({
            length: 2
        });
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== shouldReduce) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-[8px]",
            children: t13.map({
                "WhyChoose[(anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: shouldReduce ? {} : itemVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$WhyChooseCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/Home/WhyChoose.jsx",
                            lineNumber: 162,
                            columnNumber: 111
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/Home/WhyChoose.jsx",
                        lineNumber: 162,
                        columnNumber: 47
                    }, this)
            }["WhyChoose[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/components/Home/WhyChoose.jsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[30] = shouldReduce;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== shouldReduce) {
        t15 = shouldReduce ? {} : itemVariants;
        $[32] = shouldReduce;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$WhyChooseCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/Home/WhyChoose.jsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-[8px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "h-full",
                variants: t15,
                children: t16
            }, void 0, false, {
                fileName: "[project]/components/Home/WhyChoose.jsx",
                lineNumber: 186,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/WhyChoose.jsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = Array.from({
            length: 2
        });
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== shouldReduce) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-[8px]",
            children: t18.map({
                "WhyChoose[(anonymous)()]": (__0, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: shouldReduce ? {} : itemVariants,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$WhyChooseCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/Home/WhyChoose.jsx",
                            lineNumber: 204,
                            columnNumber: 117
                        }, this)
                    }, i_0, false, {
                        fileName: "[project]/components/Home/WhyChoose.jsx",
                        lineNumber: 204,
                        columnNumber: 51
                    }, this)
            }["WhyChoose[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/components/Home/WhyChoose.jsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[38] = shouldReduce;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== t10 || $[41] !== t11 || $[42] !== t14 || $[43] !== t17 || $[44] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "grid gap-2 mt-[40px] lg:mt-[100px] \r\n                     grid-cols-1 sm:grid-cols-1 md:grid-cols-3",
            variants: t10,
            initial: "hidden",
            whileInView: t11,
            custom: isMobile,
            viewport: t12,
            children: [
                t14,
                t17,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/WhyChoose.jsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t11;
        $[42] = t14;
        $[43] = t17;
        $[44] = t19;
        $[45] = t20;
    } else {
        t20 = $[45];
    }
    let t21;
    if ($[46] !== t20 || $[47] !== t9) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "2xl:pt-[24.15vh] 2xl:pb-[24vh] lg:pt-[120px] lg:pb-[120px] pt-[90px] pb-[90px] bg-[#F8F8F3]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container lg:pr-[0] lg:pl-[0] pr-[20px] pl-[20px]",
                children: [
                    t9,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/WhyChoose.jsx",
                lineNumber: 225,
                columnNumber: 120
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/WhyChoose.jsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[46] = t20;
        $[47] = t9;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    return t21;
}
_s(WhyChoose, "iYpYDrIHpmH/05XmEfs20CvCoFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = WhyChoose;
var _c;
__turbopack_context__.k.register(_c, "WhyChoose");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/Sustainability.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sustainability
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Sustainability() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "135c5d626fc7df299e926180c211f9337cd9ff63c19b276de92d3cccddf7d6ae") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "135c5d626fc7df299e926180c211f9337cd9ff63c19b276de92d3cccddf7d6ae";
    }
    const shouldReduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.15
                }
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const containerVariants = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            y: 30
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            hidden: t1,
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                }
            }
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const itemVariants = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            backgroundImage: "url('https://staging.hellonotionhive.com/wordpress/infonet/wp-content/uploads/2026/01/2224526_Car_Refuel_3840x2160-2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== shouldReduce) {
        t4 = shouldReduce ? {} : "visible";
        $[5] = shouldReduce;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== shouldReduce) {
        t5 = shouldReduce ? {} : containerVariants;
        $[7] = shouldReduce;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            once: true,
            amount: 0.3
        };
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== shouldReduce) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: shouldReduce ? {} : itemVariants,
            className: "top-title text-white mb-[20px]",
            children: "[ Sustainability ]"
        }, void 0, false, {
            fileName: "[project]/components/Home/Sustainability.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[10] = shouldReduce;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== shouldReduce) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: shouldReduce ? {} : itemVariants,
            className: "heading-h1 text-white font-normal mb-[20px] text-[36px] leading-[40px] xl:text-[50px] xl:leading-[60px] font-manrope",
            children: "Smarter Systems for a Greener Future"
        }, void 0, false, {
            fileName: "[project]/components/Home/Sustainability.jsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[12] = shouldReduce;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== shouldReduce) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: shouldReduce ? {} : itemVariants,
            className: "text-white font-medium font-manrope mb-[20px] text-[14px] lg:text-[16px] leading-[20px] lg:leading-[22px]",
            children: "From energy-efficient fuel management to reduced paper and resource use, our solutions make sustainability simple for your business."
        }, void 0, false, {
            fileName: "[project]/components/Home/Sustainability.jsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[14] = shouldReduce;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== shouldReduce) {
        t10 = shouldReduce ? {} : itemVariants;
        $[16] = shouldReduce;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "read more"
        }, void 0, false, {
            fileName: "[project]/components/Home/Sustainability.jsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip0_456_280)",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.125 10H16.875",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Home/Sustainability.jsx",
                    lineNumber: 136,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.25 4.375L17.875 10L12.25 15.625",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square"
                }, void 0, false, {
                    fileName: "[project]/components/Home/Sustainability.jsx",
                    lineNumber: 136,
                    columnNumber: 155
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/Sustainability.jsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "",
            className: "inline-flex lg:px-[24px] px-[16px] py-[12px] text-[14px] leading-[18px] lg:text-[16px] lg:leading-[22px] lg:py-[14px] font-medium box-border rounded-[4px] bg-[#EBFF3A] transition duration-150 hover:bg-white hover:text-[#08090D] uppercase gap-[10px]",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        t12,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                id: "clip0_456_280",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: 20,
                                    height: 20,
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/components/Home/Sustainability.jsx",
                                    lineNumber: 143,
                                    columnNumber: 457
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Home/Sustainability.jsx",
                                lineNumber: 143,
                                columnNumber: 428
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Home/Sustainability.jsx",
                            lineNumber: 143,
                            columnNumber: 422
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/Sustainability.jsx",
                    lineNumber: 143,
                    columnNumber: 291
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/Sustainability.jsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t10) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: t10,
            children: t13
        }, void 0, false, {
            fileName: "[project]/components/Home/Sustainability.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] !== t14 || $[24] !== t4 || $[25] !== t5 || $[26] !== t7 || $[27] !== t8 || $[28] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "banner bg-[#F8F8F3] pt-[10px] pl-[10px] pr-[10px] h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full rounded-[8px]",
                style: t3,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container h-full mx-auto pt-[10px] lg:pt-[120px] pb-[10px] lg:pb-[120px] pl-[10px] pr-[10px] lg:pl-[0] lg:pr-[0]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex flex-row justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-[20px] lg:p-[30px] rounded-[8px] bg-[#08090D]/10 backdrop-blur-[30px] w-full xl:w-[536px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: "hidden",
                                    whileInView: t4,
                                    variants: t5,
                                    viewport: t6,
                                    children: [
                                        t7,
                                        t8,
                                        t9,
                                        t14
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Home/Sustainability.jsx",
                                    lineNumber: 158,
                                    columnNumber: 469
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Home/Sustainability.jsx",
                                lineNumber: 158,
                                columnNumber: 360
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Home/Sustainability.jsx",
                            lineNumber: 158,
                            columnNumber: 310
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Sustainability.jsx",
                        lineNumber: 158,
                        columnNumber: 266
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Home/Sustainability.jsx",
                    lineNumber: 158,
                    columnNumber: 136
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Home/Sustainability.jsx",
                lineNumber: 158,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/Sustainability.jsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t4;
        $[25] = t5;
        $[26] = t7;
        $[27] = t8;
        $[28] = t9;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    return t15;
}
_s(Sustainability, "iYpYDrIHpmH/05XmEfs20CvCoFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Sustainability;
var _c;
__turbopack_context__.k.register(_c, "Sustainability");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/TestimonialCardIcon.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialCardIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function TestimonialCardIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "5b7bbc785d4e210d36af4d2297c33cdd27bde624c8b7a82a0da814e7357f0fd3") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b7bbc785d4e210d36af4d2297c33cdd27bde624c8b7a82a0da814e7357f0fd3";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            width: 74,
            height: 20,
            rx: 10,
            fill: "#EBFF3A"
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
            lineNumber: 12,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip0_100_1180)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.2066 12.9391L15.5691 14.4391C15.8738 14.6313 16.2488 14.3453 16.1597 13.9938L15.4754 11.3031C15.4569 11.2286 15.4598 11.1503 15.4839 11.0773C15.5079 11.0043 15.5521 10.9396 15.6113 10.8906L17.7301 9.12345C18.0066 8.89376 17.866 8.4297 17.5051 8.40626L14.7394 8.22814C14.664 8.22375 14.5914 8.19747 14.5306 8.15252C14.4699 8.10756 14.4235 8.04588 14.3972 7.97501L13.366 5.37814C13.3387 5.30309 13.289 5.23826 13.2236 5.19245C13.1581 5.14664 13.0802 5.12207 13.0004 5.12207C12.9205 5.12207 12.8426 5.14664 12.7772 5.19245C12.7118 5.23826 12.662 5.30309 12.6347 5.37814L11.6035 7.97501C11.5772 8.04588 11.5308 8.10756 11.4701 8.15252C11.4093 8.19747 11.3368 8.22375 11.2613 8.22814L8.49568 8.40626C8.13474 8.4297 7.99411 8.89376 8.27068 9.12345L10.3894 10.8906C10.4486 10.9396 10.4928 11.0043 10.5169 11.0773C10.5409 11.1503 10.5439 11.2286 10.5254 11.3031L9.89255 13.7969C9.78474 14.2188 10.2347 14.5609 10.5957 14.3313L12.7941 12.9391C12.8558 12.8999 12.9273 12.8791 13.0004 12.8791C13.0734 12.8791 13.145 12.8999 13.2066 12.9391Z",
                fill: "#08090D"
            }, void 0, false, {
                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                lineNumber: 19,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip1_100_1180)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M25.2066 12.9391L27.5691 14.4391C27.8738 14.6313 28.2488 14.3453 28.1597 13.9938L27.4754 11.3031C27.4569 11.2286 27.4598 11.1503 27.4839 11.0773C27.5079 11.0043 27.5521 10.9396 27.6113 10.8906L29.7301 9.12345C30.0066 8.89376 29.866 8.4297 29.5051 8.40626L26.7394 8.22814C26.664 8.22375 26.5914 8.19747 26.5306 8.15252C26.4699 8.10756 26.4235 8.04588 26.3972 7.97501L25.366 5.37814C25.3387 5.30309 25.289 5.23826 25.2236 5.19245C25.1581 5.14664 25.0802 5.12207 25.0004 5.12207C24.9205 5.12207 24.8426 5.14664 24.7772 5.19245C24.7118 5.23826 24.662 5.30309 24.6347 5.37814L23.6035 7.97501C23.5772 8.04588 23.5308 8.10756 23.4701 8.15252C23.4093 8.19747 23.3368 8.22375 23.2613 8.22814L20.4957 8.40626C20.1347 8.4297 19.9941 8.89376 20.2707 9.12345L22.3894 10.8906C22.4486 10.9396 22.4928 11.0043 22.5169 11.0773C22.5409 11.1503 22.5439 11.2286 22.5254 11.3031L21.8926 13.7969C21.7847 14.2188 22.2347 14.5609 22.5957 14.3313L24.7941 12.9391C24.8558 12.8999 24.9273 12.8791 25.0004 12.8791C25.0734 12.8791 25.145 12.8999 25.2066 12.9391Z",
                fill: "#08090D"
            }, void 0, false, {
                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                lineNumber: 26,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip2_100_1180)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M37.2066 12.9391L39.5691 14.4391C39.8738 14.6313 40.2488 14.3453 40.1597 13.9938L39.4754 11.3031C39.4569 11.2286 39.4598 11.1503 39.4839 11.0773C39.5079 11.0043 39.5521 10.9396 39.6113 10.8906L41.7301 9.12345C42.0066 8.89376 41.866 8.4297 41.5051 8.40626L38.7394 8.22814C38.664 8.22375 38.5914 8.19747 38.5306 8.15252C38.4699 8.10756 38.4235 8.04588 38.3972 7.97501L37.366 5.37814C37.3387 5.30309 37.289 5.23826 37.2236 5.19245C37.1581 5.14664 37.0802 5.12207 37.0004 5.12207C36.9205 5.12207 36.8426 5.14664 36.7772 5.19245C36.7118 5.23826 36.662 5.30309 36.6347 5.37814L35.6035 7.97501C35.5772 8.04588 35.5308 8.10756 35.4701 8.15252C35.4093 8.19747 35.3368 8.22375 35.2613 8.22814L32.4957 8.40626C32.1347 8.4297 31.9941 8.89376 32.2707 9.12345L34.3894 10.8906C34.4486 10.9396 34.4928 11.0043 34.5169 11.0773C34.5409 11.1503 34.5439 11.2286 34.5254 11.3031L33.8926 13.7969C33.7847 14.2188 34.2347 14.5609 34.5957 14.3313L36.7941 12.9391C36.8558 12.8999 36.9273 12.8791 37.0004 12.8791C37.0734 12.8791 37.145 12.8999 37.2066 12.9391Z",
                fill: "#08090D"
            }, void 0, false, {
                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                lineNumber: 33,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip3_100_1180)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M49.2066 12.9391L51.5691 14.4391C51.8738 14.6313 52.2488 14.3453 52.1597 13.9938L51.4754 11.3031C51.4569 11.2286 51.4598 11.1503 51.4839 11.0773C51.5079 11.0043 51.5521 10.9396 51.6113 10.8906L53.7301 9.12345C54.0066 8.89376 53.866 8.4297 53.5051 8.40626L50.7394 8.22814C50.664 8.22375 50.5914 8.19747 50.5306 8.15252C50.4699 8.10756 50.4235 8.04588 50.3972 7.97501L49.366 5.37814C49.3387 5.30309 49.289 5.23826 49.2236 5.19245C49.1581 5.14664 49.0802 5.12207 49.0004 5.12207C48.9205 5.12207 48.8426 5.14664 48.7772 5.19245C48.7118 5.23826 48.662 5.30309 48.6347 5.37814L47.6035 7.97501C47.5772 8.04588 47.5308 8.10756 47.4701 8.15252C47.4093 8.19747 47.3368 8.22375 47.2613 8.22814L44.4957 8.40626C44.1347 8.4297 43.9941 8.89376 44.2707 9.12345L46.3894 10.8906C46.4486 10.9396 46.4928 11.0043 46.5169 11.0773C46.5409 11.1503 46.5439 11.2286 46.5254 11.3031L45.8926 13.7969C45.7847 14.2188 46.2347 14.5609 46.5957 14.3313L48.7941 12.9391C48.8558 12.8999 48.9273 12.8791 49.0004 12.8791C49.0734 12.8791 49.145 12.8999 49.2066 12.9391Z",
                fill: "#08090D"
            }, void 0, false, {
                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                lineNumber: 40,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip4_100_1180)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M61.2066 12.9391L63.5691 14.4391C63.8738 14.6313 64.2488 14.3453 64.1597 13.9938L63.4754 11.3031C63.4569 11.2286 63.4598 11.1503 63.4839 11.0773C63.5079 11.0043 63.5521 10.9396 63.6113 10.8906L65.7301 9.12345C66.0066 8.89376 65.866 8.4297 65.5051 8.40626L62.7394 8.22814C62.664 8.22375 62.5914 8.19747 62.5306 8.15252C62.4699 8.10756 62.4235 8.04588 62.3972 7.97501L61.366 5.37814C61.3387 5.30309 61.289 5.23826 61.2236 5.19245C61.1581 5.14664 61.0802 5.12207 61.0004 5.12207C60.9205 5.12207 60.8426 5.14664 60.7772 5.19245C60.7118 5.23826 60.662 5.30309 60.6347 5.37814L59.6035 7.97501C59.5772 8.04588 59.5308 8.10756 59.4701 8.15252C59.4093 8.19747 59.3368 8.22375 59.2613 8.22814L56.4957 8.40626C56.1347 8.4297 55.9941 8.89376 56.2707 9.12345L58.3894 10.8906C58.4486 10.9396 58.4928 11.0043 58.5169 11.0773C58.5409 11.1503 58.5439 11.2286 58.5254 11.3031L57.8926 13.7969C57.7847 14.2188 58.2347 14.5609 58.5957 14.3313L60.7941 12.9391C60.8558 12.8999 60.9273 12.8791 61.0004 12.8791C61.0734 12.8791 61.145 12.8999 61.2066 12.9391Z",
                fill: "#08090D"
            }, void 0, false, {
                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                lineNumber: 47,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
            id: "clip0_100_1180",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: 12,
                height: 12,
                fill: "white",
                transform: "translate(7 4)"
            }, void 0, false, {
                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                lineNumber: 54,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
            id: "clip1_100_1180",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: 12,
                height: 12,
                fill: "white",
                transform: "translate(19 4)"
            }, void 0, false, {
                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                lineNumber: 61,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
            id: "clip2_100_1180",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: 12,
                height: 12,
                fill: "white",
                transform: "translate(31 4)"
            }, void 0, false, {
                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                lineNumber: 68,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
            id: "clip3_100_1180",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: 12,
                height: 12,
                fill: "white",
                transform: "translate(43 4)"
            }, void 0, false, {
                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                lineNumber: 75,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: 74,
                height: 20,
                viewBox: "0 0 74 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "mb-[30px] md:mb-[40px]",
                children: [
                    t0,
                    t1,
                    t2,
                    t3,
                    t4,
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            t6,
                            t7,
                            t8,
                            t9,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                id: "clip4_100_1180",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: 12,
                                    height: 12,
                                    fill: "white",
                                    transform: "translate(55 4)"
                                }, void 0, false, {
                                    fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                                    lineNumber: 82,
                                    columnNumber: 219
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                                lineNumber: 82,
                                columnNumber: 189
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                        lineNumber: 82,
                        columnNumber: 167
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/TestimonialCardIcon.jsx",
                lineNumber: 82,
                columnNumber: 13
            }, this)
        }, void 0, false);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    return t10;
}
_c = TestimonialCardIcon;
var _c;
__turbopack_context__.k.register(_c, "TestimonialCardIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/TestimonialCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$TestimonialCardIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Home/TestimonialCardIcon.jsx [app-client] (ecmascript)");
;
;
;
;
function ServiceCard() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "1128ee8c00b439a2f79c8f34a89679f00e6537d0ed4d2fea756a24a0a050ea6f") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1128ee8c00b439a2f79c8f34a89679f00e6537d0ed4d2fea756a24a0a050ea6f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "https://staging.hellonotionhive.com/wordpress/infonet/wp-content/uploads/2026/01/testimoinal-image-01.webp",
            width: 536,
            height: 536,
            className: "object-cover md:h-[536px] lg:w-[40.5%] h-auto w-full rounded-[8px]"
        }, void 0, false, {
            fileName: "[project]/components/Home/TestimonialCard.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-[8px] mr-[0] md:mr-[-8px] w-full ",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-[8px] w-[100%] lg:w-[59.5%] bg-white flex items-center md:p-[70px] p-[10px] pb-[90px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "https://staging.hellonotionhive.com/wordpress/infonet/wp-content/uploads/2026/01/anfet-logo.svg",
                                    width: 190,
                                    height: 24,
                                    className: "absolute top-[30px] right-[30px] rounded-[8px] hidden md:flex"
                                }, void 0, false, {
                                    fileName: "[project]/components/Home/TestimonialCard.jsx",
                                    lineNumber: 21,
                                    columnNumber: 222
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$TestimonialCardIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/Home/TestimonialCard.jsx",
                                    lineNumber: 21,
                                    columnNumber: 431
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-manrope text-[16px] md:text-[20px] md:leading-[28px] leading-[22px] max-w-[537px] mb-[30px] md:mb-[40px] font-regular",
                                    children: "“The integration between our POS and fuel systems is seamless now. InfoNet helped us eliminate downtime and keep our customers happy even during high-traffic hours.”"
                                }, void 0, false, {
                                    fileName: "[project]/components/Home/TestimonialCard.jsx",
                                    lineNumber: 21,
                                    columnNumber: 454
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "md:leading-[22px] leading-[18px] text-[14px] md:text-[16px] mb-[8px] uppercase font-bold",
                                    children: "Lisa R."
                                }, void 0, false, {
                                    fileName: "[project]/components/Home/TestimonialCard.jsx",
                                    lineNumber: 21,
                                    columnNumber: 761
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: "font-normal text-[12px] leading-[12px] uppercase",
                                    children: "Operations Manager"
                                }, void 0, false, {
                                    fileName: "[project]/components/Home/TestimonialCard.jsx",
                                    lineNumber: 21,
                                    columnNumber: 878
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Home/TestimonialCard.jsx",
                            lineNumber: 21,
                            columnNumber: 217
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Home/TestimonialCard.jsx",
                        lineNumber: 21,
                        columnNumber: 97
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/TestimonialCard.jsx",
                lineNumber: 21,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = ServiceCard;
var _c;
__turbopack_context__.k.register(_c, "ServiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "11022b31252a648335b5b5f628635d73ef92055d8072fd77ee0f5a9b339b01ec") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "11022b31252a648335b5b5f628635d73ef92055d8072fd77ee0f5a9b339b01ec";
    }
    let className;
    let props;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ className, variant: t1, size: t2, asChild: t3, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    const variant = t1 === undefined ? "default" : t1;
    const size = t2 === undefined ? "default" : t2;
    const asChild = t3 === undefined ? false : t3;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    let t4;
    if ($[7] !== className || $[8] !== size || $[9] !== variant) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        }));
        $[7] = className;
        $[8] = size;
        $[9] = variant;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== Comp || $[12] !== props || $[13] !== size || $[14] !== t4 || $[15] !== variant) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            "data-variant": variant,
            "data-size": size,
            className: t4,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/button.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[11] = Comp;
        $[12] = props;
        $[13] = size;
        $[14] = t4;
        $[15] = variant;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/carousel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Carousel",
    ()=>Carousel,
    "CarouselContent",
    ()=>CarouselContent,
    "CarouselItem",
    ()=>CarouselItem,
    "CarouselNext",
    ()=>CarouselNext,
    "CarouselPrevious",
    ()=>CarouselPrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const CarouselContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useCarousel() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b";
    }
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
_s(useCarousel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function Carousel(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b";
    }
    let children;
    let className;
    let opts;
    let plugins;
    let props;
    let setApi;
    let t1;
    if ($[1] !== t0) {
        ({ orientation: t1, opts, setApi, plugins, className, children, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = opts;
        $[5] = plugins;
        $[6] = props;
        $[7] = setApi;
        $[8] = t1;
    } else {
        children = $[2];
        className = $[3];
        opts = $[4];
        plugins = $[5];
        props = $[6];
        setApi = $[7];
        t1 = $[8];
    }
    const orientation = t1 === undefined ? "horizontal" : t1;
    const t2 = orientation === "horizontal" ? "x" : "y";
    let t3;
    if ($[9] !== opts || $[10] !== t2) {
        t3 = {
            ...opts,
            axis: t2
        };
        $[9] = opts;
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const [carouselRef, api] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t3, plugins);
    const [canScrollPrev, setCanScrollPrev] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [canScrollNext, setCanScrollNext] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    let t4;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Carousel[onSelect]": (api_0)=>{
                if (!api_0) {
                    return;
                }
                setCanScrollPrev(api_0.canScrollPrev());
                setCanScrollNext(api_0.canScrollNext());
            }
        })["Carousel[onSelect]"];
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const onSelect = t4;
    let t5;
    if ($[13] !== api) {
        t5 = ({
            "Carousel[scrollPrev]": ()=>{
                api?.scrollPrev();
            }
        })["Carousel[scrollPrev]"];
        $[13] = api;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const scrollPrev = t5;
    let t6;
    if ($[15] !== api) {
        t6 = ({
            "Carousel[scrollNext]": ()=>{
                api?.scrollNext();
            }
        })["Carousel[scrollNext]"];
        $[15] = api;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    const scrollNext = t6;
    let t7;
    if ($[17] !== scrollNext || $[18] !== scrollPrev) {
        t7 = ({
            "Carousel[handleKeyDown]": (event)=>{
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    scrollPrev();
                } else {
                    if (event.key === "ArrowRight") {
                        event.preventDefault();
                        scrollNext();
                    }
                }
            }
        })["Carousel[handleKeyDown]"];
        $[17] = scrollNext;
        $[18] = scrollPrev;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    const handleKeyDown = t7;
    let t8;
    let t9;
    if ($[20] !== api || $[21] !== setApi) {
        t8 = ({
            "Carousel[useEffect()]": ()=>{
                if (!api || !setApi) {
                    return;
                }
                setApi(api);
            }
        })["Carousel[useEffect()]"];
        t9 = [
            api,
            setApi
        ];
        $[20] = api;
        $[21] = setApi;
        $[22] = t8;
        $[23] = t9;
    } else {
        t8 = $[22];
        t9 = $[23];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t8, t9);
    let t10;
    let t11;
    if ($[24] !== api) {
        t10 = ({
            "Carousel[useEffect()]": ()=>{
                if (!api) {
                    return;
                }
                onSelect(api);
                api.on("reInit", onSelect);
                api.on("select", onSelect);
                return ()=>{
                    api?.off("select", onSelect);
                };
            }
        })["Carousel[useEffect()]"];
        t11 = [
            api,
            onSelect
        ];
        $[24] = api;
        $[25] = t10;
        $[26] = t11;
    } else {
        t10 = $[25];
        t11 = $[26];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t10, t11);
    const t12 = orientation || (opts?.axis === "y" ? "vertical" : "horizontal");
    let t13;
    if ($[27] !== api || $[28] !== canScrollNext || $[29] !== canScrollPrev || $[30] !== carouselRef || $[31] !== opts || $[32] !== scrollNext || $[33] !== scrollPrev || $[34] !== t12) {
        t13 = {
            carouselRef,
            api,
            opts,
            orientation: t12,
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        };
        $[27] = api;
        $[28] = canScrollNext;
        $[29] = canScrollPrev;
        $[30] = carouselRef;
        $[31] = opts;
        $[32] = scrollNext;
        $[33] = scrollPrev;
        $[34] = t12;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== className) {
        t14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className);
        $[36] = className;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] !== children || $[39] !== handleKeyDown || $[40] !== props || $[41] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onKeyDownCapture: handleKeyDown,
            className: t14,
            role: "region",
            "aria-roledescription": "carousel",
            "data-slot": "carousel",
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[38] = children;
        $[39] = handleKeyDown;
        $[40] = props;
        $[41] = t14;
        $[42] = t15;
    } else {
        t15 = $[42];
    }
    let t16;
    if ($[43] !== t13 || $[44] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContext.Provider, {
            value: t13,
            children: t15
        }, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[43] = t13;
        $[44] = t15;
        $[45] = t16;
    } else {
        t16 = $[45];
    }
    return t16;
}
_s1(Carousel, "nmXEUAU4TrcVcToApkGXsEW1X78=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Carousel;
function CarouselContent(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    const { carouselRef, orientation } = useCarousel();
    const t1 = orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col";
    let t2;
    if ($[4] !== className || $[5] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", t1, className);
        $[4] = className;
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 286,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== carouselRef || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: carouselRef,
            className: "overflow-hidden",
            "data-slot": "carousel-content",
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 295,
            columnNumber: 10
        }, this);
        $[10] = carouselRef;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    return t4;
}
_s2(CarouselContent, "jQxxZhDwSf0lh4R1fnTcF4q8bX8=", false, function() {
    return [
        useCarousel
    ];
});
_c1 = CarouselContent;
function CarouselItem(t0) {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b";
    }
    let className;
    let props;
    if ($[1] !== t0) {
        ({ className, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
    } else {
        className = $[2];
        props = $[3];
    }
    const { orientation } = useCarousel();
    const t1 = orientation === "horizontal" ? "pl-4" : "pt-4";
    let t2;
    if ($[4] !== className || $[5] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 shrink-0 grow-0 basis-full", t1, className);
        $[4] = className;
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== props || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "group",
            "aria-roledescription": "slide",
            "data-slot": "carousel-item",
            className: t2,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 341,
            columnNumber: 10
        }, this);
        $[7] = props;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
}
_s3(CarouselItem, "A/D6JTqpVAsy3kjHbQMMYEL2tww=", false, function() {
    return [
        useCarousel
    ];
});
_c2 = CarouselItem;
function CarouselPrevious(t0) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b";
    }
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, variant: t1, size: t2, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const variant = t1 === undefined ? "outline" : t1;
    const size = t2 === undefined ? "icon" : t2;
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    const t3 = orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90";
    let t4;
    if ($[6] !== className || $[7] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute size-8 rounded-full", t3, className);
        $[6] = className;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = !canScrollPrev;
    let t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 401,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Previous slide"
        }, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 402,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    let t8;
    if ($[11] !== props || $[12] !== scrollPrev || $[13] !== size || $[14] !== t4 || $[15] !== t5 || $[16] !== variant) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "data-slot": "carousel-previous",
            variant: variant,
            size: size,
            className: t4,
            disabled: t5,
            onClick: scrollPrev,
            ...props,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 411,
            columnNumber: 10
        }, this);
        $[11] = props;
        $[12] = scrollPrev;
        $[13] = size;
        $[14] = t4;
        $[15] = t5;
        $[16] = variant;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_s4(CarouselPrevious, "8LUD2tfVphx6WnRQtMD+FytHUvo=", false, function() {
    return [
        useCarousel
    ];
});
_c3 = CarouselPrevious;
function CarouselNext(t0) {
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b26c01eaf8a2f864ba8c310943221866c944202747fb4428dc47e67135c2cf3b";
    }
    let className;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ className, variant: t1, size: t2, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const variant = t1 === undefined ? "outline" : t1;
    const size = t2 === undefined ? "icon" : t2;
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    const t3 = orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90";
    let t4;
    if ($[6] !== className || $[7] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute size-8 rounded-full", t3, className);
        $[6] = className;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const t5 = !canScrollNext;
    let t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 475,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Next slide"
        }, void 0, false, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 476,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    let t8;
    if ($[11] !== props || $[12] !== scrollNext || $[13] !== size || $[14] !== t4 || $[15] !== t5 || $[16] !== variant) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            "data-slot": "carousel-next",
            variant: variant,
            size: size,
            className: t4,
            disabled: t5,
            onClick: scrollNext,
            ...props,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/carousel.jsx",
            lineNumber: 485,
            columnNumber: 10
        }, this);
        $[11] = props;
        $[12] = scrollNext;
        $[13] = size;
        $[14] = t4;
        $[15] = t5;
        $[16] = variant;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_s5(CarouselNext, "i0pmJBg/CJlkCyUiwU+/jSGwijk=", false, function() {
    return [
        useCarousel
    ];
});
_c4 = CarouselNext;
;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Carousel");
__turbopack_context__.k.register(_c1, "CarouselContent");
__turbopack_context__.k.register(_c2, "CarouselItem");
__turbopack_context__.k.register(_c3, "CarouselPrevious");
__turbopack_context__.k.register(_c4, "CarouselNext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Global/CtaIcon.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CtaIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function CtaIcon() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "a488ff2baf9d7939bd55721c76765b246743f3403ec33c21fc74fcdb88ec7c09") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a488ff2baf9d7939bd55721c76765b246743f3403ec33c21fc74fcdb88ec7c09";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip0_524_23)",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.5 8H13.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Global/CtaIcon.jsx",
                    lineNumber: 12,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.8 3.5L14.3 8L9.8 12.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square"
                }, void 0, false, {
                    fileName: "[project]/components/Global/CtaIcon.jsx",
                    lineNumber: 12,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Global/CtaIcon.jsx",
            lineNumber: 12,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "clip0_524_23",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: 16,
                                height: 16,
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/components/Global/CtaIcon.jsx",
                                lineNumber: 19,
                                columnNumber: 145
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Global/CtaIcon.jsx",
                            lineNumber: 19,
                            columnNumber: 117
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Global/CtaIcon.jsx",
                        lineNumber: 19,
                        columnNumber: 111
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Global/CtaIcon.jsx",
                lineNumber: 19,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = CtaIcon;
var _c;
__turbopack_context__.k.register(_c, "CtaIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Global/ButtonPrev.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ButtonPrev
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function ButtonPrev() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "06bc90b2510956d9d7915ef210dbf9da3423a1382b7a056adfd364c6a6a227e0") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "06bc90b2510956d9d7915ef210dbf9da3423a1382b7a056adfd364c6a6a227e0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13.5 8H2.5",
                        stroke: "#08090D",
                        strokeWidth: "1.5",
                        strokeLinecap: "square"
                    }, void 0, false, {
                        fileName: "[project]/components/Global/ButtonPrev.jsx",
                        lineNumber: 12,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6.2 3.5L1.7 8L6.2 12.5",
                        stroke: "#08090D",
                        strokeWidth: "1.5",
                        strokeLinecap: "square"
                    }, void 0, false, {
                        fileName: "[project]/components/Global/ButtonPrev.jsx",
                        lineNumber: 12,
                        columnNumber: 189
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Global/ButtonPrev.jsx",
                lineNumber: 12,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = ButtonPrev;
var _c;
__turbopack_context__.k.register(_c, "ButtonPrev");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Global/ButtonNext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ButtonNext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function ButtonNext() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "137be932e074a7db352745604eca13731bd3d411a238f9281be57dfb07a5b23c") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "137be932e074a7db352745604eca13731bd3d411a238f9281be57dfb07a5b23c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M2.5 8H13.5",
                        stroke: "#08090D",
                        strokeWidth: "1.5",
                        strokeLinecap: "square"
                    }, void 0, false, {
                        fileName: "[project]/components/Global/ButtonNext.jsx",
                        lineNumber: 12,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9.8 3.5L14.3 8L9.8 12.5",
                        stroke: "#08090D",
                        strokeWidth: "1.5",
                        strokeLinecap: "square"
                    }, void 0, false, {
                        fileName: "[project]/components/Global/ButtonNext.jsx",
                        lineNumber: 12,
                        columnNumber: 189
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Global/ButtonNext.jsx",
                lineNumber: 12,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = ButtonNext;
var _c;
__turbopack_context__.k.register(_c, "ButtonNext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/Testimonial.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$TestimonialCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Home/TestimonialCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/carousel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Global$2f$CtaIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Global/CtaIcon.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Global$2f$ButtonPrev$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Global/ButtonPrev.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Global$2f$ButtonNext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Global/ButtonNext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Testimonial() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "28165f67c0f88616cbc69e1e77414670a1f8f5b6ab23e4752d3997820595acb6") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "28165f67c0f88616cbc69e1e77414670a1f8f5b6ab23e4752d3997820595acb6";
    }
    const [api, setApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 40
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            hidden: t0,
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                }
            }
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const itemVariants = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full lg:w-[41.7%]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "top-title mb-[20px]",
                    children: "[ Testimonials ]"
                }, void 0, false, {
                    fileName: "[project]/components/Home/Testimonial.jsx",
                    lineNumber: 52,
                    columnNumber: 47
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-manrope text-[28px] leading-[30px] lg:text-[40px] lg:leading-[50px]",
                    children: "Success Stories of Industry Leaders"
                }, void 0, false, {
                    fileName: "[project]/components/Home/Testimonial.jsx",
                    lineNumber: 52,
                    columnNumber: 106
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/Testimonial.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row justify-between items-end",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-end lg:w-[41.7%]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "",
                        className: "hidden lg:inline-flex lg:px-[16px] px-[16px] py-[12px] lg:py-[12px] text-[14px] leading-[18px] font-medium box-border rounded-[4px] bg-[#EBFF3A] transition duration-150 hover:bg-white hover:text-[#08090D] uppercase gap-[10px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "get in touch"
                            }, void 0, false, {
                                fileName: "[project]/components/Home/Testimonial.jsx",
                                lineNumber: 59,
                                columnNumber: 389
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Global$2f$CtaIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Home/Testimonial.jsx",
                                lineNumber: 59,
                                columnNumber: 414
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Home/Testimonial.jsx",
                        lineNumber: 59,
                        columnNumber: 137
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Home/Testimonial.jsx",
                    lineNumber: 59,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/Testimonial.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {};
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
            opts: t4,
            setApi: setApi,
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselContent"], {
                className: "w-full flex gap-4",
                children: [
                    ...Array(5)
                ].map({
                    "Testimonial[(anonymous)()]": (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
                            className: "w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.5
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$TestimonialCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/Home/Testimonial.jsx",
                                    lineNumber: 77,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Home/Testimonial.jsx",
                                lineNumber: 74,
                                columnNumber: 100
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/Home/Testimonial.jsx",
                            lineNumber: 74,
                            columnNumber: 55
                        }, this)
                }["Testimonial[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/components/Home/Testimonial.jsx",
                lineNumber: 73,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/Testimonial.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== api) {
        t6 = ({
            "Testimonial[<button>.onClick]": ()=>api?.scrollPrev()
        })["Testimonial[<button>.onClick]"];
        $[7] = api;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Global$2f$ButtonPrev$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/Home/Testimonial.jsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t6,
            className: "absolute bottom-[20px] md:bottom-[30px] left-[inherit] right-[72px] md:right-[97px] z-10 p-2 bg-[#F8F8F3] hover:bg-[#EBFF3A] cursor-pointer rounded-[4px] w-[48px] h-[40px] flex justify-center items-center",
            children: t7
        }, void 0, false, {
            fileName: "[project]/components/Home/Testimonial.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== api) {
        t9 = ({
            "Testimonial[<button>.onClick]": ()=>api?.scrollNext()
        })["Testimonial[<button>.onClick]"];
        $[12] = api;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Global$2f$ButtonNext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/Home/Testimonial.jsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: "absolute bottom-[20px] md:bottom-[30px] right-[20px] md:right-[45px] z-10 p-2 bg-[#F8F8F3] hover:bg-[#EBFF3A] cursor-pointer rounded-[4px] w-[48px] h-[40px] flex justify-center items-center",
            children: t10
        }, void 0, false, {
            fileName: "[project]/components/Home/Testimonial.jsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[15] = t9;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t11 || $[18] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-[40px] lg:mt-[100px]",
            children: [
                t5,
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/Testimonial.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t8;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex lg:hidden justify-center mt-[40px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "",
                className: "inline-flex lg:hidden lg:px-[16px] px-[16px] py-[12px] lg:py-[12px] text-[14px] leading-[18px] font-medium box-border rounded-[4px] bg-[#EBFF3A] transition duration-150 hover:bg-white hover:text-[#08090D] uppercase gap-[10px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "get in touch"
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Testimonial.jsx",
                        lineNumber: 144,
                        columnNumber: 327
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Global$2f$CtaIcon$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Home/Testimonial.jsx",
                        lineNumber: 144,
                        columnNumber: 352
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/Testimonial.jsx",
                lineNumber: 144,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/Testimonial.jsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "2xl:pt-[24.15vh] 2xl:pb-[12vh] lg:pt-[120px] lg:pb-[120px] pt-[90px] pb-[90px] bg-[#F8F8F3] testimonial-slider",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container lg:pr-[0] lg:pl-[0] pr-[20px] pl-[20px]",
                children: [
                    t3,
                    t12,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/Testimonial.jsx",
                lineNumber: 151,
                columnNumber: 139
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/Testimonial.jsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    return t14;
}
_s(Testimonial, "cl+HXtebEPJ5kanBHuI8S+OO7go=");
_c = Testimonial;
var _c;
__turbopack_context__.k.register(_c, "Testimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/BlogCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
function BlogCard() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "2cd03951a459f8e72b81f94f14d4401a48295edd75fe0a2bc0b279d3aefff5bf") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2cd03951a459f8e72b81f94f14d4401a48295edd75fe0a2bc0b279d3aefff5bf";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            width: 393,
            height: 270,
            className: "mb-[20px] overflow-hidden relative rounded-[8px]",
            src: "https://staging.hellonotionhive.com/wordpress/infonet/wp-content/uploads/2026/01/image-15.png"
        }, void 0, false, {
            fileName: "[project]/components/Home/BlogCard.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-[10px] mb-[20px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[12px] leading-[12px] uppercase",
                    children: "News & Blog"
                }, void 0, false, {
                    fileName: "[project]/components/Home/BlogCard.jsx",
                    lineNumber: 22,
                    columnNumber: 66
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex bg-[#EBFF3A] w-[4px] h-[4px]"
                }, void 0, false, {
                    fileName: "[project]/components/Home/BlogCard.jsx",
                    lineNumber: 22,
                    columnNumber: 143
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[12px] leading-[12px] uppercase",
                    children: "October 27, 2024"
                }, void 0, false, {
                    fileName: "[project]/components/Home/BlogCard.jsx",
                    lineNumber: 22,
                    columnNumber: 197
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/BlogCard.jsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mb-[20px] text-[16px] leading-[22px] md:text-[20px] md:leading-[28px] font-manrope",
            children: "How Mid‑Market Fuel Retailers Can Lean into Tech to Scale Faster"
        }, void 0, false, {
            fileName: "[project]/components/Home/BlogCard.jsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[14px] leading-[18px]",
            children: "read more"
        }, void 0, false, {
            fileName: "[project]/components/Home/BlogCard.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip0_505_137)",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.5 8H13.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Home/BlogCard.jsx",
                    lineNumber: 39,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.79999 3.5L14.3 8L9.79999 12.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square"
                }, void 0, false, {
                    fileName: "[project]/components/Home/BlogCard.jsx",
                    lineNumber: 39,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/BlogCard.jsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-white p-[16px] rounded-[12px]",
                children: [
                    t0,
                    t1,
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "",
                        className: "flex font-medium justify-between box-border rounded-[4px] bg-[#F8F8F3] transition duration-150 hover:bg-[#EBFF3A] uppercase gap-[10px] px-[16px] py-[12px]",
                        children: [
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: 16,
                                height: 16,
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    t4,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "clip0_505_137",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                width: 16,
                                                height: 16,
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Home/BlogCard.jsx",
                                                lineNumber: 46,
                                                columnNumber: 400
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Home/BlogCard.jsx",
                                            lineNumber: 46,
                                            columnNumber: 371
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/BlogCard.jsx",
                                        lineNumber: 46,
                                        columnNumber: 365
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Home/BlogCard.jsx",
                                lineNumber: 46,
                                columnNumber: 266
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Home/BlogCard.jsx",
                        lineNumber: 46,
                        columnNumber: 81
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/BlogCard.jsx",
                lineNumber: 46,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = BlogCard;
var _c;
__turbopack_context__.k.register(_c, "BlogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/Blog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Blog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$BlogCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Home/BlogCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/carousel.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Blog() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "ef2fe85926c0107e25f20dbd765bde93e67d13823bf0a9ddf1566c8f164358f4") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ef2fe85926c0107e25f20dbd765bde93e67d13823bf0a9ddf1566c8f164358f4";
    }
    const [api, setApi] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [selectedIndex, setSelectedIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = Array.from({
            length: 3
        });
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const slides = t0;
    let t1;
    if ($[2] !== api) {
        t1 = ({
            "Blog[onSelect]": ()=>{
                if (!api) {
                    return;
                }
                setSelectedIndex(api.selectedScrollSnap());
            }
        })["Blog[onSelect]"];
        $[2] = api;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const onSelect = t1;
    let t2;
    if ($[4] !== api || $[5] !== onSelect) {
        t2 = ({
            "Blog[useEffect()]": ()=>{
                if (!api) {
                    return;
                }
                api.on("select", onSelect);
                api.on("reInit", onSelect);
                onSelect();
                return ()=>{
                    api.off("select", onSelect);
                    api.off("reInit", onSelect);
                };
            }
        })["Blog[useEffect()]"];
        $[4] = api;
        $[5] = onSelect;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== api) {
        t3 = [
            api
        ];
        $[7] = api;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t2, t3);
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row justify-between items-end",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-[41.7%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "top-title mb-[20px]",
                            children: "[ Insights ]"
                        }, void 0, false, {
                            fileName: "[project]/components/Home/Blog.jsx",
                            lineNumber: 77,
                            columnNumber: 116
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-manrope mb-[20px] lg:mb-[0px] text-[28px] leading-[30px] lg:text-[40px] lg:leading-[50px]",
                            children: "Industry Resources & Informations"
                        }, void 0, false, {
                            fileName: "[project]/components/Home/Blog.jsx",
                            lineNumber: 77,
                            columnNumber: 171
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/Blog.jsx",
                    lineNumber: 77,
                    columnNumber: 79
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-[40.7%] font-manrope font-medium text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px] opacity-80",
                    children: "Stay ahead of the curve with the latest stories, research and developments shaping the fuel retail, convenience store and unattended fueling‑industry ecosystem."
                }, void 0, false, {
                    fileName: "[project]/components/Home/Blog.jsx",
                    lineNumber: 77,
                    columnNumber: 332
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[calc((100%-66px)/3)] flex flex-col",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$BlogCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Home/Blog.jsx",
                lineNumber: 84,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[calc((100%-66px)/3)] flex flex-col",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$BlogCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Home/Blog.jsx",
                lineNumber: 91,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex flex-wrap gap-x-[22px] gap-y-[22px] mt-[40px] lg:mt-[100px]",
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[calc((100%-66px)/3)] flex flex-col",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$BlogCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Home/Blog.jsx",
                        lineNumber: 98,
                        columnNumber: 165
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Home/Blog.jsx",
                    lineNumber: 98,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            align: "start",
            containScroll: "trimSnaps"
        };
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
            className: "w-full",
            setApi: setApi,
            opts: t8,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselContent"], {
                className: "flex gap-4",
                children: slides.map(_BlogSlidesMap)
            }, void 0, false, {
                fileName: "[project]/components/Home/Blog.jsx",
                lineNumber: 115,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== api || $[16] !== selectedIndex) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden w-full mt-[40px]",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mt-[20px] gap-[4px]",
                    children: slides.map({
                        "Blog[slides.map()]": (__0, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `h-[6px] rounded-[4px] transition-all duration-200 ${selectedIndex === index_0 ? "w-[16px] bg-[#08090D]" : "w-[10px] bg-[#08090D1A]"}`,
                                onClick: {
                                    "Blog[slides.map() > <button>.onClick]": ()=>api?.scrollTo(index_0)
                                }["Blog[slides.map() > <button>.onClick]"]
                            }, index_0, false, {
                                fileName: "[project]/components/Home/Blog.jsx",
                                lineNumber: 123,
                                columnNumber: 51
                            }, this)
                    }["Blog[slides.map()]"])
                }, void 0, false, {
                    fileName: "[project]/components/Home/Blog.jsx",
                    lineNumber: 122,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[15] = api;
        $[16] = selectedIndex;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[14px] leading-[18px]",
            children: "view all insights"
        }, void 0, false, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            clipPath: "url(#clip0_505_137)",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.5 8H13.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Home/Blog.jsx",
                    lineNumber: 142,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.79999 3.5L14.3 8L9.79999 12.5",
                    stroke: "#08090D",
                    strokeWidth: "1.5",
                    strokeLinecap: "square"
                }, void 0, false, {
                    fileName: "[project]/components/Home/Blog.jsx",
                    lineNumber: 142,
                    columnNumber: 150
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mt-[60px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "",
                className: "flex font-medium justify-between box-border rounded-[4px] bg-[#F8F8F3] border-[1px] hover:border-[#EBFF3A] transition duration-150 hover:bg-[#EBFF3A] uppercase gap-[10px] px-[16px] py-[12px]",
                children: [
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: 16,
                        height: 16,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            t12,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                    id: "clip0_505_137",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: 16,
                                        height: 16,
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Home/Blog.jsx",
                                        lineNumber: 149,
                                        columnNumber: 415
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Home/Blog.jsx",
                                    lineNumber: 149,
                                    columnNumber: 386
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Home/Blog.jsx",
                                lineNumber: 149,
                                columnNumber: 380
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Home/Blog.jsx",
                        lineNumber: 149,
                        columnNumber: 280
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/Blog.jsx",
                lineNumber: 149,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t10) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#F8F8F3] pt-[0] lg:pt-[12vh] pb-[130px] lg:pb-[28.8vh]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container lg:pr-[0] lg:pl-[0] pr-[20px] pl-[20px]",
                children: [
                    t4,
                    t7,
                    t10,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/Blog.jsx",
                lineNumber: 156,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    return t14;
}
_s(Blog, "KnCEWEIalStYMET8Ko8Lc1YRj1I=");
_c = Blog;
function _BlogSlidesMap(_, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$carousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
        className: "flex-[0_0_100%]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$BlogCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/components/Home/Blog.jsx",
            lineNumber: 165,
            columnNumber: 64
        }, this)
    }, index, false, {
        fileName: "[project]/components/Home/Blog.jsx",
        lineNumber: 165,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Blog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_2c50406d._.js.map