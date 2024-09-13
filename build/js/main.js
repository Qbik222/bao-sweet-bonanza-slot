"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var wheelBtn = document.querySelector(".land__wheel-btn");
var wheelSector = document.querySelector(".land__wheel-sector");
var popup = document.querySelector(".popup");
var popupBtn = document.querySelector(".popup__btn");

// Ініціалізація звуків
var backgroundMusic = new Audio('music.mp3'); // фоновий звук, грає постійно
var reelSound = new Audio('reels.mp3'); // звук кручення колеса
var reelStopSound = new Audio('reel-stop.mp3'); // звук коли випадає сектор
var popupSound = new Audio('popup.mp3'); // звук для попапу

// Функція для запуску фонової музики
function playBackgroundMusic() {
  backgroundMusic.play()["catch"](function (err) {
    return console.log(err);
  });
}
backgroundMusic.addEventListener('ended', function () {
  playBackgroundMusic();
});

// так як сучасні браузери лочать автовідтворення музики на сайтах, вішаєм слухачі подій які запустять її
document.addEventListener('mousemove', playBackgroundMusic, {
  once: true
});
document.addEventListener('mouseenter', playBackgroundMusic, {
  once: true
});
document.addEventListener('click', playBackgroundMusic, {
  once: true
});
document.addEventListener('touchstart', playBackgroundMusic, {
  once: true
});
playBackgroundMusic();
popupBtn.addEventListener("click", function () {
  if (popup.classList.contains("_first")) {
    popup.classList.remove("_opacity", "_zIndex");
    wheelBtn.style.pointerEvents = "initial";
  }
});
var spinCounter = 0;
function spinWheel(wheel, anim, position, popup, btn) {
  wheel.classList.add(anim);
  function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
  //звук кручення колеса
  setTimeout(function () {
    reelSound.play();
  }, 1000);
  function playSounds() {
    return _playSounds.apply(this, arguments);
  }
  function _playSounds() {
    _playSounds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            reelSound.pause();
            reelSound.currentTime = 0;
            _context.next = 4;
            return sleep(1800);
          case 4:
            // звук зупинки колеса
            reelStopSound.play();
            _context.next = 7;
            return sleep(600);
          case 7:
            // Відтворюємо звук для попапу
            popupSound.play();
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _playSounds.apply(this, arguments);
  }
  setTimeout(playSounds, 4800);
  wheel.addEventListener("animationend", function () {
    wheel.classList.remove(anim);
    wheel.style.transform = "rotate(".concat(position, "deg)");
    popup.classList.add("_opacity", "_zIndex");
    btn.classList.add("_btnPulse");
  }, {
    once: true
  });
}
wheelBtn.addEventListener("click", function () {
  wheelBtn.style.pointerEvents = "none";
  if (spinCounter === 0) {
    wheelBtn.classList.remove("_btnPulse");
    spinWheel(wheelSector, "firstSpin", 1620, popup, wheelBtn);
    popup.classList.add("_first");
    spinCounter++;
    return;
  }
  if (spinCounter === 1) {
    wheelBtn.classList.remove("_btnPulse");
    spinWheel(wheelSector, "secondSpin", 2744.5, popup, wheelBtn);
    popup.classList.add("_second");
    popup.classList.remove("_first");
    setTimeout(function () {
      document.querySelector(".all-link").classList.remove("_hidden");
    }, 8500);
    spinCounter++;
    return;
  }
});

// parallax
var moveSpeed = 260;
if (window.innerWidth > 950) {
  document.addEventListener("mousemove", parallax);
}
function parallax(e) {
  document.querySelectorAll(".parallax").forEach(function (item) {
    var moving_value = item.getAttribute("data-value");
    var y = e.clientX * moving_value / moveSpeed;
    var x = e.clientY * moving_value / moveSpeed;
    var z = e.clientY * moving_value / moveSpeed * 2;
    item.style.transform = "perspective(300px) translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)");
  });
}

// TDS script

(function () {
  var url = new URL(window.location.href);
  var params = ['l', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'param1', 'param2', 'param3', 'param4', 'creative_type', 'creative_id'];
  var linkParams = ['affid', 'cpaid']; // ищем в url redirectUrl в url:

  if (url.searchParams.has('redirectUrl')) {
    var redirectUrl = new URL(url.searchParams.get('redirectUrl'));
    if (redirectUrl.href.match(/\//g).length === 4 && redirectUrl.searchParams.get('l')) {
      //если ссылка в ссылка redirectUrl корректная
      localStorage.setItem('redirectUrl', redirectUrl.href); // указываем точкой входа домен с протоколом из redirectUrl
    }
  }

  params.forEach(function (param) {
    if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param));
  });
  linkParams.forEach(function (linkParam) {
    if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam));
  });
  window.addEventListener('click', function (e) {
    var link,
      parent = e.target.closest('a');
    if (parent.getAttribute('href') !== 'https://tds.favbet.partners') {
      return;
    }
    if (parent) {
      e.preventDefault();
      var affid = localStorage.getItem('affid');
      var cpaid = localStorage.getItem('cpaid');
      if (localStorage.getItem("redirectUrl")) {
        link = new URL(localStorage.getItem("redirectUrl"));
      } else {
        link = new URL(parent.href);
        if (affid && cpaid) {
          link.pathname = '/' + affid + '/' + cpaid;
        }
      }
      params.forEach(function (param) {
        if (url.searchParams.has(param)) {
          link.searchParams.set(param, localStorage.getItem(param));
        }
      });
      document.location.href = link;
    }
  });
})();

/// for test

var popup1 = document.querySelector(".popup1");
var popup2 = document.querySelector(".popup2");
var close = document.querySelector(".closePopup");
popup1.addEventListener("click", function () {
  popup.classList.add("_opacity", "_zIndex", "_first");
  if (popup.classList.contains("_second")) {
    popup.classList.remove("_second");
    popup.classList.add("_first");
    return;
  }

  // else{
  //     popup.classList.add("_first")
  // }
});

popup2.addEventListener("click", function () {
  popup.classList.add("_opacity", "_zIndex", "_second");
  if (popup.classList.contains("_first")) {
    popup.classList.add("_second");
    popup.classList.remove("_first");
  }
});
close.addEventListener("click", function () {
  if (popup.classList.contains("_opacity") && popup.classList.contains("_zIndex")) {
    popup.classList.remove("_opacity", "_zIndex", "_second");
  }
});
function getDeviceInfo() {
  // Отримуємо розширення екрану
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;

  // Отримуємо інформацію про операційну систему
  var userAgent = navigator.userAgent;
  var os = "Unknown OS";
  if (userAgent.indexOf("Win") !== -1) os = "Windows";else if (userAgent.indexOf("Mac") !== -1) os = "MacOS";else if (userAgent.indexOf("X11") !== -1) os = "UNIX";else if (userAgent.indexOf("Linux") !== -1) os = "Linux";else if (userAgent.indexOf("Android") !== -1) os = "Android";else if (userAgent.indexOf("like Mac") !== -1) os = "iOS";

  // Виводимо інформацію в консоль
  console.log("Операційна система:", os);
  console.log("Розширення екрану:", screenWidth + "x" + screenHeight);
}
getDeviceInfo();
function getDevicePixelRatio() {
  return window.devicePixelRatio || 1;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2hlZWxCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aGVlbFNlY3RvciIsInBvcHVwIiwicG9wdXBCdG4iLCJiYWNrZ3JvdW5kTXVzaWMiLCJBdWRpbyIsInJlZWxTb3VuZCIsInJlZWxTdG9wU291bmQiLCJwb3B1cFNvdW5kIiwicGxheUJhY2tncm91bmRNdXNpYyIsInBsYXkiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInNwaW5Db3VudGVyIiwic3BpbldoZWVsIiwid2hlZWwiLCJhbmltIiwicG9zaXRpb24iLCJidG4iLCJhZGQiLCJzbGVlcCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicGxheVNvdW5kcyIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJ0cmFuc2Zvcm0iLCJtb3ZlU3BlZWQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFyYWxsYXgiLCJlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwibW92aW5nX3ZhbHVlIiwiZ2V0QXR0cmlidXRlIiwieSIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInoiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXJhbXMiLCJsaW5rUGFyYW1zIiwic2VhcmNoUGFyYW1zIiwiaGFzIiwicmVkaXJlY3RVcmwiLCJnZXQiLCJtYXRjaCIsImxlbmd0aCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwYXJhbSIsImxpbmtQYXJhbSIsImxpbmsiLCJwYXJlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJhZmZpZCIsImdldEl0ZW0iLCJjcGFpZCIsInBhdGhuYW1lIiwic2V0IiwicG9wdXAxIiwicG9wdXAyIiwiY2xvc2UiLCJnZXREZXZpY2VJbmZvIiwic2NyZWVuV2lkdGgiLCJzY3JlZW4iLCJ3aWR0aCIsInNjcmVlbkhlaWdodCIsImhlaWdodCIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsIm9zIiwiaW5kZXhPZiIsImdldERldmljZVBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBREEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUMzRCxJQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQ2pFLElBQU1FLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQzlDLElBQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDOztBQUV0RDtBQUNBLElBQU1JLGVBQWUsR0FBRyxJQUFJQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNoRCxJQUFNQyxTQUFTLEdBQUcsSUFBSUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDMUMsSUFBTUUsYUFBYSxHQUFHLElBQUlGLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQ2xELElBQU1HLFVBQVUsR0FBRyxJQUFJSCxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7QUFFM0M7QUFDQSxTQUFTSSxtQkFBbUIsR0FBRztFQUMzQkwsZUFBZSxDQUFDTSxJQUFJLEVBQUUsU0FBTSxDQUFDLFVBQUFDLEdBQUc7SUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0VBQUEsRUFBQztBQUN6RDtBQUVBUCxlQUFlLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0VBQ2pETCxtQkFBbUIsRUFBRTtBQUN6QixDQUFDLENBQUM7O0FBRUY7QUFDQVYsUUFBUSxDQUFDZSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUVMLG1C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QUMsRUFBRUQsRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUNsRCxJQUFJRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRUQsRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUNqRCxJQUFJRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRUQsRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUNwRCxJQUFJRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRUQsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUN4RCxJQUFJRixTQUFTLENBQUNHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRUQsRUFBRSxHQUFHLEtBQUs7O0VBRXpEO0VBQ0E3RSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTRFLEVBQUUsQ0FBQztFQUN0QzdFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixFQUFFcUUsV0FBVyxHQUFHLEdBQUcsR0FBR0csWUFBWSxDQUFDO0FBQ3ZFO0FBRUFKLGFBQWEsRUFBRTtBQUdmLFNBQVNVLG1CQUFtQixHQUFHO0VBQzNCLE9BQU9yRCxNQUFNLENBQUNzRCxnQkFBZ0IsSUFBSSxDQUFDO0FBQ3ZDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3aGVlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZF9fd2hlZWwtYnRuXCIpO1xuY29uc3Qgd2hlZWxTZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmRfX3doZWVsLXNlY3RvclwiKTtcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbmNvbnN0IHBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fYnRuXCIpO1xuXG4vLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDQt9Cy0YPQutGW0LJcbmNvbnN0IGJhY2tncm91bmRNdXNpYyA9IG5ldyBBdWRpbygnbXVzaWMubXAzJyk7IC8vINGE0L7QvdC+0LLQuNC5INC30LLRg9C6LCDQs9GA0LDRlCDQv9C+0YHRgtGW0LnQvdC+XG5jb25zdCByZWVsU291bmQgPSBuZXcgQXVkaW8oJ3JlZWxzLm1wMycpOyAvLyDQt9Cy0YPQuiDQutGA0YPRh9C10L3QvdGPINC60L7Qu9C10YHQsFxuY29uc3QgcmVlbFN0b3BTb3VuZCA9IG5ldyBBdWRpbygncmVlbC1zdG9wLm1wMycpOyAvLyDQt9Cy0YPQuiDQutC+0LvQuCDQstC40L/QsNC00LDRlCDRgdC10LrRgtC+0YBcbmNvbnN0IHBvcHVwU291bmQgPSBuZXcgQXVkaW8oJ3BvcHVwLm1wMycpOyAvLyDQt9Cy0YPQuiDQtNC70Y8g0L/QvtC/0LDQv9GDXG5cbi8vINCk0YPQvdC60YbRltGPINC00LvRjyDQt9Cw0L/Rg9GB0LrRgyDRhNC+0L3QvtCy0L7RlyDQvNGD0LfQuNC60LhcbmZ1bmN0aW9uIHBsYXlCYWNrZ3JvdW5kTXVzaWMoKSB7XG4gICAgYmFja2dyb3VuZE11c2ljLnBsYXkoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG59XG5cbmJhY2tncm91bmRNdXNpYy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIHBsYXlCYWNrZ3JvdW5kTXVzaWMoKTtcbn0pO1xuXG4vLyDRgtCw0Log0Y/QuiDRgdGD0YfQsNGB0L3RliDQsdGA0LDRg9C30LXRgNC4INC70L7Rh9Cw0YLRjCDQsNCy0YLQvtCy0ZbQtNGC0LLQvtGA0LXQvdC90Y8g0LzRg9C30LjQutC4INC90LAg0YHQsNC50YLQsNGFLCDQstGW0YjQsNGU0Lwg0YHQu9GD0YXQsNGH0ZYg0L/QvtC00ZbQuSDRj9C60ZYg0LfQsNC/0YPRgdGC0Y/RgtGMINGX0ZdcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBwbGF5QmFja2dyb3VuZE11c2ljLCB7IG9uY2U6IHRydWUgfSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwbGF5QmFja2dyb3VuZE11c2ljLCB7IG9uY2U6IHRydWUgfSk7XG5wbGF5QmFja2dyb3VuZE11c2ljKClcblxucG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2ZpcnN0XCIpKSB7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIik7XG4gICAgICAgIHdoZWVsQnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICB9XG5cbn0pO1xuXG5sZXQgc3BpbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBzcGluV2hlZWwod2hlZWwsIGFuaW0sIHBvc2l0aW9uLCBwb3B1cCwgYnRuKSB7XG4gICAgd2hlZWwuY2xhc3NMaXN0LmFkZChhbmltKTtcblxuICAgIGZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgICB9XG4gICAgLy/Qt9Cy0YPQuiDQutGA0YPRh9C10L3QvdGPINC60L7Qu9C10YHQsFxuICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIHJlZWxTb3VuZC5wbGF5KCk7XG4gICAgfSwgMTAwMClcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHBsYXlTb3VuZHMoKSB7XG4gICAgICAgIHJlZWxTb3VuZC5wYXVzZSgpO1xuICAgICAgICByZWVsU291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICBhd2FpdCBzbGVlcCgxODAwKTtcblxuICAgICAgICAvLyDQt9Cy0YPQuiDQt9GD0L/QuNC90LrQuCDQutC+0LvQtdGB0LBcbiAgICAgICAgcmVlbFN0b3BTb3VuZC5wbGF5KCk7XG4gICAgICAgIGF3YWl0IHNsZWVwKDYwMCk7XG5cbiAgICAgICAgLy8g0JLRltC00YLQstC+0YDRjtGU0LzQviDQt9Cy0YPQuiDQtNC70Y8g0L/QvtC/0LDQv9GDXG4gICAgICAgIHBvcHVwU291bmQucGxheSgpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KHBsYXlTb3VuZHMsIDQ4MDApO1xuXG5cbiAgICB3aGVlbC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgICAgd2hlZWwuY2xhc3NMaXN0LnJlbW92ZShhbmltKTtcbiAgICAgICAgd2hlZWwuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3Bvc2l0aW9ufWRlZylgO1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiwgXCJfekluZGV4XCIpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9idG5QdWxzZVwiKTtcbiAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG59XG5cbndoZWVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2hlZWxCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIGlmIChzcGluQ291bnRlciA9PT0gMCkge1xuICAgICAgICB3aGVlbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2J0blB1bHNlXCIpO1xuICAgICAgICBzcGluV2hlZWwod2hlZWxTZWN0b3IsIFwiZmlyc3RTcGluXCIsIDE2MjAsIHBvcHVwLCB3aGVlbEJ0bik7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfZmlyc3RcIik7XG4gICAgICAgIHNwaW5Db3VudGVyKys7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3BpbkNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgd2hlZWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9idG5QdWxzZVwiKTtcbiAgICAgICAgc3BpbldoZWVsKHdoZWVsU2VjdG9yLCBcInNlY29uZFNwaW5cIiwgMjc0NC41LCBwb3B1cCwgd2hlZWxCdG4pO1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX3NlY29uZFwiKTtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9maXJzdFwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLWxpbmtcIikuY2xhc3NMaXN0LnJlbW92ZShcIl9oaWRkZW5cIilcbiAgICAgICAgfSwgODUwMClcblxuICAgICAgICBzcGluQ291bnRlcisrO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSk7XG5cbi8vIHBhcmFsbGF4XG5jb25zdCBtb3ZlU3BlZWQgPSAyNjA7XG5cbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk1MCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcGFyYWxsYXgpO1xufVxuXG5mdW5jdGlvbiBwYXJhbGxheChlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYXJhbGxheFwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vdmluZ192YWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKTtcbiAgICAgICAgbGV0IHkgPSAoZS5jbGllbnRYICogbW92aW5nX3ZhbHVlKSAvIG1vdmVTcGVlZDtcbiAgICAgICAgbGV0IHggPSAoZS5jbGllbnRZICogbW92aW5nX3ZhbHVlKSAvIG1vdmVTcGVlZDtcbiAgICAgICAgbGV0IHogPSAoZS5jbGllbnRZICogbW92aW5nX3ZhbHVlKSAvIG1vdmVTcGVlZCAqIDI7XG4gICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHBlcnNwZWN0aXZlKDMwMHB4KSB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWA7XG4gICAgfSk7XG59XG5cblxuLy8gVERTIHNjcmlwdFxuXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICB2YXIgcGFyYW1zID0gWydsJywgJ3V0bV9zb3VyY2UnLCAndXRtX21lZGl1bScsICd1dG1fY2FtcGFpZ24nLCAndXRtX3Rlcm0nLCAndXRtX2NvbnRlbnQnLCAncGFyYW0xJywgJ3BhcmFtMicsICdwYXJhbTMnLCAncGFyYW00JywgJ2NyZWF0aXZlX3R5cGUnLCAnY3JlYXRpdmVfaWQnXTtcbiAgICB2YXIgbGlua1BhcmFtcyA9IFsnYWZmaWQnLCAnY3BhaWQnXTsgLy8g0LjRidC10Lwg0LIgdXJsIHJlZGlyZWN0VXJsINCyIHVybDpcblxuICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcygncmVkaXJlY3RVcmwnKSkge1xuICAgICAgICB2YXIgcmVkaXJlY3RVcmwgPSBuZXcgVVJMKHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdyZWRpcmVjdFVybCcpKTtcblxuICAgICAgICBpZiAocmVkaXJlY3RVcmwuaHJlZi5tYXRjaCgvXFwvL2cpLmxlbmd0aCA9PT0gNCAmJiByZWRpcmVjdFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdsJykpIHtcbiAgICAgICAgICAgIC8v0LXRgdC70Lgg0YHRgdGL0LvQutCwINCyINGB0YHRi9C70LrQsCByZWRpcmVjdFVybCDQutC+0YDRgNC10LrRgtC90LDRj1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlZGlyZWN0VXJsJywgcmVkaXJlY3RVcmwuaHJlZik7IC8vINGD0LrQsNC30YvQstCw0LXQvCDRgtC+0YfQutC+0Lkg0LLRhdC+0LTQsCDQtNC+0LzQtdC9INGBINC/0YDQvtGC0L7QutC+0LvQvtC8INC40LcgcmVkaXJlY3RVcmxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwYXJhbSwgdXJsLnNlYXJjaFBhcmFtcy5nZXQocGFyYW0pKTtcbiAgICB9KTtcblxuICAgIGxpbmtQYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAobGlua1BhcmFtKSB7XG4gICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhsaW5rUGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaW5rUGFyYW0sIHVybC5zZWFyY2hQYXJhbXMuZ2V0KGxpbmtQYXJhbSkpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGxpbmssXG4gICAgICAgICAgICBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdhJyk7XG5cbiAgICAgICAgaWYgKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSAhPT0gJ2h0dHBzOi8vdGRzLmZhdmJldC5wYXJ0bmVycycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBhZmZpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhZmZpZCcpO1xuICAgICAgICAgICAgdmFyIGNwYWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NwYWlkJyk7XG5cbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZGlyZWN0VXJsXCIpKSB7XG4gICAgICAgICAgICAgICAgbGluayA9IG5ldyBVUkwobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWRpcmVjdFVybFwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgVVJMKHBhcmVudC5ocmVmKTtcbiAgICAgICAgICAgICAgICBpZiAoYWZmaWQgJiYgY3BhaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluay5wYXRobmFtZSA9ICcvJyArIGFmZmlkICsgJy8nICsgY3BhaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuc2VhcmNoUGFyYW1zLnNldChwYXJhbSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocGFyYW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGxpbms7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuLy8vIGZvciB0ZXN0XG5cbmNvbnN0IHBvcHVwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAxXCIpXG5jb25zdCBwb3B1cDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwMlwiKVxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlUG9wdXBcIilcblxucG9wdXAxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiAsIFwiX3pJbmRleFwiLCBcIl9maXJzdFwiKVxuICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJfc2Vjb25kXCIpKXtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9zZWNvbmRcIilcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9maXJzdFwiKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBlbHNle1xuICAgIC8vICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX2ZpcnN0XCIpXG4gICAgLy8gfVxuXG59KVxuXG5wb3B1cDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiICwgXCJfekluZGV4XCIsIFwiX3NlY29uZFwiKTtcbiAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2ZpcnN0XCIpKXtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9zZWNvbmRcIilcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9maXJzdFwiKVxuICAgIH1cblxufSlcblxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIGlmKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9vcGFjaXR5XCIpICYmIHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl96SW5kZXhcIikpe1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIiAsIFwiX3pJbmRleFwiLCBcIl9zZWNvbmRcIilcbiAgICB9XG59KVxuXG5cblxuXG5mdW5jdGlvbiBnZXREZXZpY2VJbmZvKCkge1xuICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDRgNC+0LfRiNC40YDQtdC90L3RjyDQtdC60YDQsNC90YNcbiAgICBjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XG5cbiAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0ZbQvdGE0L7RgNC80LDRhtGW0Y4g0L/RgNC+INC+0L/QtdGA0LDRhtGW0LnQvdGDINGB0LjRgdGC0LXQvNGDXG4gICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICBsZXQgb3MgPSBcIlVua25vd24gT1NcIjtcblxuICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIldpblwiKSAhPT0gLTEpIG9zID0gXCJXaW5kb3dzXCI7XG4gICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJNYWNcIikgIT09IC0xKSBvcyA9IFwiTWFjT1NcIjtcbiAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIlgxMVwiKSAhPT0gLTEpIG9zID0gXCJVTklYXCI7XG4gICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJMaW51eFwiKSAhPT0gLTEpIG9zID0gXCJMaW51eFwiO1xuICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiQW5kcm9pZFwiKSAhPT0gLTEpIG9zID0gXCJBbmRyb2lkXCI7XG4gICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJsaWtlIE1hY1wiKSAhPT0gLTEpIG9zID0gXCJpT1NcIjtcblxuICAgIC8vINCS0LjQstC+0LTQuNC80L4g0ZbQvdGE0L7RgNC80LDRhtGW0Y4g0LIg0LrQvtC90YHQvtC70YxcbiAgICBjb25zb2xlLmxvZyhcItCe0L/QtdGA0LDRhtGW0LnQvdCwINGB0LjRgdGC0LXQvNCwOlwiLCBvcyk7XG4gICAgY29uc29sZS5sb2coXCLQoNC+0LfRiNC40YDQtdC90L3RjyDQtdC60YDQsNC90YM6XCIsIHNjcmVlbldpZHRoICsgXCJ4XCIgKyBzY3JlZW5IZWlnaHQpO1xufVxuXG5nZXREZXZpY2VJbmZvKCk7XG5cblxuZnVuY3Rpb24gZ2V0RGV2aWNlUGl4ZWxSYXRpbygpIHtcbiAgICByZXR1cm4gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbn1cbiJdfQ==
