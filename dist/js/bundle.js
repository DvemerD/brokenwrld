"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disableScroll = disableScroll;
exports.enableScroll = enableScroll;
function disableScroll() {
  var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollBarWidth + "px";
  document.body.style.overflow = "hidden";
}
function enableScroll() {
  document.body.style.paddingRight = "";
  document.body.style.overflow = "auto";
}
"use strict";

var _header = _interopRequireDefault(require("./blocks/header.js"));
var _history = _interopRequireDefault(require("./blocks/history.js"));
var _humburger = _interopRequireDefault(require("./blocks/humburger.js"));
var _packs = _interopRequireDefault(require("./blocks/packs.js"));
var _preloader = _interopRequireDefault(require("./blocks/preloader.js"));
var _promo = _interopRequireDefault(require("./blocks/promo.js"));
var _roadmap = _interopRequireDefault(require("./blocks/roadmap.js"));
var _whitepapers = _interopRequireDefault(require("./blocks/whitepapers.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
window.addEventListener("DOMContentLoaded", function () {
  var screenWidth = window.innerWidth;
  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline({
    paused: "true"
  });
  if (screenWidth > 768) {
    luxy.init();
    (0, _header["default"])(tl);
    (0, _promo["default"])(tl);
    (0, _packs["default"])(tl);
    (0, _whitepapers["default"])(tl);
    (0, _history["default"])(tl);
    (0, _roadmap["default"])(tl);
  }
  (0, _preloader["default"])(tl);
  (0, _humburger["default"])();
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function header(tl) {
  tl.fromTo(".header__logo", {
    y: -60,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1
  }, 1);
  tl.fromTo(".header__menu li", {
    y: -60,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15
  }, 1.1);
  tl.fromTo(".header__social img", {
    y: -60,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15
  }, 1.6);
  tl.fromTo(".header__buttons", {
    x: 70,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1
  }, 1.8);
  gsap.to(".header", {
    scrollTrigger: {
      trigger: ".promo",
      start: "top top",
      scrub: 1.9
    },
    yPercent: -50,
    opacity: 0
  });
}
var _default = exports["default"] = header;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function history(tl) {
  gsap.from(".history .title_section", {
    scrollTrigger: {
      trigger: ".history",
      start: "top bottom",
      end: "bottom-=40% bottom",
      scrub: 1.5
    },
    xPercent: -50,
    opacity: 0.5
  });
  gsap.from(".history .title-line", {
    scrollTrigger: {
      trigger: ".history",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1
    },
    xPercent: 50
  });
  gsap.from(".history .history__img", {
    scrollTrigger: {
      trigger: ".history",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.9
    },
    opacity: 0
  });
  gsap.from(".history .history__frame", {
    scrollTrigger: {
      trigger: ".history",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.9
    },
    opacity: 0,
    yPercent: 80
  });
}
var _default = exports["default"] = history;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _helpers = require("../helpers.js");
function hamburger() {
  var hamburgerBtn = document.querySelector(".hamburger"),
    overlay = document.querySelector(".overlay"),
    overlayBgr = document.querySelector(".overlay__bgr"),
    menu = document.querySelector(".header__navigation");
  hamburgerBtn.addEventListener("click", function () {
    hamburgerBtn.classList.toggle("hamburger_active");
    overlay.classList.toggle("overlay_active");
    overlayBgr.classList.toggle("overlay__bgr_active");
    menu.classList.toggle("header__navigation_active");
    if (hamburgerBtn.classList.contains("hamburger_active")) {
      (0, _helpers.disableScroll)();
    } else {
      (0, _helpers.enableScroll)();
    }
  });
}
var _default = exports["default"] = hamburger;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function packs(tl) {
  gsap.from(".packs .title_section", {
    scrollTrigger: {
      trigger: ".packs",
      start: "top bottom",
      end: "bottom-=40% bottom",
      scrub: 1.5
    },
    xPercent: -50,
    opacity: 0.5
  });
  gsap.from(".packs .title-line", {
    scrollTrigger: {
      trigger: ".packs",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1
    },
    xPercent: 50
  });
  gsap.from(".packs .pack:first-of-type", {
    scrollTrigger: {
      trigger: ".packs",
      start: "top bottom",
      end: "bottom-=40% bottom",
      scrub: 1
    },
    x: "-70%",
    opacity: 0,
    duration: 1
  });
  gsap.from(".packs .pack:last-of-type", {
    scrollTrigger: {
      trigger: ".packs",
      start: "top bottom",
      end: "bottom-=40% bottom",
      scrub: 1
    },
    x: "70%",
    opacity: 0,
    duration: 1
  });
}
var _default = exports["default"] = packs;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _helpers = require("../helpers.js");
function preloader(tl) {
  var bar = document.getElementById("progress-confirm"),
    preloader = document.getElementById("preloader"),
    wrapp = document.querySelector(".wrapp");
  var id,
    width = 0;
  (0, _helpers.disableScroll)();
  id = setInterval(function () {
    if (width >= 100) {
      clearInterval(id);
      preloader.classList.add("preloader_hide");
      (0, _helpers.enableScroll)();
      wrapp.style.visibility = "visible";
      tl.play();
    } else {
      width++;
      bar.style.width = width + "%";
      document.getElementById("percent").innerHTML = width + "%";
    }
  }, 20);
}
var _default = exports["default"] = preloader;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function promo(tl) {
  tl.fromTo(".promo__logo", {
    opacity: 0,
    xPercent: -80
  }, {
    opacity: 1,
    xPercent: 0,
    duration: 0.8
  }, 1);
  tl.fromTo(".promo__title", {
    opacity: 0,
    xPercent: -80
  }, {
    opacity: 1,
    xPercent: 0,
    duration: 1.5
  }, 1.3);
  tl.fromTo(".promo__subtitle", {
    opacity: 0,
    xPercent: -80
  }, {
    opacity: 1,
    xPercent: 0,
    duration: 1.5
  }, 1.5);
  tl.fromTo(".promo__arrow", {
    opacity: 0,
    xPercent: -50
  }, {
    opacity: 1,
    xPercent: 0,
    duration: 1.5
  }, 1.8);
  gsap.to(".promo__bg-img", {
    scrollTrigger: {
      trigger: ".promo",
      start: "top top",
      scrub: 1.9
    },
    scale: 1.1,
    opacity: 0.4
  });
  gsap.to(".promo__wrapper", {
    scrollTrigger: {
      trigger: ".promo",
      start: "top top",
      scrub: 1.9
    },
    yPercent: -50,
    opacity: 0
  });
}
var _default = exports["default"] = promo;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function roadmap(tl) {
  gsap.from(".road-map .title_section", {
    scrollTrigger: {
      trigger: ".road-map",
      start: "top bottom",
      end: "bottom-=40% bottom",
      scrub: 1.5
    },
    xPercent: -50,
    opacity: 0.5
  });
  gsap.from(".road-map .title-line", {
    scrollTrigger: {
      trigger: ".road-map",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1
    },
    xPercent: 50
  });
  gsap.from(".road-map__item", {
    scrollTrigger: {
      trigger: ".road-map",
      start: "top bottom",
      end: "bottom-=50% bottom",
      scrub: 1.9
    },
    y: function y(i, el) {
      return 1 - parseFloat(el.getAttribute("data-speed"));
    },
    opacity: 0
  });
  gsap.from(".road-map__footer .road-map__char:first-of-type", {
    scrollTrigger: {
      trigger: ".road-map__footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1.5
    },
    x: "-70%",
    opacity: 0
  });
  gsap.from(".road-map__footer .road-map__char:last-of-type", {
    scrollTrigger: {
      trigger: ".road-map__footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1.5
    },
    x: "70%",
    opacity: 0
  });
  gsap.from(".road-map__footer .road-map__logo", {
    scrollTrigger: {
      trigger: ".road-map__footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1.5
    },
    opacity: 0,
    scale: 0.6
  });
  gsap.from(".road-map__links", {
    scrollTrigger: {
      trigger: ".road-map__footer",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.9
    },
    yPercent: 50,
    opacity: 0
  });
}
var _default = exports["default"] = roadmap;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function whitepapers(tl) {
  gsap.from(".whitepapers .title_mini", {
    scrollTrigger: {
      trigger: ".whitepapers",
      start: "top-=500px top",
      end: "top-=500px top",
      scrub: 1.7
    },
    y: "70%",
    opacity: 0,
    duration: 1
  });
  gsap.from(".whitepapers__subtitle", {
    scrollTrigger: {
      trigger: ".whitepapers",
      start: "top-=500px top",
      end: "top-=500px top",
      scrub: 1.5
    },
    y: "-70%",
    opacity: 0,
    duration: 1
  });
  gsap.from(".whitepapers__wrapper-btn", {
    scrollTrigger: {
      trigger: ".whitepapers",
      start: "top-=500px top",
      end: "top-=500px top",
      scrub: 1.5
    },
    y: "-70%",
    opacity: 0,
    duration: 1
  });
  gsap.from(".whitepapers__img", {
    scrollTrigger: {
      trigger: ".whitepapers",
      start: "top-=500px top",
      end: "top-=500px top",
      scrub: 1.5
    },
    y: "50%",
    opacity: 0,
    duration: 1.5
  });
}
var _default = exports["default"] = whitepapers;
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Written by Mineo Okuda on 01/03/18.
 *
 * Mineo Okuda - development + design
 * https://willstyle.co.jp
 * https://github.com/min30327
 *
 * MIT license.
 */

(function (root, factory) {
  "use strict";

  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    // COMMONJS
    module.exports = factory();
  } else {
    // BROWSER
    root.luxy = factory();
  }
})(void 0, function () {
  "use strict";

  var defaults = {
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.08,
    targetSpeed: 0.02,
    targetPercentage: 0.1
  };
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  /**
   * Merge two or more objects. Returns a new object.
   * @param {Object}   objects  The objects to merge together
   * @returns {Object}          Merged values of defaults and options
   */
  var extend = function extend() {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Merge the object into the extended object
    var merge = function merge(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          extended[prop] = obj[prop];
        }
      }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }
    return extended;
  };
  var Luxy = function Luxy() {
    this.Targets = [];
    this.TargetsLength = 0;
    this.wrapper = "";
    this.windowHeight = 0;
    this.wapperOffset = 0;
  };
  Luxy.prototype = {
    isAnimate: false,
    isResize: false,
    scrollId: "",
    resizeId: "",
    init: function init(options) {
      this.settings = extend(defaults, options || {});
      this.wrapper = document.querySelector(this.settings.wrapper);
      if (this.wrapper === "undefined") {
        return false;
      }
      this.targets = document.querySelectorAll(this.settings.targets);
      document.body.style.height = this.wrapper.clientHeight + "px";
      this.windowHeight = window.clientHeight;
      this.attachEvent();
      this.apply(this.targets, this.wrapper);
      this.animate();
      this.resize();
    },
    apply: function apply(targets, wrapper) {
      this.wrapperInit();
      this.targetsLength = targets.length;
      for (var i = 0; i < this.targetsLength; i++) {
        var attr = {
          offset: targets[i].getAttribute("data-offset"),
          speedX: targets[i].getAttribute("data-speed-x"),
          speedY: targets[i].getAttribute("data-speed-Y"),
          percentage: targets[i].getAttribute("data-percentage"),
          horizontal: targets[i].getAttribute("data-horizontal")
        };
        this.targetsInit(targets[i], attr);
      }
    },
    wrapperInit: function wrapperInit() {
      this.wrapper.style.width = "100%";
      this.wrapper.style.position = "fixed";
    },
    targetsInit: function targetsInit(elm, attr) {
      this.Targets.push({
        elm: elm,
        offset: attr.offset ? attr.offset : 0,
        horizontal: attr.horizontal ? attr.horizontal : 0,
        top: 0,
        left: 0,
        speedX: attr.speedX ? attr.speedX : 1,
        speedY: attr.speedY ? attr.speedY : 1,
        percentage: attr.percentage ? attr.percentage : 0
      });
    },
    scroll: function scroll() {
      var scrollTopTmp = document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var offsetBottom = this.scrollTop + this.windowHeight;
      this.wrapperUpdate(this.scrollTop);
      for (var i = 0; i < this.Targets.length; i++) {
        this.targetsUpdate(this.Targets[i]);
      }
    },
    animate: function animate() {
      this.scroll();
      this.scrollId = requestAnimationFrame(this.animate.bind(this));
    },
    wrapperUpdate: function wrapperUpdate() {
      this.wapperOffset += (this.scrollTop - this.wapperOffset) * this.settings.wrapperSpeed;
      this.wrapper.style.transform = "translate3d(" + 0 + "," + Math.round(-this.wapperOffset * 100) / 100 + "px ," + 0 + ")";
    },
    targetsUpdate: function targetsUpdate(target) {
      target.top += (this.scrollTop * Number(this.settings.targetSpeed) * Number(target.speedY) - target.top) * this.settings.targetPercentage;
      target.left += (this.scrollTop * Number(this.settings.targetSpeed) * Number(target.speedX) - target.left) * this.settings.targetPercentage;
      var targetOffsetTop = parseInt(target.percentage) - target.top - parseInt(target.offset);
      var offsetY = Math.round(targetOffsetTop * -100) / 100;
      var offsetX = 0;
      if (target.horizontal) {
        var targetOffsetLeft = parseInt(target.percentage) - target.left - parseInt(target.offset);
        offsetX = Math.round(targetOffsetLeft * -100) / 100;
      }
      target.elm.style.transform = "translate3d(" + offsetX + "px ," + offsetY + "px ," + 0 + ")";
    },
    resize: function resize() {
      var self = this;
      self.windowHeight = window.innerHeight || document.documentElement.clientHeight || 0;
      if (parseInt(self.wrapper.clientHeight) != parseInt(document.body.style.height)) {
        document.body.style.height = self.wrapper.clientHeight + "px";
      }
      self.resizeId = requestAnimationFrame(self.resize.bind(self));
    },
    attachEvent: function attachEvent() {
      var self = this;
      window.addEventListener("resize", function () {
        if (!self.isResize) {
          cancelAnimationFrame(self.resizeId);
          cancelAnimationFrame(self.scrollId);
          self.isResize = true;
          setTimeout(function () {
            self.isResize = false;
            self.resizeId = requestAnimationFrame(self.resize.bind(self));
            self.scrollId = requestAnimationFrame(self.animate.bind(self));
          }, 200);
        }
      });
    },
    cancel: function cancel() {
      cancelAnimationFrame(this.resizeId);
      cancelAnimationFrame(this.scrollId);
      this.wrapper.removeAttribute("style");
      for (var i = 0; i < this.Targets.length; i++) {
        this.Targets[i].elm.removeAttribute("style");
      }
      this.wrapper = "";
      this.Targets = [];
      this.windowHeight = 0;
      this.wapperOffset = 0;
      this.isResize = false;
      this.scrollId = "";
      this.resizeId = "";
    }
  };
  var luxy = new Luxy();
  return luxy;
});