/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modal = () => {
  const buttonsConsalt = document.querySelectorAll("[data-modal]"),
    buttonOrder = document.querySelectorAll(".button_mini"),
    consaltModal = document.getElementById("consultation"),
    buttonClose = document.querySelector(".modal__close"),
    orderModal = document.querySelector("#order"),
    thanksModal = document.querySelector("#thanks"),
    overlay = document.querySelector(".overlay"),
    buttonsSubmit = document.querySelectorAll(".button_submit");
  buttonsConsalt.forEach(btn => {
    btn.addEventListener("click", e => {
      const target = e.target;
      consaltModal.style.display = "block";
      overlay.style.display = "block";
    });
  });
  buttonOrder.forEach(btn => {
    btn.addEventListener("click", e => {
      orderModal.style.display = "block";
      overlay.style.display = "block";
    });
  });
  function close(button) {
    button.addEventListener("click", e => {
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
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider = _ref => {
  let {
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCouner,
    currentCounter,
    wrapper,
    field
  } = _ref;
  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1;
  let offset = 0;
  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";
  slidesWrapper.style.overflow = "hidden";
  slides.forEach(slide => {
    slide.style.width = width;
  });
  slider.style.position = "relative";
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
  });
  prev.addEventListener("click", e => {
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
  });
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const tabs = () => {
  const tabs = document.querySelectorAll(".catalog__tab"),
    catalogContent = document.querySelectorAll(".catalog__content");
  tabs.forEach((item, i) => {
    item.addEventListener("click", e => {
      e.preventDefault();
      tabs.forEach(item => {
        item.classList.remove("catalog__tab_active");
      });
      tabs[i].classList.add("catalog__tab_active");
      catalogContent.forEach(item => {
        item.classList.remove("catalog__content_active");
      });
      catalogContent[i].classList.add("catalog__content_active");
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/transition.js":
/*!**************************************!*\
  !*** ./src/js/modules/transition.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const transition = () => {
  const more = document.querySelectorAll(".catalog-item__link"),
    back = document.querySelectorAll(".catalog-item__link__back"),
    content = document.querySelectorAll(".catalog-item__content"),
    list = document.querySelectorAll(".catalog-item__list");
  more.forEach((item, i) => {
    item.addEventListener("click", e => {
      e.preventDefault();
      content[i].classList.remove("catalog-item__content_active");
      list[i].classList.add("catalog-item__list_active");
    });
  });
  back.forEach((item, i) => {
    item.addEventListener("click", e => {
      e.preventDefault();
      list[i].classList.remove("catalog-item__list_active");
      content[i].classList.add("catalog-item__content_active");
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (transition);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/transition */ "./src/js/modules/transition.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");




window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])({
    container: ".carousel__slider",
    nextArrow: ".next_btn",
    slide: ".pulsometrs",
    prevArrow: ".previus_btn",
    wrapper: ".carousel__wrapper",
    field: ".carousel__slider__inner"
  });
  (0,_modules_transition__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map