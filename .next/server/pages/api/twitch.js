/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/twitch";
exports.ids = ["pages/api/twitch"];
exports.modules = {

/***/ "@bradgarropy/http":
/*!************************************!*\
  !*** external "@bradgarropy/http" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@bradgarropy/http");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("regenerator-runtime");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js?3e0a":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\nmodule.exports = _asyncToGenerator;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzPzNlMGEuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsbUJBQW1CLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYWRnYXJyb3B5LmNvbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanM/ZGE0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/asyncToGenerator.js?3e0a\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js?88a1":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"regenerator-runtime\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanM/ODhhMS5qcyIsIm1hcHBpbmdzIjoiQUFBQSxzRkFBK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmFkZ2Fycm9weS5jb20vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanM/OGIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/regenerator/index.js?88a1\n");

/***/ }),

/***/ "./src/pages/api/twitch.ts":
/*!*********************************!*\
  !*** ./src/pages/api/twitch.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js?3e0a\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js?88a1\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _bradgarropy_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bradgarropy/http */ \"@bradgarropy/http\");\n/* harmony import */ var _bradgarropy_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bradgarropy_http__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar handler = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var clientId, clientSecret, _yield$post, access_token, channelResponse, channel, body;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            clientId = process.env.TWITCH_CLIENT_ID;\n            clientSecret = process.env.TWITCH_CLIENT_SECRET;\n            _context.next = 4;\n            return (0,_bradgarropy_http__WEBPACK_IMPORTED_MODULE_2__.post)(\"https://id.twitch.tv/oauth2/token?client_id=\".concat(clientId, \"&client_secret=\").concat(clientSecret, \"&grant_type=client_credentials\"));\n\n          case 4:\n            _yield$post = _context.sent;\n            access_token = _yield$post.access_token;\n            _context.next = 8;\n            return (0,_bradgarropy_http__WEBPACK_IMPORTED_MODULE_2__.get)(\"https://api.twitch.tv/helix/search/channels?query=bradgarropy\", {\n              headers: {\n                \"authorization\": \"Bearer \".concat(access_token),\n                \"client-id\": clientId\n              }\n            });\n\n          case 8:\n            channelResponse = _context.sent;\n            channel = channelResponse.data.find(function (channel) {\n              return channel[\"broadcaster_login\"] === \"bradgarropy\";\n            });\n            body = {\n              isLive: channel.is_live\n            };\n            res.status(200).json(body);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function handler(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3R3aXRjaC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNRSxPQUFPO0FBQUEsaUxBQUcsaUJBQU9DLEdBQVAsRUFBNEJDLEdBQTVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTkMsWUFBQUEsUUFETSxHQUNLQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRGpCO0FBRU5DLFlBQUFBLFlBRk0sR0FFU0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG9CQUZyQjtBQUFBO0FBQUEsbUJBSWlCVCx1REFBSSx1REFDa0JJLFFBRGxCLDRCQUM0Q0ksWUFENUMsb0NBSnJCOztBQUFBO0FBQUE7QUFJTEUsWUFBQUEsWUFKSyxlQUlMQSxZQUpLO0FBQUE7QUFBQSxtQkFTdUJYLHNEQUFHLENBQ2xDLCtEQURrQyxFQUVsQztBQUNJWSxjQUFBQSxPQUFPLEVBQUU7QUFDTCxrREFBMkJELFlBQTNCLENBREs7QUFFTCw2QkFBYU47QUFGUjtBQURiLGFBRmtDLENBVDFCOztBQUFBO0FBU05RLFlBQUFBLGVBVE07QUFtQk5DLFlBQUFBLE9BbkJNLEdBbUJJRCxlQUFlLENBQUNFLElBQWhCLENBQXFCQyxJQUFyQixDQUNaLFVBQUFGLE9BQU87QUFBQSxxQkFBSUEsT0FBTyxDQUFDLG1CQUFELENBQVAsS0FBaUMsYUFBckM7QUFBQSxhQURLLENBbkJKO0FBdUJORyxZQUFBQSxJQXZCTSxHQXVCQztBQUFDQyxjQUFBQSxNQUFNLEVBQUVKLE9BQU8sQ0FBQ0s7QUFBakIsYUF2QkQ7QUF5QlpmLFlBQUFBLEdBQUcsQ0FBQ2dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkosSUFBckI7O0FBekJZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBmLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUE0QkEsaUVBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmFkZ2Fycm9weS5jb20vLi9zcmMvcGFnZXMvYXBpL3R3aXRjaC50cz80ZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0LCBwb3N0fSBmcm9tIFwiQGJyYWRnYXJyb3B5L2h0dHBcIlxuaW1wb3J0IHR5cGUge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gXCJuZXh0XCJcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGNsaWVudElkID0gcHJvY2Vzcy5lbnYuVFdJVENIX0NMSUVOVF9JRFxuICAgIGNvbnN0IGNsaWVudFNlY3JldCA9IHByb2Nlc3MuZW52LlRXSVRDSF9DTElFTlRfU0VDUkVUXG5cbiAgICBjb25zdCB7YWNjZXNzX3Rva2VufSA9IGF3YWl0IHBvc3QoXG4gICAgICAgIGBodHRwczovL2lkLnR3aXRjaC50di9vYXV0aDIvdG9rZW4/Y2xpZW50X2lkPSR7Y2xpZW50SWR9JmNsaWVudF9zZWNyZXQ9JHtjbGllbnRTZWNyZXR9JmdyYW50X3R5cGU9Y2xpZW50X2NyZWRlbnRpYWxzYCxcbiAgICApXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGNvbnN0IGNoYW5uZWxSZXNwb25zZTogYW55ID0gYXdhaXQgZ2V0KFxuICAgICAgICBcImh0dHBzOi8vYXBpLnR3aXRjaC50di9oZWxpeC9zZWFyY2gvY2hhbm5lbHM/cXVlcnk9YnJhZGdhcnJvcHlcIixcbiAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiYXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXG4gICAgICAgICAgICAgICAgXCJjbGllbnQtaWRcIjogY2xpZW50SWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIClcblxuICAgIGNvbnN0IGNoYW5uZWwgPSBjaGFubmVsUmVzcG9uc2UuZGF0YS5maW5kKFxuICAgICAgICBjaGFubmVsID0+IGNoYW5uZWxbXCJicm9hZGNhc3Rlcl9sb2dpblwiXSA9PT0gXCJicmFkZ2Fycm9weVwiLFxuICAgIClcblxuICAgIGNvbnN0IGJvZHkgPSB7aXNMaXZlOiBjaGFubmVsLmlzX2xpdmV9XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihib2R5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iXSwibmFtZXMiOlsiZ2V0IiwicG9zdCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJUV0lUQ0hfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiVFdJVENIX0NMSUVOVF9TRUNSRVQiLCJhY2Nlc3NfdG9rZW4iLCJoZWFkZXJzIiwiY2hhbm5lbFJlc3BvbnNlIiwiY2hhbm5lbCIsImRhdGEiLCJmaW5kIiwiYm9keSIsImlzTGl2ZSIsImlzX2xpdmUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/twitch.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/twitch.ts"));
module.exports = __webpack_exports__;

})();