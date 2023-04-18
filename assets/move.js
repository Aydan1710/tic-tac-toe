
const box = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#resetBtn');
const xscore = document.querySelector('#xscore');
const oscore = document.querySelector('#oscore');
let xScoreCount = 0;
let oScoreCount = 0;
let turn = 'X';


const checkWin = () => {

  if (box[0].textContent !== '' && box[0].textContent === box[1].textContent && box[1].textContent === box[2].textContent) {
    return true;
  }
  if (box[3].textContent !== '' && box[3].textContent === box[4].textContent && box[4].textContent === box[5].textContent) {
    return true;
  }
  if (box[6].textContent !== '' && box[6].textContent === box[7].textContent && box[7].textContent === box[8].textContent) {
    return true;
  }
 
  if (box[0].textContent !== '' && box[0].textContent === boxes[3].textContent && box[3].textContent === box[6].textContent) {
    return true;
  }
  if (box[1].textContent !== '' && box[1].textContent === boxes[4].textContent && box[4].textContent === box[7].textContent) {
    return true;
  }
  if (box[2].textContent !== '' && box[2].textContent === box[5].textContent && box[5].textContent === box[8].textContent) {
    return true;
  }

  if (box[0].textContent !== '' && box[0].textContent === box[4].textContent && box[4].textContent === box[8].textContent) {
    return true;
  }
  if (box[2].textContent !== '' && box[2].textContent === box[4].textContent && box[4].textContent === box[6].textContent) {
    return true;
  }
  return false;
};

const checkTie = () => {
  let count = 0;
  box.forEach((box) => {
    if (box.textContent !== '') {
      count += 1;
    }
  });
  if (count === 9) {
    return true;
  }
  return false;
};

const endGame = (win) => {
  box.forEach((box) => {
    box.removeEventListener('click', handleClick);
  });
  if (win) {
    if (turn === 'X') {
      xScoreCount += 1;
      xScore.textContent = xScoreCount;
    } else {
      oScoreCount += 1;
      oScore.textContent = oScoreCount;
    }
  }
};

const handleClick = (event) => {
  const box = event.target;
  if (box.textContent === '') {
    box.textContent = turn;
    if (checkWin()) {
      endGame(true);
      return;
    }
    if (checkTie()) {
      endGame(false);
      return;
    }
    turn = turn === 'X' ? 'O' : 'X';
  }
};

const resetGame = () => {
  box.forEach((box) => {
    box.textContent = '';
    box.addEventListener('click', handleClick, { once: true });
  });
  turn = 'X';
};


resetBtn.addEventListener('click', resetGame);

box.forEach((box) => {
  box.addEventListener('click', handleClick, { once: true });
});
const boxes = document.querySelectorAll('.box');
let isXTurn = true;
let xScore = 0;
let oScore = 0;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleClick(e) {
  const box = e.target;
  if (box.textContent !== '') return;

  if (isXTurn) {
    box.textContent = 'X';
  } else {
    box.textContent = 'O';
  }
  isXTurn = !isXTurn;
  checkForWin();
}

function checkForWin() {
  winningCombos.forEach((combo) => {
    const box1 = box[combo[0]];
    const box2 = box[combo[1]];
    const box3 = box[combo[2]];
    if (box1.textContent === 'X' && box2.textContent === 'X' && box3.textContent === 'X') {
      xScore++;
      document.getElementById('xscore').textContent = xScore;
      reset();
    }
    if (box1.textContent === 'O' && box2.textContent === 'O' && box3.textContent === 'O') {
      oScore++;
      document.getElementById('oscore').textContent = oScore;
      reset();
    }
  });
}

function reset() {
  box.forEach((box) => {
    box.textContent = '';
  });
  isXTurn = true;
}

box.forEach((box) => {
  box.addEventListener('click', handleClick);
});

document.getElementById('resetBtn').addEventListener('click', reset);

