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
"[project]/src/lib/capabilities/registry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAPABILITY_REGISTRY",
    ()=>CAPABILITY_REGISTRY
]);
const CAPABILITY_REGISTRY = {
    "pdf.merge": {
        id: "pdf.merge",
        name: "Merge PDF",
        category: "organize",
        inputFormats: [
            "pdf"
        ],
        outputFormats: [
            "pdf"
        ],
        processingMode: "client",
        destructive: false,
        supportsPreview: false,
        supportsBatch: true,
        supportsAI: true,
        summary: "Combine multiple PDFs into one clean final file.",
        acceptsMultiple: true,
        primaryLabel: "Merge Files"
    },
    "pdf.split": {
        id: "pdf.split",
        name: "Split PDF",
        category: "organize",
        inputFormats: [
            "pdf"
        ],
        outputFormats: [
            "pdf"
        ],
        processingMode: "client",
        destructive: false,
        supportsPreview: false,
        supportsBatch: false,
        supportsAI: true,
        summary: "Break a PDF into multiple files using page ranges.",
        acceptsMultiple: false,
        primaryLabel: "Split PDF"
    },
    "pdf.extract": {
        id: "pdf.extract",
        name: "Extract Pages",
        category: "organize",
        inputFormats: [
            "pdf"
        ],
        outputFormats: [
            "pdf"
        ],
        processingMode: "client",
        destructive: false,
        supportsPreview: false,
        supportsBatch: false,
        supportsAI: true,
        summary: "Pull just the pages you need into a new document.",
        acceptsMultiple: false,
        primaryLabel: "Extract Pages"
    },
    "pdf.delete": {
        id: "pdf.delete",
        name: "Delete Pages",
        category: "organize",
        inputFormats: [
            "pdf"
        ],
        outputFormats: [
            "pdf"
        ],
        processingMode: "client",
        destructive: true,
        supportsPreview: false,
        supportsBatch: false,
        supportsAI: true,
        summary: "Remove unwanted pages before you send the file.",
        acceptsMultiple: false,
        primaryLabel: "Delete Pages"
    },
    "pdf.rotate": {
        id: "pdf.rotate",
        name: "Rotate PDF",
        category: "organize",
        inputFormats: [
            "pdf"
        ],
        outputFormats: [
            "pdf"
        ],
        processingMode: "client",
        destructive: false,
        supportsPreview: false,
        supportsBatch: false,
        supportsAI: true,
        summary: "Fix upside-down scans with a single action.",
        acceptsMultiple: false,
        primaryLabel: "Rotate Pages"
    },
    "pdf.watermark": {
        id: "pdf.watermark",
        name: "Add Watermark",
        category: "secure",
        inputFormats: [
            "pdf"
        ],
        outputFormats: [
            "pdf"
        ],
        processingMode: "client",
        destructive: false,
        supportsPreview: false,
        supportsBatch: false,
        supportsAI: true,
        summary: "Stamp draft, confidential, or brand text across pages.",
        acceptsMultiple: false,
        primaryLabel: "Add Watermark"
    },
    "pdf.page-numbers": {
        id: "pdf.page-numbers",
        name: "Page Numbers",
        category: "organize",
        inputFormats: [
            "pdf"
        ],
        outputFormats: [
            "pdf"
        ],
        processingMode: "client",
        destructive: false,
        supportsPreview: false,
        supportsBatch: false,
        supportsAI: true,
        summary: "Insert clean page numbers for submissions and reviews.",
        acceptsMultiple: false,
        primaryLabel: "Add Numbers"
    },
    "pdf.blank": {
        id: "pdf.blank",
        name: "Create Blank PDF",
        category: "create",
        inputFormats: [],
        outputFormats: [
            "pdf"
        ],
        processingMode: "client",
        destructive: false,
        supportsPreview: false,
        supportsBatch: false,
        supportsAI: true,
        summary: "Start from scratch and place text on a fresh page.",
        acceptsMultiple: false,
        primaryLabel: "Create PDF"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shell/WorkspaceHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspaceHeader",
    ()=>WorkspaceHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/state/app-state.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function WorkspaceHeader() {
    _s();
    const { activeFormat, setWorkspaceActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full h-14 md:h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 shrink-0 sticky top-0 z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setWorkspaceActive(false),
                    className: "font-display font-medium text-xl tracking-tight text-slate-900 hover:text-layah-primary transition-colors",
                    children: "LayahTools"
                }, void 0, false, {
                    fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 -translate-x-1/2 flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs font-semibold tracking-widest uppercase",
                    children: activeFormat === "pdf" ? "PDF Workspace" : `${activeFormat} Workspace`
                }, void 0, false, {
                    fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors",
                        children: "Export"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-sm font-medium bg-slate-900 text-white px-4 py-1.5 rounded-md hover:bg-slate-800 transition-colors",
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(WorkspaceHeader, "H6M6cUgrFwwAtyKvHt+8JsTodSo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = WorkspaceHeader;
var _c;
__turbopack_context__.k.register(_c, "WorkspaceHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/workspace/PdfWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PdfWorkspace",
    ()=>PdfWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/state/app-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$capabilities$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/capabilities/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$WorkspaceHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/WorkspaceHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$CommandBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/CommandBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$download$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf/download.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf/operations.ts [app-client] (ecmascript)");
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
function PdfWorkspace() {
    _s();
    const { activeCapabilityId, setActiveCapabilityId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusTone, setStatusTone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("neutral");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_FORM);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Default to pdf.merge if none selected
    const activeId = activeCapabilityId || "pdf.merge";
    const capability = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$capabilities$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAPABILITY_REGISTRY"][activeId];
    // Map capability ID to old PdfToolId for the operations
    const toolIdMap = {
        "pdf.merge": "merge",
        "pdf.split": "split",
        "pdf.extract": "extract",
        "pdf.delete": "delete",
        "pdf.rotate": "rotate",
        "pdf.watermark": "watermark",
        "pdf.page-numbers": "page-numbers",
        "pdf.blank": "blank"
    };
    const activeTool = toolIdMap[activeId] || "merge";
    const acceptsMultiple = capability?.supportsBatch || false;
    const requiredFileCount = acceptsMultiple ? 2 : 1;
    function openFilePicker() {
        fileInputRef.current?.click();
    }
    function handleFiles(nextFiles) {
        if (!nextFiles?.length) return;
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
        setStatus(`${accepted.length} file(s) ready.`);
        setStatusTone("neutral");
    }
    function updateForm(key, value) {
        setForm((current)=>({
                ...current,
                [key]: value
            }));
    }
    function ensureFiles() {
        if (activeTool === "blank") return;
        if (files.length < requiredFileCount) {
            throw new Error(requiredFileCount > 1 ? `Select at least ${requiredFileCount} PDF files first.` : "Select a PDF file first.");
        }
    }
    function runTool() {
        startTransition(async ()=>{
            try {
                ensureFiles();
                setStatus(`Running ${capability?.name || "tool"}...`);
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
                        throw new Error("This capability is not ready yet.");
                }
                setResults(nextResults);
                setStatus(nextResults.length === 1 ? "Your output is ready." : `${nextResults.length} outputs generated.`);
                setStatusTone("success");
            } catch (error) {
                setResults([]);
                setStatus(error instanceof Error ? error.message : "Something went wrong.");
                setStatusTone("error");
            }
        });
    }
    const capabilityGroups = [
        {
            title: "Quick Actions",
            items: [
                "pdf.merge",
                "pdf.split"
            ]
        },
        {
            title: "Organize",
            items: [
                "pdf.extract",
                "pdf.delete",
                "pdf.rotate",
                "pdf.page-numbers"
            ]
        },
        {
            title: "Secure",
            items: [
                "pdf.watermark"
            ]
        },
        {
            title: "Create",
            items: [
                "pdf.blank"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex flex-col bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$WorkspaceHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkspaceHeader"], {}, void 0, false, {
                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "w-64 bg-white border-r border-slate-200 overflow-y-auto flex flex-col p-4",
                        children: capabilityGroups.map((group, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold tracking-widest uppercase text-slate-400 mb-3 ml-2",
                                        children: group.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: group.items.map((id)=>{
                                            const cap = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$capabilities$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAPABILITY_REGISTRY"][id];
                                            if (!cap) return null;
                                            const isActive = activeId === id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setActiveCapabilityId(id);
                                                    setResults([]);
                                                    setStatus("");
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-left px-3 py-2 rounded-md text-sm font-medium transition-colors", isActive ? "bg-blue-50 text-layah-primary" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"),
                                                children: cap.name
                                            }, id, false, {
                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 flex flex-col min-w-0 bg-[#f0f2f5] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-8 flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-3xl bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden min-h-[500px] flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b border-slate-100 p-6 bg-white flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-2xl font-display text-slate-900 mb-1",
                                                                children: capability?.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-500",
                                                                children: capability?.summary
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: runTool,
                                                            disabled: isPending || !files.length && activeTool !== "blank",
                                                            className: "bg-layah-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm",
                                                            children: isPending ? "Processing..." : "Run Tool"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, this),
                                            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("px-6 py-3 text-sm font-medium border-b", statusTone === "error" ? "bg-red-50 text-red-700 border-red-100" : statusTone === "success" ? "bg-green-50 text-green-700 border-green-100" : "bg-blue-50 text-layah-primary border-blue-100"),
                                                children: status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 p-8 bg-slate-50/50 flex flex-col items-center justify-center relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: fileInputRef,
                                                        type: "file",
                                                        className: "hidden",
                                                        accept: "application/pdf",
                                                        multiple: acceptsMultiple,
                                                        onChange: (event)=>handleFiles(event.target.files)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 17
                                                    }, this),
                                                    !files.length && activeTool !== "blank" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-16 h-16 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-8 h-8",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 1.5,
                                                                        d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                                        lineNumber: 285,
                                                                        columnNumber: 102
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-900 font-medium text-lg mb-1",
                                                                children: "Drop a file here"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 text-sm mb-6",
                                                                children: "or"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: openFilePicker,
                                                                className: "bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm",
                                                                children: "Choose a file"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this),
                                                    (files.length > 0 || activeTool === "blank") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full max-w-lg bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative z-10 mt-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider",
                                                                children: "Configuration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolFields, {
                                                                activeTool: activeTool,
                                                                form: form,
                                                                updateForm: updateForm
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 19
                                                    }, this),
                                                    files.length > 0 && activeTool !== "blank" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 m-12 border-2 border-dashed border-slate-200 rounded-lg pointer-events-none opacity-50 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 font-medium",
                                                            children: "Future PDF.js Canvas Area"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-24"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-6 left-0 right-0 px-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$CommandBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandBar"], {}, void 0, false, {
                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                    lineNumber: 318,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "w-72 bg-white border-l border-slate-200 flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-slate-900 uppercase tracking-wider",
                                            children: "Files"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: openFilePicker,
                                            className: "text-layah-primary hover:text-blue-700 p-1",
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
                                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 96
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 mb-8",
                                    children: files.length > 0 ? files.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-50 border border-slate-100 p-3 rounded-lg flex items-start justify-between group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 pr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-slate-900 truncate",
                                                            children: f.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: [
                                                                (f.size / 1024 / 1024).toFixed(2),
                                                                " MB"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setFiles(files.filter((_, idx)=>idx !== i)),
                                                    className: "text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M6 18L18 6M6 6l12 12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                            lineNumber: 341,
                                                            columnNumber: 100
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 text-center py-4",
                                        children: "No files loaded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                        lineNumber: 345,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-900 uppercase tracking-wider",
                                        children: "Outputs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: results.length > 0 ? results.map((res, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-50 border border-blue-100 p-3 rounded-lg flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-slate-900 truncate",
                                                            children: res.filename
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-blue-600 font-medium",
                                                            children: "Ready"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$download$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadBytes"])(res.bytes, res.filename),
                                                    className: "w-full text-xs font-medium bg-white border border-blue-200 text-layah-primary py-1.5 rounded hover:bg-blue-100 transition-colors",
                                                    children: "Download"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 text-center py-4",
                                        children: "No outputs yet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                        lineNumber: 365,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_s(PdfWorkspace, "g1fw6+ZF4/kALci7oXIMB3epHCE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = PdfWorkspace;
// Re-using the exact form logic from pdf-studio.tsx for stability
function ToolFields({ activeTool, form, updateForm }) {
    const inputClass = "w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1";
    const labelClass = "block text-sm font-medium text-slate-700 mb-3";
    if (activeTool === "blank") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: labelClass,
                    children: [
                        "Title",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: inputClass,
                            value: form.blankTitle,
                            onChange: (e)=>updateForm("blankTitle", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                    lineNumber: 393,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: labelClass,
                    children: [
                        "Body",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: inputClass,
                            rows: 3,
                            value: form.blankBody,
                            onChange: (e)=>updateForm("blankBody", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                            lineNumber: 399,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: labelClass,
                            children: [
                                "Width",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: inputClass,
                                    value: form.blankWidth,
                                    onChange: (e)=>updateForm("blankWidth", e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: labelClass,
                            children: [
                                "Height",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: inputClass,
                                    value: form.blankHeight,
                                    onChange: (e)=>updateForm("blankHeight", e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
            lineNumber: 392,
            columnNumber: 7
        }, this);
    }
    if (activeTool === "rotate") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: labelClass,
            children: [
                "Rotation Angle",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: inputClass,
                    value: form.rotateAngle,
                    onChange: (e)=>updateForm("rotateAngle", e.target.value),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "90",
                            children: "90 degrees"
                        }, void 0, false, {
                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                            lineNumber: 420,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "180",
                            children: "180 degrees"
                        }, void 0, false, {
                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "270",
                            children: "270 degrees"
                        }, void 0, false, {
                            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
            lineNumber: 417,
            columnNumber: 7
        }, this);
    }
    if (activeTool === "watermark") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: labelClass,
            children: [
                "Watermark Text",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: inputClass,
                    value: form.watermarkText,
                    onChange: (e)=>updateForm("watermarkText", e.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                    lineNumber: 432,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
            lineNumber: 430,
            columnNumber: 7
        }, this);
    }
    if (activeTool === "page-numbers") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: labelClass,
            children: [
                "Number Prefix",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: inputClass,
                    placeholder: "e.g. Page",
                    value: form.pageNumberPrefix,
                    onChange: (e)=>updateForm("pageNumberPrefix", e.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
            lineNumber: 439,
            columnNumber: 7
        }, this);
    }
    if (activeTool === "merge") return null;
    const label = activeTool === "split" ? "Page ranges" : activeTool === "extract" ? "Pages to extract" : "Pages to delete";
    const helper = activeTool === "split" ? "Example: 1-2, 3-4 creates multiple PDFs." : "Example: 1, 3-5";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: labelClass,
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: inputClass,
                value: form.pageRanges,
                onChange: (e)=>updateForm("pageRanges", e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-slate-500 font-normal mt-1 block",
                children: helper
            }, void 0, false, {
                fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/workspace/PdfWorkspace.tsx",
        lineNumber: 452,
        columnNumber: 5
    }, this);
}
_c1 = ToolFields;
var _c, _c1;
__turbopack_context__.k.register(_c, "PdfWorkspace");
__turbopack_context__.k.register(_c1, "ToolFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0cu.pz.._.js.map