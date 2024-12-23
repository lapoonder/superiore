'use strict';

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

/*const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
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
    pagination: false,
    scrollbar: false,
    on: {
        slideChange: function () {
            const totalSlides = swiper.slides.length;
            const currentSlide = swiper.activeIndex;

            const prevButton = document.querySelector('.swiper-button-prev');
            const nextButton = document.querySelector('.swiper-button-next');

            if (currentSlide === 0) {
                prevButton.disabled = true;
            } else {
                prevButton.disabled = false;
            }

            if (currentSlide === totalSlides - 1) {
                nextButton.disabled = true;
            } else {
                nextButton.disabled = false;
            }
        },
    },
});*/
