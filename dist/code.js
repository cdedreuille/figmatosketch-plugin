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

  console.log(data);

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
    // case 'COMPONENT':
    //   component(data, result);
    //   break;
    // case 'INSTANCE':
    //   instance(data, result);
    //   break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QtcGF0aC1wYXJzZXIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2NvbnRhaW5lcnMvZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9jb250YWluZXJzL2dyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvY29udGFpbmVycy9pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvYmxlbmRNb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvaGVscGVycy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL2hlbHBlcnMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9oZWxwZXJzL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvZWxsaXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3NoYXBlcy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9zaGFwZXMvdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb252ZXJ0ZXIvdGV4dC9faG9yaXpvbnRhbEFsaWduZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90ZXh0L190ZXh0Q2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvX3ZlcnRpY2FsQWxpZ25lbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udmVydGVyL3RleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci90cmFuc2Zvcm1lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUEwQztBQUNsRDtBQUNBLFFBQVEsaUNBQU8sRUFBRSxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLG9HQUFDO0FBQzNCLEtBQUssTUFBTSxFQVFOO0FBQ0wsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3RELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3RELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxhQUFhO0FBQzNELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZTtBQUN2RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hLRDtBQUFBO0FBQUE7QUFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw2REFBVztBQUNsRSxrQ0FBa0MsMEJBQTBCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FB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QUFPLENBQUMsdURBQWdCO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLHlEQUFpQjtBQUMxQyxpQkFBaUIsbUJBQU8sQ0FBQywrREFBb0I7QUFDN0MsZUFBZSxtQkFBTyxDQUFDLGlFQUFxQjtBQUM1QyxjQUFjLG1CQUFPLENBQUMsK0RBQW9CO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQywrREFBb0I7QUFDMUMsa0JBQWtCLG1CQUFPLENBQUMsdUVBQXdCO0FBQ2xELGlCQUFpQixtQkFBTyxDQUFDLHFFQUF1QjtBQUNoRCxrQkFBa0IsbUJBQU8sQ0FBQywrREFBb0I7QUFDOUMsaUJBQWlCLG1CQUFPLENBQUMsNkRBQW1CO0FBQzVDLGdCQUFnQixtQkFBTyxDQUFDLDJEQUFrQjtBQUMxQyxlQUFlLG1CQUFPLENBQUMseURBQWlCO0FBQ3hDLGFBQWEsbUJBQU8sQ0FBQyxtREFBYzs7QUFFbkMsb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiLyohXG4gKiBkLXBhdGgtcGFyc2VyIC0gdjEuMC4wXG4gKiBieSBNYXNzaW1vIEFydGl6enUgKE1heEFydDI1MDEpXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01heEFydDI1MDEvZC1wYXRoLXBhcnNlclxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogU2VlIExJQ0VOU0UgZm9yIGRldGFpbHNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIHJvb3QuZFBhdGhQYXJzZSA9IGZhY3RvcnkoKTtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcblwidXNlIHN0cmljdFwiO1xuXG5yZXR1cm4gZnVuY3Rpb24gcGFyc2UoZCkge1xuICAgIHZhciByZSA9IHtcbiAgICAgICAgY29tbWFuZDogL1xccyooW2FjaGxtcXN0dnpdKS9naSxcbiAgICAgICAgbnVtYmVyOiAvXFxzKihbKy1dP1xcZCpcXC4/XFxkKyg/OmVbKy1dP1xcZCspPykvZ2ksXG4gICAgICAgIGNvbW1hOiAvXFxzKig/OigsKXxcXHMpL2csXG4gICAgICAgIGZsYWc6IC9cXHMqKFswMV0pL2dcbiAgICB9O1xuICAgIHZhciBtYXRjaGVycyA9IHtcbiAgICAgICAgXCJudW1iZXJcIjogZnVuY3Rpb24obXVzdCkge1xuICAgICAgICAgICAgcmV0dXJuICtnZXQoXCJudW1iZXJcIiwgbXVzdCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29vcmRpbmF0ZSBwYWlyXCI6IGZ1bmN0aW9uKG11c3QpIHtcbiAgICAgICAgICAgIHZhciB4ID0gZ2V0KFwibnVtYmVyXCIsIG11c3QpO1xuICAgICAgICAgICAgaWYgKHggPT09IG51bGwgJiYgIW11c3QpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgZ2V0KFwiY29tbWFcIik7XG4gICAgICAgICAgICB2YXIgeSA9IGdldChcIm51bWJlclwiLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB7IHg6ICt4LCB5OiAreSB9O1xuICAgICAgICB9LFxuICAgICAgICBcImFyYyBkZWZpbml0aW9uXCI6IGZ1bmN0aW9uKG11c3QpIHtcbiAgICAgICAgICAgIHZhciByYWRpaSA9IG1hdGNoZXJzW1wiY29vcmRpbmF0ZSBwYWlyXCJdKG11c3QpO1xuICAgICAgICAgICAgaWYgKCFyYWRpaSAmJiAhbXVzdCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBnZXQoXCJjb21tYVwiKTtcbiAgICAgICAgICAgIHZhciByb3RhdGlvbiA9ICtnZXQoXCJudW1iZXJcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBnZXQoXCJjb21tYVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBsYXJnZSA9ICEhK2dldChcImZsYWdcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBnZXQoXCJjb21tYVwiKTtcbiAgICAgICAgICAgIHZhciBjbG9ja3dpc2UgPSAhIStnZXQoXCJmbGFnXCIsIHRydWUpO1xuICAgICAgICAgICAgZ2V0KFwiY29tbWFcIik7XG4gICAgICAgICAgICB2YXIgZW5kID0gbWF0Y2hlcnNbXCJjb29yZGluYXRlIHBhaXJcIl0odHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJhZGlpOiByYWRpaSxcbiAgICAgICAgICAgICAgICByb3RhdGlvbjogcm90YXRpb24sXG4gICAgICAgICAgICAgICAgbGFyZ2U6IGxhcmdlLFxuICAgICAgICAgICAgICAgIGNsb2Nrd2lzZTogY2xvY2t3aXNlLFxuICAgICAgICAgICAgICAgIGVuZDogZW5kXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNvbW1hbmRzID0gW107XG5cbiAgICB3aGlsZSAoaW5kZXggPCBkLmxlbmd0aCkge1xuICAgICAgICB2YXIgY21kID0gZ2V0KFwiY29tbWFuZFwiKTtcbiAgICAgICAgdmFyIHVwY21kID0gY21kLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHZhciByZWxhdGl2ZSA9IGNtZCAhPT0gdXBjbWQ7XG4gICAgICAgIHZhciBzZXF1ZW5jZTtcbiAgICAgICAgc3dpdGNoICh1cGNtZCkge1xuICAgICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IGdldFNlcXVlbmNlKFwiY29vcmRpbmF0ZSBwYWlyXCIpLm1hcChmdW5jdGlvbihjb29yZHMsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDEpIGNtZCA9IHJlbGF0aXZlID8gXCJsXCIgOiBcIkxcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VDb21tYW5kKHsgZW5kOiBjb29yZHMgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgICAgY2FzZSBcIlRcIjpcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IGdldFNlcXVlbmNlKFwiY29vcmRpbmF0ZSBwYWlyXCIpLm1hcChmdW5jdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VDb21tYW5kKHsgZW5kOiBjb29yZHMgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ1wiOlxuICAgICAgICAgICAgICAgIHNlcXVlbmNlID0gZ2V0U2VxdWVuY2UoXCJjb29yZGluYXRlIHBhaXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlLmxlbmd0aCAlIDMpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiRXhwZWN0ZWQgY29vcmRpbmF0ZSBwYWlyIHRyaXBsZXQgYXQgcG9zaXRpb24gXCIgKyBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IHNlcXVlbmNlLnJlZHVjZShmdW5jdGlvbihzZXEsIGNvb3JkcywgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdCA9IGkgJSAzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcS5wdXNoKG1ha2VDb21tYW5kKHsgY3AxOiBjb29yZHMgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3QgPSBzZXFbc2VxLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFtyZXN0ID09PSAxID8gXCJjcDJcIiA6IFwiZW5kXCJdID0gY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXE7XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUVwiOlxuICAgICAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IGdldFNlcXVlbmNlKFwiY29vcmRpbmF0ZSBwYWlyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggJiAxKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkV4cGVjdGVkIGNvb3JkaW5hdGUgcGFpciBjb3VwbGUgYXQgcG9zaXRpb24gXCIgKyBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICBzZXF1ZW5jZSA9IHNlcXVlbmNlLnJlZHVjZShmdW5jdGlvbihzZXEsIGNvb3JkcywgaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2RkID0gaSAmIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb2RkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXEucHVzaChtYWtlQ29tbWFuZCh7IGNwOiBjb29yZHMgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3QgPSBzZXFbc2VxLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdC5lbmQgPSBjb29yZHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcTtcbiAgICAgICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICBjYXNlIFwiVlwiOlxuICAgICAgICAgICAgICAgIHNlcXVlbmNlID0gZ2V0U2VxdWVuY2UoXCJudW1iZXJcIikubWFwKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYWtlQ29tbWFuZCh7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgICAgICAgICAgc2VxdWVuY2UgPSBnZXRTZXF1ZW5jZShcImFyYyBkZWZpbml0aW9uXCIpLm1hcChtYWtlQ29tbWFuZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiWlwiOlxuICAgICAgICAgICAgICAgIHNlcXVlbmNlID0gWyB7IGNvZGU6IFwiWlwiIH0gXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb21tYW5kcy5wdXNoLmFwcGx5KGNvbW1hbmRzLCBzZXF1ZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbW1hbmRzO1xuXG4gICAgZnVuY3Rpb24gbWFrZUNvbW1hbmQob2JqKSB7XG4gICAgICAgIG9iai5jb2RlID0gY21kO1xuICAgICAgICBvYmoucmVsYXRpdmUgPSByZWxhdGl2ZTtcblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXQod2hhdCwgbXVzdCkge1xuICAgICAgICByZVt3aGF0XS5sYXN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgdmFyIHJlcyA9IHJlW3doYXRdLmV4ZWMoZCk7XG4gICAgICAgIGlmICghcmVzIHx8IHJlcy5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghbXVzdCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkV4cGVjdGVkIFwiICsgd2hhdCArIFwiIGF0IHBvc2l0aW9uIFwiICsgaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggPSByZVt3aGF0XS5sYXN0SW5kZXg7XG5cbiAgICAgICAgcmV0dXJuIHJlc1sxXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2VxdWVuY2Uod2hhdCkge1xuICAgICAgICB2YXIgc2VxdWVuY2UgPSBbXTtcbiAgICAgICAgdmFyIG1hdGNoZWQ7XG4gICAgICAgIHZhciBtdXN0ID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKG1hdGNoZWQgPSBtYXRjaGVyc1t3aGF0XShtdXN0KSkge1xuICAgICAgICAgICAgc2VxdWVuY2UucHVzaChtYXRjaGVkKTtcbiAgICAgICAgICAgIG11c3QgPSAhIWdldChcImNvbW1hXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlcXVlbmNlO1xuICAgIH1cbn07XG59KTtcbiIsImltcG9ydCB0cmFuc2Zvcm1lciBmcm9tICcuL2NvbnZlcnRlci90cmFuc2Zvcm1lcic7XG5maWdtYS5zaG93VUkoX19odG1sX18pO1xuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NvbnZlcnQnOlxuICAgICAgICAgICAgY29uc3QgZmlnbWFQYWdlcyA9IGZpZ21hLnJvb3QuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBza2V0Y2hQYWdlcyA9IGZpZ21hUGFnZXMubWFwKHBhZ2UgPT4gdHJhbnNmb3JtZXIocGFnZSkpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBmaWdtYVBhZ2VzLCBza2V0Y2hQYWdlcyB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkb3dubG9hZCc6XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIElzIHRoaXMgbmVlZGVkP1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuZ3JvdXBMYXlvdXQgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJNU0ltbXV0YWJsZUZyZWVmb3JtR3JvdXBMYXlvdXRcIlxuICB9O1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gdHJ1ZTtcbiAgcmVzdWx0Lmhvcml6b250YWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMzNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9O1xuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlO1xuICByZXN1bHQudmVydGljYWxSdWxlckRhdGEgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJydWxlckRhdGFcIixcbiAgICBcImJhc2VcIjogLTMwNixcbiAgICBcImd1aWRlc1wiOiBbXVxuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSB0cnVlO1xuICByZXN1bHQuaW5jbHVkZUluQ2xvdWRVcGxvYWQgPSB0cnVlO1xuICByZXN1bHQuYmFja2dyb3VuZENvbG9yID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICBcImFscGhhXCI6IGRhdGEuYmFja2dyb3VuZENvbG9yLmEsXG4gICAgXCJibHVlXCI6IGRhdGEuYmFja2dyb3VuZENvbG9yLmIsXG4gICAgXCJncmVlblwiOiBkYXRhLmJhY2tncm91bmRDb2xvci5nLFxuICAgIFwicmVkXCI6IGRhdGEuYmFja2dyb3VuZENvbG9yLnJcbiAgfTtcbiAgcmVzdWx0Lmhhc0JhY2tncm91bmRDb2xvciA9IHRydWU7XG4gIHJlc3VsdC5pbmNsdWRlQmFja2dyb3VuZENvbG9ySW5JbnN0YW5jZSA9IHRydWU7XG4gIHJlc3VsdC5zeW1ib2xJRCA9IGRhdGEuaWQ7XG4gIHJlc3VsdC5jaGFuZ2VJZGVudGlmaWVyID0gNjtcbiAgcmVzdWx0Lm92ZXJyaWRlUHJvcGVydGllcyA9IFtdO1xuICByZXN1bHQuYWxsb3dzT3ZlcnJpZGVzID0gdHJ1ZTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaGFzQ2xpY2tUaHJvdWdoID0gdHJ1ZTtcbiAgcmVzdWx0LmluY2x1ZGVJbkNsb3VkVXBsb2FkID0gdHJ1ZTtcblxuICAvLyBOZWVkIHRvIGFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBiYWNrZ3JvdW5kc1xuICAvLyBOZWVkIHN1cHBvcnQgZm9yIG90aGVyIHR5cGVzIG9mIGJhY2tncm91bmRzXG4gIGlmKGRhdGEuYmFja2dyb3VuZHMubGVuZ3RoID49IDEpIHtcbiAgICBpZihkYXRhLmJhY2tncm91bmRzWzBdLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IgPSB7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgXCJhbHBoYVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLm9wYWNpdHksXG4gICAgICAgIFwiYmx1ZVwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLmIsXG4gICAgICAgIFwiZ3JlZW5cIjogZGF0YS5iYWNrZ3JvdW5kc1swXS5jb2xvci5nLFxuICAgICAgICBcInJlZFwiOiBkYXRhLmJhY2tncm91bmRzWzBdLmNvbG9yLnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJlc3VsdC5oYXNCYWNrZ3JvdW5kQ29sb3IgPSB0cnVlO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzdWx0KSB7XG4gIHJlc3VsdC5oYXNDbGlja1Rocm91Z2ggPSBmYWxzZTtcbiAgcmVzdWx0Lmdyb3VwTGF5b3V0ID0ge1xuICAgIFwiX2NsYXNzXCI6IFwiTVNJbW11dGFibGVGcmVlZm9ybUdyb3VwTGF5b3V0XCJcbiAgfVxuICByZXN1bHQuaG9yaXpvbnRhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzM2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH0sXG4gIHJlc3VsdC5pbmNsdWRlSW5DbG91ZFVwbG9hZCA9IHRydWUsXG4gIHJlc3VsdC52ZXJ0aWNhbFJ1bGVyRGF0YSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInJ1bGVyRGF0YVwiLFxuICAgIFwiYmFzZVwiOiAtMzA2LFxuICAgIFwiZ3VpZGVzXCI6IFtdXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICByZXN1bHQuaG9yaXpvbnRhbFNwYWNpbmcgPSAwO1xuICByZXN1bHQub3ZlcnJpZGVWYWx1ZXMgPSBbXTtcbiAgcmVzdWx0LnNjYWxlID0gMTtcbiAgcmVzdWx0LnN5bWJvbElEID0gZGF0YS5jb21wb25lbnRJZDtcbiAgcmVzdWx0LnZlcnRpY2FsU3BhY2luZyA9IDA7XG5cbiAgY29uc3Qgb3ZlcnJpZGVzID0gW107XG5cbiAgZGF0YS5jaGlsZHJlbi5tYXAoKG92ZXJyaWRlKSA9PiB7XG4gICAgY29uc3QgZWxlbUlkID0gb3ZlcnJpZGUuaWQuc3BsaXQoXCI7XCIpO1xuXG4gICAgaWYob3ZlcnJpZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICBvdmVycmlkZXMucHVzaCh7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwib3ZlcnJpZGVWYWx1ZVwiLFxuICAgICAgICBcImRvX29iamVjdElEXCI6IGVsZW1JZFswXSxcbiAgICAgICAgXCJvdmVycmlkZU5hbWVcIjogYCR7ZWxlbUlkWzFdfV9zdHJpbmdWYWx1ZWAsXG4gICAgICAgIFwidmFsdWVcIjogb3ZlcnJpZGUuY2hhcmFjdGVyc1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICByZXN1bHQub3ZlcnJpZGVWYWx1ZXMgPSBvdmVycmlkZXM7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0eXBlID09PSBcIlBBU1NfVEhST1VHSFwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJOT1JNQUxcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiREFSS0VOXCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIk1VTFRJUExZXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTE9SX0JVUk5cIikge1xuICAgIHJldHVybiAzO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiTElHSFRFTlwiKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTQ1JFRU5cIikge1xuICAgIHJldHVybiA1O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiQ09MT1JfRE9ER0VcIikge1xuICAgIHJldHVybiA2O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiT1ZFUkxBWVwiKSB7XG4gICAgcmV0dXJuIDc7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJTT0ZUX0xJR0hUXCIpIHtcbiAgICByZXR1cm4gODtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkhBUkRfTElHSFRcIikge1xuICAgIHJldHVybiA5O1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRElGRkVSRU5DRVwiKSB7XG4gICAgcmV0dXJuIDEwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRVhDTFVTSU9OXCIpIHtcbiAgICByZXR1cm4gMTE7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJIVUVcIikge1xuICAgIHJldHVybiAxMjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlNBVFVSQVRJT05cIikge1xuICAgIHJldHVybiAxMztcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTE9SXCIpIHtcbiAgICByZXR1cm4gMTQ7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJMVU1JTk9TSVRZXCIpIHtcbiAgICByZXR1cm4gMTU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQpIHtcblxuICBsZXQgeFBvc2l0aW9uID0gMDtcbiAgbGV0IHlQb3NpdGlvbiA9IDA7XG4gIGlmIChwYXJlbnQueCkge1xuICAgIGlmIChjaGlsZC54ID4gcGFyZW50LngpIHtcbiAgICAgIHhQb3NpdGlvbiA9IE1hdGguYWJzKGNoaWxkLnggLSBwYXJlbnQueCk7XG4gICAgfVxuICAgIGlmIChjaGlsZC55ID4gcGFyZW50LnkpIHtcbiAgICAgIHlQb3NpdGlvbiA9IE1hdGguYWJzKGNoaWxkLnkgLSBwYXJlbnQueSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHhQb3NpdGlvbiA9IGNoaWxkLng7XG4gICAgeVBvc2l0aW9uID0gY2hpbGQueTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogeFBvc2l0aW9uLFxuICAgIHk6IHlQb3NpdGlvblxuICB9XG59O1xuIiwiY29uc3QgYmxlbmRNb2RlID0gcmVxdWlyZSgnLi9ibGVuZE1vZGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBcIl9jbGFzc1wiOiBcInN0eWxlXCIsXG4gICAgXCJlbmRNYXJrZXJUeXBlXCI6IDAsXG4gICAgXCJtaXRlckxpbWl0XCI6IDEwLFxuICAgIFwic3RhcnRNYXJrZXJUeXBlXCI6IDAsXG4gICAgXCJ3aW5kaW5nUnVsZVwiOiAwLCAvLyBOT05aRVJPXG4gIH07XG5cbiAgaWYgKGRhdGEuYmxlbmRNb2RlKSB7XG4gICAgc3R5bGUuY29udGV4dFNldHRpbmdzID0ge1xuICAgICAgXCJfY2xhc3NcIjogXCJncmFwaGljc0NvbnRleHRTZXR0aW5nc1wiLFxuICAgICAgXCJibGVuZE1vZGVcIjogYmxlbmRNb2RlKGRhdGEuYmxlbmRNb2RlKVxuICAgIH1cblxuICAgIGlmIChkYXRhLm9wYWNpdHkpIHtcbiAgICAgIHN0eWxlLmNvbnRleHRTZXR0aW5ncy5vcGFjaXR5ID0gZGF0YS5vcGFjaXR5O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5jb250ZXh0U2V0dGluZ3Mub3BhY2l0eSA9IDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5zdHJva2VzKSAmJiBkYXRhLnN0cm9rZXMubGVuZ3RoKSB7XG4gICAgbGV0IG5ld0JvcmRlcnMgPSBbXTtcbiAgICBkYXRhLnN0cm9rZXMuZm9yRWFjaChmdW5jdGlvbihib3JkZXIpIHtcblxuICAgICAgLy8gQ29udmVydCB0aGUgcG9zaXRpb24gLSBpbnNpZGUsIGNlbnRlciwgb3V0c2lkZVxuICAgICAgbGV0IHBvc2l0aW9uID0gJyc7XG4gICAgICBpZiAoZGF0YS5zdHJva2VBbGlnbiA9PT0gJ0lOU0lERScpIHtcbiAgICAgICAgcG9zaXRpb24gPSAgMTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5zdHJva2VBbGlnbiA9PT0gJ09VVFNJREUnKSB7XG4gICAgICAgIHBvc2l0aW9uID0gIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvbiA9ICAwO1xuICAgICAgfVxuXG4gICAgICBsZXQgY29sb3IgPSAnJztcbiAgICAgIGlmIChib3JkZXIudHlwZSA9PT0gJ1NPTElEJykge1xuICAgICAgICBjb2xvciA9IHtcbiAgICAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gICAgICAgICAgXCJhbHBoYVwiOiBib3JkZXIub3BhY2l0eSxcbiAgICAgICAgICBcImJsdWVcIjogYm9yZGVyLmNvbG9yLmIsXG4gICAgICAgICAgXCJncmVlblwiOiBib3JkZXIuY29sb3IuZyxcbiAgICAgICAgICBcInJlZFwiOiBib3JkZXIuY29sb3IuclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBncmFkaWVudCA9ICcnO1xuICAgICAgaWYgKGJvcmRlci50eXBlID09PSAnR1JBRElFTlRfTElORUFSJykge1xuICAgICAgICAvLyBUT0RPOiBBZGQgc3VwcG9ydCBmb3IgR3JhZGllbnRzXG4gICAgICB9XG5cbiAgICAgIG5ld0JvcmRlcnMucHVzaCh7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiYm9yZGVyXCIsXG4gICAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICAgIFwiY29sb3JcIjogY29sb3IsXG4gICAgICAgIFwiZmlsbFR5cGVcIjogMCxcbiAgICAgICAgXCJwb3NpdGlvblwiOiBwb3NpdGlvbixcbiAgICAgICAgXCJ0aGlja25lc3NcIjogZGF0YS5zdHJva2VXZWlnaHRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc3R5bGUuYm9yZGVycyA9IG5ld0JvcmRlcnM7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmZpbGxzKSAmJiBkYXRhLmZpbGxzLmxlbmd0aCkge1xuICAgIGxldCBuZXdGaWxscyA9IFtdO1xuICAgIGRhdGEuZmlsbHMuZm9yRWFjaChmdW5jdGlvbihmaWxsKSB7XG4gICAgICBpZiAoZmlsbC50eXBlID09PSAnSU1BR0UnKSB7XG4gICAgICAgIG5ld0ZpbGxzLnB1c2goe1xuICAgICAgICAgIFwiX2NsYXNzXCI6IFwiZmlsbFwiLFxuICAgICAgICAgIFwiaXNFbmFibGVkXCI6IHRydWUsXG4gICAgICAgICAgXCJmaWxsVHlwZVwiOiA0LFxuICAgICAgICAgIFwiaW1hZ2VcIjoge1xuICAgICAgICAgICAgXCJfY2xhc3NcIjogXCJNU0pTT05GaWxlUmVmZXJlbmNlXCIsXG4gICAgICAgICAgICBcIl9yZWZfY2xhc3NcIjogXCJNU0ltYWdlRGF0YVwiLFxuICAgICAgICAgICAgXCJfcmVmXCI6IGBpbWFnZXNcXC8ke2ZpbGwuaW1hZ2VSZWZ9LnBuZ2BcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibm9pc2VJbmRleFwiOiAwLFxuICAgICAgICAgIFwibm9pc2VJbnRlbnNpdHlcIjogMCxcbiAgICAgICAgICBcInBhdHRlcm5GaWxsVHlwZVwiOiAxLFxuICAgICAgICAgIFwicGF0dGVyblRpbGVTY2FsZVwiOiAxXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChmaWxsLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgICAgICAgbmV3RmlsbHMucHVzaCh7XG4gICAgICAgICAgXCJfY2xhc3NcIjogXCJmaWxsXCIsXG4gICAgICAgICAgXCJpc0VuYWJsZWRcIjogdHJ1ZSxcbiAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgICAgICAgICAgIFwiYWxwaGFcIjogZmlsbC5vcGFjaXR5LFxuICAgICAgICAgICAgXCJibHVlXCI6IGZpbGwuY29sb3IuYixcbiAgICAgICAgICAgIFwiZ3JlZW5cIjogZmlsbC5jb2xvci5nLFxuICAgICAgICAgICAgXCJyZWRcIjogZmlsbC5jb2xvci5yXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImZpbGxUeXBlXCI6IDAsXG4gICAgICAgICAgXCJub2lzZUluZGV4XCI6IDAsXG4gICAgICAgICAgXCJub2lzZUludGVuc2l0eVwiOiAwLFxuICAgICAgICAgIFwicGF0dGVybkZpbGxUeXBlXCI6IDEsXG4gICAgICAgICAgXCJwYXR0ZXJuVGlsZVNjYWxlXCI6IDFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdHlsZS5maWxscyA9IG5ld0ZpbGxzO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFwiUEFHRVwiKSB7XG4gICAgcmV0dXJuIFwicGFnZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgIHJldHVybiBcImFydGJvYXJkXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJHUk9VUFwiKSB7XG4gICAgcmV0dXJuIFwiZ3JvdXBcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIkNPTVBPTkVOVFwiKSB7XG4gICAgcmV0dXJuIFwic3ltYm9sTWFzdGVyXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJJTlNUQU5DRVwiKSB7XG4gICAgcmV0dXJuIFwic3ltYm9sSW5zdGFuY2VcIjtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcIlJFQ1RBTkdMRVwiKSB7XG4gICAgcmV0dXJuIFwicmVjdGFuZ2xlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJFTExJUFNFXCIpIHtcbiAgICByZXR1cm4gXCJvdmFsXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJSRUdVTEFSX1BPTFlHT05cIikge1xuICAgIHJldHVybiBcInRyaWFuZ2xlXCI7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJWRUNUT1JcIikge1xuICAgIHJldHVybiBcInNoYXBlUGF0aFwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiVEVYVFwiKSB7XG4gICAgcmV0dXJuIFwidGV4dFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiXG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0LmVkaXRlZCA9IGZhbHNlO1xuICByZXN1bHQuaXNDbG9zZWQgPSB0cnVlO1xuICByZXN1bHQucG9pbnRSYWRpdXNCZWhhdmlvdXIgPSAxO1xuICByZXN1bHQucG9pbnRzID0gW3tcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAuNzc2MTQyMzc0OTAwMDAwMDQsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MC4yMjM4NTc2MjUxMDAwMDAwMSwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MC41LCAxfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDAuMjIzODU3NjI1MTAwMDAwMDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMC43NzYxNDIzNzQ5MDAwMDAwNH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MSwgMC41fVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAuMjIzODU3NjI1MTAwMDAwMDEsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MC43NzYxNDIzNzQ5MDAwMDAwNCwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MC41LCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDAuNzc2MTQyMzc0OTAwMDAwMDR9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMixcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMC4yMjM4NTc2MjUxMDAwMDAwMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiB0cnVlLFxuICAgIFwiaGFzQ3VydmVUb1wiOiB0cnVlLFxuICAgIFwicG9pbnRcIjogXCJ7MCwgMC41fVwiXG4gIH1dXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0LmVkaXRlZCA9IGZhbHNlO1xuICByZXN1bHQuaXNDbG9zZWQgPSB0cnVlO1xuICByZXN1bHQucG9pbnRSYWRpdXNCZWhhdmlvdXIgPSAxO1xuICByZXN1bHQucG9pbnRzID0gW3tcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDB9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMH1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInsxLCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInsxLCAxfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLCAxfVwiXG4gIH1dXG4gIHJlc3VsdC5maXhlZFJhZGl1cyA9IDA7XG4gIHJlc3VsdC5oYXNDb252ZXJ0ZWRUb05ld1JvdW5kQ29ybmVycyA9IHRydWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgcmVzdWx0LmVkaXRlZCA9IGZhbHNlO1xuICByZXN1bHQuaXNDbG9zZWQgPSB0cnVlO1xuICByZXN1bHQucG9pbnRSYWRpdXNCZWhhdmlvdXIgPSAxO1xuICByZXN1bHQucG9pbnRzID0gW3tcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAuNSwgMH1cIixcbiAgICBcImN1cnZlTW9kZVwiOiAxLFxuICAgIFwiY3VydmVUb1wiOiBcInswLjUsIDB9XCIsXG4gICAgXCJoYXNDdXJ2ZUZyb21cIjogZmFsc2UsXG4gICAgXCJoYXNDdXJ2ZVRvXCI6IGZhbHNlLFxuICAgIFwicG9pbnRcIjogXCJ7MC41LCAwfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezEsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MSwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInsxLCAxfVwiXG4gIH0sIHtcbiAgICBcIl9jbGFzc1wiOiBcImN1cnZlUG9pbnRcIixcbiAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgIFwiY3VydmVGcm9tXCI6IFwiezAsIDF9XCIsXG4gICAgXCJjdXJ2ZU1vZGVcIjogMSxcbiAgICBcImN1cnZlVG9cIjogXCJ7MCwgMX1cIixcbiAgICBcImhhc0N1cnZlRnJvbVwiOiBmYWxzZSxcbiAgICBcImhhc0N1cnZlVG9cIjogZmFsc2UsXG4gICAgXCJwb2ludFwiOiBcInswLCAxfVwiXG4gIH1dXG4gIHJlc3VsdC5pc0VxdWlsYXRlcmFsID0gZmFsc2U7XG59XG4iLCJjb25zdCBwYXJzZSA9IHJlcXVpcmUoXCJkLXBhdGgtcGFyc2VyXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhLCByZXN1bHQpIHtcbiAgY29uc3QgbmV3UGF0aCA9IFtdO1xuICBjb25zdCBvYmpXaWR0aCA9IGRhdGEuYWJzb2x1dGVCb3VuZGluZ0JveC53aWR0aDtcbiAgY29uc3Qgb2JqSGVpZ2h0ID0gZGF0YS5hYnNvbHV0ZUJvdW5kaW5nQm94LmhlaWdodDtcblxuICAvKlxuXG4gIFRoZXJlJ3MgYSBwcm9ibGVtIHdpdGggcmVsYXRpdmVUcmFuc2Zvcm0gYXMgaXQga2VlcHMgdGhlIG9yaWdpbmFsIHNpemUgb2YgdGhlIE9iamVjdFxuXG4gIGFic29sdXRlQm91bmRpbmdCb3g6IHsgeDogLTE1NDMsIHk6IDEzNywgd2lkdGg6IDMwLCBoZWlnaHQ6IDMwIH0sXG4gIHByZXNlcnZlUmF0aW86IHRydWUsXG4gIGNvbnN0cmFpbnRzOiB7IHZlcnRpY2FsOiAnVE9QJywgaG9yaXpvbnRhbDogJ0xFRlQnIH0sXG4gIHJlbGF0aXZlVHJhbnNmb3JtOiBbIFsgMC4wNTAwMDAwMDA3NDUwNTgwNiwgMCwgMzggXSwgWyAwLCAtMC4wNTAwMDAwMDA3NDUwNTgwNiwgNTczIF0gXSxcbiAgc2l6ZTogeyB4OiA2MDAsIHk6IDYwMCB9LFxuICBmaWxsczogWyB7IGJsZW5kTW9kZTogJ05PUk1BTCcsIHR5cGU6ICdTT0xJRCcsIGNvbG9yOiBbT2JqZWN0XSB9IF0sXG4gIGZpbGxHZW9tZXRyeTogW1xuICAgIHtcbiAgICAgIHBhdGg6ICdNMjUgMEw1NzUgMEM2MDAgMCA2MDAgMCA2MDAgMjVMNjAwIDU3NUM2MDAgNjAwIDYwMCA2MDAgNTc1IDYwMEwyNSA2MDBDMCA2MDAgMCA2MDAgMCA1NzVMMCAyNUMwIDAgMCAwIDI1IDBaTTEyNSAxMDBMNDc1IDEwMEM1MDAgMTAwIDUwMCAxMDAgNTAwIDEyNUM1MDAgMTUwIDUwMCAxNTAgNDc1IDE1MEwxMjUgMTUwQzEwMCAxNTAgMTAwIDE1MCAxMDAgMTI1QzEwMCAxMDAgMTAwIDEwMCAxMjUgMTAwWk0xMDAgMTk5TDUwMCAxOTlMNDMwLjUgMjc1TDM4NyAyMzAuNUwzNDMuNSAyNzVMMzAwIDIzMC41TDI1Ni41IDI3NUwyMTMgMjMwLjVMMTY5IDI3NUwxMDAgMTk5Wk01MCA1MEw1MCA1NTBMNTUwIDU1MEw1NTAgNTBMNTAgNTBaJyxcbiAgICAgIHdpbmRpbmdSdWxlOiAnTk9OWkVSTydcbiAgICB9XG4gIF1cblxuICAqL1xuXG4gIGNvbnN0IHZlY3RvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGNvbW1hbmQxLCBjb21tYW5kMiwgY29tbWFuZDMpIHtcbiAgICBjb25zdCBib29tID0ge1xuICAgICAgXCJfY2xhc3NcIjogXCJjdXJ2ZVBvaW50XCIsXG4gICAgICBcImNvcm5lclJhZGl1c1wiOiAwLFxuICAgICAgXCJjdXJ2ZU1vZGVcIjogNCxcbiAgICAgIFwicG9pbnRcIjogYHske2NvbW1hbmQxLmVuZC54L29ialdpZHRofSwgJHtjb21tYW5kMS5lbmQueS9vYmpIZWlnaHR9fWBcbiAgICB9XG5cbiAgICBpZiAoY29tbWFuZDEuY29kZSA9PT0gJ00nKSB7XG4gICAgICBjb25zb2xlLmxvZyhjb21tYW5kMyk7XG5cbiAgICAgIGlmIChjb21tYW5kMi5jb2RlID09PSAnQycpIHtcbiAgICAgICAgYm9vbS5jdXJ2ZUZyb20gPSBgeyR7Y29tbWFuZDIuY3AxLngvb2JqV2lkdGh9LCAke2NvbW1hbmQyLmNwMS55L29iakhlaWdodH19YDtcblxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY29tbWFuZDIuY3AxKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29tbWFuZDEuZW5kKSkge1xuICAgICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gZmFsc2U7XG4gICAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoSlNPTi5zdHJpbmdpZnkoY29tbWFuZDIuY3AxKSAhPT0gSlNPTi5zdHJpbmdpZnkoY29tbWFuZDEuZW5kKSkge1xuICAgICAgICAgIGJvb20uaGFzQ3VydmVGcm9tID0gdHJ1ZTtcbiAgICAgICAgICBib29tLmhhc0N1cnZlVG8gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY29tbWFuZDMuY29kZSA9PT0gJ0MnKSB7XG4gICAgICAgIGJvb20uY3VydmVUbyA9IGB7JHtjb21tYW5kMy5jcDIueC9vYmpXaWR0aH0sICR7Y29tbWFuZDMuY3AyLnkvb2JqSGVpZ2h0fX1gO1xuICAgICAgICBib29tLmhhc0N1cnZlVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29tbWFuZDEuY29kZSA9PT0gJ0wnKSB7XG4gICAgICBpZiAoY29tbWFuZDIuY29kZSA9PT0gJ0MnKSB7XG4gICAgICAgIGJvb20uY3VydmVGcm9tID0gYHske2NvbW1hbmQyLmNwMS54L29ialdpZHRofSwgJHtjb21tYW5kMi5jcDEueS9vYmpIZWlnaHR9fWA7XG5cbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGNvbW1hbmQyLmNwMSkgPT09IEpTT04uc3RyaW5naWZ5KGNvbW1hbmQxLmVuZCkpIHtcbiAgICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IGZhbHNlO1xuICAgICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKEpTT04uc3RyaW5naWZ5KGNvbW1hbmQyLmNwMSkgIT09IEpTT04uc3RyaW5naWZ5KGNvbW1hbmQxLmVuZCkpIHtcbiAgICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IHRydWU7XG4gICAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbW1hbmQxLmNvZGUgPT09ICdDJykge1xuICAgICAgaWYgKGNvbW1hbmQyLmNvZGUgPT09ICdMJykge1xuICAgICAgICBib29tLmN1cnZlVG8gPSBgeyR7Y29tbWFuZDEuY3AyLngvb2JqV2lkdGh9LCAke2NvbW1hbmQxLmNwMi55L29iakhlaWdodH19YDtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZUZyb20gPSBmYWxzZTtcbiAgICAgICAgYm9vbS5oYXNDdXJ2ZVRvID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoY29tbWFuZDIuY29kZSA9PT0gJ0MnKSB7XG4gICAgICAgIGJvb20uY3VydmVGcm9tID0gYHske2NvbW1hbmQyLmNwMS54L29ialdpZHRofSwgJHtjb21tYW5kMi5jcDEueS9vYmpIZWlnaHR9fWA7XG4gICAgICAgIGJvb20uY3VydmVUbyA9IGB7JHtjb21tYW5kMS5jcDIueC9vYmpXaWR0aH0sICR7Y29tbWFuZDEuY3AyLnkvb2JqSGVpZ2h0fX1gO1xuICAgICAgICBib29tLmhhc0N1cnZlRnJvbSA9IHRydWU7XG4gICAgICAgIGJvb20uaGFzQ3VydmVUbyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coYm9vbSk7XG5cbiAgICBuZXdQYXRoLnB1c2goYm9vbSk7XG4gIH1cblxuICBkYXRhLmZpbGxHZW9tZXRyeS5tYXAocGF0aCA9PiB7XG4gICAgY29uc3Qgbm9aID0gcGF0aC5wYXRoLnN1YnN0cmluZygwLCBwYXRoLnBhdGgubGVuZ3RoIC0gMSk7XG4gICAgY29uc3Qgc3BsaXQgPSBub1ouc3BsaXQoJ1onKTtcblxuICAgIHNwbGl0Lm1hcChzaW5nbGVTcGxpdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzaW5nbGVTcGxpdCk7XG4gICAgICBjb25zdCBjb21tYW5kcyA9IHBhcnNlKHNpbmdsZVNwbGl0KTtcbiAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0gJyArIGRhdGEubmFtZSArICcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAnKTtcbiAgICAgIGNvbnNvbGUubG9nKGNvbW1hbmRzKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tYW5kcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgLy8gVGFrZSB0aGUgZWxlbWVudCwgdGhlIG5leHQgb25lIGFuZCB0aGUgbGFzdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgIHZlY3RvckZ1bmN0aW9uKGNvbW1hbmRzW2ldLCBjb21tYW5kc1tpKzFdLCBjb21tYW5kc1tjb21tYW5kcy5sZW5ndGggLSAxXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGRhdGEuc3Ryb2tlR2VvbWV0cnkubWFwKHBhdGggPT4ge1xuICAvLyAgIGNvbnN0IGNvbW1hbmRzID0gcGFyc2UocGF0aC5wYXRoKTtcbiAgLy8gICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tICcgKyBkYXRhLm5hbWUgKyAnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gJyk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coY29tbWFuZHMpO1xuICAvL1xuICAvLyAgIGNvbW1hbmRzLm1hcChjdXJ2ZVBvaW50ID0+IHtcbiAgLy8gICAgIHZlY3RvckZ1bmN0aW9uKGN1cnZlUG9pbnQpO1xuICAvLyAgIH0pO1xuICAvLyB9KTtcblxuICByZXN1bHQuZWRpdGVkID0gdHJ1ZTtcbiAgcmVzdWx0LmlzQ2xvc2VkID0gdHJ1ZTtcbiAgcmVzdWx0LnBvaW50UmFkaXVzQmVoYXZpb3VyID0gMTtcbiAgcmVzdWx0LnBvaW50cyA9IG5ld1BhdGg7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBcIkxFRlRcIikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKGRhdGEgPT09IFwiQ0VOVEVSXCIpIHtcbiAgICByZXR1cm4gMjtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIlJJR0hUXCIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gXCJVUFBFUlwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IFwiVE9QXCIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChkYXRhID09PSBcIkNFTlRFUlwiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAoZGF0YSA9PT0gXCJCT1RUT01cIikge1xuICAgIHJldHVybiAyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn07XG4iLCJjb25zdCB0ZXh0QWxpZ25lbWVudCA9IHJlcXVpcmUoJy4vX2hvcml6b250YWxBbGlnbmVtZW50Jyk7XG5jb25zdCB0ZXh0VmVydGljYWxBbGlnbmVtZW50ID0gcmVxdWlyZSgnLi9fdmVydGljYWxBbGlnbmVtZW50Jyk7XG5jb25zdCB0ZXh0Q2FzZSA9IHJlcXVpcmUoJy4vX3RleHRDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRhdGEsIHJlc3VsdCkge1xuICAvLyBjb25zdCBjb2xvciA9IHt9O1xuICAvLyBmb3IgKGxldCBpIGluIGRhdGEuZmlsbHMpIHtcbiAgLy8gICBpZihkYXRhLmZpbGxzW2ldLnR5cGUgPT09ICdTT0xJRCcpIHtcbiAgLy8gICAgIGNvbG9yLmEgPSBkYXRhLmZpbGxzW2ldLm9wYWNpdHk7XG4gIC8vICAgICBjb2xvci5iID0gZGF0YS5maWxsc1tpXS5jb2xvci5iO1xuICAvLyAgICAgY29sb3IuZyA9IGRhdGEuZmlsbHNbaV0uY29sb3IuZztcbiAgLy8gICAgIGNvbG9yLnIgPSBkYXRhLmZpbGxzW2ldLmNvbG9yLnI7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIHJlc3VsdC5zdHlsZS50ZXh0U3R5bGUgPSB7XG4gIC8vICAgXCJfY2xhc3NcIjogXCJ0ZXh0U3R5bGVcIixcbiAgLy8gICBcImVuY29kZWRBdHRyaWJ1dGVzXCI6IHtcbiAgLy8gICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nQ29sb3JBdHRyaWJ1dGVcIjoge1xuICAvLyAgICAgICBcIl9jbGFzc1wiOiBcImNvbG9yXCIsXG4gIC8vICAgICAgIFwiYWxwaGFcIjogY29sb3IuYSxcbiAgLy8gICAgICAgXCJibHVlXCI6IGNvbG9yLmIsXG4gIC8vICAgICAgIFwiZ3JlZW5cIjogY29sb3IuZyxcbiAgLy8gICAgICAgXCJyZWRcIjogY29sb3IuclxuICAvLyAgICAgfSxcbiAgLy8gICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nRm9udEF0dHJpYnV0ZVwiOiB7XG4gIC8vICAgICAgIFwiX2NsYXNzXCI6IFwiVUlGb250RGVzY3JpcHRvclwiLFxuICAvLyAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAvLyAgICAgICAgIFwibmFtZVwiOiBkYXRhLmZvbnROYW1lLmZhbWlseSxcbiAgLy8gICAgICAgICBcInNpemVcIjogZGF0YS5mb250U2l6ZVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9LFxuICAvLyAgICAgXCJ0ZXh0U3R5bGVWZXJ0aWNhbEFsaWdubWVudEtleVwiOiAwLFxuICAvLyAgICAgXCJwYXJhZ3JhcGhTdHlsZVwiOiB7XG4gIC8vICAgICAgIFwiX2NsYXNzXCI6IFwicGFyYWdyYXBoU3R5bGVcIixcbiAgLy8gICAgICAgXCJtYXhpbXVtTGluZUhlaWdodFwiOiBkYXRhLmxpbmVIZWlnaHQudmFsdWUsXG4gIC8vICAgICAgIFwibWluaW11bUxpbmVIZWlnaHRcIjogZGF0YS5saW5lSGVpZ2h0LnZhbHVlLFxuICAvLyAgICAgICBcImFsaWdubWVudFwiOiB0ZXh0QWxpZ25lbWVudChkYXRhLnRleHRBbGlnbkhvcml6b250YWwpXG4gIC8vICAgICB9LFxuICAvLyAgICAgXCJrZXJuaW5nXCI6IGRhdGEubGV0dGVyU3BhY2luZy52YWx1ZVxuICAvLyAgIH0sXG4gIC8vICAgXCJ2ZXJ0aWNhbEFsaWdubWVudFwiOiB0ZXh0VmVydGljYWxBbGlnbmVtZW50KGRhdGEudGV4dEFsaWduVmVydGljYWwpXG4gIC8vIH07XG4gIC8vIHJlc3VsdC5hdHRyaWJ1dGVkU3RyaW5nID0ge1xuICAvLyAgIFwiX2NsYXNzXCI6IFwiYXR0cmlidXRlZFN0cmluZ1wiLFxuICAvLyAgIFwic3RyaW5nXCI6IGRhdGEuY2hhcmFjdGVycyxcbiAgLy8gICBcImF0dHJpYnV0ZXNcIjogW3tcbiAgLy8gICAgIFwiX2NsYXNzXCI6IFwic3RyaW5nQXR0cmlidXRlXCIsXG4gIC8vICAgICBcImxvY2F0aW9uXCI6IDAsXG4gIC8vICAgICBcImxlbmd0aFwiOiBkYXRhLmNoYXJhY3RlcnMubGVuZ3RoLFxuICAvLyAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgLy8gICAgICAgXCJNU0F0dHJpYnV0ZWRTdHJpbmdGb250QXR0cmlidXRlXCI6IHtcbiAgLy8gICAgICAgICBcIl9jbGFzc1wiOiBcIlVJRm9udERlc2NyaXB0b3JcIixcbiAgLy8gICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAvLyAgICAgICAgICAgXCJuYW1lXCI6IGRhdGEuZm9udE5hbWUuZmFtaWx5LFxuICAvLyAgICAgICAgICAgXCJzaXplXCI6IGRhdGEuZm9udFNpemVcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0sXG4gIC8vICAgICAgIFwiTVNBdHRyaWJ1dGVkU3RyaW5nQ29sb3JBdHRyaWJ1dGVcIjoge1xuICAvLyAgICAgICAgIFwiX2NsYXNzXCI6IFwiY29sb3JcIixcbiAgLy8gICAgICAgICBcImFscGhhXCI6IGNvbG9yLmEsXG4gIC8vICAgICAgICAgXCJibHVlXCI6IGNvbG9yLmIsXG4gIC8vICAgICAgICAgXCJncmVlblwiOiBjb2xvci5nLFxuICAvLyAgICAgICAgIFwicmVkXCI6IGNvbG9yLnJcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgICAgXCJwYXJhZ3JhcGhTdHlsZVwiOiB7XG4gIC8vICAgICAgICAgXCJfY2xhc3NcIjogXCJwYXJhZ3JhcGhTdHlsZVwiLFxuICAvLyAgICAgICAgIFwiYWxpZ25tZW50XCI6IHRleHRBbGlnbmVtZW50KGRhdGEudGV4dEFsaWduSG9yaXpvbnRhbClcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1dXG4gIC8vIH07XG5cbiAgLy8gaWYgKGRhdGEudGV4dENhc2UpIHtcbiAgLy8gICByZXN1bHQuc3R5bGUudGV4dFN0eWxlLmVuY29kZWRBdHRyaWJ1dGVzLk1TQXR0cmlidXRlZFN0cmluZ1RleHRUcmFuc2Zvcm1BdHRyaWJ1dGUgPSAxO1xuICAvLyAgIHJlc3VsdC5hdHRyaWJ1dGVkU3RyaW5nLmF0dHJpYnV0ZXNbMF0uYXR0cmlidXRlcy5NU0F0dHJpYnV0ZWRTdHJpbmdUZXh0VHJhbnNmb3JtQXR0cmlidXRlID0gdGV4dENhc2UoZGF0YS50ZXh0Q2FzZSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gcmVzdWx0LmF1dG9tYXRpY2FsbHlEcmF3T25VbmRlcmx5aW5nUGF0aCA9IGZhbHNlO1xuICAvLyByZXN1bHQuZG9udFN5bmNocm9uaXNlV2l0aFN5bWJvbCA9IGZhbHNlO1xuICAvLyByZXN1bHQuZ2x5cGhCb3VuZHMgPSBcInt7MCwgNH0sIHszOCwgOH19XCI7XG4gIC8vIHJlc3VsdC5saW5lU3BhY2luZ0JlaGF2aW91ciA9IDI7XG4gIC8vIHJlc3VsdC50ZXh0QmVoYXZpb3VyID0gMjtcbn1cbiIsIi8vIE1PVkUgVE8gRVM2IGltcG9ydHMgYW5kIFRTP1xuY29uc3QgdHlwZSA9IHJlcXVpcmUoJy4vaGVscGVycy90eXBlJyk7XG5jb25zdCBzZXRTdHlsZSA9IHJlcXVpcmUoJy4vaGVscGVycy9zdHlsZScpO1xuY29uc3QgcG9zaXRpb24gPSByZXF1aXJlKCcuL2hlbHBlcnMvcG9zaXRpb24nKTtcbmNvbnN0IGNhbnZhcyA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9jYW52YXMnKTtcbmNvbnN0IGZyYW1lID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2ZyYW1lJyk7XG5jb25zdCBncm91cCA9IHJlcXVpcmUoJy4vY29udGFpbmVycy9ncm91cCcpO1xuY29uc3QgY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb250YWluZXJzL2NvbXBvbmVudCcpO1xuY29uc3QgaW5zdGFuY2UgPSByZXF1aXJlKCcuL2NvbnRhaW5lcnMvaW5zdGFuY2UnKTtcbmNvbnN0IHJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vc2hhcGVzL3JlY3RhbmdsZScpO1xuY29uc3QgdHJpYW5nbGUgPSByZXF1aXJlKCcuL3NoYXBlcy90cmlhbmdsZScpO1xuY29uc3QgZWxsaXBzZSA9IHJlcXVpcmUoJy4vc2hhcGVzL2VsbGlwc2UnKTtcbmNvbnN0IHZlY3RvciA9IHJlcXVpcmUoJy4vc2hhcGVzL3ZlY3RvcicpO1xuY29uc3QgdGV4dCA9IHJlcXVpcmUoJy4vdGV4dC9pbmRleCcpO1xuXG5jb25zdCB0cmFuc2Zvcm0gPSAoZGF0YSwgcGFyZW50ID0ge30pID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG5cbiAgLy8gQ2FuIHRoZXNlIGp1c3QgYmUgZGVmaW5lZCB1cCBmcm9udD9cbiAgcmVzdWx0Ll9jbGFzcyA9IHR5cGUoZGF0YS50eXBlKSxcbiAgcmVzdWx0LmRvX29iamVjdElEID0gZGF0YS5pZDtcbiAgcmVzdWx0LmJvb2xlYW5PcGVyYXRpb24gPSAtMTtcbiAgcmVzdWx0LmV4cG9ydE9wdGlvbnMgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJleHBvcnRPcHRpb25zXCIsXG4gICAgXCJleHBvcnRGb3JtYXRzXCI6IFtdLFxuICAgIFwiaW5jbHVkZWRMYXllcklkc1wiOiBbXSxcbiAgICBcImxheWVyT3B0aW9uc1wiOiAwLFxuICAgIFwic2hvdWxkVHJpbVwiOiBmYWxzZVxuICB9O1xuICByZXN1bHQuZnJhbWUgPSB7XG4gICAgXCJfY2xhc3NcIjogXCJyZWN0XCIsXG4gICAgXCJjb25zdHJhaW5Qcm9wb3J0aW9uc1wiOiBmYWxzZSxcbiAgfTtcbiAgcmVzdWx0LmlzRml4ZWRUb1ZpZXdwb3J0ID0gZmFsc2U7XG4gIHJlc3VsdC5pc0ZsaXBwZWRIb3Jpem9udGFsID0gZmFsc2U7XG4gIHJlc3VsdC5pc0ZsaXBwZWRWZXJ0aWNhbCA9IGZhbHNlO1xuICByZXN1bHQuaXNMb2NrZWQgPSBmYWxzZTtcbiAgcmVzdWx0LmlzVmlzaWJsZSA9IHRydWU7XG4gIHJlc3VsdC5sYXllckxpc3RFeHBhbmRlZFR5cGUgPSAwO1xuICByZXN1bHQubmFtZSA9IGRhdGEubmFtZTtcbiAgcmVzdWx0Lm5hbWVJc0ZpeGVkID0gZmFsc2U7XG4gIHJlc3VsdC5yZXNpemluZ0NvbnN0cmFpbnQgPSA2MztcbiAgcmVzdWx0LnJlc2l6aW5nVHlwZSA9IDA7XG4gIHJlc3VsdC5yb3RhdGlvbiA9IDA7XG4gIHJlc3VsdC5zaG91bGRCcmVha01hc2tDaGFpbiA9IGZhbHNlO1xuICByZXN1bHQuY2xpcHBpbmdNYXNrTW9kZSA9IDA7XG4gIHJlc3VsdC5oYXNDbGlwcGluZ01hc2sgPSBmYWxzZTtcbiAgcmVzdWx0LnN0eWxlID0gc2V0U3R5bGUoZGF0YSk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgLy8gVGhpcyBpcyB0byB1cGRhdGUgdGhlIHBvc2l0aW9uIHRvIGJlIHJlbGF0aXZlIGFuZCBub3QgYWJzb2x1dGUuXG4gIC8vIFNrZXRjaCB1c2VzIHJlbGF0aXZlIHBvc2l0aW9uIHRvIGl0cyBwYXJlbnQuXG4gIC8vIFBhZ2UgaXMgdGhlIHRvcCBsZXZlbCBzbyBvYnZpb3VzbHkgZG9lc24ndCBuZWVkIHRoaXMgY29kZVxuICBpZiAoZGF0YS50eXBlICE9PSAnUEFHRScpIHtcbiAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uKHBhcmVudCwgZGF0YSk7XG4gICAgcmVzdWx0LmZyYW1lLnggPSBkYXRhLng7XG4gICAgcmVzdWx0LmZyYW1lLnkgPSBkYXRhLnk7XG4gICAgcmVzdWx0LmZyYW1lLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgIHJlc3VsdC5mcmFtZS53aWR0aCA9ICBkYXRhLndpZHRoO1xuICB9XG5cbiAgLy8gVGhpcyBpcyB3aGVyZSB0aGUgbWFnaWMgaGFwcGVuIC0gUmVjdXJzaW9uIHRvIGNyZWF0ZSBhbGwgdGhlIGxheWVycy5cbiAgaWYgKGRhdGEuY2hpbGRyZW4pIHtcbiAgICByZXN1bHQubGF5ZXJzID0gZGF0YS5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gdHJhbnNmb3JtKGNoaWxkLCBkYXRhKSk7XG4gIH1cblxuICAvLyBFYWNoIGNhc2UgbmVlZCB0byBiZSB1cGRhdGVkIHVzaW5nIEZpZ21hIHBsdWdpbiBBUEkuXG4gIC8vIFRoZSBzdHJ1Y3R1cmUgaXNuJ3QgdGhlIHNhbWUgYXMgdGhlIFJFU1QgQVBJXG4gIHN3aXRjaChkYXRhLnR5cGUpIHtcbiAgICBjYXNlICdQQUdFJzpcbiAgICAgIGNhbnZhcyhkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRlJBTUUnOlxuICAgICAgZnJhbWUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0dST1VQJzpcbiAgICAgIGdyb3VwKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICAvLyBjYXNlICdDT01QT05FTlQnOlxuICAgIC8vICAgY29tcG9uZW50KGRhdGEsIHJlc3VsdCk7XG4gICAgLy8gICBicmVhaztcbiAgICAvLyBjYXNlICdJTlNUQU5DRSc6XG4gICAgLy8gICBpbnN0YW5jZShkYXRhLCByZXN1bHQpO1xuICAgIC8vICAgYnJlYWs7XG4gICAgY2FzZSAnUkVDVEFOR0xFJzpcbiAgICAgIHJlY3RhbmdsZShkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRUxMSVBTRSc6XG4gICAgICBlbGxpcHNlKGRhdGEsIHJlc3VsdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdSRUdVTEFSX1BPTFlHT04nOlxuICAgICAgdHJpYW5nbGUoZGF0YSwgcmVzdWx0KTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIGNhc2UgJ1ZFQ1RPUic6XG4gICAgLy8gICB2ZWN0b3IoZGF0YSwgcmVzdWx0KTtcbiAgICAvLyAgIGJyZWFrO1xuICAgIGNhc2UgJ1RFWFQnOlxuICAgICAgdGV4dChkYXRhLCByZXN1bHQpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc2Zvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9