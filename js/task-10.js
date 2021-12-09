function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let size = 30;

const createBoxes = (amount) => {
  let string = "";

  // if (amount === "" || amount < 0 || amount > 100) {
  //   console.log("ты редиска", amount);
  //   return;
  // }

  for (let i = 0; i < amount; i += 1) {
    string += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;
    size += 10;
  }

  refs.boxes.insertAdjacentHTML("beforeend", string);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
  size = 30;
};

const fn = () => createBoxes(parseInt(refs.input.value));

refs.btnCreate.addEventListener("click", fn);
refs.btnDestroy.addEventListener("click", destroyBoxes);
