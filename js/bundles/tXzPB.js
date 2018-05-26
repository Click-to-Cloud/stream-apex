var pageComponent =
webpackJsonppageComponent([2],{

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _step_6Soy = __webpack_require__(295);

var _step_6Soy2 = _interopRequireDefault(_step_6Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tXzPB = function (_Component) {
  _inherits(tXzPB, _Component);

  function tXzPB() {
    _classCallCheck(this, tXzPB);

    return _possibleConstructorReturn(this, (tXzPB.__proto__ || Object.getPrototypeOf(tXzPB)).apply(this, arguments));
  }

  return tXzPB;
}(_metalComponent2.default);

;

_metalSoy2.default.register(tXzPB, _step_6Soy2.default);

exports.default = tXzPB;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.tXzPB = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from step_6.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace tXzPB.
   * @public
   */

  goog.module('tXzPB.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param817 = function param817() {
      ie_open('h2');
      var dyn39 = opt_data.page.title;
      if (typeof dyn39 == 'function') dyn39();else if (dyn39 != null) itext(dyn39);
      ie_close('h2');
      ie_open('p');
      itext('We have operations for streams that can be chained easily to build our logic.');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .mapBy(R.inc)\n    .startWith(Stream.of(1))\n    .subscribe(R.debug);\n// 1, 2, 3, 4', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we created a stream with 1, 2, 3 and incremented each element with 1. Besides, we prepended a new stream of 1 to the stream. So finally we got 1, 2, 3, 4.');
      ie_close('p');
      ie_open('p');
      itext('Each stream operation will create a new stream, and these streams are subscribed in a chain, so that the events from the top of the chain can flow to the bottom, calling each operation. That means, the list of elements are not processed as a whole from one operation to another. Instead, each element of the list gets processed from one operation to another. The next element will not start processing until the previous element is finished. They are driven by events and therefore are called ');
      ie_open('strong');
      itext('reactive');
      ie_close('strong');
      itext('.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param817 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'tXzPB.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var tXzPB = function (_Component) {
  _inherits(tXzPB, _Component);

  function tXzPB() {
    _classCallCheck(this, tXzPB);

    return _possibleConstructorReturn(this, (tXzPB.__proto__ || Object.getPrototypeOf(tXzPB)).apply(this, arguments));
  }

  return tXzPB;
}(_metalComponent2.default);

_metalSoy2.default.register(tXzPB, templates);
exports.tXzPB = tXzPB;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[294]);