import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Wallet } from '../models/wallet';

import { MobileLineComponent } from './mobile-line.component';

describe('MobileLineComponent', () => {
  let component: MobileLineComponent;
  let fixture: ComponentFixture<MobileLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLineComponent);
    component = fixture.componentInstance;
    component.wallet = new Wallet();
    fixture.detectChanges();
  });

  it('Devrait créer le component', () => {
    expect(component).toBeTruthy();
  });
  it('Devrait vérifier que la variable "PriceMovement1d" est initialisée à 0', () => {
    expect(component.wallet.PriceMovement1d).toEqual(0)
  });
});
