var pageComponent =
webpackJsonppageComponent([13],{

/***/ 278:
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

var _indexSoy = __webpack_require__(279);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cNynE = function (_Component) {
  _inherits(cNynE, _Component);

  function cNynE() {
    _classCallCheck(this, cNynE);

    return _possibleConstructorReturn(this, (cNynE.__proto__ || Object.getPrototypeOf(cNynE)).apply(this, arguments));
  }

  return cNynE;
}(_metalComponent2.default);

;

_metalSoy2.default.register(cNynE, _indexSoy2.default);

exports.default = cNynE;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.cNynE = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace cNynE.
   * @public
   */

  goog.module('cNynE.incrementaldom');

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
    var param680 = function param680() {
      ie_open('h6');
      var dyn32 = opt_data.page.description;
      if (typeof dyn32 == 'function') dyn32();else if (dyn32 != null) itext(dyn32);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is a Stream?');
      ie_close('h2');
      ie_open('p');
      itext('In a functional reactive world, streams are lists of events over time. But in Apex, with code running in its own execution context, we can hardly build an asynchronous stream. So in Stream.apex, we have only synchronous streams, which are just lists.');
      ie_close('p');
      ie_open('p');
      itext('R.apex has already tons of functions to operate on lists, and then what is the point to build a stream?');
      ie_close('p');
      ie_open('p');
      itext('Well, streams are actully event-driven lists. In R.apex, we do a ');
      ie_open('code');
      itext('map');
      ie_close('code');
      itext(' on the list, and get a new list. Then we operate on the new list, and continue. In Stream.apex, event-driven lists are different. Streams do not need to create any intermediate lists because they just work in place. When an element in a list is processed, it is treated as an event, and passed through all the operations in the stream chains. This goes on until this single element is fully processed, before the next element gets fired. In this way, streams are modelled like event-driven lists, and each stream receives events and notifies events.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Subscription');
      ie_close('h2');
      ie_open('p');
      itext('In Stream.apex, streams are just ');
      ie_open('code');
      itext('observables');
      ie_close('code');
      itext(' that emit events. We have ');
      ie_open('code');
      itext('observers');
      ie_close('code');
      itext(' that receive these events.');
      ie_close('p');
      ie_open('p');
      itext('Here is how we build an observer with Funcs.');
      ie_close('p');
      $templateAlias2({ code: 'Stream.Observer ob = new Stream.FuncObserver(new OnNextFunc(), new OnErrorFunc(), new OnCompleteFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Then we subscribe this observer to the observable.');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .subscribe(ob);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The observer may have ');
      ie_open('code');
      itext('onNext');
      ie_close('code');
      itext(', ');
      ie_open('code');
      itext('onError');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('onComplete');
      ie_close('code');
      itext(' implemented to handle stream events.');
      ie_close('p');
      ie_open('p');
      itext('For simplicity\'s sake, we can also subscribe using Funcs directly.');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .subscribe(R.debug, R.debug, R.debug);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Lazy Stream');
      ie_close('h2');
      ie_open('p');
      itext('Streams are lazy in that they only emit values when an observer subscribes them. To check more on lazy streams, please refer to ');
      ie_open('a', null, null, 'href', 'http://reactivex.io');
      itext('RxJs');
      ie_close('a');
      itext(';');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Stream Operations');
      ie_close('h2');
      ie_open('p');
      itext('Streams are still built in a functional reactive style. We can chain streams using the fluent API like this:');
      ie_close('p');
      $templateAlias2({ code: 'Stream.with(1, 2, 3)\n    .startWith(Stream.of(0))\n    .concatOther(Stream.range(4, 2))\n    .filter(R.lt.apply(R.placeholder, 4))\n    .mapBy(R.inc)\n    .subscribe(R.debug);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Stream Subjects');
      ie_close('h2');
      ie_open('p');
      itext('Stream subjects are hot streams that can multicast events. We can use stream subjects like this:');
      ie_close('p');
      $templateAlias2({ code: 'Stream.Subject s = new Stream.Subject();\ns.subscribe(R.debug.apply(\'No.1\'));\ns.subscribe(R.debug.apply(\'No.2\'));\n\ns.next(1);\ns.next(2);\n\n// No.1, 1\n// No.2, 1\n// No.1, 2\n// No.2, 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param680 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'cNynE.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var cNynE = function (_Component) {
  _inherits(cNynE, _Component);

  function cNynE() {
    _classCallCheck(this, cNynE);

    return _possibleConstructorReturn(this, (cNynE.__proto__ || Object.getPrototypeOf(cNynE)).apply(this, arguments));
  }

  return cNynE;
}(_metalComponent2.default);

_metalSoy2.default.register(cNynE, templates);
exports.cNynE = cNynE;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[278]);