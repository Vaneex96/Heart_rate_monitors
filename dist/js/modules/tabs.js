const tabs = () => {
  const tabs = document.querySelectorAll(".catalog__tab"),
    catalogContent = document.querySelectorAll(".catalog__content");

  tabs.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

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

export default tabs;
