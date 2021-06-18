const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies

var s,si,bi,ai,us,ds,sl
var ma=100
var a=[]
var r

function preload(){
  si=loadImage("snake.png")
  bi=loadImage("back.jpg")
  ai=loadImage("apple.png")
  us=loadImage("Us.png")
  ds=loadImage("ds.png")
  sl=loadImage("snake left.png")
}

function setup() {
  createCanvas(1350,650);
  engine=Engine.create()
  world=engine.world
 s=createSprite(150,500)
 s.addImage(si)

}

function draw() {
  Engine.update(engine)
  background(bi);  
  if(keyDown("LEFT_ARROW")){
s.addImage(sl)
    s.x=s.x-3
  }
  if(keyDown("UP_ARROW")){
    s.addImage(us)
    s.y=s.y-3
  }
  if(keyDown("DOWN_ARROW")){
    s.addImage(ds)
    s.y=s.y+3
  }

  if(keyDown("RIGHT_ARROW")){
    s.addImage(si)
    s.x=s.x+3
  }
r=Math.round(random(1,4))
if (frameCount%100==0){
  a.push(new apple(random(0,1000),30,30))
}
for(var j=0;j<a.length;j++){
  a[j].display()
}
  drawSprites();
}