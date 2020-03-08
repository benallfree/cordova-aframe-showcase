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
})({"D6vY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function addScript(src, id) {
  if (document.getElementById(id)) return;
  const p = new Promise((resolve, reject) => {
    var s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    s.onabort = reject;
    document.head.appendChild(s);
  });
  return p;
}

function addInlineScript(src, id) {
  if (document.getElementById(id)) return;
  var s = document.createElement('script');
  s.innerHTML = src;
  s.async = false;
  s.defer = false;
  document.head.appendChild(s);
}

var _default = () => {
  const [isInitialized, setIsInitialized] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    ;

    (async () => {
      console.log('initializing');
      await Promise.all([addScript('https://unpkg.com/aframe-randomizer-components@3.0.2/dist/aframe-randomizer-components.min.js', 'aframe-randomizer-components'), addScript('https://unpkg.com/aframe-entity-generator-component@3.0.1/dist/aframe-entity-generator-component.min.js', 'aframe-entity-generator-component')]);
      AFRAME.registerComponent('random-material', {
        init: function () {
          this.el.setAttribute('material', {
            color: this.getRandomColor(),
            metalness: Math.random(),
            roughness: Math.random()
          });
        },
        getRandomColor: function () {
          var letters = '0123456789ABCDEF'.split('');
          var color = '#';

          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }

          return color;
        }
      });
      AFRAME.registerComponent('random-torus-knot', {
        init: function () {
          this.el.setAttribute('geometry', {
            primitive: 'torusKnot',
            radius: Math.random() * 10,
            radiusTubular: Math.random() * 0.75,
            p: Math.round(Math.random() * 10),
            q: Math.round(Math.random() * 10)
          });
        }
      });
      setIsInitialized(true);
    })();
  }, []);
  if (!isInitialized) return _react.default.createElement("div", null, "Loading...");
  return _react.default.createElement("a-scene", {
    background: "color: #111"
  }, _react.default.createElement("a-assets", null, _react.default.createElement("a-mixin", {
    id: "light",
    geometry: "primitive: sphere; radius: 1.5",
    material: "color: #FFF; shader: flat",
    light: "color: #DDDDFF; distance: 120; intensity: 2; type: point"
  }), _react.default.createElement("a-mixin", {
    id: "torusKnot",
    "random-torus-knot": true,
    "random-material": true,
    "random-position": "min: -60 -60 -80; max: 60 60 40"
  })), _react.default.createElement("a-entity", {
    "entity-generator": "mixin: torusKnot; num: 120"
  }), _react.default.createElement("a-entity", {
    animation: "property: rotation; to: 0 0 360; dur: 4000; easing: linear; loop: true"
  }, _react.default.createElement("a-entity", {
    mixin: "light",
    position: "30 0 0"
  })), _react.default.createElement("a-entity", {
    animation: "property: rotation; to: 360 0 0; dur: 4000; easing: linear; loop: true"
  }, _react.default.createElement("a-entity", {
    mixin: "light",
    position: "0 0 40"
  })));
};

exports.default = _default;
},{"react":"n8MK"}]},{},[], null)
//# sourceMappingURL=DynamicLights.b65b5493.js.map