
const btnChange = document.querySelector(".change-color");
const body = document.querySelector(".widget");
const nameColor = document.querySelector(".color");

btnChange.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();

  nameColor.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

