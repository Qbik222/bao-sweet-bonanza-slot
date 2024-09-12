const wheelBtn = document.querySelector(".land__wheel-btn");
const wheelSector = document.querySelector(".land__wheel-sector");
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popup__btn");

// Ініціалізація звуків
const backgroundMusic = new Audio('/music/music.mp3'); // фоновий звук, грає постійно
const reelSound = new Audio('/music/reels.mp3'); // звук кручення колеса
const reelStopSound = new Audio('/music/reel-stop.mp3'); // звук коли випадає сектор
const popupSound = new Audio('/music/popup.mp3'); // звук для попапу

// Функція для запуску фонової музики
function playBackgroundMusic() {
    backgroundMusic.play().catch(err => console.log(err));
}

// так як сучасні браузери лочать автовідтворення музики на сайтах, вішаєм слухачі подій які запустять її
document.addEventListener('mousemove', playBackgroundMusic, { once: true });
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

    //звук кручення колеса
    reelSound.play();

    wheel.addEventListener("animationend", () => {
        wheel.classList.remove(anim);
        wheel.style.transform = `rotate(${position}deg)`;

        // Зупиняємо звук кручення колеса
        reelSound.pause();
        reelSound.currentTime = 0;

        // звук зупинки колеса
        reelStopSound.play();

        popup.classList.add("_opacity", "_zIndex");
        btn.classList.add("_btnPulse");

        // Відтворюємо звук для попапу
        popupSound.play();

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

///sounds
