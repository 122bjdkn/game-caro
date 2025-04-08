const firebaseConfig = {
    apiKey: "AIzaSyCFIifvlouwIKV4m3gtZSnAVMx8KC9k1TE",
    authDomain: "carogame-ce9f5.firebaseapp.com",
    databaseURL: "https://carogame-ce9f5-default-rtdb.firebaseio.com",
    projectId: "carogame-ce9f5",
    storageBucket: "carogame-ce9f5.firebasestorage.app",
    messagingSenderId: "694853754232",
    appId: "1:694853754232:web:22d3ad772a20093189fc8d",
    measurementId: "G-PJC6361WSJ"
  };
const size = 15;
let board = [];
let currentPlayer = 'X';

function initBoard() {
  const boardEl = document.getElementById('board');
  boardEl.innerHTML = '';
  board = Array(size).fill(null).map(() => Array(size).fill(''));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener('click', handleClick);
      boardEl.appendChild(cell);
    }
  }
}

function handleClick(e) {
  const row = +e.target.dataset.row;
  const col = +e.target.dataset.col;

  if (board[row][col] !== '') return;

  board[row][col] = currentPlayer;
  e.target.textContent = currentPlayer;

  const winCells = checkWin(row, col);
  if (winCells) {
    document.getElementById('status').textContent = `🎉 Người chơi ${currentPlayer} thắng!`;
    highlightWin(winCells);
    showFireworks();
    document.querySelectorAll('.cell').forEach(cell => cell.removeEventListener('click', handleClick));
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('player').textContent = currentPlayer;
}

function checkWin(row, col) {
  const directions = [[1,0], [0,1], [1,1], [1,-1]];
  for (let [dx, dy] of directions) {
    let cells = [[row, col]];
    for (let i = 1; i < 5; i++) {
      const r = row + dx * i;
      const c = col + dy * i;
      if (board[r]?.[c] === currentPlayer) cells.push([r, c]);
      else break;
    }
    for (let i = 1; i < 5; i++) {
      const r = row - dx * i;
      const c = col - dy * i;
      if (board[r]?.[c] === currentPlayer) cells.push([r, c]);
      else break;
    }
    if (cells.length >= 5) return cells;
  }
  return null;
}

function highlightWin(cells) {
  for (let [r, c] of cells) {
    const selector = `.cell[data-row="${r}"][data-col="${c}"]`;
    const cell = document.querySelector(selector);
    cell.classList.add('win');
  }
}

function resetGame() {
  currentPlayer = 'X';
  document.getElementById('status').innerHTML = 'Người chơi: <span id="player">X</span>';
  document.querySelector('.fireworks')?.remove();
  initBoard();
}

function showFireworks() {
  const fireworks = document.createElement('div');
  fireworks.className = 'fireworks';
  fireworks.innerHTML = `
    <iframe src="https://embed.lottiefiles.com/animation/113529" style="width:100%; height:100%; border:none;"></iframe>
  `;
  document.body.appendChild(fireworks);
}

window.onload = initBoard;
