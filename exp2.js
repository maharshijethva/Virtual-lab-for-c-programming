function checkAnswers() {
    const correctAnswers = [
        "if",
        "if",
        "else",
        "else",
        "if", // Placeholder for first new label's answer
        "else"  // Placeholder for second new label's answer
    ];

    const userAnswers = [
        document.getElementById('if1').value.trim(),
        document.getElementById('if2').value.trim(),
        document.getElementById('else1').value.trim(),
        document.getElementById('else2').value.trim(),
        document.getElementById('condition1').value.trim(), // First new condition
        document.getElementById('condition2').value.trim()  // Second new condition
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
        document.querySelector('.enchant').style.display = 'block'; // Show the simulator section
        document.getElementById("button").style.display = "none";
    } else {
        feedbackElement.innerText = "Incorrect answer. Please try again.";
        feedbackElement.style.color = "red";
        document.getElementById('quiz-form').reset(); // Optionally clear inputs
    }
}

function findGreatest() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('result').innerText = 'Please enter valid numbers in all fields.';
        return;
    }
    var greatest = Math.max(num1, num2, num3);
    document.getElementById('result').innerText = 'The greatest number is: ' + greatest;
}
