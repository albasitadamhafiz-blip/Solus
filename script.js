import './scripts/accordion.js'
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    perPage: 1,
    gap: '40px',
    pagination: false,
    arrows: false,
    fixedWidth: '39.3rem',
    perMove: 1,
  });

  splide.mount();

  const prevButton = document.querySelector('.testimonials__button--prev');
  const nextButton = document.querySelector('.testimonials__button--next');

  prevButton.addEventListener('click', () => {
    splide.go('<');
  });

  nextButton.addEventListener('click', () => {
    splide.go('>');
  });
});