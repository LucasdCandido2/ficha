module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/CharacterForm.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CharacterForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function CharacterForm({ config, onSubmit }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Função para atualizar os dados do formulário
    const handleChange = (e, groupName = null, fieldName = null)=>{
        const { name, value } = e.target;
        if (groupName && fieldName) {
            setFormData({
                ...formData,
                [groupName]: {
                    ...formData[groupName] || {},
                    [fieldName]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    // Função para renderizar cada campo com base na configuração
    const renderField = (field)=>{
        if (field.type === 'group') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: field.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterForm.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    field.fields.map((subField)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        subField.label,
                                        ": "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CharacterForm.jsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: subField.type,
                                    name: subField.name,
                                    onChange: (e)=>handleChange(e, field.name, subField.name)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CharacterForm.jsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, subField.name, true, {
                            fileName: "[project]/src/components/CharacterForm.jsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this))
                ]
            }, field.name, true, {
                fileName: "[project]/src/components/CharacterForm.jsx",
                lineNumber: 26,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    children: [
                        field.label,
                        ": "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CharacterForm.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: field.type,
                    name: field.name,
                    min: field.min,
                    onChange: handleChange
                }, void 0, false, {
                    fileName: "[project]/src/components/CharacterForm.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, field.name, true, {
            fileName: "[project]/src/components/CharacterForm.jsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: config.title
            }, void 0, false, {
                fileName: "[project]/src/components/CharacterForm.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            config.fields.map((field)=>renderField(field)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                children: "Criar Ficha"
            }, void 0, false, {
                fileName: "[project]/src/components/CharacterForm.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CharacterForm.jsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/utils/calculos.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calcularBonus": (()=>calcularBonus)
});
function calcularBonus(atributo) {
    return Math.floor((atributo - 10) / 2);
}
}}),
"[project]/src/components/CharacterSheet.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CharacterSheet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculos.js [app-ssr] (ecmascript)");
;
;
function CharacterSheet({ character, config }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: [
                    config.title,
                    " - Ficha Completa"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Nome:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 7,
                        columnNumber: 16
                    }, this),
                    " ",
                    character.nomePersonagem
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Raça:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 8,
                        columnNumber: 16
                    }, this),
                    " ",
                    character.raca
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Classe:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 9,
                        columnNumber: 16
                    }, this),
                    " ",
                    character.classe
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Nivel:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 10,
                        columnNumber: 16
                    }, this),
                    " ",
                    character.nivel
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            character.atributos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Atributos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this),
                    Object.entries(character.atributos).map(([KeyboardEvent, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        key.charAt(0).toUpperCase() + key.slice(1),
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CharacterSheet.jsx",
                                    lineNumber: 16,
                                    columnNumber: 29
                                }, this),
                                " ",
                                value,
                                " (Bônus: ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcularBonus"])(Number(value)),
                                ")"
                            ]
                        }, key, true, {
                            fileName: "[project]/src/components/CharacterSheet.jsx",
                            lineNumber: 15,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 12,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Pontos de Vida:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 21,
                        columnNumber: 16
                    }, this),
                    " ",
                    character.pontosVida
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Nivel de Magia:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 22,
                        columnNumber: 16
                    }, this),
                    " ",
                    character.nivelMagia
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            character.pericias && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Perícias"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    Object.entries(character.pericias).map(([key1, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        key1.charAt(0).toUpperCase() + key1.slice(1),
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CharacterSheet.jsx",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, this),
                                " ",
                                value ? 'Sim' : 'Não'
                            ]
                        }, key1, true, {
                            fileName: "[project]/src/components/CharacterSheet.jsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 24,
                columnNumber: 17
            }, this),
            character.equipamentos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Equipamentos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this),
                    Object.entries(character.equipamentos).map(([key1, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        key1.charAt(0).toUpperCase() + key1.slice(1),
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CharacterSheet.jsx",
                                    lineNumber: 38,
                                    columnNumber: 29
                                }, this),
                                " ",
                                value
                            ]
                        }, key1, true, {
                            fileName: "[project]/src/components/CharacterSheet.jsx",
                            lineNumber: 37,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 34,
                columnNumber: 17
            }, this),
            character.habilidades && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Habilidades Especiais"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this),
                    Object.entries(character.habilidades).map(([key1, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        key1.charAt(0).toUpperCase() + key1.slice(1),
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CharacterSheet.jsx",
                                    lineNumber: 48,
                                    columnNumber: 29
                                }, this),
                                " ",
                                value
                            ]
                        }, key1, true, {
                            fileName: "[project]/src/components/CharacterSheet.jsx",
                            lineNumber: 47,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 44,
                columnNumber: 17
            }, this),
            character.historico && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Histórico"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: character.historico
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 54,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>window.print(),
                children: "Imprimir"
            }, void 0, false, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>window.location.reload(),
                children: "Novo Personagem"
            }, void 0, false, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CharacterSheet.jsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/data/dnd5eConfig.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "dnd5eConfig": (()=>dnd5eConfig)
});
const dnd5eConfig = {
    title: 'Ficha de Personagem D&D 5E',
    fields: [
        {
            name: 'nomePersonagem',
            label: 'Nome do Personagem',
            type: 'text'
        },
        {
            name: 'raca',
            label: 'Raça',
            type: 'text'
        },
        {
            name: 'classe',
            label: 'Classe',
            type: 'text'
        },
        {
            name: 'nivel',
            label: 'Nivel',
            type: 'number',
            min: 1
        },
        {
            name: 'atributos',
            label: 'Atributos',
            type: 'group',
            fields: [
                {
                    name: 'forca',
                    label: 'Força',
                    type: 'number',
                    min: 1
                },
                {
                    name: 'destreza',
                    label: 'Destreza',
                    type: 'number',
                    min: 1
                },
                {
                    name: 'constituicao',
                    label: 'Constituição',
                    type: 'number',
                    min: 1
                },
                {
                    name: 'inteligencia',
                    label: 'Inteligência',
                    type: 'number',
                    min: 1
                },
                {
                    name: 'sabedoria',
                    label: 'Sabedoria',
                    type: 'number',
                    min: 1
                },
                {
                    name: 'carisma',
                    label: 'Carisma',
                    type: 'number',
                    min: 1
                }
            ]
        },
        {
            name: 'pontosVida',
            label: 'Pontos de Vida',
            type: 'number',
            min: 1
        },
        {
            name: 'nivelMagia',
            label: 'Nivel de Magia',
            type: 'number',
            min: 1
        },
        {
            name: 'pericias',
            label: 'Perícias',
            type: 'group',
            fields: [
                {
                    name: 'atletismo',
                    label: 'Atletismo',
                    type: 'checkbox'
                },
                {
                    name: 'acrobacia',
                    label: 'Acrobacia',
                    type: 'checkbox'
                },
                {
                    name: 'furtividade',
                    label: 'Furtividade',
                    type: 'checkbox'
                },
                {
                    name: 'percepcao',
                    label: 'Percepção',
                    type: 'checkbox'
                },
                {
                    name: 'intimidacao',
                    label: 'Intimidação',
                    type: 'checkbox'
                },
                {
                    name: 'enganacao',
                    label: 'Enganação',
                    type: 'checkbox'
                }
            ]
        },
        {
            name: 'equipamentos',
            label: 'Equipamentos',
            type: 'group',
            fields: [
                {
                    name: 'armas',
                    label: 'Armas',
                    type: 'text'
                },
                {
                    name: 'armaduras',
                    label: 'Armaduras',
                    type: 'text'
                },
                {
                    name: 'itens',
                    label: 'Itens',
                    type: 'text'
                }
            ]
        },
        {
            name: 'habilidades',
            label: 'Habilidades Especiais',
            type: 'group',
            fields: [
                {
                    name: 'habilidade1',
                    label: 'Habilidade 1',
                    type: 'text'
                },
                {
                    name: 'habilidade2',
                    label: 'Habilidade 2',
                    type: 'text'
                },
                {
                    name: 'habilidade3',
                    label: 'Habilidade 3',
                    type: 'text'
                }
            ]
        },
        {
            name: 'historico',
            label: 'Histórico',
            type: 'textarea'
        }
    ]
};
}}),
"[project]/src/data/vampireConfig.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
//src/data/vampireConfig.js
__turbopack_context__.s({
    "vampireConfig": (()=>vampireConfig)
});
const vampireConfig = {
    title: 'Ficha de Personagem - Vampire: The Masquerade',
    fields: [
        {
            name: 'nomePersonagem',
            label: 'Nome do Personagem',
            type: 'text'
        },
        {
            name: 'jogador',
            label: 'Nome do Jogador',
            type: 'text'
        },
        {
            name: 'clan',
            label: 'Clã',
            type: 'text'
        },
        {
            name: 'natureza',
            label: 'Natureza',
            type: 'text'
        },
        {
            name: 'comportamento',
            label: 'Comportamento',
            type: 'text'
        },
        {
            name: 'geracao',
            label: 'Geração',
            type: 'number',
            min: 1
        },
        //Atributos - Vampire trabalha com tres grupos de atributos: Físicos, Sociais e Mentais
        {
            name: 'atributosFisicos',
            label: 'Atributos Fisicos',
            type: 'group',
            fields: [
                {
                    name: 'forca',
                    label: 'Força',
                    type: 'Number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'destreza',
                    label: 'Destreza',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'vigor',
                    label: 'Vigor',
                    type: 'number',
                    min: 1,
                    max: 5
                }
            ]
        },
        {
            name: 'atributosSociais',
            label: 'Atributos Sociais',
            type: 'group',
            fields: [
                {
                    name: 'carisma',
                    label: 'Carisma',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'manipulacao',
                    label: 'Manipulação',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'aparencia',
                    label: 'Aparência',
                    type: 'number',
                    min: 1,
                    max: 5
                }
            ]
        },
        {
            name: 'atributosMentais',
            label: 'Atributos Mentais',
            type: 'group',
            fields: [
                {
                    name: 'percepcao',
                    label: 'Percepção',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'inteligencia',
                    label: 'Inteligência',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'raciocinio',
                    label: 'Raciocínio',
                    type: 'number',
                    min: 1,
                    max: 5
                }
            ]
        },
        //Habilidades - Vampire trabalha com tres grupos, de habilidades: Talentos, Perícias e Conhecimentos
        {
            name: 'talentos',
            label: 'Talentos',
            type: 'group',
            fields: [
                {
                    name: 'esportes',
                    label: 'Esportes',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'luta',
                    label: 'Luta',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'briga',
                    label: 'Briga',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'lideranca',
                    label: 'Liderança',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'intimidacao',
                    label: 'Intimidação',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'empatia',
                    label: 'Empatia',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'persuasao',
                    label: 'Persuasão',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'subterfugio',
                    label: 'Subterfúgio',
                    type: 'number',
                    min: 1,
                    max: 5
                }
            ]
        },
        {
            name: 'habilidades',
            label: 'Habilidades',
            type: 'group',
            fields: [
                {
                    name: 'armasBrancas',
                    label: 'Armas Brancas',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'armasDeFogo',
                    label: 'Armas de Fogo',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'furtividade',
                    label: 'Furtividade',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'sobrevivencia',
                    label: 'Sobrevivência',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'conducao',
                    label: 'Condução',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'manipulacaoDeObjetos',
                    label: 'Manipulação de Objetos',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'oficiosManuais',
                    label: 'Ofícios Manuais',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologia',
                    label: 'Tecnologia',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'computador',
                    label: 'Computador',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'conhecimentoEspecifico',
                    label: 'Conhecimento Específico',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'conhecimentoGeral',
                    label: 'Conhecimento Geral',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'linguistica',
                    label: 'Linguística',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'educacao',
                    label: 'Educação',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'direito',
                    label: 'Direito',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'politica',
                    label: 'Política',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'financas',
                    label: 'Finanças',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'etica',
                    label: 'Ética',
                    type: 'number',
                    min: 1,
                    max: 5
                }
            ]
        },
        {
            name: 'conhecimentos',
            label: 'Conhecimentos',
            type: 'group',
            fields: [
                {
                    name: 'ciencias',
                    label: 'Ciências',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'humanas',
                    label: 'Humanas',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'naturais',
                    label: 'Naturais',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'sociais',
                    label: 'Sociais',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaAvancada',
                    label: 'Tecnologia Avançada',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaComum',
                    label: 'Tecnologia Comum',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaAntiga',
                    label: 'Tecnologia Antiga',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaFuturista',
                    label: 'Tecnologia Futurista',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaAlienigena',
                    label: 'Tecnologia Alienígena',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaMagica',
                    label: 'Tecnologia Mágica',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaPsicologica',
                    label: 'Tecnologia Psicológica',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaBiologica',
                    label: 'Tecnologia Biológica',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaQuimica',
                    label: 'Tecnologia Química',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaFisica',
                    label: 'Tecnologia Física',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tecnologiaMatematica',
                    label: 'Tecnologia Matemática',
                    type: 'number',
                    min: 1,
                    max: 5
                }
            ]
        },
        {
            name: 'disciplinas',
            label: 'Disciplinas',
            type: 'group',
            fields: [
                {
                    name: 'disciplina1',
                    label: 'Disciplina 1',
                    type: 'text'
                },
                {
                    name: 'disciplina2',
                    label: 'Disciplina 2',
                    type: 'text'
                },
                {
                    name: 'disciplina3',
                    label: 'Disciplina 3',
                    type: 'text'
                }
            ]
        },
        {
            name: 'virtudes',
            label: 'Virtudes',
            type: 'group',
            fields: [
                {
                    name: 'honestidade',
                    label: 'Honestidade',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'justica',
                    label: 'Justiça',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'coragem',
                    label: 'Coragem',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'lealdade',
                    label: 'Lealdade',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'compreensao',
                    label: 'Compreensão',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'responsabilidade',
                    label: 'Responsabilidade',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'bondade',
                    label: 'Bondade',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'sabedoria',
                    label: 'Sabedoria',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'humildade',
                    label: 'Humildade',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'perdao',
                    label: 'Perdão',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'tolerancia',
                    label: 'Tolerância',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'comunicacao',
                    label: 'Comunicação',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'empatia',
                    label: 'Empatia',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'generosidade',
                    label: 'Generosidade',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'respeito',
                    label: 'Respeito',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'honra',
                    label: 'Honra',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'integridade',
                    label: 'Integridade',
                    type: 'number',
                    min: 1,
                    max: 5
                },
                {
                    name: 'fidelidade',
                    label: 'Fidelidade',
                    type: 'number',
                    min: 1,
                    max: 5
                }
            ]
        },
        {
            name: 'defeitos',
            label: 'Defeitos',
            type: 'group',
            fields: [
                {
                    name: 'defeito1',
                    label: 'Defeito 1',
                    type: 'text'
                },
                {
                    name: 'defeito2',
                    label: 'Defeito 2',
                    type: 'text'
                },
                {
                    name: 'defeito3',
                    label: 'Defeito 3',
                    type: 'text'
                }
            ]
        },
        {
            name: 'pontosSangue',
            label: 'Pontos de Sangue',
            type: 'number',
            min: 0
        },
        {
            name: 'pontosVitae',
            label: 'Pontos de Vitae',
            type: 'number',
            min: 0
        },
        {
            name: 'pontosDeExperiencia',
            label: 'Pontos de Experiência',
            type: 'number',
            min: 0
        },
        {
            name: 'historico',
            label: 'Histórico',
            type: 'textarea'
        },
        {
            name: 'observacoes',
            label: 'Observações',
            type: 'textarea'
        },
        {
            name: 'imagem',
            label: 'Imagem do Personagem',
            type: 'file'
        },
        {
            name: 'dataCriacao',
            label: 'Data de Criação',
            type: 'date'
        },
        {
            name: 'dataAtualizacao',
            label: 'Data de Atualização',
            type: 'date'
        },
        {
            name: 'status',
            label: 'Status',
            type: 'select',
            options: [
                'Ativo',
                'Inativo'
            ]
        }
    ]
};
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CharacterForm.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterSheet$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CharacterSheet.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dnd5eConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dnd5eConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$vampireConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/vampireConfig.js [app-ssr] (ecmascript)"); //Importe a configuração do sistema Vampire: The Masquerade
'use client';
;
;
;
;
;
;
function HomePage() {
    const [system, setSystem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dnd5e');
    const [character, setCharacter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSystemChange = (e)=>{
        setCharacter(null);
        setSystem(e.target.value);
    };
    const handleCharacterSubmit = (data)=>{
        setCharacter(data);
    };
    //Seleciona a configuração baseada no sistema escolhido
    let config = {};
    if (system === 'dnd5e') {
        config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dnd5eConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dnd5eConfig"];
    } else if (system === 'vampire') {
        config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$vampireConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vampireConfig"]; //Use a configuração do sistema Vampire: The Masquerade
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Criação de Fichas de RPG"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Selecione o Sistema: "
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: system,
                        onChange: handleSystemChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "dnd5e",
                                children: "D&D 5E"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "vampire",
                                children: "Vampire: The Masquerade"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            !character ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterForm$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                config: config,
                onSubmit: handleCharacterSubmit
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterSheet$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                character: character,
                config: config
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__036a25a8._.js.map