class Enemyship {
  
  // create a ship
  constructor(x,y,s,w,l) {
    this.pos = createVector(x, y);
    this.speed = s;
    this.weapon = w;
    this.life = l;
		this.w = 20;
		this.h = 40;
  }
  
  // draw the ship
  drawShip() {
		strokeWeight(2);
    stroke(255,0,0);
    fill(0,255,255);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }
	
	moveShip() {
		this.pos.y += this.speed;
	}
}
