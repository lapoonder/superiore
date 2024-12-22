'use strict';

import getReviews from './goit-reviewsAPI.js';
import iziToast from 'izitoast';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

const cards = document.querySelector('.cards');

loadReviews();

const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        768: {
            slidesPerView: 2, // Для экранов от 768px показываем две карточки
        },
        1440: {
            slidesPerView: 4, // Для экранов от 1440px показываем четыре карточки
        },
    },
    navigation: {
        nextEl: 'arrow-right',
        prevEl: 'arrow-left',
    },
});

const swi = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();

async function loadReviews() {
    try {
        const result = await getReviews();
        cards.insertAdjacentHTML('beforeend', createMarkup(result));
    } catch (error) {
        iziToast.error({
            message: `Error: ${error.message}`,
            position: 'bottomRight',
        });
        cards.innerHTML = '<h2>Not found</h2>';
    }
}

function createMarkup(arr) {
    return arr
        .map(
            ({ author, avatar_url, review }) =>
                `<li class="swiper-slide review-card"><img  loading="lazy" src="${avatar_url}" class="review-card-img"><h3 class="card-title">${author}</h3><p class="card-paragraph">${review}</p></li>`
        )
        .join('');
}
