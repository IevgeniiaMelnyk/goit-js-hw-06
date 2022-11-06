function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  color: document.querySelector('.color')
};

const onButtonClickChangeColor = () => {
  let randomHexColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomHexColor;
  refs.color.textContent = `${randomHexColor}`;
}

refs.button.addEventListener('click', onButtonClickChangeColor)
