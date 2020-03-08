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
})({"jh2Q":[function(require,module,exports) {
module.exports = "carpet.78026e68.jpg";
},{}],"jSxj":[function(require,module,exports) {
module.exports = "marble.5dbaf5fa.jpg";
},{}],"PJSA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _carpet = _interopRequireDefault(require("./carpet.jpg"));

var _marble = _interopRequireDefault(require("./marble.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  return _react.default.createElement("a-scene", {
    background: "color: #112",
    stats: true
  }, _react.default.createElement("a-assets", null, _react.default.createElement("a-mixin", {
    id: "box",
    geometry: "primitive: box; depth: .125; height: .125;\n                             width: .125"
  }), _react.default.createElement("a-mixin", {
    id: "circle",
    geometry: "primitive: circle; radius: .2;\n                             segments: 100; thetaStart: 0; thetaLength: 360"
  }), _react.default.createElement("a-mixin", {
    id: "cylinder",
    geometry: "primitive: cylinder; radius: 0.2; height: .5;\n                             segmentsRadial: 50; segmentsHeight: 50:\n                             openEnded: true; thetaStart: 0; thetaLength: 360"
  }), _react.default.createElement("a-mixin", {
    id: "ring",
    geometry: "primitive: ring; radiusInner: .3; radiusOuter: .5;\n                              segmentsTheta: 50"
  }), _react.default.createElement("a-mixin", {
    id: "sphere",
    geometry: "primitive: sphere; radius: .1"
  }), _react.default.createElement("a-mixin", {
    id: "torus",
    geometry: "primitive: torus; arc: 720; radius: .3; radiusTubular: .05;\n                              segmentsTubular: 10;"
  }), _react.default.createElement("a-mixin", {
    id: "torus-knot",
    geometry: "primitive: torusKnot; p: 3; q: 7; radius: .25;\n                              segmentsRadial: 10; radiusTubular: .07; segmentsTubular: 32"
  }), _react.default.createElement("a-mixin", {
    id: "column",
    geometry: "primitive: box; depth: .75; height: 1.2; width: .75",
    material: "color: #FFF",
    position: "0 .6 0"
  }), _react.default.createElement("a-mixin", {
    id: "column-bottom",
    geometry: "primitive: box; depth: 1;\n                                                height: .1; width: 1;",
    material: "color: #FFF",
    position: "0 .1 0"
  }), _react.default.createElement("a-mixin", {
    id: "column-light",
    light: "type: point; intensity: 0.5;\n                                            distance: 5;",
    position: "0 1.5 0"
  }), _react.default.createElement("a-mixin", {
    id: "object-on-column",
    position: "0 1.2 0"
  }), _react.default.createElement("a-mixin", {
    id: "yoyo",
    animation__yoyo: "dir: alternate; loop: true"
  }), _react.default.createElement("a-mixin", {
    id: "spin",
    animation__spin: "property: object3D.rotation.y; to: 360; loop: true; easing: linear; dur: 10000"
  }), _react.default.createElement("a-mixin", {
    id: "spinX",
    mixin: "spin",
    animation__spin: "property: object3D.rotation.x"
  }), _react.default.createElement("a-mixin", {
    id: "color",
    material: "color: #FFFFC3"
  }), _react.default.createElement("a-mixin", {
    id: "doubleside",
    material: "side: double"
  }), _react.default.createElement("img", {
    id: "carpet",
    src: _carpet.default
  }), _react.default.createElement("img", {
    id: "floor",
    src: _marble.default
  })), _react.default.createElement("a-camera", {
    position: "0 1.6 4"
  }), _react.default.createElement("a-entity", {
    light: "type: ambient; color: #444"
  }), _react.default.createElement("a-entity", {
    light: "type: directional; color: #EEE",
    position: "0 1 1"
  }), _react.default.createElement("a-entity", {
    geometry: "primitive: cylinder; height: .2; radius: 12;",
    material: "color: #BABABA; src: #floor;\n                            metalness: .2; repeat: 50 20; roughness: .1",
    position: "0 0 0"
  }), _react.default.createElement("a-entity", {
    geometry: "primitive: box; depth: 20; height: 0.025; width: 2",
    material: "color: #440000; metalness: 0; src: #carpet;\n                            repeat: 3 40; roughness: 1",
    position: "0 .2 0"
  }), _react.default.createElement("a-entity", {
    position: "-2.5 0 1"
  }, _react.default.createElement("a-entity", {
    mixin: "column"
  }, _react.default.createElement("a-entity", {
    mixin: "column-light"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color box spin",
    animation__spin: "to: 360 360 0"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color box spin",
    position: ".18 1.2 .1",
    animation__spin: "to: 360 360 0"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color box spin",
    position: "-.18 1.2 -.2",
    animation__spin: "to: 360 360 0"
  })), _react.default.createElement("a-entity", {
    mixin: "column-bottom"
  })), _react.default.createElement("a-entity", {
    position: "-2.5 0 -2"
  }, _react.default.createElement("a-entity", {
    mixin: "column"
  }, _react.default.createElement("a-entity", {
    mixin: "column-light"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color doubleside circle spin"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color doubleside circle spin"
  })), _react.default.createElement("a-entity", {
    mixin: "column-bottom"
  })), _react.default.createElement("a-entity", {
    position: "-2.5 0 -5"
  }, _react.default.createElement("a-entity", {
    mixin: "column"
  }, _react.default.createElement("a-entity", {
    mixin: "column-light"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color cylinder spinX"
  })), _react.default.createElement("a-entity", {
    mixin: "column-bottom"
  })), _react.default.createElement("a-entity", {
    position: "2.5 0 1"
  }, _react.default.createElement("a-entity", {
    mixin: "column"
  }, _react.default.createElement("a-entity", {
    mixin: "column-light"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color doubleside ring spin",
    animation__spin: "dur: 6000"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color doubleside ring spinX"
  })), _react.default.createElement("a-entity", {
    mixin: "column-bottom"
  })), _react.default.createElement("a-entity", {
    position: "2.5 0 -2"
  }, _react.default.createElement("a-entity", {
    mixin: "column"
  }, _react.default.createElement("a-entity", {
    mixin: "column-light"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color sphere yoyo",
    animation__yoyo: "property: position; from: -0.2 1 0; to: -0.2 1.8 0",
    position: "-.2 1.2 0"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color sphere yoyo",
    animation__yoyo: "property: position; from: 0 1.8 0; to: 0 1 0"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color sphere yoyo",
    position: ".2 1 0",
    animation__yoyo: "property: position; to: 0.2 1.8 0"
  })), _react.default.createElement("a-entity", {
    mixin: "column-bottom"
  })), _react.default.createElement("a-entity", {
    position: "2.5 0 -5"
  }, _react.default.createElement("a-entity", {
    mixin: "column"
  }, _react.default.createElement("a-entity", {
    mixin: "column-light"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color torus spin"
  })), _react.default.createElement("a-entity", {
    mixin: "column-bottom"
  })), _react.default.createElement("a-entity", {
    position: "2.5 0 -8"
  }, _react.default.createElement("a-entity", {
    mixin: "column"
  }, _react.default.createElement("a-entity", {
    mixin: "column-light"
  }), _react.default.createElement("a-entity", {
    mixin: "object-on-column color torus-knot spin"
  })), _react.default.createElement("a-entity", {
    mixin: "column-bottom"
  })));
};

exports.default = _default;
},{"react":"n8MK","./carpet.jpg":"jh2Q","./marble.jpg":"jSxj"}]},{},[], null)
//# sourceMappingURL=Gallery.b1c106a0.js.map