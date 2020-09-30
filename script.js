function setup() {
  createCanvas(1280, 720);

  background(0, 0, 255);
}



class spelElement {
    x;
    y;

    constructor(_x,_y) {
        this.x = _x;
        this.y = _y;
    }
}



class bal extends spelElement {
    speedX;
    speedY;

    contructor(_x, _y, _speedX, _speedY) {
        super(_x, _y);
        this.speedX = _speedX;
        this.speedY = _speedY;
    }

    show() {
        ellipse(_x, _y, 80, 80);
    }

    update() {
        _x = _x + _speedX;
        _y = _y + _speedY;
    }
}

class blok extends spelElement {
    w;
    l;

    constructor(_x, _y, _w, _l) {
        super(_x, _y);
        this.w = _w;
        this.l = _l;
    }

    show() {
        rect(_x, _y, _w, _l);
    }
}



function draw() {

  background(0, 0, 255);
  fill(100, 100, 255);

  var ballen = [new bal(80, 160, 1, 1)];
  var blokken = [new blok(500, 500, 70, 130)];

  for(var i = 0; i < 0; i++) {
      show().ballen[i];
      update().ballen[i];
  }

  for(var i = 0; i < 0; i++) {
      show().blokken[i];
  }

}