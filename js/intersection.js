const elementToChangeColor = document.querySelector(".info-icon-container");
const elementWithIntersectAll = document.querySelectorAll(".intersection ");

window.addEventListener("scroll", () => {
  const rect1 = elementToChangeColor.getBoundingClientRect();
  for (const elementWithIntersect of elementWithIntersectAll) {
    const rect2 = elementWithIntersect.getBoundingClientRect();

    if (rect1.top <= rect2.bottom && rect1.bottom >= rect2.top && rect1.left <= rect2.right && rect1.right >= rect2.left) {
      elementToChangeColor.style.backgroundColor = " rgba(255, 255, 255, 0.6)";

      break;
    } else {
      elementToChangeColor.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
  }
});

elementToChangeColor.addEventListener("mouseover", () => {
  elementToChangeColor.style.backgroundColor = " rgba(32, 33, 36, 0.2)";
});

elementToChangeColor.addEventListener("mouseout", () => {
  elementToChangeColor.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
});
