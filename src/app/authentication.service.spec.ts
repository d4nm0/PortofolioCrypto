import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { CalculSeeComponent } from './calcul-see/calcul-see.component';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  
  const routes: Routes = [
    {
      component: LoginPageComponent,
      path: '',
    },
    {
      component: CalculSeeComponent,
      path: 'connected',
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireMessagingModule,
        AngularFireAuthModule,
        RouterModule.forRoot(routes)
      ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  afterEach(() => {
    service.logOut();
  });


  it('Devrait créer le component', () => {
    expect(service).toBeTruthy();
  });

  it("Devrait connecter l'utilisateur avec de bon identifiants", async (done) => {
    service.SignIn('test@test.com','testtest');

    service.afAuth.authState.subscribe(
      user => {
        if (user) {
          expect(user).toBeTruthy();
          done();
        }
      }
    );
  });

  it("Devrait rejeter l'utilisateur avec de mauvais identifiants", async (done) => {
    service.SignIn('testvdsvsdvsd@test.com','testsdvsdvsdvtest');
    
    service.afAuth.authState.subscribe(
      user => {
        expect(user).toBeFalsy();
        done();
      }
    );
  });
});
