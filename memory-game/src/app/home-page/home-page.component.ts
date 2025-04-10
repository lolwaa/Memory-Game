import { Component, Output, EventEmitter } from '@angular/core';
import { CardPageOneComponent } from '../card-page-one/card-page-one.component';
import { FormsModule,NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
;

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardPageOneComponent, FormsModule, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  @Output() navigate = new EventEmitter<string>();

  goToCardPage(){
    this.navigate.emit('card');
  }
 
}
