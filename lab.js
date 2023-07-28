// JavaScript code for the fade-in and fade-out effects

// Function to fade out element with a given duration
function fadeOut(element, duration) {
  element.style.transition = `opacity ${duration}s ease-in-out`;
  element.style.opacity = 0;
}

// Function to fade in element with a given duration
function fadeIn(element, duration) {
  element.style.transition = `opacity ${duration}s ease-in-out`;
  element.style.opacity = 1;
}

// Get references to the lab1 and lab2 elements
const lab1 = document.getElementById("lab1");
const lab2 = document.getElementById("lab2");

// Add event listener to lab2 for hover
lab2.addEventListener("mouseover", () => {
  fadeIn(lab2, 3); // Fade in lab2 with a duration of 1 second
  fadeOut(lab1, 1); // Fade out lab1 with a duration of 2 seconds
});

// Add event listener to lab1 for hover
lab1.addEventListener("mouseover", () => {
  fadeIn(lab1, 3); // Fade in lab1 with a duration of 1 second
  fadeOut(lab2, 1); // Fade out lab2 with a duration of 2 seconds
});
