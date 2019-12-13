/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _converter_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converter/transformer */ "./src/converter/transformer.js");
/* harmony import */ var _converter_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_converter_transformer__WEBPACK_IMPORTED_MODULE_1__);


figma.showUI(__html__);
figma.ui.onmessage = message => {
    switch (message.type) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["CONVERT_PAGES"]:
            const figmaPages = figma.root.children;
            const sketchPages = figmaPages.map(page => _converter_transformer__WEBPACK_IMPORTED_MODULE_1___default()(page));
            figma.ui.postMessage({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__["PAGES_CONVERTED"],
                payload: { figmaPages, sketchPages },
            });
            break;
        default:
            break;
    }
};


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: CONVERT_PAGES, PAGES_CONVERTED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONVERT_PAGES", function() { return CONVERT_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES_CONVERTED", function() { return PAGES_CONVERTED; });
const CONVERT_PAGES = 'COVERT_PAGES';
const PAGES_CONVERTED = 'PAGES_CONVERTED';


/***/ }),

/***/ "./src/converter/containers/canvas.js":
/*!********************************************!*\
  !*** ./src/converter/containers/canvas.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data, result) {
  result.groupLayout = {
    "_class": "MSImmutableFreeformGroupLayout"
  };
  result.hasClickThrough = true;
  result.horizontalRulerData = {
    "_class": "rulerData",
    "base": -336,
    "guides": []
  };
  result.includeInCloudUpload = true;
  result.verticalRulerData = {
    "_class": "rulerData",
    "base": -306,
    "guides": []
  };
}


/***/ }),

/***/ "./src/converter/containers/component.js":
/*!***********************************************!*\
  !*** ./src/converter/containers/component.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data, result) {
  result.hasClickThrough = true;
  result.includeInCloudUpload = true;

  // Need to add support for multiple backgrounds
  // Need support for other types of backgrounds
  if(data.backgrounds.length >= 1) {
    if(data.backgrounds[0].type === 'SOLID') {
      result.backgroundColor = {
        "_class": "color",
        "alpha": data.backgrounds[0].opacity,
        "blue": data.backgrounds[0].color.b,
        "green": data.backgrounds[0].color.g,
        "red": data.backgrounds[0].color.r
      };
    }
  }
  result.hasBackgroundColor = true;
  result.includeBackgroundColorInInstance = true;
  result.symbolID = data.id;
  result.changeIdentifier = 6;
  result.overrideProperties = [];
  result.allowsOverrides = true;
}


/***/ }),

/***/ "./src/converter/containers/frame.js":
/*!*******************************************!*\
  !*** ./src/converter/containers/frame.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data, result) {
  result.hasClickThrough = true;
  result.includeInCloudUpload = true;

  // Need to add support for multiple backgrounds
  // Need support for other types of backgrounds
  if(data.backgrounds.length >= 1) {
    if(data.backgrounds[0].type === 'SOLID') {
      result.backgroundColor = {
        "_class": "color",
        "alpha": data.backgrounds[0].opacity,
        "blue": data.backgrounds[0].color.b,
        "green": data.backgrounds[0].color.g,
        "red": data.backgrounds[0].color.r
      };
    }
  }
  result.hasBackgroundColor = true;
}


/***/ }),

/***/ "./src/converter/containers/group.js":
/*!*******************************************!*\
  !*** ./src/converter/containers/group.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data, result) {
  result.hasClickThrough = false;
  result.groupLayout = {
    "_class": "MSImmutableFreeformGroupLayout"
  }
  result.horizontalRulerData = {
    "_class": "rulerData",
    "base": -336,
    "guides": []
  },
  result.includeInCloudUpload = true,
  result.verticalRulerData = {
    "_class": "rulerData",
    "base": -306,
    "guides": []
  }
}


/***/ }),

/***/ "./src/converter/containers/instance.js":
/*!**********************************************!*\
  !*** ./src/converter/containers/instance.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data, result) {
  result.horizontalSpacing = 0;
  result.overrideValues = [];
  result.scale = 1;
  result.symbolID = data.componentId;
  result.verticalSpacing = 0;

  const overrides = [];

  data.children.map((override) => {
    const elemId = override.id.split(";");

    if(override.type === 'TEXT') {
      overrides.push({
        "_class": "overrideValue",
        "do_objectID": elemId[0],
        "overrideName": `${elemId[1]}_stringValue`,
        "value": override.characters
      });
    }
  });

  result.overrideValues = overrides;
}


/***/ }),

/***/ "./src/converter/helpers/blendMode.js":
/*!********************************************!*\
  !*** ./src/converter/helpers/blendMode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (type) {
  if (type === "PASS_THROUGH") {
    return 0;
  } else if (type === "NORMAL") {
    return 0;
  } else if (type === "DARKEN") {
    return 1;
  } else if (type === "MULTIPLY") {
    return 2;
  } else if (type === "COLOR_BURN") {
    return 3;
  } else if (type === "LIGHTEN") {
    return 4;
  } else if (type === "SCREEN") {
    return 5;
  } else if (type === "COLOR_DODGE") {
    return 6;
  } else if (type === "OVERLAY") {
    return 7;
  } else if (type === "SOFT_LIGHT") {
    return 8;
  } else if (type === "HARD_LIGHT") {
    return 9;
  } else if (type === "DIFFERENCE") {
    return 10;
  } else if (type === "EXCLUSION") {
    return 11;
  } else if (type === "HUE") {
    return 12;
  } else if (type === "SATURATION") {
    return 13;
  } else if (type === "COLOR") {
    return 14;
  } else if (type === "LUMINOSITY") {
    return 15;
  } else {
    return 0
  }
};


/***/ }),

/***/ "./src/converter/helpers/position.js":
/*!*******************************************!*\
  !*** ./src/converter/helpers/position.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (parent, child) {

  let xPosition = 0;
  let yPosition = 0;
  if (parent.x) {
    if (child.x > parent.x) {
      xPosition = Math.abs(child.x - parent.x);
    }
    if (child.y > parent.y) {
      yPosition = Math.abs(child.y - parent.y);
    }
  } else {
    xPosition = child.x;
    yPosition = child.y;
  }

  return {
    x: xPosition,
    y: yPosition
  }
};


/***/ }),

/***/ "./src/converter/helpers/style.js":
/*!****************************************!*\
  !*** ./src/converter/helpers/style.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const blendMode = __webpack_require__(/*! ./blendMode */ "./src/converter/helpers/blendMode.js");

module.exports = function (data) {
  const style = {
    "_class": "style",
    "endMarkerType": 0,
    "miterLimit": 10,
    "startMarkerType": 0,
    "windingRule": 0, // NONZERO
  };

  if (data.blendMode) {
    style.contextSettings = {
      "_class": "graphicsContextSettings",
      "blendMode": blendMode(data.blendMode)
    }

    if (data.opacity) {
      style.contextSettings.opacity = data.opacity;
    } else {
      style.contextSettings.opacity = 1;
    }
  }

  if (Array.isArray(data.strokes) && data.strokes.length) {
    let newBorders = [];
    data.strokes.forEach(function(border) {

      // Convert the position - inside, center, outside
      let position = '';
      if (data.strokeAlign === 'INSIDE') {
        position =  1;
      } else if (data.strokeAlign === 'OUTSIDE') {
        position =  2;
      } else {
        position =  0;
      }

      let color = '';
      if (border.type === 'SOLID') {
        color = {
          "_class": "color",
          "alpha": border.opacity,
          "blue": border.color.b,
          "green": border.color.g,
          "red": border.color.r
        }
      }

      let gradient = '';
      if (border.type === 'GRADIENT_LINEAR') {
        // TODO: Add support for Gradients
      }

      newBorders.push({
        "_class": "border",
        "isEnabled": true,
        "color": color,
        "fillType": 0,
        "position": position,
        "thickness": data.strokeWeight
      });
    });

    style.borders = newBorders;
  }

  if (Array.isArray(data.fills) && data.fills.length) {
    let newFills = [];
    data.fills.forEach(function(fill) {
      if (fill.type === 'IMAGE') {
        newFills.push({
          "_class": "fill",
          "isEnabled": true,
          "fillType": 4,
          "image": {
            "_class": "MSJSONFileReference",
            "_ref_class": "MSImageData",
            "_ref": `images\/${fill.imageRef}.png`
          },
          "noiseIndex": 0,
          "noiseIntensity": 0,
          "patternFillType": 1,
          "patternTileScale": 1
        });
      } else if (fill.type === 'SOLID') {
        newFills.push({
          "_class": "fill",
          "isEnabled": true,
          "color": {
            "_class": "color",
            "alpha": fill.opacity,
            "blue": fill.color.b,
            "green": fill.color.g,
            "red": fill.color.r
          },
          "fillType": 0,
          "noiseIndex": 0,
          "noiseIntensity": 0,
          "patternFillType": 1,
          "patternTileScale": 1
        });
      }
    });

    style.fills = newFills;
  }

  return style;
};


/***/ }),

/***/ "./src/converter/helpers/type.js":
/*!***************************************!*\
  !*** ./src/converter/helpers/type.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (type) {
  if (type === "PAGE") {
    return "page";
  } else if (type === "FRAME") {
    return "artboard";
  } else if (type === "GROUP") {
    return "group";
  } else if (type === "COMPONENT") {
    return "symbolMaster";
  } else if (type === "INSTANCE") {
    return "symbolInstance";
  } else if (type === "RECTANGLE") {
    return "rectangle";
  } else if (type === "ELLIPSE") {
    return "oval";
  } else if (type === "REGULAR_POLYGON") {
    return "triangle";
  } else if (type === "VECTOR") {
    return "shapePath";
  } else if (type === "TEXT") {
    return "text";
  } else {
    return ""
  }
};


/***/ }),

/***/ "./src/converter/shapes/ellipse.js":
/*!*****************************************!*\
  !*** ./src/converter/shapes/ellipse.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data, result) {
  result.edited = false;
  result.isClosed = true;
  result.pointRadiusBehaviour = 1;
  result.points = [{
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{0.77614237490000004, 1}",
    "curveMode": 2,
    "curveTo": "{0.22385762510000001, 1}",
    "hasCurveFrom": true,
    "hasCurveTo": true,
    "point": "{0.5, 1}"
  }, {
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{1, 0.22385762510000001}",
    "curveMode": 2,
    "curveTo": "{1, 0.77614237490000004}",
    "hasCurveFrom": true,
    "hasCurveTo": true,
    "point": "{1, 0.5}"
  }, {
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{0.22385762510000001, 0}",
    "curveMode": 2,
    "curveTo": "{0.77614237490000004, 0}",
    "hasCurveFrom": true,
    "hasCurveTo": true,
    "point": "{0.5, 0}"
  }, {
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{0, 0.77614237490000004}",
    "curveMode": 2,
    "curveTo": "{0, 0.22385762510000001}",
    "hasCurveFrom": true,
    "hasCurveTo": true,
    "point": "{0, 0.5}"
  }]
}


/***/ }),

/***/ "./src/converter/shapes/rectangle.js":
/*!*******************************************!*\
  !*** ./src/converter/shapes/rectangle.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data, result) {
  result.edited = false;
  result.isClosed = true;
  result.pointRadiusBehaviour = 1;
  result.points = [{
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{0, 0}",
    "curveMode": 1,
    "curveTo": "{0, 0}",
    "hasCurveFrom": false,
    "hasCurveTo": false,
    "point": "{0, 0}"
  }, {
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{1, 0}",
    "curveMode": 1,
    "curveTo": "{1, 0}",
    "hasCurveFrom": false,
    "hasCurveTo": false,
    "point": "{1, 0}"
  }, {
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{1, 1}",
    "curveMode": 1,
    "curveTo": "{1, 1}",
    "hasCurveFrom": false,
    "hasCurveTo": false,
    "point": "{1, 1}"
  }, {
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{0, 1}",
    "curveMode": 1,
    "curveTo": "{0, 1}",
    "hasCurveFrom": false,
    "hasCurveTo": false,
    "point": "{0, 1}"
  }]
  result.fixedRadius = 0;
  result.hasConvertedToNewRoundCorners = true;
}


/***/ }),

/***/ "./src/converter/shapes/triangle.js":
/*!******************************************!*\
  !*** ./src/converter/shapes/triangle.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data, result) {
  result.edited = false;
  result.isClosed = true;
  result.pointRadiusBehaviour = 1;
  result.points = [{
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{0.5, 0}",
    "curveMode": 1,
    "curveTo": "{0.5, 0}",
    "hasCurveFrom": false,
    "hasCurveTo": false,
    "point": "{0.5, 0}"
  }, {
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{1, 1}",
    "curveMode": 1,
    "curveTo": "{1, 1}",
    "hasCurveFrom": false,
    "hasCurveTo": false,
    "point": "{1, 1}"
  }, {
    "_class": "curvePoint",
    "cornerRadius": 0,
    "curveFrom": "{0, 1}",
    "curveMode": 1,
    "curveTo": "{0, 1}",
    "hasCurveFrom": false,
    "hasCurveTo": false,
    "point": "{0, 1}"
  }]
  result.isEquilateral = false;
}


/***/ }),

/***/ "./src/converter/shapes/vector.js":
/*!****************************************!*\
  !*** ./src/converter/shapes/vector.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data, result) {
  const newPath = [];
  const objWidth = data.width;
  const objHeight = data.height;

  // console.log(data.vectorNetwork);

  data.vectorNetwork.vertices.map((vertice, key) => {
    const segment = data.vectorNetwork.segments[key];
    const thing = data.vectorNetwork.segments.find(item => {
      return item.start === key;
    });

    let boom = {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "point": `{${vertice.x/objWidth}, ${vertice.y/objHeight}}`
    }

    // The first curvePoint will have the curveTo from the last vertice
    if (key === 0) {
      const curveFrom = thing.tangentStart;
      const curveTo = data.vectorNetwork.segments[data.vectorNetwork.segments.length - 1].tangentEnd;
      boom.curveFrom = `{${(vertice.x + thing.tangentStart.x)/objWidth}, ${(vertice.y + thing.tangentStart.y)/objHeight}}`;
      boom.curveTo = `{${(vertice.x + curveTo.x)/objWidth}, ${(vertice.y + curveTo.y)/objHeight}}`;

      if (curveFrom.x === 0 && curveFrom.y === 0) {
        boom.hasCurveFrom = false;
      } else {
        boom.hasCurveFrom = true;
      }

      if (curveTo.x === 0 && curveTo.y === 0) {
        boom.hasCurveTo = false;
      } else {
        boom.hasCurveTo = true;
      }
    } else {
      const curveFrom = thing.tangentStart;
      const curveTo = data.vectorNetwork.segments[key - 1].tangentEnd;
      boom.curveFrom = `{${(vertice.x + thing.tangentStart.x)/objWidth}, ${(vertice.y + thing.tangentStart.y)/objHeight}}`;
      boom.curveTo = `{${(vertice.x + curveTo.x)/objWidth}, ${(vertice.y + curveTo.y)/objHeight}}`;

      if (curveFrom.x === 0 && curveFrom.y === 0) {
        boom.hasCurveFrom = false;
      } else {
        boom.hasCurveFrom = true;
      }

      if (curveTo.x === 0 && curveTo.y === 0) {
        boom.hasCurveTo = false;
      } else {
        boom.hasCurveTo = true;
      }
    }

    newPath.push(boom);
  });

  // console.log(newPath);

  result.edited = true;
  result.isClosed = true;
  result.pointRadiusBehaviour = 1;
  result.points = newPath;
}


/***/ }),

/***/ "./src/converter/text/_horizontalAlignement.js":
/*!*****************************************************!*\
  !*** ./src/converter/text/_horizontalAlignement.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data) {
  if (data === "LEFT") {
    return 0;
  } else if (data === "CENTER") {
    return 2;
  } else if (data === "RIGHT") {
    return 1;
  } else {
    return 0
  }
};


/***/ }),

/***/ "./src/converter/text/_textCase.js":
/*!*****************************************!*\
  !*** ./src/converter/text/_textCase.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data) {
  if (data === "UPPER") {
    return 1;
  } else {
    return 0
  }
};


/***/ }),

/***/ "./src/converter/text/_verticalAlignement.js":
/*!***************************************************!*\
  !*** ./src/converter/text/_verticalAlignement.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data) {
  if (data === "TOP") {
    return 0;
  } else if (data === "CENTER") {
    return 1;
  } else if (data === "BOTTOM") {
    return 2;
  } else {
    return 0
  }
};


/***/ }),

/***/ "./src/converter/text/index.js":
/*!*************************************!*\
  !*** ./src/converter/text/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const textAlignement = __webpack_require__(/*! ./_horizontalAlignement */ "./src/converter/text/_horizontalAlignement.js");
const textVerticalAlignement = __webpack_require__(/*! ./_verticalAlignement */ "./src/converter/text/_verticalAlignement.js");
const textCase = __webpack_require__(/*! ./_textCase */ "./src/converter/text/_textCase.js");

module.exports = function (data, result) {
  // const color = {};
  // for (let i in data.fills) {
  //   if(data.fills[i].type === 'SOLID') {
  //     color.a = data.fills[i].opacity;
  //     color.b = data.fills[i].color.b;
  //     color.g = data.fills[i].color.g;
  //     color.r = data.fills[i].color.r;
  //   }
  // }
  // result.style.textStyle = {
  //   "_class": "textStyle",
  //   "encodedAttributes": {
  //     "MSAttributedStringColorAttribute": {
  //       "_class": "color",
  //       "alpha": color.a,
  //       "blue": color.b,
  //       "green": color.g,
  //       "red": color.r
  //     },
  //     "MSAttributedStringFontAttribute": {
  //       "_class": "UIFontDescriptor",
  //       "attributes": {
  //         "name": data.fontName.family,
  //         "size": data.fontSize
  //       }
  //     },
  //     "textStyleVerticalAlignmentKey": 0,
  //     "paragraphStyle": {
  //       "_class": "paragraphStyle",
  //       "maximumLineHeight": data.lineHeight.value,
  //       "minimumLineHeight": data.lineHeight.value,
  //       "alignment": textAlignement(data.textAlignHorizontal)
  //     },
  //     "kerning": data.letterSpacing.value
  //   },
  //   "verticalAlignment": textVerticalAlignement(data.textAlignVertical)
  // };
  // result.attributedString = {
  //   "_class": "attributedString",
  //   "string": data.characters,
  //   "attributes": [{
  //     "_class": "stringAttribute",
  //     "location": 0,
  //     "length": data.characters.length,
  //     "attributes": {
  //       "MSAttributedStringFontAttribute": {
  //         "_class": "UIFontDescriptor",
  //         "attributes": {
  //           "name": data.fontName.family,
  //           "size": data.fontSize
  //         }
  //       },
  //       "MSAttributedStringColorAttribute": {
  //         "_class": "color",
  //         "alpha": color.a,
  //         "blue": color.b,
  //         "green": color.g,
  //         "red": color.r
  //       },
  //       "paragraphStyle": {
  //         "_class": "paragraphStyle",
  //         "alignment": textAlignement(data.textAlignHorizontal)
  //       }
  //     }
  //   }]
  // };

  // if (data.textCase) {
  //   result.style.textStyle.encodedAttributes.MSAttributedStringTextTransformAttribute = 1;
  //   result.attributedString.attributes[0].attributes.MSAttributedStringTextTransformAttribute = textCase(data.textCase);
  // }
  //
  // result.automaticallyDrawOnUnderlyingPath = false;
  // result.dontSynchroniseWithSymbol = false;
  // result.glyphBounds = "{{0, 4}, {38, 8}}";
  // result.lineSpacingBehaviour = 2;
  // result.textBehaviour = 2;
}


/***/ }),

/***/ "./src/converter/transformer.js":
/*!**************************************!*\
  !*** ./src/converter/transformer.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const type = __webpack_require__(/*! ./helpers/type */ "./src/converter/helpers/type.js");
const setStyle = __webpack_require__(/*! ./helpers/style */ "./src/converter/helpers/style.js");
const position = __webpack_require__(/*! ./helpers/position */ "./src/converter/helpers/position.js");
const canvas = __webpack_require__(/*! ./containers/canvas */ "./src/converter/containers/canvas.js");
const frame = __webpack_require__(/*! ./containers/frame */ "./src/converter/containers/frame.js");
const group = __webpack_require__(/*! ./containers/group */ "./src/converter/containers/group.js");
const component = __webpack_require__(/*! ./containers/component */ "./src/converter/containers/component.js");
const instance = __webpack_require__(/*! ./containers/instance */ "./src/converter/containers/instance.js");
const rectangle = __webpack_require__(/*! ./shapes/rectangle */ "./src/converter/shapes/rectangle.js");
const triangle = __webpack_require__(/*! ./shapes/triangle */ "./src/converter/shapes/triangle.js");
const ellipse = __webpack_require__(/*! ./shapes/ellipse */ "./src/converter/shapes/ellipse.js");
const vector = __webpack_require__(/*! ./shapes/vector */ "./src/converter/shapes/vector.js");
const text = __webpack_require__(/*! ./text/index */ "./src/converter/text/index.js");

const transform = (data, parent = {}) => {
  const result = {
    _class: type(data.type),
    do_objectID: data.id,
    booleanOperation: -1,
    exportOptions: {
      _class: 'exportOptions',
      exportFormats: [],
      includedLayerIds: [],
      layerOptions: 0,
      shouldTrim: false,
    },
    frame: {
      _class: 'rect',
      constrainProportions: false,
    },
    isFixedToViewport: false,
    isFlippedHorizontal: false,
    isFlippedVertical: false,
    isLocked: false,
    isVisible: true,
    layerListExpandedType: 0,
    name: data.name,
    nameIsFixed: false,
    resizingConstraint: 63,
    resizingType: 0,
    rotation: 0,
    shouldBreakMaskChain: false,
    clippingMaskMode: 0,
    hasClippingMask: false,
    style: setStyle(data),
  };

  if (data.type !== 'PAGE') {
    const newPosition = position(parent, data);
    result.frame.x = data.x;
    result.frame.y = data.y;
    result.frame.height = data.height;
    result.frame.width = data.width;
  }

  if (data.children) {
    result.layers = data.children.map(child => transform(child, data));
  }

  switch (data.type) {
    case 'PAGE':
      canvas(data, result);
      break;
    case 'FRAME':
      frame(data, result);
      break;
    case 'GROUP':
      group(data, result);
      break;
    case 'COMPONENT':
      component(data, result);
      break;
    case 'INSTANCE':
      instance(data, result);
      break;
    case 'RECTANGLE':
      rectangle(data, result);
      break;
    case 'ELLIPSE':
      ellipse(data, result);
      break;
    case 'REGULAR_POLYGON':
      triangle(data, result);
      break;
    case 'VECTOR':
      vector(data, result);
      break;
    case 'TEXT':
      text(data, result);
      break;
  }

  return result;
};

module.exports = transform;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL2JsZW5kTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL2VsbGlwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL3RyaWFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvX2hvcml6b250YWxBbGlnbmVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9fdGV4dENhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L192ZXJ0aWNhbEFsaWduZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUE2RDtBQUNYO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0RBQWE7QUFDMUI7QUFDQSx1REFBdUQsNkRBQVc7QUFDbEU7QUFDQSxzQkFBc0IsMERBQWU7QUFDckMsMEJBQTBCLDBCQUEwQjtBQUNwRCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBTztBQUNBOzs7Ozs7Ozs7Ozs7QUNEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJpbXBvcnQgeyBDT05WRVJUX1BBR0VTLCBQQUdFU19DT05WRVJURUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgdHJhbnNmb3JtZXIgZnJvbSAnLi9jb252ZXJ0ZXIvdHJhbnNmb3JtZXInO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1lc3NhZ2UgPT4ge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgIGNhc2UgQ09OVkVSVF9QQUdFUzpcbiAgICAgICAgICAgIGNvbnN0IGZpZ21hUGFnZXMgPSBmaWdtYS5yb290LmNoaWxkcmVuO1xuICAgICAgICAgICAgY29uc3Qgc2tldGNoUGFnZXMgPSBmaWdtYVBhZ2VzLm1hcChwYWdlID0+IHRyYW5zZm9ybWVyKHBhZ2UpKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBQQUdFU19DT05WRVJURUQsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyBmaWdtYVBhZ2VzLCBza2V0Y2hQYWdlcyB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG4iLCJleHBvcnQgY29uc3QgQ09OVkVSVF9QQUdFUyA9ICdDT1ZFUlRfUEFHRVMnO1xuZXhwb3J0IGNvbnN0IFBBR0VTX0NPTlZFUlRFRCA9ICdQQUdFU19DT05WRVJURUQnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5ncm91cExheW91dCA9IHtcbiAgICBcIl9jbGFzc1wiOiBcIk1TSW1tdXRhYmxlRnJlZWZvcm1Hcm91cExheW91dFwiXG4gIH07XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSB0cnVlO1xuICByZXN1bHQuaG9yaXpvbnRhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzM2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH07XG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWU7XG4gIHJlc3VsdC52ZXJ0aWNhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzA2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IHRydWU7XG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWU7XG5cbiAgLy8gTmVlZCB0byBhZGQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgYmFja2dyb3VuZHNcbiAgLy8gTmVlZCBzdXBwb3J0IGZvciBvdGhlciB0eXBlcyBvZiBiYWNrZ3JvdW5kc1xuICBpZihkYXRhLmJhY2tncm91bmRzLmxlbmd0aCA+PSAxKSB7XG4gICAgaWYoZGF0YS5iYWNrZ3JvdW5kc1swXS50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICByZXN1bHQuYmFja2dyb3VuZENvbG9yID0ge1xuICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgIFwiYWxwaGFcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5vcGFjaXR5LFxuICAgICAgICBcImJsdWVcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5iLFxuICAgICAgICBcImdyZWVuXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuZyxcbiAgICAgICAgXCJyZWRcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5yXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXN1bHQuaGFzQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcbiAgcmVzdWx0LmluY2x1ZGVCYWNrZ3JvdW5kQ29sb3JJbkluc3RhbmNlID0gdHJ1ZTtcbiAgcmVzdWx0LnN5bWJvbElEID0gZGF0YS5pZDtcbiAgcmVzdWx0LmNoYW5nZUlkZW50aWZpZXIgPSA2O1xuICByZXN1bHQub3ZlcnJpZGVQcm9wZXJ0aWVzID0gW107XG4gIHJlc3VsdC5hbGxvd3NPdmVycmlkZXMgPSB0cnVlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSB0cnVlO1xuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlO1xuXG4gIC8vIE5lZWQgdG8gYWRkIHN1cHBvcnQgZm9yIG11bHRpcGxlIGJhY2tncm91bmRzXG4gIC8vIE5lZWQgc3VwcG9ydCBmb3Igb3RoZXIgdHlwZXMgb2YgYmFja2dyb3VuZHNcbiAgaWYoZGF0YS5iYWNrZ3JvdW5kcy5sZW5ndGggPj0gMSkge1xuICAgIGlmKGRhdGEuYmFja2dyb3VuZHNbMF0udHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgcmVzdWx0LmJhY2tncm91bmRDb2xvciA9IHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICBcImFscGhhXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0ub3BhY2l0eSxcbiAgICAgICAgXCJibHVlXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuYixcbiAgICAgICAgXCJncmVlblwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLmcsXG4gICAgICAgIFwicmVkXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0Lmhhc0JhY2tncm91bmRDb2xvciA9IHRydWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IGZhbHNlO1xuICByZXN1bHQuZ3JvdXBMYXlvdXQgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJNU0ltbXV0YWJsZUZyZWVmb3JtR3JvdXBMYXlvdXRcIlxuICB9XG4gIHJlc3VsdC5ob3Jpem9udGFsUnVsZXJEYXRhID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicnVsZXJEYXRhXCIsXG4gICAgXCJiYXNlXCI6IC0zMzYsXG4gICAgXCJndWlkZXNcIjogW11cbiAgfSxcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZSxcbiAgcmVzdWx0LnZlcnRpY2FsUnVsZXJEYXRhID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicnVsZXJEYXRhXCIsXG4gICAgXCJiYXNlXCI6IC0zMDYsXG4gICAgXCJndWlkZXNcIjogW11cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5ob3Jpem9udGFsU3BhY2luZyA9IDA7XG4gIHJlc3VsdC5vdmVycmlkZVZhbHVlcyA9IFtdO1xuICByZXN1bHQuc2NhbGUgPSAxO1xuICByZXN1bHQuc3ltYm9sSUQgPSBkYXRhLmNvbXBvbmVudElkO1xuICByZXN1bHQudmVydGljYWxTcGFjaW5nID0gMDtcblxuICBjb25zdCBvdmVycmlkZXMgPSBbXTtcblxuICBkYXRhLmNoaWxkcmVuLm1hcCgob3ZlcnJpZGUpID0+IHtcbiAgICBjb25zdCBlbGVtSWQgPSBvdmVycmlkZS5pZC5zcGxpdChcIjtcIik7XG5cbiAgICBpZihvdmVycmlkZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgIG92ZXJyaWRlcy5wdXNoKHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJvdmVycmlkZVZhbHVlXCIsXG4gICAgICAgIFwiZG9fb2JqZWN0SURcIjogZWxlbUlkWzBdLFxuICAgICAgICBcIm92ZXJyaWRlTmFtZVwiOiBgJHtlbGVtSWRbMV19X3N0cmluZ1ZhbHVlYCxcbiAgICAgICAgXCJ2YWx1ZVwiOiBvdmVycmlkZS5jaGFyYWN0ZXJzXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJlc3VsdC5vdmVycmlkZVZhbHVlcyA9IG92ZXJyaWRlcztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFwiUEFTU19USFJPVUdIXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIk5PUk1BTFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJEQVJLRU5cIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTVVMVElQTFlcIikge1xuICAgIHJldHVybiAyO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09MT1JfQlVSTlwiKSB7XG4gICAgcmV0dXJuIDM7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJMSUdIVEVOXCIpIHtcbiAgICByZXR1cm4gNDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNDUkVFTlwiKSB7XG4gICAgcmV0dXJuIDU7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT0xPUl9ET0RHRVwiKSB7XG4gICAgcmV0dXJuIDY7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJPVkVSTEFZXCIpIHtcbiAgICByZXR1cm4gNztcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNPRlRfTElHSFRcIikge1xuICAgIHJldHVybiA4O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSEFSRF9MSUdIVFwiKSB7XG4gICAgcmV0dXJuIDk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJESUZGRVJFTkNFXCIpIHtcbiAgICByZXR1cm4gMTA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJFWENMVVNJT05cIikge1xuICAgIHJldHVybiAxMTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkhVRVwiKSB7XG4gICAgcmV0dXJuIDEyO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU0FUVVJBVElPTlwiKSB7XG4gICAgcmV0dXJuIDEzO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09MT1JcIikge1xuICAgIHJldHVybiAxNDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkxVTUlOT1NJVFlcIikge1xuICAgIHJldHVybiAxNTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCkge1xuXG4gIGxldCB4UG9zaXRpb24gPSAwO1xuICBsZXQgeVBvc2l0aW9uID0gMDtcbiAgaWYgKHBhcmVudC54KSB7XG4gICAgaWYgKGNoaWxkLnggPiBwYXJlbnQueCkge1xuICAgICAgeFBvc2l0aW9uID0gTWF0aC5hYnMoY2hpbGQueCAtIHBhcmVudC54KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLnkgPiBwYXJlbnQueSkge1xuICAgICAgeVBvc2l0aW9uID0gTWF0aC5hYnMoY2hpbGQueSAtIHBhcmVudC55KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgeFBvc2l0aW9uID0gY2hpbGQueDtcbiAgICB5UG9zaXRpb24gPSBjaGlsZC55O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB4UG9zaXRpb24sXG4gICAgeTogeVBvc2l0aW9uXG4gIH1cbn07XG4iLCJjb25zdCBibGVuZE1vZGUgPSByZXF1aXJlKCcuL2JsZW5kTW9kZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIFwiX2NsYXNzXCI6IFwic3R5bGVcIixcbiAgICBcImVuZE1hcmtlclR5cGVcIjogMCxcbiAgICBcIm1pdGVyTGltaXRcIjogMTAsXG4gICAgXCJzdGFydE1hcmtlclR5cGVcIjogMCxcbiAgICBcIndpbmRpbmdSdWxlXCI6IDAsIC8vIE5PTlpFUk9cbiAgfTtcblxuICBpZiAoZGF0YS5ibGVuZE1vZGUpIHtcbiAgICBzdHlsZS5jb250ZXh0U2V0dGluZ3MgPSB7XG4gICAgICBcIl9jbGFzc1wiOiBcImdyYXBoaWNzQ29udGV4dFNldHRpbmdzXCIsXG4gICAgICBcImJsZW5kTW9kZVwiOiBibGVuZE1vZGUoZGF0YS5ibGVuZE1vZGUpXG4gICAgfVxuXG4gICAgaWYgKGRhdGEub3BhY2l0eSkge1xuICAgICAgc3R5bGUuY29udGV4dFNldHRpbmdzLm9wYWNpdHkgPSBkYXRhLm9wYWNpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmNvbnRleHRTZXR0aW5ncy5vcGFjaXR5ID0gMTtcbiAgICB9XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLnN0cm9rZXMpICYmIGRhdGEuc3Ryb2tlcy5sZW5ndGgpIHtcbiAgICBsZXQgbmV3Qm9yZGVycyA9IFtdO1xuICAgIGRhdGEuc3Ryb2tlcy5mb3JFYWNoKGZ1bmN0aW9uKGJvcmRlcikge1xuXG4gICAgICAvLyBDb252ZXJ0IHRoZSBwb3NpdGlvbiAtIGluc2lkZSwgY2VudGVyLCBvdXRzaWRlXG4gICAgICBsZXQgcG9zaXRpb24gPSAnJztcbiAgICAgIGlmIChkYXRhLnN0cm9rZUFsaWduID09PSAnSU5TSURFJykge1xuICAgICAgICBwb3NpdGlvbiA9ICAxO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLnN0cm9rZUFsaWduID09PSAnT1VUU0lERScpIHtcbiAgICAgICAgcG9zaXRpb24gPSAgMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uID0gIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBjb2xvciA9ICcnO1xuICAgICAgaWYgKGJvcmRlci50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICAgIGNvbG9yID0ge1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgICBcImFscGhhXCI6IGJvcmRlci5vcGFjaXR5LFxuICAgICAgICAgIFwiYmx1ZVwiOiBib3JkZXIuY29sb3IuYixcbiAgICAgICAgICBcImdyZWVuXCI6IGJvcmRlci5jb2xvci5nLFxuICAgICAgICAgIFwicmVkXCI6IGJvcmRlci5jb2xvci5yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGdyYWRpZW50ID0gJyc7XG4gICAgICBpZiAoYm9yZGVyLnR5cGUgPT09ICdHUkFESUVOVF9MSU5FQVInKSB7XG4gICAgICAgIC8vIFRPRE86IEFkZCBzdXBwb3J0IGZvciBHcmFkaWVudHNcbiAgICAgIH1cblxuICAgICAgbmV3Qm9yZGVycy5wdXNoKHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJib3JkZXJcIixcbiAgICAgICAgXCJpc0VuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgXCJjb2xvclwiOiBjb2xvcixcbiAgICAgICAgXCJmaWxsVHlwZVwiOiAwLFxuICAgICAgICBcInBvc2l0aW9uXCI6IHBvc2l0aW9uLFxuICAgICAgICBcInRoaWNrbmVzc1wiOiBkYXRhLnN0cm9rZVdlaWdodFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzdHlsZS5ib3JkZXJzID0gbmV3Qm9yZGVycztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEuZmlsbHMpICYmIGRhdGEuZmlsbHMubGVuZ3RoKSB7XG4gICAgbGV0IG5ld0ZpbGxzID0gW107XG4gICAgZGF0YS5maWxscy5mb3JFYWNoKGZ1bmN0aW9uKGZpbGwpIHtcbiAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdJTUFHRScpIHtcbiAgICAgICAgbmV3RmlsbHMucHVzaCh7XG4gICAgICAgICAgXCJfY2xhc3NcIjogXCJmaWxsXCIsXG4gICAgICAgICAgXCJpc0VuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcImZpbGxUeXBlXCI6IDQsXG4gICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBcIk1TSlNPTkZpbGVSZWZlcmVuY2VcIixcbiAgICAgICAgICAgIFwiX3JlZl9jbGFzc1wiOiBcIk1TSW1hZ2VEYXRhXCIsXG4gICAgICAgICAgICBcIl9yZWZcIjogYGltYWdlc1xcLyR7ZmlsbC5pbWFnZVJlZn0ucG5nYFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJub2lzZUluZGV4XCI6IDAsXG4gICAgICAgICAgXCJub2lzZUludGVuc2l0eVwiOiAwLFxuICAgICAgICAgIFwicGF0dGVybkZpbGxUeXBlXCI6IDEsXG4gICAgICAgICAgXCJwYXR0ZXJuVGlsZVNjYWxlXCI6IDFcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICBuZXdGaWxscy5wdXNoKHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcImZpbGxcIixcbiAgICAgICAgICBcImlzRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgXCJhbHBoYVwiOiBmaWxsLm9wYWNpdHksXG4gICAgICAgICAgICBcImJsdWVcIjogZmlsbC5jb2xvci5iLFxuICAgICAgICAgICAgXCJncmVlblwiOiBmaWxsLmNvbG9yLmcsXG4gICAgICAgICAgICBcInJlZFwiOiBmaWxsLmNvbG9yLnJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZmlsbFR5cGVcIjogMCxcbiAgICAgICAgICBcIm5vaXNlSW5kZXhcIjogMCxcbiAgICAgICAgICBcIm5vaXNlSW50ZW5zaXR5XCI6IDAsXG4gICAgICAgICAgXCJwYXR0ZXJuRmlsbFR5cGVcIjogMSxcbiAgICAgICAgICBcInBhdHRlcm5UaWxlU2NhbGVcIjogMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0eWxlLmZpbGxzID0gbmV3RmlsbHM7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodHlwZSA9PT0gXCJQQUdFXCIpIHtcbiAgICByZXR1cm4gXCJwYWdlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgcmV0dXJuIFwiYXJ0Ym9hcmRcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICByZXR1cm4gXCJncm91cFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09NUE9ORU5UXCIpIHtcbiAgICByZXR1cm4gXCJzeW1ib2xNYXN0ZXJcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICByZXR1cm4gXCJzeW1ib2xJbnN0YW5jZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiUkVDVEFOR0xFXCIpIHtcbiAgICByZXR1cm4gXCJyZWN0YW5nbGVcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkVMTElQU0VcIikge1xuICAgIHJldHVybiBcIm92YWxcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlJFR1VMQVJfUE9MWUdPTlwiKSB7XG4gICAgcmV0dXJuIFwidHJpYW5nbGVcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlZFQ1RPUlwiKSB7XG4gICAgcmV0dXJuIFwic2hhcGVQYXRoXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJURVhUXCIpIHtcbiAgICByZXR1cm4gXCJ0ZXh0XCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiXCJcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZWRpdGVkID0gZmFsc2U7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBbe1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MC43NzYxNDIzNzQ5MDAwMDAwNCwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInswLjIyMzg1NzYyNTEwMDAwMDAxLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInswLjUsIDF9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMC4yMjM4NTc2MjUxMDAwMDAwMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAwLjc3NjE0MjM3NDkwMDAwMDA0fVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInsxLCAwLjV9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MC4yMjM4NTc2MjUxMDAwMDAwMSwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInswLjc3NjE0MjM3NDkwMDAwMDA0LCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInswLjUsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMC43NzYxNDIzNzQ5MDAwMDAwNH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAwLjIyMzg1NzYyNTEwMDAwMDAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInswLCAwLjV9XCJcbiAgfV1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZWRpdGVkID0gZmFsc2U7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBbe1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDF9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDF9XCJcbiAgfV1cbiAgcmVzdWx0LmZpeGVkUmFkaXVzID0gMDtcbiAgcmVzdWx0Lmhhc0NvbnZlcnRlZFRvTmV3Um91bmRDb3JuZXJzID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZWRpdGVkID0gZmFsc2U7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBbe1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MC41LCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAuNSwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLjUsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDF9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDF9XCJcbiAgfV1cbiAgcmVzdWx0LmlzRXF1aWxhdGVyYWwgPSBmYWxzZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICBjb25zdCBuZXdQYXRoID0gW107XG4gIGNvbnN0IG9ialdpZHRoID0gZGF0YS53aWR0aDtcbiAgY29uc3Qgb2JqSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG5cbiAgLy8gY29uc29sZS5sb2coZGF0YS52ZWN0b3JOZXR3b3JrKTtcblxuICBkYXRhLnZlY3Rvck5ldHdvcmsudmVydGljZXMubWFwKCh2ZXJ0aWNlLCBrZXkpID0+IHtcbiAgICBjb25zdCBzZWdtZW50ID0gZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzW2tleV07XG4gICAgY29uc3QgdGhpbmcgPSBkYXRhLnZlY3Rvck5ldHdvcmsuc2VnbWVudHMuZmluZChpdGVtID0+IHtcbiAgICAgIHJldHVybiBpdGVtLnN0YXJ0ID09PSBrZXk7XG4gICAgfSk7XG5cbiAgICBsZXQgYm9vbSA9IHtcbiAgICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICAgIFwicG9pbnRcIjogYHske3ZlcnRpY2UueC9vYmpXaWR0aH0sICR7dmVydGljZS55L29iakhlaWdodH19YFxuICAgIH1cblxuICAgIC8vIFRoZSBmaXJzdCBjdXJ2ZVBvaW50IHdpbGwgaGF2ZSB0aGUgY3VydmVUbyBmcm9tIHRoZSBsYXN0IHZlcnRpY2VcbiAgICBpZiAoa2V5ID09PSAwKSB7XG4gICAgICBjb25zdCBjdXJ2ZUZyb20gPSB0aGluZy50YW5nZW50U3RhcnQ7XG4gICAgICBjb25zdCBjdXJ2ZVRvID0gZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzW2RhdGEudmVjdG9yTmV0d29yay5zZWdtZW50cy5sZW5ndGggLSAxXS50YW5nZW50RW5kO1xuICAgICAgYm9vbS5jdXJ2ZUZyb20gPSBgeyR7KHZlcnRpY2UueCArIHRoaW5nLnRhbmdlbnRTdGFydC54KS9vYmpXaWR0aH0sICR7KHZlcnRpY2UueSArIHRoaW5nLnRhbmdlbnRTdGFydC55KS9vYmpIZWlnaHR9fWA7XG4gICAgICBib29tLmN1cnZlVG8gPSBgeyR7KHZlcnRpY2UueCArIGN1cnZlVG8ueCkvb2JqV2lkdGh9LCAkeyh2ZXJ0aWNlLnkgKyBjdXJ2ZVRvLnkpL29iakhlaWdodH19YDtcblxuICAgICAgaWYgKGN1cnZlRnJvbS54ID09PSAwICYmIGN1cnZlRnJvbS55ID09PSAwKSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJ2ZVRvLnggPT09IDAgJiYgY3VydmVUby55ID09PSAwKSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VydmVGcm9tID0gdGhpbmcudGFuZ2VudFN0YXJ0O1xuICAgICAgY29uc3QgY3VydmVUbyA9IGRhdGEudmVjdG9yTmV0d29yay5zZWdtZW50c1trZXkgLSAxXS50YW5nZW50RW5kO1xuICAgICAgYm9vbS5jdXJ2ZUZyb20gPSBgeyR7KHZlcnRpY2UueCArIHRoaW5nLnRhbmdlbnRTdGFydC54KS9vYmpXaWR0aH0sICR7KHZlcnRpY2UueSArIHRoaW5nLnRhbmdlbnRTdGFydC55KS9vYmpIZWlnaHR9fWA7XG4gICAgICBib29tLmN1cnZlVG8gPSBgeyR7KHZlcnRpY2UueCArIGN1cnZlVG8ueCkvb2JqV2lkdGh9LCAkeyh2ZXJ0aWNlLnkgKyBjdXJ2ZVRvLnkpL29iakhlaWdodH19YDtcblxuICAgICAgaWYgKGN1cnZlRnJvbS54ID09PSAwICYmIGN1cnZlRnJvbS55ID09PSAwKSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJ2ZVRvLnggPT09IDAgJiYgY3VydmVUby55ID09PSAwKSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdQYXRoLnB1c2goYm9vbSk7XG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKG5ld1BhdGgpO1xuXG4gIHJlc3VsdC5lZGl0ZWQgPSB0cnVlO1xuICByZXN1bHQuaXNDbG9zZWQgPSB0cnVlO1xuICByZXN1bHQucG9pbnRSYWRpdXNCZWhhdmlvdXIgPSAxO1xuICByZXN1bHQucG9pbnRzID0gbmV3UGF0aDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IFwiTEVGVFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJDRU5URVJcIikge1xuICAgIHJldHVybiAyO1xuICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiUklHSFRcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBcIlVQUEVSXCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gXCJUT1BcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiQ0VOVEVSXCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIkJPVFRPTVwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsImNvbnN0IHRleHRBbGlnbmVtZW50ID0gcmVxdWlyZSgnLi9faG9yaXpvbnRhbEFsaWduZW1lbnQnKTtcbmNvbnN0IHRleHRWZXJ0aWNhbEFsaWduZW1lbnQgPSByZXF1aXJlKCcuL192ZXJ0aWNhbEFsaWduZW1lbnQnKTtcbmNvbnN0IHRleHRDYXNlID0gcmVxdWlyZSgnLi9fdGV4dENhc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIC8vIGNvbnN0IGNvbG9yID0ge307XG4gIC8vIGZvciAobGV0IGkgaW4gZGF0YS5maWxscykge1xuICAvLyAgIGlmKGRhdGEuZmlsbHNbaV0udHlwZSA9PT0gJ1NPTElEJykge1xuICAvLyAgICAgY29sb3IuYSA9IGRhdGEuZmlsbHNbaV0ub3BhY2l0eTtcbiAgLy8gICAgIGNvbG9yLmIgPSBkYXRhLmZpbGxzW2ldLmNvbG9yLmI7XG4gIC8vICAgICBjb2xvci5nID0gZGF0YS5maWxsc1tpXS5jb2xvci5nO1xuICAvLyAgICAgY29sb3IuciA9IGRhdGEuZmlsbHNbaV0uY29sb3IucjtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gcmVzdWx0LnN0eWxlLnRleHRTdHlsZSA9IHtcbiAgLy8gICBcIl9jbGFzc1wiOiBcInRleHRTdHlsZVwiLFxuICAvLyAgIFwiZW5jb2RlZEF0dHJpYnV0ZXNcIjoge1xuICAvLyAgICAgXCJNU0F0dHJpYnV0ZWRTdHJpbmdDb2xvckF0dHJpYnV0ZVwiOiB7XG4gIC8vICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgLy8gICAgICAgXCJhbHBoYVwiOiBjb2xvci5hLFxuICAvLyAgICAgICBcImJsdWVcIjogY29sb3IuYixcbiAgLy8gICAgICAgXCJncmVlblwiOiBjb2xvci5nLFxuICAvLyAgICAgICBcInJlZFwiOiBjb2xvci5yXG4gIC8vICAgICB9LFxuICAvLyAgICAgXCJNU0F0dHJpYnV0ZWRTdHJpbmdGb250QXR0cmlidXRlXCI6IHtcbiAgLy8gICAgICAgXCJfY2xhc3NcIjogXCJVSUZvbnREZXNjcmlwdG9yXCIsXG4gIC8vICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gIC8vICAgICAgICAgXCJuYW1lXCI6IGRhdGEuZm9udE5hbWUuZmFtaWx5LFxuICAvLyAgICAgICAgIFwic2l6ZVwiOiBkYXRhLmZvbnRTaXplXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0sXG4gIC8vICAgICBcInRleHRTdHlsZVZlcnRpY2FsQWxpZ25tZW50S2V5XCI6IDAsXG4gIC8vICAgICBcInBhcmFncmFwaFN0eWxlXCI6IHtcbiAgLy8gICAgICAgXCJfY2xhc3NcIjogXCJwYXJhZ3JhcGhTdHlsZVwiLFxuICAvLyAgICAgICBcIm1heGltdW1MaW5lSGVpZ2h0XCI6IGRhdGEubGluZUhlaWdodC52YWx1ZSxcbiAgLy8gICAgICAgXCJtaW5pbXVtTGluZUhlaWdodFwiOiBkYXRhLmxpbmVIZWlnaHQudmFsdWUsXG4gIC8vICAgICAgIFwiYWxpZ25tZW50XCI6IHRleHRBbGlnbmVtZW50KGRhdGEudGV4dEFsaWduSG9yaXpvbnRhbClcbiAgLy8gICAgIH0sXG4gIC8vICAgICBcImtlcm5pbmdcIjogZGF0YS5sZXR0ZXJTcGFjaW5nLnZhbHVlXG4gIC8vICAgfSxcbiAgLy8gICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IHRleHRWZXJ0aWNhbEFsaWduZW1lbnQoZGF0YS50ZXh0QWxpZ25WZXJ0aWNhbClcbiAgLy8gfTtcbiAgLy8gcmVzdWx0LmF0dHJpYnV0ZWRTdHJpbmcgPSB7XG4gIC8vICAgXCJfY2xhc3NcIjogXCJhdHRyaWJ1dGVkU3RyaW5nXCIsXG4gIC8vICAgXCJzdHJpbmdcIjogZGF0YS5jaGFyYWN0ZXJzLFxuICAvLyAgIFwiYXR0cmlidXRlc1wiOiBbe1xuICAvLyAgICAgXCJfY2xhc3NcIjogXCJzdHJpbmdBdHRyaWJ1dGVcIixcbiAgLy8gICAgIFwibG9jYXRpb25cIjogMCxcbiAgLy8gICAgIFwibGVuZ3RoXCI6IGRhdGEuY2hhcmFjdGVycy5sZW5ndGgsXG4gIC8vICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAvLyAgICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0ZvbnRBdHRyaWJ1dGVcIjoge1xuICAvLyAgICAgICAgIFwiX2NsYXNzXCI6IFwiVUlGb250RGVzY3JpcHRvclwiLFxuICAvLyAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gIC8vICAgICAgICAgICBcIm5hbWVcIjogZGF0YS5mb250TmFtZS5mYW1pbHksXG4gIC8vICAgICAgICAgICBcInNpemVcIjogZGF0YS5mb250U2l6ZVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAgXCJNU0F0dHJpYnV0ZWRTdHJpbmdDb2xvckF0dHJpYnV0ZVwiOiB7XG4gIC8vICAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAvLyAgICAgICAgIFwiYWxwaGFcIjogY29sb3IuYSxcbiAgLy8gICAgICAgICBcImJsdWVcIjogY29sb3IuYixcbiAgLy8gICAgICAgICBcImdyZWVuXCI6IGNvbG9yLmcsXG4gIC8vICAgICAgICAgXCJyZWRcIjogY29sb3IuclxuICAvLyAgICAgICB9LFxuICAvLyAgICAgICBcInBhcmFncmFwaFN0eWxlXCI6IHtcbiAgLy8gICAgICAgICBcIl9jbGFzc1wiOiBcInBhcmFncmFwaFN0eWxlXCIsXG4gIC8vICAgICAgICAgXCJhbGlnbm1lbnRcIjogdGV4dEFsaWduZW1lbnQoZGF0YS50ZXh0QWxpZ25Ib3Jpem9udGFsKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfV1cbiAgLy8gfTtcblxuICAvLyBpZiAoZGF0YS50ZXh0Q2FzZSkge1xuICAvLyAgIHJlc3VsdC5zdHlsZS50ZXh0U3R5bGUuZW5jb2RlZEF0dHJpYnV0ZXMuTVNBdHRyaWJ1dGVkU3RyaW5nVGV4dFRyYW5zZm9ybUF0dHJpYnV0ZSA9IDE7XG4gIC8vICAgcmVzdWx0LmF0dHJpYnV0ZWRTdHJpbmcuYXR0cmlidXRlc1swXS5hdHRyaWJ1dGVzLk1TQXR0cmlidXRlZFN0cmluZ1RleHRUcmFuc2Zvcm1BdHRyaWJ1dGUgPSB0ZXh0Q2FzZShkYXRhLnRleHRDYXNlKTtcbiAgLy8gfVxuICAvL1xuICAvLyByZXN1bHQuYXV0b21hdGljYWxseURyYXdPblVuZGVybHlpbmdQYXRoID0gZmFsc2U7XG4gIC8vIHJlc3VsdC5kb250U3luY2hyb25pc2VXaXRoU3ltYm9sID0gZmFsc2U7XG4gIC8vIHJlc3VsdC5nbHlwaEJvdW5kcyA9IFwie3swLCA0fSwgezM4LCA4fX1cIjtcbiAgLy8gcmVzdWx0LmxpbmVTcGFjaW5nQmVoYXZpb3VyID0gMjtcbiAgLy8gcmVzdWx0LnRleHRCZWhhdmlvdXIgPSAyO1xufVxuIiwiY29uc3QgdHlwZSA9IHJlcXVpcmUoJy4vaGVscGVycy90eXBlJyk7XG5jb25zdCBzZXRTdHlsZSA9IHJlcXVpcmUoJy4vaGVscGVycy9zdHlsZScpO1xuY29uc3QgcG9zaXRpb24gPSByZXF1aXJlKCcuL2hlbHBlcnMvcG9zaXRpb24nKTtcbmNvbnN0IGNhbnZhcyA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9jYW52YXMnKTtcbmNvbnN0IGZyYW1lID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2ZyYW1lJyk7XG5jb25zdCBncm91cCA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9ncm91cCcpO1xuY29uc3QgY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2NvbXBvbmVudCcpO1xuY29uc3QgaW5zdGFuY2UgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvaW5zdGFuY2UnKTtcbmNvbnN0IHJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vc2hhcGVzL3JlY3RhbmdsZScpO1xuY29uc3QgdHJpYW5nbGUgPSByZXF1aXJlKCcuL3NoYXBlcy90cmlhbmdsZScpO1xuY29uc3QgZWxsaXBzZSA9IHJlcXVpcmUoJy4vc2hhcGVzL2VsbGlwc2UnKTtcbmNvbnN0IHZlY3RvciA9IHJlcXVpcmUoJy4vc2hhcGVzL3ZlY3RvcicpO1xuY29uc3QgdGV4dCA9IHJlcXVpcmUoJy4vdGV4dC9pbmRleCcpO1xuXG5jb25zdCB0cmFuc2Zvcm0gPSAoZGF0YSwgcGFyZW50ID0ge30pID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIF9jbGFzczogdHlwZShkYXRhLnR5cGUpLFxuICAgIGRvX29iamVjdElEOiBkYXRhLmlkLFxuICAgIGJvb2xlYW5PcGVyYXRpb246IC0xLFxuICAgIGV4cG9ydE9wdGlvbnM6IHtcbiAgICAgIF9jbGFzczogJ2V4cG9ydE9wdGlvbnMnLFxuICAgICAgZXhwb3J0Rm9ybWF0czogW10sXG4gICAgICBpbmNsdWRlZExheWVySWRzOiBbXSxcbiAgICAgIGxheWVyT3B0aW9uczogMCxcbiAgICAgIHNob3VsZFRyaW06IGZhbHNlLFxuICAgIH0sXG4gICAgZnJhbWU6IHtcbiAgICAgIF9jbGFzczogJ3JlY3QnLFxuICAgICAgY29uc3RyYWluUHJvcG9ydGlvbnM6IGZhbHNlLFxuICAgIH0sXG4gICAgaXNGaXhlZFRvVmlld3BvcnQ6IGZhbHNlLFxuICAgIGlzRmxpcHBlZEhvcml6b250YWw6IGZhbHNlLFxuICAgIGlzRmxpcHBlZFZlcnRpY2FsOiBmYWxzZSxcbiAgICBpc0xvY2tlZDogZmFsc2UsXG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIGxheWVyTGlzdEV4cGFuZGVkVHlwZTogMCxcbiAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgbmFtZUlzRml4ZWQ6IGZhbHNlLFxuICAgIHJlc2l6aW5nQ29uc3RyYWludDogNjMsXG4gICAgcmVzaXppbmdUeXBlOiAwLFxuICAgIHJvdGF0aW9uOiAwLFxuICAgIHNob3VsZEJyZWFrTWFza0NoYWluOiBmYWxzZSxcbiAgICBjbGlwcGluZ01hc2tNb2RlOiAwLFxuICAgIGhhc0NsaXBwaW5nTWFzazogZmFsc2UsXG4gICAgc3R5bGU6IHNldFN0eWxlKGRhdGEpLFxuICB9O1xuXG4gIGlmIChkYXRhLnR5cGUgIT09ICdQQUdFJykge1xuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gcG9zaXRpb24ocGFyZW50LCBkYXRhKTtcbiAgICByZXN1bHQuZnJhbWUueCA9IGRhdGEueDtcbiAgICByZXN1bHQuZnJhbWUueSA9IGRhdGEueTtcbiAgICByZXN1bHQuZnJhbWUuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgcmVzdWx0LmZyYW1lLndpZHRoID0gZGF0YS53aWR0aDtcbiAgfVxuXG4gIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgcmVzdWx0LmxheWVycyA9IGRhdGEuY2hpbGRyZW4ubWFwKGNoaWxkID0+IHRyYW5zZm9ybShjaGlsZCwgZGF0YSkpO1xuICB9XG5cbiAgc3dpdGNoIChkYXRhLnR5cGUpIHtcbiAgICBjYXNlICdQQUdFJzpcbiAgICAgIGNhbnZhcyhkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRlJBTUUnOlxuICAgICAgZnJhbWUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0dST1VQJzpcbiAgICAgIGdyb3VwKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdDT01QT05FTlQnOlxuICAgICAgY29tcG9uZW50KGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdJTlNUQU5DRSc6XG4gICAgICBpbnN0YW5jZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUkVDVEFOR0xFJzpcbiAgICAgIHJlY3RhbmdsZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRUxMSVBTRSc6XG4gICAgICBlbGxpcHNlKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdSRUdVTEFSX1BPTFlHT04nOlxuICAgICAgdHJpYW5nbGUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1ZFQ1RPUic6XG4gICAgICB2ZWN0b3IoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1RFWFQnOlxuICAgICAgdGV4dChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9