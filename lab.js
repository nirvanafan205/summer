// JavaScript code for the fade-in and fade-out effects

// Function to handle the fade-out effect for lab1
function fadeOutLab1() {
  document.getElementById("lab1").style.opacity = "0";
}

// Function to handle the fade-in effect for lab1
function fadeInLab1() {
  document.getElementById("lab1").style.opacity = "1";
}

// Function to handle the fade-out effect for lab2
function fadeOutLab2() {
  document.getElementById("lab2").style.opacity = "0";
}

// Function to handle the fade-in effect for lab2
function fadeInLab2() {
  document.getElementById("lab2").style.opacity = "1";
}

// Add event listener to lab2 to detect hover
document.getElementById("lab2").addEventListener("mouseenter", function () {
  fadeOutLab1();
  fadeInLab2();
});

// Add event listener to lab1 to detect hover
document.getElementById("lab1").addEventListener("mouseenter", function () {
  fadeInLab1();
  fadeOutLab2();
});
