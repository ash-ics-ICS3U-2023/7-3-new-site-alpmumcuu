/**
 * This file will get loaded by index.html
 */


// Add an event listener to the toggle button
document.getElementById('toggle-button').addEventListener('click', function() {
  // Toggle the dark mode class
  document.body.classList.toggle('dark-mode');

});
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkMode.matches) {
  document.body.classList.add('dark-mode');
}

  
  // Call the function to animate the text
  animateText();