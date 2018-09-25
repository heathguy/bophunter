var pship;
var eships_level1[];

function setup() {
  createCanvas(400, 400);
	pship = new Playership();
	pship.respawn();

	for(var i = 0; i < 5; i++) {
		var eship = new Enemyship(random(0,width-20),random(-20,-100),3,0,1);
		eships_level1.push(eship);
	}
}

function draw() {
  background(51);
	pship.drawShip();
	pship.moveShip();
	
	for(var i = 0; i < eships_level1.length; i++) {
		eships_level1[i].drawShip();
		eships_level1[i].moveShip();
	}
}
