import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { ModalValidComponent } from './modal-valid/modal-valid.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from './modal-error/modal-error.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userId: string;
  userEmail: string;
  errorMessage: string = null;

  constructor(public afAuth: AngularFireAuth, private router: Router, private  modalService: NgbModal) { }

  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // window.alert("You have been successfully registered!");
        // console.log(result.user)
        this.modalService.open(
          ModalValidComponent,
          {
            ariaLabelledBy: 'modal-body',
            size: 'sm',
            windowClass: 'lgModal',
          }
        );
      }).catch((error) => {
        const modalError = this.modalService.open(
          ModalErrorComponent,
          {
            ariaLabelledBy: 'modal-body',
            size: 'sm',
            windowClass: 'lgModal',
          }
        );
        modalError.componentInstance.errormsg = error.message;
        // window.alert(error.message)
      })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         this.router.navigate(['connected']);
        console.log('connecter')
        this.afAuth.auth.onAuthStateChanged((user) => {
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
        const modalError = this.modalService.open(
          ModalErrorComponent,
          {
            ariaLabelledBy: 'modal-body',
            size: 'sm',
            windowClass: 'lgModal',
          }
        );
        modalError.componentInstance.errormsg = error.message;
        this.errorMessage = error.message;


        // window.alert(error.message)
      })
  }

}
