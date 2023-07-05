// import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
  const slider = () => {
    const slides = document.querySelectorAll(".pulsometrs"),
      slider_inner = document.querySelector(".carousel__slider__inner"),
      prev = document.querySelector(".previus_btn"),
      next = document.querySelector(".next_btn");

    slides.forEach((item) => {
      item.style.display = "none";
    });

    let slideIndex = 0;
    slider(slideIndex);

    function slider(i) {
      if (i < 0) {
        slideIndex = slides.length - 1;
      }
      if (i > slides.length - 1) {
        slideIndex = 0;
      }

      slides.forEach((item) => {
        item.style.display = "none";
        item.classList.add("faded");
      });
      slides[slideIndex].style.display = "block";
    }

    function changeIndex(n) {
      slider((slideIndex += n));
      console.log(slideIndex);
    }

    next.addEventListener("click", () => {
      changeIndex(1);
    });

    prev.addEventListener("click", () => {
      changeIndex(-1);
    });
  };

  slider();
});
