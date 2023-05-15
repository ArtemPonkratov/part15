// N1

document.querySelector(".box").onclick = function () {
  document.querySelector(".box").style.width = "115px";
  document.querySelector(".box").style.height = "115px";
};

// 2

document.querySelector(".box").ondblclick = function (event) {
  let test = event.target.textContent;
  console.log(test);
};

// 3

document.querySelector(".img1").onclick = function () {
  document.querySelector(".img1").src =
    "https://cdn-icons-png.flaticon.com/512/10445/10445150.png";
};

// 4

function showCharCode() {
  let charCode = 65;
  let charCodeElement = document.getElementById("char-code");
  charCodeElement.textContent = charCode;

  return charCode;
}

// 5

function checkInput(input) {
  return isNaN(input);
}

console.log(checkInput("abc"));
console.log(checkInput("123"));
console.log(checkInput("a1b2"));
