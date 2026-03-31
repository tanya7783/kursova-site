// --- КОД ДЛЯ ТЕСТУ (працює на сторінці quiz.html) ---
const quizContainer = document.getElementById('quiz-container');

if (quizContainer) {
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');

    // Твої питання (масив questions)
    const questions = [
        {
            question: "Що таке Штучний Інтелект?",
            answers: [
                { text: "Здатність машини імітувати розум", correct: true },
                { text: "Просто швидкий калькулятор", correct: false },
                { text: "Залізо всередині ПК", correct: false },
                { text: "Комп'ютерна іграшка", correct: false }
            ]
        },
        {
            question: "Яка програма може генерувати текст?",
            answers: [
                { text: "Excel", correct: false },
                { text: "Photoshop", correct: false },
                { text: "ChatGPT", correct: true },
                { text: "Paint", correct: false }
            ]
        },
        {
            question: "Для чого потрібні нейронні мережі?",
            answers: [
                { text: "Щоб чистити диски", correct: false },
                { text: "Для розпізнавання образів", correct: true },
                { text: "Щоб монітор світився", correct: false },
                { text: "Це запчастина мишки", correct: false }
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add('hide');
        document.getElementById('question-container').classList.remove('hide');
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('answer-btn');
            button.addEventListener('click', () => selectAnswer(answer));
            answerButtonsElement.appendChild(button);
        });
    }

    function resetState() {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    function selectAnswer(answer) {
        if (answer.correct) score++;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        document.getElementById('question-container').classList.add('hide');
        resultContainer.classList.remove('hide');
        scoreElement.innerText = score;
    }

    document.getElementById('restart-btn').addEventListener('click', startQuiz);
    startQuiz();
}