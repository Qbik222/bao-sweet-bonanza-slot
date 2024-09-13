document.addEventListener("DOMContentLoaded", () =>{

    window.addEventListener('resize', () => window.location.reload());

    const wheelBtn = document.querySelector(".land__wheel-btn");
    const wheelSector = document.querySelector(".land__wheel-sector");
    const popup = document.querySelector(".popup");
    const popupBtn = document.querySelector(".popup__btn");


// Ініціалізація звуків
    const backgroundMusic = new Audio('music.mp3'); // фоновий звук, грає постійно
    const reelSound = new Audio('reels.mp3'); // звук кручення колеса
    const reelStopSound = new Audio('reel-stop.mp3'); // звук коли випадає сектор
    const popupSound = new Audio('popup.mp3'); // звук для попапу

// Функція для запуску фонової музики
    function playBackgroundMusic() {
        backgroundMusic.play().catch(err => console.log(err));
    }

    backgroundMusic.addEventListener('ended', function() {
        playBackgroundMusic();
    });

// так як сучасні браузери лочать автовідтворення музики на сайтах, вішаєм слухачі подій які запустять її
    document.addEventListener('mousemove', playBackgroundMusic, { once: true });
    document.addEventListener('mouseenter', playBackgroundMusic, { once: true });
    document.addEventListener('click', playBackgroundMusic, { once: true });
    document.addEventListener('touchstart', playBackgroundMusic, { once: true });
    playBackgroundMusic()

    popupBtn.addEventListener("click", () => {
        if (popup.classList.contains("_first")) {
            popup.classList.remove("_opacity", "_zIndex");
            wheelBtn.style.pointerEvents = "initial";
        }

    });

    let spinCounter = 0;

    function spinWheel(wheel, anim, position, popup, btn) {
        wheel.classList.add(anim);

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        //звук кручення колеса
        // setTimeout(() =>{
        //     reelSound.play();
        // }, 1000)

        setTimeout(() =>{
            reelSound.play();
            setTimeout(function () {
                reelSound.pause();
                reelSound.currentTime = 0;
                setTimeout(function () {
                    setTimeout(() =>{
                        reelStopSound.play();
                        setTimeout(function () {
                            popupSound.play();
                        }, 600);
                    }, 1800);
                }, 1000)

            }, 1000);

        }, 1000)



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


