// TODO 1: Declare & assign variables pointing to the corresponding element(s)

// statement should be the "statement" div
const statement = document.getElementById("statement");

// optionButtons should be all the elements within the "options" div
const optionButtons = document.querySelectorAll("button");

// explanation should be the "explanation" div
const explanation = document.getElementById("explanation");


// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation

const fact1 = {
  statement: "Which transport layer protocol is the best fit for traffic requiring every packet to be received by the destination, reliably, with nothing lost?",
  answer: "TCP",
  explanation: "TCP is a reliable and connection-oriented protocol that ensures every packet is delivered to the destination.",
  options: ["UDP", "TCP"]
};

/* THIS IS QUESTION 1
const fact2 = {
  statement: "Which transport layer protocol is the best fit for a live multimedia stream?",
  answer: "UDP",
  explanation: "UDP is often used for live multimedia streaming due to its lower latency and reduced overhead.",
  options: ["UDP", "TCP"]
};
*/

// TODO 3: Set the text of the statement element to the fact's statement
statement.textContent = fact1.statement;

// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// disable(button) should set the button element's attribute "disabled" to the value ""
// enable(button) should remove the attribute "disabled" from the button element

// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
// TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element

// TODO 7: Within the event handler function,
// Use a for loop to disable all the option buttons

// TODO 8: Within the event handler function,
// Get the guessed value from the clicked button
// Use a conditional to compare the guess to the fact's answer
// and add the "correct"/"incorrect" class as appropriate
