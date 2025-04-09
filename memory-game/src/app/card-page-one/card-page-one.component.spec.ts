import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPageOneComponent } from './card-page-one.component';

describe('CardPageOneComponent', () => {
  let component: CardPageOneComponent;
  let fixture: ComponentFixture<CardPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPageOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
