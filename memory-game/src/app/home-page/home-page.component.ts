import { Component } from '@angular/core';
import { CardPageOneComponent } from '../card-page-one/card-page-one.component';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}
  CardPageOneComponent = false;
  toggleComponent(){
    this.CardPageOneComponent = this.CardPageOneComponent;
  }



}
