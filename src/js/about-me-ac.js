document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");
    const accordionToggles = document.querySelectorAll(".accordion-toggle");

    accordionItems.forEach((item, index) => {
        const toggle = item.querySelector(".accordion-toggle");
        const upIcon = item.querySelector(".about-icon-up");
        const downIcon = item.querySelector(".about-icon-down");

        if (index === 0) {
            item.classList.add("open");
            toggle.setAttribute("aria-expanded", "true");
            upIcon.style.display = "block";
            downIcon.style.display = "none";
        } else {
            item.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            upIcon.style.display = "none";
            downIcon.style.display = "block";
        }
    });

    accordionToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const parentItem = toggle.closest(".accordion-item");
            const isOpen = parentItem.classList.contains("open");

            accordionItems.forEach((item) => {
                const itemToggle = item.querySelector(".accordion-toggle");
                const upIcon = item.querySelector(".about-icon-up");
                const downIcon = item.querySelector(".about-icon-down");

                item.classList.remove("open");
                itemToggle.setAttribute("aria-expanded", "false");
                upIcon.style.display = "none";
                downIcon.style.display = "block";
            });

            if (!isOpen) {
                const upIcon = parentItem.querySelector(".about-icon-up");
                const downIcon = parentItem.querySelector(".about-icon-down");

                parentItem.classList.add("open");
                toggle.setAttribute("aria-expanded", "true");
                upIcon.style.display = "block";
                downIcon.style.display = "none";
            }
        });
    });
});
