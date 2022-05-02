const colors = ["green", "red", "rgba(133, 120, 200)", "#f15035"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // getRandomNumber() 함수의 리턴값을 randomNumber 변수에 저장
  const randomNumber = getRandomNumber();

  // Set a background color for a document.
  // 만약에, specific <div> element에 background color를 주고 싶다면,
  // document.getElementById("myDiv").style.backgroundColor = "lightblue";
  document.body.style.backgroundColor = colors[randomNumber]; // colors배열의 randomNumber번째 인덱스 칼라로 지정함.
  document.textContent = colors[randomNumber]; // textContent도 랜덤으로 색상 변경.
});

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  return randomNumber;
};
