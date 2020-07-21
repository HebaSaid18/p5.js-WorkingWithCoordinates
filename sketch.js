/* eslint-disable no-undef, no-unused-vars */

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {
  // Set the background to black and turn off the fill color
  background(0);
  noFill();

  // Coordinates are used for drawing all shapes, not just points.
  // Parameters for different functions are used for different
  // purposes. For example, the first two parameters to line()
  // specify the coordinates of the first endpoint and the second
  // two parameters specify the second endpoint
  stroke(0, 153, 255);
  x = 0;
  y = height * 0.5;

  while (x !== width) {
    line(x, y, x + 20, height * 0.25);
    line(x + 20, height * 0.25, x + 40, y);
    x = x + 40;
  }
}
