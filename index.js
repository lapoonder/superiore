import{i as p,a as h,S as m,N as b,K as g,M as w,A as y}from"./assets/vendor-BhOt4JvY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();p.settings({timeout:5e3,resetOnHover:!0,icon:"material-icons",animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",position:"topRight",titleColor:"#fff",titleLineHeight:"24",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",messageColor:"#fff",messageSize:"16",messageLineHeight:"24"});const L={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};L.addEventListener();const E="https://portfolio-js.b.goit.study/api/reviews";async function S(){return(await h.get(`${E}`)).data}const u=document.querySelector(".cards");q();const i=new m(".swiper",{modules:[b,g,w],slidesPerView:1,spaceBetween:0,speed:400,loop:!1,grabCursor:!0,navigation:{nextEl:".arrows .swiper-button-next",prevEl:".arrows .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");e.disabled=i.isBeginning,t.disabled=i.isEnd,e.classList.toggle("swiper-button-disabled",i.isBeginning),t.classList.toggle("swiper-button-disabled",i.isEnd)}},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});async function q(){try{const e=await S();u.insertAdjacentHTML("beforeend",k(e))}catch(e){p.error({message:`Error: ${e.message}`,position:"bottomRight"}),u.innerHTML="<h2>Not found</h2>"}}function k(e){return e.map(({author:t,avatar_url:r,review:s})=>`<li class="swiper-slide review-card"><img  loading="lazy" src="${r}" class="review-card-img"><h3 class="card-title">${t}</h3><p class="card-paragraph">${s}</p></li>`).join("")}const a=document.querySelector(".modal-overlay-menu"),M=document.querySelector(".btn-mob-menu"),B=document.querySelector(".mobmenu-btn-close");M.addEventListener("click",C);B.addEventListener("click",O);function C(){a.classList.add("is-open"),f.removeAttribute("disabled")}function O(){a.classList.remove("is-open")}const x=document.querySelector(".mobnemu-list"),f=document.querySelector(".mobmenu-btn-project"),P=document.querySelector("#work_together");f.addEventListener("click",v);x.addEventListener("click",A);function v(){a.classList.remove("is-open"),P.scrollIntoView({behavior:"smooth",block:"start"})}function A(e){e.target.classList.contains("mobmenu-list-link")&&a.classList.remove("is-open")}const N=document.querySelector(".header-btn-navigation"),d=document.querySelector(".header-navigation");N.addEventListener("click",T);d.addEventListener("click",j);function T(){d.classList.toggle("open-nav")}function j(e){e.target.classList.contains("header-navigation-link")&&d.classList.remove("open-nav")}const H=document.querySelector(".header-btn-order");H.addEventListener("click",v);const c=new m(".swiper-container",{modules:[b,g,w],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");e.disabled=c.isBeginning,t.disabled=c.isEnd,e.classList.toggle("swiper-button-disabled",c.isBeginning),t.classList.toggle("swiper-button-disabled",c.isEnd)}}});new y(".accordion-container",{showMultiple:!0});const I=document.querySelectorAll(".faq-ac-trigger");for(const e of I)e.addEventListener("click",V);function V(e){const t=e.currentTarget.querySelector(".faq-arrow-down"),r=e.currentTarget.querySelector(".faq-arrow-up");e.currentTarget.getAttribute("aria-expanded")==="true"?(t.classList.add("visually-hidden"),r.classList.remove("visually-hidden")):e.currentTarget.getAttribute("aria-expanded")==="false"&&(t.classList.remove("visually-hidden"),r.classList.add("visually-hidden"))}
//# sourceMappingURL=index.js.map
