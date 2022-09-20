var swiper = new Swiper(".reviews-swiper", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 40,
    slidesPerView: 5,
    coverflowEffect: {
      rotate:0,
      depth: 90,
      modifier: 1,
      slideShadows: false,
    },
});