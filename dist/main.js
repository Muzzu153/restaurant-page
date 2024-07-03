/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/contactUs.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/contactUs.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  line-height: 1.2;
}

#wrapper {
  margin: auto;
}

#contact-us {
  width: min(85%, 60rem);
  display: flex;
  margin: 2rem auto;
  position: relative;
  border: white 2px solid;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.59);
  border-radius: 10px 0px 10px 0px;
  border: 5px solid white;
  padding: 1rem;

  .info-div{
    display: flex;
    margin: 0.5rem;
    /* padding: 0.5rem; */

    img{
      display: inline;
      width: 20px;
    }
  }

  #staff-members{
    margin: 2rem auto 0 auto;
    /* border: 5px solid rgb(255, 0, 0); */
    /* width: 40rem; */
    /* display: grid; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */

      .staff-info {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: auto;
        /* border: 2px solid black; */
        /* background: wheat; */
        img {
          border-radius: 5%;
          width: 50%;
          /* height: 50%; */
          border: 2px solid black;
          margin: auto;
        }

        .staff-name{
          margin: auto;
        }
      }
  }

}

#contact-us::before {
  content: "";
  position: absolute;
  display: block;
  top: -15px;
  bottom: -15px;
  right: -15px;
  left: -15px;
  /* background-color: var(--black); */
  border: 5px solid white;
  border-radius: 15px 0px 15px 0px;
}
`, "",{"version":3,"sources":["webpack://./src/css/contactUs.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;EACtB,qCAAqC;EACrC,gCAAgC;EAChC,uBAAuB;EACvB,aAAa;;EAEb;IACE,aAAa;IACb,cAAc;IACd,qBAAqB;;IAErB;MACE,eAAe;MACf,WAAW;IACb;EACF;;EAEA;IACE,wBAAwB;IACxB,sCAAsC;IACtC,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,2DAA2D;IAC3D,sBAAsB;IACtB,6BAA6B;IAC7B,yBAAyB;;MAEvB;QACE,aAAa;QACb,sBAAsB;QACtB,UAAU;QACV,YAAY;QACZ,6BAA6B;QAC7B,uBAAuB;QACvB;UACE,iBAAiB;UACjB,UAAU;UACV,iBAAiB;UACjB,uBAAuB;UACvB,YAAY;QACd;;QAEA;UACE,YAAY;QACd;MACF;EACJ;;AAEF;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,UAAU;EACV,aAAa;EACb,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,uBAAuB;EACvB,gCAAgC;AAClC","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n}\n\n#wrapper {\n  margin: auto;\n}\n\n#contact-us {\n  width: min(85%, 60rem);\n  display: flex;\n  margin: 2rem auto;\n  position: relative;\n  border: white 2px solid;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.59);\n  border-radius: 10px 0px 10px 0px;\n  border: 5px solid white;\n  padding: 1rem;\n\n  .info-div{\n    display: flex;\n    margin: 0.5rem;\n    /* padding: 0.5rem; */\n\n    img{\n      display: inline;\n      width: 20px;\n    }\n  }\n\n  #staff-members{\n    margin: 2rem auto 0 auto;\n    /* border: 5px solid rgb(255, 0, 0); */\n    /* width: 40rem; */\n    /* display: grid; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    flex-direction: column;\n    /* justify-content: center; */\n    /* align-items: center; */\n\n      .staff-info {\n        display: flex;\n        flex-direction: column;\n        width: 50%;\n        margin: auto;\n        /* border: 2px solid black; */\n        /* background: wheat; */\n        img {\n          border-radius: 5%;\n          width: 50%;\n          /* height: 50%; */\n          border: 2px solid black;\n          margin: auto;\n        }\n\n        .staff-name{\n          margin: auto;\n        }\n      }\n  }\n\n}\n\n#contact-us::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: -15px;\n  bottom: -15px;\n  right: -15px;\n  left: -15px;\n  /* background-color: var(--black); */\n  border: 5px solid white;\n  border-radius: 15px 0px 15px 0px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#header {
    background: var(--white);
    position: relative;
    margin-top: 1.5rem;
    z-index: 100;
    padding: 0.8rem;
    color: var(--navFontColor);
  
    .navbar {
      display: flex;
      justify-content: space-around;
      max-width: 100rem;
      margin: auto;
  
      button {
        border: var(--white);
        background: none;
        font-weight: bolder;
        font-size: 1.5rem;
        padding: 0.8rem 1.2rem;
        border-bottom: 2px solid transparent;
      }
  
      button:hover{
        border-bottom: var(--black) groove 2px;
      }
  
      button:active, button:focus {
        background-color: var(--black);
        border-bottom: var(--black) groove 2px;
        color: var(--white);
        transition: 0.2s;
      }
    }
  }`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,0BAA0B;;IAE1B;MACE,aAAa;MACb,6BAA6B;MAC7B,iBAAiB;MACjB,YAAY;;MAEZ;QACE,oBAAoB;QACpB,gBAAgB;QAChB,mBAAmB;QACnB,iBAAiB;QACjB,sBAAsB;QACtB,oCAAoC;MACtC;;MAEA;QACE,sCAAsC;MACxC;;MAEA;QACE,8BAA8B;QAC9B,sCAAsC;QACtC,mBAAmB;QACnB,gBAAgB;MAClB;IACF;EACF","sourcesContent":["#header {\n    background: var(--white);\n    position: relative;\n    margin-top: 1.5rem;\n    z-index: 100;\n    padding: 0.8rem;\n    color: var(--navFontColor);\n  \n    .navbar {\n      display: flex;\n      justify-content: space-around;\n      max-width: 100rem;\n      margin: auto;\n  \n      button {\n        border: var(--white);\n        background: none;\n        font-weight: bolder;\n        font-size: 1.5rem;\n        padding: 0.8rem 1.2rem;\n        border-bottom: 2px solid transparent;\n      }\n  \n      button:hover{\n        border-bottom: var(--black) groove 2px;\n      }\n  \n      button:active, button:focus {\n        background-color: var(--black);\n        border-bottom: var(--black) groove 2px;\n        color: var(--white);\n        transition: 0.2s;\n      }\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/UVN-Co-dien/UVN Co Dien Bold.woff2 */ "./src/fonts/UVN-Co-dien/UVN Co Dien Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/UVN-Co-dien/UVN Co Dien Bold.woff */ "./src/fonts/UVN-Co-dien/UVN Co Dien Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2 */ "./src/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff */ "./src/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --white: rgb(255, 255, 255);
  --black: rgb(0, 0, 0);
  --mainFontColor: rgb(0, 0, 0);
  --navFontColor: rgb(0, 0, 0);
}

@font-face {
  font-family: "UVN-Co-dien";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
  font-family: "IBMPlexMono";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}),
    url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  line-height: 1.2;
  background: #66524a;
}

#wrapper {
  margin: auto;
}

#main {
  width: min(85%, 60rem);
  color: var(--mainFontColor);
  position: relative;
  padding-bottom: 3rem;
  margin: 5rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.59);
  border-radius: 10px 0px 10px 0px;
  border: 5px solid var(--white);

  .staffImg {
    margin: auto;
    min-height: 9.375em;
    border: 0.3rem solid black;
    width: min(50rem, 85%);
    border-radius: 2%;
  }

  #name {
    margin-top: 1rem;
    padding-bottom: 2rem;
    padding-top: 0.5rem;
    text-align: center;

    #japName {
      font-size: 3rem;
    }

    #engName {
      font-size: 1.7rem;
      font-weight: bold;
    }
  }

  #about {
    width: min(90%, 50rem);
    text-align: center;
    margin: 2rem auto 0 auto;

    #description {
      text-align: center;
    }
  }
}

#main::before {
  content: "";
  position: absolute;
  display: block;
  top: -15px;
  bottom: -15px;
  right: -15px;
  left: -15px;
  /* background-color: var(--black); */
  border: 5px solid var(--white);
  border-radius: 15px 0px 15px 0px;
}
`, "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,0BAA0B;EAC1B;2CACsD;AACxD;;AAEA;EACE,0BAA0B;EAC1B;2CACwD;AAC1D;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,qCAAqC;EACrC,gCAAgC;EAChC,8BAA8B;;EAE9B;IACE,YAAY;IACZ,mBAAmB;IACnB,0BAA0B;IAC1B,sBAAsB;IACtB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;;IAElB;MACE,eAAe;IACjB;;IAEA;MACE,iBAAiB;MACjB,iBAAiB;IACnB;EACF;;EAEA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,wBAAwB;;IAExB;MACE,kBAAkB;IACpB;EACF;AACF;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,UAAU;EACV,aAAa;EACb,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,8BAA8B;EAC9B,gCAAgC;AAClC","sourcesContent":[":root {\n  --white: rgb(255, 255, 255);\n  --black: rgb(0, 0, 0);\n  --mainFontColor: rgb(0, 0, 0);\n  --navFontColor: rgb(0, 0, 0);\n}\n\n@font-face {\n  font-family: \"UVN-Co-dien\";\n  src: url(\"../fonts/UVN-Co-dien/UVN\\ Co\\ Dien\\ Bold.woff2\"),\n    url(\"../fonts/UVN-Co-dien/UVN\\ Co\\ Dien\\ Bold.woff\");\n}\n\n@font-face {\n  font-family: \"IBMPlexMono\";\n  src: url(\"../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2\"),\n    url(\"../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff\");\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n  background: #66524a;\n}\n\n#wrapper {\n  margin: auto;\n}\n\n#main {\n  width: min(85%, 60rem);\n  color: var(--mainFontColor);\n  position: relative;\n  padding-bottom: 3rem;\n  margin: 5rem auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  background: rgba(255, 255, 255, 0.59);\n  border-radius: 10px 0px 10px 0px;\n  border: 5px solid var(--white);\n\n  .staffImg {\n    margin: auto;\n    min-height: 9.375em;\n    border: 0.3rem solid black;\n    width: min(50rem, 85%);\n    border-radius: 2%;\n  }\n\n  #name {\n    margin-top: 1rem;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    text-align: center;\n\n    #japName {\n      font-size: 3rem;\n    }\n\n    #engName {\n      font-size: 1.7rem;\n      font-weight: bold;\n    }\n  }\n\n  #about {\n    width: min(90%, 50rem);\n    text-align: center;\n    margin: 2rem auto 0 auto;\n\n    #description {\n      text-align: center;\n    }\n  }\n}\n\n#main::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: -15px;\n  bottom: -15px;\n  right: -15px;\n  left: -15px;\n  /* background-color: var(--black); */\n  border: 5px solid var(--white);\n  border-radius: 15px 0px 15px 0px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2 */ "./src/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff */ "./src/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "IBMPlexMono";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  line-height: 1.2;
  /* background: ; */
}

#wrapper {
  margin: auto;
}

/* #background-menu {
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-image: url("../images/menu-bg2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
} */

#menu-div {
  width: min(90%, 60rem);
  position: relative;
  background: rgba(255, 255, 255, 0.59);
  padding: 1rem;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  border-radius: 10px 0px 10px 0px;
  /* border: 5px solid rgb(255, 255, 255); */
}

.single-dish {
  /* background: rgb(0, 0, 0); */
  margin: 1rem;
  width: 90%;
  display: flex;
  padding: 1.5rem;
  border-radius: 8px 0px 8px 0px;
  /* border-radius: 5%; */
  /* border: 2px solid white; */

  .dish-image{
    width: 50%;
    border: 2px solid white;
    border-radius: 8px 0px 8px 0px;
  }

  .dish-info{
    text-align: center ;
    display: block;
    margin: auto;
    /* color: rgb(255, 255, 255); */

    .dish-price{
      margin-top: 1rem;
      /* color: white; */
      background: goldenrod;
      width: 50%;
      padding: 0.6rem;
      margin: 1rem auto;

    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B;2CACwD;AAC1D;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;;;;;;;;;;;GAWG;;AAEH;EACE,sBAAsB;EACtB,kBAAkB;EAClB,qCAAqC;EACrC,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,2DAA2D;EAC3D,gCAAgC;EAChC,0CAA0C;AAC5C;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,UAAU;EACV,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,uBAAuB;EACvB,6BAA6B;;EAE7B;IACE,UAAU;IACV,uBAAuB;IACvB,8BAA8B;EAChC;;EAEA;IACE,mBAAmB;IACnB,cAAc;IACd,YAAY;IACZ,+BAA+B;;IAE/B;MACE,gBAAgB;MAChB,kBAAkB;MAClB,qBAAqB;MACrB,UAAU;MACV,eAAe;MACf,iBAAiB;;IAEnB;EACF;AACF","sourcesContent":["@font-face {\n  font-family: \"IBMPlexMono\";\n  src: url(\"../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2\"),\n    url(\"../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff\");\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.6rem;\n  line-height: 1.2;\n  /* background: ; */\n}\n\n#wrapper {\n  margin: auto;\n}\n\n/* #background-menu {\n  display: flex;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"../images/menu-bg2.png\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n} */\n\n#menu-div {\n  width: min(90%, 60rem);\n  position: relative;\n  background: rgba(255, 255, 255, 0.59);\n  padding: 1rem;\n  margin: 2rem auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));\n  border-radius: 10px 0px 10px 0px;\n  /* border: 5px solid rgb(255, 255, 255); */\n}\n\n.single-dish {\n  /* background: rgb(0, 0, 0); */\n  margin: 1rem;\n  width: 90%;\n  display: flex;\n  padding: 1.5rem;\n  border-radius: 8px 0px 8px 0px;\n  /* border-radius: 5%; */\n  /* border: 2px solid white; */\n\n  .dish-image{\n    width: 50%;\n    border: 2px solid white;\n    border-radius: 8px 0px 8px 0px;\n  }\n\n  .dish-info{\n    text-align: center ;\n    display: block;\n    margin: auto;\n    /* color: rgb(255, 255, 255); */\n\n    .dish-price{\n      margin-top: 1rem;\n      /* color: white; */\n      background: goldenrod;\n      width: 50%;\n      padding: 0.6rem;\n      margin: 1rem auto;\n\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/contactUs.css":
/*!*******************************!*\
  !*** ./src/css/contactUs.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contactUs_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contactUs.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/contactUs.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contactUs_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contactUs_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contactUs_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contactUs_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/header.css":
/*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/home.css":
/*!**************************!*\
  !*** ./src/css/home.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/firstLoad.js":
/*!**********************************!*\
  !*** ./src/modules/firstLoad.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ firstLoad)
/* harmony export */ });
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home.js */ "./src/pages/home.js");

// import { header } from "./header.js";

function firstLoad(){
    // mainContent();
    // createHomeMain();
    (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
}

// export default firstLoad;



/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/header.css */ "./src/css/header.css");


function createHeader() {
  
    const headerDiv = document.createElement("header"); // header direct child to warpper containign name and navBar
    headerDiv.setAttribute("id", "header");
  
    const navBar = document.createElement("div"); //navBar containing navigation of home, menu and contactUs
    navBar.classList.add("navbar");
  
    headerDiv.append(navBar);
  
    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const contactUsButtton = document.createElement("button");

    homeButton.setAttribute("id", "home-btn")
    menuButton.setAttribute("id","menu-btn")
    contactUsButtton.setAttribute("id","contactUs-btn")
  
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactUsButtton.textContent = "Contact Us";
  
    navBar.append(homeButton, menuButton, contactUsButtton);
  
    return headerDiv;
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);



/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/modules/header.js");

const renderPage = () => {
    const wrapper = document.getElementById("wrapper")
    while(wrapper.hasChildNodes()){
        wrapper.removeChild(wrapper.firstChild)
    }
    return wrapper
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);


/***/ }),

/***/ "./src/pages/contactUs.js":
/*!********************************!*\
  !*** ./src/pages/contactUs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_contactUs_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/contactUs.css */ "./src/css/contactUs.css");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/header */ "./src/modules/header.js");
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/location.png */ "./src/images/location.png");
/* harmony import */ var _images_clock_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/clock.png */ "./src/images/clock.png");
/* harmony import */ var _images_email_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/email.png */ "./src/images/email.png");
/* harmony import */ var _images_phone_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/phone.png */ "./src/images/phone.png");
/* harmony import */ var _images_senshi_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/senshi.jpg */ "./src/images/senshi.jpg");
/* harmony import */ var _images_laios_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/laios.jpg */ "./src/images/laios.jpg");
/* harmony import */ var _images_marcille_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/marcille.jpg */ "./src/images/marcille.jpg");
/* harmony import */ var _images_chilchuck_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/chilchuck.jpg */ "./src/images/chilchuck.jpg");
/* harmony import */ var _images_izutsumi_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/izutsumi.png */ "./src/images/izutsumi.png");












// const createForm = () =>{
//     const form = document.createElement("form");

//     const formControls = document.createElement("div");

//     const fullNameDIv = document.createElement("div");
//     const fullNameLabel = document.createElement("label");
//     const customerFullName = document.createElement("input")
//     customerFullName.setAttribute("type", "input")

//     const emailDiv = document.createElement("div");
//     const emailLabel = document.createElement("label");
//     const customerEmail = document.createElement("input")
//     customerEmail.setAttribute("type", "email");
// }

const Staff = () => {
  const staffArray = [
    {
      name: "Senshi",
      src: _images_senshi_jpg__WEBPACK_IMPORTED_MODULE_6__,
    },
    {
      name: "Laios",
      src: _images_laios_jpg__WEBPACK_IMPORTED_MODULE_7__,
    },
    {
      name: "Marcille",
      src: _images_marcille_jpg__WEBPACK_IMPORTED_MODULE_8__,
    },
    {
      name: "Chilchuck",
      src: _images_chilchuck_jpg__WEBPACK_IMPORTED_MODULE_9__,
    },
    {
      name: "Izutsumi",
      src: _images_izutsumi_png__WEBPACK_IMPORTED_MODULE_10__,
    },
  ];

  const getStaff = () => {
    return staffArray;
  };

  const createStaffList = (div) => {
    for (let el of staffArray) {
      const staffInfo = document.createElement("div");
      const staffName = document.createElement("div");
      const staffImg = new Image();

      staffInfo.classList.add("staff-info");
      staffName.classList.add("staff-name");

      // staffInfo.setAttribute("id", `${el.name.}`)

      staffName.textContent = el.name;
      staffImg.src = el.src;
      staffInfo.append(staffImg, staffName);

      div.appendChild(staffInfo);
    }
    return div;
  };

  return { getStaff, createStaffList };
};

const createContactUS = () => {
  const { createStaffList } = Staff();
  // const staffList = getStaff();

  const infoArray = [
    { name: "The ever changing dungeon", icon: _images_location_png__WEBPACK_IMPORTED_MODULE_2__ },
    { name: "Open 24x7", icon: _images_clock_png__WEBPACK_IMPORTED_MODULE_3__ },
    { name: "(222)-888 5555", icon: _images_phone_png__WEBPACK_IMPORTED_MODULE_5__ },
    { name: "Message us", icon: _images_email_png__WEBPACK_IMPORTED_MODULE_4__ },
  ];

  const contactUsDiv = document.createElement("main");
  contactUsDiv.setAttribute("id", "contact-us");

  // const locationDiv = document.createElement("div");
  // locationDiv.setAttribute("id", "location-div");
  // locationDiv.classList.add("info-div");
  // const location = document.createElement("div");
  // location.textContent = "The ever changing Dungeon";
  // const locationIcon = new Image();
  // locationIcon.src = locationImg;
  // locationDiv.append(locationIcon, location);

  // const timingDiv = document.createElement("div");
  // timingDiv.setAttribute("id", "timing-div");
  // timingDiv.classList.add("info-div");
  // const timingIcon = new Image();
  // timingIcon.src = clockImg;
  // const timings = document.createElement("div");
  // timings.textContent = "Open 24x7";
  // timingDiv.append(timingIcon, timings);

  // const contactNbrDiv = document.createElement("div");
  // contactNbrDiv.setAttribute("id", "contact-nbr-div");
  // contactNbrDiv.classList.add("info-div");
  // const contactNbrIcon = new Image();
  // contactNbrIcon.src = phoneImg;
  // const contactNumber = document.createElement("div");
  // contactNumber.textContent = "(222)-888 5555";
  // contactNbrDiv.append(contactNbrIcon, contactNumber);

  // const emailUsDiv = document.createElement("div");
  // emailUsDiv.setAttribute("id", "email-us-div");
  // emailUsDiv.classList.add("info-div");
  // const emailUsIcon = new Image();
  // emailUsIcon.src = emailImg;
  // const emailUs = document.createElement("div");
  // emailUs.textContent = "Message Us";
  // emailUsDiv.append(emailUsIcon, emailUs);

  const staffTitle = document.createElement("div");
  staffTitle.textContent = "Our staff members";

  const createInfoDiv = (div) => {
    for (let el of infoArray) {
      const infoDiv = document.createElement("div");
      const infoContent = document.createElement("div");
      const infoIcon = new Image();
      // const eachElementDiv = document.createElement("div")

      infoIcon.src = el.icon;
      infoContent.textContent = el.name;

      infoDiv.classList.add("info-div");
      infoDiv.append(infoIcon, infoContent);
      div.append(infoDiv);
    }
    return div;
  };

  // contactUsDiv.append()
  const staffMembers = document.createElement("div");
  staffMembers.setAttribute("id", "staff-members");

  createInfoDiv(contactUsDiv);

  createStaffList(staffMembers);

  contactUsDiv.append(staffTitle, staffMembers);
  return contactUsDiv;
};

const loadContactUS = () => {
  // createStaffList(staffList, contactUsDiv);
  const wrapper = document.getElementById("wrapper");

  wrapper.append((0,_modules_header__WEBPACK_IMPORTED_MODULE_1__["default"])(), createContactUS());

  return wrapper;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactUS);


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/home.css */ "./src/css/home.css");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/header */ "./src/modules/header.js");
/* harmony import */ var _images_staffImg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/staffImg.png */ "./src/images/staffImg.png");




// function createHomeBackground() {
//   const backgroundHome = document.createElement("div");
//   backgroundHome.setAttribute("id", "background-home");

//   return backgroundHome;
// }

function createHomeMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");

  const name = document.createElement("div"); //name element containign the name of restaurant
  name.setAttribute("id", "name");

  const japName = document.createElement("div"); //////////////////////
  japName.textContent = "Dungeon Meshi";        // name in japanese //
  japName.setAttribute("id", "japName");       //////////////////////

  const engName = document.createElement("div"); /////////////////////
  engName.textContent = "Delicious in Dungeon"; // name in english //
  engName.setAttribute("id", "engName");        /////////////////////

  name.append(japName, engName);

  const about = document.createElement("div");
  about.setAttribute("id", "about");
  about.textContent = "Moving restaurant for the dungeon dwellers!!";

  const staffImg = new Image();
  staffImg.src = _images_staffImg_png__WEBPACK_IMPORTED_MODULE_2__;
  staffImg.classList.add("staffImg");
  main.append(name, staffImg, about);

  const description = document.createElement("div");
  description.textContent =
    "With Senshi's culinary expertuse, and we struggling through the dungeon learning about gourmet dining, come pay us and eat with us!";
  about.appendChild(description);
  description.setAttribute("id", "description");

  return main;
}

function loadHome() {
  const wrapper = document.getElementById("wrapper");
  wrapper.append((0,_modules_header__WEBPACK_IMPORTED_MODULE_1__["default"])(), createHomeMain());
  return wrapper
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/menu.css */ "./src/css/menu.css");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/header */ "./src/modules/header.js");
/* harmony import */ var _images_hot_pot_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hot_pot_img.png */ "./src/images/hot_pot_img.png");
/* harmony import */ var _images_Roast_Basilisk_anime_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Roast_Basilisk_anime.png */ "./src/images/Roast_Basilisk_anime.png");
/* harmony import */ var _images_kakiage_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/kakiage.png */ "./src/images/kakiage.png");
/* harmony import */ var _images_Fruit_Pie_anime_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Fruit_Pie_anime.png */ "./src/images/Fruit_Pie_anime.png");
/* harmony import */ var _images_Living_Armor_Stir_Fry_anime_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Living_Armor_Stir_Fry_anime.png */ "./src/images/Living_Armor_Stir_Fry_anime.png");
/* harmony import */ var _images_Living_Armor_Soup_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/Living_Armor_Soup.png */ "./src/images/Living_Armor_Soup.png");
/* harmony import */ var _images_Living_Armor_Grilled_anime_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/Living_Armor_Grilled_anime.png */ "./src/images/Living_Armor_Grilled_anime.png");
/* harmony import */ var _images_Steamed_Living_Armor_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/Steamed_Living_Armor.png */ "./src/images/Steamed_Living_Armor.png");











const Dishes = () => {
  const dishArray = [
    {
      name: "SCORPION & MUSHROOM HOTPOT",
      src: _images_hot_pot_img_png__WEBPACK_IMPORTED_MODULE_2__,
      price: "5000¥",
    },
    {
      name: "ROAST BASILISK",
      src: _images_Roast_Basilisk_anime_png__WEBPACK_IMPORTED_MODULE_3__,
      price: "4500¥",
    },
    {
      name: "MANDRAKE KAKIAGE & BAT TEMPURA",
      src: _images_kakiage_png__WEBPACK_IMPORTED_MODULE_4__,
      price: "6000¥",
    },
    {
      name: "MAN-EATING PLANT TART",
      src: _images_Fruit_Pie_anime_png__WEBPACK_IMPORTED_MODULE_5__,
      price: "2850¥",
    },
    {
      name: "LIVING ARMOR STIR-FRY",
      src: _images_Living_Armor_Stir_Fry_anime_png__WEBPACK_IMPORTED_MODULE_6__,
      price: "7200¥",
    },
    {
      name: "LIVIN ARMOR SOUP",
      src: _images_Living_Armor_Soup_png__WEBPACK_IMPORTED_MODULE_7__,
      price: "6750¥",
    },
    {
      name: "GRILLED LIVING ARMOR",
      src: _images_Living_Armor_Grilled_anime_png__WEBPACK_IMPORTED_MODULE_8__,
      price: "7500¥",
    },
    {
      name: "STEAMED LIVING ARMOR",
      src: _images_Steamed_Living_Armor_png__WEBPACK_IMPORTED_MODULE_9__,
      price: "7800¥",
    },
  ];

  const getDishes = () => {
    return dishArray;
  };
  

  const addDishes = (dishName, dishSrc) => {
    return dishArray.push({ dishName, dishSrc });
  };

  // const clearMenuDiv = () => {
  //   while (menuDiv.hasChildNodes()) {
  //     menuDiv.removeChild(menuDiv.firstChild);
  //   }
  // };

  const makeSingleDishDiv = (arr, div) => {
    // clearMenuDiv();

    for(let el of arr){
      const singleDish = document.createElement("div");
      const dishImage = document.createElement("img");
      const dishInfo = document.createElement("div");
      const dishName = document.createElement("div");
      const dishPrice = document.createElement("div");

      dishImage.src = el.src;
      dishName.textContent = el.name;
      dishPrice.textContent = el.price;

      dishImage.classList.add("dish-image");
      dishInfo.classList.add("dish-info");
      dishPrice.classList.add("dish-price");

      singleDish.classList.add("single-dish");
      dishInfo.append(dishName, dishPrice);
      singleDish.append(dishImage, dishInfo);

      div.append(singleDish);
    };

    return div;
  };

  return { getDishes, addDishes, makeSingleDishDiv };
};

const createMenuMain = () => {

  const { getDishes, makeSingleDishDiv } = Dishes();
  const dishList =  getDishes();

  const menuDiv = document.createElement("main");
  menuDiv.setAttribute("id", "menu-div");

  makeSingleDishDiv(dishList, menuDiv);

  return menuDiv;
};

const loadMenu = () => {
  const wrapper = document.getElementById("wrapper");
  wrapper.append((0,_modules_header__WEBPACK_IMPORTED_MODULE_1__["default"])(), createMenuMain());
  return wrapper;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff":
/*!**********************************************************!*\
  !*** ./src/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./fonts/IBMPlexMono-Regular.woff";

/***/ }),

/***/ "./src/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2":
/*!***********************************************************!*\
  !*** ./src/fonts/IBM_Plex_Mono/IBMPlexMono-Regular.woff2 ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./fonts/IBMPlexMono-Regular.woff2";

/***/ }),

/***/ "./src/fonts/UVN-Co-dien/UVN Co Dien Bold.woff":
/*!*****************************************************!*\
  !*** ./src/fonts/UVN-Co-dien/UVN Co Dien Bold.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./fonts/UVN Co Dien Bold.woff";

/***/ }),

/***/ "./src/fonts/UVN-Co-dien/UVN Co Dien Bold.woff2":
/*!******************************************************!*\
  !*** ./src/fonts/UVN-Co-dien/UVN Co Dien Bold.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./fonts/UVN Co Dien Bold.woff2";

/***/ }),

/***/ "./src/images/Fruit_Pie_anime.png":
/*!****************************************!*\
  !*** ./src/images/Fruit_Pie_anime.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/Fruit_Pie_anime.png";

/***/ }),

/***/ "./src/images/Living_Armor_Grilled_anime.png":
/*!***************************************************!*\
  !*** ./src/images/Living_Armor_Grilled_anime.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/Living_Armor_Grilled_anime.png";

/***/ }),

/***/ "./src/images/Living_Armor_Soup.png":
/*!******************************************!*\
  !*** ./src/images/Living_Armor_Soup.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/Living_Armor_Soup.png";

/***/ }),

/***/ "./src/images/Living_Armor_Stir_Fry_anime.png":
/*!****************************************************!*\
  !*** ./src/images/Living_Armor_Stir_Fry_anime.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/Living_Armor_Stir_Fry_anime.png";

/***/ }),

/***/ "./src/images/Roast_Basilisk_anime.png":
/*!*********************************************!*\
  !*** ./src/images/Roast_Basilisk_anime.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/Roast_Basilisk_anime.png";

/***/ }),

/***/ "./src/images/Steamed_Living_Armor.png":
/*!*********************************************!*\
  !*** ./src/images/Steamed_Living_Armor.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/Steamed_Living_Armor.png";

/***/ }),

/***/ "./src/images/chilchuck.jpg":
/*!**********************************!*\
  !*** ./src/images/chilchuck.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/chilchuck.jpg";

/***/ }),

/***/ "./src/images/clock.png":
/*!******************************!*\
  !*** ./src/images/clock.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/clock.png";

/***/ }),

/***/ "./src/images/email.png":
/*!******************************!*\
  !*** ./src/images/email.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/email.png";

/***/ }),

/***/ "./src/images/hot_pot_img.png":
/*!************************************!*\
  !*** ./src/images/hot_pot_img.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/hot_pot_img.png";

/***/ }),

/***/ "./src/images/izutsumi.png":
/*!*********************************!*\
  !*** ./src/images/izutsumi.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/izutsumi.png";

/***/ }),

/***/ "./src/images/kakiage.png":
/*!********************************!*\
  !*** ./src/images/kakiage.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/kakiage.png";

/***/ }),

/***/ "./src/images/laios.jpg":
/*!******************************!*\
  !*** ./src/images/laios.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/laios.jpg";

/***/ }),

/***/ "./src/images/location.png":
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/location.png";

/***/ }),

/***/ "./src/images/marcille.jpg":
/*!*********************************!*\
  !*** ./src/images/marcille.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/marcille.jpg";

/***/ }),

/***/ "./src/images/phone.png":
/*!******************************!*\
  !*** ./src/images/phone.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/phone.png";

/***/ }),

/***/ "./src/images/senshi.jpg":
/*!*******************************!*\
  !*** ./src/images/senshi.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/senshi.jpg";

/***/ }),

/***/ "./src/images/staffImg.png":
/*!*********************************!*\
  !*** ./src/images/staffImg.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./images/staffImg.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contactUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contactUs */ "./src/pages/contactUs.js");
/* harmony import */ var _modules_firstLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/firstLoad */ "./src/modules/firstLoad.js");
/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/render */ "./src/modules/render.js");
// import { createHomeMain } from "./pages/home";






(0,_modules_firstLoad__WEBPACK_IMPORTED_MODULE_3__["default"])();

const getHeaderButttons = () => {
  const homeButton = document.querySelector("#home-btn");
  const menuButton = document.querySelector("#menu-btn");
  const contactUsButtton = document.querySelector("#contactUs-btn");

  return { homeButton, menuButton, contactUsButtton };
};

const { homeButton, menuButton, contactUsButtton } = getHeaderButttons();

homeButton.addEventListener("click", function () {
  console.log("home loaded");
  (0,_modules_render__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

menuButton.addEventListener("click", function () {
  console.log("menu loaded");
  (0,_modules_render__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

contactUsButtton.addEventListener("click", function(){
  console.log("contactUs loaded")
  ;(0,_modules_render__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_pages_contactUs__WEBPACK_IMPORTED_MODULE_2__["default"])();
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQUEsWUFBWSxpQkFBaUI7QUFDTztBQUNBO0FBQ1U7QUFDRjtBQUNGOztBQUUxQyw4REFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUEsUUFBUSwyQ0FBMkM7O0FBRW5EO0FBQ0E7QUFDQSxFQUFFLDJEQUFVO0FBQ1osRUFBRSx1REFBUTtBQUNWLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsMkRBQVU7QUFDWixFQUFFLHVEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSw0REFBVTtBQUNaLEVBQUUsNERBQWE7QUFDZixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL2NvbnRhY3RVcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9oZWFkZXIuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9jb250YWN0VXMuY3NzPzcyOTQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9oZWFkZXIuY3NzPzhhYzEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9ob21lLmNzcz8wODQ1Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbWVudS5jc3M/ZGRlYyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2ZpcnN0TG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0VXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuI3dyYXBwZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNjb250YWN0LXVzIHtcbiAgd2lkdGg6IG1pbig4NSUsIDYwcmVtKTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41OSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDEwcHggMHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbTtcblxuICAuaW5mby1kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICAvKiBwYWRkaW5nOiAwLjVyZW07ICovXG5cbiAgICBpbWd7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gIH1cblxuICAjc3RhZmYtbWVtYmVyc3tcbiAgICBtYXJnaW46IDJyZW0gYXV0byAwIGF1dG87XG4gICAgLyogYm9yZGVyOiA1cHggc29saWQgcmdiKDI1NSwgMCwgMCk7ICovXG4gICAgLyogd2lkdGg6IDQwcmVtOyAqL1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG5cbiAgICAgIC5zdGFmZi1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cbiAgICAgICAgLyogYmFja2dyb3VuZDogd2hlYXQ7ICovXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAvKiBoZWlnaHQ6IDUwJTsgKi9cbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhZmYtbmFtZXtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG59XG5cbiNjb250YWN0LXVzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IC0xNXB4O1xuICBib3R0b206IC0xNXB4O1xuICByaWdodDogLTE1cHg7XG4gIGxlZnQ6IC0xNXB4O1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7ICovXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAxNXB4IDBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jb250YWN0VXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsYUFBYTs7RUFFYjtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QscUJBQXFCOztJQUVyQjtNQUNFLGVBQWU7TUFDZixXQUFXO0lBQ2I7RUFDRjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IseUJBQXlCOztNQUV2QjtRQUNFLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLFlBQVk7UUFDWiw2QkFBNkI7UUFDN0IsdUJBQXVCO1FBQ3ZCO1VBQ0UsaUJBQWlCO1VBQ2pCLFVBQVU7VUFDVixpQkFBaUI7VUFDakIsdUJBQXVCO1VBQ3ZCLFlBQVk7UUFDZDs7UUFFQTtVQUNFLFlBQVk7UUFDZDtNQUNGO0VBQ0o7O0FBRUY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4jY29udGFjdC11cyB7XFxuICB3aWR0aDogbWluKDg1JSwgNjByZW0pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDEwcHggMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgLmluZm8tZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgLyogcGFkZGluZzogMC41cmVtOyAqL1xcblxcbiAgICBpbWd7XFxuICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAjc3RhZmYtbWVtYmVyc3tcXG4gICAgbWFyZ2luOiAycmVtIGF1dG8gMCBhdXRvO1xcbiAgICAvKiBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjU1LCAwLCAwKTsgKi9cXG4gICAgLyogd2lkdGg6IDQwcmVtOyAqL1xcbiAgICAvKiBkaXNwbGF5OiBncmlkOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcmVtLCAxZnIpKTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuXFxuICAgICAgLnN0YWZmLWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiB3aGVhdDsgKi9cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAvKiBoZWlnaHQ6IDUwJTsgKi9cXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zdGFmZi1uYW1le1xcbiAgICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgfVxcblxcbn1cXG5cXG4jY29udGFjdC11czo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IC0xNXB4O1xcbiAgYm90dG9tOiAtMTVweDtcXG4gIHJpZ2h0OiAtMTVweDtcXG4gIGxlZnQ6IC0xNXB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spOyAqL1xcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAxNXB4IDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1uYXZGb250Q29sb3IpO1xuICBcbiAgICAubmF2YmFyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIG1heC13aWR0aDogMTAwcmVtO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogdmFyKC0td2hpdGUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgcGFkZGluZzogMC44cmVtIDEuMnJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgfVxuICBcbiAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYmxhY2spIGdyb292ZSAycHg7XG4gICAgICB9XG4gIFxuICAgICAgYnV0dG9uOmFjdGl2ZSwgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ibGFjaykgZ3Jvb3ZlIDJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgIH1cbiAgICB9XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsMEJBQTBCOztJQUUxQjtNQUNFLGFBQWE7TUFDYiw2QkFBNkI7TUFDN0IsaUJBQWlCO01BQ2pCLFlBQVk7O01BRVo7UUFDRSxvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLG9DQUFvQztNQUN0Qzs7TUFFQTtRQUNFLHNDQUFzQztNQUN4Qzs7TUFFQTtRQUNFLDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMsbUJBQW1CO1FBQ25CLGdCQUFnQjtNQUNsQjtJQUNGO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2hlYWRlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgcGFkZGluZzogMC44cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbmF2Rm9udENvbG9yKTtcXG4gIFxcbiAgICAubmF2YmFyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgIG1heC13aWR0aDogMTAwcmVtO1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG4gIFxcbiAgICAgIGJ1dHRvbiB7XFxuICAgICAgICBib3JkZXI6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjhyZW0gMS4ycmVtO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIH1cXG4gIFxcbiAgICAgIGJ1dHRvbjpob3ZlcntcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJsYWNrKSBncm9vdmUgMnB4O1xcbiAgICAgIH1cXG4gIFxcbiAgICAgIGJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ibGFjaykgZ3Jvb3ZlIDJweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvVVZOLUNvLWRpZW4vVVZOIENvIERpZW4gQm9sZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1VWTi1Dby1kaWVuL1VWTiBDbyBEaWVuIEJvbGQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0lCTV9QbGV4X01vbm8vSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0lCTV9QbGV4X01vbm8vSUJNUGxleE1vbm8tUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0td2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLS1ibGFjazogcmdiKDAsIDAsIDApO1xuICAtLW1haW5Gb250Q29sb3I6IHJnYigwLCAwLCAwKTtcbiAgLS1uYXZGb250Q29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlVWTi1Dby1kaWVuXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIklCTVBsZXhNb25vXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgYmFja2dyb3VuZDogIzY2NTI0YTtcbn1cblxuI3dyYXBwZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNtYWluIHtcbiAgd2lkdGg6IG1pbig4NSUsIDYwcmVtKTtcbiAgY29sb3I6IHZhcigtLW1haW5Gb250Q29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICBtYXJnaW46IDVyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0td2hpdGUpO1xuXG4gIC5zdGFmZkltZyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDkuMzc1ZW07XG4gICAgYm9yZGVyOiAwLjNyZW0gc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IG1pbig1MHJlbSwgODUlKTtcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcbiAgfVxuXG4gICNuYW1lIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgI2phcE5hbWUge1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cblxuICAgICNlbmdOYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgI2Fib3V0IHtcbiAgICB3aWR0aDogbWluKDkwJSwgNTByZW0pO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW0gYXV0byAwIGF1dG87XG5cbiAgICAjZGVzY3JpcHRpb24ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4jbWFpbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAtMTVweDtcbiAgYm90dG9tOiAtMTVweDtcbiAgcmlnaHQ6IC0xNXB4O1xuICBsZWZ0OiAtMTVweDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spOyAqL1xuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMHB4IDE1cHggMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCOzJDQUNzRDtBQUN4RDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQjsyQ0FDd0Q7QUFDMUQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsZ0NBQWdDO0VBQ2hDLDhCQUE4Qjs7RUFFOUI7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQjtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIsaUJBQWlCO0lBQ25CO0VBQ0Y7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdCQUF3Qjs7SUFFeEI7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsZ0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0td2hpdGU6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tYmxhY2s6IHJnYigwLCAwLCAwKTtcXG4gIC0tbWFpbkZvbnRDb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgLS1uYXZGb250Q29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlVWTi1Dby1kaWVuXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9VVk4tQ28tZGllbi9VVk5cXFxcIENvXFxcXCBEaWVuXFxcXCBCb2xkLndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vZm9udHMvVVZOLUNvLWRpZW4vVVZOXFxcXCBDb1xcXFwgRGllblxcXFwgQm9sZC53b2ZmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk1QbGV4TW9ub1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvSUJNX1BsZXhfTW9uby9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vZm9udHMvSUJNX1BsZXhfTW9uby9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmZcXFwiKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIGJhY2tncm91bmQ6ICM2NjUyNGE7XFxufVxcblxcbiN3cmFwcGVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuI21haW4ge1xcbiAgd2lkdGg6IG1pbig4NSUsIDYwcmVtKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluRm9udENvbG9yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcbiAgbWFyZ2luOiA1cmVtIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41OSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5cXG4gIC5zdGFmZkltZyB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWluLWhlaWdodDogOS4zNzVlbTtcXG4gICAgYm9yZGVyOiAwLjNyZW0gc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiBtaW4oNTByZW0sIDg1JSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgfVxcblxcbiAgI25hbWUge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAjamFwTmFtZSB7XFxuICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgICNlbmdOYW1lIHtcXG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgfVxcblxcbiAgI2Fib3V0IHtcXG4gICAgd2lkdGg6IG1pbig5MCUsIDUwcmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDJyZW0gYXV0byAwIGF1dG87XFxuXFxuICAgICNkZXNjcmlwdGlvbiB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICB9XFxufVxcblxcbiNtYWluOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRvcDogLTE1cHg7XFxuICBib3R0b206IC0xNXB4O1xcbiAgcmlnaHQ6IC0xNXB4O1xcbiAgbGVmdDogLTE1cHg7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7ICovXFxuICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAxNXB4IDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9JQk1fUGxleF9Nb25vL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9JQk1fUGxleF9Nb25vL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJJQk1QbGV4TW9ub1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIC8qIGJhY2tncm91bmQ6IDsgKi9cbn1cblxuI3dyYXBwZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi8qICNiYWNrZ3JvdW5kLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltYWdlcy9tZW51LWJnMi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0gKi9cblxuI21lbnUtZGl2IHtcbiAgd2lkdGg6IG1pbig5MCUsIDYwcmVtKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTkpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDJyZW0gYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyOHJlbSwgMWZyKSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDEwcHggMHB4O1xuICAvKiBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7ICovXG59XG5cbi5zaW5nbGUtZGlzaCB7XG4gIC8qIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTsgKi9cbiAgbWFyZ2luOiAxcmVtO1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHggOHB4IDBweDtcbiAgLyogYm9yZGVyLXJhZGl1czogNSU7ICovXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlOyAqL1xuXG4gIC5kaXNoLWltYWdle1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDBweCA4cHggMHB4O1xuICB9XG5cbiAgLmRpc2gtaW5mb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAvKiBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyAqL1xuXG4gICAgLmRpc2gtcHJpY2V7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgLyogY29sb3I6IHdoaXRlOyAqL1xuICAgICAgYmFja2dyb3VuZDogZ29sZGVucm9kO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmc6IDAuNnJlbTtcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuXG4gICAgfVxuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBMEI7RUFDMUI7MkNBQ3dEO0FBQzFEOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSDtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxnQ0FBZ0M7RUFDaEMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLDZCQUE2Qjs7RUFFN0I7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLCtCQUErQjs7SUFFL0I7TUFDRSxnQkFBZ0I7TUFDaEIsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixVQUFVO01BQ1YsZUFBZTtNQUNmLGlCQUFpQjs7SUFFbkI7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJQk1QbGV4TW9ub1xcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvSUJNX1BsZXhfTW9uby9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyXFxcIiksXFxuICAgIHVybChcXFwiLi4vZm9udHMvSUJNX1BsZXhfTW9uby9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmZcXFwiKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIC8qIGJhY2tncm91bmQ6IDsgKi9cXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiAjYmFja2dyb3VuZC1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvbWVudS1iZzIucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59ICovXFxuXFxuI21lbnUtZGl2IHtcXG4gIHdpZHRoOiBtaW4oOTAlLCA2MHJlbSk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjhyZW0sIDFmcikpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMTBweCAwcHg7XFxuICAvKiBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7ICovXFxufVxcblxcbi5zaW5nbGUtZGlzaCB7XFxuICAvKiBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7ICovXFxuICBtYXJnaW46IDFyZW07XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHggOHB4IDBweDtcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDUlOyAqL1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgd2hpdGU7ICovXFxuXFxuICAuZGlzaC1pbWFnZXtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwcHggOHB4IDBweDtcXG4gIH1cXG5cXG4gIC5kaXNoLWluZm97XFxuICAgIHRleHQtYWxpZ246IGNlbnRlciA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIC8qIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7ICovXFxuXFxuICAgIC5kaXNoLXByaWNle1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgLyogY29sb3I6IHdoaXRlOyAqL1xcbiAgICAgIGJhY2tncm91bmQ6IGdvbGRlbnJvZDtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIHBhZGRpbmc6IDAuNnJlbTtcXG4gICAgICBtYXJnaW46IDFyZW0gYXV0bztcXG5cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdFVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3RVcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4uL3BhZ2VzL2hvbWUuanNcIlxuLy8gaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpcnN0TG9hZCgpe1xuICAgIC8vIG1haW5Db250ZW50KCk7XG4gICAgLy8gY3JlYXRlSG9tZU1haW4oKTtcbiAgICBsb2FkSG9tZSgpXG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZpcnN0TG9hZDtcblxuIiwiaW1wb3J0IFwiLi4vY3NzL2hlYWRlci5jc3NcIlxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIFxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7IC8vIGhlYWRlciBkaXJlY3QgY2hpbGQgdG8gd2FycHBlciBjb250YWluaWduIG5hbWUgYW5kIG5hdkJhclxuICAgIGhlYWRlckRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9uYXZCYXIgY29udGFpbmluZyBuYXZpZ2F0aW9uIG9mIGhvbWUsIG1lbnUgYW5kIGNvbnRhY3RVc1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBcbiAgICBoZWFkZXJEaXYuYXBwZW5kKG5hdkJhcik7XG4gIFxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNvbnRhY3RVc0J1dHR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgaG9tZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtYnRuXCIpXG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibWVudS1idG5cIilcbiAgICBjb250YWN0VXNCdXR0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjb250YWN0VXMtYnRuXCIpXG4gIFxuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29udGFjdFVzQnV0dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICBcbiAgICBuYXZCYXIuYXBwZW5kKGhvbWVCdXR0b24sIG1lbnVCdXR0b24sIGNvbnRhY3RVc0J1dHR0b24pO1xuICBcbiAgICByZXR1cm4gaGVhZGVyRGl2O1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuXG4iLCJpbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbmNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid3JhcHBlclwiKVxuICAgIHdoaWxlKHdyYXBwZXIuaGFzQ2hpbGROb2RlcygpKXtcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHJldHVybiB3cmFwcGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQYWdlXG4iLCJpbXBvcnQgXCIuLi9jc3MvY29udGFjdFVzLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi4vbW9kdWxlcy9oZWFkZXJcIjtcbmltcG9ydCBsb2NhdGlvbkljb24gZnJvbSBcIi4uL2ltYWdlcy9sb2NhdGlvbi5wbmdcIjtcbmltcG9ydCB0aW1lSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2Nsb2NrLnBuZ1wiO1xuaW1wb3J0IGVtYWlsSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2VtYWlsLnBuZ1wiO1xuaW1wb3J0IHBob25lSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3Bob25lLnBuZ1wiO1xuaW1wb3J0IHNlbnNoaUltZyBmcm9tIFwiLi4vaW1hZ2VzL3NlbnNoaS5qcGdcIjtcbmltcG9ydCBsYWlvc0ltZyBmcm9tIFwiLi4vaW1hZ2VzL2xhaW9zLmpwZ1wiO1xuaW1wb3J0IG1hcmNpbGxlSW1nIGZyb20gXCIuLi9pbWFnZXMvbWFyY2lsbGUuanBnXCI7XG5pbXBvcnQgY2hpbGNodWNrSW1nIGZyb20gXCIuLi9pbWFnZXMvY2hpbGNodWNrLmpwZ1wiO1xuaW1wb3J0IGl6dXRzdW1pSW1nIGZyb20gXCIuLi9pbWFnZXMvaXp1dHN1bWkucG5nXCI7XG5cbi8vIGNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9Pntcbi8vICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbi8vICAgICBjb25zdCBmb3JtQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgY29uc3QgZnVsbE5hbWVESXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIGNvbnN0IGZ1bGxOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4vLyAgICAgY29uc3QgY3VzdG9tZXJGdWxsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuLy8gICAgIGN1c3RvbWVyRnVsbE5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImlucHV0XCIpXG5cbi8vICAgICBjb25zdCBlbWFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbi8vICAgICBjb25zdCBjdXN0b21lckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4vLyAgICAgY3VzdG9tZXJFbWFpbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XG4vLyB9XG5cbmNvbnN0IFN0YWZmID0gKCkgPT4ge1xuICBjb25zdCBzdGFmZkFycmF5ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiU2Vuc2hpXCIsXG4gICAgICBzcmM6IHNlbnNoaUltZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTGFpb3NcIixcbiAgICAgIHNyYzogbGFpb3NJbWcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIk1hcmNpbGxlXCIsXG4gICAgICBzcmM6IG1hcmNpbGxlSW1nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJDaGlsY2h1Y2tcIixcbiAgICAgIHNyYzogY2hpbGNodWNrSW1nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJJenV0c3VtaVwiLFxuICAgICAgc3JjOiBpenV0c3VtaUltZyxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGdldFN0YWZmID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGFmZkFycmF5O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVN0YWZmTGlzdCA9IChkaXYpID0+IHtcbiAgICBmb3IgKGxldCBlbCBvZiBzdGFmZkFycmF5KSB7XG4gICAgICBjb25zdCBzdGFmZkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3Qgc3RhZmZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IHN0YWZmSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgIHN0YWZmSW5mby5jbGFzc0xpc3QuYWRkKFwic3RhZmYtaW5mb1wiKTtcbiAgICAgIHN0YWZmTmFtZS5jbGFzc0xpc3QuYWRkKFwic3RhZmYtbmFtZVwiKTtcblxuICAgICAgLy8gc3RhZmZJbmZvLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2VsLm5hbWUufWApXG5cbiAgICAgIHN0YWZmTmFtZS50ZXh0Q29udGVudCA9IGVsLm5hbWU7XG4gICAgICBzdGFmZkltZy5zcmMgPSBlbC5zcmM7XG4gICAgICBzdGFmZkluZm8uYXBwZW5kKHN0YWZmSW1nLCBzdGFmZk5hbWUpO1xuXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoc3RhZmZJbmZvKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICByZXR1cm4geyBnZXRTdGFmZiwgY3JlYXRlU3RhZmZMaXN0IH07XG59O1xuXG5jb25zdCBjcmVhdGVDb250YWN0VVMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3JlYXRlU3RhZmZMaXN0IH0gPSBTdGFmZigpO1xuICAvLyBjb25zdCBzdGFmZkxpc3QgPSBnZXRTdGFmZigpO1xuXG4gIGNvbnN0IGluZm9BcnJheSA9IFtcbiAgICB7IG5hbWU6IFwiVGhlIGV2ZXIgY2hhbmdpbmcgZHVuZ2VvblwiLCBpY29uOiBsb2NhdGlvbkljb24gfSxcbiAgICB7IG5hbWU6IFwiT3BlbiAyNHg3XCIsIGljb246IHRpbWVJY29uIH0sXG4gICAgeyBuYW1lOiBcIigyMjIpLTg4OCA1NTU1XCIsIGljb246IHBob25lSWNvbiB9LFxuICAgIHsgbmFtZTogXCJNZXNzYWdlIHVzXCIsIGljb246IGVtYWlsSWNvbiB9LFxuICBdO1xuXG4gIGNvbnN0IGNvbnRhY3RVc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb250YWN0VXNEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LXVzXCIpO1xuXG4gIC8vIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gbG9jYXRpb25EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2NhdGlvbi1kaXZcIik7XG4gIC8vIGxvY2F0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmZvLWRpdlwiKTtcbiAgLy8gY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvLyBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiVGhlIGV2ZXIgY2hhbmdpbmcgRHVuZ2VvblwiO1xuICAvLyBjb25zdCBsb2NhdGlvbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgLy8gbG9jYXRpb25JY29uLnNyYyA9IGxvY2F0aW9uSW1nO1xuICAvLyBsb2NhdGlvbkRpdi5hcHBlbmQobG9jYXRpb25JY29uLCBsb2NhdGlvbik7XG5cbiAgLy8gY29uc3QgdGltaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gdGltaW5nRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGltaW5nLWRpdlwiKTtcbiAgLy8gdGltaW5nRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmZvLWRpdlwiKTtcbiAgLy8gY29uc3QgdGltaW5nSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAvLyB0aW1pbmdJY29uLnNyYyA9IGNsb2NrSW1nO1xuICAvLyBjb25zdCB0aW1pbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gdGltaW5ncy50ZXh0Q29udGVudCA9IFwiT3BlbiAyNHg3XCI7XG4gIC8vIHRpbWluZ0Rpdi5hcHBlbmQodGltaW5nSWNvbiwgdGltaW5ncyk7XG5cbiAgLy8gY29uc3QgY29udGFjdE5ickRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vIGNvbnRhY3ROYnJEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LW5ici1kaXZcIik7XG4gIC8vIGNvbnRhY3ROYnJEaXYuY2xhc3NMaXN0LmFkZChcImluZm8tZGl2XCIpO1xuICAvLyBjb25zdCBjb250YWN0TmJySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAvLyBjb250YWN0TmJySWNvbi5zcmMgPSBwaG9uZUltZztcbiAgLy8gY29uc3QgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIC8vIGNvbnRhY3ROdW1iZXIudGV4dENvbnRlbnQgPSBcIigyMjIpLTg4OCA1NTU1XCI7XG4gIC8vIGNvbnRhY3ROYnJEaXYuYXBwZW5kKGNvbnRhY3ROYnJJY29uLCBjb250YWN0TnVtYmVyKTtcblxuICAvLyBjb25zdCBlbWFpbFVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gZW1haWxVc0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtYWlsLXVzLWRpdlwiKTtcbiAgLy8gZW1haWxVc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW5mby1kaXZcIik7XG4gIC8vIGNvbnN0IGVtYWlsVXNJY29uID0gbmV3IEltYWdlKCk7XG4gIC8vIGVtYWlsVXNJY29uLnNyYyA9IGVtYWlsSW1nO1xuICAvLyBjb25zdCBlbWFpbFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gZW1haWxVcy50ZXh0Q29udGVudCA9IFwiTWVzc2FnZSBVc1wiO1xuICAvLyBlbWFpbFVzRGl2LmFwcGVuZChlbWFpbFVzSWNvbiwgZW1haWxVcyk7XG5cbiAgY29uc3Qgc3RhZmZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YWZmVGl0bGUudGV4dENvbnRlbnQgPSBcIk91ciBzdGFmZiBtZW1iZXJzXCI7XG5cbiAgY29uc3QgY3JlYXRlSW5mb0RpdiA9IChkaXYpID0+IHtcbiAgICBmb3IgKGxldCBlbCBvZiBpbmZvQXJyYXkpIHtcbiAgICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgaW5mb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgaW5mb0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIC8vIGNvbnN0IGVhY2hFbGVtZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgICBpbmZvSWNvbi5zcmMgPSBlbC5pY29uO1xuICAgICAgaW5mb0NvbnRlbnQudGV4dENvbnRlbnQgPSBlbC5uYW1lO1xuXG4gICAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmZvLWRpdlwiKTtcbiAgICAgIGluZm9EaXYuYXBwZW5kKGluZm9JY29uLCBpbmZvQ29udGVudCk7XG4gICAgICBkaXYuYXBwZW5kKGluZm9EaXYpO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIC8vIGNvbnRhY3RVc0Rpdi5hcHBlbmQoKVxuICBjb25zdCBzdGFmZk1lbWJlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdGFmZk1lbWJlcnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdGFmZi1tZW1iZXJzXCIpO1xuXG4gIGNyZWF0ZUluZm9EaXYoY29udGFjdFVzRGl2KTtcblxuICBjcmVhdGVTdGFmZkxpc3Qoc3RhZmZNZW1iZXJzKTtcblxuICBjb250YWN0VXNEaXYuYXBwZW5kKHN0YWZmVGl0bGUsIHN0YWZmTWVtYmVycyk7XG4gIHJldHVybiBjb250YWN0VXNEaXY7XG59O1xuXG5jb25zdCBsb2FkQ29udGFjdFVTID0gKCkgPT4ge1xuICAvLyBjcmVhdGVTdGFmZkxpc3Qoc3RhZmZMaXN0LCBjb250YWN0VXNEaXYpO1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3cmFwcGVyXCIpO1xuXG4gIHdyYXBwZXIuYXBwZW5kKGNyZWF0ZUhlYWRlcigpLCBjcmVhdGVDb250YWN0VVMoKSk7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdFVTO1xuIiwiaW1wb3J0IFwiLi4vY3NzL2hvbWUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyICBmcm9tIFwiLi4vbW9kdWxlcy9oZWFkZXJcIjtcbmltcG9ydCBkbmRDaGFyYWN0ZXJzIGZyb20gXCIuLi9pbWFnZXMvc3RhZmZJbWcucG5nXCI7XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUhvbWVCYWNrZ3JvdW5kKCkge1xuLy8gICBjb25zdCBiYWNrZ3JvdW5kSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgIGJhY2tncm91bmRIb21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmFja2dyb3VuZC1ob21lXCIpO1xuXG4vLyAgIHJldHVybiBiYWNrZ3JvdW5kSG9tZTtcbi8vIH1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vbmFtZSBlbGVtZW50IGNvbnRhaW5pZ24gdGhlIG5hbWUgb2YgcmVzdGF1cmFudFxuICBuYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmFtZVwiKTtcblxuICBjb25zdCBqYXBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBqYXBOYW1lLnRleHRDb250ZW50ID0gXCJEdW5nZW9uIE1lc2hpXCI7ICAgICAgICAvLyBuYW1lIGluIGphcGFuZXNlIC8vXG4gIGphcE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJqYXBOYW1lXCIpOyAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc3QgZW5nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBlbmdOYW1lLnRleHRDb250ZW50ID0gXCJEZWxpY2lvdXMgaW4gRHVuZ2VvblwiOyAvLyBuYW1lIGluIGVuZ2xpc2ggLy9cbiAgZW5nTmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVuZ05hbWVcIik7ICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBuYW1lLmFwcGVuZChqYXBOYW1lLCBlbmdOYW1lKTtcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRcIik7XG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJNb3ZpbmcgcmVzdGF1cmFudCBmb3IgdGhlIGR1bmdlb24gZHdlbGxlcnMhIVwiO1xuXG4gIGNvbnN0IHN0YWZmSW1nID0gbmV3IEltYWdlKCk7XG4gIHN0YWZmSW1nLnNyYyA9IGRuZENoYXJhY3RlcnM7XG4gIHN0YWZmSW1nLmNsYXNzTGlzdC5hZGQoXCJzdGFmZkltZ1wiKTtcbiAgbWFpbi5hcHBlbmQobmFtZSwgc3RhZmZJbWcsIGFib3V0KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICBcIldpdGggU2Vuc2hpJ3MgY3VsaW5hcnkgZXhwZXJ0dXNlLCBhbmQgd2Ugc3RydWdnbGluZyB0aHJvdWdoIHRoZSBkdW5nZW9uIGxlYXJuaW5nIGFib3V0IGdvdXJtZXQgZGluaW5nLCBjb21lIHBheSB1cyBhbmQgZWF0IHdpdGggdXMhXCI7XG4gIGFib3V0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcblxuICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndyYXBwZXJcIik7XG4gIHdyYXBwZXIuYXBwZW5kKGNyZWF0ZUhlYWRlcigpLCBjcmVhdGVIb21lTWFpbigpKTtcbiAgcmV0dXJuIHdyYXBwZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJpbXBvcnQgXCIuLi9jc3MvbWVudS5jc3NcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4uL21vZHVsZXMvaGVhZGVyXCI7XG5pbXBvcnQgaG90cG90SW1nIGZyb20gXCIuLi9pbWFnZXMvaG90X3BvdF9pbWcucG5nXCI7XG5pbXBvcnQgcm9hc3RCYXNpbGlzayBmcm9tIFwiLi4vaW1hZ2VzL1JvYXN0X0Jhc2lsaXNrX2FuaW1lLnBuZ1wiO1xuaW1wb3J0IGtha2lhZ2UgZnJvbSBcIi4uL2ltYWdlcy9rYWtpYWdlLnBuZ1wiO1xuaW1wb3J0IHBsYW50VGFydCBmcm9tIFwiLi4vaW1hZ2VzL0ZydWl0X1BpZV9hbmltZS5wbmdcIjtcbmltcG9ydCBhcm1vckZyeSBmcm9tIFwiLi4vaW1hZ2VzL0xpdmluZ19Bcm1vcl9TdGlyX0ZyeV9hbmltZS5wbmdcIjtcbmltcG9ydCBhcm1vclNvdXAgZnJvbSBcIi4uL2ltYWdlcy9MaXZpbmdfQXJtb3JfU291cC5wbmdcIjtcbmltcG9ydCBhcm1vckdyaWxsZWQgZnJvbSBcIi4uL2ltYWdlcy9MaXZpbmdfQXJtb3JfR3JpbGxlZF9hbmltZS5wbmdcIjtcbmltcG9ydCBhcm1vclN0ZWFtZWQgZnJvbSBcIi4uL2ltYWdlcy9TdGVhbWVkX0xpdmluZ19Bcm1vci5wbmdcIjtcblxuY29uc3QgRGlzaGVzID0gKCkgPT4ge1xuICBjb25zdCBkaXNoQXJyYXkgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJTQ09SUElPTiAmIE1VU0hST09NIEhPVFBPVFwiLFxuICAgICAgc3JjOiBob3Rwb3RJbWcsXG4gICAgICBwcmljZTogXCI1MDAwwqVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUk9BU1QgQkFTSUxJU0tcIixcbiAgICAgIHNyYzogcm9hc3RCYXNpbGlzayxcbiAgICAgIHByaWNlOiBcIjQ1MDDCpVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNQU5EUkFLRSBLQUtJQUdFICYgQkFUIFRFTVBVUkFcIixcbiAgICAgIHNyYzoga2FraWFnZSxcbiAgICAgIHByaWNlOiBcIjYwMDDCpVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNQU4tRUFUSU5HIFBMQU5UIFRBUlRcIixcbiAgICAgIHNyYzogcGxhbnRUYXJ0LFxuICAgICAgcHJpY2U6IFwiMjg1MMKlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkxJVklORyBBUk1PUiBTVElSLUZSWVwiLFxuICAgICAgc3JjOiBhcm1vckZyeSxcbiAgICAgIHByaWNlOiBcIjcyMDDCpVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJMSVZJTiBBUk1PUiBTT1VQXCIsXG4gICAgICBzcmM6IGFybW9yU291cCxcbiAgICAgIHByaWNlOiBcIjY3NTDCpVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJHUklMTEVEIExJVklORyBBUk1PUlwiLFxuICAgICAgc3JjOiBhcm1vckdyaWxsZWQsXG4gICAgICBwcmljZTogXCI3NTAwwqVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU1RFQU1FRCBMSVZJTkcgQVJNT1JcIixcbiAgICAgIHNyYzogYXJtb3JTdGVhbWVkLFxuICAgICAgcHJpY2U6IFwiNzgwMMKlXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBnZXREaXNoZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRpc2hBcnJheTtcbiAgfTtcbiAgXG5cbiAgY29uc3QgYWRkRGlzaGVzID0gKGRpc2hOYW1lLCBkaXNoU3JjKSA9PiB7XG4gICAgcmV0dXJuIGRpc2hBcnJheS5wdXNoKHsgZGlzaE5hbWUsIGRpc2hTcmMgfSk7XG4gIH07XG5cbiAgLy8gY29uc3QgY2xlYXJNZW51RGl2ID0gKCkgPT4ge1xuICAvLyAgIHdoaWxlIChtZW51RGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAvLyAgICAgbWVudURpdi5yZW1vdmVDaGlsZChtZW51RGl2LmZpcnN0Q2hpbGQpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICBjb25zdCBtYWtlU2luZ2xlRGlzaERpdiA9IChhcnIsIGRpdikgPT4ge1xuICAgIC8vIGNsZWFyTWVudURpdigpO1xuXG4gICAgZm9yKGxldCBlbCBvZiBhcnIpe1xuICAgICAgY29uc3Qgc2luZ2xlRGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBkaXNoSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgY29uc3QgZGlzaEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgZGlzaFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgZGlzaEltYWdlLnNyYyA9IGVsLnNyYztcbiAgICAgIGRpc2hOYW1lLnRleHRDb250ZW50ID0gZWwubmFtZTtcbiAgICAgIGRpc2hQcmljZS50ZXh0Q29udGVudCA9IGVsLnByaWNlO1xuXG4gICAgICBkaXNoSW1hZ2UuY2xhc3NMaXN0LmFkZChcImRpc2gtaW1hZ2VcIik7XG4gICAgICBkaXNoSW5mby5jbGFzc0xpc3QuYWRkKFwiZGlzaC1pbmZvXCIpO1xuICAgICAgZGlzaFByaWNlLmNsYXNzTGlzdC5hZGQoXCJkaXNoLXByaWNlXCIpO1xuXG4gICAgICBzaW5nbGVEaXNoLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtZGlzaFwiKTtcbiAgICAgIGRpc2hJbmZvLmFwcGVuZChkaXNoTmFtZSwgZGlzaFByaWNlKTtcbiAgICAgIHNpbmdsZURpc2guYXBwZW5kKGRpc2hJbWFnZSwgZGlzaEluZm8pO1xuXG4gICAgICBkaXYuYXBwZW5kKHNpbmdsZURpc2gpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIHJldHVybiB7IGdldERpc2hlcywgYWRkRGlzaGVzLCBtYWtlU2luZ2xlRGlzaERpdiB9O1xufTtcblxuY29uc3QgY3JlYXRlTWVudU1haW4gPSAoKSA9PiB7XG5cbiAgY29uc3QgeyBnZXREaXNoZXMsIG1ha2VTaW5nbGVEaXNoRGl2IH0gPSBEaXNoZXMoKTtcbiAgY29uc3QgZGlzaExpc3QgPSAgZ2V0RGlzaGVzKCk7XG5cbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtZW51RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudS1kaXZcIik7XG5cbiAgbWFrZVNpbmdsZURpc2hEaXYoZGlzaExpc3QsIG1lbnVEaXYpO1xuXG4gIHJldHVybiBtZW51RGl2O1xufTtcblxuY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndyYXBwZXJcIik7XG4gIHdyYXBwZXIuYXBwZW5kKGNyZWF0ZUhlYWRlcigpLCBjcmVhdGVNZW51TWFpbigpKTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgeyBjcmVhdGVIb21lTWFpbiB9IGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0VVMgZnJvbSBcIi4vcGFnZXMvY29udGFjdFVzXCI7XG5pbXBvcnQgZmlyc3RMb2FkIGZyb20gXCIuL21vZHVsZXMvZmlyc3RMb2FkXCI7XG5pbXBvcnQgcmVuZGVyUGFnZSBmcm9tIFwiLi9tb2R1bGVzL3JlbmRlclwiO1xuXG5maXJzdExvYWQoKTtcblxuY29uc3QgZ2V0SGVhZGVyQnV0dHRvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWUtYnRuXCIpO1xuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ0blwiKTtcbiAgY29uc3QgY29udGFjdFVzQnV0dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFVzLWJ0blwiKTtcblxuICByZXR1cm4geyBob21lQnV0dG9uLCBtZW51QnV0dG9uLCBjb250YWN0VXNCdXR0dG9uIH07XG59O1xuXG5jb25zdCB7IGhvbWVCdXR0b24sIG1lbnVCdXR0b24sIGNvbnRhY3RVc0J1dHR0b24gfSA9IGdldEhlYWRlckJ1dHR0b25zKCk7XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coXCJob21lIGxvYWRlZFwiKTtcbiAgcmVuZGVyUGFnZSgpO1xuICBsb2FkSG9tZSgpO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coXCJtZW51IGxvYWRlZFwiKTtcbiAgcmVuZGVyUGFnZSgpO1xuICBsb2FkTWVudSgpO1xufSk7XG5cbmNvbnRhY3RVc0J1dHR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gIGNvbnNvbGUubG9nKFwiY29udGFjdFVzIGxvYWRlZFwiKVxuICByZW5kZXJQYWdlKCk7XG4gIGxvYWRDb250YWN0VVMoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9