class RainDrop{
  constructor(x, h){
    this.x = x;
    this.y = 0;
    
    this.h = h;
    this.w = h / 4;
    
    this.speed = map(noise(0, h), 0, 1, 3, 9);
    
  }
  
  show(){
    fill(31, 86, 242);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    this.move();
  }
  
  move(){
    this.y += this.speed;
    this.x += this.speed / 20;
  }
  
  endDrop(){
    let b = false;
 
    if (this.y > height){
      b = true;
    }
    
    return b;
  }
  
}

let droplets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240, 240, 242);
  
  for (let i = 0; i < 200; i ++){
    droplets.push(new RainDrop(random(-5, width), random(10, 15)));
  }
}


function draw() {
  background(240, 240, 242, 60);
  
  for(let i = 0; i < droplets.length; i++){
    droplets[i].show();
    
    if (droplets[i].endDrop()){
      console.log(droplets[i].endDrop());
      droplets[i] = new RainDrop(random(-5, width), random(10, 15));
    }
  }
}
