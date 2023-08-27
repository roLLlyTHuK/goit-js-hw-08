var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o);var l=o("kEUo3");const n=document.querySelector(".feedback-form"),r=n.querySelector('[name="email"]'),s=n.querySelector('[name="message"]'),i=n.querySelector('button[type="submit"]');i.disabled=!0,
//! заборона відправки пустих полів
n.addEventListener("input",(function(){i.disabled=""===r.value||""===s.value}));
//! зберігаемо у сховище кожні піві секунди
const d=(0,l.throttle)((()=>{const e={email:r.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);r.addEventListener("input",d),s.addEventListener("input",d);
//! отримуємо зі сховища
const u=localStorage.getItem("feedback-form-state");if(u){const e=JSON.parse(u);r.value=e.email,s.value=e.message}
//! очищення сховища та полів
n.addEventListener("submit",(e=>{e.preventDefault();const t={email:r.value,message:s.value};console.log(t),localStorage.removeItem("feedback-form-state"),r.value="",s.value="",i.disabled=!0}));
//# sourceMappingURL=03-feedback.898e30c2.js.map
