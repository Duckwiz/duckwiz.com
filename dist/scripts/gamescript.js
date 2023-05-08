//colors
const priColor = "#E9F2E3",
  secColor = "#4b7024",
  terColor = "#2b4b09";

  //const vars
const cardWidth = 100,
  cardHeight = 150,
  cardFillet = 8,
  cards = [],
  cardLim = 15,
  dropDia = 100,
  plusLength = 20,
  dropX = 100,
  cardTypes = ['Glaggle', 'Square', 'Triangle'];

//let vars
let dropY,
  dropFill = secColor;

class Card {
  constructor(id) {
    this.id = id;
    this.type = cardTypes[Math.floor(random(cardTypes.length))];
    this.xPos = 100 + random([1, 2, 3, 4, 5])*20;
    this.yPos = 200 + random([1, 2, 3, 4, 5])*20;
    this.dx;
    this.dy;
    this.fill = secColor;
    this.move = false;
  }
}
  
function setup() {
  createCanvas(windowWidth, windowHeight-100);
  dropY = height-100;
  textAlign(CENTER);
}

function draw() {
  background(priColor);
  rectMode(CENTER);

  //bin rectangle
  stroke(terColor);
  strokeWeight(5);
  noFill();
  rect(width/2, height, width-400, 200);

  //make cards
  cards.forEach(card => {
    strokeWeight(1);
    fill(card.fill);
    rect(card.xPos, card.yPos, cardWidth, cardHeight, cardFillet);
    fill(priColor);
    text(card.type, card.xPos, card.yPos-64);
    switch(card.type) {
      case 'Glaggle':
        circle(card.xPos, card.yPos-10, 60);
        fill(terColor);
        ellipse(card.xPos-8, card.yPos-17, 7, 15);
        ellipse(card.xPos+8, card.yPos-17, 7, 15);
        strokeWeight(4);
        noFill();
        arc(card.xPos, card.yPos-12.5, 40, 45, .25, Math.PI-.25);
        break;
      case 'Square':
        rect(card.xPos, card.yPos-10, 60, 60);
        break;
      case 'Triangle':
        triangle(card.xPos+30, card.yPos+20, card.xPos-30, card.yPos+20, card.xPos, card.yPos-40);
        break;
      default:
        fill(priColor);
        text("broken :(", card.xPos, card.yPos);
    }
  })

  //card drop
  noStroke();
  fill(dropFill);
  circle(dropX, dropY, 100);
  fill(secColor);
  text((cardLim-cards.length)+"/"+cardLim, dropX, dropY+(dropDia/2)+15);
  stroke(priColor);
  strokeWeight(5);
  line(dropX-plusLength, dropY, dropX+plusLength, dropY);
  line(dropX, dropY-plusLength, dropX, dropY+plusLength);
}

function mousePressed() {
  cards.toReversed().every(card => {
    //update difference from card
    card.dx = mouseX - card.xPos;
    card.dy = mouseY - card.yPos;

    //check click pos & toggle move
    if (Math.abs(card.dx)<(cardWidth/2) && Math.abs(card.dy)<(cardHeight/2)) {
      card.move = true;
      card.fill = terColor;

      //move card to front
      cards.push(card);
      cards.splice(cards.indexOf(card), 1);
      return false;
    }
      card.move = false;
      card.fill = secColor;
      return true;
  })

  //check on drop
  if(dist(mouseX, mouseY, dropX, dropY)<dropDia/2){
    dropFill = terColor;
    if (cards.length<cardLim) {
      const newCard =  new Card(cards.length);
      cards.push(newCard);
    }
  }
}

function mouseReleased() {
  cards.forEach(card => {
    card.move = false;
    card.fill = secColor;
  })
  dropFill = secColor;
}


function mouseDragged() {
  //card moves relative to mouse
  cards.forEach(card => {
    if (card.move) {
      card.xPos = mouseX - card.dx;
      card.yPos = mouseY - card.dy;
    }
  })
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight-100);
  dropY = height-100;
}