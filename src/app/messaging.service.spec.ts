import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from 'src/environments/environment';
import { MessagingService } from './messaging.service';

describe('MessagingService', () => {
  let service: MessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireMessagingModule,
        AngularFireAuthModule,
       ],
      providers: [ MessagingService ],
    });
    service = TestBed.inject(MessagingService);
  });


  it('Devrait créer le component', () => {
    expect(service).toBeTruthy();
  });

  it('Devrait vérifier la fonction "receiveMessage"', () => {
    spyOn(service, 'receiveMessage').and.callThrough();
    service.receiveMessage();
    expect(service.receiveMessage).toHaveBeenCalled();
  });

  it('Devrait vérifier la fonction "requestPermission"', () => {
    spyOn(service, 'requestPermission').and.callThrough();
    service.requestPermission(1);
    expect(service.requestPermission).toHaveBeenCalled();
  });

  it('Devrait vérifier la fonction "updateToken"', () => {
    spyOn(service, 'updateToken').and.callThrough();
    service.updateToken(1,1);
    expect(service.updateToken).toHaveBeenCalled();
  });
});
