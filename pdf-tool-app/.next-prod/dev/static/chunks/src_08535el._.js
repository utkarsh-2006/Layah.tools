(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/shell/CommandBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandBar",
    ()=>CommandBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/state/app-state.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CommandBar() {
    _s();
    const { commandInput, setCommandInput } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden flex flex-col border border-white/20 transition-all focus-within:shadow-2xl focus-within:ring-2 focus-within:ring-blue-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-slate-50/50 border-b border-slate-100 text-left",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-500 font-medium text-sm",
                    children: "Tell us what you want to do with your files..."
                }, void 0, false, {
                    fileName: "[project]/src/components/shell/CommandBar.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shell/CommandBar.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "w-full min-h-[120px] p-6 text-lg text-slate-800 bg-transparent resize-none focus:outline-none placeholder:text-slate-300",
                placeholder: "e.g. Remove pages 51, 53 and 61, add page numbers, and merge these PDFs.",
                value: commandInput,
                onChange: (e)=>setCommandInput(e.target.value),
                disabled: true
            }, void 0, false, {
                fileName: "[project]/src/components/shell/CommandBar.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex justify-between items-center bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors opacity-60 cursor-not-allowed",
                        "aria-label": "Upload files",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 4v16m8-8H4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/CommandBar.tsx",
                                lineNumber: 26,
                                columnNumber: 90
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/shell/CommandBar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/CommandBar.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "w-10 h-10 rounded-full bg-layah-primary text-white flex items-center justify-center hover:bg-blue-600 transition-colors opacity-60 cursor-not-allowed shadow-md",
                        "aria-label": "Submit workflow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M14 5l7 7m0 0l-7 7m7-7H3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/CommandBar.tsx",
                                lineNumber: 33,
                                columnNumber: 90
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/shell/CommandBar.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/CommandBar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/CommandBar.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/CommandBar.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(CommandBar, "rDJQOMvczjxkhb0ztWFavyFyzTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = CommandBar;
var _c;
__turbopack_context__.k.register(_c, "CommandBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shell/EntryState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntryState",
    ()=>EntryState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$CommandBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/CommandBar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PHRASES = [
    "work with PDFs",
    "edit your documents",
    "delete unwanted pages",
    "change text",
    "merge files",
    "split documents",
    "add page numbers",
    "work with Word",
    "work with Excel",
    "convert your files"
];
function TypewriterEffect() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [subIndex, setSubIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reverse, setReverse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypewriterEffect.useEffect": ()=>{
            if (subIndex === PHRASES[index].length + 1 && !reverse) {
                const timeout = setTimeout({
                    "TypewriterEffect.useEffect.timeout": ()=>setReverse(true)
                }["TypewriterEffect.useEffect.timeout"], 2000);
                return ({
                    "TypewriterEffect.useEffect": ()=>clearTimeout(timeout)
                })["TypewriterEffect.useEffect"];
            }
            if (subIndex === 0 && reverse) {
                setReverse(false);
                setIndex({
                    "TypewriterEffect.useEffect": (prev)=>(prev + 1) % PHRASES.length
                }["TypewriterEffect.useEffect"]);
                return;
            }
            const timeout = setTimeout({
                "TypewriterEffect.useEffect.timeout": ()=>{
                    setSubIndex({
                        "TypewriterEffect.useEffect.timeout": (prev)=>prev + (reverse ? -1 : 1)
                    }["TypewriterEffect.useEffect.timeout"]);
                }
            }["TypewriterEffect.useEffect.timeout"], reverse ? 30 : 60);
            return ({
                "TypewriterEffect.useEffect": ()=>clearTimeout(timeout)
            })["TypewriterEffect.useEffect"];
        }
    }["TypewriterEffect.useEffect"], [
        subIndex,
        index,
        reverse
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xl md:text-2xl text-blue-200/90 font-sans font-light tracking-wide flex items-center justify-center",
        children: [
            PHRASES[index].substring(0, subIndex),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-[1px] h-[1em] bg-blue-200/90 ml-[2px] animate-[pulse_1s_ease-in-out_infinite]"
            }, void 0, false, {
                fileName: "[project]/src/components/shell/EntryState.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/EntryState.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(TypewriterEffect, "dsUA98l8YvNapQLcLZvVH96A+I0=");
_c = TypewriterEffect;
function EntryState() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full min-h-[90vh] flex flex-col",
        style: {
            backgroundImage: `linear-gradient(to bottom, #2400c6, #1f36d3, #2a54dd, #416fe3, #5d88e6, #7a99e9, #94aaeb, #acbced, #c5cbf1, #dadcf5, #eeedfa, #ffffff)`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-bold text-xl tracking-tight",
                        children: "layah.tools"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/EntryState.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-8 items-center text-sm font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#workspace",
                                className: "opacity-90 hover:opacity-100 transition-opacity",
                                children: "PDF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/EntryState.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "opacity-60 cursor-not-allowed hidden md:inline",
                                children: "Word"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/EntryState.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "opacity-60 cursor-not-allowed hidden md:inline",
                                children: "Excel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/EntryState.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "opacity-60 cursor-not-allowed hidden md:inline",
                                children: "More"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/EntryState.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "opacity-90 hover:opacity-100 transition-opacity",
                                children: "Sign In"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/EntryState.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shell/EntryState.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/EntryState.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center justify-center px-6 pb-24 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-tight text-white mb-6 max-w-4xl tracking-tight",
                        children: "Get more done with your files."
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/EntryState.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 mb-16 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypewriterEffect, {}, void 0, false, {
                            fileName: "[project]/src/components/shell/EntryState.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/EntryState.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$CommandBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandBar"], {}, void 0, false, {
                        fileName: "[project]/src/components/shell/EntryState.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/EntryState.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/EntryState.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c1 = EntryState;
var _c, _c1;
__turbopack_context__.k.register(_c, "TypewriterEffect");
__turbopack_context__.k.register(_c1, "EntryState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shell/FormatSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormatSwitcher",
    ()=>FormatSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/state/app-state.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const FORMATS = [
    {
        id: "pdf",
        label: "PDF"
    },
    {
        id: "word",
        label: "Word"
    },
    {
        id: "excel",
        label: "Excel"
    },
    {
        id: "ppt",
        label: "PowerPoint"
    },
    {
        id: "images",
        label: "Images"
    }
];
function FormatSwitcher() {
    _s();
    const { activeFormat, setActiveFormat, setWorkspaceActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-16 border-b border-slate-200 pb-8",
        children: FORMATS.map((format)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    if (format.id === "pdf") {
                        setActiveFormat(format.id);
                    }
                },
                className: `text-lg md:text-xl font-medium transition-all duration-300 ${activeFormat === format.id ? "text-layah-primary border-b-2 border-layah-primary pb-2" : "text-slate-400 hover:text-slate-600 cursor-not-allowed"}`,
                children: format.label
            }, format.id || "null", false, {
                fileName: "[project]/src/components/shell/FormatSwitcher.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/shell/FormatSwitcher.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(FormatSwitcher, "4c29txN9JJQ2kZxTftgi5o0TV28=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = FormatSwitcher;
var _c;
__turbopack_context__.k.register(_c, "FormatSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pdf-studio.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "pdf-studio-module__laR_xG__badge",
  "button": "pdf-studio-module__laR_xG__button",
  "buttonDanger": "pdf-studio-module__laR_xG__buttonDanger",
  "buttonGhost": "pdf-studio-module__laR_xG__buttonGhost",
  "card": "pdf-studio-module__laR_xG__card",
  "dropzone": "pdf-studio-module__laR_xG__dropzone",
  "eyebrow": "pdf-studio-module__laR_xG__eyebrow",
  "fieldGrid": "pdf-studio-module__laR_xG__fieldGrid",
  "fieldLabel": "pdf-studio-module__laR_xG__fieldLabel",
  "fileInput": "pdf-studio-module__laR_xG__fileInput",
  "grid": "pdf-studio-module__laR_xG__grid",
  "hero": "pdf-studio-module__laR_xG__hero",
  "heroCopy": "pdf-studio-module__laR_xG__heroCopy",
  "heroGrid": "pdf-studio-module__laR_xG__heroGrid",
  "heroStats": "pdf-studio-module__laR_xG__heroStats",
  "inlineActions": "pdf-studio-module__laR_xG__inlineActions",
  "metaHint": "pdf-studio-module__laR_xG__metaHint",
  "metaItem": "pdf-studio-module__laR_xG__metaItem",
  "metaList": "pdf-studio-module__laR_xG__metaList",
  "metaName": "pdf-studio-module__laR_xG__metaName",
  "panel": "pdf-studio-module__laR_xG__panel",
  "panelTop": "pdf-studio-module__laR_xG__panelTop",
  "quickList": "pdf-studio-module__laR_xG__quickList",
  "rail": "pdf-studio-module__laR_xG__rail",
  "sectionLead": "pdf-studio-module__laR_xG__sectionLead",
  "sectionTitle": "pdf-studio-module__laR_xG__sectionTitle",
  "shell": "pdf-studio-module__laR_xG__shell",
  "statCard": "pdf-studio-module__laR_xG__statCard",
  "statLabel": "pdf-studio-module__laR_xG__statLabel",
  "statValue": "pdf-studio-module__laR_xG__statValue",
  "status": "pdf-studio-module__laR_xG__status",
  "statusError": "pdf-studio-module__laR_xG__statusError",
  "statusSuccess": "pdf-studio-module__laR_xG__statusSuccess",
  "toolButton": "pdf-studio-module__laR_xG__toolButton",
  "toolButtonActive": "pdf-studio-module__laR_xG__toolButtonActive",
  "toolList": "pdf-studio-module__laR_xG__toolList",
  "workspace": "pdf-studio-module__laR_xG__workspace",
});
}),
"[project]/src/lib/pdf/download.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadBytes",
    ()=>downloadBytes
]);
function downloadBytes(bytes, filename) {
    const blob = new Blob([
        bytes
    ], {
        type: "application/pdf"
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/pdf/ranges.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePageRanges",
    ()=>parsePageRanges,
    "parseSplitRanges",
    ()=>parseSplitRanges
]);
const PAGE_RANGE_SEGMENT = /^(\d+)(?:-(\d+))?$/;
function parsePageRanges(input, totalPages) {
    if (!input.trim()) {
        throw new Error("Enter at least one page or range.");
    }
    const pages = new Set();
    const segments = input.split(",").map((segment)=>segment.trim()).filter(Boolean);
    for (const segment of segments){
        const match = PAGE_RANGE_SEGMENT.exec(segment);
        if (!match) {
            throw new Error(`Invalid page segment "${segment}". Use formats like 1, 3-5.`);
        }
        const start = Number(match[1]);
        const end = match[2] ? Number(match[2]) : start;
        if (start < 1 || end < 1 || start > totalPages || end > totalPages) {
            throw new Error(`Pages must stay between 1 and ${totalPages}.`);
        }
        const from = Math.min(start, end);
        const to = Math.max(start, end);
        for(let page = from; page <= to; page += 1){
            pages.add(page - 1);
        }
    }
    return [
        ...pages
    ].sort((left, right)=>left - right);
}
function parseSplitRanges(input, totalPages) {
    if (!input.trim()) {
        throw new Error("Enter one or more page ranges to split.");
    }
    return input.split(",").map((segment)=>segment.trim()).filter(Boolean).map((segment)=>parsePageRanges(segment, totalPages));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/pdf/operations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPageNumbers",
    ()=>addPageNumbers,
    "createBlankPdf",
    ()=>createBlankPdf,
    "deletePdfPages",
    ()=>deletePdfPages,
    "extractPdfPages",
    ()=>extractPdfPages,
    "mergePdfFiles",
    ()=>mergePdfFiles,
    "rotatePdf",
    ()=>rotatePdf,
    "splitPdfByRanges",
    ()=>splitPdfByRanges,
    "watermarkPdf",
    ()=>watermarkPdf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript) <export default as PDFDocument>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/StandardFonts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/rotations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/colors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$ranges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf/ranges.ts [app-client] (ecmascript)");
;
;
async function mergePdfFiles(files) {
    if (files.length < 2) {
        throw new Error("Select at least two PDF files to merge.");
    }
    const merged = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].create();
    for (const file of files){
        const bytes = await file.arrayBuffer();
        const document = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].load(bytes);
        const copiedPages = await merged.copyPages(document, document.getPageIndices());
        copiedPages.forEach((page)=>merged.addPage(page));
    }
    return [
        {
            filename: buildFilename(files[0].name, "merged"),
            bytes: await merged.save()
        }
    ];
}
async function splitPdfByRanges(file, rangesText) {
    const source = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].load(await file.arrayBuffer());
    const ranges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$ranges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSplitRanges"])(rangesText, source.getPageCount());
    return Promise.all(ranges.map(async (range, index)=>{
        const splitDocument = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].create();
        const copiedPages = await splitDocument.copyPages(source, range);
        copiedPages.forEach((page)=>splitDocument.addPage(page));
        return {
            filename: buildFilename(file.name, `part-${index + 1}`),
            bytes: await splitDocument.save()
        };
    }));
}
async function extractPdfPages(file, pageText) {
    const source = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].load(await file.arrayBuffer());
    const pages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$ranges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePageRanges"])(pageText, source.getPageCount());
    const target = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].create();
    const copiedPages = await target.copyPages(source, pages);
    copiedPages.forEach((page)=>target.addPage(page));
    return [
        {
            filename: buildFilename(file.name, "extract"),
            bytes: await target.save()
        }
    ];
}
async function deletePdfPages(file, pageText) {
    const source = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].load(await file.arrayBuffer());
    const pagesToDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$ranges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePageRanges"])(pageText, source.getPageCount());
    for (const pageIndex of [
        ...pagesToDelete
    ].sort((left, right)=>right - left)){
        source.removePage(pageIndex);
    }
    return [
        {
            filename: buildFilename(file.name, "trimmed"),
            bytes: await source.save()
        }
    ];
}
async function rotatePdf(file, angle) {
    const source = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].load(await file.arrayBuffer());
    source.getPages().forEach((page)=>{
        page.setRotation((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(angle));
    });
    return [
        {
            filename: buildFilename(file.name, `rotated-${angle}`),
            bytes: await source.save()
        }
    ];
}
async function watermarkPdf(file, text) {
    if (!text.trim()) {
        throw new Error("Enter watermark text.");
    }
    const source = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].load(await file.arrayBuffer());
    const font = await source.embedFont(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardFonts"].HelveticaBold);
    source.getPages().forEach((page)=>{
        const { width, height } = page.getSize();
        page.drawText(text, {
            x: width * 0.14,
            y: height * 0.45,
            size: Math.max(28, width * 0.08),
            rotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$rotations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["degrees"])(-32),
            font,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0.84, 0.3, 0.18),
            opacity: 0.18
        });
    });
    return [
        {
            filename: buildFilename(file.name, "watermarked"),
            bytes: await source.save()
        }
    ];
}
async function addPageNumbers(file, prefix) {
    const source = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].load(await file.arrayBuffer());
    const font = await source.embedFont(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardFonts"].Helvetica);
    const totalPages = source.getPageCount();
    source.getPages().forEach((page, index)=>{
        const { width } = page.getSize();
        const text = prefix.trim() ? `${prefix.trim()} ${index + 1}` : `Page ${index + 1} of ${totalPages}`;
        page.drawText(text, {
            x: width - 140,
            y: 18,
            size: 10,
            font,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0.26, 0.23, 0.19)
        });
    });
    return [
        {
            filename: buildFilename(file.name, "numbered"),
            bytes: await source.save()
        }
    ];
}
async function createBlankPdf(options) {
    const document = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].create();
    const titleFont = await document.embedFont(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardFonts"].HelveticaBold);
    const bodyFont = await document.embedFont(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardFonts"].Helvetica);
    const pageCount = Math.max(1, options.pageCount);
    for(let pageIndex = 0; pageIndex < pageCount; pageIndex += 1){
        const page = document.addPage([
            options.width,
            options.height
        ]);
        if (pageIndex === 0) {
            page.drawText(options.title || "Untitled PDF", {
                x: 54,
                y: options.height - 92,
                size: 24,
                font: titleFont,
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0.13, 0.12, 0.11)
            });
            const bodyLines = (options.body || "Add content and export quickly.").split("\n").slice(0, 16);
            bodyLines.forEach((line, index)=>{
                page.drawText(line, {
                    x: 54,
                    y: options.height - 138 - index * 24,
                    size: 13,
                    font: bodyFont,
                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgb"])(0.23, 0.21, 0.18)
                });
            });
        }
    }
    return [
        {
            filename: "blank-document.pdf",
            bytes: await document.save()
        }
    ];
}
function buildFilename(originalName, suffix) {
    const sanitizedName = originalName.toLowerCase().endsWith(".pdf") ? originalName.slice(0, -4) : originalName;
    return `${sanitizedName}-${suffix}.pdf`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/pdf/tool-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOOL_CONFIG",
    ()=>TOOL_CONFIG
]);
const TOOL_CONFIG = [
    {
        id: "merge",
        name: "Merge PDF",
        summary: "Combine multiple PDFs into one clean final file.",
        acceptsMultiple: true,
        primaryLabel: "Merge Files"
    },
    {
        id: "split",
        name: "Split PDF",
        summary: "Break a PDF into multiple files using page ranges.",
        acceptsMultiple: false,
        primaryLabel: "Split PDF"
    },
    {
        id: "extract",
        name: "Extract Pages",
        summary: "Pull just the pages you need into a new document.",
        acceptsMultiple: false,
        primaryLabel: "Extract Pages"
    },
    {
        id: "delete",
        name: "Delete Pages",
        summary: "Remove unwanted pages before you send the file.",
        acceptsMultiple: false,
        primaryLabel: "Delete Pages"
    },
    {
        id: "rotate",
        name: "Rotate PDF",
        summary: "Fix upside-down scans with a single action.",
        acceptsMultiple: false,
        primaryLabel: "Rotate Pages"
    },
    {
        id: "watermark",
        name: "Add Watermark",
        summary: "Stamp draft, confidential, or brand text across pages.",
        acceptsMultiple: false,
        primaryLabel: "Add Watermark"
    },
    {
        id: "page-numbers",
        name: "Page Numbers",
        summary: "Insert clean page numbers for submissions and reviews.",
        acceptsMultiple: false,
        primaryLabel: "Add Numbers"
    },
    {
        id: "blank",
        name: "Create Blank PDF",
        summary: "Start from scratch and place text on a fresh page.",
        acceptsMultiple: false,
        primaryLabel: "Create PDF"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pdf-studio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PdfStudio",
    ()=>PdfStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/pdf-studio.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$download$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf/download.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf/operations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$tool$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf/tool-config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const INITIAL_FORM = {
    pageRanges: "1-2",
    rotateAngle: "90",
    watermarkText: "CONFIDENTIAL",
    pageNumberPrefix: "",
    blankTitle: "Meeting Notes",
    blankBody: "Action items\nOwner\nDue date",
    blankPageCount: "1",
    blankWidth: "595",
    blankHeight: "842"
};
function PdfStudio() {
    _s();
    const [activeTool, setActiveTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("merge");
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Upload files and run a tool. Everything stays in your browser session.");
    const [statusTone, setStatusTone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("neutral");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_FORM);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PdfStudio.useMemo[tool]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$tool$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_CONFIG"].find({
                "PdfStudio.useMemo[tool]": (item)=>item.id === activeTool
            }["PdfStudio.useMemo[tool]"]) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$tool$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_CONFIG"][0]
    }["PdfStudio.useMemo[tool]"], [
        activeTool
    ]);
    const requiredFileCount = tool.acceptsMultiple ? 2 : 1;
    function openFilePicker() {
        fileInputRef.current?.click();
    }
    function resetWorkspace() {
        setFiles([]);
        setResults([]);
        setStatus("Workspace cleared. Drop in the next rush job when you are ready.");
        setStatusTone("neutral");
    }
    function handleFiles(nextFiles) {
        if (!nextFiles?.length) {
            return;
        }
        const accepted = [
            ...nextFiles
        ].filter((file)=>file.type === "application/pdf");
        setFiles(accepted);
        setResults([]);
        if (accepted.length !== nextFiles.length && activeTool !== "blank") {
            setStatus("Only PDF files are supported in the current V1 tool set.");
            setStatusTone("error");
            return;
        }
        setStatus(`${accepted.length} file${accepted.length === 1 ? "" : "s"} ready for ${tool.name.toLowerCase()}.`);
        setStatusTone("neutral");
    }
    function handleToolChange(toolId) {
        setActiveTool(toolId);
        setResults([]);
        setStatus(`Switched to ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$tool$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_CONFIG"].find((item)=>item.id === toolId)?.name}.`);
        setStatusTone("neutral");
    }
    function updateForm(key, value) {
        setForm((current)=>({
                ...current,
                [key]: value
            }));
    }
    function ensureFiles() {
        if (activeTool === "blank") {
            return;
        }
        if (files.length < requiredFileCount) {
            throw new Error(requiredFileCount > 1 ? `Select at least ${requiredFileCount} PDF files first.` : "Select a PDF file first.");
        }
    }
    function runTool() {
        startTransition(async ()=>{
            try {
                ensureFiles();
                setStatus(`Running ${tool.name.toLowerCase()}...`);
                setStatusTone("neutral");
                let nextResults = [];
                switch(activeTool){
                    case "merge":
                        nextResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergePdfFiles"])(files);
                        break;
                    case "split":
                        nextResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitPdfByRanges"])(files[0], form.pageRanges);
                        break;
                    case "extract":
                        nextResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractPdfPages"])(files[0], form.pageRanges);
                        break;
                    case "delete":
                        nextResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deletePdfPages"])(files[0], form.pageRanges);
                        break;
                    case "rotate":
                        nextResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotatePdf"])(files[0], Number(form.rotateAngle));
                        break;
                    case "watermark":
                        nextResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watermarkPdf"])(files[0], form.watermarkText);
                        break;
                    case "page-numbers":
                        nextResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPageNumbers"])(files[0], form.pageNumberPrefix);
                        break;
                    case "blank":
                        nextResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBlankPdf"])({
                            pageCount: Number(form.blankPageCount),
                            width: Number(form.blankWidth),
                            height: Number(form.blankHeight),
                            title: form.blankTitle,
                            body: form.blankBody
                        });
                        break;
                    default:
                        throw new Error("This tool is not ready yet.");
                }
                setResults(nextResults);
                setStatus(nextResults.length === 1 ? "Your PDF is ready. Download it below." : `${nextResults.length} PDF files are ready. Download the pieces you need.`);
                setStatusTone("success");
            } catch (error) {
                setResults([]);
                setStatus(error instanceof Error ? error.message : "Something went wrong while processing the PDF.");
                setStatusTone("error");
            }
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shell,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: "FlashPDF V1 Build"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pdf-studio.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroCopy,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: "Quick PDF fixes for deadline mode."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "This first build focuses on the urgent jobs people scramble for: merge, split, trim, rotate, watermark, paginate, and create a clean PDF from scratch."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pdf-studio.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroStats,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                children: "Browser-first"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "No upload backend required for the current tool set"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                children: "8 live tools"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "Focused on practical, last-minute document work"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                children: "Extensible core"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                children: "Structured to add editing, signing, and forms next"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pdf-studio.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pdf-studio.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pdf-studio.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].workspace,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rail,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Toolbox"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pdf-studio.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionLead,
                                children: "Choose the job, drop the file, and export the result without leaving the page."
                            }, void 0, false, {
                                fileName: "[project]/src/components/pdf-studio.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolList,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$tool$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOL_CONFIG"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolButton, item.id === activeTool && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolButtonActive),
                                        onClick: ()=>handleToolChange(item.id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.summary
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/pdf-studio.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pdf-studio.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panelTop,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                children: tool.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 235,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionLead,
                                                children: tool.summary
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                                        children: activeTool === "blank" ? "No source file required" : tool.acceptsMultiple ? "Multiple PDFs supported" : "Single PDF flow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pdf-studio.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropzone,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: activeTool === "blank" ? "Blank PDF mode is ready." : "Drop PDF files here or use the picker."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pdf-studio.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: activeTool === "blank" ? "You can generate a fresh PDF without uploading anything." : tool.acceptsMultiple ? "Add two or more PDFs for combination workflows." : "Add a single PDF to edit pages or apply finishing touches."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pdf-studio.tsx",
                                                            lineNumber: 256,
                                                            columnNumber: 19
                                                        }, this),
                                                        activeTool !== "blank" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inlineActions,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                                                    onClick: openFilePicker,
                                                                    children: "Choose PDFs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pdf-studio.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGhost,
                                                                    onClick: resetWorkspace,
                                                                    children: "Clear Files"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pdf-studio.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pdf-studio.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inlineActions,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGhost,
                                                                onClick: resetWorkspace,
                                                                children: "Reset Outputs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pdf-studio.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pdf-studio.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: fileInputRef,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInput,
                                                type: "file",
                                                accept: "application/pdf",
                                                multiple: tool.acceptsMultiple,
                                                onChange: (event)=>handleFiles(event.target.files)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this),
                                            activeTool !== "blank" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaList,
                                                children: files.length ? files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaItem,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaName,
                                                                        children: file.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                                        lineNumber: 297,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaHint,
                                                                        children: [
                                                                            (file.size / 1024 / 1024).toFixed(2),
                                                                            " MB"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                                        lineNumber: 298,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaHint,
                                                                children: "PDF"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, `${file.name}-${file.size}`, true, {
                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 23
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaItem,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaName,
                                                                children: "No files loaded yet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaHint,
                                                                children: "Pick a tool and add a PDF to begin."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pdf-studio.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolFields, {
                                                activeTool: activeTool,
                                                form: form,
                                                updateForm: updateForm
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inlineActions,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                                                    onClick: runTool,
                                                    disabled: isPending,
                                                    children: isPending ? "Processing..." : tool.primaryLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pdf-studio.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status, statusTone === "error" && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusError, statusTone === "success" && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusSuccess),
                                                children: status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 324,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                                children: "Results"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 336,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionLead,
                                                children: "Every completed output appears here immediately with one-click download."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 337,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaList,
                                                children: results.length ? results.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaItem,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaName,
                                                                        children: result.filename
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                                        lineNumber: 346,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaHint,
                                                                        children: "Ready to download"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                                        lineNumber: 347,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonGhost,
                                                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$download$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadBytes"])(result.bytes, result.filename),
                                                                children: "Download"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, result.filename, true, {
                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaItem,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaName,
                                                                children: "No exports yet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaHint,
                                                                children: "Run the selected tool to generate PDFs."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pdf-studio.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quickList,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Next priority"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Text editing, signatures, and form filling can be added on top of this shared workspace."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Current limitation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 19
                                                            }, this),
                                                            "This first build processes standard PDFs client-side and does not yet render live page previews."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Why this matters"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 19
                                                            }, this),
                                                            "The processing layer is already reusable, so new tools do not require a backend rewrite."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pdf-studio.tsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pdf-studio.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pdf-studio.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pdf-studio.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pdf-studio.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pdf-studio.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(PdfStudio, "E5S5rHBuBVtVSgOTrDG01qf6TRg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = PdfStudio;
function ToolFields({ activeTool, form, updateForm }) {
    if (activeTool === "blank") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGrid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                    children: [
                        "Title",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.blankTitle,
                            onChange: (event)=>updateForm("blankTitle", event.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pdf-studio.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pdf-studio.tsx",
                    lineNumber: 402,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                    children: [
                        "Body",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: form.blankBody,
                            onChange: (event)=>updateForm("blankBody", event.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pdf-studio.tsx",
                            lineNumber: 408,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pdf-studio.tsx",
                    lineNumber: 406,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                    children: [
                        "Page Count",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: "1",
                            max: "25",
                            value: form.blankPageCount,
                            onChange: (event)=>updateForm("blankPageCount", event.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pdf-studio.tsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pdf-studio.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                    children: [
                        "Page Width",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.blankWidth,
                            onChange: (event)=>updateForm("blankWidth", event.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pdf-studio.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pdf-studio.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                    children: [
                        "Page Height",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: form.blankHeight,
                            onChange: (event)=>updateForm("blankHeight", event.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pdf-studio.tsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pdf-studio.tsx",
                    lineNumber: 424,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pdf-studio.tsx",
            lineNumber: 401,
            columnNumber: 7
        }, this);
    }
    if (activeTool === "rotate") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGrid,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                children: [
                    "Rotation Angle",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: form.rotateAngle,
                        onChange: (event)=>updateForm("rotateAngle", event.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "90",
                                children: "90 degrees"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pdf-studio.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "180",
                                children: "180 degrees"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pdf-studio.tsx",
                                lineNumber: 439,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "270",
                                children: "270 degrees"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pdf-studio.tsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pdf-studio.tsx",
                        lineNumber: 437,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pdf-studio.tsx",
                lineNumber: 435,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/pdf-studio.tsx",
            lineNumber: 434,
            columnNumber: 7
        }, this);
    }
    if (activeTool === "watermark") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGrid,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                children: [
                    "Watermark Text",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.watermarkText,
                        onChange: (event)=>updateForm("watermarkText", event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pdf-studio.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pdf-studio.tsx",
                lineNumber: 450,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/pdf-studio.tsx",
            lineNumber: 449,
            columnNumber: 7
        }, this);
    }
    if (activeTool === "page-numbers") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGrid,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                children: [
                    "Number Prefix",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.pageNumberPrefix,
                        onChange: (event)=>updateForm("pageNumberPrefix", event.target.value),
                        placeholder: "Optional, for example Section"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pdf-studio.tsx",
                        lineNumber: 466,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pdf-studio.tsx",
                lineNumber: 464,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/pdf-studio.tsx",
            lineNumber: 463,
            columnNumber: 7
        }, this);
    }
    if (activeTool === "merge") {
        return null;
    }
    const label = activeTool === "split" ? "Page ranges" : activeTool === "extract" ? "Pages to extract" : "Pages to delete";
    const helper = activeTool === "split" ? "Example: 1-2, 3-4, 5-7 creates multiple output PDFs." : "Example: 1, 3-5";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldGrid,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldLabel,
                children: [
                    label,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.pageRanges,
                        onChange: (event)=>updateForm("pageRanges", event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pdf-studio.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pdf-studio.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaHint,
                children: helper
            }, void 0, false, {
                fileName: "[project]/src/components/pdf-studio.tsx",
                lineNumber: 498,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pdf-studio.tsx",
        lineNumber: 493,
        columnNumber: 5
    }, this);
}
_c1 = ToolFields;
var _c, _c1;
__turbopack_context__.k.register(_c, "PdfStudio");
__turbopack_context__.k.register(_c1, "ToolFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shell/WorkspaceShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspaceShell",
    ()=>WorkspaceShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/state/app-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pdf-studio.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WorkspaceShell() {
    _s();
    const { activeFormat, isWorkspaceActive, setWorkspaceActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex-1",
        children: [
            !isWorkspaceActive && activeFormat === "pdf" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center text-center max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-4xl mb-4 text-slate-900",
                        children: "PDF Tools"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 mb-8 text-lg",
                        children: "Everything you need to work with PDFs. Merge, split, extract, rotate, and format securely in your browser."
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setWorkspaceActive(true),
                        className: "bg-layah-primary text-white px-8 py-3.5 rounded-lg font-medium text-lg hover:bg-blue-600 transition-colors shadow-sm flex items-center gap-2",
                        children: [
                            "Start working ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                                lineNumber: 22,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this),
            isWorkspaceActive && activeFormat === "pdf" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full animate-in fade-in slide-in-from-bottom-4 duration-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pdf$2d$studio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PdfStudio"], {}, void 0, false, {
                    fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            activeFormat !== "pdf" && activeFormat !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center text-center max-w-2xl mx-auto py-12 opacity-60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-3xl mb-4 text-slate-700 capitalize",
                        children: [
                            activeFormat,
                            " Tools"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 mb-4",
                        children: "Support for this format is coming soon."
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full",
                        children: "In Development"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(WorkspaceShell, "ZTtgeVXczEL6NrfOd6oUl8okuT8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = WorkspaceShell;
var _c;
__turbopack_context__.k.register(_c, "WorkspaceShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shell/LayahShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayahShell",
    ()=>LayahShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$EntryState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/EntryState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$FormatSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/FormatSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$WorkspaceShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/WorkspaceShell.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function LayahShell() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-[#f8f9fa]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$EntryState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntryState"], {}, void 0, false, {
                fileName: "[project]/src/components/shell/LayahShell.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-24 bg-white"
            }, void 0, false, {
                fileName: "[project]/src/components/shell/LayahShell.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "workspace",
                className: "w-full bg-white flex-1 pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$FormatSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormatSwitcher"], {}, void 0, false, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$WorkspaceShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkspaceShell"], {}, void 0, false, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shell/LayahShell.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "w-full bg-slate-50 border-t border-slate-200 py-16 mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-bold text-xl tracking-tight text-slate-900 mb-4",
                                    children: "layah.tools"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 leading-relaxed",
                                    children: "The easiest way to get work done with files. Fast, private, and AI-powered."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-medium text-slate-900 mb-4",
                                    children: "Formats"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-sm text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#workspace",
                                                className: "hover:text-layah-primary transition-colors",
                                                children: "PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shell/LayahShell.tsx",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "opacity-50",
                                            children: "Word"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "opacity-50",
                                            children: "Excel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "opacity-50",
                                            children: "Images"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-medium text-slate-900 mb-4",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-sm text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-layah-primary transition-colors",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shell/LayahShell.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-layah-primary transition-colors",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shell/LayahShell.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-medium text-slate-900 mb-4",
                                    children: "Resources"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 text-sm text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-layah-primary transition-colors",
                                                children: "How It Works"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shell/LayahShell.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-layah-primary transition-colors",
                                                children: "Privacy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shell/LayahShell.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-layah-primary transition-colors",
                                                children: "Terms"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shell/LayahShell.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shell/LayahShell.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/LayahShell.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = LayahShell;
var _c;
__turbopack_context__.k.register(_c, "LayahShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_08535el._.js.map