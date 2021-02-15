import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

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
  Register: boolean;

  constructor(public authenticationService: AuthenticationService) { }

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
    this.authenticationService.SignUp(this.NewUseremail, this.NewUserpassword)
  }

  LoginUser(){
    this.authenticationService.SignIn(this.email, this.password)
  }

}
