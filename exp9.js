function checkAnswers() {
    const correctAnswers = [
        "flag",
        "strlen",
        "for",
        "if"
    ];

    const userAnswers = [
        document.getElementById('flag').value.trim(),
        document.getElementById('strlen').value.trim(),
        document.getElementById('for').value.trim(),
        document.getElementById('if').value.trim()
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

function initPalindromeChecker() {
    function isPalindrome(str) {
        const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const reversedString = cleanedString.split('').reverse().join('');
        return cleanedString === reversedString;
    }

    document.getElementById('palindromeForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const inputString = document.getElementById('inputString').value;
        const resultDiv = document.getElementById('result');

        if (isPalindrome(inputString)) {
            resultDiv.textContent = `"${inputString}" is a palindrome.`;
        } else {
            resultDiv.textContent = `"${inputString}" is not a palindrome.`;
        }
    });
}

// Initialize the palindrome checker
initPalindromeChecker();