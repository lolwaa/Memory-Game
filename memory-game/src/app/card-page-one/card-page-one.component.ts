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
    { value: 1, flipped: false },
    { value: 2, flipped: false },
    { value: 1, flipped: false },
    { value: 2, flipped: false },
    { value: 3, flipped: false },
    { value: 4, flipped: false },
    { value: 3, flipped: false },
    { value: 4, flipped: false }
  ];

  flippedCards: number[] = [];
  isGameWon = false;
  constructor() {
    this.shuffleCards();
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap elements
    }
  }

  flipCard(index: number): void {
    const card = this.cards[index];


    if (card.flipped) return;

    card.flipped = true;
    this.flippedCards.push(index);

    if (this.flippedCards.length === 2) {
      const [firstIndex, secondIndex] = this.flippedCards;
      const firstCard = this.cards[firstIndex];
      const secondCard = this.cards[secondIndex];

      if (firstCard.value !== secondCard.value) {
        setTimeout(() => {
          this.cards[firstIndex].flipped = false;
          this.cards[secondIndex].flipped = false;
          this.flippedCards = [];
        }, 1000);
      } else{

      this.flippedCards = [];
    }
    this.checkWin();
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
}
