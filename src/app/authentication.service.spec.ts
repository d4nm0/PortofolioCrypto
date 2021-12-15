import { TestBed, fakeAsync } from '@angular/core/testing';
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
    service.logOut();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*it('should be not connected', (done) => {
    service.SignIn('testvdsvsdvsd@test.com','testsdvsdvsdvtest').catch(
      user => {
        console.log("test")
        expect(user).toBeFalsy();
        done();
      }
    );
  });

  it('should be connected', fakeAsync(() => {
    service.SignIn('test@test.com','testtest');
    tick(1);
    console.log("conn")
    console.log(localStorage.getItem('user'))
    expect(localStorage.getItem('user')).toBeTruthy();
  }));*/
});
