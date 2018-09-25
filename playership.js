class Playership {
  
  // create a ship
  constructor(x,y,s,w,b,l) {
    this.pos = createVector(x, y);
    this.speed = s;
    this.weapon = w;
    this.numBombs = b;
    this.life = l;
		this.w = 20;
		this.h = 40;
  }
  
  // reset ship to default values
  respawn() {
    this.pos = createVector(width/2, height - this.h*2);
    this.speed = 1;
    this.weapon = 0;
    this.numBombs = 0;
    this.life = 100;
  }
  
  // draw the ship
  drawShip() {
		strokeWeight(2);
    stroke(255,0,0);
    fill(255);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }
	
	moveShip() {
		this.pos.x = constrain(mouseX, 0, width-this.w);
	}
}
