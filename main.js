
// $(function(event){
//   console.log("dom is ready");


//1. Create and assign variables & retrieve the necessary HTML elements
var cards = document.querySelectorAll('.memory-card');
var cardFlipped = false;
var firstCard;
var secondCard;
var points = 0;
var newGame;
var opacity = document.getElementById("opacityD");
var h1Res = document.getElementById("h1Res");
var pRes = document.getElementById("pRes");
var result = document.getElementById("result");
var infobar = document.getElementById("info-bar");
var gameBoard = document.getElementsByClassName('gameBoard');
var okayButton = document.getElementById("okayButton");



  cards.forEach(card => card.addEventListener('click', flipCard));
//Make the flipping work

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


    // matching logic

    if (firstCard.dataset.num === secondCard.dataset.num){
      //if match remove event listener
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      points +=  3;
      // console.log("you have" + points + " " + "points");
      displayPoints = document.getElementById("points");
      displayPoints.innerHTML = ("Points:" + " " + points);



    }else {

setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  displayPoints = document.getElementById("points");
  displayPoints.innerHTML = ("Points:" + " " + points);


}, 1000);


  }

}

}



// reset

newGame = document.getElementById("new");
newGame.addEventListener("click", resetGame);

function resetGame(){

  window.location.reload();
  points = 0;
  shuffle();
  this.classList.toggle('flip');

}

//randomiztion

(function shuffle(){
  cards.forEach(card => {

    var randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;


  });


})();

// timer & display modal

startTimer();

function startTimer(){

  var timeleft = 61;
  var completeTime = setInterval(function(){
  document.getElementById("timer").innerHTML = timeleft + "secs";
  timeleft -= 1;
  if (points == 24 && timeleft > 1){
    document.getElementById("timer").innerHTML = "All Cards Completed";
    // console.log("you have scored max points" +  points);
	   result.style.display = "block";
     h1Res.innerHTML = "Well Done!";
     pRes.innerHTML = "You've scored " + points + " points.";
    clearInterval(completeTime);


  } else if(timeleft <= 0){
    clearInterval(completeTime);
    document.getElementById("timer").innerHTML = "Timeout";
    // console.log("you have scored " +  points + "try harder");
    result.style.display = "block";
    h1Res.innerHTML = "Try again!";
    pRes.innerHTML = "you scored " + points + " points in 60 seconds";



  }

}, 1000);

}


okayButton.addEventListener("click",okayClick);

function okayClick() {
	result.style.display = "none";
  resetGame()
}
