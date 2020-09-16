/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

X = 640;
Y = 360;
SpeedX = 20;
SpeedY = 20;


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