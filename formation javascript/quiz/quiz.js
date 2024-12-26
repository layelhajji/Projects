const quizQuestions = [
    {
      questionText: "Quelle est la capitale du Canada?",
      options: ["Ottawa", "Toronto", "Vancouver", "Montréal"],
      correctOptionIndex: 0,
    },
    {
      questionText: "Quel élément chimique a pour symbole 'O'?",
      options: ["Oxygène", "Or", "Argon", "Osmium"],
      correctOptionIndex: 0,
    },
    {
      questionText: "En quelle année la Déclaration d'Indépendance des États-Unis a-t-elle été adoptée?",
      options: ["1776", "1789", "1801", "1812"],
      correctOptionIndex: 0,
    },
    {
      questionText: "Qui a joué le rôle principal dans le film 'Forrest Gump'?",
      options: ["Tom Hanks", "Brad Pitt", "Leonardo DiCaprio", "Johnny Depp"],
      correctOptionIndex: 0,
    },
    {
      questionText: "Quelle est la racine carrée de 144?",
      options: ["10", "12", "14", "16"],
      correctOptionIndex: 1,
    },
    
  ];
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  
  function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    resetQuiz();
  }
  
  function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    startTimer();
  }
  
  function loadQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
    <div id="timer">Time: <span id="time">10</span>s</div>
    <div id="question-container">
        <h2 id="question-text"></h2>
        <div id="options-container"></div>
    </div>
    <button id="submit-btn" onclick="selectAnswer()">Submit</button>
    <button id="next-btn" onclick="loadNextQuestion()" style="display: none;">Next</button>
    <div id="feedback"></div>
    <div id="score-container">Score: <span id="score">0</span></div>
    `;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionTextElement = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container")
    const feedbackElement = document.getElementById("feedback");
  
    questionTextElement.innerText = currentQuestion.questionText;
    feedbackElement.innerText = "";
  
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectAnswer(index);
      optionsContainer.appendChild(button);
    });
  }
  
  function selectAnswer(selectedIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const feedbackElement = document.getElementById("feedback");
    const submitBtn = document.getElementById("submit-btn");
    const options = document.getElementById("options-container").getElementsByTagName("button");
  
    clearInterval(timer);
  
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = true;
      if (i === currentQuestion.correctOptionIndex) {
        options[i].style.backgroundColor = "green";
        options[i].style.color = "white";
      } else {
        options[i].style.backgroundColor = "red";
        options[i].style.color = "white";
      }
    }
  
    if (selectedIndex === currentQuestion.correctOptionIndex) {
      feedbackElement.textContent = "Correct!";
      score++; 
      document.getElementById("score").textContent = score; 
    } else {
      feedbackElement.textContent = `Incorrect. La bonne réponse est : ${currentQuestion.options[currentQuestion.correctOptionIndex]}`;
    }
  
    submitBtn.disabled = true;
    document.getElementById("next-btn").style.display = "block";
  }
  
  function loadNextQuestion() {
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = false;
    document.getElementById("next-btn").style.display = "none";
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion();
      startTimer();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your total score is: <span id="score">${score}</span>/${quizQuestions.length}</p>
        <button id="btn">Restart Quiz</button>
    `;
      bouton=document.getElementById("btn");
      bouton.addEventListener("click",resetQuiz);

  }
  
  
  function startTimer() {
    let timeLeft = 10;
    timer = setInterval(function () {
      document.getElementById("time").textContent = timeLeft;
      timeLeft--;
  
      if (timeLeft < 0) {
        clearInterval(timer);
        selectAnswer(-1); }
    }, 1000);
  }
  
  

  