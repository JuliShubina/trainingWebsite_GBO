const arrowAll = document.querySelectorAll(".icon-arrow");

arrowAll.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    console.log(arrow);
    const targetId = arrow.dataset.target;
    const arrowClass = arrow.classList.value;
    console.log(arrowClass);
    console.log(targetId);
    const textElement = document.getElementById(targetId);
    const currentDisplay = getComputedStyle(textElement).display;

    if (currentDisplay === "none") {
      textElement.style.display = "block";
      arrow.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      textElement.style.display = "none";
      arrow.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
});
