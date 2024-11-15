// const popup = document.querySelector('.popup')
const iconClicked = document.querySelector(".info-icon-container");
console.log(iconClicked);

iconClicked.addEventListener("click", () => {
  const popup = document.getElementById("popup");

  popup.classList.toggle("open");
});
