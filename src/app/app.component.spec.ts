import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MessagingService } from "./messaging.service";
import { ServiceWorkerModule } from '@angular/service-worker';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireMessagingModule,
        AngularFireAuthModule,
        RouterModule.forRoot([]),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
      ],
      declarations: [
        AppComponent
      ],
      providers: [MessagingService],
    }).compileComponents();
  });

  it('Devrait créer le component applicatif', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Devrait vérifier que la balise "title" affiche "PortofolioCrypto"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PortofolioCrypto');
  });

  it("Devrait vérifier que la variable 'displayToken' soit vide après l'appel de la fonction 'permitToNotify'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.permitToNotify();
    expect(app.displayToken).toEqual('')
  });

  it("Devrait vérifier que la variable 'email' du localStorage n'existe pas", () => {
    expect(localStorage.getItem('email')).toEqual(null)
  });

  it(`permit to notify call`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'permitToNotify').and.callThrough();
    app.permitToNotify();
    expect(app.permitToNotify).toHaveBeenCalled();
  });

  it(`oninit call`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'ngOnInit').and.callThrough();
    app.ngOnInit();
    expect(app.ngOnInit).toHaveBeenCalled();
  });

});
