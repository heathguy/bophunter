var pship;

var eship1;

function setup() {
  createCanvas(400, 400);
	pship = new Playership();
	pship.respawn();
	
	eship1 = new Enemyship(random(0,width),-50,3,0,1);
}

function draw() {
  background(51);
	pship.drawShip();
	pship.moveShip();
	
	eship1.drawShip();
	eship1.moveShip();
}
