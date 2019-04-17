
// $(function(event){
//   console.log("dom is ready");


//1. Create and assign variables & retrieve the necessary HTML elements
var cards = document.querySelectorAll('.memory-card');
var cardFlipped = false;
var firstCard;
var secondCard;


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

    if (firstCard.dataset.num == secondCard.dataset.num){
      //if match remove event listener
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);

    }else {

setTimeout(() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');

}, 1000);


  }

}

}


  cards.forEach(card => card.addEventListener('click', flipCard));




// 3. randomization/shuffling of cards

// 4. background music

//5. reset

// points
