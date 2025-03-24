const celsiusInput = document.getElementById('celsius-input');
const convertButton = document.getElementById('convert-button');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit');
const feedbackElement = document.getElementById('feedback');
const inputContainer = document.getElementById('input-container');

// Correct answers
const correctAnswers = {
  printf: 'printf',
  scanf: 'scanf',
  asterisk: '*',
  slash: '/',
  add: '+'
};

let attempts = 0;

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

submitButton.addEventListener('click', () => {
  attempts++;
  let isCorrect = true;

  // Check user inputs against correct answers
  for (const key in correctAnswers) {
    const userInput = document.getElementById(key).value.trim(); // Get user input
    if (userInput !== correctAnswers[key]) {
      isCorrect = false;
      break;
    }
  }

  if (isCorrect) {
    feedbackElement.textContent = "Correct! You can now use the simulator.";
    feedbackElement.className = 'success';
    inputContainer.style.display = 'block'; // Show the temperature converter
    document.getElementById("submit").style.display = "none";
  } else {
    feedbackElement.textContent = "Incorrect. Please try again.";
    feedbackElement.className = 'feedback';
    
    if (attempts >= 3) {
      feedbackElement.textContent += " You've exceeded the maximum attempts.";
      submitButton.disabled = true; // Disable submit button after 3 attempts
    }
  }
});

convertButton.addEventListener('click', () => {
  let celsius = parseFloat(celsiusInput.value);
  if (!isNaN(celsius)) {
    let fahrenheit = celsiusToFahrenheit(celsius);
    resultElement.textContent = `${celsius}°C is equal to ${fahrenheit}°F`;
  } else {
    resultElement.textContent = 'Please enter a valid number.';
  }
});