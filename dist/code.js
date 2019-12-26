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
  console.log(data);
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
          "name": typeof data.fontName !== "symbol" ? `${data.fontName.family.replace(/\s+/g, '')}-${data.fontName.style}` : 'Arial',
          "size": typeof data.fontSize !== "symbol" ? data.fontSize : 15
        }
      },
      "MSAttributedStringTextTransformAttribute": 1,
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
            "name": typeof data.fontName !== "symbol" ? `${data.fontName.family.replace(/\s+/g, '')}-${data.fontName.style}` : 'Arial',
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
        "MSAttributedStringTextTransformAttribute": textCase(data.textCase),
        "paragraphStyle": {
          "_class": "paragraphStyle",
          "alignment": textAlignement(data.textAlignHorizontal)
        }
      }
    }]
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL2JsZW5kTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL2VsbGlwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL3RyaWFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvX2hvcml6b250YWxBbGlnbmVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9fdGV4dENhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L192ZXJ0aWNhbEFsaWduZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUE2RDtBQUNYO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0RBQWE7QUFDMUI7QUFDQSx1REFBdUQsNkRBQVc7QUFDbEU7QUFDQSxzQkFBc0IsMERBQWU7QUFDckMsMEJBQTBCLDBCQUEwQjtBQUNwRCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBTztBQUNBOzs7Ozs7Ozs7Ozs7QUNEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUFpQjtBQUN4QyxhQUFhLG1CQUFPLENBQUMsbURBQWM7O0FBRW5DLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsImltcG9ydCB7IENPTlZFUlRfUEFHRVMsIFBBR0VTX0NPTlZFUlRFRCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB0cmFuc2Zvcm1lciBmcm9tICcuL2NvbnZlcnRlci90cmFuc2Zvcm1lcic7XG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkub25tZXNzYWdlID0gbWVzc2FnZSA9PiB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDT05WRVJUX1BBR0VTOlxuICAgICAgICAgICAgY29uc3QgZmlnbWFQYWdlcyA9IGZpZ21hLnJvb3QuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBza2V0Y2hQYWdlcyA9IGZpZ21hUGFnZXMubWFwKHBhZ2UgPT4gdHJhbnNmb3JtZXIocGFnZSkpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFBBR0VTX0NPTlZFUlRFRCxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7IGZpZ21hUGFnZXMsIHNrZXRjaFBhZ2VzIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBDT05WRVJUX1BBR0VTID0gJ0NPVkVSVF9QQUdFUyc7XG5leHBvcnQgY29uc3QgUEFHRVNfQ09OVkVSVEVEID0gJ1BBR0VTX0NPTlZFUlRFRCc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmdyb3VwTGF5b3V0ID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiTVNJbW11dGFibGVGcmVlZm9ybUdyb3VwTGF5b3V0XCJcbiAgfTtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IHRydWU7XG4gIHJlc3VsdC5ob3Jpem9udGFsUnVsZXJEYXRhID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicnVsZXJEYXRhXCIsXG4gICAgXCJiYXNlXCI6IC0zMzYsXG4gICAgXCJndWlkZXNcIjogW11cbiAgfTtcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZTtcbiAgcmVzdWx0LnZlcnRpY2FsUnVsZXJEYXRhID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicnVsZXJEYXRhXCIsXG4gICAgXCJiYXNlXCI6IC0zMDYsXG4gICAgXCJndWlkZXNcIjogW11cbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gdHJ1ZTtcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZTtcblxuICAvLyBOZWVkIHRvIGFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBiYWNrZ3JvdW5kc1xuICAvLyBOZWVkIHN1cHBvcnQgZm9yIG90aGVyIHR5cGVzIG9mIGJhY2tncm91bmRzXG4gIGlmKGRhdGEuYmFja2dyb3VuZHMubGVuZ3RoID49IDEpIHtcbiAgICBpZihkYXRhLmJhY2tncm91bmRzWzBdLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IgPSB7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgXCJhbHBoYVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLm9wYWNpdHksXG4gICAgICAgIFwiYmx1ZVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLmIsXG4gICAgICAgIFwiZ3JlZW5cIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5nLFxuICAgICAgICBcInJlZFwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJlc3VsdC5oYXNCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xuICByZXN1bHQuaW5jbHVkZUJhY2tncm91bmRDb2xvckluSW5zdGFuY2UgPSB0cnVlO1xuICByZXN1bHQuc3ltYm9sSUQgPSBkYXRhLmlkO1xuICByZXN1bHQuY2hhbmdlSWRlbnRpZmllciA9IDY7XG4gIHJlc3VsdC5vdmVycmlkZVByb3BlcnRpZXMgPSBbXTtcbiAgcmVzdWx0LmFsbG93c092ZXJyaWRlcyA9IHRydWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IHRydWU7XG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWU7XG5cbiAgLy8gTmVlZCB0byBhZGQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgYmFja2dyb3VuZHNcbiAgLy8gTmVlZCBzdXBwb3J0IGZvciBvdGhlciB0eXBlcyBvZiBiYWNrZ3JvdW5kc1xuICBpZihkYXRhLmJhY2tncm91bmRzLmxlbmd0aCA+PSAxKSB7XG4gICAgaWYoZGF0YS5iYWNrZ3JvdW5kc1swXS50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICByZXN1bHQuYmFja2dyb3VuZENvbG9yID0ge1xuICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgIFwiYWxwaGFcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5vcGFjaXR5LFxuICAgICAgICBcImJsdWVcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5iLFxuICAgICAgICBcImdyZWVuXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuZyxcbiAgICAgICAgXCJyZWRcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5yXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXN1bHQuaGFzQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gZmFsc2U7XG4gIHJlc3VsdC5ncm91cExheW91dCA9IHtcbiAgICBcIl9jbGFzc1wiOiBcIk1TSW1tdXRhYmxlRnJlZWZvcm1Hcm91cExheW91dFwiXG4gIH1cbiAgcmVzdWx0Lmhvcml6b250YWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMzNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9LFxuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlLFxuICByZXN1bHQudmVydGljYWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMwNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhvcml6b250YWxTcGFjaW5nID0gMDtcbiAgcmVzdWx0Lm92ZXJyaWRlVmFsdWVzID0gW107XG4gIHJlc3VsdC5zY2FsZSA9IDE7XG4gIHJlc3VsdC5zeW1ib2xJRCA9IGRhdGEuY29tcG9uZW50SWQ7XG4gIHJlc3VsdC52ZXJ0aWNhbFNwYWNpbmcgPSAwO1xuXG4gIGNvbnN0IG92ZXJyaWRlcyA9IFtdO1xuXG4gIGRhdGEuY2hpbGRyZW4ubWFwKChvdmVycmlkZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1JZCA9IG92ZXJyaWRlLmlkLnNwbGl0KFwiO1wiKTtcblxuICAgIGlmKG92ZXJyaWRlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgb3ZlcnJpZGVzLnB1c2goe1xuICAgICAgICBcIl9jbGFzc1wiOiBcIm92ZXJyaWRlVmFsdWVcIixcbiAgICAgICAgXCJkb19vYmplY3RJRFwiOiBlbGVtSWRbMF0sXG4gICAgICAgIFwib3ZlcnJpZGVOYW1lXCI6IGAke2VsZW1JZFsxXX1fc3RyaW5nVmFsdWVgLFxuICAgICAgICBcInZhbHVlXCI6IG92ZXJyaWRlLmNoYXJhY3RlcnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVzdWx0Lm92ZXJyaWRlVmFsdWVzID0gb3ZlcnJpZGVzO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodHlwZSA9PT0gXCJQQVNTX1RIUk9VR0hcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTk9STUFMXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkRBUktFTlwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJNVUxUSVBMWVwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT0xPUl9CVVJOXCIpIHtcbiAgICByZXR1cm4gMztcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkxJR0hURU5cIikge1xuICAgIHJldHVybiA0O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU0NSRUVOXCIpIHtcbiAgICByZXR1cm4gNTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTE9SX0RPREdFXCIpIHtcbiAgICByZXR1cm4gNjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIk9WRVJMQVlcIikge1xuICAgIHJldHVybiA3O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU09GVF9MSUdIVFwiKSB7XG4gICAgcmV0dXJuIDg7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJIQVJEX0xJR0hUXCIpIHtcbiAgICByZXR1cm4gOTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkRJRkZFUkVOQ0VcIikge1xuICAgIHJldHVybiAxMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkVYQ0xVU0lPTlwiKSB7XG4gICAgcmV0dXJuIDExO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSFVFXCIpIHtcbiAgICByZXR1cm4gMTI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTQVRVUkFUSU9OXCIpIHtcbiAgICByZXR1cm4gMTM7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT0xPUlwiKSB7XG4gICAgcmV0dXJuIDE0O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTFVNSU5PU0lUWVwiKSB7XG4gICAgcmV0dXJuIDE1O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkKSB7XG5cbiAgbGV0IHhQb3NpdGlvbiA9IDA7XG4gIGxldCB5UG9zaXRpb24gPSAwO1xuICBpZiAocGFyZW50LngpIHtcbiAgICBpZiAoY2hpbGQueCA+IHBhcmVudC54KSB7XG4gICAgICB4UG9zaXRpb24gPSBNYXRoLmFicyhjaGlsZC54IC0gcGFyZW50LngpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQueSA+IHBhcmVudC55KSB7XG4gICAgICB5UG9zaXRpb24gPSBNYXRoLmFicyhjaGlsZC55IC0gcGFyZW50LnkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB4UG9zaXRpb24gPSBjaGlsZC54O1xuICAgIHlQb3NpdGlvbiA9IGNoaWxkLnk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHhQb3NpdGlvbixcbiAgICB5OiB5UG9zaXRpb25cbiAgfVxufTtcbiIsImNvbnN0IGJsZW5kTW9kZSA9IHJlcXVpcmUoJy4vYmxlbmRNb2RlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJzdHlsZVwiLFxuICAgIFwiZW5kTWFya2VyVHlwZVwiOiAwLFxuICAgIFwibWl0ZXJMaW1pdFwiOiAxMCxcbiAgICBcInN0YXJ0TWFya2VyVHlwZVwiOiAwLFxuICAgIFwid2luZGluZ1J1bGVcIjogMCwgLy8gTk9OWkVST1xuICB9O1xuXG4gIGlmIChkYXRhLmJsZW5kTW9kZSkge1xuICAgIHN0eWxlLmNvbnRleHRTZXR0aW5ncyA9IHtcbiAgICAgIFwiX2NsYXNzXCI6IFwiZ3JhcGhpY3NDb250ZXh0U2V0dGluZ3NcIixcbiAgICAgIFwiYmxlbmRNb2RlXCI6IGJsZW5kTW9kZShkYXRhLmJsZW5kTW9kZSlcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5vcGFjaXR5KSB7XG4gICAgICBzdHlsZS5jb250ZXh0U2V0dGluZ3Mub3BhY2l0eSA9IGRhdGEub3BhY2l0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuY29udGV4dFNldHRpbmdzLm9wYWNpdHkgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEuc3Ryb2tlcykgJiYgZGF0YS5zdHJva2VzLmxlbmd0aCkge1xuICAgIGxldCBuZXdCb3JkZXJzID0gW107XG4gICAgZGF0YS5zdHJva2VzLmZvckVhY2goZnVuY3Rpb24oYm9yZGVyKSB7XG5cbiAgICAgIC8vIENvbnZlcnQgdGhlIHBvc2l0aW9uIC0gaW5zaWRlLCBjZW50ZXIsIG91dHNpZGVcbiAgICAgIGxldCBwb3NpdGlvbiA9ICcnO1xuICAgICAgaWYgKGRhdGEuc3Ryb2tlQWxpZ24gPT09ICdJTlNJREUnKSB7XG4gICAgICAgIHBvc2l0aW9uID0gIDE7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuc3Ryb2tlQWxpZ24gPT09ICdPVVRTSURFJykge1xuICAgICAgICBwb3NpdGlvbiA9ICAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24gPSAgMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbG9yID0gJyc7XG4gICAgICBpZiAoYm9yZGVyLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgY29sb3IgPSB7XG4gICAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICAgIFwiYWxwaGFcIjogYm9yZGVyLm9wYWNpdHksXG4gICAgICAgICAgXCJibHVlXCI6IGJvcmRlci5jb2xvci5iLFxuICAgICAgICAgIFwiZ3JlZW5cIjogYm9yZGVyLmNvbG9yLmcsXG4gICAgICAgICAgXCJyZWRcIjogYm9yZGVyLmNvbG9yLnJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZ3JhZGllbnQgPSAnJztcbiAgICAgIGlmIChib3JkZXIudHlwZSA9PT0gJ0dSQURJRU5UX0xJTkVBUicpIHtcbiAgICAgICAgLy8gVE9ETzogQWRkIHN1cHBvcnQgZm9yIEdyYWRpZW50c1xuICAgICAgfVxuXG4gICAgICBuZXdCb3JkZXJzLnB1c2goe1xuICAgICAgICBcIl9jbGFzc1wiOiBcImJvcmRlclwiLFxuICAgICAgICBcImlzRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICBcImNvbG9yXCI6IGNvbG9yLFxuICAgICAgICBcImZpbGxUeXBlXCI6IDAsXG4gICAgICAgIFwicG9zaXRpb25cIjogcG9zaXRpb24sXG4gICAgICAgIFwidGhpY2tuZXNzXCI6IGRhdGEuc3Ryb2tlV2VpZ2h0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHN0eWxlLmJvcmRlcnMgPSBuZXdCb3JkZXJzO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5maWxscykgJiYgZGF0YS5maWxscy5sZW5ndGgpIHtcbiAgICBsZXQgbmV3RmlsbHMgPSBbXTtcbiAgICBkYXRhLmZpbGxzLmZvckVhY2goZnVuY3Rpb24oZmlsbCkge1xuICAgICAgaWYgKGZpbGwudHlwZSA9PT0gJ0lNQUdFJykge1xuICAgICAgICBuZXdGaWxscy5wdXNoKHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcImZpbGxcIixcbiAgICAgICAgICBcImlzRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICAgIFwiZmlsbFR5cGVcIjogNCxcbiAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgIFwiX2NsYXNzXCI6IFwiTVNKU09ORmlsZVJlZmVyZW5jZVwiLFxuICAgICAgICAgICAgXCJfcmVmX2NsYXNzXCI6IFwiTVNJbWFnZURhdGFcIixcbiAgICAgICAgICAgIFwiX3JlZlwiOiBgaW1hZ2VzXFwvJHtmaWxsLmltYWdlUmVmfS5wbmdgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm5vaXNlSW5kZXhcIjogMCxcbiAgICAgICAgICBcIm5vaXNlSW50ZW5zaXR5XCI6IDAsXG4gICAgICAgICAgXCJwYXR0ZXJuRmlsbFR5cGVcIjogMSxcbiAgICAgICAgICBcInBhdHRlcm5UaWxlU2NhbGVcIjogMVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsbC50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICAgIG5ld0ZpbGxzLnB1c2goe1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiZmlsbFwiLFxuICAgICAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICBcImFscGhhXCI6IGZpbGwub3BhY2l0eSxcbiAgICAgICAgICAgIFwiYmx1ZVwiOiBmaWxsLmNvbG9yLmIsXG4gICAgICAgICAgICBcImdyZWVuXCI6IGZpbGwuY29sb3IuZyxcbiAgICAgICAgICAgIFwicmVkXCI6IGZpbGwuY29sb3IuclxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJmaWxsVHlwZVwiOiAwLFxuICAgICAgICAgIFwibm9pc2VJbmRleFwiOiAwLFxuICAgICAgICAgIFwibm9pc2VJbnRlbnNpdHlcIjogMCxcbiAgICAgICAgICBcInBhdHRlcm5GaWxsVHlwZVwiOiAxLFxuICAgICAgICAgIFwicGF0dGVyblRpbGVTY2FsZVwiOiAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3R5bGUuZmlsbHMgPSBuZXdGaWxscztcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0eXBlID09PSBcIlBBR0VcIikge1xuICAgIHJldHVybiBcInBhZ2VcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICByZXR1cm4gXCJhcnRib2FyZFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiR1JPVVBcIikge1xuICAgIHJldHVybiBcImdyb3VwXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT01QT05FTlRcIikge1xuICAgIHJldHVybiBcInN5bWJvbE1hc3RlclwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSU5TVEFOQ0VcIikge1xuICAgIHJldHVybiBcInN5bWJvbEluc3RhbmNlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJSRUNUQU5HTEVcIikge1xuICAgIHJldHVybiBcInJlY3RhbmdsZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRUxMSVBTRVwiKSB7XG4gICAgcmV0dXJuIFwib3ZhbFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiUkVHVUxBUl9QT0xZR09OXCIpIHtcbiAgICByZXR1cm4gXCJ0cmlhbmdsZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVkVDVE9SXCIpIHtcbiAgICByZXR1cm4gXCJzaGFwZVBhdGhcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlRFWFRcIikge1xuICAgIHJldHVybiBcInRleHRcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJcIlxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5lZGl0ZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IFt7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLjc3NjE0MjM3NDkwMDAwMDA0LCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAuMjIzODU3NjI1MTAwMDAwMDEsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezAuNSwgMX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAwLjIyMzg1NzYyNTEwMDAwMDAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDAuNzc2MTQyMzc0OTAwMDAwMDR9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDAuNX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLjIyMzg1NzYyNTEwMDAwMDAxLCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAuNzc2MTQyMzc0OTAwMDAwMDQsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezAuNSwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAwLjc3NjE0MjM3NDkwMDAwMDA0fVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDAuMjIzODU3NjI1MTAwMDAwMDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDAuNX1cIlxuICB9XVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5lZGl0ZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IFt7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMX1cIlxuICB9XVxuICByZXN1bHQuZml4ZWRSYWRpdXMgPSAwO1xuICByZXN1bHQuaGFzQ29udmVydGVkVG9OZXdSb3VuZENvcm5lcnMgPSB0cnVlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5lZGl0ZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IFt7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLjUsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MC41LCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAuNSwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMX1cIlxuICB9XVxuICByZXN1bHQuaXNFcXVpbGF0ZXJhbCA9IGZhbHNlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIGNvbnN0IG5ld1BhdGggPSBbXTtcbiAgY29uc3Qgb2JqV2lkdGggPSBkYXRhLndpZHRoO1xuICBjb25zdCBvYmpIZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgbGV0IHNlZ21lbnRzID0gZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzO1xuICBsZXQgdmVydGljZXMgPSBkYXRhLnZlY3Rvck5ldHdvcmsudmVydGljZXM7XG5cbiAgaWYodmVydGljZXMubGVuZ3RoICE9PSBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLnNsaWNlKDAsdmVydGljZXMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICB2ZXJ0aWNlcy5tYXAoKHZlcnRpY2UsIGtleSkgPT4ge1xuICAgIGNvbnN0IHNlZ21lbnQgPSBkYXRhLnZlY3Rvck5ldHdvcmsuc2VnbWVudHNba2V5XTtcbiAgICBjb25zdCB0aGluZyA9IGRhdGEudmVjdG9yTmV0d29yay5zZWdtZW50cy5maW5kKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uc3RhcnQgPT09IGtleTtcbiAgICB9KTtcblxuICAgIGxldCBib29tID0ge1xuICAgICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgICAgXCJwb2ludFwiOiBgeyR7dmVydGljZS54L29ialdpZHRofSwgJHt2ZXJ0aWNlLnkvb2JqSGVpZ2h0fX1gXG4gICAgfVxuXG4gICAgLy8gVGhlIGZpcnN0IGN1cnZlUG9pbnQgd2lsbCBoYXZlIHRoZSBjdXJ2ZVRvIGZyb20gdGhlIGxhc3QgdmVydGljZVxuICAgIGlmIChrZXkgPT09IDApIHtcbiAgICAgIGNvbnN0IGN1cnZlRnJvbSA9IHRoaW5nLnRhbmdlbnRTdGFydDtcbiAgICAgIGNvbnN0IGN1cnZlVG8gPSBkYXRhLnZlY3Rvck5ldHdvcmsuc2VnbWVudHNbZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzLmxlbmd0aCAtIDFdLnRhbmdlbnRFbmQ7XG4gICAgICBib29tLmN1cnZlRnJvbSA9IGB7JHsodmVydGljZS54ICsgdGhpbmcudGFuZ2VudFN0YXJ0LngpL29ialdpZHRofSwgJHsodmVydGljZS55ICsgdGhpbmcudGFuZ2VudFN0YXJ0LnkpL29iakhlaWdodH19YDtcbiAgICAgIGJvb20uY3VydmVUbyA9IGB7JHsodmVydGljZS54ICsgY3VydmVUby54KS9vYmpXaWR0aH0sICR7KHZlcnRpY2UueSArIGN1cnZlVG8ueSkvb2JqSGVpZ2h0fX1gO1xuXG4gICAgICBpZiAoY3VydmVGcm9tLnggPT09IDAgJiYgY3VydmVGcm9tLnkgPT09IDApIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnZlVG8ueCA9PT0gMCAmJiBjdXJ2ZVRvLnkgPT09IDApIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJ2ZUZyb20gPSB0aGluZy50YW5nZW50U3RhcnQ7XG4gICAgICBjb25zdCBjdXJ2ZVRvID0gZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzW2tleSAtIDFdLnRhbmdlbnRFbmQ7XG4gICAgICBib29tLmN1cnZlRnJvbSA9IGB7JHsodmVydGljZS54ICsgdGhpbmcudGFuZ2VudFN0YXJ0LngpL29ialdpZHRofSwgJHsodmVydGljZS55ICsgdGhpbmcudGFuZ2VudFN0YXJ0LnkpL29iakhlaWdodH19YDtcbiAgICAgIGJvb20uY3VydmVUbyA9IGB7JHsodmVydGljZS54ICsgY3VydmVUby54KS9vYmpXaWR0aH0sICR7KHZlcnRpY2UueSArIGN1cnZlVG8ueSkvb2JqSGVpZ2h0fX1gO1xuXG4gICAgICBpZiAoY3VydmVGcm9tLnggPT09IDAgJiYgY3VydmVGcm9tLnkgPT09IDApIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnZlVG8ueCA9PT0gMCAmJiBjdXJ2ZVRvLnkgPT09IDApIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1BhdGgucHVzaChib29tKTtcbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2cobmV3UGF0aCk7XG5cbiAgcmVzdWx0LmVkaXRlZCA9IHRydWU7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBuZXdQYXRoO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gXCJMRUZUXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIkNFTlRFUlwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJSSUdIVFwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IFwiVVBQRVJcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBcIlRPUFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJDRU5URVJcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiQk9UVE9NXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwiY29uc3QgdGV4dEFsaWduZW1lbnQgPSByZXF1aXJlKCcuL19ob3Jpem9udGFsQWxpZ25lbWVudCcpO1xuY29uc3QgdGV4dFZlcnRpY2FsQWxpZ25lbWVudCA9IHJlcXVpcmUoJy4vX3ZlcnRpY2FsQWxpZ25lbWVudCcpO1xuY29uc3QgdGV4dENhc2UgPSByZXF1aXJlKCcuL190ZXh0Q2FzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IGNvbG9yID0ge307XG4gIGZvciAobGV0IGkgaW4gZGF0YS5maWxscykge1xuICAgIGlmKGRhdGEuZmlsbHNbaV0udHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgY29sb3IuYSA9IGRhdGEuZmlsbHNbaV0ub3BhY2l0eTtcbiAgICAgIGNvbG9yLmIgPSBkYXRhLmZpbGxzW2ldLmNvbG9yLmI7XG4gICAgICBjb2xvci5nID0gZGF0YS5maWxsc1tpXS5jb2xvci5nO1xuICAgICAgY29sb3IuciA9IGRhdGEuZmlsbHNbaV0uY29sb3IucjtcbiAgICB9XG4gIH1cblxuICByZXN1bHQuc3R5bGUudGV4dFN0eWxlID0ge1xuICAgIFwiX2NsYXNzXCI6IFwidGV4dFN0eWxlXCIsXG4gICAgXCJlbmNvZGVkQXR0cmlidXRlc1wiOiB7XG4gICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0NvbG9yQXR0cmlidXRlXCI6IHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICBcImFscGhhXCI6IGNvbG9yLmEsXG4gICAgICAgIFwiYmx1ZVwiOiBjb2xvci5iLFxuICAgICAgICBcImdyZWVuXCI6IGNvbG9yLmcsXG4gICAgICAgIFwicmVkXCI6IGNvbG9yLnJcbiAgICAgIH0sXG4gICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0ZvbnRBdHRyaWJ1dGVcIjoge1xuICAgICAgICBcIl9jbGFzc1wiOiBcIlVJRm9udERlc2NyaXB0b3JcIixcbiAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogdHlwZW9mIGRhdGEuZm9udE5hbWUgIT09IFwic3ltYm9sXCIgPyBgJHtkYXRhLmZvbnROYW1lLmZhbWlseS5yZXBsYWNlKC9cXHMrL2csICcnKX0tJHtkYXRhLmZvbnROYW1lLnN0eWxlfWAgOiAnQXJpYWwnLFxuICAgICAgICAgIFwic2l6ZVwiOiB0eXBlb2YgZGF0YS5mb250U2l6ZSAhPT0gXCJzeW1ib2xcIiA/IGRhdGEuZm9udFNpemUgOiAxNVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJNU0F0dHJpYnV0ZWRTdHJpbmdUZXh0VHJhbnNmb3JtQXR0cmlidXRlXCI6IDEsXG4gICAgICBcInRleHRTdHlsZVZlcnRpY2FsQWxpZ25tZW50S2V5XCI6IDAsXG4gICAgICBcInBhcmFncmFwaFN0eWxlXCI6IHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJwYXJhZ3JhcGhTdHlsZVwiLFxuICAgICAgICBcIm1heGltdW1MaW5lSGVpZ2h0XCI6IGRhdGEubGluZUhlaWdodC52YWx1ZSxcbiAgICAgICAgXCJtaW5pbXVtTGluZUhlaWdodFwiOiBkYXRhLmxpbmVIZWlnaHQudmFsdWUsXG4gICAgICAgIFwiYWxpZ25tZW50XCI6IHRleHRBbGlnbmVtZW50KGRhdGEudGV4dEFsaWduSG9yaXpvbnRhbClcbiAgICAgIH0sXG4gICAgICBcImtlcm5pbmdcIjogZGF0YS5sZXR0ZXJTcGFjaW5nLnZhbHVlXG4gICAgfSxcbiAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IHRleHRWZXJ0aWNhbEFsaWduZW1lbnQoZGF0YS50ZXh0QWxpZ25WZXJ0aWNhbClcbiAgfTtcbiAgcmVzdWx0LmF0dHJpYnV0ZWRTdHJpbmcgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJhdHRyaWJ1dGVkU3RyaW5nXCIsXG4gICAgXCJzdHJpbmdcIjogZGF0YS5jaGFyYWN0ZXJzLFxuICAgIFwiYXR0cmlidXRlc1wiOiBbe1xuICAgICAgXCJfY2xhc3NcIjogXCJzdHJpbmdBdHRyaWJ1dGVcIixcbiAgICAgIFwibG9jYXRpb25cIjogMCxcbiAgICAgIFwibGVuZ3RoXCI6IGRhdGEuY2hhcmFjdGVycy5sZW5ndGgsXG4gICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0ZvbnRBdHRyaWJ1dGVcIjoge1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiVUlGb250RGVzY3JpcHRvclwiLFxuICAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogdHlwZW9mIGRhdGEuZm9udE5hbWUgIT09IFwic3ltYm9sXCIgPyBgJHtkYXRhLmZvbnROYW1lLmZhbWlseS5yZXBsYWNlKC9cXHMrL2csICcnKX0tJHtkYXRhLmZvbnROYW1lLnN0eWxlfWAgOiAnQXJpYWwnLFxuICAgICAgICAgICAgXCJzaXplXCI6IHR5cGVvZiBkYXRhLmZvbnRTaXplICE9PSBcInN5bWJvbFwiID8gZGF0YS5mb250U2l6ZSA6IDE1XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0NvbG9yQXR0cmlidXRlXCI6IHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgICAgXCJhbHBoYVwiOiBjb2xvci5hLFxuICAgICAgICAgIFwiYmx1ZVwiOiBjb2xvci5iLFxuICAgICAgICAgIFwiZ3JlZW5cIjogY29sb3IuZyxcbiAgICAgICAgICBcInJlZFwiOiBjb2xvci5yXG4gICAgICAgIH0sXG4gICAgICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nVGV4dFRyYW5zZm9ybUF0dHJpYnV0ZVwiOiB0ZXh0Q2FzZShkYXRhLnRleHRDYXNlKSxcbiAgICAgICAgXCJwYXJhZ3JhcGhTdHlsZVwiOiB7XG4gICAgICAgICAgXCJfY2xhc3NcIjogXCJwYXJhZ3JhcGhTdHlsZVwiLFxuICAgICAgICAgIFwiYWxpZ25tZW50XCI6IHRleHRBbGlnbmVtZW50KGRhdGEudGV4dEFsaWduSG9yaXpvbnRhbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dXG4gIH07XG5cbiAgcmVzdWx0LmF1dG9tYXRpY2FsbHlEcmF3T25VbmRlcmx5aW5nUGF0aCA9IGZhbHNlO1xuICByZXN1bHQuZG9udFN5bmNocm9uaXNlV2l0aFN5bWJvbCA9IGZhbHNlO1xuICByZXN1bHQuZ2x5cGhCb3VuZHMgPSBcInt7MCwgNH0sIHszOCwgOH19XCI7XG4gIHJlc3VsdC5saW5lU3BhY2luZ0JlaGF2aW91ciA9IDI7XG4gIHJlc3VsdC50ZXh0QmVoYXZpb3VyID0gMjtcbn1cbiIsImNvbnN0IHR5cGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvdHlwZScpO1xuY29uc3Qgc2V0U3R5bGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3R5bGUnKTtcbmNvbnN0IHBvc2l0aW9uID0gcmVxdWlyZSgnLi9oZWxwZXJzL3Bvc2l0aW9uJyk7XG5jb25zdCBjYW52YXMgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvY2FudmFzJyk7XG5jb25zdCBmcmFtZSA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9mcmFtZScpO1xuY29uc3QgZ3JvdXAgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvZ3JvdXAnKTtcbmNvbnN0IGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9jb21wb25lbnQnKTtcbmNvbnN0IGluc3RhbmNlID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2luc3RhbmNlJyk7XG5jb25zdCByZWN0YW5nbGUgPSByZXF1aXJlKCcuL3NoYXBlcy9yZWN0YW5nbGUnKTtcbmNvbnN0IHRyaWFuZ2xlID0gcmVxdWlyZSgnLi9zaGFwZXMvdHJpYW5nbGUnKTtcbmNvbnN0IGVsbGlwc2UgPSByZXF1aXJlKCcuL3NoYXBlcy9lbGxpcHNlJyk7XG5jb25zdCB2ZWN0b3IgPSByZXF1aXJlKCcuL3NoYXBlcy92ZWN0b3InKTtcbmNvbnN0IHRleHQgPSByZXF1aXJlKCcuL3RleHQvaW5kZXgnKTtcblxuY29uc3QgdHJhbnNmb3JtID0gKGRhdGEsIHBhcmVudCA9IHt9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBfY2xhc3M6IHR5cGUoZGF0YS50eXBlKSxcbiAgICBkb19vYmplY3RJRDogZGF0YS5pZCxcbiAgICBib29sZWFuT3BlcmF0aW9uOiAtMSxcbiAgICBleHBvcnRPcHRpb25zOiB7XG4gICAgICBfY2xhc3M6ICdleHBvcnRPcHRpb25zJyxcbiAgICAgIGV4cG9ydEZvcm1hdHM6IFtdLFxuICAgICAgaW5jbHVkZWRMYXllcklkczogW10sXG4gICAgICBsYXllck9wdGlvbnM6IDAsXG4gICAgICBzaG91bGRUcmltOiBmYWxzZSxcbiAgICB9LFxuICAgIGZyYW1lOiB7XG4gICAgICBfY2xhc3M6ICdyZWN0JyxcbiAgICAgIGNvbnN0cmFpblByb3BvcnRpb25zOiBmYWxzZSxcbiAgICB9LFxuICAgIGlzRml4ZWRUb1ZpZXdwb3J0OiBmYWxzZSxcbiAgICBpc0ZsaXBwZWRIb3Jpem9udGFsOiBmYWxzZSxcbiAgICBpc0ZsaXBwZWRWZXJ0aWNhbDogZmFsc2UsXG4gICAgaXNMb2NrZWQ6IGZhbHNlLFxuICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICBsYXllckxpc3RFeHBhbmRlZFR5cGU6IDAsXG4gICAgbmFtZTogZGF0YS5uYW1lLFxuICAgIG5hbWVJc0ZpeGVkOiBmYWxzZSxcbiAgICByZXNpemluZ0NvbnN0cmFpbnQ6IDYzLFxuICAgIHJlc2l6aW5nVHlwZTogMCxcbiAgICByb3RhdGlvbjogMCxcbiAgICBzaG91bGRCcmVha01hc2tDaGFpbjogZmFsc2UsXG4gICAgY2xpcHBpbmdNYXNrTW9kZTogMCxcbiAgICBoYXNDbGlwcGluZ01hc2s6IGZhbHNlLFxuICAgIHN0eWxlOiBzZXRTdHlsZShkYXRhKSxcbiAgfTtcblxuICBpZiAoZGF0YS50eXBlICE9PSAnUEFHRScpIHtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uKHBhcmVudCwgZGF0YSk7XG4gICAgcmVzdWx0LmZyYW1lLnggPSBkYXRhLng7XG4gICAgcmVzdWx0LmZyYW1lLnkgPSBkYXRhLnk7XG4gICAgcmVzdWx0LmZyYW1lLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgIHJlc3VsdC5mcmFtZS53aWR0aCA9IGRhdGEud2lkdGg7XG4gIH1cblxuICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgIHJlc3VsdC5sYXllcnMgPSBkYXRhLmNoaWxkcmVuLm1hcChjaGlsZCA9PiB0cmFuc2Zvcm0oY2hpbGQsIGRhdGEpKTtcbiAgfVxuXG4gIHN3aXRjaCAoZGF0YS50eXBlKSB7XG4gICAgY2FzZSAnUEFHRSc6XG4gICAgICBjYW52YXMoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0ZSQU1FJzpcbiAgICAgIGZyYW1lKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdHUk9VUCc6XG4gICAgICBncm91cChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ09NUE9ORU5UJzpcbiAgICAgIGNvbXBvbmVudChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnSU5TVEFOQ0UnOlxuICAgICAgaW5zdGFuY2UoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1JFQ1RBTkdMRSc6XG4gICAgICByZWN0YW5nbGUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VMTElQU0UnOlxuICAgICAgZWxsaXBzZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUkVHVUxBUl9QT0xZR09OJzpcbiAgICAgIHRyaWFuZ2xlKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdWRUNUT1InOlxuICAgICAgdmVjdG9yKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdURVhUJzpcbiAgICAgIHRleHQoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==