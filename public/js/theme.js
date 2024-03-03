document.querySelectorAll(".toggler").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll(".day").forEach((element) => {
      element.classList.toggle("toggled");
    });
  });
});
