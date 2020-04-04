var mySwiper = new Swiper('.swiper-container', {
      // Default parameters
  slidesPerView: 3,
  spaceBetween: 400,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    }
});