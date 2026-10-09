
let particles = [];

let colors = [
  [255, 105, 180],  // Pink
  [255, 0, 255],    // Bright pink
  [0, 255, 255],    // Tiffany blue
  [255, 51, 153],   // Rose pink
  [255, 255, 255]   // White
];

let centerX = 400;
let centerY = 300;
let radius = 220;

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(20);

  noFill();
  stroke(255, 100);
  strokeWeight(1);
  circle(centerX, centerY, radius * 2);

  for (let particle of particles) {
    particle.update();
    particle.show();
  }
}

class Particle {
  constructor() {
    this.angle = random(TWO_PI);
    this.distance = radius * sqrt(random());

    this.x = centerX + cos(this.angle) * this.distance;
    this.y = centerY + sin(this.angle) * this.distance;

    this.vx = random(-0.5, 0.5);
    this.vy = random(-0.5, 0.5);

    this.size = random(3, 8);
    this.colour = random(colors);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    let dx = this.x - centerX;
    let dy = this.y - centerY;
    let distance = sqrt(dx * dx + dy * dy);

    if (distance + this.size / 2 >= radius) {
      let nx = dx / distance;
      let ny = dy / distance;

      let dot = this.vx * nx + this.vy * ny;

      if (dot > 0) {
        this.vx -= 2 * dot * nx;
        this.vy -= 2 * dot * ny;
      }

      this.x = centerX + nx * (radius - this.size / 2);
      this.y = centerY + ny * (radius - this.size / 2);
    }
  }

  show() {
    noStroke();

    fill(
      this.colour[0],
      this.colour[1],
      this.colour[2]
    );

    circle(this.x, this.y, this.size);
  }
}
