const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // random color
  let hexColor = "#";

  // #0B4C2F
  // hex color는 6자리 숫자와 영문 조합이라서 반복문을 6번 돌림.
  for (let i = 0; i < 6; i++) {
    const number = getRandomNumber();
    hexColor += hex[number];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * hex.length);
  return randomNumber;
};
