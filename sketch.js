var colors = ["#E06A4E", "#DEB853", "#789F8A", "#5A3D2B"]; 
var nose_colors = ["#FAEBCD"];
var balls = []
var ball
class ball_class{
  constructor(args){
    this.p = args.p || {x:width/2,y:height/2};
    this.r = args.r || random(50,120)
    this.color = args.color || random(colors)
    this.v = args.v || {x:random(-2,2),y:random(-2,2)}
    this.nose_color = args.nose_color || random(nose_colors)
    
    this.b = args.b || random(50, 120)
  }
  draw(){
   
      noStroke();
      fill(this.color); 
      rectMode(CENTER);
      rect(this.p.x, this.p.y, this.b, this.b, this.b / 2, this.b / 2, 0, 0); 
  
      fill("#000000");
      circle(this.p.x - this.b / 6, this.p.y - this.b / 50, this.b / 7.5); 
      circle(this.p.x + this.b / 6, this.p.y - this.b / 50, this.b / 7.5); 
  
      fill(this.nose_color);
      ellipse(this.p.x, this.p.y + this.b / 7.5, this.b / 2.2, this.b / 3); 
  
      fill(this.color); 
      ellipse(this.p.x, this.p.y + this.b / 11, this.b / 5, this.b / 7); 
    }
  
  
  update(){
   
      this.p.x=this.p.x+this.v.x
      this.p.y=this.p.y+this.v.y

      if(this.p.x<0){
        this.v.x=-this.v.x}
      if(this.p.x>width){
         this.v.x=-this.v.x}
      if(this.p.y<0){
        this.v.y=-this.v.y}
      if(this.p.y>height){
         this.v.y=-this.v.y}

      }
      isBallInRange() {
        let d = dist (mouseX,mouseY,this.p.x,this.p.y)
            if(d<this.b){
            return true
            }
            else{
            return false
            }
          }
}


    

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i = 0; i < 100; i++){
    ball = new ball_class({
      v: {x: random(-2, 2), y: random(-2, 2)},
      p: {x: random(0, width), y:random(0,height)},
      a: {x: 0, y: 0}
     
     
    })
    balls.push(ball)
  }
}
var score=0
function draw() {
  background("#FAEBCD")
  fill(0)
  textSize(50)
  text("歷代の鼴鼠の姿をした獣の巨人討伐數:"+score,50,80)
  fill(ball.color)
  for(j = 0; j < balls.length; j++){
    ball = balls[j]
    ball.draw()
    ball.update()
    if(ball.isBallInRange()){
    ball.v.x=ball.v.x+0.8
    ball.v.y=ball.v.y+0.8
    }
   
  }
}

function mousePressed(){
  //ball = new ball_class({
    //v: {x: random(-2, 2), y: random(-2, 2)},
    //p: {x:mouseX, y:mouseY},
    //a: {x: 0, y: 0}
    
   
  //})
  //balls.push(ball)
  for(let ball of balls){
    if(ball.isBallInRange()){
      balls.splice(balls.indexOf(ball),1)
      score=score+1
    }
  }
  fill("#f00")
  textSize(70)
  text(score,50,0)
}