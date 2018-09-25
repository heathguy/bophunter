var pship;
var eships_level1[];

var bullets[];

function setup() {
  createCanvas(400, 400);
	pship = new Playership();
	pship.respawn();

	for(var i = 0; i < 5; i++) {
		var eship = new Enemyship(random(0,width-20),random(-20,-100),3,0,1);
		eships_level1.push(eship);
	}
}

function keyPressed() {
	pbullet = new Bullet(pship.pos.x,pship.pos.y,0,-3,0);
	bullets.push(pbullet);
}

function draw() {
  background(51);
	pship.drawShip();
	pship.moveShip();
	
	for(var i = 0; i < eships_level1.length; i++) {
		eships_level1[i].drawShip();
		eships_level1[i].moveShip();
	}
	
	for(var j = 0; j < bullets.length; j++) {
		bullets[j].drawBullet();
		bullets[j].moveBullet();
		
		if(bullets[j].enemy) {
			boolean hitPlayer = bullets[j].checkHitPlayer(pship);
			if(hitPlayer) {
				pship.life -= 10;
			}
		}
		else {
			for(var k = eships_level1 - 1; k > 0; k--) {
				boolean hitEnemy = bullets[j].checkHitEnemy(eships_level1[k]);
				if(hitEnemy) {
					eships_level1[k].splice(k,1);
				}
			}
		}
	}
}
