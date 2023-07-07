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
      orderModal.style.display = "block";
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

export default modal;
