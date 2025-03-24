function checkAnswers() {
    const correctAnswers = [
        "decimal",
        "while",
        "binary",
        "return"
    ];

    const userAnswers = [
        document.getElementById('decimal').value.trim(),
        document.getElementById('while').value.trim(),
        document.getElementById('binary').value.trim(),
        document.getElementById('return').value.trim()
    ];

    let allCorrect = true;

    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] !== correctAnswers[i]) {
            allCorrect = false;
            break;
        }
    }

    const feedbackElement = document.getElementById('feedback');
    if (allCorrect) {
        feedbackElement.innerText = "Correct! You can now use the output simulator.";
        feedbackElement.style.color = "green";
        document.querySelector('.contain').style.display = 'block'; // Show the simulator section
        document.getElementById("button").style.display = "none";
    } else {
        feedbackElement.innerText = "Incorrect answer. Please try again.";
        feedbackElement.style.color = "red";
        document.getElementById('quiz-form').reset(); // Optionally clear inputs
    }
}

function decimalToBinary(decimal) {
    let binary = '';
    let num = decimal;

    if (num === 0) {
        return '0';
    } else {
        while (num > 0) {
            binary = (num % 2) + binary; // Prepend the remainder
            num = Math.floor(num / 2); // Divide by 2
        }
    }

    return binary;
}

// Event listener for button click
document.getElementById('convertButton').addEventListener('click', function() {
    const decimal = parseInt(document.getElementById('decimalInput').value);
    const binary = decimalToBinary(decimal); // Call the conversion function

    document.getElementById('result').textContent = `Binary equivalent of ${decimal} is ${binary}`;
});