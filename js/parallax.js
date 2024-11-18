const parallax = document.querySelector(".hero__background");
const moveCoef = 0.3;

window.addEventListener("scroll", scroll);

function scroll() {
  const scrollY = window.scrollY;

  const move = scrollY * moveCoef;

  parallax.style.backgroundPositionY = `${move}px`;
}
