'use strict';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Ініціалізація акордеону для контейнера з класом .accordion-list
document.querySelectorAll('.accordion-list').forEach(container => {
new Accordion(container, { showMultiple: true });
});

// Додавання слухачів подій для стрілок
const arrows = document.querySelectorAll('.accordion-header');


for (const arrow of arrows) {
    arrow.addEventListener('click', UpDownAbout);
}

// Функція для зміни стану стрілки вгору/вниз
function UpDownAbout(event) {
    const header = event.currentTarget.closest('.accordion-header');
    const button = header.querySelector('.accordion-toggle');

    const arrowUp = header.querySelector('.about-icon-up');
    const arrowDown = header.querySelector('.about-icon-down');
    
    const textAccordeonAbout = header.nextElementSibling;

    // Зміна атрибута aria-expanded і показ/сховання стрілок
    if (button.getAttribute('aria-expanded') === 'true') {
        button.setAttribute('aria-expanded', 'false');
        textAccordeonAbout.style.display = "block";

        
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
    } else {
        button.setAttribute('aria-expanded', 'true');
        textAccordeonAbout.style.display = "none";

        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
    }


    
}

