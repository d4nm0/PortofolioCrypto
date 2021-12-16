import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

import { MobilepageComponent } from './mobilepage.component';
import { AuthenticationService } from '../authentication.service';

describe('MobilepageComponent', () => {
  let component: MobilepageComponent;
  let fixture: ComponentFixture<MobilepageComponent>;
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
      declarations: [ MobilepageComponent ],
      providers: [
        HttpClient
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilepageComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthenticationService);
    fixture.detectChanges();
  });

  it('Devrait créer le component', () => {
    expect(component).toBeTruthy();
  });

  it('Devrait afficher une balise "table" dans le component', () => {
    const fixture = TestBed.createComponent(MobilepageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it ('Devrait vérifier que la variable "cryptoWallet" est initialisée à un array vide', () => {
    expect(component.cryptoWallet).toEqual([])
  });

  it("Devrait vérifier l'appel de la fonction 'logOut' de 'authService' dans la fonction 'logOut' du component", () => {
    spyOn(authService, 'logOut');
    component.logOut()
    expect(authService.logOut).toHaveBeenCalled();
  });

  it('Devrait vérifier que la variable "montantTotal" est initialisée à 0', () => {
    expect(component.montantTotal).toEqual(0);
  });

  it('test function receivinfo', () => {
    component.Amount = 1
    component.selectToken = 'caps'

    spyOn(component, 'receivinfo').and.callThrough();
    component.receivinfo();
    expect(component.receivinfo).toHaveBeenCalled();
  });

  it('test function SendCrypto', () => {
    component.Amount = 1
    component.selectToken = 'caps'

    spyOn(component, 'SendCrypto').and.callThrough();
    component.SendCrypto();
    expect(component.SendCrypto).toHaveBeenCalled();
  });
});
