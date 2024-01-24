let currentIndex = 0;
const backgroundImages = [
  'url("images/background1.jpg")',
  'url("images/background2.jpg")',
  'url("images/background3.jpg")',
  'url("images/background4.jpg")',
  'url("images/background5.jpg")',
  'url("images/background6.jpg")'
];

function changeBackground(direction) {
  const imageBox = document.querySelector('.image-box');

  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
  } else if (direction === 'back') {
    currentIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
  }

  imageBox.style.backgroundImage = backgroundImages[currentIndex];
}
