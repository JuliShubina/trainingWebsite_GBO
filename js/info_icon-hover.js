const elementHover = document.querySelector(".info-icon-container");
const originalBackgroundColor = elementHover.style.backgroundColor;
console.log(originalBackgroundColor);
elementHover.addEventListener("mouseover", () => {
  elementHover.style.backgroundColor = " rgba(32, 33, 36, 0.2)";
});

elementHover.addEventListener("mouseout", () => {
  elementHover.style.backgroundColor = originalBackgroundColor;
});
