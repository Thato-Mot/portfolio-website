const cursor = document.getElementById('cursor');
const textElement = document.getElementById('name');

const textToType = "Thatohatsi Motlhamme";
let index = 0;

function typeText() {
  if (index < textToType.length) {
    textElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, 10); 
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeText();
});
document.addEventListener('mousemove', (e) => {
  const cursorWidth = cursor.offsetWidth / 2;
  const cursorHeight = cursor.offsetHeight / 2;

  let x = e.pageX - cursorWidth;
  let y = e.pageY - cursorHeight;

  // Ensure cursor does not go beyond the edges
  x = Math.max(-cursorWidth, Math.min(x, window.innerWidth - cursorWidth));
  y = Math.max(-cursorHeight, Math.min(y, window.innerHeight - cursorHeight));
  
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});
