!function(){"use strict";const e=document.querySelector(".mobile-btn"),t=document.querySelector(".nav__inner");e.addEventListener("click",(function(){e.classList.toggle("mobile-btn--active"),t.classList.toggle("nav__inner--mobile"),document.body.classList.toggle("_no-scroll")}));const n=document.querySelector(".header"),o=document.querySelector(".hero"),s=n.getBoundingClientRect().height;o.getBoundingClientRect().height,new IntersectionObserver((function(e,t){const[s]=e;s.isIntersecting?(n.classList.remove("_sticky"),o.classList.remove("_m-top")):(n.classList.add("_sticky"),o.classList.add("_m-top"))}),{root:null,threshold:0,rootMargin:`-${s}px`}).observe(o);const i=document.querySelector(".nav__list"),r=document.querySelector(".footer__nav");i.addEventListener("click",(function(n){if(n.preventDefault(),n.target.classList.contains("nav__link")){const o=n.target.getAttribute("href");e.classList.remove("mobile-btn--active"),t.classList.remove("nav__inner--mobile"),document.body.classList.remove("_no-scroll"),document.querySelector(o).scrollIntoView({behavior:"smooth"})}})),r.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("footer__nav-link")){const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}}));const c=document.querySelectorAll("section"),l=new IntersectionObserver((function(e,t){const[n]=e;n.isIntersecting&&(n.target.classList.remove("section--hidden"),t.unobserve(n.target))}),{root:null,threshold:.15});c.forEach((e=>{l.observe(e),e.classList.add("section--hidden")}));const d=document.querySelector(".video__element"),u=document.querySelector(".video__wrapper"),a=document.querySelector(".video__bg"),v=document.querySelector(".video__btn"),m=document.querySelector(".video__btn-icon");function _(e){"mouseleave"===e.type?v.classList.add("video__btn--hidden"):v.classList.remove("video__btn--hidden")}v.addEventListener("click",(function(){d.paused?(d.play(),m.innerHTML='<use href="./images/svgsprite/sprite.symbol.svg#story--pause-btn"></use>',a.classList.add("video__bg--hidden"),u.onmouseleave=_,u.onmouseenter=_):(d.pause(),m.innerHTML='<use href="./images/svgsprite/sprite.symbol.svg#story--play-btn"></use>',a.classList.remove("video__bg--hidden"),u.onmouseleave=null,u.onmouseenter=null)})),d.addEventListener("ended",(function(){console.log("end"),m.innerHTML='<use href="./images/svgsprite/sprite.symbol.svg#story--play-btn"></use>',a.classList.remove("video__bg--hidden"),u.onmouseleave=null,u.onmouseenter=null,v.classList.remove("video__btn--hidden")}))}();