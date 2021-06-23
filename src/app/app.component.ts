import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagingService } from "./messaging.service"
import * as firebase from 'firebase/app';
import 'firebase/messaging';
import { environment } from 'src/environments/environment.prod';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit  {
  title = 'PortofolioCrypto';
  mobile= false;
  displayToken: string;



  constructor(private router: Router, private messagingService: MessagingService, updates: SwUpdate, push: SwPush) {
    updates.available.subscribe(_ => updates.activateUpdate().then(() => {
      console.log('reload for update');
      document.location.reload();
    }));
    push.messages.subscribe(msg => console.log('push message', msg));
    push.notificationClicks.subscribe(click => console.log('notification click', click));
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
      navigator.serviceWorker.getRegistration().then(swr => firebase.messaging().useServiceWorker(swr));
    }
  }

  ngOnInit(): void {

    if (localStorage.getItem('email')) {
      if (localStorage.getItem('email').length > 0){
        this.router.navigate(['connected']);
      } else {
        this.router.navigate(['']);
      }
    }
    this.permitToNotify();

  }

  permitToNotify() {
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyA_w5WyVEUI1oVKJ6ppMs0jpsotLTozIXM",
  //     messagingSenderId: "732119440508",
  //     appId: "1:732119440508:web:ac2960cfde5cefb5b33df9",
  //     measurementId: "G-KX5XY1JGC1"
  // };
  console.log(firebase);
  // firebase.initializeApp(firebaseConfig);
    console.log(firebase.messaging());
    const messaging = firebase.messaging();
    if (messaging) {
      messaging.requestPermission()
      .then(() => messaging.getToken().then(token => this.displayToken = token))
      .catch(err => {
        console.log('Unable to get permission to notify.', err);
      });
    }

  }
}
