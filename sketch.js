var ball,database,position;
var ballPosition;
function setup() {
  database=firebase.database();
  createCanvas(500,500);
  ball=createSprite(250, 250, 20, 20);
  ball.shapeColor='red';
  ballPosition = database.ref("ball/position");
  ballPosition.on("value",readPosition);
}

function draw() {
  background(255,255,255);  

if(position!==undefined){



  if(keyDown(LEFT_ARROW)){
  changePosition(-2,0);
  }
  if(keyDown(RIGHT_ARROW)){
	changePosition(2,0);  
}
if(keyDown(UP_ARROW)){
	changePosition(0,-2);
}
if(keyDown(DOWN_ARROW)){
	changePosition(0,2); 
}
}
  drawSprites();
}


function readPosition(data){
position=data.val();
ball.x = position.x
ball.y = position.y

}

function changePosition(x,y){
	database.ref("ball/position").set({
		'x':position.x+x,
		'y':position.y+y	})
	
}