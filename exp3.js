const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function checkAnswers() {
  // Get user input for the blanks
  const switchValue = document.getElementById("switch").value;
  const minusValue = document.getElementById("minus").value;
  const multiplyValue = document.getElementById("multiply").value;
  const divideValue = document.getElementById("divide").value;

  // Correct answers
  const correctSwitch = "switch";
  const correctMinus = "break;";
  const correctMultiply = "break;";
  const correctDivide = "default:";

  // Check if the user's input matches the correct values
  if (switchValue === correctSwitch &&
      minusValue === correctMinus &&
      multiplyValue === correctMultiply &&
      divideValue === correctDivide) {
    alert("Correct! You can now use the calculator.");
    document.getElementById("calculator").style.display = "block";
    document.getElementById("codeChallenge").style.display = "block";
    document.getElementById("button").style.display = "none";
  } else {
    alert("Incorrect! Please try again.");
  }
}