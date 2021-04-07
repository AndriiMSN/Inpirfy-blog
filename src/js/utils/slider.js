import {tns} from "tiny-slider/src/tiny-slider";

if (document.querySelector('.main-sliders__body')) {
    const next = document.getElementById('arrows__next');

    const slider = tns({
        container: ".main-sliders__body",
        items: 1,
        controls: false,
        speed: 400,
        navContainer: "#customize-thumbnails",
        mouseDrag:true
    });


    next.addEventListener('click', () => {
        if (!next.disabled) {
            slider.goTo('next')
        }
    });

    const next1 = document.getElementById('arrows__next-1');

    const slider1 = tns({
        container: ".main-sliders__body.one",
        items: 1,
        controls: false,
        speed: 400,
        navContainer: "#customize-thumbnails-1",
        mouseDrag:true
    });


    next1.addEventListener('click', () => {
        if (!next.disabled) {
            slider1.goTo('next')
        }
    });

    // const next2 = document.getElementById('arrows__next-2');
    //
    // const slider2 = tns({
    //     container: ".main-sliders__body.two",
    //     items: 1,
    //     controls: false,
    //     speed: 400,
    //     navContainer: "#customize-thumbnails-2",
    // });
    //
    //
    // next2.addEventListener('click', () => {
    //     if (!next.disabled) {
    //         slider2.goTo('next')
    //     }
    // });
}