function checkAnswers() {
    const correctAnswers = [
        "swap",
        "num2",
        "num1",
        "temp"
    ];
    const userAnswers = [
        document.getElementById('swap').value.trim(),
        document.getElementById('num2').value.trim(),
        document.getElementById('num1').value.trim(),
        document.getElementById('temp').value.trim()
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
function swapNumbers() {
    // Get the input values
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    // Swap the numbers
    let temp = n1;
    n1 = n2;
    n2 = temp;

    // Display the swapped numbers
    document.getElementById('result').innerText = `Number 1: ${n1} 
    Number 2: ${n2}`;
}
