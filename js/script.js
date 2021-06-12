new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 60,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
});
