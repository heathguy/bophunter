class Bullet {
  constructor(x,y,velx,vely,enemy) {
    this.pos = createVector(x,y);
    this.vel = createVector(velx,vely);
    this.enemy = enemy;
    }
    
  drawBullet() {
    noStroke();
    if(this.enemy) {
      fill(255,0,0);
     }
     else{
      fill(20,255,255);
      }
      point(this.pos.x, this.pos.y);
    }
    
  moveBullet() {
    this.pos.add(this.vel);
    }
}
