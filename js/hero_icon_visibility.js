const mediaQueryLandscape = window.matchMedia("(max-height: 500px) and (orientation: landscape)");

mediaQueryLandscape.addEventListener("change", handleOrientationChange);
const heroIcon = document.querySelector(".hero__content-icon");
const originalHeroIconVisibility = heroIcon.style.visibility;

function handleOrientationChange(e) {
  if (e.matches) {
    heroIcon.style.visibility = "visible";
  } else {
    heroIcon.style.visibility = originalHeroIconVisibility;
  }
}
handleOrientationChange(mediaQueryLandscape);
