var pageComponent =
webpackJsonppageComponent([15],{

/***/ 274:
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

var _operationSoy = __webpack_require__(275);

var _operationSoy2 = _interopRequireDefault(_operationSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mipud = function (_Component) {
  _inherits(mipud, _Component);

  function mipud() {
    _classCallCheck(this, mipud);

    return _possibleConstructorReturn(this, (mipud.__proto__ || Object.getPrototypeOf(mipud)).apply(this, arguments));
  }

  return mipud;
}(_metalComponent2.default);

;

_metalSoy2.default.register(mipud, _operationSoy2.default);

exports.default = mipud;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.mipud = undefined;

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

  // This file was automatically generated from operation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace mipud.
   * @public
   */

  goog.module('mipud.incrementaldom');

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
    var param453 = function param453() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('concatOther');
      ie_close('h2');
      ie_open('p');
      itext('Concatenate the other streams');
      ie_close('p');
      $templateAlias2({ code: 'Stream.of(1)\n    .concatOther(new List<Stream>{ Stream.with(2, 3) })\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
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
      itext('concatOther(List<Stream>)');
      ie_close('td');
      ie_open('td');
      itext('Concat list of streams');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('concatOther(Stream)');
      ie_close('td');
      ie_open('td');
      itext('Concat one stream');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('concatOther(Stream, Stream)');
      ie_close('td');
      ie_open('td');
      itext('Concat two streams');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('concatOther(Stream, Stream, Stream)');
      ie_close('td');
      ie_open('td');
      itext('Concat three streams');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('mapBy');
      ie_close('h2');
      ie_open('p');
      itext('Map the Func over the stream elements');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .mapBy(R.inc)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 2\n// 3\n// 4\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('flatMap');
      ie_close('h2');
      ie_open('p');
      itext('Map the Func and flatten the stream');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .flatMap(Stream.Funcs.ofData.apply(4))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 4\n// 4\n// 4\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('mapTo');
      ie_close('h2');
      ie_open('p');
      itext('Map the element to the value');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .mapTo(4)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 4\n// 4\n// 4\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('filter');
      ie_close('h2');
      ie_open('p');
      itext('Filter the stream');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .filter(R.equals.apply(2))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 2\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('scan');
      ie_close('h2');
      ie_open('p');
      itext('Similar to \'reduce\', but emit the intermediate results');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .scan(R.add, 0)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 3\n// 6\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('reduce');
      ie_close('h2');
      ie_open('p');
      itext('Reduce over the stream elements');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .reduce(R.add, 0)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 6\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('catchError');
      ie_close('h2');
      ie_open('p');
      itext('Catch the error and return the recovered value');
      ie_close('p');
      $templateAlias2({ code: 'Stream.throwError(\'error\')\n    .catchError(R.constant.apply(\'success\'))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// success\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('count');
      ie_close('h2');
      ie_open('p');
      itext('Get the count of the stream items');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .count()\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
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
      itext('count()');
      ie_close('td');
      ie_open('td');
      itext('Count all');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('count(Func)');
      ie_close('td');
      ie_open('td');
      itext('Count all that matches the predicate');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('defaultIfEmpty');
      ie_close('h2');
      ie_open('p');
      itext('Set the default value if the stream is empty');
      ie_close('p');
      $templateAlias2({ code: 'Stream.empty()\n    .defaultIfEmpty(1)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('distinct');
      ie_close('h2');
      ie_open('p');
      itext('Get a stream of distinct values, according to the key calculated by the Func');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .distinct(R.mod.apply(R.placeholder, 2))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// Completed', mode: 'javascript' }, null, opt_ijData);
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
      itext('distinct()');
      ie_close('td');
      ie_open('td');
      itext('Get a stream of distinct values');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('distinct(Func)');
      ie_close('td');
      ie_open('td');
      itext('Get distinct values based on the compare Func that returns Boolean');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '12');
      ie_open('h2');
      itext('distinctUntilChanged');
      ie_close('h2');
      ie_open('p');
      itext('Get a stream of values, distinct from the last one');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 1)\n    .distinctUntilChanged(R.equals, R.identity)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// 1\n// Completed', mode: 'javascript' }, null, opt_ijData);
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
      itext('distinctUntilChanged(Func, Func)');
      ie_close('td');
      ie_open('td');
      itext('Get distinct values based on compare Func and selector Func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('distinctUntilChanged(Func)');
      ie_close('td');
      ie_open('td');
      itext('Get distinct values based on selector Func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('distinctUntilChanged()');
      ie_close('td');
      ie_open('td');
      itext('Get distinct values');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '13');
      ie_open('h2');
      itext('distinctUntilKeyChanged');
      ie_close('h2');
      ie_open('p');
      itext('Get a stream of values, distinct from the last one by key value');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(new Map<String, Object>{ \'name\' => \'a\' }, new Map<String, Object>{ \'name\' => \'a\' })\n    .distinctUntilKeyChanged(\'name\', R.equals)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// {name=a}\n// Completed', mode: 'javascript' }, null, opt_ijData);
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
      itext('distinctUntilKeyChanged(String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Get distinct values based on key and compare Func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('distinctUntilKeyChanged(String)');
      ie_close('td');
      ie_open('td');
      itext('Get distinct values based on key');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '14');
      ie_open('h2');
      itext('elementAt');
      ie_close('h2');
      ie_open('p');
      itext('Get the Nth element, return default value if not found');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .elementAt(3, 4)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 4\n// Completed', mode: 'javascript' }, null, opt_ijData);
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
      itext('elementAt(Integer, Object)');
      ie_close('td');
      ie_open('td');
      itext('Get element at the index with default value');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('elementAt(Integer)');
      ie_close('td');
      ie_open('td');
      itext('Get element at the index');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '15');
      ie_open('h2');
      itext('every');
      ie_close('h2');
      ie_open('p');
      itext('Check if every element matches the predicate');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .every(R.lt.apply(R.placeholder, 4))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// true\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '16');
      ie_open('h2');
      itext('join');
      ie_close('h2');
      ie_open('p');
      itext('Flatten nested Streams');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, Stream.of(2), 3)\n    .join()\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '17');
      ie_open('h2');
      itext('finalize');
      ie_close('h2');
      ie_open('p');
      itext('Register a Func that will be called either after completion or error');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .finalize(R.debug.apply(4))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// 3\n// 4\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '18');
      ie_open('h2');
      itext('find');
      ie_close('h2');
      ie_open('p');
      itext('Find the first element that matches the predicate');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .find(R.equals.apply(2))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 2\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '19');
      ie_open('h2');
      itext('findIndex');
      ie_close('h2');
      ie_open('p');
      itext('Find the index of the first element that matches the predicate');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .findIndex(R.equals.apply(2))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '20');
      ie_open('h2');
      itext('first');
      ie_close('h2');
      ie_open('p');
      itext('Find the first element that matches the predicate, otherwise return the default value');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .first(R.equals.apply(4), 4)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 4\n// Completed', mode: 'javascript' }, null, opt_ijData);
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
      itext('first(Func, Object)');
      ie_close('td');
      ie_open('td');
      itext('Find the first matching with default value');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('first(Func)');
      ie_close('td');
      ie_open('td');
      itext('Find the first matching');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '21');
      ie_open('h2');
      itext('last');
      ie_close('h2');
      ie_open('p');
      itext('Find the last element that matches the predicate, otherwise return the default value');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .last(R.equals.apply(4), 4)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 4\n// Completed', mode: 'javascript' }, null, opt_ijData);
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
      itext('last(Func, Object)');
      ie_close('td');
      ie_open('td');
      itext('Find the last matching with default value');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('last(Func)');
      ie_close('td');
      ie_open('td');
      itext('Find the last matching');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '22');
      ie_open('h2');
      itext('groupBy');
      ie_close('h2');
      ie_open('p');
      itext('Group the elements into a map');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .groupBy(R.mod.apply(R.placeholder, 2))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// {0=(2), 1=(1, 3)}\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '23');
      ie_open('h2');
      itext('ignoreElements');
      ie_close('h2');
      ie_open('p');
      itext('Create a stream that ignores all elements');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .ignoreElements()\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '24');
      ie_open('h2');
      itext('isEmpty');
      ie_close('h2');
      ie_open('p');
      itext('Check if the stream is empty');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .isEmpty()\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// false\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '25');
      ie_open('h2');
      itext('max');
      ie_close('h2');
      ie_open('p');
      itext('Get the max element according to the comparator Func that returns an Integer');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .max(R.compare)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
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
      itext('max(Func)');
      ie_close('td');
      ie_open('td');
      itext('Get max value with the comparator Func returning Integer');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('max()');
      ie_close('td');
      ie_open('td');
      itext('Get the max value');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '26');
      ie_open('h2');
      itext('min');
      ie_close('h2');
      ie_open('p');
      itext('Get the min element according to the comparator Func that returns an Integer');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .min(R.compare)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
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
      itext('min(Func)');
      ie_close('td');
      ie_open('td');
      itext('Get min value with the comparator Func returning Integer');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('min()');
      ie_close('td');
      ie_open('td');
      itext('Get the min value');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '27');
      ie_open('h2');
      itext('onErrorResumeNext');
      ie_close('h2');
      ie_open('p');
      itext('Like \'concat\', but continue to the next stream only when the first stream has errors');
      ie_close('p');
      $templateAlias2({ code: 'Stream.throwError(\'error\')\n    .onErrorResumeNext(new List<Stream>{ Stream.of(\'success\') })\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// success\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '28');
      ie_open('h2');
      itext('pairwise');
      ie_close('h2');
      ie_open('p');
      itext('Make pairs from adjacent stream items');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .pairwise()\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// Pair:[fst=1, snd=2]\n// Pair:[fst=2, snd=3]\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '29');
      ie_open('h2');
      itext('pluck');
      ie_close('h2');
      ie_open('p');
      itext('Pluck the value from the stream elements');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(new Map<String, Object>{ \'name\' => \'a\' })\n    .pluck(\'name\')\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// a\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '30');
      ie_open('h2');
      itext('repeat');
      ie_close('h2');
      ie_open('p');
      itext('Repeat the stream for N times');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .repeat(2)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// 3\n// 1\n// 2\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '31');
      ie_open('h2');
      itext('single');
      ie_close('h2');
      ie_open('p');
      itext('Get the single element from the stream that matches the predicate');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .single(R.equals.apply(2))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 2\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '32');
      ie_open('h2');
      itext('skip');
      ie_close('h2');
      ie_open('p');
      itext('Skip N elements from the stream');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .skip(2)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '33');
      ie_open('h2');
      itext('skipLast');
      ie_close('h2');
      ie_open('p');
      itext('Skip N elements from the last of the stream');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .skipLast(2)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '34');
      ie_open('h2');
      itext('skipWhile');
      ie_close('h2');
      ie_open('p');
      itext('Skip elements while the predicate is true');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .skipWhile(R.lt.apply(R.placeholder, 3))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '35');
      ie_open('h2');
      itext('take');
      ie_close('h2');
      ie_open('p');
      itext('Take the first N elements from the stream');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .take(2)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '36');
      ie_open('h2');
      itext('takeLast');
      ie_close('h2');
      ie_open('p');
      itext('Take the last N elements from the stream');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .takeLast(2)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 2\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '37');
      ie_open('h2');
      itext('takeWhile');
      ie_close('h2');
      ie_open('p');
      itext('Take elements while the predicate is true');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .takeWhile(R.lt.apply(R.placeholder, 3))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 2\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '38');
      ie_open('h2');
      itext('startWith');
      ie_close('h2');
      ie_open('p');
      itext('Append the other stream to the stream');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .startWith(Stream.of(0))\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 0\n// 1\n// 2\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '39');
      ie_open('h2');
      itext('tap');
      ie_close('h2');
      ie_open('p');
      itext('Pass the value through the Func');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .tap(R.debug)\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// 1\n// 1\n// 2\n// 2\n// 3\n// 3\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '40');
      ie_open('h2');
      itext('toArray');
      ie_close('h2');
      ie_open('p');
      itext('Convert the strema elements to a list');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .toArray()\n    .subscribe(R.debug, R.debug.apply(\'Error: \'), R.debug.apply(\'Completed\'));\n// (1, 2, 3)\n// Completed', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param453 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'mipud.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var mipud = function (_Component) {
  _inherits(mipud, _Component);

  function mipud() {
    _classCallCheck(this, mipud);

    return _possibleConstructorReturn(this, (mipud.__proto__ || Object.getPrototypeOf(mipud)).apply(this, arguments));
  }

  return mipud;
}(_metalComponent2.default);

_metalSoy2.default.register(mipud, templates);
exports.mipud = mipud;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[274]);