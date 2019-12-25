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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


figma.showUI(__html__);
figma.ui.onmessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    switch (message.type) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["CONVERT_PAGES"]:
            const figmaPages = figma.root.children;
            const sketchPages = figmaPages.map(page => Object(_converter_transformer__WEBPACK_IMPORTED_MODULE_1__["transform"])(page));
            const imageBytes = yield Promise.all(_converter_transformer__WEBPACK_IMPORTED_MODULE_1__["images"].map(image => image.file.getBytesAsync()));
            const imageNames = _converter_transformer__WEBPACK_IMPORTED_MODULE_1__["images"].map(image => image.name);
            figma.ui.postMessage({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__["PAGES_CONVERTED"],
                payload: { figmaPages, sketchPages, imageBytes, imageNames },
            });
            break;
        default:
            break;
    }
});


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
const CONVERT_PAGES = 'CONVERT_PAGES';
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

module.exports = function(data, imageFiles) {
  const style = {
    _class: 'style',
    endMarkerType: 0,
    miterLimit: 10,
    startMarkerType: 0,
    windingRule: 0, // NONZERO
  };

  if (data.blendMode) {
    style.contextSettings = {
      _class: 'graphicsContextSettings',
      blendMode: blendMode(data.blendMode),
    };

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
        position = 1;
      } else if (data.strokeAlign === 'OUTSIDE') {
        position = 2;
      } else {
        position = 0;
      }

      let color = '';
      if (border.type === 'SOLID') {
        color = {
          _class: 'color',
          alpha: border.opacity,
          blue: border.color.b,
          green: border.color.g,
          red: border.color.r,
        };
      }

      let gradient = '';
      if (border.type === 'GRADIENT_LINEAR') {
        // TODO: Add support for Gradients
      }

      newBorders.push({
        _class: 'border',
        isEnabled: true,
        color: color,
        fillType: 0,
        position: position,
        thickness: data.strokeWeight,
      });
    });

    style.borders = newBorders;
  }

  if (Array.isArray(data.fills) && data.fills.length) {
    let newFills = [];

    data.fills.forEach(function(fill) {
      if (fill.type === 'IMAGE') {
        imageFiles.push({
          name: fill.imageHash,
          file: figma.getImageByHash(fill.imageHash),
        });

        newFills.push({
          _class: 'fill',
          isEnabled: true,
          fillType: 4,
          image: {
            _class: 'MSJSONFileReference',
            _ref_class: 'MSImageData',
            _ref: `images\/${fill.imageHash}.png`,
          },
          noiseIndex: 0,
          noiseIntensity: 0,
          patternFillType: 1,
          patternTileScale: 1,
        });
      } else if (fill.type === 'SOLID') {
        newFills.push({
          _class: 'fill',
          isEnabled: true,
          color: {
            _class: 'color',
            alpha: fill.opacity,
            blue: fill.color.b,
            green: fill.color.g,
            red: fill.color.r,
          },
          fillType: 0,
          noiseIndex: 0,
          noiseIntensity: 0,
          patternFillType: 1,
          patternTileScale: 1,
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
  const segments = data.vectorNetwork.segments;
  let vertices = data.vectorNetwork.vertices;

  console.log(vertices);

  // Faraz - Problem here. I don't know why but it blocks when I try to do anything on vertices.
  // Check this doc: https://www.figma.com/file/6xCBaLyNHjny5mF5zaxwUE/Abracadabra-Not-working?node-id=0%3A1
  if(vertices.length !== segments.length) {
    // let popped = vertices.pop();
    // console.log(vertices);
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
/*! exports provided: transform, images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return imageFiles; });
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

let imageFiles = [];

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
    style: setStyle(data, imageFiles),
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




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9ncm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL2JsZW5kTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL2VsbGlwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvcmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL3RyaWFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvc2hhcGVzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvX2hvcml6b250YWxBbGlnbmVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9fdGV4dENhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L192ZXJ0aWNhbEFsaWduZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUM2RDtBQUNEO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0RBQWE7QUFDMUI7QUFDQSx1REFBdUQsd0VBQVM7QUFDaEUs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LENBQUMsaUVBQXFCO0FBQzVDLGNBQWMsbUJBQU8sQ0FBQywrREFBb0I7QUFDMUMsY0FBYyxtQkFBTyxDQUFDLCtEQUFvQjtBQUMxQyxrQkFBa0IsbUJBQU8sQ0FBQyx1RUFBd0I7QUFDbEQsaUJBQWlCLG1CQUFPLENBQUMscUVBQXVCO0FBQ2hELGtCQUFrQixtQkFBTyxDQUFDLCtEQUFvQjtBQUM5QyxpQkFBaUIsbUJBQU8sQ0FBQyw2REFBbUI7QUFDNUMsZ0JBQWdCLG1CQUFPLENBQUMsMkRBQWtCO0FBQzFDLGVBQWUsbUJBQU8sQ0FBQyx5REFBaUI7QUFDeEMsYUFBYSxtQkFBTyxDQUFDLG1EQUFjOztBQUVuQzs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRTJDIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDT05WRVJUX1BBR0VTLCBQQUdFU19DT05WRVJURUQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm0sIGltYWdlcyB9IGZyb20gJy4vY29udmVydGVyL3RyYW5zZm9ybWVyJztcbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobWVzc2FnZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDT05WRVJUX1BBR0VTOlxuICAgICAgICAgICAgY29uc3QgZmlnbWFQYWdlcyA9IGZpZ21hLnJvb3QuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBza2V0Y2hQYWdlcyA9IGZpZ21hUGFnZXMubWFwKHBhZ2UgPT4gdHJhbnNmb3JtKHBhZ2UpKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQnl0ZXMgPSB5aWVsZCBQcm9taXNlLmFsbChpbWFnZXMubWFwKGltYWdlID0+IGltYWdlLmZpbGUuZ2V0Qnl0ZXNBc3luYygpKSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZU5hbWVzID0gaW1hZ2VzLm1hcChpbWFnZSA9PiBpbWFnZS5uYW1lKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBQQUdFU19DT05WRVJURUQsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogeyBmaWdtYVBhZ2VzLCBza2V0Y2hQYWdlcywgaW1hZ2VCeXRlcywgaW1hZ2VOYW1lcyB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuIiwiZXhwb3J0IGNvbnN0IENPTlZFUlRfUEFHRVMgPSAnQ09OVkVSVF9QQUdFUyc7XG5leHBvcnQgY29uc3QgUEFHRVNfQ09OVkVSVEVEID0gJ1BBR0VTX0NPTlZFUlRFRCc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmdyb3VwTGF5b3V0ID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiTVNJbW11dGFibGVGcmVlZm9ybUdyb3VwTGF5b3V0XCJcbiAgfTtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IHRydWU7XG4gIHJlc3VsdC5ob3Jpem9udGFsUnVsZXJEYXRhID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicnVsZXJEYXRhXCIsXG4gICAgXCJiYXNlXCI6IC0zMzYsXG4gICAgXCJndWlkZXNcIjogW11cbiAgfTtcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZTtcbiAgcmVzdWx0LnZlcnRpY2FsUnVsZXJEYXRhID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicnVsZXJEYXRhXCIsXG4gICAgXCJiYXNlXCI6IC0zMDYsXG4gICAgXCJndWlkZXNcIjogW11cbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gdHJ1ZTtcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZTtcblxuICAvLyBOZWVkIHRvIGFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBiYWNrZ3JvdW5kc1xuICAvLyBOZWVkIHN1cHBvcnQgZm9yIG90aGVyIHR5cGVzIG9mIGJhY2tncm91bmRzXG4gIGlmKGRhdGEuYmFja2dyb3VuZHMubGVuZ3RoID49IDEpIHtcbiAgICBpZihkYXRhLmJhY2tncm91bmRzWzBdLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IgPSB7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgXCJhbHBoYVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLm9wYWNpdHksXG4gICAgICAgIFwiYmx1ZVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLmIsXG4gICAgICAgIFwiZ3JlZW5cIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5nLFxuICAgICAgICBcInJlZFwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJlc3VsdC5oYXNCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xuICByZXN1bHQuaW5jbHVkZUJhY2tncm91bmRDb2xvckluSW5zdGFuY2UgPSB0cnVlO1xuICByZXN1bHQuc3ltYm9sSUQgPSBkYXRhLmlkO1xuICByZXN1bHQuY2hhbmdlSWRlbnRpZmllciA9IDY7XG4gIHJlc3VsdC5vdmVycmlkZVByb3BlcnRpZXMgPSBbXTtcbiAgcmVzdWx0LmFsbG93c092ZXJyaWRlcyA9IHRydWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IHRydWU7XG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWU7XG5cbiAgLy8gTmVlZCB0byBhZGQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgYmFja2dyb3VuZHNcbiAgLy8gTmVlZCBzdXBwb3J0IGZvciBvdGhlciB0eXBlcyBvZiBiYWNrZ3JvdW5kc1xuICBpZihkYXRhLmJhY2tncm91bmRzLmxlbmd0aCA+PSAxKSB7XG4gICAgaWYoZGF0YS5iYWNrZ3JvdW5kc1swXS50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICByZXN1bHQuYmFja2dyb3VuZENvbG9yID0ge1xuICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgIFwiYWxwaGFcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5vcGFjaXR5LFxuICAgICAgICBcImJsdWVcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5iLFxuICAgICAgICBcImdyZWVuXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuZyxcbiAgICAgICAgXCJyZWRcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5yXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXN1bHQuaGFzQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gZmFsc2U7XG4gIHJlc3VsdC5ncm91cExheW91dCA9IHtcbiAgICBcIl9jbGFzc1wiOiBcIk1TSW1tdXRhYmxlRnJlZWZvcm1Hcm91cExheW91dFwiXG4gIH1cbiAgcmVzdWx0Lmhvcml6b250YWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMzNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9LFxuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlLFxuICByZXN1bHQudmVydGljYWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMwNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhvcml6b250YWxTcGFjaW5nID0gMDtcbiAgcmVzdWx0Lm92ZXJyaWRlVmFsdWVzID0gW107XG4gIHJlc3VsdC5zY2FsZSA9IDE7XG4gIHJlc3VsdC5zeW1ib2xJRCA9IGRhdGEuY29tcG9uZW50SWQ7XG4gIHJlc3VsdC52ZXJ0aWNhbFNwYWNpbmcgPSAwO1xuXG4gIGNvbnN0IG92ZXJyaWRlcyA9IFtdO1xuXG4gIGRhdGEuY2hpbGRyZW4ubWFwKChvdmVycmlkZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1JZCA9IG92ZXJyaWRlLmlkLnNwbGl0KFwiO1wiKTtcblxuICAgIGlmKG92ZXJyaWRlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgb3ZlcnJpZGVzLnB1c2goe1xuICAgICAgICBcIl9jbGFzc1wiOiBcIm92ZXJyaWRlVmFsdWVcIixcbiAgICAgICAgXCJkb19vYmplY3RJRFwiOiBlbGVtSWRbMF0sXG4gICAgICAgIFwib3ZlcnJpZGVOYW1lXCI6IGAke2VsZW1JZFsxXX1fc3RyaW5nVmFsdWVgLFxuICAgICAgICBcInZhbHVlXCI6IG92ZXJyaWRlLmNoYXJhY3RlcnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVzdWx0Lm92ZXJyaWRlVmFsdWVzID0gb3ZlcnJpZGVzO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodHlwZSA9PT0gXCJQQVNTX1RIUk9VR0hcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTk9STUFMXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkRBUktFTlwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJNVUxUSVBMWVwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT0xPUl9CVVJOXCIpIHtcbiAgICByZXR1cm4gMztcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkxJR0hURU5cIikge1xuICAgIHJldHVybiA0O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU0NSRUVOXCIpIHtcbiAgICByZXR1cm4gNTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTE9SX0RPREdFXCIpIHtcbiAgICByZXR1cm4gNjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIk9WRVJMQVlcIikge1xuICAgIHJldHVybiA3O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU09GVF9MSUdIVFwiKSB7XG4gICAgcmV0dXJuIDg7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJIQVJEX0xJR0hUXCIpIHtcbiAgICByZXR1cm4gOTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkRJRkZFUkVOQ0VcIikge1xuICAgIHJldHVybiAxMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkVYQ0xVU0lPTlwiKSB7XG4gICAgcmV0dXJuIDExO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSFVFXCIpIHtcbiAgICByZXR1cm4gMTI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTQVRVUkFUSU9OXCIpIHtcbiAgICByZXR1cm4gMTM7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT0xPUlwiKSB7XG4gICAgcmV0dXJuIDE0O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTFVNSU5PU0lUWVwiKSB7XG4gICAgcmV0dXJuIDE1O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkKSB7XG5cbiAgbGV0IHhQb3NpdGlvbiA9IDA7XG4gIGxldCB5UG9zaXRpb24gPSAwO1xuICBpZiAocGFyZW50LngpIHtcbiAgICBpZiAoY2hpbGQueCA+IHBhcmVudC54KSB7XG4gICAgICB4UG9zaXRpb24gPSBNYXRoLmFicyhjaGlsZC54IC0gcGFyZW50LngpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQueSA+IHBhcmVudC55KSB7XG4gICAgICB5UG9zaXRpb24gPSBNYXRoLmFicyhjaGlsZC55IC0gcGFyZW50LnkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB4UG9zaXRpb24gPSBjaGlsZC54O1xuICAgIHlQb3NpdGlvbiA9IGNoaWxkLnk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHhQb3NpdGlvbixcbiAgICB5OiB5UG9zaXRpb25cbiAgfVxufTtcbiIsImNvbnN0IGJsZW5kTW9kZSA9IHJlcXVpcmUoJy4vYmxlbmRNb2RlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZGF0YSwgaW1hZ2VGaWxlcykge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBfY2xhc3M6ICdzdHlsZScsXG4gICAgZW5kTWFya2VyVHlwZTogMCxcbiAgICBtaXRlckxpbWl0OiAxMCxcbiAgICBzdGFydE1hcmtlclR5cGU6IDAsXG4gICAgd2luZGluZ1J1bGU6IDAsIC8vIE5PTlpFUk9cbiAgfTtcblxuICBpZiAoZGF0YS5ibGVuZE1vZGUpIHtcbiAgICBzdHlsZS5jb250ZXh0U2V0dGluZ3MgPSB7XG4gICAgICBfY2xhc3M6ICdncmFwaGljc0NvbnRleHRTZXR0aW5ncycsXG4gICAgICBibGVuZE1vZGU6IGJsZW5kTW9kZShkYXRhLmJsZW5kTW9kZSksXG4gICAgfTtcblxuICAgIGlmIChkYXRhLm9wYWNpdHkpIHtcbiAgICAgIHN0eWxlLmNvbnRleHRTZXR0aW5ncy5vcGFjaXR5ID0gZGF0YS5vcGFjaXR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5jb250ZXh0U2V0dGluZ3Mub3BhY2l0eSA9IDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5zdHJva2VzKSAmJiBkYXRhLnN0cm9rZXMubGVuZ3RoKSB7XG4gICAgbGV0IG5ld0JvcmRlcnMgPSBbXTtcbiAgICBkYXRhLnN0cm9rZXMuZm9yRWFjaChmdW5jdGlvbihib3JkZXIpIHtcbiAgICAgIC8vIENvbnZlcnQgdGhlIHBvc2l0aW9uIC0gaW5zaWRlLCBjZW50ZXIsIG91dHNpZGVcbiAgICAgIGxldCBwb3NpdGlvbiA9ICcnO1xuICAgICAgaWYgKGRhdGEuc3Ryb2tlQWxpZ24gPT09ICdJTlNJREUnKSB7XG4gICAgICAgIHBvc2l0aW9uID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdHJva2VBbGlnbiA9PT0gJ09VVFNJREUnKSB7XG4gICAgICAgIHBvc2l0aW9uID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uID0gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbG9yID0gJyc7XG4gICAgICBpZiAoYm9yZGVyLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgY29sb3IgPSB7XG4gICAgICAgICAgX2NsYXNzOiAnY29sb3InLFxuICAgICAgICAgIGFscGhhOiBib3JkZXIub3BhY2l0eSxcbiAgICAgICAgICBibHVlOiBib3JkZXIuY29sb3IuYixcbiAgICAgICAgICBncmVlbjogYm9yZGVyLmNvbG9yLmcsXG4gICAgICAgICAgcmVkOiBib3JkZXIuY29sb3IucixcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgbGV0IGdyYWRpZW50ID0gJyc7XG4gICAgICBpZiAoYm9yZGVyLnR5cGUgPT09ICdHUkFESUVOVF9MSU5FQVInKSB7XG4gICAgICAgIC8vIFRPRE86IEFkZCBzdXBwb3J0IGZvciBHcmFkaWVudHNcbiAgICAgIH1cblxuICAgICAgbmV3Qm9yZGVycy5wdXNoKHtcbiAgICAgICAgX2NsYXNzOiAnYm9yZGVyJyxcbiAgICAgICAgaXNFbmFibGVkOiB0cnVlLFxuICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIGZpbGxUeXBlOiAwLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIHRoaWNrbmVzczogZGF0YS5zdHJva2VXZWlnaHQsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHN0eWxlLmJvcmRlcnMgPSBuZXdCb3JkZXJzO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5maWxscykgJiYgZGF0YS5maWxscy5sZW5ndGgpIHtcbiAgICBsZXQgbmV3RmlsbHMgPSBbXTtcblxuICAgIGRhdGEuZmlsbHMuZm9yRWFjaChmdW5jdGlvbihmaWxsKSB7XG4gICAgICBpZiAoZmlsbC50eXBlID09PSAnSU1BR0UnKSB7XG4gICAgICAgIGltYWdlRmlsZXMucHVzaCh7XG4gICAgICAgICAgbmFtZTogZmlsbC5pbWFnZUhhc2gsXG4gICAgICAgICAgZmlsZTogZmlnbWEuZ2V0SW1hZ2VCeUhhc2goZmlsbC5pbWFnZUhhc2gpLFxuICAgICAgICB9KTtcblxuICAgICAgICBuZXdGaWxscy5wdXNoKHtcbiAgICAgICAgICBfY2xhc3M6ICdmaWxsJyxcbiAgICAgICAgICBpc0VuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZmlsbFR5cGU6IDQsXG4gICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIF9jbGFzczogJ01TSlNPTkZpbGVSZWZlcmVuY2UnLFxuICAgICAgICAgICAgX3JlZl9jbGFzczogJ01TSW1hZ2VEYXRhJyxcbiAgICAgICAgICAgIF9yZWY6IGBpbWFnZXNcXC8ke2ZpbGwuaW1hZ2VIYXNofS5wbmdgLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbm9pc2VJbmRleDogMCxcbiAgICAgICAgICBub2lzZUludGVuc2l0eTogMCxcbiAgICAgICAgICBwYXR0ZXJuRmlsbFR5cGU6IDEsXG4gICAgICAgICAgcGF0dGVyblRpbGVTY2FsZTogMSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGZpbGwudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICBuZXdGaWxscy5wdXNoKHtcbiAgICAgICAgICBfY2xhc3M6ICdmaWxsJyxcbiAgICAgICAgICBpc0VuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIF9jbGFzczogJ2NvbG9yJyxcbiAgICAgICAgICAgIGFscGhhOiBmaWxsLm9wYWNpdHksXG4gICAgICAgICAgICBibHVlOiBmaWxsLmNvbG9yLmIsXG4gICAgICAgICAgICBncmVlbjogZmlsbC5jb2xvci5nLFxuICAgICAgICAgICAgcmVkOiBmaWxsLmNvbG9yLnIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaWxsVHlwZTogMCxcbiAgICAgICAgICBub2lzZUluZGV4OiAwLFxuICAgICAgICAgIG5vaXNlSW50ZW5zaXR5OiAwLFxuICAgICAgICAgIHBhdHRlcm5GaWxsVHlwZTogMSxcbiAgICAgICAgICBwYXR0ZXJuVGlsZVNjYWxlOiAxLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0eWxlLmZpbGxzID0gbmV3RmlsbHM7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodHlwZSA9PT0gXCJQQUdFXCIpIHtcbiAgICByZXR1cm4gXCJwYWdlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgcmV0dXJuIFwiYXJ0Ym9hcmRcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkdST1VQXCIpIHtcbiAgICByZXR1cm4gXCJncm91cFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09NUE9ORU5UXCIpIHtcbiAgICByZXR1cm4gXCJzeW1ib2xNYXN0ZXJcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIklOU1RBTkNFXCIpIHtcbiAgICByZXR1cm4gXCJzeW1ib2xJbnN0YW5jZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiUkVDVEFOR0xFXCIpIHtcbiAgICByZXR1cm4gXCJyZWN0YW5nbGVcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkVMTElQU0VcIikge1xuICAgIHJldHVybiBcIm92YWxcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlJFR1VMQVJfUE9MWUdPTlwiKSB7XG4gICAgcmV0dXJuIFwidHJpYW5nbGVcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlZFQ1RPUlwiKSB7XG4gICAgcmV0dXJuIFwic2hhcGVQYXRoXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJURVhUXCIpIHtcbiAgICByZXR1cm4gXCJ0ZXh0XCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiXCJcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZWRpdGVkID0gZmFsc2U7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBbe1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MC43NzYxNDIzNzQ5MDAwMDAwNCwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInswLjIyMzg1NzYyNTEwMDAwMDAxLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInswLjUsIDF9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMC4yMjM4NTc2MjUxMDAwMDAwMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAwLjc3NjE0MjM3NDkwMDAwMDA0fVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInsxLCAwLjV9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MC4yMjM4NTc2MjUxMDAwMDAwMSwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInswLjc3NjE0MjM3NDkwMDAwMDA0LCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInswLjUsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMC43NzYxNDIzNzQ5MDAwMDAwNH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAyLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAwLjIyMzg1NzYyNTEwMDAwMDAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IHRydWUsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IHRydWUsXG4gICAgXCJwb2ludFwiOiBcInswLCAwLjV9XCJcbiAgfV1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZWRpdGVkID0gZmFsc2U7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBbe1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDF9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDF9XCJcbiAgfV1cbiAgcmVzdWx0LmZpeGVkUmFkaXVzID0gMDtcbiAgcmVzdWx0Lmhhc0NvbnZlcnRlZFRvTmV3Um91bmRDb3JuZXJzID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZWRpdGVkID0gZmFsc2U7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBbe1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MC41LCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAuNSwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLjUsIDB9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MSwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInsxLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDF9XCJcbiAgfSwge1xuICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgIFwiY29ybmVyUmFkaXVzXCI6IDAsXG4gICAgXCJjdXJ2ZUZyb21cIjogXCJ7MCwgMX1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLCAxfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDF9XCJcbiAgfV1cbiAgcmVzdWx0LmlzRXF1aWxhdGVyYWwgPSBmYWxzZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICBjb25zdCBuZXdQYXRoID0gW107XG4gIGNvbnN0IG9ialdpZHRoID0gZGF0YS53aWR0aDtcbiAgY29uc3Qgb2JqSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gIGNvbnN0IHNlZ21lbnRzID0gZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzO1xuICBsZXQgdmVydGljZXMgPSBkYXRhLnZlY3Rvck5ldHdvcmsudmVydGljZXM7XG5cbiAgY29uc29sZS5sb2codmVydGljZXMpO1xuXG4gIC8vIEZhcmF6IC0gUHJvYmxlbSBoZXJlLiBJIGRvbid0IGtub3cgd2h5IGJ1dCBpdCBibG9ja3Mgd2hlbiBJIHRyeSB0byBkbyBhbnl0aGluZyBvbiB2ZXJ0aWNlcy5cbiAgLy8gQ2hlY2sgdGhpcyBkb2M6IGh0dHBzOi8vd3d3LmZpZ21hLmNvbS9maWxlLzZ4Q0JhTHlOSGpueTVtRjV6YXh3VUUvQWJyYWNhZGFicmEtTm90LXdvcmtpbmc/bm9kZS1pZD0wJTNBMVxuICBpZih2ZXJ0aWNlcy5sZW5ndGggIT09IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgIC8vIGxldCBwb3BwZWQgPSB2ZXJ0aWNlcy5wb3AoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2ZXJ0aWNlcyk7XG4gIH1cblxuICB2ZXJ0aWNlcy5tYXAoKHZlcnRpY2UsIGtleSkgPT4ge1xuICAgIGNvbnN0IHNlZ21lbnQgPSBkYXRhLnZlY3Rvck5ldHdvcmsuc2VnbWVudHNba2V5XTtcbiAgICBjb25zdCB0aGluZyA9IGRhdGEudmVjdG9yTmV0d29yay5zZWdtZW50cy5maW5kKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0uc3RhcnQgPT09IGtleTtcbiAgICB9KTtcblxuICAgIGxldCBib29tID0ge1xuICAgICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgICAgXCJwb2ludFwiOiBgeyR7dmVydGljZS54L29ialdpZHRofSwgJHt2ZXJ0aWNlLnkvb2JqSGVpZ2h0fX1gXG4gICAgfVxuXG4gICAgLy8gVGhlIGZpcnN0IGN1cnZlUG9pbnQgd2lsbCBoYXZlIHRoZSBjdXJ2ZVRvIGZyb20gdGhlIGxhc3QgdmVydGljZVxuICAgIGlmIChrZXkgPT09IDApIHtcbiAgICAgIGNvbnN0IGN1cnZlRnJvbSA9IHRoaW5nLnRhbmdlbnRTdGFydDtcbiAgICAgIGNvbnN0IGN1cnZlVG8gPSBkYXRhLnZlY3Rvck5ldHdvcmsuc2VnbWVudHNbZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzLmxlbmd0aCAtIDFdLnRhbmdlbnRFbmQ7XG4gICAgICBib29tLmN1cnZlRnJvbSA9IGB7JHsodmVydGljZS54ICsgdGhpbmcudGFuZ2VudFN0YXJ0LngpL29ialdpZHRofSwgJHsodmVydGljZS55ICsgdGhpbmcudGFuZ2VudFN0YXJ0LnkpL29iakhlaWdodH19YDtcbiAgICAgIGJvb20uY3VydmVUbyA9IGB7JHsodmVydGljZS54ICsgY3VydmVUby54KS9vYmpXaWR0aH0sICR7KHZlcnRpY2UueSArIGN1cnZlVG8ueSkvb2JqSGVpZ2h0fX1gO1xuXG4gICAgICBpZiAoY3VydmVGcm9tLnggPT09IDAgJiYgY3VydmVGcm9tLnkgPT09IDApIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnZlVG8ueCA9PT0gMCAmJiBjdXJ2ZVRvLnkgPT09IDApIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJ2ZUZyb20gPSB0aGluZy50YW5nZW50U3RhcnQ7XG4gICAgICBjb25zdCBjdXJ2ZVRvID0gZGF0YS52ZWN0b3JOZXR3b3JrLnNlZ21lbnRzW2tleSAtIDFdLnRhbmdlbnRFbmQ7XG4gICAgICBib29tLmN1cnZlRnJvbSA9IGB7JHsodmVydGljZS54ICsgdGhpbmcudGFuZ2VudFN0YXJ0LngpL29ialdpZHRofSwgJHsodmVydGljZS55ICsgdGhpbmcudGFuZ2VudFN0YXJ0LnkpL29iakhlaWdodH19YDtcbiAgICAgIGJvb20uY3VydmVUbyA9IGB7JHsodmVydGljZS54ICsgY3VydmVUby54KS9vYmpXaWR0aH0sICR7KHZlcnRpY2UueSArIGN1cnZlVG8ueSkvb2JqSGVpZ2h0fX1gO1xuXG4gICAgICBpZiAoY3VydmVGcm9tLnggPT09IDAgJiYgY3VydmVGcm9tLnkgPT09IDApIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnZlVG8ueCA9PT0gMCAmJiBjdXJ2ZVRvLnkgPT09IDApIHtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1BhdGgucHVzaChib29tKTtcbiAgfSk7XG5cbiAgcmVzdWx0LmVkaXRlZCA9IHRydWU7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBuZXdQYXRoO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gXCJMRUZUXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIkNFTlRFUlwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJSSUdIVFwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IFwiVVBQRVJcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBcIlRPUFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJDRU5URVJcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiQk9UVE9NXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwiY29uc3QgdGV4dEFsaWduZW1lbnQgPSByZXF1aXJlKCcuL19ob3Jpem9udGFsQWxpZ25lbWVudCcpO1xuY29uc3QgdGV4dFZlcnRpY2FsQWxpZ25lbWVudCA9IHJlcXVpcmUoJy4vX3ZlcnRpY2FsQWxpZ25lbWVudCcpO1xuY29uc3QgdGV4dENhc2UgPSByZXF1aXJlKCcuL190ZXh0Q2FzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgLy8gY29uc3QgY29sb3IgPSB7fTtcbiAgLy8gZm9yIChsZXQgaSBpbiBkYXRhLmZpbGxzKSB7XG4gIC8vICAgaWYoZGF0YS5maWxsc1tpXS50eXBlID09PSAnU09MSUQnKSB7XG4gIC8vICAgICBjb2xvci5hID0gZGF0YS5maWxsc1tpXS5vcGFjaXR5O1xuICAvLyAgICAgY29sb3IuYiA9IGRhdGEuZmlsbHNbaV0uY29sb3IuYjtcbiAgLy8gICAgIGNvbG9yLmcgPSBkYXRhLmZpbGxzW2ldLmNvbG9yLmc7XG4gIC8vICAgICBjb2xvci5yID0gZGF0YS5maWxsc1tpXS5jb2xvci5yO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyByZXN1bHQuc3R5bGUudGV4dFN0eWxlID0ge1xuICAvLyAgIFwiX2NsYXNzXCI6IFwidGV4dFN0eWxlXCIsXG4gIC8vICAgXCJlbmNvZGVkQXR0cmlidXRlc1wiOiB7XG4gIC8vICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0NvbG9yQXR0cmlidXRlXCI6IHtcbiAgLy8gICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAvLyAgICAgICBcImFscGhhXCI6IGNvbG9yLmEsXG4gIC8vICAgICAgIFwiYmx1ZVwiOiBjb2xvci5iLFxuICAvLyAgICAgICBcImdyZWVuXCI6IGNvbG9yLmcsXG4gIC8vICAgICAgIFwicmVkXCI6IGNvbG9yLnJcbiAgLy8gICAgIH0sXG4gIC8vICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0ZvbnRBdHRyaWJ1dGVcIjoge1xuICAvLyAgICAgICBcIl9jbGFzc1wiOiBcIlVJRm9udERlc2NyaXB0b3JcIixcbiAgLy8gICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgLy8gICAgICAgICBcIm5hbWVcIjogZGF0YS5mb250TmFtZS5mYW1pbHksXG4gIC8vICAgICAgICAgXCJzaXplXCI6IGRhdGEuZm9udFNpemVcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSxcbiAgLy8gICAgIFwidGV4dFN0eWxlVmVydGljYWxBbGlnbm1lbnRLZXlcIjogMCxcbiAgLy8gICAgIFwicGFyYWdyYXBoU3R5bGVcIjoge1xuICAvLyAgICAgICBcIl9jbGFzc1wiOiBcInBhcmFncmFwaFN0eWxlXCIsXG4gIC8vICAgICAgIFwibWF4aW11bUxpbmVIZWlnaHRcIjogZGF0YS5saW5lSGVpZ2h0LnZhbHVlLFxuICAvLyAgICAgICBcIm1pbmltdW1MaW5lSGVpZ2h0XCI6IGRhdGEubGluZUhlaWdodC52YWx1ZSxcbiAgLy8gICAgICAgXCJhbGlnbm1lbnRcIjogdGV4dEFsaWduZW1lbnQoZGF0YS50ZXh0QWxpZ25Ib3Jpem9udGFsKVxuICAvLyAgICAgfSxcbiAgLy8gICAgIFwia2VybmluZ1wiOiBkYXRhLmxldHRlclNwYWNpbmcudmFsdWVcbiAgLy8gICB9LFxuICAvLyAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogdGV4dFZlcnRpY2FsQWxpZ25lbWVudChkYXRhLnRleHRBbGlnblZlcnRpY2FsKVxuICAvLyB9O1xuICAvLyByZXN1bHQuYXR0cmlidXRlZFN0cmluZyA9IHtcbiAgLy8gICBcIl9jbGFzc1wiOiBcImF0dHJpYnV0ZWRTdHJpbmdcIixcbiAgLy8gICBcInN0cmluZ1wiOiBkYXRhLmNoYXJhY3RlcnMsXG4gIC8vICAgXCJhdHRyaWJ1dGVzXCI6IFt7XG4gIC8vICAgICBcIl9jbGFzc1wiOiBcInN0cmluZ0F0dHJpYnV0ZVwiLFxuICAvLyAgICAgXCJsb2NhdGlvblwiOiAwLFxuICAvLyAgICAgXCJsZW5ndGhcIjogZGF0YS5jaGFyYWN0ZXJzLmxlbmd0aCxcbiAgLy8gICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gIC8vICAgICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nRm9udEF0dHJpYnV0ZVwiOiB7XG4gIC8vICAgICAgICAgXCJfY2xhc3NcIjogXCJVSUZvbnREZXNjcmlwdG9yXCIsXG4gIC8vICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBkYXRhLmZvbnROYW1lLmZhbWlseSxcbiAgLy8gICAgICAgICAgIFwic2l6ZVwiOiBkYXRhLmZvbnRTaXplXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9LFxuICAvLyAgICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0NvbG9yQXR0cmlidXRlXCI6IHtcbiAgLy8gICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gIC8vICAgICAgICAgXCJhbHBoYVwiOiBjb2xvci5hLFxuICAvLyAgICAgICAgIFwiYmx1ZVwiOiBjb2xvci5iLFxuICAvLyAgICAgICAgIFwiZ3JlZW5cIjogY29sb3IuZyxcbiAgLy8gICAgICAgICBcInJlZFwiOiBjb2xvci5yXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIFwicGFyYWdyYXBoU3R5bGVcIjoge1xuICAvLyAgICAgICAgIFwiX2NsYXNzXCI6IFwicGFyYWdyYXBoU3R5bGVcIixcbiAgLy8gICAgICAgICBcImFsaWdubWVudFwiOiB0ZXh0QWxpZ25lbWVudChkYXRhLnRleHRBbGlnbkhvcml6b250YWwpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XVxuICAvLyB9O1xuXG4gIC8vIGlmIChkYXRhLnRleHRDYXNlKSB7XG4gIC8vICAgcmVzdWx0LnN0eWxlLnRleHRTdHlsZS5lbmNvZGVkQXR0cmlidXRlcy5NU0F0dHJpYnV0ZWRTdHJpbmdUZXh0VHJhbnNmb3JtQXR0cmlidXRlID0gMTtcbiAgLy8gICByZXN1bHQuYXR0cmlidXRlZFN0cmluZy5hdHRyaWJ1dGVzWzBdLmF0dHJpYnV0ZXMuTVNBdHRyaWJ1dGVkU3RyaW5nVGV4dFRyYW5zZm9ybUF0dHJpYnV0ZSA9IHRleHRDYXNlKGRhdGEudGV4dENhc2UpO1xuICAvLyB9XG4gIC8vXG4gIC8vIHJlc3VsdC5hdXRvbWF0aWNhbGx5RHJhd09uVW5kZXJseWluZ1BhdGggPSBmYWxzZTtcbiAgLy8gcmVzdWx0LmRvbnRTeW5jaHJvbmlzZVdpdGhTeW1ib2wgPSBmYWxzZTtcbiAgLy8gcmVzdWx0LmdseXBoQm91bmRzID0gXCJ7ezAsIDR9LCB7MzgsIDh9fVwiO1xuICAvLyByZXN1bHQubGluZVNwYWNpbmdCZWhhdmlvdXIgPSAyO1xuICAvLyByZXN1bHQudGV4dEJlaGF2aW91ciA9IDI7XG59XG4iLCJjb25zdCB0eXBlID0gcmVxdWlyZSgnLi9oZWxwZXJzL3R5cGUnKTtcbmNvbnN0IHNldFN0eWxlID0gcmVxdWlyZSgnLi9oZWxwZXJzL3N0eWxlJyk7XG5jb25zdCBwb3NpdGlvbiA9IHJlcXVpcmUoJy4vaGVscGVycy9wb3NpdGlvbicpO1xuY29uc3QgY2FudmFzID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2NhbnZhcycpO1xuY29uc3QgZnJhbWUgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvZnJhbWUnKTtcbmNvbnN0IGdyb3VwID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2dyb3VwJyk7XG5jb25zdCBjb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvY29tcG9uZW50Jyk7XG5jb25zdCBpbnN0YW5jZSA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9pbnN0YW5jZScpO1xuY29uc3QgcmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9zaGFwZXMvcmVjdGFuZ2xlJyk7XG5jb25zdCB0cmlhbmdsZSA9IHJlcXVpcmUoJy4vc2hhcGVzL3RyaWFuZ2xlJyk7XG5jb25zdCBlbGxpcHNlID0gcmVxdWlyZSgnLi9zaGFwZXMvZWxsaXBzZScpO1xuY29uc3QgdmVjdG9yID0gcmVxdWlyZSgnLi9zaGFwZXMvdmVjdG9yJyk7XG5jb25zdCB0ZXh0ID0gcmVxdWlyZSgnLi90ZXh0L2luZGV4Jyk7XG5cbmxldCBpbWFnZUZpbGVzID0gW107XG5cbmNvbnN0IHRyYW5zZm9ybSA9IChkYXRhLCBwYXJlbnQgPSB7fSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgX2NsYXNzOiB0eXBlKGRhdGEudHlwZSksXG4gICAgZG9fb2JqZWN0SUQ6IGRhdGEuaWQsXG4gICAgYm9vbGVhbk9wZXJhdGlvbjogLTEsXG4gICAgZXhwb3J0T3B0aW9uczoge1xuICAgICAgX2NsYXNzOiAnZXhwb3J0T3B0aW9ucycsXG4gICAgICBleHBvcnRGb3JtYXRzOiBbXSxcbiAgICAgIGluY2x1ZGVkTGF5ZXJJZHM6IFtdLFxuICAgICAgbGF5ZXJPcHRpb25zOiAwLFxuICAgICAgc2hvdWxkVHJpbTogZmFsc2UsXG4gICAgfSxcbiAgICBmcmFtZToge1xuICAgICAgX2NsYXNzOiAncmVjdCcsXG4gICAgICBjb25zdHJhaW5Qcm9wb3J0aW9uczogZmFsc2UsXG4gICAgfSxcbiAgICBpc0ZpeGVkVG9WaWV3cG9ydDogZmFsc2UsXG4gICAgaXNGbGlwcGVkSG9yaXpvbnRhbDogZmFsc2UsXG4gICAgaXNGbGlwcGVkVmVydGljYWw6IGZhbHNlLFxuICAgIGlzTG9ja2VkOiBmYWxzZSxcbiAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgbGF5ZXJMaXN0RXhwYW5kZWRUeXBlOiAwLFxuICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICBuYW1lSXNGaXhlZDogZmFsc2UsXG4gICAgcmVzaXppbmdDb25zdHJhaW50OiA2MyxcbiAgICByZXNpemluZ1R5cGU6IDAsXG4gICAgcm90YXRpb246IDAsXG4gICAgc2hvdWxkQnJlYWtNYXNrQ2hhaW46IGZhbHNlLFxuICAgIGNsaXBwaW5nTWFza01vZGU6IDAsXG4gICAgaGFzQ2xpcHBpbmdNYXNrOiBmYWxzZSxcbiAgICBzdHlsZTogc2V0U3R5bGUoZGF0YSwgaW1hZ2VGaWxlcyksXG4gIH07XG5cbiAgaWYgKGRhdGEudHlwZSAhPT0gJ1BBR0UnKSB7XG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBwb3NpdGlvbihwYXJlbnQsIGRhdGEpO1xuICAgIHJlc3VsdC5mcmFtZS54ID0gZGF0YS54O1xuICAgIHJlc3VsdC5mcmFtZS55ID0gZGF0YS55O1xuICAgIHJlc3VsdC5mcmFtZS5oZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICByZXN1bHQuZnJhbWUud2lkdGggPSBkYXRhLndpZHRoO1xuICB9XG5cbiAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcbiAgICByZXN1bHQubGF5ZXJzID0gZGF0YS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gdHJhbnNmb3JtKGNoaWxkLCBkYXRhKSk7XG4gIH1cblxuICBzd2l0Y2ggKGRhdGEudHlwZSkge1xuICAgIGNhc2UgJ1BBR0UnOlxuICAgICAgY2FudmFzKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdGUkFNRSc6XG4gICAgICBmcmFtZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnR1JPVVAnOlxuICAgICAgZ3JvdXAoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0NPTVBPTkVOVCc6XG4gICAgICBjb21wb25lbnQoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0lOU1RBTkNFJzpcbiAgICAgIGluc3RhbmNlKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdSRUNUQU5HTEUnOlxuICAgICAgcmVjdGFuZ2xlKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFTExJUFNFJzpcbiAgICAgIGVsbGlwc2UoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1JFR1VMQVJfUE9MWUdPTic6XG4gICAgICB0cmlhbmdsZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnVkVDVE9SJzpcbiAgICAgIHZlY3RvcihkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnVEVYVCc6XG4gICAgICB0ZXh0KGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgeyB0cmFuc2Zvcm0sIGltYWdlRmlsZXMgYXMgaW1hZ2VzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9