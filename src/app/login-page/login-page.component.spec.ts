import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page.component';
import { AuthenticationService } from '../authentication.service';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireMessagingModule,
        AngularFireAuthModule,
        RouterModule.forRoot([])
      ],
      providers: [AngularFireAuth],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthenticationService);
    fixture.detectChanges();
  });

  it('Devrait créer le component', () => {
    expect(component).toBeTruthy();
  });

  it('Devrait vérifier que la variable "Register" est initialisée à true', () => {
    expect(component.Register).toEqual(true)
  });

  it("Devrait vérifier que la variable 'Register' est à true apres l'appel de la fonction 'AlreadyRegister'", () => {
    component.AlreadyRegister();
    expect(component.Register).toBeTrue();
  });

  it("Devrait vérifier que la variable 'Register' est à false apres l'appel de la fonction 'NotRegister'", () => {
    component.NotRegister();
    expect(component.Register).toBeFalse();
  });

  it("Devrait vérifier l'appel de la fonction 'SignUp' de 'authService' dans la fonction 'sendNewUser' du component", async () => {
    spyOn(authService, 'SignUp');
    component.sendNewUser();
    expect(authService.SignUp).toHaveBeenCalled();
  });

  it("Devrait vérifier l'appel de la fonction 'SignIn' de 'authService' dans la fonction 'LoginUser' du component", async () => {
    spyOn(authService, 'SignIn');
    component.LoginUser();
    expect(authService.SignIn).toHaveBeenCalled();
  });
});
