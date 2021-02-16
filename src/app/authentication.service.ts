import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userId: string;
  userEmail: string;

  constructor(public afAuth: AngularFireAuth, private router: Router,) { }

  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user)
      }).catch((error) => {

        window.alert(error.message)
      })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         this.router.navigate(['connected']);
        console.log('connecter')
        this.afAuth.onAuthStateChanged((user) => {
          if (user) {
            // User logged in already or has just logged in.
            console.log(user);
            this.userId = user.uid;
            this.userEmail = user.email;
            localStorage.setItem("user",this.userId);
            localStorage.setItem("email",this.userEmail);
          } else {
            // User not logged in or has just logged out.
          }
        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
