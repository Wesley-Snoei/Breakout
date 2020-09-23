function setup() {
  createCanvas(1280, 720);

  background(0, 0, 255);
}


balX = 640;
balY = 360;
speedX = 50;
speedY = 20;
plusX = 0;
plusY = 0;

class PlusDing {
    constructor(x, y) {
        this.x = plusX;
        this.y = plusY
    }
}

function draw() {

  background(0, 0, 255);
  fill(100, 100, 255);
  ellipse(balX, balY, 80, 80);

    balX = balX + speedX;
    balY = balY + speedY;

    if(balX <= 40 || balY >= 1040) {
        speedX = speedX * -1;
        speedY = speedY * -1;
    }

    if(Y <= 40 || Y >= 680) {
        speedX = speedX * -1;
        speedY = speedY * -1;
    }

    for(var i = 0; i < plusjes.length; i++) [
        show.plusjes[i];
    ]

}