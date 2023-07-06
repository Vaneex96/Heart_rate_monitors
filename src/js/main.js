// import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
  // const slider2 = () => {
  //   const slides = document.querySelectorAll(".pulsometrs"),
  //     sliderWrapper = document.querySelector(".carousel__slider__inner"),
  //     prev = document.querySelector(".previus_btn"),
  //     next = document.querySelector(".next_btn");

  //   slides.forEach((item) => {
  //     item.style.display = "none";
  //   });

  //   let slideIndex = 0;
  //   slider(slideIndex);

  //   function slider(i) {
  //     if (i < 0) {
  //       slideIndex = slides.length - 1;
  //     }
  //     if (i > slides.length - 1) {
  //       slideIndex = 0;
  //     }

  //     slides.forEach((item) => {
  //       item.style.display = "none";
  //       item.classList.add("faded");
  //     });
  //     slides[slideIndex].style.display = "block";
  //   }

  //   function changeIndex(n) {
  //     slider((slideIndex += n));
  //     console.log(slideIndex);
  //   }

  //   next.addEventListener("click", () => {
  //     changeIndex(1);
  //   });

  //   prev.addEventListener("click", () => {
  //     changeIndex(-1);
  //   });
  // };

  // slider2();
  ///////////////////////////////////////
  function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCouner,
    currentCounter,
    wrapper,
    field,
  }) {
    const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      prev = document.querySelector(prevArrow),
      next = document.querySelector(nextArrow),
      slidesWrapper = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
      width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    // if (slides.length < 10) {
    //   total.textContent = `0${slides.length}`;
    //   current.textContent = `0${slideIndex}`;
    // } else {
    //   total.textContent = slides.length;
    //   current.textContent = slideIndex;
    // }

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";

    slidesWrapper.style.overflow = "hidden";

    slides.forEach((slide) => {
      slide.style.width = width;
    });

    slider.style.position = "relative";

    //   const indicators = document.createElement("ol"),
    //     dots = [];

    //   indicators.classList.add("carousel-indicators");
    //   indicators.style.cssText = `
    //     position: absolute;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    //     z-index: 15;
    //     display: flex;
    //     justify-content: center;
    //     margin-right: 15%;
    //     margin-left: 15%;
    //     list-style: none;
    // `;
    //   slider.append(indicators);

    // for (let i = 0; i < slides.length; i++) {
    //   const dot = document.createElement("li");
    //   dot.setAttribute("data-slide-to", i + 1);
    //   dot.style.cssText = `
    //     box-sizing: content-box;
    //     flex: 0 1 auto;
    //     width: 30px;
    //     height: 6px;
    //     margin-right: 3px;
    //     margin-left: 3px;
    //     cursor: pointer;
    //     background-color: #fff;
    //     background-clip: padding-box;
    //     border-top: 10px solid transparent;
    //     border-bottom: 10px solid transparent;
    //     opacity: .5;
    //     transition: opacity .6s ease;
    // `;
    //   indicators.append(dot);
    //   dots.push(dot);
    // }

    function deleteNotDigits(str) {
      return +str.replace(/\D/g, "");
    }

    next.addEventListener("click", () => {
      if (offset == deleteNotDigits(width) * (slides.length - 1)) {
        offset = 0;
      } else {
        offset += deleteNotDigits(width);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length) {
        slideIndex = 1;
      } else {
        slideIndex++;
      }

      // if (slides.length < 10) {
      //   current.textContent = `0${slideIndex}`;
      // } else {
      //   current.textContent = slideIndex;
      // }

      // dots.forEach((dot) => (dot.style.opacity = ".5"));
      // dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener("click", (e) => {
      if (offset == 0) {
        offset = deleteNotDigits(width) * (slides.length - 1);
      } else {
        offset -= deleteNotDigits(width);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 1) {
        slideIndex = slides.length;
      } else {
        slideIndex--;
      }

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      // dots.forEach((dot) => (dot.style.opacity = ".5"));
      // dots[slideIndex - 1].style.opacity = 1;
    });

    // dots.forEach((dot) => {
    //   dot.addEventListener("click", (e) => {
    //     const slideTo = e.target.getAttribute("data-slide-to");

    //     slideIndex = slideTo;
    //     offset = deleteNotDigits(width) * (slideTo - 1);

    //     slidesField.style.transform = `translateX(-${offset}px)`;

    //     if (slides.length < 10) {
    //       current.textContent = `0${slideIndex}`;
    //     } else {
    //       current.textContent = slideIndex;
    //     }

    //     dots.forEach((dot) => (dot.style.opacity = ".5"));
    //     dots[slideIndex - 1].style.opacity = 1;
    //   });
    // });
  }

  slider({
    container: ".carousel__slider",
    nextArrow: ".next_btn",
    slide: ".pulsometrs",
    prevArrow: ".previus_btn",
    wrapper: ".carousel__wrapper",
    field: ".carousel__slider__inner",
  });

  const transition = () => {
    const more = document.querySelectorAll(".catalog-item__link"),
      back = document.querySelectorAll(".catalog-item__link__back"),
      content = document.querySelectorAll(".catalog-item__content"),
      list = document.querySelectorAll(".catalog-item__list");

    more.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        content[i].classList.remove("catalog-item__content_active");
        list[i].classList.add("catalog-item__list_active");
      });
    });

    back.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        list[i].classList.remove("catalog-item__list_active");
        content[i].classList.add("catalog-item__content_active");
      });
    });
  };

  transition();

  const tabs = () => {
    const tabs = document.querySelectorAll(".catalog__tab"),
      catalogContent = document.querySelectorAll(".catalog__content");

    tabs.forEach((item, i) => {
      item.addEventListener("click", (e) => {
        // console.log("lox");
        e.preventDefault();
        // const target = e.target;
        // console.log(target);
        tabs.forEach((item) => {
          item.classList.remove("catalog__tab_active");
        });

        tabs[i].classList.add("catalog__tab_active");

        catalogContent.forEach((item) => {
          item.classList.remove("catalog__content_active");
        });
        catalogContent[i].classList.add("catalog__content_active");
      });
    });
  };
  tabs();

  const modal = () => {
    const buttonsConsalt = document.querySelectorAll("[data-modal]"),
      buttonOrder = document.querySelectorAll(".button_mini"),
      consaltModal = document.getElementById("consultation"),
      buttonClose = document.querySelector(".modal__close"),
      orderModal = document.querySelector("#order"),
      thanksModal = document.querySelector("#thanks"),
      overlay = document.querySelector(".overlay"),
      buttonsSubmit = document.querySelectorAll(".button_submit");

    buttonsConsalt.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = e.target;
        consaltModal.style.display = "block";
        overlay.style.display = "block";
      });
    });

    buttonOrder.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        consaltModal.style.display = "block";
        overlay.style.display = "block";
      });
    });

    function close(button) {
      button.addEventListener("click", (e) => {
        const target = e.target;
        if (target === overlay || target === buttonClose) {
          overlay.style.display = "none";
          consaltModal.style.display = "none";
          consaltModal.style.display = "none";
        }
      });
    }
    close(buttonClose);
    close(overlay);
  };

  modal();
});
