import{i as u,a as f,S as m,N as g,K as w,M as v}from"./assets/vendor-iba9c1_q.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();u.settings({timeout:5e3,resetOnHover:!0,icon:"material-icons",animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",position:"topRight",titleColor:"#fff",titleLineHeight:"24",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",messageColor:"#fff",messageSize:"16",messageLineHeight:"24"});const h={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};h.addEventListener();const y="https://portfolio-js.b.goit.study/api/reviews";async function L(){return(await f.get(`${y}`)).data}const d=document.querySelector(".cards");S();const E=new m(".swiper",{speed:400,slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:"arrow-right",prevEl:"arrow-left"}});document.querySelector(".swiper").swiper;E.slideNext();async function S(){try{const e=await L();d.insertAdjacentHTML("beforeend",k(e))}catch(e){u.error({message:`Error: ${e.message}`,position:"bottomRight"}),d.innerHTML="<h2>Not found</h2>"}}function k(e){return e.map(({author:n,avatar_url:c,review:s})=>`<li class="swiper-slide review-card"><img  loading="lazy" src="${c}" class="review-card-img"><h3 class="card-title">${n}</h3><p class="card-paragraph">${s}</p></li>`).join("")}const i=document.querySelector(".modal-overlay-menu"),q=document.querySelector(".btn-mob-menu"),M=document.querySelector(".mobmenu-btn-close");q.addEventListener("click",O);M.addEventListener("click",N);function O(){i.classList.add("is-open"),p.removeAttribute("disabled")}function N(){i.classList.remove("is-open")}const P=document.querySelector(".mobnemu-list"),p=document.querySelector(".mobmenu-btn-project"),C=document.querySelector("#work_together");p.addEventListener("click",b);P.addEventListener("click",B);function b(){i.classList.remove("is-open"),C.scrollIntoView({behavior:"smooth",block:"start"})}function B(e){e.target.classList.contains("mobmenu-list-link")&&i.classList.remove("is-open")}const j=document.querySelector(".header-btn-navigation"),a=document.querySelector(".header-navigation");j.addEventListener("click",x);a.addEventListener("click",H);function x(){a.classList.toggle("open-nav")}function H(e){e.target.classList.contains("header-navigation-link")&&a.classList.remove("open-nav")}const I=document.querySelector(".header-btn-order");I.addEventListener("click",b);const r=new m(".swiper-container",{modules:[g,w,v],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const e=document.querySelector(".swiper-button-prev"),n=document.querySelector(".swiper-button-next");e.disabled=r.isBeginning,n.disabled=r.isEnd,e.classList.toggle("swiper-button-disabled",r.isBeginning),n.classList.toggle("swiper-button-disabled",r.isEnd)}}});
//# sourceMappingURL=index.js.map
