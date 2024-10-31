window.addEventListener("scroll", () => {
  const headerBack = document.querySelector(".header");
  const heroImage = document.querySelector(".hero__background");
  // heroImage.style.transform = `translateY( ${window.scrollY * 0.5}px)`;

  if (window.scrollY === 0) {
    headerBack.style.background = "none";
  } else {
    headerBack.style.background = "black";
  }
});
