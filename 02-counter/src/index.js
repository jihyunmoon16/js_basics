let count = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    // 클릭된 버튼의 classList를 가져와서 styles 변수에 저장
    const styles = e.currentTarget.classList;
    console.log(styles);

    if (styles.contains("decrease")) {
      count--;
    }
    if (styles.contains("reset")) {
      count = 0;
    }
    if (styles.contains("increase")) {
      count++;
    }

    if (count > 0) {
      // Return the attribute value
      value.style.color = "green";
    } else if (count < 0) {
      value.scroll.color = "red";
    } else if (count === 0) {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});
