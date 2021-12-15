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

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selected token is null', () => {
    expect(component.selectToken).toEqual('');
  });

  it('should render table', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it ('cryptoWallet variable is define', () => {
      expect(component.cryptoWallet).toEqual([])
  })

  it('test function loginUser', () => {
    spyOn(component, 'LoginUser');
    expect(component.email).toEqual(undefined)
    expect(component.password).toEqual(undefined)
  });

  it('test function sendNewUser', () => {
    spyOn(component, 'sendNewUser');
    expect(component.NewUseremail).toEqual(undefined)
    expect(component.NewUserpassword).toEqual(undefined)
  });

  it('test function receivinfo', () => {
    spyOn(component, 'receivinfo');
    component.montantachatCrypto = 3
    component.PriceMtn = 2
    component.EURmontant = 6
    expect(component.montantachatCrypto).toEqual(3)
    expect(component.PriceMtn).toEqual(2)
    expect(component.EURmontant).toEqual(component.montantachatCrypto * component.PriceMtn)
  });

  it('test function SendCrypto', () => {
    spyOn(component, 'SendCrypto');
    expect(component.valuetoken).toEqual(undefined)
  });
});
