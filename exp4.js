function checkCode() {
    const zeroInput = document.getElementById("zero").value;
    const flagInput = document.getElementById("flag").value;
    const forInput = document.getElementById("for").value;
    const breakInput = document.getElementById("break").value;
    const codeResultDiv = document.getElementById("codeResult");

    // Correct values
    const correctZero = "0";
    const correctFlag = "flag";
    const correctFor = "for";
    const correctBreak = "break";

    if (zeroInput === correctZero && flagInput === correctFlag && forInput === correctFor && breakInput === correctBreak) {
        codeResultDiv.textContent = "Correct! You can now use the prime number simulator.";
        codeResultDiv.style.color = "green";
        document.getElementById("primeChecker").style.display = "block"; // Show the prime checker simulator
        document.getElementById("button").style.display = "none";
    } else {
        codeResultDiv.textContent = "Incorrect, please try again!";
        codeResultDiv.style.color = "red";
        document.getElementById("primeChecker").style.display = "none"; // Hide the prime checker simulator
    }
}

function checkPrime() {
    const number = parseInt(document.getElementById("numberInput").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(number) || number < 2) {
      resultDiv.textContent = "Please enter a valid number greater than 1.";
      resultDiv.style.color = "red";
      return;
    }

    let isPrime = true;

    // Check divisibility from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      resultDiv.textContent = `${number} is a prime number!`;
      resultDiv.style.color = "green";
    } else {
      resultDiv.textContent = `${number} is not a prime number.`;
      resultDiv.style.color = "red";
    }
}