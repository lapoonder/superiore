'use strict';

import Accordion from "./accordion.js";

document.addEventListener('DOMContentLoaded', () => {
    const accordion = new Accordion('.accordion', {
        duration: 400,
        showMultiple: false,
        collapse: true,
        elementClass: 'accordion__item',
        triggerClass: 'ac-trigger',
        panelClass: 'ac-panel',
        activeClass: 'visible',
    });
    
    console.log('Accordion initialized');
});

// document.addEventListener('DOMContentLoaded', () => {
//     const triggers = document.querySelectorAll('.ac-trigger');

//     triggers.forEach(trigger => {
//         trigger.addEventListener('click', () => {
//             const body = trigger.parentElement.nextElementSibling;
//             const iconUp = trigger.querySelector('.icon-up');
//             const iconDown = trigger.querySelector('.icon-down');

//             body.classList.toggle('visible');
//             trigger.classList.toggle('open');

//             iconUp.style.display = body.classList.contains('visible') ? "none" : "inline";
//             iconDown.style.display = body.classList.contains('visible') ? "inline" : "none";
//         });
//     });
// });