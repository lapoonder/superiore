import{i as f,a as L,S as d,N as u,K as p,M as w,A as v}from"./assets/vendor-BhOt4JvY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();f.settings({timeout:5e3,resetOnHover:!0,icon:"material-icons",animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",position:"topRight",titleColor:"#fff",titleLineHeight:"24",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",messageColor:"#fff",messageSize:"16",messageLineHeight:"24"});const S={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};S.addEventListener();const E="https://portfolio-js.b.goit.study/api/reviews";async function q(){return(await L.get(`${E}`)).data}const b=document.querySelector(".cards"),k=document.querySelector(".reviews");let g=!1;window.addEventListener("scroll",()=>{!g&&C(k)&&(M(),g=!0)});function C(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth}const i=new d(".reviews .swiper",{modules:[u,p,w],slidesPerView:1,spaceBetween:0,speed:400,loop:!1,grabCursor:!0,navigation:{nextEl:".arrows .swiper-button-next",prevEl:".arrows .swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");e.disabled=i.isBeginning,t.disabled=i.isEnd,e.classList.toggle("swiper-button-disabled",i.isBeginning),t.classList.toggle("swiper-button-disabled",i.isEnd)}},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});async function M(){try{const e=await q();b.insertAdjacentHTML("beforeend",x(e))}catch(e){f.error({message:`Error: ${e.message}`,position:"bottomRight"}),b.innerHTML="<h2>Not found</h2>"}}function x(e){return e.map(({author:t,avatar_url:r,review:s})=>`<li class="swiper-slide review-card"><img  loading="lazy" src="${r}" class="review-card-img"><h3 class="card-title">${t}</h3><p class="card-paragraph">${s}</p></li>`).join("")}const l=document.querySelector(".modal-overlay-menu"),A=document.querySelector(".btn-mob-menu"),P=document.querySelector(".mobmenu-btn-close");A.addEventListener("click",B);P.addEventListener("click",V);function B(){l.classList.add("is-open"),y.removeAttribute("disabled")}function V(){l.classList.remove("is-open")}const O=document.querySelector(".mobnemu-list"),y=document.querySelector(".mobmenu-btn-project"),N=document.querySelector("#work_together");y.addEventListener("click",h);O.addEventListener("click",T);function h(){l.classList.remove("is-open"),N.scrollIntoView({behavior:"smooth",block:"start"})}function T(e){e.target.classList.contains("mobmenu-list-link")&&l.classList.remove("is-open")}const I=document.querySelector(".header-btn-navigation"),m=document.querySelector(".header-navigation");I.addEventListener("click",H);m.addEventListener("click",R);function H(){m.classList.toggle("open-nav")}function R(e){e.target.classList.contains("header-navigation-link")&&m.classList.remove("open-nav")}const j=document.querySelector(".header-btn-order");j.addEventListener("click",h);const c=new d(".swiper-container",{modules:[u,p,w],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{benabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const e=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");e.disabled=c.isBeginning,t.disabled=c.isEnd,e.classList.toggle("swiper-button-disabled",c.isBeginning),t.classList.toggle("swiper-button-disabled",c.isEnd)}}});document.querySelectorAll(".accordion-container").forEach(e=>{new v(e,{showMultiple:!0})});const $=document.querySelectorAll(".faq-ac-trigger");for(const e of $)e.addEventListener("click",U);function U(e){const t=e.currentTarget.querySelector(".faq-arrow-down"),r=e.currentTarget.querySelector(".faq-arrow-up");e.currentTarget.getAttribute("aria-expanded")==="true"?(t.classList.add("visually-hidden"),r.classList.remove("visually-hidden")):(t.classList.remove("visually-hidden"),r.classList.add("visually-hidden"))}document.querySelectorAll(".accordion-list").forEach(e=>{new v(e,{showMultiple:!0})});const z=document.querySelectorAll(".accordion-header");for(const e of z)e.addEventListener("click",D);function D(e){const t=e.currentTarget.closest(".accordion-header"),r=t.querySelector(".accordion-toggle"),s=t.querySelector(".about-icon-up"),o=t.querySelector(".about-icon-down");r.getAttribute("aria-expanded")==="true"?(r.setAttribute("aria-expanded","false"),o.style.display="block",s.style.display="none"):(r.setAttribute("aria-expanded","true"),o.style.display="none",s.style.display="block")}const _=new d(".skills-swiper-about-me",{wrapperClass:"skills-list",slideClass:"skills-list-items",slideActiveClass:"chosen",modules:[u,p,w],direction:"horizontal",slidesPerView:1,spaceBetween:0,loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:"skills-btm"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0}});document.querySelector(".skills-btm").addEventListener("click",e=>{_.slideNext()});
//# sourceMappingURL=index.js.map
