$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });

  let hamberger = document.querySelector(".hamberger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-nav");
  let display_ham = document.querySelector(".ham-img");

  hamberger.addEventListener("click", function () {
    mobileNav.classList.add("open");
    display_ham.classList.add("display-ham");
  });

  times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    display_ham.classList.remove("display-ham");
  });
});

let header = document.querySelector("header");

setTimeout(() => {
  header.classList.add("clip-path");
}, 1000);
