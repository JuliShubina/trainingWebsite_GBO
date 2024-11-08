// window.addEventListener("scroll", () => {
//   const windowScrollTop = window.scrollY;
//   console.log(windowScrollTop);
// });

const arrowAll = document.querySelectorAll(".icon-arrow");

arrowAll.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const targetId = arrow.dataset.target;
    const arrowClass = arrow.classList.value;
    console.log(e);

    const textElement = document.getElementById(targetId);
    const currentDisplay = getComputedStyle(textElement).display;

    if (currentDisplay === "none") {
      textElement.style.display = "block";
      arrow.classList.replace("fa-chevron-down", "fa-chevron-up");

      // const heightCard = textElement.getBoundingClientRect().height;
      // console.log(heightCard);

      const textElementTop = arrow.getBoundingClientRect().y + window.scrollY - 56;
      console.log(window.scrollY);

      window.scrollTo({
        top: textElementTop,
        behavior: "smooth",
      });

      // const rect2 = textElement.getBoundingClientRect().y;
      // console.log(rect2);
    } else {
      textElement.style.display = "none";
      arrow.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
});
