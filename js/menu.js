(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-btn_open"),
    closeMenuBtn: document.querySelector(".header-btn_close"),
    menu: document.querySelector(".header-mob_container"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
  }
})();