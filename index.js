import{i as v,a as S,S as d,N as u,K as p,M as m,A as E}from"./assets/vendor-BhOt4JvY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();v.settings({timeout:5e3,resetOnHover:!0,icon:"material-icons",animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",position:"topRight",titleColor:"#fff",titleLineHeight:"24",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",messageColor:"#fff",messageSize:"16",messageLineHeight:"24"});const q={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};q.addEventListener();const k="https://portfolio-js.b.goit.study/api/reviews";async function C(){return(await S.get(`${k}`)).data}const b=document.querySelector(".cards"),P=document.querySelector(".reviews");let f=!1;window.addEventListener("scroll",()=>{!f&&B(P)&&(M(),f=!0)});function B(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=window.innerHeight&&t.right<=window.innerWidth}const i=new d(".reviews .swiper",{modules:[u,p,m],slidesPerView:1,spaceBetween:0,speed:400,loop:!1,grabCursor:!0,navigation:{nextEl:'.swiper-button-next[data-swiper-id="2"]',prevEl:'.swiper-button-prev[data-swiper-id="2"]'},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const e=document.querySelector('.swiper-button-prev[data-swiper-id="2"]'),t=document.querySelector('.swiper-button-next[data-swiper-id="2"]');e.disabled=i.isBeginning,t.disabled=i.isEnd,e.classList.toggle("swiper-button-disabled",i.isBeginning),t.classList.toggle("swiper-button-disabled",i.isEnd)}},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});async function M(){try{const e=await C();b.insertAdjacentHTML("beforeend",O(e))}catch(e){v.error({message:`Error: ${e.message}`,position:"bottomRight"}),b.innerHTML="<h2>Not found</h2>"}}function O(e){return e.map(({author:t,avatar_url:n,review:r})=>`<li class="swiper-slide review-card"><img  loading="lazy" src="${n}" class="review-card-img"><h3 class="card-title">${t}</h3><p class="card-paragraph">${r}</p></li>`).join("")}const a=document.querySelector(".modal-overlay-menu"),V=document.querySelector(".btn-mob-menu"),x=document.querySelector(".mobmenu-btn-close");V.addEventListener("click",N);x.addEventListener("click",I);function N(){a.classList.add("is-open"),y.removeAttribute("disabled")}function I(){a.classList.remove("is-open")}const T=document.querySelector(".mobnemu-list"),y=document.querySelector(".mobmenu-btn-project"),j=document.querySelector("#work_together");y.addEventListener("click",h);T.addEventListener("click",A);function h(){a.classList.remove("is-open"),j.scrollIntoView({behavior:"smooth",block:"start"})}function A(e){e.target.classList.contains("mobmenu-list-link")&&a.classList.remove("is-open")}const R=document.querySelector(".header-btn-navigation"),w=document.querySelector(".header-navigation");R.addEventListener("click",H);w.addEventListener("click",$);function H(){w.classList.toggle("open-nav")}function $(e){e.target.classList.contains("header-navigation-link")&&w.classList.remove("open-nav")}const D=document.querySelector(".header-btn-order");D.addEventListener("click",h);const c=new d(".swiper-container",{modules:[u,p,m],speed:200,slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:'.swiper-button-next[data-swiper-id="1"]',prevEl:'.swiper-button-prev[data-swiper-id="1"]'},keyboard:{benabled:!0,onlyInViewport:!0},mousewheel:!0,on:{slideChange:function(){const e=document.querySelector('.swiper-button-prev[data-swiper-id="1"]'),t=document.querySelector('.swiper-button-next[data-swiper-id="1"]');e.disabled=c.isBeginning,t.disabled=c.isEnd,e.classList.toggle("swiper-button-disabled",c.isBeginning),t.classList.toggle("swiper-button-disabled",c.isEnd)}}});document.querySelectorAll(".accordion-container").forEach(e=>{new E(e,{showMultiple:!0})});const U=document.querySelectorAll(".faq-ac-trigger");for(const e of U)e.addEventListener("click",z);function z(e){const t=e.currentTarget.querySelector(".faq-arrow-down"),n=e.currentTarget.querySelector(".faq-arrow-up");e.currentTarget.getAttribute("aria-expanded")==="true"?(t.classList.add("visually-hidden"),n.classList.remove("visually-hidden")):(t.classList.remove("visually-hidden"),n.classList.add("visually-hidden"))}const g=document.querySelector(".footer-form"),_=document.querySelector("#comment"),K=document.querySelector("#email"),L=document.querySelector(".pop-up"),Y=document.querySelector(".pop-up-close-btn"),F="https://portfolio-js.b.goit.study/api";g.addEventListener("submit",async e=>{e.preventDefault();const t=_.value.trim(),r={email:K.value.trim(),comment:t};try{const o=await fetch(F,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(o.ok)L.classList.add("is-open"),g.reset();else{const s=await o.json();alert(`Error: ${s.message}`)}}catch(o){alert(`Error: ${o.message}`)}});Y.addEventListener("click",()=>{L.classList.remove("is-open")});const W=new d(".skills-swiper-about-me",{wrapperClass:"skills-list",slideClass:"skills-list-items",slideActiveClass:"chosen",modules:[u,p,m],direction:"horizontal",slidesPerView:1,spaceBetween:0,loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:"skills-btm"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0}});document.querySelector(".skills-btm").addEventListener("click",e=>{W.slideNext()});
//# sourceMappingURL=index.js.map
