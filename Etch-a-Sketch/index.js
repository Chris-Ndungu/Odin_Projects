const containerDiv = document.querySelector("#container");
const btn = document.querySelector("#btn");

const squaresDiv = document.createElement("div");

squaresDiv.style.cssText =
  "background: blue; border: 2px solid black; height: 50px; width: 50px";

btn.addEventListener("click", () => {
  containerDiv.appendChild(squaresDiv);
});
