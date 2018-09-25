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
  
  checkHitPlayer(playerShip) {
    if(this.pos.x >= playerShip.pos.x && this.pos.x <= playerShip.pos.x+playerShip.w) {
      if(this.pos.y >= playerShip.pos.y && this.pos.y <= playerShip.pos.y+playerShip.h) {
        return true;
      }
    }
    return false;
  }
  checkHitEnemy(enemyShip) {
    if(this.pos.x >= enemyShip.pos.x && this.pos.x <= enemyShip.pos.x+enemyShip.w) {
      if(this.pos.y >= enemyShip.pos.y && this.pos.y <= enemyShip.pos.y+enemyShip.h) {
        return true;
      }
    }
    return false;
  }
}
