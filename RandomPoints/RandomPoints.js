let yoff = 0.0;
let xoff = 0.0;

class PointMonkey{
  constructor(x, y, px, py){
    this.posy = py;
    this.posx = px;
    this.xoff = x;
    this.yoff = y;
    
    this.xpass = x;
    this.ypass = y;
  }
  
  show(){ 
    stroke(231, 0, 41);
    line(this.xoff, this.yoff, this.xpass, this.ypass);
    
    this.move();
  }
  
  move(){
    this.xpass = this.xoff;
    this.ypass = this.yoff;
    
    this.yoff += random(-5, 5) * this.posy;
    this.xoff += random(-5, 5) * this.posx;
    
    if (this.yoff < 0 || this.yoff > height){
      if (this.yoff < 0){
        this.yoff = 6;
      }
      else{
        this.yoff = height -6;
      }
      this.yoffadder *= -1;
      this.posy *= -1;
    }
    
    if (this.xoff < 0 || this.xoff > width){
      if (this.xoff < 0){
        this.xoff = 6;
      }
      else{
        this.xoff = width - 6;
      }
      
      this.xoffadder *= -1;
      this.posx *= -1;
    }
  }
}

const ps = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  for (let i=0; i < 500; i++){
    ps.push(new PointMonkey(random(0, width), random(0, height), i%2 == 1 ? 1 : -1, Math.round(random(1, 2)) % 2 == 0 ? 1 : -1));
  }
}

function draw() {
  background(0, 20);
 
  for(let i of ps){
    i.show();
  }
}
