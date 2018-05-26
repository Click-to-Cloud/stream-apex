var pageComponent =
webpackJsonppageComponent([17],{

/***/ 270:
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

var _funcsSoy = __webpack_require__(271);

var _funcsSoy2 = _interopRequireDefault(_funcsSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var raKQj = function (_Component) {
  _inherits(raKQj, _Component);

  function raKQj() {
    _classCallCheck(this, raKQj);

    return _possibleConstructorReturn(this, (raKQj.__proto__ || Object.getPrototypeOf(raKQj)).apply(this, arguments));
  }

  return raKQj;
}(_metalComponent2.default);

;

_metalSoy2.default.register(raKQj, _funcsSoy2.default);

exports.default = raKQj;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.raKQj = undefined;

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

  // This file was automatically generated from funcs.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace raKQj.
   * @public
   */

  goog.module('raKQj.incrementaldom');

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
    var param376 = function param376() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('create');
      ie_close('h2');
      ie_open('p');
      itext('Create from stream source');
      ie_close('p');
      $templateAlias2({ code: 'Stream s = (Stream)Stream.Funcs.create.run(new CustomSource());', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('ofData');
      ie_close('h2');
      ie_open('p');
      itext('Create from value');
      ie_close('p');
      $templateAlias2({ code: 'Stream s = (Stream)Stream.Funcs.ofData.run(\'abc\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('throwError');
      ie_close('h2');
      ie_open('p');
      itext('Create from error');
      ie_close('p');
      $templateAlias2({ code: 'Stream s = (Stream)Stream.Funcs.throwError.run(\'error\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('empty');
      ie_close('h2');
      ie_open('p');
      itext('Create an empty stream');
      ie_close('p');
      $templateAlias2({ code: 'Stream s = (Stream)Stream.Funcs.empty.run();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('never');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream that does not emit error or complete event.');
      ie_close('p');
      $templateAlias2({ code: 'Stream s = (Stream)Stream.Funcs.never.run();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('fromData');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream from a collection');
      ie_close('p');
      $templateAlias2({ code: 'Stream s = (Stream)Stream.Funcs.fromData.run(new List<Object>{ 1, 2, 3 });', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('with');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream from values');
      ie_close('p');
      $templateAlias2({ code: 'Stream s = (Stream)Stream.Funcs.with.run(1, 2, 3);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('range');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream from ranges of values');
      ie_close('p');
      $templateAlias2({ code: 'Stream s = (Stream)Stream.Funcs.range.run(1, 4);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('generate');
      ie_close('h2');
      ie_open('p');
      itext('Generate a stream with the Funcs');
      ie_close('p');
      $templateAlias2({ code: 'Stream s = (Stream)Stream.Funcs.generate.run(0, R.lt.apply(R.placeholder, 3), R.inc);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('concat');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream by concatenating other streams');
      ie_close('p');
      $templateAlias2({ code: 'Stream s = (Stream)Stream.Funcs.concat.run(new List<Stream>{ Stream.of(1), Stream.of(2) });', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param376 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'raKQj.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var raKQj = function (_Component) {
  _inherits(raKQj, _Component);

  function raKQj() {
    _classCallCheck(this, raKQj);

    return _possibleConstructorReturn(this, (raKQj.__proto__ || Object.getPrototypeOf(raKQj)).apply(this, arguments));
  }

  return raKQj;
}(_metalComponent2.default);

_metalSoy2.default.register(raKQj, templates);
exports.raKQj = raKQj;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);