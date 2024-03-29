$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 32,
  autoWidth: true,
  nav: true,
  dots: false,
  stagePadding: 20,
  center: true,
  items: 3,
  navText: ["<i class='uil uil-angle-left-b icon'></i>", "<i class='uil uil-angle-right-b icon'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1024: {
      nav: true,
      items: 2,
    },

  },
});
