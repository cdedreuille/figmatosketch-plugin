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
  let segments = data.vectorNetwork.segments;
  let vertices = data.vectorNetwork.vertices;

  if(vertices.length !== segments.length) {
    vertices = vertices.slice(0,vertices.length - 1);
  }

  vertices.map((vertice, key) => {
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
  const color = {};
  for (let i in data.fills) {
    if(data.fills[i].type === 'SOLID') {
      color.a = data.fills[i].opacity;
      color.b = data.fills[i].color.b;
      color.g = data.fills[i].color.g;
      color.r = data.fills[i].color.r;
    }
  }
  result.style.textStyle = {
    "_class": "textStyle",
    "encodedAttributes": {
      "MSAttributedStringColorAttribute": {
        "_class": "color",
        "alpha": color.a,
        "blue": color.b,
        "green": color.g,
        "red": color.r
      },
      "MSAttributedStringFontAttribute": {
        "_class": "UIFontDescriptor",
        "attributes": {
          "name": typeof data.fontName !== "symbol" ? data.fontName.family : '',
          "size": typeof data.fontSize !== "symbol" ? data.fontSize : 15
        }
      },
      "textStyleVerticalAlignmentKey": 0,
      "paragraphStyle": {
        "_class": "paragraphStyle",
        "maximumLineHeight": data.lineHeight.value,
        "minimumLineHeight": data.lineHeight.value,
        "alignment": textAlignement(data.textAlignHorizontal)
      },
      "kerning": data.letterSpacing.value
    },
    "verticalAlignment": textVerticalAlignement(data.textAlignVertical)
  };
  result.attributedString = {
    "_class": "attributedString",
    "string": data.characters,
    "attributes": [{
      "_class": "stringAttribute",
      "location": 0,
      "length": data.characters.length,
      "attributes": {
        "MSAttributedStringFontAttribute": {
          "_class": "UIFontDescriptor",
          "attributes": {
            "name": typeof data.fontName !== "symbol" ? data.fontName.family : '',
            "size": typeof data.fontSize !== "symbol" ? data.fontSize : 15
          }
        },
        "MSAttributedStringColorAttribute": {
          "_class": "color",
          "alpha": color.a,
          "blue": color.b,
          "green": color.g,
          "red": color.r
        },
        "paragraphStyle": {
          "_class": "paragraphStyle",
          "alignment": textAlignement(data.textAlignHorizontal)
        }
      }
    }]
  };

  if (data.textCase) {
    result.style.textStyle.encodedAttributes.MSAttributedStringTextTransformAttribute = 1;
    result.attributedString.attributes[0].attributes.MSAttributedStringTextTransformAttribute = textCase(data.textCase);
  }

  result.automaticallyDrawOnUnderlyingPath = false;
  result.dontSynchroniseWithSymbol = false;
  result.glyphBounds = "{{0, 4}, {38, 8}}";
  result.lineSpacingBehaviour = 2;
  result.textBehaviour = 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL2JsZW5kTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL2VsbGlwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL3RyaWFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvX2hvcml6b250YWxBbGlnbmVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9fdGV4dENhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L192ZXJ0aWNhbEFsaWduZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUE2RDtBQUNYO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0RBQWE7QUFDMUI7QUFDQSx1REFBdUQsNkRBQVc7QUFDbEU7QUFDQSxzQkFBc0IsMERBQWU7QUFDckMsMEJBQTBCLDBCQUEwQjtBQUNwRCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBTztBQUNBOzs7Ozs7Ozs7Ozs7QUNEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Q3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiaW1wb3J0IHsgQ09OVkVSVF9QQUdFUywgUEFHRVNfQ09OVkVSVEVEIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHRyYW5zZm9ybWVyIGZyb20gJy4vY29udmVydGVyL3RyYW5zZm9ybWVyJztcbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtZXNzYWdlID0+IHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICBjYXNlIENPTlZFUlRfUEFHRVM6XG4gICAgICAgICAgICBjb25zdCBmaWdtYVBhZ2VzID0gZmlnbWEucm9vdC5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IHNrZXRjaFBhZ2VzID0gZmlnbWFQYWdlcy5tYXAocGFnZSA9PiB0cmFuc2Zvcm1lcihwYWdlKSk7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogUEFHRVNfQ09OVkVSVEVELFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgZmlnbWFQYWdlcywgc2tldGNoUGFnZXMgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IENPTlZFUlRfUEFHRVMgPSAnQ09WRVJUX1BBR0VTJztcbmV4cG9ydCBjb25zdCBQQUdFU19DT05WRVJURUQgPSAnUEFHRVNfQ09OVkVSVEVEJztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZ3JvdXBMYXlvdXQgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJNU0ltbXV0YWJsZUZyZWVmb3JtR3JvdXBMYXlvdXRcIlxuICB9O1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gdHJ1ZTtcbiAgcmVzdWx0Lmhvcml6b250YWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMzNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9O1xuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlO1xuICByZXN1bHQudmVydGljYWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMwNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSB0cnVlO1xuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlO1xuXG4gIC8vIE5lZWQgdG8gYWRkIHN1cHBvcnQgZm9yIG11bHRpcGxlIGJhY2tncm91bmRzXG4gIC8vIE5lZWQgc3VwcG9ydCBmb3Igb3RoZXIgdHlwZXMgb2YgYmFja2dyb3VuZHNcbiAgaWYoZGF0YS5iYWNrZ3JvdW5kcy5sZW5ndGggPj0gMSkge1xuICAgIGlmKGRhdGEuYmFja2dyb3VuZHNbMF0udHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgcmVzdWx0LmJhY2tncm91bmRDb2xvciA9IHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICBcImFscGhhXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0ub3BhY2l0eSxcbiAgICAgICAgXCJibHVlXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuYixcbiAgICAgICAgXCJncmVlblwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLmcsXG4gICAgICAgIFwicmVkXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0Lmhhc0JhY2tncm91bmRDb2xvciA9IHRydWU7XG4gIHJlc3VsdC5pbmNsdWRlQmFja2dyb3VuZENvbG9ySW5JbnN0YW5jZSA9IHRydWU7XG4gIHJlc3VsdC5zeW1ib2xJRCA9IGRhdGEuaWQ7XG4gIHJlc3VsdC5jaGFuZ2VJZGVudGlmaWVyID0gNjtcbiAgcmVzdWx0Lm92ZXJyaWRlUHJvcGVydGllcyA9IFtdO1xuICByZXN1bHQuYWxsb3dzT3ZlcnJpZGVzID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gdHJ1ZTtcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZTtcblxuICAvLyBOZWVkIHRvIGFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBiYWNrZ3JvdW5kc1xuICAvLyBOZWVkIHN1cHBvcnQgZm9yIG90aGVyIHR5cGVzIG9mIGJhY2tncm91bmRzXG4gIGlmKGRhdGEuYmFja2dyb3VuZHMubGVuZ3RoID49IDEpIHtcbiAgICBpZihkYXRhLmJhY2tncm91bmRzWzBdLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IgPSB7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgXCJhbHBoYVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLm9wYWNpdHksXG4gICAgICAgIFwiYmx1ZVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLmIsXG4gICAgICAgIFwiZ3JlZW5cIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5nLFxuICAgICAgICBcInJlZFwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJlc3VsdC5oYXNCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSBmYWxzZTtcbiAgcmVzdWx0Lmdyb3VwTGF5b3V0ID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiTVNJbW11dGFibGVGcmVlZm9ybUdyb3VwTGF5b3V0XCJcbiAgfVxuICByZXN1bHQuaG9yaXpvbnRhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzM2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH0sXG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWUsXG4gIHJlc3VsdC52ZXJ0aWNhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzA2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaG9yaXpvbnRhbFNwYWNpbmcgPSAwO1xuICByZXN1bHQub3ZlcnJpZGVWYWx1ZXMgPSBbXTtcbiAgcmVzdWx0LnNjYWxlID0gMTtcbiAgcmVzdWx0LnN5bWJvbElEID0gZGF0YS5jb21wb25lbnRJZDtcbiAgcmVzdWx0LnZlcnRpY2FsU3BhY2luZyA9IDA7XG5cbiAgY29uc3Qgb3ZlcnJpZGVzID0gW107XG5cbiAgZGF0YS5jaGlsZHJlbi5tYXAoKG92ZXJyaWRlKSA9PiB7XG4gICAgY29uc3QgZWxlbUlkID0gb3ZlcnJpZGUuaWQuc3BsaXQoXCI7XCIpO1xuXG4gICAgaWYob3ZlcnJpZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICBvdmVycmlkZXMucHVzaCh7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwib3ZlcnJpZGVWYWx1ZVwiLFxuICAgICAgICBcImRvX29iamVjdElEXCI6IGVsZW1JZFswXSxcbiAgICAgICAgXCJvdmVycmlkZU5hbWVcIjogYCR7ZWxlbUlkWzFdfV9zdHJpbmdWYWx1ZWAsXG4gICAgICAgIFwidmFsdWVcIjogb3ZlcnJpZGUuY2hhcmFjdGVyc1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXN1bHQub3ZlcnJpZGVWYWx1ZXMgPSBvdmVycmlkZXM7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0eXBlID09PSBcIlBBU1NfVEhST1VHSFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJOT1JNQUxcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiREFSS0VOXCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIk1VTFRJUExZXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTE9SX0JVUk5cIikge1xuICAgIHJldHVybiAzO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTElHSFRFTlwiKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTQ1JFRU5cIikge1xuICAgIHJldHVybiA1O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09MT1JfRE9ER0VcIikge1xuICAgIHJldHVybiA2O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiT1ZFUkxBWVwiKSB7XG4gICAgcmV0dXJuIDc7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTT0ZUX0xJR0hUXCIpIHtcbiAgICByZXR1cm4gODtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkhBUkRfTElHSFRcIikge1xuICAgIHJldHVybiA5O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRElGRkVSRU5DRVwiKSB7XG4gICAgcmV0dXJuIDEwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRVhDTFVTSU9OXCIpIHtcbiAgICByZXR1cm4gMTE7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJIVUVcIikge1xuICAgIHJldHVybiAxMjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNBVFVSQVRJT05cIikge1xuICAgIHJldHVybiAxMztcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTE9SXCIpIHtcbiAgICByZXR1cm4gMTQ7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJMVU1JTk9TSVRZXCIpIHtcbiAgICByZXR1cm4gMTU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQpIHtcblxuICBsZXQgeFBvc2l0aW9uID0gMDtcbiAgbGV0IHlQb3NpdGlvbiA9IDA7XG4gIGlmIChwYXJlbnQueCkge1xuICAgIGlmIChjaGlsZC54ID4gcGFyZW50LngpIHtcbiAgICAgIHhQb3NpdGlvbiA9IE1hdGguYWJzKGNoaWxkLnggLSBwYXJlbnQueCk7XG4gICAgfVxuICAgIGlmIChjaGlsZC55ID4gcGFyZW50LnkpIHtcbiAgICAgIHlQb3NpdGlvbiA9IE1hdGguYWJzKGNoaWxkLnkgLSBwYXJlbnQueSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHhQb3NpdGlvbiA9IGNoaWxkLng7XG4gICAgeVBvc2l0aW9uID0gY2hpbGQueTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogeFBvc2l0aW9uLFxuICAgIHk6IHlQb3NpdGlvblxuICB9XG59O1xuIiwiY29uc3QgYmxlbmRNb2RlID0gcmVxdWlyZSgnLi9ibGVuZE1vZGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInN0eWxlXCIsXG4gICAgXCJlbmRNYXJrZXJUeXBlXCI6IDAsXG4gICAgXCJtaXRlckxpbWl0XCI6IDEwLFxuICAgIFwic3RhcnRNYXJrZXJUeXBlXCI6IDAsXG4gICAgXCJ3aW5kaW5nUnVsZVwiOiAwLCAvLyBOT05aRVJPXG4gIH07XG5cbiAgaWYgKGRhdGEuYmxlbmRNb2RlKSB7XG4gICAgc3R5bGUuY29udGV4dFNldHRpbmdzID0ge1xuICAgICAgXCJfY2xhc3NcIjogXCJncmFwaGljc0NvbnRleHRTZXR0aW5nc1wiLFxuICAgICAgXCJibGVuZE1vZGVcIjogYmxlbmRNb2RlKGRhdGEuYmxlbmRNb2RlKVxuICAgIH1cblxuICAgIGlmIChkYXRhLm9wYWNpdHkpIHtcbiAgICAgIHN0eWxlLmNvbnRleHRTZXR0aW5ncy5vcGFjaXR5ID0gZGF0YS5vcGFjaXR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5jb250ZXh0U2V0dGluZ3Mub3BhY2l0eSA9IDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5zdHJva2VzKSAmJiBkYXRhLnN0cm9rZXMubGVuZ3RoKSB7XG4gICAgbGV0IG5ld0JvcmRlcnMgPSBbXTtcbiAgICBkYXRhLnN0cm9rZXMuZm9yRWFjaChmdW5jdGlvbihib3JkZXIpIHtcblxuICAgICAgLy8gQ29udmVydCB0aGUgcG9zaXRpb24gLSBpbnNpZGUsIGNlbnRlciwgb3V0c2lkZVxuICAgICAgbGV0IHBvc2l0aW9uID0gJyc7XG4gICAgICBpZiAoZGF0YS5zdHJva2VBbGlnbiA9PT0gJ0lOU0lERScpIHtcbiAgICAgICAgcG9zaXRpb24gPSAgMTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdHJva2VBbGlnbiA9PT0gJ09VVFNJREUnKSB7XG4gICAgICAgIHBvc2l0aW9uID0gIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvbiA9ICAwO1xuICAgICAgfVxuXG4gICAgICBsZXQgY29sb3IgPSAnJztcbiAgICAgIGlmIChib3JkZXIudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICBjb2xvciA9IHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgICAgXCJhbHBoYVwiOiBib3JkZXIub3BhY2l0eSxcbiAgICAgICAgICBcImJsdWVcIjogYm9yZGVyLmNvbG9yLmIsXG4gICAgICAgICAgXCJncmVlblwiOiBib3JkZXIuY29sb3IuZyxcbiAgICAgICAgICBcInJlZFwiOiBib3JkZXIuY29sb3IuclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBncmFkaWVudCA9ICcnO1xuICAgICAgaWYgKGJvcmRlci50eXBlID09PSAnR1JBRElFTlRfTElORUFSJykge1xuICAgICAgICAvLyBUT0RPOiBBZGQgc3VwcG9ydCBmb3IgR3JhZGllbnRzXG4gICAgICB9XG5cbiAgICAgIG5ld0JvcmRlcnMucHVzaCh7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiYm9yZGVyXCIsXG4gICAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICAgIFwiY29sb3JcIjogY29sb3IsXG4gICAgICAgIFwiZmlsbFR5cGVcIjogMCxcbiAgICAgICAgXCJwb3NpdGlvblwiOiBwb3NpdGlvbixcbiAgICAgICAgXCJ0aGlja25lc3NcIjogZGF0YS5zdHJva2VXZWlnaHRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc3R5bGUuYm9yZGVycyA9IG5ld0JvcmRlcnM7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmZpbGxzKSAmJiBkYXRhLmZpbGxzLmxlbmd0aCkge1xuICAgIGxldCBuZXdGaWxscyA9IFtdO1xuICAgIGRhdGEuZmlsbHMuZm9yRWFjaChmdW5jdGlvbihmaWxsKSB7XG4gICAgICBpZiAoZmlsbC50eXBlID09PSAnSU1BR0UnKSB7XG4gICAgICAgIG5ld0ZpbGxzLnB1c2goe1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiZmlsbFwiLFxuICAgICAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICAgICAgXCJmaWxsVHlwZVwiOiA0LFxuICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgXCJfY2xhc3NcIjogXCJNU0pTT05GaWxlUmVmZXJlbmNlXCIsXG4gICAgICAgICAgICBcIl9yZWZfY2xhc3NcIjogXCJNU0ltYWdlRGF0YVwiLFxuICAgICAgICAgICAgXCJfcmVmXCI6IGBpbWFnZXNcXC8ke2ZpbGwuaW1hZ2VSZWZ9LnBuZ2BcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibm9pc2VJbmRleFwiOiAwLFxuICAgICAgICAgIFwibm9pc2VJbnRlbnNpdHlcIjogMCxcbiAgICAgICAgICBcInBhdHRlcm5GaWxsVHlwZVwiOiAxLFxuICAgICAgICAgIFwicGF0dGVyblRpbGVTY2FsZVwiOiAxXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgbmV3RmlsbHMucHVzaCh7XG4gICAgICAgICAgXCJfY2xhc3NcIjogXCJmaWxsXCIsXG4gICAgICAgICAgXCJpc0VuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgIFwiYWxwaGFcIjogZmlsbC5vcGFjaXR5LFxuICAgICAgICAgICAgXCJibHVlXCI6IGZpbGwuY29sb3IuYixcbiAgICAgICAgICAgIFwiZ3JlZW5cIjogZmlsbC5jb2xvci5nLFxuICAgICAgICAgICAgXCJyZWRcIjogZmlsbC5jb2xvci5yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImZpbGxUeXBlXCI6IDAsXG4gICAgICAgICAgXCJub2lzZUluZGV4XCI6IDAsXG4gICAgICAgICAgXCJub2lzZUludGVuc2l0eVwiOiAwLFxuICAgICAgICAgIFwicGF0dGVybkZpbGxUeXBlXCI6IDEsXG4gICAgICAgICAgXCJwYXR0ZXJuVGlsZVNjYWxlXCI6IDFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdHlsZS5maWxscyA9IG5ld0ZpbGxzO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFwiUEFHRVwiKSB7XG4gICAgcmV0dXJuIFwicGFnZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgIHJldHVybiBcImFydGJvYXJkXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJHUk9VUFwiKSB7XG4gICAgcmV0dXJuIFwiZ3JvdXBcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTVBPTkVOVFwiKSB7XG4gICAgcmV0dXJuIFwic3ltYm9sTWFzdGVyXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgcmV0dXJuIFwic3ltYm9sSW5zdGFuY2VcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlJFQ1RBTkdMRVwiKSB7XG4gICAgcmV0dXJuIFwicmVjdGFuZ2xlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJFTExJUFNFXCIpIHtcbiAgICByZXR1cm4gXCJvdmFsXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJSRUdVTEFSX1BPTFlHT05cIikge1xuICAgIHJldHVybiBcInRyaWFuZ2xlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJWRUNUT1JcIikge1xuICAgIHJldHVybiBcInNoYXBlUGF0aFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgcmV0dXJuIFwidGV4dFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0LmVkaXRlZCA9IGZhbHNlO1xuICByZXN1bHQuaXNDbG9zZWQgPSB0cnVlO1xuICByZXN1bHQucG9pbnRSYWRpdXNCZWhhdmlvdXIgPSAxO1xuICByZXN1bHQucG9pbnRzID0gW3tcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAuNzc2MTQyMzc0OTAwMDAwMDQsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MC4yMjM4NTc2MjUxMDAwMDAwMSwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MC41LCAxfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDAuMjIzODU3NjI1MTAwMDAwMDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMC43NzYxNDIzNzQ5MDAwMDAwNH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMC41fVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAuMjIzODU3NjI1MTAwMDAwMDEsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MC43NzYxNDIzNzQ5MDAwMDAwNCwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MC41LCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDAuNzc2MTQyMzc0OTAwMDAwMDR9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMC4yMjM4NTc2MjUxMDAwMDAwMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMC41fVwiXG4gIH1dXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0LmVkaXRlZCA9IGZhbHNlO1xuICByZXN1bHQuaXNDbG9zZWQgPSB0cnVlO1xuICByZXN1bHQucG9pbnRSYWRpdXNCZWhhdmlvdXIgPSAxO1xuICByZXN1bHQucG9pbnRzID0gW3tcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInsxLCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInsxLCAxfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLCAxfVwiXG4gIH1dXG4gIHJlc3VsdC5maXhlZFJhZGl1cyA9IDA7XG4gIHJlc3VsdC5oYXNDb252ZXJ0ZWRUb05ld1JvdW5kQ29ybmVycyA9IHRydWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0LmVkaXRlZCA9IGZhbHNlO1xuICByZXN1bHQuaXNDbG9zZWQgPSB0cnVlO1xuICByZXN1bHQucG9pbnRSYWRpdXNCZWhhdmlvdXIgPSAxO1xuICByZXN1bHQucG9pbnRzID0gW3tcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAuNSwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLjUsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MC41LCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInsxLCAxfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLCAxfVwiXG4gIH1dXG4gIHJlc3VsdC5pc0VxdWlsYXRlcmFsID0gZmFsc2U7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgY29uc3QgbmV3UGF0aCA9IFtdO1xuICBjb25zdCBvYmpXaWR0aCA9IGRhdGEud2lkdGg7XG4gIGNvbnN0IG9iakhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICBsZXQgc2VnbWVudHMgPSBkYXRhLnZlY3Rvck5ldHdvcmsuc2VnbWVudHM7XG4gIGxldCB2ZXJ0aWNlcyA9IGRhdGEudmVjdG9yTmV0d29yay52ZXJ0aWNlcztcblxuICBpZih2ZXJ0aWNlcy5sZW5ndGggIT09IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgIHZlcnRpY2VzID0gdmVydGljZXMuc2xpY2UoMCx2ZXJ0aWNlcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHZlcnRpY2VzLm1hcCgodmVydGljZSwga2V5KSA9PiB7XG4gICAgY29uc3Qgc2VnbWVudCA9IGRhdGEudmVjdG9yTmV0d29yay5zZWdtZW50c1trZXldO1xuICAgIGNvbnN0IHRoaW5nID0gZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzLmZpbmQoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5zdGFydCA9PT0ga2V5O1xuICAgIH0pO1xuXG4gICAgbGV0IGJvb20gPSB7XG4gICAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgICBcInBvaW50XCI6IGB7JHt2ZXJ0aWNlLngvb2JqV2lkdGh9LCAke3ZlcnRpY2UueS9vYmpIZWlnaHR9fWBcbiAgICB9XG5cbiAgICAvLyBUaGUgZmlyc3QgY3VydmVQb2ludCB3aWxsIGhhdmUgdGhlIGN1cnZlVG8gZnJvbSB0aGUgbGFzdCB2ZXJ0aWNlXG4gICAgaWYgKGtleSA9PT0gMCkge1xuICAgICAgY29uc3QgY3VydmVGcm9tID0gdGhpbmcudGFuZ2VudFN0YXJ0O1xuICAgICAgY29uc3QgY3VydmVUbyA9IGRhdGEudmVjdG9yTmV0d29yay5zZWdtZW50c1tkYXRhLnZlY3Rvck5ldHdvcmsuc2VnbWVudHMubGVuZ3RoIC0gMV0udGFuZ2VudEVuZDtcbiAgICAgIGJvb20uY3VydmVGcm9tID0gYHskeyh2ZXJ0aWNlLnggKyB0aGluZy50YW5nZW50U3RhcnQueCkvb2JqV2lkdGh9LCAkeyh2ZXJ0aWNlLnkgKyB0aGluZy50YW5nZW50U3RhcnQueSkvb2JqSGVpZ2h0fX1gO1xuICAgICAgYm9vbS5jdXJ2ZVRvID0gYHskeyh2ZXJ0aWNlLnggKyBjdXJ2ZVRvLngpL29ialdpZHRofSwgJHsodmVydGljZS55ICsgY3VydmVUby55KS9vYmpIZWlnaHR9fWA7XG5cbiAgICAgIGlmIChjdXJ2ZUZyb20ueCA9PT0gMCAmJiBjdXJ2ZUZyb20ueSA9PT0gMCkge1xuICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VydmVUby54ID09PSAwICYmIGN1cnZlVG8ueSA9PT0gMCkge1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnZlRnJvbSA9IHRoaW5nLnRhbmdlbnRTdGFydDtcbiAgICAgIGNvbnN0IGN1cnZlVG8gPSBkYXRhLnZlY3Rvck5ldHdvcmsuc2VnbWVudHNba2V5IC0gMV0udGFuZ2VudEVuZDtcbiAgICAgIGJvb20uY3VydmVGcm9tID0gYHskeyh2ZXJ0aWNlLnggKyB0aGluZy50YW5nZW50U3RhcnQueCkvb2JqV2lkdGh9LCAkeyh2ZXJ0aWNlLnkgKyB0aGluZy50YW5nZW50U3RhcnQueSkvb2JqSGVpZ2h0fX1gO1xuICAgICAgYm9vbS5jdXJ2ZVRvID0gYHskeyh2ZXJ0aWNlLnggKyBjdXJ2ZVRvLngpL29ialdpZHRofSwgJHsodmVydGljZS55ICsgY3VydmVUby55KS9vYmpIZWlnaHR9fWA7XG5cbiAgICAgIGlmIChjdXJ2ZUZyb20ueCA9PT0gMCAmJiBjdXJ2ZUZyb20ueSA9PT0gMCkge1xuICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VydmVUby54ID09PSAwICYmIGN1cnZlVG8ueSA9PT0gMCkge1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3UGF0aC5wdXNoKGJvb20pO1xuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZyhuZXdQYXRoKTtcblxuICByZXN1bHQuZWRpdGVkID0gdHJ1ZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IG5ld1BhdGg7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBcIkxFRlRcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiQ0VOVEVSXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIlJJR0hUXCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gXCJVUFBFUlwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IFwiVE9QXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIkNFTlRFUlwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJCT1RUT01cIikge1xuICAgIHJldHVybiAyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJjb25zdCB0ZXh0QWxpZ25lbWVudCA9IHJlcXVpcmUoJy4vX2hvcml6b250YWxBbGlnbmVtZW50Jyk7XG5jb25zdCB0ZXh0VmVydGljYWxBbGlnbmVtZW50ID0gcmVxdWlyZSgnLi9fdmVydGljYWxBbGlnbmVtZW50Jyk7XG5jb25zdCB0ZXh0Q2FzZSA9IHJlcXVpcmUoJy4vX3RleHRDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICBjb25zdCBjb2xvciA9IHt9O1xuICBmb3IgKGxldCBpIGluIGRhdGEuZmlsbHMpIHtcbiAgICBpZihkYXRhLmZpbGxzW2ldLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgIGNvbG9yLmEgPSBkYXRhLmZpbGxzW2ldLm9wYWNpdHk7XG4gICAgICBjb2xvci5iID0gZGF0YS5maWxsc1tpXS5jb2xvci5iO1xuICAgICAgY29sb3IuZyA9IGRhdGEuZmlsbHNbaV0uY29sb3IuZztcbiAgICAgIGNvbG9yLnIgPSBkYXRhLmZpbGxzW2ldLmNvbG9yLnI7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5zdHlsZS50ZXh0U3R5bGUgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJ0ZXh0U3R5bGVcIixcbiAgICBcImVuY29kZWRBdHRyaWJ1dGVzXCI6IHtcbiAgICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nQ29sb3JBdHRyaWJ1dGVcIjoge1xuICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgIFwiYWxwaGFcIjogY29sb3IuYSxcbiAgICAgICAgXCJibHVlXCI6IGNvbG9yLmIsXG4gICAgICAgIFwiZ3JlZW5cIjogY29sb3IuZyxcbiAgICAgICAgXCJyZWRcIjogY29sb3IuclxuICAgICAgfSxcbiAgICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nRm9udEF0dHJpYnV0ZVwiOiB7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiVUlGb250RGVzY3JpcHRvclwiLFxuICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgIFwibmFtZVwiOiB0eXBlb2YgZGF0YS5mb250TmFtZSAhPT0gXCJzeW1ib2xcIiA/IGRhdGEuZm9udE5hbWUuZmFtaWx5IDogJycsXG4gICAgICAgICAgXCJzaXplXCI6IHR5cGVvZiBkYXRhLmZvbnRTaXplICE9PSBcInN5bWJvbFwiID8gZGF0YS5mb250U2l6ZSA6IDE1XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRleHRTdHlsZVZlcnRpY2FsQWxpZ25tZW50S2V5XCI6IDAsXG4gICAgICBcInBhcmFncmFwaFN0eWxlXCI6IHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJwYXJhZ3JhcGhTdHlsZVwiLFxuICAgICAgICBcIm1heGltdW1MaW5lSGVpZ2h0XCI6IGRhdGEubGluZUhlaWdodC52YWx1ZSxcbiAgICAgICAgXCJtaW5pbXVtTGluZUhlaWdodFwiOiBkYXRhLmxpbmVIZWlnaHQudmFsdWUsXG4gICAgICAgIFwiYWxpZ25tZW50XCI6IHRleHRBbGlnbmVtZW50KGRhdGEudGV4dEFsaWduSG9yaXpvbnRhbClcbiAgICAgIH0sXG4gICAgICBcImtlcm5pbmdcIjogZGF0YS5sZXR0ZXJTcGFjaW5nLnZhbHVlXG4gICAgfSxcbiAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IHRleHRWZXJ0aWNhbEFsaWduZW1lbnQoZGF0YS50ZXh0QWxpZ25WZXJ0aWNhbClcbiAgfTtcbiAgcmVzdWx0LmF0dHJpYnV0ZWRTdHJpbmcgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJhdHRyaWJ1dGVkU3RyaW5nXCIsXG4gICAgXCJzdHJpbmdcIjogZGF0YS5jaGFyYWN0ZXJzLFxuICAgIFwiYXR0cmlidXRlc1wiOiBbe1xuICAgICAgXCJfY2xhc3NcIjogXCJzdHJpbmdBdHRyaWJ1dGVcIixcbiAgICAgIFwibG9jYXRpb25cIjogMCxcbiAgICAgIFwibGVuZ3RoXCI6IGRhdGEuY2hhcmFjdGVycy5sZW5ndGgsXG4gICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0ZvbnRBdHRyaWJ1dGVcIjoge1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiVUlGb250RGVzY3JpcHRvclwiLFxuICAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogdHlwZW9mIGRhdGEuZm9udE5hbWUgIT09IFwic3ltYm9sXCIgPyBkYXRhLmZvbnROYW1lLmZhbWlseSA6ICcnLFxuICAgICAgICAgICAgXCJzaXplXCI6IHR5cGVvZiBkYXRhLmZvbnRTaXplICE9PSBcInN5bWJvbFwiID8gZGF0YS5mb250U2l6ZSA6IDE1XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0NvbG9yQXR0cmlidXRlXCI6IHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgICAgXCJhbHBoYVwiOiBjb2xvci5hLFxuICAgICAgICAgIFwiYmx1ZVwiOiBjb2xvci5iLFxuICAgICAgICAgIFwiZ3JlZW5cIjogY29sb3IuZyxcbiAgICAgICAgICBcInJlZFwiOiBjb2xvci5yXG4gICAgICAgIH0sXG4gICAgICAgIFwicGFyYWdyYXBoU3R5bGVcIjoge1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwicGFyYWdyYXBoU3R5bGVcIixcbiAgICAgICAgICBcImFsaWdubWVudFwiOiB0ZXh0QWxpZ25lbWVudChkYXRhLnRleHRBbGlnbkhvcml6b250YWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XVxuICB9O1xuXG4gIGlmIChkYXRhLnRleHRDYXNlKSB7XG4gICAgcmVzdWx0LnN0eWxlLnRleHRTdHlsZS5lbmNvZGVkQXR0cmlidXRlcy5NU0F0dHJpYnV0ZWRTdHJpbmdUZXh0VHJhbnNmb3JtQXR0cmlidXRlID0gMTtcbiAgICByZXN1bHQuYXR0cmlidXRlZFN0cmluZy5hdHRyaWJ1dGVzWzBdLmF0dHJpYnV0ZXMuTVNBdHRyaWJ1dGVkU3RyaW5nVGV4dFRyYW5zZm9ybUF0dHJpYnV0ZSA9IHRleHRDYXNlKGRhdGEudGV4dENhc2UpO1xuICB9XG5cbiAgcmVzdWx0LmF1dG9tYXRpY2FsbHlEcmF3T25VbmRlcmx5aW5nUGF0aCA9IGZhbHNlO1xuICByZXN1bHQuZG9udFN5bmNocm9uaXNlV2l0aFN5bWJvbCA9IGZhbHNlO1xuICByZXN1bHQuZ2x5cGhCb3VuZHMgPSBcInt7MCwgNH0sIHszOCwgOH19XCI7XG4gIHJlc3VsdC5saW5lU3BhY2luZ0JlaGF2aW91ciA9IDI7XG4gIHJlc3VsdC50ZXh0QmVoYXZpb3VyID0gMjtcbn1cbiIsImNvbnN0IHR5cGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvdHlwZScpO1xuY29uc3Qgc2V0U3R5bGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3R5bGUnKTtcbmNvbnN0IHBvc2l0aW9uID0gcmVxdWlyZSgnLi9oZWxwZXJzL3Bvc2l0aW9uJyk7XG5jb25zdCBjYW52YXMgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvY2FudmFzJyk7XG5jb25zdCBmcmFtZSA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9mcmFtZScpO1xuY29uc3QgZ3JvdXAgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvZ3JvdXAnKTtcbmNvbnN0IGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9jb21wb25lbnQnKTtcbmNvbnN0IGluc3RhbmNlID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2luc3RhbmNlJyk7XG5jb25zdCByZWN0YW5nbGUgPSByZXF1aXJlKCcuL3NoYXBlcy9yZWN0YW5nbGUnKTtcbmNvbnN0IHRyaWFuZ2xlID0gcmVxdWlyZSgnLi9zaGFwZXMvdHJpYW5nbGUnKTtcbmNvbnN0IGVsbGlwc2UgPSByZXF1aXJlKCcuL3NoYXBlcy9lbGxpcHNlJyk7XG5jb25zdCB2ZWN0b3IgPSByZXF1aXJlKCcuL3NoYXBlcy92ZWN0b3InKTtcbmNvbnN0IHRleHQgPSByZXF1aXJlKCcuL3RleHQvaW5kZXgnKTtcblxuY29uc3QgdHJhbnNmb3JtID0gKGRhdGEsIHBhcmVudCA9IHt9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBfY2xhc3M6IHR5cGUoZGF0YS50eXBlKSxcbiAgICBkb19vYmplY3RJRDogZGF0YS5pZCxcbiAgICBib29sZWFuT3BlcmF0aW9uOiAtMSxcbiAgICBleHBvcnRPcHRpb25zOiB7XG4gICAgICBfY2xhc3M6ICdleHBvcnRPcHRpb25zJyxcbiAgICAgIGV4cG9ydEZvcm1hdHM6IFtdLFxuICAgICAgaW5jbHVkZWRMYXllcklkczogW10sXG4gICAgICBsYXllck9wdGlvbnM6IDAsXG4gICAgICBzaG91bGRUcmltOiBmYWxzZSxcbiAgICB9LFxuICAgIGZyYW1lOiB7XG4gICAgICBfY2xhc3M6ICdyZWN0JyxcbiAgICAgIGNvbnN0cmFpblByb3BvcnRpb25zOiBmYWxzZSxcbiAgICB9LFxuICAgIGlzRml4ZWRUb1ZpZXdwb3J0OiBmYWxzZSxcbiAgICBpc0ZsaXBwZWRIb3Jpem9udGFsOiBmYWxzZSxcbiAgICBpc0ZsaXBwZWRWZXJ0aWNhbDogZmFsc2UsXG4gICAgaXNMb2NrZWQ6IGZhbHNlLFxuICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICBsYXllckxpc3RFeHBhbmRlZFR5cGU6IDAsXG4gICAgbmFtZTogZGF0YS5uYW1lLFxuICAgIG5hbWVJc0ZpeGVkOiBmYWxzZSxcbiAgICByZXNpemluZ0NvbnN0cmFpbnQ6IDYzLFxuICAgIHJlc2l6aW5nVHlwZTogMCxcbiAgICByb3RhdGlvbjogMCxcbiAgICBzaG91bGRCcmVha01hc2tDaGFpbjogZmFsc2UsXG4gICAgY2xpcHBpbmdNYXNrTW9kZTogMCxcbiAgICBoYXNDbGlwcGluZ01hc2s6IGZhbHNlLFxuICAgIHN0eWxlOiBzZXRTdHlsZShkYXRhKSxcbiAgfTtcblxuICBpZiAoZGF0YS50eXBlICE9PSAnUEFHRScpIHtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uKHBhcmVudCwgZGF0YSk7XG4gICAgcmVzdWx0LmZyYW1lLnggPSBkYXRhLng7XG4gICAgcmVzdWx0LmZyYW1lLnkgPSBkYXRhLnk7XG4gICAgcmVzdWx0LmZyYW1lLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgIHJlc3VsdC5mcmFtZS53aWR0aCA9IGRhdGEud2lkdGg7XG4gIH1cblxuICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgIHJlc3VsdC5sYXllcnMgPSBkYXRhLmNoaWxkcmVuLm1hcChjaGlsZCA9PiB0cmFuc2Zvcm0oY2hpbGQsIGRhdGEpKTtcbiAgfVxuXG4gIHN3aXRjaCAoZGF0YS50eXBlKSB7XG4gICAgY2FzZSAnUEFHRSc6XG4gICAgICBjYW52YXMoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0ZSQU1FJzpcbiAgICAgIGZyYW1lKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdHUk9VUCc6XG4gICAgICBncm91cChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ09NUE9ORU5UJzpcbiAgICAgIGNvbXBvbmVudChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnSU5TVEFOQ0UnOlxuICAgICAgaW5zdGFuY2UoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1JFQ1RBTkdMRSc6XG4gICAgICByZWN0YW5nbGUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VMTElQU0UnOlxuICAgICAgZWxsaXBzZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUkVHVUxBUl9QT0xZR09OJzpcbiAgICAgIHRyaWFuZ2xlKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdWRUNUT1InOlxuICAgICAgdmVjdG9yKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdURVhUJzpcbiAgICAgIHRleHQoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==