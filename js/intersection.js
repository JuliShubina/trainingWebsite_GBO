const mediaQuery = window.matchMedia("(min-width: 645px)");

function handleMediaQueryChange(e) {
  const elementToChangeColor = document.querySelector(".info-icon-container");
  const elementWithIntersectAll = document.querySelectorAll(".intersection");

  function handleScroll() {
    const rect1 = elementToChangeColor.getBoundingClientRect();
    for (const elementWithIntersect of elementWithIntersectAll) {
      const rect2 = elementWithIntersect.getBoundingClientRect();

      if (rect1.top <= rect2.bottom && rect1.bottom >= rect2.top && rect1.left <= rect2.right && rect1.right >= rect2.left) {
        elementToChangeColor.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        return;
      }
      elementToChangeColor.style.backgroundColor = "rgba(255, 255, 255, 0.6)"; // так уж вышло что цвета я сменила и смысла теперь нет в этой все городухе, но я ее полюбила ))), снесу когда буду рефакторить , но не сейчас =)))
    }
  }

  if (e.matches) {
    window.addEventListener("scroll", handleScroll);
  } else {
    window.removeEventListener("scroll", handleScroll);
    elementToChangeColor.style.backgroundColor = "white";
  }
}

handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener("change", handleMediaQueryChange);
