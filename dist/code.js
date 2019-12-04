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

  // data.vectorNetwork.segments.map(segment => {
  //   const vertice = data.vectorNetwork.vertices[segment.end];
  //   let boom = {
  //     "_class": "curvePoint",
  //     "cornerRadius": 0,
  //     "point": `{${vertice.x/objWidth}, ${vertice.y/objHeight}}`,
  //     "curveFrom": `{${segment.tangentStart.x/objWidth}, ${segment.tangentStart.y/objHeight}}`,
  //     "curveTo": `{${segment.tangentEnd.x/objWidth}, ${segment.tangentEnd.y/objHeight}}`
  //   }
  //
  //   const ts = segment.tangentStart;
  //   const te = segment.tangentEnd;
  //
  //   if (ts.x > 0 || ts.y > 0 || ts.x < 0 || ts.y < 0) {
  //     if (te.x === 0 && te.y === 0) {
  //       boom.hasCurveFrom = false;
  //       boom.hasCurveTo = true;
  //     } else {
  //       boom.hasCurveFrom = true;
  //       boom.hasCurveTo = true;
  //     }
  //   } else if (ts.x === 0 && ts.y === 0) {
  //     if (te.x === 0 && te.y === 0) {
  //       boom.hasCurveFrom = false;
  //       boom.hasCurveTo = false;
  //     } else {
  //       boom.hasCurveFrom = true;
  //       boom.hasCurveTo = false;
  //     }
  //   }
  //
  //   // https://www.figma.com/plugin-docs/api/HandleMirroring/
  //   // Figma doesn't have curveMode 3. No need for it.
  //   if (vertice.handleMirroring === "ANGLE") {
  //     boom.curveMode = 4;
  //   } else if (vertice.handleMirroring === "ANGLE_AND_LENGTH") {
  //     boom.curveMode = 2;
  //   } else {
  //     boom.curveMode = 1;
  //   }
  //
  //   newPath.push(boom);
  // });

  data.vectorNetwork.vertices.map((vertice, key) => {
    const segment = data.vectorNetwork.segments[key];
    const thing = data.vectorNetwork.segments.find(item => {
      return item.start === key;
    });

    let boom = {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "point": `{${vertice.x/objWidth}, ${vertice.y/objHeight}}`,
      "curveTo": `{${thing.tangentStart.x/objWidth}, ${thing.tangentStart.y/objHeight}}`,
      "curveFrom": `{${thing.tangentEnd.x/objWidth}, ${thing.tangentEnd.y/objHeight}}`
    }

    if (thing.tangentStart.x === 0 && thing.tangentStart.y === 0) {
      if (thing.tangentEnd.x === 0 && thing.tangentEnd.y === 0) {
        boom.hasCurveTo = false;
        boom.hasCurveFrom = false;
      } else {
        boom.hasCurveTo = false;
        boom.hasCurveFrom = true;
      }
    } else if (thing.tangentEnd.x === 0 && thing.tangentEnd.y === 0) {
      if (thing.tangentStart.x === 0 && thing.tangentStart.y === 0) {
        boom.hasCurveTo = false;
        boom.hasCurveFrom = false;
      } else {
        boom.hasCurveTo = true;
        boom.hasCurveFrom = false;
      }
    } else {
      boom.hasCurveTo = true;
      boom.hasCurveFrom = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy9ibGVuZE1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3NoYXBlcy9lbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3NoYXBlcy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3NoYXBlcy92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L19ob3Jpem9udGFsQWxpZ25lbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvX3RleHRDYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9fdmVydGljYWxBbGlnbmVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsNkRBQVc7QUFDbEUsa0NBQWtDLDBCQUEwQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFhOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUM1QyxnQkFBZ0IsbUJBQU8sQ0FBQywyREFBa0I7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLHlEQUFpQjtBQUN4QyxhQUFhLG1CQUFPLENBQUMsbURBQWM7O0FBRW5DLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsImltcG9ydCB0cmFuc2Zvcm1lciBmcm9tICcuL2NvbnZlcnRlci90cmFuc2Zvcm1lcic7XG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvbnZlcnQnOlxuICAgICAgICAgICAgY29uc3QgZmlnbWFQYWdlcyA9IGZpZ21hLnJvb3QuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBza2V0Y2hQYWdlcyA9IGZpZ21hUGFnZXMubWFwKHBhZ2UgPT4gdHJhbnNmb3JtZXIocGFnZSkpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBmaWdtYVBhZ2VzLCBza2V0Y2hQYWdlcyB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkb3dubG9hZCc6XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIElzIHRoaXMgbmVlZGVkP1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZ3JvdXBMYXlvdXQgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJNU0ltbXV0YWJsZUZyZWVmb3JtR3JvdXBMYXlvdXRcIlxuICB9O1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gdHJ1ZTtcbiAgcmVzdWx0Lmhvcml6b250YWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMzNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9O1xuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlO1xuICByZXN1bHQudmVydGljYWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMwNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSB0cnVlO1xuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlO1xuXG4gIC8vIE5lZWQgdG8gYWRkIHN1cHBvcnQgZm9yIG11bHRpcGxlIGJhY2tncm91bmRzXG4gIC8vIE5lZWQgc3VwcG9ydCBmb3Igb3RoZXIgdHlwZXMgb2YgYmFja2dyb3VuZHNcbiAgaWYoZGF0YS5iYWNrZ3JvdW5kcy5sZW5ndGggPj0gMSkge1xuICAgIGlmKGRhdGEuYmFja2dyb3VuZHNbMF0udHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgcmVzdWx0LmJhY2tncm91bmRDb2xvciA9IHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICBcImFscGhhXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0ub3BhY2l0eSxcbiAgICAgICAgXCJibHVlXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuYixcbiAgICAgICAgXCJncmVlblwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLmcsXG4gICAgICAgIFwicmVkXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0Lmhhc0JhY2tncm91bmRDb2xvciA9IHRydWU7XG4gIHJlc3VsdC5pbmNsdWRlQmFja2dyb3VuZENvbG9ySW5JbnN0YW5jZSA9IHRydWU7XG4gIHJlc3VsdC5zeW1ib2xJRCA9IGRhdGEuaWQ7XG4gIHJlc3VsdC5jaGFuZ2VJZGVudGlmaWVyID0gNjtcbiAgcmVzdWx0Lm92ZXJyaWRlUHJvcGVydGllcyA9IFtdO1xuICByZXN1bHQuYWxsb3dzT3ZlcnJpZGVzID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gdHJ1ZTtcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZTtcblxuICAvLyBOZWVkIHRvIGFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBiYWNrZ3JvdW5kc1xuICAvLyBOZWVkIHN1cHBvcnQgZm9yIG90aGVyIHR5cGVzIG9mIGJhY2tncm91bmRzXG4gIGlmKGRhdGEuYmFja2dyb3VuZHMubGVuZ3RoID49IDEpIHtcbiAgICBpZihkYXRhLmJhY2tncm91bmRzWzBdLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IgPSB7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgXCJhbHBoYVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLm9wYWNpdHksXG4gICAgICAgIFwiYmx1ZVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLmIsXG4gICAgICAgIFwiZ3JlZW5cIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5nLFxuICAgICAgICBcInJlZFwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJlc3VsdC5oYXNCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSBmYWxzZTtcbiAgcmVzdWx0Lmdyb3VwTGF5b3V0ID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiTVNJbW11dGFibGVGcmVlZm9ybUdyb3VwTGF5b3V0XCJcbiAgfVxuICByZXN1bHQuaG9yaXpvbnRhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzM2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH0sXG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWUsXG4gIHJlc3VsdC52ZXJ0aWNhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzA2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaG9yaXpvbnRhbFNwYWNpbmcgPSAwO1xuICByZXN1bHQub3ZlcnJpZGVWYWx1ZXMgPSBbXTtcbiAgcmVzdWx0LnNjYWxlID0gMTtcbiAgcmVzdWx0LnN5bWJvbElEID0gZGF0YS5jb21wb25lbnRJZDtcbiAgcmVzdWx0LnZlcnRpY2FsU3BhY2luZyA9IDA7XG5cbiAgY29uc3Qgb3ZlcnJpZGVzID0gW107XG5cbiAgZGF0YS5jaGlsZHJlbi5tYXAoKG92ZXJyaWRlKSA9PiB7XG4gICAgY29uc3QgZWxlbUlkID0gb3ZlcnJpZGUuaWQuc3BsaXQoXCI7XCIpO1xuXG4gICAgaWYob3ZlcnJpZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICBvdmVycmlkZXMucHVzaCh7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwib3ZlcnJpZGVWYWx1ZVwiLFxuICAgICAgICBcImRvX29iamVjdElEXCI6IGVsZW1JZFswXSxcbiAgICAgICAgXCJvdmVycmlkZU5hbWVcIjogYCR7ZWxlbUlkWzFdfV9zdHJpbmdWYWx1ZWAsXG4gICAgICAgIFwidmFsdWVcIjogb3ZlcnJpZGUuY2hhcmFjdGVyc1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXN1bHQub3ZlcnJpZGVWYWx1ZXMgPSBvdmVycmlkZXM7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0eXBlID09PSBcIlBBU1NfVEhST1VHSFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJOT1JNQUxcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiREFSS0VOXCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIk1VTFRJUExZXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTE9SX0JVUk5cIikge1xuICAgIHJldHVybiAzO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTElHSFRFTlwiKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTQ1JFRU5cIikge1xuICAgIHJldHVybiA1O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09MT1JfRE9ER0VcIikge1xuICAgIHJldHVybiA2O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiT1ZFUkxBWVwiKSB7XG4gICAgcmV0dXJuIDc7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTT0ZUX0xJR0hUXCIpIHtcbiAgICByZXR1cm4gODtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkhBUkRfTElHSFRcIikge1xuICAgIHJldHVybiA5O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRElGRkVSRU5DRVwiKSB7XG4gICAgcmV0dXJuIDEwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRVhDTFVTSU9OXCIpIHtcbiAgICByZXR1cm4gMTE7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJIVUVcIikge1xuICAgIHJldHVybiAxMjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNBVFVSQVRJT05cIikge1xuICAgIHJldHVybiAxMztcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTE9SXCIpIHtcbiAgICByZXR1cm4gMTQ7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJMVU1JTk9TSVRZXCIpIHtcbiAgICByZXR1cm4gMTU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQpIHtcblxuICBsZXQgeFBvc2l0aW9uID0gMDtcbiAgbGV0IHlQb3NpdGlvbiA9IDA7XG4gIGlmIChwYXJlbnQueCkge1xuICAgIGlmIChjaGlsZC54ID4gcGFyZW50LngpIHtcbiAgICAgIHhQb3NpdGlvbiA9IE1hdGguYWJzKGNoaWxkLnggLSBwYXJlbnQueCk7XG4gICAgfVxuICAgIGlmIChjaGlsZC55ID4gcGFyZW50LnkpIHtcbiAgICAgIHlQb3NpdGlvbiA9IE1hdGguYWJzKGNoaWxkLnkgLSBwYXJlbnQueSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHhQb3NpdGlvbiA9IGNoaWxkLng7XG4gICAgeVBvc2l0aW9uID0gY2hpbGQueTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogeFBvc2l0aW9uLFxuICAgIHk6IHlQb3NpdGlvblxuICB9XG59O1xuIiwiY29uc3QgYmxlbmRNb2RlID0gcmVxdWlyZSgnLi9ibGVuZE1vZGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInN0eWxlXCIsXG4gICAgXCJlbmRNYXJrZXJUeXBlXCI6IDAsXG4gICAgXCJtaXRlckxpbWl0XCI6IDEwLFxuICAgIFwic3RhcnRNYXJrZXJUeXBlXCI6IDAsXG4gICAgXCJ3aW5kaW5nUnVsZVwiOiAwLCAvLyBOT05aRVJPXG4gIH07XG5cbiAgaWYgKGRhdGEuYmxlbmRNb2RlKSB7XG4gICAgc3R5bGUuY29udGV4dFNldHRpbmdzID0ge1xuICAgICAgXCJfY2xhc3NcIjogXCJncmFwaGljc0NvbnRleHRTZXR0aW5nc1wiLFxuICAgICAgXCJibGVuZE1vZGVcIjogYmxlbmRNb2RlKGRhdGEuYmxlbmRNb2RlKVxuICAgIH1cblxuICAgIGlmIChkYXRhLm9wYWNpdHkpIHtcbiAgICAgIHN0eWxlLmNvbnRleHRTZXR0aW5ncy5vcGFjaXR5ID0gZGF0YS5vcGFjaXR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5jb250ZXh0U2V0dGluZ3Mub3BhY2l0eSA9IDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5zdHJva2VzKSAmJiBkYXRhLnN0cm9rZXMubGVuZ3RoKSB7XG4gICAgbGV0IG5ld0JvcmRlcnMgPSBbXTtcbiAgICBkYXRhLnN0cm9rZXMuZm9yRWFjaChmdW5jdGlvbihib3JkZXIpIHtcblxuICAgICAgLy8gQ29udmVydCB0aGUgcG9zaXRpb24gLSBpbnNpZGUsIGNlbnRlciwgb3V0c2lkZVxuICAgICAgbGV0IHBvc2l0aW9uID0gJyc7XG4gICAgICBpZiAoZGF0YS5zdHJva2VBbGlnbiA9PT0gJ0lOU0lERScpIHtcbiAgICAgICAgcG9zaXRpb24gPSAgMTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdHJva2VBbGlnbiA9PT0gJ09VVFNJREUnKSB7XG4gICAgICAgIHBvc2l0aW9uID0gIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvbiA9ICAwO1xuICAgICAgfVxuXG4gICAgICBsZXQgY29sb3IgPSAnJztcbiAgICAgIGlmIChib3JkZXIudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICBjb2xvciA9IHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgICAgXCJhbHBoYVwiOiBib3JkZXIub3BhY2l0eSxcbiAgICAgICAgICBcImJsdWVcIjogYm9yZGVyLmNvbG9yLmIsXG4gICAgICAgICAgXCJncmVlblwiOiBib3JkZXIuY29sb3IuZyxcbiAgICAgICAgICBcInJlZFwiOiBib3JkZXIuY29sb3IuclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBncmFkaWVudCA9ICcnO1xuICAgICAgaWYgKGJvcmRlci50eXBlID09PSAnR1JBRElFTlRfTElORUFSJykge1xuICAgICAgICAvLyBUT0RPOiBBZGQgc3VwcG9ydCBmb3IgR3JhZGllbnRzXG4gICAgICB9XG5cbiAgICAgIG5ld0JvcmRlcnMucHVzaCh7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiYm9yZGVyXCIsXG4gICAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICAgIFwiY29sb3JcIjogY29sb3IsXG4gICAgICAgIFwiZmlsbFR5cGVcIjogMCxcbiAgICAgICAgXCJwb3NpdGlvblwiOiBwb3NpdGlvbixcbiAgICAgICAgXCJ0aGlja25lc3NcIjogZGF0YS5zdHJva2VXZWlnaHRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc3R5bGUuYm9yZGVycyA9IG5ld0JvcmRlcnM7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmZpbGxzKSAmJiBkYXRhLmZpbGxzLmxlbmd0aCkge1xuICAgIGxldCBuZXdGaWxscyA9IFtdO1xuICAgIGRhdGEuZmlsbHMuZm9yRWFjaChmdW5jdGlvbihmaWxsKSB7XG4gICAgICBpZiAoZmlsbC50eXBlID09PSAnSU1BR0UnKSB7XG4gICAgICAgIG5ld0ZpbGxzLnB1c2goe1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiZmlsbFwiLFxuICAgICAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICAgICAgXCJmaWxsVHlwZVwiOiA0LFxuICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgXCJfY2xhc3NcIjogXCJNU0pTT05GaWxlUmVmZXJlbmNlXCIsXG4gICAgICAgICAgICBcIl9yZWZfY2xhc3NcIjogXCJNU0ltYWdlRGF0YVwiLFxuICAgICAgICAgICAgXCJfcmVmXCI6IGBpbWFnZXNcXC8ke2ZpbGwuaW1hZ2VSZWZ9LnBuZ2BcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibm9pc2VJbmRleFwiOiAwLFxuICAgICAgICAgIFwibm9pc2VJbnRlbnNpdHlcIjogMCxcbiAgICAgICAgICBcInBhdHRlcm5GaWxsVHlwZVwiOiAxLFxuICAgICAgICAgIFwicGF0dGVyblRpbGVTY2FsZVwiOiAxXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgbmV3RmlsbHMucHVzaCh7XG4gICAgICAgICAgXCJfY2xhc3NcIjogXCJmaWxsXCIsXG4gICAgICAgICAgXCJpc0VuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgIFwiYWxwaGFcIjogZmlsbC5vcGFjaXR5LFxuICAgICAgICAgICAgXCJibHVlXCI6IGZpbGwuY29sb3IuYixcbiAgICAgICAgICAgIFwiZ3JlZW5cIjogZmlsbC5jb2xvci5nLFxuICAgICAgICAgICAgXCJyZWRcIjogZmlsbC5jb2xvci5yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImZpbGxUeXBlXCI6IDAsXG4gICAgICAgICAgXCJub2lzZUluZGV4XCI6IDAsXG4gICAgICAgICAgXCJub2lzZUludGVuc2l0eVwiOiAwLFxuICAgICAgICAgIFwicGF0dGVybkZpbGxUeXBlXCI6IDEsXG4gICAgICAgICAgXCJwYXR0ZXJuVGlsZVNjYWxlXCI6IDFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdHlsZS5maWxscyA9IG5ld0ZpbGxzO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFwiUEFHRVwiKSB7XG4gICAgcmV0dXJuIFwicGFnZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgIHJldHVybiBcImFydGJvYXJkXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJHUk9VUFwiKSB7XG4gICAgcmV0dXJuIFwiZ3JvdXBcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTVBPTkVOVFwiKSB7XG4gICAgcmV0dXJuIFwic3ltYm9sTWFzdGVyXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgcmV0dXJuIFwic3ltYm9sSW5zdGFuY2VcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlJFQ1RBTkdMRVwiKSB7XG4gICAgcmV0dXJuIFwicmVjdGFuZ2xlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJFTExJUFNFXCIpIHtcbiAgICByZXR1cm4gXCJvdmFsXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJSRUdVTEFSX1BPTFlHT05cIikge1xuICAgIHJldHVybiBcInRyaWFuZ2xlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJWRUNUT1JcIikge1xuICAgIHJldHVybiBcInNoYXBlUGF0aFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgcmV0dXJuIFwidGV4dFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0LmVkaXRlZCA9IGZhbHNlO1xuICByZXN1bHQuaXNDbG9zZWQgPSB0cnVlO1xuICByZXN1bHQucG9pbnRSYWRpdXNCZWhhdmlvdXIgPSAxO1xuICByZXN1bHQucG9pbnRzID0gW3tcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAuNzc2MTQyMzc0OTAwMDAwMDQsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MC4yMjM4NTc2MjUxMDAwMDAwMSwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MC41LCAxfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDAuMjIzODU3NjI1MTAwMDAwMDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMC43NzYxNDIzNzQ5MDAwMDAwNH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMC41fVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAuMjIzODU3NjI1MTAwMDAwMDEsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MC43NzYxNDIzNzQ5MDAwMDAwNCwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MC41LCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDAuNzc2MTQyMzc0OTAwMDAwMDR9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMC4yMjM4NTc2MjUxMDAwMDAwMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMC41fVwiXG4gIH1dXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0LmVkaXRlZCA9IGZhbHNlO1xuICByZXN1bHQuaXNDbG9zZWQgPSB0cnVlO1xuICByZXN1bHQucG9pbnRSYWRpdXNCZWhhdmlvdXIgPSAxO1xuICByZXN1bHQucG9pbnRzID0gW3tcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInsxLCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInsxLCAxfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLCAxfVwiXG4gIH1dXG4gIHJlc3VsdC5maXhlZFJhZGl1cyA9IDA7XG4gIHJlc3VsdC5oYXNDb252ZXJ0ZWRUb05ld1JvdW5kQ29ybmVycyA9IHRydWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0LmVkaXRlZCA9IGZhbHNlO1xuICByZXN1bHQuaXNDbG9zZWQgPSB0cnVlO1xuICByZXN1bHQucG9pbnRSYWRpdXNCZWhhdmlvdXIgPSAxO1xuICByZXN1bHQucG9pbnRzID0gW3tcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAuNSwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLjUsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MC41LCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInsxLCAxfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLCAxfVwiXG4gIH1dXG4gIHJlc3VsdC5pc0VxdWlsYXRlcmFsID0gZmFsc2U7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgY29uc3QgbmV3UGF0aCA9IFtdO1xuICBjb25zdCBvYmpXaWR0aCA9IGRhdGEud2lkdGg7XG4gIGNvbnN0IG9iakhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuXG4gIGNvbnNvbGUubG9nKGRhdGEudmVjdG9yTmV0d29yayk7XG5cbiAgLy8gZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzLm1hcChzZWdtZW50ID0+IHtcbiAgLy8gICBjb25zdCB2ZXJ0aWNlID0gZGF0YS52ZWN0b3JOZXR3b3JrLnZlcnRpY2VzW3NlZ21lbnQuZW5kXTtcbiAgLy8gICBsZXQgYm9vbSA9IHtcbiAgLy8gICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAvLyAgICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgLy8gICAgIFwicG9pbnRcIjogYHske3ZlcnRpY2UueC9vYmpXaWR0aH0sICR7dmVydGljZS55L29iakhlaWdodH19YCxcbiAgLy8gICAgIFwiY3VydmVGcm9tXCI6IGB7JHtzZWdtZW50LnRhbmdlbnRTdGFydC54L29ialdpZHRofSwgJHtzZWdtZW50LnRhbmdlbnRTdGFydC55L29iakhlaWdodH19YCxcbiAgLy8gICAgIFwiY3VydmVUb1wiOiBgeyR7c2VnbWVudC50YW5nZW50RW5kLngvb2JqV2lkdGh9LCAke3NlZ21lbnQudGFuZ2VudEVuZC55L29iakhlaWdodH19YFxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBjb25zdCB0cyA9IHNlZ21lbnQudGFuZ2VudFN0YXJ0O1xuICAvLyAgIGNvbnN0IHRlID0gc2VnbWVudC50YW5nZW50RW5kO1xuICAvL1xuICAvLyAgIGlmICh0cy54ID4gMCB8fCB0cy55ID4gMCB8fCB0cy54IDwgMCB8fCB0cy55IDwgMCkge1xuICAvLyAgICAgaWYgKHRlLnggPT09IDAgJiYgdGUueSA9PT0gMCkge1xuICAvLyAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IGZhbHNlO1xuICAvLyAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSB0cnVlO1xuICAvLyAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAvLyAgICAgfVxuICAvLyAgIH0gZWxzZSBpZiAodHMueCA9PT0gMCAmJiB0cy55ID09PSAwKSB7XG4gIC8vICAgICBpZiAodGUueCA9PT0gMCAmJiB0ZS55ID09PSAwKSB7XG4gIC8vICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gZmFsc2U7XG4gIC8vICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IGZhbHNlO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSB0cnVlO1xuICAvLyAgICAgICBib29tLmhhc0N1cnZlVG8gPSBmYWxzZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgLy8gaHR0cHM6Ly93d3cuZmlnbWEuY29tL3BsdWdpbi1kb2NzL2FwaS9IYW5kbGVNaXJyb3JpbmcvXG4gIC8vICAgLy8gRmlnbWEgZG9lc24ndCBoYXZlIGN1cnZlTW9kZSAzLiBObyBuZWVkIGZvciBpdC5cbiAgLy8gICBpZiAodmVydGljZS5oYW5kbGVNaXJyb3JpbmcgPT09IFwiQU5HTEVcIikge1xuICAvLyAgICAgYm9vbS5jdXJ2ZU1vZGUgPSA0O1xuICAvLyAgIH0gZWxzZSBpZiAodmVydGljZS5oYW5kbGVNaXJyb3JpbmcgPT09IFwiQU5HTEVfQU5EX0xFTkdUSFwiKSB7XG4gIC8vICAgICBib29tLmN1cnZlTW9kZSA9IDI7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGJvb20uY3VydmVNb2RlID0gMTtcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgbmV3UGF0aC5wdXNoKGJvb20pO1xuICAvLyB9KTtcblxuICBkYXRhLnZlY3Rvck5ldHdvcmsudmVydGljZXMubWFwKCh2ZXJ0aWNlLCBrZXkpID0+IHtcbiAgICBjb25zdCBzZWdtZW50ID0gZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzW2tleV07XG4gICAgY29uc3QgdGhpbmcgPSBkYXRhLnZlY3Rvck5ldHdvcmsuc2VnbWVudHMuZmluZChpdGVtID0+IHtcbiAgICAgIHJldHVybiBpdGVtLnN0YXJ0ID09PSBrZXk7XG4gICAgfSk7XG5cbiAgICBsZXQgYm9vbSA9IHtcbiAgICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICAgIFwicG9pbnRcIjogYHske3ZlcnRpY2UueC9vYmpXaWR0aH0sICR7dmVydGljZS55L29iakhlaWdodH19YCxcbiAgICAgIFwiY3VydmVUb1wiOiBgeyR7dGhpbmcudGFuZ2VudFN0YXJ0Lngvb2JqV2lkdGh9LCAke3RoaW5nLnRhbmdlbnRTdGFydC55L29iakhlaWdodH19YCxcbiAgICAgIFwiY3VydmVGcm9tXCI6IGB7JHt0aGluZy50YW5nZW50RW5kLngvb2JqV2lkdGh9LCAke3RoaW5nLnRhbmdlbnRFbmQueS9vYmpIZWlnaHR9fWBcbiAgICB9XG5cbiAgICBpZiAodGhpbmcudGFuZ2VudFN0YXJ0LnggPT09IDAgJiYgdGhpbmcudGFuZ2VudFN0YXJ0LnkgPT09IDApIHtcbiAgICAgIGlmICh0aGluZy50YW5nZW50RW5kLnggPT09IDAgJiYgdGhpbmcudGFuZ2VudEVuZC55ID09PSAwKSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IGZhbHNlO1xuICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gZmFsc2U7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaW5nLnRhbmdlbnRFbmQueCA9PT0gMCAmJiB0aGluZy50YW5nZW50RW5kLnkgPT09IDApIHtcbiAgICAgIGlmICh0aGluZy50YW5nZW50U3RhcnQueCA9PT0gMCAmJiB0aGluZy50YW5nZW50U3RhcnQueSA9PT0gMCkge1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSBmYWxzZTtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IHRydWU7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvb20uaGFzQ3VydmVUbyA9IHRydWU7XG4gICAgICBib29tLmhhc0N1cnZlRnJvbSA9IHRydWU7XG4gICAgfVxuXG4gICAgbmV3UGF0aC5wdXNoKGJvb20pO1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhuZXdQYXRoKTtcblxuICByZXN1bHQuZWRpdGVkID0gdHJ1ZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IG5ld1BhdGg7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBcIkxFRlRcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiQ0VOVEVSXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIlJJR0hUXCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gXCJVUFBFUlwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IFwiVE9QXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIkNFTlRFUlwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJCT1RUT01cIikge1xuICAgIHJldHVybiAyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJjb25zdCB0ZXh0QWxpZ25lbWVudCA9IHJlcXVpcmUoJy4vX2hvcml6b250YWxBbGlnbmVtZW50Jyk7XG5jb25zdCB0ZXh0VmVydGljYWxBbGlnbmVtZW50ID0gcmVxdWlyZSgnLi9fdmVydGljYWxBbGlnbmVtZW50Jyk7XG5jb25zdCB0ZXh0Q2FzZSA9IHJlcXVpcmUoJy4vX3RleHRDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICAvLyBjb25zdCBjb2xvciA9IHt9O1xuICAvLyBmb3IgKGxldCBpIGluIGRhdGEuZmlsbHMpIHtcbiAgLy8gICBpZihkYXRhLmZpbGxzW2ldLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgLy8gICAgIGNvbG9yLmEgPSBkYXRhLmZpbGxzW2ldLm9wYWNpdHk7XG4gIC8vICAgICBjb2xvci5iID0gZGF0YS5maWxsc1tpXS5jb2xvci5iO1xuICAvLyAgICAgY29sb3IuZyA9IGRhdGEuZmlsbHNbaV0uY29sb3IuZztcbiAgLy8gICAgIGNvbG9yLnIgPSBkYXRhLmZpbGxzW2ldLmNvbG9yLnI7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIHJlc3VsdC5zdHlsZS50ZXh0U3R5bGUgPSB7XG4gIC8vICAgXCJfY2xhc3NcIjogXCJ0ZXh0U3R5bGVcIixcbiAgLy8gICBcImVuY29kZWRBdHRyaWJ1dGVzXCI6IHtcbiAgLy8gICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nQ29sb3JBdHRyaWJ1dGVcIjoge1xuICAvLyAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gIC8vICAgICAgIFwiYWxwaGFcIjogY29sb3IuYSxcbiAgLy8gICAgICAgXCJibHVlXCI6IGNvbG9yLmIsXG4gIC8vICAgICAgIFwiZ3JlZW5cIjogY29sb3IuZyxcbiAgLy8gICAgICAgXCJyZWRcIjogY29sb3IuclxuICAvLyAgICAgfSxcbiAgLy8gICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nRm9udEF0dHJpYnV0ZVwiOiB7XG4gIC8vICAgICAgIFwiX2NsYXNzXCI6IFwiVUlGb250RGVzY3JpcHRvclwiLFxuICAvLyAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAvLyAgICAgICAgIFwibmFtZVwiOiBkYXRhLmZvbnROYW1lLmZhbWlseSxcbiAgLy8gICAgICAgICBcInNpemVcIjogZGF0YS5mb250U2l6ZVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9LFxuICAvLyAgICAgXCJ0ZXh0U3R5bGVWZXJ0aWNhbEFsaWdubWVudEtleVwiOiAwLFxuICAvLyAgICAgXCJwYXJhZ3JhcGhTdHlsZVwiOiB7XG4gIC8vICAgICAgIFwiX2NsYXNzXCI6IFwicGFyYWdyYXBoU3R5bGVcIixcbiAgLy8gICAgICAgXCJtYXhpbXVtTGluZUhlaWdodFwiOiBkYXRhLmxpbmVIZWlnaHQudmFsdWUsXG4gIC8vICAgICAgIFwibWluaW11bUxpbmVIZWlnaHRcIjogZGF0YS5saW5lSGVpZ2h0LnZhbHVlLFxuICAvLyAgICAgICBcImFsaWdubWVudFwiOiB0ZXh0QWxpZ25lbWVudChkYXRhLnRleHRBbGlnbkhvcml6b250YWwpXG4gIC8vICAgICB9LFxuICAvLyAgICAgXCJrZXJuaW5nXCI6IGRhdGEubGV0dGVyU3BhY2luZy52YWx1ZVxuICAvLyAgIH0sXG4gIC8vICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiB0ZXh0VmVydGljYWxBbGlnbmVtZW50KGRhdGEudGV4dEFsaWduVmVydGljYWwpXG4gIC8vIH07XG4gIC8vIHJlc3VsdC5hdHRyaWJ1dGVkU3RyaW5nID0ge1xuICAvLyAgIFwiX2NsYXNzXCI6IFwiYXR0cmlidXRlZFN0cmluZ1wiLFxuICAvLyAgIFwic3RyaW5nXCI6IGRhdGEuY2hhcmFjdGVycyxcbiAgLy8gICBcImF0dHJpYnV0ZXNcIjogW3tcbiAgLy8gICAgIFwiX2NsYXNzXCI6IFwic3RyaW5nQXR0cmlidXRlXCIsXG4gIC8vICAgICBcImxvY2F0aW9uXCI6IDAsXG4gIC8vICAgICBcImxlbmd0aFwiOiBkYXRhLmNoYXJhY3RlcnMubGVuZ3RoLFxuICAvLyAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgLy8gICAgICAgXCJNU0F0dHJpYnV0ZWRTdHJpbmdGb250QXR0cmlidXRlXCI6IHtcbiAgLy8gICAgICAgICBcIl9jbGFzc1wiOiBcIlVJRm9udERlc2NyaXB0b3JcIixcbiAgLy8gICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IGRhdGEuZm9udE5hbWUuZmFtaWx5LFxuICAvLyAgICAgICAgICAgXCJzaXplXCI6IGRhdGEuZm9udFNpemVcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nQ29sb3JBdHRyaWJ1dGVcIjoge1xuICAvLyAgICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgLy8gICAgICAgICBcImFscGhhXCI6IGNvbG9yLmEsXG4gIC8vICAgICAgICAgXCJibHVlXCI6IGNvbG9yLmIsXG4gIC8vICAgICAgICAgXCJncmVlblwiOiBjb2xvci5nLFxuICAvLyAgICAgICAgIFwicmVkXCI6IGNvbG9yLnJcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAgXCJwYXJhZ3JhcGhTdHlsZVwiOiB7XG4gIC8vICAgICAgICAgXCJfY2xhc3NcIjogXCJwYXJhZ3JhcGhTdHlsZVwiLFxuICAvLyAgICAgICAgIFwiYWxpZ25tZW50XCI6IHRleHRBbGlnbmVtZW50KGRhdGEudGV4dEFsaWduSG9yaXpvbnRhbClcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1dXG4gIC8vIH07XG5cbiAgLy8gaWYgKGRhdGEudGV4dENhc2UpIHtcbiAgLy8gICByZXN1bHQuc3R5bGUudGV4dFN0eWxlLmVuY29kZWRBdHRyaWJ1dGVzLk1TQXR0cmlidXRlZFN0cmluZ1RleHRUcmFuc2Zvcm1BdHRyaWJ1dGUgPSAxO1xuICAvLyAgIHJlc3VsdC5hdHRyaWJ1dGVkU3RyaW5nLmF0dHJpYnV0ZXNbMF0uYXR0cmlidXRlcy5NU0F0dHJpYnV0ZWRTdHJpbmdUZXh0VHJhbnNmb3JtQXR0cmlidXRlID0gdGV4dENhc2UoZGF0YS50ZXh0Q2FzZSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gcmVzdWx0LmF1dG9tYXRpY2FsbHlEcmF3T25VbmRlcmx5aW5nUGF0aCA9IGZhbHNlO1xuICAvLyByZXN1bHQuZG9udFN5bmNocm9uaXNlV2l0aFN5bWJvbCA9IGZhbHNlO1xuICAvLyByZXN1bHQuZ2x5cGhCb3VuZHMgPSBcInt7MCwgNH0sIHszOCwgOH19XCI7XG4gIC8vIHJlc3VsdC5saW5lU3BhY2luZ0JlaGF2aW91ciA9IDI7XG4gIC8vIHJlc3VsdC50ZXh0QmVoYXZpb3VyID0gMjtcbn1cbiIsIi8vIE1PVkUgVE8gRVM2IGltcG9ydHMgYW5kIFRTP1xuY29uc3QgdHlwZSA9IHJlcXVpcmUoJy4vaGVscGVycy90eXBlJyk7XG5jb25zdCBzZXRTdHlsZSA9IHJlcXVpcmUoJy4vaGVscGVycy9zdHlsZScpO1xuY29uc3QgcG9zaXRpb24gPSByZXF1aXJlKCcuL2hlbHBlcnMvcG9zaXRpb24nKTtcbmNvbnN0IGNhbnZhcyA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9jYW52YXMnKTtcbmNvbnN0IGZyYW1lID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2ZyYW1lJyk7XG5jb25zdCBncm91cCA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9ncm91cCcpO1xuY29uc3QgY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2NvbXBvbmVudCcpO1xuY29uc3QgaW5zdGFuY2UgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvaW5zdGFuY2UnKTtcbmNvbnN0IHJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vc2hhcGVzL3JlY3RhbmdsZScpO1xuY29uc3QgdHJpYW5nbGUgPSByZXF1aXJlKCcuL3NoYXBlcy90cmlhbmdsZScpO1xuY29uc3QgZWxsaXBzZSA9IHJlcXVpcmUoJy4vc2hhcGVzL2VsbGlwc2UnKTtcbmNvbnN0IHZlY3RvciA9IHJlcXVpcmUoJy4vc2hhcGVzL3ZlY3RvcicpO1xuY29uc3QgdGV4dCA9IHJlcXVpcmUoJy4vdGV4dC9pbmRleCcpO1xuXG5jb25zdCB0cmFuc2Zvcm0gPSAoZGF0YSwgcGFyZW50ID0ge30pID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgLy8gQ2FuIHRoZXNlIGp1c3QgYmUgZGVmaW5lZCB1cCBmcm9udD9cbiAgcmVzdWx0Ll9jbGFzcyA9IHR5cGUoZGF0YS50eXBlKSxcbiAgcmVzdWx0LmRvX29iamVjdElEID0gZGF0YS5pZDtcbiAgcmVzdWx0LmJvb2xlYW5PcGVyYXRpb24gPSAtMTtcbiAgcmVzdWx0LmV4cG9ydE9wdGlvbnMgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJleHBvcnRPcHRpb25zXCIsXG4gICAgXCJleHBvcnRGb3JtYXRzXCI6IFtdLFxuICAgIFwiaW5jbHVkZWRMYXllcklkc1wiOiBbXSxcbiAgICBcImxheWVyT3B0aW9uc1wiOiAwLFxuICAgIFwic2hvdWxkVHJpbVwiOiBmYWxzZVxuICB9O1xuICByZXN1bHQuZnJhbWUgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJyZWN0XCIsXG4gICAgXCJjb25zdHJhaW5Qcm9wb3J0aW9uc1wiOiBmYWxzZSxcbiAgfTtcbiAgcmVzdWx0LmlzRml4ZWRUb1ZpZXdwb3J0ID0gZmFsc2U7XG4gIHJlc3VsdC5pc0ZsaXBwZWRIb3Jpem9udGFsID0gZmFsc2U7XG4gIHJlc3VsdC5pc0ZsaXBwZWRWZXJ0aWNhbCA9IGZhbHNlO1xuICByZXN1bHQuaXNMb2NrZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzVmlzaWJsZSA9IHRydWU7XG4gIHJlc3VsdC5sYXllckxpc3RFeHBhbmRlZFR5cGUgPSAwO1xuICByZXN1bHQubmFtZSA9IGRhdGEubmFtZTtcbiAgcmVzdWx0Lm5hbWVJc0ZpeGVkID0gZmFsc2U7XG4gIHJlc3VsdC5yZXNpemluZ0NvbnN0cmFpbnQgPSA2MztcbiAgcmVzdWx0LnJlc2l6aW5nVHlwZSA9IDA7XG4gIHJlc3VsdC5yb3RhdGlvbiA9IDA7XG4gIHJlc3VsdC5zaG91bGRCcmVha01hc2tDaGFpbiA9IGZhbHNlO1xuICByZXN1bHQuY2xpcHBpbmdNYXNrTW9kZSA9IDA7XG4gIHJlc3VsdC5oYXNDbGlwcGluZ01hc2sgPSBmYWxzZTtcbiAgcmVzdWx0LnN0eWxlID0gc2V0U3R5bGUoZGF0YSk7XG5cbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XG5cbiAgLy8gVGhpcyBpcyB0byB1cGRhdGUgdGhlIHBvc2l0aW9uIHRvIGJlIHJlbGF0aXZlIGFuZCBub3QgYWJzb2x1dGUuXG4gIC8vIFNrZXRjaCB1c2VzIHJlbGF0aXZlIHBvc2l0aW9uIHRvIGl0cyBwYXJlbnQuXG4gIC8vIFBhZ2UgaXMgdGhlIHRvcCBsZXZlbCBzbyBvYnZpb3VzbHkgZG9lc24ndCBuZWVkIHRoaXMgY29kZVxuICBpZiAoZGF0YS50eXBlICE9PSAnUEFHRScpIHtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uKHBhcmVudCwgZGF0YSk7XG4gICAgcmVzdWx0LmZyYW1lLnggPSBkYXRhLng7XG4gICAgcmVzdWx0LmZyYW1lLnkgPSBkYXRhLnk7XG4gICAgcmVzdWx0LmZyYW1lLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgIHJlc3VsdC5mcmFtZS53aWR0aCA9ICBkYXRhLndpZHRoO1xuICB9XG5cbiAgLy8gVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVuIC0gUmVjdXJzaW9uIHRvIGNyZWF0ZSBhbGwgdGhlIGxheWVycy5cbiAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcbiAgICByZXN1bHQubGF5ZXJzID0gZGF0YS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gdHJhbnNmb3JtKGNoaWxkLCBkYXRhKSk7XG4gIH1cblxuICAvLyBFYWNoIGNhc2UgbmVlZCB0byBiZSB1cGRhdGVkIHVzaW5nIEZpZ21hIHBsdWdpbiBBUEkuXG4gIC8vIFRoZSBzdHJ1Y3R1cmUgaXNuJ3QgdGhlIHNhbWUgYXMgdGhlIFJFU1QgQVBJXG4gIHN3aXRjaChkYXRhLnR5cGUpIHtcbiAgICBjYXNlICdQQUdFJzpcbiAgICAgIGNhbnZhcyhkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRlJBTUUnOlxuICAgICAgZnJhbWUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0dST1VQJzpcbiAgICAgIGdyb3VwKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdDT01QT05FTlQnOlxuICAgICAgY29tcG9uZW50KGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdJTlNUQU5DRSc6XG4gICAgICBpbnN0YW5jZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUkVDVEFOR0xFJzpcbiAgICAgIHJlY3RhbmdsZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRUxMSVBTRSc6XG4gICAgICBlbGxpcHNlKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdSRUdVTEFSX1BPTFlHT04nOlxuICAgICAgdHJpYW5nbGUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1ZFQ1RPUic6XG4gICAgICB2ZWN0b3IoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1RFWFQnOlxuICAgICAgdGV4dChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9