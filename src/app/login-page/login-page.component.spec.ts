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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register variable is ok', () => {
    expect(component.Register).toEqual(true)
  });

  it('should get register state to true', () => {
    component.AlreadyRegister();
    expect(component.Register).toBeTrue();
  });

  it('should get register state to false', () => {
    component.NotRegister();
    expect(component.Register).toBeFalse();
  });

  it('should call login service ', async () => {
    spyOn(authService, 'SignIn');

    component.LoginUser();
    expect(authService.SignIn).toHaveBeenCalled();
  });
});
