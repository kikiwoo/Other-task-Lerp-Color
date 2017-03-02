// original code take from: https://p5js.org/examples/color-lerp-color.html
// edited by Kiki Woo 24Feb2017


function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  from = color(232,149,35, 0.2 * 255);
  to = color(173,185,199, 0.2 * 255);
  c1 = lerpColor(from, to, .33);
  c2 = lerpColor(from, to, .66);
  for (var i = 0; i < 15; i++) {
    fill(from);
    rect(random(58,532,150,67),random(height),
         random(58,532,150,67),random(height),
         random(58,532,150,67),random(height),
         random(58,532,150,67),random(height)),
    fill(c1);
    rect(random(0,451,59,222),random(height),
         random(0,451,59,222),random(height),
         random(0,451,59,222),random(height), 
         random(0,451,59,222),random(height));
    fill(c2);
    rect(random(568,445,32,454),random(height), 
         random(568,445,32,454),random(height),
         random(568,445,32,454),random(height), 
         random(568,445,32,454),random(height));
    fill(to);
    rect(random(60,71,300,300),random(height), 
         random(60,71,300,300),random(height),
         random(60,71,300,300),random(height), 
         random(60,71,300,300),random(height));
  }
  frameRate(5);
}