function checkAnswers() {
    const correctAnswers = [
        "ncr",
        "fact",
        "fact",
        "return"
    ];

    const userAnswers = [
        document.getElementById('ncr').value.trim(),
        document.getElementById('fact').value.trim(),
        document.getElementById('fact1').value.trim(),
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
 // Function to calculate factorial
 function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate BIO
function calculateBIO() {
    const n = parseInt(document.getElementById('n').value);
    const r = parseInt(document.getElementById('r').value);

    // Validate inputs
    if (r > n || n < 0 || r < 0) {
        document.getElementById('resultContainer').innerText = "Invalid input: n and r must be natural numbers with r ≤ n.";
        return;
    }

    const nFactorial = factorial(n);
    const rFactorial = factorial(r);
    const nMinusRFactorial = factorial(n - r);

    const BIO = nFactorial / (rFactorial * nMinusRFactorial);
    document.getElementById('resultContainer').innerText = `BIO(${n}, ${r}) = ${BIO}`;
}