let questions = [
    { question: "What has hands but can’t clap?", answers: ["Monkey", "Clock", "Tree", "Human"], correct: 1 },
    { question: "Which planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Mercury"], correct: 1 },
    { question: "How many seconds are in 2 minutes?", answers: ["60", "90", "120", "180"], correct: 2 },
    { question: "Which color is made by mixing blue and yellow?", answers: ["Orange", "Green", "Purple", "Red"], correct: 1 },
    { question: "What is the capital of Japan?", answers: ["Seoul", "Tokyo", "Kyoto", "Beijing"], correct: 1 },
    { question: "Which one is not a fruit?", answers: ["Apple", "Mango", "Carrot", "Banana"], correct: 2 },
    { question: "How many continents are there on Earth?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "What do bees produce?", answers: ["Wax", "Honey", "Sugar", "Oil"], correct: 1 },
    { question: "Which animal is known as the king of the jungle?", answers: ["Tiger", "Lion", "Elephant", "Cheetah"], correct: 1 },
    { question: "What is 9 + 10?", answers: ["19", "21", "18", "20"], correct: 0 },
    { question: "Which gas do humans exhale?", answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
    { question: "What comes after Tuesday?", answers: ["Monday", "Wednesday", "Thursday", "Friday"], correct: 1 },
    { question: "Which shape has 4 equal sides?", answers: ["Triangle", "Circle", "Square", "Rectangle"], correct: 2 },
    { question: "What is the boiling point of water?", answers: ["90°C", "95°C", "100°C", "110°C"], correct: 2 },
    { question: "What animal says “Moo”?", answers: ["Goat", "Cow", "Sheep", "Horse"], correct: 1 },
    { question: "Which is faster?", answers: ["Snail", "Rabbit", "Turtle", "Sloth"], correct: 1 },
    { question: "What is H₂O commonly known as?", answers: ["Salt", "Water", "Air", "Sugar"], correct: 1 },
    { question: "Which month has 28 or 29 days?", answers: ["January", "February", "March", "April"], correct: 1 },
    { question: "How many legs does a spider have?", answers: ["6", "8", "10", "12"], correct: 1 },
    { question: "What’s the opposite of hot?", answers: ["Warm", "Cold", "Fire", "Heat"], correct: 1 },
    { question: "Which planet is closest to the sun?", answers: ["Earth", "Mercury", "Venus", "Mars"], correct: 1 },
    { question: "What color are bananas?", answers: ["Red", "Yellow", "Green", "Blue"], correct: 1 },
    { question: "Which animal lays eggs?", answers: ["Cat", "Dog", "Bird", "Cow"], correct: 2 },
    { question: "What is the square root of 64?", answers: ["6", "7", "8", "9"], correct: 2 },
    { question: "What day comes after Friday?", answers: ["Sunday", "Monday", "Saturday", "Thursday"], correct: 2 },
    { question: "What has keys but can’t open doors?", answers: ["Piano", "Keyboard", "Lock", "Map"], correct: 0 },
    { question: "What’s 5 × 6?", answers: ["11", "25", "30", "36"], correct: 2 },
    { question: "Which animal lives in water?", answers: ["Dog", "Fish", "Cat", "Bird"], correct: 1 },
    { question: "What color is the sky on a clear day?", answers: ["Blue", "Red", "Green", "Purple"], correct: 0 },
    { question: "What do you use to write on a blackboard?", answers: ["Pen", "Chalk", "Pencil", "Marker"], correct: 1 },
    { question: "How many days are in a week?", answers: ["5", "6", "7", "8"], correct: 2 },
    { question: "Which is heavier: 1kg of iron or 1kg of cotton?", answers: ["Iron", "Cotton", "Both equal", "Can’t tell"], correct: 2 },
    { question: "What do you call a baby dog?", answers: ["Kitten", "Cub", "Puppy", "Calf"], correct: 2 },
    { question: "Which number comes before 10?", answers: ["9", "8", "11", "7"], correct: 0 },
    { question: "What color are strawberries?", answers: ["Green", "Yellow", "Red", "Blue"], correct: 2 },
    { question: "What do plants need to make food?", answers: ["Moonlight", "Sunlight", "Starlight", "Fire"], correct: 1 },
    { question: "What’s 50 divided by 5?", answers: ["5", "10", "15", "25"], correct: 1 },
    { question: "Which sense do you use to hear?", answers: ["Eyes", "Nose", "Ears", "Mouth"], correct: 2 },
    { question: "What’s the opposite of “up”?", answers: ["Down", "Left", "Right", "Over"], correct: 0 },
    { question: "What do you drink when thirsty?", answers: ["Juice", "Water", "Coffee", "Any"], correct: 1 },
    { question: "Which ocean is the largest?", answers: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: 2 },
    { question: "What’s the color of blood?", answers: ["Blue", "Green", "Red", "Yellow"], correct: 2 },
    { question: "What shape is a stop sign?", answers: ["Circle", "Octagon", "Square", "Triangle"], correct: 1 },
    { question: "What is frozen water called?", answers: ["Ice", "Steam", "Snow", "Rain"], correct: 0 },
    { question: "What’s 12 × 2?", answers: ["20", "22", "24", "26"], correct: 2 },
    { question: "What’s the opposite of “fast”?", answers: ["Slow", "Quick", "Run", "Swift"], correct: 0 },
    { question: "What’s the color of grass?", answers: ["Green", "Brown", "Blue", "Yellow"], correct: 0 },
    { question: "How many letters are in the English alphabet?", answers: ["24", "25", "26", "27"], correct: 2 },
    { question: "What’s the main gas we breathe in?", answers: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 1 },
    { question: "What is 100 minus 25?", answers: ["50", "60", "70", "75"], correct: 3 }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

questions = shuffle(questions);

let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);

let question = document.getElementById("question");
let answers = document.getElementById("answers");
let scores = document.getElementById("score");
let result = document.getElementById("result");

let restartButton = document.getElementById("restart");
let submitButton = document.getElementById("submit");
let nextButton = document.getElementById("nxt");
let prevButton = document.getElementById("prev");

loadQuestion();

function loadQuestion() {
    result.textContent = "";
    if (currentQuestion >= questions.length) {
        showFinalResult();
        return;
    }
    question.textContent = questions[currentQuestion].question;
    answers.innerHTML = "";
    questions[currentQuestion].answers.forEach((answer, index) => {
        let label = document.createElement("label");
        label.style.display = "block";
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;
        if (userAnswers[currentQuestion] === index) radio.checked = true;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(answer));
        answers.appendChild(label);
    });
    submitButton.disabled = false;
    nextButton.disabled = true;
    prevButton.disabled = currentQuestion === 0;
    scores.textContent = `Score: ${score}`;
}

submitButton.onclick = function () {
    let selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert("Please select an answer before submitting!");
        return;
    }
    userAnswers[currentQuestion] = parseInt(selected.value);
    let isCorrect = userAnswers[currentQuestion] === questions[currentQuestion].correct;
    result.textContent = isCorrect ? "✅ Correct!" : `❌ Wrong! The correct answer is "${questions[currentQuestion].answers[questions[currentQuestion].correct]}".`;
    result.style.fontWeight = "bold";
    if (isCorrect) score++;
    scores.textContent = `Score: ${score}`;
    submitButton.disabled = true;
    nextButton.disabled = false;
};

nextButton.onclick = function () {
    if (submitButton.disabled === false) {
        alert("Please submit your answer before moving to the next question!");
        return;
    }
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showFinalResult();
    }
};

prevButton.onclick = function () {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
};

function showFinalResult() {
    question.style.display = "none";
    answers.style.display = "none";
    scores.style.display = "none";
    submitButton.style.display = "none";
    nextButton.style.display = "none";
    prevButton.style.display = "none";
    result.textContent = `🎉 Your final score is ${score} out of ${questions.length}`;
    restartButton.style.display = "block";
}

restartButton.onclick = function () {
    currentQuestion = 0;
    score = 0;
    userAnswers.fill(null);
    questions = shuffle(questions);
    question.style.display = "block";
    answers.style.display = "block";
    scores.style.display = "block";
    submitButton.style.display = "block";
    restartButton.style.display = "none";
    result.textContent = "";
    loadQuestion();
};