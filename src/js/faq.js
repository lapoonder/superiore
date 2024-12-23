'use strict';

import Accordion from "./accordion.js";

document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.ac-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const body = trigger.parentElement.nextElementSibling;
            const iconUp = trigger.querySelector('.icon-up');
            const iconDown = trigger.querySelector('.icon-down');

            
            if (body.classList.contains("active")) {
                body.classList.remove("active");
                body.style.display = "none"
            }
            else {
                body.classList.add("active");
                body.style.display = "block"
            }

            iconUp.style.display = body.classList.contains("active") ? "none" : "inline";
            iconDown.style.display = body.classList.contains("active") ? "inline" : "none";
        });
    });
})