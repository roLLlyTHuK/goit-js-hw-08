!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=r("1WSnx"),l=document.querySelector(".feedback-form"),o=l.querySelector('[name="email"]'),i=l.querySelector('[name="message"]'),u=l.querySelector('button[type="submit"]');u.disabled=!0,
//! заборона відправки пустих полів
l.addEventListener("input",(function(){u.disabled=""===o.value||""===i.value}));
//! зберігаемо у сховище кожні піві секунди
var d=(0,n.throttle)((function(){var e={email:o.value,message:i.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);o.addEventListener("input",d),i.addEventListener("input",d);
//! отримуємо зі сховища
var s=localStorage.getItem("feedback-form-state");if(s){var f=JSON.parse(s);o.value=f.email,i.value=f.message}
//! очищення сховища та полів
l.addEventListener("submit",(function(e){e.preventDefault();var t={email:o.value,message:i.value};console.log(t),localStorage.removeItem("feedback-form-state"),o.value="",i.value="",u.disabled=!0}))}();
//# sourceMappingURL=03-feedback.b559959d.js.map
