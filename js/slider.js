$(document).ready(function () {
  $(".slider-wrapper").slick({
    autoplay: true, // Enable auto-play
    autoplaySpeed: 1000, // Set auto-play speed (in ms)
    dots: false, // Show navigation dots
    arrows: true, // Show navigation arrows
    infinite: true, // Enable infinite looping
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
  });
});

$(document).ready(function () {
  $(".MS-content").slick({
    autoplay: true, // Enable auto-play
    autoplaySpeed: 900, // Set auto-play speed (in ms)
    dots: true, // Show navigation dots
    arrows: true, // Show navigation arrows
    infinite: true, // Enable infinite looping
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
  });
});
