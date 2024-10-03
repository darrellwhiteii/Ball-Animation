const width = window.innerWidth;
const height = window.innerHeight;

const numBalls = 25;
let nosolution = false; // Initialize the variable

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 70%, 50%)`;
}

function createBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.style.left = `${Math.random() * (width - 50)}px`;
  ball.style.top = `${Math.random() * (height - 50)}px`;
  ball.style.backgroundColor = getRandomColor();
  document.body.appendChild(ball);
  return ball;
}

function animateBall(ball) {
  let dx = (Math.random() - 0.5) * 8;
  let dy = (Math.random() - 0.5) * 8;

  function moveBall() {
    let x = parseFloat(ball.style.left);
    let y = parseFloat(ball.style.top);

    if (x + dx > width - 50 || x + dx < 0) {
      dx = -dx;
      ball.style.backgroundColor = getRandomColor();
    }
    if (y + dy > height - 50 || y + dy < 0) {
      dy = -dy;
      ball.style.backgroundColor = getRandomColor();
    }

    ball.style.left = `${x + dx}px`;
    ball.style.top = `${y + dy}px`;

    requestAnimationFrame(moveBall);
  }

  moveBall();
}

for (let i = 0; i < numBalls; i++) {
  const ball = createBall();
  animateBall(ball);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (nosolution) {
    console.log("No solution found.");
  } else {
    console.log("Solution exists.");
  }
}
