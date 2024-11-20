import {Howl} from "howler"


// sound init
const backgroundMusic = new Howl({
    src: ['main-music.mp3'],
    volume: 1.0,
    loop: true,

});
const reelSound = new Howl({
    src: ['reels.mp3'],
    volume: 1.0,
    loop: true
});
const winSlots = new Howl({
    src: ['win-slots.mp3'],
    volume: 1.0,
    loop: false
});
const popupSound = new Howl({
    src: ['popup.mp3'],
    volume: 1.0,
    loop: false,

});

const slotSound = new Howl({
    src: ['line.mp3'],
    volume: 1.0,
    loop: false,

});
document.addEventListener('orientationchange', () => {
    window.location.reload()
});

const playBtn = document.querySelector('.play-btn'),
    overlay = document.querySelector('.bonus__overlay'),
    popupFirst = document.querySelector('.bonus__firstWin'),
    popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
    popupSecond = document.querySelector('.bonus__secondWin'),
    overflow = document.querySelector('body'),
    wrapper = document.querySelector('.bonus'),
    winOuter = document.querySelector('.outer-col-win'),
    slotsWindow = document.querySelector(".window"),
    decorItems = document.querySelectorAll("._decor")


//slots
var icons = [
    'win3.png','win4.png','win5.png','win6.png','win7.png','win8.png'
];

var slots = document.querySelector('.slots');
var cols = document.querySelectorAll('.col');

for(var i in cols) {
    if (!cols.hasOwnProperty(i))
        continue;
    var col = cols[i];
    var str = '';
    var firstThree = '';
    for(var x = 0; x < 30; x++) {
        var part = '<div class="icon-wrap"><img class="icon" src="img/slots/'+icons[Math.floor(Math.random()*icons.length)]+'"></div>';
        // var part = '<img class="icon" src="img/slots/'+icons[Math.floor(Math.random()*icons.length)]+'">';
        str += part
        if (x < 3) firstThree += part;
    }
    col.innerHTML =  str+firstThree;
}

(function startSlotsImg(){

    const startCol1 = ['win5.png', 'win6.png', 'win3.png', 'win5.png', 'win3.png'];
    const startCol2 = ['win6.png', 'win6.png', 'win8.png', 'win5.png', 'win6.png'];
    const startCol3 = ['win4.png', 'win8.png', 'win4.png', 'win7.png', 'win8.png'];
    const startCol4 = ['win5.png', 'win8.png', 'win6.png', 'win7.png', 'win8.png'];
    const startCol5 = ['win5.png', 'win6.png', 'win3.png', 'win5.png', 'win6.png'];
    const startCol6 = ['win5.png', 'win6.png', 'win3.png', 'win5.png', 'win6.png'];




    const colsImg1 = Array.from(cols[0].querySelectorAll('img'))
    colsImg1[32].setAttribute('src', 'img/slots/'+ startCol1[0])
    colsImg1[31].setAttribute('src', 'img/slots/'+ startCol1[1])
    colsImg1[30].setAttribute('src', 'img/slots/'+ startCol1[2])
    colsImg1[29].setAttribute('src', 'img/slots/'+ startCol1[3])
    colsImg1[28].setAttribute('src', 'img/slots/'+ startCol1[4])


    const colsImg2 = Array.from(cols[1].querySelectorAll('img'))
    colsImg2[32].setAttribute('src', 'img/slots/'+ startCol2[0])
    colsImg2[31].setAttribute('src', 'img/slots/'+ startCol2[1])
    colsImg2[30].setAttribute('src', 'img/slots/'+ startCol2[2])
    colsImg2[29].setAttribute('src', 'img/slots/'+ startCol2[3])
    colsImg2[28].setAttribute('src', 'img/slots/'+ startCol2[4])

    const colsImg3 = Array.from(cols[2].querySelectorAll('img'))
    colsImg3[32].setAttribute('src', 'img/slots/'+ startCol3[0])
    colsImg3[31].setAttribute('src', 'img/slots/'+ startCol3[1])
    colsImg3[30].setAttribute('src', 'img/slots/'+ startCol3[2])
    colsImg3[29].setAttribute('src', 'img/slots/'+ startCol3[3])
    colsImg3[28].setAttribute('src', 'img/slots/'+ startCol3[4])

    const colsImg4 = Array.from(cols[3].querySelectorAll('img'))
    colsImg4[32].setAttribute('src', 'img/slots/'+ startCol4[0])
    colsImg4[31].setAttribute('src', 'img/slots/'+ startCol4[1])
    colsImg4[30].setAttribute('src', 'img/slots/'+ startCol4[2])
    colsImg4[29].setAttribute('src', 'img/slots/'+ startCol4[3])
    colsImg4[28].setAttribute('src', 'img/slots/'+ startCol4[4])

    const colsImg5 = Array.from(cols[4].querySelectorAll('img'))
    colsImg5[32].setAttribute('src', 'img/slots/'+ startCol5[0])
    colsImg5[31].setAttribute('src', 'img/slots/'+ startCol5[1])
    colsImg5[30].setAttribute('src', 'img/slots/'+ startCol5[2])
    colsImg5[29].setAttribute('src', 'img/slots/'+ startCol5[3])
    colsImg5[28].setAttribute('src', 'img/slots/'+ startCol5[4])

    const colsImg6 = Array.from(cols[5].querySelectorAll('img'))
    colsImg6[32].setAttribute('src', 'img/slots/'+ startCol6[0])
    colsImg6[31].setAttribute('src', 'img/slots/'+ startCol6[1])
    colsImg6[30].setAttribute('src', 'img/slots/'+ startCol6[2])
    colsImg6[29].setAttribute('src', 'img/slots/'+ startCol6[3])
    colsImg6[28].setAttribute('src', 'img/slots/'+ startCol6[4]);
})()

const win1Col1 = ['win5.png', 'win8.png', 'win6.png', 'win5.png', 'win3.png'];
const win1Col2 = ['win8.png', 'win6.png', 'win8.png', 'win6.png', 'win3.png'];
const win1Col3 = ['win4.png', 'win8.png', 'win6.png', 'win8.png', 'win6.png'];
const win1Col4 = ['win5.png', 'win4.png', 'win5.png', 'win8.png', 'win8.png'];
const win1Col5 = ['win5.png', 'win6.png', 'win8.png', 'win6.png', 'win4.png'];
const win1Col6 = ['win3.png', 'win8.png', 'win7.png', 'win4.png', 'win8.png'];



const win2Col1 = ['win5.png', 'win8.png', 'win6.png', 'win8.png', 'win6.png'];
const win2Col2 = ['win3.png', 'win6.png', 'win8.png', 'win5.png', 'win3.png'];
const win2Col3 = ['win6.png', 'win8.png', 'win3.png', 'win8.png', 'win4.png'];
const win2Col4 = ['win6.png', 'win8.png', 'win7.png', 'win4.png', 'win6.png'];
const win2Col5 = ['win3.png', 'win6.png', 'win8.png', 'win7.png', 'win3.png'];
const win2Col6 = ['win3.png', 'win6.png', 'win7.png', 'win8.png', 'win3.png'];


const colsImg1 = Array.from(cols[0].querySelectorAll('img'))
const colsImg2 = Array.from(cols[1].querySelectorAll('img'))
const colsImg3 = Array.from(cols[2].querySelectorAll('img'))
const colsImg4 = Array.from(cols[3].querySelectorAll('img'))
const colsImg5 = Array.from(cols[4].querySelectorAll('img'))
const colsImg6 = Array.from(cols[5].querySelectorAll('img'))

const colsImg1Two = Array.from(cols[0].querySelectorAll('img'))
const colsImg2Two = Array.from(cols[1].querySelectorAll('img'))
const colsImg3Two = Array.from(cols[2].querySelectorAll('img'))
const colsImg4Two = Array.from(cols[3].querySelectorAll('img'))
const colsImg5Two = Array.from(cols[4].querySelectorAll('img'))
const colsImg6Two = Array.from(cols[5].querySelectorAll('img'))


let tries = 0;
function spin() {
    //sounds
    function delaySound(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    (async function playSounds() {
        try {
            await reelSound.play();

            await delaySound(3000);

            reelSound.pause();
            reelSound.currentTime = 0;

            slotSound.play()

            await delaySound(700);

            winSlots.play()

            await delaySound(2700);
            popupSound.play()
        } catch (error) {
            console.error("sounds play error: ", error);
        }
    })();

    slots.classList.toggle('spinning', true);
    //Фикс для Сафари, который решил глотать последние картинки при прокрутке
    if (tries === 0){
        window.setTimeout(function() {
            const cols = document.querySelectorAll('.col');
            tries++;

            colsImg1[32].setAttribute('src', 'img/slots/'+ win1Col1[4])
            colsImg1[31].setAttribute('src', 'img/slots/'+ win1Col1[3])
            colsImg1[30].setAttribute('src', 'img/slots/'+ win1Col1[2])
            colsImg1[29].setAttribute('src', 'img/slots/'+ win1Col1[1])
            colsImg1[28].setAttribute('src', 'img/slots/'+ win1Col1[0])
            colsImg1[0].setAttribute('src', 'img/slots/'+ win1Col1[0])
            colsImg1[1].setAttribute('src', 'img/slots/'+ win1Col1[1])
            colsImg1[2].setAttribute('src', 'img/slots/'+ win1Col1[2])
            colsImg1[3].setAttribute('src', 'img/slots/'+ win1Col1[3])
            colsImg1[4].setAttribute('src', 'img/slots/'+ win1Col1[4])

            colsImg2[32].setAttribute('src', 'img/slots/'+ win1Col2[4])
            colsImg2[31].setAttribute('src', 'img/slots/'+ win1Col2[3])
            colsImg2[30].setAttribute('src', 'img/slots/'+ win1Col2[2])
            colsImg2[29].setAttribute('src', 'img/slots/'+ win1Col2[1])
            colsImg2[28].setAttribute('src', 'img/slots/'+ win1Col2[0])
            colsImg2[0].setAttribute('src', 'img/slots/'+ win1Col2[0])
            colsImg2[1].setAttribute('src', 'img/slots/'+ win1Col2[1])
            colsImg2[2].setAttribute('src', 'img/slots/'+ win1Col2[2])
            colsImg2[3].setAttribute('src', 'img/slots/'+ win1Col2[3])
            colsImg2[4].setAttribute('src', 'img/slots/'+ win1Col2[4])

            colsImg3[32].setAttribute('src', 'img/slots/'+ win1Col3[4])
            colsImg3[31].setAttribute('src', 'img/slots/'+ win1Col3[3])
            colsImg3[30].setAttribute('src', 'img/slots/'+ win1Col3[2])
            colsImg3[29].setAttribute('src', 'img/slots/'+ win1Col3[1])
            colsImg3[28].setAttribute('src', 'img/slots/'+ win1Col3[0])
            colsImg3[0].setAttribute('src', 'img/slots/'+ win1Col3[0])
            colsImg3[1].setAttribute('src', 'img/slots/'+ win1Col3[1])
            colsImg3[2].setAttribute('src', 'img/slots/'+ win1Col3[2])
            colsImg3[3].setAttribute('src', 'img/slots/'+ win1Col3[3])
            colsImg3[4].setAttribute('src', 'img/slots/'+ win1Col3[4])

            colsImg4[32].setAttribute('src', 'img/slots/'+ win1Col4[4])
            colsImg4[31].setAttribute('src', 'img/slots/'+ win1Col4[3])
            colsImg4[30].setAttribute('src', 'img/slots/'+ win1Col4[2])
            colsImg4[29].setAttribute('src', 'img/slots/'+ win1Col4[1])
            colsImg4[28].setAttribute('src', 'img/slots/'+ win1Col4[0])
            colsImg4[0].setAttribute('src', 'img/slots/'+ win1Col4[0])
            colsImg4[1].setAttribute('src', 'img/slots/'+ win1Col4[1])
            colsImg4[2].setAttribute('src', 'img/slots/'+ win1Col4[2])
            colsImg4[3].setAttribute('src', 'img/slots/'+ win1Col4[3])
            colsImg4[4].setAttribute('src', 'img/slots/'+ win1Col4[4])

            colsImg5[32].setAttribute('src', 'img/slots/'+ win1Col5[4])
            colsImg5[31].setAttribute('src', 'img/slots/'+ win1Col5[3])
            colsImg5[30].setAttribute('src', 'img/slots/'+ win1Col5[2])
            colsImg5[29].setAttribute('src', 'img/slots/'+ win1Col5[1])
            colsImg5[28].setAttribute('src', 'img/slots/'+ win1Col5[0])
            colsImg5[0].setAttribute('src', 'img/slots/'+ win1Col5[0])
            colsImg5[1].setAttribute('src', 'img/slots/'+ win1Col5[1])
            colsImg5[2].setAttribute('src', 'img/slots/'+ win1Col5[2])
            colsImg5[3].setAttribute('src', 'img/slots/'+ win1Col5[3])
            colsImg5[4].setAttribute('src', 'img/slots/'+ win1Col5[4])

            colsImg6[32].setAttribute('src', 'img/slots/'+ win1Col6[4])
            colsImg6[31].setAttribute('src', 'img/slots/'+ win1Col6[3])
            colsImg6[30].setAttribute('src', 'img/slots/'+ win1Col6[2])
            colsImg6[29].setAttribute('src', 'img/slots/'+ win1Col6[1])
            colsImg6[28].setAttribute('src', 'img/slots/'+ win1Col6[0])
            colsImg6[0].setAttribute('src', 'img/slots/'+ win1Col6[0])
            colsImg6[1].setAttribute('src', 'img/slots/'+ win1Col6[1])
            colsImg6[2].setAttribute('src', 'img/slots/'+ win1Col6[2])
            colsImg6[3].setAttribute('src', 'img/slots/'+ win1Col6[3])
            colsImg6[4].setAttribute('src', 'img/slots/'+ win1Col6[4])

        }, 1500);

    }

    if (tries === 1){
        window.setTimeout(function() {
            const cols = document.querySelectorAll('.col');
            tries++;

            colsImg1Two[32].setAttribute('src', 'img/slots/'+ win2Col1[4])
            colsImg1Two[31].setAttribute('src', 'img/slots/'+ win2Col1[3])
            colsImg1Two[30].setAttribute('src', 'img/slots/'+ win2Col1[2])
            colsImg1Two[29].setAttribute('src', 'img/slots/'+ win2Col1[1])
            colsImg1Two[28].setAttribute('src', 'img/slots/'+ win2Col1[0])
            colsImg1Two[0].setAttribute('src', 'img/slots/'+ win2Col1[0])
            colsImg1Two[1].setAttribute('src', 'img/slots/'+ win2Col1[1])
            colsImg1Two[2].setAttribute('src', 'img/slots/'+ win2Col1[2])
            colsImg1Two[3].setAttribute('src', 'img/slots/'+ win2Col1[3])
            colsImg1Two[4].setAttribute('src', 'img/slots/'+ win2Col1[4])

            colsImg2Two[32].setAttribute('src', 'img/slots/'+ win2Col2[4])
            colsImg2Two[31].setAttribute('src', 'img/slots/'+ win2Col2[3])
            colsImg2Two[30].setAttribute('src', 'img/slots/'+ win2Col2[2])
            colsImg2Two[29].setAttribute('src', 'img/slots/'+ win2Col2[1])
            colsImg2Two[28].setAttribute('src', 'img/slots/'+ win2Col2[0])
            colsImg2Two[0].setAttribute('src', 'img/slots/'+ win2Col2[0])
            colsImg2Two[1].setAttribute('src', 'img/slots/'+ win2Col2[1])
            colsImg2Two[2].setAttribute('src', 'img/slots/'+ win2Col2[2])
            colsImg2Two[3].setAttribute('src', 'img/slots/'+ win2Col2[3])
            colsImg2Two[4].setAttribute('src', 'img/slots/'+ win2Col2[4])

            colsImg3Two[32].setAttribute('src', 'img/slots/'+ win2Col3[4])
            colsImg3Two[31].setAttribute('src', 'img/slots/'+ win2Col3[3])
            colsImg3Two[30].setAttribute('src', 'img/slots/'+ win2Col3[2])
            colsImg3Two[29].setAttribute('src', 'img/slots/'+ win2Col3[1])
            colsImg3Two[28].setAttribute('src', 'img/slots/'+ win2Col3[0])
            colsImg3Two[0].setAttribute('src', 'img/slots/'+ win2Col3[0])
            colsImg3Two[1].setAttribute('src', 'img/slots/'+ win2Col3[1])
            colsImg3Two[2].setAttribute('src', 'img/slots/'+ win2Col3[2])
            colsImg3Two[3].setAttribute('src', 'img/slots/'+ win2Col3[3])
            colsImg3Two[4].setAttribute('src', 'img/slots/'+ win2Col3[4])

            colsImg4Two[32].setAttribute('src', 'img/slots/'+ win2Col4[4])
            colsImg4Two[31].setAttribute('src', 'img/slots/'+ win2Col4[3])
            colsImg4Two[30].setAttribute('src', 'img/slots/'+ win2Col4[2])
            colsImg4Two[29].setAttribute('src', 'img/slots/'+ win2Col4[1])
            colsImg4Two[28].setAttribute('src', 'img/slots/'+ win2Col4[0])
            colsImg4Two[0].setAttribute('src', 'img/slots/'+ win2Col4[0])
            colsImg4Two[1].setAttribute('src', 'img/slots/'+ win2Col4[1])
            colsImg4Two[2].setAttribute('src', 'img/slots/'+ win2Col4[2])
            colsImg4Two[3].setAttribute('src', 'img/slots/'+ win2Col4[3])
            colsImg4Two[4].setAttribute('src', 'img/slots/'+ win2Col4[4])

            colsImg5Two[32].setAttribute('src', 'img/slots/'+ win2Col5[4])
            colsImg5Two[31].setAttribute('src', 'img/slots/'+ win2Col5[3])
            colsImg5Two[30].setAttribute('src', 'img/slots/'+ win2Col5[2])
            colsImg5Two[29].setAttribute('src', 'img/slots/'+ win2Col5[1])
            colsImg5Two[28].setAttribute('src', 'img/slots/'+ win2Col5[0])
            colsImg5Two[0].setAttribute('src', 'img/slots/'+ win2Col5[0])
            colsImg5Two[1].setAttribute('src', 'img/slots/'+ win2Col5[1])
            colsImg5Two[2].setAttribute('src', 'img/slots/'+ win2Col5[2])
            colsImg5Two[3].setAttribute('src', 'img/slots/'+ win2Col5[3])
            colsImg5Two[4].setAttribute('src', 'img/slots/'+ win2Col5[4])

            colsImg6Two[32].setAttribute('src', 'img/slots/'+ win2Col6[4])
            colsImg6Two[31].setAttribute('src', 'img/slots/'+ win2Col6[3])
            colsImg6Two[30].setAttribute('src', 'img/slots/'+ win2Col6[2])
            colsImg6Two[29].setAttribute('src', 'img/slots/'+ win2Col6[1])
            colsImg6Two[28].setAttribute('src', 'img/slots/'+ win2Col6[0])
            colsImg6Two[0].setAttribute('src', 'img/slots/'+ win2Col6[0])
            colsImg6Two[1].setAttribute('src', 'img/slots/'+ win2Col6[1])
            colsImg6Two[2].setAttribute('src', 'img/slots/'+ win2Col6[2])
            colsImg6Two[3].setAttribute('src', 'img/slots/'+ win2Col6[3])
            colsImg6Two[4].setAttribute('src', 'img/slots/'+ win2Col6[4])

        }, 1500);

    }

    window.setTimeout(function() {
        slots.classList.toggle('spinning', false);
        if (tries === 1) {
            slotsWindow.classList.add("afterSpin")
            colsImg1[29].parentElement.classList.add('_winAnim')
            colsImg2[30].parentElement.classList.add('_winAnim')
            colsImg3[31].parentElement.classList.add('_winAnim')
            colsImg4[31].parentElement.classList.add('_winAnim')
            colsImg5[30].parentElement.classList.add('_winAnim')
            colsImg6[29].parentElement.classList.add('_winAnim')
            winOuter.classList.add('_winOne')
        }
        if (tries === 2) {
            slotsWindow.classList.add("afterSecondSpin")
            colsImg1Two[31].parentElement.classList.add('_winAnim')
            colsImg2Two[30].parentElement.classList.add('_winAnim')
            colsImg3Two[29].parentElement.classList.add('_winAnim')
            colsImg4Two[29].parentElement.classList.add('_winAnim')
            colsImg5Two[30].parentElement.classList.add('_winAnim')
            colsImg6Two[31].parentElement.classList.add('_winAnim')
            winOuter.classList.add('_winTwo')
        }
    }, 3500);
}

let triesCounter = 0

playBtn.addEventListener('click', () => {
    if (triesCounter === 0) {
        runFirstRotation()
    } else {
        runSecondRotation()
    }
})

function runFirstRotation() {
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    spin()
    setTimeout(() => {
        doAfterFirstRotation()
    }, 6000)
    triesCounter++
}

function doAfterFirstRotation() {
    // bubbleText.innerHTML  = babbleTextAfterRotation;
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
    setTimeout(() => {
        decorItems.forEach((star, i) =>{
            setTimeout(() =>{
                star.classList.add("decorAnim")
            }, i*400 )
        })
        playBtn.classList.add('pulse-btn')
        playBtn.style.cursor = 'pointer'
        // playBtn.style.background = `url("../img/btn-second.png") no-repeat 0 0/contain`
    }, 700)
}

function runSecondRotation() {
    playBtn.classList.remove('pulse-btn')
    playBtn.style.cursor = 'default'
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    spin()
    setTimeout(() => {
        doAfterSecondRotation()
    }, 6000)
    triesCounter++
}

function doAfterSecondRotation() {
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'none'
    document.querySelector(".all-link").classList.remove("hide")
    setTimeout(() =>{
        decorItems.forEach((star, i) =>{
            setTimeout(() =>{
                star.classList.add("decorAnim")
            }, i*400 )
        })
    }, 700)
}

popupFirstBtn.addEventListener('click', () => {
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'
    slotsWindow.classList.remove("afterSpin")
    winOuter.classList.remove('_winOne')
    colsImg1[29].parentElement.classList.remove('_winAnim')
    colsImg2[30].parentElement.classList.remove('_winAnim')
    colsImg3[31].parentElement.classList.remove('_winAnim')
    colsImg4[31].parentElement.classList.remove('_winAnim')
    colsImg5[30].parentElement.classList.remove('_winAnim')
    colsImg6[29].parentElement.classList.remove('_winAnim')
    decorItems.forEach((star, i) =>{
        setTimeout(() =>{
            star.classList.remove("decorAnim")
        }, i*400 )
    })
})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
    popup.querySelector(".anim-pers").style.animationPlayState = "initial"
}

cols.forEach(item => {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // код для мобильных устройств
        item.classList.add('_ios')
    } else {
        // код для обычных устройств
        item.classList.remove('_ios')
    }
});


/// for test

const popup1 = document.querySelector(".popup1")
const popup2 = document.querySelector(".popup2")
const close = document.querySelector(".closePopup")

popup1.addEventListener("click", () =>{
    overlay.classList.add('opacity-overlay')
    popupSecond.classList.add('hide')
    displayPopup(popupFirst)
    decorItems.forEach((star, i) =>{
        setTimeout(() =>{
            star.classList.add("decorAnim")
        }, i*400 )
    })
})

popup2.addEventListener("click", () =>{
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    displayPopup(popupSecond)
    decorItems.forEach((star, i) =>{
        setTimeout(() =>{
            star.classList.add("decorAnim")
        }, i*400 )
    })


})

close.addEventListener("click", () =>{
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    popupSecond.classList.add('hide')
    decorItems.forEach((star, i) =>{
        setTimeout(() =>{
            star.classList.remove("decorAnim")
        }, i*400 )
    })

})
addEventListener('click',   () => backgroundMusic.play(), { once: true });





// tds
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

