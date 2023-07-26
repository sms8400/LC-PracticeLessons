const button = document.querySelector("#increaser");
const res = document.querySelector("#result");

button.addEventListener("click", () => {
  res.textContent++
});