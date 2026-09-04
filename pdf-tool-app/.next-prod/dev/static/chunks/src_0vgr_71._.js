(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/shell/CommandBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandBar",
    ()=>CommandBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/state/app-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CommandBar() {
    _s();
    const { commandInput, setCommandInput } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("w-full max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-200 transition-all duration-300 ease-in-out shadow-sm flex flex-col overflow-hidden", isFocused ? "shadow-2xl ring-2 ring-blue-300" : "hover:shadow-md hover:border-slate-300"),
        children: [
            isFocused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-slate-50/50 border-b border-slate-100 text-left animate-in fade-in slide-in-from-top-2 duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-slate-500 font-medium text-xs uppercase tracking-wider",
                    children: "Layah AI Command"
                }, void 0, false, {
                    fileName: "[project]/src/components/shell/CommandBar.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shell/CommandBar.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex items-center p-2", isFocused ? "h-auto" : "h-14 md:h-16"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "w-10 h-10 shrink-0 rounded-full text-slate-400 flex items-center justify-center hover:bg-slate-100 hover:text-slate-600 transition-colors",
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
                                lineNumber: 32,
                                columnNumber: 90
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/shell/CommandBar.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/CommandBar.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    isFocused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "flex-1 min-h-[80px] px-4 py-2 text-base text-slate-800 bg-transparent resize-none focus:outline-none placeholder:text-slate-400",
                        placeholder: "Ask Layah to do something with this document...",
                        value: commandInput,
                        onChange: (e)=>setCommandInput(e.target.value),
                        onFocus: ()=>setIsFocused(true),
                        onBlur: ()=>setIsFocused(false),
                        autoFocus: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/CommandBar.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "flex-1 h-full px-4 text-base text-slate-800 bg-transparent focus:outline-none placeholder:text-slate-400 cursor-text",
                        placeholder: "Ask Layah to do something with this document...",
                        value: commandInput,
                        onChange: (e)=>setCommandInput(e.target.value),
                        onFocus: ()=>setIsFocused(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/CommandBar.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-colors shadow-sm", commandInput.trim() ? "bg-layah-primary text-white hover:bg-blue-600" : "bg-slate-100 text-slate-400 cursor-not-allowed"),
                        "aria-label": "Submit workflow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2.5,
                                d: "M14 5l7 7m0 0l-7 7m7-7H3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shell/CommandBar.tsx",
                                lineNumber: 64,
                                columnNumber: 90
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/shell/CommandBar.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/CommandBar.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/CommandBar.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/CommandBar.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(CommandBar, "LdKLMi1eMulU+gDeq2cCvtirAtM=", false, function() {
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
                        className: "font-sans font-bold text-xl tracking-tight",
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
"[project]/src/components/shell/WorkspaceShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspaceShell",
    ()=>WorkspaceShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/state/app-state.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function WorkspaceShell() {
    _s();
    const { activeFormat, isWorkspaceActive, setWorkspaceActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    if (isWorkspaceActive) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex-1 flex flex-col items-center text-center max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-300",
        children: [
            activeFormat === "pdf" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
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
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-4xl mb-4 text-slate-900 capitalize",
                        children: [
                            activeFormat,
                            " Tools"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 mb-8 text-lg",
                        children: "Support for this format is coming soon to the Layah workspace."
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setWorkspaceActive(true),
                className: "bg-layah-primary text-white px-8 py-3.5 rounded-lg font-medium text-lg hover:bg-blue-600 transition-colors shadow-sm flex items-center gap-2",
                children: [
                    "Start working ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                        lineNumber: 31,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/WorkspaceShell.tsx",
        lineNumber: 11,
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
function WorkspaceHeader({ goHome }) {
    _s();
    const { activeFormat, setActiveFormat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full h-14 md:h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 shrink-0 sticky top-0 z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 items-center gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: goHome,
                    className: "font-sans font-bold text-xl tracking-tight text-slate-900 hover:text-layah-primary transition-colors",
                    children: "layah.tools"
                }, void 0, false, {
                    fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-6 md:gap-8 hidden md:flex",
                children: FORMATS.map((format)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveFormat(format.id),
                        className: `text-sm font-medium transition-all duration-200 ${activeFormat === format.id ? "text-layah-primary border-b-2 border-layah-primary py-1" : "text-slate-400 hover:text-slate-600 py-1"}`,
                        children: format.label
                    }, format.id || "null", false, {
                        fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 justify-end items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors",
                        children: "Export"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-sm font-medium bg-slate-900 text-white px-4 py-1.5 rounded-md hover:bg-slate-800 transition-colors",
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/WorkspaceHeader.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(WorkspaceHeader, "/eqBdGYW2REBVWCR1phgx0TTLbU=", false, function() {
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
"[project]/src/components/workspace/Workspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Workspace",
    ()=>Workspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/state/app-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$capabilities$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/capabilities/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$WorkspaceHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/WorkspaceHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$CommandBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/CommandBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$download$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf/download.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$operations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pdf/operations.ts [app-client] (ecmascript)");
;
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
const PdfViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/pdf/viewer/PdfViewer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.PdfViewer), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/pdf/viewer/PdfViewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-slate-500",
            children: "Initializing viewer..."
        }, void 0, false, {
            fileName: "[project]/src/components/workspace/Workspace.tsx",
            lineNumber: 13,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0))
});
_c = PdfViewer;
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
function Workspace() {
    _s();
    const { activeCapabilityId, setActiveCapabilityId, activeFormat, setWorkspaceActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
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
    // Dynamically group capabilities by category from the registry
    const capabilityGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Workspace.useMemo[capabilityGroups]": ()=>{
            const groups = {};
            Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$capabilities$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAPABILITY_REGISTRY"]).forEach({
                "Workspace.useMemo[capabilityGroups]": (cap)=>{
                    if (!groups[cap.category]) {
                        groups[cap.category] = [];
                    }
                    groups[cap.category].push(cap.id);
                }
            }["Workspace.useMemo[capabilityGroups]"]);
            // Desired display order for categories
            const categoryOrder = [
                "organize",
                "create",
                "convert",
                "understand",
                "secure",
                "optimize",
                "edit"
            ];
            return Object.keys(groups).sort({
                "Workspace.useMemo[capabilityGroups]": (a, b)=>{
                    const indexA = categoryOrder.indexOf(a);
                    const indexB = categoryOrder.indexOf(b);
                    return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
                }
            }["Workspace.useMemo[capabilityGroups]"]).map({
                "Workspace.useMemo[capabilityGroups]": (category)=>({
                        title: category,
                        items: groups[category]
                    })
            }["Workspace.useMemo[capabilityGroups]"]);
        }
    }["Workspace.useMemo[capabilityGroups]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-slate-50 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$WorkspaceHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkspaceHeader"], {
                goHome: ()=>setWorkspaceActive(false)
            }, void 0, false, {
                fileName: "[project]/src/components/workspace/Workspace.tsx",
                lineNumber: 206,
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
                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                        lineNumber: 214,
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
                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 flex flex-col min-w-0 bg-[#f0f2f5] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center",
                                children: [
                                    activeFormat === "pdf" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex flex-col relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b border-slate-200 p-5 bg-white flex justify-between items-start shrink-0 rounded-t-xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-xl font-display text-slate-900 mb-1",
                                                                children: capability?.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-500",
                                                                children: capability?.summary
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: runTool,
                                                            disabled: isPending || !files.length && activeTool !== "blank",
                                                            className: "bg-layah-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm",
                                                            children: isPending ? "Processing..." : "Run Tool"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this),
                                            status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("px-6 py-2.5 text-sm font-medium shrink-0", statusTone === "error" ? "bg-red-50 text-red-700 border-b border-red-100" : statusTone === "success" ? "bg-green-50 text-green-700 border-b border-green-100" : "bg-blue-50 text-layah-primary border-b border-blue-100"),
                                                children: status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this),
                                            (files.length > 0 || activeTool === "blank") && activeTool !== "merge" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-24 right-6 w-80 bg-white/95 backdrop-blur shadow-xl p-5 rounded-xl border border-slate-200 z-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider",
                                                        children: "Configuration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolFields, {
                                                        activeTool: activeTool,
                                                        form: form,
                                                        updateForm: updateForm
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                lineNumber: 283,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 relative flex flex-col min-h-0 bg-[#e4e7ec] overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: fileInputRef,
                                                        type: "file",
                                                        className: "hidden",
                                                        accept: "application/pdf",
                                                        multiple: acceptsMultiple,
                                                        onChange: (event)=>handleFiles(event.target.files)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this),
                                                    !files.length && activeTool !== "blank" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex flex-col items-center justify-center",
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
                                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 104
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-900 font-medium text-lg mb-1",
                                                                children: "Drop a file here"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 text-sm mb-6",
                                                                children: "or"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: openFilePicker,
                                                                className: "bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm",
                                                                children: "Choose a file"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 21
                                                    }, this),
                                                    files.length > 0 && activeTool !== "blank" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PdfViewer, {
                                                        file: files[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 22
                                                    }, this),
                                                    activeTool === "blank" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-white shadow-md border border-slate-200",
                                                            style: {
                                                                width: `${form.blankWidth}px`,
                                                                height: `${form.blankHeight}px`,
                                                                transform: 'scale(0.7)'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-12 text-slate-400 text-center font-medium opacity-50",
                                                                children: "Blank PDF Preview"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 26
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                lineNumber: 290,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center w-full max-w-lg mx-auto py-24 opacity-60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-8 h-8",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 1.5,
                                                        d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 98
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-display text-slate-800 mb-2 capitalize",
                                                children: [
                                                    activeFormat,
                                                    " Workspace"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 mb-4",
                                                children: [
                                                    activeFormat,
                                                    " tools are coming into this workspace."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-24"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-6 left-0 right-0 px-4 md:px-8 pointer-events-none z-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-auto w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$CommandBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandBar"], {}, void 0, false, {
                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                        lineNumber: 247,
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
                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                            lineNumber: 363,
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
                                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 96
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                    lineNumber: 362,
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
                                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500",
                                                            children: [
                                                                (f.size / 1024 / 1024).toFixed(2),
                                                                " MB"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                    lineNumber: 372,
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
                                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 100
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 text-center py-4",
                                        children: "No files loaded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                        lineNumber: 381,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-900 uppercase tracking-wider",
                                        children: "Outputs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                    lineNumber: 385,
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
                                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-blue-600 font-medium",
                                                            children: "Ready"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pdf$2f$download$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadBytes"])(res.bytes, res.filename),
                                                    className: "w-full text-xs font-medium bg-white border border-blue-200 text-layah-primary py-1.5 rounded hover:bg-blue-100 transition-colors",
                                                    children: "Download"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                                            lineNumber: 391,
                                            columnNumber: 17
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 text-center py-4",
                                        children: "No outputs yet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                                        lineNumber: 401,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/workspace/Workspace.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/workspace/Workspace.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/workspace/Workspace.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
_s(Workspace, "+Fo/5PL+2Qtjg3ithQi7Q0CP1+Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c1 = Workspace;
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
                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                    lineNumber: 429,
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
                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                    lineNumber: 433,
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
                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                            lineNumber: 438,
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
                                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/workspace/Workspace.tsx",
            lineNumber: 428,
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
                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "180",
                            children: "180 degrees"
                        }, void 0, false, {
                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                            lineNumber: 457,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "270",
                            children: "270 degrees"
                        }, void 0, false, {
                            fileName: "[project]/src/components/workspace/Workspace.tsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/workspace/Workspace.tsx",
            lineNumber: 453,
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
                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                    lineNumber: 468,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/workspace/Workspace.tsx",
            lineNumber: 466,
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
                    fileName: "[project]/src/components/workspace/Workspace.tsx",
                    lineNumber: 477,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/workspace/Workspace.tsx",
            lineNumber: 475,
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
                fileName: "[project]/src/components/workspace/Workspace.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-slate-500 font-normal mt-1 block",
                children: helper
            }, void 0, false, {
                fileName: "[project]/src/components/workspace/Workspace.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/workspace/Workspace.tsx",
        lineNumber: 488,
        columnNumber: 5
    }, this);
}
_c2 = ToolFields;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PdfViewer");
__turbopack_context__.k.register(_c1, "Workspace");
__turbopack_context__.k.register(_c2, "ToolFields");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/state/app-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$EntryState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/EntryState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$FormatSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/FormatSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$WorkspaceShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shell/WorkspaceShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2f$Workspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/workspace/Workspace.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LayahShell() {
    _s();
    const { isWorkspaceActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    if (isWorkspaceActive) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-screen overflow-hidden bg-slate-50 animate-in fade-in duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2f$Workspace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Workspace"], {}, void 0, false, {
                fileName: "[project]/src/components/shell/LayahShell.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shell/LayahShell.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-[#f8f9fa] animate-in fade-in duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$EntryState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntryState"], {}, void 0, false, {
                fileName: "[project]/src/components/shell/LayahShell.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-24 bg-white"
            }, void 0, false, {
                fileName: "[project]/src/components/shell/LayahShell.tsx",
                lineNumber: 24,
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
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shell$2f$WorkspaceShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkspaceShell"], {}, void 0, false, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shell/LayahShell.tsx",
                lineNumber: 26,
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
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500 leading-relaxed",
                                    children: "The easiest way to get work done with files. Fast, private, and AI-powered."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-medium text-slate-900 mb-4",
                                    children: "Formats"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 42,
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
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "opacity-50",
                                            children: "Word"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "opacity-50",
                                            children: "Excel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "opacity-50",
                                            children: "Images"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-medium text-slate-900 mb-4",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 51,
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
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-layah-primary transition-colors",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shell/LayahShell.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-medium text-slate-900 mb-4",
                                    children: "Resources"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 58,
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
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-layah-primary transition-colors",
                                                children: "Privacy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shell/LayahShell.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-layah-primary transition-colors",
                                                children: "Terms"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shell/LayahShell.tsx",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shell/LayahShell.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shell/LayahShell.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shell/LayahShell.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shell/LayahShell.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(LayahShell, "hi2FTCVYwm06ngM8w3C58fmdCI0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$state$2f$app$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = LayahShell;
var _c;
__turbopack_context__.k.register(_c, "LayahShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0vgr_71._.js.map