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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/converter/generic.js":
/*!**********************************!*\
  !*** ./src/converter/generic.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.docFile = function (figmaPages) {
  const json = {
    "_class": "document",
    "do_objectID": "221E306C-BEF9-413E-84A5-BFDAA6FC4303",
    "assets": {
      "_class": "assetCollection",
      "colorAssets": [],
      "gradientAssets": [],
      "imageCollection": {
        "_class": "imageCollection",
        "images": {}
      },
      "images": [],
      "colors": [],
      "gradients": []
    },
    "colorSpace": 0,
    "currentPageIndex": 1,
    "foreignLayerStyles": [],
    "foreignSymbols": [],
    "foreignTextStyles": [],
    "layerStyles": {
      "_class": "sharedStyleContainer",
      "objects": []
    },
  };

  json.pages =
    figmaPages.map(page => ({
        "_class": "MSJSONFileReference",
        "_ref_class": "MSImmutablePage",
        "_ref": `pages/${page.id}`
    }));

  return json;
};

module.exports.metaFile = function (figmaPages) {
  const json = {
    "commit": "1b735aa8f66d3e13f8900ae7c369f355f0eb2d3a",
    "version":112,
    "fonts":[],
    "compatibilityVersion":99,
    "app": "com.bohemiancoding.sketch3",
    "autosaved": 0,
    "variant": "NONAPPSTORE",
    "created": {
      "commit": "1b735aa8f66d3e13f8900ae7c369f355f0eb2d3a",
      "appVersion": "52.6",
      "build": 78136,
      "app": "com.bohemiancoding.sketch3",
      "compatibilityVersion": 99,
      "version": 118,
      "variant": "NONAPPSTORE"
    },
    "saveHistory": ["NONAPPSTORE.78136"],
    "appVersion": "52.6",
    "build": 78136
  };

  json.pagesAndArtboards =
    figmaPages.map(page => ({
      [`${page.id}`]: {
        "name": page.name,
        "artboards": {
          // TODO: Loop the artboards from Figma
        }
      }
    }));

  return json;
};

module.exports.userFile = function (figmaPages) {
  const json = {
    "document": { "pageListHeight": 85, "pageListCollapsed": 0 }
  }
  for (let i = 0; i < figmaPages.length; i++) {
    json[figmaPages[i].id] =
      {
        "scrollOrigin": "{0, 0}",
        "zoomValue": 1
      };
  }

  return json;
};


/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _converter_generic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter/generic */ "./src/converter/generic.js");
/* harmony import */ var _converter_generic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_converter_generic__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

document.getElementById('convert').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'convert' } }, '*');
};
onmessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const pagesJson = event.data.pluginMessage;
    const zip = new JSZip();
    const docJson = _converter_generic__WEBPACK_IMPORTED_MODULE_0___default.a.docFile(pagesJson);
    const metaJson = _converter_generic__WEBPACK_IMPORTED_MODULE_0___default.a.metaFile(pagesJson);
    const userJson = _converter_generic__WEBPACK_IMPORTED_MODULE_0___default.a.userFile(pagesJson);
    zip.file('document.json', JSON.stringify(docJson, null, 2));
    zip.file('meta.json', JSON.stringify(metaJson, null, 2));
    zip.file('user.json', JSON.stringify(userJson, null, 2));
    pagesJson.forEach(page => zip.file(`pages/${page.name}.json`, JSON.stringify(page, null, 2)));
    const content = yield zip.generateAsync({
        type: 'base64',
        compressionOptions: {
            level: 9,
        },
    });
    const downloadLink = document.getElementById('download');
    downloadLink.download = 'test.sketch';
    downloadLink.href = 'data:application/zip;base65,' + content;
    // parent.postMessage({ pluginMessage: { type: 'download' } }, '*');
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9nZW5lcmljLmpzIiwid2VicGFjazovLy8uL3NyYy91aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLFFBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsMEJBQTBCLEtBQUs7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDMEM7QUFDMUM7QUFDQSx3QkFBd0IsaUJBQWlCLGtCQUFrQixFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlEQUFPO0FBQzNCLHFCQUFxQix5REFBTztBQUM1QixxQkFBcUIseURBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFVBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsMkJBQTJCLGlCQUFpQixtQkFBbUIsRUFBRTtBQUNqRSxDQUFDIiwiZmlsZSI6InVpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdWkudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cy5kb2NGaWxlID0gZnVuY3Rpb24gKGZpZ21hUGFnZXMpIHtcbiAgY29uc3QganNvbiA9IHtcbiAgICBcIl9jbGFzc1wiOiBcImRvY3VtZW50XCIsXG4gICAgXCJkb19vYmplY3RJRFwiOiBcIjIyMUUzMDZDLUJFRjktNDEzRS04NEE1LUJGREFBNkZDNDMwM1wiLFxuICAgIFwiYXNzZXRzXCI6IHtcbiAgICAgIFwiX2NsYXNzXCI6IFwiYXNzZXRDb2xsZWN0aW9uXCIsXG4gICAgICBcImNvbG9yQXNzZXRzXCI6IFtdLFxuICAgICAgXCJncmFkaWVudEFzc2V0c1wiOiBbXSxcbiAgICAgIFwiaW1hZ2VDb2xsZWN0aW9uXCI6IHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJpbWFnZUNvbGxlY3Rpb25cIixcbiAgICAgICAgXCJpbWFnZXNcIjoge31cbiAgICAgIH0sXG4gICAgICBcImltYWdlc1wiOiBbXSxcbiAgICAgIFwiY29sb3JzXCI6IFtdLFxuICAgICAgXCJncmFkaWVudHNcIjogW11cbiAgICB9LFxuICAgIFwiY29sb3JTcGFjZVwiOiAwLFxuICAgIFwiY3VycmVudFBhZ2VJbmRleFwiOiAxLFxuICAgIFwiZm9yZWlnbkxheWVyU3R5bGVzXCI6IFtdLFxuICAgIFwiZm9yZWlnblN5bWJvbHNcIjogW10sXG4gICAgXCJmb3JlaWduVGV4dFN0eWxlc1wiOiBbXSxcbiAgICBcImxheWVyU3R5bGVzXCI6IHtcbiAgICAgIFwiX2NsYXNzXCI6IFwic2hhcmVkU3R5bGVDb250YWluZXJcIixcbiAgICAgIFwib2JqZWN0c1wiOiBbXVxuICAgIH0sXG4gIH07XG5cbiAganNvbi5wYWdlcyA9XG4gICAgZmlnbWFQYWdlcy5tYXAocGFnZSA9PiAoe1xuICAgICAgICBcIl9jbGFzc1wiOiBcIk1TSlNPTkZpbGVSZWZlcmVuY2VcIixcbiAgICAgICAgXCJfcmVmX2NsYXNzXCI6IFwiTVNJbW11dGFibGVQYWdlXCIsXG4gICAgICAgIFwiX3JlZlwiOiBgcGFnZXMvJHtwYWdlLmlkfWBcbiAgICB9KSk7XG5cbiAgcmV0dXJuIGpzb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5tZXRhRmlsZSA9IGZ1bmN0aW9uIChmaWdtYVBhZ2VzKSB7XG4gIGNvbnN0IGpzb24gPSB7XG4gICAgXCJjb21taXRcIjogXCIxYjczNWFhOGY2NmQzZTEzZjg5MDBhZTdjMzY5ZjM1NWYwZWIyZDNhXCIsXG4gICAgXCJ2ZXJzaW9uXCI6MTEyLFxuICAgIFwiZm9udHNcIjpbXSxcbiAgICBcImNvbXBhdGliaWxpdHlWZXJzaW9uXCI6OTksXG4gICAgXCJhcHBcIjogXCJjb20uYm9oZW1pYW5jb2Rpbmcuc2tldGNoM1wiLFxuICAgIFwiYXV0b3NhdmVkXCI6IDAsXG4gICAgXCJ2YXJpYW50XCI6IFwiTk9OQVBQU1RPUkVcIixcbiAgICBcImNyZWF0ZWRcIjoge1xuICAgICAgXCJjb21taXRcIjogXCIxYjczNWFhOGY2NmQzZTEzZjg5MDBhZTdjMzY5ZjM1NWYwZWIyZDNhXCIsXG4gICAgICBcImFwcFZlcnNpb25cIjogXCI1Mi42XCIsXG4gICAgICBcImJ1aWxkXCI6IDc4MTM2LFxuICAgICAgXCJhcHBcIjogXCJjb20uYm9oZW1pYW5jb2Rpbmcuc2tldGNoM1wiLFxuICAgICAgXCJjb21wYXRpYmlsaXR5VmVyc2lvblwiOiA5OSxcbiAgICAgIFwidmVyc2lvblwiOiAxMTgsXG4gICAgICBcInZhcmlhbnRcIjogXCJOT05BUFBTVE9SRVwiXG4gICAgfSxcbiAgICBcInNhdmVIaXN0b3J5XCI6IFtcIk5PTkFQUFNUT1JFLjc4MTM2XCJdLFxuICAgIFwiYXBwVmVyc2lvblwiOiBcIjUyLjZcIixcbiAgICBcImJ1aWxkXCI6IDc4MTM2XG4gIH07XG5cbiAganNvbi5wYWdlc0FuZEFydGJvYXJkcyA9XG4gICAgZmlnbWFQYWdlcy5tYXAocGFnZSA9PiAoe1xuICAgICAgW2Ake3BhZ2UuaWR9YF06IHtcbiAgICAgICAgXCJuYW1lXCI6IHBhZ2UubmFtZSxcbiAgICAgICAgXCJhcnRib2FyZHNcIjoge1xuICAgICAgICAgIC8vIFRPRE86IExvb3AgdGhlIGFydGJvYXJkcyBmcm9tIEZpZ21hXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgcmV0dXJuIGpzb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cy51c2VyRmlsZSA9IGZ1bmN0aW9uIChmaWdtYVBhZ2VzKSB7XG4gIGNvbnN0IGpzb24gPSB7XG4gICAgXCJkb2N1bWVudFwiOiB7IFwicGFnZUxpc3RIZWlnaHRcIjogODUsIFwicGFnZUxpc3RDb2xsYXBzZWRcIjogMCB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWdtYVBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAganNvbltmaWdtYVBhZ2VzW2ldLmlkXSA9XG4gICAgICB7XG4gICAgICAgIFwic2Nyb2xsT3JpZ2luXCI6IFwiezAsIDB9XCIsXG4gICAgICAgIFwiem9vbVZhbHVlXCI6IDFcbiAgICAgIH07XG4gIH1cblxuICByZXR1cm4ganNvbjtcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBnZW5lcmljIGZyb20gJy4vY29udmVydGVyL2dlbmVyaWMnO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnQnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2NvbnZlcnQnIH0gfSwgJyonKTtcbn07XG5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHBhZ2VzSnNvbiA9IGV2ZW50LmRhdGEucGx1Z2luTWVzc2FnZTtcbiAgICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKTtcbiAgICBjb25zdCBkb2NKc29uID0gZ2VuZXJpYy5kb2NGaWxlKHBhZ2VzSnNvbik7XG4gICAgY29uc3QgbWV0YUpzb24gPSBnZW5lcmljLm1ldGFGaWxlKHBhZ2VzSnNvbik7XG4gICAgY29uc3QgdXNlckpzb24gPSBnZW5lcmljLnVzZXJGaWxlKHBhZ2VzSnNvbik7XG4gICAgemlwLmZpbGUoJ2RvY3VtZW50Lmpzb24nLCBKU09OLnN0cmluZ2lmeShkb2NKc29uLCBudWxsLCAyKSk7XG4gICAgemlwLmZpbGUoJ21ldGEuanNvbicsIEpTT04uc3RyaW5naWZ5KG1ldGFKc29uLCBudWxsLCAyKSk7XG4gICAgemlwLmZpbGUoJ3VzZXIuanNvbicsIEpTT04uc3RyaW5naWZ5KHVzZXJKc29uLCBudWxsLCAyKSk7XG4gICAgcGFnZXNKc29uLmZvckVhY2gocGFnZSA9PiB6aXAuZmlsZShgcGFnZXMvJHtwYWdlLm5hbWV9Lmpzb25gLCBKU09OLnN0cmluZ2lmeShwYWdlLCBudWxsLCAyKSkpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB5aWVsZCB6aXAuZ2VuZXJhdGVBc3luYyh7XG4gICAgICAgIHR5cGU6ICdiYXNlNjQnLFxuICAgICAgICBjb21wcmVzc2lvbk9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxldmVsOiA5LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZCcpO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9ICd0ZXN0LnNrZXRjaCc7XG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSAnZGF0YTphcHBsaWNhdGlvbi96aXA7YmFzZTY1LCcgKyBjb250ZW50O1xuICAgIC8vIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2Rvd25sb2FkJyB9IH0sICcqJyk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=