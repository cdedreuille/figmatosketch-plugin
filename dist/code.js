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
/* harmony import */ var _converter_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter/transformer */ "./src/converter/transformer.js");
/* harmony import */ var _converter_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_converter_transformer__WEBPACK_IMPORTED_MODULE_0__);

figma.showUI(__html__);
figma.ui.onmessage = msg => {
    switch (msg.type) {
        case 'convert':
            const figmaPages = figma.root.children;
            const sketchPages = figmaPages.map(page => _converter_transformer__WEBPACK_IMPORTED_MODULE_0___default()(page));
            figma.ui.postMessage({ figmaPages, sketchPages });
            break;
        case 'download':
            figma.closePlugin();
            break;
        // Is this needed?
        default:
            break;
    }
};


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

  console.log(data.vectorNetwork);

  data.vectorNetwork.segments.map(segment => {
    const vertice = data.vectorNetwork.vertices[segment.end];
    let boom = {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "point": `{${vertice.x/objWidth}, ${vertice.y/objHeight}}`,
      "curveFrom": `{${segment.tangentStart.x/objWidth}, ${segment.tangentStart.y/objHeight}}`,
      "curveTo": `{${segment.tangentEnd.x/objWidth}, ${segment.tangentEnd.y/objHeight}}`
    }

    const ts = segment.tangentStart;
    const te = segment.tangentEnd;

    if (ts.x > 0 || ts.y > 0 || ts.x < 0 || ts.y < 0) {
      if (te.x === 0 && te.y === 0) {
        boom.hasCurveFrom = false;
        boom.hasCurveTo = true;
      } else {
        boom.hasCurveFrom = true;
        boom.hasCurveTo = true;
      }
    } else if (ts.x === 0 && ts.y === 0) {
      if (te.x === 0 && te.y === 0) {
        boom.hasCurveFrom = false;
        boom.hasCurveTo = false;
      } else {
        boom.hasCurveFrom = true;
        boom.hasCurveTo = false;
      }
    }

    // https://www.figma.com/plugin-docs/api/HandleMirroring/
    // Figma doesn't have curveMode 3. No need for it.
    if (vertice.handleMirroring === "ANGLE") {
      boom.curveMode = 4;
    } else if (vertice.handleMirroring === "ANGLE_AND_LENGTH") {
      boom.curveMode = 2;
    } else {
      boom.curveMode = 1;
    }

    newPath.push(boom);
  });

  console.log(newPath);

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

// MOVE TO ES6 imports and TS?
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
  const result = {};

  // Can these just be defined up front?
  result._class = type(data.type),
  result.do_objectID = data.id;
  result.booleanOperation = -1;
  result.exportOptions = {
    "_class": "exportOptions",
    "exportFormats": [],
    "includedLayerIds": [],
    "layerOptions": 0,
    "shouldTrim": false
  };
  result.frame = {
    "_class": "rect",
    "constrainProportions": false,
  };
  result.isFixedToViewport = false;
  result.isFlippedHorizontal = false;
  result.isFlippedVertical = false;
  result.isLocked = false;
  result.isVisible = true;
  result.layerListExpandedType = 0;
  result.name = data.name;
  result.nameIsFixed = false;
  result.resizingConstraint = 63;
  result.resizingType = 0;
  result.rotation = 0;
  result.shouldBreakMaskChain = false;
  result.clippingMaskMode = 0;
  result.hasClippingMask = false;
  result.style = setStyle(data);

  // console.log(data);

  // This is to update the position to be relative and not absolute.
  // Sketch uses relative position to its parent.
  // Page is the top level so obviously doesn't need this code
  if (data.type !== 'PAGE') {
    const newPosition = position(parent, data);
    result.frame.x = data.x;
    result.frame.y = data.y;
    result.frame.height = data.height;
    result.frame.width =  data.width;
  }

  // This is where the magic happen - Recursion to create all the layers.
  if (data.children) {
    result.layers = data.children.map(child => transform(child, data));
  }

  // Each case need to be updated using Figma plugin API.
  // The structure isn't the same as the REST API
  switch(data.type) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy9ibGVuZE1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3NoYXBlcy9lbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3NoYXBlcy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3NoYXBlcy92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L19ob3Jpem9udGFsQWxpZ25lbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvX3RleHRDYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9fdmVydGljYWxBbGlnbmVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsNkRBQVc7QUFDbEUsa0NBQWtDLDBCQUEwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFhOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiaW1wb3J0IHRyYW5zZm9ybWVyIGZyb20gJy4vY29udmVydGVyL3RyYW5zZm9ybWVyJztcbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY29udmVydCc6XG4gICAgICAgICAgICBjb25zdCBmaWdtYVBhZ2VzID0gZmlnbWEucm9vdC5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNvbnN0IHNrZXRjaFBhZ2VzID0gZmlnbWFQYWdlcy5tYXAocGFnZSA9PiB0cmFuc2Zvcm1lcihwYWdlKSk7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IGZpZ21hUGFnZXMsIHNrZXRjaFBhZ2VzIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Rvd25sb2FkJzpcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gSXMgdGhpcyBuZWVkZWQ/XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5ncm91cExheW91dCA9IHtcbiAgICBcIl9jbGFzc1wiOiBcIk1TSW1tdXRhYmxlRnJlZWZvcm1Hcm91cExheW91dFwiXG4gIH07XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSB0cnVlO1xuICByZXN1bHQuaG9yaXpvbnRhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzM2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH07XG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWU7XG4gIHJlc3VsdC52ZXJ0aWNhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzA2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IHRydWU7XG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWU7XG5cbiAgLy8gTmVlZCB0byBhZGQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgYmFja2dyb3VuZHNcbiAgLy8gTmVlZCBzdXBwb3J0IGZvciBvdGhlciB0eXBlcyBvZiBiYWNrZ3JvdW5kc1xuICBpZihkYXRhLmJhY2tncm91bmRzLmxlbmd0aCA+PSAxKSB7XG4gICAgaWYoZGF0YS5iYWNrZ3JvdW5kc1swXS50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICByZXN1bHQuYmFja2dyb3VuZENvbG9yID0ge1xuICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgIFwiYWxwaGFcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5vcGFjaXR5LFxuICAgICAgICBcImJsdWVcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5iLFxuICAgICAgICBcImdyZWVuXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuZyxcbiAgICAgICAgXCJyZWRcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5yXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXN1bHQuaGFzQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcbiAgcmVzdWx0LmluY2x1ZGVCYWNrZ3JvdW5kQ29sb3JJbkluc3RhbmNlID0gdHJ1ZTtcbiAgcmVzdWx0LnN5bWJvbElEID0gZGF0YS5pZDtcbiAgcmVzdWx0LmNoYW5nZUlkZW50aWZpZXIgPSA2O1xuICByZXN1bHQub3ZlcnJpZGVQcm9wZXJ0aWVzID0gW107XG4gIHJlc3VsdC5hbGxvd3NPdmVycmlkZXMgPSB0cnVlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSB0cnVlO1xuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlO1xuXG4gIC8vIE5lZWQgdG8gYWRkIHN1cHBvcnQgZm9yIG11bHRpcGxlIGJhY2tncm91bmRzXG4gIC8vIE5lZWQgc3VwcG9ydCBmb3Igb3RoZXIgdHlwZXMgb2YgYmFja2dyb3VuZHNcbiAgaWYoZGF0YS5iYWNrZ3JvdW5kcy5sZW5ndGggPj0gMSkge1xuICAgIGlmKGRhdGEuYmFja2dyb3VuZHNbMF0udHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgcmVzdWx0LmJhY2tncm91bmRDb2xvciA9IHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICBcImFscGhhXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0ub3BhY2l0eSxcbiAgICAgICAgXCJibHVlXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuYixcbiAgICAgICAgXCJncmVlblwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLmcsXG4gICAgICAgIFwicmVkXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0Lmhhc0JhY2tncm91bmRDb2xvciA9IHRydWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IGZhbHNlO1xuICByZXN1bHQuZ3JvdXBMYXlvdXQgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJNU0ltbXV0YWJsZUZyZWVmb3JtR3JvdXBMYXlvdXRcIlxuICB9XG4gIHJlc3VsdC5ob3Jpem9udGFsUnVsZXJEYXRhID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicnVsZXJEYXRhXCIsXG4gICAgXCJiYXNlXCI6IC0zMzYsXG4gICAgXCJndWlkZXNcIjogW11cbiAgfSxcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZSxcbiAgcmVzdWx0LnZlcnRpY2FsUnVsZXJEYXRhID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicnVsZXJEYXRhXCIsXG4gICAgXCJiYXNlXCI6IC0zMDYsXG4gICAgXCJndWlkZXNcIjogW11cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5ob3Jpem9udGFsU3BhY2luZyA9IDA7XG4gIHJlc3VsdC5vdmVycmlkZVZhbHVlcyA9IFtdO1xuICByZXN1bHQuc2NhbGUgPSAxO1xuICByZXN1bHQuc3ltYm9sSUQgPSBkYXRhLmNvbXBvbmVudElkO1xuICByZXN1bHQudmVydGljYWxTcGFjaW5nID0gMDtcblxuICBjb25zdCBvdmVycmlkZXMgPSBbXTtcblxuICBkYXRhLmNoaWxkcmVuLm1hcCgob3ZlcnJpZGUpID0+IHtcbiAgICBjb25zdCBlbGVtSWQgPSBvdmVycmlkZS5pZC5zcGxpdChcIjtcIik7XG5cbiAgICBpZihvdmVycmlkZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgIG92ZXJyaWRlcy5wdXNoKHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJvdmVycmlkZVZhbHVlXCIsXG4gICAgICAgIFwiZG9fb2JqZWN0SURcIjogZWxlbUlkWzBdLFxuICAgICAgICBcIm92ZXJyaWRlTmFtZVwiOiBgJHtlbGVtSWRbMV19X3N0cmluZ1ZhbHVlYCxcbiAgICAgICAgXCJ2YWx1ZVwiOiBvdmVycmlkZS5jaGFyYWN0ZXJzXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJlc3VsdC5vdmVycmlkZVZhbHVlcyA9IG92ZXJyaWRlcztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFwiUEFTU19USFJPVUdIXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIk5PUk1BTFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJEQVJLRU5cIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTVVMVElQTFlcIikge1xuICAgIHJldHVybiAyO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09MT1JfQlVSTlwiKSB7XG4gICAgcmV0dXJuIDM7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJMSUdIVEVOXCIpIHtcbiAgICByZXR1cm4gNDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNDUkVFTlwiKSB7XG4gICAgcmV0dXJuIDU7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT0xPUl9ET0RHRVwiKSB7XG4gICAgcmV0dXJuIDY7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJPVkVSTEFZXCIpIHtcbiAgICByZXR1cm4gNztcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNPRlRfTElHSFRcIikge1xuICAgIHJldHVybiA4O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSEFSRF9MSUdIVFwiKSB7XG4gICAgcmV0dXJuIDk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJESUZGRVJFTkNFXCIpIHtcbiAgICByZXR1cm4gMTA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJFWENMVVNJT05cIikge1xuICAgIHJldHVybiAxMTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkhVRVwiKSB7XG4gICAgcmV0dXJuIDEyO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU0FUVVJBVElPTlwiKSB7XG4gICAgcmV0dXJuIDEzO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09MT1JcIikge1xuICAgIHJldHVybiAxNDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkxVTUlOT1NJVFlcIikge1xuICAgIHJldHVybiAxNTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCkge1xuXG4gIGxldCB4UG9zaXRpb24gPSAwO1xuICBsZXQgeVBvc2l0aW9uID0gMDtcbiAgaWYgKHBhcmVudC54KSB7XG4gICAgaWYgKGNoaWxkLnggPiBwYXJlbnQueCkge1xuICAgICAgeFBvc2l0aW9uID0gTWF0aC5hYnMoY2hpbGQueCAtIHBhcmVudC54KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLnkgPiBwYXJlbnQueSkge1xuICAgICAgeVBvc2l0aW9uID0gTWF0aC5hYnMoY2hpbGQueSAtIHBhcmVudC55KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgeFBvc2l0aW9uID0gY2hpbGQueDtcbiAgICB5UG9zaXRpb24gPSBjaGlsZC55O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiB4UG9zaXRpb24sXG4gICAgeTogeVBvc2l0aW9uXG4gIH1cbn07XG4iLCJjb25zdCBibGVuZE1vZGUgPSByZXF1aXJlKCcuL2JsZW5kTW9kZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIFwiX2NsYXNzXCI6IFwic3R5bGVcIixcbiAgICBcImVuZE1hcmtlclR5cGVcIjogMCxcbiAgICBcIm1pdGVyTGltaXRcIjogMTAsXG4gICAgXCJzdGFydE1hcmtlclR5cGVcIjogMCxcbiAgICBcIndpbmRpbmdSdWxlXCI6IDAsIC8vIE5PTlpFUk9cbiAgfTtcblxuICBpZiAoZGF0YS5ibGVuZE1vZGUpIHtcbiAgICBzdHlsZS5jb250ZXh0U2V0dGluZ3MgPSB7XG4gICAgICBcIl9jbGFzc1wiOiBcImdyYXBoaWNzQ29udGV4dFNldHRpbmdzXCIsXG4gICAgICBcImJsZW5kTW9kZVwiOiBibGVuZE1vZGUoZGF0YS5ibGVuZE1vZGUpXG4gICAgfVxuXG4gICAgaWYgKGRhdGEub3BhY2l0eSkge1xuICAgICAgc3R5bGUuY29udGV4dFNldHRpbmdzLm9wYWNpdHkgPSBkYXRhLm9wYWNpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmNvbnRleHRTZXR0aW5ncy5vcGFjaXR5ID0gMTtcbiAgICB9XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLnN0cm9rZXMpICYmIGRhdGEuc3Ryb2tlcy5sZW5ndGgpIHtcbiAgICBsZXQgbmV3Qm9yZGVycyA9IFtdO1xuICAgIGRhdGEuc3Ryb2tlcy5mb3JFYWNoKGZ1bmN0aW9uKGJvcmRlcikge1xuXG4gICAgICAvLyBDb252ZXJ0IHRoZSBwb3NpdGlvbiAtIGluc2lkZSwgY2VudGVyLCBvdXRzaWRlXG4gICAgICBsZXQgcG9zaXRpb24gPSAnJztcbiAgICAgIGlmIChkYXRhLnN0cm9rZUFsaWduID09PSAnSU5TSURFJykge1xuICAgICAgICBwb3NpdGlvbiA9ICAxO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLnN0cm9rZUFsaWduID09PSAnT1VUU0lERScpIHtcbiAgICAgICAgcG9zaXRpb24gPSAgMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uID0gIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBjb2xvciA9ICcnO1xuICAgICAgaWYgKGJvcmRlci50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICAgIGNvbG9yID0ge1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgICBcImFscGhhXCI6IGJvcmRlci5vcGFjaXR5LFxuICAgICAgICAgIFwiYmx1ZVwiOiBib3JkZXIuY29sb3IuYixcbiAgICAgICAgICBcImdyZWVuXCI6IGJvcmRlci5jb2xvci5nLFxuICAgICAgICAgIFwicmVkXCI6IGJvcmRlci5jb2xvci5yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGdyYWRpZW50ID0gJyc7XG4gICAgICBpZiAoYm9yZGVyLnR5cGUgPT09ICdHUkFESUVOVF9MSU5FQVInKSB7XG4gICAgICAgIC8vIFRPRE86IEFkZCBzdXBwb3J0IGZvciBHcmFkaWVudHNcbiAgICAgIH1cblxuICAgICAgbmV3Qm9yZGVycy5wdXNoKHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJib3JkZXJcIixcbiAgICAgICAgXCJpc0VuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgXCJjb2xvclwiOiBjb2xvcixcbiAgICAgICAgXCJmaWxsVHlwZVwiOiAwLFxuICAgICAgICBcInBvc2l0aW9uXCI6IHBvc2l0aW9uLFxuICAgICAgICBcInRoaWNrbmVzc1wiOiBkYXRhLnN0cm9rZVdlaWdodFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzdHlsZS5ib3JkZXJzID0gbmV3Qm9yZGVycztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEuZmlsbHMpICYmIGRhdGEuZmlsbHMubGVuZ3RoKSB7XG4gICAgbGV0IG5ld0ZpbGxzID0gW107XG4gICAgZGF0YS5maWxscy5mb3JFYWNoKGZ1bmN0aW9uKGZpbGwpIHtcbiAgICAgIGlmIChmaWxsLnR5cGUgPT09ICdJTUFHRScpIHtcbiAgICAgICAgbmV3RmlsbHMucHVzaCh7XG4gICAgICAgICAgXCJfY2xhc3NcIjogXCJmaWxsXCIsXG4gICAgICAgICAgXCJpc0VuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcImZpbGxUeXBlXCI6IDQsXG4gICAgICAgICAgXCJpbWFnZVwiOiB7XG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBcIk1TSlNPTkZpbGVSZWZlcmVuY2VcIixcbiAgICAgICAgICAgIFwiX3JlZl9jbGFzc1wiOiBcIk1TSW1hZ2VEYXRhXCIsXG4gICAgICAgICAgICBcIl9yZWZcIjogYGltYWdlc1xcLyR7ZmlsbC5pbWFnZVJlZn0ucG5nYFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJub2lzZUluZGV4XCI6IDAsXG4gICAgICAgICAgXCJub2lzZUludGVuc2l0eVwiOiAwLFxuICAgICAgICAgIFwicGF0dGVybkZpbGxUeXBlXCI6IDEsXG4gICAgICAgICAgXCJwYXR0ZXJuVGlsZVNjYWxlXCI6IDFcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICBuZXdGaWxscy5wdXNoKHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcImZpbGxcIixcbiAgICAgICAgICBcImlzRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICAgICAgXCJhbHBoYVwiOiBmaWxsLm9wYWNpdHksXG4gICAgICAgICAgICBcImJsdWVcIjogZmlsbC5jb2xvci5iLFxuICAgICAgICAgICAgXCJncmVlblwiOiBmaWxsLmNvbG9yLmcsXG4gICAgICAgICAgICBcInJlZFwiOiBmaWxsLmNvbG9yLnJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZmlsbFR5cGVcIjogMCxcbiAgICAgICAgICBcIm5vaXNlSW5kZXhcIjogMCxcbiAgICAgICAgICBcIm5vaXNlSW50ZW5zaXR5XCI6IDAsXG4gICAgICAgICAgXCJwYXR0ZXJuRmlsbFR5cGVcIjogMSxcbiAgICAgICAgICBcInBhdHRlcm5UaWxlU2NhbGVcIjogMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0eWxlLmZpbGxzID0gbmV3RmlsbHM7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodHlwZSA9PT0gXCJQQUdFXCIpIHtcbiAgICByZXR1cm4gXCJwYWdlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgcmV0dXJuIFwiYXJ0Ym9hcmRcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICByZXR1cm4gXCJncm91cFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09NUE9ORU5UXCIpIHtcbiAgICByZXR1cm4gXCJzeW1ib2xNYXN0ZXJcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICByZXR1cm4gXCJzeW1ib2xJbnN0YW5jZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiUkVDVEFOR0xFXCIpIHtcbiAgICByZXR1cm4gXCJyZWN0YW5nbGVcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkVMTElQU0VcIikge1xuICAgIHJldHVybiBcIm92YWxcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlJFR1VMQVJfUE9MWUdPTlwiKSB7XG4gICAgcmV0dXJuIFwidHJpYW5nbGVcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlZFQ1RPUlwiKSB7XG4gICAgcmV0dXJuIFwic2hhcGVQYXRoXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJURVhUXCIpIHtcbiAgICByZXR1cm4gXCJ0ZXh0XCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiXCJcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZWRpdGVkID0gZmFsc2U7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBbe1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MC43NzYxNDIzNzQ5MDAwMDAwNCwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInswLjIyMzg1NzYyNTEwMDAwMDAxLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInswLjUsIDF9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMC4yMjM4NTc2MjUxMDAwMDAwMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAwLjc3NjE0MjM3NDkwMDAwMDA0fVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInsxLCAwLjV9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MC4yMjM4NTc2MjUxMDAwMDAwMSwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInswLjc3NjE0MjM3NDkwMDAwMDA0LCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInswLjUsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMC43NzYxNDIzNzQ5MDAwMDAwNH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAwLjIyMzg1NzYyNTEwMDAwMDAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInswLCAwLjV9XCJcbiAgfV1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZWRpdGVkID0gZmFsc2U7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBbe1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDF9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDF9XCJcbiAgfV1cbiAgcmVzdWx0LmZpeGVkUmFkaXVzID0gMDtcbiAgcmVzdWx0Lmhhc0NvbnZlcnRlZFRvTmV3Um91bmRDb3JuZXJzID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZWRpdGVkID0gZmFsc2U7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBbe1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MC41LCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAuNSwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLjUsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDF9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDF9XCJcbiAgfV1cbiAgcmVzdWx0LmlzRXF1aWxhdGVyYWwgPSBmYWxzZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICBjb25zdCBuZXdQYXRoID0gW107XG4gIGNvbnN0IG9ialdpZHRoID0gZGF0YS53aWR0aDtcbiAgY29uc3Qgb2JqSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG5cbiAgY29uc29sZS5sb2coZGF0YS52ZWN0b3JOZXR3b3JrKTtcblxuICBkYXRhLnZlY3Rvck5ldHdvcmsuc2VnbWVudHMubWFwKHNlZ21lbnQgPT4ge1xuICAgIGNvbnN0IHZlcnRpY2UgPSBkYXRhLnZlY3Rvck5ldHdvcmsudmVydGljZXNbc2VnbWVudC5lbmRdO1xuICAgIGxldCBib29tID0ge1xuICAgICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgICAgXCJwb2ludFwiOiBgeyR7dmVydGljZS54L29ialdpZHRofSwgJHt2ZXJ0aWNlLnkvb2JqSGVpZ2h0fX1gLFxuICAgICAgXCJjdXJ2ZUZyb21cIjogYHske3NlZ21lbnQudGFuZ2VudFN0YXJ0Lngvb2JqV2lkdGh9LCAke3NlZ21lbnQudGFuZ2VudFN0YXJ0Lnkvb2JqSGVpZ2h0fX1gLFxuICAgICAgXCJjdXJ2ZVRvXCI6IGB7JHtzZWdtZW50LnRhbmdlbnRFbmQueC9vYmpXaWR0aH0sICR7c2VnbWVudC50YW5nZW50RW5kLnkvb2JqSGVpZ2h0fX1gXG4gICAgfVxuXG4gICAgY29uc3QgdHMgPSBzZWdtZW50LnRhbmdlbnRTdGFydDtcbiAgICBjb25zdCB0ZSA9IHNlZ21lbnQudGFuZ2VudEVuZDtcblxuICAgIGlmICh0cy54ID4gMCB8fCB0cy55ID4gMCB8fCB0cy54IDwgMCB8fCB0cy55IDwgMCkge1xuICAgICAgaWYgKHRlLnggPT09IDAgJiYgdGUueSA9PT0gMCkge1xuICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IGZhbHNlO1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSB0cnVlO1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHMueCA9PT0gMCAmJiB0cy55ID09PSAwKSB7XG4gICAgICBpZiAodGUueCA9PT0gMCAmJiB0ZS55ID09PSAwKSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gZmFsc2U7XG4gICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSB0cnVlO1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBodHRwczovL3d3dy5maWdtYS5jb20vcGx1Z2luLWRvY3MvYXBpL0hhbmRsZU1pcnJvcmluZy9cbiAgICAvLyBGaWdtYSBkb2Vzbid0IGhhdmUgY3VydmVNb2RlIDMuIE5vIG5lZWQgZm9yIGl0LlxuICAgIGlmICh2ZXJ0aWNlLmhhbmRsZU1pcnJvcmluZyA9PT0gXCJBTkdMRVwiKSB7XG4gICAgICBib29tLmN1cnZlTW9kZSA9IDQ7XG4gICAgfSBlbHNlIGlmICh2ZXJ0aWNlLmhhbmRsZU1pcnJvcmluZyA9PT0gXCJBTkdMRV9BTkRfTEVOR1RIXCIpIHtcbiAgICAgIGJvb20uY3VydmVNb2RlID0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9vbS5jdXJ2ZU1vZGUgPSAxO1xuICAgIH1cblxuICAgIG5ld1BhdGgucHVzaChib29tKTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cobmV3UGF0aCk7XG5cbiAgcmVzdWx0LmVkaXRlZCA9IHRydWU7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBuZXdQYXRoO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gXCJMRUZUXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIkNFTlRFUlwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJSSUdIVFwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IFwiVVBQRVJcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBcIlRPUFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJDRU5URVJcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiQk9UVE9NXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwiY29uc3QgdGV4dEFsaWduZW1lbnQgPSByZXF1aXJlKCcuL19ob3Jpem9udGFsQWxpZ25lbWVudCcpO1xuY29uc3QgdGV4dFZlcnRpY2FsQWxpZ25lbWVudCA9IHJlcXVpcmUoJy4vX3ZlcnRpY2FsQWxpZ25lbWVudCcpO1xuY29uc3QgdGV4dENhc2UgPSByZXF1aXJlKCcuL190ZXh0Q2FzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgLy8gY29uc3QgY29sb3IgPSB7fTtcbiAgLy8gZm9yIChsZXQgaSBpbiBkYXRhLmZpbGxzKSB7XG4gIC8vICAgaWYoZGF0YS5maWxsc1tpXS50eXBlID09PSAnU09MSUQnKSB7XG4gIC8vICAgICBjb2xvci5hID0gZGF0YS5maWxsc1tpXS5vcGFjaXR5O1xuICAvLyAgICAgY29sb3IuYiA9IGRhdGEuZmlsbHNbaV0uY29sb3IuYjtcbiAgLy8gICAgIGNvbG9yLmcgPSBkYXRhLmZpbGxzW2ldLmNvbG9yLmc7XG4gIC8vICAgICBjb2xvci5yID0gZGF0YS5maWxsc1tpXS5jb2xvci5yO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyByZXN1bHQuc3R5bGUudGV4dFN0eWxlID0ge1xuICAvLyAgIFwiX2NsYXNzXCI6IFwidGV4dFN0eWxlXCIsXG4gIC8vICAgXCJlbmNvZGVkQXR0cmlidXRlc1wiOiB7XG4gIC8vICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0NvbG9yQXR0cmlidXRlXCI6IHtcbiAgLy8gICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAvLyAgICAgICBcImFscGhhXCI6IGNvbG9yLmEsXG4gIC8vICAgICAgIFwiYmx1ZVwiOiBjb2xvci5iLFxuICAvLyAgICAgICBcImdyZWVuXCI6IGNvbG9yLmcsXG4gIC8vICAgICAgIFwicmVkXCI6IGNvbG9yLnJcbiAgLy8gICAgIH0sXG4gIC8vICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0ZvbnRBdHRyaWJ1dGVcIjoge1xuICAvLyAgICAgICBcIl9jbGFzc1wiOiBcIlVJRm9udERlc2NyaXB0b3JcIixcbiAgLy8gICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgLy8gICAgICAgICBcIm5hbWVcIjogZGF0YS5mb250TmFtZS5mYW1pbHksXG4gIC8vICAgICAgICAgXCJzaXplXCI6IGRhdGEuZm9udFNpemVcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSxcbiAgLy8gICAgIFwidGV4dFN0eWxlVmVydGljYWxBbGlnbm1lbnRLZXlcIjogMCxcbiAgLy8gICAgIFwicGFyYWdyYXBoU3R5bGVcIjoge1xuICAvLyAgICAgICBcIl9jbGFzc1wiOiBcInBhcmFncmFwaFN0eWxlXCIsXG4gIC8vICAgICAgIFwibWF4aW11bUxpbmVIZWlnaHRcIjogZGF0YS5saW5lSGVpZ2h0LnZhbHVlLFxuICAvLyAgICAgICBcIm1pbmltdW1MaW5lSGVpZ2h0XCI6IGRhdGEubGluZUhlaWdodC52YWx1ZSxcbiAgLy8gICAgICAgXCJhbGlnbm1lbnRcIjogdGV4dEFsaWduZW1lbnQoZGF0YS50ZXh0QWxpZ25Ib3Jpem9udGFsKVxuICAvLyAgICAgfSxcbiAgLy8gICAgIFwia2VybmluZ1wiOiBkYXRhLmxldHRlclNwYWNpbmcudmFsdWVcbiAgLy8gICB9LFxuICAvLyAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogdGV4dFZlcnRpY2FsQWxpZ25lbWVudChkYXRhLnRleHRBbGlnblZlcnRpY2FsKVxuICAvLyB9O1xuICAvLyByZXN1bHQuYXR0cmlidXRlZFN0cmluZyA9IHtcbiAgLy8gICBcIl9jbGFzc1wiOiBcImF0dHJpYnV0ZWRTdHJpbmdcIixcbiAgLy8gICBcInN0cmluZ1wiOiBkYXRhLmNoYXJhY3RlcnMsXG4gIC8vICAgXCJhdHRyaWJ1dGVzXCI6IFt7XG4gIC8vICAgICBcIl9jbGFzc1wiOiBcInN0cmluZ0F0dHJpYnV0ZVwiLFxuICAvLyAgICAgXCJsb2NhdGlvblwiOiAwLFxuICAvLyAgICAgXCJsZW5ndGhcIjogZGF0YS5jaGFyYWN0ZXJzLmxlbmd0aCxcbiAgLy8gICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gIC8vICAgICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nRm9udEF0dHJpYnV0ZVwiOiB7XG4gIC8vICAgICAgICAgXCJfY2xhc3NcIjogXCJVSUZvbnREZXNjcmlwdG9yXCIsXG4gIC8vICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBkYXRhLmZvbnROYW1lLmZhbWlseSxcbiAgLy8gICAgICAgICAgIFwic2l6ZVwiOiBkYXRhLmZvbnRTaXplXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9LFxuICAvLyAgICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0NvbG9yQXR0cmlidXRlXCI6IHtcbiAgLy8gICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gIC8vICAgICAgICAgXCJhbHBoYVwiOiBjb2xvci5hLFxuICAvLyAgICAgICAgIFwiYmx1ZVwiOiBjb2xvci5iLFxuICAvLyAgICAgICAgIFwiZ3JlZW5cIjogY29sb3IuZyxcbiAgLy8gICAgICAgICBcInJlZFwiOiBjb2xvci5yXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIFwicGFyYWdyYXBoU3R5bGVcIjoge1xuICAvLyAgICAgICAgIFwiX2NsYXNzXCI6IFwicGFyYWdyYXBoU3R5bGVcIixcbiAgLy8gICAgICAgICBcImFsaWdubWVudFwiOiB0ZXh0QWxpZ25lbWVudChkYXRhLnRleHRBbGlnbkhvcml6b250YWwpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XVxuICAvLyB9O1xuXG4gIC8vIGlmIChkYXRhLnRleHRDYXNlKSB7XG4gIC8vICAgcmVzdWx0LnN0eWxlLnRleHRTdHlsZS5lbmNvZGVkQXR0cmlidXRlcy5NU0F0dHJpYnV0ZWRTdHJpbmdUZXh0VHJhbnNmb3JtQXR0cmlidXRlID0gMTtcbiAgLy8gICByZXN1bHQuYXR0cmlidXRlZFN0cmluZy5hdHRyaWJ1dGVzWzBdLmF0dHJpYnV0ZXMuTVNBdHRyaWJ1dGVkU3RyaW5nVGV4dFRyYW5zZm9ybUF0dHJpYnV0ZSA9IHRleHRDYXNlKGRhdGEudGV4dENhc2UpO1xuICAvLyB9XG4gIC8vXG4gIC8vIHJlc3VsdC5hdXRvbWF0aWNhbGx5RHJhd09uVW5kZXJseWluZ1BhdGggPSBmYWxzZTtcbiAgLy8gcmVzdWx0LmRvbnRTeW5jaHJvbmlzZVdpdGhTeW1ib2wgPSBmYWxzZTtcbiAgLy8gcmVzdWx0LmdseXBoQm91bmRzID0gXCJ7ezAsIDR9LCB7MzgsIDh9fVwiO1xuICAvLyByZXN1bHQubGluZVNwYWNpbmdCZWhhdmlvdXIgPSAyO1xuICAvLyByZXN1bHQudGV4dEJlaGF2aW91ciA9IDI7XG59XG4iLCIvLyBNT1ZFIFRPIEVTNiBpbXBvcnRzIGFuZCBUUz9cbmNvbnN0IHR5cGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvdHlwZScpO1xuY29uc3Qgc2V0U3R5bGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3R5bGUnKTtcbmNvbnN0IHBvc2l0aW9uID0gcmVxdWlyZSgnLi9oZWxwZXJzL3Bvc2l0aW9uJyk7XG5jb25zdCBjYW52YXMgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvY2FudmFzJyk7XG5jb25zdCBmcmFtZSA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9mcmFtZScpO1xuY29uc3QgZ3JvdXAgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvZ3JvdXAnKTtcbmNvbnN0IGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9jb21wb25lbnQnKTtcbmNvbnN0IGluc3RhbmNlID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2luc3RhbmNlJyk7XG5jb25zdCByZWN0YW5nbGUgPSByZXF1aXJlKCcuL3NoYXBlcy9yZWN0YW5nbGUnKTtcbmNvbnN0IHRyaWFuZ2xlID0gcmVxdWlyZSgnLi9zaGFwZXMvdHJpYW5nbGUnKTtcbmNvbnN0IGVsbGlwc2UgPSByZXF1aXJlKCcuL3NoYXBlcy9lbGxpcHNlJyk7XG5jb25zdCB2ZWN0b3IgPSByZXF1aXJlKCcuL3NoYXBlcy92ZWN0b3InKTtcbmNvbnN0IHRleHQgPSByZXF1aXJlKCcuL3RleHQvaW5kZXgnKTtcblxuY29uc3QgdHJhbnNmb3JtID0gKGRhdGEsIHBhcmVudCA9IHt9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIC8vIENhbiB0aGVzZSBqdXN0IGJlIGRlZmluZWQgdXAgZnJvbnQ/XG4gIHJlc3VsdC5fY2xhc3MgPSB0eXBlKGRhdGEudHlwZSksXG4gIHJlc3VsdC5kb19vYmplY3RJRCA9IGRhdGEuaWQ7XG4gIHJlc3VsdC5ib29sZWFuT3BlcmF0aW9uID0gLTE7XG4gIHJlc3VsdC5leHBvcnRPcHRpb25zID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiZXhwb3J0T3B0aW9uc1wiLFxuICAgIFwiZXhwb3J0Rm9ybWF0c1wiOiBbXSxcbiAgICBcImluY2x1ZGVkTGF5ZXJJZHNcIjogW10sXG4gICAgXCJsYXllck9wdGlvbnNcIjogMCxcbiAgICBcInNob3VsZFRyaW1cIjogZmFsc2VcbiAgfTtcbiAgcmVzdWx0LmZyYW1lID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicmVjdFwiLFxuICAgIFwiY29uc3RyYWluUHJvcG9ydGlvbnNcIjogZmFsc2UsXG4gIH07XG4gIHJlc3VsdC5pc0ZpeGVkVG9WaWV3cG9ydCA9IGZhbHNlO1xuICByZXN1bHQuaXNGbGlwcGVkSG9yaXpvbnRhbCA9IGZhbHNlO1xuICByZXN1bHQuaXNGbGlwcGVkVmVydGljYWwgPSBmYWxzZTtcbiAgcmVzdWx0LmlzTG9ja2VkID0gZmFsc2U7XG4gIHJlc3VsdC5pc1Zpc2libGUgPSB0cnVlO1xuICByZXN1bHQubGF5ZXJMaXN0RXhwYW5kZWRUeXBlID0gMDtcbiAgcmVzdWx0Lm5hbWUgPSBkYXRhLm5hbWU7XG4gIHJlc3VsdC5uYW1lSXNGaXhlZCA9IGZhbHNlO1xuICByZXN1bHQucmVzaXppbmdDb25zdHJhaW50ID0gNjM7XG4gIHJlc3VsdC5yZXNpemluZ1R5cGUgPSAwO1xuICByZXN1bHQucm90YXRpb24gPSAwO1xuICByZXN1bHQuc2hvdWxkQnJlYWtNYXNrQ2hhaW4gPSBmYWxzZTtcbiAgcmVzdWx0LmNsaXBwaW5nTWFza01vZGUgPSAwO1xuICByZXN1bHQuaGFzQ2xpcHBpbmdNYXNrID0gZmFsc2U7XG4gIHJlc3VsdC5zdHlsZSA9IHNldFN0eWxlKGRhdGEpO1xuXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIC8vIFRoaXMgaXMgdG8gdXBkYXRlIHRoZSBwb3NpdGlvbiB0byBiZSByZWxhdGl2ZSBhbmQgbm90IGFic29sdXRlLlxuICAvLyBTa2V0Y2ggdXNlcyByZWxhdGl2ZSBwb3NpdGlvbiB0byBpdHMgcGFyZW50LlxuICAvLyBQYWdlIGlzIHRoZSB0b3AgbGV2ZWwgc28gb2J2aW91c2x5IGRvZXNuJ3QgbmVlZCB0aGlzIGNvZGVcbiAgaWYgKGRhdGEudHlwZSAhPT0gJ1BBR0UnKSB7XG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBwb3NpdGlvbihwYXJlbnQsIGRhdGEpO1xuICAgIHJlc3VsdC5mcmFtZS54ID0gZGF0YS54O1xuICAgIHJlc3VsdC5mcmFtZS55ID0gZGF0YS55O1xuICAgIHJlc3VsdC5mcmFtZS5oZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICByZXN1bHQuZnJhbWUud2lkdGggPSAgZGF0YS53aWR0aDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgd2hlcmUgdGhlIG1hZ2ljIGhhcHBlbiAtIFJlY3Vyc2lvbiB0byBjcmVhdGUgYWxsIHRoZSBsYXllcnMuXG4gIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgcmVzdWx0LmxheWVycyA9IGRhdGEuY2hpbGRyZW4ubWFwKGNoaWxkID0+IHRyYW5zZm9ybShjaGlsZCwgZGF0YSkpO1xuICB9XG5cbiAgLy8gRWFjaCBjYXNlIG5lZWQgdG8gYmUgdXBkYXRlZCB1c2luZyBGaWdtYSBwbHVnaW4gQVBJLlxuICAvLyBUaGUgc3RydWN0dXJlIGlzbid0IHRoZSBzYW1lIGFzIHRoZSBSRVNUIEFQSVxuICBzd2l0Y2goZGF0YS50eXBlKSB7XG4gICAgY2FzZSAnUEFHRSc6XG4gICAgICBjYW52YXMoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0ZSQU1FJzpcbiAgICAgIGZyYW1lKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdHUk9VUCc6XG4gICAgICBncm91cChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ09NUE9ORU5UJzpcbiAgICAgIGNvbXBvbmVudChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnSU5TVEFOQ0UnOlxuICAgICAgaW5zdGFuY2UoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1JFQ1RBTkdMRSc6XG4gICAgICByZWN0YW5nbGUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VMTElQU0UnOlxuICAgICAgZWxsaXBzZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUkVHVUxBUl9QT0xZR09OJzpcbiAgICAgIHRyaWFuZ2xlKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdWRUNUT1InOlxuICAgICAgdmVjdG9yKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdURVhUJzpcbiAgICAgIHRleHQoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==