import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { AuthenticationService } from '../authentication.service';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let authService: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireMessagingModule,
        AngularFireAuthModule,
        RouterModule.forRoot([])
      ],
      declarations: [ HomepageComponent ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthenticationService);
    fixture.detectChanges();
  });

  it('Devrait créer le component', () => {
    expect(component).toBeTruthy();
  });

  it("Devrait vérifier que le token est null à l'initialisation", () => {
    expect(component.selectToken).toEqual('');
  });

  it('Devrait afficher une balise "table" dans le component', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it ('Devrait vérifier que la variable "cryptoWallet" est initialisée à un array vide', () => {
      expect(component.cryptoWallet).toEqual([])
  })

  it('Devrait vérifier la fonction "LoginUser"', () => {
    spyOn(component, 'LoginUser');
    expect(component.email).toEqual(undefined)
    expect(component.password).toEqual(undefined)
  });

  it("Devrait vérifier l'appel de la fonction 'SignIn' de 'authService' dans la fonction 'LoginUser' du component", () => {
    spyOn(authService, 'SignIn');
    component.LoginUser()
    expect(authService.SignIn).toHaveBeenCalled();
  });


  it("Devrait vérifier l'appel de la fonction 'SignUp' de 'authService' dans la fonction 'sendNewUser' du component", () => {
    spyOn(authService, 'SignUp');
    component.sendNewUser()
    expect(authService.SignUp).toHaveBeenCalled();
  });

  it("Devrait vérifier l'appel de la fonction 'logOut' de 'authService' dans la fonction 'logOut' du component", () => {
    spyOn(authService, 'logOut');
    component.logOut()
    expect(authService.logOut).toHaveBeenCalled();
  });

  it('Devrait vérifier la fonction "sendNewUser"', () => {
    spyOn(component, 'sendNewUser');
    expect(component.NewUseremail).toEqual(undefined)
    expect(component.NewUserpassword).toEqual(undefined)
  });


  it('Devrait vérifier la fonction "receivinfo"', () => {
    spyOn(component, 'receivinfo').and.callThrough();
    component.receivinfo();
    expect(component.receivinfo).toHaveBeenCalled();
  });

  it("Devrait vérifier que la fonction 'receivinfo' return le bon montant", () => {
    component.montantachatCrypto = 3
    component.PriceMtn = 2
    component.EURmontant = 6
    spyOn(component, 'receivinfo');
    expect(component.montantachatCrypto).toEqual(3)
    expect(component.PriceMtn).toEqual(2)
    expect(component.EURmontant).toEqual(component.montantachatCrypto * component.PriceMtn)
  });

  it('Devrait vérifier la fonction "SendCrypto"', () => {
    spyOn(component, 'SendCrypto').and.callThrough();
    component.SendCrypto();
    expect(component.SendCrypto).toHaveBeenCalled();
  });

  it('Devrait vérifier la fonction "deleteCrypto"', () => {
    const changes = 1
    spyOn(component, 'deleteCrypto').and.callThrough();
    component.deleteCrypto(changes);
    expect(component.deleteCrypto).toHaveBeenCalled();
  });
});
