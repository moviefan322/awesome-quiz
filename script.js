//------dependencies
var body = document.body;
var queryEl = document.querySelector("#query");
var aEl = document.querySelector("#a");
var bEl = document.querySelector("#b");
var cEl = document.querySelector("#c");
var dEl = document.querySelector("#d");
var formEl = document.querySelector("#form");
var usernameInput = document.querySelector("#username");
var submitEl = document.querySelector("#submitButton");
var bestScoreEl = document.querySelector("#bestScore");
// var nameEl = document.querySelector["#name"];
var wrong = new Audio("./assets/wrong.mp3");
var right = new Audio("./assets/right.mp3");
//timer

var timerEl = document.querySelector("#timer");
var secondsLeft = 45;
var timerInterval = "";
var savedScore = localStorage.getItem("score");
var savedName = localStorage.getItem("name");

//save high score

function displayScores() {
  document.querySelector("#query").textContent = "High Scores";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = savedName + ": " + savedScore;
  aEl.setAttribute("style", "display: block");
}

console.log(submitEl);

//enter name

submitEl.addEventListener("click", function (event) {
  event.preventDefault();

  // get user name

  var userName = usernameInput.value;

  // update user name variable and score variable
  savedName = userName;
  savedScore = secondsLeft;

  console.log(userName);

  //store name and score

  localStorage.setItem("name", userName);
  localStorage.setItem("score", secondsLeft);
  document.querySelector("#query").textContent = "High Scores";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = savedName + ": " + savedScore;
  aEl.setAttribute("style", "display: block");
  formEl.setAttribute("style", "display: none");
});

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0 || secondsLeft < 0) {
      clearInterval(timerInterval);
      secondsLeft = 1;
      alert("You are out of time");
      window.location.replace("index.html");
    }
  }, 1000);
}

function startQuiz(event) {
  document.querySelector("#a").textContent = "Start Quiz";
  aEl.setAttribute("style", "display: block");
  aEl.addEventListener("click", clickA);

  function clickA(event) {
    setTime();
    question1();
    reset();
  }
  function reset(event) {
    aEl.removeEventListener("click", clickA);
  }
}

// function question1(event) {
//   document.querySelector("#query").textContent =
//     "How many fingers do pandas have?";
//   queryEl.setAttribute("style", "display: block");
//   document.querySelector("#a").textContent = "5";
//   aEl.setAttribute("style", "display: block");
//   document.querySelector("#b").textContent = "6";
//   bEl.setAttribute("style", "display: block");
//   document.querySelector("#c").textContent = "8";
//   cEl.setAttribute("style", "display: block");
//   document.querySelector("#d").textContent = "12";
//   dEl.setAttribute("style", "display: block");
//   aEl.addEventListener("click", function a(event) {
//     document.querySelector("#a").textContent = "WRONG!";
//     aEl.setAttribute("style", "background-color: red; display: block");
//     secondsLeft -= 5;
//     wrong.play();
//     setTimeout(question2, 750);
//   });
//   bEl.addEventListener("click", function b(event) {
//     document.querySelector("#b").textContent = "WRONG!";
//     bEl.setAttribute("style", "background-color: red; display: block");
//     secondsLeft -= 5;
//     wrong.play();
//     setTimeout(question2, 750);
//   });
//   cEl.addEventListener("click", function c(event) {
//     document.querySelector("#c").textContent = "WRONG!";
//     cEl.setAttribute("style", "background-color: red; display: block");
//     secondsLeft -= 5;
//     wrong.play();
//     setTimeout(question2, 750);
//   });
//   dEl.addEventListener("click", function d(event) {
//     document.querySelector("#d").textContent = "CORRECT!";
//     dEl.setAttribute("style", "background-color: green; display: block");
//     right.play();
//     setTimeout(question2, 750);
//   });

function question1(event) {
  document.querySelector("#query").textContent =
    "How many fingers do pandas have?";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = "15";
  aEl.setAttribute("style", "display: block");
  document.querySelector("#b").textContent = "5";
  bEl.setAttribute("style", "display: block");
  document.querySelector("#c").textContent = "10";
  cEl.setAttribute("style", "display: block");
  document.querySelector("#d").textContent = "12";
  dEl.setAttribute("style", "display: block");
  aEl.addEventListener("click", clickA);
  bEl.addEventListener("click", clickB);
  cEl.addEventListener("click", clickC);
  dEl.addEventListener("click", clickD);

  function clickA(event) {
    document.querySelector("#a").textContent = "WRONG!";
    aEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question2, 750);
    reset();
    return;
  }

  function clickB(event) {
    document.querySelector("#b").textContent = "WRONG!";
    bEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question2, 750);
    reset();
    return;
  }

  function clickC(event) {
    document.querySelector("#c").textContent = "WRONG!";
    cEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question2, 750);
    removeEventListener("click", clickC);
    reset();
    return;
  }

  function clickD(event) {
    document.querySelector("#d").textContent = "CORRECT!";
    dEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(question2, 750);
    removeEventListener("click", clickD);
    reset();
    return;
  }
  function reset(event) {
    aEl.removeEventListener("click", clickA);
    bEl.removeEventListener("click", clickB);
    cEl.removeEventListener("click", clickC);
    dEl.removeEventListener("click", clickD);
  }
}

function reset(event) {
  aEl.removeEventListener("click", clickA);
  bEl.removeEventListener("click", clickB);
  cEl.removeEventListener("click", clickC);
  dEl.removeEventListener("click", clickD);
}

// function clear1() {
//   var resetA = document.querySelector(".ans");
//   resetAClone = resetA.cloneNode(true);
// var resetA = document.getElementById("a"),
//   resetAClone = resetA.cloneNode(true);
// resetA.parentNode.replaceChild(resetAClone, resetA);
// var resetB = document.getElementById("b"),
//   resetBClone = resetB.cloneNode(true);
// resetB.parentNode.replaceChild(resetBClone, resetB);
// var resetC = document.getElementById("c"),
//   resetCClone = resetC.cloneNode(true);
// resetC.parentNode.replaceChild(resetCClone, resetC);
// var resetD = document.getElementById("d"),
//   resetDClone = resetB.cloneNode(true);
// resetD.parentNode.replaceChild(resetDClone, resetD);
// }

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
  aEl.addEventListener("click", clickA);
  bEl.addEventListener("click", clickB);
  cEl.addEventListener("click", clickC);
  dEl.addEventListener("click", clickD);

  function clickA(event) {
    event.stopPropagation();
    document.querySelector("#a").textContent = "WRONG!";
    aEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question3, 750);
    reset();
  }
  function clickB(event) {
    event.stopPropagation();
    document.querySelector("#b").textContent = "CORRECT!";
    bEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(question3, 750);
    reset();
  }
  function clickC(event) {
    event.stopPropagation();
    document.querySelector("#c").textContent = "WRONG!";
    cEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question3, 750);
    reset();
  }
  function clickD(event) {
    event.stopPropagation();
    document.querySelector("#d").textContent = "WRONG!";
    dEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question3, 750);
    reset();
  }
  function reset(event) {
    aEl.removeEventListener("click", clickA);
    bEl.removeEventListener("click", clickB);
    cEl.removeEventListener("click", clickC);
    dEl.removeEventListener("click", clickD);
  }
}

function question3(event) {
  // event.stopPropagation();
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
  aEl.addEventListener("click", clickA);
  bEl.addEventListener("click", clickB);
  cEl.addEventListener("click", clickC);
  dEl.addEventListener("click", clickD);

  function clickA(event) {
    document.querySelector("#a").textContent = "WRONG!";
    aEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question4, 750);
    reset();
  }

  function clickB(event) {
    document.querySelector("#b").textContent = "WRONG!";
    bEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question4, 750);
    reset();
  }

  function clickC(event) {
    document.querySelector("#c").textContent = "CORRECT!";
    cEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(question4, 750);
    reset();
  }

  function clickD(event) {
    document.querySelector("#d").textContent = "WRONG!";
    dEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question4, 750);
    reset();
  }

  function reset(event) {
    aEl.removeEventListener("click", clickA);
    bEl.removeEventListener("click", clickB);
    cEl.removeEventListener("click", clickC);
    dEl.removeEventListener("click", clickD);
  }
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
  aEl.addEventListener("click", clickA);
  bEl.addEventListener("click", clickB);
  cEl.addEventListener("click", clickC);
  dEl.addEventListener("click", clickD);

  function clickA(event) {
    document.querySelector("#a").textContent = "CORRECT!";
    aEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(question5, 750);
    reset();
  }

  function clickB(event) {
    document.querySelector("#b").textContent = "WRONG!";
    bEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question5, 750);
    reset();
  }

  function clickC(event) {
    document.querySelector("#c").textContent = "WRONG!";
    cEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question5, 750);
    reset();
  }

  function clickD(event) {
    document.querySelector("#d").textContent = "WRONG!";
    dEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question5, 750);
    reset();
  }

  function reset(event) {
    aEl.removeEventListener("click", clickA);
    bEl.removeEventListener("click", clickB);
    cEl.removeEventListener("click", clickC);
    dEl.removeEventListener("click", clickD);
  }
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
  aEl.addEventListener("click", clickA);
  bEl.addEventListener("click", clickB);
  cEl.addEventListener("click", clickC);
  dEl.addEventListener("click", clickD);

  function clickA(event) {
    document.querySelector("#a").textContent = "WRONG!";
    aEl.setAttribute("style", "background-color: red; display: block");
    wrong.play();
    secondsLeft -= 15;
    setTimeout(question6, 750);
    reset();
  }

  function clickB(event) {
    document.querySelector("#b").textContent = "WRONG!";
    bEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question6, 750);
    reset();
  }

  function clickC(event) {
    document.querySelector("#c").textContent = "WRONG!";
    cEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(question6, 750);
    reset();
  }

  function clickD(event) {
    document.querySelector("#d").textContent = "CORRECT!";
    dEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(question6, 750);
    reset();
  }

  function reset(event) {
    aEl.removeEventListener("click", clickA);
    bEl.removeEventListener("click", clickB);
    cEl.removeEventListener("click", clickC);
    dEl.removeEventListener("click", clickD);
  }
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
  aEl.addEventListener("click", clickA);
  bEl.addEventListener("click", clickB);
  cEl.addEventListener("click", clickC);
  dEl.addEventListener("click", clickD);

  function clickA(event) {
    document.querySelector("#a").textContent = "WRONG!";
    aEl.setAttribute("style", "background-color: red; display: block");
    wrong.play();
    secondsLeft -= 15;
    setTimeout(gameOver, 750);
    reset();
  }

  function clickB(event) {
    document.querySelector("#b").textContent = "CORRECT!";
    bEl.setAttribute("style", "background-color: green; display: block");
    right.play();
    setTimeout(gameOver, 750);
    reset();
  }

  function clickC(event) {
    document.querySelector("#c").textContent = "WRONG!";
    cEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(gameOver, 750);
    reset();
  }

  function clickD(event) {
    document.querySelector("#d").textContent = "WRONG!";
    dEl.setAttribute("style", "background-color: red; display: block");
    secondsLeft -= 15;
    wrong.play();
    setTimeout(gameOver, 750);
    reset();
  }

  function reset(event) {
    aEl.removeEventListener("click", clickA);
    bEl.removeEventListener("click", clickB);
    cEl.removeEventListener("click", clickC);
    dEl.removeEventListener("click", clickD);
  }
}

function gameOver(event) {
  clearInterval(timerInterval);
  document.querySelector("#query").textContent = "End of Quiz";
  queryEl.setAttribute("style", "display: block");
  document.querySelector("#a").textContent = "You have a lot to learn, kid";
  aEl.setAttribute("style", "display: none");
  document.querySelector("#b").textContent = "Play Again?";
  bEl.setAttribute("style", "background-color: green; display: none");
  document.querySelector("#c").textContent = "Sugar maple";
  cEl.setAttribute("style", "display: none");
  document.querySelector("#d").textContent = "Sitka spruce";
  dEl.setAttribute("style", "display: none");
  document.querySelector("#form").setAttribute("style", "display: block");
}

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
