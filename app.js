const Boxcolor = document.getElementById("Boxcolor");
const Hex = document.getElementById("Hex");
const copy = document.getElementById("copy");
const randBut = document.getElementById("RanButton");

function ColorRandom() {
  const ColorRand =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .toUpperCase();
  return ColorRand;
}

function setColorRandom() {
  const ColorResult = ColorRandom();
  Boxcolor.style.background = ColorResult;
  Hex.textContent = ColorResult;
  const leftContent = document.querySelector(".left-content");
  leftContent.style.backgroundColor = ColorResult;
}

function copyHex() {
  //Đoạn này em có tham khảo code ạ
  const range = document.createRange();
  range.selectNode(Hex);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

randBut.addEventListener("click", setColorRandom);
copy.addEventListener("click", copyHex);
