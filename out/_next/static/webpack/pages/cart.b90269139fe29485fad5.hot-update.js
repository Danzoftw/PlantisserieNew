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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: "woo-next-cart-element",
      children: item.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
      className: "woo-next-cart-element",
      children: 'string' !== typeof item.price ? item.price.toFixed(2) : item.price
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
        lineNumber: 102,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "arrows",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputArrows, {
          topArrowClick: topArrowClicked,
          bottomArrowClick: bottomArrowClicked
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "total-main d-flex justify-content-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
        className: "woo-next-cart-element",
        children: 'string' !== typeof item.totalPrice ? item.totalPrice.toFixed(2) : item.totalPrice
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
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
        lineNumber: 130,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: bottomArrowClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UvQ2FydEl0ZW0uanMiXSwibmFtZXMiOlsiQ2FydEl0ZW0iLCJpdGVtIiwicHJvZHVjdHMiLCJ1cGRhdGVDYXJ0UHJvY2Vzc2luZyIsImhhbmRsZVJlbW92ZVByb2R1Y3RDbGljayIsInVwZGF0ZUNhcnQiLCJ1c2VTdGF0ZSIsInF0eSIsInByb2R1Y3RDb3VudCIsInNldFByb2R1Y3RDb3VudCIsInJlZmVyZW5jZSIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVRdHlDaGFuZ2UiLCJldmVudCIsImNhcnRLZXkiLCJzdG9wUHJvcGFnYXRpb24iLCJuZXdRdHkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhcnNlSW50IiwibGVuZ3RoIiwidXBkYXRlZEl0ZW1zIiwiZ2V0VXBkYXRlZEl0ZW1zIiwidmFyaWFibGVzIiwiaW5wdXQiLCJjbGllbnRNdXRhdGlvbklkIiwidjQiLCJpdGVtcyIsImhhbmRsZUNoYW5nZXMiLCJlIiwicmVwbGFjZSIsInRvcEFycm93Q2xpY2tlZCIsInByZXZTdGF0ZSIsImJvdHRvbUFycm93Q2xpY2tlZCIsImltYWdlIiwic291cmNlVXJsIiwic3JjU2V0IiwidGl0bGUiLCJuYW1lIiwicHJpY2UiLCJ0b0ZpeGVkIiwidG90YWxQcmljZSIsInByb2R1Y3RJZCIsIklucHV0QXJyb3dzIiwidG9wQXJyb3dDbGljayIsImJvdHRvbUFycm93Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FNUztBQUFBOztBQUFBLE1BTE5DLElBS00sUUFMTkEsSUFLTTtBQUFBLE1BSk5DLFFBSU0sUUFKTkEsUUFJTTtBQUFBLE1BSGxCQyxvQkFHa0IsUUFIbEJBLG9CQUdrQjtBQUFBLE1BRk5DLHdCQUVNLFFBRk5BLHdCQUVNO0FB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QTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDRDtBQUFBLEtBQXlDMUMsSUFBSSxDQUFDMkMsU0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBd0NBLENBcEhEOztHQUFNNUMsUTs7S0FBQUEsUTs7QUFzSE4sSUFBTTZDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFFBQXVDO0FBQUEsTUFBckNDLGFBQXFDLFNBQXJDQSxhQUFxQztBQUFBLE1BQXRCQyxnQkFBc0IsU0FBdEJBLGdCQUFzQjtBQUUxRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDJCQUNEO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRTtBQUFRLGVBQU8sRUFBRUQ7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBUSxlQUFPLEVBQUVDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRSxDQWRIOztNQUFNRixXO0FBZ0JTN0MsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5iOTAyNjkxMzlmZTI5NDg1ZmFkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IGdldFVwZGF0ZWRJdGVtcyB9IGZyb20gXCIuLi8uLi8uLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7Q3Jvc3MsIExvYWRpbmd9IGZyb20gXCIuLi8uLi9pY29uc1wiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDYXJ0SXRlbSA9ICgge1xuXHQgICAgICAgICAgICAgICAgICAgaXRlbSxcblx0ICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLFxuXHRcdFx0XHRcdCAgIHVwZGF0ZUNhcnRQcm9jZXNzaW5nLFxuXHQgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVtb3ZlUHJvZHVjdENsaWNrLFxuXHQgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2FydCxcbiAgICAgICAgICAgICAgICAgICB9ICkgPT4ge1xuXG5cdGNvbnN0IFtwcm9kdWN0Q291bnQsIHNldFByb2R1Y3RDb3VudF0gPSB1c2VTdGF0ZSggaXRlbS5xdHkgKTtcblx0Y29uc3QgcmVmZXJlbmNlID0gdXNlUmVmKDApO1xuXG5cdC8vIGNvbnNvbGUubG9nKHJlZmVyZW5jZS5jdXJyZW50LnZhbHVlKTtcblx0Y29uc29sZS5sb2cocHJvZHVjdHMpO1xuXHRjb25zb2xlLmxvZyhpdGVtKTtcblx0XG5cdC8vIGZ1bmN0aW9uIGluY3JWYWwoKXtcblx0XHRcblx0Ly8gXHRzZXRQcm9kdWN0Q291bnRcblx0Ly8gXHRjb25zb2xlLmxvZyhpdGVtLnF0eSk7XG5cdC8vIH1cblx0XG5cblx0Lypcblx0ICogV2hlbiB1c2VyIGNoYW5nZXMgdGhlIHF0eSBmcm9tIHByb2R1Y3QgaW5wdXQgdXBkYXRlIHRoZSBjYXJ0IGluIGxvY2FsU3RvcmFnZVxuXHQgKiBBbHNvIHVwZGF0ZSB0aGUgY2FydCBpbiBnbG9iYWwgY29udGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgZXZlbnRcblx0ICpcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdGNvbnN0IGhhbmRsZVF0eUNoYW5nZSA9ICggZXZlbnQsIGNhcnRLZXkgKSA9PiB7XG5cblx0XHRpZiAoIHByb2Nlc3MuYnJvd3NlciApIHtcblxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdC8vIElmIHRoZSBwcmV2aW91cyB1cGRhdGUgY2FydCBtdXRhdGlvbiByZXF1ZXN0IGlzIHN0aWxsIHByb2Nlc3NpbmcsIHRoZW4gcmV0dXJuLlxuXHRcdFx0aWYgKCB1cGRhdGVDYXJ0UHJvY2Vzc2luZyApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGUgdXNlciB0cmllcyB0byBkZWxldGUgdGhlIGNvdW50IG9mIHByb2R1Y3QsIHNldCB0aGF0IHRvIDEgYnkgZGVmYXVsdCAoIFRoaXMgd2lsbCBub3QgYWxsb3cgaGltIHRvIHJlZHVjZSBpdCBsZXNzIHRoYW4gemVybyApXG5cdFx0XHRjb25zdCBuZXdRdHkgPSAoIGV2ZW50LnRhcmdldC52YWx1ZSApID8gcGFyc2VJbnQoIGV2ZW50LnRhcmdldC52YWx1ZSApIDogMTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBuZXcgcXR5IGluIHN0YXRlLlxuXHRcdFx0c2V0UHJvZHVjdENvdW50KCBuZXdRdHkgKTtcblxuXHRcdFx0aWYgKCBwcm9kdWN0cy5sZW5ndGggKSB7XG5cblx0XHRcdFx0Y29uc3QgdXBkYXRlZEl0ZW1zID0gZ2V0VXBkYXRlZEl0ZW1zKCBwcm9kdWN0cywgbmV3UXR5LCBjYXJ0S2V5ICk7XG5cblx0XHRcdFx0dXBkYXRlQ2FydCgge1xuXHRcdFx0XHRcdHZhcmlhYmxlczoge1xuXHRcdFx0XHRcdFx0aW5wdXQ6IHtcblx0XHRcdFx0XHRcdFx0Y2xpZW50TXV0YXRpb25JZDogdjQoKSxcblx0XHRcdFx0XHRcdFx0aXRlbXM6IHVwZGF0ZWRJdGVtc1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDaGFuZ2VzID0gZSA9PiB7XG5cdFx0c2V0UHJvZHVjdENvdW50KGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXEQvLCBcIlwiKSk7XG5cdCAgfTtcblx0XG5cdCAgY29uc3QgdG9wQXJyb3dDbGlja2VkID0gKGUpID0+IHtcblx0XHRzZXRQcm9kdWN0Q291bnQocHJldlN0YXRlID0+IHByZXZTdGF0ZSArIDEpO1xuXHQgIH1cblx0XG5cdCAgY29uc3QgYm90dG9tQXJyb3dDbGlja2VkID0gKGUpID0+IHtcblx0XHRzZXRQcm9kdWN0Q291bnQocHJldlN0YXRlID0+IHByZXZTdGF0ZSAtIDEpO1xuXHQgIH1cblx0XG5cdHJldHVybiAoXG5cdFx0PHRyIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtaXRlbVwiIGtleT17IGl0ZW0ucHJvZHVjdElkIH0+XG5cdFx0XHQ8dGggY2xhc3NOYW1lPVwid29vLW5leHQtY2FydC1lbGVtZW50IHdvby1uZXh0LWNhcnQtZWwtY2xvc2VcIj5cblx0XHRcdFx0ey8qIFJlbW92ZSBpdGVtICovfVxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWNsb3NlLWljb24gY3Vyc29yLXBvaW50ZXJcIlxuXHRcdFx0XHQgICAgICBvbkNsaWNrPXsgKCBldmVudCApID0+IGhhbmRsZVJlbW92ZVByb2R1Y3RDbGljayggZXZlbnQsIGl0ZW0uY2FydEtleSwgcHJvZHVjdHMgKSB9PlxuXHRcdFx0XHRcdDxDcm9zcy8+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvdGg+XG5cdFx0XHQ8dGQgY2xhc3NOYW1lPVwid29vLW5leHQtY2FydC1lbGVtZW50XCI+XG5cdFx0XHRcdDxpbWcgd2lkdGg9XCI2NFwiIHNyYz17IGl0ZW0uaW1hZ2Uuc291cmNlVXJsIH0gc3JjU2V0PXsgaXRlbS5pbWFnZS5zcmNTZXQgfSBhbHQ9eyBpdGVtLmltYWdlLnRpdGxlIH0vPlxuXHRcdFx0PC90ZD5cblx0XHRcdDx0ZCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWVsZW1lbnRcIj57IGl0ZW0ubmFtZSB9PC90ZD5cblx0XHRcdDx0ZCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWVsZW1lbnRcIj57ICggJ3N0cmluZycgIT09IHR5cGVvZiBpdGVtLnByaWNlICkgPyBpdGVtLnByaWNlLnRvRml4ZWQoIDIgKSA6IGl0ZW0ucHJpY2UgfTwvdGQ+XG5cblx0XHRcdHsvKiBRdHkgSW5wdXQgKi8gfVxuXHRcdFx0PHRkIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtZWxlbWVudCB3b28tbmV4dC1jYXJ0LXF0eVwiPlxuXHRcdFx0XHR7LyogQFRPRE8gTmVlZCB0byB1cGRhdGUgdGhpcyB3aXRoIGdyYXBoUUwgcXVlcnkgKi8gfVxuXHRcdFx0XHR7LyogPGJ1dHRvbiBvbmNsaWNrPXttZW5vc30gY2xhc3M9XCJhXCI+LTwvYnV0dG9uPiAqL31cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0Ly8gcmVmPXtyZWZlcmVuY2V9XG5cdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0bWluPVwiMVwiXG5cdFx0XHRcdFx0ZGF0YS1jYXJ0LWtleT17IGl0ZW0uY2FydEtleSB9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgYHdvby1uZXh0LWNhcnQtcXR5LWlucHV0IGZvcm0tY29udHJvbCAkeyB1cGRhdGVDYXJ0UHJvY2Vzc2luZyA/ICdvcGFjaXR5LTI1IGN1cnNvci1ub3QtYWxsb3dlZCcgOiAnJyB9IGAgfVxuXHRcdFx0XHRcdHZhbHVlPXtwcm9kdWN0Q291bnR9XG5cdFx0XHRcdFx0Ly8gb25DaGFuZ2U9eyAoIGV2ZW50ICkgPT4gaGFuZGxlUXR5Q2hhbmdlKCBldmVudCwgaXRlbS5jYXJ0S2V5ICkgfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhcnJvd3NcIj5cblx0XHRcdFx0XHQ8SW5wdXRBcnJvd3MgdG9wQXJyb3dDbGljaz17dG9wQXJyb3dDbGlja2VkfSBib3R0b21BcnJvd0NsaWNrPXtib3R0b21BcnJvd0NsaWNrZWR9IC8+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0ey8qIDxidXR0b24gb25DbGljaz17aW5jclZhbH0gIGNsYXNzPVwiYVwiPis8L2J1dHRvbj4gKi99XG5cdFx0XHQ8L3RkPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0b3RhbC1tYWluIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWVsZW1lbnRcIj5cblx0XHRcdFx0XHR7ICggJ3N0cmluZycgIT09IHR5cGVvZiBpdGVtLnRvdGFsUHJpY2UgKSA/IGl0ZW0udG90YWxQcmljZS50b0ZpeGVkKCAyICkgOiBpdGVtLnRvdGFsUHJpY2UgfVxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC90cj5cblx0KVxufTtcblxuY29uc3QgSW5wdXRBcnJvd3MgPSAoe3RvcEFycm93Q2xpY2ssIGJvdHRvbUFycm93Q2xpY2t9KSA9PiB7XG5cblx0cmV0dXJuIChcblx0ICA8ZGl2IGNsYXNzTmFtZT1cImFycm93cy1jb21wb25lbnRcIj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFycm93c1wiPlxuXHRcdCAgPGJ1dHRvbiBvbkNsaWNrPXt0b3BBcnJvd0NsaWNrfT5cblx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImFycm93LXRvcFwiIC8+KyAqL31cblx0XHQgIDwvYnV0dG9uPlxuXHRcdCAgPGJ1dHRvbiBvbkNsaWNrPXtib3R0b21BcnJvd0NsaWNrfT5cblx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImFycm93LWJvdHRvbVwiIC8+LSAqL31cblx0XHQgIDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQgIDwvZGl2PlxuXHQpO1xuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJ0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=