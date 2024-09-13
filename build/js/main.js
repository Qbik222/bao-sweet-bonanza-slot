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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2hlZWxCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aGVlbFNlY3RvciIsInBvcHVwIiwicG9wdXBCdG4iLCJiYWNrZ3JvdW5kTXVzaWMiLCJBdWRpbyIsInJlZWxTb3VuZCIsInJlZWxTdG9wU291bmQiLCJwb3B1cFNvdW5kIiwicGxheUJhY2tncm91bmRNdXNpYyIsInBsYXkiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInNwaW5Db3VudGVyIiwic3BpbldoZWVsIiwid2hlZWwiLCJhbmltIiwicG9zaXRpb24iLCJidG4iLCJhZGQiLCJzbGVlcCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicGxheVNvdW5kcyIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJ0cmFuc2Zvcm0iLCJtb3ZlU3BlZWQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicGFyYWxsYXgiLCJlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwibW92aW5nX3ZhbHVlIiwiZ2V0QXR0cmlidXRlIiwieSIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInoiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXJhbXMiLCJsaW5rUGFyYW1zIiwic2VhcmNoUGFyYW1zIiwiaGFzIiwicmVkaXJlY3RVcmwiLCJnZXQiLCJtYXRjaCIsImxlbmd0aCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwYXJhbSIsImxpbmtQYXJhbSIsImxpbmsiLCJwYXJlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJhZmZpZCIsImdldEl0ZW0iLCJjcGFpZCIsInBhdGhuYW1lIiwic2V0IiwicG9wdXAxIiwicG9wdXAyIiwiY2xvc2UiLCJnZXREZXZpY2VJbmZvIiwic2NyZWVuV2lkdGgiLCJzY3JlZW4iLCJ3aWR0aCIsInNjcmVlbkhlaWdodCIsImhlaWdodCIsInVzZXJBZ2VudCIsIm5hdmlnYXRvciIsIm9zIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQURBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFDM0QsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztBQUNqRSxJQUFNRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUM5QyxJQUFNRyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7QUFFdEQ7QUFDQSxJQUFNSSxlQUFlLEdBQUcsSUFBSUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDaEQsSUFBTUMsU0FBUyxHQUFHLElBQUlELEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzFDLElBQU1FLGFBQWEsR0FBRyxJQUFJRixLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUNsRCxJQUFNRyxVQUFVLEdBQUcsSUFBSUgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7O0FBRTNDO0FBQ0EsU0FBU0ksbUJBQW1CLEdBQUc7RUFDM0JMLGVBQWUsQ0FBQ00sSUFBSSxFQUFFLFNBQU0sQ0FBQyxVQUFBQyxHQUFHO0lBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztFQUFBLEVBQUM7QUFDekQ7QUFFQVAsZUFBZSxDQUFDVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztFQUNqREwsbUJBQW1CLEVBQUU7QUFDekIsQ0FBQyxDQUFDOztBQUVGO0FBQ0FWLFFBQVEsQ0FBQ2UsZ0JBQWdCLENBQUMsV0FBVyxFQUFFTCxtQkFBbUIsRUFBRTtFQUFFTSxJQUFJLEVBQUU7QUFBSyxDQUFDLENBQUM7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U0FBUyxDQUFDRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUVELEVBQUUsR0FBRyxNQUFNLENBQUMsS0FDakQsSUFBSUYsU0FBUyxDQUFDRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUVELEVBQUUsR0FBRyxPQUFPLENBQUMsS0FDcEQsSUFBSUYsU0FBUyxDQUFDRyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUVELEVBQUUsR0FBRyxTQUFTLENBQUMsS0FDeEQsSUFBSUYsU0FBUyxDQUFDRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUVELEVBQUUsR0FBRyxLQUFLOztFQUV6RDtFQUNBN0UsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEVBQUU0RSxFQUFFLENBQUM7RUFDdEM3RSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRXFFLFdBQVcsR0FBRyxHQUFHLEdBQUdHLFlBQVksQ0FBQztBQUN2RTtBQUVBSixhQUFhLEVBQUUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdoZWVsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5kX193aGVlbC1idG5cIik7XG5jb25zdCB3aGVlbFNlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZF9fd2hlZWwtc2VjdG9yXCIpO1xuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuY29uc3QgcG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19idG5cIik7XG5cbi8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINC30LLRg9C60ZbQslxuY29uc3QgYmFja2dyb3VuZE11c2ljID0gbmV3IEF1ZGlvKCdtdXNpYy5tcDMnKTsgLy8g0YTQvtC90L7QstC40Lkg0LfQstGD0LosINCz0YDQsNGUINC/0L7RgdGC0ZbQudC90L5cbmNvbnN0IHJlZWxTb3VuZCA9IG5ldyBBdWRpbygncmVlbHMubXAzJyk7IC8vINC30LLRg9C6INC60YDRg9GH0LXQvdC90Y8g0LrQvtC70LXRgdCwXG5jb25zdCByZWVsU3RvcFNvdW5kID0gbmV3IEF1ZGlvKCdyZWVsLXN0b3AubXAzJyk7IC8vINC30LLRg9C6INC60L7Qu9C4INCy0LjQv9Cw0LTQsNGUINGB0LXQutGC0L7RgFxuY29uc3QgcG9wdXBTb3VuZCA9IG5ldyBBdWRpbygncG9wdXAubXAzJyk7IC8vINC30LLRg9C6INC00LvRjyDQv9C+0L/QsNC/0YNcblxuLy8g0KTRg9C90LrRhtGW0Y8g0LTQu9GPINC30LDQv9GD0YHQutGDINGE0L7QvdC+0LLQvtGXINC80YPQt9C40LrQuFxuZnVuY3Rpb24gcGxheUJhY2tncm91bmRNdXNpYygpIHtcbiAgICBiYWNrZ3JvdW5kTXVzaWMucGxheSgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn1cblxuYmFja2dyb3VuZE11c2ljLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgcGxheUJhY2tncm91bmRNdXNpYygpO1xufSk7XG5cbi8vINGC0LDQuiDRj9C6INGB0YPRh9Cw0YHQvdGWINCx0YDQsNGD0LfQtdGA0Lgg0LvQvtGH0LDRgtGMINCw0LLRgtC+0LLRltC00YLQstC+0YDQtdC90L3RjyDQvNGD0LfQuNC60Lgg0L3QsCDRgdCw0LnRgtCw0YUsINCy0ZbRiNCw0ZTQvCDRgdC70YPRhdCw0YfRliDQv9C+0LTRltC5INGP0LrRliDQt9Cw0L/Rg9GB0YLRj9GC0Ywg0ZfRl1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbnBsYXlCYWNrZ3JvdW5kTXVzaWMoKVxuXG5wb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJfZmlyc3RcIikpIHtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIsIFwiX3pJbmRleFwiKTtcbiAgICAgICAgd2hlZWxCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgIH1cblxufSk7XG5cbmxldCBzcGluQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIHNwaW5XaGVlbCh3aGVlbCwgYW5pbSwgcG9zaXRpb24sIHBvcHVwLCBidG4pIHtcbiAgICB3aGVlbC5jbGFzc0xpc3QuYWRkKGFuaW0pO1xuXG4gICAgZnVuY3Rpb24gc2xlZXAobXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICAgIH1cbiAgICAvL9C30LLRg9C6INC60YDRg9GH0LXQvdC90Y8g0LrQvtC70LXRgdCwXG4gICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgcmVlbFNvdW5kLnBsYXkoKTtcbiAgICB9LCAxMDAwKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gcGxheVNvdW5kcygpIHtcbiAgICAgICAgcmVlbFNvdW5kLnBhdXNlKCk7XG4gICAgICAgIHJlZWxTb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGF3YWl0IHNsZWVwKDE4MDApO1xuXG4gICAgICAgIC8vINC30LLRg9C6INC30YPQv9C40L3QutC4INC60L7Qu9C10YHQsFxuICAgICAgICByZWVsU3RvcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgYXdhaXQgc2xlZXAoNjAwKTtcblxuICAgICAgICAvLyDQktGW0LTRgtCy0L7RgNGO0ZTQvNC+INC30LLRg9C6INC00LvRjyDQv9C+0L/QsNC/0YNcbiAgICAgICAgcG9wdXBTb3VuZC5wbGF5KCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQocGxheVNvdW5kcywgNDgwMCk7XG5cblxuICAgIHdoZWVsLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xuICAgICAgICB3aGVlbC5jbGFzc0xpc3QucmVtb3ZlKGFuaW0pO1xuICAgICAgICB3aGVlbC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cG9zaXRpb259ZGVnKWA7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIik7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2J0blB1bHNlXCIpO1xuICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbn1cblxud2hlZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aGVlbEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgaWYgKHNwaW5Db3VudGVyID09PSAwKSB7XG4gICAgICAgIHdoZWVsQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfYnRuUHVsc2VcIik7XG4gICAgICAgIHNwaW5XaGVlbCh3aGVlbFNlY3RvciwgXCJmaXJzdFNwaW5cIiwgMTYyMCwgcG9wdXAsIHdoZWVsQnRuKTtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9maXJzdFwiKTtcbiAgICAgICAgc3BpbkNvdW50ZXIrKztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzcGluQ291bnRlciA9PT0gMSkge1xuICAgICAgICB3aGVlbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2J0blB1bHNlXCIpO1xuICAgICAgICBzcGluV2hlZWwod2hlZWxTZWN0b3IsIFwic2Vjb25kU3BpblwiLCAyNzQ0LjUsIHBvcHVwLCB3aGVlbEJ0bik7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfc2Vjb25kXCIpO1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2ZpcnN0XCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtbGlua1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiX2hpZGRlblwiKVxuICAgICAgICB9LCA4NTAwKVxuXG4gICAgICAgIHNwaW5Db3VudGVyKys7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59KTtcblxuLy8gcGFyYWxsYXhcbmNvbnN0IG1vdmVTcGVlZCA9IDI2MDtcblxuaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTUwKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBwYXJhbGxheCk7XG59XG5cbmZ1bmN0aW9uIHBhcmFsbGF4KGUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhcmFsbGF4XCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbW92aW5nX3ZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuICAgICAgICBsZXQgeSA9IChlLmNsaWVudFggKiBtb3ZpbmdfdmFsdWUpIC8gbW92ZVNwZWVkO1xuICAgICAgICBsZXQgeCA9IChlLmNsaWVudFkgKiBtb3ZpbmdfdmFsdWUpIC8gbW92ZVNwZWVkO1xuICAgICAgICBsZXQgeiA9IChlLmNsaWVudFkgKiBtb3ZpbmdfdmFsdWUpIC8gbW92ZVNwZWVkICogMjtcbiAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgcGVyc3BlY3RpdmUoMzAwcHgpIHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYDtcbiAgICB9KTtcbn1cblxuXG4vLyBURFMgc2NyaXB0XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHZhciBwYXJhbXMgPSBbJ2wnLCAndXRtX3NvdXJjZScsICd1dG1fbWVkaXVtJywgJ3V0bV9jYW1wYWlnbicsICd1dG1fdGVybScsICd1dG1fY29udGVudCcsICdwYXJhbTEnLCAncGFyYW0yJywgJ3BhcmFtMycsICdwYXJhbTQnLCAnY3JlYXRpdmVfdHlwZScsICdjcmVhdGl2ZV9pZCddO1xuICAgIHZhciBsaW5rUGFyYW1zID0gWydhZmZpZCcsICdjcGFpZCddOyAvLyDQuNGJ0LXQvCDQsiB1cmwgcmVkaXJlY3RVcmwg0LIgdXJsOlxuXG4gICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKCdyZWRpcmVjdFVybCcpKSB7XG4gICAgICAgIHZhciByZWRpcmVjdFVybCA9IG5ldyBVUkwodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VXJsJykpO1xuXG4gICAgICAgIGlmIChyZWRpcmVjdFVybC5ocmVmLm1hdGNoKC9cXC8vZykubGVuZ3RoID09PSA0ICYmIHJlZGlyZWN0VXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2wnKSkge1xuICAgICAgICAgICAgLy/QtdGB0LvQuCDRgdGB0YvQu9C60LAg0LIg0YHRgdGL0LvQutCwIHJlZGlyZWN0VXJsINC60L7RgNGA0LXQutGC0L3QsNGPXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVkaXJlY3RVcmwnLCByZWRpcmVjdFVybC5ocmVmKTsgLy8g0YPQutCw0LfRi9Cy0LDQtdC8INGC0L7Rh9C60L7QuSDQstGF0L7QtNCwINC00L7QvNC10L0g0YEg0L/RgNC+0YLQvtC60L7Qu9C+0Lwg0LjQtyByZWRpcmVjdFVybFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhwYXJhbSkpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBhcmFtLCB1cmwuc2VhcmNoUGFyYW1zLmdldChwYXJhbSkpO1xuICAgIH0pO1xuXG4gICAgbGlua1BhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rUGFyYW0pIHtcbiAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKGxpbmtQYXJhbSkpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpbmtQYXJhbSwgdXJsLnNlYXJjaFBhcmFtcy5nZXQobGlua1BhcmFtKSk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgbGluayxcbiAgICAgICAgICAgIHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcblxuICAgICAgICBpZiAocGFyZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpICE9PSAnaHR0cHM6Ly90ZHMuZmF2YmV0LnBhcnRuZXJzJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGFmZmlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FmZmlkJyk7XG4gICAgICAgICAgICB2YXIgY3BhaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3BhaWQnKTtcblxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVkaXJlY3RVcmxcIikpIHtcbiAgICAgICAgICAgICAgICBsaW5rID0gbmV3IFVSTChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZGlyZWN0VXJsXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGluayA9IG5ldyBVUkwocGFyZW50LmhyZWYpO1xuICAgICAgICAgICAgICAgIGlmIChhZmZpZCAmJiBjcGFpZCkge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLnBhdGhuYW1lID0gJy8nICsgYWZmaWQgKyAnLycgKyBjcGFpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluay5zZWFyY2hQYXJhbXMuc2V0KHBhcmFtLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYXJhbSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gbGluaztcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4vLy8gZm9yIHRlc3RcblxuY29uc3QgcG9wdXAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDFcIilcbmNvbnN0IHBvcHVwMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAyXCIpXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VQb3B1cFwiKVxuXG5wb3B1cDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiICwgXCJfekluZGV4XCIsIFwiX2ZpcnN0XCIpXG4gICAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9zZWNvbmRcIikpe1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NlY29uZFwiKVxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX2ZpcnN0XCIpXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGVsc2V7XG4gICAgLy8gICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfZmlyc3RcIilcbiAgICAvLyB9XG5cbn0pXG5cbnBvcHVwMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIgLCBcIl96SW5kZXhcIiwgXCJfc2Vjb25kXCIpO1xuICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJfZmlyc3RcIikpe1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX3NlY29uZFwiKVxuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2ZpcnN0XCIpXG4gICAgfVxuXG59KVxuXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgaWYocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX29wYWNpdHlcIikgJiYgcG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3pJbmRleFwiKSl7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BhY2l0eVwiICwgXCJfekluZGV4XCIsIFwiX3NlY29uZFwiKVxuICAgIH1cbn0pXG5cblxuXG5cbmZ1bmN0aW9uIGdldERldmljZUluZm8oKSB7XG4gICAgLy8g0J7RgtGA0LjQvNGD0ZTQvNC+INGA0L7Qt9GI0LjRgNC10L3QvdGPINC10LrRgNCw0L3Rg1xuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcbiAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcblxuICAgIC8vINCe0YLRgNC40LzRg9GU0LzQviDRltC90YTQvtGA0LzQsNGG0ZbRjiDQv9GA0L4g0L7Qv9C10YDQsNGG0ZbQudC90YMg0YHQuNGB0YLQtdC80YNcbiAgICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIGxldCBvcyA9IFwiVW5rbm93biBPU1wiO1xuXG4gICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiV2luXCIpICE9PSAtMSkgb3MgPSBcIldpbmRvd3NcIjtcbiAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIk1hY1wiKSAhPT0gLTEpIG9zID0gXCJNYWNPU1wiO1xuICAgIGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKFwiWDExXCIpICE9PSAtMSkgb3MgPSBcIlVOSVhcIjtcbiAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcIkxpbnV4XCIpICE9PSAtMSkgb3MgPSBcIkxpbnV4XCI7XG4gICAgZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoXCJBbmRyb2lkXCIpICE9PSAtMSkgb3MgPSBcIkFuZHJvaWRcIjtcbiAgICBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZihcImxpa2UgTWFjXCIpICE9PSAtMSkgb3MgPSBcImlPU1wiO1xuXG4gICAgLy8g0JLQuNCy0L7QtNC40LzQviDRltC90YTQvtGA0LzQsNGG0ZbRjiDQsiDQutC+0L3RgdC+0LvRjFxuICAgIGNvbnNvbGUubG9nKFwi0J7Qv9C10YDQsNGG0ZbQudC90LAg0YHQuNGB0YLQtdC80LA6XCIsIG9zKTtcbiAgICBjb25zb2xlLmxvZyhcItCg0L7Qt9GI0LjRgNC10L3QvdGPINC10LrRgNCw0L3RgzpcIiwgc2NyZWVuV2lkdGggKyBcInhcIiArIHNjcmVlbkhlaWdodCk7XG59XG5cbmdldERldmljZUluZm8oKTtcbiJdfQ==
