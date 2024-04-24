'use strict';
// MOBILE NAV
const mobileNavBtnEl = document.querySelector('.mobile-btn');
const mobileNavEl = document.querySelector('.nav__inner');

mobileNavBtnEl.addEventListener('click', function () {
  mobileNavBtnEl.classList.toggle('mobile-btn--active');
  mobileNavEl.classList.toggle('nav__inner--mobile');
  document.body.classList.toggle('_no-scroll');
});
