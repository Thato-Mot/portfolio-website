// Array of theme names
// Array of theme names, including the new themes
// Array of theme names, including the new colorful themes
const themes = [
  'burgundy','mint', 'blue', 'light', 
  'teal', 'purple', 'green', 'pink', 
  'orange', 'fresh-green', 
  'red', 'electric-blue', 'vibrant-purple', 
  'yellow', 'cyan', 'lively-green'
];

let currentIndex = 0; // Start with the first theme

// Function to switch to the next theme
function switchTheme() {
  // Move to the next theme in the array
  currentIndex = (currentIndex + 1) % themes.length;
  const newTheme = themes[currentIndex];
  
  // Apply the new theme
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); // Save the new theme to localStorage
}

// Load the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'burgundy'; // Default to 'mint'
  currentIndex = themes.indexOf(savedTheme); // Set the current index based on saved theme
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Add event listener to the theme switch button
  const themeSwitcherButton = document.getElementById('theme-switcher');
  if (themeSwitcherButton) {
    themeSwitcherButton.addEventListener('click', switchTheme);
  }
});
