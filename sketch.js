//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
	//load images here
  dog = loadImage('Dog.png');
  happyDog = loadImage('happydog.png');
  database = firebase.database;
  
}

function setup() {
	createCanvas(500, 500);
  
  databae = firebase.database();
  
  
  dog = createSprite(200,300);
  dog.addImage("Dog.png");
  
  happyDog.addImage("happydog.png");
  happyDog.scale = 0.5;
  
  dog.scale = 0.5;

    foodStock = database.ref("Food");
    foodStock.on("value",readStock);

}
    function draw() {  
  background(46,139,87);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!");
  
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  
  drawSprites();
  
  foodStock.on("value",readStock);
  //add styles here
  textSize = 30;
  fill("red");
  stroke("yellow");
  strokeWeight(4);
  
    text("Press UP_ARROW key to feed Drago Milk",250,100);

}
  
