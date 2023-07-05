const slider = () => {
  const slides = document.querySelectorAll(".pulsometrs"),
    slider = document.querySelector(".carousel__slider__inner"),
    prev = document.querySelector(".previus_btn"),
    next = document.querySelector(".next_btn");

  function showSlide(slide) {
    slide.style.display = "block";
  }

  function hideSlide(slide) {
    slide.style.display = "none";
  }

  slides.forEach((item) => {
    hideSlide(item);
  });

  next.addEventListener("click", () => {
    console.log("fuck you");
  });
};

export default slider;
