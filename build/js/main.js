"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('resize', function () {
    return window.location.reload();
  });
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
      document.querySelector(".first-win").style.animationPlayState = "initial";
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
    document.querySelector(".first-win").style.animationPlayState = "initial";
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
    document.querySelector(".first-win").style.animationPlayState = "initial";
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
  function getDevicePixelRatio() {
    return window.devicePixelRatio || 1;
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ3aGVlbEJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJ3aGVlbFNlY3RvciIsInBvcHVwIiwicG9wdXBCdG4iLCJiYWNrZ3JvdW5kTXVzaWMiLCJBdWRpbyIsInJlZWxTb3VuZCIsInJlZWxTdG9wU291bmQiLCJwb3B1cFNvdW5kIiwicGxheUJhY2tncm91bmRNdXNpYyIsInBsYXkiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwib25jZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwic3BpbkNvdW50ZXIiLCJzcGluV2hlZWwiLCJ3aGVlbCIsImFuaW0iLCJwb3NpdGlvbiIsImJ0biIsImFkZCIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwbGF5U291bmRzIiwicGF1c2UiLCJjdXJyZW50VGltZSIsInRyYW5zZm9ybSIsImFuaW1hdGlvblBsYXlTdGF0ZSIsIm1vdmVTcGVlZCIsImlubmVyV2lkdGgiLCJwYXJhbGxheCIsImUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJtb3ZpbmdfdmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJ5IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieiIsInVybCIsIlVSTCIsImhyZWYiLCJwYXJhbXMiLCJsaW5rUGFyYW1zIiwic2VhcmNoUGFyYW1zIiwiaGFzIiwicmVkaXJlY3RVcmwiLCJnZXQiLCJtYXRjaCIsImxlbmd0aCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwYXJhbSIsImxpbmtQYXJhbSIsImxpbmsiLCJwYXJlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicHJldmVudERlZmF1bHQiLCJhZmZpZCIsImdldEl0ZW0iLCJjcGFpZCIsInBhdGhuYW1lIiwic2V0IiwicG9wdXAxIiwicG9wdXAyIiwiY2xvc2UiLCJnZXREZXZpY2VQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQURBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQUs7RUFFL0NDLE1BQU0sQ0FBQ0QsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO0lBQUEsT0FBTUMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sRUFBRTtFQUFBLEVBQUM7RUFFakUsSUFBTUMsUUFBUSxHQUFHTCxRQUFRLENBQUNNLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUMzRCxJQUFNQyxXQUFXLEdBQUdQLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBQ2pFLElBQU1FLEtBQUssR0FBR1IsUUFBUSxDQUFDTSxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQzlDLElBQU1HLFFBQVEsR0FBR1QsUUFBUSxDQUFDTSxhQUFhLENBQUMsYUFBYSxDQUFDOztFQUcxRDtFQUNJLElBQU1JLGVBQWUsR0FBRyxJQUFJQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUNoRCxJQUFNQyxTQUFTLEdBQUcsSUFBSUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7RUFDMUMsSUFBTUUsYUFBYSxHQUFHLElBQUlGLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0VBQ2xELElBQU1HLFVBQVUsR0FBRyxJQUFJSCxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7RUFFL0M7RUFDSSxTQUFTSSxtQkFBbUIsR0FBRztJQUMzQkwsZUFBZSxDQUFDTSxJQUFJLEVBQUUsU0FBTSxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0lBQUEsRUFBQztFQUN6RDtFQUVBUCxlQUFlLENBQUNULGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQ2pEYyxtQkFBbUIsRUFBRTtFQUN6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QUksQ0FBQztFQUN2QztBQUdKLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT57XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcblxuICAgIGNvbnN0IHdoZWVsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5kX193aGVlbC1idG5cIik7XG4gICAgY29uc3Qgd2hlZWxTZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmRfX3doZWVsLXNlY3RvclwiKTtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG4gICAgY29uc3QgcG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19idG5cIik7XG5cblxuLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0LfQstGD0LrRltCyXG4gICAgY29uc3QgYmFja2dyb3VuZE11c2ljID0gbmV3IEF1ZGlvKCdtdXNpYy5tcDMnKTsgLy8g0YTQvtC90L7QstC40Lkg0LfQstGD0LosINCz0YDQsNGUINC/0L7RgdGC0ZbQudC90L5cbiAgICBjb25zdCByZWVsU291bmQgPSBuZXcgQXVkaW8oJ3JlZWxzLm1wMycpOyAvLyDQt9Cy0YPQuiDQutGA0YPRh9C10L3QvdGPINC60L7Qu9C10YHQsFxuICAgIGNvbnN0IHJlZWxTdG9wU291bmQgPSBuZXcgQXVkaW8oJ3JlZWwtc3RvcC5tcDMnKTsgLy8g0LfQstGD0Log0LrQvtC70Lgg0LLQuNC/0LDQtNCw0ZQg0YHQtdC60YLQvtGAXG4gICAgY29uc3QgcG9wdXBTb3VuZCA9IG5ldyBBdWRpbygncG9wdXAubXAzJyk7IC8vINC30LLRg9C6INC00LvRjyDQv9C+0L/QsNC/0YNcblxuLy8g0KTRg9C90LrRhtGW0Y8g0LTQu9GPINC30LDQv9GD0YHQutGDINGE0L7QvdC+0LLQvtGXINC80YPQt9C40LrQuFxuICAgIGZ1bmN0aW9uIHBsYXlCYWNrZ3JvdW5kTXVzaWMoKSB7XG4gICAgICAgIGJhY2tncm91bmRNdXNpYy5wbGF5KCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmRNdXNpYy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBwbGF5QmFja2dyb3VuZE11c2ljKCk7XG4gICAgfSk7XG5cbi8vINGC0LDQuiDRj9C6INGB0YPRh9Cw0YHQvdGWINCx0YDQsNGD0LfQtdGA0Lgg0LvQvtGH0LDRgtGMINCw0LLRgtC+0LLRltC00YLQstC+0YDQtdC90L3RjyDQvNGD0LfQuNC60Lgg0L3QsCDRgdCw0LnRgtCw0YUsINCy0ZbRiNCw0ZTQvCDRgdC70YPRhdCw0YfRliDQv9C+0LTRltC5INGP0LrRliDQt9Cw0L/Rg9GB0YLRj9GC0Ywg0ZfRl1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwbGF5QmFja2dyb3VuZE11c2ljLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgcGxheUJhY2tncm91bmRNdXNpYygpXG5cbiAgICBwb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2ZpcnN0XCIpKSB7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIiwgXCJfekluZGV4XCIpO1xuICAgICAgICAgICAgd2hlZWxCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgIGxldCBzcGluQ291bnRlciA9IDA7XG5cbiAgICBmdW5jdGlvbiBzcGluV2hlZWwod2hlZWwsIGFuaW0sIHBvc2l0aW9uLCBwb3B1cCwgYnRuKSB7XG4gICAgICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoYW5pbSk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2xlZXAobXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgICAgICAgfVxuICAgICAgICAvL9C30LLRg9C6INC60YDRg9GH0LXQvdC90Y8g0LrQvtC70LXRgdCwXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICByZWVsU291bmQucGxheSgpO1xuICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHBsYXlTb3VuZHMoKSB7XG4gICAgICAgICAgICByZWVsU291bmQucGF1c2UoKTtcbiAgICAgICAgICAgIHJlZWxTb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCgxODAwKTtcblxuICAgICAgICAgICAgLy8g0LfQstGD0Log0LfRg9C/0LjQvdC60Lgg0LrQvtC70LXRgdCwXG4gICAgICAgICAgICByZWVsU3RvcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDYwMCk7XG5cbiAgICAgICAgICAgIC8vINCS0ZbQtNGC0LLQvtGA0Y7RlNC80L4g0LfQstGD0Log0LTQu9GPINC/0L7Qv9Cw0L/Rg1xuICAgICAgICAgICAgcG9wdXBTb3VuZC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dChwbGF5U291bmRzLCA0ODAwKTtcblxuXG4gICAgICAgIHdoZWVsLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgd2hlZWwuY2xhc3NMaXN0LnJlbW92ZShhbmltKTtcbiAgICAgICAgICAgIHdoZWVsLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtwb3NpdGlvbn1kZWcpYDtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIik7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIl9idG5QdWxzZVwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3Qtd2luXCIpLnN0eWxlLmFuaW1hdGlvblBsYXlTdGF0ZSA9IFwiaW5pdGlhbFwiXG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICB3aGVlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB3aGVlbEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgICAgIGlmIChzcGluQ291bnRlciA9PT0gMCkge1xuICAgICAgICAgICAgd2hlZWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9idG5QdWxzZVwiKTtcbiAgICAgICAgICAgIHNwaW5XaGVlbCh3aGVlbFNlY3RvciwgXCJmaXJzdFNwaW5cIiwgMTYyMCwgcG9wdXAsIHdoZWVsQnRuKTtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfZmlyc3RcIik7XG4gICAgICAgICAgICBzcGluQ291bnRlcisrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNwaW5Db3VudGVyID09PSAxKSB7XG4gICAgICAgICAgICB3aGVlbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2J0blB1bHNlXCIpO1xuICAgICAgICAgICAgc3BpbldoZWVsKHdoZWVsU2VjdG9yLCBcInNlY29uZFNwaW5cIiwgMjc0NC41LCBwb3B1cCwgd2hlZWxCdG4pO1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9zZWNvbmRcIik7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2ZpcnN0XCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC1saW5rXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJfaGlkZGVuXCIpXG4gICAgICAgICAgICB9LCA4NTAwKVxuXG4gICAgICAgICAgICBzcGluQ291bnRlcisrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSk7XG5cbi8vIHBhcmFsbGF4XG4gICAgY29uc3QgbW92ZVNwZWVkID0gMjYwO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTUwKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcGFyYWxsYXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcmFsbGF4KGUpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYXJhbGxheFwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb3ZpbmdfdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG4gICAgICAgICAgICBsZXQgeSA9IChlLmNsaWVudFggKiBtb3ZpbmdfdmFsdWUpIC8gbW92ZVNwZWVkO1xuICAgICAgICAgICAgbGV0IHggPSAoZS5jbGllbnRZICogbW92aW5nX3ZhbHVlKSAvIG1vdmVTcGVlZDtcbiAgICAgICAgICAgIGxldCB6ID0gKGUuY2xpZW50WSAqIG1vdmluZ192YWx1ZSkgLyBtb3ZlU3BlZWQgKiAyO1xuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgcGVyc3BlY3RpdmUoMzAwcHgpIHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbi8vIFREUyBzY3JpcHRcblxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgdmFyIHBhcmFtcyA9IFsnbCcsICd1dG1fc291cmNlJywgJ3V0bV9tZWRpdW0nLCAndXRtX2NhbXBhaWduJywgJ3V0bV90ZXJtJywgJ3V0bV9jb250ZW50JywgJ3BhcmFtMScsICdwYXJhbTInLCAncGFyYW0zJywgJ3BhcmFtNCcsICdjcmVhdGl2ZV90eXBlJywgJ2NyZWF0aXZlX2lkJ107XG4gICAgICAgIHZhciBsaW5rUGFyYW1zID0gWydhZmZpZCcsICdjcGFpZCddOyAvLyDQuNGJ0LXQvCDQsiB1cmwgcmVkaXJlY3RVcmwg0LIgdXJsOlxuXG4gICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcygncmVkaXJlY3RVcmwnKSkge1xuICAgICAgICAgICAgdmFyIHJlZGlyZWN0VXJsID0gbmV3IFVSTCh1cmwuc2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3RVcmwnKSk7XG5cbiAgICAgICAgICAgIGlmIChyZWRpcmVjdFVybC5ocmVmLm1hdGNoKC9cXC8vZykubGVuZ3RoID09PSA0ICYmIHJlZGlyZWN0VXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2wnKSkge1xuICAgICAgICAgICAgICAgIC8v0LXRgdC70Lgg0YHRgdGL0LvQutCwINCyINGB0YHRi9C70LrQsCByZWRpcmVjdFVybCDQutC+0YDRgNC10LrRgtC90LDRj1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWRpcmVjdFVybCcsIHJlZGlyZWN0VXJsLmhyZWYpOyAvLyDRg9C60LDQt9GL0LLQsNC10Lwg0YLQvtGH0LrQvtC5INCy0YXQvtC00LAg0LTQvtC80LXQvSDRgSDQv9GA0L7RgtC+0LrQvtC70L7QvCDQuNC3IHJlZGlyZWN0VXJsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhwYXJhbSkpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBhcmFtLCB1cmwuc2VhcmNoUGFyYW1zLmdldChwYXJhbSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsaW5rUGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKGxpbmtQYXJhbSkge1xuICAgICAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKGxpbmtQYXJhbSkpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxpbmtQYXJhbSwgdXJsLnNlYXJjaFBhcmFtcy5nZXQobGlua1BhcmFtKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgbGluayxcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdhJyk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgIT09ICdodHRwczovL3Rkcy5mYXZiZXQucGFydG5lcnMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBhZmZpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhZmZpZCcpO1xuICAgICAgICAgICAgICAgIHZhciBjcGFpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcGFpZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVkaXJlY3RVcmxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IG5ldyBVUkwobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWRpcmVjdFVybFwiKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IG5ldyBVUkwocGFyZW50LmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWZmaWQgJiYgY3BhaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGF0aG5hbWUgPSAnLycgKyBhZmZpZCArICcvJyArIGNwYWlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuc2VhcmNoUGFyYW1zLnNldChwYXJhbSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocGFyYW0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGxpbms7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG5cblxuLy8vIGZvciB0ZXN0XG5cbiAgICBjb25zdCBwb3B1cDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwMVwiKVxuICAgIGNvbnN0IHBvcHVwMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAyXCIpXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlUG9wdXBcIilcblxuICAgIHBvcHVwMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiICwgXCJfekluZGV4XCIsIFwiX2ZpcnN0XCIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3Qtd2luXCIpLnN0eWxlLmFuaW1hdGlvblBsYXlTdGF0ZSA9IFwiaW5pdGlhbFwiXG4gICAgICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJfc2Vjb25kXCIpKXtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2Vjb25kXCIpXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX2ZpcnN0XCIpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsc2V7XG4gICAgICAgIC8vICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX2ZpcnN0XCIpXG4gICAgICAgIC8vIH1cblxuICAgIH0pXG5cbiAgICBwb3B1cDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiAsIFwiX3pJbmRleFwiLCBcIl9zZWNvbmRcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyc3Qtd2luXCIpLnN0eWxlLmFuaW1hdGlvblBsYXlTdGF0ZSA9IFwiaW5pdGlhbFwiXG4gICAgICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJfZmlyc3RcIikpe1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9zZWNvbmRcIilcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfZmlyc3RcIilcbiAgICAgICAgfVxuXG4gICAgfSlcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX29wYWNpdHlcIikgJiYgcG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3pJbmRleFwiKSl7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIiAsIFwiX3pJbmRleFwiLCBcIl9zZWNvbmRcIilcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIGZ1bmN0aW9uIGdldERldmljZVBpeGVsUmF0aW8oKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgIH1cblxuXG59KVxuXG5cbiJdfQ==
