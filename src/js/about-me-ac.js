'use strict';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionContainers = document.querySelectorAll(".accordion-list");

accordionContainers.forEach((container) => {
    const accordionItems = container.querySelectorAll(".accordion-item");
    const accordionToggles = container.querySelectorAll(".accordion-toggle");

    accordionItems.forEach((item, index) => {
        if (index === 0) {
            item.classList.add("open");
            item.querySelector(".accordion-toggle").setAttribute("aria-expanded", "true");
        } else {
            item.classList.remove("open");
            item.querySelector(".accordion-toggle").setAttribute("aria-expanded", "false");
        }
    });

    accordionToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const parentItem = toggle.closest(".accordion-item");
            const isOpen = parentItem.classList.contains("open");

            accordionItems.forEach((item) => {
                item.classList.remove("open");
                item.querySelector(".accordion-toggle").setAttribute("aria-expanded", "false");
            });

            if (!isOpen) {
                parentItem.classList.add("open");
                toggle.setAttribute("aria-expanded", "true");
            }
        });
    });
});
