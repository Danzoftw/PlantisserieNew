webpackHotUpdate_N_E("pages/cart",{

/***/ "./src/components/cart/cart-page/CartItemsContainer.js":
/*!*************************************************************!*\
  !*** ./src/components/cart/cart-page/CartItemsContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_coolv_OneDrive_Desktop_woo_next_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/AppContext */ "./src/components/context/AppContext.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../functions */ "./src/functions.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartItem */ "./src/components/cart/cart-page/CartItem.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _mutations_update_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mutations/update-cart */ "./src/mutations/update-cart.js");
/* harmony import */ var _queries_get_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../queries/get-cart */ "./src/queries/get-cart.js");
/* harmony import */ var _mutations_clear_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mutations/clear-cart */ "./src/mutations/clear-cart.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);



var _jsxFileName = "C:\\Users\\coolv\\OneDrive\\Desktop\\woo-next-master\\src\\components\\cart\\cart-page\\CartItemsContainer.js",
    _this = undefined,
    _s = $RefreshSig$();













var CartItemsContainer = function CartItemsContainer() {
  _s();

  // @TODO wil use it in future variations of the project.
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__["AppContext"]),
      cart = _useContext[0],
      setCart = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      requestError = _useState[0],
      setRequestError = _useState[1]; // Get Cart Data.


  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(_queries_get_cart__WEBPACK_IMPORTED_MODULE_10__["default"], {
    notifyOnNetworkStatusChange: true,
    onCompleted: function onCompleted() {
      // Update cart in the localStorage.
      var updatedCart = Object(_functions__WEBPACK_IMPORTED_MODULE_5__["getFormattedCart"])(data);
      localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart)); // Update cart data in React Context.

      setCart(updatedCart);
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      refetch = _useQuery.refetch; // Update Cart Mutation.


  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(_mutations_update_cart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onCompleted: function onCompleted() {
      refetch();
    },
    onError: function onError(error) {
      if (error) {
        var _error$graphQLErrors, _error$graphQLErrors$;

        var errorMessage = error !== null && error !== void 0 && (_error$graphQLErrors = error.graphQLErrors) !== null && _error$graphQLErrors !== void 0 && (_error$graphQLErrors$ = _error$graphQLErrors[0]) !== null && _error$graphQLErrors$ !== void 0 && _error$graphQLErrors$.message ? error.graphQLErrors[0].message : '';
        setRequestError(errorMessage);
      }
    }
  }),
      _useMutation2 = Object(C_Users_coolv_OneDrive_Desktop_woo_next_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      updateCart = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      updateCartResponse = _useMutation2$.data,
      updateCartProcessing = _useMutation2$.loading,
      updateCartError = _useMutation2$.error; // Update Cart Mutation.


  var _useMutation3 = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(_mutations_clear_cart__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onCompleted: function onCompleted() {
      refetch();
    },
    onError: function onError(error) {
      if (error) {
        var _error$graphQLErrors2, _error$graphQLErrors$2;

        var errorMessage = !Object(lodash__WEBPACK_IMPORTED_MODULE_12__["isEmpty"])(error === null || error === void 0 ? void 0 : (_error$graphQLErrors2 = error.graphQLErrors) === null || _error$graphQLErrors2 === void 0 ? void 0 : _error$graphQLErrors2[0]) ? (_error$graphQLErrors$2 = error.graphQLErrors[0]) === null || _error$graphQLErrors$2 === void 0 ? void 0 : _error$graphQLErrors$2.message : '';
        setRequestError(errorMessage);
      }
    }
  }),
      _useMutation4 = Object(C_Users_coolv_OneDrive_Desktop_woo_next_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation3, 2),
      clearCart = _useMutation4[0],
      _useMutation4$ = _useMutation4[1],
      clearCartRes = _useMutation4$.data,
      clearCartProcessing = _useMutation4$.loading,
      clearCartError = _useMutation4$.error;
  /*
   * Handle remove product click.
   *
   * @param {Object} event event
   * @param {Integer} Product Id.
   *
   * @return {void}
   */


  var handleRemoveProductClick = function handleRemoveProductClick(event, cartKey, products) {
    event.stopPropagation();

    if (products.length) {
      // By passing the newQty to 0 in updateCart Mutation, it will remove the item.
      var newQty = 0;
      var updatedItems = Object(_functions__WEBPACK_IMPORTED_MODULE_5__["getUpdatedItems"])(products, newQty, cartKey);
      updateCart({
        variables: {
          input: {
            clientMutationId: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])(),
            items: updatedItems
          }
        }
      });
    }
  }; // Clear the entire cart.


  var handleClearCart = function handleClearCart(event) {
    event.stopPropagation();

    if (clearCartProcessing) {
      return;
    }

    clearCart({
      variables: {
        input: {
          clientMutationId: Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])(),
          all: true
        }
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "cart product-cart-container container mx-auto my-32 px-4 xl:px-0",
    children: cart ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "pt-5 woo-next-cart-wrapper container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "cart-header grid grid-cols-2 gap-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-2xl mb-5 uppercase font-hk",
          children: "Cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "clear-cart text-right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "theme bg-color-1 px-4 py-1 bg-gray-500 text-white rounded-sm w-auto",
            onClick: function onClick(event) {
              return handleClearCart(event);
            },
            disabled: clearCartProcessing,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "woo-next-cart font-hk font-weight-600",
              children: "Clear Cart"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
              className: "fa fa-arrow-alt-right"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 8
          }, _this), clearCartProcessing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Clearing..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 32
          }, _this) : '', updateCartProcessing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Updating..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 33
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-4 mb-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "cart-products table-auto col-span-3 mb-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            className: "text-left",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "woo-next-cart-head-container",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "woo-next-cart-heading-el",
                scope: "col"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 10
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "woo-next-cart-heading-el",
                scope: "col"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 10
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "woo-next-cart-heading-el font-hk",
                scope: "col",
                children: "Product"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 10
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "woo-next-cart-heading-el font-hk",
                scope: "col",
                children: "Price"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 10
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "woo-next-cart-heading-el font-hk",
                scope: "col",
                children: "Quantity"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 10
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                className: "woo-next-cart-heading-el font-hk",
                scope: "col",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 10
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: cart.products.length && cart.products.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CartItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                item: item,
                updateCartProcessing: updateCartProcessing,
                products: cart.products,
                handleRemoveProductClick: handleRemoveProductClick,
                updateCart: updateCart
              }, item.productId, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 11
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row woo-next-cart-total-container justify-content-center checkout-border",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              className: "table mb-5",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  className: "table-light flex flex-col",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: "woo-next-cart-element-total text-2xl font-hk",
                    children: "Subtotal"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 12
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: "woo-next-cart-element-amt text-2xl font-hk",
                    children: 'string' !== typeof cart.totalProductsPrice ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 12
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 11
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/checkout",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "theme bg-color-2 text-white px-5 py-3 rounded-sm w-auto xl:w-full",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "woo-next-cart-checkout-txt font-hk font-weight-600",
                  children: "Proceed to Checkout"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 11
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fas fa-long-arrow-alt-right"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 11
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 9
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 6
      }, _this), requestError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row woo-next-cart-total-container mt-5",
        children: [" ", requestError, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 23
      }, _this) : '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mx-auto my-32 px-4 xl:px-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-2xl mb-5",
        children: "No items in the cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "bg-purple-600 text-white px-5 py-3 rounded-sm",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "woo-next-cart-checkout-txt",
            children: "Add New Products"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 8
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "fas fa-long-arrow-alt-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 8
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 3
  }, _this);
};

_s(CartItemsContainer, "sElvN/Auab7qMrW6kpFlploOoNc=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__["useMutation"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__["useMutation"]];
});

_c = CartItemsContainer;
/* harmony default export */ __webpack_exports__["default"] = (CartItemsContainer);

var _c;

$RefreshReg$(_c, "CartItemsContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LXBhZ2UvQ2FydEl0ZW1zQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIkNhcnRJdGVtc0NvbnRhaW5lciIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY2FydCIsInNldENhcnQiLCJ1c2VTdGF0ZSIsInJlcXVlc3RFcnJvciIsInNldFJlcXVlc3RFcnJvciIsInVzZVF1ZXJ5IiwiR0VUX0NBUlQiLCJub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJvbkNvbXBsZXRlZCIsInVwZGF0ZWRDYXJ0IiwiZ2V0Rm9ybWF0dGVkQ2FydCIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJ1c2VNdXRhdGlvbiIsIlVQREFURV9DQVJUIiwib25FcnJvciIsImVycm9yTWVzc2FnZSIsImdyYXBoUUxFcnJvcnMiLCJtZXNzYWdlIiwidXBkYXRlQ2FydCIsInVwZGF0ZUNhcnRSZXNwb25zZSIsInVwZGF0ZUNhcnRQcm9jZXNzaW5nIiwidXBkYXRlQ2FydEVycm9yIiwiQ0xFQVJfQ0FSVF9NVVRBVElPTiIsImlzRW1wdHkiLCJjbGVhckNhcnQiLCJjbGVhckNhcnRSZXMiLCJjbGVhckNhcnRQcm9jZXNzaW5nIiwiY2xlYXJDYXJ0RXJyb3IiLCJoYW5kbGVSZW1vdmVQcm9kdWN0Q2xpY2siLCJldmVudCIsImNhcnRLZXkiLCJwcm9kdWN0cyIsInN0b3BQcm9wYWdhdGlvbiIsImxlbmd0aCIsIm5ld1F0eSIsInVwZGF0ZWRJdGVtcyIsImdldFVwZGF0ZWRJdGVtcyIsInZhcmlhYmxlcyIsImlucHV0IiwiY2xpZW50TXV0YXRpb25JZCIsInY0IiwiaXRlbXMiLCJoYW5kbGVDbGVhckNhcnQiLCJhbGwiLCJtYXAiLCJpdGVtIiwicHJvZHVjdElkIiwidG90YWxQcm9kdWN0c1ByaWNlIiwidG9GaXhlZCJd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QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXVGQSxDQXJMRDs7R0FBTU4sa0I7VUFRcUNRLHVELEVBY2dFYywwRCxFQWFUQSwwRDs7O0tBbkM1RnRCLGtCO0FBdUxTQSxpRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LmU3YTYwZjNhNWVmODI4ZDJmZGEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xuaW1wb3J0IHsgZ2V0Rm9ybWF0dGVkQ2FydCwgZ2V0VXBkYXRlZEl0ZW1zIH0gZnJvbSAnLi4vLi4vLi4vZnVuY3Rpb25zJztcbmltcG9ydCBDYXJ0SXRlbSBmcm9tIFwiLi9DYXJ0SXRlbVwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBVUERBVEVfQ0FSVCBmcm9tIFwiLi4vLi4vLi4vbXV0YXRpb25zL3VwZGF0ZS1jYXJ0XCI7XG5pbXBvcnQgR0VUX0NBUlQgZnJvbSBcIi4uLy4uLy4uL3F1ZXJpZXMvZ2V0LWNhcnRcIjtcbmltcG9ydCBDTEVBUl9DQVJUX01VVEFUSU9OIGZyb20gXCIuLi8uLi8uLi9tdXRhdGlvbnMvY2xlYXItY2FydFwiO1xuaW1wb3J0IHtpc0VtcHR5fSBmcm9tICdsb2Rhc2gnXG5cblxuY29uc3QgQ2FydEl0ZW1zQ29udGFpbmVyID0gKCkgPT4ge1xuXG5cblx0Ly8gQFRPRE8gd2lsIHVzZSBpdCBpbiBmdXR1cmUgdmFyaWF0aW9ucyBvZiB0aGUgcHJvamVjdC5cblx0Y29uc3QgWyBjYXJ0LCBzZXRDYXJ0IF0gPSB1c2VDb250ZXh0KCBBcHBDb250ZXh0ICk7XG5cdGNvbnN0IFtyZXF1ZXN0RXJyb3IsIHNldFJlcXVlc3RFcnJvcl0gPSB1c2VTdGF0ZSggbnVsbCApO1xuXG5cdC8vIEdldCBDYXJ0IERhdGEuXG5cdGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KCBHRVRfQ0FSVCwge1xuXHRcdG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZTogdHJ1ZSxcblx0XHRvbkNvbXBsZXRlZDogKCkgPT4ge1xuXG5cdFx0XHQvLyBVcGRhdGUgY2FydCBpbiB0aGUgbG9jYWxTdG9yYWdlLlxuXHRcdFx0Y29uc3QgdXBkYXRlZENhcnQgPSBnZXRGb3JtYXR0ZWRDYXJ0KCBkYXRhICk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggJ3dvby1uZXh0LWNhcnQnLCBKU09OLnN0cmluZ2lmeSggdXBkYXRlZENhcnQgKSApO1xuXG5cdFx0XHQvLyBVcGRhdGUgY2FydCBkYXRhIGluIFJlYWN0IENvbnRleHQuXG5cdFx0XHRzZXRDYXJ0KCB1cGRhdGVkQ2FydCApO1xuXHRcdH1cblx0fSApO1xuXG5cdC8vIFVwZGF0ZSBDYXJ0IE11dGF0aW9uLlxuXHRjb25zdCBbdXBkYXRlQ2FydCwgeyBkYXRhOiB1cGRhdGVDYXJ0UmVzcG9uc2UsIGxvYWRpbmc6IHVwZGF0ZUNhcnRQcm9jZXNzaW5nLCBlcnJvcjogdXBkYXRlQ2FydEVycm9yIH1dID0gdXNlTXV0YXRpb24oIFVQREFURV9DQVJULCB7XG5cdFx0b25Db21wbGV0ZWQ6ICgpID0+IHtcblx0XHRcdHJlZmV0Y2goKTtcblx0XHR9LFxuXHRcdG9uRXJyb3I6ICggZXJyb3IgKSA9PiB7XG5cdFx0XHRpZiAoIGVycm9yICkge1xuXHRcdFx0XHRjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvcj8uZ3JhcGhRTEVycm9ycz8uWyAwIF0/Lm1lc3NhZ2UgPyBlcnJvci5ncmFwaFFMRXJyb3JzWyAwIF0ubWVzc2FnZSA6ICcnO1xuXHRcdFx0XHRzZXRSZXF1ZXN0RXJyb3IoIGVycm9yTWVzc2FnZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSApO1xuXG5cdC8vIFVwZGF0ZSBDYXJ0IE11dGF0aW9uLlxuXHRjb25zdCBbY2xlYXJDYXJ0LCB7IGRhdGE6IGNsZWFyQ2FydFJlcywgbG9hZGluZzogY2xlYXJDYXJ0UHJvY2Vzc2luZywgZXJyb3I6IGNsZWFyQ2FydEVycm9yIH1dID0gdXNlTXV0YXRpb24oIENMRUFSX0NBUlRfTVVUQVRJT04sIHtcblx0XHRvbkNvbXBsZXRlZDogKCkgPT4ge1xuXHRcdFx0cmVmZXRjaCgpO1xuXHRcdH0sXG5cdFx0b25FcnJvcjogKCBlcnJvciApID0+IHtcblx0XHRcdGlmICggZXJyb3IgKSB7XG5cdFx0XHRcdGNvbnN0IGVycm9yTWVzc2FnZSA9ICEgaXNFbXB0eShlcnJvcj8uZ3JhcGhRTEVycm9ycz8uWyAwIF0pID8gZXJyb3IuZ3JhcGhRTEVycm9yc1sgMCBdPy5tZXNzYWdlIDogJyc7XG5cdFx0XHRcdHNldFJlcXVlc3RFcnJvciggZXJyb3JNZXNzYWdlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG5cblx0Lypcblx0ICogSGFuZGxlIHJlbW92ZSBwcm9kdWN0IGNsaWNrLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgZXZlbnRcblx0ICogQHBhcmFtIHtJbnRlZ2VyfSBQcm9kdWN0IElkLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0Y29uc3QgaGFuZGxlUmVtb3ZlUHJvZHVjdENsaWNrID0gKCBldmVudCwgY2FydEtleSwgcHJvZHVjdHMgKSA9PiB7XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAoIHByb2R1Y3RzLmxlbmd0aCApIHtcblxuXHRcdFx0Ly8gQnkgcGFzc2luZyB0aGUgbmV3UXR5IHRvIDAgaW4gdXBkYXRlQ2FydCBNdXRhdGlvbiwgaXQgd2lsbCByZW1vdmUgdGhlIGl0ZW0uXG5cdFx0XHRjb25zdCBuZXdRdHkgPSAwO1xuXHRcdFx0Y29uc3QgdXBkYXRlZEl0ZW1zID0gZ2V0VXBkYXRlZEl0ZW1zKCBwcm9kdWN0cywgbmV3UXR5LCBjYXJ0S2V5ICk7XG5cblx0XHRcdHVwZGF0ZUNhcnQoIHtcblx0XHRcdFx0dmFyaWFibGVzOiB7XG5cdFx0XHRcdFx0aW5wdXQ6IHtcblx0XHRcdFx0XHRcdGNsaWVudE11dGF0aW9uSWQ6IHY0KCksXG5cdFx0XHRcdFx0XHRpdGVtczogdXBkYXRlZEl0ZW1zXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0fSApO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDbGVhciB0aGUgZW50aXJlIGNhcnQuXG5cdGNvbnN0IGhhbmRsZUNsZWFyQ2FydCA9ICggZXZlbnQgKSA9PiB7XG5cblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmICggY2xlYXJDYXJ0UHJvY2Vzc2luZyApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjbGVhckNhcnQoIHtcblx0XHRcdHZhcmlhYmxlczoge1xuXHRcdFx0XHRpbnB1dDoge1xuXHRcdFx0XHRcdGNsaWVudE11dGF0aW9uSWQ6IHY0KCksXG5cdFx0XHRcdFx0YWxsOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSApO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcnQgcHJvZHVjdC1jYXJ0LWNvbnRhaW5lciBjb250YWluZXIgbXgtYXV0byBteS0zMiBweC00IHhsOnB4LTBcIj5cblx0XHRcdHsgY2FydCA/IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdC01IHdvby1uZXh0LWNhcnQtd3JhcHBlciBjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaGVhZGVyIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTRcIj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi01IHVwcGVyY2FzZSBmb250LWhrXCI+Q2FydDwvaDE+XG5cdFx0XHRcdFx0XHR7LypDbGVhciBlbnRpcmUgY2FydCovfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjbGVhci1jYXJ0IHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ0aGVtZSBiZy1jb2xvci0xIHB4LTQgcHktMSBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtc20gdy1hdXRvXCIgb25DbGljaz17ICggZXZlbnQgKSA9PiBoYW5kbGVDbGVhckNhcnQoIGV2ZW50ICkgfSBkaXNhYmxlZD17IGNsZWFyQ2FydFByb2Nlc3NpbmcgfT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0IGZvbnQtaGsgZm9udC13ZWlnaHQtNjAwXCI+Q2xlYXIgQ2FydDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1hbHQtcmlnaHRcIi8+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHR7IGNsZWFyQ2FydFByb2Nlc3NpbmcgPyA8cD5DbGVhcmluZy4uLjwvcD4gOiAnJyB9XG5cdFx0XHRcdFx0XHRcdHsgdXBkYXRlQ2FydFByb2Nlc3NpbmcgPyA8cD5VcGRhdGluZy4uLjwvcD4gOiBudWxsIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSB4bDpncmlkLWNvbHMtNCBnYXAtMCB4bDpnYXAtNCBtYi01XCI+XG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwiY2FydC1wcm9kdWN0cyB0YWJsZS1hdXRvIGNvbC1zcGFuLTMgbWItNVwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dHIgY2xhc3NOYW1lPVwid29vLW5leHQtY2FydC1oZWFkLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtaGVhZGluZy1lbFwiIHNjb3BlPVwiY29sXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtaGVhZGluZy1lbFwiIHNjb3BlPVwiY29sXCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtaGVhZGluZy1lbCBmb250LWhrXCIgc2NvcGU9XCJjb2xcIj5Qcm9kdWN0PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWhlYWRpbmctZWwgZm9udC1oa1wiIHNjb3BlPVwiY29sXCI+UHJpY2U8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtaGVhZGluZy1lbCBmb250LWhrXCIgc2NvcGU9XCJjb2xcIj5RdWFudGl0eTwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwid29vLW5leHQtY2FydC1oZWFkaW5nLWVsIGZvbnQtaGtcIiBzY29wZT1cImNvbFwiPlRvdGFsPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdHsgY2FydC5wcm9kdWN0cy5sZW5ndGggJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FydC5wcm9kdWN0cy5tYXAoIGl0ZW0gPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2FydEl0ZW1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9eyBpdGVtLnByb2R1Y3RJZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbT17IGl0ZW0gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUNhcnRQcm9jZXNzaW5nPXsgdXBkYXRlQ2FydFByb2Nlc3NpbmcgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByb2R1Y3RzPXsgY2FydC5wcm9kdWN0cyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlUmVtb3ZlUHJvZHVjdENsaWNrPXsgaGFuZGxlUmVtb3ZlUHJvZHVjdENsaWNrIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVDYXJ0PXsgdXBkYXRlQ2FydCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIClcblx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXG5cdFx0XHRcdFx0XHR7LypDYXJ0IFRvdGFsKi8gfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgd29vLW5leHQtY2FydC10b3RhbC1jb250YWluZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBjaGVja291dC1ib3JkZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj5cblx0XHRcdFx0XHRcdFx0XHR7LyogPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+Q2FydCBUb3RhbDwvaDI+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSBtYi01XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJ0YWJsZS1saWdodCBmbGV4IGZsZXgtY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtZWxlbWVudC10b3RhbCB0ZXh0LTJ4bCBmb250LWhrXCI+U3VidG90YWw8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWVsZW1lbnQtYW10IHRleHQtMnhsIGZvbnQtaGtcIj57ICggJ3N0cmluZycgIT09IHR5cGVvZiBjYXJ0LnRvdGFsUHJvZHVjdHNQcmljZSApID8gY2FydC50b3RhbFByb2R1Y3RzUHJpY2UudG9GaXhlZCgyKSA6IGNhcnQudG90YWxQcm9kdWN0c1ByaWNlIH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPHRyIGNsYXNzTmFtZT1cInRhYmxlLWxpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cIndvby1uZXh0LWNhcnQtZWxlbWVudC10b3RhbFwiPlRvdGFsPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPVwid29vLW5leHQtY2FydC1lbGVtZW50LWFtdFwiPnsgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIGNhcnQudG90YWxQcm9kdWN0c1ByaWNlICkgPyBjYXJ0LnRvdGFsUHJvZHVjdHNQcmljZS50b0ZpeGVkKDIpIDogY2FydC50b3RhbFByb2R1Y3RzUHJpY2UgfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidGhlbWUgYmctY29sb3ItMiB0ZXh0LXdoaXRlIHB4LTUgcHktMyByb3VuZGVkLXNtIHctYXV0byB4bDp3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwid29vLW5leHQtY2FydC1jaGVja291dC10eHQgZm9udC1oayBmb250LXdlaWdodC02MDBcIj5Qcm9jZWVkIHRvIENoZWNrb3V0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtcmlnaHRcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogRGlzcGxheSBFcnJvcnMgaWYgYW55ICovfVxuXHRcdFx0XHRcdHsgcmVxdWVzdEVycm9yID8gPGRpdiBjbGFzc05hbWU9XCJyb3cgd29vLW5leHQtY2FydC10b3RhbC1jb250YWluZXIgbXQtNVwiPiB7IHJlcXVlc3RFcnJvciB9IDwvZGl2PiA6ICcnIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG15LTMyIHB4LTQgeGw6cHgtMFwiPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi01XCI+Tm8gaXRlbXMgaW4gdGhlIGNhcnQ8L2gyPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBweC01IHB5LTMgcm91bmRlZC1zbVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3b28tbmV4dC1jYXJ0LWNoZWNrb3V0LXR4dFwiPkFkZCBOZXcgUHJvZHVjdHM8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1sb25nLWFycm93LWFsdC1yaWdodFwiLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpIH1cblx0XHQ8L2Rpdj5cblxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydEl0ZW1zQ29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==