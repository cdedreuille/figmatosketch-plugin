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
    const { sketchPages, figmaPages } = event.data.pluginMessage;
    const zip = new JSZip();
    const docJson = _converter_generic__WEBPACK_IMPORTED_MODULE_0___default.a.docFile(figmaPages);
    const metaJson = _converter_generic__WEBPACK_IMPORTED_MODULE_0___default.a.metaFile(figmaPages);
    const userJson = _converter_generic__WEBPACK_IMPORTED_MODULE_0___default.a.userFile(figmaPages);
    zip.file('document.json', JSON.stringify(docJson, null, 2));
    zip.file('meta.json', JSON.stringify(metaJson, null, 2));
    zip.file('user.json', JSON.stringify(userJson, null, 2));
    figmaPages.forEach((page, i) => zip.file(`pages/${page.id}.json`, JSON.stringify(sketchPages[i], null, 2)));
    const content = yield zip.generateAsync({
        type: 'base64',
        compressionOptions: {
            level: 9,
        },
    });
    const downloadLink = document.getElementById('download');
    downloadLink.download = 'test.sketch';
    downloadLink.href = 'data:application/zip;base64,' + content;
    // parent.postMessage({ pluginMessage: { type: 'download' } }, '*');
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnZlcnRlci9nZW5lcmljLmpzIiwid2VicGFjazovLy8uL3NyYy91aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLFFBQVE7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsMEJBQTBCLEtBQUs7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFBQTtBQUFBO0FBQUEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDMEM7QUFDMUM7QUFDQSx3QkFBd0IsaUJBQWlCLGtCQUFrQixFQUFFO0FBQzdEO0FBQ0E7QUFDQSxXQUFXLDBCQUEwQjtBQUNyQztBQUNBLG9CQUFvQix5REFBTztBQUMzQixxQkFBcUIseURBQU87QUFDNUIscUJBQXFCLHlEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxRQUFRO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLDJCQUEyQixpQkFBaUIsbUJBQW1CLEVBQUU7QUFDakUsQ0FBQyIsImZpbGUiOiJ1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3VpLnRzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMuZG9jRmlsZSA9IGZ1bmN0aW9uIChmaWdtYVBhZ2VzKSB7XG4gIGNvbnN0IGpzb24gPSB7XG4gICAgXCJfY2xhc3NcIjogXCJkb2N1bWVudFwiLFxuICAgIFwiZG9fb2JqZWN0SURcIjogXCIyMjFFMzA2Qy1CRUY5LTQxM0UtODRBNS1CRkRBQTZGQzQzMDNcIixcbiAgICBcImFzc2V0c1wiOiB7XG4gICAgICBcIl9jbGFzc1wiOiBcImFzc2V0Q29sbGVjdGlvblwiLFxuICAgICAgXCJjb2xvckFzc2V0c1wiOiBbXSxcbiAgICAgIFwiZ3JhZGllbnRBc3NldHNcIjogW10sXG4gICAgICBcImltYWdlQ29sbGVjdGlvblwiOiB7XG4gICAgICAgIFwiX2NsYXNzXCI6IFwiaW1hZ2VDb2xsZWN0aW9uXCIsXG4gICAgICAgIFwiaW1hZ2VzXCI6IHt9XG4gICAgICB9LFxuICAgICAgXCJpbWFnZXNcIjogW10sXG4gICAgICBcImNvbG9yc1wiOiBbXSxcbiAgICAgIFwiZ3JhZGllbnRzXCI6IFtdXG4gICAgfSxcbiAgICBcImNvbG9yU3BhY2VcIjogMCxcbiAgICBcImN1cnJlbnRQYWdlSW5kZXhcIjogMSxcbiAgICBcImZvcmVpZ25MYXllclN0eWxlc1wiOiBbXSxcbiAgICBcImZvcmVpZ25TeW1ib2xzXCI6IFtdLFxuICAgIFwiZm9yZWlnblRleHRTdHlsZXNcIjogW10sXG4gICAgXCJsYXllclN0eWxlc1wiOiB7XG4gICAgICBcIl9jbGFzc1wiOiBcInNoYXJlZFN0eWxlQ29udGFpbmVyXCIsXG4gICAgICBcIm9iamVjdHNcIjogW11cbiAgICB9LFxuICB9O1xuXG4gIGpzb24ucGFnZXMgPVxuICAgIGZpZ21hUGFnZXMubWFwKHBhZ2UgPT4gKHtcbiAgICAgICAgXCJfY2xhc3NcIjogXCJNU0pTT05GaWxlUmVmZXJlbmNlXCIsXG4gICAgICAgIFwiX3JlZl9jbGFzc1wiOiBcIk1TSW1tdXRhYmxlUGFnZVwiLFxuICAgICAgICBcIl9yZWZcIjogYHBhZ2VzLyR7cGFnZS5pZH1gXG4gICAgfSkpO1xuXG4gIHJldHVybiBqc29uO1xufTtcblxubW9kdWxlLmV4cG9ydHMubWV0YUZpbGUgPSBmdW5jdGlvbiAoZmlnbWFQYWdlcykge1xuICBjb25zdCBqc29uID0ge1xuICAgIFwiY29tbWl0XCI6IFwiMWI3MzVhYThmNjZkM2UxM2Y4OTAwYWU3YzM2OWYzNTVmMGViMmQzYVwiLFxuICAgIFwidmVyc2lvblwiOjExMixcbiAgICBcImZvbnRzXCI6W10sXG4gICAgXCJjb21wYXRpYmlsaXR5VmVyc2lvblwiOjk5LFxuICAgIFwiYXBwXCI6IFwiY29tLmJvaGVtaWFuY29kaW5nLnNrZXRjaDNcIixcbiAgICBcImF1dG9zYXZlZFwiOiAwLFxuICAgIFwidmFyaWFudFwiOiBcIk5PTkFQUFNUT1JFXCIsXG4gICAgXCJjcmVhdGVkXCI6IHtcbiAgICAgIFwiY29tbWl0XCI6IFwiMWI3MzVhYThmNjZkM2UxM2Y4OTAwYWU3YzM2OWYzNTVmMGViMmQzYVwiLFxuICAgICAgXCJhcHBWZXJzaW9uXCI6IFwiNTIuNlwiLFxuICAgICAgXCJidWlsZFwiOiA3ODEzNixcbiAgICAgIFwiYXBwXCI6IFwiY29tLmJvaGVtaWFuY29kaW5nLnNrZXRjaDNcIixcbiAgICAgIFwiY29tcGF0aWJpbGl0eVZlcnNpb25cIjogOTksXG4gICAgICBcInZlcnNpb25cIjogMTE4LFxuICAgICAgXCJ2YXJpYW50XCI6IFwiTk9OQVBQU1RPUkVcIlxuICAgIH0sXG4gICAgXCJzYXZlSGlzdG9yeVwiOiBbXCJOT05BUFBTVE9SRS43ODEzNlwiXSxcbiAgICBcImFwcFZlcnNpb25cIjogXCI1Mi42XCIsXG4gICAgXCJidWlsZFwiOiA3ODEzNlxuICB9O1xuXG4gIGpzb24ucGFnZXNBbmRBcnRib2FyZHMgPVxuICAgIGZpZ21hUGFnZXMubWFwKHBhZ2UgPT4gKHtcbiAgICAgIFtgJHtwYWdlLmlkfWBdOiB7XG4gICAgICAgIFwibmFtZVwiOiBwYWdlLm5hbWUsXG4gICAgICAgIFwiYXJ0Ym9hcmRzXCI6IHtcbiAgICAgICAgICAvLyBUT0RPOiBMb29wIHRoZSBhcnRib2FyZHMgZnJvbSBGaWdtYVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuXG4gIHJldHVybiBqc29uO1xufTtcblxubW9kdWxlLmV4cG9ydHMudXNlckZpbGUgPSBmdW5jdGlvbiAoZmlnbWFQYWdlcykge1xuICBjb25zdCBqc29uID0ge1xuICAgIFwiZG9jdW1lbnRcIjogeyBcInBhZ2VMaXN0SGVpZ2h0XCI6IDg1LCBcInBhZ2VMaXN0Q29sbGFwc2VkXCI6IDAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmlnbWFQYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGpzb25bZmlnbWFQYWdlc1tpXS5pZF0gPVxuICAgICAge1xuICAgICAgICBcInNjcm9sbE9yaWdpblwiOiBcInswLCAwfVwiLFxuICAgICAgICBcInpvb21WYWx1ZVwiOiAxXG4gICAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgZ2VuZXJpYyBmcm9tICcuL2NvbnZlcnRlci9nZW5lcmljJztcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0Jykub25jbGljayA9ICgpID0+IHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdjb252ZXJ0JyB9IH0sICcqJyk7XG59O1xub25tZXNzYWdlID0gKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IHNrZXRjaFBhZ2VzLCBmaWdtYVBhZ2VzIH0gPSBldmVudC5kYXRhLnBsdWdpbk1lc3NhZ2U7XG4gICAgY29uc3QgemlwID0gbmV3IEpTWmlwKCk7XG4gICAgY29uc3QgZG9jSnNvbiA9IGdlbmVyaWMuZG9jRmlsZShmaWdtYVBhZ2VzKTtcbiAgICBjb25zdCBtZXRhSnNvbiA9IGdlbmVyaWMubWV0YUZpbGUoZmlnbWFQYWdlcyk7XG4gICAgY29uc3QgdXNlckpzb24gPSBnZW5lcmljLnVzZXJGaWxlKGZpZ21hUGFnZXMpO1xuICAgIHppcC5maWxlKCdkb2N1bWVudC5qc29uJywgSlNPTi5zdHJpbmdpZnkoZG9jSnNvbiwgbnVsbCwgMikpO1xuICAgIHppcC5maWxlKCdtZXRhLmpzb24nLCBKU09OLnN0cmluZ2lmeShtZXRhSnNvbiwgbnVsbCwgMikpO1xuICAgIHppcC5maWxlKCd1c2VyLmpzb24nLCBKU09OLnN0cmluZ2lmeSh1c2VySnNvbiwgbnVsbCwgMikpO1xuICAgIGZpZ21hUGFnZXMuZm9yRWFjaCgocGFnZSwgaSkgPT4gemlwLmZpbGUoYHBhZ2VzLyR7cGFnZS5pZH0uanNvbmAsIEpTT04uc3RyaW5naWZ5KHNrZXRjaFBhZ2VzW2ldLCBudWxsLCAyKSkpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB5aWVsZCB6aXAuZ2VuZXJhdGVBc3luYyh7XG4gICAgICAgIHR5cGU6ICdiYXNlNjQnLFxuICAgICAgICBjb21wcmVzc2lvbk9wdGlvbnM6IHtcbiAgICAgICAgICAgIGxldmVsOiA5LFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZCcpO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9ICd0ZXN0LnNrZXRjaCc7XG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSAnZGF0YTphcHBsaWNhdGlvbi96aXA7YmFzZTY0LCcgKyBjb250ZW50O1xuICAgIC8vIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2Rvd25sb2FkJyB9IH0sICcqJyk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=