
// $(function(event){
//   console.log("dom is ready");


//1. Create and assign variables & retrieve the necessary HTML elements
var cards = document.querySelectorAll('.memory-card');
var cardFlipped = false;
var firstCard;
var secondCard;
var points = 0;
var newGame;

  cards.forEach(card => card.addEventListener('click', flipCard));
//2. Make the flipping work

function flipCard(){

  this.classList.toggle('flip');
  // console.log(this);
  // console.log("clicked");
  if (!cardFlipped) {
    //this means player has clicked for first time
    cardFlipped =  true;
    firstCard = this; // (cardFlipped)
    // console.log(this);
    // console.log(cardFlipped, firstCard);
  }else {
    cardFlipped = false;
    secondCard = this; // (cardFlipped)


    // 2. matching logic

    if (firstCard.dataset.num === secondCard.dataset.num){
      //if match remove event listener
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      points = points + 1;
      // console.log("you have" + points + " " + "points");
      displayPoints = document.getElementById("points");
      displayPoints.innerHTML = ("Points:" + " " + points);

    }else {

setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');

}, 1000);


  }

}

}



newGame = document.getElementById("new");
newGame.addEventListener("click", newClick);

function newClick(){

  window.location.reload();
  points = 0;


}

// 3. randomization/shuffling of cards

(function shuffle(){
  cards.forEach(card => {

    var randomPos = Math.floor(math.random * 12);
    card.style.order = randomPos;


  });


});

// background music


// reset

// points


// timer
