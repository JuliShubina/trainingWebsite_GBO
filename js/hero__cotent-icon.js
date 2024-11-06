// const arrowDown = document.querySelector(".hero__content-icon");
// console.log(arrowDown);

// arrowDown.addEventListener("click", () => {
//   console.log("click");
//   alert("Clicked!");
//   const element = document.querySelector(".hero__content-icon");

//   element.scrollIntoView({
//     behavior: "smooth",
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const arrowDown = document.querySelector(".hero__content-icon");
  console.log(arrowDown);
  arrowDown.addEventListener("click", () => {
    console.log("click");
    arrowDown.scrollIntoView({
      behavior: "smooth",
    });
  });
});
