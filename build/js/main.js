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

    // // звук кручення колеса варіант без промісів
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ3aGVlbEJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJ3aGVlbFNlY3RvciIsInBvcHVwIiwicG9wdXBCdG4iLCJiYWNrZ3JvdW5kTXVzaWMiLCJBdWRpbyIsInJlZWxTb3VuZCIsInJlZWxTdG9wU291bmQiLCJwb3B1cFNvdW5kIiwicGxheUJhY2tncm91bmRNdXNpYyIsInBsYXkiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwib25jZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwic3BpbkNvdW50ZXIiLCJzcGluV2hlZWwiLCJ3aGVlbCIsImFuaW0iLCJwb3NpdGlvbiIsImJ0biIsImFkZCIsImRlbGF5U291bmQiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJlcnJvciIsInBsYXlTb3VuZHMiLCJ0cmFuc2Zvcm0iLCJhbmltYXRpb25QbGF5U3RhdGUiLCJtb3ZlU3BlZWQiLCJpbm5lcldpZHRoIiwicGFyYWxsYXgiLCJlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwibW92aW5nX3ZhbHVlIiwiZ2V0QXR0cmlidXRlIiwieSIsImNsaWVudFgiLCJ4IiwiY2xpZW50WSIsInoiLCJ1cmwiLCJVUkwiLCJocmVmIiwicGFyYW1zIiwibGlua1BhcmFtcyIsInNlYXJjaFBhcmFtcyIsImhhcyIsInJlZGlyZWN0VXJsIiwiZ2V0IiwibWF0Y2giLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicGFyYW0iLCJsaW5rUGFyYW0iLCJsaW5rIiwicGFyZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsInByZXZlbnREZWZhdWx0IiwiYWZmaWQiLCJnZXRJdGVtIiwiY3BhaWQiLCJwYXRo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LFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQztNQUMzRWQsS0FBSyxDQUFDYSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxVQUFVLEVBQUcsU0FBUyxFQUFFLFNBQVMsQ0FBQztJQUM3RDtFQUNKLENBQUMsQ0FBQztBQUVOLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT57XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcblxuICAgIGNvbnN0IHdoZWVsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5kX193aGVlbC1idG5cIik7XG4gICAgY29uc3Qgd2hlZWxTZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmRfX3doZWVsLXNlY3RvclwiKTtcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBcIik7XG4gICAgY29uc3QgcG9wdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19idG5cIik7XG5cblxuLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0LfQstGD0LrRltCyXG4gICAgY29uc3QgYmFja2dyb3VuZE11c2ljID0gbmV3IEF1ZGlvKCdtdXNpYy5tcDMnKTsgLy8g0YTQvtC90L7QstC40Lkg0LfQstGD0LosINCz0YDQsNGUINC/0L7RgdGC0ZbQudC90L5cbiAgICBjb25zdCByZWVsU291bmQgPSBuZXcgQXVkaW8oJ3JlZWxzLm1wMycpOyAvLyDQt9Cy0YPQuiDQutGA0YPRh9C10L3QvdGPINC60L7Qu9C10YHQsFxuICAgIGNvbnN0IHJlZWxTdG9wU291bmQgPSBuZXcgQXVkaW8oJ3JlZWwtc3RvcC5tcDMnKTsgLy8g0LfQstGD0Log0LrQvtC70Lgg0LLQuNC/0LDQtNCw0ZQg0YHQtdC60YLQvtGAXG4gICAgY29uc3QgcG9wdXBTb3VuZCA9IG5ldyBBdWRpbygncG9wdXAubXAzJyk7IC8vINC30LLRg9C6INC00LvRjyDQv9C+0L/QsNC/0YNcblxuLy8g0KTRg9C90LrRhtGW0Y8g0LTQu9GPINC30LDQv9GD0YHQutGDINGE0L7QvdC+0LLQvtGXINC80YPQt9C40LrQuFxuICAgIGZ1bmN0aW9uIHBsYXlCYWNrZ3JvdW5kTXVzaWMoKSB7XG4gICAgICAgIGJhY2tncm91bmRNdXNpYy5wbGF5KCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIGJhY2tncm91bmRNdXNpYy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBwbGF5QmFja2dyb3VuZE11c2ljKCk7XG4gICAgfSk7XG5cbi8vINGC0LDQuiDRj9C6INGB0YPRh9Cw0YHQvdGWINCx0YDQsNGD0LfQtdGA0Lgg0LvQvtGH0LDRgtGMINCw0LLRgtC+0LLRltC00YLQstC+0YDQtdC90L3RjyDQvNGD0LfQuNC60Lgg0L3QsCDRgdCw0LnRgtCw0YUsINCy0ZbRiNCw0ZTQvCDRgdC70YPRhdCw0YfRliDQv9C+0LTRltC5INGP0LrRliDQt9Cw0L/Rg9GB0YLRj9GC0Ywg0ZfRl1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHBsYXlCYWNrZ3JvdW5kTXVzaWMsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUJhY2tncm91bmRNdXNpYywgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwbGF5QmFja2dyb3VuZE11c2ljLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgcGxheUJhY2tncm91bmRNdXNpYygpXG5cbiAgICBwb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2ZpcnN0XCIpKSB7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIiwgXCJfekluZGV4XCIpO1xuICAgICAgICAgICAgd2hlZWxCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiaW5pdGlhbFwiO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgIGxldCBzcGluQ291bnRlciA9IDA7XG5cbiAgICBmdW5jdGlvbiBzcGluV2hlZWwod2hlZWwsIGFuaW0sIHBvc2l0aW9uLCBwb3B1cCwgYnRuKSB7XG4gICAgICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoYW5pbSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZGVsYXlTb3VuZChtcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICAgICAgICB9XG4gICAgICAgIChhc3luYyBmdW5jdGlvbiBwbGF5U291bmRzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyDQl9Cw0YLRgNC40LzQutCwINC/0LXRgNC10LQg0L/QvtGH0LDRgtC60L7QvCAoMTAwMCDQvNGBKVxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5U291bmQoMTAwMCk7XG5cbiAgICAgICAgICAgICAgICAvLyDQktGW0LTRgtCy0L7RgNC10L3QvdGPINC30LLRg9C60YMg0LrRgNGD0YfQtdC90L3RjyDQutC+0LvQtdGB0LBcbiAgICAgICAgICAgICAgICBhd2FpdCByZWVsU291bmQucGxheSgpO1xuXG4gICAgICAgICAgICAgICAgLy8g0JfQsNGC0YDQuNC80LrQsCAoMzQwMCDQvNGBKSDQv9C10YDQtdC0INC/0LDRg9C30L7RjlxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5U291bmQoMzQwMCk7XG5cbiAgICAgICAgICAgICAgICAvLyDQl9GD0L/QuNC90LrQsCDQt9Cy0YPQutGDINC60YDRg9GH0LXQvdC90Y8g0LrQvtC70LXRgdCwXG4gICAgICAgICAgICAgICAgcmVlbFNvdW5kLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgcmVlbFNvdW5kLmN1cnJlbnRUaW1lID0gMDtcblxuICAgICAgICAgICAgICAgIC8vINCX0LDRgtGA0LjQvNC60LAg0L/QtdGA0LXQtCDQt9Cy0YPQutC+0Lwg0LfRg9C/0LjQvdC60Lgg0LrQvtC70LXRgdCwICgxNDAwINC80YEpXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsYXlTb3VuZCgxNDAwKTtcblxuICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGC0LLQvtGA0LXQvdC90Y8g0LfQstGD0LrRgyDQt9GD0L/QuNC90LrQuCDQutC+0LvQtdGB0LBcbiAgICAgICAgICAgICAgICBhd2FpdCByZWVsU3RvcFNvdW5kLnBsYXkoKTtcblxuICAgICAgICAgICAgICAgIC8vINCX0LDRgtGA0LjQvNC60LAg0L/QtdGA0LXQtCDQstGW0LTRgtCy0L7RgNC10L3QvdGP0Lwg0LfQstGD0LrRgyDQv9C+0L/QsNC/0YMgKDgwMCDQvNGBKVxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5U291bmQoODAwKTtcblxuICAgICAgICAgICAgICAgIC8vINCS0ZbQtNGC0LLQvtGA0LXQvdC90Y8g0LfQstGD0LrRgyDQtNC70Y8g0L/QvtC/0LDQv9GDXG4gICAgICAgICAgICAgICAgYXdhaXQgcG9wdXBTb3VuZC5wbGF5KCk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcItCf0L7QvNC40LvQutCwINC/0YDQuCDQstGW0LTRgtCy0L7RgNC10L3QvdGWINC30LLRg9C60ZbQsjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICAvLyAvLyDQt9Cy0YPQuiDQutGA0YPRh9C10L3QvdGPINC60L7Qu9C10YHQsCDQstCw0YDRltCw0L3RgiDQsdC10Lcg0L/RgNC+0LzRltGB0ZbQslxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAvLyAgICAgcmVlbFNvdW5kLnBsYXkoKTtcbiAgICAgICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgIC8vICAgICAgICAgcmVlbFNvdW5kLnBhdXNlKCk7XG4gICAgICAgIC8vICAgICAgICAgcmVlbFNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAvLyAgICAgICAgICAgICByZWVsU3RvcFNvdW5kLnBsYXkoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHBvcHVwU291bmQucGxheSgpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9LCA4MDApXG4gICAgICAgIC8vICAgICAgICAgfSwgMTQwMClcbiAgICAgICAgLy8gICAgIH0sMzQwMCk7XG4gICAgICAgIC8vIH0sMTAwMClcblxuICAgICAgICB3aGVlbC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgIHdoZWVsLmNsYXNzTGlzdC5yZW1vdmUoYW5pbSk7XG4gICAgICAgICAgICB3aGVlbC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7cG9zaXRpb259ZGVnKWA7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiwgXCJfekluZGV4XCIpO1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJfYnRuUHVsc2VcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0LXdpblwiKS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSBcImluaXRpYWxcIlxuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgd2hlZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgd2hlZWxCdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgICAgICBpZiAoc3BpbkNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAgIHdoZWVsQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfYnRuUHVsc2VcIik7XG4gICAgICAgICAgICBzcGluV2hlZWwod2hlZWxTZWN0b3IsIFwiZmlyc3RTcGluXCIsIDE2MjAsIHBvcHVwLCB3aGVlbEJ0bik7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX2ZpcnN0XCIpO1xuICAgICAgICAgICAgc3BpbkNvdW50ZXIrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzcGluQ291bnRlciA9PT0gMSkge1xuICAgICAgICAgICAgd2hlZWxCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9idG5QdWxzZVwiKTtcbiAgICAgICAgICAgIHNwaW5XaGVlbCh3aGVlbFNlY3RvciwgXCJzZWNvbmRTcGluXCIsIDI3NDQuNSwgcG9wdXAsIHdoZWVsQnRuKTtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfc2Vjb25kXCIpO1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9maXJzdFwiKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtbGlua1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiX2hpZGRlblwiKVxuICAgICAgICAgICAgfSwgODUwMClcblxuICAgICAgICAgICAgc3BpbkNvdW50ZXIrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4vLyBwYXJhbGxheFxuICAgIGNvbnN0IG1vdmVTcGVlZCA9IDI2MDtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk1MCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHBhcmFsbGF4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJhbGxheChlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFyYWxsYXhcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW92aW5nX3ZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuICAgICAgICAgICAgbGV0IHkgPSAoZS5jbGllbnRYICogbW92aW5nX3ZhbHVlKSAvIG1vdmVTcGVlZDtcbiAgICAgICAgICAgIGxldCB4ID0gKGUuY2xpZW50WSAqIG1vdmluZ192YWx1ZSkgLyBtb3ZlU3BlZWQ7XG4gICAgICAgICAgICBsZXQgeiA9IChlLmNsaWVudFkgKiBtb3ZpbmdfdmFsdWUpIC8gbW92ZVNwZWVkICogMjtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHBlcnNwZWN0aXZlKDMwMHB4KSB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgJHt6fXB4KWA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4vLyBURFMgc2NyaXB0XG5cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIHZhciBwYXJhbXMgPSBbJ2wnLCAndXRtX3NvdXJjZScsICd1dG1fbWVkaXVtJywgJ3V0bV9jYW1wYWlnbicsICd1dG1fdGVybScsICd1dG1fY29udGVudCcsICdwYXJhbTEnLCAncGFyYW0yJywgJ3BhcmFtMycsICdwYXJhbTQnLCAnY3JlYXRpdmVfdHlwZScsICdjcmVhdGl2ZV9pZCddO1xuICAgICAgICB2YXIgbGlua1BhcmFtcyA9IFsnYWZmaWQnLCAnY3BhaWQnXTsgLy8g0LjRidC10Lwg0LIgdXJsIHJlZGlyZWN0VXJsINCyIHVybDpcblxuICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3JlZGlyZWN0VXJsJykpIHtcbiAgICAgICAgICAgIHZhciByZWRpcmVjdFVybCA9IG5ldyBVUkwodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VXJsJykpO1xuXG4gICAgICAgICAgICBpZiAocmVkaXJlY3RVcmwuaHJlZi5tYXRjaCgvXFwvL2cpLmxlbmd0aCA9PT0gNCAmJiByZWRpcmVjdFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdsJykpIHtcbiAgICAgICAgICAgICAgICAvL9C10YHQu9C4INGB0YHRi9C70LrQsCDQsiDRgdGB0YvQu9C60LAgcmVkaXJlY3RVcmwg0LrQvtGA0YDQtdC60YLQvdCw0Y9cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVkaXJlY3RVcmwnLCByZWRpcmVjdFVybC5ocmVmKTsgLy8g0YPQutCw0LfRi9Cy0LDQtdC8INGC0L7Rh9C60L7QuSDQstGF0L7QtNCwINC00L7QvNC10L0g0YEg0L/RgNC+0YLQvtC60L7Qu9C+0Lwg0LjQtyByZWRpcmVjdFVybFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwYXJhbSwgdXJsLnNlYXJjaFBhcmFtcy5nZXQocGFyYW0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGlua1BhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rUGFyYW0pIHtcbiAgICAgICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhsaW5rUGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaW5rUGFyYW0sIHVybC5zZWFyY2hQYXJhbXMuZ2V0KGxpbmtQYXJhbSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGxpbmssXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpICE9PSAnaHR0cHM6Ly90ZHMuZmF2YmV0LnBhcnRuZXJzJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgYWZmaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWZmaWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgY3BhaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3BhaWQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZGlyZWN0VXJsXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgVVJMKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVkaXJlY3RVcmxcIikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSBuZXcgVVJMKHBhcmVudC5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmZmlkICYmIGNwYWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnBhdGhuYW1lID0gJy8nICsgYWZmaWQgKyAnLycgKyBjcGFpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnNlYXJjaFBhcmFtcy5zZXQocGFyYW0sIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhcmFtKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBsaW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG5cbi8vLyBmb3IgdGVzdFxuXG4gICAgY29uc3QgcG9wdXAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDFcIilcbiAgICBjb25zdCBwb3B1cDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwMlwiKVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVBvcHVwXCIpXG5cbiAgICBwb3B1cDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiAsIFwiX3pJbmRleFwiLCBcIl9maXJzdFwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0LXdpblwiKS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSBcImluaXRpYWxcIlxuICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3NlY29uZFwiKSl7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX3NlY29uZFwiKVxuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9maXJzdFwiKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbHNle1xuICAgICAgICAvLyAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9maXJzdFwiKVxuICAgICAgICAvLyB9XG5cbiAgICB9KVxuXG4gICAgcG9wdXAyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9vcGFjaXR5XCIgLCBcIl96SW5kZXhcIiwgXCJfc2Vjb25kXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcnN0LXdpblwiKS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSBcImluaXRpYWxcIlxuICAgICAgICBpZiAocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2ZpcnN0XCIpKXtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfc2Vjb25kXCIpXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiX2ZpcnN0XCIpXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl9vcGFjaXR5XCIpICYmIHBvcHVwLmNsYXNzTGlzdC5jb250YWlucyhcIl96SW5kZXhcIikpe1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGFjaXR5XCIgLCBcIl96SW5kZXhcIiwgXCJfc2Vjb25kXCIpXG4gICAgICAgIH1cbiAgICB9KVxuXG59KVxuXG5cbiJdfQ==
