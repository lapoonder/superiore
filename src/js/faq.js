'use strict';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.querySelectorAll('.accordion-container').forEach(container => {
new Accordion(container, { showMultiple: true });
});


const arrows = document.querySelectorAll('.faq-ac-trigger');


for (const arrow of arrows) {
    arrow.addEventListener('click', UpDown);
}

function UpDown(event) {
    const arrowDown = event.currentTarget.querySelector('.faq-arrow-down');
    const arrowUp = event.currentTarget.querySelector('.faq-arrow-up');
    if (event.currentTarget.getAttribute('aria-expanded') === 'true') {
        arrowDown.classList.add('visually-hidden');
        arrowUp.classList.remove('visually-hidden');
    } else {
        arrowDown.classList.remove('visually-hidden');
        arrowUp.classList.add('visually-hidden');
    }
}