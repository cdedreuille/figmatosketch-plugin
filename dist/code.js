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

/***/ "./node_modules/d-path-parser/parser.js":
/*!**********************************************!*\
  !*** ./node_modules/d-path-parser/parser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * d-path-parser - v1.0.0
 * by Massimo Artizzu (MaxArt2501)
 *
 * https://github.com/MaxArt2501/d-path-parser
 *
 * Licensed under the MIT License
 * See LICENSE for details
 */

(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this, function() {
"use strict";

return function parse(d) {
    var re = {
        command: /\s*([achlmqstvz])/gi,
        number: /\s*([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/gi,
        comma: /\s*(?:(,)|\s)/g,
        flag: /\s*([01])/g
    };
    var matchers = {
        "number": function(must) {
            return +get("number", must);
        },
        "coordinate pair": function(must) {
            var x = get("number", must);
            if (x === null && !must) return null;
            get("comma");
            var y = get("number", true);
            return { x: +x, y: +y };
        },
        "arc definition": function(must) {
            var radii = matchers["coordinate pair"](must);
            if (!radii && !must) return null;
            get("comma");
            var rotation = +get("number", true);
            get("comma", true);
            var large = !!+get("flag", true);
            get("comma");
            var clockwise = !!+get("flag", true);
            get("comma");
            var end = matchers["coordinate pair"](true);
            return {
                radii: radii,
                rotation: rotation,
                large: large,
                clockwise: clockwise,
                end: end
            };
        }
    }
    var index = 0;
    var commands = [];

    while (index < d.length) {
        var cmd = get("command");
        var upcmd = cmd.toUpperCase();
        var relative = cmd !== upcmd;
        var sequence;
        switch (upcmd) {
            case "M":
                sequence = getSequence("coordinate pair").map(function(coords, i) {
                    if (i === 1) cmd = relative ? "l" : "L";
                    return makeCommand({ end: coords });
                });
                break;
            case "L":
            case "T":
                sequence = getSequence("coordinate pair").map(function(coords) {
                    return makeCommand({ end: coords });
                });
                break;
            case "C":
                sequence = getSequence("coordinate pair");
                if (sequence.length % 3)
                    throw Error("Expected coordinate pair triplet at position " + index);

                sequence = sequence.reduce(function(seq, coords, i) {
                    var rest = i % 3;
                    if (!rest) {
                        seq.push(makeCommand({ cp1: coords }));
                    } else {
                        var last = seq[seq.length - 1];
                        last[rest === 1 ? "cp2" : "end"] = coords;
                    }
                    return seq;
                }, []);

                break;
            case "Q":
            case "S":
                sequence = getSequence("coordinate pair");
                if (sequence.length & 1)
                    throw Error("Expected coordinate pair couple at position " + index);

                sequence = sequence.reduce(function(seq, coords, i) {
                    var odd = i & 1;
                    if (!odd) {
                        seq.push(makeCommand({ cp: coords }));
                    } else {
                        var last = seq[seq.length - 1];
                        last.end = coords;
                    }
                    return seq;
                }, []);

                break;
            case "H":
            case "V":
                sequence = getSequence("number").map(function(value) {
                    return makeCommand({ value: value });
                });
                break;
            case "A":
                sequence = getSequence("arc definition").map(makeCommand);
                break;
            case "Z":
                sequence = [ { code: "Z" } ];
                break;
        }
        commands.push.apply(commands, sequence);
    }

    return commands;

    function makeCommand(obj) {
        obj.code = cmd;
        obj.relative = relative;

        return obj;
    }
    function get(what, must) {
        re[what].lastIndex = index;
        var res = re[what].exec(d);
        if (!res || res.index !== index) {
            if (!must) return null;
            throw Error("Expected " + what + " at position " + index);
        }

        index = re[what].lastIndex;

        return res[1];
    }
    function getSequence(what) {
        var sequence = [];
        var matched;
        var must = true;
        while (matched = matchers[what](must)) {
            sequence.push(matched);
            must = !!get("comma");
        }

        return sequence;
    }
};
});


/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _converter_transformer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter/transformer.js */ "./src/converter/transformer.js");
/* harmony import */ var _converter_transformer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_converter_transformer_js__WEBPACK_IMPORTED_MODULE_0__);

figma.showUI(__html__);
figma.ui.onmessage = msg => {
    switch (msg.type) {
        case 'convert':
            console.log(figma.currentPage);
            figma.ui.postMessage(_converter_transformer_js__WEBPACK_IMPORTED_MODULE_0___default()(figma.currentPage));
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
  result.backgroundColor = {
    "_class": "color",
    "alpha": data.backgroundColor.a,
    "blue": data.backgroundColor.b,
    "green": data.backgroundColor.g,
    "red": data.backgroundColor.r
  };
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
  result.backgroundColor = {
    "_class": "color",
    "alpha": data.backgrounds[0].color.a,
    "blue": data.backgrounds[0].color.b,
    "green": data.backgrounds[0].color.g,
    "red": data.backgrounds[0].color.r
  };
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
          "alpha": border.color.a,
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
            "alpha": fill.color.a,
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
/***/ (function(module, exports, __webpack_require__) {

const parse = __webpack_require__(/*! d-path-parser */ "./node_modules/d-path-parser/parser.js");

module.exports = function (data, result) {
  const newPath = [];
  const objWidth = data.absoluteBoundingBox.width;
  const objHeight = data.absoluteBoundingBox.height;

  /*

  There's a problem with relativeTransform as it keeps the original size of the Object

  absoluteBoundingBox: { x: -1543, y: 137, width: 30, height: 30 },
  preserveRatio: true,
  constraints: { vertical: 'TOP', horizontal: 'LEFT' },
  relativeTransform: [ [ 0.05000000074505806, 0, 38 ], [ 0, -0.05000000074505806, 573 ] ],
  size: { x: 600, y: 600 },
  fills: [ { blendMode: 'NORMAL', type: 'SOLID', color: [Object] } ],
  fillGeometry: [
    {
      path: 'M25 0L575 0C600 0 600 0 600 25L600 575C600 600 600 600 575 600L25 600C0 600 0 600 0 575L0 25C0 0 0 0 25 0ZM125 100L475 100C500 100 500 100 500 125C500 150 500 150 475 150L125 150C100 150 100 150 100 125C100 100 100 100 125 100ZM100 199L500 199L430.5 275L387 230.5L343.5 275L300 230.5L256.5 275L213 230.5L169 275L100 199ZM50 50L50 550L550 550L550 50L50 50Z',
      windingRule: 'NONZERO'
    }
  ]

  */

  const vectorFunction = function (command1, command2, command3) {
    const boom = {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "curveMode": 4,
      "point": `{${command1.end.x/objWidth}, ${command1.end.y/objHeight}}`
    }

    if (command1.code === 'M') {
      console.log(command3);

      if (command2.code === 'C') {
        boom.curveFrom = `{${command2.cp1.x/objWidth}, ${command2.cp1.y/objHeight}}`;

        if (JSON.stringify(command2.cp1) === JSON.stringify(command1.end)) {
          boom.hasCurveFrom = false;
          boom.hasCurveTo = false;
        } else if (JSON.stringify(command2.cp1) !== JSON.stringify(command1.end)) {
          boom.hasCurveFrom = true;
          boom.hasCurveTo = false;
        }
      }

      if (command3.code === 'C') {
        boom.curveTo = `{${command3.cp2.x/objWidth}, ${command3.cp2.y/objHeight}}`;
        boom.hasCurveTo = true;
      }
    } else if (command1.code === 'L') {
      if (command2.code === 'C') {
        boom.curveFrom = `{${command2.cp1.x/objWidth}, ${command2.cp1.y/objHeight}}`;

        if (JSON.stringify(command2.cp1) === JSON.stringify(command1.end)) {
          boom.hasCurveFrom = false;
          boom.hasCurveTo = false;
        } else if (JSON.stringify(command2.cp1) !== JSON.stringify(command1.end)) {
          boom.hasCurveFrom = true;
          boom.hasCurveTo = false;
        }
      }
    } else if (command1.code === 'C') {
      if (command2.code === 'L') {
        boom.curveTo = `{${command1.cp2.x/objWidth}, ${command1.cp2.y/objHeight}}`;
        boom.hasCurveFrom = false;
        boom.hasCurveTo = true;
      } else if (command2.code === 'C') {
        boom.curveFrom = `{${command2.cp1.x/objWidth}, ${command2.cp1.y/objHeight}}`;
        boom.curveTo = `{${command1.cp2.x/objWidth}, ${command1.cp2.y/objHeight}}`;
        boom.hasCurveFrom = true;
        boom.hasCurveTo = true;
      }
    }

    console.log(boom);

    newPath.push(boom);
  }

  data.fillGeometry.map(path => {
    const noZ = path.path.substring(0, path.path.length - 1);
    const split = noZ.split('Z');

    split.map(singleSplit => {
      console.log(singleSplit);
      const commands = parse(singleSplit);
      console.log('--------- ' + data.name + ' ---------------------- ');
      console.log(commands);

      for (let i = 0; i < commands.length - 1; i++) {
        // Take the element, the next one and the last from the list
        vectorFunction(commands[i], commands[i+1], commands[commands.length - 1]);
      }
    });
  });

  // data.strokeGeometry.map(path => {
  //   const commands = parse(path.path);
  //   // console.log('--------- ' + data.name + ' ---------------------- ');
  //   // console.log(commands);
  //
  //   commands.map(curvePoint => {
  //     vectorFunction(curvePoint);
  //   });
  // });

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
      color.a = data.fills[i].color.a;
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
          "name": data.style.fontPostScriptName,
          "size": data.style.fontSize
        }
      },
      "textStyleVerticalAlignmentKey": 0,
      "paragraphStyle": {
        "_class": "paragraphStyle",
        "maximumLineHeight": data.style.lineHeightPx,
        "minimumLineHeight": data.style.lineHeightPx,
        "alignment": textAlignement(data.style.textAlignHorizontal)
      },
      "kerning": data.style.letterSpacing
    },
    "verticalAlignment": textVerticalAlignement(data.style.textAlignVertical)
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
            "name": data.style.fontPostScriptName,
            "size": data.style.fontSize
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
          "alignment": textAlignement(data.style.textAlignHorizontal)
        }
      }
    }]
  };

  if (data.style.textCase) {
    result.style.textStyle.encodedAttributes.MSAttributedStringTextTransformAttribute = 1;
    result.attributedString.attributes[0].attributes.MSAttributedStringTextTransformAttribute = textCase(data.style.textCase);
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

  console.log(data);

  // This is to update the position to be relative and not absolute.
  // Sketch uses relative position to its parent.
  // Page is the top level so obviously doesn't need this code
  if (data.type !== 'PAGE') {
    const newPosition = position(parent, data);
    result.frame.x = newPosition.x;
    result.frame.y = newPosition.y;
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
  //   case 'COMPONENT':
  //     component(data, result);
  //     break;
  //   case 'INSTANCE':
  //     instance(data, result);
  //     break;
  //   case 'RECTANGLE':
  //     rectangle(data, result);
  //     break;
  //   case 'ELLIPSE':
  //     ellipse(data, result);
  //     break;
  //   case 'REGULAR_POLYGON':
  //     triangle(data, result);
  //     break;
  //   case 'VECTOR':
  //     vector(data, result);
  //     break;
  //   case 'TEXT':
  //     text(data, result);
  //     break;
  }

  return result;
};

module.exports = transform;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QtcGF0aC1wYXJzZXIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvYmxlbmRNb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvZWxsaXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3NoYXBlcy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9faG9yaXpvbnRhbEFsaWduZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L190ZXh0Q2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvX3ZlcnRpY2FsQWxpZ25lbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90cmFuc2Zvcm1lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUEwQztBQUNsRDtBQUNBLFFBQVEsaUNBQU8sRUFBRSxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQzNCLEtBQUssTUFBTSxFQVFOO0FBQ0wsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FB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aUIsbUJBQU8sQ0FBQywrREFBb0I7QUFDN0MsZUFBZSxtQkFBTyxDQUFDLGlFQUFxQjtBQUM1QyxjQUFjLG1CQUFPLENBQUMsK0RBQW9CO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQywrREFBb0I7QUFDMUMsa0JBQWtCLG1CQUFPLENBQUMsdUVBQXdCO0FBQ2xELGlCQUFpQixtQkFBTyxDQUFDLHFFQUF1QjtBQUNoRCxrQkFBa0IsbUJBQU8sQ0FBQywrREFBb0I7QUFDOUMsaUJBQWlCLG1CQUFPLENBQUMsNkRBQW1CO0FBQzVDLGdCQUFnQixtQkFBTyxDQUFDLDJEQUFrQjtBQUMxQyxlQUFlLG1CQUFPLENBQUMseURBQWlCO0FBQ3hDLGFBQWEsbUJBQU8sQ0FBQyxtREFBYzs7QUFFbkMsb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLyohXG4gKiBkLXBhdGgtcGFyc2VyIC0gdjEuMC4wXG4gKiBieSBNYXNzaW1vIEFydGl6enUgKE1heEFydDI1MDEpXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01heEFydDI1MDEvZC1wYXRoLXBhcnNlclxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogU2VlIExJQ0VOU0UgZm9yIGRldGFpbHNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIHJvb3QuZFBhdGhQYXJzZSA9IGZhY3RvcnkoKTtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcblwidXNlIHN0cmljdFwiO1xuXG5yZXR1cm4gZnVuY3Rpb24gcGFyc2UoZCkge1xuICAgIHZhciByZSA9IHtcbiAgICAgICAgY29tbWFuZDogL1xccyooW2FjaGxtcXN0dnpdKS9naSxcbiAgICAgICAgbnVtYmVyOiAvXFxzKihbKy1dP1xcZCpcXC4/XFxkKyg/OmVbKy1dP1xcZCspPykvZ2ksXG4gICAgICAgIGNvbW1hOiAvXFxzKig/OigsKXxcXHMpL2csXG4gICAgICAgIGZsYWc6IC9cXHMqKFswMV0pL2dcbiAgICB9O1xuICAgIHZhciBtYXRjaGVycyA9IHtcbiAgICAgICAgXCJudW1iZXJcIjogZnVuY3Rpb24obXVzdCkge1xuICAgICAgICAgICAgcmV0dXJuICtnZXQoXCJudW1iZXJcIiwgbXVzdCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29vcmRpbmF0ZSBwYWlyXCI6IGZ1bmN0aW9uKG11c3QpIHtcbiAgICAgICAgICAgIHZhciB4ID0gZ2V0KFwibnVtYmVyXCIsIG11c3QpO1xuICAgICAgICAgICAgaWYgKHggPT09IG51bGwgJiYgIW11c3QpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgZ2V0KFwiY29tbWFcIik7XG4gICAgICAgICAgICB2YXIgeSA9IGdldChcIm51bWJlclwiLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB7IHg6ICt4LCB5OiAreSB9O1xuICAgICAgICB9LFxuICAgICAgICBcImFyYyBkZWZpbml0aW9uXCI6IGZ1bmN0aW9uKG11c3QpIHtcbiAgICAgICAgICAgIHZhciByYWRpaSA9IG1hdGNoZXJzW1wiY29vcmRpbmF0ZSBwYWlyXCJdKG11c3QpO1xuICAgICAgICAgICAgaWYgKCFyYWRpaSAmJiAhbXVzdCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBnZXQoXCJjb21tYVwiKTtcbiAgICAgICAgICAgIHZhciByb3RhdGlvbiA9ICtnZXQoXCJudW1iZXJcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBnZXQoXCJjb21tYVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBsYXJnZSA9ICEhK2dldChcImZsYWdcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBnZXQoXCJjb21tYVwiKTtcbiAgICAgICAgICAgIHZhciBjbG9ja3dpc2UgPSAhIStnZXQoXCJmbGFnXCIsIHRydWUpO1xuICAgICAgICAgICAgZ2V0KFwiY29tbWFcIik7XG4gICAgICAgICAgICB2YXIgZW5kID0gbWF0Y2hlcnNbXCJjb29yZGluYXRlIHBhaXJcIl0odHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJhZGlpOiByYWRpaSxcbiAgICAgICAgICAgICAgICByb3RhdGlvbjogcm90YXRpb24sXG4gICAgICAgICAgICAgICAgbGFyZ2U6IGxhcmdlLFxuICAgICAgICAgICAgICAgIGNsb2Nrd2lzZTogY2xvY2t3aXNlLFxuICAgICAgICAgICAgICAgIGVuZDogZW5kXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNvbW1hbmRzID0gW107XG5cbiAgICB3aGlsZSAoaW5kZXggPCBkLmxlbmd0aCkge1xuICAgICAgICB2YXIgY21kID0gZ2V0KFwiY29tbWFuZFwiKTtcbiAgICAgICAgdmFyIHVwY21kID0gY21kLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IGNtZCAhPT0gdXBjbWQ7XG4gICAgICAgIHZhciBzZXF1ZW5jZTtcbiAgICAgICAgc3dpdGNoICh1cGNtZCkge1xuICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IGdldFNlcXVlbmNlKFwiY29vcmRpbmF0ZSBwYWlyXCIpLm1hcChmdW5jdGlvbihjb29yZHMsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDEpIGNtZCA9IHJlbGF0aXZlID8gXCJsXCIgOiBcIkxcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VDb21tYW5kKHsgZW5kOiBjb29yZHMgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgICAgY2FzZSBcIlRcIjpcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IGdldFNlcXVlbmNlKFwiY29vcmRpbmF0ZSBwYWlyXCIpLm1hcChmdW5jdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VDb21tYW5kKHsgZW5kOiBjb29yZHMgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ1wiOlxuICAgICAgICAgICAgICAgIHNlcXVlbmNlID0gZ2V0U2VxdWVuY2UoXCJjb29yZGluYXRlIHBhaXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCAlIDMpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiRXhwZWN0ZWQgY29vcmRpbmF0ZSBwYWlyIHRyaXBsZXQgYXQgcG9zaXRpb24gXCIgKyBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IHNlcXVlbmNlLnJlZHVjZShmdW5jdGlvbihzZXEsIGNvb3JkcywgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdCA9IGkgJSAzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcS5wdXNoKG1ha2VDb21tYW5kKHsgY3AxOiBjb29yZHMgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3QgPSBzZXFbc2VxLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFtyZXN0ID09PSAxID8gXCJjcDJcIiA6IFwiZW5kXCJdID0gY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXE7XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUVwiOlxuICAgICAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IGdldFNlcXVlbmNlKFwiY29vcmRpbmF0ZSBwYWlyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggJiAxKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkV4cGVjdGVkIGNvb3JkaW5hdGUgcGFpciBjb3VwbGUgYXQgcG9zaXRpb24gXCIgKyBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IHNlcXVlbmNlLnJlZHVjZShmdW5jdGlvbihzZXEsIGNvb3JkcywgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2RkID0gaSAmIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb2RkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXEucHVzaChtYWtlQ29tbWFuZCh7IGNwOiBjb29yZHMgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3QgPSBzZXFbc2VxLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdC5lbmQgPSBjb29yZHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcTtcbiAgICAgICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICBjYXNlIFwiVlwiOlxuICAgICAgICAgICAgICAgIHNlcXVlbmNlID0gZ2V0U2VxdWVuY2UoXCJudW1iZXJcIikubWFwKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlQ29tbWFuZCh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgc2VxdWVuY2UgPSBnZXRTZXF1ZW5jZShcImFyYyBkZWZpbml0aW9uXCIpLm1hcChtYWtlQ29tbWFuZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiWlwiOlxuICAgICAgICAgICAgICAgIHNlcXVlbmNlID0gWyB7IGNvZGU6IFwiWlwiIH0gXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb21tYW5kcy5wdXNoLmFwcGx5KGNvbW1hbmRzLCBzZXF1ZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbW1hbmRzO1xuXG4gICAgZnVuY3Rpb24gbWFrZUNvbW1hbmQob2JqKSB7XG4gICAgICAgIG9iai5jb2RlID0gY21kO1xuICAgICAgICBvYmoucmVsYXRpdmUgPSByZWxhdGl2ZTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXQod2hhdCwgbXVzdCkge1xuICAgICAgICByZVt3aGF0XS5sYXN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgdmFyIHJlcyA9IHJlW3doYXRdLmV4ZWMoZCk7XG4gICAgICAgIGlmICghcmVzIHx8IHJlcy5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghbXVzdCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkV4cGVjdGVkIFwiICsgd2hhdCArIFwiIGF0IHBvc2l0aW9uIFwiICsgaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggPSByZVt3aGF0XS5sYXN0SW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHJlc1sxXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2VxdWVuY2Uod2hhdCkge1xuICAgICAgICB2YXIgc2VxdWVuY2UgPSBbXTtcbiAgICAgICAgdmFyIG1hdGNoZWQ7XG4gICAgICAgIHZhciBtdXN0ID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKG1hdGNoZWQgPSBtYXRjaGVyc1t3aGF0XShtdXN0KSkge1xuICAgICAgICAgICAgc2VxdWVuY2UucHVzaChtYXRjaGVkKTtcbiAgICAgICAgICAgIG11c3QgPSAhIWdldChcImNvbW1hXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlcXVlbmNlO1xuICAgIH1cbn07XG59KTtcbiIsImltcG9ydCB0cmFuc2Zvcm1lciBmcm9tICcuL2NvbnZlcnRlci90cmFuc2Zvcm1lci5qcyc7XG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvbnZlcnQnOlxuICAgICAgICAgICAgY29uc29sZS5sb2coZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UodHJhbnNmb3JtZXIoZmlnbWEuY3VycmVudFBhZ2UpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkb3dubG9hZCc6XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIElzIHRoaXMgbmVlZGVkPyAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5ncm91cExheW91dCA9IHtcbiAgICBcIl9jbGFzc1wiOiBcIk1TSW1tdXRhYmxlRnJlZWZvcm1Hcm91cExheW91dFwiXG4gIH07XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSB0cnVlO1xuICByZXN1bHQuaG9yaXpvbnRhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzM2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH07XG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWU7XG4gIHJlc3VsdC52ZXJ0aWNhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzA2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IHRydWU7XG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWU7XG4gIHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgIFwiYWxwaGFcIjogZGF0YS5iYWNrZ3JvdW5kQ29sb3IuYSxcbiAgICBcImJsdWVcIjogZGF0YS5iYWNrZ3JvdW5kQ29sb3IuYixcbiAgICBcImdyZWVuXCI6IGRhdGEuYmFja2dyb3VuZENvbG9yLmcsXG4gICAgXCJyZWRcIjogZGF0YS5iYWNrZ3JvdW5kQ29sb3IuclxuICB9O1xuICByZXN1bHQuaGFzQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcbiAgcmVzdWx0LmluY2x1ZGVCYWNrZ3JvdW5kQ29sb3JJbkluc3RhbmNlID0gdHJ1ZTtcbiAgcmVzdWx0LnN5bWJvbElEID0gZGF0YS5pZDtcbiAgcmVzdWx0LmNoYW5nZUlkZW50aWZpZXIgPSA2O1xuICByZXN1bHQub3ZlcnJpZGVQcm9wZXJ0aWVzID0gW107XG4gIHJlc3VsdC5hbGxvd3NPdmVycmlkZXMgPSB0cnVlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSB0cnVlO1xuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlO1xuICByZXN1bHQuYmFja2dyb3VuZENvbG9yID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICBcImFscGhhXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuYSxcbiAgICBcImJsdWVcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5iLFxuICAgIFwiZ3JlZW5cIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5nLFxuICAgIFwicmVkXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuclxuICB9O1xuICByZXN1bHQuaGFzQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gZmFsc2U7XG4gIHJlc3VsdC5ncm91cExheW91dCA9IHtcbiAgICBcIl9jbGFzc1wiOiBcIk1TSW1tdXRhYmxlRnJlZWZvcm1Hcm91cExheW91dFwiXG4gIH1cbiAgcmVzdWx0Lmhvcml6b250YWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMzNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9LFxuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlLFxuICByZXN1bHQudmVydGljYWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMwNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhvcml6b250YWxTcGFjaW5nID0gMDtcbiAgcmVzdWx0Lm92ZXJyaWRlVmFsdWVzID0gW107XG4gIHJlc3VsdC5zY2FsZSA9IDE7XG4gIHJlc3VsdC5zeW1ib2xJRCA9IGRhdGEuY29tcG9uZW50SWQ7XG4gIHJlc3VsdC52ZXJ0aWNhbFNwYWNpbmcgPSAwO1xuXG4gIGNvbnN0IG92ZXJyaWRlcyA9IFtdO1xuXG4gIGRhdGEuY2hpbGRyZW4ubWFwKChvdmVycmlkZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1JZCA9IG92ZXJyaWRlLmlkLnNwbGl0KFwiO1wiKTtcblxuICAgIGlmKG92ZXJyaWRlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgb3ZlcnJpZGVzLnB1c2goe1xuICAgICAgICBcIl9jbGFzc1wiOiBcIm92ZXJyaWRlVmFsdWVcIixcbiAgICAgICAgXCJkb19vYmplY3RJRFwiOiBlbGVtSWRbMF0sXG4gICAgICAgIFwib3ZlcnJpZGVOYW1lXCI6IGAke2VsZW1JZFsxXX1fc3RyaW5nVmFsdWVgLFxuICAgICAgICBcInZhbHVlXCI6IG92ZXJyaWRlLmNoYXJhY3RlcnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVzdWx0Lm92ZXJyaWRlVmFsdWVzID0gb3ZlcnJpZGVzO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodHlwZSA9PT0gXCJQQVNTX1RIUk9VR0hcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTk9STUFMXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkRBUktFTlwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJNVUxUSVBMWVwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT0xPUl9CVVJOXCIpIHtcbiAgICByZXR1cm4gMztcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkxJR0hURU5cIikge1xuICAgIHJldHVybiA0O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU0NSRUVOXCIpIHtcbiAgICByZXR1cm4gNTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTE9SX0RPREdFXCIpIHtcbiAgICByZXR1cm4gNjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIk9WRVJMQVlcIikge1xuICAgIHJldHVybiA3O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU09GVF9MSUdIVFwiKSB7XG4gICAgcmV0dXJuIDg7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJIQVJEX0xJR0hUXCIpIHtcbiAgICByZXR1cm4gOTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkRJRkZFUkVOQ0VcIikge1xuICAgIHJldHVybiAxMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkVYQ0xVU0lPTlwiKSB7XG4gICAgcmV0dXJuIDExO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSFVFXCIpIHtcbiAgICByZXR1cm4gMTI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTQVRVUkFUSU9OXCIpIHtcbiAgICByZXR1cm4gMTM7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT0xPUlwiKSB7XG4gICAgcmV0dXJuIDE0O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTFVNSU5PU0lUWVwiKSB7XG4gICAgcmV0dXJuIDE1O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkKSB7XG5cbiAgbGV0IHhQb3NpdGlvbiA9IDA7XG4gIGxldCB5UG9zaXRpb24gPSAwO1xuICBpZiAocGFyZW50LngpIHtcbiAgICBpZiAoY2hpbGQueCA+IHBhcmVudC54KSB7XG4gICAgICB4UG9zaXRpb24gPSBNYXRoLmFicyhjaGlsZC54IC0gcGFyZW50LngpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQueSA+IHBhcmVudC55KSB7XG4gICAgICB5UG9zaXRpb24gPSBNYXRoLmFicyhjaGlsZC55IC0gcGFyZW50LnkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB4UG9zaXRpb24gPSBjaGlsZC54O1xuICAgIHlQb3NpdGlvbiA9IGNoaWxkLnk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHhQb3NpdGlvbixcbiAgICB5OiB5UG9zaXRpb25cbiAgfVxufTtcbiIsImNvbnN0IGJsZW5kTW9kZSA9IHJlcXVpcmUoJy4vYmxlbmRNb2RlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJzdHlsZVwiLFxuICAgIFwiZW5kTWFya2VyVHlwZVwiOiAwLFxuICAgIFwibWl0ZXJMaW1pdFwiOiAxMCxcbiAgICBcInN0YXJ0TWFya2VyVHlwZVwiOiAwLFxuICAgIFwid2luZGluZ1J1bGVcIjogMCwgLy8gTk9OWkVST1xuICB9O1xuXG4gIGlmIChkYXRhLmJsZW5kTW9kZSkge1xuICAgIHN0eWxlLmNvbnRleHRTZXR0aW5ncyA9IHtcbiAgICAgIFwiX2NsYXNzXCI6IFwiZ3JhcGhpY3NDb250ZXh0U2V0dGluZ3NcIixcbiAgICAgIFwiYmxlbmRNb2RlXCI6IGJsZW5kTW9kZShkYXRhLmJsZW5kTW9kZSlcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5vcGFjaXR5KSB7XG4gICAgICBzdHlsZS5jb250ZXh0U2V0dGluZ3Mub3BhY2l0eSA9IGRhdGEub3BhY2l0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuY29udGV4dFNldHRpbmdzLm9wYWNpdHkgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEuc3Ryb2tlcykgJiYgZGF0YS5zdHJva2VzLmxlbmd0aCkge1xuICAgIGxldCBuZXdCb3JkZXJzID0gW107XG4gICAgZGF0YS5zdHJva2VzLmZvckVhY2goZnVuY3Rpb24oYm9yZGVyKSB7XG5cbiAgICAgIC8vIENvbnZlcnQgdGhlIHBvc2l0aW9uIC0gaW5zaWRlLCBjZW50ZXIsIG91dHNpZGVcbiAgICAgIGxldCBwb3NpdGlvbiA9ICcnO1xuICAgICAgaWYgKGRhdGEuc3Ryb2tlQWxpZ24gPT09ICdJTlNJREUnKSB7XG4gICAgICAgIHBvc2l0aW9uID0gIDE7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuc3Ryb2tlQWxpZ24gPT09ICdPVVRTSURFJykge1xuICAgICAgICBwb3NpdGlvbiA9ICAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24gPSAgMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbG9yID0gJyc7XG4gICAgICBpZiAoYm9yZGVyLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgY29sb3IgPSB7XG4gICAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICAgIFwiYWxwaGFcIjogYm9yZGVyLmNvbG9yLmEsXG4gICAgICAgICAgXCJibHVlXCI6IGJvcmRlci5jb2xvci5iLFxuICAgICAgICAgIFwiZ3JlZW5cIjogYm9yZGVyLmNvbG9yLmcsXG4gICAgICAgICAgXCJyZWRcIjogYm9yZGVyLmNvbG9yLnJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZ3JhZGllbnQgPSAnJztcbiAgICAgIGlmIChib3JkZXIudHlwZSA9PT0gJ0dSQURJRU5UX0xJTkVBUicpIHtcbiAgICAgICAgLy8gVE9ETzogQWRkIHN1cHBvcnQgZm9yIEdyYWRpZW50c1xuICAgICAgfVxuXG4gICAgICBuZXdCb3JkZXJzLnB1c2goe1xuICAgICAgICBcIl9jbGFzc1wiOiBcImJvcmRlclwiLFxuICAgICAgICBcImlzRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICBcImNvbG9yXCI6IGNvbG9yLFxuICAgICAgICBcImZpbGxUeXBlXCI6IDAsXG4gICAgICAgIFwicG9zaXRpb25cIjogcG9zaXRpb24sXG4gICAgICAgIFwidGhpY2tuZXNzXCI6IGRhdGEuc3Ryb2tlV2VpZ2h0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHN0eWxlLmJvcmRlcnMgPSBuZXdCb3JkZXJzO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5maWxscykgJiYgZGF0YS5maWxscy5sZW5ndGgpIHtcbiAgICBsZXQgbmV3RmlsbHMgPSBbXTtcbiAgICBkYXRhLmZpbGxzLmZvckVhY2goZnVuY3Rpb24oZmlsbCkge1xuICAgICAgaWYgKGZpbGwudHlwZSA9PT0gJ0lNQUdFJykge1xuICAgICAgICBuZXdGaWxscy5wdXNoKHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcImZpbGxcIixcbiAgICAgICAgICBcImlzRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICAgIFwiZmlsbFR5cGVcIjogNCxcbiAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgIFwiX2NsYXNzXCI6IFwiTVNKU09ORmlsZVJlZmVyZW5jZVwiLFxuICAgICAgICAgICAgXCJfcmVmX2NsYXNzXCI6IFwiTVNJbWFnZURhdGFcIixcbiAgICAgICAgICAgIFwiX3JlZlwiOiBgaW1hZ2VzXFwvJHtmaWxsLmltYWdlUmVmfS5wbmdgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm5vaXNlSW5kZXhcIjogMCxcbiAgICAgICAgICBcIm5vaXNlSW50ZW5zaXR5XCI6IDAsXG4gICAgICAgICAgXCJwYXR0ZXJuRmlsbFR5cGVcIjogMSxcbiAgICAgICAgICBcInBhdHRlcm5UaWxlU2NhbGVcIjogMVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsbC50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICAgIG5ld0ZpbGxzLnB1c2goe1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiZmlsbFwiLFxuICAgICAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICBcImFscGhhXCI6IGZpbGwuY29sb3IuYSxcbiAgICAgICAgICAgIFwiYmx1ZVwiOiBmaWxsLmNvbG9yLmIsXG4gICAgICAgICAgICBcImdyZWVuXCI6IGZpbGwuY29sb3IuZyxcbiAgICAgICAgICAgIFwicmVkXCI6IGZpbGwuY29sb3IuclxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJmaWxsVHlwZVwiOiAwLFxuICAgICAgICAgIFwibm9pc2VJbmRleFwiOiAwLFxuICAgICAgICAgIFwibm9pc2VJbnRlbnNpdHlcIjogMCxcbiAgICAgICAgICBcInBhdHRlcm5GaWxsVHlwZVwiOiAxLFxuICAgICAgICAgIFwicGF0dGVyblRpbGVTY2FsZVwiOiAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3R5bGUuZmlsbHMgPSBuZXdGaWxscztcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0eXBlID09PSBcIlBBR0VcIikge1xuICAgIHJldHVybiBcInBhZ2VcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICByZXR1cm4gXCJhcnRib2FyZFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiR1JPVVBcIikge1xuICAgIHJldHVybiBcImdyb3VwXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT01QT05FTlRcIikge1xuICAgIHJldHVybiBcInN5bWJvbE1hc3RlclwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSU5TVEFOQ0VcIikge1xuICAgIHJldHVybiBcInN5bWJvbEluc3RhbmNlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJSRUNUQU5HTEVcIikge1xuICAgIHJldHVybiBcInJlY3RhbmdsZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRUxMSVBTRVwiKSB7XG4gICAgcmV0dXJuIFwib3ZhbFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiUkVHVUxBUl9QT0xZR09OXCIpIHtcbiAgICByZXR1cm4gXCJ0cmlhbmdsZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVkVDVE9SXCIpIHtcbiAgICByZXR1cm4gXCJzaGFwZVBhdGhcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlRFWFRcIikge1xuICAgIHJldHVybiBcInRleHRcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJcIlxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5lZGl0ZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IFt7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLjc3NjE0MjM3NDkwMDAwMDA0LCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAuMjIzODU3NjI1MTAwMDAwMDEsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezAuNSwgMX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAwLjIyMzg1NzYyNTEwMDAwMDAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDAuNzc2MTQyMzc0OTAwMDAwMDR9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDAuNX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLjIyMzg1NzYyNTEwMDAwMDAxLCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAuNzc2MTQyMzc0OTAwMDAwMDQsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezAuNSwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAwLjc3NjE0MjM3NDkwMDAwMDA0fVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDAuMjIzODU3NjI1MTAwMDAwMDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDAuNX1cIlxuICB9XVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5lZGl0ZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IFt7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMX1cIlxuICB9XVxuICByZXN1bHQuZml4ZWRSYWRpdXMgPSAwO1xuICByZXN1bHQuaGFzQ29udmVydGVkVG9OZXdSb3VuZENvcm5lcnMgPSB0cnVlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5lZGl0ZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IFt7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLjUsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MC41LCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAuNSwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMX1cIlxuICB9XVxuICByZXN1bHQuaXNFcXVpbGF0ZXJhbCA9IGZhbHNlO1xufVxuIiwiY29uc3QgcGFyc2UgPSByZXF1aXJlKFwiZC1wYXRoLXBhcnNlclwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIGNvbnN0IG5ld1BhdGggPSBbXTtcbiAgY29uc3Qgb2JqV2lkdGggPSBkYXRhLmFic29sdXRlQm91bmRpbmdCb3gud2lkdGg7XG4gIGNvbnN0IG9iakhlaWdodCA9IGRhdGEuYWJzb2x1dGVCb3VuZGluZ0JveC5oZWlnaHQ7XG5cbiAgLypcblxuICBUaGVyZSdzIGEgcHJvYmxlbSB3aXRoIHJlbGF0aXZlVHJhbnNmb3JtIGFzIGl0IGtlZXBzIHRoZSBvcmlnaW5hbCBzaXplIG9mIHRoZSBPYmplY3RcblxuICBhYnNvbHV0ZUJvdW5kaW5nQm94OiB7IHg6IC0xNTQzLCB5OiAxMzcsIHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCB9LFxuICBwcmVzZXJ2ZVJhdGlvOiB0cnVlLFxuICBjb25zdHJhaW50czogeyB2ZXJ0aWNhbDogJ1RPUCcsIGhvcml6b250YWw6ICdMRUZUJyB9LFxuICByZWxhdGl2ZVRyYW5zZm9ybTogWyBbIDAuMDUwMDAwMDAwNzQ1MDU4MDYsIDAsIDM4IF0sIFsgMCwgLTAuMDUwMDAwMDAwNzQ1MDU4MDYsIDU3MyBdIF0sXG4gIHNpemU6IHsgeDogNjAwLCB5OiA2MDAgfSxcbiAgZmlsbHM6IFsgeyBibGVuZE1vZGU6ICdOT1JNQUwnLCB0eXBlOiAnU09MSUQnLCBjb2xvcjogW09iamVjdF0gfSBdLFxuICBmaWxsR2VvbWV0cnk6IFtcbiAgICB7XG4gICAgICBwYXRoOiAnTTI1IDBMNTc1IDBDNjAwIDAgNjAwIDAgNjAwIDI1TDYwMCA1NzVDNjAwIDYwMCA2MDAgNjAwIDU3NSA2MDBMMjUgNjAwQzAgNjAwIDAgNjAwIDAgNTc1TDAgMjVDMCAwIDAgMCAyNSAwWk0xMjUgMTAwTDQ3NSAxMDBDNTAwIDEwMCA1MDAgMTAwIDUwMCAxMjVDNTAwIDE1MCA1MDAgMTUwIDQ3NSAxNTBMMTI1IDE1MEMxMDAgMTUwIDEwMCAxNTAgMTAwIDEyNUMxMDAgMTAwIDEwMCAxMDAgMTI1IDEwMFpNMTAwIDE5OUw1MDAgMTk5TDQzMC41IDI3NUwzODcgMjMwLjVMMzQzLjUgMjc1TDMwMCAyMzAuNUwyNTYuNSAyNzVMMjEzIDIzMC41TDE2OSAyNzVMMTAwIDE5OVpNNTAgNTBMNTAgNTUwTDU1MCA1NTBMNTUwIDUwTDUwIDUwWicsXG4gICAgICB3aW5kaW5nUnVsZTogJ05PTlpFUk8nXG4gICAgfVxuICBdXG5cbiAgKi9cblxuICBjb25zdCB2ZWN0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChjb21tYW5kMSwgY29tbWFuZDIsIGNvbW1hbmQzKSB7XG4gICAgY29uc3QgYm9vbSA9IHtcbiAgICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICAgIFwiY3VydmVNb2RlXCI6IDQsXG4gICAgICBcInBvaW50XCI6IGB7JHtjb21tYW5kMS5lbmQueC9vYmpXaWR0aH0sICR7Y29tbWFuZDEuZW5kLnkvb2JqSGVpZ2h0fX1gXG4gICAgfVxuXG4gICAgaWYgKGNvbW1hbmQxLmNvZGUgPT09ICdNJykge1xuICAgICAgY29uc29sZS5sb2coY29tbWFuZDMpO1xuXG4gICAgICBpZiAoY29tbWFuZDIuY29kZSA9PT0gJ0MnKSB7XG4gICAgICAgIGJvb20uY3VydmVGcm9tID0gYHske2NvbW1hbmQyLmNwMS54L29ialdpZHRofSwgJHtjb21tYW5kMi5jcDEueS9vYmpIZWlnaHR9fWA7XG5cbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGNvbW1hbmQyLmNwMSkgPT09IEpTT04uc3RyaW5naWZ5KGNvbW1hbmQxLmVuZCkpIHtcbiAgICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IGZhbHNlO1xuICAgICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKEpTT04uc3RyaW5naWZ5KGNvbW1hbmQyLmNwMSkgIT09IEpTT04uc3RyaW5naWZ5KGNvbW1hbmQxLmVuZCkpIHtcbiAgICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IHRydWU7XG4gICAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1hbmQzLmNvZGUgPT09ICdDJykge1xuICAgICAgICBib29tLmN1cnZlVG8gPSBgeyR7Y29tbWFuZDMuY3AyLngvb2JqV2lkdGh9LCAke2NvbW1hbmQzLmNwMi55L29iakhlaWdodH19YDtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbW1hbmQxLmNvZGUgPT09ICdMJykge1xuICAgICAgaWYgKGNvbW1hbmQyLmNvZGUgPT09ICdDJykge1xuICAgICAgICBib29tLmN1cnZlRnJvbSA9IGB7JHtjb21tYW5kMi5jcDEueC9vYmpXaWR0aH0sICR7Y29tbWFuZDIuY3AxLnkvb2JqSGVpZ2h0fX1gO1xuXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjb21tYW5kMi5jcDEpID09PSBKU09OLnN0cmluZ2lmeShjb21tYW5kMS5lbmQpKSB7XG4gICAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSBmYWxzZTtcbiAgICAgICAgICBib29tLmhhc0N1cnZlVG8gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChKU09OLnN0cmluZ2lmeShjb21tYW5kMi5jcDEpICE9PSBKU09OLnN0cmluZ2lmeShjb21tYW5kMS5lbmQpKSB7XG4gICAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSB0cnVlO1xuICAgICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb21tYW5kMS5jb2RlID09PSAnQycpIHtcbiAgICAgIGlmIChjb21tYW5kMi5jb2RlID09PSAnTCcpIHtcbiAgICAgICAgYm9vbS5jdXJ2ZVRvID0gYHske2NvbW1hbmQxLmNwMi54L29ialdpZHRofSwgJHtjb21tYW5kMS5jcDIueS9vYmpIZWlnaHR9fWA7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gZmFsc2U7XG4gICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGNvbW1hbmQyLmNvZGUgPT09ICdDJykge1xuICAgICAgICBib29tLmN1cnZlRnJvbSA9IGB7JHtjb21tYW5kMi5jcDEueC9vYmpXaWR0aH0sICR7Y29tbWFuZDIuY3AxLnkvb2JqSGVpZ2h0fX1gO1xuICAgICAgICBib29tLmN1cnZlVG8gPSBgeyR7Y29tbWFuZDEuY3AyLngvb2JqV2lkdGh9LCAke2NvbW1hbmQxLmNwMi55L29iakhlaWdodH19YDtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSB0cnVlO1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGJvb20pO1xuXG4gICAgbmV3UGF0aC5wdXNoKGJvb20pO1xuICB9XG5cbiAgZGF0YS5maWxsR2VvbWV0cnkubWFwKHBhdGggPT4ge1xuICAgIGNvbnN0IG5vWiA9IHBhdGgucGF0aC5zdWJzdHJpbmcoMCwgcGF0aC5wYXRoLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IHNwbGl0ID0gbm9aLnNwbGl0KCdaJyk7XG5cbiAgICBzcGxpdC5tYXAoc2luZ2xlU3BsaXQgPT4ge1xuICAgICAgY29uc29sZS5sb2coc2luZ2xlU3BsaXQpO1xuICAgICAgY29uc3QgY29tbWFuZHMgPSBwYXJzZShzaW5nbGVTcGxpdCk7XG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tICcgKyBkYXRhLm5hbWUgKyAnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJyk7XG4gICAgICBjb25zb2xlLmxvZyhjb21tYW5kcyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWFuZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIC8vIFRha2UgdGhlIGVsZW1lbnQsIHRoZSBuZXh0IG9uZSBhbmQgdGhlIGxhc3QgZnJvbSB0aGUgbGlzdFxuICAgICAgICB2ZWN0b3JGdW5jdGlvbihjb21tYW5kc1tpXSwgY29tbWFuZHNbaSsxXSwgY29tbWFuZHNbY29tbWFuZHMubGVuZ3RoIC0gMV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyBkYXRhLnN0cm9rZUdlb21ldHJ5Lm1hcChwYXRoID0+IHtcbiAgLy8gICBjb25zdCBjb21tYW5kcyA9IHBhcnNlKHBhdGgucGF0aCk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLSAnICsgZGF0YS5uYW1lICsgJyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tICcpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKGNvbW1hbmRzKTtcbiAgLy9cbiAgLy8gICBjb21tYW5kcy5tYXAoY3VydmVQb2ludCA9PiB7XG4gIC8vICAgICB2ZWN0b3JGdW5jdGlvbihjdXJ2ZVBvaW50KTtcbiAgLy8gICB9KTtcbiAgLy8gfSk7XG5cbiAgcmVzdWx0LmVkaXRlZCA9IHRydWU7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBuZXdQYXRoO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gXCJMRUZUXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIkNFTlRFUlwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJSSUdIVFwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IFwiVVBQRVJcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBcIlRPUFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJDRU5URVJcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiQk9UVE9NXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwiY29uc3QgdGV4dEFsaWduZW1lbnQgPSByZXF1aXJlKCcuL19ob3Jpem9udGFsQWxpZ25lbWVudCcpO1xuY29uc3QgdGV4dFZlcnRpY2FsQWxpZ25lbWVudCA9IHJlcXVpcmUoJy4vX3ZlcnRpY2FsQWxpZ25lbWVudCcpO1xuY29uc3QgdGV4dENhc2UgPSByZXF1aXJlKCcuL190ZXh0Q2FzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgY29uc3QgY29sb3IgPSB7fTtcbiAgZm9yIChsZXQgaSBpbiBkYXRhLmZpbGxzKSB7XG4gICAgaWYoZGF0YS5maWxsc1tpXS50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICBjb2xvci5hID0gZGF0YS5maWxsc1tpXS5jb2xvci5hO1xuICAgICAgY29sb3IuYiA9IGRhdGEuZmlsbHNbaV0uY29sb3IuYjtcbiAgICAgIGNvbG9yLmcgPSBkYXRhLmZpbGxzW2ldLmNvbG9yLmc7XG4gICAgICBjb2xvci5yID0gZGF0YS5maWxsc1tpXS5jb2xvci5yO1xuICAgIH1cbiAgfVxuICByZXN1bHQuc3R5bGUudGV4dFN0eWxlID0ge1xuICAgIFwiX2NsYXNzXCI6IFwidGV4dFN0eWxlXCIsXG4gICAgXCJlbmNvZGVkQXR0cmlidXRlc1wiOiB7XG4gICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0NvbG9yQXR0cmlidXRlXCI6IHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICBcImFscGhhXCI6IGNvbG9yLmEsXG4gICAgICAgIFwiYmx1ZVwiOiBjb2xvci5iLFxuICAgICAgICBcImdyZWVuXCI6IGNvbG9yLmcsXG4gICAgICAgIFwicmVkXCI6IGNvbG9yLnJcbiAgICAgIH0sXG4gICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0ZvbnRBdHRyaWJ1dGVcIjoge1xuICAgICAgICBcIl9jbGFzc1wiOiBcIlVJRm9udERlc2NyaXB0b3JcIixcbiAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICBcIm5hbWVcIjogZGF0YS5zdHlsZS5mb250UG9zdFNjcmlwdE5hbWUsXG4gICAgICAgICAgXCJzaXplXCI6IGRhdGEuc3R5bGUuZm9udFNpemVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidGV4dFN0eWxlVmVydGljYWxBbGlnbm1lbnRLZXlcIjogMCxcbiAgICAgIFwicGFyYWdyYXBoU3R5bGVcIjoge1xuICAgICAgICBcIl9jbGFzc1wiOiBcInBhcmFncmFwaFN0eWxlXCIsXG4gICAgICAgIFwibWF4aW11bUxpbmVIZWlnaHRcIjogZGF0YS5zdHlsZS5saW5lSGVpZ2h0UHgsXG4gICAgICAgIFwibWluaW11bUxpbmVIZWlnaHRcIjogZGF0YS5zdHlsZS5saW5lSGVpZ2h0UHgsXG4gICAgICAgIFwiYWxpZ25tZW50XCI6IHRleHRBbGlnbmVtZW50KGRhdGEuc3R5bGUudGV4dEFsaWduSG9yaXpvbnRhbClcbiAgICAgIH0sXG4gICAgICBcImtlcm5pbmdcIjogZGF0YS5zdHlsZS5sZXR0ZXJTcGFjaW5nXG4gICAgfSxcbiAgICBcInZlcnRpY2FsQWxpZ25tZW50XCI6IHRleHRWZXJ0aWNhbEFsaWduZW1lbnQoZGF0YS5zdHlsZS50ZXh0QWxpZ25WZXJ0aWNhbClcbiAgfTtcbiAgcmVzdWx0LmF0dHJpYnV0ZWRTdHJpbmcgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJhdHRyaWJ1dGVkU3RyaW5nXCIsXG4gICAgXCJzdHJpbmdcIjogZGF0YS5jaGFyYWN0ZXJzLFxuICAgIFwiYXR0cmlidXRlc1wiOiBbe1xuICAgICAgXCJfY2xhc3NcIjogXCJzdHJpbmdBdHRyaWJ1dGVcIixcbiAgICAgIFwibG9jYXRpb25cIjogMCxcbiAgICAgIFwibGVuZ3RoXCI6IGRhdGEuY2hhcmFjdGVycy5sZW5ndGgsXG4gICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0ZvbnRBdHRyaWJ1dGVcIjoge1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiVUlGb250RGVzY3JpcHRvclwiLFxuICAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgICAgICAgICBcIm5hbWVcIjogZGF0YS5zdHlsZS5mb250UG9zdFNjcmlwdE5hbWUsXG4gICAgICAgICAgICBcInNpemVcIjogZGF0YS5zdHlsZS5mb250U2l6ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJNU0F0dHJpYnV0ZWRTdHJpbmdDb2xvckF0dHJpYnV0ZVwiOiB7XG4gICAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICAgIFwiYWxwaGFcIjogY29sb3IuYSxcbiAgICAgICAgICBcImJsdWVcIjogY29sb3IuYixcbiAgICAgICAgICBcImdyZWVuXCI6IGNvbG9yLmcsXG4gICAgICAgICAgXCJyZWRcIjogY29sb3IuclxuICAgICAgICB9LFxuICAgICAgICBcInBhcmFncmFwaFN0eWxlXCI6IHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcInBhcmFncmFwaFN0eWxlXCIsXG4gICAgICAgICAgXCJhbGlnbm1lbnRcIjogdGV4dEFsaWduZW1lbnQoZGF0YS5zdHlsZS50ZXh0QWxpZ25Ib3Jpem9udGFsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV1cbiAgfTtcblxuICBpZiAoZGF0YS5zdHlsZS50ZXh0Q2FzZSkge1xuICAgIHJlc3VsdC5zdHlsZS50ZXh0U3R5bGUuZW5jb2RlZEF0dHJpYnV0ZXMuTVNBdHRyaWJ1dGVkU3RyaW5nVGV4dFRyYW5zZm9ybUF0dHJpYnV0ZSA9IDE7XG4gICAgcmVzdWx0LmF0dHJpYnV0ZWRTdHJpbmcuYXR0cmlidXRlc1swXS5hdHRyaWJ1dGVzLk1TQXR0cmlidXRlZFN0cmluZ1RleHRUcmFuc2Zvcm1BdHRyaWJ1dGUgPSB0ZXh0Q2FzZShkYXRhLnN0eWxlLnRleHRDYXNlKTtcbiAgfVxuXG4gIHJlc3VsdC5hdXRvbWF0aWNhbGx5RHJhd09uVW5kZXJseWluZ1BhdGggPSBmYWxzZTtcbiAgcmVzdWx0LmRvbnRTeW5jaHJvbmlzZVdpdGhTeW1ib2wgPSBmYWxzZTtcbiAgcmVzdWx0LmdseXBoQm91bmRzID0gXCJ7ezAsIDR9LCB7MzgsIDh9fVwiO1xuICByZXN1bHQubGluZVNwYWNpbmdCZWhhdmlvdXIgPSAyO1xuICByZXN1bHQudGV4dEJlaGF2aW91ciA9IDI7XG59XG4iLCIvLyBNT1ZFIFRPIEVTNiBpbXBvcnRzIGFuZCBUUz9cbmNvbnN0IHR5cGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvdHlwZScpO1xuY29uc3Qgc2V0U3R5bGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3R5bGUnKTtcbmNvbnN0IHBvc2l0aW9uID0gcmVxdWlyZSgnLi9oZWxwZXJzL3Bvc2l0aW9uJyk7XG5jb25zdCBjYW52YXMgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvY2FudmFzJyk7XG5jb25zdCBmcmFtZSA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9mcmFtZScpO1xuY29uc3QgZ3JvdXAgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvZ3JvdXAnKTtcbmNvbnN0IGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9jb21wb25lbnQnKTtcbmNvbnN0IGluc3RhbmNlID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2luc3RhbmNlJyk7XG5jb25zdCByZWN0YW5nbGUgPSByZXF1aXJlKCcuL3NoYXBlcy9yZWN0YW5nbGUnKTtcbmNvbnN0IHRyaWFuZ2xlID0gcmVxdWlyZSgnLi9zaGFwZXMvdHJpYW5nbGUnKTtcbmNvbnN0IGVsbGlwc2UgPSByZXF1aXJlKCcuL3NoYXBlcy9lbGxpcHNlJyk7XG5jb25zdCB2ZWN0b3IgPSByZXF1aXJlKCcuL3NoYXBlcy92ZWN0b3InKTtcbmNvbnN0IHRleHQgPSByZXF1aXJlKCcuL3RleHQvaW5kZXgnKTtcblxuY29uc3QgdHJhbnNmb3JtID0gKGRhdGEsIHBhcmVudCA9IHt9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIC8vIENhbiB0aGVzZSBqdXN0IGJlIGRlZmluZWQgdXAgZnJvbnQ/XG4gIHJlc3VsdC5fY2xhc3MgPSB0eXBlKGRhdGEudHlwZSksXG4gIHJlc3VsdC5kb19vYmplY3RJRCA9IGRhdGEuaWQ7XG4gIHJlc3VsdC5ib29sZWFuT3BlcmF0aW9uID0gLTE7XG4gIHJlc3VsdC5leHBvcnRPcHRpb25zID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiZXhwb3J0T3B0aW9uc1wiLFxuICAgIFwiZXhwb3J0Rm9ybWF0c1wiOiBbXSxcbiAgICBcImluY2x1ZGVkTGF5ZXJJZHNcIjogW10sXG4gICAgXCJsYXllck9wdGlvbnNcIjogMCxcbiAgICBcInNob3VsZFRyaW1cIjogZmFsc2VcbiAgfTtcbiAgcmVzdWx0LmZyYW1lID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicmVjdFwiLFxuICAgIFwiY29uc3RyYWluUHJvcG9ydGlvbnNcIjogZmFsc2UsXG4gIH07XG4gIHJlc3VsdC5pc0ZpeGVkVG9WaWV3cG9ydCA9IGZhbHNlO1xuICByZXN1bHQuaXNGbGlwcGVkSG9yaXpvbnRhbCA9IGZhbHNlO1xuICByZXN1bHQuaXNGbGlwcGVkVmVydGljYWwgPSBmYWxzZTtcbiAgcmVzdWx0LmlzTG9ja2VkID0gZmFsc2U7XG4gIHJlc3VsdC5pc1Zpc2libGUgPSB0cnVlO1xuICByZXN1bHQubGF5ZXJMaXN0RXhwYW5kZWRUeXBlID0gMDtcbiAgcmVzdWx0Lm5hbWUgPSBkYXRhLm5hbWU7XG4gIHJlc3VsdC5uYW1lSXNGaXhlZCA9IGZhbHNlO1xuICByZXN1bHQucmVzaXppbmdDb25zdHJhaW50ID0gNjM7XG4gIHJlc3VsdC5yZXNpemluZ1R5cGUgPSAwO1xuICByZXN1bHQucm90YXRpb24gPSAwO1xuICByZXN1bHQuc2hvdWxkQnJlYWtNYXNrQ2hhaW4gPSBmYWxzZTtcbiAgcmVzdWx0LmNsaXBwaW5nTWFza01vZGUgPSAwO1xuICByZXN1bHQuaGFzQ2xpcHBpbmdNYXNrID0gZmFsc2U7XG4gIHJlc3VsdC5zdHlsZSA9IHNldFN0eWxlKGRhdGEpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIC8vIFRoaXMgaXMgdG8gdXBkYXRlIHRoZSBwb3NpdGlvbiB0byBiZSByZWxhdGl2ZSBhbmQgbm90IGFic29sdXRlLlxuICAvLyBTa2V0Y2ggdXNlcyByZWxhdGl2ZSBwb3NpdGlvbiB0byBpdHMgcGFyZW50LlxuICAvLyBQYWdlIGlzIHRoZSB0b3AgbGV2ZWwgc28gb2J2aW91c2x5IGRvZXNuJ3QgbmVlZCB0aGlzIGNvZGVcbiAgaWYgKGRhdGEudHlwZSAhPT0gJ1BBR0UnKSB7XG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBwb3NpdGlvbihwYXJlbnQsIGRhdGEpO1xuICAgIHJlc3VsdC5mcmFtZS54ID0gbmV3UG9zaXRpb24ueDtcbiAgICByZXN1bHQuZnJhbWUueSA9IG5ld1Bvc2l0aW9uLnk7XG4gICAgcmVzdWx0LmZyYW1lLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgIHJlc3VsdC5mcmFtZS53aWR0aCA9ICBkYXRhLndpZHRoO1xuICB9XG5cbiAgLy8gVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVuIC0gUmVjdXJzaW9uIHRvIGNyZWF0ZSBhbGwgdGhlIGxheWVycy5cbiAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcbiAgICByZXN1bHQubGF5ZXJzID0gZGF0YS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gdHJhbnNmb3JtKGNoaWxkLCBkYXRhKSk7XG4gIH1cblxuICAvLyBFYWNoIGNhc2UgbmVlZCB0byBiZSB1cGRhdGVkIHVzaW5nIEZpZ21hIHBsdWdpbiBBUEkuXG4gIC8vIFRoZSBzdHJ1Y3R1cmUgaXNuJ3QgdGhlIHNhbWUgYXMgdGhlIFJFU1QgQVBJXG4gIHN3aXRjaChkYXRhLnR5cGUpIHtcbiAgICBjYXNlICdQQUdFJzpcbiAgICAgIGNhbnZhcyhkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRlJBTUUnOlxuICAgICAgZnJhbWUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0dST1VQJzpcbiAgICAgIGdyb3VwKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgLy8gICBjYXNlICdDT01QT05FTlQnOlxuICAvLyAgICAgY29tcG9uZW50KGRhdGEsIHJlc3VsdCk7XG4gIC8vICAgICBicmVhaztcbiAgLy8gICBjYXNlICdJTlNUQU5DRSc6XG4gIC8vICAgICBpbnN0YW5jZShkYXRhLCByZXN1bHQpO1xuICAvLyAgICAgYnJlYWs7XG4gIC8vICAgY2FzZSAnUkVDVEFOR0xFJzpcbiAgLy8gICAgIHJlY3RhbmdsZShkYXRhLCByZXN1bHQpO1xuICAvLyAgICAgYnJlYWs7XG4gIC8vICAgY2FzZSAnRUxMSVBTRSc6XG4gIC8vICAgICBlbGxpcHNlKGRhdGEsIHJlc3VsdCk7XG4gIC8vICAgICBicmVhaztcbiAgLy8gICBjYXNlICdSRUdVTEFSX1BPTFlHT04nOlxuICAvLyAgICAgdHJpYW5nbGUoZGF0YSwgcmVzdWx0KTtcbiAgLy8gICAgIGJyZWFrO1xuICAvLyAgIGNhc2UgJ1ZFQ1RPUic6XG4gIC8vICAgICB2ZWN0b3IoZGF0YSwgcmVzdWx0KTtcbiAgLy8gICAgIGJyZWFrO1xuICAvLyAgIGNhc2UgJ1RFWFQnOlxuICAvLyAgICAgdGV4dChkYXRhLCByZXN1bHQpO1xuICAvLyAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9