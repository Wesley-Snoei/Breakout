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
Om = 0;
Plin = 0;

/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {

  background('blue');
  // stel vulkleur in
  fill(100, 100, 255);
  ellipse(X,Y,80,80);
  // teken een cirkel
  ellipse(X, Y, 80, 80);

  if(Om = 0) {
    Plin = -1;
  }
  
  if(Om = 1) {
      Plin = 1;
  }

  if(Y = 40) {
      Om = 1;
      Y = Y - 1;
  }
  
  if(Y = 680) {
      Om = 0;
      Y = Y + 1;
  }

    if(40 < Y > 680) {
      Y = Y + Plin;
  }

  ellipse(X,Y,80,80);
}