var pageComponent =
webpackJsonppageComponent([1],{

/***/ 296:
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

var _step_7Soy = __webpack_require__(297);

var _step_7Soy2 = _interopRequireDefault(_step_7Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hzgEZ = function (_Component) {
  _inherits(hzgEZ, _Component);

  function hzgEZ() {
    _classCallCheck(this, hzgEZ);

    return _possibleConstructorReturn(this, (hzgEZ.__proto__ || Object.getPrototypeOf(hzgEZ)).apply(this, arguments));
  }

  return hzgEZ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(hzgEZ, _step_7Soy2.default);

exports.default = hzgEZ;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.hzgEZ = undefined;

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

  // This file was automatically generated from step_7.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace hzgEZ.
   * @public
   */

  goog.module('hzgEZ.incrementaldom');

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
    var param833 = function param833() {
      ie_open('h2');
      var dyn40 = opt_data.page.title;
      if (typeof dyn40 == 'function') dyn40();else if (dyn40 != null) itext(dyn40);
      ie_close('h2');
      ie_open('p');
      itext('Subjects are actually another kind of streams, hot streams. They work quite similar to lazy streams, except that they do not maintain the events inside them. To be more clearly, subjects receive events and then emit them to all the registered observers. When one observer subscribes the subject, the subject will not emit the previously emittd events to the new observer. It will only emit the events fired after the observer subscribed.');
      ie_close('p');
      ie_open('p');
      itext('Subjects can multicast events to observers, and they are called ');
      ie_open('strong');
      itext('hot streams');
      ie_close('strong');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: 'Stream.Subject s = new Stream.Subject();\ns.subscribe(R.debug.apply(\'No.1\'));\ns.subscribe(R.debug.apply(\'No.2\'));\n\ns.next(1);\ns.next(2);\n\n// No.1, 1\n// No.2, 1\n// No.1, 2\n// No.2, 2', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param833 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'hzgEZ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var hzgEZ = function (_Component) {
  _inherits(hzgEZ, _Component);

  function hzgEZ() {
    _classCallCheck(this, hzgEZ);

    return _possibleConstructorReturn(this, (hzgEZ.__proto__ || Object.getPrototypeOf(hzgEZ)).apply(this, arguments));
  }

  return hzgEZ;
}(_metalComponent2.default);

_metalSoy2.default.register(hzgEZ, templates);
exports.hzgEZ = hzgEZ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[296]);