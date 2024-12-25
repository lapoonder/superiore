'use strict';
import 'swiper/css';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Keyboard, Mousewheel],
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,

    navigation: {
        nextEl: '.swiper-button-next[data-swiper-id="1"]',
        prevEl: '.swiper-button-prev[data-swiper-id="1"]',
    },

    keyboard: {
        benabled: true,
        onlyInViewport: true,
    },

    mousewheel: true,

    on: {
        slideChange: function () {
            const prevButton = document.querySelector(
                '.swiper-button-prev[data-swiper-id="1"]'
            );
            const nextButton = document.querySelector(
                '.swiper-button-next[data-swiper-id="1"]'
            );

            prevButton.disabled = swiper.isBeginning;
            nextButton.disabled = swiper.isEnd;

            prevButton.classList.toggle(
                'swiper-button-disabled',
                swiper.isBeginning
            );
            nextButton.classList.toggle('swiper-button-disabled', swiper.isEnd);
        },
    },
});
