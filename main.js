'use strict';
const cardArray = [
  {
    name: 'artichoke',
    img: 'img/artichoke.png',
  },
  {
    name: 'artichoke',
    img: 'img/artichoke.png',
  },
  {
    name: 'corn',
    img: 'img/corn.png',
  },
  {
    name: 'corn',
    img: 'img/corn.png',
  },
  {
    name: 'broccoli',
    img: 'img/broccoli.png',
  },
  {
    name: 'eggplant',
    img: 'img/eggplant.png',
  },
  {
    name: 'eggplant',
    img: 'img/eggplant.png',
  },
  {
    name: 'beettroot',
    img: 'img/beetroot.png',
  },
  {
    name: 'beettroot',
    img: 'img/beetroot.png',
  },
  {
    name: 'green-beans',
    img: 'img/green-beans.png',
  },
  {
    name: 'green-beans',
    img: 'img/green-beans.png',
  },
  {
    name: 'broccoli',
    img: 'img/broccoli.png',
  },
];

let winCondition;
const grid = document.querySelector('.grid');
let cardChoosen;
let imgChoosen;
let cardChoosenID;
const init = function () {
  cardArray.sort((a, b) => 0.5 - Math.random());
  cardChoosen = [];
  imgChoosen = [];
  winCondition = 0;
  cardChoosenID = [];
};
init();
const finish = function () {
  alert('you win');
  window.location.reload();
};
const checkMatch = function () {
  if (cardChoosen[0].name === cardChoosen[1].name) {
    imgChoosen[0].src = 'img/white.png';
    imgChoosen[1].src = 'img/white.png';
    imgChoosen[0].removeEventListener('click', flipCard);
    imgChoosen[1].removeEventListener('click', flipCard);
    cardChoosen = [];
    imgChoosen = [];
    cardChoosenID = [];

    winCondition++;
    if (winCondition === 6) {
      setTimeout(finish, 200);
    }
  } else {
    imgChoosen[0].src = 'img/blank1.jpg';
    imgChoosen[1].src = 'img/blank1.jpg';
    imgChoosen = [];
    cardChoosen = [];
    cardChoosenID = [];
  }
};

const flipCard = function () {
  const cardID = this.getAttribute('data-id');

  if (cardChoosen.length < 2 && !cardChoosenID.includes(cardID)) {
    imgChoosen.push(this);
    cardChoosen.push(cardArray[cardID]);
    cardChoosenID.push(cardID);
    this.setAttribute('src', cardArray[cardID].img);
    if (cardChoosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
};
function createBoardGame() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src', 'img/blank1.jpg');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}
createBoardGame();
