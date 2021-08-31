webpackHotUpdate_N_E("pages/gardenia",{

/***/ "./pages/gardenia.js":
/*!***************************!*\
  !*** ./pages/gardenia.js ***!
  \***************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gardenia; });
/* harmony import */ var C_Users_coolv_OneDrive_Desktop_woo_next_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_coolv_OneDrive_Desktop_woo_next_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_coolv_OneDrive_Desktop_woo_next_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_coolv_OneDrive_Desktop_woo_next_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_Blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Blog */ "./src/components/Blog.js");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/script */ "./node_modules/next/script.js");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\coolv\\OneDrive\\Desktop\\woo-next-master\\pages\\gardenia.js",
    _s = $RefreshSig$();










function loadScript(src) {
  return new Promise(function (resolve) {
    var script = document.createElement('script');
    script.src = src;

    script.onload = function () {
      resolve(true);
    };

    script.onerror = function () {
      resolve(false);
    };

    document.body.appendChild(script);
  });
}

var __N_SSG = true;
function gardenia(_ref) {
  _s();

  var allItems = _ref.allItems;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('Vaibhav'),
      name = _useState[0],
      setName = _useState[1];

  function displayRazorpay() {
    return _displayRazorpay.apply(this, arguments);
  }

  function _displayRazorpay() {
    _displayRazorpay = Object(C_Users_coolv_OneDrive_Desktop_woo_next_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_coolv_OneDrive_Desktop_woo_next_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, Dev, options, paymentObject;
      return C_Users_coolv_OneDrive_Desktop_woo_next_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return loadScript('https://checkout.razorpay.com/v1/checkout.js');

            case 2:
              res = _context.sent;

              if (res) {
                _context.next = 6;
                break;
              }

              alert('Razorpay SDK failed to load. Are you online?');
              return _context.abrupt("return");

            case 6:
              //   const data = await fetch('http://localhost:3000/razorpay', { method: 'POST' }).then((t) =>
              //     t.json()
              //   )
              //   console.log(data)
              Dev = 'localhost';
              options = {
                key: Dev ? 'rzp_test_UZTkHoqCWKDtHM' : 'PRODUCTION_KEY',
                currency: "INR",
                amount: "5000",
                order_id: "order_HV8eHlmjt1smwR",
                name: 'Donation',
                description: 'Thank you for nothing. Please give us some money',
                image: '',
                handler: function handler(response) {
                  alert(response.razorpay_payment_id);
                  alert(response.razorpay_order_id);
                  alert(response.razorpay_signature);
                },
                prefill: {
                  name: name,
                  email: 'sdfdsjfh2@ndsfdf.com',
                  phone_number: '9899999999'
                }
              };
              paymentObject = new window.Razorpay(options);
              paymentObject.open();

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _displayRazorpay.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_src_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_src_components_Blog__WEBPACK_IMPORTED_MODULE_9__["default"], {
      allItems: allItems
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "razorpay-method",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                className: "App-link",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Donate $5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, this);
}

_s(gardenia, "BRkhMWJXaJ07yLCMG2Jka0BZTIw=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FyZGVuaWEuanMiXSwibmFtZXMiOlsibG9hZFNjcmlwdCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib25sb2FkIiwib25lcnJvciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImdhcmRlbmlhIiwiYWxsSXRlbXMiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZGlzcGxheVJhem9ycGF5IiwicmVzIiwiYWxlcnQiLCJEZXYiLCJvcHRpb25zIiwia2V5IiwiY3VycmVuY3kiLCJhbW91bnQiLCJvcmRlcl9pZCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJoYW5kbGVyIiwicmVzcG9uc2UiLCJyYXpvcnBheV9wYXltZW50X2lkIiwicmF6b3JwYXlfb3JkZXJfaWQiLCJyYXpvcnBheV9zaWduYXR1cmUiLCJwcmVmaWxsIiwiZW1haWwiLCJwaG9uZV9udW1iZXIiLCJwYXltZW50T2JqZWN0Iiwid2luZG93IiwiUmF6b3JwYXkiLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDeEIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQy9CLFFBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsVUFBTSxDQUFDSCxHQUFQLEdBQWFBLEdBQWI7O0FBQ0FHLFVBQU0sQ0FBQ0csTUFBUCxHQUFnQixZQUFNO0FBQ3JCSixhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0EsS0FGRDs7QUFHQUMsVUFBTSxDQUFDSSxPQUFQLEdBQWlCLFlBQU07QUFDdEJMLGFBQU8sQ0FBQyxLQUFELENBQVA7QUFDQSxLQUZEOztBQUdBRSxZQUFRLENBQUNJLElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sTUFBMUI7QUFDQSxHQVZNLENBQVA7QUFXQTs7O0FBR2MsU0FBU08sUUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFFbEJDLHNEQUFRLENBQUMsU0FBRCxDQUZVO0FBQUEsTUFFbkNDLElBRm1DO0FBQUEsTUFFN0JDLE9BRjZCOztBQUFBLFdBSTNCQyxlQUoyQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4VEFJMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDb0JoQixVQUFVLENBQUMsOENBQUQsQ0FEOUI7O0FBQUE7QUFDUWlCLGlCQURSOztBQUFBLGtCQUdPQSxHQUhQO0FBQUE7QUFBQTtBQUFBOztBQUlJQyxtQkFBSyxDQUFDLDhDQUFELENBQUw7QUFKSjs7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ1FDLGlCQWJSLEdBYWMsV0FiZDtBQWVRQyxxQkFmUixHQWVrQjtBQUNkQyxtQkFBRyxFQUFFRixHQUFHLEdBQUcseUJBQUgsR0FBK0IsZ0JBRHpCO0FBRWRHLHdCQUFRLEVBQUUsS0FGSTtBQUdkQyxzQkFBTSxFQUFFLE1BSE07QUFJZEMsd0JBQVEsRUFBRSxzQkFKSTtBQUtkVixvQkFBSSxFQUFFLFVBTFE7QUFNZFcsMkJBQVcsRUFBRSxrREFOQztBQU9kQyxxQkFBSyxFQUFFLEVBUE87QUFRZEMsdUJBQU8sRUFBRSxpQkFBVUMsUUFBVixFQUFvQjtBQUMzQlYsdUJBQUssQ0FBQ1UsUUFBUSxDQUFDQyxtQkFBVixDQUFMO0FBQ0FYLHVCQUFLLENBQUNVLFFBQVEsQ0FBQ0UsaUJBQVYsQ0FBTDtBQUNBWix1QkFBSyxDQUFDVSxRQUFRLENBQUNHLGtCQUFWLENBQUw7QUFDRCxpQkFaYTtBQWFkQyx1QkFBTyxFQUFFO0FBQ1BsQixzQkFBSSxFQUFKQSxJQURPO0FBRVBtQix1QkFBSyxFQUFFLHNCQUZBO0FBR1BDLDhCQUFZLEVBQUU7QUFIUDtBQWJLLGVBZmxCO0FBa0NRQywyQkFsQ1IsR0FrQ3dCLElBQUlDLE1BQU0sQ0FBQ0MsUUFBWCxDQUFvQmpCLE9BQXBCLENBbEN4QjtBQW1DRWUsMkJBQWEsQ0FBQ0csSUFBZDs7QUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKMEM7QUFBQTtBQUFBOztBQTBDMUMsc0JBQ0kscUVBQUMsOERBQUQ7QUFBQSw0QkFDRSxxRUFBQyw0REFBRDtBQUFNLGNBQVEsRUFBRTFCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0UscUVBQUMseURBQUQ7QUFBQSwrQkFDRSxxRUFBQyxtREFBRDtBQUFBLGlDQUNFLHFFQUFDLG1EQUFEO0FBQUssY0FBRSxFQUFFLEVBQVQ7QUFBQSxtQ0FDRTtBQUFBLHFDQUNBO0FBQ0UseUJBQVMsRUFBQyxVQURaO0FBRUUsc0JBQU0sRUFBQyxRQUZUO0FBR0UsbUJBQUcsRUFBQyxxQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkg7O0dBaEV1QkQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYXJkZW5pYS43MmFkMGY1YmMxMjc0NTkxMDZiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBHRVRfUE9TVFMgZnJvbSAnLi4vc3JjL3F1ZXJpZXMvZ2V0LXBvc3RzJztcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXBvbGxvQ2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSAgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uICwgQ29udGFpbmVyLCBSb3csIENvbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7aXNFbXB0eX0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IEJsb2cgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQmxvZyc7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xyXG5cclxuZnVuY3Rpb24gbG9hZFNjcmlwdChzcmMpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcblx0XHRzY3JpcHQuc3JjID0gc3JjXHJcblx0XHRzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0XHRyZXNvbHZlKHRydWUpXHJcblx0XHR9XHJcblx0XHRzY3JpcHQub25lcnJvciA9ICgpID0+IHtcclxuXHRcdFx0cmVzb2x2ZShmYWxzZSlcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYXJkZW5pYSh7YWxsSXRlbXN9KSAge1xyXG5cclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCdWYWliaGF2Jyk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzcGxheVJhem9ycGF5KCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBsb2FkU2NyaXB0KCdodHRwczovL2NoZWNrb3V0LnJhem9ycGF5LmNvbS92MS9jaGVja291dC5qcycpXHJcbiAgXHJcbiAgICAgIGlmICghcmVzKSB7XHJcbiAgICAgICAgYWxlcnQoJ1Jhem9ycGF5IFNESyBmYWlsZWQgdG8gbG9hZC4gQXJlIHlvdSBvbmxpbmU/JylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gIFxyXG4gICAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yYXpvcnBheScsIHsgbWV0aG9kOiAnUE9TVCcgfSkudGhlbigodCkgPT5cclxuICAgIC8vICAgICB0Lmpzb24oKVxyXG4gICAgLy8gICApXHJcbiAgXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIGNvbnN0IERldiA9ICdsb2NhbGhvc3QnO1xyXG4gICAgICBcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBrZXk6IERldiA/ICdyenBfdGVzdF9VWlRrSG9xQ1dLRHRITScgOiAnUFJPRFVDVElPTl9LRVknLFxyXG4gICAgICAgIGN1cnJlbmN5OiBcIklOUlwiLFxyXG4gICAgICAgIGFtb3VudDogXCI1MDAwXCIsXHJcbiAgICAgICAgb3JkZXJfaWQ6IFwib3JkZXJfSFY4ZUhsbWp0MXNtd1JcIixcclxuICAgICAgICBuYW1lOiAnRG9uYXRpb24nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhhbmsgeW91IGZvciBub3RoaW5nLiBQbGVhc2UgZ2l2ZSB1cyBzb21lIG1vbmV5JyxcclxuICAgICAgICBpbWFnZTogJycsXHJcbiAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhbGVydChyZXNwb25zZS5yYXpvcnBheV9wYXltZW50X2lkKVxyXG4gICAgICAgICAgYWxlcnQocmVzcG9uc2UucmF6b3JwYXlfb3JkZXJfaWQpXHJcbiAgICAgICAgICBhbGVydChyZXNwb25zZS5yYXpvcnBheV9zaWduYXR1cmUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVmaWxsOiB7XHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgZW1haWw6ICdzZGZkc2pmaDJAbmRzZmRmLmNvbScsXHJcbiAgICAgICAgICBwaG9uZV9udW1iZXI6ICc5ODk5OTk5OTk5J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwYXltZW50T2JqZWN0ID0gbmV3IHdpbmRvdy5SYXpvcnBheShvcHRpb25zKVxyXG4gICAgICBwYXltZW50T2JqZWN0Lm9wZW4oKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxCbG9nIGFsbEl0ZW1zPXthbGxJdGVtc30vPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXpvcnBheS1tZXRob2RcIj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkFwcC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9uYXRlICQ1XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSgge1xyXG5cdFx0cXVlcnk6IEdFVF9QT1NUUyxcclxuXHR9ICk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcbiAgICAgICAgICBhbGxJdGVtcyA6IHsgcG9zdEl0ZW1zOiBkYXRhPy5wb3N0SXRlbXM/LmVkZ2VzLCBtdWx0aVBvc3RJdGVtczogZGF0YT8ubXVsdGlQb3N0SXRlbXM/LmVkZ2VzIH1cclxuXHRcdH0sXHJcblx0XHRyZXZhbGlkYXRlOiAxXHJcblx0fTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==