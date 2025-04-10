import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-page-one',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './card-page-one.component.html',
  styleUrl: './card-page-one.component.css'
})
export class CardPageOneComponent {
  cards = [
    { image: 'assets/icons8-avocado-64.png', flipped: false },
    { image: 'assets/icons8-blueberry-64.png', flipped: false },
    { image: 'assets/icons8-avocado-64.png', flipped: false },
    { image: 'assets/icons8-blueberry-64.png', flipped: false },
    { image: 'assets/icons8-ice-cream-cone-64.png', flipped: false },
    { image: 'assets/icons8-kawaii-pizza-64.png', flipped: false },
    { image: 'assets/icons8-ice-cream-cone-64.png', flipped: false },
    { image: 'assets/icons8-kawaii-pizza-64.png', flipped: false }
  ];

  flippedCards: number[] = [];
  isGameWon = false;
  isGameOver = false;
  attempts = 0;
  constructor() {
    this.shuffleCards();
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; 
    }
  }

  flipCard(index: number): void {
    if (this.isGameOver || this.cards[index].flipped) return;
    const card = this.cards[index];


    // if (card.flipped) return;

    card.flipped = true;
    this.flippedCards.push(index);

    if (this.flippedCards.length === 2) {
      const [firstIndex, secondIndex] = this.flippedCards;
      const firstCard = this.cards[firstIndex];
      const secondCard = this.cards[secondIndex];

      if (firstCard.image !== secondCard.image) {
        this.attempts++;
        setTimeout(() => {
          this.cards[firstIndex].flipped = false;
          this.cards[secondIndex].flipped = false;
          this.flippedCards = [];

          if (this.attempts >= 2){
            this.isGameOver = true
            alert("Sorry! You Lost Try Again")
          }
        }, 1000);
      } else{

      this.flippedCards = [];
      this.checkWin();
    }
    
  }

}
checkWin() {
  this.isGameWon = this.cards.every(card => card.flipped);
  if (this.isGameWon) {
    setTimeout(() => {
      alert("Congratulations! You've won the game!");
    }, 500);
  }


  
}
restartGame(){
  this.cards.forEach(card=> card.flipped = false)
  this.shuffleCards()
  this.attempts =0;
  this.flippedCards = [];
  this.isGameOver = false;
  this.isGameWon = false;
}
}
