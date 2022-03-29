const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
  const randomColor2 = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
  const randomColor3 = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
  const randomColor4 = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
  document.querySelector('.container').style.backgroundColor = "#" + randomColor;
  document.querySelector('.container2').style.backgroundColor = "#" + randomColor2;
  document.querySelector('.container3').style.backgroundColor = "#" + randomColor3;
  document.querySelector('.container4').style.backgroundColor = "#" + randomColor4;
  color.innerHTML = "#" + randomColor;
  color2.innerHTML = "#" + randomColor2;
  color3.innerHTML = "#" + randomColor3;
  color4.innerHTML = "#" + randomColor4;
}

genNew.addEventListener("click", setBg);
setBg();
