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

const arrowDownAll = document.querySelectorAll(".icon-arrow-down");

arrowDownAll.forEach((arrowDown) => {
  arrowDown.addEventListener("click", () => {
    // const id = arrowDown.id;
    const targetId = arrowDown.dataset.target;
    const hiddenText = document.getElementById(targetId);

    hiddenText.classList.toggle("expanded");
  });
});
