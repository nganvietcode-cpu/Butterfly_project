
let particles = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(20);

  for (let particle of particles) {
    particle.update();
    particle.show();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);

    this.vx = random(-1, 1);
    this.vy = random(-1, 1);

    this.size = random(3, 8);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;

    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  show() {
    noStroke();
    fill(255);

    circle(this.x, this.y, this.size);
  }
}
