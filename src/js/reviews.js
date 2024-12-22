'use strict';

import getReviews from './goit-reviewsAPI.js';
import iziToast from 'izitoast';

const cards = document.querySelector('.cards');

loadReviews();

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
        `<li class="review-card"><img  loading="lazy" src="${avatar_url}" class="review-card-img"><h3 class="card-title">${author}</h3><p class="card-paragraph">${review}</p></li>`
    )
    .join('');
}
