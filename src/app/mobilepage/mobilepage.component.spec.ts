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

describe('MobilepageComponent', () => {
  let component: MobilepageComponent;
  let fixture: ComponentFixture<MobilepageComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table', () => {
    const fixture = TestBed.createComponent(MobilepageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it ('cryptoWallet variable is define', () => {
      expect(component.cryptoWallet).toEqual([])
    })
});
