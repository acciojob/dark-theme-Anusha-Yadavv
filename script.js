//your code here
// Function to swap between day and night themes
function swapTheme() {
  const appElement = document.getElementById("app");
  const swapButton = document.getElementById("swap");

  // Toggle between day and night classes for #app
  appElement.classList.toggle("day");
  appElement.classList.toggle("night");

  // Toggle between day and night classes for #swap
  swapButton.classList.toggle("button_day");
  swapButton.classList.toggle("button_night");
}

// Attach the swapTheme function to the button click event
document.getElementById("swap").addEventListener("click", swapTheme);

