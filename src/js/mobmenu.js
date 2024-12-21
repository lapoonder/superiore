
/*Відкриття закриття модального вікна на мобпристроях*/
const modalWindow = document.querySelector(".modal-overlay-menu");
const openMobMenu = document.querySelector(".btn-mob-menu");
const btnClose = document.querySelector(".mobmenu-btn-close");

openMobMenu.addEventListener("click", mobileMenuOpen);
btnClose.addEventListener("click", mobileMenuClose);

function mobileMenuOpen() {
    modalWindow.classList.add("is-open");
}

function mobileMenuClose() {
    modalWindow.classList.remove("is-open");
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

