import {Howl} from "howler"


document.addEventListener("DOMContentLoaded", () =>{

    window.addEventListener('orientationchange', () => window.location.reload());

    const wheelBtn = document.querySelector(".land__wheel-btn");
    const wheelSector = document.querySelector(".land__wheel-sector");
    const popup = document.querySelector(".popup");
    const popupBtn = document.querySelector(".popup__btn");


// Ініціалізація звуків
    const backgroundMusic = new Howl({
        src: ['music.mp3'],
        volume: 1.0,
        loop: true,

    });
    const reelSound = new Howl({
        src: ['reels.mp3'],
        volume: 1.0,
        loop: true
    });
    const reelStopSound = new Howl({
        src: ['reel-stop.mp3'],
        volume: 1.0,
        loop: false
    });
    const popupSound = new Howl({
        src: ['popup.mp3'],
        volume: 1.0,
        loop: false,
    });

// // так як сучасні браузери лочать автовідтворення музики на сайтах, вішаєм слухачі подій які запустять її
    document.addEventListener('mousemove',   () => backgroundMusic.play(), { once: true });
    document.addEventListener('mouseenter',   () => backgroundMusic.play(), { once: true });
    document.addEventListener('click',   () => backgroundMusic.play(), { once: true });
    document.addEventListener('touchstart',   () => backgroundMusic.play(), { once: true });
    backgroundMusic.play()

    popupBtn.addEventListener("click", () => {
        if (popup.classList.contains("_first")) {
            popup.classList.remove("_opacity", "_zIndex");
            wheelBtn.style.pointerEvents = "initial";
        }

    });

    let spinCounter = 0;

    function spinWheel(wheel, anim, position, popup, btn) {
        wheel.classList.add(anim);

        function delaySound(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        (async function playSounds() {
            try {
                // Затримка перед початком (1000 мс)
                await delaySound(1000);

                // Відтворення звуку кручення колеса
                await reelSound.play();

                // Затримка (3400 мс) перед паузою
                await delaySound(3400);

                // Зупинка звуку кручення колеса
                reelSound.pause();
                reelSound.currentTime = 0;

                // Затримка перед звуком зупинки колеса (1400 мс)
                await delaySound(1400);

                // Відтворення звуку зупинки колеса
                await reelStopSound.play();

                // Затримка перед відтворенням звуку попапу (800 мс)
                await delaySound(800);

                // Відтворення звуку для попапу
                await popupSound.play();

            } catch (error) {
                console.error("Помилка при відтворенні звуків: ", error);
            }
        })();

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

        wheel.addEventListener("animationend", () => {
            wheel.classList.remove(anim);
            wheel.style.transform = `rotate(${position}deg)`;
            popup.classList.add("_opacity", "_zIndex");
            btn.classList.add("_btnPulse");
            document.querySelector(".first-win").style.animationPlayState = "initial"
        }, { once: true });
    }

    wheelBtn.addEventListener("click", () => {
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
            setTimeout(() =>{
                document.querySelector(".all-link").classList.remove("_hidden")
            }, 8500)

            spinCounter++;
            return;
        }
    });

// parallax
    const moveSpeed = 260;

    if (window.innerWidth > 950) {
        document.addEventListener("mousemove", parallax);
    }

    function parallax(e) {
        document.querySelectorAll(".parallax").forEach((item) => {
            const moving_value = item.getAttribute("data-value");
            let y = (e.clientX * moving_value) / moveSpeed;
            let x = (e.clientY * moving_value) / moveSpeed;
            let z = (e.clientY * moving_value) / moveSpeed * 2;
            item.style.transform = `perspective(300px) translate3d(${x}px, ${y}px, ${z}px)`;
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

    const popup1 = document.querySelector(".popup1")
    const popup2 = document.querySelector(".popup2")
    const close = document.querySelector(".closePopup")

    popup1.addEventListener("click", () =>{
        popup.classList.add("_opacity" , "_zIndex", "_first")
        document.querySelector(".first-win").style.animationPlayState = "initial"
        if (popup.classList.contains("_second")){
            popup.classList.remove("_second")
            popup.classList.add("_first")
            return
        }

        // else{
        //     popup.classList.add("_first")
        // }

    })

    popup2.addEventListener("click", () =>{
        popup.classList.add("_opacity" , "_zIndex", "_second");
        document.querySelector(".first-win").style.animationPlayState = "initial"
        if (popup.classList.contains("_first")){
            popup.classList.add("_second")
            popup.classList.remove("_first")
        }

    })

    close.addEventListener("click", () =>{
        if(popup.classList.contains("_opacity") && popup.classList.contains("_zIndex")){
            popup.classList.remove("_opacity" , "_zIndex", "_second")
        }
    })

})


