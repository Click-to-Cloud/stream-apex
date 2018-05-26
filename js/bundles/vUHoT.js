var pageComponent =
webpackJsonppageComponent([18],{

/***/ 268:
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

var _creationSoy = __webpack_require__(269);

var _creationSoy2 = _interopRequireDefault(_creationSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vUHoT = function (_Component) {
  _inherits(vUHoT, _Component);

  function vUHoT() {
    _classCallCheck(this, vUHoT);

    return _possibleConstructorReturn(this, (vUHoT.__proto__ || Object.getPrototypeOf(vUHoT)).apply(this, arguments));
  }

  return vUHoT;
}(_metalComponent2.default);

;

_metalSoy2.default.register(vUHoT, _creationSoy2.default);

exports.default = vUHoT;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.vUHoT = undefined;

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

  // This file was automatically generated from creation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace vUHoT.
   * @public
   */

  goog.module('vUHoT.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('create');
      ie_close('h2');
      ie_open('p');
      itext('Create from stream source');
      ie_close('p');
      $templateAlias2({ code: 'Stream.create(new CustomSource())\n     .subscribe(R.debug);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('of');
      ie_close('h2');
      ie_open('p');
      itext('Create from value');
      ie_close('p');
      $templateAlias2({ code: 'Stream.of(\'abc\')\n     .subscribe(R.debug);\n// abc', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('throwError');
      ie_close('h2');
      ie_open('p');
      itext('Create from error');
      ie_close('p');
      $templateAlias2({ code: 'Stream.throwError(\'test error\')\n     .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// (Error: , test error)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('empty');
      ie_close('h2');
      ie_open('p');
      itext('Create an empty stream');
      ie_close('p');
      $templateAlias2({ code: 'Stream.empty()\n     .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('never');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream that does not emit error or complete event.');
      ie_close('p');
      $templateAlias2({ code: 'Stream.never()\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('fromData');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream from a collection');
      ie_close('p');
      $templateAlias2({ code: 'Stream.fromData(new List<Object>{ 1, 2, 3 })\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('with');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream from values');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('with(Object)');
      ie_close('td');
      ie_open('td');
      itext('Create a stream from one value');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('with(Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Create a stream from two values');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('with(Object, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Create a stream from three values');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('range');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream from ranges of values');
      ie_close('p');
      $templateAlias2({ code: 'Stream.range(1, 3)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('generate');
      ie_close('h2');
      ie_open('p');
      itext('Generate a stream with the Funcs');
      ie_close('p');
      $templateAlias2({ code: 'Stream.generate(1, R.lt.apply(R.placeholder, 4), R.inc)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('concat');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream by concatenating other streams');
      ie_close('p');
      $templateAlias2({ code: 'Stream.concat(new List<Stream>{ Stream.of(1), Stream.of(2), Stream.of(3) })\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('concat(Stream)');
      ie_close('td');
      ie_open('td');
      itext('Concat one stream');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('concat(Stream, Stream)');
      ie_close('td');
      ie_open('td');
      itext('Concat two streams');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('concat(Stream, Stream, Stream)');
      ie_close('td');
      ie_open('td');
      itext('Concat three streams');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'vUHoT.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var vUHoT = function (_Component) {
  _inherits(vUHoT, _Component);

  function vUHoT() {
    _classCallCheck(this, vUHoT);

    return _possibleConstructorReturn(this, (vUHoT.__proto__ || Object.getPrototypeOf(vUHoT)).apply(this, arguments));
  }

  return vUHoT;
}(_metalComponent2.default);

_metalSoy2.default.register(vUHoT, templates);
exports.vUHoT = vUHoT;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);