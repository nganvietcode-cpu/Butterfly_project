let table;
let butterflyData = [];
let particles = [];
let currentIndex = 0;
let colors = [
  [255, 105, 180],  // pink
  [255, 0, 255],    // bright pink
  [0, 255, 255],    // tiffany blue
  [255, 51, 153],   // rose pink
  [255, 255, 255]   // white
];

// Map the data
async function setup() {
  createCanvas(800, 600);

  table = await loadTable('resource.csv', ',', 'header');

  for (let row of table.getRows()) {
    let selectedYear = row.getNum('Year');
    let count = row.getNum('Count');

    butterflyData.push({
      year: selectedYear,
      count: count
    });
  }

  print(butterflyData);

  for (let i = 0; i < 800; i++) {
    let pos = randomButterflyPoint(600);
    particles.push(new Particle(pos.x, pos.y));
  }
}

function draw() {
  background(20);

  if (butterflyData.length === 0) {
    return;
  }

  let currentData = butterflyData[currentIndex];

  let particleCount = round(
    map(currentData.count, 0, 101, 0, 800)
  );

  for (let i = 0; i < particleCount; i++) {
    particles[i].update();
    particles[i].show();
  }

  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(20);

  text("Year: " + currentData.year, width / 2, 35);
  text("Records: " + currentData.count, width / 2, 60);

  // Change year every 1.5 seconds
  if (frameCount % 90 === 0) {
    currentIndex++;

    if (currentIndex >= butterflyData.length) {
      currentIndex = 0;
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.homeX = x;
    this.homeY = y;

    this.angle = random(TWO_PI);
    this.speed = random(0.001, 0.003);
    this.moveAmount = random(0.5, 1.5);

    this.size = random(1.5, 4);
    this.colour = random(colors);
    this.twinkle = random(1000);
  }

  update() {
    this.angle += this.speed;

    this.x = this.homeX +
      cos(this.angle) * this.moveAmount;

    this.y = this.homeY +
      sin(this.angle) * this.moveAmount;
  }

  show() {
    let glow = map(
      sin(frameCount * 0.08 + this.twinkle),
      -1,
      1,
      80,
      255
    );

    drawingContext.shadowBlur = 10;

    drawingContext.shadowColor =
      `rgb(${this.colour[0]}, ${this.colour[1]}, ${this.colour[2]})`;

    noStroke();

    fill(
      this.colour[0],
      this.colour[1],
      this.colour[2],
      glow
    );

    circle(this.x, this.y, this.size);

    if (glow > 220) {
      fill(255, 255, 255, glow);
      circle(this.x, this.y, this.size * 0.3);
    }

    drawingContext.shadowBlur = 0;
  }
}
