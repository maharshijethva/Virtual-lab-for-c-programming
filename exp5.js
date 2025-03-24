function checkAnswers() {
    const correctAnswers = [
        "displayReverse",
        "ptr",
        "arr",
        "return"
    ];

    const userAnswers = [
        document.getElementById('displayReverse').value.trim(),
        document.getElementById('ptr').value.trim(),
        document.getElementById('arr').value.trim(),
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

function init() {
    const array = [];
    const elementList = document.getElementById('elementList');
    const inputField = document.getElementById('elementInput');
    const addButton = document.getElementById('addButton');
    const displayButton = document.getElementById('displayButton');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Add element to array
    addButton.addEventListener('click', () => {
        successMessage.textContent = ''; // Clear success message
        errorMessage.textContent = ''; // Clear error message

        if (array.length < 5) {
            const inputValue = inputField.value.trim();
            if (inputValue) {
                array.push(inputValue);
                inputField.value = '';
                successMessage.textContent = `Added: ${inputValue}`;
            } else {
                errorMessage.textContent = 'Please enter a valid element.';
            }
        } else {
            errorMessage.textContent = 'You can only add 5 elements.';
        }
    });

    // Display elements in reverse order
    displayButton.addEventListener('click', () => {
        elementList.innerHTML = ''; // Clear previous list
        for (let i = array.length - 1; i >= 0; i--) {
            const listItem = document.createElement('li');
            listItem.textContent = array[i];
            elementList.appendChild(listItem);
        }
    });
}

// Initialize the application
init();