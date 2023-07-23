// Get the menu button and dropdown content
// selects HTML element with the class "dropdown-button"
// assigns it to menuButton.
var menuButton = document.querySelector(".dropdown-button");

// selects HTML element with the class "dropdown-content"
// assins it to the variable "dropdownContent"
var dropdownContent = document.querySelector(".dropdown-content");

// initializes variable and sets it to null
// keeps track of the currently active accordion section (the one that is expanded)
var activeSection = null;

// Add a click event listener to the menu button
// when menu button is clicked, the function specified inside will be executed
menuButton.addEventListener("click", function (event) {
  // Stop the event from propagating to the accordion headers
  // prevents the click event on the menu button from triggering the click even on the accordion headers.
  // handles the dropdown menu interaction separately from other el.ements on the page
  // stops other click event listeners from being triggered
  event.stopPropagation();

  // Toggle the active class on the menu button
  // shows whether the dropdown menu is currently open or closed
  this.classList.toggle("active");

  // Toggle the display of the dropdown content based on its current state
  // if currently displayed, it will be hidden by the setting the display property to "none"
  // if it is hidden, it will be displayed by setting the display property to block
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block"; // ternary conditional operator

  // Close the previously active section if a new section is being opened
  // checks if there is a previously active section
  // checks current "menuButton" is not the smae as the previously active one
  // if both conditions are met, closeSection function closes the prebiously active section
  if (activeSection && activeSection !== this) {
    closeSection(activeSection);
  }
});

// uses window object to set up a click event listener
// the event listener closes the dropdown menu if the user clicks outside of it
window.addEventListener("click", function (event) {
  // checks if the element that triggered the click event "event.target" doesn't match the selector ".dropdown-button"
  // checks if the click did not happened on the dropdown button itself
  if (!event.target.matches(".dropdown-button")) {
    // if true, click happened outside the dropdown button
    // Hide the dropdown content if it's visible
    // checks if the dropdown content is visible. checks the display property of "dropdownContent" is set to "block"
    if (dropdownContent.style.display === "block") {
      // if content is visible, it menas the dropdown menu is open
      dropdownContent.style.display = "none";

      // closes the dropdown menu by hiding the "dropdownContent"
      // and remves the "active" class from the menu button
      menuButton.classList.remove("active");

      // Close the previously active section if the dropdown menu is closed
      // if the dropdown menu is closed, there is an active section
      // means the menu was closed
      // and that the code should close teh active accordion section
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
    // indicates whether an accordion section is currently open or closed
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
    // stores currently active accordion section
    activeSection = this;
  });
});

// takes a section as an argument
// Function to close a specific section
// gudes uts associated content and removing the "action-section" class from the head
function closeSection(section) {
  // gets next sibling elment of the section
  var content = section.nextElementSibling; //nextElementSibling returns elemeent node immediately following the specified element in the DOM tree

  // hides accordion content by setting display css property to "non"
  // allows it to not be visible on the web page
  content.style.display = "none";

  // removes from accordion header element to show that section is no longer open
  section.classList.remove("active-section");

  /* 
     gets associated accordion centent element using the "section.nextElementSibling"
     hides the accordion content by setting its display property to none
     removes active-selection class form the accordion header element
     to indicate that the section is no longer open
  */
}

// Close all accordion sections on page load
// ensures that the code inside the function will run only after all the elments of the page have been fully loaded
window.addEventListener("load", function () {
  // retrieves all elements with the class name ".accordion-content" using the 'document.querySelectorAll' method
  // the querySelector then returns a NodeList cointaining all the elemens that match the CSS selector
  var accordionContents = document.querySelectorAll(".accordion-content");

  // forEach method is called on the Nodelist
  // this allows iteration oever each elmeent in the NodeList
  accordionContents.forEach(function (content) {
    // inside the forEach loop, each element in the class
    // the display property will be set to none
    // this will hide all the accordion contents when the page finishes loading
    content.style.display = "none";
  });

  /*
      It waits for the entire page and resources to finish loading
      After the page is loaded, it retrieves all elements
      Finally, it'll iterate oever each of the elements and hides them

      This allows the accordion is initially hidden when the page loads
  */
});

// Add click event listener to each accordion content
// prevents to stop the click event from propagating further
// prevents the click on an accordion content from closing the dropdown menu or triggering other click events
var accordionContents = document.querySelectorAll(".accordion-content");
accordionContents.forEach(function (content) {
  content.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

/*
    sets up a dropdown menu and creates an accordion functionaly for a list of headers
    and their corresponding content. When the menu button is clicked, it toggles the visiblity of 
    the dropdown content and manages the opening and closing of accordion sections while 
    ensuring that only one section is opened at a time
*/
