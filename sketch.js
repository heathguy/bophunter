var pship;

function setup() {
  createCanvas(400, 400);
	pship = new Playership();
	pship.respawn();
}

function draw() {
  background(51);
	pship.drawShip();
	pship.moveShip();
}
