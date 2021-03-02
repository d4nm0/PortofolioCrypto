import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { MobilepageComponent } from './mobilepage/mobilepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CalculSeeComponent } from './calcul-see/calcul-see.component';
import { MobileLineComponent } from './mobile-line/mobile-line.component';
import { ModalSeeDetailTokenComponent } from './modal-see-detail-token/modal-see-detail-token.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessagingService } from './messaging.service';
import { AsyncPipe } from '@angular/common';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import * as firebase from 'firebase';

// export const config =  {
//   apiKey: "AIzaSyA_w5WyVEUI1oVKJ6ppMs0jpsotLTozIXM",
//   authDomain: "portofoliocrypto.firebaseapp.com",
//   databaseURL: "https://portofoliocrypto-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "portofoliocrypto",
//   storageBucket: "portofoliocrypto.appspot.com",
//   messagingSenderId: "732119440508",
//   appId: "1:732119440508:web:ac2960cfde5cefb5b33df9",
//   measurementId: "G-KX5XY1JGC1"
// };
// firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MobilepageComponent,
    LoginPageComponent,
    CalculSeeComponent,
    MobileLineComponent,
    ModalSeeDetailTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
