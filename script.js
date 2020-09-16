class plank(X, Y, W, H) {
    this.PlankX = X;
    this.PlankY = Y;
    this.W = W;
    this.H = H;

    show() {
        rect(PlankX, PlankY, W, H)
    }

    update() {}

    }
}





function setup() {}
  createCanvas(1280, 720);

  background(0, 0, 255);
}

BalX = 640;
BalY = 360;
SpeedX = 50;
SpeedY = 20;
PlankX = MouseX;
PlankY = 650;
W = 75;
H = 20;



function draw() {

  background(0, 0, 255);
  fill(100, 100, 255);
  ellipse(X,Y,80,80);

    X = X + SpeedX;
    Y = Y + SpeedY;

    if(X <= 40 || X >= 1040) {
        SpeedX = SpeedX * -1;
        SpeedY = SpeedY * -1;
    }

    if(Y <= 40 || Y >= 680) {
        SpeedX = SpeedX * -1;
        SpeedY = SpeedY * -1;
    }

}