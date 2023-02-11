//------dependencies
var body = document.body;
var queryEl = document.querySelector("#query");
var aEl = document.querySelector("#a");
var bEl = document.querySelector("#b");
var cEl = document.querySelector("#c");
var dEl = document.querySelector("#d");
var wrong = new Audio("./assets/wrong.mp3");
var right = new Audio("./assets/right.mp3");
//timer

var timerEl = document.querySelector("#timer");

//body h2
//body p

//-------variables

//quiz items
//user selection
//timer increment

//---------functions

var secondsLeft = 45;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 1) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function startQuiz(event) {
  document.querySelector("#a").textContent = "Start Quiz";
  aEl.setAttribute("style", "display: block");
  aEl.addEventListener("click", function () {
    setTime();
    question1();
  });
}

function question1(event) {
  document.querySelector("#query").textContent =
    "How many fingers do pandas have?";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = "5";
  aEl.setAttribute("style", "display: block");
  document.querySelector("#b").textContent = "6";
  bEl.setAttribute("style", "display: block");
  document.querySelector("#c").textContent = "8";
  cEl.setAttribute("style", "display: block");
  document.querySelector("#d").textContent = "12";
  dEl.setAttribute("style", "display: block");
  aEl.addEventListener("click", function a() {
    document.querySelector("#a").textContent = "WRONG!";
    aEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question2, 750);
  });
  bEl.addEventListener("click", function b() {
    document.querySelector("#b").textContent = "WRONG!";
    bEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question2, 750);
  });
  cEl.addEventListener("click", function c() {
    document.querySelector("#c").textContent = "WRONG!";
    cEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question2, 750);
  });
  dEl.addEventListener("click", function d() {
    document.querySelector("#d").textContent = "CORRECT!";
    dEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(question2, 750);
  });
}

function question2(event) {
  document.querySelector("#query").textContent =
    "What is the capital of Kosovo?";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = "Sofia";
  aEl.setAttribute("style", "display: block");
  document.querySelector("#b").textContent = "Pristina";
  bEl.setAttribute("style", "display: block");
  document.querySelector("#c").textContent = "Skopje";
  cEl.setAttribute("style", "display: block");
  document.querySelector("#d").textContent = "Tirana";
  dEl.setAttribute("style", "display: block");
  aEl.addEventListener("click", function () {
    document.querySelector("#a").textContent = "WRONG!";
    aEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question3, 750);
  });
  bEl.addEventListener("click", function () {
    document.querySelector("#b").textContent = "CORRECT!";
    bEl.setAttribute("style", "background-color: green; display: block");
    secondsLeft -= 5;
    right.play();
    setTimeout(question3, 750);
  });
  cEl.addEventListener("click", function () {
    document.querySelector("#c").textContent = "WRONG!";
    cEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question3, 750);
  });
  dEl.addEventListener("click", function () {
    document.querySelector("#d").textContent = "WRONG!";
    dEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question3, 750);
  });
}

function question3(event) {
  document.querySelector("#query").textContent =
    "Rosa Parks played a key role in which landmark civil rights protest?";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = "The Civil Rights Act of 1957";
  aEl.setAttribute("style", "display: block");
  document.querySelector("#b").textContent = "The March on Washington";
  bEl.setAttribute("style", "display: block");
  document.querySelector("#c").textContent = "The Montgomery Bus Boycott";
  cEl.setAttribute("style", "display: block");
  document.querySelector("#d").textContent = "The Voting Rights Act of 1968";
  dEl.setAttribute("style", "display: block");
  aEl.addEventListener("click", function () {
    document.querySelector("#a").textContent = "WRONG!";
    aEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question4, 750);
  });
  bEl.addEventListener("click", function () {
    document.querySelector("#b").textContent = "WRONG!";
    bEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question4, 750);
  });
  cEl.addEventListener("click", function () {
    document.querySelector("#c").textContent = "CORRECT!";
    cEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(question4, 750);
  });
  dEl.addEventListener("click", function () {
    document.querySelector("#d").textContent = "WRONG!";
    dEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question4, 750);
  });
}

function question4(event) {
  document.querySelector("#query").textContent = "What is the speed of sound?";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = "343 m/s";
  aEl.setAttribute("style", "display: block");
  document.querySelector("#b").textContent = "125 m/s";
  bEl.setAttribute("style", "display: block");
  document.querySelector("#c").textContent = "462 m/s";
  cEl.setAttribute("style", "display: block");
  document.querySelector("#d").textContent = "281 m/s";
  dEl.setAttribute("style", "display: block");
  aEl.addEventListener("click", function () {
    document.querySelector("#a").textContent = "CORRECT!";
    aEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(question5, 750);
  });
  bEl.addEventListener("click", function () {
    document.querySelector("#b").textContent = "WRONG!";
    bEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question5, 750);
  });
  cEl.addEventListener("click", function () {
    document.querySelector("#c").textContent = "WRONG!";
    cEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question5, 750);
  });
  dEl.addEventListener("click", function () {
    document.querySelector("#d").textContent = "WRONG!";
    dEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question5, 750);
  });
}

function question5(event) {
  document.querySelector("#query").textContent =
    "Which film won the Acedemy Award for Best Picture in 1973?";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = "Barry Lyndon";
  aEl.setAttribute("style", "display: block");
  document.querySelector("#b").textContent = "One Flew Over the Cuckoos Nest";
  bEl.setAttribute("style", "display: block");
  document.querySelector("#c").textContent = "The Godfather";
  cEl.setAttribute("style", "display: block");
  document.querySelector("#d").textContent = "The Sting";
  dEl.setAttribute("style", "display: block");
  aEl.addEventListener("click", function () {
    document.querySelector("#a").textContent = "WRONG!";
    aEl.setAttribute("style", "background-color: red; display: block");
    wrong.play();
    secondsLeft -= 5;
    setTimeout(question6, 750);
  });
  bEl.addEventListener("click", function () {
    document.querySelector("#b").textContent = "WRONG!";
    bEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question6, 750);
  });
  cEl.addEventListener("click", function () {
    document.querySelector("#c").textContent = "WRONG!";
    cEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(question6, 750);
  });
  dEl.addEventListener("click", function () {
    document.querySelector("#d").textContent = "CORRECT!";
    dEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(question6, 750);
  });
}

function question6(event) {
  document.querySelector("#query").textContent =
    "What is the state tree of Montana?";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = "Longleaf pine";
  aEl.setAttribute("style", "display: block");
  document.querySelector("#b").textContent = "Ponderosa pine";
  bEl.setAttribute("style", "display: block");
  document.querySelector("#c").textContent = "Sugar maple";
  cEl.setAttribute("style", "display: block");
  document.querySelector("#d").textContent = "Sitka spruce";
  dEl.setAttribute("style", "display: block");
  aEl.addEventListener("click", function () {
    document.querySelector("#a").textContent = "WRONG!";
    aEl.setAttribute("style", "background-color: red; display: block");
    wrong.play();
    secondsLeft -= 5;
    setTimeout(gameOver, 750);
  });
  bEl.addEventListener("click", function () {
    document.querySelector("#b").textContent = "CORRECT!";
    bEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(gameOver, 750);
  });
  cEl.addEventListener("click", function () {
    document.querySelector("#c").textContent = "WRONG!";
    cEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(gameOver, 750);
  });
  dEl.addEventListener("click", function () {
    document.querySelector("#d").textContent = "WRONG!";
    dEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 5;
    wrong.play();
    setTimeout(gameOver, 750);
  });
}

function gameOver(event) {
  document.querySelector("#query").textContent = "End of Quiz";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = "You have a lot to learn, kid";
  aEl.setAttribute("style", "display: block");
  document.querySelector("#b").textContent = "Ponderosa pine";
  bEl.setAttribute("style", "display: none");
  document.querySelector("#c").textContent = "Sugar maple";
  cEl.setAttribute("style", "display: none");
  document.querySelector("#d").textContent = "Sitka spruce";
  dEl.setAttribute("style", "display: none");
}

//-------user input

//click start
//select question answers
//save high score

//-----initialization

startQuiz();

//sandbox

// queryEl.textContent = "Testing this out";
// body.appendChild(queryEl);
// // queryEl.setAttribute("style", "display: block");

// function test(event) {
//   document.querySelector("#query").innerHTML = "Testing this Out";
//   queryEl.setAttribute("style", "display:block");
// }

// function test2(event) {
//   document.querySelector("#a").innerHTMl = "Fuck everything";
//   aEl.setAttribute("style", "display: block");
// }

// function test3(event) {
//   document.querySelector("#timer").textContent = "It's timer time";
// }
