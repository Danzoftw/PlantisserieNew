_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{LZs4:function(t,e,n){"use strict";var a=n("h4VS"),c=n("VX74");function r(){var t=Object(a.a)(["\nmutation CLEAR_CART_MUTATION( $input: RemoveItemsFromCartInput! ) {\n  removeItemsFromCart(input: $input) {\n    cartItems {\n      quantity\n    }\n  }\n}\n"]);return r=function(){return t},t}var o=Object(c.gql)(r());e.a=o},YQMk:function(t,e,n){"use strict";n.r(e);var a=n("nKUr"),c=n("Zttt"),r=n("ODXe"),o=n("YFqc"),s=n.n(o),i=n("q1tI"),l=n("w4YB"),d=n("nyHz"),u=n("7Cbv"),j=n("g67X"),x=function(t){var e=t.topArrowClick,n=t.bottomArrowClick;return Object(a.jsx)("div",{className:"arrows-component",children:Object(a.jsxs)("div",{className:"arrows",children:[Object(a.jsx)("button",{onClick:e}),Object(a.jsx)("button",{onClick:n})]})})},b=function(t){var e=t.item,n=t.products,c=t.updateCartProcessing,r=t.handleRemoveProductClick,o=(t.updateCart,Object(i.useState)(e.qty)),s=o[0],l=o[1];Object(i.useRef)(0);console.log(n),console.log(e);return Object(a.jsxs)("tr",{className:"woo-next-cart-item",children:[Object(a.jsx)("th",{className:"woo-next-cart-element woo-next-cart-el-close",children:Object(a.jsx)("span",{className:"woo-next-cart-close-icon cursor-pointer",onClick:function(t){return r(t,e.cartKey,n)},children:Object(a.jsx)(j.a,{})})}),Object(a.jsx)("td",{className:"woo-next-cart-element",children:Object(a.jsx)("img",{width:"64",src:e.image.sourceUrl,srcSet:e.image.srcSet,alt:e.image.title})}),Object(a.jsxs)("div",{className:"product-name d-flex justify-content-around",children:[Object(a.jsx)("td",{className:"woo-next-cart-element font-hk",children:e.name}),Object(a.jsx)("td",{className:"woo-next-cart-element d-flex align-items-center",children:"string"!==typeof e.price?e.price.toFixed(2):e.price})]}),Object(a.jsxs)("td",{className:"woo-next-cart-element woo-next-cart-qty",children:[Object(a.jsx)("input",{type:"number",min:"1","data-cart-key":e.cartKey,className:"woo-next-cart-qty-input form-control ".concat(c?"opacity-25 cursor-not-allowed":""," "),value:s}),Object(a.jsx)("span",{className:"arrows d-none",children:Object(a.jsx)(x,{topArrowClick:function(t){l((function(t){return t+1}))},bottomArrowClick:function(t){l((function(t){return t-1}))}})})]}),Object(a.jsx)("div",{className:"total-main d-flex justify-content-center pt-4 mt-1",children:Object(a.jsx)("td",{className:"woo-next-cart-element",children:"string"!==typeof e.totalPrice?e.totalPrice.toFixed(2):e.totalPrice})})]},e.productId)},m=n("VX74"),h=n("h4VS");function p(){var t=Object(h.a)(["\nmutation UPDATE_CART($input: UpdateItemQuantitiesInput!) {\n  updateItemQuantities(input: $input) {\n    items {\n      key\n      product {\n        node {\n          id\n          productId: databaseId\n          name\n          description\n          type\n          onSale\n          slug\n          averageRating\n          reviewCount\n          image {\n            id\n            sourceUrl\n            altText\n          }\n          galleryImages {\n            nodes {\n              id\n              sourceUrl\n              altText\n            }\n          }\n        }\n      }\n      variation {\n        node {\n          id\n          variationId: databaseId\n          name\n          description\n          type\n          onSale\n          price\n          regularPrice\n          salePrice\n          image {\n            id\n            sourceUrl\n            altText\n          }\n        }\n        attributes {\n          id\n          attributeId\n          name\n          value\n        }\n      }\n      quantity\n      total\n      subtotal\n      subtotalTax\n    }\n    removed {\n      key\n      product {\n        node {\n          id\n          productId: databaseId\n        }\n      }\n      variation {\n        node {\n          id\n          variationId: databaseId\n        }\n      }\n    }\n    updated {\n      key\n      product {\n        node {\n          id\n          productId: databaseId\n        }\n      }\n      variation {\n        node {\n          id\n          variationId: databaseId\n        }\n      }\n    }\n  }\n}\n"]);return p=function(){return t},t}var O=Object(m.gql)(p()),g=n("RSG0"),f=n("LZs4"),w=n("LvDl"),N=function(){var t=Object(i.useContext)(l.a),e=t[0],n=t[1],c=Object(i.useState)(null),o=c[0],j=c[1],x=Object(m.useQuery)(g.a,{notifyOnNetworkStatusChange:!0,onCompleted:function(){var t=Object(d.b)(h);localStorage.setItem("woo-next-cart",JSON.stringify(t)),n(t)}}),h=(x.loading,x.error,x.data),p=x.refetch,N=Object(m.useMutation)(O,{onCompleted:function(){p()},onError:function(t){if(t){var e,n,a=null!==t&&void 0!==t&&null!==(e=t.graphQLErrors)&&void 0!==e&&null!==(n=e[0])&&void 0!==n&&n.message?t.graphQLErrors[0].message:"";j(a)}}}),v=Object(r.a)(N,2),k=v[0],y=v[1],C=(y.data,y.loading),I=(y.error,Object(m.useMutation)(f.a,{onCompleted:function(){p()},onError:function(t){if(t){var e,n,a=Object(w.isEmpty)(null===t||void 0===t||null===(e=t.graphQLErrors)||void 0===e?void 0:e[0])?"":null===(n=t.graphQLErrors[0])||void 0===n?void 0:n.message;j(a)}}})),P=Object(r.a)(I,2),_=P[0],E=P[1],S=(E.data,E.loading),T=(E.error,function(t,e,n){if(t.stopPropagation(),n.length){var a=Object(d.c)(n,0,e);k({variables:{input:{clientMutationId:Object(u.a)(),items:a}}})}});return Object(a.jsx)("div",{className:"cart product-cart-container container mx-auto my-32 px-4 xl:px-0",children:e?Object(a.jsxs)("div",{className:"pt-5 woo-next-cart-wrapper container",children:[Object(a.jsxs)("div",{className:"cart-header grid grid-cols-2 gap-4",children:[Object(a.jsx)("h1",{className:"text-2xl mb-5 uppercase font-hk",children:"Cart"}),Object(a.jsxs)("div",{className:"clear-cart text-right",children:[Object(a.jsxs)("button",{className:"theme bg-color-1 px-4 py-1 bg-gray-500 text-white rounded-sm w-auto",onClick:function(t){return function(t){t.stopPropagation(),S||_({variables:{input:{clientMutationId:Object(u.a)(),all:!0}}})}(t)},disabled:S,children:[Object(a.jsx)("span",{className:"woo-next-cart font-hk font-weight-600",children:"Clear Cart"}),Object(a.jsx)("i",{className:"fa fa-arrow-alt-right"})]}),S?Object(a.jsx)("p",{children:"Clearing..."}):"",C?Object(a.jsx)("p",{children:"Updating..."}):null]})]}),Object(a.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-4 mb-5",children:[Object(a.jsxs)("table",{className:"cart-products table-auto col-span-3 mb-5",children:[Object(a.jsx)("thead",{className:"text-left",children:Object(a.jsxs)("tr",{className:"woo-next-cart-head-container",children:[Object(a.jsx)("th",{className:"woo-next-cart-heading-el",scope:"col"}),Object(a.jsx)("th",{className:"woo-next-cart-heading-el",scope:"col"}),Object(a.jsx)("th",{className:"woo-next-cart-heading-el font-hk",scope:"col",children:"Product"}),Object(a.jsx)("th",{className:"woo-next-cart-heading-el font-hk",scope:"col",children:"Price"}),Object(a.jsx)("th",{className:"woo-next-cart-heading-el font-hk",scope:"col",children:"Quantity"}),Object(a.jsx)("th",{className:"woo-next-cart-heading-el font-hk",scope:"col",children:"Total"})]})}),Object(a.jsx)("tbody",{children:e.products.length&&e.products.map((function(t){return Object(a.jsx)(b,{item:t,updateCartProcessing:C,products:e.products,handleRemoveProductClick:T,updateCart:k},t.productId)}))})]}),Object(a.jsx)("div",{className:"row woo-next-cart-total-container justify-content-center checkout-border",children:Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)("table",{className:"table mb-5",children:Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{className:"table-light flex flex-col",children:[Object(a.jsx)("td",{className:"woo-next-cart-element-total text-2xl font-hk",children:"Subtotal"}),Object(a.jsx)("td",{className:"woo-next-cart-element-amt text-2xl font-hk",children:"string"!==typeof e.totalProductsPrice?e.totalProductsPrice.toFixed(2):e.totalProductsPrice})]})})}),Object(a.jsx)(s.a,{href:"/checkout",children:Object(a.jsxs)("button",{className:"theme bg-color-2 text-white px-5 py-3 rounded-sm w-auto xl:w-full",children:[Object(a.jsx)("span",{className:"woo-next-cart-checkout-txt font-hk font-weight-600",children:"Proceed to Checkout"}),Object(a.jsx)("i",{className:"fas fa-long-arrow-alt-right"})]})})]})})]}),o?Object(a.jsxs)("div",{className:"row woo-next-cart-total-container mt-5",children:[" ",o," "]}):""]}):Object(a.jsxs)("div",{className:"container mx-auto my-32 px-4 xl:px-0",children:[Object(a.jsx)("h2",{className:"text-2xl mb-5",children:"No items in the cart"}),Object(a.jsx)(s.a,{href:"/",children:Object(a.jsxs)("button",{className:"bg-purple-600 text-white px-5 py-3 rounded-sm",children:[Object(a.jsx)("span",{className:"woo-next-cart-checkout-txt",children:"Add New Products"}),Object(a.jsx)("i",{className:"fas fa-long-arrow-alt-right"})]})})]})})};e.default=function(){return Object(a.jsx)(c.a,{children:Object(a.jsx)(N,{})})}},ahkM:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return n("YQMk")}])}},[["ahkM",0,1,3,2,4,5]]]);