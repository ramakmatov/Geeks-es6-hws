//ДЗ-1

const counterElement = document.getElementById('counter');
const incrementBtn = document.querySelector('#incrementBtn');
const decrementBtn = document.querySelector('#decrementBtn');

let counterValue = 0;

const updateCounter = () => {
  counterElement.textContent = counterValue;

  counterElement.classList.remove('green', 'red');
  if (counterValue > 0) {
    counterElement.classList.add('green');
  } else if (counterValue < 0) {
    counterElement.classList.add('red');
  }
};

const increment = () => {
  counterValue++;
  updateCounter();
};

const decrement = () => {
  if (counterValue > 0) {
    counterValue--;
    updateCounter();
  }
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

// ДЗ-2
const textElements = document.getElementsByClassName('text');
const btnElements = document.getElementsByClassName('btn');

const updateText = () => {
  const inputValue = prompt('Введите текст');
  if (inputValue !== null) {
    Array.from(textElements).forEach((element) => {
      element.textContent = inputValue;
    });
  }
};

const handleClick = () => {
  updateText();
};

Array.from(btnElements).forEach((element) => {
  element.addEventListener('click', handleClick);
});

// ДЗ-3
// const lights = document.getElementsByClassName('light');

// const updateTrafficLight = (color) => {
//   Array.from(lights).forEach((light) => {
//     light.classList.remove('red', 'yellow', 'green');
//   });

//   if (color === 'Красный') {
//     lights[0].classList.add('red');
//     alert('STOP');
//   } else if (color === 'Зеленый') {
//     lights[2].classList.add('green');
//     alert('GO');
//   }
// };

// const handleClick = () => {
//   const inputValue = prompt('Введите цвет светофора: "Красный" или "Зеленый"');
//   if (inputValue !== null) {
//     updateTrafficLight(inputValue);
//   }
// };

// window.addEventListener('DOMContentLoaded', () => {
//   handleClick();
// });
