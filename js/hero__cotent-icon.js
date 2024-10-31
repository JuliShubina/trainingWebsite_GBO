const arrowDown = document.querySelector(".hero__content-icon");

arrowDown.addEventListener("click", () => {
  console.log("click");
  const element = document.querySelector(".hero__content-icon");

  element.scrollIntoView({
    behavior: "smooth",
  });
  // arrowDown.style.display = "none";
});
