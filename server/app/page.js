(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 5505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7560)), "C:\\Users\\Casti\\computacao\\sandra-estetica-e-beleza\\sandra-estetica-e-beleza\\src\\app\\page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4053)), "C:\\Users\\Casti\\computacao\\sandra-estetica-e-beleza\\sandra-estetica-e-beleza\\src\\app\\layout.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      }.children;
const pages = ["C:\\Users\\Casti\\computacao\\sandra-estetica-e-beleza\\sandra-estetica-e-beleza\\src\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 9480:
/***/ (() => {



/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4490);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 7560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/app/components/logo.tsx

function Logo() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        version: "1.0",
        xmlns: "http://www.w3.org/2000/svg",
        width: "50.000000pt",
        height: "50.000000pt",
        viewBox: "0 0 165.000000 86.000000",
        preserveAspectRatio: "xMidYMid meet",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            transform: "translate(0.000000,86.000000) scale(0.100000,-0.100000)",
            fill: "#000000",
            stroke: "none",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M446 845 c-131 -21 -230 -51 -322 -96 -95 -46 -137 -82 -53 -45 30   13 92 36 139 52 83 28 90 29 295 29 198 -1 216 -2 314 -28 211 -57 407 -149   586 -277 98 -69 101 -71 152 -67 52 4 93 27 93 52 0 15 -286 180 -450 259   -204 97 -297 120 -545 130 -81 4 -149 1 -209 -9z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M220 553 c0 -33 47 -118 80 -146 72 -61 121 -77 279 -91 l124 -11 21   -60 c31 -86 66 -108 168 -103 91 4 125 23 148 86 9 22 18 43 21 47 4 3 24 -2   45 -12 94 -43 186 -118 251 -206 19 -26 37 -46 40 -44 2 3 -3 40 -12 83 -23   112 -74 211 -144 277 -134 128 -297 166 -613 145 -219 -15 -293 -6 -400 50 -5   2 -8 -5 -8 -15z"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/page.tsx


function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "min-h-screen w-full relative flex items-center flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Sandra Est\xe9tica e Beleza"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "flex items-center justify-between w-full p-6 text-gray-500 bg-pink-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "flex items-center justify-center gap-12  ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                children: "Servi\xe7os"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                children: "Por que nos escolher"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                children: "Quem somos"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "",
                        children: "Contatos"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-fit p-10 bg-pink-100 py-40 pb-72",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "items-center flex flex-col text-center ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-gray-500 text-5xl ",
                            children: "Sandra Est\xe9tica e Beleza"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-slate-500 mb-12 mt-8 text-xl font-extralight",
                            children: '"Realce sua beleza interior e exterior"'
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-pink-100 w-full flex flex-col p-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col items-center text-center p-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-gray-700 text-2xl",
                            children: "Servi\xe7os"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "m-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-gray-700 text-2xl font-light",
                                children: "Sobrancelha a linha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-700 font-extralight",
                                children: [
                                    "Descubra a arte da defini\xe7\xe3o  de sobrancelhas atrav\xe9s da t\xe9cnica milenar da linha. ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "Dominanamos a arte do threading para criar sobrancelhas impec\xe1veis e elegantes."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "m-12 text-right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-gray-700 text-2xl font-light",
                                children: "Depila\xe7\xe3o com Cera"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-700 font-extralight",
                                children: [
                                    "Do rosto \xe0s pernas e al\xe9m, oferecemos uma depila\xe7\xe3o precisa e cuidadosa ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "que deixa a sua pele incrivelmente macia e livre de pelos por semanas."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "m-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-gray-700 text-2xl font-light",
                                children: "Depila\xe7\xe3o a laser"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-700 font-extralight",
                                children: [
                                    "A depila\xe7\xe3o a laser n\xe3o s\xf3 proporciona uma pele suave e sedosa, mas tamb\xe9m reduz ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "gradualmente o crescimento dos pelos, garantindo uma sensa\xe7\xe3o de frescor e confian\xe7a duradoura. "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "m-12 text-right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-gray-700 text-2xl font-light",
                                children: "Micropigmenta\xe7\xe3o"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-700 font-extralight",
                                children: [
                                    "Descubra a arte da micropigmenta\xe7\xe3o, uma t\xe9cnica refinada que redefine a beleza natural. ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "envolve a aplica\xe7\xe3o cuidadosa de pigmentos de qualidade premium na camada superficial da pele, ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " criando uma apar\xeancia natural e duradoura. "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "m-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-gray-700 text-2xl font-light",
                                children: "Dermaplaning"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-700 font-extralight",
                                children: [
                                    "Explore a suavidade e o brilho da sua pele com a dermaplaning, um tratamento inovador de esfolia\xe7\xe3o. ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "utilizamos uma t\xe9cnica delicada que remove suavemente as camadas superficiais de c\xe9lulas mortas e pelos faciais, ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " revelando uma pele radiante e renovada. "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "m-12 text-right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-gray-700 text-2xl font-light",
                                children: "Limpeza de pele"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-700 font-extralight",
                                children: [
                                    "Revitalize a sua pele com a nossa experi\xeancia de limpeza profunda. Nossa limpeza de pele \xe9 projetada ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "para remover impurezas, desobstruir os poros e proporcionar uma tez fresca e radiante."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "m-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-gray-700 text-2xl font-light",
                                children: "Remo\xe7\xe3o de tatoo e sobrancelha"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-700 font-extralight",
                                children: [
                                    "Oferecemos solu\xe7\xf5es de remo\xe7\xe3o eficazes para trazer um novo come\xe7o \xe0 sua pele. ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "As escolhas de ontem podem n\xe3o refletir o que voc\xea \xe9 hoje, e \xe9 por isso que ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " oferecemos servi\xe7os de remo\xe7\xe3o de tatuagens e sobrancelhas"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col bg-pink-100 text-gray-700 p-32",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center m-12 text-2xl",
                                children: "Quem somos"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-extralight",
                                children: "Nos comprometemos em proporcionar uma experi\xeancia \xfanica de beleza e bem-estar. H\xe1 10 anos, estamos dedicados a real\xe7ar a sua beleza natural e elevar a sua confian\xe7a. Nosso objetivo \xe9 oferecer um ambiente acolhedor e relaxante, onde cada visita seja uma pausa revitalizante da agita\xe7\xe3o do dia a dia. Nossa equipe de profissionais altamente treinados e experientes est\xe1 pronta para oferecer servi\xe7os excepcionais, desde tratamentos de pele de \xfaltima gera\xe7\xe3o at\xe9 servi\xe7os de cuidados com as sobrancelhas e muito mais. Aqui, acreditamos que a beleza vai al\xe9m da superf\xedcie. Buscamos criar uma conex\xe3o pessoal com cada cliente, entendendo suas necessidades individuais e personalizando nossos servi\xe7os para alcan\xe7ar resultados not\xe1veis. Nosso compromisso com a qualidade e a satisfa\xe7\xe3o do cliente \xe9 o que nos diferencia. Obrigado por nos escolher como o seu destino de cuidados com a beleza. Estamos ansiosos para cuidar de voc\xea e ajud\xe1-lo a alcan\xe7ar a sua melhor vers\xe3o. Junte-se a n\xf3s nessa jornada de beleza, autoestima e bem-estar."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col bg-pink-100 text-gray-700 p-32",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center m-12 text-2xl",
                                children: "Porque somos um diferencial"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-extralight",
                                children: "Nossa dedica\xe7\xe3o \xe0 excel\xeancia, nossa paix\xe3o pela beleza e nossa busca incessante por proporcionar uma experi\xeancia excepcional s\xe3o apenas algumas das raz\xf5es pelas quais somos a escolha ideal para os seus cuidados com a beleza. Aqui est\xe3o alguns motivos que nos tornam \xfanicos"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"165x86"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,611], () => (__webpack_exec__(5505)));
module.exports = __webpack_exports__;

})();