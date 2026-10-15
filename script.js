const questions = [
  {
    question: "Байламтасыз тең байланыштагы татаал сүйлөм деген эмне?",
    answers: [
      "Бир гана жөнөкөй сүйлөмдөн турган сүйлөм",
      "Тутумдаштыргыч байламтасыз байланышкан тең укуктуу жөнөкөй сүйлөмдөрдөн түзүлгөн татаал сүйлөм",
      "Сөздөр гана байланышкан сүйлөм",
      "Баш жана багыныңкы сүйлөмдөн турган сүйлөм",
    ],
    correct: 1,
    explanation:
      "Мындай татаал сүйлөмдө жөнөкөй сүйлөмдөр байламтасыз байланышат. Алардын маанилик байланышы интонация жана тыныш белгилери аркылуу берилет.",
  },
  {
    question:
      "Байламтасыз тең байланыштагы татаал сүйлөмдө канча грамматикалык негиз болушу мүмкүн?",
    answers: [
      "Бир гана",
      "Эки же андан көп",
      "Так үчөө гана",
      "Грамматикалык негиз болбойт",
    ],
    correct: 1,
    explanation:
      "Татаал сүйлөм эки же андан көп жөнөкөй сүйлөмдөн түзүлүшү мүмкүн. Ар бир бөлүктүн өзүнүн грамматикалык негизи болот.",
  },
  {
    question:
      "Кайсы сүйлөм байламтасыз байланышкан татаал сүйлөмгө мисал болот?",
    answers: [
      "Күн чыкты, айлана жарык болду.",
      "Күн чыкканда, биз жолго чыктык.",
      "Мен китепти жана дептерди алдым.",
      "Эгер убакыт болсо, келем.",
    ],
    correct: 0,
    explanation:
      "«Күн чыкты» жана «айлана жарык болду» деген эки жөнөкөй сүйлөм байламтасыз байланышкан.",
  },
  {
    question:
      "Төмөнкү сүйлөмдө канча грамматикалык негиз бар? «Жамгыр жаады, көчөлөр суу болду.»",
    answers: ["Бир", "Эки", "Үч", "Төрт"],
    correct: 1,
    explanation:
      "Биринчи негиз: «жамгыр жаады». Экинчи негиз: «көчөлөр суу болду».",
  },
  {
    question:
      "Байламтасыз байланышкан татаал сүйлөмдүн бөлүктөрүнүн ортосуна кайсы тыныш белгиси коюлушу мүмкүн?",
    answers: [
      "Үтүр",
      "Кош чекит",
      "Тире",
      "Жогорудагылардын баары, маанисине жана түзүлүшүнө жараша",
    ],
    correct: 3,
    explanation:
      "Мындай сүйлөмдөрдүн бөлүктөрүнүн ортосуна үтүр, кош чекит же тире коюлушу мүмкүн. Тыныш белгиси сүйлөмдүн маанилик байланышы менен интонациясына жараша тандалат.",
  },
  {
    question: "Кайсы сүйлөмдө эки жөнөкөй сүйлөм үтүр аркылуу байланышкан?",
    answers: [
      "Күн батты, асман караңгылады.",
      "Мен билем: ал бүгүн келет.",
      "Бир нерсе анык: биз жеңдик.",
      "Шашылба — убакыт бар.",
    ],
    correct: 0,
    explanation:
      "Бул мисалда эки жөнөкөй сүйлөм үтүр менен бөлүнүп, байламтасыз байланышкан.",
  },
  {
    question:
      "«Коңгуроо кагылды — сабак башталды.» сүйлөмүндөгү тире кандай маанини билдирет?",
    answers: [
      "Суроо маанисин",
      "Бөлүктөрдүн ортосундагы ырааттуулукту же натыйжа байланышын",
      "Каратма сөздү",
      "Сүйлөмдүн аяктаганын гана",
    ],
    correct: 1,
    explanation:
      "Бул мисалда экинчи бөлүк биринчи бөлүктөн кийинки окуяны билдирет. Тире бөлүктөрдүн маанилик байланышын көрсөтөт.",
  },
  {
    question: "Кайсы сүйлөмдө кош чекит туура колдонулган?",
    answers: [
      "Күн чыкты: балдар мектепке жөнөштү.",
      "Мен бир нерсени түшүндүм: аракет кылуу керек.",
      "Куштар учту: дарактар жашыл.",
      "Ал келди: жана отурду.",
    ],
    correct: 1,
    explanation:
      "«Мен бир нерсени түшүндүм» деген бөлүктөн кийин экинчи бөлүк ошол түшүнүктүн мазмунун ачып берет. Ошондуктан кош чекит колдонулган.",
  },
  {
    question:
      "Байламтасыз тең байланыштагы татаал сүйлөмдүн бөлүктөрү кандай байланышат?",
    answers: [
      "Сөзсүз «жана» байламтасы менен",
      "Байламтасыз, мааниси жана интонациясы аркылуу",
      "Суроо белгиси аркылуу гана",
      "Бөлүктөрдүн ортосунда байланыш болбойт",
    ],
    correct: 1,
    explanation:
      "Жөнөкөй сүйлөмдөр байламтасыз байланышат. Алардын маанилик мамилеси интонация жана тиешелүү тыныш белгилери менен берилет.",
  },
  {
    question:
      "Кайсы вариант байламтасыз тең байланыштагы татаал сүйлөмдүн өзгөчөлүгүн туура көрсөтөт?",
    answers: [
      "Анын бардык бөлүктөрүндө сөзсүз байламта болот.",
      "Ал бир гана сөздөн турат.",
      "Анын бөлүктөрү тең укуктуу болуп, байламтасыз байланышат.",
      "Ал дайыма суроо белгиси менен бүтөт.",
    ],
    correct: 2,
    explanation:
      "Негизги өзгөчөлүгү — тең укуктуу жөнөкөй сүйлөмдөрдүн байламтасыз байланышы. Тыныш белгилери маанилик мамилеге жараша коюлат.",
  },
];

const welcomeScreen = document.getElementById("welcomeScreen");
const questionScreen = document.getElementById("questionScreen");
const resultScreen = document.getElementById("resultScreen");

const screenTitle = document.getElementById("screenTitle");
const questionCounter = document.getElementById("questionCounter");
const progressFill = document.getElementById("progressFill");
const questionTag = document.getElementById("questionTag");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const answeredLabel = document.getElementById("answeredLabel");
const nextButton = document.getElementById("nextButton");

const startButton = document.getElementById("startButton");
const reviewButton = document.getElementById("reviewButton");
const restartButton = document.getElementById("restartButton");
const restartBottomButton = document.getElementById("restartBottomButton");

const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const scoreRing = document.getElementById("scoreRing");
const scoreValue = document.getElementById("scoreValue");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const percentValue = document.getElementById("percentValue");
const reviewSection = document.getElementById("reviewSection");
const reviewList = document.getElementById("reviewList");
const reviewCount = document.getElementById("reviewCount");

let currentQuestion = 0;
let selectedAnswers = [];
let testFinished = false;

function scrollToQuiz() {
  const quizCard = document.getElementById("quizCard");

  if (!quizCard) return;

  const top = quizCard.getBoundingClientRect().top + window.scrollY;
  const offset = 20;

  window.scrollTo({
    top: Math.max(0, top - offset),
    behavior: "smooth",
  });
}

function startTest() {
  currentQuestion = 0;
  selectedAnswers = new Array(questions.length).fill(null);
  testFinished = false;

  welcomeScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  reviewSection.classList.add("hidden");

  screenTitle.textContent = "Суроого жооп бер";
  renderQuestion();
  requestAnimationFrame(() => {
    scrollToQuiz();
  });
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const number = currentQuestion + 1;

  questionCounter.textContent = `${number} / ${questions.length}`;
  questionTag.textContent = `СУРОО ${String(number).padStart(2, "0")}`;
  questionText.textContent = question.question;

  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;

  answersContainer.innerHTML = "";
  nextButton.disabled = selectedAnswers[currentQuestion] === null;

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const answerText = document.createElement("span");
    answerText.textContent = answer;

    button.append(letter, answerText);

    if (selectedAnswers[currentQuestion] === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => selectAnswer(index));
    answersContainer.appendChild(button);
  });

  answeredLabel.textContent =
    selectedAnswers[currentQuestion] === null
      ? "Жооп танда"
      : "Жообуң тандалды";

  nextButton.innerHTML =
    number === questions.length
      ? "Жыйынтыкты көрүү <span>✓</span>"
      : "Кийинки <span>→</span>";
}

function selectAnswer(index) {
  if (testFinished) return;

  selectedAnswers[currentQuestion] = index;

  const buttons = answersContainer.querySelectorAll(".answer-option");

  buttons.forEach((button, buttonIndex) => {
    button.classList.toggle("selected", buttonIndex === index);
  });

  nextButton.disabled = false;
  answeredLabel.textContent = "Жообуң тандалды";
}

function nextQuestion() {
  if (selectedAnswers[currentQuestion] === null || testFinished) {
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();

    // Плавно прокручиваем к тестовой карточке
    requestAnimationFrame(() => {
      scrollToQuiz();
    });
  } else {
    finishTest();

    // После последнего вопроса показываем результат
    requestAnimationFrame(() => {
      scrollToQuiz();
    });
  }
}

function finishTest() {
  testFinished = true;

  const correct = questions.reduce((total, question, index) => {
    return total + (selectedAnswers[index] === question.correct ? 1 : 0);
  }, 0);

  const wrong = questions.length - correct;
  const percentage = Math.round((correct / questions.length) * 100);

  questionScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  screenTitle.textContent = "Сенин жыйынтыгың";
  questionCounter.textContent = `${questions.length} / ${questions.length}`;
  progressFill.style.width = "100%";

  scoreValue.textContent = `${correct}/${questions.length}`;
  correctCount.textContent = correct;
  wrongCount.textContent = wrong;
  percentValue.textContent = `${percentage}%`;

  scoreRing.style.background = `conic-gradient(var(--green) ${percentage * 3.6}deg, #293351 ${percentage * 3.6}deg)`;

  if (percentage === 100) {
    resultIcon.textContent = "🏆";
    resultTitle.textContent = "Мыкты! Баары туура!";
    resultDescription.textContent =
      "Сен теманы мыкты өздөштүрүпсүң. Ушундай уланта бер!";
  } else if (percentage >= 80) {
    resultIcon.textContent = "🎉";
    resultTitle.textContent = "Азаматсың!";
    resultDescription.textContent =
      "Натыйжаң абдан жакшы. Бир аз кайталоо менен теманы толук өздөштүрөсүң.";
  } else if (percentage >= 60) {
    resultIcon.textContent = "💪";
    resultTitle.textContent = "Жакшы аракет!";
    resultDescription.textContent =
      "Негизги түшүнүктөрдү билесиң. Төмөнкү жоопторду талдап, билимиңди бекемде.";
  } else {
    resultIcon.textContent = "📚";
    resultTitle.textContent = "Кайталап көр!";
    resultDescription.textContent =
      "Ката кетирүү — үйрөнүүнүн бир бөлүгү. Туура жоопторду окуп чыгып, тестти кайра тапшыр.";
  }

  renderReview();
}

function renderReview() {
  reviewList.innerHTML = "";
  reviewCount.textContent = `${questions.length} суроо`;

  questions.forEach((question, index) => {
    const userAnswer = selectedAnswers[index];
    const isCorrect = userAnswer === question.correct;

    const item = document.createElement("article");
    item.className = `review-item ${isCorrect ? "is-correct" : "is-wrong"}`;

    const top = document.createElement("div");
    top.className = "review-top";

    const number = document.createElement("span");
    number.className = "review-number";
    number.textContent = `СУРОО ${String(index + 1).padStart(2, "0")}`;

    const status = document.createElement("span");
    status.className = "review-status";
    status.textContent = isCorrect ? "✓ Туура" : "✕ Туура эмес";

    top.append(number, status);

    const title = document.createElement("p");
    title.className = "review-question";
    title.textContent = question.question;

    item.append(top, title);

    if (!isCorrect) {
      item.appendChild(
        makeReviewAnswer(
          "СЕНИН ЖООБУҢ",
          question.answers[userAnswer] ?? "Жооп тандалган эмес",
          "user-answer",
        ),
      );
    }

    item.appendChild(
      makeReviewAnswer(
        "ТУУРА ЖООП",
        question.answers[question.correct],
        "correct-answer",
      ),
    );

    const explanation = document.createElement("p");
    explanation.className = "explanation";
    explanation.textContent = `💡 ${question.explanation}`;

    item.appendChild(explanation);
    reviewList.appendChild(item);
  });
}

function makeReviewAnswer(label, text, className) {
  const box = document.createElement("div");
  box.className = `review-answer ${className}`;

  const heading = document.createElement("strong");
  heading.textContent = label;

  const content = document.createElement("span");
  content.textContent = text;

  box.append(heading, content);
  return box;
}

function showReview() {
  reviewSection.classList.remove("hidden");
  reviewSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

startButton.addEventListener("click", startTest);
nextButton.addEventListener("click", nextQuestion);
reviewButton.addEventListener("click", showReview);
restartButton.addEventListener("click", startTest);
restartBottomButton.addEventListener("click", startTest);
