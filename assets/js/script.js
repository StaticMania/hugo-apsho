$(document).ready(function () {
  "use strict";

  //  Headroom Initialize
  $(".main-nav").headroom();

  // Scroll to top
  $("a[href='#top']").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });

  // Magnific Popup
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // Smooth scroll
  $("a.scroll-to").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 50,
        },
        1000
      );
    event.preventDefault();
  });

  if (window.innerWidth > 767) {
    $(".service-item").matchHeight({
      byRow: 0,
    });

    $(".blog-post-item").matchHeight({
      byRow: 0,
    });
  }

  $(".testimonial-slider-item").matchHeight({
    byRow: 0,
  });

  // Screenshot Slider
  $(".screenshots-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    speed: 500,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Testimonial slider
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: "-100px",
    autoplay: true,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
  });

  $(".slick-slider").on("click", ".slick-slide", function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");
    if ($(".testimonial-slider").slick("slickCurrentSlide") !== index) {
      $(".testimonial-slider").slick("slickGoTo", index);
    }
  });

  // AOS initialize
  AOS.init({
    disable: "mobile",
  });

  // Tooltip
  $(".footer-tooltip").tooltip();
});

// sticky nav
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("nav-bg");
  } else {
    $("nav").removeClass("nav-bg");
  }
});
