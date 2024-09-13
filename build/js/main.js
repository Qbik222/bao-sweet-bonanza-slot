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
function getPhysicalScreenSize() {
  var devicePixelRatio = getDevicePixelRatio();
  var physicalWidth = window.screen.width * devicePixelRatio;
  var physicalHeight = window.screen.height * devicePixelRatio;
  console.log("Фізичний розмір екрану:");
  console.log("Ширина:", physicalWidth + "px");
  console.log("Висота:", physicalHeight + "px");
}
getPhysicalScreenSize();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2hlZWxCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aGVlbFNlY3RvciIsInBvcHVwIiwicG9wdXBCdG4iLCJiYWNrZ3JvdW5kTXVzaWMiLCJBdWRpbyIsInJlZWxTb3VuZCIsInJlZWxTdG9wU291bmQiLCJwb3B1cFNvdW5kIiwicGxheUJhY2tncm91bmRNdXNpYyIsInBsYXkiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInNwaW5Db3VudGVyIiwic3BpbldoZWVsIiwid2hlZWwiLCJhbmltIiwicG9zaXRpb24iLCJidG4iLCJhZGQiLCJzbGVlcCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicGxheVNvdW5kcyIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJ0cmFuc2Zvcm0iLCJtb3ZlU3BlZWQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFyYWxsYXgiLCJlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwibW92aW5nX3ZhbHVlIiwiZ2V0QXR0cmlidXRlIiwieSIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInoiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXJhbXMiLCJsaW5rUGFyYW1zIiwic2VhcmNoUGFyYW1zIiwiaGFzIiwicmVkaXJlY3RVcmwiLCJnZXQiLCJtYXRjaCIsImxlbmd0aCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwYXJhbSIsImxpbmtQYXJhbSIsImxpbmsiLCJwYXJlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJhZmZpZCIsImdldEl0ZW0iLCJjcGFpZCIsInBhdGhuYW1lIiwic2V0IiwicG9wdXAxIiwicG9wdXAyIiwiY2xvc2UiLCJnZXREZXZpY2VJbmZvIiwic2NyZWVuV2lkdGgiLCJzY3JlZW4iLCJ3aWR0aCIsInNjcmVlbkhlaWdodCIsImhlaWdodCIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsIm9zIiwiaW5kZXhPZiIsImdldERldmljZVBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiZ2V0UGh5c2ljYWxTY3JlZW5TaXplIiwicGh5c2ljYWxXaWR0aCIsInBoeXNpY2FsSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBREEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUMzRCxJQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQ2pFLElBQU1FLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQzlDLElBQU1HLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDOztBQUV0RDtBQUNBLElBQU1JLGVBQWUsR0FBRyxJQUFJQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNoRCxJQUFNQyxTQUFTLEdBQUcsSUFBSUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDMUMsSUFBTUUsYUFBYSxHQUFHLElBQUlGLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQ2xELElBQU1HLFVBQVUsR0FBRyxJQUFJSCxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7QUFFM0M7QUFDQSxTQUFTSSxtQkFBbUIsR0FBRztFQUMzQkwsZUFBZSxDQUFDTSxJQUFJLEVBQUUsU0FBTSxDQUFDLFVBQUFDLEdBQUc7SUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0VBQUEsRUFBQztBQUN6RDtBQUVBUCxlQUFlLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0VBQ2pETCxtQkFBbUIsRUFBRTtBQUN6QixD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QyxTQUFTLEVBQUVpRixhQUFhLEdBQUcsSUFBSSxDQUFDO0VBQzVDbEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFa0YsY0FBYyxHQUFHLElBQUksQ0FBQztBQUNqRDtBQUVBRixxQkFBcUIsRUFBRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2hlZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmRfX3doZWVsLWJ0blwiKTtcbmNvbnN0IHdoZWVsU2VjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5kX193aGVlbC1zZWN0b3JcIik7XG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG5jb25zdCBwb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2J0blwiKTtcblxuLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0LfQstGD0LrRltCyXG5jb25zdCBiYWNrZ3JvdW5kTXVzaWMgPSBuZXcgQXVkaW8oJ211c2ljLm1wMycpOyAvLyDRhNC+0L3QvtCy0LjQuSDQt9Cy0YPQuiwg0LPRgNCw0ZQg0L/QvtGB0YLRltC50L3QvlxuY29uc3QgcmVlbFNvdW5kID0gbmV3IEF1ZGlvKCdyZWVscy5tcDMnKTsgLy8g0LfQstGD0Log0LrRgNGD0YfQtdC90L3RjyDQutC+0LvQtdGB0LBcbmNvbnN0IHJlZWxTdG9wU291bmQgPSBuZXcgQXVkaW8oJ3JlZWwtc3RvcC5tcDMnKTsgLy8g0LfQstGD0Log0LrQvtC70Lgg0LLQuNC/0LDQtNCw0ZQg0YHQtdC60YLQvtGAXG5jb25zdCBwb3B1cFNvdW5kID0gbmV3IEF1ZGlvKCdwb3B1cC5tcDMnKTsgLy8g0LfQstGD0Log0LTQu9GPINC/0L7Qv9Cw0L/Rg1xuXG4vLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LfQsNC/0YPRgdC60YMg0YTQvtC90L7QstC+0Zcg0LzRg9C30LjQutC4XG5mdW5jdGlvbiBwbGF5QmFja2dyb3VuZE11c2ljKCkge1xuICAgIGJhY2tncm91bmRNdXNpYy5wbGF5KCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xufVxuXG5iYWNrZ3JvdW5kTXVzaWMuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcbiAgICBwbGF5QmFja2dyb3VuZE11c2ljKCk7XG59KTtcblxuLy8g0YLQsNC6INGP0Log0YHRg9GH0LDRgdC90ZYg0LHRgNCw0YPQt9C10YDQuCDQu9C+0YfQsNGC0Ywg0LDQstGC0L7QstGW0LTRgtCy0L7RgNC10L3QvdGPINC80YPQt9C40LrQuCDQvdCwINGB0LDQudGC0LDRhSwg0LLRltGI0LDRlNC8INGB0LvRg9GF0LDRh9GWINC/0L7QtNGW0Lkg0Y/QutGWINC30LDQv9GD0YHRgtGP0YLRjCDRl9GXXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwbGF5QmFja2dyb3VuZE11c2ljLCB7IG9uY2U6IHRydWUgfSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5QmFja2dyb3VuZE11c2ljLCB7IG9uY2U6IHRydWUgfSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xucGxheUJhY2tncm91bmRNdXNpYygpXG5cbnBvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9maXJzdFwiKSkge1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIiwgXCJfekluZGV4XCIpO1xuICAgICAgICB3aGVlbEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJpbml0aWFsXCI7XG4gICAgfVxuXG59KTtcblxubGV0IHNwaW5Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gc3BpbldoZWVsKHdoZWVsLCBhbmltLCBwb3NpdGlvbiwgcG9wdXAsIGJ0bikge1xuICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoYW5pbSk7XG5cbiAgICBmdW5jdGlvbiBzbGVlcChtcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gICAgfVxuICAgIC8v0LfQstGD0Log0LrRgNGD0YfQtdC90L3RjyDQutC+0LvQtdGB0LBcbiAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICByZWVsU291bmQucGxheSgpO1xuICAgIH0sIDEwMDApXG5cbiAgICBhc3luYyBmdW5jdGlvbiBwbGF5U291bmRzKCkge1xuICAgICAgICByZWVsU291bmQucGF1c2UoKTtcbiAgICAgICAgcmVlbFNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgYXdhaXQgc2xlZXAoMTgwMCk7XG5cbiAgICAgICAgLy8g0LfQstGD0Log0LfRg9C/0LjQvdC60Lgg0LrQvtC70LXRgdCwXG4gICAgICAgIHJlZWxTdG9wU291bmQucGxheSgpO1xuICAgICAgICBhd2FpdCBzbGVlcCg2MDApO1xuXG4gICAgICAgIC8vINCS0ZbQtNGC0LLQvtGA0Y7RlNC80L4g0LfQstGD0Log0LTQu9GPINC/0L7Qv9Cw0L/Rg1xuICAgICAgICBwb3B1cFNvdW5kLnBsYXkoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dChwbGF5U291bmRzLCA0ODAwKTtcblxuXG4gICAgd2hlZWwuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICAgIHdoZWVsLmNsYXNzTGlzdC5yZW1vdmUoYW5pbSk7XG4gICAgICAgIHdoZWVsLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtwb3NpdGlvbn1kZWcpYDtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIsIFwiX3pJbmRleFwiKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJfYnRuUHVsc2VcIik7XG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xufVxuXG53aGVlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHdoZWVsQnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICBpZiAoc3BpbkNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgd2hlZWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9idG5QdWxzZVwiKTtcbiAgICAgICAgc3BpbldoZWVsKHdoZWVsU2VjdG9yLCBcImZpcnN0U3BpblwiLCAxNjIwLCBwb3B1cCwgd2hlZWxCdG4pO1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX2ZpcnN0XCIpO1xuICAgICAgICBzcGluQ291bnRlcisrO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNwaW5Db3VudGVyID09PSAxKSB7XG4gICAgICAgIHdoZWVsQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfYnRuUHVsc2VcIik7XG4gICAgICAgIHNwaW5XaGVlbCh3aGVlbFNlY3RvciwgXCJzZWNvbmRTcGluXCIsIDI3NDQuNSwgcG9wdXAsIHdoZWVsQnRuKTtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9zZWNvbmRcIik7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfZmlyc3RcIik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC1saW5rXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJfaGlkZGVuXCIpXG4gICAgICAgIH0sIDg1MDApXG5cbiAgICAgICAgc3BpbkNvdW50ZXIrKztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0pO1xuXG4vLyBwYXJhbGxheFxuY29uc3QgbW92ZVNwZWVkID0gMjYwO1xuXG5pZiAod2luZG93LmlubmVyV2lkdGggPiA5NTApIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHBhcmFsbGF4KTtcbn1cblxuZnVuY3Rpb24gcGFyYWxsYXgoZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFyYWxsYXhcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBtb3ZpbmdfdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG4gICAgICAgIGxldCB5ID0gKGUuY2xpZW50WCAqIG1vdmluZ192YWx1ZSkgLyBtb3ZlU3BlZWQ7XG4gICAgICAgIGxldCB4ID0gKGUuY2xpZW50WSAqIG1vdmluZ192YWx1ZSkgLyBtb3ZlU3BlZWQ7XG4gICAgICAgIGxldCB6ID0gKGUuY2xpZW50WSAqIG1vdmluZ192YWx1ZSkgLyBtb3ZlU3BlZWQgKiAyO1xuICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGBwZXJzcGVjdGl2ZSgzMDBweCkgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgO1xuICAgIH0pO1xufVxuXG5cbi8vIFREUyBzY3JpcHRcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgdmFyIHBhcmFtcyA9IFsnbCcsICd1dG1fc291cmNlJywgJ3V0bV9tZWRpdW0nLCAndXRtX2NhbXBhaWduJywgJ3V0bV90ZXJtJywgJ3V0bV9jb250ZW50JywgJ3BhcmFtMScsICdwYXJhbTInLCAncGFyYW0zJywgJ3BhcmFtNCcsICdjcmVhdGl2ZV90eXBlJywgJ2NyZWF0aXZlX2lkJ107XG4gICAgdmFyIGxpbmtQYXJhbXMgPSBbJ2FmZmlkJywgJ2NwYWlkJ107IC8vINC40YnQtdC8INCyIHVybCByZWRpcmVjdFVybCDQsiB1cmw6XG5cbiAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3JlZGlyZWN0VXJsJykpIHtcbiAgICAgICAgdmFyIHJlZGlyZWN0VXJsID0gbmV3IFVSTCh1cmwuc2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3RVcmwnKSk7XG5cbiAgICAgICAgaWYgKHJlZGlyZWN0VXJsLmhyZWYubWF0Y2goL1xcLy9nKS5sZW5ndGggPT09IDQgJiYgcmVkaXJlY3RVcmwuc2VhcmNoUGFyYW1zLmdldCgnbCcpKSB7XG4gICAgICAgICAgICAvL9C10YHQu9C4INGB0YHRi9C70LrQsCDQsiDRgdGB0YvQu9C60LAgcmVkaXJlY3RVcmwg0LrQvtGA0YDQtdC60YLQvdCw0Y9cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWRpcmVjdFVybCcsIHJlZGlyZWN0VXJsLmhyZWYpOyAvLyDRg9C60LDQt9GL0LLQsNC10Lwg0YLQvtGH0LrQvtC5INCy0YXQvtC00LAg0LTQvtC80LXQvSDRgSDQv9GA0L7RgtC+0LrQvtC70L7QvCDQuNC3IHJlZGlyZWN0VXJsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKHBhcmFtKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocGFyYW0sIHVybC5zZWFyY2hQYXJhbXMuZ2V0KHBhcmFtKSk7XG4gICAgfSk7XG5cbiAgICBsaW5rUGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKGxpbmtQYXJhbSkge1xuICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMobGlua1BhcmFtKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlua1BhcmFtLCB1cmwuc2VhcmNoUGFyYW1zLmdldChsaW5rUGFyYW0pKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBsaW5rLFxuICAgICAgICAgICAgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xuXG4gICAgICAgIGlmIChwYXJlbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgIT09ICdodHRwczovL3Rkcy5mYXZiZXQucGFydG5lcnMnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgYWZmaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWZmaWQnKTtcbiAgICAgICAgICAgIHZhciBjcGFpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcGFpZCcpO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWRpcmVjdFVybFwiKSkge1xuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgVVJMKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVkaXJlY3RVcmxcIikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaW5rID0gbmV3IFVSTChwYXJlbnQuaHJlZik7XG4gICAgICAgICAgICAgICAgaWYgKGFmZmlkICYmIGNwYWlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsucGF0aG5hbWUgPSAnLycgKyBhZmZpZCArICcvJyArIGNwYWlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLnNlYXJjaFBhcmFtcy5zZXQocGFyYW0sIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhcmFtKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBsaW5rO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbi8vLyBmb3IgdGVzdFxuXG5jb25zdCBwb3B1cDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwMVwiKVxuY29uc3QgcG9wdXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDJcIilcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVBvcHVwXCIpXG5cbnBvcHVwMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIgLCBcIl96SW5kZXhcIiwgXCJfZmlyc3RcIilcbiAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3NlY29uZFwiKSl7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2Vjb25kXCIpXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfZmlyc3RcIilcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gZWxzZXtcbiAgICAvLyAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9maXJzdFwiKVxuICAgIC8vIH1cblxufSlcblxucG9wdXAyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiAsIFwiX3pJbmRleFwiLCBcIl9zZWNvbmRcIik7XG4gICAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9maXJzdFwiKSl7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfc2Vjb25kXCIpXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfZmlyc3RcIilcbiAgICB9XG5cbn0pXG5cbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBpZihwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJfb3BhY2l0eVwiKSAmJiBwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJfekluZGV4XCIpKXtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIgLCBcIl96SW5kZXhcIiwgXCJfc2Vjb25kXCIpXG4gICAgfVxufSlcblxuXG5cblxuZnVuY3Rpb24gZ2V0RGV2aWNlSW5mbygpIHtcbiAgICAvLyDQntGC0YDQuNC80YPRlNC80L4g0YDQvtC30YjQuNGA0LXQvdC90Y8g0LXQutGA0LDQvdGDXG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuXG4gICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGW0L3RhNC+0YDQvNCw0YbRltGOINC/0YDQviDQvtC/0LXRgNCw0YbRltC50L3RgyDRgdC40YHRgtC10LzRg1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgbGV0IG9zID0gXCJVbmtub3duIE9TXCI7XG5cbiAgICBpZiAodXNlckFnZW50LmluZGV4T2YoXCJXaW5cIikgIT09IC0xKSBvcyA9IFwiV2luZG93c1wiO1xuICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiTWFjXCIpICE9PSAtMSkgb3MgPSBcIk1hY09TXCI7XG4gICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJYMTFcIikgIT09IC0xKSBvcyA9IFwiVU5JWFwiO1xuICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiTGludXhcIikgIT09IC0xKSBvcyA9IFwiTGludXhcIjtcbiAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIkFuZHJvaWRcIikgIT09IC0xKSBvcyA9IFwiQW5kcm9pZFwiO1xuICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwibGlrZSBNYWNcIikgIT09IC0xKSBvcyA9IFwiaU9TXCI7XG5cbiAgICAvLyDQktC40LLQvtC00LjQvNC+INGW0L3RhNC+0YDQvNCw0YbRltGOINCyINC60L7QvdGB0L7Qu9GMXG4gICAgY29uc29sZS5sb2coXCLQntC/0LXRgNCw0YbRltC50L3QsCDRgdC40YHRgtC10LzQsDpcIiwgb3MpO1xuICAgIGNvbnNvbGUubG9nKFwi0KDQvtC30YjQuNGA0LXQvdC90Y8g0LXQutGA0LDQvdGDOlwiLCBzY3JlZW5XaWR0aCArIFwieFwiICsgc2NyZWVuSGVpZ2h0KTtcbn1cblxuZ2V0RGV2aWNlSW5mbygpO1xuXG5cbmZ1bmN0aW9uIGdldERldmljZVBpeGVsUmF0aW8oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG59XG5cbmZ1bmN0aW9uIGdldFBoeXNpY2FsU2NyZWVuU2l6ZSgpIHtcbiAgICBjb25zdCBkZXZpY2VQaXhlbFJhdGlvID0gZ2V0RGV2aWNlUGl4ZWxSYXRpbygpO1xuICAgIGNvbnN0IHBoeXNpY2FsV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoICogZGV2aWNlUGl4ZWxSYXRpbztcbiAgICBjb25zdCBwaHlzaWNhbEhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICogZGV2aWNlUGl4ZWxSYXRpbztcblxuICAgIGNvbnNvbGUubG9nKFwi0KTRltC30LjRh9C90LjQuSDRgNC+0LfQvNGW0YAg0LXQutGA0LDQvdGDOlwiKTtcbiAgICBjb25zb2xlLmxvZyhcItCo0LjRgNC40L3QsDpcIiwgcGh5c2ljYWxXaWR0aCArIFwicHhcIik7XG4gICAgY29uc29sZS5sb2coXCLQktC40YHQvtGC0LA6XCIsIHBoeXNpY2FsSGVpZ2h0ICsgXCJweFwiKTtcbn1cblxuZ2V0UGh5c2ljYWxTY3JlZW5TaXplKCk7Il19
