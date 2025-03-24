function checkAnswers() {
    const correctAnswers = [
        "while",
        "while",
        "if",
        "else"
    ];

    const userAnswers = [
        document.getElementById('while').value.trim(),
        document.getElementById('while1').value.trim(),
        document.getElementById('if').value.trim(),
        document.getElementById('else').value.trim()
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

function checkArmstrong() {
    let num = document.getElementById("number").value;
    let originalNum = num;
    let sum = 0;
    let digits = num.length;

    while (num > 0) {
        let remainder = num % 10;
        sum += Math.pow(remainder, digits);
        num = Math.floor(num / 10);
    }

    let result = document.getElementById("result");

    if (sum === originalNum) {
        result.innerHTML = originalNum + " is an Armstrong number.";
        result.style.color = "green";
    } else {
        result.innerHTML = originalNum + " is not an Armstrong number.";
        result.style.color = "red";
    }
}