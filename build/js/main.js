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
    function playSounds() {
      return _playSounds.apply(this, arguments);
    } // Виклик функції
    function _playSounds() {
      _playSounds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return sleep(1000);
            case 3:
              _context.next = 5;
              return reelSound.play();
            case 5:
              _context.next = 7;
              return sleep(3400);
            case 7:
              // Зупинка звуку кручення колеса
              reelSound.pause();
              reelSound.currentTime = 0;

              // Затримка перед звуком зупинки колеса (1400 мс)
              _context.next = 11;
              return sleep(1400);
            case 11:
              _context.next = 13;
              return reelStopSound.play();
            case 13:
              _context.next = 15;
              return sleep(800);
            case 15:
              _context.next = 17;
              return popupSound.play();
            case 17:
              _context.next = 22;
              break;
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              console.error("Помилка при відтворенні звуків: ", _context.t0);
            case 22:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 19]]);
      }));
      return _playSounds.apply(this, arguments);
    }
    playSounds();

    // // звук кручення колеса
    // setTimeout(() =>{
    //     reelSound.play();
    //     setTimeout(() =>{
    //         reelSound.pause();
    //         reelSound.currentTime = 0;
    //         setTimeout(() =>{
    //             reelStopSound.play();
    //             setTimeout(() =>{
    //                 popupSound.play();
    //             }, 800)
    //         }, 1400)
    //     },3400);
    // },1000)

    // setTimeout(() =>{
    //     reelSound.play();
    //     setTimeout(function () {
    //
    //         setTimeout(function () {
    //             reelSound.pause();
    //             reelSound.currentTime = 0;
    //             setTimeout(() =>{
    //                 reelStopSound.play();
    //                 setTimeout(function () {
    //                     popupSound.play();
    //                 }, 600);
    //             }, 1800);
    //         }, 1000)
    //     }, 3000);
    // }, 1000)

    // reelSound.play().then(() => {
    //     // Дочекавшись дозволу браузера на відтворення
    // }).catch(err => {
    //     // Помилка відтворення, можна обробити
    //     console.error("Помилка відтворення звуку: ", err);
    // });

    // // Зупиняємо звук кручення колеса
    // setTimeout(() =>{
    //     reelSound.pause();
    //     reelSound.currentTime = 0;
    //     setTimeout(() =>{
    //         // звук зупинки колеса
    //         reelStopSound.play();
    //         setTimeout(() =>{
    //             // Відтворюємо звук для попапу
    //             popupSound.play();
    //         }, 600)
    //     }, 1800)
    // }, 4800)

    // async function playSounds() {
    //     reelSound.pause();
    //     reelSound.currentTime = 0;
    //     await sleep(1800);
    //
    //     // звук зупинки колеса
    //     reelStopSound.play();
    //     await sleep(600);
    //
    //     // Відтворюємо звук для попапу
    //     popupSound.play();
    // }
    // setTimeout(playSounds, 4800);

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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ3aGVlbEJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJ3aGVlbFNlY3RvciIsInBvcHVwIiwicG9wdXBCdG4iLCJiYWNrZ3JvdW5kTXVzaWMiLCJBdWRpbyIsInJlZWxTb3VuZCIsInJlZWxTdG9wU291bmQiLCJwb3B1cFNvdW5kIiwicGxheUJhY2tncm91bmRNdXNpYyIsInBsYXkiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwib25jZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwic3BpbkNvdW50ZXIiLCJzcGluV2hlZWwiLCJ3aGVlbCIsImFuaW0iLCJwb3NpdGlvbiIsImJ0biIsImFkZCIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwbGF5U291bmRzIiwicGF1c2UiLCJjdXJyZW50VGltZSIsImVycm9yIiwidHJhbnNmb3JtIiwiYW5pbWF0aW9uUGxheVN0YXRlIiwibW92ZVNwZWVkIiwiaW5uZXJXaWR0aCIsInBhcmFsbGF4IiwiZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsIm1vdmluZ192YWx1ZSIsImdldEF0dHJpYnV0ZSIsInkiLCJjbGllbnRYIiwieCIsImNsaWVudFkiLCJ6IiwidXJsIiwiVVJMIiwiaHJlZiIsInBhcmFtcyIsImxpbmtQYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJyZWRpcmVjdFVybCIsImdldCIsIm1hdGNoIiwibGVuZ3RoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInBhcmFtIiwibGlua1BhcmFtIiwibGluayIsInBhcmVudCIsInRhcmdldCIsImNsb3Nlc3QiLCJwcmV2ZW50RGVmYXVsdCIsImFmZmlkIiwiZ2V0SXRlbSIsImNwYWlkIiwicGF0aG5hbWUi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LEtBQUssQ0FBQ2EsU0FBUyxDQUFDVyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzlCeEIsS0FBSyxDQUFDYSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEM7RUFFSixDQUFDLENBQUM7RUFFRjhELEtBQUssQ0FBQ3BGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ2pDLElBQUdPLEtBQUssQ0FBQ2EsU0FBUyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUlkLEtBQUssQ0FBQ2EsU0FBUyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUM7TUFDM0VkLEtBQUssQ0FBQ2EsU0FBUyxDQUFDRSxNQUFNLENBQUMsVUFBVSxFQUFHLFNBQVMsRUFBRSxTQUFTLENBQUM7SUFDN0Q7RUFDSixDQUFDLENBQUM7QUFFTixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+e1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG5cbiAgICBjb25zdCB3aGVlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZF9fd2hlZWwtYnRuXCIpO1xuICAgIGNvbnN0IHdoZWVsU2VjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5kX193aGVlbC1zZWN0b3JcIik7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuICAgIGNvbnN0IHBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fYnRuXCIpO1xuXG5cbi8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINC30LLRg9C60ZbQslxuICAgIGNvbnN0IGJhY2tncm91bmRNdXNpYyA9IG5ldyBBdWRpbygnbXVzaWMubXAzJyk7IC8vINGE0L7QvdC+0LLQuNC5INC30LLRg9C6LCDQs9GA0LDRlCDQv9C+0YHRgtGW0LnQvdC+XG4gICAgY29uc3QgcmVlbFNvdW5kID0gbmV3IEF1ZGlvKCdyZWVscy5tcDMnKTsgLy8g0LfQstGD0Log0LrRgNGD0YfQtdC90L3RjyDQutC+0LvQtdGB0LBcbiAgICBjb25zdCByZWVsU3RvcFNvdW5kID0gbmV3IEF1ZGlvKCdyZWVsLXN0b3AubXAzJyk7IC8vINC30LLRg9C6INC60L7Qu9C4INCy0LjQv9Cw0LTQsNGUINGB0LXQutGC0L7RgFxuICAgIGNvbnN0IHBvcHVwU291bmQgPSBuZXcgQXVkaW8oJ3BvcHVwLm1wMycpOyAvLyDQt9Cy0YPQuiDQtNC70Y8g0L/QvtC/0LDQv9GDXG5cbi8vINCk0YPQvdC60YbRltGPINC00LvRjyDQt9Cw0L/Rg9GB0LrRgyDRhNC+0L3QvtCy0L7RlyDQvNGD0LfQuNC60LhcbiAgICBmdW5jdGlvbiBwbGF5QmFja2dyb3VuZE11c2ljKCkge1xuICAgICAgICBiYWNrZ3JvdW5kTXVzaWMucGxheSgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kTXVzaWMuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcGxheUJhY2tncm91bmRNdXNpYygpO1xuICAgIH0pO1xuXG4vLyDRgtCw0Log0Y/QuiDRgdGD0YfQsNGB0L3RliDQsdGA0LDRg9C30LXRgNC4INC70L7Rh9Cw0YLRjCDQsNCy0YLQvtCy0ZbQtNGC0LLQvtGA0LXQvdC90Y8g0LzRg9C30LjQutC4INC90LAg0YHQsNC50YLQsNGFLCDQstGW0YjQsNGU0Lwg0YHQu9GD0YXQsNGH0ZYg0L/QvtC00ZbQuSDRj9C60ZYg0LfQsNC/0YPRgdGC0Y/RgtGMINGX0ZdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwbGF5QmFja2dyb3VuZE11c2ljLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xuICAgIHBsYXlCYWNrZ3JvdW5kTXVzaWMoKVxuXG4gICAgcG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9maXJzdFwiKSkge1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIsIFwiX3pJbmRleFwiKTtcbiAgICAgICAgICAgIHdoZWVsQnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBsZXQgc3BpbkNvdW50ZXIgPSAwO1xuXG4gICAgZnVuY3Rpb24gc3BpbldoZWVsKHdoZWVsLCBhbmltLCBwb3NpdGlvbiwgcG9wdXAsIGJ0bikge1xuICAgICAgICB3aGVlbC5jbGFzc0xpc3QuYWRkKGFuaW0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHBsYXlTb3VuZHMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vINCX0LDRgtGA0LjQvNC60LAg0L/QtdGA0LXQtCDQv9C+0YfQsNGC0LrQvtC8ICgxMDAwINC80YEpXG4gICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMCk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgtCy0L7RgNC10L3QvdGPINC30LLRg9C60YMg0LrRgNGD0YfQtdC90L3RjyDQutC+0LvQtdGB0LBcbiAgICAgICAgICAgICAgICBhd2FpdCByZWVsU291bmQucGxheSgpO1xuXG4gICAgICAgICAgICAgICAgLy8g0JfQsNGC0YDQuNC80LrQsCAoMzQwMCDQvNGBKSDQv9C10YDQtdC0INC/0LDRg9C30L7RjlxuICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDM0MDApO1xuXG4gICAgICAgICAgICAgICAgLy8g0JfRg9C/0LjQvdC60LAg0LfQstGD0LrRgyDQutGA0YPRh9C10L3QvdGPINC60L7Qu9C10YHQsFxuICAgICAgICAgICAgICAgIHJlZWxTb3VuZC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJlZWxTb3VuZC5jdXJyZW50VGltZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyDQl9Cw0YLRgNC40LzQutCwINC/0LXRgNC10LQg0LfQstGD0LrQvtC8INC30YPQv9C40L3QutC4INC60L7Qu9C10YHQsCAoMTQwMCDQvNGBKVxuICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDE0MDApO1xuXG4gICAgICAgICAgICAgICAgLy8g0JLRltC00YLQstC+0YDQtdC90L3RjyDQt9Cy0YPQutGDINC30YPQv9C40L3QutC4INC60L7Qu9C10YHQsFxuICAgICAgICAgICAgICAgIGF3YWl0IHJlZWxTdG9wU291bmQucGxheSgpO1xuXG4gICAgICAgICAgICAgICAgLy8g0JfQsNGC0YDQuNC80LrQsCDQv9C10YDQtdC0INCy0ZbQtNGC0LLQvtGA0LXQvdC90Y/QvCDQt9Cy0YPQutGDINC/0L7Qv9Cw0L/RgyAoODAwINC80YEpXG4gICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoODAwKTtcblxuICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGC0LLQvtGA0LXQvdC90Y8g0LfQstGD0LrRgyDQtNC70Y8g0L/QvtC/0LDQv9GDXG4gICAgICAgICAgICAgICAgYXdhaXQgcG9wdXBTb3VuZC5wbGF5KCk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcItCf0L7QvNC40LvQutCwINC/0YDQuCDQstGW0LTRgtCy0L7RgNC10L3QvdGWINC30LLRg9C60ZbQsjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4vLyDQktC40LrQu9C40Log0YTRg9C90LrRhtGW0ZdcbiAgICAgICAgcGxheVNvdW5kcygpO1xuXG5cblxuICAgICAgICAvLyAvLyDQt9Cy0YPQuiDQutGA0YPRh9C10L3QvdGPINC60L7Qu9C10YHQsFxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAvLyAgICAgcmVlbFNvdW5kLnBsYXkoKTtcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIC8vICAgICAgICAgcmVlbFNvdW5kLnBhdXNlKCk7XG4gICAgICAgIC8vICAgICAgICAgcmVlbFNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAvLyAgICAgICAgICAgICByZWVsU3RvcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHBvcHVwU291bmQucGxheSgpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9LCA4MDApXG4gICAgICAgIC8vICAgICAgICAgfSwgMTQwMClcbiAgICAgICAgLy8gICAgIH0sMzQwMCk7XG4gICAgICAgIC8vIH0sMTAwMClcblxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAvLyAgICAgcmVlbFNvdW5kLnBsYXkoKTtcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgICAgICByZWVsU291bmQucGF1c2UoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVlbFNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJlZWxTdG9wU291bmQucGxheSgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcG9wdXBTb3VuZC5wbGF5KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAvLyAgICAgICAgICAgICB9LCAxODAwKTtcbiAgICAgICAgLy8gICAgICAgICB9LCAxMDAwKVxuICAgICAgICAvLyAgICAgfSwgMzAwMCk7XG4gICAgICAgIC8vIH0sIDEwMDApXG5cblxuXG4gICAgICAgIC8vIHJlZWxTb3VuZC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vICAgICAvLyDQlNC+0YfQtdC60LDQstGI0LjRgdGMINC00L7Qt9Cy0L7Qu9GDINCx0YDQsNGD0LfQtdGA0LAg0L3QsCDQstGW0LTRgtCy0L7RgNC10L3QvdGPXG4gICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIC8vICAgICAvLyDQn9C+0LzQuNC70LrQsCDQstGW0LTRgtCy0L7RgNC10L3QvdGPLCDQvNC+0LbQvdCwINC+0LHRgNC+0LHQuNGC0LhcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCLQn9C+0LzQuNC70LrQsCDQstGW0LTRgtCy0L7RgNC10L3QvdGPINC30LLRg9C60YM6IFwiLCBlcnIpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyAvLyDQl9GD0L/QuNC90Y/RlNC80L4g0LfQstGD0Log0LrRgNGD0YfQtdC90L3RjyDQutC+0LvQtdGB0LBcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgLy8gICAgIHJlZWxTb3VuZC5wYXVzZSgpO1xuICAgICAgICAvLyAgICAgcmVlbFNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIC8vICAgICAgICAgLy8g0LfQstGD0Log0LfRg9C/0LjQvdC60Lgg0LrQvtC70LXRgdCwXG4gICAgICAgIC8vICAgICAgICAgcmVlbFN0b3BTb3VuZC5wbGF5KCk7XG4gICAgICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8g0JLRltC00YLQstC+0YDRjtGU0LzQviDQt9Cy0YPQuiDQtNC70Y8g0L/QvtC/0LDQv9GDXG4gICAgICAgIC8vICAgICAgICAgICAgIHBvcHVwU291bmQucGxheSgpO1xuICAgICAgICAvLyAgICAgICAgIH0sIDYwMClcbiAgICAgICAgLy8gICAgIH0sIDE4MDApXG4gICAgICAgIC8vIH0sIDQ4MDApXG5cbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb24gcGxheVNvdW5kcygpIHtcbiAgICAgICAgLy8gICAgIHJlZWxTb3VuZC5wYXVzZSgpO1xuICAgICAgICAvLyAgICAgcmVlbFNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgLy8gICAgIGF3YWl0IHNsZWVwKDE4MDApO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgLy8g0LfQstGD0Log0LfRg9C/0LjQvdC60Lgg0LrQvtC70LXRgdCwXG4gICAgICAgIC8vICAgICByZWVsU3RvcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgLy8gICAgIGF3YWl0IHNsZWVwKDYwMCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAvLyDQktGW0LTRgtCy0L7RgNGO0ZTQvNC+INC30LLRg9C6INC00LvRjyDQv9C+0L/QsNC/0YNcbiAgICAgICAgLy8gICAgIHBvcHVwU291bmQucGxheSgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHNldFRpbWVvdXQocGxheVNvdW5kcywgNDgwMCk7XG5cblxuICAgICAgICB3aGVlbC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgIHdoZWVsLmNsYXNzTGlzdC5yZW1vdmUoYW5pbSk7XG4gICAgICAgICAgICB3aGVlbC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cG9zaXRpb259ZGVnKWA7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiwgXCJfekluZGV4XCIpO1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJfYnRuUHVsc2VcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0LXdpblwiKS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSBcImluaXRpYWxcIlxuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgd2hlZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgd2hlZWxCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICBpZiAoc3BpbkNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAgIHdoZWVsQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfYnRuUHVsc2VcIik7XG4gICAgICAgICAgICBzcGluV2hlZWwod2hlZWxTZWN0b3IsIFwiZmlyc3RTcGluXCIsIDE2MjAsIHBvcHVwLCB3aGVlbEJ0bik7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX2ZpcnN0XCIpO1xuICAgICAgICAgICAgc3BpbkNvdW50ZXIrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGluQ291bnRlciA9PT0gMSkge1xuICAgICAgICAgICAgd2hlZWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9idG5QdWxzZVwiKTtcbiAgICAgICAgICAgIHNwaW5XaGVlbCh3aGVlbFNlY3RvciwgXCJzZWNvbmRTcGluXCIsIDI3NDQuNSwgcG9wdXAsIHdoZWVsQnRuKTtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfc2Vjb25kXCIpO1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9maXJzdFwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtbGlua1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiX2hpZGRlblwiKVxuICAgICAgICAgICAgfSwgODUwMClcblxuICAgICAgICAgICAgc3BpbkNvdW50ZXIrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4vLyBwYXJhbGxheFxuICAgIGNvbnN0IG1vdmVTcGVlZCA9IDI2MDtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk1MCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHBhcmFsbGF4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJhbGxheChlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFyYWxsYXhcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW92aW5nX3ZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuICAgICAgICAgICAgbGV0IHkgPSAoZS5jbGllbnRYICogbW92aW5nX3ZhbHVlKSAvIG1vdmVTcGVlZDtcbiAgICAgICAgICAgIGxldCB4ID0gKGUuY2xpZW50WSAqIG1vdmluZ192YWx1ZSkgLyBtb3ZlU3BlZWQ7XG4gICAgICAgICAgICBsZXQgeiA9IChlLmNsaWVudFkgKiBtb3ZpbmdfdmFsdWUpIC8gbW92ZVNwZWVkICogMjtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHBlcnNwZWN0aXZlKDMwMHB4KSB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4vLyBURFMgc2NyaXB0XG5cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIHZhciBwYXJhbXMgPSBbJ2wnLCAndXRtX3NvdXJjZScsICd1dG1fbWVkaXVtJywgJ3V0bV9jYW1wYWlnbicsICd1dG1fdGVybScsICd1dG1fY29udGVudCcsICdwYXJhbTEnLCAncGFyYW0yJywgJ3BhcmFtMycsICdwYXJhbTQnLCAnY3JlYXRpdmVfdHlwZScsICdjcmVhdGl2ZV9pZCddO1xuICAgICAgICB2YXIgbGlua1BhcmFtcyA9IFsnYWZmaWQnLCAnY3BhaWQnXTsgLy8g0LjRidC10Lwg0LIgdXJsIHJlZGlyZWN0VXJsINCyIHVybDpcblxuICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3JlZGlyZWN0VXJsJykpIHtcbiAgICAgICAgICAgIHZhciByZWRpcmVjdFVybCA9IG5ldyBVUkwodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VXJsJykpO1xuXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RVcmwuaHJlZi5tYXRjaCgvXFwvL2cpLmxlbmd0aCA9PT0gNCAmJiByZWRpcmVjdFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdsJykpIHtcbiAgICAgICAgICAgICAgICAvL9C10YHQu9C4INGB0YHRi9C70LrQsCDQsiDRgdGB0YvQu9C60LAgcmVkaXJlY3RVcmwg0LrQvtGA0YDQtdC60YLQvdCw0Y9cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVkaXJlY3RVcmwnLCByZWRpcmVjdFVybC5ocmVmKTsgLy8g0YPQutCw0LfRi9Cy0LDQtdC8INGC0L7Rh9C60L7QuSDQstGF0L7QtNCwINC00L7QvNC10L0g0YEg0L/RgNC+0YLQvtC60L7Qu9C+0Lwg0LjQtyByZWRpcmVjdFVybFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwYXJhbSwgdXJsLnNlYXJjaFBhcmFtcy5nZXQocGFyYW0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGlua1BhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rUGFyYW0pIHtcbiAgICAgICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhsaW5rUGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaW5rUGFyYW0sIHVybC5zZWFyY2hQYXJhbXMuZ2V0KGxpbmtQYXJhbSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGxpbmssXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpICE9PSAnaHR0cHM6Ly90ZHMuZmF2YmV0LnBhcnRuZXJzJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgYWZmaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWZmaWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgY3BhaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3BhaWQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZGlyZWN0VXJsXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgVVJMKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVkaXJlY3RVcmxcIikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgVVJMKHBhcmVudC5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmZmlkICYmIGNwYWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnBhdGhuYW1lID0gJy8nICsgYWZmaWQgKyAnLycgKyBjcGFpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnNlYXJjaFBhcmFtcy5zZXQocGFyYW0sIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhcmFtKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBsaW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG5cbi8vLyBmb3IgdGVzdFxuXG4gICAgY29uc3QgcG9wdXAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDFcIilcbiAgICBjb25zdCBwb3B1cDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwMlwiKVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVBvcHVwXCIpXG5cbiAgICBwb3B1cDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiAsIFwiX3pJbmRleFwiLCBcIl9maXJzdFwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0LXdpblwiKS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSBcImluaXRpYWxcIlxuICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3NlY29uZFwiKSl7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NlY29uZFwiKVxuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9maXJzdFwiKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbHNle1xuICAgICAgICAvLyAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9maXJzdFwiKVxuICAgICAgICAvLyB9XG5cbiAgICB9KVxuXG4gICAgcG9wdXAyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIgLCBcIl96SW5kZXhcIiwgXCJfc2Vjb25kXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0LXdpblwiKS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSBcImluaXRpYWxcIlxuICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2ZpcnN0XCIpKXtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfc2Vjb25kXCIpXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2ZpcnN0XCIpXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9vcGFjaXR5XCIpICYmIHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl96SW5kZXhcIikpe1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIgLCBcIl96SW5kZXhcIiwgXCJfc2Vjb25kXCIpXG4gICAgICAgIH1cbiAgICB9KVxuXG59KVxuXG5cbiJdfQ==
