var humboldt=0




function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(255,153,mouseY); //an RGB color for the canvas' background
  //circle
  stroke(255,255,0) // an RGB color for the circle's border
  strokeWeight(3)
  fill(101,144,88,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(480,80,100,100); // center of canvas, 20px dia
  fill(229,204,255);
  ellipse(300,humboldt,230,230);
  humboldt+1;
  
  // TRIANGLE
  stroke(180,mouseY,255); // an RGB color for the triangle's border // border of triangle change colors
  strokeWeight(6); // Thickness of the triangle border
  fill(204,humboldt,255); // Color of the triangle
  triangle(humboldt,humboldt,300,300,100,300); // dimensions and positioning of the triangle on the canvas
  humboldt+1;

  // RECTANGLE
  stroke(255,255,0); // an RGB Color of the rectangle border
  strokeWeight(3); // thickness of the rectangle border
  fill(255,102,255); // color of the rectangle
  rect(50,humboldt,40,40); // rectangle dimensions and placement on canvas
  humboldt+1;

  // LINE
  stroke(204,153,255); // an RGB color of the line's border
  strokeWeight(8); // Thickness of the line's border
  fill(38,79,200); // the RGB color of the line
  line(mouseX,255,330,mouseY); // mouse dragging element


  // TEXT ELEMENTS

  fill(255,100,130); // corresponds to the text element on top
  stroke(255,255,255);
  strokeWeight(1);
  textFont("Bauhaus93");
  textSize(40);
  text('CLICK CLICK CLICK',45,100);
  
  fill(255,200,60); // corresponds to the text element positioned on the bottom
  stroke(255,255,255);
  strokeWeight(5);
  textSize(50);
  text('This has been fun',90,430);
  text('It was a pleeeeasure',30,460);
  text('to meet you', 96,490);


}

function mousePressed() {

if(humboldt>=200){
  humboldt=0;
}else{
  humboldt=humboldt+5;
}


}