// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"zfz5":[function(require,module,exports) {
module.exports = "1hyyIUi.08811720.jpg";
},{}],"Dowq":[function(require,module,exports) {
module.exports = "25P1geh.8e0d0756.png";
},{}],"YybL":[function(require,module,exports) {
module.exports = "WMNH2OF.9ebc5547.jpg";
},{}],"LfN8":[function(require,module,exports) {
module.exports = "WqlqEkq.55da4df1.jpg";
},{}],"gdHI":[function(require,module,exports) {
module.exports="dawningOfANewDayRegular.typeface.587ed2ce.json";
},{}],"waO3":[function(require,module,exports) {
module.exports="exo2Black.typeface.addb2fbf.json";
},{}],"XxLo":[function(require,module,exports) {
module.exports="exo2BlackItalic.typeface.f1641af0.json";
},{}],"YaiC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _hyyIUi = _interopRequireDefault(require("./img/1hyyIUi.jpg"));

var _P1geh = _interopRequireDefault(require("./img/25P1geh.png"));

var _WMNH2OF = _interopRequireDefault(require("./img/WMNH2OF.jpg"));

var _WqlqEkq = _interopRequireDefault(require("./img/WqlqEkq.jpg"));

var _dawningOfANewDayRegularTypeface = _interopRequireDefault(require("./data/dawningOfANewDayRegular.typeface.json"));

var _exo2BlackTypeface = _interopRequireDefault(require("./data/exo2Black.typeface.json"));

var _exo2BlackItalicTypeface = _interopRequireDefault(require("./data/exo2BlackItalic.typeface.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  return _react.default.createElement("a-scene", {
    renderer: "antialias: true",
    background: "color: #FAFAFA"
  }, _react.default.createElement("a-assets", null, _react.default.createElement("img", {
    id: "pink",
    src: _hyyIUi.default
  }), _react.default.createElement("img", {
    src: _P1geh.default,
    id: "grid"
  }), _react.default.createElement("img", {
    src: _WMNH2OF.default,
    id: "chrome"
  }), _react.default.createElement("img", {
    id: "sky",
    src: _WqlqEkq.default
  }), _react.default.createElement("a-asset-item", {
    id: "dawningFont",
    src: _dawningOfANewDayRegularTypeface.default
  }), _react.default.createElement("a-asset-item", {
    id: "exoFont",
    src: _exo2BlackTypeface.default
  }), _react.default.createElement("a-asset-item", {
    id: "exoItalicFont",
    src: _exo2BlackItalicTypeface.default
  })), _react.default.createElement("a-entity", {
    scale: "2 2 2",
    geometry: "primitive: torusKnot",
    position: "0 6 -10",
    material: "color: magenta; metalness:1; roughness: 0.1; sphericalEnvMap: #sky;"
  }, _react.default.createElement("a-animation", {
    easing: "linear",
    attribute: "rotation",
    dur: "10000",
    to: "0 0 360",
    repeat: "indefinite"
  })), _react.default.createElement("a-entity", {
    position: "-3 1 -6",
    rotation: "5 0 0"
  }, _react.default.createElement("a-entity", {
    rotation: "0 0 5",
    position: "0 2 0.2",
    "text-geometry": "value: Virtual Reality; font: #dawningFont; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 12; size: 1; height: 0;",
    material: "color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;"
  })), _react.default.createElement("a-entity", {
    geometry: "primitive: plane; width: 10000; height: 10000;",
    rotation: "-90 0 0",
    material: "src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;"
  }), _react.default.createElement("a-entity", {
    light: "color: #ccccff; intensity: 1; type: ambient;",
    visible: ""
  }), _react.default.createElement("a-entity", {
    light: "color: #ffaaff; intensity: 1.5",
    position: "5 5 5"
  }), _react.default.createElement("a-entity", {
    light: "color: white; intensity: 0.5",
    position: "-5 5 15"
  }), _react.default.createElement("a-entity", {
    light: "color: white; type: ambient;"
  }), _react.default.createElement("a-sky", {
    src: "#sky",
    rotation: "0 -90 0"
  }));
};

exports.default = _default;
},{"react":"n8MK","./img/1hyyIUi.jpg":"zfz5","./img/25P1geh.png":"Dowq","./img/WMNH2OF.jpg":"YybL","./img/WqlqEkq.jpg":"LfN8","./data/dawningOfANewDayRegular.typeface.json":"gdHI","./data/exo2Black.typeface.json":"waO3","./data/exo2BlackItalic.typeface.json":"XxLo"}]},{},[], null)
//# sourceMappingURL=HelloMetaverse.63403d74.js.map