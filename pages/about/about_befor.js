window.addEventListener("scroll", () => {
  const headerBack = document.querySelector(".header-container");
  const heroSection = document.querySelector(".hero-section");
  // console.log(window.scrollY);
  // heroSection.style.transform = `translateY( ${window.scrollY * 0.5}px)`;

  if (window.scrollY === 0) {
    headerBack.style.background = "none";
  } else {
    headerBack.style.background = "black";
  }
});