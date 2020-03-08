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
})({"aE9A":[function(require,module,exports) {
module.exports = "321103__nsstudios__blip1.167c5cc6.wav";
},{}],"pEdp":[function(require,module,exports) {
module.exports = "321104__nsstudios__blip2.c5122dc0.wav";
},{}],"F7Ji":[function(require,module,exports) {
module.exports = "glow1.c4e638c6.png";
},{}],"GH7H":[function(require,module,exports) {
module.exports = "ring1.b08eaab0.png";
},{}],"ku9P":[function(require,module,exports) {
module.exports = "ring2.278b8d4e.png";
},{}],"dw3C":[function(require,module,exports) {
module.exports = "ring3.ec580d2c.png";
},{}],"uf0j":[function(require,module,exports) {
module.exports = "ring4.85dad3af.png";
},{}],"cFRU":[function(require,module,exports) {
module.exports = "ring5.dfd84fc7.png";
},{}],"nu9u":[function(require,module,exports) {
module.exports = "schematic1.a2462577.png";
},{}],"BMq1":[function(require,module,exports) {
module.exports = "schematic2.9686e735.png";
},{}],"LvPB":[function(require,module,exports) {
module.exports = "schematic3.f91b7947.png";
},{}],"jr9F":[function(require,module,exports) {
module.exports = "schematic4.f9fbf1c0.png";
},{}],"h8jI":[function(require,module,exports) {
module.exports = "schematic5.7c316ff3.png";
},{}],"QTPp":[function(require,module,exports) {
module.exports = "text1.57d0d1a8.png";
},{}],"kWxA":[function(require,module,exports) {
module.exports = "text2.ff5d4f94.png";
},{}],"t1k5":[function(require,module,exports) {
module.exports = "text3.a5935bc2.png";
},{}],"NkHM":[function(require,module,exports) {
module.exports = "text4.d423b84f.png";
},{}],"PrEc":[function(require,module,exports) {
module.exports = "engine.37fef59a.glb";
},{}],"NHWw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _nsstudios__blip = _interopRequireDefault(require("./audio/321103__nsstudios__blip1.wav"));

var _nsstudios__blip2 = _interopRequireDefault(require("./audio/321104__nsstudios__blip2.wav"));

var _glow = _interopRequireDefault(require("./img/glow1.png"));

var _ring = _interopRequireDefault(require("./img/ring1.png"));

var _ring2 = _interopRequireDefault(require("./img/ring2.png"));

var _ring3 = _interopRequireDefault(require("./img/ring3.png"));

var _ring4 = _interopRequireDefault(require("./img/ring4.png"));

var _ring5 = _interopRequireDefault(require("./img/ring5.png"));

var _schematic = _interopRequireDefault(require("./img/schematic1.png"));

var _schematic2 = _interopRequireDefault(require("./img/schematic2.png"));

var _schematic3 = _interopRequireDefault(require("./img/schematic3.png"));

var _schematic4 = _interopRequireDefault(require("./img/schematic4.png"));

var _schematic5 = _interopRequireDefault(require("./img/schematic5.png"));

var _text = _interopRequireDefault(require("./img/text1.png"));

var _text2 = _interopRequireDefault(require("./img/text2.png"));

var _text3 = _interopRequireDefault(require("./img/text3.png"));

var _text4 = _interopRequireDefault(require("./img/text4.png"));

var _engine = _interopRequireDefault(require("./models/engine.glb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  return _react.default.createElement("a-scene", {
    renderer: "colorManagement: true;"
  }, _react.default.createElement("a-assets", null, _react.default.createElement("a-asset-item", {
    id: "engine",
    src: _engine.default
  }), _react.default.createElement("a-mixin", {
    id: "image",
    geometry: "height: 2; width: 2"
  }), _react.default.createElement("a-mixin", {
    id: "delayVisible",
    "event-set__loaded": "visible: true",
    visible: "true"
  }), _react.default.createElement("audio", {
    id: "blip1",
    src: _nsstudios__blip.default
  }), _react.default.createElement("audio", {
    id: "blip2",
    src: _nsstudios__blip2.default
  }), _react.default.createElement("img", {
    id: "glow1",
    src: _glow.default
  }), _react.default.createElement("img", {
    id: "ring1",
    src: _ring.default
  }), _react.default.createElement("img", {
    id: "ring2",
    src: _ring2.default
  }), _react.default.createElement("img", {
    id: "ring3",
    src: _ring3.default
  }), _react.default.createElement("img", {
    id: "ring4",
    src: _ring4.default
  }), _react.default.createElement("img", {
    id: "ring5",
    src: _ring5.default
  }), _react.default.createElement("img", {
    id: "schematic1",
    src: _schematic.default
  }), _react.default.createElement("img", {
    id: "schematic2",
    src: _schematic2.default
  }), _react.default.createElement("img", {
    id: "schematic3",
    src: _schematic3.default
  }), _react.default.createElement("img", {
    id: "schematic4",
    src: _schematic4.default
  }), _react.default.createElement("img", {
    id: "schematic5",
    src: _schematic5.default
  }), _react.default.createElement("img", {
    id: "text1",
    src: _text.default
  }), _react.default.createElement("img", {
    id: "text2",
    src: _text2.default
  }), _react.default.createElement("img", {
    id: "text3",
    src: _text3.default
  }), _react.default.createElement("img", {
    id: "text4",
    src: _text4.default
  })), _react.default.createElement("a-entity", {
    position: "1.75 0 1.2",
    rotation: "0 28 0"
  }, _react.default.createElement("a-camera", {
    position: "0 0 0",
    near: "0.1"
  })), _react.default.createElement("a-entity", {
    position: "0 0 -3"
  }, _react.default.createElement("a-gltf-model", {
    src: "#engine",
    rotation: "90 0 0",
    scale: "18 18 18"
  })), _react.default.createElement("a-entity", {
    id: "wall-lights",
    position: "-7.25 1.5 2.9",
    rotation: "0 90 0",
    scale: "1.25 1.25 1.25"
  }, _react.default.createElement("a-entity", {
    position: "0 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 350"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "1 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 400"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "2 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 450"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "3 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 500"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "4 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 550"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "5 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 600"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "6 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 650"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "7 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 700"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "8 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 750"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "9 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 800"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "10 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 850"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "11 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 900"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "12 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 950"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  })), _react.default.createElement("a-entity", {
    position: "13 0 0",
    scale: "0.05 0.05 0.05"
  }, _react.default.createElement("a-plane", {
    mixin: "delayVisible",
    width: "1",
    height: "4",
    shader: "flat",
    color: "#B4E2F8",
    "event-set__loaded": "_delay: 1000"
  }), _react.default.createElement("a-plane", {
    width: "6",
    height: "4",
    color: "#586266",
    opacity: "0.6",
    position: "0 0 -.01"
  }))), _react.default.createElement("a-entity", {
    id: "schematic-2",
    position: "0 0 -6",
    scale: "0.7 0.7 0.7"
  }, _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#glow1",
    scale: "5 5 5",
    position: "0 0 -2",
    "event-set__loaded": "_delay: 1500"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#ring2",
    scale: "1.75 1.75 1.75",
    position: "0 0 -1.2",
    "event-set__loaded": "_delay: 1400"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#ring5",
    scale: "1.2 1.2 1.2",
    position: "0 -1.5 -2.1",
    "event-set__loaded": "_delay: 1550"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#schematic5",
    scale: "2 2 2",
    position: "2.5 0 -1.02",
    opacity: "0.75",
    "event-set__loaded": "_delay: 1500"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#schematic4",
    scale: "1.5 1.5 1.5",
    position: "0 -3 -1.01",
    rotation: "0 0 90",
    opacity: "0.75",
    "event-set__loaded": "_delay: 1500"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#schematic3",
    scale: "1 1 1",
    position: "0 2.7 -1",
    opacity: "0.75",
    "event-set__loaded": "_delay: 1450"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#schematic1",
    scale: "2 2 2",
    "event-set__loaded": "_delay: 1400"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#text2",
    scale: ".5 .5 .5",
    position: "-1 3 .02",
    "event-set__loaded": "_delay: 1350"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#text4",
    position: "-2 -2 .03",
    "event-set__loaded": "_delay: 1300"
  })), _react.default.createElement("a-entity", {
    id: "schematic-1",
    position: "0 0 -3"
  }, _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#schematic2",
    scale: "0.7 0.7 0.7",
    "event-set__loaded": "_delay: 1200"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#text1",
    scale: "0.2 0.2 0.2",
    position: "2 0 .02",
    "event-set__loaded": "_delay: 1200"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#text3",
    scale: "0.4 0.4 0.4",
    position: "-1 1 .01",
    "event-set__loaded": "_delay: 1200"
  })), _react.default.createElement("a-entity", {
    id: "rings-group-3",
    position: "0 0 -2",
    scale: "0.5 0.5 0.5"
  }, _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#ring3",
    scale: ".8 .8 .8",
    "event-set__loaded": "_delay: 1000"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#ring5",
    scale: ".9 .9 .9",
    position: "0 0 .01",
    "event-set__loaded": "_delay: 1100"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#ring3",
    position: "0 0 .02",
    "event-set__loaded": "_delay: 1100",
    animation__scale: "property: scale; from: 1 1 1; to: 1.2 1.2 1.2; delay: 1100; dur: 250; easing: easeOutCubic"
  })), _react.default.createElement("a-entity", {
    id: "rings-group-2",
    position: "0 0 -1",
    scale: "0.5 0.5 0.5"
  }, _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#ring2",
    scale: "1.2 1.2 1.2",
    position: "0 0 .01",
    "event-set__loaded": "_delay: 800"
  }), _react.default.createElement("a-image", {
    mixin: "image delayVisible",
    src: "#text1",
    scale: "0.3 0.3 0.3",
    position: "1.4 0 .02",
    "event-set__loaded": "_delay: 900"
  })), _react.default.createElement("a-entity", {
    id: "rings-group-1",
    scale: "0.6 0.6 0.6"
  }, _react.default.createElement("a-image", Object.assign({}, {
    mixin: 'delayVisible'
  }, {
    mixin: 'image'
  }, {
    src: "#ring5",
    scale: "1.2 1.2 1.2",
    position: "0 0 0",
    "event-set__loaded": "_delay: 600"
  })), _react.default.createElement("a-image", Object.assign({}, {
    mixin: 'delayVisible'
  }, {
    mixin: 'image'
  }, {
    src: "#ring4",
    scale: "1.2 1.2 1.2",
    position: "0 0 .01",
    "event-set__loaded": "_delay: 600"
  })), _react.default.createElement("a-image", Object.assign({}, {
    mixin: 'delayVisible'
  }, {
    mixin: 'image'
  }, {
    src: "#ring3",
    position: "0 0 .02",
    "event-set__loaded": "_delay: 700",
    animation__scale: "property: scale; from: 1 1 1; to: 1.25 1.25 1.25; delay: 700; dur: 250; easing: easeOutCubic"
  }))), _react.default.createElement("a-light", {
    type: "point",
    color: "#94c6ff",
    distance: "15",
    position: "0 0 -12",
    intensity: "0",
    animation: "property: light.intensity; from: 0; to: 2; delay: 750; dur: 500"
  }), _react.default.createElement("a-light", {
    type: "point",
    color: "#94c6ff",
    distance: "17",
    position: "0 0 -6",
    intensity: "0",
    animation: "property: light.intensity; from: 0; to: 1; delay: 500; dur: 500"
  }), _react.default.createElement("a-light", {
    type: "ambient",
    color: "#4f6487"
  }), _react.default.createElement("a-entity", {
    sound: "autoplay: true; src: #blip1"
  }), _react.default.createElement("a-entity", {
    sound: "autoplay: true; src: #blip2"
  }));
};

exports.default = _default;
},{"react":"n8MK","./audio/321103__nsstudios__blip1.wav":"aE9A","./audio/321104__nsstudios__blip2.wav":"pEdp","./img/glow1.png":"F7Ji","./img/ring1.png":"GH7H","./img/ring2.png":"ku9P","./img/ring3.png":"dw3C","./img/ring4.png":"uf0j","./img/ring5.png":"cFRU","./img/schematic1.png":"nu9u","./img/schematic2.png":"BMq1","./img/schematic3.png":"LvPB","./img/schematic4.png":"jr9F","./img/schematic5.png":"h8jI","./img/text1.png":"QTPp","./img/text2.png":"kWxA","./img/text3.png":"t1k5","./img/text4.png":"NkHM","./models/engine.glb":"PrEc"}]},{},[], null)
//# sourceMappingURL=AnimeUI.11a9a9db.js.map