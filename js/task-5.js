function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElement = document.body;

const changeColorButton = document.querySelector('.change-color');

const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', (event) => {
  event.preventDefault();

  const newColor = getRandomHexColor();

  bodyElement.style.backgroundColor = newColor;
  
  colorSpan.textContent = newColor;
})