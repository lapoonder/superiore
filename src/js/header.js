

// body-scroll-lock import
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

/*Відкриття закриття модального вікна на мобпристроях*/
const modalWindow = document.querySelector(".modal-overlay-menu");
const openMobMenu = document.querySelector(".btn-mob-menu");
const btnClose = document.querySelector(".mobmenu-btn-close");



openMobMenu.addEventListener("click", mobileMenuOpen);
btnClose.addEventListener("click", mobileMenuClose);

function mobileMenuOpen() {
    modalWindow.classList.add("is-open");
    disableBodyScroll(modalWindow);
    btnOrderProject.removeAttribute("disabled");
}

function mobileMenuClose() {
    modalWindow.classList.remove("is-open");
    enableBodyScroll(modalWindow);
}

/*Навігація по мобільному меню*/
const mobMenuNavigation = document.querySelector(".mobnemu-list");
const btnOrderProject = document.querySelector(".mobmenu-btn-project");
const sectionFooter = document.querySelector("#work_together");

btnOrderProject.addEventListener("click", orderProject);
mobMenuNavigation.addEventListener("click", mobMenuClick);

function orderProject() {
    modalWindow.classList.remove("is-open");
    sectionFooter.scrollIntoView({
    behavior: 'smooth', 
    block: 'start', 
  });
};

function mobMenuClick(event) {
    const elementClick = event.target;
    if (elementClick.classList.contains("mobmenu-list-link")) {
        modalWindow.classList.remove("is-open");
    }
    
}

/*навігація для планшетної та десктопної версії*/
const btnHeaderNavigtion = document.querySelector(".header-btn-navigation")
const menuNavigationTab = document.querySelector(".header-navigation");

btnHeaderNavigtion.addEventListener("click", openNavMenu);
menuNavigationTab.addEventListener("click", scrollMenu)

function openNavMenu() {
    menuNavigationTab.classList.toggle("open-nav");
};

function scrollMenu(event) {
    const clickElement = event.target;
    if (clickElement.classList.contains("header-navigation-link")) {
        menuNavigationTab.classList.remove("open-nav");
    }
};

const btnOrderProjectHeader = document.querySelector(".header-btn-order");
btnOrderProjectHeader.addEventListener("click", orderProject);