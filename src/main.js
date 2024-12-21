'use strict';

import { message, messageInfo } from './js/iziToast.js';
import getReviews from './js/goit-reviewsAPI.js';
import iziToast from 'izitoast';

const cards = document.querySelector('.cards');

try {
  const result = await getReviews();
  cards.insertAdjacentHTML('beforeend', createMarkup(result));
} catch {
  iziToast.message;
  cards.innerHTML = '<h2>Not found</h2>';
}

function createMarkup(arr) {
  return arr
    .map(
      ({ author, avatar_url, review }) =>
        `<li class="review-card"><img src="${avatar_url}" class="review-card-img"><h3 class="card-title">${author}</h3><p class="card-paragraph">${review}</p></li>`
    )
    .join('');
}
