# tp_processing_SoSe2023
Kursmaterial TP Processing (p5js) Sommersemester 2023
Kursdokumentation TP Processing TH|W–S FB Gestaltung  

## 31.03.2023 – Einfache Formen und Farben
- [TP 1A](https://einraum-design.github.io/tp_processing_SoSe2023/TP1_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP1_A/sketch.js)
- [TP 1B](https://einraum-design.github.io/tp_processing_SoSe2023/TP1_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP1_B/sketch.js)

### Kommentare  
werden vom Compiler ignoriert:
```
// one line comment
```

``` 
/* block comment 
 long 
 comment 
 to 
 explaine
 something  
or to 
ignore 
a longer
part of 
the application */
```


### Sketchgröße

Die Fenstergröße einer Anwendung mit der createCanvas() Funktion definiert.
Der erste Parameter ist die Skechtbreite, der zweite die Höhe. Alle Größen- und Positionsangaben sind Pixelmaße.
```
createCanvas(800, 600);
```
  
Die createCanvas Function wird bin bestimmte Fällen noch mit einem dritten Parameter aufgerufen.
zB. Wenn der Sketch ein PDF erstellt, eine 3D Szene gezeigt oder ein performanterer Renderer genutzt werden soll.



### Shapes

Die Rechtecks Funktion kann mit 
- 4 Parametern: xPosition, yPosition, width, height
- 5 Parametern: xPosition, yPosition, width, height, cornerRadius
- 8 Parametern: xPosition, yPosition, width, height, cornerRadius1, cornerRadius2, cornerRadius3, cornerRadius4
aufgerufen werden.


Standartmäßig wird das Rechteck von der linken oberen Ecke als Referenzpunkt gezeichnet.

Über den rectMode() lässt sich das aber auch auf Zeichnen von der Mitte aus umstellen.

```
rectMode(CENTER); // alle Rechtecke nach dem Aufruf werden von der Rechtecks Mitte aus
rectMode(CORNER); // (Processing default)alle Rechtecke nach dem Aufruf werden von der linken oberen Ecke aus gezeichnet
```

Über den ellipseMode() lässt sich das aber auch auf Zeichnen von der linken oberen Ecke aus umstellen.

```
ellipseMode(CENTER); // (Processing default) alle Rechtecke nach dem Aufruf werden von der Rechtecks Mitte aus
ellipseMode(CORNER); // alle Rechtecke nach dem Aufruf werden von der linken oberen Ecke aus gezeichnet
```

Wechsel vom ellipseMode / rectMode wirkt sich immer auf die nach dem Aufruf gezeichneten Formen aus.


Hinweis zu arc():
Die Winkel von Start und Ende vom Bogen werden nicht in Grad sondern in Bogenmaß erwartet. 
Ihr könnt euch mit der Funktion radians(GRADZAHL) eine Gradzahl in Bogenmaß umrechnen lassen.
```
// arc (xPosition, yPosition, breite, höhe, Startwinkel, Endwinkel, Zeichentyp)  
arc(300, 300, 400, 400, radians(45), radians(360-45), PIE);
```


Colors
Standardeinstellung von Processing ist, dass alle Formen mit einer weißen Füllfarbe und schwarzer Kontur mit 1px Strichstärke gezeichnet werden.

Um eigene Farbe für Formen festzulegen gibt es die fill und stroke Funktionen.
Standartmäßig nutzt Processing das RGB Farbsystem und erwartet Zahlen im 8Bit Bereich als Farbwerte: 0 - 255
(Ihr könnt den Zahlenbereich und auch das Farbsystem mit der coloMode() Funktion umstellen.)

fill() und stroke() können mit 
- 1 Parameter aufgerufen werden: Grauwert - schwarz bis weiß - 0 - 255
- 3 Parametern: rotwert, grünwert, blauwert -> je 0 - 255
- 4 Parametern: rotwert, grünwert, blauwert, alpha -> je 0 - 255. Alpha definiert die Transparenz.

fill() und stroke() müssen jeweils bevor eine Form gezeichnet wird festgelegt werden. Nach einem Aufruf werden alle Formen in diesen Farben gezeichnet, bis fill() oder stroke() mit neuen Werten aufgerufen werden.

Mit noFill() und noStroke() kann auch keine Füllfarb oder keine Kontur festgelegt werden.



## Grundstruktur setup & draw. Systemvariablen
- [TP 2A](https://einraum-design.github.io/tp_processing_SoSe2023/TP2_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP2_A/sketch.js)
- [TP 2B](https://einraum-design.github.io/tp_processing_SoSe2023/TP2_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP2_B/sketch.js)


### function setup & draw

```
function setup(){

}

function draw(){

}
```
Die beiden Funktionen sind das Grundgerüst jeder Processing Anwendung.
Alles was im Funktionsrumpf der function setup() – zwische den geschweiften Klammern steht – wird zum Programmstart einmal ausgeführt. Hier werden alles Grundeinstellungen für das Programm gesetzt und das Canvas Elemet erstellt.

```
createCanvas(600, 400);

```

Nach Ablauf der function setup() wird der Inhalt der function draw() ausgeführt. 
Alles was in der function draw() steht wird immer wieder auf's Neue ausgeführt – standartmäßig 60 Mal pro Sekunde. 
Die function draw() beginnt meistens mit der background function, die alles aus dem vorherigen Frame übermalt und für jeden neuen Frame eine neue Zeichenfläche bereitstellt.

### Processing Variablen

Processing bietet mehrere Variablen die von Processing vordefiniert sind.
Diese könne einfach als Platzhalter im Skript eingesetzt werden und werden während der Laufzeit 
des Programmes mit den aktuellen Werten ersetzt.

mouseX -> Maus x - Position innerhalb vom Sketch  Zahlenwert Ganzzahlen (Integer)
mouseY -> Maus y - Position innerhalb vom Sketch  Zahlenwert Ganzzahlen (Integer)
width ->  Sketchbreite Zahlenwert Ganzzahlen (Integer)
height -> Sketchhöhe Zahlenwert Ganzzahlen (Integer)


width und height sollten verwendet werden, um Positionen von graphischen Elementen in der Anwendung unabhängig von der Fenstergröße zu berechnen.

frameCount -> Zähler der nach jedem function draw Druchgang hochgezählt wird.  Zahlenwert Ganzzahlen (Integer)

- Funktionen mit Rückgabetyp
Am Ende des Funktionsaufrufs muss ein ein „return" mit dem Rückgabewert stehen. 
die random() Funktion liefert zB. ein Fließkommerzahl zurück ...



## 14.04.2023 – Variablen & if-Bedingungen
- [TP_3A](https://einraum-design.github.io/tp_processing_SoSe2023/TP3_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP3_A/sketch.js)
- [TP_3B](https://einraum-design.github.io/tp_processing_SoSe2023/TP3_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP3_B/sketch.js)


***elementaren Variablen***
- Ganzzahlen Integers int --> 1, 3, 34, -23
- Fließkommazahlen FloatingPointNumbers float --> 0.234, 123.234, 1.0, -234.234
- Boolean bool --> true / false
- Character char --> 'a', 'b', ' ', '+', '\'' (escapen von sonderzeichen über \Sonderzeichen)

***Objekte***
- Textkette String --> "Hello World", " ", "8ohasdf"
- p5.image (PImage) Bilder
- p5.font (PFont) Schriften

Variablen Definition in den meisten Programmiersprachen
```
// Typ variablenNamen ( = Wert);
int alter = 18;
```

Variabeln Definition in p5js
```
let myXPos = 40.0;
let myYPos = 60;
let xSpeed, ySpeed;
```

### if-Bedingungen 
Mit if-Bedinungen lassen sich ein Programm steuern. 
Über Bedingungen lässt sich steuern, welche Programmteile ausgeführt werden.

```
// if-Bedingungen
// if(CONDITION) { wenn CONDITION erfüllt ist, wird alles im Rumpf (zwischen den {}) ausgeführt}
if(mouseX > 300){
    ellipse(mouseX, mouseY, 50, 50);
}
```

Um Bedingungen zu formulieren gibt es ***Vergleichsoperatoren***
- A > B  --> wenn A größer als B ist
- A < B  --> wenn A kleiner als B ist
- A >= B --> wenn A größer oder gleich B ist
- A <= B --> wenn A kleiner oder gleich B ist
- A == B --> wenn der Wert von A gleich B ist
- A === B --> wenn der Wert von A gleich B ist und der Typ von A und B gleich ist
- A != B --> wenn der Wert von A nicht gleich B ist
  
  
Um mehrere Bedingung miteinander zu verbinden gibt es ***Verknüpfungsoperatoren***
- CONDITION_A && CONDITION_B --> Wenn Bedingung A UND Bedingung B erfüllt sind
- CONDITION_A || CONDITION_B --> Wenn Bedingung A ODER Bedingung B (oder beide) erfüllt sind

## 14.04.2023 – Erweiterung if-Bedingungen
- [TP_4A](https://einraum-design.github.io/tp_processing_SoSe2023/TP4_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP4_A/sketch.js)
- [TP_4B](https://einraum-design.github.io/tp_processing_SoSe2023/TP4_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP4_B/sketch.js)


### If - else
Jeder if-Bedingung kann ein else Block angehängt werden. 
Ist die Bedingung nicht erfüllt, wird der else-Block ausgeführt.

```
if(mouseIsPressed) {
    // wenn Maus gedrückt ist Füllfarbe rot
    fill(255, 0, 0);
} else {
    // ansonsten Füllfarbe weiß
    fill(255);
}
```


Zusätzlich können noch mehrere "else if" Blöcke an eine if-Bedingung angehängt werden.
Dann werden die Bedingungen der Reihe nach gecheckt, bis eine Bedingung erfüllt ist.
Sobald eine erfüllt ist, werden alle weitern "else if" und die "else" einfach übersprungen.
Es wird also immer nur ein Block ausgeführt.

```

if(CONDITION1) {
    // ist die erste Bedingung erfüllt wird der erste Block ausgeführt und alles weiteren Abfragen werden übersprungen
} else if(CONDITION2) {
    // ist die zweite Bedingung erfüllt wird der zweite Block ausgeführt und alles weiteren Abfragen werden übersprungen
} ...
else {
    // wenn alle Bedingungen nicht erfüllt waren, wird der else Block ausgeführt
}
```

## 21.04.2023 – Event Listener & Erweiterung if-Bedingungen
- [TP_5A](https://einraum-design.github.io/tp_processing_SoSe2023/TP5_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP5_A/sketch.js)
- [TP_5B](https://einraum-design.github.io/tp_processing_SoSe2023/TP5_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP5_B/sketch.js)


„Schaltflächen" innerhalb des Canvas Elements lassen sich in p5js auf die Weise erstellen, dass abgefragt wird, ob der Cursor über der Position der definierten Fläche ist.

Bei rechteckigen Buttons lässt sich von allen vier Seiten abfragen, 
Ob die Maus-X-Position größer als die linke Seite und kleiner als die rechte Kantenposition des Rechtecks ist. Analog dazu Ober- und Unterkante des Rechtecks.

```
if (mouseX >= xButton && 
    mouseX <= xButton + wButton && 
    mouseY >= yButton && 
    mouseY <= yButton + hButton) {
        // Maus ist über dem Rechteck
}
```

Bei einem Kreis kann man einfach den Abstand des Cursors zum Mittelpunkt des Kreises berechnen und daran den Status festlegen.

```
// mit der dist() funktion den Abstand 
// zwischen Mauskoordinaten und Button Mittelpunkt berechnen:
float cursorToEllipseCente = dist(mouseX, mouseY, xCircleButton, yCircleButton);

if (cursorToEllipseCente < diameterCircleButton/2) {
    // Maus ist über dem Kreis
}
```

Ein „hover“ Effekt für die Schaltflächen lässt sich erstellen, indem in der function draw – also in jedem Frame – abgefragt wird ob die Maus über der Fläche ist und die Darstellung damit verändert wird. 


Soll sich der Status des Buttons auf ein Event (zB. Click) hin umschalten, muss beachtet werden, dass der Wechsel nicht innerhalb der void draw mehrfach ausgeführt wird.
Deshalb gibt es Event Händler, die auf bestimmte Events hin jeweils einmal ausgeführt werden. Diese stehen außerhalb der function setup() und der function draw().
```
// wird in dem Moment aufgerufen, wenn die Maustaste gedrückt wird.
void mousePressed() {
    // der Inhalt im Funktionsrumpf wird pro Click einmal ausgeführt.
}
```

Weiter Eventhandler für Maus- und TastaturEvents sind in der Referenz zu finden.


## 21.04.2023 – HTML - Grundstruktur jeder Webseite
- [TP_6A](https://einraum-design.github.io/tp_processing_SoSe2023/TP6_A/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP6_A/sketch.js)
- [TP_6B](https://einraum-design.github.io/tp_processing_SoSe2023/TP6_B/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2023/blob/main/docs/TP6_B/sketch.js)

Eine kurze Übersicht zu den HTML Basics findet ihr hier: [www.w3schools.com](https://www.w3schools.com/html/html_basic.asp)


Um einen p5js Canvas an eine bestimmte Stelle im HTML Aufbau der Webseite zu platzieren ist der einfachste Weg:
- Ein div Element mit einer ID an der gewünschten Stelle in der index.html Datei platzieren.

```
<div id="myCanvas"></div>
```

- im p5js Sketch angeben, dieses div als parent für das canvas Element bestimmen:

```
// Canvas erstellen:
let cnv = createCanvas(800, 600);
// Das Element mit der ID "myCanvas" als Elternobjekt setzen:
cnv.parent("myCanvas");
```

Im p5js Sketch lassen sich beliebig weitere HTML Elemente erstellen. Der Vorteil der HTML Element ist, dass sie im Gegensatz von auf dem Canvas gezeichneten Formen direkte Event Listener haben. Das heißt, dass wir direkt auf MouseOver oder Click reagiert werden kann. 
Beispiel Button:

```
// Canvas erstellen:
let button = createButton("click me");
// An HTML Objekte kann direkt ein EventListener gehängt werden. Auf jeden Mausklick auf den button wird ausgeführt, wass in den Klammer angegeben wird.
button.mousePressed( /* to do */ );
```

In den Klammern vom EventListener kann entweder eine *anonyme Funktion* oder ein Funktionsname angegeben werden:
```
// anonyme Funktion:
button.mousePressed( ()=> { console.log("button wurde geklickt");} );

// Funktionsaufruf
button.mousePressed(meineFunktion); // meineFunktion(); muss dann im Programm definiert werden
```