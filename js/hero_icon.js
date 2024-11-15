const arrowDown = document.querySelector(".hero__content-icon");

arrowDown.addEventListener("click", () => {
  const element = document.querySelector(".hero__content-icon");

  element.scrollIntoView({
    behavior: "smooth",
  });
});
