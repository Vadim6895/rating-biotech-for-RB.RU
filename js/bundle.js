!function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);s(1),s(2)},function(e,t){const s=document.querySelector(".main-nav"),n=document.querySelector(".main-nav__toggle");s.classList.remove("main-nav--no-js"),s.classList.remove("main-nav--opened"),s.classList.add("main-nav--closed"),n.addEventListener("click",(function(){s.classList.contains("main-nav--closed")?(s.classList.remove("main-nav--closed"),s.classList.add("main-nav--opened")):(s.classList.add("main-nav--closed"),s.classList.remove("main-nav--opened"))}))},function(e,t){const s=document.querySelector(".employers__list"),n=s.querySelectorAll(".employers__item"),o=s.querySelectorAll(".employers__full-description"),i="employers__item--active",r="employers__item-description",l="visually-hidden",a=e=>{for(let t of o)if(t.id===e)return t};s.addEventListener("click",e=>{if(e.target.closest("LI").classList.contains("employers__item")){let t=e.target.closest("LI");if(t.classList.contains(i)){t.classList.remove(i);let e=a(t.id);e.classList.add(l),e.classList.remove(r)}else{(()=>{for(let e of n)e.classList.contains(i)&&e.classList.remove(i)})(),(()=>{for(let e of o)e.classList.contains(r)&&(e.classList.remove(r),e.classList.add(l))})(),t.classList.add(i);let e=a(t.id);e.classList.remove(l),e.classList.add(r)}}})}]);