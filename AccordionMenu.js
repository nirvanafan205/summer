// Get the menu button and dropdown content
var menuButton = document.querySelector('.dropdown-button');
var dropdownContent = document.querySelector('.dropdown-content');

// Add a click event listener to the menu button
menuButton.addEventListener('click', function(event) {
  event.stopPropagation(); // Stop the event from propagating to the accordion headers

  // Toggle the active class on the menu button
  this.classList.toggle('active');

  // Toggle the display of the dropdown content based on its current state
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

  // Close the sections if the dropdown menu is closed
  if (dropdownContent.style.display === 'none') {
    closeAllSections();
  }
});

// Close the dropdown when clicking outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-button')) {
    // Hide the dropdown content if it's visible
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      menuButton.classList.remove('active');

      // Close the sections when the dropdown menu is closed
      closeAllSections();
    }
  }
});

// Get all the accordion headers
var accordionHeaders = document.querySelectorAll('.accordion-header');

// Loop through each accordion header
accordionHeaders.forEach(function(header) {
  // Add a click event listener to each header
  header.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop the event from propagating to the menu button

    // Toggle the active class on the clicked header
    this.classList.toggle('active-section');

    // Get the accordion content associated with the clicked header
    var accordionContent = this.nextElementSibling;

    // Toggle the display of the accordion content based on its current state
    accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';

    // Close other open sections if any
    closeOtherSections(header);
  });
});

// Function to close other sections
function closeOtherSections(currentHeader) {
  // Get all the accordion headers except the current one
  var otherHeaders = document.querySelectorAll('.accordion-header:not(.active-section)');

  // Loop through each header and close its associated content
  otherHeaders.forEach(function(header) {
    var content = header.nextElementSibling;
    content.style.display = 'none';
  });
}

// Function to close all sections
function closeAllSections() {
  // Get all the accordion headers
  var allHeaders = document.querySelectorAll('.accordion-header');

  // Loop through each header and close its associated content
  allHeaders.forEach(function(header) {
    var content = header.nextElementSibling;
    content.style.display = 'none';
    header.classList.remove('active-section');
  });
}

// Close all accordion sections on page load
window.addEventListener('load', function() {
  var accordionContents = document.querySelectorAll('.accordion-content');
  accordionContents.forEach(function(content) {
    content.style.display = 'none';
  });
});

// Add click event listener to each accordion content
var accordionContents = document.querySelectorAll('.accordion-content');
accordionContents.forEach(function(content) {
  content.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});
