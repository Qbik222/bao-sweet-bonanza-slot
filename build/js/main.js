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
    function delaySound(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
    (function () {
      var _playSounds = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return delaySound(1000);
            case 3:
              _context.next = 5;
              return reelSound.play();
            case 5:
              _context.next = 7;
              return delaySound(3400);
            case 7:
              // Зупинка звуку кручення колеса
              reelSound.pause();
              reelSound.currentTime = 0;

              // Затримка перед звуком зупинки колеса (1400 мс)
              _context.next = 11;
              return delaySound(1400);
            case 11:
              _context.next = 13;
              return reelStopSound.play();
            case 13:
              _context.next = 15;
              return delaySound(800);
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
      function playSounds() {
        return _playSounds.apply(this, arguments);
      }
      return playSounds;
    })()();

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ3aGVlbEJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJ3aGVlbFNlY3RvciIsInBvcHVwIiwicG9wdXBCdG4iLCJiYWNrZ3JvdW5kTXVzaWMiLCJBdWRpbyIsInJlZWxTb3VuZCIsInJlZWxTdG9wU291bmQiLCJwb3B1cFNvdW5kIiwicGxheUJhY2tncm91bmRNdXNpYyIsInBsYXkiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwib25jZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwic3BpbkNvdW50ZXIiLCJzcGluV2hlZWwiLCJ3aGVlbCIsImFuaW0iLCJwb3NpdGlvbiIsImJ0biIsImFkZCIsImRlbGF5U291bmQiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJlcnJvciIsInBsYXlTb3VuZHMiLCJ0cmFuc2Zvcm0iLCJhbmltYXRpb25QbGF5U3RhdGUiLCJtb3ZlU3BlZWQiLCJpbm5lcldpZHRoIiwicGFyYWxsYXgiLCJlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwibW92aW5nX3ZhbHVlIiwiZ2V0QXR0cmlidXRlIiwieSIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInoiLCJ1cmwiLCJVUkwiLCJocmVmIiwicGFyYW1zIiwibGlua1BhcmFtcyIsInNlYXJjaFBhcmFtcyIsImhhcyIsInJlZGlyZWN0VXJsIiwiZ2V0IiwibWF0Y2giLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicGFyYW0iLCJsaW5rUGFyYW0iLCJsaW5rIiwicGFyZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsInByZXZlbnREZWZhdWx0IiwiYWZmaWQiLCJnZXRJdGVtIiwiY3BhaWQiLCJwYXRo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bkNkLEtBQUssQ0FBQ2EsU0FBUyxDQUFDVyxHQUFHLENBQUMsU0FBUyxDQUFDO01BQzlCeEIsS0FBSyxDQUFDYSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEM7RUFFSixDQUFDLENBQUM7RUFFRjhELEtBQUssQ0FBQ3BGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ2pDLElBQUdPLEtBQUssQ0FBQ2EsU0FBUyxDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUlkLEtBQUssQ0FBQ2EsU0FBUyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUM7TUFDM0VkLEtBQUssQ0FBQ2EsU0FBUyxDQUFDRSxNQUFNLENBQUMsVUFBVSxFQUFHLFNBQVMsRUFBRSxTQUFTLENBQUM7SUFDN0Q7RUFDSixDQUFDLENBQUM7QUFFTixDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+e1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG5cbiAgICBjb25zdCB3aGVlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZF9fd2hlZWwtYnRuXCIpO1xuICAgIGNvbnN0IHdoZWVsU2VjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5kX193aGVlbC1zZWN0b3JcIik7XG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuICAgIGNvbnN0IHBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fYnRuXCIpO1xuXG5cbi8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINC30LLRg9C60ZbQslxuICAgIGNvbnN0IGJhY2tncm91bmRNdXNpYyA9IG5ldyBBdWRpbygnbXVzaWMubXAzJyk7IC8vINGE0L7QvdC+0LLQuNC5INC30LLRg9C6LCDQs9GA0LDRlCDQv9C+0YHRgtGW0LnQvdC+XG4gICAgY29uc3QgcmVlbFNvdW5kID0gbmV3IEF1ZGlvKCdyZWVscy5tcDMnKTsgLy8g0LfQstGD0Log0LrRgNGD0YfQtdC90L3RjyDQutC+0LvQtdGB0LBcbiAgICBjb25zdCByZWVsU3RvcFNvdW5kID0gbmV3IEF1ZGlvKCdyZWVsLXN0b3AubXAzJyk7IC8vINC30LLRg9C6INC60L7Qu9C4INCy0LjQv9Cw0LTQsNGUINGB0LXQutGC0L7RgFxuICAgIGNvbnN0IHBvcHVwU291bmQgPSBuZXcgQXVkaW8oJ3BvcHVwLm1wMycpOyAvLyDQt9Cy0YPQuiDQtNC70Y8g0L/QvtC/0LDQv9GDXG5cbi8vINCk0YPQvdC60YbRltGPINC00LvRjyDQt9Cw0L/Rg9GB0LrRgyDRhNC+0L3QvtCy0L7RlyDQvNGD0LfQuNC60LhcbiAgICBmdW5jdGlvbiBwbGF5QmFja2dyb3VuZE11c2ljKCkge1xuICAgICAgICBiYWNrZ3JvdW5kTXVzaWMucGxheSgpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kTXVzaWMuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcGxheUJhY2tncm91bmRNdXNpYygpO1xuICAgIH0pO1xuXG4vLyDRgtCw0Log0Y/QuiDRgdGD0YfQsNGB0L3RliDQsdGA0LDRg9C30LXRgNC4INC70L7Rh9Cw0YLRjCDQsNCy0YLQvtCy0ZbQtNGC0LLQvtGA0LXQvdC90Y8g0LzRg9C30LjQutC4INC90LAg0YHQsNC50YLQsNGFLCDQstGW0YjQsNGU0Lwg0YHQu9GD0YXQsNGH0ZYg0L/QvtC00ZbQuSDRj9C60ZYg0LfQsNC/0YPRgdGC0Y/RgtGMINGX0ZdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwbGF5QmFja2dyb3VuZE11c2ljLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xuICAgIHBsYXlCYWNrZ3JvdW5kTXVzaWMoKVxuXG4gICAgcG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9maXJzdFwiKSkge1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIsIFwiX3pJbmRleFwiKTtcbiAgICAgICAgICAgIHdoZWVsQnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImluaXRpYWxcIjtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBsZXQgc3BpbkNvdW50ZXIgPSAwO1xuXG4gICAgZnVuY3Rpb24gc3BpbldoZWVsKHdoZWVsLCBhbmltLCBwb3NpdGlvbiwgcG9wdXAsIGJ0bikge1xuICAgICAgICB3aGVlbC5jbGFzc0xpc3QuYWRkKGFuaW0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRlbGF5U291bmQobXMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgICAgICAgfVxuICAgICAgICAoYXN5bmMgZnVuY3Rpb24gcGxheVNvdW5kcygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8g0JfQsNGC0YDQuNC80LrQsCDQv9C10YDQtdC0INC/0L7Rh9Cw0YLQutC+0LwgKDEwMDAg0LzRgSlcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheVNvdW5kKDEwMDApO1xuXG4gICAgICAgICAgICAgICAgLy8g0JLRltC00YLQstC+0YDQtdC90L3RjyDQt9Cy0YPQutGDINC60YDRg9GH0LXQvdC90Y8g0LrQvtC70LXRgdCwXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVlbFNvdW5kLnBsYXkoKTtcblxuICAgICAgICAgICAgICAgIC8vINCX0LDRgtGA0LjQvNC60LAgKDM0MDAg0LzRgSkg0L/QtdGA0LXQtCDQv9Cw0YPQt9C+0Y5cbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheVNvdW5kKDM0MDApO1xuXG4gICAgICAgICAgICAgICAgLy8g0JfRg9C/0LjQvdC60LAg0LfQstGD0LrRgyDQutGA0YPRh9C10L3QvdGPINC60L7Qu9C10YHQsFxuICAgICAgICAgICAgICAgIHJlZWxTb3VuZC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIHJlZWxTb3VuZC5jdXJyZW50VGltZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyDQl9Cw0YLRgNC40LzQutCwINC/0LXRgNC10LQg0LfQstGD0LrQvtC8INC30YPQv9C40L3QutC4INC60L7Qu9C10YHQsCAoMTQwMCDQvNGBKVxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5U291bmQoMTQwMCk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgtCy0L7RgNC10L3QvdGPINC30LLRg9C60YMg0LfRg9C/0LjQvdC60Lgg0LrQvtC70LXRgdCwXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVlbFN0b3BTb3VuZC5wbGF5KCk7XG5cbiAgICAgICAgICAgICAgICAvLyDQl9Cw0YLRgNC40LzQutCwINC/0LXRgNC10LQg0LLRltC00YLQstC+0YDQtdC90L3Rj9C8INC30LLRg9C60YMg0L/QvtC/0LDQv9GDICg4MDAg0LzRgSlcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheVNvdW5kKDgwMCk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgtCy0L7RgNC10L3QvdGPINC30LLRg9C60YMg0LTQu9GPINC/0L7Qv9Cw0L/Rg1xuICAgICAgICAgICAgICAgIGF3YWl0IHBvcHVwU291bmQucGxheSgpO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLQn9C+0LzQuNC70LrQsCDQv9GA0Lgg0LLRltC00YLQstC+0YDQtdC90L3RliDQt9Cy0YPQutGW0LI6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgLy8gLy8g0LfQstGD0Log0LrRgNGD0YfQtdC90L3RjyDQutC+0LvQtdGB0LBcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgLy8gICAgIHJlZWxTb3VuZC5wbGF5KCk7XG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAvLyAgICAgICAgIHJlZWxTb3VuZC5wYXVzZSgpO1xuICAgICAgICAvLyAgICAgICAgIHJlZWxTb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVlbFN0b3BTb3VuZC5wbGF5KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBwb3B1cFNvdW5kLnBsYXkoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgODAwKVxuICAgICAgICAvLyAgICAgICAgIH0sIDE0MDApXG4gICAgICAgIC8vICAgICB9LDM0MDApO1xuICAgICAgICAvLyB9LDEwMDApXG5cbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgLy8gICAgIHJlZWxTb3VuZC5wbGF5KCk7XG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVlbFNvdW5kLnBhdXNlKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJlZWxTb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZWVsU3RvcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBvcHVwU291bmQucGxheSgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgMTgwMCk7XG4gICAgICAgIC8vICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgLy8gICAgIH0sIDMwMDApO1xuICAgICAgICAvLyB9LCAxMDAwKVxuXG5cblxuICAgICAgICAvLyByZWVsU291bmQucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyAgICAgLy8g0JTQvtGH0LXQutCw0LLRiNC40YHRjCDQtNC+0LfQstC+0LvRgyDQsdGA0LDRg9C30LXRgNCwINC90LAg0LLRltC00YLQstC+0YDQtdC90L3Rj1xuICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAgICAgLy8g0J/QvtC80LjQu9C60LAg0LLRltC00YLQstC+0YDQtdC90L3Rjywg0LzQvtC20L3QsCDQvtCx0YDQvtCx0LjRgtC4XG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwi0J/QvtC80LjQu9C60LAg0LLRltC00YLQstC+0YDQtdC90L3RjyDQt9Cy0YPQutGDOiBcIiwgZXJyKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gLy8g0JfRg9C/0LjQvdGP0ZTQvNC+INC30LLRg9C6INC60YDRg9GH0LXQvdC90Y8g0LrQvtC70LXRgdCwXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIC8vICAgICByZWVsU291bmQucGF1c2UoKTtcbiAgICAgICAgLy8gICAgIHJlZWxTb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAvLyAgICAgICAgIC8vINC30LLRg9C6INC30YPQv9C40L3QutC4INC60L7Qu9C10YHQsFxuICAgICAgICAvLyAgICAgICAgIHJlZWxTdG9wU291bmQucGxheSgpO1xuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vINCS0ZbQtNGC0LLQvtGA0Y7RlNC80L4g0LfQstGD0Log0LTQu9GPINC/0L7Qv9Cw0L/Rg1xuICAgICAgICAvLyAgICAgICAgICAgICBwb3B1cFNvdW5kLnBsYXkoKTtcbiAgICAgICAgLy8gICAgICAgICB9LCA2MDApXG4gICAgICAgIC8vICAgICB9LCAxODAwKVxuICAgICAgICAvLyB9LCA0ODAwKVxuXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9uIHBsYXlTb3VuZHMoKSB7XG4gICAgICAgIC8vICAgICByZWVsU291bmQucGF1c2UoKTtcbiAgICAgICAgLy8gICAgIHJlZWxTb3VuZC5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIC8vICAgICBhd2FpdCBzbGVlcCgxODAwKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIC8vINC30LLRg9C6INC30YPQv9C40L3QutC4INC60L7Qu9C10YHQsFxuICAgICAgICAvLyAgICAgcmVlbFN0b3BTb3VuZC5wbGF5KCk7XG4gICAgICAgIC8vICAgICBhd2FpdCBzbGVlcCg2MDApO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgLy8g0JLRltC00YLQstC+0YDRjtGU0LzQviDQt9Cy0YPQuiDQtNC70Y8g0L/QvtC/0LDQv9GDXG4gICAgICAgIC8vICAgICBwb3B1cFNvdW5kLnBsYXkoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBzZXRUaW1lb3V0KHBsYXlTb3VuZHMsIDQ4MDApO1xuXG5cbiAgICAgICAgd2hlZWwuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICB3aGVlbC5jbGFzc0xpc3QucmVtb3ZlKGFuaW0pO1xuICAgICAgICAgICAgd2hlZWwuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3Bvc2l0aW9ufWRlZylgO1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIsIFwiX3pJbmRleFwiKTtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiX2J0blB1bHNlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maXJzdC13aW5cIikuc3R5bGUuYW5pbWF0aW9uUGxheVN0YXRlID0gXCJpbml0aWFsXCJcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHdoZWVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHdoZWVsQnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgaWYgKHNwaW5Db3VudGVyID09PSAwKSB7XG4gICAgICAgICAgICB3aGVlbEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2J0blB1bHNlXCIpO1xuICAgICAgICAgICAgc3BpbldoZWVsKHdoZWVsU2VjdG9yLCBcImZpcnN0U3BpblwiLCAxNjIwLCBwb3B1cCwgd2hlZWxCdG4pO1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9maXJzdFwiKTtcbiAgICAgICAgICAgIHNwaW5Db3VudGVyKys7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BpbkNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgICAgIHdoZWVsQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfYnRuUHVsc2VcIik7XG4gICAgICAgICAgICBzcGluV2hlZWwod2hlZWxTZWN0b3IsIFwic2Vjb25kU3BpblwiLCAyNzQ0LjUsIHBvcHVwLCB3aGVlbEJ0bik7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX3NlY29uZFwiKTtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfZmlyc3RcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLWxpbmtcIikuY2xhc3NMaXN0LnJlbW92ZShcIl9oaWRkZW5cIilcbiAgICAgICAgICAgIH0sIDg1MDApXG5cbiAgICAgICAgICAgIHNwaW5Db3VudGVyKys7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9KTtcblxuLy8gcGFyYWxsYXhcbiAgICBjb25zdCBtb3ZlU3BlZWQgPSAyNjA7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5NTApIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBwYXJhbGxheCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyYWxsYXgoZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhcmFsbGF4XCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vdmluZ192YWx1ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKTtcbiAgICAgICAgICAgIGxldCB5ID0gKGUuY2xpZW50WCAqIG1vdmluZ192YWx1ZSkgLyBtb3ZlU3BlZWQ7XG4gICAgICAgICAgICBsZXQgeCA9IChlLmNsaWVudFkgKiBtb3ZpbmdfdmFsdWUpIC8gbW92ZVNwZWVkO1xuICAgICAgICAgICAgbGV0IHogPSAoZS5jbGllbnRZICogbW92aW5nX3ZhbHVlKSAvIG1vdmVTcGVlZCAqIDI7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGBwZXJzcGVjdGl2ZSgzMDBweCkgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuLy8gVERTIHNjcmlwdFxuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICB2YXIgcGFyYW1zID0gWydsJywgJ3V0bV9zb3VyY2UnLCAndXRtX21lZGl1bScsICd1dG1fY2FtcGFpZ24nLCAndXRtX3Rlcm0nLCAndXRtX2NvbnRlbnQnLCAncGFyYW0xJywgJ3BhcmFtMicsICdwYXJhbTMnLCAncGFyYW00JywgJ2NyZWF0aXZlX3R5cGUnLCAnY3JlYXRpdmVfaWQnXTtcbiAgICAgICAgdmFyIGxpbmtQYXJhbXMgPSBbJ2FmZmlkJywgJ2NwYWlkJ107IC8vINC40YnQtdC8INCyIHVybCByZWRpcmVjdFVybCDQsiB1cmw6XG5cbiAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKCdyZWRpcmVjdFVybCcpKSB7XG4gICAgICAgICAgICB2YXIgcmVkaXJlY3RVcmwgPSBuZXcgVVJMKHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdyZWRpcmVjdFVybCcpKTtcblxuICAgICAgICAgICAgaWYgKHJlZGlyZWN0VXJsLmhyZWYubWF0Y2goL1xcLy9nKS5sZW5ndGggPT09IDQgJiYgcmVkaXJlY3RVcmwuc2VhcmNoUGFyYW1zLmdldCgnbCcpKSB7XG4gICAgICAgICAgICAgICAgLy/QtdGB0LvQuCDRgdGB0YvQu9C60LAg0LIg0YHRgdGL0LvQutCwIHJlZGlyZWN0VXJsINC60L7RgNGA0LXQutGC0L3QsNGPXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlZGlyZWN0VXJsJywgcmVkaXJlY3RVcmwuaHJlZik7IC8vINGD0LrQsNC30YvQstCw0LXQvCDRgtC+0YfQutC+0Lkg0LLRhdC+0LTQsCDQtNC+0LzQtdC9INGBINC/0YDQvtGC0L7QutC+0LvQvtC8INC40LcgcmVkaXJlY3RVcmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKHBhcmFtKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocGFyYW0sIHVybC5zZWFyY2hQYXJhbXMuZ2V0KHBhcmFtKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxpbmtQYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAobGlua1BhcmFtKSB7XG4gICAgICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMobGlua1BhcmFtKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlua1BhcmFtLCB1cmwuc2VhcmNoUGFyYW1zLmdldChsaW5rUGFyYW0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBsaW5rLFxuICAgICAgICAgICAgICAgIHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSAhPT0gJ2h0dHBzOi8vdGRzLmZhdmJldC5wYXJ0bmVycycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGFmZmlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FmZmlkJyk7XG4gICAgICAgICAgICAgICAgdmFyIGNwYWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NwYWlkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWRpcmVjdFVybFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5rID0gbmV3IFVSTChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZGlyZWN0VXJsXCIpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaW5rID0gbmV3IFVSTChwYXJlbnQuaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZmZpZCAmJiBjcGFpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5wYXRobmFtZSA9ICcvJyArIGFmZmlkICsgJy8nICsgY3BhaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKHBhcmFtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5zZWFyY2hQYXJhbXMuc2V0KHBhcmFtLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYXJhbSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gbGluaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuXG4vLy8gZm9yIHRlc3RcblxuICAgIGNvbnN0IHBvcHVwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAxXCIpXG4gICAgY29uc3QgcG9wdXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDJcIilcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VQb3B1cFwiKVxuXG4gICAgcG9wdXAxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIgLCBcIl96SW5kZXhcIiwgXCJfZmlyc3RcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maXJzdC13aW5cIikuc3R5bGUuYW5pbWF0aW9uUGxheVN0YXRlID0gXCJpbml0aWFsXCJcbiAgICAgICAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9zZWNvbmRcIikpe1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9zZWNvbmRcIilcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfZmlyc3RcIilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgLy8gICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfZmlyc3RcIilcbiAgICAgICAgLy8gfVxuXG4gICAgfSlcblxuICAgIHBvcHVwMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiICwgXCJfekluZGV4XCIsIFwiX3NlY29uZFwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maXJzdC13aW5cIikuc3R5bGUuYW5pbWF0aW9uUGxheVN0YXRlID0gXCJpbml0aWFsXCJcbiAgICAgICAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9maXJzdFwiKSl7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX3NlY29uZFwiKVxuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9maXJzdFwiKVxuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZihwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJfb3BhY2l0eVwiKSAmJiBwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJfekluZGV4XCIpKXtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BhY2l0eVwiICwgXCJfekluZGV4XCIsIFwiX3NlY29uZFwiKVxuICAgICAgICB9XG4gICAgfSlcblxufSlcblxuXG4iXX0=
