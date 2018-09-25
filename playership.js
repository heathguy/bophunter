class Playership() {
  this.life;
  this.weapon;
  this.numBombs;
  this.speed;
  this.pos;
  
  // create a ship
  constructor(x,y,s,w,b,l) {
    this.pos = createVector(x, y);
    this.speed = s;
    this.weapon = w;
    this.numBombs = b;
    this.life = l;
  }
  
  // reset ship to default values
  this.respawn = function() {
    this.pos = createVector(width/2, height - 50);
    this.speed = 1;
    this.weapon = 0;
    this.numBombs = 0;
    this.life = 100;
  }
  
  // draw the ship
  this.draw = function() {
    stroke(255,0,0);
    fill(255);
    rect(this.pos.x, this.pos.y, 20, 20);
  }
}
