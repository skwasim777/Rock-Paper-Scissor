let userScore = 0;
let compScore = 0;

const choises = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePa = document.querySelector("#user-score");
const compScorePa = document.querySelector("#comp-score");
const genCompChoise = () => {
  const option = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};
const drwaGame = () => {
  console.log("game was draw..");
  msg.innerHTML = "Game draw! Play again";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoise, compChoise) => {
  if (userWin) {
    userScore++;
    userScorePa.innerText = userScore;
    msg.innerHTML = `You win. your ${userChoise} beat ${compChoise}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePa.innerText = compScore;
    msg.innerHTML = `You lost. ${compChoise} beat ${userChoise}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoise) => {
  const compChoise = genCompChoise();
  if (userChoise === compChoise) {
    drwaGame();
  } else {
    let userWin = true;
    if (userChoise === "rock") {
      // scissor,paper
      userWin = compChoise === "paper" ? false : true;
    } else if (userChoise === "paper") {
      // rock,scissor
      userWin = compChoise === "scissor" ? false : true;
    } else {
      userWin = compChoise === "rock" ? false : true;
    }
    showWinner(userWin, userChoise, compChoise);
  }
};
choises.forEach((choise) => {
  choise.addEventListener("click", () => {
    const userChoise = choise.getAttribute("id");
    // console.log("choise was killed...");
    playGame(userChoise);
  });
});
