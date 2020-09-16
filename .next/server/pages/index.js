module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // const next = require("next");
// var data = {
//   story1: {
//     title: "Lenovo PC",
//     description: "its just pc",
//     body: "Hello just buy it we dont have image",
//   },
// };
// var data2 = {
//   title: "Casper PC",
//   description: "its just pc",
//   body: "Hello just buy it we dont have image",
// };
// const cardCss = require("../public/css/CardView.css");
// const dataFile = require("../public/json/data.json");
// var txt = JSON.stringify(dataFile);
// const dataList = JSON.parse(txt);
// console.log(dataList.Stories[1].title);
// // const fileSystem = require("fs");
// // const socialCss = require("../public/css/SocialButtons.css");
// // const shoifyIndex = (
// //   <page>
// //     <Layout>
// //       <EmptyState
// //         heading="Ürünlerinizi tanıyın"
// //         action={{
// //           content: "Ürün  seçin",
// //           onAction: () => console.log("clicked"),
// //         }}
// //         image={img}
// //       >
// //         <p>Takip edilecek ürünleri seçin</p>
// //       </EmptyState>
// //     </Layout>
// //   </page>
// // );
// var list = dataList.Stories; //[data.story1, data2.story2];
// const Index = () => (
//   <div class="parent">
//     <div class="card card-2">
//       <div class="custom-header">Your Stories</div>
//       <hr></hr>
//       <a class="button" href="#">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="white"
//           width="36px"
//           height="36px"
//         >
//           <path d="M0 0h24v24H0z" fill="none" />
//           <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
//         </svg>
//         Add story
//       </a>
//       {list.length >= 1 &&
//         list.map((item, index) => {
//           return (
//             <div class="item-background">
//               <div class="item-title">{item.title}</div>
//             </div>
//           );
//         })}
//     </div>
//   </div>
// );
// const CardIndex = () => <div class="card card-1"></div>;


const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false
    });

    _defineProperty(this, "handleSelection", resources => {
      const idsFromResources = resources.selection.map(product => product.id);
      this.setState({
        open: false
      });
      console.log(idsFromResources);
    });
  }

  render() {
    return __jsx("page", null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["TitleBar"], {
      title: "Sample App",
      primaryAction: {
        content: "Select products",
        onAction: () => this.setState({
          open: true
        })
      }
    }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
      resourceType: "Product",
      showVariants: false,
      open: this.state.open,
      onSelection: resources => this.handleSelection(resources),
      onCancel: () => this.setState({
        open: false
      })
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
      heading: "\xDCr\xFCnlerinizi tan\u0131y\u0131n",
      action: {
        content: "Ürün  seçin",
        onAction: () => this.setState({
          open: true
        })
      },
      image: img
    }, __jsx("p", null, "Takip edilecek \xFCr\xFCnleri se\xE7in"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);
{
  /* <div class="circle-button"> <i class="fa fa-github"></i></div> */
  // <div href="#" class="circle-button">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         fill="white"
  //         width="36px"
  //         height="36px"
  //       >
  //         <path d="M0 0h24v24H0z" fill="none" />
  //         <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  //       </svg>
  //     </div>
}

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImltZyIsIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJvcGVuIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInN0YXRlIiwiaGFuZGxlU2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDdkZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLG1FQUFaOztBQUNBLE1BQU1DLEtBQU4sU0FBb0JDLDRDQUFLLENBQUNDLFNBQTFCLENBQW9DO0FBQUE7QUFBQTs7QUFBQSxtQ0FDMUI7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FEMEI7O0FBQUEsNkNBa0NmQyxTQUFELElBQWU7QUFDL0IsWUFBTUMsZ0JBQWdCLEdBQUdELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBeUJDLE9BQUQsSUFBYUEsT0FBTyxDQUFDQyxFQUE3QyxDQUF6QjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFFUCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0FRLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxnQkFBWjtBQUNELEtBdENpQztBQUFBOztBQUVsQ1EsUUFBTSxHQUFHO0FBQ1AsV0FDRSxvQkFDRSxNQUFDLGtFQUFEO0FBQ0UsV0FBSyxFQUFDLFlBRFI7QUFFRSxtQkFBYSxFQUFFO0FBQ2JDLGVBQU8sRUFBRSxpQkFESTtBQUViQyxnQkFBUSxFQUFFLE1BQU0sS0FBS0wsUUFBTCxDQUFjO0FBQUVQLGNBQUksRUFBRTtBQUFSLFNBQWQ7QUFGSDtBQUZqQixNQURGLEVBUUUsTUFBQyx3RUFBRDtBQUNFLGtCQUFZLEVBQUMsU0FEZjtBQUVFLGtCQUFZLEVBQUUsS0FGaEI7QUFHRSxVQUFJLEVBQUUsS0FBS2EsS0FBTCxDQUFXYixJQUhuQjtBQUlFLGlCQUFXLEVBQUdDLFNBQUQsSUFBZSxLQUFLYSxlQUFMLENBQXFCYixTQUFyQixDQUo5QjtBQUtFLGNBQVEsRUFBRSxNQUFNLEtBQUtNLFFBQUwsQ0FBYztBQUFFUCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBTGxCLE1BUkYsRUFlRSxNQUFDLHVEQUFELFFBQ0UsTUFBQywyREFBRDtBQUNFLGFBQU8sRUFBQyxzQ0FEVjtBQUVFLFlBQU0sRUFBRTtBQUNOVyxlQUFPLEVBQUUsYUFESDtBQUVOQyxnQkFBUSxFQUFFLE1BQU0sS0FBS0wsUUFBTCxDQUFjO0FBQUVQLGNBQUksRUFBRTtBQUFSLFNBQWQ7QUFGVixPQUZWO0FBTUUsV0FBSyxFQUFFSjtBQU5ULE9BUUUsMERBUkYsQ0FERixDQWZGLENBREY7QUE4QkQ7O0FBakNpQzs7QUF3Q3JCQyxvRUFBZjtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDOzs7Ozs7Ozs7OztBQ3hJRCxzRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2UgfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xyXG4vLyBjb25zdCBuZXh0ID0gcmVxdWlyZShcIm5leHRcIik7XHJcblxyXG4vLyB2YXIgZGF0YSA9IHtcclxuLy8gICBzdG9yeTE6IHtcclxuLy8gICAgIHRpdGxlOiBcIkxlbm92byBQQ1wiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiaXRzIGp1c3QgcGNcIixcclxuLy8gICAgIGJvZHk6IFwiSGVsbG8ganVzdCBidXkgaXQgd2UgZG9udCBoYXZlIGltYWdlXCIsXHJcbi8vICAgfSxcclxuLy8gfTtcclxuLy8gdmFyIGRhdGEyID0ge1xyXG4vLyAgIHRpdGxlOiBcIkNhc3BlciBQQ1wiLFxyXG4vLyAgIGRlc2NyaXB0aW9uOiBcIml0cyBqdXN0IHBjXCIsXHJcbi8vICAgYm9keTogXCJIZWxsbyBqdXN0IGJ1eSBpdCB3ZSBkb250IGhhdmUgaW1hZ2VcIixcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IGNhcmRDc3MgPSByZXF1aXJlKFwiLi4vcHVibGljL2Nzcy9DYXJkVmlldy5jc3NcIik7XHJcblxyXG4vLyBjb25zdCBkYXRhRmlsZSA9IHJlcXVpcmUoXCIuLi9wdWJsaWMvanNvbi9kYXRhLmpzb25cIik7XHJcbi8vIHZhciB0eHQgPSBKU09OLnN0cmluZ2lmeShkYXRhRmlsZSk7XHJcblxyXG4vLyBjb25zdCBkYXRhTGlzdCA9IEpTT04ucGFyc2UodHh0KTtcclxuLy8gY29uc29sZS5sb2coZGF0YUxpc3QuU3Rvcmllc1sxXS50aXRsZSk7XHJcblxyXG4vLyAvLyBjb25zdCBmaWxlU3lzdGVtID0gcmVxdWlyZShcImZzXCIpO1xyXG4vLyAvLyBjb25zdCBzb2NpYWxDc3MgPSByZXF1aXJlKFwiLi4vcHVibGljL2Nzcy9Tb2NpYWxCdXR0b25zLmNzc1wiKTtcclxuXHJcbi8vIC8vIGNvbnN0IHNob2lmeUluZGV4ID0gKFxyXG4vLyAvLyAgIDxwYWdlPlxyXG4vLyAvLyAgICAgPExheW91dD5cclxuLy8gLy8gICAgICAgPEVtcHR5U3RhdGVcclxuLy8gLy8gICAgICAgICBoZWFkaW5nPVwiw5xyw7xubGVyaW5pemkgdGFuxLF5xLFuXCJcclxuLy8gLy8gICAgICAgICBhY3Rpb249e3tcclxuLy8gLy8gICAgICAgICAgIGNvbnRlbnQ6IFwiw5xyw7xuICBzZcOnaW5cIixcclxuLy8gLy8gICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiBjb25zb2xlLmxvZyhcImNsaWNrZWRcIiksXHJcbi8vIC8vICAgICAgICAgfX1cclxuLy8gLy8gICAgICAgICBpbWFnZT17aW1nfVxyXG4vLyAvLyAgICAgICA+XHJcbi8vIC8vICAgICAgICAgPHA+VGFraXAgZWRpbGVjZWsgw7xyw7xubGVyaSBzZcOnaW48L3A+XHJcbi8vIC8vICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuLy8gLy8gICAgIDwvTGF5b3V0PlxyXG4vLyAvLyAgIDwvcGFnZT5cclxuLy8gLy8gKTtcclxuXHJcbi8vIHZhciBsaXN0ID0gZGF0YUxpc3QuU3RvcmllczsgLy9bZGF0YS5zdG9yeTEsIGRhdGEyLnN0b3J5Ml07XHJcblxyXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcclxuLy8gICA8ZGl2IGNsYXNzPVwicGFyZW50XCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLTJcIj5cclxuLy8gICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1oZWFkZXJcIj5Zb3VyIFN0b3JpZXM8L2Rpdj5cclxuLy8gICAgICAgPGhyPjwvaHI+XHJcblxyXG4vLyAgICAgICA8YSBjbGFzcz1cImJ1dHRvblwiIGhyZWY9XCIjXCI+XHJcbi8vICAgICAgICAgPHN2Z1xyXG4vLyAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbi8vICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuLy8gICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbi8vICAgICAgICAgICB3aWR0aD1cIjM2cHhcIlxyXG4vLyAgICAgICAgICAgaGVpZ2h0PVwiMzZweFwiXHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XHJcbi8vICAgICAgICAgICA8cGF0aCBkPVwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnpcIiAvPlxyXG4vLyAgICAgICAgIDwvc3ZnPlxyXG4vLyAgICAgICAgIEFkZCBzdG9yeVxyXG4vLyAgICAgICA8L2E+XHJcbi8vICAgICAgIHtsaXN0Lmxlbmd0aCA+PSAxICYmXHJcbi8vICAgICAgICAgbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbi8vICAgICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1iYWNrZ3JvdW5kXCI+XHJcbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tdGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICApO1xyXG4vLyAgICAgICAgIH0pfVxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgPC9kaXY+XHJcbi8vICk7XHJcblxyXG4vLyBjb25zdCBDYXJkSW5kZXggPSAoKSA9PiA8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkLTFcIj48L2Rpdj47XHJcbmltcG9ydCB7IFJlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI7XHJcblxyXG5jb25zdCBpbWcgPSBcImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnXCI7XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHsgb3BlbjogZmFsc2UgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cGFnZT5cclxuICAgICAgICA8VGl0bGVCYXJcclxuICAgICAgICAgIHRpdGxlPVwiU2FtcGxlIEFwcFwiXHJcbiAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2VsZWN0IHByb2R1Y3RzXCIsXHJcbiAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmVzb3VyY2VQaWNrZXJcclxuICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxyXG4gICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cclxuICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxyXG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8RW1wdHlTdGF0ZVxyXG4gICAgICAgICAgICBoZWFkaW5nPVwiw5xyw7xubGVyaW5pemkgdGFuxLF5xLFuXCJcclxuICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgY29udGVudDogXCLDnHLDvG4gIHNlw6dpblwiLFxyXG4gICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaW1hZ2U9e2ltZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+VGFraXAgZWRpbGVjZWsgw7xyw7xubGVyaSBzZcOnaW48L3A+XHJcbiAgICAgICAgICA8L0VtcHR5U3RhdGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvcGFnZT5cclxuICAgICk7XHJcbiAgfVxyXG4gIGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZXMpID0+IHtcclxuICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhpZHNGcm9tUmVzb3VyY2VzKTtcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG57XHJcbiAgLyogPGRpdiBjbGFzcz1cImNpcmNsZS1idXR0b25cIj4gPGkgY2xhc3M9XCJmYSBmYS1naXRodWJcIj48L2k+PC9kaXY+ICovXHJcbiAgLy8gPGRpdiBocmVmPVwiI1wiIGNsYXNzPVwiY2lyY2xlLWJ1dHRvblwiPlxyXG4gIC8vICAgICAgIDxzdmdcclxuICAvLyAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gIC8vICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgLy8gICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gIC8vICAgICAgICAgd2lkdGg9XCIzNnB4XCJcclxuICAvLyAgICAgICAgIGhlaWdodD1cIjM2cHhcIlxyXG4gIC8vICAgICAgID5cclxuICAvLyAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxyXG4gIC8vICAgICAgICAgPHBhdGggZD1cIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2djJ6XCIgLz5cclxuICAvLyAgICAgICA8L3N2Zz5cclxuICAvLyAgICAgPC9kaXY+XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9wb2xhcmlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=