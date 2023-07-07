import slider from "./modules/slider";
import transition from "./modules/transition";
import tabs from "./modules/tabs";
import modal from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  slider({
    container: ".carousel__slider",
    nextArrow: ".next_btn",
    slide: ".pulsometrs",
    prevArrow: ".previus_btn",
    wrapper: ".carousel__wrapper",
    field: ".carousel__slider__inner",
  });

  transition();
  tabs();
  modal();
});
