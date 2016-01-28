//5. snowman

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){

  background(255,204,229);
  //body

  strokeWeight(2);
  ellipse(80,200,120,120); //thrid circle
  ellipse(80,130,100,100); //second circle
  ellipse(80,60,80,80); //frist circle

  //eyes
  fill("black");
  ellipse(90,50,6,6); //right eye
  ellipse(70,50,6,6); //left eye
  //nose
  fill("orange");
  noStroke();
  triangle(76,57,83,57,79,77);

}
