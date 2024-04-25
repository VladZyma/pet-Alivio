'use strict';
// MOBILE NAV
const mobileNavBtnEl = document.querySelector('.mobile-btn');
const mobileNavEl = document.querySelector('.nav__inner');

mobileNavBtnEl.addEventListener('click', function () {
  mobileNavBtnEl.classList.toggle('mobile-btn--active');
  mobileNavEl.classList.toggle('nav__inner--mobile');
  document.body.classList.toggle('_no-scroll');
});

// STICKY HEADER
const header = document.querySelector('.header');
const heroSection = document.querySelector('.hero');

const headerHeight = header.getBoundingClientRect().height;
const heroSectionHeight = heroSection.getBoundingClientRect().height;

function headerObsCallback(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add('_sticky');
  } else {
    header.classList.remove('_sticky');
  }
}

const headerObsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
};

const headerObserver = new IntersectionObserver(
  headerObsCallback,
  headerObsOptions
);
headerObserver.observe(heroSection);

// PAGE NAVIGATION
const navListEl = document.querySelector('.nav__list');

navListEl.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
