const quizData = [
    {
        question: "Which of the following ethical considerations should a programmer keep in mind while designing an object-oriented program?",
        a: "Ensuring the program is aesthetically pleasing",
        b: "Maximizing the use of global variables for ease of access",
        c: "Ensuring the program is efficient and fast, regardless of resource utilization",
        d: "Ensuring the program is readable and maintainable for other developers",
        correct: "d",
    },
    {
        question: "A programmer is designing an object-oriented program and has the option to use an external library that could significantly reduce development time, but it requires the use of a proprietary software that is known to have unethical practices. What should the programmer do?",
        a: "Use the external library to save time and effort",
        b: "Refrain from using the external library and find an alternative",
        c: "Cascading Simple Sheets",
        d: "Use the external library but report the unethical practices to the appropriate authorities",
        correct: "b",
    },
    {
        question: "In object-oriented programming, encapsulation allows hiding the internal details of an object and exposing only what is necessary. What ethical consideration does this relate to?",
        a: "Privacy and data protection",
        b: "Code efficiency and performance",
        c: "Intellectual property rights",
        d: "User experience and usability",
        correct: "a",
    },
    {
        question: "Inheritance is a concept in object-oriented programming where a class can inherit properties and methods from another class. What ethical consideration does this relate to?",
        a: "Intellectual property rights",
        b: "Code reusability and maintainability",
        c: "Resource utilization and optimization",
        d: "Code readability and documentation",
        correct: "b",
    },

    {
        question: "A programmer is developing an object-oriented program and realizes that using a certain design pattern would make the code more efficient, but it could potentially lead to security vulnerabilities. What should the programmer do?",
        a: "Prioritize code efficiency and implement the design pattern",
        b: "Prioritize security and avoid using the design pattern",
        c: "Seek permission from the professor before implementing the design pattern",
        d: "Implement the design pattern but document the potential security risks",
        correct: "b",
    },

    {
        question: "A programmer is developing an object-oriented program that requires gathering user data for personalization purposes. What ethical consideration should the programmer keep in mind while implementing data collection and usage?",
        a: "Collecting and using user data without consent",
        b: "Selling user data to third-party companies for profit",
        c: "Ensuring data collection is compliant with privacy laws",
        d: "Using user data for targeted advertising without disclosure",
        correct: "c",
    },
    {
        question: "An object-oriented program is using open-source libraries to improve development efficiency. The programmer discovers a security vulnerability in one of the libraries. What should the programmer do?",
        a: "Ignore the vulnerability and continue using the library",
        b: "Fix the vulnerability and continue using the library",
        c: "Report the vulnerability to the library's maintainers",
        d: "Use the vulnerability to exploit the system for personal gain",
        correct: "c",
    },
    {
        question: "A programmer is working on an object-oriented program that requires user authentication. The programmer decides to store the user passwords in plain text format for easy implementation. What should the programmer do?",
        a: "Store user passwords in plain text format for convenience",
        b: "Hash the passwords and store them securely in the program",
        c: "Encrypt the passwords using a weak algorithm for simplicity",
        d: "Store the passwords in a publicly accessible database for easy access",
        correct: "b",
    },
];

// JavaScript code with the event listener for the "Start Game" button click
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit-button');
const startGameBtn = document.getElementById('start-game');

let currentQuiz = 0;
let score = 0;

// Event listener for start game button click
startGameBtn.addEventListener('click', function() {
    quiz.style.display = 'block';
    startGameBtn.style.display = 'none';
    // Remove the "hidden" class to show the main menu
    document.querySelector('.main-menu').classList.remove('hidden');
    loadQuiz(); // Call loadQuiz() to load the first quiz question
});

// Function to load quiz questions
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


// Function to deselect answers
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Function to get selected answer
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

document.getElementById("start-game").addEventListener("click", function() {
    document.getElementById("title").style.display = "none";
  });

// Event listener for submit button click
// Event listener for submit button click
submitBtn.addEventListener('click', () => {
    const answer = getSelected(); // Get the selected answer
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++; // Increase score if the selected answer is correct
        }
        currentQuiz++; // Move to the next quiz question
        if(currentQuiz < quizData.length) {
            loadQuiz(); // Load the next quiz question
        } else {
            // No more quiz questions, show the result
            quiz.innerHTML = `
                <h2>You have completed the quiz!</h2>
                <p>Your score is: ${score}/${quizData.length}</p>
                <button onclick="location.reload()">Restart</button>
            `;
        }
    }
});