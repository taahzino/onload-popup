window.onload = function handler() {
  const TPREFIX_POPUP_WRAPPER = document.querySelector(
    ".tprefix_popup_wrapper"
  );
  const TPREFIX_POPUP_CLOSE = document.querySelector(".tprefix_popup_close");

  const TPREFIX_POPUP_DURATION = 5000;

  function tprefix_hidePopup() {
    TPREFIX_POPUP_WRAPPER.classList.add("hide");
  }

  setTimeout(tprefix_hidePopup, TPREFIX_POPUP_DURATION);

  TPREFIX_POPUP_CLOSE.addEventListener("click", function handler() {
    tprefix_hidePopup();
  });
};
