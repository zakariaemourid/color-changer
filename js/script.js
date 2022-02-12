const colors = ["black", "red", "green", "blue"];
const value = document.getElementById("value");
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  var color = getRandomNumber();
  document.body.style.backgroundColor = colors[color];
  value.textContent = colors[color];
  btn.style.backgroundColor = colors[color];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
