const questions = [
    { question: "Where did we first meet?", answers: ["Park", "Cafe", "School"], correct: 1 },
    { question: "What’s my favorite color?", answers: ["Blue", "Pink", "Red"], correct: 0 },
    { question: "What’s our dream destination?", answers: ["Paris", "Maldives", "Japan"], correct: 2 }
  ];
  
  let currentQuestionIndex = 0;
  
  function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
      <h2>${question.question}</h2>
      <div>
        ${question.answers.map((answer, index) => `
          <button onclick="checkAnswer(${index})">${answer}</button>
        `).join('')}
      </div>
    `;
  }
  
  function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correct) {
      alert("Correct! 🎉");
    } else {
      alert("Oops! But I still love you! ❤️");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      document.getElementById("app").innerHTML = `
        <h1>You’re Amazing! 🌟</h1>
        <p>Thanks for playing, my love! ❤️</p>
      `;
    }
  }
  
  showQuestion();
  