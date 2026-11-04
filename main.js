/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --ink: #0f2233;
  --deep-water: #1b3a52;
  --paper: #e9efec;
  --water: #b7d1d6;
  --steel: #4a6070;
  --muted: #4d6475;
  --flag: #f0b429;
  --hit: #d4402b;
  --valid: #6fcf97;
  --invalid: #e8877a;
  --sunk: #2b3f50;

  --font-display: 'Big Shoulders Display', Impact, 'Arial Narrow', sans-serif;
  --font-body: 'Public Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;

  --cell: clamp(1.5rem, 6.6vw, 2.4rem);
  --radius: 6px;
}

[hidden] {
  display: none !important;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 1.5rem 1rem 3rem;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--font-body);
  line-height: 1.5;
  text-align: center;
}

h1,
h2 {
  font-family: var(--font-display);
  font-weight: 800;
  line-height: 1.05;
  margin: 0;
}

h1 {
  font-size: clamp(2.8rem, 9vw, 4.5rem);
  letter-spacing: 0.04em;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.6rem;
  letter-spacing: 0.02em;
}

/* --- Status line --- */

#message {
  max-width: 40rem;
  margin: 0 auto 1.5rem;
  padding: 0.75rem 1rem;
  background: var(--deep-water);
  border-left: 4px solid var(--flag);
  border-radius: 0 var(--radius) var(--radius) 0;
  text-align: left;
}

#message:empty {
  display: none;
}

/* --- Buttons --- */

button {
  padding: 0.7rem 1.2rem;
  border: 2px solid var(--paper);
  border-radius: 4px;
  background: transparent;
  color: var(--paper);
  font: 700 1.1rem/1 var(--font-display);
  letter-spacing: 0.04em;
  cursor: pointer;
}

button:hover:not(:disabled) {
  background: rgba(233, 239, 236, 0.12);
}

button.primary {
  background: var(--flag);
  border-color: var(--flag);
  color: var(--ink);
}

button.primary:hover:not(:disabled) {
  background: #f6c85a;
  border-color: #f6c85a;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

button:focus-visible {
  outline: 3px solid var(--paper);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: no-preference) {
  button {
    transition: background-color 0.15s;
  }
}

/* --- Menu and pass screen --- */

#menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin: 2rem 0;
}

#pass-screen {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 1rem;
  padding: 2rem;
  background: var(--ink);
}

#pass-screen h2 {
  font-size: clamp(2rem, 7vw, 3.2rem);
}

#pass-screen p {
  max-width: 26rem;
  margin: 0;
}

/* --- Placement --- */

#placement-panel {
  max-width: 40rem;
  margin: 0 auto 1.5rem;
  padding: 1rem;
  background: var(--deep-water);
  border-radius: var(--radius);
}

#dock {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  min-height: calc(var(--cell) + 0.5rem);
  margin-bottom: 1rem;
}

#placement-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.dock-ship {
  display: flex;
  background: var(--steel);
  border-radius: 999px;
  cursor: grab;
}

.dock-ship.vertical {
  flex-direction: column;
}

.dock-segment {
  width: var(--cell);
  height: calc(var(--cell) * 0.68);
}

.dock-ship.vertical .dock-segment {
  width: calc(var(--cell) * 0.68);
  height: var(--cell);
}

/* --- Boards --- */

#game-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

#game-area section {
  padding: 1rem;
  background: var(--paper);
  color: var(--ink);
  border-radius: var(--radius);
  text-align: left;
}

#game-area h2 {
  margin-bottom: 0.75rem;
}

.board {
  display: grid;
  grid-template-columns: repeat(11, var(--cell));
  grid-template-rows: repeat(11, var(--cell));
  gap: 1px; /* the panel color shows through as chart gridlines */
}

.label {
  display: grid;
  place-items: center;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.cell {
  position: relative;
  background: var(--water);
}

/* A hit on an enemy ship you haven't sunk yet: a plain steel marker */
.cell.hit:not(.hull) {
  background: var(--steel);
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
}

/* Hulls: one continuous shape drawn across a ship's squares */
.cell.hull::before {
  content: '';
  position: absolute;
  background: var(--steel);
}

.cell.hull.horizontal::before {
  inset: 16% -1px; /* the -1px bridges the gap to the next segment */
}

.cell.hull.vertical::before {
  inset: -1px 16%;
}

.cell.hull.horizontal.bow::before {
  left: 6%;
  border-radius: 999px 0 0 999px;
}

.cell.hull.horizontal.stern::before {
  right: 6%;
  border-radius: 0 999px 999px 0;
}

.cell.hull.vertical.bow::before {
  top: 6%;
  border-radius: 999px 999px 0 0;
}

.cell.hull.vertical.stern::before {
  bottom: 6%;
  border-radius: 0 0 999px 999px;
}

.cell.hull.bow.stern::before {
  border-radius: 999px; /* a one-square ship */
}

.cell.sunk::before {
  background: var(--sunk);
}

/* Pegs */
.cell.hit::after,
.cell.sunk::after,
.cell.miss::after {
  content: '';
  position: absolute;
  border-radius: 50%;
}

.cell.hit::after,
.cell.sunk::after {
  inset: 26%;
  background: var(--hit);
  box-shadow: 0 0 0 2px var(--paper);
}

.cell.miss::after {
  inset: 36%;
  background: var(--paper);
  box-shadow: 0 0 0 1px var(--muted);
}

/* Aiming at the enemy board */
#enemy-board.active .cell.empty:hover {
  outline: 3px solid var(--flag);
  outline-offset: -3px;
  cursor: crosshair;
}

/* Drag-and-drop preview (placed last so it wins over cell colors) */
.cell.preview-valid {
  background: var(--valid);
}

.cell.preview-invalid {
  background: var(--invalid);
}

/* --- Bottom controls --- */

#controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --ink: #0f2233;\n  --deep-water: #1b3a52;\n  --paper: #e9efec;\n  --water: #b7d1d6;\n  --steel: #4a6070;\n  --muted: #4d6475;\n  --flag: #f0b429;\n  --hit: #d4402b;\n  --valid: #6fcf97;\n  --invalid: #e8877a;\n  --sunk: #2b3f50;\n\n  --font-display: 'Big Shoulders Display', Impact, 'Arial Narrow', sans-serif;\n  --font-body: 'Public Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;\n\n  --cell: clamp(1.5rem, 6.6vw, 2.4rem);\n  --radius: 6px;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 1.5rem 1rem 3rem;\n  background: var(--ink);\n  color: var(--paper);\n  font-family: var(--font-body);\n  line-height: 1.5;\n  text-align: center;\n}\n\nh1,\nh2 {\n  font-family: var(--font-display);\n  font-weight: 800;\n  line-height: 1.05;\n  margin: 0;\n}\n\nh1 {\n  font-size: clamp(2.8rem, 9vw, 4.5rem);\n  letter-spacing: 0.04em;\n  margin-bottom: 1rem;\n}\n\nh2 {\n  font-size: 1.6rem;\n  letter-spacing: 0.02em;\n}\n\n/* --- Status line --- */\n\n#message {\n  max-width: 40rem;\n  margin: 0 auto 1.5rem;\n  padding: 0.75rem 1rem;\n  background: var(--deep-water);\n  border-left: 4px solid var(--flag);\n  border-radius: 0 var(--radius) var(--radius) 0;\n  text-align: left;\n}\n\n#message:empty {\n  display: none;\n}\n\n/* --- Buttons --- */\n\nbutton {\n  padding: 0.7rem 1.2rem;\n  border: 2px solid var(--paper);\n  border-radius: 4px;\n  background: transparent;\n  color: var(--paper);\n  font: 700 1.1rem/1 var(--font-display);\n  letter-spacing: 0.04em;\n  cursor: pointer;\n}\n\nbutton:hover:not(:disabled) {\n  background: rgba(233, 239, 236, 0.12);\n}\n\nbutton.primary {\n  background: var(--flag);\n  border-color: var(--flag);\n  color: var(--ink);\n}\n\nbutton.primary:hover:not(:disabled) {\n  background: #f6c85a;\n  border-color: #f6c85a;\n}\n\nbutton:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\nbutton:focus-visible {\n  outline: 3px solid var(--paper);\n  outline-offset: 3px;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  button {\n    transition: background-color 0.15s;\n  }\n}\n\n/* --- Menu and pass screen --- */\n\n#menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 2rem 0;\n}\n\n#pass-screen {\n  position: fixed;\n  inset: 0;\n  z-index: 10;\n  display: grid;\n  place-content: center;\n  justify-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  background: var(--ink);\n}\n\n#pass-screen h2 {\n  font-size: clamp(2rem, 7vw, 3.2rem);\n}\n\n#pass-screen p {\n  max-width: 26rem;\n  margin: 0;\n}\n\n/* --- Placement --- */\n\n#placement-panel {\n  max-width: 40rem;\n  margin: 0 auto 1.5rem;\n  padding: 1rem;\n  background: var(--deep-water);\n  border-radius: var(--radius);\n}\n\n#dock {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 1rem;\n  min-height: calc(var(--cell) + 0.5rem);\n  margin-bottom: 1rem;\n}\n\n#placement-controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.dock-ship {\n  display: flex;\n  background: var(--steel);\n  border-radius: 999px;\n  cursor: grab;\n}\n\n.dock-ship.vertical {\n  flex-direction: column;\n}\n\n.dock-segment {\n  width: var(--cell);\n  height: calc(var(--cell) * 0.68);\n}\n\n.dock-ship.vertical .dock-segment {\n  width: calc(var(--cell) * 0.68);\n  height: var(--cell);\n}\n\n/* --- Boards --- */\n\n#game-area {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1.5rem;\n}\n\n#game-area section {\n  padding: 1rem;\n  background: var(--paper);\n  color: var(--ink);\n  border-radius: var(--radius);\n  text-align: left;\n}\n\n#game-area h2 {\n  margin-bottom: 0.75rem;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(11, var(--cell));\n  grid-template-rows: repeat(11, var(--cell));\n  gap: 1px; /* the panel color shows through as chart gridlines */\n}\n\n.label {\n  display: grid;\n  place-items: center;\n  color: var(--muted);\n  font-size: 0.75rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n.cell {\n  position: relative;\n  background: var(--water);\n}\n\n/* A hit on an enemy ship you haven't sunk yet: a plain steel marker */\n.cell.hit:not(.hull) {\n  background: var(--steel);\n  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);\n}\n\n/* Hulls: one continuous shape drawn across a ship's squares */\n.cell.hull::before {\n  content: '';\n  position: absolute;\n  background: var(--steel);\n}\n\n.cell.hull.horizontal::before {\n  inset: 16% -1px; /* the -1px bridges the gap to the next segment */\n}\n\n.cell.hull.vertical::before {\n  inset: -1px 16%;\n}\n\n.cell.hull.horizontal.bow::before {\n  left: 6%;\n  border-radius: 999px 0 0 999px;\n}\n\n.cell.hull.horizontal.stern::before {\n  right: 6%;\n  border-radius: 0 999px 999px 0;\n}\n\n.cell.hull.vertical.bow::before {\n  top: 6%;\n  border-radius: 999px 999px 0 0;\n}\n\n.cell.hull.vertical.stern::before {\n  bottom: 6%;\n  border-radius: 0 0 999px 999px;\n}\n\n.cell.hull.bow.stern::before {\n  border-radius: 999px; /* a one-square ship */\n}\n\n.cell.sunk::before {\n  background: var(--sunk);\n}\n\n/* Pegs */\n.cell.hit::after,\n.cell.sunk::after,\n.cell.miss::after {\n  content: '';\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cell.hit::after,\n.cell.sunk::after {\n  inset: 26%;\n  background: var(--hit);\n  box-shadow: 0 0 0 2px var(--paper);\n}\n\n.cell.miss::after {\n  inset: 36%;\n  background: var(--paper);\n  box-shadow: 0 0 0 1px var(--muted);\n}\n\n/* Aiming at the enemy board */\n#enemy-board.active .cell.empty:hover {\n  outline: 3px solid var(--flag);\n  outline-offset: -3px;\n  cursor: crosshair;\n}\n\n/* Drag-and-drop preview (placed last so it wins over cell colors) */\n.cell.preview-valid {\n  background: var(--valid);\n}\n\n.cell.preview-invalid {\n  background: var(--invalid);\n}\n\n/* --- Bottom controls --- */\n\n#controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 1.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



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

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



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

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPlacementPreview: () => (/* binding */ clearPlacementPreview),
/* harmony export */   formatCoords: () => (/* binding */ formatCoords),
/* harmony export */   renderBoard: () => (/* binding */ renderBoard),
/* harmony export */   renderDock: () => (/* binding */ renderDock),
/* harmony export */   setBoardTitles: () => (/* binding */ setBoardTitles),
/* harmony export */   setMessage: () => (/* binding */ setMessage),
/* harmony export */   setPassScreen: () => (/* binding */ setPassScreen),
/* harmony export */   setStartEnabled: () => (/* binding */ setStartEnabled),
/* harmony export */   setStartLabel: () => (/* binding */ setStartLabel),
/* harmony export */   showPlacementPreview: () => (/* binding */ showPlacementPreview),
/* harmony export */   showView: () => (/* binding */ showView)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const COLUMN_LETTERS = 'ABCDEFGHIJ';

function formatCoords(x, y) {
  return `${COLUMN_LETTERS[x]}${y + 1}`;
}

function createLabel(text, className) {
  const label = document.createElement('div');
  label.classList.add('label', className);
  label.textContent = text;
  label.setAttribute('aria-hidden', 'true');
  return label;
}

function renderBoard(container, board, { showShips }) {
  container.replaceChildren();

  // Top row: an empty corner, then the column letters
  container.appendChild(createLabel('', 'corner'));
  for (let x = 0; x < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; x += 1) {
    container.appendChild(createLabel(COLUMN_LETTERS[x], 'col-label'));
  }

  for (let y = 0; y < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; y += 1) {
    // Each row starts with its number, then the 10 cells
    container.appendChild(createLabel(y + 1, 'row-label'));

    for (let x = 0; x < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; x += 1) {
      const cell = document.createElement('div');
      const state = board.getCellState(x, y);

      // Hide enemy ships until they've been hit
      const visible = state === 'ship' && !showShips ? 'empty' : state;
      cell.classList.add('cell', visible);
      cell.dataset.x = x;
      cell.dataset.y = y;

      // Draw the full hull only where the whole ship is meant to be visible:
      // your own ships, and enemy ships that have been sunk. A plain hit on an
      // enemy ship stays a neutral marker so it can't reveal the ship's direction.
      const isShipCell = ['ship', 'hit', 'sunk'].includes(state);
      if (isShipCell && (showShips || state === 'sunk')) {
        const { direction, index, length } = board.getShipPlacement(x, y);
        cell.classList.add('hull', direction);
        if (index === 0) cell.classList.add('bow');
        if (index === length - 1) cell.classList.add('stern');
      }

      container.appendChild(cell);
    }
  }
}

function setMessage(text) {
  document.querySelector('#message').textContent = text;
}

function renderDock(container, dock, direction) {
  container.replaceChildren();

  dock.forEach(({ id, name, length }) => {
    const shipEl = document.createElement('div');
    shipEl.classList.add('dock-ship', direction);
    shipEl.draggable = true;
    shipEl.dataset.id = id;
    shipEl.title = name;

    for (let i = 0; i < length; i += 1) {
      const segment = document.createElement('div');
      segment.classList.add('dock-segment');
      shipEl.appendChild(segment);
    }
    container.appendChild(shipEl);
  });
}

function setStartEnabled(enabled) {
  document.querySelector('#start').disabled = !enabled;
}

function clearPlacementPreview(container) {
  container
    .querySelectorAll('.preview-valid, .preview-invalid')
    .forEach((cell) => cell.classList.remove('preview-valid', 'preview-invalid'));
}

function showPlacementPreview(container, cells, valid) {
  clearPlacementPreview(container);
  cells.forEach(([x, y]) => {
    const cell = container.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    if (cell) {
      cell.classList.add(valid ? 'preview-valid' : 'preview-invalid');
    }
  });
}

function setStartLabel(text) {
  document.querySelector('#start').textContent = text;
}

function setBoardTitles(ownTitle, enemyTitle) {
  document.querySelector('#player-title').textContent = ownTitle;
  document.querySelector('#enemy-title').textContent = enemyTitle;
}

function setPassScreen(title, buttonText) {
  document.querySelector('#pass-title').textContent = title;
  document.querySelector('#pass-ready').textContent = buttonText;
}

const ALL_SECTIONS = [
  'menu',
  'pass-screen',
  'placement-panel',
  'game-area',
  'enemy-section',
  'end-turn',
];

const VIEWS = {
  menu: ['menu'],
  pass: ['pass-screen'],
  placement: ['placement-panel', 'game-area'],
  battle: ['game-area', 'enemy-section'],
};

function showView(view, { endTurn = false } = {}) {
  const visible = new Set(VIEWS[view]);
  if (endTurn) visible.add('end-turn');

  ALL_SECTIONS.forEach((id) => {
    document.querySelector(`#${id}`).hidden = !visible.has(id);
  });
}

/***/ },

/***/ "./src/game.js"
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




const READY_PROMPT =
  'Fleet ready! Confirm with the button below, or Reset to rearrange.';

function initGame() {
  let mode; // 'single' | 'two'
  let players; // [player1, player2]
  let names;
  let phase; // 'menu' | 'placement' | 'battle' | 'over'
  let current; // index of the player whose screen is showing
  let locked; // true once the active player has attacked this turn
  let computerTimeout;
  let afterPass = null; // what to do when the next player is ready
  let lastShot = ''; // text describing the most recent attack
  let dock = [];
  let direction = 'horizontal';
  let draggedShip = null;

  const playerBoardEl = document.querySelector('#player-board');
  const enemyBoardEl = document.querySelector('#enemy-board');
  const dockEl = document.querySelector('#dock');
  const singleBtn = document.querySelector('#play-single');
  const twoBtn = document.querySelector('#play-two');
  const passReadyBtn = document.querySelector('#pass-ready');
  const rotateBtn = document.querySelector('#rotate');
  const randomizeBtn = document.querySelector('#randomize');
  const resetBtn = document.querySelector('#reset');
  const startBtn = document.querySelector('#start');
  const endTurnBtn = document.querySelector('#end-turn');
  const newGameBtn = document.querySelector('#new-game');

  const activePlayer = () => players[current];
  const opponent = () => players[1 - current];

  // --- Rendering and text ---

  function render() {
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(playerBoardEl, activePlayer().gameboard, { showShips: true });
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(enemyBoardEl, opponent().gameboard, {
      showShips: phase === 'over', // reveal the enemy fleet at the end
    });
    enemyBoardEl.classList.toggle('active', phase === 'battle' && !locked);

    if (mode === 'single') {
      (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setBoardTitles)('Your fleet', 'Enemy waters');
    } else {
      (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setBoardTitles)(
        `${names[current]}'s fleet`,
        `${names[1 - current]}'s waters`
      );
    }
  }

  function renderDockArea() {
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderDock)(dockEl, dock, direction);
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setStartEnabled)(dock.length === 0);
  }

  function placementPrompt() {
    return mode === 'single'
      ? 'Drag your ships onto your board, then start the game.'
      : `${names[current]}, drag your ships onto your board.`;
  }

  function startLabel() {
    if (mode === 'single') return 'Start game';
    return current === 0 ? `Done: pass to ${names[1]}` : 'Start battle';
  }

  function turnPrompt() {
    return mode === 'single'
      ? 'Your turn: click a square on the enemy board.'
      : `${names[current]}, click a square on ${names[1 - current]}'s board.`;
  }

  // What just happened, followed by what to do next
  function turnMessage() {
    return [lastShot, turnPrompt()].filter(Boolean).join(' ');
  }

  function shipOwner(attacker) {
    if (mode === 'two') return `${names[1 - attacker]}'s`;
    return attacker === 0 ? 'the enemy' : 'your';
  }

  function describeShot(attacker) {
    const report = players[1 - attacker].gameboard.getLastAttack();
    const spot = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.formatCoords)(report.x, report.y);
    const shooter = names[attacker];

    if (report.sunk) {
      const ship = report.shipName.toLowerCase();
      return `${shooter} sank ${shipOwner(attacker)} ${ship} at ${spot}!`;
    }
    return `${shooter} fired at ${spot}: ${
      report.result === 'hit' ? 'hit!' : 'miss.'
    }`;
  }

  function resetDock() {
    dock = _gameboard__WEBPACK_IMPORTED_MODULE_1__.FLEET.map((ship, id) => ({ id, ...ship }));
  }

  function getCoords(event) {
    const cell = event.target.closest('.cell');
    if (!cell) return null;
    return { x: Number(cell.dataset.x), y: Number(cell.dataset.y) };
  }

  // --- Flow: menu, pass screen, placement, battle ---

  function passTo(index, callback) {
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)('');
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setPassScreen)(
      `Pass the device to ${names[index]}`,
      `I'm ${names[index]}: show my board`
    );
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.showView)('pass');
    afterPass = callback;
  }

  function showMenu() {
    clearTimeout(computerTimeout);
    afterPass = null;
    phase = 'menu';
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.showView)('menu');
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)('Choose a game mode.');
  }

  function beginPlacement(index) {
    phase = 'placement';
    current = index;
    locked = false;
    resetDock();
    direction = 'horizontal';
    draggedShip = null;
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.showView)('placement');
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setStartLabel)(startLabel());
    render();
    renderDockArea();
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)(placementPrompt());
  }

  function beginBattle() {
    phase = 'battle';
    current = 0;
    locked = false;
    lastShot = '';
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.showView)('battle');
    render();
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)(turnMessage());
  }

  function startGame(selectedMode) {
    mode = selectedMode;
    players = [(0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('real'), (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(mode === 'single' ? 'computer' : 'real')];
    names = mode === 'single' ? ['You', 'Computer'] : ['Player 1', 'Player 2'];
    lastShot = '';
    if (mode === 'single') players[1].gameboard.placeShipsRandomly();
    beginPlacement(0);
  }

  function checkGameOver(attacker) {
    if (!players[1 - attacker].gameboard.allShipsSunk()) return false;

    phase = 'over';
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.showView)('battle');
    render();

    let outcome;
    if (mode === 'single') {
      outcome =
        attacker === 0
          ? 'You win! All enemy ships have been sunk.'
          : 'You lose. The computer sank your fleet.';
    } else {
      outcome = `${names[attacker]} wins! Every ship of ${names[1 - attacker]} has been sunk.`;
    }
    ;(0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)(`${lastShot} ${outcome}`);
    return true;
  }

  function computerTurn() {
    players[1].attack(players[0].gameboard);
    lastShot = describeShot(1);
    if (checkGameOver(1)) return;
    locked = false;
    render();
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)(turnMessage());
  }

  function handleEnemyBoardClick(event) {
    const coords = getCoords(event);
    if (!coords || phase !== 'battle' || locked) return;

    const { x, y } = coords;
    if (opponent().gameboard.hasBeenAttacked(x, y)) return;

    activePlayer().attack(opponent().gameboard, x, y);
    locked = true;
    lastShot = describeShot(current);
    if (checkGameOver(current)) return;
    render();

    if (mode === 'single') {
      (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)(`${lastShot} Computer is aiming...`);
      computerTimeout = setTimeout(computerTurn, 600);
    } else {
      (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)(`${lastShot} Press End turn when you're done.`);
      (0,_dom__WEBPACK_IMPORTED_MODULE_2__.showView)('battle', { endTurn: true });
    }
  }

  // --- Drag and drop ---

  function handleDragStart(event) {
    const shipEl = event.target.closest('.dock-ship');
    if (!shipEl) return;
    draggedShip = dock.find((ship) => ship.id === Number(shipEl.dataset.id));
    event.dataTransfer.setData('text/plain', shipEl.dataset.id);
    event.dataTransfer.effectAllowed = 'move';
  }

  function handleDragEnd() {
    draggedShip = null;
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.clearPlacementPreview)(playerBoardEl);
  }

  function handleBoardDragOver(event) {
    const coords = getCoords(event);
    if (!draggedShip || !coords) return;

    const { x, y } = coords;
    const { length } = draggedShip;
    const valid = activePlayer().gameboard.canPlaceShip(x, y, length, direction);

    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.showPlacementPreview)(
      playerBoardEl,
      (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.getShipCells)(x, y, length, direction),
      valid
    );
    if (valid) event.preventDefault();
  }

  function handleBoardDragLeave(event) {
    if (!playerBoardEl.contains(event.relatedTarget)) {
      (0,_dom__WEBPACK_IMPORTED_MODULE_2__.clearPlacementPreview)(playerBoardEl);
    }
  }

  function handleBoardDrop(event) {
    event.preventDefault();
    const coords = getCoords(event);
    if (!draggedShip || !coords) return;

    const { x, y } = coords;
    const { id, name, length } = draggedShip;
    if (!activePlayer().gameboard.canPlaceShip(x, y, length, direction)) return;

    activePlayer().gameboard.placeShip(x, y, length, direction, name);
    dock = dock.filter((ship) => ship.id !== id);
    draggedShip = null;

    render();
    renderDockArea();
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)(dock.length === 0 ? READY_PROMPT : placementPrompt());
  }

  dockEl.addEventListener('dragstart', handleDragStart);
  dockEl.addEventListener('dragend', handleDragEnd);
  playerBoardEl.addEventListener('dragover', handleBoardDragOver);
  playerBoardEl.addEventListener('dragleave', handleBoardDragLeave);
  playerBoardEl.addEventListener('drop', handleBoardDrop);

  // --- Buttons ---

  singleBtn.addEventListener('click', () => startGame('single'));
  twoBtn.addEventListener('click', () => startGame('two'));

  passReadyBtn.addEventListener('click', () => {
    if (!afterPass) return;
    const callback = afterPass;
    afterPass = null;
    callback();
  });

  rotateBtn.addEventListener('click', () => {
    direction = direction === 'horizontal' ? 'vertical' : 'horizontal';
    renderDockArea();
  });

  randomizeBtn.addEventListener('click', () => {
    if (phase !== 'placement') return;
    activePlayer().gameboard.placeShipsRandomly();
    dock = [];
    render();
    renderDockArea();
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)(READY_PROMPT);
  });

  resetBtn.addEventListener('click', () => {
    if (phase !== 'placement') return;
    activePlayer().gameboard.reset();
    resetDock();
    render();
    renderDockArea();
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)(placementPrompt());
  });

  startBtn.addEventListener('click', () => {
    if (phase !== 'placement' || dock.length > 0) return;

    if (mode === 'single') {
      beginBattle();
    } else if (current === 0) {
      passTo(1, () => beginPlacement(1));
    } else {
      passTo(0, beginBattle);
    }
  });

  endTurnBtn.addEventListener('click', () => {
    if (phase !== 'battle' || mode !== 'two' || !locked) return;

    const next = 1 - current;
    passTo(next, () => {
      current = next;
      locked = false;
      (0,_dom__WEBPACK_IMPORTED_MODULE_2__.showView)('battle');
      render();
      (0,_dom__WEBPACK_IMPORTED_MODULE_2__.setMessage)(turnMessage());
    });
  });

  newGameBtn.addEventListener('click', showMenu);
  enemyBoardEl.addEventListener('click', handleEnemyBoardClick);

  showMenu();
}

/***/ },

/***/ "./src/gameboard.js"
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOARD_SIZE: () => (/* binding */ BOARD_SIZE),
/* harmony export */   FLEET: () => (/* binding */ FLEET),
/* harmony export */   "default": () => (/* binding */ Gameboard),
/* harmony export */   getShipCells: () => (/* binding */ getShipCells)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const BOARD_SIZE = 10;

const FLEET = [
  { name: 'Carrier', length: 5 },
  { name: 'Battleship', length: 4 },
  { name: 'Cruiser', length: 3 },
  { name: 'Submarine', length: 3 },
  { name: 'Destroyer', length: 2 },
];

function getShipCells(x, y, length, direction) {
  const dx = direction === 'horizontal' ? 1 : 0;
  const dy = direction === 'vertical' ? 1 : 0;
  return Array.from({ length }, (_, i) => [x + dx * i, y + dy * i]);
}

function Gameboard() {
  const ships = [];
  const placements = new Map(); // ship -> { direction, cells }
  const grid = Array.from({ length: BOARD_SIZE }, () =>
    Array(BOARD_SIZE).fill(null)
  );
  const missedAttacks = [];
  const attacked = new Set();
  let lastAttack = null;

  function isOnBoard(x, y) {
    return (
      Number.isInteger(x) &&
      Number.isInteger(y) &&
      x >= 0 &&
      x < BOARD_SIZE &&
      y >= 0 &&
      y < BOARD_SIZE
    );
  }

  function canPlaceShip(x, y, length, direction) {
    return getShipCells(x, y, length, direction).every(
      ([cx, cy]) => isOnBoard(cx, cy) && grid[cy][cx] === null
    );
  }

  function placeShip(x, y, length, direction, name) {
    if (!canPlaceShip(x, y, length, direction)) {
      throw new Error('Ship cannot be placed there');
    }

    const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(length, name);
    const cells = getShipCells(x, y, length, direction);
    cells.forEach(([cx, cy]) => {
      grid[cy][cx] = ship;
    });
    ships.push(ship);
    placements.set(ship, { direction, cells });
  }

  function reset() {
    grid.forEach((row) => row.fill(null));
    ships.length = 0;
    placements.clear();
    missedAttacks.length = 0;
    attacked.clear();
    lastAttack = null;
  }

  function placeShipsRandomly(fleet = FLEET) {
    reset();
    fleet.forEach(({ name, length }) => {
      let placed = false;
      while (!placed) {
        const x = Math.floor(Math.random() * BOARD_SIZE);
        const y = Math.floor(Math.random() * BOARD_SIZE);
        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        try {
          placeShip(x, y, length, direction, name);
          placed = true;
        } catch (error) {
          // Invalid spot (off the board or overlapping): pick another
        }
      }
    });
  }

  function receiveAttack(x, y) {
    if (!isOnBoard(x, y)) {
      throw new Error('Attack must be within the board');
    }
    const key = `${x},${y}`;
    if (attacked.has(key)) {
      throw new Error('Square has already been attacked');
    }
    attacked.add(key);

    const ship = grid[y][x];
    if (ship) {
      ship.hit();
      lastAttack = {
        x,
        y,
        result: 'hit',
        shipName: ship.name,
        sunk: ship.isSunk(),
      };
      return 'hit';
    }
    missedAttacks.push([x, y]);
    lastAttack = { x, y, result: 'miss', shipName: null, sunk: false };
    return 'miss';
  }

  function getLastAttack() {
    return lastAttack ? { ...lastAttack } : null;
  }

  function getMissedAttacks() {
    return missedAttacks.map((coords) => [...coords]);
  }

  function hasBeenAttacked(x, y) {
    return attacked.has(`${x},${y}`);
  }

  function getCellState(x, y) {
    if (!isOnBoard(x, y)) {
      throw new Error('Coordinates must be within the board');
    }
    const ship = grid[y][x];
    if (attacked.has(`${x},${y}`)) {
      if (!ship) return 'miss';
      return ship.isSunk() ? 'sunk' : 'hit';
    }
    return ship ? 'ship' : 'empty';
  }

  // Reveals where a ship is, so callers should only use it for squares
  // they are allowed to show.
  function getShipPlacement(x, y) {
    if (!isOnBoard(x, y) || grid[y][x] === null) return null;
    const ship = grid[y][x];
    const { direction, cells } = placements.get(ship);
    const index = cells.findIndex(([cx, cy]) => cx === x && cy === y);
    return { name: ship.name, length: ship.length, direction, index };
  }

  function allShipsSunk() {
    return ships.length > 0 && ships.every((ship) => ship.isSunk());
  }

  return {
    placeShip,
    canPlaceShip,
    placeShipsRandomly,
    reset,
    receiveAttack,
    getLastAttack,
    getMissedAttacks,
    hasBeenAttacked,
    getCellState,
    getShipPlacement,
    allShipsSunk,
  };
}

/***/ },

/***/ "./src/player.js"
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function Player(type) {
  if (type !== 'real' && type !== 'computer') {
    throw new Error('Player type must be "real" or "computer"');
  }

  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

  function isOnBoard(x, y) {
    return x >= 0 && x < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE && y >= 0 && y < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE;
  }

  function isLegalTarget(enemyBoard, x, y) {
    return isOnBoard(x, y) && !enemyBoard.hasBeenAttacked(x, y);
  }

  // The computer may only know what a human attacker could see:
  // nothing at all about squares it hasn't shot yet.
  function knownState(enemyBoard, x, y) {
    if (!isOnBoard(x, y) || !enemyBoard.hasBeenAttacked(x, y)) {
      return 'unknown';
    }
    return enemyBoard.getCellState(x, y);
  }

  function pickRandomSquare(enemyBoard) {
    const available = [];
    for (let y = 0; y < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; y += 1) {
      for (let x = 0; x < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; x += 1) {
        if (!enemyBoard.hasBeenAttacked(x, y)) {
          available.push([x, y]);
        }
      }
    }
    return available[Math.floor(Math.random() * available.length)];
  }

  // Hits on ships that are still afloat
  function findHits(enemyBoard) {
    const hits = [];
    for (let y = 0; y < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; y += 1) {
      for (let x = 0; x < _gameboard__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE; x += 1) {
        if (knownState(enemyBoard, x, y) === 'hit') {
          hits.push([x, y]);
        }
      }
    }
    return hits;
  }

  function pickHuntSquare(enemyBoard, hits) {
    const isHit = (x, y) => knownState(enemyBoard, x, y) === 'hit';
    const lineTargets = []; // squares that extend a row of 2+ hits
    const nearbyTargets = []; // any free square next to a hit

    hits.forEach(([x, y]) => {
      DIRECTIONS.forEach(([dx, dy]) => {
        const tx = x + dx;
        const ty = y + dy;
        if (!isLegalTarget(enemyBoard, tx, ty)) return;

        nearbyTargets.push([tx, ty]);
        // The square behind us is also a hit, so we're on a line
        if (isHit(x - dx, y - dy)) lineTargets.push([tx, ty]);
      });
    });

    const pool = lineTargets.length > 0 ? lineTargets : nearbyTargets;
    if (pool.length === 0) return pickRandomSquare(enemyBoard);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function pickSquare(enemyBoard) {
    const hits = findHits(enemyBoard);
    return hits.length > 0
      ? pickHuntSquare(enemyBoard, hits)
      : pickRandomSquare(enemyBoard);
  }

  function attack(enemyBoard, x, y) {
    if (type === 'computer') {
      const [targetX, targetY] = pickSquare(enemyBoard);
      return enemyBoard.receiveAttack(targetX, targetY);
    }
    return enemyBoard.receiveAttack(x, y);
  }

  return { type, gameboard, attack };
}

/***/ },

/***/ "./src/ship.js"
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length, name = 'Ship') {
  let hits = 0;

  return {
    length,
    name,

    get hits() {
      return hits;
    },

    hit() {
      if (hits < length) {
        hits += 1;
      }
    },

    isSunk() {
      return hits >= length;
    },
  };
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");



(0,_game_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsdUJBQXVCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxP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QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQzs7Ozs7Ozs7Ozs7Ozs7QUNoR2U7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVQzVCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsaUNBQWlDLFdBQVc7VUFDNUM7VUFDQSxFOzs7VUNQQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBLEU7OztVQ1BBLHlGOzs7VUNBQTtVQUNBO1VBQ0Esc0RBQXNELGlCQUFpQjtVQUN2RSxnREFBZ0QsYUFBYTtVQUM3RCxFOzs7VUNKQSxtQzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1k7O0FBRWpDLG9EQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWluazogIzBmMjIzMztcbiAgLS1kZWVwLXdhdGVyOiAjMWIzYTUyO1xuICAtLXBhcGVyOiAjZTllZmVjO1xuICAtLXdhdGVyOiAjYjdkMWQ2O1xuICAtLXN0ZWVsOiAjNGE2MDcwO1xuICAtLW11dGVkOiAjNGQ2NDc1O1xuICAtLWZsYWc6ICNmMGI0Mjk7XG4gIC0taGl0OiAjZDQ0MDJiO1xuICAtLXZhbGlkOiAjNmZjZjk3O1xuICAtLWludmFsaWQ6ICNlODg3N2E7XG4gIC0tc3VuazogIzJiM2Y1MDtcblxuICAtLWZvbnQtZGlzcGxheTogJ0JpZyBTaG91bGRlcnMgRGlzcGxheScsIEltcGFjdCwgJ0FyaWFsIE5hcnJvdycsIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1ib2R5OiAnUHVibGljIFNhbnMnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG5cbiAgLS1jZWxsOiBjbGFtcCgxLjVyZW0sIDYuNnZ3LCAyLjRyZW0pO1xuICAtLXJhZGl1czogNnB4O1xufVxuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDNyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWluayk7XG4gIGNvbG9yOiB2YXIoLS1wYXBlcik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWJvZHkpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxLFxuaDIge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1kaXNwbGF5KTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IGNsYW1wKDIuOHJlbSwgOXZ3LCA0LjVyZW0pO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4vKiAtLS0gU3RhdHVzIGxpbmUgLS0tICovXG5cbiNtZXNzYWdlIHtcbiAgbWF4LXdpZHRoOiA0MHJlbTtcbiAgbWFyZ2luOiAwIGF1dG8gMS41cmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWRlZXAtd2F0ZXIpO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWZsYWcpO1xuICBib3JkZXItcmFkaXVzOiAwIHZhcigtLXJhZGl1cykgdmFyKC0tcmFkaXVzKSAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jbWVzc2FnZTplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIC0tLSBCdXR0b25zIC0tLSAqL1xuXG5idXR0b24ge1xuICBwYWRkaW5nOiAwLjdyZW0gMS4ycmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wYXBlcik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1wYXBlcik7XG4gIGZvbnQ6IDcwMCAxLjFyZW0vMSB2YXIoLS1mb250LWRpc3BsYXkpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMzksIDIzNiwgMC4xMik7XG59XG5cbmJ1dHRvbi5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZmxhZyk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmxhZyk7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xufVxuXG5idXR0b24ucHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICNmNmM4NWE7XG4gIGJvcmRlci1jb2xvcjogI2Y2Yzg1YTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5idXR0b246Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1wYXBlcik7XG4gIG91dGxpbmUtb2Zmc2V0OiAzcHg7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkge1xuICBidXR0b24ge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXM7XG4gIH1cbn1cblxuLyogLS0tIE1lbnUgYW5kIHBhc3Mgc2NyZWVuIC0tLSAqL1xuXG4jbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG5cbiNwYXNzLXNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmspO1xufVxuXG4jcGFzcy1zY3JlZW4gaDIge1xuICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDd2dywgMy4ycmVtKTtcbn1cblxuI3Bhc3Mtc2NyZWVuIHAge1xuICBtYXgtd2lkdGg6IDI2cmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIC0tLSBQbGFjZW1lbnQgLS0tICovXG5cbiNwbGFjZW1lbnQtcGFuZWwge1xuICBtYXgtd2lkdGg6IDQwcmVtO1xuICBtYXJnaW46IDAgYXV0byAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWRlZXAtd2F0ZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xufVxuXG4jZG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1pbi1oZWlnaHQ6IGNhbGModmFyKC0tY2VsbCkgKyAwLjVyZW0pO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jcGxhY2VtZW50LWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5kb2NrLXNoaXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdGVlbCk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5kb2NrLXNoaXAudmVydGljYWwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZG9jay1zZWdtZW50IHtcbiAgd2lkdGg6IHZhcigtLWNlbGwpO1xuICBoZWlnaHQ6IGNhbGModmFyKC0tY2VsbCkgKiAwLjY4KTtcbn1cblxuLmRvY2stc2hpcC52ZXJ0aWNhbCAuZG9jay1zZWdtZW50IHtcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbCkgKiAwLjY4KTtcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsKTtcbn1cblxuLyogLS0tIEJvYXJkcyAtLS0gKi9cblxuI2dhbWUtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xufVxuXG4jZ2FtZS1hcmVhIHNlY3Rpb24ge1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XG4gIGNvbG9yOiB2YXIoLS1pbmspO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jZ2FtZS1hcmVhIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIHZhcigtLWNlbGwpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTEsIHZhcigtLWNlbGwpKTtcbiAgZ2FwOiAxcHg7IC8qIHRoZSBwYW5lbCBjb2xvciBzaG93cyB0aHJvdWdoIGFzIGNoYXJ0IGdyaWRsaW5lcyAqL1xufVxuXG4ubGFiZWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG5cbi5jZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXRlcik7XG59XG5cbi8qIEEgaGl0IG9uIGFuIGVuZW15IHNoaXAgeW91IGhhdmVuJ3Qgc3VuayB5ZXQ6IGEgcGxhaW4gc3RlZWwgbWFya2VyICovXG4uY2VsbC5oaXQ6bm90KC5odWxsKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN0ZWVsKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi8qIEh1bGxzOiBvbmUgY29udGludW91cyBzaGFwZSBkcmF3biBhY3Jvc3MgYSBzaGlwJ3Mgc3F1YXJlcyAqL1xuLmNlbGwuaHVsbDo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3RlZWwpO1xufVxuXG4uY2VsbC5odWxsLmhvcml6b250YWw6OmJlZm9yZSB7XG4gIGluc2V0OiAxNiUgLTFweDsgLyogdGhlIC0xcHggYnJpZGdlcyB0aGUgZ2FwIHRvIHRoZSBuZXh0IHNlZ21lbnQgKi9cbn1cblxuLmNlbGwuaHVsbC52ZXJ0aWNhbDo6YmVmb3JlIHtcbiAgaW5zZXQ6IC0xcHggMTYlO1xufVxuXG4uY2VsbC5odWxsLmhvcml6b250YWwuYm93OjpiZWZvcmUge1xuICBsZWZ0OiA2JTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHggMCAwIDk5OXB4O1xufVxuXG4uY2VsbC5odWxsLmhvcml6b250YWwuc3Rlcm46OmJlZm9yZSB7XG4gIHJpZ2h0OiA2JTtcbiAgYm9yZGVyLXJhZGl1czogMCA5OTlweCA5OTlweCAwO1xufVxuXG4uY2VsbC5odWxsLnZlcnRpY2FsLmJvdzo6YmVmb3JlIHtcbiAgdG9wOiA2JTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHggOTk5cHggMCAwO1xufVxuXG4uY2VsbC5odWxsLnZlcnRpY2FsLnN0ZXJuOjpiZWZvcmUge1xuICBib3R0b206IDYlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgOTk5cHggOTk5cHg7XG59XG5cbi5jZWxsLmh1bGwuYm93LnN0ZXJuOjpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA5OTlweDsgLyogYSBvbmUtc3F1YXJlIHNoaXAgKi9cbn1cblxuLmNlbGwuc3Vuazo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3Vuayk7XG59XG5cbi8qIFBlZ3MgKi9cbi5jZWxsLmhpdDo6YWZ0ZXIsXG4uY2VsbC5zdW5rOjphZnRlcixcbi5jZWxsLm1pc3M6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2VsbC5oaXQ6OmFmdGVyLFxuLmNlbGwuc3Vuazo6YWZ0ZXIge1xuICBpbnNldDogMjYlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oaXQpO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tcGFwZXIpO1xufVxuXG4uY2VsbC5taXNzOjphZnRlciB7XG4gIGluc2V0OiAzNiU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLW11dGVkKTtcbn1cblxuLyogQWltaW5nIGF0IHRoZSBlbmVteSBib2FyZCAqL1xuI2VuZW15LWJvYXJkLmFjdGl2ZSAuY2VsbC5lbXB0eTpob3ZlciB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1mbGFnKTtcbiAgb3V0bGluZS1vZmZzZXQ6IC0zcHg7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG4vKiBEcmFnLWFuZC1kcm9wIHByZXZpZXcgKHBsYWNlZCBsYXN0IHNvIGl0IHdpbnMgb3ZlciBjZWxsIGNvbG9ycykgKi9cbi5jZWxsLnByZXZpZXctdmFsaWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12YWxpZCk7XG59XG5cbi5jZWxsLnByZXZpZXctaW52YWxpZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWludmFsaWQpO1xufVxuXG4vKiAtLS0gQm90dG9tIGNvbnRyb2xzIC0tLSAqL1xuXG4jY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlOztFQUVmLDJFQUEyRTtFQUMzRSw0RUFBNEU7O0VBRTVFLG9DQUFvQztFQUNwQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVB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QXNCO0FBQzlDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLFNBQVM7QUFDVDs7O0VBR0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLGtDQUFrQztBQUNwQzs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsNEJBQTRCOztBQUU1QjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1pbms6ICMwZjIyMzM7XFxuICAtLWRlZXAtd2F0ZXI6ICMxYjNhNTI7XFxuICAtLXBhcGVyOiAjZTllZmVjO1xcbiAgLS13YXRlcjogI2I3ZDFkNjtcXG4gIC0tc3RlZWw6ICM0YTYwNzA7XFxuICAtLW11dGVkOiAjNGQ2NDc1O1xcbiAgLS1mbGFnOiAjZjBiNDI5O1xcbiAgLS1oaXQ6ICNkNDQwMmI7XFxuICAtLXZhbGlkOiAjNmZjZjk3O1xcbiAgLS1pbnZhbGlkOiAjZTg4NzdhO1xcbiAgLS1zdW5rOiAjMmIzZjUwO1xcblxcbiAgLS1mb250LWRpc3BsYXk6ICdCaWcgU2hvdWxkZXJzIERpc3BsYXknLCBJbXBhY3QsICdBcmlhbCBOYXJyb3cnLCBzYW5zLXNlcmlmO1xcbiAgLS1mb250LWJvZHk6ICdQdWJsaWMgU2FucycsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjtcXG5cXG4gIC0tY2VsbDogY2xhbXAoMS41cmVtLCA2LjZ2dywgMi40cmVtKTtcXG4gIC0tcmFkaXVzOiA2cHg7XFxufVxcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDNyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmspO1xcbiAgY29sb3I6IHZhcigtLXBhcGVyKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWJvZHkpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZGlzcGxheSk7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMDU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMi44cmVtLCA5dncsIDQuNXJlbSk7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xcbn1cXG5cXG4vKiAtLS0gU3RhdHVzIGxpbmUgLS0tICovXFxuXFxuI21lc3NhZ2Uge1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRlZXAtd2F0ZXIpO1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1mbGFnKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tcmFkaXVzKSB2YXIoLS1yYWRpdXMpIDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jbWVzc2FnZTplbXB0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiAtLS0gQnV0dG9ucyAtLS0gKi9cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMC43cmVtIDEuMnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBhcGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLXBhcGVyKTtcXG4gIGZvbnQ6IDcwMCAxLjFyZW0vMSB2YXIoLS1mb250LWRpc3BsYXkpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMzksIDIzNiwgMC4xMik7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZsYWcpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mbGFnKTtcXG4gIGNvbG9yOiB2YXIoLS1pbmspO1xcbn1cXG5cXG5idXR0b24ucHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICBiYWNrZ3JvdW5kOiAjZjZjODVhO1xcbiAgYm9yZGVyLWNvbG9yOiAjZjZjODVhO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuYnV0dG9uOmZvY3VzLXZpc2libGUge1xcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLXBhcGVyKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAzcHg7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkge1xcbiAgYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cztcXG4gIH1cXG59XFxuXFxuLyogLS0tIE1lbnUgYW5kIHBhc3Mgc2NyZWVuIC0tLSAqL1xcblxcbiNtZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC43NXJlbTtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbn1cXG5cXG4jcGFzcy1zY3JlZW4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaW5zZXQ6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taW5rKTtcXG59XFxuXFxuI3Bhc3Mtc2NyZWVuIGgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMnJlbSwgN3Z3LCAzLjJyZW0pO1xcbn1cXG5cXG4jcGFzcy1zY3JlZW4gcCB7XFxuICBtYXgtd2lkdGg6IDI2cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiAtLS0gUGxhY2VtZW50IC0tLSAqL1xcblxcbiNwbGFjZW1lbnQtcGFuZWwge1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG4gIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWVwLXdhdGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxufVxcblxcbiNkb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWluLWhlaWdodDogY2FsYyh2YXIoLS1jZWxsKSArIDAuNXJlbSk7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jcGxhY2VtZW50LWNvbnRyb2xzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uZG9jay1zaGlwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdGVlbCk7XFxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmRvY2stc2hpcC52ZXJ0aWNhbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZG9jay1zZWdtZW50IHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1jZWxsKSAqIDAuNjgpO1xcbn1cXG5cXG4uZG9jay1zaGlwLnZlcnRpY2FsIC5kb2NrLXNlZ21lbnQge1xcbiAgd2lkdGg6IGNhbGModmFyKC0tY2VsbCkgKiAwLjY4KTtcXG4gIGhlaWdodDogdmFyKC0tY2VsbCk7XFxufVxcblxcbi8qIC0tLSBCb2FyZHMgLS0tICovXFxuXFxuI2dhbWUtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuI2dhbWUtYXJlYSBzZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlcik7XFxuICBjb2xvcjogdmFyKC0taW5rKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jZ2FtZS1hcmVhIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIHZhcigtLWNlbGwpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDExLCB2YXIoLS1jZWxsKSk7XFxuICBnYXA6IDFweDsgLyogdGhlIHBhbmVsIGNvbG9yIHNob3dzIHRocm91Z2ggYXMgY2hhcnQgZ3JpZGxpbmVzICovXFxufVxcblxcbi5sYWJlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcXG59XFxuXFxuLmNlbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0td2F0ZXIpO1xcbn1cXG5cXG4vKiBBIGhpdCBvbiBhbiBlbmVteSBzaGlwIHlvdSBoYXZlbid0IHN1bmsgeWV0OiBhIHBsYWluIHN0ZWVsIG1hcmtlciAqL1xcbi5jZWxsLmhpdDpub3QoLmh1bGwpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXN0ZWVsKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcbn1cXG5cXG4vKiBIdWxsczogb25lIGNvbnRpbnVvdXMgc2hhcGUgZHJhd24gYWNyb3NzIGEgc2hpcCdzIHNxdWFyZXMgKi9cXG4uY2VsbC5odWxsOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdGVlbCk7XFxufVxcblxcbi5jZWxsLmh1bGwuaG9yaXpvbnRhbDo6YmVmb3JlIHtcXG4gIGluc2V0OiAxNiUgLTFweDsgLyogdGhlIC0xcHggYnJpZGdlcyB0aGUgZ2FwIHRvIHRoZSBuZXh0IHNlZ21lbnQgKi9cXG59XFxuXFxuLmNlbGwuaHVsbC52ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIGluc2V0OiAtMXB4IDE2JTtcXG59XFxuXFxuLmNlbGwuaHVsbC5ob3Jpem9udGFsLmJvdzo6YmVmb3JlIHtcXG4gIGxlZnQ6IDYlO1xcbiAgYm9yZGVyLXJhZGl1czogOTk5cHggMCAwIDk5OXB4O1xcbn1cXG5cXG4uY2VsbC5odWxsLmhvcml6b250YWwuc3Rlcm46OmJlZm9yZSB7XFxuICByaWdodDogNiU7XFxuICBib3JkZXItcmFkaXVzOiAwIDk5OXB4IDk5OXB4IDA7XFxufVxcblxcbi5jZWxsLmh1bGwudmVydGljYWwuYm93OjpiZWZvcmUge1xcbiAgdG9wOiA2JTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4IDk5OXB4IDAgMDtcXG59XFxuXFxuLmNlbGwuaHVsbC52ZXJ0aWNhbC5zdGVybjo6YmVmb3JlIHtcXG4gIGJvdHRvbTogNiU7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgOTk5cHggOTk5cHg7XFxufVxcblxcbi5jZWxsLmh1bGwuYm93LnN0ZXJuOjpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7IC8qIGEgb25lLXNxdWFyZSBzaGlwICovXFxufVxcblxcbi5jZWxsLnN1bms6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdW5rKTtcXG59XFxuXFxuLyogUGVncyAqL1xcbi5jZWxsLmhpdDo6YWZ0ZXIsXFxuLmNlbGwuc3Vuazo6YWZ0ZXIsXFxuLmNlbGwubWlzczo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jZWxsLmhpdDo6YWZ0ZXIsXFxuLmNlbGwuc3Vuazo6YWZ0ZXIge1xcbiAgaW5zZXQ6IDI2JTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhpdCk7XFxuICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tcGFwZXIpO1xcbn1cXG5cXG4uY2VsbC5taXNzOjphZnRlciB7XFxuICBpbnNldDogMzYlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXIpO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLyogQWltaW5nIGF0IHRoZSBlbmVteSBib2FyZCAqL1xcbiNlbmVteS1ib2FyZC5hY3RpdmUgLmNlbGwuZW1wdHk6aG92ZXIge1xcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWZsYWcpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0zcHg7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLyogRHJhZy1hbmQtZHJvcCBwcmV2aWV3IChwbGFjZWQgbGFzdCBzbyBpdCB3aW5zIG92ZXIgY2VsbCBjb2xvcnMpICovXFxuLmNlbGwucHJldmlldy12YWxpZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12YWxpZCk7XFxufVxcblxcbi5jZWxsLnByZXZpZXctaW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnZhbGlkKTtcXG59XFxuXFxuLyogLS0tIEJvdHRvbSBjb250cm9scyAtLS0gKi9cXG5cXG4jY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQk9BUkRfU0laRSB9IGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgQ09MVU1OX0xFVFRFUlMgPSAnQUJDREVGR0hJSic7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDb29yZHMoeCwgeSkge1xuICByZXR1cm4gYCR7Q09MVU1OX0xFVFRFUlNbeF19JHt5ICsgMX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbCh0ZXh0LCBjbGFzc05hbWUpIHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnbGFiZWwnLCBjbGFzc05hbWUpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICByZXR1cm4gbGFiZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb2FyZChjb250YWluZXIsIGJvYXJkLCB7IHNob3dTaGlwcyB9KSB7XG4gIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAvLyBUb3Agcm93OiBhbiBlbXB0eSBjb3JuZXIsIHRoZW4gdGhlIGNvbHVtbiBsZXR0ZXJzXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnJywgJ2Nvcm5lcicpKTtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBCT0FSRF9TSVpFOyB4ICs9IDEpIHtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoQ09MVU1OX0xFVFRFUlNbeF0sICdjb2wtbGFiZWwnKSk7XG4gIH1cblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IEJPQVJEX1NJWkU7IHkgKz0gMSkge1xuICAgIC8vIEVhY2ggcm93IHN0YXJ0cyB3aXRoIGl0cyBudW1iZXIsIHRoZW4gdGhlIDEwIGNlbGxzXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKHkgKyAxLCAncm93LWxhYmVsJykpO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBCT0FSRF9TSVpFOyB4ICs9IDEpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gYm9hcmQuZ2V0Q2VsbFN0YXRlKHgsIHkpO1xuXG4gICAgICAvLyBIaWRlIGVuZW15IHNoaXBzIHVudGlsIHRoZXkndmUgYmVlbiBoaXRcbiAgICAgIGNvbnN0IHZpc2libGUgPSBzdGF0ZSA9PT0gJ3NoaXAnICYmICFzaG93U2hpcHMgPyAnZW1wdHknIDogc3RhdGU7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnLCB2aXNpYmxlKTtcbiAgICAgIGNlbGwuZGF0YXNldC54ID0geDtcbiAgICAgIGNlbGwuZGF0YXNldC55ID0geTtcblxuICAgICAgLy8gRHJhdyB0aGUgZnVsbCBodWxsIG9ubHkgd2hlcmUgdGhlIHdob2xlIHNoaXAgaXMgbWVhbnQgdG8gYmUgdmlzaWJsZTpcbiAgICAgIC8vIHlvdXIgb3duIHNoaXBzLCBhbmQgZW5lbXkgc2hpcHMgdGhhdCBoYXZlIGJlZW4gc3Vuay4gQSBwbGFpbiBoaXQgb24gYW5cbiAgICAgIC8vIGVuZW15IHNoaXAgc3RheXMgYSBuZXV0cmFsIG1hcmtlciBzbyBpdCBjYW4ndCByZXZlYWwgdGhlIHNoaXAncyBkaXJlY3Rpb24uXG4gICAgICBjb25zdCBpc1NoaXBDZWxsID0gWydzaGlwJywgJ2hpdCcsICdzdW5rJ10uaW5jbHVkZXMoc3RhdGUpO1xuICAgICAgaWYgKGlzU2hpcENlbGwgJiYgKHNob3dTaGlwcyB8fCBzdGF0ZSA9PT0gJ3N1bmsnKSkge1xuICAgICAgICBjb25zdCB7IGRpcmVjdGlvbiwgaW5kZXgsIGxlbmd0aCB9ID0gYm9hcmQuZ2V0U2hpcFBsYWNlbWVudCh4LCB5KTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdodWxsJywgZGlyZWN0aW9uKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JvdycpO1xuICAgICAgICBpZiAoaW5kZXggPT09IGxlbmd0aCAtIDEpIGNlbGwuY2xhc3NMaXN0LmFkZCgnc3Rlcm4nKTtcbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWVzc2FnZSh0ZXh0KSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJykudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRG9jayhjb250YWluZXIsIGRvY2ssIGRpcmVjdGlvbikge1xuICBjb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgZG9jay5mb3JFYWNoKCh7IGlkLCBuYW1lLCBsZW5ndGggfSkgPT4ge1xuICAgIGNvbnN0IHNoaXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBFbC5jbGFzc0xpc3QuYWRkKCdkb2NrLXNoaXAnLCBkaXJlY3Rpb24pO1xuICAgIHNoaXBFbC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgIHNoaXBFbC5kYXRhc2V0LmlkID0gaWQ7XG4gICAgc2hpcEVsLnRpdGxlID0gbmFtZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNlZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNlZ21lbnQuY2xhc3NMaXN0LmFkZCgnZG9jay1zZWdtZW50Jyk7XG4gICAgICBzaGlwRWwuYXBwZW5kQ2hpbGQoc2VnbWVudCk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwRWwpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXJ0RW5hYmxlZChlbmFibGVkKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydCcpLmRpc2FibGVkID0gIWVuYWJsZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclBsYWNlbWVudFByZXZpZXcoY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lclxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcucHJldmlldy12YWxpZCwgLnByZXZpZXctaW52YWxpZCcpXG4gICAgLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgncHJldmlldy12YWxpZCcsICdwcmV2aWV3LWludmFsaWQnKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UGxhY2VtZW50UHJldmlldyhjb250YWluZXIsIGNlbGxzLCB2YWxpZCkge1xuICBjbGVhclBsYWNlbWVudFByZXZpZXcoY29udGFpbmVyKTtcbiAgY2VsbHMuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCk7XG4gICAgaWYgKGNlbGwpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCh2YWxpZCA/ICdwcmV2aWV3LXZhbGlkJyA6ICdwcmV2aWV3LWludmFsaWQnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RhcnRMYWJlbCh0ZXh0KSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydCcpLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEJvYXJkVGl0bGVzKG93blRpdGxlLCBlbmVteVRpdGxlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItdGl0bGUnKS50ZXh0Q29udGVudCA9IG93blRpdGxlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5lbXktdGl0bGUnKS50ZXh0Q29udGVudCA9IGVuZW15VGl0bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQYXNzU2NyZWVuKHRpdGxlLCBidXR0b25UZXh0KSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzLXRpdGxlJykudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3MtcmVhZHknKS50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG59XG5cbmNvbnN0IEFMTF9TRUNUSU9OUyA9IFtcbiAgJ21lbnUnLFxuICAncGFzcy1zY3JlZW4nLFxuICAncGxhY2VtZW50LXBhbmVsJyxcbiAgJ2dhbWUtYXJlYScsXG4gICdlbmVteS1zZWN0aW9uJyxcbiAgJ2VuZC10dXJuJyxcbl07XG5cbmNvbnN0IFZJRVdTID0ge1xuICBtZW51OiBbJ21lbnUnXSxcbiAgcGFzczogWydwYXNzLXNjcmVlbiddLFxuICBwbGFjZW1lbnQ6IFsncGxhY2VtZW50LXBhbmVsJywgJ2dhbWUtYXJlYSddLFxuICBiYXR0bGU6IFsnZ2FtZS1hcmVhJywgJ2VuZW15LXNlY3Rpb24nXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Vmlldyh2aWV3LCB7IGVuZFR1cm4gPSBmYWxzZSB9ID0ge30pIHtcbiAgY29uc3QgdmlzaWJsZSA9IG5ldyBTZXQoVklFV1Nbdmlld10pO1xuICBpZiAoZW5kVHVybikgdmlzaWJsZS5hZGQoJ2VuZC10dXJuJyk7XG5cbiAgQUxMX1NFQ1RJT05TLmZvckVhY2goKGlkKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCkuaGlkZGVuID0gIXZpc2libGUuaGFzKGlkKTtcbiAgfSk7XG59IiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBGTEVFVCwgZ2V0U2hpcENlbGxzIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHtcbiAgcmVuZGVyQm9hcmQsXG4gIHJlbmRlckRvY2ssXG4gIHNldE1lc3NhZ2UsXG4gIHNldFN0YXJ0RW5hYmxlZCxcbiAgc2V0U3RhcnRMYWJlbCxcbiAgc2V0Qm9hcmRUaXRsZXMsXG4gIHNldFBhc3NTY3JlZW4sXG4gIHNob3dWaWV3LFxuICBzaG93UGxhY2VtZW50UHJldmlldyxcbiAgY2xlYXJQbGFjZW1lbnRQcmV2aWV3LFxuICBmb3JtYXRDb29yZHMsXG59IGZyb20gJy4vZG9tJztcblxuY29uc3QgUkVBRFlfUFJPTVBUID1cbiAgJ0ZsZWV0IHJlYWR5ISBDb25maXJtIHdpdGggdGhlIGJ1dHRvbiBiZWxvdywgb3IgUmVzZXQgdG8gcmVhcnJhbmdlLic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRHYW1lKCkge1xuICBsZXQgbW9kZTsgLy8gJ3NpbmdsZScgfCAndHdvJ1xuICBsZXQgcGxheWVyczsgLy8gW3BsYXllcjEsIHBsYXllcjJdXG4gIGxldCBuYW1lcztcbiAgbGV0IHBoYXNlOyAvLyAnbWVudScgfCAncGxhY2VtZW50JyB8ICdiYXR0bGUnIHwgJ292ZXInXG4gIGxldCBjdXJyZW50OyAvLyBpbmRleCBvZiB0aGUgcGxheWVyIHdob3NlIHNjcmVlbiBpcyBzaG93aW5nXG4gIGxldCBsb2NrZWQ7IC8vIHRydWUgb25jZSB0aGUgYWN0aXZlIHBsYXllciBoYXMgYXR0YWNrZWQgdGhpcyB0dXJuXG4gIGxldCBjb21wdXRlclRpbWVvdXQ7XG4gIGxldCBhZnRlclBhc3MgPSBudWxsOyAvLyB3aGF0IHRvIGRvIHdoZW4gdGhlIG5leHQgcGxheWVyIGlzIHJlYWR5XG4gIGxldCBsYXN0U2hvdCA9ICcnOyAvLyB0ZXh0IGRlc2NyaWJpbmcgdGhlIG1vc3QgcmVjZW50IGF0dGFja1xuICBsZXQgZG9jayA9IFtdO1xuICBsZXQgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICBsZXQgZHJhZ2dlZFNoaXAgPSBudWxsO1xuXG4gIGNvbnN0IHBsYXllckJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLWJvYXJkJyk7XG4gIGNvbnN0IGVuZW15Qm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmVteS1ib2FyZCcpO1xuICBjb25zdCBkb2NrRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9jaycpO1xuICBjb25zdCBzaW5nbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheS1zaW5nbGUnKTtcbiAgY29uc3QgdHdvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXktdHdvJyk7XG4gIGNvbnN0IHBhc3NSZWFkeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzLXJlYWR5Jyk7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3RhdGUnKTtcbiAgY29uc3QgcmFuZG9taXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbWl6ZScpO1xuICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldCcpO1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydCcpO1xuICBjb25zdCBlbmRUdXJuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC10dXJuJyk7XG4gIGNvbnN0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LWdhbWUnKTtcblxuICBjb25zdCBhY3RpdmVQbGF5ZXIgPSAoKSA9PiBwbGF5ZXJzW2N1cnJlbnRdO1xuICBjb25zdCBvcHBvbmVudCA9ICgpID0+IHBsYXllcnNbMSAtIGN1cnJlbnRdO1xuXG4gIC8vIC0tLSBSZW5kZXJpbmcgYW5kIHRleHQgLS0tXG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJlbmRlckJvYXJkKHBsYXllckJvYXJkRWwsIGFjdGl2ZVBsYXllcigpLmdhbWVib2FyZCwgeyBzaG93U2hpcHM6IHRydWUgfSk7XG4gICAgcmVuZGVyQm9hcmQoZW5lbXlCb2FyZEVsLCBvcHBvbmVudCgpLmdhbWVib2FyZCwge1xuICAgICAgc2hvd1NoaXBzOiBwaGFzZSA9PT0gJ292ZXInLCAvLyByZXZlYWwgdGhlIGVuZW15IGZsZWV0IGF0IHRoZSBlbmRcbiAgICB9KTtcbiAgICBlbmVteUJvYXJkRWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgcGhhc2UgPT09ICdiYXR0bGUnICYmICFsb2NrZWQpO1xuXG4gICAgaWYgKG1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICBzZXRCb2FyZFRpdGxlcygnWW91ciBmbGVldCcsICdFbmVteSB3YXRlcnMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Qm9hcmRUaXRsZXMoXG4gICAgICAgIGAke25hbWVzW2N1cnJlbnRdfSdzIGZsZWV0YCxcbiAgICAgICAgYCR7bmFtZXNbMSAtIGN1cnJlbnRdfSdzIHdhdGVyc2BcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyRG9ja0FyZWEoKSB7XG4gICAgcmVuZGVyRG9jayhkb2NrRWwsIGRvY2ssIGRpcmVjdGlvbik7XG4gICAgc2V0U3RhcnRFbmFibGVkKGRvY2subGVuZ3RoID09PSAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlbWVudFByb21wdCgpIHtcbiAgICByZXR1cm4gbW9kZSA9PT0gJ3NpbmdsZSdcbiAgICAgID8gJ0RyYWcgeW91ciBzaGlwcyBvbnRvIHlvdXIgYm9hcmQsIHRoZW4gc3RhcnQgdGhlIGdhbWUuJ1xuICAgICAgOiBgJHtuYW1lc1tjdXJyZW50XX0sIGRyYWcgeW91ciBzaGlwcyBvbnRvIHlvdXIgYm9hcmQuYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TGFiZWwoKSB7XG4gICAgaWYgKG1vZGUgPT09ICdzaW5nbGUnKSByZXR1cm4gJ1N0YXJ0IGdhbWUnO1xuICAgIHJldHVybiBjdXJyZW50ID09PSAwID8gYERvbmU6IHBhc3MgdG8gJHtuYW1lc1sxXX1gIDogJ1N0YXJ0IGJhdHRsZSc7XG4gIH1cblxuICBmdW5jdGlvbiB0dXJuUHJvbXB0KCkge1xuICAgIHJldHVybiBtb2RlID09PSAnc2luZ2xlJ1xuICAgICAgPyAnWW91ciB0dXJuOiBjbGljayBhIHNxdWFyZSBvbiB0aGUgZW5lbXkgYm9hcmQuJ1xuICAgICAgOiBgJHtuYW1lc1tjdXJyZW50XX0sIGNsaWNrIGEgc3F1YXJlIG9uICR7bmFtZXNbMSAtIGN1cnJlbnRdfSdzIGJvYXJkLmA7XG4gIH1cblxuICAvLyBXaGF0IGp1c3QgaGFwcGVuZWQsIGZvbGxvd2VkIGJ5IHdoYXQgdG8gZG8gbmV4dFxuICBmdW5jdGlvbiB0dXJuTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gW2xhc3RTaG90LCB0dXJuUHJvbXB0KCldLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gIH1cblxuICBmdW5jdGlvbiBzaGlwT3duZXIoYXR0YWNrZXIpIHtcbiAgICBpZiAobW9kZSA9PT0gJ3R3bycpIHJldHVybiBgJHtuYW1lc1sxIC0gYXR0YWNrZXJdfSdzYDtcbiAgICByZXR1cm4gYXR0YWNrZXIgPT09IDAgPyAndGhlIGVuZW15JyA6ICd5b3VyJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc2NyaWJlU2hvdChhdHRhY2tlcikge1xuICAgIGNvbnN0IHJlcG9ydCA9IHBsYXllcnNbMSAtIGF0dGFja2VyXS5nYW1lYm9hcmQuZ2V0TGFzdEF0dGFjaygpO1xuICAgIGNvbnN0IHNwb3QgPSBmb3JtYXRDb29yZHMocmVwb3J0LngsIHJlcG9ydC55KTtcbiAgICBjb25zdCBzaG9vdGVyID0gbmFtZXNbYXR0YWNrZXJdO1xuXG4gICAgaWYgKHJlcG9ydC5zdW5rKSB7XG4gICAgICBjb25zdCBzaGlwID0gcmVwb3J0LnNoaXBOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gYCR7c2hvb3Rlcn0gc2FuayAke3NoaXBPd25lcihhdHRhY2tlcil9ICR7c2hpcH0gYXQgJHtzcG90fSFgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7c2hvb3Rlcn0gZmlyZWQgYXQgJHtzcG90fTogJHtcbiAgICAgIHJlcG9ydC5yZXN1bHQgPT09ICdoaXQnID8gJ2hpdCEnIDogJ21pc3MuJ1xuICAgIH1gO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXREb2NrKCkge1xuICAgIGRvY2sgPSBGTEVFVC5tYXAoKHNoaXAsIGlkKSA9PiAoeyBpZCwgLi4uc2hpcCB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb29yZHMoZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jZWxsJyk7XG4gICAgaWYgKCFjZWxsKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4geyB4OiBOdW1iZXIoY2VsbC5kYXRhc2V0LngpLCB5OiBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpIH07XG4gIH1cblxuICAvLyAtLS0gRmxvdzogbWVudSwgcGFzcyBzY3JlZW4sIHBsYWNlbWVudCwgYmF0dGxlIC0tLVxuXG4gIGZ1bmN0aW9uIHBhc3NUbyhpbmRleCwgY2FsbGJhY2spIHtcbiAgICBzZXRNZXNzYWdlKCcnKTtcbiAgICBzZXRQYXNzU2NyZWVuKFxuICAgICAgYFBhc3MgdGhlIGRldmljZSB0byAke25hbWVzW2luZGV4XX1gLFxuICAgICAgYEknbSAke25hbWVzW2luZGV4XX06IHNob3cgbXkgYm9hcmRgXG4gICAgKTtcbiAgICBzaG93VmlldygncGFzcycpO1xuICAgIGFmdGVyUGFzcyA9IGNhbGxiYWNrO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gICAgY2xlYXJUaW1lb3V0KGNvbXB1dGVyVGltZW91dCk7XG4gICAgYWZ0ZXJQYXNzID0gbnVsbDtcbiAgICBwaGFzZSA9ICdtZW51JztcbiAgICBzaG93VmlldygnbWVudScpO1xuICAgIHNldE1lc3NhZ2UoJ0Nob29zZSBhIGdhbWUgbW9kZS4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZ2luUGxhY2VtZW50KGluZGV4KSB7XG4gICAgcGhhc2UgPSAncGxhY2VtZW50JztcbiAgICBjdXJyZW50ID0gaW5kZXg7XG4gICAgbG9ja2VkID0gZmFsc2U7XG4gICAgcmVzZXREb2NrKCk7XG4gICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIGRyYWdnZWRTaGlwID0gbnVsbDtcbiAgICBzaG93VmlldygncGxhY2VtZW50Jyk7XG4gICAgc2V0U3RhcnRMYWJlbChzdGFydExhYmVsKCkpO1xuICAgIHJlbmRlcigpO1xuICAgIHJlbmRlckRvY2tBcmVhKCk7XG4gICAgc2V0TWVzc2FnZShwbGFjZW1lbnRQcm9tcHQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBiZWdpbkJhdHRsZSgpIHtcbiAgICBwaGFzZSA9ICdiYXR0bGUnO1xuICAgIGN1cnJlbnQgPSAwO1xuICAgIGxvY2tlZCA9IGZhbHNlO1xuICAgIGxhc3RTaG90ID0gJyc7XG4gICAgc2hvd1ZpZXcoJ2JhdHRsZScpO1xuICAgIHJlbmRlcigpO1xuICAgIHNldE1lc3NhZ2UodHVybk1lc3NhZ2UoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEdhbWUoc2VsZWN0ZWRNb2RlKSB7XG4gICAgbW9kZSA9IHNlbGVjdGVkTW9kZTtcbiAgICBwbGF5ZXJzID0gW1BsYXllcigncmVhbCcpLCBQbGF5ZXIobW9kZSA9PT0gJ3NpbmdsZScgPyAnY29tcHV0ZXInIDogJ3JlYWwnKV07XG4gICAgbmFtZXMgPSBtb2RlID09PSAnc2luZ2xlJyA/IFsnWW91JywgJ0NvbXB1dGVyJ10gOiBbJ1BsYXllciAxJywgJ1BsYXllciAyJ107XG4gICAgbGFzdFNob3QgPSAnJztcbiAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZScpIHBsYXllcnNbMV0uZ2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIGJlZ2luUGxhY2VtZW50KDApO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tHYW1lT3ZlcihhdHRhY2tlcikge1xuICAgIGlmICghcGxheWVyc1sxIC0gYXR0YWNrZXJdLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcGhhc2UgPSAnb3Zlcic7XG4gICAgc2hvd1ZpZXcoJ2JhdHRsZScpO1xuICAgIHJlbmRlcigpO1xuXG4gICAgbGV0IG91dGNvbWU7XG4gICAgaWYgKG1vZGUgPT09ICdzaW5nbGUnKSB7XG4gICAgICBvdXRjb21lID1cbiAgICAgICAgYXR0YWNrZXIgPT09IDBcbiAgICAgICAgICA/ICdZb3Ugd2luISBBbGwgZW5lbXkgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuJ1xuICAgICAgICAgIDogJ1lvdSBsb3NlLiBUaGUgY29tcHV0ZXIgc2FuayB5b3VyIGZsZWV0Lic7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dGNvbWUgPSBgJHtuYW1lc1thdHRhY2tlcl19IHdpbnMhIEV2ZXJ5IHNoaXAgb2YgJHtuYW1lc1sxIC0gYXR0YWNrZXJdfSBoYXMgYmVlbiBzdW5rLmA7XG4gICAgfVxuICAgIHNldE1lc3NhZ2UoYCR7bGFzdFNob3R9ICR7b3V0Y29tZX1gKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVyVHVybigpIHtcbiAgICBwbGF5ZXJzWzFdLmF0dGFjayhwbGF5ZXJzWzBdLmdhbWVib2FyZCk7XG4gICAgbGFzdFNob3QgPSBkZXNjcmliZVNob3QoMSk7XG4gICAgaWYgKGNoZWNrR2FtZU92ZXIoMSkpIHJldHVybjtcbiAgICBsb2NrZWQgPSBmYWxzZTtcbiAgICByZW5kZXIoKTtcbiAgICBzZXRNZXNzYWdlKHR1cm5NZXNzYWdlKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRW5lbXlCb2FyZENsaWNrKGV2ZW50KSB7XG4gICAgY29uc3QgY29vcmRzID0gZ2V0Q29vcmRzKGV2ZW50KTtcbiAgICBpZiAoIWNvb3JkcyB8fCBwaGFzZSAhPT0gJ2JhdHRsZScgfHwgbG9ja2VkKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHgsIHkgfSA9IGNvb3JkcztcbiAgICBpZiAob3Bwb25lbnQoKS5nYW1lYm9hcmQuaGFzQmVlbkF0dGFja2VkKHgsIHkpKSByZXR1cm47XG5cbiAgICBhY3RpdmVQbGF5ZXIoKS5hdHRhY2sob3Bwb25lbnQoKS5nYW1lYm9hcmQsIHgsIHkpO1xuICAgIGxvY2tlZCA9IHRydWU7XG4gICAgbGFzdFNob3QgPSBkZXNjcmliZVNob3QoY3VycmVudCk7XG4gICAgaWYgKGNoZWNrR2FtZU92ZXIoY3VycmVudCkpIHJldHVybjtcbiAgICByZW5kZXIoKTtcblxuICAgIGlmIChtb2RlID09PSAnc2luZ2xlJykge1xuICAgICAgc2V0TWVzc2FnZShgJHtsYXN0U2hvdH0gQ29tcHV0ZXIgaXMgYWltaW5nLi4uYCk7XG4gICAgICBjb21wdXRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KGNvbXB1dGVyVHVybiwgNjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TWVzc2FnZShgJHtsYXN0U2hvdH0gUHJlc3MgRW5kIHR1cm4gd2hlbiB5b3UncmUgZG9uZS5gKTtcbiAgICAgIHNob3dWaWV3KCdiYXR0bGUnLCB7IGVuZFR1cm46IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIERyYWcgYW5kIGRyb3AgLS0tXG5cbiAgZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgY29uc3Qgc2hpcEVsID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kb2NrLXNoaXAnKTtcbiAgICBpZiAoIXNoaXBFbCkgcmV0dXJuO1xuICAgIGRyYWdnZWRTaGlwID0gZG9jay5maW5kKChzaGlwKSA9PiBzaGlwLmlkID09PSBOdW1iZXIoc2hpcEVsLmRhdGFzZXQuaWQpKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIHNoaXBFbC5kYXRhc2V0LmlkKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoKSB7XG4gICAgZHJhZ2dlZFNoaXAgPSBudWxsO1xuICAgIGNsZWFyUGxhY2VtZW50UHJldmlldyhwbGF5ZXJCb2FyZEVsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUJvYXJkRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBjb25zdCBjb29yZHMgPSBnZXRDb29yZHMoZXZlbnQpO1xuICAgIGlmICghZHJhZ2dlZFNoaXAgfHwgIWNvb3JkcykgcmV0dXJuO1xuXG4gICAgY29uc3QgeyB4LCB5IH0gPSBjb29yZHM7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IGRyYWdnZWRTaGlwO1xuICAgIGNvbnN0IHZhbGlkID0gYWN0aXZlUGxheWVyKCkuZ2FtZWJvYXJkLmNhblBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbik7XG5cbiAgICBzaG93UGxhY2VtZW50UHJldmlldyhcbiAgICAgIHBsYXllckJvYXJkRWwsXG4gICAgICBnZXRTaGlwQ2VsbHMoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pLFxuICAgICAgdmFsaWRcbiAgICApO1xuICAgIGlmICh2YWxpZCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUJvYXJkRHJhZ0xlYXZlKGV2ZW50KSB7XG4gICAgaWYgKCFwbGF5ZXJCb2FyZEVsLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICBjbGVhclBsYWNlbWVudFByZXZpZXcocGxheWVyQm9hcmRFbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQm9hcmREcm9wKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjb29yZHMgPSBnZXRDb29yZHMoZXZlbnQpO1xuICAgIGlmICghZHJhZ2dlZFNoaXAgfHwgIWNvb3JkcykgcmV0dXJuO1xuXG4gICAgY29uc3QgeyB4LCB5IH0gPSBjb29yZHM7XG4gICAgY29uc3QgeyBpZCwgbmFtZSwgbGVuZ3RoIH0gPSBkcmFnZ2VkU2hpcDtcbiAgICBpZiAoIWFjdGl2ZVBsYXllcigpLmdhbWVib2FyZC5jYW5QbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pKSByZXR1cm47XG5cbiAgICBhY3RpdmVQbGF5ZXIoKS5nYW1lYm9hcmQucGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uLCBuYW1lKTtcbiAgICBkb2NrID0gZG9jay5maWx0ZXIoKHNoaXApID0+IHNoaXAuaWQgIT09IGlkKTtcbiAgICBkcmFnZ2VkU2hpcCA9IG51bGw7XG5cbiAgICByZW5kZXIoKTtcbiAgICByZW5kZXJEb2NrQXJlYSgpO1xuICAgIHNldE1lc3NhZ2UoZG9jay5sZW5ndGggPT09IDAgPyBSRUFEWV9QUk9NUFQgOiBwbGFjZW1lbnRQcm9tcHQoKSk7XG4gIH1cblxuICBkb2NrRWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgZG9ja0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBoYW5kbGVEcmFnRW5kKTtcbiAgcGxheWVyQm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGhhbmRsZUJvYXJkRHJhZ092ZXIpO1xuICBwbGF5ZXJCb2FyZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGhhbmRsZUJvYXJkRHJhZ0xlYXZlKTtcbiAgcGxheWVyQm9hcmRFbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlQm9hcmREcm9wKTtcblxuICAvLyAtLS0gQnV0dG9ucyAtLS1cblxuICBzaW5nbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdGFydEdhbWUoJ3NpbmdsZScpKTtcbiAgdHdvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3RhcnRHYW1lKCd0d28nKSk7XG5cbiAgcGFzc1JlYWR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghYWZ0ZXJQYXNzKSByZXR1cm47XG4gICAgY29uc3QgY2FsbGJhY2sgPSBhZnRlclBhc3M7XG4gICAgYWZ0ZXJQYXNzID0gbnVsbDtcbiAgICBjYWxsYmFjaygpO1xuICB9KTtcblxuICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIHJlbmRlckRvY2tBcmVhKCk7XG4gIH0pO1xuXG4gIHJhbmRvbWl6ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocGhhc2UgIT09ICdwbGFjZW1lbnQnKSByZXR1cm47XG4gICAgYWN0aXZlUGxheWVyKCkuZ2FtZWJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgIGRvY2sgPSBbXTtcbiAgICByZW5kZXIoKTtcbiAgICByZW5kZXJEb2NrQXJlYSgpO1xuICAgIHNldE1lc3NhZ2UoUkVBRFlfUFJPTVBUKTtcbiAgfSk7XG5cbiAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHBoYXNlICE9PSAncGxhY2VtZW50JykgcmV0dXJuO1xuICAgIGFjdGl2ZVBsYXllcigpLmdhbWVib2FyZC5yZXNldCgpO1xuICAgIHJlc2V0RG9jaygpO1xuICAgIHJlbmRlcigpO1xuICAgIHJlbmRlckRvY2tBcmVhKCk7XG4gICAgc2V0TWVzc2FnZShwbGFjZW1lbnRQcm9tcHQoKSk7XG4gIH0pO1xuXG4gIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChwaGFzZSAhPT0gJ3BsYWNlbWVudCcgfHwgZG9jay5sZW5ndGggPiAwKSByZXR1cm47XG5cbiAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgIGJlZ2luQmF0dGxlKCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSAwKSB7XG4gICAgICBwYXNzVG8oMSwgKCkgPT4gYmVnaW5QbGFjZW1lbnQoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzVG8oMCwgYmVnaW5CYXR0bGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgZW5kVHVybkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocGhhc2UgIT09ICdiYXR0bGUnIHx8IG1vZGUgIT09ICd0d28nIHx8ICFsb2NrZWQpIHJldHVybjtcblxuICAgIGNvbnN0IG5leHQgPSAxIC0gY3VycmVudDtcbiAgICBwYXNzVG8obmV4dCwgKCkgPT4ge1xuICAgICAgY3VycmVudCA9IG5leHQ7XG4gICAgICBsb2NrZWQgPSBmYWxzZTtcbiAgICAgIHNob3dWaWV3KCdiYXR0bGUnKTtcbiAgICAgIHJlbmRlcigpO1xuICAgICAgc2V0TWVzc2FnZSh0dXJuTWVzc2FnZSgpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNZW51KTtcbiAgZW5lbXlCb2FyZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRW5lbXlCb2FyZENsaWNrKTtcblxuICBzaG93TWVudSgpO1xufSIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBjb25zdCBCT0FSRF9TSVpFID0gMTA7XG5cbmV4cG9ydCBjb25zdCBGTEVFVCA9IFtcbiAgeyBuYW1lOiAnQ2FycmllcicsIGxlbmd0aDogNSB9LFxuICB7IG5hbWU6ICdCYXR0bGVzaGlwJywgbGVuZ3RoOiA0IH0sXG4gIHsgbmFtZTogJ0NydWlzZXInLCBsZW5ndGg6IDMgfSxcbiAgeyBuYW1lOiAnU3VibWFyaW5lJywgbGVuZ3RoOiAzIH0sXG4gIHsgbmFtZTogJ0Rlc3Ryb3llcicsIGxlbmd0aDogMiB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNoaXBDZWxscyh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICBjb25zdCBkeCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gMSA6IDA7XG4gIGNvbnN0IGR5ID0gZGlyZWN0aW9uID09PSAndmVydGljYWwnID8gMSA6IDA7XG4gIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoIH0sIChfLCBpKSA9PiBbeCArIGR4ICogaSwgeSArIGR5ICogaV0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IHBsYWNlbWVudHMgPSBuZXcgTWFwKCk7IC8vIHNoaXAgLT4geyBkaXJlY3Rpb24sIGNlbGxzIH1cbiAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IEJPQVJEX1NJWkUgfSwgKCkgPT5cbiAgICBBcnJheShCT0FSRF9TSVpFKS5maWxsKG51bGwpXG4gICk7XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgYXR0YWNrZWQgPSBuZXcgU2V0KCk7XG4gIGxldCBsYXN0QXR0YWNrID0gbnVsbDtcblxuICBmdW5jdGlvbiBpc09uQm9hcmQoeCwgeSkge1xuICAgIHJldHVybiAoXG4gICAgICBOdW1iZXIuaXNJbnRlZ2VyKHgpICYmXG4gICAgICBOdW1iZXIuaXNJbnRlZ2VyKHkpICYmXG4gICAgICB4ID49IDAgJiZcbiAgICAgIHggPCBCT0FSRF9TSVpFICYmXG4gICAgICB5ID49IDAgJiZcbiAgICAgIHkgPCBCT0FSRF9TSVpFXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIHJldHVybiBnZXRTaGlwQ2VsbHMoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pLmV2ZXJ5KFxuICAgICAgKFtjeCwgY3ldKSA9PiBpc09uQm9hcmQoY3gsIGN5KSAmJiBncmlkW2N5XVtjeF0gPT09IG51bGxcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uLCBuYW1lKSB7XG4gICAgaWYgKCFjYW5QbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgY2Fubm90IGJlIHBsYWNlZCB0aGVyZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNoaXAgPSBTaGlwKGxlbmd0aCwgbmFtZSk7XG4gICAgY29uc3QgY2VsbHMgPSBnZXRTaGlwQ2VsbHMoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgIGNlbGxzLmZvckVhY2goKFtjeCwgY3ldKSA9PiB7XG4gICAgICBncmlkW2N5XVtjeF0gPSBzaGlwO1xuICAgIH0pO1xuICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgcGxhY2VtZW50cy5zZXQoc2hpcCwgeyBkaXJlY3Rpb24sIGNlbGxzIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgZ3JpZC5mb3JFYWNoKChyb3cpID0+IHJvdy5maWxsKG51bGwpKTtcbiAgICBzaGlwcy5sZW5ndGggPSAwO1xuICAgIHBsYWNlbWVudHMuY2xlYXIoKTtcbiAgICBtaXNzZWRBdHRhY2tzLmxlbmd0aCA9IDA7XG4gICAgYXR0YWNrZWQuY2xlYXIoKTtcbiAgICBsYXN0QXR0YWNrID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seShmbGVldCA9IEZMRUVUKSB7XG4gICAgcmVzZXQoKTtcbiAgICBmbGVldC5mb3JFYWNoKCh7IG5hbWUsIGxlbmd0aCB9KSA9PiB7XG4gICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQk9BUkRfU0laRSk7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBCT0FSRF9TSVpFKTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uLCBuYW1lKTtcbiAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIEludmFsaWQgc3BvdCAob2ZmIHRoZSBib2FyZCBvciBvdmVybGFwcGluZyk6IHBpY2sgYW5vdGhlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAoIWlzT25Cb2FyZCh4LCB5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRhY2sgbXVzdCBiZSB3aXRoaW4gdGhlIGJvYXJkJyk7XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IGAke3h9LCR7eX1gO1xuICAgIGlmIChhdHRhY2tlZC5oYXMoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZCcpO1xuICAgIH1cbiAgICBhdHRhY2tlZC5hZGQoa2V5KTtcblxuICAgIGNvbnN0IHNoaXAgPSBncmlkW3ldW3hdO1xuICAgIGlmIChzaGlwKSB7XG4gICAgICBzaGlwLmhpdCgpO1xuICAgICAgbGFzdEF0dGFjayA9IHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgcmVzdWx0OiAnaGl0JyxcbiAgICAgICAgc2hpcE5hbWU6IHNoaXAubmFtZSxcbiAgICAgICAgc3Vuazogc2hpcC5pc1N1bmsoKSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuICAgIG1pc3NlZEF0dGFja3MucHVzaChbeCwgeV0pO1xuICAgIGxhc3RBdHRhY2sgPSB7IHgsIHksIHJlc3VsdDogJ21pc3MnLCBzaGlwTmFtZTogbnVsbCwgc3VuazogZmFsc2UgfTtcbiAgICByZXR1cm4gJ21pc3MnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGFzdEF0dGFjaygpIHtcbiAgICByZXR1cm4gbGFzdEF0dGFjayA/IHsgLi4ubGFzdEF0dGFjayB9IDogbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1pc3NlZEF0dGFja3MoKSB7XG4gICAgcmV0dXJuIG1pc3NlZEF0dGFja3MubWFwKChjb29yZHMpID0+IFsuLi5jb29yZHNdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0JlZW5BdHRhY2tlZCh4LCB5KSB7XG4gICAgcmV0dXJuIGF0dGFja2VkLmhhcyhgJHt4fSwke3l9YCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDZWxsU3RhdGUoeCwgeSkge1xuICAgIGlmICghaXNPbkJvYXJkKHgsIHkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb3JkaW5hdGVzIG11c3QgYmUgd2l0aGluIHRoZSBib2FyZCcpO1xuICAgIH1cbiAgICBjb25zdCBzaGlwID0gZ3JpZFt5XVt4XTtcbiAgICBpZiAoYXR0YWNrZWQuaGFzKGAke3h9LCR7eX1gKSkge1xuICAgICAgaWYgKCFzaGlwKSByZXR1cm4gJ21pc3MnO1xuICAgICAgcmV0dXJuIHNoaXAuaXNTdW5rKCkgPyAnc3VuaycgOiAnaGl0JztcbiAgICB9XG4gICAgcmV0dXJuIHNoaXAgPyAnc2hpcCcgOiAnZW1wdHknO1xuICB9XG5cbiAgLy8gUmV2ZWFscyB3aGVyZSBhIHNoaXAgaXMsIHNvIGNhbGxlcnMgc2hvdWxkIG9ubHkgdXNlIGl0IGZvciBzcXVhcmVzXG4gIC8vIHRoZXkgYXJlIGFsbG93ZWQgdG8gc2hvdy5cbiAgZnVuY3Rpb24gZ2V0U2hpcFBsYWNlbWVudCh4LCB5KSB7XG4gICAgaWYgKCFpc09uQm9hcmQoeCwgeSkgfHwgZ3JpZFt5XVt4XSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgc2hpcCA9IGdyaWRbeV1beF07XG4gICAgY29uc3QgeyBkaXJlY3Rpb24sIGNlbGxzIH0gPSBwbGFjZW1lbnRzLmdldChzaGlwKTtcbiAgICBjb25zdCBpbmRleCA9IGNlbGxzLmZpbmRJbmRleCgoW2N4LCBjeV0pID0+IGN4ID09PSB4ICYmIGN5ID09PSB5KTtcbiAgICByZXR1cm4geyBuYW1lOiBzaGlwLm5hbWUsIGxlbmd0aDogc2hpcC5sZW5ndGgsIGRpcmVjdGlvbiwgaW5kZXggfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gc2hpcHMubGVuZ3RoID4gMCAmJiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICBjYW5QbGFjZVNoaXAsXG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5LFxuICAgIHJlc2V0LFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgZ2V0TGFzdEF0dGFjayxcbiAgICBnZXRNaXNzZWRBdHRhY2tzLFxuICAgIGhhc0JlZW5BdHRhY2tlZCxcbiAgICBnZXRDZWxsU3RhdGUsXG4gICAgZ2V0U2hpcFBsYWNlbWVudCxcbiAgICBhbGxTaGlwc1N1bmssXG4gIH07XG59IiwiaW1wb3J0IEdhbWVib2FyZCwgeyBCT0FSRF9TSVpFIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5jb25zdCBESVJFQ1RJT05TID0gW1xuICBbMSwgMF0sXG4gIFstMSwgMF0sXG4gIFswLCAxXSxcbiAgWzAsIC0xXSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcih0eXBlKSB7XG4gIGlmICh0eXBlICE9PSAncmVhbCcgJiYgdHlwZSAhPT0gJ2NvbXB1dGVyJykge1xuICAgIHRocm93IG5ldyBFcnJvcignUGxheWVyIHR5cGUgbXVzdCBiZSBcInJlYWxcIiBvciBcImNvbXB1dGVyXCInKTtcbiAgfVxuXG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGZ1bmN0aW9uIGlzT25Cb2FyZCh4LCB5KSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgQk9BUkRfU0laRSAmJiB5ID49IDAgJiYgeSA8IEJPQVJEX1NJWkU7XG4gIH1cblxuICBmdW5jdGlvbiBpc0xlZ2FsVGFyZ2V0KGVuZW15Qm9hcmQsIHgsIHkpIHtcbiAgICByZXR1cm4gaXNPbkJvYXJkKHgsIHkpICYmICFlbmVteUJvYXJkLmhhc0JlZW5BdHRhY2tlZCh4LCB5KTtcbiAgfVxuXG4gIC8vIFRoZSBjb21wdXRlciBtYXkgb25seSBrbm93IHdoYXQgYSBodW1hbiBhdHRhY2tlciBjb3VsZCBzZWU6XG4gIC8vIG5vdGhpbmcgYXQgYWxsIGFib3V0IHNxdWFyZXMgaXQgaGFzbid0IHNob3QgeWV0LlxuICBmdW5jdGlvbiBrbm93blN0YXRlKGVuZW15Qm9hcmQsIHgsIHkpIHtcbiAgICBpZiAoIWlzT25Cb2FyZCh4LCB5KSB8fCAhZW5lbXlCb2FyZC5oYXNCZWVuQXR0YWNrZWQoeCwgeSkpIHtcbiAgICAgIHJldHVybiAndW5rbm93bic7XG4gICAgfVxuICAgIHJldHVybiBlbmVteUJvYXJkLmdldENlbGxTdGF0ZSh4LCB5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBpY2tSYW5kb21TcXVhcmUoZW5lbXlCb2FyZCkge1xuICAgIGNvbnN0IGF2YWlsYWJsZSA9IFtdO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQk9BUkRfU0laRTsgeSArPSAxKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEJPQVJEX1NJWkU7IHggKz0gMSkge1xuICAgICAgICBpZiAoIWVuZW15Qm9hcmQuaGFzQmVlbkF0dGFja2VkKHgsIHkpKSB7XG4gICAgICAgICAgYXZhaWxhYmxlLnB1c2goW3gsIHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXZhaWxhYmxlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZS5sZW5ndGgpXTtcbiAgfVxuXG4gIC8vIEhpdHMgb24gc2hpcHMgdGhhdCBhcmUgc3RpbGwgYWZsb2F0XG4gIGZ1bmN0aW9uIGZpbmRIaXRzKGVuZW15Qm9hcmQpIHtcbiAgICBjb25zdCBoaXRzID0gW107XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBCT0FSRF9TSVpFOyB5ICs9IDEpIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgQk9BUkRfU0laRTsgeCArPSAxKSB7XG4gICAgICAgIGlmIChrbm93blN0YXRlKGVuZW15Qm9hcmQsIHgsIHkpID09PSAnaGl0Jykge1xuICAgICAgICAgIGhpdHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoaXRzO1xuICB9XG5cbiAgZnVuY3Rpb24gcGlja0h1bnRTcXVhcmUoZW5lbXlCb2FyZCwgaGl0cykge1xuICAgIGNvbnN0IGlzSGl0ID0gKHgsIHkpID0+IGtub3duU3RhdGUoZW5lbXlCb2FyZCwgeCwgeSkgPT09ICdoaXQnO1xuICAgIGNvbnN0IGxpbmVUYXJnZXRzID0gW107IC8vIHNxdWFyZXMgdGhhdCBleHRlbmQgYSByb3cgb2YgMisgaGl0c1xuICAgIGNvbnN0IG5lYXJieVRhcmdldHMgPSBbXTsgLy8gYW55IGZyZWUgc3F1YXJlIG5leHQgdG8gYSBoaXRcblxuICAgIGhpdHMuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG4gICAgICBESVJFQ1RJT05TLmZvckVhY2goKFtkeCwgZHldKSA9PiB7XG4gICAgICAgIGNvbnN0IHR4ID0geCArIGR4O1xuICAgICAgICBjb25zdCB0eSA9IHkgKyBkeTtcbiAgICAgICAgaWYgKCFpc0xlZ2FsVGFyZ2V0KGVuZW15Qm9hcmQsIHR4LCB0eSkpIHJldHVybjtcblxuICAgICAgICBuZWFyYnlUYXJnZXRzLnB1c2goW3R4LCB0eV0pO1xuICAgICAgICAvLyBUaGUgc3F1YXJlIGJlaGluZCB1cyBpcyBhbHNvIGEgaGl0LCBzbyB3ZSdyZSBvbiBhIGxpbmVcbiAgICAgICAgaWYgKGlzSGl0KHggLSBkeCwgeSAtIGR5KSkgbGluZVRhcmdldHMucHVzaChbdHgsIHR5XSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHBvb2wgPSBsaW5lVGFyZ2V0cy5sZW5ndGggPiAwID8gbGluZVRhcmdldHMgOiBuZWFyYnlUYXJnZXRzO1xuICAgIGlmIChwb29sLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHBpY2tSYW5kb21TcXVhcmUoZW5lbXlCb2FyZCk7XG4gICAgcmV0dXJuIHBvb2xbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9vbC5sZW5ndGgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBpY2tTcXVhcmUoZW5lbXlCb2FyZCkge1xuICAgIGNvbnN0IGhpdHMgPSBmaW5kSGl0cyhlbmVteUJvYXJkKTtcbiAgICByZXR1cm4gaGl0cy5sZW5ndGggPiAwXG4gICAgICA/IHBpY2tIdW50U3F1YXJlKGVuZW15Qm9hcmQsIGhpdHMpXG4gICAgICA6IHBpY2tSYW5kb21TcXVhcmUoZW5lbXlCb2FyZCk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2soZW5lbXlCb2FyZCwgeCwgeSkge1xuICAgIGlmICh0eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICBjb25zdCBbdGFyZ2V0WCwgdGFyZ2V0WV0gPSBwaWNrU3F1YXJlKGVuZW15Qm9hcmQpO1xuICAgICAgcmV0dXJuIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh0YXJnZXRYLCB0YXJnZXRZKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuXG4gIHJldHVybiB7IHR5cGUsIGdhbWVib2FyZCwgYXR0YWNrIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcChsZW5ndGgsIG5hbWUgPSAnU2hpcCcpIHtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLFxuICAgIG5hbWUsXG5cbiAgICBnZXQgaGl0cygpIHtcbiAgICAgIHJldHVybiBoaXRzO1xuICAgIH0sXG5cbiAgICBoaXQoKSB7XG4gICAgICBpZiAoaGl0cyA8IGxlbmd0aCkge1xuICAgICAgICBoaXRzICs9IDE7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGlzU3VuaygpIHtcbiAgICAgIHJldHVybiBoaXRzID49IGxlbmd0aDtcbiAgICB9LFxuICB9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdEdhbWUgZnJvbSAnLi9nYW1lLmpzJztcblxuaW5pdEdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=