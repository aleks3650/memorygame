const RestartBtn = document.querySelector(".restart");
const NewGameBtn = document.querySelector(".New-game");
const Time = document.querySelector(".time");
const Moves = document.querySelector(".moves");
const Box = document.querySelectorAll(".box");
const WinScreen = document.querySelector(".Win-screen");
const InnerTime = document.querySelector(".inner-time");
const innerMoves = document.querySelector(".inner-moves");
let BoxID = [];
let MovesAmount = 0;
let MatrixPrimart = [];
let RandomNumber = -1;
while (MatrixPrimart.length < 8) {
  RandomNumber = Math.floor(Math.random() * 20);

  if (!MatrixPrimart.includes(RandomNumber)) {
    MatrixPrimart.push(RandomNumber);
  }
}

console.log(MatrixPrimart);
let MatrixCopy = MatrixPrimart;
MatrixCombined = MatrixPrimart.concat(MatrixCopy);
let Matrix = MatrixCombined;
Matrix = Matrix.sort((a, b) => 0.5 - Math.random());
console.log(Matrix);
let SetFirst = 0;
let SetNum = -1;
let WinCount = 0;
Box.forEach((BoxItem) => {
  BoxItem.addEventListener("click", (e) => {
    if (clickedOnToStart === true) {
      if (BoxItem.innerHTML === "") {
        BoxID = BoxItem.classList.value.substring(4);
        BoxItem.innerHTML = Matrix[BoxID - 1];
        // console.log(BoxID)
        SetFirst += 1;
        if (SetFirst % 2 === 1) {
          SetNum = Matrix[BoxID - 1];

          NumIndex = [BoxID - 1];
        }

        if (SetFirst % 2 === 0) {
          MovesAmount += 1;

          Moves.innerHTML = MovesAmount;

          if (Matrix[BoxID - 1] === SetNum) {
            console.log("MATCH");

            WinCount += 1;

            if (WinCount === 8) {
              WinScreen.style.display = "flex";

              InnerTime.innerHTML = "Time: " + String(TimeDisp);

              innerMoves.innerHTML = "Moves: " + String(MovesAmount);
            }
          } else {
            Box[BoxID - 1].innerHTML = "";
            Box[NumIndex].innerHTML = "";
          }
        }
      }
    }
  });
});

// NEW GAME
let clickedOnToStart = false;
NewGameBtn.addEventListener("click", function StartGame() {
  if (clickedOnToStart === false) {
    clickedOnToStart = true;
    let countTimeSec = 0;
    let countTimeMin = 0;
    setInterval(function () {
      countTimeSec += 1;
      if (countTimeSec % 60 === 0) {
        countTimeMin += 1;
        countTimeSec = 0;
      }
      if (countTimeSec > 9) {
        TimeDisp = countTimeMin + ":" + countTimeSec;
        Time.innerHTML = TimeDisp;
      } else {
        TimeDisp = countTimeMin + ":0" + countTimeSec;
        Time.innerHTML = TimeDisp;
      }
    }, 1000);
  }
});
// RESET GAME
RestartBtn.addEventListener("click", () => {
  location.reload();
});
