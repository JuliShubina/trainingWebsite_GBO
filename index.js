window.addEventListener("scroll", () => {
  const headerBack = document.querySelector(".header-container");
  const heroImage = document.querySelector(".hero-image");
  // heroImage.style.transform = `translateY( ${window.scrollY * 0.5}px)`;

  if (window.scrollY === 0) {
    headerBack.style.background = "none";
  } else {
    headerBack.style.background = "black";
  }
});

const arrowDown = document.querySelector(".icon-arrow-down");

arrowDown.addEventListener("click", () => {
  console.log("click");
  const element = document.querySelector(".icon-arrow-down");

  element.scrollIntoView({
    behavior: "smooth",
  });
});
