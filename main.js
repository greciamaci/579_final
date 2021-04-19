
/*INTRODUCTION ANIMATION*/

const introAnimation = window.anime.timeline({
    loop: false, 
    autoplay: false,
})

const nombre = {
    targets:'#amazing path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    /*delay: function(el, i) { return i * 50},*/
    direction: 'alternate',
    loop: 1
}

const pinky = {
    targets: 'div.pinky',
    width: '100%',
    easing: 'easeInOutSine',
    opacity: [0, 100]
}

const sec_pinky = {
    targets: 'div.secondary_pinky',
    width: '100%',
    easing: 'easeInOutSine',
    opacity: [0, 100]
}


const navigation = {
    targets: '.links li',
    easing: 'easeInOutSine',
    opacity: [0, 100],
    duration: 5000,
    delay: anime.stagger(200,{from:"first"})
}

const sec_nav = {
    targets: '.sec_links li',
    easing: 'easeInOutSine',
    opacity: [0, 100],
    duration: 5000,
    delay: anime.stagger(200,{from:"first"})
}


const about_info = {
    targets: '.about_text',
    easing: 'easeInOutSine',
    opacity: [0, 100],
    duration: 5000
}


const cv_text = {
    targets: '.cv_text div',
    easing: 'easeInOutSine',
    opacity: [0, 100],
    duration: 5000,
    delay: anime.stagger(200,{from:"first"})
}

const form = {
    targets: 'fieldset',
    easing: 'easeInOutSine',
    opacity: [0, 100],
    duration: 5000,
}

const button = {
    targets: '.btn',
    easing: 'easeInOutSine',
    opacity: [0, 100],
    duration: 500,
    delay: 700,
    rotate: '1turn'
}


introAnimation
    .add(nombre, "+=250")
    .add(pinky, "+=250")
    .add(sec_pinky, "-=3000")
    .add(navigation, "+=250")
    .add(sec_nav, "-=7000")
    .add(about_info, "-=6000")
    .add(cv_text, "-=5500")
    .add(form, "-=5500")
    .add(button, "-=4900")
introAnimation.play();











