/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Barbawrapper = __webpack_require__(2);
	
	var _Barbawrapper2 = _interopRequireDefault(_Barbawrapper);
	
	var _Home = __webpack_require__(3);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _About = __webpack_require__(4);
	
	var _About2 = _interopRequireDefault(_About);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(document).ready(function () {
	  console.log('Document ready');
	
	  _Home2.default.init();
	  _About2.default.init();
	
	  var barba = new _Barbawrapper2.default();
	
	  // Menu code
	  // let $hamburger = $('.hamburger');
	  // let $mobileNav = $('nav.mobile');
	  // let $mobileOverlay = $('.mobile-menu-overlay');
	  // $hamburger.on('click', () => {
	  //   console.log('butz');
	  //   $mobileNav.toggleClass('hidden');
	  //   $mobileOverlay.toggleClass('hidden');
	  // });
	  //
	  // $mobileOverlay.on('click', () => {
	  //   $mobileOverlay.toggleClass('hidden');
	  //   $mobileNav.toggleClass('hidden');
	  // })
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BarbaWrapper = function () {
	  function BarbaWrapper() {
	    _classCallCheck(this, BarbaWrapper);
	
	    this.setupTransition();
	  }
	
	  _createClass(BarbaWrapper, [{
	    key: 'setupTransition',
	    value: function setupTransition() {
	
	      var FadeTransition = Barba.BaseTransition.extend({
	
	        start: function start() {
	          // console.log('Animation Start');
	          // As soon the loading is finished and the old page is faded out, let's fade the new page
	          Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
	        },
	
	        fadeOut: function fadeOut() {
	          return $(this.oldContainer).animate({ opacity: 0 }).promise();
	        },
	
	        fadeIn: function fadeIn() {
	          // console.log('New Container Fades In');
	          var _this = this;
	          var $el = $(this.newContainer);
	
	          $(this.oldContainer).hide();
	
	          $el.css({
	            visibility: 'visible',
	            opacity: 0
	          });
	
	          // Tween Max instead of jquery animate
	          TweenMax.to($el, 0.4, {
	            opacity: 1,
	            onComplete: animationCallback
	          });
	
	          function animationCallback() {
	            _this.done();
	          }
	        }
	      });
	
	      // Make function return our own Transition
	      Barba.Pjax.getTransition = function () {
	        return FadeTransition;
	      };
	
	      /**
	       * Start BarbaPjax Wrapper
	       */
	      Barba.Pjax.start();
	    }
	  }]);
	
	  return BarbaWrapper;
	}();
	
	exports.default = BarbaWrapper;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	
	var HomeView = Barba.BaseView.extend({
	  namespace: 'home',
	  onEnter: function onEnter() {
	    console.log('Enter Home View');
	  },
	  onEnterCompleted: function onEnterCompleted() {
	    // The Transition has just finished.
	  },
	  onLeave: function onLeave() {
	    // A new Transition toward a new page has just started.
	    // home.destroy();
	  },
	  onLeaveCompleted: function onLeaveCompleted() {
	    // The Container has just been removed from the DOM.
	  }
	});
	
	exports.default = HomeView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var AboutView = Barba.BaseView.extend({
	  namespace: 'About',
	  onEnter: function onEnter() {
	    console.log('Enter About');
	    // let about = new AboutComponent();
	  },
	  onEnterCompleted: function onEnterCompleted() {
	    // The Transition has just finished.
	  },
	  onLeave: function onLeave() {
	    // A new Transition toward a new page has just started.
	    // About.destroy();
	  },
	  onLeaveCompleted: function onLeaveCompleted() {
	    // The Container has just been removed from the DOM.
	  }
	});
	
	exports.default = AboutView;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=browser-bundle.js.map