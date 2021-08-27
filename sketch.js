var database;
var chickenImg,chicken;
var table;
var hole1,hole2,hole3,hole4,hole5,hole6,hole7,hole8,hole9;
var player;
function preload(){
  chickenImg=loadImage("images/chicken.png")
}


function setup(){
  createCanvas(1000,500);

  // var value = random(1, 9);
  // switch(value){
  //   case 1: chicken = new Chicken(200, 150);
  //   case 2: chicken = new Chicken(230, 150); //row-wise
  //   case 3: chicken = new Chicken(230, 180); // column-wise
  // }
  
  chicken = new Chicken(200, 100);
  player=new Player()

  hole1 = new Hole(200,100)
  hole2 = new Hole(500,100)
  hole3 = new Hole(800,100)
  



}
function draw(){
    background("brown")
    chicken.showChicken();
    player.display();
    hole1.display();
    hole2.display();
    hole3.display();
    chicken.body.isTouching(player.body)
  drawSprites();
}


//hammer-> function (hit) -> function mousePressed ( check if chicken is touching hammer then kill chicken)
//table -> 
//hole ->