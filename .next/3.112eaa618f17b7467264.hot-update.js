webpackHotUpdate(3, {
  /***/ "./pages/Navbar.js": /***/ function(
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    /* WEBPACK VAR INJECTION */ (function(module) {
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
        "./node_modules/babel-runtime/regenerator/index.js"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(
        "./node_modules/react/cjs/react.development.js"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_react__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch__ = __webpack_require__(
        "./node_modules/@appbaseio/reactivesearch/lib/components/search/DataSearch.js"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch__
      );

      var _extends =
        Object.assign ||
        function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };

      var _jsxFileName = "/Users/jag/work/elasticsearch-react/pages/Navbar.js";

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      (function() {
        var enterModule = __webpack_require__(
          "./node_modules/react-hot-loader/index.js"
        ).enterModule;

        enterModule && enterModule(module);
      })();

      function _asyncToGenerator(fn) {
        return function() {
          var gen = fn.apply(this, arguments);
          return new Promise(function(resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg);
                var value = info.value;
              } catch (error) {
                reject(error);
                return;
              }
              if (info.done) {
                resolve(value);
              } else {
                return Promise.resolve(value).then(
                  function(value) {
                    step("next", value);
                  },
                  function(err) {
                    step("throw", err);
                  }
                );
              }
            }
            return step("next");
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return call && (typeof call === "object" || typeof call === "function")
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      var components = {
        dataSearch: {
          componentId: "mainSearch",
          dataField: "original_title.search",
          categoryField: "title",
          className: "search-bar",
          queryFormat: "and",
          placeholder: "Search for movies...",
          iconPosition: "left",
          autosuggest: false,
          filterLabel: "search",
          highlight: true
        }
      };

      var Navbar = (function(_Component) {
        _inherits(Navbar, _Component);

        function Navbar() {
          _classCallCheck(this, Navbar);

          return _possibleConstructorReturn(
            this,
            (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(
              this,
              arguments
            )
          );
        }

        _createClass(
          Navbar,
          [
            {
              key: "render",
              value: function render() {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "div",
                  {
                    className: "navbar",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                      className: "logo-container",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      "img",
                      {
                        className: "app-logo",
                        src: "static/logo.png",
                        alt: "MovieSearch",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 38
                        }
                      }
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "div",
                    {
                      className: "search-container",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch___default.a,
                      _extends({}, components.dataSearch, {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 42
                        }
                      })
                    )
                  )
                );
              }
            },
            {
              key: "__reactstandin__regenerateByEval",
              value: function __reactstandin__regenerateByEval(key, code) {
                this[key] = eval(code);
              }
            }
          ],
          [
            {
              key: "getInitialProps",
              value: (function() {
                var _ref = _asyncToGenerator(
                  /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
                    function _callee() {
                      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.next = 2;
                                return initReactivesearch(
                                  [
                                    _extends({}, components.datasearch, {
                                      type: "DataSearch",
                                      source:
                                        __WEBPACK_IMPORTED_MODULE_2__appbaseio_reactivesearch_lib_components_search_DataSearch___default.a
                                    })
                                  ],
                                  null
                                );

                              case 2:
                                _context.t0 = _context.sent;
                                return _context.abrupt("return", {
                                  store: _context.t0
                                });

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this
                      );
                    }
                  )
                );

                function getInitialProps() {
                  return _ref.apply(this, arguments);
                }

                return getInitialProps;
              })()
            }
          ]
        );

        return Navbar;
      })(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

      var _default = Navbar;

      /* harmony default export */ __webpack_exports__["a"] = _default;
      (function() {
        var reactHotLoader = __webpack_require__(
          "./node_modules/react-hot-loader/index.js"
        ).default;

        var leaveModule = __webpack_require__(
          "./node_modules/react-hot-loader/index.js"
        ).leaveModule;

        if (!reactHotLoader) {
          return;
        }

        reactHotLoader.register(
          components,
          "components",
          "/Users/jag/work/elasticsearch-react/pages/Navbar.js"
        );
        reactHotLoader.register(
          Navbar,
          "Navbar",
          "/Users/jag/work/elasticsearch-react/pages/Navbar.js"
        );
        reactHotLoader.register(
          _default,
          "default",
          "/Users/jag/work/elasticsearch-react/pages/Navbar.js"
        );
        leaveModule(module);
      })();

      (function(Component, route) {
        if (!Component) return;
        if (false) return;
        module.hot.accept();
        Component.__route = route;

        if (module.hot.status() === "idle") return;

        var components = next.router.components;
        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue;

          if (components[r].Component.__route === route) {
            next.router.update(r, Component);
          }
        }
      })(
        typeof __webpack_exports__ !== "undefined"
          ? __webpack_exports__.default
          : module.exports.default || module.exports,
        "/Navbar"
      );

      /* WEBPACK VAR INJECTION */
    }.call(
      __webpack_exports__,
      __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(
        module
      )
    ));

    /***/
  }
});
//# sourceMappingURL=3.112eaa618f17b7467264.hot-update.js.map
