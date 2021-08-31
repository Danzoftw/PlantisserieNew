webpackHotUpdate_N_E("pages/cart",{

/***/ "./src/components/cart/cart-page/CartItem.js":
/*!***************************************************!*\
  !*** ./src/components/cart/cart-page/CartItem.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../functions */ "./src/functions.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons */ "./src/components/icons/index.js");


var _jsxFileName = "C:\\Users\\coolv\\OneDrive\\Desktop\\woo-next-master\\src\\components\\cart\\cart-page\\CartItem.js",
    _this = undefined,
    _s = $RefreshSig$();







var CartItem = function CartItem(_ref) {
  _s();

  var item = _ref.item,
      products = _ref.products,
      updateCartProcessing = _ref.updateCartProcessing,
      handleRemoveProductClick = _ref.handleRemoveProductClick,
      updateCart = _ref.updateCart;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(item.qty),
      productCount = _useState[0],
      setProductCount = _useState[1];

  var reference = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0); // console.log(reference.current.value);

  console.log(products);
  console.log(item); // function incrVal(){
  // 	setProductCount
  // 	console.log(item.qty);
  // }

  /*
   * When user changes the qty from product input update the cart in localStorage
   * Also update the cart in global context
   *
   * @param {Object} event event
   *
   * @return {void}
   */

  var handleQtyChange = function handleQtyChange(event, cartKey) {
    if (true) {
      event.stopPropagation(); // If the previous update cart mutation request is still processing, then return.

      if (updateCartProcessing) {
        return;
      } // If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )


      var newQty = event.target.value ? parseInt(event.target.value) : 1; // Set the new qty in state.

      setProductCount(newQty);

      if (products.length) {
        var updatedItems = Object(_functions__WEBPACK_IMPORTED_MODULE_3__["getUpdatedItems"])(products, newQty, cartKey);
        updateCart({
          variables: {
            input: {
              clientMutationId: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
              items: updatedItems
            }
          }
        });
      }
    }
  };

  var handleChanges = function handleChanges(e) {
    setProductCount(event.target.value.replace(/\D/, ""));
  };

  var topArrowClicked = function topArrowClicked(e) {
    setProductCount(function (prevState) {
      return prevState + 1;
    });
  };

  var bottomArrowClicked = function bottomArrowClicked(e) {
    setProductCount(function (prevState) {
      return prevState - 1;
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
    className: "woo-next-cart-item",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
      className: "woo-next-cart-element woo-next-cart-el-close",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "woo-next-cart-close-icon cursor-pointer",
        onClick: function onClick(event) {
          return handleRemoveProductClick(event, item.cartKey, products);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons__WEBPACK_IMPORTED_MODULE_4__["Cross"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: "woo-next-cart-element",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        width: "64",
        src: item.image.sourceUrl,
        srcSet: item.image.srcSet,
        alt: item.image.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "product-name",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        className: "woo-next-cart-element font-hk",
        children: item.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        className: "woo-next-cart-element d-flex align-items-center",
        children: 'string' !== typeof item.price ? item.price.toFixed(2) : item.price
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: "woo-next-cart-element woo-next-cart-qty",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        // ref={reference}
        type: "number",
        min: "1",
        "data-cart-key": item.cartKey,
        className: "woo-next-cart-qty-input form-control ".concat(updateCartProcessing ? 'opacity-25 cursor-not-allowed' : '', " "),
        value: productCount // onChange={ ( event ) => handleQtyChange( event, item.cartKey ) }

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "arrows",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputArrows, {
          topArrowClick: topArrowClicked,
          bottomArrowClick: bottomArrowClicked
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "total-main d-flex justify-content-center py-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        className: "woo-next-cart-element",
        children: 'string' !== typeof item.totalPrice ? item.totalPrice.toFixed(2) : item.totalPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 4
    }, _this)]
  }, item.productId, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 3
  }, _this);
};

_s(CartItem, "TyEYzqPgW8RbskRw/UDWf5nv1zY=");

_c = CartItem;

var InputArrows = function InputArrows(_ref2) {
  var topArrowClick = _ref2.topArrowClick,
      bottomArrowClick = _ref2.bottomArrowClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "arrows-component",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "arrows",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: topArrowClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: bottomArrowClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 4
  }, _this);
};

_c2 = InputArrows;
/* harmony default export */ __webpack_exports__["default"] = (CartItem);

var _c, _c2;

$RefreshReg$(_c, "CartItem");
$RefreshReg$(_c2, "InputArrows");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UvQ2FydEl0ZW0uanMiXSwibmFtZXMiOlsiQ2FydEl0ZW0iLCJpdGVtIiwicHJvZHVjdHMiLCJ1cGRhdGVDYXJ0UHJvY2Vzc2luZyIsImhhbmRsZVJlbW92ZVByb2R1Y3RDbGljayIsInVwZGF0ZUNhcnQiLCJ1c2VTdGF0ZSIsInF0eSIsInByb2R1Y3RDb3VudCIsInNldFByb2R1Y3RDb3VudCIsInJlZmVyZW5jZSIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVRdHlDaGFuZ2UiLCJldmVudCIsImNhcnRLZXkiLCJzdG9wUHJvcGFnYXRpb24iLCJuZXdRdHkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhcnNlSW50IiwibGVuZ3RoIiwidXBkYXRlZEl0ZW1zIiwiZ2V0VXBkYXRlZEl0ZW1zIiwidmFyaWFibGVzIiwiaW5wdXQiLCJjbGllbnRNdXRhdGlvbklkIiwidjQiLCJpdGVtcyIsImhhbmRsZUNoYW5nZXMiLCJlIiwicmVwbGFjZSIsInRvcEFycm93Q2xpY2tlZCIsInByZXZTdGF0ZSIsImJvdHRvbUFycm93Q2xpY2tlZCIsImltYWdlIiwic291cmNlVXJsIiwic3JjU2V0IiwidGl0bGUiLCJuYW1lIiwicHJpY2UiLCJ0b0ZpeGVkIiwidG90YWxQcmljZSIsInByb2R1Y3RJZCIsIklucHV0QXJyb3dzIiwidG9wQXJyb3dDbGljayIsImJvdHRvbUFycm93Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FNUztBQUFBOztBQUFBLE1BTE5DLElBS00sUUFMTkEsSUFLTTtBQUFBLE1BSk5DLFFBSU0sUUFKTkEsUUFJTTtBQUFBLE1BSGxCQyxvQkFHa0IsUUFIbEJBLG9CQUdrQjtBQUFBLE1BRk5DLHdCQUVNLFFBRk5BLHdCQUVNO0FB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RCxPQUFoQixDQUF5QixDQUF6QixDQUExQyxHQUF5RXpDLElBQUksQ0FBQzBDO0FBRGpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcENEO0FBQUEsS0FBeUMxQyxJQUFJLENBQUMyQyxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE0Q0EsQ0F4SEQ7O0dBQU01QyxROztLQUFBQSxROztBQTBITixJQUFNNkMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBdUM7QUFBQSxNQUFyQ0MsYUFBcUMsU0FBckNBLGFBQXFDO0FBQUEsTUFBdEJDLGdCQUFzQixTQUF0QkEsZ0JBQXNCO0FBRTFELHNCQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUEsMkJBQ0Q7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNFO0FBQVEsZUFBTyxFQUFFRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFRLGVBQU8sRUFBRUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlFLENBZEg7O01BQU1GLFc7QUFnQlM3Qyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LjNhMjkzZDliZmM1NGM4NGRhMmI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgZ2V0VXBkYXRlZEl0ZW1zIH0gZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtDcm9zcywgTG9hZGluZ30gZnJvbSBcIi4uLy4uL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENhcnRJdGVtID0gKCB7XG5cdCAgICAgICAgICAgICAgICAgICBpdGVtLFxuXHQgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMsXG5cdFx0XHRcdFx0ICAgdXBkYXRlQ2FydFByb2Nlc3NpbmcsXG5cdCAgICAgICAgICAgICAgICAgICBoYW5kbGVSZW1vdmVQcm9kdWN0Q2xpY2ssXG5cdCAgICAgICAgICAgICAgICAgICB1cGRhdGVDYXJ0LFxuICAgICAgICAgICAgICAgICAgIH0gKSA9PiB7XG5cblx0Y29uc3QgW3Byb2R1Y3RDb3VudCwgc2V0UHJvZHVjdENvdW50XSA9IHVzZVN0YXRlKCBpdGVtLnF0eSApO1xuXHRjb25zdCByZWZlcmVuY2UgPSB1c2VSZWYoMCk7XG5cblx0Ly8gY29uc29sZS5sb2cocmVmZXJlbmNlLmN1cnJlbnQudmFsdWUpO1xuXHRjb25zb2xlLmxvZyhwcm9kdWN0cyk7XG5cdGNvbnNvbGUubG9nKGl0ZW0pO1xuXHRcblx0Ly8gZnVuY3Rpb24gaW5jclZhbCgpe1xuXHRcdFxuXHQvLyBcdHNldFByb2R1Y3RDb3VudFxuXHQvLyBcdGNvbnNvbGUubG9nKGl0ZW0ucXR5KTtcblx0Ly8gfVxuXHRcblxuXHQvKlxuXHQgKiBXaGVuIHVzZXIgY2hhbmdlcyB0aGUgcXR5IGZyb20gcHJvZHVjdCBpbnB1dCB1cGRhdGUgdGhlIGNhcnQgaW4gbG9jYWxTdG9yYWdlXG5cdCAqIEFsc28gdXBkYXRlIHRoZSBjYXJ0IGluIGdsb2JhbCBjb250ZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBldmVudFxuXHQgKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0Y29uc3QgaGFuZGxlUXR5Q2hhbmdlID0gKCBldmVudCwgY2FydEtleSApID0+IHtcblxuXHRcdGlmICggcHJvY2Vzcy5icm93c2VyICkge1xuXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0Ly8gSWYgdGhlIHByZXZpb3VzIHVwZGF0ZSBjYXJ0IG11dGF0aW9uIHJlcXVlc3QgaXMgc3RpbGwgcHJvY2Vzc2luZywgdGhlbiByZXR1cm4uXG5cdFx0XHRpZiAoIHVwZGF0ZUNhcnRQcm9jZXNzaW5nICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZSB1c2VyIHRyaWVzIHRvIGRlbGV0ZSB0aGUgY291bnQgb2YgcHJvZHVjdCwgc2V0IHRoYXQgdG8gMSBieSBkZWZhdWx0ICggVGhpcyB3aWxsIG5vdCBhbGxvdyBoaW0gdG8gcmVkdWNlIGl0IGxlc3MgdGhhbiB6ZXJvIClcblx0XHRcdGNvbnN0IG5ld1F0eSA9ICggZXZlbnQudGFyZ2V0LnZhbHVlICkgPyBwYXJzZUludCggZXZlbnQudGFyZ2V0LnZhbHVlICkgOiAxO1xuXG5cdFx0XHQvLyBTZXQgdGhlIG5ldyBxdHkgaW4gc3RhdGUuXG5cdFx0XHRzZXRQcm9kdWN0Q291bnQoIG5ld1F0eSApO1xuXG5cdFx0XHRpZiAoIHByb2R1Y3RzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRjb25zdCB1cGRhdGVkSXRlbXMgPSBnZXRVcGRhdGVkSXRlbXMoIHByb2R1Y3RzLCBuZXdRdHksIGNhcnRLZXkgKTtcblxuXHRcdFx0XHR1cGRhdGVDYXJ0KCB7XG5cdFx0XHRcdFx0dmFyaWFibGVzOiB7XG5cdFx0XHRcdFx0XHRpbnB1dDoge1xuXHRcdFx0XHRcdFx0XHRjbGllbnRNdXRhdGlvbklkOiB2NCgpLFxuXHRcdFx0XHRcdFx0XHRpdGVtczogdXBkYXRlZEl0ZW1zXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZXMgPSBlID0+IHtcblx0XHRzZXRQcm9kdWN0Q291bnQoZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC8sIFwiXCIpKTtcblx0ICB9O1xuXHRcblx0ICBjb25zdCB0b3BBcnJvd0NsaWNrZWQgPSAoZSkgPT4ge1xuXHRcdHNldFByb2R1Y3RDb3VudChwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSk7XG5cdCAgfVxuXHRcblx0ICBjb25zdCBib3R0b21BcnJvd0NsaWNrZWQgPSAoZSkgPT4ge1xuXHRcdHNldFByb2R1Y3RDb3VudChwcmV2U3RhdGUgPT4gcHJldlN0YXRlIC0gMSk7XG5cdCAgfVxuXHRcblx0cmV0dXJuIChcblx0XHQ8dHIgY2xhc3NOYW1lPVwid29vLW5leHQtY2FydC1pdGVtXCIga2V5PXsgaXRlbS5wcm9kdWN0SWQgfT5cblx0XHRcdDx0aCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWVsZW1lbnQgd29vLW5leHQtY2FydC1lbC1jbG9zZVwiPlxuXHRcdFx0XHR7LyogUmVtb3ZlIGl0ZW0gKi99XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtY2xvc2UtaWNvbiBjdXJzb3ItcG9pbnRlclwiXG5cdFx0XHRcdCAgICAgIG9uQ2xpY2s9eyAoIGV2ZW50ICkgPT4gaGFuZGxlUmVtb3ZlUHJvZHVjdENsaWNrKCBldmVudCwgaXRlbS5jYXJ0S2V5LCBwcm9kdWN0cyApIH0+XG5cdFx0XHRcdFx0PENyb3NzLz5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC90aD5cblx0XHRcdDx0ZCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWVsZW1lbnRcIj5cblx0XHRcdFx0PGltZyB3aWR0aD1cIjY0XCIgc3JjPXsgaXRlbS5pbWFnZS5zb3VyY2VVcmwgfSBzcmNTZXQ9eyBpdGVtLmltYWdlLnNyY1NldCB9IGFsdD17IGl0ZW0uaW1hZ2UudGl0bGUgfS8+XG5cdFx0XHQ8L3RkPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj5cblx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtZWxlbWVudCBmb250LWhrXCI+eyBpdGVtLm5hbWUgfTwvdGQ+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWVsZW1lbnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPnsgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIGl0ZW0ucHJpY2UgKSA/IGl0ZW0ucHJpY2UudG9GaXhlZCggMiApIDogaXRlbS5wcmljZSB9PC90ZD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHRcblxuXHRcdFx0ey8qIFF0eSBJbnB1dCAqLyB9XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPVwid29vLW5leHQtY2FydC1lbGVtZW50IHdvby1uZXh0LWNhcnQtcXR5XCI+XG5cdFx0XHRcdHsvKiBAVE9ETyBOZWVkIHRvIHVwZGF0ZSB0aGlzIHdpdGggZ3JhcGhRTCBxdWVyeSAqLyB9XG5cdFx0XHRcdHsvKiA8YnV0dG9uIG9uY2xpY2s9e21lbm9zfSBjbGFzcz1cImFcIj4tPC9idXR0b24+ICovfVxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHQvLyByZWY9e3JlZmVyZW5jZX1cblx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHRtaW49XCIxXCJcblx0XHRcdFx0XHRkYXRhLWNhcnQta2V5PXsgaXRlbS5jYXJ0S2V5IH1cblx0XHRcdFx0XHRjbGFzc05hbWU9eyBgd29vLW5leHQtY2FydC1xdHktaW5wdXQgZm9ybS1jb250cm9sICR7IHVwZGF0ZUNhcnRQcm9jZXNzaW5nID8gJ29wYWNpdHktMjUgY3Vyc29yLW5vdC1hbGxvd2VkJyA6ICcnIH0gYCB9XG5cdFx0XHRcdFx0dmFsdWU9e3Byb2R1Y3RDb3VudH1cblx0XHRcdFx0XHQvLyBvbkNoYW5nZT17ICggZXZlbnQgKSA9PiBoYW5kbGVRdHlDaGFuZ2UoIGV2ZW50LCBpdGVtLmNhcnRLZXkgKSB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFycm93c1wiPlxuXHRcdFx0XHRcdDxJbnB1dEFycm93cyB0b3BBcnJvd0NsaWNrPXt0b3BBcnJvd0NsaWNrZWR9IGJvdHRvbUFycm93Q2xpY2s9e2JvdHRvbUFycm93Q2xpY2tlZH0gLz5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHR7LyogPGJ1dHRvbiBvbkNsaWNrPXtpbmNyVmFsfSAgY2xhc3M9XCJhXCI+KzwvYnV0dG9uPiAqL31cblx0XHRcdDwvdGQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLW1haW4gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHktM1wiPlxuXHRcdFx0XHQ8dGQgY2xhc3NOYW1lPVwid29vLW5leHQtY2FydC1lbGVtZW50XCI+XG5cdFx0XHRcdFx0eyAoICdzdHJpbmcnICE9PSB0eXBlb2YgaXRlbS50b3RhbFByaWNlICkgPyBpdGVtLnRvdGFsUHJpY2UudG9GaXhlZCggMiApIDogaXRlbS50b3RhbFByaWNlIH1cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvdHI+XG5cdClcbn07XG5cbmNvbnN0IElucHV0QXJyb3dzID0gKHt0b3BBcnJvd0NsaWNrLCBib3R0b21BcnJvd0NsaWNrfSkgPT4ge1xuXG5cdHJldHVybiAoXG5cdCAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd3MtY29tcG9uZW50XCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhcnJvd3NcIj5cblx0XHQgIDxidXR0b24gb25DbGljaz17dG9wQXJyb3dDbGlja30+XG5cdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJhcnJvdy10b3BcIiAvPisgKi99XG5cdFx0ICA8L2J1dHRvbj5cblx0XHQgIDxidXR0b24gb25DbGljaz17Ym90dG9tQXJyb3dDbGlja30+XG5cdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJhcnJvdy1ib3R0b21cIiAvPi0gKi99XG5cdFx0ICA8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0ICA8L2Rpdj5cblx0KTtcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydEl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9