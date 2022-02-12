const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const value = document.getElementById("value");
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[getRandomNumber()];
  }
  document.body.style.backgroundColor = color;
  value.textContent = color;
  btn.style.backgroundColor = color;
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
