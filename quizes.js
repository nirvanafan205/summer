// TODO 1: Declare & assign variables pointing to the corresponding element(s)

// statement should be the "statement" div
const statement = document.getElementById("statement");

// optionButtons should be all the elements within the "options" div
const optionButtons = document.querySelectorAll("#options button");

// explanation should be the "explanation" div
const explanation = document.getElementById("explanation");

// scoreboard
const scoreboard = document.getElementById("score");
let score = 0;

const nextButton = document.getElementById("nextButton");

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation
const facts = [
  {
    statement:
      "Which transport layer protocol is the best fit for traffic requiring every packet to be received by the destination, reliably, with nothing lost?",
    answer: "TCP",
    explanation:
      "TCP is a reliable and connection-oriented protocol that ensures every packet is delivered to the destination.",
    options: ["UDP", "TCP"],
  },

  {
    statement:
      "Which transport layer protocol is the best fit for a live multimedia stream?",
    answer: "UDP",
    explanation:
      "UDP is a connectionless protocol suitable for real-time multimedia streams where some packet loss is acceptable.",
    options: ["UDP", "TCP"],
  },

  {
    statement:
      "What part of a network frame contains an 'ACK#' (acknowledgment number), if acknowledging receipt of a packet?",
    answer: "TCP Protocol Header",
    explanation:
      "The TCP protocol header contains the 'ACK#' field, which is used to acknowledge the receipt of a packet in a network frame.",
    options: [
      "Data Payload",
      "IP Protocol Header",
      "Frame Header",
      "TCP Protocol Header",
      "Frame Trailer",
    ],
  },

  {
    statement:
      "Which part of a network frame contains the HTML document returned by a web server (in response to a page request)? ",
    answer: "Data Payload",
    explanation:
      "The Data Payload contains the actual data being transmitted over the network.",
    options: [
      "Data Payload",
      "IP Protocol Header",
      "Frame Header",
      "TCP Protocol Header",
      "Frame Trailer",
    ],
  },

  {
    statement:
      "Which part of a network frame contains information identifying the destination application (which is listening on the destination computer)?",
    answer: "TCP Protocol Header",
    explanation:
      "The Data Payload contains the actual data being transmitted over the network.",
    options: [
      "Data Payload",
      "IP Protocol Header",
      "Frame Header",
      "TCP Protocol Header",
      "Frame Trailer",
    ],
  },

  {
    statement:
      "Which part of a newwork frame is usually comprised of silenece (neigheter 0s nor 1s)?",
    answer: "Frame Trailer",
    explanation:
      "The Data Payload contains the actual data being transmitted over the network.",
    options: [
      "Data Payload",
      "IP Protocol Header",
      "Frame Header",
      "TCP Protocol Header",
      "Frame Trailer",
    ],
  },

  {
    statement:
      "Which part of a newwork frame is usually comprised of silenece (neigheter 0s nor 1s)?",
    answer: "Frame Header",
    explanation:
      "The Data Payload contains the actual data being transmitted over the network.",
    options: [
      "Data Payload",
      "IP Protocol Header",
      "Frame Header",
      "TCP Protocol Header",
      "Frame Trailer",
    ],
  },

  /*
  {
    statement:
      "An HTTP status code of 304",
    answer: "Frame Header",
    explanation:
      "The Data Payload contains the actual data being transmitted over the network.",
    options: [
      "Data Payload",
      "IP Protocol Header",
      "Frame Header",
      "TCP Protocol Header",
      "Frame Trailer",
    ],
  },
  */
];

let currentFactIndex = 0;
let currentFact = facts[currentFactIndex];

// TODO 3: Set the text of the statement element to the fact's statement

function displayFact() {
  statement.textContent = currentFact.statement;

  // Get the total number of options for the current question
  const totalOptions = currentFact.options.length;

  // Loop through each option button and set its text content and visibility based on the total options
  optionButtons.forEach((button, index) => {
    if (index < totalOptions) {
      // Display the option if it exists for this question
      button.textContent = currentFact.options[index];
      button.style.display = "block"; // Show the button
    } else {
      // Hide the button if it doesn't have a corresponding option for this question
      button.style.display = "none";
    }
  });

  explanation.textContent = "";
}

// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element

// disable(button) should set the button element's attribute "disabled" to the value ""
const disable = (button) => {
  button.setAttribute("disabled", "");
};

// enable(button) should remove the attribute "disabled" from the button element
const enable = (button) => {
  button.removeAttribute("disabled");
};

// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer
function isCorrect(guess) {
  return guess === currentFact.answer;
}

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
// TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element

// Function to handle the click event for the option buttons
// Add a click event listener to each option button using a for loop

for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener("click", function () {
    // Get the selected option
    const selectedOption = this.textContent;

    // Check if the selected option is correct
    const isCorrectAnswer = isCorrect(selectedOption);

    // Display the fact's explanation in the "explanation" element
    explanation.textContent = currentFact.explanation;

    // Disable all option buttons after the user has made a choice
    optionButtons.forEach(disable);

    // Add a class to style the selected option based on correctness
    this.classList.add(isCorrectAnswer ? "correct" : "incorrect");

    // Enable the "Next Question" button
    nextButton.disabled = false;

    if (isCorrectAnswer) {
      score++;
    }

    scoreboard.textContent = score;
  });
}

// TODO 8: Within the event handler function,
// Move to the next fact when the "Next Question" button is clicked
nextButton.addEventListener("click", function () {
  // Move to the next fact/question
  currentFactIndex++;
  if (currentFactIndex < facts.length) {
    currentFact = facts[currentFactIndex];
    displayFact();

    // Enable all option buttons for the new question
    optionButtons.forEach(enable);

    // Remove the "correct" or "incorrect" class from the previous selection
    optionButtons.forEach((button) => {
      button.classList.remove("correct", "incorrect");
    });

    // Disable the "Next Question" button again until the user makes a choice
    nextButton.disabled = true;
  } else {
    // No more facts, you can show a message or redirect to another page
    explanation.textContent = "You have completed all questions!";
    nextButton.disabled = true;
    optionButtons.forEach(disable);
  }
});

// Initialize the first fact/question
displayFact();
