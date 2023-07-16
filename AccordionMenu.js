// Get the menu button and dropdown content
var menuButton = document.querySelector(".dropdown-button");
var dropdownContent = document.querySelector(".dropdown-content");

// Variable to store the currently active section
var activeSection = null;

// Add a click event listener to the menu button
menuButton.addEventListener("click", function (event) {
  event.stopPropagation(); // Stop the event from propagating to the accordion headers

  // Toggle the active class on the menu button
  this.classList.toggle("active");

  // Toggle the display of the dropdown content based on its current state
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";

  // Close the previously active section if a new section is being opened
  if (activeSection && activeSection !== this) {
    closeSection(activeSection);
  }
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown-button")) {
    // Hide the dropdown content if it's visible
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      menuButton.classList.remove("active");

      // Close the previously active section if the dropdown menu is closed
      if (activeSection) {
        closeSection(activeSection);
      }
    }
  }
});

// Get all the accordion headers
var accordionHeaders = document.querySelectorAll(".accordion-header");

// Loop through each accordion header
accordionHeaders.forEach(function (header) {
  // Add a click event listener to each header
  header.addEventListener("click", function (event) {
    event.stopPropagation(); // Stop the event from propagating to the menu button

    // Toggle the active class on the clicked header
    this.classList.toggle("active-section");

    // Get the accordion content associated with the clicked header
    var accordionContent = this.nextElementSibling;

    // Toggle the display of the accordion content based on its current state
    accordionContent.style.display =
      accordionContent.style.display === "block" ? "none" : "block";

    // Close the previously active section if a new section is being opened
    if (activeSection && activeSection !== this) {
      closeSection(activeSection);
    }

    // Update the active section
    activeSection = this;
  });
});

// Function to close a specific section
function closeSection(section) {
  var content = section.nextElementSibling;
  content.style.display = "none";
  section.classList.remove("active-section");
}

// Close all accordion sections on page load
window.addEventListener("load", function () {
  var accordionContents = document.querySelectorAll(".accordion-content");
  accordionContents.forEach(function (content) {
    content.style.display = "none";
  });
});

// Add click event listener to each accordion content
var accordionContents = document.querySelectorAll(".accordion-content");
accordionContents.forEach(function (content) {
  content.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
