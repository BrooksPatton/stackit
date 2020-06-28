let waterColor;
let wallColor;
let worldUnitSize;

function setup() {
  createCanvas(1920, 1080);

  waterColor = color("#44a1d3");
  wallColor = color("brown");
  worldUnitSize = 10;
}

function draw() {
  drawBackground();
}

function drawBackground() {
  fill(waterColor);
  rect(0, height - worldUnitSize, width, worldUnitSize);
  fill(wallColor);
  rect(0, 0, worldUnitSize, height);
  rect(width - worldUnitSize, 0, worldUnitSize, height);
  rect(0, 0, width, worldUnitSize);
}
