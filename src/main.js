'use strict';

import './js/reviews.js';
import './js/header.js';
import './js/swiper.js';
import './js/covers.js';
import './js/goit-requestsAPI.js';
import './js/about-me-swiper.js';
import './js/accordion.js';

// Button from scroll to up page
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY =
                window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        };
    },
};

btnUp.addEventListener();
