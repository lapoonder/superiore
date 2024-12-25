import{i as v,a as k,S as d,N as u,K as p,M as m,A as C}from"./assets/vendor-BhOt4JvY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();v.settings({timeout:5e3,resetOnHover:!0,icon:"material-icons",animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",position:"topRight",titleColor:"#fff",titleLineHeight:"24",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",messageColor:"#fff",messageSize:"16",messageLineHeight:"24"});const A={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};A.addEventListener();const x="https://portfolio-js.b.goit.study/api/reviews";async function P(){return(await k.get(`${x}`)).data}const b=document.querySelector(".cards"),y=document.querySelector(".reviews");let f=!1;L();window.addEventListener("scroll",()=>{!f&&h(y)&&(L(),f=!0)});function h(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth}const c=new d(".reviews .swiper",{modules:[u,p,m],slidesPerView:1,spaceBetween:0,speed:400,loop:!1,grabCursor:!0,navigation:{nextEl:'.swiper-button-next[data-swiper-id="2"]',prevEl:'.swiper-button-prev[data-swiper-id="2"]'},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const e=document.querySelector('.swiper-button-prev[data-swiper-id="2"]'),t=document.querySelector('.swiper-button-next[data-swiper-id="2"]');e.disabled=c.isBeginning,t.disabled=c.isEnd,e.classList.toggle("swiper-button-disabled",c.isBeginning),t.classList.toggle("swiper-button-disabled",c.isEnd)}},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});async function L(){try{const e=await P();b.insertAdjacentHTML("beforeend",B(e))}catch(e){h(y)&&v.error({message:`Error: ${e.message}`,position:"bottomRight"}),b.innerHTML="<h2>Not found</h2>"}}function B(e){return e.map(({author:t,avatar_url:r,review:s})=>`<li class="swiper-slide review-card"><img  loading="lazy" src="${r}" class="review-card-img"><h3 class="card-title">${t}</h3><p class="card-paragraph">${s}</p></li>`).join("")}const l=document.querySelector(".modal-overlay-menu"),M=document.querySelector(".btn-mob-menu"),O=document.querySelector(".mobmenu-btn-close");M.addEventListener("click",I);O.addEventListener("click",V);function I(){l.classList.add("is-open"),S.removeAttribute("disabled")}function V(){l.classList.remove("is-open")}const N=document.querySelector(".mobnemu-list"),S=document.querySelector(".mobmenu-btn-project"),T=document.querySelector("#work_together");S.addEventListener("click",E);N.addEventListener("click",j);function E(){l.classList.remove("is-open"),T.scrollIntoView({behavior:"smooth",block:"start"})}function j(e){e.target.classList.contains("mobmenu-list-link")&&l.classList.remove("is-open")}const R=document.querySelector(".header-btn-navigation"),w=document.querySelector(".header-navigation");R.addEventListener("click",H);w.addEventListener("click",$);function H(){w.classList.toggle("open-nav")}function $(e){e.target.classList.contains("header-navigation-link")&&w.classList.remove("open-nav")}const D=document.querySelector(".header-btn-order");D.addEventListener("click",E);const a=new d(".swiper-container",{modules:[u,p,m],speed:800,slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:'.swiper-button-next[data-swiper-id="1"]',prevEl:'.swiper-button-prev[data-swiper-id="1"]'},keyboard:{benabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const e=document.querySelector('.swiper-button-prev[data-swiper-id="1"]'),t=document.querySelector('.swiper-button-next[data-swiper-id="1"]');e.disabled=a.isBeginning,t.disabled=a.isEnd,e.classList.toggle("swiper-button-disabled",a.isBeginning),t.classList.toggle("swiper-button-disabled",a.isEnd)}}});document.querySelectorAll(".accordion-container").forEach(e=>{new C(e,{showMultiple:!0})});const U=document.querySelectorAll(".faq-ac-trigger");for(const e of U)e.addEventListener("click",z);function z(e){const t=e.currentTarget.querySelector(".faq-arrow-down"),r=e.currentTarget.querySelector(".faq-arrow-up");e.currentTarget.getAttribute("aria-expanded")==="true"?(t.classList.add("visually-hidden"),r.classList.remove("visually-hidden")):(t.classList.remove("visually-hidden"),r.classList.add("visually-hidden"))}const g=document.querySelector(".footer-form"),_=document.querySelector("#comment"),K=document.querySelector("#email"),q=document.querySelector(".pop-up"),Y=document.querySelector(".pop-up-close-btn"),F="https://portfolio-js.b.goit.study/api";g.addEventListener("submit",async e=>{e.preventDefault();const t=_.value.trim(),s={email:K.value.trim(),comment:t};try{const o=await fetch(F,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(o.ok)q.classList.add("is-open"),g.reset();else{const n=await o.json();alert(`Error: ${n.message}`)}}catch(o){alert(`Error: ${o.message}`)}});Y.addEventListener("click",()=>{q.classList.remove("is-open")});const W=new d(".skills-swiper-about-me",{wrapperClass:"skills-list",slideClass:"skills-list-items",slideActiveClass:"chosen",modules:[u,p,m],direction:"horizontal",slidesPerView:1,spaceBetween:0,loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:"skills-btm"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0}});document.querySelector(".skills-btm").addEventListener("click",e=>{W.slideNext()});const J=document.querySelectorAll(".accordion-list");J.forEach(e=>{const t=e.querySelectorAll(".accordion-item"),r=e.querySelectorAll(".accordion-toggle");t.forEach((s,o)=>{o===0?(s.classList.add("open"),s.querySelector(".accordion-toggle").setAttribute("aria-expanded","true")):(s.classList.remove("open"),s.querySelector(".accordion-toggle").setAttribute("aria-expanded","false"))}),r.forEach(s=>{s.addEventListener("click",()=>{const o=s.closest(".accordion-item"),n=o.classList.contains("open");t.forEach(i=>{i.classList.remove("open"),i.querySelector(".accordion-toggle").setAttribute("aria-expanded","false")}),n||(o.classList.add("open"),s.setAttribute("aria-expanded","true"))})})});
//# sourceMappingURL=index.js.map
