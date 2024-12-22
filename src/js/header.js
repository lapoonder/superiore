
/*Відкриття закриття модального вікна на мобпристроях*/
const modalWindow = document.querySelector(".modal-overlay-menu");
const openMobMenu = document.querySelector(".btn-mob-menu");
const btnClose = document.querySelector(".mobmenu-btn-close");

openMobMenu.addEventListener("click", mobileMenuOpen);
btnClose.addEventListener("click", mobileMenuClose);

function mobileMenuOpen() {
    modalWindow.classList.add("is-open");
    btnOrderProject.removeAttribute("disabled");
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

function orderProject(event) {
    const btnTarget = event.target;
    btnTarget.setAttribute("disabled", "");
    // btnOrderProject.setAttribute("disabled", "")
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
    if (menuNavigationTab.style.display === "flex") {
        menuNavigationTab.style.display = "none";
    } else {
        menuNavigationTab.style.display = "flex";
        menuNavigationTab.style.flexDirection = "column";
        menuNavigationTab.style.alignItems = "center";
    }
};

function scrollMenu(event) {
    const clickElement = event.target;
    if (clickElement.classList.contains("header-navigation-link")) {
         menuNavigationTab.style.display = "none";
    }
};

const btnOrderProjectHeader = document.querySelector(".header-btn-order");
btnOrderProjectHeader.addEventListener("click", orderProject);