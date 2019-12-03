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
    // case 'VECTOR':
    //   vector(data, result);
    //   break;
    case 'TEXT':
      text(data, result);
      break;
  }

  return result;
};

module.exports = transform;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QtcGF0aC1wYXJzZXIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvYmxlbmRNb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvZWxsaXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3NoYXBlcy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9faG9yaXpvbnRhbEFsaWduZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L190ZXh0Q2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvX3ZlcnRpY2FsQWxpZ25lbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90cmFuc2Zvcm1lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUEwQztBQUNsRDtBQUNBLFFBQVEsaUNBQU8sRUFBRSxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQzNCLEtBQUssTUFBTSxFQVFOO0FBQ0wsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3RELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3RELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxhQUFhO0FBQzNELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZTtBQUN2RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hLRDtBQUFBO0FBQUE7QUFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw2REFBVztBQUNsRSxrQ0FBa0MsMEJBQTBCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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YWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsIi8qIVxuICogZC1wYXRoLXBhcnNlciAtIHYxLjAuMFxuICogYnkgTWFzc2ltbyBBcnRpenp1IChNYXhBcnQyNTAxKVxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9NYXhBcnQyNTAxL2QtcGF0aC1wYXJzZXJcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIFNlZSBMSUNFTlNFIGZvciBkZXRhaWxzXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgICAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAgICAgLy8gbGlrZSBOb2RlLlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgICAgICByb290LmRQYXRoUGFyc2UgPSBmYWN0b3J5KCk7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5cInVzZSBzdHJpY3RcIjtcblxucmV0dXJuIGZ1bmN0aW9uIHBhcnNlKGQpIHtcbiAgICB2YXIgcmUgPSB7XG4gICAgICAgIGNvbW1hbmQ6IC9cXHMqKFthY2hsbXFzdHZ6XSkvZ2ksXG4gICAgICAgIG51bWJlcjogL1xccyooWystXT9cXGQqXFwuP1xcZCsoPzplWystXT9cXGQrKT8pL2dpLFxuICAgICAgICBjb21tYTogL1xccyooPzooLCl8XFxzKS9nLFxuICAgICAgICBmbGFnOiAvXFxzKihbMDFdKS9nXG4gICAgfTtcbiAgICB2YXIgbWF0Y2hlcnMgPSB7XG4gICAgICAgIFwibnVtYmVyXCI6IGZ1bmN0aW9uKG11c3QpIHtcbiAgICAgICAgICAgIHJldHVybiArZ2V0KFwibnVtYmVyXCIsIG11c3QpO1xuICAgICAgICB9LFxuICAgICAgICBcImNvb3JkaW5hdGUgcGFpclwiOiBmdW5jdGlvbihtdXN0KSB7XG4gICAgICAgICAgICB2YXIgeCA9IGdldChcIm51bWJlclwiLCBtdXN0KTtcbiAgICAgICAgICAgIGlmICh4ID09PSBudWxsICYmICFtdXN0KSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGdldChcImNvbW1hXCIpO1xuICAgICAgICAgICAgdmFyIHkgPSBnZXQoXCJudW1iZXJcIiwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4geyB4OiAreCwgeTogK3kgfTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJhcmMgZGVmaW5pdGlvblwiOiBmdW5jdGlvbihtdXN0KSB7XG4gICAgICAgICAgICB2YXIgcmFkaWkgPSBtYXRjaGVyc1tcImNvb3JkaW5hdGUgcGFpclwiXShtdXN0KTtcbiAgICAgICAgICAgIGlmICghcmFkaWkgJiYgIW11c3QpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgZ2V0KFwiY29tbWFcIik7XG4gICAgICAgICAgICB2YXIgcm90YXRpb24gPSArZ2V0KFwibnVtYmVyXCIsIHRydWUpO1xuICAgICAgICAgICAgZ2V0KFwiY29tbWFcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgbGFyZ2UgPSAhIStnZXQoXCJmbGFnXCIsIHRydWUpO1xuICAgICAgICAgICAgZ2V0KFwiY29tbWFcIik7XG4gICAgICAgICAgICB2YXIgY2xvY2t3aXNlID0gISErZ2V0KFwiZmxhZ1wiLCB0cnVlKTtcbiAgICAgICAgICAgIGdldChcImNvbW1hXCIpO1xuICAgICAgICAgICAgdmFyIGVuZCA9IG1hdGNoZXJzW1wiY29vcmRpbmF0ZSBwYWlyXCJdKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByYWRpaTogcmFkaWksXG4gICAgICAgICAgICAgICAgcm90YXRpb246IHJvdGF0aW9uLFxuICAgICAgICAgICAgICAgIGxhcmdlOiBsYXJnZSxcbiAgICAgICAgICAgICAgICBjbG9ja3dpc2U6IGNsb2Nrd2lzZSxcbiAgICAgICAgICAgICAgICBlbmQ6IGVuZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjb21tYW5kcyA9IFtdO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgZC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNtZCA9IGdldChcImNvbW1hbmRcIik7XG4gICAgICAgIHZhciB1cGNtZCA9IGNtZC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB2YXIgcmVsYXRpdmUgPSBjbWQgIT09IHVwY21kO1xuICAgICAgICB2YXIgc2VxdWVuY2U7XG4gICAgICAgIHN3aXRjaCAodXBjbWQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAgICAgc2VxdWVuY2UgPSBnZXRTZXF1ZW5jZShcImNvb3JkaW5hdGUgcGFpclwiKS5tYXAoZnVuY3Rpb24oY29vcmRzLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAxKSBjbWQgPSByZWxhdGl2ZSA/IFwibFwiIDogXCJMXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlQ29tbWFuZCh7IGVuZDogY29vcmRzIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICAgIGNhc2UgXCJUXCI6XG4gICAgICAgICAgICAgICAgc2VxdWVuY2UgPSBnZXRTZXF1ZW5jZShcImNvb3JkaW5hdGUgcGFpclwiKS5tYXAoZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlQ29tbWFuZCh7IGVuZDogY29vcmRzIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNcIjpcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IGdldFNlcXVlbmNlKFwiY29vcmRpbmF0ZSBwYWlyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggJSAzKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkV4cGVjdGVkIGNvb3JkaW5hdGUgcGFpciB0cmlwbGV0IGF0IHBvc2l0aW9uIFwiICsgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgc2VxdWVuY2UgPSBzZXF1ZW5jZS5yZWR1Y2UoZnVuY3Rpb24oc2VxLCBjb29yZHMsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3QgPSBpICUgMztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXEucHVzaChtYWtlQ29tbWFuZCh7IGNwMTogY29vcmRzIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0ID0gc2VxW3NlcS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RbcmVzdCA9PT0gMSA/IFwiY3AyXCIgOiBcImVuZFwiXSA9IGNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VxO1xuICAgICAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgICAgICAgc2VxdWVuY2UgPSBnZXRTZXF1ZW5jZShcImNvb3JkaW5hdGUgcGFpclwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VxdWVuY2UubGVuZ3RoICYgMSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJFeHBlY3RlZCBjb29yZGluYXRlIHBhaXIgY291cGxlIGF0IHBvc2l0aW9uIFwiICsgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgc2VxdWVuY2UgPSBzZXF1ZW5jZS5yZWR1Y2UoZnVuY3Rpb24oc2VxLCBjb29yZHMsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9kZCA9IGkgJiAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW9kZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VxLnB1c2gobWFrZUNvbW1hbmQoeyBjcDogY29vcmRzIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0ID0gc2VxW3NlcS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3QuZW5kID0gY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXE7XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgY2FzZSBcIlZcIjpcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IGdldFNlcXVlbmNlKFwibnVtYmVyXCIpLm1hcChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFrZUNvbW1hbmQoeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQVwiOlxuICAgICAgICAgICAgICAgIHNlcXVlbmNlID0gZ2V0U2VxdWVuY2UoXCJhcmMgZGVmaW5pdGlvblwiKS5tYXAobWFrZUNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IFsgeyBjb2RlOiBcIlpcIiB9IF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWFuZHMucHVzaC5hcHBseShjb21tYW5kcywgc2VxdWVuY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21tYW5kcztcblxuICAgIGZ1bmN0aW9uIG1ha2VDb21tYW5kKG9iaikge1xuICAgICAgICBvYmouY29kZSA9IGNtZDtcbiAgICAgICAgb2JqLnJlbGF0aXZlID0gcmVsYXRpdmU7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0KHdoYXQsIG11c3QpIHtcbiAgICAgICAgcmVbd2hhdF0ubGFzdEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHZhciByZXMgPSByZVt3aGF0XS5leGVjKGQpO1xuICAgICAgICBpZiAoIXJlcyB8fCByZXMuaW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIW11c3QpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJFeHBlY3RlZCBcIiArIHdoYXQgKyBcIiBhdCBwb3NpdGlvbiBcIiArIGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4ID0gcmVbd2hhdF0ubGFzdEluZGV4O1xuXG4gICAgICAgIHJldHVybiByZXNbMV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNlcXVlbmNlKHdoYXQpIHtcbiAgICAgICAgdmFyIHNlcXVlbmNlID0gW107XG4gICAgICAgIHZhciBtYXRjaGVkO1xuICAgICAgICB2YXIgbXVzdCA9IHRydWU7XG4gICAgICAgIHdoaWxlIChtYXRjaGVkID0gbWF0Y2hlcnNbd2hhdF0obXVzdCkpIHtcbiAgICAgICAgICAgIHNlcXVlbmNlLnB1c2gobWF0Y2hlZCk7XG4gICAgICAgICAgICBtdXN0ID0gISFnZXQoXCJjb21tYVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXF1ZW5jZTtcbiAgICB9XG59O1xufSk7XG4iLCJpbXBvcnQgdHJhbnNmb3JtZXIgZnJvbSAnLi9jb252ZXJ0ZXIvdHJhbnNmb3JtZXInO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlICdjb252ZXJ0JzpcbiAgICAgICAgICAgIGNvbnN0IGZpZ21hUGFnZXMgPSBmaWdtYS5yb290LmNoaWxkcmVuO1xuICAgICAgICAgICAgY29uc3Qgc2tldGNoUGFnZXMgPSBmaWdtYVBhZ2VzLm1hcChwYWdlID0+IHRyYW5zZm9ybWVyKHBhZ2UpKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgZmlnbWFQYWdlcywgc2tldGNoUGFnZXMgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZG93bmxvYWQnOlxuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBJcyB0aGlzIG5lZWRlZD9cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmdyb3VwTGF5b3V0ID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiTVNJbW11dGFibGVGcmVlZm9ybUdyb3VwTGF5b3V0XCJcbiAgfTtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IHRydWU7XG4gIHJlc3VsdC5ob3Jpem9udGFsUnVsZXJEYXRhID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicnVsZXJEYXRhXCIsXG4gICAgXCJiYXNlXCI6IC0zMzYsXG4gICAgXCJndWlkZXNcIjogW11cbiAgfTtcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZTtcbiAgcmVzdWx0LnZlcnRpY2FsUnVsZXJEYXRhID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicnVsZXJEYXRhXCIsXG4gICAgXCJiYXNlXCI6IC0zMDYsXG4gICAgXCJndWlkZXNcIjogW11cbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gdHJ1ZTtcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZTtcblxuICAvLyBOZWVkIHRvIGFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBiYWNrZ3JvdW5kc1xuICAvLyBOZWVkIHN1cHBvcnQgZm9yIG90aGVyIHR5cGVzIG9mIGJhY2tncm91bmRzXG4gIGlmKGRhdGEuYmFja2dyb3VuZHMubGVuZ3RoID49IDEpIHtcbiAgICBpZihkYXRhLmJhY2tncm91bmRzWzBdLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IgPSB7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgXCJhbHBoYVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLm9wYWNpdHksXG4gICAgICAgIFwiYmx1ZVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLmIsXG4gICAgICAgIFwiZ3JlZW5cIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5nLFxuICAgICAgICBcInJlZFwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJlc3VsdC5oYXNCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xuICByZXN1bHQuaW5jbHVkZUJhY2tncm91bmRDb2xvckluSW5zdGFuY2UgPSB0cnVlO1xuICByZXN1bHQuc3ltYm9sSUQgPSBkYXRhLmlkO1xuICByZXN1bHQuY2hhbmdlSWRlbnRpZmllciA9IDY7XG4gIHJlc3VsdC5vdmVycmlkZVByb3BlcnRpZXMgPSBbXTtcbiAgcmVzdWx0LmFsbG93c092ZXJyaWRlcyA9IHRydWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhhc0NsaWNrVGhyb3VnaCA9IHRydWU7XG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWU7XG5cbiAgLy8gTmVlZCB0byBhZGQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgYmFja2dyb3VuZHNcbiAgLy8gTmVlZCBzdXBwb3J0IGZvciBvdGhlciB0eXBlcyBvZiBiYWNrZ3JvdW5kc1xuICBpZihkYXRhLmJhY2tncm91bmRzLmxlbmd0aCA+PSAxKSB7XG4gICAgaWYoZGF0YS5iYWNrZ3JvdW5kc1swXS50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICByZXN1bHQuYmFja2dyb3VuZENvbG9yID0ge1xuICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgIFwiYWxwaGFcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5vcGFjaXR5LFxuICAgICAgICBcImJsdWVcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5iLFxuICAgICAgICBcImdyZWVuXCI6IGRhdGEuYmFja2dyb3VuZHNbMF0uY29sb3IuZyxcbiAgICAgICAgXCJyZWRcIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5yXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXN1bHQuaGFzQmFja2dyb3VuZENvbG9yID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gZmFsc2U7XG4gIHJlc3VsdC5ncm91cExheW91dCA9IHtcbiAgICBcIl9jbGFzc1wiOiBcIk1TSW1tdXRhYmxlRnJlZWZvcm1Hcm91cExheW91dFwiXG4gIH1cbiAgcmVzdWx0Lmhvcml6b250YWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMzNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9LFxuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlLFxuICByZXN1bHQudmVydGljYWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMwNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0Lmhvcml6b250YWxTcGFjaW5nID0gMDtcbiAgcmVzdWx0Lm92ZXJyaWRlVmFsdWVzID0gW107XG4gIHJlc3VsdC5zY2FsZSA9IDE7XG4gIHJlc3VsdC5zeW1ib2xJRCA9IGRhdGEuY29tcG9uZW50SWQ7XG4gIHJlc3VsdC52ZXJ0aWNhbFNwYWNpbmcgPSAwO1xuXG4gIGNvbnN0IG92ZXJyaWRlcyA9IFtdO1xuXG4gIGRhdGEuY2hpbGRyZW4ubWFwKChvdmVycmlkZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1JZCA9IG92ZXJyaWRlLmlkLnNwbGl0KFwiO1wiKTtcblxuICAgIGlmKG92ZXJyaWRlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgb3ZlcnJpZGVzLnB1c2goe1xuICAgICAgICBcIl9jbGFzc1wiOiBcIm92ZXJyaWRlVmFsdWVcIixcbiAgICAgICAgXCJkb19vYmplY3RJRFwiOiBlbGVtSWRbMF0sXG4gICAgICAgIFwib3ZlcnJpZGVOYW1lXCI6IGAke2VsZW1JZFsxXX1fc3RyaW5nVmFsdWVgLFxuICAgICAgICBcInZhbHVlXCI6IG92ZXJyaWRlLmNoYXJhY3RlcnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVzdWx0Lm92ZXJyaWRlVmFsdWVzID0gb3ZlcnJpZGVzO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodHlwZSA9PT0gXCJQQVNTX1RIUk9VR0hcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTk9STUFMXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkRBUktFTlwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJNVUxUSVBMWVwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT0xPUl9CVVJOXCIpIHtcbiAgICByZXR1cm4gMztcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkxJR0hURU5cIikge1xuICAgIHJldHVybiA0O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU0NSRUVOXCIpIHtcbiAgICByZXR1cm4gNTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTE9SX0RPREdFXCIpIHtcbiAgICByZXR1cm4gNjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIk9WRVJMQVlcIikge1xuICAgIHJldHVybiA3O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiU09GVF9MSUdIVFwiKSB7XG4gICAgcmV0dXJuIDg7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJIQVJEX0xJR0hUXCIpIHtcbiAgICByZXR1cm4gOTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkRJRkZFUkVOQ0VcIikge1xuICAgIHJldHVybiAxMDtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkVYQ0xVU0lPTlwiKSB7XG4gICAgcmV0dXJuIDExO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSFVFXCIpIHtcbiAgICByZXR1cm4gMTI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTQVRVUkFUSU9OXCIpIHtcbiAgICByZXR1cm4gMTM7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT0xPUlwiKSB7XG4gICAgcmV0dXJuIDE0O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTFVNSU5PU0lUWVwiKSB7XG4gICAgcmV0dXJuIDE1O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkKSB7XG5cbiAgbGV0IHhQb3NpdGlvbiA9IDA7XG4gIGxldCB5UG9zaXRpb24gPSAwO1xuICBpZiAocGFyZW50LngpIHtcbiAgICBpZiAoY2hpbGQueCA+IHBhcmVudC54KSB7XG4gICAgICB4UG9zaXRpb24gPSBNYXRoLmFicyhjaGlsZC54IC0gcGFyZW50LngpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQueSA+IHBhcmVudC55KSB7XG4gICAgICB5UG9zaXRpb24gPSBNYXRoLmFicyhjaGlsZC55IC0gcGFyZW50LnkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB4UG9zaXRpb24gPSBjaGlsZC54O1xuICAgIHlQb3NpdGlvbiA9IGNoaWxkLnk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHhQb3NpdGlvbixcbiAgICB5OiB5UG9zaXRpb25cbiAgfVxufTtcbiIsImNvbnN0IGJsZW5kTW9kZSA9IHJlcXVpcmUoJy4vYmxlbmRNb2RlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJzdHlsZVwiLFxuICAgIFwiZW5kTWFya2VyVHlwZVwiOiAwLFxuICAgIFwibWl0ZXJMaW1pdFwiOiAxMCxcbiAgICBcInN0YXJ0TWFya2VyVHlwZVwiOiAwLFxuICAgIFwid2luZGluZ1J1bGVcIjogMCwgLy8gTk9OWkVST1xuICB9O1xuXG4gIGlmIChkYXRhLmJsZW5kTW9kZSkge1xuICAgIHN0eWxlLmNvbnRleHRTZXR0aW5ncyA9IHtcbiAgICAgIFwiX2NsYXNzXCI6IFwiZ3JhcGhpY3NDb250ZXh0U2V0dGluZ3NcIixcbiAgICAgIFwiYmxlbmRNb2RlXCI6IGJsZW5kTW9kZShkYXRhLmJsZW5kTW9kZSlcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5vcGFjaXR5KSB7XG4gICAgICBzdHlsZS5jb250ZXh0U2V0dGluZ3Mub3BhY2l0eSA9IGRhdGEub3BhY2l0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuY29udGV4dFNldHRpbmdzLm9wYWNpdHkgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEuc3Ryb2tlcykgJiYgZGF0YS5zdHJva2VzLmxlbmd0aCkge1xuICAgIGxldCBuZXdCb3JkZXJzID0gW107XG4gICAgZGF0YS5zdHJva2VzLmZvckVhY2goZnVuY3Rpb24oYm9yZGVyKSB7XG5cbiAgICAgIC8vIENvbnZlcnQgdGhlIHBvc2l0aW9uIC0gaW5zaWRlLCBjZW50ZXIsIG91dHNpZGVcbiAgICAgIGxldCBwb3NpdGlvbiA9ICcnO1xuICAgICAgaWYgKGRhdGEuc3Ryb2tlQWxpZ24gPT09ICdJTlNJREUnKSB7XG4gICAgICAgIHBvc2l0aW9uID0gIDE7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuc3Ryb2tlQWxpZ24gPT09ICdPVVRTSURFJykge1xuICAgICAgICBwb3NpdGlvbiA9ICAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24gPSAgMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbG9yID0gJyc7XG4gICAgICBpZiAoYm9yZGVyLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgY29sb3IgPSB7XG4gICAgICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAgICAgICAgIFwiYWxwaGFcIjogYm9yZGVyLm9wYWNpdHksXG4gICAgICAgICAgXCJibHVlXCI6IGJvcmRlci5jb2xvci5iLFxuICAgICAgICAgIFwiZ3JlZW5cIjogYm9yZGVyLmNvbG9yLmcsXG4gICAgICAgICAgXCJyZWRcIjogYm9yZGVyLmNvbG9yLnJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZ3JhZGllbnQgPSAnJztcbiAgICAgIGlmIChib3JkZXIudHlwZSA9PT0gJ0dSQURJRU5UX0xJTkVBUicpIHtcbiAgICAgICAgLy8gVE9ETzogQWRkIHN1cHBvcnQgZm9yIEdyYWRpZW50c1xuICAgICAgfVxuXG4gICAgICBuZXdCb3JkZXJzLnB1c2goe1xuICAgICAgICBcIl9jbGFzc1wiOiBcImJvcmRlclwiLFxuICAgICAgICBcImlzRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICBcImNvbG9yXCI6IGNvbG9yLFxuICAgICAgICBcImZpbGxUeXBlXCI6IDAsXG4gICAgICAgIFwicG9zaXRpb25cIjogcG9zaXRpb24sXG4gICAgICAgIFwidGhpY2tuZXNzXCI6IGRhdGEuc3Ryb2tlV2VpZ2h0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHN0eWxlLmJvcmRlcnMgPSBuZXdCb3JkZXJzO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5maWxscykgJiYgZGF0YS5maWxscy5sZW5ndGgpIHtcbiAgICBsZXQgbmV3RmlsbHMgPSBbXTtcbiAgICBkYXRhLmZpbGxzLmZvckVhY2goZnVuY3Rpb24oZmlsbCkge1xuICAgICAgaWYgKGZpbGwudHlwZSA9PT0gJ0lNQUdFJykge1xuICAgICAgICBuZXdGaWxscy5wdXNoKHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcImZpbGxcIixcbiAgICAgICAgICBcImlzRW5hYmxlZFwiOiB0cnVlLFxuICAgICAgICAgIFwiZmlsbFR5cGVcIjogNCxcbiAgICAgICAgICBcImltYWdlXCI6IHtcbiAgICAgICAgICAgIFwiX2NsYXNzXCI6IFwiTVNKU09ORmlsZVJlZmVyZW5jZVwiLFxuICAgICAgICAgICAgXCJfcmVmX2NsYXNzXCI6IFwiTVNJbWFnZURhdGFcIixcbiAgICAgICAgICAgIFwiX3JlZlwiOiBgaW1hZ2VzXFwvJHtmaWxsLmltYWdlUmVmfS5wbmdgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm5vaXNlSW5kZXhcIjogMCxcbiAgICAgICAgICBcIm5vaXNlSW50ZW5zaXR5XCI6IDAsXG4gICAgICAgICAgXCJwYXR0ZXJuRmlsbFR5cGVcIjogMSxcbiAgICAgICAgICBcInBhdHRlcm5UaWxlU2NhbGVcIjogMVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsbC50eXBlID09PSAnU09MSUQnKSB7XG4gICAgICAgIG5ld0ZpbGxzLnB1c2goe1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiZmlsbFwiLFxuICAgICAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgICAgICBcImFscGhhXCI6IGZpbGwub3BhY2l0eSxcbiAgICAgICAgICAgIFwiYmx1ZVwiOiBmaWxsLmNvbG9yLmIsXG4gICAgICAgICAgICBcImdyZWVuXCI6IGZpbGwuY29sb3IuZyxcbiAgICAgICAgICAgIFwicmVkXCI6IGZpbGwuY29sb3IuclxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJmaWxsVHlwZVwiOiAwLFxuICAgICAgICAgIFwibm9pc2VJbmRleFwiOiAwLFxuICAgICAgICAgIFwibm9pc2VJbnRlbnNpdHlcIjogMCxcbiAgICAgICAgICBcInBhdHRlcm5GaWxsVHlwZVwiOiAxLFxuICAgICAgICAgIFwicGF0dGVyblRpbGVTY2FsZVwiOiAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3R5bGUuZmlsbHMgPSBuZXdGaWxscztcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0eXBlID09PSBcIlBBR0VcIikge1xuICAgIHJldHVybiBcInBhZ2VcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICByZXR1cm4gXCJhcnRib2FyZFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiR1JPVVBcIikge1xuICAgIHJldHVybiBcImdyb3VwXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJDT01QT05FTlRcIikge1xuICAgIHJldHVybiBcInN5bWJvbE1hc3RlclwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiSU5TVEFOQ0VcIikge1xuICAgIHJldHVybiBcInN5bWJvbEluc3RhbmNlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJSRUNUQU5HTEVcIikge1xuICAgIHJldHVybiBcInJlY3RhbmdsZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRUxMSVBTRVwiKSB7XG4gICAgcmV0dXJuIFwib3ZhbFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiUkVHVUxBUl9QT0xZR09OXCIpIHtcbiAgICByZXR1cm4gXCJ0cmlhbmdsZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVkVDVE9SXCIpIHtcbiAgICByZXR1cm4gXCJzaGFwZVBhdGhcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlRFWFRcIikge1xuICAgIHJldHVybiBcInRleHRcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJcIlxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5lZGl0ZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IFt7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLjc3NjE0MjM3NDkwMDAwMDA0LCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAuMjIzODU3NjI1MTAwMDAwMDEsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezAuNSwgMX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAwLjIyMzg1NzYyNTEwMDAwMDAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDAuNzc2MTQyMzc0OTAwMDAwMDR9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezEsIDAuNX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLjIyMzg1NzYyNTEwMDAwMDAxLCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAuNzc2MTQyMzc0OTAwMDAwMDQsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezAuNSwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAwLjc3NjE0MjM3NDkwMDAwMDA0fVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDIsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDAuMjIzODU3NjI1MTAwMDAwMDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogdHJ1ZSxcbiAgICBcImhhc0N1cnZlVG9cIjogdHJ1ZSxcbiAgICBcInBvaW50XCI6IFwiezAsIDAuNX1cIlxuICB9XVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5lZGl0ZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IFt7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAwfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMX1cIlxuICB9XVxuICByZXN1bHQuZml4ZWRSYWRpdXMgPSAwO1xuICByZXN1bHQuaGFzQ29udmVydGVkVG9OZXdSb3VuZENvcm5lcnMgPSB0cnVlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5lZGl0ZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IFt7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLjUsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MC41LCAwfVwiLFxuICAgIFwiaGFzQ3VydmVGcm9tXCI6IGZhbHNlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiBmYWxzZSxcbiAgICBcInBvaW50XCI6IFwiezAuNSwgMH1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInsxLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezEsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMX1cIlxuICB9LCB7XG4gICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICBcImN1cnZlRnJvbVwiOiBcInswLCAxfVwiLFxuICAgIFwiY3VydmVNb2RlXCI6IDEsXG4gICAgXCJjdXJ2ZVRvXCI6IFwiezAsIDF9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMX1cIlxuICB9XVxuICByZXN1bHQuaXNFcXVpbGF0ZXJhbCA9IGZhbHNlO1xufVxuIiwiY29uc3QgcGFyc2UgPSByZXF1aXJlKFwiZC1wYXRoLXBhcnNlclwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIGNvbnN0IG5ld1BhdGggPSBbXTtcbiAgY29uc3Qgb2JqV2lkdGggPSBkYXRhLmFic29sdXRlQm91bmRpbmdCb3gud2lkdGg7XG4gIGNvbnN0IG9iakhlaWdodCA9IGRhdGEuYWJzb2x1dGVCb3VuZGluZ0JveC5oZWlnaHQ7XG5cbiAgLypcblxuICBUaGVyZSdzIGEgcHJvYmxlbSB3aXRoIHJlbGF0aXZlVHJhbnNmb3JtIGFzIGl0IGtlZXBzIHRoZSBvcmlnaW5hbCBzaXplIG9mIHRoZSBPYmplY3RcblxuICBhYnNvbHV0ZUJvdW5kaW5nQm94OiB7IHg6IC0xNTQzLCB5OiAxMzcsIHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCB9LFxuICBwcmVzZXJ2ZVJhdGlvOiB0cnVlLFxuICBjb25zdHJhaW50czogeyB2ZXJ0aWNhbDogJ1RPUCcsIGhvcml6b250YWw6ICdMRUZUJyB9LFxuICByZWxhdGl2ZVRyYW5zZm9ybTogWyBbIDAuMDUwMDAwMDAwNzQ1MDU4MDYsIDAsIDM4IF0sIFsgMCwgLTAuMDUwMDAwMDAwNzQ1MDU4MDYsIDU3MyBdIF0sXG4gIHNpemU6IHsgeDogNjAwLCB5OiA2MDAgfSxcbiAgZmlsbHM6IFsgeyBibGVuZE1vZGU6ICdOT1JNQUwnLCB0eXBlOiAnU09MSUQnLCBjb2xvcjogW09iamVjdF0gfSBdLFxuICBmaWxsR2VvbWV0cnk6IFtcbiAgICB7XG4gICAgICBwYXRoOiAnTTI1IDBMNTc1IDBDNjAwIDAgNjAwIDAgNjAwIDI1TDYwMCA1NzVDNjAwIDYwMCA2MDAgNjAwIDU3NSA2MDBMMjUgNjAwQzAgNjAwIDAgNjAwIDAgNTc1TDAgMjVDMCAwIDAgMCAyNSAwWk0xMjUgMTAwTDQ3NSAxMDBDNTAwIDEwMCA1MDAgMTAwIDUwMCAxMjVDNTAwIDE1MCA1MDAgMTUwIDQ3NSAxNTBMMTI1IDE1MEMxMDAgMTUwIDEwMCAxNTAgMTAwIDEyNUMxMDAgMTAwIDEwMCAxMDAgMTI1IDEwMFpNMTAwIDE5OUw1MDAgMTk5TDQzMC41IDI3NUwzODcgMjMwLjVMMzQzLjUgMjc1TDMwMCAyMzAuNUwyNTYuNSAyNzVMMjEzIDIzMC41TDE2OSAyNzVMMTAwIDE5OVpNNTAgNTBMNTAgNTUwTDU1MCA1NTBMNTUwIDUwTDUwIDUwWicsXG4gICAgICB3aW5kaW5nUnVsZTogJ05PTlpFUk8nXG4gICAgfVxuICBdXG5cbiAgKi9cblxuICBjb25zdCB2ZWN0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChjb21tYW5kMSwgY29tbWFuZDIsIGNvbW1hbmQzKSB7XG4gICAgY29uc3QgYm9vbSA9IHtcbiAgICAgIFwiX2NsYXNzXCI6IFwiY3VydmVQb2ludFwiLFxuICAgICAgXCJjb3JuZXJSYWRpdXNcIjogMCxcbiAgICAgIFwiY3VydmVNb2RlXCI6IDQsXG4gICAgICBcInBvaW50XCI6IGB7JHtjb21tYW5kMS5lbmQueC9vYmpXaWR0aH0sICR7Y29tbWFuZDEuZW5kLnkvb2JqSGVpZ2h0fX1gXG4gICAgfVxuXG4gICAgaWYgKGNvbW1hbmQxLmNvZGUgPT09ICdNJykge1xuICAgICAgY29uc29sZS5sb2coY29tbWFuZDMpO1xuXG4gICAgICBpZiAoY29tbWFuZDIuY29kZSA9PT0gJ0MnKSB7XG4gICAgICAgIGJvb20uY3VydmVGcm9tID0gYHske2NvbW1hbmQyLmNwMS54L29ialdpZHRofSwgJHtjb21tYW5kMi5jcDEueS9vYmpIZWlnaHR9fWA7XG5cbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGNvbW1hbmQyLmNwMSkgPT09IEpTT04uc3RyaW5naWZ5KGNvbW1hbmQxLmVuZCkpIHtcbiAgICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IGZhbHNlO1xuICAgICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKEpTT04uc3RyaW5naWZ5KGNvbW1hbmQyLmNwMSkgIT09IEpTT04uc3RyaW5naWZ5KGNvbW1hbmQxLmVuZCkpIHtcbiAgICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IHRydWU7XG4gICAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1hbmQzLmNvZGUgPT09ICdDJykge1xuICAgICAgICBib29tLmN1cnZlVG8gPSBgeyR7Y29tbWFuZDMuY3AyLngvb2JqV2lkdGh9LCAke2NvbW1hbmQzLmNwMi55L29iakhlaWdodH19YDtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbW1hbmQxLmNvZGUgPT09ICdMJykge1xuICAgICAgaWYgKGNvbW1hbmQyLmNvZGUgPT09ICdDJykge1xuICAgICAgICBib29tLmN1cnZlRnJvbSA9IGB7JHtjb21tYW5kMi5jcDEueC9vYmpXaWR0aH0sICR7Y29tbWFuZDIuY3AxLnkvb2JqSGVpZ2h0fX1gO1xuXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjb21tYW5kMi5jcDEpID09PSBKU09OLnN0cmluZ2lmeShjb21tYW5kMS5lbmQpKSB7XG4gICAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSBmYWxzZTtcbiAgICAgICAgICBib29tLmhhc0N1cnZlVG8gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChKU09OLnN0cmluZ2lmeShjb21tYW5kMi5jcDEpICE9PSBKU09OLnN0cmluZ2lmeShjb21tYW5kMS5lbmQpKSB7XG4gICAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSB0cnVlO1xuICAgICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb21tYW5kMS5jb2RlID09PSAnQycpIHtcbiAgICAgIGlmIChjb21tYW5kMi5jb2RlID09PSAnTCcpIHtcbiAgICAgICAgYm9vbS5jdXJ2ZVRvID0gYHske2NvbW1hbmQxLmNwMi54L29ialdpZHRofSwgJHtjb21tYW5kMS5jcDIueS9vYmpIZWlnaHR9fWA7XG4gICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gZmFsc2U7XG4gICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGNvbW1hbmQyLmNvZGUgPT09ICdDJykge1xuICAgICAgICBib29tLmN1cnZlRnJvbSA9IGB7JHtjb21tYW5kMi5jcDEueC9vYmpXaWR0aH0sICR7Y29tbWFuZDIuY3AxLnkvb2JqSGVpZ2h0fX1gO1xuICAgICAgICBib29tLmN1cnZlVG8gPSBgeyR7Y29tbWFuZDEuY3AyLngvb2JqV2lkdGh9LCAke2NvbW1hbmQxLmNwMi55L29iakhlaWdodH19YDtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSB0cnVlO1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGJvb20pO1xuXG4gICAgbmV3UGF0aC5wdXNoKGJvb20pO1xuICB9XG5cbiAgZGF0YS5maWxsR2VvbWV0cnkubWFwKHBhdGggPT4ge1xuICAgIGNvbnN0IG5vWiA9IHBhdGgucGF0aC5zdWJzdHJpbmcoMCwgcGF0aC5wYXRoLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IHNwbGl0ID0gbm9aLnNwbGl0KCdaJyk7XG5cbiAgICBzcGxpdC5tYXAoc2luZ2xlU3BsaXQgPT4ge1xuICAgICAgY29uc29sZS5sb2coc2luZ2xlU3BsaXQpO1xuICAgICAgY29uc3QgY29tbWFuZHMgPSBwYXJzZShzaW5nbGVTcGxpdCk7XG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tICcgKyBkYXRhLm5hbWUgKyAnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJyk7XG4gICAgICBjb25zb2xlLmxvZyhjb21tYW5kcyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWFuZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIC8vIFRha2UgdGhlIGVsZW1lbnQsIHRoZSBuZXh0IG9uZSBhbmQgdGhlIGxhc3QgZnJvbSB0aGUgbGlzdFxuICAgICAgICB2ZWN0b3JGdW5jdGlvbihjb21tYW5kc1tpXSwgY29tbWFuZHNbaSsxXSwgY29tbWFuZHNbY29tbWFuZHMubGVuZ3RoIC0gMV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyBkYXRhLnN0cm9rZUdlb21ldHJ5Lm1hcChwYXRoID0+IHtcbiAgLy8gICBjb25zdCBjb21tYW5kcyA9IHBhcnNlKHBhdGgucGF0aCk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLSAnICsgZGF0YS5uYW1lICsgJyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tICcpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKGNvbW1hbmRzKTtcbiAgLy9cbiAgLy8gICBjb21tYW5kcy5tYXAoY3VydmVQb2ludCA9PiB7XG4gIC8vICAgICB2ZWN0b3JGdW5jdGlvbihjdXJ2ZVBvaW50KTtcbiAgLy8gICB9KTtcbiAgLy8gfSk7XG5cbiAgcmVzdWx0LmVkaXRlZCA9IHRydWU7XG4gIHJlc3VsdC5pc0Nsb3NlZCA9IHRydWU7XG4gIHJlc3VsdC5wb2ludFJhZGl1c0JlaGF2aW91ciA9IDE7XG4gIHJlc3VsdC5wb2ludHMgPSBuZXdQYXRoO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gXCJMRUZUXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIkNFTlRFUlwiKSB7XG4gICAgcmV0dXJuIDI7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJSSUdIVFwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IFwiVVBQRVJcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBcIlRPUFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJDRU5URVJcIikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiQk9UVE9NXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwiY29uc3QgdGV4dEFsaWduZW1lbnQgPSByZXF1aXJlKCcuL19ob3Jpem9udGFsQWxpZ25lbWVudCcpO1xuY29uc3QgdGV4dFZlcnRpY2FsQWxpZ25lbWVudCA9IHJlcXVpcmUoJy4vX3ZlcnRpY2FsQWxpZ25lbWVudCcpO1xuY29uc3QgdGV4dENhc2UgPSByZXF1aXJlKCcuL190ZXh0Q2FzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgLy8gY29uc3QgY29sb3IgPSB7fTtcbiAgLy8gZm9yIChsZXQgaSBpbiBkYXRhLmZpbGxzKSB7XG4gIC8vICAgaWYoZGF0YS5maWxsc1tpXS50eXBlID09PSAnU09MSUQnKSB7XG4gIC8vICAgICBjb2xvci5hID0gZGF0YS5maWxsc1tpXS5vcGFjaXR5O1xuICAvLyAgICAgY29sb3IuYiA9IGRhdGEuZmlsbHNbaV0uY29sb3IuYjtcbiAgLy8gICAgIGNvbG9yLmcgPSBkYXRhLmZpbGxzW2ldLmNvbG9yLmc7XG4gIC8vICAgICBjb2xvci5yID0gZGF0YS5maWxsc1tpXS5jb2xvci5yO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyByZXN1bHQuc3R5bGUudGV4dFN0eWxlID0ge1xuICAvLyAgIFwiX2NsYXNzXCI6IFwidGV4dFN0eWxlXCIsXG4gIC8vICAgXCJlbmNvZGVkQXR0cmlidXRlc1wiOiB7XG4gIC8vICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0NvbG9yQXR0cmlidXRlXCI6IHtcbiAgLy8gICAgICAgXCJfY2xhc3NcIjogXCJjb2xvclwiLFxuICAvLyAgICAgICBcImFscGhhXCI6IGNvbG9yLmEsXG4gIC8vICAgICAgIFwiYmx1ZVwiOiBjb2xvci5iLFxuICAvLyAgICAgICBcImdyZWVuXCI6IGNvbG9yLmcsXG4gIC8vICAgICAgIFwicmVkXCI6IGNvbG9yLnJcbiAgLy8gICAgIH0sXG4gIC8vICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0ZvbnRBdHRyaWJ1dGVcIjoge1xuICAvLyAgICAgICBcIl9jbGFzc1wiOiBcIlVJRm9udERlc2NyaXB0b3JcIixcbiAgLy8gICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgLy8gICAgICAgICBcIm5hbWVcIjogZGF0YS5mb250TmFtZS5mYW1pbHksXG4gIC8vICAgICAgICAgXCJzaXplXCI6IGRhdGEuZm9udFNpemVcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSxcbiAgLy8gICAgIFwidGV4dFN0eWxlVmVydGljYWxBbGlnbm1lbnRLZXlcIjogMCxcbiAgLy8gICAgIFwicGFyYWdyYXBoU3R5bGVcIjoge1xuICAvLyAgICAgICBcIl9jbGFzc1wiOiBcInBhcmFncmFwaFN0eWxlXCIsXG4gIC8vICAgICAgIFwibWF4aW11bUxpbmVIZWlnaHRcIjogZGF0YS5saW5lSGVpZ2h0LnZhbHVlLFxuICAvLyAgICAgICBcIm1pbmltdW1MaW5lSGVpZ2h0XCI6IGRhdGEubGluZUhlaWdodC52YWx1ZSxcbiAgLy8gICAgICAgXCJhbGlnbm1lbnRcIjogdGV4dEFsaWduZW1lbnQoZGF0YS50ZXh0QWxpZ25Ib3Jpem9udGFsKVxuICAvLyAgICAgfSxcbiAgLy8gICAgIFwia2VybmluZ1wiOiBkYXRhLmxldHRlclNwYWNpbmcudmFsdWVcbiAgLy8gICB9LFxuICAvLyAgIFwidmVydGljYWxBbGlnbm1lbnRcIjogdGV4dFZlcnRpY2FsQWxpZ25lbWVudChkYXRhLnRleHRBbGlnblZlcnRpY2FsKVxuICAvLyB9O1xuICAvLyByZXN1bHQuYXR0cmlidXRlZFN0cmluZyA9IHtcbiAgLy8gICBcIl9jbGFzc1wiOiBcImF0dHJpYnV0ZWRTdHJpbmdcIixcbiAgLy8gICBcInN0cmluZ1wiOiBkYXRhLmNoYXJhY3RlcnMsXG4gIC8vICAgXCJhdHRyaWJ1dGVzXCI6IFt7XG4gIC8vICAgICBcIl9jbGFzc1wiOiBcInN0cmluZ0F0dHJpYnV0ZVwiLFxuICAvLyAgICAgXCJsb2NhdGlvblwiOiAwLFxuICAvLyAgICAgXCJsZW5ndGhcIjogZGF0YS5jaGFyYWN0ZXJzLmxlbmd0aCxcbiAgLy8gICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gIC8vICAgICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nRm9udEF0dHJpYnV0ZVwiOiB7XG4gIC8vICAgICAgICAgXCJfY2xhc3NcIjogXCJVSUZvbnREZXNjcmlwdG9yXCIsXG4gIC8vICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgLy8gICAgICAgICAgIFwibmFtZVwiOiBkYXRhLmZvbnROYW1lLmZhbWlseSxcbiAgLy8gICAgICAgICAgIFwic2l6ZVwiOiBkYXRhLmZvbnRTaXplXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9LFxuICAvLyAgICAgICBcIk1TQXR0cmlidXRlZFN0cmluZ0NvbG9yQXR0cmlidXRlXCI6IHtcbiAgLy8gICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gIC8vICAgICAgICAgXCJhbHBoYVwiOiBjb2xvci5hLFxuICAvLyAgICAgICAgIFwiYmx1ZVwiOiBjb2xvci5iLFxuICAvLyAgICAgICAgIFwiZ3JlZW5cIjogY29sb3IuZyxcbiAgLy8gICAgICAgICBcInJlZFwiOiBjb2xvci5yXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIFwicGFyYWdyYXBoU3R5bGVcIjoge1xuICAvLyAgICAgICAgIFwiX2NsYXNzXCI6IFwicGFyYWdyYXBoU3R5bGVcIixcbiAgLy8gICAgICAgICBcImFsaWdubWVudFwiOiB0ZXh0QWxpZ25lbWVudChkYXRhLnRleHRBbGlnbkhvcml6b250YWwpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XVxuICAvLyB9O1xuXG4gIC8vIGlmIChkYXRhLnRleHRDYXNlKSB7XG4gIC8vICAgcmVzdWx0LnN0eWxlLnRleHRTdHlsZS5lbmNvZGVkQXR0cmlidXRlcy5NU0F0dHJpYnV0ZWRTdHJpbmdUZXh0VHJhbnNmb3JtQXR0cmlidXRlID0gMTtcbiAgLy8gICByZXN1bHQuYXR0cmlidXRlZFN0cmluZy5hdHRyaWJ1dGVzWzBdLmF0dHJpYnV0ZXMuTVNBdHRyaWJ1dGVkU3RyaW5nVGV4dFRyYW5zZm9ybUF0dHJpYnV0ZSA9IHRleHRDYXNlKGRhdGEudGV4dENhc2UpO1xuICAvLyB9XG4gIC8vXG4gIC8vIHJlc3VsdC5hdXRvbWF0aWNhbGx5RHJhd09uVW5kZXJseWluZ1BhdGggPSBmYWxzZTtcbiAgLy8gcmVzdWx0LmRvbnRTeW5jaHJvbmlzZVdpdGhTeW1ib2wgPSBmYWxzZTtcbiAgLy8gcmVzdWx0LmdseXBoQm91bmRzID0gXCJ7ezAsIDR9LCB7MzgsIDh9fVwiO1xuICAvLyByZXN1bHQubGluZVNwYWNpbmdCZWhhdmlvdXIgPSAyO1xuICAvLyByZXN1bHQudGV4dEJlaGF2aW91ciA9IDI7XG59XG4iLCIvLyBNT1ZFIFRPIEVTNiBpbXBvcnRzIGFuZCBUUz9cbmNvbnN0IHR5cGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvdHlwZScpO1xuY29uc3Qgc2V0U3R5bGUgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3R5bGUnKTtcbmNvbnN0IHBvc2l0aW9uID0gcmVxdWlyZSgnLi9oZWxwZXJzL3Bvc2l0aW9uJyk7XG5jb25zdCBjYW52YXMgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvY2FudmFzJyk7XG5jb25zdCBmcmFtZSA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9mcmFtZScpO1xuY29uc3QgZ3JvdXAgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvZ3JvdXAnKTtcbmNvbnN0IGNvbXBvbmVudCA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9jb21wb25lbnQnKTtcbmNvbnN0IGluc3RhbmNlID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2luc3RhbmNlJyk7XG5jb25zdCByZWN0YW5nbGUgPSByZXF1aXJlKCcuL3NoYXBlcy9yZWN0YW5nbGUnKTtcbmNvbnN0IHRyaWFuZ2xlID0gcmVxdWlyZSgnLi9zaGFwZXMvdHJpYW5nbGUnKTtcbmNvbnN0IGVsbGlwc2UgPSByZXF1aXJlKCcuL3NoYXBlcy9lbGxpcHNlJyk7XG5jb25zdCB2ZWN0b3IgPSByZXF1aXJlKCcuL3NoYXBlcy92ZWN0b3InKTtcbmNvbnN0IHRleHQgPSByZXF1aXJlKCcuL3RleHQvaW5kZXgnKTtcblxuY29uc3QgdHJhbnNmb3JtID0gKGRhdGEsIHBhcmVudCA9IHt9KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIC8vIENhbiB0aGVzZSBqdXN0IGJlIGRlZmluZWQgdXAgZnJvbnQ/XG4gIHJlc3VsdC5fY2xhc3MgPSB0eXBlKGRhdGEudHlwZSksXG4gIHJlc3VsdC5kb19vYmplY3RJRCA9IGRhdGEuaWQ7XG4gIHJlc3VsdC5ib29sZWFuT3BlcmF0aW9uID0gLTE7XG4gIHJlc3VsdC5leHBvcnRPcHRpb25zID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiZXhwb3J0T3B0aW9uc1wiLFxuICAgIFwiZXhwb3J0Rm9ybWF0c1wiOiBbXSxcbiAgICBcImluY2x1ZGVkTGF5ZXJJZHNcIjogW10sXG4gICAgXCJsYXllck9wdGlvbnNcIjogMCxcbiAgICBcInNob3VsZFRyaW1cIjogZmFsc2VcbiAgfTtcbiAgcmVzdWx0LmZyYW1lID0ge1xuICAgIFwiX2NsYXNzXCI6IFwicmVjdFwiLFxuICAgIFwiY29uc3RyYWluUHJvcG9ydGlvbnNcIjogZmFsc2UsXG4gIH07XG4gIHJlc3VsdC5pc0ZpeGVkVG9WaWV3cG9ydCA9IGZhbHNlO1xuICByZXN1bHQuaXNGbGlwcGVkSG9yaXpvbnRhbCA9IGZhbHNlO1xuICByZXN1bHQuaXNGbGlwcGVkVmVydGljYWwgPSBmYWxzZTtcbiAgcmVzdWx0LmlzTG9ja2VkID0gZmFsc2U7XG4gIHJlc3VsdC5pc1Zpc2libGUgPSB0cnVlO1xuICByZXN1bHQubGF5ZXJMaXN0RXhwYW5kZWRUeXBlID0gMDtcbiAgcmVzdWx0Lm5hbWUgPSBkYXRhLm5hbWU7XG4gIHJlc3VsdC5uYW1lSXNGaXhlZCA9IGZhbHNlO1xuICByZXN1bHQucmVzaXppbmdDb25zdHJhaW50ID0gNjM7XG4gIHJlc3VsdC5yZXNpemluZ1R5cGUgPSAwO1xuICByZXN1bHQucm90YXRpb24gPSAwO1xuICByZXN1bHQuc2hvdWxkQnJlYWtNYXNrQ2hhaW4gPSBmYWxzZTtcbiAgcmVzdWx0LmNsaXBwaW5nTWFza01vZGUgPSAwO1xuICByZXN1bHQuaGFzQ2xpcHBpbmdNYXNrID0gZmFsc2U7XG4gIHJlc3VsdC5zdHlsZSA9IHNldFN0eWxlKGRhdGEpO1xuXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIC8vIFRoaXMgaXMgdG8gdXBkYXRlIHRoZSBwb3NpdGlvbiB0byBiZSByZWxhdGl2ZSBhbmQgbm90IGFic29sdXRlLlxuICAvLyBTa2V0Y2ggdXNlcyByZWxhdGl2ZSBwb3NpdGlvbiB0byBpdHMgcGFyZW50LlxuICAvLyBQYWdlIGlzIHRoZSB0b3AgbGV2ZWwgc28gb2J2aW91c2x5IGRvZXNuJ3QgbmVlZCB0aGlzIGNvZGVcbiAgaWYgKGRhdGEudHlwZSAhPT0gJ1BBR0UnKSB7XG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBwb3NpdGlvbihwYXJlbnQsIGRhdGEpO1xuICAgIHJlc3VsdC5mcmFtZS54ID0gZGF0YS54O1xuICAgIHJlc3VsdC5mcmFtZS55ID0gZGF0YS55O1xuICAgIHJlc3VsdC5mcmFtZS5oZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICByZXN1bHQuZnJhbWUud2lkdGggPSAgZGF0YS53aWR0aDtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgd2hlcmUgdGhlIG1hZ2ljIGhhcHBlbiAtIFJlY3Vyc2lvbiB0byBjcmVhdGUgYWxsIHRoZSBsYXllcnMuXG4gIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgcmVzdWx0LmxheWVycyA9IGRhdGEuY2hpbGRyZW4ubWFwKGNoaWxkID0+IHRyYW5zZm9ybShjaGlsZCwgZGF0YSkpO1xuICB9XG5cbiAgLy8gRWFjaCBjYXNlIG5lZWQgdG8gYmUgdXBkYXRlZCB1c2luZyBGaWdtYSBwbHVnaW4gQVBJLlxuICAvLyBUaGUgc3RydWN0dXJlIGlzbid0IHRoZSBzYW1lIGFzIHRoZSBSRVNUIEFQSVxuICBzd2l0Y2goZGF0YS50eXBlKSB7XG4gICAgY2FzZSAnUEFHRSc6XG4gICAgICBjYW52YXMoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0ZSQU1FJzpcbiAgICAgIGZyYW1lKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdHUk9VUCc6XG4gICAgICBncm91cChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQ09NUE9ORU5UJzpcbiAgICAgIGNvbXBvbmVudChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnSU5TVEFOQ0UnOlxuICAgICAgaW5zdGFuY2UoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1JFQ1RBTkdMRSc6XG4gICAgICByZWN0YW5nbGUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VMTElQU0UnOlxuICAgICAgZWxsaXBzZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUkVHVUxBUl9QT0xZR09OJzpcbiAgICAgIHRyaWFuZ2xlKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICAvLyBjYXNlICdWRUNUT1InOlxuICAgIC8vICAgdmVjdG9yKGRhdGEsIHJlc3VsdCk7XG4gICAgLy8gICBicmVhaztcbiAgICBjYXNlICdURVhUJzpcbiAgICAgIHRleHQoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNmb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==