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
    heroSection.classList.add('_m-top');
  } else {
    header.classList.remove('_sticky');
    heroSection.classList.remove('_m-top');
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
    // for mobile nav
    mobileNavBtnEl.classList.remove('mobile-btn--active');
    mobileNavEl.classList.remove('nav__inner--mobile');
    document.body.classList.remove('_no-scroll');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// REVEAL SECTIONS
const allSections = document.querySelectorAll('section');

function revealSection(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
