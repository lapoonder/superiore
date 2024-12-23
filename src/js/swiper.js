'use strict';
import 'swiper/css';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Keyboard, Mousewheel],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    mousewheel: true,

    on: {
        slideChange: function () {
            const prevButton = document.querySelector('.swiper-button-prev');
            const nextButton = document.querySelector('.swiper-button-next');

            prevButton.disabled = swiper.isBeginning;
            nextButton.disabled = swiper.isEnd;

            prevButton.classList.toggle('swiper-button-disabled', swiper.isBeginning);
            nextButton.classList.toggle('swiper-button-disabled', swiper.isEnd);
        },
    },
});
