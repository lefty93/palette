const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
  const randomColor3 = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
  const randomColor4 = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
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

function takeScreen() {
  const captureElement = document.querySelector('#capture')
  html2canvas(captureElement)
    .then(canvas => {
      canvas.style.display = 'none'
      document.body.appendChild(canvas)
      return canvas
    })
    .then(canvas => {
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      const a = document.createElement('a')
      a.setAttribute('download', 'my-image.png')
      a.setAttribute('href', image)
      a.click()
      canvas.remove()
    });
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', takeScreen)
