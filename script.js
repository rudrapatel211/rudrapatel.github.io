//Link to an easy color picker:
//https://www.w3schools.com/colors/colors_picker.asp

function preload(){
  background = loadImage('snowback.jpg'); //load image of background on startup
}

function setup() { //setup the canvas
  createCanvas(700, 700);
  angleMode(RADIANS); 
}//end setup

function draw() {
  image(background, 0, 0, 700, 700); //show the snowbackground`  

  //color/outline/thickness/size of words
  fill(0);
  noStroke();
  textSize(15);
  text("Animated Snowman", 40, 80);
  text("ICS3U-60", 40, 95);
  text("Rudra Patel", 40, 110);

  //color/outline/thickness of snowman body
  fill(255);
  noStroke();
  strokeWeight(0);
  circle(350, 370, 165);
  circle(350, 250, 125);
  circle(350, 150, 100);

  //color/outline/thickness of hands
  stroke(128, 64, 0);
  strokeWeight(4);
  line(288, 245, 212, 190);
  line(mouseX, mouseY, 410, 245, 490, 190);


  //color/outline/thickness of eyes
  fill(0);
  noStroke();
  circle(328, 129, 8);
  circle(368, 129, 8);

  //color/outline/thickness of nose
  fill(255, 117, 26)
  stroke(0);
  strokeWeight(0.5);
  triangle(350, 141, 340, 154, 350, 151)

  //color/outline/thickness of buttons
  fill(153, 77, 0);
  stroke(0);
  strokeWeight(2);
  arc(350, 215, 10, 10, 4, PI + QUARTER_PI, PIE);
  arc(350, 240, 10, 10, 4, PI + QUARTER_PI, PIE);
  arc(350, 265, 10, 10, 4, PI + QUARTER_PI, PIE);
  triangle(350, 320, 335, 350, 360, 350)
  triangle(350, 380, 335, 410, 360, 410)

  //color/outline/thickness of mouth
  fill(0);
  stroke(0);
  strokeWeight(4);
  rect(321, 173, 53, 2);

  //color/outline/thickness of hat
  fill(0);
  stroke(0);
  strokeWeight(0);
  arc(350, 100, 100, 80, PI, TWO_PI);
  rect(333, 30, 35, 40);

}//end draw










function mousePressed(){
  print(mouseX + ",   " + mouseY);
}//end mousePressed
