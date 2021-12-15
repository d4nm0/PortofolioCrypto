import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

import { ModalSeeDetailTokenComponent } from './modal-see-detail-token.component';
import { Wallet } from '../models/wallet';

describe('ModalSeeDetailTokenComponent', () => {
  let component: ModalSeeDetailTokenComponent;
  let fixture: ComponentFixture<ModalSeeDetailTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireMessagingModule,
        AngularFireAuthModule,
        RouterModule.forRoot([])
      ],
      declarations: [ ModalSeeDetailTokenComponent ],
      providers: [ NgbActiveModal ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSeeDetailTokenComponent);
    component = fixture.componentInstance;
    component.wallet = new Wallet();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input var is ok', () => {
    expect(component.wallet.PriceMovement1d).toEqual(0)
  });

  it('test function close modal', () => {
    spyOn(component, 'closeModal');
    component.closeModal()
    expect(component.closeModal).toHaveBeenCalled();
  });

  it('test  close modal', () => {
    const fixture = TestBed.createComponent(ModalSeeDetailTokenComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('modal-content')).toBeNull();
  });

});
