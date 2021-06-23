import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from '../modal-error/modal-error.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email: any;
  password: any;
  NewUseremail: any;
  NewUserpassword: any;
  NewSecondUserpassword: string;
  Register: boolean;



  constructor(public authenticationService: AuthenticationService, private  modalService: NgbModal) { }

  AlreadyRegister() {
    this.Register = true;
  }

  NotRegister(){
    this.Register = false;
  }
  ngOnInit(): void {
    this.Register = true;
  }

  sendNewUser(){
    if (this.NewSecondUserpassword === this.NewUserpassword) {
      this.authenticationService.SignUp(this.NewUseremail, this.NewUserpassword)
    } else {
      const modalError = this.modalService.open(
        ModalErrorComponent,
        {
          ariaLabelledBy: 'modal-body',
          size: 'sm',
          windowClass: 'lgModal',
        }
      );
      modalError.componentInstance.errormsg = " Your Password don't match";
    }

  }

  LoginUser(){
    this.authenticationService.SignIn(this.email, this.password)
    // console.log(this.authenticationService.getHResponse());
  }

}
