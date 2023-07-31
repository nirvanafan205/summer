// TODO 1: Declare & assign variables pointing to the corresponding element(s)

// statement should be the "statement" div
const statement = document.getElementById("statement");

// optionButtons should be all the elements within the "options" div
const optionButtons = document.querySelectorAll("#options button");

// explanation should be the "explanation" div
const explanation = document.getElementById("explanation");

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation

const fact = {
  statement:
    "Which transport layer protocol is the best fit for traffic requiring every packet to be received by the destination, reliably, with nothing lost?",
  answer: "TCP",
  explanation:
    "TCP is a reliable and connection-oriented protocol that ensures every packet is delivered to the destination.",
  options: ["UDP", "TCP"],
};

// TODO 3: Set the text of the statement element to the fact's statement
statement.textContent = fact.statement;

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
  return guess === fact.answer;
}

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
// TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element

// Function to handle the click event for the option buttons
// Add a click event listener to each option button using a for loop
for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener("click", function () {
    // Get the selected option
    const selectedOption = this.value;

    // Check if the selected option is correct
    const isCorrectAnswer = isCorrect(selectedOption);

    // Display the fact's explanation in the "explanation" element
    explanation.textContent = fact.explanation;

    // Disable all option buttons after the user has made a choice
    optionButtons.forEach(disable);

    // Add a class to style the selected option based on correctness
    this.classList.add(isCorrectAnswer ? "correct" : "incorrect");
  });
}

// TODO 8: Within the event handler function,
// Get the guessed value from the clicked button
// Use a conditional to compare the guess to the fact's answer
// and add the "correct"/"incorrect" class as appropriate
