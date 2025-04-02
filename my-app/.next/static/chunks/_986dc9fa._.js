(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_986dc9fa._.js", {

"[project]/src/components/CharacterForm.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CharacterForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function CharacterForm({ config, onSubmit }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: field.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterForm.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    field.fields.map((subField)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        subField.label,
                                        ": "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CharacterForm.jsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    children: [
                        field.label,
                        ": "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CharacterForm.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: config.title
            }, void 0, false, {
                fileName: "[project]/src/components/CharacterForm.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            config.fields.map((field)=>renderField(field)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(CharacterForm, "CgHqyReD6jKK1NawX+yWoebGi8o=");
_c = CharacterForm;
var _c;
__turbopack_context__.k.register(_c, "CharacterForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/calculos.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "calcularBonus": (()=>calcularBonus)
});
function calcularBonus(atributo) {
    return Math.floor((atributo - 10) / 2);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CharacterSheet.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CharacterSheet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/calculos.js [app-client] (ecmascript)");
;
;
function CharacterSheet({ character, config }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: [
                    config.title,
                    " - Ficha Completa"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            character.atributos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Atributos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 13,
                        columnNumber: 21
                    }, this),
                    Object.entries(character.atributos).map(([KeyboardEvent, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$calculos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcularBonus"])(Number(value)),
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            character.pericias && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Perícias"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    Object.entries(character.pericias).map(([key1, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            character.equipamentos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Equipamentos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, this),
                    Object.entries(character.equipamentos).map(([key1, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            character.habilidades && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Habilidades Especiais"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this),
                    Object.entries(character.habilidades).map(([key1, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
            character.historico && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Histórico"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CharacterSheet.jsx",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>window.print(),
                children: "Imprimir"
            }, void 0, false, {
                fileName: "[project]/src/components/CharacterSheet.jsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c = CharacterSheet;
var _c;
__turbopack_context__.k.register(_c, "CharacterSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/dnd5eConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/vampireConfig.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CharacterForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterSheet$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CharacterSheet.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dnd5eConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dnd5eConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$vampireConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/vampireConfig.js [app-client] (ecmascript)"); //Importe a configuração do sistema Vampire: The Masquerade
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function HomePage() {
    _s();
    const [system, setSystem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dnd5e');
    const [character, setCharacter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
        config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dnd5eConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dnd5eConfig"];
    } else if (system === 'vampire') {
        config = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$vampireConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vampireConfig"]; //Use a configuração do sistema Vampire: The Masquerade
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Criação de Fichas de RPG"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Selecione o Sistema: "
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: system,
                        onChange: handleSystemChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "dnd5e",
                                children: "D&D 5E"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            !character ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                config: config,
                onSubmit: handleCharacterSubmit
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterSheet$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(HomePage, "1oPpQqtqc936kNc9r+RDrZAbUh0=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_986dc9fa._.js.map