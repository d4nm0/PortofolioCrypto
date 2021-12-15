import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireMessagingModule,
        AngularFireAuthModule,
        RouterModule.forRoot([])
      ]
    });
    service = TestBed.inject(AuthenticationService);

    localStorage.removeItem('user')

  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('user not exist', () => {
    service.SignIn('tedzeezst@test.com','testzerrzeezrezreztest');
    expect(localStorage.getItem('user')).toBeNull();
  });





});
