function randomButterflyPoint(displayWidth = 600) {
  let x;
  let y;

  while (true) {
    x = random(-1, 1);
    y = random(-1, 1);

    // Upper left wing
    let upperLeft =
      sq((x + 0.48) / 0.48) +
      sq((y + 0.28) / 0.42) < 1;

    // Upper right wing
    let upperRight =
      sq((x - 0.48) / 0.48) +
      sq((y + 0.28) / 0.42) < 1;

    // Lower left wing
    let lowerLeft =
      sq((x + 0.38) / 0.38) +
      sq((y - 0.35) / 0.42) < 1;

    // Lower right wing
    let lowerRight =
      sq((x - 0.38) / 0.38) +
      sq((y - 0.35) / 0.42) < 1;

    // Butterfly body
    let body =
      abs(x) < 0.07 &&
      y > -0.25 &&
      y < 0.65;

    if (
      upperLeft ||
      upperRight ||
      lowerLeft ||
      lowerRight ||
      body
    ) {
      break;
    }
  }

  let scale = displayWidth / 2;

  return {
    x: width / 2 + x * scale,
    y: height / 2 + y * scale
  };
}